"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [508],
  {
    15508: (mt, O, s) => {
      s.r(O), s.d(O, { RptOverviewModule: () => lt });
      var g = s(96814),
        j = s(35420),
        d = s(15861),
        C = s(71993),
        e = s(65879),
        v = s(16196),
        E = s(90586),
        w = s(62963),
        u = s(42012),
        D = s(63106),
        I = s(33410),
        h = s(82962),
        p = s(13740),
        k = s(99183),
        F = s(92259),
        q = s(92022),
        J = s(69649),
        W = s(69342),
        Q = s(42840),
        T = s(70855),
        B = s(41958),
        R = s(43389),
        _ = s(62595),
        b = s(92574),
        Z = s(79382),
        y = s(3626),
        G = s(47381),
        U = s(73460),
        A = s(62787),
        H = s(27128),
        z = s(47246),
        m = s(94489),
        K = s(975),
        S = s(33640),
        M = s(10095);
      let $ = (() => {
        var t;
        class a {
          transform(r, o) {
            return `${r} (${o || 0})`;
          }
        }
        return (
          ((t = a).ɵfac = function (r) {
            return new (r || t)();
          }),
          (t.ɵpipe = e.Yjl({ name: "withCount", type: t, pure: !0 })),
          a
        );
      })();
      var X = s(76271),
        V = s(44889);
      function ee(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, "ul", 11)(1, "li", 12),
            e._UZ(2, "span", 13),
            e._uU(3),
            e.qZA(),
            e.TgZ(4, "li", 12),
            e._UZ(5, "span", 14),
            e._uU(6),
            e.qZA(),
            e.TgZ(7, "li", 12),
            e._UZ(8, "span", 15),
            e._uU(9),
            e.qZA(),
            e.TgZ(10, "li", 12),
            e._UZ(11, "span", 16),
            e._uU(12),
            e.qZA(),
            e.TgZ(13, "li", 17),
            e._UZ(14, "span", 14),
            e._uU(15),
            e.qZA()()),
          2 & t)
        ) {
          const n = e.oxw();
          e.xp6(2),
            e.Q6J("nzType", "file-excel")("nzTheme", "outline"),
            e.xp6(1),
            e.hij(
              " ",
              (null == n.model.stats ? null : n.model.stats.projects) || 0,
              " Projects "
            ),
            e.xp6(2),
            e.Q6J("nzType", "exclamation-circle")("nzTheme", "outline"),
            e.xp6(1),
            e.hij(
              " ",
              (null == n.model.stats ? null : n.model.stats.completed) || 0,
              " Completed Tasks "
            ),
            e.xp6(2),
            e.Q6J("nzType", "clock-circle")("nzTheme", "outline"),
            e.xp6(1),
            e.hij(
              " ",
              (null == n.model.stats ? null : n.model.stats.ongoing) || 0,
              " Ongoing Tasks "
            ),
            e.xp6(2),
            e.Q6J("nzType", "clock-circle")("nzTheme", "outline"),
            e.xp6(1),
            e.hij(
              " ",
              (null == n.model.stats ? null : n.model.stats.overdue) || 0,
              " Overdue Tasks "
            ),
            e.xp6(2),
            e.Q6J("nzType", "clock-circle")("nzTheme", "outline"),
            e.xp6(1),
            e.hij(
              " ",
              (null == n.model.stats ? null : n.model.stats.total_logged) || 0,
              " Logged Hours "
            );
        }
      }
      function te(t, a) {
        1 & t &&
          (e.TgZ(0, "div", 17)(1, "h4", 18),
          e._uU(2, "Tasks By Project"),
          e.qZA()());
      }
      function ne(t, a) {
        1 & t &&
          (e.ynx(0),
          e.TgZ(1, "div", 19)(2, "div", 20),
          e._UZ(3, "img", 21),
          e.qZA(),
          e.TgZ(4, "span", 22),
          e._uU(5, "No tasks to show."),
          e.qZA()(),
          e.BQk());
      }
      function re(t, a) {
        if (
          (1 & t && (e.TgZ(0, "div", 27), e._UZ(1, "canvas", 28), e.qZA()),
          2 & t)
        ) {
          const n = e.oxw(2);
          e.xp6(1),
            e.Q6J("width", 185)("height", 185)("data", n.projectsChartData)(
              "options",
              n.chartOptions
            )("legend", !1)("type", "doughnut");
        }
      }
      function oe(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, "li", 30),
            e._UZ(1, "nz-badge", 33),
            e.ALo(2, "safeString"),
            e.TgZ(3, "span", 34),
            e._uU(4),
            e.ALo(5, "ellipsis"),
            e.qZA()()),
          2 & t)
        ) {
          const n = a.$implicit;
          e.xp6(1),
            e.Q6J("nzColor", e.lcZ(2, 2, n.color)),
            e.xp6(3),
            e.Oqu(e.xi3(5, 4, n.label, 30));
        }
      }
      function ae(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, "ul", 29)(1, "li", 30),
            e._UZ(2, "nz-badge", 31),
            e.ALo(3, "withCount"),
            e.qZA(),
            e.YNc(4, oe, 6, 7, "li", 32),
            e.qZA()),
          2 & t)
        ) {
          const n = e.oxw(2);
          e.xp6(2),
            e.Q6J("nzColor", "#333333")(
              "nzText",
              e.xi3(3, 3, "All", n.model.by_project.total)
            ),
            e.xp6(2),
            e.Q6J("ngForOf", n.model.by_project.data);
        }
      }
      function se(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, "div", 23),
            e.YNc(1, re, 2, 6, "div", 24),
            e.TgZ(2, "div", 25),
            e.YNc(3, ae, 5, 6, "ul", 26),
            e.qZA()()),
          2 & t)
        ) {
          const n = e.oxw();
          e.xp6(1),
            e.Q6J(
              "ngIf",
              n.model.by_project && n.model.by_project.chart.length
            ),
            e.xp6(2),
            e.Q6J("ngIf", n.model.by_project);
        }
      }
      function ie(t, a) {
        1 & t &&
          (e.TgZ(0, "div", 17)(1, "div")(2, "h4", 18),
          e._uU(3, "Tasks By Status"),
          e.qZA()()());
      }
      function le(t, a) {
        1 & t &&
          (e.ynx(0),
          e.TgZ(1, "div", 19)(2, "div", 20),
          e._UZ(3, "img", 21),
          e.qZA(),
          e.TgZ(4, "span", 22),
          e._uU(5, "No tasks to show."),
          e.qZA()(),
          e.BQk());
      }
      function pe(t, a) {
        if (
          (1 & t && (e.TgZ(0, "div", 27), e._UZ(1, "canvas", 28), e.qZA()),
          2 & t)
        ) {
          const n = e.oxw(2);
          e.xp6(1),
            e.Q6J("width", 185)("height", 185)("data", n.statusChartData)(
              "options",
              n.chartOptions
            )("legend", !1)("type", "doughnut");
        }
      }
      function ce(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, "li", 30),
            e._UZ(1, "nz-badge", 31),
            e.ALo(2, "safeString"),
            e.ALo(3, "withCount"),
            e.qZA()),
          2 & t)
        ) {
          const n = a.$implicit;
          e.xp6(1),
            e.Q6J("nzColor", e.lcZ(2, 2, n.color))(
              "nzText",
              e.xi3(3, 4, n.label, n.count)
            );
        }
      }
      function me(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, "ul", 36)(1, "li", 30),
            e._UZ(2, "nz-badge", 31),
            e.ALo(3, "withCount"),
            e.qZA(),
            e.YNc(4, ce, 4, 7, "li", 32),
            e.qZA()),
          2 & t)
        ) {
          const n = e.oxw(2);
          e.xp6(2),
            e.Q6J("nzColor", "#333333")(
              "nzText",
              e.xi3(3, 3, "All", n.model.by_status.total)
            ),
            e.xp6(2),
            e.Q6J("ngForOf", n.model.by_status.data);
        }
      }
      function de(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, "div", 23),
            e.YNc(1, pe, 2, 6, "div", 24),
            e.TgZ(2, "div", 25),
            e.YNc(3, me, 5, 6, "ul", 35),
            e.qZA()()),
          2 & t)
        ) {
          const n = e.oxw();
          e.xp6(1),
            e.Q6J("ngIf", n.model.by_status && n.model.by_status.chart.length),
            e.xp6(2),
            e.Q6J("ngIf", n.model.by_status);
        }
      }
      function ge(t, a) {
        1 & t &&
          (e.TgZ(0, "div", 17)(1, "div")(2, "h4", 18),
          e._uU(3, "Tasks By Priority"),
          e.qZA()()());
      }
      function ue(t, a) {
        1 & t &&
          (e.ynx(0),
          e.TgZ(1, "div", 19)(2, "div", 20),
          e._UZ(3, "img", 21),
          e.qZA(),
          e.TgZ(4, "span", 22),
          e._uU(5, "No tasks to show."),
          e.qZA()(),
          e.BQk());
      }
      function he(t, a) {
        if (
          (1 & t && (e.TgZ(0, "div", 27), e._UZ(1, "canvas", 28), e.qZA()),
          2 & t)
        ) {
          const n = e.oxw(2);
          e.xp6(1),
            e.Q6J("width", 185)("height", 185)("data", n.prioritiesChartData)(
              "options",
              n.chartOptions
            )("legend", !1)("type", "doughnut");
        }
      }
      function _e(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, "li", 30),
            e._UZ(1, "nz-badge", 31),
            e.ALo(2, "safeString"),
            e.ALo(3, "withCount"),
            e.qZA()),
          2 & t)
        ) {
          const n = a.$implicit;
          e.xp6(1),
            e.Q6J("nzColor", e.lcZ(2, 2, n.color))(
              "nzText",
              e.xi3(3, 4, n.label, n.count)
            );
        }
      }
      function ve(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, "ul", 29)(1, "li", 30),
            e._UZ(2, "nz-badge", 31),
            e.ALo(3, "withCount"),
            e.qZA(),
            e.YNc(4, _e, 4, 7, "li", 32),
            e.qZA()),
          2 & t)
        ) {
          const n = e.oxw(2);
          e.xp6(2),
            e.Q6J("nzColor", "#333333")(
              "nzText",
              e.xi3(3, 3, "All", n.model.by_priority.total)
            ),
            e.xp6(2),
            e.Q6J("ngForOf", n.model.by_priority.data);
        }
      }
      function Te(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, "div", 23),
            e.YNc(1, he, 2, 6, "div", 24),
            e.TgZ(2, "div", 25),
            e.YNc(3, ve, 5, 6, "ul", 26),
            e.qZA()()),
          2 & t)
        ) {
          const n = e.oxw();
          e.xp6(1),
            e.Q6J(
              "ngIf",
              n.model.by_priority && n.model.by_priority.chart.length
            ),
            e.xp6(2),
            e.Q6J("ngIf", n.model.by_priority);
        }
      }
      let ze = (() => {
        var t;
        class a extends H.k {
          constructor(r, o, i, l, c) {
            super(l),
              (this.cdr = r),
              (this.service = o),
              (this.api = i),
              (this.ngZone = l),
              (this.socket = c),
              (this.memberId = null),
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
              (this.refresh = (L) => {
                this.get();
              });
          }
          ngOnInit() {
            this.get(), this.listenSockets();
          }
          ngOnDestroy() {
            this.socket.removeListener(
              m.C.TASK_STATUS_CHANGE.toString(),
              this.refresh
            ),
              this.socket.removeListener(
                m.C.TASK_PRIORITY_CHANGE.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                m.C.TASK_END_DATE_CHANGE.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                m.C.QUICK_TASK.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                m.C.QUICK_ASSIGNEES_UPDATE.toString(),
                this.refresh
              );
          }
          listenSockets() {
            this.socket.on(m.C.TASK_STATUS_CHANGE.toString(), this.refresh),
              this.socket.on(m.C.TASK_PRIORITY_CHANGE.toString(), this.refresh),
              this.socket.on(m.C.TASK_END_DATE_CHANGE.toString(), this.refresh),
              this.socket.on(m.C.QUICK_TASK.toString(), this.refresh),
              this.socket.on(
                m.C.QUICK_ASSIGNEES_UPDATE.toString(),
                this.refresh
              );
          }
          get() {
            var r = this;
            return (0, d.Z)(function* () {
              if (r.memberId) {
                try {
                  (r.loading = !0), r.clearCharts();
                  const o = yield r.api.getTeamMemberInfo({
                    teamMemberId: r.memberId,
                    duration: "LAST_WEEK",
                    date_range: [],
                    archived: r.service.getIncludeToggle(),
                  });
                  o.done && ((r.model = o.body), r.drawCharts(o.body)),
                    (r.loading = !1);
                } catch {
                  r.loading = !1;
                }
                r.cdr.markForCheck();
              }
            })();
          }
          drawCharts(r) {
            if (r.by_project) {
              for (const o of r.by_project.chart)
                this.projectsChartData.labels?.push(o.name),
                  this.projectsChartData.datasets[0].data.push(o.y || 0),
                  this.projectColors.push(o.color);
              this.projectsTaskChart?.update(),
                this.projectsChartData.datasets[0].data.every((o) => 0 === o) &&
                  (this.isProjectsChartEmpty = !0),
                this.cdr.markForCheck();
            }
            if (r.by_priority) {
              for (const o of r.by_priority.chart)
                this.prioritiesChartData.labels?.push(o.name),
                  this.prioritiesChartData.datasets[0].data.push(o.y || 0),
                  this.priorityColors.push(o.color);
              this.priorityTaskChart?.update(),
                this.prioritiesChartData.datasets[0].data.every(
                  (o) => 0 === o
                ) && (this.isPriorityChartEmpty = !0),
                this.cdr.markForCheck();
            }
            if (r.by_status) {
              for (const o of r.by_status.chart)
                this.statusChartData.labels?.push(o.name),
                  this.statusChartData.datasets[0].data.push(o.y || 0),
                  this.statusColors.push(o.color);
              this.statusTaskChart?.update(),
                this.statusChartData.datasets[0].data.every((o) => 0 === o) &&
                  (this.isStatusChartEmpty = !0),
                this.cdr.markForCheck();
            }
            this.cdr.markForCheck();
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
          ((t = a).ɵfac = function (r) {
            return new (r || t)(
              e.Y36(e.sBO),
              e.Y36(u.m),
              e.Y36(v.U),
              e.Y36(e.R0b),
              e.Y36(K.s)
            );
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [["worklenz-rpt-member-drawer-overview"]],
            viewQuery: function (r, o) {
              if (
                (1 & r && (e.Gf(z.jh, 5), e.Gf(z.jh, 5), e.Gf(z.jh, 5)), 2 & r)
              ) {
                let i;
                e.iGM((i = e.CRH())) && (o.projectsTaskChart = i.first),
                  e.iGM((i = e.CRH())) && (o.priorityTaskChart = i.first),
                  e.iGM((i = e.CRH())) && (o.statusTaskChart = i.first);
              }
            },
            inputs: { memberId: "memberId" },
            features: [e.qOj],
            decls: 25,
            vars: 16,
            consts: [
              ["nz-row", "", 3, "nzGutter"],
              ["nz-col", "", 1, "mb-2", 3, "nzSpan"],
              [1, "h-100", 3, "nzLoading"],
              ["class", "list-unstyled mt-3 ps-4", 4, "ngIf"],
              [3, "nzTitle"],
              ["dueDateCardTitle", ""],
              [1, "card-content"],
              [4, "ngIf"],
              ["class", "d-flex", 4, "ngIf"],
              ["statusCardTitle", ""],
              ["priorityCardTitle", ""],
              [1, "list-unstyled", "mt-3", "ps-4"],
              [1, "d-flex", "mb-3", "align-items-center"],
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
              ["class", "list-unstyled", 4, "ngIf"],
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
              [1, "list-unstyled"],
              [1, "mb-1", "chart-label"],
              [3, "nzColor", "nzText"],
              ["class", "mb-1 chart-label", 4, "ngFor", "ngForOf"],
              [3, "nzColor"],
              [2, "font-size", "13px"],
              [
                "class",
                "list-unstyled",
                "style",
                "max-height: 210px;overflow-y: auto;",
                4,
                "ngIf",
              ],
              [
                1,
                "list-unstyled",
                2,
                "max-height",
                "210px",
                "overflow-y",
                "auto",
              ],
            ],
            template: function (r, o) {
              if (
                (1 & r &&
                  (e.TgZ(0, "div", 0)(1, "div", 1)(2, "nz-card", 2),
                  e.YNc(3, ee, 16, 15, "ul", 3),
                  e.qZA()(),
                  e.TgZ(4, "div", 1)(5, "nz-card", 4),
                  e.YNc(6, te, 3, 0, "ng-template", null, 5, e.W1O),
                  e.TgZ(8, "div", 6),
                  e.YNc(9, ne, 6, 0, "ng-container", 7),
                  e.YNc(10, se, 4, 2, "div", 8),
                  e.qZA()()(),
                  e.TgZ(11, "div", 1)(12, "nz-card", 4),
                  e.YNc(13, ie, 4, 0, "ng-template", null, 9, e.W1O),
                  e.TgZ(15, "div", 6),
                  e.YNc(16, le, 6, 0, "ng-container", 7),
                  e.YNc(17, de, 4, 2, "div", 8),
                  e.qZA()()(),
                  e.TgZ(18, "div", 1)(19, "nz-card", 4),
                  e.YNc(20, ge, 4, 0, "ng-template", null, 10, e.W1O),
                  e.TgZ(22, "div", 6),
                  e.YNc(23, ue, 6, 0, "ng-container", 7),
                  e.YNc(24, Te, 4, 2, "div", 8),
                  e.qZA()()()()),
                2 & r)
              ) {
                const i = e.MAs(7),
                  l = e.MAs(14),
                  c = e.MAs(21);
                e.Q6J("nzGutter", 16),
                  e.xp6(1),
                  e.Q6J("nzSpan", 12),
                  e.xp6(1),
                  e.Q6J("nzLoading", o.loading),
                  e.xp6(1),
                  e.Q6J("ngIf", null == o.model ? null : o.model.stats),
                  e.xp6(1),
                  e.Q6J("nzSpan", 12),
                  e.xp6(1),
                  e.Q6J("nzTitle", i),
                  e.xp6(4),
                  e.Q6J("ngIf", o.isProjectsChartEmpty),
                  e.xp6(1),
                  e.Q6J("ngIf", !o.loading && !o.isProjectsChartEmpty),
                  e.xp6(1),
                  e.Q6J("nzSpan", 12),
                  e.xp6(1),
                  e.Q6J("nzTitle", l),
                  e.xp6(4),
                  e.Q6J("ngIf", o.isStatusChartEmpty),
                  e.xp6(1),
                  e.Q6J("ngIf", !o.loading && !o.isStatusChartEmpty),
                  e.xp6(1),
                  e.Q6J("nzSpan", 12),
                  e.xp6(1),
                  e.Q6J("nzTitle", c),
                  e.xp6(4),
                  e.Q6J("ngIf", o.isPriorityChartEmpty),
                  e.xp6(1),
                  e.Q6J("ngIf", !o.loading && !o.isPriorityChartEmpty);
              }
            },
            dependencies: [
              g.sg,
              g.O5,
              T.w,
              _.Ls,
              S.x7,
              h.bd,
              M.t3,
              M.SK,
              z.jh,
              $,
              X.m,
              V.p,
            ],
            styles: [
              ".chart[_ngcontent-%COMP%]{width:215px;max-width:215px}.chart-details[_ngcontent-%COMP%]{max-width:145px;max-height:215px;overflow-y:auto}.no-data-img-holder[_ngcontent-%COMP%]{width:65px}",
            ],
            changeDetection: 0,
          })),
          a
        );
      })();
      var f = s(60095),
        P = s(24139),
        fe = s(38265),
        x = s(20824),
        N = s(48128);
      function xe(t, a) {
        1 & t && e._UZ(0, "span", 11);
      }
      function Ce(t, a) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, "tr", 12),
            e.NdJ("click", function () {
              const i = e.CHM(n).$implicit,
                l = e.oxw();
              return e.KtG(l.openProject(i));
            }),
            e.TgZ(1, "td", 13),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "td"),
            e._uU(4),
            e.qZA(),
            e.TgZ(5, "td", 14),
            e._uU(6),
            e.qZA(),
            e.TgZ(7, "td"),
            e._UZ(8, "nz-progress", 15),
            e.qZA(),
            e.TgZ(9, "td", 14),
            e._uU(10),
            e.qZA(),
            e.TgZ(11, "td", 14),
            e._uU(12),
            e.qZA(),
            e.TgZ(13, "td", 14),
            e._uU(14),
            e.qZA(),
            e.TgZ(15, "td"),
            e._uU(16),
            e.qZA()();
        }
        if (2 & t) {
          const n = a.$implicit;
          e.xp6(2),
            e.Oqu(n.name),
            e.xp6(2),
            e.Oqu(n.team),
            e.xp6(2),
            e.Oqu(n.task_count),
            e.xp6(2),
            e.Q6J("nzPercent", n.contribution),
            e.xp6(2),
            e.Oqu(n.incompleted),
            e.xp6(2),
            e.Oqu(n.completed),
            e.xp6(2),
            e.Oqu(n.overdue),
            e.xp6(2),
            e.Oqu(n.time_logged);
        }
      }
      function we(t, a) {
        1 & t && e._UZ(0, "worklenz-na");
      }
      const be = function () {
        return { x: "260px" };
      };
      let Ze = (() => {
          var t;
          class a {
            constructor(r, o, i, l) {
              (this.cdr = r),
                (this.api = o),
                (this.drawer = i),
                (this.service = l),
                (this.teamMemberId = ""),
                (this.teamId = null),
                (this.openTasks = new e.vpe()),
                (this.searchText = null),
                (this.loading = !1),
                (this.model = []);
            }
            ngOnInit() {
              var r = this;
              return (0, d.Z)(function* () {
                yield r.get(!0);
              })();
            }
            search() {
              var r = this;
              return (0, d.Z)(function* () {
                yield r.get(!1);
              })();
            }
            get(r = !0) {
              var o = this;
              return (0, d.Z)(function* () {
                if (o.teamMemberId)
                  try {
                    o.loading = r;
                    const i = yield o.api.getMemberProjects({
                      teamMemberId: o.teamMemberId,
                      teamId: o.teamId,
                      search: o.searchText,
                      archived: o.service.getIncludeToggle(),
                    });
                    i.done && (o.model = i.body),
                      (o.loading = !1),
                      o.cdr.markForCheck();
                  } catch {
                    (o.loading = !1), o.cdr.markForCheck();
                  }
              })();
            }
            openProject(r) {
              this.openTasks.emit({
                id: r.id,
                name: r.name,
                client: "",
                status: { name: "", color_code: "", icon: "" },
                team_member_id: r.team_member_id,
              });
            }
          }
          return (
            ((t = a).ɵfac = function (r) {
              return new (r || t)(
                e.Y36(e.sBO),
                e.Y36(v.U),
                e.Y36(w.b),
                e.Y36(u.m)
              );
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [["worklenz-rpt-member-projects-list"]],
              inputs: { teamMemberId: "teamMemberId", teamId: "teamId" },
              outputs: { openTasks: "openTasks" },
              decls: 30,
              vars: 17,
              consts: [
                [1, "d-block", 3, "nzLoading", "nzActive"],
                [1, "mb-3", 2, "width", "250px", 3, "nzSuffix"],
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
                ["suffixIconSearch", ""],
                [3, "nzData", "nzLoading", "nzScroll"],
                ["projectsTable", ""],
                [
                  "nzLeft",
                  "",
                  "scope",
                  "col",
                  2,
                  "z-index",
                  "11",
                  3,
                  "nzWidth",
                ],
                ["scope", "col", 3, "nzWidth"],
                ["scope", "col", 1, "text-center", 3, "nzWidth"],
                ["class", "cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"],
                ["naTemplate", ""],
                ["nz-icon", "", "nzType", "search"],
                [1, "cursor-pointer", 3, "click"],
                ["nzLeft", ""],
                [1, "text-center"],
                ["nzSize", "small", 3, "nzPercent"],
              ],
              template: function (r, o) {
                if (
                  (1 & r &&
                    (e.TgZ(0, "nz-skeleton", 0)(1, "nz-input-group", 1)(
                      2,
                      "input",
                      2
                    ),
                    e.NdJ("ngModelChange", function (l) {
                      return (o.searchText = l);
                    })("ngModelChange", function () {
                      return o.search();
                    }),
                    e.qZA()(),
                    e.YNc(3, xe, 1, 0, "ng-template", null, 3, e.W1O),
                    e.TgZ(5, "div")(6, "nz-table", 4, 5)(8, "thead")(9, "tr")(
                      10,
                      "th",
                      6
                    ),
                    e._uU(11, "Project"),
                    e.qZA(),
                    e.TgZ(12, "th", 7),
                    e._uU(13, "Team"),
                    e.qZA(),
                    e.TgZ(14, "th", 8),
                    e._uU(15, "Tasks"),
                    e.qZA(),
                    e.TgZ(16, "th", 7),
                    e._uU(17, "Contribution"),
                    e.qZA(),
                    e.TgZ(18, "th", 8),
                    e._uU(19, "Incompleted Tasks"),
                    e.qZA(),
                    e.TgZ(20, "th", 8),
                    e._uU(21, "Completed Tasks"),
                    e.qZA(),
                    e.TgZ(22, "th", 8),
                    e._uU(23, "Overdue Tasks"),
                    e.qZA(),
                    e.TgZ(24, "th", 7),
                    e._uU(25, "Logged Time"),
                    e.qZA()()(),
                    e.TgZ(26, "tbody"),
                    e.YNc(27, Ce, 17, 8, "tr", 9),
                    e.qZA()()()(),
                    e.YNc(28, we, 1, 0, "ng-template", null, 10, e.W1O)),
                  2 & r)
                ) {
                  const i = e.MAs(4),
                    l = e.MAs(7);
                  e.Q6J("nzLoading", o.loading)("nzActive", !0),
                    e.xp6(1),
                    e.Q6J("nzSuffix", i),
                    e.xp6(1),
                    e.Q6J("ngModel", o.searchText),
                    e.xp6(4),
                    e.Q6J("nzData", o.model)("nzLoading", o.loading)(
                      "nzScroll",
                      e.DdM(16, be)
                    ),
                    e.xp6(4),
                    e.Q6J("nzWidth", "260px"),
                    e.xp6(2),
                    e.Q6J("nzWidth", "160px"),
                    e.xp6(2),
                    e.Q6J("nzWidth", "130px"),
                    e.xp6(2),
                    e.Q6J("nzWidth", "150px"),
                    e.xp6(2),
                    e.Q6J("nzWidth", "170px"),
                    e.xp6(2),
                    e.Q6J("nzWidth", "170px"),
                    e.xp6(2),
                    e.Q6J("nzWidth", "160px"),
                    e.xp6(2),
                    e.Q6J("nzWidth", "200px"),
                    e.xp6(3),
                    e.Q6J("ngForOf", l.data);
                }
              },
              dependencies: [
                g.sg,
                T.w,
                _.Ls,
                f.Fj,
                f.JJ,
                f.On,
                P.ng,
                fe.u,
                x.Zp,
                x.gB,
                x.ke,
                p.N8,
                p.Uo,
                p._C,
                p.Om,
                p.p0,
                p.$Z,
                p.qn,
                N.M,
              ],
              changeDetection: 0,
            })),
            a
          );
        })(),
        ye = (() => {
          var t;
          class a {
            constructor() {
              this.selectProject = new e.vpe();
            }
            onSelectProject(r) {
              this.selectProject.emit(r);
            }
          }
          return (
            ((t = a).ɵfac = function (r) {
              return new (r || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [["worklenz-rpt-member-drawer-projects"]],
              inputs: { teamId: "teamId", teamMemberId: "teamMemberId" },
              outputs: { selectProject: "selectProject" },
              decls: 1,
              vars: 2,
              consts: [[3, "teamId", "teamMemberId", "openTasks"]],
              template: function (r, o) {
                1 & r &&
                  (e.TgZ(0, "worklenz-rpt-member-projects-list", 0),
                  e.NdJ("openTasks", function (l) {
                    return o.onSelectProject(l);
                  }),
                  e.qZA()),
                  2 & r &&
                    e.Q6J("teamId", o.teamId)("teamMemberId", o.teamMemberId);
              },
              dependencies: [Ze],
              changeDetection: 0,
            })),
            a
          );
        })();
      var Ae = s(62806);
      let Me = (() => {
        var t;
        class a {}
        return (
          ((t = a).ɵfac = function (r) {
            return new (r || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [["worklenz-rpt-member-drawer-tasks"]],
            inputs: { projectId: "projectId", teamMemberId: "teamMemberId" },
            decls: 1,
            vars: 3,
            consts: [[3, "projectId", "teamMemberId", "onlySingleMember"]],
            template: function (r, o) {
              1 & r && e._UZ(0, "worklenz-rpt-flat-task-list", 0),
                2 & r &&
                  e.Q6J("projectId", o.projectId)(
                    "teamMemberId",
                    o.teamMemberId
                  )("onlySingleMember", !0);
            },
            dependencies: [Ae.X],
            changeDetection: 0,
          })),
          a
        );
      })();
      function Oe(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, "button", 11),
            e._uU(1, " Export "),
            e._UZ(2, "span", 12),
            e.qZA()),
          2 & t)
        ) {
          e.oxw();
          const n = e.MAs(9),
            r = e.oxw();
          e.Q6J("nzType", "primary")("nzDropdownMenu", n)(
            "nzPlacement",
            "bottomRight"
          )("nzLoading", r.exporting),
            e.xp6(2),
            e.Q6J("nzType", "down");
        }
      }
      function je(t, a) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, "div", 4)(1, "nz-breadcrumb", 5),
            e._UZ(2, "nz-breadcrumb-item"),
            e.TgZ(3, "nz-breadcrumb-item"),
            e._uU(4),
            e.qZA()(),
            e.TgZ(5, "div", 6)(6, "nz-space"),
            e.YNc(7, Oe, 3, 5, "button", 7),
            e.TgZ(8, "nz-dropdown-menu", null, 8)(10, "ul", 9)(11, "li", 10),
            e.NdJ("click", function () {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG(o.exportProjects());
            }),
            e._uU(12, "Projects"),
            e.qZA(),
            e.TgZ(13, "li", 10),
            e.NdJ("click", function () {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG(o.exportTasks());
            }),
            e._uU(14, "Tasks"),
            e.qZA()()()()()();
        }
        if (2 & t) {
          const n = e.oxw();
          e.xp6(4), e.hij(" ", null == n.member ? null : n.member.name, " ");
        }
      }
      function De(t, a) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, "worklenz-rpt-member-drawer-projects", 21),
            e.NdJ("selectProject", function (o) {
              e.CHM(n);
              const i = e.oxw(3);
              return e.KtG(i.onSelectProject(o));
            }),
            e.qZA();
        }
        if (2 & t) {
          const n = e.oxw(3);
          e.Q6J("teamId", n.team.id)("teamMemberId", n.member.id);
        }
      }
      function Ie(t, a) {
        if (1 & t) {
          const n = e.EpF();
          e.ynx(0),
            e.TgZ(1, "nz-tabset", 14)(2, "nz-tab", 15),
            e.NdJ("nzClick", function () {
              e.CHM(n);
              const o = e.MAs(4);
              return e.KtG(o.get());
            }),
            e._UZ(3, "worklenz-rpt-member-drawer-overview", 16, 17),
            e.qZA(),
            e.TgZ(5, "nz-tab", 18),
            e.YNc(6, De, 1, 2, "worklenz-rpt-member-drawer-projects", 19),
            e.qZA(),
            e.TgZ(7, "nz-tab", 18),
            e._UZ(8, "worklenz-rpt-member-drawer-tasks", 20),
            e.qZA()(),
            e.BQk();
        }
        if (2 & t) {
          const n = e.oxw(2);
          e.xp6(1),
            e.Q6J("nzType", "card"),
            e.xp6(1),
            e.Q6J("nzTitle", "Overview"),
            e.xp6(1),
            e.Q6J("memberId", n.member.id),
            e.xp6(2),
            e.Q6J("nzTitle", "Projects"),
            e.xp6(1),
            e.Q6J("ngIf", n.team),
            e.xp6(1),
            e.Q6J("nzTitle", "Tasks"),
            e.xp6(1),
            e.Q6J("teamMemberId", n.member.id)(
              "projectId",
              (null == n.project ? null : n.project.id) || null
            );
        }
      }
      function ke(t, a) {
        if ((1 & t && e.YNc(0, Ie, 9, 8, "ng-container", 13), 2 & t)) {
          const n = e.oxw();
          e.Q6J("ngIf", n.member);
        }
      }
      function Je(t, a) {
        if ((1 & t && e._UZ(0, "worklenz-rpt-drawer-title", 23), 2 & t)) {
          const n = e.oxw(2);
          e.Q6J("title", n.team.name)("icon", "bank");
        }
      }
      function Qe(t, a) {
        if (
          (1 & t && e.YNc(0, Je, 1, 2, "worklenz-rpt-drawer-title", 22), 2 & t)
        ) {
          const n = e.oxw();
          e.Q6J("ngIf", n.team);
        }
      }
      let Re = (() => {
        var t;
        class a {
          constructor(r, o, i, l) {
            (this.cdr = r),
              (this.service = o),
              (this.drawer = i),
              (this.exportApiService = l),
              (this.member = null),
              (this.team = null),
              (this.project = null),
              (this.show = !1),
              (this.exporting = !1),
              this.drawer.onOpenMember.pipe((0, C.sL)()).subscribe((c) => {
                this.open(c);
              });
          }
          close() {
            (this.show = !1),
              (this.member = null),
              (this.team = null),
              (this.project = null);
          }
          onSelectProject(r) {
            this.member && this.drawer.openTasks(r, this.member);
          }
          open(r) {
            (this.team = this.service.getCurrentTeam()),
              (this.member = r.member),
              (this.project = r.project),
              (this.show = !0),
              this.cdr.markForCheck();
          }
          exportProjects() {
            var r = this;
            return (0, d.Z)(function* () {
              if (r.member && r.team)
                try {
                  yield r.exportApiService.exportMemberProjects(
                    r.member.id,
                    r.team.id,
                    r.member.name,
                    r.team.name,
                    r.service.getIncludeToggle()
                  );
                } catch (o) {
                  (0, J.tu)(o);
                }
            })();
          }
          exportTasks() {
            var r = this;
            return (0, d.Z)(function* () {
              if (r.member)
                try {
                  yield r.exportApiService.exportMemberTasks(
                    r.member.id,
                    r.member.name,
                    r.team?.name,
                    {
                      archived: r.service.getIncludeToggle(),
                      only_single_member: !0,
                    }
                  );
                } catch (o) {
                  (0, J.tu)(o);
                }
            })();
          }
        }
        return (
          ((t = a).ɵfac = function (r) {
            return new (r || t)(
              e.Y36(e.sBO),
              e.Y36(u.m),
              e.Y36(w.b),
              e.Y36(W.O)
            );
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [["worklenz-rpt-member-drawer"]],
            decls: 7,
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
              ["memberDrawerTitle", ""],
              ["memberDrawerContent", ""],
              ["closeIcon", ""],
              [1, "d-flex", "align-items-center", "w-100"],
              [2, "margin-left", "-15px"],
              [1, "ms-auto"],
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
                "nzType",
                "nzDropdownMenu",
                "nzPlacement",
                "nzLoading",
              ],
              ["nz-icon", "", 3, "nzType"],
              [4, "ngIf"],
              [3, "nzType"],
              [3, "nzTitle", "nzClick"],
              [3, "memberId"],
              ["overview", ""],
              [3, "nzTitle"],
              [3, "teamId", "teamMemberId", "selectProject", 4, "ngIf"],
              [3, "teamMemberId", "projectId"],
              [3, "teamId", "teamMemberId", "selectProject"],
              [3, "title", "icon", 4, "ngIf"],
              [3, "title", "icon"],
            ],
            template: function (r, o) {
              if (
                (1 & r &&
                  (e.TgZ(0, "nz-drawer", 0),
                  e.NdJ("nzOnClose", function () {
                    return o.close();
                  }),
                  e.qZA(),
                  e.YNc(1, je, 15, 1, "ng-template", null, 1, e.W1O),
                  e.YNc(3, ke, 1, 1, "ng-template", null, 2, e.W1O),
                  e.YNc(5, Qe, 1, 1, "ng-template", null, 3, e.W1O)),
                2 & r)
              ) {
                const i = e.MAs(2),
                  l = e.MAs(4),
                  c = e.MAs(6);
                e.Q6J("nzClosable", !0)("nzVisible", o.show)(
                  "nzPlacement",
                  "right"
                )("nzTitle", i)("nzContent", l)("nzWidth", 900)(
                  "nzCloseIcon",
                  c
                );
              }
            },
            dependencies: [
              g.O5,
              Q.ix,
              T.w,
              B.dQ,
              R.Vz,
              _.Ls,
              b.NU,
              b.$1,
              Z.xH,
              Z.xw,
              y.Dg,
              y.MO,
              G.t,
              U.wO,
              U.r9,
              A.cm,
              A.RR,
              A.wA,
              ze,
              ye,
              Me,
            ],
            changeDetection: 0,
          })),
          a
        );
      })();
      var Ue = s(40914),
        Se = s(65411),
        Y = s(8083);
      function Pe(t, a) {
        1 & t && e._UZ(0, "span", 11),
          2 & t && e.Q6J("nzType", "bank")("nzTheme", "outline");
      }
      function Ne(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, "p", 12),
            e._uU(1),
            e.qZA(),
            e.TgZ(2, "p", 12),
            e._uU(3),
            e.qZA()),
          2 & t)
        ) {
          const n = e.oxw();
          e.Q6J("nzType", "secondary"),
            e.xp6(1),
            e.hij(
              "",
              null == n.model.teams ? null : n.model.teams.projects,
              " Projects"
            ),
            e.xp6(1),
            e.Q6J("nzType", "secondary"),
            e.xp6(1),
            e.hij(
              "",
              null == n.model.teams ? null : n.model.teams.members,
              " Members"
            );
        }
      }
      function Ye(t, a) {
        1 & t && e._UZ(0, "span", 13),
          2 & t && e.Q6J("nzType", "file")("nzTheme", "outline");
      }
      function Le(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, "p", 12),
            e._uU(1),
            e.qZA(),
            e.TgZ(2, "p", 14),
            e._uU(3),
            e.qZA()),
          2 & t)
        ) {
          const n = e.oxw();
          e.Q6J("nzType", "secondary"),
            e.xp6(1),
            e.hij(
              "",
              null == n.model.projects ? null : n.model.projects.active,
              " Active Projects"
            ),
            e.xp6(1),
            e.Q6J("nzType", "secondary"),
            e.xp6(1),
            e.hij(
              "",
              null == n.model.projects ? null : n.model.projects.overdue,
              " Overdue Projects"
            );
        }
      }
      function Ee(t, a) {
        1 & t && e._UZ(0, "span", 15),
          2 & t && e.Q6J("nzType", "usergroup-add")("nzTheme", "outline");
      }
      function Fe(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, "p", 12),
            e._uU(1),
            e.qZA(),
            e.TgZ(2, "p", 14),
            e._uU(3),
            e.qZA()),
          2 & t)
        ) {
          const n = e.oxw();
          e.Q6J("nzType", "secondary"),
            e.xp6(1),
            e.hij(
              "",
              null == n.model.members ? null : n.model.members.unassigned,
              " Unassigned Members"
            ),
            e.xp6(1),
            e.Q6J("nzType", "secondary"),
            e.xp6(1),
            e.hij(
              " ",
              null == n.model.members ? null : n.model.members.overdue,
              " Members with Overdue Tasks "
            );
        }
      }
      let qe = (() => {
        var t;
        class a {
          constructor(r, o, i) {
            (this.cdr = r),
              (this.api = o),
              (this.service = i),
              (this.loading = !1),
              (this.model = {}),
              this.service.onIncludeToggleChange
                .pipe((0, C.sL)())
                .subscribe(() => {
                  this.get();
                });
          }
          ngOnInit() {
            this.get();
          }
          get() {
            var r = this;
            return (0, d.Z)(function* () {
              try {
                r.loading = !0;
                const o = yield r.api.getOverviewStatistics(
                  r.service.getIncludeToggle()
                );
                o.done && (r.model = o.body), (r.loading = !1);
              } catch {
                r.loading = !1;
              }
              r.cdr.markForCheck();
            })();
          }
        }
        return (
          ((t = a).ɵfac = function (r) {
            return new (r || t)(e.Y36(e.sBO), e.Y36(v.U), e.Y36(u.m));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [["worklenz-rpt-overview-cards"]],
            decls: 20,
            vars: 12,
            consts: [
              [1, "container-fluid"],
              [1, "row"],
              [1, "col-3", "me-2", 3, "nzLoading"],
              [3, "nzTitle", "nzDescription", "nzAvatar"],
              ["tmAvatarTmpl", ""],
              ["tmDescriptionTmpl", ""],
              ["projAvatarTmpl", ""],
              ["projDescriptionTmpl", ""],
              [1, "col-4", "me-2", 3, "nzLoading"],
              ["mbrAvatarTmpl", ""],
              ["mbrDescriptionTmpl", ""],
              [
                "nz-icon",
                "",
                1,
                "card-icon",
                2,
                "color",
                "#70a6f3",
                3,
                "nzType",
                "nzTheme",
              ],
              ["nz-typography", "", 1, "mb-0", 3, "nzType"],
              [
                "nz-icon",
                "",
                1,
                "card-icon",
                2,
                "color",
                "#74c3bb",
                3,
                "nzType",
                "nzTheme",
              ],
              [
                "nz-typography",
                "",
                1,
                "mb-0",
                2,
                "color",
                "#f37070",
                3,
                "nzType",
              ],
              [
                "nz-icon",
                "",
                1,
                "card-icon",
                2,
                "color",
                "#8d7a9b",
                3,
                "nzType",
                "nzTheme",
              ],
            ],
            template: function (r, o) {
              if (
                (1 & r &&
                  (e.TgZ(0, "div", 0)(1, "div", 1)(2, "nz-card", 2),
                  e._UZ(3, "nz-card-meta", 3),
                  e.qZA(),
                  e.YNc(4, Pe, 1, 2, "ng-template", null, 4, e.W1O),
                  e.YNc(6, Ne, 4, 4, "ng-template", null, 5, e.W1O),
                  e.TgZ(8, "nz-card", 2),
                  e._UZ(9, "nz-card-meta", 3),
                  e.qZA(),
                  e.YNc(10, Ye, 1, 2, "ng-template", null, 6, e.W1O),
                  e.YNc(12, Le, 4, 4, "ng-template", null, 7, e.W1O),
                  e.TgZ(14, "nz-card", 8),
                  e._UZ(15, "nz-card-meta", 3),
                  e.qZA(),
                  e.YNc(16, Ee, 1, 2, "ng-template", null, 9, e.W1O),
                  e.YNc(18, Fe, 4, 4, "ng-template", null, 10, e.W1O),
                  e.qZA()()),
                2 & r)
              ) {
                const i = e.MAs(5),
                  l = e.MAs(7),
                  c = e.MAs(11),
                  L = e.MAs(13),
                  pt = e.MAs(17),
                  ct = e.MAs(19);
                e.xp6(2),
                  e.Q6J("nzLoading", o.loading),
                  e.xp6(1),
                  e.Q6J(
                    "nzTitle",
                    (null == o.model.teams ? null : o.model.teams.count) +
                      " Teams"
                  )("nzDescription", l)("nzAvatar", i),
                  e.xp6(5),
                  e.Q6J("nzLoading", o.loading),
                  e.xp6(1),
                  e.Q6J(
                    "nzTitle",
                    (null == o.model.projects ? null : o.model.projects.count) +
                      " Projects"
                  )("nzDescription", L)("nzAvatar", c),
                  e.xp6(5),
                  e.Q6J("nzLoading", o.loading),
                  e.xp6(1),
                  e.Q6J(
                    "nzTitle",
                    (null == o.model.members ? null : o.model.members.count) +
                      " Members"
                  )("nzDescription", ct)("nzAvatar", pt);
              }
            },
            dependencies: [h.bd, h.l7, _.Ls, Y.ZU, T.w],
            styles: [".card-icon[_ngcontent-%COMP%]{font-size:42px}"],
            changeDetection: 0,
          })),
          a
        );
      })();
      function We(t, a) {
        1 & t && (e.ynx(0), e._uU(1, " - "), e.BQk());
      }
      const Be = function () {
        return [];
      };
      function Ge(t, a) {
        if ((1 & t && e._UZ(0, "worklenz-avatars", 9), 2 & t)) {
          const n = e.oxw().$implicit;
          e.Q6J("names", n.members || e.DdM(1, Be));
        }
      }
      function He(t, a) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, "tr", 6),
            e.NdJ("click", function () {
              const i = e.CHM(n).$implicit,
                l = e.oxw();
              return e.KtG(l.openTeamInfo(i));
            }),
            e.TgZ(1, "td"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "td"),
            e._uU(4),
            e.qZA(),
            e.TgZ(5, "td"),
            e.YNc(6, We, 2, 0, "ng-container", 7),
            e.YNc(7, Ge, 1, 2, "ng-template", null, 8, e.W1O),
            e.qZA()();
        }
        if (2 & t) {
          const n = a.$implicit,
            r = e.MAs(8);
          e.xp6(2),
            e.Oqu(n.name),
            e.xp6(2),
            e.Oqu(n.projects_count),
            e.xp6(2),
            e.Q6J("ngIf", !(null != n.members && n.members.length))(
              "ngIfElse",
              r
            );
        }
      }
      const Ke = [
        {
          path: "",
          component: (() => {
            var t;
            class a {
              constructor(r, o, i, l, c) {
                (this.cdr = r),
                  (this.api = o),
                  (this.app = i),
                  (this.drawer = l),
                  (this.reportingApi = c),
                  (this.loading = !1),
                  (this.isDurationLabelSelected = !0),
                  (this.teams = []),
                  (this.selectedTeam = null),
                  this.app.setTitle("Reporting - Overview"),
                  this.reportingApi.onIncludeToggleChange
                    .pipe((0, C.sL)())
                    .subscribe(() => {
                      this.get();
                    });
              }
              ngOnInit() {
                this.get();
              }
              get() {
                var r = this;
                return (0, d.Z)(function* () {
                  try {
                    r.loading = !0;
                    const o = yield r.api.getOverviewTeams(
                      r.reportingApi.getIncludeToggle()
                    );
                    o.done && (r.teams = o.body), (r.loading = !1);
                  } catch {
                    r.loading = !1;
                  }
                  r.cdr.markForCheck();
                })();
              }
              openTeamInfo(r) {
                (this.selectedTeam = r), this.drawer.openTeam(r);
              }
              trackBy(r, o) {
                return o.id;
              }
            }
            return (
              ((t = a).ɵfac = function (r) {
                return new (r || t)(
                  e.Y36(e.sBO),
                  e.Y36(v.U),
                  e.Y36(E.z),
                  e.Y36(w.b),
                  e.Y36(u.m)
                );
              }),
              (t.ɵcmp = e.Xpm({
                type: t,
                selectors: [["worklenz-rpt-overview"]],
                decls: 23,
                vars: 10,
                consts: [
                  [
                    3,
                    "title",
                    "showDuration",
                    "showExport",
                    "isDurationLabelSelected",
                  ],
                  [1, "d-block", "mb-4"],
                  [3, "nzLoading"],
                  [
                    3,
                    "nzSize",
                    "nzData",
                    "nzShowPagination",
                    "nzHideOnSinglePage",
                  ],
                  ["table", ""],
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
                  [1, "cursor-pointer", 3, "click"],
                  [4, "ngIf", "ngIfElse"],
                  ["avatars", ""],
                  [3, "names"],
                ],
                template: function (r, o) {
                  if (
                    (1 & r &&
                      (e.TgZ(0, "worklenz-rpt-header", 0),
                      e.NdJ("isDurationLabelSelected", function (l) {
                        return (o.isDurationLabelSelected = l);
                      }),
                      e.qZA(),
                      e.TgZ(1, "nz-content"),
                      e._UZ(2, "worklenz-rpt-overview-cards", 1),
                      e.TgZ(3, "nz-card", 2)(4, "h3"),
                      e._uU(5, "Teams"),
                      e.qZA(),
                      e.TgZ(6, "nz-table", 3, 4)(8, "thead")(9, "tr")(10, "th"),
                      e._uU(11, "Name"),
                      e.qZA(),
                      e.TgZ(12, "th"),
                      e._uU(13, "Projects"),
                      e.qZA(),
                      e.TgZ(14, "th"),
                      e._uU(15, "Members"),
                      e.qZA()()(),
                      e.TgZ(16, "tbody"),
                      e.YNc(17, He, 9, 4, "tr", 5),
                      e.qZA()()()(),
                      e._UZ(18, "worklenz-rpt-team-drawer")(
                        19,
                        "worklenz-rpt-project-drawer"
                      )(20, "worklenz-rpt-member-drawer")(
                        21,
                        "worklenz-rpt-tasks-drawer"
                      )(22, "worklenz-rpt-task-view-drawer")),
                    2 & r)
                  ) {
                    const i = e.MAs(7);
                    e.Q6J("title", "Overview")("showDuration", !1)(
                      "showExport",
                      !1
                    ),
                      e.xp6(3),
                      e.Q6J("nzLoading", o.loading),
                      e.xp6(3),
                      e.Q6J("nzSize", "small")("nzData", o.teams)(
                        "nzShowPagination",
                        !0
                      )("nzHideOnSinglePage", !0),
                      e.xp6(11),
                      e.Q6J("ngForOf", i.data)("ngForTrackBy", o.trackBy);
                  }
                },
                dependencies: [
                  g.sg,
                  g.O5,
                  D.I,
                  I.OK,
                  h.bd,
                  p.N8,
                  p.Uo,
                  p._C,
                  p.Om,
                  p.p0,
                  p.$Z,
                  k.o,
                  F.D,
                  q.$,
                  Re,
                  Ue.W,
                  Se.W,
                  qe,
                ],
                changeDetection: 0,
              })),
              a
            );
          })(),
        },
      ];
      let $e = (() => {
        var t;
        class a {}
        return (
          ((t = a).ɵfac = function (r) {
            return new (r || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({ imports: [j.Bz.forChild(Ke), j.Bz] })),
          a
        );
      })();
      var Xe = s(96928),
        Ve = s(90565),
        et = s(9691),
        tt = s(91921),
        nt = s(15484),
        rt = s(3400),
        ot = s(27546),
        at = s(92893),
        st = s(64948),
        it = s(55695);
      let lt = (() => {
        var t;
        class a {}
        return (
          ((t = a).ɵfac = function (r) {
            return new (r || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({
            imports: [
              g.ez,
              $e,
              D.I,
              I.wm,
              h.vh,
              Xe.Rt,
              _.PV,
              Y.ZJ,
              p.HQ,
              k.o,
              R.BL,
              b.zf,
              Q.sL,
              Z.we,
              P.H0,
              x.o7,
              f.u5,
              M.Jb,
              y.lt,
              S.mS,
              N.W,
              Ve.cD,
              et.LV,
              tt.ReportingModule,
              nt.C,
              rt.j,
              ot.$,
              at.e,
              st.i,
              it.X,
            ],
          })),
          a
        );
      })();
    },
  },
]);
