"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [89],
  {
    53089: (jn, ne, l) => {
      l.r(ne), l.d(ne, { RptMembersModule: () => In });
      var u = l(96814),
        ie = l(35420),
        _ = l(15861),
        A = l(69649),
        R = l(63019),
        x = l(71993),
        p = l(21406),
        ue = l(16676),
        c = l.n(ue),
        g = l(94489),
        e = l(65879),
        fe = l(90586),
        M = l(16196),
        Z = l(62963),
        U = l(32333),
        re = l(69342),
        v = l(42012),
        H = l(975),
        J = l(74764),
        oe = l(63106),
        G = l(38265),
        O = l(82962),
        D = l(62595),
        E = l(20824),
        ae = l(33410),
        T = l(13740),
        b = l(60095),
        Te = l(92022),
        ze = l(65411),
        xe = l(40914),
        Se = l(92259),
        se = l(48522),
        F = l(96928),
        be = l(78645);
      let W = (() => {
        var n;
        class o {
          get onDurationChange() {
            return this._durationChange.asObservable();
          }
          constructor() {
            (this.dateRange = []),
              (this.durations = [
                { label: "Yesterday", key: p.WD },
                { label: "Last 7 days", key: p.ao },
                { label: "Last 30 days", key: p.ly },
                { label: "Last 3 months", key: p.o9 },
                { label: "All time", key: p.Si },
              ]),
              (this.selectedDuration = null),
              (this._durationChange = new be.x());
          }
          emitDurationChange() {
            this._durationChange.next();
          }
        }
        return (
          ((n = o).ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵprov = e.Yz7({ token: n, factory: n.ɵfac, providedIn: "root" })),
          o
        );
      })();
      var B = l(42840),
        Y = l(70855),
        le = l(41958),
        $ = l(52682),
        K = l(43389),
        y = l(73460),
        L = l(62787),
        ce = l(3599),
        w = l(92574),
        V = l(79382),
        X = l(3626),
        Ce = l(62806),
        ve = l(27128),
        N = l(47246),
        pe = l(10095),
        I = l(33640),
        k = l(8083),
        j = l(96109),
        ee = l(44889);
      function ye(n, o) {
        if (1 & n) {
          const i = e.EpF();
          e.TgZ(0, "ul", 12)(1, "li", 13),
            e.NdJ("click", function () {
              e.CHM(i);
              const r = e.oxw();
              return e.KtG(r.openProjects());
            }),
            e._UZ(2, "span", 14),
            e._uU(3),
            e.qZA(),
            e.TgZ(4, "li", 13),
            e.NdJ("click", function () {
              e.CHM(i);
              const r = e.oxw();
              return e.KtG(r.openTaskStatDrawer());
            }),
            e._UZ(5, "span", 15),
            e._uU(6),
            e.qZA(),
            e.TgZ(7, "li", 13),
            e.NdJ("click", function () {
              e.CHM(i);
              const r = e.oxw();
              return e.KtG(r.openTaskStatDrawer());
            }),
            e._UZ(8, "span", 16),
            e._uU(9),
            e.qZA(),
            e.TgZ(10, "li", 13),
            e.NdJ("click", function () {
              e.CHM(i);
              const r = e.oxw();
              return e.KtG(r.openTaskStatDrawer());
            }),
            e._UZ(11, "span", 17),
            e._uU(12),
            e.qZA(),
            e.TgZ(13, "li", 13),
            e.NdJ("click", function () {
              e.CHM(i);
              const r = e.oxw();
              return e.KtG(r.openTaskStatDrawer());
            }),
            e._UZ(14, "span", 18),
            e._uU(15),
            e.qZA(),
            e.TgZ(16, "li", 19),
            e.NdJ("click", function () {
              e.CHM(i);
              const r = e.oxw();
              return e.KtG(r.openTimeLogsTab());
            }),
            e._UZ(17, "span", 16),
            e._uU(18),
            e.qZA()();
        }
        if (2 & n) {
          const i = e.oxw();
          e.xp6(2),
            e.Q6J("nzType", "file-excel")("nzTheme", "outline"),
            e.xp6(1),
            e.hij(
              " ",
              (null == i.model.stats ? null : i.model.stats.projects) || 0,
              " Projects "
            ),
            e.xp6(2),
            e.Q6J("nzType", "exclamation-circle")("nzTheme", "outline"),
            e.xp6(1),
            e.hij(
              " ",
              (null == i.model.stats ? null : i.model.stats.assigned) || 0,
              " Assigned Tasks "
            ),
            e.xp6(2),
            e.Q6J("nzType", "exclamation-circle")("nzTheme", "outline"),
            e.xp6(1),
            e.hij(
              " ",
              (null == i.model.stats ? null : i.model.stats.completed) || 0,
              " Completed Tasks "
            ),
            e.xp6(2),
            e.Q6J("nzType", "clock-circle")("nzTheme", "outline"),
            e.xp6(1),
            e.hij(
              " ",
              (null == i.model.stats ? null : i.model.stats.ongoing) || 0,
              " Ongoing Tasks "
            ),
            e.xp6(2),
            e.Q6J("nzType", "clock-circle")("nzTheme", "outline"),
            e.xp6(1),
            e.hij(
              " ",
              (null == i.model.stats ? null : i.model.stats.overdue) || 0,
              " Overdue Tasks "
            ),
            e.xp6(2),
            e.Q6J("nzType", "clock-circle")("nzTheme", "outline"),
            e.xp6(1),
            e.hij(
              " ",
              (null == i.model.stats ? null : i.model.stats.total_logged) || 0,
              " Logged Hours "
            );
        }
      }
      function we(n, o) {
        1 & n &&
          (e.TgZ(0, "div", 20)(1, "div")(2, "h4", 21),
          e._uU(3, "Tasks By Projects"),
          e.qZA()()());
      }
      function ke(n, o) {
        1 & n &&
          (e.ynx(0),
          e.TgZ(1, "div", 22)(2, "div", 23),
          e._UZ(3, "img", 24),
          e.qZA(),
          e.TgZ(4, "span", 25),
          e._uU(5, "No tasks to show."),
          e.qZA()(),
          e.BQk());
      }
      function Ze(n, o) {
        if (
          (1 & n && (e.TgZ(0, "div", 33), e._UZ(1, "canvas", 34), e.qZA()),
          2 & n)
        ) {
          const i = e.oxw(2);
          e.xp6(1),
            e.Q6J("width", 185)("height", 185)("data", i.projectsChartData)(
              "options",
              i.chartOptions
            )("legend", !1)("type", "doughnut");
        }
      }
      function De(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "li", 30),
            e._UZ(1, "nz-badge", 35),
            e.TgZ(2, "span", 36),
            e._uU(3),
            e.ALo(4, "ellipsis"),
            e.qZA()()),
          2 & n)
        ) {
          const i = o.$implicit;
          e.xp6(1),
            e.Q6J("nzColor", i.color),
            e.xp6(1),
            e.Q6J("nzTooltipTitle", i.label + " (" + i.count + ")"),
            e.xp6(1),
            e.Oqu(e.xi3(4, 3, i.label, 15) + " (" + (i.count || 0) + ")");
        }
      }
      function Ae(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 26),
            e.YNc(1, Ze, 2, 6, "div", 27),
            e.TgZ(2, "div", 28)(3, "ul", 29)(4, "li", 30),
            e._UZ(5, "nz-badge", 31),
            e.qZA(),
            e.YNc(6, De, 5, 6, "li", 32),
            e.qZA()()()),
          2 & n)
        ) {
          const i = e.oxw();
          e.xp6(1),
            e.Q6J(
              "ngIf",
              i.model.by_project && i.model.by_project.chart.length
            ),
            e.xp6(4),
            e.Q6J("nzColor", "#333333")(
              "nzText",
              "All (" +
                ((null == i.model.by_project
                  ? null
                  : i.model.by_project.total) || 0) +
                ")"
            ),
            e.xp6(1),
            e.Q6J(
              "ngForOf",
              null == i.model.by_project ? null : i.model.by_project.data
            );
        }
      }
      function Me(n, o) {
        1 & n &&
          (e.TgZ(0, "div", 20)(1, "div")(2, "h4", 21),
          e._uU(3, "Tasks By Priority"),
          e.qZA()()());
      }
      function Oe(n, o) {
        1 & n &&
          (e.ynx(0),
          e.TgZ(1, "div", 22)(2, "div", 23),
          e._UZ(3, "img", 24),
          e.qZA(),
          e.TgZ(4, "span", 25),
          e._uU(5, "No tasks to show."),
          e.qZA()(),
          e.BQk());
      }
      function Le(n, o) {
        if (
          (1 & n && (e.TgZ(0, "div", 33), e._UZ(1, "canvas", 34), e.qZA()),
          2 & n)
        ) {
          const i = e.oxw(2);
          e.xp6(1),
            e.Q6J("width", 185)("height", 185)("data", i.prioritiesChartData)(
              "options",
              i.chartOptions
            )("legend", !1)("type", "doughnut");
        }
      }
      function Qe(n, o) {
        if (
          (1 & n && (e.TgZ(0, "li", 30), e._UZ(1, "nz-badge", 31), e.qZA()),
          2 & n)
        ) {
          const i = o.$implicit;
          e.xp6(1),
            e.Q6J("nzColor", i.color)(
              "nzText",
              i.label + " (" + (i.count || 0) + ")"
            );
        }
      }
      function Re(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 26),
            e.YNc(1, Le, 2, 6, "div", 27),
            e.TgZ(2, "div", 28)(3, "ul", 29)(4, "li", 30),
            e._UZ(5, "nz-badge", 31),
            e.qZA(),
            e.YNc(6, Qe, 2, 2, "li", 32),
            e.qZA()()()),
          2 & n)
        ) {
          const i = e.oxw();
          e.xp6(1),
            e.Q6J(
              "ngIf",
              i.model.by_priority && i.model.by_priority.chart.length
            ),
            e.xp6(4),
            e.Q6J("nzColor", "#333333")(
              "nzText",
              "All (" +
                ((null == i.model.by_priority
                  ? null
                  : i.model.by_priority.total) || 0) +
                ")"
            ),
            e.xp6(1),
            e.Q6J(
              "ngForOf",
              null == i.model.by_priority ? null : i.model.by_priority.data
            );
        }
      }
      function Ue(n, o) {
        1 & n &&
          (e.TgZ(0, "div", 20)(1, "div")(2, "h4", 21),
          e._uU(3, "Tasks By Status"),
          e.qZA()()());
      }
      function Je(n, o) {
        1 & n &&
          (e.ynx(0),
          e.TgZ(1, "div", 22)(2, "div", 23),
          e._UZ(3, "img", 24),
          e.qZA(),
          e.TgZ(4, "span", 25),
          e._uU(5, "No tasks to show."),
          e.qZA()(),
          e.BQk());
      }
      function Ye(n, o) {
        if (
          (1 & n && (e.TgZ(0, "div", 33), e._UZ(1, "canvas", 34), e.qZA()),
          2 & n)
        ) {
          const i = e.oxw(2);
          e.xp6(1),
            e.Q6J("width", 185)("height", 185)("data", i.statusChartData)(
              "options",
              i.chartOptions
            )("legend", !1)("type", "doughnut");
        }
      }
      function Ne(n, o) {
        if (
          (1 & n && (e.TgZ(0, "li", 30), e._UZ(1, "nz-badge", 31), e.qZA()),
          2 & n)
        ) {
          const i = o.$implicit;
          e.xp6(1),
            e.Q6J("nzColor", i.color)(
              "nzText",
              i.label + " (" + (i.count || 0) + ")"
            );
        }
      }
      function Ie(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 26),
            e.YNc(1, Ye, 2, 6, "div", 27),
            e.TgZ(2, "div", 28)(3, "ul", 29)(4, "li", 30),
            e._UZ(5, "nz-badge", 31),
            e.qZA(),
            e.YNc(6, Ne, 2, 2, "li", 32),
            e.qZA()()()),
          2 & n)
        ) {
          const i = e.oxw();
          e.xp6(1),
            e.Q6J("ngIf", i.model.by_status && i.model.by_status.chart.length),
            e.xp6(4),
            e.Q6J("nzColor", "#333333")(
              "nzText",
              "All (" +
                ((null == i.model.by_status ? null : i.model.by_status.total) ||
                  0) +
                ")"
            ),
            e.xp6(1),
            e.Q6J(
              "ngForOf",
              null == i.model.by_status ? null : i.model.by_status.data
            );
        }
      }
      let je = (() => {
        var n;
        class o extends ve.k {
          constructor(t, r, a, s, m, d, f, h) {
            var z;
            super(t),
              (z = this),
              (this.ngZone = t),
              (this.cdr = r),
              (this.api = a),
              (this.socket = s),
              (this.service = m),
              (this.reportingService = d),
              (this.drawerService = f),
              (this.taskView = h),
              (this.teamMemberId = null),
              (this.isDurationLabelSelected = !0),
              (this.isDurationLabelSelected_ = !1),
              (this.isProjectsChartEmpty = !1),
              (this.isPriorityChartEmpty = !1),
              (this.isStatusChartEmpty = !1),
              (this.projectColors = []),
              (this.priorityColors = []),
              (this.statusColors = []),
              (this.projectsChartData = {
                labels: [],
                datasets: [
                  {
                    label: "Tasks",
                    data: [],
                    backgroundColor: this.projectColors,
                    hoverOffset: 2,
                  },
                ],
              }),
              (this.prioritiesChartData = {
                labels: [],
                datasets: [
                  {
                    label: "Tasks",
                    data: [],
                    backgroundColor: this.priorityColors,
                    hoverOffset: 2,
                  },
                ],
              }),
              (this.statusChartData = {
                labels: [],
                datasets: [
                  {
                    label: "Tasks",
                    data: [],
                    backgroundColor: this.statusColors,
                    hoverOffset: 2,
                  },
                ],
              }),
              (this.chartOptions = {
                plugins: { datalabels: { display: !1 } },
                responsive: !1,
              }),
              (this.loading = !1),
              (this.model = {}),
              (this.refresh = (S) => {
                this.get();
              }),
              this.reportingService.onDrawerDurationChange
                .pipe((0, x.sL)())
                .subscribe(
                  (0, _.Z)(function* () {
                    yield z.get();
                  })
                ),
              this.reportingService.onDrawerDateRangeChange
                .pipe((0, x.sL)())
                .subscribe(
                  (0, _.Z)(function* () {
                    yield z.get();
                  })
                ),
              (0, R.T)(this.taskView.onRefresh)
                .pipe((0, x.sL)())
                .subscribe(
                  (0, _.Z)(function* () {
                    yield z.get();
                  })
                );
          }
          ngOnInit() {
            this.get(), this.listenSockets();
          }
          ngOnDestroy() {
            this.socket.removeListener(
              g.C.TASK_STATUS_CHANGE.toString(),
              this.refresh
            ),
              this.socket.removeListener(
                g.C.TASK_PRIORITY_CHANGE.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                g.C.TASK_END_DATE_CHANGE.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                g.C.TASK_PHASE_CHANGE.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                g.C.TASK_TIME_ESTIMATION_CHANGE.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                g.C.TASK_TIMER_STOP.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                g.C.QUICK_TASK.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                g.C.QUICK_ASSIGNEES_UPDATE.toString(),
                this.refresh
              );
          }
          listenSockets() {
            this.socket.on(g.C.TASK_STATUS_CHANGE.toString(), this.refresh),
              this.socket.on(g.C.TASK_PRIORITY_CHANGE.toString(), this.refresh),
              this.socket.on(g.C.TASK_END_DATE_CHANGE.toString(), this.refresh),
              this.socket.on(g.C.TASK_PHASE_CHANGE.toString(), this.refresh),
              this.socket.on(
                g.C.TASK_TIME_ESTIMATION_CHANGE.toString(),
                this.refresh
              ),
              this.socket.on(g.C.TASK_TIMER_STOP.toString(), this.refresh),
              this.socket.on(g.C.QUICK_TASK.toString(), this.refresh),
              this.socket.on(
                g.C.QUICK_ASSIGNEES_UPDATE.toString(),
                this.refresh
              );
          }
          setDatesForKeys() {
            var t = this;
            return (0, _.Z)(function* () {
              if (t.reportingService.getDrawerDuration()?.key) {
                const r = t.reportingService.getDrawerDuration()?.key,
                  a = c()();
                switch (r) {
                  case p.WD:
                    const s = c()().subtract(1, "days");
                    t.reportingService.setDrawerDateRange([
                      s.toString(),
                      s.toString(),
                    ]);
                    break;
                  case p.ao:
                    const m = c()().subtract(1, "weeks");
                    t.reportingService.setDrawerDateRange([
                      m.toString(),
                      a.toString(),
                    ]);
                    break;
                  case p.ly:
                    const d = c()().subtract(1, "months");
                    t.reportingService.setDrawerDateRange([
                      d.toString(),
                      a.toString(),
                    ]);
                    break;
                  case p.o9:
                    const f = c()().subtract(3, "months");
                    t.reportingService.setDrawerDateRange([
                      f.toString(),
                      a.toString(),
                    ]);
                    break;
                  case p.$U:
                    const h = c()().subtract(1, "weeks").startOf("week"),
                      z = c()().subtract(1, "weeks").endOf("week");
                    t.reportingService.setDrawerDateRange([
                      h.toString(),
                      z.toString(),
                    ]);
                    break;
                  case p.lI:
                    const S = c()().subtract(1, "month").startOf("month"),
                      C = c()().subtract(1, "month").endOf("month");
                    t.reportingService.setDrawerDateRange([
                      S.toString(),
                      C.toString(),
                    ]);
                }
              }
            })();
          }
          get() {
            var t = this;
            return (0, _.Z)(function* () {
              if (t.teamMemberId) {
                try {
                  (t.loading = !0),
                    t.clearCharts(),
                    t.isDurationLabelSelected && (yield t.setDatesForKeys());
                  const r = yield t.api.getMemberInfo({
                    teamMemberId: t.teamMemberId,
                    duration: t.reportingService.getDrawerDuration()?.key,
                    date_range: t.reportingService.getDrawerDateRange(),
                    archived: t.reportingService.getIncludeToggle(),
                  });
                  r.done && ((t.model = r.body), t.drawCharts(r.body)),
                    (t.loading = !1);
                } catch {
                  t.loading = !1;
                }
                t.cdr.markForCheck();
              }
            })();
          }
          drawCharts(t) {
            if (t.by_project) {
              for (const r of t.by_project.chart)
                this.projectsChartData.labels?.push(r.name),
                  this.projectsChartData.datasets[0].data.push(r.y || 0),
                  this.projectColors.push(r.color);
              this.projectsTaskChart?.update(),
                0 === this.projectsChartData.datasets[0].data.length
                  ? ((this.isProjectsChartEmpty = !0), this.cdr.markForCheck())
                  : (this.isProjectsChartEmpty = !1);
            }
            if (t.by_priority) {
              for (const r of t.by_priority.chart)
                this.prioritiesChartData.labels?.push(r.name),
                  this.prioritiesChartData.datasets[0].data.push(r.y || 0),
                  this.priorityColors.push(r.color);
              this.priorityTaskChart?.update(),
                (this.isPriorityChartEmpty =
                  !!this.prioritiesChartData.datasets[0].data.every(
                    (r) => 0 === r
                  ));
            }
            if (t.by_status) {
              for (const r of t.by_status.chart)
                this.statusChartData.labels?.push(r.name),
                  this.statusChartData.datasets[0].data.push(r.y || 0),
                  this.statusColors.push(r.color);
              this.statusTaskChart?.update(),
                (this.isStatusChartEmpty =
                  !!this.statusChartData.datasets[0].data.every(
                    (r) => 0 === r
                  ));
            }
            this.cdr.markForCheck();
          }
          openTaskStatDrawer() {
            this.teamMemberId &&
              this.drawerService.openSingleMemberTaskStat({
                team_member_id: this.teamMemberId,
              });
          }
          openProjects() {
            this.teamMemberId &&
              this.drawerService.openSingleMemberProjects({
                team_member_id: this.teamMemberId,
              });
          }
          openTimeLogsTab() {
            this.teamMemberId && this.drawerService.openTimeLogsTab();
          }
          clearCharts() {
            (this.projectsChartData.datasets[0].data = []),
              (this.prioritiesChartData.datasets[0].data = []),
              (this.statusChartData.datasets[0].data = []),
              (this.projectsChartData.labels = []),
              (this.prioritiesChartData.labels = []),
              (this.statusChartData.labels = []),
              this.cdr.markForCheck();
          }
        }
        return (
          ((n = o).ɵfac = function (t) {
            return new (t || n)(
              e.Y36(e.R0b),
              e.Y36(e.sBO),
              e.Y36(M.U),
              e.Y36(H.s),
              e.Y36(W),
              e.Y36(v.m),
              e.Y36(Z.b),
              e.Y36(J.f)
            );
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["worklenz-rpt-single-member-drawer-overview"]],
            viewQuery: function (t, r) {
              if (
                (1 & t && (e.Gf(N.jh, 5), e.Gf(N.jh, 5), e.Gf(N.jh, 5)), 2 & t)
              ) {
                let a;
                e.iGM((a = e.CRH())) && (r.projectsTaskChart = a.first),
                  e.iGM((a = e.CRH())) && (r.priorityTaskChart = a.first),
                  e.iGM((a = e.CRH())) && (r.statusTaskChart = a.first);
              }
            },
            inputs: {
              teamMemberId: "teamMemberId",
              isDurationLabelSelected: "isDurationLabelSelected",
              isDurationLabelSelected_: "isDurationLabelSelected_",
            },
            features: [e.qOj],
            decls: 25,
            vars: 16,
            consts: [
              ["nz-row", "", 3, "nzGutter"],
              ["nz-col", "", 1, "mb-2", 3, "nzSpan"],
              [1, "h-100", 3, "nzLoading"],
              ["class", "list-unstyled mt-3 ps-4", 4, "ngIf"],
              [3, "nzTitle"],
              ["projectsCardTitle", ""],
              [1, "card-content"],
              [4, "ngIf"],
              ["class", "d-flex", 4, "ngIf"],
              ["nz-col", "", 1, "mt-2", "mb-2", 3, "nzSpan"],
              ["priorityCardTitle", ""],
              ["statusCardTitle", ""],
              [1, "list-unstyled", "mt-3", "ps-4"],
              [1, "d-flex", "mb-3", "list-clickable", 3, "click"],
              [
                "nz-icon",
                "",
                1,
                "stat-icon",
                "me-2",
                2,
                "color",
                "#ffc63b",
                "font-size",
                "24px",
                3,
                "nzType",
                "nzTheme",
              ],
              [
                "nz-icon",
                "",
                1,
                "stat-icon",
                "me-2",
                2,
                "color",
                "#7590c9",
                "font-size",
                "24px",
                3,
                "nzType",
                "nzTheme",
              ],
              [
                "nz-icon",
                "",
                1,
                "stat-icon",
                "me-2",
                2,
                "color",
                "#75c997",
                "font-size",
                "24px",
                3,
                "nzType",
                "nzTheme",
              ],
              [
                "nz-icon",
                "",
                1,
                "stat-icon",
                "me-2",
                2,
                "color",
                "#7cb5ec",
                "font-size",
                "24px",
                3,
                "nzType",
                "nzTheme",
              ],
              [
                "nz-icon",
                "",
                1,
                "stat-icon",
                "me-2",
                2,
                "color",
                "#eb6363",
                "font-size",
                "24px",
                3,
                "nzType",
                "nzTheme",
              ],
              [1, "d-flex", "list-clickable", 3, "click"],
              [1, "d-flex", "align-items-center"],
              [1, "mb-0"],
              [1, "pt-4", "pb-5", "text-center"],
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
              [1, "d-flex"],
              [
                "class",
                "position-relative",
                "style",
                "max-width: 200px",
                4,
                "ngIf",
              ],
              [1, "chart-details", "ms-3"],
              [1, "list-unstyled"],
              [1, "mb-1", "chart-label"],
              [3, "nzColor", "nzText"],
              ["class", "mb-1 chart-label", 4, "ngFor", "ngForOf"],
              [1, "position-relative", 2, "max-width", "200px"],
              [
                "baseChart",
                "",
                3,
                "width",
                "height",
                "data",
                "options",
                "legend",
                "type",
              ],
              [3, "nzColor"],
              ["nz-tooltip", "", 2, "font-size", "13px", 3, "nzTooltipTitle"],
            ],
            template: function (t, r) {
              if (
                (1 & t &&
                  (e.TgZ(0, "div", 0)(1, "div", 1)(2, "nz-card", 2),
                  e.YNc(3, ye, 19, 18, "ul", 3),
                  e.qZA()(),
                  e.TgZ(4, "div", 1)(5, "nz-card", 4),
                  e.YNc(6, we, 4, 0, "ng-template", null, 5, e.W1O),
                  e.TgZ(8, "div", 6),
                  e.YNc(9, ke, 6, 0, "ng-container", 7),
                  e.YNc(10, Ae, 7, 4, "div", 8),
                  e.qZA()()(),
                  e.TgZ(11, "div", 9)(12, "nz-card", 4),
                  e.YNc(13, Me, 4, 0, "ng-template", null, 10, e.W1O),
                  e.TgZ(15, "div", 6),
                  e.YNc(16, Oe, 6, 0, "ng-container", 7),
                  e.YNc(17, Re, 7, 4, "div", 8),
                  e.qZA()()(),
                  e.TgZ(18, "div", 9)(19, "nz-card", 4),
                  e.YNc(20, Ue, 4, 0, "ng-template", null, 11, e.W1O),
                  e.TgZ(22, "div", 6),
                  e.YNc(23, Je, 6, 0, "ng-container", 7),
                  e.YNc(24, Ie, 7, 4, "div", 8),
                  e.qZA()()()()),
                2 & t)
              ) {
                const a = e.MAs(7),
                  s = e.MAs(14),
                  m = e.MAs(21);
                e.Q6J("nzGutter", 16),
                  e.xp6(1),
                  e.Q6J("nzSpan", 12),
                  e.xp6(1),
                  e.Q6J("nzLoading", r.loading),
                  e.xp6(1),
                  e.Q6J("ngIf", null == r.model ? null : r.model.stats),
                  e.xp6(1),
                  e.Q6J("nzSpan", 12),
                  e.xp6(1),
                  e.Q6J("nzTitle", a),
                  e.xp6(4),
                  e.Q6J("ngIf", r.isProjectsChartEmpty),
                  e.xp6(1),
                  e.Q6J("ngIf", !r.loading && !r.isProjectsChartEmpty),
                  e.xp6(1),
                  e.Q6J("nzSpan", 12),
                  e.xp6(1),
                  e.Q6J("nzTitle", s),
                  e.xp6(4),
                  e.Q6J("ngIf", r.isPriorityChartEmpty),
                  e.xp6(1),
                  e.Q6J("ngIf", !r.loading && !r.isPriorityChartEmpty),
                  e.xp6(1),
                  e.Q6J("nzSpan", 12),
                  e.xp6(1),
                  e.Q6J("nzTitle", m),
                  e.xp6(4),
                  e.Q6J("ngIf", r.isStatusChartEmpty),
                  e.xp6(1),
                  e.Q6J("ngIf", !r.loading && !r.isStatusChartEmpty);
              }
            },
            dependencies: [
              u.sg,
              u.O5,
              Y.w,
              pe.t3,
              pe.SK,
              D.Ls,
              I.x7,
              O.bd,
              N.jh,
              k.ZU,
              j.SY,
              ee.p,
            ],
            styles: [
              ".chart-details[_ngcontent-%COMP%]{max-height:220px;overflow-y:auto}.no-data-img-holder[_ngcontent-%COMP%]{width:65px}.list-clickable[_ngcontent-%COMP%]{cursor:pointer;transition:.25s all}.list-clickable[_ngcontent-%COMP%]:hover{color:#1890ff}",
            ],
            changeDetection: 0,
          })),
          o
        );
      })();
      var P = l(24139),
        te = l(66987),
        q = l(43498),
        Q = l(55695);
      function Pe(n, o) {
        1 & n &&
          (e.ynx(0),
          e.TgZ(1, "div", 3)(2, "div", 4),
          e._UZ(3, "img", 5),
          e.qZA(),
          e.TgZ(4, "span", 6),
          e._uU(5, "No activity logs to show."),
          e.qZA()(),
          e.BQk());
      }
      function qe(n, o) {
        1 & n && (e.TgZ(0, "span"), e._uU(1, " Status "), e.qZA());
      }
      function Ee(n, o) {
        1 & n && (e.TgZ(0, "span"), e._uU(1, " Priority "), e.qZA());
      }
      function Fe(n, o) {
        1 & n && (e.TgZ(0, "span"), e._uU(1, " Phase "), e.qZA());
      }
      function We(n, o) {
        1 & n && (e.TgZ(0, "span"), e._uU(1, " Start Date "), e.qZA());
      }
      function Ke(n, o) {
        1 & n && (e.TgZ(0, "span"), e._uU(1, " End Date "), e.qZA());
      }
      function He(n, o) {
        if (
          (1 & n && (e.TgZ(0, "span")(1, "nz-tag", 16), e._uU(2), e.qZA()()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J(
              "nzColor",
              (null == i.previous_status
                ? null
                : i.previous_status.color_code) + "69"
            ),
            e.xp6(1),
            e.Oqu(i.previous);
        }
      }
      function Ge(n, o) {
        if (
          (1 & n && (e.TgZ(0, "span")(1, "nz-tag", 16), e._uU(2), e.qZA()()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J(
              "nzColor",
              (null == i.previous_priority
                ? null
                : i.previous_priority.color_code) + "69"
            ),
            e.xp6(1),
            e.Oqu(i.previous);
        }
      }
      function Be(n, o) {
        if (
          (1 & n && (e.TgZ(0, "span")(1, "nz-tag", 16), e._uU(2), e.qZA()()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J(
              "nzColor",
              null != i.previous_phase && i.previous_phase.color_code
                ? (null == i.previous_phase
                    ? null
                    : i.previous_phase.color_code) + "69"
                : "#fbc84c69"
            ),
            e.xp6(1),
            e.Oqu(i.previous ? i.previous : "Unmapped");
        }
      }
      function $e(n, o) {
        if (
          (1 & n &&
            (e.ynx(0), e.TgZ(1, "nz-tag", 17), e._uU(2), e.qZA(), e.BQk()),
          2 & n)
        ) {
          const i = e.oxw(2).$implicit;
          e.xp6(2), e.Oqu(i.previous);
        }
      }
      function Ve(n, o) {
        1 & n &&
          (e.ynx(0),
          e.TgZ(1, "nz-tag", 17),
          e._uU(2, "None"),
          e.qZA(),
          e.BQk());
      }
      function Xe(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "span"),
            e.YNc(1, $e, 3, 1, "ng-container", 1),
            e.YNc(2, Ve, 3, 0, "ng-container", 1),
            e.qZA()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J("ngIf", i.previous),
            e.xp6(1),
            e.Q6J("ngIf", !i.previous);
        }
      }
      function et(n, o) {
        if (
          (1 & n &&
            (e.ynx(0), e.TgZ(1, "nz-tag", 17), e._uU(2), e.qZA(), e.BQk()),
          2 & n)
        ) {
          const i = e.oxw(2).$implicit;
          e.xp6(2), e.Oqu(i.previous);
        }
      }
      function tt(n, o) {
        1 & n &&
          (e.ynx(0),
          e.TgZ(1, "nz-tag", 17),
          e._uU(2, "None"),
          e.qZA(),
          e.BQk());
      }
      function nt(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "span"),
            e.YNc(1, et, 3, 1, "ng-container", 1),
            e.YNc(2, tt, 3, 0, "ng-container", 1),
            e.qZA()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J("ngIf", i.previous),
            e.xp6(1),
            e.Q6J("ngIf", !i.previous);
        }
      }
      function it(n, o) {
        if (
          (1 & n && (e.TgZ(0, "span")(1, "nz-tag", 16), e._uU(2), e.qZA()()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J(
              "nzColor",
              (null == i.next_status ? null : i.next_status.color_code) + "69"
            ),
            e.xp6(1),
            e.Oqu(i.current);
        }
      }
      function rt(n, o) {
        if (
          (1 & n && (e.TgZ(0, "span")(1, "nz-tag", 16), e._uU(2), e.qZA()()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J(
              "nzColor",
              (null == i.next_priority ? null : i.next_priority.color_code) +
                "69"
            ),
            e.xp6(1),
            e.Oqu(i.current);
        }
      }
      function ot(n, o) {
        if (
          (1 & n && (e.TgZ(0, "span")(1, "nz-tag", 16), e._uU(2), e.qZA()()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J(
              "nzColor",
              null != i.next_phase && i.next_phase.color_code
                ? (null == i.next_phase ? null : i.next_phase.color_code) + "69"
                : "#fbc84c69"
            ),
            e.xp6(1),
            e.Oqu(i.current ? i.current : "Unmapped");
        }
      }
      function at(n, o) {
        if (
          (1 & n &&
            (e.ynx(0), e.TgZ(1, "nz-tag", 17), e._uU(2), e.qZA(), e.BQk()),
          2 & n)
        ) {
          const i = e.oxw(2).$implicit;
          e.xp6(2), e.Oqu(i.current);
        }
      }
      function st(n, o) {
        1 & n &&
          (e.ynx(0),
          e.TgZ(1, "nz-tag", 17),
          e._uU(2, "None"),
          e.qZA(),
          e.BQk());
      }
      function lt(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "span"),
            e.YNc(1, at, 3, 1, "ng-container", 1),
            e.YNc(2, st, 3, 0, "ng-container", 1),
            e.qZA()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J("ngIf", i.current),
            e.xp6(1),
            e.Q6J("ngIf", !i.current);
        }
      }
      function ct(n, o) {
        if (
          (1 & n &&
            (e.ynx(0), e.TgZ(1, "nz-tag", 17), e._uU(2), e.qZA(), e.BQk()),
          2 & n)
        ) {
          const i = e.oxw(2).$implicit;
          e.xp6(2), e.Oqu(i.current);
        }
      }
      function pt(n, o) {
        1 & n &&
          (e.ynx(0),
          e.TgZ(1, "nz-tag", 17),
          e._uU(2, "None"),
          e.qZA(),
          e.BQk());
      }
      function gt(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "span"),
            e.YNc(1, ct, 3, 1, "ng-container", 1),
            e.YNc(2, pt, 3, 0, "ng-container", 1),
            e.qZA()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J("ngIf", i.current),
            e.xp6(1),
            e.Q6J("ngIf", !i.current);
        }
      }
      function _t(n, o) {
        if (1 & n) {
          const i = e.EpF();
          e.TgZ(0, "nz-timeline-item")(1, "span", 11),
            e.NdJ("click", function () {
              const a = e.CHM(i).$implicit,
                s = e.oxw(3);
              return e.KtG(s.openTask(a.task_id, a.project_id));
            }),
            e._uU(2, " Updated "),
            e.TgZ(3, "b", 12),
            e.ynx(4, 13),
            e.YNc(5, qe, 2, 0, "span", 14),
            e.YNc(6, Ee, 2, 0, "span", 14),
            e.YNc(7, Fe, 2, 0, "span", 14),
            e.YNc(8, We, 2, 0, "span", 14),
            e.YNc(9, Ke, 2, 0, "span", 14),
            e.BQk(),
            e.qZA(),
            e._uU(10, " from "),
            e.ynx(11, 13),
            e.YNc(12, He, 3, 2, "span", 14),
            e.YNc(13, Ge, 3, 2, "span", 14),
            e.YNc(14, Be, 3, 2, "span", 14),
            e.YNc(15, Xe, 3, 2, "span", 14),
            e.YNc(16, nt, 3, 2, "span", 14),
            e.BQk(),
            e._uU(17, " to "),
            e.ynx(18, 13),
            e.YNc(19, it, 3, 2, "span", 14),
            e.YNc(20, rt, 3, 2, "span", 14),
            e.YNc(21, ot, 3, 2, "span", 14),
            e.YNc(22, lt, 3, 2, "span", 14),
            e.YNc(23, gt, 3, 2, "span", 14),
            e.BQk(),
            e._uU(24, " in "),
            e.TgZ(25, "b", 12),
            e._uU(26),
            e.qZA(),
            e._uU(27, " within "),
            e.TgZ(28, "b", 12),
            e._uU(29),
            e.qZA(),
            e.TgZ(30, "nz-tag", 15),
            e._uU(31),
            e.qZA()()();
        }
        if (2 & n) {
          const i = o.$implicit;
          e.xp6(4),
            e.Q6J("ngSwitch", i.attribute_type),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "status"),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "priority"),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "phase"),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "start_date"),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "end_date"),
            e.xp6(2),
            e.Q6J("ngSwitch", i.attribute_type),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "status"),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "priority"),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "phase"),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "start_date"),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "end_date"),
            e.xp6(2),
            e.Q6J("ngSwitch", i.attribute_type),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "status"),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "priority"),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "phase"),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "start_date"),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "end_date"),
            e.xp6(3),
            e.Oqu(i.task_name),
            e.xp6(3),
            e.Oqu(i.project_name),
            e.xp6(2),
            e.Oqu(i.task_key);
        }
      }
      function mt(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "nz-timeline"),
            e.YNc(1, _t, 32, 21, "nz-timeline-item", 2),
            e.qZA()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1), e.Q6J("ngForOf", i.logs);
        }
      }
      function dt(n, o) {
        1 & n &&
          (e.ynx(0),
          e.TgZ(1, "div", 18),
          e._uU(2, " No time logs to show. "),
          e.qZA(),
          e.BQk());
      }
      function ht(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 19)(1, "span", 20),
            e._uU(2),
            e.ALo(3, "date"),
            e.qZA()()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(2), e.Oqu(e.xi3(3, 1, i.log_day, "MMM dd, YYYY"));
        }
      }
      function ut(n, o) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "div", 7)(2, "nz-card", 8)(3, "div", 9),
            e.YNc(4, mt, 2, 1, "nz-timeline", 1),
            e.YNc(5, dt, 3, 0, "ng-container", 1),
            e.qZA()(),
            e.YNc(6, ht, 4, 4, "ng-template", null, 10, e.W1O),
            e.qZA(),
            e._UZ(8, "nz-divider"),
            e.BQk()),
          2 & n)
        ) {
          const i = o.$implicit,
            t = e.MAs(7);
          e.xp6(2),
            e.Q6J("nzTitle", t),
            e.xp6(2),
            e.Q6J("ngIf", i.logs.length),
            e.xp6(1),
            e.Q6J("ngIf", !i.logs.length);
        }
      }
      let ft = (() => {
        var n;
        class o {
          constructor(t, r, a, s, m, d, f) {
            var h = this;
            (this.cdr = t),
              (this.api = r),
              (this.auth = a),
              (this.service = s),
              (this.drawer = m),
              (this.reportingService = d),
              (this.taskView = f),
              (this.member = null),
              (this.isDurationLabelSelected = !0),
              (this.loading = !1),
              (this.activityLogs = []),
              this.reportingService.onDrawerDurationChange
                .pipe((0, x.sL)())
                .subscribe(
                  (0, _.Z)(function* () {
                    yield h.getActivities();
                  })
                ),
              this.reportingService.onDrawerDateRangeChange
                .pipe((0, x.sL)())
                .subscribe(
                  (0, _.Z)(function* () {
                    yield h.getActivities();
                  })
                ),
              this.taskView.onRefresh.pipe((0, x.sL)()).subscribe(
                (0, _.Z)(function* () {
                  yield h.getActivities();
                })
              );
          }
          ngOnInit() {
            var t = this;
            return (0, _.Z)(function* () {
              yield t.getActivities();
            })();
          }
          setDatesForKeys() {
            var t = this;
            return (0, _.Z)(function* () {
              if (t.reportingService.getDrawerDuration()?.key) {
                const r = t.reportingService.getDrawerDuration()?.key,
                  a = c()();
                switch (r) {
                  case p.WD:
                    const s = c()().subtract(1, "days");
                    t.reportingService.setDrawerDateRange([
                      s.toString(),
                      s.toString(),
                    ]);
                    break;
                  case p.ao:
                    const m = c()().subtract(1, "weeks");
                    t.reportingService.setDrawerDateRange([
                      m.toString(),
                      a.toString(),
                    ]);
                    break;
                  case p.ly:
                    const d = c()().subtract(1, "months");
                    t.reportingService.setDrawerDateRange([
                      d.toString(),
                      a.toString(),
                    ]);
                    break;
                  case p.o9:
                    const f = c()().subtract(3, "months");
                    t.reportingService.setDrawerDateRange([
                      f.toString(),
                      a.toString(),
                    ]);
                    break;
                  case p.$U:
                    const h = c()().subtract(1, "weeks").startOf("week"),
                      z = c()().subtract(1, "weeks").endOf("week");
                    t.reportingService.setDrawerDateRange([
                      h.toString(),
                      z.toString(),
                    ]);
                    break;
                  case p.lI:
                    const S = c()().subtract(1, "month").startOf("month"),
                      C = c()().subtract(1, "month").endOf("month");
                    t.reportingService.setDrawerDateRange([
                      S.toString(),
                      C.toString(),
                    ]);
                }
              }
            })();
          }
          getActivities() {
            var t = this;
            return (0, _.Z)(function* () {
              if (t.member)
                try {
                  t.loading = !0;
                  const r = t.auth.getCurrentSession()?.team_id,
                    a = {
                      team_member_id: t.member.id,
                      team_id: r,
                      duration: t.reportingService.getDrawerDuration()?.key,
                      date_range: t.reportingService.getDrawerDateRange(),
                      archived: t.reportingService.getIncludeToggle(),
                    },
                    s = yield t.api.getSingleMemberActivities(a);
                  s.done &&
                    (s.body.sort((m, d) => {
                      const f = new Date(m.log_day);
                      return new Date(d.log_day).getTime() - f.getTime();
                    }),
                    (t.activityLogs = s.body)),
                    (t.loading = !1),
                    t.cdr.markForCheck();
                } catch {
                  (t.loading = !1), t.cdr.markForCheck();
                }
            })();
          }
          openTask(t, r) {
            t && r && this.drawer.openTask({ taskId: t, projectId: r });
          }
        }
        return (
          ((n = o).ɵfac = function (t) {
            return new (t || n)(
              e.Y36(e.sBO),
              e.Y36(M.U),
              e.Y36(U.e),
              e.Y36(W),
              e.Y36(Z.b),
              e.Y36(v.m),
              e.Y36(J.f)
            );
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["worklenz-single-member-activity-logs"]],
            inputs: {
              member: "member",
              isDurationLabelSelected: "isDurationLabelSelected",
            },
            decls: 4,
            vars: 4,
            consts: [
              [1, "d-block", "mt-3", 3, "nzLoading", "nzActive"],
              [4, "ngIf"],
              [4, "ngFor", "ngForOf"],
              [1, "pt-4", "pb-5", "text-center"],
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
              [1, "single-log"],
              [1, "breakdown-card", 3, "nzTitle"],
              [1, "single-day-logs"],
              ["cardTitle", ""],
              [
                "nz-typography",
                "",
                1,
                "line-28",
                "activity-log-text",
                3,
                "click",
              ],
              [1, "weight-500"],
              [3, "ngSwitch"],
              [4, "ngSwitchCase"],
              [1, "ms-2", "mt-1"],
              [1, "rounded-pill", 3, "nzColor"],
              [1, "me-0"],
              [1, "d-block", "mb-4"],
              [1, "log-day"],
              ["nz-typography", ""],
            ],
            template: function (t, r) {
              1 & t &&
                (e.TgZ(0, "nz-skeleton", 0),
                e.ynx(1),
                e.YNc(2, Pe, 6, 0, "ng-container", 1),
                e.YNc(3, ut, 9, 3, "ng-container", 2),
                e.BQk(),
                e.qZA()),
                2 & t &&
                  (e.Q6J("nzLoading", r.loading)("nzActive", !0),
                  e.xp6(2),
                  e.Q6J(
                    "ngIf",
                    !(null != r.activityLogs && r.activityLogs.length)
                  ),
                  e.xp6(1),
                  e.Q6J("ngForOf", r.activityLogs));
            },
            dependencies: [
              u.sg,
              u.O5,
              u.RF,
              u.n9,
              O.bd,
              P.ng,
              te.g,
              q.Zv,
              q.PD,
              Q.j,
              k.ZU,
              u.uU,
            ],
            styles: [
              ".no-data-img-holder[_ngcontent-%COMP%]{max-width:64px}.ant-tag.rounded-pill[_ngcontent-%COMP%]{border-radius:100px;color:#000000d9;margin-right:0}.weight-500[_ngcontent-%COMP%]{font-weight:500!important}.line-28[_ngcontent-%COMP%]{line-height:28px}.activity-log-text[_ngcontent-%COMP%]{cursor:pointer;transition:.15s all}.activity-log-text[_ngcontent-%COMP%]:hover{color:#1890ff}",
            ],
            changeDetection: 0,
          })),
          o
        );
      })();
      function Tt(n, o) {
        1 & n &&
          (e.ynx(0),
          e.TgZ(1, "div", 3)(2, "div", 4),
          e._UZ(3, "img", 5),
          e.qZA(),
          e.TgZ(4, "span", 6),
          e._uU(5, "No time logs to show."),
          e.qZA()(),
          e.BQk());
      }
      function zt(n, o) {
        if (1 & n) {
          const i = e.EpF();
          e.TgZ(0, "nz-timeline-item")(1, "span", 11),
            e.NdJ("click", function () {
              const a = e.CHM(i).$implicit,
                s = e.oxw(3);
              return e.KtG(s.openTask(a.task_id, a.project_id));
            }),
            e._uU(2, "Logged "),
            e.TgZ(3, "b", 12),
            e._uU(4),
            e.qZA(),
            e._uU(5, " for "),
            e.TgZ(6, "b", 12),
            e._uU(7),
            e.qZA(),
            e._uU(8, " in "),
            e.TgZ(9, "b", 12),
            e._uU(10),
            e.qZA(),
            e.TgZ(11, "nz-tag", 13),
            e._uU(12),
            e.qZA()()();
        }
        if (2 & n) {
          const i = o.$implicit;
          e.xp6(4),
            e.Oqu(i.time_spent_string),
            e.xp6(3),
            e.Oqu(i.task_name),
            e.xp6(3),
            e.Oqu(i.project_name),
            e.xp6(2),
            e.Oqu(i.task_key);
        }
      }
      function xt(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "nz-timeline"),
            e.YNc(1, zt, 13, 4, "nz-timeline-item", 2),
            e.qZA()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1), e.Q6J("ngForOf", i.logs);
        }
      }
      function St(n, o) {
        1 & n &&
          (e.ynx(0),
          e.TgZ(1, "div", 14),
          e._uU(2, " No time logs to show. "),
          e.qZA(),
          e.BQk());
      }
      function bt(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 15)(1, "span", 16),
            e._uU(2),
            e.ALo(3, "date"),
            e.qZA()()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(2), e.Oqu(e.xi3(3, 1, i.log_day, "MMM dd, YYYY"));
        }
      }
      function Ct(n, o) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "div", 7)(2, "nz-card", 8)(3, "div", 9),
            e.YNc(4, xt, 2, 1, "nz-timeline", 1),
            e.YNc(5, St, 3, 0, "ng-container", 1),
            e.qZA()(),
            e.YNc(6, bt, 4, 4, "ng-template", null, 10, e.W1O),
            e.qZA(),
            e._UZ(8, "nz-divider"),
            e.BQk()),
          2 & n)
        ) {
          const i = o.$implicit,
            t = e.MAs(7);
          e.xp6(2),
            e.Q6J("nzTitle", t),
            e.xp6(2),
            e.Q6J("ngIf", i.logs.length),
            e.xp6(1),
            e.Q6J("ngIf", !i.logs.length);
        }
      }
      let vt = (() => {
        var n;
        class o {
          constructor(t, r, a, s, m, d, f) {
            var h = this;
            (this.cdr = t),
              (this.api = r),
              (this.auth = a),
              (this.service = s),
              (this.drawer = m),
              (this.reportingService = d),
              (this.taskView = f),
              (this.member = null),
              (this.isDurationLabelSelected = !0),
              (this.loading = !1),
              (this.exporting = !1),
              (this.timeLogs = []),
              this.reportingService.onDrawerDateRangeChange
                .pipe((0, x.sL)())
                .subscribe(
                  (0, _.Z)(function* () {
                    yield h.getTimeLogs();
                  })
                ),
              this.reportingService.onDrawerDurationChange
                .pipe((0, x.sL)())
                .subscribe(
                  (0, _.Z)(function* () {
                    yield h.getTimeLogs();
                  })
                ),
              (0, R.T)(this.taskView.onRefresh)
                .pipe((0, x.sL)())
                .subscribe(
                  (0, _.Z)(function* () {
                    yield h.getTimeLogs();
                  })
                );
          }
          ngOnInit() {
            var t = this;
            return (0, _.Z)(function* () {
              yield t.getTimeLogs();
            })();
          }
          setDatesForKeys() {
            var t = this;
            return (0, _.Z)(function* () {
              if (t.reportingService.getDrawerDuration()?.key) {
                const r = t.reportingService.getDrawerDuration()?.key,
                  a = c()();
                switch (r) {
                  case p.WD:
                    const s = c()().subtract(1, "days");
                    t.reportingService.setDrawerDateRange([
                      s.toString(),
                      s.toString(),
                    ]);
                    break;
                  case p.ao:
                    const m = c()().subtract(1, "weeks");
                    t.reportingService.setDrawerDateRange([
                      m.toString(),
                      a.toString(),
                    ]);
                    break;
                  case p.ly:
                    const d = c()().subtract(1, "months");
                    t.reportingService.setDrawerDateRange([
                      d.toString(),
                      a.toString(),
                    ]);
                    break;
                  case p.o9:
                    const f = c()().subtract(3, "months");
                    t.reportingService.setDrawerDateRange([
                      f.toString(),
                      a.toString(),
                    ]);
                    break;
                  case p.$U:
                    const h = c()().subtract(1, "weeks").startOf("week"),
                      z = c()().subtract(1, "weeks").endOf("week");
                    t.reportingService.setDrawerDateRange([
                      h.toString(),
                      z.toString(),
                    ]);
                    break;
                  case p.lI:
                    const S = c()().subtract(1, "month").startOf("month"),
                      C = c()().subtract(1, "month").endOf("month");
                    t.reportingService.setDrawerDateRange([
                      S.toString(),
                      C.toString(),
                    ]);
                }
              }
            })();
          }
          getTimeLogs() {
            var t = this;
            return (0, _.Z)(function* () {
              if (t.member)
                try {
                  t.loading = !0;
                  const r = t.auth.getCurrentSession()?.team_id;
                  t.isDurationLabelSelected && (yield t.setDatesForKeys());
                  const a = {
                      team_member_id: t.member.id,
                      team_id: r,
                      duration: t.reportingService.getDrawerDuration()?.key,
                      date_range: t.reportingService.getDrawerDateRange(),
                      archived: t.reportingService.getIncludeToggle(),
                    },
                    s = yield t.api.getSingleMemberTimeLogs(a);
                  s.done &&
                    (s.body.sort((m, d) => {
                      const f = new Date(m.log_day);
                      return new Date(d.log_day).getTime() - f.getTime();
                    }),
                    (t.timeLogs = s.body)),
                    (t.loading = !1),
                    t.cdr.markForCheck();
                } catch {
                  (t.loading = !1), t.cdr.markForCheck();
                }
            })();
          }
          openTask(t, r) {
            t && r && this.drawer.openTask({ taskId: t, projectId: r });
          }
        }
        return (
          ((n = o).ɵfac = function (t) {
            return new (t || n)(
              e.Y36(e.sBO),
              e.Y36(M.U),
              e.Y36(U.e),
              e.Y36(W),
              e.Y36(Z.b),
              e.Y36(v.m),
              e.Y36(J.f)
            );
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["worklenz-single-member-time-logs"]],
            inputs: {
              member: "member",
              isDurationLabelSelected: "isDurationLabelSelected",
            },
            decls: 4,
            vars: 4,
            consts: [
              [1, "pt-3", 3, "nzActive", "nzLoading"],
              [4, "ngIf"],
              [4, "ngFor", "ngForOf"],
              [1, "pt-4", "pb-5", "text-center"],
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
              [1, "single-log"],
              [1, "breakdown-card", 3, "nzTitle"],
              [1, "single-day-logs"],
              ["cardTitle", ""],
              ["nz-typography", "", 1, "line-28", "time-log-text", 3, "click"],
              [1, "weight-500"],
              [1, "ms-2", "mt-1"],
              [1, "d-block", "mb-4"],
              [1, "log-day"],
              ["nz-typography", ""],
            ],
            template: function (t, r) {
              1 & t &&
                (e.TgZ(0, "nz-skeleton", 0),
                e.ynx(1),
                e.YNc(2, Tt, 6, 0, "ng-container", 1),
                e.YNc(3, Ct, 9, 3, "ng-container", 2),
                e.BQk(),
                e.qZA()),
                2 & t &&
                  (e.Q6J("nzActive", !0)("nzLoading", r.loading),
                  e.xp6(2),
                  e.Q6J("ngIf", !(null != r.timeLogs && r.timeLogs.length)),
                  e.xp6(1),
                  e.Q6J("ngForOf", r.timeLogs));
            },
            dependencies: [
              u.sg,
              u.O5,
              O.bd,
              P.ng,
              te.g,
              q.Zv,
              q.PD,
              Q.j,
              k.ZU,
              u.uU,
            ],
            styles: [
              ".no-data-img-holder[_ngcontent-%COMP%]{max-width:64px}.weight-500[_ngcontent-%COMP%]{font-weight:500!important}.line-28[_ngcontent-%COMP%]{line-height:28px}.time-log-text[_ngcontent-%COMP%]{cursor:pointer;transition:.15s all}.time-log-text[_ngcontent-%COMP%]:hover{color:#1890ff}",
            ],
            changeDetection: 0,
          })),
          o
        );
      })();
      function yt(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "button", 19), e._uU(1), e._UZ(2, "span", 20), e.qZA()),
          2 & n)
        ) {
          const i = e.oxw(2),
            t = e.MAs(6);
          e.Q6J("nzDropdownMenu", t)("nzTrigger", "click")(
            "nzPlacement",
            "bottomRight"
          ),
            e.xp6(1),
            e.hij(" ", i.durationLabel, " "),
            e.xp6(1),
            e.Q6J("nzType", "down");
        }
      }
      function wt(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "button", 21),
            e._uU(1, " Export "),
            e._UZ(2, "span", 20),
            e.qZA()),
          2 & n)
        ) {
          e.oxw();
          const i = e.MAs(9),
            t = e.oxw();
          e.Q6J("nzType", "primary")("nzDropdownMenu", i)(
            "nzPlacement",
            "bottomRight"
          )("nzLoading", t.exporting),
            e.xp6(2),
            e.Q6J("nzType", "down");
        }
      }
      function kt(n, o) {
        if (1 & n) {
          const i = e.EpF();
          e.TgZ(0, "div", 12)(1, "nz-breadcrumb")(2, "nz-breadcrumb-item"),
            e._uU(3),
            e.qZA()(),
            e.TgZ(4, "div", 13)(5, "nz-space"),
            e.YNc(6, yt, 3, 5, "button", 14),
            e.YNc(7, wt, 3, 5, "button", 15),
            e.TgZ(8, "nz-dropdown-menu", null, 16)(10, "ul", 17)(11, "li", 18),
            e.NdJ("click", function () {
              e.CHM(i);
              const r = e.oxw();
              return e.KtG(r.exportTimeLogs());
            }),
            e._uU(12, "Time Logs"),
            e.qZA(),
            e.TgZ(13, "li", 18),
            e.NdJ("click", function () {
              e.CHM(i);
              const r = e.oxw();
              return e.KtG(r.exportActivityLogs());
            }),
            e._uU(14, "Activity Logs"),
            e.qZA(),
            e.TgZ(15, "li", 18),
            e.NdJ("click", function () {
              e.CHM(i);
              const r = e.oxw();
              return e.KtG(r.exportTasks());
            }),
            e._uU(16, "Tasks"),
            e.qZA()()()()()();
        }
        if (2 & n) {
          const i = e.oxw();
          e.xp6(3), e.hij(" ", null == i.member ? null : i.member.name, " ");
        }
      }
      function Zt(n, o) {
        1 & n && e._UZ(0, "nz-tab", 29),
          2 & n && e.Q6J("nzTitle", o.$implicit.label);
      }
      function Dt(n, o) {
        if (
          (1 & n && e._UZ(0, "worklenz-rpt-single-member-drawer-overview", 30),
          2 & n)
        ) {
          const i = e.oxw(3);
          e.Q6J("isDurationLabelSelected", i.isDurationLabelSelected)(
            "isDurationLabelSelected_",
            i.isDurationLabelSelected_
          )("teamMemberId", i.member.id || "");
        }
      }
      function At(n, o) {
        if (
          (1 & n && e._UZ(0, "worklenz-single-member-time-logs", 31), 2 & n)
        ) {
          const i = e.oxw(3);
          e.Q6J("isDurationLabelSelected", i.isDurationLabelSelected)(
            "member",
            i.member
          );
        }
      }
      function Mt(n, o) {
        if (
          (1 & n && e._UZ(0, "worklenz-single-member-activity-logs", 31), 2 & n)
        ) {
          const i = e.oxw(3);
          e.Q6J("isDurationLabelSelected", i.isDurationLabelSelected)(
            "member",
            i.member
          );
        }
      }
      function Ot(n, o) {
        if ((1 & n && e._UZ(0, "worklenz-rpt-flat-task-list", 32), 2 & n)) {
          const i = e.oxw(3);
          e.Q6J("isDurationLabelSelected", i.isDurationLabelSelected)(
            "teamMemberId",
            i.member.id || ""
          )("onlySingleMember", !0);
        }
      }
      function Lt(n, o) {
        if (1 & n) {
          const i = e.EpF();
          e.ynx(0),
            e.TgZ(1, "nz-tabset", 23),
            e.NdJ("nzSelectedIndexChange", function (r) {
              e.CHM(i);
              const a = e.oxw(2);
              return e.KtG(a.selectedTabChange(r));
            }),
            e.YNc(2, Zt, 1, 1, "nz-tab", 24),
            e.qZA(),
            e.TgZ(3, "div"),
            e.ynx(4, 25),
            e.YNc(
              5,
              Dt,
              1,
              3,
              "worklenz-rpt-single-member-drawer-overview",
              26
            ),
            e.YNc(6, At, 1, 2, "worklenz-single-member-time-logs", 27),
            e.YNc(7, Mt, 1, 2, "worklenz-single-member-activity-logs", 27),
            e.YNc(8, Ot, 1, 3, "worklenz-rpt-flat-task-list", 28),
            e.BQk(),
            e.qZA(),
            e.BQk();
        }
        if (2 & n) {
          const i = e.oxw(2);
          e.xp6(1),
            e.Q6J("nzSelectedIndex", i.selectedTab),
            e.xp6(1),
            e.Q6J("ngForOf", i.tabs),
            e.xp6(2),
            e.Q6J("ngSwitch", i.selectedTab),
            e.xp6(1),
            e.Q6J("ngSwitchCase", 0),
            e.xp6(1),
            e.Q6J("ngSwitchCase", 1),
            e.xp6(1),
            e.Q6J("ngSwitchCase", 2),
            e.xp6(1),
            e.Q6J("ngSwitchCase", 3);
        }
      }
      function Qt(n, o) {
        if ((1 & n && e.YNc(0, Lt, 9, 7, "ng-container", 22), 2 & n)) {
          const i = e.oxw();
          e.Q6J("ngIf", i.member);
        }
      }
      function Rt(n, o) {
        if (1 & n) {
          const i = e.EpF();
          e.TgZ(0, "li", 33),
            e.NdJ("click", function () {
              const a = e.CHM(i).$implicit,
                s = e.oxw();
              return e.KtG(s.onDurationChange(a));
            }),
            e._uU(1),
            e.TgZ(2, "small", 34),
            e._uU(3),
            e.qZA()();
        }
        if (2 & n) {
          const i = o.$implicit,
            t = e.oxw();
          e.Q6J(
            "nzSelected",
            i.key ===
              (null == t.selectedDuration ? null : t.selectedDuration.key) &&
              !t.dateRange.length
          ),
            e.xp6(1),
            e.hij(" ", i.label, " "),
            e.xp6(2),
            e.hij(" ", i.dates, "");
        }
      }
      const Ut = function () {
        return { standalone: !0 };
      };
      let Jt = (() => {
        var n;
        class o {
          get durationLabel() {
            const t = "yy-MM-DD";
            return 2 == this.dateRange.length
              ? `${c()(this.dateRange[0]).format(t)} - ${c()(
                  this.dateRange[1]
                ).format(t)}`
              : this.selectedDuration
              ? this.selectedDuration.label
              : "Duration";
          }
          get selectedDuration() {
            return this.api.getDrawerDuration();
          }
          constructor(t, r, a, s, m, d, f) {
            (this.cdr = t),
              (this.service = r),
              (this.drawer = a),
              (this.exportApiService = s),
              (this.headerService = m),
              (this.auth = d),
              (this.api = f),
              (this.selectProject = new e.vpe()),
              (this.isDurationLabelSelected = !0),
              (this.member = null),
              (this.team = null),
              (this.show = !1),
              (this.exporting = !1),
              (this.isDurationLabelSelected_ = !1),
              (this.tabs = [
                { label: "Overview", tab: "overview" },
                { label: "Time Logs", tab: "time-logs" },
                { label: "Activity Logs", tab: "activity-logs" },
                { label: "Tasks", tab: "tasks" },
              ]),
              (this.selectedTab = 0),
              (this.dateRange = []),
              (this.durations = [
                {
                  label: "Yesterday",
                  key: p.WD,
                  dates: c()()
                    .subtract(1, "days")
                    .format("MMM,DD YYYY")
                    .toString(),
                },
                {
                  label: "Last 7 days",
                  key: p.ao,
                  dates:
                    c()()
                      .subtract(1, "weeks")
                      .format("MMM,DD YYYY")
                      .toString() +
                    " - " +
                    c()().format("MMM,DD YYYY").toString(),
                },
                {
                  label: "Last week",
                  key: p.$U,
                  dates:
                    c()()
                      .subtract(1, "weeks")
                      .startOf("week")
                      .format("MMM,DD YYYY")
                      .toString() +
                    " - " +
                    c()()
                      .subtract(1, "weeks")
                      .endOf("week")
                      .format("MMM,DD YYYY")
                      .toString(),
                },
                {
                  label: "Last 30 days",
                  key: p.ly,
                  dates:
                    c()()
                      .subtract(1, "month")
                      .format("MMM,DD YYYY")
                      .toString() +
                    " - " +
                    c()().format("MMM,DD YYYY").toString(),
                },
                {
                  label: "Last month",
                  key: p.lI,
                  dates:
                    c()()
                      .subtract(1, "month")
                      .startOf("month")
                      .format("MMM,DD YYYY")
                      .toString() +
                    " - " +
                    c()()
                      .subtract(1, "month")
                      .endOf("month")
                      .format("MMM,DD YYYY")
                      .toString(),
                },
                {
                  label: "Last 3 months",
                  key: p.o9,
                  dates:
                    c()()
                      .subtract(3, "months")
                      .format("MMM,DD YYYY")
                      .toString() +
                    " - " +
                    c()().format("MMM,DD YYYY").toString(),
                },
                { label: "All time", key: p.Si, dates: "" },
              ]),
              this.drawer.onOpenSingleMember
                .pipe((0, x.sL)())
                .subscribe((h) => {
                  this.open(h);
                }),
              this.drawer.onOpenSingleMemberTimeLogs
                .pipe((0, x.sL)())
                .subscribe(() => {
                  (this.selectedTab = 1), this.cdr.markForCheck();
                });
          }
          open(t) {
            var r = this;
            return (0, _.Z)(function* () {
              yield r.setInitialValues(),
                (r.team = r.service.getCurrentTeam()),
                (r.member = t.member),
                (r.show = !0),
                r.cdr.markForCheck();
            })();
          }
          closeDrawer() {
            (this.show = !1),
              (this.member = null),
              (this.team = null),
              (this.selectedTab = 0),
              (this.headerService.dateRange = []);
          }
          exportTimeLogs() {
            var t = this;
            return (0, _.Z)(function* () {
              if (t.member && t.auth.getCurrentSession()?.team_id)
                try {
                  (t.exporting = !0),
                    t.isDurationLabelSelected && (yield t.setDatesForKeys());
                  const r = {
                    team_member_id: t.member.id,
                    team_id: t.auth.getCurrentSession()?.team_id,
                    duration: t.service.getDrawerDuration()?.key,
                    date_range: t.service.getDrawerDateRange(),
                    member_name: t.member.name,
                    team_name: t.team?.name ? t.team.name : null,
                    archived: t.service.getIncludeToggle(),
                  };
                  t.exportApiService.exportMemberTimeLogs(r),
                    (t.exporting = !1),
                    t.cdr.markForCheck();
                } catch (r) {
                  (t.exporting = !1), (0, A.tu)(r), t.cdr.markForCheck();
                }
            })();
          }
          exportActivityLogs() {
            var t = this;
            return (0, _.Z)(function* () {
              if (t.member && t.auth.getCurrentSession()?.team_id)
                try {
                  (t.exporting = !0),
                    t.isDurationLabelSelected && (yield t.setDatesForKeys());
                  const r = {
                    team_member_id: t.member.id,
                    team_id: t.auth.getCurrentSession()?.team_id,
                    duration: t.service.getDrawerDuration()?.key,
                    date_range: t.service.getDrawerDateRange(),
                    member_name: t.member.name,
                    team_name: t.team?.name ? t.team.name : null,
                    archived: t.service.getIncludeToggle(),
                  };
                  t.exportApiService.exportMemberActivityLogs(r),
                    (t.exporting = !1),
                    t.cdr.markForCheck();
                } catch (r) {
                  (t.exporting = !1), (0, A.tu)(r), t.cdr.markForCheck();
                }
            })();
          }
          exportTasks() {
            var t = this;
            return (0, _.Z)(function* () {
              if (t.member)
                try {
                  (t.exporting = !0),
                    t.isDurationLabelSelected && (yield t.setDatesForKeys());
                  const r = {
                    duration: t.service.getDrawerDuration()?.key,
                    date_range: t.service.getDrawerDateRange(),
                    only_single_member: !0,
                    archived: t.service.getIncludeToggle(),
                  };
                  t.exportApiService.exportMemberTasks(
                    t.member.id,
                    t.member.name,
                    t.team?.name,
                    r
                  ),
                    (t.exporting = !1);
                } catch (r) {
                  (t.exporting = !1), (0, A.tu)(r);
                }
            })();
          }
          setInitialValues() {
            const t = this.api.getDrawerDateRange();
            if (
              (2 === t.length &&
                !this.isDurationLabelSelected &&
                (this.dateRange = t),
              !this.api.getDrawerDuration())
            )
              return this.api.setDrawerDuration(
                this.durations.find((r) => r.key === p.ao) || null
              );
            this.api.setDrawerDuration(this.api.getDrawerDuration());
          }
          selectedTabChange(t) {
            switch (((this.selectedTab = t), this.selectedTab)) {
              case 0:
                this.drawer.emitGetSingleMemberOverview();
                break;
              case 1:
                this.drawer.emitGetSingleMemberTimeLogs();
                break;
              case 2:
                this.drawer.emitGetSingleMemberActivityLogs();
                break;
              case 3:
                this.drawer.emitGetSingleMemberProjects();
                break;
              case 4:
                this.drawer.emitGetSingleMemberTasks();
            }
          }
          onDurationChange(t) {
            (this.isDurationLabelSelected = !0),
              setTimeout(() => {
                this.api.setDrawerDuration(t),
                  (this.dateRange = []),
                  this.api.setDrawerDateRange(this.dateRange),
                  this.api.emitDrawerDurationChanged();
              }, 500);
          }
          customDateChange() {
            (this.isDurationLabelSelected = !1),
              setTimeout(() => {
                this.api.setDrawerDateRange(this.dateRange),
                  this.api.emitDrawerDateRangeChanged();
              }, 500);
          }
          setDatesForKeys() {
            var t = this;
            return (0, _.Z)(function* () {
              if (t.service.getDrawerDuration()?.key) {
                const r = t.service.getDrawerDuration()?.key,
                  a = c()();
                switch (r) {
                  case p.WD:
                    const s = c()().subtract(1, "days");
                    t.service.setDrawerDateRange([s.toString(), s.toString()]);
                    break;
                  case p.ao:
                    const m = c()().subtract(1, "weeks");
                    t.service.setDrawerDateRange([m.toString(), a.toString()]);
                    break;
                  case p.ly:
                    const d = c()().subtract(1, "months");
                    t.service.setDrawerDateRange([d.toString(), a.toString()]);
                    break;
                  case p.o9:
                    const f = c()().subtract(3, "months");
                    t.service.setDrawerDateRange([f.toString(), a.toString()]);
                    break;
                  case p.$U:
                    const h = c()().subtract(1, "weeks").startOf("week"),
                      z = c()().subtract(1, "weeks").endOf("week");
                    t.service.setDrawerDateRange([h.toString(), z.toString()]);
                    break;
                  case p.lI:
                    const S = c()().subtract(1, "month").startOf("month"),
                      C = c()().subtract(1, "month").endOf("month");
                    t.service.setDrawerDateRange([S.toString(), C.toString()]);
                }
              }
            })();
          }
        }
        return (
          ((n = o).ɵfac = function (t) {
            return new (t || n)(
              e.Y36(e.sBO),
              e.Y36(v.m),
              e.Y36(Z.b),
              e.Y36(re.O),
              e.Y36(W),
              e.Y36(U.e),
              e.Y36(v.m)
            );
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["worklenz-rpt-single-member-drawer"]],
            inputs: { isDurationLabelSelected: "isDurationLabelSelected" },
            outputs: { selectProject: "selectProject" },
            decls: 18,
            vars: 11,
            consts: [
              [
                "nzPlacement",
                "right",
                3,
                "nzClosable",
                "nzVisible",
                "nzTitle",
                "nzContent",
                "nzWidth",
                "nzOnClose",
              ],
              ["memberDrawerTitle", ""],
              ["memberDrawerContent", ""],
              ["timeSelector", "nzDropdownMenu"],
              [
                "nz-menu",
                "",
                "nzSelectable",
                "",
                2,
                "max-height",
                "330px",
                "overflow-y",
                "auto",
              ],
              [
                "nz-menu-item",
                "",
                3,
                "nzSelected",
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              ["nz-menu-divider", ""],
              [1, "px-2", "pb-2", "pt-2", "mt-1", "custom-dropdown-range-li"],
              ["nz-form", ""],
              [1, "d-block", "mt-1"],
              [1, "w-100", 3, "ngModel", "ngModelOptions", "ngModelChange"],
              [
                "nz-button",
                "",
                1,
                "mt-2",
                "ms-auto",
                "d-block",
                3,
                "nzType",
                "nzSize",
                "click",
              ],
              [1, "d-flex", "align-items-center", "w-100"],
              [1, "ms-auto"],
              [
                "nz-button",
                "",
                "nz-dropdown",
                "",
                3,
                "nzDropdownMenu",
                "nzTrigger",
                "nzPlacement",
                4,
                "nzSpaceItem",
              ],
              [
                "nz-button",
                "",
                "nz-dropdown",
                "",
                3,
                "nzType",
                "nzDropdownMenu",
                "nzPlacement",
                "nzLoading",
                4,
                "nzSpaceItem",
              ],
              ["exportDropdown", "nzDropdownMenu"],
              ["nz-menu", ""],
              ["nz-menu-item", "", 3, "click"],
              [
                "nz-button",
                "",
                "nz-dropdown",
                "",
                3,
                "nzDropdownMenu",
                "nzTrigger",
                "nzPlacement",
              ],
              ["nz-icon", "", 3, "nzType"],
              [
                "nz-button",
                "",
                "nz-dropdown",
                "",
                3,
                "nzType",
                "nzDropdownMenu",
                "nzPlacement",
                "nzLoading",
              ],
              [4, "ngIf"],
              ["nzType", "card", 3, "nzSelectedIndex", "nzSelectedIndexChange"],
              [3, "nzTitle", 4, "ngFor", "ngForOf"],
              [3, "ngSwitch"],
              [
                3,
                "isDurationLabelSelected",
                "isDurationLabelSelected_",
                "teamMemberId",
                4,
                "ngSwitchCase",
              ],
              [3, "isDurationLabelSelected", "member", 4, "ngSwitchCase"],
              [
                3,
                "isDurationLabelSelected",
                "teamMemberId",
                "onlySingleMember",
                4,
                "ngSwitchCase",
              ],
              [3, "nzTitle"],
              [
                3,
                "isDurationLabelSelected",
                "isDurationLabelSelected_",
                "teamMemberId",
              ],
              [3, "isDurationLabelSelected", "member"],
              [
                3,
                "isDurationLabelSelected",
                "teamMemberId",
                "onlySingleMember",
              ],
              ["nz-menu-item", "", 3, "nzSelected", "click"],
              [1, "ms-auto", "text-secondary"],
            ],
            template: function (t, r) {
              if (
                (1 & t &&
                  (e.TgZ(0, "nz-drawer", 0),
                  e.NdJ("nzOnClose", function () {
                    return r.closeDrawer();
                  }),
                  e.qZA(),
                  e.YNc(1, kt, 17, 1, "ng-template", null, 1, e.W1O),
                  e.YNc(3, Qt, 1, 1, "ng-template", null, 2, e.W1O),
                  e.TgZ(5, "nz-dropdown-menu", null, 3)(7, "ul", 4),
                  e.YNc(8, Rt, 4, 3, "li", 5),
                  e._UZ(9, "li", 6),
                  e.TgZ(10, "li", 7)(11, "form", 8)(12, "label"),
                  e._uU(13, "Custom range"),
                  e.qZA(),
                  e.TgZ(14, "div", 9)(15, "nz-range-picker", 10),
                  e.NdJ("ngModelChange", function (s) {
                    return (r.dateRange = s);
                  }),
                  e.qZA()(),
                  e.TgZ(16, "button", 11),
                  e.NdJ("click", function () {
                    return r.customDateChange();
                  }),
                  e._uU(17, " Filter "),
                  e.qZA()()()()()),
                2 & t)
              ) {
                const a = e.MAs(2),
                  s = e.MAs(4);
                e.Q6J("nzClosable", !0)("nzVisible", r.show)("nzTitle", a)(
                  "nzContent",
                  s
                )("nzWidth", 900),
                  e.xp6(8),
                  e.Q6J("ngForOf", r.durations),
                  e.xp6(7),
                  e.Q6J("ngModel", r.dateRange)(
                    "ngModelOptions",
                    e.DdM(10, Ut)
                  ),
                  e.xp6(1),
                  e.Q6J("nzType", "primary")("nzSize", "small");
              }
            },
            dependencies: [
              u.sg,
              u.O5,
              u.RF,
              u.n9,
              b._Y,
              b.JJ,
              b.JL,
              b.On,
              b.F,
              B.ix,
              Y.w,
              le.dQ,
              $.uw,
              $.wS,
              K.Vz,
              y.wO,
              y.r9,
              y.YV,
              L.cm,
              L.RR,
              L.wA,
              ce.Lr,
              D.Ls,
              w.NU,
              w.$1,
              V.xH,
              V.xw,
              X.Dg,
              X.MO,
              Ce.X,
              je,
              ft,
              vt,
            ],
            changeDetection: 0,
          })),
          o
        );
      })();
      var ge = l(62612),
        _e = l(90565),
        me = l(9172);
      function Yt(n, o) {
        1 & n && (e.TgZ(0, "small", 23), e._UZ(1, "span", 24), e.qZA()),
          2 & n &&
            (e.Q6J("nzType", "secondary"),
            e.xp6(1),
            e.Q6J("nzType", "double-right")("nzTheme", "outline"));
      }
      function Nt(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "nz-tag", 19), e._uU(1), e.ALo(2, "ellipsis"), e.qZA()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.Q6J("nzColor", i.phase_color + "69"),
            e.xp6(1),
            e.Oqu(e.xi3(2, 2, i.phase_name, 12));
        }
      }
      function It(n, o) {
        1 & n && (e.TgZ(0, "span"), e._uU(1, "-"), e.qZA());
      }
      function jt(n, o) {
        if (1 & n) {
          const i = e.EpF();
          e.TgZ(0, "tr", 16)(1, "td", 17),
            e.NdJ("click", function () {
              const a = e.CHM(i).$implicit,
                s = e.oxw(3);
              return e.KtG(s.openTask(a));
            }),
            e.YNc(2, Yt, 2, 3, "small", 18),
            e._uU(3),
            e.qZA(),
            e.TgZ(4, "td")(5, "nz-tag", 19),
            e._uU(6),
            e.ALo(7, "ellipsis"),
            e.qZA()(),
            e.TgZ(8, "td")(9, "nz-tag", 19),
            e._uU(10),
            e.ALo(11, "ellipsis"),
            e.qZA()(),
            e.TgZ(12, "td"),
            e.YNc(13, Nt, 3, 5, "nz-tag", 20),
            e.YNc(14, It, 2, 0, "span", 21),
            e.qZA(),
            e.TgZ(15, "td"),
            e._uU(16),
            e.ALo(17, "date"),
            e.qZA(),
            e.TgZ(18, "td"),
            e._uU(19),
            e.ALo(20, "date"),
            e.qZA(),
            e.TgZ(21, "td", 22),
            e._uU(22),
            e.qZA(),
            e.TgZ(23, "td", 22),
            e._uU(24),
            e.qZA(),
            e.TgZ(25, "td", 22),
            e._uU(26),
            e.qZA(),
            e.TgZ(27, "td", 22),
            e._uU(28),
            e.qZA()();
        }
        if (2 & n) {
          const i = o.$implicit;
          e.xp6(2),
            e.Q6J("ngIf", i.parent_task_id),
            e.xp6(1),
            e.hij(" ", i.name, " "),
            e.xp6(2),
            e.Q6J("nzColor", i.status_color + "69"),
            e.xp6(1),
            e.Oqu(e.xi3(7, 14, i.status_name, 12)),
            e.xp6(3),
            e.Q6J("nzColor", i.priority_color + "69"),
            e.xp6(1),
            e.Oqu(e.xi3(11, 17, i.priority_name, 12)),
            e.xp6(3),
            e.Q6J("ngIf", i.phase_name),
            e.xp6(1),
            e.Q6J("ngIf", !i.phase_name),
            e.xp6(2),
            e.Oqu(e.xi3(17, 20, i.end_date, "MMM dd,yyyy") || "-"),
            e.xp6(3),
            e.Oqu(e.xi3(20, 23, i.completed_at, "MMM dd,yyyy") || "-"),
            e.xp6(3),
            e.Oqu(i.overdue_days || "-"),
            e.xp6(2),
            e.Oqu(i.estimated_string),
            e.xp6(2),
            e.Oqu(i.time_spent_string),
            e.xp6(2),
            e.Oqu(i.overlogged_time_string);
        }
      }
      function Pt(n, o) {
        if ((1 & n && e._UZ(0, "nz-badge", 25), 2 & n)) {
          const i = e.oxw().$implicit;
          e.Q6J("nzColor", i.color_code.slice(0, 7))(
            "nzText",
            i.name + " (" + i.tasks.length + ")"
          );
        }
      }
      const qt = function () {
        return { x: "300px" };
      };
      function Et(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "nz-collapse-panel", 8)(1, "nz-table", 9, 10),
            e.ALo(3, "searchByName"),
            e.TgZ(4, "thead")(5, "tr")(6, "th", 11),
            e._uU(7, "Task"),
            e.qZA(),
            e.TgZ(8, "th", 12),
            e._uU(9, "Status"),
            e.qZA(),
            e.TgZ(10, "th", 12),
            e._uU(11, "Priority"),
            e.qZA(),
            e.TgZ(12, "th", 12),
            e._uU(13, "Phase"),
            e.qZA(),
            e.TgZ(14, "th", 12),
            e._uU(15, "Due Date"),
            e.qZA(),
            e.TgZ(16, "th", 12),
            e._uU(17, "Completed On"),
            e.qZA(),
            e.TgZ(18, "th", 13),
            e._uU(19, "Days Overdue"),
            e.qZA(),
            e.TgZ(20, "th", 13),
            e._uU(21, "Estimated Time"),
            e.qZA(),
            e.TgZ(22, "th", 13),
            e._uU(23, "Logged Time"),
            e.qZA(),
            e.TgZ(24, "th", 13),
            e._uU(25, "Overlogged Time"),
            e.qZA()()(),
            e.TgZ(26, "tbody"),
            e.YNc(27, jt, 29, 26, "tr", 14),
            e.qZA()(),
            e.YNc(28, Pt, 1, 2, "ng-template", null, 15, e.W1O),
            e.qZA()),
          2 & n)
        ) {
          const i = o.$implicit,
            t = e.MAs(2),
            r = e.MAs(29),
            a = e.oxw(2),
            s = e.MAs(8);
          e.Q6J("nzHeader", r)("nzActive", !1),
            e.xp6(1),
            e.Q6J("nzSize", "small")(
              "nzData",
              e.xi3(3, 20, i.tasks, a.searchText)
            )("nzShowPagination", !0)("nzHideOnSinglePage", !0)(
              "nzScroll",
              e.DdM(23, qt)
            )("nzNoResult", s),
            e.xp6(5),
            e.Q6J("nzWidth", "300px"),
            e.xp6(2),
            e.Q6J("nzWidth", "120px"),
            e.xp6(2),
            e.Q6J("nzWidth", "120px"),
            e.xp6(2),
            e.Q6J("nzWidth", "150px"),
            e.xp6(2),
            e.Q6J("nzWidth", "120px"),
            e.xp6(2),
            e.Q6J("nzWidth", "120px"),
            e.xp6(2),
            e.Q6J("nzWidth", "120px"),
            e.xp6(2),
            e.Q6J("nzWidth", "120px"),
            e.xp6(2),
            e.Q6J("nzWidth", "120px"),
            e.xp6(2),
            e.Q6J("nzWidth", "180px"),
            e.xp6(3),
            e.Q6J("ngForOf", t.data)("ngForTrackBy", a.trackByTask);
        }
      }
      function Ft(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "nz-skeleton", 5)(1, "nz-collapse", 6),
            e.YNc(2, Et, 30, 24, "nz-collapse-panel", 7),
            e.qZA()()),
          2 & n)
        ) {
          const i = e.oxw();
          e.Q6J("nzLoading", i.loading)("nzActive", !0),
            e.xp6(2),
            e.Q6J("ngForOf", i.groups)("ngForTrackBy", i.trackByGroup);
        }
      }
      function Wt(n, o) {
        if ((1 & n && (e.TgZ(0, "span", 26), e._uU(1), e.qZA()), 2 & n)) {
          const i = e.oxw();
          e.xp6(1), e.hij("", i.titleText, "'s Tasks");
        }
      }
      function Kt(n, o) {
        1 & n && e._UZ(0, "span", 27);
      }
      function Ht(n, o) {
        1 & n &&
          (e.TgZ(0, "div", 28)(1, "div", 29),
          e._UZ(2, "img", 30),
          e.qZA(),
          e.TgZ(3, "span", 31),
          e._uU(4, "No tasks to show."),
          e.qZA()());
      }
      let Gt = (() => {
        var n;
        class o {
          constructor(t, r, a, s, m, d, f) {
            var h = this;
            (this.cdr = t),
              (this.auth = r),
              (this.reportingService = a),
              (this.drawer = s),
              (this.api = m),
              (this.socket = d),
              (this.taskView = f),
              (this.show = !1),
              (this.loading = !1),
              (this.titleText = null),
              (this.searchText = null),
              (this.groups = null),
              (this.teamMemberId = null),
              (this.refresh = (0, _.Z)(function* () {
                h.teamMemberId &&
                  (yield h.get({ team_member_id: h.teamMemberId }));
              })),
              this.drawer.onOpenSingleMemberTaskStat
                .pipe((0, x.sL)())
                .subscribe((z) => {
                  z &&
                    ((this.teamMemberId = z.team_member_id),
                    (this.show = !0),
                    this.cdr.markForCheck(),
                    setTimeout(
                      (0, _.Z)(function* () {
                        yield h.get(z);
                      }),
                      50
                    ));
                }),
              (0, R.T)(this.taskView.onRefresh)
                .pipe((0, x.sL)())
                .subscribe(
                  (0, _.Z)(function* () {
                    yield h.refresh();
                  })
                );
          }
          ngOnInit() {
            this.listenSockets();
          }
          listenSockets() {
            this.socket.on(g.C.TASK_NAME_CHANGE.toString(), this.refresh),
              this.socket.on(g.C.TASK_STATUS_CHANGE.toString(), this.refresh),
              this.socket.on(g.C.TASK_PRIORITY_CHANGE.toString(), this.refresh),
              this.socket.on(g.C.TASK_END_DATE_CHANGE.toString(), this.refresh),
              this.socket.on(
                g.C.QUICK_ASSIGNEES_UPDATE.toString(),
                this.refresh
              ),
              this.socket.on(g.C.TASK_PHASE_CHANGE.toString(), this.refresh),
              this.socket.on(
                g.C.TASK_TIME_ESTIMATION_CHANGE.toString(),
                this.refresh
              ),
              this.socket.on(g.C.TASK_TIMER_STOP.toString(), this.refresh);
          }
          ngOnDestroy() {
            this.socket.removeListener(
              g.C.TASK_NAME_CHANGE.toString(),
              this.refresh
            ),
              this.socket.removeListener(
                g.C.TASK_STATUS_CHANGE.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                g.C.TASK_PRIORITY_CHANGE.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                g.C.TASK_END_DATE_CHANGE.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                g.C.QUICK_ASSIGNEES_UPDATE.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                g.C.TASK_PHASE_CHANGE.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                g.C.TASK_TIME_ESTIMATION_CHANGE.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                g.C.TASK_TIMER_STOP.toString(),
                this.refresh
              );
          }
          get(t) {
            var r = this;
            return (0, _.Z)(function* () {
              if (t) {
                try {
                  r.loading = !0;
                  const a = {
                      team_member_id: t.team_member_id,
                      team_id: r.auth.getCurrentSession()?.team_id,
                      duration: r.reportingService.getDrawerDuration()?.key,
                      date_range: r.reportingService.getDrawerDateRange(),
                      archived: r.reportingService.getIncludeToggle(),
                    },
                    s = yield r.api.getMemberTasksStats(a);
                  s.done &&
                    ((r.groups = s.body.groups),
                    (r.titleText = s.body.team_member_name)),
                    (r.loading = !1);
                } catch (a) {
                  (r.loading = !1), (0, A.tu)(a);
                }
                r.cdr.markForCheck();
              }
            })();
          }
          trackByGroup(t, r) {
            return r.name;
          }
          trackByTask(t, r) {
            return r.id;
          }
          reset() {
            (this.teamMemberId = null),
              (this.show = !1),
              (this.loading = !1),
              (this.titleText = null),
              (this.groups = null),
              this.cdr.markForCheck();
          }
          close() {
            this.reset();
          }
          openTask(t) {
            t.id &&
              t.project_id &&
              this.drawer.openTask({ taskId: t.id, projectId: t.project_id });
          }
        }
        return (
          ((n = o).ɵfac = function (t) {
            return new (t || n)(
              e.Y36(e.sBO),
              e.Y36(U.e),
              e.Y36(v.m),
              e.Y36(Z.b),
              e.Y36(M.U),
              e.Y36(H.s),
              e.Y36(J.f)
            );
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["worklenz-rpt-single-member-stat"]],
            decls: 9,
            vars: 7,
            consts: [
              [
                3,
                "nzClosable",
                "nzVisible",
                "nzPlacement",
                "nzTitle",
                "nzContent",
                "nzWidth",
                "nzCloseIcon",
                "nzOnClose",
              ],
              ["content", ""],
              ["title", ""],
              ["closeIcon", ""],
              ["emptyData", ""],
              [
                1,
                "d-block",
                "loading-custom-height",
                3,
                "nzLoading",
                "nzActive",
              ],
              ["nzGhost", ""],
              [
                3,
                "nzHeader",
                "nzActive",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              [3, "nzHeader", "nzActive"],
              [
                3,
                "nzSize",
                "nzData",
                "nzShowPagination",
                "nzHideOnSinglePage",
                "nzScroll",
                "nzNoResult",
              ],
              ["memberTable", ""],
              ["nzLeft", "", 3, "nzWidth"],
              [3, "nzWidth"],
              [1, "text-center", 3, "nzWidth"],
              [
                "class",
                "cursor-pointer",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              ["groupNameTemplate", ""],
              [1, "cursor-pointer"],
              ["nzLeft", "", 2, "z-index", "11", 3, "click"],
              ["nz-typography", "", 3, "nzType", 4, "ngIf"],
              [3, "nzColor"],
              [3, "nzColor", 4, "ngIf"],
              [4, "ngIf"],
              [1, "text-center"],
              ["nz-typography", "", 3, "nzType"],
              ["nz-icon", "", 3, "nzType", "nzTheme"],
              [1, "mt-1", 3, "nzColor", "nzText"],
              ["nz-typography", "", 1, "title-text"],
              ["nz-icon", "", "nzType", "close", "nzTheme", "outline"],
              [1, "pt-2", "pb-3"],
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
            template: function (t, r) {
              if (
                (1 & t &&
                  (e.TgZ(0, "nz-drawer", 0),
                  e.NdJ("nzOnClose", function () {
                    return r.close();
                  }),
                  e.qZA(),
                  e.YNc(1, Ft, 3, 4, "ng-template", null, 1, e.W1O),
                  e.YNc(3, Wt, 2, 1, "ng-template", null, 2, e.W1O),
                  e.YNc(5, Kt, 1, 0, "ng-template", null, 3, e.W1O),
                  e.YNc(7, Ht, 5, 0, "ng-template", null, 4, e.W1O)),
                2 & t)
              ) {
                const a = e.MAs(2),
                  s = e.MAs(4),
                  m = e.MAs(6);
                e.Q6J("nzClosable", !0)("nzVisible", r.show)(
                  "nzPlacement",
                  "right"
                )("nzTitle", s)("nzContent", a)("nzWidth", 800)(
                  "nzCloseIcon",
                  m
                );
              }
            },
            dependencies: [
              u.sg,
              u.O5,
              Y.w,
              D.Ls,
              k.ZU,
              P.ng,
              I.x7,
              Q.j,
              T.N8,
              T.Uo,
              T._C,
              T.Om,
              T.p0,
              T.$Z,
              T.qn,
              K.Vz,
              _e.Zv,
              _e.yH,
              u.uU,
              me.g,
              ee.p,
            ],
            styles: [
              ".title-text[_ngcontent-%COMP%]{font-weight:500;font-size:14px}nz-tag[_ngcontent-%COMP%]{border-radius:20px;color:#000000d9}.no-data-img-holder[_ngcontent-%COMP%]{max-width:42px}",
            ],
            changeDetection: 0,
          })),
          o
        );
      })();
      var Bt = l(76271),
        de = l(2919);
      function $t(n, o) {
        if ((1 & n && e._UZ(0, "nz-badge", 19), 2 & n)) {
          const i = e.oxw().$implicit;
          e.Q6J("nzColor", i.color_code);
        }
      }
      function Vt(n, o) {
        if ((1 & n && (e.TgZ(0, "span", 20), e._uU(1), e.qZA()), 2 & n)) {
          const i = e.oxw().$implicit;
          e.Q6J("nzTooltipTitle", i.name), e.xp6(1), e.Oqu(i.name);
        }
      }
      function Xt(n, o) {
        if ((1 & n && (e.TgZ(0, "span", 22), e._uU(1), e.qZA()), 2 & n)) {
          const i = e.oxw(2).$implicit;
          e.xp6(1), e.hij("", i.days_left, " days overdue");
        }
      }
      function en(n, o) {
        1 & n && (e.TgZ(0, "span", 24), e._uU(1, "Today"), e.qZA());
      }
      function tn(n, o) {
        if ((1 & n && (e.TgZ(0, "span", 24), e._uU(1), e.qZA()), 2 & n)) {
          const i = e.oxw(3).$implicit;
          e.xp6(1), e.hij(" ", i.days_left, " days left");
        }
      }
      function nn(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "span"),
            e.YNc(1, en, 2, 0, "span", 23),
            e.YNc(2, tn, 2, 1, "span", 23),
            e.qZA()),
          2 & n)
        ) {
          const i = e.oxw(2).$implicit;
          e.xp6(1),
            e.Q6J("ngIf", i.is_today),
            e.xp6(1),
            e.Q6J("ngIf", !i.is_today);
        }
      }
      function rn(n, o) {
        if (
          (1 & n &&
            (e.ynx(0)(1, 16),
            e.YNc(2, Xt, 2, 1, "span", 21),
            e.YNc(3, nn, 3, 2, "span", 17),
            e.BQk()()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J("ngSwitch", i.is_overdue),
            e.xp6(1),
            e.Q6J("ngSwitchCase", !0),
            e.xp6(1),
            e.Q6J("ngSwitchCase", !1);
        }
      }
      function on(n, o) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "nz-tag", 19),
            e._uU(2),
            e.ALo(3, "ellipsis"),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J("nzColor", i.health_color + "69"),
            e.xp6(1),
            e.Oqu(e.xi3(3, 2, i.project_health, 12));
        }
      }
      function an(n, o) {
        1 & n && e._UZ(0, "worklenz-na");
      }
      function sn(n, o) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "nz-tag", 19),
            e._uU(2),
            e.ALo(3, "ellipsis"),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Akn("color: white"),
            e.Q6J("nzColor", i.category_color),
            e.xp6(1),
            e.Oqu(e.xi3(3, 4, i.category_name, 12));
        }
      }
      function ln(n, o) {
        1 & n && e._UZ(0, "worklenz-na");
      }
      function cn(n, o) {
        if (
          (1 & n &&
            (e.ynx(0, 25),
            e._UZ(1, "nz-avatar", 26),
            e.ALo(2, "firstCharUpper"),
            e.TgZ(3, "span"),
            e._uU(4),
            e.ALo(5, "ellipsis"),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const i = e.oxw().$implicit,
            t = e.oxw(2);
          e.Q6J("nz-tooltip", i.project_manager.name),
            e.xp6(1),
            e.Udp(
              "background-color",
              i.project_manager.avatar_url
                ? "#ececec"
                : t.getColor(i.project_manager.name)
            ),
            e.Q6J("nzSize", 28)("nzText", e.lcZ(2, 7, i.project_manager.name))(
              "nzSrc",
              i.project_manager.avatar_url
            ),
            e.xp6(3),
            e.Oqu(e.xi3(5, 9, i.project_manager.name, 15));
        }
      }
      function pn(n, o) {
        1 & n && e._UZ(0, "worklenz-na");
      }
      function gn(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr")(1, "td", 11)(2, "nz-space"),
            e.YNc(3, $t, 1, 1, "nz-badge", 12),
            e.YNc(4, Vt, 2, 2, "span", 13),
            e.qZA()(),
            e.TgZ(5, "td"),
            e._uU(6),
            e.ALo(7, "date"),
            e.qZA(),
            e.TgZ(8, "td"),
            e._uU(9),
            e.ALo(10, "date"),
            e.qZA(),
            e.TgZ(11, "td"),
            e.YNc(12, rn, 4, 3, "ng-container", 14),
            e.qZA(),
            e.TgZ(13, "td"),
            e._uU(14),
            e.qZA(),
            e.TgZ(15, "td"),
            e._uU(16),
            e.qZA(),
            e.TgZ(17, "td"),
            e._UZ(18, "span", 15),
            e.ALo(19, "safeString"),
            e._uU(20),
            e.qZA(),
            e.TgZ(21, "td", 16),
            e.YNc(22, on, 4, 5, "ng-container", 17),
            e.YNc(23, an, 1, 0, "worklenz-na", 17),
            e.qZA(),
            e.TgZ(24, "td", 16),
            e.YNc(25, sn, 4, 7, "ng-container", 17),
            e.YNc(26, ln, 1, 0, "worklenz-na", 17),
            e.qZA(),
            e.TgZ(27, "td", 16),
            e.YNc(28, cn, 6, 12, "ng-container", 18),
            e.YNc(29, pn, 1, 0, "worklenz-na", 17),
            e.qZA()()),
          2 & n)
        ) {
          const i = o.$implicit;
          e.oxw(2);
          const t = e.MAs(8);
          e.xp6(6),
            e.Oqu(e.xi3(7, 20, i.start_date, "MMM dd,yyyy") || "-"),
            e.xp6(3),
            e.Oqu(e.xi3(10, 23, i.end_date, "MMM dd,yyyy") || "-"),
            e.xp6(3),
            e.Q6J("ngIf", null !== i.days_left)("ngIfElse", t),
            e.xp6(2),
            e.Oqu(i.estimated_time_string),
            e.xp6(2),
            e.Oqu(i.actual_time_string),
            e.xp6(2),
            e.Udp("color", null == i ? null : i.status_color),
            e.Q6J("nzType", e.lcZ(19, 26, null == i ? null : i.status_icon))(
              "nzTheme",
              "outline"
            ),
            e.xp6(2),
            e.hij(" ", null == i ? null : i.status_name, " "),
            e.xp6(1),
            e.Q6J("ngSwitch", !!i.project_health),
            e.xp6(1),
            e.Q6J("ngSwitchCase", !0),
            e.xp6(1),
            e.Q6J("ngSwitchCase", !1),
            e.xp6(1),
            e.Q6J("ngSwitch", !!i.category_name),
            e.xp6(1),
            e.Q6J("ngSwitchCase", !0),
            e.xp6(1),
            e.Q6J("ngSwitchCase", !1),
            e.xp6(1),
            e.Q6J("ngSwitch", !!i.project_manager),
            e.xp6(1),
            e.Q6J("ngSwitchCase", !0),
            e.xp6(1),
            e.Q6J("ngSwitchCase", !1);
        }
      }
      const _n = function () {
        return { x: "300px" };
      };
      function mn(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, "nz-skeleton", 5)(1, "nz-table", 6, 7)(3, "thead")(
              4,
              "tr"
            )(5, "th", 8),
            e._uU(6, "Name"),
            e.qZA(),
            e.TgZ(7, "th", 9),
            e._uU(8, "Start Date"),
            e.qZA(),
            e.TgZ(9, "th", 9),
            e._uU(10, "End Date"),
            e.qZA(),
            e.TgZ(11, "th", 9),
            e._uU(12, "Days Left/Overdue"),
            e.qZA(),
            e.TgZ(13, "th", 9),
            e._uU(14, "Estimated Time"),
            e.qZA(),
            e.TgZ(15, "th", 9),
            e._uU(16, "Actual Time"),
            e.qZA(),
            e.TgZ(17, "th", 9),
            e._uU(18, "Status"),
            e.qZA(),
            e.TgZ(19, "th", 9),
            e._uU(20, "Health"),
            e.qZA(),
            e.TgZ(21, "th", 9),
            e._uU(22, "Category"),
            e.qZA(),
            e.TgZ(23, "th", 9),
            e._uU(24, "Project Manager"),
            e.qZA()()(),
            e.TgZ(25, "tbody"),
            e.YNc(26, gn, 30, 28, "tr", 10),
            e.qZA()()()),
          2 & n)
        ) {
          const i = e.MAs(2),
            t = e.oxw();
          e.Q6J("nzLoading", t.loading)("nzActive", !0),
            e.xp6(1),
            e.Q6J("nzSize", "small")("nzData", t.projects)(
              "nzShowPagination",
              !0
            )("nzHideOnSinglePage", !0)("nzScroll", e.DdM(19, _n)),
            e.xp6(4),
            e.Q6J("nzWidth", "300px"),
            e.xp6(2),
            e.Q6J("nzWidth", "120px"),
            e.xp6(2),
            e.Q6J("nzWidth", "120px"),
            e.xp6(2),
            e.Q6J("nzWidth", "150px"),
            e.xp6(2),
            e.Q6J("nzWidth", "120px"),
            e.xp6(2),
            e.Q6J("nzWidth", "120px"),
            e.xp6(2),
            e.Q6J("nzWidth", "150px"),
            e.xp6(2),
            e.Q6J("nzWidth", "120px"),
            e.xp6(2),
            e.Q6J("nzWidth", "120px"),
            e.xp6(2),
            e.Q6J("nzWidth", "180px"),
            e.xp6(3),
            e.Q6J("ngForOf", i.data)("ngForTrackBy", t.trackByProject);
        }
      }
      function dn(n, o) {
        if ((1 & n && (e.TgZ(0, "span", 27), e._uU(1), e.qZA()), 2 & n)) {
          const i = e.oxw();
          e.xp6(1), e.hij("", i.titleText, "'s Projects");
        }
      }
      function hn(n, o) {
        1 & n && e._UZ(0, "span", 28);
      }
      function un(n, o) {
        1 & n && e._UZ(0, "worklenz-na");
      }
      let fn = (() => {
        var n;
        class o {
          constructor(t, r, a, s) {
            var m = this;
            (this.cdr = t),
              (this.drawer = r),
              (this.api = a),
              (this.reportingService = s),
              (this.show = !1),
              (this.loading = !1),
              (this.titleText = null),
              (this.projects = []),
              this.drawer.onOpenSingleMemberProjects
                .pipe((0, x.sL)())
                .subscribe((d) => {
                  d &&
                    ((this.show = !0),
                    this.cdr.markForCheck(),
                    setTimeout(
                      (0, _.Z)(function* () {
                        yield m.get(d);
                      }),
                      50
                    ));
                });
          }
          get(t) {
            var r = this;
            return (0, _.Z)(function* () {
              if (t.team_member_id)
                try {
                  r.loading = !0;
                  const a = {
                      team_member_id: t.team_member_id,
                      archived: r.reportingService.getIncludeToggle(),
                    },
                    s = yield r.api.getSingleMemberProjects(a);
                  s.done &&
                    ((r.projects = s.body.projects),
                    (r.titleText = s.body.team_member_name)),
                    (r.loading = !1),
                    r.cdr.markForCheck();
                } catch (a) {
                  (0, A.tu)(a), (r.loading = !1), r.cdr.markForCheck();
                }
            })();
          }
          trackByProject(t, r) {
            return r.id;
          }
          reset() {
            (this.show = !1),
              (this.projects = []),
              (this.loading = !1),
              (this.titleText = null),
              this.cdr.markForCheck();
          }
          close() {
            this.reset();
          }
          getColor(t) {
            return p.Lj[t?.charAt(0).toUpperCase() || "A"];
          }
        }
        return (
          ((n = o).ɵfac = function (t) {
            return new (t || n)(
              e.Y36(e.sBO),
              e.Y36(Z.b),
              e.Y36(M.U),
              e.Y36(v.m)
            );
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["worklenz-rpt-single-member-projects-drawer"]],
            decls: 9,
            vars: 7,
            consts: [
              [
                3,
                "nzClosable",
                "nzVisible",
                "nzPlacement",
                "nzTitle",
                "nzContent",
                "nzWidth",
                "nzCloseIcon",
                "nzOnClose",
              ],
              ["content", ""],
              ["title", ""],
              ["closeIcon", ""],
              ["naTemplate", ""],
              [1, "d-block", 3, "nzLoading", "nzActive"],
              [
                3,
                "nzSize",
                "nzData",
                "nzShowPagination",
                "nzHideOnSinglePage",
                "nzScroll",
              ],
              ["projectsTable", ""],
              ["nzLeft", "", 3, "nzWidth"],
              [3, "nzWidth"],
              [4, "ngFor", "ngForOf", "ngForTrackBy"],
              ["nzLeft", "", 2, "z-index", "11"],
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
              [4, "ngIf", "ngIfElse"],
              ["nz-icon", "", 3, "nzType", "nzTheme"],
              [3, "ngSwitch"],
              [4, "ngSwitchCase"],
              [3, "nz-tooltip", 4, "ngSwitchCase"],
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
              ["style", "color: #f37070;", 4, "ngSwitchCase"],
              [2, "color", "#f37070"],
              ["style", "color: #80ca79;", 4, "ngIf"],
              [2, "color", "#80ca79"],
              [3, "nz-tooltip"],
              [1, "me-2", 3, "nzSize", "nzText", "nzSrc"],
              ["nz-typography", "", 1, "title-text"],
              ["nz-icon", "", "nzType", "close", "nzTheme", "outline"],
            ],
            template: function (t, r) {
              if (
                (1 & t &&
                  (e.TgZ(0, "nz-drawer", 0),
                  e.NdJ("nzOnClose", function () {
                    return r.close();
                  }),
                  e.qZA(),
                  e.YNc(1, mn, 27, 20, "ng-template", null, 1, e.W1O),
                  e.YNc(3, dn, 2, 1, "ng-template", null, 2, e.W1O),
                  e.YNc(5, hn, 1, 0, "ng-template", null, 3, e.W1O),
                  e.YNc(7, un, 1, 0, "ng-template", null, 4, e.W1O)),
                2 & t)
              ) {
                const a = e.MAs(2),
                  s = e.MAs(4),
                  m = e.MAs(6);
                e.Q6J("nzClosable", !0)("nzVisible", r.show)(
                  "nzPlacement",
                  "right"
                )("nzTitle", s)("nzContent", a)("nzWidth", 750)(
                  "nzCloseIcon",
                  m
                );
              }
            },
            dependencies: [
              u.sg,
              u.O5,
              u.RF,
              u.n9,
              w.NU,
              w.$1,
              Y.w,
              D.Ls,
              k.ZU,
              j.SY,
              P.ng,
              I.x7,
              Q.j,
              G.u,
              T.N8,
              T.Uo,
              T._C,
              T.Om,
              T.p0,
              T.$Z,
              T.qn,
              K.Vz,
              F.Dz,
              u.uU,
              Bt.m,
              de.I,
              ee.p,
            ],
            styles: [
              ".title-text[_ngcontent-%COMP%]{font-weight:500;font-size:14px}nz-tag[_ngcontent-%COMP%]{border-radius:20px;color:#000000d9}",
            ],
            changeDetection: 0,
          })),
          o
        );
      })();
      function Tn(n, o) {
        if (1 & n) {
          const i = e.EpF();
          e.TgZ(0, "nz-input-group", 24)(1, "input", 25),
            e.NdJ("ngModelChange", function (r) {
              e.CHM(i);
              const a = e.oxw();
              return e.KtG((a.searchText = r));
            })("ngModelChange", function () {
              e.CHM(i);
              const r = e.oxw();
              return e.KtG(r.searchProjects());
            }),
            e.qZA()();
        }
        if (2 & n) {
          const i = e.oxw(),
            t = e.MAs(6);
          e.Q6J("nzSuffix", t), e.xp6(1), e.Q6J("ngModel", i.searchText);
        }
      }
      function zn(n, o) {
        1 & n && e._UZ(0, "span", 26);
      }
      function xn(n, o) {
        if (
          (1 & n && (e._UZ(0, "nz-avatar", 33), e.ALo(1, "firstCharUpper")),
          2 & n)
        ) {
          const i = e.oxw().$implicit;
          e.Udp("background-color", i.color_code),
            e.Q6J("nzSrc", i.avatar_url)("nzText", e.lcZ(1, 4, i.name));
        }
      }
      function Sn(n, o) {
        if ((1 & n && (e.TgZ(0, "span"), e._uU(1), e.qZA()), 2 & n)) {
          const i = e.oxw().$implicit;
          e.xp6(1), e.Oqu(i.name);
        }
      }
      function bn(n, o) {
        if ((1 & n && e._UZ(0, "worklenz-tasks-progress-bar", 34), 2 & n)) {
          const i = e.oxw().$implicit;
          e.Q6J("todoProgress", i.tasks_stat.todo)(
            "doingProgress",
            i.tasks_stat.doing
          )("doneProgress", i.tasks_stat.done);
        }
      }
      function Cn(n, o) {
        if (1 & n) {
          const i = e.EpF();
          e.TgZ(0, "tr", 27),
            e.NdJ("click", function () {
              const a = e.CHM(i).$implicit,
                s = e.oxw();
              return e.KtG(s.openMember(a));
            }),
            e.TgZ(1, "td")(2, "nz-space", 28),
            e.YNc(3, xn, 2, 6, "nz-avatar", 29),
            e.YNc(4, Sn, 2, 1, "span", 30),
            e.qZA()(),
            e.TgZ(5, "td"),
            e.YNc(6, bn, 1, 3, "worklenz-tasks-progress-bar", 31),
            e.qZA(),
            e.TgZ(7, "td", 32),
            e._uU(8),
            e.qZA(),
            e.TgZ(9, "td", 32),
            e._uU(10),
            e.qZA(),
            e.TgZ(11, "td", 32),
            e._uU(12),
            e.qZA(),
            e.TgZ(13, "td", 32),
            e._uU(14),
            e.qZA()();
        }
        if (2 & n) {
          const i = o.$implicit;
          e.oxw();
          const t = e.MAs(37);
          e.xp6(6),
            e.Q6J(
              "ngIf",
              i.tasks_stat.todo || i.tasks_stat.doing || i.tasks_stat.done
            )("ngIfElse", t),
            e.xp6(2),
            e.Oqu(i.tasks),
            e.xp6(2),
            e.Oqu(i.overdue),
            e.xp6(2),
            e.Oqu(i.completed),
            e.xp6(2),
            e.Oqu(i.ongoing);
        }
      }
      function vn(n, o) {
        1 & n && e._UZ(0, "worklenz-na");
      }
      function yn(n, o) {
        if (1 & n) {
          const i = e.EpF();
          e.TgZ(0, "li", 18),
            e.NdJ("nzCheckedChange", function (r) {
              const s = e.CHM(i).$implicit;
              return e.KtG((s.selected = r));
            })("nzCheckedChange", function () {
              e.CHM(i);
              const r = e.oxw();
              return e.KtG(r.checkTeam());
            }),
            e._uU(1),
            e.qZA();
        }
        if (2 & n) {
          const i = o.$implicit;
          e.Q6J("nzChecked", i.selected), e.xp6(1), e.hij(" ", i.name, " ");
        }
      }
      function wn(n, o) {
        if (1 & n) {
          const i = e.EpF();
          e.TgZ(0, "li", 18),
            e.NdJ("nzCheckedChange", function (r) {
              const s = e.CHM(i).$implicit;
              return e.KtG((s.selected = r));
            })("nzCheckedChange", function () {
              e.CHM(i);
              const r = e.oxw();
              return e.KtG(r.checkProject());
            }),
            e.TgZ(1, "div", 35)(2, "div")(3, "span", 36),
            e._uU(4),
            e.qZA()()()();
        }
        if (2 & n) {
          const i = o.$implicit;
          e.Q6J("nzChecked", i.selected), e.xp6(4), e.Oqu(i.name);
        }
      }
      const kn = function () {
          return { x: "300px" };
        },
        Zn = [
          {
            path: "",
            component: (() => {
              var n;
              class o {
                constructor(t, r, a, s, m, d, f, h, z) {
                  var S = this;
                  (this.app = t),
                    (this.cdr = r),
                    (this.api = a),
                    (this.drawer = s),
                    (this.auth = m),
                    (this.exportApi = d),
                    (this.service = f),
                    (this.socket = h),
                    (this.taskView = z),
                    (this.FILTER_INDEX_KEY = "worklenz.projects.filter_index"),
                    (this.loading = !1),
                    (this.loadingProjects = !1),
                    (this.loadingTeams = !1),
                    (this.loadingCategories = !1),
                    (this.filteredByTeam = !1),
                    (this.selectAllTeams = !0),
                    (this.selectAllProjects = !0),
                    (this.selectNoCategory = !0),
                    (this.isDurationLabelSelected = !0),
                    (this.teamsFilterString = null),
                    (this.teamSearchText = null),
                    (this.projectSearchText = null),
                    (this.categorySearchText = null),
                    (this.result = null),
                    (this.members = []),
                    (this.teams = []),
                    (this.projectsDropdown = []),
                    (this.categoriesDropdown = []),
                    (this.total = 0),
                    (this.pageSize = 10),
                    (this.pageIndex = 1),
                    (this.paginationSizes = [5, 10, 15, 20, 50, 100]),
                    (this.sortField = null),
                    (this.sortOrder = null),
                    (this.initial = !0),
                    (this.refreshList = (0, _.Z)(function* () {
                      yield S.get(!1);
                    })),
                    this.app.setTitle("Reporting - Members"),
                    (0, R.T)(
                      this.service.onDurationChange,
                      this.service.onDateRangeChange,
                      this.service.onIncludeToggleChange
                    )
                      .pipe((0, x.sL)())
                      .subscribe(() => {
                        this.get(!0);
                      }),
                    (0, R.T)(this.taskView.onRefresh)
                      .pipe((0, x.sL)())
                      .subscribe(() => {
                        this.get(!0);
                      });
                }
                ngOnInit() {
                  var t = this;
                  return (0, _.Z)(function* () {
                    t.socket.on(
                      g.C.TASK_STATUS_CHANGE.toString(),
                      t.refreshList
                    ),
                      t.socket.on(
                        g.C.QUICK_ASSIGNEES_UPDATE.toString(),
                        t.refreshList
                      ),
                      t.socket.on(
                        g.C.TASK_END_DATE_CHANGE.toString(),
                        t.refreshList
                      ),
                      t.socket.on(
                        g.C.TASK_TIME_ESTIMATION_CHANGE.toString(),
                        t.refreshList
                      ),
                      t.socket.on(
                        g.C.TASK_TIMER_STOP.toString(),
                        t.refreshList
                      );
                  })();
                }
                ngOnDestroy() {
                  this.socket.removeListener(
                    g.C.TASK_STATUS_CHANGE.toString(),
                    this.refreshList
                  ),
                    this.socket.removeListener(
                      g.C.QUICK_ASSIGNEES_UPDATE.toString(),
                      this.refreshList
                    ),
                    this.socket.removeListener(
                      g.C.TASK_END_DATE_CHANGE.toString(),
                      this.refreshList
                    ),
                    this.socket.removeListener(
                      g.C.TASK_TIME_ESTIMATION_CHANGE.toString(),
                      this.refreshList
                    ),
                    this.socket.removeListener(
                      g.C.TASK_TIMER_STOP.toString(),
                      this.refreshList
                    );
                }
                onQueryParamsChange(t) {
                  const { pageSize: r, pageIndex: a, sort: s } = t;
                  (this.pageIndex = a), (this.pageSize = r);
                  const m = s.find((d) => null !== d.value);
                  (this.sortField = m?.key ?? null),
                    (this.sortOrder = m?.value ?? null),
                    this.get(!0);
                }
                setDatesForKeys() {
                  var t = this;
                  return (0, _.Z)(function* () {
                    if (t.service.getDuration()?.key) {
                      const r = t.service.getDuration()?.key,
                        a = c()();
                      switch (r) {
                        case p.WD:
                          const s = c()().subtract(1, "days");
                          t.service.setDateRange([s.toString(), s.toString()]);
                          break;
                        case p.ao:
                          const m = c()().subtract(1, "weeks");
                          t.service.setDateRange([m.toString(), a.toString()]);
                          break;
                        case p.ly:
                          const d = c()().subtract(1, "months");
                          t.service.setDateRange([d.toString(), a.toString()]);
                          break;
                        case p.o9:
                          const f = c()().subtract(3, "months");
                          t.service.setDateRange([f.toString(), a.toString()]);
                          break;
                        case p.$U:
                          const h = c()().subtract(1, "weeks").startOf("week"),
                            z = c()().subtract(1, "weeks").endOf("week");
                          t.service.setDateRange([h.toString(), z.toString()]);
                          break;
                        case p.lI:
                          const S = c()().subtract(1, "month").startOf("month"),
                            C = c()().subtract(1, "month").endOf("month");
                          t.service.setDateRange([S.toString(), C.toString()]);
                      }
                    }
                  })();
                }
                get(t = !0) {
                  var r = this;
                  return (0, _.Z)(function* () {
                    try {
                      r.loading = t;
                      const a = r.getSelectedProjectIds();
                      r.isDurationLabelSelected && (yield r.setDatesForKeys());
                      const s = yield r.api.getMembers({
                        index: r.pageIndex,
                        size: r.pageSize,
                        field: r.sortField,
                        order: r.sortOrder,
                        search: r.searchText || null,
                        filter: r.filterIndex.toString(),
                        teams: r.teamsFilterString,
                        duration: r.service.getDuration()?.key,
                        date_range: r.service.getDateRange(),
                        archived: r.service.getIncludeToggle(),
                        projects: a,
                      });
                      s.done &&
                        ((r.result = s.body || null),
                        (r.total = s.body.total || 0),
                        (r.members = s.body.members)),
                        (r.loading = !1);
                    } catch {
                      r.loading = !1;
                    }
                    r.cdr.markForCheck();
                  })();
                }
                getTeams() {
                  var t = this;
                  return (0, _.Z)(function* () {
                    try {
                      t.loadingTeams = !0;
                      const r = yield t.api.getOverviewTeams();
                      if (r.done) {
                        for (const a of r.body) a.selected = !0;
                        (t.teams = r.body), yield t.refreshCategories();
                      }
                      t.loadingTeams = !1;
                    } catch {
                      t.loadingTeams = !1;
                    }
                    t.cdr.markForCheck();
                  })();
                }
                get filterIndex() {
                  return +(localStorage.getItem(this.FILTER_INDEX_KEY) || 0);
                }
                trackBy(t, r) {
                  return r.id;
                }
                openMember(t) {
                  this.result?.team &&
                    this.service.setCurrentTeam({
                      id: this.result?.team.id,
                      name: this.result?.team.name,
                      projects_count: 0,
                      members: [],
                      selected: !1,
                    }),
                    this.drawer.openSingleMember(t);
                }
                export() {
                  var t = this;
                  return (0, _.Z)(function* () {
                    const r = t.auth.getCurrentSession();
                    if (r?.name) {
                      t.isDurationLabelSelected && (yield t.setDatesForKeys());
                      try {
                        t.exportApi.exportMembers(
                          r.team_name,
                          t.service.getDuration()?.key,
                          t.service.getDateRange(),
                          t.service.getIncludeToggle()
                        );
                      } catch (a) {
                        (0, A.tu)(a);
                      }
                    }
                  })();
                }
                searchProjects() {
                  this.get(!1);
                }
                applyTeamsFilter() {
                  const t = this.teams.filter((a) => a.selected);
                  this.filteredByTeam = !!t.length;
                  const r = t.map((a) => a.id).join("+");
                  (this.teamsFilterString = r || null), this.get();
                }
                getProjects(t, r) {
                  var a = this;
                  return (0, _.Z)(function* () {
                    try {
                      a.loadingProjects = !0;
                      const s = yield a.api.getAllocationProjects(
                        t,
                        r,
                        a.selectNoCategory
                      );
                      s.done && (a.projectsDropdown = s.body),
                        (a.loadingProjects = !1);
                    } catch {
                      a.loadingProjects = !1;
                    }
                    a.cdr.markForCheck();
                  })();
                }
                getCategories(t) {
                  var r = this;
                  return (0, _.Z)(function* () {
                    try {
                      r.loadingCategories = !0;
                      const a = yield r.api.getCategories(t);
                      a.done && (r.categoriesDropdown = a.body),
                        (r.loadingCategories = !1),
                        r.cdr.markForCheck();
                    } catch {
                      (r.loadingCategories = !1), r.cdr.markForCheck();
                    }
                  })();
                }
                refreshCategories() {
                  var t = this;
                  return (0, _.Z)(function* () {
                    yield t.getCategories(t.getSelectedTeamIds()),
                      t.refreshProjects();
                  })();
                }
                refreshProjects() {
                  var t = this;
                  return (0, _.Z)(function* () {
                    yield t.getProjects(
                      t.getSelectedTeamIds(),
                      t.getSelectedCategories()
                    ),
                      t.get();
                  })();
                }
                getSelectedTeamIds() {
                  return (
                    this.teams.filter((a) => a.selected).map((a) => a.id) || []
                  );
                }
                getSelectedCategories() {
                  return (
                    this.categoriesDropdown
                      .filter((a) => a.selected)
                      .map((a) => a.id) || []
                  );
                }
                getSelectedProjectIds() {
                  return (
                    this.projectsDropdown
                      .filter((a) => a.selected)
                      .map((a) => a.id) || []
                  );
                }
                detectChanges() {
                  this.cdr.markForCheck();
                }
                projectsChanged() {
                  this.get();
                }
                checkTeam() {
                  (this.selectAllTeams = !1),
                    this.applyTeamsFilter(),
                    this.refreshProjects();
                }
                checkProject() {
                  (this.selectAllProjects = !1), this.projectsChanged();
                }
                selectAllTeamsChecked(t) {
                  if (t) {
                    for (const r of this.teams) r.selected = !0;
                    this.refreshProjects(),
                      this.applyTeamsFilter(),
                      this.cdr.markForCheck();
                  } else {
                    for (const r of this.teams) r.selected = !1;
                    this.refreshProjects(),
                      this.applyTeamsFilter(),
                      this.cdr.markForCheck();
                  }
                }
                selectAllProjectsChecked(t) {
                  if (t) {
                    for (const r of this.projectsDropdown) r.selected = !0;
                    this.projectsChanged(), this.cdr.markForCheck();
                  } else {
                    for (const r of this.projectsDropdown) r.selected = !1;
                    this.projectsChanged(), this.cdr.markForCheck();
                  }
                }
              }
              return (
                ((n = o).ɵfac = function (t) {
                  return new (t || n)(
                    e.Y36(fe.z),
                    e.Y36(e.sBO),
                    e.Y36(M.U),
                    e.Y36(Z.b),
                    e.Y36(U.e),
                    e.Y36(re.O),
                    e.Y36(v.m),
                    e.Y36(H.s),
                    e.Y36(J.f)
                  );
                }),
                (n.ɵcmp = e.Xpm({
                  type: n,
                  selectors: [["worklenz-rpt-members"]],
                  decls: 60,
                  vars: 43,
                  consts: [
                    [
                      3,
                      "title",
                      "showDuration",
                      "showArchivedToggle",
                      "isDurationLabelSelected",
                      "exportFile",
                    ],
                    [3, "nzLoading", "nzTitle", "nzExtra"],
                    ["projectsActions", ""],
                    ["suffixIconSearch", ""],
                    [
                      3,
                      "nzSize",
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
                    [3, "nzWidth"],
                    ["scope", "col", 3, "nzWidth"],
                    ["scope", "col", 1, "text-center", 3, "nzWidth"],
                    [
                      "nz-icon",
                      "",
                      "nzType",
                      "exclamation-circle",
                      "nzTheme",
                      "outline",
                      "nz-tooltip",
                      "",
                      2,
                      "color",
                      "#0d6efd",
                      3,
                      "nzTooltipTitle",
                    ],
                    [
                      "class",
                      "cursor-pointer",
                      3,
                      "click",
                      4,
                      "ngFor",
                      "ngForOf",
                      "ngForTrackBy",
                    ],
                    [3, "isDurationLabelSelected"],
                    ["naTemplate", ""],
                    ["teamsDropdown", "nzDropdownMenu"],
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
                    [1, "px-3", "py-2", "sticky-top", "bg-white"],
                    [
                      "type",
                      "text",
                      "placeholder",
                      "Search by team name",
                      "nz-input",
                      "",
                      3,
                      "ngModel",
                      "ngModelChange",
                    ],
                    ["teamSearchInput", ""],
                    [
                      "nz-checkbox",
                      "",
                      "nz-menu-item",
                      "",
                      1,
                      "m-0",
                      "align-items-baseline",
                      3,
                      "nzChecked",
                      "nzCheckedChange",
                    ],
                    ["nz-menu-divider", ""],
                    [
                      "class",
                      "m-0 align-items-baseline",
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
                    ["projectsSelector", "nzDropdownMenu"],
                    [
                      "type",
                      "text",
                      "placeholder",
                      "Search by project name",
                      "nz-input",
                      "",
                      3,
                      "ngModel",
                      "ngModelChange",
                    ],
                    ["projectSearchInput", ""],
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
                    ["nz-icon", "", "nzType", "search"],
                    [1, "cursor-pointer", 3, "click"],
                    [1, "align-items-center"],
                    [
                      3,
                      "nzSrc",
                      "nzText",
                      "background-color",
                      4,
                      "nzSpaceItem",
                    ],
                    [4, "nzSpaceItem"],
                    [
                      3,
                      "todoProgress",
                      "doingProgress",
                      "doneProgress",
                      4,
                      "ngIf",
                      "ngIfElse",
                    ],
                    [1, "text-center"],
                    [3, "nzSrc", "nzText"],
                    [3, "todoProgress", "doingProgress", "doneProgress"],
                    [
                      1,
                      "d-flex",
                      "align-items-center",
                      "justify-content-center",
                      "user-select-none",
                    ],
                    ["nz-typography", "", 1, "d-block"],
                  ],
                  template: function (t, r) {
                    if (
                      (1 & t &&
                        (e.TgZ(0, "worklenz-rpt-header", 0),
                        e.NdJ("isDurationLabelSelected", function (s) {
                          return (r.isDurationLabelSelected = s);
                        })("exportFile", function () {
                          return r.export();
                        }),
                        e.qZA(),
                        e.TgZ(1, "nz-content")(2, "nz-card", 1),
                        e.YNc(3, Tn, 2, 2, "ng-template", null, 2, e.W1O),
                        e.YNc(5, zn, 1, 0, "ng-template", null, 3, e.W1O),
                        e.TgZ(7, "nz-table", 4, 5),
                        e.NdJ("nzQueryParams", function (s) {
                          return r.onQueryParamsChange(s);
                        }),
                        e.TgZ(9, "thead")(10, "tr")(11, "th", 6),
                        e._uU(12, "Member"),
                        e.qZA(),
                        e.TgZ(13, "th", 7),
                        e._uU(14, "Tasks Progress"),
                        e.qZA(),
                        e.TgZ(15, "th", 8),
                        e._uU(16, "Tasks Assigned "),
                        e._UZ(17, "span", 9),
                        e.qZA(),
                        e.TgZ(18, "th", 8),
                        e._uU(19, "Overdue Tasks "),
                        e._UZ(20, "span", 9),
                        e.qZA(),
                        e.TgZ(21, "th", 8),
                        e._uU(22, "Completed Tasks "),
                        e._UZ(23, "span", 9),
                        e.qZA(),
                        e.TgZ(24, "th", 8),
                        e._uU(25, "Ongoing Tasks "),
                        e._UZ(26, "span", 9),
                        e.qZA()()(),
                        e.TgZ(27, "tbody"),
                        e.YNc(28, Cn, 15, 6, "tr", 10),
                        e.qZA()()()(),
                        e._UZ(29, "worklenz-rpt-team-drawer")(
                          30,
                          "worklenz-rpt-project-drawer"
                        )(
                          31,
                          "worklenz-rpt-single-member-drawer",
                          11
                        )(32, "worklenz-rpt-single-member-stat")(
                          33,
                          "worklenz-rpt-single-member-projects-drawer"
                        )(34, "worklenz-rpt-tasks-drawer")(
                          35,
                          "worklenz-rpt-task-view-drawer"
                        ),
                        e.YNc(36, vn, 1, 0, "ng-template", null, 12, e.W1O),
                        e.TgZ(38, "nz-dropdown-menu", null, 13)(40, "ul", 14)(
                          41,
                          "li",
                          15
                        )(42, "input", 16, 17),
                        e.NdJ("ngModelChange", function (s) {
                          return (r.teamSearchText = s);
                        })("ngModelChange", function () {
                          return r.detectChanges();
                        }),
                        e.qZA()(),
                        e.TgZ(44, "li", 18),
                        e.NdJ("nzCheckedChange", function (s) {
                          return (r.selectAllTeams = s);
                        })("nzCheckedChange", function (s) {
                          return r.selectAllTeamsChecked(s);
                        }),
                        e._uU(45, "Select all "),
                        e.qZA(),
                        e._UZ(46, "li", 19),
                        e.YNc(47, yn, 2, 2, "li", 20),
                        e.ALo(48, "searchByName"),
                        e.qZA()(),
                        e.TgZ(49, "nz-dropdown-menu", null, 21)(51, "ul", 14)(
                          52,
                          "li",
                          15
                        )(53, "input", 22, 23),
                        e.NdJ("ngModelChange", function (s) {
                          return (r.projectSearchText = s);
                        })("ngModelChange", function () {
                          return r.detectChanges();
                        }),
                        e.qZA()(),
                        e.TgZ(55, "li", 18),
                        e.NdJ("nzCheckedChange", function (s) {
                          return (r.selectAllProjects = s);
                        })("nzCheckedChange", function (s) {
                          return r.selectAllProjectsChecked(s);
                        }),
                        e._uU(56, "Select all "),
                        e.qZA(),
                        e._UZ(57, "li", 19),
                        e.YNc(58, wn, 5, 2, "li", 20),
                        e.ALo(59, "searchByName"),
                        e.qZA()()),
                      2 & t)
                    ) {
                      const a = e.MAs(4),
                        s = e.MAs(8),
                        m = e.MAs(43),
                        d = e.MAs(54);
                      e.Q6J("title", "Miembros")("showDuration", !0)(
                        "showArchivedToggle",
                        !0
                      ),
                        e.xp6(2),
                        e.Q6J("nzLoading", r.loading)("nzTitle", "")(
                          "nzExtra",
                          a
                        ),
                        e.xp6(5),
                        e.Q6J("nzSize", "small")("nzData", r.members)(
                          "nzFrontPagination",
                          !1
                        )("nzLoading", r.loading)("nzPageIndex", r.pageIndex)(
                          "nzPageSizeOptions",
                          r.paginationSizes
                        )("nzPageSize", r.pageSize)("nzTotal", r.total)(
                          "nzShowSizeChanger",
                          !0
                        )("nzHideOnSinglePage", !0)("nzScroll", e.DdM(42, kn)),
                        e.xp6(4),
                        e.Q6J("nzWidth", "250px"),
                        e.xp6(2),
                        e.Q6J("nzWidth", "220px"),
                        e.xp6(2),
                        e.Q6J("nzWidth", "100px"),
                        e.xp6(2),
                        e.Q6J(
                          "nzTooltipTitle",
                          "Tasks assigned on selected date range"
                        ),
                        e.xp6(1),
                        e.Q6J("nzWidth", "120px"),
                        e.xp6(2),
                        e.Q6J(
                          "nzTooltipTitle",
                          "Tasks overdue for end of the selected date range"
                        ),
                        e.xp6(1),
                        e.Q6J("nzWidth", "130px"),
                        e.xp6(2),
                        e.Q6J(
                          "nzTooltipTitle",
                          "Tasks completed on selected date range"
                        ),
                        e.xp6(1),
                        e.Q6J("nzWidth", "120px"),
                        e.xp6(2),
                        e.Q6J(
                          "nzTooltipTitle",
                          "Started tasks not completed yet"
                        ),
                        e.xp6(2),
                        e.Q6J("ngForOf", s.data)("ngForTrackBy", r.trackBy),
                        e.xp6(3),
                        e.Q6J(
                          "isDurationLabelSelected",
                          r.isDurationLabelSelected
                        ),
                        e.xp6(11),
                        e.Q6J("ngModel", r.teamSearchText),
                        e.xp6(2),
                        e.Q6J("nzChecked", r.selectAllTeams),
                        e.xp6(3),
                        e.Q6J("ngForOf", e.xi3(48, 36, r.teams, m.value)),
                        e.xp6(6),
                        e.Q6J("ngModel", r.projectSearchText),
                        e.xp6(2),
                        e.Q6J("nzChecked", r.selectAllProjects),
                        e.xp6(3),
                        e.Q6J(
                          "ngForOf",
                          e.xi3(59, 39, r.projectsDropdown, d.value)
                        );
                    }
                  },
                  dependencies: [
                    u.sg,
                    u.O5,
                    oe.I,
                    G.u,
                    O.bd,
                    D.Ls,
                    E.Zp,
                    E.gB,
                    E.ke,
                    ae.OK,
                    T.N8,
                    T.Uo,
                    T._C,
                    T.Om,
                    T.p0,
                    T.$Z,
                    b.Fj,
                    b.JJ,
                    Te.$,
                    ze.W,
                    xe.W,
                    Se.D,
                    se.a,
                    b.On,
                    F.Dz,
                    Jt,
                    w.NU,
                    w.$1,
                    ge.Ie,
                    y.wO,
                    y.r9,
                    y.YV,
                    L.RR,
                    j.SY,
                    Y.w,
                    k.ZU,
                    Gt,
                    fn,
                    me.g,
                    de.I,
                  ],
                  changeDetection: 0,
                })),
                o
              );
            })(),
          },
        ];
      let Dn = (() => {
        var n;
        class o {}
        return (
          ((n = o).ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.oAB({ type: n })),
          (n.ɵinj = e.cJS({ imports: [ie.Bz.forChild(Zn), ie.Bz] })),
          o
        );
      })();
      var An = l(27546),
        Mn = l(3400),
        On = l(64948),
        Ln = l(92893),
        Qn = l(15484),
        Rn = l(71787),
        Un = l(19703),
        Jn = l(63124),
        Yn = l(42528),
        he = l(91921);
      let Nn = (() => {
          var n;
          class o {}
          return (
            ((n = o).ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.oAB({ type: n })),
            (n.ɵinj = e.cJS({
              imports: [
                u.ez,
                b.u5,
                B.sL,
                $.Hb,
                K.BL,
                L.b1,
                ce.U5,
                D.PV,
                y.ip,
                w.zf,
                V.we,
                le.vG,
                X.lt,
                Un.B,
                Jn.L,
                Yn.r,
                I.mS,
                O.vh,
                he.ReportingModule,
                N.vQ,
                P.H0,
                te.S,
                q.FT,
                F.Rt,
                Q.X,
                k.ZJ,
                j.cg,
              ],
            })),
            o
          );
        })(),
        In = (() => {
          var n;
          class o {}
          return (
            ((n = o).ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.oAB({ type: n })),
            (n.ɵinj = e.cJS({
              imports: [
                u.ez,
                Dn,
                oe.I,
                G.u,
                I.mS,
                O.vh,
                D.PV,
                E.o7,
                ae.wm,
                T.HQ,
                Q.X,
                b.UX,
                An.$,
                Mn.j,
                On.i,
                Ln.e,
                Qn.C,
                se.a,
                b.u5,
                Rn.RptProjectsModule,
                F.Rt,
                Nn,
                w.zf,
                ge.Wr,
                L.b1,
                y.ip,
                j.cg,
                B.sL,
                k.ZJ,
                he.ReportingModule,
              ],
            })),
            o
          );
        })();
    },
  },
]);
