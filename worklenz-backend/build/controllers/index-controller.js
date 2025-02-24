"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const file_constants_1 = tslib_1.__importDefault(require("../shared/file-constants"));
const utils_1 = require("../shared/utils");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const http_errors_1 = tslib_1.__importDefault(require("http-errors"));
class IndexController extends worklenz_controller_base_1.default {
    static use(req, res, next) {
        try {
            const url = `https://${req.hostname}${req.url}`;
            res.locals.release = file_constants_1.default.getRelease();
            res.locals.user = req.user;
            res.locals.url = url;
            res.locals.env = process.env.NODE_ENV;
            res.locals.isInternalServer = utils_1.isInternalServer;
            res.locals.isProduction = utils_1.isProduction;
        }
        catch (error) {
            console.error(error);
        }
        next();
    }
    static async index(req, res) {
        const q = `SELECT free_tier_storage, team_member_limit, projects_limit, trial_duration FROM licensing_settings;`;
        const result = await db_1.default.query(q, []);
        const [settings] = result.rows;
        res.render("index", { settings });
    }
    static pricing(req, res) {
        res.render("pricing");
    }
    static privacyPolicy(req, res) {
        res.render("privacy-policy");
    }
    static termsOfUse(req, res) {
        res.render("terms-of-use");
    }
    static admin(req, res) {
        res.render("admin");
    }
    static auth(req, res) {
        if (req.isAuthenticated())
            return res.redirect("/worklenz");
        return res.render("admin");
    }
    static worklenz(req, res) {
        if (req.isAuthenticated())
            return res.render("admin");
        if (req.user && !req.user.is_member)
            return res.redirect("/teams");
        return res.redirect("/auth");
    }
    static redirectToLogin(req, res) {
        res.redirect("/auth/login");
    }
    static async signup(req, res, next) {
        try {
            const teamMemberId = req.query.user;
            const q = `SELECT set_active_team_by_member_id($1);`;
            await db_1.default.query(q, [teamMemberId || null]);
        }
        catch (error) {
            (0, utils_1.log_error)(error, req.query);
            return next((0, http_errors_1.default)(500));
        }
        if (req.isAuthenticated())
            return res.redirect("/worklenz");
        return res.render("admin");
    }
    static async login(req, res, next) {
        try {
            const teamId = req.query.team;
            const userId = req.query.user;
            const q = `SELECT set_active_team($1, $2);`;
            await db_1.default.query(q, [userId || null, teamId || null]);
        }
        catch (error) {
            (0, utils_1.log_error)(error, req.query);
            return next((0, http_errors_1.default)(500));
        }
        if (req.isAuthenticated())
            return res.redirect("/worklenz");
        return res.render("admin");
    }
}
exports.default = IndexController;
