"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [169],
  {
    91169: (Se, Z, s) => {
      s.r(Z), s.d(Z, { RptTimeProjectsModule: () => xe });
      var z = s(96814),
        P = s(35420),
        m = s(15861),
        y = s(47246),
        k = s(69649),
        H = s(63019),
        E = s(71993),
        W = s(16676),
        l = s.n(W),
        d = s(21406),
        e = s(65879),
        A = s(42012),
        L = s(16196),
        p = s(60095),
        j = s(42840),
        Y = s(70855),
        D = s(41958),
        b = s(82962),
        J = s(62612),
        _ = s(73460),
        f = s(62787),
        F = s(20824),
        O = s(33410),
        w = s(92574),
        U = s(63106),
        x = s(62595),
        S = s(8083),
        Q = s(60804),
        N = s(33640),
        $ = s(69342),
        G = s(32333),
        K = s(24139),
        R = s(52682),
        V = s(55695),
        q = s(3599),
        B = s(43389),
        I = s(43498),
        X = s(96928),
        ee = s(66987),
        te = s(2919);
      function ne(r, c) {
        1 & r &&
          (e.ynx(0),
          e.TgZ(1, "div", 18)(2, "div", 19),
          e._UZ(3, "img", 20),
          e.qZA(),
          e.TgZ(4, "span", 21),
          e._uU(5, "No time logs to show."),
          e.qZA()(),
          e.BQk());
      }
      function oe(r, c) {
        if (
          (1 & r && (e._UZ(0, "nz-avatar", 29), e.ALo(1, "firstCharUpper")),
          2 & r)
        ) {
          const a = e.oxw().$implicit,
            t = e.oxw(4);
          e.Udp(
            "background-color",
            a.avatar_url ? "#ececec" : t.getColor(a.user_name)
          ),
            e.Q6J("nzSize", 26)("nzText", e.lcZ(1, 5, a.user_name))(
              "nzSrc",
              a.avatar_url
            );
        }
      }
      function re(r, c) {
        if (
          (1 & r &&
            (e.TgZ(0, "nz-timeline-item"),
            e.YNc(1, oe, 2, 7, "nz-avatar", 26),
            e.TgZ(2, "span", 27)(3, "b"),
            e._uU(4),
            e.qZA(),
            e._uU(5, " logged "),
            e.TgZ(6, "b"),
            e._uU(7),
            e.qZA(),
            e._uU(8, " for "),
            e.TgZ(9, "b"),
            e._uU(10),
            e.qZA(),
            e.TgZ(11, "nz-tag", 28),
            e._uU(12),
            e.qZA()()()),
          2 & r)
        ) {
          const a = c.$implicit;
          e.xp6(1),
            e.Q6J("ngIf", a.user_name),
            e.xp6(3),
            e.Oqu(a.user_name),
            e.xp6(3),
            e.Oqu(a.time_spent_string),
            e.xp6(3),
            e.Oqu(a.task_name),
            e.xp6(2),
            e.Oqu(a.task_key);
        }
      }
      function ae(r, c) {
        if (
          (1 & r &&
            (e.TgZ(0, "nz-timeline"),
            e.YNc(1, re, 13, 5, "nz-timeline-item", 17),
            e.qZA()),
          2 & r)
        ) {
          const a = e.oxw().$implicit;
          e.xp6(1), e.Q6J("ngForOf", a.logs);
        }
      }
      function ie(r, c) {
        1 & r &&
          (e.ynx(0),
          e.TgZ(1, "div", 30),
          e._uU(2, " No time logs to show. "),
          e.qZA(),
          e.BQk());
      }
      function se(r, c) {
        if (
          (1 & r &&
            (e.TgZ(0, "div", 31)(1, "span", 27),
            e._uU(2),
            e.ALo(3, "date"),
            e.qZA()()),
          2 & r)
        ) {
          const a = e.oxw().$implicit;
          e.xp6(2), e.Oqu(e.xi3(3, 1, a.log_day, "MMM dd, YYYY"));
        }
      }
      function ce(r, c) {
        if (
          (1 & r &&
            (e.ynx(0),
            e.TgZ(1, "div", 22)(2, "nz-card", 23)(3, "div", 24),
            e.YNc(4, ae, 2, 1, "nz-timeline", 16),
            e.YNc(5, ie, 3, 0, "ng-container", 16),
            e.qZA()(),
            e.YNc(6, se, 4, 4, "ng-template", null, 25, e.W1O),
            e.qZA(),
            e._UZ(8, "nz-divider"),
            e.BQk()),
          2 & r)
        ) {
          const a = c.$implicit,
            t = e.MAs(7);
          e.xp6(2),
            e.Q6J("nzTitle", t),
            e.xp6(2),
            e.Q6J("ngIf", a.logs.length),
            e.xp6(1),
            e.Q6J("ngIf", !a.logs.length);
        }
      }
      function le(r, c) {
        if (1 & r) {
          const a = e.EpF();
          e.ynx(0),
            e.TgZ(1, "nz-skeleton", 12)(2, "div", 13)(3, "button", 14),
            e.NdJ("click", function () {
              e.CHM(a);
              const n = e.oxw();
              return e.KtG(n.exportExcel());
            }),
            e._UZ(4, "span", 15),
            e._uU(5, " Export to Excel "),
            e.qZA()(),
            e.YNc(6, ne, 6, 0, "ng-container", 16),
            e.YNc(7, ce, 9, 3, "ng-container", 17),
            e.qZA(),
            e.BQk();
        }
        if (2 & r) {
          const a = e.oxw();
          e.xp6(1),
            e.ekj("p-4", a.loading),
            e.Q6J("nzActive", !0)("nzLoading", a.loading),
            e.xp6(2),
            e.Q6J("nzLoading", a.exporting),
            e.xp6(3),
            e.Q6J(
              "ngIf",
              !(null != a.timelogsBreakDown && a.timelogsBreakDown.length)
            ),
            e.xp6(1),
            e.Q6J("ngForOf", a.timelogsBreakDown);
        }
      }
      function de(r, c) {
        if (
          (1 & r &&
            (e.TgZ(0, "div", 32)(1, "div", 33)(2, "h5", 34),
            e._uU(3),
            e.qZA()(),
            e.TgZ(4, "div", 35)(5, "div", 36)(6, "button", 37),
            e._uU(7),
            e._UZ(8, "span", 38),
            e.qZA()()()()),
          2 & r)
        ) {
          const a = e.oxw(),
            t = e.MAs(5);
          e.xp6(3),
            e.Oqu(null == a.project ? null : a.project.name),
            e.xp6(3),
            e.Q6J("nzDropdownMenu", t)("nzTrigger", "click")(
              "nzPlacement",
              "bottomRight"
            ),
            e.xp6(1),
            e.hij(" ", a.durationLabel, " "),
            e.xp6(1),
            e.Q6J("nzType", "down");
        }
      }
      function ge(r, c) {
        if (1 & r) {
          const a = e.EpF();
          e.TgZ(0, "li", 39),
            e.NdJ("click", function () {
              const o = e.CHM(a).$implicit,
                i = e.oxw();
              return e.KtG(i.onDurationChange(o));
            }),
            e._uU(1),
            e.TgZ(2, "small", 40),
            e._uU(3),
            e.qZA()();
        }
        if (2 & r) {
          const a = c.$implicit,
            t = e.oxw();
          e.Q6J(
            "nzSelected",
            a.key ===
              (null != t.selectedDuration && t.selectedDuration.key
                ? null == t.selectedDuration
                  ? null
                  : t.selectedDuration.key
                : t.durations[0].key) && !t.dateRange.length
          ),
            e.xp6(1),
            e.hij(" ", a.label, " "),
            e.xp6(2),
            e.hij(" ", a.dates, "");
        }
      }
      const he = function () {
        return { standalone: !0 };
      };
      let me = (() => {
        var r;
        class c {
          getColor(t) {
            return d.Lj[t?.charAt(0).toUpperCase() || "A"];
          }
          get durationLabel() {
            const t = "yy-MM-DD";
            return this.isDrawerDurationLabelSelected
              ? this.selectedDuration
                ? this.selectedDuration.label
                : "Duration"
              : 2 == this.dateRange.length
              ? `${l()(this.dateRange[0]).format(t)} - ${l()(
                  this.dateRange[1]
                ).format(t)}`
              : this.selectedDuration
              ? this.selectedDuration.label
              : "Duration";
          }
          constructor(t, n, o, i, g) {
            (this.cdr = t),
              (this.api = n),
              (this.reportingService = o),
              (this.reportingExportApi = i),
              (this.auth = g),
              (this.show = !1),
              (this.project = null),
              (this.isDurationLabelSelected = !0),
              (this.onClose = new e.vpe()),
              (this.loading = !0),
              (this.exporting = !1),
              (this.isDrawerDurationLabelSelected = !1),
              (this.dateRange = []),
              (this.durations = [
                {
                  label: "Yesterday",
                  key: d.WD,
                  dates: l()()
                    .subtract(1, "days")
                    .format("MMM,DD YYYY")
                    .toString(),
                },
                {
                  label: "Last 7 days",
                  key: d.ao,
                  dates:
                    l()()
                      .subtract(1, "weeks")
                      .format("MMM,DD YYYY")
                      .toString() +
                    " - " +
                    l()().format("MMM,DD YYYY").toString(),
                },
                {
                  label: "Last week",
                  key: d.$U,
                  dates:
                    l()()
                      .subtract(1, "weeks")
                      .startOf("week")
                      .format("MMM,DD YYYY")
                      .toString() +
                    " - " +
                    l()()
                      .subtract(1, "weeks")
                      .endOf("week")
                      .format("MMM,DD YYYY")
                      .toString(),
                },
                {
                  label: "Last 30 days",
                  key: d.ly,
                  dates:
                    l()()
                      .subtract(1, "month")
                      .format("MMM,DD YYYY")
                      .toString() +
                    " - " +
                    l()().format("MMM,DD YYYY").toString(),
                },
                {
                  label: "Last month",
                  key: d.lI,
                  dates:
                    l()()
                      .subtract(1, "month")
                      .startOf("month")
                      .format("MMM,DD YYYY")
                      .toString() +
                    " - " +
                    l()()
                      .subtract(1, "month")
                      .endOf("month")
                      .format("MMM,DD YYYY")
                      .toString(),
                },
                {
                  label: "Last 3 months",
                  key: d.o9,
                  dates:
                    l()()
                      .subtract(3, "months")
                      .format("MMM,DD YYYY")
                      .toString() +
                    " - " +
                    l()().format("MMM,DD YYYY").toString(),
                },
                { label: "All time", key: d.Si, dates: "" },
              ]),
              (this.selectedDuration = null),
              (this.timelogsBreakDown = null);
          }
          handleCancel() {
            (this.show = !1), (this.project = null), this.onClose.emit();
          }
          setDatesForKeys() {
            var t = this;
            return (0, m.Z)(function* () {
              if (t.selectedDuration?.key) {
                const n = t.selectedDuration?.key,
                  o = l()();
                switch (n) {
                  case d.WD:
                    const i = l()().subtract(1, "days");
                    t.dateRange = [i.toString(), i.toString()];
                    break;
                  case d.ao:
                    const g = l()().subtract(1, "weeks");
                    t.dateRange = [g.toString(), o.toString()];
                    break;
                  case d.ly:
                    const h = l()().subtract(1, "months");
                    t.dateRange = [h.toString(), o.toString()];
                    break;
                  case d.o9:
                    const C = l()().subtract(3, "months");
                    t.dateRange = [C.toString(), o.toString()];
                    break;
                  case d.$U:
                    const u = l()().subtract(1, "weeks").startOf("week"),
                      v = l()().subtract(1, "weeks").endOf("week");
                    t.dateRange = [u.toString(), v.toString()];
                    break;
                  case d.lI:
                    const T = l()().subtract(1, "month").startOf("month"),
                      M = l()().subtract(1, "month").endOf("month");
                    t.dateRange = [T.toString(), M.toString()];
                    break;
                  case d.Si:
                    t.dateRange = [];
                }
              }
            })();
          }
          get() {
            var t = this;
            return (0, m.Z)(function* () {
              if (t.project)
                try {
                  (t.loading = !0),
                    t.isDrawerDurationLabelSelected &&
                      (yield t.setDatesForKeys());
                  const n = {
                      id: t.project.id,
                      duration: t.selectedDuration
                        ? t.selectedDuration.key
                        : t.durations[1].key,
                      date_range: t.dateRange,
                      time_zone: t.auth.getCurrentSession()?.timezone_name
                        ? t.auth.getCurrentSession()?.timezone_name
                        : Intl.DateTimeFormat().resolvedOptions().timeZone,
                    },
                    o = yield t.api.getProjectTimeLogs(n);
                  o.done &&
                    (o.body.sort((i, g) => {
                      const h = new Date(i.log_day);
                      return new Date(g.log_day).getTime() - h.getTime();
                    }),
                    (t.timelogsBreakDown = o.body)),
                    (t.loading = !1),
                    t.isDrawerDurationLabelSelected && (t.dateRange = []),
                    t.cdr.markForCheck();
                } catch (n) {
                  (0, k.tu)(n), (t.loading = !1);
                }
            })();
          }
          exportExcel() {
            var t = this;
            return (0, m.Z)(function* () {
              if (t.project)
                try {
                  (t.exporting = !1),
                    t.isDrawerDurationLabelSelected &&
                      (yield t.setDatesForKeys());
                  const n = {
                    id: t.project.id,
                    duration: t.selectedDuration
                      ? t.selectedDuration.key
                      : t.durations[1].key,
                    date_range: t.dateRange,
                    time_zone: t.auth.getCurrentSession()?.timezone_name
                      ? t.auth.getCurrentSession()?.timezone_name
                      : Intl.DateTimeFormat().resolvedOptions().timeZone,
                  };
                  t.reportingExportApi.exportProjectTimeLogs(n, t.project.name),
                    (t.exporting = !1);
                } catch (n) {
                  (t.exporting = !1), (0, k.tu)(n);
                }
            })();
          }
          onVisibilityChange(t) {
            if (t) {
              const n = this.reportingService.getDuration()?.key,
                o = this.reportingService.getDateRange();
              2 === o.length &&
                !this.isDurationLabelSelected &&
                (this.dateRange = o),
                (this.isDrawerDurationLabelSelected =
                  this.isDurationLabelSelected);
              const i = this.durations.find((g) => g.key === n);
              i && (this.selectedDuration = i), this.get();
            } else (this.timelogsBreakDown = null), this.onClose.emit();
          }
          onDurationChange(t) {
            (this.dateRange = []),
              (this.selectedDuration = t),
              (this.isDrawerDurationLabelSelected = !0),
              this.get();
          }
          customDateChange() {
            (this.isDrawerDurationLabelSelected = !1), this.get();
          }
        }
        return (
          ((r = c).ɵfac = function (t) {
            return new (t || r)(
              e.Y36(e.sBO),
              e.Y36(L.U),
              e.Y36(A.m),
              e.Y36($.O),
              e.Y36(G.e)
            );
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
            selectors: [["worklenz-project-logs-breakdown"]],
            inputs: {
              show: "show",
              project: "project",
              isDurationLabelSelected: "isDurationLabelSelected",
            },
            outputs: { onClose: "onClose" },
            decls: 17,
            vars: 11,
            consts: [
              [
                3,
                "nzVisible",
                "nzSize",
                "nzCloseIcon",
                "nzTitle",
                "nzWrapClassName",
                "nzOnClose",
                "nzVisibleChange",
              ],
              [4, "nzDrawerContent"],
              ["titleTemplate", ""],
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
              [1, "pt-3", 3, "nzActive", "nzLoading"],
              [1, "d-block", "w-100", "text-end"],
              [
                "nz-button",
                "",
                "nzType",
                "default",
                "nzSize",
                "small",
                1,
                "mb-3",
                3,
                "nzLoading",
                "click",
              ],
              ["nz-icon", "", "nzType", "download", "nzTheme", "outline"],
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
              ["nz-typography", ""],
              [1, "ms-2", "mt-1"],
              [1, "me-2", 3, "nzSize", "nzText", "nzSrc"],
              [1, "d-block", "mb-4"],
              [1, "log-day"],
              [1, "d-flex"],
              [1, "left", "pe-3"],
              ["nz-typography", "", 1, "mb-0"],
              [1, "right", "ms-auto"],
              [1, "text-end"],
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
              ["nz-menu-item", "", 3, "nzSelected", "click"],
              [1, "ms-auto", "text-secondary"],
            ],
            template: function (t, n) {
              if (
                (1 & t &&
                  (e.TgZ(0, "nz-drawer", 0),
                  e.NdJ("nzOnClose", function () {
                    return n.handleCancel();
                  })("nzVisibleChange", function (i) {
                    return (n.show = i);
                  })("nzVisibleChange", function () {
                    return n.onVisibilityChange(n.show);
                  }),
                  e.YNc(1, le, 8, 7, "ng-container", 1),
                  e.YNc(2, de, 9, 6, "ng-template", null, 2, e.W1O),
                  e.qZA(),
                  e.TgZ(4, "nz-dropdown-menu", null, 3)(6, "ul", 4),
                  e.YNc(7, ge, 4, 3, "li", 5),
                  e._UZ(8, "li", 6),
                  e.TgZ(9, "li", 7)(10, "form", 8)(11, "label"),
                  e._uU(12, "Custom range"),
                  e.qZA(),
                  e.TgZ(13, "div", 9)(14, "nz-range-picker", 10),
                  e.NdJ("ngModelChange", function (i) {
                    return (n.dateRange = i);
                  }),
                  e.qZA()(),
                  e.TgZ(15, "button", 11),
                  e.NdJ("click", function () {
                    return n.customDateChange();
                  }),
                  e._uU(16, " Filter "),
                  e.qZA()()()()()),
                2 & t)
              ) {
                const o = e.MAs(3);
                e.Q6J("nzVisible", n.show)("nzSize", "large")(
                  "nzCloseIcon",
                  "close"
                )("nzTitle", o)(
                  "nzWrapClassName",
                  "task-form-drawer-opened task-view"
                ),
                  e.xp6(7),
                  e.Q6J("ngForOf", n.durations),
                  e.xp6(7),
                  e.Q6J("ngModel", n.dateRange)(
                    "ngModelOptions",
                    e.DdM(10, he)
                  ),
                  e.xp6(1),
                  e.Q6J("nzType", "primary")("nzSize", "small");
              }
            },
            dependencies: [
              z.sg,
              z.O5,
              _.wO,
              _.r9,
              _.YV,
              f.cm,
              f.RR,
              f.wA,
              j.ix,
              Y.w,
              D.dQ,
              x.Ls,
              p._Y,
              p.JJ,
              p.JL,
              p.On,
              p.F,
              S.ZU,
              K.ng,
              R.uw,
              R.wS,
              V.j,
              q.Lr,
              B.Vz,
              B.SQ,
              I.Zv,
              I.PD,
              X.Dz,
              b.bd,
              ee.g,
              z.uU,
              te.I,
            ],
            styles: [".no-data-img-holder[_ngcontent-%COMP%]{max-width:64px}"],
            changeDetection: 0,
          })),
          c
        );
      })();
      var pe = s(9172);
      const ue = ["exportChartCanvas"];
      function Ce(r, c) {
        if (
          (1 & r &&
            (e.TgZ(0, "button", 21),
            e._uU(1, " Teams "),
            e._UZ(2, "span", 22),
            e.qZA()),
          2 & r)
        ) {
          const a = e.oxw(2),
            t = e.MAs(9);
          e.Q6J("nzDropdownMenu", t)("nzClickHide", !1)(
            "nzLoading",
            a.loadingTeams
          )("nzTrigger", "click");
        }
      }
      function _e(r, c) {
        if (
          (1 & r &&
            (e.TgZ(0, "button", 21),
            e._uU(1, " Categories "),
            e._UZ(2, "span", 22),
            e.qZA()),
          2 & r)
        ) {
          const a = e.oxw(2),
            t = e.MAs(20);
          e.Q6J("nzDropdownMenu", t)("nzClickHide", !1)(
            "nzLoading",
            a.loadingCategories
          )("nzTrigger", "click");
        }
      }
      function fe(r, c) {
        if (
          (1 & r &&
            (e.TgZ(0, "button", 21),
            e._uU(1, " Projects "),
            e._UZ(2, "span", 22),
            e.qZA()),
          2 & r)
        ) {
          const a = e.oxw(2),
            t = e.MAs(33);
          e.Q6J("nzDropdownMenu", t)("nzClickHide", !1)(
            "nzLoading",
            a.loadingProjects
          )("nzTrigger", "click");
        }
      }
      function ze(r, c) {
        1 & r &&
          (e.TgZ(0, "nz-space"),
          e.YNc(1, Ce, 3, 4, "button", 20),
          e.YNc(2, _e, 3, 4, "button", 20),
          e.YNc(3, fe, 3, 4, "button", 20),
          e.qZA());
      }
      function Te(r, c) {
        if (
          (1 & r &&
            (e.TgZ(0, "div", 23)(1, "div", 24)(2, "div", 25),
            e._UZ(3, "canvas", 26, 27),
            e.qZA()()()),
          2 & r)
        ) {
          const a = e.oxw();
          e.xp6(2),
            e.Udp("height", a.chartHeight + "px")("width", a.chartWidth + "px"),
            e.xp6(1),
            e.Q6J("data", a.barChartData)("options", a.barChartOptions)(
              "legend",
              !1
            )("type", "bar");
        }
      }
      function ke(r, c) {
        1 & r && e._UZ(0, "nz-empty");
      }
      function ve(r, c) {
        if (1 & r) {
          const a = e.EpF();
          e.TgZ(0, "li", 11),
            e.NdJ("nzCheckedChange", function (n) {
              const i = e.CHM(a).$implicit;
              return e.KtG((i.selected = n));
            })("nzCheckedChange", function () {
              e.CHM(a);
              const n = e.oxw();
              return e.KtG(n.checkTeam());
            }),
            e._uU(1),
            e.qZA();
        }
        if (2 & r) {
          const a = c.$implicit;
          e.Q6J("nzChecked", a.selected), e.xp6(1), e.hij(" ", a.name, " ");
        }
      }
      function ye(r, c) {
        if (1 & r) {
          const a = e.EpF();
          e.TgZ(0, "li", 11),
            e.NdJ("nzCheckedChange", function (n) {
              const i = e.CHM(a).$implicit;
              return e.KtG((i.selected = n));
            })("nzCheckedChange", function () {
              e.CHM(a);
              const n = e.oxw();
              return e.KtG(n.checkCategory());
            }),
            e.TgZ(1, "div", 28)(2, "div")(3, "span", 29),
            e._UZ(4, "nz-badge", 30),
            e.qZA()()()();
        }
        if (2 & r) {
          const a = c.$implicit;
          e.Q6J("nzChecked", a.selected),
            e.xp6(4),
            e.Q6J("nzColor", a.color_code)("nzText", a.name);
        }
      }
      function je(r, c) {
        if (1 & r) {
          const a = e.EpF();
          e.TgZ(0, "li", 11),
            e.NdJ("nzCheckedChange", function (n) {
              const i = e.CHM(a).$implicit;
              return e.KtG((i.selected = n));
            })("nzCheckedChange", function () {
              e.CHM(a);
              const n = e.oxw();
              return e.KtG(n.checkProject());
            }),
            e.TgZ(1, "div", 28)(2, "div")(3, "span", 31),
            e._uU(4),
            e.qZA()()()();
        }
        if (2 & r) {
          const a = c.$implicit;
          e.Q6J("nzChecked", a.selected), e.xp6(4), e.Oqu(a.name);
        }
      }
      const De = [
        {
          path: "",
          component: (() => {
            var r;
            class c {
              constructor(t, n, o, i) {
                (this.cdr = t),
                  (this.service = n),
                  (this.api = o),
                  (this.ngZone = i),
                  (this.visible = !1),
                  (this.loading = !1),
                  (this.loadingTeams = !1),
                  (this.loadingCategories = !1),
                  (this.loadingProjects = !1),
                  (this.selectAllTeams = !0),
                  (this.selectAllCategories = !0),
                  (this.selectAllProjects = !0),
                  (this.selectNoCategory = !0),
                  (this.isDurationLabelSelected = !0),
                  (this.chartHeight = 600),
                  (this.chartWidth = 1080),
                  (this.teamSearchText = null),
                  (this.projectSearchText = null),
                  (this.categorySearchText = null),
                  (this.selectedProject = null),
                  (this.showLogsModal = !1),
                  (this.teamsDropdown = []),
                  (this.categoriesDropdown = []),
                  (this.projectsDropdown = []),
                  (this.projectColors = []),
                  (this.projects = []),
                  (this.barChartData = {
                    labels: [],
                    datasets: [
                      {
                        data: [],
                        label: "Logged Time (hours) ",
                        backgroundColor: this.projectColors,
                        barThickness: 40,
                      },
                    ],
                  }),
                  (this.barChartOptions = {
                    maintainAspectRatio: !1,
                    plugins: {
                      datalabels: {
                        color: "white",
                        anchor: "start",
                        align: "right",
                        offset: 20,
                        textStrokeColor: "black",
                        textStrokeWidth: 4,
                      },
                    },
                    backgroundColor: "black",
                    indexAxis: "y",
                    scales: {
                      y: {
                        title: {
                          display: !0,
                          text: "Expedientes",
                          align: "end",
                          font: { family: "Helvetica" },
                        },
                        ticks: {
                          callback: function (g) {
                            return this.getLabelForValue(parseFloat(g)).substr(
                              0,
                              30
                            );
                          },
                        },
                      },
                      x: {
                        title: {
                          display: !0,
                          text: "Logged Time(hours)",
                          align: "end",
                          font: { family: "Helvetica" },
                        },
                      },
                    },
                    onClick: (g, h, C) => {
                      this.ngZone.run(() => {
                        const u = C.getElementsAtEventForMode(
                          g,
                          "nearest",
                          { intersect: !0 },
                          !0
                        );
                        0 !== u.length && this.openTimeLogs(u[0].index);
                      });
                    },
                  }),
                  (0, H.T)(
                    this.service.onDurationChange,
                    this.service.onDateRangeChange,
                    this.service.onIncludeToggleChange
                  )
                    .pipe((0, E.sL)())
                    .subscribe(() => {
                      this.get();
                    });
              }
              ngOnInit() {
                (this.chartWidth = window.innerWidth - 250),
                  this.getTeams(),
                  this.cdr.markForCheck();
              }
              refreshCategories() {
                var t = this;
                return (0, m.Z)(function* () {
                  yield t.getCategories(t.getSelectedTeamIds()),
                    t.refreshProjects();
                })();
              }
              refreshProjects() {
                var t = this;
                return (0, m.Z)(function* () {
                  yield t.getAllocationProjects(
                    t.getSelectedTeamIds(),
                    t.getSelectedCategories()
                  ),
                    t.get();
                })();
              }
              getSelectedTeamIds() {
                return (
                  this.teamsDropdown
                    .filter((o) => o.selected)
                    .map((o) => o.id) || []
                );
              }
              getSelectedCategories() {
                return (
                  this.categoriesDropdown
                    .filter((o) => o.selected)
                    .map((o) => o.id) || []
                );
              }
              getSelectedProjectIds() {
                return (
                  this.projectsDropdown
                    .filter((o) => o.selected)
                    .map((o) => o.id) || []
                );
              }
              getCategories(t) {
                var n = this;
                return (0, m.Z)(function* () {
                  try {
                    n.loadingCategories = !0;
                    const o = yield n.api.getCategories(t);
                    o.done && (n.categoriesDropdown = o.body),
                      (n.loadingCategories = !1),
                      n.cdr.markForCheck();
                  } catch {
                    (n.loadingCategories = !1), n.cdr.markForCheck();
                  }
                })();
              }
              getAllocationProjects(t, n) {
                var o = this;
                return (0, m.Z)(function* () {
                  try {
                    o.loadingProjects = !0;
                    const i = yield o.api.getAllocationProjects(
                      t,
                      n,
                      o.selectNoCategory
                    );
                    i.done && (o.projectsDropdown = i.body),
                      (o.loadingProjects = !1),
                      o.cdr.markForCheck();
                  } catch {
                    (o.loadingProjects = !1), o.cdr.markForCheck();
                  }
                })();
              }
              getTeams() {
                var t = this;
                return (0, m.Z)(function* () {
                  try {
                    t.loadingTeams = !0;
                    const n = yield t.api.getOverviewTeams();
                    if (n.done) {
                      t.loadingTeams = !1;
                      const o = [];
                      for (const i of n.body)
                        o.push({ selected: !0, name: i.name, id: i.id });
                      (t.teamsDropdown = o),
                        t.refreshCategories(),
                        t.cdr.markForCheck();
                    }
                  } catch (n) {
                    (0, k.tu)(n), (t.loadingTeams = !1), t.cdr.markForCheck();
                  }
                })();
              }
              setDatesForKeys() {
                var t = this;
                return (0, m.Z)(function* () {
                  if (t.service.getDuration()?.key) {
                    const n = t.service.getDuration()?.key,
                      o = l()();
                    switch (n) {
                      case d.WD:
                        const i = l()().subtract(1, "days");
                        t.service.setDateRange([i.toString(), i.toString()]);
                        break;
                      case d.ao:
                        const g = l()().subtract(1, "weeks");
                        t.service.setDateRange([g.toString(), o.toString()]);
                        break;
                      case d.ly:
                        const h = l()().subtract(1, "months");
                        t.service.setDateRange([h.toString(), o.toString()]);
                        break;
                      case d.o9:
                        const C = l()().subtract(3, "months");
                        t.service.setDateRange([C.toString(), o.toString()]);
                        break;
                      case d.$U:
                        const u = l()().subtract(1, "weeks").startOf("week"),
                          v = l()().subtract(1, "weeks").endOf("week");
                        t.service.setDateRange([u.toString(), v.toString()]);
                        break;
                      case d.lI:
                        const T = l()().subtract(1, "month").startOf("month"),
                          M = l()().subtract(1, "month").endOf("month");
                        t.service.setDateRange([T.toString(), M.toString()]);
                    }
                  }
                })();
              }
              get() {
                var t = this;
                return (0, m.Z)(function* () {
                  try {
                    t.loading = !0;
                    const n = t.getSelectedTeamIds(),
                      o = t.getSelectedCategories(),
                      i = t.getSelectedProjectIds();
                    t.isDurationLabelSelected && (yield t.setDatesForKeys());
                    const g = {
                        teams: n,
                        categories: o,
                        projects: i,
                        duration: t.service.getDuration()?.key,
                        date_range: t.service.getDateRange(),
                      },
                      h = yield t.api.getProjectTimeSheets(
                        g,
                        t.service.getIncludeToggle()
                      );
                    if (h.done) {
                      if (
                        (t.barChartData &&
                          ((t.barChartData.datasets[0].data = []),
                          (t.barChartData.labels = [])),
                        (t.projects = h.body),
                        h.body.length)
                      ) {
                        const C = window.innerHeight - 300,
                          u = 60 * h.body.length;
                        t.chartHeight = u > C ? u : window.innerHeight - 300;
                      }
                      t.createChart(), (t.loading = !1);
                    }
                    (t.loading = !1), t.cdr.markForCheck();
                  } catch (n) {
                    (t.loading = !1), (0, k.tu)(n), t.cdr.markForCheck();
                  }
                })();
              }
              ngOnChanges(t) {
                setTimeout(() => {
                  this.barChart?.update(), this.cdr.markForCheck();
                }, 1e3);
              }
              createChart() {
                this.visible = !0;
                for (const t of this.projects)
                  this.projectColors.push(t.color_code),
                    this.barChartData.labels?.push(t.name),
                    this.barChartData.datasets[0].data.push(t.value || 0);
                this.barChart?.update(), this.cdr.markForCheck();
              }
              onFilterChange() {
                this.get();
              }
              detectChanges() {
                this.cdr.markForCheck();
              }
              export() {
                var t = this;
                return (0, m.Z)(function* () {
                  const o = t.exportChartCanvas.nativeElement
                      .toDataURL("image/png")
                      .replace("image/png", "image/octet-stream"),
                    i = document.createElement("a");
                  i.setAttribute("href", o),
                    i.setAttribute("download", "Projects time sheet.png"),
                    i.click();
                })();
              }
              checkTeam() {
                (this.selectAllTeams = !1), this.refreshCategories();
              }
              checkCategory() {
                (this.selectAllCategories = !1), this.refreshProjects();
              }
              checkProject() {
                (this.selectAllProjects = !1), this.onFilterChange();
              }
              selectAllTeamsChecked(t) {
                if (t) {
                  for (const n of this.teamsDropdown) n.selected = !0;
                  this.refreshCategories(), this.cdr.markForCheck();
                } else {
                  for (const n of this.teamsDropdown) n.selected = !1;
                  this.refreshCategories(), this.cdr.markForCheck();
                }
              }
              selectAllCategoriesChecked(t) {
                if (t) {
                  this.selectNoCategory = !0;
                  for (const n of this.categoriesDropdown) n.selected = !0;
                  this.refreshProjects(), this.cdr.markForCheck();
                } else {
                  this.selectNoCategory = !1;
                  for (const n of this.categoriesDropdown) n.selected = !1;
                  this.refreshProjects(), this.cdr.markForCheck();
                }
              }
              selectAllProjectsChecked(t) {
                if (t) {
                  for (const n of this.projectsDropdown) n.selected = !0;
                  this.onFilterChange(), this.cdr.markForCheck();
                } else {
                  for (const n of this.projectsDropdown) n.selected = !1;
                  this.onFilterChange(), this.cdr.markForCheck();
                }
              }
              openTimeLogs(t) {
                (this.selectedProject = this.projects[t]),
                  (this.showLogsModal = !0),
                  this.cdr.detectChanges();
              }
            }
            return (
              ((r = c).ɵfac = function (t) {
                return new (t || r)(
                  e.Y36(e.sBO),
                  e.Y36(A.m),
                  e.Y36(L.U),
                  e.Y36(e.R0b)
                );
              }),
              (r.ɵcmp = e.Xpm({
                type: r,
                selectors: [["worklenz-time-projects"]],
                viewQuery: function (t, n) {
                  if ((1 & t && (e.Gf(y.jh, 5), e.Gf(ue, 5)), 2 & t)) {
                    let o;
                    e.iGM((o = e.CRH())) && (n.barChart = o.first),
                      e.iGM((o = e.CRH())) && (n.exportChartCanvas = o.first);
                  }
                },
                features: [e.TTD],
                decls: 43,
                vars: 29,
                consts: [
                  [
                    3,
                    "title",
                    "showExport",
                    "isPngOnly",
                    "isDurationLabelSelected",
                    "exportFile",
                  ],
                  [3, "nzLoading", "nzTitle"],
                  ["projectsTitle", ""],
                  ["class", "position-relative", 4, "ngIf"],
                  [4, "ngIf"],
                  [3, "show", "isDurationLabelSelected", "project", "onClose"],
                  ["teamsSelector", "nzDropdownMenu"],
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
                  ["categorySelector", "nzDropdownMenu"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Search by category name",
                    "nz-input",
                    "",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["categorySearchInput", ""],
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
                  [1, "position-relative"],
                  [1, "chartWrapper"],
                  [1, "chartAreaWrapper"],
                  [
                    "baseChart",
                    "",
                    "id",
                    "chart-view",
                    3,
                    "data",
                    "options",
                    "legend",
                    "type",
                  ],
                  ["exportChartCanvas", ""],
                  [
                    1,
                    "d-flex",
                    "align-items-center",
                    "justify-content-center",
                    "user-select-none",
                  ],
                  [1, "d-block"],
                  [3, "nzColor", "nzText"],
                  ["nz-typography", "", 1, "d-block"],
                ],
                template: function (t, n) {
                  if (
                    (1 & t &&
                      (e.TgZ(0, "worklenz-rpt-header", 0),
                      e.NdJ("isDurationLabelSelected", function (i) {
                        return (n.isDurationLabelSelected = i);
                      })("exportFile", function () {
                        return n.export();
                      }),
                      e.qZA(),
                      e.TgZ(1, "nz-content")(2, "nz-card", 1),
                      e.YNc(3, ze, 4, 0, "ng-template", null, 2, e.W1O),
                      e.YNc(5, Te, 5, 8, "div", 3),
                      e.YNc(6, ke, 1, 0, "nz-empty", 4),
                      e.qZA()(),
                      e.TgZ(7, "worklenz-project-logs-breakdown", 5),
                      e.NdJ("onClose", function () {
                        return (
                          (n.showLogsModal = !1), (n.selectedProject = null)
                        );
                      }),
                      e.qZA(),
                      e.TgZ(8, "nz-dropdown-menu", null, 6)(10, "ul", 7)(
                        11,
                        "li",
                        8
                      )(12, "input", 9, 10),
                      e.NdJ("ngModelChange", function (i) {
                        return (n.teamSearchText = i);
                      })("ngModelChange", function () {
                        return n.detectChanges();
                      }),
                      e.qZA()(),
                      e.TgZ(14, "li", 11),
                      e.NdJ("nzCheckedChange", function (i) {
                        return (n.selectAllTeams = i);
                      })("nzCheckedChange", function (i) {
                        return n.selectAllTeamsChecked(i);
                      }),
                      e._uU(15, "Select all "),
                      e.qZA(),
                      e._UZ(16, "li", 12),
                      e.YNc(17, ve, 2, 2, "li", 13),
                      e.ALo(18, "searchByName"),
                      e.qZA()(),
                      e.TgZ(19, "nz-dropdown-menu", null, 14)(21, "ul", 7)(
                        22,
                        "li",
                        8
                      )(23, "input", 15, 16),
                      e.NdJ("ngModelChange", function (i) {
                        return (n.categorySearchText = i);
                      })("ngModelChange", function () {
                        return n.detectChanges();
                      }),
                      e.qZA()(),
                      e.TgZ(25, "li", 11),
                      e.NdJ("nzCheckedChange", function (i) {
                        return (n.selectAllCategories = i);
                      })("nzCheckedChange", function (i) {
                        return n.selectAllCategoriesChecked(i);
                      }),
                      e._uU(26, "Select all "),
                      e.qZA(),
                      e._UZ(27, "li", 12),
                      e.TgZ(28, "li", 11),
                      e.NdJ("nzCheckedChange", function (i) {
                        return (n.selectNoCategory = i);
                      })("nzCheckedChange", function () {
                        return n.checkCategory();
                      }),
                      e._uU(29, " No Category "),
                      e.qZA(),
                      e.YNc(30, ye, 5, 3, "li", 13),
                      e.ALo(31, "searchByName"),
                      e.qZA()(),
                      e.TgZ(32, "nz-dropdown-menu", null, 17)(34, "ul", 7)(
                        35,
                        "li",
                        8
                      )(36, "input", 18, 19),
                      e.NdJ("ngModelChange", function (i) {
                        return (n.projectSearchText = i);
                      })("ngModelChange", function () {
                        return n.detectChanges();
                      }),
                      e.qZA()(),
                      e.TgZ(38, "li", 11),
                      e.NdJ("nzCheckedChange", function (i) {
                        return (n.selectAllProjects = i);
                      })("nzCheckedChange", function (i) {
                        return n.selectAllProjectsChecked(i);
                      }),
                      e._uU(39, "Select all "),
                      e.qZA(),
                      e._UZ(40, "li", 12),
                      e.YNc(41, je, 5, 2, "li", 13),
                      e.ALo(42, "searchByName"),
                      e.qZA()()),
                    2 & t)
                  ) {
                    const o = e.MAs(4),
                      i = e.MAs(13),
                      g = e.MAs(24),
                      h = e.MAs(37);
                    e.Q6J("title", "Projects Time Sheet")("showExport", !0)(
                      "isPngOnly",
                      !0
                    ),
                      e.xp6(2),
                      e.Q6J("nzLoading", n.loading)("nzTitle", o),
                      e.xp6(3),
                      e.Q6J("ngIf", n.projects.length),
                      e.xp6(1),
                      e.Q6J("ngIf", !n.projects.length),
                      e.xp6(1),
                      e.Q6J("show", n.showLogsModal)(
                        "isDurationLabelSelected",
                        n.isDurationLabelSelected
                      )("project", n.selectedProject),
                      e.xp6(5),
                      e.Q6J("ngModel", n.teamSearchText),
                      e.xp6(2),
                      e.Q6J("nzChecked", n.selectAllTeams),
                      e.xp6(3),
                      e.Q6J("ngForOf", e.xi3(18, 20, n.teamsDropdown, i.value)),
                      e.xp6(6),
                      e.Q6J("ngModel", n.categorySearchText),
                      e.xp6(2),
                      e.Q6J("nzChecked", n.selectAllCategories),
                      e.xp6(3),
                      e.Q6J("nzChecked", n.selectNoCategory),
                      e.xp6(2),
                      e.Q6J(
                        "ngForOf",
                        e.xi3(31, 23, n.categoriesDropdown, g.value)
                      ),
                      e.xp6(6),
                      e.Q6J("ngModel", n.projectSearchText),
                      e.xp6(2),
                      e.Q6J("nzChecked", n.selectAllProjects),
                      e.xp6(3),
                      e.Q6J(
                        "ngForOf",
                        e.xi3(42, 26, n.projectsDropdown, h.value)
                      );
                  }
                },
                dependencies: [
                  z.sg,
                  z.O5,
                  p.Fj,
                  p.JJ,
                  p.On,
                  y.jh,
                  j.ix,
                  Y.w,
                  D.dQ,
                  b.bd,
                  J.Ie,
                  _.wO,
                  _.r9,
                  _.YV,
                  f.cm,
                  f.RR,
                  f.wA,
                  F.Zp,
                  O.OK,
                  w.NU,
                  w.$1,
                  U.I,
                  x.Ls,
                  S.ZU,
                  Q.p9,
                  N.x7,
                  me,
                  pe.g,
                ],
                styles: [
                  ".chartWrapper[_ngcontent-%COMP%]{max-width:calc(100vw - 220px);min-width:calc(100vw - 220px);height:calc(100vh - 300px);overflow:auto}",
                ],
                changeDetection: 0,
              })),
              c
            );
          })(),
        },
      ];
      let be = (() => {
        var r;
        class c {}
        return (
          ((r = c).ɵfac = function (t) {
            return new (t || r)();
          }),
          (r.ɵmod = e.oAB({ type: r })),
          (r.ɵinj = e.cJS({ imports: [P.Bz.forChild(De), P.Bz] })),
          c
        );
      })();
      var we = s(91921);
      let xe = (() => {
        var r;
        class c {}
        return (
          ((r = c).ɵfac = function (t) {
            return new (t || r)();
          }),
          (r.ɵmod = e.oAB({ type: r })),
          (r.ɵinj = e.cJS({
            imports: [
              z.ez,
              be,
              p.u5,
              y.vQ,
              j.sL,
              b.vh,
              J.Wr,
              f.b1,
              F.o7,
              O.wm,
              _.ip,
              w.zf,
              D.vG,
              U.I,
              x.PV,
              S.ZJ,
              Q.Xo,
              N.mS,
              we.ReportingModule,
            ],
          })),
          c
        );
      })();
    },
  },
]);
