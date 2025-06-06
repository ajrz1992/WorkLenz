"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [453],
  {
    99028: (q, y, c) => {
      c.r(y), c.d(y, { MyDashboardModule: () => mn });
      var u = c(96814),
        C = c(35420),
        r = c(13490),
        z = c(15861),
        h = c(69649),
        e = c(65879),
        O = c(31215),
        f = c(26857),
        G = c(69862);
      let F = (() => {
        var o;
        class i extends f.P {
          constructor(t) {
            super(), (this.http = t), (this.root = `${this.API_BASE_URL}/home`);
          }
          createPersonalTask(t) {
            return this._post(this.http, `${this.root}/personal-task`, t);
          }
          getMyTasks(t) {
            const n = t.tasks_group_by,
              s = t.current_tab,
              l = t.is_calendar_view,
              T = t.selected_date?.toISOString().split("T")[0],
              v = `${this.root}/tasks${(0, h.UK)({
                group_by: n,
                current_tab: s,
                is_calendar_view: l,
                selected_date: T,
                time_zone: t.time_zone,
              })}`;
            return this._get(this.http, v);
          }
          getPersonalTasks() {
            return this._get(this.http, `${this.root}/personal-tasks`);
          }
          getProjects(t) {
            const n = `${this.root}/projects${(0, h.UK)({ view: t })}`;
            return this._get(this.http, n);
          }
          getProjectsByTeam() {
            return this._get(this.http, `${this.root}/team-projects`);
          }
          taskMarkAsDone(t) {
            return this._put(this.http, `${this.root}/update-personal-task`, {
              id: t,
            });
          }
        }
        return (
          ((o = i).ɵfac = function (t) {
            return new (t || o)(e.LFG(G.eN));
          }),
          (o.ɵprov = e.Yz7({ token: o, factory: o.ɵfac, providedIn: "root" })),
          i
        );
      })();
      var k = c(60095),
        x = c(92574),
        P = c(42840),
        j = c(70855),
        N = c(41958),
        A = c(62595),
        S = c(96109),
        M = c(13740),
        b = c(8083),
        Q = c(33640),
        B = c(22114),
        I = c(24139),
        L = c(98421);
      function X(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "button", 11),
            e.NdJ("click", function () {
              e.CHM(a);
              const n = e.oxw();
              return e.KtG(n.getProjects());
            }),
            e._UZ(1, "span", 12),
            e.qZA();
        }
        if (2 & o) {
          const a = e.oxw();
          e.xp6(1), e.Q6J("nzSpin", a.loading);
        }
      }
      function ie(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "nz-segmented", 13),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG((s.activeFilter = n));
            })("ngModelChange", function (n) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG(s.handleViewChange(n));
            }),
            e.qZA();
        }
        if (2 & o) {
          const a = e.oxw();
          e.Q6J("nzOptions", a.options)("ngModel", a.activeFilter);
        }
      }
      function re(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "nz-rate", 19),
            e.NdJ("click", function () {
              e.CHM(a);
              const n = e.oxw(2).$implicit,
                s = e.oxw();
              return e.KtG(s.toggleFavorite(n.id));
            }),
            e.qZA();
        }
        if (2 & o) {
          const a = e.oxw(2).$implicit;
          e.Q6J(
            "nzTooltipTitle",
            a.favorite ? "Remover de Favoritos" : "Añadir a Favoritos"
          )("nzCount", 1)("ngModel", a.favorite ? 1 : 0);
        }
      }
      function ee(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "span", 20),
            e.NdJ("click", function () {
              e.CHM(a);
              const n = e.oxw(2).$implicit,
                s = e.oxw();
              return e.KtG(s.selectProject(n.id));
            }),
            e._UZ(1, "nz-badge", 21),
            e.TgZ(2, "p", 22),
            e._uU(3),
            e.qZA()();
        }
        if (2 & o) {
          const a = e.oxw(2).$implicit;
          e.xp6(1), e.Q6J("nzColor", a.color_code), e.xp6(2), e.Oqu(a.name);
        }
      }
      function V(o, i) {
        1 & o &&
          (e.TgZ(0, "td", 16)(1, "div")(2, "nz-space"),
          e.YNc(3, re, 1, 3, "nz-rate", 17),
          e.YNc(4, ee, 4, 2, "span", 18),
          e.qZA()()());
      }
      function te(o, i) {
        if (
          (1 & o && (e.TgZ(0, "tr", 14), e.YNc(1, V, 5, 0, "td", 15), e.qZA()),
          2 & o)
        ) {
          const a = i.$implicit;
          e.xp6(1), e.Q6J("ngIf", a.id);
        }
      }
      function ce(o, i) {
        1 & o &&
          (e.ynx(0),
          e.TgZ(1, "div", 23),
          e._UZ(2, "img", 24),
          e.qZA(),
          e.TgZ(3, "div", 25)(4, "span", 26),
          e._uU(5, "You have not assigned to any project yet."),
          e.qZA()(),
          e.BQk());
      }
      let ne = (() => {
        var o;
        class i {
          get activeFilter() {
            return +(localStorage.getItem(this.myProjectsActiveFilterKey) || 0);
          }
          set activeFilter(t) {
            localStorage.setItem(this.myProjectsActiveFilterKey, t.toString());
          }
          constructor(t, n, s, l) {
            (this.api = t),
              (this.cdr = n),
              (this.router = s),
              (this.homePageApi = l),
              (this.projects = []),
              (this.loading = !0),
              (this.options = ["Recientes", "Favoritos"]),
              (this.myProjectsActiveFilterKey =
                "my-dashboard-active-projects-filter");
          }
          get filterIndex() {
            return +(
              localStorage.getItem("worklenz.my_projects.filter_index") || 0
            );
          }
          ngOnInit() {
            this.getProjects();
          }
          getProjects() {
            var t = this;
            return (0, z.Z)(function* () {
              try {
                t.loading = !0;
                const n = yield t.homePageApi.getProjects(t.activeFilter);
                n && (t.projects = n.body), (t.loading = !1);
              } catch (n) {
                (0, h.tu)(n);
              }
              t.cdr.markForCheck();
            })();
          }
          handleViewChange(t) {
            (this.activeFilter = t), this.getProjects();
          }
          toggleFavorite(t) {
            var n = this;
            return (0, z.Z)(function* () {
              if (t)
                try {
                  (yield n.api.toggleFavorite(t)).done &&
                    (yield n.getProjects());
                } catch (s) {
                  (0, h.tu)(s);
                }
            })();
          }
          trackBy(t, n) {
            return n.id;
          }
          selectProject(t) {
            t && this.router.navigate([`/worklenz/projects/${t}`]);
          }
        }
        return (
          ((o = i).ɵfac = function (t) {
            return new (t || o)(
              e.Y36(O.U),
              e.Y36(e.sBO),
              e.Y36(C.F0),
              e.Y36(F)
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-my-projects"]],
            decls: 14,
            vars: 6,
            consts: [
              [1, "card-top"],
              [1, "d-flex"],
              [
                "nz-typography",
                "",
                1,
                "mb-0",
                "card-title",
                2,
                "margin-top",
                "3px",
              ],
              [1, "ms-auto"],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzShape",
                "circle",
                "nzTooltipTitle",
                "Refresh tasks",
                "nzType",
                "default",
                3,
                "click",
                4,
                "nzSpaceItem",
              ],
              [3, "nzOptions", "ngModel", "ngModelChange", 4, "nzSpaceItem"],
              [1, "card-data"],
              [3, "nzActive", "nzLoading"],
              [1, "custom-table", "homepage-table", "mt-2"],
              ["class", "actions-row", 4, "ngFor", "ngForOf", "ngForTrackBy"],
              [4, "ngIf"],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzShape",
                "circle",
                "nzTooltipTitle",
                "Refresh tasks",
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
              [3, "nzOptions", "ngModel", "ngModelChange"],
              [1, "actions-row"],
              ["class", "projects-td", 4, "ngIf"],
              [1, "projects-td"],
              [
                "nz-tooltip",
                "",
                "class",
                "me-2",
                3,
                "nzTooltipTitle",
                "nzCount",
                "ngModel",
                "click",
                4,
                "nzSpaceItem",
              ],
              [
                "class",
                "d-flex align-items-center p-name",
                "style",
                "margin-top: 4px",
                3,
                "click",
                4,
                "nzSpaceItem",
              ],
              [
                "nz-tooltip",
                "",
                1,
                "me-2",
                3,
                "nzTooltipTitle",
                "nzCount",
                "ngModel",
                "click",
              ],
              [
                1,
                "d-flex",
                "align-items-center",
                "p-name",
                2,
                "margin-top",
                "4px",
                3,
                "click",
              ],
              [1, "project-dot", 3, "nzColor"],
              ["nz-typography", "", 1, "mb-0", "font-400"],
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
              ["nz-typography", "", 1, "no-data-text"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div")(3, "p", 2),
                e._uU(4),
                e.qZA()(),
                e.TgZ(5, "div", 3)(6, "nz-space"),
                e.YNc(7, X, 2, 1, "button", 4),
                e.YNc(8, ie, 1, 2, "nz-segmented", 5),
                e.qZA()()()(),
                e.TgZ(9, "div", 6)(10, "nz-skeleton", 7)(11, "nz-table", 8),
                e.YNc(12, te, 2, 1, "tr", 9),
                e.qZA(),
                e.YNc(13, ce, 6, 0, "ng-container", 10),
                e.qZA()()),
                2 & t &&
                  (e.xp6(4),
                  e.hij("Expedientes (", n.projects.length, ")"),
                  e.xp6(6),
                  e.Q6J("nzActive", !0)("nzLoading", n.loading),
                  e.xp6(2),
                  e.Q6J("ngForOf", n.projects)("ngForTrackBy", n.trackBy),
                  e.xp6(1),
                  e.Q6J("ngIf", 0 === n.projects.length));
            },
            dependencies: [
              u.sg,
              u.O5,
              k.JJ,
              k.On,
              x.NU,
              x.$1,
              P.ix,
              j.w,
              N.dQ,
              A.Ls,
              S.SY,
              M.N8,
              M.Uo,
              M.$Z,
              b.ZU,
              Q.x7,
              B.wY,
              I.ng,
              L.sn,
            ],
            styles: [
              ".ant-card-bordered[_ngcontent-%COMP%]{transition:.3s all;border:1px solid #e5e5e5}.ant-card-bordered[_ngcontent-%COMP%]:hover{border:1px solid #c5c5c5}tr[_ngcontent-%COMP%]{border-bottom:1px solid #F0F0F0}.ant-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border-collapse:collapse!important}.ant-table-cell[_ngcontent-%COMP%]{background:#fff!important}.text-grey[_ngcontent-%COMP%]{color:#757b81;font-size:14px;line-height:25px;margin-bottom:0!important}.no-data-img-holder[_ngcontent-%COMP%]{width:64px;margin-top:24px}.project-card[_ngcontent-%COMP%]{width:20%;cursor:pointer}.font-400[_ngcontent-%COMP%]{font-weight:400}nz-rate[_ngcontent-%COMP%]   nz-icon[_ngcontent-%COMP%]{font-size:16px}.card-data[_ngcontent-%COMP%]{padding:24px}.projects-td[_ngcontent-%COMP%]{padding:4px 11px;height:44px}.card-top[_ngcontent-%COMP%]{padding:14px 24px;border-bottom:1px solid #f0f0f0}.card-title[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.p-name[_ngcontent-%COMP%]{cursor:pointer}.p-name[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:#1890ff}.homepage-table[_ngcontent-%COMP%]{overflow-y:auto;max-height:420px}th[_ngcontent-%COMP%]{font-weight:500}.card-data[_ngcontent-%COMP%]{padding:12px 24px}",
            ],
            changeDetection: 0,
          })),
          i
        );
      })();
      var R = c(16406),
        he = c(90586),
        J = c(32333),
        d = c(55416),
        p = c(10095),
        g = c(73460),
        _ = c(62787),
        m = c(71993),
        E = c(63019),
        Z = c(21406),
        le = c(18223),
        de = c(74764),
        Y = c(78645);
      let U = (() => {
        var o;
        class i {
          constructor() {
            (this.onGetTasksSbj$ = new Y.x()),
              (this.onGetTasksWithoutLoadingSbj$ = new Y.x()),
              (this.onNewTaskReceiveSbj$ = new Y.x()),
              (this.onNewPersonalTaskReceiveSbj$ = new Y.x()),
              (this.onRemoveTaskSbj$ = new Y.x()),
              (this.tasksModel = {
                tasks: [],
                total: 0,
                today: 0,
                upcoming: 0,
                overdue: 0,
                no_due_date: 0,
              }),
              (this.personal_tasks = []),
              (this.tasksViewConfig = null),
              (this.loadingTasks = !1),
              (this.loadingPersonalTasks = !1);
          }
          get onGetTasks() {
            return this.onGetTasksSbj$.asObservable();
          }
          get onGetTasksWithoutLoading() {
            return this.onGetTasksSbj$.asObservable();
          }
          get newTaskReceived() {
            return this.onNewTaskReceiveSbj$.asObservable();
          }
          get newPersonalTaskReceived() {
            return this.onNewPersonalTaskReceiveSbj$.asObservable();
          }
          get removeTaskFromList() {
            return this.onRemoveTaskSbj$.asObservable();
          }
          emitGetTasks(t) {
            this.onGetTasksSbj$.next(t);
          }
          emitGetTasksWithoutLoading(t) {
            this.onGetTasksSbj$.next(t);
          }
          emitNewTaskReceived(t) {
            this.onNewTaskReceiveSbj$.next(t);
          }
          emitPersonalTaskReceived(t) {
            this.onNewPersonalTaskReceiveSbj$.next(t);
          }
          emitRemoveTaskFromList(t) {
            this.onRemoveTaskSbj$.next(t);
          }
        }
        return (
          ((o = i).ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵprov = e.Yz7({ token: o, factory: o.ɵfac, providedIn: "root" })),
          i
        );
      })();
      var ve = c(34071),
        xe = c(86408),
        Me = c(27782),
        w = c(94489),
        oe = c(975),
        ue = c(44889);
      function we(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "span", 6)(1, "small", 7),
            e._UZ(2, "span", 8),
            e.qZA()()),
          2 & o)
        ) {
          e.oxw(2);
          const a = e.MAs(4);
          e.Q6J("nzTooltipTitle", a);
        }
      }
      function ye(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "span", 4),
            e.YNc(1, we, 3, 1, "span", 5),
            e.TgZ(2, "span", 6),
            e._uU(3),
            e.ALo(4, "ellipsis"),
            e.qZA()()),
          2 & o)
        ) {
          const a = e.oxw();
          e.xp6(1),
            e.Q6J("ngIf", a.task.is_sub_task),
            e.xp6(1),
            e.Q6J("nzTooltipTitle", a.task.name),
            e.xp6(1),
            e.hij(" ", e.xi3(4, 3, a.task.name, 50), " ");
        }
      }
      function Pe(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "span", 9), e._uU(1), e.ALo(2, "ellipsis"), e.qZA()),
          2 & o)
        ) {
          const a = e.oxw();
          e.Q6J("nzTooltipTitle", a.task.name),
            e.xp6(1),
            e.Oqu(e.xi3(2, 2, a.task.name, 100));
        }
      }
      function be(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "button", 10),
            e.NdJ("click", function () {
              e.CHM(a);
              const n = e.oxw();
              return e.KtG(n.openTask(n.task));
            }),
            e._UZ(1, "span", 11),
            e._uU(2, " Open\n"),
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
      function De(o, i) {
        if ((1 & o && (e.TgZ(0, "p", 4), e._uU(1), e.qZA()), 2 & o)) {
          const a = e.oxw();
          e.xp6(1),
            e.hij(
              "Sub-task of ",
              null == a.task ? null : a.task.parent_task_name,
              ""
            );
        }
      }
      let me = (() => {
        var o;
        class i {
          constructor(t, n, s) {
            (this.cdr = t),
              (this.socket = n),
              (this.listService = s),
              (this.task = null),
              (this.onOpenTask = new e.vpe()),
              (this.handleNameChangeResponse = (l) => {
                !l ||
                  !this.task?.id ||
                  (this.task.id == l.id &&
                    ((this.task.name = l.name), this.cdr.detectChanges()));
              });
          }
          ngOnInit() {
            this.socket.on(
              w.C.TASK_NAME_CHANGE.toString(),
              this.handleNameChangeResponse
            );
          }
          ngOnDestroy() {
            this.socket.removeListener(
              w.C.TASK_NAME_CHANGE.toString(),
              this.handleNameChangeResponse
            );
          }
          openTask(t) {
            this.onOpenTask?.emit(t), xe.s.track(Me.r5);
          }
        }
        return (
          ((o = i).ɵfac = function (t) {
            return new (t || o)(e.Y36(e.sBO), e.Y36(oe.s), e.Y36(d.b));
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-task-name"]],
            inputs: { task: "task" },
            outputs: { onOpenTask: "onOpenTask" },
            decls: 5,
            vars: 3,
            consts: [
              ["class", "mb-0", 4, "ngIf"],
              [
                "class",
                "mb-0",
                "nz-tooltip",
                "",
                3,
                "nzTooltipTitle",
                4,
                "ngIf",
              ],
              [
                "nz-tooltip",
                "",
                "nz-button",
                "",
                "class",
                "plus-icon",
                3,
                "nzTooltipTitle",
                "nzTooltipPlacement",
                "nzTooltipMouseEnterDelay",
                "nzType",
                "click",
                4,
                "ngIf",
              ],
              ["subTasksTitle", ""],
              [1, "mb-0"],
              ["nz-tooltip", "", 3, "nzTooltipTitle", 4, "ngIf"],
              ["nz-tooltip", "", 3, "nzTooltipTitle"],
              ["nz-typography", "", "nzType", "secondary"],
              ["nz-icon", "", "nzType", "double-right", "nzTheme", "outline"],
              ["nz-tooltip", "", 1, "mb-0", 3, "nzTooltipTitle"],
              [
                "nz-tooltip",
                "",
                "nz-button",
                "",
                1,
                "plus-icon",
                3,
                "nzTooltipTitle",
                "nzTooltipPlacement",
                "nzTooltipMouseEnterDelay",
                "nzType",
                "click",
              ],
              ["nz-icon", "", 3, "nzType", "nzTheme"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.YNc(0, ye, 5, 6, "span", 0),
                e.YNc(1, Pe, 3, 5, "span", 1),
                e.YNc(2, be, 3, 6, "button", 2),
                e.YNc(3, De, 2, 1, "ng-template", null, 3, e.W1O)),
                2 & t &&
                  (e.Q6J(
                    "ngIf",
                    n.task && (null == n.task ? null : n.task.is_task)
                  ),
                  e.xp6(1),
                  e.Q6J("ngIf", n.task && !(null != n.task && n.task.is_task)),
                  e.xp6(1),
                  e.Q6J("ngIf", n.task && n.task.is_task));
            },
            dependencies: [u.O5, P.ix, j.w, N.dQ, A.Ls, S.SY, b.ZU, ue.p],
            styles: [
              "button[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;right:0;margin-top:auto;margin-bottom:auto;background:#edebf0!important;border:1px solid #ededed}p[_ngcontent-%COMP%]{max-width:max-content}",
            ],
            changeDetection: 0,
          })),
          i
        );
      })();
      function Oe(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 1)(1, "div"),
            e._UZ(2, "nz-badge", 2),
            e.qZA(),
            e.TgZ(3, "div", 3)(4, "p", 4),
            e._uU(5),
            e.ALo(6, "ellipsis"),
            e.qZA()()()),
          2 & o)
        ) {
          const a = e.oxw();
          e.Q6J("nzTooltipTitle", a.task.project_name),
            e.xp6(2),
            e.Q6J("nzColor", a.task.project_color),
            e.xp6(3),
            e.Oqu(e.xi3(6, 3, a.task.project_name, 20));
        }
      }
      let Ae = (() => {
        var o;
        class i {
          constructor() {
            this.task = null;
          }
        }
        return (
          ((o = i).ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-task-project"]],
            inputs: { task: "task" },
            decls: 1,
            vars: 1,
            consts: [
              [
                "class",
                "d-flex align-items-center",
                "nz-tooltip",
                "",
                3,
                "nzTooltipTitle",
                4,
                "ngIf",
              ],
              [
                "nz-tooltip",
                "",
                1,
                "d-flex",
                "align-items-center",
                3,
                "nzTooltipTitle",
              ],
              [2, "margin-top", "-2px", 3, "nzColor"],
              [1, "p-name"],
              [1, "mb-0"],
            ],
            template: function (t, n) {
              1 & t && e.YNc(0, Oe, 7, 6, "div", 0),
                2 & t && e.Q6J("ngIf", n.task);
            },
            dependencies: [u.O5, S.SY, Q.x7, ue.p],
            styles: ["p[_ngcontent-%COMP%]{color:#000000a6;font-size:13px}"],
            changeDetection: 0,
          })),
          i
        );
      })();
      var Se = c(16676),
        K = c.n(Se),
        $ = c(52682),
        Ze = c(76643),
        Fe = c(47053);
      function je(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "div", 1, 2)(2, "span", 3),
            e._uU(3),
            e.ALo(4, "dateFormatter"),
            e.qZA(),
            e.TgZ(5, "nz-date-picker", 4),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG((s.task.end_date = n));
            })("ngModelChange", function (n) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG(s.handleEndDateChange(n, s.task));
            })("nzOnOpenChange", function (n) {
              e.CHM(a);
              const s = e.MAs(1),
                l = e.oxw();
              return e.KtG(l.toggleHighlightCls(n, s));
            }),
            e.ALo(6, "validateMinDate"),
            e.ALo(7, "validateMinDate"),
            e.qZA()();
        }
        if (2 & o) {
          const a = e.oxw();
          e.xp6(2),
            e.ekj("past-date", a.checkForPastDate(a.task.end_date))(
              "soon-date",
              a.checkForSoonDate(a.task.end_date)
            ),
            e.xp6(1),
            e.Oqu(e.lcZ(4, 11, a.task.end_date)),
            e.xp6(2),
            e.Q6J("ngModel", a.task.end_date)("nzFormat", "MMM dd,yyyy")(
              "nzSuffixIcon",
              ""
            )("nzPlaceHolder", "Set a due date")(
              "nzDisabledDate",
              e.lcZ(6, 13, a.task.start_date)
            )("nzDisabledDate", e.lcZ(7, 15, a.task.start_date));
        }
      }
      let Ne = (() => {
        var o;
        class i {
          constructor(t, n, s, l, T) {
            (this.socket = t),
              (this.cdr = n),
              (this.ngZone = s),
              (this.homePageService = l),
              (this.auth = T),
              (this.task = null),
              (this.handleResponse = (H) => {
                H.id === this.task?.id &&
                  ((this.task.end_date = H.end_date),
                  this.homePageService.tasksViewConfig &&
                    this.homePageService.emitGetTasksWithoutLoading(
                      this.homePageService.tasksViewConfig
                    ),
                  this.cdr.markForCheck());
              });
          }
          ngOnInit() {
            this.socket.on(
              w.C.TASK_END_DATE_CHANGE.toString(),
              this.handleResponse
            );
          }
          ngOnDestroy() {
            this.socket.removeListener(
              w.C.TASK_END_DATE_CHANGE.toString(),
              this.handleResponse
            );
          }
          handleEndDateChange(t, n) {
            this.socket.emit(
              w.C.TASK_END_DATE_CHANGE.toString(),
              JSON.stringify({
                task_id: n.id,
                end_date: (0, h.A6)(t) || null,
                parent_task: n.parent_task_id,
                time_zone: this.auth.getCurrentSession()?.timezone_name
                  ? this.auth.getCurrentSession()?.timezone_name
                  : Intl.DateTimeFormat().resolvedOptions().timeZone,
              })
            );
          }
          toggleHighlightCls(t, n) {
            this.ngZone.runOutsideAngular(() => {});
          }
          checkForPastDate(t) {
            return K()(t).format("YYYY-MM-DD") < K()().format("YYYY-MM-DD");
          }
          checkForSoonDate(t) {
            const n = K()(t).format("YYYY-MM-DD"),
              s = K()().add(1, "day").format("YYYY-MM-DD");
            return n === K()().format("YYYY-MM-DD") || n === s;
          }
          changeTaskTab() {
            if (!this.task?.id) return;
            const t = this.homePageService.tasksModel.tasks.findIndex(
              (n) => n.id === this.task?.id
            );
            if ("All" !== this.homePageService.tasksViewConfig?.current_tab) {
              if (!this.task.end_date) {
                switch (this.homePageService.tasksViewConfig?.current_tab) {
                  case "Today":
                  case "Upcoming":
                  case "Overdue":
                    this.homePageService.tasksModel.tasks.splice(t, 1);
                }
                return;
              }
              if (this.task.end_date) {
                const n = new Date(this.task.end_date),
                  s = new Date();
                if (
                  (s.setHours(0, 0, 0, 0),
                  n.toDateString() === s.toDateString())
                ) {
                  switch (this.homePageService.tasksViewConfig?.current_tab) {
                    case "Upcoming":
                    case "Overdue":
                    case "NoDueDate":
                      this.homePageService.tasksModel.tasks.splice(t, 1);
                  }
                  return;
                }
                if (n > s)
                  switch (this.homePageService.tasksViewConfig?.current_tab) {
                    case "Today":
                    case "Overdue":
                    case "NoDueDate":
                      this.homePageService.tasksModel.tasks.splice(t, 1);
                  }
                else if (n < s)
                  switch (this.homePageService.tasksViewConfig?.current_tab) {
                    case "Today":
                    case "Upcoming":
                    case "NoDueDate":
                      this.homePageService.tasksModel.tasks.splice(t, 1);
                  }
              }
              this.cdr.markForCheck();
            }
          }
        }
        return (
          ((o = i).ɵfac = function (t) {
            return new (t || o)(
              e.Y36(oe.s),
              e.Y36(e.sBO),
              e.Y36(e.R0b),
              e.Y36(U),
              e.Y36(J.e)
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-task-due-date"]],
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
                "home-date-picker",
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
              1 & t && e.YNc(0, je, 8, 17, "div", 0),
                2 & t && e.Q6J("ngIf", n.task && n.task.is_task);
            },
            dependencies: [u.O5, k.JJ, k.On, b.ZU, $.uw, Ze.l, Fe.v],
            styles: [
              "nz-date-picker[_ngcontent-%COMP%]{max-width:160px;border-color:transparent!important;inset:0}nz-date-picker[_ngcontent-%COMP%]:hover{border-color:#d9d9d9!important}.editable[_ngcontent-%COMP%]{position:relative}.date-text[_ngcontent-%COMP%]{display:flex;align-items:center;padding-left:4px}.past-date[_ngcontent-%COMP%]{color:#ff4d4f}.soon-date[_ngcontent-%COMP%]{color:#52c41a}",
            ],
            changeDetection: 0,
          })),
          i
        );
      })();
      var D = c(9691),
        Ie = c(76271);
      function Je(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "nz-option", 4),
            e.ALo(1, "safeString"),
            e._UZ(2, "nz-badge", 5),
            e.ALo(3, "safeString"),
            e.qZA()),
          2 & o)
        ) {
          const a = i.$implicit;
          e.Q6J("nzValue", a.id)("nzLabel", e.lcZ(1, 4, a.name)),
            e.xp6(2),
            e.Q6J("nzColor", e.lcZ(3, 6, a.color_code))(
              "nzText",
              (null == a ? null : a.name) || null
            );
        }
      }
      function Ye(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "div", 1)(1, "nz-select", 2),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG((s.task.status = n));
            })("ngModelChange", function (n) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG(s.handleStatusChange(n, s.task.id));
            }),
            e.YNc(2, Je, 4, 8, "nz-option", 3),
            e.qZA()();
        }
        if (2 & o) {
          const a = e.oxw();
          e.xp6(1),
            e.Udp("background-color", a.task.status_color + "69"),
            e.Q6J("ngModel", a.task.status)("nzLoading", a.loading)(
              "nzDropdownMatchSelectWidth",
              !1
            )("nzSize", "small"),
            e.xp6(1),
            e.Q6J("ngForOf", a.statuses)("ngForTrackBy", a.trackById);
        }
      }
      let Ue = (() => {
        var o;
        class i {
          constructor(t, n, s, l) {
            (this.socket = t),
              (this.cdr = n),
              (this.homePageService = s),
              (this.auth = l),
              (this.task = null),
              (this.loading = !1),
              (this.statuses = []),
              (this.destroy$ = new Y.x()),
              (this.handleResponse = (T) => {
                this.task &&
                  T &&
                  T.id === this.task.id &&
                  ((this.task.status_color = T.color_code.slice(0, -2)),
                  (this.task.status = T.status_id),
                  this.homePageService.tasksViewConfig &&
                    this.homePageService.emitGetTasksWithoutLoading(
                      this.homePageService.tasksViewConfig
                    ),
                  this.cdr.markForCheck());
              });
          }
          ngOnInit() {
            this.socket.on(
              w.C.TASK_STATUS_CHANGE.toString(),
              this.handleResponse
            ),
              this.task?.project_statuses &&
                (this.statuses = this.task.project_statuses),
              this.cdr.markForCheck();
          }
          ngOnDestroy() {
            this.destroy$.next(),
              this.destroy$.complete(),
              this.socket.removeListener(
                w.C.TASK_STATUS_CHANGE.toString(),
                this.handleResponse
              );
          }
          trackById(t, n) {
            return n.id;
          }
          handleStatusChange(t, n) {
            n &&
              this.socket.emit(
                w.C.TASK_STATUS_CHANGE.toString(),
                JSON.stringify({
                  task_id: n,
                  status_id: t,
                  parent_task: this.task?.parent_task_id,
                  team_id: this.auth.getCurrentSession()?.team_id,
                })
              );
          }
        }
        return (
          ((o = i).ɵfac = function (t) {
            return new (t || o)(
              e.Y36(oe.s),
              e.Y36(e.sBO),
              e.Y36(U),
              e.Y36(J.e)
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-task-status"]],
            inputs: { task: "task" },
            decls: 1,
            vars: 1,
            consts: [
              ["class", "py-0", 4, "ngIf"],
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
              1 & t && e.YNc(0, Ye, 3, 8, "div", 0),
                2 & t && e.Q6J("ngIf", n.task && n.task.is_task);
            },
            dependencies: [u.sg, u.O5, k.JJ, k.On, D.Ip, D.Vq, Q.x7, Ie.m],
            styles: ["nz-select[_ngcontent-%COMP%]{max-width:100px}"],
            changeDetection: 0,
          })),
          i
        );
      })();
      var fe = c(20824);
      const He = ["task_input"],
        Qe = ["due_date_selector"],
        Ee = ["project_selector"],
        W = function () {
          return { standalone: !0 };
        };
      function Ge(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "input", 5, 6),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(a);
              const s = e.oxw(2);
              return e.KtG((s.newTaskName = n));
            })("focus", function () {
              e.CHM(a);
              const n = e.oxw(2);
              return e.KtG(n.taskInputFocus());
            })("blur", function () {
              e.CHM(a);
              const n = e.oxw(2);
              return e.KtG(n.taskInputBlur());
            })("keydown", function (n) {
              e.CHM(a);
              const s = e.oxw(2);
              return e.KtG(s.onKeyDown(n));
            }),
            e.qZA();
        }
        if (2 & o) {
          const a = e.oxw(2);
          e.Q6J("ngModelOptions", e.DdM(2, W))("ngModel", a.newTaskName);
        }
      }
      function Be(o, i) {
        if ((1 & o && e._UZ(0, "nz-option", 11), 2 & o)) {
          const a = i.$implicit;
          e.Q6J("nzValue", a)("nzLabel", a.label);
        }
      }
      function Le(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "nz-select", 8, 9),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(a);
              const s = e.oxw(3);
              return e.KtG((s.selectedDueDate = n));
            })("ngModelChange", function (n) {
              e.CHM(a);
              const s = e.MAs(1),
                l = e.oxw(3);
              return e.KtG(l.dueDateFieldValidate(n, s));
            })("nzBlur", function (n) {
              e.CHM(a);
              const s = e.MAs(1),
                l = e.oxw(3);
              return e.KtG(l.dueDateFieldValidate(n, s));
            })("keydown.enter", function (n) {
              e.CHM(a);
              const s = e.MAs(1),
                l = e.oxw(3);
              return e.KtG(l.dueDateFieldValidate(n, s));
            })("nzOpenChange", function (n) {
              e.CHM(a);
              const s = e.oxw(3);
              return e.KtG((s.dueDateOpened = n));
            })("keydown.enter", function (n) {
              e.CHM(a);
              const s = e.MAs(1),
                l = e.oxw(3);
              return e.KtG(l.dueDateFieldValidate(n, s));
            }),
            e.YNc(2, Be, 1, 2, "nz-option", 10),
            e.qZA();
        }
        if (2 & o) {
          const a = e.oxw(3);
          e.Q6J("ngModelOptions", e.DdM(7, W))("ngModel", a.selectedDueDate)(
            "nzOpen",
            !0
          )("nzDropdownMatchSelectWidth", !1)("nzShowArrow", !1)(
            "nzOpen",
            a.dueDateOpened
          ),
            e.xp6(2),
            e.Q6J("ngForOf", a.dueDateOptionsList);
        }
      }
      function Ve(o, i) {
        if (
          (1 & o && (e.ynx(0), e.YNc(1, Le, 3, 8, "nz-select", 7), e.BQk()),
          2 & o)
        ) {
          const a = e.oxw(2);
          e.xp6(1),
            e.Q6J("ngIf", 2 === a.taskCreateIndex || 3 === a.taskCreateIndex);
        }
      }
      function Re(o, i) {
        if ((1 & o && e._UZ(0, "nz-option", 11), 2 & o)) {
          const a = i.$implicit;
          e.s9C("nzLabel", a.name), e.Q6J("nzValue", a.id);
        }
      }
      function Ke(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "nz-select", 13, 14),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(a);
              const s = e.oxw(3);
              return e.KtG((s.selectedProjectId = n));
            })("ngModelChange", function () {
              e.CHM(a);
              const n = e.oxw(3);
              return e.KtG(n.createMainTask(""));
            })("nzOpenChange", function (n) {
              e.CHM(a);
              const s = e.oxw(3);
              return e.KtG((s.projectSelectOpened = n));
            })("nzOpenChange", function () {
              e.CHM(a);
              const n = e.oxw(3);
              return e.KtG(n.handleProjectOpen());
            }),
            e.YNc(2, Re, 1, 2, "nz-option", 10),
            e.qZA();
        }
        if (2 & o) {
          const a = e.oxw(3);
          e.Q6J("nzLoading", a.loadingProjects)("ngModelOptions", e.DdM(8, W))(
            "ngModel",
            a.selectedProjectId
          )("nzOpen", !0)("nzDropdownMatchSelectWidth", !1)("nzShowArrow", !1)(
            "nzOpen",
            a.projectSelectOpened
          ),
            e.xp6(2),
            e.Q6J("ngForOf", a.projects);
        }
      }
      function $e(o, i) {
        if (
          (1 & o && (e.ynx(0), e.YNc(1, Ke, 3, 9, "nz-select", 12), e.BQk()),
          2 & o)
        ) {
          const a = e.oxw(2);
          e.xp6(1), e.Q6J("ngIf", 3 === a.taskCreateIndex);
        }
      }
      function We(o, i) {
        1 & o &&
          (e.TgZ(0, "small", 17),
          e._uU(1, "Press "),
          e.TgZ(2, "b"),
          e._uU(3, "Tab"),
          e.qZA(),
          e._uU(4, " to select a "),
          e.TgZ(5, "b"),
          e._uU(6, "'Due date'"),
          e.qZA(),
          e._uU(7, " and a "),
          e.TgZ(8, "b"),
          e._uU(9, "'Project' "),
          e.qZA(),
          e._uU(10, "."),
          e.qZA());
      }
      function qe(o, i) {
        1 & o &&
          (e.TgZ(0, "small", 17),
          e._uU(1, "Presione "),
          e.TgZ(2, "b"),
          e._uU(3, "Enter"),
          e.qZA(),
          e._uU(4, " para crear."),
          e.qZA());
      }
      function Xe(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 15),
            e.YNc(1, We, 11, 0, "small", 16),
            e.YNc(2, qe, 5, 0, "small", 16),
            e.qZA()),
          2 & o)
        ) {
          const a = e.oxw(2);
          e.xp6(1),
            e.Q6J("ngIf", !a.isPersonal),
            e.xp6(1),
            e.Q6J("ngIf", a.isPersonal);
        }
      }
      function et(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 1)(1, "nz-space"),
            e.YNc(2, Ge, 2, 3, "input", 2),
            e.YNc(3, Ve, 2, 1, "ng-container", 3),
            e.YNc(4, $e, 2, 1, "ng-container", 3),
            e.qZA(),
            e.YNc(5, Xe, 3, 2, "div", 4),
            e.qZA()),
          2 & o)
        ) {
          const a = e.oxw();
          e.xp6(5), e.Q6J("ngIf", 1 === a.taskCreateIndex && a.newTaskName);
        }
      }
      function tt(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "input", 5, 6),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(a);
              const s = e.oxw(2);
              return e.KtG((s.newTaskName = n));
            })("focus", function () {
              e.CHM(a);
              const n = e.oxw(2);
              return e.KtG(n.taskInputFocus());
            })("blur", function () {
              e.CHM(a);
              const n = e.oxw(2);
              return e.KtG(n.taskInputBlur());
            })("keydown", function (n) {
              e.CHM(a);
              const s = e.oxw(2);
              return e.KtG(s.onKeyDown(n));
            }),
            e.qZA();
        }
        if (2 & o) {
          const a = e.oxw(2);
          e.Q6J("ngModelOptions", e.DdM(2, W))("ngModel", a.newTaskName);
        }
      }
      function nt(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "nz-select", 21),
            e.ALo(1, "date"),
            e._UZ(2, "nz-option", 11),
            e.ALo(3, "date"),
            e.ALo(4, "date"),
            e.qZA()),
          2 & o)
        ) {
          const a = e.oxw(4);
          e.Q6J(
            "ngModel",
            e.xi3(
              1,
              4,
              null == a.service.tasksViewConfig
                ? null
                : a.service.tasksViewConfig.selected_date,
              "MMM d, y"
            )
          )("nzShowArrow", !1),
            e.xp6(2),
            e.Q6J(
              "nzValue",
              e.xi3(
                3,
                7,
                null == a.service.tasksViewConfig
                  ? null
                  : a.service.tasksViewConfig.selected_date,
                "MMM d, y"
              )
            )(
              "nzLabel",
              e.xi3(
                4,
                10,
                null == a.service.tasksViewConfig
                  ? null
                  : a.service.tasksViewConfig.selected_date,
                "MMM d, y"
              )
            );
        }
      }
      function ot(o, i) {
        if ((1 & o && e._UZ(0, "nz-option", 11), 2 & o)) {
          const a = i.$implicit;
          e.s9C("nzLabel", a.name), e.Q6J("nzValue", a.id);
        }
      }
      function at(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "nz-select", 13, 14),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(a);
              const s = e.oxw(4);
              return e.KtG((s.selectedProjectId = n));
            })("ngModelChange", function () {
              e.CHM(a);
              const n = e.oxw(4);
              return e.KtG(n.createMainTask(""));
            })("nzOpenChange", function (n) {
              e.CHM(a);
              const s = e.oxw(4);
              return e.KtG((s.projectSelectOpened = n));
            })("nzOpenChange", function () {
              e.CHM(a);
              const n = e.oxw(4);
              return e.KtG(n.handleProjectOpen());
            }),
            e.YNc(2, ot, 1, 2, "nz-option", 10),
            e.qZA();
        }
        if (2 & o) {
          const a = e.oxw(4);
          e.Q6J("nzLoading", a.loadingProjects)("ngModelOptions", e.DdM(8, W))(
            "ngModel",
            a.selectedProjectId
          )("nzOpen", !0)("nzDropdownMatchSelectWidth", !1)("nzShowArrow", !1)(
            "nzOpen",
            a.projectSelectOpened
          ),
            e.xp6(2),
            e.Q6J("ngForOf", a.projects);
        }
      }
      function st(o, i) {
        1 & o &&
          (e.TgZ(0, "nz-space"),
          e.YNc(1, nt, 5, 13, "nz-select", 19),
          e.YNc(2, at, 3, 9, "nz-select", 20),
          e.qZA());
      }
      function it(o, i) {
        if (
          (1 & o && (e.ynx(0), e.YNc(1, st, 3, 0, "nz-space", 18), e.BQk()),
          2 & o)
        ) {
          const a = e.oxw(2);
          e.xp6(1), e.Q6J("ngIf", 3 === a.taskCreateIndex);
        }
      }
      function rt(o, i) {
        1 & o &&
          (e.TgZ(0, "small", 17),
          e._uU(1, "Press "),
          e.TgZ(2, "b"),
          e._uU(3, "Tab"),
          e.qZA(),
          e._uU(4, " to select a "),
          e.TgZ(5, "b"),
          e._uU(6, "'Project' "),
          e.qZA(),
          e._uU(7, "."),
          e.qZA());
      }
      function ct(o, i) {
        1 & o &&
          (e.TgZ(0, "small", 17),
          e._uU(1, "Press "),
          e.TgZ(2, "b"),
          e._uU(3, "Enter"),
          e.qZA(),
          e._uU(4, " to create."),
          e.qZA());
      }
      function lt(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 15),
            e.YNc(1, rt, 8, 0, "small", 16),
            e.YNc(2, ct, 5, 0, "small", 16),
            e.qZA()),
          2 & o)
        ) {
          const a = e.oxw(2);
          e.xp6(1),
            e.Q6J("ngIf", !a.isPersonal),
            e.xp6(1),
            e.Q6J("ngIf", a.isPersonal);
        }
      }
      function dt(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "div", 1)(1, "nz-space"),
            e.YNc(2, tt, 2, 3, "input", 2),
            e.YNc(3, it, 2, 1, "ng-container", 3),
            e.qZA(),
            e.YNc(4, lt, 3, 2, "div", 4),
            e.qZA()),
          2 & o)
        ) {
          const a = e.oxw();
          e.xp6(4), e.Q6J("ngIf", 1 === a.taskCreateIndex && a.newTaskName);
        }
      }
      let ke = (() => {
        var o;
        class i {
          get profile() {
            return this.auth.getCurrentSession();
          }
          constructor(t, n, s, l, T) {
            (this.auth = t),
              (this.cdr = n),
              (this.api = s),
              (this.socket = l),
              (this.service = T),
              (this.isPersonal = !1),
              (this.session = null),
              (this.newTaskName = null),
              (this.selectedProjectId = null),
              (this.taskCreateIndex = 1),
              (this.dueDateOpened = !1),
              (this.projectSelectOpened = !1),
              (this.loadingProjects = !1),
              (this.dueDateOptionsList = [
                { label: "Today", value: "Today" },
                { label: "Tomorrow", value: "Tomorrow" },
                { label: "Next Week", value: "Next Week" },
                { label: "Next Month", value: "Next Month" },
                { label: "No Due Date", value: "No Due Date" },
              ]),
              (this.selectedDueDate = this.dueDateOptionsList[4]),
              (this.projects = []),
              (this.today = new Date()),
              (this.tomorrow = new Date().setDate(new Date().getDate() + 1)),
              (this.nextWeek = new Date().setDate(
                new Date().getDate() + (7 - new Date().getDay() + 1)
              )),
              (this.nextMonth = new Date().setMonth(new Date().getMonth() + 1));
          }
          ngOnInit() {
            this.session = this.auth.getCurrentSession();
          }
          onKeyDown(t) {
            if (this.newTaskName && "" != this.newTaskName.trim()) {
              if ("Tab" == t.key)
                if (this.isPersonal) this.task_input?.nativeElement.focus();
                else {
                  if (1 === this.service.tasksViewConfig?.current_view)
                    return void (
                      1 == this.taskCreateIndex &&
                      ((this.taskCreateIndex = 3),
                      setTimeout(() => {
                        this.task_input?.nativeElement.blur(),
                          (this.projectSelectOpened = !0),
                          this.handleProjectOpen(),
                          this.project_selector.focus();
                      }, 150))
                    );
                  1 == this.taskCreateIndex &&
                    ((this.taskCreateIndex = 2),
                    setTimeout(() => {
                      this.task_input?.nativeElement.blur(),
                        (this.dueDateOpened = !0),
                        this.due_date_selector.focus();
                    }, 150));
                }
              if ("Enter" == t.key)
                if (this.isPersonal) this.createPersonalTask();
                else {
                  if (1 === this.service.tasksViewConfig?.current_view) return;
                  this.selectedProjectId &&
                    this.createMainTask(this.selectedProjectId);
                }
            }
          }
          handleProjectOpen() {
            var t = this;
            return (0, z.Z)(function* () {
              if (t.auth.getCurrentSession()?.team_id) {
                try {
                  t.loadingProjects = !0;
                  const l = yield t.api.getProjectsByTeam();
                  l && (t.projects = l.body), (t.loadingProjects = !1);
                } catch (l) {
                  (0, h.tu)(l), (t.loadingProjects = !1);
                }
                t.cdr.markForCheck();
              }
            })();
          }
          taskInputFocus() {
            document.getElementById("enter_text")?.classList.remove("d-none"),
              document.getElementById("tab_text")?.classList.remove("d-none");
          }
          taskInputBlur() {
            document.getElementById("enter_text")?.classList.add("d-none"),
              document.getElementById("tab_text")?.classList.add("d-none");
          }
          dueDateFieldValidate(t, n) {
            n.blur(),
              (this.taskCreateIndex = 3),
              setTimeout(() => {
                (this.dueDateOpened = !1),
                  (this.projectSelectOpened = !0),
                  this.handleProjectOpen(),
                  this.project_selector.focus();
              }, 150);
          }
          createMainTask(t) {
            var n = this;
            return (0, z.Z)(function* () {
              try {
                const s = {
                  name: n.newTaskName || Z.qu,
                  project_id: n.selectedProjectId,
                  reporter_id: n.session?.id,
                  team_id: n.session?.team_id,
                };
                switch (n.selectedDueDate.value) {
                  case "Today":
                    s.end_date = n.today;
                    break;
                  case "Tomorrow":
                    s.end_date = new Date(n.tomorrow);
                    break;
                  case "Next Week":
                    s.end_date = new Date(n.nextWeek);
                    break;
                  case "Next Month":
                    s.end_date = new Date(n.nextMonth);
                }
                1 === n.service.tasksViewConfig?.current_view &&
                  n.service.tasksViewConfig.selected_date &&
                  (s.end_date = new Date(
                    n.service.tasksViewConfig.selected_date
                  )),
                  n.socket.emit(w.C.QUICK_TASK.toString(), JSON.stringify(s)),
                  n.socket.once(w.C.QUICK_TASK.toString(), (l) => {
                    const T = {
                      team_member_id: n.session?.team_member_id,
                      project_id: l.project_id,
                      task_id: l.id,
                      reporter_id: n.session?.id,
                      mode: 0,
                    };
                    n.socket.emit(
                      w.C.QUICK_ASSIGNEES_UPDATE.toString(),
                      JSON.stringify(T)
                    ),
                      n.socket.once(
                        w.C.QUICK_ASSIGNEES_UPDATE.toString(),
                        (H) => {
                          n.service.emitNewTaskReceived(l),
                            n.cdr.markForCheck();
                        }
                      );
                  });
              } catch (s) {
                (0, h.tu)(s);
              }
              n.reset();
            })();
          }
          createPersonalTask() {
            var t = this;
            return (0, z.Z)(function* () {
              if (t.newTaskName) {
                try {
                  const n = { name: t.newTaskName, color_code: "#000" },
                    s = yield t.api.createPersonalTask(n);
                  s &&
                    (t.service.emitPersonalTaskReceived({
                      id: s.body.id,
                      name: s.body.name,
                      is_task: !1,
                      done: !1,
                    }),
                    t.cdr.markForCheck());
                } catch (n) {
                  (0, h.tu)(n);
                }
                t.reset();
              }
            })();
          }
          reset() {
            (this.taskCreateIndex = 1),
              (this.newTaskName = null),
              (this.selectedDueDate = this.dueDateOptionsList[4]),
              (this.selectedProjectId = null),
              (this.dueDateOpened = !1),
              (this.projectSelectOpened = !1),
              this.task_input?.nativeElement.focus();
          }
        }
        return (
          ((o = i).ɵfac = function (t) {
            return new (t || o)(
              e.Y36(J.e),
              e.Y36(e.sBO),
              e.Y36(F),
              e.Y36(oe.s),
              e.Y36(U)
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-task-add-container"]],
            viewQuery: function (t, n) {
              if ((1 & t && (e.Gf(He, 5), e.Gf(Qe, 5), e.Gf(Ee, 5)), 2 & t)) {
                let s;
                e.iGM((s = e.CRH())) && (n.task_input = s.first),
                  e.iGM((s = e.CRH())) && (n.due_date_selector = s.first),
                  e.iGM((s = e.CRH())) && (n.project_selector = s.first);
              }
            },
            inputs: { isPersonal: "isPersonal" },
            decls: 2,
            vars: 2,
            consts: [
              ["class", "add-task-container", 4, "ngIf"],
              [1, "add-task-container"],
              [
                "nz-input",
                "",
                "tabindex",
                "1",
                "class",
                "task-name-input-field task-input-default",
                "placeholder",
                "+ Add Task",
                3,
                "ngModelOptions",
                "ngModel",
                "ngModelChange",
                "focus",
                "blur",
                "keydown",
                4,
                "nzSpaceItem",
              ],
              [4, "nzSpaceItem"],
              [
                "style",
                "background: #e6f7ff; border: 1px solid #91d5ff; margin-top: 4px; max-width: max-content;padding-left: 4px; padding-right: 4px",
                4,
                "ngIf",
              ],
              [
                "nz-input",
                "",
                "tabindex",
                "1",
                "placeholder",
                "+ Añadir Tarea",
                1,
                "task-name-input-field",
                "task-input-default",
                3,
                "ngModelOptions",
                "ngModel",
                "ngModelChange",
                "focus",
                "blur",
                "keydown",
              ],
              ["task_input", ""],
              [
                "tabindex",
                "2",
                "nzPlaceHolder",
                "Due Date",
                "class",
                "task-due-date-selector task-input-default",
                3,
                "ngModelOptions",
                "ngModel",
                "nzOpen",
                "nzDropdownMatchSelectWidth",
                "nzShowArrow",
                "ngModelChange",
                "nzBlur",
                "keydown.enter",
                "nzOpenChange",
                4,
                "ngIf",
              ],
              [
                "tabindex",
                "2",
                "nzPlaceHolder",
                "Due Date",
                1,
                "task-due-date-selector",
                "task-input-default",
                3,
                "ngModelOptions",
                "ngModel",
                "nzOpen",
                "nzDropdownMatchSelectWidth",
                "nzShowArrow",
                "ngModelChange",
                "nzBlur",
                "keydown.enter",
                "nzOpenChange",
              ],
              ["due_date_selector", ""],
              [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"],
              [3, "nzValue", "nzLabel"],
              [
                "nzShowSearch",
                "",
                "nzPlaceHolder",
                "Project",
                "class",
                "task-project-selector task-input-default",
                3,
                "nzLoading",
                "ngModelOptions",
                "ngModel",
                "nzOpen",
                "nzDropdownMatchSelectWidth",
                "nzShowArrow",
                "ngModelChange",
                "nzOpenChange",
                4,
                "ngIf",
              ],
              [
                "nzShowSearch",
                "",
                "nzPlaceHolder",
                "Project",
                1,
                "task-project-selector",
                "task-input-default",
                3,
                "nzLoading",
                "ngModelOptions",
                "ngModel",
                "nzOpen",
                "nzDropdownMatchSelectWidth",
                "nzShowArrow",
                "ngModelChange",
                "nzOpenChange",
              ],
              ["project_selector", ""],
              [
                2,
                "background",
                "#e6f7ff",
                "border",
                "1px solid #91d5ff",
                "margin-top",
                "4px",
                "max-width",
                "max-content",
                "padding-left",
                "4px",
                "padding-right",
                "4px",
              ],
              ["style", "color: #000000d9", 4, "ngIf"],
              [2, "color", "#000000d9"],
              [4, "ngIf"],
              ["nzDisabled", "", 3, "ngModel", "nzShowArrow", 4, "nzSpaceItem"],
              [
                "nzShowSearch",
                "",
                "nzPlaceHolder",
                "Project",
                "class",
                "task-project-selector task-input-default",
                3,
                "nzLoading",
                "ngModelOptions",
                "ngModel",
                "nzOpen",
                "nzDropdownMatchSelectWidth",
                "nzShowArrow",
                "ngModelChange",
                "nzOpenChange",
                4,
                "nzSpaceItem",
              ],
              ["nzDisabled", "", 3, "ngModel", "nzShowArrow"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.YNc(0, et, 6, 1, "div", 0), e.YNc(1, dt, 5, 1, "div", 0)),
                2 & t &&
                  (e.Q6J(
                    "ngIf",
                    0 ===
                      (null == n.service.tasksViewConfig
                        ? null
                        : n.service.tasksViewConfig.current_view)
                  ),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    1 ===
                      (null == n.service.tasksViewConfig
                        ? null
                        : n.service.tasksViewConfig.current_view)
                  ));
            },
            dependencies: [
              u.sg,
              u.O5,
              k.Fj,
              k.JJ,
              k.On,
              D.Ip,
              D.Vq,
              x.NU,
              x.$1,
              fe.Zp,
              u.uU,
            ],
            styles: [
              ".add-task-container[_ngcontent-%COMP%]{background:#fff;padding-left:4px;padding-right:4px}input[_ngcontent-%COMP%]{max-width:360px;min-width:360px}@media (max-width: 1400px){input[_ngcontent-%COMP%]{max-width:300px;min-width:300px}}@media (max-width: 1280px){input[_ngcontent-%COMP%]{max-width:250px;min-width:250px}}",
            ],
            changeDetection: 0,
          })),
          i
        );
      })();
      function _t(o, i) {
        1 & o &&
          (e.ynx(0),
          e.TgZ(1, "div", 3),
          e._UZ(2, "img", 4),
          e.qZA(),
          e.TgZ(3, "div", 5)(4, "span", 6),
          e._uU(
            5,
            "You have not assigned to any project yet.Therefore you cannot create tasks or view tasks."
          ),
          e.qZA()(),
          e.BQk());
      }
      function pt(o, i) {
        1 & o && e._UZ(0, "worklenz-task-add-container", 16),
          2 & o && e.Q6J("isPersonal", !1);
      }
      function gt(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "td", 11),
            e._UZ(1, "worklenz-task-project", 22),
            e.qZA()),
          2 & o)
        ) {
          const a = e.oxw().$implicit;
          e.xp6(1), e.Q6J("task", a);
        }
      }
      function ht(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "td", 12), e._UZ(1, "worklenz-task-status", 22), e.qZA()),
          2 & o)
        ) {
          const a = e.oxw().$implicit;
          e.xp6(1), e.Q6J("task", a);
        }
      }
      function ut(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "td", 13),
            e._UZ(1, "worklenz-task-due-date", 22),
            e.qZA()),
          2 & o)
        ) {
          const a = e.oxw().$implicit;
          e.xp6(1), e.Q6J("task", a);
        }
      }
      function mt(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "tr", 17)(1, "td", 10)(2, "worklenz-task-name", 18),
            e.NdJ("onOpenTask", function () {
              const s = e.CHM(a).$implicit,
                l = e.oxw(2);
              return e.KtG(l.openTask(s));
            }),
            e.qZA()(),
            e.YNc(3, gt, 2, 1, "td", 19),
            e.YNc(4, ht, 2, 1, "td", 20),
            e.YNc(5, ut, 2, 1, "td", 21),
            e.qZA();
        }
        if (2 & o) {
          const a = i.$implicit;
          e.xp6(2),
            e.Q6J("task", a),
            e.xp6(1),
            e.Q6J("ngIf", a.is_task),
            e.xp6(1),
            e.Q6J("ngIf", a.is_task),
            e.xp6(1),
            e.Q6J("ngIf", a.is_task);
        }
      }
      function ft(o, i) {
        1 & o &&
          (e.ynx(0),
          e.TgZ(1, "div", 3),
          e._UZ(2, "img", 4),
          e.qZA(),
          e.TgZ(3, "div", 5)(4, "span", 6),
          e._uU(5, "Todo en orden. No tienes tareas por el momento."),
          e.qZA()(),
          e.BQk());
      }
      function kt(o, i) {
        if (
          (1 & o &&
            (e.ynx(0),
            e.YNc(1, pt, 1, 1, "worklenz-task-add-container", 7),
            e.TgZ(2, "nz-table", 8)(3, "tr", 9)(4, "th", 10),
            e._uU(5, "Tarea"),
            e.qZA(),
            e.TgZ(6, "th", 11),
            e._uU(7, "Expediente Legal"),
            e.qZA(),
            e.TgZ(8, "th", 12),
            e._uU(9, "Progreso"),
            e.qZA(),
            e.TgZ(10, "th", 13),
            e._uU(11, "Fecha límite"),
            e.qZA()()(),
            e.TgZ(12, "nz-table", 14),
            e.YNc(13, mt, 6, 4, "tr", 15),
            e.qZA(),
            e.YNc(14, ft, 6, 0, "ng-container", 1),
            e.BQk()),
          2 & o)
        ) {
          const a = e.oxw();
          e.xp6(1),
            e.Q6J(
              "ngIf",
              "All" ===
                (null == a.homePageService.tasksViewConfig
                  ? null
                  : a.homePageService.tasksViewConfig.current_tab)
            ),
            e.xp6(12),
            e.Q6J(
              "ngForOf",
              null == a.homePageService.tasksModel
                ? null
                : a.homePageService.tasksModel.tasks
            )("ngForTrackBy", a.trackBy),
            e.xp6(1),
            e.Q6J("ngIf", 0 === a.homePageService.tasksModel.tasks.length);
        }
      }
      let ze = (() => {
        var o;
        class i {
          constructor(t, n, s, l, T, H) {
            (this.auth = t),
              (this.cdr = n),
              (this.homePageApi = s),
              (this.projectService = l),
              (this.taskViewService = T),
              (this.homePageService = H),
              (this.session = null),
              (this.selectedTask = null),
              (this.projects = []),
              (this.loading = !1),
              (this.showTaskModal = !1),
              this.homePageService.newTaskReceived
                .pipe((0, m.sL)())
                .subscribe((v) => {
                  this.handleNewTaskReceived(v);
                }),
              this.taskViewService.onViewBackFrom
                .pipe((0, m.sL)())
                .subscribe((v) => {
                  this.handleTaskSelectFromView({
                    id: v.parent_task_id,
                    project_id: v.project_id,
                  });
                }),
              this.taskViewService.onSelectSubTask
                .pipe((0, m.sL)())
                .subscribe((v) => {
                  this.handleTaskSelectFromView(v);
                }),
              this.homePageService.onGetTasks
                .pipe((0, m.sL)())
                .subscribe((v) => {
                  this.getTasks(!0);
                }),
              this.homePageService.onGetTasksWithoutLoading
                .pipe((0, m.sL)())
                .subscribe((v) => {
                  this.getTasks(!1);
                }),
              (0, E.T)(
                this.taskViewService.onAssigneesChange,
                this.taskViewService.onEndDateChange,
                this.taskViewService.onStatusChange
              )
                .pipe((0, m.sL)())
                .subscribe(() => {
                  this.getTasks(!1);
                }),
              this.taskViewService.onDelete.pipe((0, m.sL)()).subscribe((v) => {
                v.parent_task_id &&
                  this.handleTaskSelectFromView({
                    id: v.parent_task_id,
                    project_id: v.project_id,
                  }),
                  this.getTasks(!1);
              });
          }
          ngOnInit() {
            (this.session = this.auth.getCurrentSession()),
              this.getProjects(),
              this.getTasks(!0);
          }
          getProjects() {
            var t = this;
            return (0, z.Z)(function* () {
              if (t.session?.team_id) {
                try {
                  const s = yield t.homePageApi.getProjectsByTeam();
                  s && (t.projects = s.body);
                } catch (s) {
                  (0, h.tu)(s);
                }
                t.cdr.markForCheck();
              }
            })();
          }
          getTasks(t) {
            var n = this;
            return (0, z.Z)(function* () {
              if (n.homePageService.tasksViewConfig) {
                try {
                  (n.loading = t), (n.homePageService.loadingTasks = !0);
                  let s = n.homePageService.tasksViewConfig;
                  s.time_zone = n.session?.timezone_name
                    ? n.session?.timezone_name
                    : Intl.DateTimeFormat().resolvedOptions().timeZone;
                  const l = yield n.homePageApi.getMyTasks(s);
                  l && (n.homePageService.tasksModel = l.body),
                    (n.loading = !1),
                    (n.homePageService.loadingTasks = !1);
                } catch (s) {
                  (0, h.tu)(s),
                    (n.loading = !1),
                    (n.homePageService.loadingTasks = !1);
                }
                n.cdr.markForCheck();
              }
            })();
          }
          handleTaskSelectFromView(t) {
            (this.showTaskModal = !1),
              setTimeout(() => {
                t && (this.openTask(t), this.cdr.markForCheck());
              }, Z.GR),
              this.cdr.detectChanges();
          }
          openTask(t) {
            (this.selectedTask = t),
              t.project_id && (this.projectService.id = t.project_id),
              (this.showTaskModal = !0),
              this.cdr.markForCheck();
          }
          onShowChange(t) {
            t || (this.selectedTask = null);
          }
          handleNewTaskReceived(t) {
            if (!t) return;
            const n = {
              id: t.id,
              name: t.name,
              project_id: t.project_id,
              status: t.status,
              end_date: t.end_date,
              is_task: !0,
              done: !1,
              project_color: t.project_color,
              project_name: t.project_name,
              team_id: this.session?.team_id,
              status_color: t.status_color?.slice(0, -2),
              project_statuses: t.project_statuses,
            };
            if (
              (this.homePageService.tasksModel.total++,
              "All" === this.homePageService.tasksViewConfig?.current_tab &&
                this.homePageService.tasksModel.tasks.unshift(n),
              t.end_date ||
                (this.homePageService.tasksModel.no_due_date++,
                "NoDueDate" ===
                  this.homePageService.tasksViewConfig?.current_tab &&
                  this.homePageService.tasksModel.tasks.unshift(n)),
              t.end_date)
            ) {
              const s = new Date(t.end_date),
                l = new Date();
              l.setHours(0, 0, 0, 0),
                s.toDateString() === l.toDateString()
                  ? (this.homePageService.tasksModel.today++,
                    "Today" ===
                      this.homePageService.tasksViewConfig?.current_tab &&
                      this.homePageService.tasksModel.tasks.unshift(n))
                  : s > l &&
                    (this.homePageService.tasksModel.upcoming++,
                    "Upcoming" ===
                      this.homePageService.tasksViewConfig?.current_tab &&
                      this.homePageService.tasksModel.tasks.unshift(n));
            }
            this.cdr.markForCheck();
          }
          trackBy(t, n) {
            return n.id;
          }
        }
        return (
          ((o = i).ɵfac = function (t) {
            return new (t || o)(
              e.Y36(J.e),
              e.Y36(e.sBO),
              e.Y36(F),
              e.Y36(le.m),
              e.Y36(de.f),
              e.Y36(U)
            );
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-tasks-table"]],
            decls: 4,
            vars: 7,
            consts: [
              [3, "nzActive", "nzLoading"],
              [4, "ngIf"],
              [3, "show", "projectId", "taskId", "showChange"],
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
              ["nz-typography", "", 1, "no-data-text"],
              [3, "isPersonal", 4, "ngIf"],
              [1, "mt-2"],
              [2, "background", "#fafafa"],
              [1, "tasks-td", "name-td"],
              [1, "tasks-td", "project-td", "pe-0"],
              [1, "tasks-td", "status-td", "ps-0"],
              [1, "tasks-td", "due-date-td"],
              [1, "custom-table", "homepage-table"],
              ["class", "actions-row", 4, "ngFor", "ngForOf", "ngForTrackBy"],
              [3, "isPersonal"],
              [1, "actions-row"],
              [3, "task", "onOpenTask"],
              ["class", "tasks-td project-td pe-0", 4, "ngIf"],
              ["class", "tasks-td status-td ps-0", 4, "ngIf"],
              ["class", "tasks-td due-date-td", 4, "ngIf"],
              [3, "task"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "nz-skeleton", 0),
                e.YNc(1, _t, 6, 0, "ng-container", 1),
                e.YNc(2, kt, 15, 4, "ng-container", 1),
                e.qZA(),
                e.TgZ(3, "worklenz-task-view", 2),
                e.NdJ("showChange", function (l) {
                  return (n.showTaskModal = l);
                })("showChange", function (l) {
                  return n.onShowChange(l);
                }),
                e.qZA()),
                2 & t &&
                  (e.Q6J("nzActive", !0)("nzLoading", n.loading),
                  e.xp6(1),
                  e.Q6J("ngIf", !n.projects.length),
                  e.xp6(1),
                  e.Q6J("ngIf", n.projects.length),
                  e.xp6(1),
                  e.Q6J("show", n.showTaskModal)(
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
              u.sg,
              u.O5,
              M.N8,
              M.Uo,
              M._C,
              M.$Z,
              b.ZU,
              I.ng,
              ve.E,
              me,
              Ae,
              Ne,
              Ue,
              ke,
            ],
            styles: [
              ".tasks-td[_ngcontent-%COMP%]{padding:4px 11px;height:44px}.project-td[_ngcontent-%COMP%]{max-width:200px;width:200px}.status-td[_ngcontent-%COMP%]{max-width:100px;width:100px}.due-date-td[_ngcontent-%COMP%]{max-width:125px;width:125px}.name-td[_ngcontent-%COMP%]{position:relative}.name-td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{opacity:0}.name-td[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{background:#0a58ca!important}.no-data-img-holder[_ngcontent-%COMP%]{max-width:64px;margin-top:24px}.homepage-table[_ngcontent-%COMP%]{overflow-y:auto;max-height:925px}th[_ngcontent-%COMP%]{font-weight:500}",
            ],
            changeDetection: 0,
          })),
          i
        );
      })();
      var _e = c(79382),
        Ce = c(49388),
        pe = c(64345),
        ae = c(57907),
        se = c(56523),
        zt = c(97582),
        Ct = c(59773),
        Tt = c(27754);
      function vt(o, i) {
        if ((1 & o && e._UZ(0, "nz-option", 7), 2 & o)) {
          const a = i.$implicit;
          e.Q6J("nzLabel", a.label)("nzValue", a.value);
        }
      }
      function xt(o, i) {
        if ((1 & o && e._UZ(0, "nz-option", 7), 2 & o)) {
          const a = i.$implicit;
          e.Q6J("nzLabel", a.label)("nzValue", a.value);
        }
      }
      function Mt(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "nz-select", 8),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG(s.monthChange.emit(n));
            }),
            e.YNc(1, xt, 1, 2, "nz-option", 2),
            e.qZA();
        }
        if (2 & o) {
          const a = e.oxw();
          e.Q6J("nzSize", a.size)("nzDropdownMatchSelectWidth", !1)(
            "ngModel",
            a.activeMonth
          ),
            e.xp6(1),
            e.Q6J("ngForOf", a.months);
        }
      }
      function wt(o, i) {
        1 & o && e.GkF(0);
      }
      function yt(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "date-table", 6),
            e.NdJ("valueChange", function (n) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG(s.onDateSelect(n));
            }),
            e.qZA();
        }
        if (2 & o) {
          const a = e.oxw();
          e.Q6J("prefixCls", a.prefixCls)("value", a.activeDate)(
            "activeDate",
            a.activeDate
          )("cellRender", a.dateCell)("fullCellRender", a.dateFullCell)(
            "disabledDate",
            a.nzDisabledDate
          );
        }
      }
      function Pt(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "month-table", 7),
            e.NdJ("valueChange", function (n) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG(s.onDateSelect(n));
            }),
            e.qZA();
        }
        if (2 & o) {
          const a = e.oxw();
          e.Q6J("prefixCls", a.prefixCls)("value", a.activeDate)(
            "activeDate",
            a.activeDate
          )("cellRender", a.monthCell)("fullCellRender", a.monthFullCell);
        }
      }
      let bt = (() => {
          var o;
          class i {}
          return (
            ((o = i).ɵfac = function (t) {
              return new (t || o)();
            }),
            (o.ɵdir = e.lG2({
              type: o,
              selectors: [["", "nzDateCell", ""]],
              exportAs: ["nzDateCell"],
            })),
            i
          );
        })(),
        Dt = (() => {
          var o;
          class i {}
          return (
            ((o = i).ɵfac = function (t) {
              return new (t || o)();
            }),
            (o.ɵdir = e.lG2({
              type: o,
              selectors: [["", "nzMonthCell", ""]],
              exportAs: ["nzMonthCell"],
            })),
            i
          );
        })(),
        Ot = (() => {
          var o;
          class i {}
          return (
            ((o = i).ɵfac = function (t) {
              return new (t || o)();
            }),
            (o.ɵdir = e.lG2({
              type: o,
              selectors: [["", "nzDateFullCell", ""]],
              exportAs: ["nzDateFullCell"],
            })),
            i
          );
        })(),
        At = (() => {
          var o;
          class i {}
          return (
            ((o = i).ɵfac = function (t) {
              return new (t || o)();
            }),
            (o.ɵdir = e.lG2({
              type: o,
              selectors: [["", "nzMonthFullCell", ""]],
              exportAs: ["nzMonthFullCell"],
            })),
            i
          );
        })(),
        St = (() => {
          var o;
          class i {
            get activeYear() {
              return this.activeDate.getYear();
            }
            get activeMonth() {
              return this.activeDate.getMonth();
            }
            get size() {
              return this.fullscreen ? "default" : "small";
            }
            get yearTypeText() {
              return this.i18n.getLocale().Calendar.lang.year;
            }
            get monthTypeText() {
              return this.i18n.getLocale().Calendar.lang.month;
            }
            constructor(t, n) {
              (this.i18n = t),
                (this.dateHelper = n),
                (this.mode = "month"),
                (this.fullscreen = !0),
                (this.activeDate = new se.Yp()),
                (this.modeChange = new e.vpe()),
                (this.yearChange = new e.vpe()),
                (this.monthChange = new e.vpe()),
                (this.yearOffset = 10),
                (this.yearTotal = 20),
                (this.years = []),
                (this.months = []);
            }
            ngOnInit() {
              this.setUpYears(), this.setUpMonths();
            }
            updateYear(t) {
              this.yearChange.emit(t), this.setUpYears(t);
            }
            setUpYears(t) {
              const n = (t || this.activeYear) - this.yearOffset,
                s = n + this.yearTotal;
              this.years = [];
              for (let l = n; l < s; l++)
                this.years.push({ label: `${l}`, value: l });
            }
            setUpMonths() {
              this.months = [];
              for (let t = 0; t < 12; t++) {
                const n = this.activeDate.setMonth(t),
                  s = this.dateHelper.format(n.nativeDate, "MMM");
                this.months.push({ label: s, value: t });
              }
            }
          }
          return (
            ((o = i).ɵfac = function (t) {
              return new (t || o)(e.Y36(pe.wi), e.Y36(pe.mx));
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [["nz-calendar-header"]],
              hostAttrs: [1, "ant-fullcalendar-header"],
              hostVars: 2,
              hostBindings: function (t, n) {
                2 & t && e.Udp("display", "block");
              },
              inputs: {
                mode: "mode",
                fullscreen: "fullscreen",
                activeDate: "activeDate",
              },
              outputs: {
                modeChange: "modeChange",
                yearChange: "yearChange",
                monthChange: "monthChange",
              },
              exportAs: ["nzCalendarHeader"],
              decls: 9,
              vars: 9,
              consts: [
                [1, "ant-picker-calendar-header"],
                [
                  1,
                  "ant-picker-calendar-year-select",
                  3,
                  "nzSize",
                  "nzDropdownMatchSelectWidth",
                  "ngModel",
                  "ngModelChange",
                ],
                [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"],
                [
                  "class",
                  "ant-picker-calendar-month-select",
                  3,
                  "nzSize",
                  "nzDropdownMatchSelectWidth",
                  "ngModel",
                  "ngModelChange",
                  4,
                  "ngIf",
                ],
                [
                  1,
                  "ant-picker-calendar-mode-switch",
                  3,
                  "ngModel",
                  "nzSize",
                  "ngModelChange",
                ],
                ["nz-radio-button", "", "nzValue", "month"],
                ["nz-radio-button", "", "nzValue", "year"],
                [3, "nzLabel", "nzValue"],
                [
                  1,
                  "ant-picker-calendar-month-select",
                  3,
                  "nzSize",
                  "nzDropdownMatchSelectWidth",
                  "ngModel",
                  "ngModelChange",
                ],
              ],
              template: function (t, n) {
                1 & t &&
                  (e.TgZ(0, "div", 0)(1, "nz-select", 1),
                  e.NdJ("ngModelChange", function (l) {
                    return n.updateYear(l);
                  }),
                  e.YNc(2, vt, 1, 2, "nz-option", 2),
                  e.qZA(),
                  e.YNc(3, Mt, 2, 4, "nz-select", 3),
                  e.TgZ(4, "nz-radio-group", 4),
                  e.NdJ("ngModelChange", function (l) {
                    return (n.mode = l);
                  })("ngModelChange", function (l) {
                    return n.modeChange.emit(l);
                  }),
                  e.TgZ(5, "label", 5),
                  e._uU(6),
                  e.qZA(),
                  e.TgZ(7, "label", 6),
                  e._uU(8),
                  e.qZA()()()),
                  2 & t &&
                    (e.xp6(1),
                    e.Q6J("nzSize", n.size)("nzDropdownMatchSelectWidth", !1)(
                      "ngModel",
                      n.activeYear
                    ),
                    e.xp6(1),
                    e.Q6J("ngForOf", n.years),
                    e.xp6(1),
                    e.Q6J("ngIf", "month" === n.mode),
                    e.xp6(1),
                    e.Q6J("ngModel", n.mode)("nzSize", n.size),
                    e.xp6(2),
                    e.Oqu(n.monthTypeText),
                    e.xp6(2),
                    e.Oqu(n.yearTypeText));
              },
              dependencies: [
                u.sg,
                u.O5,
                k.JJ,
                k.On,
                ae.Of,
                ae.Bq,
                ae.Dg,
                D.Ip,
                D.Vq,
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            i
          );
        })(),
        Zt = (() => {
          var o;
          class i {
            get dateCell() {
              return this.nzDateCell || this.nzDateCellChild;
            }
            get dateFullCell() {
              return this.nzDateFullCell || this.nzDateFullCellChild;
            }
            get monthCell() {
              return this.nzMonthCell || this.nzMonthCellChild;
            }
            get monthFullCell() {
              return this.nzMonthFullCell || this.nzMonthFullCellChild;
            }
            constructor(t, n) {
              (this.cdr = t),
                (this.directionality = n),
                (this.activeDate = new se.Yp()),
                (this.prefixCls = "ant-picker-calendar"),
                (this.destroy$ = new Y.x()),
                (this.dir = "ltr"),
                (this.onChangeFn = () => {}),
                (this.onTouchFn = () => {}),
                (this.nzMode = "month"),
                (this.nzModeChange = new e.vpe()),
                (this.nzPanelChange = new e.vpe()),
                (this.nzSelectChange = new e.vpe()),
                (this.nzValueChange = new e.vpe()),
                (this.nzFullscreen = !0);
            }
            ngOnInit() {
              (this.dir = this.directionality.value),
                this.directionality.change
                  ?.pipe((0, Ct.R)(this.destroy$))
                  .subscribe(() => {
                    this.dir = this.directionality.value;
                  });
            }
            onModeChange(t) {
              this.nzModeChange.emit(t),
                this.nzPanelChange.emit({
                  date: this.activeDate.nativeDate,
                  mode: t,
                });
            }
            onYearSelect(t) {
              const n = this.activeDate.setYear(t);
              this.updateDate(n);
            }
            onMonthSelect(t) {
              const n = this.activeDate.setMonth(t);
              this.updateDate(n);
            }
            onDateSelect(t) {
              this.updateDate(t);
            }
            writeValue(t) {
              this.updateDate(new se.Yp(t), !1), this.cdr.markForCheck();
            }
            registerOnChange(t) {
              this.onChangeFn = t;
            }
            registerOnTouched(t) {
              this.onTouchFn = t;
            }
            updateDate(t, n = !0) {
              (this.activeDate = t),
                n &&
                  (this.onChangeFn(t.nativeDate),
                  this.onTouchFn(),
                  this.nzSelectChange.emit(t.nativeDate),
                  this.nzValueChange.emit(t.nativeDate));
            }
            ngOnChanges(t) {
              t.nzValue && this.updateDate(new se.Yp(this.nzValue), !1);
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete();
            }
          }
          return (
            ((o = i).ɵfac = function (t) {
              return new (t || o)(e.Y36(e.sBO), e.Y36(Ce.Is, 8));
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [["nz-calendar"]],
              contentQueries: function (t, n, s) {
                if (
                  (1 & t &&
                    (e.Suo(s, bt, 5, e.Rgc),
                    e.Suo(s, Ot, 5, e.Rgc),
                    e.Suo(s, Dt, 5, e.Rgc),
                    e.Suo(s, At, 5, e.Rgc)),
                  2 & t)
                ) {
                  let l;
                  e.iGM((l = e.CRH())) && (n.nzDateCellChild = l.first),
                    e.iGM((l = e.CRH())) && (n.nzDateFullCellChild = l.first),
                    e.iGM((l = e.CRH())) && (n.nzMonthCellChild = l.first),
                    e.iGM((l = e.CRH())) && (n.nzMonthFullCellChild = l.first);
                }
              },
              hostAttrs: [1, "ant-picker-calendar"],
              hostVars: 6,
              hostBindings: function (t, n) {
                2 & t &&
                  e.ekj("ant-picker-calendar-full", n.nzFullscreen)(
                    "ant-picker-calendar-mini",
                    !n.nzFullscreen
                  )("ant-picker-calendar-rtl", "rtl" === n.dir);
              },
              inputs: {
                nzMode: "nzMode",
                nzValue: "nzValue",
                nzDisabledDate: "nzDisabledDate",
                nzDateCell: "nzDateCell",
                nzDateFullCell: "nzDateFullCell",
                nzMonthCell: "nzMonthCell",
                nzMonthFullCell: "nzMonthFullCell",
                nzFullscreen: "nzFullscreen",
              },
              outputs: {
                nzModeChange: "nzModeChange",
                nzPanelChange: "nzPanelChange",
                nzSelectChange: "nzSelectChange",
                nzValueChange: "nzValueChange",
              },
              exportAs: ["nzCalendar"],
              features: [
                e._Bn([
                  {
                    provide: k.JU,
                    useExisting: (0, e.Gpc)(() => o),
                    multi: !0,
                  },
                ]),
                e.TTD,
              ],
              decls: 9,
              vars: 9,
              consts: [
                [
                  3,
                  "fullscreen",
                  "activeDate",
                  "mode",
                  "modeChange",
                  "yearChange",
                  "monthChange",
                ],
                [1, "ant-picker-panel"],
                [1, "ant-picker-body"],
                [4, "ngIf", "ngIfThen", "ngIfElse"],
                ["monthModeTable", ""],
                ["yearModeTable", ""],
                [
                  3,
                  "prefixCls",
                  "value",
                  "activeDate",
                  "cellRender",
                  "fullCellRender",
                  "disabledDate",
                  "valueChange",
                ],
                [
                  3,
                  "prefixCls",
                  "value",
                  "activeDate",
                  "cellRender",
                  "fullCellRender",
                  "valueChange",
                ],
              ],
              template: function (t, n) {
                if (
                  (1 & t &&
                    (e.TgZ(0, "nz-calendar-header", 0),
                    e.NdJ("modeChange", function (l) {
                      return (n.nzMode = l);
                    })("modeChange", function (l) {
                      return n.onModeChange(l);
                    })("yearChange", function (l) {
                      return n.onYearSelect(l);
                    })("monthChange", function (l) {
                      return n.onMonthSelect(l);
                    }),
                    e.qZA(),
                    e.TgZ(1, "div", 1)(2, "div")(3, "div", 2),
                    e.YNc(4, wt, 1, 0, "ng-container", 3),
                    e.qZA()()(),
                    e.YNc(5, yt, 1, 6, "ng-template", null, 4, e.W1O),
                    e.YNc(7, Pt, 1, 5, "ng-template", null, 5, e.W1O)),
                  2 & t)
                ) {
                  const s = e.MAs(6),
                    l = e.MAs(8);
                  e.Q6J("fullscreen", n.nzFullscreen)(
                    "activeDate",
                    n.activeDate
                  )("mode", n.nzMode),
                    e.xp6(2),
                    e.Gre(
                      "ant-picker-",
                      "month" === n.nzMode ? "date" : "month",
                      "-panel"
                    ),
                    e.xp6(2),
                    e.Q6J("ngIf", "month" === n.nzMode)("ngIfThen", s)(
                      "ngIfElse",
                      l
                    );
                }
              },
              dependencies: [u.O5, $.te, $.Ah, St],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, zt.gn)([(0, Tt.yF)()], i.prototype, "nzFullscreen", void 0),
            i
          );
        })(),
        Ft = (() => {
          var o;
          class i {}
          return (
            ((o = i).ɵfac = function (t) {
              return new (t || o)();
            }),
            (o.ɵmod = e.oAB({ type: o })),
            (o.ɵinj = e.cJS({
              imports: [Ce.vT, u.ez, k.u5, pe.YI, ae.aF, D.LV, $.rT],
            })),
            i
          );
        })();
      var Te = c(93903);
      const jt = ["due_date_selector"],
        Nt = ["project_selector"];
      function It(o, i) {
        1 & o && (e.TgZ(0, "p", 10), e._uU(1, "Tareas"), e.qZA());
      }
      function Jt(o, i) {
        if ((1 & o && e._UZ(0, "nz-option", 13), 2 & o)) {
          const a = i.$implicit;
          e.Q6J("nzValue", a.value)("nzLabel", a.label);
        }
      }
      function Yt(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "nz-select", 11),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG((s.selectedTasksMode = n));
            })("ngModelChange", function (n) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG(s.handleModeChange(n));
            }),
            e.YNc(1, Jt, 1, 2, "nz-option", 12),
            e.qZA();
        }
        if (2 & o) {
          const a = e.oxw();
          e.Q6J("ngModel", a.selectedTasksMode),
            e.xp6(1),
            e.Q6J("ngForOf", a.tasksModes);
        }
      }
      function Ut(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "button", 14),
            e.NdJ("click", function () {
              e.CHM(a);
              const n = e.oxw();
              return e.KtG(n.emitGetTasks());
            }),
            e._UZ(1, "span", 15),
            e.qZA();
        }
        if (2 & o) {
          const a = e.oxw();
          e.xp6(1), e.Q6J("nzSpin", a.service.loadingTasks);
        }
      }
      function Ht(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "nz-segmented", 16),
            e.NdJ("ngModelChange", function (n) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG((s.activeFilter = n));
            })("ngModelChange", function (n) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG(s.handleViewChange(n));
            }),
            e.qZA();
        }
        if (2 & o) {
          const a = e.oxw();
          e.Q6J("nzOptions", a.options)("ngModel", a.activeFilter);
        }
      }
      function Qt(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.ynx(0),
            e.TgZ(1, "nz-skeleton", 17)(2, "nz-tabset", 18)(3, "nz-tab", 19),
            e.NdJ("nzClick", function () {
              e.CHM(a);
              const n = e.oxw();
              return e.KtG(n.handleTasksTabChange("All"));
            }),
            e.qZA(),
            e.TgZ(4, "nz-tab", 19),
            e.NdJ("nzClick", function () {
              e.CHM(a);
              const n = e.oxw();
              return e.KtG(n.handleTasksTabChange("Today"));
            }),
            e.qZA(),
            e.TgZ(5, "nz-tab", 19),
            e.NdJ("nzClick", function () {
              e.CHM(a);
              const n = e.oxw();
              return e.KtG(n.handleTasksTabChange("Upcoming"));
            }),
            e.qZA(),
            e.TgZ(6, "nz-tab", 19),
            e.NdJ("nzClick", function () {
              e.CHM(a);
              const n = e.oxw();
              return e.KtG(n.handleTasksTabChange("Overdue"));
            }),
            e.qZA(),
            e.TgZ(7, "nz-tab", 19),
            e.NdJ("nzClick", function () {
              e.CHM(a);
              const n = e.oxw();
              return e.KtG(n.handleTasksTabChange("NoDueDate"));
            }),
            e.qZA()()(),
            e._UZ(8, "worklenz-tasks-table"),
            e.BQk();
        }
        if (2 & o) {
          const a = e.oxw();
          e.xp6(1),
            e.Q6J("nzActive", !0)("nzLoading", a.loading),
            e.xp6(2),
            e.Q6J("nzTitle", "Tareas (" + a.service.tasksModel.total + ")"),
            e.xp6(1),
            e.Q6J("nzTitle", "Hoy (" + a.service.tasksModel.today + ")"),
            e.xp6(1),
            e.Q6J("nzTitle", "Próximo (" + a.service.tasksModel.upcoming + ")"),
            e.xp6(1),
            e.Q6J("nzTitle", "Vencido (" + a.service.tasksModel.overdue + ")"),
            e.xp6(1),
            e.Q6J(
              "nzTitle",
              "Sin Vencimiento (" + a.service.tasksModel.no_due_date + ")"
            );
        }
      }
      function Et(o, i) {
        1 & o && e._UZ(0, "span", 24);
      }
      function Gt(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.ynx(0),
            e.TgZ(1, "nz-skeleton", 17)(2, "div", 20)(3, "nz-calendar", 21),
            e.NdJ("nzSelectChange", function (n) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG(s.selectDateChange(n));
            }),
            e.qZA(),
            e._UZ(4, "nz-alert", 22),
            e.ALo(5, "date"),
            e.YNc(6, Et, 1, 0, "ng-template", null, 23, e.W1O),
            e.qZA(),
            e._UZ(8, "worklenz-tasks-table"),
            e.qZA(),
            e.BQk();
        }
        if (2 & o) {
          const a = e.MAs(7),
            t = e.oxw();
          e.xp6(1),
            e.Q6J("nzActive", !0)("nzLoading", t.loading),
            e.xp6(3),
            e.MGl(
              "nzMessage",
              "Tareas con vencimiento el : ",
              e.xi3(
                5,
                4,
                null == t.service.tasksViewConfig
                  ? null
                  : t.service.tasksViewConfig.selected_date,
                "d/M/yyyy"
              ),
              ""
            ),
            e.Q6J("nzIcon", a);
        }
      }
      let Bt = (() => {
        var o;
        class i {
          get activeFilter() {
            return +(localStorage.getItem(this.myTasksActiveFilterKey) || 0);
          }
          set activeFilter(t) {
            localStorage.setItem(this.myTasksActiveFilterKey, t.toString());
          }
          constructor(t, n) {
            (this.cdr = t),
              (this.service = n),
              (this.tasksModes = [
                { label: "Asignadas a mi", value: 0 },
                { label: "Asignadas por mi", value: 1 },
              ]),
              (this.selectedTasksMode = this.tasksModes[0].value),
              (this.defaultTasksTab = "Todas"),
              (this.tasks = []),
              (this.taskStatuses = []),
              (this.groups = []),
              (this.model = {}),
              (this.loading = !1),
              (this.showTaskDrawer = !1),
              (this.updating = !1),
              (this.options = ["Lista", "Calendario"]),
              (this.myTasksActiveFilterKey = "my-dashboard-active-filter"),
              (this.deleteMap = {}),
              (this.projectId = null),
              (this.tabIndex = 1);
          }
          ngOnInit() {
            this.service.tasksViewConfig = {
              tasks_group_by: this.selectedTasksMode,
              current_view: this.activeFilter,
              current_tab: this.defaultTasksTab,
              is_calendar_view: 0 != this.activeFilter,
              selected_date: 0 == this.activeFilter ? null : new Date(),
              time_zone: "",
            };
          }
          ngOnDestroy() {
            this.tvDeleteSubscription?.unsubscribe();
          }
          selectDateChange(t) {
            this.service.tasksViewConfig &&
              ((this.service.tasksViewConfig.selected_date = t),
              this.service.emitGetTasks(this.service.tasksViewConfig));
          }
          handleModeChange(t) {
            this.service.tasksViewConfig &&
              ((this.service.tasksViewConfig.tasks_group_by = t),
              this.service.emitGetTasks(this.service.tasksViewConfig));
          }
          handleViewChange(t) {
            this.service.tasksViewConfig &&
              ((this.service.tasksViewConfig.current_view = t),
              (this.service.tasksViewConfig.is_calendar_view = !1),
              (this.service.tasksViewConfig.selected_date = null),
              1 === t &&
                ((this.service.tasksViewConfig.is_calendar_view = !0),
                (this.service.tasksViewConfig.selected_date = new Date())),
              (this.service.tasksViewConfig.current_tab = this.defaultTasksTab),
              (this.activeFilter = t),
              this.cdr.markForCheck());
          }
          handleTasksTabChange(t) {
            this.service.tasksViewConfig &&
              ((this.service.tasksViewConfig.current_tab = t),
              this.service.emitGetTasks(this.service.tasksViewConfig),
              this.cdr.markForCheck());
          }
          emitGetTasks() {
            this.service.tasksViewConfig &&
              (this.tasksTable.getTasks(!0), this.cdr.markForCheck());
          }
        }
        return (
          ((o = i).ɵfac = function (t) {
            return new (t || o)(e.Y36(e.sBO), e.Y36(U));
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-my-tasks"]],
            viewQuery: function (t, n) {
              if ((1 & t && (e.Gf(jt, 5), e.Gf(Nt, 5), e.Gf(ze, 5)), 2 & t)) {
                let s;
                e.iGM((s = e.CRH())) && (n.due_date_selector = s.first),
                  e.iGM((s = e.CRH())) && (n.project_selector = s.first),
                  e.iGM((s = e.CRH())) && (n.tasksTable = s.first);
              }
            },
            decls: 13,
            vars: 2,
            consts: [
              [1, "card-top"],
              [1, "d-flex"],
              [1, "align-items-center"],
              [
                "nz-typography",
                "",
                "class",
                "mb-0 card-title",
                4,
                "nzSpaceItem",
              ],
              [3, "ngModel", "ngModelChange", 4, "nzSpaceItem"],
              [1, "ms-auto"],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzShape",
                "circle",
                "nzTooltipTitle",
                "Refresh tasks",
                "nzType",
                "default",
                3,
                "click",
                4,
                "nzSpaceItem",
              ],
              [3, "nzOptions", "ngModel", "ngModelChange", 4, "nzSpaceItem"],
              [1, "card-data", "mb-3"],
              [4, "ngIf"],
              ["nz-typography", "", 1, "mb-0", "card-title"],
              [3, "ngModel", "ngModelChange"],
              [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"],
              [3, "nzValue", "nzLabel"],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzShape",
                "circle",
                "nzTooltipTitle",
                "Refresh tasks",
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
              [3, "nzOptions", "ngModel", "ngModelChange"],
              [3, "nzActive", "nzLoading"],
              ["nzType", "card", 1, "mob-overflow"],
              [3, "nzTitle", "nzClick"],
              [1, "calendar"],
              [1, "home-calendar", 3, "nzSelectChange"],
              [
                "nzType",
                "success",
                "nzShowIcon",
                "",
                1,
                "mt-2",
                "mb-3",
                3,
                "nzMessage",
                "nzIcon",
              ],
              ["customIconTemplate", ""],
              ["nz-icon", "", "nzType", "clock-circle", "nzTheme", "outline"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "div", 0)(1, "div", 1)(2, "nz-space", 2),
                e.YNc(3, It, 2, 0, "p", 3),
                e.YNc(4, Yt, 2, 2, "nz-select", 4),
                e.qZA(),
                e.TgZ(5, "div", 5)(6, "div", 1)(7, "nz-space"),
                e.YNc(8, Ut, 2, 1, "button", 6),
                e.YNc(9, Ht, 1, 2, "nz-segmented", 7),
                e.qZA()()()()(),
                e.TgZ(10, "div", 8),
                e.YNc(11, Qt, 9, 7, "ng-container", 9),
                e.YNc(12, Gt, 9, 7, "ng-container", 9),
                e.qZA()),
                2 & t &&
                  (e.xp6(11),
                  e.Q6J("ngIf", 0 === n.activeFilter),
                  e.xp6(1),
                  e.Q6J("ngIf", 1 === n.activeFilter));
            },
            dependencies: [
              u.sg,
              u.O5,
              k.JJ,
              k.On,
              D.Ip,
              D.Vq,
              x.NU,
              x.$1,
              P.ix,
              j.w,
              N.dQ,
              A.Ls,
              S.SY,
              b.ZU,
              B.wY,
              I.ng,
              _e.xH,
              _e.xw,
              Zt,
              Te.r,
              ze,
              u.uU,
            ],
            styles: [
              ".single-task-name[_ngcontent-%COMP%]{font-size:14px;margin-bottom:0}.single-task-dates[_ngcontent-%COMP%]{font-weight:400;font-size:12px;line-height:15px;color:#757b81}.single-task-project[_ngcontent-%COMP%]{position:relative;width:max-content;margin-left:auto;font-size:12px;line-height:18px;text-align:center;padding:0 8px;font-weight:500}#block[_ngcontent-%COMP%]{filter:alpha(opacity=20);-moz-opacity:.2;opacity:.2;position:absolute;top:0;left:0;height:100%;width:100%;border-radius:100px}.ant-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border-collapse:collapse!important}.ant-table-cell[_ngcontent-%COMP%]{background:#fff!important}.custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:inherit!important}.status-selector[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:4px;margin-top:5px;margin-right:8px;color:transparent}.ant-card-bordered[_ngcontent-%COMP%]{transition:.3s all;border:1px solid #e5e5e5}.ant-card-bordered[_ngcontent-%COMP%]:hover{border:1px solid #c5c5c5}.single-project-status[_ngcontent-%COMP%]{display:flex;margin-right:8px}.ant-segmented-item-label[_ngcontent-%COMP%]{color:#585858!important}.task-add-section[_ngcontent-%COMP%]{padding-left:17px;padding-top:8px;line-height:32px;padding-bottom:8px;border-bottom:1px solid #f0f0f0;background-color:#f5f5f540}.click-to-add-task[_ngcontent-%COMP%]{cursor:pointer;margin-left:11px}.form-task-due-date[_ngcontent-%COMP%]{max-width:23%;width:20%}.form-task-project[_ngcontent-%COMP%]{max-width:30%;width:30%}@media (max-width: 1280px){.form-task-name[_ngcontent-%COMP%]{max-width:40%}}.task-name-input-field[_ngcontent-%COMP%]{width:320px;max-width:320px;border:1px solid transparent!important;font-weight:500}[_ngcontent-%COMP%]::placeholder{color:#000000a6!important;font-weight:500!important}.task-name-input-field[_ngcontent-%COMP%]:hover{border:1px solid #d9d9d9}.task-name-input-field[_ngcontent-%COMP%]:focus{border:1px solid #40a9ff}.task-due-date-selector[_ngcontent-%COMP%]{width:150px}.task-project-selector[_ngcontent-%COMP%]{min-width:180px;max-width:180px}.task-tooltip[_ngcontent-%COMP%]{position:absolute;left:145px}.custom-date-picker[_ngcontent-%COMP%]{position:absolute;left:0;right:0;height:16px;opacity:0}#top_desc[_ngcontent-%COMP%]{display:block}#top_desc_.hide[_ngcontent-%COMP%]{display:none}.actions-row[_ngcontent-%COMP%]:has(.task-due-date-elem)   .single-task-project[_ngcontent-%COMP%]{margin-top:-18px}.actions-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:transparent!important}.no-data-img-holder[_ngcontent-%COMP%]{width:64px;margin-top:42px}.panel[_ngcontent-%COMP%]{position:relative;padding:0;background-color:#fff;max-height:0;overflow:hidden;transition:max-height .25s}.panel.show[_ngcontent-%COMP%]{transition:max-height .25s;max-height:100%}.btn[_ngcontent-%COMP%]{width:max-content;padding-left:16px!important;padding-right:32px!important;border-radius:4px;cursor:pointer}.btn.active[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-bottom-right-radius:0}.btn[_ngcontent-%COMP%]   .accordion-icon[_ngcontent-%COMP%]{transition:transform .25s;transform:rotate(0)}.btn.active[_ngcontent-%COMP%]   .accordion-icon[_ngcontent-%COMP%]{transition:transform .25s;transform:rotate(90deg)}.card-data[_ngcontent-%COMP%]{padding:12px 24px}.custom-table[_ngcontent-%COMP%]{max-height:calc(100vh - 360px);overflow:auto}.card-top[_ngcontent-%COMP%]{padding:14px 24px;border-bottom:1px solid #f0f0f0}.card-title[_ngcontent-%COMP%]{font-size:16px;font-weight:500}@media (max-width: 1100px){.mob-overflow[_ngcontent-%COMP%]{max-width:475px;overflow-x:auto}}",
            ],
            changeDetection: 0,
          })),
          i
        );
      })();
      function Lt(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.ynx(0),
            e.TgZ(1, "button", 1),
            e.NdJ("click", function () {
              e.CHM(a);
              const n = e.oxw();
              return e.KtG(n.markAsDone());
            }),
            e._UZ(2, "span", 2),
            e.qZA(),
            e.BQk();
        }
        if (2 & o) {
          const a = e.oxw();
          e.xp6(1),
            e.Q6J("nzTooltipTitle", "Marcar Como Completada"),
            e.xp6(1),
            e.Q6J("ngClass", a.loading ? "green" : "");
        }
      }
      let Vt = (() => {
        var o;
        class i {
          constructor(t, n, s) {
            (this.api = t),
              (this.service = n),
              (this.cdr = s),
              (this.task = null),
              (this.loading = !1);
          }
          markAsDone() {
            var t = this;
            return (0, z.Z)(function* () {
              if (t.task?.id) {
                try {
                  t.loading = !0;
                  const n = yield t.api.taskMarkAsDone(t.task.id);
                  n &&
                    (t.service.emitRemoveTaskFromList(n.body),
                    t.cdr.markForCheck());
                } catch (n) {
                  (0, h.tu)(n);
                }
                (t.loading = !1), t.cdr.markForCheck();
              }
            })();
          }
        }
        return (
          ((o = i).ɵfac = function (t) {
            return new (t || o)(e.Y36(F), e.Y36(U), e.Y36(e.sBO));
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-task-done"]],
            inputs: { task: "task" },
            decls: 1,
            vars: 1,
            consts: [
              [4, "ngIf"],
              [
                "nz-button",
                "",
                "nzType",
                "text",
                "nzShape",
                "circle",
                "nz-tooltip",
                "",
                3,
                "nzTooltipTitle",
                "click",
              ],
              [
                "nz-icon",
                "",
                "nzType",
                "check-circle",
                "nzTheme",
                "outline",
                3,
                "ngClass",
              ],
            ],
            template: function (t, n) {
              1 & t && e.YNc(0, Lt, 3, 2, "ng-container", 0),
                2 & t &&
                  e.Q6J(
                    "ngIf",
                    (null == n.task ? null : n.task.id) &&
                      !(null != n.task && n.task.is_task)
                  );
            },
            dependencies: [u.mk, u.O5, P.ix, j.w, A.Ls, S.SY],
            styles: [
              "span[_ngcontent-%COMP%]{color:#00000073}.green[_ngcontent-%COMP%]{color:#32cd32}button[_ngcontent-%COMP%]{margin-left:4px;max-width:20px;overflow:hidden;min-width:20px;max-height:24px;z-index:9}",
            ],
            changeDetection: 0,
          })),
          i
        );
      })();
      function Rt(o, i) {
        if ((1 & o && (e.TgZ(0, "p", 13), e._uU(1), e.qZA()), 2 & o)) {
          const a = e.oxw();
          e.xp6(1),
            e.hij(
              "Lista de tareas (",
              a.homePageService.personal_tasks.length,
              ")"
            );
        }
      }
      function Kt(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "tr", 14)(1, "td", 15),
            e._UZ(2, "worklenz-task-done", 16),
            e.qZA(),
            e.TgZ(3, "td", 17),
            e._UZ(4, "worklenz-task-name", 16),
            e.qZA()()),
          2 & o)
        ) {
          const a = i.$implicit;
          e.xp6(2), e.Q6J("task", a), e.xp6(2), e.Q6J("task", a);
        }
      }
      function $t(o, i) {
        1 & o &&
          (e.ynx(0),
          e.TgZ(1, "div", 18),
          e._UZ(2, "img", 19),
          e.qZA(),
          e.TgZ(3, "div", 20)(4, "span", 21),
          e._uU(5, "No hay tareas para mostrar."),
          e.qZA()(),
          e.BQk());
      }
      let Wt = (() => {
        var o;
        class i {
          constructor(t, n, s) {
            (this.cdr = t),
              (this.homePageApi = n),
              (this.homePageService = s),
              (this.loading = !0),
              this.homePageService.newPersonalTaskReceived
                .pipe((0, m.sL)())
                .subscribe((l) => {
                  this.handlePersonalTaskReceived(l);
                }),
              this.homePageService.removeTaskFromList
                .pipe((0, m.sL)())
                .subscribe((l) => {
                  this.removeTaskFromList(l);
                });
          }
          ngOnInit() {
            (this.homePageService.personal_tasks = []),
              this.getPersonalTasks(!0);
          }
          getPersonalTasks(t) {
            var n = this;
            return (0, z.Z)(function* () {
              try {
                (n.loading = t), (n.homePageService.loadingPersonalTasks = !0);
                const s = yield n.homePageApi.getPersonalTasks();
                s && (n.homePageService.personal_tasks = s.body),
                  (n.loading = !1),
                  (n.homePageService.loadingPersonalTasks = !1);
              } catch (s) {
                (n.loading = !1),
                  (n.homePageService.loadingPersonalTasks = !1),
                  (0, h.tu)(s);
              }
              n.cdr.markForCheck();
            })();
          }
          handlePersonalTaskReceived(t) {
            t &&
              (this.homePageService.personal_tasks.unshift(t),
              this.cdr.markForCheck());
          }
          removeTaskFromList(t) {
            t && (this.getPersonalTasks(!1), this.cdr.markForCheck());
          }
          trackBy(t, n) {
            return n.id;
          }
        }
        return (
          ((o = i).ɵfac = function (t) {
            return new (t || o)(e.Y36(e.sBO), e.Y36(F), e.Y36(U));
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-personal-tasks"]],
            decls: 13,
            vars: 7,
            consts: [
              [1, "card-top"],
              [1, "d-flex"],
              [1, "align-items-center"],
              [
                "nz-typography",
                "",
                "class",
                "mb-0 card-title",
                4,
                "nzSpaceItem",
              ],
              [1, "ms-auto"],
              [
                "nz-button",
                "",
                "nz-tooltip",
                "",
                "nzShape",
                "circle",
                "nzTooltipTitle",
                "Refresh tasks",
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
              [1, "card-data"],
              [3, "nzActive", "nzLoading"],
              [3, "isPersonal"],
              [1, "custom-table", "homepage-table", "mt-2"],
              ["class", "actions-row", 4, "ngFor", "ngForOf", "ngForTrackBy"],
              [4, "ngIf"],
              ["nz-typography", "", 1, "mb-0", "card-title"],
              [1, "actions-row"],
              [1, "task-done-btn"],
              [3, "task"],
              [1, "tasks-td", "name-td"],
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
              ["nz-typography", "", 1, "no-data-text"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "div", 0)(1, "div", 1)(2, "nz-space", 2),
                e.YNc(3, Rt, 2, 1, "p", 3),
                e.qZA(),
                e.TgZ(4, "div", 4)(5, "button", 5),
                e.NdJ("click", function () {
                  return n.getPersonalTasks(!0);
                }),
                e._UZ(6, "span", 6),
                e.qZA()()()(),
                e.TgZ(7, "div", 7)(8, "nz-skeleton", 8),
                e._UZ(9, "worklenz-task-add-container", 9),
                e.TgZ(10, "nz-table", 10),
                e.YNc(11, Kt, 5, 2, "tr", 11),
                e.qZA(),
                e.YNc(12, $t, 6, 0, "ng-container", 12),
                e.qZA()()),
                2 & t &&
                  (e.xp6(6),
                  e.Q6J("nzSpin", n.homePageService.loadingPersonalTasks),
                  e.xp6(2),
                  e.Q6J("nzActive", !0)("nzLoading", n.loading),
                  e.xp6(1),
                  e.Q6J("isPersonal", !0),
                  e.xp6(2),
                  e.Q6J("ngForOf", n.homePageService.personal_tasks)(
                    "ngForTrackBy",
                    n.trackBy
                  ),
                  e.xp6(1),
                  e.Q6J("ngIf", 0 === n.homePageService.personal_tasks.length));
            },
            dependencies: [
              u.sg,
              u.O5,
              x.NU,
              x.$1,
              P.ix,
              j.w,
              N.dQ,
              A.Ls,
              S.SY,
              M.N8,
              M.Uo,
              M.$Z,
              b.ZU,
              I.ng,
              me,
              Vt,
              ke,
            ],
            styles: [
              ".ant-card-bordered[_ngcontent-%COMP%]{transition:.3s all;border:1px solid #e5e5e5}.ant-card-bordered[_ngcontent-%COMP%]:hover{border:1px solid #c5c5c5}tr[_ngcontent-%COMP%]{border-bottom:1px solid #F0F0F0}.ant-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border-collapse:collapse!important}.ant-table-cell[_ngcontent-%COMP%]{background:#fff!important}.text-grey[_ngcontent-%COMP%]{color:#757b81;font-size:14px;line-height:25px;margin-bottom:0!important}.no-data-img-holder[_ngcontent-%COMP%]{width:64px;margin-top:24px}.project-card[_ngcontent-%COMP%]{width:20%;cursor:pointer}.font-400[_ngcontent-%COMP%]{font-weight:400}.card-data[_ngcontent-%COMP%]{padding:24px}.projects-td[_ngcontent-%COMP%]{padding:4px 11px;height:44px}.card-top[_ngcontent-%COMP%]{padding:14px 24px;border-bottom:1px solid #f0f0f0}.card-title[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.tasks-td[_ngcontent-%COMP%]{padding:4px 11px;height:44px}.task-done-btn[_ngcontent-%COMP%]{max-width:20px;width:20px}.homepage-table[_ngcontent-%COMP%]{overflow-y:auto;max-height:420px}th[_ngcontent-%COMP%]{font-weight:500}.card-data[_ngcontent-%COMP%]{padding:12px 24px}",
            ],
            changeDetection: 0,
          })),
          i
        );
      })();
      function qt(o, i) {
        if ((1 & o && (e.TgZ(0, "h3", 21), e._uU(1), e.qZA()), 2 & o)) {
          const a = e.oxw();
          e.xp6(1), e.AsE("Hola ", a.name, ", ", a.greetingTime, "!");
        }
      }
      function Xt(o, i) {
        if (1 & o) {
          const a = e.EpF();
          e.TgZ(0, "nz-button-group")(1, "button", 22),
            e.NdJ("click", function () {
              e.CHM(a);
              const n = e.oxw();
              return e.KtG(n.openProjectForm());
            }),
            e._UZ(2, "span", 23),
            e._uU(3, "Crear Expediente "),
            e.qZA(),
            e.TgZ(4, "button", 24),
            e._UZ(5, "span", 25),
            e.qZA()();
        }
        if (2 & o) {
          e.oxw();
          const a = e.MAs(12);
          e.xp6(1),
            e.Q6J("nzType", "primary"),
            e.xp6(3),
            e.Q6J("nzType", "primary")("nzDropdownMenu", a)(
              "nzTrigger",
              "click"
            )("nzPlacement", "bottomRight");
        }
      }
      const en = [
        {
          path: "",
          component: (() => {
            var o;
            class i {
              get profile() {
                return this.auth.getCurrentSession();
              }
              get name() {
                const n = this.profile?.name?.split(" ") || [];
                return n[0] || n.join("");
              }
              constructor(t, n, s, l, T) {
                (this.app = t),
                  (this.auth = n),
                  (this.listService = s),
                  (this.cdr = l),
                  (this.router = T),
                  (this.greetingTimer = null),
                  (this.loadingProjects = !1),
                  (this.projects = []),
                  (this.currentDate = new Date()),
                  this.app.setTitle("Home");
              }
              ngOnInit() {
                this.listService.setCurrentGroup(
                  this.listService.GROUP_BY_OPTIONS[0]
                ),
                  (this.greetingTime = this.getGreetingTime()),
                  this.startGreetingTimer();
              }
              isOwnerOrAdmin() {
                return this.profile?.owner || this.profile?.is_admin;
              }
              openProjectForm(t) {
                this.projectsForm?.open(t, !!t), this.cdr.markForCheck();
              }
              newProjectCreated() {
                this.myProjects.getProjects(), this.cdr.markForCheck();
              }
              getGreetingTime() {
                const s = new Date().getHours();
                return s >= 12 && s <= 17
                  ? "Buenas Tardes"
                  : s >= 17
                  ? "Buenas Noches"
                  : "Buen día";
              }
              startGreetingTimer() {
                clearTimeout(this.greetingTimer),
                  clearInterval(this.greetingTimer),
                  setTimeout(() => {
                    this.greetingTime = this.getGreetingTime();
                  }, 1e3),
                  this.cdr.markForCheck();
              }
              openTemplateSelector() {
                this.projectTemplateDrawer.open(), this.cdr.markForCheck();
              }
              goToProjects(t) {
                this.router.navigate([`/worklenz/projects/${t}`]);
              }
            }
            return (
              ((o = i).ɵfac = function (t) {
                return new (t || o)(
                  e.Y36(he.z),
                  e.Y36(J.e),
                  e.Y36(d.b),
                  e.Y36(e.sBO),
                  e.Y36(C.F0)
                );
              }),
              (o.ɵcmp = e.Xpm({
                type: o,
                selectors: [["worklenz-dashboard"]],
                viewQuery: function (t, n) {
                  if (
                    (1 & t && (e.Gf(r.g, 5), e.Gf(ne, 5), e.Gf(R.p, 5)), 2 & t)
                  ) {
                    let s;
                    e.iGM((s = e.CRH())) && (n.projectsForm = s.first),
                      e.iGM((s = e.CRH())) && (n.myProjects = s.first),
                      e.iGM((s = e.CRH())) &&
                        (n.projectTemplateDrawer = s.first);
                  }
                },
                decls: 30,
                vars: 7,
                consts: [
                  [1, "container-fluid"],
                  [1, "my-dashboard", "mx-auto"],
                  [1, "row", "position-relative", "home-top-row"],
                  [1, "home-name-date", "text-center"],
                  ["nz-typography", "", 4, "nzSpaceItem"],
                  ["nz-typography", "", 1, "mb-0", 2, "margin-top", "5px"],
                  [1, "home-top-action", "w-auto"],
                  [4, "ngIf"],
                  ["menu", "nzDropdownMenu"],
                  ["nz-menu", ""],
                  ["nz-menu-item", "", 3, "click"],
                  [
                    "nz-icon",
                    "",
                    "nzType",
                    "import",
                    "nzTheme",
                    "outline",
                    1,
                    "me-2",
                  ],
                  [1, "dahsboard-content"],
                  ["nz-row", "", 3, "nzGutter"],
                  ["nz-col", "", "nzSpan", "16", 1, "gutter-row"],
                  [1, "dashboard-main-card", "tasks-card"],
                  ["nz-col", "", "nzSpan", "8", 1, "gutter-row"],
                  [1, "dashboard-main-card"],
                  [1, "dashboard-main-card", 2, "margin-top", "22px"],
                  [3, "onCreate"],
                  [3, "showBothTabs", "importProject"],
                  ["nz-typography", ""],
                  ["nz-button", "", 3, "nzType", "click"],
                  ["nz-icon", "", "nzType", "edit", "nzTheme", "outline"],
                  [
                    "nz-button",
                    "",
                    "nz-dropdown",
                    "",
                    3,
                    "nzType",
                    "nzDropdownMenu",
                    "nzTrigger",
                    "nzPlacement",
                  ],
                  ["nz-icon", "", "nzType", "down", "nzTheme", "outline"],
                ],
                template: function (t, n) {
                  1 & t &&
                    (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(
                      4,
                      "nz-space"
                    ),
                    e.YNc(5, qt, 2, 2, "h3", 4),
                    e.qZA(),
                    e.TgZ(6, "h4", 5),
                    e._uU(7),
                    e.ALo(8, "date"),
                    e.qZA()(),
                    e.TgZ(9, "div", 6),
                    e.YNc(10, Xt, 6, 5, "nz-button-group", 7),
                    e.TgZ(11, "nz-dropdown-menu", null, 8)(13, "ul", 9)(
                      14,
                      "li",
                      10
                    ),
                    e.NdJ("click", function () {
                      return n.openTemplateSelector();
                    }),
                    e._UZ(15, "span", 11),
                    e._uU(16, " Crear desde Plantilla Legal "),
                    e.qZA()()()()(),
                    e.TgZ(17, "div", 12),
                    e.ynx(18),
                    e.TgZ(19, "div", 13)(20, "div", 14)(21, "div", 15),
                    e._UZ(22, "worklenz-my-tasks"),
                    e.qZA()(),
                    e.TgZ(23, "div", 16)(24, "div", 17),
                    e._UZ(25, "worklenz-personal-tasks"),
                    e.qZA(),
                    e.TgZ(26, "div", 18),
                    e._UZ(27, "worklenz-my-projects"),
                    e.qZA()()(),
                    e.BQk(),
                    e.qZA()()(),
                    e.TgZ(28, "worklenz-project-form-modal", 19),
                    e.NdJ("onCreate", function () {
                      return n.newProjectCreated();
                    }),
                    e.qZA(),
                    e.TgZ(29, "worklenz-project-template-import-drawer", 20),
                    e.NdJ("importProject", function (l) {
                      return n.goToProjects(l);
                    }),
                    e.qZA()),
                    2 & t &&
                      (e.xp6(7),
                      e.hij(
                        "Hoy es ",
                        n.currentDate.toLocaleDateString("es-ES", {
                          weekday: "long", // Día completo (ej. lunes)
                          year: "numeric", // Año completo (ej. 2025)
                          month: "long", // Mes completo (ej. abril)
                          day: "numeric", // Día del mes (ej. 1)
                        }),
                        ""
                      ),
                      /*e.hij(
                        "Hoy es ",
                        e.xi3(8, 4, n.currentDate, "EEEE, MMMM d, y"),
                        ""
                      ),*/
                      e.xp6(3),
                      e.Q6J("ngIf", n.isOwnerOrAdmin()),
                      e.xp6(9),
                      e.Q6J("nzGutter", 22),
                      e.xp6(10),
                      e.Q6J("showBothTabs", !0));
                },
                dependencies: [
                  u.O5,
                  x.NU,
                  x.$1,
                  p.t3,
                  p.SK,
                  P.ix,
                  P.fY,
                  j.w,
                  N.dQ,
                  A.Ls,
                  g.wO,
                  g.r9,
                  _.cm,
                  _.RR,
                  _.wA,
                  b.ZU,
                  r.g,
                  R.p,
                  ne,
                  Bt,
                  Wt,
                  u.uU,
                ],
                styles: [
                  ".home-top-row[_ngcontent-%COMP%]{margin-top:24px;margin-bottom:24px}.home-top-action[_ngcontent-%COMP%]{position:absolute;right:0;bottom:1em}.home-name-date[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .home-name-date[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:500;margin-bottom:.25em}.home-name-date[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#1890ff;font-size:16px;line-height:24px;font-weight:400}.dashboard-main-card[_ngcontent-%COMP%]{border-radius:4px;border:1px solid #f0f0f0}.dashboard-main-card.tasks-card[_ngcontent-%COMP%]{border:1px solid transparent;box-shadow:#7a7a7a26 0 5px 16px}.my-dashboard[_ngcontent-%COMP%]{max-width:1320px;width:100%}",
                ],
                changeDetection: 0,
              })),
              i
            );
          })(),
        },
      ];
      let tn = (() => {
        var o;
        class i {}
        return (
          ((o = i).ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [C.Bz.forChild(en), C.Bz] })),
          i
        );
      })();
      var nn = c(16976),
        on = c(90565),
        an = c(26254),
        sn = c(3599),
        rn = c(82962),
        cn = c(43389),
        ln = c(66987),
        dn = c(26236),
        _n = c(99183),
        pn = c(48128),
        gn = c(26501),
        hn = c(55695),
        un = c(29666);
      let mn = (() => {
        var o;
        class i {}
        return (
          ((o = i).ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({
            imports: [
              u.ez,
              tn,
              k.UX,
              k.u5,
              nn.Ph,
              on.cD,
              D.LV,
              x.zf,
              an.KJ,
              sn.U5,
              P.sL,
              fe.o7,
              A.PV,
              _.b1,
              S.cg,
              rn.vh,
              M.HQ,
              cn.BL,
              ln.S,
              b.ZJ,
              dn._t,
              Q.mS,
              _n.o,
              B.KW,
              I.H0,
              pn.W,
              $.Hb,
              r.g,
              L.Ju,
              gn.z,
              hn.X,
              _e.we,
              Ft,
              Te.L,
              R.p,
              un.V,
            ],
          })),
          i
        );
      })();
    },
    53980: (q, y, c) => {
      c.d(y, { s: () => z });
      var u = c(26857),
        C = c(65879),
        r = c(69862);
      let z = (() => {
        var h;
        class e extends u.P {
          constructor(f) {
            super(),
              (this.http = f),
              (this.root = `${this.API_BASE_URL}/project-categories`);
          }
          create(f) {
            return this._post(this.http, this.root, f);
          }
          get() {
            return this._get(this.http, `${this.root}`);
          }
          getByTeamId(f) {
            return this._get(this.http, `${this.root}/${f}`);
          }
          getByOrg() {
            return this._get(this.http, `${this.root}/org-categories`);
          }
          updateColor(f, G) {
            return this._put(this.http, `${this.root}/${f}`, { color: G });
          }
          deleteById(f) {
            return this._delete(this.http, `${this.root}/${f}`);
          }
        }
        return (
          ((h = e).ɵfac = function (f) {
            return new (f || h)(C.LFG(r.eN));
          }),
          (h.ɵprov = C.Yz7({ token: h, factory: h.ɵfac, providedIn: "root" })),
          e
        );
      })();
    },
    19350: (q, y, c) => {
      c.d(y, { w: () => z });
      var u = c(26857),
        C = c(65879),
        r = c(69862);
      let z = (() => {
        var h;
        class e extends u.P {
          constructor(f) {
            super(),
              (this.http = f),
              (this.root = `${this.API_BASE_URL}/project-healths`);
          }
          get() {
            return this._get(this.http, this.root);
          }
        }
        return (
          ((h = e).ɵfac = function (f) {
            return new (f || h)(C.LFG(r.eN));
          }),
          (h.ɵprov = C.Yz7({ token: h, factory: h.ɵfac, providedIn: "root" })),
          e
        );
      })();
    },
    52732: (q, y, c) => {
      c.d(y, { k: () => z });
      var u = c(26857),
        C = c(65879),
        r = c(69862);
      let z = (() => {
        var h;
        class e extends u.P {
          constructor(f) {
            super(),
              (this.http = f),
              (this.root = `${this.API_BASE_URL}/project-statuses`);
          }
          get() {
            return this._get(this.http, this.root);
          }
        }
        return (
          ((h = e).ɵfac = function (f) {
            return new (f || h)(C.LFG(r.eN));
          }),
          (h.ɵprov = C.Yz7({ token: h, factory: h.ɵfac, providedIn: "root" })),
          e
        );
      })();
    },
    26254: (q, y, c) => {
      c.d(y, {
        $: () => V,
        $O: () => R,
        Jp: () => ee,
        KJ: () => J,
        u9: () => L,
        yG: () => X,
      });
      var u = c(49388),
        C = c(96814),
        r = c(65879),
        z = c(8324),
        h = c(62595),
        e = c(97582),
        O = c(78645),
        f = c(59773),
        G = c(37398),
        F = c(40874),
        k = c(1608),
        x = c(28802);
      function P(d, p) {
        if ((1 & d && (r.ynx(0), r._UZ(1, "span", 9), r.BQk()), 2 & d)) {
          const g = p.$implicit,
            _ = r.oxw(2);
          r.xp6(1), r.Q6J("nzType", g || _.getBackIcon());
        }
      }
      function j(d, p) {
        if (1 & d) {
          const g = r.EpF();
          r.TgZ(0, "div", 6),
            r.NdJ("click", function () {
              r.CHM(g);
              const m = r.oxw();
              return r.KtG(m.onBack());
            }),
            r.TgZ(1, "div", 7),
            r.YNc(2, P, 2, 1, "ng-container", 8),
            r.qZA()();
        }
        if (2 & d) {
          const g = r.oxw();
          r.xp6(2), r.Q6J("nzStringTemplateOutlet", g.nzBackIcon);
        }
      }
      function N(d, p) {
        if ((1 & d && (r.ynx(0), r._uU(1), r.BQk()), 2 & d)) {
          const g = r.oxw(2);
          r.xp6(1), r.Oqu(g.nzTitle);
        }
      }
      function A(d, p) {
        if (
          (1 & d &&
            (r.TgZ(0, "span", 10),
            r.YNc(1, N, 2, 1, "ng-container", 8),
            r.qZA()),
          2 & d)
        ) {
          const g = r.oxw();
          r.xp6(1), r.Q6J("nzStringTemplateOutlet", g.nzTitle);
        }
      }
      function S(d, p) {
        1 & d && r.Hsn(0, 6, ["*ngIf", "!nzTitle"]);
      }
      function M(d, p) {
        if ((1 & d && (r.ynx(0), r._uU(1), r.BQk()), 2 & d)) {
          const g = r.oxw(2);
          r.xp6(1), r.Oqu(g.nzSubtitle);
        }
      }
      function b(d, p) {
        if (
          (1 & d &&
            (r.TgZ(0, "span", 11),
            r.YNc(1, M, 2, 1, "ng-container", 8),
            r.qZA()),
          2 & d)
        ) {
          const g = r.oxw();
          r.xp6(1), r.Q6J("nzStringTemplateOutlet", g.nzSubtitle);
        }
      }
      function Q(d, p) {
        1 & d && r.Hsn(0, 7, ["*ngIf", "!nzSubtitle"]);
      }
      const B = [
          [["nz-breadcrumb", "nz-page-header-breadcrumb", ""]],
          [["nz-avatar", "nz-page-header-avatar", ""]],
          [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]],
          [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]],
          [["nz-page-header-content"], ["", "nz-page-header-content", ""]],
          [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]],
          [["nz-page-header-title"], ["", "nz-page-header-title", ""]],
          [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]],
        ],
        I = [
          "nz-breadcrumb[nz-page-header-breadcrumb]",
          "nz-avatar[nz-page-header-avatar]",
          "nz-page-header-tags, [nz-page-header-tags]",
          "nz-page-header-extra, [nz-page-header-extra]",
          "nz-page-header-content, [nz-page-header-content]",
          "nz-page-header-footer, [nz-page-header-footer]",
          "nz-page-header-title, [nz-page-header-title]",
          "nz-page-header-subtitle, [nz-page-header-subtitle]",
        ];
      let L = (() => {
          var d;
          class p {}
          return (
            ((d = p).ɵfac = function (_) {
              return new (_ || d)();
            }),
            (d.ɵdir = r.lG2({
              type: d,
              selectors: [
                ["nz-page-header-title"],
                ["", "nz-page-header-title", ""],
              ],
              hostAttrs: [1, "ant-page-header-heading-title"],
              exportAs: ["nzPageHeaderTitle"],
            })),
            p
          );
        })(),
        X = (() => {
          var d;
          class p {}
          return (
            ((d = p).ɵfac = function (_) {
              return new (_ || d)();
            }),
            (d.ɵdir = r.lG2({
              type: d,
              selectors: [
                ["nz-page-header-subtitle"],
                ["", "nz-page-header-subtitle", ""],
              ],
              hostAttrs: [1, "ant-page-header-heading-sub-title"],
              exportAs: ["nzPageHeaderSubtitle"],
            })),
            p
          );
        })(),
        ee = (() => {
          var d;
          class p {}
          return (
            ((d = p).ɵfac = function (_) {
              return new (_ || d)();
            }),
            (d.ɵdir = r.lG2({
              type: d,
              selectors: [
                ["nz-page-header-extra"],
                ["", "nz-page-header-extra", ""],
              ],
              hostAttrs: [1, "ant-page-header-heading-extra"],
              exportAs: ["nzPageHeaderExtra"],
            })),
            p
          );
        })(),
        V = (() => {
          var d;
          class p {}
          return (
            ((d = p).ɵfac = function (_) {
              return new (_ || d)();
            }),
            (d.ɵdir = r.lG2({
              type: d,
              selectors: [
                ["nz-page-header-footer"],
                ["", "nz-page-header-footer", ""],
              ],
              hostAttrs: [1, "ant-page-header-footer"],
              exportAs: ["nzPageHeaderFooter"],
            })),
            p
          );
        })(),
        te = (() => {
          var d;
          class p {}
          return (
            ((d = p).ɵfac = function (_) {
              return new (_ || d)();
            }),
            (d.ɵdir = r.lG2({
              type: d,
              selectors: [["nz-breadcrumb", "nz-page-header-breadcrumb", ""]],
              exportAs: ["nzPageHeaderBreadcrumb"],
            })),
            p
          );
        })(),
        R = (() => {
          var d;
          class p {
            constructor(_, m, E, Z, le, de) {
              (this.location = _),
                (this.nzConfigService = m),
                (this.elementRef = E),
                (this.nzResizeObserver = Z),
                (this.cdr = le),
                (this.directionality = de),
                (this._nzModuleName = "pageHeader"),
                (this.nzBackIcon = null),
                (this.nzGhost = !0),
                (this.nzBack = new r.vpe()),
                (this.compact = !1),
                (this.destroy$ = new O.x()),
                (this.dir = "ltr");
            }
            ngOnInit() {
              this.directionality.change
                ?.pipe((0, f.R)(this.destroy$))
                .subscribe((_) => {
                  (this.dir = _), this.cdr.detectChanges();
                }),
                (this.dir = this.directionality.value);
            }
            ngAfterViewInit() {
              this.nzResizeObserver
                .observe(this.elementRef)
                .pipe(
                  (0, G.U)(([_]) => _.contentRect.width),
                  (0, f.R)(this.destroy$)
                )
                .subscribe((_) => {
                  (this.compact = _ < 768), this.cdr.markForCheck();
                });
            }
            onBack() {
              if (this.nzBack.observers.length) this.nzBack.emit();
              else {
                if (!this.location)
                  throw new Error(
                    `${k.Bq} you should import 'RouterModule' or register 'Location' if you want to use 'nzBack' default event!`
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
            ((d = p).ɵfac = function (_) {
              return new (_ || d)(
                r.Y36(C.Ye, 8),
                r.Y36(F.jY),
                r.Y36(r.SBq),
                r.Y36(x.D3),
                r.Y36(r.sBO),
                r.Y36(u.Is, 8)
              );
            }),
            (d.ɵcmp = r.Xpm({
              type: d,
              selectors: [["nz-page-header"]],
              contentQueries: function (_, m, E) {
                if ((1 & _ && (r.Suo(E, V, 5), r.Suo(E, te, 5)), 2 & _)) {
                  let Z;
                  r.iGM((Z = r.CRH())) && (m.nzPageHeaderFooter = Z.first),
                    r.iGM((Z = r.CRH())) &&
                      (m.nzPageHeaderBreadcrumb = Z.first);
                }
              },
              hostAttrs: [1, "ant-page-header"],
              hostVars: 10,
              hostBindings: function (_, m) {
                2 & _ &&
                  r.ekj("has-footer", m.nzPageHeaderFooter)(
                    "ant-page-header-ghost",
                    m.nzGhost
                  )("has-breadcrumb", m.nzPageHeaderBreadcrumb)(
                    "ant-page-header-compact",
                    m.compact
                  )("ant-page-header-rtl", "rtl" === m.dir);
              },
              inputs: {
                nzBackIcon: "nzBackIcon",
                nzTitle: "nzTitle",
                nzSubtitle: "nzSubtitle",
                nzGhost: "nzGhost",
              },
              outputs: { nzBack: "nzBack" },
              exportAs: ["nzPageHeader"],
              ngContentSelectors: I,
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
              template: function (_, m) {
                1 & _ &&
                  (r.F$t(B),
                  r.Hsn(0),
                  r.TgZ(1, "div", 0)(2, "div", 1),
                  r.YNc(3, j, 3, 1, "div", 2),
                  r.Hsn(4, 1),
                  r.YNc(5, A, 2, 1, "span", 3),
                  r.YNc(6, S, 1, 0, "ng-content", 4),
                  r.YNc(7, b, 2, 1, "span", 5),
                  r.YNc(8, Q, 1, 0, "ng-content", 4),
                  r.Hsn(9, 2),
                  r.qZA(),
                  r.Hsn(10, 3),
                  r.qZA(),
                  r.Hsn(11, 4),
                  r.Hsn(12, 5)),
                  2 & _ &&
                    (r.xp6(3),
                    r.Q6J("ngIf", null !== m.nzBackIcon),
                    r.xp6(2),
                    r.Q6J("ngIf", m.nzTitle),
                    r.xp6(1),
                    r.Q6J("ngIf", !m.nzTitle),
                    r.xp6(1),
                    r.Q6J("ngIf", m.nzSubtitle),
                    r.xp6(1),
                    r.Q6J("ngIf", !m.nzSubtitle));
              },
              dependencies: [C.O5, z.f, h.Ls],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, e.gn)([(0, F.oS)()], p.prototype, "nzGhost", void 0),
            p
          );
        })(),
        J = (() => {
          var d;
          class p {}
          return (
            ((d = p).ɵfac = function (_) {
              return new (_ || d)();
            }),
            (d.ɵmod = r.oAB({ type: d })),
            (d.ɵinj = r.cJS({ imports: [u.vT, C.ez, z.T, h.PV] })),
            p
          );
        })();
    },
  },
]);
