"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [269],
  {
    44269: (dn, k, c) => {
      c.r(k), c.d(k, { AdminCenterModule: () => Xe });
      var b = c(96814),
        U = c(35420),
        i = c(15861),
        m = c(69649),
        y = c(86408),
        A = c(27782),
        n = c(65879),
        Q = c(26857),
        L = c(69862);
      let f = (() => {
        var a;
        class r extends Q.P {
          constructor(e) {
            super(),
              (this.http = e),
              (this.root = `${this.API_BASE_URL}/admin-center`);
          }
          getOrganizationName() {
            return this._get(this.http, `${this.root}/organization`);
          }
          getOrganizationAdmins() {
            return this._get(this.http, `${this.root}/organization/admins`);
          }
          updateOrganizationName(e) {
            return this._put(this.http, `${this.root}/organization`, e);
          }
          updateOwnerContactNumber(e) {
            return this._put(
              this.http,
              `${this.root}/organization/owner/contact-number`,
              e
            );
          }
          getOrganizationUsers(e, t, s, _, C) {
            const x = encodeURIComponent(C || "");
            return this._get(
              this.http,
              `${this.root}/organization/users${(0, m.UK)({
                index: e,
                size: t,
                field: s,
                order: _,
                search: x,
              })}`
            );
          }
          getOrganizationTeams(e, t, s, _, C) {
            const x = encodeURIComponent(C || "");
            return this._get(
              this.http,
              `${this.root}/organization/teams${(0, m.UK)({
                index: e,
                size: t,
                field: s,
                order: _,
                search: x,
              })}`
            );
          }
          getOrganizationTeam(e) {
            return this._get(this.http, `${this.root}/organization/team/${e}`);
          }
          updateTeam(e, t) {
            return this._put(
              this.http,
              `${this.root}/organization/team/${e}`,
              t
            );
          }
          getBillingAccountInfo() {
            return this._get(this.http, `${this.root}/billing/info`);
          }
          upgradePlan(e) {
            return this._get(
              this.http,
              `${this.root}/billing/upgrade-plan${(0, m.UK)({ plan: e })}`
            );
          }
          changePlan(e) {
            return this._get(
              this.http,
              `${this.root}/billing/change-plan${(0, m.UK)({ plan: e })}`
            );
          }
          getPlans() {
            return this._get(this.http, `${this.root}/billing/plans`);
          }
          getBillingConfiguration() {
            return this._get(this.http, `${this.root}/billing/configuration`);
          }
          updateBillingConfiguration(e) {
            return this._put(
              this.http,
              `${this.root}/billing/configuration`,
              e
            );
          }
          getTransactions() {
            return this._get(this.http, `${this.root}/billing/transactions`);
          }
          getCharges() {
            return this._get(this.http, `${this.root}/billing/charges`);
          }
          purchaseStorage() {
            return this._get(
              this.http,
              `${this.root}/billing/purchase-storage`
            );
          }
          getStorageInfo() {
            return this._get(this.http, `${this.root}/billing/storage`);
          }
          getStoragePurchases() {
            return this._get(this.http, `${this.root}/billing/modifiers`);
          }
          cancelSubscription() {
            return this._get(this.http, `${this.root}/billing/cancel-plan`);
          }
          pauseSubscription() {
            return this._get(this.http, `${this.root}/billing/pause-plan`);
          }
          resumeSubscription() {
            return this._get(this.http, `${this.root}/billing/resume-plan`);
          }
          getBillingAccountStorage() {
            return this._get(this.http, `${this.root}/billing/account-storage`);
          }
          getCountries() {
            return this._get(this.http, `${this.root}/billing/countries`);
          }
          switchToFreePlan(e) {
            return this._get(
              this.http,
              `${this.root}/billing/switch-to-free-plan/${e}`
            );
          }
          redeemCode(e) {
            return this._post(this.http, `${this.root}/billing/redeem`, e);
          }
          deleteTeam(e) {
            return this._delete(
              this.http,
              `${this.root}/organization/team/${e}`
            );
          }
          removeTeamMember(e, t) {
            return this._put(
              this.http,
              `${this.root}/organization/team-member/${e}`,
              { teamId: t }
            );
          }
        }
        return (
          ((a = r).ɵfac = function (e) {
            return new (e || a)(n.LFG(L.eN));
          }),
          (a.ɵprov = n.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
          r
        );
      })();
      var T = c(26254),
        N = c(62595),
        M = c(82962),
        I = c(8083),
        z = c(13740),
        O = c(92574),
        P = c(20824),
        w = c(70855),
        D = c(24139),
        S = c(96109),
        p = c(60095);
      const nn = ["numberInput"];
      function R(a, r) {
        1 & a && n._UZ(0, "span", 16),
          2 & a && n.Q6J("nzTooltipTitle", "Email Address");
      }
      function $(a, r) {
        if ((1 & a && (n.TgZ(0, "span", 5), n._uU(1), n.qZA()), 2 & a)) {
          const o = n.oxw();
          n.xp6(1), n.Oqu(o.organizationDetails.email);
        }
      }
      function en(a, r) {
        1 & a && n._UZ(0, "span", 17),
          2 & a && n.Q6J("nzTooltipTitle", "Contact Number");
      }
      function tn(a, r) {
        if ((1 & a && (n.TgZ(0, "span", 23), n._uU(1), n.qZA()), 2 & a)) {
          const o = n.oxw(3);
          n.xp6(1), n.Oqu(o.organizationDetails.contact_number);
        }
      }
      function H(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "span", 24),
            n.NdJ("click", function () {
              n.CHM(o);
              const t = n.oxw(3);
              return n.KtG(t.focusNumberInput());
            }),
            n._uU(1, "Add Contact Number"),
            n.qZA();
        }
      }
      function E(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "div", 25)(1, "input", 26, 27),
            n.NdJ("ngModelChange", function (t) {
              n.CHM(o);
              const s = n.oxw(3);
              return n.KtG((s.organizationDetails.contact_number = t));
            })("input", function (t) {
              n.CHM(o);
              const s = n.oxw(3);
              return n.KtG(s.sanitizeContactNumber(t));
            })("blur", function () {
              n.CHM(o);
              const t = n.oxw(3);
              return n.KtG(t.updateOwnerContactNumber());
            })("keydown.enter", function () {
              n.CHM(o);
              const t = n.oxw(3);
              return n.KtG(t.updateOwnerContactNumber());
            }),
            n.qZA()();
        }
        if (2 & a) {
          const o = n.oxw(3);
          n.xp6(1), n.Q6J("ngModel", o.organizationDetails.contact_number);
        }
      }
      function V(a, r) {
        if (
          (1 & a &&
            (n.TgZ(0, "div", 19),
            n.YNc(1, tn, 2, 1, "span", 20),
            n.YNc(2, H, 2, 0, "span", 21),
            n.YNc(3, E, 3, 1, "div", 22),
            n.qZA()),
          2 & a)
        ) {
          const o = n.oxw(2);
          n.xp6(1),
            n.Q6J(
              "ngIf",
              o.organizationDetails.contact_number && !o.isNumberEditing
            ),
            n.xp6(1),
            n.Q6J(
              "ngIf",
              !o.organizationDetails.contact_number && !o.isNumberEditing
            ),
            n.xp6(1),
            n.Q6J("ngIf", o.isNumberEditing);
        }
      }
      function an(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "span", 30),
            n.NdJ("click", function () {
              n.CHM(o);
              const t = n.oxw(4);
              return n.KtG(t.focusNumberInput());
            }),
            n.qZA();
        }
      }
      function on(a, r) {
        if (
          (1 & a && (n.ynx(0), n.YNc(1, an, 1, 0, "span", 29), n.BQk()), 2 & a)
        ) {
          const o = n.oxw(3);
          n.xp6(1), n.Q6J("ngIf", !o.isNumberEditing);
        }
      }
      function rn(a, r) {
        if (
          (1 & a && (n.ynx(0), n.YNc(1, on, 2, 1, "ng-container", 28), n.BQk()),
          2 & a)
        ) {
          const o = n.oxw(2);
          n.xp6(1), n.Q6J("ngIf", o.organizationDetails.contact_number);
        }
      }
      function gn(a, r) {
        1 & a &&
          (n.TgZ(0, "span")(1, "nz-space", 6),
          n.YNc(2, V, 4, 3, "div", 18),
          n.YNc(3, rn, 2, 1, "ng-container", 12),
          n.qZA()());
      }
      function sn(a, r) {
        1 & a && (n.TgZ(0, "span", 34), n._uU(1, "(Owner)"), n.qZA());
      }
      function l(a, r) {
        if (
          (1 & a &&
            (n.TgZ(0, "tr")(1, "td", 31),
            n._uU(2),
            n.YNc(3, sn, 2, 0, "span", 32),
            n.qZA(),
            n.TgZ(4, "td", 33),
            n._uU(5),
            n.qZA()()),
          2 & a)
        ) {
          const o = r.$implicit;
          n.xp6(2),
            n.hij("", o.name, " "),
            n.xp6(1),
            n.Q6J("ngIf", o.is_owner),
            n.xp6(2),
            n.Oqu(o.email);
        }
      }
      const u = function () {
          return { rows: 3 };
        },
        g = function () {
          return { rows: 5 };
        };
      let d = (() => {
        var a;
        class r {
          constructor(e, t) {
            (this.api = e),
              (this.ngZone = t),
              (this.loadingName = !1),
              (this.loadingAdmins = !1),
              (this.isNumberEditing = !1),
              (this.organizationDetails = {}),
              (this.organizationAdmins = []),
              y.s.track(A.df);
          }
          ngOnInit() {
            this.getOrganizationName(), this.getOrganizationAdmins();
          }
          getOrganizationName() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                e.loadingName = !0;
                const t = yield e.api.getOrganizationName();
                t.done &&
                  ((e.loadingName = !1), (e.organizationDetails = t.body));
              } catch (t) {
                (e.loadingName = !1), (0, m.tu)(t);
              }
            })();
          }
          getOrganizationAdmins() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                e.loadingAdmins = !0;
                const t = yield e.api.getOrganizationAdmins();
                t.done &&
                  ((e.loadingAdmins = !1), (e.organizationAdmins = t.body));
              } catch (t) {
                (e.loadingAdmins = !1), (0, m.tu)(t);
              }
            })();
          }
          updateOrganizationName() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                (e.loadingName = !0),
                  (yield e.api.updateOrganizationName({
                    name: e.organizationDetails.name,
                  })).done && (e.loadingName = !1);
              } catch (t) {
                (e.loadingName = !1), (0, m.tu)(t);
              }
              e.getOrganizationName();
            })();
          }
          updateOwnerContactNumber() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                (e.loadingName = !0),
                  (e.isNumberEditing = !1),
                  (yield e.api.updateOwnerContactNumber({
                    contact_number: e.organizationDetails.contact_number || "",
                  })).done && ((e.loadingName = !1), e.getOrganizationName());
              } catch (t) {
                (e.loadingName = !1), (0, m.tu)(t);
              }
            })();
          }
          focusNumberInput() {
            (this.isNumberEditing = !0),
              this.ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                  this.numberInput?.nativeElement.focus(),
                    this.numberInput?.nativeElement.select();
                }, 100);
              });
          }
          sanitizeContactNumber(e) {
            const s = e.target.value.replace(/[^0-9()+ -]/g, "");
            this.organizationDetails.contact_number = s;
          }
        }
        return (
          ((a = r).ɵfac = function (e) {
            return new (e || a)(n.Y36(f), n.Y36(n.R0b));
          }),
          (a.ɵcmp = n.Xpm({
            type: a,
            selectors: [["worklenz-overview"]],
            viewQuery: function (e, t) {
              if ((1 & e && n.Gf(nn, 5), 2 & e)) {
                let s;
                n.iGM((s = n.CRH())) && (t.numberInput = s.first);
              }
            },
            decls: 35,
            vars: 14,
            consts: [
              [1, "px-0", 3, "nzGhost"],
              [1, "card-content"],
              [
                "nz-typography",
                "",
                "nzEditable",
                "",
                3,
                "nzContent",
                "nzContentChange",
              ],
              [1, "mt-4"],
              [3, "nzLoading", "nzActive", "nzParagraph"],
              ["nz-typography", ""],
              [1, "align-items-center"],
              [
                "nz-icon",
                "",
                "nzType",
                "mail",
                "nzTheme",
                "outline",
                "nz-tooltip",
                "",
                3,
                "nzTooltipTitle",
                4,
                "nzSpaceItem",
              ],
              ["nz-typography", "", 4, "nzSpaceItem"],
              [1, "mt-2"],
              [1, "align-items-center", 2, "margin-left", "-4px"],
              [
                "nz-icon",
                "",
                "nzType",
                "phone",
                "nzTheme",
                "outline",
                "nz-tooltip",
                "",
                3,
                "nzTooltipTitle",
                4,
                "nzSpaceItem",
              ],
              [4, "nzSpaceItem"],
              [3, "nzNoResult", "nzData", "nzPaginationType"],
              ["adminsTable", ""],
              [4, "ngFor", "ngForOf"],
              [
                "nz-icon",
                "",
                "nzType",
                "mail",
                "nzTheme",
                "outline",
                "nz-tooltip",
                "",
                3,
                "nzTooltipTitle",
              ],
              [
                "nz-icon",
                "",
                "nzType",
                "phone",
                "nzTheme",
                "outline",
                "nz-tooltip",
                "",
                3,
                "nzTooltipTitle",
              ],
              [
                "class",
                "position-relative",
                "style",
                "min-height: 32px",
                4,
                "nzSpaceItem",
              ],
              [1, "position-relative", 2, "min-height", "32px"],
              ["nz-typography", "", "style", "line-height: 32px", 4, "ngIf"],
              ["nz-typography", "", "class", "text-btn", 3, "click", 4, "ngIf"],
              ["class", "number-input", 4, "ngIf"],
              ["nz-typography", "", 2, "line-height", "32px"],
              ["nz-typography", "", 1, "text-btn", 3, "click"],
              [1, "number-input"],
              [
                "nz-input",
                "",
                "type",
                "tel",
                "placeholder",
                "Add Contact Number",
                "maxlength",
                "20",
                3,
                "ngModel",
                "ngModelChange",
                "input",
                "blur",
                "keydown.enter",
              ],
              ["numberInput", ""],
              [4, "ngIf"],
              [
                "nz-icon",
                "",
                "nzType",
                "edit",
                "nzTheme",
                "outline",
                "class",
                "edit-btn",
                3,
                "click",
                4,
                "ngIf",
              ],
              [
                "nz-icon",
                "",
                "nzType",
                "edit",
                "nzTheme",
                "outline",
                1,
                "edit-btn",
                3,
                "click",
              ],
              [1, "left-td"],
              ["nz-typography", "", "nzType", "secondary", 4, "ngIf"],
              [1, "b-65"],
              ["nz-typography", "", "nzType", "secondary"],
            ],
            template: function (e, t) {
              if (
                (1 & e &&
                  (n.TgZ(0, "nz-page-header", 0)(1, "nz-page-header-title"),
                  n._uU(2, "Overview"),
                  n.qZA()(),
                  n.TgZ(3, "nz-card")(4, "h4"),
                  n._uU(5, "Organization Name"),
                  n.qZA(),
                  n.TgZ(6, "div", 1)(7, "p", 2),
                  n.NdJ("nzContentChange", function (_) {
                    return (t.organizationDetails.name = _);
                  })("nzContentChange", function () {
                    return t.updateOrganizationName();
                  }),
                  n.qZA()()(),
                  n._UZ(8, "div", 3),
                  n.TgZ(9, "nz-card")(10, "h4"),
                  n._uU(11, "Organization Owner"),
                  n.qZA(),
                  n.TgZ(12, "div", 1)(13, "nz-skeleton", 4)(14, "p", 5),
                  n._uU(15),
                  n.qZA(),
                  n.TgZ(16, "div")(17, "nz-space", 6),
                  n.YNc(18, R, 1, 1, "span", 7),
                  n.YNc(19, $, 2, 1, "span", 8),
                  n.qZA()(),
                  n.TgZ(20, "div", 9)(21, "nz-space", 10),
                  n.YNc(22, en, 1, 1, "span", 11),
                  n._uU(23, "\xa0 "),
                  n.YNc(24, gn, 4, 0, "span", 12),
                  n.qZA()()()()(),
                  n._UZ(25, "div", 3),
                  n.TgZ(26, "nz-card")(27, "h4"),
                  n._uU(28, "Organization Admins"),
                  n.qZA(),
                  n.TgZ(29, "div", 1)(30, "nz-skeleton", 4)(
                    31,
                    "nz-table",
                    13,
                    14
                  )(33, "tbody"),
                  n.YNc(34, l, 6, 3, "tr", 15),
                  n.qZA()()()()()),
                2 & e)
              ) {
                const s = n.MAs(32);
                n.Q6J("nzGhost", !1),
                  n.xp6(7),
                  n.Q6J("nzContent", t.organizationDetails.name),
                  n.xp6(6),
                  n.Q6J("nzLoading", t.loadingName)("nzActive", !0)(
                    "nzParagraph",
                    n.DdM(12, u)
                  ),
                  n.xp6(2),
                  n.Oqu(t.organizationDetails.owner_name),
                  n.xp6(15),
                  n.Q6J("nzLoading", t.loadingAdmins)("nzActive", !0)(
                    "nzParagraph",
                    n.DdM(13, g)
                  ),
                  n.xp6(1),
                  n.Q6J("nzData", t.organizationAdmins)(
                    "nzPaginationType",
                    "small"
                  ),
                  n.xp6(3),
                  n.Q6J("ngForOf", s.data);
              }
            },
            dependencies: [
              b.sg,
              b.O5,
              T.$O,
              T.u9,
              N.Ls,
              M.bd,
              I.ZU,
              z.N8,
              z.Uo,
              z.p0,
              z.$Z,
              O.NU,
              O.$1,
              P.Zp,
              w.w,
              D.ng,
              S.SY,
              p.Fj,
              p.JJ,
              p.nD,
              p.On,
            ],
            styles: [
              ".card-content[_ngcontent-%COMP%]{padding-top:8px}h4[_ngcontent-%COMP%]{font-size:16px}p[_ngcontent-%COMP%]{margin-bottom:8px}.b-65[_ngcontent-%COMP%]{color:#000000a6}.left-td[_ngcontent-%COMP%]{width:250px}.number-input[_ngcontent-%COMP%]{position:absolute;left:0;top:0;min-width:200px;width:100%}.edit-btn[_ngcontent-%COMP%]{cursor:pointer;color:#1890ff}.text-btn[_ngcontent-%COMP%]{line-height:32px;cursor:pointer;color:#188fff}",
            ],
          })),
          r
        );
      })();
      var h = c(21406),
        v = c(3599),
        Z = c(42840),
        J = c(41958),
        F = c(33640),
        ln = c(96928),
        _n = c(2919);
      function bn(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "button", 10),
            n.NdJ("click", function () {
              n.CHM(o);
              const t = n.oxw();
              return n.KtG(t.getUsers());
            }),
            n._UZ(1, "span", 11),
            n.qZA();
        }
      }
      function vn(a, r) {
        1 & a && n._UZ(0, "span", 16);
      }
      function xn(a, r) {
        if (
          (1 & a &&
            (n.TgZ(0, "form", 12)(1, "nz-input-group", 13),
            n._UZ(2, "input", 14),
            n.qZA(),
            n.YNc(3, vn, 1, 0, "ng-template", null, 15, n.W1O),
            n.qZA()),
          2 & a)
        ) {
          const o = n.MAs(4),
            e = n.oxw();
          n.Q6J("formGroup", e.searchForm)("nzLayout", "vertical"),
            n.xp6(1),
            n.Q6J("nzSuffix", o),
            n.xp6(1),
            n.Q6J("formControlName", "search");
        }
      }
      function Cn(a, r) {
        if (
          (1 & a &&
            (n.TgZ(0, "tr", 17)(1, "td", 18),
            n._UZ(2, "nz-avatar", 19),
            n.ALo(3, "firstCharUpper"),
            n.TgZ(4, "nz-badge"),
            n._uU(5),
            n.TgZ(6, "span", 20),
            n._uU(7),
            n.qZA()()(),
            n.TgZ(8, "td", 18),
            n._uU(9),
            n.qZA(),
            n.TgZ(10, "td", 18),
            n._uU(11),
            n.ALo(12, "date"),
            n.qZA()()),
          2 & a)
        ) {
          const o = r.$implicit,
            e = n.oxw();
          n.xp6(2),
            n.Udp(
              "background-color",
              o.avatar_url ? "#ececec" : e.getColor(o.name)
            ),
            n.s9C("nzText", n.lcZ(3, 10, o.name)),
            n.Q6J("nzSize", 28)("nzSrc", o.avatar_url),
            n.xp6(3),
            n.hij(" ", o.name, " "),
            n.xp6(1),
            n.Q6J("nzType", "secondary"),
            n.xp6(1),
            n.Oqu(o.is_admin ? "(Admin)" : o.is_owner ? "(Owner)" : ""),
            n.xp6(2),
            n.hij(" ", o.email, " "),
            n.xp6(2),
            n.hij(" ", n.xi3(12, 12, o.last_logged, "medium") || "-", " ");
        }
      }
      function Zn(a, r) {
        1 & a &&
          (n.TgZ(0, "div", 21)(1, "div", 22),
          n._UZ(2, "img", 23),
          n.qZA(),
          n.TgZ(3, "span", 24),
          n._uU(4, "No users found in the organization."),
          n.qZA()());
      }
      const yn = function () {
        return [];
      };
      let An = (() => {
        var a;
        class r {
          constructor(e, t) {
            (this.api = e),
              (this.fb = t),
              (this.visible = !1),
              (this.visibleNewMember = !1),
              (this.users = []),
              (this.loading = !1),
              (this.total = 0),
              (this.pageSize = h.L8),
              (this.pageIndex = 1),
              (this.paginationSizes = [5, 10, 15, 20, 50, 100]),
              (this.sortField = null),
              (this.sortOrder = null),
              (this.form = this.fb.group({ name: [null, [p.kI.required]] })),
              (this.searchForm = this.fb.group({ search: [] })),
              this.searchForm.valueChanges.subscribe(() => this.getUsers()),
              y.s.track(A.Oh);
          }
          getColor(e) {
            return h.Lj[e?.charAt(0).toUpperCase() || "A"];
          }
          onQueryParamsChange(e) {
            var t = this;
            return (0, i.Z)(function* () {
              const { pageSize: s, pageIndex: _, sort: C } = e;
              (t.pageIndex = _), (t.pageSize = s);
              const x = C.find((G) => null !== G.value);
              (t.sortField = (x && x.key) || null),
                (t.sortOrder = (x && x.value) || null),
                yield t.getUsers();
            })();
          }
          getUsers() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                e.loading = !0;
                const t = yield e.api.getOrganizationUsers(
                  e.pageIndex,
                  e.pageSize,
                  e.sortField,
                  e.sortOrder,
                  e.searchForm.value.search
                );
                t.done &&
                  ((e.total = t.body.total || 0),
                  (e.users = t.body.data || []),
                  (e.loading = !1));
              } catch (t) {
                (e.loading = !1), (0, m.tu)(t);
              }
            })();
          }
          open() {}
          close() {
            this.visible = !1;
          }
          openNewmember() {
            this.visibleNewMember = !0;
          }
          closeNewmember() {
            this.visibleNewMember = !1;
          }
        }
        return (
          ((a = r).ɵfac = function (e) {
            return new (e || a)(n.Y36(f), n.Y36(p.qu));
          }),
          (a.ɵcmp = n.Xpm({
            type: a,
            selectors: [["worklenz-users"]],
            decls: 26,
            vars: 14,
            consts: [
              [1, "px-0", 3, "nzGhost"],
              [1, "site-page-header", "pt-0", "ps-0"],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzShape",
                "circle",
                "nzTooltipTitle",
                "Refresh users",
                "nzType",
                "default",
                3,
                "click",
                4,
                "nzSpaceItem",
              ],
              ["nz-form", "", 3, "formGroup", "nzLayout", 4, "nzSpaceItem"],
              [3, "nzActive", "nzLoading"],
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
                "nzNoResult",
                "nzQueryParams",
              ],
              ["usersTable", ""],
              ["scope", "col"],
              ["class", "actions-row", 4, "ngFor", "ngForOf"],
              ["noDataTemplate", ""],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzShape",
                "circle",
                "nzTooltipTitle",
                "Refresh users",
                "nzType",
                "default",
                3,
                "click",
              ],
              ["nz-icon", "", "nzTheme", "outline", "nzType", "sync"],
              ["nz-form", "", 3, "formGroup", "nzLayout"],
              [3, "nzSuffix"],
              [
                "nz-input",
                "",
                "placeholder",
                "Search by name",
                "type",
                "text",
                3,
                "formControlName",
              ],
              ["suffixIconSearch", ""],
              ["nz-icon", "", "nzType", "search"],
              [1, "actions-row"],
              [1, "cursor-pointer"],
              [1, "me-2", 3, "nzSize", "nzText", "nzSrc"],
              ["nz-typography", "", 3, "nzType"],
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
            ],
            template: function (e, t) {
              if (
                (1 & e &&
                  (n.TgZ(0, "nz-page-header", 0)(1, "nz-page-header-title"),
                  n._uU(2, "Users"),
                  n.qZA()(),
                  n.TgZ(3, "nz-page-header", 1)(4, "nz-page-header-subtitle"),
                  n._uU(5),
                  n.qZA(),
                  n.TgZ(6, "nz-page-header-extra")(7, "nz-space"),
                  n.YNc(8, bn, 2, 0, "button", 2),
                  n.YNc(9, xn, 5, 4, "form", 3),
                  n.qZA()()(),
                  n.TgZ(10, "nz-card")(11, "nz-skeleton", 4)(
                    12,
                    "nz-table",
                    5,
                    6
                  ),
                  n.NdJ("nzQueryParams", function (_) {
                    return t.onQueryParamsChange(_);
                  }),
                  n.TgZ(14, "thead")(15, "tr")(16, "th", 7),
                  n._uU(17, "User"),
                  n.qZA(),
                  n.TgZ(18, "th", 7),
                  n._uU(19, "Email"),
                  n.qZA(),
                  n.TgZ(20, "th", 7),
                  n._uU(21, "Last Activity"),
                  n.qZA()()(),
                  n.TgZ(22, "tbody"),
                  n.YNc(23, Cn, 13, 15, "tr", 8),
                  n.qZA()()()(),
                  n.YNc(24, Zn, 5, 0, "ng-template", null, 9, n.W1O)),
                2 & e)
              ) {
                const s = n.MAs(13),
                  _ = n.MAs(25);
                n.Q6J("nzGhost", !1),
                  n.xp6(5),
                  n.hij("", t.total, " users"),
                  n.xp6(6),
                  n.Q6J("nzActive", !1)("nzLoading", !1),
                  n.xp6(1),
                  n.Q6J("nzData", t.users || n.DdM(13, yn))(
                    "nzFrontPagination",
                    !1
                  )("nzLoading", t.loading)("nzPageIndex", t.pageIndex)(
                    "nzPageSizeOptions",
                    t.paginationSizes
                  )("nzPageSize", t.pageSize)("nzTotal", t.total)(
                    "nzNoResult",
                    _
                  ),
                  n.xp6(11),
                  n.Q6J("ngForOf", s.data);
              }
            },
            dependencies: [
              b.sg,
              T.$O,
              T.u9,
              T.yG,
              T.Jp,
              N.Ls,
              M.bd,
              I.ZU,
              z.N8,
              z.Uo,
              z._C,
              z.Om,
              z.p0,
              z.$Z,
              O.NU,
              O.$1,
              v.Lr,
              P.Zp,
              P.gB,
              P.ke,
              Z.ix,
              w.w,
              J.dQ,
              D.ng,
              F.x7,
              ln.Dz,
              S.SY,
              p._Y,
              p.Fj,
              p.JJ,
              p.JL,
              p.sg,
              p.u,
              b.uU,
              _n.I,
            ],
            styles: [
              ".you-text[_ngcontent-%COMP%]{font-size:12px;color:#00000073}.admin-text[_ngcontent-%COMP%]{font-size:12px;background-color:#faad141a;font-weight:500;padding:0 4px;border-radius:12px;color:#faad14}.ant-dropdown[_ngcontent-%COMP%]{position:relative;margin:0;padding:4px 0;text-align:left;list-style-type:none;background-color:#fff;background-clip:padding-box;border-radius:2px;outline:none;box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d}.ant-form-item-label[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{float:left!important}.role-selector[_ngcontent-%COMP%]{margin-top:24px}nz-page-header-subtitle[_ngcontent-%COMP%]{color:#000000d9;font-weight:500;font-size:16px}.no-data-img-holder[_ngcontent-%COMP%]{width:100px;margin-top:42px}",
            ],
          })),
          r
        );
      })();
      var Pn = c(45538),
        Un = c(83916),
        On = c(90586),
        wn = c(95542),
        Nn = c(93302),
        cn = c(32333),
        q = c(10095),
        B = c(43389),
        Y = c(9691),
        mn = c(99183),
        zn = c(19035);
      function Mn(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "button", 18),
            n.NdJ("click", function () {
              n.CHM(o);
              const t = n.oxw();
              return n.KtG(t.getTeams());
            }),
            n._UZ(1, "span", 19),
            n.qZA();
        }
      }
      function In(a, r) {
        1 & a && n._UZ(0, "span", 24);
      }
      function Dn(a, r) {
        if (
          (1 & a &&
            (n.TgZ(0, "form", 20)(1, "nz-input-group", 21),
            n._UZ(2, "input", 22),
            n.qZA(),
            n.YNc(3, In, 1, 0, "ng-template", null, 23, n.W1O),
            n.qZA()),
          2 & a)
        ) {
          const o = n.MAs(4),
            e = n.oxw();
          n.Q6J("nzLayout", "vertical")("formGroup", e.searchForm),
            n.xp6(1),
            n.Q6J("nzSuffix", o),
            n.xp6(1),
            n.Q6J("formControlName", "search");
        }
      }
      function Sn(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "span")(1, "button", 25),
            n.NdJ("click", function () {
              n.CHM(o);
              const t = n.oxw();
              return n.KtG(t.openNewTeam());
            }),
            n._uU(2, "Add Team"),
            n.qZA()();
        }
      }
      function Jn(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "button", 34),
            n.NdJ("click", function () {
              n.CHM(o);
              const t = n.oxw(2);
              return n.KtG(t.openTeamDrawer(t.currentTeam));
            }),
            n._UZ(1, "span", 35),
            n.qZA();
        }
        2 & a &&
          n.Q6J("nzTooltipPlacement", "top")("nzTooltipTitle", "Settings")(
            "nzType",
            "default"
          );
      }
      function qn(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "button", 36),
            n.NdJ("nzOnConfirm", function () {
              n.CHM(o);
              const t = n.oxw(2);
              return n.KtG(t.deleteTeam(t.currentTeam.id));
            }),
            n._UZ(1, "span", 37),
            n.qZA();
        }
        2 & a &&
          n.Q6J("nzOkText", "Yes")("nzPopconfirmTitle", "Are you sure?")(
            "nzSize",
            "small"
          )("nzTooltipPlacement", "top")("nzTooltipTitle", "Delete")(
            "nzType",
            "default"
          );
      }
      function Qn(a, r) {
        if (
          (1 & a &&
            (n.TgZ(0, "tr", 26)(1, "td", 27),
            n._UZ(2, "nz-badge", 28),
            n.qZA(),
            n.TgZ(3, "td", 29),
            n._uU(4),
            n.qZA(),
            n.TgZ(5, "td", 27),
            n._UZ(6, "worklenz-avatars", 30),
            n.qZA(),
            n.TgZ(7, "td", 27)(8, "div", 31)(9, "nz-space"),
            n.YNc(10, Jn, 2, 3, "button", 32),
            n.YNc(11, qn, 2, 6, "button", 33),
            n.qZA()()()()),
          2 & a)
        ) {
          const o = n.oxw();
          n.xp6(2),
            n.Q6J("nzText", o.currentTeam.name),
            n.xp6(2),
            n.hij(" ", o.currentTeam.members_count, " "),
            n.xp6(2),
            n.Q6J("names", o.currentTeam.names);
        }
      }
      function Fn(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "button", 34),
            n.NdJ("click", function () {
              n.CHM(o);
              const t = n.oxw().$implicit,
                s = n.oxw();
              return n.KtG(s.openTeamDrawer(t));
            }),
            n._UZ(1, "span", 35),
            n.qZA();
        }
        2 & a &&
          n.Q6J("nzTooltipPlacement", "top")("nzTooltipTitle", "Settings")(
            "nzType",
            "default"
          );
      }
      function kn(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "button", 36),
            n.NdJ("nzOnConfirm", function () {
              n.CHM(o);
              const t = n.oxw().$implicit,
                s = n.oxw();
              return n.KtG(s.deleteTeam(t.id));
            }),
            n._UZ(1, "span", 37),
            n.qZA();
        }
        2 & a &&
          n.Q6J("nzOkText", "Yes")("nzPopconfirmTitle", "Are you sure?")(
            "nzSize",
            "small"
          )("nzTooltipPlacement", "top")("nzTooltipTitle", "Delete")(
            "nzType",
            "default"
          );
      }
      function Ln(a, r) {
        if (
          (1 & a &&
            (n.TgZ(0, "tr", 26)(1, "td", 27),
            n._uU(2),
            n.qZA(),
            n.TgZ(3, "td", 29),
            n._uU(4),
            n.qZA(),
            n.TgZ(5, "td", 27),
            n._UZ(6, "worklenz-avatars", 30),
            n.qZA(),
            n.TgZ(7, "td", 27)(8, "div", 31)(9, "nz-space"),
            n.YNc(10, Fn, 2, 3, "button", 32),
            n.YNc(11, kn, 2, 6, "button", 33),
            n.qZA()()()()),
          2 & a)
        ) {
          const o = r.$implicit;
          n.xp6(2),
            n.hij(" ", o.name, " "),
            n.xp6(2),
            n.hij(" ", o.members_count, " "),
            n.xp6(2),
            n.Q6J("names", o.names);
        }
      }
      function En(a, r) {
        1 & a &&
          (n.TgZ(0, "div", 38)(1, "div", 39),
          n._UZ(2, "img", 40),
          n.qZA(),
          n.TgZ(3, "span", 41),
          n._uU(4, "No teams found in the organization."),
          n.qZA()());
      }
      function Bn(a, r) {}
      function Yn(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "button", 36),
            n.NdJ("nzOnConfirm", function () {
              n.CHM(o);
              const t = n.oxw().$implicit,
                s = n.oxw(2);
              return n.KtG(s.deleteTeamMember(t.value.id));
            }),
            n._UZ(1, "span", 37),
            n.qZA();
        }
        2 & a &&
          n.Q6J("nzOkText", "Yes")("nzPopconfirmTitle", "Are you sure?")(
            "nzSize",
            "small"
          )("nzTooltipPlacement", "top")("nzTooltipTitle", "Delete")(
            "nzType",
            "default"
          );
      }
      function Gn(a, r) {
        if (
          (1 & a &&
            (n.TgZ(0, "tr", 50)(1, "td"),
            n._UZ(2, "nz-avatar", 51),
            n.ALo(3, "firstCharUpper"),
            n.TgZ(4, "nz-badge"),
            n._uU(5),
            n.qZA()(),
            n.TgZ(6, "td")(7, "nz-select", 52),
            n._UZ(8, "nz-option", 53)(9, "nz-option", 54)(10, "nz-option", 55),
            n.qZA()(),
            n.TgZ(11, "td"),
            n.YNc(12, Yn, 2, 6, "button", 56),
            n.qZA()()),
          2 & a)
        ) {
          const o = r.$implicit,
            e = r.index,
            t = n.oxw(2);
          n.Q6J("formGroupName", e),
            n.xp6(2),
            n.Udp(
              "background-color",
              o.value.avatar_url ? "#ececec" : t.getColor("name")
            ),
            n.Q6J("nzSize", 28)("nzText", n.lcZ(3, 12, o.value.name))(
              "nzSrc",
              o.value.avatar_url
            ),
            n.xp6(3),
            n.Oqu(o.value.name),
            n.xp6(2),
            n.Q6J("formControlName", "role_name")(
              "nzDisabled",
              "Owner" === o.value.role_name
            ),
            n.uIk("id", "member_" + e),
            n.xp6(3),
            n.Q6J("nzDisabled", "Owner" !== o.value.role_name),
            n.xp6(2),
            n.Q6J("ngIf", "Owner" !== o.value.role_name);
        }
      }
      function Rn(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.ynx(0),
            n.TgZ(1, "form", 42),
            n.NdJ("ngSubmit", function () {
              n.CHM(o);
              const t = n.oxw();
              return n.KtG(t.submit());
            }),
            n.TgZ(2, "nz-form-item")(3, "nz-form-label", 43),
            n._uU(4, " Team Name "),
            n.qZA(),
            n._UZ(5, "input", 44),
            n.qZA(),
            n.TgZ(6, "nz-form-item", 45)(7, "nz-form-label", 43),
            n._uU(8),
            n.qZA(),
            n.TgZ(9, "nz-table", 46)(10, "thead")(11, "tr")(12, "th"),
            n._uU(13, "User"),
            n.qZA(),
            n.TgZ(14, "th", 47),
            n._uU(15, "Role"),
            n.qZA(),
            n._UZ(16, "th"),
            n.qZA()(),
            n.TgZ(17, "tbody"),
            n.YNc(18, Gn, 13, 14, "tr", 48),
            n.qZA()()(),
            n.TgZ(19, "button", 49),
            n._uU(20, "Save"),
            n.qZA()(),
            n.BQk();
        }
        if (2 & a) {
          const o = n.oxw(),
            e = n.MAs(36);
          n.xp6(1),
            n.Q6J("formGroup", o.editTeamForm)("nzLayout", "vertical"),
            n.xp6(2),
            n.Q6J("nzSpan", null),
            n.xp6(2),
            n.Q6J("formControlName", "name"),
            n.xp6(2),
            n.Q6J("nzSpan", null),
            n.xp6(1),
            n.hij(" Users (", o.teamMembers.controls.length, ") "),
            n.xp6(1),
            n.Q6J("nzData", o.teamMembers.controls)("nzFrontPagination", !1)(
              "formArrayName",
              "teamMembers"
            )("nzNoResult", e),
            n.xp6(9),
            n.Q6J("ngForOf", o.teamMembers.controls);
        }
      }
      function $n(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.ynx(0),
            n.TgZ(1, "form", 57),
            n.NdJ("submit", function () {
              n.CHM(o);
              const t = n.oxw();
              return n.KtG(t.createTeam());
            }),
            n.TgZ(2, "nz-form-item", 45)(3, "nz-form-label", 58),
            n._uU(4, " Team name "),
            n.qZA(),
            n.TgZ(5, "nz-form-control"),
            n._UZ(6, "input", 59),
            n.qZA()(),
            n.TgZ(7, "button", 60),
            n._uU(8, "Create"),
            n.qZA()(),
            n.BQk();
        }
        if (2 & a) {
          const o = n.oxw();
          n.xp6(1),
            n.Q6J("formGroup", o.form),
            n.xp6(5),
            n.Q6J("formControlName", "name");
        }
      }
      function Hn(a, r) {}
      const Vn = function () {
        return [];
      };
      let Kn = (() => {
        var a;
        class r {
          get buttonText() {
            return this.isValueIsAnEmail()
              ? "Invite as a member"
              : "Invite a new member by email";
          }
          constructor(e, t, s, _, C, x, G, nt) {
            (this.api = e),
              (this.teamMembersApi = t),
              (this.teamsApiService = s),
              (this.fb = _),
              (this.app = C),
              (this.service = x),
              (this.membersApi = G),
              (this.auth = nt),
              (this.visible = !1),
              (this.visibleNewTeam = !1),
              (this.teams = []),
              (this.currentTeam = null),
              (this.loading = !1),
              (this.total = 0),
              (this.pageSize = h.L8),
              (this.pageIndex = 1),
              (this.paginationSizes = [5, 10, 15, 20, 50, 100]),
              (this.sortField = null),
              (this.sortOrder = null),
              (this.loadingTeamDetails = !1),
              (this.teamData = {}),
              (this.selectedTeam = {}),
              (this.updatingTeam = !1),
              (this.users = []),
              (this.totalUsers = 0),
              (this.searchingName = null),
              (this.projectId = null),
              (this.inviting = !1),
              this.app.setTitle("Admin Center - Teams"),
              (this.form = this.fb.group({ name: [null, [p.kI.required]] })),
              (this.editTeamForm = this.fb.group({
                name: [null, [p.kI.required]],
                teamMembers: this.fb.array([]),
                search: [null],
              })),
              (this.searchForm = this.fb.group({ search: [] })),
              this.searchForm.valueChanges.subscribe(() => this.getTeams()),
              this.editTeamForm.controls.search?.valueChanges.subscribe((et) =>
                this.handleMemberSelect(et)
              ),
              y.s.track(A.vR);
          }
          get teamMembers() {
            return this.editTeamForm.get("teamMembers");
          }
          getColor(e) {
            return h.Lj[e?.charAt(0).toUpperCase() || "A"];
          }
          onQueryParamsChange(e) {
            var t = this;
            return (0, i.Z)(function* () {
              const { pageSize: s, pageIndex: _, sort: C } = e;
              (t.pageIndex = _), (t.pageSize = s);
              const x = C.find((G) => null !== G.value);
              (t.sortField = (x && x.key) || null),
                (t.sortOrder = (x && x.value) || null),
                yield t.getTeams();
            })();
          }
          getTeams() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                e.loading = !0;
                const t = yield e.api.getOrganizationTeams(
                  e.pageIndex,
                  e.pageSize,
                  e.sortField,
                  e.sortOrder,
                  e.searchForm.value.search
                );
                t.done &&
                  ((e.total = t.body.total || 0),
                  (e.teams =
                    t.body.data?.filter(
                      (s) => s.id !== e.auth.getCurrentSession()?.team_id
                    ) || []),
                  (e.currentTeam = t.body.current_team_data || null),
                  (e.loading = !1));
              } catch (t) {
                (e.loading = !1), (0, m.tu)(t);
              }
            })();
          }
          createTeam() {
            var e = this;
            return (0, i.Z)(function* () {
              if (
                e.form.value &&
                e.form.value.name &&
                "" !== e.form.value.name.trim()
              ) {
                try {
                  e.form.valid
                    ? ((e.loading = !0),
                      (yield e.teamsApiService.create({
                        name: e.form.value.name,
                      })).done &&
                        (e.closeNewTeam(),
                        e.getTeams(),
                        e.service.emitCreateTeam()))
                    : e.app.displayErrorsOf(e.form);
                } catch (t) {
                  (e.loading = !1), (0, m.tu)(t);
                }
                e.loading = !1;
              }
            })();
          }
          openTeamDrawer(e) {
            var t = this;
            return (0, i.Z)(function* () {
              if (e.id) {
                try {
                  (t.loadingTeamDetails = !0),
                    (t.selectedTeam = e),
                    y.s.track(A.p$),
                    t.getTeamMembers(e);
                } catch (s) {
                  (t.loadingTeamDetails = !1), (0, m.tu)(s);
                }
                t.visible = !0;
              }
            })();
          }
          getTeamMembers(e) {
            var t = this;
            return (0, i.Z)(function* () {
              if (e.id)
                try {
                  const s = yield t.api.getOrganizationTeam(e.id);
                  s.done &&
                    (t.teamMembers.clear(),
                    (t.teamData = s.body),
                    (t.total = t.teamData.team_members?.length || 0),
                    t.editTeamForm.patchValue({ name: t.teamData.name }),
                    t.teamData.team_members?.map((_) => {
                      const C = t.fb.group({
                        id: _.id,
                        user_id: _.user_id,
                        name: _.name,
                        role_name: _.role_name,
                        avatar_url: _.avatar_url,
                      });
                      t.teamMembers.push(C);
                    }) && (t.loadingTeamDetails = !1));
                } catch {
                  t.loadingTeamDetails = !1;
                }
            })();
          }
          close() {
            this.teamMembers.clear(),
              this.editTeamForm.reset(),
              (this.visible = !1);
          }
          openNewTeam() {
            this.visibleNewTeam = !0;
          }
          closeNewTeam() {
            (this.visibleNewTeam = !1), this.form.reset();
          }
          submit() {
            var e = this;
            return (0, i.Z)(function* () {
              if (
                e.teamData.id &&
                e.editTeamForm.value &&
                e.editTeamForm.value.name &&
                "" !== e.editTeamForm.value.name.trim()
              )
                try {
                  (e.updatingTeam = !0),
                    (yield e.api.updateTeam(
                      e.teamData.id,
                      e.editTeamForm.value
                    )).done &&
                      (e.service.emitTeamNameChange({
                        teamId: e.teamData.id,
                        teamName: e.editTeamForm.value.name,
                      }),
                      e.close(),
                      e.getTeams());
                } catch (t) {
                  (0, m.tu)(t);
                }
            })();
          }
          deleteTeam(e) {
            var t = this;
            return (0, i.Z)(function* () {
              if (e)
                try {
                  (yield t.api.deleteTeam(e)).done &&
                    (y.s.track(A.pG), yield t.getTeams());
                } catch (s) {
                  (0, m.tu)(s);
                }
            })();
          }
          handleMemberSelect(e) {
            var t = this;
            return (0, i.Z)(function* () {
              if (e && t.selectedTeam.id)
                if (t.editTeamForm.valid)
                  try {
                    t.loading = !0;
                    const s = { job_title: null, emails: [e], is_admin: !1 };
                    (yield t.teamMembersApi.addTeamMember(t.selectedTeam.id, s))
                      .done &&
                      (t.editTeamForm.controls.search?.setValue(null),
                      t.getTeamMembers(t.selectedTeam)),
                      (t.loading = !1);
                  } catch (s) {
                    (0, m.tu)(s), (t.loading = !1);
                  }
                else t.app.displayErrorsOf(t.form);
            })();
          }
          deleteTeamMember(e) {
            var t = this;
            return (0, i.Z)(function* () {
              if (e && t.selectedTeam.id)
                try {
                  (yield t.api.removeTeamMember(e, t.selectedTeam.id)).done &&
                    (y.s.track(A.OA),
                    e === t.auth.getCurrentSession()?.team_member_id
                      ? window.location.reload()
                      : yield t.getTeamMembers(t.selectedTeam));
                } catch (s) {
                  (0, m.tu)(s);
                }
            })();
          }
          isValueIsAnEmail() {
            return !!this.searchingName && (0, m.PH)(this.searchingName);
          }
          sendInvitation() {
            var e = this;
            return (0, i.Z)(function* () {
              if (
                e.projectId &&
                "string" == typeof e.searchingName &&
                e.searchingName.length
              )
                try {
                  const t = e.searchingName.trim().toLowerCase(),
                    s = { project_id: e.projectId, email: t };
                  (e.inviting = !0),
                    yield e.membersApi.createByEmail(s),
                    (e.inviting = !1);
                } catch {
                  e.inviting = !1;
                }
            })();
          }
        }
        return (
          ((a = r).ɵfac = function (e) {
            return new (e || a)(
              n.Y36(f),
              n.Y36(Pn.B),
              n.Y36(Un.S),
              n.Y36(p.qu),
              n.Y36(On.z),
              n.Y36(wn.I),
              n.Y36(Nn.r),
              n.Y36(cn.e)
            );
          }),
          (a.ɵcmp = n.Xpm({
            type: a,
            selectors: [["worklenz-teams"]],
            decls: 37,
            vars: 24,
            consts: [
              [1, "px-0", 3, "nzGhost"],
              [1, "site-page-header", "pt-0", "ps-0"],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzShape",
                "circle",
                "nzTooltipTitle",
                "Refresh teams",
                "nzType",
                "default",
                3,
                "click",
                4,
                "nzSpaceItem",
              ],
              ["nz-form", "", 3, "nzLayout", "formGroup", 4, "nzSpaceItem"],
              [4, "nzSpaceItem"],
              [3, "nzActive", "nzLoading"],
              [
                "nzShowSizeChanger",
                "",
                "nzSize",
                "small",
                1,
                "custom-table",
                3,
                "nzData",
                "nzLoading",
                "nzPageIndex",
                "nzPageSizeOptions",
                "nzFrontPagination",
                "nzPageSize",
                "nzTotal",
                "nzNoResult",
                "nzQueryParams",
              ],
              ["teamsTable", ""],
              ["scope", "col"],
              ["scope", "col", 1, "text-center"],
              ["class", "actions-row", 4, "ngIf"],
              ["class", "actions-row", 4, "ngFor", "ngForOf"],
              ["noDataTemplate", ""],
              ["noDataTemplate1", ""],
              [
                "nzPlacement",
                "right",
                3,
                "nzClosable",
                "nzVisible",
                "nzTitle",
                "nzSize",
                "nzWidth",
                "nzOnClose",
              ],
              [4, "nzDrawerContent"],
              [
                "nzPlacement",
                "right",
                "nzTitle",
                "Create New Team",
                3,
                "nzClosable",
                "nzVisible",
                "nzSize",
                "nzWidth",
                "nzOnClose",
              ],
              ["emptyData", ""],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzShape",
                "circle",
                "nzTooltipTitle",
                "Refresh teams",
                "nzType",
                "default",
                3,
                "click",
              ],
              ["nz-icon", "", "nzTheme", "outline", "nzType", "sync"],
              ["nz-form", "", 3, "nzLayout", "formGroup"],
              [3, "nzSuffix"],
              [
                "nz-input",
                "",
                "placeholder",
                "Search by name",
                "type",
                "text",
                3,
                "formControlName",
              ],
              ["suffixIconSearch", ""],
              ["nz-icon", "", "nzType", "search"],
              ["nz-button", "", "nzType", "primary", 3, "click"],
              [1, "actions-row"],
              [1, "cursor-pointer"],
              ["nzColor", "#52c41a", 3, "nzText"],
              [1, "cursor-pointer", "text-center"],
              [3, "names"],
              [1, "actions", "text-center"],
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
              ["nz-icon", "", "nzType", "setting"],
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
              ["nz-form", "", 3, "formGroup", "nzLayout", "ngSubmit"],
              ["nzRequired", "", 3, "nzSpan"],
              [
                "nz-input",
                "",
                "placeholder",
                "Name of the team",
                3,
                "formControlName",
              ],
              [1, "d-block"],
              [3, "nzData", "nzFrontPagination", "formArrayName", "nzNoResult"],
              [2, "width", "150px"],
              [3, "formGroupName", 4, "ngFor", "ngForOf"],
              ["nz-button", "", "nzType", "primary", "nzBlock", ""],
              [3, "formGroupName"],
              [1, "me-2", 3, "nzSize", "nzText", "nzSrc"],
              [2, "width", "150px", 3, "formControlName", "nzDisabled"],
              ["nzValue", "Admin", "nzLabel", "Admin"],
              ["nzValue", "Member", "nzLabel", "Member"],
              ["nzValue", "Owner", "nzLabel", "Owner", 3, "nzDisabled"],
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
                "ngIf",
              ],
              ["nz-form", "", 3, "formGroup", "submit"],
              ["nzRequired", ""],
              ["nz-input", "", "type", "text", 3, "formControlName"],
              [
                "nz-button",
                "",
                "nzType",
                "primary",
                "type",
                "submit",
                "nzBlock",
                "",
              ],
            ],
            template: function (e, t) {
              if (
                (1 & e &&
                  (n.TgZ(0, "nz-page-header", 0)(1, "nz-page-header-title"),
                  n._uU(2, "Teams"),
                  n.qZA()(),
                  n.TgZ(3, "nz-page-header", 1)(4, "nz-page-header-subtitle"),
                  n._uU(5),
                  n.qZA(),
                  n.TgZ(6, "nz-page-header-extra")(7, "nz-space"),
                  n.YNc(8, Mn, 2, 0, "button", 2),
                  n.YNc(9, Dn, 5, 4, "form", 3),
                  n.YNc(10, Sn, 3, 0, "span", 4),
                  n.qZA()()(),
                  n.TgZ(11, "nz-card")(12, "nz-skeleton", 5)(
                    13,
                    "nz-table",
                    6,
                    7
                  ),
                  n.NdJ("nzQueryParams", function (_) {
                    return t.onQueryParamsChange(_);
                  }),
                  n.TgZ(15, "thead")(16, "tr")(17, "th", 8),
                  n._uU(18, "Team"),
                  n.qZA(),
                  n.TgZ(19, "th", 9),
                  n._uU(20, "Members Count"),
                  n.qZA(),
                  n.TgZ(21, "th", 8),
                  n._uU(22, "Members"),
                  n.qZA(),
                  n._UZ(23, "th", 9),
                  n.qZA()(),
                  n.TgZ(24, "tbody"),
                  n.YNc(25, Qn, 12, 3, "tr", 10),
                  n.YNc(26, Ln, 12, 3, "tr", 11),
                  n.qZA()()()(),
                  n.YNc(27, En, 5, 0, "ng-template", null, 12, n.W1O),
                  n.YNc(29, Bn, 0, 0, "ng-template", null, 13, n.W1O),
                  n.TgZ(31, "nz-drawer", 14),
                  n.NdJ("nzOnClose", function () {
                    return t.close();
                  }),
                  n.YNc(32, Rn, 21, 11, "ng-container", 15),
                  n.qZA(),
                  n.TgZ(33, "nz-drawer", 16),
                  n.NdJ("nzOnClose", function () {
                    return t.closeNewTeam();
                  }),
                  n.YNc(34, $n, 9, 2, "ng-container", 15),
                  n.qZA(),
                  n.YNc(35, Hn, 0, 0, "ng-template", null, 17, n.W1O)),
                2 & e)
              ) {
                const s = n.MAs(14),
                  _ = n.MAs(28),
                  C = n.MAs(30);
                n.Q6J("nzGhost", !1),
                  n.xp6(5),
                  n.hij("", t.total ? t.total : 0, " teams"),
                  n.xp6(7),
                  n.Q6J("nzActive", !1)("nzLoading", !1),
                  n.xp6(1),
                  n.Q6J("nzData", t.teams || n.DdM(23, Vn))(
                    "nzLoading",
                    t.loading
                  )("nzPageIndex", t.pageIndex)(
                    "nzPageSizeOptions",
                    t.paginationSizes
                  )("nzFrontPagination", !1)("nzPageSize", t.pageSize)(
                    "nzTotal",
                    t.total
                  )("nzNoResult", t.currentTeam ? C : _),
                  n.xp6(12),
                  n.Q6J("ngIf", t.currentTeam),
                  n.xp6(1),
                  n.Q6J("ngForOf", s.data),
                  n.xp6(5),
                  n.Q6J("nzClosable", !0)("nzVisible", t.visible)(
                    "nzTitle",
                    "Team Settings"
                  )("nzSize", "large")("nzWidth", "550px"),
                  n.xp6(2),
                  n.Q6J("nzClosable", !0)("nzVisible", t.visibleNewTeam)(
                    "nzSize",
                    "large"
                  )("nzWidth", "350px");
              }
            },
            dependencies: [
              b.sg,
              b.O5,
              T.$O,
              T.u9,
              T.yG,
              T.Jp,
              N.Ls,
              M.bd,
              I.ZU,
              z.N8,
              z.Uo,
              z._C,
              z.Om,
              z.p0,
              z.$Z,
              O.NU,
              O.$1,
              q.t3,
              q.SK,
              v.Lr,
              v.Nx,
              v.iK,
              v.Fd,
              P.Zp,
              P.gB,
              P.ke,
              Z.ix,
              w.w,
              J.dQ,
              D.ng,
              F.x7,
              ln.Dz,
              S.SY,
              B.Vz,
              B.SQ,
              Y.Ip,
              Y.Vq,
              p._Y,
              p.Fj,
              p.JJ,
              p.JL,
              p.sg,
              p.u,
              p.x0,
              p.CE,
              mn.o,
              zn.JW,
              _n.I,
            ],
            styles: [
              "nz-page-header-subtitle[_ngcontent-%COMP%]{color:#000000d9;font-weight:500;font-size:16px}.no-data-img-holder[_ngcontent-%COMP%]{width:100px;margin-top:42px}",
            ],
          })),
          r
        );
      })();
      var K = c(33410),
        pn = c(73460);
      const j = function () {
        return ["ant-menu-item-selected"];
      };
      let jn = (() => {
          var a;
          class r {
            constructor(e) {
              this.auth = e;
            }
            get profile() {
              return this.auth.getCurrentSession();
            }
          }
          return (
            ((a = r).ɵfac = function (e) {
              return new (e || a)(n.Y36(cn.e));
            }),
            (a.ɵcmp = n.Xpm({
              type: a,
              selectors: [["worklenz-admin-center-sidebar"]],
              decls: 5,
              vars: 21,
              consts: [
                ["nz-menu", "", 1, "border-0", 3, "nzMode"],
                [
                  "nz-submenu",
                  "",
                  1,
                  "rounded-4",
                  3,
                  "routerLink",
                  "routerLinkActive",
                  "nzTitle",
                  "nzIcon",
                ],
              ],
              template: function (e, t) {
                1 & e &&
                  (n.TgZ(0, "ul", 0),
                  n._UZ(1, "li", 1)(2, "li", 1)(3, "li", 1)(4, "li", 1),
                  n.qZA()),
                  2 & e &&
                    (n.Q6J("nzMode", "vertical"),
                    n.xp6(1),
                    n.Q6J("routerLink", "overview")(
                      "routerLinkActive",
                      n.DdM(17, j)
                    )("nzTitle", "Overview")("nzIcon", "appstore"),
                    n.xp6(1),
                    n.Q6J("routerLink", "users")(
                      "routerLinkActive",
                      n.DdM(18, j)
                    )("nzTitle", "Users")("nzIcon", "user"),
                    n.xp6(1),
                    n.Q6J("routerLink", "teams")(
                      "routerLinkActive",
                      n.DdM(19, j)
                    )("nzTitle", "Teams")("nzIcon", "team"),
                    n.xp6(1),
                    n.Q6J("routerLink", "billing")(
                      "routerLinkActive",
                      n.DdM(20, j)
                    )("nzTitle", "Billing")("nzIcon", "credit-card"));
              },
              dependencies: [U.rH, U.Od, pn.wO, pn.rY, w.w],
            })),
            r
          );
        })(),
        Wn = (() => {
          var a;
          class r {}
          return (
            ((a = r).ɵfac = function (e) {
              return new (e || a)();
            }),
            (a.ɵcmp = n.Xpm({
              type: a,
              selectors: [["worklenz-layout"]],
              decls: 9,
              vars: 2,
              consts: [
                [1, "container"],
                [1, "px-0", 3, "nzGhost"],
                [1, "inner-layout"],
                [3, "nzWidth"],
                [1, "px-4", "bg-white"],
              ],
              template: function (e, t) {
                1 & e &&
                  (n.TgZ(0, "div", 0)(1, "nz-page-header", 1)(
                    2,
                    "nz-page-header-title"
                  ),
                  n._uU(3, "Admin Center"),
                  n.qZA()(),
                  n.TgZ(4, "nz-layout", 2)(5, "nz-sider", 3),
                  n._UZ(6, "worklenz-admin-center-sidebar"),
                  n.qZA(),
                  n.TgZ(7, "nz-content", 4),
                  n._UZ(8, "router-outlet"),
                  n.qZA()()()),
                  2 & e &&
                    (n.xp6(1),
                    n.Q6J("nzGhost", !1),
                    n.xp6(4),
                    n.Q6J("nzWidth", "240px"));
              },
              dependencies: [U.lC, K.hw, K.OK, K.t7, T.$O, T.u9, jn],
              styles: [
                "[nz-submenu][_ngcontent-%COMP%]{transition:none!important}",
              ],
            })),
            r
          );
        })();
      var W = c(79382),
        fn = c(48128),
        un = (function (a) {
          return (
            (a.DELETED = "deleted"),
            (a.PAUSED = "paused"),
            (a.ACTIVE = "active"),
            (a.PASTDUE = "past_due"),
            (a.TRIALING = "trialing"),
            (a.LIFE_TIME_DEAL = "life_time_deal"),
            a
          );
        })(un || {}),
        X = c(81221),
        hn = c(22114);
      function Xn(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h4", 10),
            n._uU(4, "Free"),
            n.qZA()(),
            n.TgZ(5, "div", 11)(6, "h1", 12),
            n._uU(7, "$0.00"),
            n.qZA(),
            n.TgZ(8, "button", 13),
            n.NdJ("click", function () {
              n.CHM(o);
              const t = n.oxw(2);
              return n.KtG(t.switchToFreePlan());
            }),
            n._uU(9, "Try It "),
            n.qZA()()()();
        }
        if (2 & a) {
          const o = n.oxw(2);
          n.xp6(8),
            n.Q6J("nzLoading", o.upgradingPlan)(
              "disabled",
              o.billingInfo.plan_id === o.plans.monthly_plan_id
            );
        }
      }
      function ne(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h4", 10),
            n._uU(4, "Monthly"),
            n.qZA()(),
            n.TgZ(5, "div", 11)(6, "h1", 12),
            n._uU(7, "$5.99"),
            n.qZA(),
            n.TgZ(8, "small", 14),
            n._uU(9, "Per Month / Per User"),
            n.qZA(),
            n.TgZ(10, "button", 13),
            n.NdJ("click", function () {
              n.CHM(o);
              const t = n.oxw(2);
              return n.KtG(t.upgradePlan(t.plans.monthly_plan_id));
            }),
            n._uU(11, "Purchase "),
            n.qZA()()()();
        }
        if (2 & a) {
          const o = n.oxw(2);
          n.xp6(10),
            n.Q6J("nzLoading", o.upgradingPlan)(
              "disabled",
              o.billingInfo.plan_id === o.plans.monthly_plan_id
            );
        }
      }
      function ee(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "div", 7)(1, "div", 15)(2, "div", 16),
            n._uU(3, "Save 33%"),
            n.qZA(),
            n.TgZ(4, "div", 17)(5, "h4", 10),
            n._uU(6, "Annually"),
            n.qZA()(),
            n.TgZ(7, "div", 11)(8, "h1", 12),
            n._uU(9, "$3.99"),
            n.qZA(),
            n.TgZ(10, "small", 14),
            n._uU(11, "Per Month / Per User"),
            n.qZA(),
            n._UZ(12, "br"),
            n.TgZ(13, "small", 18),
            n._uU(14, "($47.88 billed per user annually)"),
            n.qZA(),
            n.TgZ(15, "button", 13),
            n.NdJ("click", function () {
              n.CHM(o);
              const t = n.oxw(2);
              return n.KtG(t.upgradePlan(t.plans.annual_plan_id));
            }),
            n._uU(16, "Purchase "),
            n.qZA()()()();
        }
        if (2 & a) {
          const o = n.oxw(2);
          n.xp6(15),
            n.Q6J("nzLoading", o.upgradingPlan)(
              "disabled",
              o.billingInfo.plan_id === o.plans.annual_plan_id
            );
        }
      }
      function te(a, r) {
        1 & a &&
          (n.TgZ(0, "div", 19)(1, "ul", 20)(2, "li", 21),
          n._UZ(3, "span", 22),
          n._uU(4, "\xa025GB storage"),
          n.qZA(),
          n.TgZ(5, "li", 21),
          n._UZ(6, "span", 22),
          n._uU(7, "\xa0Unlimited active projects "),
          n.qZA()(),
          n.TgZ(8, "div", 23)(9, "div", 24)(10, "div", 25)(11, "div", 26),
          n._UZ(12, "span", 22),
          n.qZA(),
          n._uU(13, "\xa0 Dashboard "),
          n.qZA()(),
          n.TgZ(14, "div", 24)(15, "div", 25)(16, "div", 26),
          n._UZ(17, "span", 22),
          n.qZA(),
          n._uU(18, "\xa0 Schedule "),
          n.qZA()(),
          n.TgZ(19, "div", 24)(20, "div", 25)(21, "div", 26),
          n._UZ(22, "span", 22),
          n.qZA(),
          n._uU(23, "\xa0 Kanban board "),
          n.qZA()(),
          n.TgZ(24, "div", 24)(25, "div", 25)(26, "div", 26),
          n._UZ(27, "span", 22),
          n.qZA(),
          n._uU(28, "\xa0 Tasks list "),
          n.qZA()(),
          n.TgZ(29, "div", 24)(30, "div", 25)(31, "div", 26),
          n._UZ(32, "span", 22),
          n.qZA(),
          n._uU(33, "\xa0 Project insights "),
          n.qZA()(),
          n.TgZ(34, "div", 24)(35, "div", 25)(36, "div", 26),
          n._UZ(37, "span", 22),
          n.qZA(),
          n._uU(38, "\xa0 Reporting "),
          n.qZA()(),
          n.TgZ(39, "div", 27)(40, "div", 25)(41, "div", 26),
          n._UZ(42, "span", 22),
          n.qZA(),
          n._uU(43, "\xa0 Time log "),
          n.qZA()(),
          n.TgZ(44, "div", 27)(45, "div", 25)(46, "div", 26),
          n._UZ(47, "span", 22),
          n.qZA(),
          n._uU(48, "\xa0 Road map "),
          n.qZA()(),
          n.TgZ(49, "div", 27)(50, "div", 25)(51, "div", 26),
          n._UZ(52, "span", 22),
          n.qZA(),
          n._uU(53, "\xa0 Workload "),
          n.qZA()()()());
      }
      function ae(a, r) {
        if (
          (1 & a &&
            (n.TgZ(0, "div", 19)(1, "ul", 20)(2, "li", 21),
            n._UZ(3, "span", 22),
            n._uU(4),
            n.qZA(),
            n.TgZ(5, "li", 21),
            n._UZ(6, "span", 22),
            n._uU(7),
            n.qZA(),
            n.TgZ(8, "li", 21),
            n._UZ(9, "span", 22),
            n._uU(10),
            n.qZA()()()),
          2 & a)
        ) {
          const o = n.oxw(2);
          n.xp6(4),
            n.hij("\xa0", o.plans.team_member_limit, " Team Members "),
            n.xp6(3),
            n.hij("\xa0", o.plans.projects_limit, " Projects "),
            n.xp6(3),
            n.hij("\xa0", o.plans.free_tier_storage, " Storage ");
        }
      }
      function oe(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.ynx(0),
            n.TgZ(1, "div", 2)(2, "div", 3)(3, "nz-segmented", 4),
            n.NdJ("nzValueChange", function (t) {
              n.CHM(o);
              const s = n.oxw();
              return n.KtG(s.handleIndexChange(t));
            }),
            n.qZA()(),
            n.YNc(4, Xn, 10, 2, "div", 5),
            n.YNc(5, ne, 12, 2, "div", 5),
            n.YNc(6, ee, 17, 2, "div", 5),
            n._uU(7, " \u200b "),
            n.YNc(8, te, 54, 0, "div", 6),
            n.YNc(9, ae, 11, 3, "div", 6),
            n.qZA(),
            n.BQk();
        }
        if (2 & a) {
          const o = n.oxw();
          n.xp6(3),
            n.Q6J("nzOptions", o.planTypes)("ngModel", o.selectedIndex),
            n.xp6(1),
            n.Q6J("ngIf", 0 === o.selectedIndex),
            n.xp6(1),
            n.Q6J("ngIf", 2 === o.selectedIndex),
            n.xp6(1),
            n.Q6J("ngIf", 1 === o.selectedIndex),
            n.xp6(2),
            n.Q6J("ngIf", 0 !== o.selectedIndex),
            n.xp6(1),
            n.Q6J("ngIf", 0 === o.selectedIndex);
        }
      }
      let ie = (() => {
        var a;
        class r {
          constructor(e, t) {
            (this.api = e),
              (this.auth = t),
              (this.billingInfo = {}),
              (this.isVisible = !1),
              (this.actionDone = new n.vpe()),
              (this.planUpgraded = new n.vpe()),
              (this.modalClosed = new n.vpe()),
              (this.planTypes = ["Free", "Annually", "Monthly"]),
              (this.subscriptionStatus = un),
              (this.plans = {}),
              (this.selectedIndex = 1),
              (this.upgradingPlan = !1),
              (this.loadingPlans = !1),
              (this.switchingToFree = !1);
          }
          ngOnInit() {
            this.getPlans();
          }
          closePricingModal() {
            (this.isVisible = !1),
              (this.selectedIndex = 1),
              this.modalClosed.emit();
          }
          getPlans() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                e.loadingPlans = !0;
                const t = yield e.api.getPlans();
                t.done && ((e.plans = t.body), (e.loadingPlans = !1));
              } catch {
                e.loadingPlans = !1;
              }
            })();
          }
          handleIndexChange(e) {
            this.selectedIndex = e;
          }
          loadScript(e) {
            const t = document.createElement("script");
            (t.src = "https://cdn.paddle.com/paddle/paddle.js"),
              (t.type = "text/javascript"),
              (t.async = !0),
              document.getElementsByTagName("head")[0].appendChild(t),
              (t.onload = () => {
                e.sandbox && Paddle.Environment.set("sandbox"),
                  Paddle.Setup({
                    vendor: parseInt(e.vendor_id),
                    eventCallback: (s) => {
                      this.handlePaddleCallback(s);
                    },
                  }),
                  Paddle.Checkout.open(e.params);
              });
          }
          handlePaddleCallback(e) {
            "Checkout.Loaded" === e.event && (this.upgradingPlan = !1),
              "Checkout.Complete" === e.event &&
                ((this.isVisible = !1),
                setTimeout(() => {
                  this.actionDone.emit();
                }, 5e3));
          }
          upgradePlan(e = null) {
            var t = this;
            return (0, i.Z)(function* () {
              if (e)
                try {
                  if (
                    ((t.upgradingPlan = !0),
                    t.billingInfo.trial_in_progress &&
                      t.billingInfo.status === t.subscriptionStatus.TRIALING)
                  ) {
                    const s = yield t.api.upgradePlan(e);
                    s.done && ((t.upgradingPlan = !1), t.loadScript(s.body)),
                      (t.upgradingPlan = !1);
                  }
                  t.billingInfo.status === t.subscriptionStatus.ACTIVE &&
                    (yield t.api.changePlan(e)).done &&
                    ((t.isVisible = !1), t.planUpgraded.emit());
                } catch (s) {
                  (0, m.tu)(s);
                }
            })();
          }
          switchToFreePlan() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                const t = e.auth.getCurrentSession()?.team_id;
                if (!t) return;
                (e.switchingToFree = !0),
                  (yield e.api.switchToFreePlan(t)).done &&
                    (e.planUpgraded.emit(), (e.isVisible = !1));
              } catch (t) {
                (0, m.tu)(t);
              }
            })();
          }
        }
        return (
          ((a = r).ɵfac = function (e) {
            return new (e || a)(n.Y36(f), n.Y36(cn.e));
          }),
          (a.ɵcmp = n.Xpm({
            type: a,
            selectors: [["worklenz-pricing-plan-modal"]],
            inputs: { billingInfo: "billingInfo", isVisible: "isVisible" },
            outputs: {
              actionDone: "actionDone",
              planUpgraded: "planUpgraded",
              modalClosed: "modalClosed",
            },
            decls: 2,
            vars: 2,
            consts: [
              [3, "nzVisible", "nzFooter", "nzVisibleChange", "nzOnCancel"],
              [4, "nzModalContent"],
              [1, "row", "text-center", "mt-4"],
              [1, "text-center"],
              [3, "nzOptions", "ngModel", "nzValueChange"],
              ["class", "col-8 mx-auto mt-2", 4, "ngIf"],
              ["class", "col-12 px-4", 4, "ngIf"],
              [1, "col-8", "mx-auto", "mt-2"],
              [1, "card", "mb-4", "rounded-3", "shadow-sm"],
              [1, "card-header", "py-3"],
              [1, "my-0", "fw-bold"],
              [1, "card-body", "px-3", "pb-2"],
              [1, "card-title", "pricing-card-title", "mb-0"],
              [
                "nz-button",
                "",
                "nzType",
                "primary",
                "type",
                "button",
                1,
                "w-100",
                "mt-3",
                "mb-2",
                3,
                "nzLoading",
                "disabled",
                "click",
              ],
              [1, "text-body-secondary", "fw-light"],
              [
                1,
                "card",
                "mb-4",
                "rounded-3",
                "shadow-sm",
                "border-primary",
                "position-relative",
              ],
              [1, "offer-tag"],
              [1, "card-header", "py-3", "border-primary"],
              [1, "fw-normal"],
              [1, "col-12", "px-4"],
              [
                "nz-typography",
                "",
                1,
                "mt-3",
                "mb-1",
                "ps-0",
                "text-start",
                2,
                "list-style",
                "none",
                "font-size",
                "14px",
                "font-weight",
                "400",
              ],
              [1, "mb-3"],
              ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill"],
              [1, "d-flex", "flex-wrap", "mb-4"],
              [1, "col-md-4", "mb-3"],
              [1, "d-flex", "align-items-center", "price-list", "font-14"],
              [1, "icon-bg"],
              [1, "col-md-4"],
            ],
            template: function (e, t) {
              1 & e &&
                (n.TgZ(0, "nz-modal", 0),
                n.NdJ("nzVisibleChange", function (_) {
                  return (t.isVisible = _);
                })("nzOnCancel", function () {
                  return t.closePricingModal();
                }),
                n.YNc(1, oe, 10, 7, "ng-container", 1),
                n.qZA()),
                2 & e && n.Q6J("nzVisible", t.isVisible)("nzFooter", null);
            },
            dependencies: [
              b.O5,
              N.Ls,
              I.ZU,
              Z.ix,
              w.w,
              J.dQ,
              p.JJ,
              p.On,
              X.du,
              X.Hf,
              hn.wY,
            ],
            styles: [
              ".pricing-header[_ngcontent-%COMP%]{max-width:700px}.card[_ngcontent-%COMP%]{transition:.3s all}.card[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.icon-bg[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#52c41a}.ant-modal-body[_ngcontent-%COMP%]{padding:24px 32px}.offer-tag[_ngcontent-%COMP%]{position:absolute;right:5px;background:#ff494b;color:#fff;padding-left:4px;padding-right:4px;font-size:12px;border-radius:12px;font-weight:500;animation:_ngcontent-%COMP%_shaking 1s infinite;-webkit-animation:_ngcontent-%COMP%_shaking 1s infinite}@keyframes _ngcontent-%COMP%_shaking{0%{scale:1}50%{scale:1.075}to{scale:1}}",
            ],
          })),
          r
        );
      })();
      function re(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "div")(1, "nz-form-item")(2, "nz-form-label", 2),
            n._uU(3, "Redeem Code"),
            n.qZA(),
            n.TgZ(4, "nz-form-control", 3)(5, "input", 4),
            n.NdJ("ngModelChange", function (t) {
              n.CHM(o);
              const s = n.oxw();
              return n.KtG((s.redeemCode = t));
            }),
            n.qZA()()(),
            n.TgZ(6, "nz-form-item")(7, "nz-form-control")(8, "button", 5),
            n.NdJ("click", function () {
              n.CHM(o);
              const t = n.oxw();
              return n.KtG(t.submit());
            }),
            n._uU(9),
            n.qZA()()()();
        }
        if (2 & a) {
          const o = n.oxw();
          n.xp6(2),
            n.Q6J("nzSpan", 24),
            n.xp6(2),
            n.Q6J("nzSpan", 24),
            n.xp6(1),
            n.Q6J("placeholder", "Enter you redeem code")(
              "ngModel",
              o.redeemCode
            ),
            n.xp6(3),
            n.Q6J("nzType", "primary")("nzLoading", o.loading)(
              "disabled",
              10 !== o.redeemCode.length
            ),
            n.xp6(1),
            n.hij("", o.loading ? "Verifying" : "Submit", " ");
        }
      }
      let se = (() => {
        var a;
        class r {
          constructor(e) {
            (this.api = e),
              (this.isVisible = !1),
              (this.modalClosed = new n.vpe()),
              (this.redeemCode = ""),
              (this.loading = !1);
          }
          closeModal() {
            (this.isVisible = !1),
              (this.redeemCode = ""),
              this.modalClosed.emit();
          }
          submit() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                (e.loading = !0),
                  (yield e.api.redeemCode({ code: e.redeemCode })).done &&
                    ((e.loading = !1), e.closeModal()),
                  (e.loading = !1);
              } catch {
                e.loading = !1;
              }
            })();
          }
        }
        return (
          ((a = r).ɵfac = function (e) {
            return new (e || a)(n.Y36(f));
          }),
          (a.ɵcmp = n.Xpm({
            type: a,
            selectors: [["worklenz-redeem-code-modal"]],
            inputs: { isVisible: "isVisible" },
            outputs: { modalClosed: "modalClosed" },
            decls: 2,
            vars: 4,
            consts: [
              [
                "nzPlacement",
                "right",
                3,
                "nzClosable",
                "nzVisible",
                "nzWidth",
                "nzTitle",
                "nzOnClose",
              ],
              [4, "nzDrawerContent"],
              ["nzRequired", "", 3, "nzSpan"],
              [3, "nzSpan"],
              [
                "nz-input",
                "",
                1,
                "w-100",
                3,
                "placeholder",
                "ngModel",
                "ngModelChange",
              ],
              [
                "nz-button",
                "",
                "nzBlock",
                "",
                3,
                "nzType",
                "nzLoading",
                "disabled",
                "click",
              ],
            ],
            template: function (e, t) {
              1 & e &&
                (n.TgZ(0, "nz-drawer", 0),
                n.NdJ("nzOnClose", function () {
                  return t.closeModal();
                }),
                n.YNc(1, re, 10, 8, "div", 1),
                n.qZA()),
                2 & e &&
                  n.Q6J("nzClosable", !0)("nzVisible", t.isVisible)(
                    "nzWidth",
                    420
                  )("nzTitle", "Redeem Code");
            },
            dependencies: [
              q.t3,
              q.SK,
              v.Nx,
              v.iK,
              v.Fd,
              P.Zp,
              Z.ix,
              w.w,
              J.dQ,
              B.Vz,
              B.SQ,
              p.Fj,
              p.JJ,
              p.On,
            ],
          })),
          r
        );
      })();
      function le(a, r) {
        if ((1 & a && (n.TgZ(0, "div", 10), n._uU(1), n.qZA()), 2 & a)) {
          const o = n.oxw(2);
          n.Q6J("nzType", "secondary"),
            n.xp6(1),
            n.hij(
              " Life time deal activated for ",
              o.billingInfo.ltd_users,
              " team members "
            );
        }
      }
      function ce(a, r) {
        if (
          (1 & a && (n.TgZ(0, "span", 12), n._uU(1), n._UZ(2, "br"), n.qZA()),
          2 & a)
        ) {
          const o = n.oxw(4);
          n.xp6(1),
            n.AsE(
              " ",
              o.billingInfo.default_currency,
              " ",
              "year" === o.billingInfo.billing_type
                ? o.billingInfo.unit_price_per_month
                : o.billingInfo.unit_price,
              " "
            );
        }
      }
      function pe(a, r) {
        1 & a &&
          (n.TgZ(0, "small"), n._uU(1, "(Per Month / Per User)"), n.qZA());
      }
      function ue(a, r) {
        if (
          (1 & a &&
            (n.TgZ(0, "span"),
            n.YNc(1, ce, 3, 2, "span", 11),
            n.YNc(2, pe, 2, 0, "small", 4),
            n.qZA()),
          2 & a)
        ) {
          const o = n.oxw(3);
          n.xp6(1),
            n.Q6J("ngIf", !o.billingInfo.trial_in_progress),
            n.xp6(1),
            n.Q6J("ngIf", !o.billingInfo.trial_in_progress);
        }
      }
      function de(a, r) {
        if (
          (1 & a && (n.TgZ(0, "span"), n.YNc(1, ue, 3, 2, "span", 4), n.qZA()),
          2 & a)
        ) {
          const o = n.oxw(2);
          n.xp6(1), n.Q6J("ngIf", !o.billingInfo.is_custom);
        }
      }
      function ge(a, r) {
        if (
          (1 & a && (n.TgZ(0, "span", 13), n.ALo(1, "date"), n._uU(2), n.qZA()),
          2 & a)
        ) {
          const o = n.oxw(2);
          n.Q6J(
            "nzTooltipTitle",
            n.xi3(1, 2, o.billingInfo.trial_expire_date, "fullDate")
          ),
            n.xp6(2),
            n.hij(" (", o.billingInfo.expire_date_string, ") ");
        }
      }
      function _e(a, r) {
        if (
          (1 & a &&
            (n.TgZ(0, "span")(1, "b"),
            n._uU(2),
            n.qZA(),
            n.YNc(3, le, 2, 2, "div", 8),
            n._UZ(4, "br"),
            n.YNc(5, de, 2, 1, "span", 4),
            n.YNc(6, ge, 3, 5, "span", 9),
            n._UZ(7, "br"),
            n.qZA()),
          2 & a)
        ) {
          const o = n.oxw();
          n.xp6(2),
            n.Oqu(
              o.billingInfo.status === o.subscriptionStatus.TRIALING
                ? "Free trial"
                : o.billingInfo.plan_name
            ),
            n.xp6(1),
            n.Q6J("ngIf", o.billingInfo.is_ltd_user),
            n.xp6(2),
            n.Q6J("ngIf", !o.billingInfo.is_ltd_user),
            n.xp6(1),
            n.Q6J("ngIf", o.billingInfo.trial_in_progress);
        }
      }
      function me(a, r) {
        if (
          (1 & a && (n.TgZ(0, "span", 19), n._uU(1), n.ALo(2, "date"), n.qZA()),
          2 & a)
        ) {
          const o = n.oxw(4);
          n.xp6(1),
            n.hij(
              " (Valid until ",
              n.xi3(2, 1, o.billingInfo.valid_till_date, "longDate"),
              ".) "
            );
        }
      }
      function ze(a, r) {
        if ((1 & a && (n._uU(0), n.YNc(1, me, 3, 4, "span", 18)), 2 & a)) {
          const o = n.oxw(3);
          n.hij(" ", o.getPlanStatus(o.billingInfo.status || ""), " "),
            n.xp6(1),
            n.Q6J(
              "ngIf",
              o.billingInfo.valid_till_date && !o.billingInfo.trial_in_progress
            );
        }
      }
      function fe(a, r) {
        if (
          (1 & a && (n.TgZ(0, "span"), n._uU(1), n.ALo(2, "date"), n.qZA()),
          2 & a)
        ) {
          const o = n.oxw(3);
          n.xp6(1),
            n.hij(
              " (Cancellation effective date: ",
              n.xi3(
                2,
                1,
                o.billingInfo.cancellation_effective_date,
                "mediumDate"
              ),
              ") "
            );
        }
      }
      function he(a, r) {
        if (
          (1 & a && (n.TgZ(0, "span"), n._uU(1), n.ALo(2, "date"), n.qZA()),
          2 & a)
        ) {
          const o = n.oxw(3);
          n.xp6(1),
            n.hij(
              " (Effective date of subscription pause: ",
              n.xi3(2, 1, o.billingInfo.paused_from, "mediumDate"),
              ") "
            );
        }
      }
      function Te(a, r) {
        if (
          (1 & a &&
            (n.TgZ(0, "strong", 15),
            n._UZ(1, "nz-badge", 16),
            n.YNc(2, ze, 2, 2, "ng-template", null, 17, n.W1O),
            n._UZ(4, "br"),
            n.YNc(5, fe, 3, 4, "span", 4),
            n.YNc(6, he, 3, 4, "span", 4),
            n.qZA()),
          2 & a)
        ) {
          const o = n.MAs(3),
            e = n.oxw(2);
          n.xp6(1),
            n.Q6J("nzStatus", e.getPlanStatusColor(e.billingInfo.status))(
              "nzText",
              o
            ),
            n.xp6(4),
            n.Q6J(
              "ngIf",
              e.billingInfo.status === e.subscriptionStatus.DELETED
            ),
            n.xp6(1),
            n.Q6J("ngIf", e.billingInfo.status === e.subscriptionStatus.PAUSED);
        }
      }
      function be(a, r) {
        if (
          (1 & a &&
            (n.TgZ(0, "span"), n.YNc(1, Te, 7, 4, "strong", 14), n.qZA()),
          2 & a)
        ) {
          const o = n.oxw();
          n.xp6(1), n.Q6J("ngIf", !o.billingInfo.trial_in_progress);
        }
      }
      function ve(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "div")(1, "button", 20),
            n.NdJ("click", function () {
              n.CHM(o);
              const t = n.oxw();
              return n.KtG((t.showRedeem = !0));
            }),
            n._uU(2, "Redeem Code"),
            n.qZA()();
        }
      }
      function xe(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "button", 23),
            n.NdJ("click", function () {
              n.CHM(o);
              const t = n.oxw(4);
              return n.KtG(t.showPauseConfirm());
            }),
            n._uU(1, "Pause Plan "),
            n.qZA();
        }
        if (2 & a) {
          const o = n.oxw(4);
          n.Q6J("nzType", "link")("nzLoading", o.pausingPlan);
        }
      }
      function Ce(a, r) {
        if (
          (1 & a && (n.ynx(0), n.YNc(1, xe, 2, 2, "button", 22), n.BQk()),
          2 & a)
        ) {
          const o = n.oxw(3);
          n.xp6(1), n.Q6J("ngIf", o.showPausePlanButton);
        }
      }
      function Ze(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "button", 25),
            n.NdJ("click", function () {
              n.CHM(o);
              const t = n.oxw(4);
              return n.KtG(t.showResumeConfirm());
            }),
            n._uU(1, "Resume Plan "),
            n.qZA();
        }
        if (2 & a) {
          const o = n.oxw(4);
          n.Q6J("nzType", "primary")("nzLoading", o.cancellingPlan);
        }
      }
      function ye(a, r) {
        if (
          (1 & a && (n.ynx(0), n.YNc(1, Ze, 2, 2, "button", 24), n.BQk()),
          2 & a)
        ) {
          const o = n.oxw(3);
          n.xp6(1), n.Q6J("ngIf", o.showResumePlanButton);
        }
      }
      function Ae(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "button", 27),
            n.NdJ("click", function () {
              n.CHM(o);
              const t = n.oxw(4);
              return n.KtG((t.isVisible = !0));
            }),
            n._uU(1, "Upgrade Plan"),
            n.qZA();
        }
        2 & a && n.Q6J("nzType", "primary");
      }
      function Pe(a, r) {
        if (
          (1 & a && (n.ynx(0), n.YNc(1, Ae, 2, 1, "button", 26), n.BQk()),
          2 & a)
        ) {
          const o = n.oxw(3);
          n.xp6(1), n.Q6J("ngIf", o.billingInfo.trial_in_progress);
        }
      }
      function Ue(a, r) {
        if (1 & a) {
          const o = n.EpF();
          n.TgZ(0, "button", 29),
            n.NdJ("click", function () {
              n.CHM(o);
              const t = n.oxw(4);
              return n.KtG((t.isVisible = !0));
            }),
            n._uU(1, "Change Plan "),
            n.qZA();
        }
        if (2 & a) {
          const o = n.oxw(4);
          n.Q6J("nzType", "primary")(
            "nzLoading",
            o.pausingPlan || o.cancellingPlan
          );
        }
      }
      function Oe(a, r) {
        if (
          (1 & a && (n.ynx(0), n.YNc(1, Ue, 2, 2, "button", 28), n.BQk()),
          2 & a)
        ) {
          const o = n.oxw(3);
          n.xp6(1), n.Q6J("ngIf", o.showChangeButton);
        }
      }
      function we(a, r) {
        1 & a &&
          (n.TgZ(0, "nz-space"),
          n.YNc(1, Ce, 2, 1, "ng-container", 21),
          n.YNc(2, ye, 2, 1, "ng-container", 21),
          n.YNc(3, Pe, 2, 1, "ng-container", 21),
          n.YNc(4, Oe, 2, 1, "ng-container", 21),
          n.qZA());
      }
      function Ne(a, r) {
        if ((1 & a && n.YNc(0, we, 5, 0, "nz-space", 4), 2 & a)) {
          const o = n.oxw();
          n.Q6J("ngIf", !o.billingInfo.is_custom);
        }
      }
      const Me = function () {
        return { rows: 2 };
      };
      let Ie = (() => {
        var a;
        class r {
          get showChangeButton() {
            return (
              !!this.billingInfo.status &&
              [
                this.subscriptionStatus.ACTIVE,
                this.subscriptionStatus.PASTDUE,
              ].includes(this.billingInfo.status)
            );
          }
          get showPausePlanButton() {
            return (
              !!this.billingInfo.status &&
              [
                this.subscriptionStatus.ACTIVE,
                this.subscriptionStatus.PASTDUE,
              ].includes(this.billingInfo.status)
            );
          }
          get showResumePlanButton() {
            return (
              !!this.billingInfo.status &&
              [this.subscriptionStatus.PAUSED].includes(this.billingInfo.status)
            );
          }
          constructor(e, t) {
            (this.api = e),
              (this.modal = t),
              (this.billingInfo = {}),
              (this.refreshData = new n.vpe()),
              (this.isVisible = !1),
              (this.showRedeem = !1),
              (this.loadingInfo = !1),
              (this.cancellingPlan = !1),
              (this.pausingPlan = !1),
              (this.subscriptionStatus = un);
          }
          ngOnInit() {
            this.getBillingAccountInfo();
          }
          getBillingAccountInfo() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                e.loadingInfo = !0;
                const t = yield e.api.getBillingAccountInfo();
                t.done && ((e.loadingInfo = !1), (e.billingInfo = t.body));
              } catch (t) {
                (e.loadingInfo = !1), (0, m.tu)(t);
              }
            })();
          }
          getPlanStatus(e) {
            return "deleted" === e ? "Cancelled" : e;
          }
          getPlanStatusColor(e) {
            switch (e) {
              case "deleted":
                return "error";
              case "active":
              default:
                return "success";
              case "past_due":
              case "paused":
                return "warning";
            }
          }
          confirmPauseSubscription() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                (e.pausingPlan = !0),
                  (yield e.api.pauseSubscription()).done &&
                    setTimeout(() => {
                      (e.pausingPlan = !1),
                        e.getBillingAccountInfo(),
                        y.s.track(A.If);
                    }, 8e3),
                  (e.pausingPlan = !1);
              } catch (t) {
                (e.pausingPlan = !1), (0, m.tu)(t);
              }
            })();
          }
          confirmResumeSubscription() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                (e.cancellingPlan = !0),
                  (yield e.api.resumeSubscription()).done &&
                    setTimeout(() => {
                      (e.cancellingPlan = !1),
                        e.getBillingAccountInfo(),
                        y.s.track(A.xz);
                    }, 8e3);
              } catch (t) {
                (e.cancellingPlan = !1), (0, m.tu)(t);
              }
            })();
          }
          showPauseConfirm() {
            this.modal.confirm({
              nzTitle:
                "<i>Are you sure you want to pause your current subscription?</i>",
              nzContent:
                "<b>You can easily restart the subscription at a later time if the need arises.</b>",
              nzOnOk: () => this.confirmPauseSubscription(),
            });
          }
          showResumeConfirm() {
            this.modal.confirm({
              nzTitle:
                "<i>Are you sure you want to resume your paused subscription?</i>",
              nzOnOk: () => this.confirmResumeSubscription(),
            });
          }
          paddleCallback() {
            this.getBillingAccountInfo(), this.refreshData.emit();
          }
          planUpgraded() {
            (this.isVisible = !1), this.getBillingAccountInfo();
          }
          shouldShowRedeemButton() {
            return (
              !!this.billingInfo?.trial_in_progress ||
              (!!this.billingInfo?.ltd_users &&
                this.billingInfo?.ltd_users < 50)
            );
          }
        }
        return (
          ((a = r).ɵfac = function (e) {
            return new (e || a)(n.Y36(f), n.Y36(X.Sf));
          }),
          (a.ɵcmp = n.Xpm({
            type: a,
            selectors: [["worklenz-current-plan-details"]],
            inputs: { billingInfo: "billingInfo" },
            outputs: { refreshData: "refreshData" },
            decls: 11,
            vars: 12,
            consts: [
              [1, "h-100", 3, "nzTitle", "nzExtra"],
              [3, "nzActive", "nzLoading", "nzParagraph"],
              [1, "card-content"],
              ["nz-typography", "", 1, "b-65"],
              [4, "ngIf"],
              ["extraTemplate", ""],
              [
                3,
                "isVisible",
                "billingInfo",
                "actionDone",
                "planUpgraded",
                "modalClosed",
              ],
              [3, "isVisible", "modalClosed"],
              ["nz-typography", "", 3, "nzType", 4, "ngIf"],
              [
                "class",
                "text-small",
                "nz-tooltip",
                "",
                3,
                "nzTooltipTitle",
                4,
                "ngIf",
              ],
              ["nz-typography", "", 3, "nzType"],
              ["nz-typography", "", 4, "ngIf"],
              ["nz-typography", ""],
              ["nz-tooltip", "", 1, "text-small", 3, "nzTooltipTitle"],
              ["class", "text-capitalize", 4, "ngIf"],
              [1, "text-capitalize"],
              [3, "nzStatus", "nzText"],
              ["badgeTextTemplate", ""],
              ["class", "text-small", 4, "ngIf"],
              [1, "text-small"],
              ["nz-button", "", "nzType", "link", 1, "mt-2", "p-0", 3, "click"],
              [4, "nzSpaceItem"],
              [
                "nz-button",
                "",
                "nzDanger",
                "",
                "class",
                "mt-2",
                3,
                "nzType",
                "nzLoading",
                "click",
                4,
                "ngIf",
              ],
              [
                "nz-button",
                "",
                "nzDanger",
                "",
                1,
                "mt-2",
                3,
                "nzType",
                "nzLoading",
                "click",
              ],
              [
                "nz-button",
                "",
                "class",
                "mt-2",
                3,
                "nzType",
                "nzLoading",
                "click",
                4,
                "ngIf",
              ],
              ["nz-button", "", 1, "mt-2", 3, "nzType", "nzLoading", "click"],
              [
                "nz-button",
                "",
                "class",
                "mt-2",
                3,
                "nzType",
                "click",
                4,
                "ngIf",
              ],
              ["nz-button", "", 1, "mt-2", 3, "nzType", "click"],
              [
                "nz-button",
                "",
                "class",
                "mt-2 me-2",
                3,
                "nzType",
                "nzLoading",
                "click",
                4,
                "ngIf",
              ],
              [
                "nz-button",
                "",
                1,
                "mt-2",
                "me-2",
                3,
                "nzType",
                "nzLoading",
                "click",
              ],
            ],
            template: function (e, t) {
              if (
                (1 & e &&
                  (n.TgZ(0, "nz-card", 0)(1, "nz-skeleton", 1)(2, "div", 2)(
                    3,
                    "p",
                    3
                  ),
                  n.YNc(4, _e, 8, 4, "span", 4),
                  n.YNc(5, be, 2, 1, "span", 4),
                  n.qZA(),
                  n.YNc(6, ve, 3, 0, "div", 4),
                  n.qZA()(),
                  n.YNc(7, Ne, 1, 1, "ng-template", null, 5, n.W1O),
                  n.qZA(),
                  n.TgZ(9, "worklenz-pricing-plan-modal", 6),
                  n.NdJ("actionDone", function () {
                    return t.paddleCallback();
                  })("planUpgraded", function () {
                    return t.planUpgraded();
                  })("modalClosed", function () {
                    return (t.isVisible = !1);
                  }),
                  n.qZA(),
                  n.TgZ(10, "worklenz-redeem-code-modal", 7),
                  n.NdJ("modalClosed", function () {
                    return (
                      (t.showRedeem = !1),
                      t.getBillingAccountInfo(),
                      t.refreshData.emit()
                    );
                  }),
                  n.qZA()),
                2 & e)
              ) {
                const s = n.MAs(8);
                n.Q6J("nzTitle", "Current Plan Details")("nzExtra", s),
                  n.xp6(1),
                  n.Q6J("nzActive", !0)("nzLoading", t.loadingInfo)(
                    "nzParagraph",
                    n.DdM(11, Me)
                  ),
                  n.xp6(3),
                  n.Q6J(
                    "ngIf",
                    t.billingInfo.status !== t.subscriptionStatus.DELETED
                  ),
                  n.xp6(1),
                  n.Q6J("ngIf", !t.billingInfo.is_ltd_user),
                  n.xp6(1),
                  n.Q6J("ngIf", t.shouldShowRedeemButton()),
                  n.xp6(3),
                  n.Q6J("isVisible", t.isVisible)("billingInfo", t.billingInfo),
                  n.xp6(1),
                  n.Q6J("isVisible", t.showRedeem);
              }
            },
            dependencies: [
              b.O5,
              M.bd,
              I.ZU,
              O.NU,
              O.$1,
              Z.ix,
              w.w,
              J.dQ,
              D.ng,
              F.x7,
              S.SY,
              ie,
              se,
              b.uU,
            ],
          })),
          r
        );
      })();
      const De = ["dataUsageChart"];
      function Se(a, r) {
        1 & a &&
          (n.TgZ(0, "div"),
          n._uU(1, " Charges "),
          n._UZ(2, "span", 22),
          n.qZA()),
          2 & a &&
            (n.xp6(2),
            n.Q6J("nzTooltipTitle", "Charges for the current billing cycle"));
      }
      function Je(a, r) {
        if (
          (1 & a &&
            (n.TgZ(0, "tr")(1, "td"),
            n._uU(2),
            n.qZA(),
            n.TgZ(3, "td"),
            n._uU(4),
            n.ALo(5, "date"),
            n.ALo(6, "date"),
            n.qZA(),
            n.TgZ(7, "td", 23),
            n._uU(8),
            n.qZA(),
            n.TgZ(9, "td", 24),
            n._uU(10),
            n.qZA(),
            n.TgZ(11, "td", 24),
            n._uU(12),
            n.qZA(),
            n.TgZ(13, "td", 24),
            n._uU(14),
            n.qZA()()),
          2 & a)
        ) {
          const o = r.$implicit;
          n.ekj("bg-red", "past_due" === o.status),
            n.xp6(2),
            n.hij("", o.name, " Plan Charge"),
            n.xp6(2),
            n.AsE(
              "",
              n.xi3(5, 11, o.start_date, "longDate"),
              " - ",
              n.xi3(6, 14, o.end_date, "longDate"),
              " "
            ),
            n.xp6(4),
            n.Oqu(o.status),
            n.xp6(2),
            n.AsE("", o.currency, " ", o.unit_price, ""),
            n.xp6(2),
            n.Oqu(o.quantity),
            n.xp6(2),
            n.AsE("", o.currency, " ", o.amount, "");
        }
      }
      function qe(a, r) {
        if (
          (1 & a &&
            (n.TgZ(0, "tr")(1, "td"),
            n._uU(2, "Additional Storage Purchase (25GB)"),
            n.qZA(),
            n.TgZ(3, "td"),
            n._uU(4),
            n.ALo(5, "date"),
            n.ALo(6, "date"),
            n.qZA(),
            n.TgZ(7, "td", 23),
            n._uU(8),
            n.qZA(),
            n.TgZ(9, "td", 24),
            n._uU(10, "-"),
            n.qZA(),
            n.TgZ(11, "td", 24),
            n._uU(12, "-"),
            n.qZA(),
            n.TgZ(13, "td", 24),
            n._uU(14),
            n.qZA()()),
          2 & a)
        ) {
          const o = n.oxw();
          n.xp6(4),
            n.AsE(
              "",
              n.xi3(5, 4, o.charges[0].start_date, "longDate"),
              " - ",
              n.xi3(6, 7, o.charges[0].end_date, "longDate"),
              " "
            ),
            n.xp6(4),
            n.Oqu(o.charges[0].status),
            n.xp6(6),
            n.hij("", o.charges[0].currency, " 4.00");
        }
      }
      function Qe(a, r) {
        if (
          (1 & a &&
            (n.TgZ(0, "tr")(1, "td"),
            n._uU(2),
            n.qZA(),
            n.TgZ(3, "td"),
            n._uU(4),
            n.ALo(5, "date"),
            n.qZA(),
            n.TgZ(6, "td"),
            n._uU(7),
            n.ALo(8, "date"),
            n.ALo(9, "date"),
            n.qZA(),
            n.TgZ(10, "td", 23),
            n._uU(11),
            n.qZA(),
            n.TgZ(12, "td", 23),
            n._UZ(13, "nz-badge", 25),
            n.qZA(),
            n.TgZ(14, "td")(15, "a", 26),
            n._UZ(16, "span", 27),
            n.qZA()()()),
          2 & a)
        ) {
          const o = r.$implicit;
          n.xp6(2),
            n.Oqu(o.subscription_payment_id),
            n.xp6(2),
            n.Oqu(n.xi3(5, 11, o.event_time, "longDate")),
            n.xp6(3),
            n.AsE(
              "",
              n.xi3(8, 14, o.event_time, "longDate"),
              " - ",
              n.xi3(9, 17, o.next_bill_date, "longDate"),
              ""
            ),
            n.xp6(4),
            n.Oqu(o.payment_method),
            n.xp6(2),
            n.Q6J("nzStatus", o.payment_status || "")(
              "nzText",
              o.payment_status || ""
            ),
            n.xp6(2),
            n.Q6J("nzType", "default")("nzSize", "small")(
              "href",
              o.receipt_url,
              n.LSH
            )("nzTooltipTitle", "View Receipt");
        }
      }
      const Fe = function () {
          return [20, 0];
        },
        ke = function () {
          return { rows: 2 };
        };
      let Le = (() => {
        var a;
        class r {
          get total() {
            return 0;
          }
          constructor(e) {
            (this.api = e),
              (this.loadingStorage = !1),
              (this.loadingTransactions = !1),
              (this.loadingCharges = !1),
              (this.options = {}),
              (this.storage = {}),
              (this.transactions = []),
              (this.charges = []),
              (this.modifiers = []),
              (this.formatOne = (t) => `${t}% Used`);
          }
          ngOnInit() {
            this.getTransactions(),
              this.getCharges(),
              this.getBillingAccountStorage(),
              y.s.track(A.SU);
          }
          getTransactions() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                e.loadingTransactions = !0;
                const t = yield e.api.getTransactions();
                t.done &&
                  ((e.transactions = t.body), (e.loadingTransactions = !1));
              } catch {
                e.loadingTransactions = !1;
              }
            })();
          }
          getCharges() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                e.loadingCharges = !0;
                const t = yield e.api.getCharges();
                t.done &&
                  ((e.charges = t.body.plan_charges ?? []),
                  (e.modifiers = t.body.modifiers ?? []),
                  (e.loadingCharges = !1));
              } catch {
                e.loadingCharges = !1;
              }
            })();
          }
          formatBytes(e = 0, t = 2) {
            if (!+e) return "0 GB";
            const _ = t < 0 ? 0 : t,
              x = Math.floor(Math.log(e) / Math.log(1024));
            return `${parseFloat((e / Math.pow(1024, x)).toFixed(_))} ${
              ["Bytes", "KB", "MB", "GB", "TB"][x]
            }`;
          }
          getBillingAccountStorage() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                e.loadingStorage = !0;
                const t = yield e.api.getBillingAccountStorage();
                t.done && ((e.loadingStorage = !1), (e.storage = t.body));
              } catch (t) {
                (e.loadingStorage = !1), (0, m.tu)(t);
              }
            })();
          }
          refreshData() {
            this.getCharges(),
              this.getTransactions(),
              this.getBillingAccountStorage();
          }
        }
        return (
          ((a = r).ɵfac = function (e) {
            return new (e || a)(n.Y36(f));
          }),
          (a.ɵcmp = n.Xpm({
            type: a,
            selectors: [["worklenz-current-bill"]],
            viewQuery: function (e, t) {
              if ((1 & e && n.Gf(De, 5), 2 & e)) {
                let s;
                n.iGM((s = n.CRH())) && (t.dataUsageChart = s.first);
              }
            },
            decls: 61,
            vars: 23,
            consts: [
              ["nz-row", "", 3, "nzGutter"],
              ["nz-col", "", "nzSpan", "16"],
              [3, "refreshData"],
              ["nz-col", "", "nzSpan", "8"],
              [1, "h-100", 3, "nzTitle"],
              [3, "nzActive", "nzLoading", "nzParagraph"],
              [1, "card-content"],
              [1, "row"],
              [1, "col-md-4"],
              [
                "nzType",
                "circle",
                1,
                "storage-text",
                3,
                "nzPercent",
                "nzWidth",
                "nzFormat",
              ],
              [1, "col-md-8"],
              [1, "mt-4", 3, "nzTitle"],
              ["chargesTitleTemplate", ""],
              [3, "nzNoResult", "nzData", "nzShowPagination"],
              ["chargesTable", ""],
              ["scope", "col"],
              [3, "bg-red", 4, "ngFor", "ngForOf"],
              [4, "ngFor", "ngForOf"],
              [1, "mt-4"],
              [3, "nzTitle"],
              [
                3,
                "nzNoResult",
                "nzData",
                "nzLoading",
                "nzShowPagination",
                "nzPaginationType",
              ],
              ["transactionsTable", ""],
              [
                "nz-icon",
                "",
                "nzType",
                "info-circle",
                "nzTheme",
                "twotone",
                "nz-tooltip",
                "",
                3,
                "nzTooltipTitle",
              ],
              [1, "text-capitalize"],
              [1, "text-end"],
              [3, "nzStatus", "nzText"],
              [
                "nz-button",
                "",
                "target",
                "_blank",
                "nz-tooltip",
                "",
                3,
                "nzType",
                "nzSize",
                "href",
                "nzTooltipTitle",
              ],
              ["nz-icon", "", "nzType", "container"],
            ],
            template: function (e, t) {
              if (
                (1 & e &&
                  (n.TgZ(0, "div", 0)(1, "div", 1)(
                    2,
                    "worklenz-current-plan-details",
                    2
                  ),
                  n.NdJ("refreshData", function () {
                    return t.refreshData();
                  }),
                  n.qZA()(),
                  n.TgZ(3, "div", 3)(4, "nz-card", 4)(5, "nz-skeleton", 5)(
                    6,
                    "div",
                    6
                  )(7, "div", 7)(8, "div", 8),
                  n._UZ(9, "nz-progress", 9),
                  n.qZA(),
                  n.TgZ(10, "div", 10),
                  n._uU(11, " Used: "),
                  n.TgZ(12, "strong"),
                  n._uU(13),
                  n.qZA(),
                  n._UZ(14, "br"),
                  n._uU(15, " Remaining: "),
                  n.TgZ(16, "strong"),
                  n._uU(17),
                  n.qZA()()()()()()()(),
                  n.TgZ(18, "nz-card", 11),
                  n.YNc(19, Se, 3, 1, "ng-template", null, 12, n.W1O),
                  n.TgZ(21, "div", 6)(22, "nz-table", 13, 14)(24, "thead")(
                    25,
                    "tr"
                  )(26, "th", 15),
                  n._uU(27, "Description"),
                  n.qZA(),
                  n.TgZ(28, "th", 15),
                  n._uU(29, "Billing Period"),
                  n.qZA(),
                  n.TgZ(30, "th", 15),
                  n._uU(31, "Bill Status"),
                  n.qZA(),
                  n.TgZ(32, "th", 15),
                  n._uU(33, "Per User Value"),
                  n.qZA(),
                  n.TgZ(34, "th", 15),
                  n._uU(35, "Users"),
                  n.qZA(),
                  n.TgZ(36, "th", 15),
                  n._uU(37, "Amount"),
                  n.qZA()()(),
                  n.TgZ(38, "tbody"),
                  n.YNc(39, Je, 15, 17, "tr", 16),
                  n.YNc(40, qe, 15, 10, "tr", 17),
                  n.qZA()()()(),
                  n._UZ(41, "div", 18),
                  n.TgZ(42, "nz-card", 19)(43, "div", 6)(
                    44,
                    "nz-table",
                    20,
                    21
                  )(46, "thead")(47, "tr")(48, "th", 15),
                  n._uU(49, "Transaction ID"),
                  n.qZA(),
                  n.TgZ(50, "th", 15),
                  n._uU(51, "Transaction Date"),
                  n.qZA(),
                  n.TgZ(52, "th", 15),
                  n._uU(53, "Billing Period"),
                  n.qZA(),
                  n.TgZ(54, "th", 15),
                  n._uU(55, "Payment Method"),
                  n.qZA(),
                  n.TgZ(56, "th", 15),
                  n._uU(57, "Status"),
                  n.qZA(),
                  n._UZ(58, "th", 15),
                  n.qZA()(),
                  n.TgZ(59, "tbody"),
                  n.YNc(60, Qe, 17, 20, "tr", 17),
                  n.qZA()()()()),
                2 & e)
              ) {
                const s = n.MAs(20),
                  _ = n.MAs(23),
                  C = n.MAs(45);
                n.Q6J("nzGutter", n.DdM(21, Fe)),
                  n.xp6(4),
                  n.Q6J("nzTitle", "Account Storage"),
                  n.xp6(1),
                  n.Q6J("nzActive", !0)("nzLoading", t.loadingStorage)(
                    "nzParagraph",
                    n.DdM(22, ke)
                  ),
                  n.xp6(4),
                  n.Q6J("nzPercent", t.storage.used_percent)("nzWidth", 80)(
                    "nzFormat",
                    t.formatOne
                  ),
                  n.xp6(4),
                  n.Oqu(t.formatBytes(t.storage.used, 1)),
                  n.xp6(4),
                  n.Oqu(t.formatBytes(t.storage.remaining, 1)),
                  n.xp6(1),
                  n.Q6J("nzTitle", s),
                  n.xp6(4),
                  n.Q6J("nzData", t.charges)("nzShowPagination", !1),
                  n.xp6(17),
                  n.Q6J("ngForOf", _.data),
                  n.xp6(1),
                  n.Q6J("ngForOf", t.modifiers),
                  n.xp6(2),
                  n.Q6J("nzTitle", "Invoices"),
                  n.xp6(2),
                  n.Q6J("nzData", t.transactions)(
                    "nzLoading",
                    t.loadingTransactions
                  )("nzShowPagination", !1)("nzPaginationType", "small"),
                  n.xp6(16),
                  n.Q6J("ngForOf", C.data);
              }
            },
            dependencies: [
              b.sg,
              N.Ls,
              M.bd,
              z.N8,
              z.Uo,
              z._C,
              z.Om,
              z.p0,
              z.$Z,
              q.t3,
              q.SK,
              Z.ix,
              w.w,
              D.ng,
              F.x7,
              S.SY,
              fn.M,
              Ie,
              b.uU,
            ],
            styles: [
              ".card-content[_ngcontent-%COMP%]{padding-top:8px}h4[_ngcontent-%COMP%]{font-size:16px}p[_ngcontent-%COMP%]{margin-bottom:8px}.b-65[_ngcontent-%COMP%]{color:#000000a6}.left-td[_ngcontent-%COMP%]{width:250px}.text-small[_ngcontent-%COMP%]{font-size:12px}.bg-red[_ngcontent-%COMP%]{background-color:hwb(0 29% 0%/.05)}.text-red[_ngcontent-%COMP%]{color:#ff4949}.text-16[_ngcontent-%COMP%]{font-size:16px}body[_ngcontent-%COMP%]{background-image:linear-gradient(180deg,var(--bs-body-secondary-bg),var(--bs-body-bg) 100px,var(--bs-body-bg))}.container[_ngcontent-%COMP%]{max-width:960px}nz-progress[_ngcontent-%COMP%]{margin-right:8px;margin-bottom:8px;display:inline-block}",
            ],
          })),
          r
        );
      })();
      var Tn = c(66987);
      function Ee(a, r) {
        1 & a &&
          (n.TgZ(0, "span", 24)(1, "strong"),
          n._uU(2, "Company Details"),
          n.qZA()());
      }
      function Be(a, r) {
        if ((1 & a && n._UZ(0, "nz-option", 25), 2 & a)) {
          const o = r.$implicit;
          n.Q6J("nzLabel", o.name + " - (" + o.code + ")")("nzValue", o.id);
        }
      }
      let Ye = (() => {
        var a;
        class r {
          constructor(e, t) {
            (this.fb = e),
              (this.api = t),
              (this.loading = !1),
              (this.loadingCountries = !1),
              (this.updating = !1),
              (this.countries = []),
              (this.validateForm = this.fb.group({
                name: [null, [p.kI.required]],
                company_name: [null],
                email: [null],
                phone: [null, p.kI.pattern("^[0-9]*$")],
                address_line_1: [null],
                address_line_2: [null],
                country: [null],
                city: [null],
                state: [null],
                postal_code: [null],
              })),
              this.validateForm.controls.email.disable();
          }
          ngOnInit() {
            this.getBillingConfiguration(), this.getCountries();
          }
          getBillingConfiguration() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                e.loading = !0;
                const t = yield e.api.getBillingConfiguration();
                t.done && ((e.loading = !1), e.validateForm.setValue(t.body));
              } catch (t) {
                (e.loading = !1), (0, m.tu)(t);
              }
            })();
          }
          getCountries() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                e.loadingCountries = !0;
                const t = yield e.api.getCountries();
                t.done && ((e.loadingCountries = !1), (e.countries = t.body));
              } catch (t) {
                (e.loadingCountries = !1), (0, m.tu)(t);
              }
            })();
          }
          updateForm() {
            var e = this;
            return (0, i.Z)(function* () {
              try {
                (e.updating = !0),
                  (yield e.api.updateBillingConfiguration(e.validateForm.value))
                    .done && ((e.updating = !1), e.getBillingConfiguration());
              } catch (t) {
                (e.updating = !1), (0, m.tu)(t);
              }
            })();
          }
        }
        return (
          ((a = r).ɵfac = function (e) {
            return new (e || a)(n.Y36(p.qu), n.Y36(f));
          }),
          (a.ɵcmp = n.Xpm({
            type: a,
            selectors: [["worklenz-configuration"]],
            decls: 72,
            vars: 20,
            consts: [
              [3, "nzTitle", "nzLoading"],
              ["nz-form", "", 3, "nzLayout", "formGroup", "ngSubmit"],
              ["nz-row", "", 3, "nzGutter"],
              ["nz-col", "", 3, "nzSpan"],
              ["nzRequired", "", "nzFor", "name"],
              ["nzErrorTip", "Name is required!"],
              [
                "formControlName",
                "name",
                "nz-input",
                "",
                "placeholder",
                "Name",
              ],
              ["nzRequired", "", "nzFor", "email"],
              [
                "readonly",
                "",
                "formControlName",
                "email",
                "nz-input",
                "",
                "type",
                "email",
                "placeholder",
                "Email address",
              ],
              ["nzFor", "phone"],
              ["nzErrorTip", "Only numbers are allowed!"],
              [
                "formControlName",
                "phone",
                "nz-input",
                "",
                "type",
                "number",
                "placeholder",
                "Phone number",
              ],
              ["nzOrientation", "left", 3, "nzText"],
              ["companyDetails", ""],
              ["nzFor", "company_name"],
              [
                "formControlName",
                "company_name",
                "nz-input",
                "",
                "type",
                "text",
                "placeholder",
                "Company name",
              ],
              [
                "formControlName",
                "address_line_1",
                "nz-input",
                "",
                "type",
                "text",
                "placeholder",
                "Address Line 01",
              ],
              [
                "formControlName",
                "address_line_2",
                "nz-input",
                "",
                "type",
                "text",
                "placeholder",
                "Address Line 02",
              ],
              [
                "nzShowSearch",
                "",
                "nzAllowClear",
                "",
                "nzPlaceHolder",
                "Country",
                "formControlName",
                "country",
              ],
              [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"],
              [
                "formControlName",
                "city",
                "nz-input",
                "",
                "type",
                "text",
                "placeholder",
                "City",
              ],
              [
                "formControlName",
                "state",
                "nz-input",
                "",
                "type",
                "text",
                "placeholder",
                "State",
              ],
              [
                "formControlName",
                "postal_code",
                "nz-input",
                "",
                "type",
                "text",
                "placeholder",
                "Postal code",
              ],
              [
                "nz-button",
                "",
                "nzType",
                "primary",
                3,
                "disabled",
                "nzLoading",
              ],
              ["nz-typography", ""],
              [3, "nzLabel", "nzValue"],
            ],
            template: function (e, t) {
              if (
                (1 & e &&
                  (n.TgZ(0, "nz-card", 0)(1, "form", 1),
                  n.NdJ("ngSubmit", function () {
                    return t.updateForm();
                  }),
                  n.TgZ(2, "div", 2)(3, "div", 3)(4, "nz-form-item")(
                    5,
                    "nz-form-label",
                    4
                  ),
                  n._uU(6, "Name"),
                  n.qZA(),
                  n.TgZ(7, "nz-form-control", 5),
                  n._UZ(8, "input", 6),
                  n.qZA()()(),
                  n.TgZ(9, "div", 3)(10, "nz-form-item")(
                    11,
                    "nz-form-label",
                    7
                  ),
                  n._uU(12, "Email Address"),
                  n.qZA(),
                  n.TgZ(13, "nz-form-control"),
                  n._UZ(14, "input", 8),
                  n.qZA()()(),
                  n.TgZ(15, "div", 3)(16, "nz-form-item")(
                    17,
                    "nz-form-label",
                    9
                  ),
                  n._uU(18, "Contact Number"),
                  n.qZA(),
                  n.TgZ(19, "nz-form-control", 10),
                  n._UZ(20, "input", 11),
                  n.qZA()()()(),
                  n._UZ(21, "nz-divider", 12),
                  n.YNc(22, Ee, 3, 0, "ng-template", null, 13, n.W1O),
                  n.TgZ(24, "div", 2)(25, "div", 3)(26, "nz-form-item")(
                    27,
                    "nz-form-label",
                    14
                  ),
                  n._uU(28, "Company Name(Optional)"),
                  n.qZA(),
                  n.TgZ(29, "nz-form-control"),
                  n._UZ(30, "input", 15),
                  n.qZA()()(),
                  n.TgZ(31, "div", 3)(32, "nz-form-item")(
                    33,
                    "nz-form-label",
                    9
                  ),
                  n._uU(34, "Address Line 01"),
                  n.qZA(),
                  n.TgZ(35, "nz-form-control"),
                  n._UZ(36, "input", 16),
                  n.qZA()()(),
                  n.TgZ(37, "div", 3)(38, "nz-form-item")(
                    39,
                    "nz-form-label",
                    9
                  ),
                  n._uU(40, "Address Line 02"),
                  n.qZA(),
                  n.TgZ(41, "nz-form-control"),
                  n._UZ(42, "input", 17),
                  n.qZA()()(),
                  n.TgZ(43, "div", 3)(44, "nz-form-item")(
                    45,
                    "nz-form-label",
                    9
                  ),
                  n._uU(46, "Country"),
                  n.qZA(),
                  n.TgZ(47, "nz-form-control")(48, "nz-select", 18),
                  n.YNc(49, Be, 1, 2, "nz-option", 19),
                  n.qZA()()()(),
                  n.TgZ(50, "div", 3)(51, "nz-form-item")(
                    52,
                    "nz-form-label",
                    9
                  ),
                  n._uU(53, "City"),
                  n.qZA(),
                  n.TgZ(54, "nz-form-control"),
                  n._UZ(55, "input", 20),
                  n.qZA()()(),
                  n.TgZ(56, "div", 3)(57, "nz-form-item")(
                    58,
                    "nz-form-label",
                    9
                  ),
                  n._uU(59, "State"),
                  n.qZA(),
                  n.TgZ(60, "nz-form-control"),
                  n._UZ(61, "input", 21),
                  n.qZA()()(),
                  n.TgZ(62, "div", 3)(63, "nz-form-item")(
                    64,
                    "nz-form-label",
                    9
                  ),
                  n._uU(65, "Postal Code"),
                  n.qZA(),
                  n.TgZ(66, "nz-form-control"),
                  n._UZ(67, "input", 22),
                  n.qZA()()()(),
                  n.TgZ(68, "nz-form-item")(69, "nz-form-control")(
                    70,
                    "button",
                    23
                  ),
                  n._uU(71, "Save"),
                  n.qZA()()()()()),
                2 & e)
              ) {
                const s = n.MAs(23);
                n.Q6J("nzTitle", "Billing Details")(
                  "nzLoading",
                  t.loading || t.updating
                ),
                  n.xp6(1),
                  n.Q6J("nzLayout", "vertical")("formGroup", t.validateForm),
                  n.xp6(1),
                  n.Q6J("nzGutter", 24),
                  n.xp6(1),
                  n.Q6J("nzSpan", 8),
                  n.xp6(6),
                  n.Q6J("nzSpan", 8),
                  n.xp6(6),
                  n.Q6J("nzSpan", 8),
                  n.xp6(6),
                  n.Q6J("nzText", s),
                  n.xp6(3),
                  n.Q6J("nzGutter", 24),
                  n.xp6(1),
                  n.Q6J("nzSpan", 8),
                  n.xp6(6),
                  n.Q6J("nzSpan", 8),
                  n.xp6(6),
                  n.Q6J("nzSpan", 8),
                  n.xp6(6),
                  n.Q6J("nzSpan", 8),
                  n.xp6(6),
                  n.Q6J("ngForOf", t.countries),
                  n.xp6(1),
                  n.Q6J("nzSpan", 8),
                  n.xp6(6),
                  n.Q6J("nzSpan", 8),
                  n.xp6(6),
                  n.Q6J("nzSpan", 8),
                  n.xp6(8),
                  n.Q6J("disabled", !t.validateForm.valid)(
                    "nzLoading",
                    t.updating
                  );
              }
            },
            dependencies: [
              b.sg,
              M.bd,
              I.ZU,
              q.t3,
              q.SK,
              v.Lr,
              v.Nx,
              v.iK,
              v.Fd,
              P.Zp,
              Z.ix,
              w.w,
              J.dQ,
              Y.Ip,
              Y.Vq,
              p._Y,
              p.Fj,
              p.wV,
              p.JJ,
              p.JL,
              p.sg,
              p.u,
              Tn.g,
            ],
            styles: [
              ".ant-progress-text[_ngcontent-%COMP%]{font-size:15px!important}",
            ],
          })),
          r
        );
      })();
      function Ge(a, r) {
        1 & a && n._UZ(0, "worklenz-current-bill");
      }
      function Re(a, r) {
        1 & a && n._UZ(0, "worklenz-configuration");
      }
      const $e = [
        {
          path: "",
          component: Wn,
          children: [
            { path: "", redirectTo: "overview", pathMatch: "full" },
            { path: "overview", component: d },
            { path: "users", component: An },
            { path: "teams", component: Kn },
            {
              path: "billing",
              component: (() => {
                var a;
                class r {}
                return (
                  ((a = r).ɵfac = function (e) {
                    return new (e || a)();
                  }),
                  (a.ɵcmp = n.Xpm({
                    type: a,
                    selectors: [["worklenz-billing-layout"]],
                    decls: 8,
                    vars: 1,
                    consts: [
                      [1, "px-0", 3, "nzGhost"],
                      ["nzTitle", "Current Bill"],
                      ["nz-tab", ""],
                      ["nzTitle", "Configuration"],
                    ],
                    template: function (e, t) {
                      1 & e &&
                        (n.TgZ(
                          0,
                          "nz-page-header",
                          0
                        )(1, "nz-page-header-title"),
                        n._uU(2, "Billing"),
                        n.qZA()(),
                        n.TgZ(3, "nz-tabset")(4, "nz-tab", 1),
                        n.YNc(5, Ge, 1, 0, "ng-template", 2),
                        n.qZA(),
                        n.TgZ(6, "nz-tab", 3),
                        n.YNc(7, Re, 1, 0, "ng-template", 2),
                        n.qZA()()),
                        2 & e && n.Q6J("nzGhost", !1);
                    },
                    dependencies: [T.$O, T.u9, W.xH, W.xw, W.cj, Le, Ye],
                  })),
                  r
                );
              })(),
            },
          ],
        },
      ];
      let He = (() => {
        var a;
        class r {}
        return (
          ((a = r).ɵfac = function (e) {
            return new (e || a)();
          }),
          (a.ɵmod = n.oAB({ type: a })),
          (a.ɵinj = n.cJS({ imports: [U.Bz.forChild($e), U.Bz] })),
          r
        );
      })();
      var Ve = c(62787),
        Ke = c(57907),
        je = c(62612),
        We = c(95717);
      let Xe = (() => {
        var a;
        class r {}
        return (
          ((a = r).ɵfac = function (e) {
            return new (e || a)();
          }),
          (a.ɵmod = n.oAB({ type: a })),
          (a.ɵinj = n.cJS({
            imports: [
              b.ez,
              He,
              K.wm,
              T.KJ,
              pn.ip,
              N.PV,
              M.vh,
              I.ZJ,
              z.HQ,
              O.zf,
              v.U5,
              P.o7,
              Z.sL,
              D.H0,
              F.mS,
              ln.Rt,
              S.cg,
              Ve.b1,
              Ke.aF,
              B.BL,
              Y.LV,
              p.UX,
              mn.o,
              p.u5,
              W.we,
              X.Qp,
              fn.W,
              Tn.S,
              hn.KW,
              zn._p,
              je.Wr,
              We.ic,
            ],
          })),
          r
        );
      })();
    },
    93302: (dn, k, c) => {
      c.d(k, { r: () => A });
      var b = c(26857),
        U = c(10708),
        i = c(69649),
        m = c(65879),
        y = c(69862);
      let A = (() => {
        var n;
        class Q extends b.P {
          constructor(f) {
            super(),
              (this.http = f),
              (this.root = `${this.API_BASE_URL}/project-members`);
          }
          create(f) {
            const T = (0, i.UK)({ current_project_id: f.project_id });
            return this._post(this.http, `${this.root}${T}`, f);
          }
          createByEmail(f) {
            return this._post(this.http, `${this.root}/invite`, f);
          }
          getByProjectId(f) {
            return this._get(this.http, `${this.root}/${f}`);
          }
          deleteById(f, T) {
            const N = (0, i.UK)({ current_project_id: T });
            return (0, U.n)(this.http.delete(`${this.root}/${f}${N}`));
          }
        }
        return (
          ((n = Q).ɵfac = function (f) {
            return new (f || n)(m.LFG(y.eN));
          }),
          (n.ɵprov = m.Yz7({ token: n, factory: n.ɵfac, providedIn: "root" })),
          Q
        );
      })();
    },
    26254: (dn, k, c) => {
      c.d(k, {
        $: () => E,
        $O: () => rn,
        Jp: () => H,
        KJ: () => sn,
        u9: () => R,
        yG: () => $,
      });
      var b = c(49388),
        U = c(96814),
        i = c(65879),
        m = c(8324),
        y = c(62595),
        A = c(97582),
        n = c(78645),
        Q = c(59773),
        L = c(37398),
        f = c(40874),
        T = c(1608),
        N = c(28802);
      function M(l, u) {
        if ((1 & l && (i.ynx(0), i._UZ(1, "span", 9), i.BQk()), 2 & l)) {
          const g = u.$implicit,
            d = i.oxw(2);
          i.xp6(1), i.Q6J("nzType", g || d.getBackIcon());
        }
      }
      function I(l, u) {
        if (1 & l) {
          const g = i.EpF();
          i.TgZ(0, "div", 6),
            i.NdJ("click", function () {
              i.CHM(g);
              const h = i.oxw();
              return i.KtG(h.onBack());
            }),
            i.TgZ(1, "div", 7),
            i.YNc(2, M, 2, 1, "ng-container", 8),
            i.qZA()();
        }
        if (2 & l) {
          const g = i.oxw();
          i.xp6(2), i.Q6J("nzStringTemplateOutlet", g.nzBackIcon);
        }
      }
      function z(l, u) {
        if ((1 & l && (i.ynx(0), i._uU(1), i.BQk()), 2 & l)) {
          const g = i.oxw(2);
          i.xp6(1), i.Oqu(g.nzTitle);
        }
      }
      function O(l, u) {
        if (
          (1 & l &&
            (i.TgZ(0, "span", 10),
            i.YNc(1, z, 2, 1, "ng-container", 8),
            i.qZA()),
          2 & l)
        ) {
          const g = i.oxw();
          i.xp6(1), i.Q6J("nzStringTemplateOutlet", g.nzTitle);
        }
      }
      function P(l, u) {
        1 & l && i.Hsn(0, 6, ["*ngIf", "!nzTitle"]);
      }
      function w(l, u) {
        if ((1 & l && (i.ynx(0), i._uU(1), i.BQk()), 2 & l)) {
          const g = i.oxw(2);
          i.xp6(1), i.Oqu(g.nzSubtitle);
        }
      }
      function D(l, u) {
        if (
          (1 & l &&
            (i.TgZ(0, "span", 11),
            i.YNc(1, w, 2, 1, "ng-container", 8),
            i.qZA()),
          2 & l)
        ) {
          const g = i.oxw();
          i.xp6(1), i.Q6J("nzStringTemplateOutlet", g.nzSubtitle);
        }
      }
      function S(l, u) {
        1 & l && i.Hsn(0, 7, ["*ngIf", "!nzSubtitle"]);
      }
      const p = [
          [["nz-breadcrumb", "nz-page-header-breadcrumb", ""]],
          [["nz-avatar", "nz-page-header-avatar", ""]],
          [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]],
          [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]],
          [["nz-page-header-content"], ["", "nz-page-header-content", ""]],
          [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]],
          [["nz-page-header-title"], ["", "nz-page-header-title", ""]],
          [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]],
        ],
        nn = [
          "nz-breadcrumb[nz-page-header-breadcrumb]",
          "nz-avatar[nz-page-header-avatar]",
          "nz-page-header-tags, [nz-page-header-tags]",
          "nz-page-header-extra, [nz-page-header-extra]",
          "nz-page-header-content, [nz-page-header-content]",
          "nz-page-header-footer, [nz-page-header-footer]",
          "nz-page-header-title, [nz-page-header-title]",
          "nz-page-header-subtitle, [nz-page-header-subtitle]",
        ];
      let R = (() => {
          var l;
          class u {}
          return (
            ((l = u).ɵfac = function (d) {
              return new (d || l)();
            }),
            (l.ɵdir = i.lG2({
              type: l,
              selectors: [
                ["nz-page-header-title"],
                ["", "nz-page-header-title", ""],
              ],
              hostAttrs: [1, "ant-page-header-heading-title"],
              exportAs: ["nzPageHeaderTitle"],
            })),
            u
          );
        })(),
        $ = (() => {
          var l;
          class u {}
          return (
            ((l = u).ɵfac = function (d) {
              return new (d || l)();
            }),
            (l.ɵdir = i.lG2({
              type: l,
              selectors: [
                ["nz-page-header-subtitle"],
                ["", "nz-page-header-subtitle", ""],
              ],
              hostAttrs: [1, "ant-page-header-heading-sub-title"],
              exportAs: ["nzPageHeaderSubtitle"],
            })),
            u
          );
        })(),
        H = (() => {
          var l;
          class u {}
          return (
            ((l = u).ɵfac = function (d) {
              return new (d || l)();
            }),
            (l.ɵdir = i.lG2({
              type: l,
              selectors: [
                ["nz-page-header-extra"],
                ["", "nz-page-header-extra", ""],
              ],
              hostAttrs: [1, "ant-page-header-heading-extra"],
              exportAs: ["nzPageHeaderExtra"],
            })),
            u
          );
        })(),
        E = (() => {
          var l;
          class u {}
          return (
            ((l = u).ɵfac = function (d) {
              return new (d || l)();
            }),
            (l.ɵdir = i.lG2({
              type: l,
              selectors: [
                ["nz-page-header-footer"],
                ["", "nz-page-header-footer", ""],
              ],
              hostAttrs: [1, "ant-page-header-footer"],
              exportAs: ["nzPageHeaderFooter"],
            })),
            u
          );
        })(),
        V = (() => {
          var l;
          class u {}
          return (
            ((l = u).ɵfac = function (d) {
              return new (d || l)();
            }),
            (l.ɵdir = i.lG2({
              type: l,
              selectors: [["nz-breadcrumb", "nz-page-header-breadcrumb", ""]],
              exportAs: ["nzPageHeaderBreadcrumb"],
            })),
            u
          );
        })(),
        rn = (() => {
          var l;
          class u {
            constructor(d, h, v, Z, J, F) {
              (this.location = d),
                (this.nzConfigService = h),
                (this.elementRef = v),
                (this.nzResizeObserver = Z),
                (this.cdr = J),
                (this.directionality = F),
                (this._nzModuleName = "pageHeader"),
                (this.nzBackIcon = null),
                (this.nzGhost = !0),
                (this.nzBack = new i.vpe()),
                (this.compact = !1),
                (this.destroy$ = new n.x()),
                (this.dir = "ltr");
            }
            ngOnInit() {
              this.directionality.change
                ?.pipe((0, Q.R)(this.destroy$))
                .subscribe((d) => {
                  (this.dir = d), this.cdr.detectChanges();
                }),
                (this.dir = this.directionality.value);
            }
            ngAfterViewInit() {
              this.nzResizeObserver
                .observe(this.elementRef)
                .pipe(
                  (0, L.U)(([d]) => d.contentRect.width),
                  (0, Q.R)(this.destroy$)
                )
                .subscribe((d) => {
                  (this.compact = d < 768), this.cdr.markForCheck();
                });
            }
            onBack() {
              if (this.nzBack.observers.length) this.nzBack.emit();
              else {
                if (!this.location)
                  throw new Error(
                    `${T.Bq} you should import 'RouterModule' or register 'Location' if you want to use 'nzBack' default event!`
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
            ((l = u).ɵfac = function (d) {
              return new (d || l)(
                i.Y36(U.Ye, 8),
                i.Y36(f.jY),
                i.Y36(i.SBq),
                i.Y36(N.D3),
                i.Y36(i.sBO),
                i.Y36(b.Is, 8)
              );
            }),
            (l.ɵcmp = i.Xpm({
              type: l,
              selectors: [["nz-page-header"]],
              contentQueries: function (d, h, v) {
                if ((1 & d && (i.Suo(v, E, 5), i.Suo(v, V, 5)), 2 & d)) {
                  let Z;
                  i.iGM((Z = i.CRH())) && (h.nzPageHeaderFooter = Z.first),
                    i.iGM((Z = i.CRH())) &&
                      (h.nzPageHeaderBreadcrumb = Z.first);
                }
              },
              hostAttrs: [1, "ant-page-header"],
              hostVars: 10,
              hostBindings: function (d, h) {
                2 & d &&
                  i.ekj("has-footer", h.nzPageHeaderFooter)(
                    "ant-page-header-ghost",
                    h.nzGhost
                  )("has-breadcrumb", h.nzPageHeaderBreadcrumb)(
                    "ant-page-header-compact",
                    h.compact
                  )("ant-page-header-rtl", "rtl" === h.dir);
              },
              inputs: {
                nzBackIcon: "nzBackIcon",
                nzTitle: "nzTitle",
                nzSubtitle: "nzSubtitle",
                nzGhost: "nzGhost",
              },
              outputs: { nzBack: "nzBack" },
              exportAs: ["nzPageHeader"],
              ngContentSelectors: nn,
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
              template: function (d, h) {
                1 & d &&
                  (i.F$t(p),
                  i.Hsn(0),
                  i.TgZ(1, "div", 0)(2, "div", 1),
                  i.YNc(3, I, 3, 1, "div", 2),
                  i.Hsn(4, 1),
                  i.YNc(5, O, 2, 1, "span", 3),
                  i.YNc(6, P, 1, 0, "ng-content", 4),
                  i.YNc(7, D, 2, 1, "span", 5),
                  i.YNc(8, S, 1, 0, "ng-content", 4),
                  i.Hsn(9, 2),
                  i.qZA(),
                  i.Hsn(10, 3),
                  i.qZA(),
                  i.Hsn(11, 4),
                  i.Hsn(12, 5)),
                  2 & d &&
                    (i.xp6(3),
                    i.Q6J("ngIf", null !== h.nzBackIcon),
                    i.xp6(2),
                    i.Q6J("ngIf", h.nzTitle),
                    i.xp6(1),
                    i.Q6J("ngIf", !h.nzTitle),
                    i.xp6(1),
                    i.Q6J("ngIf", h.nzSubtitle),
                    i.xp6(1),
                    i.Q6J("ngIf", !h.nzSubtitle));
              },
              dependencies: [U.O5, m.f, y.Ls],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, A.gn)([(0, f.oS)()], u.prototype, "nzGhost", void 0),
            u
          );
        })(),
        sn = (() => {
          var l;
          class u {}
          return (
            ((l = u).ɵfac = function (d) {
              return new (d || l)();
            }),
            (l.ɵmod = i.oAB({ type: l })),
            (l.ɵinj = i.cJS({ imports: [b.vT, U.ez, m.T, y.PV] })),
            u
          );
        })();
    },
  },
]);
