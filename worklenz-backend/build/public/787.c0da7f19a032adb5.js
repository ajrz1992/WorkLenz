"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [787],
  {
    99865: (nt, E, a) => {
      a.d(E, { n: () => F });
      var z = a(15861),
        r = a(65879),
        h = a(96814),
        T = a(42840),
        C = a(3599),
        A = a(10095),
        S = a(62595),
        y = a(9691),
        Z = a(41958),
        t = a(76271),
        v = a(60095),
        Q = a(69649),
        R = a(20824),
        U = a(53980),
        O = a(45019),
        N = a(70855);
      const L = ["nameInput"];
      function D(m, x) {
        if (1 & m) {
          const g = r.EpF();
          r.ynx(0),
            r.TgZ(1, "input", 3, 4),
            r.NdJ("ngModelChange", function (p) {
              r.CHM(g);
              const d = r.oxw();
              return r.KtG((d.newCategoryName = p));
            })("blur", function () {
              r.CHM(g);
              const p = r.oxw();
              return r.KtG(p.resetInputMode());
            })("keyup.enter", function (p) {
              r.CHM(g);
              const d = r.oxw();
              return p.stopPropagation(), r.KtG(d.create());
            }),
            r.qZA(),
            r.BQk();
        }
        if (2 & m) {
          const g = r.oxw();
          r.xp6(1), r.Q6J("ngModel", g.newCategoryName)("disabled", g.creating);
        }
      }
      function k(m, x) {
        if (
          (1 & m &&
            (r.TgZ(0, "nz-option", 10),
            r.ALo(1, "safeString"),
            r._uU(2),
            r.qZA()),
          2 & m)
        ) {
          const g = x.$implicit;
          r.Q6J("nzLabel", r.lcZ(1, 3, g.name))("nzValue", g.id),
            r.xp6(2),
            r.hij(" ", g.name, " ");
        }
      }
      function Y(m, x) {
        if (1 & m) {
          const g = r.EpF();
          r.ynx(0),
            r.TgZ(1, "nz-select", 5),
            r.NdJ("ngModelChange", function (p) {
              r.CHM(g);
              const d = r.oxw();
              return r.KtG((d.categoryId = p));
            })("ngModelChange", function (p) {
              r.CHM(g);
              const d = r.oxw();
              return r.KtG(d.onCategoryChange(p));
            }),
            r.YNc(2, k, 3, 5, "nz-option", 6),
            r.TgZ(3, "nz-option", 7)(4, "button", 8),
            r.NdJ("click", function () {
              r.CHM(g);
              const p = r.oxw();
              return r.KtG(p.newCategory());
            }),
            r._UZ(5, "span", 9),
            r._uU(6, " New Category "),
            r.qZA()()(),
            r.BQk();
        }
        if (2 & m) {
          const g = r.oxw();
          r.xp6(1),
            r.Q6J("ngModel", g.categoryId)("nzLoading", g.loading)(
              "nzPlaceHolder",
              "Add a category to the project"
            )("nzDisabled", g.disabled)("nzAllowClear", !0),
            r.xp6(1),
            r.Q6J("ngForOf", g.categories),
            r.xp6(1),
            r.Q6J("nzValue", "add"),
            r.xp6(1),
            r.Q6J("nzType", "dashed")("nzSize", "small"),
            r.xp6(1),
            r.Q6J("nzType", "plus")("nzTheme", "outline");
        }
      }
      let F = (() => {
        var m;
        class x {
          constructor(l, p, d, u) {
            (this.cdr = l),
              (this.api = p),
              (this.ngZone = d),
              (this.projectFormService = u),
              (this.categoryId = null),
              (this.categoryIdChange = new r.vpe()),
              (this.disabled = !1),
              (this.loading = !1),
              (this.creating = !1),
              (this.showCategoryInput = !1),
              (this.categories = []),
              (this.newCategoryName = null);
          }
          ngOnInit() {
            this.get();
          }
          get() {
            var l = this;
            return (0, z.Z)(function* () {
              try {
                l.loading = !0;
                const p = yield l.api.get();
                p.done && (l.categories = p.body), (l.loading = !1);
              } catch (p) {
                (l.loading = !1), (0, Q.tu)(p);
              }
              l.cdr.markForCheck();
            })();
          }
          newCategory() {
            this.showCategoryInput ||
              ((this.newCategoryName = null),
              (this.showCategoryInput = !0),
              this.focusInput(),
              this.cdr.markForCheck());
          }
          onCategoryChange(l) {
            (this.categoryId = l), this.categoryIdChange.emit(this.categoryId);
          }
          resetInputMode() {
            (this.showCategoryInput = !1), (this.newCategoryName = null);
          }
          create() {
            var l = this;
            return (0, z.Z)(function* () {
              if (l.newCategoryName?.trim() && !l.creating) {
                try {
                  l.creating = !0;
                  const p = { name: l.newCategoryName },
                    d = yield l.api.create(p);
                  d.done && (yield l.get(), l.handleCreate(d.body)),
                    (l.creating = !1);
                } catch {
                  l.creating = !1;
                }
                l.cdr.markForCheck();
              }
            })();
          }
          handleCreate(l) {
            this.onCategoryChange(l.id), this.resetInputMode();
          }
          focusInput() {
            this.ngZone.runOutsideAngular(() => {
              setTimeout(() => {
                this.nameInput.nativeElement?.focus();
              });
            });
          }
        }
        return (
          ((m = x).ɵfac = function (l) {
            return new (l || m)(
              r.Y36(r.sBO),
              r.Y36(U.s),
              r.Y36(r.R0b),
              r.Y36(O.s)
            );
          }),
          (m.ɵcmp = r.Xpm({
            type: m,
            selectors: [["worklenz-project-categories-autocomplete"]],
            viewQuery: function (l, p) {
              if ((1 & l && r.Gf(L, 5), 2 & l)) {
                let d;
                r.iGM((d = r.CRH())) && (p.nameInput = d.first);
              }
            },
            inputs: { categoryId: "categoryId", disabled: "disabled" },
            outputs: { categoryIdChange: "categoryIdChange" },
            standalone: !0,
            features: [r.jDz],
            decls: 6,
            vars: 6,
            consts: [
              [3, "nzSpan"],
              [3, "ngSwitch", "nzSpan", "nzExtra"],
              [4, "ngSwitchCase"],
              [
                "nz-input",
                "",
                "placeholder",
                "Enter a name for the category",
                3,
                "ngModel",
                "disabled",
                "ngModelChange",
                "blur",
                "keyup.enter",
              ],
              ["nameInput", ""],
              [
                3,
                "ngModel",
                "nzLoading",
                "nzPlaceHolder",
                "nzDisabled",
                "nzAllowClear",
                "ngModelChange",
              ],
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
              ["nzCustomContent", "", 3, "nzValue"],
              ["nz-button", "", "nzBlock", "", 3, "nzType", "nzSize", "click"],
              ["nz-icon", "", 3, "nzType", "nzTheme"],
              ["nzCustomContent", "", 3, "nzLabel", "nzValue"],
            ],
            template: function (l, p) {
              1 & l &&
                (r.TgZ(0, "nz-form-item")(1, "nz-form-label", 0),
                r._uU(2, "Category"),
                r.qZA(),
                r.TgZ(3, "nz-form-control", 1),
                r.YNc(4, D, 3, 2, "ng-container", 2),
                r.YNc(5, Y, 7, 11, "ng-container", 2),
                r.qZA()()),
                2 & l &&
                  (r.xp6(1),
                  r.Q6J("nzSpan", null),
                  r.xp6(2),
                  r.Q6J("ngSwitch", p.showCategoryInput)("nzSpan", null)(
                    "nzExtra",
                    p.showCategoryInput ? "Hit enter to create!" : ""
                  ),
                  r.xp6(1),
                  r.Q6J("ngSwitchCase", !0),
                  r.xp6(1),
                  r.Q6J("ngSwitchCase", !1));
            },
            dependencies: [
              h.ez,
              h.sg,
              h.RF,
              h.n9,
              T.sL,
              T.ix,
              N.w,
              Z.dQ,
              C.U5,
              A.t3,
              A.SK,
              C.Nx,
              C.iK,
              C.Fd,
              A.Jb,
              S.PV,
              S.Ls,
              y.LV,
              y.Ip,
              y.Vq,
              Z.vG,
              t.m,
              v.UX,
              v.Fj,
              v.JJ,
              v.u5,
              v.On,
              R.o7,
              R.Zp,
            ],
            changeDetection: 0,
          })),
          x
        );
      })();
    },
    71787: (nt, E, a) => {
      a.r(E), a.d(E, { RptProjectsModule: () => Ee });
      var z = a(96814),
        r = a(35420),
        h = a(15861),
        T = a(69649),
        C = a(94489),
        A = a(63392),
        S = a(71993),
        y = a(63019),
        Z = a(21406),
        t = a(65879),
        v = a(90586),
        Q = a(16196),
        R = a(62963),
        U = a(19350),
        O = a(69342),
        N = a(32333),
        L = a(975),
        D = a(52732),
        k = a(88019),
        Y = a(53980),
        F = a(26857),
        m = a(69862);
      let x = (() => {
        var e;
        class s extends F.P {
          constructor(i) {
            super(),
              (this.http = i),
              (this.root = `${this.API_BASE_URL}/project-managers`);
          }
          get() {
            return this._get(this.http, `${this.root}`);
          }
        }
        return (
          ((e = s).ɵfac = function (i) {
            return new (i || e)(t.LFG(m.eN));
          }),
          (e.ɵprov = t.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
          s
        );
      })();
      var g = a(42012),
        l = a(63106),
        p = a(82962),
        d = a(33410),
        u = a(13740),
        W = a(55695),
        $ = a(62595),
        ot = a(92022),
        it = a(65411),
        rt = a(40914),
        at = a(92259),
        I = a(20824),
        M = a(60095),
        G = a(33640),
        B = a(38265),
        b = a(48522),
        V = a(96109),
        st = a(28754),
        ct = a(31930),
        lt = a(71802),
        pt = a(34305),
        _t = a(88903),
        H = a(92574),
        X = a(42840),
        gt = a(70855),
        q = a(41958),
        tt = a(62612),
        K = a(73460),
        w = a(62787),
        et = a(96928),
        dt = a(9172),
        mt = a(44889),
        ht = a(2919);
      function ut(e, s) {
        if (
          (1 & e &&
            (t.TgZ(0, "button", 25),
            t._uU(1, " Status "),
            t._UZ(2, "span", 26),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw(2),
            i = t.MAs(38);
          t.Q6J("nzDropdownMenu", i)("nzClickHide", !1)(
            "nzLoading",
            n.loadingStatuses
          )("nzTrigger", "click");
        }
      }
      function Ct(e, s) {
        if (
          (1 & e &&
            (t.TgZ(0, "button", 25),
            t._uU(1, " Health "),
            t._UZ(2, "span", 26),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw(2),
            i = t.MAs(42);
          t.Q6J("nzDropdownMenu", i)("nzClickHide", !1)(
            "nzLoading",
            n.loadingHealths
          )("nzTrigger", "click");
        }
      }
      function ft(e, s) {
        if (
          (1 & e &&
            (t.TgZ(0, "button", 25),
            t._uU(1, " Category "),
            t._UZ(2, "span", 26),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw(2),
            i = t.MAs(46);
          t.Q6J("nzDropdownMenu", i)("nzClickHide", !1)(
            "nzLoading",
            n.loadingCategories
          )("nzTrigger", "click");
        }
      }
      function zt(e, s) {
        if (
          (1 & e &&
            (t.TgZ(0, "button", 25),
            t._uU(1, " Project Manager "),
            t._UZ(2, "span", 26),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw(2),
            i = t.MAs(54);
          t.Q6J("nzDropdownMenu", i)("nzClickHide", !1)(
            "nzLoading",
            n.loadingProjectManagers
          )("nzTrigger", "click");
        }
      }
      function Tt(e, s) {
        1 & e &&
          (t.TgZ(0, "nz-space"),
          t.YNc(1, ut, 3, 4, "button", 24),
          t.YNc(2, Ct, 3, 4, "button", 24),
          t.YNc(3, ft, 3, 4, "button", 24),
          t.YNc(4, zt, 3, 4, "button", 24),
          t.qZA());
      }
      function xt(e, s) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "li", 34),
            t.NdJ("nzCheckedChange", function (o) {
              const _ = t.CHM(n).$implicit,
                f = t.oxw(2);
              return t.KtG(f.onColumnsToggle(o, _));
            }),
            t._uU(1),
            t.qZA();
        }
        if (2 & e) {
          const n = s.$implicit;
          t.Q6J("nzChecked", n.pinned), t.xp6(1), t.Oqu(n.label);
        }
      }
      function At(e, s) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "button", 27),
            t._UZ(1, "span", 28),
            t._uU(2, " Mostrar Campos "),
            t.qZA(),
            t.TgZ(3, "nz-dropdown-menu", null, 29)(5, "ul", 30),
            t.YNc(6, xt, 2, 2, "li", 31),
            t.qZA()(),
            t.TgZ(7, "nz-input-group", 32)(8, "input", 33),
            t.NdJ("ngModelChange", function (o) {
              t.CHM(n);
              const c = t.oxw();
              return t.KtG((c.searchText = o));
            })("ngModelChange", function () {
              t.CHM(n);
              const o = t.oxw();
              return t.KtG(o.searchProjects());
            }),
            t.qZA()();
        }
        if (2 & e) {
          const n = t.MAs(4),
            i = t.oxw(),
            o = t.MAs(8);
          t.Q6J("nzType", "default")("nzTrigger", "click")(
            "nzLoading",
            i.loading
          )("nzClickHide", !1)("nzDropdownMenu", n),
            t.xp6(1),
            t.Q6J("nzType", "more")("nzTheme", "outline"),
            t.xp6(5),
            t.Q6J("ngForOf", i.columns),
            t.xp6(1),
            t.Q6J("nzSuffix", o),
            t.xp6(1),
            t.Q6J("ngModel", i.searchText);
        }
      }
      function vt(e, s) {
        1 & e && t._UZ(0, "span", 35);
      }
      function jt(e, s) {
        1 & e && (t.TgZ(0, "th", 10), t._uU(1, "Estimated vs Actual"), t.qZA()),
          2 & e && t.Q6J("nzWidth", "230px");
      }
      function Pt(e, s) {
        1 & e && (t.TgZ(0, "th", 10), t._uU(1, "Tasks Progress"), t.qZA()),
          2 & e && t.Q6J("nzWidth", "200px");
      }
      function St(e, s) {
        1 & e && (t.TgZ(0, "th", 10), t._uU(1, "Last Activity"), t.qZA()),
          2 & e && t.Q6J("nzWidth", "250px");
      }
      function yt(e, s) {
        1 & e && (t.TgZ(0, "th", 36), t._uU(1, "Status "), t.qZA()),
          2 & e &&
            t.Q6J("nzWidth", "150px")("nzSortFn", !0)(
              "nzColumnKey",
              "status_id"
            );
      }
      function Mt(e, s) {
        1 & e && (t.TgZ(0, "th", 10), t._uU(1, "Start/End dates"), t.qZA()),
          2 & e && t.Q6J("nzWidth", "275px");
      }
      function Et(e, s) {
        1 & e && (t.TgZ(0, "th", 10), t._uU(1, "Days Left/Overdue"), t.qZA()),
          2 & e && t.Q6J("nzWidth", "170px");
      }
      function Zt(e, s) {
        1 & e && (t.TgZ(0, "th", 36), t._uU(1, " Project Health "), t.qZA()),
          2 & e &&
            t.Q6J("nzWidth", "170px")("nzSortFn", !0)(
              "nzColumnKey",
              "project_health"
            );
      }
      function Rt(e, s) {
        1 & e && (t.TgZ(0, "th", 10), t._uU(1, "Category"), t.qZA()),
          2 & e && t.Q6J("nzWidth", "150px");
      }
      function It(e, s) {
        1 & e && (t.TgZ(0, "th", 10), t._uU(1, "Project Update"), t.qZA()),
          2 & e && t.Q6J("nzWidth", "250px");
      }
      function wt(e, s) {
        1 & e && (t.TgZ(0, "th", 36), t._uU(1, "Client"), t.qZA()),
          2 & e &&
            t.Q6J("nzWidth", "160px")("nzSortFn", !0)("nzColumnKey", "client");
      }
      function Jt(e, s) {
        1 & e && (t.TgZ(0, "th", 36), t._uU(1, "Team"), t.qZA()),
          2 & e &&
            t.Q6J("nzWidth", "150px")("nzSortFn", !0)(
              "nzColumnKey",
              "team_name"
            );
      }
      function Qt(e, s) {
        if ((1 & e && t._UZ(0, "nz-badge", 50), 2 & e)) {
          const n = t.oxw().$implicit;
          t.Q6J("nzColor", n.color_code);
        }
      }
      function Ut(e, s) {
        if ((1 & e && (t.TgZ(0, "span", 51), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.Q6J("nzTooltipTitle", n.name), t.xp6(1), t.Oqu(n.name);
        }
      }
      function Ot(e, s) {
        if (
          (1 & e && t._UZ(0, "worklenz-estimated-vs-actual-chart-common", 53),
          2 & e)
        ) {
          const n = t.oxw(2).$implicit;
          t.Q6J("id", n.id)("actualTime", n.actual_time || 0)(
            "estimatedTime",
            60 * n.estimated_time || 0
          )("actualTimeString", n.actual_time_string || null)(
            "estimatedTimeString",
            n.estimated_time_string || null
          );
        }
      }
      function Nt(e, s) {
        1 & e && t._UZ(0, "worklenz-na");
      }
      function Lt(e, s) {
        if (
          (1 & e &&
            (t.TgZ(0, "td"),
            t.YNc(1, Ot, 1, 5, "worklenz-estimated-vs-actual-chart-common", 52),
            t.YNc(2, Nt, 1, 0, "worklenz-na", 44),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw().$implicit;
          t.xp6(1),
            t.Q6J("ngIf", n.actual_time && n.estimated_time),
            t.xp6(1),
            t.Q6J("ngIf", !n.actual_time || !n.estimated_time);
        }
      }
      function Dt(e, s) {
        if ((1 & e && t._UZ(0, "worklenz-tasks-progress-bar", 55), 2 & e)) {
          const n = t.oxw(2).$implicit;
          t.Q6J("todoProgress", n.tasks_stat.todo)(
            "doingProgress",
            n.tasks_stat.doing
          )("doneProgress", n.tasks_stat.done);
        }
      }
      function kt(e, s) {
        if (
          (1 & e &&
            (t.TgZ(0, "td"),
            t.YNc(1, Dt, 1, 3, "worklenz-tasks-progress-bar", 54),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw().$implicit;
          t.oxw();
          const i = t.MAs(36);
          t.xp6(1),
            t.Q6J(
              "ngIf",
              n.tasks_stat.todo || n.tasks_stat.doing || n.tasks_stat.done
            )("ngIfElse", i);
        }
      }
      function Yt(e, s) {
        if (
          (1 & e &&
            (t.ynx(0), t.TgZ(1, "span", 56), t._uU(2), t.qZA(), t.BQk()),
          2 & e)
        ) {
          const n = t.oxw(2).$implicit;
          t.xp6(1),
            t.Q6J("nzTooltipTitle", n.last_activity.last_activity_string),
            t.xp6(1),
            t.hij(" ", n.last_activity.last_activity_string, ". ");
        }
      }
      function Ft(e, s) {
        1 & e && t._UZ(0, "worklenz-na");
      }
      function Ht(e, s) {
        if (
          (1 & e &&
            (t.TgZ(0, "td", 47),
            t.YNc(1, Yt, 3, 2, "ng-container", 49),
            t.YNc(2, Ft, 1, 0, "worklenz-na", 49),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw().$implicit;
          t.Q6J("ngSwitch", !!n.last_activity),
            t.xp6(1),
            t.Q6J("ngSwitchCase", !0),
            t.xp6(1),
            t.Q6J("ngSwitchCase", !1);
        }
      }
      function Kt(e, s) {
        if (
          (1 & e &&
            (t.TgZ(0, "td"), t._UZ(1, "worklenz-project-status", 57), t.qZA()),
          2 & e)
        ) {
          const n = t.oxw().$implicit,
            i = t.oxw();
          t.xp6(1), t.Q6J("projStatuses", i.projectStatuses)("project", n);
        }
      }
      function Wt(e, s) {
        if (
          (1 & e &&
            (t.TgZ(0, "td"),
            t._UZ(1, "worklenz-project-start-end-dates", 58),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Q6J("project", n);
        }
      }
      function $t(e, s) {
        if ((1 & e && (t.TgZ(0, "span", 61), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw(3).$implicit;
          t.xp6(1), t.hij("", n.days_left, " days overdue");
        }
      }
      function Gt(e, s) {
        1 & e && (t.TgZ(0, "span", 63), t._uU(1, "Today"), t.qZA());
      }
      function Bt(e, s) {
        if ((1 & e && (t.TgZ(0, "span", 63), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw(4).$implicit;
          t.xp6(1), t.hij(" ", n.days_left, " days left");
        }
      }
      function bt(e, s) {
        if (
          (1 & e &&
            (t.TgZ(0, "span"),
            t.YNc(1, Gt, 2, 0, "span", 62),
            t.YNc(2, Bt, 2, 1, "span", 62),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw(3).$implicit;
          t.xp6(1),
            t.Q6J("ngIf", n.is_today),
            t.xp6(1),
            t.Q6J("ngIf", !n.is_today);
        }
      }
      function Vt(e, s) {
        if (
          (1 & e &&
            (t.ynx(0)(1, 47),
            t.YNc(2, $t, 2, 1, "span", 60),
            t.YNc(3, bt, 3, 2, "span", 49),
            t.BQk()()),
          2 & e)
        ) {
          const n = t.oxw(2).$implicit;
          t.xp6(1),
            t.Q6J("ngSwitch", n.is_overdue),
            t.xp6(1),
            t.Q6J("ngSwitchCase", !0),
            t.xp6(1),
            t.Q6J("ngSwitchCase", !1);
        }
      }
      function Xt(e, s) {
        if (
          (1 & e &&
            (t.TgZ(0, "td"), t.YNc(1, Vt, 4, 3, "ng-container", 59), t.qZA()),
          2 & e)
        ) {
          const n = t.oxw().$implicit;
          t.oxw();
          const i = t.MAs(36);
          t.xp6(1), t.Q6J("ngIf", null !== n.days_left)("ngIfElse", i);
        }
      }
      function qt(e, s) {
        if (
          (1 & e &&
            (t.TgZ(0, "td"),
            t._UZ(1, "worklenz-project-health-selector", 64),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw().$implicit,
            i = t.oxw();
          t.xp6(1), t.Q6J("project", n)("projHealths", i.projHealths);
        }
      }
      function te(e, s) {
        if (
          (1 & e &&
            (t.TgZ(0, "td"),
            t._UZ(1, "worklenz-project-category", 65),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Q6J("teamId", n.team_id)("project", n);
        }
      }
      function ee(e, s) {
        if ((1 & e && (t.ynx(0), t._UZ(1, "span", 68), t.BQk()), 2 & e)) {
          t.oxw();
          const n = t.MAs(4),
            i = t.oxw().$implicit;
          t.xp6(1), t.Q6J("innerHTML", i.comment, t.oJD)("nzTooltipTitle", n);
        }
      }
      function ne(e, s) {
        1 & e && t._UZ(0, "worklenz-na");
      }
      function oe(e, s) {
        if ((1 & e && t._UZ(0, "span", 69), 2 & e)) {
          const n = t.oxw(2).$implicit;
          t.Q6J("innerHTML", n.comment, t.oJD);
        }
      }
      function ie(e, s) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "td", 66),
            t.NdJ("click", function () {
              t.CHM(n);
              const o = t.oxw().$implicit,
                c = t.oxw();
              return t.KtG(c.openUpdates(o));
            }),
            t.YNc(1, ee, 2, 2, "ng-container", 49),
            t.YNc(2, ne, 1, 0, "worklenz-na", 49),
            t.YNc(3, oe, 1, 1, "ng-template", null, 67, t.W1O),
            t.qZA();
        }
        if (2 & e) {
          const n = t.oxw().$implicit;
          t.Q6J("ngSwitch", !!n.comment),
            t.xp6(1),
            t.Q6J("ngSwitchCase", !0),
            t.xp6(1),
            t.Q6J("ngSwitchCase", !1);
        }
      }
      function re(e, s) {
        if ((1 & e && (t.ynx(0, 72), t._uU(1), t.BQk()), 2 & e)) {
          const n = t.oxw(2).$implicit;
          t.Q6J("nzTooltipTitle", n.client), t.xp6(1), t.Oqu(n.client);
        }
      }
      function ae(e, s) {
        if (
          (1 & e &&
            (t.TgZ(0, "td")(1, "span", 70),
            t.YNc(2, re, 2, 2, "ng-container", 71),
            t.qZA()()),
          2 & e)
        ) {
          const n = t.oxw().$implicit;
          t.oxw();
          const i = t.MAs(36);
          t.xp6(2), t.Q6J("ngIf", n.client)("ngIfElse", i);
        }
      }
      function se(e, s) {
        if (
          (1 & e && (t.TgZ(0, "td")(1, "nz-tag", 50), t._uU(2), t.qZA()()),
          2 & e)
        ) {
          const n = t.oxw().$implicit;
          t.xp6(1),
            t.Q6J("nzColor", "blue"),
            t.xp6(1),
            t.hij(" ", n.team_name, " ");
        }
      }
      function ce(e, s) {
        if (
          (1 & e &&
            (t.ynx(0, 73),
            t._UZ(1, "nz-avatar", 74),
            t.ALo(2, "firstCharUpper"),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "ellipsis"),
            t.qZA(),
            t.BQk()),
          2 & e)
        ) {
          const n = t.oxw().$implicit,
            i = t.oxw();
          t.Q6J("nz-tooltip", n.project_manager.name),
            t.xp6(1),
            t.Udp(
              "background-color",
              n.project_manager.avatar_url
                ? "#ececec"
                : i.getColor(n.project_manager.name)
            ),
            t.Q6J("nzSize", 28)("nzText", t.lcZ(2, 7, n.project_manager.name))(
              "nzSrc",
              n.project_manager.avatar_url
            ),
            t.xp6(3),
            t.Oqu(t.xi3(5, 9, n.project_manager.name, 15));
        }
      }
      function le(e, s) {
        1 & e && t._UZ(0, "worklenz-na");
      }
      function pe(e, s) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "tr", 37)(1, "td", 38),
            t.NdJ("click", function () {
              const c = t.CHM(n).$implicit,
                _ = t.oxw();
              return t.KtG(_.openProject(c));
            }),
            t.TgZ(2, "div", 39)(3, "nz-space"),
            t.YNc(4, Qt, 1, 1, "nz-badge", 40),
            t.YNc(5, Ut, 2, 2, "span", 41),
            t.qZA(),
            t.TgZ(6, "button", 42),
            t._uU(7, " Open "),
            t._UZ(8, "span", 43),
            t.qZA()()(),
            t.YNc(9, Lt, 3, 2, "td", 44),
            t.YNc(10, kt, 2, 2, "td", 44),
            t.YNc(11, Ht, 3, 3, "td", 45),
            t.YNc(12, Kt, 2, 2, "td", 44),
            t.YNc(13, Wt, 2, 1, "td", 44),
            t.YNc(14, Xt, 2, 2, "td", 44),
            t.YNc(15, qt, 2, 2, "td", 44),
            t.YNc(16, te, 2, 2, "td", 44),
            t.YNc(17, ie, 5, 3, "td", 46),
            t.YNc(18, ae, 3, 2, "td", 44),
            t.YNc(19, se, 3, 2, "td", 44),
            t.TgZ(20, "td", 47),
            t.YNc(21, ce, 6, 12, "ng-container", 48),
            t.YNc(22, le, 1, 0, "worklenz-na", 49),
            t.qZA()();
        }
        if (2 & e) {
          const n = s.$implicit,
            i = t.oxw();
          t.xp6(9),
            t.Q6J("ngIf", i.estimatedActive),
            t.xp6(1),
            t.Q6J("ngIf", i.progressActive),
            t.xp6(1),
            t.Q6J("ngIf", i.lastActivityActive),
            t.xp6(1),
            t.Q6J("ngIf", i.statusActive),
            t.xp6(1),
            t.Q6J("ngIf", i.startEndDateActive),
            t.xp6(1),
            t.Q6J("ngIf", i.daysLeftActive),
            t.xp6(1),
            t.Q6J("ngIf", i.healthActive),
            t.xp6(1),
            t.Q6J("ngIf", i.categoryActive),
            t.xp6(1),
            t.Q6J("ngIf", i.updateActive),
            t.xp6(1),
            t.Q6J("ngIf", i.clientActive),
            t.xp6(1),
            t.Q6J("ngIf", i.teamActive),
            t.xp6(1),
            t.Q6J("ngSwitch", !!n.project_manager),
            t.xp6(1),
            t.Q6J("ngSwitchCase", !0),
            t.xp6(1),
            t.Q6J("ngSwitchCase", !1);
        }
      }
      function _e(e, s) {
        1 & e && t._UZ(0, "worklenz-na");
      }
      function ge(e, s) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "li", 75),
            t.NdJ("nzCheckedChange", function (o) {
              const _ = t.CHM(n).$implicit;
              return t.KtG((_.selected = o));
            })("nzCheckedChange", function () {
              t.CHM(n);
              const o = t.oxw();
              return t.KtG(o.get());
            }),
            t._uU(1),
            t.qZA();
        }
        if (2 & e) {
          const n = s.$implicit;
          t.Q6J("nzChecked", n.selected), t.xp6(1), t.hij(" ", n.name, " ");
        }
      }
      function de(e, s) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "li", 75),
            t.NdJ("nzCheckedChange", function (o) {
              const _ = t.CHM(n).$implicit;
              return t.KtG((_.selected = o));
            })("nzCheckedChange", function () {
              t.CHM(n);
              const o = t.oxw();
              return t.KtG(o.get());
            }),
            t._uU(1),
            t.qZA();
        }
        if (2 & e) {
          const n = s.$implicit;
          t.Q6J("nzChecked", n.selected), t.xp6(1), t.hij(" ", n.name, " ");
        }
      }
      function me(e, s) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "li", 75),
            t.NdJ("nzCheckedChange", function (o) {
              const _ = t.CHM(n).$implicit;
              return t.KtG((_.selected = o));
            })("nzCheckedChange", function () {
              t.CHM(n);
              const o = t.oxw();
              return t.KtG(o.get());
            }),
            t._UZ(1, "nz-badge", 76),
            t.qZA();
        }
        if (2 & e) {
          const n = s.$implicit;
          t.Q6J("nzChecked", n.selected),
            t.xp6(1),
            t.Q6J("nzColor", n.color_code)("nzText", n.name);
        }
      }
      function he(e, s) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "li", 75),
            t.NdJ("nzCheckedChange", function (o) {
              const _ = t.CHM(n).$implicit;
              return t.KtG((_.selected = o));
            })("nzCheckedChange", function () {
              t.CHM(n);
              const o = t.oxw();
              return t.KtG(o.get());
            }),
            t._uU(1),
            t.qZA();
        }
        if (2 & e) {
          const n = s.$implicit;
          t.Q6J("nzChecked", n.selected), t.xp6(1), t.hij(" ", n.name, " ");
        }
      }
      const ue = function () {
          return { x: "300px" };
        },
        Ce = [
          {
            path: "",
            component: (() => {
              var e;
              class s {
                get filterIndex() {
                  return +(localStorage.getItem(this.FILTER_INDEX_KEY) || 0);
                }
                get columnList() {
                  if (localStorage.hasOwnProperty(this.PROJECT_LIST_COLUMNS))
                    return JSON.parse(
                      localStorage.getItem(this.PROJECT_LIST_COLUMNS) || ""
                    );
                }
                getSelectedStatusIds() {
                  return (
                    this.projectStatuses
                      .filter((c) => c.selected)
                      .map((c) => c.id) || []
                  );
                }
                getSelectedHealthIds() {
                  return (
                    this.projHealths
                      .filter((c) => c.selected)
                      .map((c) => c.id) || []
                  );
                }
                getSelectedCategoryIds() {
                  return (
                    this.projCategories
                      .filter((c) => c.selected)
                      .map((c) => c.id) || []
                  );
                }
                getSelectedProjectManager() {
                  return (
                    this.projectManagers
                      .filter((c) => c.selected)
                      .map((c) => c.id) || []
                  );
                }
                constructor(i, o, c, _, f, j, P, Ze, Re, Ie, we, Je, Qe) {
                  (this.app = i),
                    (this.cdr = o),
                    (this.api = c),
                    (this.drawer = _),
                    (this.projectHealthsApi = f),
                    (this.exportApi = j),
                    (this.auth = P),
                    (this.socket = Ze),
                    (this.statusesApi = Re),
                    (this.projectUpdatesService = Ie),
                    (this.categoriesApi = we),
                    (this.projectManagersApi = Je),
                    (this.service = Qe),
                    (this.FILTER_INDEX_KEY = "worklenz.projects.filter_index"),
                    (this.PROJECT_LIST_COLUMNS =
                      "worklenz.reporting.projects.column_list"),
                    (this.loading = !1),
                    (this.loadingStatuses = !1),
                    (this.loadingHealths = !1),
                    (this.loadingCategories = !1),
                    (this.loadingProjectManagers = !1),
                    (this.projects = []),
                    (this.projHealths = []),
                    (this.projectStatuses = []),
                    (this.projCategories = []),
                    (this.projectManagers = []),
                    (this.total = null),
                    (this.pageSize = 10),
                    (this.pageIndex = 1),
                    (this.paginationSizes = [5, 10, 15, 20, 50, 100]),
                    (this.sortField = null),
                    (this.sortOrder = null),
                    (this.categorySearchText = null),
                    (this.projectManagerSearchText = null),
                    (this.pageTitle = "Expedientes"),
                    (this.COLUMN_KEYS = {
                      CLIENT: "CLIENT",
                      ESTIMATED_VS_ACTUAL: "ESTIMATED_VS_ACTUAL",
                      TASKS_PROGRESS: "TASKS_PROGRESS",
                      LAST_ACTIVITY: "LAST_ACTIVITY",
                      STATUS: "STATUS",
                      START_END_DATE: "START_END_DATE",
                      DAYS_LEFT_OVERDUE: "DAYS_LEFT_OVERDUE",
                      CATEGORY: "CATEGORY",
                      HEALTH: "HEALTH",
                      UPDATE: "UPDATE",
                      TEAM: "TEAM",
                    }),
                    (this.columns = [
                      {
                        key: "ESTIMATED_VS_ACTUAL",
                        label: "Estimated vs Actual",
                        pinned: !0,
                      },
                      {
                        key: "TASKS_PROGRESS",
                        label: "Tasks Progress",
                        pinned: !0,
                      },
                      {
                        key: "LAST_ACTIVITY",
                        label: "Last Activity",
                        pinned: !0,
                      },
                      { key: "STATUS", label: "Status", pinned: !0 },
                      {
                        key: "START_END_DATE",
                        label: "Start/End dates",
                        pinned: !0,
                      },
                      {
                        key: "DAYS_LEFT_OVERDUE",
                        label: "Days Left/Overdue",
                        pinned: !0,
                      },
                      { key: "HEALTH", label: "Project Health", pinned: !0 },
                      { key: "CATEGORY", label: "Category", pinned: !0 },
                      { key: "UPDATE", label: "Project Update", pinned: !0 },
                      { key: "CLIENT", label: "Client", pinned: !0 },
                      { key: "TEAM", label: "Team", pinned: !0 },
                    ]),
                    (this.statusActive = !0),
                    (this.categoryActive = !0),
                    (this.startEndDateActive = !0),
                    (this.daysLeftActive = !0),
                    (this.estimatedActive = !0),
                    (this.progressActive = !0),
                    (this.lastActivityActive = !0),
                    (this.healthActive = !0),
                    (this.updateActive = !0),
                    (this.clientActive = !1),
                    (this.teamActive = !1),
                    (this.projectManagerActive = !0),
                    (this.newCategoryReceived = (J) => {
                      J &&
                        (this.projCategories.push({
                          id: J.category_id,
                          name: J.category_name,
                          color_code: J.category_color,
                          selected: !1,
                        }),
                        this.cdr.markForCheck());
                    }),
                    (this.refreshWithoutLoading = () => {
                      this.get(!1);
                    }),
                    this.app.setTitle("Reporting - Projects"),
                    this.projectUpdatesService.onGetLatestUpdate
                      .pipe((0, S.sL)())
                      .subscribe(() => {
                        this.get(!1);
                      }),
                    (0, y.T)(
                      this.service.onDurationChange,
                      this.service.onDateRangeChange,
                      this.service.onIncludeToggleChange
                    )
                      .pipe((0, S.sL)())
                      .subscribe(() => {
                        this.get();
                      }),
                    this.socket.on(
                      C.C.CREATE_PROJECT_CATEGORY.toString(),
                      this.newCategoryReceived
                    );
                }
                ngOnInit() {
                  this.getProjectHealths(),
                    this.getProjectStatuses(),
                    this.getProjectCategories(),
                    this.getProjectManagers(),
                    this.socket.on(
                      C.C.PROJECT_START_DATE_CHANGE.toString(),
                      this.refreshWithoutLoading
                    ),
                    this.socket.on(
                      C.C.PROJECT_END_DATE_CHANGE.toString(),
                      this.refreshWithoutLoading
                    ),
                    this.columnList &&
                      ((this.columns = this.columnList), this.updateState());
                }
                ngOnDestroy() {
                  this.socket.removeListener(
                    C.C.PROJECT_START_DATE_CHANGE.toString(),
                    this.refreshWithoutLoading
                  ),
                    this.socket.removeListener(
                      C.C.PROJECT_END_DATE_CHANGE.toString(),
                      this.refreshWithoutLoading
                    );
                }
                searchProjects() {
                  this.get(!1);
                }
                onQueryParamsChange(i) {
                  const { pageSize: o, pageIndex: c, sort: _ } = i;
                  (this.pageIndex = c), (this.pageSize = o);
                  const f = _.find((j) => null !== j.value);
                  (this.sortField = f?.key ?? null),
                    (this.sortOrder = f?.value ?? null),
                    this.get();
                }
                get(i = !0) {
                  var o = this;
                  return (0, h.Z)(function* () {
                    try {
                      o.loading = i;
                      const c = o.getSelectedStatusIds(),
                        _ = o.getSelectedHealthIds(),
                        f = o.getSelectedCategoryIds(),
                        j = o.getSelectedProjectManager(),
                        P = yield o.api.getProjects({
                          index: o.pageIndex,
                          size: o.pageSize,
                          field: o.sortField,
                          order: o.sortOrder,
                          search: o.searchText || null,
                          filter: o.filterIndex.toString(),
                          statuses: c,
                          healths: _,
                          categories: f,
                          project_managers: j,
                          archived: o.service.getIncludeToggle(),
                        });
                      P.done &&
                        ((o.total = P.body.total || 0),
                        (o.projects = P.body.projects || []),
                        (o.pageTitle = o.total + "Expedientes")),
                        (o.loading = !1);
                    } catch {
                      o.loading = !1;
                    }
                    o.cdr.markForCheck();
                  })();
                }
                getProjectManagers() {
                  var i = this;
                  return (0, h.Z)(function* () {
                    try {
                      i.loadingProjectManagers = !0;
                      const o = yield i.projectManagersApi.get();
                      o.body && (i.projectManagers = o.body),
                        (i.loadingProjectManagers = !1);
                    } catch (o) {
                      (0, T.tu)(o), (i.loadingProjectManagers = !1);
                    }
                    i.cdr.markForCheck();
                  })();
                }
                getProjectHealths() {
                  var i = this;
                  return (0, h.Z)(function* () {
                    try {
                      i.loadingHealths = !0;
                      const o = yield i.projectHealthsApi.get();
                      if (o) {
                        for (const c of o.body) c.selected = !1;
                        i.projHealths = o.body;
                      }
                      i.loadingHealths = !1;
                    } catch (o) {
                      (0, T.tu)(o), (i.loadingHealths = !1);
                    }
                    i.cdr.markForCheck();
                  })();
                }
                getProjectStatuses() {
                  var i = this;
                  return (0, h.Z)(function* () {
                    try {
                      i.loadingStatuses = !0;
                      const o = yield i.statusesApi.get();
                      if (o.done) {
                        for (const c of o.body) c.selected = !1;
                        i.projectStatuses = o.body;
                      }
                      i.loadingStatuses = !1;
                    } catch (o) {
                      (0, T.tu)(o), (i.loadingStatuses = !1);
                    }
                    i.cdr.markForCheck();
                  })();
                }
                getProjectCategories() {
                  var i = this;
                  return (0, h.Z)(function* () {
                    try {
                      i.loadingCategories = !0;
                      const o = yield i.categoriesApi.getByOrg();
                      if (o) {
                        for (const c of o.body) c.selected = !1;
                        i.projCategories = o.body;
                      }
                      i.loadingCategories = !1;
                    } catch (o) {
                      (0, T.tu)(o), (i.loadingCategories = !1);
                    }
                    i.cdr.markForCheck();
                  })();
                }
                trackBy(i, o) {
                  return o.id;
                }
                openProject(i) {
                  this.drawer.openProject(i);
                }
                export() {
                  var i = this;
                  return (0, h.Z)(function* () {
                    const o = i.auth.getCurrentSession();
                    if (o?.name)
                      try {
                        yield i.exportApi.exportProjects(o.team_name);
                      } catch (c) {
                        (0, T.tu)(c);
                      }
                  })();
                }
                openUpdates(i) {
                  this.updatesDrawer.open(i.id);
                }
                onColumnsToggle(i, o) {
                  var c = this;
                  return (0, h.Z)(function* () {
                    try {
                      (o.pinned = i), c.updateState();
                    } catch {}
                  })();
                }
                updateState() {
                  (this.clientActive = this.canActive(this.COLUMN_KEYS.CLIENT)),
                    (this.teamActive = this.canActive(this.COLUMN_KEYS.TEAM)),
                    (this.categoryActive = this.canActive(
                      this.COLUMN_KEYS.CATEGORY
                    )),
                    (this.statusActive = this.canActive(
                      this.COLUMN_KEYS.STATUS
                    )),
                    (this.startEndDateActive = this.canActive(
                      this.COLUMN_KEYS.START_END_DATE
                    )),
                    (this.daysLeftActive = this.canActive(
                      this.COLUMN_KEYS.DAYS_LEFT_OVERDUE
                    )),
                    (this.estimatedActive = this.canActive(
                      this.COLUMN_KEYS.ESTIMATED_VS_ACTUAL
                    )),
                    (this.progressActive = this.canActive(
                      this.COLUMN_KEYS.TASKS_PROGRESS
                    )),
                    (this.lastActivityActive = this.canActive(
                      this.COLUMN_KEYS.LAST_ACTIVITY
                    )),
                    (this.healthActive = this.canActive(
                      this.COLUMN_KEYS.HEALTH
                    )),
                    (this.updateActive = this.canActive(
                      this.COLUMN_KEYS.UPDATE
                    )),
                    this.cdr.markForCheck(),
                    this.setColumnList();
                }
                canActive(i) {
                  return !!this.columns.find((o) => o.key === i)?.pinned;
                }
                setColumnList() {
                  localStorage.setItem(
                    this.PROJECT_LIST_COLUMNS,
                    JSON.stringify(this.columns)
                  );
                }
                detectChanges() {
                  this.cdr.markForCheck();
                }
                getColor(i) {
                  return Z.Lj[i?.charAt(0).toUpperCase() || "A"];
                }
              }
              return (
                ((e = s).ɵfac = function (i) {
                  return new (i || e)(
                    t.Y36(v.z),
                    t.Y36(t.sBO),
                    t.Y36(Q.U),
                    t.Y36(R.b),
                    t.Y36(U.w),
                    t.Y36(O.O),
                    t.Y36(N.e),
                    t.Y36(L.s),
                    t.Y36(D.k),
                    t.Y36(k.k),
                    t.Y36(Y.s),
                    t.Y36(x),
                    t.Y36(g.m)
                  );
                }),
                (e.ɵcmp = t.Xpm({
                  type: e,
                  selectors: [["worklenz-rpt-projects"]],
                  viewQuery: function (i, o) {
                    if ((1 & i && t.Gf(A.p, 5), 2 & i)) {
                      let c;
                      t.iGM((c = t.CRH())) && (o.updatesDrawer = c.first);
                    }
                  },
                  decls: 61,
                  vars: 45,
                  consts: [
                    [3, "title", "showDuration", "exportFile"],
                    [3, "nzLoading", "nzTitle", "nzExtra"],
                    ["projectsTitle", ""],
                    ["projectsActions", ""],
                    ["suffixIconSearch", ""],
                    [
                      3,
                      "nzData",
                      "nzFrontPagination",
                      "nzLoading",
                      "nzPageIndex",
                      "nzPageSizeOptions",
                      "nzPageSize",
                      "nzTotal",
                      "nzShowSizeChanger",
                      "nzHideOnSinglePage",
                      "nzScroll",
                      "nzQueryParams",
                    ],
                    ["table", ""],
                    [
                      "nzLeft",
                      "",
                      "scope",
                      "col",
                      2,
                      "z-index",
                      "9",
                      3,
                      "nzWidth",
                      "nzSortFn",
                      "nzColumnKey",
                    ],
                    ["scope", "col", 3, "nzWidth", 4, "ngIf"],
                    [
                      "scope",
                      "col",
                      3,
                      "nzWidth",
                      "nzSortFn",
                      "nzColumnKey",
                      4,
                      "ngIf",
                    ],
                    ["scope", "col", 3, "nzWidth"],
                    [
                      "class",
                      "cursor-pointer",
                      4,
                      "ngFor",
                      "ngForOf",
                      "ngForTrackBy",
                    ],
                    ["naTemplate", ""],
                    ["statusDropDown", "nzDropdownMenu"],
                    [
                      "nz-menu",
                      "",
                      1,
                      "pt-0",
                      2,
                      "max-height",
                      "330px",
                      "overflow-y",
                      "auto",
                    ],
                    [
                      "class",
                      "m-0",
                      "nz-checkbox",
                      "",
                      "nz-menu-item",
                      "",
                      3,
                      "nzChecked",
                      "nzCheckedChange",
                      4,
                      "ngFor",
                      "ngForOf",
                    ],
                    ["healthDropDown", "nzDropdownMenu"],
                    ["categoryDropDown", "nzDropdownMenu"],
                    [1, "px-3", "py-2", "sticky-top", "bg-white"],
                    [
                      "type",
                      "text",
                      "placeholder",
                      "Search by Category",
                      "nz-input",
                      "",
                      3,
                      "ngModel",
                      "ngModelChange",
                    ],
                    ["categorySearchInput", ""],
                    ["projectManagerDropDown", "nzDropdownMenu"],
                    [
                      "type",
                      "text",
                      "placeholder",
                      "Search by name",
                      "nz-input",
                      "",
                      3,
                      "ngModel",
                      "ngModelChange",
                    ],
                    ["projectManagerSearchInput", ""],
                    [
                      "nz-button",
                      "",
                      "nz-dropdown",
                      "",
                      3,
                      "nzDropdownMenu",
                      "nzClickHide",
                      "nzLoading",
                      "nzTrigger",
                      4,
                      "nzSpaceItem",
                    ],
                    [
                      "nz-button",
                      "",
                      "nz-dropdown",
                      "",
                      3,
                      "nzDropdownMenu",
                      "nzClickHide",
                      "nzLoading",
                      "nzTrigger",
                    ],
                    ["nz-icon", "", "nzType", "caret-down"],
                    [
                      "nz-button",
                      "",
                      "nz-dropdown",
                      "",
                      1,
                      "columns-toggle",
                      "me-2",
                      3,
                      "nzType",
                      "nzTrigger",
                      "nzLoading",
                      "nzClickHide",
                      "nzDropdownMenu",
                    ],
                    ["nz-icon", "", 3, "nzType", "nzTheme"],
                    ["columnsDropdown", "nzDropdownMenu"],
                    ["nz-menu", "", "nzSelectable", "", 1, "menu"],
                    [
                      "nz-menu-item",
                      "",
                      "nz-checkbox",
                      "",
                      "class",
                      "m-0",
                      3,
                      "nzChecked",
                      "nzCheckedChange",
                      4,
                      "ngFor",
                      "ngForOf",
                    ],
                    [2, "width", "250px", 3, "nzSuffix"],
                    [
                      "type",
                      "text",
                      "nz-input",
                      "",
                      "placeholder",
                      "Search by name",
                      3,
                      "ngModel",
                      "ngModelChange",
                    ],
                    [
                      "nz-menu-item",
                      "",
                      "nz-checkbox",
                      "",
                      1,
                      "m-0",
                      3,
                      "nzChecked",
                      "nzCheckedChange",
                    ],
                    ["nz-icon", "", "nzType", "search"],
                    ["scope", "col", 3, "nzWidth", "nzSortFn", "nzColumnKey"],
                    [1, "cursor-pointer"],
                    ["nzLeft", "", 2, "z-index", "9", 3, "click"],
                    [1, "position-relative", "w-100"],
                    [3, "nzColor", 4, "nzSpaceItem"],
                    [
                      "class",
                      "ellipsis",
                      "style",
                      "max-width: 260px",
                      "nz-tooltip",
                      "",
                      3,
                      "nzTooltipTitle",
                      4,
                      "nzSpaceItem",
                    ],
                    ["nz-button", "", "nzType", "default", 1, "open-btn"],
                    [
                      "nz-icon",
                      "",
                      "nzType",
                      "arrows-alt",
                      "nzTheme",
                      "outline",
                    ],
                    [4, "ngIf"],
                    [3, "ngSwitch", 4, "ngIf"],
                    [3, "ngSwitch", "click", 4, "ngIf"],
                    [3, "ngSwitch"],
                    [3, "nz-tooltip", 4, "ngSwitchCase"],
                    [4, "ngSwitchCase"],
                    [3, "nzColor"],
                    [
                      "nz-tooltip",
                      "",
                      1,
                      "ellipsis",
                      2,
                      "max-width",
                      "260px",
                      3,
                      "nzTooltipTitle",
                    ],
                    [
                      3,
                      "id",
                      "actualTime",
                      "estimatedTime",
                      "actualTimeString",
                      "estimatedTimeString",
                      4,
                      "ngIf",
                    ],
                    [
                      3,
                      "id",
                      "actualTime",
                      "estimatedTime",
                      "actualTimeString",
                      "estimatedTimeString",
                    ],
                    [
                      3,
                      "todoProgress",
                      "doingProgress",
                      "doneProgress",
                      4,
                      "ngIf",
                      "ngIfElse",
                    ],
                    [3, "todoProgress", "doingProgress", "doneProgress"],
                    ["nz-tooltip", "", 1, "ellipsis", 3, "nzTooltipTitle"],
                    [3, "projStatuses", "project"],
                    [3, "project"],
                    [4, "ngIf", "ngIfElse"],
                    ["style", "color: #f37070;", 4, "ngSwitchCase"],
                    [2, "color", "#f37070"],
                    ["style", "color: #80ca79;", 4, "ngIf"],
                    [2, "color", "#80ca79"],
                    [3, "project", "projHealths"],
                    [3, "teamId", "project"],
                    [3, "ngSwitch", "click"],
                    ["commentTooltip", ""],
                    [
                      "nz-tooltip",
                      "",
                      1,
                      "ellipsis",
                      3,
                      "innerHTML",
                      "nzTooltipTitle",
                    ],
                    [1, "tooltip-comment", 3, "innerHTML"],
                    [1, "ellipsis"],
                    [
                      "nz-tooltip",
                      "",
                      3,
                      "nzTooltipTitle",
                      4,
                      "ngIf",
                      "ngIfElse",
                    ],
                    ["nz-tooltip", "", 3, "nzTooltipTitle"],
                    [3, "nz-tooltip"],
                    [1, "me-2", 3, "nzSize", "nzText", "nzSrc"],
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
                  template: function (i, o) {
                    if (
                      (1 & i &&
                        (t.TgZ(0, "worklenz-rpt-header", 0),
                        t.NdJ("exportFile", function () {
                          return o.export();
                        }),
                        t.qZA(),
                        t.TgZ(1, "nz-content")(2, "nz-card", 1),
                        t.YNc(3, Tt, 5, 0, "ng-template", null, 2, t.W1O),
                        t.YNc(5, At, 9, 10, "ng-template", null, 3, t.W1O),
                        t.YNc(7, vt, 1, 0, "ng-template", null, 4, t.W1O),
                        t.TgZ(9, "nz-table", 5, 6),
                        t.NdJ("nzQueryParams", function (_) {
                          return o.onQueryParamsChange(_);
                        }),
                        t.TgZ(11, "thead")(12, "tr")(13, "th", 7),
                        t._uU(14, " Project "),
                        t.qZA(),
                        t.YNc(15, jt, 2, 1, "th", 8),
                        t.YNc(16, Pt, 2, 1, "th", 8),
                        t.YNc(17, St, 2, 1, "th", 8),
                        t.YNc(18, yt, 2, 3, "th", 9),
                        t.YNc(19, Mt, 2, 1, "th", 8),
                        t.YNc(20, Et, 2, 1, "th", 8),
                        t.YNc(21, Zt, 2, 3, "th", 9),
                        t.YNc(22, Rt, 2, 1, "th", 8),
                        t.YNc(23, It, 2, 1, "th", 8),
                        t.YNc(24, wt, 2, 3, "th", 9),
                        t.YNc(25, Jt, 2, 3, "th", 9),
                        t.TgZ(26, "th", 10),
                        t._uU(27, "Project Manager"),
                        t.qZA()()(),
                        t.TgZ(28, "tbody"),
                        t.YNc(29, pe, 23, 14, "tr", 11),
                        t.qZA()()()(),
                        t._UZ(30, "worklenz-rpt-team-drawer")(
                          31,
                          "worklenz-rpt-project-drawer"
                        )(32, "worklenz-rpt-tasks-drawer")(
                          33,
                          "worklenz-rpt-task-view-drawer"
                        )(34, "worklenz-project-updates-drawer"),
                        t.YNc(35, _e, 1, 0, "ng-template", null, 12, t.W1O),
                        t.TgZ(37, "nz-dropdown-menu", null, 13)(39, "ul", 14),
                        t.YNc(40, ge, 2, 2, "li", 15),
                        t.qZA()(),
                        t.TgZ(41, "nz-dropdown-menu", null, 16)(43, "ul", 14),
                        t.YNc(44, de, 2, 2, "li", 15),
                        t.qZA()(),
                        t.TgZ(45, "nz-dropdown-menu", null, 17)(47, "ul", 14)(
                          48,
                          "li",
                          18
                        )(49, "input", 19, 20),
                        t.NdJ("ngModelChange", function (_) {
                          return (o.categorySearchText = _);
                        })("ngModelChange", function () {
                          return o.detectChanges();
                        }),
                        t.qZA()(),
                        t.YNc(51, me, 2, 3, "li", 15),
                        t.ALo(52, "searchByName"),
                        t.qZA()(),
                        t.TgZ(53, "nz-dropdown-menu", null, 21)(55, "ul", 14)(
                          56,
                          "li",
                          18
                        )(57, "input", 22, 23),
                        t.NdJ("ngModelChange", function (_) {
                          return (o.projectManagerSearchText = _);
                        })("ngModelChange", function () {
                          return o.detectChanges();
                        }),
                        t.qZA()(),
                        t.YNc(59, he, 2, 2, "li", 15),
                        t.ALo(60, "searchByName"),
                        t.qZA()()),
                      2 & i)
                    ) {
                      const c = t.MAs(4),
                        _ = t.MAs(6),
                        f = t.MAs(10),
                        j = t.MAs(50),
                        P = t.MAs(58);
                      t.Q6J("title", o.pageTitle)("showDuration", !1),
                        t.xp6(2),
                        t.Q6J("nzLoading", o.loading)("nzTitle", c)(
                          "nzExtra",
                          _
                        ),
                        t.xp6(7),
                        t.Q6J("nzData", o.projects)("nzFrontPagination", !1)(
                          "nzLoading",
                          o.loading
                        )("nzPageIndex", o.pageIndex)(
                          "nzPageSizeOptions",
                          o.paginationSizes
                        )("nzPageSize", o.pageSize)(
                          "nzTotal",
                          o.total ? o.total : 0
                        )("nzShowSizeChanger", !0)("nzHideOnSinglePage", !0)(
                          "nzScroll",
                          t.DdM(44, ue)
                        ),
                        t.xp6(4),
                        t.Q6J("nzWidth", "300px")("nzSortFn", !0)(
                          "nzColumnKey",
                          "name"
                        ),
                        t.xp6(2),
                        t.Q6J("ngIf", o.estimatedActive),
                        t.xp6(1),
                        t.Q6J("ngIf", o.progressActive),
                        t.xp6(1),
                        t.Q6J("ngIf", o.lastActivityActive),
                        t.xp6(1),
                        t.Q6J("ngIf", o.statusActive),
                        t.xp6(1),
                        t.Q6J("ngIf", o.startEndDateActive),
                        t.xp6(1),
                        t.Q6J("ngIf", o.daysLeftActive),
                        t.xp6(1),
                        t.Q6J("ngIf", o.healthActive),
                        t.xp6(1),
                        t.Q6J("ngIf", o.categoryActive),
                        t.xp6(1),
                        t.Q6J("ngIf", o.updateActive),
                        t.xp6(1),
                        t.Q6J("ngIf", o.clientActive),
                        t.xp6(1),
                        t.Q6J("ngIf", o.teamActive),
                        t.xp6(1),
                        t.Q6J("nzWidth", "220px"),
                        t.xp6(3),
                        t.Q6J("ngForOf", f.data)("ngForTrackBy", o.trackBy),
                        t.xp6(11),
                        t.Q6J("ngForOf", o.projectStatuses),
                        t.xp6(4),
                        t.Q6J("ngForOf", o.projHealths),
                        t.xp6(5),
                        t.Q6J("ngModel", o.categorySearchText),
                        t.xp6(2),
                        t.Q6J(
                          "ngForOf",
                          t.xi3(52, 38, o.projCategories, j.value)
                        ),
                        t.xp6(6),
                        t.Q6J("ngModel", o.projectManagerSearchText),
                        t.xp6(2),
                        t.Q6J(
                          "ngForOf",
                          t.xi3(60, 41, o.projectManagers, P.value)
                        );
                    }
                  },
                  dependencies: [
                    z.sg,
                    z.O5,
                    z.RF,
                    z.n9,
                    l.I,
                    p.bd,
                    d.OK,
                    u.N8,
                    u.qD,
                    u.Uo,
                    u._C,
                    u.Om,
                    u.p0,
                    u.$Z,
                    u.qn,
                    W.j,
                    $.Ls,
                    ot.$,
                    it.W,
                    rt.W,
                    at.D,
                    I.Zp,
                    I.gB,
                    I.ke,
                    M.Fj,
                    M.JJ,
                    M.On,
                    G.x7,
                    B.u,
                    b.a,
                    V.SY,
                    st.W,
                    ct.T,
                    lt.M,
                    pt.f,
                    _t.K,
                    H.NU,
                    H.$1,
                    A.p,
                    X.ix,
                    gt.w,
                    q.dQ,
                    tt.Ie,
                    K.wO,
                    K.r9,
                    w.cm,
                    w.RR,
                    w.wA,
                    et.Dz,
                    dt.g,
                    mt.p,
                    ht.I,
                  ],
                  styles: [
                    ".ellipsis[_ngcontent-%COMP%]{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.open-btn[_ngcontent-%COMP%]{position:absolute;right:0;top:0;bottom:0;opacity:0;margin-top:auto;margin-bottom:auto;padding:0 4px;background:#edebf0!important;color:#000000d9;border:none}tr[_ngcontent-%COMP%]:hover   .open-btn[_ngcontent-%COMP%]{opacity:1}",
                  ],
                  changeDetection: 0,
                })),
                s
              );
            })(),
          },
        ];
      let fe = (() => {
        var e;
        class s {}
        return (
          ((e = s).ɵfac = function (i) {
            return new (i || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [r.Bz.forChild(Ce), r.Bz] })),
          s
        );
      })();
      var ze = a(99183),
        Te = a(8083),
        xe = a(3400),
        Ae = a(27546),
        ve = a(64948),
        je = a(92893),
        Pe = a(15484),
        Se = a(47246),
        ye = a(91921),
        Me = a(99865);
      let Ee = (() => {
        var e;
        class s {}
        return (
          ((e = s).ɵfac = function (i) {
            return new (i || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({
            imports: [
              z.ez,
              fe,
              l.I,
              ze.o,
              p.vh,
              d.wm,
              u.HQ,
              Te.ZJ,
              W.X,
              $.PV,
              xe.j,
              Ae.$,
              ve.i,
              je.e,
              Pe.C,
              I.o7,
              M.UX,
              M.u5,
              G.mS,
              B.u,
              b.a,
              Se.vQ,
              V.cg,
              ye.ReportingModule,
              H.zf,
              A.p,
              Me.n,
              X.sL,
              tt.Wr,
              w.b1,
              K.ip,
              q.vG,
              et.Rt,
            ],
          })),
          s
        );
      })();
    },
  },
]);
