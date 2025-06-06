"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [150],
  {
    39787: (ye, se, c) => {
      c.d(se, { l: () => Y });
      var h = c(96109),
        N = c(42840),
        e = c(62595),
        w = c(65879),
        U = c(72042),
        D = c(70855);
      let Y = (() => {
        var v;
        class T {
          constructor(X) {
            this.menu = X;
          }
        }
        return (
          ((v = T).ɵfac = function (X) {
            return new (X || v)(w.Y36(U.h));
          }),
          (v.ɵcmp = w.Xpm({
            type: v,
            selectors: [["worklenz-toggle-menu-button"]],
            inputs: { key: "key" },
            standalone: !0,
            features: [w.jDz],
            decls: 2,
            vars: 2,
            consts: [
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzShape",
                "circle",
                "nzType",
                "link",
                3,
                "nzTooltipTitle",
                "click",
              ],
              [
                "nz-icon",
                "",
                "nzType",
                "pushpin",
                1,
                "pin-button",
                3,
                "nzTheme",
              ],
            ],
            template: function (X, ee) {
              1 & X &&
                (w.TgZ(0, "button", 0),
                w.NdJ("click", function () {
                  return ee.menu.toggle(ee.key);
                }),
                w._UZ(1, "span", 1),
                w.qZA()),
                2 & X &&
                  (w.Q6J(
                    "nzTooltipTitle",
                    ee.menu.isPinned(ee.key)
                      ? "Click to unpin this from the main menu"
                      : "Click to pin this into the main menu"
                  ),
                  w.xp6(1),
                  w.Q6J(
                    "nzTheme",
                    ee.menu.isPinned(ee.key) ? "fill" : "outline"
                  ));
            },
            dependencies: [h.cg, h.SY, N.sL, N.ix, D.w, e.PV, e.Ls],
          })),
          T
        );
      })();
    },
    16150: (ye, se, c) => {
      c.r(se), c.d(se, { SettingsModule: () => go });
      var h = c(96814),
        N = c(35420),
        e = c(65879),
        w = c(32333),
        U = c(90586),
        D = c(33410),
        Y = c(26254),
        v = c(70855),
        T = c(73460);
      const re = function (i) {
          return [i];
        },
        X = function () {
          return ["ant-menu-item-selected"];
        };
      function ee(i, a) {
        if ((1 & i && e._UZ(0, "li", 7), 2 & i)) {
          const s = a.$implicit;
          e.Q6J("routerLink", e.VKq(4, re, s.url))("nzIcon", s.icon)(
            "nzTitle",
            s.label
          )("routerLinkActive", e.DdM(6, X));
        }
      }
      let ve = (() => {
        var i;
        class a {
          constructor(t, n) {
            (this.auth = t),
              (this.app = n),
              (this.navigation = []),
              this.app.setTitle("Settings");
          }
          get profile() {
            return this.auth.getCurrentSession();
          }
          ngOnInit() {
            this.buildNavigation();
          }
          isOwnerOrAdmin() {
            return this.profile?.owner || this.profile?.is_admin;
          }
          buildNavigation() {
            (this.navigation = []),
              this.navigation.push({
                label: "Profile",
                icon: "user",
                url: "profile",
              }),
              this.navigation.push({
                label: "Notifications",
                icon: "notification",
                url: "notifications",
              }),
              this.profile?.is_expired ||
                (this.isOwnerOrAdmin() &&
                  (this.navigation.push({
                    label: "Clients",
                    icon: "user-switch",
                    url: "clients",
                  }),
                  this.navigation.push({
                    label: "Job Titles",
                    icon: "idcard",
                    url: "job-titles",
                  }),
                  this.navigation.push({
                    label: "Labels",
                    icon: "tags",
                    url: "labels",
                  }),
                  this.navigation.push({
                    label: "Categories",
                    icon: "group",
                    url: "categories",
                  }),
                  this.navigation.push({
                    label: "Project Templates",
                    icon: "file-zip",
                    url: "project-templates",
                  }),
                  this.navigation.push({
                    label: "Task Templates",
                    icon: "profile",
                    url: "task-templates",
                  }),
                  this.navigation.push({
                    label: "Team Members",
                    icon: "team",
                    url: "team-members",
                  })),
                this.navigation.push({
                  label: "Teams",
                  icon: "bank",
                  url: "teams",
                })),
              this.profile?.is_google ||
                this.navigation.push({
                  label: "Change Password",
                  icon: "lock",
                  url: "password",
                }),
              this.navigation.push({
                label: "Language & Region",
                icon: "global",
                url: "language-and-region",
              });
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(e.Y36(w.e), e.Y36(U.z));
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-settings"]],
            decls: 10,
            vars: 4,
            consts: [
              [1, "container"],
              [1, "px-0", 3, "nzGhost"],
              [1, "inner-layout"],
              [3, "nzWidth"],
              ["nz-menu", "", 1, "border-0", 3, "nzMode"],
              [
                "class",
                "rounded-4",
                "nz-submenu",
                "",
                3,
                "routerLink",
                "nzIcon",
                "nzTitle",
                "routerLinkActive",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "px-4", "bg-white"],
              [
                "nz-submenu",
                "",
                1,
                "rounded-4",
                3,
                "routerLink",
                "nzIcon",
                "nzTitle",
                "routerLinkActive",
              ],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "div", 0)(1, "nz-page-header", 1)(
                  2,
                  "nz-page-header-title"
                ),
                e._uU(3, "Settings"),
                e.qZA()(),
                e.TgZ(4, "nz-layout", 2)(5, "nz-sider", 3)(6, "ul", 4),
                e.YNc(7, ee, 1, 7, "li", 5),
                e.qZA()(),
                e.TgZ(8, "nz-content", 6),
                e._UZ(9, "router-outlet"),
                e.qZA()()()),
                2 & t &&
                  (e.xp6(1),
                  e.Q6J("nzGhost", !1),
                  e.xp6(4),
                  e.Q6J("nzWidth", "240px"),
                  e.xp6(1),
                  e.Q6J("nzMode", "vertical"),
                  e.xp6(1),
                  e.Q6J("ngForOf", n.navigation));
            },
            dependencies: [
              h.sg,
              N.lC,
              N.rH,
              N.Od,
              D.hw,
              D.OK,
              D.t7,
              Y.$O,
              Y.u9,
              v.w,
              T.wO,
              T.rY,
            ],
            styles: [
              "[nz-submenu][_ngcontent-%COMP%]{transition:none!important}",
            ],
          })),
          a
        );
      })();
      var m = c(15861),
        p = c(60095),
        me = c(59556),
        b = c(69649),
        A = c(86408),
        I = c(27782),
        he = c(16849),
        Se = c(44568),
        V = c(82962),
        M = c(62595),
        Z = c(10095),
        x = c(3599),
        P = c(20824),
        O = c(42840),
        L = c(41958),
        Q = c(8083),
        J = c(96109),
        $ = c(24139),
        ge = c(34302);
      function Ue(i, a) {
        1 & i && e._UZ(0, "span", 22);
      }
      function Pe(i, a) {
        1 & i && e._UZ(0, "span", 23);
      }
      function u(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 18),
            e.YNc(1, Ue, 1, 0, "span", 19),
            e.YNc(2, Pe, 1, 0, "span", 20),
            e.TgZ(3, "div", 21),
            e._uU(4),
            e.qZA()()),
          2 & i)
        ) {
          const s = e.oxw();
          e.xp6(1),
            e.Q6J("ngIf", !s.uploading),
            e.xp6(1),
            e.Q6J("ngIf", s.uploading),
            e.xp6(2),
            e.Oqu(s.uploading ? "Uploading..." : "Upload");
        }
      }
      function g(i, a) {
        if ((1 & i && e._UZ(0, "img", 24), 2 & i)) {
          const s = e.oxw();
          e.Q6J("alt", null == s.profile ? null : s.profile.name)(
            "src",
            s.avatarUrl,
            e.LSH
          );
        }
      }
      function C(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "p", 25)(1, "small", 26),
            e.ALo(2, "date"),
            e._uU(3),
            e.ALo(4, "fromNow"),
            e.qZA()()),
          2 & i)
        ) {
          const s = e.oxw();
          e.xp6(1),
            e.s9C(
              "nzTooltipTitle",
              e.xi3(
                2,
                2,
                null == s.profile ? null : s.profile.joined_date,
                "medium"
              )
            ),
            e.xp6(2),
            e.hij(
              " Joined ",
              e.lcZ(4, 5, null == s.profile ? null : s.profile.joined_date),
              " "
            );
        }
      }
      function f(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "p", 25)(1, "small", 26),
            e.ALo(2, "date"),
            e._uU(3),
            e.ALo(4, "fromNow"),
            e.qZA()()),
          2 & i)
        ) {
          const s = e.oxw();
          e.xp6(1),
            e.s9C(
              "nzTooltipTitle",
              e.xi3(
                2,
                2,
                null == s.profile ? null : s.profile.last_updated,
                "medium"
              )
            ),
            e.xp6(2),
            e.hij(
              " Last updated ",
              e.lcZ(4, 5, null == s.profile ? null : s.profile.last_updated),
              " "
            );
        }
      }
      let F = (() => {
        var i;
        class a {
          constructor(t, n, o, r, l, d) {
            (this.fb = t),
              (this.api = n),
              (this.app = o),
              (this.auth = r),
              (this.attachmentsApi = l),
              (this.ref = d),
              (this.model = {}),
              (this.loading = !1),
              (this.updating = !1),
              (this.uploading = !1),
              (this.avatarUrl = null),
              this.app.setTitle("Profile Settings"),
              A.s.track(I.S5),
              (this.form = this.fb.group({
                name: [null, p.kI.required],
                email: [null, p.kI.required],
              })),
              (this.avatarUrl = this.profile?.avatar_url || null),
              this.form.controls.email.disable();
          }
          get profile() {
            return this.auth.getCurrentSession();
          }
          ngOnInit() {
            var t = this;
            return (0, m.Z)(function* () {
              yield t.get();
            })();
          }
          isInvalidForm() {
            return this.form.invalid;
          }
          get() {
            var t = this;
            return (0, m.Z)(function* () {
              t.loading = !0;
              try {
                const n = yield t.api.get();
                n.done &&
                  ((t.model = n.body),
                  t.form.controls.name.setValue(t.model.name),
                  t.form.controls.email.setValue(t.model.email),
                  t.profile?.is_google && t.form.controls.email.disable()),
                  (t.loading = !1);
              } catch (n) {
                (t.loading = !1), (0, b.tu)(n);
              }
            })();
          }
          submit() {
            var t = this;
            return (0, m.Z)(function* () {
              if (t.form.invalid) t.app.displayErrorsOf(t.form);
              else {
                t.updating = !0;
                try {
                  const n = { name: t.form.controls.name.value };
                  (yield t.api.update(n)).done &&
                    (A.s.track(I.AE),
                    yield t.get(),
                    yield t.auth.authorize(),
                    (0, me.Bk)()),
                    (t.updating = !1);
                } catch (n) {
                  (t.updating = !1), (0, b.tu)(n);
                }
              }
            })();
          }
          uploadFile(t) {
            var n = this;
            return (0, m.Z)(function* () {
              if (n.uploading) return;
              try {
                const r = t.files || [];
                if (!r || !r.length) return;
                const l = r[0];
                n.uploading = !0;
                const d = yield (0, b.y3)(l),
                  _ = yield n.attachmentsApi.createAvatarAttachment({
                    file: d,
                    file_name: l.name,
                    size: l.size,
                  });
                _.done &&
                  (A.s.track(I.nX),
                  yield n.auth.authorize(),
                  (0, me.hQ)(),
                  (n.avatarUrl = _.body.url)),
                  (n.uploading = !1);
              } catch {
                n.uploading = !1;
              }
              const o = new DataTransfer();
              t.files = o.files;
            })();
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(
              e.Y36(p.qu),
              e.Y36(he.G),
              e.Y36(U.z),
              e.Y36(w.e),
              e.Y36(Se.J),
              e.Y36(e.z2F)
            );
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-profile"]],
            decls: 26,
            vars: 16,
            consts: [
              [3, "nzActive", "nzLoading"],
              [1, "ant-upload-list", "ant-upload-list-picture-card", "mb-3"],
              [
                1,
                "ant-upload",
                "ant-upload-select",
                "ant-upload-select-picture-card",
                2,
                "position",
                "relative",
              ],
              [
                "tabindex",
                "0",
                "role",
                "button",
                "nz-tooltip",
                "",
                1,
                "ant-upload",
                3,
                "nzTooltipTitle",
                "click",
              ],
              [
                "type",
                "file",
                "accept",
                "image/png, image/jpg, image/jpeg",
                2,
                "display",
                "none",
                3,
                "change",
              ],
              ["fileInput", ""],
              ["class", "avatar-upload-icon", 4, "ngIf"],
              ["style", "width: 100%", 3, "alt", "src", 4, "ngIf"],
              [
                "nz-form",
                "",
                "nzLayout",
                "vertical",
                3,
                "formGroup",
                "ngSubmit",
              ],
              ["nzFor", "name", "nzRequired", ""],
              ["nzErrorTip", "Name is required!", 3, "nzSm", "nzXs"],
              ["id", "name", "nz-input", "", 3, "formControlName"],
              ["nzFor", "email", "nzRequired", ""],
              [
                "nzErrorTip",
                "The input is not valid E-mail!",
                3,
                "nzSm",
                "nzXs",
              ],
              [
                "id",
                "email",
                "nz-input",
                "",
                "readonly",
                "",
                3,
                "formControlName",
              ],
              ["nz-row", "", 1, "register-area", "mb-3"],
              [
                "nz-button",
                "",
                "nzType",
                "primary",
                3,
                "disabled",
                "nzLoading",
              ],
              [
                "class",
                "mb-0",
                "nz-typography",
                "",
                "nzType",
                "secondary",
                4,
                "ngIf",
              ],
              [1, "avatar-upload-icon"],
              [
                "nz-icon",
                "",
                "nzType",
                "plus",
                "nzTheme",
                "outline",
                4,
                "ngIf",
              ],
              [
                "nz-icon",
                "",
                "nzType",
                "loading",
                "nzTheme",
                "outline",
                4,
                "ngIf",
              ],
              [2, "margin-top", "8px"],
              ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"],
              ["nz-icon", "", "nzType", "loading", "nzTheme", "outline"],
              [2, "width", "100%", 3, "alt", "src"],
              ["nz-typography", "", "nzType", "secondary", 1, "mb-0"],
              [
                "nz-tooltip",
                "",
                "nzTooltipPlacement",
                "right",
                3,
                "nzTooltipTitle",
              ],
            ],
            template: function (t, n) {
              if (1 & t) {
                const o = e.EpF();
                e.TgZ(0, "nz-card")(1, "nz-skeleton", 0)(2, "div", 1)(
                  3,
                  "div",
                  2
                )(4, "div", 3),
                  e.NdJ("click", function () {
                    e.CHM(o);
                    const l = e.MAs(6);
                    return e.KtG(l.click());
                  }),
                  e.TgZ(5, "input", 4, 5),
                  e.NdJ("change", function () {
                    e.CHM(o);
                    const l = e.MAs(6);
                    return e.KtG(n.uploadFile(l));
                  }),
                  e.qZA(),
                  e.YNc(7, u, 5, 3, "div", 6),
                  e.YNc(8, g, 1, 2, "img", 7),
                  e.qZA()()(),
                  e.TgZ(9, "form", 8),
                  e.NdJ("ngSubmit", function () {
                    return n.submit();
                  }),
                  e.TgZ(10, "nz-form-item")(11, "nz-form-label", 9),
                  e._uU(12, "Name"),
                  e.qZA(),
                  e.TgZ(13, "nz-form-control", 10),
                  e._UZ(14, "input", 11),
                  e.qZA()(),
                  e.TgZ(15, "nz-form-item")(16, "nz-form-label", 12),
                  e._uU(17, "E-mail"),
                  e.qZA(),
                  e.TgZ(18, "nz-form-control", 13),
                  e._UZ(19, "input", 14),
                  e.qZA()(),
                  e.TgZ(20, "nz-form-item", 15)(21, "nz-form-control")(
                    22,
                    "button",
                    16
                  ),
                  e._uU(23, " Save Changes "),
                  e.qZA()()(),
                  e.YNc(24, C, 5, 7, "p", 17),
                  e.YNc(25, f, 5, 7, "p", 17),
                  e.qZA()()();
              }
              2 & t &&
                (e.xp6(1),
                e.Q6J("nzActive", !0)("nzLoading", n.loading || n.updating),
                e.xp6(3),
                e.Q6J(
                  "nzTooltipTitle",
                  n.avatarUrl
                    ? "Click to change the avatar"
                    : "Click to upload an avatar"
                ),
                e.xp6(3),
                e.Q6J("ngIf", !n.avatarUrl || n.uploading),
                e.xp6(1),
                e.Q6J("ngIf", n.avatarUrl),
                e.xp6(1),
                e.Q6J("formGroup", n.form),
                e.xp6(4),
                e.Q6J("nzSm", 14)("nzXs", 24),
                e.xp6(1),
                e.Q6J("formControlName", "name"),
                e.xp6(4),
                e.Q6J("nzSm", 14)("nzXs", 24),
                e.xp6(1),
                e.Q6J("formControlName", "email"),
                e.xp6(3),
                e.Q6J("disabled", n.isInvalidForm() || n.loading)(
                  "nzLoading",
                  n.updating
                ),
                e.xp6(2),
                e.Q6J("ngIf", null == n.profile ? null : n.profile.joined_date),
                e.xp6(1),
                e.Q6J(
                  "ngIf",
                  null == n.profile ? null : n.profile.last_updated
                ));
            },
            dependencies: [
              h.O5,
              V.bd,
              M.Ls,
              p._Y,
              p.Fj,
              p.JJ,
              p.JL,
              p.sg,
              p.u,
              Z.t3,
              Z.SK,
              x.Lr,
              x.Nx,
              x.iK,
              x.Fd,
              P.Zp,
              O.ix,
              v.w,
              L.dQ,
              Q.ZU,
              J.SY,
              $.ng,
              h.uU,
              ge.d,
            ],
            styles: [
              "[nz-form][_ngcontent-%COMP%]{max-width:600px}.avatar-upload-icon[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.6196078431)}",
            ],
          })),
          a
        );
      })();
      var pe = c(83916),
        te = c(72042),
        z = c(13740),
        fe = c(81221),
        H = c(92574),
        Me = c(39787),
        ie = c(33640);
      function Ke(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "button", 19),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw(2);
              return e.KtG(n.editTeam(n.currentTeam));
            }),
            e._UZ(1, "span", 20),
            e.qZA();
        }
      }
      function We(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "tr", 14)(1, "td"),
            e._UZ(2, "nz-badge", 15),
            e.qZA(),
            e.TgZ(3, "td"),
            e._uU(4),
            e.ALo(5, "fromNow"),
            e.qZA(),
            e.TgZ(6, "td"),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "td", 16)(9, "div", 17)(10, "nz-space"),
            e.YNc(11, Ke, 2, 0, "button", 18),
            e.qZA()()()()),
          2 & i)
        ) {
          const s = e.oxw();
          e.xp6(2),
            e.Q6J("nzText", s.currentTeam.name),
            e.xp6(2),
            e.Oqu(e.lcZ(5, 4, s.currentTeam.created_at)),
            e.xp6(3),
            e.Oqu(s.currentTeam.owns_by),
            e.xp6(4),
            e.Q6J("ngIf", s.currentTeam.owner);
        }
      }
      function Xe(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "button", 19),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw().$implicit,
                o = e.oxw();
              return e.KtG(o.editTeam(n));
            }),
            e._UZ(1, "span", 20),
            e.qZA();
        }
      }
      function et(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "tr", 14)(1, "td"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "td"),
            e._uU(4),
            e.ALo(5, "fromNow"),
            e.qZA(),
            e.TgZ(6, "td"),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "td", 16)(9, "div", 17)(10, "nz-space"),
            e.YNc(11, Xe, 2, 0, "button", 18),
            e.qZA()()()()),
          2 & i)
        ) {
          const s = a.$implicit;
          e.xp6(2),
            e.Oqu(s.name),
            e.xp6(2),
            e.Oqu(e.lcZ(5, 4, s.created_at)),
            e.xp6(3),
            e.Oqu(s.owns_by),
            e.xp6(4),
            e.Q6J("ngIf", s.owner);
        }
      }
      function tt(i, a) {
        if ((1 & i && e._UZ(0, "worklenz-toggle-menu-button", 1), 2 & i)) {
          const s = e.oxw();
          e.Q6J("key", s.menu.TEAMS_MENU);
        }
      }
      function nt(i, a) {
        1 & i &&
          (e.TgZ(0, "div", 21)(1, "div", 22),
          e._UZ(2, "img", 23),
          e.qZA(),
          e.TgZ(3, "span", 24),
          e._uU(4, "No teams found."),
          e.qZA()());
      }
      function it(i, a) {}
      function st(i, a) {
        if (
          (1 & i &&
            (e.ynx(0),
            e.TgZ(1, "form", 25)(2, "nz-form-item")(3, "nz-form-label", 26),
            e._uU(4, "Name"),
            e.qZA(),
            e.TgZ(5, "nz-form-control", 27),
            e._UZ(6, "input", 28),
            e.qZA()()(),
            e.BQk()),
          2 & i)
        ) {
          const s = e.oxw();
          e.xp6(1),
            e.Q6J("formGroup", s.form)("nzLayout", "vertical"),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(1),
            e.Q6J("formControlName", "name");
        }
      }
      const ot = function () {
        return { rows: 5 };
      };
      let at = (() => {
        var i;
        class a {
          constructor(t, n, o, r, l, d) {
            (this.teamsApi = t),
              (this.settingsApi = n),
              (this.fb = o),
              (this.app = r),
              (this.menu = l),
              (this.auth = d),
              (this.teams = []),
              (this.currentTeam = null),
              (this.loading = !1),
              (this.updating = !1),
              (this.showTeamEditModal = !1),
              (this.editingTeamId = null),
              this.app.setTitle("Teams"),
              A.s.track(I.jD),
              (this.form = this.fb.group({ name: [null, p.kI.required] }));
          }
          ngOnInit() {
            this.getTeams();
          }
          getTeams() {
            var t = this;
            return (0, m.Z)(function* () {
              try {
                t.loading = !0;
                const n = yield t.teamsApi.get();
                n.done &&
                  ((t.teams = n.body.filter(
                    (o) => o.id !== t.auth.getCurrentSession()?.team_id
                  )),
                  (t.currentTeam = n.body.filter(
                    (o) => o.id === t.auth.getCurrentSession()?.team_id
                  )[0])),
                  (t.loading = !1);
              } catch (n) {
                (t.loading = !1), (0, b.tu)(n);
              }
            })();
          }
          updateTeamName(t, n) {
            var o = this;
            return (0, m.Z)(function* () {
              try {
                if (!t || !n) return;
                (o.updating = !0),
                  (yield o.settingsApi.updateTeamName(t, { name: n })).done
                    ? window.location.reload()
                    : (o.updating = !1);
              } catch (r) {
                (o.updating = !1), (0, b.tu)(r);
              }
            })();
          }
          closeModal() {
            (this.showTeamEditModal = !1),
              (this.editingTeamId = null),
              this.form.reset();
          }
          handleOk() {
            var t = this;
            return (0, m.Z)(function* () {
              t.form.valid &&
                t.editingTeamId &&
                (yield t.updateTeamName(
                  t.editingTeamId,
                  t.form.controls.name.value
                ));
            })();
          }
          editTeam(t) {
            !t ||
              !t.id ||
              ((this.showTeamEditModal = !0),
              (this.editingTeamId = t.id),
              this.form.controls.name.setValue(t.name));
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(
              e.Y36(pe.S),
              e.Y36(he.G),
              e.Y36(p.qu),
              e.Y36(U.z),
              e.Y36(te.h),
              e.Y36(w.e)
            );
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-teams"]],
            decls: 28,
            vars: 14,
            consts: [
              [1, "px-0", 3, "nzGhost"],
              [3, "key"],
              [3, "nzActive", "nzLoading", "nzParagraph"],
              [
                "nzPaginationType",
                "small",
                "nzSize",
                "small",
                1,
                "custom-table",
                3,
                "nzData",
                "nzLoading",
                "nzNoResult",
              ],
              ["table", ""],
              ["scope", "col"],
              ["colspan", "2", "nzAlign", "left", "scope", "col"],
              ["class", "actions-row", 4, "ngIf"],
              ["class", "actions-row", 4, "ngFor", "ngForOf"],
              ["actionsTemplate", ""],
              ["noDataTemplate", ""],
              ["noDataTemplate1", ""],
              [
                "nzOkText",
                "Update Name",
                "nzTitle",
                "Edit Team Name",
                3,
                "nzVisible",
                "nzOkLoading",
                "nzOnCancel",
                "nzOnOk",
                "nzVisibleChange",
              ],
              [4, "nzModalContent"],
              [1, "actions-row"],
              ["nzColor", "#52c41a", 3, "nzText"],
              ["nzAlign", "center", 1, "actions-col"],
              [1, "actions"],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzSize",
                "small",
                "nzTooltipPlacement",
                "top",
                "nzTooltipTitle",
                "Edit",
                "nzType",
                "default",
                3,
                "click",
                4,
                "ngIf",
              ],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzSize",
                "small",
                "nzTooltipPlacement",
                "top",
                "nzTooltipTitle",
                "Edit",
                "nzType",
                "default",
                3,
                "click",
              ],
              ["nz-icon", "", "nzType", "edit"],
              [1, "pt-4", "pb-5"],
              [1, "no-data-img-holder", "mx-auto", "mb-3"],
              [
                "src",
                "/assets/images/empty-box.webp",
                "alt",
                "",
                1,
                "img-fluid",
              ],
              ["nz-typography", "", 1, "no-data-text"],
              ["nz-form", "", 3, "formGroup", "nzLayout"],
              ["nzRequired", "", 3, "nzSpan"],
              ["nzErrorTip", "Please enter a name!", 3, "nzSpan"],
              ["nz-input", "", "placeholder", "Name", 3, "formControlName"],
            ],
            template: function (t, n) {
              if (
                (1 & t &&
                  (e.TgZ(0, "nz-page-header", 0)(1, "nz-page-header-title"),
                  e._uU(2),
                  e.qZA(),
                  e.TgZ(3, "nz-page-header-extra"),
                  e._UZ(4, "worklenz-toggle-menu-button", 1),
                  e.qZA()(),
                  e.TgZ(5, "nz-card")(6, "nz-skeleton", 2)(7, "nz-table", 3, 4)(
                    9,
                    "thead"
                  )(10, "tr")(11, "th", 5),
                  e._uU(12, "Name"),
                  e.qZA(),
                  e.TgZ(13, "th", 5),
                  e._uU(14, "Created"),
                  e.qZA(),
                  e.TgZ(15, "th", 6),
                  e._uU(16, "Owns By"),
                  e.qZA()()(),
                  e.TgZ(17, "tbody"),
                  e.YNc(18, We, 12, 6, "tr", 7),
                  e.YNc(19, et, 12, 6, "tr", 8),
                  e.qZA()()()(),
                  e.YNc(20, tt, 1, 1, "ng-template", null, 9, e.W1O),
                  e.YNc(22, nt, 5, 0, "ng-template", null, 10, e.W1O),
                  e.YNc(24, it, 0, 0, "ng-template", null, 11, e.W1O),
                  e.TgZ(26, "nz-modal", 12),
                  e.NdJ("nzOnCancel", function () {
                    return n.closeModal();
                  })("nzOnOk", function () {
                    return n.handleOk();
                  })("nzVisibleChange", function (r) {
                    return (n.showTeamEditModal = r);
                  }),
                  e.YNc(27, st, 7, 5, "ng-container", 13),
                  e.qZA()),
                2 & t)
              ) {
                const o = e.MAs(8),
                  r = e.MAs(23),
                  l = e.MAs(25);
                e.Q6J("nzGhost", !1),
                  e.xp6(2),
                  e.hij("", n.teams.length ? n.teams.length + 1 : 0, " Teams"),
                  e.xp6(2),
                  e.Q6J("key", n.menu.TEAMS_MENU),
                  e.xp6(2),
                  e.Q6J("nzActive", !0)("nzLoading", n.loading)(
                    "nzParagraph",
                    e.DdM(13, ot)
                  ),
                  e.xp6(1),
                  e.Q6J("nzData", n.teams)("nzLoading", n.loading)(
                    "nzNoResult",
                    n.currentTeam ? l : r
                  ),
                  e.xp6(11),
                  e.Q6J("ngIf", n.currentTeam),
                  e.xp6(1),
                  e.Q6J("ngForOf", o.data),
                  e.xp6(7),
                  e.Q6J("nzVisible", n.showTeamEditModal)(
                    "nzOkLoading",
                    n.updating
                  );
              }
            },
            dependencies: [
              h.sg,
              h.O5,
              V.bd,
              Y.$O,
              Y.u9,
              Y.Jp,
              M.Ls,
              p._Y,
              p.Fj,
              p.JJ,
              p.JL,
              p.sg,
              p.u,
              Z.t3,
              Z.SK,
              x.Lr,
              x.Nx,
              x.iK,
              x.Fd,
              P.Zp,
              O.ix,
              v.w,
              L.dQ,
              z.N8,
              z.Uo,
              z._C,
              z.Om,
              z.p0,
              z.$Z,
              z.UX,
              fe.du,
              fe.Hf,
              Q.ZU,
              H.NU,
              J.SY,
              $.ng,
              Me.l,
              ie.x7,
              ge.d,
            ],
            styles: [
              ".no-data-img-holder[_ngcontent-%COMP%]{width:100px;margin-top:42px}",
            ],
          })),
          a
        );
      })();
      var j = c(21406),
        le = c(26857),
        ce = c(69862);
      let rt = (() => {
        var i;
        class a extends le.P {
          constructor(t) {
            super(), (this.http = t);
          }
          changePassword(t) {
            return this._post(
              this.http,
              `${this.API_BASE_URL}/change-password`,
              t
            );
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(e.LFG(ce.eN));
          }),
          (i.ɵprov = e.Yz7({ token: i, factory: i.ɵfac, providedIn: "root" })),
          a
        );
      })();
      function lt(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "span", 15),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG((n.oldPasswordVisible = !n.oldPasswordVisible));
            }),
            e.qZA();
        }
        if (2 & i) {
          const s = e.oxw();
          e.Q6J("nzType", s.oldPasswordVisible ? "eye-invisible" : "eye");
        }
      }
      function ct(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "span", 15),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG((n.newPasswordVisible = !n.newPasswordVisible));
            }),
            e.qZA();
        }
        if (2 & i) {
          const s = e.oxw();
          e.Q6J("nzType", s.newPasswordVisible ? "eye-invisible" : "eye");
        }
      }
      function pt(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "span", 15),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(
                (n.confirmPasswordVisible = !n.confirmPasswordVisible)
              );
            }),
            e.qZA();
        }
        if (2 & i) {
          const s = e.oxw();
          e.Q6J("nzType", s.confirmPasswordVisible ? "eye-invisible" : "eye");
        }
      }
      let dt = (() => {
        var i;
        class a {
          constructor(t, n, o) {
            (this.usersService = t),
              (this.fb = n),
              (this.app = o),
              (this.oldPasswordVisible = !1),
              (this.newPasswordVisible = !1),
              (this.confirmPasswordVisible = !1),
              (this.showTaskModal = !1),
              (this.loading = !1),
              (this.passwordPolicy = j.QW),
              this.app.setTitle("Change Password"),
              A.s.track(I.yv),
              (this.passwordChangeForm = this.fb.group(
                {
                  password: [null, [p.kI.required]],
                  new_password: [null, [p.kI.required]],
                  confirm_password: [null, [p.kI.required]],
                },
                { validators: [this.confirmPasswordsValidator] }
              ));
          }
          confirmPasswordsValidator(t) {
            return (0, m.Z)(function* () {
              return t.controls.confirm_password.value !==
                t.controls.new_password.value
                ? t.controls.confirm_password.setErrors({
                    passwordMismatch: !0,
                  })
                : t.controls.confirm_password;
            })();
          }
          submitForm() {
            var t = this;
            return (0, m.Z)(function* () {
              const n = {
                password: t.passwordChangeForm.value.password,
                new_password: t.passwordChangeForm.value.new_password,
                confirm_password: t.passwordChangeForm.value.confirm_password,
              };
              n.password &&
                n.new_password &&
                n.confirm_password &&
                (t.passwordChangeForm.setErrors({ invalid: !1 }),
                (yield t.usersService.changePassword(n)).done &&
                  (t.passwordChangeForm.reset(), (t.showTaskModal = !1)));
            })();
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(e.Y36(rt), e.Y36(p.qu), e.Y36(U.z));
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-change-password"]],
            decls: 35,
            vars: 26,
            consts: [
              ["nz-form", "", 3, "formGroup", "nzLayout", "submit"],
              [3, "nzSm", "nzXs", "nzErrorTip"],
              ["nzRequired", ""],
              [3, "nzSuffix"],
              [
                "autocomplete",
                "off",
                "nz-input",
                "",
                "placeholder",
                "Enter your current password",
                3,
                "type",
                "formControlName",
              ],
              ["suffixTemplateOld", ""],
              [
                "autocomplete",
                "off",
                "nz-input",
                "",
                "placeholder",
                "New Password",
                3,
                "type",
                "formControlName",
              ],
              ["suffixTemplateNew", ""],
              [1, "mb-2"],
              [3, "nzErrorTip", "nzSm", "nzXs"],
              [
                "autocomplete",
                "off",
                "nz-input",
                "",
                "placeholder",
                "Confirm New Password",
                3,
                "type",
                "formControlName",
              ],
              ["suffixTemplateConfirm", ""],
              [3, "nzSm", "nzXs"],
              [
                "nz-typography",
                "",
                1,
                "d-block",
                2,
                "font-size",
                "12px",
                3,
                "nzType",
              ],
              ["nz-button", "", "nzType", "primary", "type", "submit"],
              ["nz-icon", "", 3, "nzType", "click"],
            ],
            template: function (t, n) {
              if (
                (1 & t &&
                  (e.TgZ(0, "nz-card")(1, "form", 0),
                  e.NdJ("submit", function () {
                    return n.submitForm();
                  }),
                  e.TgZ(2, "nz-form-item")(3, "nz-form-control", 1)(
                    4,
                    "nz-form-label",
                    2
                  ),
                  e._uU(5, "Current Password"),
                  e.qZA(),
                  e.TgZ(6, "nz-input-group", 3),
                  e._UZ(7, "input", 4),
                  e.qZA(),
                  e.YNc(8, lt, 1, 1, "ng-template", null, 5, e.W1O),
                  e.qZA()(),
                  e.TgZ(10, "nz-form-item")(11, "nz-form-control", 1)(
                    12,
                    "nz-form-label",
                    2
                  ),
                  e._uU(13, "New Password"),
                  e.qZA(),
                  e.TgZ(14, "nz-input-group", 3),
                  e._UZ(15, "input", 6),
                  e.qZA(),
                  e.YNc(16, ct, 1, 1, "ng-template", null, 7, e.W1O),
                  e.qZA()(),
                  e.TgZ(18, "nz-form-item", 8)(19, "nz-form-control", 9)(
                    20,
                    "nz-form-label",
                    2
                  ),
                  e._uU(21, "Confirm New Password"),
                  e.qZA(),
                  e.TgZ(22, "nz-input-group", 3),
                  e._UZ(23, "input", 10),
                  e.qZA(),
                  e.YNc(24, pt, 1, 1, "ng-template", null, 11, e.W1O),
                  e.qZA()(),
                  e.TgZ(26, "nz-form-item", 8)(27, "nz-form-control", 12)(
                    28,
                    "span",
                    13
                  ),
                  e._uU(29),
                  e.ALo(30, "lowercase"),
                  e.qZA()()(),
                  e.TgZ(31, "nz-form-item")(32, "nz-form-control")(
                    33,
                    "button",
                    14
                  ),
                  e._uU(34, " Update "),
                  e.qZA()()()()()),
                2 & t)
              ) {
                const o = e.MAs(9),
                  r = e.MAs(17),
                  l = e.MAs(25);
                let d;
                e.xp6(1),
                  e.Q6J("formGroup", n.passwordChangeForm)(
                    "nzLayout",
                    "vertical"
                  ),
                  e.xp6(2),
                  e.Q6J("nzSm", 14)("nzXs", 24)(
                    "nzErrorTip",
                    "Please input your old password!"
                  ),
                  e.xp6(3),
                  e.Q6J("nzSuffix", o),
                  e.xp6(1),
                  e.Q6J("type", n.oldPasswordVisible ? "text" : "password")(
                    "formControlName",
                    "password"
                  ),
                  e.xp6(4),
                  e.Q6J("nzSm", 14)("nzXs", 24)(
                    "nzErrorTip",
                    "Please input your new password!"
                  ),
                  e.xp6(3),
                  e.Q6J("nzSuffix", r),
                  e.xp6(1),
                  e.Q6J("type", n.newPasswordVisible ? "text" : "password")(
                    "formControlName",
                    "new_password"
                  ),
                  e.xp6(4),
                  e.Q6J(
                    "nzErrorTip",
                    null !=
                      (d = n.passwordChangeForm.get("confirm_password")) &&
                      d.hasError("passwordMismatch")
                      ? "Passwords do not match!"
                      : "Please confirm your new password!"
                  )("nzSm", 14)("nzXs", 24),
                  e.xp6(3),
                  e.Q6J("nzSuffix", l),
                  e.xp6(1),
                  e.Q6J("type", n.confirmPasswordVisible ? "text" : "password")(
                    "formControlName",
                    "confirm_password"
                  ),
                  e.xp6(4),
                  e.Q6J("nzSm", 14)("nzXs", 24),
                  e.xp6(1),
                  e.Q6J("nzType", "secondary"),
                  e.xp6(1),
                  e.hij(
                    "New password should be ",
                    e.lcZ(30, 24, n.passwordPolicy),
                    ""
                  );
              }
            },
            dependencies: [
              V.bd,
              M.Ls,
              p._Y,
              p.Fj,
              p.JJ,
              p.JL,
              p.sg,
              p.u,
              Z.t3,
              Z.SK,
              x.Lr,
              x.Nx,
              x.iK,
              x.Fd,
              P.Zp,
              P.gB,
              P.ke,
              O.ix,
              v.w,
              L.dQ,
              Q.ZU,
              h.i8,
            ],
            styles: ["[nz-form][_ngcontent-%COMP%]{max-width:600px}"],
          })),
          a
        );
      })();
      var oe = c(59780);
      let ut = (() => {
          var i;
          class a {
            constructor(t, n) {
              (this.auth = t), (this.router = n);
            }
            canActivate(t, n) {
              return (
                !this.auth.getCurrentSession()?.is_google ||
                this.router.navigate(["/worklenz"])
              );
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)(e.LFG(w.e), e.LFG(N.F0));
            }),
            (i.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            a
          );
        })(),
        mt = (() => {
          var i;
          class a extends le.P {
            constructor(t) {
              super(),
                (this.http = t),
                (this.root = `${this.API_BASE_URL}/timezones`);
            }
            update(t) {
              return this._put(this.http, this.root, t);
            }
            get() {
              return this._get(this.http, this.root);
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)(e.LFG(ce.eN));
            }),
            (i.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            a
          );
        })();
      var K = c(9691);
      function ht(i, a) {
        if ((1 & i && (e.TgZ(0, "nz-option", 9), e._uU(1), e.qZA()), 2 & i)) {
          const s = a.$implicit;
          e.Q6J("nzLabel", s)("nzValue", s), e.xp6(1), e.hij(" ", s, " ");
        }
      }
      function gt(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "nz-option", 9)(1, "div", 10)(2, "span"),
            e._uU(3),
            e.qZA(),
            e.TgZ(4, "span", 11),
            e._uU(5),
            e.qZA()()()),
          2 & i)
        ) {
          const s = a.$implicit;
          e.s9C("nzLabel", s.name),
            e.Q6J("nzValue", s.id),
            e.xp6(3),
            e.Oqu(s.name),
            e.xp6(2),
            e.Oqu(s.abbrev);
        }
      }
      let ft = (() => {
        var i;
        class a {
          constructor(t, n, o, r) {
            (this.app = t),
              (this.api = n),
              (this.fb = o),
              (this.auth = r),
              (this.loading = !1),
              (this.updating = !1),
              (this.options = ["English"]),
              (this.timezones = []),
              this.app.setTitle("Language & Region"),
              A.s.track(I.xH);
            const l = this.auth.getCurrentSession();
            this.form = this.fb.group({
              language: ["English", p.kI.required],
              timezone: [l?.timezone || null, p.kI.required],
            });
          }
          ngOnInit() {
            this.get();
          }
          submit() {
            var t = this;
            return (0, m.Z)(function* () {
              if (t.form.invalid) return t.app.displayErrorsOf(t.form);
              try {
                (t.updating = !0),
                  (yield t.api.update(t.form.value)).done &&
                    (yield t.auth.authorize()),
                  (t.updating = !1);
              } catch {
                t.updating = !1;
              }
            })();
          }
          get() {
            var t = this;
            return (0, m.Z)(function* () {
              try {
                t.loading = !0;
                const n = yield t.api.get();
                n.done && (t.timezones = n.body), (t.loading = !1);
              } catch {
                t.loading = !1;
              }
            })();
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(e.Y36(U.z), e.Y36(mt), e.Y36(p.qu), e.Y36(w.e));
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-language-and-region"]],
            decls: 19,
            vars: 13,
            consts: [
              [3, "nzActive", "nzLoading"],
              [
                "nz-form",
                "",
                "nzLayout",
                "vertical",
                3,
                "formGroup",
                "ngSubmit",
              ],
              ["nzFor", "name", "nzRequired", ""],
              [3, "nzSm", "nzXs"],
              [3, "formControlName"],
              [
                "nzCustomContent",
                "",
                3,
                "nzLabel",
                "nzValue",
                4,
                "ngFor",
                "ngForOf",
              ],
              ["nzShowSearch", "", 3, "formControlName"],
              ["nz-row", "", 1, "register-area"],
              [
                "nz-button",
                "",
                "nzType",
                "primary",
                3,
                "disabled",
                "nzLoading",
              ],
              ["nzCustomContent", "", 3, "nzLabel", "nzValue"],
              [1, "d-flex", "justify-content-between"],
              ["nz-typography", "", "nzType", "secondary"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "nz-card")(1, "nz-skeleton", 0)(2, "form", 1),
                e.NdJ("ngSubmit", function () {
                  return n.submit();
                }),
                e.TgZ(3, "nz-form-item")(4, "nz-form-label", 2),
                e._uU(5, "Language"),
                e.qZA(),
                e.TgZ(6, "nz-form-control", 3)(7, "nz-select", 4),
                e.YNc(8, ht, 2, 3, "nz-option", 5),
                e.qZA()()(),
                e.TgZ(9, "nz-form-item")(10, "nz-form-label", 2),
                e._uU(11, "Time zone"),
                e.qZA(),
                e.TgZ(12, "nz-form-control", 3)(13, "nz-select", 6),
                e.YNc(14, gt, 6, 4, "nz-option", 5),
                e.qZA()()(),
                e.TgZ(15, "nz-form-item", 7)(16, "nz-form-control")(
                  17,
                  "button",
                  8
                ),
                e._uU(18, " Save Changes "),
                e.qZA()()()()()()),
                2 & t &&
                  (e.xp6(1),
                  e.Q6J("nzActive", !0)("nzLoading", n.loading || n.updating),
                  e.xp6(1),
                  e.Q6J("formGroup", n.form),
                  e.xp6(4),
                  e.Q6J("nzSm", 8)("nzXs", 24),
                  e.xp6(1),
                  e.Q6J("formControlName", "language"),
                  e.xp6(1),
                  e.Q6J("ngForOf", n.options),
                  e.xp6(4),
                  e.Q6J("nzSm", 8)("nzXs", 24),
                  e.xp6(1),
                  e.Q6J("formControlName", "timezone"),
                  e.xp6(1),
                  e.Q6J("ngForOf", n.timezones),
                  e.xp6(3),
                  e.Q6J("disabled", n.loading)("nzLoading", n.updating));
            },
            dependencies: [
              h.sg,
              V.bd,
              p._Y,
              p.JJ,
              p.JL,
              p.sg,
              p.u,
              Z.t3,
              Z.SK,
              x.Lr,
              x.Nx,
              x.iK,
              x.Fd,
              O.ix,
              v.w,
              L.dQ,
              Q.ZU,
              $.ng,
              K.Ip,
              K.Vq,
            ],
          })),
          a
        );
      })();
      var zt = c(8725),
        Oe = c(9172),
        E = c(62787),
        ze = c(55695),
        Te = c(19035);
      function Tt(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "li", 17),
            e.NdJ("click", function () {
              const o = e.CHM(s).$implicit,
                r = e.oxw().$implicit,
                l = e.oxw();
              return e.KtG(l.updateColorCode(r.id, o));
            }),
            e.TgZ(1, "nz-tag", 18),
            e._uU(2),
            e.qZA()();
        }
        if (2 & i) {
          const s = a.$implicit,
            t = e.oxw().$implicit,
            n = e.oxw();
          e.xp6(1), e.Q6J("nzColor", s + n.alpha), e.xp6(1), e.Oqu(t.name);
        }
      }
      function Ct(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "tr", 8)(1, "td")(2, "nz-tag", 9),
            e._uU(3),
            e.qZA(),
            e.TgZ(4, "nz-dropdown-menu", null, 10)(6, "ul", 11),
            e.YNc(7, Tt, 3, 2, "li", 12),
            e.qZA()()(),
            e.TgZ(8, "td"),
            e._uU(9),
            e.qZA(),
            e.TgZ(10, "td", 13)(11, "div", 14)(12, "nz-space")(
              13,
              "button",
              15
            ),
            e.NdJ("nzOnConfirm", function () {
              const o = e.CHM(s).$implicit,
                r = e.oxw();
              return e.KtG(r.deleteLabel(o));
            }),
            e._UZ(14, "span", 16),
            e.qZA()()()()();
        }
        if (2 & i) {
          const s = a.$implicit,
            t = e.MAs(5),
            n = e.oxw();
          e.xp6(2),
            e.Q6J("nzColor", s.color_code + n.alpha)("nzDropdownMenu", t)(
              "nzTooltipTitle",
              "Click to change color"
            )("nzTrigger", "click"),
            e.xp6(1),
            e.Oqu(s.name),
            e.xp6(4),
            e.Q6J("ngForOf", n.colorCodes),
            e.xp6(2),
            e.Oqu(s.usage),
            e.xp6(4),
            e.Q6J("nzOkText", "Yes")("nzPopconfirmTitle", "Are you sure?")(
              "nzSize",
              "small"
            )("nzTooltipPlacement", "top")("nzTooltipTitle", "Delete")(
              "nzType",
              "default"
            );
        }
      }
      function kt(i, a) {
        1 & i && e._UZ(0, "span", 25);
      }
      function xt(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "form", 21)(1, "nz-input-group", 22)(2, "input", 23),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(s);
              const o = e.oxw(2);
              return e.KtG((o.labelsSearch = n));
            })("ngModelChange", function (n) {
              e.CHM(s);
              const o = e.oxw(2);
              return e.KtG(o.searchLabels(n));
            }),
            e.qZA()(),
            e.YNc(3, kt, 1, 0, "ng-template", null, 24, e.W1O),
            e.qZA();
        }
        if (2 & i) {
          const s = e.MAs(4),
            t = e.oxw(2);
          e.Q6J("nzLayout", "vertical"),
            e.xp6(1),
            e.Q6J("nzSuffix", s),
            e.xp6(1),
            e.Q6J("ngModel", t.labelsSearch);
        }
      }
      function bt(i, a) {
        if ((1 & i && e._UZ(0, "worklenz-toggle-menu-button", 26), 2 & i)) {
          const s = e.oxw(2);
          e.Q6J("key", s.menu.LABELS_MENU);
        }
      }
      function vt(i, a) {
        1 & i &&
          (e.TgZ(0, "nz-space"),
          e.YNc(1, xt, 5, 3, "form", 19),
          e.YNc(2, bt, 1, 1, "worklenz-toggle-menu-button", 20),
          e.qZA());
      }
      const wt = function () {
        return { rows: 5 };
      };
      let yt = (() => {
        var i;
        class a {
          constructor(t, n, o, r, l) {
            (this.app = t),
              (this.api = n),
              (this.searchPipe = o),
              (this.cdr = r),
              (this.menu = l),
              (this.colorCodes = j.lD),
              (this.labels = []),
              (this.filteredLabels = []),
              (this.loading = !1),
              (this.alpha = j.Yj),
              (this.labelsSearch = null),
              this.app.setTitle("Manage Labels"),
              A.s.track(I.Hw);
          }
          ngOnInit() {
            this.get();
          }
          trackByFn(t, n) {
            return n.id;
          }
          get() {
            var t = this;
            return (0, m.Z)(function* () {
              try {
                t.loading = !0;
                const n = yield t.api.get();
                n.done && ((t.labels = n.body), (t.filteredLabels = t.labels)),
                  (t.loading = !1);
              } catch (n) {
                (t.loading = !1), (0, b.tu)(n);
              }
              t.cdr.detectChanges();
            })();
          }
          deleteLabel(t) {
            var n = this;
            return (0, m.Z)(function* () {
              if (t?.id) {
                try {
                  (n.loading = !0),
                    (yield n.api.deleteById(t.id)).done &&
                      (A.s.track(I.aJ), n.get()),
                    (n.loading = !1);
                } catch (o) {
                  (n.loading = !1), (0, b.tu)(o);
                }
                n.cdr.detectChanges();
              }
            })();
          }
          updateColorCode(t, n) {
            var o = this;
            return (0, m.Z)(function* () {
              if (t && n)
                try {
                  if ((yield o.api.updateColor(t, n)).done) {
                    const l = o.labels.find((d) => d.id === t);
                    l && (l.color_code = n), o.cdr.markForCheck();
                  }
                } catch (r) {
                  (0, b.tu)(r);
                }
            })();
          }
          searchLabels(t) {
            (this.filteredLabels = this.searchPipe.transform(
              this.labels,
              t || null
            )),
              this.cdr.markForCheck();
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(
              e.Y36(U.z),
              e.Y36(zt.u),
              e.Y36(Oe.g),
              e.Y36(e.sBO),
              e.Y36(te.h)
            );
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-labels"]],
            decls: 14,
            vars: 11,
            consts: [
              [3, "nzExtra"],
              [3, "nzActive", "nzLoading", "nzParagraph"],
              [
                "nzPaginationType",
                "small",
                "nzSize",
                "small",
                1,
                "custom-table",
                3,
                "nzData",
                "nzLoading",
                "nzNoResult",
              ],
              ["table", ""],
              ["scope", "col", "nzAlign", "left", 3, "nzWidth"],
              ["scope", "col", "nzAlign", "left", "colspan", "2"],
              ["class", "actions-row", 4, "ngFor", "ngForOf", "ngForTrackBy"],
              ["actionsTemplate", ""],
              [1, "actions-row"],
              [
                "nz-dropdown",
                "",
                "nz-tooltip",
                "",
                1,
                "text-dark",
                "m-0",
                2,
                "cursor",
                "pointer",
                3,
                "nzColor",
                "nzDropdownMenu",
                "nzTooltipTitle",
                "nzTrigger",
              ],
              ["colorDropdown", "nzDropdownMenu"],
              [
                "nz-menu",
                "",
                "nzSelectable",
                "",
                2,
                "max-height",
                "200px",
                "overflow",
                "hidden",
                "overflow-y",
                "auto",
              ],
              ["nz-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"],
              ["nzAlign", "center", 1, "actions-col"],
              [1, "actions"],
              [
                "nz-button",
                "",
                "nz-popconfirm",
                "",
                "nz-tooltip",
                "",
                3,
                "nzOkText",
                "nzPopconfirmTitle",
                "nzSize",
                "nzTooltipPlacement",
                "nzTooltipTitle",
                "nzType",
                "nzOnConfirm",
              ],
              ["nz-icon", "", "nzType", "delete"],
              ["nz-menu-item", "", 3, "click"],
              [1, "text-dark", "m-0", "w-100", 3, "nzColor"],
              ["nz-form", "", 3, "nzLayout", 4, "nzSpaceItem"],
              [3, "key", 4, "nzSpaceItem"],
              ["nz-form", "", 3, "nzLayout"],
              [3, "nzSuffix"],
              [
                "nz-input",
                "",
                "name",
                "search",
                "placeholder",
                "Buscar por Nombre",
                "type",
                "text",
                3,
                "ngModel",
                "ngModelChange",
              ],
              ["suffixIconSearch", ""],
              ["nz-icon", "", "nzType", "search"],
              [3, "key"],
            ],
            template: function (t, n) {
              if (
                (1 & t &&
                  (e.TgZ(0, "nz-card", 0)(1, "nz-skeleton", 1)(
                    2,
                    "nz-table",
                    2,
                    3
                  )(4, "thead")(5, "tr")(6, "th", 4),
                  e._uU(7, "Label"),
                  e.qZA(),
                  e.TgZ(8, "th", 5),
                  e._uU(9, "Associated tasks"),
                  e.qZA()()(),
                  e.TgZ(10, "tbody"),
                  e.YNc(11, Ct, 15, 13, "tr", 6),
                  e.qZA()()()(),
                  e.YNc(12, vt, 3, 0, "ng-template", null, 7, e.W1O)),
                2 & t)
              ) {
                const o = e.MAs(3),
                  r = e.MAs(13);
                e.Q6J("nzExtra", r),
                  e.xp6(1),
                  e.Q6J("nzActive", !0)("nzLoading", n.loading)(
                    "nzParagraph",
                    e.DdM(10, wt)
                  ),
                  e.xp6(1),
                  e.Q6J("nzData", n.filteredLabels)("nzLoading", n.loading)(
                    "nzNoResult",
                    "Labels can be created while updating or creating tasks."
                  ),
                  e.xp6(4),
                  e.Q6J("nzWidth", "300px"),
                  e.xp6(5),
                  e.Q6J("ngForOf", o.data)("ngForTrackBy", n.trackByFn);
              }
            },
            dependencies: [
              h.sg,
              V.bd,
              M.Ls,
              p._Y,
              p.Fj,
              p.JJ,
              p.JL,
              x.Lr,
              P.Zp,
              P.gB,
              P.ke,
              O.ix,
              v.w,
              L.dQ,
              z.N8,
              z.Uo,
              z._C,
              z.Om,
              z.p0,
              z.$Z,
              z.UX,
              T.wO,
              T.r9,
              H.NU,
              H.$1,
              J.SY,
              $.ng,
              p.On,
              p.F,
              Me.l,
              E.cm,
              E.RR,
              ze.j,
              Te.JW,
            ],
            changeDetection: 0,
          })),
          a
        );
      })();
      var St = c(82803),
        Je = c(55522);
      function Pt(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "button", 12),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw().$implicit,
                o = e.oxw();
              return e.KtG(o.editTemplate(n.id));
            }),
            e._UZ(1, "span", 13),
            e.qZA();
        }
      }
      function Mt(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "button", 14),
            e.NdJ("nzOnConfirm", function () {
              e.CHM(s);
              const n = e.oxw().$implicit,
                o = e.oxw();
              return e.KtG(o.deleteTemplate(n.id));
            }),
            e._UZ(1, "span", 15),
            e.qZA();
        }
      }
      function Ot(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "tr", 7)(1, "td"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "td"),
            e._uU(4),
            e.ALo(5, "fromNow"),
            e.qZA(),
            e.TgZ(6, "td", 8)(7, "div", 9)(8, "nz-space"),
            e.YNc(9, Pt, 2, 0, "button", 10),
            e.YNc(10, Mt, 2, 0, "button", 11),
            e.qZA()()()()),
          2 & i)
        ) {
          const s = a.$implicit;
          e.xp6(2), e.Oqu(s.name), e.xp6(2), e.Oqu(e.lcZ(5, 2, s.created_at));
        }
      }
      const At = function () {
        return { rows: 5 };
      };
      let It = (() => {
        var i;
        class a {
          constructor(t, n, o, r, l) {
            (this.api = t),
              (this.settingsApi = n),
              (this.fb = o),
              (this.app = r),
              (this.menu = l),
              (this.taskTemplates = []),
              (this.loading = !1),
              (this.updating = !1),
              (this.drawerVisible = !1),
              (this.editingTeamId = null),
              (this.selectedTemplateId = ""),
              this.app.setTitle("Task Templates"),
              A.s.track(I.x0),
              (this.form = this.fb.group({ name: [null, p.kI.required] }));
          }
          ngOnInit() {
            this.getTaskTemplates().then((t) => t);
          }
          getTaskTemplates() {
            var t = this;
            return (0, m.Z)(function* () {
              try {
                t.loading = !0;
                const n = yield t.api.get();
                n.done && (t.taskTemplates = n.body), (t.loading = !1);
              } catch (n) {
                (t.loading = !1), (0, b.tu)(n);
              }
            })();
          }
          closeModal() {
            this.drawerVisible = !1;
          }
          editTemplate(t) {
            t && ((this.selectedTemplateId = t), (this.drawerVisible = !0));
          }
          taskTemplateCancel(t) {
            (this.drawerVisible = t), (this.selectedTemplateId = "");
          }
          onCreateOrUpdate() {
            this.getTaskTemplates().then((t) => t);
          }
          deleteTemplate(t = "") {
            var n = this;
            return (0, m.Z)(function* () {
              try {
                (yield n.api.delete(t)).done &&
                  (A.s.track(I.O1), n.getTaskTemplates());
              } catch {}
            })();
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(
              e.Y36(St.e),
              e.Y36(he.G),
              e.Y36(p.qu),
              e.Y36(U.z),
              e.Y36(te.h)
            );
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-task-templates"]],
            decls: 13,
            vars: 9,
            consts: [
              [3, "nzActive", "nzLoading", "nzParagraph"],
              [
                "nzPaginationType",
                "small",
                "nzSize",
                "small",
                1,
                "custom-table",
                3,
                "nzData",
                "nzLoading",
              ],
              ["table", ""],
              ["scope", "col"],
              ["colspan", "2", "nzAlign", "left", "scope", "col"],
              ["class", "actions-row", 4, "ngFor", "ngForOf"],
              [
                3,
                "drawerVisible",
                "selectedTemplateId",
                "onCancelClick",
                "onCreateOrUpdate",
              ],
              [1, "actions-row"],
              ["nzAlign", "center", 1, "actions-col"],
              [1, "actions"],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzSize",
                "small",
                "nzTooltipPlacement",
                "top",
                "nzTooltipTitle",
                "Edit",
                "nzType",
                "default",
                3,
                "click",
                4,
                "nzSpaceItem",
              ],
              [
                "nz-button",
                "",
                "nz-popconfirm",
                "",
                "nz-tooltip",
                "",
                "nzOkText",
                "Yes",
                "nzPopconfirmTitle",
                "Are you sure?",
                "nzSize",
                "small",
                "nzTooltipPlacement",
                "top",
                "nzTooltipTitle",
                "Delete",
                "nzType",
                "default",
                3,
                "nzOnConfirm",
                4,
                "nzSpaceItem",
              ],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzSize",
                "small",
                "nzTooltipPlacement",
                "top",
                "nzTooltipTitle",
                "Edit",
                "nzType",
                "default",
                3,
                "click",
              ],
              ["nz-icon", "", "nzType", "edit"],
              [
                "nz-button",
                "",
                "nz-popconfirm",
                "",
                "nz-tooltip",
                "",
                "nzOkText",
                "Yes",
                "nzPopconfirmTitle",
                "Are you sure?",
                "nzSize",
                "small",
                "nzTooltipPlacement",
                "top",
                "nzTooltipTitle",
                "Delete",
                "nzType",
                "default",
                3,
                "nzOnConfirm",
              ],
              ["nz-icon", "", "nzType", "delete"],
            ],
            template: function (t, n) {
              if (
                (1 & t &&
                  (e.TgZ(0, "nz-card")(1, "nz-skeleton", 0)(
                    2,
                    "nz-table",
                    1,
                    2
                  )(4, "thead")(5, "tr")(6, "th", 3),
                  e._uU(7, "Name"),
                  e.qZA(),
                  e.TgZ(8, "th", 4),
                  e._uU(9, "Created"),
                  e.qZA()()(),
                  e.TgZ(10, "tbody"),
                  e.YNc(11, Ot, 11, 4, "tr", 5),
                  e.qZA()()()(),
                  e.TgZ(12, "worklenz-task-template-drawer", 6),
                  e.NdJ("onCancelClick", function (r) {
                    return n.taskTemplateCancel(r);
                  })("onCreateOrUpdate", function () {
                    return n.onCreateOrUpdate();
                  }),
                  e.qZA()),
                2 & t)
              ) {
                const o = e.MAs(3);
                e.xp6(1),
                  e.Q6J("nzActive", !0)("nzLoading", n.loading)(
                    "nzParagraph",
                    e.DdM(8, At)
                  ),
                  e.xp6(1),
                  e.Q6J("nzData", n.taskTemplates)("nzLoading", n.loading),
                  e.xp6(9),
                  e.Q6J("ngForOf", o.data),
                  e.xp6(1),
                  e.Q6J("drawerVisible", n.drawerVisible)(
                    "selectedTemplateId",
                    n.selectedTemplateId
                  );
              }
            },
            dependencies: [
              h.sg,
              V.bd,
              M.Ls,
              O.ix,
              v.w,
              L.dQ,
              z.N8,
              z.Uo,
              z._C,
              z.Om,
              z.p0,
              z.$Z,
              z.UX,
              H.NU,
              H.$1,
              J.SY,
              $.ng,
              Je.x,
              Te.JW,
              ge.d,
            ],
          })),
          a
        );
      })();
      var G = c(71993),
        Zt = c(45538),
        Lt = c(3278),
        de = c(64532),
        Ft = c(8689),
        Ge = c(72095),
        De = c(96928);
      function Nt(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "button", 14),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.refresh());
            }),
            e._UZ(1, "span", 15),
            e.qZA();
        }
        if (2 & i) {
          const s = e.oxw();
          e.xp6(1), e.Q6J("nzSpin", s.loading);
        }
      }
      function Et(i, a) {
        1 & i && e._UZ(0, "span", 20);
      }
      function Ut(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "form", 16),
            e.NdJ("ngSubmit", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.search());
            }),
            e.TgZ(1, "nz-input-group", 17),
            e._UZ(2, "input", 18),
            e.qZA(),
            e.YNc(3, Et, 1, 0, "ng-template", null, 19, e.W1O),
            e.qZA();
        }
        if (2 & i) {
          const s = e.MAs(4),
            t = e.oxw();
          e.Q6J("formGroup", t.searchForm)("nzLayout", "vertical"),
            e.xp6(1),
            e.Q6J("nzSuffix", s),
            e.xp6(1),
            e.Q6J("formControlName", "search");
        }
      }
      function Jt(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "span")(1, "button", 21),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.openAddMemberForm());
            }),
            e._uU(2, "Add Member"),
            e.qZA()();
        }
      }
      function Gt(i, a) {
        if ((1 & i && e._UZ(0, "nz-avatar", 33), 2 & i)) {
          const s = e.oxw().$implicit,
            t = e.oxw();
          e.Udp(
            "background-color",
            s.avatar_url ? "#ececec" : t.getColor(s.name)
          ),
            e.Q6J("nzSize", 28)("nzText", s.name.charAt(0).toUpperCase())(
              "nzSrc",
              s.avatar_url
            );
        }
      }
      function Dt(i, a) {
        1 & i && (e.TgZ(0, "span", 34), e._uU(1, " (Deactivated)"), e.qZA());
      }
      function Yt(i, a) {
        if ((1 & i && (e.TgZ(0, "span"), e._uU(1), e.qZA()), 2 & i)) {
          const s = e.oxw().$implicit;
          e.xp6(1), e.Oqu(s.email);
        }
      }
      function Qt(i, a) {
        1 & i && (e.TgZ(0, "span"), e._uU(1, "-"), e.qZA());
      }
      function Rt(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "span"),
            e._uU(1),
            e.TgZ(2, "small", 35),
            e._uU(3, "(Pending Invitation)"),
            e.qZA()()),
          2 & i)
        ) {
          const s = e.oxw().$implicit;
          e.xp6(1), e.hij(" ", s.email, " ");
        }
      }
      function Bt(i, a) {
        if ((1 & i && (e.TgZ(0, "span", 36), e._uU(1), e.qZA()), 2 & i)) {
          const s = e.oxw().$implicit;
          e.xp6(1), e.Oqu(s.role_name);
        }
      }
      function Ht(i, a) {
        if ((1 & i && (e.TgZ(0, "span", 37), e._uU(1), e.qZA()), 2 & i)) {
          const s = e.oxw().$implicit;
          e.xp6(1), e.Oqu(s.role_name);
        }
      }
      function $t(i, a) {
        if ((1 & i && (e.TgZ(0, "span", 38), e._uU(1), e.qZA()), 2 & i)) {
          const s = e.oxw().$implicit;
          e.xp6(1), e.Oqu(s.role_name);
        }
      }
      function jt(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "button", 42),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw(2).$implicit,
                o = e.oxw();
              return e.KtG(o.editMember(n.id));
            }),
            e._UZ(1, "span", 43),
            e.qZA();
        }
        2 & i &&
          e.Q6J("nzTooltipPlacement", "top")("nzTooltipTitle", "Edit")(
            "nzType",
            "default"
          );
      }
      function qt(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "button", 45),
            e.NdJ("nzOnConfirm", function () {
              e.CHM(s);
              const n = e.oxw(3).$implicit,
                o = e.oxw();
              return e.KtG(o.toggleMemberActiveStatus(n));
            }),
            e._UZ(1, "span", 46),
            e.qZA();
        }
        if (2 & i) {
          const s = e.oxw(3).$implicit;
          e.Q6J("nzOkText", "Yes")("nzPopconfirmTitle", "Are you sure?")(
            "nzTooltipPlacement",
            "top"
          )("nzTooltipTitle", s.active ? "Deactivate" : "Activate")(
            "nzType",
            "default"
          );
        }
      }
      function Vt(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "div"), e.YNc(1, qt, 2, 5, "button", 44), e.qZA()),
          2 & i)
        ) {
          const s = e.oxw(2).$implicit,
            t = e.oxw();
          e.xp6(1),
            e.Q6J(
              "ngIf",
              s.id !== (null == t.profile ? null : t.profile.team_member_id)
            );
        }
      }
      function Kt(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "button", 47),
            e.NdJ("nzOnConfirm", function () {
              e.CHM(s);
              const n = e.oxw(2).$implicit,
                o = e.oxw();
              return e.KtG(o.deleteTeamMember(n.id, n.email));
            }),
            e._UZ(1, "span", 48),
            e.qZA();
        }
        2 & i &&
          e.Q6J("nzOkText", "Yes")("nzPopconfirmTitle", "Are you sure?")(
            "nzSize",
            "small"
          )("nzTooltipPlacement", "top")("nzTooltipTitle", "Delete")(
            "nzType",
            "default"
          );
      }
      function Wt(i, a) {
        1 & i &&
          (e.TgZ(0, "div", 39)(1, "nz-space"),
          e.YNc(2, jt, 2, 3, "button", 40),
          e.YNc(3, Vt, 2, 1, "div", 4),
          e.YNc(4, Kt, 2, 6, "button", 41),
          e.qZA()());
      }
      function Xt(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "tr", 22)(1, "td", 23),
            e.NdJ("click", function () {
              const o = e.CHM(s).$implicit,
                r = e.oxw();
              return e.KtG(r.selectMember(o.id));
            }),
            e.YNc(2, Gt, 1, 5, "nz-avatar", 24),
            e.TgZ(3, "nz-badge", 25),
            e._uU(4),
            e.qZA(),
            e.YNc(5, Dt, 2, 0, "span", 26),
            e.qZA(),
            e.TgZ(6, "td", 23),
            e.NdJ("click", function () {
              const o = e.CHM(s).$implicit,
                r = e.oxw();
              return e.KtG(r.selectMember(o.id));
            }),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "td", 23),
            e.NdJ("click", function () {
              const o = e.CHM(s).$implicit,
                r = e.oxw();
              return e.KtG(r.selectMember(o.id));
            }),
            e.YNc(9, Yt, 2, 1, "span", 27),
            e.YNc(10, Qt, 2, 0, "span", 27),
            e.YNc(11, Rt, 4, 1, "span", 27),
            e.qZA(),
            e.TgZ(12, "td", 23),
            e.NdJ("click", function () {
              const o = e.CHM(s).$implicit,
                r = e.oxw();
              return e.KtG(r.selectMember(o.id));
            }),
            e.YNc(13, Bt, 2, 1, "span", 28),
            e.YNc(14, Ht, 2, 1, "span", 29),
            e.YNc(15, $t, 2, 1, "span", 30),
            e.qZA(),
            e.TgZ(16, "td", 31),
            e.YNc(17, Wt, 5, 0, "div", 32),
            e.qZA()();
        }
        if (2 & i) {
          const s = a.$implicit;
          e.xp6(2),
            e.Q6J("ngIf", s.name),
            e.xp6(1),
            e.Q6J("nzColor", s.is_online ? "green" : ""),
            e.xp6(1),
            e.hij(" ", s.name, " "),
            e.xp6(1),
            e.Q6J("ngIf", !s.active),
            e.xp6(2),
            e.Oqu(s.projects_count || 0),
            e.xp6(2),
            e.Q6J("ngIf", s.email && !s.pending_invitation),
            e.xp6(1),
            e.Q6J("ngIf", !s.email && !s.pending_invitation),
            e.xp6(1),
            e.Q6J("ngIf", s.email && s.pending_invitation),
            e.xp6(2),
            e.Q6J("ngIf", s.is_admin),
            e.xp6(1),
            e.Q6J("ngIf", s.is_owner),
            e.xp6(1),
            e.Q6J("ngIf", !s.is_admin && !s.is_owner),
            e.xp6(2),
            e.Q6J("ngIf", !s.is_owner);
        }
      }
      const en = function () {
          return { rows: 6 };
        },
        tn = function () {
          return [];
        };
      let nn = (() => {
        var i;
        class a {
          constructor(t, n, o, r, l, d, _, y) {
            (this.auth = t),
              (this.api = n),
              (this.jobTitlesApi = o),
              (this.fb = r),
              (this.app = l),
              (this.router = d),
              (this.utilsService = _),
              (this.settingsService = y),
              (this.model = {}),
              (this.showTeamMemberModal = !1),
              (this.loading = !1),
              (this.selectedMemberId = null),
              (this.total = 0),
              (this.pageSize = j.L8),
              (this.pageIndex = 1),
              (this.paginationSizes = [5, 10, 15, 20, 50, 100]),
              (this.sortField = null),
              (this.sortOrder = null),
              this.app.setTitle("Team Members"),
              A.s.track(I.nW),
              (this.searchForm = this.fb.group({ search: [] })),
              this.searchForm.valueChanges.subscribe(() => {
                this.search();
              }),
              this.settingsService.onNewMemberCreated
                .pipe((0, G.sL)())
                .subscribe(() => {
                  this.getTeamMembers();
                });
          }
          get profile() {
            return this.auth.getCurrentSession();
          }
          getTeamMembers() {
            var t = this;
            return (0, m.Z)(function* () {
              try {
                t.loading = !0;
                const n = yield t.api.get(
                  t.pageIndex,
                  t.pageSize,
                  t.sortField,
                  t.sortOrder,
                  t.searchForm.value.search
                );
                n.done &&
                  ((t.model = n.body),
                  (t.total = t.model.total || 0),
                  t.utilsService.handleLastIndex(
                    t.total,
                    t.model.data?.length || 0,
                    t.pageIndex,
                    (o) => {
                      (t.pageIndex = o), t.getTeamMembers();
                    }
                  )),
                  (t.loading = !1);
              } catch (n) {
                (0, b.tu)(n), (t.loading = !1);
              }
            })();
          }
          editMember(t) {
            (this.selectedMemberId = t || null),
              (this.showTeamMemberModal = !0);
          }
          reset() {
            this.selectedMemberId = null;
          }
          deleteTeamMember(t, n) {
            var o = this;
            return (0, m.Z)(function* () {
              if (t && n)
                try {
                  (yield o.api.delete(t, n)).done &&
                    (A.s.track(I.OA),
                    yield o.getTeamMembers(),
                    o.auth.getCurrentSession()?.team_member_id === t &&
                      window.location.reload());
                } catch (r) {
                  (0, b.tu)(r);
                }
            })();
          }
          selectValue(t) {
            t && t.select();
          }
          search() {
            var t = this;
            return (0, m.Z)(function* () {
              t.searchForm.value.search && A.s.track(I.Q5), t.getTeamMembers();
            })();
          }
          selectMember(t) {
            t && (A.s.track(I.uc), this.editMember(t));
          }
          getColor(t) {
            return j.Lj[t?.charAt(0).toUpperCase() || "A"];
          }
          onQueryParamsChange(t) {
            var n = this;
            return (0, m.Z)(function* () {
              const { pageSize: o, pageIndex: r, sort: l } = t;
              (n.pageIndex = r), (n.pageSize = o);
              const d = l.find((_) => null !== _.value);
              (n.sortField = (d && d.key) || null),
                (n.sortOrder = (d && d.value) || "descend"),
                yield n.getTeamMembers();
            })();
          }
          openAddMemberForm() {
            (this.showTeamMemberModal = !0), A.s.track(I.oo);
          }
          refresh() {
            A.s.track(I.r9), this.getTeamMembers();
          }
          handleOnCreateOrUpdate(t) {
            1 == t && A.s.track(I.YC), this.getTeamMembers();
          }
          toggleMemberActiveStatus(t) {
            var n = this;
            return (0, m.Z)(function* () {
              if (t.id)
                try {
                  (yield n.api.toggleMemberActiveStatus(
                    t.id,
                    t.active,
                    t.email
                  )).done &&
                    (t.active && A.s.track(I.ZH),
                    t.active || A.s.track(I.aY),
                    yield n.getTeamMembers());
                } catch (o) {
                  (0, b.tu)(o);
                }
            })();
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(
              e.Y36(w.e),
              e.Y36(Zt.B),
              e.Y36(Lt.i),
              e.Y36(p.qu),
              e.Y36(U.z),
              e.Y36(N.F0),
              e.Y36(de.F),
              e.Y36(Ft.g)
            );
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-team-members"]],
            decls: 26,
            vars: 22,
            consts: [
              [1, "container"],
              [1, "px-0", 3, "nzGhost"],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzShape",
                "circle",
                "nzTooltipTitle",
                "Refresh members",
                "nzType",
                "default",
                3,
                "click",
                4,
                "nzSpaceItem",
              ],
              [
                "nz-form",
                "",
                3,
                "formGroup",
                "nzLayout",
                "ngSubmit",
                4,
                "nzSpaceItem",
              ],
              [4, "nzSpaceItem"],
              [3, "nzActive", "nzLoading", "nzParagraph"],
              [
                "nzShowSizeChanger",
                "",
                "nzSize",
                "small",
                1,
                "custom-table",
                3,
                "nzData",
                "nzFrontPagination",
                "nzLoading",
                "nzPageIndex",
                "nzPageSizeOptions",
                "nzPageSize",
                "nzTotal",
                "nzQueryParams",
              ],
              ["table", ""],
              ["nzColumnKey", "name", "scope", "col", 3, "nzSortFn"],
              ["nzColumnKey", "projects_count", "scope", "col", 3, "nzSortFn"],
              ["nzColumnKey", "email", "scope", "col", 3, "nzSortFn"],
              [
                "colspan",
                "2",
                "nzAlign",
                "left",
                "nzColumnKey",
                "role_name",
                "scope",
                "col",
                3,
                "nzSortFn",
              ],
              ["class", "actions-row", 4, "ngFor", "ngForOf"],
              [
                3,
                "show",
                "memberId",
                "onCancel",
                "onCreateOrUpdate",
                "showChange",
              ],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzShape",
                "circle",
                "nzTooltipTitle",
                "Refresh members",
                "nzType",
                "default",
                3,
                "click",
              ],
              [
                "nz-icon",
                "",
                "nzTheme",
                "outline",
                "nzType",
                "sync",
                3,
                "nzSpin",
              ],
              ["nz-form", "", 3, "formGroup", "nzLayout", "ngSubmit"],
              [3, "nzSuffix"],
              [
                "nz-input",
                "",
                "placeholder",
                "Buscar por Nombre",
                "type",
                "text",
                3,
                "formControlName",
              ],
              ["suffixIconSearch", ""],
              ["nz-icon", "", "nzType", "search"],
              ["nz-button", "", "nzType", "primary", 3, "click"],
              [1, "actions-row"],
              [1, "cursor-pointer", 3, "click"],
              [
                "class",
                "me-2",
                3,
                "nzSize",
                "nzText",
                "background-color",
                "nzSrc",
                4,
                "ngIf",
              ],
              [
                1,
                "d-inline-flex",
                "align-items-center",
                "flex-row-reverse",
                2,
                "color",
                "inherit",
                3,
                "nzColor",
              ],
              ["nz-typography", "", "nzType", "warning", 4, "ngIf"],
              [4, "ngIf"],
              ["class", "admin-role", "nz-typography", "", 4, "ngIf"],
              ["class", "owner-role", "nz-typography", "", 4, "ngIf"],
              ["class", "member-role", "nz-typography", "", 4, "ngIf"],
              [1, "actions-col"],
              ["class", "actions", 4, "ngIf"],
              [1, "me-2", 3, "nzSize", "nzText", "nzSrc"],
              ["nz-typography", "", "nzType", "warning"],
              ["nz-typography", "", "nzType", "secondary"],
              ["nz-typography", "", 1, "admin-role"],
              ["nz-typography", "", 1, "owner-role"],
              ["nz-typography", "", 1, "member-role"],
              [1, "actions"],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzSize",
                "small",
                3,
                "nzTooltipPlacement",
                "nzTooltipTitle",
                "nzType",
                "click",
                4,
                "nzSpaceItem",
              ],
              [
                "nz-button",
                "",
                "nz-popconfirm",
                "",
                "nz-tooltip",
                "",
                3,
                "nzOkText",
                "nzPopconfirmTitle",
                "nzSize",
                "nzTooltipPlacement",
                "nzTooltipTitle",
                "nzType",
                "nzOnConfirm",
                4,
                "nzSpaceItem",
              ],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzSize",
                "small",
                3,
                "nzTooltipPlacement",
                "nzTooltipTitle",
                "nzType",
                "click",
              ],
              ["nz-icon", "", "nzType", "edit"],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nz-popconfirm",
                "",
                "nzSize",
                "small",
                3,
                "nzOkText",
                "nzPopconfirmTitle",
                "nzTooltipPlacement",
                "nzTooltipTitle",
                "nzType",
                "nzOnConfirm",
                4,
                "ngIf",
              ],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nz-popconfirm",
                "",
                "nzSize",
                "small",
                3,
                "nzOkText",
                "nzPopconfirmTitle",
                "nzTooltipPlacement",
                "nzTooltipTitle",
                "nzType",
                "nzOnConfirm",
              ],
              ["nz-icon", "", "nzType", "user-switch", "nzTheme", "outline"],
              [
                "nz-button",
                "",
                "nz-popconfirm",
                "",
                "nz-tooltip",
                "",
                3,
                "nzOkText",
                "nzPopconfirmTitle",
                "nzSize",
                "nzTooltipPlacement",
                "nzTooltipTitle",
                "nzType",
                "nzOnConfirm",
              ],
              ["nz-icon", "", "nzType", "delete"],
            ],
            template: function (t, n) {
              if (
                (1 & t &&
                  (e.TgZ(0, "div", 0)(1, "nz-page-header", 1)(
                    2,
                    "nz-page-header-title"
                  ),
                  e._uU(3),
                  e.qZA(),
                  e.TgZ(4, "nz-page-header-extra")(5, "nz-space"),
                  e.YNc(6, Nt, 2, 1, "button", 2),
                  e.YNc(7, Ut, 5, 4, "form", 3),
                  e.YNc(8, Jt, 3, 0, "span", 4),
                  e.qZA()()(),
                  e.TgZ(9, "nz-card")(10, "nz-skeleton", 5)(
                    11,
                    "nz-table",
                    6,
                    7
                  ),
                  e.NdJ("nzQueryParams", function (r) {
                    return n.onQueryParamsChange(r);
                  }),
                  e.TgZ(13, "thead")(14, "tr")(15, "th", 8),
                  e._uU(16, "Name"),
                  e.qZA(),
                  e.TgZ(17, "th", 9),
                  e._uU(18, "Projects"),
                  e.qZA(),
                  e.TgZ(19, "th", 10),
                  e._uU(20, "Email"),
                  e.qZA(),
                  e.TgZ(21, "th", 11),
                  e._uU(22, "Team Access"),
                  e.qZA()()(),
                  e.TgZ(23, "tbody"),
                  e.YNc(24, Xt, 18, 12, "tr", 12),
                  e.qZA()()()()(),
                  e.TgZ(25, "worklenz-team-members-form", 13),
                  e.NdJ("onCancel", function () {
                    return n.reset();
                  })("onCreateOrUpdate", function (r) {
                    return n.handleOnCreateOrUpdate(r);
                  })("showChange", function (r) {
                    return (n.showTeamMemberModal = r);
                  }),
                  e.qZA()),
                2 & t)
              ) {
                const o = e.MAs(12);
                e.xp6(1),
                  e.Q6J("nzGhost", !1),
                  e.xp6(2),
                  e.AsE(
                    "",
                    n.total || 0,
                    " Member",
                    n.total > 1 ? "s" : "",
                    ""
                  ),
                  e.xp6(7),
                  e.Q6J("nzActive", !0)("nzLoading", n.loading)(
                    "nzParagraph",
                    e.DdM(20, en)
                  ),
                  e.xp6(1),
                  e.Q6J("nzData", n.model.data || e.DdM(21, tn))(
                    "nzFrontPagination",
                    !1
                  )("nzLoading", n.loading)("nzPageIndex", n.pageIndex)(
                    "nzPageSizeOptions",
                    n.paginationSizes
                  )("nzPageSize", n.pageSize)("nzTotal", n.total),
                  e.xp6(4),
                  e.Q6J("nzSortFn", !0),
                  e.xp6(2),
                  e.Q6J("nzSortFn", !0),
                  e.xp6(2),
                  e.Q6J("nzSortFn", !0),
                  e.xp6(2),
                  e.Q6J("nzSortFn", !0),
                  e.xp6(3),
                  e.Q6J("ngForOf", o.data),
                  e.xp6(1),
                  e.Q6J("show", n.showTeamMemberModal)(
                    "memberId",
                    n.selectedMemberId
                  );
              }
            },
            dependencies: [
              h.sg,
              h.O5,
              V.bd,
              Y.$O,
              Y.u9,
              Y.Jp,
              M.Ls,
              p._Y,
              p.Fj,
              p.JJ,
              p.JL,
              p.sg,
              p.u,
              x.Lr,
              P.Zp,
              P.gB,
              P.ke,
              O.ix,
              v.w,
              L.dQ,
              z.N8,
              z.qD,
              z.Uo,
              z._C,
              z.Om,
              z.p0,
              z.$Z,
              z.UX,
              Q.ZU,
              H.NU,
              H.$1,
              J.SY,
              $.ng,
              ie.x7,
              Te.JW,
              Ge.S,
              De.Dz,
            ],
          })),
          a
        );
      })();
      var sn = c(80697);
      function on(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "button", 10),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw().$implicit,
                o = e.oxw();
              return e.KtG(o.editTemplate(n.id, n.name));
            }),
            e._UZ(1, "span", 11),
            e.qZA();
        }
      }
      function an(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "button", 12),
            e.NdJ("nzOnConfirm", function () {
              e.CHM(s);
              const n = e.oxw().$implicit,
                o = e.oxw();
              return e.KtG(o.deleteTemplate(n.id));
            }),
            e._UZ(1, "span", 13),
            e.qZA();
        }
      }
      function rn(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "tr", 5)(1, "td"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "td", 6)(4, "div", 7)(5, "nz-space"),
            e.YNc(6, on, 2, 0, "button", 8),
            e.YNc(7, an, 2, 0, "button", 9),
            e.qZA()()()()),
          2 & i)
        ) {
          const s = a.$implicit;
          e.xp6(2), e.Oqu(s.name);
        }
      }
      const ln = function () {
        return { rows: 5 };
      };
      let cn = (() => {
        var i;
        class a {
          constructor(t, n, o) {
            (this.router = t),
              (this.cdr = n),
              (this.api = o),
              (this.loading = !1),
              (this.projectTemplates = []);
          }
          ngOnInit() {
            this.get();
          }
          get() {
            var t = this;
            return (0, m.Z)(function* () {
              try {
                t.loading = !0;
                const n = yield t.api.getWorklenzCustomTemplates();
                n.done &&
                  ((t.projectTemplates = n.body),
                  (t.loading = !1),
                  t.cdr.markForCheck()),
                  (t.loading = !1),
                  t.cdr.markForCheck();
              } catch (n) {
                (0, b.tu)(n), t.cdr.markForCheck();
              }
            })();
          }
          editTemplate(t, n) {
            !t ||
              !n ||
              this.router.navigate([
                `/worklenz/settings/project-templates/edit/${t}/${n}`,
              ]);
          }
          deleteTemplate(t) {
            var n = this;
            return (0, m.Z)(function* () {
              if (t)
                try {
                  (yield n.api.delete(t)).done && n.get();
                } catch (o) {
                  (0, b.tu)(o);
                }
            })();
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(e.Y36(N.F0), e.Y36(e.sBO), e.Y36(sn.I));
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-project-templates"]],
            decls: 11,
            vars: 7,
            consts: [
              [3, "nzActive", "nzLoading", "nzParagraph"],
              [
                "nzPaginationType",
                "small",
                "nzSize",
                "small",
                1,
                "custom-table",
                3,
                "nzData",
                "nzLoading",
              ],
              ["table", ""],
              ["scope", "col"],
              ["class", "actions-row", 4, "ngFor", "ngForOf"],
              [1, "actions-row"],
              ["nzAlign", "center", 1, "actions-col"],
              [1, "actions"],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzSize",
                "small",
                "nzTooltipPlacement",
                "top",
                "nzTooltipTitle",
                "Edit",
                "nzType",
                "default",
                3,
                "click",
                4,
                "nzSpaceItem",
              ],
              [
                "nz-button",
                "",
                "nz-popconfirm",
                "",
                "nz-tooltip",
                "",
                "nzOkText",
                "Yes",
                "nzPopconfirmTitle",
                "Are you sure?",
                "nzSize",
                "small",
                "nzTooltipPlacement",
                "top",
                "nzTooltipTitle",
                "Delete",
                "nzType",
                "default",
                3,
                "nzOnConfirm",
                4,
                "nzSpaceItem",
              ],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzSize",
                "small",
                "nzTooltipPlacement",
                "top",
                "nzTooltipTitle",
                "Edit",
                "nzType",
                "default",
                3,
                "click",
              ],
              ["nz-icon", "", "nzType", "edit"],
              [
                "nz-button",
                "",
                "nz-popconfirm",
                "",
                "nz-tooltip",
                "",
                "nzOkText",
                "Yes",
                "nzPopconfirmTitle",
                "Are you sure?",
                "nzSize",
                "small",
                "nzTooltipPlacement",
                "top",
                "nzTooltipTitle",
                "Delete",
                "nzType",
                "default",
                3,
                "nzOnConfirm",
              ],
              ["nz-icon", "", "nzType", "delete"],
            ],
            template: function (t, n) {
              if (
                (1 & t &&
                  (e.TgZ(0, "nz-card")(1, "nz-skeleton", 0)(
                    2,
                    "nz-table",
                    1,
                    2
                  )(4, "thead")(5, "tr")(6, "th", 3),
                  e._uU(7, "Name"),
                  e.qZA(),
                  e._UZ(8, "th", 3),
                  e.qZA()(),
                  e.TgZ(9, "tbody"),
                  e.YNc(10, rn, 8, 1, "tr", 4),
                  e.qZA()()()()),
                2 & t)
              ) {
                const o = e.MAs(3);
                e.xp6(1),
                  e.Q6J("nzActive", !0)("nzLoading", n.loading)(
                    "nzParagraph",
                    e.DdM(6, ln)
                  ),
                  e.xp6(1),
                  e.Q6J("nzData", n.projectTemplates)("nzLoading", n.loading),
                  e.xp6(8),
                  e.Q6J("ngForOf", o.data);
              }
            },
            dependencies: [
              h.sg,
              V.bd,
              M.Ls,
              O.ix,
              v.w,
              L.dQ,
              z.N8,
              z.Uo,
              z._C,
              z.Om,
              z.p0,
              z.$Z,
              z.UX,
              H.NU,
              H.$1,
              J.SY,
              $.ng,
              Te.JW,
            ],
            changeDetection: 0,
          })),
          a
        );
      })();
      var Ce = c(26236),
        k = c(94489),
        R = c(78645),
        pn = c(65619),
        q = c(975);
      let ue = (() => {
          var i;
          class a {
            constructor() {
              (this._selectSbj$ = new R.x()),
                (this._deselectSbj$ = new R.x()),
                (this._deselectAllSbj$ = new R.x()),
                (this._groupTaskMap = new Map()),
                (this._taskGroupIdsMap = new Map()),
                (this._selectedTasksMap = new Map()),
                (this._allTasksMap = new Map()),
                (this._subTasksMap = new Map()),
                (this._selectedCount = 0);
            }
            get tasks() {
              return this._allTasksMap;
            }
            get onSelect$() {
              return this._selectSbj$.asObservable();
            }
            get onDeselect$() {
              return this._deselectSbj$.asObservable();
            }
            get onDeselectAll$() {
              return this._deselectAllSbj$.asObservable();
            }
            reset() {
              this._groupTaskMap.clear(),
                this._taskGroupIdsMap.clear(),
                this._selectedTasksMap.clear(),
                this._allTasksMap.clear(),
                this._subTasksMap.clear(),
                (this._selectedCount = 0);
            }
            registerGroup(t) {
              for (const n of t.tasks) this.add(t.id, n);
            }
            add(t, n) {
              n.id &&
                (this.updateGroupTaskMap(t, n.id),
                this._taskGroupIdsMap.set(n.id, t),
                this._allTasksMap.set(n.id, n),
                n.parent_task_id &&
                  this.updateSubtasksMap(n.parent_task_id, n));
            }
            addGroupTask(t, n) {
              n.id && this._taskGroupIdsMap.set(n.id, t);
            }
            has(t) {
              return this._allTasksMap.has(t);
            }
            remove(t) {
              t.id &&
                (this.deselectTask(t),
                this._taskGroupIdsMap.get(t.id),
                this._allTasksMap.delete(t.id));
            }
            updateGroupTaskMap(t, n, o) {
              const r = this._groupTaskMap.get(t);
              r
                ? ("boolean" == typeof o ? (r[n] = o) : delete r[n],
                  this._groupTaskMap.set(t, r))
                : this._groupTaskMap.set(t, { [n]: o || !1 });
            }
            updateSubtasksMap(t, n, o) {
              const r = this._subTasksMap.get(t) || [];
              r.some((d) => d.id === n.id) ||
                (r.push(n), this._subTasksMap.set(t, r));
            }
            selectTask(t) {
              this._selectedTasksMap.get(t.id) ||
                (this._selectedTasksMap.set(t.id, t),
                this._selectedCount++,
                this.updateGroupTaskMap(
                  this._taskGroupIdsMap.get(t.id),
                  t.id,
                  !0
                ),
                this._selectSbj$.next(t));
            }
            deselectTask(t) {
              this._selectedTasksMap.has(t.id) &&
                (this._selectedTasksMap.delete(t.id),
                this._selectedCount--,
                this.updateGroupTaskMap(
                  this._taskGroupIdsMap.get(t.id),
                  t.id,
                  !1
                ),
                this._deselectSbj$.next(t));
            }
            deselectLocalGroups() {
              for (const [t, n] of this._groupTaskMap)
                for (const o in n) this.updateGroupTaskMap(t, o, !1);
            }
            deselectAll() {
              this._selectedTasksMap.size &&
                (this.deselectLocalGroups(),
                this._selectedTasksMap.clear(),
                (this._selectedCount = 0),
                this._deselectAllSbj$.next());
            }
            isAllSelected(t) {
              const n = this._groupTaskMap.get(t);
              if (n) {
                for (const o in n) if (!n[o]) return !1;
                return !0;
              }
              return !1;
            }
            isAllDeselected(t) {
              const n = this._groupTaskMap.get(t);
              if (n) for (const o in n) if (n[o]) return !1;
              return !0;
            }
            getSelectedCount() {
              return this._selectedCount;
            }
            getGroupId(t) {
              return this._taskGroupIdsMap.get(t);
            }
            getSelectedTasks() {
              const t = [];
              for (const [, n] of this._selectedTasksMap.entries()) t.push(n);
              return t;
            }
            getSelectedTaskIds() {
              const t = [];
              for (const [n] of this._selectedTasksMap.entries()) t.push(n);
              return t;
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)();
            }),
            (i.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            a
          );
        })(),
        B = (() => {
          var i;
          class a {
            get _currentGroup() {
              const t = localStorage.getItem("worklenz.pt-t-list.group_by");
              if (t) {
                const n = this.GROUP_BY_OPTIONS.find((o) => o.value === t);
                if (n) return n;
              }
              return this.GROUP_BY_OPTIONS[0];
            }
            set _currentGroup(t) {
              localStorage.setItem("worklenz.pt-t-list.group_by", t.value);
            }
            set columns(t) {
              (this._cols = t), this.emitColsChange();
            }
            get columns() {
              return this._cols;
            }
            set labels(t) {
              (this._labels = t), this.labelsSbj$.next();
            }
            get labels() {
              return this._labels;
            }
            set priorities(t) {
              (this._priorities = t), this.prioritiesSbj$.next();
            }
            get priorities() {
              return this._priorities;
            }
            set phases(t) {
              (this._phases = t), this.phasesSbj$.next();
            }
            get phases() {
              return this._phases;
            }
            get onColumnsChange$() {
              return this.colsSbj$.asObservable();
            }
            get onLabelsChange$() {
              return this.labelsSbj$.asObservable();
            }
            get onStatusesChange$() {
              return this.statusesSbj$.asObservable();
            }
            get onPrioritiesChange$() {
              return this.prioritiesSbj$.asObservable();
            }
            get onContextMenu$() {
              return this.contextMenuSbj$.asObservable();
            }
            get onTaskAddOrDelete$() {
              return this.taskAddOrDeleteSbj$.asObservable();
            }
            get onGroupChange$() {
              return this.groupChangeSbj$.asObservable();
            }
            get onRefresh$() {
              return this.refreshSbj$.asObservable();
            }
            get onPhaseChange$() {
              return this.phasesSbj$.asObservable();
            }
            set statuses(t) {
              (this._statuses = t), this.statusesSbj$.next();
            }
            get statuses() {
              return this._statuses;
            }
            get onRefreshSubtasksIncluded() {
              return this.refreshSubtasksIncludedSbj$.asObservable();
            }
            constructor(t, n) {
              (this.socket = t),
                (this.map = n),
                (this.colsSbj$ = new R.x()),
                (this.labelsSbj$ = new R.x()),
                (this.statusesSbj$ = new R.x()),
                (this.prioritiesSbj$ = new R.x()),
                (this.contextMenuSbj$ = new R.x()),
                (this.taskAddOrDeleteSbj$ = new pn.X(null)),
                (this.refreshSbj$ = new R.x()),
                (this.groupChangeSbj$ = new R.x()),
                (this.phasesSbj$ = new R.x()),
                (this.updateGroupProgressSbj$ = new R.x()),
                (this.refreshSubtasksIncludedSbj$ = new R.x()),
                (this.HIGHLIGHT_COL_CLS = "highlight-col"),
                (this.GROUP_BY_STATUS_VALUE = "status"),
                (this.GROUP_BY_PRIORITY_VALUE = "priority"),
                (this.GROUP_BY_PHASE_VALUE = "phase"),
                (this.GROUP_BY_OPTIONS = [
                  { label: "Status", value: this.GROUP_BY_STATUS_VALUE },
                  { label: "Priority", value: this.GROUP_BY_PRIORITY_VALUE },
                  { label: "Phase", value: this.GROUP_BY_PHASE_VALUE },
                ]),
                (this.groups = []),
                (this._templateId = null),
                (this._cols = []),
                (this._labels = []),
                (this._statuses = []),
                (this._priorities = []),
                (this._phases = []),
                (this.isSubtasksIncluded = !1);
            }
            settemplateId(t) {
              this._templateId = t;
            }
            gettemplateId() {
              return this._templateId;
            }
            setCurrentGroup(t) {
              this._currentGroup = t;
            }
            getCurrentGroup() {
              return this._currentGroup;
            }
            emitColsChange() {
              this.colsSbj$.next();
            }
            emitOnContextMenu(t, n) {
              this.contextMenuSbj$.next({ event: t, task: n });
            }
            emitRefresh() {
              this.refreshSbj$.next();
            }
            emitGroupChange(t, n, o) {
              this.groupChangeSbj$.next({ groupId: t, taskId: n, color: o });
            }
            emitTaskAddOrDelete(t, n) {
              this.taskAddOrDeleteSbj$.next({ taskId: t, isSubTask: n });
            }
            emitRefreshSubtasksIncluded() {
              this.refreshSubtasksIncludedSbj$.next();
            }
            getGroupIdByGroupedColumn(t) {
              const n = this.getCurrentGroup().value;
              return n === this.GROUP_BY_STATUS_VALUE
                ? t.status
                : n === this.GROUP_BY_PRIORITY_VALUE
                ? t.priority
                : n === this.GROUP_BY_PHASE_VALUE
                ? t.phase_id
                : null;
            }
            updateTaskGroup(t, n = !0) {
              if (!t.id) return;
              const o = this.getGroupIdByGroupedColumn(t);
              o && (this.deleteTask(t.id), this.addTask(t, o, n));
            }
            deleteTask(t, n = null) {
              const o = this.map.getGroupId(t);
              if (!o || !t) return;
              const r = this.groups.find((d) => d.id === o);
              if (!r) return;
              const l = this.map.getSelectedTasks().find((d) => d.id === t);
              if (l?.is_sub_task) {
                const d = r.tasks.find((_) => _.id === l.parent_task_id);
                if (d) {
                  const _ = d.sub_tasks?.findIndex((y) => y.id === l.id);
                  typeof _ < "u" &&
                    -1 !== _ &&
                    (d.sub_tasks_count || (d.sub_tasks_count = 0),
                    (d.sub_tasks_count = Math.max(+d.sub_tasks_count - 1, 0)),
                    d.sub_tasks?.splice(_, 1),
                    this.emitTaskAddOrDelete(d.id, !0));
                }
                this.map.remove(l);
              } else {
                const d = n ?? r.tasks.findIndex((_) => _.id === t);
                -1 !== d &&
                  (this.map.remove(r.tasks[d]),
                  r.tasks.splice(d, 1),
                  this.emitTaskAddOrDelete(t, !1));
              }
              this.map.deselectAll();
            }
            removeSubtask(t, n = null) {
              const o = this.map.getGroupId(t);
              if (!o || !t) return;
              const r = this.groups.find((d) => d.id === o);
              if (!r) return;
              const l = n ?? r.tasks.findIndex((d) => d.id === t);
              -1 !== l && (this.map.remove(r.tasks[l]), r.tasks.splice(l, 1)),
                this.map.deselectAll();
            }
            addTask(t, n, o = !1) {
              const r = this.groups.find((l) => l.id === n);
              if (r && t.id) {
                if (t.parent_task_id) {
                  const l = r.tasks.find((d) => d.id === t.parent_task_id);
                  l &&
                    (l.sub_tasks_count || (l.sub_tasks_count = 0),
                    (l.sub_tasks_count = +l.sub_tasks_count + 1),
                    l.sub_tasks?.push(t));
                } else o ? r.tasks.unshift(t) : r.tasks.push(t);
                this.map.add(n, t),
                  this.emitTaskAddOrDelete(
                    t.parent_task_id,
                    !!t.parent_task_id
                  );
              }
            }
            reset() {
              (this._cols = []),
                (this._labels = []),
                (this._statuses = []),
                (this._priorities = []),
                (this._templateId = null),
                (this.groups = []),
                (this.isSubtasksIncluded = !1);
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)(e.LFG(q.s), e.LFG(ue));
            }),
            (i.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            a
          );
        })(),
        Ye = (() => {
          var i;
          class a extends le.P {
            constructor(t) {
              super(),
                (this.http = t),
                (this.root = `${this.API_BASE_URL}/pt-tasks`);
            }
            getTaskList(t) {
              const n = (0, b.UK)(t);
              return this._get(this.http, `${this.root}/list/${t.id}${n}`);
            }
            bulkDelete(t, n) {
              return this._put(this.http, `${this.root}/bulk/delete`, t);
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)(e.LFG(ce.eN));
            }),
            (i.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            a
          );
        })(),
        dn = (() => {
          var i;
          class a extends le.P {
            constructor(t) {
              super(),
                (this.http = t),
                (this.root = `${this.API_BASE_URL}/labels`);
            }
            get(t = null) {
              const n = (0, b.UK)({ project: t });
              return this._get(this.http, `${this.root}${n}`);
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)(e.LFG(ce.eN));
            }),
            (i.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            a
          );
        })(),
        Ae = (() => {
          var i;
          class a extends le.P {
            constructor(t) {
              super(),
                (this.http = t),
                (this.root = `${this.API_BASE_URL}/pt-statuses`);
            }
            create(t) {
              return this._post(this.http, this.root, t);
            }
            get(t) {
              return this._get(this.http, `${this.root}?template_id=${t}`);
            }
            getById(t) {
              return this._get(this.http, `${this.root}/${t}`);
            }
            getCategories() {
              return this._get(this.http, `${this.root}/categories`);
            }
            update(t, n) {
              return this._put(this.http, `${this.root}/${t}`, n);
            }
            updateName(t, n) {
              return this._put(this.http, `${this.root}/name/${t}`, n);
            }
            delete(t, n, o) {
              return this._delete(
                this.http,
                `${this.root}/${t}?project=${n}&replace=${o || null}`
              );
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)(e.LFG(ce.eN));
            }),
            (i.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            a
          );
        })(),
        un = (() => {
          var i;
          class a extends le.P {
            constructor(t) {
              super(),
                (this.http = t),
                (this.root = `${this.API_BASE_URL}/task-priorities`);
            }
            get() {
              return this._get(this.http, this.root);
            }
            getById(t) {
              return this._get(this.http, `${this.root}/${t}`);
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)(e.LFG(ce.eN));
            }),
            (i.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            a
          );
        })(),
        Ie = (() => {
          var i;
          class a extends le.P {
            constructor(t) {
              super(),
                (this.http = t),
                (this.root = `${this.API_BASE_URL}/pt-task-phases`);
            }
            create(t) {
              const n = (0, b.UK)({ id: t });
              return this._post(this.http, `${this.root}${n}`, {});
            }
            get(t) {
              const n = (0, b.UK)({ id: t });
              return this._get(this.http, `${this.root}${n}`);
            }
            getById(t, n) {
              const o = (0, b.UK)({ id: n });
              return this._get(this.http, `${this.root}/${t}${o}`);
            }
            updateLabel(t, n) {
              return this._put(this.http, `${this.root}/label/${t}`, {
                name: n,
              });
            }
            update(t, n) {
              const o = (0, b.UK)({ id: t });
              return this._put(this.http, `${this.root}/${n.id}${o}`, n);
            }
            updateColor(t, n) {
              const o = (0, b.UK)({ id: t, current_project_id: t });
              return this._put(
                this.http,
                `${this.root}/change-color/${n.id}${o}`,
                n
              );
            }
            delete(t, n) {
              const o = (0, b.UK)({ id: n });
              return this._delete(this.http, `${this.root}/${t}${o}`);
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)(e.LFG(ce.eN));
            }),
            (i.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            a
          );
        })();
      const _n = ["taskInput"];
      function mn(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "form", 3)(1, "input", 4, 5),
            e.NdJ("blur", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.onInputBlur());
            })("keyup.enter", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.addInstantTask());
            }),
            e.qZA()();
        }
        if (2 & i) {
          const s = e.oxw();
          e.Q6J("formGroup", s.form),
            e.xp6(1),
            e.Q6J("nzBorderless", !0)("formControlName", "name")(
              "readOnly",
              s.creating
            );
        }
      }
      function hn(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "div", 6),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.focusTaskInput());
            }),
            e._UZ(1, "span", 7),
            e.TgZ(2, "span"),
            e._uU(3),
            e.qZA()();
        }
        if (2 & i) {
          const s = e.oxw();
          e.uIk("id", s.id),
            e.xp6(1),
            e.Q6J("nzType", s.creating ? "loading" : "plus")(
              "nzTheme",
              "outline"
            ),
            e.xp6(2),
            e.hij(" ", s.label, "");
        }
      }
      let Qe = (() => {
        var i;
        class a {
          constructor(t, n, o, r, l, d, _) {
            (this.socket = t),
              (this.auth = n),
              (this.fb = o),
              (this.service = r),
              (this.ngZone = l),
              (this.cdr = d),
              (this.map = _),
              (this.subTaskInput = !1),
              (this.templateId = null),
              (this.parentTask = null),
              (this.groupId = null),
              (this.label = "Añadir Tarea"),
              (this.focusChange = new e.vpe()),
              (this.taskInputVisible = !1),
              (this.creating = !1),
              (this.id = (0, b.q$)(4)),
              (this._session = null),
              (this.form = this.fb.group({
                name: [
                  null,
                  [p.kI.required, p.kI.pattern(/^(\s+\S+\s*)*(?!\s).*$/)],
                ],
              })),
              (this._session = this.auth.getCurrentSession());
          }
          focusTaskInput() {
            (this.taskInputVisible = !0),
              this.focusChange.emit(this.taskInputVisible),
              this.ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                  this.taskInput?.nativeElement.focus(),
                    this.taskInput?.nativeElement.select();
                }, 100);
              });
          }
          addTaskInputBlur() {
            (this.taskInputVisible = !1),
              this.focusChange.emit(this.taskInputVisible);
          }
          onInputBlur() {
            var t = this;
            return (0, m.Z)(function* () {
              t.isValidInput()
                ? yield t.addInstantTask()
                : t.addTaskInputBlur();
            })();
          }
          createRequest() {
            if (!this.templateId || !this._session) return null;
            const t = this._session,
              n = {
                name: this.form.value.name,
                template_id: this.templateId,
                reporter_id: t.id,
                team_id: t.team_id,
              },
              o = this.service.getCurrentGroup();
            return (
              o.value === this.service.GROUP_BY_STATUS_VALUE
                ? (n.status_id = this.groupId || void 0)
                : o.value === this.service.GROUP_BY_PRIORITY_VALUE
                ? (n.priority_id = this.groupId || void 0)
                : o.value === this.service.GROUP_BY_PHASE_VALUE &&
                  (n.phase_id = this.groupId || void 0),
              this.parentTask && (n.parent_task_id = this.parentTask),
              n
            );
          }
          isValidInput() {
            return this.form.valid && this.form.value.name.trim().length;
          }
          addInstantTask() {
            var t = this;
            return (0, m.Z)(function* () {
              if (
                !t.creating &&
                t.templateId &&
                t._session &&
                t.isValidInput()
              ) {
                try {
                  const n = t.createRequest();
                  if (!n) return;
                  (t.creating = !0),
                    t.socket.emit(
                      k.C.PT_QUICK_TASK.toString(),
                      JSON.stringify(n)
                    ),
                    t.socket.once(k.C.PT_QUICK_TASK.toString(), (o) => {
                      (t.creating = !1), t.onNewTaskReceived(o);
                    });
                } catch {
                  t.creating = !1;
                }
                t.cdr.markForCheck();
              }
            })();
          }
          reset(t = !0) {
            (this.creating = !1),
              this.form.controls.name.setValue(null),
              (this.taskInputVisible = !0),
              this.ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                  this.taskInput?.nativeElement.focus(),
                    t && window.scrollTo(0, document.body.scrollHeight);
                }, j.GR);
              }),
              this.cdr.markForCheck();
          }
          onNewTaskReceived(t) {
            if (this.groupId && t.id) {
              if (this.map.has(t.id)) return;
              this.service.addTask(t, this.groupId), this.reset(!1);
            }
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(
              e.Y36(q.s),
              e.Y36(w.e),
              e.Y36(p.qu),
              e.Y36(B),
              e.Y36(e.R0b),
              e.Y36(e.sBO),
              e.Y36(ue)
            );
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-add-task-input"]],
            viewQuery: function (t, n) {
              if ((1 & t && e.Gf(_n, 5), 2 & t)) {
                let o;
                e.iGM((o = e.CRH())) && (n.taskInput = o.first);
              }
            },
            inputs: {
              subTaskInput: "subTaskInput",
              templateId: "templateId",
              parentTask: "parentTask",
              groupId: "groupId",
              label: "label",
            },
            outputs: { focusChange: "focusChange" },
            standalone: !0,
            features: [e.jDz],
            decls: 3,
            vars: 3,
            consts: [
              [3, "ngSwitch"],
              [3, "formGroup", 4, "ngSwitchCase"],
              [
                "class",
                "editable-row d-block w-25 task-name",
                3,
                "click",
                4,
                "ngSwitchCase",
              ],
              [3, "formGroup"],
              [
                "nz-input",
                "",
                "type",
                "text",
                "tabindex",
                "1",
                "placeholder",
                "Type your task and hit enter",
                3,
                "nzBorderless",
                "formControlName",
                "readOnly",
                "blur",
                "keyup.enter",
              ],
              ["taskInput", ""],
              [1, "editable-row", "d-block", "w-25", "task-name", 3, "click"],
              ["nz-icon", "", 1, "input-icon", 3, "nzType", "nzTheme"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.ynx(0, 0),
                e.YNc(1, mn, 3, 4, "form", 1),
                e.YNc(2, hn, 4, 4, "div", 2),
                e.BQk()),
                2 & t &&
                  (e.Q6J("ngSwitch", n.taskInputVisible),
                  e.xp6(1),
                  e.Q6J("ngSwitchCase", !0),
                  e.xp6(1),
                  e.Q6J("ngSwitchCase", !1));
            },
            dependencies: [
              h.ez,
              h.RF,
              h.n9,
              p.UX,
              p._Y,
              p.Fj,
              p.JJ,
              p.JL,
              p.sg,
              p.u,
              P.o7,
              P.Zp,
              M.PV,
              M.Ls,
            ],
            changeDetection: 0,
          })),
          a
        );
      })();
      var gn = c(49278),
        Ze = c(63019),
        _e = c(76271);
      function fn(i, a) {
        1 & i && e._UZ(0, "span", 12),
          2 & i && e.Q6J("nzType", "loading")("nzTheme", "outline");
      }
      function zn(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.ynx(0),
            e.TgZ(1, "input", 10),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(s);
              const o = e.oxw();
              return e.KtG((o.group.name = n));
            })("keydown.enter", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.updateName(n.group));
            })("blur", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.updateName(n.group));
            }),
            e.qZA(),
            e.YNc(2, fn, 1, 2, "span", 11),
            e.BQk();
        }
        if (2 & i) {
          const s = e.oxw();
          e.xp6(1),
            e.ekj("bg-and-grey", !s.isEditColProgress),
            e.Q6J("id", "group-name-" + s.group.id)(
              "disabled",
              s.isEditColProgress
            )("ngModel", s.group.name),
            e.xp6(1),
            e.Q6J("ngIf", s.isEditColProgress);
        }
      }
      function Tn(i, a) {
        if ((1 & i && (e.ynx(0), e._uU(1), e.BQk()), 2 & i)) {
          const s = e.oxw();
          e.xp6(1), e.AsE(" ", s.group.name, " (", s.group.tasks.length, ") ");
        }
      }
      function Cn(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "button", 13),
            e.NdJ("nzVisibleChange", function (n) {
              e.CHM(s);
              const o = e.oxw();
              return e.KtG((o.showMenu = n));
            }),
            e._UZ(1, "span", 14),
            e.qZA();
        }
        if (2 & i) {
          e.oxw();
          const s = e.MAs(9);
          e.Q6J("nzType", "text")("nzTrigger", "click")("nzDropdownMenu", s),
            e.xp6(1),
            e.Q6J("nzType", "ellipsis")("nzTheme", "outline");
        }
      }
      function kn(i, a) {
        if ((1 & i && (e.TgZ(0, "span"), e._uU(1), e.qZA()), 2 & i)) {
          const s = e.oxw().$implicit,
            t = e.oxw(3);
          e.Udp("font-weight", s.id === t.group.category_id ? "bold" : null),
            e.xp6(1),
            e.hij(" ", (null == s ? null : s.name) || null, " ");
        }
      }
      function xn(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "li", 21),
            e.NdJ("click", function () {
              const o = e.CHM(s).$implicit,
                r = e.oxw(3);
              return e.KtG(r.changeStatusCategory(r.group, o.id));
            }),
            e.ALo(1, "safeString"),
            e._UZ(2, "nz-badge", 22),
            e.ALo(3, "safeString"),
            e.YNc(4, kn, 2, 3, "ng-template", null, 23, e.W1O),
            e.qZA();
        }
        if (2 & i) {
          const s = a.$implicit,
            t = e.MAs(5);
          e.Q6J("nzTooltipTitle", e.lcZ(1, 4, s.description))(
            "nzTooltipPlacement",
            "right"
          ),
            e.xp6(2),
            e.Q6J("nzColor", e.lcZ(3, 6, s.color_code))("nzText", t);
        }
      }
      function bn(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "li", 19)(1, "ul"),
            e.YNc(2, xn, 6, 8, "li", 20),
            e.qZA()()),
          2 & i)
        ) {
          const s = e.oxw(2),
            t = e.MAs(12);
          e.Q6J("nzTitle", t), e.xp6(2), e.Q6J("ngForOf", s.categories);
        }
      }
      function vn(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "ul", 15)(1, "li", 16),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.editGroupName());
            }),
            e._UZ(2, "span", 17),
            e._uU(3, " Rename "),
            e.qZA(),
            e.YNc(4, bn, 3, 2, "li", 18),
            e.qZA();
        }
        if (2 & i) {
          const s = e.oxw();
          e.xp6(4), e.Q6J("ngIf", s.isGroupByStatus);
        }
      }
      function wn(i, a) {
        1 & i && (e._UZ(0, "span", 24), e._uU(1, " Change category\n"));
      }
      let yn = (() => {
        var i;
        class a {
          constructor(t, n, o, r, l, d) {
            (this.cdr = t),
              (this.auth = n),
              (this.statusApi = o),
              (this.list = r),
              (this.ngZone = l),
              (this.phaseApi = d),
              (this.templateId = null),
              (this.categories = []),
              (this.toggle = new e.vpe()),
              (this.onCreateOrUpdate = new e.vpe()),
              (this.edit = !1),
              (this.isEditColProgress = !1),
              (this.showMenu = !1),
              (this.isGroupByStatus = !1),
              (this.isGroupByPhases = !1),
              (this.isAdmin = !1),
              (this.handleGroupProgressChange = () => {
                this.group && this.cdr.markForCheck();
              }),
              (0, Ze.T)(this.list.onGroupChange$, this.list.onTaskAddOrDelete$)
                .pipe((0, G.sL)())
                .subscribe(() => {
                  this.handleGroupProgressChange();
                });
          }
          ngOnInit() {
            (this.isGroupByStatus =
              this.list.getCurrentGroup().value ===
              this.list.GROUP_BY_STATUS_VALUE),
              (this.isGroupByPhases =
                this.list.getCurrentGroup().value ===
                this.list.GROUP_BY_PHASE_VALUE);
            const t = this.auth.getCurrentSession();
            t && (this.isAdmin = !(!t.owner && !t.is_admin));
          }
          canDisplayActions() {
            const t = this.list.getCurrentGroup().value;
            return (
              t !== this.list.GROUP_BY_PRIORITY_VALUE &&
              (this.isAdmin ||
                this.isGroupByStatus ||
                t === this.list.GROUP_BY_PHASE_VALUE) &&
              this.group.name !== j.k9
            );
          }
          changeStatusCategory(t, n) {
            var o = this;
            return (0, m.Z)(function* () {
              n &&
                ((t.category_id = n),
                yield o.onBlurEditColumn(t),
                o.list.emitRefresh());
            })();
          }
          editGroupName() {
            (this.edit = !0),
              this.ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                  const n = document.querySelector(
                    `#group-name-${this.group.id}`
                  );
                  n && (n.focus(), n.select());
                });
              });
          }
          onToggleClick(t) {
            this.edit || this.toggle.emit(t);
          }
          onBlurEditColumn(t) {
            var n = this;
            return (0, m.Z)(function* () {
              if (n.templateId && !n.isEditColProgress) {
                try {
                  n.isEditColProgress = !0;
                  const o = n.list.getCurrentGroup().value;
                  o === n.list.GROUP_BY_STATUS_VALUE
                    ? yield n.update(t)
                    : o === n.list.GROUP_BY_PHASE_VALUE &&
                      (yield n.updatePhase(t)),
                    (n.isEditColProgress = !1),
                    (n.edit = !1);
                } catch (o) {
                  (0, b.tu)(o), (n.isEditColProgress = !1);
                }
                n.cdr.markForCheck();
              }
            })();
          }
          updateName(t) {
            var n = this;
            return (0, m.Z)(function* () {
              if (n.templateId && !n.isEditColProgress) {
                try {
                  n.isEditColProgress = !0;
                  const o = n.list.getCurrentGroup().value;
                  o === n.list.GROUP_BY_STATUS_VALUE
                    ? yield n.updateGroupName(t)
                    : o === n.list.GROUP_BY_PHASE_VALUE &&
                      (yield n.updatePhase(t)),
                    (n.isEditColProgress = !1),
                    (n.edit = !1);
                } catch (o) {
                  (0, b.tu)(o), (n.isEditColProgress = !1);
                }
                n.cdr.markForCheck();
              }
            })();
          }
          updateGroupName(t) {
            var n = this;
            return (0, m.Z)(function* () {
              if (t?.id && n.templateId) {
                try {
                  const o = {
                      name: t.name,
                      template_id: n.templateId,
                      category_id: t.category_id,
                    },
                    r = yield n.statusApi.updateName(t.id, o);
                  if (r.done) {
                    const l = n.list.groups,
                      d = l.find((_) => _.id === r.body.id);
                    d &&
                      ((n.group.name = d.name = r.body.name || ""),
                      (n.group.color_code = d.color_code =
                        r.body.color_code || "")),
                      (n.list.groups = l);
                  }
                } catch {}
                n.cdr.markForCheck();
              }
            })();
          }
          updatePhase(t) {
            var n = this;
            return (0, m.Z)(function* () {
              if (t?.id && n.templateId) {
                try {
                  const o = { id: t.id, name: t.name },
                    r = yield n.phaseApi.update(n.templateId, o);
                  if (r.done) {
                    const l = n.list.phases,
                      d = l.find((_) => _.id === r.body.id);
                    d &&
                      ((n.group.name = d.name = r.body.name),
                      (n.group.color_code = d.color_code = r.body.color_code)),
                      (n.list.phases = l);
                  }
                } catch {}
                n.cdr.markForCheck();
              }
            })();
          }
          update(t) {
            var n = this;
            return (0, m.Z)(function* () {
              if (!n.isAdmin) return;
              const o = {
                  name: t.name,
                  template_id: n.templateId,
                  category_id: t.category_id,
                },
                r = yield n.statusApi.update(t.id, o);
              r.done &&
                null != r.body.color_code &&
                ((t.color_code = r.body.color_code + j.Yj),
                n.onCreateOrUpdate.emit()),
                n.cdr.markForCheck();
            })();
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(
              e.Y36(e.sBO),
              e.Y36(w.e),
              e.Y36(Ae),
              e.Y36(B),
              e.Y36(e.R0b),
              e.Y36(Ie)
            );
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-task-list-group-settings"]],
            inputs: {
              group: "group",
              templateId: "templateId",
              categories: "categories",
            },
            outputs: { toggle: "toggle", onCreateOrUpdate: "onCreateOrUpdate" },
            decls: 13,
            vars: 11,
            consts: [
              [
                1,
                "d-flex",
                "justify-content-between",
                "align-items-center",
                "position-relative",
              ],
              [1, "d-flex", "align-items-center"],
              ["nz-button", "", 1, "collapse", "btn", "border-0", 3, "click"],
              ["nz-icon", "", 1, "collapse-icon", 3, "nzType", "nzTheme"],
              [3, "ngSwitch"],
              [4, "ngSwitchCase"],
              [
                "nz-button",
                "",
                "class",
                "p-0",
                "nz-dropdown",
                "",
                3,
                "nzType",
                "nzTrigger",
                "nzDropdownMenu",
                "nzVisibleChange",
                4,
                "ngIf",
              ],
              ["menu", "nzDropdownMenu"],
              ["nz-menu", "", 4, "ngIf"],
              ["titleTemplate", ""],
              [
                "nz-input",
                "",
                1,
                "p-0",
                3,
                "id",
                "disabled",
                "ngModel",
                "ngModelChange",
                "keydown.enter",
                "blur",
              ],
              [
                "nz-icon",
                "",
                "class",
                "ms-2",
                3,
                "nzType",
                "nzTheme",
                4,
                "ngIf",
              ],
              ["nz-icon", "", 1, "ms-2", 3, "nzType", "nzTheme"],
              [
                "nz-button",
                "",
                "nz-dropdown",
                "",
                1,
                "p-0",
                3,
                "nzType",
                "nzTrigger",
                "nzDropdownMenu",
                "nzVisibleChange",
              ],
              ["nz-icon", "", 3, "nzType", "nzTheme"],
              ["nz-menu", ""],
              ["nz-menu-item", "", 3, "click"],
              [
                "nz-icon",
                "",
                "nzType",
                "edit",
                "nzTheme",
                "outline",
                1,
                "me-2",
              ],
              ["nz-submenu", "", 3, "nzTitle", 4, "ngIf"],
              ["nz-submenu", "", 3, "nzTitle"],
              [
                "class",
                "m-0",
                "nz-tooltip",
                "",
                "nz-menu-item",
                "",
                3,
                "nzTooltipTitle",
                "nzTooltipPlacement",
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              [
                "nz-tooltip",
                "",
                "nz-menu-item",
                "",
                1,
                "m-0",
                3,
                "nzTooltipTitle",
                "nzTooltipPlacement",
                "click",
              ],
              [3, "nzColor", "nzText"],
              ["textTmpl", ""],
              [
                "nz-icon",
                "",
                "nzType",
                "retweet",
                "nzTheme",
                "outline",
                1,
                "me-2",
              ],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "div", 0)(1, "div", 1)(2, "button", 2),
                e.NdJ("click", function (r) {
                  return n.onToggleClick(r);
                }),
                e._UZ(3, "span", 3),
                e.ynx(4, 4),
                e.YNc(5, zn, 3, 6, "ng-container", 5),
                e.YNc(6, Tn, 2, 2, "ng-container", 5),
                e.BQk(),
                e.qZA(),
                e.YNc(7, Cn, 2, 5, "button", 6),
                e.qZA()(),
                e.TgZ(8, "nz-dropdown-menu", null, 7),
                e.YNc(10, vn, 5, 1, "ul", 8),
                e.qZA(),
                e.YNc(11, wn, 2, 0, "ng-template", null, 9, e.W1O)),
                2 & t &&
                  (e.xp6(2),
                  e.Udp("background-color", n.group.color_code),
                  e.ekj("active", n.group.tasks.length),
                  e.xp6(1),
                  e.Q6J("nzType", "right")("nzTheme", "outline"),
                  e.xp6(1),
                  e.Q6J("ngSwitch", n.edit),
                  e.xp6(1),
                  e.Q6J("ngSwitchCase", !0),
                  e.xp6(1),
                  e.Q6J("ngSwitchCase", !1),
                  e.xp6(1),
                  e.Q6J("ngIf", n.canDisplayActions()),
                  e.xp6(3),
                  e.Q6J("ngIf", n.showMenu));
            },
            dependencies: [
              h.sg,
              h.O5,
              h.RF,
              h.n9,
              M.Ls,
              p.Fj,
              p.JJ,
              P.Zp,
              O.ix,
              v.w,
              L.dQ,
              T.wO,
              T.r9,
              T.rY,
              J.SY,
              p.On,
              ie.x7,
              E.cm,
              E.RR,
              E.wA,
              _e.m,
            ],
            styles: [
              ".collapse[_ngcontent-%COMP%]{color:hwb(0 0% 100%/.85);font-weight:500;padding:6px 13px 6px 12px;min-width:120px;width:auto;border:none;text-align:left;outline:none;border-top-right-radius:4px;border-top-left-radius:4px;-webkit-user-select:none;user-select:none;z-index:8;font-size:14px;height:30px;display:flex;align-items:center}.collapse.btn[_ngcontent-%COMP%]   .collapse-icon[_ngcontent-%COMP%]{transition:transform .1s;transform:rotate(0)}.collapse.btn.active[_ngcontent-%COMP%]   .collapse-icon[_ngcontent-%COMP%]{transition:transform .1s;transform:rotate(90deg)}.collapse.active[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-bottom-right-radius:0}.collapse[_ngcontent-%COMP%]:after{color:#777;font-weight:700;float:left;margin-left:5px}",
            ],
            changeDetection: 0,
          })),
          a
        );
      })();
      var Re = c(48327),
        we = c(62612),
        Le = c(44889);
      function Sn(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "button", 13),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.onPhaseSettingsClick());
            }),
            e._UZ(1, "span", 14),
            e.qZA();
        }
        2 & i &&
          (e.Q6J("nzShape", "circle")("nzSize", "small")("nzType", "text"),
          e.xp6(1),
          e.Q6J("nzType", "setting")("nzTheme", "outline"));
      }
      let Pn = (() => {
        var i;
        class a {
          get phaseLabel() {
            return this.phasesService.label;
          }
          constructor(t, n, o, r, l) {
            (this.service = t),
              (this.map = n),
              (this.cdr = o),
              (this.phasesService = r),
              (this.auth = l),
              (this.headerCls = "flex-table header"),
              (this.selectChange = new e.vpe()),
              (this.phaseSettingsClick = new e.vpe()),
              (this.checked = !1),
              (this.indeterminate = !1),
              this.map.onDeselectAll$.pipe((0, G.sL)()).subscribe(() => {
                (this.checked = !1),
                  (this.indeterminate = !1),
                  this.cdr.markForCheck();
              }),
              this.phasesService.onLabelChange
                .pipe((0, G.sL)())
                .subscribe((d) => {
                  this.cdr.markForCheck();
                }),
              (0, Ze.T)(this.map.onSelect$, this.map.onDeselect$)
                .pipe((0, G.sL)())
                .subscribe(() => {
                  this.map.isAllDeselected(this.groupId)
                    ? ((this.checked = !1), (this.indeterminate = !1))
                    : this.map.isAllSelected(this.groupId)
                    ? ((this.checked = !0), (this.indeterminate = !1))
                    : (this.indeterminate = !0),
                    this.cdr.markForCheck();
                });
          }
          onAllChecked(t) {
            this.selectChange?.emit(t);
          }
          onPhaseSettingsClick() {
            this.phaseSettingsClick.emit();
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(
              e.Y36(B),
              e.Y36(ue),
              e.Y36(e.sBO),
              e.Y36(Re.u),
              e.Y36(w.e)
            );
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-task-list-header"]],
            hostVars: 2,
            hostBindings: function (t, n) {
              2 & t && e.Tol(n.headerCls);
            },
            inputs: { groupId: "groupId" },
            outputs: {
              selectChange: "selectChange",
              phaseSettingsClick: "phaseSettingsClick",
            },
            decls: 27,
            vars: 8,
            consts: [
              [1, "flex-row", "task-drag-handler"],
              [1, "flex-row", "task-check"],
              [
                "nz-checkbox",
                "",
                3,
                "nzChecked",
                "nzIndeterminate",
                "nzCheckedChange",
              ],
              [1, "flex-row", "task-arrow"],
              [1, "flex-row", "task-name"],
              [1, "flex-row", "task-description"],
              [1, "flex-row", "task-labels"],
              [
                1,
                "flex-row",
                "task-phase",
                "d-flex",
                "justify-content-between",
                "align-items-center",
              ],
              ["nz-tooltip", "", 3, "nzTooltipTitle"],
              [
                "nz-button",
                "",
                3,
                "nzShape",
                "nzSize",
                "nzType",
                "click",
                4,
                "ngIf",
              ],
              [1, "flex-row", "task-status"],
              [1, "flex-row", "task-priority"],
              [1, "flex-row", "task-estimation", "justify-content-center"],
              ["nz-button", "", 3, "nzShape", "nzSize", "nzType", "click"],
              ["nz-icon", "", 3, "nzType", "nzTheme"],
            ],
            template: function (t, n) {
              1 & t &&
                (e._UZ(0, "div", 0),
                e.TgZ(1, "div", 1)(2, "span", 2),
                e.NdJ("nzCheckedChange", function (r) {
                  return (n.checked = r);
                })("nzCheckedChange", function (r) {
                  return n.onAllChecked(r);
                }),
                e.qZA()(),
                e._UZ(3, "div", 3),
                e.TgZ(4, "div", 4),
                e._uU(5, "Task"),
                e.qZA(),
                e.ynx(6),
                e.TgZ(7, "div", 5),
                e._uU(8, "Descripción"),
                e.qZA(),
                e.BQk(),
                e.ynx(9),
                e.TgZ(10, "div", 6),
                e._uU(11, "Etiquetas"),
                e.qZA(),
                e.BQk(),
                e.ynx(12),
                e.TgZ(13, "div", 7)(14, "span", 8),
                e._uU(15),
                e.ALo(16, "ellipsis"),
                e.qZA(),
                e.YNc(17, Sn, 2, 5, "button", 9),
                e.qZA(),
                e.BQk(),
                e.ynx(18),
                e.TgZ(19, "div", 10),
                e._uU(20, "Estado"),
                e.qZA(),
                e.BQk(),
                e.ynx(21),
                e.TgZ(22, "div", 11),
                e._uU(23, "Prioridad"),
                e.qZA(),
                e.BQk(),
                e.ynx(24),
                e.TgZ(25, "div", 12),
                e._uU(26, "Estimación"),
                e.qZA(),
                e.BQk()),
                2 & t &&
                  (e.xp6(2),
                  e.Q6J("nzChecked", n.checked)(
                    "nzIndeterminate",
                    n.indeterminate
                  ),
                  e.xp6(12),
                  e.Q6J("nzTooltipTitle", n.phaseLabel),
                  e.xp6(1),
                  e.Oqu(e.xi3(16, 5, n.phaseLabel, 10)),
                  e.xp6(2),
                  e.Q6J("ngIf", n.auth.isOwnerOrAdmin()));
            },
            dependencies: [h.O5, M.Ls, O.ix, v.w, L.dQ, J.SY, we.Ie, Le.p],
            styles: [
              ".flex-row[_ngcontent-%COMP%]{padding:4px 11px;background-color:#fafafa;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;border-right:1px solid #f0f0f0;display:flex;align-items:center;flex-direction:row}.task-drag-handler[_ngcontent-%COMP%]{padding:0 0 0 4px!important;width:24px;border-bottom:1px solid #f0f0f0;border-right:none!important;position:sticky;left:0;z-index:1}.task-check[_ngcontent-%COMP%]{text-align:center;padding:8px 6px 8px 0!important;position:sticky;left:24px;z-index:1}.task-arrow[_ngcontent-%COMP%]{width:24px;padding:0!important;display:flex;align-items:center;position:sticky;border-right:0;left:47px;z-index:1}.task-name[_ngcontent-%COMP%]{width:450px;min-width:450px;position:sticky;left:71px;z-index:1}.task-name[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]{margin-left:auto}.task-name.left-0[_ngcontent-%COMP%]{left:47px}.task-description[_ngcontent-%COMP%]{width:225px}.task-labels[_ngcontent-%COMP%]{width:220px}.task-status[_ngcontent-%COMP%]{width:120px}.task-phase[_ngcontent-%COMP%]{width:150px}.task-priority[_ngcontent-%COMP%], .task-estimation[_ngcontent-%COMP%]{width:120px}.task-start-date[_ngcontent-%COMP%], .task-due-date[_ngcontent-%COMP%]{width:150px}",
            ],
            changeDetection: 0,
          })),
          a
        );
      })();
      var W = c(32181),
        Be = c(42753),
        He = c(6192);
      const Mn = ["descriptionInput"],
        On = ["descriptionEditor"];
      function An(i, a) {
        if ((1 & i && e._UZ(0, "span", 8), 2 & i)) {
          const s = e.oxw();
          e.Q6J("innerHTML", s.task.description, e.oJD);
        }
      }
      function In(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "div", 9)(1, "nz-form-item", 10)(2, "nz-form-control", 11)(
            3,
            "editor",
            12,
            13
          ),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(s);
              const o = e.oxw();
              return e.KtG((o.task.description = n));
            })("onBlur", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.submit());
            }),
            e.qZA()()()();
        }
        if (2 & i) {
          const s = e.oxw();
          e.xp6(1),
            e.Udp("width", "550px"),
            e.xp6(2),
            e.ekj("editing", s.isEditing),
            e.Q6J("init", s.CONFIG)("apiKey", s.apiKey)(
              "ngModel",
              s.task.description
            );
        }
      }
      let Zn = (() => {
        var i;
        class a {
          constructor(t, n, o, r) {
            (this.cdr = t),
              (this.socket = n),
              (this.service = o),
              (this.ngZone = r),
              (this.task = {}),
              (this.cls = "flex-row task-description p-0"),
              (this.show = !1),
              (this.loading = !1),
              (this.apiKey =
                "4nquevykvy1i0q0v62ksxuu3nz1muy8i5fsqpj3wp9qm2mgp"),
              (this.CONFIG = {
                plugins: "lists link code wordcount",
                toolbar:
                  "blocks bold italic underline strikethrough | checklist numlist bullist link | alignleft aligncenter alignright alignjustify",
                menubar: !1,
                content_css: "/assets/css/prebuilt-editor.css",
                statusbar: !0,
                branding: !1,
                height: 200,
                min_height: 100,
              }),
              (this.isEditing = !1),
              (this.handleResponse = (l) => {
                this.task.id === l?.id &&
                  ((this.task.description = l.description),
                  this.closeDropdown(),
                  this.cdr.markForCheck());
              });
          }
          ngOnInit() {
            this.socket.on(
              k.C.PT_TASK_DESCRIPTION_CHANGE.toString(),
              this.handleResponse
            );
          }
          ngOnDestroy() {
            this.socket.removeListener(
              k.C.PT_TASK_DESCRIPTION_CHANGE.toString(),
              this.handleResponse
            );
          }
          handleVisibleChange(t, n) {
            (this.show = t),
              t
                ? n.classList.add(this.service.HIGHLIGHT_COL_CLS)
                : n.classList.remove(this.service.HIGHLIGHT_COL_CLS);
          }
          submit() {
            this.socket.emit(
              k.C.PT_TASK_DESCRIPTION_CHANGE.toString(),
              JSON.stringify({
                task_id: this.task.id,
                description: this.task.description,
              })
            );
          }
          closeDropdown() {
            this.ngZone.runOutsideAngular(() => {
              document.body.click();
            });
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(
              e.Y36(e.sBO),
              e.Y36(q.s),
              e.Y36(B),
              e.Y36(e.R0b)
            );
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-task-description"]],
            viewQuery: function (t, n) {
              if ((1 & t && (e.Gf(Mn, 5), e.Gf(On, 5)), 2 & t)) {
                let o;
                e.iGM((o = e.CRH())) && (n.descriptionInput = o.first),
                  e.iGM((o = e.CRH())) && (n.descriptionEditor = o.first);
              }
            },
            hostVars: 2,
            hostBindings: function (t, n) {
              2 & t && e.Tol(n.cls);
            },
            inputs: { task: "task" },
            decls: 13,
            vars: 11,
            consts: [
              [
                "nz-dropdown",
                "",
                1,
                "editable",
                "w-100",
                "h-100",
                "d-flex",
                "align-items-center",
                "ps-2",
                "pe-0",
                "label-tag-container",
                3,
                "nzOverlayClassName",
                "nzTrigger",
                "nzClickHide",
                "nzDropdownMenu",
                "nzVisibleChange",
              ],
              ["element", ""],
              ["nz-tooltip", "", 3, "innerHTML", "nzTooltipTitle"],
              ["descriptionTooltip", ""],
              ["descriptionDropdown", "nzDropdownMenu"],
              ["class", "bg-white px-0 py-0", 4, "ngIf"],
              [
                1,
                "bg-white",
                "d-flex",
                "justify-content-end",
                "p-2",
                "border-top",
              ],
              [
                "nz-button",
                "",
                "nzType",
                "primary",
                "nzSize",
                "small",
                3,
                "click",
              ],
              ["nz-typography", "", 1, "text-white", 3, "innerHTML"],
              [1, "bg-white", "px-0", "py-0"],
              ["nz-row", "", 1, "task-description-editor-list", "mb-0"],
              [1, "description-hover", "position-relative"],
              [
                1,
                "description-editor-list",
                3,
                "init",
                "apiKey",
                "ngModel",
                "ngModelChange",
                "onBlur",
              ],
              ["descriptionEditor", ""],
            ],
            template: function (t, n) {
              if (1 & t) {
                const o = e.EpF();
                e.TgZ(0, "div", 0, 1),
                  e.NdJ("nzVisibleChange", function (l) {
                    e.CHM(o);
                    const d = e.MAs(1);
                    return e.KtG(n.handleVisibleChange(l, d));
                  }),
                  e.ynx(2),
                  e._UZ(3, "span", 2),
                  e.ALo(4, "nzEllipsis"),
                  e.BQk(),
                  e.qZA(),
                  e.YNc(5, An, 1, 1, "ng-template", null, 3, e.W1O),
                  e.TgZ(7, "nz-dropdown-menu", null, 4),
                  e.YNc(9, In, 5, 7, "div", 5),
                  e.TgZ(10, "div", 6)(11, "button", 7),
                  e.NdJ("click", function () {
                    return n.submit();
                  }),
                  e._uU(12, "OK"),
                  e.qZA()()();
              }
              if (2 & t) {
                const o = e.MAs(6),
                  r = e.MAs(8);
                e.Q6J("nzOverlayClassName", "custom-shadow")(
                  "nzTrigger",
                  "click"
                )("nzClickHide", !1)("nzDropdownMenu", r),
                  e.xp6(3),
                  e.Q6J(
                    "innerHTML",
                    e.Dn7(4, 7, n.task.description, 55, "..."),
                    e.oJD
                  )("nzTooltipTitle", o),
                  e.xp6(6),
                  e.Q6J("ngIf", n.show);
              }
            },
            dependencies: [
              h.O5,
              p.JJ,
              Z.t3,
              Z.SK,
              x.Nx,
              x.Fd,
              O.ix,
              v.w,
              L.dQ,
              Q.ZU,
              J.SY,
              p.On,
              E.cm,
              E.RR,
              Be.PG,
              He.N7,
            ],
            styles: [
              "[_nghost-%COMP%]{display:block;max-width:640px}.description-editor-placeholder[_ngcontent-%COMP%]{pointer-events:none;-webkit-user-select:none;user-select:none;position:absolute;inset:0;display:flex;align-items:center}.description-editor-preview[_ngcontent-%COMP%]{position:relative;min-height:32px}.description-editor-preview.empty[_ngcontent-%COMP%]{display:flex;align-items:center;padding:10px}.task-description-editor[_ngcontent-%COMP%]{padding-left:12px;padding-right:12px;padding-bottom:12px;margin-left:-12px;margin-right:-12px;margin-bottom:-12px}",
            ],
            changeDetection: 0,
          })),
          a
        );
      })();
      var Ln = c(86211);
      let Fn = (() => {
          var i;
          class a {
            transform(t, n) {
              return t && t.length > n ? t : "";
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)();
            }),
            (i.ɵpipe = e.Yjl({
              name: "ellipsisTooltipTitlePT",
              type: i,
              pure: !0,
            })),
            a
          );
        })(),
        Nn = (() => {
          var i;
          class a {
            transform(t, ...n) {
              return !(!t.end || !t.names);
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)();
            }),
            (i.ɵpipe = e.Yjl({ name: "endNameCheckPT", type: i, pure: !0 })),
            a
          );
        })();
      const En = ["labelsSearchInput"];
      function Un(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "nz-tag", 14),
            e.ALo(1, "withAlpha"),
            e.ALo(2, "safeString"),
            e.TgZ(3, "span"),
            e._uU(4),
            e.ALo(5, "ellipsis"),
            e.qZA()()),
          2 & i)
        ) {
          const s = e.oxw().$implicit;
          e.Q6J("nzColor", e.lcZ(1, 3, s.color_code))(
            "nzTooltipTitle",
            e.lcZ(2, 5, s.names)
          ),
            e.xp6(4),
            e.Oqu(e.xi3(5, 7, s.name, 10));
        }
      }
      function Jn(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "nz-tag", 15),
            e.ALo(1, "ellipsisTooltipTitlePT"),
            e.ALo(2, "withAlpha"),
            e.TgZ(3, "span"),
            e._uU(4),
            e.ALo(5, "ellipsis"),
            e.qZA()()),
          2 & i)
        ) {
          const s = e.oxw().$implicit;
          e.Q6J("nzTooltipTitle", e.xi3(1, 3, s.name, 5))(
            "nzColor",
            e.lcZ(2, 6, s.color_code)
          ),
            e.xp6(4),
            e.Oqu(e.xi3(5, 8, s.name, 10));
        }
      }
      function Gn(i, a) {
        if (
          (1 & i &&
            (e.ynx(0)(1, 11),
            e.ALo(2, "endNameCheckPT"),
            e.YNc(3, Un, 6, 10, "nz-tag", 12),
            e.YNc(4, Jn, 6, 11, "nz-tag", 13),
            e.BQk()()),
          2 & i)
        ) {
          const s = a.$implicit;
          e.xp6(1),
            e.Q6J("ngSwitch", e.lcZ(2, 3, s)),
            e.xp6(2),
            e.Q6J("ngSwitchCase", !0),
            e.xp6(1),
            e.Q6J("ngSwitchCase", !1);
        }
      }
      function Dn(i, a) {
        1 & i &&
          (e.TgZ(0, "span", 20), e._uU(1, " Hit enter to create! "), e.qZA());
      }
      function Yn(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "div", 16)(1, "input", 17, 18),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(s);
              const o = e.oxw();
              return e.KtG((o.searchText = n));
            })("keydown.enter", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.createLabel());
            }),
            e.qZA(),
            e.YNc(3, Dn, 2, 0, "span", 19),
            e.qZA();
        }
        if (2 & i) {
          const s = e.oxw();
          e.ekj("border-bottom", s.hasFilteredLabel),
            e.xp6(1),
            e.Q6J("ngModel", s.searchText),
            e.xp6(2),
            e.Q6J("ngIf", !s.hasFilteredLabel);
        }
      }
      function Qn(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "li", 23),
            e.NdJ("nzCheckedChange", function (n) {
              const r = e.CHM(s).$implicit;
              return e.KtG((r.selected = n));
            })("nzCheckedChange", function () {
              const o = e.CHM(s).$implicit,
                r = e.oxw(2);
              return e.KtG(r.handleLabelChange(o));
            }),
            e._UZ(1, "nz-badge", 24),
            e.qZA();
        }
        if (2 & i) {
          const s = a.$implicit;
          e.Q6J("nzChecked", s.selected),
            e.xp6(1),
            e.Q6J("nzColor", s.color_code)(
              "nzText",
              (null == s ? null : s.name) || null
            );
        }
      }
      function Rn(i, a) {
        if (
          (1 & i && (e.TgZ(0, "ul", 21), e.YNc(1, Qn, 2, 3, "li", 22), e.qZA()),
          2 & i)
        ) {
          const s = e.oxw();
          e.xp6(1),
            e.Q6J("ngForOf", s.filteredLabels)("ngForTrackBy", s.trackById);
        }
      }
      let Bn = (() => {
          var i;
          class a {
            get hasFilteredLabel() {
              return !!this.filteredLabels.length;
            }
            get filteredLabels() {
              return this.searchPipe.transform(this.labels, this.searchText);
            }
            constructor(t, n, o, r, l, d, _) {
              (this.cdr = t),
                (this.searchPipe = n),
                (this.auth = o),
                (this.socket = r),
                (this.utils = l),
                (this.ngZone = d),
                (this.service = _),
                (this.task = {}),
                (this.cls = "flex-row task-labels"),
                (this.alpha = j.Yj),
                (this.searchText = null),
                (this.labels = []),
                (this.show = !1),
                (this.handleLabelsChange = (y) => {
                  if (y && y.id === this.task.id) {
                    if (
                      ((this.task.labels = y.labels),
                      (this.task.all_labels = y.all_labels),
                      y.new_label)
                    )
                      if (y.is_new) {
                        const S = [...this.service.labels];
                        S.push(y.new_label), (this.service.labels = [...S]);
                      } else {
                        const S = this.labels.find(
                          (be) => be.id === y.new_label.id
                        );
                        S && (S.selected = !0);
                      }
                    this.cdr.markForCheck();
                  }
                }),
                this.service.onLabelsChange$.pipe((0, G.sL)()).subscribe(() => {
                  this.updateLabels(), this.cdr.markForCheck();
                });
            }
            ngOnInit() {
              this.updateLabels(),
                this.socket.on(
                  k.C.PT_TASK_LABELS_CHANGE.toString(),
                  this.handleLabelsChange
                ),
                this.socket.on(
                  k.C.PT_CREATE_LABEL.toString(),
                  this.handleLabelsChange
                );
            }
            ngOnDestroy() {
              (this.labels = []),
                this.socket.removeListener(
                  k.C.PT_TASK_LABELS_CHANGE.toString(),
                  this.handleLabelsChange
                ),
                this.socket.removeListener(
                  k.C.PT_CREATE_LABEL.toString(),
                  this.handleLabelsChange
                );
            }
            updateLabels() {
              this.labels = this.service.labels;
            }
            trackById(t, n) {
              return n.id;
            }
            sortBySelected(t) {
              this.utils.sortBySelection(t);
            }
            handleLabelsVisibleChange(t, n) {
              if (
                ((this.show = t),
                t
                  ? n.classList.add(this.service.HIGHLIGHT_COL_CLS)
                  : n.classList.remove(this.service.HIGHLIGHT_COL_CLS),
                t)
              ) {
                const o = this.task.all_labels?.map((r) => r.id) ?? [];
                for (const r of this.labels) r.selected = o.includes(r.id);
                this.focusLabelsSearchInput();
              } else {
                this.searchText = null;
                for (const o of this.labels) o.selected = !1;
              }
              this.sortBySelected(this.labels);
            }
            focusLabelsSearchInput() {
              this.ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                  this.labelsSearchInput?.nativeElement?.focus();
                }, 100);
              });
            }
            handleLabelChange(t) {
              this.socket.emit(
                k.C.PT_TASK_LABELS_CHANGE.toString(),
                JSON.stringify({
                  task_id: this.task.id,
                  label_id: t.id,
                  parent_task: this.task.parent_task_id,
                })
              ),
                this.sortBySelected(this.labels);
            }
            createLabel() {
              if (this.hasFilteredLabel || !this.searchText) return;
              const t = this.auth.getCurrentSession();
              this.socket.emit(
                k.C.PT_CREATE_LABEL.toString(),
                JSON.stringify({
                  task_id: this.task.id,
                  label: this.searchText.trim(),
                  team_id: t?.team_id,
                  parent_task: this.task.parent_task_id,
                })
              ),
                (this.searchText = null),
                this.cdr.detectChanges();
            }
            closeDropdown() {
              this.ngZone.runOutsideAngular(() => {
                document.body.click();
              });
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)(
                e.Y36(e.sBO),
                e.Y36(Oe.g),
                e.Y36(w.e),
                e.Y36(q.s),
                e.Y36(de.F),
                e.Y36(e.R0b),
                e.Y36(B)
              );
            }),
            (i.ɵcmp = e.Xpm({
              type: i,
              selectors: [["worklenz-task-labels"]],
              viewQuery: function (t, n) {
                if ((1 & t && e.Gf(En, 5), 2 & t)) {
                  let o;
                  e.iGM((o = e.CRH())) && (n.labelsSearchInput = o.first);
                }
              },
              hostVars: 2,
              hostBindings: function (t, n) {
                2 & t && e.Tol(n.cls);
              },
              inputs: { task: "task" },
              decls: 13,
              vars: 11,
              consts: [
                [
                  "nz-dropdown",
                  "",
                  1,
                  "editable",
                  "w-100",
                  "h-100",
                  "d-flex",
                  "align-items-center",
                  "ps-2",
                  "pe-0",
                  "label-tag-container",
                  3,
                  "nzOverlayClassName",
                  "nzTrigger",
                  "nzClickHide",
                  "nzDropdownMenu",
                  "nzVisibleChange",
                ],
                ["element", ""],
                [4, "ngFor", "ngForOf", "ngForTrackBy"],
                [
                  1,
                  "text-dark",
                  "avatar-dashed",
                  "empty-label",
                  "task-list-label",
                ],
                ["nz-typography", "", 3, "nzType"],
                ["nz-icon", "", 3, "nzType", "nzTheme"],
                ["labelsDropdown", "nzDropdownMenu"],
                ["class", "bg-white px-3 py-2", 3, "border-bottom", 4, "ngIf"],
                [
                  "style",
                  "box-shadow: none;",
                  "class",
                  "dropdown-ul",
                  "nz-menu",
                  "",
                  4,
                  "ngIf",
                ],
                [
                  1,
                  "bg-white",
                  "d-flex",
                  "justify-content-end",
                  "p-2",
                  "border-top",
                ],
                [
                  "nz-button",
                  "",
                  "nzType",
                  "primary",
                  "nzSize",
                  "small",
                  3,
                  "click",
                ],
                [3, "ngSwitch"],
                [
                  "nz-tooltip",
                  "",
                  "class",
                  "text-dark task-list-label",
                  3,
                  "nzColor",
                  "nzTooltipTitle",
                  4,
                  "ngSwitchCase",
                ],
                [
                  "class",
                  "text-dark task-list-label",
                  "nz-tooltip",
                  "",
                  3,
                  "nzTooltipTitle",
                  "nzColor",
                  4,
                  "ngSwitchCase",
                ],
                [
                  "nz-tooltip",
                  "",
                  1,
                  "text-dark",
                  "task-list-label",
                  3,
                  "nzColor",
                  "nzTooltipTitle",
                ],
                [
                  "nz-tooltip",
                  "",
                  1,
                  "text-dark",
                  "task-list-label",
                  3,
                  "nzTooltipTitle",
                  "nzColor",
                ],
                [1, "bg-white", "px-3", "py-2"],
                [
                  "type",
                  "text",
                  "placeholder",
                  "Search or create",
                  "nz-input",
                  "",
                  3,
                  "ngModel",
                  "ngModelChange",
                  "keydown.enter",
                ],
                ["labelsSearchInput", ""],
                ["nz-typography", "", "nzType", "secondary", 4, "ngIf"],
                ["nz-typography", "", "nzType", "secondary"],
                ["nz-menu", "", 1, "dropdown-ul", 2, "box-shadow", "none"],
                [
                  "nz-checkbox",
                  "",
                  "nz-menu-item",
                  "",
                  "class",
                  "m-0",
                  3,
                  "nzChecked",
                  "nzCheckedChange",
                  4,
                  "ngFor",
                  "ngForOf",
                  "ngForTrackBy",
                ],
                [
                  "nz-checkbox",
                  "",
                  "nz-menu-item",
                  "",
                  1,
                  "m-0",
                  3,
                  "nzChecked",
                  "nzCheckedChange",
                ],
                [3, "nzColor", "nzText"],
              ],
              template: function (t, n) {
                if (1 & t) {
                  const o = e.EpF();
                  e.TgZ(0, "div", 0, 1),
                    e.NdJ("nzVisibleChange", function (l) {
                      e.CHM(o);
                      const d = e.MAs(1);
                      return e.KtG(n.handleLabelsVisibleChange(l, d));
                    }),
                    e.YNc(2, Gn, 5, 5, "ng-container", 2),
                    e.TgZ(3, "nz-tag", 3)(4, "span", 4),
                    e._UZ(5, "span", 5),
                    e.qZA()()(),
                    e.TgZ(6, "nz-dropdown-menu", null, 6),
                    e.YNc(8, Yn, 4, 4, "div", 7),
                    e.YNc(9, Rn, 2, 2, "ul", 8),
                    e.TgZ(10, "div", 9)(11, "button", 10),
                    e.NdJ("click", function () {
                      return n.closeDropdown();
                    }),
                    e._uU(12, "OK"),
                    e.qZA()()();
                }
                if (2 & t) {
                  const o = e.MAs(7);
                  e.Q6J("nzOverlayClassName", "custom-shadow")(
                    "nzTrigger",
                    "click"
                  )("nzClickHide", !1)("nzDropdownMenu", o),
                    e.xp6(2),
                    e.Q6J("ngForOf", n.task.labels)(
                      "ngForTrackBy",
                      n.trackById
                    ),
                    e.xp6(2),
                    e.Q6J("nzType", "secondary"),
                    e.xp6(1),
                    e.Q6J("nzType", "plus")("nzTheme", "outline"),
                    e.xp6(3),
                    e.Q6J("ngIf", n.show),
                    e.xp6(1),
                    e.Q6J("ngIf", n.show);
                }
              },
              dependencies: [
                h.sg,
                h.O5,
                h.RF,
                h.n9,
                M.Ls,
                p.Fj,
                p.JJ,
                P.Zp,
                O.ix,
                v.w,
                L.dQ,
                Q.ZU,
                T.wO,
                T.r9,
                J.SY,
                p.On,
                ie.x7,
                E.cm,
                E.RR,
                ze.j,
                we.Ie,
                _e.m,
                Le.p,
                Ln.M,
                Fn,
                Nn,
              ],
              styles: [
                ".dropdown-ul[_ngcontent-%COMP%]{max-height:250px;overflow:hidden;overflow-y:auto}.label-tag-container[_ngcontent-%COMP%]{max-width:220px;overflow:hidden;flex-wrap:wrap;padding-top:8px;padding-bottom:8px;padding-right:0}nz-tag[_ngcontent-%COMP%]{display:block;overflow:hidden;white-space:break-spaces;margin-left:3px;margin-right:3px;line-height:16px;padding-left:3px;padding-right:3px}.empty-label[_ngcontent-%COMP%]{padding:2px 8px 3px}.empty-label[_ngcontent-%COMP%]   .ant-typography[_ngcontent-%COMP%]{display:flex}",
              ],
              changeDetection: 0,
            })),
            a
          );
        })(),
        Hn = (() => {
          var i;
          class a {
            transform(t, n = 0) {
              return t ? (t.length > n ? `${t.slice(0, n)}...` : t) : "";
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)();
            }),
            (i.ɵpipe = e.Yjl({ name: "truncateIfLongPT", type: i, pure: !0 })),
            a
          );
        })();
      function $n(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "nz-option", 3),
            e.ALo(1, "truncateIfLongPT"),
            e._UZ(2, "nz-badge", 4),
            e.ALo(3, "safeString"),
            e.qZA()),
          2 & i)
        ) {
          const s = a.$implicit;
          e.Q6J("nzValue", s.id)("nzLabel", e.xi3(1, 4, s.name, 12)),
            e.xp6(2),
            e.Q6J("nzColor", e.lcZ(3, 7, s.color_code))(
              "nzText",
              (null == s ? null : s.name) || null
            );
        }
      }
      let jn = (() => {
        var i;
        class a {
          constructor(t, n, o, r, l, d) {
            (this.service = t),
              (this.socket = n),
              (this.cdr = o),
              (this.ngZone = r),
              (this.element = l),
              (this.renderer = d),
              (this.task = {}),
              (this.cls = "flex-row task-phase"),
              (this.PHASE_COLOR = "#a9a9a9" + j.Yj),
              (this.PLACEHOLDER_COLOR = "rgba(0, 0, 0, 0.85) !important"),
              (this.phases = []),
              (this.loading = !1),
              (this.handleResponse = (_) => {
                _ &&
                  _.task_id === this.task.id &&
                  ((this.task.phase_color = _.color_code || void 0),
                  (this.task.phase_id = _.id),
                  this.isGroupByPhase() &&
                    (this.task.is_sub_task ||
                      this.service.updateTaskGroup(this.task, !1),
                    this.service.isSubtasksIncluded &&
                      this.service.emitRefreshSubtasksIncluded()),
                  this.cdr.markForCheck());
              }),
              this.service.onPhaseChange$.pipe((0, G.sL)()).subscribe(() => {
                this.updatePhases(), this.cdr.markForCheck();
              }),
              this.service.onGroupChange$
                .pipe(
                  (0, W.h)((_) => _.taskId === this.task.id),
                  (0, W.h)(() => this.isGroupByPhase()),
                  (0, G.sL)()
                )
                .subscribe((_) => {
                  "Unmapped" === _.groupId && (_.color = ""),
                    (this.task.phase_id = _.groupId),
                    (this.task.phase_color = _.color),
                    this.cdr.markForCheck();
                });
          }
          ngOnInit() {
            this.updatePhases(),
              this.socket.on(
                k.C.PT_TASK_PHASE_CHANGE.toString(),
                this.handleResponse
              );
          }
          ngOnDestroy() {
            this.socket.removeListener(
              k.C.PT_TASK_PHASE_CHANGE.toString(),
              this.handleResponse
            );
          }
          isGroupByPhase() {
            return (
              this.service.getCurrentGroup().value ===
              this.service.GROUP_BY_PHASE_VALUE
            );
          }
          trackById(t, n) {
            return n.id;
          }
          handleChange(t, n) {
            n &&
              this.socket.emit(
                k.C.PT_TASK_PHASE_CHANGE.toString(),
                JSON.stringify({ task_id: n, phase_id: t })
              );
          }
          updatePhases() {
            this.phases = this.service.phases;
          }
          toggleHighlightCls(t, n) {
            this.ngZone.runOutsideAngular(() => {
              t
                ? this.renderer.addClass(n, this.service.HIGHLIGHT_COL_CLS)
                : this.renderer.removeClass(n, this.service.HIGHLIGHT_COL_CLS);
            });
          }
          handleOpen(t) {
            this.toggleHighlightCls(t, this.element.nativeElement);
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(
              e.Y36(B),
              e.Y36(q.s),
              e.Y36(e.sBO),
              e.Y36(e.R0b),
              e.Y36(e.SBq),
              e.Y36(e.Qsj)
            );
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-task-phase"]],
            hostVars: 2,
            hostBindings: function (t, n) {
              2 & t && e.Tol(n.cls);
            },
            inputs: { task: "task" },
            decls: 3,
            vars: 9,
            consts: [
              [1, "py-0"],
              [
                "nzAllowClear",
                "",
                1,
                "rounded-pill",
                "custom-select",
                3,
                "ngModel",
                "nzLoading",
                "nzDropdownMatchSelectWidth",
                "nzSize",
                "nzPlaceHolder",
                "ngModelChange",
                "nzOpenChange",
              ],
              [
                "nzCustomContent",
                "",
                3,
                "nzValue",
                "nzLabel",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              ["nzCustomContent", "", 3, "nzValue", "nzLabel"],
              [3, "nzColor", "nzText"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "div", 0)(1, "nz-select", 1),
                e.NdJ("ngModelChange", function (r) {
                  return (n.task.phase_id = r);
                })("ngModelChange", function (r) {
                  return n.handleChange(r, n.task.id);
                })("nzOpenChange", function (r) {
                  return n.handleOpen(r);
                }),
                e.YNc(2, $n, 4, 9, "nz-option", 2),
                e.qZA()()),
                2 & t &&
                  (e.xp6(1),
                  e.Udp("background-color", n.task.phase_color),
                  e.Q6J("ngModel", n.task.phase_id)("nzLoading", n.loading)(
                    "nzDropdownMatchSelectWidth",
                    !1
                  )("nzSize", "small")("nzPlaceHolder", "Select"),
                  e.xp6(1),
                  e.Q6J("ngForOf", n.phases)("ngForTrackBy", n.trackById));
            },
            dependencies: [h.sg, p.JJ, K.Ip, K.Vq, p.On, ie.x7, _e.m, Hn],
            changeDetection: 0,
          })),
          a
        );
      })();
      function qn(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "nz-option", 3),
            e.ALo(1, "safeString"),
            e._UZ(2, "nz-badge", 4),
            e.ALo(3, "safeString"),
            e.qZA()),
          2 & i)
        ) {
          const s = a.$implicit;
          e.Q6J("nzValue", s.id)("nzLabel", e.lcZ(1, 4, s.name)),
            e.xp6(2),
            e.Q6J("nzColor", e.lcZ(3, 6, s.color_code))(
              "nzText",
              (null == s ? null : s.name) || null
            );
        }
      }
      let Vn = (() => {
        var i;
        class a {
          constructor(t, n, o, r, l, d) {
            (this.service = t),
              (this.socket = n),
              (this.cdr = o),
              (this.ngZone = r),
              (this.element = l),
              (this.renderer = d),
              (this.task = {}),
              (this.cls = "flex-row task-status"),
              (this.statuses = []),
              (this.loading = !1),
              (this.handleResponse = (_) => {
                _ &&
                  _.id === this.task.id &&
                  ((this.task.status_color = _.color_code),
                  (this.task.status = _.status_id),
                  (this.task.status_category = _.statusCategory),
                  this.isGroupByStatus() &&
                    (this.task.is_sub_task ||
                      this.service.updateTaskGroup(this.task, !1),
                    this.service.isSubtasksIncluded &&
                      this.service.emitRefreshSubtasksIncluded()),
                  this.cdr.markForCheck());
              }),
              this.service.onStatusesChange$.pipe((0, G.sL)()).subscribe(() => {
                this.updateStatuses(), this.cdr.markForCheck();
              }),
              this.service.onGroupChange$
                .pipe(
                  (0, W.h)((_) => _.taskId === this.task.id),
                  (0, W.h)(() => this.isGroupByStatus()),
                  (0, G.sL)()
                )
                .subscribe((_) => {
                  (this.task.status = _.groupId),
                    (this.task.status_color = _.color),
                    this.cdr.markForCheck();
                });
          }
          ngOnInit() {
            this.updateStatuses(),
              this.socket.on(
                k.C.PT_TASK_STATUS_CHANGE.toString(),
                this.handleResponse
              );
          }
          ngOnDestroy() {
            this.socket.removeListener(
              k.C.PT_TASK_STATUS_CHANGE.toString(),
              this.handleResponse
            );
          }
          isGroupByStatus() {
            return (
              this.service.getCurrentGroup().value ===
              this.service.GROUP_BY_STATUS_VALUE
            );
          }
          trackById(t, n) {
            return n.id;
          }
          handleStatusChange(t, n) {
            n &&
              this.socket.emit(
                k.C.PT_TASK_STATUS_CHANGE.toString(),
                JSON.stringify({
                  task_id: n,
                  status_id: t,
                  parent_task: this.task.parent_task_id,
                })
              );
          }
          updateStatuses() {
            this.statuses = this.service.statuses;
          }
          toggleHighlightCls(t, n) {
            this.ngZone.runOutsideAngular(() => {
              t
                ? this.renderer.addClass(n, this.service.HIGHLIGHT_COL_CLS)
                : this.renderer.removeClass(n, this.service.HIGHLIGHT_COL_CLS);
            });
          }
          handleOpen(t) {
            this.toggleHighlightCls(t, this.element.nativeElement);
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(
              e.Y36(B),
              e.Y36(q.s),
              e.Y36(e.sBO),
              e.Y36(e.R0b),
              e.Y36(e.SBq),
              e.Y36(e.Qsj)
            );
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-task-status"]],
            hostVars: 2,
            hostBindings: function (t, n) {
              2 & t && e.Tol(n.cls);
            },
            inputs: { task: "task" },
            decls: 3,
            vars: 8,
            consts: [
              [1, "py-0"],
              [
                1,
                "rounded-pill",
                "custom-select",
                3,
                "ngModel",
                "nzLoading",
                "nzDropdownMatchSelectWidth",
                "nzSize",
                "ngModelChange",
                "nzOpenChange",
              ],
              [
                "nzCustomContent",
                "",
                3,
                "nzValue",
                "nzLabel",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              ["nzCustomContent", "", 3, "nzValue", "nzLabel"],
              [3, "nzColor", "nzText"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "div", 0)(1, "nz-select", 1),
                e.NdJ("ngModelChange", function (r) {
                  return (n.task.status = r);
                })("ngModelChange", function (r) {
                  return n.handleStatusChange(r, n.task.id);
                })("nzOpenChange", function (r) {
                  return n.handleOpen(r);
                }),
                e.YNc(2, qn, 4, 8, "nz-option", 2),
                e.qZA()()),
                2 & t &&
                  (e.xp6(1),
                  e.Udp("background-color", n.task.status_color),
                  e.Q6J("ngModel", n.task.status)("nzLoading", n.loading)(
                    "nzDropdownMatchSelectWidth",
                    !1
                  )("nzSize", "small"),
                  e.xp6(1),
                  e.Q6J("ngForOf", n.statuses)("ngForTrackBy", n.trackById));
            },
            dependencies: [h.sg, p.JJ, K.Ip, K.Vq, p.On, ie.x7, _e.m],
            styles: ["nz-select[_ngcontent-%COMP%]{max-width:100px}"],
            changeDetection: 0,
          })),
          a
        );
      })();
      var $e = c(8660);
      function Kn(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "nz-option", 3),
            e._UZ(1, "worklenz-task-priority-label", 4),
            e.qZA()),
          2 & i)
        ) {
          const s = a.$implicit;
          e.Q6J("nzValue", s.id)("nzLabel", s.name)("nzCustomContent", !0),
            e.xp6(1),
            e.Q6J("name", s.name);
        }
      }
      let Wn = (() => {
        var i;
        class a {
          constructor(t, n, o, r, l, d) {
            (this.service = t),
              (this.socket = n),
              (this.cdr = o),
              (this.ngZone = r),
              (this.element = l),
              (this.renderer = d),
              (this.task = {}),
              (this.cls = "flex-row task-priority"),
              (this.priorities = []),
              (this.loading = !1),
              (this.handleResponse = (_) => {
                _ &&
                  _.id === this.task.id &&
                  ((this.task.priority_color = _.color_code),
                  (this.task.priority = _.priority_id),
                  this.isGroupByPriority() &&
                    (this.task.is_sub_task ||
                      this.service.updateTaskGroup(this.task, !1),
                    this.service.isSubtasksIncluded &&
                      this.service.emitRefreshSubtasksIncluded()),
                  this.cdr.markForCheck());
              }),
              this.service.onPrioritiesChange$
                .pipe((0, G.sL)())
                .subscribe(() => {
                  this.updatePriorities(), this.cdr.markForCheck();
                }),
              this.service.onGroupChange$
                .pipe(
                  (0, W.h)((_) => _.taskId === this.task.id),
                  (0, W.h)(() => this.isGroupByPriority()),
                  (0, G.sL)()
                )
                .subscribe((_) => {
                  (this.task.priority = _.groupId),
                    (this.task.priority_color = _.color),
                    this.cdr.markForCheck();
                });
          }
          ngOnInit() {
            this.updatePriorities(),
              this.socket.on(
                k.C.PT_TASK_PRIORITY_CHANGE.toString(),
                this.handleResponse
              );
          }
          ngOnDestroy() {
            (this.priorities = []),
              this.socket.removeListener(
                k.C.PT_TASK_PRIORITY_CHANGE.toString(),
                this.handleResponse
              );
          }
          isGroupByPriority() {
            return (
              this.service.getCurrentGroup().value ===
              this.service.GROUP_BY_PRIORITY_VALUE
            );
          }
          trackById(t, n) {
            return n.id;
          }
          handlePriorityChange(t, n) {
            this.socket.emit(
              k.C.PT_TASK_PRIORITY_CHANGE.toString(),
              JSON.stringify({
                task_id: n.id,
                priority_id: t,
                parent_task: this.task.parent_task_id,
              })
            );
          }
          updatePriorities() {
            this.priorities = this.service.priorities;
          }
          toggleHighlightCls(t, n) {
            this.ngZone.runOutsideAngular(() => {
              t
                ? this.renderer.addClass(n, this.service.HIGHLIGHT_COL_CLS)
                : this.renderer.removeClass(n, this.service.HIGHLIGHT_COL_CLS);
            });
          }
          handleOpen(t) {
            this.toggleHighlightCls(t, this.element.nativeElement);
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(
              e.Y36(B),
              e.Y36(q.s),
              e.Y36(e.sBO),
              e.Y36(e.R0b),
              e.Y36(e.SBq),
              e.Y36(e.Qsj)
            );
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-task-priority"]],
            hostVars: 2,
            hostBindings: function (t, n) {
              2 & t && e.Tol(n.cls);
            },
            inputs: { task: "task" },
            decls: 3,
            vars: 8,
            consts: [
              [1, "py-0"],
              [
                1,
                "rounded-pill",
                "custom-select",
                3,
                "ngModel",
                "nzLoading",
                "nzDropdownMatchSelectWidth",
                "nzSize",
                "ngModelChange",
                "nzOpenChange",
              ],
              [
                3,
                "nzValue",
                "nzLabel",
                "nzCustomContent",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              [3, "nzValue", "nzLabel", "nzCustomContent"],
              [3, "name"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "div", 0)(1, "nz-select", 1),
                e.NdJ("ngModelChange", function (r) {
                  return (n.task.priority = r);
                })("ngModelChange", function (r) {
                  return n.handlePriorityChange(r, n.task);
                })("nzOpenChange", function (r) {
                  return n.handleOpen(r);
                }),
                e.YNc(2, Kn, 2, 4, "nz-option", 2),
                e.qZA()()),
                2 & t &&
                  (e.xp6(1),
                  e.Udp("background", n.task.priority_color),
                  e.Q6J("ngModel", n.task.priority)("nzLoading", n.loading)(
                    "nzDropdownMatchSelectWidth",
                    !1
                  )("nzSize", "small"),
                  e.xp6(1),
                  e.Q6J("ngForOf", n.priorities)("ngForTrackBy", n.trackById));
            },
            dependencies: [h.sg, p.JJ, K.Ip, K.Vq, p.On, $e.o],
            changeDetection: 0,
          })),
          a
        );
      })();
      var je = c(68373);
      const Xn = ["labelsSearchInput"];
      function ei(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "div", 7)(1, "nz-form-item", 8)(2, "nz-form-control")(
            3,
            "div",
            9
          )(4, "nz-form-control", 10)(5, "small", 11),
            e._uU(6, "Hours"),
            e.qZA(),
            e.TgZ(7, "nz-input-number", 12),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(s);
              const o = e.oxw();
              return e.KtG((o.task.total_hours = n));
            }),
            e.qZA()(),
            e.TgZ(8, "nz-form-control")(9, "small", 11),
            e._uU(10, "Minutes"),
            e.qZA(),
            e.TgZ(11, "nz-input-number", 13),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(s);
              const o = e.oxw();
              return e.KtG((o.task.total_minutes = n));
            }),
            e.qZA()()()()()();
        }
        if (2 & i) {
          const s = e.oxw();
          e.xp6(7),
            e.Q6J("ngModel", s.task.total_hours)(
              "nzFormatter",
              s.utils.toRound
            )("nzMin", 0)("nzPlaceHolder", "Hours")("nzStep", 1),
            e.xp6(4),
            e.Q6J("ngModel", s.task.total_minutes)(
              "nzFormatter",
              s.utils.toRound
            )("nzMax", 60)("nzMin", 0)("nzPlaceHolder", "Minutes")("nzStep", 1);
        }
      }
      let ti = (() => {
          var i;
          class a {
            constructor(t, n, o, r, l) {
              (this.cdr = t),
                (this.socket = n),
                (this.service = o),
                (this.utils = r),
                (this.ngZone = l),
                (this.task = {}),
                (this.cls = "flex-row task-estimation p-0"),
                (this.show = !1),
                (this.handleResponse = (d) => {
                  this.task.id === d?.id &&
                    ((this.task.total_time_string = d.total_time_string),
                    this.closeDropdown(),
                    this.cdr.markForCheck());
                });
            }
            ngOnInit() {
              this.socket.on(
                k.C.PT_TASK_TIME_ESTIMATION_CHANGE.toString(),
                this.handleResponse
              );
            }
            ngOnDestroy() {
              this.socket.removeListener(
                k.C.PT_TASK_TIME_ESTIMATION_CHANGE.toString(),
                this.handleResponse
              );
            }
            handleLabelsVisibleChange(t, n) {
              (this.show = t),
                t
                  ? n.classList.add(this.service.HIGHLIGHT_COL_CLS)
                  : n.classList.remove(this.service.HIGHLIGHT_COL_CLS);
            }
            submit() {
              this.task?.id &&
                this.socket.emit(
                  k.C.PT_TASK_TIME_ESTIMATION_CHANGE.toString(),
                  JSON.stringify({
                    task_id: this.task.id,
                    total_hours: this.task.total_hours || 0,
                    total_minutes: this.task.total_minutes || 0,
                    parent_task: this.task.parent_task_id,
                  })
                );
            }
            closeDropdown() {
              this.ngZone.runOutsideAngular(() => {
                document.body.click();
              });
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)(
                e.Y36(e.sBO),
                e.Y36(q.s),
                e.Y36(B),
                e.Y36(de.F),
                e.Y36(e.R0b)
              );
            }),
            (i.ɵcmp = e.Xpm({
              type: i,
              selectors: [["worklenz-task-estimation"]],
              viewQuery: function (t, n) {
                if ((1 & t && e.Gf(Xn, 5), 2 & t)) {
                  let o;
                  e.iGM((o = e.CRH())) && (n.labelsSearchInput = o.first);
                }
              },
              hostVars: 2,
              hostBindings: function (t, n) {
                2 & t && e.Tol(n.cls);
              },
              inputs: { task: "task" },
              decls: 11,
              vars: 6,
              consts: [
                [
                  "nz-dropdown",
                  "",
                  1,
                  "editable",
                  "w-100",
                  "h-100",
                  "d-flex",
                  "align-items-center",
                  "justify-content-center",
                  3,
                  "nzOverlayClassName",
                  "nzTrigger",
                  "nzClickHide",
                  "nzDropdownMenu",
                  "nzVisibleChange",
                ],
                ["element", ""],
                ["nz-typography", "", 1, "mb-0"],
                ["estimationDropdown", "nzDropdownMenu"],
                ["class", "bg-white pt-3 px-3", 4, "ngIf"],
                [
                  1,
                  "bg-white",
                  "d-flex",
                  "justify-content-end",
                  "p-2",
                  "border-top",
                ],
                [
                  "nz-button",
                  "",
                  "nzType",
                  "primary",
                  "nzSize",
                  "small",
                  3,
                  "click",
                ],
                [1, "bg-white", "pt-3", "px-3"],
                ["nz-row", "", 1, "w-100", "mb-0"],
                [1, "d-inline-flex", 2, "position", "relative", "top", "-12px"],
                [1, "me-3"],
                ["nz-typography", "", "nzType", "secondary", 1, "d-block"],
                [
                  3,
                  "ngModel",
                  "nzFormatter",
                  "nzMin",
                  "nzPlaceHolder",
                  "nzStep",
                  "ngModelChange",
                ],
                [
                  3,
                  "ngModel",
                  "nzFormatter",
                  "nzMax",
                  "nzMin",
                  "nzPlaceHolder",
                  "nzStep",
                  "ngModelChange",
                ],
              ],
              template: function (t, n) {
                if (1 & t) {
                  const o = e.EpF();
                  e.TgZ(0, "div", 0, 1),
                    e.NdJ("nzVisibleChange", function (l) {
                      e.CHM(o);
                      const d = e.MAs(1);
                      return e.KtG(n.handleLabelsVisibleChange(l, d));
                    }),
                    e.ynx(2),
                    e.TgZ(3, "p", 2),
                    e._uU(4),
                    e.qZA(),
                    e.BQk(),
                    e.qZA(),
                    e.TgZ(5, "nz-dropdown-menu", null, 3),
                    e.YNc(7, ei, 12, 11, "div", 4),
                    e.TgZ(8, "div", 5)(9, "button", 6),
                    e.NdJ("click", function () {
                      return n.submit();
                    }),
                    e._uU(10, "OK"),
                    e.qZA()()();
                }
                if (2 & t) {
                  const o = e.MAs(6);
                  e.Q6J("nzOverlayClassName", "custom-shadow")(
                    "nzTrigger",
                    "click"
                  )("nzClickHide", !1)("nzDropdownMenu", o),
                    e.xp6(4),
                    e.Oqu(n.task.total_time_string),
                    e.xp6(3),
                    e.Q6J("ngIf", n.show);
                }
              },
              dependencies: [
                h.O5,
                p.JJ,
                Z.t3,
                Z.SK,
                x.Nx,
                x.Fd,
                O.ix,
                v.w,
                L.dQ,
                Q.ZU,
                p.On,
                E.cm,
                E.RR,
                je._V,
              ],
              changeDetection: 0,
            })),
            a
          );
        })(),
        ni = (() => {
          var i;
          class a {
            transform(t, ...n) {
              return t.sub_tasks_count ? "#191919" : "rgba(0, 0, 0, 0.45)";
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)();
            }),
            (i.ɵpipe = e.Yjl({
              name: "subTasksArrowColorPT",
              type: i,
              pure: !0,
            })),
            a
          );
        })(),
        ii = (() => {
          var i;
          class a {
            transform(t, ...n) {
              return t ? "down" : "right";
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)();
            }),
            (i.ɵpipe = e.Yjl({
              name: "subTasksArrowIconPT",
              type: i,
              pure: !0,
            })),
            a
          );
        })();
      function si(i, a) {
        1 & i && e._UZ(0, "div", 15);
      }
      function oi(i, a) {
        1 & i && (e.TgZ(0, "div", 16), e._UZ(1, "span", 17), e.qZA()),
          2 & i && (e.xp6(1), e.Q6J("nzType", "holder")("nzTheme", "outline"));
      }
      function ai(i, a) {
        if (
          (1 & i && (e._UZ(0, "span", 24), e.ALo(1, "subTasksArrowIconPT")),
          2 & i)
        ) {
          const s = e.oxw(3);
          e.Q6J("nzType", e.lcZ(1, 2, s.task.show_sub_tasks))(
            "nzTheme",
            "outline"
          );
        }
      }
      function ri(i, a) {
        1 & i && e._UZ(0, "span", 25), 2 & i && e.Q6J("nzType", "loading");
      }
      function li(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "div", 20),
            e.NdJ("click", function (n) {
              e.CHM(s);
              const o = e.oxw(2);
              return n.stopPropagation(), e.KtG(o.openSubTasks());
            }),
            e.ynx(1),
            e.TgZ(2, "span", 21),
            e.ALo(3, "subTasksArrowColorPT"),
            e.YNc(4, ai, 2, 4, "span", 22),
            e.YNc(5, ri, 1, 1, "span", 23),
            e.qZA(),
            e.BQk(),
            e.qZA();
        }
        if (2 & i) {
          const s = e.oxw(2);
          e.xp6(2),
            e.Udp("color", e.lcZ(3, 6, s.task)),
            e.ekj(
              "hidden-arrow",
              !s.Number(s.task.sub_tasks_count) && !s.task.show_sub_tasks
            ),
            e.xp6(2),
            e.Q6J("ngIf", !s.task.sub_tasks_loading),
            e.xp6(1),
            e.Q6J("ngIf", s.task.sub_tasks_loading);
        }
      }
      function ci(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 18), e.YNc(1, li, 6, 8, "div", 19), e.qZA()),
          2 & i)
        ) {
          const s = e.oxw();
          e.xp6(1), e.Q6J("ngIf", !s.task.is_sub_task);
        }
      }
      function pi(i, a) {
        1 & i && (e.TgZ(0, "small", 32), e._UZ(1, "span", 17), e.qZA()),
          2 & i &&
            (e.Q6J("nzType", "secondary"),
            e.xp6(1),
            e.Q6J("nzType", "double-right")("nzTheme", "outline"));
      }
      function di(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "div", 30),
            e.NdJ("click", function (n) {
              e.CHM(s);
              const o = e.oxw(2),
                r = e.MAs(10);
              return e.KtG(o.onTaskNameClick(n, r, o.task));
            }),
            e.ALo(1, "safeString"),
            e.YNc(2, pi, 2, 3, "small", 31),
            e._uU(3),
            e.qZA();
        }
        if (2 & i) {
          const s = e.oxw(2);
          e.Q6J("nzTooltipMouseEnterDelay", 0.5)(
            "nzTooltipTitle",
            e.lcZ(1, 4, s.task.name)
          ),
            e.xp6(2),
            e.Q6J("ngIf", s.task.is_sub_task),
            e.xp6(1),
            e.hij(" ", s.task.name, " \xa0 ");
        }
      }
      function ui(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "nz-tag", 33),
            e.NdJ("click", function (n) {
              e.CHM(s);
              const o = e.oxw(2);
              return n.stopPropagation(), e.KtG(o.openSubTasks());
            }),
            e.TgZ(1, "span", 34),
            e._uU(2),
            e._UZ(3, "span", 35),
            e.qZA()();
        }
        if (2 & i) {
          const s = e.oxw(2);
          e.Q6J("nzColor", "default"),
            e.xp6(2),
            e.hij(" ", s.task.sub_tasks_count, " "),
            e.xp6(1),
            e.Q6J("nzType", "double-right")("nzTheme", "outline");
        }
      }
      function _i(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 26)(1, "div", 27)(2, "div"),
            e.YNc(3, di, 4, 6, "div", 28),
            e.qZA(),
            e.YNc(4, ui, 4, 4, "nz-tag", 29),
            e.qZA()()),
          2 & i)
        ) {
          const s = e.oxw();
          e.xp6(3),
            e.Q6J("ngIf", s.editId !== s.task.id),
            e.xp6(1),
            e.Q6J("ngIf", !s.task.is_sub_task && !s.service.isSubtasksIncluded);
        }
      }
      function mi(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "input", 36),
            e.NdJ("focus", function () {
              e.CHM(s);
              const n = e.oxw(),
                o = e.MAs(7),
                r = e.MAs(10);
              return n.selectCol(o), e.KtG(n.selectCol(r));
            })("ngModelChange", function (n) {
              e.CHM(s);
              const o = e.oxw();
              return e.KtG((o.task.name = n));
            })("blur", function () {
              e.CHM(s);
              const n = e.oxw(),
                o = e.MAs(7),
                r = e.MAs(10);
              return (
                n.handleNameChange(n.task),
                n.deselectCol(o),
                e.KtG(n.deselectCol(r))
              );
            })("keydown.enter", function () {
              e.CHM(s);
              const n = e.oxw(),
                o = e.MAs(7),
                r = e.MAs(10);
              return (
                n.handleNameChange(n.task),
                n.deselectCol(o),
                e.KtG(n.deselectCol(r))
              );
            }),
            e.qZA();
        }
        if (2 & i) {
          const s = e.oxw();
          e.Q6J("ngModel", s.task.name)("nzBorderless", !0);
        }
      }
      let hi = (() => {
        var i;
        class a {
          get id() {
            return this.task.id;
          }
          constructor(t, n, o, r, l, d, _, y) {
            (this.element = t),
              (this.renderer = n),
              (this.cdr = o),
              (this.service = r),
              (this.socket = l),
              (this.map = d),
              (this.ngZone = _),
              (this.utils = y),
              (this.cls = "position-relative task-row"),
              (this.onShowSubTasks = new e.vpe()),
              (this.highlight = "highlight-col"),
              (this.Number = Number),
              (this.editId = null),
              (this.selected = !1),
              (this.handleNameChangeResponse = (S) => {
                S &&
                  this.id === S.id &&
                  this.task &&
                  this.task.name != S.name &&
                  ((this.task.name = S.name), this.markForCheck());
              }),
              (this.handleEstimationChangeResponse = (S) => {
                S.id === this.id &&
                  ((this.task.total_time_string = S.total_time_string),
                  this.cdr.markForCheck());
              }),
              this.service.onColumnsChange$.pipe((0, G.sL)()).subscribe(() => {
                this.markForCheck();
              }),
              (0, Ze.T)(
                this.map.onSelect$.pipe(
                  (0, W.h)((S) => S.id === this.id),
                  (0, W.h)(() => !this.selected)
                ),
                this.map.onDeselect$.pipe(
                  (0, W.h)((S) => S.id === this.id),
                  (0, W.h)(() => this.selected)
                ),
                this.map.onDeselectAll$.pipe((0, W.h)(() => this.selected))
              )
                .pipe((0, G.sL)())
                .subscribe((S) => {
                  (this.selected = !this.selected),
                    this.toggleSelection(),
                    this.markForCheck();
                });
          }
          toggleSelection() {
            this.ngZone.runOutsideAngular(() => {
              const t = "selected",
                n = this.element.nativeElement;
              this.selected
                ? this.renderer.addClass(n, t)
                : this.renderer.removeClass(n, t);
            });
          }
          ngOnInit() {
            this.registerSocketEvents();
          }
          ngOnDestroy() {
            this.unregisterSocketEvents();
          }
          registerSocketEvents() {
            this.socket.on(
              k.C.PT_TASK_NAME_CHANGE.toString(),
              this.handleNameChangeResponse
            ),
              this.socket.on(
                k.C.PT_TASK_TIME_ESTIMATION_CHANGE.toString(),
                this.handleEstimationChangeResponse
              );
          }
          unregisterSocketEvents() {
            this.socket.removeListener(
              k.C.PT_TASK_NAME_CHANGE.toString(),
              this.handleNameChangeResponse
            ),
              this.socket.removeListener(
                k.C.PT_TASK_TIME_ESTIMATION_CHANGE.toString(),
                this.handleEstimationChangeResponse
              );
          }
          onContextMenu(t) {
            this.service.emitOnContextMenu(t, this.task);
          }
          focus(t) {
            setTimeout(() => {
              t.querySelector("input")?.focus();
            });
          }
          onCheckChange(t) {
            t
              ? this.map.selectTask(this.task)
              : this.map.deselectTask(this.task),
              this.toggleSelection();
          }
          openSubTasks() {
            this.onShowSubTasks?.emit(this.task);
          }
          selectCol(t) {
            t.classList.contains(this.highlight) ||
              t.classList.add(this.highlight);
          }
          deselectCol(t) {
            t.classList.remove(this.highlight), (this.editId = null);
          }
          handleNameChange(t) {
            t &&
              (this.socket.emit(
                k.C.PT_TASK_NAME_CHANGE.toString(),
                JSON.stringify({
                  task_id: t.id,
                  name: t.name,
                  parent_task: this.task.parent_task_id,
                })
              ),
              (this.editId = null));
          }
          onTaskNameClick(t, n, o) {
            t.stopPropagation(), this.focus(n), (this.editId = o.id || null);
          }
          markForCheck() {
            this.cdr.markForCheck();
          }
          detectChanges() {
            this.cdr.detectChanges();
          }
          onDragStart() {
            this.map.deselectAll(), this.detectChanges();
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(
              e.Y36(e.SBq),
              e.Y36(e.Qsj),
              e.Y36(e.sBO),
              e.Y36(B),
              e.Y36(q.s),
              e.Y36(ue),
              e.Y36(e.R0b),
              e.Y36(de.F)
            );
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-pt-task-list-row"]],
            hostVars: 2,
            hostBindings: function (t, n) {
              1 & t &&
                e.NdJ("contextmenu", function (r) {
                  return n.onContextMenu(r);
                }),
                2 & t && e.Tol(n.cls);
            },
            inputs: { task: "task" },
            outputs: { onShowSubTasks: "onShowSubTasks" },
            decls: 26,
            vars: 16,
            consts: [
              [
                "cdkDrag",
                "",
                1,
                "flex-table",
                "rows",
                3,
                "ngClass",
                "cdkDragData",
                "cdkDragLockAxis",
                "cdkDragBoundary",
                "cdkDragStarted",
              ],
              ["class", "task-placeholder", 4, "cdkDragPlaceholder"],
              [
                "cdkDragHandle",
                "",
                1,
                "flex-row",
                "task-drag-handler",
                3,
                "cdkDragHandleDisabled",
              ],
              ["class", "drag-handle", 4, "ngIf"],
              [1, "flex-row", "task-check"],
              ["nz-checkbox", "", 1, "p-0", 3, "nzChecked", "nzCheckedChange"],
              [1, "flex-row", "task-arrow"],
              ["tr0", ""],
              ["class", "p-0 border-end-0", 4, "ngIf"],
              [1, "flex-row", "task-name"],
              ["tr1", ""],
              [1, "inner-task-name-container"],
              ["class", "editable-cell pointer-text ps-1 w-100", 4, "ngIf"],
              [
                "nz-input",
                "",
                "class",
                "ps-1 name-input",
                "style",
                "min-width: 365px; max-width: 365px;",
                3,
                "ngModel",
                "nzBorderless",
                "focus",
                "ngModelChange",
                "blur",
                "keydown.enter",
                4,
                "ngIf",
              ],
              [3, "task"],
              [1, "task-placeholder"],
              [1, "drag-handle"],
              ["nz-icon", "", 3, "nzType", "nzTheme"],
              [1, "p-0", "border-end-0"],
              [
                "class",
                "d-flex align-items-center justify-content-center sub-tasks-arrow dropdown-highlight",
                3,
                "click",
                4,
                "ngIf",
              ],
              [
                1,
                "d-flex",
                "align-items-center",
                "justify-content-center",
                "sub-tasks-arrow",
                "dropdown-highlight",
                3,
                "click",
              ],
              [
                1,
                "align-items-center",
                "align-self-center",
                "cursor-pointer",
                "d-flex",
                "sub-arrow",
              ],
              [
                "style",
                "font-size: 12px",
                "nz-icon",
                "",
                3,
                "nzType",
                "nzTheme",
                4,
                "ngIf",
              ],
              ["nz-icon", "", 3, "nzType", 4, "ngIf"],
              ["nz-icon", "", 2, "font-size", "12px", 3, "nzType", "nzTheme"],
              ["nz-icon", "", 3, "nzType"],
              [1, "editable-cell", "pointer-text", "ps-1", "w-100"],
              [1, "d-flex", "w-100"],
              [
                "nz-tooltip",
                "",
                "class",
                "task-name-text",
                3,
                "nzTooltipMouseEnterDelay",
                "nzTooltipTitle",
                "click",
                4,
                "ngIf",
              ],
              [
                "class",
                "me-1 px-1 double-arrow",
                3,
                "nzColor",
                "click",
                4,
                "ngIf",
              ],
              [
                "nz-tooltip",
                "",
                1,
                "task-name-text",
                3,
                "nzTooltipMouseEnterDelay",
                "nzTooltipTitle",
                "click",
              ],
              ["nz-typography", "", 3, "nzType", 4, "ngIf"],
              ["nz-typography", "", 3, "nzType"],
              [1, "me-1", "px-1", "double-arrow", 3, "nzColor", "click"],
              [2, "color", "#6d6e6f"],
              ["nz-icon", "", 2, "font-size", "10px", 3, "nzType", "nzTheme"],
              [
                "nz-input",
                "",
                1,
                "ps-1",
                "name-input",
                2,
                "min-width",
                "365px",
                "max-width",
                "365px",
                3,
                "ngModel",
                "nzBorderless",
                "focus",
                "ngModelChange",
                "blur",
                "keydown.enter",
              ],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "div", 0),
                e.NdJ("cdkDragStarted", function () {
                  return n.onDragStart();
                }),
                e.YNc(1, si, 1, 0, "div", 1),
                e.TgZ(2, "div", 2),
                e.YNc(3, oi, 2, 2, "div", 3),
                e.qZA(),
                e.TgZ(4, "div", 4)(5, "span", 5),
                e.NdJ("nzCheckedChange", function (r) {
                  return (n.selected = r);
                })("nzCheckedChange", function (r) {
                  return n.onCheckChange(r);
                }),
                e.qZA()(),
                e.TgZ(6, "div", 6, 7),
                e.YNc(8, ci, 2, 1, "div", 8),
                e.qZA(),
                e.TgZ(9, "div", 9, 10)(11, "div", 11),
                e.YNc(12, _i, 5, 2, "div", 12),
                e.qZA(),
                e.YNc(13, mi, 1, 2, "input", 13),
                e.qZA(),
                e.ynx(14),
                e._UZ(15, "worklenz-task-description", 14),
                e.BQk(),
                e.ynx(16),
                e._UZ(17, "worklenz-task-labels", 14),
                e.BQk(),
                e.ynx(18),
                e._UZ(19, "worklenz-task-phase", 14),
                e.BQk(),
                e.ynx(20),
                e._UZ(21, "worklenz-task-status", 14),
                e.BQk(),
                e.ynx(22),
                e._UZ(23, "worklenz-task-priority", 14),
                e.BQk(),
                e.ynx(24),
                e._UZ(25, "worklenz-task-estimation", 14),
                e.BQk(),
                e.qZA()),
                2 & t &&
                  (e.Q6J(
                    "ngClass",
                    n.task.is_sub_task ? "subtask" : "main-task"
                  )("cdkDragData", n.task)("cdkDragLockAxis", "y")(
                    "cdkDragBoundary",
                    ".tasks-wrapper"
                  ),
                  e.xp6(2),
                  e.Q6J("cdkDragHandleDisabled", !!n.task.parent_task_id),
                  e.xp6(1),
                  e.Q6J("ngIf", !n.task.parent_task_id),
                  e.xp6(2),
                  e.Q6J("nzChecked", n.selected),
                  e.xp6(3),
                  e.Q6J("ngIf", !n.service.isSubtasksIncluded),
                  e.xp6(4),
                  e.Q6J("ngIf", n.editId !== n.task.id),
                  e.xp6(1),
                  e.Q6J("ngIf", n.editId === n.task.id),
                  e.xp6(2),
                  e.Q6J("task", n.task),
                  e.xp6(2),
                  e.Q6J("task", n.task),
                  e.xp6(2),
                  e.Q6J("task", n.task),
                  e.xp6(2),
                  e.Q6J("task", n.task),
                  e.xp6(2),
                  e.Q6J("task", n.task),
                  e.xp6(2),
                  e.Q6J("task", n.task));
            },
            dependencies: [
              h.mk,
              h.O5,
              M.Ls,
              p.Fj,
              p.JJ,
              P.Zp,
              v.w,
              Q.ZU,
              J.SY,
              p.On,
              ze.j,
              we.Ie,
              Ce.Zt,
              Ce.Bh,
              Zn,
              Bn,
              jn,
              Vn,
              Wn,
              ti,
              _e.m,
              ni,
              ii,
            ],
            styles: [
              "[_nghost-%COMP%]{position:relative;display:table-row;vertical-align:inherit;border-color:inherit;-webkit-user-select:none;user-select:none}[_nghost-%COMP%]:hover   .plus-icon[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]:hover   td[_ngcontent-%COMP%]{background:#ecf0f3}[_nghost-%COMP%]:hover   .hidden-arrow[_ngcontent-%COMP%]{display:flex!important}.hidden-arrow[_ngcontent-%COMP%]{display:none!important}.dropdown-highlight[_ngcontent-%COMP%]:hover{background-color:#d0eefa54;border:#5587f5 1px solid;border-radius:3px}.plus-icon[_ngcontent-%COMP%]{display:none;position:absolute;right:0;z-index:1;top:0;bottom:0;height:100%}.expanded[_ngcontent-%COMP%]{transform:rotate(-90deg)}.sub-tasks-arrow[_ngcontent-%COMP%]{position:relative;cursor:pointer;left:3px;width:16px;padding:2px;border:1px solid transparent;z-index:1}.sub-tasks-arrow[_ngcontent-%COMP%]   .sub-arrow[_ngcontent-%COMP%]{width:10px;height:10px;color:#191919;margin-left:-2px}.task-name-text[_ngcontent-%COMP%]{border:1px solid transparent;padding-left:2px;border-radius:4px}.task-name-text[_ngcontent-%COMP%]:hover{border:1px solid #d9d9d9}.task-name[_ngcontent-%COMP%]{border:1px solid transparent}.task-name[_ngcontent-%COMP%]:hover{cursor:text;background:#fff;border-radius:4px}.highlight-col[_ngcontent-%COMP%]{border:1px solid #1890ff!important}.highlight-col[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%]{box-shadow:none}.editable[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]{visibility:hidden}.editable[_ngcontent-%COMP%]:hover   .add-button[_ngcontent-%COMP%]{visibility:visible}.ant-popover[_ngcontent-%COMP%]{width:500px}.flex-table[_ngcontent-%COMP%]{display:flex}.rows[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]{padding:3px 12px;border-bottom:1px solid #f0f0f0;border-right:1px solid #f0f0f0;background:white;display:flex;align-items:center;max-height:50px;border-radius:0}.rows[_ngcontent-%COMP%]:hover   .flex-row[_ngcontent-%COMP%]{background:#f8f7f9}.subtask[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]{background:#fcfcfc}.task-check[_ngcontent-%COMP%]{text-align:center;padding:8px 6px 8px 0!important;border-left:none;position:sticky;left:24px;z-index:1}.task-arrow[_ngcontent-%COMP%]{width:24px;min-width:24px;padding:8px 11px 8px 2px!important;border-right:none!important;position:sticky;left:47px;z-index:1}.task-arrow.highlight-col[_ngcontent-%COMP%]{border-top:1px solid #188fff!important;border-left:1px solid #188fff!important;border-bottom:1px solid #188fff!important}.task-name[_ngcontent-%COMP%]{width:450px;min-width:450px;position:sticky;left:71px;z-index:1;border-radius:0;padding-right:65px!important}.task-name.highlight-col[_ngcontent-%COMP%]{border-top:1px solid #188fff!important;border-right:1px solid #188fff!important;border-bottom:1px solid #188fff!important;border-left:none!important}.task-name.left-0[_ngcontent-%COMP%]{left:47px}.task-key[_ngcontent-%COMP%]{width:85px;min-width:85px;padding-left:4px!important;padding-right:4px!important;justify-content:center}.task-key[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{padding-left:4px;padding-right:4px;max-width:80px;text-overflow:ellipsis;overflow:hidden}.task-description[_ngcontent-%COMP%]{width:225px;min-width:225px;overflow:hidden;display:grid!important}.task-progress[_ngcontent-%COMP%]{width:80px;min-width:80px}.task-labels[_ngcontent-%COMP%]{padding:0!important}.task-labels[_ngcontent-%COMP%]   .editable[_ngcontent-%COMP%]{padding:6px 11px;align-items:center;display:flex}.task-members[_ngcontent-%COMP%]{padding:0!important}.task-members[_ngcontent-%COMP%]   .editable[_ngcontent-%COMP%]{padding:6px 11px;align-items:center;display:flex}.task-members[_ngcontent-%COMP%]{width:160px;min-width:160px}.task-labels[_ngcontent-%COMP%]{width:220px;min-width:220px}.task-status[_ngcontent-%COMP%]{width:120px;min-width:120px}.task-phase[_ngcontent-%COMP%]{width:150px;min-width:150px}.task-priority[_ngcontent-%COMP%], .task-time-tracking[_ngcontent-%COMP%], .task-estimation[_ngcontent-%COMP%]{width:120px;min-width:120px}.task-start-date[_ngcontent-%COMP%], .task-due-date[_ngcontent-%COMP%], .task-completed-date[_ngcontent-%COMP%], .task-created-date[_ngcontent-%COMP%], .task-update-date[_ngcontent-%COMP%]{width:150px;min-width:150px}.task-due-date[_ngcontent-%COMP%]{padding:0!important}.task-due-date[_ngcontent-%COMP%]   .editable[_ngcontent-%COMP%]{align-items:center;display:flex}.task-drag-handler[_ngcontent-%COMP%]{padding:0 0 0 4px!important;width:24px;min-width:24px;border-right:none!important;position:sticky;left:0;z-index:1;background-color:#fff}.drag-handle[_ngcontent-%COMP%]{cursor:grab;opacity:.8}.drag-handle[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:#1890ff}.drag-handle[_ngcontent-%COMP%]:active{cursor:grabbing}.task-name-text[_ngcontent-%COMP%]{width:100%;-webkit-line-clamp:1;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.inner-icon-cont[_ngcontent-%COMP%]{width:max-content;display:flex;justify-content:flex-end;align-items:center;column-gap:4px}.name-input[_ngcontent-%COMP%]{padding:5px 12px;border-left:1px solid transparent}.double-arrow[_ngcontent-%COMP%]{line-height:16px;border:none;cursor:pointer}.task-placeholder[_ngcontent-%COMP%]{width:100%;height:42px;border:1px dashed #d9d9d9;background:#fafafa}.v-line[_ngcontent-%COMP%]{background-color:#188fff!important;position:absolute;inset:0 -5px 0 0;width:1px;margin:auto}.double-arrow[_ngcontent-%COMP%]{height:16px;margin-top:4px}",
            ],
          })),
          a
        );
      })();
      var gi = c(59773);
      const fi = ["contextMenuDropdown"];
      function zi(i, a) {
        if ((1 & i && e._uU(0), 2 & i)) {
          const s = e.oxw().$implicit;
          e.hij(" ", (null == s ? null : s.name) || null, " ");
        }
      }
      function Ti(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "li", 9),
            e.NdJ("click", function () {
              const o = e.CHM(s).$implicit,
                r = e.oxw(2);
              return e.KtG(r.changeGroup(o.id));
            }),
            e._UZ(1, "nz-badge", 10),
            e.ALo(2, "safeString"),
            e.YNc(3, zi, 1, 1, "ng-template", null, 11, e.W1O),
            e.qZA();
        }
        if (2 & i) {
          const s = a.$implicit,
            t = e.MAs(4);
          e.xp6(1), e.Q6J("nzColor", e.lcZ(2, 2, s.color_code))("nzText", t);
        }
      }
      function Ci(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "li", 7)(1, "ul"),
            e.YNc(2, Ti, 5, 4, "li", 8),
            e.qZA()()),
          2 & i)
        ) {
          const s = e.oxw(),
            t = e.MAs(9);
          e.Q6J("nzTitle", t), e.xp6(2), e.Q6J("ngForOf", s.groups);
        }
      }
      function ki(i, a) {
        1 & i && (e._UZ(0, "span", 12), e._uU(1, " Move to\n"));
      }
      let xi = (() => {
        var i;
        class a {
          constructor(t, n, o, r, l, d) {
            (this.contextMenuService = t),
              (this.service = n),
              (this.map = o),
              (this.api = r),
              (this.socket = l),
              (this.cdr = d),
              (this.templateId = null),
              (this.groups = []),
              (this.deleting = !1),
              (this.hasSubTasks = !1),
              (this.selectedTask = null),
              (this.destroy$ = new R.x()),
              this.service.onContextMenu$
                .pipe((0, gi.R)(this.destroy$))
                .subscribe((_) => {
                  this.onContextMenu(_);
                });
          }
          ngOnDestroy() {
            this.destroy$.next(), this.destroy$.complete();
          }
          onContextMenu(t) {
            (this.selectedTask = t.task),
              this.map.deselectAll(),
              this.map.selectTask(t.task),
              (this.hasSubTasks = this.isSelectionHasSubTasks()),
              this.cdr.detectChanges(),
              this.contextMenuService.create(t.event, this.contextMenuDropdown);
          }
          isSelectionHasSubTasks() {
            return this.map.getSelectedTasks().some((t) => t.is_sub_task);
          }
          changeGroup(t) {
            if (!this.selectedTask) return;
            const n = this.service.getCurrentGroup();
            n.value === this.service.GROUP_BY_STATUS_VALUE
              ? this.handleStatusChange(t, this.selectedTask.id)
              : n.value === this.service.GROUP_BY_PRIORITY_VALUE
              ? this.handlePriorityChange(t, this.selectedTask.id)
              : n.value === this.service.GROUP_BY_PHASE_VALUE &&
                this.handlePhaseChange(t, this.selectedTask.id);
          }
          handleStatusChange(t, n) {
            n &&
              this.socket.emit(
                k.C.PT_TASK_STATUS_CHANGE.toString(),
                JSON.stringify({ task_id: n, status_id: t })
              );
          }
          handlePriorityChange(t, n) {
            n &&
              this.socket.emit(
                k.C.PT_TASK_PRIORITY_CHANGE.toString(),
                JSON.stringify({ task_id: n, priority_id: t })
              );
          }
          handlePhaseChange(t, n) {
            n &&
              this.socket.emit(k.C.PT_TASK_PHASE_CHANGE.toString(), {
                task_id: n,
                phase_id: t,
              });
          }
          delete() {
            var t = this;
            return (0, m.Z)(function* () {
              if (!t.deleting)
                try {
                  t.deleting = !0;
                  const n = t.map.getSelectedTaskIds(),
                    o = yield t.api.bulkDelete({ tasks: n }, t.templateId);
                  if (o.done)
                    for (const r of o.body.deleted_tasks)
                      t.service.deleteTask(r);
                  t.deleting = !1;
                } catch {
                  t.deleting = !1;
                }
            })();
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(
              e.Y36(E.Iw),
              e.Y36(B),
              e.Y36(ue),
              e.Y36(Ye),
              e.Y36(q.s),
              e.Y36(e.sBO)
            );
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-context-menu"]],
            viewQuery: function (t, n) {
              if ((1 & t && e.Gf(fi, 5), 2 & t)) {
                let o;
                e.iGM((o = e.CRH())) && (n.contextMenuDropdown = o.first);
              }
            },
            inputs: { templateId: "templateId", groups: "groups" },
            decls: 10,
            vars: 4,
            consts: [
              ["contextMenuDropdown", "nzDropdownMenu"],
              ["nz-menu", ""],
              [3, "ngSwitch"],
              ["nz-submenu", "", 3, "nzTitle", 4, "ngSwitchCase"],
              ["nz-menu-item", "", 3, "click"],
              ["nz-icon", "", 1, "me-2", 3, "nzType", "nzTheme"],
              ["titleTemplate", ""],
              ["nz-submenu", "", 3, "nzTitle"],
              [
                "class",
                "m-0",
                "nz-menu-item",
                "",
                3,
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              ["nz-menu-item", "", 1, "m-0", 3, "click"],
              [3, "nzColor", "nzText"],
              ["textTmpl", ""],
              [
                "nz-icon",
                "",
                "nzType",
                "retweet",
                "nzTheme",
                "outline",
                1,
                "me-2",
              ],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "nz-dropdown-menu", null, 0)(2, "ul", 1),
                e.ynx(3, 2),
                e.YNc(4, Ci, 3, 2, "li", 3),
                e.BQk(),
                e.TgZ(5, "li", 4),
                e.NdJ("click", function () {
                  return n.delete();
                }),
                e._UZ(6, "span", 5),
                e._uU(7, " Delete "),
                e.qZA()()(),
                e.YNc(8, ki, 2, 0, "ng-template", null, 6, e.W1O)),
                2 & t &&
                  (e.xp6(3),
                  e.Q6J("ngSwitch", n.hasSubTasks),
                  e.xp6(1),
                  e.Q6J("ngSwitchCase", !1),
                  e.xp6(2),
                  e.Q6J("nzType", n.deleting ? "loading" : "delete")(
                    "nzTheme",
                    "outline"
                  ));
            },
            dependencies: [
              h.sg,
              h.RF,
              h.n9,
              M.Ls,
              v.w,
              T.wO,
              T.r9,
              T.rY,
              ie.x7,
              E.RR,
              _e.m,
            ],
            changeDetection: 0,
          })),
          a
        );
      })();
      var bi = c(34554),
        Fe = c(66987);
      function vi(i, a) {
        1 & i && (e.TgZ(0, "button", 20), e._uU(1, " Search "), e.qZA()),
          2 & i && e.Q6J("nzSize", "small")("nzType", "primary");
      }
      function wi(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "button", 21),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.reset());
            }),
            e._uU(1, " Reset "),
            e.qZA();
        }
        2 & i && e.Q6J("nzSize", "small");
      }
      function yi(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "li", 22),
            e.NdJ("click", function () {
              const o = e.CHM(s).$implicit,
                r = e.oxw();
              return e.KtG(r.changeGroup(o));
            }),
            e.TgZ(1, "span", 23),
            e._uU(2),
            e.qZA()();
        }
        if (2 & i) {
          const s = a.$implicit,
            t = e.oxw();
          e.Q6J("nzSelected", s.value === t.selectedGroup.value),
            e.xp6(2),
            e.Oqu(s.label);
        }
      }
      function Si(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "button", 24),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.createStatusClick());
            }),
            e._uU(1, " Add Status "),
            e.qZA();
        }
        2 & i && e.Q6J("nzType", "primary")("nzTooltipTitle", "Create status");
      }
      function Pi(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "button", 24),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.phaseSettingsClick());
            }),
            e._uU(1, " Add Phase "),
            e.qZA();
        }
        if (2 & i) {
          const s = e.oxw();
          e.Q6J("nzType", "primary")(
            "nzTooltipTitle",
            s.phaseLabel + " settings"
          );
        }
      }
      let Mi = (() => {
          var i;
          class a {
            get selectedGroup() {
              return this.service.getCurrentGroup();
            }
            get phaseLabel() {
              return this.phaseService.label;
            }
            constructor(t, n, o, r, l, d, _, y) {
              (this.cdr = t),
                (this.ngZone = n),
                (this.tasksApi = o),
                (this.socket = r),
                (this.utils = l),
                (this.phaseService = d),
                (this.service = _),
                (this.auth = y),
                (this.onGroupBy = new e.vpe()),
                (this.onFilterSearch = new e.vpe()),
                (this.onPhaseSettingsClick = new e.vpe()),
                (this.onCreateStatusClick = new e.vpe()),
                (this.ASCEND = "ascend"),
                (this.DESCEND = "descend"),
                (this.COUNTS_LABELS_STYLE = {
                  backgroundColor: "#1890ff",
                  color: "#fff",
                }),
                (this.taskSearch = null);
            }
            changeGroup(t) {
              this.service.setCurrentGroup(t), this.onGroupBy.emit(t);
            }
            isGroupByStatus() {
              return (
                this.selectedGroup.value === this.service.GROUP_BY_STATUS_VALUE
              );
            }
            isGroupByPhase() {
              return (
                this.selectedGroup.value === this.service.GROUP_BY_PHASE_VALUE
              );
            }
            trackById(t, n) {
              return n.id;
            }
            toIdsMap(t) {
              return t.map((n) => n.id).join("+");
            }
            search() {
              this.taskSearch &&
                (this.onFilterSearch.emit(encodeURIComponent(this.taskSearch)),
                document.body.click());
            }
            reset() {
              this.taskSearch &&
                ((this.taskSearch = null),
                this.onFilterSearch.emit(this.taskSearch),
                this.ngZone.runOutsideAngular(() => {
                  document.body.click();
                }));
            }
            onSearchDropdownVisibleChange(t) {
              t &&
                this.ngZone.runOutsideAngular(() => {
                  setTimeout(() => {
                    document.querySelector("#task-search-input")?.focus();
                  }, j.GR);
                });
            }
            phaseSettingsClick() {
              this.onPhaseSettingsClick?.emit();
            }
            createStatusClick() {
              this.onCreateStatusClick?.emit();
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)(
                e.Y36(e.sBO),
                e.Y36(e.R0b),
                e.Y36(bi.c),
                e.Y36(q.s),
                e.Y36(de.F),
                e.Y36(Re.u),
                e.Y36(B),
                e.Y36(w.e)
              );
            }),
            (i.ɵcmp = e.Xpm({
              type: i,
              selectors: [["worklenz-group-filter"]],
              inputs: { templateId: "templateId" },
              outputs: {
                onGroupBy: "onGroupBy",
                onFilterSearch: "onFilterSearch",
                onPhaseSettingsClick: "onPhaseSettingsClick",
                onCreateStatusClick: "onCreateStatusClick",
              },
              decls: 26,
              vars: 22,
              consts: [
                ["nz-form", "", 3, "nzLayout"],
                ["nz-row", "", 3, "nzAlign", "nzJustify"],
                ["nz-col", ""],
                [
                  "nz-button",
                  "",
                  "nz-dropdown",
                  "",
                  1,
                  "me-2",
                  3,
                  "nzDropdownMenu",
                  "nzTrigger",
                  "nzVisibleChange",
                ],
                ["nz-icon", "", "nzType", "search", "nzTheme", "outline"],
                ["taskSearchDropdown", "nzDropdownMenu"],
                [1, "bg-white", "shadow", "rounded-4", "p-2", 3, "submit"],
                [
                  "type",
                  "text",
                  "nz-input",
                  "",
                  "name",
                  "search",
                  "id",
                  "task-search-input",
                  "placeholder",
                  "Buscar por Nombre",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                [1, "mt-2"],
                [
                  "nz-button",
                  "",
                  "type",
                  "submit",
                  3,
                  "nzSize",
                  "nzType",
                  4,
                  "nzSpaceItem",
                ],
                [
                  "nz-button",
                  "",
                  "type",
                  "button",
                  3,
                  "nzSize",
                  "click",
                  4,
                  "nzSpaceItem",
                ],
                [3, "nzType"],
                [1, "ms-1"],
                [
                  "nz-button",
                  "",
                  "nz-dropdown",
                  "",
                  1,
                  "ms-1",
                  "me-2",
                  3,
                  "nzTrigger",
                  "nzDropdownMenu",
                  "nzClickHide",
                ],
                ["nz-tooltip", "", 3, "nzTooltipTitle"],
                ["nz-icon", "", 3, "nzType"],
                ["groupByMenu", ""],
                ["nz-menu", ""],
                [
                  "class",
                  "m-0",
                  "nz-menu-item",
                  "",
                  3,
                  "nzSelected",
                  "click",
                  4,
                  "ngFor",
                  "ngForOf",
                  "ngForTrackBy",
                ],
                [
                  "nz-button",
                  "",
                  "class",
                  "ms-0",
                  "nz-tooltip",
                  "",
                  3,
                  "nzType",
                  "nzTooltipTitle",
                  "click",
                  4,
                  "ngIf",
                ],
                ["nz-button", "", "type", "submit", 3, "nzSize", "nzType"],
                ["nz-button", "", "type", "button", 3, "nzSize", "click"],
                ["nz-menu-item", "", 1, "m-0", 3, "nzSelected", "click"],
                ["nz-typography", ""],
                [
                  "nz-button",
                  "",
                  "nz-tooltip",
                  "",
                  1,
                  "ms-0",
                  3,
                  "nzType",
                  "nzTooltipTitle",
                  "click",
                ],
              ],
              template: function (t, n) {
                if (
                  (1 & t &&
                    (e.TgZ(0, "form", 0)(1, "div", 1)(2, "div", 2)(
                      3,
                      "button",
                      3
                    ),
                    e.NdJ("nzVisibleChange", function (r) {
                      return n.onSearchDropdownVisibleChange(r);
                    }),
                    e._UZ(4, "span", 4),
                    e.qZA(),
                    e.TgZ(5, "nz-dropdown-menu", null, 5)(7, "form", 6),
                    e.NdJ("submit", function () {
                      return n.search();
                    }),
                    e.TgZ(8, "input", 7),
                    e.NdJ("ngModelChange", function (r) {
                      return (n.taskSearch = r);
                    }),
                    e.qZA(),
                    e.TgZ(9, "nz-space", 8),
                    e.YNc(10, vi, 2, 2, "button", 9),
                    e.YNc(11, wi, 2, 1, "button", 10),
                    e.qZA()()(),
                    e._UZ(12, "nz-divider", 11),
                    e.TgZ(13, "label", 12),
                    e._uU(14, "Group by: "),
                    e.qZA(),
                    e.TgZ(15, "button", 13)(16, "span", 14),
                    e._uU(17),
                    e.ALo(18, "ellipsis"),
                    e.qZA(),
                    e._UZ(19, "span", 15),
                    e.qZA(),
                    e.TgZ(20, "nz-dropdown-menu", null, 16)(22, "ul", 17),
                    e.YNc(23, yi, 3, 2, "li", 18),
                    e.qZA()(),
                    e.YNc(24, Si, 2, 2, "button", 19),
                    e.YNc(25, Pi, 2, 2, "button", 19),
                    e.qZA()()()),
                  2 & t)
                ) {
                  const o = e.MAs(6),
                    r = e.MAs(21);
                  e.Q6J("nzLayout", "vertical"),
                    e.xp6(1),
                    e.Q6J("nzAlign", "bottom")("nzJustify", "space-between"),
                    e.xp6(2),
                    e.ekj("filter-active", !!n.taskSearch),
                    e.Q6J("nzDropdownMenu", o)("nzTrigger", "click"),
                    e.xp6(5),
                    e.Q6J("ngModel", n.taskSearch),
                    e.xp6(4),
                    e.Q6J("nzType", "vertical"),
                    e.xp6(3),
                    e.Q6J("nzTrigger", "click")("nzDropdownMenu", r)(
                      "nzClickHide",
                      !0
                    ),
                    e.xp6(1),
                    e.Q6J("nzTooltipTitle", n.selectedGroup.label),
                    e.xp6(1),
                    e.hij(" ", e.xi3(18, 19, n.selectedGroup.label, 15), " "),
                    e.xp6(2),
                    e.Q6J("nzType", "caret-down"),
                    e.xp6(4),
                    e.Q6J("ngForOf", n.service.GROUP_BY_OPTIONS)(
                      "ngForTrackBy",
                      n.trackById
                    ),
                    e.xp6(1),
                    e.Q6J(
                      "ngIf",
                      n.isGroupByStatus() && n.auth.isOwnerOrAdmin()
                    ),
                    e.xp6(1),
                    e.Q6J(
                      "ngIf",
                      n.isGroupByPhase() && n.auth.isOwnerOrAdmin()
                    );
                }
              },
              dependencies: [
                h.sg,
                h.O5,
                M.Ls,
                p._Y,
                p.Fj,
                p.JJ,
                p.JL,
                Z.t3,
                Z.SK,
                x.Lr,
                P.Zp,
                O.ix,
                v.w,
                L.dQ,
                Q.ZU,
                T.wO,
                T.r9,
                H.NU,
                H.$1,
                J.SY,
                p.On,
                p.F,
                E.cm,
                E.RR,
                E.wA,
                Fe.g,
                Le.p,
              ],
            })),
            a
          );
        })(),
        Oi = (() => {
          var i;
          class a {
            get label() {
              return this._label || this.DEFAULT_LABEL;
            }
            set label(t) {
              this._label = t || this.DEFAULT_LABEL;
            }
            get onLabelChange() {
              return this._labelChangeSbj$.asObservable();
            }
            get onPhaseOptionsChange() {
              return this._phaseOptionsChangeSbj$.asObservable();
            }
            constructor(t) {
              (this.list = t),
                (this._labelChangeSbj$ = new R.x()),
                (this._phaseOptionsChangeSbj$ = new R.x()),
                (this.DEFAULT_LABEL = "Phase"),
                (this._label = null);
            }
            updateLabel(t) {
              const n = this.list.GROUP_BY_OPTIONS.find(
                (o) => o.value === this.list.GROUP_BY_PHASE_VALUE
              );
              n &&
                ((this.label = t),
                (n.label = this.label),
                this._labelChangeSbj$.next(this.label));
            }
            emitOptionsChange() {
              this._phaseOptionsChangeSbj$.next();
            }
          }
          return (
            ((i = a).ɵfac = function (t) {
              return new (t || i)(e.LFG(B));
            }),
            (i.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            a
          );
        })();
      var ke = c(43389);
      function Ai(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "li", 23),
            e.NdJ("click", function () {
              const o = e.CHM(s).$implicit,
                r = e.oxw().$implicit,
                l = e.oxw(2);
              return e.KtG(l.setColorCode(r, o));
            }),
            e.TgZ(1, "nz-tag", 24),
            e._uU(2, "\xa0 "),
            e.qZA()();
        }
        if (2 & i) {
          const s = a.$implicit;
          e.xp6(1), e.Q6J("nzColor", s + "69");
        }
      }
      function Ii(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "nz-form-item", 14)(1, "nz-form-control")(
            2,
            "input",
            15,
            16
          ),
            e.NdJ("ngModelChange", function (n) {
              const r = e.CHM(s).$implicit;
              return e.KtG((r.name = n));
            })("focus", function () {
              const o = e.CHM(s).$implicit,
                r = e.MAs(3),
                l = e.oxw(2);
              return r.select(), e.KtG(l.setNameCache(o.id, o.name));
            })("blur", function () {
              const o = e.CHM(s).$implicit,
                r = e.oxw(2);
              return e.KtG(r.updateOption(o));
            })("keyup.enter", function () {
              e.CHM(s);
              const n = e.MAs(3);
              return e.KtG(n.blur());
            }),
            e.qZA()(),
            e.TgZ(4, "nz-tag", 17),
            e._uU(5, "\xa0 "),
            e.qZA(),
            e.TgZ(6, "nz-dropdown-menu", null, 18)(8, "ul", 19),
            e.YNc(9, Ai, 3, 1, "li", 20),
            e.qZA()(),
            e.TgZ(10, "nz-form-label", 21)(11, "button", 22),
            e.NdJ("click", function () {
              const o = e.CHM(s).$implicit,
                r = e.oxw(2);
              return e.KtG(r.removeOption(o.id));
            }),
            e._UZ(12, "span", 12),
            e.qZA()()();
        }
        if (2 & i) {
          const s = a.$implicit,
            t = a.index,
            n = e.MAs(7),
            o = e.oxw(2);
          e.xp6(2),
            e.Q6J("name", "opt" + t)("ngModel", s.name)("minLength", 2)(
              "maxLength",
              30
            )("disabled", o.deleting[s.id]),
            e.xp6(2),
            e.Q6J("nzColor", s.color_code)("nzDropdownMenu", n)(
              "nzTrigger",
              "click"
            ),
            e.xp6(5),
            e.Q6J("ngForOf", o.COLOR_CODES),
            e.xp6(1),
            e.Q6J("nzNoColon", !0),
            e.xp6(1),
            e.Q6J("nzShape", "circle")("nzType", "text")(
              "nzLoading",
              o.deleting[s.id]
            ),
            e.xp6(1),
            e.Q6J("nzType", "close-circle")("nzTheme", "outline");
        }
      }
      function Zi(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.ynx(0),
            e.TgZ(1, "nz-skeleton", 2)(2, "form", 3)(3, "nz-form-item")(
              4,
              "nz-form-label",
              4
            ),
            e._uU(5, "Phase Label:"),
            e.qZA(),
            e.TgZ(6, "nz-form-control")(7, "input", 5),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(s);
              const o = e.oxw();
              return e.KtG((o.phaseLabel = n));
            })("focus", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG((n.oldLabel = n.phaseLabel));
            })("blur", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.updateLabel(n.phaseLabel));
            }),
            e.qZA()()()(),
            e._UZ(8, "nz-divider", 6),
            e.TgZ(9, "form", 7)(10, "div", 8)(11, "div", 9)(
              12,
              "nz-form-label"
            ),
            e._uU(13, " Phase Options "),
            e.qZA()(),
            e.TgZ(14, "div", 10)(15, "button", 11),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.addNewOption());
            }),
            e._UZ(16, "span", 12),
            e._uU(17, " Add Option "),
            e.qZA()()(),
            e.YNc(18, Ii, 13, 15, "nz-form-item", 13),
            e.qZA()(),
            e.BQk();
        }
        if (2 & i) {
          const s = e.oxw();
          e.xp6(1),
            e.Q6J("nzActive", !0)("nzLoading", s.loading),
            e.xp6(1),
            e.Q6J("nzLayout", "vertical"),
            e.xp6(2),
            e.Q6J("nzFor", "label"),
            e.xp6(3),
            e.Q6J("ngModel", s.phaseLabel),
            e.xp6(8),
            e.Q6J("nzType", "primary")("nzLoading", s.creating),
            e.xp6(1),
            e.Q6J("nzType", "plus")("nzTheme", "outline"),
            e.xp6(2),
            e.Q6J("ngForOf", s.options);
        }
      }
      let Li = (() => {
        var i;
        class a {
          get options() {
            return this.list.phases;
          }
          constructor(t, n, o, r) {
            (this.api = t),
              (this.cdr = n),
              (this.list = o),
              (this.service = r),
              (this.templateId = null),
              (this.show = !1),
              (this.showChange = new e.vpe()),
              (this.onCreateOrUpdate = new e.vpe()),
              (this.refresh = new e.vpe()),
              (this.COLOR_CODES = j.zW),
              (this.loading = !1),
              (this.creating = !1),
              (this.updatingLabel = !1),
              (this.updating = {}),
              (this.deleting = {}),
              (this.updateCache = {}),
              (this.oldLabel = null),
              (this.phaseLabel = null);
          }
          close() {
            (this.show = !1), this.showChange.emit(!1);
          }
          addNewOption() {
            this.create();
          }
          onVisibleChange(t) {
            t && (this.get(!0), (this.phaseLabel = this.service.label));
          }
          removeOption(t) {
            t && this.delete(t);
          }
          updateOption(t) {
            var n = this;
            return (0, m.Z)(function* () {
              yield n.update(t), delete n.updateCache[t.id];
            })();
          }
          setNameCache(t, n) {
            this.updateCache[t] = n;
          }
          create() {
            var t = this;
            return (0, m.Z)(function* () {
              if (t.templateId && !t.creating) {
                try {
                  (t.creating = !0),
                    (yield t.api.create(t.templateId)).done &&
                      (yield t.get(!1),
                      t.service.emitOptionsChange(),
                      t.onCreateOrUpdate.emit()),
                    (t.creating = !1);
                } catch {
                  t.creating = !1;
                }
                t.cdr.markForCheck();
              }
            })();
          }
          get(t) {
            var n = this;
            return (0, m.Z)(function* () {
              if (n.templateId) {
                try {
                  n.loading = t;
                  const o = yield n.api.get(n.templateId);
                  o.done && (n.list.phases = o.body), (n.loading = !1);
                } catch {
                  n.loading = !1;
                }
                n.cdr.markForCheck();
              }
            })();
          }
          updateLabel(t) {
            var n = this;
            return (0, m.Z)(function* () {
              if (n.templateId) {
                if (!t?.trim()) return void (n.phaseLabel = n.oldLabel);
                try {
                  (n.updatingLabel = !0),
                    (yield n.api.updateLabel(n.templateId, t?.trim())).done &&
                      n.service.updateLabel(t?.trim()),
                    (n.updatingLabel = !1);
                } catch {
                  n.updatingLabel = !1;
                }
                n.cdr.markForCheck();
              }
            })();
          }
          update(t) {
            var n = this;
            return (0, m.Z)(function* () {
              if (
                t?.id &&
                n.templateId &&
                !n.updating[t.id] &&
                n.updateCache[t.id] !== t.name
              ) {
                try {
                  (n.updating[t.id] = !0),
                    (yield n.api.update(n.templateId, t)).done &&
                      (yield n.get(!1),
                      n.service.emitOptionsChange(),
                      n.onCreateOrUpdate.emit()),
                    (n.updating[t.id] = !1);
                } catch {
                  (t.name = n.updateCache[t.id]), (n.updating[t.id] = !1);
                }
                n.cdr.markForCheck();
              }
            })();
          }
          delete(t) {
            var n = this;
            return (0, m.Z)(function* () {
              if (t && n.templateId && !n.deleting[t]) {
                try {
                  if (
                    ((n.deleting[t] = !0),
                    (yield n.api.delete(t, n.templateId)).done)
                  ) {
                    const r = n.list.phases.findIndex((l) => l.id === t);
                    r > -1 &&
                      (n.list.phases.splice(r, 1),
                      n.service.emitOptionsChange(),
                      n.onCreateOrUpdate.emit());
                  }
                  n.deleting[t] = !1;
                } catch {
                  n.deleting[t] = !1;
                }
                n.cdr.markForCheck();
              }
            })();
          }
          setColorCode(t, n) {
            var o = this;
            return (0, m.Z)(function* () {
              (t.color_code = n + "69"), yield o.updateColor(t);
            })();
          }
          updateColor(t) {
            var n = this;
            return (0, m.Z)(function* () {
              if (t?.id && n.templateId) {
                try {
                  (n.updating[t.id] = !0),
                    (yield n.api.updateColor(n.templateId, t)).done &&
                      n.refresh.emit(),
                    (n.updating[t.id] = !1);
                } catch {
                  (t.name = n.updateCache[t.id]), (n.updating[t.id] = !1);
                }
                n.cdr.markForCheck();
              }
            })();
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(e.Y36(Ie), e.Y36(e.sBO), e.Y36(B), e.Y36(Oi));
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-phase-settings-drawer"]],
            inputs: { templateId: "templateId", show: "show" },
            outputs: {
              showChange: "showChange",
              onCreateOrUpdate: "onCreateOrUpdate",
              refresh: "refresh",
            },
            decls: 2,
            vars: 4,
            consts: [
              [
                3,
                "nzClosable",
                "nzVisible",
                "nzPlacement",
                "nzTitle",
                "nzOnClose",
                "nzVisibleChange",
              ],
              [4, "nzDrawerContent"],
              [3, "nzActive", "nzLoading"],
              ["nz-form", "", 3, "nzLayout"],
              [3, "nzFor"],
              [
                "nz-input",
                "",
                "id",
                "label",
                "placeholder",
                "Enter a name for label",
                "name",
                "label",
                "required",
                "",
                3,
                "ngModel",
                "ngModelChange",
                "focus",
                "blur",
              ],
              [1, "mb-3"],
              ["nz-form", ""],
              [
                1,
                "d-flex",
                "align-items-center",
                "justify-content-between",
                "mb-3",
              ],
              [1, "d-block"],
              [1, "d-block", "ms-auto"],
              [
                "type",
                "button",
                "nz-button",
                "",
                "nzBlock",
                "",
                3,
                "nzType",
                "nzLoading",
                "click",
              ],
              ["nz-icon", "", 3, "nzType", "nzTheme"],
              [
                "class",
                "d-flex align-items-center mb-3",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "d-flex", "align-items-center", "mb-3"],
              [
                "nz-input",
                "",
                3,
                "name",
                "ngModel",
                "minLength",
                "maxLength",
                "disabled",
                "ngModelChange",
                "focus",
                "blur",
                "keyup.enter",
              ],
              ["input", ""],
              [
                "nz-dropdown",
                "",
                1,
                "ms-2",
                "rounded-circle",
                "cursor-pointer",
                2,
                "width",
                "20px",
                "height",
                "20px",
                3,
                "nzColor",
                "nzDropdownMenu",
                "nzTrigger",
              ],
              ["menu", "nzDropdownMenu"],
              [
                "nz-menu",
                "",
                "nzSelectable",
                "",
                2,
                "max-height",
                "200px",
                "overflow",
                "hidden",
                "overflow-y",
                "auto",
              ],
              ["nz-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"],
              [3, "nzNoColon"],
              [
                "type",
                "button",
                "nz-button",
                "",
                3,
                "nzShape",
                "nzType",
                "nzLoading",
                "click",
              ],
              ["nz-menu-item", "", 3, "click"],
              [
                1,
                "me-1",
                "w-100",
                "rounded-pill",
                2,
                "height",
                "16px !important",
                "width",
                "16px !important",
                3,
                "nzColor",
              ],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "nz-drawer", 0),
                e.NdJ("nzOnClose", function () {
                  return n.close();
                })("nzVisibleChange", function (r) {
                  return n.onVisibleChange(r);
                }),
                e.YNc(1, Zi, 19, 10, "ng-container", 1),
                e.qZA()),
                2 & t &&
                  e.Q6J("nzClosable", !0)("nzVisible", n.show)(
                    "nzPlacement",
                    "right"
                  )("nzTitle", "Configure Phases");
            },
            dependencies: [
              h.sg,
              M.Ls,
              p._Y,
              p.Fj,
              p.JJ,
              p.JL,
              p.Q7,
              Z.t3,
              Z.SK,
              x.Lr,
              x.Nx,
              x.iK,
              x.Fd,
              P.Zp,
              O.ix,
              v.w,
              L.dQ,
              T.wO,
              T.r9,
              $.ng,
              p.On,
              p.F,
              E.cm,
              E.RR,
              ze.j,
              ke.Vz,
              ke.SQ,
              Fe.g,
            ],
            changeDetection: 0,
          })),
          a
        );
      })();
      function Fi(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "nz-option", 11), e._UZ(1, "nz-badge", 12), e.qZA()),
          2 & i)
        ) {
          const s = a.$implicit;
          e.Q6J("nzLabel", s.name || null)("nzValue", s.id),
            e.xp6(1),
            e.Q6J("nzTooltipTitle", s.description)(
              "nzText",
              (null == s ? null : s.name) || null
            )("nzTooltipPlacement", "left")("nzColor", s.color_code);
        }
      }
      function Ni(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.ynx(0),
            e.TgZ(1, "nz-skeleton", 2)(2, "form", 3),
            e.NdJ("submit", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.submit());
            }),
            e.TgZ(3, "nz-form-item")(4, "nz-form-label", 4),
            e._uU(5, "Name"),
            e.qZA(),
            e.TgZ(6, "nz-form-control", 5),
            e._UZ(7, "input", 6),
            e.qZA()(),
            e.TgZ(8, "nz-form-item")(9, "nz-form-label", 4),
            e._uU(10, "Category"),
            e.qZA(),
            e.TgZ(11, "nz-form-control", 7)(12, "nz-select", 8),
            e.YNc(13, Fi, 2, 6, "nz-option", 9),
            e.qZA()()(),
            e.TgZ(14, "button", 10),
            e._uU(15),
            e.qZA()()(),
            e.BQk();
        }
        if (2 & i) {
          const s = e.oxw();
          e.xp6(1),
            e.Q6J("nzActive", !0)("nzLoading", s.loading),
            e.xp6(1),
            e.Q6J("formGroup", s.form)("nzLayout", "vertical"),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(1),
            e.Q6J("formControlName", "name"),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(1),
            e.Q6J("formControlName", "category_id"),
            e.xp6(1),
            e.Q6J("ngForOf", s.categories),
            e.xp6(2),
            e.Oqu(s.action);
        }
      }
      let Ei = (() => {
        var i;
        class a {
          constructor(t, n, o) {
            (this.api = t),
              (this.fb = n),
              (this.app = o),
              (this.action = "Create"),
              (this.show = !1),
              (this.statusId = null),
              (this.templateId = null),
              (this.showChange = new e.vpe()),
              (this.onCreateOrUpdate = new e.vpe()),
              (this.loading = !0),
              (this.loadingCategories = !1),
              (this.colorCodes = j.lD),
              (this.categories = []),
              (this.taskStatus = {}),
              this.createForm();
          }
          init() {
            this.form.controls.template_id.setValue(this.templateId),
              this.getCategories(),
              this.statusId ? this.getById(this.statusId) : (this.loading = !1);
          }
          closeModal() {
            (this.show = !1),
              this.form.reset(),
              (this.action = "Create"),
              this.createForm(),
              this.showChange.emit();
          }
          submit() {
            var t = this;
            return (0, m.Z)(function* () {
              t.taskStatus && t.taskStatus.id
                ? yield t.updateStatus()
                : yield t.addStatus();
            })();
          }
          getById(t) {
            var n = this;
            return (0, m.Z)(function* () {
              try {
                n.loading = !0;
                const o = yield n.api.getById(t);
                o.done &&
                  ((n.taskStatus = o.body), n.form.patchValue(n.taskStatus)),
                  (n.loading = !1);
              } catch (o) {
                (0, b.tu)(o), (n.loading = !1);
              }
            })();
          }
          getCategories() {
            var t = this;
            return (0, m.Z)(function* () {
              try {
                t.loadingCategories = !0;
                const n = yield t.api.getCategories();
                n.done &&
                  ((t.categories = n.body),
                  t.form.controls.category_id.setValue(t.categories[0].id)),
                  (t.loadingCategories = !1);
              } catch (n) {
                (t.loadingCategories = !1), (0, b.tu)(n);
              }
            })();
          }
          addStatus() {
            var t = this;
            return (0, m.Z)(function* () {
              if (t.form.invalid) t.app.displayErrorsOf(t.form);
              else
                try {
                  const n = yield t.api.create(t.form.value);
                  n.done &&
                    ((n.body.color_code = n.body.color_code + "69"),
                    t.onCreateOrUpdate.emit(),
                    t.closeModal());
                } catch (n) {
                  (0, b.tu)(n);
                }
            })();
          }
          updateStatus() {
            var t = this;
            return (0, m.Z)(function* () {
              if (t.taskStatus && t.taskStatus.id) {
                if (t.form.invalid) return void t.app.displayErrorsOf(t.form);
                try {
                  (yield t.api.update(t.taskStatus.id, t.form.value)).done &&
                    (t.onCreateOrUpdate.emit(), t.closeModal(), (0, me.mT)());
                } catch (n) {
                  (0, b.tu)(n);
                }
              }
            })();
          }
          onVisibilityChange(t) {
            t && setTimeout(() => this.init(), 100);
          }
          createForm() {
            this.form = this.fb.group({
              name: [null, [p.kI.required]],
              category_id: [null, [p.kI.required]],
              template_id: [this.templateId],
            });
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(e.Y36(Ae), e.Y36(p.qu), e.Y36(U.z));
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-status-settings-drawer"]],
            inputs: {
              action: "action",
              show: "show",
              statusId: "statusId",
              templateId: "templateId",
            },
            outputs: {
              showChange: "showChange",
              onCreateOrUpdate: "onCreateOrUpdate",
            },
            decls: 2,
            vars: 3,
            consts: [
              [
                "nzPlacement",
                "right",
                3,
                "nzVisible",
                "nzClosable",
                "nzTitle",
                "nzOnClose",
                "nzVisibleChange",
              ],
              [4, "nzDrawerContent"],
              [3, "nzActive", "nzLoading"],
              ["nz-form", "", 3, "formGroup", "nzLayout", "submit"],
              ["nzRequired", "", 3, "nzSpan"],
              ["nzErrorTip", "Please enter a name!", 3, "nzSpan"],
              ["nz-input", "", "placeholder", "Name", 3, "formControlName"],
              [3, "nzSpan"],
              [3, "formControlName"],
              [
                "nzCustomContent",
                "",
                3,
                "nzLabel",
                "nzValue",
                4,
                "ngFor",
                "ngForOf",
              ],
              [
                "nz-button",
                "",
                "nzBlock",
                "",
                "nzType",
                "primary",
                "type",
                "submit",
              ],
              ["nzCustomContent", "", 3, "nzLabel", "nzValue"],
              [
                "nz-tooltip",
                "",
                1,
                "w-100",
                3,
                "nzTooltipTitle",
                "nzText",
                "nzTooltipPlacement",
                "nzColor",
              ],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "nz-drawer", 0),
                e.NdJ("nzOnClose", function () {
                  return n.closeModal();
                })("nzVisibleChange", function (r) {
                  return (n.show = r);
                })("nzVisibleChange", function (r) {
                  return n.onVisibilityChange(r);
                }),
                e.YNc(1, Ni, 16, 12, "ng-container", 1),
                e.qZA()),
                2 & t &&
                  (e.MGl("nzTitle", "", n.action, " Status"),
                  e.Q6J("nzVisible", n.show)("nzClosable", !0));
            },
            dependencies: [
              h.sg,
              p._Y,
              p.Fj,
              p.JJ,
              p.JL,
              p.sg,
              p.u,
              Z.t3,
              Z.SK,
              x.Lr,
              x.Nx,
              x.iK,
              x.Fd,
              P.Zp,
              O.ix,
              v.w,
              L.dQ,
              J.SY,
              $.ng,
              K.Ip,
              K.Vq,
              ie.x7,
              ke.Vz,
              ke.SQ,
            ],
          })),
          a
        );
      })();
      const Ui = ["input"];
      function Ji(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "h4", 3),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.focusInput());
            }),
            e._uU(1),
            e.qZA();
        }
        if (2 & i) {
          const s = e.oxw();
          e.xp6(1), e.Oqu(s.templateName);
        }
      }
      function Gi(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "input", 4, 5),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(s);
              const o = e.oxw();
              return e.KtG((o.templateName = n));
            })("ngModelChange", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.validate());
            })("blur", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.onBlur());
            }),
            e.qZA();
        }
        if (2 & i) {
          const s = e.oxw();
          e.Q6J("ngClass", s.isEmpty ? "error" : "")("ngModel", s.templateName);
        }
      }
      function Di(i, a) {
        1 & i &&
          (e.TgZ(0, "small", 6), e._uU(1, "Name cannot be empty!"), e.qZA());
      }
      let Yi = (() => {
        var i;
        class a {
          constructor(t, n, o, r) {
            (this.socket = t),
              (this.ngZone = n),
              (this.renderer = o),
              (this.cdr = r),
              (this.templateId = null),
              (this.templateName = null),
              (this.showInput = !1),
              (this.isEmpty = !1),
              (this.handleResponse = (l) => {
                l &&
                  ((this.templateName = l.template_name),
                  (this.showInput = !1),
                  this.cdr.markForCheck());
              });
          }
          ngOnInit() {
            this.socket.on(k.C.PT_NAME_CHANGE.toString(), this.handleResponse);
          }
          focusInput() {
            (this.showInput = !0),
              this.ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                  this.input &&
                    (this.input.nativeElement.focus(), this.cdr.markForCheck());
                }, 100);
              });
          }
          onBlur() {
            this.validate() && this.changeName();
          }
          validate() {
            return "" !== this.templateName?.trim() && this.templateName
              ? ((this.isEmpty = !1), !0)
              : ((this.isEmpty = !0), !1);
          }
          changeName() {
            this.socket.emit(
              k.C.PT_NAME_CHANGE.toString(),
              JSON.stringify({
                template_id: this.templateId,
                template_name: this.templateName,
              })
            );
          }
        }
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)(
              e.Y36(q.s),
              e.Y36(e.R0b),
              e.Y36(e.Qsj),
              e.Y36(e.sBO)
            );
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["worklenz-template-name"]],
            viewQuery: function (t, n) {
              if ((1 & t && e.Gf(Ui, 5), 2 & t)) {
                let o;
                e.iGM((o = e.CRH())) && (n.input = o.first);
              }
            },
            inputs: { templateId: "templateId", templateName: "templateName" },
            decls: 3,
            vars: 3,
            consts: [
              ["nz-typography", "", "class", "mb-0", 3, "click", 4, "ngIf"],
              [
                "nz-input",
                "",
                "placeholder",
                "Template Name",
                "type",
                "text",
                "class",
                "temp-name-input",
                3,
                "ngClass",
                "ngModel",
                "ngModelChange",
                "blur",
                4,
                "ngIf",
              ],
              [
                "nz-typography",
                "",
                "nzType",
                "danger",
                "class",
                "error-text",
                4,
                "ngIf",
              ],
              ["nz-typography", "", 1, "mb-0", 3, "click"],
              [
                "nz-input",
                "",
                "placeholder",
                "Template Name",
                "type",
                "text",
                1,
                "temp-name-input",
                3,
                "ngClass",
                "ngModel",
                "ngModelChange",
                "blur",
              ],
              ["input", ""],
              ["nz-typography", "", "nzType", "danger", 1, "error-text"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.YNc(0, Ji, 2, 1, "h4", 0),
                e.YNc(1, Gi, 2, 2, "input", 1),
                e.YNc(2, Di, 2, 0, "small", 2)),
                2 & t &&
                  (e.Q6J("ngIf", !n.showInput),
                  e.xp6(1),
                  e.Q6J("ngIf", n.showInput),
                  e.xp6(1),
                  e.Q6J("ngIf", n.isEmpty));
            },
            dependencies: [h.mk, h.O5, p.Fj, p.JJ, P.Zp, Q.ZU, p.On],
            styles: [
              ".temp-name-input[_ngcontent-%COMP%]{color:#000000d9;font-weight:600;font-size:18px;line-height:1.4}.error[_ngcontent-%COMP%]{border-color:#ff4d4f;box-shadow:none}.error-text[_ngcontent-%COMP%]{position:absolute;left:0;bottom:-16px}h4[_ngcontent-%COMP%]{transition:.25s all;border:1px solid transparent}h4[_ngcontent-%COMP%]:hover{border:1px solid #d9d9d9;border-radius:4px}",
            ],
            changeDetection: 0,
          })),
          a
        );
      })();
      const Qi = ["row"],
        Ri = ["scrollPanel"];
      function Bi(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "span")(1, "button", 14),
            e.NdJ("click", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.onBack());
            }),
            e._UZ(2, "span", 15),
            e.qZA()();
        }
      }
      function Hi(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "span", 16),
            e._UZ(1, "worklenz-template-name", 17),
            e.qZA()),
          2 & i)
        ) {
          const s = e.oxw();
          e.xp6(1),
            e.Q6J("templateId", s.templateId)("templateName", s.templateName);
        }
      }
      function $i(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "worklenz-group-filter", 18),
            e.NdJ("onGroupBy", function (n) {
              e.CHM(s);
              const o = e.oxw();
              return e.KtG(o.onGroupByChange(n));
            })("onFilterSearch", function (n) {
              e.CHM(s);
              const o = e.oxw();
              return e.KtG(o.handleFilterSearch(n));
            })("onPhaseSettingsClick", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.openAddColumnDrawer());
            })("onCreateStatusClick", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.openStatusDrawer());
            }),
            e.qZA();
        }
        if (2 & i) {
          const s = e.oxw();
          e.Q6J("templateId", s.templateId);
        }
      }
      function ji(i, a) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 19)(1, "div", 20),
            e._UZ(2, "img", 21),
            e.qZA(),
            e._UZ(3, "span", 22),
            e.qZA()),
          2 & i)
        ) {
          const s = e.oxw();
          e.xp6(3), e.Q6J("ngSwitch", s.isGroupByPhase());
        }
      }
      function qi(i, a) {
        1 & i &&
          (e.TgZ(0, "div", 39), e._uU(1, " No tasks available "), e.qZA());
      }
      function Vi(i, a) {
        1 & i && e._UZ(0, "worklenz-pt-task-list-row", 44),
          2 & i && e.Q6J("task", a.$implicit);
      }
      function Ki(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.ynx(0),
            e.TgZ(1, "div", 45, 46)(3, "div", 47),
            e._uU(4, " \xa0 "),
            e.qZA(),
            e.TgZ(5, "div", 48)(6, "worklenz-add-task-input", 49, 50),
            e.NdJ("focusChange", function (n) {
              e.CHM(s);
              const o = e.MAs(2),
                r = e.MAs(7),
                l = e.oxw(4);
              return e.KtG(l.quickTaskFocusChange(n, o, r));
            }),
            e.qZA()()(),
            e.BQk();
        }
        if (2 & i) {
          const s = e.oxw(2).$implicit,
            t = e.oxw().$implicit,
            n = e.oxw();
          e.xp6(6),
            e.Q6J("templateId", n.templateId)("label", "Add sub-task")(
              "parentTask",
              s.id
            )("groupId", t.id)("subTaskInput", !0);
        }
      }
      function Wi(i, a) {
        if (
          (1 & i &&
            (e.ynx(0),
            e.TgZ(1, "div"),
            e.YNc(2, Vi, 1, 1, "worklenz-pt-task-list-row", 43),
            e.YNc(3, Ki, 8, 5, "ng-container", 42),
            e.qZA(),
            e.BQk()),
          2 & i)
        ) {
          const s = e.oxw().$implicit,
            t = e.oxw(2);
          e.xp6(2),
            e.Q6J("ngForOf", s.sub_tasks)("ngForTrackBy", t.trackById),
            e.xp6(1),
            e.Q6J("ngIf", t.templateId && s.id && s.show_sub_tasks);
        }
      }
      function Xi(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.ynx(0),
            e.TgZ(1, "worklenz-pt-task-list-row", 40, 41),
            e.NdJ("onShowSubTasks", function (n) {
              e.CHM(s);
              const o = e.MAs(2),
                r = e.oxw().$implicit,
                l = e.oxw();
              return e.KtG(l.displaySubTasks(n, o, r.id));
            }),
            e.qZA(),
            e.YNc(3, Wi, 4, 3, "ng-container", 42),
            e.BQk();
        }
        if (2 & i) {
          const s = a.$implicit,
            t = e.oxw(2);
          e.xp6(1),
            e.ekj(
              "selected",
              (null == t.selectedTask ? null : t.selectedTask.id) === s.id
            ),
            e.Q6J("task", s),
            e.xp6(2),
            e.Q6J("ngIf", s.sub_tasks && s.show_sub_tasks);
        }
      }
      function es(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "worklenz-add-task-input", 51),
            e.NdJ("focusChange", function (n) {
              e.CHM(s), e.oxw();
              const o = e.MAs(14),
                r = e.oxw();
              return e.KtG(r.handleFocusChange(n, o));
            }),
            e.qZA();
        }
        if (2 & i) {
          const s = e.oxw().$implicit,
            t = e.oxw();
          e.Q6J("templateId", t.templateId)("groupId", s.id);
        }
      }
      function ts(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "div", 23)(1, "div", 24)(
            2,
            "worklenz-task-list-group-settings",
            25
          ),
            e.NdJ("toggle", function (n) {
              e.CHM(s);
              const o = e.MAs(4),
                r = e.oxw();
              return e.KtG(r.toggleGroup(n, o));
            })("onCreateOrUpdate", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.refreshWithoutLoading());
            }),
            e.qZA(),
            e.TgZ(3, "div", 26, 27),
            e._UZ(5, "span", 28),
            e.TgZ(6, "div", 29)(7, "div", 30, 31),
            e.NdJ("cdkDropListDropped", function (n) {
              e.CHM(s);
              const o = e.oxw();
              return e.KtG(o.onDrop(n));
            })("scroll", function () {
              e.CHM(s);
              const n = e.MAs(8),
                o = e.oxw();
              return e.KtG(o.onScroll(n));
            }),
            e.TgZ(9, "div", 32)(10, "worklenz-task-list-header", 33),
            e.NdJ("selectChange", function (n) {
              const r = e.CHM(s).$implicit,
                l = e.oxw();
              return e.KtG(l.selectTasksInGroup(n, r));
            })("phaseSettingsClick", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.openAddColumnDrawer());
            }),
            e.qZA(),
            e.YNc(11, qi, 2, 0, "div", 34),
            e.YNc(12, Xi, 4, 4, "ng-container", 35),
            e.qZA()(),
            e.TgZ(13, "div", 36, 37),
            e.YNc(15, es, 1, 2, "worklenz-add-task-input", 38),
            e.qZA()()()()();
        }
        if (2 & i) {
          const s = a.$implicit,
            t = e.oxw();
          e.xp6(2),
            e.Q6J("group", s)("templateId", t.templateId)(
              "categories",
              t.categories
            ),
            e.xp6(1),
            e.Udp("max-height", s.tasks.length ? void 0 : 0),
            e.xp6(2),
            e.Udp("background", s.color_code),
            e.xp6(2),
            e.Q6J("id", s.id)("cdkDropListConnectedTo", t.groupIds)(
              "cdkDropListData",
              s
            ),
            e.xp6(3),
            e.Q6J("groupId", s.id),
            e.xp6(1),
            e.Q6J("ngIf", !s.tasks.length),
            e.xp6(1),
            e.Q6J("ngForOf", s.tasks)("ngForTrackBy", t.trackById),
            e.xp6(3),
            e.Q6J("ngIf", t.templateId);
        }
      }
      function ns(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "worklenz-phase-settings-drawer", 52),
            e.NdJ("showChange", function (n) {
              e.CHM(s);
              const o = e.oxw();
              return e.KtG((o.displayPhaseModal = n));
            })("onCreateOrUpdate", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.refreshWithoutLoading());
            })("refresh", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.refreshWithoutLoading());
            }),
            e.qZA();
        }
        if (2 & i) {
          const s = e.oxw();
          e.Q6J("templateId", s.templateId)("show", s.displayPhaseModal);
        }
      }
      function is(i, a) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, "worklenz-status-settings-drawer", 53),
            e.NdJ("onCreateOrUpdate", function () {
              e.CHM(s);
              const n = e.oxw();
              return e.KtG(n.refreshWithoutLoading());
            })("showChange", function (n) {
              e.CHM(s);
              const o = e.oxw();
              return e.KtG((o.displayStatusModal = n));
            }),
            e.qZA();
        }
        if (2 & i) {
          const s = e.oxw();
          e.Q6J("statusId", null)("templateId", s.templateId)(
            "show",
            s.displayStatusModal
          );
        }
      }
      const os = [
        {
          path: "",
          component: ve,
          children: [
            { path: "", redirectTo: "profile", pathMatch: "full" },
            { path: "profile", component: F },
            { path: "language-and-region", component: ft },
            { path: "labels", canActivate: [oe.T], component: yt },
            {
              path: "categories",
              canActivate: [oe.T],
              loadChildren: () =>
                c
                  .e(931)
                  .then(c.bind(c, 82931))
                  .then((i) => i.CategoriesModule),
            },
            {
              path: "clients",
              canActivate: [oe.T],
              loadChildren: () =>
                c
                  .e(554)
                  .then(c.bind(c, 9554))
                  .then((i) => i.ClientsModule),
            },
            {
              path: "job-titles",
              canActivate: [oe.T],
              loadChildren: () =>
                c
                  .e(693)
                  .then(c.bind(c, 93693))
                  .then((i) => i.JobTitlesModule),
            },
            {
              path: "notifications",
              loadChildren: () =>
                c
                  .e(940)
                  .then(c.bind(c, 94940))
                  .then((i) => i.NotificationSettingsModule),
            },
            { path: "teams", component: at },
            { path: "team-members", canActivate: [oe.T], component: nn },
            {
              path: "password",
              canActivate: [(i, a) => (0, e.f3M)(ut).canActivate(i, a)],
              component: dt,
            },
            { path: "task-templates", canActivate: [oe.T], component: It },
            { path: "project-templates", canActivate: [oe.T], component: cn },
          ],
        },
        {
          path: "project-templates/edit/:id/:name",
          canActivate: [oe.T],
          component: (() => {
            var i;
            class a {
              get loading() {
                return this.loadingGroups;
              }
              get defaultStatus() {
                return this.service.statuses.length
                  ? this.service.statuses[0].id
                  : null;
              }
              get groups() {
                return this.service.groups;
              }
              constructor(
                t,
                n,
                o,
                r,
                l,
                d,
                _,
                y,
                S,
                be,
                ne,
                ae,
                fo,
                zo,
                To,
                Co
              ) {
                (this.route = t),
                  (this.router = n),
                  (this.cdr = o),
                  (this.service = r),
                  (this.ngZone = l),
                  (this.map = d),
                  (this.socket = _),
                  (this.renderer = y),
                  (this.utils = S),
                  (this.api = be),
                  (this.labelsApi = ne),
                  (this.statusesApi = ae),
                  (this.prioritiesApi = fo),
                  (this.phasesApi = zo),
                  (this.app = To),
                  (this.auth = Co),
                  (this.scrollBy = 0),
                  (this.templateId = null),
                  (this.templateName = ""),
                  (this.searchValue = null),
                  (this.templatesFilterString = null),
                  (this.selected = !1),
                  (this.loadingGroups = !1),
                  (this.groupChanging = !1),
                  (this.displayPhaseModal = !1),
                  (this.displayStatusModal = !1),
                  (this.checked = !1),
                  (this.indeterminate = !1),
                  (this.loadingFiltering = !1),
                  (this.loadingStatuses = !1),
                  (this.loadingPriorities = !1),
                  (this.loadingCategories = !1),
                  (this.loadingPhases = !1),
                  (this.loadingLabels = !1),
                  (this.taskId = null),
                  (this.selectedTask = null),
                  (this.groupIds = []),
                  (this.categories = []),
                  (this.handleSortOrderResponse = (qe) => {
                    for (const Ve of qe) {
                      const Ne = Ve.id;
                      if (Ne) {
                        const Ee = this.map.tasks.get(Ne);
                        Ee &&
                          ((Ee.sort_order = Ve.sort_order),
                          this.map.tasks.set(Ne, Ee));
                      }
                    }
                  }),
                  (this.templateId = this.route.snapshot.paramMap.get("id")),
                  (this.templateName =
                    this.route.snapshot.paramMap.get("name")),
                  this.app.setTitle("Edit Template"),
                  this.service.settemplateId(this.templateId),
                  this.service.onTaskAddOrDelete$
                    .pipe((0, G.sL)())
                    .subscribe((qe) => {
                      this.cdr.markForCheck();
                    }),
                  this.service.onRefresh$.pipe((0, G.sL)()).subscribe(() => {
                    this.cdr.markForCheck();
                  }),
                  this.service.onRefreshSubtasksIncluded
                    .pipe((0, G.sL)())
                    .subscribe(() => {
                      this.cdr.markForCheck();
                    });
              }
              ngOnInit() {
                (this.service.isSubtasksIncluded = !1), this.init(!0);
              }
              init(t) {
                Promise.all([
                  this.getGroups(t),
                  this.getLabels(),
                  this.getStatuses(),
                  this.getPriorities(),
                  this.getCategories(),
                  this.getPhases(),
                ]),
                  this.socket.on(
                    k.C.PT_TASK_SORT_ORDER_CHANGE.toString(),
                    this.handleSortOrderResponse
                  );
              }
              ngOnDestroy() {
                this.ngZone.runOutsideAngular(() => {
                  this.service.reset(),
                    (this.service.groups = []),
                    this.map.reset();
                }),
                  this.socket.removeListener(
                    k.C.PT_TASK_SORT_ORDER_CHANGE.toString(),
                    this.handleSortOrderResponse
                  );
              }
              isGroupByPhase() {
                return (
                  this.service.getCurrentGroup().value ===
                  this.service.GROUP_BY_PHASE_VALUE
                );
              }
              getConf(t) {
                const n = {
                  id: this.templateId,
                  search: this.searchValue,
                  projects: this.templatesFilterString,
                  group: this.service.getCurrentGroup().value,
                  isSubtasksInclude: !1,
                };
                return t && (n.parent_task = t), n;
              }
              displaySubTasks(t, n, o) {
                var r = this;
                return (0, m.Z)(function* () {
                  if (t.id || !t.sub_tasks_loading) {
                    if (!t.show_sub_tasks && 0 === t.sub_tasks_count)
                      return (t.show_sub_tasks = !0), void (t.sub_tasks = []);
                    if (
                      ((t.sub_tasks_loading = !0),
                      (t.show_sub_tasks = !t.show_sub_tasks),
                      t.show_sub_tasks)
                    ) {
                      t.sub_tasks = yield r.getSubTasks(t);
                      for (const l of t.sub_tasks) r.map.add(o, l);
                    } else {
                      for (const l of t.sub_tasks || []) r.map.deselectTask(l);
                      t.sub_tasks = [];
                    }
                    (t.sub_tasks_loading = !1),
                      n.detectChanges(),
                      r.cdr.markForCheck();
                  }
                })();
              }
              toggleGroup(t, n) {
                this.ngZone.runOutsideAngular(() => {
                  const o = t.target;
                  o &&
                    (o.closest(".btn")?.classList.toggle("active"),
                    this.renderer.setStyle(
                      n,
                      "max-height",
                      "0px" === n.style.maxHeight
                        ? n.scrollHeight + 8 + "px"
                        : "0px"
                    ));
                });
              }
              trackById(t, n) {
                return n.id;
              }
              onDrop(t) {
                const n = t.previousIndex,
                  o = t.currentIndex,
                  r = t.previousContainer.data,
                  l = t.container.data;
                0 == r.tasks.length &&
                  this.ngZone.runOutsideAngular(() => {
                    document
                      .getElementById(`${t.previousContainer.id}`)
                      ?.closest("div")
                      ?.parentNode?.parentNode?.parentNode?.querySelector(
                        "button.collapse.active"
                      )
                      ?.classList.remove("active");
                  });
                const d = t.item.data,
                  _ = l.tasks[o]?.sort_order;
                this.socket.emit(k.C.PT_TASK_SORT_ORDER_CHANGE.toString(), {
                  template_id: this.service.gettemplateId(),
                  from_index: r.tasks[n].sort_order,
                  to_index: _ || l.tasks[l.tasks.length - 1]?.sort_order || -1,
                  to_last_index: !_,
                  from_group: r.id,
                  to_group: l.id,
                  group_by: this.service.getCurrentGroup().value,
                  task: d,
                  team_id: this.auth.getCurrentSession()?.team_id,
                }),
                  r.id === l.id
                    ? (0, Ce.bA)(t.container.data.tasks, n, o)
                    : ((0, Ce.EA)(
                        t.previousContainer.data.tasks,
                        t.container.data.tasks,
                        t.previousIndex,
                        t.currentIndex
                      ),
                      this.map.remove(d),
                      this.map.add(l.id, d),
                      this.service.emitGroupChange(l.id, d.id, l.color_code));
              }
              bulkUpdateSuccess() {
                var t = this;
                return (0, m.Z)(function* () {
                  yield t.getGroups(!0);
                })();
              }
              selectTasksInGroup(t, n) {
                for (const o of n.tasks)
                  t ? this.map.selectTask(o) : this.map.deselectTask(o);
              }
              mapTasks(t) {
                for (const n of t) {
                  this.map.registerGroup(n);
                  for (const o of n.tasks)
                    o.start_date && (o.start_date = new Date(o.start_date)),
                      o.end_date && (o.end_date = new Date(o.end_date));
                }
              }
              toggleFocusCls(t, n) {
                t
                  ? this.renderer.addClass(n, this.service.HIGHLIGHT_COL_CLS)
                  : this.renderer.removeClass(
                      n,
                      this.service.HIGHLIGHT_COL_CLS
                    );
              }
              onShowChange(t) {
                t || (this.selectedTask = null);
              }
              handleNewTaskReceive(t) {
                if (t.isSubTask) {
                  const n = this.rows.find((o) => o.id === t.taskId);
                  n && n.detectChanges();
                }
                this.cdr.markForCheck();
              }
              handleFocusChange(t, n) {
                this.ngZone.runOutsideAngular(() => {
                  this.toggleFocusCls(t, n);
                });
              }
              quickTaskFocusChange(t, n, o) {
                this.ngZone.runOutsideAngular(() => {
                  this.toggleFocusCls(t, n);
                });
              }
              onGroupByChange(t) {
                var n = this;
                return (0, m.Z)(function* () {
                  n.service.setCurrentGroup(t),
                    (n.groupChanging = !0),
                    yield n.getGroups(!0),
                    setTimeout(() => {
                      (n.groupChanging = !1), n.cdr.markForCheck();
                    }, 100);
                })();
              }
              handleFilterSearch(t) {
                var n = this;
                return (0, m.Z)(function* () {
                  (n.loadingFiltering = !0),
                    (n.searchValue = t),
                    yield n.getGroups(!0),
                    (n.loadingFiltering = !1),
                    n.cdr.markForCheck();
                })();
              }
              getGroups(t) {
                var n = this;
                return (0, m.Z)(function* () {
                  if (n.templateId) {
                    try {
                      n.map.deselectAll(), (n.loadingGroups = t);
                      const o = n.getConf();
                      o.isSubtasksInclude = n.service.isSubtasksIncluded;
                      const r = yield n.api.getTaskList(o);
                      if (r.done) {
                        const l = (0, b.I8)(r.body);
                        (n.groupIds = l.map((d) => d.id)),
                          n.mapTasks(l),
                          (n.service.groups = l);
                      }
                      n.loadingGroups = !1;
                    } catch {
                      n.loadingGroups = !1;
                    }
                    n.cdr.markForCheck();
                  }
                })();
              }
              getSubTasks(t) {
                var n = this;
                return (0, m.Z)(function* () {
                  let o = [];
                  if (t?.id)
                    try {
                      const r = n.getConf(t.id),
                        l = yield n.api.getTaskList(r);
                      l.done && (o = l.body);
                    } catch {}
                  return o;
                })();
              }
              getStatuses() {
                var t = this;
                return (0, m.Z)(function* () {
                  if (t.templateId)
                    try {
                      t.loadingStatuses = !0;
                      const n = yield t.statusesApi.get(t.templateId);
                      n.done && (t.service.statuses = n.body),
                        (t.loadingStatuses = !1);
                    } catch {
                      t.loadingStatuses = !1;
                    }
                })();
              }
              getPriorities() {
                var t = this;
                return (0, m.Z)(function* () {
                  try {
                    t.loadingPriorities = !0;
                    const n = yield t.prioritiesApi.get();
                    n.done && (t.service.priorities = n.body),
                      (t.loadingPriorities = !1);
                  } catch {
                    t.loadingPriorities = !1;
                  }
                })();
              }
              getCategories() {
                var t = this;
                return (0, m.Z)(function* () {
                  try {
                    t.loadingCategories = !0;
                    const n = yield t.statusesApi.getCategories();
                    n.done && (t.categories = n.body),
                      (t.loadingCategories = !1);
                  } catch {
                    t.loadingCategories = !1;
                  }
                })();
              }
              getPhases() {
                var t = this;
                return (0, m.Z)(function* () {
                  if (t.templateId)
                    try {
                      t.loadingPhases = !0;
                      const n = yield t.phasesApi.get(t.templateId);
                      n.done && (t.service.phases = n.body),
                        (t.loadingPhases = !1);
                    } catch {
                      t.loadingPhases = !1;
                    }
                })();
              }
              getLabels() {
                var t = this;
                return (0, m.Z)(function* () {
                  try {
                    t.loadingLabels = !0;
                    const n = yield t.labelsApi.get(t.templateId);
                    n.done && (t.service.labels = n.body),
                      (t.loadingLabels = !1);
                  } catch {
                    t.loadingLabels = !1;
                  }
                })();
              }
              onScroll(t) {
                this.ngZone.runOutsideAngular(() => {
                  const n = "scrolling-panel";
                  (this.scrollBy = t.scrollLeft),
                    this.scrollBy > 0
                      ? t.classList.add(n)
                      : t.classList.remove(n);
                });
              }
              debounce(t, n) {
                let o;
                return (...r) => {
                  clearTimeout(o), (o = setTimeout(() => t.apply(this, r), n));
                };
              }
              openAddColumnDrawer() {
                this.displayPhaseModal = !0;
              }
              openStatusDrawer() {
                this.displayStatusModal = !0;
              }
              onBack() {
                this.router.navigate(["/worklenz/settings/project-templates"]);
              }
              refreshWithoutLoading() {
                this.init(!1);
              }
            }
            return (
              ((i = a).ɵfac = function (t) {
                return new (t || i)(
                  e.Y36(N.gz),
                  e.Y36(N.F0),
                  e.Y36(e.sBO),
                  e.Y36(B),
                  e.Y36(e.R0b),
                  e.Y36(ue),
                  e.Y36(q.s),
                  e.Y36(e.Qsj),
                  e.Y36(de.F),
                  e.Y36(Ye),
                  e.Y36(dn),
                  e.Y36(Ae),
                  e.Y36(un),
                  e.Y36(Ie),
                  e.Y36(U.z),
                  e.Y36(w.e)
                );
              }),
              (i.ɵcmp = e.Xpm({
                type: i,
                selectors: [["worklenz-project-template-edit-view"]],
                viewQuery: function (t, n) {
                  if ((1 & t && (e.Gf(Qi, 5), e.Gf(Ri, 5)), 2 & t)) {
                    let o;
                    e.iGM((o = e.CRH())) && (n.rows = o),
                      e.iGM((o = e.CRH())) && (n.scrollPanels = o);
                  }
                },
                hostBindings: function (t, n) {
                  1 & t &&
                    e.NdJ("scroll", function (r) {
                      return n.onScroll(r.target);
                    });
                },
                decls: 15,
                vars: 10,
                consts: [
                  [1, "container"],
                  [1, "nz-header", "mt-3", "mb-4"],
                  [1, "align-items-center"],
                  [4, "nzSpaceItem"],
                  ["class", "name-input position-relative", 4, "nzSpaceItem"],
                  [1, "top-section", "mb-3", "mt-3"],
                  [
                    3,
                    "templateId",
                    "onGroupBy",
                    "onFilterSearch",
                    "onPhaseSettingsClick",
                    "onCreateStatusClick",
                    4,
                    "ngIf",
                  ],
                  [3, "nzActive", "nzLoading"],
                  ["class", "pt-5 pb-5", 4, "ngIf"],
                  ["cdkDropListGroup", "", 1, "tasks-wrapper"],
                  ["class", "mb-3", 4, "rxFor", "rxForOf", "rxForTrackBy"],
                  [
                    3,
                    "templateId",
                    "show",
                    "showChange",
                    "onCreateOrUpdate",
                    "refresh",
                    4,
                    "ngIf",
                  ],
                  [
                    "action",
                    "Create",
                    3,
                    "statusId",
                    "templateId",
                    "show",
                    "onCreateOrUpdate",
                    "showChange",
                    4,
                    "ngIf",
                  ],
                  [3, "templateId", "groups"],
                  [
                    "nz-button",
                    "",
                    "nzType",
                    "text",
                    1,
                    "ant-page-header-back-button",
                    "d-flex",
                    "align-items-center",
                    2,
                    "font-size",
                    "16px",
                    3,
                    "click",
                  ],
                  ["nz-icon", "", "nzType", "arrow-left", "nzTheme", "outline"],
                  [1, "name-input", "position-relative"],
                  [3, "templateId", "templateName"],
                  [
                    3,
                    "templateId",
                    "onGroupBy",
                    "onFilterSearch",
                    "onPhaseSettingsClick",
                    "onCreateStatusClick",
                  ],
                  [1, "pt-5", "pb-5"],
                  [1, "no-data-img-holder", "mx-auto", "mb-4"],
                  [
                    "src",
                    "/assets/images/empty-box.webp",
                    "alt",
                    "",
                    1,
                    "img-fluid",
                  ],
                  [
                    "nz-typography",
                    "",
                    1,
                    "mx-auto",
                    "d-block",
                    "text-center",
                    "no-data-text",
                    2,
                    "width",
                    "max-content",
                    3,
                    "ngSwitch",
                  ],
                  [1, "mb-3"],
                  [1, "container", "px-0"],
                  [
                    3,
                    "group",
                    "templateId",
                    "categories",
                    "toggle",
                    "onCreateOrUpdate",
                  ],
                  [1, "panel", "position-relative"],
                  ["panel", ""],
                  [1, "panel-left-border"],
                  [1, "tasks-table", "position-relative"],
                  [
                    "cdkDropList",
                    "",
                    1,
                    "container",
                    "px-0",
                    "table-container",
                    "table-1",
                    3,
                    "id",
                    "cdkDropListConnectedTo",
                    "cdkDropListData",
                    "cdkDropListDropped",
                    "scroll",
                  ],
                  ["scrollPanel", ""],
                  [1, "border-right"],
                  [3, "groupId", "selectChange", "phaseSettingsClick"],
                  [
                    "class",
                    "tasks-empty-placeholder d-flex align-items-center mb-0 ps-3",
                    "nz-typography",
                    "",
                    "nzType",
                    "secondary",
                    4,
                    "ngIf",
                  ],
                  [4, "ngFor", "ngForOf", "ngForTrackBy"],
                  [1, "new-task-input"],
                  ["td1", ""],
                  [3, "templateId", "groupId", "focusChange", 4, "ngIf"],
                  [
                    "nz-typography",
                    "",
                    "nzType",
                    "secondary",
                    1,
                    "tasks-empty-placeholder",
                    "d-flex",
                    "align-items-center",
                    "mb-0",
                    "ps-3",
                  ],
                  [3, "task", "onShowSubTasks"],
                  ["row", ""],
                  [4, "ngIf"],
                  [3, "task", 4, "ngFor", "ngForOf", "ngForTrackBy"],
                  [3, "task"],
                  [
                    1,
                    "d-flex",
                    "inner-subtask-create",
                    "cursor-pointer",
                    "sub-task-background-color",
                  ],
                  ["td", ""],
                  [1, "new-subtask-divider"],
                  [1, "w-100"],
                  [
                    3,
                    "templateId",
                    "label",
                    "parentTask",
                    "groupId",
                    "subTaskInput",
                    "focusChange",
                  ],
                  ["subTaskInput", ""],
                  [3, "templateId", "groupId", "focusChange"],
                  [
                    3,
                    "templateId",
                    "show",
                    "showChange",
                    "onCreateOrUpdate",
                    "refresh",
                  ],
                  [
                    "action",
                    "Create",
                    3,
                    "statusId",
                    "templateId",
                    "show",
                    "onCreateOrUpdate",
                    "showChange",
                  ],
                ],
                template: function (t, n) {
                  1 & t &&
                    (e.TgZ(0, "div", 0)(1, "div", 1)(2, "nz-space", 2),
                    e.YNc(3, Bi, 3, 0, "span", 3),
                    e.YNc(4, Hi, 2, 2, "span", 4),
                    e.qZA()(),
                    e.TgZ(5, "nz-content")(6, "div", 5),
                    e.YNc(7, $i, 1, 1, "worklenz-group-filter", 6),
                    e.qZA(),
                    e.TgZ(8, "nz-skeleton", 7),
                    e.YNc(9, ji, 4, 1, "div", 8),
                    e.TgZ(10, "div", 9),
                    e.YNc(11, ts, 16, 15, "div", 10),
                    e.qZA()()()(),
                    e.YNc(12, ns, 1, 2, "worklenz-phase-settings-drawer", 11),
                    e.YNc(13, is, 1, 3, "worklenz-status-settings-drawer", 12),
                    e._UZ(14, "worklenz-context-menu", 13)),
                    2 & t &&
                      (e.xp6(7),
                      e.Q6J("ngIf", n.templateId),
                      e.xp6(1),
                      e.Q6J("nzActive", !0)("nzLoading", n.loadingGroups),
                      e.xp6(1),
                      e.Q6J("ngIf", !n.groups.length),
                      e.xp6(2),
                      e.Q6J("rxForOf", n.groups)("rxForTrackBy", n.trackById),
                      e.xp6(1),
                      e.Q6J("ngIf", n.templateId),
                      e.xp6(1),
                      e.Q6J("ngIf", n.templateId),
                      e.xp6(1),
                      e.Q6J("templateId", n.templateId)("groups", n.groups));
                },
                dependencies: [
                  h.sg,
                  h.O5,
                  h.RF,
                  D.OK,
                  M.Ls,
                  O.ix,
                  v.w,
                  Q.ZU,
                  H.NU,
                  H.$1,
                  $.ng,
                  Ce.Wj,
                  Qe,
                  gn._,
                  yn,
                  Pn,
                  hi,
                  xi,
                  Mi,
                  Li,
                  Ei,
                  Yi,
                ],
                styles: [
                  '.task-status-color[_ngcontent-%COMP%]{border-width:1.4px;border-style:solid;border-radius:4px;width:1px}.task-name-color[_ngcontent-%COMP%]{height:20px;margin:auto;border-color:#a9a9a9;background-color:#a9a9a9;position:absolute;top:0;bottom:0;left:0;border-width:1.2px}.editable-cell[_ngcontent-%COMP%]{white-space:nowrap;max-width:255px;overflow:hidden;text-overflow:ellipsis}nz-date-picker[_ngcontent-%COMP%]{background:transparent}.expanded[_ngcontent-%COMP%]{transform:rotate(-90deg)}.dropdown-highlight[_ngcontent-%COMP%]{padding:1px}.highlight-col[_ngcontent-%COMP%]{border:1px solid #1890ff!important}.dropdown-highlight[_ngcontent-%COMP%]:hover{background-color:#d0eefa54;border:#5587f5 1px solid;border-radius:3px}.pointer-text[_ngcontent-%COMP%]{cursor:text}.plus-icon[_ngcontent-%COMP%]{display:none;position:absolute;right:0;z-index:9;background-color:#e2e7ea}tr[_ngcontent-%COMP%]:hover   .plus-icon[_ngcontent-%COMP%]{display:block}.selected[_ngcontent-%COMP%], .selected[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%], .selected[_ngcontent-%COMP%]   .task-drag-handler[_ngcontent-%COMP%]{background:rgba(24,144,255,.0784313725)!important}.sub-task-background-color[_ngcontent-%COMP%]{background-color:#f5f5f58a}.drop-down-btn[_ngcontent-%COMP%]   .anticon-caret-down[_ngcontent-%COMP%]{color:#000000a6}div[_ngcontent-%COMP%]{box-sizing:border-box}.flex-table[_ngcontent-%COMP%]{display:flex;width:max-content}.table-container[_ngcontent-%COMP%]{overflow:auto;display:flex}.tasks-table[_ngcontent-%COMP%]{width:max-content;margin-left:3px;border-right:1px solid #f0f0f0}.column-trigger[_ngcontent-%COMP%]{background-color:#f4f5f7;height:40px;width:40px;justify-content:center;display:flex;align-items:center}.header[_ngcontent-%COMP%]{margin-bottom:0;position:sticky;top:0;background-color:#fff;z-index:2}.header[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]{padding:4px 11px;background-color:#fafafa;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;border-right:1px solid #f0f0f0;display:flex;align-items:center;flex-direction:row}.br-right[_ngcontent-%COMP%]{border-right:1px solid #f0f0f0}.task-check[_ngcontent-%COMP%]{text-align:center;padding:8px 6px 8px 0!important;position:sticky;left:24px;z-index:1}.task-key[_ngcontent-%COMP%]{width:85px}.task-arrow[_ngcontent-%COMP%]{width:24px;padding:0!important;display:flex;align-items:center;border:none!important;position:sticky;left:47px;z-index:1}.task-name[_ngcontent-%COMP%]{width:450px;min-width:450px;position:sticky;left:71px;z-index:1;background-color:#fff}.task-name[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]{margin-left:auto}.task-description[_ngcontent-%COMP%]{width:225px}.task-progress[_ngcontent-%COMP%]{width:80px}.task-members[_ngcontent-%COMP%]{width:160px}.task-labels[_ngcontent-%COMP%]{width:210px}.task-status[_ngcontent-%COMP%], .task-priority[_ngcontent-%COMP%], .task-time-tracking[_ngcontent-%COMP%], .task-estimation[_ngcontent-%COMP%]{width:120px}.task-start-date[_ngcontent-%COMP%], .task-due-date[_ngcontent-%COMP%], .task-completed-date[_ngcontent-%COMP%], .task-created-date[_ngcontent-%COMP%], .task-update-date[_ngcontent-%COMP%]{width:150px}.task-drag-handler[_ngcontent-%COMP%]{padding:0 0 0 4px!important;width:24px;border-bottom:1px solid #f0f0f0;border-right:none!important;position:sticky;left:0}.inner-subtask-create[_ngcontent-%COMP%]{height:42px;display:flex;align-items:center;max-width:1316px;overflow:hidden;background-color:#fafafa;position:sticky;left:0;border-bottom:1px solid #eaeaea;border-top:1px solid #eaeaea}@media (max-width: 1400px){.inner-subtask-create[_ngcontent-%COMP%]{max-width:1136px}}@media (max-width: 1200px){.inner-subtask-create[_ngcontent-%COMP%]{max-width:956px}}.inner-subtask-create.highlight-col[_ngcontent-%COMP%]{background-color:#fff}.new-subtask-divider[_ngcontent-%COMP%]{width:50px}.new-subtask-divider.divider-large[_ngcontent-%COMP%]{width:135px}worklenz-quick-task[_ngcontent-%COMP%]{display:block}.overflow-x-auto[_ngcontent-%COMP%]{overflow-x:auto;overflow-y:hidden}.panel[_ngcontent-%COMP%]{padding:0;background-color:#fff;max-height:calc(100% + 8px);overflow:hidden;transition:max-height .1s ease-out;border-right:1px solid #f0f0f0}.panel-left-border[_ngcontent-%COMP%]{position:absolute;content:"";top:0;bottom:0;width:3px;z-index:3;border-bottom-left-radius:4px}.collapse.btn[_ngcontent-%COMP%]   .collapse-icon[_ngcontent-%COMP%]{transition:transform .1s;transform:rotate(0)}.collapse.btn.active[_ngcontent-%COMP%]   .collapse-icon[_ngcontent-%COMP%]{transition:transform .1s;transform:rotate(90deg)}.drop-down-btn[_ngcontent-%COMP%]{padding:4px 11px}.drop-down-btn[_ngcontent-%COMP%]   .anticon-caret-down[_ngcontent-%COMP%]{color:#d9d9d9}.status-color[_ngcontent-%COMP%]{width:11px;height:11px;border-radius:2px;margin-right:7px}.drop-down-btn[_ngcontent-%COMP%]   nz-badge[_ngcontent-%COMP%]{margin-top:-2px}.drop-down-btn.active[_ngcontent-%COMP%]{color:#1890ff;border-color:#1890ff;background-color:#e6f7ff}.drop-down-btn.active[_ngcontent-%COMP%]   .drop-down-btn[_ngcontent-%COMP%]   .anticon-caret-down[_ngcontent-%COMP%]{color:#1890ff}.ant-badge-count-sm[_ngcontent-%COMP%]{font-size:11px}.tab-name-edit[_ngcontent-%COMP%]{overflow:hidden}.tab-name-edit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:0;font-size:14px}.tab-name-edit[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:0}.new-task-input[_ngcontent-%COMP%]{padding-left:4px;padding-top:4px;padding-bottom:4px;border-bottom:1px solid #f0f0f0;border-top:1px solid #f0f0f0;max-width:1316px;overflow-x:auto}@media (max-width: 1400px){.new-task-input[_ngcontent-%COMP%]{max-width:1136px}}@media (max-width: 1200px){.new-task-input[_ngcontent-%COMP%]{max-width:956px}}.tasks-empty-placeholder[_ngcontent-%COMP%]{width:100%;height:42px;background:#fafafa}.no-data-img-holder[_ngcontent-%COMP%]{width:100px;margin-top:42px}.add-field-button[_ngcontent-%COMP%]{position:absolute;top:46px;right:0}.name-input[_ngcontent-%COMP%]{max-width:1270px;width:1270px;display:block}@media (max-width: 1400px){.name-input[_ngcontent-%COMP%]{max-width:1090px;width:1090px}}@media (max-width: 1200px){.name-input[_ngcontent-%COMP%]{max-width:910px;width:910px}}',
                ],
                changeDetection: 0,
              })),
              a
            );
          })(),
        },
      ];
      let as = (() => {
        var i;
        class a {}
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)();
          }),
          (i.ɵmod = e.oAB({ type: i })),
          (i.ɵinj = e.cJS({ imports: [N.Bz.forChild(os), N.Bz] })),
          a
        );
      })();
      var rs = c(3626),
        ls = c(79382),
        cs = c(82669),
        ps = c(62831),
        ds = c(48128),
        us = c(64345),
        _s = c(49388);
      let uo = (() => {
        var i;
        class a {}
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)();
          }),
          (i.ɵmod = e.oAB({ type: i })),
          (i.ɵinj = e.cJS({
            imports: [_s.vT, h.ez, p.u5, ps.ud, J.cg, ds.W, us.YI, M.PV, O.sL],
          })),
          a
        );
      })();
      var _o = c(48522),
        mo = c(29666),
        ho = c(52682);
      let go = (() => {
        var i;
        class a {}
        return (
          ((i = a).ɵfac = function (t) {
            return new (t || i)();
          }),
          (i.ɵmod = e.oAB({ type: i })),
          (i.ɵinj = e.cJS({
            providers: [Oe.g],
            imports: [
              h.ez,
              as,
              D.wm,
              V.vh,
              Y.KJ,
              rs.lt,
              M.PV,
              ls.we,
              p.UX,
              x.U5,
              P.o7,
              O.sL,
              cs.j,
              z.HQ,
              fe.Qp,
              Q.ZJ,
              T.ip,
              H.zf,
              J.cg,
              $.H0,
              K.LV,
              p.u5,
              uo,
              Me.l,
              ie.mS,
              E.b1,
              ze.X,
              Je.x,
              Te._p,
              Ge.S,
              De.Rt,
              _o.a,
              mo.V,
              we.Wr,
              Qe,
              ho.Hb,
              He.YS,
              $e.o,
              Be.PG,
              je.Zf,
              ke.BL,
              Fe.S,
            ],
          })),
          a
        );
      })();
    },
    80697: (ye, se, c) => {
      c.d(se, { I: () => U });
      var h = c(26857),
        N = c(10708),
        e = c(65879),
        w = c(69862);
      let U = (() => {
        var D;
        class Y extends h.P {
          constructor(T) {
            super(),
              (this.http = T),
              (this.root = `${this.API_BASE_URL}/project-templates`);
          }
          createCustomTemplate(T) {
            return this._post(this.http, `${this.root}/custom-template`, T);
          }
          createFromTemplate(T) {
            return this._post(this.http, `${this.root}/import-template`, T);
          }
          createFromCustomTemplate(T) {
            return this._post(
              this.http,
              `${this.root}/import-custom-template`,
              T
            );
          }
          createTemplates() {
            return this._get(this.http, `${this.root}/create`);
          }
          getWorklenzTemplates() {
            return this._get(this.http, `${this.root}/worklenz-templates`);
          }
          getWorklenzTemplateById(T) {
            return this._get(this.http, `${this.root}/worklenz-templates/${T}`);
          }
          getWorklenzCustomTemplates() {
            return this._get(this.http, `${this.root}/custom-templates`);
          }
          delete(T) {
            return (0, N.n)(this.http.delete(`${this.root}/${T}`));
          }
          setupAccount(T) {
            return this._post(this.http, `${this.root}/setup`, T);
          }
        }
        return (
          ((D = Y).ɵfac = function (T) {
            return new (T || D)(e.LFG(w.eN));
          }),
          (D.ɵprov = e.Yz7({ token: D, factory: D.ɵfac, providedIn: "root" })),
          Y
        );
      })();
    },
    26254: (ye, se, c) => {
      c.d(se, {
        $: () => L,
        $O: () => ge,
        Jp: () => O,
        KJ: () => Pe,
        u9: () => M,
        yG: () => Z,
      });
      var h = c(49388),
        N = c(96814),
        e = c(65879),
        w = c(8324),
        U = c(62595),
        D = c(97582),
        Y = c(78645),
        v = c(59773),
        T = c(37398),
        re = c(40874),
        X = c(1608),
        ee = c(28802);
      function ve(u, g) {
        if ((1 & u && (e.ynx(0), e._UZ(1, "span", 9), e.BQk()), 2 & u)) {
          const C = g.$implicit,
            f = e.oxw(2);
          e.xp6(1), e.Q6J("nzType", C || f.getBackIcon());
        }
      }
      function m(u, g) {
        if (1 & u) {
          const C = e.EpF();
          e.TgZ(0, "div", 6),
            e.NdJ("click", function () {
              e.CHM(C);
              const F = e.oxw();
              return e.KtG(F.onBack());
            }),
            e.TgZ(1, "div", 7),
            e.YNc(2, ve, 2, 1, "ng-container", 8),
            e.qZA()();
        }
        if (2 & u) {
          const C = e.oxw();
          e.xp6(2), e.Q6J("nzStringTemplateOutlet", C.nzBackIcon);
        }
      }
      function p(u, g) {
        if ((1 & u && (e.ynx(0), e._uU(1), e.BQk()), 2 & u)) {
          const C = e.oxw(2);
          e.xp6(1), e.Oqu(C.nzTitle);
        }
      }
      function me(u, g) {
        if (
          (1 & u &&
            (e.TgZ(0, "span", 10),
            e.YNc(1, p, 2, 1, "ng-container", 8),
            e.qZA()),
          2 & u)
        ) {
          const C = e.oxw();
          e.xp6(1), e.Q6J("nzStringTemplateOutlet", C.nzTitle);
        }
      }
      function b(u, g) {
        1 & u && e.Hsn(0, 6, ["*ngIf", "!nzTitle"]);
      }
      function A(u, g) {
        if ((1 & u && (e.ynx(0), e._uU(1), e.BQk()), 2 & u)) {
          const C = e.oxw(2);
          e.xp6(1), e.Oqu(C.nzSubtitle);
        }
      }
      function I(u, g) {
        if (
          (1 & u &&
            (e.TgZ(0, "span", 11),
            e.YNc(1, A, 2, 1, "ng-container", 8),
            e.qZA()),
          2 & u)
        ) {
          const C = e.oxw();
          e.xp6(1), e.Q6J("nzStringTemplateOutlet", C.nzSubtitle);
        }
      }
      function he(u, g) {
        1 & u && e.Hsn(0, 7, ["*ngIf", "!nzSubtitle"]);
      }
      const Se = [
          [["nz-breadcrumb", "nz-page-header-breadcrumb", ""]],
          [["nz-avatar", "nz-page-header-avatar", ""]],
          [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]],
          [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]],
          [["nz-page-header-content"], ["", "nz-page-header-content", ""]],
          [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]],
          [["nz-page-header-title"], ["", "nz-page-header-title", ""]],
          [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]],
        ],
        V = [
          "nz-breadcrumb[nz-page-header-breadcrumb]",
          "nz-avatar[nz-page-header-avatar]",
          "nz-page-header-tags, [nz-page-header-tags]",
          "nz-page-header-extra, [nz-page-header-extra]",
          "nz-page-header-content, [nz-page-header-content]",
          "nz-page-header-footer, [nz-page-header-footer]",
          "nz-page-header-title, [nz-page-header-title]",
          "nz-page-header-subtitle, [nz-page-header-subtitle]",
        ];
      let M = (() => {
          var u;
          class g {}
          return (
            ((u = g).ɵfac = function (f) {
              return new (f || u)();
            }),
            (u.ɵdir = e.lG2({
              type: u,
              selectors: [
                ["nz-page-header-title"],
                ["", "nz-page-header-title", ""],
              ],
              hostAttrs: [1, "ant-page-header-heading-title"],
              exportAs: ["nzPageHeaderTitle"],
            })),
            g
          );
        })(),
        Z = (() => {
          var u;
          class g {}
          return (
            ((u = g).ɵfac = function (f) {
              return new (f || u)();
            }),
            (u.ɵdir = e.lG2({
              type: u,
              selectors: [
                ["nz-page-header-subtitle"],
                ["", "nz-page-header-subtitle", ""],
              ],
              hostAttrs: [1, "ant-page-header-heading-sub-title"],
              exportAs: ["nzPageHeaderSubtitle"],
            })),
            g
          );
        })(),
        O = (() => {
          var u;
          class g {}
          return (
            ((u = g).ɵfac = function (f) {
              return new (f || u)();
            }),
            (u.ɵdir = e.lG2({
              type: u,
              selectors: [
                ["nz-page-header-extra"],
                ["", "nz-page-header-extra", ""],
              ],
              hostAttrs: [1, "ant-page-header-heading-extra"],
              exportAs: ["nzPageHeaderExtra"],
            })),
            g
          );
        })(),
        L = (() => {
          var u;
          class g {}
          return (
            ((u = g).ɵfac = function (f) {
              return new (f || u)();
            }),
            (u.ɵdir = e.lG2({
              type: u,
              selectors: [
                ["nz-page-header-footer"],
                ["", "nz-page-header-footer", ""],
              ],
              hostAttrs: [1, "ant-page-header-footer"],
              exportAs: ["nzPageHeaderFooter"],
            })),
            g
          );
        })(),
        Q = (() => {
          var u;
          class g {}
          return (
            ((u = g).ɵfac = function (f) {
              return new (f || u)();
            }),
            (u.ɵdir = e.lG2({
              type: u,
              selectors: [["nz-breadcrumb", "nz-page-header-breadcrumb", ""]],
              exportAs: ["nzPageHeaderBreadcrumb"],
            })),
            g
          );
        })(),
        ge = (() => {
          var u;
          class g {
            constructor(f, F, pe, te, z, fe) {
              (this.location = f),
                (this.nzConfigService = F),
                (this.elementRef = pe),
                (this.nzResizeObserver = te),
                (this.cdr = z),
                (this.directionality = fe),
                (this._nzModuleName = "pageHeader"),
                (this.nzBackIcon = null),
                (this.nzGhost = !0),
                (this.nzBack = new e.vpe()),
                (this.compact = !1),
                (this.destroy$ = new Y.x()),
                (this.dir = "ltr");
            }
            ngOnInit() {
              this.directionality.change
                ?.pipe((0, v.R)(this.destroy$))
                .subscribe((f) => {
                  (this.dir = f), this.cdr.detectChanges();
                }),
                (this.dir = this.directionality.value);
            }
            ngAfterViewInit() {
              this.nzResizeObserver
                .observe(this.elementRef)
                .pipe(
                  (0, T.U)(([f]) => f.contentRect.width),
                  (0, v.R)(this.destroy$)
                )
                .subscribe((f) => {
                  (this.compact = f < 768), this.cdr.markForCheck();
                });
            }
            onBack() {
              if (this.nzBack.observers.length) this.nzBack.emit();
              else {
                if (!this.location)
                  throw new Error(
                    `${X.Bq} you should import 'RouterModule' or register 'Location' if you want to use 'nzBack' default event!`
                  );
                this.location.back();
              }
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete();
            }
            getBackIcon() {
              return "rtl" === this.dir ? "arrow-right" : "arrow-left";
            }
          }
          return (
            ((u = g).ɵfac = function (f) {
              return new (f || u)(
                e.Y36(N.Ye, 8),
                e.Y36(re.jY),
                e.Y36(e.SBq),
                e.Y36(ee.D3),
                e.Y36(e.sBO),
                e.Y36(h.Is, 8)
              );
            }),
            (u.ɵcmp = e.Xpm({
              type: u,
              selectors: [["nz-page-header"]],
              contentQueries: function (f, F, pe) {
                if ((1 & f && (e.Suo(pe, L, 5), e.Suo(pe, Q, 5)), 2 & f)) {
                  let te;
                  e.iGM((te = e.CRH())) && (F.nzPageHeaderFooter = te.first),
                    e.iGM((te = e.CRH())) &&
                      (F.nzPageHeaderBreadcrumb = te.first);
                }
              },
              hostAttrs: [1, "ant-page-header"],
              hostVars: 10,
              hostBindings: function (f, F) {
                2 & f &&
                  e.ekj("has-footer", F.nzPageHeaderFooter)(
                    "ant-page-header-ghost",
                    F.nzGhost
                  )("has-breadcrumb", F.nzPageHeaderBreadcrumb)(
                    "ant-page-header-compact",
                    F.compact
                  )("ant-page-header-rtl", "rtl" === F.dir);
              },
              inputs: {
                nzBackIcon: "nzBackIcon",
                nzTitle: "nzTitle",
                nzSubtitle: "nzSubtitle",
                nzGhost: "nzGhost",
              },
              outputs: { nzBack: "nzBack" },
              exportAs: ["nzPageHeader"],
              ngContentSelectors: V,
              decls: 13,
              vars: 5,
              consts: [
                [1, "ant-page-header-heading"],
                [1, "ant-page-header-heading-left"],
                ["class", "ant-page-header-back", 3, "click", 4, "ngIf"],
                ["class", "ant-page-header-heading-title", 4, "ngIf"],
                [4, "ngIf"],
                ["class", "ant-page-header-heading-sub-title", 4, "ngIf"],
                [1, "ant-page-header-back", 3, "click"],
                [
                  "role",
                  "button",
                  "tabindex",
                  "0",
                  1,
                  "ant-page-header-back-button",
                ],
                [4, "nzStringTemplateOutlet"],
                ["nz-icon", "", "nzTheme", "outline", 3, "nzType"],
                [1, "ant-page-header-heading-title"],
                [1, "ant-page-header-heading-sub-title"],
              ],
              template: function (f, F) {
                1 & f &&
                  (e.F$t(Se),
                  e.Hsn(0),
                  e.TgZ(1, "div", 0)(2, "div", 1),
                  e.YNc(3, m, 3, 1, "div", 2),
                  e.Hsn(4, 1),
                  e.YNc(5, me, 2, 1, "span", 3),
                  e.YNc(6, b, 1, 0, "ng-content", 4),
                  e.YNc(7, I, 2, 1, "span", 5),
                  e.YNc(8, he, 1, 0, "ng-content", 4),
                  e.Hsn(9, 2),
                  e.qZA(),
                  e.Hsn(10, 3),
                  e.qZA(),
                  e.Hsn(11, 4),
                  e.Hsn(12, 5)),
                  2 & f &&
                    (e.xp6(3),
                    e.Q6J("ngIf", null !== F.nzBackIcon),
                    e.xp6(2),
                    e.Q6J("ngIf", F.nzTitle),
                    e.xp6(1),
                    e.Q6J("ngIf", !F.nzTitle),
                    e.xp6(1),
                    e.Q6J("ngIf", F.nzSubtitle),
                    e.xp6(1),
                    e.Q6J("ngIf", !F.nzSubtitle));
              },
              dependencies: [N.O5, w.f, U.Ls],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, D.gn)([(0, re.oS)()], g.prototype, "nzGhost", void 0),
            g
          );
        })(),
        Pe = (() => {
          var u;
          class g {}
          return (
            ((u = g).ɵfac = function (f) {
              return new (f || u)();
            }),
            (u.ɵmod = e.oAB({ type: u })),
            (u.ɵinj = e.cJS({ imports: [h.vT, N.ez, w.T, U.PV] })),
            g
          );
        })();
    },
  },
]);
