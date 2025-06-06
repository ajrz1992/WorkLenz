"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [526],
  {
    95542: (gt, rt, o) => {
      o.d(rt, { I: () => l });
      var t = o(78645),
        n = o(65879);
      let l = (() => {
        var u;
        class P {
          constructor() {
            (this._teamCreateSbj$ = new t.x()),
              (this._teamNameChangeSbj$ = new t.x());
          }
          get onCreateTeam() {
            return this._teamCreateSbj$.asObservable();
          }
          get onTeamNameChange() {
            return this._teamNameChangeSbj$.asObservable();
          }
          emitCreateTeam() {
            this._teamCreateSbj$.next();
          }
          emitTeamNameChange(w) {
            this._teamNameChangeSbj$.next(w);
          }
        }
        return (
          ((u = P).ɵfac = function (w) {
            return new (w || u)();
          }),
          (u.ɵprov = n.Yz7({ token: u, factory: u.ɵfac, providedIn: "root" })),
          P
        );
      })();
    },
    9526: (gt, rt, o) => {
      o.r(rt), o.d(rt, { AdministratorModule: () => Ve });
      var t = o(96814),
        n = o(60095),
        l = o(35420),
        u = o(15861),
        P = (function (c) {
          return (
            (c[(c.Category = 0)] = "Category"),
            (c[(c.MenuItem = 1)] = "MenuItem"),
            c
          );
        })(P || {}),
        r = o(94489),
        w = o(69649),
        Q = o(86408),
        F = o(71993),
        Z = o(63019),
        e = o(65879),
        X = o(32333),
        ot = o(83916),
        lt = o(975),
        q = o(43460),
        mt = o(72042),
        ut = o(81221),
        H = o(94409),
        k = o(16849),
        $ = o(85080),
        Y = o(64532),
        N = o(95542),
        tt = o(82669),
        L = o(33410),
        st = o(3626),
        nt = o(28538),
        J = o(93903),
        et = o(42840),
        W = o(70855),
        R = o(41958);
      function v(c, U) {
        if ((1 & c && (e.ynx(0), e._UZ(1, "nz-alert", 5), e.BQk()), 2 & c)) {
          e.oxw(2);
          const z = e.MAs(2),
            a = e.MAs(4);
          e.xp6(1), e.Q6J("nzAction", z)("nzMessage", a)("nzType", "error");
        }
      }
      function T(c, U) {
        if ((1 & c && e._UZ(0, "nz-alert", 7), 2 & c)) {
          const z = U.$implicit;
          e.Q6J("nzType", z.type)("nzMessage", z.description);
        }
      }
      function S(c, U) {
        if (
          (1 & c && (e.ynx(0), e.YNc(1, T, 1, 2, "nz-alert", 6), e.BQk()),
          2 & c)
        ) {
          const z = e.oxw(2);
          e.xp6(1), e.Q6J("ngForOf", z.alerts)("ngForTrackBy", z.trackByIndex);
        }
      }
      function x(c, U) {
        if (
          (1 & c &&
            (e.TgZ(0, "nz-affix", 3),
            e.YNc(1, v, 2, 3, "ng-container", 4),
            e.YNc(2, S, 2, 2, "ng-container", 4),
            e.qZA()),
          2 & c)
        ) {
          const z = e.oxw();
          e.Q6J("nzOffsetTop", 0),
            e.xp6(1),
            e.Q6J("ngIf", z.updateAvailable),
            e.xp6(1),
            e.Q6J("ngIf", z.alerts.length);
        }
      }
      function h(c, U) {
        if (1 & c) {
          const z = e.EpF();
          e.TgZ(0, "button", 8),
            e.NdJ("click", function () {
              e.CHM(z);
              const _ = e.oxw();
              return e.KtG(_.reload());
            }),
            e._uU(1, "Reload"),
            e.qZA();
        }
        2 & c && e.Q6J("nzSize", "small")("nzType", "primary");
      }
      function G(c, U) {
        if (1 & c) {
          const z = e.EpF();
          e._uU(0, " Action required! New version of Worklenz available! "),
            e.TgZ(1, "a", 9),
            e.NdJ("click", function () {
              e.CHM(z);
              const _ = e.oxw();
              return e.KtG(_.reload());
            }),
            e._uU(2, "Reload"),
            e.qZA(),
            e._uU(3, " to apply changes.\n");
        }
      }
      let j = (() => {
        var c;
        class U {
          constructor() {
            (this.updateAvailable = !1), (this.alerts = []);
          }
          reload() {
            window.location.reload();
          }
          trackByIndex(a, _) {
            return _.id;
          }
        }
        return (
          ((c = U).ɵfac = function (a) {
            return new (a || c)();
          }),
          (c.ɵcmp = e.Xpm({
            type: c,
            selectors: [["worklenz-alerts"]],
            inputs: { updateAvailable: "updateAvailable", alerts: "alerts" },
            decls: 5,
            vars: 1,
            consts: [
              [3, "nzOffsetTop", 4, "ngIf"],
              ["actionTemplate1", ""],
              ["messageTemplate", ""],
              [3, "nzOffsetTop"],
              [4, "ngIf"],
              [
                "nzShowIcon",
                "",
                2,
                "font-weight",
                "500",
                3,
                "nzAction",
                "nzMessage",
                "nzType",
              ],
              [
                "style",
                "font-weight: 500;",
                "nzShowIcon",
                "",
                3,
                "nzType",
                "nzMessage",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              [
                "nzShowIcon",
                "",
                2,
                "font-weight",
                "500",
                3,
                "nzType",
                "nzMessage",
              ],
              ["nz-button", "", 3, "nzSize", "nzType", "click"],
              [3, "click"],
            ],
            template: function (a, _) {
              1 & a &&
                (e.YNc(0, x, 3, 3, "nz-affix", 0),
                e.YNc(1, h, 2, 2, "ng-template", null, 1, e.W1O),
                e.YNc(3, G, 4, 0, "ng-template", null, 2, e.W1O)),
                2 & a && e.Q6J("ngIf", _.updateAvailable || _.alerts.length);
            },
            dependencies: [t.sg, t.O5, nt.$, J.r, et.ix, W.w, R.dQ],
            changeDetection: 0,
          })),
          U
        );
      })();
      var D = o(27782),
        V = o(45538),
        pt = o(8689),
        K = o(73460),
        it = o(8083),
        M = o(96109),
        m = o(62787),
        O = o(62595),
        y = o(33640),
        I = o(96928),
        g = o(72095);
      const A = function () {
          return { exact: !1 };
        },
        at = function () {
          return ["ant-menu-item-selected"];
        },
        _t = function (c) {
          return [c];
        };
      function vt(c, U) {
        if (
          (1 & c && (e.TgZ(0, "li", 35)(1, "strong"), e._uU(2), e.qZA()()),
          2 & c)
        ) {
          const z = U.$implicit,
            a = e.oxw(2);
          e.Q6J("routerLinkActiveOptions", e.DdM(5, A))(
            "nzDisabled",
            a.profile.is_expired
          )("routerLinkActive", e.DdM(6, at))(
            "routerLink",
            a.profile.is_expired ? null : e.VKq(7, _t, z.url)
          ),
            e.xp6(2),
            e.Oqu(z.label);
        }
      }
      function yt(c, U) {
        if (
          (1 & c && (e.TgZ(0, "li", 36)(1, "strong"), e._uU(2), e.qZA()()),
          2 & c)
        ) {
          const z = U.$implicit,
            a = U.index,
            _ = e.oxw(2);
          e.Q6J("routerLinkActiveOptions", e.DdM(6, A))(
            "nzDisabled",
            _.profile.is_expired
          )("routerLinkActive", e.DdM(7, at))(
            "routerLink",
            _.profile.is_expired ? null : e.VKq(8, _t, z.url)
          )("ngClass", a > 1 ? "d-none" : ""),
            e.xp6(2),
            e.Oqu(z.label);
        }
      }
      const Bt = function () {
        return ["item-selected"];
      };
      function Ut(c, U) {
        if ((1 & c && (e.TgZ(0, "li", 37), e._uU(1), e.qZA()), 2 & c)) {
          const z = U.$implicit,
            a = U.index,
            _ = e.oxw(2);
          e.Q6J("routerLinkActiveOptions", e.DdM(6, A))(
            "nzDisabled",
            _.profile.is_expired
          )("routerLinkActive", e.DdM(7, Bt))(
            "routerLink",
            _.profile.is_expired ? null : e.VKq(8, _t, z.url)
          )("ngClass", 1 === a || 0 === a ? "d-none" : ""),
            e.xp6(1),
            e.hij(" ", z.label, " ");
        }
      }
      function Ft(c, U) {
        1 & c &&
          (e.ynx(0),
          e.TgZ(1, "span", 39)(2, "a", 40),
          e._uU(3, " Upgrade Plan "),
          e.qZA()(),
          e.BQk());
      }
      function Zt(c, U) {
        if (
          (1 & c &&
            (e.TgZ(0, "div", 21),
            e.YNc(1, Ft, 4, 0, "ng-container", 38),
            e.qZA()),
          2 & c)
        ) {
          const z = e.oxw(2);
          e.xp6(1), e.Q6J("ngIf", !z.profile.is_ltd_user);
        }
      }
      function kt(c, U) {
        if (1 & c) {
          const z = e.EpF();
          e.TgZ(0, "li", 41)(1, "div", 42)(2, "button", 43),
            e.NdJ("click", function () {
              e.CHM(z);
              const _ = e.oxw(2);
              return e.KtG(_.openAddMemberForm());
            }),
            e._UZ(3, "span", 44),
            e._uU(4, "Invite "),
            e.qZA()(),
            e.TgZ(5, "div", 45)(6, "button", 46),
            e.NdJ("click", function () {
              e.CHM(z);
              const _ = e.oxw(2);
              return e.KtG(_.openAddMemberForm());
            }),
            e._UZ(7, "span", 44),
            e.qZA()()();
        }
        if (2 & c) {
          const z = e.oxw(2);
          e.xp6(2),
            e.Q6J("nzTooltipPlacement", "bottom")(
              "nzTooltipTitle",
              "Add Team Member"
            )("disabled", z.profile.is_expired),
            e.xp6(4),
            e.Akn("width: 32px;"),
            e.Q6J("nzTooltipPlacement", "bottom")(
              "nzTooltipTitle",
              "Add Team Member"
            )("disabled", z.profile.is_expired),
            e.xp6(1),
            e.Akn("font-size: 18px;");
        }
      }
      function Yt(c, U) {
        if (
          (1 & c &&
            (e.TgZ(0, "li", 47)(1, "span", 48)(2, "strong"),
            e._UZ(3, "span", 49),
            e._uU(4),
            e._UZ(5, "span", 50),
            e.qZA()()()),
          2 & c)
        ) {
          const z = e.oxw(2),
            a = e.MAs(6);
          e.xp6(1),
            e.Q6J("nzDropdownMenu", a)("nzPlacement", "bottomRight")(
              "nzTooltipPlacement",
              "bottom"
            )("nzTooltipTitle", "Switch Team")("nzTrigger", "click"),
            e.xp6(3),
            e.hij(" ", z.profile.team_name, " ");
        }
      }
      function jt(c, U) {
        if (
          (1 & c && (e.TgZ(0, "nz-badge", 51), e._UZ(1, "span", 52), e.qZA()),
          2 & c)
        ) {
          const z = e.oxw(2);
          e.Q6J("nzCount", z.count)("nzDot", !1);
        }
      }
      function Xt(c, U) {
        if (
          (1 & c && (e.TgZ(0, "nz-badge", 53), e._UZ(1, "span", 52), e.qZA()),
          2 & c)
        ) {
          const z = e.oxw(2);
          e.Q6J("nzDot", z.hasNotifications());
        }
      }
      function qt(c, U) {
        1 & c && e._UZ(0, "span", 54);
      }
      function te(c, U) {
        if ((1 & c && e._UZ(0, "nz-avatar", 55), 2 & c)) {
          const z = e.oxw(2);
          e.Q6J("nzSrc", z.profile.avatar_url);
        }
      }
      const ee = function () {
        return ["/worklenz/admin-center"];
      };
      function ne(c, U) {
        1 & c && (e.TgZ(0, "li", 70), e._uU(1, "Administración"), e.qZA()),
          2 & c && e.Q6J("routerLink", e.DdM(1, ee));
      }
      const ie = function () {
        return ["/worklenz/settings"];
      };
      function oe(c, U) {
        if (1 & c) {
          const z = e.EpF();
          e.TgZ(0, "div", 56)(1, "div", 57)(2, "h2", 58),
            e._uU(3, "Account"),
            e.qZA()(),
            e.TgZ(4, "div", 59)(5, "div", 60)(6, "div", 61),
            e._UZ(7, "nz-avatar", 62),
            e.qZA(),
            e.TgZ(8, "div", 63)(9, "h4", 58),
            e._uU(10),
            e.qZA(),
            e.TgZ(11, "p", 64),
            e._uU(12),
            e.qZA(),
            e.TgZ(13, "p", 65),
            e._uU(14),
            e.qZA()()()(),
            e.TgZ(15, "div", 66)(16, "ul", 18),
            e.YNc(17, ne, 2, 2, "li", 67),
            e.TgZ(18, "li", 68),
            e._uU(19, "Settings "),
            e.qZA(),
            e.TgZ(20, "li", 69),
            e.NdJ("click", function () {
              e.CHM(z);
              const _ = e.oxw(2);
              return e.KtG(_.signOut());
            }),
            e._uU(21, "Log Out"),
            e.qZA()()()();
        }
        if (2 & c) {
          const z = e.oxw(2);
          e.xp6(7),
            e.Udp(
              "background-color",
              z.profile.avatar_url ? "#ececec" : z.avatarColor
            ),
            e.Q6J(
              "nzText",
              null == z.profile.name ? null : z.profile.name.charAt(0)
            )("nzSrc", z.profile.avatar_url),
            e.xp6(3),
            e.Oqu(z.profile.name),
            e.xp6(2),
            e.Oqu(z.profile.email),
            e.xp6(2),
            e.hij("(", z.userRole, ")"),
            e.xp6(3),
            e.Q6J("ngIf", z.isOwnerOrAdmin()),
            e.xp6(1),
            e.Q6J("nzDisabled", z.profile.is_expired)(
              "routerLink",
              z.profile.is_expired ? null : e.DdM(10, ie)
            );
        }
      }
      function se(c, U) {
        if (1 & c) {
          const z = e.EpF();
          e.TgZ(0, "div", 9)(1, "ul", 10),
            e.YNc(2, vt, 3, 9, "li", 11),
            e.qZA(),
            e.TgZ(3, "div", 12)(4, "ul", 13),
            e.YNc(5, yt, 3, 10, "li", 14),
            e.qZA(),
            e.TgZ(6, "button", 15),
            e._UZ(7, "span", 16),
            e.qZA(),
            e.TgZ(8, "nz-dropdown-menu", null, 17)(10, "ul", 18),
            e.YNc(11, Ut, 2, 10, "li", 19),
            e.qZA()()(),
            e.TgZ(12, "div", 0),
            e.YNc(13, Zt, 2, 1, "div", 20),
            e.TgZ(14, "div", 21)(15, "ul", 22),
            e.YNc(16, kt, 8, 10, "li", 23),
            e.YNc(17, Yt, 6, 6, "li", 24),
            e.TgZ(18, "li", 25),
            e.NdJ("click", function () {
              e.CHM(z);
              const _ = e.oxw();
              return e.KtG(_.openNotificationsDrawer());
            }),
            e.ynx(19, 26),
            e.YNc(20, jt, 2, 2, "nz-badge", 27),
            e.YNc(21, Xt, 2, 1, "nz-badge", 28),
            e.BQk(),
            e.qZA(),
            e.TgZ(22, "li", 29),
            e._UZ(23, "span", 30),
            e.qZA(),
            e.TgZ(24, "li", 31),
            e.NdJ("click", function () {
              e.CHM(z);
              const _ = e.oxw();
              return e.KtG((_.showProfileDropdown = !_.showProfileDropdown));
            }),
            e.YNc(25, qt, 1, 0, "span", 32),
            e.YNc(26, te, 1, 1, "nz-avatar", 33),
            e.qZA(),
            e.YNc(27, oe, 22, 11, "div", 34),
            e.qZA()()()();
        }
        if (2 & c) {
          const z = e.MAs(9),
            a = e.oxw();
          e.xp6(1),
            e.Q6J("nzMode", "horizontal")("nzTheme", "light"),
            e.xp6(1),
            e.Q6J("ngForOf", a.navigation),
            e.xp6(2),
            e.Q6J("nzMode", "horizontal")("nzTheme", "light"),
            e.xp6(1),
            e.Q6J("ngForOf", a.navigation),
            e.xp6(1),
            e.Q6J("nzDropdownMenu", z),
            e.xp6(5),
            e.Q6J("ngForOf", a.navigation),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              a.isOwnerOrAdmin() &&
                ("trialing" === a.profile.subscription_status ||
                  a.profile.is_expired)
            ),
            e.xp6(2),
            e.Q6J("nzMode", "horizontal")("nzTheme", "light"),
            e.xp6(1),
            e.Q6J("ngIf", a.isOwnerOrAdmin()),
            e.xp6(1),
            e.Q6J("ngIf", a.profile && a.profile.team_name),
            e.xp6(1),
            e.Q6J("nzDisabled", a.profile.is_expired)(
              "nzTooltipPlacement",
              "bottom"
            )("nzTooltipTitle", "Notifications"),
            e.xp6(1),
            e.Q6J("ngSwitch", a.showUnreadNotificationsCount()),
            e.xp6(1),
            e.Q6J("ngSwitchCase", !0),
            e.xp6(1),
            e.Q6J("ngSwitchCase", !1),
            e.xp6(1),
            e.Q6J("nzTooltipPlacement", "bottom")("nzTooltipTitle", "Ayuda "),
            e.xp6(2),
            e.Q6J("nzTooltipPlacement", "bottom")("nzTooltipTitle", "Profile"),
            e.xp6(1),
            e.Q6J("ngIf", !a.profile.avatar_url),
            e.xp6(1),
            e.Q6J("ngIf", a.profile.avatar_url),
            e.xp6(1),
            e.Q6J("ngIf", a.showProfileDropdown);
        }
      }
      function ae(c, U) {
        if ((1 & c && e._UZ(0, "nz-avatar", 81), 2 & c)) {
          const z = e.oxw().$implicit,
            a = e.oxw();
          e.Udp("background-color", a.utils.getColor(z.name)),
            e.Q6J("nzText", null == z.name ? null : z.name.charAt(0));
        }
      }
      function re(c, U) {
        1 & c && e._UZ(0, "span", 82);
      }
      function le(c, U) {
        if ((1 & c && (e.TgZ(0, "span", 21), e._uU(1), e.qZA()), 2 & c)) {
          const z = e.oxw().$implicit;
          e.xp6(1), e.Oqu(z.name);
        }
      }
      function ce(c, U) {
        1 & c && (e.TgZ(0, "span", 21), e._uU(1, "Setup my account"), e.qZA());
      }
      function pe(c, U) {
        if ((1 & c && (e.TgZ(0, "span", 21), e._uU(1), e.qZA()), 2 & c)) {
          const z = e.oxw().$implicit;
          e.xp6(1), e.Oqu(z.name);
        }
      }
      function de(c, U) {
        if (1 & c) {
          const z = e.EpF();
          e.TgZ(0, "li", 71),
            e.NdJ("click", function () {
              const b = e.CHM(z).$implicit,
                ht = e.oxw();
              return e.KtG(ht.selectTeam(b.id));
            }),
            e.TgZ(1, "div", 72)(2, "div", 73)(3, "div", 74),
            e.YNc(4, ae, 1, 3, "nz-avatar", 75),
            e.YNc(5, re, 1, 0, "span", 76),
            e.qZA(),
            e.TgZ(6, "div", 77)(7, "small", 78),
            e._uU(8),
            e.qZA(),
            e.YNc(9, le, 2, 1, "span", 20),
            e.YNc(10, ce, 2, 0, "span", 20),
            e.YNc(11, pe, 2, 1, "span", 20),
            e.qZA()(),
            e.TgZ(12, "div", 79),
            e._UZ(13, "span", 80),
            e.qZA()()();
        }
        if (2 & c) {
          const z = U.$implicit,
            a = e.oxw();
          e.xp6(4),
            e.Q6J(
              "ngIf",
              a.getTeamStatus(z) === a.TEAM_STATUSES.OwnerAndNameChanged ||
                a.getTeamStatus(z) === a.TEAM_STATUSES.NotTheOwner
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              a.getTeamStatus(z) === a.TEAM_STATUSES.OwnerAndNameNotChanged
            ),
            e.xp6(3),
            e.hij(
              " ",
              a.getTeamStatus(z) !== a.TEAM_STATUSES.OwnerAndNameNotChanged
                ? "Owned by " + z.owns_by
                : "Click to setup your own account",
              " "
            ),
            e.xp6(1),
            e.Q6J("ngIf", a.getTeamStatus(z) === a.TEAM_STATUSES.NotTheOwner),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              a.getTeamStatus(z) === a.TEAM_STATUSES.OwnerAndNameNotChanged
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              a.getTeamStatus(z) === a.TEAM_STATUSES.OwnerAndNameChanged
            ),
            e.xp6(1),
            e.Q6J("nzType", a.isActiveTeam(z.id) ? "success" : "secondary");
        }
      }
      var St = (function (c) {
        return (
          (c[(c.OwnerAndNameChanged = 0)] = "OwnerAndNameChanged"),
          (c[(c.OwnerAndNameNotChanged = 1)] = "OwnerAndNameNotChanged"),
          (c[(c.NotTheOwner = 2)] = "NotTheOwner"),
          c
        );
      })(St || {});
      let ue = (() => {
        var c;
        class U {
          get avatarColor() {
            return this.utils.getColor(this.profile?.name);
          }
          get userRole() {
            return this.auth.role;
          }
          constructor(a, _, b, ht, zt, Lt, Kt, $t, ge, fe) {
            (this.settingsApi = a),
              (this.api = _),
              (this.notificationSettings = b),
              (this.auth = ht),
              (this.cdr = zt),
              (this.utils = Lt),
              (this.adminCenterService = Kt),
              (this.teamMembersApi = $t),
              (this.settingsService = ge),
              (this.router = fe),
              (this.teams = []),
              (this.profile = {}),
              (this.navigation = []),
              (this.count = 0),
              (this.showNotifications = !1),
              (this.showNotificationsChange = new e.vpe()),
              (this.TEAM_STATUSES = St),
              (this.showProfileDropdown = !1),
              (this.showTeamMemberModal = !1),
              (this.loading = !1),
              (this.switchingTeam = !1),
              (this.selectedMemberId = null),
              this.notificationSettings.onCountsUpdate$
                .pipe((0, F.sL)())
                .subscribe(() => {
                  this.cdr.markForCheck();
                }),
              this.adminCenterService.onTeamNameChange
                .pipe((0, F.sL)())
                .subscribe((At) => {
                  this.onHandleTeamNameChange(At);
                });
          }
          signOut() {
            this.auth.signOutWithConfirm();
          }
          showUnreadNotificationsCount() {
            return !!this.notificationSettings.settings.show_unread_items_count;
          }
          hasNotifications() {
            return this.notificationSettings.count > 0;
          }
          isActiveTeam(a) {
            return a === this.profile?.team_id;
          }
          openNotificationsDrawer() {
            this.profile.is_expired ||
              ((this.showNotifications = !0),
              this.showNotificationsChange.emit(!0),
              Q.s.track(D.Yh));
          }
          selectTeam(a) {
            var _ = this;
            return (0, u.Z)(function* () {
              if (a) {
                (_.loading = !0), (_.switchingTeam = !0);
                try {
                  (yield _.api.activate(a)).done
                    ? (Q.s.track(D.n), yield _.auth.authorize(), _.reload())
                    : (_.switchingTeam = !1),
                    (_.loading = !1);
                } catch (b) {
                  (_.loading = !1), (_.switchingTeam = !1), (0, w.tu)(b);
                }
                _.cdr.detectChanges();
              }
            })();
          }
          hideProfileDropdown(a) {
            a.target.classList.contains("prevent-default") ||
              ((this.showProfileDropdown = !1), this.cdr.detectChanges());
          }
          getTeamStatus(a) {
            return a.owner && !this.profile?.my_setup_completed
              ? St.OwnerAndNameNotChanged
              : a.owner && this.profile?.my_setup_completed
              ? St.OwnerAndNameChanged
              : St.NotTheOwner;
          }
          onHandleTeamNameChange(a) {
            this.profile?.team_id === a.teamId &&
              (this.profile.team_name = a.teamName),
              this.cdr.detectChanges();
          }
          reload() {
            window.location.reload();
          }
          reset() {
            this.selectedMemberId = null;
          }
          isOwnerOrAdmin() {
            return this.profile?.owner || this.profile?.is_admin;
          }
          handleOnCreateOrUpdate(a) {
            1 == a && Q.s.track(D.YC),
              this.settingsService.emitNewMemberCreated();
          }
          openAddMemberForm() {
            (this.showTeamMemberModal = !0), Q.s.track(D.oo);
          }
          navigateHome() {
            this.router.navigate(["/worklenz"]);
          }
        }
        return (
          ((c = U).ɵfac = function (a) {
            return new (a || c)(
              e.Y36(k.G),
              e.Y36(ot.S),
              e.Y36($.g),
              e.Y36(X.e),
              e.Y36(e.sBO),
              e.Y36(Y.F),
              e.Y36(N.I),
              e.Y36(V.B),
              e.Y36(pt.g),
              e.Y36(l.F0)
            );
          }),
          (c.ɵcmp = e.Xpm({
            type: c,
            selectors: [["worklenz-header"]],
            hostBindings: function (a, _) {
              1 & a &&
                e.NdJ(
                  "click",
                  function (ht) {
                    return _.hideProfileDropdown(ht);
                  },
                  !1,
                  e.evT
                );
            },
            inputs: {
              teams: "teams",
              profile: "profile",
              navigation: "navigation",
              count: "count",
              showNotifications: "showNotifications",
            },
            outputs: { showNotificationsChange: "showNotificationsChange" },
            decls: 10,
            vars: 6,
            consts: [
              [1, "d-flex", "align-items-center"],
              [1, "logo-holder"],
              [
                "alt",
                "Worklenz",
                1,
                "img-fluid",
                "cursor-pointer",
                "logo-large",
                3,
                "src",
                "click",
              ],
              [
                "alt",
                "Worklenz",
                1,
                "img-fluid",
                "cursor-pointer",
                "logo-small",
                3,
                "src",
                "click",
              ],
              ["class", "d-flex justify-content-between w-100", 4, "ngIf"],
              ["teamsMenu", "nzDropdownMenu"],
              [
                "nz-menu",
                "",
                "nzSelectable",
                "",
                1,
                "p-0",
                "members-dropdown",
                2,
                "border-radius",
                "14px",
              ],
              [
                "nz-menu-item",
                "",
                "class",
                "d-flex team-list-item py-1",
                3,
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              [
                3,
                "show",
                "memberId",
                "onCancel",
                "onCreateOrUpdate",
                "showChange",
              ],
              [1, "d-flex", "justify-content-between", "w-100"],
              ["nz-menu", "", 1, "top-nav-ul-main", 3, "nzMode", "nzTheme"],
              [
                "nz-menu-item",
                "",
                "nz-typography",
                "",
                3,
                "routerLinkActiveOptions",
                "nzDisabled",
                "routerLinkActive",
                "routerLink",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "align-items-center", "mob-nav-main"],
              ["nz-menu", "", 3, "nzMode", "nzTheme"],
              [
                "nz-menu-item",
                "",
                "nz-typography",
                "",
                3,
                "routerLinkActiveOptions",
                "nzDisabled",
                "routerLinkActive",
                "routerLink",
                "ngClass",
                4,
                "ngFor",
                "ngForOf",
              ],
              [
                "nz-button",
                "",
                "nz-dropdown",
                "",
                "nzPlacement",
                "bottomRight",
                3,
                "nzDropdownMenu",
              ],
              ["nz-icon", "", "nzType", "ellipsis"],
              ["menu1", "nzDropdownMenu"],
              ["nz-menu", ""],
              [
                "nz-menu-item",
                "",
                "nz-typography",
                "",
                "class",
                "mob-main-nav",
                3,
                "routerLinkActiveOptions",
                "nzDisabled",
                "routerLinkActive",
                "routerLink",
                "ngClass",
                4,
                "ngFor",
                "ngForOf",
              ],
              ["class", "d-block", 4, "ngIf"],
              [1, "d-block"],
              [
                "nz-menu",
                "",
                1,
                "top-nav-ul-secondary",
                2,
                "position",
                "relative",
                3,
                "nzMode",
                "nzTheme",
              ],
              [
                "class",
                "menu-border-0 px-0 ms-3",
                "nz-menu-item",
                "",
                4,
                "ngIf",
              ],
              [
                "class",
                "teams-switch menu-border-0 pe-0",
                "nz-menu-item",
                "",
                "nz-typography",
                "",
                4,
                "ngIf",
              ],
              [
                "nz-menu-item",
                "",
                "nz-tooltip",
                "",
                "nz-typography",
                "",
                1,
                "menu-hover",
                "menu-border-0",
                3,
                "nzDisabled",
                "nzTooltipPlacement",
                "nzTooltipTitle",
                "click",
              ],
              [3, "ngSwitch"],
              [3, "nzCount", "nzDot", 4, "ngSwitchCase"],
              [3, "nzDot", 4, "ngSwitchCase"],
              [
                "nz-menu-item",
                "",
                "nz-tooltip",
                "",
                "nz-typography",
                "",
                1,
                "menu-hover",
                "menu-border-0",
                3,
                "nzTooltipPlacement",
                "nzTooltipTitle",
              ],
              [
                "nz-icon",
                "",
                "nzTheme",
                "outline",
                "nzType",
                "question-circle",
                2,
                "font-size",
                "20px",
              ],
              [
                "nz-menu-item",
                "",
                "nz-tooltip",
                "",
                "nz-typography",
                "",
                1,
                "menu-hover",
                "menu-border-0",
                "prevent-default",
                3,
                "nzTooltipPlacement",
                "nzTooltipTitle",
                "click",
              ],
              [
                "nz-icon",
                "",
                "nzTheme",
                "outline",
                "nzType",
                "user",
                "style",
                "font-size: 20px;pointer-events: none;",
                4,
                "ngIf",
              ],
              [
                "nzIcon",
                "user",
                "style",
                "pointer-events: none",
                3,
                "nzSrc",
                4,
                "ngIf",
              ],
              [
                "class",
                "profile-details-dropdown prevent-default pt-def",
                4,
                "ngIf",
              ],
              [
                "nz-menu-item",
                "",
                "nz-typography",
                "",
                3,
                "routerLinkActiveOptions",
                "nzDisabled",
                "routerLinkActive",
                "routerLink",
              ],
              [
                "nz-menu-item",
                "",
                "nz-typography",
                "",
                3,
                "routerLinkActiveOptions",
                "nzDisabled",
                "routerLinkActive",
                "routerLink",
                "ngClass",
              ],
              [
                "nz-menu-item",
                "",
                "nz-typography",
                "",
                1,
                "mob-main-nav",
                3,
                "routerLinkActiveOptions",
                "nzDisabled",
                "routerLinkActive",
                "routerLink",
                "ngClass",
              ],
              [4, "ngIf"],
              ["nz-typography", "", 1, "upgrade-btn"],
              [
                "href",
                "worklenz/admin-center/billing",
                2,
                "color",
                "rgba(0,0,0,0.85)",
              ],
              ["nz-menu-item", "", 1, "menu-border-0", "px-0", "ms-3"],
              [1, "mb-none"],
              [
                "nz-button",
                "",
                "nzType",
                "dashed",
                "nz-tooltip",
                "",
                1,
                "invite-btn",
                3,
                "nzTooltipPlacement",
                "nzTooltipTitle",
                "disabled",
                "click",
              ],
              ["nz-icon", "", "nzType", "usergroup-add", "nzTheme", "outline"],
              [1, "lg-none"],
              [
                "nz-button",
                "",
                "nzType",
                "dashed",
                "nz-tooltip",
                "",
                "nzShape",
                "round",
                1,
                "invite-btn",
                "p-0",
                3,
                "nzTooltipPlacement",
                "nzTooltipTitle",
                "disabled",
                "click",
              ],
              [
                "nz-menu-item",
                "",
                "nz-typography",
                "",
                1,
                "teams-switch",
                "menu-border-0",
                "pe-0",
              ],
              [
                "nz-dropdown",
                "",
                "nz-tooltip",
                "",
                1,
                "rounded-pill",
                "team-name",
                "border-bottom",
                3,
                "nzDropdownMenu",
                "nzPlacement",
                "nzTooltipPlacement",
                "nzTooltipTitle",
                "nzTrigger",
              ],
              ["nz-icon", "", "nzTheme", "outline", "nzType", "bank"],
              ["nz-icon", "", "nzTheme", "outline", "nzType", "caret-down"],
              [3, "nzCount", "nzDot"],
              ["nz-icon", "", "nzType", "bell", "nzTheme", "outline"],
              [3, "nzDot"],
              [
                "nz-icon",
                "",
                "nzTheme",
                "outline",
                "nzType",
                "user",
                2,
                "font-size",
                "20px",
                "pointer-events",
                "none",
              ],
              ["nzIcon", "user", 2, "pointer-events", "none", 3, "nzSrc"],
              [1, "profile-details-dropdown", "prevent-default", "pt-def"],
              [1, "account-heading", "prevent-default", "pl-def", "pr-def"],
              [1, "prevent-default"],
              [1, "account-details", "pl-def", "prevent-default", "pr-def"],
              [1, "d-flex", "align-items-center", "prevent-default"],
              [1, "account-image", "prevent-default"],
              [2, "color", "#fff", 3, "nzText", "nzSrc"],
              [1, "account-name", "prevent-default"],
              ["nz-typography", "", "nzEllipsis", "", 1, "prevent-default"],
              [
                "nzType",
                "secondary",
                "nz-typography",
                "",
                "nzEllipsis",
                "",
                1,
                "prevent-default",
              ],
              [1, "actions", "prevent-default"],
              ["nz-menu-item", "", 3, "routerLink", 4, "ngIf"],
              ["nz-menu-item", "", 3, "nzDisabled", "routerLink"],
              ["nz-menu-item", "", 1, "pl-def", "pr-def", 3, "click"],
              ["nz-menu-item", "", 3, "routerLink"],
              [
                "nz-menu-item",
                "",
                1,
                "d-flex",
                "team-list-item",
                "py-1",
                3,
                "click",
              ],
              [
                1,
                "w-100",
                "align-items-center",
                "d-flex",
                "justify-content-between",
              ],
              [1, "d-flex", "align-items-center", "me-3"],
              [1, "me-2", "d-flex", "teams-dropdown-avatar"],
              [
                "style",
                "color:#fff;",
                3,
                "nzText",
                "background-color",
                4,
                "ngIf",
              ],
              [
                "class",
                "team-name-edit-icon",
                "nz-icon",
                "",
                "nzType",
                "edit",
                "nzTheme",
                "outline",
                4,
                "ngIf",
              ],
              [
                1,
                "align-items-baseline",
                "flex-column",
                "justify-content-start",
              ],
              [
                "nz-typography",
                "",
                "nzType",
                "secondary",
                "nzEllipsis",
                "",
                1,
                "d-block",
              ],
              [
                "nz-typography",
                "",
                1,
                "d-flex",
                "align-items-center",
                "mb-0",
                2,
                "font-size",
                "17px",
                3,
                "nzType",
              ],
              ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill"],
              [2, "color", "#fff", 3, "nzText"],
              [
                "nz-icon",
                "",
                "nzType",
                "edit",
                "nzTheme",
                "outline",
                1,
                "team-name-edit-icon",
              ],
            ],
            template: function (a, _) {
              1 & a &&
                (e.TgZ(0, "div", 0)(1, "div", 1)(2, "img", 2),
                e.NdJ("click", function () {
                  return _.navigateHome();
                }),
                e.qZA(),
                e.TgZ(3, "img", 3),
                e.NdJ("click", function () {
                  return _.navigateHome();
                }),
                e.qZA()()(),
                e.YNc(4, se, 28, 26, "div", 4),
                e.TgZ(5, "nz-dropdown-menu", null, 5)(7, "ul", 6),
                e.YNc(8, de, 14, 7, "li", 7),
                e.qZA()(),
                e.TgZ(9, "worklenz-team-members-form", 8),
                e.NdJ("onCancel", function () {
                  return _.reset();
                })("onCreateOrUpdate", function (ht) {
                  return _.handleOnCreateOrUpdate(ht);
                })("showChange", function (ht) {
                  return (_.showTeamMemberModal = ht);
                }),
                e.qZA()),
                2 & a &&
                  (e.xp6(2),
                  e.Q6J("src", "/assets/images/logo.png", e.LSH),
                  e.xp6(1),
                  e.Q6J("src", "/assets/icons/icon-192x192.png", e.LSH),
                  e.xp6(1),
                  e.Q6J("ngIf", _.profile),
                  e.xp6(4),
                  e.Q6J("ngForOf", _.teams),
                  e.xp6(1),
                  e.Q6J("show", _.showTeamMemberModal)(
                    "memberId",
                    _.selectedMemberId
                  ));
            },
            dependencies: [
              t.mk,
              t.sg,
              t.O5,
              t.RF,
              t.n9,
              l.rH,
              l.Od,
              K.wO,
              K.r9,
              it.ZU,
              M.SY,
              m.cm,
              m.RR,
              m.wA,
              O.Ls,
              y.x7,
              I.Dz,
              et.ix,
              W.w,
              R.dQ,
              g.S,
            ],
            styles: [
              ".logo-holder[_ngcontent-%COMP%]{width:135px;max-width:135px;margin-right:7px}.logo[_ngcontent-%COMP%]{width:120px;height:31px;background:rgba(255,255,255,.2);margin:16px 24px 16px 0;float:left}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:27px}.pt-def[_ngcontent-%COMP%]{padding-top:16px}.pb-def[_ngcontent-%COMP%]{padding-bottom:16px}.pl-def[_ngcontent-%COMP%]{padding-left:16px}.pr-def[_ngcontent-%COMP%]{padding-right:16px}[nz-menu-item][_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}span[nztype=bell][_ngcontent-%COMP%]{font-size:20px}.team-list-item[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid #f0f0f0!important}.team-name-edit-icon[_ngcontent-%COMP%]{width:32px;height:32px;background:rgba(150,150,150,.1);display:flex;align-items:center;justify-content:center;border-radius:16px}.profile-details-dropdown[_ngcontent-%COMP%]{position:absolute;right:0;top:70px;background-color:#fff;box-shadow:var(--ds-shadow-overlay, 0 4px 8px -2px rgba(9, 30, 66, .25), 0 0 1px rgba(9, 30, 66, .31));z-index:9;border-radius:4px;width:230px}.profile-details-dropdown[_ngcontent-%COMP%]   .account-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{line-height:20px;margin-bottom:0;font-size:14px;font-weight:500}.profile-details-dropdown[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{line-height:20px;margin-bottom:10px;margin-top:10px;font-size:14px;font-weight:500;padding-left:16px}.profile-details-dropdown[_ngcontent-%COMP%]   .account-name[_ngcontent-%COMP%]{margin-left:12px;width:155px}.profile-details-dropdown[_ngcontent-%COMP%]   .account-name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{line-height:20px;margin-bottom:0;font-size:14px;font-weight:500}.profile-details-dropdown[_ngcontent-%COMP%]   .account-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:20px;margin-bottom:0;font-size:12px}.profile-details-dropdown[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{border-top:1px solid #f0f0f0}.profile-details-dropdown[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:6px}.profile-details-dropdown[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:36px;cursor:pointer;margin-bottom:2px}.profile-details-dropdown[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#edebf0!important}.profile-details-dropdown[_ngcontent-%COMP%]   .account-details[_ngcontent-%COMP%]{margin-right:16px}[nz-menu][_ngcontent-%COMP%]{line-height:64px}nz-content[_ngcontent-%COMP%]{margin-top:64px;background:#ffffff}.upgrade-btn[_ngcontent-%COMP%]{background-color:#fbc84c69;padding:4px 11px;border-radius:4px}.invite-btn[_ngcontent-%COMP%]{color:#1890ff;border-color:#1890ff}.lg-none[_ngcontent-%COMP%]{display:none}.mb-none[_ngcontent-%COMP%], .logo-large[_ngcontent-%COMP%]{display:block}.logo-small[_ngcontent-%COMP%]{display:none}.item-selected[_ngcontent-%COMP%]{color:#188fff!important;font-weight:500}.top-nav-ul-main[_ngcontent-%COMP%]{display:block}.mob-nav-main[_ngcontent-%COMP%]{display:none}@media (max-width: 1200px){.mob-nav-main[_ngcontent-%COMP%]{display:flex}.top-nav-ul-main[_ngcontent-%COMP%]{display:none}.upgrade-btn[_ngcontent-%COMP%]{font-size:12px}}@media (max-width: 1100px){.lg-none[_ngcontent-%COMP%]{display:block}.mb-none[_ngcontent-%COMP%]{display:none}.teams-switch[_ngcontent-%COMP%]{padding-left:7px!important}.logo-holder[_ngcontent-%COMP%]{width:50px;max-width:50px}.top-nav-ul-main.ant-menu-horizontal[_ngcontent-%COMP%]:not(.ant-menu-dark) > .ant-menu-item[_ngcontent-%COMP%], .ant-menu-horizontal[_ngcontent-%COMP%]:not(.ant-menu-dark) > .ant-menu-submenu[_ngcontent-%COMP%]{padding:0 15px!important}.top-nav-ul-secondary.ant-menu-horizontal[_ngcontent-%COMP%]:not(.ant-menu-dark) > .ant-menu-item[_ngcontent-%COMP%], .ant-menu-horizontal[_ngcontent-%COMP%]:not(.ant-menu-dark) > .ant-menu-submenu[_ngcontent-%COMP%]{padding:0 15px!important}.logo-large[_ngcontent-%COMP%]{display:none}.logo-small[_ngcontent-%COMP%]{display:block}}",
            ],
            changeDetection: 0,
          })),
          U
        );
      })();
      var _e = o(16676),
        xt = o.n(_e);
      function Jt(c, U) {
        if (1 & c) {
          const z = e.EpF();
          e.TgZ(0, "nz-affix", 3),
            e.ynx(1),
            e.TgZ(2, "nz-alert", 4),
            e.NdJ("nzOnClose", function () {
              e.CHM(z);
              const _ = e.oxw();
              return e.KtG(_.setLicensingLastClose());
            }),
            e.qZA(),
            e.BQk(),
            e.qZA();
        }
        if (2 & c) {
          e.oxw();
          const z = e.MAs(2),
            a = e.MAs(4);
          e.Q6J("nzOffsetTop", 0),
            e.xp6(2),
            e.Q6J("nzAction", z)("nzMessage", a)("nzType", "warning");
        }
      }
      function It(c, U) {
        if ((1 & c && (e.TgZ(0, "button", 6), e._uU(1), e.qZA()), 2 & c)) {
          const z = e.oxw(2);
          e.Q6J("nzSize", "small")("routerLink", "admin-center/billing")(
            "nzType",
            "primary"
          ),
            e.xp6(1),
            e.Oqu(
              "trialing" === z.profile.subscription_status
                ? "Upgrade now"
                : "Go to Billing"
            );
        }
      }
      function Dt(c, U) {
        if ((1 & c && e.YNc(0, It, 2, 4, "button", 5), 2 & c)) {
          const z = e.oxw();
          e.Q6J("ngIf", z.profile.owner || z.profile.is_admin);
        }
      }
      function Qt(c, U) {
        if ((1 & c && (e._uU(0), e.TgZ(1, "b"), e._uU(2), e.qZA()), 2 & c)) {
          const z = e.oxw();
          e.hij(" Action required! ", z.string1, " "),
            e.xp6(2),
            e.Oqu(z.string2);
        }
      }
      let Wt = (() => {
        var c;
        class U {
          constructor() {
            (this.licensingClose = "worklenz.licensing_close"),
              (this.string1 = ""),
              (this.string2 = "");
          }
          getVisible() {
            const a = this.getLicensingLastClose();
            if (a && xt()(a).isSame(xt()(), "day")) return !1;
            const _ = xt()(this.profile.valid_till_date);
            _.isAfter(xt()(), "days") && _.add(1, "day");
            const b = _.diff(xt()(), "days");
            return !(
              !this.profile.valid_till_date ||
              b >= 7 ||
              ((this.string2 = ` ${Math.abs(b)} day${
                1 === Math.abs(b) ? "" : "s"
              }`),
              "trialing" === this.profile.subscription_status
                ? (b < 0
                    ? ((this.string1 = "Your Worklenz trial expired"),
                      (this.string2 = this.string2 + " ago"))
                    : 0 !== b && b < 7
                    ? (this.string1 = "Your Worklenz trial expires in")
                    : 0 === b &&
                      b < 7 &&
                      ((this.string1 = "Your Worklenz trial expires "),
                      (this.string2 = "today")),
                  0)
                : "active" !== this.profile.subscription_status ||
                  (b < 0
                    ? ((this.string1 = "Your Worklenz subscription expired"),
                      (this.string2 = this.string2 + " ago"))
                    : 0 !== b && b < 7
                    ? (this.string1 = "Your Worklenz subscription expires in")
                    : 0 === b &&
                      b < 7 &&
                      ((this.string1 = "Your Worklenz subscription expires "),
                      (this.string2 = "today")),
                  0))
            );
          }
          setLicensingLastClose() {
            localStorage.setItem(
              this.licensingClose,
              xt()().format("YYYY-MM-DD")
            );
          }
          getLicensingLastClose() {
            return localStorage.getItem(this.licensingClose);
          }
        }
        return (
          ((c = U).ɵfac = function (a) {
            return new (a || c)();
          }),
          (c.ɵcmp = e.Xpm({
            type: c,
            selectors: [["worklenz-licensing-alerts"]],
            inputs: { profile: "profile" },
            decls: 5,
            vars: 1,
            consts: [
              [3, "nzOffsetTop", 4, "ngIf"],
              ["actionTemplate1", ""],
              ["messageTemplate", ""],
              [3, "nzOffsetTop"],
              [
                "nzCloseable",
                "",
                "nzShowIcon",
                "",
                2,
                "font-weight",
                "500",
                3,
                "nzAction",
                "nzMessage",
                "nzType",
                "nzOnClose",
              ],
              ["nz-button", "", 3, "nzSize", "routerLink", "nzType", 4, "ngIf"],
              ["nz-button", "", 3, "nzSize", "routerLink", "nzType"],
            ],
            template: function (a, _) {
              1 & a &&
                (e.YNc(0, Jt, 3, 4, "nz-affix", 0),
                e.YNc(1, Dt, 1, 1, "ng-template", null, 1, e.W1O),
                e.YNc(3, Qt, 3, 2, "ng-template", null, 2, e.W1O)),
                2 & a && e.Q6J("ngIf", _.getVisible());
            },
            dependencies: [t.O5, l.rH, nt.$, J.r, et.ix, W.w, R.dQ],
          })),
          U
        );
      })();
      var Mt = o(21406),
        Ht = o(26857),
        Vt = o(69862);
      let bt = (() => {
        var c;
        class U extends Ht.P {
          constructor(a) {
            super(),
              (this.http = a),
              (this.root = `${this.API_BASE_URL}/notifications`);
          }
          update(a) {
            return this._put(this.http, `${this.root}/${a}`, null);
          }
          readAll() {
            return this._put(this.http, `${this.root}/read-all`, null);
          }
          get(a) {
            const _ = (0, w.UK)({ filter: a });
            return this._get(this.http, `${this.root}${_}`);
          }
          getUnreadCount() {
            return this._get(this.http, `${this.root}/unread-count`);
          }
        }
        return (
          ((c = U).ɵfac = function (a) {
            return new (a || c)(e.LFG(Vt.eN));
          }),
          (c.ɵprov = e.Yz7({ token: c, factory: c.ɵfac, providedIn: "root" })),
          U
        );
      })();
      var wt = o(43389),
        Nt = o(60804),
        Et = o(92574),
        Pt = o(55695),
        Gt = o(22114),
        Rt = o(24139),
        f = o(22078);
      let B = (() => {
        var c;
        class U {
          transform(a) {
            return (
              a || (a = "#333333"),
              `background-color: ${a}ff;color: ${a};border: 1px solid ${a};`
            );
          }
        }
        return (
          ((c = U).ɵfac = function (a) {
            return new (a || c)();
          }),
          (c.ɵpipe = e.Yjl({ name: "tagBackground", type: c, pure: !0 })),
          U
        );
      })();
      const C = ["template"],
        i = ["closeIcon"];
      function s(c, U) {
        if (
          (1 & c &&
            (e.TgZ(0, "div", 10), e._UZ(1, "span", 11), e._uU(2), e.qZA()),
          2 & c)
        ) {
          const z = e.oxw().data;
          e.xp6(2), e.hij(" ", z.team, " ");
        }
      }
      function p(c, U) {
        if (
          (1 & c &&
            (e.TgZ(0, "div")(1, "nz-tag"),
            e.ALo(2, "tagBackground"),
            e._uU(3),
            e.qZA()()),
          2 & c)
        ) {
          const z = e.oxw().data;
          e.xp6(1),
            e.Jzz("background-color: ", e.lcZ(2, 4, z.color), ""),
            e.xp6(2),
            e.Oqu(z.project);
        }
      }
      function d(c, U) {
        if (1 & c) {
          const z = e.EpF();
          e.TgZ(0, "div", 2),
            e.YNc(1, s, 3, 1, "div", 3),
            e.TgZ(2, "div", 4),
            e._UZ(3, "div", 5),
            e.YNc(4, p, 4, 6, "div", 6),
            e.qZA(),
            e.TgZ(5, "span", 7)(6, "button", 8),
            e.NdJ("click", function (_) {
              const ht = e.CHM(z).$implicit,
                zt = e.oxw();
              return e.KtG(zt.close(_, ht));
            }),
            e._UZ(7, "span", 9),
            e.qZA()()();
        }
        if (2 & c) {
          const z = U.data;
          e.xp6(1),
            e.Q6J("ngIf", z.team),
            e.xp6(2),
            e.Q6J("innerHTML", z.message, e.oJD),
            e.xp6(1),
            e.Q6J("ngIf", z.project);
        }
      }
      function E(c, U) {}
      let ct = (() => {
        var c;
        class U {
          constructor(a, _, b, ht, zt) {
            (this.service = a),
              (this.router = _),
              (this.auth = b),
              (this.teamApi = ht),
              (this.settings = zt),
              (this.session = null),
              (this.session = this.auth.getCurrentSession());
          }
          show(a) {
            var _ = this;
            a.color = a.color || "#191919";
            const ht = this.service.template(this.templateRef, {
              nzDuration: 5e3,
              nzData: a,
              nzStyle: {
                cursor: "pointer",
                borderRadius: "15px",
                border: `2px solid ${a.color}4d`,
              },
              nzCloseIcon: this.closeIconRef,
            });
            ht.onClick.subscribe(
              (0, u.Z)(function* () {
                _.service.remove(ht.messageId),
                  a.url &&
                    (_.session?.team_id !== a.team_id &&
                      (yield _.teamApi.activate(a.team_id),
                      yield _.auth.authorize()),
                    yield _.router.navigate([a.url], {
                      queryParams: a.params || null,
                    })),
                  a.project &&
                    a.task_id &&
                    _.settings.emitNotificationClick({
                      project: a.project,
                      task: a.task_id,
                    });
              })
            );
          }
          close(a, _) {
            a.stopPropagation(), _.close();
          }
        }
        return (
          ((c = U).ɵfac = function (a) {
            return new (a || c)(
              e.Y36(f.zb),
              e.Y36(l.F0),
              e.Y36(X.e),
              e.Y36(ot.S),
              e.Y36($.g)
            );
          }),
          (c.ɵcmp = e.Xpm({
            type: c,
            selectors: [["worklenz-notification-template"]],
            viewQuery: function (a, _) {
              if ((1 & a && (e.Gf(C, 5), e.Gf(i, 5)), 2 & a)) {
                let b;
                e.iGM((b = e.CRH())) && (_.templateRef = b.first),
                  e.iGM((b = e.CRH())) && (_.closeIconRef = b.first);
              }
            },
            decls: 4,
            vars: 0,
            consts: [
              ["template", ""],
              ["closeIcon", ""],
              [1, "ant-notification-notice-content"],
              ["class", "ant-notification-notice-message", 4, "ngIf"],
              [1, "ant-notification-notice-description"],
              [1, "mb-1", 3, "innerHTML"],
              [4, "ngIf"],
              [
                1,
                "ant-notification-notice-btn",
                2,
                "position",
                "absolute",
                "top",
                "-8px",
                "right",
                "16px",
              ],
              [
                "nz-button",
                "",
                "nzType",
                "text",
                "nzSize",
                "large",
                "nzShape",
                "circle",
                3,
                "click",
              ],
              ["nz-icon", "", "nzType", "close-circle", "nzTheme", "outline"],
              [1, "ant-notification-notice-message"],
              ["nz-icon", "", "nzType", "bank", "nzTheme", "outline"],
            ],
            template: function (a, _) {
              1 & a &&
                (e.YNc(0, d, 8, 3, "ng-template", null, 0, e.W1O),
                e.YNc(2, E, 0, 0, "ng-template", null, 1, e.W1O));
            },
            dependencies: [t.O5, O.Ls, et.ix, W.w, Pt.j, B],
            changeDetection: 0,
          })),
          U
        );
      })();
      var dt = o(34302);
      const Ct = ["template"];
      function ft(c, U) {
        if (1 & c) {
          const z = e.EpF();
          e.ynx(0),
            e.TgZ(1, "button", 11),
            e.NdJ("click", function () {
              e.CHM(z);
              const _ = e.oxw(2);
              return e.KtG(_.readAll());
            }),
            e._uU(2, " Mark all as read "),
            e.qZA(),
            e.BQk();
        }
        if (2 & c) {
          const z = e.oxw(2);
          e.xp6(1),
            e.Q6J("nzType", "link")("nzLoading", z.readAllInProgress)(
              "nzTooltipTitle",
              "Marks all notifications as read. You still have to accept invitations."
            );
        }
      }
      function he(c, U) {
        1 & c && e._UZ(0, "nz-empty", 12),
          2 & c &&
            e.Q6J("nzNotFoundContent", "You've read all your notifications");
      }
      function ve(c, U) {
        1 & c && e.GkF(0);
      }
      const Ce = function (c) {
        return { $implicit: c };
      };
      function Te(c, U) {
        if (
          (1 & c && (e.ynx(0), e.YNc(1, ve, 1, 0, "ng-container", 13), e.BQk()),
          2 & c)
        ) {
          const z = U.$implicit;
          e.oxw(2);
          const a = e.MAs(3),
            _ = e.MAs(5);
          e.xp6(1),
            e.Q6J("ngTemplateOutlet", "invitation" === z.type ? a : _)(
              "ngTemplateOutletContext",
              e.VKq(2, Ce, z.data)
            );
        }
      }
      function Oe(c, U) {
        if (1 & c) {
          const z = e.EpF();
          e.ynx(0),
            e.TgZ(1, "div", 5)(2, "nz-segmented", 6),
            e.NdJ("nzValueChange", function (_) {
              e.CHM(z);
              const b = e.oxw();
              return e.KtG(b.onOptionChange(_));
            }),
            e.qZA(),
            e.YNc(3, ft, 3, 3, "ng-container", 7),
            e.qZA(),
            e.TgZ(4, "nz-skeleton", 8),
            e.YNc(5, he, 1, 1, "nz-empty", 9),
            e.YNc(6, Te, 2, 4, "ng-container", 10),
            e.qZA(),
            e.BQk();
        }
        if (2 & c) {
          const z = e.oxw();
          e.xp6(2),
            e.Q6J("nzOptions", z.options),
            e.xp6(1),
            e.Q6J("ngIf", z.notificationsCount && z.isUnreadNotifications()),
            e.xp6(1),
            e.Q6J("nzActive", !0)(
              "nzLoading",
              z.loading || z.loadingInvitations
            ),
            e.xp6(1),
            e.Q6J("ngIf", z.isEmpty()),
            e.xp6(1),
            e.Q6J("ngForOf", z.dataset)("ngForTrackBy", z.trackByFn);
        }
      }
      function Ae(c, U) {
        if (1 & c) {
          const z = e.EpF();
          e.TgZ(0, "button", 19),
            e.NdJ("click", function (_) {
              e.CHM(z);
              const b = e.oxw(2).$implicit,
                ht = e.oxw();
              return e.KtG(ht.accept(_, b));
            }),
            e.TgZ(1, "u"),
            e._uU(2, "Mark as read"),
            e.qZA()();
        }
        if (2 & c) {
          const z = e.oxw(2).$implicit,
            a = e.oxw();
          e.Q6J("disabled", a.inProgress())("nzLoading", z.accepting)(
            "nzSize",
            "small"
          )("nzType", "link");
        }
      }
      function Se(c, U) {
        if (1 & c) {
          const z = e.EpF();
          e.TgZ(0, "button", 20),
            e.NdJ("click", function () {
              e.CHM(z);
              const _ = e.oxw(2).$implicit,
                b = e.oxw();
              return e.KtG(b.acceptAndJoin(_));
            }),
            e.TgZ(1, "u"),
            e._uU(2, "Read & Join"),
            e.qZA()();
        }
        if (2 & c) {
          const z = e.oxw(2).$implicit,
            a = e.oxw();
          e.Q6J("disabled", a.inProgress())("nzLoading", z.joining)(
            "nzSize",
            "small"
          )("nzType", "link");
        }
      }
      function Me(c, U) {
        1 & c &&
          (e.TgZ(0, "nz-space"),
          e.YNc(1, Ae, 3, 4, "button", 17),
          e.YNc(2, Se, 3, 4, "button", 18),
          e.qZA());
      }
      function Ee(c, U) {
        if (
          (1 & c &&
            (e.TgZ(0, "div", 14)(1, "div", 15)(2, "div", 16),
            e._uU(3, " You have been invited to work with "),
            e.TgZ(4, "b"),
            e._uU(5),
            e.qZA(),
            e._uU(6, ". "),
            e.qZA(),
            e.YNc(7, Me, 3, 0, "nz-space", 7),
            e.qZA()()),
          2 & c)
        ) {
          const z = U.$implicit,
            a = e.oxw();
          e.Udp("width", "auto"),
            e.xp6(5),
            e.Oqu(z.team_name),
            e.xp6(2),
            e.Q6J("ngIf", a.isUnreadNotifications());
        }
      }
      function Ie(c, U) {
        if (
          (1 & c &&
            (e.TgZ(0, "div")(1, "nz-tag"),
            e.ALo(2, "tagBackground"),
            e._uU(3),
            e.qZA()()),
          2 & c)
        ) {
          const z = e.oxw().$implicit;
          e.xp6(1),
            e.Jzz("background-color: ", e.lcZ(2, 4, z.color), ""),
            e.xp6(2),
            e.Oqu(z.project);
        }
      }
      function De(c, U) {
        if (1 & c) {
          const z = e.EpF();
          e.TgZ(0, "button", 28),
            e.NdJ("click", function (_) {
              e.CHM(z);
              const b = e.oxw().$implicit,
                ht = e.oxw();
              return e.KtG(ht.markNotificationAsRead(_, b.id));
            }),
            e.TgZ(1, "u"),
            e._uU(2, "Mark as read"),
            e.qZA()();
        }
        if (2 & c) {
          const z = e.oxw().$implicit,
            a = e.oxw();
          e.Q6J("nzLoading", a.loadersMap[z.id])("nzShape", "round")(
            "nzSize",
            "small"
          )("nzType", "link");
        }
      }
      function be(c, U) {
        if (1 & c) {
          const z = e.EpF();
          e.TgZ(0, "div", 21),
            e.NdJ("click", function (_) {
              const ht = e.CHM(z).$implicit,
                zt = e.oxw();
              return e.KtG(zt.goToUrl(_, ht));
            }),
            e.TgZ(1, "div", 15)(2, "div", 16)(3, "div", 22),
            e._UZ(4, "span", 23),
            e._uU(5),
            e.qZA(),
            e._UZ(6, "div", 24),
            e.YNc(7, Ie, 4, 6, "div", 7),
            e.qZA(),
            e.TgZ(8, "div", 25),
            e.YNc(9, De, 3, 4, "button", 26),
            e.TgZ(10, "small", 27),
            e._uU(11),
            e.ALo(12, "fromNow"),
            e.qZA()()()();
        }
        if (2 & c) {
          const z = U.$implicit,
            a = e.oxw();
          e.Udp("width", "auto")("border", "2px solid " + z.color + "4d"),
            e.ekj("cursor-pointer", z.url),
            e.xp6(3),
            e.Q6J("nzType", "secondary"),
            e.xp6(1),
            e.Q6J("nzType", "bank")("nzTheme", "outline"),
            e.xp6(1),
            e.hij(" ", z.team, " "),
            e.xp6(1),
            e.Q6J("innerHTML", z.message, e.oJD),
            e.xp6(1),
            e.Q6J("ngIf", z.project),
            e.xp6(2),
            e.Q6J("ngIf", a.isUnreadNotifications()),
            e.xp6(1),
            e.Q6J("nzType", "secondary"),
            e.xp6(1),
            e.Oqu(e.lcZ(12, 15, z.created_at));
        }
      }
      let we = (() => {
        var c;
        class U {
          get title() {
            return `${this.selectedFilter} Notifications (${this.dataset.length})`;
          }
          constructor(a, _, b, ht, zt, Lt, Kt, $t, ge, fe) {
            var At = this;
            (this.api = a),
              (this.notificationsApi = _),
              (this.auth = b),
              (this.router = ht),
              (this.socket = zt),
              (this.settingsService = Lt),
              (this.cdr = Kt),
              (this.ngZone = $t),
              (this.renderer = ge),
              (this.teamApi = fe),
              (this.show = !1),
              (this.showChange = new e.vpe()),
              (this.count = 0),
              (this.countChange = new e.vpe()),
              (this.OPTION_UNREAD = "Unread"),
              (this.OPTION_READ = "Read"),
              (this.options = [this.OPTION_UNREAD, this.OPTION_READ]),
              (this.invitations = []),
              (this.notifications = []),
              (this.showBrowserPush = !1),
              (this.session = null),
              (this._dataset = []),
              (this.loading = !1),
              (this.loadingInvitations = !1),
              (this.activatingTeam = !1),
              (this.acceptingInvitation = !1),
              (this.accepting = !1),
              (this.joining = !1),
              (this.readAllInProgress = !1),
              (this.invitationsCount = 0),
              (this.notificationsCount = 0),
              (this.unreadNotificationsCount = 0),
              (this.selectedFilter = this.OPTION_UNREAD),
              (this.dataset = []),
              (this.loadersMap = {}),
              (this.onInvitationsUpdate = (function () {
                var Tt = (0, u.Z)(function* (Ot) {
                  At.isPushEnabled() &&
                    (At.createPush(Ot.message, Ot.team, Ot.team_id),
                    At.notificationTemplate.show({
                      id: "",
                      team: Ot.team,
                      team_id: Ot.team_id,
                      message: Ot.message,
                    })),
                    At.init();
                });
                return function (Ot) {
                  return Tt.apply(this, arguments);
                };
              })()),
              (this.onInvitationDelete = (function () {
                var Tt = (0, u.Z)(function* (Ot) {
                  At.init(), At.getUnreadCount();
                });
                return function (Ot) {
                  return Tt.apply(this, arguments);
                };
              })()),
              (this.onNotificationsUpdate = (Tt) => {
                if (this.isPushEnabled()) {
                  const Ot = Tt.team ? `${Tt.team} | Worklenz` : "Worklenz";
                  let xe = Tt.url;
                  xe &&
                    Tt.params &&
                    Object.keys(Tt.params).length &&
                    (xe += (0, w.UK)(Tt.params)),
                    this.createPush(Tt.message, Ot, Tt.team_id, xe),
                    this.notificationTemplate.show(Tt);
                }
                this.init();
              }),
              this.askPushPerm(),
              (this.session = this.auth.getCurrentSession());
          }
          ngOnInit() {
            this.init(),
              this.socket.on(
                r.C.INVITATIONS_UPDATE.toString(),
                this.onInvitationsUpdate
              ),
              this.socket.on(
                r.C.NOTIFICATIONS_UPDATE.toString(),
                this.onNotificationsUpdate
              ),
              this.socket.on(
                r.C.TEAM_MEMBER_REMOVED.toString(),
                this.onInvitationDelete
              );
          }
          ngOnDestroy() {
            this.socket.removeListener(
              r.C.INVITATIONS_UPDATE.toString(),
              this.onInvitationsUpdate
            ),
              this.socket.removeListener(
                r.C.NOTIFICATIONS_UPDATE.toString(),
                this.onNotificationsUpdate
              ),
              this.socket.removeListener(
                r.C.TEAM_MEMBER_REMOVED.toString(),
                this.onInvitationDelete
              );
          }
          init() {
            var a = this;
            return (0, u.Z)(function* () {
              (a.dataset = []),
                (a._dataset = []),
                yield a.getInvites(),
                yield a.getNotifies(),
                yield a.getUnreadCount(),
                a.sortDataset(),
                (a.dataset = [...a._dataset]),
                a.cdr.markForCheck();
            })();
          }
          onFocusChange() {
            this.ngZone.runOutsideAngular(() => {
              this.showBrowserPush = "hidden" === document.visibilityState;
            });
          }
          sortDataset() {
            const a = "invitation";
            this._dataset.sort((_, b) =>
              _.type === a && b.type !== a
                ? -1
                : _.type !== a && b.type === a
                ? 1
                : 0
            );
          }
          selectTeam(a) {
            var _ = this;
            return (0, u.Z)(function* () {
              if (a) {
                _.activatingTeam = !0;
                try {
                  (yield _.api.activate(a)).done &&
                    (yield _.router.navigate(["/worklenz"])),
                    (_.activatingTeam = !1);
                } catch (b) {
                  (_.activatingTeam = !1), (0, w.tu)(b);
                }
              }
            })();
          }
          closeDrawer() {
            (this.show = !1), this.showChange.emit(!1);
          }
          isUnreadNotifications() {
            return this.selectedFilter === this.OPTION_UNREAD;
          }
          inProgress() {
            return (
              this.accepting ||
              this.joining ||
              this.acceptingInvitation ||
              this.activatingTeam
            );
          }
          trackByFn(a, _) {
            return _.id;
          }
          isEmpty() {
            return this.invitationsCount + this.notificationsCount === 0;
          }
          askPushPerm() {
            "Notification" in window &&
            "serviceWorker" in navigator &&
            "PushManager" in window
              ? "default" === Notification.permission &&
                this.ngZone.runOutsideAngular(() => {
                  "Notification" in window
                    ? Notification.requestPermission()
                    : console.log(
                        "This browser does not support notifications."
                      );
                })
              : console.log(
                  "This browser does not support notification permission."
                );
          }
          accept(a, _) {
            var b = this;
            return (0, u.Z)(function* () {
              _ &&
                ((yield b.acceptInvite(_.team_member_id, !1)) &&
                  (b.markNotificationAsRead(a, _.id), yield b.init()),
                b.cdr.markForCheck());
            })();
          }
          acceptAndJoin(a) {
            var _ = this;
            return (0, u.Z)(function* () {
              if (!a) return;
              (_.joining = !0), (a.joining = !0), _.cdr.detectChanges();
              const b = yield _.acceptInvite(a.team_member_id, !0);
              b &&
                (_.init(),
                yield _.selectTeam(b.id),
                yield _.auth.authorize(),
                _.closeDrawer(),
                window.location.reload()),
                (a.joining = !1),
                (_.joining = !1),
                _.cdr.markForCheck();
            })();
          }
          readAll() {
            var a = this;
            return (0, u.Z)(function* () {
              try {
                (a.readAllInProgress = !0),
                  a.cdr.detectChanges(),
                  (yield a.notificationsApi.readAll()) && (yield a.init()),
                  (a.readAllInProgress = !1);
              } catch {
                a.readAllInProgress = !1;
              }
              a.cdr.markForCheck();
            })();
          }
          getInvites() {
            var a = this;
            return (0, u.Z)(function* () {
              try {
                a.loadingInvitations = !0;
                const _ = yield a.api.getInvites();
                if (_.done) {
                  (a.invitations = _.body),
                    (a.invitationsCount = a.invitations.length);
                  for (const b of a.invitations)
                    a._dataset.push({ type: "invitation", data: b });
                }
                a.loadingInvitations = !1;
              } catch (_) {
                (a.loadingInvitations = !1), (0, w.tu)(_);
              }
            })();
          }
          getNotifies() {
            var a = this;
            return (0, u.Z)(function* () {
              try {
                a.loading = !0;
                const _ = yield a.notificationsApi.get(a.selectedFilter);
                if (_.done) {
                  (a.notifications = _.body),
                    (a.notificationsCount = a.notifications.length),
                    (a.settingsService.count = a.notificationsCount);
                  for (const b of a.notifications)
                    a._dataset.push({ type: "notification", data: b });
                }
                a.loading = !1;
              } catch (_) {
                (0, w.tu)(_), (a.loading = !1);
              }
            })();
          }
          getUnreadCount() {
            var a = this;
            return (0, u.Z)(function* () {
              try {
                const _ = yield a.notificationsApi.getUnreadCount();
                _.done &&
                  ((a.unreadNotificationsCount = _.body),
                  a.emitCountChange(),
                  a.cdr.markForCheck());
              } catch (_) {
                (0, w.tu)(_);
              }
              a.cdr.markForCheck();
            })();
          }
          acceptInvite(a, _) {
            var b = this;
            return (0, u.Z)(function* () {
              if (a) {
                try {
                  b.acceptingInvitation = !0;
                  const ht = { team_member_id: a, show_alert: _ },
                    zt = yield b.api.accept(ht);
                  if (((b.acceptingInvitation = !1), zt.done && zt.body.id))
                    return zt.body;
                } catch (ht) {
                  (b.acceptingInvitation = !1), (0, w.tu)(ht);
                }
                return null;
              }
            })();
          }
          emitCountChange() {
            this.countChange.emit(this.unreadNotificationsCount),
              this.settingsService.emitCountsUpdate();
          }
          handleVisibilityChange(a) {
            this.ngZone.runOutsideAngular(() => {
              a
                ? this.renderer.setStyle(
                    document.documentElement,
                    "overflow",
                    "hidden"
                  )
                : this.renderer.removeStyle(
                    document.documentElement,
                    "overflow"
                  );
            });
          }
          markNotificationAsRead(a, _) {
            var b = this;
            return (0, u.Z)(function* () {
              a.stopPropagation(),
                _ &&
                  ((b.loadersMap[_] = !0),
                  (yield b.notificationsApi.update(_)) &&
                    (b.notificationsCount--,
                    b.dataset.splice(
                      b.dataset.findIndex((zt) => zt.data.id === _),
                      1
                    ),
                    b._dataset.splice(
                      b._dataset.findIndex((zt) => zt.data.id === _),
                      1
                    )),
                  (b.loadersMap[_] = !1),
                  b.getUnreadCount(),
                  b.cdr.markForCheck());
            })();
          }
          goToUrl(a, _) {
            var b = this;
            return (0, u.Z)(function* () {
              a.stopPropagation(),
                _.url &&
                  (b.closeDrawer(),
                  b.session?.team_id !== _.team_id &&
                    (yield b.teamApi.activate(_.team_id),
                    yield b.auth.authorize()),
                  _.project &&
                    _.task_id &&
                    b.settingsService.emitNotificationClick({
                      project: _.project,
                      task: _.task_id,
                    }),
                  b.router.navigate([_.url], { queryParams: _.params || null }),
                  b.cdr.markForCheck());
            })();
          }
          isPushEnabled() {
            return !!this.settingsService.settings.popup_notifications_enabled;
          }
          createPush(a, _, b, ht) {
            var zt = this;
            "granted" === Notification.permission &&
              this.showBrowserPush &&
              this.ngZone.runOutsideAngular(() => {
                const Lt = "https://worklenz.com/assets/icons/icon-128x128.png";
                new Notification(_, {
                  body: a.replace(Mt.Yt, ""),
                  icon: Lt,
                  badge: Lt,
                }).onclick = (function () {
                  var Kt = (0, u.Z)(function* ($t) {
                    ht &&
                      (window.focus(),
                      b &&
                        zt.session?.team_id !== b &&
                        (yield zt.teamApi.activate(b),
                        yield zt.auth.authorize()),
                      (window.location.href = ht));
                  });
                  return function ($t) {
                    return Kt.apply(this, arguments);
                  };
                })();
              });
          }
          onOptionChange(a) {
            (this.selectedFilter = this.options[a]),
              (this.loading = !0),
              this.init();
          }
        }
        return (
          ((c = U).ɵfac = function (a) {
            return new (a || c)(
              e.Y36(ot.S),
              e.Y36(bt),
              e.Y36(X.e),
              e.Y36(l.F0),
              e.Y36(lt.s),
              e.Y36($.g),
              e.Y36(e.sBO),
              e.Y36(e.R0b),
              e.Y36(e.Qsj),
              e.Y36(ot.S)
            );
          }),
          (c.ɵcmp = e.Xpm({
            type: c,
            selectors: [["worklenz-notifications-drawer"]],
            viewQuery: function (a, _) {
              if ((1 & a && e.Gf(Ct, 5), 2 & a)) {
                let b;
                e.iGM((b = e.CRH())) && (_.notificationTemplate = b.first);
              }
            },
            hostBindings: function (a, _) {
              1 & a &&
                e.NdJ(
                  "visibilitychange",
                  function () {
                    return _.onFocusChange();
                  },
                  !1,
                  e.evT
                );
            },
            inputs: { show: "show", count: "count" },
            outputs: { showChange: "showChange", countChange: "countChange" },
            decls: 8,
            vars: 5,
            consts: [
              [
                3,
                "nzVisible",
                "nzClosable",
                "nzPlacement",
                "nzTitle",
                "nzWrapClassName",
                "nzOnClose",
                "nzVisibleChange",
              ],
              [4, "nzDrawerContent"],
              ["invitationTemplate", ""],
              ["notificationTemplate", ""],
              ["template", ""],
              [
                1,
                "d-flex",
                "justify-content-between",
                "align-items-center",
                2,
                "top",
                "-14px",
                "position",
                "relative",
              ],
              [3, "nzOptions", "nzValueChange"],
              [4, "ngIf"],
              [3, "nzActive", "nzLoading"],
              [3, "nzNotFoundContent", 4, "ngIf"],
              [4, "ngFor", "ngForOf", "ngForTrackBy"],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                1,
                "p-0",
                3,
                "nzType",
                "nzLoading",
                "nzTooltipTitle",
                "click",
              ],
              [3, "nzNotFoundContent"],
              [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
              [
                1,
                "ant-notification-notice",
                "worklenz-notification",
                "rounded-4",
              ],
              [1, "ant-notification-notice-content"],
              [1, "ant-notification-notice-description"],
              [
                "class",
                "mt-2 p-0",
                "nz-button",
                "",
                3,
                "disabled",
                "nzLoading",
                "nzSize",
                "nzType",
                "click",
                4,
                "nzSpaceItem",
              ],
              [
                "class",
                "mt-2",
                "nz-button",
                "",
                3,
                "disabled",
                "nzLoading",
                "nzSize",
                "nzType",
                "click",
                4,
                "nzSpaceItem",
              ],
              [
                "nz-button",
                "",
                1,
                "mt-2",
                "p-0",
                3,
                "disabled",
                "nzLoading",
                "nzSize",
                "nzType",
                "click",
              ],
              [
                "nz-button",
                "",
                1,
                "mt-2",
                3,
                "disabled",
                "nzLoading",
                "nzSize",
                "nzType",
                "click",
              ],
              [
                1,
                "ant-notification-notice",
                "worklenz-notification",
                "rounded-4",
                3,
                "click",
              ],
              ["nz-typography", "", 1, "mb-1", 3, "nzType"],
              ["nz-icon", "", 3, "nzType", "nzTheme"],
              [1, "mb-1", 3, "innerHTML"],
              [
                1,
                "d-flex",
                "align-items-baseline",
                "justify-content-between",
                "mt-1",
              ],
              [
                "class",
                "p-0",
                "nz-button",
                "",
                3,
                "nzLoading",
                "nzShape",
                "nzSize",
                "nzType",
                "click",
                4,
                "ngIf",
              ],
              ["nz-typography", "", 3, "nzType"],
              [
                "nz-button",
                "",
                1,
                "p-0",
                3,
                "nzLoading",
                "nzShape",
                "nzSize",
                "nzType",
                "click",
              ],
            ],
            template: function (a, _) {
              1 & a &&
                (e.TgZ(0, "nz-drawer", 0),
                e.NdJ("nzOnClose", function () {
                  return _.closeDrawer();
                })("nzVisibleChange", function (ht) {
                  return (_.show = ht);
                })("nzVisibleChange", function (ht) {
                  return _.handleVisibilityChange(ht);
                }),
                e.YNc(1, Oe, 7, 7, "ng-container", 1),
                e.qZA(),
                e.YNc(2, Ee, 8, 4, "ng-template", null, 2, e.W1O),
                e.YNc(4, be, 13, 17, "ng-template", null, 3, e.W1O),
                e._UZ(6, "worklenz-notification-template", null, 4)),
                2 & a &&
                  e.Q6J("nzVisible", _.show)("nzClosable", !0)(
                    "nzPlacement",
                    "right"
                  )("nzTitle", _.title)(
                    "nzWrapClassName",
                    "notifications-drawer"
                  );
            },
            dependencies: [
              t.sg,
              t.O5,
              t.tP,
              it.ZU,
              M.SY,
              O.Ls,
              wt.Vz,
              wt.SQ,
              Nt.p9,
              Et.NU,
              Et.$1,
              et.ix,
              W.w,
              R.dQ,
              Pt.j,
              Gt.wY,
              Rt.ng,
              ct,
              dt.d,
              B,
            ],
            styles: [
              ".scroll-viewport[_ngcontent-%COMP%]{height:calc(100vh - 140px)}",
            ],
            changeDetection: 0,
          })),
          U
        );
      })();
      function Ne(c, U) {
        if ((1 & c && e._UZ(0, "worklenz-licensing-alerts", 8), 2 & c)) {
          const z = e.oxw();
          e.Q6J("profile", z.profile);
        }
      }
      function Pe(c, U) {
        if (1 & c) {
          const z = e.EpF();
          e.TgZ(0, "worklenz-header", 9),
            e.NdJ("showNotificationsChange", function (_) {
              e.CHM(z);
              const b = e.oxw();
              return e.KtG((b.showNotifications = _));
            }),
            e.qZA();
        }
        if (2 & c) {
          const z = e.oxw();
          e.Q6J("teams", z.teams)("profile", z.profile)(
            "navigation",
            z.navigation
          )("count", z.count)("showNotifications", z.showNotifications);
        }
      }
      const Re = function () {
        return [];
      };
      let Le = (() => {
        var c;
        class U {
          get profile() {
            return this.auth.getCurrentSession();
          }
          constructor(a, _, b, ht, zt, Lt, Kt, $t, ge, fe, At) {
            (this.auth = a),
              (this.api = _),
              (this.socket = b),
              (this.message = ht),
              (this.menu = zt),
              (this.modal = Lt),
              (this.socketService = Kt),
              (this.settingsApi = $t),
              (this.notificationSettings = ge),
              (this.utils = fe),
              (this.adminCenterService = At),
              (this.navigation = []),
              (this.teams = []),
              (this.count = 0),
              (this.loading = !1),
              (this.showNotifications = !1),
              (this.switchingTeam = !1),
              (this.reconnecting = !1),
              (this.updateAvailable = !1),
              (this.messageId = null),
              this.socket.connect();
            const Tt = this.auth.getCurrentSession();
            Tt && Q.s.setIdentity(Tt),
              (0, Z.T)(
                this.adminCenterService.onCreateTeam,
                this.adminCenterService.onTeamNameChange
              )
                .pipe((0, F.sL)())
                .subscribe((Ot) => {
                  this.getTeams();
                });
          }
          ngOnInit() {
            this.getTeams(),
              this.getNotificationSettings(),
              this.listeningForSocketEvents();
          }
          ngAfterViewInit() {
            var a = this;
            return (0, u.Z)(function* () {
              yield a.auth.authorize(), a.buildNavigation();
            })();
          }
          ngOnDestroy() {
            this.socket.disconnect();
          }
          reload() {
            window.location.reload();
          }
          listeningForSocketEvents() {
            this.socket.on("connect", () => {
              this.displayReconnectedMessage(),
                this.socket.emit(r.C.LOGIN.toString(), this.profile?.id),
                this.socket.once(r.C.LOGIN.toString(), () => {
                  this.socketService.emitSocketLoginSuccess();
                }),
                this.socketService.emitSocketConnect();
            }),
              this.socket.on("disconnect", () => {
                this.displayDisconnectedMessage(),
                  this.socket.emit(r.C.LOGOUT.toString(), this.profile?.id),
                  this.socketService.emitSocketDisconnect();
              }),
              this.socket.on(r.C.INVITATIONS_UPDATE.toString(), (a) => {
                this.getTeams();
              }),
              this.socket.on(r.C.TEAM_MEMBER_REMOVED.toString(), (a) => {
                a &&
                  (this.getTeams(),
                  this.profile?.team_id === a.teamId &&
                    this.modal.confirm({
                      nzTitle:
                        "You no longer have permissions to stay on this team!",
                      nzContent: a.message,
                      nzClosable: !1,
                      nzCancelDisabled: !0,
                      nzOnOk: () => this.reload(),
                    }));
              });
          }
          getTeams() {
            var a = this;
            return (0, u.Z)(function* () {
              try {
                a.loading = !0;
                const _ = yield a.api.get();
                _.done && (a.teams = _.body), (a.loading = !1);
              } catch (_) {
                (a.loading = !1), (0, w.tu)(_);
              }
            })();
          }
          buildNavigation() {
            const a = [];
            a.push({
              label: "Inicio",
              icon: "appstore",
              url: "home",
              type: P.MenuItem,
            }),
              a.push({
                label: "projects",
                icon: "project",
                url: "projects",
                type: P.MenuItem,
              }),
              (this.profile?.owner || this.profile?.is_admin) &&
                (a.push({
                  label: "Cronograma",
                  icon: "team",
                  url: "schedule",
                  type: P.MenuItem,
                }),
                a.push({
                  label: "Reportería",
                  icon: "team",
                  url: "reporting",
                  type: P.MenuItem,
                }),
                this.menu.isPinned(this.menu.CLIENTS_MENU) &&
                  a.push({
                    label: "Clients",
                    icon: "team",
                    url: "settings/clients",
                    type: P.MenuItem,
                  }),
                this.menu.isPinned(this.menu.JOB_TITLES_MENU) &&
                  a.push({
                    label: "Job Titles",
                    icon: "team",
                    url: "settings/job-titles",
                    type: P.MenuItem,
                  }),
                this.menu.isPinned(this.menu.TEAMS_MENU) &&
                  a.push({
                    label: "Teams",
                    icon: "team",
                    url: "settings/teams",
                    type: P.MenuItem,
                  }),
                this.menu.isPinned(this.menu.LABELS_MENU) &&
                  a.push({
                    label: "Labels",
                    icon: "tags",
                    url: "settings/labels",
                    type: P.MenuItem,
                  }),
                this.menu.isPinned(this.menu.TASK_STATUSES_MENU) &&
                  a.push({
                    label: "Task Statuses",
                    icon: "team",
                    url: "settings/statuses",
                    type: P.MenuItem,
                  })),
              (this.navigation = [...a]);
          }
          getNotificationSettings() {
            var a = this;
            return (0, u.Z)(function* () {
              try {
                const _ = yield a.settingsApi.getNotificationSettings();
                _.done && (a.notificationSettings.settings = _.body);
              } catch {}
            })();
          }
          displayReconnectedMessage() {
            this.messageId &&
              (this.message.remove(this.messageId),
              this.message.success("Connected to the server.", {
                nzDuration: 2e3,
              }),
              (this.messageId = null),
              this.checkForUpdates(),
              (this.reconnecting = !1));
          }
          checkForUpdates() {
            var a = this;
            return (0, u.Z)(function* () {
              yield a.auth.authorize();
              const _ = "worklenz-build-version",
                b = a.profile?.build_v || null,
                ht = localStorage.getItem(_);
              return null == ht && b
                ? (localStorage.setItem(_, b), (a.updateAvailable = !1), !1)
                : ((a.updateAvailable = !(!b || b === ht)),
                  a.updateAvailable && localStorage.setItem(_, b),
                  a.updateAvailable);
            })();
          }
          displayDisconnectedMessage() {
            this.reconnecting ||
              ((this.reconnecting = !0),
              this.message.error("You are disconnected from the server!", {
                nzDuration: 1500,
              }),
              (this.messageId = this.message.loading("Trying to reconnect...", {
                nzDuration: 0,
              }).messageId));
          }
        }
        return (
          ((c = U).ɵfac = function (a) {
            return new (a || c)(
              e.Y36(X.e),
              e.Y36(ot.S),
              e.Y36(lt.s),
              e.Y36(q.dD),
              e.Y36(mt.h),
              e.Y36(ut.Sf),
              e.Y36(H.$),
              e.Y36(k.G),
              e.Y36($.g),
              e.Y36(Y.F),
              e.Y36(N.I)
            );
          }),
          (c.ɵcmp = e.Xpm({
            type: c,
            selectors: [["worklenz-layout"]],
            hostBindings: function (a, _) {
              1 & a &&
                e.NdJ(
                  "worklenz.menu.update",
                  function () {
                    return _.buildNavigation();
                  },
                  !1,
                  e.evT
                )(
                  "worklenz.profile.avatar_change",
                  function () {
                    return _.checkForUpdates();
                  },
                  !1,
                  e.evT
                );
            },
            decls: 12,
            vars: 9,
            consts: [
              [3, "nzSpinning"],
              [3, "updateAvailable", "alerts"],
              [3, "profile", 4, "ngIf"],
              [1, "layout"],
              [
                "class",
                "d-flex",
                3,
                "teams",
                "profile",
                "navigation",
                "count",
                "showNotifications",
                "showNotificationsChange",
                4,
                "ngIf",
              ],
              [3, "nzAutoGenerate"],
              [1, "inner-content"],
              [3, "count", "show", "countChange", "showChange"],
              [3, "profile"],
              [
                1,
                "d-flex",
                3,
                "teams",
                "profile",
                "navigation",
                "count",
                "showNotifications",
                "showNotificationsChange",
              ],
            ],
            template: function (a, _) {
              1 & a &&
                (e.TgZ(0, "nz-spin", 0),
                e._UZ(1, "worklenz-alerts", 1),
                e.YNc(2, Ne, 1, 1, "worklenz-licensing-alerts", 2),
                e.TgZ(3, "nz-layout", 3)(4, "nz-header"),
                e.YNc(5, Pe, 1, 5, "worklenz-header", 4),
                e.qZA(),
                e.TgZ(6, "nz-layout")(7, "nz-content"),
                e._UZ(8, "nz-breadcrumb", 5),
                e.TgZ(9, "div", 6),
                e._UZ(10, "router-outlet"),
                e.qZA()()()()(),
                e.TgZ(11, "worklenz-notifications-drawer", 7),
                e.NdJ("countChange", function (ht) {
                  return (_.count = ht);
                })("showChange", function (ht) {
                  return (_.showNotifications = ht);
                }),
                e.qZA()),
                2 & a &&
                  (e.Q6J("nzSpinning", _.switchingTeam),
                  e.xp6(1),
                  e.Q6J("updateAvailable", _.updateAvailable)(
                    "alerts",
                    (null == _.profile ? null : _.profile.alerts) ||
                      e.DdM(8, Re)
                  ),
                  e.xp6(1),
                  e.Q6J("ngIf", _.profile),
                  e.xp6(3),
                  e.Q6J("ngIf", _.profile),
                  e.xp6(3),
                  e.Q6J("nzAutoGenerate", !0),
                  e.xp6(3),
                  e.Q6J("count", _.count)("show", _.showNotifications));
            },
            dependencies: [
              t.O5,
              l.lC,
              tt.W,
              L.hw,
              L.E8,
              L.OK,
              st.Dg,
              j,
              ue,
              Wt,
              we,
            ],
            styles: [
              '.layout[_ngcontent-%COMP%]{min-height:100vh}nz-content[_ngcontent-%COMP%]{margin-top:64px;background:#ffffff}.inner-content[_ngcontent-%COMP%]{background:#ffffff;min-height:380px;padding:0 24px 24px}.inner-content[_ngcontent-%COMP%]:has(.reporting-tab-module){padding:0 24px 0 0}nz-header[_ngcontent-%COMP%]{position:fixed;width:100vw;background:#FFFFFF;z-index:11}nz-header[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;right:0;top:100%;height:4px;background:linear-gradient(rgba(9,30,66,.13) 0px,rgba(9,30,66,.13) 1px,rgba(9,30,66,.08) 1px,rgba(9,30,66,0) 4px)}',
            ],
          })),
          U
        );
      })();
      var ze = o(59780);
      let Be = (() => {
        var c;
        class U {
          constructor(a, _) {
            (this.auth = a), (this.router = _);
          }
          canActivate(a, _) {
            return (
              !!this.auth.getCurrentSession()?.setup_completed ||
              this.router.navigate(["/worklenz/setup"])
            );
          }
        }
        return (
          ((c = U).ɵfac = function (a) {
            return new (a || c)(e.LFG(X.e), e.LFG(l.F0));
          }),
          (c.ɵprov = e.Yz7({ token: c, factory: c.ɵfac, providedIn: "root" })),
          U
        );
      })();
      var ye = o(65797);
      function Fe(c, U) {
        1 & c &&
          (e.TgZ(0, "div", 2)(1, "button", 3),
          e._uU(2, "Upgrade Now"),
          e.qZA()()),
          2 & c && e.Q6J("routerLink", "/worklenz/admin-center/billing");
      }
      let Ze = (() => {
          var c;
          class U {
            constructor(a, _) {
              (this.authService = a),
                (this.router = _),
                (this.title = "Your Worklenz trial has expired!"),
                (this.subtitle = "Please upgrade now.");
            }
            get profile() {
              return this.authService.getCurrentSession();
            }
            ngOnInit() {
              this.profile?.is_expired || this.router.navigate(["/worklenz"]);
            }
          }
          return (
            ((c = U).ɵfac = function (a) {
              return new (a || c)(e.Y36(X.e), e.Y36(l.F0));
            }),
            (c.ɵcmp = e.Xpm({
              type: c,
              selectors: [["worklenz-license-expired"]],
              decls: 2,
              vars: 3,
              consts: [
                ["nzStatus", "warning", 3, "nzTitle", "nzSubTitle"],
                ["nz-result-extra", "", 3, "routerLink", 4, "ngIf"],
                ["nz-result-extra", "", 3, "routerLink"],
                ["nz-button", "", "nzType", "primary"],
              ],
              template: function (a, _) {
                1 & a &&
                  (e.TgZ(0, "nz-result", 0),
                  e.YNc(1, Fe, 3, 1, "div", 1),
                  e.qZA()),
                  2 & a &&
                    (e.Q6J("nzTitle", _.title)("nzSubTitle", _.subtitle),
                    e.xp6(1),
                    e.Q6J("ngIf", null == _.profile ? null : _.profile.owner));
              },
              dependencies: [t.O5, l.rH, et.ix, W.w, R.dQ, ye.ml, ye.ey],
            })),
            U
          );
        })(),
        ke = (() => {
          var c;
          class U {
            constructor(a, _) {
              (this.auth = a), (this.router = _);
            }
            canActivate(a, _) {
              return (
                !this.auth.isExpired() ||
                this.router.navigate(["/worklenz/license-expired"])
              );
            }
          }
          return (
            ((c = U).ɵfac = function (a) {
              return new (a || c)(e.LFG(X.e), e.LFG(l.F0));
            }),
            (c.ɵprov = e.Yz7({
              token: c,
              factory: c.ɵfac,
              providedIn: "root",
            })),
            U
          );
        })();
      const me = (c, U) => (0, e.f3M)(ke).canActivate(c, U),
        Ye = [
          {
            path: "",
            component: Le,
            canActivate: [(c, U) => (0, e.f3M)(Be).canActivate(c, U)],
            children: [
              { path: "", redirectTo: "home", pathMatch: "full" },
              { path: "dashboard", redirectTo: "home", pathMatch: "full" },
              {
                path: "home",
                canActivate: [me],
                loadChildren: () =>
                  Promise.all([
                    o.e(215),
                    o.e(140),
                    o.e(422),
                    o.e(406),
                    o.e(570),
                    o.e(453),
                  ])
                    .then(o.bind(o, 99028))
                    .then((c) => c.MyDashboardModule),
              },
              {
                path: "projects",
                canActivate: [ze.T, me],
                loadChildren: () =>
                  Promise.all([
                    o.e(215),
                    o.e(140),
                    o.e(422),
                    o.e(771),
                    o.e(406),
                    o.e(148),
                    o.e(570),
                    o.e(217),
                    o.e(152),
                  ])
                    .then(o.bind(o, 79152))
                    .then((c) => c.ProjectsModule),
              },
              {
                path: "settings",
                canActivate: [me],
                loadChildren: () =>
                  Promise.all([o.e(215), o.e(140), o.e(422), o.e(150)])
                    .then(o.bind(o, 16150))
                    .then((c) => c.SettingsModule),
              },
              {
                path: "schedule",
                canActivate: [ze.T, me],
                loadChildren: () =>
                  Promise.all([
                    o.e(215),
                    o.e(140),
                    o.e(422),
                    o.e(217),
                    o.e(265),
                  ])
                    .then(o.bind(o, 68265))
                    .then((c) => c.ScheduleModule),
              },
              {
                path: "reporting",
                canActivate: [ze.T, me],
                loadChildren: () =>
                  Promise.all([
                    o.e(215),
                    o.e(140),
                    o.e(422),
                    o.e(148),
                    o.e(921),
                  ])
                    .then(o.bind(o, 91921))
                    .then((c) => c.ReportingModule),
              },
              {
                path: "admin-center",
                canActivate: [ze.T],
                loadChildren: () =>
                  Promise.all([o.e(215), o.e(140), o.e(269)])
                    .then(o.bind(o, 44269))
                    .then((c) => c.AdminCenterModule),
              },
              { path: "license-expired", component: Ze },
            ],
          },
          {
            path: "setup",
            loadChildren: () =>
              Promise.all([o.e(215), o.e(406), o.e(457)])
                .then(o.bind(o, 43791))
                .then((c) => c.AccountSetupModule),
          },
        ];
      let Je = (() => {
        var c;
        class U {}
        return (
          ((c = U).ɵfac = function (a) {
            return new (a || c)();
          }),
          (c.ɵmod = e.oAB({ type: c })),
          (c.ɵinj = e.cJS({ imports: [l.Bz.forChild(Ye), l.Bz] })),
          U
        );
      })();
      var Qe = o(66987),
        We = o(70532),
        He = o(16976);
      let Ve = (() => {
        var c;
        class U {}
        return (
          ((c = U).ɵfac = function (a) {
            return new (a || c)();
          }),
          (c.ɵmod = e.oAB({ type: c })),
          (c.ɵinj = e.cJS({
            imports: [
              t.ez,
              Je,
              n.u5,
              n.UX,
              tt.j,
              nt.j,
              J.L,
              L.wm,
              K.ip,
              it.ZJ,
              M.cg,
              m.b1,
              O.PV,
              y.mS,
              I.Rt,
              st.lt,
              wt.BL,
              Nt.Xo,
              q.Yx,
              Et.zf,
              et.sL,
              Pt.X,
              Gt.KW,
              Qe.S,
              Rt.H0,
              We.N7,
              ye.XD,
              He.Ph,
              g.S,
            ],
          })),
          U
        );
      })();
    },
    72095: (gt, rt, o) => {
      o.d(rt, { S: () => pt });
      var t = o(15861),
        n = o(65879),
        l = o(60095),
        u = o(69649),
        P = o(21406),
        r = o(9691),
        w = o(43389),
        Q = o(82669),
        F = o(20824),
        Z = o(96814),
        e = o(95717),
        X = o(3599),
        ot = o(62595),
        lt = o(3278),
        q = o(10095);
      function mt(K, it) {
        1 & K &&
          (n.TgZ(0, "nz-auto-option"),
          n._UZ(1, "span", 5),
          n._uU(2, " Loading Data... "),
          n.qZA());
      }
      function ut(K, it) {
        if (
          (1 & K && (n.TgZ(0, "nz-auto-option", 8), n._uU(1), n.qZA()), 2 & K)
        ) {
          const M = n.oxw(2);
          n.s9C("nzValue", M.newTitle),
            n.xp6(1),
            n.hij('+ ADD "', M.newTitle, '"');
        }
      }
      function H(K, it) {
        if (
          (1 & K && (n.TgZ(0, "nz-auto-option", 8), n._uU(1), n.qZA()), 2 & K)
        ) {
          const M = it.$implicit;
          n.Q6J("nzValue", M.name), n.xp6(1), n.Oqu(M.name);
        }
      }
      function k(K, it) {
        if (
          (1 & K &&
            (n.TgZ(0, "span"),
            n.YNc(1, ut, 2, 2, "nz-auto-option", 6),
            n.YNc(2, H, 2, 2, "nz-auto-option", 7),
            n.qZA()),
          2 & K)
        ) {
          const M = n.oxw();
          n.xp6(1),
            n.Q6J("ngIf", M.isNew),
            n.xp6(1),
            n.Q6J("ngForOf", M.jobTitles);
        }
      }
      let $ = (() => {
        var K;
        class it {
          constructor(m, O) {
            (this.api = m),
              (this.fb = O),
              (this.titleChange = new n.vpe()),
              (this.title = null),
              (this.placeholder = "Job Title"),
              (this.loading = !1),
              (this.loadingChange = new n.vpe()),
              (this.searching = !1),
              (this.isNew = !1),
              (this.newTitle = null),
              (this.jobTitles = []),
              (this.total = 0),
              (this.form = this.fb.group({ name: [null] }));
          }
          ngOnInit() {
            var m = this;
            return (0, t.Z)(function* () {
              m.form.controls.name.setValue(m.title || null),
                m.form.get("name")?.valueChanges.subscribe((O) => {
                  if (O)
                    return (
                      (m.newTitle = O),
                      void (m.isNew = !m.jobTitles.some((y) => y.name === O))
                    );
                  m.isNew = !1;
                }),
                m.get();
            })();
          }
          get() {
            var m = this;
            return (0, t.Z)(function* () {
              try {
                m.setLoading(!0);
                const O = yield m.api.get(
                  1,
                  5,
                  null,
                  null,
                  m.form.value.name || null
                );
                O.done &&
                  ((m.jobTitles = O.body.data || []),
                  (m.total = m.jobTitles.length)),
                  m.setLoading(!1);
              } catch (O) {
                m.setLoading(!1), (0, u.tu)(O);
              }
            })();
          }
          search() {
            var m = this;
            return (0, t.Z)(function* () {
              m.emitChange(),
                (m.searching = !0),
                yield m.get(),
                (m.searching = !1);
            })();
          }
          setLoading(m) {
            (this.loading = m), this.loadingChange.emit(this.loading);
          }
          emitChange() {
            this.form.valid &&
              this.titleChange.emit(this.form.value.name.trim());
          }
        }
        return (
          ((K = it).ɵfac = function (m) {
            return new (m || K)(n.Y36(lt.i), n.Y36(l.qu));
          }),
          (K.ɵcmp = n.Xpm({
            type: K,
            selectors: [["worklenz-job-titles-autocomplete"]],
            inputs: {
              title: "title",
              placeholder: "placeholder",
              loading: "loading",
            },
            outputs: {
              titleChange: "titleChange",
              loadingChange: "loadingChange",
            },
            standalone: !0,
            features: [n.jDz],
            decls: 10,
            vars: 9,
            consts: [
              ["nz-form", "", 3, "formGroup", "nzLayout"],
              [3, "nzSpan"],
              [
                "nz-input",
                "",
                3,
                "formControlName",
                "nzAutocomplete",
                "placeholder",
                "ngModelChange",
              ],
              ["jobTitlesAutoComplete", ""],
              [4, "ngIf"],
              ["nz-icon", "", "nzType", "loading", 1, "loading-icon"],
              [3, "nzValue", 4, "ngIf"],
              [3, "nzValue", 4, "ngFor", "ngForOf"],
              [3, "nzValue"],
            ],
            template: function (m, O) {
              if (
                (1 & m &&
                  (n.TgZ(0, "form", 0)(1, "nz-form-item")(
                    2,
                    "nz-form-label",
                    1
                  ),
                  n._uU(3, "Job Title"),
                  n.qZA(),
                  n.TgZ(4, "nz-form-control", 1)(5, "input", 2),
                  n.NdJ("ngModelChange", function () {
                    return O.search();
                  }),
                  n.qZA(),
                  n.TgZ(6, "nz-autocomplete", null, 3),
                  n.YNc(8, mt, 3, 0, "nz-auto-option", 4),
                  n.YNc(9, k, 3, 2, "span", 4),
                  n.qZA()()()()),
                2 & m)
              ) {
                const y = n.MAs(7);
                n.Q6J("formGroup", O.form)("nzLayout", "vertical"),
                  n.xp6(2),
                  n.Q6J("nzSpan", null),
                  n.xp6(2),
                  n.Q6J("nzSpan", null),
                  n.xp6(1),
                  n.Q6J("formControlName", "name")("nzAutocomplete", y)(
                    "placeholder",
                    O.placeholder
                  ),
                  n.xp6(3),
                  n.Q6J("ngIf", O.searching),
                  n.xp6(1),
                  n.Q6J("ngIf", !O.searching);
              }
            },
            dependencies: [
              F.o7,
              F.Zp,
              Z.O5,
              l.UX,
              l._Y,
              l.Fj,
              l.JJ,
              l.JL,
              l.sg,
              l.u,
              Z.sg,
              e.ic,
              e.gi,
              e.NB,
              e.Pf,
              X.U5,
              q.t3,
              q.SK,
              X.Lr,
              X.Nx,
              X.iK,
              X.Fd,
              ot.PV,
              ot.Ls,
            ],
          })),
          it
        );
      })();
      var Y = o(96928),
        N = o(8083),
        tt = o(42840),
        L = o(96109),
        st = o(34302),
        nt = o(45538),
        J = o(90586),
        et = o(32333),
        W = o(70855),
        R = o(41958);
      function v(K, it) {
        if (
          (1 & K &&
            (n.TgZ(0, "nz-form-item")(1, "nz-form-label", 17),
            n._uU(2, " Email(s) "),
            n.qZA(),
            n.TgZ(3, "nz-form-control", 18),
            n._UZ(4, "nz-select", 19),
            n.qZA()()),
          2 & K)
        ) {
          n.oxw();
          const M = n.MAs(5),
            m = n.oxw();
          n.xp6(1),
            n.Q6J("nzSpan", null)(
              "nzTooltipTitle",
              m.model.email && m.memberId ? "Email cannot be changed." : ""
            ),
            n.xp6(2),
            n.Q6J("nzSpan", null)("nzExtra", M),
            n.xp6(1),
            n.Q6J(
              "nzNotFoundContent",
              "Type an email address and hit enter..."
            )("nzPlaceHolder", "Add team members by email")(
              "formControlName",
              "email"
            );
        }
      }
      function T(K, it) {
        1 & K &&
          (n.TgZ(0, "span", 20),
          n._uU(
            1,
            " Invitees will be added to the team either they accept the invitation or not. "
          ),
          n.qZA());
      }
      function S(K, it) {
        if (1 & K) {
          const M = n.EpF();
          n.TgZ(0, "worklenz-job-titles-autocomplete", 21),
            n.NdJ("loadingChange", function (O) {
              n.CHM(M);
              const y = n.oxw(2);
              return n.KtG((y.jobTitlesLoading = O));
            })("titleChange", function (O) {
              n.CHM(M);
              const y = n.oxw(2);
              return n.KtG((y.jobTitle = O));
            }),
            n.qZA();
        }
        if (2 & K) {
          const M = n.oxw(2);
          n.Q6J("title", M.jobTitle)(
            "placeholder",
            "Select the job title (Optional)"
          );
        }
      }
      function x(K, it) {
        if (1 & K) {
          const M = n.EpF();
          n.TgZ(0, "button", 22),
            n.NdJ("click", function () {
              n.CHM(M);
              const O = n.oxw(2);
              return n.KtG(O.resendInvitation());
            }),
            n._uU(1, "Resend invitation "),
            n.qZA();
        }
        if (2 & K) {
          const M = n.oxw(2);
          n.Q6J("disabled", M.loading || M.resending);
        }
      }
      function h(K, it) {
        if (
          (1 & K &&
            (n.TgZ(0, "p", 23)(1, "small", 24),
            n.ALo(2, "date"),
            n._uU(3),
            n.ALo(4, "fromNow"),
            n.qZA()()),
          2 & K)
        ) {
          const M = n.oxw(2);
          n.xp6(1),
            n.s9C("nzTooltipTitle", n.xi3(2, 2, M.model.created_at, "medium")),
            n.xp6(2),
            n.hij(" Added ", n.lcZ(4, 5, M.model.created_at), " ");
        }
      }
      function G(K, it) {
        if (
          (1 & K &&
            (n.TgZ(0, "p", 25)(1, "small", 24),
            n.ALo(2, "date"),
            n._uU(3),
            n.ALo(4, "fromNow"),
            n.qZA()()),
          2 & K)
        ) {
          const M = n.oxw(2);
          n.xp6(1),
            n.s9C("nzTooltipTitle", n.xi3(2, 2, M.model.updated_at, "medium")),
            n.xp6(2),
            n.hij(" Updated ", n.lcZ(4, 5, M.model.updated_at), " ");
        }
      }
      function j(K, it) {
        if (1 & K) {
          const M = n.EpF();
          n.ynx(0),
            n.TgZ(1, "nz-spin", 3)(2, "form", 4),
            n.NdJ("submit", function () {
              n.CHM(M);
              const O = n.oxw();
              return n.KtG(O.handleOk());
            }),
            n.YNc(3, v, 5, 7, "nz-form-item", 5),
            n.YNc(4, T, 2, 0, "ng-template", null, 6, n.W1O),
            n.YNc(6, S, 1, 2, "worklenz-job-titles-autocomplete", 7),
            n.TgZ(7, "nz-form-item")(8, "nz-form-label", 8),
            n._uU(9, "Access "),
            n.qZA(),
            n.TgZ(10, "nz-form-control", 9)(11, "nz-select", 10),
            n._UZ(12, "nz-option", 11)(13, "nz-option", 12),
            n.qZA()()(),
            n.TgZ(14, "button", 13),
            n._uU(15),
            n.qZA(),
            n.YNc(16, x, 2, 1, "button", 14),
            n.YNc(17, h, 5, 7, "p", 15),
            n.YNc(18, G, 5, 7, "p", 16),
            n.qZA()(),
            n.BQk();
        }
        if (2 & K) {
          const M = n.oxw();
          n.xp6(1),
            n.Q6J("nzSpinning", M.isLoading()),
            n.xp6(1),
            n.Q6J("formGroup", M.form)("nzLayout", "vertical"),
            n.xp6(1),
            n.Q6J("ngIf", !M.memberId),
            n.xp6(3),
            n.Q6J("ngIf", M.canDisplayTitles()),
            n.xp6(2),
            n.Q6J("nzSpan", null)(
              "nzTooltipTitle",
              M.isOwnAccount()
                ? "You cannot change your permissions. Ask owner to update it."
                : ""
            ),
            n.xp6(2),
            n.Q6J("nzSpan", null),
            n.xp6(1),
            n.Q6J("formControlName", "access"),
            n.xp6(3),
            n.Q6J("nzLoading", M.loading),
            n.xp6(1),
            n.Oqu(M.okButtonText),
            n.xp6(1),
            n.Q6J("ngIf", M.isResendAvailable()),
            n.xp6(1),
            n.Q6J("ngIf", M.isEditMember() && M.model.created_at),
            n.xp6(1),
            n.Q6J(
              "ngIf",
              M.isEditMember() && (null == M.model ? null : M.model.updated_at)
            );
        }
      }
      function D(K, it) {
        if ((1 & K && n._UZ(0, "nz-avatar", 30), 2 & K)) {
          const M = n.oxw(2);
          n.Udp("background-color", M.getColor(M.model.name)),
            n.Q6J("nzSize", 28)("nzText", M.model.name.charAt(0).toUpperCase())(
              "nzSrc",
              M.model.avatar_url
            );
        }
      }
      function V(K, it) {
        if (
          (1 & K &&
            (n.TgZ(0, "div", 26),
            n.YNc(1, D, 1, 5, "nz-avatar", 27),
            n.TgZ(2, "div")(3, "span", 28),
            n._uU(4),
            n.qZA(),
            n.TgZ(5, "small", 29),
            n._uU(6),
            n.qZA()()()),
          2 & K)
        ) {
          const M = n.oxw();
          n.xp6(1),
            n.Q6J("ngIf", M.model.name),
            n.xp6(3),
            n.Oqu(M.title),
            n.xp6(2),
            n.Oqu(M.model.email);
        }
      }
      let pt = (() => {
        var K;
        class it {
          constructor(m, O, y, I) {
            (this.api = m),
              (this.fb = O),
              (this.app = y),
              (this.auth = I),
              (this.model = {}),
              (this.memberId = null),
              (this.show = !1),
              (this.showChange = new n.vpe()),
              (this.onCreateOrUpdate = new n.vpe()),
              (this.onCancel = new n.vpe()),
              (this.jobTitle = null),
              (this.loading = !0),
              (this.jobTitlesLoading = !1),
              (this.resending = !1),
              (this.resentSuccess = !1),
              (this.form = this.fb.group({
                email: [null, l.kI.required],
                access: ["member", l.kI.required],
              }));
          }
          get title() {
            return this.isEditMember()
              ? this.model.name || "Edit Member"
              : "Add Member";
          }
          get okButtonText() {
            return this.isEditMember() ? "Update" : "Add to team";
          }
          get email() {
            return this.form.value.email;
          }
          isOwnAccount() {
            return this.auth.getCurrentSession()?.email === this.model.email;
          }
          getColor(m) {
            return P.Lj[m?.charAt(0).toUpperCase() || "A"];
          }
          getTeamMember() {
            var m = this;
            return (0, t.Z)(function* () {
              if (m.memberId)
                try {
                  m.loading = !0;
                  const O = yield m.api.getById(m.memberId);
                  O.done &&
                    ((m.model = O.body),
                    m.form.patchValue(O.body),
                    m.form.controls.access.setValue(
                      O.body.is_admin ? "admin" : "member"
                    ),
                    m.model.email && m.form.controls.email.disable(),
                    m.isOwnAccount() && m.form.controls.access.disable(),
                    (m.jobTitle = O.body.job_title)),
                    (m.loading = !1);
                } catch (O) {
                  (0, u.tu)(O), (m.loading = !1);
                }
              else m.loading = !1;
            })();
          }
          init() {
            this.form.reset(),
              this.form.controls.email.enable(),
              this.form.controls.access.enable(),
              this.form.controls.access.setValue("member"),
              (this.model = {}),
              this.getTeamMember();
          }
          handleCancel() {
            this.reset(), this.onCancel.emit();
          }
          isEditMember() {
            return !!this.memberId;
          }
          handleOk() {
            var m = this;
            return (0, t.Z)(function* () {
              m.isEditMember()
                ? yield m.updateMember()
                : yield m.createMember();
            })();
          }
          isLoading() {
            return this.loading;
          }
          visibilityChange(m) {
            m && this.init();
          }
          canDisplayTitles() {
            return !this.isEditMember() || !this.loading;
          }
          resendInvitation() {
            var m = this;
            return (0, t.Z)(function* () {
              if (m.memberId && !m.resending)
                try {
                  (m.resending = !0),
                    (yield m.api.resendInvitation(m.memberId)).done &&
                      (m.resentSuccess = !0),
                    (m.resending = !1);
                } catch (O) {
                  (0, u.tu)(O), (m.resending = !1);
                }
            })();
          }
          isResendAvailable() {
            return (
              this.model.pending_invitation &&
              this.memberId &&
              !this.resentSuccess
            );
          }
          isAdmin() {
            return "admin" === this.form.value.access;
          }
          reset() {
            this.form.reset(),
              (this.show = !1),
              (this.jobTitle = null),
              (this.loading = !0),
              this.showChange?.emit(this.show);
          }
          updateMember() {
            var m = this;
            return (0, t.Z)(function* () {
              if (m.memberId)
                if (
                  ((m.form.value.is_admin = !!m.form.value.is_admin),
                  m.form.valid)
                )
                  try {
                    m.loading = !0;
                    const O = {
                      job_title: m.jobTitle,
                      emails: m.form.controls.email.value,
                      is_admin: m.isAdmin(),
                    };
                    (yield m.api.update(m.memberId, O)).done &&
                      (m.reset(), m.onCreateOrUpdate?.emit(0)),
                      (m.loading = !1);
                  } catch (O) {
                    (0, u.tu)(O), (m.loading = !1);
                  }
                else m.app.displayErrorsOf(m.form);
            })();
          }
          createMember() {
            var m = this;
            return (0, t.Z)(function* () {
              if (
                ((m.form.value.is_admin = !!m.form.value.is_admin),
                m.form.valid)
              )
                try {
                  m.loading = !0;
                  const O = {
                    job_title: m.jobTitle,
                    emails: m.form.controls.email.value,
                    is_admin: m.isAdmin(),
                  };
                  (yield m.api.create(O)).done &&
                    (m.reset(), m.onCreateOrUpdate?.emit(1)),
                    (m.loading = !1);
                } catch (O) {
                  (0, u.tu)(O), (m.loading = !1);
                }
              else m.app.displayErrorsOf(m.form);
            })();
          }
        }
        return (
          ((K = it).ɵfac = function (m) {
            return new (m || K)(
              n.Y36(nt.B),
              n.Y36(l.qu),
              n.Y36(J.z),
              n.Y36(et.e)
            );
          }),
          (K.ɵcmp = n.Xpm({
            type: K,
            selectors: [["worklenz-team-members-form"]],
            inputs: { memberId: "memberId", show: "show" },
            outputs: {
              showChange: "showChange",
              onCreateOrUpdate: "onCreateOrUpdate",
              onCancel: "onCancel",
            },
            standalone: !0,
            features: [n.jDz],
            decls: 4,
            vars: 4,
            consts: [
              [
                3,
                "nzVisible",
                "nzClosable",
                "nzTitle",
                "nzPlacement",
                "nzOnClose",
                "nzVisibleChange",
              ],
              [4, "nzDrawerContent"],
              ["titleTemplate", ""],
              [3, "nzSpinning"],
              ["nz-form", "", 3, "formGroup", "nzLayout", "submit"],
              [4, "ngIf"],
              ["emailsNote", ""],
              [
                3,
                "title",
                "placeholder",
                "loadingChange",
                "titleChange",
                4,
                "ngIf",
              ],
              [
                "nz-tooltip",
                "",
                "nzRequired",
                "",
                3,
                "nzSpan",
                "nzTooltipTitle",
              ],
              [3, "nzSpan"],
              [3, "formControlName"],
              ["nzValue", "admin", "nzLabel", "Admin"],
              ["nzValue", "member", "nzLabel", "Member"],
              [
                "nz-button",
                "",
                "nzBlock",
                "",
                "nzType",
                "primary",
                "type",
                "submit",
                3,
                "nzLoading",
              ],
              [
                "nz-button",
                "",
                "nzBlock",
                "",
                "nzType",
                "dashed",
                "class",
                "mt-2",
                "type",
                "button",
                3,
                "disabled",
                "click",
                4,
                "ngIf",
              ],
              [
                "class",
                "mb-0 mt-3",
                "nz-typography",
                "",
                "nzType",
                "secondary",
                4,
                "ngIf",
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
              ["nzRequired", "", 3, "nzSpan", "nzTooltipTitle"],
              [3, "nzSpan", "nzExtra"],
              [
                "nzMode",
                "tags",
                3,
                "nzNotFoundContent",
                "nzPlaceHolder",
                "formControlName",
              ],
              [
                "nz-typography",
                "",
                "nzType",
                "secondary",
                2,
                "font-size",
                "12px",
              ],
              [3, "title", "placeholder", "loadingChange", "titleChange"],
              [
                "nz-button",
                "",
                "nzBlock",
                "",
                "nzType",
                "dashed",
                "type",
                "button",
                1,
                "mt-2",
                3,
                "disabled",
                "click",
              ],
              ["nz-typography", "", "nzType", "secondary", 1, "mb-0", "mt-3"],
              [
                "nz-tooltip",
                "",
                "nzTooltipPlacement",
                "right",
                3,
                "nzTooltipTitle",
              ],
              ["nz-typography", "", "nzType", "secondary", 1, "mb-0"],
              [1, "d-flex", "align-items-center"],
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
              [1, "d-block"],
              ["nz-typography", "", "nzType", "secondary"],
              [1, "me-2", 3, "nzSize", "nzText", "nzSrc"],
            ],
            template: function (m, O) {
              if (
                (1 & m &&
                  (n.TgZ(0, "nz-drawer", 0),
                  n.NdJ("nzOnClose", function () {
                    return O.handleCancel();
                  })("nzVisibleChange", function (I) {
                    return (O.show = I);
                  })("nzVisibleChange", function (I) {
                    return O.visibilityChange(I);
                  }),
                  n.YNc(1, j, 19, 14, "ng-container", 1),
                  n.qZA(),
                  n.YNc(2, V, 7, 3, "ng-template", null, 2, n.W1O)),
                2 & m)
              ) {
                const y = n.MAs(3);
                n.Q6J("nzVisible", O.show)("nzClosable", !0)("nzTitle", y)(
                  "nzPlacement",
                  "right"
                );
              }
            },
            dependencies: [
              r.LV,
              r.Ip,
              r.Vq,
              w.BL,
              w.Vz,
              w.SQ,
              Q.j,
              Q.W,
              $,
              Y.Rt,
              Y.Dz,
              N.ZJ,
              N.ZU,
              tt.sL,
              tt.ix,
              W.w,
              R.dQ,
              L.cg,
              L.SY,
              Z.O5,
              X.U5,
              q.t3,
              q.SK,
              X.Lr,
              X.Nx,
              X.iK,
              X.Fd,
              l.UX,
              l._Y,
              l.JJ,
              l.JL,
              l.sg,
              l.u,
              st.d,
              Z.uU,
            ],
          })),
          it
        );
      })();
    },
    8689: (gt, rt, o) => {
      o.d(rt, { g: () => l });
      var t = o(78645),
        n = o(65879);
      let l = (() => {
        var u;
        class P {
          constructor() {
            this.newMemberCreatedSbj$ = new t.x();
          }
          get onNewMemberCreated() {
            return this.newMemberCreatedSbj$.asObservable();
          }
          emitNewMemberCreated() {
            this.newMemberCreatedSbj$.next();
          }
        }
        return (
          ((u = P).ɵfac = function (w) {
            return new (w || u)();
          }),
          (u.ɵprov = n.Yz7({ token: u, factory: u.ɵfac, providedIn: "root" })),
          P
        );
      })();
    },
    59780: (gt, rt, o) => {
      o.d(rt, { T: () => P });
      var t = o(65879),
        n = o(32333),
        l = o(35420);
      let u = (() => {
        var r;
        class w {
          constructor(F, Z) {
            (this.auth = F), (this.router = Z);
          }
          canActivate(F, Z) {
            const e = "projects" === F.routeConfig?.path;
            return (
              !!(
                this.auth.getCurrentSession()?.owner ||
                this.auth.getCurrentSession()?.is_admin ||
                e
              ) || this.router.navigate(["/worklenz"])
            );
          }
        }
        return (
          ((r = w).ɵfac = function (F) {
            return new (F || r)(t.LFG(n.e), t.LFG(l.F0));
          }),
          (r.ɵprov = t.Yz7({ token: r, factory: r.ɵfac, providedIn: "root" })),
          w
        );
      })();
      const P = (r, w) => (0, t.f3M)(u).canActivate(r, w);
    },
    34302: (gt, rt, o) => {
      o.d(rt, { d: () => u });
      var t = o(16676),
        n = o.n(t),
        l = o(65879);
      let u = (() => {
        var P;
        class r {
          transform(Q) {
            return Q && n()(Q).fromNow();
          }
        }
        return (
          ((P = r).ɵfac = function (Q) {
            return new (Q || P)();
          }),
          (P.ɵpipe = l.Yjl({
            name: "fromNow",
            type: P,
            pure: !0,
            standalone: !0,
          })),
          r
        );
      })();
    },
    3278: (gt, rt, o) => {
      o.d(rt, { i: () => r });
      var t = o(10708),
        n = o(26857),
        l = o(69649),
        u = o(65879),
        P = o(69862);
      let r = (() => {
        var w;
        class Q extends n.P {
          constructor(Z) {
            super(),
              (this.http = Z),
              (this.root = `${this.API_BASE_URL}/job-titles`);
          }
          create(Z) {
            return this._post(this.http, this.root, Z);
          }
          get(Z, e, X, ot, lt) {
            const q = encodeURIComponent(lt || ""),
              mt = `${this.root}${(0, l.UK)({
                index: Z,
                size: e,
                field: X,
                order: ot,
                search: q,
              })}`;
            return this._get(this.http, mt);
          }
          getById(Z) {
            return this._get(this.http, `${this.root}/${Z}`);
          }
          update(Z, e) {
            return this._put(this.http, `${this.root}/${Z}`, e);
          }
          delete(Z) {
            return (0, t.n)(this.http.delete(`${this.root}/${Z}`));
          }
        }
        return (
          ((w = Q).ɵfac = function (Z) {
            return new (Z || w)(u.LFG(P.eN));
          }),
          (w.ɵprov = u.Yz7({ token: w, factory: w.ɵfac, providedIn: "root" })),
          Q
        );
      })();
    },
    16849: (gt, rt, o) => {
      o.d(rt, { G: () => u });
      var t = o(26857),
        n = o(65879),
        l = o(69862);
      let u = (() => {
        var P;
        class r extends t.P {
          constructor(Q) {
            super(),
              (this.http = Q),
              (this.root = `${this.API_BASE_URL}/settings`);
          }
          get() {
            return this._get(this.http, `${this.root}/profile`);
          }
          update(Q) {
            return this._put(this.http, `${this.root}/profile`, Q);
          }
          getNotificationSettings() {
            return this._get(this.http, `${this.root}/notifications`);
          }
          updateNotificationSettings(Q) {
            return this._put(this.http, `${this.root}/notifications`, Q);
          }
          setupAccount(Q) {
            return this._post(this.http, `${this.root}/setup`, Q);
          }
          updateTeamName(Q, F) {
            return this._put(this.http, `${this.root}/team-name/${Q}`, F);
          }
        }
        return (
          ((P = r).ɵfac = function (Q) {
            return new (Q || P)(n.LFG(l.eN));
          }),
          (P.ɵprov = n.Yz7({ token: P, factory: P.ɵfac, providedIn: "root" })),
          r
        );
      })();
    },
    45538: (gt, rt, o) => {
      o.d(rt, { B: () => r });
      var t = o(10708),
        n = o(26857),
        l = o(69649),
        u = o(65879),
        P = o(69862);
      let r = (() => {
        var w;
        class Q extends n.P {
          constructor(Z) {
            super(),
              (this.http = Z),
              (this.root = `${this.API_BASE_URL}/team-members`);
          }
          create(Z) {
            return this._post(this.http, this.root, Z);
          }
          get(Z, e, X, ot, lt, q = !1) {
            const mt = encodeURIComponent(lt || ""),
              ut = `${this.root}${(0, l.UK)({
                index: Z,
                size: e,
                field: X,
                order: ot,
                search: mt,
                all: q,
              })}`;
            return this._get(this.http, ut);
          }
          getById(Z) {
            return this._get(this.http, `${this.root}/${Z}`);
          }
          getAll(Z = null) {
            const e = (0, l.UK)({ project: Z });
            return this._get(this.http, `${this.root}/all${e}`);
          }
          update(Z, e) {
            return this._put(this.http, `${this.root}/${Z}`, e);
          }
          delete(Z, e) {
            const X = (0, l.UK)({ email: e });
            return (0, t.n)(this.http.delete(`${this.root}/${Z}${X}`));
          }
          getTeamMembersByProjectId(Z) {
            return this._get(this.http, `${this.root}/project/${Z}`);
          }
          resendInvitation(Z) {
            return this._put(this.http, `${this.root}/resend-invitation`, {
              id: Z,
            });
          }
          toggleMemberActiveStatus(Z, e, X) {
            const ot = (0, l.UK)({ active: e, email: X });
            return this._get(this.http, `${this.root}/deactivate/${Z}${ot}`);
          }
          addTeamMember(Z, e) {
            return this._put(this.http, `${this.root}/add-member/${Z}`, e);
          }
        }
        return (
          ((w = Q).ɵfac = function (Z) {
            return new (Z || w)(u.LFG(P.eN));
          }),
          (w.ɵprov = u.Yz7({ token: w, factory: w.ɵfac, providedIn: "root" })),
          Q
        );
      })();
    },
    83916: (gt, rt, o) => {
      o.d(rt, { S: () => P });
      var t = o(26857),
        n = o(10708),
        l = o(65879),
        u = o(69862);
      let P = (() => {
        var r;
        class w extends t.P {
          constructor(F) {
            super(),
              (this.http = F),
              (this.root = `${this.API_BASE_URL}/teams`);
          }
          create(F) {
            return this._post(this.http, this.root, F);
          }
          get() {
            return this._get(this.http, this.root);
          }
          getInvites() {
            return this._get(this.http, `${this.root}/invites`);
          }
          getById(F) {
            return this._get(this.http, `${this.root}/${F}`);
          }
          update(F, Z) {
            return this._put(this.http, `${this.root}/${F}`, Z);
          }
          setName(F) {
            return this._put(this.http, `${this.root}/pik-name`, { name: F });
          }
          activate(F) {
            return this._put(this.http, `${this.root}/activate`, { id: F });
          }
          accept(F) {
            return this._put(this.http, this.root, F);
          }
          delete(F) {
            return (0, n.n)(this.http.delete(`${this.root}/${F}`));
          }
        }
        return (
          ((r = w).ɵfac = function (F) {
            return new (F || r)(l.LFG(u.eN));
          }),
          (r.ɵprov = l.Yz7({ token: r, factory: r.ɵfac, providedIn: "root" })),
          w
        );
      })();
    },
    72042: (gt, rt, o) => {
      o.d(rt, { h: () => l });
      var t = o(59556),
        n = o(65879);
      let l = (() => {
        var u;
        class P {
          constructor() {
            (this.CLIENTS_MENU = "clients"),
              (this.JOB_TITLES_MENU = "job-titles"),
              (this.TEAMS_MENU = "teams"),
              (this.LABELS_MENU = "labels"),
              (this.TASK_STATUSES_MENU = "task-statuses"),
              (this.prefix = "worklenz.pinned-tab"),
              (this.TASK_TEMPLATES_MENU = "task-templates");
          }
          isPinned(w) {
            return !!localStorage.getItem(`${this.prefix}.${w}`);
          }
          toggle(w) {
            this.isPinned(w) ? this.unpin(w) : this.pin(w), (0, t.IR)();
          }
          pin(w) {
            localStorage.setItem(`${this.prefix}.${w}`, "1");
          }
          unpin(w) {
            localStorage.removeItem(`${this.prefix}.${w}`);
          }
        }
        return (
          ((u = P).ɵfac = function (w) {
            return new (w || u)();
          }),
          (u.ɵprov = n.Yz7({ token: u, factory: u.ɵfac, providedIn: "root" })),
          P
        );
      })();
    },
    85080: (gt, rt, o) => {
      o.d(rt, { g: () => u });
      var t = o(65619),
        n = o(97328),
        l = o(65879);
      let u = (() => {
        var P;
        class r {
          constructor() {
            (this._countsUpdateSbj$ = new t.X(0)),
              (this._clickSbj$ = new n.t()),
              (this.settings = {}),
              (this.count = 0);
          }
          get onCountsUpdate$() {
            return this._countsUpdateSbj$.asObservable();
          }
          get onNotificationClick() {
            return this._clickSbj$.asObservable();
          }
          emitCountsUpdate() {
            this._countsUpdateSbj$.next(0);
          }
          emitNotificationClick(Q) {
            this._clickSbj$.next(Q);
          }
        }
        return (
          ((P = r).ɵfac = function (Q) {
            return new (Q || P)();
          }),
          (P.ɵprov = l.Yz7({ token: P, factory: P.ɵfac, providedIn: "root" })),
          r
        );
      })();
    },
    94409: (gt, rt, o) => {
      o.d(rt, { $: () => u });
      var t = o(78645),
        n = o(97328),
        l = o(65879);
      let u = (() => {
        var P;
        class r {
          constructor() {
            (this._socketConnectSbj$ = new t.x()),
              (this._socketDisconnectSbj$ = new t.x()),
              (this._socketLoginSbj$ = new n.t());
          }
          get onSocketLoginSuccess$() {
            return this._socketLoginSbj$.asObservable();
          }
          get onSocketConnect$() {
            return this._socketConnectSbj$.asObservable();
          }
          get onSocketDisconnect$() {
            return this._socketDisconnectSbj$.asObservable();
          }
          emitSocketLoginSuccess() {
            this._socketLoginSbj$.next();
          }
          emitSocketConnect() {
            this._socketConnectSbj$.next();
          }
          emitSocketDisconnect() {
            return this._socketDisconnectSbj$.next();
          }
        }
        return (
          ((P = r).ɵfac = function (Q) {
            return new (Q || P)();
          }),
          (P.ɵprov = l.Yz7({ token: P, factory: P.ɵfac, providedIn: "root" })),
          r
        );
      })();
    },
    59556: (gt, rt, o) => {
      o.d(rt, {
        Bk: () => F,
        IR: () => ot,
        MK: () => mt,
        Xk: () => Z,
        hQ: () => q,
        mT: () => lt,
        xt: () => X,
      });
      const t = "worklenz.events.profile_update",
        n = "worklenz.tasks.update",
        l = "worklenz.tasks.update",
        u = "worklenz.menu.update",
        P = "worklenz.status.update",
        w = "worklenz.profile.avatar_change",
        Q = "worklenz.task_comments.create";
      function F() {
        document.dispatchEvent(new Event(t));
      }
      function Z() {
        document.dispatchEvent(new Event(n));
      }
      function X() {
        document.dispatchEvent(new Event(l));
      }
      function ot() {
        document.dispatchEvent(new Event(u));
      }
      function lt() {
        document.dispatchEvent(new Event(P));
      }
      function q() {
        document.dispatchEvent(new Event(w));
      }
      function mt() {
        document.dispatchEvent(new Event(Q));
      }
    },
    94489: (gt, rt, o) => {
      o.d(rt, { C: () => t });
      var t = (function (n) {
        return (
          (n[(n.LOGIN = 0)] = "LOGIN"),
          (n[(n.LOGOUT = 1)] = "LOGOUT"),
          (n[(n.INVITATIONS_UPDATE = 2)] = "INVITATIONS_UPDATE"),
          (n[(n.NOTIFICATIONS_UPDATE = 3)] = "NOTIFICATIONS_UPDATE"),
          (n[(n.TEAM_MEMBER_REMOVED = 4)] = "TEAM_MEMBER_REMOVED"),
          (n[(n.TASK_COMMENTS_UPDATED = 5)] = "TASK_COMMENTS_UPDATED"),
          (n[(n.QUICK_TASK = 6)] = "QUICK_TASK"),
          (n[(n.QUICK_ASSIGNEES_UPDATE = 7)] = "QUICK_ASSIGNEES_UPDATE"),
          (n[(n.TASK_STATUS_CHANGE = 8)] = "TASK_STATUS_CHANGE"),
          (n[(n.TASK_PRIORITY_CHANGE = 9)] = "TASK_PRIORITY_CHANGE"),
          (n[(n.TASK_NAME_CHANGE = 10)] = "TASK_NAME_CHANGE"),
          (n[(n.TASK_LABELS_CHANGE = 11)] = "TASK_LABELS_CHANGE"),
          (n[(n.CREATE_LABEL = 12)] = "CREATE_LABEL"),
          (n[(n.TASK_END_DATE_CHANGE = 13)] = "TASK_END_DATE_CHANGE"),
          (n[(n.TASK_START_DATE_CHANGE = 14)] = "TASK_START_DATE_CHANGE"),
          (n[(n.TASK_TIME_ESTIMATION_CHANGE = 15)] =
            "TASK_TIME_ESTIMATION_CHANGE"),
          (n[(n.TASK_DESCRIPTION_CHANGE = 16)] = "TASK_DESCRIPTION_CHANGE"),
          (n[(n.GET_TASK_PROGRESS = 17)] = "GET_TASK_PROGRESS"),
          (n[(n.TASK_TIMER_START = 18)] = "TASK_TIMER_START"),
          (n[(n.TASK_TIMER_STOP = 19)] = "TASK_TIMER_STOP"),
          (n[(n.TASK_SORT_ORDER_CHANGE = 20)] = "TASK_SORT_ORDER_CHANGE"),
          (n[(n.JOIN_OR_LEAVE_PROJECT_ROOM = 21)] =
            "JOIN_OR_LEAVE_PROJECT_ROOM"),
          (n[(n.PROJECT_UPDATES_AVAILABLE = 22)] = "PROJECT_UPDATES_AVAILABLE"),
          (n[(n.TASK_SUBSCRIBERS_CHANGE = 23)] = "TASK_SUBSCRIBERS_CHANGE"),
          (n[(n.PROJECT_SUBSCRIBERS_CHANGE = 24)] =
            "PROJECT_SUBSCRIBERS_CHANGE"),
          (n[(n.TASK_PHASE_CHANGE = 25)] = "TASK_PHASE_CHANGE"),
          (n[(n.ROADMAP_SORT_ORDER_CHANGE = 26)] = "ROADMAP_SORT_ORDER_CHANGE"),
          (n[(n.PHASE_START_DATE_CHANGE = 27)] = "PHASE_START_DATE_CHANGE"),
          (n[(n.PHASE_END_DATE_CHANGE = 28)] = "PHASE_END_DATE_CHANGE"),
          (n[(n.NEW_PROJECT_COMMENT_RECEIVED = 29)] =
            "NEW_PROJECT_COMMENT_RECEIVED"),
          (n[(n.PROJECT_HEALTH_CHANGE = 30)] = "PROJECT_HEALTH_CHANGE"),
          (n[(n.PROJECT_START_DATE_CHANGE = 31)] = "PROJECT_START_DATE_CHANGE"),
          (n[(n.PROJECT_END_DATE_CHANGE = 32)] = "PROJECT_END_DATE_CHANGE"),
          (n[(n.PROJECT_STATUS_CHANGE = 33)] = "PROJECT_STATUS_CHANGE"),
          (n[(n.PROJECT_CATEGORY_CHANGE = 34)] = "PROJECT_CATEGORY_CHANGE"),
          (n[(n.CREATE_PROJECT_CATEGORY = 35)] = "CREATE_PROJECT_CATEGORY"),
          (n[(n.PT_QUICK_TASK = 36)] = "PT_QUICK_TASK"),
          (n[(n.PT_NAME_CHANGE = 37)] = "PT_NAME_CHANGE"),
          (n[(n.PT_TASK_SORT_ORDER_CHANGE = 38)] = "PT_TASK_SORT_ORDER_CHANGE"),
          (n[(n.PT_TASK_NAME_CHANGE = 39)] = "PT_TASK_NAME_CHANGE"),
          (n[(n.PT_TASK_TIME_ESTIMATION_CHANGE = 40)] =
            "PT_TASK_TIME_ESTIMATION_CHANGE"),
          (n[(n.PT_TASK_DESCRIPTION_CHANGE = 41)] =
            "PT_TASK_DESCRIPTION_CHANGE"),
          (n[(n.PT_TASK_LABELS_CHANGE = 42)] = "PT_TASK_LABELS_CHANGE"),
          (n[(n.PT_CREATE_LABEL = 43)] = "PT_CREATE_LABEL"),
          (n[(n.PT_TASK_PHASE_CHANGE = 44)] = "PT_TASK_PHASE_CHANGE"),
          (n[(n.PT_TASK_STATUS_CHANGE = 45)] = "PT_TASK_STATUS_CHANGE"),
          (n[(n.PT_TASK_PRIORITY_CHANGE = 46)] = "PT_TASK_PRIORITY_CHANGE"),
          (n[(n.GANNT_DRAG_CHANGE = 47)] = "GANNT_DRAG_CHANGE"),
          (n[(n.SCHEDULE_MEMBER_ALLOCATION_CREATE = 48)] =
            "SCHEDULE_MEMBER_ALLOCATION_CREATE"),
          (n[(n.SCHEDULE_MEMBER_START_DATE_CHANGE = 49)] =
            "SCHEDULE_MEMBER_START_DATE_CHANGE"),
          (n[(n.SCHEDULE_MEMBER_END_DATE_CHANGE = 50)] =
            "SCHEDULE_MEMBER_END_DATE_CHANGE"),
          (n[(n.PROJECT_DATA_CHANGE = 51)] = "PROJECT_DATA_CHANGE"),
          n
        );
      })(t || {});
    },
    71993: (gt, rt, o) => {
      o.d(rt, { sL: () => u });
      var t = o(65879),
        n = o(65592),
        l = o(59773);
      function u(M) {
        M || ((0, t.gHi)(u), (M = (0, t.f3M)(t.ktI)));
        const m = new n.y((O) => M.onDestroy(O.next.bind(O)));
        return (O) => O.pipe((0, l.R)(m));
      }
      globalThis;
    },
    28538: (gt, rt, o) => {
      o.d(rt, { $: () => S, j: () => x });
      var t = o(97582),
        n = o(96814),
        l = o(65879),
        u = o(47394),
        P = o(97328),
        r = o(78645),
        w = o(63019),
        Q = o(92438),
        F = o(59773),
        Z = o(37398),
        e = o(16321),
        X = o(79360),
        ot = o(8251),
        lt = o(54829);
      const q = { leading: !0, trailing: !1 };
      var ut = o(74825);
      var k = o(40874),
        $ = o(27754),
        Y = o(99087),
        N = o(62831),
        tt = o(28802),
        L = o(49388);
      const st = ["fixedEl"],
        nt = ["*"];
      var J = (function (h) {
        return (
          (h.resize = "resize"),
          (h.scroll = "scroll"),
          (h.touchstart = "touchstart"),
          (h.touchmove = "touchmove"),
          (h.touchend = "touchend"),
          (h.pageshow = "pageshow"),
          (h.load = "LOAD"),
          h
        );
      })(J || {});
      function W(h) {
        return (function et(h) {
          return typeof window < "u" && h === window;
        })(h)
          ? { top: 0, left: 0, bottom: 0 }
          : h.getBoundingClientRect();
      }
      const v = "ant-affix";
      let S = (() => {
          var h;
          class G {
            get target() {
              const D = this.nzTarget;
              return (
                ("string" == typeof D ? this.document.querySelector(D) : D) ||
                window
              );
            }
            constructor(D, V, pt, K, it, M, m, O, y, I) {
              (this.nzConfigService = pt),
                (this.scrollSrv = K),
                (this.ngZone = it),
                (this.platform = M),
                (this.renderer = m),
                (this.nzResizeObserver = O),
                (this.cdr = y),
                (this.directionality = I),
                (this._nzModuleName = "affix"),
                (this.nzChange = new l.vpe()),
                (this.dir = "ltr"),
                (this.positionChangeSubscription = u.w0.EMPTY),
                (this.offsetChanged$ = new P.t(1)),
                (this.destroy$ = new r.x()),
                (this.placeholderNode = D.nativeElement),
                (this.document = V);
            }
            ngOnInit() {
              this.directionality.change
                ?.pipe((0, F.R)(this.destroy$))
                .subscribe((D) => {
                  (this.dir = D),
                    this.registerListeners(),
                    this.updatePosition({}),
                    this.cdr.detectChanges();
                }),
                (this.dir = this.directionality.value);
            }
            ngOnChanges(D) {
              const { nzOffsetBottom: V, nzOffsetTop: pt, nzTarget: K } = D;
              (V || pt) && this.offsetChanged$.next(),
                K && this.registerListeners();
            }
            ngAfterViewInit() {
              this.registerListeners();
            }
            ngOnDestroy() {
              this.removeListeners();
            }
            registerListeners() {
              if (!this.platform.isBrowser) return;
              this.removeListeners();
              const D =
                this.target === window ? this.document.body : this.target;
              (this.positionChangeSubscription = this.ngZone.runOutsideAngular(
                () =>
                  (0, w.T)(
                    ...Object.keys(J).map((V) => (0, Q.R)(this.target, V)),
                    this.offsetChanged$.pipe((0, Z.U)(() => ({}))),
                    this.nzResizeObserver.observe(D)
                  )
                    .pipe(
                      (function H(h, G = e.z, j = q) {
                        const D = (0, ut.H)(h, G);
                        return (function mt(
                          h,
                          { leading: G, trailing: j } = q
                        ) {
                          return (0, X.e)((D, V) => {
                            let pt = !1,
                              K = null,
                              it = null,
                              M = !1;
                            const m = () => {
                                it?.unsubscribe(),
                                  (it = null),
                                  j && (I(), M && V.complete());
                              },
                              O = () => {
                                (it = null), M && V.complete();
                              },
                              y = (g) =>
                                (it = (0, lt.Xf)(h(g)).subscribe(
                                  new ot.Q(V, m, O)
                                )),
                              I = () => {
                                if (pt) {
                                  pt = !1;
                                  const g = K;
                                  (K = null), V.next(g), !M && y(g);
                                }
                              };
                            D.subscribe(
                              new ot.Q(
                                V,
                                (g) => {
                                  (pt = !0),
                                    (K = g),
                                    (!it || it.closed) && (G ? I() : y(g));
                                },
                                () => {
                                  (M = !0),
                                    (!(j && pt && it) || it.closed) &&
                                      V.complete();
                                }
                              )
                            );
                          });
                        })(() => D, j);
                      })(20, void 0, { trailing: !0 }),
                      (0, F.R)(this.destroy$)
                    )
                    .subscribe((V) => this.updatePosition(V))
              )),
                (this.timeout = setTimeout(() => this.updatePosition({})));
            }
            removeListeners() {
              clearTimeout(this.timeout),
                this.positionChangeSubscription.unsubscribe(),
                this.destroy$.next(!0),
                this.destroy$.complete();
            }
            getOffset(D, V) {
              const pt = D.getBoundingClientRect(),
                K = W(V),
                it = this.scrollSrv.getScroll(V, !0),
                M = this.scrollSrv.getScroll(V, !1),
                m = this.document.body;
              return {
                top: pt.top - K.top + it - (m.clientTop || 0),
                left: pt.left - K.left + M - (m.clientLeft || 0),
                width: pt.width,
                height: pt.height,
              };
            }
            setAffixStyle(D, V) {
              const pt = this.affixStyle,
                K = this.target === window;
              if (("scroll" === D.type && pt && V && K) || (0, $.wU)(pt, V))
                return;
              const it = !!V,
                M = this.fixedEl.nativeElement;
              this.renderer.setStyle(M, "cssText", (0, $.GM)(V)),
                (this.affixStyle = V),
                it ? M.classList.add(v) : M.classList.remove(v),
                this.updateRtlClass(),
                ((V && !pt) || (!V && pt)) && this.nzChange.emit(it);
            }
            setPlaceholderStyle(D) {
              (0, $.wU)(D, this.placeholderStyle) ||
                (this.renderer.setStyle(
                  this.placeholderNode,
                  "cssText",
                  (0, $.GM)(D)
                ),
                (this.placeholderStyle = D));
            }
            syncPlaceholderStyle(D) {
              if (!this.affixStyle) return;
              this.renderer.setStyle(this.placeholderNode, "cssText", ""),
                (this.placeholderStyle = void 0);
              const V = {
                width: this.placeholderNode.offsetWidth,
                height: this.fixedEl.nativeElement.offsetHeight,
              };
              this.setAffixStyle(D, { ...this.affixStyle, ...V }),
                this.setPlaceholderStyle(V);
            }
            updatePosition(D) {
              if (!this.platform.isBrowser) return;
              const V = this.target;
              let pt = this.nzOffsetTop;
              const K = this.scrollSrv.getScroll(V, !0),
                it = this.getOffset(this.placeholderNode, V),
                M = this.fixedEl.nativeElement,
                m = { width: M.offsetWidth, height: M.offsetHeight },
                O = { top: !1, bottom: !1 };
              "number" != typeof pt && "number" != typeof this.nzOffsetBottom
                ? ((O.top = !0), (pt = 0))
                : ((O.top = "number" == typeof pt),
                  (O.bottom = "number" == typeof this.nzOffsetBottom));
              const y = W(V),
                I = V.innerHeight || V.clientHeight;
              if (K >= it.top - pt && O.top) {
                const g = it.width;
                this.setAffixStyle(D, {
                  position: "fixed",
                  top: y.top + pt,
                  left: y.left + it.left,
                  width: g,
                }),
                  this.setPlaceholderStyle({ width: g, height: m.height });
              } else if (
                K <= it.top + m.height + this.nzOffsetBottom - I &&
                O.bottom
              ) {
                const g = V === window ? 0 : window.innerHeight - y.bottom,
                  A = it.width;
                this.setAffixStyle(D, {
                  position: "fixed",
                  bottom: g + this.nzOffsetBottom,
                  left: y.left + it.left,
                  width: A,
                }),
                  this.setPlaceholderStyle({ width: A, height: it.height });
              } else
                D.type === J.resize &&
                this.affixStyle &&
                "fixed" === this.affixStyle.position &&
                this.placeholderNode.offsetWidth
                  ? this.setAffixStyle(D, {
                      ...this.affixStyle,
                      width: this.placeholderNode.offsetWidth,
                    })
                  : this.setAffixStyle(D),
                  this.setPlaceholderStyle();
              "resize" === D.type && this.syncPlaceholderStyle(D);
            }
            updateRtlClass() {
              const D = this.fixedEl.nativeElement;
              "rtl" === this.dir && D.classList.contains(v)
                ? D.classList.add(`${v}-rtl`)
                : D.classList.remove(`${v}-rtl`);
            }
          }
          return (
            ((h = G).ɵfac = function (D) {
              return new (D || h)(
                l.Y36(l.SBq),
                l.Y36(n.K0),
                l.Y36(k.jY),
                l.Y36(Y.MF),
                l.Y36(l.R0b),
                l.Y36(N.t4),
                l.Y36(l.Qsj),
                l.Y36(tt.D3),
                l.Y36(l.sBO),
                l.Y36(L.Is, 8)
              );
            }),
            (h.ɵcmp = l.Xpm({
              type: h,
              selectors: [["nz-affix"]],
              viewQuery: function (D, V) {
                if ((1 & D && l.Gf(st, 7), 2 & D)) {
                  let pt;
                  l.iGM((pt = l.CRH())) && (V.fixedEl = pt.first);
                }
              },
              inputs: {
                nzTarget: "nzTarget",
                nzOffsetTop: "nzOffsetTop",
                nzOffsetBottom: "nzOffsetBottom",
              },
              outputs: { nzChange: "nzChange" },
              exportAs: ["nzAffix"],
              features: [l.TTD],
              ngContentSelectors: nt,
              decls: 3,
              vars: 0,
              consts: [["fixedEl", ""]],
              template: function (D, V) {
                1 & D && (l.F$t(), l.TgZ(0, "div", null, 0), l.Hsn(2), l.qZA());
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, t.gn)(
              [(0, k.oS)(), (0, $.Rn)(void 0)],
              G.prototype,
              "nzOffsetTop",
              void 0
            ),
            (0, t.gn)(
              [(0, k.oS)(), (0, $.Rn)(void 0)],
              G.prototype,
              "nzOffsetBottom",
              void 0
            ),
            G
          );
        })(),
        x = (() => {
          var h;
          class G {}
          return (
            ((h = G).ɵfac = function (D) {
              return new (D || h)();
            }),
            (h.ɵmod = l.oAB({ type: h })),
            (h.ɵinj = l.cJS({ imports: [L.vT, n.ez, N.ud] })),
            G
          );
        })();
    },
    95717: (gt, rt, o) => {
      o.d(rt, { NB: () => V, Pf: () => it, gi: () => M, ic: () => m });
      var t = o(49388),
        n = o(69594),
        l = o(96814),
        u = o(65879),
        P = o(331),
        r = o(8324),
        w = o(20824),
        Q = o(97582),
        F = o(78645),
        Z = o(92438),
        e = o(47394),
        X = o(74911),
        ot = o(63019),
        lt = o(32181),
        q = o(59773),
        mt = o(99397),
        ut = o(60932),
        H = o(48180),
        k = o(94664),
        $ = o(27754),
        Y = o(36028),
        N = o(68484),
        tt = o(60095),
        L = o(64194);
      function st(O, y) {
        if ((1 & O && (u.ynx(0), u._uU(1), u.BQk()), 2 & O)) {
          const I = u.oxw();
          u.xp6(1), u.Oqu(I.nzLabel);
        }
      }
      const nt = [[["nz-auto-option"]]],
        J = ["nz-auto-option"],
        et = ["*"],
        W = ["panel"],
        R = ["content"];
      function v(O, y) {}
      function T(O, y) {
        1 & O && u.YNc(0, v, 0, 0, "ng-template");
      }
      function S(O, y) {
        1 & O && u.Hsn(0);
      }
      function x(O, y) {
        if (
          (1 & O && (u.TgZ(0, "nz-auto-option", 8), u._uU(1), u.qZA()), 2 & O)
        ) {
          const I = y.$implicit;
          u.Q6J("nzValue", I)("nzLabel", I && I.label ? I.label : I),
            u.xp6(1),
            u.hij(" ", I && I.label ? I.label : I, " ");
        }
      }
      function h(O, y) {
        if ((1 & O && u.YNc(0, x, 2, 3, "nz-auto-option", 7), 2 & O)) {
          const I = u.oxw(2);
          u.Q6J("ngForOf", I.nzDataSource);
        }
      }
      function G(O, y) {
        if (1 & O) {
          const I = u.EpF();
          u.TgZ(0, "div", 0, 1),
            u.NdJ("@slideMotion.done", function (A) {
              u.CHM(I);
              const at = u.oxw();
              return u.KtG(at.onAnimationEvent(A));
            }),
            u.TgZ(2, "div", 2)(3, "div", 3),
            u.YNc(4, T, 1, 0, null, 4),
            u.qZA()()(),
            u.YNc(5, S, 1, 0, "ng-template", null, 5, u.W1O),
            u.YNc(7, h, 1, 1, "ng-template", null, 6, u.W1O);
        }
        if (2 & O) {
          const I = u.MAs(6),
            g = u.MAs(8),
            A = u.oxw();
          u.ekj("ant-select-dropdown-hidden", !A.showPanel)(
            "ant-select-dropdown-rtl",
            "rtl" === A.dir
          ),
            u.Q6J("ngClass", A.nzOverlayClassName)("ngStyle", A.nzOverlayStyle)(
              "nzNoAnimation",
              null == A.noAnimation ? null : A.noAnimation.nzNoAnimation
            )("@slideMotion", void 0)(
              "@.disabled",
              !(null == A.noAnimation || !A.noAnimation.nzNoAnimation)
            ),
            u.xp6(4),
            u.Q6J("ngTemplateOutlet", A.nzDataSource ? g : I);
        }
      }
      let j = (() => {
        var O;
        class y {
          constructor() {}
        }
        return (
          ((O = y).ɵfac = function (g) {
            return new (g || O)();
          }),
          (O.ɵcmp = u.Xpm({
            type: O,
            selectors: [["nz-auto-optgroup"]],
            inputs: { nzLabel: "nzLabel" },
            exportAs: ["nzAutoOptgroup"],
            ngContentSelectors: J,
            decls: 3,
            vars: 1,
            consts: [
              [1, "ant-select-item", "ant-select-item-group"],
              [4, "nzStringTemplateOutlet"],
            ],
            template: function (g, A) {
              1 & g &&
                (u.F$t(nt),
                u.TgZ(0, "div", 0),
                u.YNc(1, st, 2, 1, "ng-container", 1),
                u.qZA(),
                u.Hsn(2)),
                2 & g && (u.xp6(1), u.Q6J("nzStringTemplateOutlet", A.nzLabel));
            },
            dependencies: [r.f],
            encapsulation: 2,
            changeDetection: 0,
          })),
          y
        );
      })();
      class D {
        constructor(y, I = !1) {
          (this.source = y), (this.isUserInput = I);
        }
      }
      let V = (() => {
        var O;
        class y {
          constructor(g, A, at, _t) {
            (this.ngZone = g),
              (this.changeDetectorRef = A),
              (this.element = at),
              (this.nzAutocompleteOptgroupComponent = _t),
              (this.nzDisabled = !1),
              (this.selectionChange = new u.vpe()),
              (this.mouseEntered = new u.vpe()),
              (this.active = !1),
              (this.selected = !1),
              (this.destroy$ = new F.x());
          }
          ngOnInit() {
            this.ngZone.runOutsideAngular(() => {
              (0, Z.R)(this.element.nativeElement, "mouseenter")
                .pipe(
                  (0, lt.h)(() => this.mouseEntered.observers.length > 0),
                  (0, q.R)(this.destroy$)
                )
                .subscribe(() => {
                  this.ngZone.run(() => this.mouseEntered.emit(this));
                }),
                (0, Z.R)(this.element.nativeElement, "mousedown")
                  .pipe((0, q.R)(this.destroy$))
                  .subscribe((g) => g.preventDefault());
            });
          }
          ngOnDestroy() {
            this.destroy$.next();
          }
          select(g = !0) {
            (this.selected = !0),
              this.changeDetectorRef.markForCheck(),
              g && this.emitSelectionChangeEvent();
          }
          deselect() {
            (this.selected = !1),
              this.changeDetectorRef.markForCheck(),
              this.emitSelectionChangeEvent();
          }
          getLabel() {
            return this.nzLabel || this.nzValue.toString();
          }
          setActiveStyles() {
            this.active ||
              ((this.active = !0), this.changeDetectorRef.markForCheck());
          }
          setInactiveStyles() {
            this.active &&
              ((this.active = !1), this.changeDetectorRef.markForCheck());
          }
          scrollIntoViewIfNeeded() {
            (0, $.zT)(this.element.nativeElement);
          }
          selectViaInteraction() {
            this.nzDisabled ||
              ((this.selected = !this.selected),
              this.selected ? this.setActiveStyles() : this.setInactiveStyles(),
              this.emitSelectionChangeEvent(!0),
              this.changeDetectorRef.markForCheck());
          }
          emitSelectionChangeEvent(g = !1) {
            this.selectionChange.emit(new D(this, g));
          }
        }
        return (
          ((O = y).ɵfac = function (g) {
            return new (g || O)(
              u.Y36(u.R0b),
              u.Y36(u.sBO),
              u.Y36(u.SBq),
              u.Y36(j, 8)
            );
          }),
          (O.ɵcmp = u.Xpm({
            type: O,
            selectors: [["nz-auto-option"]],
            hostAttrs: [
              "role",
              "menuitem",
              1,
              "ant-select-item",
              "ant-select-item-option",
            ],
            hostVars: 10,
            hostBindings: function (g, A) {
              1 & g &&
                u.NdJ("click", function () {
                  return A.selectViaInteraction();
                }),
                2 & g &&
                  (u.uIk("aria-selected", A.selected.toString())(
                    "aria-disabled",
                    A.nzDisabled.toString()
                  ),
                  u.ekj(
                    "ant-select-item-option-grouped",
                    A.nzAutocompleteOptgroupComponent
                  )("ant-select-item-option-selected", A.selected)(
                    "ant-select-item-option-active",
                    A.active
                  )("ant-select-item-option-disabled", A.nzDisabled));
            },
            inputs: {
              nzValue: "nzValue",
              nzLabel: "nzLabel",
              nzDisabled: "nzDisabled",
            },
            outputs: {
              selectionChange: "selectionChange",
              mouseEntered: "mouseEntered",
            },
            exportAs: ["nzAutoOption"],
            ngContentSelectors: et,
            decls: 2,
            vars: 0,
            consts: [[1, "ant-select-item-option-content"]],
            template: function (g, A) {
              1 & g && (u.F$t(), u.TgZ(0, "div", 0), u.Hsn(1), u.qZA());
            },
            encapsulation: 2,
            changeDetection: 0,
          })),
          (0, Q.gn)([(0, $.yF)()], y.prototype, "nzDisabled", void 0),
          y
        );
      })();
      const pt = {
        provide: tt.JU,
        useExisting: (0, u.Gpc)(() => it),
        multi: !0,
      };
      let it = (() => {
          var O;
          class y {
            get activeOption() {
              return this.nzAutocomplete && this.nzAutocomplete.options.length
                ? this.nzAutocomplete.activeItem
                : null;
            }
            constructor(g, A, at, _t, vt, yt) {
              (this.ngZone = g),
                (this.elementRef = A),
                (this.overlay = at),
                (this.viewContainerRef = _t),
                (this.nzInputGroupWhitSuffixOrPrefixDirective = vt),
                (this.document = yt),
                (this.onChange = () => {}),
                (this.onTouched = () => {}),
                (this.panelOpen = !1),
                (this.destroy$ = new F.x()),
                (this.overlayRef = null),
                (this.portal = null),
                (this.previousValue = null);
            }
            ngAfterViewInit() {
              this.nzAutocomplete &&
                this.nzAutocomplete.animationStateChange
                  .pipe((0, q.R)(this.destroy$))
                  .subscribe((g) => {
                    "void" === g.toState &&
                      this.overlayRef &&
                      (this.overlayRef.dispose(), (this.overlayRef = null));
                  });
            }
            ngOnDestroy() {
              this.destroy$.next(),
                this.destroy$.complete(),
                this.destroyPanel();
            }
            writeValue(g) {
              this.ngZone.runOutsideAngular(() =>
                Promise.resolve(null).then(() => this.setTriggerValue(g))
              );
            }
            registerOnChange(g) {
              this.onChange = g;
            }
            registerOnTouched(g) {
              this.onTouched = g;
            }
            setDisabledState(g) {
              (this.elementRef.nativeElement.disabled = g), this.closePanel();
            }
            openPanel() {
              (this.previousValue = this.elementRef.nativeElement.value),
                this.attachOverlay(),
                this.updateStatus();
            }
            closePanel() {
              this.panelOpen &&
                ((this.nzAutocomplete.isOpen = this.panelOpen = !1),
                this.overlayRef &&
                  this.overlayRef.hasAttached() &&
                  (this.overlayRef.detach(),
                  this.selectionChangeSubscription.unsubscribe(),
                  this.overlayOutsideClickSubscription.unsubscribe(),
                  this.optionsChangeSubscription.unsubscribe(),
                  (this.portal = null)));
            }
            handleKeydown(g) {
              const A = g.keyCode,
                at = A === Y.LH || A === Y.JH;
              A === Y.hY && g.preventDefault(),
                !this.panelOpen || (A !== Y.hY && A !== Y.Mf)
                  ? this.panelOpen && A === Y.K5
                    ? this.nzAutocomplete.showPanel &&
                      (g.preventDefault(),
                      this.activeOption
                        ? this.activeOption.selectViaInteraction()
                        : this.closePanel())
                    : this.panelOpen &&
                      at &&
                      this.nzAutocomplete.showPanel &&
                      (g.stopPropagation(),
                      g.preventDefault(),
                      A === Y.LH
                        ? this.nzAutocomplete.setPreviousItemActive()
                        : this.nzAutocomplete.setNextItemActive(),
                      this.activeOption &&
                        this.activeOption.scrollIntoViewIfNeeded(),
                      this.doBackfill())
                  : (this.activeOption &&
                      this.activeOption.getLabel() !== this.previousValue &&
                      this.setTriggerValue(this.previousValue),
                    this.closePanel());
            }
            handleInput(g) {
              const A = g.target,
                at = this.document;
              let _t = A.value;
              "number" === A.type && (_t = "" === _t ? null : parseFloat(_t)),
                this.previousValue !== _t &&
                  ((this.previousValue = _t),
                  this.onChange(_t),
                  this.canOpen() &&
                    at.activeElement === g.target &&
                    this.openPanel());
            }
            handleFocus() {
              this.canOpen() && this.openPanel();
            }
            handleBlur() {
              this.onTouched();
            }
            subscribeOptionsChange() {
              return this.nzAutocomplete.options.changes
                .pipe(
                  (0, mt.b)(() => this.positionStrategy.reapplyLastPosition()),
                  (0, ut.g)(0)
                )
                .subscribe(() => {
                  this.resetActiveItem(),
                    this.panelOpen && this.overlayRef.updatePosition();
                });
            }
            subscribeSelectionChange() {
              return this.nzAutocomplete.selectionChange.subscribe((g) => {
                this.setValueAndClose(g);
              });
            }
            subscribeOverlayOutsideClick() {
              return this.overlayRef
                .outsidePointerEvents()
                .pipe(
                  (0, lt.h)(
                    (g) => !this.elementRef.nativeElement.contains(g.target)
                  )
                )
                .subscribe(() => {
                  this.closePanel();
                });
            }
            attachOverlay() {
              if (!this.nzAutocomplete)
                throw (function K() {
                  return Error(
                    "Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook."
                  );
                })();
              !this.portal &&
                this.nzAutocomplete.template &&
                (this.portal = new N.UE(
                  this.nzAutocomplete.template,
                  this.viewContainerRef
                )),
                this.overlayRef ||
                  (this.overlayRef = this.overlay.create(
                    this.getOverlayConfig()
                  )),
                this.overlayRef &&
                  !this.overlayRef.hasAttached() &&
                  (this.overlayRef.attach(this.portal),
                  (this.selectionChangeSubscription =
                    this.subscribeSelectionChange()),
                  (this.optionsChangeSubscription =
                    this.subscribeOptionsChange()),
                  (this.overlayOutsideClickSubscription =
                    this.subscribeOverlayOutsideClick()),
                  this.overlayRef
                    .detachments()
                    .pipe((0, q.R)(this.destroy$))
                    .subscribe(() => {
                      this.closePanel();
                    })),
                (this.nzAutocomplete.isOpen = this.panelOpen = !0);
            }
            updateStatus() {
              this.overlayRef &&
                this.overlayRef.updateSize({
                  width: this.nzAutocomplete.nzWidth || this.getHostWidth(),
                }),
                this.nzAutocomplete.setVisibility(),
                this.resetActiveItem(),
                this.activeOption && this.activeOption.scrollIntoViewIfNeeded();
            }
            destroyPanel() {
              this.overlayRef && this.closePanel();
            }
            getOverlayConfig() {
              return new n.X_({
                positionStrategy: this.getOverlayPosition(),
                disposeOnNavigation: !0,
                scrollStrategy: this.overlay.scrollStrategies.reposition(),
                width: this.nzAutocomplete.nzWidth || this.getHostWidth(),
              });
            }
            getConnectedElement() {
              return this.nzInputGroupWhitSuffixOrPrefixDirective
                ? this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef
                : this.elementRef;
            }
            getHostWidth() {
              return this.getConnectedElement().nativeElement.getBoundingClientRect()
                .width;
            }
            getOverlayPosition() {
              const g = [
                new n.tR(
                  { originX: "start", originY: "bottom" },
                  { overlayX: "start", overlayY: "top" }
                ),
                new n.tR(
                  { originX: "start", originY: "top" },
                  { overlayX: "start", overlayY: "bottom" }
                ),
              ];
              return (
                (this.positionStrategy = this.overlay
                  .position()
                  .flexibleConnectedTo(this.getConnectedElement())
                  .withFlexibleDimensions(!1)
                  .withPush(!1)
                  .withPositions(g)
                  .withTransformOriginOn(".ant-select-dropdown")),
                this.positionStrategy
              );
            }
            resetActiveItem() {
              const g = this.nzAutocomplete.getOptionIndex(this.previousValue);
              this.nzAutocomplete.clearSelectedOptions(null, !0),
                -1 !== g
                  ? (this.nzAutocomplete.setActiveItem(g),
                    this.nzAutocomplete.activeItem.select(!1))
                  : this.nzAutocomplete.setActiveItem(
                      this.nzAutocomplete.nzDefaultActiveFirstOption ? 0 : -1
                    );
            }
            setValueAndClose(g) {
              const A = g.nzValue;
              this.setTriggerValue(g.getLabel()),
                this.onChange(A),
                this.elementRef.nativeElement.focus(),
                this.closePanel();
            }
            setTriggerValue(g) {
              const A = this.nzAutocomplete.getOption(g),
                at = A ? A.getLabel() : g;
              (this.elementRef.nativeElement.value = at ?? ""),
                this.nzAutocomplete.nzBackfill || (this.previousValue = at);
            }
            doBackfill() {
              this.nzAutocomplete.nzBackfill &&
                this.nzAutocomplete.activeItem &&
                this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
            }
            canOpen() {
              const g = this.elementRef.nativeElement;
              return !g.readOnly && !g.disabled;
            }
          }
          return (
            ((O = y).ɵfac = function (g) {
              return new (g || O)(
                u.Y36(u.R0b),
                u.Y36(u.SBq),
                u.Y36(n.aV),
                u.Y36(u.s_b),
                u.Y36(w.ke, 8),
                u.Y36(l.K0, 8)
              );
            }),
            (O.ɵdir = u.lG2({
              type: O,
              selectors: [
                ["input", "nzAutocomplete", ""],
                ["textarea", "nzAutocomplete", ""],
              ],
              hostAttrs: ["autocomplete", "off", "aria-autocomplete", "list"],
              hostBindings: function (g, A) {
                1 & g &&
                  u.NdJ("focusin", function () {
                    return A.handleFocus();
                  })("blur", function () {
                    return A.handleBlur();
                  })("input", function (_t) {
                    return A.handleInput(_t);
                  })("keydown", function (_t) {
                    return A.handleKeydown(_t);
                  });
              },
              inputs: { nzAutocomplete: "nzAutocomplete" },
              exportAs: ["nzAutocompleteTrigger"],
              features: [u._Bn([pt])],
            })),
            y
          );
        })(),
        M = (() => {
          var O;
          class y {
            get options() {
              return this.nzDataSource
                ? this.fromDataSourceOptions
                : this.fromContentOptions;
            }
            constructor(g, A, at, _t) {
              (this.changeDetectorRef = g),
                (this.ngZone = A),
                (this.directionality = at),
                (this.noAnimation = _t),
                (this.nzOverlayClassName = ""),
                (this.nzOverlayStyle = {}),
                (this.nzDefaultActiveFirstOption = !0),
                (this.nzBackfill = !1),
                (this.compareWith = (vt, yt) => vt === yt),
                (this.selectionChange = new u.vpe()),
                (this.showPanel = !0),
                (this.isOpen = !1),
                (this.activeItem = null),
                (this.dir = "ltr"),
                (this.destroy$ = new F.x()),
                (this.animationStateChange = new u.vpe()),
                (this.activeItemIndex = -1),
                (this.selectionChangeSubscription = e.w0.EMPTY),
                (this.optionMouseEnterSubscription = e.w0.EMPTY),
                (this.dataSourceChangeSubscription = e.w0.EMPTY),
                (this.optionSelectionChanges = (0, X.P)(() =>
                  this.options
                    ? (0, ot.T)(...this.options.map((vt) => vt.selectionChange))
                    : this.ngZone.onStable.asObservable().pipe(
                        (0, H.q)(1),
                        (0, k.w)(() => this.optionSelectionChanges)
                      )
                )),
                (this.optionMouseEnter = (0, X.P)(() =>
                  this.options
                    ? (0, ot.T)(...this.options.map((vt) => vt.mouseEntered))
                    : this.ngZone.onStable.asObservable().pipe(
                        (0, H.q)(1),
                        (0, k.w)(() => this.optionMouseEnter)
                      )
                ));
            }
            ngOnInit() {
              this.directionality.change
                ?.pipe((0, q.R)(this.destroy$))
                .subscribe((g) => {
                  (this.dir = g), this.changeDetectorRef.detectChanges();
                }),
                (this.dir = this.directionality.value);
            }
            onAnimationEvent(g) {
              this.animationStateChange.emit(g);
            }
            ngAfterContentInit() {
              this.nzDataSource || this.optionsInit();
            }
            ngAfterViewInit() {
              this.nzDataSource && this.optionsInit();
            }
            ngOnDestroy() {
              this.dataSourceChangeSubscription.unsubscribe(),
                this.selectionChangeSubscription.unsubscribe(),
                this.optionMouseEnterSubscription.unsubscribe(),
                (this.dataSourceChangeSubscription =
                  this.selectionChangeSubscription =
                  this.optionMouseEnterSubscription =
                    null),
                this.destroy$.next(),
                this.destroy$.complete();
            }
            setVisibility() {
              (this.showPanel = !!this.options.length),
                this.changeDetectorRef.markForCheck();
            }
            setActiveItem(g) {
              const A = this.options.get(g);
              A && !A.active
                ? ((this.activeItem = A),
                  (this.activeItemIndex = g),
                  this.clearSelectedOptions(this.activeItem),
                  this.activeItem.setActiveStyles())
                : ((this.activeItem = null),
                  (this.activeItemIndex = -1),
                  this.clearSelectedOptions()),
                this.changeDetectorRef.markForCheck();
            }
            setNextItemActive() {
              this.setActiveItem(
                this.activeItemIndex + 1 <= this.options.length - 1
                  ? this.activeItemIndex + 1
                  : 0
              );
            }
            setPreviousItemActive() {
              this.setActiveItem(
                this.activeItemIndex - 1 < 0
                  ? this.options.length - 1
                  : this.activeItemIndex - 1
              );
            }
            getOptionIndex(g) {
              return this.options.reduce(
                (A, at, _t) =>
                  -1 === A ? (this.compareWith(g, at.nzValue) ? _t : -1) : A,
                -1
              );
            }
            getOption(g) {
              return (
                this.options.find((A) => this.compareWith(g, A.nzValue)) || null
              );
            }
            optionsInit() {
              this.setVisibility(),
                this.subscribeOptionChanges(),
                (this.dataSourceChangeSubscription = (
                  this.nzDataSource
                    ? this.fromDataSourceOptions.changes
                    : this.fromContentOptions.changes
                ).subscribe((A) => {
                  !A.dirty &&
                    this.isOpen &&
                    setTimeout(() => this.setVisibility()),
                    this.subscribeOptionChanges();
                }));
            }
            clearSelectedOptions(g, A = !1) {
              this.options.forEach((at) => {
                at !== g && (A && at.deselect(), at.setInactiveStyles());
              });
            }
            subscribeOptionChanges() {
              this.selectionChangeSubscription.unsubscribe(),
                (this.selectionChangeSubscription = this.optionSelectionChanges
                  .pipe((0, lt.h)((g) => g.isUserInput))
                  .subscribe((g) => {
                    g.source.select(),
                      g.source.setActiveStyles(),
                      (this.activeItem = g.source),
                      (this.activeItemIndex = this.getOptionIndex(
                        this.activeItem.nzValue
                      )),
                      this.clearSelectedOptions(g.source, !0),
                      this.selectionChange.emit(g.source);
                  })),
                this.optionMouseEnterSubscription.unsubscribe(),
                (this.optionMouseEnterSubscription =
                  this.optionMouseEnter.subscribe((g) => {
                    g.setActiveStyles(),
                      (this.activeItem = g),
                      (this.activeItemIndex = this.getOptionIndex(
                        this.activeItem.nzValue
                      )),
                      this.clearSelectedOptions(g);
                  }));
            }
          }
          return (
            ((O = y).ɵfac = function (g) {
              return new (g || O)(
                u.Y36(u.sBO),
                u.Y36(u.R0b),
                u.Y36(t.Is, 8),
                u.Y36(P.P, 9)
              );
            }),
            (O.ɵcmp = u.Xpm({
              type: O,
              selectors: [["nz-autocomplete"]],
              contentQueries: function (g, A, at) {
                if ((1 & g && u.Suo(at, V, 5), 2 & g)) {
                  let _t;
                  u.iGM((_t = u.CRH())) && (A.fromContentOptions = _t);
                }
              },
              viewQuery: function (g, A) {
                if (
                  (1 & g &&
                    (u.Gf(u.Rgc, 5), u.Gf(W, 5), u.Gf(R, 5), u.Gf(V, 5)),
                  2 & g)
                ) {
                  let at;
                  u.iGM((at = u.CRH())) && (A.template = at.first),
                    u.iGM((at = u.CRH())) && (A.panel = at.first),
                    u.iGM((at = u.CRH())) && (A.content = at.first),
                    u.iGM((at = u.CRH())) && (A.fromDataSourceOptions = at);
                }
              },
              inputs: {
                nzWidth: "nzWidth",
                nzOverlayClassName: "nzOverlayClassName",
                nzOverlayStyle: "nzOverlayStyle",
                nzDefaultActiveFirstOption: "nzDefaultActiveFirstOption",
                nzBackfill: "nzBackfill",
                compareWith: "compareWith",
                nzDataSource: "nzDataSource",
              },
              outputs: { selectionChange: "selectionChange" },
              exportAs: ["nzAutocomplete"],
              ngContentSelectors: et,
              decls: 1,
              vars: 0,
              consts: [
                [
                  1,
                  "ant-select-dropdown",
                  "ant-select-dropdown-placement-bottomLeft",
                  3,
                  "ngClass",
                  "ngStyle",
                  "nzNoAnimation",
                ],
                ["panel", ""],
                [
                  2,
                  "max-height",
                  "256px",
                  "overflow-y",
                  "auto",
                  "overflow-anchor",
                  "none",
                ],
                [2, "display", "flex", "flex-direction", "column"],
                [4, "ngTemplateOutlet"],
                ["contentTemplate", ""],
                ["optionsTemplate", ""],
                [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"],
                [3, "nzValue", "nzLabel"],
              ],
              template: function (g, A) {
                1 & g && (u.F$t(), u.YNc(0, G, 9, 10, "ng-template"));
              },
              dependencies: [l.mk, l.sg, l.tP, l.PC, P.P, V],
              encapsulation: 2,
              data: { animation: [L.mF] },
              changeDetection: 0,
            })),
            (0, Q.gn)(
              [(0, $.yF)()],
              y.prototype,
              "nzDefaultActiveFirstOption",
              void 0
            ),
            (0, Q.gn)([(0, $.yF)()], y.prototype, "nzBackfill", void 0),
            y
          );
        })(),
        m = (() => {
          var O;
          class y {}
          return (
            ((O = y).ɵfac = function (g) {
              return new (g || O)();
            }),
            (O.ɵmod = u.oAB({ type: O })),
            (O.ɵinj = u.cJS({ imports: [t.vT, l.ez, n.U8, r.T, P.g, w.o7] })),
            y
          );
        })();
    },
    96928: (gt, rt, o) => {
      o.d(rt, { Dz: () => q, Rt: () => ut, ZM: () => mt });
      var t = o(97582),
        n = o(65879),
        l = o(40874),
        u = o(27754),
        P = o(62831),
        r = o(96814),
        w = o(62595),
        Q = o(49388);
      const F = ["textEl"];
      function Z(H, k) {
        if ((1 & H && n._UZ(0, "span", 3), 2 & H)) {
          const $ = n.oxw();
          n.Q6J("nzType", $.nzIcon);
        }
      }
      function e(H, k) {
        if (1 & H) {
          const $ = n.EpF();
          n.TgZ(0, "img", 4),
            n.NdJ("error", function (N) {
              n.CHM($);
              const tt = n.oxw();
              return n.KtG(tt.imgError(N));
            }),
            n.qZA();
        }
        if (2 & H) {
          const $ = n.oxw();
          n.Q6J("src", $.nzSrc, n.LSH),
            n.uIk("srcset", $.nzSrcSet)("alt", $.nzAlt);
        }
      }
      function X(H, k) {
        if ((1 & H && (n.TgZ(0, "span", 5, 6), n._uU(2), n.qZA()), 2 & H)) {
          const $ = n.oxw();
          n.xp6(2), n.Oqu($.nzText);
        }
      }
      const ot = ["*"];
      let q = (() => {
          var H;
          class k {
            constructor(Y, N, tt, L, st) {
              (this.nzConfigService = Y),
                (this.elementRef = N),
                (this.cdr = tt),
                (this.platform = L),
                (this.ngZone = st),
                (this._nzModuleName = "avatar"),
                (this.nzShape = "circle"),
                (this.nzSize = "default"),
                (this.nzGap = 4),
                (this.nzError = new n.vpe()),
                (this.hasText = !1),
                (this.hasSrc = !0),
                (this.hasIcon = !1),
                (this.classMap = {}),
                (this.customSize = null),
                (this.el = this.elementRef.nativeElement);
            }
            imgError(Y) {
              this.nzError.emit(Y),
                Y.defaultPrevented ||
                  ((this.hasSrc = !1),
                  (this.hasIcon = !1),
                  (this.hasText = !1),
                  this.nzIcon
                    ? (this.hasIcon = !0)
                    : this.nzText && (this.hasText = !0),
                  this.cdr.detectChanges(),
                  this.setSizeStyle(),
                  this.notifyCalc());
            }
            ngOnChanges() {
              (this.hasText = !this.nzSrc && !!this.nzText),
                (this.hasIcon = !this.nzSrc && !!this.nzIcon),
                (this.hasSrc = !!this.nzSrc),
                this.setSizeStyle(),
                this.notifyCalc();
            }
            calcStringSize() {
              if (!this.hasText) return;
              const Y = this.textEl.nativeElement,
                N = Y.offsetWidth,
                tt = this.el.getBoundingClientRect().width,
                L = 2 * this.nzGap < tt ? 2 * this.nzGap : 8;
              (Y.style.transform = `scale(${
                tt - L < N ? (tt - L) / N : 1
              }) translateX(-50%)`),
                (Y.style.lineHeight = this.customSize || "");
            }
            notifyCalc() {
              this.platform.isBrowser &&
                this.ngZone.runOutsideAngular(() => {
                  setTimeout(() => {
                    this.calcStringSize();
                  });
                });
            }
            setSizeStyle() {
              (this.customSize =
                "number" == typeof this.nzSize ? `${this.nzSize}px` : null),
                this.cdr.markForCheck();
            }
          }
          return (
            ((H = k).ɵfac = function (Y) {
              return new (Y || H)(
                n.Y36(l.jY),
                n.Y36(n.SBq),
                n.Y36(n.sBO),
                n.Y36(P.t4),
                n.Y36(n.R0b)
              );
            }),
            (H.ɵcmp = n.Xpm({
              type: H,
              selectors: [["nz-avatar"]],
              viewQuery: function (Y, N) {
                if ((1 & Y && n.Gf(F, 5), 2 & Y)) {
                  let tt;
                  n.iGM((tt = n.CRH())) && (N.textEl = tt.first);
                }
              },
              hostAttrs: [1, "ant-avatar"],
              hostVars: 20,
              hostBindings: function (Y, N) {
                2 & Y &&
                  (n.Udp("width", N.customSize)("height", N.customSize)(
                    "line-height",
                    N.customSize
                  )(
                    "font-size",
                    N.hasIcon && N.customSize ? N.nzSize / 2 : null,
                    "px"
                  ),
                  n.ekj("ant-avatar-lg", "large" === N.nzSize)(
                    "ant-avatar-sm",
                    "small" === N.nzSize
                  )("ant-avatar-square", "square" === N.nzShape)(
                    "ant-avatar-circle",
                    "circle" === N.nzShape
                  )("ant-avatar-icon", N.nzIcon)("ant-avatar-image", N.hasSrc));
              },
              inputs: {
                nzShape: "nzShape",
                nzSize: "nzSize",
                nzGap: "nzGap",
                nzText: "nzText",
                nzSrc: "nzSrc",
                nzSrcSet: "nzSrcSet",
                nzAlt: "nzAlt",
                nzIcon: "nzIcon",
              },
              outputs: { nzError: "nzError" },
              exportAs: ["nzAvatar"],
              features: [n.TTD],
              decls: 3,
              vars: 3,
              consts: [
                ["nz-icon", "", 3, "nzType", 4, "ngIf"],
                [3, "src", "error", 4, "ngIf"],
                ["class", "ant-avatar-string", 4, "ngIf"],
                ["nz-icon", "", 3, "nzType"],
                [3, "src", "error"],
                [1, "ant-avatar-string"],
                ["textEl", ""],
              ],
              template: function (Y, N) {
                1 & Y &&
                  (n.YNc(0, Z, 1, 1, "span", 0),
                  n.YNc(1, e, 1, 3, "img", 1),
                  n.YNc(2, X, 3, 1, "span", 2)),
                  2 & Y &&
                    (n.Q6J("ngIf", N.nzIcon && N.hasIcon),
                    n.xp6(1),
                    n.Q6J("ngIf", N.nzSrc && N.hasSrc),
                    n.xp6(1),
                    n.Q6J("ngIf", N.nzText && N.hasText));
              },
              dependencies: [r.O5, w.Ls],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, t.gn)([(0, l.oS)()], k.prototype, "nzShape", void 0),
            (0, t.gn)([(0, l.oS)()], k.prototype, "nzSize", void 0),
            (0, t.gn)([(0, l.oS)(), (0, u.Rn)()], k.prototype, "nzGap", void 0),
            k
          );
        })(),
        mt = (() => {
          var H;
          class k {}
          return (
            ((H = k).ɵfac = function (Y) {
              return new (Y || H)();
            }),
            (H.ɵcmp = n.Xpm({
              type: H,
              selectors: [["nz-avatar-group"]],
              hostAttrs: [1, "ant-avatar-group"],
              exportAs: ["nzAvatarGroup"],
              ngContentSelectors: ot,
              decls: 1,
              vars: 0,
              template: function (Y, N) {
                1 & Y && (n.F$t(), n.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            k
          );
        })(),
        ut = (() => {
          var H;
          class k {}
          return (
            ((H = k).ɵfac = function (Y) {
              return new (Y || H)();
            }),
            (H.ɵmod = n.oAB({ type: H })),
            (H.ɵinj = n.cJS({ imports: [Q.vT, r.ez, w.PV, P.ud] })),
            k
          );
        })();
    },
    33640: (gt, rt, o) => {
      o.d(rt, { mS: () => W, x7: () => J });
      var t = o(97582),
        n = o(65879),
        l = o(78645),
        u = o(59773),
        P = o(64194),
        r = o(40874),
        w = o(27754),
        Q = o(49388),
        F = o(331),
        Z = o(96814),
        e = o(8324),
        X = o(17131);
      function ot(R, v) {
        if ((1 & R && (n.TgZ(0, "p", 6), n._uU(1), n.qZA()), 2 & R)) {
          const T = v.$implicit,
            S = n.oxw(2).index,
            x = n.oxw(2);
          n.ekj("current", T === x.countArray[S]), n.xp6(1), n.hij(" ", T, " ");
        }
      }
      function lt(R, v) {
        if ((1 & R && (n.ynx(0), n.YNc(1, ot, 2, 3, "p", 5), n.BQk()), 2 & R)) {
          const T = n.oxw(3);
          n.xp6(1), n.Q6J("ngForOf", T.countSingleArray);
        }
      }
      function q(R, v) {
        if (
          (1 & R &&
            (n.TgZ(0, "span", 3),
            n.YNc(1, lt, 2, 1, "ng-container", 4),
            n.qZA()),
          2 & R)
        ) {
          const T = v.index,
            S = n.oxw(2);
          n.Udp("transform", "translateY(" + 100 * -S.countArray[T] + "%)"),
            n.Q6J("nzNoAnimation", S.noAnimation),
            n.xp6(1),
            n.Q6J("ngIf", !S.nzDot && void 0 !== S.countArray[T]);
        }
      }
      function mt(R, v) {
        if (
          (1 & R && (n.ynx(0), n.YNc(1, q, 2, 4, "span", 2), n.BQk()), 2 & R)
        ) {
          const T = n.oxw();
          n.xp6(1), n.Q6J("ngForOf", T.maxNumberArray);
        }
      }
      function ut(R, v) {
        if ((1 & R && n._uU(0), 2 & R)) {
          const T = n.oxw();
          n.hij("", T.nzOverflowCount, "+");
        }
      }
      function H(R, v) {
        if ((1 & R && (n.ynx(0), n._uU(1), n.BQk()), 2 & R)) {
          const T = n.oxw(2);
          n.xp6(1), n.Oqu(T.nzText);
        }
      }
      function k(R, v) {
        if (
          (1 & R &&
            (n.ynx(0),
            n._UZ(1, "span", 2),
            n.TgZ(2, "span", 3),
            n.YNc(3, H, 2, 1, "ng-container", 1),
            n.qZA(),
            n.BQk()),
          2 & R)
        ) {
          const T = n.oxw();
          n.xp6(1),
            n.Gre(
              "ant-badge-status-dot ant-badge-status-",
              T.nzStatus || T.presetColor,
              ""
            ),
            n.Udp("background", !T.presetColor && T.nzColor),
            n.Q6J("ngStyle", T.nzStyle),
            n.xp6(2),
            n.Q6J("nzStringTemplateOutlet", T.nzText);
        }
      }
      function $(R, v) {
        if ((1 & R && n._UZ(0, "nz-badge-sup", 5), 2 & R)) {
          const T = n.oxw(2);
          n.Q6J("nzOffset", T.nzOffset)("nzSize", T.nzSize)(
            "nzTitle",
            T.nzTitle
          )("nzStyle", T.nzStyle)("nzDot", T.nzDot)(
            "nzOverflowCount",
            T.nzOverflowCount
          )(
            "disableAnimation",
            !!(
              T.nzStandalone ||
              T.nzStatus ||
              T.nzColor ||
              (null != T.noAnimation && T.noAnimation.nzNoAnimation)
            )
          )("nzCount", T.nzCount)(
            "noAnimation",
            !(null == T.noAnimation || !T.noAnimation.nzNoAnimation)
          );
        }
      }
      function Y(R, v) {
        if (
          (1 & R && (n.ynx(0), n.YNc(1, $, 1, 9, "nz-badge-sup", 4), n.BQk()),
          2 & R)
        ) {
          const T = n.oxw();
          n.xp6(1), n.Q6J("ngIf", T.showSup);
        }
      }
      const N = ["*"],
        L = [
          "pink",
          "red",
          "yellow",
          "orange",
          "cyan",
          "green",
          "blue",
          "purple",
          "geekblue",
          "magenta",
          "volcano",
          "gold",
          "lime",
        ];
      let st = (() => {
          var R;
          class v {
            constructor() {
              (this.nzStyle = null),
                (this.nzDot = !1),
                (this.nzOverflowCount = 99),
                (this.disableAnimation = !1),
                (this.noAnimation = !1),
                (this.nzSize = "default"),
                (this.maxNumberArray = []),
                (this.countArray = []),
                (this.count = 0),
                (this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            }
            generateMaxNumberArray() {
              this.maxNumberArray = this.nzOverflowCount.toString().split("");
            }
            ngOnInit() {
              this.generateMaxNumberArray();
            }
            ngOnChanges(S) {
              const { nzOverflowCount: x, nzCount: h } = S;
              h &&
                "number" == typeof h.currentValue &&
                ((this.count = Math.max(0, h.currentValue)),
                (this.countArray = this.count
                  .toString()
                  .split("")
                  .map((G) => +G))),
                x && this.generateMaxNumberArray();
            }
          }
          return (
            ((R = v).ɵfac = function (S) {
              return new (S || R)();
            }),
            (R.ɵcmp = n.Xpm({
              type: R,
              selectors: [["nz-badge-sup"]],
              hostAttrs: [1, "ant-scroll-number"],
              hostVars: 17,
              hostBindings: function (S, x) {
                2 & S &&
                  (n.uIk(
                    "title",
                    null === x.nzTitle ? "" : x.nzTitle || x.nzCount
                  ),
                  n.d8E("@.disabled", x.disableAnimation)(
                    "@zoomBadgeMotion",
                    void 0
                  ),
                  n.Akn(x.nzStyle),
                  n.Udp(
                    "right",
                    x.nzOffset && x.nzOffset[0] ? -x.nzOffset[0] : null,
                    "px"
                  )(
                    "margin-top",
                    x.nzOffset && x.nzOffset[1] ? x.nzOffset[1] : null,
                    "px"
                  ),
                  n.ekj("ant-badge-count", !x.nzDot)(
                    "ant-badge-count-sm",
                    "small" === x.nzSize
                  )("ant-badge-dot", x.nzDot)(
                    "ant-badge-multiple-words",
                    x.countArray.length >= 2
                  ));
              },
              inputs: {
                nzOffset: "nzOffset",
                nzTitle: "nzTitle",
                nzStyle: "nzStyle",
                nzDot: "nzDot",
                nzOverflowCount: "nzOverflowCount",
                disableAnimation: "disableAnimation",
                nzCount: "nzCount",
                noAnimation: "noAnimation",
                nzSize: "nzSize",
              },
              exportAs: ["nzBadgeSup"],
              features: [n.TTD],
              decls: 3,
              vars: 2,
              consts: [
                [4, "ngIf", "ngIfElse"],
                ["overflowTemplate", ""],
                [
                  "class",
                  "ant-scroll-number-only",
                  3,
                  "nzNoAnimation",
                  "transform",
                  4,
                  "ngFor",
                  "ngForOf",
                ],
                [1, "ant-scroll-number-only", 3, "nzNoAnimation"],
                [4, "ngIf"],
                [
                  "class",
                  "ant-scroll-number-only-unit",
                  3,
                  "current",
                  4,
                  "ngFor",
                  "ngForOf",
                ],
                [1, "ant-scroll-number-only-unit"],
              ],
              template: function (S, x) {
                if (
                  (1 & S &&
                    (n.YNc(0, mt, 2, 1, "ng-container", 0),
                    n.YNc(1, ut, 1, 1, "ng-template", null, 1, n.W1O)),
                  2 & S)
                ) {
                  const h = n.MAs(2);
                  n.Q6J("ngIf", x.count <= x.nzOverflowCount)("ngIfElse", h);
                }
              },
              dependencies: [Z.sg, Z.O5, F.P],
              encapsulation: 2,
              data: { animation: [P.Ev] },
              changeDetection: 0,
            })),
            v
          );
        })(),
        J = (() => {
          var R;
          class v {
            constructor(S, x, h, G, j, D) {
              (this.nzConfigService = S),
                (this.renderer = x),
                (this.cdr = h),
                (this.elementRef = G),
                (this.directionality = j),
                (this.noAnimation = D),
                (this._nzModuleName = "badge"),
                (this.showSup = !1),
                (this.presetColor = null),
                (this.dir = "ltr"),
                (this.destroy$ = new l.x()),
                (this.nzShowZero = !1),
                (this.nzShowDot = !0),
                (this.nzStandalone = !1),
                (this.nzDot = !1),
                (this.nzOverflowCount = 99),
                (this.nzColor = void 0),
                (this.nzStyle = null),
                (this.nzText = null),
                (this.nzSize = "default");
            }
            ngOnInit() {
              this.directionality.change
                ?.pipe((0, u.R)(this.destroy$))
                .subscribe((S) => {
                  (this.dir = S),
                    this.prepareBadgeForRtl(),
                    this.cdr.detectChanges();
                }),
                (this.dir = this.directionality.value),
                this.prepareBadgeForRtl();
            }
            ngOnChanges(S) {
              const {
                nzColor: x,
                nzShowDot: h,
                nzDot: G,
                nzCount: j,
                nzShowZero: D,
              } = S;
              x &&
                (this.presetColor =
                  this.nzColor && -1 !== L.indexOf(this.nzColor)
                    ? this.nzColor
                    : null),
                (h || G || j || D) &&
                  (this.showSup =
                    (this.nzShowDot && this.nzDot) ||
                    ("number" == typeof this.nzCount && this.nzCount > 0) ||
                    ("number" == typeof this.nzCount &&
                      this.nzCount <= 0 &&
                      this.nzShowZero));
            }
            prepareBadgeForRtl() {
              this.isRtlLayout
                ? this.renderer.addClass(
                    this.elementRef.nativeElement,
                    "ant-badge-rtl"
                  )
                : this.renderer.removeClass(
                    this.elementRef.nativeElement,
                    "ant-badge-rtl"
                  );
            }
            get isRtlLayout() {
              return "rtl" === this.dir;
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete();
            }
          }
          return (
            ((R = v).ɵfac = function (S) {
              return new (S || R)(
                n.Y36(r.jY),
                n.Y36(n.Qsj),
                n.Y36(n.sBO),
                n.Y36(n.SBq),
                n.Y36(Q.Is, 8),
                n.Y36(F.P, 9)
              );
            }),
            (R.ɵcmp = n.Xpm({
              type: R,
              selectors: [["nz-badge"]],
              hostAttrs: [1, "ant-badge"],
              hostVars: 4,
              hostBindings: function (S, x) {
                2 & S &&
                  n.ekj("ant-badge-status", x.nzStatus)(
                    "ant-badge-not-a-wrapper",
                    !!(x.nzStandalone || x.nzStatus || x.nzColor)
                  );
              },
              inputs: {
                nzShowZero: "nzShowZero",
                nzShowDot: "nzShowDot",
                nzStandalone: "nzStandalone",
                nzDot: "nzDot",
                nzOverflowCount: "nzOverflowCount",
                nzColor: "nzColor",
                nzStyle: "nzStyle",
                nzText: "nzText",
                nzTitle: "nzTitle",
                nzStatus: "nzStatus",
                nzCount: "nzCount",
                nzOffset: "nzOffset",
                nzSize: "nzSize",
              },
              exportAs: ["nzBadge"],
              features: [n.TTD],
              ngContentSelectors: N,
              decls: 3,
              vars: 2,
              consts: [
                [4, "ngIf"],
                [4, "nzStringTemplateOutlet"],
                [3, "ngStyle"],
                [1, "ant-badge-status-text"],
                [
                  3,
                  "nzOffset",
                  "nzSize",
                  "nzTitle",
                  "nzStyle",
                  "nzDot",
                  "nzOverflowCount",
                  "disableAnimation",
                  "nzCount",
                  "noAnimation",
                  4,
                  "ngIf",
                ],
                [
                  3,
                  "nzOffset",
                  "nzSize",
                  "nzTitle",
                  "nzStyle",
                  "nzDot",
                  "nzOverflowCount",
                  "disableAnimation",
                  "nzCount",
                  "noAnimation",
                ],
              ],
              template: function (S, x) {
                1 & S &&
                  (n.F$t(),
                  n.YNc(0, k, 4, 7, "ng-container", 0),
                  n.Hsn(1),
                  n.YNc(2, Y, 2, 1, "ng-container", 1)),
                  2 & S &&
                    (n.Q6J("ngIf", x.nzStatus || x.nzColor),
                    n.xp6(2),
                    n.Q6J("nzStringTemplateOutlet", x.nzCount));
              },
              dependencies: [Z.O5, Z.PC, e.f, st],
              encapsulation: 2,
              data: { animation: [P.Ev] },
              changeDetection: 0,
            })),
            (0, t.gn)([(0, w.yF)()], v.prototype, "nzShowZero", void 0),
            (0, t.gn)([(0, w.yF)()], v.prototype, "nzShowDot", void 0),
            (0, t.gn)([(0, w.yF)()], v.prototype, "nzStandalone", void 0),
            (0, t.gn)([(0, w.yF)()], v.prototype, "nzDot", void 0),
            (0, t.gn)([(0, r.oS)()], v.prototype, "nzOverflowCount", void 0),
            (0, t.gn)([(0, r.oS)()], v.prototype, "nzColor", void 0),
            v
          );
        })(),
        W = (() => {
          var R;
          class v {}
          return (
            ((R = v).ɵfac = function (S) {
              return new (S || R)();
            }),
            (R.ɵmod = n.oAB({ type: R })),
            (R.ɵinj = n.cJS({ imports: [Q.vT, Z.ez, X.Q8, e.T, F.g] })),
            v
          );
        })();
    },
    3626: (gt, rt, o) => {
      o.d(rt, { Dg: () => et, MO: () => J, lt: () => R });
      var t = o(65879),
        n = o(96814),
        l = o(8324),
        u = o(62787),
        P = o(62595),
        r = o(97582),
        w = o(35420),
        Q = o(78645),
        F = o(59773),
        Z = o(32181),
        e = o(27921),
        X = o(1608),
        ot = o(27754),
        lt = o(49388),
        q = o(69594),
        mt = o(85448);
      function ut(v, T) {}
      function H(v, T) {
        1 & v && t._UZ(0, "span", 6);
      }
      function k(v, T) {
        if (
          (1 & v &&
            (t.ynx(0),
            t.TgZ(1, "span", 3),
            t.YNc(2, ut, 0, 0, "ng-template", 4),
            t.YNc(3, H, 1, 0, "span", 5),
            t.qZA(),
            t.BQk()),
          2 & v)
        ) {
          const S = t.oxw(),
            x = t.MAs(2);
          t.xp6(1),
            t.Q6J("nzDropdownMenu", S.nzOverlay),
            t.xp6(1),
            t.Q6J("ngTemplateOutlet", x),
            t.xp6(1),
            t.Q6J("ngIf", !!S.nzOverlay);
        }
      }
      function $(v, T) {
        1 & v && (t.TgZ(0, "span", 7), t.Hsn(1), t.qZA());
      }
      function Y(v, T) {
        if ((1 & v && (t.ynx(0), t._uU(1), t.BQk()), 2 & v)) {
          const S = t.oxw(2);
          t.xp6(1), t.hij(" ", S.nzBreadCrumbComponent.nzSeparator, " ");
        }
      }
      function N(v, T) {
        if (
          (1 & v &&
            (t.TgZ(0, "span", 8),
            t.YNc(1, Y, 2, 1, "ng-container", 9),
            t.qZA()),
          2 & v)
        ) {
          const S = t.oxw();
          t.xp6(1),
            t.Q6J(
              "nzStringTemplateOutlet",
              S.nzBreadCrumbComponent.nzSeparator
            );
        }
      }
      const tt = ["*"];
      function L(v, T) {
        if (1 & v) {
          const S = t.EpF();
          t.TgZ(0, "nz-breadcrumb-item")(1, "a", 2),
            t.NdJ("click", function (h) {
              const j = t.CHM(S).$implicit,
                D = t.oxw(2);
              return t.KtG(D.navigate(j.url, h));
            }),
            t._uU(2),
            t.qZA()();
        }
        if (2 & v) {
          const S = T.$implicit;
          t.xp6(1), t.uIk("href", S.url, t.LSH), t.xp6(1), t.Oqu(S.label);
        }
      }
      function st(v, T) {
        if (
          (1 & v &&
            (t.ynx(0), t.YNc(1, L, 3, 2, "nz-breadcrumb-item", 1), t.BQk()),
          2 & v)
        ) {
          const S = t.oxw();
          t.xp6(1), t.Q6J("ngForOf", S.breadcrumbs);
        }
      }
      class nt {}
      let J = (() => {
          var v;
          class T {
            constructor(x) {
              this.nzBreadCrumbComponent = x;
            }
          }
          return (
            ((v = T).ɵfac = function (x) {
              return new (x || v)(t.Y36(nt));
            }),
            (v.ɵcmp = t.Xpm({
              type: v,
              selectors: [["nz-breadcrumb-item"]],
              inputs: { nzOverlay: "nzOverlay" },
              exportAs: ["nzBreadcrumbItem"],
              ngContentSelectors: tt,
              decls: 4,
              vars: 3,
              consts: [
                [4, "ngIf", "ngIfElse"],
                ["noMenuTpl", ""],
                ["class", "ant-breadcrumb-separator", 4, "ngIf"],
                [
                  "nz-dropdown",
                  "",
                  1,
                  "ant-breadcrumb-overlay-link",
                  3,
                  "nzDropdownMenu",
                ],
                [3, "ngTemplateOutlet"],
                ["nz-icon", "", "nzType", "down", 4, "ngIf"],
                ["nz-icon", "", "nzType", "down"],
                [1, "ant-breadcrumb-link"],
                [1, "ant-breadcrumb-separator"],
                [4, "nzStringTemplateOutlet"],
              ],
              template: function (x, h) {
                if (
                  (1 & x &&
                    (t.F$t(),
                    t.YNc(0, k, 4, 3, "ng-container", 0),
                    t.YNc(1, $, 2, 0, "ng-template", null, 1, t.W1O),
                    t.YNc(3, N, 2, 1, "span", 2)),
                  2 & x)
                ) {
                  const G = t.MAs(2);
                  t.Q6J("ngIf", !!h.nzOverlay)("ngIfElse", G),
                    t.xp6(3),
                    t.Q6J("ngIf", h.nzBreadCrumbComponent.nzSeparator);
                }
              },
              dependencies: [n.O5, n.tP, l.f, u.cm, P.Ls],
              encapsulation: 2,
              changeDetection: 0,
            })),
            T
          );
        })(),
        et = (() => {
          var v;
          class T {
            constructor(x, h, G, j, D) {
              (this.injector = x),
                (this.cdr = h),
                (this.elementRef = G),
                (this.renderer = j),
                (this.directionality = D),
                (this.nzAutoGenerate = !1),
                (this.nzSeparator = "/"),
                (this.nzRouteLabel = "breadcrumb"),
                (this.nzRouteLabelFn = (V) => V),
                (this.breadcrumbs = []),
                (this.dir = "ltr"),
                (this.destroy$ = new Q.x());
            }
            ngOnInit() {
              this.nzAutoGenerate && this.registerRouterChange(),
                this.directionality.change
                  ?.pipe((0, F.R)(this.destroy$))
                  .subscribe((x) => {
                    (this.dir = x),
                      this.prepareComponentForRtl(),
                      this.cdr.detectChanges();
                  }),
                (this.dir = this.directionality.value),
                this.prepareComponentForRtl();
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete();
            }
            navigate(x, h) {
              h.preventDefault(), this.injector.get(w.F0).navigateByUrl(x);
            }
            registerRouterChange() {
              try {
                const x = this.injector.get(w.F0),
                  h = this.injector.get(w.gz);
                x.events
                  .pipe(
                    (0, Z.h)((G) => G instanceof w.m2),
                    (0, F.R)(this.destroy$),
                    (0, e.O)(!0)
                  )
                  .subscribe(() => {
                    (this.breadcrumbs = this.getBreadcrumbs(h.root)),
                      this.cdr.markForCheck();
                  });
              } catch {
                throw new Error(
                  `${X.Bq} You should import RouterModule if you want to use 'NzAutoGenerate'.`
                );
              }
            }
            getBreadcrumbs(x, h = "", G = []) {
              const j = x.children;
              if (0 === j.length) return G;
              for (const D of j)
                if (D.outlet === w.eC) {
                  const V = D.snapshot.url
                      .map((it) => it.path)
                      .filter((it) => it)
                      .join("/"),
                    pt = V ? `${h}/${V}` : h,
                    K = this.nzRouteLabelFn(D.snapshot.data[this.nzRouteLabel]);
                  return (
                    V &&
                      K &&
                      G.push({ label: K, params: D.snapshot.params, url: pt }),
                    this.getBreadcrumbs(D, pt, G)
                  );
                }
              return G;
            }
            prepareComponentForRtl() {
              "rtl" === this.dir
                ? this.renderer.addClass(
                    this.elementRef.nativeElement,
                    "ant-breadcrumb-rtl"
                  )
                : this.renderer.removeClass(
                    this.elementRef.nativeElement,
                    "ant-breadcrumb-rtl"
                  );
            }
          }
          return (
            ((v = T).ɵfac = function (x) {
              return new (x || v)(
                t.Y36(t.zs3),
                t.Y36(t.sBO),
                t.Y36(t.SBq),
                t.Y36(t.Qsj),
                t.Y36(lt.Is, 8)
              );
            }),
            (v.ɵcmp = t.Xpm({
              type: v,
              selectors: [["nz-breadcrumb"]],
              hostAttrs: [1, "ant-breadcrumb"],
              inputs: {
                nzAutoGenerate: "nzAutoGenerate",
                nzSeparator: "nzSeparator",
                nzRouteLabel: "nzRouteLabel",
                nzRouteLabelFn: "nzRouteLabelFn",
              },
              exportAs: ["nzBreadcrumb"],
              features: [t._Bn([{ provide: nt, useExisting: v }])],
              ngContentSelectors: tt,
              decls: 2,
              vars: 1,
              consts: [
                [4, "ngIf"],
                [4, "ngFor", "ngForOf"],
                [3, "click"],
              ],
              template: function (x, h) {
                1 & x &&
                  (t.F$t(), t.Hsn(0), t.YNc(1, st, 2, 1, "ng-container", 0)),
                  2 & x &&
                    (t.xp6(1),
                    t.Q6J("ngIf", h.nzAutoGenerate && h.breadcrumbs.length));
              },
              dependencies: [n.sg, n.O5, J],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, r.gn)([(0, ot.yF)()], T.prototype, "nzAutoGenerate", void 0),
            T
          );
        })(),
        R = (() => {
          var v;
          class T {}
          return (
            ((v = T).ɵfac = function (x) {
              return new (x || v)();
            }),
            (v.ɵmod = t.oAB({ type: v })),
            (v.ɵinj = t.cJS({
              imports: [n.ez, l.T, q.U8, mt.e4, u.b1, P.PV, lt.vT],
            })),
            T
          );
        })();
    },
    66987: (gt, rt, o) => {
      o.d(rt, { S: () => Z, g: () => F });
      var t = o(97582),
        n = o(65879),
        l = o(27754),
        u = o(96814),
        P = o(8324),
        r = o(49388);
      function w(e, X) {
        if ((1 & e && (n.ynx(0), n._uU(1), n.BQk()), 2 & e)) {
          const ot = n.oxw(2);
          n.xp6(1), n.Oqu(ot.nzText);
        }
      }
      function Q(e, X) {
        if (
          (1 & e &&
            (n.TgZ(0, "span", 1),
            n.YNc(1, w, 2, 1, "ng-container", 2),
            n.qZA()),
          2 & e)
        ) {
          const ot = n.oxw();
          n.xp6(1), n.Q6J("nzStringTemplateOutlet", ot.nzText);
        }
      }
      let F = (() => {
          var e;
          class X {
            constructor() {
              (this.nzType = "horizontal"),
                (this.nzOrientation = "center"),
                (this.nzDashed = !1),
                (this.nzPlain = !1);
            }
          }
          return (
            ((e = X).ɵfac = function (lt) {
              return new (lt || e)();
            }),
            (e.ɵcmp = n.Xpm({
              type: e,
              selectors: [["nz-divider"]],
              hostAttrs: [1, "ant-divider"],
              hostVars: 16,
              hostBindings: function (lt, q) {
                2 & lt &&
                  n.ekj("ant-divider-horizontal", "horizontal" === q.nzType)(
                    "ant-divider-vertical",
                    "vertical" === q.nzType
                  )("ant-divider-with-text", q.nzText)(
                    "ant-divider-plain",
                    q.nzPlain
                  )(
                    "ant-divider-with-text-left",
                    q.nzText && "left" === q.nzOrientation
                  )(
                    "ant-divider-with-text-right",
                    q.nzText && "right" === q.nzOrientation
                  )(
                    "ant-divider-with-text-center",
                    q.nzText && "center" === q.nzOrientation
                  )("ant-divider-dashed", q.nzDashed);
              },
              inputs: {
                nzText: "nzText",
                nzType: "nzType",
                nzOrientation: "nzOrientation",
                nzDashed: "nzDashed",
                nzPlain: "nzPlain",
              },
              exportAs: ["nzDivider"],
              decls: 1,
              vars: 1,
              consts: [
                ["class", "ant-divider-inner-text", 4, "ngIf"],
                [1, "ant-divider-inner-text"],
                [4, "nzStringTemplateOutlet"],
              ],
              template: function (lt, q) {
                1 & lt && n.YNc(0, Q, 2, 1, "span", 0),
                  2 & lt && n.Q6J("ngIf", q.nzText);
              },
              dependencies: [u.O5, P.f],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, t.gn)([(0, l.yF)()], X.prototype, "nzDashed", void 0),
            (0, t.gn)([(0, l.yF)()], X.prototype, "nzPlain", void 0),
            X
          );
        })(),
        Z = (() => {
          var e;
          class X {}
          return (
            ((e = X).ɵfac = function (lt) {
              return new (lt || e)();
            }),
            (e.ɵmod = n.oAB({ type: e })),
            (e.ɵinj = n.cJS({ imports: [r.vT, u.ez, P.T] })),
            X
          );
        })();
    },
    43389: (gt, rt, o) => {
      o.d(rt, { BL: () => M, SQ: () => h, Vz: () => K });
      var t = o(97582),
        n = o(36028),
        l = o(69594),
        u = o(68484),
        P = o(96814),
        r = o(65879),
        w = o(78645),
        Q = o(59773),
        F = o(40874),
        Z = o(27754),
        e = o(4300),
        X = o(49388),
        ot = o(62595),
        lt = o(8324),
        q = o(331);
      const mt = ["drawerTemplate"];
      function ut(y, I) {
        if (1 & y) {
          const g = r.EpF();
          r.TgZ(0, "div", 11),
            r.NdJ("click", function () {
              r.CHM(g);
              const at = r.oxw(2);
              return r.KtG(at.maskClick());
            }),
            r.qZA();
        }
        if (2 & y) {
          const g = r.oxw(2);
          r.Q6J("ngStyle", g.nzMaskStyle);
        }
      }
      function H(y, I) {
        if ((1 & y && (r.ynx(0), r._UZ(1, "span", 19), r.BQk()), 2 & y)) {
          const g = I.$implicit;
          r.xp6(1), r.Q6J("nzType", g);
        }
      }
      function k(y, I) {
        if (1 & y) {
          const g = r.EpF();
          r.TgZ(0, "button", 17),
            r.NdJ("click", function () {
              r.CHM(g);
              const at = r.oxw(3);
              return r.KtG(at.closeClick());
            }),
            r.YNc(1, H, 2, 1, "ng-container", 18),
            r.qZA();
        }
        if (2 & y) {
          const g = r.oxw(3);
          r.xp6(1), r.Q6J("nzStringTemplateOutlet", g.nzCloseIcon);
        }
      }
      function $(y, I) {
        if ((1 & y && (r.ynx(0), r._UZ(1, "div", 21), r.BQk()), 2 & y)) {
          const g = r.oxw(4);
          r.xp6(1), r.Q6J("innerHTML", g.nzTitle, r.oJD);
        }
      }
      function Y(y, I) {
        if (
          (1 & y &&
            (r.TgZ(0, "div", 20),
            r.YNc(1, $, 2, 1, "ng-container", 18),
            r.qZA()),
          2 & y)
        ) {
          const g = r.oxw(3);
          r.xp6(1), r.Q6J("nzStringTemplateOutlet", g.nzTitle);
        }
      }
      function N(y, I) {
        if ((1 & y && (r.ynx(0), r._UZ(1, "div", 21), r.BQk()), 2 & y)) {
          const g = r.oxw(4);
          r.xp6(1), r.Q6J("innerHTML", g.nzExtra, r.oJD);
        }
      }
      function tt(y, I) {
        if (
          (1 & y &&
            (r.TgZ(0, "div", 22),
            r.YNc(1, N, 2, 1, "ng-container", 18),
            r.qZA()),
          2 & y)
        ) {
          const g = r.oxw(3);
          r.xp6(1), r.Q6J("nzStringTemplateOutlet", g.nzExtra);
        }
      }
      function L(y, I) {
        if (
          (1 & y &&
            (r.TgZ(0, "div", 12)(1, "div", 13),
            r.YNc(2, k, 2, 1, "button", 14),
            r.YNc(3, Y, 2, 1, "div", 15),
            r.qZA(),
            r.YNc(4, tt, 2, 1, "div", 16),
            r.qZA()),
          2 & y)
        ) {
          const g = r.oxw(2);
          r.ekj("ant-drawer-header-close-only", !g.nzTitle),
            r.xp6(2),
            r.Q6J("ngIf", g.nzClosable),
            r.xp6(1),
            r.Q6J("ngIf", g.nzTitle),
            r.xp6(1),
            r.Q6J("ngIf", g.nzExtra);
        }
      }
      function st(y, I) {}
      function nt(y, I) {
        1 & y && r.GkF(0);
      }
      function J(y, I) {
        if (
          (1 & y && (r.ynx(0), r.YNc(1, nt, 1, 0, "ng-container", 24), r.BQk()),
          2 & y)
        ) {
          const g = r.oxw(3);
          r.xp6(1),
            r.Q6J("ngTemplateOutlet", g.nzContent)(
              "ngTemplateOutletContext",
              g.templateContext
            );
        }
      }
      function et(y, I) {
        if (
          (1 & y && (r.ynx(0), r.YNc(1, J, 2, 2, "ng-container", 23), r.BQk()),
          2 & y)
        ) {
          const g = r.oxw(2);
          r.xp6(1), r.Q6J("ngIf", g.isTemplateRef(g.nzContent));
        }
      }
      function W(y, I) {}
      function R(y, I) {
        if (
          (1 & y && (r.ynx(0), r.YNc(1, W, 0, 0, "ng-template", 25), r.BQk()),
          2 & y)
        ) {
          const g = r.oxw(3);
          r.xp6(1), r.Q6J("ngTemplateOutlet", g.contentFromContentChild);
        }
      }
      function v(y, I) {
        if ((1 & y && r.YNc(0, R, 2, 1, "ng-container", 23), 2 & y)) {
          const g = r.oxw(2);
          r.Q6J(
            "ngIf",
            g.contentFromContentChild && (g.isOpen || g.inAnimation)
          );
        }
      }
      function T(y, I) {
        if ((1 & y && (r.ynx(0), r._UZ(1, "div", 21), r.BQk()), 2 & y)) {
          const g = r.oxw(3);
          r.xp6(1), r.Q6J("innerHTML", g.nzFooter, r.oJD);
        }
      }
      function S(y, I) {
        if (
          (1 & y &&
            (r.TgZ(0, "div", 26),
            r.YNc(1, T, 2, 1, "ng-container", 18),
            r.qZA()),
          2 & y)
        ) {
          const g = r.oxw(2);
          r.xp6(1), r.Q6J("nzStringTemplateOutlet", g.nzFooter);
        }
      }
      function x(y, I) {
        if (
          (1 & y &&
            (r.TgZ(0, "div", 1),
            r.YNc(1, ut, 1, 1, "div", 2),
            r.TgZ(2, "div")(3, "div", 3)(4, "div", 4),
            r.YNc(5, L, 5, 5, "div", 5),
            r.TgZ(6, "div", 6),
            r.YNc(7, st, 0, 0, "ng-template", 7),
            r.YNc(8, et, 2, 1, "ng-container", 8),
            r.YNc(9, v, 1, 1, "ng-template", null, 9, r.W1O),
            r.qZA(),
            r.YNc(11, S, 2, 1, "div", 10),
            r.qZA()()()()),
          2 & y)
        ) {
          const g = r.MAs(10),
            A = r.oxw();
          r.Udp("transform", A.offsetTransform)(
            "transition",
            A.placementChanging ? "none" : null
          )("z-index", A.nzZIndex),
            r.ekj("ant-drawer-rtl", "rtl" === A.dir)(
              "ant-drawer-open",
              A.isOpen
            )("no-mask", !A.nzMask)("ant-drawer-top", "top" === A.nzPlacement)(
              "ant-drawer-bottom",
              "bottom" === A.nzPlacement
            )("ant-drawer-right", "right" === A.nzPlacement)(
              "ant-drawer-left",
              "left" === A.nzPlacement
            ),
            r.Q6J("nzNoAnimation", A.nzNoAnimation),
            r.xp6(1),
            r.Q6J("ngIf", A.nzMask),
            r.xp6(1),
            r.Gre("ant-drawer-content-wrapper ", A.nzWrapClassName, ""),
            r.Udp("width", A.width)("height", A.height)(
              "transform",
              A.transform
            )("transition", A.placementChanging ? "none" : null),
            r.xp6(2),
            r.Udp("height", A.isLeftOrRight ? "100%" : null),
            r.xp6(1),
            r.Q6J("ngIf", A.nzTitle || A.nzClosable),
            r.xp6(1),
            r.Q6J("ngStyle", A.nzBodyStyle),
            r.xp6(2),
            r.Q6J("ngIf", A.nzContent)("ngIfElse", g),
            r.xp6(3),
            r.Q6J("ngIf", A.nzFooter);
        }
      }
      let h = (() => {
        var y;
        class I {
          constructor(A) {
            this.templateRef = A;
          }
        }
        return (
          ((y = I).ɵfac = function (A) {
            return new (A || y)(r.Y36(r.Rgc));
          }),
          (y.ɵdir = r.lG2({
            type: y,
            selectors: [["", "nzDrawerContent", ""]],
            exportAs: ["nzDrawerContent"],
          })),
          I
        );
      })();
      class D {}
      let K = (() => {
          var y;
          class I extends D {
            set nzVisible(A) {
              this.isOpen = A;
            }
            get nzVisible() {
              return this.isOpen;
            }
            get offsetTransform() {
              if (!this.isOpen || this.nzOffsetX + this.nzOffsetY === 0)
                return null;
              switch (this.nzPlacement) {
                case "left":
                  return `translateX(${this.nzOffsetX}px)`;
                case "right":
                  return `translateX(-${this.nzOffsetX}px)`;
                case "top":
                  return `translateY(${this.nzOffsetY}px)`;
                case "bottom":
                  return `translateY(-${this.nzOffsetY}px)`;
              }
            }
            get transform() {
              if (this.isOpen) return null;
              switch (this.nzPlacement) {
                case "left":
                  return "translateX(-100%)";
                case "right":
                  return "translateX(100%)";
                case "top":
                  return "translateY(-100%)";
                case "bottom":
                  return "translateY(100%)";
              }
            }
            get width() {
              return this.isLeftOrRight
                ? (0, Z.WX)(
                    void 0 === this.nzWidth
                      ? "large" === this.nzSize
                        ? 736
                        : 378
                      : this.nzWidth
                  )
                : null;
            }
            get height() {
              return this.isLeftOrRight
                ? null
                : (0, Z.WX)(
                    void 0 === this.nzHeight
                      ? "large" === this.nzSize
                        ? 736
                        : 378
                      : this.nzHeight
                  );
            }
            get isLeftOrRight() {
              return (
                "left" === this.nzPlacement || "right" === this.nzPlacement
              );
            }
            get afterOpen() {
              return this.nzAfterOpen.asObservable();
            }
            get afterClose() {
              return this.nzAfterClose.asObservable();
            }
            isTemplateRef(A) {
              return A instanceof r.Rgc;
            }
            constructor(A, at, _t, vt, yt, Bt, Ut, Ft, Zt, kt, Yt) {
              super(),
                (this.cdr = A),
                (this.document = at),
                (this.nzConfigService = _t),
                (this.renderer = vt),
                (this.overlay = yt),
                (this.injector = Bt),
                (this.changeDetectorRef = Ut),
                (this.focusTrapFactory = Ft),
                (this.viewContainerRef = Zt),
                (this.overlayKeyboardDispatcher = kt),
                (this.directionality = Yt),
                (this._nzModuleName = "drawer"),
                (this.nzCloseIcon = "close"),
                (this.nzClosable = !0),
                (this.nzMaskClosable = !0),
                (this.nzMask = !0),
                (this.nzCloseOnNavigation = !0),
                (this.nzNoAnimation = !1),
                (this.nzKeyboard = !0),
                (this.nzPlacement = "right"),
                (this.nzSize = "default"),
                (this.nzMaskStyle = {}),
                (this.nzBodyStyle = {}),
                (this.nzZIndex = 1e3),
                (this.nzOffsetX = 0),
                (this.nzOffsetY = 0),
                (this.componentInstance = null),
                (this.nzOnViewInit = new r.vpe()),
                (this.nzOnClose = new r.vpe()),
                (this.nzVisibleChange = new r.vpe()),
                (this.destroy$ = new w.x()),
                (this.placementChanging = !1),
                (this.placementChangeTimeoutId = -1),
                (this.isOpen = !1),
                (this.inAnimation = !1),
                (this.templateContext = { $implicit: void 0, drawerRef: this }),
                (this.nzAfterOpen = new w.x()),
                (this.nzAfterClose = new w.x()),
                (this.nzDirection = void 0),
                (this.dir = "ltr");
            }
            ngOnInit() {
              this.directionality.change
                ?.pipe((0, Q.R)(this.destroy$))
                .subscribe((A) => {
                  (this.dir = A), this.cdr.detectChanges();
                }),
                (this.dir = this.nzDirection || this.directionality.value),
                this.attachOverlay(),
                this.updateOverlayStyle(),
                this.updateBodyOverflow(),
                (this.templateContext = {
                  $implicit: this.nzContentParams,
                  drawerRef: this,
                }),
                this.changeDetectorRef.detectChanges();
            }
            ngAfterViewInit() {
              this.attachBodyContent(),
                this.nzOnViewInit.observers.length &&
                  setTimeout(() => {
                    this.nzOnViewInit.emit();
                  });
            }
            ngOnChanges(A) {
              const { nzPlacement: at, nzVisible: _t } = A;
              _t && (A.nzVisible.currentValue ? this.open() : this.close()),
                at &&
                  !at.isFirstChange() &&
                  this.triggerPlacementChangeCycleOnce();
            }
            ngOnDestroy() {
              this.destroy$.next(),
                this.destroy$.complete(),
                clearTimeout(this.placementChangeTimeoutId),
                this.disposeOverlay();
            }
            getAnimationDuration() {
              return this.nzNoAnimation ? 0 : 300;
            }
            triggerPlacementChangeCycleOnce() {
              this.nzNoAnimation ||
                ((this.placementChanging = !0),
                this.changeDetectorRef.markForCheck(),
                clearTimeout(this.placementChangeTimeoutId),
                (this.placementChangeTimeoutId = setTimeout(() => {
                  (this.placementChanging = !1),
                    this.changeDetectorRef.markForCheck();
                }, this.getAnimationDuration())));
            }
            close(A) {
              (this.isOpen = !1),
                (this.inAnimation = !0),
                this.nzVisibleChange.emit(!1),
                this.updateOverlayStyle(),
                this.overlayKeyboardDispatcher.remove(this.overlayRef),
                this.changeDetectorRef.detectChanges(),
                setTimeout(() => {
                  this.updateBodyOverflow(),
                    this.restoreFocus(),
                    (this.inAnimation = !1),
                    this.nzAfterClose.next(A),
                    this.nzAfterClose.complete(),
                    (this.componentInstance = null);
                }, this.getAnimationDuration());
            }
            open() {
              this.attachOverlay(),
                (this.isOpen = !0),
                (this.inAnimation = !0),
                this.nzVisibleChange.emit(!0),
                this.overlayKeyboardDispatcher.add(this.overlayRef),
                this.updateOverlayStyle(),
                this.updateBodyOverflow(),
                this.savePreviouslyFocusedElement(),
                this.trapFocus(),
                this.changeDetectorRef.detectChanges(),
                setTimeout(() => {
                  (this.inAnimation = !1),
                    this.changeDetectorRef.detectChanges(),
                    this.nzAfterOpen.next();
                }, this.getAnimationDuration());
            }
            getContentComponent() {
              return this.componentInstance;
            }
            closeClick() {
              this.nzOnClose.emit();
            }
            maskClick() {
              this.nzMaskClosable && this.nzMask && this.nzOnClose.emit();
            }
            attachBodyContent() {
              if (
                (this.bodyPortalOutlet.dispose(),
                this.nzContent instanceof r.DyG)
              ) {
                const A = r.zs3.create({
                    parent: this.injector,
                    providers: [{ provide: D, useValue: this }],
                  }),
                  at = new u.C5(this.nzContent, null, A),
                  _t = this.bodyPortalOutlet.attachComponentPortal(at);
                (this.componentInstance = _t.instance),
                  Object.assign(_t.instance, this.nzContentParams),
                  _t.changeDetectorRef.detectChanges();
              }
            }
            attachOverlay() {
              this.overlayRef ||
                ((this.portal = new u.UE(
                  this.drawerTemplate,
                  this.viewContainerRef
                )),
                (this.overlayRef = this.overlay.create(
                  this.getOverlayConfig()
                ))),
                this.overlayRef &&
                  !this.overlayRef.hasAttached() &&
                  (this.overlayRef.attach(this.portal),
                  this.overlayRef
                    .keydownEvents()
                    .pipe((0, Q.R)(this.destroy$))
                    .subscribe((A) => {
                      A.keyCode === n.hY &&
                        this.isOpen &&
                        this.nzKeyboard &&
                        this.nzOnClose.emit();
                    }),
                  this.overlayRef
                    .detachments()
                    .pipe((0, Q.R)(this.destroy$))
                    .subscribe(() => {
                      this.disposeOverlay();
                    }));
            }
            disposeOverlay() {
              this.overlayRef?.dispose(), (this.overlayRef = null);
            }
            getOverlayConfig() {
              return new l.X_({
                disposeOnNavigation: this.nzCloseOnNavigation,
                positionStrategy: this.overlay.position().global(),
                scrollStrategy: this.overlay.scrollStrategies.block(),
              });
            }
            updateOverlayStyle() {
              this.overlayRef &&
                this.overlayRef.overlayElement &&
                this.renderer.setStyle(
                  this.overlayRef.overlayElement,
                  "pointer-events",
                  this.isOpen ? "auto" : "none"
                );
            }
            updateBodyOverflow() {
              this.overlayRef &&
                (this.isOpen
                  ? this.overlayRef.getConfig().scrollStrategy.enable()
                  : this.overlayRef.getConfig().scrollStrategy.disable());
            }
            savePreviouslyFocusedElement() {
              this.document &&
                !this.previouslyFocusedElement &&
                ((this.previouslyFocusedElement = this.document.activeElement),
                this.previouslyFocusedElement &&
                  "function" == typeof this.previouslyFocusedElement.blur &&
                  this.previouslyFocusedElement.blur());
            }
            trapFocus() {
              !this.focusTrap &&
                this.overlayRef &&
                this.overlayRef.overlayElement &&
                ((this.focusTrap = this.focusTrapFactory.create(
                  this.overlayRef.overlayElement
                )),
                this.focusTrap.focusInitialElement());
            }
            restoreFocus() {
              this.previouslyFocusedElement &&
                "function" == typeof this.previouslyFocusedElement.focus &&
                this.previouslyFocusedElement.focus(),
                this.focusTrap && this.focusTrap.destroy();
            }
          }
          return (
            ((y = I).ɵfac = function (A) {
              return new (A || y)(
                r.Y36(r.sBO),
                r.Y36(P.K0, 8),
                r.Y36(F.jY),
                r.Y36(r.Qsj),
                r.Y36(l.aV),
                r.Y36(r.zs3),
                r.Y36(r.sBO),
                r.Y36(e.qV),
                r.Y36(r.s_b),
                r.Y36(l.Vs),
                r.Y36(X.Is, 8)
              );
            }),
            (y.ɵcmp = r.Xpm({
              type: y,
              selectors: [["nz-drawer"]],
              contentQueries: function (A, at, _t) {
                if ((1 & A && r.Suo(_t, h, 7, r.Rgc), 2 & A)) {
                  let vt;
                  r.iGM((vt = r.CRH())) &&
                    (at.contentFromContentChild = vt.first);
                }
              },
              viewQuery: function (A, at) {
                if ((1 & A && (r.Gf(mt, 7), r.Gf(u.Pl, 5)), 2 & A)) {
                  let _t;
                  r.iGM((_t = r.CRH())) && (at.drawerTemplate = _t.first),
                    r.iGM((_t = r.CRH())) && (at.bodyPortalOutlet = _t.first);
                }
              },
              inputs: {
                nzContent: "nzContent",
                nzCloseIcon: "nzCloseIcon",
                nzClosable: "nzClosable",
                nzMaskClosable: "nzMaskClosable",
                nzMask: "nzMask",
                nzCloseOnNavigation: "nzCloseOnNavigation",
                nzNoAnimation: "nzNoAnimation",
                nzKeyboard: "nzKeyboard",
                nzTitle: "nzTitle",
                nzExtra: "nzExtra",
                nzFooter: "nzFooter",
                nzPlacement: "nzPlacement",
                nzSize: "nzSize",
                nzMaskStyle: "nzMaskStyle",
                nzBodyStyle: "nzBodyStyle",
                nzWrapClassName: "nzWrapClassName",
                nzWidth: "nzWidth",
                nzHeight: "nzHeight",
                nzZIndex: "nzZIndex",
                nzOffsetX: "nzOffsetX",
                nzOffsetY: "nzOffsetY",
                nzVisible: "nzVisible",
              },
              outputs: {
                nzOnViewInit: "nzOnViewInit",
                nzOnClose: "nzOnClose",
                nzVisibleChange: "nzVisibleChange",
              },
              exportAs: ["nzDrawer"],
              features: [r.qOj, r.TTD],
              decls: 2,
              vars: 0,
              consts: [
                ["drawerTemplate", ""],
                [1, "ant-drawer", 3, "nzNoAnimation"],
                ["class", "ant-drawer-mask", 3, "ngStyle", "click", 4, "ngIf"],
                [1, "ant-drawer-content"],
                [1, "ant-drawer-wrapper-body"],
                [
                  "class",
                  "ant-drawer-header",
                  3,
                  "ant-drawer-header-close-only",
                  4,
                  "ngIf",
                ],
                [1, "ant-drawer-body", 3, "ngStyle"],
                ["cdkPortalOutlet", ""],
                [4, "ngIf", "ngIfElse"],
                ["contentElseTemp", ""],
                ["class", "ant-drawer-footer", 4, "ngIf"],
                [1, "ant-drawer-mask", 3, "ngStyle", "click"],
                [1, "ant-drawer-header"],
                [1, "ant-drawer-header-title"],
                [
                  "aria-label",
                  "Close",
                  "class",
                  "ant-drawer-close",
                  "style",
                  "--scroll-bar: 0px;",
                  3,
                  "click",
                  4,
                  "ngIf",
                ],
                ["class", "ant-drawer-title", 4, "ngIf"],
                ["class", "ant-drawer-extra", 4, "ngIf"],
                [
                  "aria-label",
                  "Close",
                  1,
                  "ant-drawer-close",
                  2,
                  "--scroll-bar",
                  "0px",
                  3,
                  "click",
                ],
                [4, "nzStringTemplateOutlet"],
                ["nz-icon", "", 3, "nzType"],
                [1, "ant-drawer-title"],
                [3, "innerHTML"],
                [1, "ant-drawer-extra"],
                [4, "ngIf"],
                [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
                [3, "ngTemplateOutlet"],
                [1, "ant-drawer-footer"],
              ],
              template: function (A, at) {
                1 & A && r.YNc(0, x, 12, 40, "ng-template", null, 0, r.W1O);
              },
              dependencies: [P.O5, P.tP, P.PC, u.Pl, ot.Ls, lt.f, q.P],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, t.gn)([(0, Z.yF)()], I.prototype, "nzClosable", void 0),
            (0, t.gn)(
              [(0, F.oS)(), (0, Z.yF)()],
              I.prototype,
              "nzMaskClosable",
              void 0
            ),
            (0, t.gn)(
              [(0, F.oS)(), (0, Z.yF)()],
              I.prototype,
              "nzMask",
              void 0
            ),
            (0, t.gn)(
              [(0, F.oS)(), (0, Z.yF)()],
              I.prototype,
              "nzCloseOnNavigation",
              void 0
            ),
            (0, t.gn)([(0, Z.yF)()], I.prototype, "nzNoAnimation", void 0),
            (0, t.gn)([(0, Z.yF)()], I.prototype, "nzKeyboard", void 0),
            (0, t.gn)([(0, F.oS)()], I.prototype, "nzDirection", void 0),
            I
          );
        })(),
        it = (() => {
          var y;
          class I {}
          return (
            ((y = I).ɵfac = function (A) {
              return new (A || y)();
            }),
            (y.ɵmod = r.oAB({ type: y })),
            (y.ɵinj = r.cJS({})),
            I
          );
        })(),
        M = (() => {
          var y;
          class I {}
          return (
            ((y = I).ɵfac = function (A) {
              return new (A || y)();
            }),
            (y.ɵmod = r.oAB({ type: y })),
            (y.ɵinj = r.cJS({
              imports: [X.vT, P.ez, l.U8, u.eL, ot.PV, lt.T, q.g, it],
            })),
            I
          );
        })();
    },
    60804: (gt, rt, o) => {
      o.d(rt, { Xo: () => x, gB: () => S, p9: () => v });
      var t = o(68484),
        n = o(65879),
        l = o(78645),
        u = o(59773),
        P = o(27921),
        r = o(40874),
        w = o(96814),
        Q = o(64345),
        F = o(8324),
        Z = o(49388);
      function e(h, G) {
        if ((1 & h && (n.ynx(0), n._UZ(1, "img", 5), n.BQk()), 2 & h)) {
          const j = n.oxw(2);
          n.xp6(1),
            n.Q6J(
              "src",
              j.nzNotFoundImage,
              n.LSH
            )("alt", j.isContentString ? j.nzNotFoundContent : "empty");
        }
      }
      function X(h, G) {
        if (
          (1 & h && (n.ynx(0), n.YNc(1, e, 2, 2, "ng-container", 4), n.BQk()),
          2 & h)
        ) {
          const j = n.oxw();
          n.xp6(1), n.Q6J("nzStringTemplateOutlet", j.nzNotFoundImage);
        }
      }
      function ot(h, G) {
        1 & h && n._UZ(0, "nz-empty-default");
      }
      function lt(h, G) {
        1 & h && n._UZ(0, "nz-empty-simple");
      }
      function q(h, G) {
        if ((1 & h && (n.ynx(0), n._uU(1), n.BQk()), 2 & h)) {
          const j = n.oxw(2);
          n.xp6(1),
            n.hij(
              " ",
              j.isContentString ? j.nzNotFoundContent : j.locale.description,
              " "
            );
        }
      }
      function mt(h, G) {
        if (
          (1 & h &&
            (n.TgZ(0, "p", 6), n.YNc(1, q, 2, 1, "ng-container", 4), n.qZA()),
          2 & h)
        ) {
          const j = n.oxw();
          n.xp6(1), n.Q6J("nzStringTemplateOutlet", j.nzNotFoundContent);
        }
      }
      function ut(h, G) {
        if ((1 & h && (n.ynx(0), n._uU(1), n.BQk()), 2 & h)) {
          const j = n.oxw(2);
          n.xp6(1), n.hij(" ", j.nzNotFoundFooter, " ");
        }
      }
      function H(h, G) {
        if (
          (1 & h &&
            (n.TgZ(0, "div", 7),
            n.YNc(1, ut, 2, 1, "ng-container", 4),
            n.qZA()),
          2 & h)
        ) {
          const j = n.oxw();
          n.xp6(1), n.Q6J("nzStringTemplateOutlet", j.nzNotFoundFooter);
        }
      }
      function k(h, G) {
        1 & h && n._UZ(0, "nz-empty", 6),
          2 & h && n.Q6J("nzNotFoundImage", "simple");
      }
      function $(h, G) {
        1 & h && n._UZ(0, "nz-empty", 7),
          2 & h && n.Q6J("nzNotFoundImage", "simple");
      }
      function Y(h, G) {
        1 & h && n._UZ(0, "nz-empty");
      }
      function N(h, G) {
        if (
          (1 & h &&
            (n.ynx(0, 2),
            n.YNc(1, k, 1, 1, "nz-empty", 3),
            n.YNc(2, $, 1, 1, "nz-empty", 4),
            n.YNc(3, Y, 1, 0, "nz-empty", 5),
            n.BQk()),
          2 & h)
        ) {
          const j = n.oxw();
          n.Q6J("ngSwitch", j.size),
            n.xp6(1),
            n.Q6J("ngSwitchCase", "normal"),
            n.xp6(1),
            n.Q6J("ngSwitchCase", "small");
        }
      }
      function tt(h, G) {}
      function L(h, G) {
        if ((1 & h && n.YNc(0, tt, 0, 0, "ng-template", 8), 2 & h)) {
          const j = n.oxw(2);
          n.Q6J("cdkPortalOutlet", j.contentPortal);
        }
      }
      function st(h, G) {
        if ((1 & h && (n.ynx(0), n._uU(1), n.BQk()), 2 & h)) {
          const j = n.oxw(2);
          n.xp6(1), n.hij(" ", j.content, " ");
        }
      }
      function nt(h, G) {
        if (
          (1 & h &&
            (n.ynx(0),
            n.YNc(1, L, 1, 1, null, 1),
            n.YNc(2, st, 2, 1, "ng-container", 1),
            n.BQk()),
          2 & h)
        ) {
          const j = n.oxw();
          n.xp6(1),
            n.Q6J("ngIf", "string" !== j.contentType),
            n.xp6(1),
            n.Q6J("ngIf", "string" === j.contentType);
        }
      }
      const J = new n.OlP("nz-empty-component-name");
      let et = (() => {
          var h;
          class G {}
          return (
            ((h = G).ɵfac = function (D) {
              return new (D || h)();
            }),
            (h.ɵcmp = n.Xpm({
              type: h,
              selectors: [["nz-empty-default"]],
              exportAs: ["nzEmptyDefault"],
              decls: 12,
              vars: 0,
              consts: [
                [
                  "width",
                  "184",
                  "height",
                  "152",
                  "viewBox",
                  "0 0 184 152",
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                  1,
                  "ant-empty-img-default",
                ],
                ["fill", "none", "fill-rule", "evenodd"],
                ["transform", "translate(24 31.67)"],
                [
                  "cx",
                  "67.797",
                  "cy",
                  "106.89",
                  "rx",
                  "67.797",
                  "ry",
                  "12.668",
                  1,
                  "ant-empty-img-default-ellipse",
                ],
                [
                  "d",
                  "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
                  1,
                  "ant-empty-img-default-path-1",
                ],
                [
                  "d",
                  "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
                  "transform",
                  "translate(13.56)",
                  1,
                  "ant-empty-img-default-path-2",
                ],
                [
                  "d",
                  "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
                  1,
                  "ant-empty-img-default-path-3",
                ],
                [
                  "d",
                  "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
                  1,
                  "ant-empty-img-default-path-4",
                ],
                [
                  "d",
                  "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
                  1,
                  "ant-empty-img-default-path-5",
                ],
                [
                  "transform",
                  "translate(149.65 15.383)",
                  1,
                  "ant-empty-img-default-g",
                ],
                ["cx", "20.654", "cy", "3.167", "rx", "2.849", "ry", "2.815"],
                ["d", "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"],
              ],
              template: function (D, V) {
                1 & D &&
                  (n.O4$(),
                  n.TgZ(0, "svg", 0)(1, "g", 1)(2, "g", 2),
                  n._UZ(3, "ellipse", 3)(4, "path", 4)(5, "path", 5)(
                    6,
                    "path",
                    6
                  )(7, "path", 7),
                  n.qZA(),
                  n._UZ(8, "path", 8),
                  n.TgZ(9, "g", 9),
                  n._UZ(10, "ellipse", 10)(11, "path", 11),
                  n.qZA()()());
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            G
          );
        })(),
        W = (() => {
          var h;
          class G {}
          return (
            ((h = G).ɵfac = function (D) {
              return new (D || h)();
            }),
            (h.ɵcmp = n.Xpm({
              type: h,
              selectors: [["nz-empty-simple"]],
              exportAs: ["nzEmptySimple"],
              decls: 6,
              vars: 0,
              consts: [
                [
                  "width",
                  "64",
                  "height",
                  "41",
                  "viewBox",
                  "0 0 64 41",
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                  1,
                  "ant-empty-img-simple",
                ],
                [
                  "transform",
                  "translate(0 1)",
                  "fill",
                  "none",
                  "fill-rule",
                  "evenodd",
                ],
                [
                  "cx",
                  "32",
                  "cy",
                  "33",
                  "rx",
                  "32",
                  "ry",
                  "7",
                  1,
                  "ant-empty-img-simple-ellipse",
                ],
                ["fill-rule", "nonzero", 1, "ant-empty-img-simple-g"],
                [
                  "d",
                  "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z",
                ],
                [
                  "d",
                  "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
                  1,
                  "ant-empty-img-simple-path",
                ],
              ],
              template: function (D, V) {
                1 & D &&
                  (n.O4$(),
                  n.TgZ(0, "svg", 0)(1, "g", 1),
                  n._UZ(2, "ellipse", 2),
                  n.TgZ(3, "g", 3),
                  n._UZ(4, "path", 4)(5, "path", 5),
                  n.qZA()()());
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            G
          );
        })();
      const R = ["default", "simple"];
      let v = (() => {
          var h;
          class G {
            constructor(D, V) {
              (this.i18n = D),
                (this.cdr = V),
                (this.nzNotFoundImage = "default"),
                (this.isContentString = !1),
                (this.isImageBuildIn = !0),
                (this.destroy$ = new l.x());
            }
            ngOnChanges(D) {
              const { nzNotFoundContent: V, nzNotFoundImage: pt } = D;
              if (
                (V &&
                  (this.isContentString = "string" == typeof V.currentValue),
                pt)
              ) {
                const K = pt.currentValue || "default";
                this.isImageBuildIn = R.findIndex((it) => it === K) > -1;
              }
            }
            ngOnInit() {
              this.i18n.localeChange
                .pipe((0, u.R)(this.destroy$))
                .subscribe(() => {
                  (this.locale = this.i18n.getLocaleData("Empty")),
                    this.cdr.markForCheck();
                });
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete();
            }
          }
          return (
            ((h = G).ɵfac = function (D) {
              return new (D || h)(n.Y36(Q.wi), n.Y36(n.sBO));
            }),
            (h.ɵcmp = n.Xpm({
              type: h,
              selectors: [["nz-empty"]],
              hostAttrs: [1, "ant-empty"],
              inputs: {
                nzNotFoundImage: "nzNotFoundImage",
                nzNotFoundContent: "nzNotFoundContent",
                nzNotFoundFooter: "nzNotFoundFooter",
              },
              exportAs: ["nzEmpty"],
              features: [n.TTD],
              decls: 6,
              vars: 5,
              consts: [
                [1, "ant-empty-image"],
                [4, "ngIf"],
                ["class", "ant-empty-description", 4, "ngIf"],
                ["class", "ant-empty-footer", 4, "ngIf"],
                [4, "nzStringTemplateOutlet"],
                [3, "src", "alt"],
                [1, "ant-empty-description"],
                [1, "ant-empty-footer"],
              ],
              template: function (D, V) {
                1 & D &&
                  (n.TgZ(0, "div", 0),
                  n.YNc(1, X, 2, 1, "ng-container", 1),
                  n.YNc(2, ot, 1, 0, "nz-empty-default", 1),
                  n.YNc(3, lt, 1, 0, "nz-empty-simple", 1),
                  n.qZA(),
                  n.YNc(4, mt, 2, 1, "p", 2),
                  n.YNc(5, H, 2, 1, "div", 3)),
                  2 & D &&
                    (n.xp6(1),
                    n.Q6J("ngIf", !V.isImageBuildIn),
                    n.xp6(1),
                    n.Q6J(
                      "ngIf",
                      V.isImageBuildIn && "simple" !== V.nzNotFoundImage
                    ),
                    n.xp6(1),
                    n.Q6J(
                      "ngIf",
                      V.isImageBuildIn && "simple" === V.nzNotFoundImage
                    ),
                    n.xp6(1),
                    n.Q6J("ngIf", null !== V.nzNotFoundContent),
                    n.xp6(1),
                    n.Q6J("ngIf", V.nzNotFoundFooter));
              },
              dependencies: [w.O5, F.f, et, W],
              encapsulation: 2,
              changeDetection: 0,
            })),
            G
          );
        })(),
        S = (() => {
          var h;
          class G {
            constructor(D, V, pt, K) {
              (this.configService = D),
                (this.viewContainerRef = V),
                (this.cdr = pt),
                (this.injector = K),
                (this.contentType = "string"),
                (this.size = ""),
                (this.destroy$ = new l.x());
            }
            ngOnChanges(D) {
              D.nzComponentName &&
                (this.size = (function T(h) {
                  switch (h) {
                    case "table":
                    case "list":
                      return "normal";
                    case "select":
                    case "tree-select":
                    case "cascader":
                    case "transfer":
                      return "small";
                    default:
                      return "";
                  }
                })(D.nzComponentName.currentValue)),
                D.specificContent &&
                  !D.specificContent.isFirstChange() &&
                  ((this.content = D.specificContent.currentValue),
                  this.renderEmpty());
            }
            ngOnInit() {
              this.subscribeDefaultEmptyContentChange();
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete();
            }
            renderEmpty() {
              const D = this.content;
              if ("string" == typeof D) this.contentType = "string";
              else if (D instanceof n.Rgc) {
                const V = { $implicit: this.nzComponentName };
                (this.contentType = "template"),
                  (this.contentPortal = new t.UE(D, this.viewContainerRef, V));
              } else if (D instanceof n.DyG) {
                const V = n.zs3.create({
                  parent: this.injector,
                  providers: [{ provide: J, useValue: this.nzComponentName }],
                });
                (this.contentType = "component"),
                  (this.contentPortal = new t.C5(D, this.viewContainerRef, V));
              } else
                (this.contentType = "string"), (this.contentPortal = void 0);
              this.cdr.detectChanges();
            }
            subscribeDefaultEmptyContentChange() {
              this.configService
                .getConfigChangeEventForComponent("empty")
                .pipe((0, P.O)(!0), (0, u.R)(this.destroy$))
                .subscribe(() => {
                  (this.content =
                    this.specificContent || this.getUserDefaultEmptyContent()),
                    this.renderEmpty();
                });
            }
            getUserDefaultEmptyContent() {
              return (this.configService.getConfigForComponent("empty") || {})
                .nzDefaultEmptyContent;
            }
          }
          return (
            ((h = G).ɵfac = function (D) {
              return new (D || h)(
                n.Y36(r.jY),
                n.Y36(n.s_b),
                n.Y36(n.sBO),
                n.Y36(n.zs3)
              );
            }),
            (h.ɵcmp = n.Xpm({
              type: h,
              selectors: [["nz-embed-empty"]],
              inputs: {
                nzComponentName: "nzComponentName",
                specificContent: "specificContent",
              },
              exportAs: ["nzEmbedEmpty"],
              features: [n.TTD],
              decls: 2,
              vars: 2,
              consts: [
                [3, "ngSwitch", 4, "ngIf"],
                [4, "ngIf"],
                [3, "ngSwitch"],
                [
                  "class",
                  "ant-empty-normal",
                  3,
                  "nzNotFoundImage",
                  4,
                  "ngSwitchCase",
                ],
                [
                  "class",
                  "ant-empty-small",
                  3,
                  "nzNotFoundImage",
                  4,
                  "ngSwitchCase",
                ],
                [4, "ngSwitchDefault"],
                [1, "ant-empty-normal", 3, "nzNotFoundImage"],
                [1, "ant-empty-small", 3, "nzNotFoundImage"],
                [3, "cdkPortalOutlet"],
              ],
              template: function (D, V) {
                1 & D &&
                  (n.YNc(0, N, 4, 3, "ng-container", 0),
                  n.YNc(1, nt, 3, 2, "ng-container", 1)),
                  2 & D &&
                    (n.Q6J("ngIf", !V.content && null !== V.specificContent),
                    n.xp6(1),
                    n.Q6J("ngIf", V.content));
              },
              dependencies: [w.O5, w.RF, w.n9, w.ED, t.Pl, v],
              encapsulation: 2,
              changeDetection: 0,
            })),
            G
          );
        })(),
        x = (() => {
          var h;
          class G {}
          return (
            ((h = G).ɵfac = function (D) {
              return new (D || h)();
            }),
            (h.ɵmod = n.oAB({ type: h })),
            (h.ɵinj = n.cJS({ imports: [Z.vT, w.ez, t.eL, F.T, Q.YI] })),
            G
          );
        })();
    },
    33410: (gt, rt, o) => {
      o.d(rt, {
        E8: () => nt,
        OK: () => L,
        hw: () => W,
        t7: () => et,
        wm: () => R,
      });
      var t = o(65879),
        n = o(78645),
        l = o(59773),
        u = o(97582),
        P = o(99087),
        r = o(27754),
        w = o(73460),
        Q = o(62831),
        F = o(96814),
        Z = o(62595),
        e = o(49388),
        X = o(71088);
      const ot = ["*"],
        lt = ["nz-sider-trigger", ""];
      function q(v, T) {}
      function mt(v, T) {
        if (
          (1 & v && (t.ynx(0), t.YNc(1, q, 0, 0, "ng-template", 3), t.BQk()),
          2 & v)
        ) {
          const S = t.oxw(),
            x = t.MAs(5);
          t.xp6(1), t.Q6J("ngTemplateOutlet", S.nzZeroTrigger || x);
        }
      }
      function ut(v, T) {}
      function H(v, T) {
        if (
          (1 & v && (t.ynx(0), t.YNc(1, ut, 0, 0, "ng-template", 3), t.BQk()),
          2 & v)
        ) {
          const S = t.oxw(),
            x = t.MAs(3);
          t.xp6(1), t.Q6J("ngTemplateOutlet", S.nzTrigger || x);
        }
      }
      function k(v, T) {
        if ((1 & v && t._UZ(0, "span", 5), 2 & v)) {
          const S = t.oxw(2);
          t.Q6J("nzType", S.nzCollapsed ? "right" : "left");
        }
      }
      function $(v, T) {
        if ((1 & v && t._UZ(0, "span", 5), 2 & v)) {
          const S = t.oxw(2);
          t.Q6J("nzType", S.nzCollapsed ? "left" : "right");
        }
      }
      function Y(v, T) {
        if (
          (1 & v &&
            (t.YNc(0, k, 1, 1, "span", 4), t.YNc(1, $, 1, 1, "span", 4)),
          2 & v)
        ) {
          const S = t.oxw();
          t.Q6J("ngIf", !S.nzReverseArrow),
            t.xp6(1),
            t.Q6J("ngIf", S.nzReverseArrow);
        }
      }
      function N(v, T) {
        1 & v && t._UZ(0, "span", 6);
      }
      function tt(v, T) {
        if (1 & v) {
          const S = t.EpF();
          t.TgZ(0, "div", 2),
            t.NdJ("click", function () {
              t.CHM(S);
              const h = t.oxw();
              return t.KtG(h.setCollapsed(!h.nzCollapsed));
            }),
            t.qZA();
        }
        if (2 & v) {
          const S = t.oxw();
          t.Q6J("matchBreakPoint", S.matchBreakPoint)(
            "nzCollapsedWidth",
            S.nzCollapsedWidth
          )("nzCollapsed", S.nzCollapsed)("nzBreakpoint", S.nzBreakpoint)(
            "nzReverseArrow",
            S.nzReverseArrow
          )("nzTrigger", S.nzTrigger)("nzZeroTrigger", S.nzZeroTrigger)(
            "siderWidth",
            S.widthSetting
          );
        }
      }
      let L = (() => {
          var v;
          class T {
            constructor(x, h) {
              (this.elementRef = x),
                (this.renderer = h),
                this.renderer.addClass(
                  this.elementRef.nativeElement,
                  "ant-layout-content"
                );
            }
          }
          return (
            ((v = T).ɵfac = function (x) {
              return new (x || v)(t.Y36(t.SBq), t.Y36(t.Qsj));
            }),
            (v.ɵcmp = t.Xpm({
              type: v,
              selectors: [["nz-content"]],
              exportAs: ["nzContent"],
              ngContentSelectors: ot,
              decls: 1,
              vars: 0,
              template: function (x, h) {
                1 & x && (t.F$t(), t.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            T
          );
        })(),
        nt = (() => {
          var v;
          class T {
            constructor(x, h) {
              (this.elementRef = x),
                (this.renderer = h),
                this.renderer.addClass(
                  this.elementRef.nativeElement,
                  "ant-layout-header"
                );
            }
          }
          return (
            ((v = T).ɵfac = function (x) {
              return new (x || v)(t.Y36(t.SBq), t.Y36(t.Qsj));
            }),
            (v.ɵcmp = t.Xpm({
              type: v,
              selectors: [["nz-header"]],
              exportAs: ["nzHeader"],
              ngContentSelectors: ot,
              decls: 1,
              vars: 0,
              template: function (x, h) {
                1 & x && (t.F$t(), t.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            T
          );
        })(),
        J = (() => {
          var v;
          class T {
            constructor() {
              (this.nzCollapsed = !1),
                (this.nzReverseArrow = !1),
                (this.nzZeroTrigger = null),
                (this.nzTrigger = void 0),
                (this.matchBreakPoint = !1),
                (this.nzCollapsedWidth = null),
                (this.siderWidth = null),
                (this.nzBreakpoint = null),
                (this.isZeroTrigger = !1),
                (this.isNormalTrigger = !1);
            }
            updateTriggerType() {
              (this.isZeroTrigger =
                0 === this.nzCollapsedWidth &&
                ((this.nzBreakpoint && this.matchBreakPoint) ||
                  !this.nzBreakpoint)),
                (this.isNormalTrigger = 0 !== this.nzCollapsedWidth);
            }
            ngOnInit() {
              this.updateTriggerType();
            }
            ngOnChanges() {
              this.updateTriggerType();
            }
          }
          return (
            ((v = T).ɵfac = function (x) {
              return new (x || v)();
            }),
            (v.ɵcmp = t.Xpm({
              type: v,
              selectors: [["", "nz-sider-trigger", ""]],
              hostVars: 10,
              hostBindings: function (x, h) {
                2 & x &&
                  (t.Udp("width", h.isNormalTrigger ? h.siderWidth : null),
                  t.ekj("ant-layout-sider-trigger", h.isNormalTrigger)(
                    "ant-layout-sider-zero-width-trigger",
                    h.isZeroTrigger
                  )(
                    "ant-layout-sider-zero-width-trigger-right",
                    h.isZeroTrigger && h.nzReverseArrow
                  )(
                    "ant-layout-sider-zero-width-trigger-left",
                    h.isZeroTrigger && !h.nzReverseArrow
                  ));
              },
              inputs: {
                nzCollapsed: "nzCollapsed",
                nzReverseArrow: "nzReverseArrow",
                nzZeroTrigger: "nzZeroTrigger",
                nzTrigger: "nzTrigger",
                matchBreakPoint: "matchBreakPoint",
                nzCollapsedWidth: "nzCollapsedWidth",
                siderWidth: "siderWidth",
                nzBreakpoint: "nzBreakpoint",
              },
              exportAs: ["nzSiderTrigger"],
              features: [t.TTD],
              attrs: lt,
              decls: 6,
              vars: 2,
              consts: [
                [4, "ngIf"],
                ["defaultTrigger", ""],
                ["defaultZeroTrigger", ""],
                [3, "ngTemplateOutlet"],
                ["nz-icon", "", 3, "nzType", 4, "ngIf"],
                ["nz-icon", "", 3, "nzType"],
                ["nz-icon", "", "nzType", "bars"],
              ],
              template: function (x, h) {
                1 & x &&
                  (t.YNc(0, mt, 2, 1, "ng-container", 0),
                  t.YNc(1, H, 2, 1, "ng-container", 0),
                  t.YNc(2, Y, 2, 2, "ng-template", null, 1, t.W1O),
                  t.YNc(4, N, 1, 0, "ng-template", null, 2, t.W1O)),
                  2 & x &&
                    (t.Q6J("ngIf", h.isZeroTrigger),
                    t.xp6(1),
                    t.Q6J("ngIf", h.isNormalTrigger));
              },
              dependencies: [F.O5, F.tP, Z.Ls],
              encapsulation: 2,
              changeDetection: 0,
            })),
            T
          );
        })(),
        et = (() => {
          var v;
          class T {
            updateStyleMap() {
              (this.widthSetting = this.nzCollapsed
                ? `${this.nzCollapsedWidth}px`
                : (0, r.WX)(this.nzWidth)),
                (this.flexSetting = `0 0 ${this.widthSetting}`),
                this.cdr.markForCheck();
            }
            updateMenuInlineCollapsed() {
              this.nzMenuDirective &&
                "inline" === this.nzMenuDirective.nzMode &&
                0 !== this.nzCollapsedWidth &&
                this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed);
            }
            setCollapsed(x) {
              x !== this.nzCollapsed &&
                ((this.nzCollapsed = x),
                this.nzCollapsedChange.emit(x),
                this.updateMenuInlineCollapsed(),
                this.updateStyleMap(),
                this.cdr.markForCheck());
            }
            constructor(x, h, G) {
              (this.platform = x),
                (this.cdr = h),
                (this.breakpointService = G),
                (this.destroy$ = new n.x()),
                (this.nzMenuDirective = null),
                (this.nzCollapsedChange = new t.vpe()),
                (this.nzWidth = 200),
                (this.nzTheme = "dark"),
                (this.nzCollapsedWidth = 80),
                (this.nzBreakpoint = null),
                (this.nzZeroTrigger = null),
                (this.nzTrigger = void 0),
                (this.nzReverseArrow = !1),
                (this.nzCollapsible = !1),
                (this.nzCollapsed = !1),
                (this.matchBreakPoint = !1),
                (this.flexSetting = null),
                (this.widthSetting = null);
            }
            ngOnInit() {
              this.updateStyleMap(),
                this.platform.isBrowser &&
                  this.breakpointService
                    .subscribe(P.ow, !0)
                    .pipe((0, l.R)(this.destroy$))
                    .subscribe((x) => {
                      const h = this.nzBreakpoint;
                      h &&
                        (0, r.ov)().subscribe(() => {
                          (this.matchBreakPoint = !x[h]),
                            this.setCollapsed(this.matchBreakPoint),
                            this.cdr.markForCheck();
                        });
                    });
            }
            ngOnChanges(x) {
              const { nzCollapsed: h, nzCollapsedWidth: G, nzWidth: j } = x;
              (h || G || j) && this.updateStyleMap(),
                h && this.updateMenuInlineCollapsed();
            }
            ngAfterContentInit() {
              this.updateMenuInlineCollapsed();
            }
            ngOnDestroy() {
              this.destroy$.next(!0), this.destroy$.complete();
            }
          }
          return (
            ((v = T).ɵfac = function (x) {
              return new (x || v)(t.Y36(Q.t4), t.Y36(t.sBO), t.Y36(P.r3));
            }),
            (v.ɵcmp = t.Xpm({
              type: v,
              selectors: [["nz-sider"]],
              contentQueries: function (x, h, G) {
                if ((1 & x && t.Suo(G, w.wO, 5), 2 & x)) {
                  let j;
                  t.iGM((j = t.CRH())) && (h.nzMenuDirective = j.first);
                }
              },
              hostAttrs: [1, "ant-layout-sider"],
              hostVars: 18,
              hostBindings: function (x, h) {
                2 & x &&
                  (t.Udp("flex", h.flexSetting)("max-width", h.widthSetting)(
                    "min-width",
                    h.widthSetting
                  )("width", h.widthSetting),
                  t.ekj(
                    "ant-layout-sider-zero-width",
                    h.nzCollapsed && 0 === h.nzCollapsedWidth
                  )("ant-layout-sider-light", "light" === h.nzTheme)(
                    "ant-layout-sider-dark",
                    "dark" === h.nzTheme
                  )("ant-layout-sider-collapsed", h.nzCollapsed)(
                    "ant-layout-sider-has-trigger",
                    h.nzCollapsible && null !== h.nzTrigger
                  ));
              },
              inputs: {
                nzWidth: "nzWidth",
                nzTheme: "nzTheme",
                nzCollapsedWidth: "nzCollapsedWidth",
                nzBreakpoint: "nzBreakpoint",
                nzZeroTrigger: "nzZeroTrigger",
                nzTrigger: "nzTrigger",
                nzReverseArrow: "nzReverseArrow",
                nzCollapsible: "nzCollapsible",
                nzCollapsed: "nzCollapsed",
              },
              outputs: { nzCollapsedChange: "nzCollapsedChange" },
              exportAs: ["nzSider"],
              features: [t.TTD],
              ngContentSelectors: ot,
              decls: 3,
              vars: 1,
              consts: [
                [1, "ant-layout-sider-children"],
                [
                  "nz-sider-trigger",
                  "",
                  3,
                  "matchBreakPoint",
                  "nzCollapsedWidth",
                  "nzCollapsed",
                  "nzBreakpoint",
                  "nzReverseArrow",
                  "nzTrigger",
                  "nzZeroTrigger",
                  "siderWidth",
                  "click",
                  4,
                  "ngIf",
                ],
                [
                  "nz-sider-trigger",
                  "",
                  3,
                  "matchBreakPoint",
                  "nzCollapsedWidth",
                  "nzCollapsed",
                  "nzBreakpoint",
                  "nzReverseArrow",
                  "nzTrigger",
                  "nzZeroTrigger",
                  "siderWidth",
                  "click",
                ],
              ],
              template: function (x, h) {
                1 & x &&
                  (t.F$t(),
                  t.TgZ(0, "div", 0),
                  t.Hsn(1),
                  t.qZA(),
                  t.YNc(2, tt, 1, 8, "div", 1)),
                  2 & x &&
                    (t.xp6(2),
                    t.Q6J("ngIf", h.nzCollapsible && null !== h.nzTrigger));
              },
              dependencies: [F.O5, J],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, u.gn)([(0, r.yF)()], T.prototype, "nzReverseArrow", void 0),
            (0, u.gn)([(0, r.yF)()], T.prototype, "nzCollapsible", void 0),
            (0, u.gn)([(0, r.yF)()], T.prototype, "nzCollapsed", void 0),
            T
          );
        })(),
        W = (() => {
          var v;
          class T {
            constructor(x) {
              (this.directionality = x),
                (this.dir = "ltr"),
                (this.destroy$ = new n.x());
            }
            ngOnInit() {
              (this.dir = this.directionality.value),
                this.directionality.change
                  ?.pipe((0, l.R)(this.destroy$))
                  .subscribe((x) => {
                    this.dir = x;
                  });
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete();
            }
          }
          return (
            ((v = T).ɵfac = function (x) {
              return new (x || v)(t.Y36(e.Is, 8));
            }),
            (v.ɵcmp = t.Xpm({
              type: v,
              selectors: [["nz-layout"]],
              contentQueries: function (x, h, G) {
                if ((1 & x && t.Suo(G, et, 4), 2 & x)) {
                  let j;
                  t.iGM((j = t.CRH())) && (h.listOfNzSiderComponent = j);
                }
              },
              hostAttrs: [1, "ant-layout"],
              hostVars: 4,
              hostBindings: function (x, h) {
                2 & x &&
                  t.ekj("ant-layout-rtl", "rtl" === h.dir)(
                    "ant-layout-has-sider",
                    h.listOfNzSiderComponent.length > 0
                  );
              },
              exportAs: ["nzLayout"],
              ngContentSelectors: ot,
              decls: 1,
              vars: 0,
              template: function (x, h) {
                1 & x && (t.F$t(), t.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            T
          );
        })(),
        R = (() => {
          var v;
          class T {}
          return (
            ((v = T).ɵfac = function (x) {
              return new (x || v)();
            }),
            (v.ɵmod = t.oAB({ type: v })),
            (v.ɵinj = t.cJS({ imports: [e.vT, F.ez, Z.PV, X.xu, Q.ud] })),
            T
          );
        })();
    },
    16976: (gt, rt, o) => {
      o.d(rt, {
        n_: () => Rt,
        KC: () => Ht,
        nk: () => Vt,
        AA: () => f,
        yw: () => Mt,
        Vk: () => Qt,
        yi: () => Wt,
        Pb: () => Dt,
        IO: () => It,
        Ph: () => C,
      });
      var t = o(65879),
        n = o(96814),
        l = o(96928),
        u = o(8324),
        P = o(97582),
        r = o(27754),
        w = o(78645),
        Q = o(74911),
        F = o(22096),
        Z = o(63019),
        e = o(65592),
        X = o(65619),
        ot = o(48180),
        lt = o(37398),
        q = o(54829),
        mt = o(79360),
        ut = o(8251);
      function H(i, s) {
        return s
          ? (p) =>
              p.pipe(
                H((d, E) =>
                  (0, q.Xf)(i(d, E)).pipe(
                    (0, lt.U)((ct, dt) => s(d, ct, E, dt))
                  )
                )
              )
          : (0, mt.e)((p, d) => {
              let E = 0,
                ct = null,
                dt = !1;
              p.subscribe(
                new ut.Q(
                  d,
                  (Ct) => {
                    ct ||
                      ((ct = new ut.Q(d, void 0, () => {
                        (ct = null), dt && d.complete();
                      })),
                      (0, q.Xf)(i(Ct, E++)).subscribe(ct));
                  },
                  () => {
                    (dt = !0), !ct && d.complete();
                  }
                )
              );
            });
      }
      var k = o(27921),
        $ = o(59773),
        Y = o(99087),
        N = o(60804),
        tt = o(49388),
        L = o(82669),
        st = o(10095);
      const nt = ["*"];
      function J(i, s) {
        if ((1 & i && t._UZ(0, "nz-avatar", 3), 2 & i)) {
          const p = t.oxw();
          t.Q6J("nzSrc", p.nzSrc);
        }
      }
      function et(i, s) {
        1 & i && t.Hsn(0, 0, ["*ngIf", "!nzSrc"]);
      }
      function W(i, s) {
        if ((1 & i && t._UZ(0, "nz-list-item-meta-avatar", 3), 2 & i)) {
          const p = t.oxw();
          t.Q6J("nzSrc", p.avatarStr);
        }
      }
      function R(i, s) {
        if (
          (1 & i &&
            (t.TgZ(0, "nz-list-item-meta-avatar"), t.GkF(1, 4), t.qZA()),
          2 & i)
        ) {
          const p = t.oxw();
          t.xp6(1), t.Q6J("ngTemplateOutlet", p.avatarTpl);
        }
      }
      function v(i, s) {
        if ((1 & i && (t.ynx(0), t._uU(1), t.BQk()), 2 & i)) {
          const p = t.oxw(3);
          t.xp6(1), t.Oqu(p.nzTitle);
        }
      }
      function T(i, s) {
        if (
          (1 & i &&
            (t.TgZ(0, "nz-list-item-meta-title"),
            t.YNc(1, v, 2, 1, "ng-container", 6),
            t.qZA()),
          2 & i)
        ) {
          const p = t.oxw(2);
          t.xp6(1), t.Q6J("nzStringTemplateOutlet", p.nzTitle);
        }
      }
      function S(i, s) {
        if ((1 & i && (t.ynx(0), t._uU(1), t.BQk()), 2 & i)) {
          const p = t.oxw(3);
          t.xp6(1), t.Oqu(p.nzDescription);
        }
      }
      function x(i, s) {
        if (
          (1 & i &&
            (t.TgZ(0, "nz-list-item-meta-description"),
            t.YNc(1, S, 2, 1, "ng-container", 6),
            t.qZA()),
          2 & i)
        ) {
          const p = t.oxw(2);
          t.xp6(1), t.Q6J("nzStringTemplateOutlet", p.nzDescription);
        }
      }
      function h(i, s) {
        if (
          (1 & i &&
            (t.TgZ(0, "div", 5),
            t.YNc(1, T, 2, 1, "nz-list-item-meta-title", 1),
            t.YNc(2, x, 2, 1, "nz-list-item-meta-description", 1),
            t.Hsn(3, 1),
            t.Hsn(4, 2),
            t.qZA()),
          2 & i)
        ) {
          const p = t.oxw();
          t.xp6(1),
            t.Q6J("ngIf", p.nzTitle && !p.titleComponent),
            t.xp6(1),
            t.Q6J("ngIf", p.nzDescription && !p.descriptionComponent);
        }
      }
      const G = [
          [["nz-list-item-meta-avatar"]],
          [["nz-list-item-meta-title"]],
          [["nz-list-item-meta-description"]],
        ],
        j = [
          "nz-list-item-meta-avatar",
          "nz-list-item-meta-title",
          "nz-list-item-meta-description",
        ];
      function D(i, s) {
        1 & i && t.Hsn(0);
      }
      const V = ["nz-list-item-actions", ""];
      function pt(i, s) {}
      function K(i, s) {
        1 & i && t._UZ(0, "em", 3);
      }
      function it(i, s) {
        if (
          (1 & i &&
            (t.TgZ(0, "li"),
            t.YNc(1, pt, 0, 0, "ng-template", 1),
            t.YNc(2, K, 1, 0, "em", 2),
            t.qZA()),
          2 & i)
        ) {
          const p = s.$implicit,
            d = s.last;
          t.xp6(1), t.Q6J("ngTemplateOutlet", p), t.xp6(1), t.Q6J("ngIf", !d);
        }
      }
      function M(i, s) {}
      const m = function (i, s) {
        return { $implicit: i, index: s };
      };
      function O(i, s) {
        if (
          (1 & i && (t.ynx(0), t.YNc(1, M, 0, 0, "ng-template", 9), t.BQk()),
          2 & i)
        ) {
          const p = s.$implicit,
            d = s.index,
            E = t.oxw(2);
          t.xp6(1),
            t.Q6J("ngTemplateOutlet", E.nzRenderItem)(
              "ngTemplateOutletContext",
              t.WLB(2, m, p, d)
            );
        }
      }
      function y(i, s) {
        if (
          (1 & i &&
            (t.TgZ(0, "div", 7),
            t.YNc(1, O, 2, 5, "ng-container", 8),
            t.Hsn(2, 4),
            t.qZA()),
          2 & i)
        ) {
          const p = t.oxw();
          t.xp6(1), t.Q6J("ngForOf", p.nzDataSource);
        }
      }
      function I(i, s) {
        if ((1 & i && (t.ynx(0), t._uU(1), t.BQk()), 2 & i)) {
          const p = t.oxw(2);
          t.xp6(1), t.Oqu(p.nzHeader);
        }
      }
      function g(i, s) {
        if (
          (1 & i &&
            (t.TgZ(0, "nz-list-header"),
            t.YNc(1, I, 2, 1, "ng-container", 10),
            t.qZA()),
          2 & i)
        ) {
          const p = t.oxw();
          t.xp6(1), t.Q6J("nzStringTemplateOutlet", p.nzHeader);
        }
      }
      function A(i, s) {
        1 & i && t._UZ(0, "div"), 2 & i && t.Udp("min-height", 53, "px");
      }
      function at(i, s) {}
      function _t(i, s) {
        if (
          (1 & i &&
            (t.TgZ(0, "div", 13),
            t.YNc(1, at, 0, 0, "ng-template", 9),
            t.qZA()),
          2 & i)
        ) {
          const p = s.$implicit,
            d = s.index,
            E = t.oxw(2);
          t.Q6J("nzSpan", E.nzGrid.span || null)("nzXs", E.nzGrid.xs || null)(
            "nzSm",
            E.nzGrid.sm || null
          )("nzMd", E.nzGrid.md || null)("nzLg", E.nzGrid.lg || null)(
            "nzXl",
            E.nzGrid.xl || null
          )("nzXXl", E.nzGrid.xxl || null),
            t.xp6(1),
            t.Q6J("ngTemplateOutlet", E.nzRenderItem)(
              "ngTemplateOutletContext",
              t.WLB(9, m, p, d)
            );
        }
      }
      function vt(i, s) {
        if (
          (1 & i &&
            (t.TgZ(0, "div", 11), t.YNc(1, _t, 2, 12, "div", 12), t.qZA()),
          2 & i)
        ) {
          const p = t.oxw();
          t.Q6J("nzGutter", p.nzGrid.gutter || null),
            t.xp6(1),
            t.Q6J("ngForOf", p.nzDataSource);
        }
      }
      function yt(i, s) {
        if ((1 & i && t._UZ(0, "nz-list-empty", 14), 2 & i)) {
          const p = t.oxw();
          t.Q6J("nzNoResult", p.nzNoResult);
        }
      }
      function Bt(i, s) {
        if ((1 & i && (t.ynx(0), t._uU(1), t.BQk()), 2 & i)) {
          const p = t.oxw(2);
          t.xp6(1), t.Oqu(p.nzFooter);
        }
      }
      function Ut(i, s) {
        if (
          (1 & i &&
            (t.TgZ(0, "nz-list-footer"),
            t.YNc(1, Bt, 2, 1, "ng-container", 10),
            t.qZA()),
          2 & i)
        ) {
          const p = t.oxw();
          t.xp6(1), t.Q6J("nzStringTemplateOutlet", p.nzFooter);
        }
      }
      function Ft(i, s) {}
      function Zt(i, s) {}
      function kt(i, s) {
        if (
          (1 & i &&
            (t.TgZ(0, "nz-list-pagination"),
            t.YNc(1, Zt, 0, 0, "ng-template", 6),
            t.qZA()),
          2 & i)
        ) {
          const p = t.oxw();
          t.xp6(1), t.Q6J("ngTemplateOutlet", p.nzPagination);
        }
      }
      const Yt = [
          [["nz-list-header"]],
          [["nz-list-footer"], ["", "nz-list-footer", ""]],
          [["nz-list-load-more"], ["", "nz-list-load-more", ""]],
          [["nz-list-pagination"], ["", "nz-list-pagination", ""]],
          "*",
        ],
        jt = [
          "nz-list-header",
          "nz-list-footer, [nz-list-footer]",
          "nz-list-load-more, [nz-list-load-more]",
          "nz-list-pagination, [nz-list-pagination]",
          "*",
        ];
      function Xt(i, s) {
        if ((1 & i && t._UZ(0, "ul", 6), 2 & i)) {
          const p = t.oxw(2);
          t.Q6J("nzActions", p.nzActions);
        }
      }
      function qt(i, s) {
        if ((1 & i && (t.YNc(0, Xt, 1, 1, "ul", 5), t.Hsn(1)), 2 & i)) {
          const p = t.oxw();
          t.Q6J("ngIf", p.nzActions && p.nzActions.length > 0);
        }
      }
      function te(i, s) {
        if ((1 & i && (t.ynx(0), t._uU(1), t.BQk()), 2 & i)) {
          const p = t.oxw(3);
          t.xp6(1), t.Oqu(p.nzContent);
        }
      }
      function ee(i, s) {
        if (
          (1 & i && (t.ynx(0), t.YNc(1, te, 2, 1, "ng-container", 8), t.BQk()),
          2 & i)
        ) {
          const p = t.oxw(2);
          t.xp6(1), t.Q6J("nzStringTemplateOutlet", p.nzContent);
        }
      }
      function ne(i, s) {
        if (
          (1 & i &&
            (t.Hsn(0, 1), t.Hsn(1, 2), t.YNc(2, ee, 2, 1, "ng-container", 7)),
          2 & i)
        ) {
          const p = t.oxw();
          t.xp6(2), t.Q6J("ngIf", p.nzContent);
        }
      }
      function ie(i, s) {
        1 & i && t.Hsn(0, 3);
      }
      function oe(i, s) {}
      function se(i, s) {}
      function ae(i, s) {}
      function re(i, s) {}
      function le(i, s) {
        if (
          (1 & i &&
            (t.YNc(0, oe, 0, 0, "ng-template", 9),
            t.YNc(1, se, 0, 0, "ng-template", 9),
            t.YNc(2, ae, 0, 0, "ng-template", 9),
            t.YNc(3, re, 0, 0, "ng-template", 9)),
          2 & i)
        ) {
          const p = t.oxw(),
            d = t.MAs(3),
            E = t.MAs(5),
            ct = t.MAs(1);
          t.Q6J("ngTemplateOutlet", d),
            t.xp6(1),
            t.Q6J("ngTemplateOutlet", p.nzExtra),
            t.xp6(1),
            t.Q6J("ngTemplateOutlet", E),
            t.xp6(1),
            t.Q6J("ngTemplateOutlet", ct);
        }
      }
      function ce(i, s) {}
      function pe(i, s) {}
      function de(i, s) {}
      function St(i, s) {
        if (
          (1 & i &&
            (t.TgZ(0, "nz-list-item-extra"),
            t.YNc(1, de, 0, 0, "ng-template", 9),
            t.qZA()),
          2 & i)
        ) {
          const p = t.oxw(2);
          t.xp6(1), t.Q6J("ngTemplateOutlet", p.nzExtra);
        }
      }
      function ue(i, s) {}
      function _e(i, s) {
        if (
          (1 & i &&
            (t.ynx(0),
            t.TgZ(1, "div", 10),
            t.YNc(2, ce, 0, 0, "ng-template", 9),
            t.YNc(3, pe, 0, 0, "ng-template", 9),
            t.qZA(),
            t.YNc(4, St, 2, 1, "nz-list-item-extra", 7),
            t.YNc(5, ue, 0, 0, "ng-template", 9),
            t.BQk()),
          2 & i)
        ) {
          const p = t.oxw(),
            d = t.MAs(3),
            E = t.MAs(1),
            ct = t.MAs(5);
          t.xp6(2),
            t.Q6J("ngTemplateOutlet", d),
            t.xp6(1),
            t.Q6J("ngTemplateOutlet", E),
            t.xp6(1),
            t.Q6J("ngIf", p.nzExtra),
            t.xp6(1),
            t.Q6J("ngTemplateOutlet", ct);
        }
      }
      const xt = [
          [["nz-list-item-actions"], ["", "nz-list-item-actions", ""]],
          [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]],
          "*",
          [["nz-list-item-extra"], ["", "nz-list-item-extra", ""]],
        ],
        Jt = [
          "nz-list-item-actions, [nz-list-item-actions]",
          "nz-list-item-meta, [nz-list-item-meta]",
          "*",
          "nz-list-item-extra, [nz-list-item-extra]",
        ];
      let It = (() => {
          var i;
          class s {}
          return (
            ((i = s).ɵfac = function (d) {
              return new (d || i)();
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [["nz-list-item-meta-title"]],
              exportAs: ["nzListItemMetaTitle"],
              ngContentSelectors: nt,
              decls: 2,
              vars: 0,
              consts: [[1, "ant-list-item-meta-title"]],
              template: function (d, E) {
                1 & d && (t.F$t(), t.TgZ(0, "h4", 0), t.Hsn(1), t.qZA());
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            s
          );
        })(),
        Dt = (() => {
          var i;
          class s {}
          return (
            ((i = s).ɵfac = function (d) {
              return new (d || i)();
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [["nz-list-item-meta-description"]],
              exportAs: ["nzListItemMetaDescription"],
              ngContentSelectors: nt,
              decls: 2,
              vars: 0,
              consts: [[1, "ant-list-item-meta-description"]],
              template: function (d, E) {
                1 & d && (t.F$t(), t.TgZ(0, "div", 0), t.Hsn(1), t.qZA());
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            s
          );
        })(),
        Qt = (() => {
          var i;
          class s {}
          return (
            ((i = s).ɵfac = function (d) {
              return new (d || i)();
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [["nz-list-item-meta-avatar"]],
              inputs: { nzSrc: "nzSrc" },
              exportAs: ["nzListItemMetaAvatar"],
              ngContentSelectors: nt,
              decls: 3,
              vars: 2,
              consts: [
                [1, "ant-list-item-meta-avatar"],
                [3, "nzSrc", 4, "ngIf"],
                [4, "ngIf"],
                [3, "nzSrc"],
              ],
              template: function (d, E) {
                1 & d &&
                  (t.F$t(),
                  t.TgZ(0, "div", 0),
                  t.YNc(1, J, 1, 1, "nz-avatar", 1),
                  t.YNc(2, et, 1, 0, "ng-content", 2),
                  t.qZA()),
                  2 & d &&
                    (t.xp6(1),
                    t.Q6J("ngIf", E.nzSrc),
                    t.xp6(1),
                    t.Q6J("ngIf", !E.nzSrc));
              },
              dependencies: [n.O5, l.Dz],
              encapsulation: 2,
              changeDetection: 0,
            })),
            s
          );
        })(),
        Wt = (() => {
          var i;
          class s {
            set nzAvatar(d) {
              d instanceof t.Rgc
                ? ((this.avatarStr = ""), (this.avatarTpl = d))
                : (this.avatarStr = d);
            }
            constructor(d) {
              (this.elementRef = d), (this.avatarStr = "");
            }
          }
          return (
            ((i = s).ɵfac = function (d) {
              return new (d || i)(t.Y36(t.SBq));
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]],
              contentQueries: function (d, E, ct) {
                if ((1 & d && (t.Suo(ct, Dt, 5), t.Suo(ct, It, 5)), 2 & d)) {
                  let dt;
                  t.iGM((dt = t.CRH())) && (E.descriptionComponent = dt.first),
                    t.iGM((dt = t.CRH())) && (E.titleComponent = dt.first);
                }
              },
              hostAttrs: [1, "ant-list-item-meta"],
              inputs: {
                nzAvatar: "nzAvatar",
                nzTitle: "nzTitle",
                nzDescription: "nzDescription",
              },
              exportAs: ["nzListItemMeta"],
              ngContentSelectors: j,
              decls: 4,
              vars: 3,
              consts: [
                [3, "nzSrc", 4, "ngIf"],
                [4, "ngIf"],
                ["class", "ant-list-item-meta-content", 4, "ngIf"],
                [3, "nzSrc"],
                [3, "ngTemplateOutlet"],
                [1, "ant-list-item-meta-content"],
                [4, "nzStringTemplateOutlet"],
              ],
              template: function (d, E) {
                1 & d &&
                  (t.F$t(G),
                  t.YNc(0, W, 1, 1, "nz-list-item-meta-avatar", 0),
                  t.YNc(1, R, 2, 1, "nz-list-item-meta-avatar", 1),
                  t.Hsn(2),
                  t.YNc(3, h, 5, 2, "div", 2)),
                  2 & d &&
                    (t.Q6J("ngIf", E.avatarStr),
                    t.xp6(1),
                    t.Q6J("ngIf", E.avatarTpl),
                    t.xp6(2),
                    t.Q6J(
                      "ngIf",
                      E.nzTitle ||
                        E.nzDescription ||
                        E.descriptionComponent ||
                        E.titleComponent
                    ));
              },
              dependencies: [n.O5, n.tP, u.f, It, Dt, Qt],
              encapsulation: 2,
              changeDetection: 0,
            })),
            s
          );
        })(),
        Mt = (() => {
          var i;
          class s {}
          return (
            ((i = s).ɵfac = function (d) {
              return new (d || i)();
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [
                ["nz-list-item-extra"],
                ["", "nz-list-item-extra", ""],
              ],
              hostAttrs: [1, "ant-list-item-extra"],
              exportAs: ["nzListItemExtra"],
              ngContentSelectors: nt,
              decls: 1,
              vars: 0,
              template: function (d, E) {
                1 & d && (t.F$t(), t.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            s
          );
        })(),
        Ht = (() => {
          var i;
          class s {}
          return (
            ((i = s).ɵfac = function (d) {
              return new (d || i)();
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [["nz-list-item-action"]],
              viewQuery: function (d, E) {
                if ((1 & d && t.Gf(t.Rgc, 5), 2 & d)) {
                  let ct;
                  t.iGM((ct = t.CRH())) && (E.templateRef = ct.first);
                }
              },
              exportAs: ["nzListItemAction"],
              ngContentSelectors: nt,
              decls: 1,
              vars: 0,
              template: function (d, E) {
                1 & d && (t.F$t(), t.YNc(0, D, 1, 0, "ng-template"));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            s
          );
        })(),
        Vt = (() => {
          var i;
          class s {
            constructor(d, E, ct) {
              (this.ngZone = d),
                (this.nzActions = []),
                (this.actions = []),
                (this.inputActionChanges$ = new w.x()),
                (this.contentChildrenChanges$ = (0, Q.P)(() =>
                  this.nzListItemActions
                    ? (0, F.of)(null)
                    : this.ngZone.onStable.pipe(
                        (0, ot.q)(1),
                        this.enterZone(),
                        H(() =>
                          this.nzListItemActions.changes.pipe(
                            (0, k.O)(this.nzListItemActions)
                          )
                        )
                      )
                )),
                (0, Z.T)(this.contentChildrenChanges$, this.inputActionChanges$)
                  .pipe((0, $.R)(ct))
                  .subscribe(() => {
                    (this.actions = this.nzActions.length
                      ? this.nzActions
                      : this.nzListItemActions.map((dt) => dt.templateRef)),
                      E.detectChanges();
                  });
            }
            ngOnChanges() {
              this.inputActionChanges$.next(null);
            }
            enterZone() {
              return (d) =>
                new e.y((E) =>
                  d.subscribe({
                    next: (ct) => this.ngZone.run(() => E.next(ct)),
                  })
                );
            }
          }
          return (
            ((i = s).ɵfac = function (d) {
              return new (d || i)(t.Y36(t.R0b), t.Y36(t.sBO), t.Y36(Y.kn));
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [["ul", "nz-list-item-actions", ""]],
              contentQueries: function (d, E, ct) {
                if ((1 & d && t.Suo(ct, Ht, 4), 2 & d)) {
                  let dt;
                  t.iGM((dt = t.CRH())) && (E.nzListItemActions = dt);
                }
              },
              hostAttrs: [1, "ant-list-item-action"],
              inputs: { nzActions: "nzActions" },
              exportAs: ["nzListItemActions"],
              features: [t._Bn([Y.kn]), t.TTD],
              attrs: V,
              decls: 1,
              vars: 1,
              consts: [
                [4, "ngFor", "ngForOf"],
                [3, "ngTemplateOutlet"],
                ["class", "ant-list-item-action-split", 4, "ngIf"],
                [1, "ant-list-item-action-split"],
              ],
              template: function (d, E) {
                1 & d && t.YNc(0, it, 3, 2, "li", 0),
                  2 & d && t.Q6J("ngForOf", E.actions);
              },
              dependencies: [n.sg, n.O5, n.tP],
              encapsulation: 2,
              changeDetection: 0,
            })),
            s
          );
        })(),
        bt = (() => {
          var i;
          class s {}
          return (
            ((i = s).ɵfac = function (d) {
              return new (d || i)();
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [["nz-list-empty"]],
              hostAttrs: [1, "ant-list-empty-text"],
              inputs: { nzNoResult: "nzNoResult" },
              exportAs: ["nzListHeader"],
              decls: 1,
              vars: 2,
              consts: [[3, "nzComponentName", "specificContent"]],
              template: function (d, E) {
                1 & d && t._UZ(0, "nz-embed-empty", 0),
                  2 & d &&
                    t.Q6J("nzComponentName", "list")(
                      "specificContent",
                      E.nzNoResult
                    );
              },
              dependencies: [N.gB],
              encapsulation: 2,
              changeDetection: 0,
            })),
            s
          );
        })(),
        wt = (() => {
          var i;
          class s {}
          return (
            ((i = s).ɵfac = function (d) {
              return new (d || i)();
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [["nz-list-header"]],
              hostAttrs: [1, "ant-list-header"],
              exportAs: ["nzListHeader"],
              ngContentSelectors: nt,
              decls: 1,
              vars: 0,
              template: function (d, E) {
                1 & d && (t.F$t(), t.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            s
          );
        })(),
        Nt = (() => {
          var i;
          class s {}
          return (
            ((i = s).ɵfac = function (d) {
              return new (d || i)();
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [["nz-list-footer"]],
              hostAttrs: [1, "ant-list-footer"],
              exportAs: ["nzListFooter"],
              ngContentSelectors: nt,
              decls: 1,
              vars: 0,
              template: function (d, E) {
                1 & d && (t.F$t(), t.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            s
          );
        })(),
        Et = (() => {
          var i;
          class s {}
          return (
            ((i = s).ɵfac = function (d) {
              return new (d || i)();
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [["nz-list-pagination"]],
              hostAttrs: [1, "ant-list-pagination"],
              exportAs: ["nzListPagination"],
              ngContentSelectors: nt,
              decls: 1,
              vars: 0,
              template: function (d, E) {
                1 & d && (t.F$t(), t.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            s
          );
        })(),
        Pt = (() => {
          var i;
          class s {}
          return (
            ((i = s).ɵfac = function (d) {
              return new (d || i)();
            }),
            (i.ɵdir = t.lG2({
              type: i,
              selectors: [["nz-list-load-more"]],
              exportAs: ["nzListLoadMoreDirective"],
            })),
            s
          );
        })(),
        Rt = (() => {
          var i;
          class s {
            get itemLayoutNotify$() {
              return this.itemLayoutNotifySource.asObservable();
            }
            constructor(d) {
              (this.directionality = d),
                (this.nzBordered = !1),
                (this.nzGrid = ""),
                (this.nzItemLayout = "horizontal"),
                (this.nzRenderItem = null),
                (this.nzLoading = !1),
                (this.nzLoadMore = null),
                (this.nzSize = "default"),
                (this.nzSplit = !0),
                (this.hasSomethingAfterLastItem = !1),
                (this.dir = "ltr"),
                (this.itemLayoutNotifySource = new X.X(this.nzItemLayout)),
                (this.destroy$ = new w.x());
            }
            ngOnInit() {
              (this.dir = this.directionality.value),
                this.directionality.change
                  ?.pipe((0, $.R)(this.destroy$))
                  .subscribe((d) => {
                    this.dir = d;
                  });
            }
            getSomethingAfterLastItem() {
              return !!(
                this.nzLoadMore ||
                this.nzPagination ||
                this.nzFooter ||
                this.nzListFooterComponent ||
                this.nzListPaginationComponent ||
                this.nzListLoadMoreDirective
              );
            }
            ngOnChanges(d) {
              d.nzItemLayout &&
                this.itemLayoutNotifySource.next(this.nzItemLayout);
            }
            ngOnDestroy() {
              this.itemLayoutNotifySource.unsubscribe(),
                this.destroy$.next(),
                this.destroy$.complete();
            }
            ngAfterContentInit() {
              this.hasSomethingAfterLastItem = this.getSomethingAfterLastItem();
            }
          }
          return (
            ((i = s).ɵfac = function (d) {
              return new (d || i)(t.Y36(tt.Is, 8));
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [["nz-list"], ["", "nz-list", ""]],
              contentQueries: function (d, E, ct) {
                if (
                  (1 & d &&
                    (t.Suo(ct, Nt, 5), t.Suo(ct, Et, 5), t.Suo(ct, Pt, 5)),
                  2 & d)
                ) {
                  let dt;
                  t.iGM((dt = t.CRH())) && (E.nzListFooterComponent = dt.first),
                    t.iGM((dt = t.CRH())) &&
                      (E.nzListPaginationComponent = dt.first),
                    t.iGM((dt = t.CRH())) &&
                      (E.nzListLoadMoreDirective = dt.first);
                }
              },
              hostAttrs: [1, "ant-list"],
              hostVars: 16,
              hostBindings: function (d, E) {
                2 & d &&
                  t.ekj("ant-list-rtl", "rtl" === E.dir)(
                    "ant-list-vertical",
                    "vertical" === E.nzItemLayout
                  )("ant-list-lg", "large" === E.nzSize)(
                    "ant-list-sm",
                    "small" === E.nzSize
                  )("ant-list-split", E.nzSplit)(
                    "ant-list-bordered",
                    E.nzBordered
                  )("ant-list-loading", E.nzLoading)(
                    "ant-list-something-after-last-item",
                    E.hasSomethingAfterLastItem
                  );
              },
              inputs: {
                nzDataSource: "nzDataSource",
                nzBordered: "nzBordered",
                nzGrid: "nzGrid",
                nzHeader: "nzHeader",
                nzFooter: "nzFooter",
                nzItemLayout: "nzItemLayout",
                nzRenderItem: "nzRenderItem",
                nzLoading: "nzLoading",
                nzLoadMore: "nzLoadMore",
                nzPagination: "nzPagination",
                nzSize: "nzSize",
                nzSplit: "nzSplit",
                nzNoResult: "nzNoResult",
              },
              exportAs: ["nzList"],
              features: [t.TTD],
              ngContentSelectors: jt,
              decls: 15,
              vars: 9,
              consts: [
                ["itemsTpl", ""],
                [4, "ngIf"],
                [3, "nzSpinning"],
                [3, "min-height", 4, "ngIf"],
                ["nz-row", "", 3, "nzGutter", 4, "ngIf", "ngIfElse"],
                [3, "nzNoResult", 4, "ngIf"],
                [3, "ngTemplateOutlet"],
                [1, "ant-list-items"],
                [4, "ngFor", "ngForOf"],
                [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
                [4, "nzStringTemplateOutlet"],
                ["nz-row", "", 3, "nzGutter"],
                [
                  "nz-col",
                  "",
                  3,
                  "nzSpan",
                  "nzXs",
                  "nzSm",
                  "nzMd",
                  "nzLg",
                  "nzXl",
                  "nzXXl",
                  4,
                  "ngFor",
                  "ngForOf",
                ],
                [
                  "nz-col",
                  "",
                  3,
                  "nzSpan",
                  "nzXs",
                  "nzSm",
                  "nzMd",
                  "nzLg",
                  "nzXl",
                  "nzXXl",
                ],
                [3, "nzNoResult"],
              ],
              template: function (d, E) {
                if (
                  (1 & d &&
                    (t.F$t(Yt),
                    t.YNc(0, y, 3, 1, "ng-template", null, 0, t.W1O),
                    t.YNc(2, g, 2, 1, "nz-list-header", 1),
                    t.Hsn(3),
                    t.TgZ(4, "nz-spin", 2),
                    t.ynx(5),
                    t.YNc(6, A, 1, 2, "div", 3),
                    t.YNc(7, vt, 2, 2, "div", 4),
                    t.YNc(8, yt, 1, 1, "nz-list-empty", 5),
                    t.BQk(),
                    t.qZA(),
                    t.YNc(9, Ut, 2, 1, "nz-list-footer", 1),
                    t.Hsn(10, 1),
                    t.YNc(11, Ft, 0, 0, "ng-template", 6),
                    t.Hsn(12, 2),
                    t.YNc(13, kt, 2, 1, "nz-list-pagination", 1),
                    t.Hsn(14, 3)),
                  2 & d)
                ) {
                  const ct = t.MAs(1);
                  t.xp6(2),
                    t.Q6J("ngIf", E.nzHeader),
                    t.xp6(2),
                    t.Q6J("nzSpinning", E.nzLoading),
                    t.xp6(2),
                    t.Q6J(
                      "ngIf",
                      E.nzLoading &&
                        E.nzDataSource &&
                        0 === E.nzDataSource.length
                    ),
                    t.xp6(1),
                    t.Q6J("ngIf", E.nzGrid && E.nzDataSource)("ngIfElse", ct),
                    t.xp6(1),
                    t.Q6J(
                      "ngIf",
                      !E.nzLoading &&
                        E.nzDataSource &&
                        0 === E.nzDataSource.length
                    ),
                    t.xp6(1),
                    t.Q6J("ngIf", E.nzFooter),
                    t.xp6(2),
                    t.Q6J("ngTemplateOutlet", E.nzLoadMore),
                    t.xp6(2),
                    t.Q6J("ngIf", E.nzPagination);
                }
              },
              dependencies: [
                n.sg,
                n.O5,
                n.tP,
                L.W,
                st.t3,
                st.SK,
                u.f,
                wt,
                Nt,
                Et,
                bt,
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, P.gn)([(0, r.yF)()], s.prototype, "nzBordered", void 0),
            (0, P.gn)([(0, r.yF)()], s.prototype, "nzLoading", void 0),
            (0, P.gn)([(0, r.yF)()], s.prototype, "nzSplit", void 0),
            s
          );
        })(),
        f = (() => {
          var i;
          class s {
            get isVerticalAndExtra() {
              return !(
                "vertical" !== this.itemLayout ||
                (!this.listItemExtraDirective && !this.nzExtra)
              );
            }
            constructor(d, E) {
              (this.parentComp = d),
                (this.cdr = E),
                (this.nzActions = []),
                (this.nzExtra = null),
                (this.nzNoFlex = !1);
            }
            ngAfterViewInit() {
              this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(
                (d) => {
                  (this.itemLayout = d), this.cdr.detectChanges();
                }
              );
            }
            ngOnDestroy() {
              this.itemLayout$ && this.itemLayout$.unsubscribe();
            }
          }
          return (
            ((i = s).ɵfac = function (d) {
              return new (d || i)(t.Y36(Rt), t.Y36(t.sBO));
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [["nz-list-item"], ["", "nz-list-item", ""]],
              contentQueries: function (d, E, ct) {
                if ((1 & d && t.Suo(ct, Mt, 5), 2 & d)) {
                  let dt;
                  t.iGM((dt = t.CRH())) &&
                    (E.listItemExtraDirective = dt.first);
                }
              },
              hostAttrs: [1, "ant-list-item"],
              hostVars: 2,
              hostBindings: function (d, E) {
                2 & d && t.ekj("ant-list-item-no-flex", E.nzNoFlex);
              },
              inputs: {
                nzActions: "nzActions",
                nzContent: "nzContent",
                nzExtra: "nzExtra",
                nzNoFlex: "nzNoFlex",
              },
              exportAs: ["nzListItem"],
              ngContentSelectors: Jt,
              decls: 9,
              vars: 2,
              consts: [
                ["actionsTpl", ""],
                ["contentTpl", ""],
                ["extraTpl", ""],
                ["simpleTpl", ""],
                [4, "ngIf", "ngIfElse"],
                ["nz-list-item-actions", "", 3, "nzActions", 4, "ngIf"],
                ["nz-list-item-actions", "", 3, "nzActions"],
                [4, "ngIf"],
                [4, "nzStringTemplateOutlet"],
                [3, "ngTemplateOutlet"],
                [1, "ant-list-item-main"],
              ],
              template: function (d, E) {
                if (
                  (1 & d &&
                    (t.F$t(xt),
                    t.YNc(0, qt, 2, 1, "ng-template", null, 0, t.W1O),
                    t.YNc(2, ne, 3, 1, "ng-template", null, 1, t.W1O),
                    t.YNc(4, ie, 1, 0, "ng-template", null, 2, t.W1O),
                    t.YNc(6, le, 4, 4, "ng-template", null, 3, t.W1O),
                    t.YNc(8, _e, 6, 4, "ng-container", 4)),
                  2 & d)
                ) {
                  const ct = t.MAs(7);
                  t.xp6(8), t.Q6J("ngIf", E.isVerticalAndExtra)("ngIfElse", ct);
                }
              },
              dependencies: [n.O5, n.tP, u.f, Vt, Mt],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, P.gn)([(0, r.yF)()], s.prototype, "nzNoFlex", void 0),
            s
          );
        })(),
        C = (() => {
          var i;
          class s {}
          return (
            ((i = s).ɵfac = function (d) {
              return new (d || i)();
            }),
            (i.ɵmod = t.oAB({ type: i })),
            (i.ɵinj = t.cJS({
              imports: [tt.vT, n.ez, L.j, st.Jb, l.Rt, u.T, N.Xo],
            })),
            s
          );
        })();
    },
    22114: (gt, rt, o) => {
      o.d(rt, { KW: () => et, wY: () => nt });
      var t = o(49388),
        n = o(96814),
        l = o(65879),
        u = o(60095),
        P = o(8324),
        r = o(64345),
        w = o(62595),
        Q = o(97582),
        F = o(78645),
        Z = o(59773),
        e = o(64194),
        X = o(40874),
        ot = o(27754);
      const lt = ["itemLabels"],
        q = function () {
          return {
            "ant-segmented-thumb": !0,
            "ant-segmented-thumb-motion": !0,
          };
        };
      function mt(W, R) {
        if (1 & W) {
          const v = l.EpF();
          l.TgZ(0, "div", 3),
            l.NdJ("@thumbMotion.done", function (S) {
              l.CHM(v);
              const x = l.oxw();
              return l.KtG(x.handleThumbAnimationDone(S));
            }),
            l.qZA();
        }
        if (2 & W) {
          const v = l.oxw();
          l.Q6J("ngClass", l.DdM(2, q))("@thumbMotion", v.animationState);
        }
      }
      function ut(W, R) {
        if ((1 & W && (l.ynx(0), l._uU(1), l.BQk()), 2 & W)) {
          const v = l.oxw(2).$implicit;
          l.xp6(1), l.hij(" ", v.label, " ");
        }
      }
      const H = function (W, R) {
        return { $implicit: W, index: R };
      };
      function k(W, R) {
        if (
          (1 & W &&
            (l.ynx(0),
            l.TgZ(1, "span", 9),
            l._UZ(2, "span", 10),
            l.qZA(),
            l.TgZ(3, "span"),
            l.YNc(4, ut, 2, 1, "ng-container", 11),
            l.qZA(),
            l.BQk()),
          2 & W)
        ) {
          const v = l.oxw(),
            T = v.$implicit,
            S = v.index,
            x = l.oxw();
          l.xp6(2),
            l.Q6J("nzType", T.icon),
            l.xp6(2),
            l.Q6J("nzStringTemplateOutlet", T.useTemplate && x.nzLabelTemplate)(
              "nzStringTemplateOutletContext",
              l.WLB(3, H, T, S)
            );
        }
      }
      function $(W, R) {
        if ((1 & W && (l.ynx(0), l._uU(1), l.BQk()), 2 & W)) {
          const v = l.oxw(2).$implicit;
          l.xp6(1), l.hij(" ", v.label, " ");
        }
      }
      function Y(W, R) {
        if ((1 & W && l.YNc(0, $, 2, 1, "ng-container", 11), 2 & W)) {
          const v = l.oxw(),
            T = v.$implicit,
            S = v.index,
            x = l.oxw();
          l.Q6J("nzStringTemplateOutlet", T.useTemplate && x.nzLabelTemplate)(
            "nzStringTemplateOutletContext",
            l.WLB(2, H, T, S)
          );
        }
      }
      const N = function (W, R) {
        return {
          "ant-segmented-item": !0,
          "ant-segmented-item-selected": W,
          "ant-segmented-item-disabled": R,
        };
      };
      function tt(W, R) {
        if (1 & W) {
          const v = l.EpF();
          l.TgZ(0, "label", 3, 4),
            l._UZ(2, "input", 5),
            l.TgZ(3, "div", 6),
            l.NdJ("click", function () {
              const S = l.CHM(v),
                x = S.$implicit,
                h = S.index,
                G = l.oxw();
              return l.KtG(!x.disabled && G.handleOptionClick(h));
            }),
            l.YNc(4, k, 5, 6, "ng-container", 7),
            l.YNc(5, Y, 1, 5, "ng-template", null, 8, l.W1O),
            l.qZA()();
        }
        if (2 & W) {
          const v = R.$implicit,
            T = R.index,
            S = l.MAs(6),
            x = l.oxw();
          l.Q6J(
            "ngClass",
            l.WLB(4, N, T === x.selectedIndex, !!x.nzDisabled || v.disabled)
          ),
            l.xp6(2),
            l.Q6J("checked", T === x.selectedIndex),
            l.xp6(2),
            l.Q6J("ngIf", v.icon)("ngIfElse", S);
        }
      }
      let nt = (() => {
        var W;
        class R {
          constructor(T, S, x) {
            (this.nzConfigService = T),
              (this.cdr = S),
              (this.directionality = x),
              (this._nzModuleName = "segmented"),
              (this.nzBlock = !1),
              (this.nzDisabled = !1),
              (this.nzOptions = []),
              (this.nzSize = "default"),
              (this.nzLabelTemplate = null),
              (this.nzValueChange = new l.vpe()),
              (this.dir = "ltr"),
              (this.selectedIndex = 0),
              (this.transitionedToIndex = -1),
              (this.animationState = null),
              (this.normalizedOptions = []),
              (this.destroy$ = new F.x()),
              (this.onChange = () => {}),
              (this.onTouched = () => {}),
              this.directionality.change
                ?.pipe((0, Z.R)(this.destroy$))
                .subscribe((h) => {
                  (this.dir = h), this.cdr.detectChanges();
                });
          }
          ngOnChanges(T) {
            const { nzOptions: S } = T;
            S &&
              (this.normalizedOptions = (function L(W) {
                return W.map((R) =>
                  "string" == typeof R || "number" == typeof R
                    ? { label: `${R}`, value: R }
                    : R
                );
              })(S.currentValue));
          }
          handleOptionClick(T) {
            this.nzDisabled ||
              (this.changeSelectedIndex(T),
              this.onChange(T),
              this.nzValueChange.emit(T));
          }
          handleThumbAnimationDone(T) {
            "from" === T.fromState &&
              ((this.selectedIndex = this.transitionedToIndex),
              (this.transitionedToIndex = -1),
              (this.animationState = null),
              this.cdr.detectChanges());
          }
          writeValue(T) {
            "number" == typeof T &&
              T > -1 &&
              (this.changeSelectedIndex(T), this.cdr.markForCheck());
          }
          registerOnChange(T) {
            this.onChange = T;
          }
          registerOnTouched(T) {
            this.onTouched = T;
          }
          changeSelectedIndex(T) {
            !this.listOfOptions ||
              -1 === this.selectedIndex ||
              this.selectedIndex === T ||
              ((this.animationState = {
                value: "from",
                params: J(
                  this.listOfOptions.get(this.selectedIndex).nativeElement
                ),
              }),
              (this.selectedIndex = -1),
              this.cdr.detectChanges(),
              (this.animationState = {
                value: "to",
                params: J(this.listOfOptions.get(T).nativeElement),
              }),
              (this.transitionedToIndex = T),
              this.cdr.detectChanges());
          }
        }
        return (
          ((W = R).ɵfac = function (T) {
            return new (T || W)(l.Y36(X.jY), l.Y36(l.sBO), l.Y36(t.Is, 8));
          }),
          (W.ɵcmp = l.Xpm({
            type: W,
            selectors: [["nz-segmented"]],
            viewQuery: function (T, S) {
              if ((1 & T && l.Gf(lt, 5, l.SBq), 2 & T)) {
                let x;
                l.iGM((x = l.CRH())) && (S.listOfOptions = x);
              }
            },
            hostAttrs: [1, "ant-segmented"],
            hostVars: 10,
            hostBindings: function (T, S) {
              2 & T &&
                l.ekj("ant-segmented-disabled", !!S.nzDisabled)(
                  "ant-segmented-rtl",
                  "rtl" === S.dir
                )("ant-segmented-lg", "large" === S.nzSize)(
                  "ant-segmented-sm",
                  "small" === S.nzSize
                )("ant-segmented-block", !!S.nzBlock);
            },
            inputs: {
              nzBlock: "nzBlock",
              nzDisabled: "nzDisabled",
              nzOptions: "nzOptions",
              nzSize: "nzSize",
              nzLabelTemplate: "nzLabelTemplate",
            },
            outputs: { nzValueChange: "nzValueChange" },
            exportAs: ["nzSegmented"],
            features: [
              l._Bn([
                { provide: u.JU, useExisting: (0, l.Gpc)(() => W), multi: !0 },
              ]),
              l.TTD,
            ],
            decls: 3,
            vars: 2,
            consts: [
              [1, "ant-segmented-group"],
              [3, "ngClass", 4, "ngIf"],
              [3, "ngClass", 4, "ngFor", "ngForOf"],
              [3, "ngClass"],
              ["itemLabels", ""],
              ["type", "radio", 1, "ant-segmented-item-input", 3, "checked"],
              [1, "ant-segmented-item-label", 3, "click"],
              [4, "ngIf", "ngIfElse"],
              ["else_template", ""],
              [1, "ant-segmented-item-icon"],
              ["nz-icon", "", 3, "nzType"],
              [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"],
            ],
            template: function (T, S) {
              1 & T &&
                (l.TgZ(0, "div", 0),
                l.YNc(1, mt, 1, 3, "div", 1),
                l.YNc(2, tt, 7, 7, "label", 2),
                l.qZA()),
                2 & T &&
                  (l.xp6(1),
                  l.Q6J("ngIf", S.animationState),
                  l.xp6(1),
                  l.Q6J("ngForOf", S.normalizedOptions));
            },
            dependencies: [n.mk, n.sg, n.O5, w.Ls, P.f],
            encapsulation: 2,
            data: { animation: [e.Tw] },
            changeDetection: 0,
          })),
          (0, Q.gn)([(0, ot.yF)()], R.prototype, "nzBlock", void 0),
          (0, Q.gn)([(0, ot.yF)()], R.prototype, "nzDisabled", void 0),
          (0, Q.gn)([(0, X.oS)()], R.prototype, "nzSize", void 0),
          R
        );
      })();
      function J(W) {
        return { transform: W.offsetLeft, width: W.clientWidth };
      }
      let et = (() => {
        var W;
        class R {}
        return (
          ((W = R).ɵfac = function (T) {
            return new (T || W)();
          }),
          (W.ɵmod = l.oAB({ type: W })),
          (W.ɵinj = l.cJS({ imports: [t.vT, n.ez, u.u5, r.YI, w.PV, P.T] })),
          R
        );
      })();
    },
    9691: (gt, rt, o) => {
      o.d(rt, { Ip: () => Wt, LV: () => Rt, Vq: () => Gt });
      var t = o(65879),
        n = o(78645),
        l = o(92438),
        u = o(65619),
        P = o(22096),
        r = o(52572),
        w = o(63019),
        Q = o(70532),
        F = o(96814),
        Z = o(60804),
        e = o(59773),
        X = o(27921),
        ot = o(93997),
        lt = o(42460),
        q = o(37398),
        mt = o(94664),
        ut = o(99087),
        H = o(62595),
        k = o(70855),
        $ = o(8324),
        Y = o(97582),
        N = o(27754),
        tt = o(36028),
        L = o(69594),
        st = o(60095),
        nt = o(64194),
        J = o(40874),
        et = o(85448),
        W = o(56879),
        R = o(4300),
        v = o(331),
        T = o(62831),
        S = o(49388),
        x = o(50883),
        h = o(64345);
      const G = ["*"];
      function j(f, B) {}
      function D(f, B) {
        if ((1 & f && t.YNc(0, j, 0, 0, "ng-template", 4), 2 & f)) {
          const C = t.oxw();
          t.Q6J("ngTemplateOutlet", C.template);
        }
      }
      function V(f, B) {
        if ((1 & f && t._uU(0), 2 & f)) {
          const C = t.oxw();
          t.Oqu(C.label);
        }
      }
      function pt(f, B) {
        1 & f && t._UZ(0, "span", 7);
      }
      function K(f, B) {
        if (
          (1 & f &&
            (t.TgZ(0, "div", 5), t.YNc(1, pt, 1, 0, "span", 6), t.qZA()),
          2 & f)
        ) {
          const C = t.oxw();
          t.xp6(1), t.Q6J("ngIf", !C.icon)("ngIfElse", C.icon);
        }
      }
      function it(f, B) {
        if ((1 & f && (t.ynx(0), t._uU(1), t.BQk()), 2 & f)) {
          const C = t.oxw();
          t.xp6(1), t.Oqu(C.nzLabel);
        }
      }
      function M(f, B) {
        if (
          (1 & f &&
            (t.TgZ(0, "div", 4), t._UZ(1, "nz-embed-empty", 5), t.qZA()),
          2 & f)
        ) {
          const C = t.oxw();
          t.xp6(1), t.Q6J("specificContent", C.notFoundContent);
        }
      }
      function m(f, B) {
        if ((1 & f && t._UZ(0, "nz-option-item-group", 9), 2 & f)) {
          const C = t.oxw().$implicit;
          t.Q6J("nzLabel", C.groupLabel);
        }
      }
      function O(f, B) {
        if (1 & f) {
          const C = t.EpF();
          t.TgZ(0, "nz-option-item", 10),
            t.NdJ("itemHover", function (s) {
              t.CHM(C);
              const p = t.oxw(2);
              return t.KtG(p.onItemHover(s));
            })("itemClick", function (s) {
              t.CHM(C);
              const p = t.oxw(2);
              return t.KtG(p.onItemClick(s));
            }),
            t.qZA();
        }
        if (2 & f) {
          const C = t.oxw().$implicit,
            i = t.oxw();
          t.Q6J("icon", i.menuItemSelectedIcon)(
            "customContent",
            C.nzCustomContent
          )("template", C.template)("grouped", !!C.groupLabel)(
            "disabled",
            C.nzDisabled
          )("showState", "tags" === i.mode || "multiple" === i.mode)(
            "label",
            C.nzLabel
          )("compareWith", i.compareWith)("activatedValue", i.activatedValue)(
            "listOfSelectedValue",
            i.listOfSelectedValue
          )("value", C.nzValue);
        }
      }
      function y(f, B) {
        1 & f &&
          (t.ynx(0, 6),
          t.YNc(1, m, 1, 1, "nz-option-item-group", 7),
          t.YNc(2, O, 1, 11, "nz-option-item", 8),
          t.BQk()),
          2 & f &&
            (t.Q6J("ngSwitch", B.$implicit.type),
            t.xp6(1),
            t.Q6J("ngSwitchCase", "group"),
            t.xp6(1),
            t.Q6J("ngSwitchCase", "item"));
      }
      function I(f, B) {}
      function g(f, B) {
        1 & f && t.Hsn(0);
      }
      const A = ["inputElement"],
        at = ["mirrorElement"];
      function _t(f, B) {
        1 & f && t._UZ(0, "span", 3, 4);
      }
      function vt(f, B) {
        if ((1 & f && (t.TgZ(0, "div", 4), t._uU(1), t.qZA()), 2 & f)) {
          const C = t.oxw(2);
          t.xp6(1), t.Oqu(C.label);
        }
      }
      function yt(f, B) {
        if ((1 & f && t._uU(0), 2 & f)) {
          const C = t.oxw(2);
          t.Oqu(C.label);
        }
      }
      function Bt(f, B) {
        if (
          (1 & f &&
            (t.ynx(0),
            t.YNc(1, vt, 2, 1, "div", 2),
            t.YNc(2, yt, 1, 1, "ng-template", null, 3, t.W1O),
            t.BQk()),
          2 & f)
        ) {
          const C = t.MAs(3),
            i = t.oxw();
          t.xp6(1), t.Q6J("ngIf", i.deletable)("ngIfElse", C);
        }
      }
      function Ut(f, B) {
        1 & f && t._UZ(0, "span", 7);
      }
      function Ft(f, B) {
        if (1 & f) {
          const C = t.EpF();
          t.TgZ(0, "span", 5),
            t.NdJ("click", function (s) {
              t.CHM(C);
              const p = t.oxw();
              return t.KtG(p.onDelete(s));
            }),
            t.YNc(1, Ut, 1, 0, "span", 6),
            t.qZA();
        }
        if (2 & f) {
          const C = t.oxw();
          t.xp6(1), t.Q6J("ngIf", !C.removeIcon)("ngIfElse", C.removeIcon);
        }
      }
      const Zt = function (f) {
        return { $implicit: f };
      };
      function kt(f, B) {
        if ((1 & f && (t.ynx(0), t._uU(1), t.BQk()), 2 & f)) {
          const C = t.oxw();
          t.xp6(1), t.hij(" ", C.placeholder, " ");
        }
      }
      function Yt(f, B) {
        if ((1 & f && t._UZ(0, "nz-select-item", 6), 2 & f)) {
          const C = t.oxw(2);
          t.Q6J("deletable", !1)("disabled", !1)("removeIcon", C.removeIcon)(
            "label",
            C.listOfTopItem[0].nzLabel
          )("contentTemplateOutlet", C.customTemplate)(
            "contentTemplateOutletContext",
            C.listOfTopItem[0]
          );
        }
      }
      function jt(f, B) {
        if (1 & f) {
          const C = t.EpF();
          t.ynx(0),
            t.TgZ(1, "nz-select-search", 4),
            t.NdJ("isComposingChange", function (s) {
              t.CHM(C);
              const p = t.oxw();
              return t.KtG(p.isComposingChange(s));
            })("valueChange", function (s) {
              t.CHM(C);
              const p = t.oxw();
              return t.KtG(p.onInputValueChange(s));
            }),
            t.qZA(),
            t.YNc(2, Yt, 1, 6, "nz-select-item", 5),
            t.BQk();
        }
        if (2 & f) {
          const C = t.oxw();
          t.xp6(1),
            t.Q6J("nzId", C.nzId)("disabled", C.disabled)(
              "value",
              C.inputValue
            )("showInput", C.showSearch)("mirrorSync", !1)(
              "autofocus",
              C.autofocus
            )("focusTrigger", C.open),
            t.xp6(1),
            t.Q6J("ngIf", C.isShowSingleLabel);
        }
      }
      function Xt(f, B) {
        if (1 & f) {
          const C = t.EpF();
          t.TgZ(0, "nz-select-item", 9),
            t.NdJ("delete", function () {
              const p = t.CHM(C).$implicit,
                d = t.oxw(2);
              return t.KtG(d.onDeleteItem(p.contentTemplateOutletContext));
            }),
            t.qZA();
        }
        if (2 & f) {
          const C = B.$implicit,
            i = t.oxw(2);
          t.Q6J("removeIcon", i.removeIcon)("label", C.nzLabel)(
            "disabled",
            C.nzDisabled || i.disabled
          )("contentTemplateOutlet", C.contentTemplateOutlet)("deletable", !0)(
            "contentTemplateOutletContext",
            C.contentTemplateOutletContext
          );
        }
      }
      function qt(f, B) {
        if (1 & f) {
          const C = t.EpF();
          t.ynx(0),
            t.YNc(1, Xt, 1, 6, "nz-select-item", 7),
            t.TgZ(2, "nz-select-search", 8),
            t.NdJ("isComposingChange", function (s) {
              t.CHM(C);
              const p = t.oxw();
              return t.KtG(p.isComposingChange(s));
            })("valueChange", function (s) {
              t.CHM(C);
              const p = t.oxw();
              return t.KtG(p.onInputValueChange(s));
            }),
            t.qZA(),
            t.BQk();
        }
        if (2 & f) {
          const C = t.oxw();
          t.xp6(1),
            t.Q6J("ngForOf", C.listOfSlicedItem)("ngForTrackBy", C.trackValue),
            t.xp6(1),
            t.Q6J("nzId", C.nzId)("disabled", C.disabled)(
              "value",
              C.inputValue
            )("autofocus", C.autofocus)("showInput", !0)("mirrorSync", !0)(
              "focusTrigger",
              C.open
            );
        }
      }
      function te(f, B) {
        if ((1 & f && t._UZ(0, "nz-select-placeholder", 10), 2 & f)) {
          const C = t.oxw();
          t.Q6J("placeholder", C.placeHolder);
        }
      }
      function ee(f, B) {
        1 & f && t._UZ(0, "span", 1);
      }
      function ne(f, B) {
        1 & f && t._UZ(0, "span", 3);
      }
      function ie(f, B) {
        1 & f && t._UZ(0, "span", 8);
      }
      function oe(f, B) {
        1 & f && t._UZ(0, "span", 9);
      }
      function se(f, B) {
        if (
          (1 & f &&
            (t.ynx(0),
            t.YNc(1, ie, 1, 0, "span", 6),
            t.YNc(2, oe, 1, 0, "span", 7),
            t.BQk()),
          2 & f)
        ) {
          const C = t.oxw(2);
          t.xp6(1), t.Q6J("ngIf", !C.search), t.xp6(1), t.Q6J("ngIf", C.search);
        }
      }
      function ae(f, B) {
        if ((1 & f && t._UZ(0, "span", 11), 2 & f)) {
          const C = t.oxw().$implicit;
          t.Q6J("nzType", C);
        }
      }
      function re(f, B) {
        if (
          (1 & f && (t.ynx(0), t.YNc(1, ae, 1, 1, "span", 10), t.BQk()), 2 & f)
        ) {
          const C = B.$implicit;
          t.xp6(1), t.Q6J("ngIf", C);
        }
      }
      function le(f, B) {
        if ((1 & f && t.YNc(0, re, 2, 1, "ng-container", 2), 2 & f)) {
          const C = t.oxw(2);
          t.Q6J("nzStringTemplateOutlet", C.suffixIcon);
        }
      }
      function ce(f, B) {
        if (
          (1 & f &&
            (t.YNc(0, se, 3, 2, "ng-container", 4),
            t.YNc(1, le, 1, 1, "ng-template", null, 5, t.W1O)),
          2 & f)
        ) {
          const C = t.MAs(2),
            i = t.oxw();
          t.Q6J("ngIf", i.showArrow && !i.suffixIcon)("ngIfElse", C);
        }
      }
      function pe(f, B) {
        if ((1 & f && (t.ynx(0), t._uU(1), t.BQk()), 2 & f)) {
          const C = t.oxw();
          t.xp6(1), t.Oqu(C.feedbackIcon);
        }
      }
      function de(f, B) {
        if ((1 & f && t._UZ(0, "nz-form-item-feedback-icon", 8), 2 & f)) {
          const C = t.oxw(3);
          t.Q6J("status", C.status);
        }
      }
      function St(f, B) {
        if (
          (1 & f && t.YNc(0, de, 1, 1, "nz-form-item-feedback-icon", 7), 2 & f)
        ) {
          const C = t.oxw(2);
          t.Q6J("ngIf", C.hasFeedback && !!C.status);
        }
      }
      function ue(f, B) {
        if (
          (1 & f &&
            (t.TgZ(0, "nz-select-arrow", 5),
            t.YNc(1, St, 1, 1, "ng-template", null, 6, t.W1O),
            t.qZA()),
          2 & f)
        ) {
          const C = t.MAs(2),
            i = t.oxw();
          t.Q6J("showArrow", i.nzShowArrow)("loading", i.nzLoading)(
            "search",
            i.nzOpen && i.nzShowSearch
          )("suffixIcon", i.nzSuffixIcon)("feedbackIcon", C);
        }
      }
      function _e(f, B) {
        if (1 & f) {
          const C = t.EpF();
          t.TgZ(0, "nz-select-clear", 9),
            t.NdJ("clear", function () {
              t.CHM(C);
              const s = t.oxw();
              return t.KtG(s.onClearSelection());
            }),
            t.qZA();
        }
        if (2 & f) {
          const C = t.oxw();
          t.Q6J("clearIcon", C.nzClearIcon);
        }
      }
      function xt(f, B) {
        if (1 & f) {
          const C = t.EpF();
          t.TgZ(0, "nz-option-container", 10),
            t.NdJ("keydown", function (s) {
              t.CHM(C);
              const p = t.oxw();
              return t.KtG(p.onKeyDown(s));
            })("itemClick", function (s) {
              t.CHM(C);
              const p = t.oxw();
              return t.KtG(p.onItemClick(s));
            })("scrollToBottom", function () {
              t.CHM(C);
              const s = t.oxw();
              return t.KtG(s.nzScrollToBottom.emit());
            }),
            t.qZA();
        }
        if (2 & f) {
          const C = t.oxw();
          t.ekj(
            "ant-select-dropdown-placement-bottomLeft",
            "bottomLeft" === C.dropDownPosition
          )(
            "ant-select-dropdown-placement-topLeft",
            "topLeft" === C.dropDownPosition
          )(
            "ant-select-dropdown-placement-bottomRight",
            "bottomRight" === C.dropDownPosition
          )(
            "ant-select-dropdown-placement-topRight",
            "topRight" === C.dropDownPosition
          ),
            t.Q6J("ngStyle", C.nzDropdownStyle)("itemSize", C.nzOptionHeightPx)(
              "maxItemLength",
              C.nzOptionOverflowSize
            )("matchWidth", C.nzDropdownMatchSelectWidth)(
              "@slideMotion",
              "enter"
            )(
              "@.disabled",
              !(null == C.noAnimation || !C.noAnimation.nzNoAnimation)
            )(
              "nzNoAnimation",
              null == C.noAnimation ? null : C.noAnimation.nzNoAnimation
            )("listOfContainerItem", C.listOfContainerItem)(
              "menuItemSelectedIcon",
              C.nzMenuItemSelectedIcon
            )("notFoundContent", C.nzNotFoundContent)(
              "activatedValue",
              C.activatedValue
            )("listOfSelectedValue", C.listOfValue)(
              "dropdownRender",
              C.nzDropdownRender
            )("compareWith", C.compareWith)("mode", C.nzMode);
        }
      }
      let Jt = (() => {
          var f;
          class B {
            constructor() {
              (this.nzLabel = null), (this.changes = new n.x());
            }
            ngOnChanges() {
              this.changes.next();
            }
          }
          return (
            ((f = B).ɵfac = function (i) {
              return new (i || f)();
            }),
            (f.ɵcmp = t.Xpm({
              type: f,
              selectors: [["nz-option-group"]],
              inputs: { nzLabel: "nzLabel" },
              exportAs: ["nzOptionGroup"],
              features: [t.TTD],
              ngContentSelectors: G,
              decls: 1,
              vars: 0,
              template: function (i, s) {
                1 & i && (t.F$t(), t.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            B
          );
        })(),
        It = (() => {
          var f;
          class B {
            constructor(i, s, p) {
              (this.elementRef = i),
                (this.ngZone = s),
                (this.destroy$ = p),
                (this.selected = !1),
                (this.activated = !1),
                (this.grouped = !1),
                (this.customContent = !1),
                (this.template = null),
                (this.disabled = !1),
                (this.showState = !1),
                (this.label = null),
                (this.value = null),
                (this.activatedValue = null),
                (this.listOfSelectedValue = []),
                (this.icon = null),
                (this.itemClick = new t.vpe()),
                (this.itemHover = new t.vpe());
            }
            ngOnChanges(i) {
              const { value: s, activatedValue: p, listOfSelectedValue: d } = i;
              (s || d) &&
                (this.selected = this.listOfSelectedValue.some((E) =>
                  this.compareWith(E, this.value)
                )),
                (s || p) &&
                  (this.activated = this.compareWith(
                    this.activatedValue,
                    this.value
                  ));
            }
            ngOnInit() {
              this.ngZone.runOutsideAngular(() => {
                (0, l.R)(this.elementRef.nativeElement, "click")
                  .pipe((0, e.R)(this.destroy$))
                  .subscribe(() => {
                    this.disabled ||
                      this.ngZone.run(() => this.itemClick.emit(this.value));
                  }),
                  (0, l.R)(this.elementRef.nativeElement, "mouseenter")
                    .pipe((0, e.R)(this.destroy$))
                    .subscribe(() => {
                      this.disabled ||
                        this.ngZone.run(() => this.itemHover.emit(this.value));
                    });
              });
            }
          }
          return (
            ((f = B).ɵfac = function (i) {
              return new (i || f)(t.Y36(t.SBq), t.Y36(t.R0b), t.Y36(ut.kn));
            }),
            (f.ɵcmp = t.Xpm({
              type: f,
              selectors: [["nz-option-item"]],
              hostAttrs: [1, "ant-select-item", "ant-select-item-option"],
              hostVars: 9,
              hostBindings: function (i, s) {
                2 & i &&
                  (t.uIk("title", s.label),
                  t.ekj("ant-select-item-option-grouped", s.grouped)(
                    "ant-select-item-option-selected",
                    s.selected && !s.disabled
                  )("ant-select-item-option-disabled", s.disabled)(
                    "ant-select-item-option-active",
                    s.activated && !s.disabled
                  ));
              },
              inputs: {
                grouped: "grouped",
                customContent: "customContent",
                template: "template",
                disabled: "disabled",
                showState: "showState",
                label: "label",
                value: "value",
                activatedValue: "activatedValue",
                listOfSelectedValue: "listOfSelectedValue",
                icon: "icon",
                compareWith: "compareWith",
              },
              outputs: { itemClick: "itemClick", itemHover: "itemHover" },
              features: [t._Bn([ut.kn]), t.TTD],
              decls: 5,
              vars: 3,
              consts: [
                [1, "ant-select-item-option-content"],
                [3, "ngIf", "ngIfElse"],
                ["noCustomContent", ""],
                [
                  "class",
                  "ant-select-item-option-state",
                  "style",
                  "user-select: none",
                  "unselectable",
                  "on",
                  4,
                  "ngIf",
                ],
                [3, "ngTemplateOutlet"],
                [
                  "unselectable",
                  "on",
                  1,
                  "ant-select-item-option-state",
                  2,
                  "user-select",
                  "none",
                ],
                [
                  "nz-icon",
                  "",
                  "nzType",
                  "check",
                  "class",
                  "ant-select-selected-icon",
                  4,
                  "ngIf",
                  "ngIfElse",
                ],
                [
                  "nz-icon",
                  "",
                  "nzType",
                  "check",
                  1,
                  "ant-select-selected-icon",
                ],
              ],
              template: function (i, s) {
                if (
                  (1 & i &&
                    (t.TgZ(0, "div", 0),
                    t.YNc(1, D, 1, 1, "ng-template", 1),
                    t.YNc(2, V, 1, 1, "ng-template", null, 2, t.W1O),
                    t.qZA(),
                    t.YNc(4, K, 2, 2, "div", 3)),
                  2 & i)
                ) {
                  const p = t.MAs(3);
                  t.xp6(1),
                    t.Q6J("ngIf", s.customContent)("ngIfElse", p),
                    t.xp6(3),
                    t.Q6J("ngIf", s.showState && s.selected);
                }
              },
              dependencies: [F.O5, F.tP, H.Ls, k.w],
              encapsulation: 2,
              changeDetection: 0,
            })),
            B
          );
        })(),
        Dt = (() => {
          var f;
          class B {
            constructor() {
              this.nzLabel = null;
            }
          }
          return (
            ((f = B).ɵfac = function (i) {
              return new (i || f)();
            }),
            (f.ɵcmp = t.Xpm({
              type: f,
              selectors: [["nz-option-item-group"]],
              hostAttrs: [1, "ant-select-item", "ant-select-item-group"],
              inputs: { nzLabel: "nzLabel" },
              decls: 1,
              vars: 1,
              consts: [[4, "nzStringTemplateOutlet"]],
              template: function (i, s) {
                1 & i && t.YNc(0, it, 2, 1, "ng-container", 0),
                  2 & i && t.Q6J("nzStringTemplateOutlet", s.nzLabel);
              },
              dependencies: [$.f],
              encapsulation: 2,
              changeDetection: 0,
            })),
            B
          );
        })(),
        Qt = (() => {
          var f;
          class B {
            constructor() {
              (this.notFoundContent = void 0),
                (this.menuItemSelectedIcon = null),
                (this.dropdownRender = null),
                (this.activatedValue = null),
                (this.listOfSelectedValue = []),
                (this.mode = "default"),
                (this.matchWidth = !0),
                (this.itemSize = 32),
                (this.maxItemLength = 8),
                (this.listOfContainerItem = []),
                (this.itemClick = new t.vpe()),
                (this.scrollToBottom = new t.vpe()),
                (this.scrolledIndex = 0);
            }
            onItemClick(i) {
              this.itemClick.emit(i);
            }
            onItemHover(i) {
              this.activatedValue = i;
            }
            trackValue(i, s) {
              return s.key;
            }
            onScrolledIndexChange(i) {
              (this.scrolledIndex = i),
                i === this.listOfContainerItem.length - this.maxItemLength &&
                  this.scrollToBottom.emit();
            }
            scrollToActivatedValue() {
              const i = this.listOfContainerItem.findIndex((s) =>
                this.compareWith(s.key, this.activatedValue)
              );
              (i < this.scrolledIndex ||
                i >= this.scrolledIndex + this.maxItemLength) &&
                this.cdkVirtualScrollViewport.scrollToIndex(i || 0);
            }
            ngOnChanges(i) {
              const { listOfContainerItem: s, activatedValue: p } = i;
              (s || p) && this.scrollToActivatedValue();
            }
            ngAfterViewInit() {
              setTimeout(() => this.scrollToActivatedValue());
            }
          }
          return (
            ((f = B).ɵfac = function (i) {
              return new (i || f)();
            }),
            (f.ɵcmp = t.Xpm({
              type: f,
              selectors: [["nz-option-container"]],
              viewQuery: function (i, s) {
                if ((1 & i && t.Gf(Q.N7, 7), 2 & i)) {
                  let p;
                  t.iGM((p = t.CRH())) &&
                    (s.cdkVirtualScrollViewport = p.first);
                }
              },
              hostAttrs: [1, "ant-select-dropdown"],
              inputs: {
                notFoundContent: "notFoundContent",
                menuItemSelectedIcon: "menuItemSelectedIcon",
                dropdownRender: "dropdownRender",
                activatedValue: "activatedValue",
                listOfSelectedValue: "listOfSelectedValue",
                compareWith: "compareWith",
                mode: "mode",
                matchWidth: "matchWidth",
                itemSize: "itemSize",
                maxItemLength: "maxItemLength",
                listOfContainerItem: "listOfContainerItem",
              },
              outputs: {
                itemClick: "itemClick",
                scrollToBottom: "scrollToBottom",
              },
              exportAs: ["nzOptionContainer"],
              features: [t.TTD],
              decls: 5,
              vars: 14,
              consts: [
                ["class", "ant-select-item-empty", 4, "ngIf"],
                [
                  3,
                  "itemSize",
                  "maxBufferPx",
                  "minBufferPx",
                  "scrolledIndexChange",
                ],
                [
                  "cdkVirtualFor",
                  "",
                  3,
                  "cdkVirtualForOf",
                  "cdkVirtualForTrackBy",
                  "cdkVirtualForTemplateCacheSize",
                ],
                [3, "ngTemplateOutlet"],
                [1, "ant-select-item-empty"],
                ["nzComponentName", "select", 3, "specificContent"],
                [3, "ngSwitch"],
                [3, "nzLabel", 4, "ngSwitchCase"],
                [
                  3,
                  "icon",
                  "customContent",
                  "template",
                  "grouped",
                  "disabled",
                  "showState",
                  "label",
                  "compareWith",
                  "activatedValue",
                  "listOfSelectedValue",
                  "value",
                  "itemHover",
                  "itemClick",
                  4,
                  "ngSwitchCase",
                ],
                [3, "nzLabel"],
                [
                  3,
                  "icon",
                  "customContent",
                  "template",
                  "grouped",
                  "disabled",
                  "showState",
                  "label",
                  "compareWith",
                  "activatedValue",
                  "listOfSelectedValue",
                  "value",
                  "itemHover",
                  "itemClick",
                ],
              ],
              template: function (i, s) {
                1 & i &&
                  (t.TgZ(0, "div"),
                  t.YNc(1, M, 2, 1, "div", 0),
                  t.TgZ(2, "cdk-virtual-scroll-viewport", 1),
                  t.NdJ("scrolledIndexChange", function (d) {
                    return s.onScrolledIndexChange(d);
                  }),
                  t.YNc(3, y, 3, 3, "ng-template", 2),
                  t.qZA(),
                  t.YNc(4, I, 0, 0, "ng-template", 3),
                  t.qZA()),
                  2 & i &&
                    (t.xp6(1),
                    t.Q6J("ngIf", 0 === s.listOfContainerItem.length),
                    t.xp6(1),
                    t.Udp(
                      "height",
                      s.listOfContainerItem.length * s.itemSize,
                      "px"
                    )("max-height", s.itemSize * s.maxItemLength, "px"),
                    t.ekj("full-width", !s.matchWidth),
                    t.Q6J("itemSize", s.itemSize)(
                      "maxBufferPx",
                      s.itemSize * s.maxItemLength
                    )("minBufferPx", s.itemSize * s.maxItemLength),
                    t.xp6(1),
                    t.Q6J("cdkVirtualForOf", s.listOfContainerItem)(
                      "cdkVirtualForTrackBy",
                      s.trackValue
                    )("cdkVirtualForTemplateCacheSize", 0),
                    t.xp6(1),
                    t.Q6J("ngTemplateOutlet", s.dropdownRender));
              },
              dependencies: [
                F.O5,
                F.tP,
                F.RF,
                F.n9,
                Q.xd,
                Q.x0,
                Q.N7,
                Z.gB,
                It,
                Dt,
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            B
          );
        })(),
        Wt = (() => {
          var f;
          class B {
            constructor(i, s) {
              (this.nzOptionGroupComponent = i),
                (this.destroy$ = s),
                (this.changes = new n.x()),
                (this.groupLabel = null),
                (this.nzLabel = null),
                (this.nzValue = null),
                (this.nzDisabled = !1),
                (this.nzHide = !1),
                (this.nzCustomContent = !1);
            }
            ngOnInit() {
              this.nzOptionGroupComponent &&
                this.nzOptionGroupComponent.changes
                  .pipe((0, X.O)(!0), (0, e.R)(this.destroy$))
                  .subscribe(() => {
                    this.groupLabel = this.nzOptionGroupComponent.nzLabel;
                  });
            }
            ngOnChanges() {
              this.changes.next();
            }
          }
          return (
            ((f = B).ɵfac = function (i) {
              return new (i || f)(t.Y36(Jt, 8), t.Y36(ut.kn));
            }),
            (f.ɵcmp = t.Xpm({
              type: f,
              selectors: [["nz-option"]],
              viewQuery: function (i, s) {
                if ((1 & i && t.Gf(t.Rgc, 7), 2 & i)) {
                  let p;
                  t.iGM((p = t.CRH())) && (s.template = p.first);
                }
              },
              inputs: {
                nzLabel: "nzLabel",
                nzValue: "nzValue",
                nzDisabled: "nzDisabled",
                nzHide: "nzHide",
                nzCustomContent: "nzCustomContent",
              },
              exportAs: ["nzOption"],
              features: [t._Bn([ut.kn]), t.TTD],
              ngContentSelectors: G,
              decls: 1,
              vars: 0,
              template: function (i, s) {
                1 & i && (t.F$t(), t.YNc(0, g, 1, 0, "ng-template"));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, Y.gn)([(0, N.yF)()], B.prototype, "nzDisabled", void 0),
            (0, Y.gn)([(0, N.yF)()], B.prototype, "nzHide", void 0),
            (0, Y.gn)([(0, N.yF)()], B.prototype, "nzCustomContent", void 0),
            B
          );
        })(),
        Mt = (() => {
          var f;
          class B {
            setCompositionState(i) {
              this.isComposingChange.next(i);
            }
            onValueChange(i) {
              (this.value = i),
                this.valueChange.next(i),
                this.mirrorSync && this.syncMirrorWidth();
            }
            clearInputValue() {
              (this.inputElement.nativeElement.value = ""),
                this.onValueChange("");
            }
            syncMirrorWidth() {
              const i = this.mirrorElement.nativeElement,
                s = this.elementRef.nativeElement,
                p = this.inputElement.nativeElement;
              this.renderer.removeStyle(s, "width"),
                this.renderer.setProperty(i, "textContent", `${p.value}\xa0`),
                this.renderer.setStyle(s, "width", `${i.scrollWidth}px`);
            }
            focus() {
              this.focusMonitor.focusVia(this.inputElement, "keyboard");
            }
            blur() {
              this.inputElement.nativeElement.blur();
            }
            constructor(i, s, p) {
              (this.elementRef = i),
                (this.renderer = s),
                (this.focusMonitor = p),
                (this.nzId = null),
                (this.disabled = !1),
                (this.mirrorSync = !1),
                (this.showInput = !0),
                (this.focusTrigger = !1),
                (this.value = ""),
                (this.autofocus = !1),
                (this.valueChange = new t.vpe()),
                (this.isComposingChange = new t.vpe());
            }
            ngOnChanges(i) {
              const s = this.inputElement.nativeElement,
                { focusTrigger: p, showInput: d } = i;
              d &&
                (this.showInput
                  ? this.renderer.removeAttribute(s, "readonly")
                  : this.renderer.setAttribute(s, "readonly", "readonly")),
                p &&
                  !0 === p.currentValue &&
                  !1 === p.previousValue &&
                  s.focus();
            }
            ngAfterViewInit() {
              this.mirrorSync && this.syncMirrorWidth(),
                this.autofocus && this.focus();
            }
          }
          return (
            ((f = B).ɵfac = function (i) {
              return new (i || f)(t.Y36(t.SBq), t.Y36(t.Qsj), t.Y36(R.tE));
            }),
            (f.ɵcmp = t.Xpm({
              type: f,
              selectors: [["nz-select-search"]],
              viewQuery: function (i, s) {
                if ((1 & i && (t.Gf(A, 7), t.Gf(at, 5)), 2 & i)) {
                  let p;
                  t.iGM((p = t.CRH())) && (s.inputElement = p.first),
                    t.iGM((p = t.CRH())) && (s.mirrorElement = p.first);
                }
              },
              hostAttrs: [1, "ant-select-selection-search"],
              inputs: {
                nzId: "nzId",
                disabled: "disabled",
                mirrorSync: "mirrorSync",
                showInput: "showInput",
                focusTrigger: "focusTrigger",
                value: "value",
                autofocus: "autofocus",
              },
              outputs: {
                valueChange: "valueChange",
                isComposingChange: "isComposingChange",
              },
              features: [t._Bn([{ provide: st.ve, useValue: !1 }]), t.TTD],
              decls: 3,
              vars: 7,
              consts: [
                [
                  "autocomplete",
                  "off",
                  1,
                  "ant-select-selection-search-input",
                  3,
                  "ngModel",
                  "disabled",
                  "ngModelChange",
                  "compositionstart",
                  "compositionend",
                ],
                ["inputElement", ""],
                ["class", "ant-select-selection-search-mirror", 4, "ngIf"],
                [1, "ant-select-selection-search-mirror"],
                ["mirrorElement", ""],
              ],
              template: function (i, s) {
                1 & i &&
                  (t.TgZ(0, "input", 0, 1),
                  t.NdJ("ngModelChange", function (d) {
                    return s.onValueChange(d);
                  })("compositionstart", function () {
                    return s.setCompositionState(!0);
                  })("compositionend", function () {
                    return s.setCompositionState(!1);
                  }),
                  t.qZA(),
                  t.YNc(2, _t, 2, 0, "span", 2)),
                  2 & i &&
                    (t.Udp("opacity", s.showInput ? null : 0),
                    t.Q6J("ngModel", s.value)("disabled", s.disabled),
                    t.uIk("id", s.nzId)(
                      "autofocus",
                      s.autofocus ? "autofocus" : null
                    ),
                    t.xp6(2),
                    t.Q6J("ngIf", s.mirrorSync));
              },
              dependencies: [F.O5, st.Fj, st.JJ, st.On],
              encapsulation: 2,
              changeDetection: 0,
            })),
            B
          );
        })(),
        Ht = (() => {
          var f;
          class B {
            constructor() {
              (this.disabled = !1),
                (this.label = null),
                (this.deletable = !1),
                (this.removeIcon = null),
                (this.contentTemplateOutletContext = null),
                (this.contentTemplateOutlet = null),
                (this.delete = new t.vpe());
            }
            onDelete(i) {
              i.preventDefault(),
                i.stopPropagation(),
                this.disabled || this.delete.next(i);
            }
          }
          return (
            ((f = B).ɵfac = function (i) {
              return new (i || f)();
            }),
            (f.ɵcmp = t.Xpm({
              type: f,
              selectors: [["nz-select-item"]],
              hostAttrs: [1, "ant-select-selection-item"],
              hostVars: 3,
              hostBindings: function (i, s) {
                2 & i &&
                  (t.uIk("title", s.label),
                  t.ekj("ant-select-selection-item-disabled", s.disabled));
              },
              inputs: {
                disabled: "disabled",
                label: "label",
                deletable: "deletable",
                removeIcon: "removeIcon",
                contentTemplateOutletContext: "contentTemplateOutletContext",
                contentTemplateOutlet: "contentTemplateOutlet",
              },
              outputs: { delete: "delete" },
              decls: 2,
              vars: 5,
              consts: [
                [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"],
                [
                  "class",
                  "ant-select-selection-item-remove",
                  3,
                  "click",
                  4,
                  "ngIf",
                ],
                [
                  "class",
                  "ant-select-selection-item-content",
                  4,
                  "ngIf",
                  "ngIfElse",
                ],
                ["labelTemplate", ""],
                [1, "ant-select-selection-item-content"],
                [1, "ant-select-selection-item-remove", 3, "click"],
                ["nz-icon", "", "nzType", "close", 4, "ngIf", "ngIfElse"],
                ["nz-icon", "", "nzType", "close"],
              ],
              template: function (i, s) {
                1 & i &&
                  (t.YNc(0, Bt, 4, 2, "ng-container", 0),
                  t.YNc(1, Ft, 2, 2, "span", 1)),
                  2 & i &&
                    (t.Q6J("nzStringTemplateOutlet", s.contentTemplateOutlet)(
                      "nzStringTemplateOutletContext",
                      t.VKq(3, Zt, s.contentTemplateOutletContext)
                    ),
                    t.xp6(1),
                    t.Q6J("ngIf", s.deletable && !s.disabled));
              },
              dependencies: [F.O5, H.Ls, $.f, k.w],
              encapsulation: 2,
              changeDetection: 0,
            })),
            B
          );
        })(),
        Vt = (() => {
          var f;
          class B {
            constructor() {
              this.placeholder = null;
            }
          }
          return (
            ((f = B).ɵfac = function (i) {
              return new (i || f)();
            }),
            (f.ɵcmp = t.Xpm({
              type: f,
              selectors: [["nz-select-placeholder"]],
              hostAttrs: [1, "ant-select-selection-placeholder"],
              inputs: { placeholder: "placeholder" },
              decls: 1,
              vars: 1,
              consts: [[4, "nzStringTemplateOutlet"]],
              template: function (i, s) {
                1 & i && t.YNc(0, kt, 2, 1, "ng-container", 0),
                  2 & i && t.Q6J("nzStringTemplateOutlet", s.placeholder);
              },
              dependencies: [$.f],
              encapsulation: 2,
              changeDetection: 0,
            })),
            B
          );
        })(),
        bt = (() => {
          var f;
          class B {
            updateTemplateVariable() {
              const i = 0 === this.listOfTopItem.length;
              (this.isShowPlaceholder =
                i && !this.isComposing && !this.inputValue),
                (this.isShowSingleLabel =
                  !i && !this.isComposing && !this.inputValue);
            }
            isComposingChange(i) {
              (this.isComposing = i), this.updateTemplateVariable();
            }
            onInputValueChange(i) {
              i !== this.inputValue &&
                ((this.inputValue = i),
                this.updateTemplateVariable(),
                this.inputValueChange.emit(i),
                this.tokenSeparate(i, this.tokenSeparators));
            }
            tokenSeparate(i, s) {
              if (
                i &&
                i.length &&
                s.length &&
                "default" !== this.mode &&
                ((E, ct) => {
                  for (let dt = 0; dt < ct.length; ++dt)
                    if (E.lastIndexOf(ct[dt]) > 0) return !0;
                  return !1;
                })(i, s)
              ) {
                const E = ((E, ct) => {
                  const dt = new RegExp(`[${ct.join()}]`),
                    Ct = E.split(dt).filter((ft) => ft);
                  return [...new Set(Ct)];
                })(i, s);
                this.tokenize.next(E);
              }
            }
            clearInputValue() {
              this.nzSelectSearchComponent &&
                this.nzSelectSearchComponent.clearInputValue();
            }
            focus() {
              this.nzSelectSearchComponent &&
                this.nzSelectSearchComponent.focus();
            }
            blur() {
              this.nzSelectSearchComponent &&
                this.nzSelectSearchComponent.blur();
            }
            trackValue(i, s) {
              return s.nzValue;
            }
            onDeleteItem(i) {
              !this.disabled && !i.nzDisabled && this.deleteItem.next(i);
            }
            constructor(i, s, p) {
              (this.elementRef = i),
                (this.ngZone = s),
                (this.noAnimation = p),
                (this.nzId = null),
                (this.showSearch = !1),
                (this.placeHolder = null),
                (this.open = !1),
                (this.maxTagCount = 1 / 0),
                (this.autofocus = !1),
                (this.disabled = !1),
                (this.mode = "default"),
                (this.customTemplate = null),
                (this.maxTagPlaceholder = null),
                (this.removeIcon = null),
                (this.listOfTopItem = []),
                (this.tokenSeparators = []),
                (this.tokenize = new t.vpe()),
                (this.inputValueChange = new t.vpe()),
                (this.deleteItem = new t.vpe()),
                (this.listOfSlicedItem = []),
                (this.isShowPlaceholder = !0),
                (this.isShowSingleLabel = !1),
                (this.isComposing = !1),
                (this.inputValue = null),
                (this.destroy$ = new n.x());
            }
            ngOnChanges(i) {
              const {
                listOfTopItem: s,
                maxTagCount: p,
                customTemplate: d,
                maxTagPlaceholder: E,
              } = i;
              if ((s && this.updateTemplateVariable(), s || p || d || E)) {
                const ct = this.listOfTopItem
                  .slice(0, this.maxTagCount)
                  .map((dt) => ({
                    nzLabel: dt.nzLabel,
                    nzValue: dt.nzValue,
                    nzDisabled: dt.nzDisabled,
                    contentTemplateOutlet: this.customTemplate,
                    contentTemplateOutletContext: dt,
                  }));
                if (this.listOfTopItem.length > this.maxTagCount) {
                  const dt = `+ ${
                      this.listOfTopItem.length - this.maxTagCount
                    } ...`,
                    Ct = this.listOfTopItem.map((he) => he.nzValue),
                    ft = {
                      nzLabel: dt,
                      nzValue: "$$__nz_exceeded_item",
                      nzDisabled: !0,
                      contentTemplateOutlet: this.maxTagPlaceholder,
                      contentTemplateOutletContext: Ct.slice(this.maxTagCount),
                    };
                  ct.push(ft);
                }
                this.listOfSlicedItem = ct;
              }
            }
            ngOnInit() {
              this.ngZone.runOutsideAngular(() => {
                (0, l.R)(this.elementRef.nativeElement, "click")
                  .pipe((0, e.R)(this.destroy$))
                  .subscribe((i) => {
                    i.target !==
                      this.nzSelectSearchComponent.inputElement.nativeElement &&
                      this.nzSelectSearchComponent.focus();
                  }),
                  (0, l.R)(this.elementRef.nativeElement, "keydown")
                    .pipe((0, e.R)(this.destroy$))
                    .subscribe((i) => {
                      i.target instanceof HTMLInputElement &&
                        i.keyCode === tt.ZH &&
                        "default" !== this.mode &&
                        !i.target.value &&
                        this.listOfTopItem.length > 0 &&
                        (i.preventDefault(),
                        this.ngZone.run(() =>
                          this.onDeleteItem(
                            this.listOfTopItem[this.listOfTopItem.length - 1]
                          )
                        ));
                    });
              });
            }
            ngOnDestroy() {
              this.destroy$.next();
            }
          }
          return (
            ((f = B).ɵfac = function (i) {
              return new (i || f)(t.Y36(t.SBq), t.Y36(t.R0b), t.Y36(v.P, 9));
            }),
            (f.ɵcmp = t.Xpm({
              type: f,
              selectors: [["nz-select-top-control"]],
              viewQuery: function (i, s) {
                if ((1 & i && t.Gf(Mt, 5), 2 & i)) {
                  let p;
                  t.iGM((p = t.CRH())) && (s.nzSelectSearchComponent = p.first);
                }
              },
              hostAttrs: [1, "ant-select-selector"],
              inputs: {
                nzId: "nzId",
                showSearch: "showSearch",
                placeHolder: "placeHolder",
                open: "open",
                maxTagCount: "maxTagCount",
                autofocus: "autofocus",
                disabled: "disabled",
                mode: "mode",
                customTemplate: "customTemplate",
                maxTagPlaceholder: "maxTagPlaceholder",
                removeIcon: "removeIcon",
                listOfTopItem: "listOfTopItem",
                tokenSeparators: "tokenSeparators",
              },
              outputs: {
                tokenize: "tokenize",
                inputValueChange: "inputValueChange",
                deleteItem: "deleteItem",
              },
              exportAs: ["nzSelectTopControl"],
              features: [t.TTD],
              decls: 4,
              vars: 3,
              consts: [
                [3, "ngSwitch"],
                [4, "ngSwitchCase"],
                [4, "ngSwitchDefault"],
                [3, "placeholder", 4, "ngIf"],
                [
                  3,
                  "nzId",
                  "disabled",
                  "value",
                  "showInput",
                  "mirrorSync",
                  "autofocus",
                  "focusTrigger",
                  "isComposingChange",
                  "valueChange",
                ],
                [
                  3,
                  "deletable",
                  "disabled",
                  "removeIcon",
                  "label",
                  "contentTemplateOutlet",
                  "contentTemplateOutletContext",
                  4,
                  "ngIf",
                ],
                [
                  3,
                  "deletable",
                  "disabled",
                  "removeIcon",
                  "label",
                  "contentTemplateOutlet",
                  "contentTemplateOutletContext",
                ],
                [
                  3,
                  "removeIcon",
                  "label",
                  "disabled",
                  "contentTemplateOutlet",
                  "deletable",
                  "contentTemplateOutletContext",
                  "delete",
                  4,
                  "ngFor",
                  "ngForOf",
                  "ngForTrackBy",
                ],
                [
                  3,
                  "nzId",
                  "disabled",
                  "value",
                  "autofocus",
                  "showInput",
                  "mirrorSync",
                  "focusTrigger",
                  "isComposingChange",
                  "valueChange",
                ],
                [
                  3,
                  "removeIcon",
                  "label",
                  "disabled",
                  "contentTemplateOutlet",
                  "deletable",
                  "contentTemplateOutletContext",
                  "delete",
                ],
                [3, "placeholder"],
              ],
              template: function (i, s) {
                1 & i &&
                  (t.ynx(0, 0),
                  t.YNc(1, jt, 3, 8, "ng-container", 1),
                  t.YNc(2, qt, 3, 9, "ng-container", 2),
                  t.BQk(),
                  t.YNc(3, te, 1, 1, "nz-select-placeholder", 3)),
                  2 & i &&
                    (t.Q6J("ngSwitch", s.mode),
                    t.xp6(1),
                    t.Q6J("ngSwitchCase", "default"),
                    t.xp6(2),
                    t.Q6J("ngIf", s.isShowPlaceholder));
              },
              dependencies: [F.sg, F.O5, F.RF, F.n9, F.ED, k.w, Mt, Ht, Vt],
              encapsulation: 2,
              changeDetection: 0,
            })),
            B
          );
        })(),
        wt = (() => {
          var f;
          class B {
            constructor() {
              (this.clearIcon = null), (this.clear = new t.vpe());
            }
            onClick(i) {
              i.preventDefault(), i.stopPropagation(), this.clear.emit(i);
            }
          }
          return (
            ((f = B).ɵfac = function (i) {
              return new (i || f)();
            }),
            (f.ɵcmp = t.Xpm({
              type: f,
              selectors: [["nz-select-clear"]],
              hostAttrs: [1, "ant-select-clear"],
              hostBindings: function (i, s) {
                1 & i &&
                  t.NdJ("click", function (d) {
                    return s.onClick(d);
                  });
              },
              inputs: { clearIcon: "clearIcon" },
              outputs: { clear: "clear" },
              decls: 1,
              vars: 2,
              consts: [
                [
                  "nz-icon",
                  "",
                  "nzType",
                  "close-circle",
                  "nzTheme",
                  "fill",
                  "class",
                  "ant-select-close-icon",
                  4,
                  "ngIf",
                  "ngIfElse",
                ],
                [
                  "nz-icon",
                  "",
                  "nzType",
                  "close-circle",
                  "nzTheme",
                  "fill",
                  1,
                  "ant-select-close-icon",
                ],
              ],
              template: function (i, s) {
                1 & i && t.YNc(0, ee, 1, 0, "span", 0),
                  2 & i && t.Q6J("ngIf", !s.clearIcon)("ngIfElse", s.clearIcon);
              },
              dependencies: [F.O5, H.Ls, k.w],
              encapsulation: 2,
              changeDetection: 0,
            })),
            B
          );
        })(),
        Nt = (() => {
          var f;
          class B {
            constructor() {
              (this.loading = !1),
                (this.search = !1),
                (this.showArrow = !1),
                (this.suffixIcon = null),
                (this.feedbackIcon = null);
            }
          }
          return (
            ((f = B).ɵfac = function (i) {
              return new (i || f)();
            }),
            (f.ɵcmp = t.Xpm({
              type: f,
              selectors: [["nz-select-arrow"]],
              hostAttrs: [1, "ant-select-arrow"],
              hostVars: 2,
              hostBindings: function (i, s) {
                2 & i && t.ekj("ant-select-arrow-loading", s.loading);
              },
              inputs: {
                loading: "loading",
                search: "search",
                showArrow: "showArrow",
                suffixIcon: "suffixIcon",
                feedbackIcon: "feedbackIcon",
              },
              decls: 4,
              vars: 3,
              consts: [
                ["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"],
                ["defaultArrow", ""],
                [4, "nzStringTemplateOutlet"],
                ["nz-icon", "", "nzType", "loading"],
                [4, "ngIf", "ngIfElse"],
                ["suffixTemplate", ""],
                ["nz-icon", "", "nzType", "down", 4, "ngIf"],
                ["nz-icon", "", "nzType", "search", 4, "ngIf"],
                ["nz-icon", "", "nzType", "down"],
                ["nz-icon", "", "nzType", "search"],
                ["nz-icon", "", 3, "nzType", 4, "ngIf"],
                ["nz-icon", "", 3, "nzType"],
              ],
              template: function (i, s) {
                if (
                  (1 & i &&
                    (t.YNc(0, ne, 1, 0, "span", 0),
                    t.YNc(1, ce, 3, 2, "ng-template", null, 1, t.W1O),
                    t.YNc(3, pe, 2, 1, "ng-container", 2)),
                  2 & i)
                ) {
                  const p = t.MAs(2);
                  t.Q6J("ngIf", s.loading)("ngIfElse", p),
                    t.xp6(3),
                    t.Q6J("nzStringTemplateOutlet", s.feedbackIcon);
                }
              },
              dependencies: [F.O5, H.Ls, $.f, k.w],
              encapsulation: 2,
              changeDetection: 0,
            })),
            B
          );
        })();
      const Et = (f, B) =>
        !(!B || !B.nzLabel) &&
        B.nzLabel.toString().toLowerCase().indexOf(f.toLowerCase()) > -1;
      let Gt = (() => {
          var f;
          class B {
            set nzShowArrow(i) {
              this._nzShowArrow = i;
            }
            get nzShowArrow() {
              return void 0 === this._nzShowArrow
                ? "default" === this.nzMode
                : this._nzShowArrow;
            }
            generateTagItem(i) {
              return { nzValue: i, nzLabel: i, type: "item" };
            }
            onItemClick(i) {
              if (((this.activatedValue = i), "default" === this.nzMode))
                (0 === this.listOfValue.length ||
                  !this.compareWith(this.listOfValue[0], i)) &&
                  this.updateListOfValue([i]),
                  this.setOpenState(!1);
              else {
                const s = this.listOfValue.findIndex((p) =>
                  this.compareWith(p, i)
                );
                if (-1 !== s) {
                  const p = this.listOfValue.filter((d, E) => E !== s);
                  this.updateListOfValue(p);
                } else if (this.listOfValue.length < this.nzMaxMultipleCount) {
                  const p = [...this.listOfValue, i];
                  this.updateListOfValue(p);
                }
                this.focus(), this.nzAutoClearSearchValue && this.clearInput();
              }
            }
            onItemDelete(i) {
              const s = this.listOfValue.filter(
                (p) => !this.compareWith(p, i.nzValue)
              );
              this.updateListOfValue(s), this.clearInput();
            }
            updateListOfContainerItem() {
              let i = this.listOfTagAndTemplateItem
                .filter((d) => !d.nzHide)
                .filter(
                  (d) =>
                    !(!this.nzServerSearch && this.searchValue) ||
                    this.nzFilterOption(this.searchValue, d)
                );
              if ("tags" === this.nzMode && this.searchValue) {
                const d = this.listOfTagAndTemplateItem.find(
                  (E) => E.nzLabel === this.searchValue
                );
                if (d) this.activatedValue = d.nzValue;
                else {
                  const E = this.generateTagItem(this.searchValue);
                  (i = [E, ...i]), (this.activatedValue = E.nzValue);
                }
              }
              const s =
                i.find((d) => d.nzLabel === this.searchValue) ||
                i.find((d) =>
                  this.compareWith(d.nzValue, this.activatedValue)
                ) ||
                i.find((d) =>
                  this.compareWith(d.nzValue, this.listOfValue[0])
                ) ||
                i[0];
              this.activatedValue = (s && s.nzValue) || null;
              let p = [];
              this.isReactiveDriven
                ? (p = [
                    ...new Set(
                      this.nzOptions
                        .filter((d) => d.groupLabel)
                        .map((d) => d.groupLabel)
                    ),
                  ])
                : this.listOfNzOptionGroupComponent &&
                  (p = this.listOfNzOptionGroupComponent.map((d) => d.nzLabel)),
                p.forEach((d) => {
                  const E = i.findIndex((ct) => d === ct.groupLabel);
                  E > -1 &&
                    i.splice(E, 0, { groupLabel: d, type: "group", key: d });
                }),
                (this.listOfContainerItem = [...i]),
                this.updateCdkConnectedOverlayPositions();
            }
            clearInput() {
              this.nzSelectTopControlComponent.clearInputValue();
            }
            updateListOfValue(i) {
              const p = ((d, E) =>
                "default" === this.nzMode ? (d.length > 0 ? d[0] : null) : d)(
                i
              );
              this.value !== p &&
                ((this.listOfValue = i),
                this.listOfValue$.next(i),
                (this.value = p),
                this.onChange(this.value));
            }
            onTokenSeparate(i) {
              const s = this.listOfTagAndTemplateItem
                .filter((p) => -1 !== i.findIndex((d) => d === p.nzLabel))
                .map((p) => p.nzValue)
                .filter(
                  (p) =>
                    -1 ===
                    this.listOfValue.findIndex((d) => this.compareWith(d, p))
                );
              if ("multiple" === this.nzMode)
                this.updateListOfValue([...this.listOfValue, ...s]);
              else if ("tags" === this.nzMode) {
                const p = i.filter(
                  (d) =>
                    -1 ===
                    this.listOfTagAndTemplateItem.findIndex(
                      (E) => E.nzLabel === d
                    )
                );
                this.updateListOfValue([...this.listOfValue, ...s, ...p]);
              }
              this.clearInput();
            }
            onKeyDown(i) {
              if (this.nzDisabled) return;
              const s = this.listOfContainerItem
                  .filter((d) => "item" === d.type)
                  .filter((d) => !d.nzDisabled),
                p = s.findIndex((d) =>
                  this.compareWith(d.nzValue, this.activatedValue)
                );
              switch (i.keyCode) {
                case tt.LH:
                  i.preventDefault(),
                    this.nzOpen &&
                      s.length > 0 &&
                      (this.activatedValue =
                        s[p > 0 ? p - 1 : s.length - 1].nzValue);
                  break;
                case tt.JH:
                  i.preventDefault(),
                    this.nzOpen && s.length > 0
                      ? (this.activatedValue =
                          s[p < s.length - 1 ? p + 1 : 0].nzValue)
                      : this.setOpenState(!0);
                  break;
                case tt.K5:
                  i.preventDefault(),
                    this.nzOpen
                      ? (0, N.DX)(this.activatedValue) &&
                        -1 !== p &&
                        this.onItemClick(this.activatedValue)
                      : this.setOpenState(!0);
                  break;
                case tt.L_:
                  this.nzOpen || (this.setOpenState(!0), i.preventDefault());
                  break;
                case tt.Mf:
                  this.nzSelectOnTab
                    ? this.nzOpen &&
                      (i.preventDefault(),
                      (0, N.DX)(this.activatedValue) &&
                        this.onItemClick(this.activatedValue))
                    : this.setOpenState(!1);
                  break;
                case tt.hY:
                  break;
                default:
                  this.nzOpen || this.setOpenState(!0);
              }
            }
            setOpenState(i) {
              this.nzOpen !== i &&
                ((this.nzOpen = i),
                this.nzOpenChange.emit(i),
                this.onOpenChange(),
                this.cdr.markForCheck());
            }
            onOpenChange() {
              this.updateCdkConnectedOverlayStatus(), this.clearInput();
            }
            onInputValueChange(i) {
              (this.searchValue = i),
                this.updateListOfContainerItem(),
                this.nzOnSearch.emit(i),
                this.updateCdkConnectedOverlayPositions();
            }
            onClearSelection() {
              this.updateListOfValue([]);
            }
            onClickOutside(i) {
              this.host.nativeElement.contains(i.target) ||
                this.setOpenState(!1);
            }
            focus() {
              this.nzSelectTopControlComponent.focus();
            }
            blur() {
              this.nzSelectTopControlComponent.blur();
            }
            onPositionChange(i) {
              const s = (0, et.d_)(i);
              this.dropDownPosition = s;
            }
            updateCdkConnectedOverlayStatus() {
              if (this.platform.isBrowser && this.originElement.nativeElement) {
                const i = this.triggerWidth;
                (0, W.h)(this.requestId),
                  (this.requestId = (0, W.e)(() => {
                    (this.triggerWidth =
                      this.originElement.nativeElement.getBoundingClientRect().width),
                      i !== this.triggerWidth && this.cdr.detectChanges();
                  }));
              }
            }
            updateCdkConnectedOverlayPositions() {
              (0, W.e)(() => {
                this.cdkConnectedOverlay?.overlayRef?.updatePosition();
              });
            }
            constructor(i, s, p, d, E, ct, dt, Ct, ft, he, ve, Ce) {
              (this.ngZone = i),
                (this.destroy$ = s),
                (this.nzConfigService = p),
                (this.cdr = d),
                (this.host = E),
                (this.renderer = ct),
                (this.platform = dt),
                (this.focusMonitor = Ct),
                (this.directionality = ft),
                (this.noAnimation = he),
                (this.nzFormStatusService = ve),
                (this.nzFormNoStatusService = Ce),
                (this._nzModuleName = "select"),
                (this.nzId = null),
                (this.nzSize = "default"),
                (this.nzStatus = ""),
                (this.nzOptionHeightPx = 32),
                (this.nzOptionOverflowSize = 8),
                (this.nzDropdownClassName = null),
                (this.nzDropdownMatchSelectWidth = !0),
                (this.nzDropdownStyle = null),
                (this.nzNotFoundContent = void 0),
                (this.nzPlaceHolder = null),
                (this.nzPlacement = null),
                (this.nzMaxTagCount = 1 / 0),
                (this.nzDropdownRender = null),
                (this.nzCustomTemplate = null),
                (this.nzSuffixIcon = null),
                (this.nzClearIcon = null),
                (this.nzRemoveIcon = null),
                (this.nzMenuItemSelectedIcon = null),
                (this.nzTokenSeparators = []),
                (this.nzMaxTagPlaceholder = null),
                (this.nzMaxMultipleCount = 1 / 0),
                (this.nzMode = "default"),
                (this.nzFilterOption = Et),
                (this.compareWith = (Te, Oe) => Te === Oe),
                (this.nzAllowClear = !1),
                (this.nzBorderless = !1),
                (this.nzShowSearch = !1),
                (this.nzLoading = !1),
                (this.nzAutoFocus = !1),
                (this.nzAutoClearSearchValue = !0),
                (this.nzServerSearch = !1),
                (this.nzDisabled = !1),
                (this.nzOpen = !1),
                (this.nzSelectOnTab = !1),
                (this.nzBackdrop = !1),
                (this.nzOptions = []),
                (this.nzOnSearch = new t.vpe()),
                (this.nzScrollToBottom = new t.vpe()),
                (this.nzOpenChange = new t.vpe()),
                (this.nzBlur = new t.vpe()),
                (this.nzFocus = new t.vpe()),
                (this.listOfValue$ = new u.X([])),
                (this.listOfTemplateItem$ = new u.X([])),
                (this.listOfTagAndTemplateItem = []),
                (this.searchValue = ""),
                (this.isReactiveDriven = !1),
                (this.requestId = -1),
                (this.isNzDisableFirstChange = !0),
                (this.onChange = () => {}),
                (this.onTouched = () => {}),
                (this.dropDownPosition = "bottomLeft"),
                (this.triggerWidth = null),
                (this.listOfContainerItem = []),
                (this.listOfTopItem = []),
                (this.activatedValue = null),
                (this.listOfValue = []),
                (this.focused = !1),
                (this.dir = "ltr"),
                (this.positions = []),
                (this.prefixCls = "ant-select"),
                (this.statusCls = {}),
                (this.status = ""),
                (this.hasFeedback = !1);
            }
            writeValue(i) {
              if (this.value !== i) {
                this.value = i;
                const p = ((d, E) =>
                  null == d ? [] : "default" === this.nzMode ? [d] : d)(i);
                (this.listOfValue = p),
                  this.listOfValue$.next(p),
                  this.cdr.markForCheck();
              }
            }
            registerOnChange(i) {
              this.onChange = i;
            }
            registerOnTouched(i) {
              this.onTouched = i;
            }
            setDisabledState(i) {
              (this.nzDisabled =
                (this.isNzDisableFirstChange && this.nzDisabled) || i),
                (this.isNzDisableFirstChange = !1),
                this.nzDisabled && this.setOpenState(!1),
                this.cdr.markForCheck();
            }
            ngOnChanges(i) {
              const {
                nzOpen: s,
                nzDisabled: p,
                nzOptions: d,
                nzStatus: E,
                nzPlacement: ct,
              } = i;
              if (
                (s && this.onOpenChange(),
                p && this.nzDisabled && this.setOpenState(!1),
                d)
              ) {
                this.isReactiveDriven = !0;
                const Ct = (this.nzOptions || []).map((ft) => ({
                  template: ft.label instanceof t.Rgc ? ft.label : null,
                  nzLabel:
                    "string" == typeof ft.label || "number" == typeof ft.label
                      ? ft.label
                      : null,
                  nzValue: ft.value,
                  nzDisabled: ft.disabled || !1,
                  nzHide: ft.hide || !1,
                  nzCustomContent: ft.label instanceof t.Rgc,
                  groupLabel: ft.groupLabel || null,
                  type: "item",
                  key: ft.value,
                }));
                this.listOfTemplateItem$.next(Ct);
              }
              if (
                (E && this.setStatusStyles(this.nzStatus, this.hasFeedback), ct)
              ) {
                const { currentValue: dt } = ct;
                this.dropDownPosition = dt;
                const Ct = ["bottomLeft", "topLeft", "bottomRight", "topRight"];
                this.positions =
                  dt && Ct.includes(dt)
                    ? [et.yW[dt]]
                    : Ct.map((ft) => et.yW[ft]);
              }
            }
            ngOnInit() {
              this.nzFormStatusService?.formStatusChanges
                .pipe(
                  (0, ot.x)(
                    (i, s) =>
                      i.status === s.status && i.hasFeedback === s.hasFeedback
                  ),
                  (0, lt.M)(
                    this.nzFormNoStatusService
                      ? this.nzFormNoStatusService.noFormStatus
                      : (0, P.of)(!1)
                  ),
                  (0, q.U)(([{ status: i, hasFeedback: s }, p]) => ({
                    status: p ? "" : i,
                    hasFeedback: s,
                  })),
                  (0, e.R)(this.destroy$)
                )
                .subscribe(({ status: i, hasFeedback: s }) => {
                  this.setStatusStyles(i, s);
                }),
                this.focusMonitor
                  .monitor(this.host, !0)
                  .pipe((0, e.R)(this.destroy$))
                  .subscribe((i) => {
                    i
                      ? ((this.focused = !0),
                        this.cdr.markForCheck(),
                        this.nzFocus.emit())
                      : ((this.focused = !1),
                        this.cdr.markForCheck(),
                        this.nzBlur.emit(),
                        Promise.resolve().then(() => {
                          this.onTouched();
                        }));
                  }),
                (0, r.a)([this.listOfValue$, this.listOfTemplateItem$])
                  .pipe((0, e.R)(this.destroy$))
                  .subscribe(([i, s]) => {
                    const p = i
                      .filter(() => "tags" === this.nzMode)
                      .filter(
                        (d) =>
                          -1 ===
                          s.findIndex((E) => this.compareWith(E.nzValue, d))
                      )
                      .map(
                        (d) =>
                          this.listOfTopItem.find((E) =>
                            this.compareWith(E.nzValue, d)
                          ) || this.generateTagItem(d)
                      );
                    (this.listOfTagAndTemplateItem = [...s, ...p]),
                      (this.listOfTopItem = this.listOfValue
                        .map((d) =>
                          [
                            ...this.listOfTagAndTemplateItem,
                            ...this.listOfTopItem,
                          ].find((E) => this.compareWith(d, E.nzValue))
                        )
                        .filter((d) => !!d)),
                      this.updateListOfContainerItem();
                  }),
                this.directionality.change
                  ?.pipe((0, e.R)(this.destroy$))
                  .subscribe((i) => {
                    (this.dir = i), this.cdr.detectChanges();
                  }),
                this.nzConfigService
                  .getConfigChangeEventForComponent("select")
                  .pipe((0, e.R)(this.destroy$))
                  .subscribe(() => {
                    this.cdr.markForCheck();
                  }),
                (this.dir = this.directionality.value),
                this.ngZone.runOutsideAngular(() =>
                  (0, l.R)(this.host.nativeElement, "click")
                    .pipe((0, e.R)(this.destroy$))
                    .subscribe(() => {
                      (this.nzOpen && this.nzShowSearch) ||
                        this.nzDisabled ||
                        this.ngZone.run(() => this.setOpenState(!this.nzOpen));
                    })
                ),
                this.cdkConnectedOverlay.overlayKeydown
                  .pipe((0, e.R)(this.destroy$))
                  .subscribe((i) => {
                    i.keyCode === tt.hY && this.setOpenState(!1);
                  });
            }
            ngAfterContentInit() {
              this.isReactiveDriven ||
                (0, w.T)(
                  this.listOfNzOptionGroupComponent.changes,
                  this.listOfNzOptionComponent.changes
                )
                  .pipe(
                    (0, X.O)(!0),
                    (0, mt.w)(() =>
                      (0, w.T)(
                        this.listOfNzOptionComponent.changes,
                        this.listOfNzOptionGroupComponent.changes,
                        ...this.listOfNzOptionComponent.map((i) => i.changes),
                        ...this.listOfNzOptionGroupComponent.map(
                          (i) => i.changes
                        )
                      ).pipe((0, X.O)(!0))
                    ),
                    (0, e.R)(this.destroy$)
                  )
                  .subscribe(() => {
                    const i = this.listOfNzOptionComponent
                      .toArray()
                      .map((s) => {
                        const {
                          template: p,
                          nzLabel: d,
                          nzValue: E,
                          nzDisabled: ct,
                          nzHide: dt,
                          nzCustomContent: Ct,
                          groupLabel: ft,
                        } = s;
                        return {
                          template: p,
                          nzLabel: d,
                          nzValue: E,
                          nzDisabled: ct,
                          nzHide: dt,
                          nzCustomContent: Ct,
                          groupLabel: ft,
                          type: "item",
                          key: E,
                        };
                      });
                    this.listOfTemplateItem$.next(i), this.cdr.markForCheck();
                  });
            }
            ngOnDestroy() {
              (0, W.h)(this.requestId),
                this.focusMonitor.stopMonitoring(this.host);
            }
            setStatusStyles(i, s) {
              (this.status = i),
                (this.hasFeedback = s),
                this.cdr.markForCheck(),
                (this.statusCls = (0, N.Zu)(this.prefixCls, i, s)),
                Object.keys(this.statusCls).forEach((p) => {
                  this.statusCls[p]
                    ? this.renderer.addClass(this.host.nativeElement, p)
                    : this.renderer.removeClass(this.host.nativeElement, p);
                });
            }
          }
          return (
            ((f = B).ɵfac = function (i) {
              return new (i || f)(
                t.Y36(t.R0b),
                t.Y36(ut.kn),
                t.Y36(J.jY),
                t.Y36(t.sBO),
                t.Y36(t.SBq),
                t.Y36(t.Qsj),
                t.Y36(T.t4),
                t.Y36(R.tE),
                t.Y36(S.Is, 8),
                t.Y36(v.P, 9),
                t.Y36(x.kH, 8),
                t.Y36(x.yW, 8)
              );
            }),
            (f.ɵcmp = t.Xpm({
              type: f,
              selectors: [["nz-select"]],
              contentQueries: function (i, s, p) {
                if ((1 & i && (t.Suo(p, Wt, 5), t.Suo(p, Jt, 5)), 2 & i)) {
                  let d;
                  t.iGM((d = t.CRH())) && (s.listOfNzOptionComponent = d),
                    t.iGM((d = t.CRH())) &&
                      (s.listOfNzOptionGroupComponent = d);
                }
              },
              viewQuery: function (i, s) {
                if (
                  (1 & i &&
                    (t.Gf(L.xu, 7, t.SBq),
                    t.Gf(L.pI, 7),
                    t.Gf(bt, 7),
                    t.Gf(Jt, 7, t.SBq),
                    t.Gf(bt, 7, t.SBq)),
                  2 & i)
                ) {
                  let p;
                  t.iGM((p = t.CRH())) && (s.originElement = p.first),
                    t.iGM((p = t.CRH())) && (s.cdkConnectedOverlay = p.first),
                    t.iGM((p = t.CRH())) &&
                      (s.nzSelectTopControlComponent = p.first),
                    t.iGM((p = t.CRH())) &&
                      (s.nzOptionGroupComponentElement = p.first),
                    t.iGM((p = t.CRH())) &&
                      (s.nzSelectTopControlComponentElement = p.first);
                }
              },
              hostAttrs: [1, "ant-select"],
              hostVars: 26,
              hostBindings: function (i, s) {
                2 & i &&
                  t.ekj("ant-select-in-form-item", !!s.nzFormStatusService)(
                    "ant-select-lg",
                    "large" === s.nzSize
                  )("ant-select-sm", "small" === s.nzSize)(
                    "ant-select-show-arrow",
                    s.nzShowArrow
                  )("ant-select-disabled", s.nzDisabled)(
                    "ant-select-show-search",
                    (s.nzShowSearch || "default" !== s.nzMode) && !s.nzDisabled
                  )("ant-select-allow-clear", s.nzAllowClear)(
                    "ant-select-borderless",
                    s.nzBorderless
                  )("ant-select-open", s.nzOpen)(
                    "ant-select-focused",
                    s.nzOpen || s.focused
                  )("ant-select-single", "default" === s.nzMode)(
                    "ant-select-multiple",
                    "default" !== s.nzMode
                  )("ant-select-rtl", "rtl" === s.dir);
              },
              inputs: {
                nzId: "nzId",
                nzSize: "nzSize",
                nzStatus: "nzStatus",
                nzOptionHeightPx: "nzOptionHeightPx",
                nzOptionOverflowSize: "nzOptionOverflowSize",
                nzDropdownClassName: "nzDropdownClassName",
                nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth",
                nzDropdownStyle: "nzDropdownStyle",
                nzNotFoundContent: "nzNotFoundContent",
                nzPlaceHolder: "nzPlaceHolder",
                nzPlacement: "nzPlacement",
                nzMaxTagCount: "nzMaxTagCount",
                nzDropdownRender: "nzDropdownRender",
                nzCustomTemplate: "nzCustomTemplate",
                nzSuffixIcon: "nzSuffixIcon",
                nzClearIcon: "nzClearIcon",
                nzRemoveIcon: "nzRemoveIcon",
                nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon",
                nzTokenSeparators: "nzTokenSeparators",
                nzMaxTagPlaceholder: "nzMaxTagPlaceholder",
                nzMaxMultipleCount: "nzMaxMultipleCount",
                nzMode: "nzMode",
                nzFilterOption: "nzFilterOption",
                compareWith: "compareWith",
                nzAllowClear: "nzAllowClear",
                nzBorderless: "nzBorderless",
                nzShowSearch: "nzShowSearch",
                nzLoading: "nzLoading",
                nzAutoFocus: "nzAutoFocus",
                nzAutoClearSearchValue: "nzAutoClearSearchValue",
                nzServerSearch: "nzServerSearch",
                nzDisabled: "nzDisabled",
                nzOpen: "nzOpen",
                nzSelectOnTab: "nzSelectOnTab",
                nzBackdrop: "nzBackdrop",
                nzOptions: "nzOptions",
                nzShowArrow: "nzShowArrow",
              },
              outputs: {
                nzOnSearch: "nzOnSearch",
                nzScrollToBottom: "nzScrollToBottom",
                nzOpenChange: "nzOpenChange",
                nzBlur: "nzBlur",
                nzFocus: "nzFocus",
              },
              exportAs: ["nzSelect"],
              features: [
                t._Bn([
                  ut.kn,
                  {
                    provide: st.JU,
                    useExisting: (0, t.Gpc)(() => f),
                    multi: !0,
                  },
                ]),
                t.TTD,
              ],
              decls: 5,
              vars: 25,
              consts: [
                [
                  "cdkOverlayOrigin",
                  "",
                  3,
                  "nzId",
                  "open",
                  "disabled",
                  "mode",
                  "nzNoAnimation",
                  "maxTagPlaceholder",
                  "removeIcon",
                  "placeHolder",
                  "maxTagCount",
                  "customTemplate",
                  "tokenSeparators",
                  "showSearch",
                  "autofocus",
                  "listOfTopItem",
                  "inputValueChange",
                  "tokenize",
                  "deleteItem",
                  "keydown",
                ],
                ["origin", "cdkOverlayOrigin"],
                [
                  3,
                  "showArrow",
                  "loading",
                  "search",
                  "suffixIcon",
                  "feedbackIcon",
                  4,
                  "ngIf",
                ],
                [3, "clearIcon", "clear", 4, "ngIf"],
                [
                  "cdkConnectedOverlay",
                  "",
                  "nzConnectedOverlay",
                  "",
                  3,
                  "cdkConnectedOverlayHasBackdrop",
                  "cdkConnectedOverlayMinWidth",
                  "cdkConnectedOverlayWidth",
                  "cdkConnectedOverlayOrigin",
                  "cdkConnectedOverlayTransformOriginOn",
                  "cdkConnectedOverlayPanelClass",
                  "cdkConnectedOverlayOpen",
                  "cdkConnectedOverlayPositions",
                  "overlayOutsideClick",
                  "detach",
                  "positionChange",
                ],
                [
                  3,
                  "showArrow",
                  "loading",
                  "search",
                  "suffixIcon",
                  "feedbackIcon",
                ],
                ["feedbackIconTpl", ""],
                [3, "status", 4, "ngIf"],
                [3, "status"],
                [3, "clearIcon", "clear"],
                [
                  3,
                  "ngStyle",
                  "itemSize",
                  "maxItemLength",
                  "matchWidth",
                  "nzNoAnimation",
                  "listOfContainerItem",
                  "menuItemSelectedIcon",
                  "notFoundContent",
                  "activatedValue",
                  "listOfSelectedValue",
                  "dropdownRender",
                  "compareWith",
                  "mode",
                  "keydown",
                  "itemClick",
                  "scrollToBottom",
                ],
              ],
              template: function (i, s) {
                if (
                  (1 & i &&
                    (t.TgZ(0, "nz-select-top-control", 0, 1),
                    t.NdJ("inputValueChange", function (d) {
                      return s.onInputValueChange(d);
                    })("tokenize", function (d) {
                      return s.onTokenSeparate(d);
                    })("deleteItem", function (d) {
                      return s.onItemDelete(d);
                    })("keydown", function (d) {
                      return s.onKeyDown(d);
                    }),
                    t.qZA(),
                    t.YNc(2, ue, 3, 5, "nz-select-arrow", 2),
                    t.YNc(3, _e, 1, 1, "nz-select-clear", 3),
                    t.YNc(4, xt, 1, 23, "ng-template", 4),
                    t.NdJ("overlayOutsideClick", function (d) {
                      return s.onClickOutside(d);
                    })("detach", function () {
                      return s.setOpenState(!1);
                    })("positionChange", function (d) {
                      return s.onPositionChange(d);
                    })),
                  2 & i)
                ) {
                  const p = t.MAs(1);
                  t.Q6J("nzId", s.nzId)("open", s.nzOpen)(
                    "disabled",
                    s.nzDisabled
                  )("mode", s.nzMode)(
                    "@.disabled",
                    !(null == s.noAnimation || !s.noAnimation.nzNoAnimation)
                  )(
                    "nzNoAnimation",
                    null == s.noAnimation ? null : s.noAnimation.nzNoAnimation
                  )("maxTagPlaceholder", s.nzMaxTagPlaceholder)(
                    "removeIcon",
                    s.nzRemoveIcon
                  )("placeHolder", s.nzPlaceHolder)(
                    "maxTagCount",
                    s.nzMaxTagCount
                  )("customTemplate", s.nzCustomTemplate)(
                    "tokenSeparators",
                    s.nzTokenSeparators
                  )("showSearch", s.nzShowSearch)("autofocus", s.nzAutoFocus)(
                    "listOfTopItem",
                    s.listOfTopItem
                  ),
                    t.xp6(2),
                    t.Q6J(
                      "ngIf",
                      s.nzShowArrow || (s.hasFeedback && !!s.status)
                    ),
                    t.xp6(1),
                    t.Q6J(
                      "ngIf",
                      s.nzAllowClear && !s.nzDisabled && s.listOfValue.length
                    ),
                    t.xp6(1),
                    t.Q6J("cdkConnectedOverlayHasBackdrop", s.nzBackdrop)(
                      "cdkConnectedOverlayMinWidth",
                      s.nzDropdownMatchSelectWidth ? null : s.triggerWidth
                    )(
                      "cdkConnectedOverlayWidth",
                      s.nzDropdownMatchSelectWidth ? s.triggerWidth : null
                    )("cdkConnectedOverlayOrigin", p)(
                      "cdkConnectedOverlayTransformOriginOn",
                      ".ant-select-dropdown"
                    )("cdkConnectedOverlayPanelClass", s.nzDropdownClassName)(
                      "cdkConnectedOverlayOpen",
                      s.nzOpen
                    )("cdkConnectedOverlayPositions", s.positions);
                }
              },
              dependencies: [
                F.O5,
                F.PC,
                L.pI,
                L.xu,
                et.hQ,
                v.P,
                k.w,
                x.w_,
                Qt,
                bt,
                wt,
                Nt,
              ],
              encapsulation: 2,
              data: { animation: [nt.mF] },
              changeDetection: 0,
            })),
            (0, Y.gn)([(0, J.oS)()], B.prototype, "nzSuffixIcon", void 0),
            (0, Y.gn)([(0, N.yF)()], B.prototype, "nzAllowClear", void 0),
            (0, Y.gn)(
              [(0, J.oS)(), (0, N.yF)()],
              B.prototype,
              "nzBorderless",
              void 0
            ),
            (0, Y.gn)([(0, N.yF)()], B.prototype, "nzShowSearch", void 0),
            (0, Y.gn)([(0, N.yF)()], B.prototype, "nzLoading", void 0),
            (0, Y.gn)([(0, N.yF)()], B.prototype, "nzAutoFocus", void 0),
            (0, Y.gn)(
              [(0, N.yF)()],
              B.prototype,
              "nzAutoClearSearchValue",
              void 0
            ),
            (0, Y.gn)([(0, N.yF)()], B.prototype, "nzServerSearch", void 0),
            (0, Y.gn)([(0, N.yF)()], B.prototype, "nzDisabled", void 0),
            (0, Y.gn)([(0, N.yF)()], B.prototype, "nzOpen", void 0),
            (0, Y.gn)([(0, N.yF)()], B.prototype, "nzSelectOnTab", void 0),
            (0, Y.gn)(
              [(0, J.oS)(), (0, N.yF)()],
              B.prototype,
              "nzBackdrop",
              void 0
            ),
            B
          );
        })(),
        Rt = (() => {
          var f;
          class B {}
          return (
            ((f = B).ɵfac = function (i) {
              return new (i || f)();
            }),
            (f.ɵmod = t.oAB({ type: f })),
            (f.ɵinj = t.cJS({
              imports: [
                S.vT,
                F.ez,
                h.YI,
                st.u5,
                T.ud,
                L.U8,
                H.PV,
                $.T,
                Z.Xo,
                et.e4,
                v.g,
                k.a,
                x.mJ,
                Q.Cl,
                R.rt,
              ],
            })),
            B
          );
        })();
    },
    24139: (gt, rt, o) => {
      o.d(rt, { H0: () => tt, Xw: () => ut, ng: () => N, yg: () => $ });
      var t = o(65879),
        n = o(27754),
        l = o(96814),
        u = o(97582),
        P = o(49388);
      const w = ["nzType", "avatar"],
        Q = ["nzType", "input"];
      function Z(L, st) {
        if (
          (1 & L &&
            (t.TgZ(0, "div", 5), t._UZ(1, "nz-skeleton-element", 6), t.qZA()),
          2 & L)
        ) {
          const nt = t.oxw(2);
          t.xp6(1),
            t.Q6J("nzSize", nt.avatar.size || "default")(
              "nzShape",
              nt.avatar.shape || "circle"
            );
        }
      }
      function e(L, st) {
        if ((1 & L && t._UZ(0, "h3", 7), 2 & L)) {
          const nt = t.oxw(2);
          t.Udp("width", nt.toCSSUnit(nt.title.width));
        }
      }
      function X(L, st) {
        if ((1 & L && t._UZ(0, "li"), 2 & L)) {
          const nt = st.index,
            J = t.oxw(3);
          t.Udp("width", J.toCSSUnit(J.widthList[nt]));
        }
      }
      function ot(L, st) {
        if (
          (1 & L && (t.TgZ(0, "ul", 8), t.YNc(1, X, 1, 2, "li", 9), t.qZA()),
          2 & L)
        ) {
          const nt = t.oxw(2);
          t.xp6(1), t.Q6J("ngForOf", nt.rowsList);
        }
      }
      function lt(L, st) {
        if (
          (1 & L &&
            (t.ynx(0),
            t.YNc(1, Z, 2, 2, "div", 1),
            t.TgZ(2, "div", 2),
            t.YNc(3, e, 1, 2, "h3", 3),
            t.YNc(4, ot, 2, 1, "ul", 4),
            t.qZA(),
            t.BQk()),
          2 & L)
        ) {
          const nt = t.oxw();
          t.xp6(1),
            t.Q6J("ngIf", !!nt.nzAvatar),
            t.xp6(2),
            t.Q6J("ngIf", !!nt.nzTitle),
            t.xp6(1),
            t.Q6J("ngIf", !!nt.nzParagraph);
        }
      }
      function q(L, st) {
        1 & L && (t.ynx(0), t.Hsn(1), t.BQk());
      }
      const mt = ["*"];
      let ut = (() => {
          var L;
          class st {
            constructor() {
              (this.nzActive = !1), (this.nzBlock = !1);
            }
          }
          return (
            ((L = st).ɵfac = function (J) {
              return new (J || L)();
            }),
            (L.ɵdir = t.lG2({
              type: L,
              selectors: [["nz-skeleton-element"]],
              hostAttrs: [1, "ant-skeleton", "ant-skeleton-element"],
              hostVars: 4,
              hostBindings: function (J, et) {
                2 & J &&
                  t.ekj("ant-skeleton-active", et.nzActive)(
                    "ant-skeleton-block",
                    et.nzBlock
                  );
              },
              inputs: {
                nzActive: "nzActive",
                nzType: "nzType",
                nzBlock: "nzBlock",
              },
            })),
            (0, u.gn)([(0, n.yF)()], st.prototype, "nzBlock", void 0),
            st
          );
        })(),
        k = (() => {
          var L;
          class st {
            constructor() {
              (this.nzShape = "circle"),
                (this.nzSize = "default"),
                (this.styleMap = {});
            }
            ngOnChanges(J) {
              if (J.nzSize && "number" == typeof this.nzSize) {
                const et = `${this.nzSize}px`;
                this.styleMap = { width: et, height: et, "line-height": et };
              } else this.styleMap = {};
            }
          }
          return (
            ((L = st).ɵfac = function (J) {
              return new (J || L)();
            }),
            (L.ɵcmp = t.Xpm({
              type: L,
              selectors: [["nz-skeleton-element", "nzType", "avatar"]],
              inputs: { nzShape: "nzShape", nzSize: "nzSize" },
              features: [t.TTD],
              attrs: w,
              decls: 1,
              vars: 9,
              consts: [[1, "ant-skeleton-avatar", 3, "ngStyle"]],
              template: function (J, et) {
                1 & J && t._UZ(0, "span", 0),
                  2 & J &&
                    (t.ekj(
                      "ant-skeleton-avatar-square",
                      "square" === et.nzShape
                    )("ant-skeleton-avatar-circle", "circle" === et.nzShape)(
                      "ant-skeleton-avatar-lg",
                      "large" === et.nzSize
                    )("ant-skeleton-avatar-sm", "small" === et.nzSize),
                    t.Q6J("ngStyle", et.styleMap));
              },
              dependencies: [l.PC],
              encapsulation: 2,
              changeDetection: 0,
            })),
            st
          );
        })(),
        $ = (() => {
          var L;
          class st {
            constructor() {
              this.nzSize = "default";
            }
          }
          return (
            ((L = st).ɵfac = function (J) {
              return new (J || L)();
            }),
            (L.ɵcmp = t.Xpm({
              type: L,
              selectors: [["nz-skeleton-element", "nzType", "input"]],
              inputs: { nzSize: "nzSize" },
              attrs: Q,
              decls: 1,
              vars: 4,
              consts: [[1, "ant-skeleton-input"]],
              template: function (J, et) {
                1 & J && t._UZ(0, "span", 0),
                  2 & J &&
                    t.ekj("ant-skeleton-input-lg", "large" === et.nzSize)(
                      "ant-skeleton-input-sm",
                      "small" === et.nzSize
                    );
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            st
          );
        })(),
        N = (() => {
          var L;
          class st {
            constructor(J) {
              (this.cdr = J),
                (this.nzActive = !1),
                (this.nzLoading = !0),
                (this.nzRound = !1),
                (this.nzTitle = !0),
                (this.nzAvatar = !1),
                (this.nzParagraph = !0),
                (this.rowsList = []),
                (this.widthList = []);
            }
            toCSSUnit(J = "") {
              return (0, n.WX)(J);
            }
            getTitleProps() {
              const J = !!this.nzAvatar,
                et = !!this.nzParagraph;
              let W = "";
              return (
                !J && et ? (W = "38%") : J && et && (W = "50%"),
                { width: W, ...this.getProps(this.nzTitle) }
              );
            }
            getAvatarProps() {
              return {
                shape: this.nzTitle && !this.nzParagraph ? "square" : "circle",
                size: "large",
                ...this.getProps(this.nzAvatar),
              };
            }
            getParagraphProps() {
              const J = !!this.nzAvatar,
                et = !!this.nzTitle,
                W = {};
              return (
                (!J || !et) && (W.width = "61%"),
                (W.rows = !J && et ? 3 : 2),
                { ...W, ...this.getProps(this.nzParagraph) }
              );
            }
            getProps(J) {
              return J && "object" == typeof J ? J : {};
            }
            getWidthList() {
              const { width: J, rows: et } = this.paragraph;
              let W = [];
              return (
                J && Array.isArray(J)
                  ? (W = J)
                  : J && !Array.isArray(J) && ((W = []), (W[et - 1] = J)),
                W
              );
            }
            updateProps() {
              (this.title = this.getTitleProps()),
                (this.avatar = this.getAvatarProps()),
                (this.paragraph = this.getParagraphProps()),
                (this.rowsList = [...Array(this.paragraph.rows)]),
                (this.widthList = this.getWidthList()),
                this.cdr.markForCheck();
            }
            ngOnInit() {
              this.updateProps();
            }
            ngOnChanges(J) {
              (J.nzTitle || J.nzAvatar || J.nzParagraph) && this.updateProps();
            }
          }
          return (
            ((L = st).ɵfac = function (J) {
              return new (J || L)(t.Y36(t.sBO));
            }),
            (L.ɵcmp = t.Xpm({
              type: L,
              selectors: [["nz-skeleton"]],
              hostAttrs: [1, "ant-skeleton"],
              hostVars: 6,
              hostBindings: function (J, et) {
                2 & J &&
                  t.ekj("ant-skeleton-with-avatar", !!et.nzAvatar)(
                    "ant-skeleton-active",
                    et.nzActive
                  )("ant-skeleton-round", !!et.nzRound);
              },
              inputs: {
                nzActive: "nzActive",
                nzLoading: "nzLoading",
                nzRound: "nzRound",
                nzTitle: "nzTitle",
                nzAvatar: "nzAvatar",
                nzParagraph: "nzParagraph",
              },
              exportAs: ["nzSkeleton"],
              features: [t.TTD],
              ngContentSelectors: mt,
              decls: 2,
              vars: 2,
              consts: [
                [4, "ngIf"],
                ["class", "ant-skeleton-header", 4, "ngIf"],
                [1, "ant-skeleton-content"],
                ["class", "ant-skeleton-title", 3, "width", 4, "ngIf"],
                ["class", "ant-skeleton-paragraph", 4, "ngIf"],
                [1, "ant-skeleton-header"],
                ["nzType", "avatar", 3, "nzSize", "nzShape"],
                [1, "ant-skeleton-title"],
                [1, "ant-skeleton-paragraph"],
                [3, "width", 4, "ngFor", "ngForOf"],
              ],
              template: function (J, et) {
                1 & J &&
                  (t.F$t(),
                  t.YNc(0, lt, 5, 3, "ng-container", 0),
                  t.YNc(1, q, 2, 0, "ng-container", 0)),
                  2 & J &&
                    (t.Q6J("ngIf", et.nzLoading),
                    t.xp6(1),
                    t.Q6J("ngIf", !et.nzLoading));
              },
              dependencies: [l.sg, l.O5, ut, k],
              encapsulation: 2,
              changeDetection: 0,
            })),
            st
          );
        })(),
        tt = (() => {
          var L;
          class st {}
          return (
            ((L = st).ɵfac = function (J) {
              return new (J || L)();
            }),
            (L.ɵmod = t.oAB({ type: L })),
            (L.ɵinj = t.cJS({ imports: [P.vT, l.ez] })),
            st
          );
        })();
    },
    92574: (gt, rt, o) => {
      o.d(rt, { $1: () => lt, NU: () => ut, zf: () => H });
      var t = o(49388),
        n = o(96814),
        l = o(65879),
        u = o(97582),
        P = o(78645),
        r = o(59773),
        w = o(40874),
        Q = o(27754);
      function F(k, $) {}
      const Z = function (k) {
        return { $implicit: k };
      };
      function e(k, $) {
        if (
          (1 & k &&
            (l.TgZ(0, "span", 4), l.YNc(1, F, 0, 0, "ng-template", 5), l.qZA()),
          2 & k)
        ) {
          const Y = l.oxw(),
            N = Y.last,
            tt = Y.index,
            L = l.oxw();
          l.Udp(
            "margin-bottom",
            "vertical" === L.nzDirection ? (N ? null : L.spaceSize) : null,
            "px"
          )(
            "margin-right",
            "horizontal" === L.nzDirection ? (N ? null : L.spaceSize) : null,
            "px"
          ),
            l.xp6(1),
            l.Q6J("ngTemplateOutlet", L.nzSplit)(
              "ngTemplateOutletContext",
              l.VKq(6, Z, tt)
            );
        }
      }
      function X(k, $) {
        if (
          (1 & k &&
            (l.TgZ(0, "div", 1),
            l.GkF(1, 2),
            l.qZA(),
            l.YNc(2, e, 2, 8, "span", 3)),
          2 & k)
        ) {
          const Y = $.$implicit,
            N = $.last,
            tt = l.oxw();
          l.Udp(
            "margin-bottom",
            "vertical" === tt.nzDirection ? (N ? null : tt.spaceSize) : null,
            "px"
          )(
            "margin-right",
            "horizontal" === tt.nzDirection ? (N ? null : tt.spaceSize) : null,
            "px"
          ),
            l.xp6(1),
            l.Q6J("ngTemplateOutlet", Y),
            l.xp6(1),
            l.Q6J("ngIf", tt.nzSplit && !N);
        }
      }
      const ot = ["*"];
      let lt = (() => {
        var k;
        class $ {
          constructor() {}
        }
        return (
          ((k = $).ɵfac = function (N) {
            return new (N || k)();
          }),
          (k.ɵdir = l.lG2({ type: k, selectors: [["", "nzSpaceItem", ""]] })),
          $
        );
      })();
      const mt = { small: 8, middle: 16, large: 24 };
      let ut = (() => {
          var k;
          class $ {
            constructor(N, tt) {
              (this.nzConfigService = N),
                (this.cdr = tt),
                (this._nzModuleName = "space"),
                (this.nzDirection = "horizontal"),
                (this.nzSplit = null),
                (this.nzWrap = !1),
                (this.nzSize = "small"),
                (this.spaceSize = mt.small),
                (this.destroy$ = new P.x());
            }
            updateSpaceItems() {
              (this.spaceSize =
                ("string" == typeof this.nzSize
                  ? mt[this.nzSize]
                  : this.nzSize) / (this.nzSplit ? 2 : 1)),
                this.cdr.markForCheck();
            }
            ngOnChanges() {
              this.updateSpaceItems(),
                (this.mergedAlign =
                  void 0 === this.nzAlign && "horizontal" === this.nzDirection
                    ? "center"
                    : this.nzAlign);
            }
            ngOnDestroy() {
              this.destroy$.next(!0), this.destroy$.complete();
            }
            ngAfterContentInit() {
              this.updateSpaceItems(),
                this.items.changes
                  .pipe((0, r.R)(this.destroy$))
                  .subscribe(() => {
                    this.cdr.markForCheck();
                  });
            }
          }
          return (
            ((k = $).ɵfac = function (N) {
              return new (N || k)(l.Y36(w.jY), l.Y36(l.sBO));
            }),
            (k.ɵcmp = l.Xpm({
              type: k,
              selectors: [["nz-space"], ["", "nz-space", ""]],
              contentQueries: function (N, tt, L) {
                if ((1 & N && l.Suo(L, lt, 4, l.Rgc), 2 & N)) {
                  let st;
                  l.iGM((st = l.CRH())) && (tt.items = st);
                }
              },
              hostAttrs: [1, "ant-space"],
              hostVars: 14,
              hostBindings: function (N, tt) {
                2 & N &&
                  (l.Udp("flex-wrap", tt.nzWrap ? "wrap" : null),
                  l.ekj(
                    "ant-space-horizontal",
                    "horizontal" === tt.nzDirection
                  )("ant-space-vertical", "vertical" === tt.nzDirection)(
                    "ant-space-align-start",
                    "start" === tt.mergedAlign
                  )("ant-space-align-end", "end" === tt.mergedAlign)(
                    "ant-space-align-center",
                    "center" === tt.mergedAlign
                  )("ant-space-align-baseline", "baseline" === tt.mergedAlign));
              },
              inputs: {
                nzDirection: "nzDirection",
                nzAlign: "nzAlign",
                nzSplit: "nzSplit",
                nzWrap: "nzWrap",
                nzSize: "nzSize",
              },
              exportAs: ["NzSpace"],
              features: [l.TTD],
              ngContentSelectors: ot,
              decls: 2,
              vars: 1,
              consts: [
                ["ngFor", "", 3, "ngForOf"],
                [1, "ant-space-item"],
                [3, "ngTemplateOutlet"],
                [
                  "class",
                  "ant-space-split",
                  3,
                  "margin-bottom",
                  "margin-right",
                  4,
                  "ngIf",
                ],
                [1, "ant-space-split"],
                [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
              ],
              template: function (N, tt) {
                1 & N &&
                  (l.F$t(), l.Hsn(0), l.YNc(1, X, 3, 6, "ng-template", 0)),
                  2 & N && (l.xp6(1), l.Q6J("ngForOf", tt.items));
              },
              dependencies: [n.sg, n.O5, n.tP],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, u.gn)([(0, Q.yF)()], $.prototype, "nzWrap", void 0),
            (0, u.gn)([(0, w.oS)()], $.prototype, "nzSize", void 0),
            $
          );
        })(),
        H = (() => {
          var k;
          class $ {}
          return (
            ((k = $).ɵfac = function (N) {
              return new (N || k)();
            }),
            (k.ɵmod = l.oAB({ type: k })),
            (k.ɵinj = l.cJS({ imports: [t.vT, n.ez] })),
            $
          );
        })();
    },
    55695: (gt, rt, o) => {
      o.d(rt, { X: () => lt, j: () => ot });
      var t = o(97582),
        n = o(65879),
        l = o(78645),
        u = o(59773),
        P = o(13324),
        r = o(27754),
        w = o(49388),
        Q = o(96814),
        F = o(62595),
        Z = o(60095);
      function e(q, mt) {
        if (1 & q) {
          const ut = n.EpF();
          n.TgZ(0, "span", 1),
            n.NdJ("click", function (k) {
              n.CHM(ut);
              const $ = n.oxw();
              return n.KtG($.closeTag(k));
            }),
            n.qZA();
        }
      }
      const X = ["*"];
      let ot = (() => {
          var q;
          class mt {
            constructor(H, k, $, Y) {
              (this.cdr = H),
                (this.renderer = k),
                (this.elementRef = $),
                (this.directionality = Y),
                (this.isPresetColor = !1),
                (this.nzMode = "default"),
                (this.nzChecked = !1),
                (this.nzOnClose = new n.vpe()),
                (this.nzCheckedChange = new n.vpe()),
                (this.dir = "ltr"),
                (this.destroy$ = new l.x());
            }
            updateCheckedStatus() {
              "checkable" === this.nzMode &&
                ((this.nzChecked = !this.nzChecked),
                this.nzCheckedChange.emit(this.nzChecked));
            }
            closeTag(H) {
              this.nzOnClose.emit(H),
                H.defaultPrevented ||
                  this.renderer.removeChild(
                    this.renderer.parentNode(this.elementRef.nativeElement),
                    this.elementRef.nativeElement
                  );
            }
            clearPresetColor() {
              const H = this.elementRef.nativeElement,
                k = new RegExp(
                  `(ant-tag-(?:${[...P.uf, ...P.Bh].join("|")}))`,
                  "g"
                ),
                $ = H.classList.toString(),
                Y = [];
              let N = k.exec($);
              for (; null !== N; ) Y.push(N[1]), (N = k.exec($));
              H.classList.remove(...Y);
            }
            setPresetColor() {
              const H = this.elementRef.nativeElement;
              this.clearPresetColor(),
                (this.isPresetColor =
                  !!this.nzColor &&
                  ((0, P.o2)(this.nzColor) || (0, P.M8)(this.nzColor))),
                this.isPresetColor &&
                  H.classList.add(`ant-tag-${this.nzColor}`);
            }
            ngOnInit() {
              this.directionality.change
                ?.pipe((0, u.R)(this.destroy$))
                .subscribe((H) => {
                  (this.dir = H), this.cdr.detectChanges();
                }),
                (this.dir = this.directionality.value);
            }
            ngOnChanges(H) {
              const { nzColor: k } = H;
              k && this.setPresetColor();
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete();
            }
          }
          return (
            ((q = mt).ɵfac = function (H) {
              return new (H || q)(
                n.Y36(n.sBO),
                n.Y36(n.Qsj),
                n.Y36(n.SBq),
                n.Y36(w.Is, 8)
              );
            }),
            (q.ɵcmp = n.Xpm({
              type: q,
              selectors: [["nz-tag"]],
              hostAttrs: [1, "ant-tag"],
              hostVars: 10,
              hostBindings: function (H, k) {
                1 & H &&
                  n.NdJ("click", function () {
                    return k.updateCheckedStatus();
                  }),
                  2 & H &&
                    (n.Udp(
                      "background-color",
                      k.isPresetColor ? "" : k.nzColor
                    ),
                    n.ekj("ant-tag-has-color", k.nzColor && !k.isPresetColor)(
                      "ant-tag-checkable",
                      "checkable" === k.nzMode
                    )("ant-tag-checkable-checked", k.nzChecked)(
                      "ant-tag-rtl",
                      "rtl" === k.dir
                    ));
              },
              inputs: {
                nzMode: "nzMode",
                nzColor: "nzColor",
                nzChecked: "nzChecked",
              },
              outputs: {
                nzOnClose: "nzOnClose",
                nzCheckedChange: "nzCheckedChange",
              },
              exportAs: ["nzTag"],
              features: [n.TTD],
              ngContentSelectors: X,
              decls: 2,
              vars: 1,
              consts: [
                [
                  "nz-icon",
                  "",
                  "nzType",
                  "close",
                  "class",
                  "ant-tag-close-icon",
                  "tabindex",
                  "-1",
                  3,
                  "click",
                  4,
                  "ngIf",
                ],
                [
                  "nz-icon",
                  "",
                  "nzType",
                  "close",
                  "tabindex",
                  "-1",
                  1,
                  "ant-tag-close-icon",
                  3,
                  "click",
                ],
              ],
              template: function (H, k) {
                1 & H && (n.F$t(), n.Hsn(0), n.YNc(1, e, 1, 0, "span", 0)),
                  2 & H && (n.xp6(1), n.Q6J("ngIf", "closeable" === k.nzMode));
              },
              dependencies: [Q.O5, F.Ls],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, t.gn)([(0, r.yF)()], mt.prototype, "nzChecked", void 0),
            mt
          );
        })(),
        lt = (() => {
          var q;
          class mt {}
          return (
            ((q = mt).ɵfac = function (H) {
              return new (H || q)();
            }),
            (q.ɵmod = n.oAB({ type: q })),
            (q.ɵinj = n.cJS({ imports: [w.vT, Q.ez, Z.u5, F.PV] })),
            mt
          );
        })();
    },
  },
]);
