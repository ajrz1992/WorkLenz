"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [265],
  {
    68265: (vi, he, c) => {
      c.r(he), c.d(he, { ScheduleModule: () => xi });
      var m = c(96814),
        ge = c(35420),
        W = c(97753),
        ze = c(5227),
        ye = c(40581),
        Oe = c(96156),
        Se = c(62816);
      function oe(o, r) {
        var i, t, n, s, a, d, l, _;
        (0, Se.Z)(1, arguments);
        var u = (0, ze.j)(),
          M = (0, Oe.Z)(
            null !==
              (i =
                null !==
                  (t =
                    null !==
                      (n =
                        null !== (s = r?.weekStartsOn) && void 0 !== s
                          ? s
                          : null == r ||
                            null === (a = r.locale) ||
                            void 0 === a ||
                            null === (d = a.options) ||
                            void 0 === d
                          ? void 0
                          : d.weekStartsOn) && void 0 !== n
                      ? n
                      : u.weekStartsOn) && void 0 !== t
                  ? t
                  : null === (l = u.locale) ||
                    void 0 === l ||
                    null === (_ = l.options) ||
                    void 0 === _
                  ? void 0
                  : _.weekStartsOn) && void 0 !== i
              ? i
              : 0
          );
        if (!(M >= 0 && M <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        var h = (0, ye.Z)(o),
          U = h.getDay(),
          z = 6 + (U < M ? -7 : 0) - (U - M);
        return h.setDate(h.getDate() + z), h.setHours(23, 59, 59, 999), h;
      }
      var Pe = c(47680),
        f = c(15861),
        F = c(89207),
        me = c(81089),
        L = c(21406),
        b = c(69649),
        e = c(65879),
        Ie = c(26857),
        Ae = c(69862);
      let ue = (() => {
        var o;
        class r extends Ie.P {
          constructor(t) {
            super(),
              (this.http = t),
              (this.root = `${this.API_BASE_URL}/resource-allocation`);
          }
          getProjectWiseResources(t) {
            return this._get(
              this.http,
              `${this.root}/project?start=${(0, F.Z)(
                t.start,
                "yyyy-MM-dd"
              )}&end=${(0, F.Z)(t.end, "yyyy-MM-dd")}`
            );
          }
          getUserWiseResources(t) {
            return this._get(
              this.http,
              `${this.root}/team?start=${(0, F.Z)(
                t.start,
                "yyyy-MM-dd"
              )}&end=${(0, F.Z)(t.end, "yyyy-MM-dd")}`
            );
          }
        }
        return (
          ((o = r).ɵfac = function (t) {
            return new (t || o)(e.LFG(Ae.eN));
          }),
          (o.ɵprov = e.Yz7({ token: o, factory: o.ɵfac, providedIn: "root" })),
          r
        );
      })();
      var J = c(74764),
        se = c(82669),
        G = c(96928),
        A = c(8083),
        O = c(70855),
        D = c(43389),
        S = c(16976),
        re = c(34071),
        ae = c(2919);
      function Ze(o, r) {
        1 & o &&
          (e.TgZ(0, "div")(1, "div", 7)(2, "div", 8),
          e._UZ(3, "img", 9),
          e.qZA(),
          e.TgZ(4, "span", 10),
          e._uU(5, "The selected team has no scheduled projects."),
          e.qZA()()());
      }
      function je(o, r) {
        1 & o && (e.TgZ(0, "div", 11), e._UZ(1, "nz-spin", 12), e.qZA());
      }
      function De(o, r) {
        if ((1 & o && (e.TgZ(0, "small", 27), e._uU(1), e.qZA()), 2 & o)) {
          const i = e.oxw().$implicit;
          e.xp6(1), e.hij("W", i.week_index || -1, "");
        }
      }
      function Ye(o, r) {
        if ((1 & o && (e.TgZ(0, "span", 28), e._uU(1), e.qZA()), 2 & o)) {
          const i = e.oxw().$implicit;
          e.xp6(1), e.Oqu(i.month_name);
        }
      }
      function Ne(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "span", 24),
            e.YNc(1, De, 2, 1, "small", 25),
            e.YNc(2, Ye, 2, 1, "span", 26),
            e._UZ(3, "span"),
            e.qZA()),
          2 & o)
        ) {
          const i = r.$implicit;
          e.Udp("grid-column", i.min + "/" + i.max),
            e.xp6(1),
            e.Q6J("ngIf", i.days_of_week && i.days_of_week.length > 1),
            e.xp6(1),
            e.Q6J("ngIf", i.days_of_week && i.days_of_week.length > 2);
        }
      }
      function Ue(o, r) {
        1 & o && e._UZ(0, "div", 29),
          2 & o && e.ekj("sunday", r.$implicit.isLastDayOfWeek);
      }
      function Fe(o, r) {
        if (
          (1 & o && (e.TgZ(0, "div", 30), e._uU(1), e.ALo(2, "date"), e.qZA()),
          2 & o)
        ) {
          const i = r.$implicit,
            t = r.index;
          e.ekj("sunday", i.isSunday)("today-header", i.isToday),
            e.MGl("id", "date_", t, ""),
            e.xp6(1),
            e.hij("", e.xi3(2, 6, i.date, "dd"), " ");
        }
      }
      function Le(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "li", 39),
            e.NdJ("click", function () {
              const s = e.CHM(i).$implicit,
                a = e.oxw().$implicit,
                d = e.oxw(2);
              return e.KtG(
                d.scheduleClicked(s.scheduled_tasks, a.id, s.date_series)
              );
            }),
            e.qZA();
        }
        if (2 & o) {
          const i = r.$implicit,
            t = e.oxw().$implicit;
          e.Udp("grid-column", i.min)("background-color", t.color_code);
        }
      }
      function Ee(o, r) {
        1 & o && e._UZ(0, "div", 40),
          2 & o && e.ekj("weekend", r.$implicit.isWeekend);
      }
      function Je(o, r) {
        if (
          (1 & o &&
            (e._UZ(0, "nz-avatar", 47),
            e.ALo(1, "firstCharUpper"),
            e.ALo(2, "firstCharUpper")),
          2 & o)
        ) {
          const i = e.oxw().$implicit,
            t = e.oxw(4);
          e.Udp(
            "background-color",
            i.avatar_url ? "#ececec" : t.getColor(i.name || i.invitee_email)
          ),
            e.Q6J("nzSize", 28)(
              "nzText",
              e.lcZ(1, 5, i.name) || e.lcZ(2, 7, i.invitee_email)
            )("nzSrc", i.avatar_url);
        }
      }
      function Ge(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "span"),
            e._uU(1),
            e._UZ(2, "br"),
            e.TgZ(3, "span", 48),
            e._uU(4, " (Invitation Pending) "),
            e.qZA()()),
          2 & o)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1), e.hij(" ", i.invitee_email, " ");
        }
      }
      function Qe(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "li", 39),
            e.NdJ("click", function () {
              const s = e.CHM(i).$implicit,
                a = e.oxw(4).$implicit,
                d = e.oxw(2);
              return e.KtG(
                d.scheduleClicked(s.scheduled_tasks, a.id, s.date_series)
              );
            }),
            e.qZA();
        }
        if (2 & o) {
          const i = r.$implicit,
            t = e.oxw(4).$implicit;
          e.Udp("grid-column", i.min)("background-color", t.color_code);
        }
      }
      function Re(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 35)(1, "ul", 36),
            e.YNc(2, Qe, 1, 4, "li", 37),
            e.qZA()()),
          2 & o)
        ) {
          const i = e.oxw().$implicit,
            t = e.oxw(2).$implicit;
          e.ekj("child-background-color", t.collapsed),
            e.xp6(2),
            e.Q6J("ngForOf", i.tasks);
        }
      }
      function He(o, r) {
        if ((1 & o && e._UZ(0, "div", 40), 2 & o)) {
          const i = r.$implicit,
            t = e.oxw(3).$implicit;
          e.ekj("weekend", i.isWeekend)("child-background-color", t.collapsed);
        }
      }
      function $e(o, r) {
        if (
          (1 & o &&
            (e.ynx(0),
            e.TgZ(1, "div", 41)(2, "div", 42),
            e.YNc(3, Je, 3, 9, "nz-avatar", 43),
            e.qZA(),
            e.TgZ(4, "div", 44),
            e._uU(5),
            e.YNc(6, Ge, 5, 1, "span", 2),
            e.qZA()(),
            e.YNc(7, Re, 3, 3, "div", 45),
            e.YNc(8, He, 1, 4, "div", 46),
            e.BQk()),
          2 & o)
        ) {
          const i = r.$implicit,
            t = e.oxw(2).$implicit,
            n = e.oxw(2);
          e.xp6(1),
            e.ekj("child-background-cell", t.collapsed),
            e.xp6(2),
            e.Q6J("ngIf", i.name || i.invitee_email),
            e.xp6(2),
            e.hij(" ", i.name, " "),
            e.xp6(1),
            e.Q6J("ngIf", i.invitee_email),
            e.xp6(1),
            e.Q6J("ngIf", t.collapsed),
            e.xp6(1),
            e.Q6J("ngForOf", n.dates);
        }
      }
      function Be(o, r) {
        if ((1 & o && e._UZ(0, "nz-avatar", 54), 2 & o)) {
          const i = e.oxw(5);
          e.Udp("background-color", i.getColor("Unassigned")),
            e.Q6J("nzSize", 28)("nzText", "U");
        }
      }
      function Ve(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "li", 39),
            e.NdJ("click", function () {
              const s = e.CHM(i).$implicit,
                a = e.oxw(4).$implicit,
                d = e.oxw(2);
              return e.KtG(
                d.scheduleClicked(s.scheduled_tasks, a.id, s.date_series)
              );
            }),
            e.qZA();
        }
        if (2 & o) {
          const i = r.$implicit,
            t = e.oxw(4).$implicit;
          e.Udp("grid-column", i.min)("background-color", t.color_code);
        }
      }
      function qe(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 35)(1, "ul", 36),
            e.YNc(2, Ve, 1, 4, "li", 37),
            e.qZA()()),
          2 & o)
        ) {
          const i = e.oxw(3).$implicit;
          e.xp6(2), e.Q6J("ngForOf", i.unassigned_tasks);
        }
      }
      function We(o, r) {
        1 & o && e._UZ(0, "div", 55),
          2 & o && e.ekj("weekend", r.$implicit.isWeekend);
      }
      function Ke(o, r) {
        if (
          (1 & o &&
            (e.ynx(0),
            e.TgZ(1, "div", 49)(2, "div", 42),
            e.YNc(3, Be, 1, 4, "nz-avatar", 50),
            e.qZA(),
            e.TgZ(4, "div", 51),
            e._uU(5, "Unassigned tasks"),
            e.qZA()(),
            e.YNc(6, qe, 3, 1, "div", 52),
            e.YNc(7, We, 1, 2, "div", 53),
            e.BQk()),
          2 & o)
        ) {
          const i = e.oxw(2).$implicit,
            t = e.oxw(2);
          e.xp6(3),
            e.Q6J("ngIf", i.unassigned_tasks),
            e.xp6(3),
            e.Q6J("ngIf", i.unassigned_tasks.length),
            e.xp6(1),
            e.Q6J("ngForOf", t.dates);
        }
      }
      function Xe(o, r) {
        if (
          (1 & o &&
            (e.ynx(0),
            e.YNc(1, $e, 9, 7, "ng-container", 23),
            e.YNc(2, Ke, 8, 3, "ng-container", 2),
            e.BQk()),
          2 & o)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J("ngForOf", i.project_members),
            e.xp6(1),
            e.Q6J("ngIf", i.unassigned_tasks.length);
        }
      }
      function et(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.ynx(0),
            e.TgZ(1, "div", 31)(2, "div", 32),
            e.NdJ("click", function () {
              const s = e.CHM(i).$implicit;
              return e.KtG((s.collapsed = !s.collapsed));
            }),
            e._UZ(3, "img", 33),
            e.qZA(),
            e.TgZ(4, "span", 34),
            e._uU(5),
            e.qZA()(),
            e.TgZ(6, "div", 35)(7, "ul", 36),
            e.YNc(8, Le, 1, 4, "li", 37),
            e.qZA()(),
            e.YNc(9, Ee, 1, 2, "div", 38),
            e.YNc(10, Xe, 3, 2, "ng-container", 2),
            e.BQk();
        }
        if (2 & o) {
          const i = r.$implicit,
            t = e.oxw(2);
          e.xp6(3),
            e.ekj("expanded", !i.collapsed),
            e.xp6(2),
            e.Oqu(i.name || i.invitee_email),
            e.xp6(3),
            e.Q6J("ngForOf", i.schedule),
            e.xp6(1),
            e.Q6J("ngForOf", t.dates),
            e.xp6(1),
            e.Q6J("ngIf", i.collapsed);
        }
      }
      function tt(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "div")(1, "div", 13)(2, "div", 14),
            e._UZ(3, "div", 15),
            e.TgZ(4, "div", 16),
            e.ynx(5),
            e.TgZ(6, "span", 17),
            e.YNc(7, Ne, 4, 4, "span", 18),
            e.qZA(),
            e.BQk(),
            e.qZA(),
            e.YNc(8, Ue, 1, 2, "div", 19),
            e._UZ(9, "div", 20)(10, "div", 21),
            e.YNc(11, Fe, 3, 9, "div", 22),
            e.YNc(12, et, 11, 6, "ng-container", 23),
            e.qZA()()()),
          2 & o)
        ) {
          const i = e.oxw();
          e.xp6(7),
            e.Q6J("ngForOf", i.months),
            e.xp6(1),
            e.Q6J("ngForOf", i.dates),
            e.xp6(3),
            e.Q6J("ngForOf", i.dates),
            e.xp6(1),
            e.Q6J("ngForOf", i.resourceData);
        }
      }
      function nt(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "li", 59),
            e.NdJ("click", function () {
              const s = e.CHM(i).$implicit,
                a = e.oxw(2);
              return e.KtG(a.taskSelected(s.id, a.selectedResourceId || ""));
            }),
            e.TgZ(1, "nz-list-item-meta")(2, "nz-list-item-meta-title"),
            e._uU(3),
            e.qZA()()();
        }
        if (2 & o) {
          const i = r.$implicit;
          e.xp6(3), e.hij(" ", i.name, " ");
        }
      }
      function it(o, r) {
        if (
          (1 & o &&
            (e.ynx(0),
            e.TgZ(1, "div", 56)(2, "ul", 57),
            e.YNc(3, nt, 4, 1, "li", 58),
            e.qZA()(),
            e.BQk()),
          2 & o)
        ) {
          const i = e.oxw();
          e.xp6(2),
            e.Q6J("nzDataSource", i.scheduledTasks),
            e.xp6(1),
            e.Q6J("ngForOf", i.scheduledTasks);
        }
      }
      let ot = (() => {
        var o;
        class r {
          constructor(t, n) {
            (this.api = t),
              (this.tvService = n),
              (this.selectedWeek = {
                start: (0, W.Z)(new Date()),
                end: oe(new Date()),
              }),
              (this.loading = !1),
              (this.visible = !1),
              (this.showTaskModal = !1),
              (this.resourceData = []),
              (this.months = []),
              (this.dates = []),
              (this.scheduledTasks = []),
              (this.selectedTaskId = ""),
              (this.selectedResourceId = ""),
              (this.selectedDate = ""),
              (this.projectId = "");
          }
          get title() {
            return `Scheduled tasks - ${this.selectedDate}`;
          }
          open() {
            this.visible = !0;
          }
          close() {
            this.visible = !1;
          }
          ngOnInit() {
            this.tvRefreshSubscription = this.tvService.onRefresh.subscribe(
              () => {
                this.getResources();
              }
            );
          }
          ngOnDestroy() {
            this.tvRefreshSubscription?.unsubscribe();
          }
          getColor(t) {
            return L.Lj[t?.charAt(0).toUpperCase() || "A"];
          }
          ngOnChanges(t) {
            const n = t.selectedWeek;
            n.currentValue !== n.previousValue && this.getResources();
          }
          getResources() {
            var t = this;
            return (0, f.Z)(function* () {
              try {
                t.loading = !0;
                const n = yield t.api.getProjectWiseResources(t.selectedWeek);
                n.done &&
                  ((t.months = n.body.months),
                  (t.dates = n.body.dates),
                  (t.resourceData = n.body.projects),
                  document.documentElement.style.setProperty(
                    "--column_count",
                    t.dates.length.toString()
                  ),
                  document.documentElement.style.setProperty(
                    "--column_width",
                    `${me.p9.DAYS}px`
                  ),
                  document.documentElement.style.setProperty(
                    "--top-margin",
                    "180px"
                  )),
                  (t.loading = !1);
              } catch (n) {
                (t.loading = !1), (0, b.tu)(n);
              }
            })();
          }
          onTaskCreateOrUpdate() {
            this.getResources();
          }
          taskSelected(t = "", n = "") {
            (this.projectId = n),
              (this.selectedTaskId = t),
              (this.showTaskModal = !0);
          }
          scheduleClicked(t, n = "", s = "") {
            (this.visible = !0),
              (this.selectedDate = (0, F.Z)(new Date(s), "yyyy-MM-dd")),
              (this.selectedResourceId = n),
              (this.scheduledTasks = t);
          }
          onVisibilityChange(t) {
            t && document.body.classList.add("task-form-drawer-opened");
          }
        }
        return (
          ((o = r).ɵfac = function (t) {
            return new (t || o)(e.Y36(ue), e.Y36(J.f));
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-project-schedule"]],
            inputs: { selectedWeek: "selectedWeek" },
            features: [e.TTD],
            decls: 8,
            vars: 10,
            consts: [
              [1, "row", "bg-white", "mt-2", "mx-0"],
              [1, "col-md-12", "p-0"],
              [4, "ngIf"],
              ["class", "text-center py-5", 4, "ngIf"],
              [3, "show", "projectId", "taskId", "showChange", "taskIdChange"],
              [
                3,
                "nzVisible",
                "nzWidth",
                "nzTitle",
                "nzOffsetX",
                "nzOnClose",
                "nzVisibleChange",
              ],
              [4, "nzDrawerContent"],
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
                "no-data-text",
                2,
                "width",
                "max-content",
              ],
              [1, "text-center", "py-5"],
              ["nzSimple", ""],
              [1, "grid-scroller"],
              [1, "grid"],
              [1, "grid-entry", "fixed-left", "header-bg"],
              [1, "grid-entry", "m-0", "p-0", "month-grid", 2, "width", "0"],
              [1, "gantt__row-bars", "py-1"],
              [
                "class",
                "justify-content-between d-flex",
                "style",
                "z-index: 1;",
                3,
                "grid-column",
                4,
                "ngFor",
                "ngForOf",
              ],
              [
                "class",
                "grid-entry border-0 header-bg",
                3,
                "sunday",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "grid-header", "fixed-left", "top-grid-header"],
              [1, "grid-header", "m-0", "p-0"],
              [
                "class",
                "grid-header",
                3,
                "sunday",
                "today-header",
                "id",
                4,
                "ngFor",
                "ngForOf",
              ],
              [4, "ngFor", "ngForOf"],
              [1, "justify-content-between", "d-flex", 2, "z-index", "1"],
              ["class", "ps-2", 4, "ngIf"],
              ["class", "month", 4, "ngIf"],
              [1, "ps-2"],
              [1, "month"],
              [1, "grid-entry", "border-0", "header-bg"],
              [1, "grid-header", 3, "id"],
              [
                1,
                "grid-entry",
                "gantt__row-first",
                "d-flex",
                "align-items-center",
                "justify-content-between",
                "fixed-left",
              ],
              [
                "nz-button",
                "",
                "nzType",
                "text",
                1,
                "float-end",
                "p-0",
                "project-collapse-icon",
                3,
                "click",
              ],
              [
                "width",
                "16",
                "src",
                "/assets/images/chevron-down-solid.svg",
                "alt",
                "Subtasks",
                1,
                "align-self-center",
                "cursor-pointer",
                "img-fluid",
              ],
              [1, "project-name", "me-auto", "ms-2"],
              [1, "grid-entry", "m-0", "p-0", "d-flex", 2, "width", "0"],
              [1, "gantt__row-bars"],
              [
                "class",
                "px-2 py-0 resource-cell",
                3,
                "grid-column",
                "background-color",
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              ["class", "grid-entry", 3, "weekend", 4, "ngFor", "ngForOf"],
              [1, "px-2", "py-0", "resource-cell", 3, "click"],
              [1, "grid-entry"],
              [
                1,
                "grid-entry",
                "fixed-left",
                "d-flex",
                "align-items-center",
                "ps-4",
              ],
              [1, "avatar"],
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
              ["nz-typography", "", "nzEllipsis", "", 1, "member"],
              [
                "class",
                "grid-entry m-0 p-0 d-flex",
                "style",
                "width: 0;",
                3,
                "child-background-color",
                4,
                "ngIf",
              ],
              [
                "class",
                "grid-entry ",
                3,
                "weekend",
                "child-background-color",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "me-2", 3, "nzSize", "nzText", "nzSrc"],
              [1, "text-muted"],
              [
                1,
                "grid-entry",
                "fixed-left",
                "d-flex",
                "align-items-center",
                "ps-4",
                "child-background-color",
              ],
              [
                "class",
                "me-2",
                3,
                "nzSize",
                "nzText",
                "background-color",
                4,
                "ngIf",
              ],
              [1, "member"],
              [
                "class",
                "grid-entry m-0 p-0 d-flex",
                "style",
                "width: 0;",
                4,
                "ngIf",
              ],
              [
                "class",
                "grid-entry child-background-color",
                3,
                "weekend",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "me-2", 3, "nzSize", "nzText"],
              [1, "grid-entry", "child-background-color"],
              [1, "mx-4", "mt-3"],
              ["nz-list", "", "nzBordered", "", 3, "nzDataSource"],
              [
                "nz-list-item",
                "",
                "class",
                "cursor-pointer",
                3,
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              ["nz-list-item", "", 1, "cursor-pointer", 3, "click"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "div", 0)(1, "div", 1),
                e.YNc(2, Ze, 6, 0, "div", 2),
                e.YNc(3, je, 2, 0, "div", 3),
                e.YNc(4, tt, 13, 4, "div", 2),
                e.qZA()(),
                e.TgZ(5, "worklenz-task-view", 4),
                e.NdJ("showChange", function (a) {
                  return (n.showTaskModal = a);
                })("taskIdChange", function (a) {
                  return (n.selectedTaskId = a);
                }),
                e.qZA(),
                e.TgZ(6, "nz-drawer", 5),
                e.NdJ("nzOnClose", function () {
                  return n.close();
                })("nzVisibleChange", function (a) {
                  return n.onVisibilityChange(a);
                }),
                e.YNc(7, it, 4, 2, "ng-container", 6),
                e.qZA()),
                2 & t &&
                  (e.xp6(2),
                  e.Q6J("ngIf", !n.resourceData.length && !n.loading),
                  e.xp6(1),
                  e.Q6J("ngIf", n.loading),
                  e.xp6(1),
                  e.Q6J("ngIf", n.resourceData.length && !n.loading),
                  e.xp6(1),
                  e.Q6J("show", n.showTaskModal)("projectId", n.projectId)(
                    "taskId",
                    n.selectedTaskId
                  ),
                  e.xp6(1),
                  e.Q6J("nzVisible", n.visible)("nzWidth", 650)(
                    "nzTitle",
                    n.title
                  )("nzOffsetX", n.showTaskModal ? 180 : 0));
            },
            dependencies: [
              m.sg,
              m.O5,
              se.W,
              G.Dz,
              A.ZU,
              O.w,
              D.Vz,
              D.SQ,
              S.n_,
              S.AA,
              S.yi,
              S.IO,
              re.E,
              m.uU,
              ae.I,
            ],
            styles: [
              'body[_ngcontent-%COMP%]{margin:0}.grid-scroller[_ngcontent-%COMP%]{position:relative;overflow:auto;height:calc(100vh - var(--top-margin))}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:250px 0 repeat(var(--column_count),var(--column_width));width:calc(250px + var(--column_count) * var(--column_width))}.grid-entry[_ngcontent-%COMP%]{padding:12px 7px;background-color:#fff;border-left:1px solid #f1f1f1;border-bottom:1px solid #f1f1f1}.grid-entry.last[_ngcontent-%COMP%], .grid-header.last[_ngcontent-%COMP%]{border-right:none}.grid-header[_ngcontent-%COMP%]{background-color:#fafafa;padding:2px;font-weight:500;font-size:11px;color:#202125;position:sticky;top:0;z-index:1;border:1px solid #ededed;text-align:center;line-height:13px}.grid-header.fixed-left[_ngcontent-%COMP%]{z-index:5}.fixed-left[_ngcontent-%COMP%]{position:sticky;left:0;z-index:2;border-bottom:1px solid #f1f1f1;border-left:1px solid #f1f1f1;border-right:1.4px solid #B5B4B4}.placeholder[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:95;border-right:none}mwlResizable[_ngcontent-%COMP%]{box-sizing:border-box}.resize-handle-top[_ngcontent-%COMP%], .resize-handle-bottom[_ngcontent-%COMP%]{position:absolute;height:5px;cursor:row-resize;width:100%}.resize-handle-top[_ngcontent-%COMP%]{top:0}.resize-handle-bottom[_ngcontent-%COMP%]{bottom:0}.resize-handle-left[_ngcontent-%COMP%], .resize-handle-right[_ngcontent-%COMP%]{position:absolute;cursor:col-resize;width:9px;height:18px;background:#ffffff;border:none;border-radius:1px;top:0;bottom:0;margin:auto 1px}.resize-handle-right[_ngcontent-%COMP%]:after, .resize-handle-left[_ngcontent-%COMP%]:after{content:"||";position:absolute;display:inline-block;inset:0;color:#929292;line-height:19px;font-weight:400;margin:auto;width:max-content}.gantt__row-bars[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.gantt__row-bars[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:transparent!important}.gantt__row-bars[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .resize-handle-left[_ngcontent-%COMP%], .gantt__row-bars[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .resize-handle-right[_ngcontent-%COMP%]{box-shadow:0 0 2px #00000073}.member[_ngcontent-%COMP%]{color:#2f4f4f}.resize-handle-left[_ngcontent-%COMP%]{left:0}.resize-handle-right[_ngcontent-%COMP%]{right:0}.project-collapse-icon[_ngcontent-%COMP%]{font-size:12px;line-height:15px;height:15px;width:15px;color:#47474791!important}.today[_ngcontent-%COMP%]{border-left:2px solid #1890ff;background-repeat:no-repeat;background-position:center center}.today-header[_ngcontent-%COMP%]{background-color:#1890ff;border-color:#1890ff;color:#fff}.top-grid-header[_ngcontent-%COMP%]{border-top:none}.grid-entry-top[_ngcontent-%COMP%]{border-bottom:none}.month-grid[_ngcontent-%COMP%]{border-top:1px solid #f1f1f1}.parent-relative[_ngcontent-%COMP%]{position:absolute}.px-3.py-0.ng-star-inserted.resize-active.resize-ghost-element[_ngcontent-%COMP%]{margin-top:0!important}.dropdown-highlight[_ngcontent-%COMP%]:hover{background-color:#d0eefa54;border:#5587f5 1px solid;border-radius:3px}.expanded[_ngcontent-%COMP%]{transform:rotate(-90deg)}.sub-tasks-arrow[_ngcontent-%COMP%]{position:relative;cursor:pointer;left:3px;width:16px;padding:2px;border:1px solid transparent;z-index:1}.resource-cell[_ngcontent-%COMP%]{height:22px;margin:7px 0 1px;border-radius:0}.child-background-cell[_ngcontent-%COMP%]{background-color:#f5f5f5}.child-background-color[_ngcontent-%COMP%]{background-color:#f5f5f58a}.no-data-img-holder[_ngcontent-%COMP%]{width:100px;margin-top:42px}',
            ],
          })),
          r
        );
      })();
      function st(o, r) {
        1 & o &&
          (e.TgZ(0, "div")(1, "div", 7)(2, "div", 8),
          e._UZ(3, "img", 9),
          e.qZA(),
          e.TgZ(4, "span", 10),
          e._uU(5, "The selected team has no scheduled member activities."),
          e.qZA()()());
      }
      function rt(o, r) {
        1 & o && (e.TgZ(0, "div", 11), e._UZ(1, "nz-spin", 12), e.qZA());
      }
      function at(o, r) {
        if ((1 & o && (e.TgZ(0, "small", 27), e._uU(1), e.qZA()), 2 & o)) {
          const i = e.oxw().$implicit;
          e.xp6(1), e.hij("W", i.week_index || -1, "");
        }
      }
      function ct(o, r) {
        if ((1 & o && (e.TgZ(0, "span", 28), e._uU(1), e.qZA()), 2 & o)) {
          const i = e.oxw().$implicit;
          e.xp6(1), e.Oqu(i.month_name);
        }
      }
      function dt(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "span", 24),
            e.YNc(1, at, 2, 1, "small", 25),
            e.YNc(2, ct, 2, 1, "span", 26),
            e._UZ(3, "span"),
            e.qZA()),
          2 & o)
        ) {
          const i = r.$implicit;
          e.Udp("grid-column", i.min + "/" + i.max),
            e.xp6(1),
            e.Q6J("ngIf", i.days_of_week && i.days_of_week.length > 1),
            e.xp6(1),
            e.Q6J("ngIf", i.days_of_week && i.days_of_week.length > 2);
        }
      }
      function lt(o, r) {
        1 & o && e._UZ(0, "div", 29),
          2 & o && e.ekj("sunday", r.$implicit.isLastDayOfWeek);
      }
      function _t(o, r) {
        if (
          (1 & o && (e.TgZ(0, "div", 30), e._uU(1), e.ALo(2, "date"), e.qZA()),
          2 & o)
        ) {
          const i = r.$implicit,
            t = r.index;
          e.ekj("sunday", i.isSunday)("today-header", i.isToday),
            e.MGl("id", "date_", t, ""),
            e.xp6(1),
            e.hij("", e.xi3(2, 6, i.date, "dd"), " ");
        }
      }
      function pt(o, r) {
        if ((1 & o && e._UZ(0, "nz-avatar", 41), 2 & o)) {
          const i = e.oxw().$implicit,
            t = e.oxw(2);
          e.Udp("background-color", t.getColor(i.name || i.invitee_email)),
            e.Q6J("nzSize", 28)(
              "nzText",
              i.name ? i.name.charAt(0).toUpperCase() : ""
            );
        }
      }
      function ht(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "li", 42),
            e.NdJ("click", function () {
              const s = e.CHM(i).$implicit,
                a = e.oxw().$implicit,
                d = e.oxw(2);
              return e.KtG(
                d.scheduleClicked(s.scheduled_tasks, a.id, s.date_series)
              );
            }),
            e.qZA();
        }
        if (2 & o) {
          const i = r.$implicit,
            t = e.oxw().$implicit;
          e.Udp("grid-column", i.min)("background-color", t.color_code);
        }
      }
      function gt(o, r) {
        1 & o && e._UZ(0, "div", 43),
          2 & o && e.ekj("weekend", r.$implicit.isWeekend);
      }
      function mt(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "li", 42),
            e.NdJ("click", function () {
              const s = e.CHM(i).$implicit,
                a = e.oxw(4).$implicit,
                d = e.oxw(2);
              return e.KtG(
                d.scheduleClicked(s.scheduled_tasks, a.id, s.date_series)
              );
            }),
            e.qZA();
        }
        if (2 & o) {
          const i = r.$implicit,
            t = e.oxw(2).$implicit;
          e.Udp("grid-column", i.min)("background-color", t.color_code);
        }
      }
      function ut(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 37)(1, "ul", 38),
            e.YNc(2, mt, 1, 4, "li", 39),
            e.qZA()()),
          2 & o)
        ) {
          const i = e.oxw().$implicit,
            t = e.oxw(2).$implicit;
          e.ekj("child-background-color", t.collapsed),
            e.xp6(2),
            e.Q6J("ngForOf", i.tasks);
        }
      }
      function ft(o, r) {
        if ((1 & o && e._UZ(0, "div", 43), 2 & o)) {
          const i = r.$implicit,
            t = e.oxw(3).$implicit;
          e.ekj("weekend", i.isWeekend)("child-background-color", t.collapsed);
        }
      }
      function Ct(o, r) {
        if (
          (1 & o &&
            (e.ynx(0),
            e.TgZ(1, "div", 44)(2, "div", 45),
            e._uU(3),
            e.qZA()(),
            e.YNc(4, ut, 3, 3, "div", 46),
            e.YNc(5, ft, 1, 4, "div", 47),
            e.BQk()),
          2 & o)
        ) {
          const i = r.$implicit,
            t = e.oxw(2).$implicit,
            n = e.oxw(2);
          e.xp6(1),
            e.ekj("child-background-cell", t.collapsed),
            e.xp6(2),
            e.hij(" ", i.name, " "),
            e.xp6(1),
            e.Q6J("ngIf", t.collapsed),
            e.xp6(1),
            e.Q6J("ngForOf", n.dates);
        }
      }
      function kt(o, r) {
        if ((1 & o && e._UZ(0, "nz-avatar", 41), 2 & o)) {
          const i = e.oxw(5);
          e.Udp("background-color", i.getColor("Unassigned")),
            e.Q6J("nzSize", 28)("nzText", "U");
        }
      }
      function xt(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "li", 42),
            e.NdJ("click", function () {
              const s = e.CHM(i).$implicit,
                a = e.oxw(4).$implicit,
                d = e.oxw(2);
              return e.KtG(
                d.scheduleClicked(s.scheduled_tasks, a.id, s.date_series)
              );
            }),
            e.qZA();
        }
        if (2 & o) {
          const i = r.$implicit,
            t = e.oxw(4).$implicit;
          e.Udp("grid-column", i.min)("background-color", t.color_code);
        }
      }
      function vt(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 37)(1, "ul", 38),
            e.YNc(2, xt, 1, 4, "li", 39),
            e.qZA()()),
          2 & o)
        ) {
          const i = e.oxw(3).$implicit;
          e.xp6(2), e.Q6J("ngForOf", i.unassigned_tasks);
        }
      }
      function Tt(o, r) {
        1 & o && e._UZ(0, "div", 51),
          2 & o && e.ekj("weekend", r.$implicit.isWeekend);
      }
      function bt(o, r) {
        if (
          (1 & o &&
            (e.ynx(0),
            e.TgZ(1, "div", 48)(2, "div", 35),
            e.YNc(3, kt, 1, 4, "nz-avatar", 36),
            e.qZA(),
            e.TgZ(4, "div", 45),
            e._uU(5, "Unassigned tasks"),
            e.qZA()(),
            e.YNc(6, vt, 3, 1, "div", 49),
            e.YNc(7, Tt, 1, 2, "div", 50),
            e.BQk()),
          2 & o)
        ) {
          const i = e.oxw(2).$implicit,
            t = e.oxw(2);
          e.xp6(3),
            e.Q6J("ngIf", i.unassigned_tasks),
            e.xp6(3),
            e.Q6J("ngIf", i.unassigned_tasks.length),
            e.xp6(1),
            e.Q6J("ngForOf", t.dates);
        }
      }
      function Mt(o, r) {
        if (
          (1 & o &&
            (e.ynx(0),
            e.YNc(1, Ct, 6, 5, "ng-container", 23),
            e.YNc(2, bt, 8, 3, "ng-container", 2),
            e.BQk()),
          2 & o)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J("ngForOf", i.project_members),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              null == i.unassigned_tasks ? null : i.unassigned_tasks.length
            );
        }
      }
      function wt(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.ynx(0),
            e.TgZ(1, "div", 31)(2, "div", 32),
            e.NdJ("click", function () {
              const s = e.CHM(i).$implicit;
              return e.KtG((s.collapsed = !s.collapsed));
            }),
            e._UZ(3, "img", 33),
            e.qZA(),
            e.TgZ(4, "span", 34)(5, "div", 35),
            e.YNc(6, pt, 1, 4, "nz-avatar", 36),
            e.qZA(),
            e._uU(7),
            e.qZA()(),
            e.TgZ(8, "div", 37)(9, "ul", 38),
            e.YNc(10, ht, 1, 4, "li", 39),
            e.qZA()(),
            e.YNc(11, gt, 1, 2, "div", 40),
            e.YNc(12, Mt, 3, 2, "ng-container", 2),
            e.BQk();
        }
        if (2 & o) {
          const i = r.$implicit,
            t = e.oxw(2);
          e.xp6(3),
            e.ekj("expanded", !i.collapsed),
            e.xp6(3),
            e.Q6J("ngIf", i.name),
            e.xp6(1),
            e.hij(" ", i.name || i.invitee_email, ""),
            e.xp6(3),
            e.Q6J("ngForOf", i.schedule),
            e.xp6(1),
            e.Q6J("ngForOf", t.dates),
            e.xp6(1),
            e.Q6J("ngIf", i.collapsed);
        }
      }
      function zt(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "div")(1, "div", 13)(2, "div", 14),
            e._UZ(3, "div", 15),
            e.TgZ(4, "div", 16),
            e.ynx(5),
            e.TgZ(6, "span", 17),
            e.YNc(7, dt, 4, 4, "span", 18),
            e.qZA(),
            e.BQk(),
            e.qZA(),
            e.YNc(8, lt, 1, 2, "div", 19),
            e._UZ(9, "div", 20)(10, "div", 21),
            e.YNc(11, _t, 3, 9, "div", 22),
            e.YNc(12, wt, 13, 7, "ng-container", 23),
            e.qZA()()()),
          2 & o)
        ) {
          const i = e.oxw();
          e.xp6(7),
            e.Q6J("ngForOf", i.months),
            e.xp6(1),
            e.Q6J("ngForOf", i.dates),
            e.xp6(3),
            e.Q6J("ngForOf", i.dates),
            e.xp6(1),
            e.Q6J("ngForOf", i.resourceData);
        }
      }
      function yt(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "li", 55),
            e.NdJ("click", function () {
              const s = e.CHM(i).$implicit,
                a = e.oxw(2);
              return e.KtG(a.taskSelected(s.id, s.project_id));
            }),
            e.TgZ(1, "nz-list-item-meta", 56)(2, "nz-list-item-meta-title"),
            e._uU(3),
            e.qZA()()();
        }
        if (2 & o) {
          const i = r.$implicit;
          e.xp6(1),
            e.Q6J("nzDescription", i.project_name),
            e.xp6(2),
            e.hij(" ", i.name, " ");
        }
      }
      function Ot(o, r) {
        if (
          (1 & o &&
            (e.ynx(0),
            e.TgZ(1, "div", 52)(2, "ul", 53),
            e.YNc(3, yt, 4, 2, "li", 54),
            e.qZA()(),
            e.BQk()),
          2 & o)
        ) {
          const i = e.oxw();
          e.xp6(2),
            e.Q6J("nzDataSource", i.scheduledTasks),
            e.xp6(1),
            e.Q6J("ngForOf", i.scheduledTasks);
        }
      }
      let St = (() => {
        var o;
        class r {
          constructor(t, n) {
            (this.api = t),
              (this.tvService = n),
              (this.selectedWeek = {
                start: (0, W.Z)(new Date()),
                end: oe(new Date()),
              }),
              (this.loading = !1),
              (this.visible = !1),
              (this.showTaskModal = !1),
              (this.resourceData = []),
              (this.months = []),
              (this.dates = []),
              (this.scheduledTasks = []),
              (this.selectedTaskId = ""),
              (this.selectedResourceId = ""),
              (this.selectedDate = ""),
              (this.projectId = "");
          }
          get title() {
            return `Scheduled tasks - ${this.selectedDate}`;
          }
          open() {
            this.visible = !0;
          }
          close() {
            this.visible = !1;
          }
          ngOnInit() {
            this.tvRefreshSubscription = this.tvService.onRefresh.subscribe(
              () => {
                this.getResources();
              }
            );
          }
          ngOnDestroy() {
            this.tvRefreshSubscription?.unsubscribe();
          }
          getColor(t) {
            return L.Lj[t?.charAt(0).toUpperCase() || "A"];
          }
          ngOnChanges(t) {
            const n = t.selectedWeek;
            n.currentValue !== n.previousValue &&
              this.getResources().then((s) => s);
          }
          getResources() {
            var t = this;
            return (0, f.Z)(function* () {
              try {
                t.loading = !0;
                const n = yield t.api.getUserWiseResources(t.selectedWeek);
                n.done &&
                  ((t.months = n.body.months),
                  (t.dates = n.body.dates),
                  (t.resourceData = n.body.projects),
                  document.documentElement.style.setProperty(
                    "--column_count",
                    t.dates.length.toString()
                  ),
                  document.documentElement.style.setProperty(
                    "--column_width",
                    `${me.p9.DAYS}px`
                  ),
                  document.documentElement.style.setProperty(
                    "--top-margin",
                    "180px"
                  ),
                  (t.loading = !1));
              } catch (n) {
                (t.loading = !1), (0, b.tu)(n);
              }
            })();
          }
          onTaskCreateOrUpdate() {
            this.getResources();
          }
          taskSelected(t = "", n = "") {
            (this.projectId = n),
              (this.selectedTaskId = t),
              (this.showTaskModal = !0);
          }
          scheduleClicked(t, n = "", s = "") {
            (this.visible = !0),
              (this.selectedDate = (0, F.Z)(new Date(s), "yyyy-MM-dd")),
              (this.selectedResourceId = n),
              (this.scheduledTasks = t);
          }
          onVisibilityChange(t) {
            t && document.body.classList.add("task-form-drawer-opened");
          }
        }
        return (
          ((o = r).ɵfac = function (t) {
            return new (t || o)(e.Y36(ue), e.Y36(J.f));
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-team-schedule"]],
            inputs: { selectedWeek: "selectedWeek" },
            features: [e.TTD],
            decls: 8,
            vars: 10,
            consts: [
              [1, "row", "bg-white", "mt-2", "mx-0"],
              [1, "col-md-12", "p-0"],
              [4, "ngIf"],
              ["class", "text-center py-5", 4, "ngIf"],
              [3, "show", "projectId", "taskId", "showChange", "taskIdChange"],
              [
                3,
                "nzVisible",
                "nzWidth",
                "nzTitle",
                "nzOffsetX",
                "nzOnClose",
                "nzVisibleChange",
              ],
              [4, "nzDrawerContent"],
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
                "no-data-text",
                2,
                "width",
                "max-content",
              ],
              [1, "text-center", "py-5"],
              ["nzSimple", ""],
              [1, "grid-scroller"],
              [1, "grid"],
              [1, "grid-entry", "fixed-left", "header-bg"],
              [1, "grid-entry", "m-0", "p-0", "month-grid", 2, "width", "0"],
              [1, "gantt__row-bars", "py-1"],
              [
                "class",
                "justify-content-between d-flex",
                "style",
                "z-index: 1;",
                3,
                "grid-column",
                4,
                "ngFor",
                "ngForOf",
              ],
              [
                "class",
                "grid-entry border-0 header-bg",
                3,
                "sunday",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "grid-header", "fixed-left", "top-grid-header"],
              [1, "grid-header", "m-0", "p-0"],
              [
                "class",
                "grid-header",
                3,
                "sunday",
                "today-header",
                "id",
                4,
                "ngFor",
                "ngForOf",
              ],
              [4, "ngFor", "ngForOf"],
              [1, "justify-content-between", "d-flex", 2, "z-index", "1"],
              ["class", "ps-2", 4, "ngIf"],
              ["class", "month", 4, "ngIf"],
              [1, "ps-2"],
              [1, "month"],
              [1, "grid-entry", "border-0", "header-bg"],
              [1, "grid-header", 3, "id"],
              [
                1,
                "grid-entry",
                "gantt__row-first",
                "d-flex",
                "align-items-center",
                "justify-content-between",
                "fixed-left",
              ],
              [
                "nz-button",
                "",
                "nzType",
                "text",
                1,
                "float-end",
                "p-0",
                "project-collapse-icon",
                3,
                "click",
              ],
              [
                "width",
                "16",
                "src",
                "/assets/images/chevron-down-solid.svg",
                "alt",
                "Subtasks",
                1,
                "align-self-center",
                "cursor-pointer",
                "img-fluid",
              ],
              [1, "project-name", "me-auto", "ms-2", "d-flex"],
              [1, "avatar"],
              [
                "class",
                "me-2",
                3,
                "nzSize",
                "nzText",
                "background-color",
                4,
                "ngIf",
              ],
              [1, "grid-entry", "m-0", "p-0", "d-flex", 2, "width", "0"],
              [1, "gantt__row-bars"],
              [
                "class",
                "px-2 py-0 resource-cell",
                3,
                "grid-column",
                "background-color",
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              ["class", "grid-entry", 3, "weekend", 4, "ngFor", "ngForOf"],
              [1, "me-2", 3, "nzSize", "nzText"],
              [1, "px-2", "py-0", "resource-cell", 3, "click"],
              [1, "grid-entry"],
              [
                1,
                "grid-entry",
                "fixed-left",
                "d-flex",
                "align-items-center",
                "ps-4",
              ],
              [1, "member"],
              [
                "class",
                "grid-entry m-0 p-0 d-flex",
                "style",
                "width: 0;",
                3,
                "child-background-color",
                4,
                "ngIf",
              ],
              [
                "class",
                "grid-entry ",
                3,
                "weekend",
                "child-background-color",
                4,
                "ngFor",
                "ngForOf",
              ],
              [
                1,
                "grid-entry",
                "fixed-left",
                "d-flex",
                "align-items-center",
                "ps-4",
                "child-background-color",
              ],
              [
                "class",
                "grid-entry m-0 p-0 d-flex",
                "style",
                "width: 0;",
                4,
                "ngIf",
              ],
              [
                "class",
                "grid-entry child-background-color",
                3,
                "weekend",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "grid-entry", "child-background-color"],
              [1, "mx-4", "mt-3"],
              ["nz-list", "", "nzBordered", "", 3, "nzDataSource"],
              [
                "nz-list-item",
                "",
                "class",
                "cursor-pointer",
                3,
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              ["nz-list-item", "", 1, "cursor-pointer", 3, "click"],
              [3, "nzDescription"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "div", 0)(1, "div", 1),
                e.YNc(2, st, 6, 0, "div", 2),
                e.YNc(3, rt, 2, 0, "div", 3),
                e.YNc(4, zt, 13, 4, "div", 2),
                e.qZA()(),
                e.TgZ(5, "worklenz-task-view", 4),
                e.NdJ("showChange", function (a) {
                  return (n.showTaskModal = a);
                })("taskIdChange", function (a) {
                  return (n.selectedTaskId = a);
                }),
                e.qZA(),
                e.TgZ(6, "nz-drawer", 5),
                e.NdJ("nzOnClose", function () {
                  return n.close();
                })("nzVisibleChange", function (a) {
                  return n.onVisibilityChange(a);
                }),
                e.YNc(7, Ot, 4, 2, "ng-container", 6),
                e.qZA()),
                2 & t &&
                  (e.xp6(2),
                  e.Q6J("ngIf", !n.resourceData.length && !n.loading),
                  e.xp6(1),
                  e.Q6J("ngIf", n.loading),
                  e.xp6(1),
                  e.Q6J("ngIf", n.resourceData.length && !n.loading),
                  e.xp6(1),
                  e.Q6J("show", n.showTaskModal)("projectId", n.projectId)(
                    "taskId",
                    n.selectedTaskId
                  ),
                  e.xp6(1),
                  e.Q6J("nzVisible", n.visible)("nzWidth", 650)(
                    "nzTitle",
                    n.title
                  )("nzOffsetX", n.showTaskModal ? 180 : 0));
            },
            dependencies: [
              m.sg,
              m.O5,
              se.W,
              G.Dz,
              A.ZU,
              O.w,
              D.Vz,
              D.SQ,
              S.n_,
              S.AA,
              S.yi,
              S.IO,
              re.E,
              m.uU,
            ],
            styles: [
              'body[_ngcontent-%COMP%]{margin:0}.grid-scroller[_ngcontent-%COMP%]{position:relative;overflow:auto;height:calc(100vh - var(--top-margin))}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:250px 0 repeat(var(--column_count),var(--column_width));width:calc(250px + var(--column_count) * var(--column_width))}.grid-entry[_ngcontent-%COMP%]{padding:12px 7px;background-color:#fff;border-left:1px solid #f1f1f1;border-bottom:1px solid #f1f1f1}.grid-entry.last[_ngcontent-%COMP%], .grid-header.last[_ngcontent-%COMP%]{border-right:none}.grid-header[_ngcontent-%COMP%]{background-color:#fafafa;padding:2px;font-weight:500;font-size:11px;color:#202125;position:sticky;top:0;z-index:1;border:1px solid #ededed;text-align:center;line-height:13px}.grid-header.fixed-left[_ngcontent-%COMP%]{z-index:5}.fixed-left[_ngcontent-%COMP%]{position:sticky;left:0;z-index:2;border-bottom:1px solid #f1f1f1;border-left:1px solid #f1f1f1;border-right:1.4px solid #B5B4B4}.placeholder[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:95;border-right:none}mwlResizable[_ngcontent-%COMP%]{box-sizing:border-box}.resize-handle-top[_ngcontent-%COMP%], .resize-handle-bottom[_ngcontent-%COMP%]{position:absolute;height:5px;cursor:row-resize;width:100%}.resize-handle-top[_ngcontent-%COMP%]{top:0}.resize-handle-bottom[_ngcontent-%COMP%]{bottom:0}.resize-handle-left[_ngcontent-%COMP%], .resize-handle-right[_ngcontent-%COMP%]{position:absolute;cursor:col-resize;width:9px;height:18px;background:#ffffff;border:none;border-radius:1px;top:0;bottom:0;margin:auto 1px}.resize-handle-right[_ngcontent-%COMP%]:after, .resize-handle-left[_ngcontent-%COMP%]:after{content:"||";position:absolute;display:inline-block;inset:0;color:#929292;line-height:19px;font-weight:400;margin:auto;width:max-content}.gantt__row-bars[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.gantt__row-bars[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:transparent!important}.gantt__row-bars[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .resize-handle-left[_ngcontent-%COMP%], .gantt__row-bars[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .resize-handle-right[_ngcontent-%COMP%]{box-shadow:0 0 2px #00000073}.member[_ngcontent-%COMP%]{color:#2f4f4f}.resize-handle-left[_ngcontent-%COMP%]{left:0}.resize-handle-right[_ngcontent-%COMP%]{right:0}.project-collapse-icon[_ngcontent-%COMP%]{font-size:12px;line-height:15px;height:15px;width:15px;color:#47474791!important}.today[_ngcontent-%COMP%]{border-left:2px solid #1890ff;background-repeat:no-repeat;background-position:center center}.today-header[_ngcontent-%COMP%]{background-color:#1890ff;border-color:#1890ff;color:#fff}.top-grid-header[_ngcontent-%COMP%]{border-top:none}.grid-entry-top[_ngcontent-%COMP%]{border-bottom:none}.month-grid[_ngcontent-%COMP%]{border-top:1px solid #f1f1f1}.parent-relative[_ngcontent-%COMP%]{position:absolute}.px-3.py-0.ng-star-inserted.resize-active.resize-ghost-element[_ngcontent-%COMP%]{margin-top:0!important}.dropdown-highlight[_ngcontent-%COMP%]:hover{background-color:#d0eefa54;border:#5587f5 1px solid;border-radius:3px}.expanded[_ngcontent-%COMP%]{transform:rotate(-90deg)}.sub-tasks-arrow[_ngcontent-%COMP%]{position:relative;cursor:pointer;left:3px;width:16px;padding:2px;border:1px solid transparent;z-index:1}.resource-cell[_ngcontent-%COMP%]{height:22px;margin:7px 0 1px;border-radius:0}.child-background-cell[_ngcontent-%COMP%]{background-color:#f5f5f5}.child-background-color[_ngcontent-%COMP%]{background-color:#f5f5f58a}.no-data-img-holder[_ngcontent-%COMP%]{width:100px;margin-top:42px}',
            ],
          })),
          r
        );
      })();
      var Q = c(86408),
        R = c(27782),
        Pt = c(16676),
        x = c.n(Pt),
        k = c(78645);
      let K = (() => {
        var o;
        class r {
          constructor() {
            (this.GANNT_COLUMN_WIDTH = 35),
              (this.startDate = null),
              (this.endDate = null),
              (this.scrollAmount$Sbj = new k.x());
          }
          get onScrollToDate() {
            return this.scrollAmount$Sbj.asObservable();
          }
          emitScrollToDate(t) {
            this.scrollAmount$Sbj.next(t);
          }
          scrollToDay(t) {
            const n = x()(this.startDate).format("YYYY-MM-DD"),
              s = x()(t).format("YYYY-MM-DD"),
              a = x()(s).diff(n, "days");
            this.emitScrollToDate(a * this.GANNT_COLUMN_WIDTH);
          }
        }
        return (
          ((o = r).ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵprov = e.Yz7({ token: o, factory: o.ɵfac, providedIn: "root" })),
          r
        );
      })();
      var X = c(52682),
        g = c(60095),
        ee = c(42840),
        ce = c(41958),
        fe = c(66987),
        H = c(92574),
        P = c(9691),
        C = c(71993),
        v = c(975),
        de = c(79207),
        Z = c(32333),
        $ = c(84676),
        Ce = c(18223),
        Y = c(62595),
        le = c(24139),
        ke = c(49278),
        B = c(33640);
      function It(o, r) {
        if ((1 & o && (e.ynx(0), e._UZ(1, "div", 1), e.BQk()), 2 & o)) {
          const i = e.oxw();
          e.xp6(1),
            e.Udp(
              "background-color",
              i.project.is_expanded ? "#1890ff69" : "#d9e3ee"
            )("border-color", "#adb5bd")(
              "width",
              i.project.indicator_width + "px"
            )("left", i.project.indicator_offset + "px");
        }
      }
      let At = (() => {
        var o;
        class r {
          constructor(t, n) {
            (this.service = t),
              (this.cdr = n),
              (this.project = null),
              this.service.onProjectIndicatorChange
                .pipe((0, C.sL)())
                .subscribe((s) => {
                  this.project?.id === s.projectId &&
                    ((this.project.indicator_offset = s.indicatorOffset),
                    (this.project.indicator_width = s.indicatorWidth),
                    this.cdr.markForCheck());
                }),
              this.service.onProjectToggle$.pipe((0, C.sL)()).subscribe((s) => {
                this.project?.id === s && this.cdr.markForCheck();
              });
          }
        }
        return (
          ((o = r).ɵfac = function (t) {
            return new (t || o)(e.Y36($.Z), e.Y36(e.sBO));
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-project-indicator"]],
            inputs: { project: "project" },
            decls: 1,
            vars: 1,
            consts: [
              [4, "ngIf"],
              [
                1,
                "duration-indicator",
                "cursor-pointer",
                "d-flex",
                "align-items-center",
              ],
            ],
            template: function (t, n) {
              1 & t && e.YNc(0, It, 2, 8, "ng-container", 0),
                2 & t && e.Q6J("ngIf", n.project);
            },
            dependencies: [m.O5],
            styles: [
              ".duration-indicator[_ngcontent-%COMP%]{position:absolute;border-radius:4px;top:10px;bottom:10px;overflow:hidden;z-index:0;transition:.125s all;border:none}",
            ],
            changeDetection: 0,
          })),
          r
        );
      })();
      var p = c(94489);
      function Zt(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.ynx(0),
            e.TgZ(1, "div", 1, 2)(3, "div", 3)(4, "div", 4),
            e.NdJ("mousedown", function (n) {
              e.CHM(i);
              const s = e.MAs(2),
                a = e.oxw();
              return (
                a.onResizeStart(n, a.allocation, "left", s),
                e.KtG(n.stopPropagation())
              );
            }),
            e.qZA(),
            e.TgZ(5, "div", 5),
            e.NdJ("mousedown", function (n) {
              e.CHM(i);
              const s = e.MAs(2),
                a = e.oxw();
              return (
                a.onResizeStart(n, a.allocation, "right", s),
                e.KtG(n.stopPropagation())
              );
            }),
            e.qZA()()(),
            e.BQk();
        }
        if (2 & o) {
          const i = e.oxw();
          e.xp6(1),
            e.Udp("width", i.allocation.indicator_width + "px")(
              "left",
              i.allocation.indicator_offset + "px"
            );
        }
      }
      let jt = (() => {
          var o;
          class r {
            constructor(t, n, s, a) {
              (this.service = t),
                (this.common = n),
                (this.cdr = s),
                (this.socket = a),
                (this.teamMemberId = null),
                (this.projectId = null),
                (this.allocation = null),
                (this.isResized = !1),
                (this.handleResponse = (d) => {
                  this.allocation?.ids.find((_) => _ === d.id) &&
                    (x()(d.date).isSameOrAfter(this.common.endDate) ||
                    x()(d.date).isSameOrBefore(this.common.startDate)
                      ? this.service.emitReload()
                      : this.service.emitMemberIndicatorChange(
                          this.projectId,
                          this.teamMemberId
                        ));
                });
            }
            onContextMenu(t) {
              this.allocation?.ids &&
                this.service.emitOnContextMenu(
                  t,
                  this.projectId,
                  this.teamMemberId,
                  this.allocation.ids
                ),
                this.cdr.markForCheck();
            }
            ngOnInit() {
              this.socket.on(
                p.C.SCHEDULE_MEMBER_START_DATE_CHANGE.toString(),
                this.handleResponse
              ),
                this.socket.on(
                  p.C.SCHEDULE_MEMBER_END_DATE_CHANGE.toString(),
                  this.handleResponse
                );
            }
            ngOnDestroy() {
              this.socket.removeListener(
                p.C.SCHEDULE_MEMBER_START_DATE_CHANGE.toString(),
                this.handleResponse
              ),
                this.socket.removeListener(
                  p.C.SCHEDULE_MEMBER_END_DATE_CHANGE.toString(),
                  this.handleResponse
                );
            }
            onResizeStart(t, n, s, a) {
              if (
                !n ||
                !n.indicator_width ||
                !n.indicator_offset ||
                2 == t.button
              )
                return;
              const d = t.clientX,
                l = n.indicator_width,
                _ = n.indicator_offset,
                u = x()(this.common.startDate).format("YYYY-MM-DD"),
                M = x()(u);
              a.style.zIndex = "11";
              const h = (z) => {
                  const w = z.clientX - d;
                  let T = l,
                    y = _;
                  "left" === s
                    ? ((T = l - w), (y = _ + w))
                    : "right" === s && (T = l + w),
                    this.cdr.markForCheck(),
                    T >= this.common.GANNT_COLUMN_WIDTH - 3 &&
                      ((n.indicator_width = T),
                      (n.indicator_offset = y),
                      (this.isResized = !0),
                      this.cdr.markForCheck());
                },
                U = () => {
                  if (
                    (document.removeEventListener("mousemove", h),
                    document.removeEventListener("mouseup", U),
                    "left" === s)
                  ) {
                    const T = M.add(
                      n.indicator_offset
                        ? (n.indicator_offset -
                            (n.indicator_offset
                              ? n.indicator_offset %
                                this.common.GANNT_COLUMN_WIDTH
                              : 0)) /
                            this.common.GANNT_COLUMN_WIDTH
                        : 0,
                      "days"
                    );
                    this.changeAllocationStart(T);
                  }
                  if ("right" === s) {
                    const z = n.indicator_width
                      ? n.indicator_width % this.common.GANNT_COLUMN_WIDTH
                      : 0;
                    let w = n.indicator_width;
                    if (
                      (z > 0 &&
                        (w = n.indicator_width
                          ? n.indicator_width +
                            (this.common.GANNT_COLUMN_WIDTH - z)
                          : 0),
                      !w)
                    )
                      return;
                    const T = n.indicator_offset
                        ? (n.indicator_offset + w) /
                          this.common.GANNT_COLUMN_WIDTH
                        : 0,
                      y = x()(u).add(T - 1, "days");
                    this.changeAllocationEnd(y);
                  }
                };
              document.addEventListener("mousemove", h),
                document.addEventListener("mouseup", U);
            }
            changeAllocationStart(t) {
              this.socket.emit(
                p.C.SCHEDULE_MEMBER_START_DATE_CHANGE.toString(),
                JSON.stringify({
                  project_id: this.projectId,
                  team_member_is: this.teamMemberId,
                  allocation_ids: this.allocation?.ids || [],
                  allocated_from: t,
                })
              );
            }
            changeAllocationEnd(t) {
              this.socket.emit(
                p.C.SCHEDULE_MEMBER_END_DATE_CHANGE.toString(),
                JSON.stringify({
                  project_id: this.projectId,
                  team_member_is: this.teamMemberId,
                  allocation_ids: this.allocation?.ids || [],
                  allocated_to: t,
                })
              );
            }
          }
          return (
            ((o = r).ɵfac = function (t) {
              return new (t || o)(
                e.Y36($.Z),
                e.Y36(K),
                e.Y36(e.sBO),
                e.Y36(v.s)
              );
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [["worklenz-member-indicator"]],
              hostBindings: function (t, n) {
                1 & t &&
                  e.NdJ("contextmenu", function (a) {
                    return n.onContextMenu(a);
                  });
              },
              inputs: {
                teamMemberId: "teamMemberId",
                projectId: "projectId",
                allocation: "allocation",
              },
              decls: 1,
              vars: 1,
              consts: [
                [4, "ngIf"],
                [1, "duration-indicator", "cursor-pointer"],
                ["indicator", ""],
                [1, "d-flex"],
                [1, "resize-handle", "left-handle", 3, "mousedown"],
                [1, "resize-handle", "right-handle", 3, "mousedown"],
              ],
              template: function (t, n) {
                1 & t && e.YNc(0, Zt, 6, 4, "ng-container", 0),
                  2 & t &&
                    e.Q6J(
                      "ngIf",
                      n.teamMemberId && n.projectId && n.allocation
                    );
              },
              dependencies: [m.O5],
              styles: [
                '.duration-indicator[_ngcontent-%COMP%]{position:absolute;border-radius:4px;top:10px;bottom:10px;overflow:hidden;z-index:0;transition:.125s all;border:none;background:#d9e3ee}.duration-indicator[_ngcontent-%COMP%]:hover   .resize-handle[_ngcontent-%COMP%]{opacity:1}.resize-handle[_ngcontent-%COMP%]{position:absolute;width:6px;height:100%;cursor:col-resize;background-color:#7cb8fb;transition:all .15s ease;z-index:1;opacity:0}.resize-handle[_ngcontent-%COMP%]:hover{width:8px}.resize-handle[_ngcontent-%COMP%]:before{position:absolute;content:":";left:1px;color:#fff}.left-handle[_ngcontent-%COMP%]{left:0}.right-handle[_ngcontent-%COMP%]{right:0}.log-indicator[_ngcontent-%COMP%]{background-color:#8fd688;border:none;border-radius:4px;position:absolute;top:0;bottom:0;z-index:0}',
              ],
              changeDetection: 0,
            })),
            r
          );
        })(),
        Dt = (() => {
          var o;
          class r {
            constructor(t, n, s, a, d) {
              (this.socket = t),
                (this.auth = n),
                (this.cdr = s),
                (this.service = a),
                (this.common = d),
                (this.projectId = null),
                (this.teamMemberId = null),
                (this.left = 0),
                (this.width = 0),
                (this._session = null),
                (this.handleResponse = (l) => {
                  this.teamMemberId === l.team_member_id &&
                    this.projectId === l.project_id &&
                    this.service.emitMemberIndicatorChange(
                      this.projectId,
                      this.teamMemberId
                    );
                }),
                (this._session = this.auth.getCurrentSession()),
                this.service.onResetAllocator
                  .pipe((0, C.sL)())
                  .subscribe(() => {
                    this.reset();
                  });
            }
            ngOnInit() {
              this.socket.on(
                p.C.SCHEDULE_MEMBER_ALLOCATION_CREATE.toString(),
                this.handleResponse
              );
            }
            ngOnDestroy() {
              this.socket.removeListener(
                p.C.SCHEDULE_MEMBER_ALLOCATION_CREATE.toString(),
                this.handleResponse
              );
            }
            onDragStart(t) {
              this.left = t.offsetX - (t.offsetX % 35);
              const n = t.pageX,
                s = (d) => {
                  const l = d.pageX - n;
                  requestAnimationFrame(() => {
                    (this.width = l),
                      (this.service.highlighterWidth = this.width),
                      (this.service.highlighterLeft = this.left),
                      this.cdr.markForCheck();
                  });
                },
                a = (d) => {
                  if (
                    (document.removeEventListener("mousemove", s),
                    document.removeEventListener("mouseup", a),
                    n > d.pageX)
                  )
                    return (
                      (this.width = 0),
                      (this.left = 0),
                      void this.cdr.markForCheck()
                    );
                  requestAnimationFrame(() => {
                    (this.width = this.width + (35 - (this.width % 35))),
                      (this.service.highlighterWidth = this.width),
                      (this.service.highlighterLeft = this.left),
                      this.createAllocation(),
                      this.cdr.markForCheck();
                  });
                };
              document.addEventListener("mousemove", s),
                document.addEventListener("mouseup", a);
            }
            createAllocation() {
              this.socket.emit(
                p.C.SCHEDULE_MEMBER_ALLOCATION_CREATE.toString(),
                JSON.stringify({
                  project_id: this.projectId,
                  team_member_id: this.teamMemberId,
                  offset: this.left,
                  width: this.width,
                  chart_start: this.common.startDate,
                  time_zone: this._session?.timezone_name,
                })
              );
            }
            reset() {
              (this.width = 0),
                (this.left = 0),
                (this.service.highlighterWidth = 0),
                (this.service.highlighterLeft = 0),
                this.cdr.markForCheck();
            }
          }
          return (
            ((o = r).ɵfac = function (t) {
              return new (t || o)(
                e.Y36(v.s),
                e.Y36(Z.e),
                e.Y36(e.sBO),
                e.Y36($.Z),
                e.Y36(K)
              );
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [["worklenz-add-member-allocation"]],
              inputs: { projectId: "projectId", teamMemberId: "teamMemberId" },
              decls: 3,
              vars: 4,
              consts: [
                [
                  1,
                  "w-100",
                  "h-default",
                  "d-flex",
                  "align-items-center",
                  3,
                  "mousedown",
                ],
                ["task_add_row", ""],
                [1, "indicator"],
              ],
              template: function (t, n) {
                1 & t &&
                  (e.TgZ(0, "div", 0, 1),
                  e.NdJ("mousedown", function (a) {
                    return n.onDragStart(a);
                  }),
                  e._UZ(2, "div", 2),
                  e.qZA()),
                  2 & t &&
                    (e.xp6(2),
                    e.Udp("width", n.width + "px")("left", n.left + "px"));
              },
              styles: [
                ".indicator[_ngcontent-%COMP%]{height:25px;background:rgb(217,227,238);border:none;border-radius:4px;position:absolute;z-index:9;transition:.15s all}.h-default[_ngcontent-%COMP%]{min-height:45px;max-height:45px}",
              ],
              changeDetection: 0,
            })),
            r
          );
        })();
      var j = c(62787),
        N = c(73460);
      const Yt = ["contextMenuDropdown"];
      let Nt = (() => {
          var o;
          class r {
            constructor(t, n, s, a) {
              (this.service = t),
                (this.contextMenuService = n),
                (this.api = s),
                (this.cdr = a),
                (this.projectId = null),
                (this.teamMemberId = null),
                (this.idsToDelete = []),
                (this.deleting = !1),
                (this.destroy$ = new k.x()),
                this.service.onContextMenu$.pipe((0, C.sL)()).subscribe((d) => {
                  this.onContextMenu(d), this.cdr.markForCheck();
                });
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete();
            }
            onContextMenu(t) {
              (this.idsToDelete = t.ids),
                (this.projectId = t.projectId),
                (this.teamMemberId = t.teamMemberId),
                this.contextMenuService.create(
                  t.event,
                  this.contextMenuDropdown
                ),
                this.cdr.markForCheck();
            }
            delete() {
              var t = this;
              return (0, f.Z)(function* () {
                try {
                  (t.deleting = !0),
                    (yield t.api.bulkDeleteMemberAllocations(t.idsToDelete))
                      .done &&
                      (t.service.emitMemberProjectIndicatorChange(
                        t.projectId,
                        t.teamMemberId,
                        !0
                      ),
                      (t.deleting = !1),
                      t.cdr.markForCheck());
                } catch (n) {
                  (0, b.tu)(n), (t.deleting = !1), t.cdr.markForCheck();
                }
              })();
            }
          }
          return (
            ((o = r).ɵfac = function (t) {
              return new (t || o)(
                e.Y36($.Z),
                e.Y36(j.Iw),
                e.Y36(de.V),
                e.Y36(e.sBO)
              );
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [["worklenz-context-menu"]],
              viewQuery: function (t, n) {
                if ((1 & t && e.Gf(Yt, 5), 2 & t)) {
                  let s;
                  e.iGM((s = e.CRH())) && (n.contextMenuDropdown = s.first);
                }
              },
              decls: 6,
              vars: 2,
              consts: [
                ["contextMenuDropdown", "nzDropdownMenu"],
                ["nz-menu", ""],
                ["nz-menu-item", "", 3, "click"],
                ["nz-icon", "", 1, "me-2", 3, "nzType", "nzTheme"],
              ],
              template: function (t, n) {
                1 & t &&
                  (e.TgZ(0, "nz-dropdown-menu", null, 0)(2, "ul", 1)(
                    3,
                    "li",
                    2
                  ),
                  e.NdJ("click", function () {
                    return n.delete();
                  }),
                  e._UZ(4, "span", 3),
                  e._uU(5, " Delete "),
                  e.qZA()()()),
                  2 & t &&
                    (e.xp6(4),
                    e.Q6J("nzType", n.deleting ? "loading" : "delete")(
                      "nzTheme",
                      "outline"
                    ));
              },
              dependencies: [Y.Ls, O.w, N.wO, N.r9, j.RR],
              changeDetection: 0,
            })),
            r
          );
        })(),
        E = (() => {
          var o;
          class r {
            constructor() {
              (this._selectSbj$ = new k.x()),
                (this._deselectSbj$ = new k.x()),
                (this._deselectAllSbj$ = new k.x()),
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
            updateGroupTaskMap(t, n, s) {
              const a = this._groupTaskMap.get(t);
              a
                ? ("boolean" == typeof s ? (a[n] = s) : delete a[n],
                  this._groupTaskMap.set(t, a))
                : this._groupTaskMap.set(t, { [n]: s || !1 });
            }
            updateSubtasksMap(t, n, s) {
              const a = this._subTasksMap.get(t) || [];
              a.some((l) => l.id === n.id) ||
                (a.push(n), this._subTasksMap.set(t, a));
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
                for (const s in n) this.updateGroupTaskMap(t, s, !1);
            }
            deselectAll() {
              this._selectedTasksMap.size &&
                (this.deselectLocalGroups(),
                this._selectedTasksMap.clear(),
                (this._selectedCount = 0),
                this._deselectAllSbj$.next());
            }
            getGroupId(t) {
              return this._taskGroupIdsMap.get(t);
            }
            getSelectedTasks() {
              const t = [];
              for (const [, n] of this._selectedTasksMap.entries()) t.push(n);
              return t;
            }
          }
          return (
            ((o = r).ɵfac = function (t) {
              return new (t || o)();
            }),
            (o.ɵprov = e.Yz7({
              token: o,
              factory: o.ɵfac,
              providedIn: "root",
            })),
            r
          );
        })();
      var Ut = c(65619);
      let I = (() => {
        var o;
        class r {
          get _currentGroup() {
            const t = localStorage.getItem("worklenz.schedule.group_by");
            if (t) {
              const n = this.GROUP_BY_OPTIONS.find((s) => s.value === t);
              if (n) return n;
            }
            return this.GROUP_BY_OPTIONS[0];
          }
          set _currentGroup(t) {
            localStorage.setItem("worklenz.schedule.group_by", t.value);
          }
          set members(t) {
            (this._members = t), this.membersSbj$.next();
          }
          get members() {
            return this._members;
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
          get onStatusesChange$() {
            return this.statusesSbj$.asObservable();
          }
          get onPrioritiesChange$() {
            return this.prioritiesSbj$.asObservable();
          }
          get onContextMenu$() {
            return this.contextMenuSbj$.asObservable();
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
          get updateOverviewCharts() {
            return this.updateOverviewChartsSbj$.asObservable();
          }
          get onRemoveMembersTask() {
            return this.removeMembersTaskSbj$.asObservable();
          }
          constructor(t, n) {
            (this.socket = t),
              (this.map = n),
              (this.membersSbj$ = new k.x()),
              (this.statusesSbj$ = new k.x()),
              (this.prioritiesSbj$ = new k.x()),
              (this.contextMenuSbj$ = new k.x()),
              (this.taskAddOrDeleteSbj$ = new Ut.X(null)),
              (this.phasesSbj$ = new k.x()),
              (this.updateOverviewChartsSbj$ = new k.x()),
              (this.removeMembersTaskSbj$ = new k.x()),
              (this.refreshOnlyMembersSbj$ = new k.x()),
              (this.refreshSubtasksIncludedSbj$ = new k.x()),
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
              (this._members = []),
              (this._statuses = []),
              (this._priorities = []),
              (this._phases = []),
              (this.isSubtasksIncluded = !1),
              (this.currentTab = "");
          }
          setCurrentGroup(t) {
            this._currentGroup = t;
          }
          getCurrentGroup() {
            return this._currentGroup;
          }
          onRefreshMembers() {
            return this.refreshOnlyMembersSbj$.asObservable();
          }
          emitRefreshMembers() {
            this.refreshOnlyMembersSbj$.next();
          }
          emitRefreshSubtasksIncluded() {
            this.refreshSubtasksIncludedSbj$.next();
          }
          emitOnContextMenu(t, n) {
            this.contextMenuSbj$.next({ event: t, task: n });
          }
          emitTaskAddOrDelete(t, n) {
            this.taskAddOrDeleteSbj$.next({ taskId: t, isSubTask: n });
          }
          emitUpdateOverviewCharts() {
            this.updateOverviewChartsSbj$.next();
          }
          emitRemoveMembersTask(t) {
            this.removeMembersTaskSbj$.next(t);
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
            const s = this.getGroupIdByGroupedColumn(t);
            s && (this.deleteTask(t.id), this.addTask(t, s, n));
          }
          deleteTask(t, n = null) {
            const s = this.map.getGroupId(t);
            if (!s || !t) return;
            const a = this.groups.find((l) => l.id === s);
            if (!a) return;
            const d = this.map.getSelectedTasks().find((l) => l.id === t);
            if (d?.is_sub_task) {
              const l = a.tasks.find((_) => _.id === d.parent_task_id);
              if (l) {
                const _ = l.sub_tasks?.findIndex((u) => u.id === d.id);
                typeof _ < "u" &&
                  -1 !== _ &&
                  (l.sub_tasks_count || (l.sub_tasks_count = 0),
                  (l.sub_tasks_count = Math.max(+l.sub_tasks_count - 1, 0)),
                  l.sub_tasks?.splice(_, 1),
                  this.emitTaskAddOrDelete(l.id, !0));
              }
              this.socket.emit(p.C.GET_TASK_PROGRESS.toString(), l?.id),
                this.map.remove(d);
            } else {
              const l = n ?? a.tasks.findIndex((_) => _.id === t);
              -1 !== l &&
                (this.map.remove(a.tasks[l]),
                a.tasks.splice(l, 1),
                this.emitTaskAddOrDelete(t, !1));
            }
            this.map.deselectAll();
          }
          addTask(t, n, s = !1) {
            const a = this.groups.find((d) => d.id === n);
            a &&
              t.id &&
              (s ? a.tasks.unshift(t) : a.tasks.push(t),
              this.map.add(n, t),
              this.emitTaskAddOrDelete(t.parent_task_id, !!t.parent_task_id));
          }
          reset() {
            (this._members = []),
              (this._statuses = []),
              (this._priorities = []),
              (this.groups = []),
              (this.isSubtasksIncluded = !1);
          }
        }
        return (
          ((o = r).ɵfac = function (t) {
            return new (t || o)(e.LFG(v.s), e.LFG(E));
          }),
          (o.ɵprov = e.Yz7({ token: o, factory: o.ɵfac, providedIn: "root" })),
          r
        );
      })();
      var xe = c(64532),
        Ft = c(46619),
        Lt = c(85236),
        Et = c(22858),
        te = c(96109),
        Jt = c(55416),
        Gt = c(48327),
        _e = c(62612),
        ve = c(44889);
      let Qt = (() => {
        var o;
        class r {
          get phaseLabel() {
            return this.phasesService.label;
          }
          constructor(t, n, s, a, d) {
            (this.service = t),
              (this.map = n),
              (this.cdr = s),
              (this.phasesService = a),
              (this.auth = d),
              (this.headerCls = "d-flex header mb-0 flex-row"),
              (this.selectChange = new e.vpe()),
              (this.checked = !1),
              (this.indeterminate = !1),
              this.map.onDeselectAll$.pipe((0, C.sL)()).subscribe(() => {
                (this.checked = !1),
                  (this.indeterminate = !1),
                  this.cdr.markForCheck();
              }),
              this.phasesService.onLabelChange
                .pipe((0, C.sL)())
                .subscribe((l) => {
                  this.cdr.markForCheck();
                });
          }
          onAllChecked(t) {
            this.selectChange?.emit(t);
          }
        }
        return (
          ((o = r).ɵfac = function (t) {
            return new (t || o)(
              e.Y36(Jt.b),
              e.Y36(E),
              e.Y36(e.sBO),
              e.Y36(Gt.u),
              e.Y36(Z.e)
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-schedule-task-list-header"]],
            hostVars: 2,
            hostBindings: function (t, n) {
              2 & t && e.Tol(n.headerCls);
            },
            inputs: { groupId: "groupId" },
            outputs: { selectChange: "selectChange" },
            decls: 21,
            vars: 7,
            consts: [
              [1, "flex-row", "task-check"],
              [
                "nz-checkbox",
                "",
                1,
                "visibility-hidden",
                3,
                "nzChecked",
                "nzIndeterminate",
                "nzCheckedChange",
              ],
              [1, "flex-row", "task-name"],
              [1, "flex-row", "task-status"],
              [1, "flex-row", "task-priority"],
              [
                1,
                "flex-row",
                "task-phase",
                "d-flex",
                "justify-content-between",
                "align-items-center",
              ],
              ["nz-tooltip", "", 3, "nzTooltipTitle"],
              [1, "flex-row", "task-start-date"],
              [1, "flex-row", "task-due-date"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "div", 0)(1, "span", 1),
                e.NdJ("nzCheckedChange", function (a) {
                  return (n.checked = a);
                })("nzCheckedChange", function (a) {
                  return n.onAllChecked(a);
                }),
                e.qZA()(),
                e.TgZ(2, "div", 2),
                e._uU(3, "Task"),
                e.qZA(),
                e.ynx(4),
                e.TgZ(5, "div", 3),
                e._uU(6, "Status"),
                e.qZA(),
                e.BQk(),
                e.ynx(7),
                e.TgZ(8, "div", 4),
                e._uU(9, "Priority"),
                e.qZA(),
                e.BQk(),
                e.ynx(10),
                e.TgZ(11, "div", 5)(12, "span", 6),
                e._uU(13),
                e.ALo(14, "ellipsis"),
                e.qZA()(),
                e.BQk(),
                e.ynx(15),
                e.TgZ(16, "div", 7),
                e._uU(17, "Start Date"),
                e.qZA(),
                e.BQk(),
                e.ynx(18),
                e.TgZ(19, "div", 8),
                e._uU(20, "Due Date"),
                e.qZA(),
                e.BQk()),
                2 & t &&
                  (e.xp6(1),
                  e.Q6J("nzChecked", n.checked)(
                    "nzIndeterminate",
                    n.indeterminate
                  ),
                  e.xp6(11),
                  e.Q6J("nzTooltipTitle", n.phaseLabel),
                  e.xp6(1),
                  e.Oqu(e.xi3(14, 4, n.phaseLabel, 10)));
            },
            dependencies: [te.SY, _e.Ie, ve.p],
            styles: [
              ".flex-row[_ngcontent-%COMP%]{padding:4px 11px;background-color:#fafafa;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;border-right:1px solid #f0f0f0;display:flex;align-items:center;flex-direction:row}.task-check[_ngcontent-%COMP%]{text-align:center;padding:8px 6px!important;border-left:1px solid #f0f0f0;position:sticky;left:0;z-index:1}.task-name[_ngcontent-%COMP%]{width:450px;min-width:450px;position:sticky;left:29px;z-index:1}.task-name[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]{margin-left:auto}.task-name.left-0[_ngcontent-%COMP%]{left:47px}.task-status[_ngcontent-%COMP%]{width:120px;min-width:120px}.task-phase[_ngcontent-%COMP%]{width:150px;min-width:150px}.task-priority[_ngcontent-%COMP%]{width:120px;min-width:120px}.task-start-date[_ngcontent-%COMP%], .task-due-date[_ngcontent-%COMP%]{width:150px;min-width:150px}.visibility-hidden[_ngcontent-%COMP%]{visibility:hidden}",
            ],
          })),
          r
        );
      })();
      var Rt = c(63019),
        V = c(32181),
        pe = c(20824),
        Te = c(55695),
        Ht = c(47053),
        be = c(76643);
      function $t(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "div", 1, 2)(2, "span", 3),
            e._uU(3),
            e.ALo(4, "dateFormatter"),
            e.qZA(),
            e.TgZ(5, "nz-date-picker", 4),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(i);
              const s = e.oxw();
              return e.KtG((s.task.end_date = n));
            })("ngModelChange", function (n) {
              e.CHM(i);
              const s = e.oxw();
              return e.KtG(s.handleEndDateChange(n, s.task));
            })("nzOnOpenChange", function (n) {
              e.CHM(i);
              const s = e.MAs(1),
                a = e.oxw();
              return e.KtG(a.toggleHighlightCls(n, s));
            }),
            e.ALo(6, "validateMinDate"),
            e.qZA()();
        }
        if (2 & o) {
          const i = e.oxw();
          e.xp6(2),
            e.ekj("past-date", i.checkForPastDate(i.task.end_date))(
              "soon-date",
              i.checkForSoonDate(i.task.end_date)
            ),
            e.xp6(1),
            e.Oqu(e.lcZ(4, 10, i.task.end_date)),
            e.xp6(2),
            e.Q6J("ngModel", i.task.end_date)("nzFormat", "MMM dd,yyyy")(
              "nzSuffixIcon",
              ""
            )("nzPlaceHolder", "Set a due date")(
              "nzDisabledDate",
              e.lcZ(6, 12, i.task.start_date)
            );
        }
      }
      let Bt = (() => {
        var o;
        class r {
          constructor(t, n, s, a, d, l) {
            (this.socket = t),
              (this.cdr = n),
              (this.ngZone = s),
              (this.service = a),
              (this.renderer = d),
              (this.auth = l),
              (this.task = {}),
              (this.cls = "flex-row task-due-date"),
              (this.handleResponse = (_) => {
                _.id === this.task.id &&
                  this.task.end_date !== _.end_date &&
                  ((this.task.end_date = _.end_date), this.cdr.markForCheck());
              });
          }
          ngOnInit() {
            this.socket.on(
              p.C.TASK_END_DATE_CHANGE.toString(),
              this.handleResponse
            );
          }
          ngOnDestroy() {
            this.socket.removeListener(
              p.C.TASK_END_DATE_CHANGE.toString(),
              this.handleResponse
            );
          }
          handleEndDateChange(t, n) {
            this.socket.emit(
              p.C.TASK_END_DATE_CHANGE.toString(),
              JSON.stringify({
                task_id: n.id,
                end_date: (0, b.A6)(t) || null,
                parent_task: n.parent_task_id,
                time_zone: this.auth.getCurrentSession()?.timezone_name
                  ? this.auth.getCurrentSession()?.timezone_name
                  : Intl.DateTimeFormat().resolvedOptions().timeZone,
              })
            );
          }
          toggleHighlightCls(t, n) {
            this.ngZone.runOutsideAngular(() => {
              t
                ? this.renderer.addClass(n, this.service.HIGHLIGHT_COL_CLS)
                : this.renderer.removeClass(n, this.service.HIGHLIGHT_COL_CLS);
            });
          }
          checkForPastDate(t) {
            return x()(t).format("YYYY-MM-DD") < x()().format("YYYY-MM-DD");
          }
          checkForSoonDate(t) {
            const n = x()(t).format("YYYY-MM-DD"),
              s = x()().add(1, "day").format("YYYY-MM-DD");
            return n === x()().format("YYYY-MM-DD") || n === s;
          }
        }
        return (
          ((o = r).ɵfac = function (t) {
            return new (t || o)(
              e.Y36(v.s),
              e.Y36(e.sBO),
              e.Y36(e.R0b),
              e.Y36(I),
              e.Y36(e.Qsj),
              e.Y36(Z.e)
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-schedule-end-date"]],
            hostVars: 2,
            hostBindings: function (t, n) {
              2 & t && e.Tol(n.cls);
            },
            inputs: { task: "task" },
            decls: 1,
            vars: 1,
            consts: [
              ["class", "editable h-100 d-flex w-100", 4, "ngIf"],
              [1, "editable", "h-100", "d-flex", "w-100"],
              ["elementDueDate", ""],
              ["nz-typography", "", 1, "date-text", "w-100"],
              [
                1,
                "border-0",
                "bg-transparent",
                "w-100",
                "task-list-date-picker",
                3,
                "ngModel",
                "nzFormat",
                "nzSuffixIcon",
                "nzPlaceHolder",
                "nzDisabledDate",
                "ngModelChange",
                "nzOnOpenChange",
              ],
            ],
            template: function (t, n) {
              1 & t && e.YNc(0, $t, 7, 14, "div", 0),
                2 & t && e.Q6J("ngIf", n.task);
            },
            dependencies: [m.O5, A.ZU, X.uw, g.JJ, g.On, Ht.v, be.l],
            styles: [
              "nz-date-picker[_ngcontent-%COMP%]{max-width:150px;border-color:transparent!important;inset:0}nz-date-picker[_ngcontent-%COMP%]:hover{border-color:#d9d9d9!important}.editable[_ngcontent-%COMP%]{position:relative}.date-text[_ngcontent-%COMP%]{display:flex;align-items:center;padding-left:15px}.past-date[_ngcontent-%COMP%]{color:#ff4d4f}.soon-date[_ngcontent-%COMP%]{color:#52c41a}.def-g-height[_ngcontent-%COMP%]{max-height:32px;min-height:32px;line-height:32px}",
            ],
            changeDetection: 0,
          })),
          r
        );
      })();
      var Vt = c(75729);
      function qt(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "div", 1, 2)(2, "span", 3),
            e._uU(3),
            e.ALo(4, "dateFormatter"),
            e.qZA(),
            e.TgZ(5, "nz-date-picker", 4),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(i);
              const s = e.oxw();
              return e.KtG((s.task.start_date = n));
            })("ngModelChange", function (n) {
              e.CHM(i);
              const s = e.oxw();
              return e.KtG(s.handleStartDateChange(n, s.task));
            })("nzOnOpenChange", function (n) {
              e.CHM(i);
              const s = e.MAs(1),
                a = e.oxw();
              return e.KtG(a.toggleHighlightCls(n, s));
            }),
            e.ALo(6, "validateMaxDate"),
            e.qZA()();
        }
        if (2 & o) {
          const i = e.oxw();
          e.xp6(3),
            e.Oqu(e.lcZ(4, 6, i.task.start_date)),
            e.xp6(2),
            e.Q6J("ngModel", i.task.start_date)("nzFormat", "MMM dd,yyyy")(
              "nzSuffixIcon",
              ""
            )("nzPlaceHolder", "Set a start date")(
              "nzDisabledDate",
              e.lcZ(6, 8, i.task.end_date)
            );
        }
      }
      let Wt = (() => {
        var o;
        class r {
          constructor(t, n, s, a, d, l) {
            (this.socket = t),
              (this.cdr = n),
              (this.ngZone = s),
              (this.service = a),
              (this.renderer = d),
              (this.auth = l),
              (this.task = null),
              (this.cls = "flex-row task-due-date"),
              (this.handleResponse = (_) => {
                this.task &&
                  _.id === this.task.id &&
                  this.task.start_date !== _.start_date &&
                  ((this.task.start_date = _.start_date),
                  this.cdr.markForCheck());
              });
          }
          ngOnInit() {
            this.socket.on(
              p.C.TASK_START_DATE_CHANGE.toString(),
              this.handleResponse
            );
          }
          ngOnDestroy() {
            this.socket.removeListener(
              p.C.TASK_START_DATE_CHANGE.toString(),
              this.handleResponse
            );
          }
          toggleHighlightCls(t, n) {
            this.ngZone.runOutsideAngular(() => {
              t
                ? this.renderer.addClass(n, this.service.HIGHLIGHT_COL_CLS)
                : this.renderer.removeClass(n, this.service.HIGHLIGHT_COL_CLS);
            });
          }
          handleStartDateChange(t, n) {
            this.socket.emit(
              p.C.TASK_START_DATE_CHANGE.toString(),
              JSON.stringify({
                task_id: n.id,
                start_date: (0, b.A6)(t) || null,
                parent_task: n.parent_task_id,
                time_zone: this.auth.getCurrentSession()?.timezone_name
                  ? this.auth.getCurrentSession()?.timezone_name
                  : Intl.DateTimeFormat().resolvedOptions().timeZone,
              })
            );
          }
        }
        return (
          ((o = r).ɵfac = function (t) {
            return new (t || o)(
              e.Y36(v.s),
              e.Y36(e.sBO),
              e.Y36(e.R0b),
              e.Y36(I),
              e.Y36(e.Qsj),
              e.Y36(Z.e)
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-schedule-start-date"]],
            hostVars: 2,
            hostBindings: function (t, n) {
              2 & t && e.Tol(n.cls);
            },
            inputs: { task: "task" },
            decls: 1,
            vars: 1,
            consts: [
              ["class", "editable h-100 d-flex w-100", 4, "ngIf"],
              [1, "editable", "h-100", "d-flex", "w-100"],
              ["elementStartDate", ""],
              ["nz-typography", "", 1, "date-text", "w-100"],
              [
                1,
                "border-0",
                "bg-transparent",
                "w-100",
                "task-list-date-picker",
                3,
                "ngModel",
                "nzFormat",
                "nzSuffixIcon",
                "nzPlaceHolder",
                "nzDisabledDate",
                "ngModelChange",
                "nzOnOpenChange",
              ],
            ],
            template: function (t, n) {
              1 & t && e.YNc(0, qt, 7, 10, "div", 0),
                2 & t && e.Q6J("ngIf", n.task);
            },
            dependencies: [m.O5, A.ZU, X.uw, g.JJ, g.On, Vt.z, be.l],
            styles: [
              "nz-date-picker[_ngcontent-%COMP%]{max-width:150px;border-color:transparent!important;inset:0}nz-date-picker[_ngcontent-%COMP%]:hover{border-color:#d9d9d9!important}.editable[_ngcontent-%COMP%]{position:relative}.date-text[_ngcontent-%COMP%]{display:flex;align-items:center;padding-left:15px}.def-g-height[_ngcontent-%COMP%]{max-height:32px;min-height:32px;line-height:32px}",
            ],
            changeDetection: 0,
          })),
          r
        );
      })();
      var ne = c(76271);
      function Kt(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "nz-option", 3),
            e.ALo(1, "safeString"),
            e._UZ(2, "nz-badge", 4),
            e.ALo(3, "safeString"),
            e.qZA()),
          2 & o)
        ) {
          const i = r.$implicit;
          e.Q6J("nzValue", i.id)("nzLabel", e.lcZ(1, 4, i.name)),
            e.xp6(2),
            e.Q6J("nzColor", e.lcZ(3, 6, i.color_code))(
              "nzText",
              (null == i ? null : i.name) || null
            );
        }
      }
      let Xt = (() => {
        var o;
        class r {
          constructor(t, n, s, a, d, l, _) {
            (this.service = t),
              (this.socket = n),
              (this.cdr = s),
              (this.ngZone = a),
              (this.element = d),
              (this.renderer = l),
              (this.auth = _),
              (this.task = {}),
              (this.cls = "flex-row task-status"),
              (this.statuses = []),
              (this.loading = !1),
              (this.handleResponse = (u) => {
                u &&
                  u.id === this.task.id &&
                  ((this.task.status_color = u.color_code),
                  (this.task.complete_ratio = +u.complete_ratio || 0),
                  (this.task.status = u.status_id),
                  (this.task.status_category = u.statusCategory),
                  this.isGroupByStatus() &&
                    (this.service.updateTaskGroup(this.task, !1),
                    this.service.isSubtasksIncluded &&
                      this.service.emitRefreshSubtasksIncluded()),
                  this.cdr.markForCheck());
              }),
              this.service.onStatusesChange$.pipe((0, C.sL)()).subscribe(() => {
                this.updateStatuses(), this.cdr.markForCheck();
              });
          }
          ngOnInit() {
            this.updateStatuses(),
              this.socket.on(
                p.C.TASK_STATUS_CHANGE.toString(),
                this.handleResponse
              );
          }
          ngOnDestroy() {
            this.socket.removeListener(
              p.C.TASK_STATUS_CHANGE.toString(),
              this.handleResponse
            );
          }
          getTaskProgress(t) {
            this.socket.emit(p.C.GET_TASK_PROGRESS.toString(), t);
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
              (this.socket.emit(
                p.C.TASK_STATUS_CHANGE.toString(),
                JSON.stringify({
                  task_id: n,
                  status_id: t,
                  parent_task: this.task.parent_task_id,
                  team_id: this.auth.getCurrentSession()?.team_id,
                })
              ),
              this.getTaskProgress(n));
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
          ((o = r).ɵfac = function (t) {
            return new (t || o)(
              e.Y36(I),
              e.Y36(v.s),
              e.Y36(e.sBO),
              e.Y36(e.R0b),
              e.Y36(e.SBq),
              e.Y36(e.Qsj),
              e.Y36(Z.e)
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-schedule-status"]],
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
                e.NdJ("ngModelChange", function (a) {
                  return (n.task.status = a);
                })("ngModelChange", function (a) {
                  return n.handleStatusChange(a, n.task.id);
                })("nzOpenChange", function (a) {
                  return n.handleOpen(a);
                }),
                e.YNc(2, Kt, 4, 8, "nz-option", 2),
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
            dependencies: [m.sg, g.JJ, g.On, B.x7, P.Ip, P.Vq, ne.m],
            styles: [
              "nz-select[_ngcontent-%COMP%]{max-width:96px;width:100%;text-overflow:ellipsis}",
            ],
            changeDetection: 0,
          })),
          r
        );
      })();
      var Me = c(8660);
      function en(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "nz-option", 3),
            e._UZ(1, "worklenz-task-priority-label", 4),
            e.qZA()),
          2 & o)
        ) {
          const i = r.$implicit;
          e.Q6J("nzValue", i.id)("nzLabel", i.name ? i.name : "")(
            "nzCustomContent",
            !0
          ),
            e.xp6(1),
            e.Q6J("name", i.name ? i.name : "");
        }
      }
      let tn = (() => {
        var o;
        class r {
          constructor(t, n, s, a, d, l) {
            (this.service = t),
              (this.socket = n),
              (this.cdr = s),
              (this.ngZone = a),
              (this.element = d),
              (this.renderer = l),
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
                    (this.service.updateTaskGroup(this.task, !1),
                    this.service.isSubtasksIncluded &&
                      this.service.emitRefreshSubtasksIncluded()),
                  this.cdr.markForCheck());
              }),
              this.service.onPrioritiesChange$
                .pipe((0, C.sL)())
                .subscribe(() => {
                  this.updatePriorities(), this.cdr.markForCheck();
                });
          }
          ngOnInit() {
            this.updatePriorities(),
              this.socket.on(
                p.C.TASK_PRIORITY_CHANGE.toString(),
                this.handleResponse
              );
          }
          ngOnDestroy() {
            (this.priorities = []),
              this.socket.removeListener(
                p.C.TASK_PRIORITY_CHANGE.toString(),
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
              p.C.TASK_PRIORITY_CHANGE.toString(),
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
          ((o = r).ɵfac = function (t) {
            return new (t || o)(
              e.Y36(I),
              e.Y36(v.s),
              e.Y36(e.sBO),
              e.Y36(e.R0b),
              e.Y36(e.SBq),
              e.Y36(e.Qsj)
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-schedule-priority"]],
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
                e.NdJ("ngModelChange", function (a) {
                  return (n.task.priority = a);
                })("ngModelChange", function (a) {
                  return n.handlePriorityChange(a, n.task);
                })("nzOpenChange", function (a) {
                  return n.handleOpen(a);
                }),
                e.YNc(2, en, 2, 4, "nz-option", 2),
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
            dependencies: [m.sg, g.JJ, g.On, P.Ip, P.Vq, Me.o],
            styles: [
              "nz-select[_ngcontent-%COMP%]{max-width:96px;width:100%;text-overflow:ellipsis}",
            ],
            changeDetection: 0,
          })),
          r
        );
      })();
      var nn = c(66432);
      function on(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "nz-option", 3),
            e.ALo(1, "truncateIfLong"),
            e._UZ(2, "nz-badge", 4),
            e.ALo(3, "safeString"),
            e.qZA()),
          2 & o)
        ) {
          const i = r.$implicit;
          e.Q6J("nzValue", i.id)("nzLabel", e.xi3(1, 4, i.name, 12)),
            e.xp6(2),
            e.Q6J("nzColor", e.lcZ(3, 7, i.color_code))(
              "nzText",
              (null == i ? null : i.name) || null
            );
        }
      }
      let sn = (() => {
        var o;
        class r {
          constructor(t, n, s, a, d, l) {
            (this.service = t),
              (this.socket = n),
              (this.cdr = s),
              (this.ngZone = a),
              (this.element = d),
              (this.renderer = l),
              (this.task = {}),
              (this.cls = "flex-row task-phase"),
              (this.PHASE_COLOR = "#a9a9a9" + L.Yj),
              (this.PLACEHOLDER_COLOR = "rgba(0, 0, 0, 0.85) !important"),
              (this.phases = []),
              (this.loading = !1),
              (this.handleResponse = (_) => {
                _ &&
                  _.task_id === this.task.id &&
                  ((this.task.phase_color = _.color_code || void 0),
                  (this.task.phase_id = _.id),
                  this.isGroupByPhase() &&
                    (this.service.updateTaskGroup(this.task, !1),
                    this.service.isSubtasksIncluded &&
                      this.service.emitRefreshSubtasksIncluded()),
                  this.cdr.markForCheck());
              }),
              this.service.onPhaseChange$.pipe((0, C.sL)()).subscribe(() => {
                this.updatePhases(), this.cdr.markForCheck();
              });
          }
          ngOnInit() {
            this.updatePhases(),
              this.socket.on(
                p.C.TASK_PHASE_CHANGE.toString(),
                this.handleResponse
              );
          }
          ngOnDestroy() {
            this.socket.removeListener(
              p.C.TASK_PHASE_CHANGE.toString(),
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
              this.socket.emit(p.C.TASK_PHASE_CHANGE.toString(), {
                task_id: n,
                phase_id: t,
                parent_task: this.task.parent_task_id,
              });
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
          ((o = r).ɵfac = function (t) {
            return new (t || o)(
              e.Y36(I),
              e.Y36(v.s),
              e.Y36(e.sBO),
              e.Y36(e.R0b),
              e.Y36(e.SBq),
              e.Y36(e.Qsj)
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-schedule-phase"]],
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
                e.NdJ("ngModelChange", function (a) {
                  return (n.task.phase_id = a);
                })("ngModelChange", function (a) {
                  return n.handleChange(a, n.task.id);
                })("nzOpenChange", function (a) {
                  return n.handleOpen(a);
                }),
                e.YNc(2, on, 4, 9, "nz-option", 2),
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
            dependencies: [m.sg, g.JJ, g.On, B.x7, P.Ip, P.Vq, ne.m, nn.z],
            changeDetection: 0,
          })),
          r
        );
      })();
      function rn(o, r) {
        1 & o && (e.TgZ(0, "small", 17), e._UZ(1, "span", 18), e.qZA()),
          2 & o &&
            (e.Q6J("nzType", "secondary"),
            e.xp6(1),
            e.Q6J("nzType", "double-right")("nzTheme", "outline"));
      }
      function an(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "div", 15),
            e.NdJ("click", function (n) {
              e.CHM(i);
              const s = e.oxw(2),
                a = e.MAs(4);
              return e.KtG(s.onTaskNameClick(n, a, s.task));
            }),
            e.ALo(1, "safeString"),
            e.YNc(2, rn, 2, 3, "small", 16),
            e._uU(3),
            e.qZA();
        }
        if (2 & o) {
          const i = e.oxw(2);
          e.Q6J("nzTooltipMouseEnterDelay", 0.5)(
            "nzTooltipTitle",
            e.lcZ(1, 4, i.task.name)
          ),
            e.xp6(2),
            e.Q6J("ngIf", i.task.is_sub_task),
            e.xp6(1),
            e.hij(" ", i.task.name, " \xa0 ");
        }
      }
      function cn(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "nz-tag", 19),
            e.NdJ("click", function (n) {
              e.CHM(i);
              const s = e.oxw(2);
              return n.stopPropagation(), e.KtG(s.openSubTasks());
            }),
            e.TgZ(1, "span", 20),
            e._uU(2),
            e._UZ(3, "span", 21),
            e.qZA()();
        }
        if (2 & o) {
          const i = e.oxw(2);
          e.Q6J("nzColor", "default"),
            e.xp6(2),
            e.hij(" ", i.task.sub_tasks_count, " "),
            e.xp6(1),
            e.Q6J("nzType", "double-right")("nzTheme", "outline");
        }
      }
      function dn(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 10)(1, "div", 11)(2, "div"),
            e.YNc(3, an, 4, 6, "div", 12),
            e.qZA(),
            e.TgZ(4, "div", 13),
            e.YNc(5, cn, 4, 4, "nz-tag", 14),
            e.qZA()()()),
          2 & o)
        ) {
          const i = e.oxw();
          e.xp6(3),
            e.Q6J("ngIf", i.editId !== i.task.id),
            e.xp6(2),
            e.Q6J("ngIf", !i.task.is_sub_task && !i.service.isSubtasksIncluded);
        }
      }
      function ln(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "input", 22),
            e.NdJ("focus", function () {
              e.CHM(i);
              const n = e.oxw(),
                s = e.MAs(4);
              return e.KtG(n.selectCol(s));
            })("ngModelChange", function (n) {
              e.CHM(i);
              const s = e.oxw();
              return e.KtG((s.task.name = n));
            })("blur", function () {
              e.CHM(i);
              const n = e.oxw(),
                s = e.MAs(4);
              return n.handleNameChange(n.task), e.KtG(n.deselectCol(s));
            })("keydown.enter", function () {
              e.CHM(i);
              const n = e.oxw(),
                s = e.MAs(4);
              return n.handleNameChange(n.task), e.KtG(n.deselectCol(s));
            }),
            e.qZA();
        }
        if (2 & o) {
          const i = e.oxw();
          e.Q6J("ngModel", i.task.name)("nzBorderless", !0);
        }
      }
      function _n(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "button", 23),
            e.NdJ("click", function () {
              e.CHM(i);
              const n = e.oxw();
              return e.KtG(n.openTask(n.task));
            }),
            e._UZ(1, "span", 18),
            e._uU(2, " Open "),
            e.qZA();
        }
        2 & o &&
          (e.Q6J("nzTooltipTitle", "Click open task form")(
            "nzTooltipPlacement",
            "top"
          )("nzTooltipMouseEnterDelay", 2)("nzType", "text"),
          e.xp6(1),
          e.Q6J("nzType", "expand-alt")("nzTheme", "outline"));
      }
      let pn = (() => {
        var o;
        class r {
          get id() {
            return this.task.id;
          }
          constructor(t, n, s, a, d, l, _, u, M) {
            (this.element = t),
              (this.renderer = n),
              (this.service = s),
              (this.cdr = a),
              (this.socket = d),
              (this.map = l),
              (this.ngZone = _),
              (this.view = u),
              (this.utils = M),
              (this.onShowSubTasks = new e.vpe()),
              (this.onOpenTask = new e.vpe()),
              (this.cls = "position-relative task-row"),
              (this.highlight = "highlight-col"),
              (this.editId = null),
              (this.selected = !1),
              (this.Number = Number),
              (this.handleNameChangeResponse = (h) => {
                h &&
                  this.id === h.id &&
                  this.task &&
                  this.task.name != h.name &&
                  ((this.task.name = h.name), this.markForCheck());
              }),
              (this.handleCompletedAt = (h) => {
                h.id &&
                  this.id === h.id &&
                  (this.task.completed_at = h.completed_at);
              }),
              (0, Rt.T)(
                this.map.onSelect$.pipe(
                  (0, V.h)((h) => h.id === this.id),
                  (0, V.h)(() => !this.selected)
                ),
                this.map.onDeselect$.pipe(
                  (0, V.h)((h) => h.id === this.id),
                  (0, V.h)(() => this.selected)
                ),
                this.map.onDeselectAll$.pipe((0, V.h)(() => this.selected))
              )
                .pipe((0, C.sL)())
                .subscribe((h) => {
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
              p.C.TASK_NAME_CHANGE.toString(),
              this.handleNameChangeResponse
            );
          }
          unregisterSocketEvents() {
            this.socket.removeListener(
              p.C.TASK_NAME_CHANGE.toString(),
              this.handleNameChangeResponse
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
            this.onShowSubTasks?.emit(this.task), Q.s.track(R.r5);
          }
          openTask(t) {
            this.onOpenTask?.emit(t), Q.s.track(R.r5);
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
                p.C.TASK_NAME_CHANGE.toString(),
                JSON.stringify({
                  task_id: t.id,
                  name: t.name,
                  parent_task: this.task.parent_task_id,
                })
              ),
              (this.editId = null));
          }
          onTaskNameClick(t, n, s) {
            t.stopPropagation(), this.focus(n), (this.editId = s.id || null);
          }
          markForCheck() {
            this.cdr.markForCheck();
          }
          detectChanges() {
            this.cdr.detectChanges();
          }
        }
        return (
          ((o = r).ɵfac = function (t) {
            return new (t || o)(
              e.Y36(e.SBq),
              e.Y36(e.Qsj),
              e.Y36(I),
              e.Y36(e.sBO),
              e.Y36(v.s),
              e.Y36(E),
              e.Y36(e.R0b),
              e.Y36(J.f),
              e.Y36(xe.F)
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-schedule-task-list-row"]],
            hostVars: 2,
            hostBindings: function (t, n) {
              1 & t &&
                e.NdJ("contextmenu", function (a) {
                  return n.onContextMenu(a);
                }),
                2 & t && e.Tol(n.cls);
            },
            inputs: { task: "task" },
            outputs: {
              onShowSubTasks: "onShowSubTasks",
              onOpenTask: "onOpenTask",
            },
            decls: 19,
            vars: 10,
            consts: [
              [1, "flex-table", "rows", 3, "ngClass"],
              [1, "flex-row", "task-check"],
              ["nz-checkbox", "", 1, "p-0", 3, "nzChecked", "nzCheckedChange"],
              [1, "flex-row", "task-name", "ps-0"],
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
              [
                "nz-tooltip",
                "",
                "nz-button",
                "",
                "class",
                "px-1 task-open-btn",
                3,
                "nzTooltipTitle",
                "nzTooltipPlacement",
                "nzTooltipMouseEnterDelay",
                "nzType",
                "click",
                4,
                "ngIf",
              ],
              [3, "task"],
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
              [1, "inner-icon-cont"],
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
              ["nz-icon", "", 3, "nzType", "nzTheme"],
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
              [
                "nz-tooltip",
                "",
                "nz-button",
                "",
                1,
                "px-1",
                "task-open-btn",
                3,
                "nzTooltipTitle",
                "nzTooltipPlacement",
                "nzTooltipMouseEnterDelay",
                "nzType",
                "click",
              ],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "div", 0)(1, "div", 1)(2, "span", 2),
                e.NdJ("nzCheckedChange", function (a) {
                  return (n.selected = a);
                })("nzCheckedChange", function (a) {
                  return n.onCheckChange(a);
                }),
                e.qZA()(),
                e.TgZ(3, "div", 3, 4)(5, "div", 5),
                e.YNc(6, dn, 6, 2, "div", 6),
                e.YNc(7, ln, 1, 2, "input", 7),
                e.YNc(8, _n, 3, 6, "button", 8),
                e.qZA()(),
                e.ynx(9),
                e._UZ(10, "worklenz-schedule-status", 9),
                e.BQk(),
                e.ynx(11),
                e._UZ(12, "worklenz-schedule-priority", 9),
                e.BQk(),
                e.ynx(13),
                e._UZ(14, "worklenz-schedule-phase", 9),
                e.BQk(),
                e.ynx(15),
                e._UZ(16, "worklenz-schedule-start-date", 9),
                e.BQk(),
                e.ynx(17),
                e._UZ(18, "worklenz-schedule-end-date", 9),
                e.BQk(),
                e.qZA()),
                2 & t &&
                  (e.Q6J("ngClass", n.task.is_sub_task ? "" : "main-task"),
                  e.xp6(2),
                  e.Q6J("nzChecked", n.selected),
                  e.xp6(4),
                  e.Q6J("ngIf", n.editId !== n.task.id),
                  e.xp6(1),
                  e.Q6J("ngIf", n.editId === n.task.id),
                  e.xp6(1),
                  e.Q6J("ngIf", !n.editId),
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
              m.mk,
              m.O5,
              A.ZU,
              Y.Ls,
              g.Fj,
              g.JJ,
              g.On,
              ee.ix,
              O.w,
              ce.dQ,
              te.SY,
              pe.Zp,
              _e.Ie,
              Te.j,
              Bt,
              Wt,
              Xt,
              tn,
              sn,
              ne.m,
            ],
            styles: [
              ".hidden-arrow[_ngcontent-%COMP%]{display:none!important}.dropdown-highlight[_ngcontent-%COMP%]:hover{background-color:#d0eefa54;border:#5587f5 1px solid;border-radius:3px}.plus-icon[_ngcontent-%COMP%]{display:none;position:absolute;right:0;z-index:1;top:0;bottom:0;height:100%}.expanded[_ngcontent-%COMP%]{transform:rotate(-90deg)}.sub-tasks-arrow[_ngcontent-%COMP%]{position:relative;cursor:pointer;left:3px;width:16px;padding:2px;border:1px solid transparent;z-index:1}.sub-tasks-arrow[_ngcontent-%COMP%]   .sub-arrow[_ngcontent-%COMP%]{width:10px;height:10px;color:#191919;margin-left:-2px}.task-name-text[_ngcontent-%COMP%]{border:1px solid transparent;padding-left:2px;border-radius:4px}.task-name-text[_ngcontent-%COMP%]:hover{border:1px solid #d9d9d9}.task-name[_ngcontent-%COMP%]{border:1px solid transparent}.task-name[_ngcontent-%COMP%]:hover{cursor:text;background:#fff;border-radius:4px}.highlight-col[_ngcontent-%COMP%]{border:1px solid #1890ff!important}.highlight-col[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%]{box-shadow:none}.editable[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]{visibility:hidden}.editable[_ngcontent-%COMP%]:hover   .add-button[_ngcontent-%COMP%]{visibility:visible}.ant-popover[_ngcontent-%COMP%]{width:500px}.flex-table[_ngcontent-%COMP%]{display:flex}.rows[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]{padding:3px 12px;border-bottom:1px solid #f0f0f0;border-right:1px solid #f0f0f0;background:white;display:flex;align-items:center;max-height:50px;border-radius:0}.rows[_ngcontent-%COMP%]:hover   .flex-row[_ngcontent-%COMP%]{background:#f8f7f9}.subtask[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]{background:#fcfcfc}.task-check[_ngcontent-%COMP%]{text-align:center;padding:8px 6px!important;border-left:1px solid #f0f0f0;position:sticky;z-index:1;left:0}.task-arrow[_ngcontent-%COMP%]{width:20px;min-width:20px;padding:8px 11px 8px 2px!important;border-right:none!important;position:sticky;z-index:1;left:29px}.task-arrow.highlight-col[_ngcontent-%COMP%]{border-top:1px solid #188fff!important;border-left:1px solid #188fff!important;border-bottom:1px solid #188fff!important}.task-name[_ngcontent-%COMP%]{width:450px;min-width:450px;position:sticky;z-index:1;border-radius:0;padding-right:25px;left:29px}.task-name.highlight-col[_ngcontent-%COMP%]{border:1px solid #188fff!important}.task-status[_ngcontent-%COMP%]{width:120px;min-width:120px}.task-phase[_ngcontent-%COMP%]{width:150px;min-width:150px}.task-priority[_ngcontent-%COMP%]{width:120px;min-width:120px}.task-start-date[_ngcontent-%COMP%], .task-due-date[_ngcontent-%COMP%]{width:150px;min-width:150px}.task-due-date[_ngcontent-%COMP%]{padding:0!important}.task-due-date[_ngcontent-%COMP%]   .editable[_ngcontent-%COMP%]{align-items:center;display:flex}.task-name-text[_ngcontent-%COMP%]{width:100%;-webkit-line-clamp:1;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.inner-icon-cont[_ngcontent-%COMP%]{width:max-content;display:flex;justify-content:flex-end;align-items:center;column-gap:4px}.name-input[_ngcontent-%COMP%]{padding:5px 12px;border-left:1px solid transparent}.double-arrow[_ngcontent-%COMP%]{line-height:16px;border:none;cursor:pointer}.task-placeholder[_ngcontent-%COMP%]{width:100%;height:42px;border:1px dashed #d9d9d9;background:#fafafa}.task-open-btn[_ngcontent-%COMP%]{opacity:0;position:absolute;right:0;top:4px;background:whitesmoke;transition:.25s all}.task-name[_ngcontent-%COMP%]:hover   .task-open-btn[_ngcontent-%COMP%]{opacity:1}",
            ],
            changeDetection: 0,
          })),
          r
        );
      })();
      const hn = ["taskInput"];
      function gn(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "form", 3)(1, "input", 4, 5),
            e.NdJ("blur", function () {
              e.CHM(i);
              const n = e.oxw();
              return e.KtG(n.onInputBlur());
            })("keyup.enter", function () {
              e.CHM(i);
              const n = e.oxw();
              return e.KtG(n.addInstantTask());
            }),
            e.qZA()();
        }
        if (2 & o) {
          const i = e.oxw();
          e.Q6J("formGroup", i.form),
            e.xp6(1),
            e.Q6J("nzBorderless", !0)("formControlName", "name")(
              "readOnly",
              i.creating
            );
        }
      }
      function mn(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "div", 6),
            e.NdJ("click", function () {
              e.CHM(i);
              const n = e.oxw();
              return e.KtG(n.focusTaskInput());
            }),
            e._UZ(1, "span", 7),
            e.TgZ(2, "span"),
            e._uU(3),
            e.qZA()();
        }
        if (2 & o) {
          const i = e.oxw();
          e.uIk("id", i.id),
            e.xp6(1),
            e.Q6J("nzType", i.creating ? "loading" : "plus")(
              "nzTheme",
              "outline"
            ),
            e.xp6(2),
            e.hij(" ", i.label, "");
        }
      }
      let un = (() => {
        var o;
        class r {
          get profile() {
            return this.auth.getCurrentSession();
          }
          constructor(t, n, s, a, d, l, _) {
            (this.socket = t),
              (this.auth = n),
              (this.fb = s),
              (this.service = a),
              (this.ngZone = d),
              (this.cdr = l),
              (this.map = _),
              (this.teamMember = null),
              (this.projectId = null),
              (this.groupId = null),
              (this.label = "Añadir Tarea"),
              (this.focusChange = new e.vpe()),
              (this.taskInputVisible = !1),
              (this.creating = !1),
              (this.session = null),
              (this.id = (0, b.q$)(4)),
              (this._session = null),
              (this.form = this.fb.group({
                name: [
                  null,
                  [g.kI.required, g.kI.pattern(/^(\s+\S+\s*)*(?!\s).*$/)],
                ],
              })),
              (this._session = this.auth.getCurrentSession());
          }
          ngOnInit() {
            this.session = this.auth.getCurrentSession();
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
            return (0, f.Z)(function* () {
              t.isValidInput()
                ? yield t.addInstantTask()
                : t.addTaskInputBlur();
            })();
          }
          createRequest() {
            if (!this.projectId || !this._session) return null;
            const t = this._session,
              n = {
                name: this.form.value.name,
                project_id: this.projectId,
                reporter_id: t.id,
                team_id: t.team_id,
              },
              s = this.service.getCurrentGroup();
            return (
              s.value === this.service.GROUP_BY_STATUS_VALUE
                ? (n.status_id = this.groupId || void 0)
                : s.value === this.service.GROUP_BY_PRIORITY_VALUE
                ? (n.priority_id = this.groupId || void 0)
                : s.value === this.service.GROUP_BY_PHASE_VALUE &&
                  (n.phase_id = this.groupId || void 0),
              n
            );
          }
          isValidInput() {
            return this.form.valid && this.form.value.name.trim().length;
          }
          addInstantTask() {
            var t = this;
            return (0, f.Z)(function* () {
              if (
                !t.creating &&
                t.projectId &&
                t._session &&
                t.isValidInput()
              ) {
                try {
                  const n = t.createRequest();
                  if (!n) return;
                  (t.creating = !0),
                    t.socket.emit(p.C.QUICK_TASK.toString(), JSON.stringify(n)),
                    t.socket.once(p.C.QUICK_TASK.toString(), (s) => {
                      const a = {
                        team_member_id: t.teamMember?.team_member_id,
                        project_id: s.project_id,
                        task_id: s.id,
                        reporter_id: t.session?.id,
                        mode: 0,
                      };
                      t.socket.emit(
                        p.C.QUICK_ASSIGNEES_UPDATE.toString(),
                        JSON.stringify(a)
                      ),
                        t.socket.once(
                          p.C.QUICK_ASSIGNEES_UPDATE.toString(),
                          (d) => {
                            (t.creating = !1),
                              t.onNewTaskReceived(s),
                              t.cdr.markForCheck();
                          }
                        );
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
                }, L.GR);
              }),
              this.cdr.markForCheck();
          }
          onNewTaskReceived(t) {
            if (this.groupId && t.id) {
              if (this.map.has(t.id)) return;
              this.service.addTask(t, this.groupId),
                Q.s.track(t.parent_task_id ? R.c3 : R.yS),
                this.service.emitRefreshMembers(),
                this.reset(!1);
            }
          }
        }
        return (
          ((o = r).ɵfac = function (t) {
            return new (t || o)(
              e.Y36(v.s),
              e.Y36(Z.e),
              e.Y36(g.qu),
              e.Y36(I),
              e.Y36(e.R0b),
              e.Y36(e.sBO),
              e.Y36(E)
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-schedule-member-task-add-container"]],
            viewQuery: function (t, n) {
              if ((1 & t && e.Gf(hn, 5), 2 & t)) {
                let s;
                e.iGM((s = e.CRH())) && (n.taskInput = s.first);
              }
            },
            inputs: {
              teamMember: "teamMember",
              projectId: "projectId",
              groupId: "groupId",
              label: "label",
            },
            outputs: { focusChange: "focusChange" },
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
                e.YNc(1, gn, 3, 4, "form", 1),
                e.YNc(2, mn, 4, 4, "div", 2),
                e.BQk()),
                2 & t &&
                  (e.Q6J("ngSwitch", n.taskInputVisible),
                  e.xp6(1),
                  e.Q6J("ngSwitchCase", !0),
                  e.xp6(1),
                  e.Q6J("ngSwitchCase", !1));
            },
            dependencies: [
              m.RF,
              m.n9,
              Y.Ls,
              g._Y,
              g.Fj,
              g.JJ,
              g.JL,
              O.w,
              g.sg,
              g.u,
              pe.Zp,
            ],
            styles: [
              ".input-icon[_ngcontent-%COMP%]{font-size:11px}.task-name[_ngcontent-%COMP%]{border:1px solid transparent}.task-name[_ngcontent-%COMP%]:hover{cursor:text;background:#fff;border:1px solid #bfbfbf;border-radius:4px}",
            ],
            changeDetection: 0,
          })),
          r
        );
      })();
      var fn = c(59773);
      const Cn = ["contextMenuDropdown"];
      function kn(o, r) {
        if ((1 & o && e._uU(0), 2 & o)) {
          const i = e.oxw().$implicit;
          e.hij(" ", (null == i ? null : i.name) || null, " ");
        }
      }
      function xn(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "li", 7),
            e.NdJ("click", function () {
              const s = e.CHM(i).$implicit,
                a = e.oxw();
              return e.KtG(a.changeGroup(s.id));
            }),
            e._UZ(1, "nz-badge", 8),
            e.ALo(2, "safeString"),
            e.YNc(3, kn, 1, 1, "ng-template", null, 9, e.W1O),
            e.qZA();
        }
        if (2 & o) {
          const i = r.$implicit,
            t = e.MAs(4);
          e.xp6(1), e.Q6J("nzColor", e.lcZ(2, 2, i.color_code))("nzText", t);
        }
      }
      function vn(o, r) {
        1 & o && (e._UZ(0, "span", 10), e._uU(1, " Move to\n"));
      }
      let Tn = (() => {
        var o;
        class r {
          get profile() {
            return this.auth.getCurrentSession();
          }
          constructor(t, n, s, a, d, l) {
            (this.contextMenuService = t),
              (this.service = n),
              (this.map = s),
              (this.socket = a),
              (this.cdr = d),
              (this.auth = l),
              (this.projectId = null),
              (this.teamMemberId = null),
              (this.groups = []),
              (this.removing = !1),
              (this.selectedTask = null),
              (this.id = (0, b.q$)(4)),
              (this._session = null),
              (this.destroy$ = new k.x()),
              (this.handleMemberChangeResponse = (_) => {
                try {
                  _ &&
                    _.id &&
                    (this.service.deleteTask(_.id), this.cdr.markForCheck());
                } catch {}
              }),
              this.service.onContextMenu$
                .pipe((0, fn.R)(this.destroy$))
                .subscribe((_) => {
                  this.onContextMenu(_);
                }),
              (this._session = this.auth.getCurrentSession());
          }
          onContextMenu(t) {
            (this.selectedTask = t.task),
              this.map.deselectAll(),
              this.map.selectTask(t.task),
              this.cdr.detectChanges(),
              this.contextMenuService.create(t.event, this.contextMenuDropdown);
          }
          removeMember() {
            if (!this._session || !this.selectedTask || !this.teamMemberId)
              return;
            const t = {
              team_member_id: this.teamMemberId,
              project_id: this.projectId,
              task_id: this.selectedTask.id,
              reporter_id: this._session.id,
              mode: 1,
              parent_task: this.selectedTask.parent_task_id,
            };
            this.socket.emit(
              p.C.QUICK_ASSIGNEES_UPDATE.toString(),
              JSON.stringify(t)
            ),
              this.socket.once(p.C.QUICK_ASSIGNEES_UPDATE.toString(), () => {
                this.service.emitRemoveMembersTask(t.task_id);
              });
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
              (this.socket.emit(
                p.C.TASK_STATUS_CHANGE.toString(),
                JSON.stringify({
                  task_id: n,
                  status_id: t,
                  team_id: this.auth.getCurrentSession()?.team_id,
                })
              ),
              this.service.getCurrentGroup().value ===
                this.service.GROUP_BY_STATUS_VALUE &&
                this.selectedTask &&
                (this.service.updateTaskGroup(this.selectedTask, !1),
                this.service.isSubtasksIncluded &&
                  this.service.emitRefreshSubtasksIncluded()),
              this.cdr.markForCheck());
          }
          handlePriorityChange(t, n) {
            n &&
              (this.socket.emit(
                p.C.TASK_PRIORITY_CHANGE.toString(),
                JSON.stringify({ task_id: n, priority_id: t })
              ),
              this.service.getCurrentGroup().value ===
                this.service.GROUP_BY_PRIORITY_VALUE &&
                this.selectedTask &&
                (this.service.updateTaskGroup(this.selectedTask, !1),
                this.service.isSubtasksIncluded &&
                  this.service.emitRefreshSubtasksIncluded()),
              this.cdr.markForCheck());
          }
          handlePhaseChange(t, n) {
            n &&
              (this.socket.emit(p.C.TASK_PHASE_CHANGE.toString(), {
                task_id: n,
                phase_id: t,
              }),
              this.service.getCurrentGroup().value ===
                this.service.GROUP_BY_PHASE_VALUE &&
                this.selectedTask &&
                (this.service.updateTaskGroup(this.selectedTask, !1),
                this.service.isSubtasksIncluded &&
                  this.service.emitRefreshSubtasksIncluded()),
              this.cdr.markForCheck());
          }
        }
        return (
          ((o = r).ɵfac = function (t) {
            return new (t || o)(
              e.Y36(j.Iw),
              e.Y36(I),
              e.Y36(E),
              e.Y36(v.s),
              e.Y36(e.sBO),
              e.Y36(Z.e)
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-schedule-tasks-context-menu"]],
            viewQuery: function (t, n) {
              if ((1 & t && e.Gf(Cn, 5), 2 & t)) {
                let s;
                e.iGM((s = e.CRH())) && (n.contextMenuDropdown = s.first);
              }
            },
            inputs: {
              projectId: "projectId",
              teamMemberId: "teamMemberId",
              groups: "groups",
            },
            decls: 11,
            vars: 4,
            consts: [
              ["contextMenuDropdown", "nzDropdownMenu"],
              ["nz-menu", ""],
              ["nz-menu-item", "", 3, "click"],
              ["nz-icon", "", 1, "me-2", 3, "nzType", "nzTheme"],
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
              ["titleTemplate", ""],
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
              if (
                (1 & t &&
                  (e.TgZ(0, "nz-dropdown-menu", null, 0)(2, "ul", 1)(
                    3,
                    "li",
                    2
                  ),
                  e.NdJ("click", function () {
                    return n.removeMember();
                  }),
                  e._UZ(4, "span", 3),
                  e._uU(5, " Remove from member "),
                  e.qZA(),
                  e.TgZ(6, "li", 4)(7, "ul"),
                  e.YNc(8, xn, 5, 4, "li", 5),
                  e.qZA()()()(),
                  e.YNc(9, vn, 2, 0, "ng-template", null, 6, e.W1O)),
                2 & t)
              ) {
                const s = e.MAs(10);
                e.xp6(4),
                  e.Q6J("nzType", n.removing ? "loading" : "user-delete")(
                    "nzTheme",
                    "outline"
                  ),
                  e.xp6(2),
                  e.Q6J("nzTitle", s),
                  e.xp6(2),
                  e.Q6J("ngForOf", n.groups);
              }
            },
            dependencies: [m.sg, Y.Ls, O.w, B.x7, N.wO, N.r9, N.rY, j.RR, ne.m],
            changeDetection: 0,
          })),
          r
        );
      })();
      function bn(o, r) {
        1 & o && (e.TgZ(0, "label", 14), e._uU(1, "Agrupar Por: "), e.qZA());
      }
      function Mn(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "button", 15)(1, "span", 16),
            e._uU(2),
            e.ALo(3, "ellipsis"),
            e.qZA(),
            e._UZ(4, "span", 17),
            e.qZA()),
          2 & o)
        ) {
          e.oxw();
          const i = e.MAs(5),
            t = e.oxw();
          e.Q6J("nzTrigger", "click")("nzDropdownMenu", i)("nzClickHide", !0),
            e.xp6(1),
            e.Q6J("nzTooltipTitle", t.selectedGroup.label),
            e.xp6(1),
            e.hij(" ", e.xi3(3, 6, t.selectedGroup.label, 15), " "),
            e.xp6(2),
            e.Q6J("nzType", "caret-down");
        }
      }
      function wn(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "li", 18),
            e.NdJ("click", function () {
              const s = e.CHM(i).$implicit,
                a = e.oxw(2);
              return e.KtG(a.changeGroup(s));
            }),
            e.TgZ(1, "span", 19),
            e._uU(2),
            e.qZA()();
        }
        if (2 & o) {
          const i = r.$implicit,
            t = e.oxw(2);
          e.Q6J("nzSelected", i.value === t.selectedGroup.value),
            e.xp6(2),
            e.Oqu(i.label);
        }
      }
      function zn(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.ynx(0),
            e.TgZ(1, "worklenz-schedule-task-list-row", 32, 33),
            e.NdJ("onShowSubTasks", function (n) {
              e.CHM(i);
              const s = e.MAs(2),
                a = e.oxw(2).$implicit,
                d = e.oxw(3);
              return e.KtG(d.unuseFunc(n, s, a.id));
            })("onOpenTask", function (n) {
              e.CHM(i);
              const s = e.oxw(5);
              return e.KtG(s.openTask(n));
            }),
            e.qZA(),
            e.BQk();
        }
        if (2 & o) {
          const i = r.$implicit,
            t = e.oxw(5);
          e.xp6(1),
            e.ekj(
              "selected",
              (null == t.selectedTask ? null : t.selectedTask.id) === i.id
            ),
            e.Q6J("task", i);
        }
      }
      function yn(o, r) {
        1 & o &&
          (e.TgZ(0, "div", 34), e._uU(1, " No tasks available "), e.qZA());
      }
      function On(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "div", 25),
            e._UZ(1, "worklenz-schedule-task-list-header", 26),
            e.YNc(2, zn, 3, 3, "ng-container", 27),
            e.YNc(3, yn, 2, 0, "div", 28),
            e.TgZ(
              4,
              "div",
              29,
              30
            )(6, "worklenz-schedule-member-task-add-container", 31),
            e.NdJ("focusChange", function (n) {
              e.CHM(i);
              const s = e.MAs(5),
                a = e.oxw(4);
              return e.KtG(a.handleFocusChange(n, s));
            }),
            e.qZA()()();
        }
        if (2 & o) {
          const i = e.oxw().$implicit,
            t = e.oxw(3);
          e.xp6(1),
            e.Q6J("groupId", i.id),
            e.xp6(1),
            e.Q6J("ngForOf", i.tasks)("ngForTrackBy", t.trackById),
            e.xp6(1),
            e.Q6J("ngIf", !i.tasks.length),
            e.xp6(3),
            e.Q6J("projectId", t.projectId)("teamMember", t.teamMember)(
              "groupId",
              i.id
            );
        }
      }
      function Sn(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "div", 21)(1, "div", 22),
            e.NdJ("click", function () {
              const s = e.CHM(i).$implicit,
                a = e.oxw(3);
              return e.KtG(a.toggleCollapse(s));
            }),
            e._UZ(2, "span", 23),
            e._uU(3),
            e.qZA(),
            e.YNc(4, On, 7, 7, "div", 24),
            e.qZA();
        }
        if (2 & o) {
          const i = r.$implicit;
          e.xp6(1),
            e.Udp("background-color", i.color_code),
            e.xp6(1),
            e.Q6J("nzType", null != i && i.isExpand ? "down" : "right"),
            e.xp6(1),
            e.AsE(" ", i.name, " (", i.tasks.length, ") "),
            e.xp6(1),
            e.Q6J("ngIf", i && (null == i ? null : i.isExpand));
        }
      }
      function Pn(o, r) {
        if (
          (1 & o && (e.ynx(0), e.YNc(1, Sn, 5, 6, "div", 20), e.BQk()), 2 & o)
        ) {
          const i = e.oxw(2);
          e.xp6(1), e.Q6J("rxForOf", i.groups)("rxForTrackBy", i.trackById);
        }
      }
      function In(o, r) {
        if (
          (1 & o &&
            (e.ynx(0),
            e.TgZ(1, "nz-space", 6),
            e.YNc(2, bn, 2, 0, "label", 7),
            e.YNc(3, Mn, 5, 9, "button", 8),
            e.TgZ(4, "nz-dropdown-menu", null, 9)(6, "ul", 10),
            e.YNc(7, wn, 3, 2, "li", 11),
            e.qZA()()(),
            e.TgZ(8, "nz-skeleton", 12),
            e.YNc(9, Pn, 2, 2, "ng-container", 13),
            e.qZA(),
            e.BQk()),
          2 & o)
        ) {
          const i = e.oxw();
          e.xp6(7),
            e.Q6J("ngForOf", i.service.GROUP_BY_OPTIONS)(
              "ngForTrackBy",
              i.trackById
            ),
            e.xp6(1),
            e.ekj("p-4", i.loading),
            e.Q6J("nzActive", !0)("nzLoading", i.loadingGroups),
            e.xp6(1),
            e.Q6J("ngIf", i.teamMember);
        }
      }
      function An(o, r) {
        if (
          (1 & o && (e._UZ(0, "nz-avatar", 36), e.ALo(1, "firstCharUpper")),
          2 & o)
        ) {
          const i = e.oxw(2);
          e.Udp(
            "background-color",
            i.teamMember.avatar_url ? "#ececec" : i.getColor(i.teamMember.name)
          ),
            e.Q6J("nzSize", 28)("nzText", e.lcZ(1, 5, i.teamMember.name))(
              "nzSrc",
              i.teamMember.avatar_url
            );
        }
      }
      function Zn(o, r) {
        if ((1 & o && (e.YNc(0, An, 2, 7, "nz-avatar", 35), e._uU(1)), 2 & o)) {
          const i = e.oxw();
          e.Q6J("ngIf", i.teamMember),
            e.xp6(1),
            e.hij(" ", null == i.teamMember ? null : i.teamMember.name, "\n");
        }
      }
      function jn(o, r) {
        1 & o && e._UZ(0, "span", 37),
          2 & o && e.Q6J("nzType", "close")("nzTheme", "outline");
      }
      let Dn = (() => {
        var o;
        class r {
          get show() {
            return this._show;
          }
          set show(t) {
            t !== this._show && (this._show = t);
          }
          get groups() {
            return this.service.groups;
          }
          get selectedGroup() {
            return this.service.getCurrentGroup();
          }
          constructor(t, n, s, a, d, l, _, u, M, h, U, z, w) {
            var T = this;
            (this.cdr = t),
              (this.api = n),
              (this.ngZone = s),
              (this.map = a),
              (this.socket = d),
              (this.renderer = l),
              (this.service = _),
              (this.utils = u),
              (this.statusesApi = M),
              (this.prioritiesApi = h),
              (this.phasesApi = U),
              (this.taskViewService = z),
              (this.projectService = w),
              (this._show = !1),
              (this.teamMember = null),
              (this.projectId = null),
              (this.showChange = new e.vpe()),
              (this.onOpenTask = new e.vpe()),
              (this.DRAWER_CLOSE_TIME = 100),
              (this.BODY_STYLE = {
                padding: 0,
                overflowX: "hidden",
                overflowY: "auto",
              }),
              (this.loading = !1),
              (this.loadingGroups = !1),
              (this.loadingStatuses = !1),
              (this.loadingPriorities = !1),
              (this.loadingPhases = !1),
              (this.loadingCategories = !1),
              (this.groupIds = []),
              (this.selectedTask = null),
              (this.categories = []),
              this.taskViewService.onSingleMemberChange
                .pipe((0, C.sL)())
                .subscribe(
                  (function () {
                    var y = (0, f.Z)(function* (ie) {
                      ie === T.teamMember?.team_member_id &&
                        (yield T.getGroups(!1)),
                        T.cdr.markForCheck();
                    });
                    return function (ie) {
                      return y.apply(this, arguments);
                    };
                  })()
                ),
              this.taskViewService.onDelete.pipe((0, C.sL)()).subscribe(
                (function () {
                  var y = (0, f.Z)(function* (ie) {
                    T.init();
                  });
                  return function (ie) {
                    return y.apply(this, arguments);
                  };
                })()
              ),
              this.service.onRemoveMembersTask
                .pipe((0, C.sL)())
                .subscribe((y) => {
                  this.service.deleteTask(y);
                });
          }
          init() {
            (this.service.isSubtasksIncluded = !0),
              Promise.all([
                this.getGroups(!0),
                this.getStatuses(),
                this.getPriorities(),
                this.getCategories(),
                this.getPhases(),
              ]);
          }
          getConf(t) {
            const n = {
              id: this.projectId,
              members: this.teamMember?.team_member_id,
              archived: !1,
              group: this.service.getCurrentGroup().value,
              isSubtasksInclude: !1,
            };
            return t && (n.parent_task = t), n;
          }
          getGroups(t = !0) {
            var n = this;
            return (0, f.Z)(function* () {
              if (n.projectId && n.teamMember?.team_member_id) {
                try {
                  n.map.deselectAll(), (n.loadingGroups = t);
                  const s = n.getConf();
                  s.isSubtasksInclude = n.service.isSubtasksIncluded;
                  const a = yield n.api.getTasksByMember(s);
                  if (a.done) {
                    const d = (0, b.I8)(a.body);
                    (n.groupIds = d.map((l) => l.id)),
                      n.mapTasks(d),
                      (n.service.groups = d);
                  }
                  n.loadingGroups = !1;
                } catch {
                  n.loadingGroups = !1;
                }
                n.cdr.markForCheck();
              }
            })();
          }
          mapTasks(t) {
            for (const n of t) {
              this.map.registerGroup(n);
              for (const s of n.tasks)
                s.start_date && (s.start_date = new Date(s.start_date)),
                  s.end_date && (s.end_date = new Date(s.end_date));
            }
          }
          getStatuses() {
            var t = this;
            return (0, f.Z)(function* () {
              if (t.projectId)
                try {
                  t.loadingStatuses = !0;
                  const n = yield t.statusesApi.get(t.projectId);
                  n.done && (t.service.statuses = n.body),
                    (t.loadingStatuses = !1);
                } catch {
                  t.loadingStatuses = !1;
                }
            })();
          }
          getPriorities() {
            var t = this;
            return (0, f.Z)(function* () {
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
            return (0, f.Z)(function* () {
              try {
                t.loadingCategories = !0;
                const n = yield t.statusesApi.getCategories();
                n.done && (t.categories = n.body), (t.loadingCategories = !1);
              } catch {
                t.loadingCategories = !1;
              }
            })();
          }
          getPhases() {
            var t = this;
            return (0, f.Z)(function* () {
              if (t.projectId)
                try {
                  const n = yield t.phasesApi.get(t.projectId);
                  n.done && (t.service.phases = n.body);
                } catch {}
            })();
          }
          handleCancel() {
            this._show && ((this._show = !1), this.showChange.emit(this._show));
          }
          onVisibilityChange(t) {
            t &&
              (this.service.setCurrentGroup(this.service.GROUP_BY_OPTIONS[0]),
              setTimeout(() => this.init(), this.DRAWER_CLOSE_TIME));
          }
          getColor(t) {
            return L.Lj[t?.charAt(0).toUpperCase() || "A"];
          }
          trackById(t, n) {
            return n.id;
          }
          openTask(t) {
            t.project_id && (this.projectService.id = t.project_id),
              this.onOpenTask.emit(t),
              this.cdr.markForCheck();
          }
          toggleCollapse(t) {
            var n = this;
            return (0, f.Z)(function* () {
              n.isTaskListGroup(t) && (t.isExpand = !t.isExpand),
                n.cdr.detectChanges();
            })();
          }
          isTaskListGroup(t) {
            return void 0 !== t.tasks;
          }
          toggleFocusCls(t, n) {
            t
              ? this.renderer.addClass(n, this.service.HIGHLIGHT_COL_CLS)
              : this.renderer.removeClass(n, this.service.HIGHLIGHT_COL_CLS);
          }
          changeGroup(t) {
            this.service.setCurrentGroup(t), this.init();
          }
          handleFocusChange(t, n) {
            this.ngZone.runOutsideAngular(() => {
              this.toggleFocusCls(t, n);
            });
          }
          unuseFunc(t, n, s) {}
        }
        return (
          ((o = r).ɵfac = function (t) {
            return new (t || o)(
              e.Y36(e.sBO),
              e.Y36(de.V),
              e.Y36(e.R0b),
              e.Y36(E),
              e.Y36(v.s),
              e.Y36(e.Qsj),
              e.Y36(I),
              e.Y36(xe.F),
              e.Y36(Ft.w),
              e.Y36(Lt.s),
              e.Y36(Et.f),
              e.Y36(J.f),
              e.Y36(Ce.m)
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-schedule-project-member-tasks-drawer"]],
            inputs: {
              show: "show",
              teamMember: "teamMember",
              projectId: "projectId",
            },
            outputs: { showChange: "showChange", onOpenTask: "onOpenTask" },
            decls: 8,
            vars: 9,
            consts: [
              [
                3,
                "nzVisible",
                "nzWidth",
                "nzBodyStyle",
                "nzCloseIcon",
                "nzTitle",
                "nzWrapClassName",
                "nzOnClose",
                "nzVisibleChange",
              ],
              [1, "d-block"],
              [4, "nzDrawerContent"],
              ["titleTemplate", ""],
              ["iconTemplate", ""],
              [3, "teamMemberId", "projectId", "groups"],
              [1, "align-items-center", "p-skel", "mb-3", "mt-3"],
              ["class", "ms-1", 4, "nzSpaceItem"],
              [
                "nz-button",
                "",
                "nz-dropdown",
                "",
                "class",
                "ms-1",
                3,
                "nzTrigger",
                "nzDropdownMenu",
                "nzClickHide",
                4,
                "nzSpaceItem",
              ],
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
              [1, "p-skel", 3, "nzActive", "nzLoading"],
              [4, "ngIf"],
              [1, "ms-1"],
              [
                "nz-button",
                "",
                "nz-dropdown",
                "",
                1,
                "ms-1",
                3,
                "nzTrigger",
                "nzDropdownMenu",
                "nzClickHide",
              ],
              ["nz-tooltip", "", 3, "nzTooltipTitle"],
              ["nz-icon", "", 3, "nzType"],
              ["nz-menu-item", "", 1, "m-0", 3, "nzSelected", "click"],
              ["nz-typography", ""],
              ["class", "mb-3", 4, "rxFor", "rxForOf", "rxForTrackBy"],
              [1, "mb-3"],
              [1, "group-heading", "cursor-pointer", 3, "click"],
              ["nz-icon", "", "nzTheme", "outline", 1, "me-2", 3, "nzType"],
              ["class", "tasks-container", 4, "ngIf"],
              [1, "tasks-container"],
              [3, "groupId"],
              [4, "ngFor", "ngForOf", "ngForTrackBy"],
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
              [1, "new-task-input"],
              ["td1", ""],
              [3, "projectId", "teamMember", "groupId", "focusChange"],
              [3, "task", "onShowSubTasks", "onOpenTask"],
              ["row", ""],
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
              [1, "me-2", 3, "nzSize", "nzText", "nzSrc"],
              ["nz-icon", "", 3, "nzType", "nzTheme"],
            ],
            template: function (t, n) {
              if (
                (1 & t &&
                  (e.TgZ(0, "nz-drawer", 0),
                  e.NdJ("nzOnClose", function () {
                    return n.handleCancel();
                  })("nzVisibleChange", function (a) {
                    return n.onVisibilityChange(a);
                  })("nzVisibleChange", function (a) {
                    return (n.show = a);
                  }),
                  e.TgZ(1, "div", 1),
                  e.YNc(2, In, 10, 7, "ng-container", 2),
                  e.qZA()(),
                  e.YNc(3, Zn, 2, 2, "ng-template", null, 3, e.W1O),
                  e.YNc(5, jn, 1, 2, "ng-template", null, 4, e.W1O),
                  e._UZ(7, "worklenz-schedule-tasks-context-menu", 5)),
                2 & t)
              ) {
                const s = e.MAs(4),
                  a = e.MAs(6);
                e.Q6J("nzVisible", n.show)("nzWidth", 920)(
                  "nzBodyStyle",
                  n.BODY_STYLE
                )("nzCloseIcon", a)("nzTitle", s)(
                  "nzWrapClassName",
                  "task-form-drawer-opened task-view"
                ),
                  e.xp6(7),
                  e.Q6J(
                    "teamMemberId",
                    n.teamMember ? n.teamMember.team_member_id : null
                  )("projectId", n.projectId)("groups", n.groups);
              }
            },
            dependencies: [
              m.sg,
              m.O5,
              G.Dz,
              A.ZU,
              Y.Ls,
              ee.ix,
              O.w,
              ce.dQ,
              te.SY,
              D.Vz,
              D.SQ,
              le.ng,
              ke._,
              H.NU,
              H.$1,
              N.wO,
              N.r9,
              j.cm,
              j.RR,
              j.wA,
              Qt,
              pn,
              un,
              Tn,
              ae.I,
              ve.p,
            ],
            styles: [
              ".group-heading[_ngcontent-%COMP%]{max-width:max-content;width:max-content;padding:6px 16px 6px 6px;border-top-right-radius:4px;border-top-left-radius:4px}.p-skel[_ngcontent-%COMP%]{padding-left:24px}.tasks-container[_ngcontent-%COMP%]{max-width:880px;overflow-x:auto}.new-task-input[_ngcontent-%COMP%]{padding-left:4px;padding-top:4px;padding-bottom:4px;border-bottom:1px solid #f0f0f0;border-right:1px solid #f0f0f0;border-left:1px solid #f0f0f0;max-width:880px;overflow-x:auto;position:sticky;left:0}.tasks-empty-placeholder[_ngcontent-%COMP%]{width:100%;height:42px;background:#fafafa;border-left:1px solid #f0f0f0;border-right:1px solid #f0f0f0;left:0;position:sticky}",
            ],
            changeDetection: 0,
          })),
          r
        );
      })();
      const Yn = ["scroller"],
        Nn = ["fixed_right_column"],
        Un = ["fixed_left_column"];
      function Fn(o, r) {
        1 & o &&
          (e.TgZ(0, "div", 5),
          e.ynx(1),
          e.TgZ(2, "div", 6),
          e._UZ(3, "img", 7),
          e.qZA(),
          e.TgZ(4, "div", 8)(5, "div", 9),
          e._uU(6, "No Projects to show."),
          e.qZA(),
          e.TgZ(7, "div", 10)(8, "a", 11),
          e._uU(9, "Go to create projects."),
          e.qZA()()(),
          e.BQk(),
          e.qZA());
      }
      function Ln(o, r) {
        if (
          (1 & o && (e._UZ(0, "nz-avatar", 41), e.ALo(1, "firstCharUpper")),
          2 & o)
        ) {
          const i = e.oxw().$implicit,
            t = e.oxw(5);
          e.Udp(
            "background-color",
            i.avatar_url ? "#ececec" : t.getColor(i.name)
          ),
            e.Q6J("nzSize", 28)("nzText", e.lcZ(1, 5, i.name))(
              "nzSrc",
              i.avatar_url
            );
        }
      }
      function En(o, r) {
        1 & o &&
          (e.TgZ(0, "small", 42), e._uU(1, "(Pending Invitation)"), e.qZA());
      }
      function Jn(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "div", 37),
            e.NdJ("click", function () {
              const s = e.CHM(i).$implicit,
                a = e.oxw(3).$implicit,
                d = e.oxw(2);
              return e.KtG(d.openMember(s, a.id));
            }),
            e.TgZ(1, "div", 38),
            e.YNc(2, Ln, 2, 7, "nz-avatar", 39),
            e._uU(3),
            e.YNc(4, En, 2, 0, "small", 40),
            e.qZA()();
        }
        if (2 & o) {
          const i = r.$implicit;
          e.xp6(2),
            e.Q6J("ngIf", i.name),
            e.xp6(1),
            e.hij(" ", i.name, " "),
            e.xp6(1),
            e.Q6J("ngIf", i.pending_invitation);
        }
      }
      function Gn(o, r) {
        if (
          (1 & o && (e.ynx(0), e.YNc(1, Jn, 5, 3, "div", 36), e.BQk()), 2 & o)
        ) {
          const i = e.oxw(2).$implicit;
          e.xp6(1), e.Q6J("ngForOf", i.members);
        }
      }
      function Qn(o, r) {
        1 & o &&
          (e.ynx(0),
          e.TgZ(1, "div", 43)(2, "span", 44),
          e._uU(3, "Ningún abogado ha sido asignado al expediente. "),
          e.qZA()(),
          e.BQk());
      }
      function Rn(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 34),
            e.YNc(1, Gn, 2, 1, "ng-container", 35),
            e.YNc(2, Qn, 4, 0, "ng-container", 35),
            e.qZA()),
          2 & o)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J("ngIf", i.members.length),
            e.xp6(1),
            e.Q6J("ngIf", !i.members.length);
        }
      }
      function Hn(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "div", 29)(1, "div", 30),
            e.NdJ("click", function () {
              const s = e.CHM(i).$implicit,
                a = e.oxw(2);
              return e.KtG(a.toggleProject(s));
            }),
            e._UZ(2, "span", 31)(3, "nz-badge", 32),
            e.TgZ(4, "span"),
            e._uU(5),
            e.qZA()(),
            e.YNc(6, Rn, 3, 2, "div", 33),
            e.qZA();
        }
        if (2 & o) {
          const i = r.$implicit;
          e.xp6(1),
            e.Q6J("ngClass", i.is_expanded ? "project-active" : ""),
            e.xp6(1),
            e.Q6J("nzType", i.is_expanded ? "down" : "right"),
            e.xp6(1),
            e.Q6J("nzColor", i.color_code),
            e.xp6(2),
            e.Oqu(i.name),
            e.xp6(1),
            e.Q6J("ngIf", i.is_expanded);
        }
      }
      function $n(o, r) {
        if (
          (1 & o && (e.TgZ(0, "div", 13)(1, "div", 45), e._uU(2), e.qZA()()),
          2 & o)
        ) {
          const i = r.$implicit,
            t = e.oxw(2);
          e.xp6(1),
            e.Udp(
              "min-width",
              i.days.length * t.common.GANNT_COLUMN_WIDTH + "px"
            ),
            e.xp6(1),
            e.hij(" ", i.month, " ");
        }
      }
      const we = function (o, r) {
        return [o, r];
      };
      function Bn(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 47)(1, "div", 48)(2, "div", 49),
            e._uU(3),
            e.qZA(),
            e.TgZ(4, "div", 50),
            e._uU(5),
            e.qZA()()()),
          2 & o)
        ) {
          const i = r.$implicit,
            t = e.oxw(3);
          e.Udp("min-width", t.common.GANNT_COLUMN_WIDTH + "px")(
            "max-width",
            t.common.GANNT_COLUMN_WIDTH + "px"
          ),
            e.xp6(1),
            e.Q6J(
              "ngClass",
              e.WLB(
                7,
                we,
                i.isWeekend ? "weekend" : "",
                i.isToday ? "today today-bg" : ""
              )
            ),
            e.xp6(2),
            e.hij(" ", i.name, " "),
            e.xp6(2),
            e.hij(" ", i.day, " ");
        }
      }
      function Vn(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 13), e.YNc(1, Bn, 6, 10, "div", 46), e.qZA()),
          2 & o)
        ) {
          const i = r.$implicit;
          e.xp6(1), e.Q6J("ngForOf", i.days);
        }
      }
      function qn(o, r) {
        if ((1 & o && e._UZ(0, "div", 52), 2 & o)) {
          const i = r.$implicit,
            t = e.oxw(3);
          e.Udp("min-width", t.common.GANNT_COLUMN_WIDTH + "px"),
            e.Q6J(
              "ngClass",
              e.WLB(
                3,
                we,
                i.isWeekend ? "weekend" : "",
                i.isToday ? "today" : ""
              )
            );
        }
      }
      function Wn(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 13), e.YNc(1, qn, 1, 6, "div", 51), e.qZA()),
          2 & o)
        ) {
          const i = r.$implicit;
          e.xp6(1), e.Q6J("ngForOf", i.days);
        }
      }
      function Kn(o, r) {
        if (
          (1 & o &&
            (e.ynx(0), e._UZ(1, "worklenz-member-indicator", 62), e.BQk()),
          2 & o)
        ) {
          const i = r.$implicit,
            t = e.oxw().$implicit,
            n = e.oxw(3).$implicit;
          e.xp6(1),
            e.Q6J("allocation", i)("teamMemberId", t.team_member_id)(
              "projectId",
              n.id
            );
        }
      }
      function Xn(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 57)(1, "div", 58)(2, "div", 59),
            e._UZ(3, "worklenz-add-member-allocation", 60),
            e.qZA(),
            e.YNc(4, Kn, 2, 3, "ng-container", 61),
            e.qZA()()),
          2 & o)
        ) {
          const i = r.$implicit,
            t = e.oxw(3).$implicit;
          e.xp6(3),
            e.Q6J("projectId", t.id)("teamMemberId", i.team_member_id),
            e.xp6(1),
            e.Q6J("ngForOf", i.allocations);
        }
      }
      function ei(o, r) {
        if (
          (1 & o && (e.ynx(0), e.YNc(1, Xn, 5, 3, "div", 56), e.BQk()), 2 & o)
        ) {
          const i = e.oxw(2).$implicit;
          e.xp6(1), e.Q6J("ngForOf", i.members);
        }
      }
      function ti(o, r) {
        1 & o &&
          (e.ynx(0),
          e.TgZ(1, "div", 57),
          e._UZ(2, "div", 58),
          e.qZA(),
          e.BQk());
      }
      function ni(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 34),
            e.YNc(1, ei, 2, 1, "ng-container", 35),
            e.YNc(2, ti, 3, 0, "ng-container", 35),
            e.qZA()),
          2 & o)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J("ngIf", i.members.length),
            e.xp6(1),
            e.Q6J("ngIf", !i.members.length);
        }
      }
      function ii(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 53)(1, "div", 54),
            e._UZ(2, "worklenz-project-indicator", 55),
            e.qZA(),
            e.YNc(3, ni, 3, 2, "div", 33),
            e.qZA()),
          2 & o)
        ) {
          const i = r.$implicit;
          e.xp6(1),
            e.Q6J("ngClass", i.is_expanded ? "project-active" : ""),
            e.xp6(1),
            e.Q6J("project", i),
            e.xp6(1),
            e.Q6J("ngIf", i.is_expanded);
        }
      }
      function oi(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 12)(1, "div", 13)(2, "div", 14, 15),
            e._UZ(4, "div", 16),
            e.TgZ(5, "div", 17),
            e.YNc(6, Hn, 7, 5, "div", 18),
            e.qZA()(),
            e.TgZ(7, "div", 19, 20)(9, "div", 21),
            e._UZ(10, "div", 22),
            e.TgZ(11, "div", 23),
            e.YNc(12, $n, 3, 3, "div", 24),
            e.qZA(),
            e.TgZ(13, "div", 25),
            e.YNc(14, Vn, 2, 1, "div", 24),
            e.qZA()(),
            e.TgZ(15, "div", 26)(16, "div", 27),
            e.YNc(17, Wn, 2, 1, "div", 24),
            e.qZA(),
            e.YNc(18, ii, 4, 3, "div", 28),
            e.qZA()()()()),
          2 & o)
        ) {
          const i = e.oxw();
          e.xp6(6),
            e.Q6J("rxForOf", i.service.projects),
            e.xp6(3),
            e.Udp("width", i.numberOfDays * i.common.GANNT_COLUMN_WIDTH + "px"),
            e.xp6(1),
            e.Udp(
              "transform",
              "translateX(" + i.service.highlighterLeft + "px)"
            )("width", i.service.highlighterWidth + "px")(
              "min-width",
              i.service.highlighterWidth > 0 ? "32px" : "0px"
            ),
            e.xp6(2),
            e.Q6J("ngForOf", i.months),
            e.xp6(2),
            e.Q6J("ngForOf", i.months),
            e.xp6(1),
            e.Udp("width", i.numberOfDays * i.common.GANNT_COLUMN_WIDTH + "px"),
            e.xp6(2),
            e.Q6J("ngForOf", i.months),
            e.xp6(1),
            e.Q6J("rxForOf", i.service.projects);
        }
      }
      let si = (() => {
        var o;
        class r {
          getColor(t) {
            return L.Lj[t?.charAt(0).toUpperCase() || "A"];
          }
          constructor(t, n, s, a, d, l, _, u, M) {
            (this.socket = t),
              (this.cdr = n),
              (this.api = s),
              (this.auth = a),
              (this.ngZone = d),
              (this.service = l),
              (this.common = _),
              (this.projectService = u),
              (this.taskViewService = M),
              (this.loading = !1),
              (this.innerLoading = !1),
              (this.Number = Number),
              (this.showTaskModal = !1),
              (this.showMemberModal = !1),
              (this.selectedTaskId = null),
              (this.selectedTeamMember = null),
              (this.selectedProjectId = null),
              (this.initialScroll = 0),
              (this.numberOfDays = 0),
              (this.projectId = null),
              (this.chartStart = null),
              (this.chartEnd = null),
              (this.selectedTask = null),
              (this.session = null),
              (this.months = []),
              (this.projects = []),
              (this.scrollToDate = (h) => {
                this.ngZone.runOutsideAngular(() => {
                  this.fixed_right_column &&
                    (this.fixed_right_column.nativeElement.classList.add(
                      "scroll-animation"
                    ),
                    (this.fixed_right_column.nativeElement.scrollLeft = h),
                    setTimeout(() => {
                      this.fixed_right_column?.nativeElement.classList.remove(
                        "scroll-animation"
                      ),
                        this.scrollListner();
                    }, 125)),
                    this.cdr.markForCheck();
                });
              }),
              (this.session = this.auth.getCurrentSession()),
              this.common.onScrollToDate.pipe((0, C.sL)()).subscribe((h) => {
                this.scrollToDate(h);
              }),
              this.service.onMemberIndicatorChange
                .pipe((0, C.sL)())
                .subscribe((h) => {
                  this.getMemberAllocation(h.projectId, h.teamMemberId);
                }),
              this.service.onMemberProjectIndicatorChange
                .pipe((0, C.sL)())
                .subscribe((h) => {
                  this.getMemberProjectAllocation(
                    h.projectId,
                    h.teamMemberId,
                    h.isProjectRefresh
                  );
                }),
              this.service.onReload.pipe((0, C.sL)()).subscribe(() => {
                this.init(!0);
              });
          }
          ngOnInit() {
            var t = this;
            return (0, f.Z)(function* () {
              yield t.init(!0);
            })();
          }
          init(t) {
            var n = this;
            return (0, f.Z)(function* () {
              yield n.createChartDates(t),
                yield n.getProjects(),
                setTimeout(() => {
                  n.scrollToDate(
                    n.initialScroll - 2 * n.common.GANNT_COLUMN_WIDTH
                  );
                }, 125);
            })();
          }
          createChartDates(t) {
            var n = this;
            return (0, f.Z)(function* () {
              if (!n.session?.team_id) return;
              const s = n.session?.timezone_name
                ? n.session.timezone_name
                : Intl.DateTimeFormat().resolvedOptions().timeZone;
              try {
                n.loading = t;
                const a = yield n.api.getGanttDates(n.session.team_id, s);
                a.done &&
                  ((n.months = a.body.date_data),
                  (n.numberOfDays = a.body.width),
                  (n.initialScroll = a.body.scroll_by),
                  (n.chartStart = a.body.chart_start),
                  (n.chartEnd = a.body.chart_end),
                  (n.common.startDate = a.body.chart_start),
                  (n.common.endDate = a.body.chart_end)),
                  n.cdr.markForCheck();
              } catch (a) {
                (0, b.tu)(a), n.cdr.markForCheck();
              }
            })();
          }
          getProjects() {
            var t = this;
            return (0, f.Z)(function* () {
              if (!t.session?.team_id) return;
              const n = t.session?.timezone_name
                ? t.session.timezone_name
                : Intl.DateTimeFormat().resolvedOptions().timeZone;
              try {
                const s = yield t.api.getProjects(t.session.team_id, n);
                s.done && (t.service.projects = s.body),
                  (t.loading = !1),
                  yield t.scrollListner(),
                  t.cdr.markForCheck();
              } catch (s) {
                (0, b.tu)(s), (t.loading = !1), t.cdr.markForCheck();
              }
            })();
          }
          getMemberAllocation(t, n) {
            var s = this;
            return (0, f.Z)(function* () {
              if (!t || !n) return;
              const a = s.session?.timezone_name
                ? s.session.timezone_name
                : Intl.DateTimeFormat().resolvedOptions().timeZone;
              try {
                const d = yield s.api.getMemberAllocation(t, n, a, !1);
                d.done &&
                  (s.service.updateMemberAllocation(t, n, d.body),
                  s.cdr.markForCheck());
              } catch (d) {
                (0, b.tu)(d);
              }
            })();
          }
          getMemberProjectAllocation(t, n, s) {
            var a = this;
            return (0, f.Z)(function* () {
              if (!t || !n) return;
              const d = a.session?.timezone_name
                ? a.session.timezone_name
                : Intl.DateTimeFormat().resolvedOptions().timeZone;
              try {
                const l = yield a.api.getMemberProjectAllocation(t, n, d, s);
                l.done &&
                  (a.service.updateMemberAllocation(t, n, l.body),
                  a.cdr.markForCheck());
              } catch (l) {
                (0, b.tu)(l);
              }
            })();
          }
          scrollListner() {
            var t = this;
            return (0, f.Z)(function* () {
              t.ngZone.runOutsideAngular(() => {
                t.fixed_left_column?.nativeElement.addEventListener(
                  "scroll",
                  () => {
                    t.fixed_right_column &&
                      (t.fixed_right_column.nativeElement.scrollTop =
                        t.fixed_left_column?.nativeElement.scrollTop);
                  }
                ),
                  t.fixed_right_column?.nativeElement.addEventListener(
                    "scroll",
                    () => {
                      t.fixed_left_column &&
                        (t.fixed_left_column.nativeElement.scrollTop =
                          t.fixed_right_column?.nativeElement.scrollTop);
                    }
                  );
              });
            })();
          }
          toggleProject(t) {
            t && this.service.toggleProject(t.id);
          }
          onShowChange(t) {
            t || ((this.selectedTask = null), this.cdr.markForCheck());
          }
          openMember(t, n) {
            t.pending_invitation ||
              ((this.selectedProjectId = n),
              (this.selectedTeamMember = t),
              (this.showMemberModal = !0),
              this.cdr.markForCheck());
          }
          openTask(t) {
            (this.selectedTask = t),
              (this.showTaskModal = !0),
              this.cdr.markForCheck();
          }
        }
        return (
          ((o = r).ɵfac = function (t) {
            return new (t || o)(
              e.Y36(v.s),
              e.Y36(e.sBO),
              e.Y36(de.V),
              e.Y36(Z.e),
              e.Y36(e.R0b),
              e.Y36($.Z),
              e.Y36(K),
              e.Y36(Ce.m),
              e.Y36(J.f)
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-projects-schedule"]],
            viewQuery: function (t, n) {
              if ((1 & t && (e.Gf(Yn, 5), e.Gf(Nn, 5), e.Gf(Un, 5)), 2 & t)) {
                let s;
                e.iGM((s = e.CRH())) && (n.scroller = s.first),
                  e.iGM((s = e.CRH())) && (n.fixed_right_column = s.first),
                  e.iGM((s = e.CRH())) && (n.fixed_left_column = s.first);
              }
            },
            decls: 6,
            vars: 11,
            consts: [
              [3, "nzActive", "nzLoading"],
              ["class", "mt-3", 4, "ngIf"],
              ["class", "gannt", 4, "ngIf"],
              [
                3,
                "show",
                "projectId",
                "teamMember",
                "onOpenTask",
                "showChange",
              ],
              [
                3,
                "show",
                "selfResetTaskId",
                "projectId",
                "taskId",
                "showChange",
              ],
              [1, "mt-3"],
              [1, "no-data-img-holder", "mx-auto", "mb-3"],
              [
                "src",
                "/assets/images/empty-box.webp",
                "alt",
                "",
                1,
                "img-fluid",
              ],
              [1, "text-center", "mb-3"],
              ["nz-typography", "", 1, "no-data-text", "mb-0"],
              ["nz-typography", ""],
              ["href", "worklenz/projects"],
              [1, "gannt"],
              [1, "d-flex"],
              [1, "fixed-left-column"],
              ["fixed_left_column", ""],
              [1, "top-left-placeholder"],
              [1, "projects"],
              ["class", "task-name-row", 4, "rxFor", "rxForOf"],
              [1, "fixed-right-column"],
              ["fixed_right_column", ""],
              [1, "top"],
              [1, "highlighter"],
              [1, "d-flex", "month-name"],
              ["class", "d-flex", 4, "ngFor", "ngForOf"],
              [1, "d-flex", 2, "min-height", "45px", "max-height", "45px"],
              [1, "middle"],
              [1, "day-cells", "d-flex"],
              ["class", "project-name-row", 4, "rxFor", "rxForOf"],
              [1, "task-name-row"],
              [
                1,
                "single-project",
                "d-flex",
                "align-items-center",
                "ps-3",
                "cursor-pointer",
                "hover-light-blue",
                3,
                "ngClass",
                "click",
              ],
              ["nz-icon", "", "nzTheme", "outline", 1, "me-2", 3, "nzType"],
              [3, "nzColor", "nzText"],
              ["class", "single-project-members", 4, "ngIf"],
              [1, "single-project-members"],
              [4, "ngIf"],
              [
                "class",
                "single-project-member cursor-pointer",
                3,
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "single-project-member", "cursor-pointer", 3, "click"],
              [
                1,
                "project-member-container",
                "ps-4",
                "d-flex",
                "align-items-center",
              ],
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
                "nz-typography",
                "",
                "nzType",
                "danger",
                "class",
                "ms-1",
                4,
                "ngIf",
              ],
              [1, "me-2", 3, "nzSize", "nzText", "nzSrc"],
              ["nz-typography", "", "nzType", "danger", 1, "ms-1"],
              [1, "single-project-member", "cursor-pointer", "ps-3", "pt-2"],
              ["nz-typography", "", "nzType", "secondary"],
              [1, "month-boundary"],
              [
                "class",
                "day-boundary",
                3,
                "min-width",
                "max-width",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "day-boundary"],
              [1, "d-block", "text-center", 3, "ngClass"],
              [1, "d-name"],
              [1, "d-day"],
              [
                "class",
                "inner-day-cell",
                3,
                "ngClass",
                "min-width",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "inner-day-cell", 3, "ngClass"],
              [1, "project-name-row"],
              [1, "single-project", "position-relative", 3, "ngClass"],
              [3, "project"],
              [
                "class",
                "single-project-member position-relative ps-0",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "single-project-member", "position-relative", "ps-0"],
              [1, "project-member-container", "position-relative"],
              [1, "add-member-allocation"],
              [3, "projectId", "teamMemberId"],
              [4, "ngFor", "ngForOf"],
              [3, "allocation", "teamMemberId", "projectId"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "nz-skeleton", 0),
                e.YNc(1, Fn, 10, 0, "div", 1),
                e.YNc(2, oi, 19, 15, "div", 2),
                e.qZA(),
                e.TgZ(3, "worklenz-schedule-project-member-tasks-drawer", 3),
                e.NdJ("onOpenTask", function (a) {
                  return n.openTask(a);
                })("showChange", function (a) {
                  return (n.showMemberModal = a);
                }),
                e.qZA(),
                e.TgZ(4, "worklenz-task-view", 4),
                e.NdJ("showChange", function (a) {
                  return (n.showTaskModal = a);
                })("showChange", function (a) {
                  return n.onShowChange(a);
                }),
                e.qZA(),
                e._UZ(5, "worklenz-context-menu")),
                2 & t &&
                  (e.Q6J("nzActive", !0)("nzLoading", n.loading),
                  e.xp6(1),
                  e.Q6J("ngIf", !n.service.projects.length),
                  e.xp6(1),
                  e.Q6J("ngIf", n.service.projects.length),
                  e.xp6(1),
                  e.Q6J("show", n.showMemberModal)(
                    "projectId",
                    n.selectedProjectId
                  )("teamMember", n.selectedTeamMember),
                  e.xp6(1),
                  e.Q6J("show", n.showTaskModal)("selfResetTaskId", !1)(
                    "projectId",
                    (null == n.selectedTask
                      ? null
                      : n.selectedTask.project_id) || null
                  )(
                    "taskId",
                    (null == n.selectedTask ? null : n.selectedTask.id) || null
                  ));
            },
            dependencies: [
              m.mk,
              m.sg,
              m.O5,
              G.Dz,
              A.ZU,
              Y.Ls,
              O.w,
              re.E,
              le.ng,
              ke._,
              B.x7,
              At,
              jt,
              Dt,
              Nt,
              Dn,
              ae.I,
            ],
            styles: [
              '.gannt[_ngcontent-%COMP%]{min-width:97vw;max-width:97vw;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;border-radius:4px;overflow:hidden;border-right:1px solid #f0f0f0}.top[_ngcontent-%COMP%], .top-left-placeholder[_ngcontent-%COMP%]{max-height:70px;min-height:70px;position:sticky;top:0;z-index:1;background:white}.top-left-placeholder[_ngcontent-%COMP%]{width:100%;right:0;box-shadow:0 1px #f0f0f0;background:#fafafa}.fixed-left-column[_ngcontent-%COMP%], .fixed-right-column[_ngcontent-%COMP%]{overflow-y:auto;min-height:calc(100vh - 200px);max-height:calc(100vh - 200px);will-change:transform;transition:scroll-behavior .125s ease}.fixed-left-column[_ngcontent-%COMP%]{min-width:400px;max-width:400px;overflow-x:scroll;box-shadow:10px 0 8px -8px #00000026;border-left:1px solid #f0f0f0;z-index:9}.scroll-animation[_ngcontent-%COMP%]{scroll-behavior:smooth}.fixed-right-column[_ngcontent-%COMP%]{position:relative;overflow-x:scroll;box-shadow:1px 0 #f0f0f0}.h-default[_ngcontent-%COMP%]{min-height:42px;max-height:42px}.day-boundary[_ngcontent-%COMP%]{position:relative;box-shadow:-1px 1px #f0f0f0}.month-boundary[_ngcontent-%COMP%]{box-shadow:-1px 0 #f0f0f0;padding-left:14px;background:#e6f7ff}.active-hover-bg[_ngcontent-%COMP%]{cursor:pointer}.weekend[_ngcontent-%COMP%]{background:linear-gradient(-45deg,rgba(230,230,230,.5) 12.5%,transparent 12.5%,transparent 50%,rgba(230,230,230,.5) 50%,rgba(230,230,230,.5) 62.5%,transparent 62.5%,transparent) 0% 0%/5px 5px}.middle[_ngcontent-%COMP%]{position:relative}.day-cells[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;height:100%;z-index:-1}.inner-day-cell[_ngcontent-%COMP%]{box-shadow:-1px 1px #f0f0f0;height:100%}.bar-top[_ngcontent-%COMP%]{padding-top:11px}.ellipsis[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.today[_ngcontent-%COMP%]{position:relative}.today[_ngcontent-%COMP%]:after{position:absolute;content:"";left:0;top:0;bottom:0;width:2px;z-index:-1;background:rgba(24,143,249,.6509803922)}.today-bg[_ngcontent-%COMP%]{background:rgba(24,143,249,.6509803922)}.today-bg[_ngcontent-%COMP%]:after{display:none}.today-bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#fff}.d-name[_ngcontent-%COMP%]{font-size:13px}.d-day[_ngcontent-%COMP%]{line-height:25px}.month-name[_ngcontent-%COMP%]{min-height:25px;max-height:25px}.no-data-img-holder[_ngcontent-%COMP%]{max-width:100px}.single-group[_ngcontent-%COMP%]{min-height:36px;max-height:36px;border-bottom:1px solid #f0f0f0;padding-left:7px;color:hwb(0 0% 100%/.85);font-weight:500}.placeholder-drag[_ngcontent-%COMP%]{background:rgb(217,227,238);border:1px solid rgb(173,181,189);position:absolute;min-height:28px;max-height:28px;border-radius:4px;z-index:9;cursor:move}.highlighter[_ngcontent-%COMP%]{position:absolute;top:25px;bottom:0;z-index:-1;background:rgb(217,227,238);transition:.15s all;will-change:transform}.no-tasks[_ngcontent-%COMP%]{width:100%;height:42px;background:#fafafa;display:flex;align-items:center;padding-left:12px}.single-project[_ngcontent-%COMP%], .single-project-member[_ngcontent-%COMP%], .day-boundary-inner[_ngcontent-%COMP%], .single-member-task[_ngcontent-%COMP%], .h-default[_ngcontent-%COMP%]{min-height:50px}.single-member-task[_ngcontent-%COMP%]{box-shadow:1px 1px #f0f0f0}.single-project[_ngcontent-%COMP%], .single-project-member[_ngcontent-%COMP%]{border-bottom:1px solid #f0f0f0;transition:.25s all}.single-project-members[_ngcontent-%COMP%]{border-bottom:1px solid rgb(213,213,213)}.single-project-member[_ngcontent-%COMP%]{min-height:45px;background:rgba(245,245,245,.3215686275)}.single-project-member[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:rgba(241,241,241,.43)}.project-member-container[_ngcontent-%COMP%]{min-height:45px;transition:.2s all}.project-unassigned-task-container[_ngcontent-%COMP%], .project-member-task-container[_ngcontent-%COMP%]{min-height:45px;max-height:45px;border-top:1px solid #f0f0f0}.add-parent-task-section[_ngcontent-%COMP%]{min-height:45px;max-height:45px;border-top:1px solid #f0f0f0;background:rgba(246,246,246,.3098039216)}.title-unassigned[_ngcontent-%COMP%]{min-height:45px;max-height:45px;background:rgba(255,206,206,.16)}.project-active[_ngcontent-%COMP%]{color:#1890ff;background:rgba(230,247,255,.6588235294)}.add-member-allocation[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:0}',
            ],
            changeDetection: 0,
          })),
          r
        );
      })();
      function ri(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "div")(1, "button", 3),
            e.NdJ("click", function () {
              e.CHM(i);
              const n = e.oxw();
              return e.KtG(n.scrollToday());
            }),
            e._uU(2, "Hoy"),
            e.qZA(),
            e._UZ(3, "nz-divider", 4),
            e.qZA();
        }
      }
      function ai(o, r) {
        if ((1 & o && e._UZ(0, "nz-option", 7), 2 & o)) {
          const i = r.$implicit;
          e.Q6J("nzValue", i.value)("nzLabel", i.label);
        }
      }
      function ci(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "div")(1, "nz-select", 5),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(i);
              const s = e.oxw();
              return e.KtG((s.dateModeModel = n));
            })("ngModelChange", function (n) {
              e.CHM(i);
              const s = e.oxw();
              return e.KtG(s.dateModeChange(n));
            }),
            e.YNc(2, ai, 1, 2, "nz-option", 6),
            e.qZA()();
        }
        if (2 & o) {
          const i = e.oxw();
          e.xp6(1),
            e.Q6J("ngModel", i.dateModeModel),
            e.xp6(1),
            e.Q6J("ngForOf", i.dateModes);
        }
      }
      function di(o, r) {
        if (1 & o) {
          const i = e.EpF();
          e.TgZ(0, "div")(1, "nz-date-picker", 8),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(i);
              const s = e.oxw();
              return e.KtG((s.dateRange = n));
            })("ngModelChange", function (n) {
              e.CHM(i);
              const s = e.oxw();
              return e.KtG(s.onChange(n));
            }),
            e.qZA()();
        }
        if (2 & o) {
          const i = e.oxw();
          e.xp6(1),
            e.Q6J("nzMode", 0 === i.dateModeModel ? "week" : "month")(
              "ngModel",
              i.dateRange
            )(
              "nzFormat",
              0 === i.dateModeModel ? "YYYY - 'Week' ww" : "YYYY - MMM"
            )("nzDisabledDate", i.disabledDate);
        }
      }
      var q = (function (o) {
        return (
          (o[(o.Projects = 0)] = "Projects"), (o[(o.Teams = 1)] = "Teams"), o
        );
      })(q || {});
      const li = [
        {
          path: "",
          component: (() => {
            var o;
            class r {
              constructor(t) {
                (this.service = t),
                  (this.options = [q[0], q[1]]),
                  (this.selectedChartType = q.Projects),
                  (this.dateRange = null),
                  (this.dateModes = [
                    { value: 0, label: "Semana" },
                    { value: 1, label: "Mes" },
                  ]),
                  (this.dateModeModel = 0),
                  (this.selectedWeek = {
                    start: (0, W.Z)(new Date()),
                    end: oe(new Date()),
                  }),
                  (this.resourceGanttTypes = q),
                  (this.disabledDate = (n) =>
                    !(!this.service.startDate || !this.service.endDate) &&
                    (n < new Date(this.service.startDate) ||
                      n > new Date(this.service.endDate))),
                  this.trackVisit();
              }
              ngOnInit() {}
              dateModeChange(t) {
                this.dateModeModel = t;
              }
              handleIndexChange(t) {
                (this.selectedChartType = t), this.trackVisit();
              }
              onChange(t) {
                t &&
                  (0 === this.dateModeModel &&
                    this.service.scrollToDay(new Date((0, W.Z)(t))),
                  1 === this.dateModeModel &&
                    this.service.scrollToDay(new Date((0, Pe.Z)(t))));
              }
              scrollToday() {
                this.service.scrollToDay(new Date());
              }
              trackVisit() {
                Q.s.track(R.RN, {
                  filter: 0 == this.selectedChartType ? "Projects" : "Teams",
                });
              }
            }
            return (
              ((o = r).ɵfac = function (t) {
                return new (t || o)(e.Y36(K));
              }),
              (o.ɵcmp = e.Xpm({
                type: o,
                selectors: [["worklenz-schedule-view"]],
                viewQuery: function (t, n) {
                  if ((1 & t && (e.Gf(ot, 5), e.Gf(St, 5)), 2 & t)) {
                    let s;
                    e.iGM((s = e.CRH())) && (n.projectsSchedule = s.first),
                      e.iGM((s = e.CRH())) && (n.teamSchedule = s.first);
                  }
                },
                decls: 8,
                vars: 0,
                consts: [
                  [
                    1,
                    "py-4",
                    "container-fluid",
                    "d-flex",
                    "justify-content-between",
                  ],
                  [1, "right-column", "ms-auto"],
                  [4, "nzSpaceItem"],
                  ["nz-button", "", "nzType", "default", 3, "click"],
                  ["nzType", "vertical", 1, "me-0"],
                  [3, "ngModel", "ngModelChange"],
                  [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"],
                  [3, "nzValue", "nzLabel"],
                  [
                    3,
                    "nzMode",
                    "ngModel",
                    "nzFormat",
                    "nzDisabledDate",
                    "ngModelChange",
                  ],
                ],
                template: function (t, n) {
                  1 & t &&
                    (e.TgZ(0, "div")(1, "div", 0)(2, "div", 1)(3, "nz-space"),
                    e.YNc(4, ri, 4, 0, "div", 2),
                    e.YNc(5, ci, 3, 2, "div", 2),
                    e.YNc(6, di, 2, 4, "div", 2),
                    e.qZA()()(),
                    e._UZ(7, "worklenz-projects-schedule"),
                    e.qZA());
                },
                dependencies: [
                  m.sg,
                  X.uw,
                  g.JJ,
                  g.On,
                  ee.ix,
                  O.w,
                  ce.dQ,
                  fe.g,
                  H.NU,
                  H.$1,
                  P.Ip,
                  P.Vq,
                  si,
                ],
                styles: ["nz-date-picker[_ngcontent-%COMP%]{min-width:180px}"],
              })),
              r
            );
          })(),
        },
      ];
      let _i = (() => {
        var o;
        class r {}
        return (
          ((o = r).ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [ge.Bz.forChild(li), ge.Bz] })),
          r
        );
      })();
      var pi = c(60804),
        hi = c(57417),
        gi = c(13080),
        mi = c(77920),
        ui = c(22114),
        fi = c(26501),
        Ci = c(29666),
        ki = c(79382);
      let xi = (() => {
        var o;
        class r {}
        return (
          ((o = r).ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({
            imports: [
              m.ez,
              _i,
              pi.Xo,
              se.j,
              G.Rt,
              hi.$6,
              A.ZJ,
              gi.ym,
              mi.Vk,
              Y.PV,
              X.Hb,
              g.u5,
              ee.sL,
              ui.KW,
              te.cg,
              D.BL,
              S.Ph,
              fe.S,
              fi.z,
              le.H0,
              Ci.V,
              B.mS,
              g.UX,
              pe.o7,
              H.zf,
              P.LV,
              j.b1,
              ki.we,
              _e.Wr,
              Te.X,
              Me.o,
            ],
          })),
          r
        );
      })();
    },
  },
]);
