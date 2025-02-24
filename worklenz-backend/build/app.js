"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const http_errors_1 = tslib_1.__importDefault(require("http-errors"));
const express_1 = tslib_1.__importDefault(require("express"));
const path_1 = tslib_1.__importDefault(require("path"));
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const compression_1 = tslib_1.__importDefault(require("compression"));
const passport_1 = tslib_1.__importDefault(require("passport"));
const csurf_1 = tslib_1.__importDefault(require("csurf"));
const express_rate_limit_1 = tslib_1.__importDefault(require("express-rate-limit"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const uglify_js_1 = tslib_1.__importDefault(require("uglify-js"));
const connect_flash_1 = tslib_1.__importDefault(require("connect-flash"));
const hpp_1 = tslib_1.__importDefault(require("hpp"));
const passport_2 = tslib_1.__importDefault(require("./passport"));
const index_1 = tslib_1.__importDefault(require("./routes/index"));
const apis_1 = tslib_1.__importDefault(require("./routes/apis"));
const auth_1 = tslib_1.__importDefault(require("./routes/auth"));
const email_templates_1 = tslib_1.__importDefault(require("./routes/email-templates"));
const public_1 = tslib_1.__importDefault(require("./routes/public"));
const utils_1 = require("./shared/utils");
const session_middleware_1 = tslib_1.__importDefault(require("./middlewares/session-middleware"));
const slack_1 = require("./shared/slack");
const csp_1 = require("./shared/csp");
const safe_controller_function_1 = tslib_1.__importDefault(require("./shared/safe-controller-function"));
const aws_ses_controller_1 = tslib_1.__importDefault(require("./controllers/aws-ses-controller"));
const app = (0, express_1.default)();
app.use((0, compression_1.default)());
app.use((0, helmet_1.default)({ crossOriginResourcePolicy: false, crossOriginEmbedderPolicy: false }));
app.use((_req, res, next) => {
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.removeHeader("server");
    next();
});
function isLoggedIn(req, _res, next) {
    return req.user ? next() : next((0, http_errors_1.default)(401));
}
(0, passport_2.default)(passport_1.default);
require("pug").filters = {
    minify_js(text) {
        if (!text)
            return;
        return uglify_js_1.default.minify({ "script.js": text }).code;
    }
};
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "pug");
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ extended: false, limit: "50mb" }));
app.use((0, hpp_1.default)());
app.use((0, cookie_parser_1.default)(process.env.COOKIE_SECRET));
app.use((0, cors_1.default)({
    origin: [`https://${process.env.HOSTNAME}`],
    methods: "GET,PUT,POST,DELETE",
    preflightContinue: false,
    credentials: true
}));
app.post("/-/csp", (req, res) => {
    (0, slack_1.send_to_slack)({
        type: "⚠️ CSP Report",
        body: req.body
    });
    res.sendStatus(200);
});
app.post("/webhook/emails/bounce", (0, safe_controller_function_1.default)(aws_ses_controller_1.default.handleBounceResponse));
app.post("/webhook/emails/complaints", (0, safe_controller_function_1.default)(aws_ses_controller_1.default.handleComplaintResponse));
app.post("/webhook/emails/reply", (0, safe_controller_function_1.default)(aws_ses_controller_1.default.handleReplies));
app.use((0, connect_flash_1.default)());
app.use((0, csurf_1.default)({ cookie: true }));
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", csp_1.CSP_POLICIES);
    const token = req.csrfToken();
    res.cookie("XSRF-TOKEN", token);
    res.locals.csrf = token;
    next();
});
if ((0, utils_1.isProduction)()) {
    app.get("*.js", (req, res, next) => {
        if (req.header("Accept-Encoding")?.includes("br")) {
            req.url = `${req.url}.br`;
            res.set("Content-Encoding", "br");
            res.set("Content-Type", "application/javascript; charset=UTF-8");
        }
        else if (req.header("Accept-Encoding")?.includes("gzip")) {
            req.url = `${req.url}.gz`;
            res.set("Content-Encoding", "gzip");
            res.set("Content-Type", "application/javascript; charset=UTF-8");
        }
        next();
    });
}
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.set("trust proxy", 1);
app.use(session_middleware_1.default);
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
const apiLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 1500,
    standardHeaders: false,
    legacyHeaders: false,
});
app.use((req, res, next) => {
    const { send } = res;
    res.send = function (obj) {
        if (req.headers.accept?.includes("application/json"))
            return send.call(this, `)]}',\n${JSON.stringify(obj)}`);
        return send.call(this, obj);
    };
    next();
});
app.use("/secure", auth_1.default);
app.use("/public", public_1.default);
app.use("/api/v1", isLoggedIn, apis_1.default);
app.use("/", index_1.default);
if ((0, utils_1.isInternalServer)())
    app.use("/email-templates", email_templates_1.default);
app.use((req, res) => {
    res.locals.error_title = "404 Not Found.";
    res.locals.error_message = `The requested URL ${req.url} was not found on this server.`;
    res.locals.error_image = "/assets/images/404.webp";
    res.status(400);
    res.render("error");
});
app.use((err, _req, res) => {
    res.locals.error_title = "500 Internal Server Error.";
    res.locals.error_message = "Oops, something went wrong.";
    res.locals.error_message2 = "Try to refresh this page or feel free to contact us if the problem persists.";
    res.locals.error_image = "/assets/images/500.png";
    res.status(err.status || 500);
    res.render("error");
});
exports.default = app;
