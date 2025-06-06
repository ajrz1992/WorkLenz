"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [31],
  {
    88903: (Bt, wt, U) => {
      U.d(wt, { K: () => F });
      var Mt = U(47246),
        at = U(65879),
        ut = U(96814);
      function t(Y, j) {
        if (
          (1 & Y &&
            (at.TgZ(0, "div", 1),
            at._UZ(1, "canvas", 2),
            at.TgZ(2, "span", 3),
            at._uU(3),
            at.qZA(),
            at.TgZ(4, "span", 4),
            at._uU(5),
            at.qZA()()),
          2 & Y)
        ) {
          const tt = at.oxw();
          at.xp6(1),
            at.Q6J("data", tt.barChartData)("options", tt.barChartOptions)(
              "plugins",
              tt.barChartPlugins
            )("legend", !1)("type", "bar"),
            at.xp6(2),
            at.hij("Estimated :", tt.estimatedTimeString, ""),
            at.xp6(2),
            at.hij("Actual :", tt.actualTimeString, "");
        }
      }
      let F = (() => {
        var Y;
        class j {
          constructor(et) {
            (this.cdr = et),
              (this.actualTime = 0),
              (this.estimatedTime = 0),
              (this.estimatedTimeString = null),
              (this.actualTimeString = null),
              (this.visible = !1),
              (this.barChartLegend = !1),
              (this.barChartPlugins = []),
              (this.barChartData = { labels: [""], datasets: [] }),
              (this.barChartOptions = {
                plugins: { datalabels: { display: !1 } },
                responsive: !1,
                maintainAspectRatio: !1,
                indexAxis: "y",
                scales: {
                  x: { grid: { display: !1 }, display: !1 },
                  y: { grid: { display: !1 }, display: !1 },
                },
              });
          }
          ngOnChanges(et) {
            setTimeout(() => {
              this.barChart?.update(), this.cdr.markForCheck();
            }, 1e3);
          }
          ngAfterViewInit() {
            (this.visible = !0),
              setTimeout(() => {
                this.barChart?.data?.datasets.push(
                  {
                    data: [this.estimatedTime],
                    label: "",
                    backgroundColor: ["#A5AAD9"],
                  },
                  {
                    data: [this.actualTime],
                    label: "",
                    backgroundColor: ["#c191cc"],
                  }
                ),
                  this.barChart?.update(),
                  this.cdr.markForCheck();
              }, 1e3);
          }
        }
        return (
          ((Y = j).ɵfac = function (et) {
            return new (et || Y)(at.Y36(at.sBO));
          }),
          (Y.ɵcmp = at.Xpm({
            type: Y,
            selectors: [["worklenz-estimated-vs-actual-chart-common"]],
            viewQuery: function (et, st) {
              if ((1 & et && at.Gf(Mt.jh, 5), 2 & et)) {
                let nt;
                at.iGM((nt = at.CRH())) && (st.barChart = nt.first);
              }
            },
            inputs: {
              actualTime: "actualTime",
              estimatedTime: "estimatedTime",
              estimatedTimeString: "estimatedTimeString",
              actualTimeString: "actualTimeString",
            },
            features: [at.TTD],
            decls: 1,
            vars: 1,
            consts: [
              ["class", "position-relative", 4, "ngIf"],
              [1, "position-relative"],
              [
                "baseChart",
                "",
                "width",
                "170",
                "height",
                "39",
                3,
                "data",
                "options",
                "plugins",
                "legend",
                "type",
              ],
              [1, "estimated-time-span"],
              [1, "actual-time-span"],
            ],
            template: function (et, st) {
              1 & et && at.YNc(0, t, 6, 7, "div", 0),
                2 & et && at.Q6J("ngIf", st.visible);
            },
            dependencies: [ut.O5, Mt.jh],
            styles: [
              ".estimated-time-span[_ngcontent-%COMP%]{position:absolute;top:3px;left:4px;font-size:12px;font-weight:500;width:100%;color:#000000d9!important}.actual-time-span[_ngcontent-%COMP%]{position:absolute;bottom:1px;left:4px;font-size:12px;font-weight:500;width:100%;color:#000000d9!important}",
            ],
            changeDetection: 0,
          })),
          j
        );
      })();
    },
    34305: (Bt, wt, U) => {
      U.d(wt, { f: () => g });
      var Mt = U(15861),
        at = U(69649),
        ut = U(94489),
        t = U(65879),
        F = U(60095),
        Y = U(53980),
        j = U(975),
        tt = U(32333),
        et = U(9172),
        st = U(96814),
        nt = U(92574),
        I = U(73460),
        H = U(62787),
        N = U(42840),
        x = U(70855),
        y = U(62595),
        P = U(8083),
        k = U(33640),
        p = U(55695),
        v = U(20824);
      const C = ["searchInput"];
      function u(i, e) {
        if ((1 & i && (t.ynx(0), t._uU(1), t.BQk()), 2 & i)) {
          const s = t.oxw(2);
          t.xp6(1),
            t.hij(" ", null == s.project ? null : s.project.category_name, " ");
        }
      }
      function A(i, e) {
        1 & i && (t.ynx(0), t._uU(1, " Set Category "), t.BQk());
      }
      function T(i, e) {
        if (
          (1 & i &&
            (t.TgZ(0, "span", 13),
            t.YNc(1, u, 2, 1, "ng-container", 14),
            t.YNc(2, A, 2, 0, "ng-container", 14),
            t.qZA()),
          2 & i)
        ) {
          const s = t.oxw();
          t.xp6(1),
            t.Q6J("ngIf", null == s.project ? null : s.project.category_name),
            t.xp6(1),
            t.Q6J("ngIf", !(null != s.project && s.project.category_name));
        }
      }
      function S(i, e) {
        1 & i && t._UZ(0, "span", 15);
      }
      function l(i, e) {
        if (1 & i) {
          const s = t.EpF();
          t.TgZ(0, "button", 16),
            t.NdJ("click", function (d) {
              t.CHM(s);
              const E = t.oxw();
              return d.stopPropagation(), t.KtG(E.remove());
            }),
            t._UZ(1, "span", 17),
            t.qZA();
        }
      }
      function h(i, e) {
        1 & i &&
          (t.TgZ(0, "span", 18), t._uU(1, " Hit enter to create! "), t.qZA());
      }
      function m(i, e) {
        if (1 & i) {
          const s = t.EpF();
          t.TgZ(0, "li", 19),
            t.NdJ("click", function () {
              const E = t.CHM(s).$implicit,
                o = t.oxw();
              return t.KtG(o.update(E.id));
            }),
            t._UZ(1, "nz-badge", 20),
            t.qZA();
        }
        if (2 & i) {
          const s = e.$implicit;
          t.xp6(1),
            t.Q6J("nzColor", s.color_code)(
              "nzText",
              (null == s ? null : s.name) || null
            );
        }
      }
      function c(i, e) {
        1 & i && t._UZ(0, "span", 21);
      }
      let g = (() => {
        var i;
        class e {
          get hasFilteredCategories() {
            return !!this.filteredCategories.length;
          }
          get filteredCategories() {
            return this.searchPipe.transform(
              this.projCategories,
              this.categorySearchText
            );
          }
          constructor(a, d, E, o, M, Z, K) {
            (this.ngZone = a),
              (this.fb = d),
              (this.categoriesApi = E),
              (this.cdr = o),
              (this.socket = M),
              (this.auth = Z),
              (this.searchPipe = K),
              (this.teamId = null),
              (this.project = null),
              (this.projCategories = []),
              (this.session = null),
              (this.categorySearchText = null),
              (this.showText = !1),
              (this.show = !1),
              (this.loadingCategories = !0),
              (this.handleResponse = ($) => {
                $ &&
                  this.project &&
                  $.id === this.project.id &&
                  ((this.project.category_id = $.category_id),
                  (this.project.category_name = $.category_name),
                  (this.project.category_color = $.category_color),
                  this.reset(),
                  this.cdr.markForCheck());
              }),
              (this.handleLabelsCreate = ($) => {
                this.project &&
                  $.id === this.project.id &&
                  this.teamId &&
                  $ &&
                  $.category_id &&
                  (this.projCategories.push({
                    id: $.category_id,
                    name: $.category_name,
                    color_code: $.category_color,
                    team_id: this.teamId,
                  }),
                  this.update($.category_id),
                  this.cdr.markForCheck());
              }),
              (this.form = this.fb.group({ category: [] })),
              (this.session = this.auth.getCurrentSession());
          }
          ngOnInit() {
            this.socket.on(
              ut.C.PROJECT_CATEGORY_CHANGE.toString(),
              this.handleResponse
            ),
              this.socket.on(
                ut.C.CREATE_PROJECT_CATEGORY.toString(),
                this.handleLabelsCreate
              );
          }
          ngOnDestroy() {
            this.socket.removeListener(
              ut.C.PROJECT_CATEGORY_CHANGE.toString(),
              this.handleResponse
            ),
              this.socket.removeListener(
                ut.C.CREATE_PROJECT_CATEGORY.toString(),
                this.handleLabelsCreate
              );
          }
          trackById(a, d) {
            return d.id;
          }
          getProjectCategories() {
            var a = this;
            return (0, Mt.Z)(function* () {
              if (a.teamId)
                try {
                  a.loadingCategories = !0;
                  const d = yield a.categoriesApi.getByTeamId(a.teamId);
                  d.done && (a.projCategories = d.body),
                    (a.loadingCategories = !1),
                    a.cdr.markForCheck();
                } catch (d) {
                  (0, at.tu)(d),
                    (a.loadingCategories = !1),
                    a.cdr.markForCheck();
                }
            })();
          }
          create() {
            !this.teamId ||
              this.hasFilteredCategories ||
              !this.categorySearchText ||
              this.socket.emit(
                ut.C.CREATE_PROJECT_CATEGORY.toString(),
                JSON.stringify({
                  project_id: this.project?.id,
                  name: this.categorySearchText,
                  team_id: this.teamId,
                  user_id: this.session?.id,
                })
              );
          }
          update(a) {
            a &&
              (this.socket.emit(
                ut.C.PROJECT_CATEGORY_CHANGE.toString(),
                JSON.stringify({
                  project_id: this.project?.id,
                  category_id: a,
                  is_update: !0,
                })
              ),
              this.cdr.markForCheck());
          }
          remove() {
            this.socket.emit(
              ut.C.PROJECT_CATEGORY_CHANGE.toString(),
              JSON.stringify({
                project_id: this.project?.id,
                category_id: null,
                is_update: !1,
              })
            ),
              this.cdr.markForCheck();
          }
          handleLabelsVisibleChange(a) {
            a
              ? ((this.show = !0),
                this.getProjectCategories(),
                this.ngZone.runOutsideAngular(() => {
                  setTimeout(() => {
                    this.searchInput?.nativeElement?.focus();
                  }, 100);
                }))
              : this.reset();
          }
          reset() {
            this.searchInput?.nativeElement?.blur(),
              (this.categorySearchText = null),
              (this.show = !1),
              (this.projCategories = []),
              (this.showText = !1),
              this.form.controls.category.setValue(null),
              this.cdr.markForCheck();
          }
        }
        return (
          ((i = e).ɵfac = function (a) {
            return new (a || i)(
              t.Y36(t.R0b),
              t.Y36(F.qu),
              t.Y36(Y.s),
              t.Y36(t.sBO),
              t.Y36(j.s),
              t.Y36(tt.e),
              t.Y36(et.g)
            );
          }),
          (i.ɵcmp = t.Xpm({
            type: i,
            selectors: [["worklenz-project-category"]],
            viewQuery: function (a, d) {
              if ((1 & a && t.Gf(C, 5), 2 & a)) {
                let E;
                t.iGM((E = t.CRH())) && (d.searchInput = E.first);
              }
            },
            inputs: { teamId: "teamId", project: "project" },
            decls: 16,
            vars: 9,
            consts: [
              [
                "nz-dropdown",
                "",
                "nzTrigger",
                "click",
                1,
                "rounded-pill",
                "position-relative",
                3,
                "nzColor",
                "nzDropdownMenu",
                "nzClickHide",
                "nzVisible",
                "nzVisibleChange",
              ],
              [1, "align-items-center"],
              [
                "class",
                "ellipsis",
                "style",
                "max-width: 100px",
                4,
                "nzSpaceItem",
              ],
              [
                "nz-icon",
                "",
                "nzType",
                "down",
                "nzTheme",
                "outline",
                4,
                "nzSpaceItem",
              ],
              [
                "nz-button",
                "",
                "nzType",
                "text",
                "class",
                "clear-btn",
                3,
                "click",
                4,
                "ngIf",
              ],
              ["categoriesDropdown", "nzDropdownMenu"],
              ["nz-menu", "", 1, "members-dropdown"],
              [1, "px-3", "py-2"],
              [
                "nz-input",
                "",
                "placeholder",
                "Search by name",
                "type",
                "text",
                1,
                "border-default-color",
                "dropdown-search-input",
                3,
                "ngModel",
                "ngModelChange",
                "keydown.enter",
              ],
              ["searchInput", ""],
              ["nz-typography", "", "nzType", "secondary", 4, "ngIf"],
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
                "ngForTrackBy",
              ],
              ["indicatorTemplate", ""],
              [1, "ellipsis", 2, "max-width", "100px"],
              [4, "ngIf"],
              ["nz-icon", "", "nzType", "down", "nzTheme", "outline"],
              ["nz-button", "", "nzType", "text", 1, "clear-btn", 3, "click"],
              ["nz-icon", "", "nzType", "close-circle", "nzTheme", "outline"],
              ["nz-typography", "", "nzType", "secondary"],
              ["nz-menu-item", "", 1, "m-0", 3, "click"],
              [3, "nzColor", "nzText"],
              ["nz-icon", "", "nzType", "loading"],
            ],
            template: function (a, d) {
              if (
                (1 & a &&
                  (t.TgZ(0, "nz-tag", 0),
                  t.NdJ("nzVisibleChange", function (o) {
                    return d.handleLabelsVisibleChange(o);
                  }),
                  t.TgZ(1, "nz-space", 1),
                  t.YNc(2, T, 3, 2, "span", 2),
                  t.YNc(3, S, 1, 0, "span", 3),
                  t.YNc(4, l, 2, 0, "button", 4),
                  t.qZA()(),
                  t.TgZ(5, "nz-dropdown-menu", null, 5)(7, "ul", 6)(8, "li", 7)(
                    9,
                    "div"
                  )(10, "input", 8, 9),
                  t.NdJ("ngModelChange", function (o) {
                    return (d.categorySearchText = o);
                  })("keydown.enter", function () {
                    return d.create();
                  }),
                  t.qZA()(),
                  t.YNc(12, h, 2, 0, "span", 10),
                  t.qZA(),
                  t.YNc(13, m, 2, 2, "li", 11),
                  t.qZA()(),
                  t.YNc(14, c, 1, 0, "ng-template", null, 12, t.W1O)),
                2 & a)
              ) {
                const E = t.MAs(6);
                t.Q6J(
                  "nzColor",
                  null == d.project ? null : d.project.category_color
                )("nzDropdownMenu", E)("nzClickHide", !1)("nzVisible", d.show),
                  t.xp6(4),
                  t.Q6J(
                    "ngIf",
                    null == d.project ? null : d.project.category_name
                  ),
                  t.xp6(6),
                  t.Q6J("ngModel", d.categorySearchText),
                  t.xp6(2),
                  t.Q6J("ngIf", !d.hasFilteredCategories),
                  t.xp6(1),
                  t.Q6J("ngForOf", d.filteredCategories)(
                    "ngForTrackBy",
                    d.trackById
                  );
              }
            },
            dependencies: [
              st.sg,
              st.O5,
              nt.NU,
              nt.$1,
              I.wO,
              I.r9,
              H.cm,
              H.RR,
              N.ix,
              x.w,
              y.Ls,
              F.Fj,
              F.JJ,
              F.On,
              P.ZU,
              k.x7,
              p.j,
              v.Zp,
            ],
            styles: [
              "nz-tag[_ngcontent-%COMP%]{font-size:13px}nz-tag[_ngcontent-%COMP%]:hover   .clear-btn[_ngcontent-%COMP%]{opacity:1}input[_ngcontent-%COMP%]{min-width:225px;max-width:225px}.clear-btn[_ngcontent-%COMP%]{max-width:14px;position:absolute;right:6px;top:0;bottom:0;margin-top:auto;margin-bottom:auto;line-height:14px;max-height:14px;background:#ededed;padding:0;border-radius:100%;font-size:14px;opacity:0;transition:opacity .3s}.clear-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#959595;margin-top:-2px}.ellipsis[_ngcontent-%COMP%]{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
    },
    28754: (Bt, wt, U) => {
      U.d(wt, { W: () => et });
      var Mt = U(94489),
        at = U(65879),
        ut = U(975),
        t = U(96814),
        F = U(60095),
        Y = U(9691),
        j = U(33640);
      function tt(st, nt) {
        if (
          (1 & st &&
            (at.TgZ(0, "nz-option", 3), at._UZ(1, "nz-badge", 4), at.qZA()),
          2 & st)
        ) {
          const I = nt.$implicit;
          at.Q6J("nzValue", I.id)("nzLabel", I.name),
            at.xp6(1),
            at.Q6J("nzColor", I.color_code + "69")("nzText", I.name);
        }
      }
      let et = (() => {
        var st;
        class nt {
          constructor(H, N) {
            (this.socket = H),
              (this.cdr = N),
              (this.projHealths = []),
              (this.project = null),
              (this.handleResponse = (x) => {
                x &&
                  this.project &&
                  x.id === this.project.id &&
                  ((this.project.health_color = x.color_code),
                  (this.project.project_health = x.health_id),
                  this.cdr.markForCheck());
              });
          }
          ngOnInit() {
            this.socket.on(
              Mt.C.PROJECT_HEALTH_CHANGE.toString(),
              this.handleResponse
            );
          }
          ngOnDestroy() {
            this.socket.removeListener(
              Mt.C.PROJECT_HEALTH_CHANGE.toString(),
              this.handleResponse
            );
          }
          trackById(H, N) {
            return N.id;
          }
          handleHealthChange(H) {
            this.project?.id &&
              (this.socket.emit(
                Mt.C.PROJECT_HEALTH_CHANGE.toString(),
                JSON.stringify({ project_id: this.project?.id, health_id: H })
              ),
              this.cdr.markForCheck());
          }
        }
        return (
          ((st = nt).ɵfac = function (H) {
            return new (H || st)(at.Y36(ut.s), at.Y36(at.sBO));
          }),
          (st.ɵcmp = at.Xpm({
            type: st,
            selectors: [["worklenz-project-health-selector"]],
            inputs: { projHealths: "projHealths", project: "project" },
            decls: 3,
            vars: 6,
            consts: [
              [1, "py-0"],
              [
                1,
                "rounded-pill",
                "custom-select",
                3,
                "ngModel",
                "nzDropdownMatchSelectWidth",
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
            template: function (H, N) {
              1 & H &&
                (at.TgZ(0, "div", 0)(1, "nz-select", 1),
                at.NdJ("ngModelChange", function (y) {
                  return N.handleHealthChange(y);
                }),
                at.YNc(2, tt, 2, 4, "nz-option", 2),
                at.qZA()()),
                2 & H &&
                  (at.xp6(1),
                  at.Udp(
                    "background",
                    (null == N.project ? null : N.project.health_color) + "69"
                  ),
                  at.Q6J(
                    "ngModel",
                    null == N.project ? null : N.project.project_health
                  )("nzDropdownMatchSelectWidth", !1),
                  at.xp6(1),
                  at.Q6J("ngForOf", N.projHealths)(
                    "ngForTrackBy",
                    N.trackById
                  ));
            },
            dependencies: [t.sg, F.JJ, F.On, Y.Ip, Y.Vq, j.x7],
            changeDetection: 0,
          })),
          nt
        );
      })();
    },
    31930: (Bt, wt, U) => {
      U.d(wt, { T: () => H });
      var Mt = U(94489),
        at = U(65879),
        ut = U(975),
        t = U(92574),
        F = U(60095),
        Y = U(52682),
        j = U(75729),
        tt = U(47053);
      function et(N, x) {
        if (1 & N) {
          const y = at.EpF();
          at.TgZ(0, "nz-date-picker", 4),
            at.NdJ("ngModelChange", function (k) {
              at.CHM(y);
              const p = at.oxw();
              return at.KtG(p.handleStartDateChange(k));
            }),
            at.ALo(1, "validateMaxDate"),
            at.qZA();
        }
        if (2 & N) {
          const y = at.oxw();
          at.Q6J("ngModel", null == y.project ? null : y.project.start_date)(
            "nzFormat",
            "MMM dd,yyyy"
          )("nzSuffixIcon", "")("nzPlaceHolder", "Añadir Fecha Inicio")(
            "nzDisabledDate",
            at.lcZ(1, 5, null == y.project ? null : y.project.end_date)
          );
        }
      }
      function st(N, x) {
        1 & N && (at.TgZ(0, "p", 5), at._uU(1, "-"), at.qZA());
      }
      function nt(N, x) {
        if (1 & N) {
          const y = at.EpF();
          at.TgZ(0, "nz-date-picker", 4),
            at.NdJ("ngModelChange", function (k) {
              at.CHM(y);
              const p = at.oxw();
              return at.KtG(p.handleEndDateChange(k));
            }),
            at.ALo(1, "validateMinDate"),
            at.qZA();
        }
        if (2 & N) {
          const y = at.oxw();
          at.Q6J("ngModel", null == y.project ? null : y.project.end_date)(
            "nzFormat",
            "MMM dd,yyyy"
          )("nzSuffixIcon", "")("nzPlaceHolder", "Set end date")(
            "nzDisabledDate",
            at.lcZ(1, 5, null == y.project ? null : y.project.start_date)
          );
        }
      }
      function I(N, x) {}
      let H = (() => {
        var N;
        class x {
          constructor(P, k) {
            (this.socket = P),
              (this.cdr = k),
              (this.project = null),
              (this.handleStartdateChangeResponse = (p) => {
                p &&
                  this.project &&
                  p.id === this.project.id &&
                  ((this.project.start_date = p.start_date),
                  this.cdr.markForCheck());
              }),
              (this.handleEnddateChangeResponse = (p) => {
                p &&
                  this.project &&
                  p.id === this.project.id &&
                  ((this.project.end_date = p.end_date),
                  this.cdr.markForCheck());
              });
          }
          ngOnInit() {
            this.socket.on(
              Mt.C.PROJECT_START_DATE_CHANGE.toString(),
              this.handleStartdateChangeResponse
            ),
              this.socket.on(
                Mt.C.PROJECT_END_DATE_CHANGE.toString(),
                this.handleEnddateChangeResponse
              );
          }
          ngOnDestroy() {
            this.socket.removeListener(
              Mt.C.PROJECT_START_DATE_CHANGE.toString(),
              this.handleStartdateChangeResponse
            ),
              this.socket.removeListener(
                Mt.C.PROJECT_END_DATE_CHANGE.toString(),
                this.handleEnddateChangeResponse
              );
          }
          trackById(P, k) {
            return k.id;
          }
          handleStartDateChange(P) {
            this.project?.id &&
              (this.socket.emit(
                Mt.C.PROJECT_START_DATE_CHANGE.toString(),
                JSON.stringify({ project_id: this.project?.id, start_date: P })
              ),
              this.cdr.markForCheck());
          }
          handleEndDateChange(P) {
            this.project?.id &&
              (this.socket.emit(
                Mt.C.PROJECT_END_DATE_CHANGE.toString(),
                JSON.stringify({ project_id: this.project?.id, end_date: P })
              ),
              this.cdr.markForCheck());
          }
        }
        return (
          ((N = x).ɵfac = function (P) {
            return new (P || N)(at.Y36(ut.s), at.Y36(at.sBO));
          }),
          (N.ɵcmp = at.Xpm({
            type: N,
            selectors: [["worklenz-project-start-end-dates"]],
            inputs: { project: "project" },
            decls: 6,
            vars: 0,
            consts: [
              [1, "align-items-center"],
              [
                "class",
                "bg-transparent me-0",
                "nzBorderless",
                "",
                3,
                "ngModel",
                "nzFormat",
                "nzSuffixIcon",
                "nzPlaceHolder",
                "nzDisabledDate",
                "ngModelChange",
                4,
                "nzSpaceItem",
              ],
              ["class", "mb-0 me-0", 4, "nzSpaceItem"],
              ["noIcon", ""],
              [
                "nzBorderless",
                "",
                1,
                "bg-transparent",
                "me-0",
                3,
                "ngModel",
                "nzFormat",
                "nzSuffixIcon",
                "nzPlaceHolder",
                "nzDisabledDate",
                "ngModelChange",
              ],
              [1, "mb-0", "me-0"],
            ],
            template: function (P, k) {
              1 & P &&
                (at.TgZ(0, "nz-space", 0),
                at.YNc(1, et, 2, 7, "nz-date-picker", 1),
                at.YNc(2, st, 2, 0, "p", 2),
                at.YNc(3, nt, 2, 7, "nz-date-picker", 1),
                at.YNc(4, I, 0, 0, "ng-template", null, 3, at.W1O),
                at.qZA());
            },
            dependencies: [t.NU, t.$1, F.JJ, F.On, Y.uw, j.z, tt.v],
            changeDetection: 0,
          })),
          x
        );
      })();
    },
    71802: (Bt, wt, U) => {
      U.d(wt, { M: () => nt });
      var Mt = U(94489),
        at = U(65879),
        ut = U(975),
        t = U(96814),
        F = U(70855),
        Y = U(62595),
        j = U(60095),
        tt = U(9691),
        et = U(76271);
      function st(I, H) {
        if (
          (1 & I &&
            (at.TgZ(0, "nz-option", 3),
            at.ALo(1, "safeString"),
            at._UZ(2, "span", 4),
            at.ALo(3, "safeString"),
            at._uU(4),
            at.qZA()),
          2 & I)
        ) {
          const N = H.$implicit;
          at.Q6J("nzLabel", at.lcZ(1, 6, N.name))("nzValue", N.id),
            at.xp6(2),
            at.Udp("color", N.color_code),
            at.Q6J("nzType", at.lcZ(3, 8, N.icon)),
            at.xp6(2),
            at.hij(" ", N.name, " ");
        }
      }
      let nt = (() => {
        var I;
        class H {
          constructor(x, y) {
            (this.socket = x),
              (this.cdr = y),
              (this.projStatuses = []),
              (this.project = null),
              (this.handleResponse = (P) => {
                P &&
                  this.project &&
                  P.id === this.project.id &&
                  ((this.project.status_id = P.status),
                  (this.project.status_icon = P.status_icon),
                  (this.project.status_color = P.status_color),
                  (this.project.status_name = P.status_name),
                  this.cdr.markForCheck());
              });
          }
          ngOnInit() {
            this.socket.on(
              Mt.C.PROJECT_STATUS_CHANGE.toString(),
              this.handleResponse
            );
          }
          ngOnDestroy() {
            this.socket.removeListener(
              Mt.C.PROJECT_STATUS_CHANGE.toString(),
              this.handleResponse
            );
          }
          trackById(x, y) {
            return y.id;
          }
          handleStatusChange(x) {
            this.project?.id &&
              (this.socket.emit(
                Mt.C.PROJECT_STATUS_CHANGE.toString(),
                JSON.stringify({ project_id: this.project?.id, status_id: x })
              ),
              this.cdr.markForCheck());
          }
        }
        return (
          ((I = H).ɵfac = function (x) {
            return new (x || I)(at.Y36(ut.s), at.Y36(at.sBO));
          }),
          (I.ɵcmp = at.Xpm({
            type: I,
            selectors: [["worklenz-project-status"]],
            inputs: { projStatuses: "projStatuses", project: "project" },
            decls: 5,
            vars: 11,
            consts: [
              ["nz-icon", "", 3, "nzType", "nzTheme"],
              [
                "nzBorderless",
                "",
                1,
                "project-status-selector-r",
                3,
                "ngModel",
                "nzDropdownMatchSelectWidth",
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
                "ngForTrackBy",
              ],
              ["nzCustomContent", "", 3, "nzLabel", "nzValue"],
              ["nz-icon", "", 3, "nzType"],
            ],
            template: function (x, y) {
              1 & x &&
                (at._UZ(0, "span", 0),
                at.ALo(1, "safeString"),
                at._uU(2),
                at.TgZ(3, "nz-select", 1),
                at.NdJ("ngModelChange", function (k) {
                  return y.handleStatusChange(k);
                }),
                at.YNc(4, st, 5, 10, "nz-option", 2),
                at.qZA()),
                2 & x &&
                  (at.Udp(
                    "color",
                    null == y.project ? null : y.project.status_color
                  ),
                  at.Q6J(
                    "nzType",
                    at.lcZ(
                      1,
                      9,
                      null == y.project ? null : y.project.status_icon
                    )
                  )("nzTheme", "outline"),
                  at.xp6(2),
                  at.hij(
                    "\n",
                    null == y.project ? null : y.project.status_name,
                    " "
                  ),
                  at.xp6(1),
                  at.Q6J(
                    "ngModel",
                    null == y.project ? null : y.project.status_id
                  )("nzDropdownMatchSelectWidth", !1),
                  at.xp6(1),
                  at.Q6J("ngForOf", y.projStatuses)(
                    "ngForTrackBy",
                    y.trackById
                  ));
            },
            dependencies: [t.sg, F.w, Y.Ls, j.JJ, j.On, tt.Ip, tt.Vq, et.m],
            styles: [
              "nz-select[_ngcontent-%COMP%]{color:transparent;position:absolute;height:40px;top:2px;bottom:0;left:10px;margin-top:auto;margin-bottom:auto}",
            ],
            changeDetection: 0,
          })),
          H
        );
      })();
    },
    62806: (Bt, wt, U) => {
      U.d(wt, { X: () => s });
      var Mt = U(15861),
        at = U(71993),
        ut = U(94489),
        t = U(16676),
        F = U.n(t),
        Y = U(21406),
        j = U(65879),
        tt = U(16196),
        et = U(42012),
        st = U(62963),
        nt = U(74764),
        I = U(63481),
        H = U(975),
        N = U(32333),
        x = U(96814),
        y = U(62595),
        P = U(20824),
        k = U(24139),
        p = U(13740),
        v = U(60095),
        C = U(33640),
        u = U(55695),
        A = U(10095),
        T = U(9691),
        S = U(8083),
        l = U(9172);
      function h(a, d) {
        1 & a && j._UZ(0, "span", 12);
      }
      function m(a, d) {
        if ((1 & a && j._UZ(0, "nz-option", 16), 2 & a)) {
          const E = d.$implicit;
          j.Q6J("nzValue", E.id)("nzLabel", E.name);
        }
      }
      function c(a, d) {
        if (1 & a) {
          const E = j.EpF();
          j.TgZ(0, "nz-form-item", 13)(1, "nz-form-label"),
            j._uU(2, "Filter by:\xa0"),
            j.qZA(),
            j.TgZ(3, "nz-form-control")(4, "nz-select", 14),
            j.NdJ("ngModelChange", function (M) {
              j.CHM(E);
              const Z = j.oxw();
              return j.KtG((Z.projectId = M));
            })("ngModelChange", function (M) {
              j.CHM(E);
              const Z = j.oxw();
              return j.KtG(Z.onProjectChange(M));
            }),
            j.YNc(5, m, 1, 2, "nz-option", 15),
            j.qZA()()();
        }
        if (2 & a) {
          const E = j.oxw();
          j.xp6(4),
            j.Q6J("ngModel", E.projectId)("nzPlaceHolder", "Select project")(
              "nzAllowClear",
              !0
            ),
            j.xp6(1),
            j.Q6J("ngForOf", E.projects);
        }
      }
      function g(a, d) {
        1 & a && (j.TgZ(0, "small", 23), j._UZ(1, "span", 24), j.qZA()),
          2 & a &&
            (j.Q6J("nzType", "secondary"),
            j.xp6(1),
            j.Q6J("nzType", "double-right")("nzTheme", "outline"));
      }
      function i(a, d) {
        if (1 & a) {
          const E = j.EpF();
          j.TgZ(0, "tr", 17),
            j.NdJ("click", function () {
              const Z = j.CHM(E).$implicit,
                K = j.oxw();
              return j.KtG(K.openTask(Z));
            }),
            j.TgZ(1, "td", 18),
            j.YNc(2, g, 2, 3, "small", 19),
            j._uU(3),
            j.qZA(),
            j.TgZ(4, "td"),
            j._UZ(5, "nz-badge", 20),
            j.qZA(),
            j.TgZ(6, "td")(7, "nz-tag", 21),
            j._uU(8),
            j.qZA()(),
            j.TgZ(9, "td")(10, "nz-tag", 21),
            j._uU(11),
            j.qZA()(),
            j.TgZ(12, "td"),
            j._uU(13),
            j.ALo(14, "date"),
            j.qZA(),
            j.TgZ(15, "td"),
            j._uU(16),
            j.ALo(17, "date"),
            j.qZA(),
            j.TgZ(18, "td", 22),
            j._uU(19),
            j.qZA(),
            j.TgZ(20, "td", 22),
            j._uU(21),
            j.qZA(),
            j.TgZ(22, "td", 22),
            j._uU(23),
            j.qZA()();
        }
        if (2 & a) {
          const E = d.$implicit;
          j.xp6(2),
            j.Q6J("ngIf", E.parent_task_id),
            j.xp6(1),
            j.hij(" ", E.name, " "),
            j.xp6(2),
            j.Q6J("nzColor", E.project_color)("nzText", E.project_name)(
              "nzSize",
              "default"
            ),
            j.xp6(2),
            j.Q6J("nzColor", E.status_color + "69"),
            j.xp6(1),
            j.Oqu(E.status_name),
            j.xp6(2),
            j.Q6J("nzColor", E.priority_color + "69"),
            j.xp6(1),
            j.Oqu(E.priority_name),
            j.xp6(2),
            j.Oqu(j.xi3(14, 14, E.end_date, "MMM dd,yyyy") || "-"),
            j.xp6(3),
            j.Oqu(j.xi3(17, 17, E.completed_date, "MMM dd,yyyy") || "-"),
            j.xp6(3),
            j.Oqu(E.estimated_string),
            j.xp6(2),
            j.Oqu(E.time_spent_string),
            j.xp6(2),
            j.Oqu(E.overlogged_time);
        }
      }
      const e = function () {
        return { x: "300px" };
      };
      let s = (() => {
        var a;
        class d {
          constructor(o, M, Z, K, $, L, n, z) {
            var b = this;
            (this.cdr = o),
              (this.api = M),
              (this.service = Z),
              (this.drawer = K),
              (this.view = $),
              (this.timerService = L),
              (this.socket = n),
              (this.auth = z),
              (this.projectId = null),
              (this.disableProjectsFilter = !1),
              (this.isMultiple = !1),
              (this.onlySingleMember = !1),
              (this.isDurationLabelSelected = !0),
              (this.loading = !1),
              (this.loadingProjects = !1),
              (this.tasks = []),
              (this.projects = []),
              (this.refreshList = (D) => {
                this.get(!1);
              }),
              this.view.onRefresh.pipe((0, at.sL)()).subscribe(() => {
                this.get(!1);
              }),
              this.timerService.onSubmitOrUpdate
                .pipe((0, at.sL)())
                .subscribe(() => {
                  this.get(!1);
                }),
              this.service.onDrawerDateRangeChange.pipe((0, at.sL)()).subscribe(
                (0, Mt.Z)(function* () {
                  yield b.get(!0);
                })
              ),
              this.service.onDrawerDurationChange.pipe((0, at.sL)()).subscribe(
                (0, Mt.Z)(function* () {
                  yield b.get(!0);
                })
              );
          }
          ngOnInit() {
            this.get(),
              this.getProjects(),
              this.socket.on(
                ut.C.TASK_STATUS_CHANGE.toString(),
                this.refreshList
              ),
              this.socket.on(
                ut.C.TASK_PRIORITY_CHANGE.toString(),
                this.refreshList
              ),
              this.socket.on(
                ut.C.TASK_NAME_CHANGE.toString(),
                this.refreshList
              ),
              this.socket.on(
                ut.C.TASK_END_DATE_CHANGE.toString(),
                this.refreshList
              ),
              this.socket.on(
                ut.C.TASK_START_DATE_CHANGE.toString(),
                this.refreshList
              ),
              this.socket.on(
                ut.C.TASK_TIME_ESTIMATION_CHANGE.toString(),
                this.refreshList
              ),
              this.socket.on(ut.C.TASK_TIMER_STOP.toString(), this.refreshList),
              this.socket.on(
                ut.C.TASK_PHASE_CHANGE.toString(),
                this.refreshList
              );
          }
          ngOnDestroy() {
            this.socket.removeListener(
              ut.C.TASK_STATUS_CHANGE.toString(),
              this.refreshList
            ),
              this.socket.removeListener(
                ut.C.TASK_PRIORITY_CHANGE.toString(),
                this.refreshList
              ),
              this.socket.removeListener(
                ut.C.TASK_NAME_CHANGE.toString(),
                this.refreshList
              ),
              this.socket.removeListener(
                ut.C.TASK_END_DATE_CHANGE.toString(),
                this.refreshList
              ),
              this.socket.removeListener(
                ut.C.TASK_START_DATE_CHANGE.toString(),
                this.refreshList
              ),
              this.socket.removeListener(
                ut.C.TASK_TIME_ESTIMATION_CHANGE.toString(),
                this.refreshList
              ),
              this.socket.removeListener(
                ut.C.TASK_TIMER_STOP.toString(),
                this.refreshList
              ),
              this.socket.removeListener(
                ut.C.TASK_PHASE_CHANGE.toString(),
                this.refreshList
              );
          }
          setDatesForKeys() {
            var o = this;
            return (0, Mt.Z)(function* () {
              if (o.service.getDrawerDuration()?.key) {
                const M = o.service.getDrawerDuration()?.key,
                  Z = F()();
                switch (M) {
                  case Y.WD:
                    const K = F()().subtract(1, "days");
                    o.service.setDrawerDateRange([K.toString(), K.toString()]);
                    break;
                  case Y.ao:
                    const $ = F()().subtract(1, "weeks");
                    o.service.setDrawerDateRange([$.toString(), Z.toString()]);
                    break;
                  case Y.ly:
                    const L = F()().subtract(1, "months");
                    o.service.setDrawerDateRange([L.toString(), Z.toString()]);
                    break;
                  case Y.o9:
                    const n = F()().subtract(3, "months");
                    o.service.setDrawerDateRange([n.toString(), Z.toString()]);
                    break;
                  case Y.$U:
                    const z = F()().subtract(1, "weeks").startOf("week"),
                      b = F()().subtract(1, "weeks").endOf("week");
                    o.service.setDrawerDateRange([z.toString(), b.toString()]);
                    break;
                  case Y.lI:
                    const D = F()().subtract(1, "month").startOf("month"),
                      J = F()().subtract(1, "month").endOf("month");
                    o.service.setDrawerDateRange([D.toString(), J.toString()]);
                }
              }
            })();
          }
          get(o = !0) {
            var M = this;
            return (0, Mt.Z)(function* () {
              if (!M.loading) {
                (M.loading = o),
                  M.isDurationLabelSelected &&
                    M.onlySingleMember &&
                    (yield M.setDatesForKeys());
                try {
                  const Z = {
                      duration: M.onlySingleMember
                        ? M.service.getDrawerDuration()?.key
                        : M.service.getDuration()?.key,
                      date_range: M.onlySingleMember
                        ? M.service.getDrawerDateRange()
                        : M.service.getDateRange(),
                      only_single_member: M.onlySingleMember,
                      archived: M.service.getIncludeToggle(),
                    },
                    K = yield M.api.getTasksByMember(
                      M.teamMemberId,
                      M.projectId,
                      !1,
                      null,
                      Z
                    );
                  K.done && (M.tasks = K.body), (M.loading = !1);
                } catch {
                  M.loading = !1;
                }
                M.cdr.markForCheck();
              }
            })();
          }
          getProjects() {
            var o = this;
            return (0, Mt.Z)(function* () {
              if (!o.disableProjectsFilter && !o.loadingProjects) {
                o.loadingProjects = !0;
                try {
                  const M = o.service.getCurrentTeam()?.id,
                    Z = yield o.api.getOverviewProjectsByTeam(
                      M,
                      o.teamMemberId
                    );
                  Z.done && (o.projects = Z.body), (o.loadingProjects = !1);
                } catch {
                  o.loadingProjects = !1;
                }
                o.cdr.markForCheck();
              }
            })();
          }
          trackBy(o, M) {
            return M.id;
          }
          openTask(o) {
            o.id &&
              o.project_id &&
              this.drawer.openTask({ taskId: o.id, projectId: o.project_id });
          }
          onProjectChange(o) {
            (this.projectId = o), this.get();
          }
        }
        return (
          ((a = d).ɵfac = function (o) {
            return new (o || a)(
              j.Y36(j.sBO),
              j.Y36(tt.U),
              j.Y36(et.m),
              j.Y36(st.b),
              j.Y36(nt.f),
              j.Y36(I.d),
              j.Y36(H.s),
              j.Y36(N.e)
            );
          }),
          (a.ɵcmp = j.Xpm({
            type: a,
            selectors: [["worklenz-rpt-flat-task-list"]],
            inputs: {
              projectId: "projectId",
              teamMemberId: "teamMemberId",
              disableProjectsFilter: "disableProjectsFilter",
              isMultiple: "isMultiple",
              onlySingleMember: "onlySingleMember",
              isDurationLabelSelected: "isDurationLabelSelected",
            },
            decls: 32,
            vars: 25,
            consts: [
              [1, "d-block", 3, "nzLoading", "nzActive"],
              [1, "d-flex", "justify-content-between"],
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
              ["class", "d-flex align-items-center", 4, "ngIf"],
              [
                3,
                "nzSize",
                "nzData",
                "nzShowPagination",
                "nzHideOnSinglePage",
                "nzScroll",
              ],
              ["taskTable", ""],
              ["nzLeft", "", 3, "nzWidth"],
              [3, "nzWidth"],
              [1, "text-center", 3, "nzWidth"],
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
              ["nz-icon", "", "nzType", "search"],
              [1, "d-flex", "align-items-center"],
              [
                2,
                "min-width",
                "125px",
                3,
                "ngModel",
                "nzPlaceHolder",
                "nzAllowClear",
                "ngModelChange",
              ],
              [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"],
              [3, "nzValue", "nzLabel"],
              [1, "cursor-pointer", 3, "click"],
              ["nzLeft", ""],
              ["nz-typography", "", 3, "nzType", 4, "ngIf"],
              [3, "nzColor", "nzText", "nzSize"],
              [3, "nzColor"],
              [1, "text-center"],
              ["nz-typography", "", 3, "nzType"],
              ["nz-icon", "", 3, "nzType", "nzTheme"],
            ],
            template: function (o, M) {
              if (
                (1 & o &&
                  (j.TgZ(0, "nz-skeleton", 0)(1, "div", 1)(
                    2,
                    "nz-input-group",
                    2
                  )(3, "input", 3),
                  j.NdJ("ngModelChange", function (K) {
                    return (M.searchText = K);
                  }),
                  j.qZA()(),
                  j.YNc(4, h, 1, 0, "ng-template", null, 4, j.W1O),
                  j.YNc(6, c, 6, 4, "nz-form-item", 5),
                  j.qZA(),
                  j.TgZ(7, "nz-table", 6, 7),
                  j.ALo(9, "searchByName"),
                  j.TgZ(10, "thead")(11, "tr")(12, "th", 8),
                  j._uU(13, "Tarea"),
                  j.qZA(),
                  j.TgZ(14, "th", 9),
                  j._uU(15, "Expediente"),
                  j.qZA(),
                  j.TgZ(16, "th", 9),
                  j._uU(17, "Estado"),
                  j.qZA(),
                  j.TgZ(18, "th", 9),
                  j._uU(19, "Prioridad"),
                  j.qZA(),
                  j.TgZ(20, "th", 9),
                  j._uU(21, "Fecha Vencimiento"),
                  j.qZA(),
                  j.TgZ(22, "th", 9),
                  j._uU(23, "Fecha de completado"),
                  j.qZA(),
                  j.TgZ(24, "th", 10),
                  j._uU(25, "Tiempo estimado"),
                  j.qZA(),
                  j.TgZ(26, "th", 10),
                  j._uU(27, "Tiempo Registrado"),
                  j.qZA(),
                  j.TgZ(28, "th", 10),
                  j._uU(29, "Tiempo sobreasignado"),
                  j.qZA()()(),
                  j.TgZ(30, "tbody"),
                  j.YNc(31, i, 24, 20, "tr", 11),
                  j.qZA()()()),
                2 & o)
              ) {
                const Z = j.MAs(5),
                  K = j.MAs(8);
                j.Q6J("nzLoading", M.loading)("nzActive", !0),
                  j.xp6(2),
                  j.Q6J("nzSuffix", Z),
                  j.xp6(1),
                  j.Q6J("ngModel", M.searchText),
                  j.xp6(3),
                  j.Q6J("ngIf", !M.disableProjectsFilter),
                  j.xp6(1),
                  j.Q6J("nzSize", "small")(
                    "nzData",
                    j.xi3(9, 21, M.tasks, M.searchText)
                  )("nzShowPagination", !0)("nzHideOnSinglePage", !0)(
                    "nzScroll",
                    j.DdM(24, e)
                  ),
                  j.xp6(5),
                  j.Q6J("nzWidth", "260px"),
                  j.xp6(2),
                  j.Q6J("nzWidth", "200px"),
                  j.xp6(2),
                  j.Q6J("nzWidth", "160px"),
                  j.xp6(2),
                  j.Q6J("nzWidth", "120px"),
                  j.xp6(2),
                  j.Q6J("nzWidth", "150px"),
                  j.xp6(2),
                  j.Q6J("nzWidth", "160px"),
                  j.xp6(2),
                  j.Q6J("nzWidth", "150px"),
                  j.xp6(2),
                  j.Q6J("nzWidth", "150px"),
                  j.xp6(2),
                  j.Q6J("nzWidth", "150px"),
                  j.xp6(3),
                  j.Q6J("ngForOf", K.data)("ngForTrackBy", M.trackBy);
              }
            },
            dependencies: [
              x.sg,
              x.O5,
              y.Ls,
              P.Zp,
              P.gB,
              P.ke,
              k.ng,
              p.N8,
              p.Uo,
              p._C,
              p.Om,
              p.p0,
              p.$Z,
              p.qn,
              v.Fj,
              v.JJ,
              v.On,
              C.x7,
              u.j,
              A.t3,
              A.SK,
              T.Ip,
              T.Vq,
              S.ZU,
              x.uU,
              l.g,
            ],
            styles: [
              "nz-tag[_ngcontent-%COMP%]{border-radius:20px;color:#000000d9}",
            ],
            changeDetection: 0,
          })),
          d
        );
      })();
    },
    42528: (Bt, wt, U) => {
      U.d(wt, { r: () => H });
      var Mt = U(96814),
        at = U(62595),
        ut = U(20824),
        t = U(24139),
        F = U(13740),
        Y = U(60095),
        j = U(33640),
        tt = U(55695),
        et = U(10095),
        st = U(9691),
        nt = U(8083),
        I = U(65879);
      let H = (() => {
        var N;
        class x {}
        return (
          ((N = x).ɵfac = function (P) {
            return new (P || N)();
          }),
          (N.ɵmod = I.oAB({ type: N })),
          (N.ɵinj = I.cJS({
            imports: [
              Mt.ez,
              at.PV,
              ut.o7,
              t.H0,
              F.HQ,
              Y.UX,
              Y.u5,
              j.mS,
              tt.X,
              et.Jb,
              st.LV,
              nt.ZJ,
            ],
          })),
          x
        );
      })();
    },
    63124: (Bt, wt, U) => {
      U.d(wt, { L: () => x });
      var Mt = U(96814),
        at = U(33640),
        ut = U(90565),
        t = U(10095),
        F = U(62595),
        Y = U(20824),
        j = U(9691),
        tt = U(24139),
        et = U(13740),
        st = U(60095),
        nt = U(38265),
        I = U(55695),
        H = U(8083),
        N = U(65879);
      let x = (() => {
        var y;
        class P {}
        return (
          ((y = P).ɵfac = function (p) {
            return new (p || y)();
          }),
          (y.ɵmod = N.oAB({ type: y })),
          (y.ɵinj = N.cJS({
            imports: [
              Mt.ez,
              at.mS,
              ut.cD,
              t.Jb,
              F.PV,
              Y.o7,
              j.LV,
              tt.H0,
              et.HQ,
              st.UX,
              st.u5,
              nt.u,
              I.X,
              H.ZJ,
            ],
          })),
          P
        );
      })();
    },
    19703: (Bt, wt, U) => {
      U.d(wt, { B: () => u });
      var Mt = U(96814),
        at = U(62595),
        ut = U(13740),
        t = U(24139),
        F = U(20824),
        Y = U(60095),
        j = U(33640),
        tt = U(42840),
        et = U(41958),
        st = U(48128),
        nt = U(55695),
        I = U(38265),
        H = U(48522),
        N = U(96109),
        x = U(9691),
        y = U(8660),
        P = U(91921),
        k = U(47246),
        p = U(92574),
        v = U(63392),
        C = U(65879);
      let u = (() => {
        var A;
        class T {}
        return (
          ((A = T).ɵfac = function (l) {
            return new (l || A)();
          }),
          (A.ɵmod = C.oAB({ type: A })),
          (A.ɵinj = C.cJS({
            imports: [
              Mt.ez,
              at.PV,
              ut.HQ,
              t.H0,
              F.o7,
              Y.u5,
              j.mS,
              tt.sL,
              et.vG,
              st.W,
              nt.X,
              I.u,
              H.a,
              N.cg,
              x.LV,
              y.o,
              P.ReportingModule,
              k.vQ,
              p.zf,
              v.p,
            ],
          })),
          T
        );
      })();
    },
    62963: (Bt, wt, U) => {
      U.d(wt, { b: () => t });
      var Mt = U(78645),
        at = U(65879),
        ut = U(42012);
      let t = (() => {
        var F;
        class Y {
          constructor(tt) {
            (this.rptService = tt),
              (this._openTeamDrawerSbj = new Mt.x()),
              (this._openProjectDrawerSbj = new Mt.x()),
              (this._openMemberDrawerSbj = new Mt.x()),
              (this._openSingleMemberDrawerSbj = new Mt.x()),
              (this._openTasksDrawerSbj = new Mt.x()),
              (this._openTaskDrawerSbj = new Mt.x()),
              (this._openSingleMemberTaskStat = new Mt.x()),
              (this._openSingleMemberProjects = new Mt.x()),
              (this._openSingleMemberTimeLogs = new Mt.x()),
              (this._singleMemberOverviewSbj = new Mt.x()),
              (this._singleMemberTimeLogsSbj = new Mt.x()),
              (this._singleMemberActivityLogsSbj = new Mt.x()),
              (this._singleMemberProjectsSbj = new Mt.x()),
              (this._singleMemberTasksSbj = new Mt.x());
          }
          get onOpenTeam() {
            return this._openTeamDrawerSbj.asObservable();
          }
          get onOpenProject() {
            return this._openProjectDrawerSbj.asObservable();
          }
          get onOpenMember() {
            return this._openMemberDrawerSbj.asObservable();
          }
          get onOpenSingleMember() {
            return this._openSingleMemberDrawerSbj.asObservable();
          }
          get onOpenTasks() {
            return this._openTasksDrawerSbj.asObservable();
          }
          get onOpenTask() {
            return this._openTaskDrawerSbj.asObservable();
          }
          get onOpenSingleMemberTaskStat() {
            return this._openSingleMemberTaskStat.asObservable();
          }
          get onOpenSingleMemberProjects() {
            return this._openSingleMemberProjects.asObservable();
          }
          get onOpenSingleMemberTimeLogs() {
            return this._openSingleMemberTimeLogs.asObservable();
          }
          openTeam(tt) {
            this.rptService.setCurrentTeam(tt),
              this._openTeamDrawerSbj.next(tt);
          }
          openProject(tt) {
            this._openProjectDrawerSbj.next(tt);
          }
          openMember(tt, et) {
            this._openMemberDrawerSbj.next({ member: tt, project: et });
          }
          openSingleMember(tt) {
            this._openSingleMemberDrawerSbj.next({ member: tt });
          }
          openTasks(tt, et) {
            this._openTasksDrawerSbj.next({ project: tt, member: et });
          }
          openTask(tt) {
            this._openTaskDrawerSbj.next(tt);
          }
          openSingleMemberTaskStat(tt) {
            this._openSingleMemberTaskStat.next(tt);
          }
          openSingleMemberProjects(tt) {
            this._openSingleMemberProjects.next(tt);
          }
          openTimeLogsTab() {
            this._openSingleMemberTimeLogs.next();
          }
          emitGetSingleMemberOverview() {
            this._singleMemberOverviewSbj.next();
          }
          emitGetSingleMemberTimeLogs() {
            this._singleMemberTimeLogsSbj.next();
          }
          emitGetSingleMemberActivityLogs() {
            this._singleMemberActivityLogsSbj.next();
          }
          emitGetSingleMemberProjects() {
            this._singleMemberProjectsSbj.next();
          }
          emitGetSingleMemberTasks() {
            this._singleMemberTasksSbj.next();
          }
        }
        return (
          ((F = Y).ɵfac = function (tt) {
            return new (tt || F)(at.LFG(ut.m));
          }),
          (F.ɵprov = at.Yz7({ token: F, factory: F.ɵfac, providedIn: "root" })),
          Y
        );
      })();
    },
    27546: (Bt, wt, U) => {
      U.d(wt, { $: () => T });
      var Mt = U(96814),
        at = U(42840),
        ut = U(43389),
        t = U(62595),
        F = U(92574),
        Y = U(79382),
        j = U(41958),
        tt = U(33640),
        et = U(82962),
        st = U(10095),
        nt = U(91921),
        I = U(19703),
        H = U(63124),
        N = U(42528),
        x = U(3626),
        y = U(47381),
        P = U(62787),
        k = U(73460),
        p = U(47246),
        v = U(60095),
        C = U(52682),
        u = U(3599),
        A = U(65879);
      let T = (() => {
        var S;
        class l {}
        return (
          ((S = l).ɵfac = function (m) {
            return new (m || S)();
          }),
          (S.ɵmod = A.oAB({ type: S })),
          (S.ɵinj = A.cJS({
            imports: [
              Mt.ez,
              at.sL,
              ut.BL,
              t.PV,
              F.zf,
              Y.we,
              j.vG,
              tt.mS,
              et.vh,
              st.Jb,
              nt.ReportingModule,
              I.B,
              H.L,
              N.r,
              x.lt,
              y.t,
              P.b1,
              k.ip,
              p.vQ,
              v.u5,
              C.Hb,
              u.U5,
              v.UX,
            ],
          })),
          l
        );
      })();
    },
    92022: (Bt, wt, U) => {
      U.d(wt, { $: () => Jt });
      var Mt = U(15861),
        at = U(71993),
        ut = U(69649),
        t = U(65879),
        F = U(62963),
        Y = U(42012),
        j = U(69342),
        tt = U(96814),
        et = U(3626),
        st = U(42840),
        nt = U(70855),
        I = U(41958),
        H = U(43389),
        N = U(62595),
        x = U(92574),
        y = U(79382),
        P = U(47381),
        k = U(73460),
        p = U(62787),
        v = U(27128),
        C = U(47246),
        u = U(94489),
        A = U(16196),
        T = U(975),
        S = U(33640),
        l = U(82962),
        h = U(10095);
      function m(ft, Ot) {
        if (
          (1 & ft &&
            (t.TgZ(0, "ul", 12)(1, "li", 13),
            t._UZ(2, "span", 14),
            t._uU(3),
            t.qZA(),
            t.TgZ(4, "li", 13),
            t._UZ(5, "span", 15),
            t._uU(6),
            t.qZA(),
            t.TgZ(7, "li", 13),
            t._UZ(8, "span", 16),
            t._uU(9),
            t.qZA(),
            t.TgZ(10, "li", 13),
            t._UZ(11, "span", 17),
            t._uU(12),
            t.qZA(),
            t.TgZ(13, "li", 18),
            t._UZ(14, "span", 14),
            t._uU(15),
            t.qZA()()),
          2 & ft)
        ) {
          const mt = t.oxw();
          t.xp6(2),
            t.Q6J("nzType", "check-circle")("nzTheme", "outline"),
            t.xp6(1),
            t.hij(
              " ",
              null == mt.model.stats ? null : mt.model.stats.completed,
              " Completed Tasks "
            ),
            t.xp6(2),
            t.Q6J("nzType", "file-excel")("nzTheme", "outline"),
            t.xp6(1),
            t.hij(
              " ",
              null == mt.model.stats ? null : mt.model.stats.incompleted,
              " Tareas Incompletas "
            ),
            t.xp6(2),
            t.Q6J("nzType", "exclamation-circle")("nzTheme", "outline"),
            t.xp6(1),
            t.hij(
              " ",
              null == mt.model.stats ? null : mt.model.stats.overdue,
              " Tareas Vencidas "
            ),
            t.xp6(2),
            t.Q6J("nzType", "clock-circle")("nzTheme", "outline"),
            t.xp6(1),
            t.hij(
              " ",
              null == mt.model.stats ? null : mt.model.stats.total_allocated,
              " Horas asignadas "
            ),
            t.xp6(2),
            t.Q6J("nzType", "clock-circle")("nzTheme", "outline"),
            t.xp6(1),
            t.hij(
              " ",
              null == mt.model.stats ? null : mt.model.stats.total_logged,
              " Horas registradas "
            );
        }
      }
      function c(ft, Ot) {
        1 & ft &&
          (t.TgZ(0, "div", 19)(1, "div")(2, "h4", 20),
          t._uU(3, "Tasks By Status"),
          t.qZA()()());
      }
      function g(ft, Ot) {
        1 & ft &&
          (t.ynx(0),
          t.TgZ(1, "div", 21)(2, "div", 22),
          t._UZ(3, "img", 23),
          t.qZA(),
          t.TgZ(4, "span", 24),
          t._uU(5, "No tasks to show."),
          t.qZA()(),
          t.BQk());
      }
      function i(ft, Ot) {
        if (
          (1 & ft && (t.TgZ(0, "div", 30), t._UZ(1, "canvas", 31), t.qZA()),
          2 & ft)
        ) {
          const mt = t.oxw(2);
          t.xp6(1),
            t.Q6J("width", 185)("height", 185)("data", mt.statusChartData)(
              "options",
              mt.chartOptions
            )("legend", !1)("type", "doughnut");
        }
      }
      function e(ft, Ot) {
        if (
          (1 & ft &&
            (t.TgZ(0, "div", 18),
            t.YNc(1, i, 2, 6, "div", 25),
            t.TgZ(2, "div", 26)(3, "ul", 27)(4, "li", 28),
            t._UZ(5, "nz-badge", 29),
            t.qZA(),
            t.TgZ(6, "li", 28),
            t._UZ(7, "nz-badge", 29),
            t.qZA(),
            t.TgZ(8, "li", 28),
            t._UZ(9, "nz-badge", 29),
            t.qZA(),
            t.TgZ(10, "li", 28),
            t._UZ(11, "nz-badge", 29),
            t.qZA()()()()),
          2 & ft)
        ) {
          const mt = t.oxw();
          t.xp6(1),
            t.Q6J(
              "ngIf",
              mt.model.by_status && mt.model.by_status.chart.length
            ),
            t.xp6(4),
            t.Q6J("nzColor", "#333333")(
              "nzText",
              "All (" +
                ((null == mt.model.by_status ? null : mt.model.by_status.all) ||
                  0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#a9a9a9")(
              "nzText",
              "Por hacer (" +
                ((null == mt.model.by_status
                  ? null
                  : mt.model.by_status.todo) || 0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#70a6f3")(
              "nzText",
              "En progreso (" +
                ((null == mt.model.by_status
                  ? null
                  : mt.model.by_status.doing) || 0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#75c997")(
              "nzText",
              "Hecho (" +
                ((null == mt.model.by_status
                  ? null
                  : mt.model.by_status.done) || 0) +
                ")"
            );
        }
      }
      function s(ft, Ot) {
        1 & ft &&
          (t.TgZ(0, "div", 19)(1, "div")(2, "h4", 20),
          t._uU(3, "Tasks By Priority"),
          t.qZA()()());
      }
      function a(ft, Ot) {
        1 & ft &&
          (t.ynx(0),
          t.TgZ(1, "div", 21)(2, "div", 22),
          t._UZ(3, "img", 23),
          t.qZA(),
          t.TgZ(4, "span", 24),
          t._uU(5, "No tasks to show."),
          t.qZA()(),
          t.BQk());
      }
      function d(ft, Ot) {
        if (
          (1 & ft && (t.TgZ(0, "div", 30), t._UZ(1, "canvas", 31), t.qZA()),
          2 & ft)
        ) {
          const mt = t.oxw(2);
          t.xp6(1),
            t.Q6J("width", 185)("height", 185)("data", mt.priorityChartData)(
              "options",
              mt.chartOptions
            )("legend", !1)("type", "doughnut");
        }
      }
      function E(ft, Ot) {
        if (
          (1 & ft &&
            (t.TgZ(0, "div", 18),
            t.YNc(1, d, 2, 6, "div", 25),
            t.TgZ(2, "div", 26)(3, "ul", 27)(4, "li", 28),
            t._UZ(5, "nz-badge", 29),
            t.qZA(),
            t.TgZ(6, "li", 28),
            t._UZ(7, "nz-badge", 29),
            t.qZA(),
            t.TgZ(8, "li", 28),
            t._UZ(9, "nz-badge", 29),
            t.qZA(),
            t.TgZ(10, "li", 28),
            t._UZ(11, "nz-badge", 29),
            t.qZA()()()()),
          2 & ft)
        ) {
          const mt = t.oxw();
          t.xp6(1),
            t.Q6J(
              "ngIf",
              mt.model.by_priority && mt.model.by_priority.chart.length
            ),
            t.xp6(4),
            t.Q6J("nzColor", "#333333")(
              "nzText",
              "All (" +
                ((null == mt.model.by_priority
                  ? null
                  : mt.model.by_priority.all) || 0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#75c997")(
              "nzText",
              "Low (" +
                ((null == mt.model.by_priority
                  ? null
                  : mt.model.by_priority.low) || 0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#fbc84c")(
              "nzText",
              "Medium (" +
                ((null == mt.model.by_priority
                  ? null
                  : mt.model.by_priority.medium) || 0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#f37070")(
              "nzText",
              "High (" +
                ((null == mt.model.by_priority
                  ? null
                  : mt.model.by_priority.high) || 0) +
                ")"
            );
        }
      }
      function o(ft, Ot) {
        1 & ft &&
          (t.TgZ(0, "div", 19)(1, "div")(2, "h4", 20),
          t._uU(3, "Tasks By Due Date"),
          t.qZA()(),
          t._UZ(4, "div", 32),
          t.qZA());
      }
      function M(ft, Ot) {
        1 & ft &&
          (t.ynx(0),
          t.TgZ(1, "div", 21)(2, "div", 22),
          t._UZ(3, "img", 23),
          t.qZA(),
          t.TgZ(4, "span", 24),
          t._uU(5, "No tasks to show."),
          t.qZA()(),
          t.BQk());
      }
      function Z(ft, Ot) {
        if (
          (1 & ft && (t.TgZ(0, "div", 30), t._UZ(1, "canvas", 31), t.qZA()),
          2 & ft)
        ) {
          const mt = t.oxw(2);
          t.xp6(1),
            t.Q6J("width", 185)("height", 185)("data", mt.duedateChartData)(
              "options",
              mt.chartOptions
            )("legend", !1)("type", "doughnut");
        }
      }
      function K(ft, Ot) {
        if (
          (1 & ft &&
            (t.TgZ(0, "div", 18),
            t.YNc(1, Z, 2, 6, "div", 25),
            t.TgZ(2, "div", 26)(3, "ul", 27)(4, "li", 28),
            t._UZ(5, "nz-badge", 29),
            t.qZA(),
            t.TgZ(6, "li", 28),
            t._UZ(7, "nz-badge", 29),
            t.qZA(),
            t.TgZ(8, "li", 28),
            t._UZ(9, "nz-badge", 29),
            t.qZA(),
            t.TgZ(10, "li", 28),
            t._UZ(11, "nz-badge", 29),
            t.qZA(),
            t.TgZ(12, "li", 28),
            t._UZ(13, "nz-badge", 29),
            t.qZA()()()()),
          2 & ft)
        ) {
          const mt = t.oxw();
          t.xp6(1),
            t.Q6J("ngIf", mt.model.by_due && mt.model.by_due.chart.length),
            t.xp6(4),
            t.Q6J("nzColor", "#333333")(
              "nzText",
              "All (" +
                ((null == mt.model.by_due ? null : mt.model.by_due.all) || 0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#75c997")(
              "nzText",
              "Completed (" +
                ((null == mt.model.by_due ? null : mt.model.by_due.completed) ||
                  0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#70a6f3")(
              "nzText",
              "Upcoming (" +
                ((null == mt.model.by_due ? null : mt.model.by_due.upcoming) ||
                  0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#f37070")(
              "nzText",
              "Overdue (" +
                ((null == mt.model.by_due ? null : mt.model.by_due.overdue) ||
                  0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#a9a9a9")(
              "nzText",
              "No Due Date (" +
                ((null == mt.model.by_due ? null : mt.model.by_due.no_due) ||
                  0) +
                ")"
            );
        }
      }
      let $ = (() => {
        var ft;
        class Ot extends v.k {
          constructor(xt, _t, Dt, Rt) {
            super(Dt),
              (this.cdr = xt),
              (this.api = _t),
              (this.ngZone = Dt),
              (this.socket = Rt),
              (this.projectId = null),
              (this.isStatusChartEmpty = !1),
              (this.isPriorityChartEmpty = !1),
              (this.isDueDateChartEmpty = !1),
              (this.statusColors = []),
              (this.priorityColors = []),
              (this.duedateColors = []),
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
              (this.priorityChartData = {
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
              (this.duedateChartData = {
                labels: [],
                datasets: [
                  {
                    label: "Tasks",
                    data: [],
                    backgroundColor: this.duedateColors,
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
              (this.refresh = (Ht) => {
                this.get();
              });
          }
          ngOnInit() {
            this.get(), this.listenSockets();
          }
          ngOnDestroy() {
            this.socket.removeListener(
              u.C.TASK_STATUS_CHANGE.toString(),
              this.refresh
            ),
              this.socket.removeListener(
                u.C.TASK_PRIORITY_CHANGE.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                u.C.TASK_END_DATE_CHANGE.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                u.C.QUICK_TASK.toString(),
                this.refresh
              );
          }
          listenSockets() {
            this.socket.on(u.C.TASK_STATUS_CHANGE.toString(), this.refresh),
              this.socket.on(u.C.TASK_PRIORITY_CHANGE.toString(), this.refresh),
              this.socket.on(u.C.TASK_END_DATE_CHANGE.toString(), this.refresh),
              this.socket.on(u.C.QUICK_TASK.toString(), this.refresh);
          }
          get() {
            var xt = this;
            return (0, Mt.Z)(function* () {
              if (xt.projectId) {
                try {
                  (xt.loading = !0), xt.clearCharts();
                  const _t = yield xt.api.getProjectInfo(xt.projectId);
                  _t.done && ((xt.model = _t.body), xt.drawCharts(_t.body)),
                    (xt.loading = !1);
                } catch {
                  xt.loading = !1;
                }
                xt.cdr.markForCheck();
              }
            })();
          }
          drawCharts(xt) {
            if (xt.by_status) {
              for (const _t of xt.by_status.chart)
                this.statusChartData.labels?.push(_t.name),
                  this.statusChartData.datasets[0].data.push(_t.y || 0),
                  this.statusColors.push(_t.color);
              this.statusTaskChart?.update(),
                this.statusChartData.datasets[0].data.every((_t) => 0 === _t) &&
                  (this.isStatusChartEmpty = !0);
            }
            if (xt.by_priority) {
              for (const _t of xt.by_priority.chart)
                this.priorityChartData.labels?.push(_t.name),
                  this.priorityChartData.datasets[0].data.push(_t.y || 0),
                  this.priorityColors.push(_t.color);
              this.priorityTaskChart?.update(),
                this.priorityChartData.datasets[0].data.every(
                  (_t) => 0 === _t
                ) && (this.isPriorityChartEmpty = !0);
            }
            if (xt.by_due) {
              for (const _t of xt.by_due.chart)
                this.duedateChartData.labels?.push(_t.name),
                  this.duedateChartData.datasets[0].data.push(_t.y || 0),
                  this.duedateColors.push(_t.color);
              this.duedateTasksChart?.update(),
                this.duedateChartData.datasets[0].data.every(
                  (_t) => 0 === _t
                ) && (this.isDueDateChartEmpty = !0);
            }
            this.cdr.markForCheck();
          }
          openList(xt) {
            this.projectId &&
              this.ngZone.runOutsideAngular(() => {
                const _t = document.createElement("a");
                "status" === xt &&
                  (_t.href = `/worklenz/projects/${this.projectId}?group=status`),
                  "priority" === xt &&
                    (_t.href = `/worklenz/projects/${this.projectId}?group=priority`),
                  (_t.target = "_blank"),
                  _t.click();
              });
          }
          clearCharts() {
            (this.statusChartData.datasets[0].data = []),
              (this.priorityChartData.datasets[0].data = []),
              (this.duedateChartData.datasets[0].data = []),
              (this.statusChartData.labels = []),
              (this.priorityChartData.labels = []),
              (this.duedateChartData.labels = []),
              this.cdr.markForCheck();
          }
        }
        return (
          ((ft = Ot).ɵfac = function (xt) {
            return new (xt || ft)(
              t.Y36(t.sBO),
              t.Y36(A.U),
              t.Y36(t.R0b),
              t.Y36(T.s)
            );
          }),
          (ft.ɵcmp = t.Xpm({
            type: ft,
            selectors: [["worklenz-rpt-project-drawer-overview"]],
            viewQuery: function (xt, _t) {
              if (
                (1 & xt && (t.Gf(C.jh, 5), t.Gf(C.jh, 5), t.Gf(C.jh, 5)),
                2 & xt)
              ) {
                let Dt;
                t.iGM((Dt = t.CRH())) && (_t.statusTaskChart = Dt.first),
                  t.iGM((Dt = t.CRH())) && (_t.priorityTaskChart = Dt.first),
                  t.iGM((Dt = t.CRH())) && (_t.duedateTasksChart = Dt.first);
              }
            },
            inputs: { projectId: "projectId" },
            features: [t.qOj],
            decls: 25,
            vars: 16,
            consts: [
              ["nz-row", "", 3, "nzGutter"],
              ["nz-col", "", 1, "mb-2", 3, "nzSpan"],
              [1, "h-100", 3, "nzLoading"],
              ["class", "list-unstyled mt-3 ps-4", 4, "ngIf"],
              [3, "nzTitle"],
              ["statusCardTitle", ""],
              [1, "card-content"],
              [4, "ngIf"],
              ["class", "d-flex", 4, "ngIf"],
              ["nz-col", "", 1, "mt-2", "mb-2", 3, "nzSpan"],
              ["priorityCardTitle", ""],
              ["duedateCardTitle", ""],
              [1, "list-unstyled", "mt-3", "ps-4"],
              [1, "d-flex", "mb-3"],
              [
                "nz-icon",
                "",
                1,
                "stat-icon",
                "me-2",
                2,
                "color",
                "#75c997",
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
                "#ffc63b",
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
                3,
                "nzType",
                "nzTheme",
              ],
              [1, "d-flex"],
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
              [1, "ms-auto"],
            ],
            template: function (xt, _t) {
              if (
                (1 & xt &&
                  (t.TgZ(0, "div", 0)(1, "div", 1)(2, "nz-card", 2),
                  t.YNc(3, m, 16, 15, "ul", 3),
                  t.qZA()(),
                  t.TgZ(4, "div", 1)(5, "nz-card", 4),
                  t.YNc(6, c, 4, 0, "ng-template", null, 5, t.W1O),
                  t.TgZ(8, "div", 6),
                  t.YNc(9, g, 6, 0, "ng-container", 7),
                  t.YNc(10, e, 12, 9, "div", 8),
                  t.qZA()()(),
                  t.TgZ(11, "div", 9)(12, "nz-card", 4),
                  t.YNc(13, s, 4, 0, "ng-template", null, 10, t.W1O),
                  t.TgZ(15, "div", 6),
                  t.YNc(16, a, 6, 0, "ng-container", 7),
                  t.YNc(17, E, 12, 9, "div", 8),
                  t.qZA()()(),
                  t.TgZ(18, "div", 9)(19, "nz-card", 4),
                  t.YNc(20, o, 5, 0, "ng-template", null, 11, t.W1O),
                  t.TgZ(22, "div", 6),
                  t.YNc(23, M, 6, 0, "ng-container", 7),
                  t.YNc(24, K, 14, 11, "div", 8),
                  t.qZA()()()()),
                2 & xt)
              ) {
                const Dt = t.MAs(7),
                  Rt = t.MAs(14),
                  Ht = t.MAs(21);
                t.Q6J("nzGutter", 16),
                  t.xp6(1),
                  t.Q6J("nzSpan", 12),
                  t.xp6(1),
                  t.Q6J("nzLoading", _t.loading),
                  t.xp6(1),
                  t.Q6J("ngIf", null == _t.model ? null : _t.model.stats),
                  t.xp6(1),
                  t.Q6J("nzSpan", 12),
                  t.xp6(1),
                  t.Q6J("nzTitle", Dt),
                  t.xp6(4),
                  t.Q6J("ngIf", _t.isStatusChartEmpty),
                  t.xp6(1),
                  t.Q6J("ngIf", !_t.loading && !_t.isStatusChartEmpty),
                  t.xp6(1),
                  t.Q6J("nzSpan", 12),
                  t.xp6(1),
                  t.Q6J("nzTitle", Rt),
                  t.xp6(4),
                  t.Q6J("ngIf", _t.isPriorityChartEmpty),
                  t.xp6(1),
                  t.Q6J("ngIf", !_t.loading && !_t.isPriorityChartEmpty),
                  t.xp6(1),
                  t.Q6J("nzSpan", 12),
                  t.xp6(1),
                  t.Q6J("nzTitle", Ht),
                  t.xp6(4),
                  t.Q6J("ngIf", _t.isDueDateChartEmpty),
                  t.xp6(1),
                  t.Q6J("ngIf", !_t.loading && !_t.isDueDateChartEmpty);
              }
            },
            dependencies: [tt.O5, nt.w, N.Ls, S.x7, l.bd, h.t3, h.SK, C.jh],
            styles: [
              ".stat-icon[_ngcontent-%COMP%]{font-size:24px!important}.chart[_ngcontent-%COMP%]{width:215px;max-width:215px}.chart-details[_ngcontent-%COMP%]{display:flex;align-items:center;height:220px;max-height:220px;overflow-y:auto}.chart-label[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.no-data-img-holder[_ngcontent-%COMP%]{width:65px}",
            ],
            changeDetection: 0,
          })),
          Ot
        );
      })();
      var L = U(60095),
        n = U(20824),
        z = U(48128),
        b = U(24139),
        D = U(13740),
        J = U(9172);
      function r(ft, Ot) {
        1 & ft && t._UZ(0, "span", 10);
      }
      function f(ft, Ot) {
        if (1 & ft) {
          const mt = t.EpF();
          t.TgZ(0, "tr", 11),
            t.NdJ("click", function () {
              const Dt = t.CHM(mt).$implicit,
                Rt = t.oxw();
              return t.KtG(Rt.openMember(Dt));
            }),
            t.TgZ(1, "td", 12),
            t._uU(2),
            t.qZA(),
            t.TgZ(3, "td", 13),
            t._uU(4),
            t.qZA(),
            t.TgZ(5, "td", 13),
            t._uU(6),
            t.qZA(),
            t.TgZ(7, "td", 13),
            t._uU(8),
            t.qZA(),
            t.TgZ(9, "td", 13),
            t._uU(10),
            t.qZA(),
            t.TgZ(11, "td", 14),
            t._UZ(12, "nz-progress", 15),
            t.qZA(),
            t.TgZ(13, "td", 14),
            t._UZ(14, "nz-progress", 15),
            t.qZA(),
            t.TgZ(15, "td", 13),
            t._uU(16),
            t.qZA()();
        }
        if (2 & ft) {
          const mt = Ot.$implicit;
          t.xp6(2),
            t.Oqu(mt.name),
            t.xp6(2),
            t.Oqu(mt.tasks_count),
            t.xp6(2),
            t.Oqu(mt.completed),
            t.xp6(2),
            t.Oqu(mt.incompleted),
            t.xp6(2),
            t.Oqu(mt.overdue),
            t.xp6(2),
            t.Q6J("nzPercent", mt.contribution),
            t.xp6(2),
            t.Q6J("nzPercent", mt.progress),
            t.xp6(2),
            t.hij(" ", mt.time_logged, " ");
        }
      }
      const _ = function () {
        return { x: "200px" };
      };
      let B = (() => {
        var ft;
        class Ot {
          constructor(xt, _t) {
            (this.cdr = xt),
              (this.api = _t),
              (this.projectId = null),
              (this.selectMember = new t.vpe()),
              (this.loading = !1),
              (this.members = []);
          }
          ngOnInit() {
            this.get();
          }
          trackBy(xt, _t) {
            return _t.id;
          }
          get() {
            var xt = this;
            return (0, Mt.Z)(function* () {
              if (xt.projectId) {
                try {
                  xt.loading = !0;
                  const _t = yield xt.api.getProjectMembers(xt.projectId);
                  _t.done && (xt.members = _t.body), (xt.loading = !1);
                } catch {
                  xt.loading = !1;
                }
                xt.cdr.markForCheck();
              }
            })();
          }
          openMember(xt) {
            xt && this.selectMember.emit(xt);
          }
        }
        return (
          ((ft = Ot).ɵfac = function (xt) {
            return new (xt || ft)(t.Y36(t.sBO), t.Y36(A.U));
          }),
          (ft.ɵcmp = t.Xpm({
            type: ft,
            selectors: [["worklenz-rpt-project-drawer-members"]],
            inputs: { projectId: "projectId" },
            outputs: { selectMember: "selectMember" },
            decls: 28,
            vars: 23,
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
              [
                3,
                "nzSize",
                "nzData",
                "nzShowPagination",
                "nzHideOnSinglePage",
                "nzScroll",
              ],
              ["membersTable", ""],
              ["nzLeft", "", 3, "nzWidth"],
              [1, "text-center", 3, "nzWidth"],
              [3, "nzWidth"],
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
              ["nz-icon", "", "nzType", "search"],
              [1, "cursor-pointer", 3, "click"],
              ["nzLeft", ""],
              [1, "text-center"],
              [1, "px-3"],
              ["nzSize", "small", 3, "nzPercent"],
            ],
            template: function (xt, _t) {
              if (
                (1 & xt &&
                  (t.TgZ(0, "nz-skeleton", 0)(1, "nz-input-group", 1)(
                    2,
                    "input",
                    2
                  ),
                  t.NdJ("ngModelChange", function (Rt) {
                    return (_t.searchText = Rt);
                  }),
                  t.qZA()(),
                  t.YNc(3, r, 1, 0, "ng-template", null, 3, t.W1O),
                  t.TgZ(5, "nz-table", 4, 5),
                  t.ALo(7, "searchByName"),
                  t.TgZ(8, "thead")(9, "tr")(10, "th", 6),
                  t._uU(11, "Nombre"),
                  t.qZA(),
                  t.TgZ(12, "th", 7),
                  t._uU(13, "Conteo de Tareas"),
                  t.qZA(),
                  t.TgZ(14, "th", 7),
                  t._uU(15, "Tareas Completadas"),
                  t.qZA(),
                  t.TgZ(16, "th", 7),
                  t._uU(17, "Tareas Incompletas"),
                  t.qZA(),
                  t.TgZ(18, "th", 7),
                  t._uU(19, "Tareas vencidas"),
                  t.qZA(),
                  t.TgZ(20, "th", 8),
                  t._uU(21, "Contribución"),
                  t.qZA(),
                  t.TgZ(22, "th", 8),
                  t._uU(23, "Progreso"),
                  t.qZA(),
                  t.TgZ(24, "th", 7),
                  t._uU(25, "Tiempo Registrado"),
                  t.qZA()()(),
                  t.TgZ(26, "tbody"),
                  t.YNc(27, f, 17, 8, "tr", 9),
                  t.qZA()()()),
                2 & xt)
              ) {
                const Dt = t.MAs(4),
                  Rt = t.MAs(6);
                t.Q6J("nzLoading", _t.loading)("nzActive", !0),
                  t.xp6(1),
                  t.Q6J("nzSuffix", Dt),
                  t.xp6(1),
                  t.Q6J("ngModel", _t.searchText),
                  t.xp6(3),
                  t.Q6J("nzSize", "small")(
                    "nzData",
                    t.xi3(7, 19, _t.members, _t.searchText)
                  )("nzShowPagination", !0)("nzHideOnSinglePage", !0)(
                    "nzScroll",
                    t.DdM(22, _)
                  ),
                  t.xp6(5),
                  t.Q6J("nzWidth", "260px"),
                  t.xp6(2),
                  t.Q6J("nzWidth", "120px"),
                  t.xp6(2),
                  t.Q6J("nzWidth", "120px"),
                  t.xp6(2),
                  t.Q6J("nzWidth", "120px"),
                  t.xp6(2),
                  t.Q6J("nzWidth", "120px"),
                  t.xp6(2),
                  t.Q6J("nzWidth", "180px"),
                  t.xp6(2),
                  t.Q6J("nzWidth", "180px"),
                  t.xp6(2),
                  t.Q6J("nzWidth", "120px"),
                  t.xp6(3),
                  t.Q6J("ngForOf", Rt.data)("ngForTrackBy", _t.trackBy);
              }
            },
            dependencies: [
              tt.sg,
              nt.w,
              N.Ls,
              L.Fj,
              L.JJ,
              L.On,
              n.Zp,
              n.gB,
              n.ke,
              z.M,
              b.ng,
              D.N8,
              D.Uo,
              D._C,
              D.Om,
              D.p0,
              D.$Z,
              D.qn,
              J.g,
            ],
            changeDetection: 0,
          })),
          Ot
        );
      })();
      var W = U(55416),
        R = U(74764),
        V = U(63481),
        q = U(90565),
        it = U(9691),
        lt = U(55695),
        gt = U(8083);
      function w(ft, Ot) {
        1 & ft && t._UZ(0, "span", 10), 2 & ft && t.Q6J("nzType", "search");
      }
      function O(ft, Ot) {
        if ((1 & ft && t._UZ(0, "nz-option", 11), 2 & ft)) {
          const mt = Ot.$implicit;
          t.Q6J("nzValue", mt.value)("nzLabel", mt.label);
        }
      }
      function Q(ft, Ot) {
        1 & ft && (t.TgZ(0, "th", 17), t._uU(1, "Status"), t.qZA()),
          2 & ft && t.Q6J("nzWidth", "120px");
      }
      function G(ft, Ot) {
        1 & ft && (t.TgZ(0, "th", 17), t._uU(1, "Priority"), t.qZA()),
          2 & ft && t.Q6J("nzWidth", "120px");
      }
      function X(ft, Ot) {
        1 & ft && (t.TgZ(0, "th", 17), t._uU(1, "Phase"), t.qZA()),
          2 & ft && t.Q6J("nzWidth", "150px");
      }
      function ct(ft, Ot) {
        1 & ft && (t.TgZ(0, "small", 26), t._UZ(1, "span", 27), t.qZA()),
          2 & ft &&
            (t.Q6J("nzType", "secondary"),
            t.xp6(1),
            t.Q6J("nzType", "double-right")("nzTheme", "outline"));
      }
      function ht(ft, Ot) {
        if (
          (1 & ft && (t.TgZ(0, "td")(1, "nz-tag", 28), t._uU(2), t.qZA()()),
          2 & ft)
        ) {
          const mt = t.oxw().$implicit;
          t.xp6(1),
            t.Q6J("nzColor", mt.status_color),
            t.xp6(1),
            t.Oqu(mt.status_name);
        }
      }
      function Tt(ft, Ot) {
        if (
          (1 & ft && (t.TgZ(0, "td")(1, "nz-tag", 28), t._uU(2), t.qZA()()),
          2 & ft)
        ) {
          const mt = t.oxw().$implicit;
          t.xp6(1),
            t.Q6J("nzColor", mt.priority_color),
            t.xp6(1),
            t.Oqu(mt.priority_name);
        }
      }
      function Ct(ft, Ot) {
        if ((1 & ft && (t.TgZ(0, "nz-tag", 28), t._uU(1), t.qZA()), 2 & ft)) {
          const mt = t.oxw(2).$implicit;
          t.Q6J("nzColor", mt.phase_color), t.xp6(1), t.Oqu(mt.phase_name);
        }
      }
      function yt(ft, Ot) {
        1 & ft && (t.TgZ(0, "span"), t._uU(1, "-"), t.qZA());
      }
      function vt(ft, Ot) {
        if (
          (1 & ft &&
            (t.TgZ(0, "td"),
            t.YNc(1, Ct, 2, 2, "nz-tag", 29),
            t.YNc(2, yt, 2, 0, "span", 24),
            t.qZA()),
          2 & ft)
        ) {
          const mt = t.oxw().$implicit;
          t.xp6(1),
            t.Q6J("ngIf", mt.phase_name),
            t.xp6(1),
            t.Q6J("ngIf", !mt.phase_name);
        }
      }
      function zt(ft, Ot) {
        if (1 & ft) {
          const mt = t.EpF();
          t.TgZ(0, "tr", 21)(1, "td", 22),
            t.NdJ("click", function () {
              const Dt = t.CHM(mt).$implicit,
                Rt = t.oxw(2);
              return t.KtG(Rt.openTask(Dt));
            }),
            t.YNc(2, ct, 2, 3, "small", 23),
            t._uU(3),
            t.qZA(),
            t.YNc(4, ht, 3, 2, "td", 24),
            t.YNc(5, Tt, 3, 2, "td", 24),
            t.YNc(6, vt, 3, 2, "td", 24),
            t.TgZ(7, "td"),
            t._uU(8),
            t.ALo(9, "date"),
            t.qZA(),
            t.TgZ(10, "td"),
            t._uU(11),
            t.ALo(12, "date"),
            t.qZA(),
            t.TgZ(13, "td", 25),
            t._uU(14),
            t.qZA(),
            t.TgZ(15, "td", 25),
            t._uU(16),
            t.qZA(),
            t.TgZ(17, "td", 25),
            t._uU(18),
            t.qZA(),
            t.TgZ(19, "td", 25),
            t._uU(20),
            t.qZA()();
        }
        if (2 & ft) {
          const mt = Ot.$implicit,
            xt = t.oxw(2);
          t.xp6(2),
            t.Q6J("ngIf", mt.parent_task_id),
            t.xp6(1),
            t.hij(" ", mt.name, " "),
            t.xp6(1),
            t.Q6J("ngIf", !xt.isGroupByStatus()),
            t.xp6(1),
            t.Q6J("ngIf", !xt.isGroupByPriority()),
            t.xp6(1),
            t.Q6J("ngIf", !xt.isGroupByPhase()),
            t.xp6(2),
            t.Oqu(t.xi3(9, 11, mt.end_date, "MMM dd,yyyy") || "-"),
            t.xp6(3),
            t.Oqu(t.xi3(12, 14, mt.completed_at, "MMM dd,yyyy") || "-"),
            t.xp6(3),
            t.Oqu(mt.overdue_days || "-"),
            t.xp6(2),
            t.Oqu(mt.total_time_string),
            t.xp6(2),
            t.Oqu(mt.time_spent_string),
            t.xp6(2),
            t.Oqu(mt.overlogged_time_string);
        }
      }
      function Et(ft, Ot) {
        if ((1 & ft && t._UZ(0, "nz-badge", 30), 2 & ft)) {
          const mt = t.oxw().$implicit;
          t.Q6J("nzColor", mt.color_code.slice(0, 7))(
            "nzText",
            mt.name + " (" + mt.tasks.length + ")"
          );
        }
      }
      const Pt = function () {
        return { x: "300px" };
      };
      function kt(ft, Ot) {
        if (
          (1 & ft &&
            (t.TgZ(0, "nz-collapse-panel", 12)(1, "nz-table", 13, 14),
            t.ALo(3, "searchByName"),
            t.TgZ(4, "thead")(5, "tr")(6, "th", 15),
            t._uU(7, "Task"),
            t.qZA(),
            t.YNc(8, Q, 2, 1, "th", 16),
            t.YNc(9, G, 2, 1, "th", 16),
            t.YNc(10, X, 2, 1, "th", 16),
            t.TgZ(11, "th", 17),
            t._uU(12, "Due Date"),
            t.qZA(),
            t.TgZ(13, "th", 17),
            t._uU(14, "Completed On"),
            t.qZA(),
            t.TgZ(15, "th", 18),
            t._uU(16, "Days Overdue"),
            t.qZA(),
            t.TgZ(17, "th", 18),
            t._uU(18, "Estimated Time"),
            t.qZA(),
            t.TgZ(19, "th", 18),
            t._uU(20, "Logged Time"),
            t.qZA(),
            t.TgZ(21, "th", 18),
            t._uU(22, "Overlogged Time"),
            t.qZA()()(),
            t.TgZ(23, "tbody"),
            t.YNc(24, zt, 21, 17, "tr", 19),
            t.qZA()(),
            t.YNc(25, Et, 1, 2, "ng-template", null, 20, t.W1O),
            t.qZA()),
          2 & ft)
        ) {
          const mt = Ot.$implicit,
            xt = t.MAs(2),
            _t = t.MAs(26),
            Dt = t.oxw();
          t.Q6J("nzHeader", _t),
            t.xp6(1),
            t.Q6J("nzSize", "small")(
              "nzData",
              t.xi3(3, 18, mt.tasks, Dt.searchText)
            )("nzShowPagination", !0)("nzHideOnSinglePage", !0)(
              "nzScroll",
              t.DdM(21, Pt)
            ),
            t.xp6(5),
            t.Q6J("nzWidth", "300px"),
            t.xp6(2),
            t.Q6J("ngIf", !Dt.isGroupByStatus()),
            t.xp6(1),
            t.Q6J("ngIf", !Dt.isGroupByPriority()),
            t.xp6(1),
            t.Q6J("ngIf", !Dt.isGroupByPhase()),
            t.xp6(1),
            t.Q6J("nzWidth", "120px"),
            t.xp6(2),
            t.Q6J("nzWidth", "120px"),
            t.xp6(2),
            t.Q6J("nzWidth", "120px"),
            t.xp6(2),
            t.Q6J("nzWidth", "120px"),
            t.xp6(2),
            t.Q6J("nzWidth", "120px"),
            t.xp6(2),
            t.Q6J("nzWidth", "180px"),
            t.xp6(3),
            t.Q6J("ngForOf", xt.data)("ngForTrackBy", Dt.trackByTask);
        }
      }
      let It = (() => {
          var ft;
          class Ot {
            get groupByOptions() {
              return this.list.GROUP_BY_OPTIONS;
            }
            constructor(xt, _t, Dt, Rt, Ht, Yt, Kt) {
              (this.cdr = xt),
                (this.api = _t),
                (this.list = Dt),
                (this.drawer = Rt),
                (this.view = Ht),
                (this.timerService = Yt),
                (this.socket = Kt),
                (this.projectId = null),
                (this.loading = !1),
                (this.groups = []),
                (this.groupBy = this.list.GROUP_BY_STATUS_VALUE),
                (this.refreshList = (Qt) => {
                  this.get(!1);
                }),
                this.view.onRefresh.pipe((0, at.sL)()).subscribe(() => {
                  this.get(!1);
                }),
                this.timerService.onSubmitOrUpdate
                  .pipe((0, at.sL)())
                  .subscribe(() => {
                    this.get(!1);
                  });
            }
            ngOnInit() {
              this.get(),
                this.socket.on(
                  u.C.TASK_STATUS_CHANGE.toString(),
                  this.refreshList
                ),
                this.socket.on(
                  u.C.TASK_PRIORITY_CHANGE.toString(),
                  this.refreshList
                ),
                this.socket.on(
                  u.C.TASK_NAME_CHANGE.toString(),
                  this.refreshList
                ),
                this.socket.on(
                  u.C.TASK_END_DATE_CHANGE.toString(),
                  this.refreshList
                ),
                this.socket.on(
                  u.C.TASK_START_DATE_CHANGE.toString(),
                  this.refreshList
                ),
                this.socket.on(
                  u.C.TASK_TIME_ESTIMATION_CHANGE.toString(),
                  this.refreshList
                ),
                this.socket.on(
                  u.C.TASK_TIMER_STOP.toString(),
                  this.refreshList
                ),
                this.socket.on(
                  u.C.TASK_PHASE_CHANGE.toString(),
                  this.refreshList
                );
            }
            ngOnDestroy() {
              this.socket.removeListener(
                u.C.TASK_STATUS_CHANGE.toString(),
                this.refreshList
              ),
                this.socket.removeListener(
                  u.C.TASK_PRIORITY_CHANGE.toString(),
                  this.refreshList
                ),
                this.socket.removeListener(
                  u.C.TASK_NAME_CHANGE.toString(),
                  this.refreshList
                ),
                this.socket.removeListener(
                  u.C.TASK_END_DATE_CHANGE.toString(),
                  this.refreshList
                ),
                this.socket.removeListener(
                  u.C.TASK_START_DATE_CHANGE.toString(),
                  this.refreshList
                ),
                this.socket.removeListener(
                  u.C.TASK_TIME_ESTIMATION_CHANGE.toString(),
                  this.refreshList
                ),
                this.socket.removeListener(
                  u.C.TASK_TIMER_STOP.toString(),
                  this.refreshList
                ),
                this.socket.removeListener(
                  u.C.TASK_PHASE_CHANGE.toString(),
                  this.refreshList
                );
            }
            trackByGroup(xt, _t) {
              return _t.id;
            }
            trackByTask(xt, _t) {
              return _t.id;
            }
            get(xt = !0) {
              var _t = this;
              return (0, Mt.Z)(function* () {
                if (_t.projectId) {
                  try {
                    _t.loading = xt;
                    const Dt = yield _t.api.getTasks(_t.projectId, _t.groupBy);
                    Dt.done && (_t.groups = Dt.body), (_t.loading = !1);
                  } catch {
                    _t.loading = !1;
                  }
                  _t.cdr.markForCheck();
                }
              })();
            }
            isGroupByStatus() {
              return this.groupBy === this.list.GROUP_BY_STATUS_VALUE;
            }
            isGroupByPriority() {
              return this.groupBy === this.list.GROUP_BY_PRIORITY_VALUE;
            }
            isGroupByPhase() {
              return this.groupBy === this.list.GROUP_BY_PHASE_VALUE;
            }
            openTask(xt) {
              xt.id &&
                this.projectId &&
                this.drawer.openTask({
                  taskId: xt.id,
                  projectId: this.projectId,
                });
            }
            onGroupByChange() {
              this.get();
            }
          }
          return (
            ((ft = Ot).ɵfac = function (xt) {
              return new (xt || ft)(
                t.Y36(t.sBO),
                t.Y36(A.U),
                t.Y36(W.b),
                t.Y36(F.b),
                t.Y36(R.f),
                t.Y36(V.d),
                t.Y36(T.s)
              );
            }),
            (ft.ɵcmp = t.Xpm({
              type: ft,
              selectors: [["worklenz-rpt-grouped-task-list"]],
              inputs: { projectId: "projectId" },
              decls: 14,
              vars: 8,
              consts: [
                [1, "d-flex", "justify-content-between"],
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
                [1, "d-flex", "align-items-center"],
                [3, "ngModel", "ngModelChange"],
                [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"],
                [1, "d-block", 3, "nzLoading", "nzActive"],
                ["nzGhost", ""],
                [3, "nzHeader", 4, "ngFor", "ngForOf", "ngForTrackBy"],
                ["nz-icon", "", 3, "nzType"],
                [3, "nzValue", "nzLabel"],
                [3, "nzHeader"],
                [
                  3,
                  "nzSize",
                  "nzData",
                  "nzShowPagination",
                  "nzHideOnSinglePage",
                  "nzScroll",
                ],
                ["memberTable", ""],
                ["nzLeft", "", 3, "nzWidth"],
                [3, "nzWidth", 4, "ngIf"],
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
                [4, "ngIf"],
                [1, "text-center"],
                ["nz-typography", "", 3, "nzType"],
                ["nz-icon", "", 3, "nzType", "nzTheme"],
                [3, "nzColor"],
                [3, "nzColor", 4, "ngIf"],
                [1, "mt-1", 3, "nzColor", "nzText"],
              ],
              template: function (xt, _t) {
                if (
                  (1 & xt &&
                    (t.TgZ(0, "div", 0)(1, "nz-input-group", 1)(2, "input", 2),
                    t.NdJ("ngModelChange", function (Rt) {
                      return (_t.searchText = Rt);
                    }),
                    t.qZA()(),
                    t.YNc(3, w, 1, 1, "ng-template", null, 3, t.W1O),
                    t.TgZ(5, "nz-form-item", 4)(6, "nz-form-label"),
                    t._uU(7, "Agrupar Por:\xa0"),
                    t.qZA(),
                    t.TgZ(8, "nz-form-control")(9, "nz-select", 5),
                    t.NdJ("ngModelChange", function (Rt) {
                      return (_t.groupBy = Rt);
                    })("ngModelChange", function () {
                      return _t.onGroupByChange();
                    }),
                    t.YNc(10, O, 1, 2, "nz-option", 6),
                    t.qZA()()()(),
                    t.TgZ(11, "nz-skeleton", 7)(12, "nz-collapse", 8),
                    t.YNc(13, kt, 27, 22, "nz-collapse-panel", 9),
                    t.qZA()()),
                  2 & xt)
                ) {
                  const Dt = t.MAs(4);
                  t.xp6(1),
                    t.Q6J("nzSuffix", Dt),
                    t.xp6(1),
                    t.Q6J("ngModel", _t.searchText),
                    t.xp6(7),
                    t.Q6J("ngModel", _t.groupBy),
                    t.xp6(1),
                    t.Q6J("ngForOf", _t.groupByOptions),
                    t.xp6(1),
                    t.Q6J("nzLoading", _t.loading)("nzActive", !0),
                    t.xp6(2),
                    t.Q6J("ngForOf", _t.groups)(
                      "ngForTrackBy",
                      _t.trackByGroup
                    );
                }
              },
              dependencies: [
                tt.sg,
                tt.O5,
                S.x7,
                q.Zv,
                q.yH,
                h.t3,
                h.SK,
                N.Ls,
                n.Zp,
                n.gB,
                n.ke,
                it.Ip,
                it.Vq,
                b.ng,
                D.N8,
                D.Uo,
                D._C,
                D.Om,
                D.p0,
                D.$Z,
                D.qn,
                L.Fj,
                L.JJ,
                L.On,
                lt.j,
                gt.ZU,
                tt.uU,
                J.g,
              ],
              styles: [
                "nz-tag[_ngcontent-%COMP%]{border-radius:30px;color:#000000d9}",
              ],
              changeDetection: 0,
            })),
            Ot
          );
        })(),
        Lt = (() => {
          var ft;
          class Ot {
            constructor() {
              this.projectId = null;
            }
          }
          return (
            ((ft = Ot).ɵfac = function (xt) {
              return new (xt || ft)();
            }),
            (ft.ɵcmp = t.Xpm({
              type: ft,
              selectors: [["worklenz-rpt-project-drawer-tasks"]],
              inputs: { projectId: "projectId" },
              decls: 1,
              vars: 1,
              consts: [[3, "projectId"]],
              template: function (xt, _t) {
                1 & xt && t._UZ(0, "worklenz-rpt-grouped-task-list", 0),
                  2 & xt && t.Q6J("projectId", _t.projectId);
              },
              dependencies: [It],
              changeDetection: 0,
            })),
            Ot
          );
        })();
      function Ut(ft, Ot) {
        if (
          (1 & ft &&
            (t.TgZ(0, "button", 11),
            t._uU(1, " Export "),
            t._UZ(2, "span", 12),
            t.qZA()),
          2 & ft)
        ) {
          t.oxw();
          const mt = t.MAs(9),
            xt = t.oxw();
          t.Q6J("nzType", "primary")("nzDropdownMenu", mt)(
            "nzPlacement",
            "bottomRight"
          )("nzLoading", xt.exporting),
            t.xp6(2),
            t.Q6J("nzType", "down");
        }
      }
      function Wt(ft, Ot) {
        if (1 & ft) {
          const mt = t.EpF();
          t.TgZ(0, "div", 4)(1, "nz-breadcrumb", 5),
            t._UZ(2, "nz-breadcrumb-item"),
            t.TgZ(3, "nz-breadcrumb-item"),
            t._uU(4),
            t.qZA()(),
            t.TgZ(5, "div", 6)(6, "nz-space"),
            t.YNc(7, Ut, 3, 5, "button", 7),
            t.TgZ(8, "nz-dropdown-menu", null, 8)(10, "ul", 9)(11, "li", 10),
            t.NdJ("click", function () {
              t.CHM(mt);
              const _t = t.oxw();
              return t.KtG(_t.exportMembers());
            }),
            t._uU(12, "Miembros"),
            t.qZA(),
            t.TgZ(13, "li", 10),
            t.NdJ("click", function () {
              t.CHM(mt);
              const _t = t.oxw();
              return t.KtG(_t.exportTasks());
            }),
            t._uU(14, "Tareas"),
            t.qZA()()()()()();
        }
        if (2 & ft) {
          const mt = t.oxw();
          t.xp6(4),
            t.hij(" ", null == mt.project ? null : mt.project.name, " ");
        }
      }
      function jt(ft, Ot) {
        if (1 & ft) {
          const mt = t.EpF();
          t.ynx(0),
            t.TgZ(1, "nz-tabset", 14)(2, "nz-tab", 15),
            t.NdJ("nzClick", function () {
              t.CHM(mt);
              const _t = t.MAs(4);
              return t.KtG(_t.get());
            }),
            t._UZ(3, "worklenz-rpt-project-drawer-overview", 16, 17),
            t.qZA(),
            t.TgZ(5, "nz-tab", 18)(
              6,
              "worklenz-rpt-project-drawer-members",
              19
            ),
            t.NdJ("selectMember", function (_t) {
              t.CHM(mt);
              const Dt = t.oxw(2);
              return t.KtG(Dt.onSelectMember(_t));
            }),
            t.qZA()(),
            t.TgZ(7, "nz-tab", 18),
            t._UZ(8, "worklenz-rpt-project-drawer-tasks", 16),
            t.qZA()(),
            t.BQk();
        }
        if (2 & ft) {
          const mt = t.oxw(2);
          t.xp6(1),
            t.Q6J("nzType", "card"),
            t.xp6(1),
            t.Q6J("nzTitle", "Resumen"),
            t.xp6(1),
            t.Q6J("projectId", mt.project.id),
            t.xp6(2),
            t.Q6J("nzTitle", "Miembros"),
            t.xp6(1),
            t.Q6J("projectId", mt.project.id),
            t.xp6(1),
            t.Q6J("nzTitle", "Tasks"),
            t.xp6(1),
            t.Q6J("projectId", mt.project.id);
        }
      }
      function Nt(ft, Ot) {
        if ((1 & ft && t.YNc(0, jt, 9, 7, "ng-container", 13), 2 & ft)) {
          const mt = t.oxw();
          t.Q6J("ngIf", mt.project);
        }
      }
      function Zt(ft, Ot) {
        if ((1 & ft && t._UZ(0, "worklenz-rpt-drawer-title", 20), 2 & ft)) {
          const mt = t.oxw();
          t.Q6J("title", (null == mt.team ? null : mt.team.name) || null)(
            "icon",
            "bank"
          );
        }
      }
      let Jt = (() => {
        var ft;
        class Ot {
          get show() {
            return !!this.project;
          }
          constructor(xt, _t, Dt, Rt) {
            (this.drawer = xt),
              (this.service = _t),
              (this.cdr = Dt),
              (this.exportApi = Rt),
              (this.team = null),
              (this.project = null),
              (this.exporting = !1),
              this.drawer.onOpenProject.pipe((0, at.sL)()).subscribe((Ht) => {
                this.open(Ht);
              });
          }
          close() {
            this.project = null;
          }
          onSelectMember(xt) {
            this.project &&
              this.drawer.openTasks(this.project, {
                id: xt.team_member_id,
                name: xt.name,
              });
          }
          open(xt) {
            (this.team = this.service.getCurrentTeam()),
              (this.project = xt),
              this.cdr.markForCheck();
          }
          exportMembers() {
            var xt = this;
            return (0, Mt.Z)(function* () {
              if (xt.project?.id)
                try {
                  yield xt.exportApi.exportProjectMembers(
                    xt.project.id,
                    xt.project.name,
                    xt.team?.name
                  );
                } catch (_t) {
                  (0, ut.tu)(_t);
                }
            })();
          }
          exportTasks() {
            var xt = this;
            return (0, Mt.Z)(function* () {
              if (xt.project?.id)
                try {
                  yield xt.exportApi.exportProjectTasks(
                    xt.project.id,
                    xt.project.name,
                    xt.team?.name
                  );
                } catch (_t) {
                  (0, ut.tu)(_t);
                }
            })();
          }
        }
        return (
          ((ft = Ot).ɵfac = function (xt) {
            return new (xt || ft)(
              t.Y36(F.b),
              t.Y36(Y.m),
              t.Y36(t.sBO),
              t.Y36(j.O)
            );
          }),
          (ft.ɵcmp = t.Xpm({
            type: ft,
            selectors: [["worklenz-rpt-project-drawer"]],
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
              ["projectDrawerTitle", ""],
              ["projectDrawerContent", ""],
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
              [3, "projectId"],
              ["overview", ""],
              [3, "nzTitle"],
              [3, "projectId", "selectMember"],
              [3, "title", "icon"],
            ],
            template: function (xt, _t) {
              if (
                (1 & xt &&
                  (t.TgZ(0, "nz-drawer", 0),
                  t.NdJ("nzOnClose", function () {
                    return _t.close();
                  }),
                  t.qZA(),
                  t.YNc(1, Wt, 15, 1, "ng-template", null, 1, t.W1O),
                  t.YNc(3, Nt, 1, 1, "ng-template", null, 2, t.W1O),
                  t.YNc(5, Zt, 1, 2, "ng-template", null, 3, t.W1O)),
                2 & xt)
              ) {
                const Dt = t.MAs(2),
                  Rt = t.MAs(4),
                  Ht = t.MAs(6);
                t.Q6J("nzClosable", !0)("nzVisible", _t.show)(
                  "nzPlacement",
                  "right"
                )("nzTitle", Dt)("nzContent", Rt)("nzWidth", 900)(
                  "nzCloseIcon",
                  Ht
                );
              }
            },
            dependencies: [
              tt.O5,
              et.Dg,
              et.MO,
              st.ix,
              nt.w,
              I.dQ,
              H.Vz,
              N.Ls,
              x.NU,
              x.$1,
              y.xH,
              y.xw,
              P.t,
              k.wO,
              k.r9,
              p.cm,
              p.RR,
              p.wA,
              $,
              B,
              Lt,
            ],
            changeDetection: 0,
          })),
          Ot
        );
      })();
    },
    3400: (Bt, wt, U) => {
      U.d(wt, { j: () => S });
      var Mt = U(96814),
        at = U(3626),
        ut = U(42840),
        t = U(43389),
        F = U(62595),
        Y = U(92574),
        j = U(79382),
        tt = U(41958),
        et = U(33640),
        st = U(82962),
        nt = U(10095),
        I = U(60095),
        H = U(20824),
        N = U(48128),
        x = U(24139),
        y = U(13740),
        P = U(90565),
        k = U(9691),
        p = U(63124),
        v = U(47381),
        C = U(62787),
        u = U(73460),
        A = U(47246),
        T = U(65879);
      let S = (() => {
        var l;
        class h {}
        return (
          ((l = h).ɵfac = function (c) {
            return new (c || l)();
          }),
          (l.ɵmod = T.oAB({ type: l })),
          (l.ɵinj = T.cJS({
            imports: [
              Mt.ez,
              at.lt,
              ut.sL,
              t.BL,
              F.PV,
              Y.zf,
              j.we,
              tt.vG,
              et.mS,
              st.vh,
              nt.Jb,
              I.u5,
              H.o7,
              N.W,
              x.H0,
              y.HQ,
              P.cD,
              k.LV,
              p.L,
              v.t,
              C.b1,
              u.ip,
              A.vQ,
            ],
          })),
          h
        );
      })();
    },
    65411: (Bt, wt, U) => {
      U.d(wt, { W: () => tt });
      var Mt = U(15861),
        at = U(71993),
        ut = U(21406),
        t = U(65879),
        F = U(62963),
        Y = U(74764),
        j = U(34071);
      let tt = (() => {
        var et;
        class st {
          get show() {
            return !(!this.projectId || !this.taskId);
          }
          set show(I) {
            I || ((this.projectId = null), (this.taskId = null));
          }
          constructor(I, H, N) {
            var x = this;
            (this.cdr = I),
              (this.drawer = H),
              (this.taskViewService = N),
              (this.projectId = null),
              (this.taskId = null),
              this.drawer.onOpenTask.pipe((0, at.sL)()).subscribe((y) => {
                this.open(y);
              }),
              this.taskViewService.onViewBackFrom
                .pipe((0, at.sL)())
                .subscribe((y) => {
                  this.handleTaskSelectFromView({
                    id: y.parent_task_id,
                    project_id: y.project_id,
                  });
                }),
              this.taskViewService.onDelete.pipe((0, at.sL)()).subscribe(
                (function () {
                  var y = (0, Mt.Z)(function* (P) {
                    P.parent_task_id &&
                      x.handleTaskSelectFromView({
                        id: P.parent_task_id,
                        project_id: x.projectId,
                      });
                  });
                  return function (P) {
                    return y.apply(this, arguments);
                  };
                })()
              );
          }
          handleTaskSelectFromView(I) {
            setTimeout(() => {
              I &&
                I.id &&
                I.project_id &&
                this.open({ taskId: I.id, projectId: I.project_id });
            }, ut.GR),
              this.cdr.detectChanges();
          }
          open(I) {
            (this.taskId = I.taskId),
              (this.projectId = I.projectId),
              this.cdr.markForCheck();
          }
        }
        return (
          ((et = st).ɵfac = function (I) {
            return new (I || et)(t.Y36(t.sBO), t.Y36(F.b), t.Y36(Y.f));
          }),
          (et.ɵcmp = t.Xpm({
            type: et,
            selectors: [["worklenz-rpt-task-view-drawer"]],
            decls: 1,
            vars: 4,
            consts: [
              [
                3,
                "show",
                "selfResetTaskId",
                "projectId",
                "taskId",
                "showChange",
              ],
            ],
            template: function (I, H) {
              1 & I &&
                (t.TgZ(0, "worklenz-task-view", 0),
                t.NdJ("showChange", function (x) {
                  return (H.show = x);
                }),
                t.qZA()),
                2 & I &&
                  t.Q6J("show", H.show)("selfResetTaskId", !0)(
                    "projectId",
                    H.projectId
                  )("taskId", H.taskId);
            },
            dependencies: [j.E],
            changeDetection: 0,
          })),
          st
        );
      })();
    },
    64948: (Bt, wt, U) => {
      U.d(wt, { i: () => t });
      var Mt = U(96814),
        at = U(26501),
        ut = U(65879);
      let t = (() => {
        var F;
        class Y {}
        return (
          ((F = Y).ɵfac = function (tt) {
            return new (tt || F)();
          }),
          (F.ɵmod = ut.oAB({ type: F })),
          (F.ɵinj = ut.cJS({ imports: [Mt.ez, at.z] })),
          Y
        );
      })();
    },
    40914: (Bt, wt, U) => {
      U.d(wt, { W: () => A });
      var Mt = U(15861),
        at = U(71993),
        ut = U(69649),
        t = U(65879),
        F = U(62963),
        Y = U(69342),
        j = U(96814),
        tt = U(43389),
        et = U(62806),
        st = U(3626),
        nt = U(42840),
        I = U(70855),
        H = U(41958),
        N = U(92574),
        x = U(47381),
        y = U(62787);
      function P(T, S) {
        if (1 & T) {
          const l = t.EpF();
          t.TgZ(0, "button", 8),
            t.NdJ("click", function () {
              t.CHM(l);
              const m = t.oxw(2);
              return t.KtG(m.export());
            }),
            t._uU(1, " Export "),
            t.qZA();
        }
        if (2 & T) {
          const l = t.oxw(2);
          t.Q6J("nzType", "primary")("nzPlacement", "bottomRight")(
            "nzLoading",
            l.exporting
          );
        }
      }
      function k(T, S) {
        if (
          (1 & T &&
            (t.TgZ(0, "div", 4)(1, "nz-breadcrumb", 5),
            t._UZ(2, "nz-breadcrumb-item"),
            t.TgZ(3, "nz-breadcrumb-item"),
            t._uU(4),
            t.qZA()(),
            t.TgZ(5, "div", 6)(6, "nz-space"),
            t.YNc(7, P, 2, 3, "button", 7),
            t.qZA()()()),
          2 & T)
        ) {
          const l = t.oxw();
          t.xp6(4), t.hij(" ", null == l.member ? null : l.member.name, " ");
        }
      }
      function p(T, S) {
        if (
          (1 & T &&
            (t.ynx(0), t._UZ(1, "worklenz-rpt-flat-task-list", 10), t.BQk()),
          2 & T)
        ) {
          const l = t.oxw(2);
          t.xp6(1),
            t.Q6J("disableProjectsFilter", !0)("teamMemberId", l.member.id)(
              "projectId",
              l.project.id
            );
        }
      }
      function v(T, S) {
        if ((1 & T && t.YNc(0, p, 2, 3, "ng-container", 9), 2 & T)) {
          const l = t.oxw();
          t.Q6J("ngIf", l.member && l.project);
        }
      }
      function C(T, S) {
        if ((1 & T && t._UZ(0, "worklenz-rpt-drawer-title", 12), 2 & T)) {
          const l = t.oxw(2);
          t.Q6J("title", l.project.name)("icon", "file");
        }
      }
      function u(T, S) {
        if (
          (1 & T && t.YNc(0, C, 1, 2, "worklenz-rpt-drawer-title", 11), 2 & T)
        ) {
          const l = t.oxw();
          t.Q6J("ngIf", l.project);
        }
      }
      let A = (() => {
        var T;
        class S {
          get show() {
            return !(!this.project || !this.member);
          }
          constructor(h, m, c) {
            (this.cdr = h),
              (this.drawer = m),
              (this.exportApiService = c),
              (this.project = null),
              (this.member = null),
              (this.isMultiple = !1),
              (this.exporting = !1),
              this.drawer.onOpenTasks.pipe((0, at.sL)()).subscribe((g) => {
                this.open(g);
              });
          }
          close() {
            (this.project = null), (this.member = null);
          }
          open(h) {
            (this.project = h.project),
              (this.member = h.member),
              this.cdr.markForCheck();
          }
          export() {
            var h = this;
            return (0, Mt.Z)(function* () {
              if (h.member)
                try {
                  h.project
                    ? h.exportApiService.exportFlatTasks(
                        h.member.id,
                        h.member.name,
                        h.project.id,
                        h.project?.name
                      )
                    : h.exportApiService.exportFlatTasks(
                        h.member.id,
                        h.member.name,
                        null,
                        null
                      );
                } catch (m) {
                  (0, ut.tu)(m);
                }
            })();
          }
        }
        return (
          ((T = S).ɵfac = function (h) {
            return new (h || T)(t.Y36(t.sBO), t.Y36(F.b), t.Y36(Y.O));
          }),
          (T.ɵcmp = t.Xpm({
            type: T,
            selectors: [["worklenz-rpt-tasks-drawer"]],
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
              ["memberTasksDrawerContent", ""],
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
                "nzPlacement",
                "nzLoading",
                "click",
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
                "nzPlacement",
                "nzLoading",
                "click",
              ],
              [4, "ngIf"],
              [3, "disableProjectsFilter", "teamMemberId", "projectId"],
              [3, "title", "icon", 4, "ngIf"],
              [3, "title", "icon"],
            ],
            template: function (h, m) {
              if (
                (1 & h &&
                  (t.TgZ(0, "nz-drawer", 0),
                  t.NdJ("nzOnClose", function () {
                    return m.close();
                  }),
                  t.qZA(),
                  t.YNc(1, k, 8, 1, "ng-template", null, 1, t.W1O),
                  t.YNc(3, v, 1, 1, "ng-template", null, 2, t.W1O),
                  t.YNc(5, u, 1, 1, "ng-template", null, 3, t.W1O)),
                2 & h)
              ) {
                const c = t.MAs(2),
                  g = t.MAs(4),
                  i = t.MAs(6);
                t.Q6J("nzClosable", !0)("nzVisible", m.show)(
                  "nzPlacement",
                  "right"
                )("nzTitle", c)("nzContent", g)("nzWidth", 900)(
                  "nzCloseIcon",
                  i
                );
              }
            },
            dependencies: [
              j.O5,
              tt.Vz,
              et.X,
              st.Dg,
              st.MO,
              nt.ix,
              I.w,
              H.dQ,
              N.NU,
              N.$1,
              x.t,
              y.cm,
              y.wA,
            ],
            changeDetection: 0,
          })),
          S
        );
      })();
    },
    92893: (Bt, wt, U) => {
      U.d(wt, { e: () => H });
      var Mt = U(96814),
        at = U(43389),
        ut = U(62595),
        t = U(63124),
        F = U(42528),
        Y = U(3626),
        j = U(42840),
        tt = U(92574),
        et = U(41958),
        st = U(47381),
        nt = U(62787),
        I = U(65879);
      let H = (() => {
        var N;
        class x {}
        return (
          ((N = x).ɵfac = function (P) {
            return new (P || N)();
          }),
          (N.ɵmod = I.oAB({ type: N })),
          (N.ɵinj = I.cJS({
            imports: [
              Mt.ez,
              at.BL,
              ut.PV,
              t.L,
              F.r,
              Y.lt,
              j.sL,
              tt.zf,
              et.vG,
              st.t,
              nt.b1,
            ],
          })),
          x
        );
      })();
    },
    92259: (Bt, wt, U) => {
      U.d(wt, { D: () => ue });
      var Mt = U(15861),
        at = U(71993),
        ut = U(69649),
        t = U(65879),
        F = U(62963),
        Y = U(42012),
        j = U(69342),
        tt = U(96814),
        et = U(43389),
        st = U(92574),
        nt = U(42840),
        I = U(70855),
        H = U(41958),
        N = U(62595),
        x = U(79382),
        y = U(73460),
        P = U(62787),
        k = U(94489),
        p = U(63392),
        v = U(16196),
        C = U(19350),
        u = U(975),
        A = U(52732),
        T = U(13740),
        S = U(24139),
        l = U(20824),
        h = U(60095),
        m = U(33640),
        c = U(55695),
        g = U(38265),
        i = U(48522),
        e = U(96109),
        s = U(28754),
        a = U(31930),
        d = U(71802),
        E = U(34305),
        o = U(88903);
      function M(ot, At) {
        1 & ot && t._UZ(0, "span", 11);
      }
      function Z(ot, At) {
        1 & ot &&
          (t.TgZ(0, "th", 12), t._uU(1, "Estimated vs Actual"), t.qZA()),
          2 & ot && t.Q6J("nzWidth", "230px");
      }
      function K(ot, At) {
        1 & ot && (t.TgZ(0, "th", 12), t._uU(1, "Tasks Progress"), t.qZA()),
          2 & ot && t.Q6J("nzWidth", "200px");
      }
      function $(ot, At) {
        1 & ot && (t.TgZ(0, "th", 12), t._uU(1, "Last Activity"), t.qZA()),
          2 & ot && t.Q6J("nzWidth", "250px");
      }
      function L(ot, At) {
        1 & ot && (t.TgZ(0, "th", 13), t._uU(1, "Status "), t.qZA()),
          2 & ot &&
            t.Q6J("nzWidth", "150px")("nzSortFn", !0)(
              "nzColumnKey",
              "status_id"
            );
      }
      function n(ot, At) {
        1 & ot && (t.TgZ(0, "th", 12), t._uU(1, "Start/End dates"), t.qZA()),
          2 & ot && t.Q6J("nzWidth", "275px");
      }
      function z(ot, At) {
        1 & ot && (t.TgZ(0, "th", 12), t._uU(1, "Days Left/Overdue"), t.qZA()),
          2 & ot && t.Q6J("nzWidth", "170px");
      }
      function b(ot, At) {
        1 & ot && (t.TgZ(0, "th", 13), t._uU(1, " Project Health "), t.qZA()),
          2 & ot &&
            t.Q6J("nzWidth", "170px")("nzSortFn", !0)(
              "nzColumnKey",
              "project_health"
            );
      }
      function D(ot, At) {
        1 & ot && (t.TgZ(0, "th", 12), t._uU(1, "Category"), t.qZA()),
          2 & ot && t.Q6J("nzWidth", "150px");
      }
      function J(ot, At) {
        1 & ot && (t.TgZ(0, "th", 12), t._uU(1, "Project Update"), t.qZA()),
          2 & ot && t.Q6J("nzWidth", "250px");
      }
      function r(ot, At) {
        1 & ot && (t.TgZ(0, "th", 13), t._uU(1, "Client"), t.qZA()),
          2 & ot &&
            t.Q6J("nzWidth", "160px")("nzSortFn", !0)("nzColumnKey", "client");
      }
      function f(ot, At) {
        1 & ot && (t.TgZ(0, "th", 13), t._uU(1, "Team"), t.qZA()),
          2 & ot &&
            t.Q6J("nzWidth", "150px")("nzSortFn", !0)(
              "nzColumnKey",
              "team_name"
            );
      }
      function _(ot, At) {
        if ((1 & ot && t._UZ(0, "nz-badge", 24), 2 & ot)) {
          const rt = t.oxw().$implicit;
          t.Q6J("nzColor", rt.color_code);
        }
      }
      function B(ot, At) {
        if ((1 & ot && (t.TgZ(0, "span", 25), t._uU(1), t.qZA()), 2 & ot)) {
          const rt = t.oxw().$implicit;
          t.xp6(1), t.Oqu(rt.name);
        }
      }
      function W(ot, At) {
        if (
          (1 & ot && t._UZ(0, "worklenz-estimated-vs-actual-chart-common", 27),
          2 & ot)
        ) {
          const rt = t.oxw(2).$implicit;
          t.Q6J("id", rt.id)("actualTime", rt.actual_time || 0)(
            "estimatedTime",
            60 * rt.estimated_time || 0
          )("actualTimeString", rt.actual_time_string || null)(
            "estimatedTimeString",
            rt.estimated_time_string || null
          );
        }
      }
      function R(ot, At) {
        1 & ot && t._UZ(0, "worklenz-na");
      }
      function V(ot, At) {
        if (
          (1 & ot &&
            (t.TgZ(0, "td"),
            t.YNc(1, W, 1, 5, "worklenz-estimated-vs-actual-chart-common", 26),
            t.YNc(2, R, 1, 0, "worklenz-na", 21),
            t.qZA()),
          2 & ot)
        ) {
          const rt = t.oxw().$implicit;
          t.xp6(1),
            t.Q6J("ngIf", rt.actual_time && rt.estimated_time),
            t.xp6(1),
            t.Q6J("ngIf", !rt.actual_time || !rt.estimated_time);
        }
      }
      function q(ot, At) {
        if ((1 & ot && t._UZ(0, "worklenz-tasks-progress-bar", 29), 2 & ot)) {
          const rt = t.oxw(2).$implicit;
          t.Q6J("todoProgress", rt.tasks_stat.todo)(
            "doingProgress",
            rt.tasks_stat.doing
          )("doneProgress", rt.tasks_stat.done);
        }
      }
      function it(ot, At) {
        if (
          (1 & ot &&
            (t.TgZ(0, "td"),
            t.YNc(1, q, 1, 3, "worklenz-tasks-progress-bar", 28),
            t.qZA()),
          2 & ot)
        ) {
          const rt = t.oxw().$implicit;
          t.oxw();
          const pt = t.MAs(26);
          t.xp6(1),
            t.Q6J(
              "ngIf",
              rt.tasks_stat.todo || rt.tasks_stat.doing || rt.tasks_stat.done
            )("ngIfElse", pt);
        }
      }
      function lt(ot, At) {
        if (
          (1 & ot &&
            (t.ynx(0), t.TgZ(1, "span", 32), t._uU(2), t.qZA(), t.BQk()),
          2 & ot)
        ) {
          const rt = t.oxw(2).$implicit;
          t.xp6(1),
            t.Q6J("nzTooltipTitle", rt.last_activity.last_activity_string),
            t.xp6(1),
            t.hij(" ", rt.last_activity.last_activity_string, ". ");
        }
      }
      function gt(ot, At) {
        1 & ot && t._UZ(0, "worklenz-na");
      }
      function w(ot, At) {
        if (
          (1 & ot &&
            (t.TgZ(0, "td", 30),
            t.YNc(1, lt, 3, 2, "ng-container", 31),
            t.YNc(2, gt, 1, 0, "worklenz-na", 31),
            t.qZA()),
          2 & ot)
        ) {
          const rt = t.oxw().$implicit;
          t.Q6J("ngSwitch", !!rt.last_activity),
            t.xp6(1),
            t.Q6J("ngSwitchCase", !0),
            t.xp6(1),
            t.Q6J("ngSwitchCase", !1);
        }
      }
      function O(ot, At) {
        if (
          (1 & ot &&
            (t.TgZ(0, "td"), t._UZ(1, "worklenz-project-status", 33), t.qZA()),
          2 & ot)
        ) {
          const rt = t.oxw().$implicit,
            pt = t.oxw();
          t.xp6(1), t.Q6J("projStatuses", pt.projectStatuses)("project", rt);
        }
      }
      function Q(ot, At) {
        if (
          (1 & ot &&
            (t.TgZ(0, "td"),
            t._UZ(1, "worklenz-project-start-end-dates", 34),
            t.qZA()),
          2 & ot)
        ) {
          const rt = t.oxw().$implicit;
          t.xp6(1), t.Q6J("project", rt);
        }
      }
      function G(ot, At) {
        if ((1 & ot && (t.TgZ(0, "span", 37), t._uU(1), t.qZA()), 2 & ot)) {
          const rt = t.oxw(3).$implicit;
          t.xp6(1), t.hij("", rt.days_left, " days overdue");
        }
      }
      function X(ot, At) {
        1 & ot && (t.TgZ(0, "span", 39), t._uU(1, "Today"), t.qZA());
      }
      function ct(ot, At) {
        if ((1 & ot && (t.TgZ(0, "span", 39), t._uU(1), t.qZA()), 2 & ot)) {
          const rt = t.oxw(4).$implicit;
          t.xp6(1), t.hij(" ", rt.days_left, " days left");
        }
      }
      function ht(ot, At) {
        if (
          (1 & ot &&
            (t.TgZ(0, "span"),
            t.YNc(1, X, 2, 0, "span", 38),
            t.YNc(2, ct, 2, 1, "span", 38),
            t.qZA()),
          2 & ot)
        ) {
          const rt = t.oxw(3).$implicit;
          t.xp6(1),
            t.Q6J("ngIf", rt.is_today),
            t.xp6(1),
            t.Q6J("ngIf", !rt.is_today);
        }
      }
      function Tt(ot, At) {
        if (
          (1 & ot &&
            (t.ynx(0)(1, 30),
            t.YNc(2, G, 2, 1, "span", 36),
            t.YNc(3, ht, 3, 2, "span", 31),
            t.BQk()()),
          2 & ot)
        ) {
          const rt = t.oxw(2).$implicit;
          t.xp6(1),
            t.Q6J("ngSwitch", rt.is_overdue),
            t.xp6(1),
            t.Q6J("ngSwitchCase", !0),
            t.xp6(1),
            t.Q6J("ngSwitchCase", !1);
        }
      }
      function Ct(ot, At) {
        if (
          (1 & ot &&
            (t.TgZ(0, "td"), t.YNc(1, Tt, 4, 3, "ng-container", 35), t.qZA()),
          2 & ot)
        ) {
          const rt = t.oxw().$implicit;
          t.oxw();
          const pt = t.MAs(26);
          t.xp6(1), t.Q6J("ngIf", null !== rt.days_left)("ngIfElse", pt);
        }
      }
      function yt(ot, At) {
        if (
          (1 & ot &&
            (t.TgZ(0, "td"),
            t._UZ(1, "worklenz-project-health-selector", 40),
            t.qZA()),
          2 & ot)
        ) {
          const rt = t.oxw().$implicit,
            pt = t.oxw();
          t.xp6(1), t.Q6J("project", rt)("projHealths", pt.projHealths);
        }
      }
      function vt(ot, At) {
        if (
          (1 & ot &&
            (t.TgZ(0, "td"),
            t._UZ(1, "worklenz-project-category", 41),
            t.qZA()),
          2 & ot)
        ) {
          const rt = t.oxw().$implicit;
          t.xp6(1), t.Q6J("teamId", rt.team_id)("project", rt);
        }
      }
      function zt(ot, At) {
        if ((1 & ot && (t.ynx(0), t._UZ(1, "span", 44), t.BQk()), 2 & ot)) {
          t.oxw();
          const rt = t.MAs(4),
            pt = t.oxw().$implicit;
          t.xp6(1), t.Q6J("innerHTML", pt.comment, t.oJD)("nzTooltipTitle", rt);
        }
      }
      function Et(ot, At) {
        1 & ot && t._UZ(0, "worklenz-na");
      }
      function Pt(ot, At) {
        if ((1 & ot && t._UZ(0, "span", 45), 2 & ot)) {
          const rt = t.oxw(2).$implicit;
          t.Q6J("innerHTML", rt.comment, t.oJD);
        }
      }
      function kt(ot, At) {
        if (1 & ot) {
          const rt = t.EpF();
          t.TgZ(0, "td", 42),
            t.NdJ("click", function () {
              t.CHM(rt);
              const dt = t.oxw().$implicit,
                St = t.oxw();
              return t.KtG(St.openUpdates(dt));
            }),
            t.YNc(1, zt, 2, 2, "ng-container", 31),
            t.YNc(2, Et, 1, 0, "worklenz-na", 31),
            t.YNc(3, Pt, 1, 1, "ng-template", null, 43, t.W1O),
            t.qZA();
        }
        if (2 & ot) {
          const rt = t.oxw().$implicit;
          t.Q6J("ngSwitch", !!rt.comment),
            t.xp6(1),
            t.Q6J("ngSwitchCase", !0),
            t.xp6(1),
            t.Q6J("ngSwitchCase", !1);
        }
      }
      function It(ot, At) {
        if ((1 & ot && (t.ynx(0), t._uU(1), t.BQk()), 2 & ot)) {
          const rt = t.oxw(2).$implicit;
          t.xp6(1), t.Oqu(rt.client);
        }
      }
      function Lt(ot, At) {
        if (
          (1 & ot &&
            (t.TgZ(0, "td"), t.YNc(1, It, 2, 1, "ng-container", 35), t.qZA()),
          2 & ot)
        ) {
          const rt = t.oxw().$implicit;
          t.oxw();
          const pt = t.MAs(26);
          t.xp6(1), t.Q6J("ngIf", rt.client)("ngIfElse", pt);
        }
      }
      function Ut(ot, At) {
        if (
          (1 & ot && (t.TgZ(0, "td")(1, "nz-tag", 24), t._uU(2), t.qZA()()),
          2 & ot)
        ) {
          const rt = t.oxw().$implicit;
          t.xp6(1),
            t.Q6J("nzColor", "blue"),
            t.xp6(1),
            t.hij(" ", rt.team_name, " ");
        }
      }
      function Wt(ot, At) {
        if (1 & ot) {
          const rt = t.EpF();
          t.TgZ(0, "tr", 14)(1, "td", 15),
            t.NdJ("click", function () {
              const St = t.CHM(rt).$implicit,
                bt = t.oxw();
              return t.KtG(bt.openProject(St));
            }),
            t.TgZ(2, "div", 16)(3, "nz-space"),
            t.YNc(4, _, 1, 1, "nz-badge", 17),
            t.YNc(5, B, 2, 1, "span", 18),
            t.qZA(),
            t.TgZ(6, "button", 19),
            t._uU(7, " Open "),
            t._UZ(8, "span", 20),
            t.qZA()()(),
            t.YNc(9, V, 3, 2, "td", 21),
            t.YNc(10, it, 2, 2, "td", 21),
            t.YNc(11, w, 3, 3, "td", 22),
            t.YNc(12, O, 2, 2, "td", 21),
            t.YNc(13, Q, 2, 1, "td", 21),
            t.YNc(14, Ct, 2, 2, "td", 21),
            t.YNc(15, yt, 2, 2, "td", 21),
            t.YNc(16, vt, 2, 2, "td", 21),
            t.YNc(17, kt, 5, 3, "td", 23),
            t.YNc(18, Lt, 2, 2, "td", 21),
            t.YNc(19, Ut, 3, 2, "td", 21),
            t.qZA();
        }
        if (2 & ot) {
          const rt = t.oxw();
          t.xp6(9),
            t.Q6J("ngIf", rt.estimatedActive),
            t.xp6(1),
            t.Q6J("ngIf", rt.progressActive),
            t.xp6(1),
            t.Q6J("ngIf", rt.lastActivityActive),
            t.xp6(1),
            t.Q6J("ngIf", rt.statusActive),
            t.xp6(1),
            t.Q6J("ngIf", rt.startEndDateActive),
            t.xp6(1),
            t.Q6J("ngIf", rt.daysLeftActive),
            t.xp6(1),
            t.Q6J("ngIf", rt.healthActive),
            t.xp6(1),
            t.Q6J("ngIf", rt.categoryActive),
            t.xp6(1),
            t.Q6J("ngIf", rt.updateActive),
            t.xp6(1),
            t.Q6J("ngIf", rt.clientActive),
            t.xp6(1),
            t.Q6J("ngIf", rt.teamActive);
        }
      }
      function jt(ot, At) {
        1 & ot && t._UZ(0, "worklenz-na");
      }
      const Nt = function () {
        return { x: "300px" };
      };
      let Zt = (() => {
          var ot;
          class At {
            get columnList() {
              if (localStorage.hasOwnProperty(this.PROJECT_LIST_COLUMNS))
                return JSON.parse(
                  localStorage.getItem(this.PROJECT_LIST_COLUMNS) || ""
                );
            }
            get filterIndex() {
              return +(localStorage.getItem(this.FILTER_INDEX_KEY) || 0);
            }
            constructor(pt, dt, St, bt, Gt, Ft) {
              (this.cdr = pt),
                (this.api = dt),
                (this.projectHealthsApi = St),
                (this.socket = bt),
                (this.statusesApi = Gt),
                (this.service = Ft),
                (this.length = new t.vpe()),
                (this.selectProject = new t.vpe()),
                (this.FILTER_INDEX_KEY = "worklenz.projects.filter_index"),
                (this.PROJECT_LIST_COLUMNS =
                  "worklenz.reporting.projects.column_list"),
                (this.loading = !1),
                (this.projects = []),
                (this.projHealths = []),
                (this.projectStatuses = []),
                (this.total = 0),
                (this.pageSize = 10),
                (this.pageIndex = 1),
                (this.paginationSizes = [5, 10, 15, 20, 50, 100]),
                (this.sortField = null),
                (this.sortOrder = null),
                (this.COLUMN_KEYS = {
                  CLIENT: "CLIENT",
                  TEAM: "TEAM",
                  STATUS: "STATUS",
                  CATEGORY: "CATEGORY",
                  START_END_DATE: "START_END_DATE",
                  DAYS_LEFT_OVERDUE: "DAYS_LEFT_OVERDUE",
                  ESTIMATED_VS_ACTUAL: "ESTIMATED_VS_ACTUAL",
                  TASKS_PROGRESS: "TASKS_PROGRESS",
                  LAST_ACTIVITY: "LAST_ACTIVITY",
                  HEALTH: "HEALTH",
                  UPDATE: "UPDATE",
                  PROJECT_MANAGER: "PROJECT_MANAGER",
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
                  { key: "LAST_ACTIVITY", label: "Last Activity", pinned: !0 },
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
                  {
                    key: "PROJECT_MANAGER",
                    label: "Project Manager",
                    pinned: !0,
                  },
                  { key: "CLIENT", label: "Client", pinned: !1 },
                  { key: "TEAM", label: "Team", pinned: !1 },
                ]),
                (this.clientActive = !1),
                (this.managerActive = !1),
                (this.teamActive = !1),
                (this.statusActive = !0),
                (this.categoryActive = !0),
                (this.startEndDateActive = !0),
                (this.daysLeftActive = !0),
                (this.estimatedActive = !0),
                (this.progressActive = !0),
                (this.lastActivityActive = !0),
                (this.healthActive = !0),
                (this.updateActive = !0),
                (this.refreshWithoutLoading = () => {
                  this.getProjects(!1);
                });
            }
            ngOnInit() {
              this.getProjectHealths(),
                this.getProjectStatuses(),
                this.getProjects(),
                this.socket.on(
                  k.C.PROJECT_START_DATE_CHANGE.toString(),
                  this.refreshWithoutLoading
                ),
                this.socket.on(
                  k.C.PROJECT_END_DATE_CHANGE.toString(),
                  this.refreshWithoutLoading
                ),
                this.columnList &&
                  ((this.columns = this.columnList), this.updateState());
            }
            ngOnDestroy() {
              this.projects = [];
            }
            onQueryParamsChange(pt) {
              const { pageSize: dt, pageIndex: St, sort: bt } = pt;
              (this.pageIndex = St), (this.pageSize = dt);
              const Gt = bt.find((Ft) => null !== Ft.value);
              (this.sortField = Gt?.key ?? null),
                (this.sortOrder = Gt?.value ?? null),
                this.getProjects();
            }
            getProjects(pt = !0) {
              var dt = this;
              return (0, Mt.Z)(function* () {
                if (dt.teamId) {
                  try {
                    dt.loading = pt;
                    const St = yield dt.api.getOverviewProjects({
                      team: dt.teamId,
                      index: dt.pageIndex,
                      size: dt.pageSize,
                      field: dt.sortField,
                      order: dt.sortOrder,
                      search: dt.searchText || null,
                      filter: dt.filterIndex.toString(),
                      archived: dt.service.getIncludeToggle(),
                    });
                    St.done &&
                      ((dt.total = St.body.total || 0),
                      (dt.projects = St.body.projects || []),
                      dt.length.emit(dt.total)),
                      (dt.loading = !1);
                  } catch {
                    dt.loading = !1;
                  }
                  dt.cdr.markForCheck();
                }
              })();
            }
            getProjectHealths() {
              var pt = this;
              return (0, Mt.Z)(function* () {
                try {
                  const dt = yield pt.projectHealthsApi.get();
                  dt && (pt.projHealths = dt.body);
                } catch (dt) {
                  (0, ut.tu)(dt);
                }
                pt.cdr.markForCheck();
              })();
            }
            getProjectStatuses() {
              var pt = this;
              return (0, Mt.Z)(function* () {
                try {
                  const dt = yield pt.statusesApi.get();
                  dt.done && (pt.projectStatuses = dt.body);
                } catch (dt) {
                  (0, ut.tu)(dt);
                }
                pt.cdr.markForCheck();
              })();
            }
            trackBy(pt, dt) {
              return dt.id;
            }
            openProject(pt) {
              pt && this.selectProject.emit(pt);
            }
            openUpdates(pt) {
              this.updatesDrawer.open(pt.id);
            }
            updateState() {
              (this.clientActive = this.canActive(this.COLUMN_KEYS.CLIENT)),
                (this.teamActive = this.canActive(this.COLUMN_KEYS.TEAM)),
                (this.categoryActive = this.canActive(
                  this.COLUMN_KEYS.CATEGORY
                )),
                (this.statusActive = this.canActive(this.COLUMN_KEYS.STATUS)),
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
                (this.healthActive = this.canActive(this.COLUMN_KEYS.HEALTH)),
                (this.updateActive = this.canActive(this.COLUMN_KEYS.UPDATE)),
                (this.managerActive = this.canActive(
                  this.COLUMN_KEYS.PROJECT_MANAGER
                )),
                this.cdr.markForCheck(),
                this.setColumnList();
            }
            canActive(pt) {
              return !!this.columns.find((dt) => dt.key === pt)?.pinned;
            }
            setColumnList() {
              localStorage.setItem(
                this.PROJECT_LIST_COLUMNS,
                JSON.stringify(this.columns)
              );
            }
          }
          return (
            ((ot = At).ɵfac = function (pt) {
              return new (pt || ot)(
                t.Y36(t.sBO),
                t.Y36(v.U),
                t.Y36(C.w),
                t.Y36(u.s),
                t.Y36(A.k),
                t.Y36(Y.m)
              );
            }),
            (ot.ɵcmp = t.Xpm({
              type: ot,
              selectors: [["worklenz-rpt-projects-list"]],
              viewQuery: function (pt, dt) {
                if ((1 & pt && t.Gf(p.p, 5), 2 & pt)) {
                  let St;
                  t.iGM((St = t.CRH())) && (dt.updatesDrawer = St.first);
                }
              },
              inputs: { teamId: "teamId", teamMemberId: "teamMemberId" },
              outputs: { length: "length", selectProject: "selectProject" },
              decls: 27,
              vars: 31,
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
                  "11",
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
                [
                  "class",
                  "cursor-pointer",
                  4,
                  "ngFor",
                  "ngForOf",
                  "ngForTrackBy",
                ],
                ["naTemplate", ""],
                ["nz-icon", "", "nzType", "search"],
                ["scope", "col", 3, "nzWidth"],
                ["scope", "col", 3, "nzWidth", "nzSortFn", "nzColumnKey"],
                [1, "cursor-pointer"],
                ["nzLeft", "", 2, "z-index", "11", 3, "click"],
                [1, "position-relative", "w-100"],
                [3, "nzColor", 4, "nzSpaceItem"],
                [
                  "class",
                  "ellipsis",
                  "style",
                  "max-width: 260px",
                  4,
                  "nzSpaceItem",
                ],
                ["nz-button", "", "nzType", "default", 1, "open-btn"],
                ["nz-icon", "", "nzType", "arrows-alt", "nzTheme", "outline"],
                [4, "ngIf"],
                [3, "ngSwitch", 4, "ngIf"],
                [3, "ngSwitch", "click", 4, "ngIf"],
                [3, "nzColor"],
                [1, "ellipsis", 2, "max-width", "260px"],
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
                [3, "ngSwitch"],
                [4, "ngSwitchCase"],
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
              ],
              template: function (pt, dt) {
                if (
                  (1 & pt &&
                    (t.TgZ(0, "nz-skeleton", 0)(1, "nz-input-group", 1)(
                      2,
                      "input",
                      2
                    ),
                    t.NdJ("ngModelChange", function (bt) {
                      return (dt.searchText = bt);
                    })("ngModelChange", function () {
                      return dt.getProjects(!1);
                    }),
                    t.qZA()(),
                    t.YNc(3, M, 1, 0, "ng-template", null, 3, t.W1O),
                    t.TgZ(5, "div")(6, "nz-table", 4, 5),
                    t.NdJ("nzQueryParams", function (bt) {
                      return dt.onQueryParamsChange(bt);
                    }),
                    t.TgZ(8, "thead")(9, "tr")(10, "th", 6),
                    t._uU(11, " Project "),
                    t.qZA(),
                    t.YNc(12, Z, 2, 1, "th", 7),
                    t.YNc(13, K, 2, 1, "th", 7),
                    t.YNc(14, $, 2, 1, "th", 7),
                    t.YNc(15, L, 2, 3, "th", 8),
                    t.YNc(16, n, 2, 1, "th", 7),
                    t.YNc(17, z, 2, 1, "th", 7),
                    t.YNc(18, b, 2, 3, "th", 8),
                    t.YNc(19, D, 2, 1, "th", 7),
                    t.YNc(20, J, 2, 1, "th", 7),
                    t.YNc(21, r, 2, 3, "th", 8),
                    t.YNc(22, f, 2, 3, "th", 8),
                    t.qZA()(),
                    t.TgZ(23, "tbody"),
                    t.YNc(24, Wt, 20, 11, "tr", 9),
                    t.qZA()()()(),
                    t.YNc(25, jt, 1, 0, "ng-template", null, 10, t.W1O)),
                  2 & pt)
                ) {
                  const St = t.MAs(4),
                    bt = t.MAs(7);
                  t.Q6J("nzLoading", dt.loading)("nzActive", !0),
                    t.xp6(1),
                    t.Q6J("nzSuffix", St),
                    t.xp6(1),
                    t.Q6J("ngModel", dt.searchText),
                    t.xp6(4),
                    t.Q6J("nzData", dt.projects)("nzFrontPagination", !1)(
                      "nzLoading",
                      dt.loading
                    )("nzPageIndex", dt.pageIndex)(
                      "nzPageSizeOptions",
                      dt.paginationSizes
                    )("nzPageSize", dt.pageSize)("nzTotal", dt.total)(
                      "nzShowSizeChanger",
                      !0
                    )("nzHideOnSinglePage", !0)("nzScroll", t.DdM(30, Nt)),
                    t.xp6(4),
                    t.Q6J("nzWidth", "300px")("nzSortFn", !0)(
                      "nzColumnKey",
                      "name"
                    ),
                    t.xp6(2),
                    t.Q6J("ngIf", dt.estimatedActive),
                    t.xp6(1),
                    t.Q6J("ngIf", dt.progressActive),
                    t.xp6(1),
                    t.Q6J("ngIf", dt.lastActivityActive),
                    t.xp6(1),
                    t.Q6J("ngIf", dt.statusActive),
                    t.xp6(1),
                    t.Q6J("ngIf", dt.startEndDateActive),
                    t.xp6(1),
                    t.Q6J("ngIf", dt.daysLeftActive),
                    t.xp6(1),
                    t.Q6J("ngIf", dt.healthActive),
                    t.xp6(1),
                    t.Q6J("ngIf", dt.categoryActive),
                    t.xp6(1),
                    t.Q6J("ngIf", dt.updateActive),
                    t.xp6(1),
                    t.Q6J("ngIf", dt.clientActive),
                    t.xp6(1),
                    t.Q6J("ngIf", dt.teamActive),
                    t.xp6(2),
                    t.Q6J("ngForOf", bt.data)("ngForTrackBy", dt.trackBy);
                }
              },
              dependencies: [
                tt.sg,
                tt.O5,
                tt.RF,
                tt.n9,
                N.Ls,
                T.N8,
                T.qD,
                T.Uo,
                T._C,
                T.Om,
                T.p0,
                T.$Z,
                T.qn,
                S.ng,
                l.Zp,
                l.gB,
                l.ke,
                h.Fj,
                h.JJ,
                h.On,
                m.x7,
                nt.ix,
                I.w,
                H.dQ,
                c.j,
                g.u,
                i.a,
                e.SY,
                s.W,
                a.T,
                d.M,
                E.f,
                o.K,
                st.NU,
                st.$1,
              ],
              styles: [
                ".ellipsis[_ngcontent-%COMP%]{max-width:225px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.open-btn[_ngcontent-%COMP%]{position:absolute;right:0;top:0;bottom:0;opacity:0;margin-top:auto;margin-bottom:auto;padding:0 4px;background:#edebf0!important;color:#000000d9;border:none}tr[_ngcontent-%COMP%]:hover   .open-btn[_ngcontent-%COMP%]{opacity:1}",
              ],
              changeDetection: 0,
            })),
            At
          );
        })(),
        Jt = (() => {
          var ot;
          class At {
            constructor() {
              (this.length = new t.vpe()), (this.selectProject = new t.vpe());
            }
          }
          return (
            ((ot = At).ɵfac = function (pt) {
              return new (pt || ot)();
            }),
            (ot.ɵcmp = t.Xpm({
              type: ot,
              selectors: [["worklenz-rpt-team-drawer-projects"]],
              inputs: { teamId: "teamId", teamMemberId: "teamMemberId" },
              outputs: { length: "length", selectProject: "selectProject" },
              decls: 1,
              vars: 2,
              consts: [
                [3, "teamId", "teamMemberId", "selectProject", "length"],
              ],
              template: function (pt, dt) {
                1 & pt &&
                  (t.TgZ(0, "worklenz-rpt-projects-list", 0),
                  t.NdJ("selectProject", function (bt) {
                    return dt.selectProject.emit(bt);
                  })("length", function (bt) {
                    return dt.length.emit(bt);
                  }),
                  t.qZA()),
                  2 & pt &&
                    t.Q6J("teamId", dt.teamId)("teamMemberId", dt.teamMemberId);
              },
              dependencies: [Zt],
              changeDetection: 0,
            })),
            At
          );
        })(),
        ft = (() => {
          var ot;
          class At {
            transform(pt) {
              return pt?.trim() || "-";
            }
          }
          return (
            ((ot = At).ɵfac = function (pt) {
              return new (pt || ot)();
            }),
            (ot.ɵpipe = t.Yjl({
              name: "bindNa",
              type: ot,
              pure: !0,
              standalone: !0,
            })),
            At
          );
        })();
      var Ot = U(9172);
      function mt(ot, At) {
        1 & ot && t._UZ(0, "span", 8);
      }
      function xt(ot, At) {
        if (1 & ot) {
          const rt = t.EpF();
          t.TgZ(0, "tr", 9),
            t.NdJ("click", function () {
              const St = t.CHM(rt).$implicit,
                bt = t.oxw();
              return t.KtG(bt.openMember(St));
            }),
            t.TgZ(1, "td"),
            t._uU(2),
            t.qZA(),
            t.TgZ(3, "td"),
            t._uU(4),
            t.ALo(5, "bindNa"),
            t.qZA(),
            t.TgZ(6, "td", 6),
            t._uU(7),
            t.qZA(),
            t.TgZ(8, "td", 6),
            t._uU(9),
            t.qZA(),
            t.TgZ(10, "td", 6),
            t._uU(11),
            t.qZA(),
            t.TgZ(12, "td", 6),
            t._uU(13),
            t.qZA(),
            t.TgZ(14, "td", 6),
            t._uU(15),
            t.qZA()();
        }
        if (2 & ot) {
          const rt = At.$implicit;
          t.xp6(2),
            t.Oqu(rt.name),
            t.xp6(2),
            t.Oqu(t.lcZ(5, 7, rt.email)),
            t.xp6(3),
            t.Oqu(rt.projects),
            t.xp6(2),
            t.Oqu(rt.tasks),
            t.xp6(2),
            t.Oqu(rt.overdue),
            t.xp6(2),
            t.Oqu(rt.completed),
            t.xp6(2),
            t.Oqu(rt.ongoing);
        }
      }
      let _t = (() => {
        var ot;
        class At {
          constructor(pt, dt, St) {
            (this.cdr = pt),
              (this.api = dt),
              (this.service = St),
              (this.length = new t.vpe()),
              (this.selectMember = new t.vpe()),
              (this.loading = !1),
              (this.members = []);
          }
          ngOnInit() {
            this.getMembers();
          }
          ngOnDestroy() {
            this.members = [];
          }
          getMembers() {
            var pt = this;
            return (0, Mt.Z)(function* () {
              if (pt.teamId) {
                try {
                  pt.loading = !0;
                  const dt = yield pt.api.getOverviewMembersByTeam(
                    pt.teamId,
                    pt.service.getIncludeToggle()
                  );
                  dt.done &&
                    ((pt.members = dt.body), pt.length.emit(pt.members.length)),
                    (pt.loading = !1);
                } catch {
                  pt.loading = !1;
                }
                pt.cdr.markForCheck();
              }
            })();
          }
          trackBy(pt, dt) {
            return dt.id;
          }
          openMember(pt) {
            this.selectMember.emit(pt);
          }
        }
        return (
          ((ot = At).ɵfac = function (pt) {
            return new (pt || ot)(t.Y36(t.sBO), t.Y36(v.U), t.Y36(Y.m));
          }),
          (ot.ɵcmp = t.Xpm({
            type: ot,
            selectors: [["worklenz-rpt-team-drawer-members"]],
            inputs: { teamId: "teamId" },
            outputs: { length: "length", selectMember: "selectMember" },
            decls: 26,
            vars: 13,
            consts: [
              [3, "nzLoading", "nzActive"],
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
              [3, "nzSize", "nzData", "nzShowPagination", "nzHideOnSinglePage"],
              ["membersTable", ""],
              [1, "text-center"],
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
              ["nz-icon", "", "nzType", "search"],
              [1, "cursor-pointer", 3, "click"],
            ],
            template: function (pt, dt) {
              if (
                (1 & pt &&
                  (t.TgZ(0, "nz-skeleton", 0)(1, "nz-input-group", 1)(
                    2,
                    "input",
                    2
                  ),
                  t.NdJ("ngModelChange", function (bt) {
                    return (dt.searchText = bt);
                  }),
                  t.qZA()(),
                  t.YNc(3, mt, 1, 0, "ng-template", null, 3, t.W1O),
                  t.TgZ(5, "nz-table", 4, 5),
                  t.ALo(7, "searchByName"),
                  t.TgZ(8, "thead")(9, "tr")(10, "th"),
                  t._uU(11, "Nombre"),
                  t.qZA(),
                  t.TgZ(12, "th"),
                  t._uU(13, "Correo"),
                  t.qZA(),
                  t.TgZ(14, "th", 6),
                  t._uU(15, "Expedientes"),
                  t.qZA(),
                  t.TgZ(16, "th", 6),
                  t._uU(17, "Tareas"),
                  t.qZA(),
                  t.TgZ(18, "th", 6),
                  t._uU(19, "Tareas vencidas"),
                  t.qZA(),
                  t.TgZ(20, "th", 6),
                  t._uU(21, "Tareas Completadas"),
                  t.qZA(),
                  t.TgZ(22, "th", 6),
                  t._uU(23, "Tareas en curso"),
                  t.qZA()()(),
                  t.TgZ(24, "tbody"),
                  t.YNc(25, xt, 16, 9, "tr", 7),
                  t.qZA()()()),
                2 & pt)
              ) {
                const St = t.MAs(4),
                  bt = t.MAs(6);
                t.Q6J("nzLoading", dt.loading)("nzActive", !0),
                  t.xp6(1),
                  t.Q6J("nzSuffix", St),
                  t.xp6(1),
                  t.Q6J("ngModel", dt.searchText),
                  t.xp6(3),
                  t.Q6J("nzSize", "small")(
                    "nzData",
                    t.xi3(7, 10, dt.members, dt.searchText)
                  )("nzShowPagination", !0)("nzHideOnSinglePage", !0),
                  t.xp6(20),
                  t.Q6J("ngForOf", bt.data)("ngForTrackBy", dt.trackBy);
              }
            },
            dependencies: [
              tt.sg,
              I.w,
              N.Ls,
              S.ng,
              T.N8,
              T.Uo,
              T._C,
              T.Om,
              T.p0,
              T.$Z,
              l.Zp,
              l.gB,
              l.ke,
              h.Fj,
              h.JJ,
              h.On,
              ft,
              Ot.g,
            ],
            changeDetection: 0,
          })),
          At
        );
      })();
      var Dt = U(27128),
        Rt = U(47246),
        Ht = U(82962),
        Yt = U(10095),
        Kt = U(44889);
      function Qt(ot, At) {
        1 & ot &&
          (t.TgZ(0, "div", 10)(1, "div")(2, "h4", 11),
          t._uU(3, "Projects By Status"),
          t.qZA()()());
      }
      function Xt(ot, At) {
        1 & ot &&
          (t.ynx(0),
          t.TgZ(1, "div", 12)(2, "div", 13),
          t._UZ(3, "img", 14),
          t.qZA(),
          t.TgZ(4, "span", 15),
          t._uU(5, "No projects to show."),
          t.qZA()(),
          t.BQk());
      }
      function Vt(ot, At) {
        if (
          (1 & ot && (t.TgZ(0, "div", 22), t._UZ(1, "canvas", 23), t.qZA()),
          2 & ot)
        ) {
          const rt = t.oxw(2);
          t.xp6(1),
            t.Q6J("width", 185)("height", 185)("data", rt.statusChartData)(
              "options",
              rt.chartOptions
            )("legend", !1)("type", "doughnut");
        }
      }
      function $t(ot, At) {
        if (
          (1 & ot &&
            (t.TgZ(0, "div", 16),
            t.YNc(1, Vt, 2, 6, "div", 17),
            t.TgZ(2, "div", 18)(3, "ul", 19)(4, "li", 20),
            t._UZ(5, "nz-badge", 21),
            t.qZA(),
            t.TgZ(6, "li", 20),
            t._UZ(7, "nz-badge", 21),
            t.qZA(),
            t.TgZ(8, "li", 20),
            t._UZ(9, "nz-badge", 21),
            t.qZA(),
            t.TgZ(10, "li", 20),
            t._UZ(11, "nz-badge", 21),
            t.qZA(),
            t.TgZ(12, "li", 20),
            t._UZ(13, "nz-badge", 21),
            t.qZA(),
            t.TgZ(14, "li", 20),
            t._UZ(15, "nz-badge", 21),
            t.qZA(),
            t.TgZ(16, "li", 20),
            t._UZ(17, "nz-badge", 21),
            t.qZA(),
            t.TgZ(18, "li", 20),
            t._UZ(19, "nz-badge", 21),
            t.qZA()()()()),
          2 & ot)
        ) {
          const rt = t.oxw();
          t.xp6(1),
            t.Q6J(
              "ngIf",
              rt.model.by_status && rt.model.by_status.chart.length
            ),
            t.xp6(4),
            t.Q6J("nzColor", "#a9a9a9")(
              "nzText",
              "All (" +
                ((null == rt.model.by_status ? null : rt.model.by_status.all) ||
                  0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#80ca79")(
              "nzText",
              "In Progress (" +
                ((null == rt.model.by_status
                  ? null
                  : rt.model.by_status.in_progress) || 0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#cbc8a1")(
              "nzText",
              "In Planning (" +
                ((null == rt.model.by_status
                  ? null
                  : rt.model.by_status.in_planning) || 0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#80ca79")(
              "nzText",
              "Completed (" +
                ((null == rt.model.by_status
                  ? null
                  : rt.model.by_status.completed) || 0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#cbc8a1")(
              "nzText",
              "Proposed (" +
                ((null == rt.model.by_status
                  ? null
                  : rt.model.by_status.proposed) || 0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#cbc8a1")(
              "nzText",
              "On Hold (" +
                ((null == rt.model.by_status
                  ? null
                  : rt.model.by_status.on_hold) || 0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#cbc8a1")(
              "nzText",
              "Blocked (" +
                ((null == rt.model.by_status
                  ? null
                  : rt.model.by_status.blocked) || 0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#f37070")(
              "nzText",
              "Cancelled (" +
                ((null == rt.model.by_status
                  ? null
                  : rt.model.by_status.cancelled) || 0) +
                ")"
            );
        }
      }
      function qt(ot, At) {
        1 & ot &&
          (t.TgZ(0, "div", 10)(1, "div")(2, "h4", 11),
          t._uU(3, "Projects By Category"),
          t.qZA()()());
      }
      function te(ot, At) {
        1 & ot &&
          (t.ynx(0),
          t.TgZ(1, "div", 12)(2, "div", 13),
          t._UZ(3, "img", 14),
          t.qZA(),
          t.TgZ(4, "span", 15),
          t._uU(5, "No projects to show."),
          t.qZA()(),
          t.BQk());
      }
      function ee(ot, At) {
        if (
          (1 & ot && (t.TgZ(0, "div", 22), t._UZ(1, "canvas", 23), t.qZA()),
          2 & ot)
        ) {
          const rt = t.oxw(2);
          t.xp6(1),
            t.Q6J("width", 185)("height", 185)("data", rt.categoryChartData)(
              "options",
              rt.chartOptions
            )("legend", !1)("type", "doughnut");
        }
      }
      function ie(ot, At) {
        if (
          (1 & ot &&
            (t.TgZ(0, "li", 20),
            t._UZ(1, "nz-badge", 25),
            t.TgZ(2, "span", 26),
            t._uU(3),
            t.ALo(4, "ellipsis"),
            t.qZA()()),
          2 & ot)
        ) {
          const rt = At.$implicit;
          t.xp6(1),
            t.Q6J("nzColor", rt.color),
            t.xp6(2),
            t.Oqu(t.xi3(4, 2, rt.label, 30) + " (" + (rt.count || 0) + ")");
        }
      }
      function se(ot, At) {
        if (
          (1 & ot &&
            (t.TgZ(0, "div", 16),
            t.YNc(1, ee, 2, 6, "div", 17),
            t.TgZ(2, "div", 18)(3, "ul", 19)(4, "li", 20),
            t._UZ(5, "nz-badge", 21),
            t.qZA(),
            t.YNc(6, ie, 5, 5, "li", 24),
            t.qZA()()()),
          2 & ot)
        ) {
          const rt = t.oxw();
          t.xp6(1),
            t.Q6J(
              "ngIf",
              rt.model.by_category && rt.model.by_category.chart.length
            ),
            t.xp6(4),
            t.Q6J("nzColor", "#a9a9a9")(
              "nzText",
              "All (" +
                ((null == rt.model.by_status ? null : rt.model.by_status.all) ||
                  0) +
                ")"
            ),
            t.xp6(1),
            t.Q6J(
              "ngForOf",
              null == rt.model.by_category ? null : rt.model.by_category.data
            );
        }
      }
      function ne(ot, At) {
        1 & ot &&
          (t.TgZ(0, "div", 10)(1, "div")(2, "h4", 11),
          t._uU(3, "Projects By Health"),
          t.qZA()()());
      }
      function oe(ot, At) {
        1 & ot &&
          (t.ynx(0),
          t.TgZ(1, "div", 12)(2, "div", 13),
          t._UZ(3, "img", 14),
          t.qZA(),
          t.TgZ(4, "span", 15),
          t._uU(5, "No projects to show."),
          t.qZA()(),
          t.BQk());
      }
      function re(ot, At) {
        if (
          (1 & ot && (t.TgZ(0, "div", 22), t._UZ(1, "canvas", 23), t.qZA()),
          2 & ot)
        ) {
          const rt = t.oxw(2);
          t.xp6(1),
            t.Q6J("width", 185)("height", 185)("data", rt.healthChartData)(
              "options",
              rt.chartOptions
            )("legend", !1)("type", "doughnut");
        }
      }
      function ae(ot, At) {
        if (
          (1 & ot &&
            (t.TgZ(0, "div", 16),
            t.YNc(1, re, 2, 6, "div", 17),
            t.TgZ(2, "div", 18)(3, "ul", 19)(4, "li", 20),
            t._UZ(5, "nz-badge", 21),
            t.qZA(),
            t.TgZ(6, "li", 20),
            t._UZ(7, "nz-badge", 21),
            t.qZA(),
            t.TgZ(8, "li", 20),
            t._UZ(9, "nz-badge", 21),
            t.qZA(),
            t.TgZ(10, "li", 20),
            t._UZ(11, "nz-badge", 21),
            t.qZA(),
            t.TgZ(12, "li", 20),
            t._UZ(13, "nz-badge", 21),
            t.qZA()()()()),
          2 & ot)
        ) {
          const rt = t.oxw();
          t.xp6(1),
            t.Q6J(
              "ngIf",
              rt.model.by_health && rt.model.by_health.chart.length
            ),
            t.xp6(4),
            t.Q6J("nzColor", "#a9a9a9")(
              "nzText",
              "All (" +
                ((null == rt.model.by_status ? null : rt.model.by_status.all) ||
                  0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#a9a9a9")(
              "nzText",
              "Not Set (" +
                ((null == rt.model.by_health
                  ? null
                  : rt.model.by_health.not_set) || 0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#f37070")(
              "nzText",
              "Needs Attention (" +
                ((null == rt.model.by_health
                  ? null
                  : rt.model.by_health.needs_attention) || 0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#fbc84c")(
              "nzText",
              "At Risk (" +
                ((null == rt.model.by_health
                  ? null
                  : rt.model.by_health.at_risk) || 0) +
                ")"
            ),
            t.xp6(2),
            t.Q6J("nzColor", "#75c997")(
              "nzText",
              "Good (" +
                ((null == rt.model.by_health
                  ? null
                  : rt.model.by_health.good) || 0) +
                ")"
            );
        }
      }
      let le = (() => {
        var ot;
        class At extends Dt.k {
          constructor(pt, dt, St, bt, Gt) {
            super(pt),
              (this.ngZone = pt),
              (this.cdr = dt),
              (this.api = St),
              (this.socket = bt),
              (this.service = Gt),
              (this.model = {}),
              (this.loading = !1),
              (this.isStatusChartEmpty = !1),
              (this.isCategoryChartEmpty = !1),
              (this.isHealthChartEmpty = !1),
              (this.statusColors = []),
              (this.categoryColors = []),
              (this.healthColors = []),
              (this.statusChartData = {
                labels: [],
                datasets: [
                  {
                    label: "Projects",
                    data: [],
                    backgroundColor: this.statusColors,
                    hoverOffset: 2,
                  },
                ],
              }),
              (this.categoryChartData = {
                labels: [],
                datasets: [
                  {
                    label: "Projects",
                    data: [],
                    backgroundColor: this.categoryColors,
                    hoverOffset: 2,
                  },
                ],
              }),
              (this.healthChartData = {
                labels: [],
                datasets: [
                  {
                    label: "Projects",
                    data: [],
                    backgroundColor: this.healthColors,
                    hoverOffset: 2,
                  },
                ],
              }),
              (this.chartOptions = {
                plugins: { datalabels: { display: !1 } },
                responsive: !1,
              }),
              (this.refresh = (Ft) => {
                this.get(), this.cdr.markForCheck();
              });
          }
          ngOnInit() {
            this.get(), this.listenSockets();
          }
          ngOnDestroy() {
            this.socket.removeListener(
              k.C.PROJECT_HEALTH_CHANGE.toString(),
              this.refresh
            ),
              this.socket.removeListener(
                k.C.PROJECT_STATUS_CHANGE.toString(),
                this.refresh
              ),
              this.socket.removeListener(
                k.C.PROJECT_CATEGORY_CHANGE.toString(),
                this.refresh
              );
          }
          listenSockets() {
            this.socket.on(k.C.PROJECT_HEALTH_CHANGE.toString(), this.refresh),
              this.socket.on(
                k.C.PROJECT_STATUS_CHANGE.toString(),
                this.refresh
              ),
              this.socket.on(
                k.C.PROJECT_CATEGORY_CHANGE.toString(),
                this.refresh
              );
          }
          get() {
            var pt = this;
            return (0, Mt.Z)(function* () {
              if (pt.teamId)
                try {
                  (pt.loading = !0), pt.clearCharts();
                  const dt = yield pt.api.getTeamInfo(
                    pt.teamId,
                    pt.service.getIncludeToggle()
                  );
                  dt.done && ((pt.model = dt.body), pt.drawCharts(dt.body)),
                    (pt.loading = !1),
                    pt.cdr.markForCheck();
                } catch {
                  (pt.loading = !1), pt.cdr.markForCheck();
                }
            })();
          }
          drawCharts(pt) {
            if (pt.by_status) {
              for (const dt of pt.by_status.chart)
                this.statusChartData.labels?.push(dt.name),
                  this.statusChartData.datasets[0].data.push(dt.y || 0),
                  this.statusColors.push(dt.color);
              this.statusChart?.update(),
                this.statusChartData.datasets[0].data.every((dt) => 0 === dt) &&
                  (this.isStatusChartEmpty = !0);
            }
            if (pt.by_category) {
              for (const dt of pt.by_category.chart)
                this.categoryChartData.labels?.push(dt.name),
                  this.categoryChartData.datasets[0].data.push(dt.y || 0),
                  this.categoryColors.push(dt.color);
              this.categoryChart?.update(),
                this.categoryChartData.datasets[0].data.every(
                  (dt) => 0 === dt
                ) && (this.isCategoryChartEmpty = !0);
            }
            if (pt.by_health) {
              for (const dt of pt.by_health.chart)
                this.healthChartData.labels?.push(dt.name),
                  this.healthChartData.datasets[0].data.push(dt.y || 0),
                  this.healthColors.push(dt.color);
              this.healthChart?.update(),
                this.healthChartData.datasets[0].data.every((dt) => 0 === dt) &&
                  (this.isHealthChartEmpty = !0);
            }
            this.cdr.markForCheck();
          }
          clearCharts() {
            (this.statusChartData.datasets[0].data = []),
              (this.categoryChartData.datasets[0].data = []),
              (this.healthChartData.datasets[0].data = []),
              (this.statusChartData.labels = []),
              (this.categoryChartData.labels = []),
              (this.healthChartData.labels = []),
              this.cdr.markForCheck();
          }
        }
        return (
          ((ot = At).ɵfac = function (pt) {
            return new (pt || ot)(
              t.Y36(t.R0b),
              t.Y36(t.sBO),
              t.Y36(v.U),
              t.Y36(u.s),
              t.Y36(Y.m)
            );
          }),
          (ot.ɵcmp = t.Xpm({
            type: ot,
            selectors: [["worklenz-rpt-team-overview"]],
            viewQuery: function (pt, dt) {
              if (
                (1 & pt && (t.Gf(Rt.jh, 5), t.Gf(Rt.jh, 5), t.Gf(Rt.jh, 5)),
                2 & pt)
              ) {
                let St;
                t.iGM((St = t.CRH())) && (dt.statusChart = St.first),
                  t.iGM((St = t.CRH())) && (dt.categoryChart = St.first),
                  t.iGM((St = t.CRH())) && (dt.healthChart = St.first);
              }
            },
            inputs: { teamId: "teamId" },
            features: [t.qOj],
            decls: 22,
            vars: 13,
            consts: [
              ["nz-row", "", 3, "nzGutter"],
              ["nz-col", "", 1, "mb-2", 3, "nzSpan"],
              [3, "nzTitle"],
              ["statusCardTitle", ""],
              [1, "card-content"],
              [4, "ngIf"],
              ["class", "d-flex", 4, "ngIf"],
              ["categoryCardTitle", ""],
              ["nz-col", "", 1, "mt-2", "mb-2", 3, "nzSpan"],
              ["duedateCardTitle", ""],
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
              ["class", "mb-1 chart-label", 4, "ngFor", "ngForOf"],
              [3, "nzColor"],
              [2, "font-size", "13px"],
            ],
            template: function (pt, dt) {
              if (
                (1 & pt &&
                  (t.TgZ(0, "div", 0)(1, "div", 1)(2, "nz-card", 2),
                  t.YNc(3, Qt, 4, 0, "ng-template", null, 3, t.W1O),
                  t.TgZ(5, "div", 4),
                  t.YNc(6, Xt, 6, 0, "ng-container", 5),
                  t.YNc(7, $t, 20, 17, "div", 6),
                  t.qZA()()(),
                  t.TgZ(8, "div", 1)(9, "nz-card", 2),
                  t.YNc(10, qt, 4, 0, "ng-template", null, 7, t.W1O),
                  t.TgZ(12, "div", 4),
                  t.YNc(13, te, 6, 0, "ng-container", 5),
                  t.YNc(14, se, 7, 4, "div", 6),
                  t.qZA()()(),
                  t.TgZ(15, "div", 8)(16, "nz-card", 2),
                  t.YNc(17, ne, 4, 0, "ng-template", null, 9, t.W1O),
                  t.TgZ(19, "div", 4),
                  t.YNc(20, oe, 6, 0, "ng-container", 5),
                  t.YNc(21, ae, 14, 11, "div", 6),
                  t.qZA()()()()),
                2 & pt)
              ) {
                const St = t.MAs(4),
                  bt = t.MAs(11),
                  Gt = t.MAs(18);
                t.Q6J("nzGutter", 16),
                  t.xp6(1),
                  t.Q6J("nzSpan", 12),
                  t.xp6(1),
                  t.Q6J("nzTitle", St),
                  t.xp6(4),
                  t.Q6J("ngIf", dt.isStatusChartEmpty),
                  t.xp6(1),
                  t.Q6J("ngIf", !dt.loading && !dt.isStatusChartEmpty),
                  t.xp6(1),
                  t.Q6J("nzSpan", 12),
                  t.xp6(1),
                  t.Q6J("nzTitle", bt),
                  t.xp6(4),
                  t.Q6J("ngIf", dt.isCategoryChartEmpty),
                  t.xp6(1),
                  t.Q6J("ngIf", !dt.loading && !dt.isCategoryChartEmpty),
                  t.xp6(1),
                  t.Q6J("nzSpan", 12),
                  t.xp6(1),
                  t.Q6J("nzTitle", Gt),
                  t.xp6(4),
                  t.Q6J("ngIf", dt.isHealthChartEmpty),
                  t.xp6(1),
                  t.Q6J("ngIf", !dt.loading && !dt.isHealthChartEmpty);
              }
            },
            dependencies: [
              tt.sg,
              tt.O5,
              m.x7,
              Ht.bd,
              Yt.t3,
              Yt.SK,
              Rt.jh,
              Kt.p,
            ],
            styles: [
              ".chart-details[_ngcontent-%COMP%]{height:220px;max-height:220px;overflow-y:auto}.no-data-img-holder[_ngcontent-%COMP%]{width:65px}",
            ],
            changeDetection: 0,
          })),
          At
        );
      })();
      function he(ot, At) {
        if (
          (1 & ot &&
            (t.TgZ(0, "button", 12),
            t._uU(1, " Export "),
            t._UZ(2, "span", 13),
            t.qZA()),
          2 & ot)
        ) {
          t.oxw();
          const rt = t.MAs(8),
            pt = t.oxw();
          t.Q6J("nzType", "primary")("nzDropdownMenu", rt)(
            "nzPlacement",
            "bottomRight"
          )("nzLoading", pt.exporting),
            t.xp6(2),
            t.Q6J("nzType", "down");
        }
      }
      function ce(ot, At) {
        if (1 & ot) {
          const rt = t.EpF();
          t.TgZ(0, "div", 4)(1, "p", 5),
            t._UZ(2, "span", 6),
            t._uU(3),
            t.qZA(),
            t.TgZ(4, "div", 7)(5, "nz-space"),
            t.YNc(6, he, 3, 5, "button", 8),
            t.TgZ(7, "nz-dropdown-menu", null, 9)(9, "ul", 10)(10, "li", 11),
            t.NdJ("click", function () {
              t.CHM(rt);
              const dt = t.oxw();
              return t.KtG(dt.exportProjects());
            }),
            t._uU(11, "Projects"),
            t.qZA(),
            t.TgZ(12, "li", 11),
            t.NdJ("click", function () {
              t.CHM(rt);
              const dt = t.oxw();
              return t.KtG(dt.exportMembers());
            }),
            t._uU(13, "Members"),
            t.qZA()()()()()();
        }
        if (2 & ot) {
          const rt = t.oxw();
          t.xp6(2),
            t.Q6J("nzType", "bank")("nzTheme", "outline"),
            t.xp6(1),
            t.hij(" ", null == rt.team ? null : rt.team.name, " ");
        }
      }
      function de(ot, At) {
        if (1 & ot) {
          const rt = t.EpF();
          t.ynx(0),
            t.TgZ(1, "nz-tabset", 15)(2, "nz-tab", 16),
            t._UZ(3, "worklenz-rpt-team-overview", 17),
            t.qZA(),
            t.TgZ(4, "nz-tab", 16)(5, "worklenz-rpt-team-drawer-projects", 18),
            t.NdJ("length", function (dt) {
              t.CHM(rt);
              const St = t.oxw(2);
              return t.KtG((St.projectsLength = dt));
            })("selectProject", function (dt) {
              t.CHM(rt);
              const St = t.oxw(2);
              return t.KtG(St.openProject(dt));
            }),
            t.qZA()(),
            t.TgZ(6, "nz-tab", 16)(7, "worklenz-rpt-team-drawer-members", 19),
            t.NdJ("length", function (dt) {
              t.CHM(rt);
              const St = t.oxw(2);
              return t.KtG((St.membersLength = dt));
            })("selectMember", function (dt) {
              t.CHM(rt);
              const St = t.oxw(2);
              return t.KtG(St.openMember(dt, null));
            }),
            t.qZA()()(),
            t.BQk();
        }
        if (2 & ot) {
          const rt = t.oxw(2);
          t.xp6(1),
            t.Q6J("nzType", "card"),
            t.xp6(1),
            t.Q6J("nzTitle", "Resumen"),
            t.xp6(1),
            t.Q6J("teamId", rt.team.id),
            t.xp6(1),
            t.Q6J("nzTitle", "Projects (" + rt.projectsLength + ")"),
            t.xp6(1),
            t.Q6J("teamId", rt.team.id),
            t.xp6(1),
            t.Q6J("nzTitle", "Members (" + rt.membersLength + ")"),
            t.xp6(1),
            t.Q6J("teamId", rt.team.id);
        }
      }
      function pe(ot, At) {
        if ((1 & ot && t.YNc(0, de, 8, 7, "ng-container", 14), 2 & ot)) {
          const rt = t.oxw(),
            pt = t.MAs(6);
          t.Q6J("ngIf", rt.team)("ngIfElse", pt);
        }
      }
      function ge(ot, At) {
        1 & ot &&
          (t.TgZ(0, "strong", 20),
          t._uU(1, "Invalid team. Please reload the page and try again."),
          t.qZA());
      }
      let ue = (() => {
        var ot;
        class At {
          get show() {
            return !!this.team;
          }
          constructor(pt, dt, St, bt) {
            (this.drawer = pt),
              (this.service = dt),
              (this.cdr = St),
              (this.exportApi = bt),
              (this.projectsLength = 0),
              (this.membersLength = 0),
              (this.team = null),
              (this.exporting = !1),
              this.drawer.onOpenTeam.pipe((0, at.sL)()).subscribe((Gt) => {
                this.open(Gt);
              });
          }
          close() {
            this.team = null;
          }
          openProject(pt) {
            (this.team = this.service.getCurrentTeam()),
              this.drawer.openProject(pt);
          }
          openMember(pt, dt) {
            this.drawer.openMember(pt, dt);
          }
          open(pt) {
            (this.team = pt), this.cdr.markForCheck();
          }
          exportProjects() {
            var pt = this;
            return (0, Mt.Z)(function* () {
              if (!pt.team) return;
              const dt = pt.team;
              try {
                (pt.exporting = !0),
                  yield pt.exportApi.exportOverviewProjectsByTeam(
                    dt.id,
                    dt.name
                  ),
                  (pt.exporting = !1),
                  pt.cdr.markForCheck();
              } catch (St) {
                (0, ut.tu)(St), (pt.exporting = !1), pt.cdr.markForCheck();
              }
            })();
          }
          exportMembers() {
            var pt = this;
            return (0, Mt.Z)(function* () {
              if (!pt.team) return;
              const dt = pt.team;
              try {
                (pt.exporting = !0),
                  pt.exportApi.exportOverviewMembersByTeam(dt.id, dt.name),
                  (pt.exporting = !1),
                  pt.cdr.markForCheck();
              } catch (St) {
                (0, ut.tu)(St), (pt.exporting = !1), pt.cdr.markForCheck();
              }
            })();
          }
        }
        return (
          ((ot = At).ɵfac = function (pt) {
            return new (pt || ot)(
              t.Y36(F.b),
              t.Y36(Y.m),
              t.Y36(t.sBO),
              t.Y36(j.O)
            );
          }),
          (ot.ɵcmp = t.Xpm({
            type: ot,
            selectors: [["worklenz-rpt-team-drawer"]],
            decls: 7,
            vars: 6,
            consts: [
              [
                3,
                "nzClosable",
                "nzVisible",
                "nzPlacement",
                "nzTitle",
                "nzContent",
                "nzWidth",
                "nzOnClose",
              ],
              ["teamDrawerTitle", ""],
              ["teamDrawerContent", ""],
              ["invalidTeam", ""],
              [1, "d-flex", "align-items-center", "w-100"],
              [1, "mb-0"],
              ["nz-icon", "", 1, "ms-2", 3, "nzType", "nzTheme"],
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
              [4, "ngIf", "ngIfElse"],
              [3, "nzType"],
              [3, "nzTitle"],
              [3, "teamId"],
              [3, "teamId", "length", "selectProject"],
              [3, "teamId", "length", "selectMember"],
              [1, "text-center"],
            ],
            template: function (pt, dt) {
              if (
                (1 & pt &&
                  (t.TgZ(0, "nz-drawer", 0),
                  t.NdJ("nzOnClose", function () {
                    return dt.close();
                  }),
                  t.qZA(),
                  t.YNc(1, ce, 14, 3, "ng-template", null, 1, t.W1O),
                  t.YNc(3, pe, 1, 2, "ng-template", null, 2, t.W1O),
                  t.YNc(5, ge, 2, 0, "ng-template", null, 3, t.W1O)),
                2 & pt)
              ) {
                const St = t.MAs(2),
                  bt = t.MAs(4);
                t.Q6J("nzClosable", !0)("nzVisible", dt.show)(
                  "nzPlacement",
                  "right"
                )("nzTitle", St)("nzContent", bt)("nzWidth", 900);
              }
            },
            dependencies: [
              tt.O5,
              et.Vz,
              st.NU,
              st.$1,
              nt.ix,
              I.w,
              H.dQ,
              N.Ls,
              x.xH,
              x.xw,
              y.wO,
              y.r9,
              P.cm,
              P.RR,
              P.wA,
              Jt,
              _t,
              le,
            ],
            changeDetection: 0,
          })),
          At
        );
      })();
    },
    15484: (Bt, wt, U) => {
      U.d(wt, { C: () => p });
      var Mt = U(96814),
        at = U(43389),
        ut = U(92574),
        t = U(42840),
        F = U(62595),
        Y = U(79382),
        j = U(24139),
        tt = U(13740),
        et = U(20824),
        st = U(60095),
        nt = U(19703),
        I = U(62787),
        H = U(73460),
        N = U(33640),
        x = U(82962),
        y = U(10095),
        P = U(47246),
        k = U(65879);
      let p = (() => {
        var v;
        class C {}
        return (
          ((v = C).ɵfac = function (A) {
            return new (A || v)();
          }),
          (v.ɵmod = k.oAB({ type: v })),
          (v.ɵinj = k.cJS({
            imports: [
              Mt.ez,
              at.BL,
              ut.zf,
              t.sL,
              F.PV,
              Y.we,
              j.H0,
              tt.HQ,
              et.o7,
              st.u5,
              I.b1,
              H.ip,
              nt.B,
              N.mS,
              x.vh,
              y.Jb,
              P.vQ,
            ],
          })),
          C
        );
      })();
    },
    27128: (Bt, wt, U) => {
      U.d(wt, { k: () => t });
      var Mt = U(81845),
        ut = U(65879);
      let t = (() => {
        var F;
        class Y {
          constructor(tt) {
            (this.ngZone = tt), (this.charts = []);
          }
          ngOnDestroy() {
            this.destroyCreatedCharts();
          }
          drawDonutChart(tt, et, st) {
            this.ngZone.runOutsideAngular(() => {
              const I = Mt.chart(et, {
                chart: {
                  plotBackgroundColor: void 0,
                  plotBorderWidth: void 0,
                  plotShadow: !1,
                  type: "pie",
                  width: 215,
                  height: 215,
                },
                credits: { enabled: !1 },
                title: { text: void 0 },
                tooltip: {
                  pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
                },
                accessibility: { point: { valueSuffix: "%" } },
                plotOptions: { pie: { dataLabels: { enabled: !1 } } },
                series: [
                  {
                    name: tt,
                    colorByPoint: !0,
                    innerSize: "60%",
                    type: "pie",
                    data: st,
                  },
                ],
              });
              this.charts.push(I);
            });
          }
          destroyCreatedCharts() {
            if (this.charts.length) for (const tt of this.charts) tt.destroy();
          }
        }
        return (
          ((F = Y).ɵfac = function (tt) {
            return new (tt || F)(ut.Y36(ut.R0b));
          }),
          (F.ɵcmp = ut.Xpm({
            type: F,
            selectors: [["worklenz-rpt-donut-chart"]],
            decls: 2,
            vars: 0,
            template: function (tt, et) {
              1 & tt &&
                (ut.TgZ(0, "p"), ut._uU(1, "rpt-donut-chart works!"), ut.qZA());
            },
            changeDetection: 0,
          })),
          Y
        );
      })();
    },
    81845: function (Bt, wt, U) {
      var Mt, at, ut;
      (at = typeof window < "u" ? window : this),
        (ut = function (at) {
          function ut(F, Y, j, tt) {
            F.hasOwnProperty(Y) ||
              ((F[Y] = tt.apply(null, j)),
              "function" == typeof CustomEvent &&
                at.dispatchEvent(
                  new CustomEvent("HighchartsModuleLoaded", {
                    detail: { path: Y, module: F[Y] },
                  })
                ));
          }
          var t = {};
          return (
            ut(t, "Core/Globals.js", [], function () {
              var F, Y;
              return (
                ((Y = F || (F = {})).SVG_NS = "http://www.w3.org/2000/svg"),
                (Y.product = "Highcharts"),
                (Y.version = "11.1.0"),
                (Y.win = typeof at < "u" ? at : {}),
                (Y.doc = Y.win.document),
                (Y.svg =
                  Y.doc &&
                  Y.doc.createElementNS &&
                  !!Y.doc.createElementNS(Y.SVG_NS, "svg").createSVGRect),
                (Y.userAgent =
                  (Y.win.navigator && Y.win.navigator.userAgent) || ""),
                (Y.isChrome = -1 !== Y.userAgent.indexOf("Chrome")),
                (Y.isFirefox = -1 !== Y.userAgent.indexOf("Firefox")),
                (Y.isMS =
                  /(edge|msie|trident)/i.test(Y.userAgent) && !Y.win.opera),
                (Y.isSafari =
                  !Y.isChrome && -1 !== Y.userAgent.indexOf("Safari")),
                (Y.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(
                  Y.userAgent
                )),
                (Y.isWebKit = -1 !== Y.userAgent.indexOf("AppleWebKit")),
                (Y.deg2rad = (2 * Math.PI) / 360),
                (Y.hasBidiBug =
                  Y.isFirefox &&
                  4 > parseInt(Y.userAgent.split("Firefox/")[1], 10)),
                (Y.hasTouch = !!Y.win.TouchEvent),
                (Y.marginNames = [
                  "plotTop",
                  "marginRight",
                  "marginBottom",
                  "plotLeft",
                ]),
                (Y.noop = function () {}),
                (Y.supportsPassiveEvents = (function () {
                  let j = !1;
                  if (!Y.isMS) {
                    const tt = Object.defineProperty({}, "passive", {
                      get: function () {
                        j = !0;
                      },
                    });
                    Y.win.addEventListener &&
                      Y.win.removeEventListener &&
                      (Y.win.addEventListener("testPassive", Y.noop, tt),
                      Y.win.removeEventListener("testPassive", Y.noop, tt));
                  }
                  return j;
                })()),
                (Y.charts = []),
                (Y.dateFormats = {}),
                (Y.seriesTypes = {}),
                (Y.symbolSizes = {}),
                (Y.chartCount = 0),
                F
              );
            }),
            ut(t, "Core/Utilities.js", [t["Core/Globals.js"]], function (F) {
              function Y(e, s, a, d) {
                const E = s ? "Highcharts error" : "Highcharts warning";
                32 === e && (e = `${E}: Deprecated member`);
                const o = H(e);
                let M = o
                  ? `${E} #${e}: www.highcharts.com/errors/${e}/`
                  : e.toString();
                if (typeof d < "u") {
                  let Z = "";
                  o && (M += "?"),
                    A(d, function (K, $) {
                      (Z += `\n - ${$}: ${K}`),
                        o && (M += encodeURI($) + "=" + encodeURI(K));
                    }),
                    (M += Z);
                }
                S(
                  F,
                  "displayError",
                  { chart: a, code: e, message: M, params: d },
                  function () {
                    if (s) throw Error(M);
                    m.console &&
                      -1 === Y.messages.indexOf(M) &&
                      console.warn(M);
                  }
                ),
                  Y.messages.push(M);
              }
              function j(e, s) {
                return parseInt(e, s || 10);
              }
              function tt(e) {
                return "string" == typeof e;
              }
              function et(e) {
                return (
                  "[object Array]" ===
                    (e = Object.prototype.toString.call(e)) ||
                  "[object Array Iterator]" === e
                );
              }
              function st(e, s) {
                return !(!e || "object" != typeof e || (s && et(e)));
              }
              function nt(e) {
                return st(e) && "number" == typeof e.nodeType;
              }
              function I(e) {
                const s = e && e.constructor;
                return !(
                  !st(e, !0) ||
                  nt(e) ||
                  !s ||
                  !s.name ||
                  "Object" === s.name
                );
              }
              function H(e) {
                return (
                  "number" == typeof e && !isNaN(e) && 1 / 0 > e && -1 / 0 < e
                );
              }
              function N(e) {
                return typeof e < "u" && null !== e;
              }
              function x(e, s, a) {
                const d = tt(s) && !N(a);
                let E;
                const o = (M, Z) => {
                  N(M)
                    ? e.setAttribute(Z, M)
                    : d
                    ? (E = e.getAttribute(Z)) ||
                      "class" !== Z ||
                      (E = e.getAttribute(Z + "Name"))
                    : e.removeAttribute(Z);
                };
                return tt(s) ? o(a, s) : A(s, o), E;
              }
              function y(e) {
                return et(e) ? e : [e];
              }
              function P(e, s) {
                let a;
                for (a in (e || (e = {}), s)) e[a] = s[a];
                return e;
              }
              function k() {
                const e = arguments,
                  s = e.length;
                for (let a = 0; a < s; a++) {
                  const d = e[a];
                  if (typeof d < "u" && null !== d) return d;
                }
              }
              function p(e, s) {
                F.isMS &&
                  !F.svg &&
                  s &&
                  N(s.opacity) &&
                  (s.filter = `alpha(opacity=${100 * s.opacity})`),
                  P(e.style, s);
              }
              function v(e) {
                return Math.pow(10, Math.floor(Math.log(e) / Math.LN10));
              }
              function C(e, s) {
                return 1e14 < e ? e : parseFloat(e.toPrecision(s || 14));
              }
              function A(e, s, a) {
                for (const d in e)
                  Object.hasOwnProperty.call(e, d) &&
                    s.call(a || e[d], e[d], d, e);
              }
              function T(e, s, a) {
                function d(M, Z) {
                  const K = e.removeEventListener;
                  K && K.call(e, M, Z, !1);
                }
                function E(M) {
                  let Z, K;
                  e.nodeName &&
                    (s ? ((Z = {}), (Z[s] = !0)) : (Z = M),
                    A(Z, function ($, L) {
                      if (M[L]) for (K = M[L].length; K--; ) d(L, M[L][K].fn);
                    }));
                }
                var o = ("function" == typeof e && e.prototype) || e;
                if (Object.hasOwnProperty.call(o, "hcEvents")) {
                  const M = o.hcEvents;
                  s
                    ? ((o = M[s] || []),
                      a
                        ? ((M[s] = o.filter(function (Z) {
                            return a !== Z.fn;
                          })),
                          d(s, a))
                        : (E(M), (M[s] = [])))
                    : (E(M), delete o.hcEvents);
                }
              }
              function S(e, s, a, d) {
                if (
                  ((a = a || {}),
                  h.createEvent &&
                    (e.dispatchEvent || (e.fireEvent && e !== F)))
                ) {
                  var E = h.createEvent("Events");
                  E.initEvent(s, !0, !0),
                    (a = P(E, a)),
                    e.dispatchEvent ? e.dispatchEvent(a) : e.fireEvent(s, a);
                } else if (e.hcEvents) {
                  a.target ||
                    P(a, {
                      preventDefault: function () {
                        a.defaultPrevented = !0;
                      },
                      target: e,
                      type: s,
                    }),
                    (E = []);
                  let o = e,
                    M = !1;
                  for (; o.hcEvents; )
                    Object.hasOwnProperty.call(o, "hcEvents") &&
                      o.hcEvents[s] &&
                      (E.length && (M = !0), E.unshift.apply(E, o.hcEvents[s])),
                      (o = Object.getPrototypeOf(o));
                  M && E.sort((Z, K) => Z.order - K.order),
                    E.forEach((Z) => {
                      !1 === Z.fn.call(e, a) && a.preventDefault();
                    });
                }
                d && !a.defaultPrevented && d.call(e, a);
              }
              const { charts: l, doc: h, win: m } = F;
              ((Y || (Y = {})).messages = []),
                (Math.easeInOutSine = function (e) {
                  return -0.5 * (Math.cos(Math.PI * e) - 1);
                });
              var c = Array.prototype.find
                ? function (e, s) {
                    return e.find(s);
                  }
                : function (e, s) {
                    let a;
                    const d = e.length;
                    for (a = 0; a < d; a++) if (s(e[a], a)) return e[a];
                  };
              let g;
              A(
                {
                  map: "map",
                  each: "forEach",
                  grep: "filter",
                  reduce: "reduce",
                  some: "some",
                },
                function (e, s) {
                  F[s] = function (a) {
                    return (
                      Y(32, !1, void 0, {
                        [`Highcharts.${s}`]: `use Array.${e}`,
                      }),
                      Array.prototype[e].apply(a, [].slice.call(arguments, 1))
                    );
                  };
                }
              );
              const i = (function () {
                const e = Math.random().toString(36).substring(2, 9) + "-";
                let s = 0;
                return function () {
                  return "highcharts-" + (g ? "" : e) + s++;
                };
              })();
              return (
                m.jQuery &&
                  (m.jQuery.fn.highcharts = function () {
                    const e = [].slice.call(arguments);
                    if (this[0])
                      return e[0]
                        ? (new F[tt(e[0]) ? e.shift() : "Chart"](
                            this[0],
                            e[0],
                            e[1]
                          ),
                          this)
                        : l[x(this[0], "data-highcharts-chart")];
                  }),
                (c = {
                  addEvent: function (e, s, a, d = {}) {
                    var E = ("function" == typeof e && e.prototype) || e;
                    Object.hasOwnProperty.call(E, "hcEvents") ||
                      (E.hcEvents = {}),
                      (E = E.hcEvents),
                      F.Point &&
                        e instanceof F.Point &&
                        e.series &&
                        e.series.chart &&
                        (e.series.chart.runTrackerClick = !0);
                    const o = e.addEventListener;
                    return (
                      o &&
                        o.call(
                          e,
                          s,
                          a,
                          !!F.supportsPassiveEvents && {
                            passive:
                              void 0 === d.passive
                                ? -1 !== s.indexOf("touch")
                                : d.passive,
                            capture: !1,
                          }
                        ),
                      E[s] || (E[s] = []),
                      E[s].push({
                        fn: a,
                        order: "number" == typeof d.order ? d.order : 1 / 0,
                      }),
                      E[s].sort((M, Z) => M.order - Z.order),
                      function () {
                        T(e, s, a);
                      }
                    );
                  },
                  arrayMax: function (e) {
                    let s = e.length,
                      a = e[0];
                    for (; s--; ) e[s] > a && (a = e[s]);
                    return a;
                  },
                  arrayMin: function (e) {
                    let s = e.length,
                      a = e[0];
                    for (; s--; ) e[s] < a && (a = e[s]);
                    return a;
                  },
                  attr: x,
                  clamp: function (e, s, a) {
                    return e > s ? (e < a ? e : a) : s;
                  },
                  clearTimeout: function (e) {
                    N(e) && clearTimeout(e);
                  },
                  correctFloat: C,
                  createElement: function (e, s, a, d, E) {
                    return (
                      (e = h.createElement(e)),
                      s && P(e, s),
                      E && p(e, { padding: "0", border: "none", margin: "0" }),
                      a && p(e, a),
                      d && d.appendChild(e),
                      e
                    );
                  },
                  css: p,
                  defined: N,
                  destroyObjectProperties: function (e, s) {
                    A(e, function (a, d) {
                      a && a !== s && a.destroy && a.destroy(), delete e[d];
                    });
                  },
                  diffObjects: function (e, s, a, d) {
                    const o = {};
                    return (
                      (function E(M, Z, K, $) {
                        const L = a ? Z : M;
                        A(M, function (n, z) {
                          if (!$ && d && -1 < d.indexOf(z) && Z[z]) {
                            (n = y(n)), (K[z] = []);
                            for (
                              let b = 0;
                              b < Math.max(n.length, Z[z].length);
                              b++
                            )
                              Z[z][b] &&
                                (void 0 === n[b]
                                  ? (K[z][b] = Z[z][b])
                                  : ((K[z][b] = {}),
                                    E(n[b], Z[z][b], K[z][b], $ + 1)));
                          } else st(n, !0) && !n.nodeType ? ((K[z] = et(n) ? [] : {}), E(n, Z[z] || {}, K[z], $ + 1), 0 !== Object.keys(K[z]).length || ("colorAxis" === z && 0 === $) || delete K[z]) : (M[z] !== Z[z] || (z in M && !(z in Z))) && (K[z] = L[z]);
                        });
                      })(e, s, o, 0),
                      o
                    );
                  },
                  discardElement: function (e) {
                    e && e.parentElement && e.parentElement.removeChild(e);
                  },
                  erase: function (e, s) {
                    let a = e.length;
                    for (; a--; )
                      if (e[a] === s) {
                        e.splice(a, 1);
                        break;
                      }
                  },
                  error: Y,
                  extend: P,
                  extendClass: function (e, s) {
                    const a = function () {};
                    return P((a.prototype = new e()), s), a;
                  },
                  find: c,
                  fireEvent: S,
                  getClosestDistance: function (e, s) {
                    const a = !s;
                    let d, E, o, M;
                    return (
                      e.forEach((Z) => {
                        if (1 < Z.length)
                          for (M = E = Z.length - 1; 0 < M; M--)
                            (o = Z[M] - Z[M - 1]),
                              0 > o && !a
                                ? (s?.(), (s = void 0))
                                : o && (typeof d > "u" || o < d) && (d = o);
                      }),
                      d
                    );
                  },
                  getMagnitude: v,
                  getNestedProperty: function (e, s) {
                    for (e = e.split("."); e.length && N(s); ) {
                      const a = e.shift();
                      if (typeof a > "u" || "__proto__" === a) return;
                      if ("this" === a) {
                        let d;
                        return st(s) && (d = s["@this"]), d ?? s;
                      }
                      if (
                        !N((s = s[a])) ||
                        "function" == typeof s ||
                        "number" == typeof s.nodeType ||
                        s === m
                      )
                        return;
                    }
                    return s;
                  },
                  getStyle: function u(e, s, a) {
                    let d;
                    return "width" === s
                      ? ((s = Math.min(e.offsetWidth, e.scrollWidth)),
                        (a =
                          e.getBoundingClientRect &&
                          e.getBoundingClientRect().width) < s &&
                          a >= s - 1 &&
                          (s = Math.floor(a)),
                        Math.max(
                          0,
                          s -
                            (u(e, "padding-left", !0) || 0) -
                            (u(e, "padding-right", !0) || 0)
                        ))
                      : "height" === s
                      ? Math.max(
                          0,
                          Math.min(e.offsetHeight, e.scrollHeight) -
                            (u(e, "padding-top", !0) || 0) -
                            (u(e, "padding-bottom", !0) || 0)
                        )
                      : ((e = m.getComputedStyle(e, void 0)) &&
                          ((d = e.getPropertyValue(s)),
                          k(a, "opacity" !== s) && (d = j(d))),
                        d);
                  },
                  inArray: function (e, s, a) {
                    return (
                      Y(32, !1, void 0, {
                        "Highcharts.inArray": "use Array.indexOf",
                      }),
                      s.indexOf(e, a)
                    );
                  },
                  insertItem: function (e, s) {
                    const a = e.options.index,
                      d = s.length;
                    let E;
                    for (E = e.options.isInternal ? d : 0; E < d + 1; E++)
                      if (
                        !s[E] ||
                        (H(a) && a < k(s[E].options.index, s[E]._i)) ||
                        s[E].options.isInternal
                      ) {
                        s.splice(E, 0, e);
                        break;
                      }
                    return E;
                  },
                  isArray: et,
                  isClass: I,
                  isDOMElement: nt,
                  isFunction: function (e) {
                    return "function" == typeof e;
                  },
                  isNumber: H,
                  isObject: st,
                  isString: tt,
                  keys: function (e) {
                    return (
                      Y(32, !1, void 0, {
                        "Highcharts.keys": "use Object.keys",
                      }),
                      Object.keys(e)
                    );
                  },
                  merge: function () {
                    let e,
                      s = arguments,
                      a = {};
                    const d = function (o, M) {
                      return (
                        "object" != typeof o && (o = {}),
                        A(M, function (Z, K) {
                          "__proto__" !== K &&
                            "constructor" !== K &&
                            (o[K] =
                              !st(Z, !0) || I(Z) || nt(Z)
                                ? M[K]
                                : d(o[K] || {}, Z));
                        }),
                        o
                      );
                    };
                    !0 === s[0] &&
                      ((a = s[1]), (s = Array.prototype.slice.call(s, 2)));
                    const E = s.length;
                    for (e = 0; e < E; e++) a = d(a, s[e]);
                    return a;
                  },
                  normalizeTickInterval: function (e, s, a, d, E) {
                    let o = e;
                    const M = e / (a = k(a, v(e)));
                    for (
                      s ||
                        ((s = E
                          ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]
                          : [1, 2, 2.5, 5, 10]),
                        !1 === d &&
                          (1 === a
                            ? (s = s.filter(function (Z) {
                                return Z % 1 == 0;
                              }))
                            : 0.1 >= a && (s = [1 / a]))),
                        d = 0;
                      d < s.length &&
                      ((o = s[d]),
                      !(
                        (E && o * a >= e) ||
                        (!E && M <= (s[d] + (s[d + 1] || s[d])) / 2)
                      ));
                      d++
                    );
                    return C(o * a, -Math.round(Math.log(0.001) / Math.LN10));
                  },
                  objectEach: A,
                  offset: function (e) {
                    const s = h.documentElement;
                    return {
                      top:
                        (e =
                          e.parentElement || e.parentNode
                            ? e.getBoundingClientRect()
                            : { top: 0, left: 0, width: 0, height: 0 }).top +
                        (m.pageYOffset || s.scrollTop) -
                        (s.clientTop || 0),
                      left:
                        e.left +
                        (m.pageXOffset || s.scrollLeft) -
                        (s.clientLeft || 0),
                      width: e.width,
                      height: e.height,
                    };
                  },
                  pad: function (e, s, a) {
                    return (
                      Array(
                        (s || 2) + 1 - String(e).replace("-", "").length
                      ).join(a || "0") + e
                    );
                  },
                  pick: k,
                  pInt: j,
                  pushUnique: function (e, s) {
                    return 0 > e.indexOf(s) && !!e.push(s);
                  },
                  relativeLength: function (e, s, a) {
                    return /%$/.test(e)
                      ? (s * parseFloat(e)) / 100 + (a || 0)
                      : parseFloat(e);
                  },
                  removeEvent: T,
                  splat: y,
                  stableSort: function (e, s) {
                    const a = e.length;
                    let d, E;
                    for (E = 0; E < a; E++) e[E].safeI = E;
                    for (
                      e.sort(function (o, M) {
                        return (d = s(o, M)), 0 === d ? o.safeI - M.safeI : d;
                      }),
                        E = 0;
                      E < a;
                      E++
                    )
                      delete e[E].safeI;
                  },
                  syncTimeout: function (e, s, a) {
                    return 0 < s ? setTimeout(e, s, a) : (e.call(0, a), -1);
                  },
                  timeUnits: {
                    millisecond: 1,
                    second: 1e3,
                    minute: 6e4,
                    hour: 36e5,
                    day: 864e5,
                    week: 6048e5,
                    month: 24192e5,
                    year: 314496e5,
                  },
                  uniqueKey: i,
                  useSerialIds: function (e) {
                    return (g = k(e, g));
                  },
                  wrap: function (e, s, a) {
                    const d = e[s];
                    e[s] = function () {
                      const E = arguments,
                        o = this;
                      return a.apply(
                        this,
                        [
                          function () {
                            return d.apply(o, arguments.length ? arguments : E);
                          },
                        ].concat([].slice.call(arguments))
                      );
                    };
                  },
                }),
                c
              );
            }),
            ut(t, "Core/Chart/ChartDefaults.js", [], function () {
              return {
                alignThresholds: !1,
                panning: { enabled: !1, type: "x" },
                styledMode: !1,
                borderRadius: 0,
                colorCount: 10,
                allowMutatingData: !0,
                ignoreHiddenSeries: !0,
                spacing: [10, 10, 15, 10],
                resetZoomButton: {
                  theme: { zIndex: 6 },
                  position: { align: "right", x: -10, y: 10 },
                },
                reflow: !0,
                type: "line",
                zooming: {
                  singleTouch: !1,
                  resetButton: {
                    theme: { zIndex: 6 },
                    position: { align: "right", x: -10, y: 10 },
                  },
                },
                width: null,
                height: null,
                borderColor: "#334eff",
                backgroundColor: "#ffffff",
                plotBorderColor: "#cccccc",
              };
            }),
            ut(
              t,
              "Core/Color/Color.js",
              [t["Core/Globals.js"], t["Core/Utilities.js"]],
              function (F, Y) {
                const { isNumber: j, merge: tt, pInt: et } = Y;
                class st {
                  static parse(I) {
                    return I ? new st(I) : st.None;
                  }
                  constructor(I) {
                    (this.rgba = [NaN, NaN, NaN, NaN]), (this.input = I);
                    const H = F.Color;
                    if (H && H !== st) return new H(I);
                    this.init(I);
                  }
                  init(I) {
                    let H, N;
                    if ("object" == typeof I && typeof I.stops < "u")
                      this.stops = I.stops.map((P) => new st(P[1]));
                    else if ("string" == typeof I) {
                      if (
                        ((this.input = I = st.names[I.toLowerCase()] || I),
                        "#" === I.charAt(0))
                      ) {
                        var x = I.length,
                          y = parseInt(I.substr(1), 16);
                        7 === x
                          ? (H = [
                              (16711680 & y) >> 16,
                              (65280 & y) >> 8,
                              255 & y,
                              1,
                            ])
                          : 4 === x &&
                            (H = [
                              ((3840 & y) >> 4) | ((3840 & y) >> 8),
                              ((240 & y) >> 4) | (240 & y),
                              ((15 & y) << 4) | (15 & y),
                              1,
                            ]);
                      }
                      if (!H)
                        for (y = st.parsers.length; y-- && !H; )
                          (N = st.parsers[y]),
                            (x = N.regex.exec(I)) && (H = N.parse(x));
                    }
                    H && (this.rgba = H);
                  }
                  get(I) {
                    const H = this.input,
                      N = this.rgba;
                    if ("object" == typeof H && typeof this.stops < "u") {
                      const x = tt(H);
                      return (
                        (x.stops = [].slice.call(x.stops)),
                        this.stops.forEach((y, P) => {
                          x.stops[P] = [x.stops[P][0], y.get(I)];
                        }),
                        x
                      );
                    }
                    return N && j(N[0])
                      ? "rgb" === I || (!I && 1 === N[3])
                        ? "rgb(" + N[0] + "," + N[1] + "," + N[2] + ")"
                        : "a" === I
                        ? `${N[3]}`
                        : "rgba(" + N.join(",") + ")"
                      : H;
                  }
                  brighten(I) {
                    const H = this.rgba;
                    if (this.stops)
                      this.stops.forEach(function (N) {
                        N.brighten(I);
                      });
                    else if (j(I) && 0 !== I)
                      for (let N = 0; 3 > N; N++)
                        (H[N] += et(255 * I)),
                          0 > H[N] && (H[N] = 0),
                          255 < H[N] && (H[N] = 255);
                    return this;
                  }
                  setOpacity(I) {
                    return (this.rgba[3] = I), this;
                  }
                  tweenTo(I, H) {
                    const N = this.rgba,
                      x = I.rgba;
                    return j(N[0]) && j(x[0])
                      ? ((I = 1 !== x[3] || 1 !== N[3]) ? "rgba(" : "rgb(") +
                          Math.round(x[0] + (N[0] - x[0]) * (1 - H)) +
                          "," +
                          Math.round(x[1] + (N[1] - x[1]) * (1 - H)) +
                          "," +
                          Math.round(x[2] + (N[2] - x[2]) * (1 - H)) +
                          (I ? "," + (x[3] + (N[3] - x[3]) * (1 - H)) : "") +
                          ")"
                      : I.input || "none";
                  }
                }
                return (
                  (st.names = { white: "#ffffff", black: "#000000" }),
                  (st.parsers = [
                    {
                      regex:
                        /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                      parse: function (nt) {
                        return [
                          et(nt[1]),
                          et(nt[2]),
                          et(nt[3]),
                          parseFloat(nt[4], 10),
                        ];
                      },
                    },
                    {
                      regex:
                        /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                      parse: function (nt) {
                        return [et(nt[1]), et(nt[2]), et(nt[3]), 1];
                      },
                    },
                  ]),
                  (st.None = new st("")),
                  st
                );
              }
            ),
            ut(t, "Core/Color/Palettes.js", [], function () {
              return {
                colors:
                  "#2caffe #544fc5 #00e272 #fe6a35 #6b8abc #d568fb #2ee0ca #fa4b42 #feb56a #91e8e1".split(
                    " "
                  ),
              };
            }),
            ut(
              t,
              "Core/Time.js",
              [t["Core/Globals.js"], t["Core/Utilities.js"]],
              function (F, Y) {
                const { win: j } = F,
                  {
                    defined: tt,
                    error: et,
                    extend: st,
                    isObject: nt,
                    merge: I,
                    objectEach: H,
                    pad: N,
                    pick: x,
                    splat: y,
                    timeUnits: P,
                  } = Y,
                  k =
                    F.isSafari &&
                    j.Intl &&
                    j.Intl.DateTimeFormat.prototype.formatRange,
                  p =
                    F.isSafari &&
                    j.Intl &&
                    !j.Intl.DateTimeFormat.prototype.formatRange;
                return class v {
                  constructor(u) {
                    (this.options = {}),
                      (this.variableTimezone = this.useUTC = !1),
                      (this.Date = j.Date),
                      (this.getTimezoneOffset = this.timezoneOffsetFunction()),
                      this.update(u);
                  }
                  get(u, A) {
                    if (this.variableTimezone || this.timezoneOffset) {
                      const T = A.getTime(),
                        S = T - this.getTimezoneOffset(A);
                      return (
                        A.setTime(S), (u = A["getUTC" + u]()), A.setTime(T), u
                      );
                    }
                    return this.useUTC ? A["getUTC" + u]() : A["get" + u]();
                  }
                  set(u, A, T) {
                    if (this.variableTimezone || this.timezoneOffset) {
                      if (
                        "Milliseconds" === u ||
                        "Seconds" === u ||
                        ("Minutes" === u &&
                          this.getTimezoneOffset(A) % 36e5 == 0)
                      )
                        return A["setUTC" + u](T);
                      var S = this.getTimezoneOffset(A);
                      return (
                        (S = A.getTime() - S),
                        A.setTime(S),
                        A["setUTC" + u](T),
                        (u = this.getTimezoneOffset(A)),
                        (S = A.getTime() + u),
                        A.setTime(S)
                      );
                    }
                    return this.useUTC || (k && "FullYear" === u)
                      ? A["setUTC" + u](T)
                      : A["set" + u](T);
                  }
                  update(u = {}) {
                    const A = x(u.useUTC, !0);
                    (this.options = u = I(!0, this.options, u)),
                      (this.Date = u.Date || j.Date || Date),
                      (this.timezoneOffset =
                        ((this.useUTC = A) && u.timezoneOffset) || void 0),
                      (this.getTimezoneOffset = this.timezoneOffsetFunction()),
                      (this.variableTimezone =
                        A && !(!u.getTimezoneOffset && !u.timezone));
                  }
                  makeTime(u, A, T, S, l, h) {
                    let m, c, g;
                    return (
                      this.useUTC
                        ? ((m = this.Date.UTC.apply(0, arguments)),
                          (c = this.getTimezoneOffset(m)),
                          (m += c),
                          (g = this.getTimezoneOffset(m)),
                          c !== g
                            ? (m += g - c)
                            : c - 36e5 !== this.getTimezoneOffset(m - 36e5) ||
                              p ||
                              (m -= 36e5))
                        : (m = new this.Date(
                            u,
                            A,
                            x(T, 1),
                            x(S, 0),
                            x(l, 0),
                            x(h, 0)
                          ).getTime()),
                      m
                    );
                  }
                  timezoneOffsetFunction() {
                    const u = this,
                      A = this.options,
                      T = A.getTimezoneOffset,
                      S = A.moment || j.moment;
                    if (!this.useUTC)
                      return function (l) {
                        return 6e4 * new Date(l.toString()).getTimezoneOffset();
                      };
                    if (A.timezone) {
                      if (S)
                        return function (l) {
                          return 6e4 * -S.tz(l, A.timezone).utcOffset();
                        };
                      et(25);
                    }
                    return this.useUTC && T
                      ? function (l) {
                          return 6e4 * T(l.valueOf());
                        }
                      : function () {
                          return 6e4 * (u.timezoneOffset || 0);
                        };
                  }
                  dateFormat(u, A, T) {
                    if (!tt(A) || isNaN(A))
                      return (
                        (F.defaultOptions.lang &&
                          F.defaultOptions.lang.invalidDate) ||
                        ""
                      );
                    u = x(u, "%Y-%m-%d %H:%M:%S");
                    const S = this;
                    var l = new this.Date(A);
                    const h = this.get("Hours", l),
                      m = this.get("Day", l),
                      c = this.get("Date", l),
                      g = this.get("Month", l),
                      i = this.get("FullYear", l),
                      e = F.defaultOptions.lang,
                      s = e && e.weekdays,
                      a = e && e.shortWeekdays;
                    return (
                      (l = st(
                        {
                          a: a ? a[m] : s[m].substr(0, 3),
                          A: s[m],
                          d: N(c),
                          e: N(c, 2, " "),
                          w: m,
                          b: e.shortMonths[g],
                          B: e.months[g],
                          m: N(g + 1),
                          o: g + 1,
                          y: i.toString().substr(2, 2),
                          Y: i,
                          H: N(h),
                          k: h,
                          I: N(h % 12 || 12),
                          l: h % 12 || 12,
                          M: N(this.get("Minutes", l)),
                          p: 12 > h ? "AM" : "PM",
                          P: 12 > h ? "am" : "pm",
                          S: N(l.getSeconds()),
                          L: N(Math.floor(A % 1e3), 3),
                        },
                        F.dateFormats
                      )),
                      H(l, function (d, E) {
                        for (; -1 !== u.indexOf("%" + E); )
                          u = u.replace(
                            "%" + E,
                            "function" == typeof d ? d.call(S, A) : d
                          );
                      }),
                      T ? u.substr(0, 1).toUpperCase() + u.substr(1) : u
                    );
                  }
                  resolveDTLFormat(u) {
                    return nt(u, !0)
                      ? u
                      : { main: (u = y(u))[0], from: u[1], to: u[2] };
                  }
                  getTimeTicks(u, A, T, S) {
                    const l = this,
                      h = [],
                      m = {};
                    var c = new l.Date(A);
                    const g = u.unitRange,
                      i = u.count || 1;
                    let e;
                    if (((S = x(S, 1)), tt(A))) {
                      if (
                        (l.set(
                          "Milliseconds",
                          c,
                          g >= P.second
                            ? 0
                            : i * Math.floor(l.get("Milliseconds", c) / i)
                        ),
                        g >= P.second &&
                          l.set(
                            "Seconds",
                            c,
                            g >= P.minute
                              ? 0
                              : i * Math.floor(l.get("Seconds", c) / i)
                          ),
                        g >= P.minute &&
                          l.set(
                            "Minutes",
                            c,
                            g >= P.hour
                              ? 0
                              : i * Math.floor(l.get("Minutes", c) / i)
                          ),
                        g >= P.hour &&
                          l.set(
                            "Hours",
                            c,
                            g >= P.day
                              ? 0
                              : i * Math.floor(l.get("Hours", c) / i)
                          ),
                        g >= P.day &&
                          l.set(
                            "Date",
                            c,
                            g >= P.month
                              ? 1
                              : Math.max(
                                  1,
                                  i * Math.floor(l.get("Date", c) / i)
                                )
                          ),
                        g >= P.month)
                      ) {
                        l.set(
                          "Month",
                          c,
                          g >= P.year
                            ? 0
                            : i * Math.floor(l.get("Month", c) / i)
                        );
                        var s = l.get("FullYear", c);
                      }
                      g >= P.year && l.set("FullYear", c, s - (s % i)),
                        g === P.week &&
                          ((s = l.get("Day", c)),
                          l.set(
                            "Date",
                            c,
                            l.get("Date", c) - s + S + (s < S ? -7 : 0)
                          )),
                        (s = l.get("FullYear", c)),
                        (S = l.get("Month", c));
                      const a = l.get("Date", c),
                        d = l.get("Hours", c);
                      for (
                        A = c.getTime(),
                          (!l.variableTimezone && l.useUTC) ||
                            !tt(T) ||
                            (e =
                              T - A > 4 * P.month ||
                              l.getTimezoneOffset(A) !==
                                l.getTimezoneOffset(T)),
                          A = c.getTime(),
                          c = 1;
                        A < T;

                      )
                        h.push(A),
                          (A =
                            g === P.year
                              ? l.makeTime(s + c * i, 0)
                              : g === P.month
                              ? l.makeTime(s, S + c * i)
                              : !e || (g !== P.day && g !== P.week)
                              ? e && g === P.hour && 1 < i
                                ? l.makeTime(s, S, a, d + c * i)
                                : A + g * i
                              : l.makeTime(
                                  s,
                                  S,
                                  a + c * i * (g === P.day ? 1 : 7)
                                )),
                          c++;
                      h.push(A),
                        g <= P.hour &&
                          1e4 > h.length &&
                          h.forEach(function (E) {
                            E % 18e5 == 0 &&
                              "000000000" === l.dateFormat("%H%M%S%L", E) &&
                              (m[E] = "day");
                          });
                    }
                    return (
                      (h.info = st(u, { higherRanks: m, totalRange: g * i })), h
                    );
                  }
                  getDateFormat(u, A, T, S) {
                    const l = this.dateFormat("%m-%d %H:%M:%S.%L", A),
                      h = {
                        millisecond: 15,
                        second: 12,
                        minute: 9,
                        hour: 6,
                        day: 3,
                      };
                    let m,
                      c = "millisecond";
                    for (m in P) {
                      if (
                        u === P.week &&
                        +this.dateFormat("%w", A) === T &&
                        "00:00:00.000" === l.substr(6)
                      ) {
                        m = "week";
                        break;
                      }
                      if (P[m] > u) {
                        m = c;
                        break;
                      }
                      if (
                        h[m] &&
                        l.substr(h[m]) !== "01-01 00:00:00.000".substr(h[m])
                      )
                        break;
                      "week" !== m && (c = m);
                    }
                    return this.resolveDTLFormat(S[m]).main;
                  }
                };
              }
            ),
            ut(
              t,
              "Core/Defaults.js",
              [
                t["Core/Chart/ChartDefaults.js"],
                t["Core/Color/Color.js"],
                t["Core/Globals.js"],
                t["Core/Color/Palettes.js"],
                t["Core/Time.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j, tt, et, st) {
                const { isTouchDevice: nt, svg: I } = j,
                  { merge: H } = st,
                  N = {
                    colors: tt.colors,
                    symbols: [
                      "circle",
                      "diamond",
                      "square",
                      "triangle",
                      "triangle-down",
                    ],
                    lang: {
                      loading: "Loading...",
                      months:
                        "January February March April May June July August September October November December".split(
                          " "
                        ),
                      shortMonths:
                        "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(
                          " "
                        ),
                      weekdays:
                        "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                          " "
                        ),
                      decimalPoint: ".",
                      numericSymbols: "kMGTPE".split(""),
                      resetZoom: "Reset zoom",
                      resetZoomTitle: "Reset zoom level 1:1",
                      thousandsSep: " ",
                    },
                    global: {},
                    time: {
                      Date: void 0,
                      getTimezoneOffset: void 0,
                      timezone: void 0,
                      timezoneOffset: 0,
                      useUTC: !0,
                    },
                    chart: F,
                    title: {
                      style: { color: "#333333", fontWeight: "bold" },
                      text: "Chart title",
                      align: "center",
                      margin: 15,
                      widthAdjust: -44,
                    },
                    subtitle: {
                      style: { color: "#666666", fontSize: "0.8em" },
                      text: "",
                      align: "center",
                      widthAdjust: -44,
                    },
                    caption: {
                      margin: 15,
                      style: { color: "#666666", fontSize: "0.8em" },
                      text: "",
                      align: "left",
                      verticalAlign: "bottom",
                    },
                    plotOptions: {},
                    legend: {
                      enabled: !0,
                      align: "center",
                      alignColumns: !0,
                      className: "highcharts-no-tooltip",
                      layout: "horizontal",
                      itemMarginBottom: 2,
                      itemMarginTop: 2,
                      labelFormatter: function () {
                        return this.name;
                      },
                      borderColor: "#999999",
                      borderRadius: 0,
                      navigation: {
                        style: { fontSize: "0.8em" },
                        activeColor: "#0022ff",
                        inactiveColor: "#cccccc",
                      },
                      itemStyle: {
                        color: "#333333",
                        cursor: "pointer",
                        fontSize: "0.8em",
                        textDecoration: "none",
                        textOverflow: "ellipsis",
                      },
                      itemHoverStyle: { color: "#000000" },
                      itemHiddenStyle: {
                        color: "#666666",
                        textDecoration: "line-through",
                      },
                      shadow: !1,
                      itemCheckboxStyle: {
                        position: "absolute",
                        width: "13px",
                        height: "13px",
                      },
                      squareSymbol: !0,
                      symbolPadding: 5,
                      verticalAlign: "bottom",
                      x: 0,
                      y: 0,
                      title: {
                        style: { fontSize: "0.8em", fontWeight: "bold" },
                      },
                    },
                    loading: {
                      labelStyle: {
                        fontWeight: "bold",
                        position: "relative",
                        top: "45%",
                      },
                      style: {
                        position: "absolute",
                        backgroundColor: "#ffffff",
                        opacity: 0.5,
                        textAlign: "center",
                      },
                    },
                    tooltip: {
                      enabled: !0,
                      animation: I,
                      borderRadius: 3,
                      dateTimeLabelFormats: {
                        millisecond: "%A, %e %b, %H:%M:%S.%L",
                        second: "%A, %e %b, %H:%M:%S",
                        minute: "%A, %e %b, %H:%M",
                        hour: "%A, %e %b, %H:%M",
                        day: "%A, %e %b %Y",
                        week: "Week from %A, %e %b %Y",
                        month: "%B %Y",
                        year: "%Y",
                      },
                      footerFormat: "",
                      headerShape: "callout",
                      hideDelay: 500,
                      padding: 8,
                      shape: "callout",
                      shared: !1,
                      snap: nt ? 25 : 10,
                      headerFormat:
                        '<span style="font-size: 0.8em">{point.key}</span><br/>',
                      pointFormat:
                        '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
                      backgroundColor: "#ffffff",
                      borderWidth: void 0,
                      shadow: !0,
                      stickOnContact: !1,
                      style: {
                        color: "#333333",
                        cursor: "default",
                        fontSize: "0.8em",
                      },
                      useHTML: !1,
                    },
                    credits: {
                      enabled: !0,
                      href: "https://www.highcharts.com?credits",
                      position: {
                        align: "right",
                        x: -10,
                        verticalAlign: "bottom",
                        y: -5,
                      },
                      style: {
                        cursor: "pointer",
                        color: "#999999",
                        fontSize: "0.6em",
                      },
                      text: "Highcharts.com",
                    },
                  };
                N.chart.styledMode = !1;
                const x = new et(N.time);
                return {
                  defaultOptions: N,
                  defaultTime: x,
                  getOptions: function () {
                    return N;
                  },
                  setOptions: function (y) {
                    return (
                      H(!0, N, y),
                      (y.time || y.global) &&
                        (j.time
                          ? j.time.update(H(N.global, N.time, y.global, y.time))
                          : (j.time = x)),
                      N
                    );
                  },
                };
              }
            ),
            ut(
              t,
              "Core/Animation/Fx.js",
              [
                t["Core/Color/Color.js"],
                t["Core/Globals.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j) {
                const { parse: tt } = F,
                  { win: et } = Y,
                  { isNumber: st, objectEach: nt } = j;
                return (() => {
                  class H {
                    constructor(x, y, P) {
                      (this.pos = NaN),
                        (this.options = y),
                        (this.elem = x),
                        (this.prop = P);
                    }
                    dSetter() {
                      var x = this.paths;
                      const y = x && x[0];
                      x = x && x[1];
                      const P = this.now || 0;
                      let k = [];
                      if (1 !== P && y && x)
                        if (y.length === x.length && 1 > P)
                          for (let p = 0; p < x.length; p++) {
                            const v = y[p],
                              C = x[p],
                              u = [];
                            for (let A = 0; A < C.length; A++) {
                              const T = v[A],
                                S = C[A];
                              u[A] =
                                st(T) &&
                                st(S) &&
                                ("A" !== C[0] || (4 !== A && 5 !== A))
                                  ? T + P * (S - T)
                                  : S;
                            }
                            k.push(u);
                          }
                        else k = x;
                      else k = this.toD || [];
                      this.elem.attr("d", k, void 0, !0);
                    }
                    update() {
                      const x = this.elem,
                        y = this.prop,
                        P = this.now,
                        k = this.options.step;
                      this[y + "Setter"]
                        ? this[y + "Setter"]()
                        : x.attr
                        ? x.element && x.attr(y, P, null, !0)
                        : (x.style[y] = P + this.unit),
                        k && k.call(x, P, this);
                    }
                    run(x, y, P) {
                      const k = this,
                        p = k.options,
                        v = function (A) {
                          return !v.stopped && k.step(A);
                        },
                        C =
                          et.requestAnimationFrame ||
                          function (A) {
                            setTimeout(A, 13);
                          },
                        u = function () {
                          for (let A = 0; A < H.timers.length; A++)
                            H.timers[A]() || H.timers.splice(A--, 1);
                          H.timers.length && C(u);
                        };
                      x !== y || this.elem["forceAnimate:" + this.prop]
                        ? ((this.startTime = +new Date()),
                          (this.start = x),
                          (this.end = y),
                          (this.unit = P),
                          (this.now = this.start),
                          (this.pos = 0),
                          (v.elem = this.elem),
                          (v.prop = this.prop),
                          v() && 1 === H.timers.push(v) && C(u))
                        : (delete p.curAnim[this.prop],
                          p.complete &&
                            0 === Object.keys(p.curAnim).length &&
                            p.complete.call(this.elem));
                    }
                    step(x) {
                      const y = +new Date(),
                        P = this.options,
                        k = this.elem,
                        p = P.complete,
                        v = P.duration,
                        C = P.curAnim;
                      let u;
                      return (
                        k.attr && !k.element
                          ? (x = !1)
                          : x || y >= v + this.startTime
                          ? ((this.now = this.end),
                            (this.pos = 1),
                            this.update(),
                            (u = C[this.prop] = !0),
                            nt(C, function (A) {
                              !0 !== A && (u = !1);
                            }),
                            u && p && p.call(k),
                            (x = !1))
                          : ((this.pos = P.easing((y - this.startTime) / v)),
                            (this.now =
                              this.start + (this.end - this.start) * this.pos),
                            this.update(),
                            (x = !0)),
                        x
                      );
                    }
                    initPath(x, y, P) {
                      function k(h, m) {
                        for (; h.length < S; ) {
                          var c = h[0];
                          const g = m[S - h.length];
                          g &&
                            "M" === c[0] &&
                            (h[0] =
                              "C" === g[0]
                                ? ["C", c[1], c[2], c[1], c[2], c[1], c[2]]
                                : ["L", c[1], c[2]]),
                            h.unshift(c),
                            u && ((c = h.pop()), h.push(h[h.length - 1], c));
                        }
                      }
                      function p(h, m) {
                        for (; h.length < S; )
                          if (
                            ("C" ===
                              (m =
                                h[Math.floor(h.length / A) - 1].slice())[0] &&
                              ((m[1] = m[5]), (m[2] = m[6])),
                            u)
                          ) {
                            const c = h[Math.floor(h.length / A)].slice();
                            h.splice(h.length / 2, 0, m, c);
                          } else h.push(m);
                      }
                      const v = x.startX,
                        C = x.endX;
                      P = P.slice();
                      const u = x.isArea,
                        A = u ? 2 : 1;
                      let T, S, l;
                      if (!(y = y && y.slice())) return [P, P];
                      if (v && C && C.length) {
                        for (x = 0; x < v.length; x++) {
                          if (v[x] === C[0]) {
                            T = x;
                            break;
                          }
                          if (v[0] === C[C.length - v.length + x]) {
                            (T = x), (l = !0);
                            break;
                          }
                          if (v[v.length - 1] === C[C.length - v.length + x]) {
                            T = v.length - x;
                            break;
                          }
                        }
                        typeof T > "u" && (y = []);
                      }
                      return (
                        y.length &&
                          st(T) &&
                          ((S = P.length + T * A),
                          l ? (k(y, P), p(P, y)) : (k(P, y), p(y, P))),
                        [y, P]
                      );
                    }
                    fillSetter() {
                      H.prototype.strokeSetter.apply(this, arguments);
                    }
                    strokeSetter() {
                      this.elem.attr(
                        this.prop,
                        tt(this.start).tweenTo(tt(this.end), this.pos),
                        void 0,
                        !0
                      );
                    }
                  }
                  return (H.timers = []), H;
                })();
              }
            ),
            ut(
              t,
              "Core/Animation/AnimationUtilities.js",
              [t["Core/Animation/Fx.js"], t["Core/Utilities.js"]],
              function (F, Y) {
                function j(P) {
                  return H(P)
                    ? N({ duration: 500, defer: 0 }, P)
                    : { duration: P ? 500 : 0, defer: 0 };
                }
                function tt(P, k) {
                  let p = F.timers.length;
                  for (; p--; )
                    F.timers[p].elem !== P ||
                      (k && k !== F.timers[p].prop) ||
                      (F.timers[p].stopped = !0);
                }
                const {
                  defined: et,
                  getStyle: st,
                  isArray: nt,
                  isNumber: I,
                  isObject: H,
                  merge: N,
                  objectEach: x,
                  pick: y,
                } = Y;
                return {
                  animate: function (P, k, p) {
                    let v,
                      u,
                      A,
                      T,
                      C = "";
                    H(p) ||
                      ((T = arguments),
                      (p = { duration: T[2], easing: T[3], complete: T[4] })),
                      I(p.duration) || (p.duration = 400),
                      (p.easing =
                        "function" == typeof p.easing
                          ? p.easing
                          : Math[p.easing] || Math.easeInOutSine),
                      (p.curAnim = N(k)),
                      x(k, function (S, l) {
                        tt(P, l),
                          (A = new F(P, p, l)),
                          (u = void 0),
                          "d" === l && nt(k.d)
                            ? ((A.paths = A.initPath(P, P.pathArray, k.d)),
                              (A.toD = k.d),
                              (v = 0),
                              (u = 1))
                            : P.attr
                            ? (v = P.attr(l))
                            : ((v = parseFloat(st(P, l)) || 0),
                              "opacity" !== l && (C = "px")),
                          u || (u = S),
                          "string" == typeof u &&
                            u.match("px") &&
                            (u = u.replace(/px/g, "")),
                          A.run(v, u, C);
                      });
                  },
                  animObject: j,
                  getDeferredAnimation: function (P, k, p) {
                    const v = j(k);
                    let C = 0,
                      u = 0;
                    return (
                      (p ? [p] : P.series).forEach((A) => {
                        (A = j(A.options.animation)),
                          (C =
                            k && et(k.defer)
                              ? v.defer
                              : Math.max(C, A.duration + A.defer)),
                          (u = Math.min(v.duration, A.duration));
                      }),
                      P.renderer.forExport && (C = 0),
                      { defer: Math.max(0, C - u), duration: Math.min(C, u) }
                    );
                  },
                  setAnimation: function (P, k) {
                    k.renderer.globalAnimation = y(
                      P,
                      k.options.chart.animation,
                      !0
                    );
                  },
                  stop: tt,
                };
              }
            ),
            ut(
              t,
              "Core/Renderer/HTML/AST.js",
              [t["Core/Globals.js"], t["Core/Utilities.js"]],
              function (F, Y) {
                const { SVG_NS: j, win: tt } = F,
                  {
                    attr: et,
                    createElement: st,
                    css: nt,
                    error: I,
                    isFunction: H,
                    isString: N,
                    objectEach: x,
                    splat: y,
                  } = Y;
                ({ trustedTypes: Y } = tt);
                const P =
                  Y &&
                  H(Y.createPolicy) &&
                  Y.createPolicy("highcharts", { createHTML: (C) => C });
                Y = P ? P.createHTML("") : "";
                try {
                  var k = !!new DOMParser().parseFromString(Y, "text/html");
                } catch {
                  k = !1;
                }
                const p = k;
                class v {
                  static filterUserAttributes(u) {
                    return (
                      x(u, (A, T) => {
                        let S = !0;
                        -1 === v.allowedAttributes.indexOf(T) && (S = !1),
                          -1 !==
                            [
                              "background",
                              "dynsrc",
                              "href",
                              "lowsrc",
                              "src",
                            ].indexOf(T) &&
                            (S =
                              N(A) &&
                              v.allowedReferences.some(
                                (l) => 0 === A.indexOf(l)
                              )),
                          S ||
                            (I(33, !1, void 0, {
                              "Invalid attribute in config": `${T}`,
                            }),
                            delete u[T]),
                          N(A) && u[T] && (u[T] = A.replace(/</g, "&lt;"));
                      }),
                      u
                    );
                  }
                  static parseStyle(u) {
                    return u.split(";").reduce((A, T) => {
                      const S = (T = T.split(":").map((l) => l.trim())).shift();
                      return (
                        S &&
                          T.length &&
                          (A[
                            S.replace(/-([a-z])/g, (l) => l[1].toUpperCase())
                          ] = T.join(":")),
                        A
                      );
                    }, {});
                  }
                  static setElementHTML(u, A) {
                    (u.innerHTML = v.emptyHTML), A && new v(A).addToDOM(u);
                  }
                  constructor(u) {
                    this.nodes = "string" == typeof u ? this.parseMarkup(u) : u;
                  }
                  addToDOM(u) {
                    return (function A(T, S) {
                      let l;
                      return (
                        y(T).forEach(function (h) {
                          var m = h.tagName;
                          const c = h.textContent
                              ? F.doc.createTextNode(h.textContent)
                              : void 0,
                            g = v.bypassHTMLFiltering;
                          let i;
                          if (m)
                            if ("#text" === m) i = c;
                            else if (-1 !== v.allowedTags.indexOf(m) || g) {
                              m = F.doc.createElementNS(
                                "svg" === m ? j : S.namespaceURI || j,
                                m
                              );
                              const e = h.attributes || {};
                              x(h, function (s, a) {
                                "tagName" !== a &&
                                  "attributes" !== a &&
                                  "children" !== a &&
                                  "style" !== a &&
                                  "textContent" !== a &&
                                  (e[a] = s);
                              }),
                                et(m, g ? e : v.filterUserAttributes(e)),
                                h.style && nt(m, h.style),
                                c && m.appendChild(c),
                                A(h.children || [], m),
                                (i = m);
                            } else
                              I(33, !1, void 0, {
                                "Invalid tagName in config": m,
                              });
                          i && S.appendChild(i), (l = i);
                        }),
                        l
                      );
                    })(this.nodes, u);
                  }
                  parseMarkup(u) {
                    const A = [];
                    if (
                      ((u = u
                        .trim()
                        .replace(/ style=(["'])/g, " data-style=$1")),
                      p)
                    )
                      u = new DOMParser().parseFromString(
                        P ? P.createHTML(u) : u,
                        "text/html"
                      );
                    else {
                      const S = st("div");
                      (S.innerHTML = u), (u = { body: S });
                    }
                    const T = (S, l) => {
                      var h = S.nodeName.toLowerCase();
                      const m = { tagName: h };
                      if (
                        ("#text" === h && (m.textContent = S.textContent || ""),
                        (h = S.attributes))
                      ) {
                        const c = {};
                        [].forEach.call(h, (g) => {
                          "data-style" === g.name
                            ? (m.style = v.parseStyle(g.value))
                            : (c[g.name] = g.value);
                        }),
                          (m.attributes = c);
                      }
                      if (S.childNodes.length) {
                        const c = [];
                        [].forEach.call(S.childNodes, (g) => {
                          T(g, c);
                        }),
                          c.length && (m.children = c);
                      }
                      l.push(m);
                    };
                    return (
                      [].forEach.call(u.body.childNodes, (S) => T(S, A)), A
                    );
                  }
                }
                return (
                  (v.allowedAttributes =
                    "alt aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill flood-color flood-opacity height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align text-anchor textAnchor textLength title type valign width x x1 x2 xlink:href y y1 y2 zIndex".split(
                      " "
                    )),
                  (v.allowedReferences =
                    "https:// http:// mailto: / ../ ./ #".split(" ")),
                  (v.allowedTags =
                    "a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feDropShadow feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text textPath thead title tbody tspan td th tr u ul #text".split(
                      " "
                    )),
                  (v.emptyHTML = Y),
                  (v.bypassHTMLFiltering = !1),
                  v
                );
              }
            ),
            ut(
              t,
              "Core/Templating.js",
              [t["Core/Defaults.js"], t["Core/Utilities.js"]],
              function (F, Y) {
                function j(p = "", v, C) {
                  const u = /\{([a-zA-Z0-9:\.,;\-\/<>%_@"'= #\(\)]+)\}/g,
                    A = /\(([a-zA-Z0-9:\.,;\-\/<>%_@"'= ]+)\)/g,
                    T = [],
                    S = /f$/,
                    l = /\.([0-9])/,
                    h = et.lang,
                    m = (C && C.time) || st,
                    c = (C && C.numberFormatter) || tt,
                    g = (o = "") => {
                      let M;
                      return (
                        "true" === o ||
                        ("false" !== o &&
                          ((M = Number(o)).toString() === o ? M : I(o, v)))
                      );
                    };
                  let i,
                    e,
                    a,
                    s = 0;
                  for (; null !== (i = u.exec(p)); ) {
                    const o = A.exec(i[1]);
                    o && ((i = o), (a = !0)),
                      (e && e.isBlock) ||
                        (e = {
                          ctx: v,
                          expression: i[1],
                          find: i[0],
                          isBlock: "#" === i[1].charAt(0),
                          start: i.index,
                          startInner: i.index + i[0].length,
                          length: i[0].length,
                        });
                    var d = i[1].split(" ")[0].replace("#", "");
                    if (
                      (k[d] &&
                        (e.isBlock && d === e.fn && s++, e.fn || (e.fn = d)),
                      (d = "else" === i[1]),
                      e.isBlock && e.fn && (i[1] === `/${e.fn}` || d))
                    )
                      if (s) d || s--;
                      else {
                        var E = e.startInner;
                        (E = p.substr(E, i.index - E)),
                          void 0 === e.body
                            ? ((e.body = E),
                              (e.startInner = i.index + i[0].length))
                            : (e.elseBody = E),
                          (e.find += E + i[0]),
                          d || (T.push(e), (e = void 0));
                      }
                    else e.isBlock || T.push(e);
                    if (o && (null == e || !e.isBlock)) break;
                  }
                  return (
                    T.forEach((o) => {
                      const { body: M, elseBody: Z, expression: K, fn: $ } = o;
                      var L;
                      if ($) {
                        var n = [o],
                          z = K.split(" ");
                        for (L = k[$].length; L--; ) n.unshift(g(z[L + 1]));
                        (L = k[$].apply(v, n)),
                          o.isBlock &&
                            "boolean" == typeof L &&
                            (L = j(L ? M : Z, v));
                      } else
                        (n = K.split(":")),
                          (L = g(n.shift() || "")),
                          n.length &&
                            "number" == typeof L &&
                            ((n = n.join(":")),
                            S.test(n)
                              ? ((z = parseInt(
                                  (n.match(l) || ["", "-1"])[1],
                                  10
                                )),
                                null !== L &&
                                  (L = c(
                                    L,
                                    z,
                                    h.decimalPoint,
                                    -1 < n.indexOf(",") ? h.thousandsSep : ""
                                  )))
                              : (L = m.dateFormat(n, L)));
                      p = p.replace(o.find, y(L, ""));
                    }),
                    a ? j(p, v, C) : p
                  );
                }
                function tt(p, v, C, u) {
                  v = +v;
                  const A = et.lang;
                  var T = ((p = +p || 0).toString().split(".")[1] || "").split(
                    "e"
                  )[0].length;
                  const S = p.toString().split("e"),
                    l = v;
                  if (-1 === v) v = Math.min(T, 20);
                  else if (N(v)) {
                    if (v && S[1] && 0 > S[1]) {
                      var h = v + +S[1];
                      0 <= h
                        ? ((S[0] = (+S[0]).toExponential(h).split("e")[0]),
                          (v = h))
                        : ((S[0] = S[0].split(".")[0] || 0),
                          (p =
                            20 > v
                              ? (S[0] * Math.pow(10, S[1])).toFixed(v)
                              : 0),
                          (S[1] = 0));
                    }
                  } else v = 2;
                  h = (
                    Math.abs(S[1] ? S[0] : p) +
                    Math.pow(10, -Math.max(v, T) - 1)
                  ).toFixed(v);
                  const m = 3 < (T = String(P(h))).length ? T.length % 3 : 0;
                  return (
                    (C = y(C, A.decimalPoint)),
                    (u = y(u, A.thousandsSep)),
                    (p = (0 > p ? "-" : "") + (m ? T.substr(0, m) + u : "")),
                    (p =
                      0 > +S[1] && !l
                        ? "0"
                        : p + T.substr(m).replace(/(\d{3})(?=\d)/g, "$1" + u)),
                    v && (p += C + h.slice(-v)),
                    S[1] && 0 != +p && (p += "e" + S[1]),
                    p
                  );
                }
                const { defaultOptions: et, defaultTime: st } = F,
                  {
                    extend: nt,
                    getNestedProperty: I,
                    isArray: H,
                    isNumber: N,
                    isObject: x,
                    pick: y,
                    pInt: P,
                  } = Y,
                  k = {
                    add: (p, v) => p + v,
                    divide: (p, v) => (0 !== v ? p / v : ""),
                    eq: (p, v) => p == v,
                    each: function (p) {
                      const v = arguments[arguments.length - 1];
                      return (
                        !!H(p) &&
                        p
                          .map((C, u) =>
                            j(
                              v.body,
                              nt(x(C) ? C : { "@this": C }, {
                                "@index": u,
                                "@first": 0 === u,
                                "@last": u === p.length - 1,
                              })
                            )
                          )
                          .join("")
                      );
                    },
                    ge: (p, v) => p >= v,
                    gt: (p, v) => p > v,
                    if: (p) => !!p,
                    le: (p, v) => p <= v,
                    lt: (p, v) => p < v,
                    multiply: (p, v) => p * v,
                    ne: (p, v) => p != v,
                    subtract: (p, v) => p - v,
                    unless: (p) => !p,
                  };
                return {
                  dateFormat: function (p, v, C) {
                    return st.dateFormat(p, v, C);
                  },
                  format: j,
                  helpers: k,
                  numberFormat: tt,
                };
              }
            ),
            ut(
              t,
              "Core/Renderer/RendererUtilities.js",
              [t["Core/Utilities.js"]],
              function (F) {
                const { clamp: Y, pick: j, stableSort: tt } = F;
                var et;
                return (
                  ((et || (et = {})).distribute = function nt(I, H, N) {
                    const x = I;
                    var y = x.reducedLen || H,
                      P = (A, T) => (T.rank || 0) - (A.rank || 0);
                    const k = (A, T) => A.target - T.target;
                    let p,
                      v = !0,
                      C = [],
                      u = 0;
                    for (p = I.length; p--; ) u += I[p].size;
                    if (u > y) {
                      for (tt(I, P), u = p = 0; u <= y; ) (u += I[p].size), p++;
                      C = I.splice(p - 1, I.length);
                    }
                    for (
                      tt(I, k),
                        I = I.map((A) => ({
                          size: A.size,
                          targets: [A.target],
                          align: j(A.align, 0.5),
                        }));
                      v;

                    ) {
                      for (p = I.length; p--; )
                        (y = I[p]),
                          (P =
                            (Math.min.apply(0, y.targets) +
                              Math.max.apply(0, y.targets)) /
                            2),
                          (y.pos = Y(P - y.size * y.align, 0, H - y.size));
                      for (p = I.length, v = !1; p--; )
                        0 < p &&
                          I[p - 1].pos + I[p - 1].size > I[p].pos &&
                          ((I[p - 1].size += I[p].size),
                          (I[p - 1].targets = I[p - 1].targets.concat(
                            I[p].targets
                          )),
                          (I[p - 1].align = 0.5),
                          I[p - 1].pos + I[p - 1].size > H &&
                            (I[p - 1].pos = H - I[p - 1].size),
                          I.splice(p, 1),
                          (v = !0));
                    }
                    return (
                      x.push.apply(x, C),
                      (p = 0),
                      I.some((A) => {
                        let T = 0;
                        return (A.targets || []).some(
                          () => (
                            (x[p].pos = A.pos + T),
                            typeof N < "u" &&
                            Math.abs(x[p].pos - x[p].target) > N
                              ? (x.slice(0, p + 1).forEach((S) => delete S.pos),
                                (x.reducedLen = (x.reducedLen || H) - 0.1 * H),
                                x.reducedLen > 0.1 * H && nt(x, H, N),
                                !0)
                              : ((T += x[p].size), p++, !1)
                          )
                        );
                      }),
                      tt(x, k),
                      x
                    );
                  }),
                  et
                );
              }
            ),
            ut(
              t,
              "Core/Renderer/SVG/SVGElement.js",
              [
                t["Core/Animation/AnimationUtilities.js"],
                t["Core/Color/Color.js"],
                t["Core/Globals.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j, tt) {
                const { animate: et, animObject: st, stop: nt } = F,
                  { deg2rad: I, doc: H, svg: N, SVG_NS: x, win: y } = j,
                  {
                    addEvent: P,
                    attr: k,
                    createElement: p,
                    css: v,
                    defined: C,
                    erase: u,
                    extend: A,
                    fireEvent: T,
                    isArray: S,
                    isFunction: l,
                    isObject: h,
                    isString: m,
                    merge: c,
                    objectEach: g,
                    pick: i,
                    pInt: e,
                    syncTimeout: s,
                    uniqueKey: a,
                  } = tt;
                class d {
                  constructor() {
                    (this.element = void 0),
                      (this.onEvents = {}),
                      (this.opacity = 1),
                      (this.renderer = void 0),
                      (this.SVG_NS = x);
                  }
                  _defaultGetter(o) {
                    return (
                      (o = i(
                        this[o + "Value"],
                        this[o],
                        this.element ? this.element.getAttribute(o) : null,
                        0
                      )),
                      /^[\-0-9\.]+$/.test(o) && (o = parseFloat(o)),
                      o
                    );
                  }
                  _defaultSetter(o, M, Z) {
                    Z.setAttribute(M, o);
                  }
                  add(o) {
                    const M = this.renderer,
                      Z = this.element;
                    let K;
                    return (
                      o && (this.parentGroup = o),
                      typeof this.textStr < "u" &&
                        "text" === this.element.nodeName &&
                        M.buildText(this),
                      (this.added = !0),
                      (!o || o.handleZ || this.zIndex) &&
                        (K = this.zIndexSetter()),
                      K || (o ? o.element : M.box).appendChild(Z),
                      this.onAdd && this.onAdd(),
                      this
                    );
                  }
                  addClass(o, M) {
                    const Z = M ? "" : this.attr("class") || "";
                    return (
                      (o = (o || "")
                        .split(/ /g)
                        .reduce(
                          function (K, $) {
                            return -1 === Z.indexOf($) && K.push($), K;
                          },
                          Z ? [Z] : []
                        )
                        .join(" ")) !== Z && this.attr("class", o),
                      this
                    );
                  }
                  afterSetters() {
                    this.doTransform &&
                      (this.updateTransform(), (this.doTransform = !1));
                  }
                  align(o, M, Z) {
                    const K = {};
                    var n,
                      $ = this.renderer,
                      L = $.alignedObjects;
                    let z, b;
                    o
                      ? ((this.alignOptions = o),
                        (this.alignByTranslate = M),
                        (!Z || m(Z)) &&
                          ((this.alignTo = n = Z || "renderer"),
                          u(L, this),
                          L.push(this),
                          (Z = void 0)))
                      : ((o = this.alignOptions),
                        (M = this.alignByTranslate),
                        (n = this.alignTo)),
                      (Z = i(
                        Z,
                        $[n],
                        "scrollablePlotBox" === n ? $.plotBox : void 0,
                        $
                      ));
                    const D = o.verticalAlign;
                    return (
                      ($ = (Z.x || 0) + (o.x || 0)),
                      (L = (Z.y || 0) + (o.y || 0)),
                      "right" === (n = o.align)
                        ? (z = 1)
                        : "center" === n && (z = 2),
                      z && ($ += (Z.width - (o.width || 0)) / z),
                      (K[M ? "translateX" : "x"] = Math.round($)),
                      "bottom" === D ? (b = 1) : "middle" === D && (b = 2),
                      b && (L += (Z.height - (o.height || 0)) / b),
                      (K[M ? "translateY" : "y"] = Math.round(L)),
                      this[this.placed ? "animate" : "attr"](K),
                      (this.placed = !0),
                      (this.alignAttr = K),
                      this
                    );
                  }
                  alignSetter(o) {
                    const M = { left: "start", center: "middle", right: "end" };
                    M[o] &&
                      ((this.alignValue = o),
                      this.element.setAttribute("text-anchor", M[o]));
                  }
                  animate(o, M, Z) {
                    const K = st(i(M, this.renderer.globalAnimation, !0));
                    return (
                      (M = K.defer),
                      H.hidden && (K.duration = 0),
                      0 !== K.duration
                        ? (Z && (K.complete = Z),
                          s(() => {
                            this.element && et(this, o, K);
                          }, M))
                        : (this.attr(o, void 0, Z || K.complete),
                          g(
                            o,
                            function ($, L) {
                              K.step &&
                                K.step.call(this, $, {
                                  prop: L,
                                  pos: 1,
                                  elem: this,
                                });
                            },
                            this
                          )),
                      this
                    );
                  }
                  applyTextOutline(o) {
                    const M = this.element;
                    -1 !== o.indexOf("contrast") &&
                      (o = o.replace(
                        /contrast/g,
                        this.renderer.getContrast(M.style.fill)
                      ));
                    var Z = o.split(" ");
                    if (
                      ((o = Z[Z.length - 1]),
                      (Z = Z[0]) && "none" !== Z && j.svg)
                    ) {
                      (this.fakeTS = !0),
                        (Z = Z.replace(/(^[\d\.]+)(.*?)$/g, function (L, n, z) {
                          return 2 * Number(n) + z;
                        })),
                        this.removeTextOutline();
                      const K = H.createElementNS(x, "tspan");
                      k(K, {
                        class: "highcharts-text-outline",
                        fill: o,
                        stroke: o,
                        "stroke-width": Z,
                        "stroke-linejoin": "round",
                      }),
                        (o = M.querySelector("textPath") || M),
                        [].forEach.call(o.childNodes, (L) => {
                          const n = L.cloneNode(!0);
                          n.removeAttribute &&
                            [
                              "fill",
                              "stroke",
                              "stroke-width",
                              "stroke",
                            ].forEach((z) => n.removeAttribute(z)),
                            K.appendChild(n);
                        });
                      let $ = 0;
                      [].forEach.call(o.querySelectorAll("text tspan"), (L) => {
                        $ += Number(L.getAttribute("dy"));
                      }),
                        ((Z = H.createElementNS(x, "tspan")).textContent =
                          "\u200b"),
                        k(Z, { x: Number(M.getAttribute("x")), dy: -$ }),
                        K.appendChild(Z),
                        o.insertBefore(K, o.firstChild);
                    }
                  }
                  attr(o, M, Z, K) {
                    const $ = this.element,
                      L = d.symbolCustomAttribs;
                    let n,
                      z,
                      D,
                      J,
                      b = this;
                    return (
                      "string" == typeof o &&
                        typeof M < "u" &&
                        ((n = o), ((o = {})[n] = M)),
                      "string" == typeof o
                        ? (b = (this[o + "Getter"] || this._defaultGetter).call(
                            this,
                            o,
                            $
                          ))
                        : (g(
                            o,
                            function (r, f) {
                              (D = !1),
                                K || nt(this, f),
                                this.symbolName &&
                                  -1 !== L.indexOf(f) &&
                                  (z || (this.symbolAttr(o), (z = !0)),
                                  (D = !0)),
                                !this.rotation ||
                                  ("x" !== f && "y" !== f) ||
                                  (this.doTransform = !0),
                                D ||
                                  ((J =
                                    this[f + "Setter"] || this._defaultSetter),
                                  J.call(this, r, f, $));
                            },
                            this
                          ),
                          this.afterSetters()),
                      Z && Z.call(this),
                      b
                    );
                  }
                  clip(o) {
                    return this.attr(
                      "clip-path",
                      o ? "url(" + this.renderer.url + "#" + o.id + ")" : "none"
                    );
                  }
                  crisp(o, M) {
                    M = M || o.strokeWidth || 0;
                    const Z = (Math.round(M) % 2) / 2;
                    return (
                      (o.x = Math.floor(o.x || this.x || 0) + Z),
                      (o.y = Math.floor(o.y || this.y || 0) + Z),
                      (o.width = Math.floor(
                        (o.width || this.width || 0) - 2 * Z
                      )),
                      (o.height = Math.floor(
                        (o.height || this.height || 0) - 2 * Z
                      )),
                      C(o.strokeWidth) && (o.strokeWidth = M),
                      o
                    );
                  }
                  complexColor(o, M, Z) {
                    const K = this.renderer;
                    let $,
                      L,
                      n,
                      z,
                      b,
                      D,
                      J,
                      r,
                      f,
                      _,
                      W,
                      B = [];
                    T(
                      this.renderer,
                      "complexColor",
                      { args: arguments },
                      function () {
                        if (
                          (o.radialGradient
                            ? (L = "radialGradient")
                            : o.linearGradient && (L = "linearGradient"),
                          L)
                        ) {
                          if (
                            ((n = o[L]),
                            (b = K.gradients),
                            (D = o.stops),
                            (f = Z.radialReference),
                            S(n) &&
                              (o[L] = n =
                                {
                                  x1: n[0],
                                  y1: n[1],
                                  x2: n[2],
                                  y2: n[3],
                                  gradientUnits: "userSpaceOnUse",
                                }),
                            "radialGradient" === L &&
                              f &&
                              !C(n.gradientUnits) &&
                              ((z = n),
                              (n = c(n, K.getRadialAttr(f, z), {
                                gradientUnits: "userSpaceOnUse",
                              }))),
                            g(n, function (R, V) {
                              "id" !== V && B.push(V, R);
                            }),
                            g(D, function (R) {
                              B.push(R);
                            }),
                            (B = B.join(",")),
                            b[B])
                          )
                            _ = b[B].attr("id");
                          else {
                            n.id = _ = a();
                            const R = (b[B] = K.createElement(L)
                              .attr(n)
                              .add(K.defs));
                            (R.radAttr = z),
                              (R.stops = []),
                              D.forEach(function (V) {
                                0 === V[1].indexOf("rgba")
                                  ? (($ = Y.parse(V[1])),
                                    (J = $.get("rgb")),
                                    (r = $.get("a")))
                                  : ((J = V[1]), (r = 1)),
                                  (V = K.createElement("stop")
                                    .attr({
                                      offset: V[0],
                                      "stop-color": J,
                                      "stop-opacity": r,
                                    })
                                    .add(R)),
                                  R.stops.push(V);
                              });
                          }
                          (W = "url(" + K.url + "#" + _ + ")"),
                            Z.setAttribute(M, W),
                            (Z.gradient = B),
                            (o.toString = function () {
                              return W;
                            });
                        }
                      }
                    );
                  }
                  css(o) {
                    const M = this.styles,
                      Z = {},
                      K = this.element;
                    let $,
                      L = !M;
                    if (
                      (M &&
                        g(o, function (n, z) {
                          M && M[z] !== n && ((Z[z] = n), (L = !0));
                        }),
                      L)
                    ) {
                      M && (o = A(M, Z)),
                        null === o.width || "auto" === o.width
                          ? delete this.textWidth
                          : "text" === K.nodeName.toLowerCase() &&
                            o.width &&
                            ($ = this.textWidth = e(o.width)),
                        (this.styles = o),
                        $ && !N && this.renderer.forExport && delete o.width;
                      const n = c(o);
                      K.namespaceURI === this.SVG_NS &&
                        (["textOutline", "textOverflow", "width"].forEach(
                          (z) => n && delete n[z]
                        ),
                        n.color && (n.fill = n.color)),
                        v(K, n);
                    }
                    return (
                      this.added &&
                        ("text" === this.element.nodeName &&
                          this.renderer.buildText(this),
                        o.textOutline && this.applyTextOutline(o.textOutline)),
                      this
                    );
                  }
                  dashstyleSetter(o) {
                    let M = this["stroke-width"];
                    if (
                      ("inherit" === M && (M = 1), (o = o && o.toLowerCase()))
                    ) {
                      const Z = o
                        .replace("shortdashdotdot", "3,1,1,1,1,1,")
                        .replace("shortdashdot", "3,1,1,1")
                        .replace("shortdot", "1,1,")
                        .replace("shortdash", "3,1,")
                        .replace("longdash", "8,3,")
                        .replace(/dot/g, "1,3,")
                        .replace("dash", "4,3,")
                        .replace(/,$/, "")
                        .split(",");
                      for (o = Z.length; o--; ) Z[o] = "" + e(Z[o]) * i(M, NaN);
                      (o = Z.join(",").replace(/NaN/g, "none")),
                        this.element.setAttribute("stroke-dasharray", o);
                    }
                  }
                  destroy() {
                    const o = this;
                    var M = o.element || {};
                    const Z = o.renderer;
                    var K = M.ownerSVGElement;
                    let $ = ("SPAN" === M.nodeName && o.parentGroup) || void 0;
                    if (
                      ((M.onclick =
                        M.onmouseout =
                        M.onmouseover =
                        M.onmousemove =
                        M.point =
                          null),
                      nt(o),
                      o.clipPath && K)
                    ) {
                      const L = o.clipPath;
                      [].forEach.call(
                        K.querySelectorAll("[clip-path],[CLIP-PATH]"),
                        function (n) {
                          -1 <
                            n.getAttribute("clip-path").indexOf(L.element.id) &&
                            n.removeAttribute("clip-path");
                        }
                      ),
                        (o.clipPath = L.destroy());
                    }
                    if (o.stops) {
                      for (K = 0; K < o.stops.length; K++) o.stops[K].destroy();
                      (o.stops.length = 0), (o.stops = void 0);
                    }
                    for (
                      o.safeRemoveChild(M);
                      $ && $.div && 0 === $.div.childNodes.length;

                    )
                      (M = $.parentGroup),
                        o.safeRemoveChild($.div),
                        delete $.div,
                        ($ = M);
                    o.alignTo && u(Z.alignedObjects, o),
                      g(o, function (L, n) {
                        o[n] &&
                          o[n].parentGroup === o &&
                          o[n].destroy &&
                          o[n].destroy(),
                          delete o[n];
                      });
                  }
                  dSetter(o, M, Z) {
                    S(o) &&
                      ("string" == typeof o[0] &&
                        (o = this.renderer.pathToSegments(o)),
                      (this.pathArray = o),
                      (o = o.reduce(
                        (K, $, L) =>
                          $ && $.join
                            ? (L ? K + " " : "") + $.join(" ")
                            : ($ || "").toString(),
                        ""
                      ))),
                      /(NaN| {2}|^$)/.test(o) && (o = "M 0 0"),
                      this[M] !== o && (Z.setAttribute(M, o), (this[M] = o));
                  }
                  fadeOut(o) {
                    const M = this;
                    M.animate(
                      { opacity: 0 },
                      {
                        duration: i(o, 150),
                        complete: function () {
                          M.hide();
                        },
                      }
                    );
                  }
                  fillSetter(o, M, Z) {
                    "string" == typeof o
                      ? Z.setAttribute(M, o)
                      : o && this.complexColor(o, M, Z);
                  }
                  getBBox(o, M) {
                    const {
                        alignValue: Z,
                        element: K,
                        renderer: $,
                        styles: L,
                        textStr: n,
                      } = this,
                      { cache: z, cacheKeys: b } = $;
                    var D = K.namespaceURI === this.SVG_NS;
                    M = i(M, this.rotation, 0);
                    var J = $.styledMode
                      ? K && d.prototype.getStyle.call(K, "font-size")
                      : L && L.fontSize;
                    let r, f;
                    if (
                      (C(n) &&
                        ((f = n.toString()),
                        -1 === f.indexOf("<") && (f = f.replace(/[0-9]/g, "0")),
                        (f += [
                          "",
                          $.rootFontSize,
                          J,
                          M,
                          this.textWidth,
                          Z,
                          L && L.textOverflow,
                          L && L.fontWeight,
                        ].join())),
                      f && !o && (r = z[f]),
                      !r)
                    ) {
                      if (D || $.forExport) {
                        try {
                          var _ =
                            this.fakeTS &&
                            function (q) {
                              const it = K.querySelector(
                                ".highcharts-text-outline"
                              );
                              it && v(it, { display: q });
                            };
                          l(_) && _("none"),
                            (r = K.getBBox
                              ? A({}, K.getBBox())
                              : {
                                  width: K.offsetWidth,
                                  height: K.offsetHeight,
                                  x: 0,
                                  y: 0,
                                }),
                            l(_) && _("");
                        } catch {}
                        (!r || 0 > r.width) &&
                          (r = { x: 0, y: 0, width: 0, height: 0 });
                      } else r = this.htmlGetBBox();
                      if (
                        ((_ = r.width),
                        (o = r.height),
                        D &&
                          (r.height = o =
                            { "11px,17": 14, "13px,20": 16 }[
                              `${J || ""},${Math.round(o)}`
                            ] || o),
                        M)
                      ) {
                        (D = Number(K.getAttribute("y") || 0) - r.y),
                          (J = { right: 1, center: 0.5 }[Z || 0] || 0);
                        var B = M * I,
                          W = (M - 90) * I,
                          R = _ * Math.cos(B);
                        M = _ * Math.sin(B);
                        var V = Math.cos(W);
                        (B = Math.sin(W)),
                          (R =
                            (V =
                              (W = (_ = r.x + J * (_ - R) + D * V) + R) -
                              o * V) - R),
                          (M =
                            (o =
                              (J = (D = r.y + D - J * M + D * B) + M) - o * B) -
                            M),
                          (r.x = Math.min(_, W, V, R)),
                          (r.y = Math.min(D, J, o, M)),
                          (r.width = Math.max(_, W, V, R) - r.x),
                          (r.height = Math.max(D, J, o, M) - r.y);
                      }
                    }
                    if (f && ("" === n || 0 < r.height)) {
                      for (; 250 < b.length; ) delete z[b.shift()];
                      z[f] || b.push(f), (z[f] = r);
                    }
                    return r;
                  }
                  getStyle(o) {
                    return y
                      .getComputedStyle(this.element || this, "")
                      .getPropertyValue(o);
                  }
                  hasClass(o) {
                    return (
                      -1 !== ("" + this.attr("class")).split(" ").indexOf(o)
                    );
                  }
                  hide() {
                    return this.attr({ visibility: "hidden" });
                  }
                  htmlGetBBox() {
                    return { height: 0, width: 0, x: 0, y: 0 };
                  }
                  init(o, M) {
                    (this.element =
                      "span" === M ? p(M) : H.createElementNS(this.SVG_NS, M)),
                      (this.renderer = o),
                      T(this, "afterInit");
                  }
                  on(o, M) {
                    const { onEvents: Z } = this;
                    return Z[o] && Z[o](), (Z[o] = P(this.element, o, M)), this;
                  }
                  opacitySetter(o, M, Z) {
                    (this.opacity = o = Number(Number(o).toFixed(3))),
                      Z.setAttribute(M, o);
                  }
                  removeClass(o) {
                    return this.attr(
                      "class",
                      ("" + this.attr("class"))
                        .replace(m(o) ? new RegExp(`(^| )${o}( |$)`) : o, " ")
                        .replace(/ +/g, " ")
                        .trim()
                    );
                  }
                  removeTextOutline() {
                    const o = this.element.querySelector(
                      "tspan.highcharts-text-outline"
                    );
                    o && this.safeRemoveChild(o);
                  }
                  safeRemoveChild(o) {
                    const M = o.parentNode;
                    M && M.removeChild(o);
                  }
                  setRadialReference(o) {
                    const M =
                      this.element.gradient &&
                      this.renderer.gradients[this.element.gradient];
                    return (
                      (this.element.radialReference = o),
                      M &&
                        M.radAttr &&
                        M.animate(this.renderer.getRadialAttr(o, M.radAttr)),
                      this
                    );
                  }
                  setTextPath(o, M) {
                    M = c(
                      !0,
                      {
                        enabled: !0,
                        attributes: {
                          dy: -5,
                          startOffset: "50%",
                          textAnchor: "middle",
                        },
                      },
                      M
                    );
                    const Z = this.renderer.url,
                      K = this.text || this,
                      $ = K.textPath,
                      { attributes: L, enabled: n } = M;
                    return (
                      (o = o || ($ && $.path)),
                      $ && $.undo(),
                      o && n
                        ? ((M = P(K, "afterModifyTree", (z) => {
                            if (o && n) {
                              let D = o.attr("id");
                              D || o.attr("id", (D = a()));
                              var b = { x: 0, y: 0 };
                              C(L.dx) && ((b.dx = L.dx), delete L.dx),
                                C(L.dy) && ((b.dy = L.dy), delete L.dy),
                                K.attr(b),
                                this.attr({ transform: "" }),
                                this.box && (this.box = this.box.destroy()),
                                (b = z.nodes.slice(0)),
                                (z.nodes.length = 0),
                                (z.nodes[0] = {
                                  tagName: "textPath",
                                  attributes: A(L, {
                                    "text-anchor": L.textAnchor,
                                    href: `${Z}#${D}`,
                                  }),
                                  children: b,
                                });
                            }
                          })),
                          (K.textPath = { path: o, undo: M }))
                        : (K.attr({ dx: 0, dy: 0 }), delete K.textPath),
                      this.added &&
                        ((K.textCache = ""), this.renderer.buildText(K)),
                      this
                    );
                  }
                  shadow(o) {
                    var M;
                    const { renderer: Z } = this,
                      K = c(
                        90 ===
                          (null === (M = this.parentGroup) || void 0 === M
                            ? void 0
                            : M.rotation)
                          ? { offsetX: -1, offsetY: -1 }
                          : {},
                        h(o) ? o : {}
                      );
                    return (
                      (M = Z.shadowDefinition(K)),
                      this.attr({ filter: o ? `url(${Z.url}#${M})` : "none" })
                    );
                  }
                  show(o = !0) {
                    return this.attr({ visibility: o ? "inherit" : "visible" });
                  }
                  "stroke-widthSetter"(o, M, Z) {
                    (this[M] = o), Z.setAttribute(M, o);
                  }
                  strokeWidth() {
                    if (!this.renderer.styledMode)
                      return this["stroke-width"] || 0;
                    const o = this.getStyle("stroke-width");
                    let Z,
                      M = 0;
                    return (
                      o.indexOf("px") === o.length - 2
                        ? (M = e(o))
                        : "" !== o &&
                          ((Z = H.createElementNS(x, "rect")),
                          k(Z, { width: o, "stroke-width": 0 }),
                          this.element.parentNode.appendChild(Z),
                          (M = Z.getBBox().width),
                          Z.parentNode.removeChild(Z)),
                      M
                    );
                  }
                  symbolAttr(o) {
                    const M = this;
                    d.symbolCustomAttribs.forEach(function (Z) {
                      M[Z] = i(o[Z], M[Z]);
                    }),
                      M.attr({
                        d: M.renderer.symbols[M.symbolName](
                          M.x,
                          M.y,
                          M.width,
                          M.height,
                          M
                        ),
                      });
                  }
                  textSetter(o) {
                    o !== this.textStr &&
                      (delete this.textPxLength,
                      (this.textStr = o),
                      this.added && this.renderer.buildText(this));
                  }
                  titleSetter(o) {
                    const M = this.element,
                      Z =
                        M.getElementsByTagName("title")[0] ||
                        H.createElementNS(this.SVG_NS, "title");
                    M.insertBefore
                      ? M.insertBefore(Z, M.firstChild)
                      : M.appendChild(Z),
                      (Z.textContent = String(i(o, ""))
                        .replace(/<[^>]*>/g, "")
                        .replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">"));
                  }
                  toFront() {
                    const o = this.element;
                    return o.parentNode.appendChild(o), this;
                  }
                  translate(o, M) {
                    return this.attr({ translateX: o, translateY: M });
                  }
                  updateTransform() {
                    const {
                        element: o,
                        matrix: M,
                        rotation: Z = 0,
                        scaleX: K,
                        scaleY: $,
                        translateX: L = 0,
                        translateY: n = 0,
                      } = this,
                      z = ["translate(" + L + "," + n + ")"];
                    C(M) && z.push("matrix(" + M.join(",") + ")"),
                      Z &&
                        z.push(
                          "rotate(" +
                            Z +
                            " " +
                            i(this.rotationOriginX, o.getAttribute("x"), 0) +
                            " " +
                            i(this.rotationOriginY, o.getAttribute("y") || 0) +
                            ")"
                        ),
                      (C(K) || C($)) &&
                        z.push("scale(" + i(K, 1) + " " + i($, 1) + ")"),
                      z.length &&
                        !(this.text || this).textPath &&
                        o.setAttribute("transform", z.join(" "));
                  }
                  visibilitySetter(o, M, Z) {
                    "inherit" === o
                      ? Z.removeAttribute(M)
                      : this[M] !== o && Z.setAttribute(M, o),
                      (this[M] = o);
                  }
                  xGetter(o) {
                    return (
                      "circle" === this.element.nodeName &&
                        ("x" === o ? (o = "cx") : "y" === o && (o = "cy")),
                      this._defaultGetter(o)
                    );
                  }
                  zIndexSetter(o, M) {
                    var Z = this.renderer,
                      K = this.parentGroup;
                    const $ = (K || Z).element || Z.box,
                      L = this.element;
                    Z = $ === Z.box;
                    let z,
                      n = !1;
                    var b = this.added;
                    let D;
                    if (
                      (C(o)
                        ? (L.setAttribute("data-z-index", o),
                          this[M] === (o = +o) && (b = !1))
                        : C(this[M]) && L.removeAttribute("data-z-index"),
                      (this[M] = o),
                      b)
                    ) {
                      for (
                        (o = this.zIndex) && K && (K.handleZ = !0),
                          D = (M = $.childNodes).length - 1;
                        0 <= D && !n;
                        D--
                      )
                        (b = (K = M[D]).getAttribute("data-z-index")),
                          (z = !C(b)),
                          K !== L &&
                            (0 > o && z && !Z && !D
                              ? ($.insertBefore(L, M[D]), (n = !0))
                              : (e(b) <= o || (z && (!C(o) || 0 <= o))) &&
                                ($.insertBefore(L, M[D + 1]), (n = !0)));
                      n || ($.insertBefore(L, M[Z ? 3 : 0]), (n = !0));
                    }
                    return n;
                  }
                }
                return (
                  (d.symbolCustomAttribs =
                    "anchorX anchorY clockwise end height innerR r start width x y".split(
                      " "
                    )),
                  (d.prototype.strokeSetter = d.prototype.fillSetter),
                  (d.prototype.yGetter = d.prototype.xGetter),
                  (d.prototype.matrixSetter =
                    d.prototype.rotationOriginXSetter =
                    d.prototype.rotationOriginYSetter =
                    d.prototype.rotationSetter =
                    d.prototype.scaleXSetter =
                    d.prototype.scaleYSetter =
                    d.prototype.translateXSetter =
                    d.prototype.translateYSetter =
                    d.prototype.verticalAlignSetter =
                      function (E, o) {
                        (this[o] = E), (this.doTransform = !0);
                      }),
                  d
                );
              }
            ),
            ut(
              t,
              "Core/Renderer/RendererRegistry.js",
              [t["Core/Globals.js"]],
              function (F) {
                var Y;
                return (
                  (function (j) {
                    let tt;
                    (j.rendererTypes = {}),
                      (j.getRendererType = function (et = tt) {
                        return j.rendererTypes[et] || j.rendererTypes[tt];
                      }),
                      (j.registerRendererType = function (et, st, nt) {
                        (j.rendererTypes[et] = st),
                          (!tt || nt) && ((tt = et), (F.Renderer = st));
                      });
                  })(Y || (Y = {})),
                  Y
                );
              }
            ),
            ut(
              t,
              "Core/Renderer/SVG/SVGLabel.js",
              [t["Core/Renderer/SVG/SVGElement.js"], t["Core/Utilities.js"]],
              function (F, Y) {
                const {
                  defined: j,
                  extend: tt,
                  isNumber: et,
                  merge: st,
                  pick: nt,
                  removeEvent: I,
                } = Y;
                class H extends F {
                  constructor(x, y, P, k, p, v, C, u, A, T) {
                    let S;
                    super(),
                      (this.paddingRightSetter = this.paddingLeftSetter =
                        this.paddingSetter),
                      this.init(x, "g"),
                      (this.textStr = y),
                      (this.x = P),
                      (this.y = k),
                      (this.anchorX = v),
                      (this.anchorY = C),
                      (this.baseline = A),
                      (this.className = T),
                      this.addClass(
                        "button" === T
                          ? "highcharts-no-tooltip"
                          : "highcharts-label"
                      ),
                      T && this.addClass("highcharts-" + T),
                      (this.text = x.text(void 0, 0, 0, u).attr({ zIndex: 1 })),
                      "string" == typeof p &&
                        ((S = /^url\((.*?)\)$/.test(p)) ||
                          this.renderer.symbols[p]) &&
                        (this.symbolKey = p),
                      (this.bBox = H.emptyBBox),
                      (this.padding = 3),
                      (this.baselineOffset = 0),
                      (this.needsBox = x.styledMode || S),
                      (this.deferredAttr = {}),
                      (this.alignFactor = 0);
                  }
                  alignSetter(x) {
                    (x = { left: 0, center: 0.5, right: 1 }[x]) !==
                      this.alignFactor &&
                      ((this.alignFactor = x),
                      this.bBox &&
                        et(this.xSetting) &&
                        this.attr({ x: this.xSetting }));
                  }
                  anchorXSetter(x, y) {
                    (this.anchorX = x),
                      this.boxAttr(
                        y,
                        Math.round(x) - this.getCrispAdjust() - this.xSetting
                      );
                  }
                  anchorYSetter(x, y) {
                    (this.anchorY = x), this.boxAttr(y, x - this.ySetting);
                  }
                  boxAttr(x, y) {
                    this.box ? this.box.attr(x, y) : (this.deferredAttr[x] = y);
                  }
                  css(x) {
                    if (x) {
                      const y = {};
                      (x = st(x)),
                        H.textProps.forEach((P) => {
                          typeof x[P] < "u" && ((y[P] = x[P]), delete x[P]);
                        }),
                        this.text.css(y),
                        "fontSize" in y || "fontWeight" in y
                          ? this.updateTextPadding()
                          : ("width" in y || "textOverflow" in y) &&
                            this.updateBoxSize();
                    }
                    return F.prototype.css.call(this, x);
                  }
                  destroy() {
                    I(this.element, "mouseenter"),
                      I(this.element, "mouseleave"),
                      this.text && this.text.destroy(),
                      this.box && (this.box = this.box.destroy()),
                      F.prototype.destroy.call(this);
                  }
                  fillSetter(x, y) {
                    x && (this.needsBox = !0),
                      (this.fill = x),
                      this.boxAttr(y, x);
                  }
                  getBBox() {
                    this.textStr &&
                      0 === this.bBox.width &&
                      0 === this.bBox.height &&
                      this.updateBoxSize();
                    const x = this.padding,
                      y = nt(this.paddingLeft, x);
                    return {
                      width: this.width,
                      height: this.height,
                      x: this.bBox.x - y,
                      y: this.bBox.y - x,
                    };
                  }
                  getCrispAdjust() {
                    return this.renderer.styledMode && this.box
                      ? (this.box.strokeWidth() % 2) / 2
                      : ((this["stroke-width"]
                          ? parseInt(this["stroke-width"], 10)
                          : 0) %
                          2) /
                          2;
                  }
                  heightSetter(x) {
                    this.heightSetting = x;
                  }
                  onAdd() {
                    this.text.add(this),
                      this.attr({
                        text: nt(this.textStr, ""),
                        x: this.x || 0,
                        y: this.y || 0,
                      }),
                      this.box &&
                        j(this.anchorX) &&
                        this.attr({
                          anchorX: this.anchorX,
                          anchorY: this.anchorY,
                        });
                  }
                  paddingSetter(x, y) {
                    et(x)
                      ? x !== this[y] &&
                        ((this[y] = x), this.updateTextPadding())
                      : (this[y] = void 0);
                  }
                  rSetter(x, y) {
                    this.boxAttr(y, x);
                  }
                  strokeSetter(x, y) {
                    (this.stroke = x), this.boxAttr(y, x);
                  }
                  "stroke-widthSetter"(x, y) {
                    x && (this.needsBox = !0),
                      (this["stroke-width"] = x),
                      this.boxAttr(y, x);
                  }
                  "text-alignSetter"(x) {
                    this.textAlign = x;
                  }
                  textSetter(x) {
                    typeof x < "u" && this.text.attr({ text: x }),
                      this.updateTextPadding();
                  }
                  updateBoxSize() {
                    var x = this.text;
                    const y = {},
                      P = this.padding,
                      k = (this.bBox =
                        (et(this.widthSetting) &&
                          et(this.heightSetting) &&
                          !this.textAlign) ||
                        !j(x.textStr)
                          ? H.emptyBBox
                          : x.getBBox());
                    (this.width = this.getPaddedWidth()),
                      (this.height =
                        (this.heightSetting || k.height || 0) + 2 * P);
                    const p = this.renderer.fontMetrics(x);
                    (this.baselineOffset =
                      P +
                      Math.min(
                        (this.text.firstLineMetrics || p).b,
                        k.height || 1 / 0
                      )),
                      this.heightSetting &&
                        (this.baselineOffset += (this.heightSetting - p.h) / 2),
                      this.needsBox &&
                        !x.textPath &&
                        (this.box ||
                          ((x = this.box =
                            this.symbolKey
                              ? this.renderer.symbol(this.symbolKey)
                              : this.renderer.rect()).addClass(
                            ("button" === this.className
                              ? ""
                              : "highcharts-label-box") +
                              (this.className
                                ? " highcharts-" + this.className + "-box"
                                : "")
                          ),
                          x.add(this)),
                        (x = this.getCrispAdjust()),
                        (y.x = x),
                        (y.y = (this.baseline ? -this.baselineOffset : 0) + x),
                        (y.width = Math.round(this.width)),
                        (y.height = Math.round(this.height)),
                        this.box.attr(tt(y, this.deferredAttr)),
                        (this.deferredAttr = {}));
                  }
                  updateTextPadding() {
                    const x = this.text;
                    if (!x.textPath) {
                      this.updateBoxSize();
                      const y = this.baseline ? 0 : this.baselineOffset;
                      let P = nt(this.paddingLeft, this.padding);
                      j(this.widthSetting) &&
                        this.bBox &&
                        ("center" === this.textAlign ||
                          "right" === this.textAlign) &&
                        (P +=
                          { center: 0.5, right: 1 }[this.textAlign] *
                          (this.widthSetting - this.bBox.width)),
                        (P !== x.x || y !== x.y) &&
                          (x.attr("x", P),
                          x.hasBoxWidthChanged && (this.bBox = x.getBBox(!0)),
                          typeof y < "u" && x.attr("y", y)),
                        (x.x = P),
                        (x.y = y);
                    }
                  }
                  widthSetter(x) {
                    this.widthSetting = et(x) ? x : void 0;
                  }
                  getPaddedWidth() {
                    var x = this.padding;
                    const y = nt(this.paddingLeft, x);
                    return (
                      (x = nt(this.paddingRight, x)),
                      (this.widthSetting || this.bBox.width || 0) + y + x
                    );
                  }
                  xSetter(x) {
                    (this.x = x),
                      this.alignFactor &&
                        ((x -= this.alignFactor * this.getPaddedWidth()),
                        (this["forceAnimate:x"] = !0)),
                      (this.xSetting = Math.round(x)),
                      this.attr("translateX", this.xSetting);
                  }
                  ySetter(x) {
                    (this.ySetting = this.y = Math.round(x)),
                      this.attr("translateY", this.ySetting);
                  }
                }
                return (
                  (H.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }),
                  (H.textProps =
                    "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow whiteSpace width".split(
                      " "
                    )),
                  H
                );
              }
            ),
            ut(
              t,
              "Core/Renderer/SVG/Symbols.js",
              [t["Core/Utilities.js"]],
              function (F) {
                function Y(I, H, N, x, y) {
                  const P = [];
                  if (y) {
                    const k = y.start || 0,
                      p = nt(y.r, N);
                    (N = nt(y.r, x || N)), (x = (y.end || 0) - 0.001);
                    const v = y.innerR,
                      C = nt(
                        y.open,
                        0.001 > Math.abs((y.end || 0) - k - 2 * Math.PI)
                      ),
                      u = Math.cos(k),
                      A = Math.sin(k),
                      T = Math.cos(x),
                      S = Math.sin(x),
                      l = nt(y.longArc, 0.001 > x - k - Math.PI ? 0 : 1);
                    let h = [
                      "A",
                      p,
                      N,
                      0,
                      l,
                      nt(y.clockwise, 1),
                      I + p * T,
                      H + N * S,
                    ];
                    (h.params = { start: k, end: x, cx: I, cy: H }),
                      P.push(["M", I + p * u, H + N * A], h),
                      et(v) &&
                        ((h = [
                          "A",
                          v,
                          v,
                          0,
                          l,
                          et(y.clockwise) ? 1 - y.clockwise : 0,
                          I + v * u,
                          H + v * A,
                        ]),
                        (h.params = { start: x, end: k, cx: I, cy: H }),
                        P.push(
                          C
                            ? ["M", I + v * T, H + v * S]
                            : ["L", I + v * T, H + v * S],
                          h
                        )),
                      C || P.push(["Z"]);
                  }
                  return P;
                }
                function j(I, H, N, x, y) {
                  return y && y.r
                    ? tt(I, H, N, x, y)
                    : [
                        ["M", I, H],
                        ["L", I + N, H],
                        ["L", I + N, H + x],
                        ["L", I, H + x],
                        ["Z"],
                      ];
                }
                function tt(I, H, N, x, y) {
                  return [
                    ["M", I + (y = y?.r || 0), H],
                    ["L", I + N - y, H],
                    ["A", y, y, 0, 0, 1, I + N, H + y],
                    ["L", I + N, H + x - y],
                    ["A", y, y, 0, 0, 1, I + N - y, H + x],
                    ["L", I + y, H + x],
                    ["A", y, y, 0, 0, 1, I, H + x - y],
                    ["L", I, H + y],
                    ["A", y, y, 0, 0, 1, I + y, H],
                    ["Z"],
                  ];
                }
                const { defined: et, isNumber: st, pick: nt } = F;
                return {
                  arc: Y,
                  callout: function (I, H, N, x, y) {
                    const P = Math.min((y && y.r) || 0, N, x),
                      k = P + 6,
                      p = y && y.anchorX;
                    y = (y && y.anchorY) || 0;
                    const v = tt(I, H, N, x, { r: P });
                    return (
                      st(p) &&
                        (I + p >= N
                          ? y > H + k && y < H + x - k
                            ? v.splice(
                                3,
                                1,
                                ["L", I + N, y - 6],
                                ["L", I + N + 6, y],
                                ["L", I + N, y + 6],
                                ["L", I + N, H + x - P]
                              )
                            : v.splice(
                                3,
                                1,
                                ["L", I + N, x / 2],
                                ["L", p, y],
                                ["L", I + N, x / 2],
                                ["L", I + N, H + x - P]
                              )
                          : 0 >= I + p
                          ? y > H + k && y < H + x - k
                            ? v.splice(
                                7,
                                1,
                                ["L", I, y + 6],
                                ["L", I - 6, y],
                                ["L", I, y - 6],
                                ["L", I, H + P]
                              )
                            : v.splice(
                                7,
                                1,
                                ["L", I, x / 2],
                                ["L", p, y],
                                ["L", I, x / 2],
                                ["L", I, H + P]
                              )
                          : y && y > x && p > I + k && p < I + N - k
                          ? v.splice(
                              5,
                              1,
                              ["L", p + 6, H + x],
                              ["L", p, H + x + 6],
                              ["L", p - 6, H + x],
                              ["L", I + P, H + x]
                            )
                          : y &&
                            0 > y &&
                            p > I + k &&
                            p < I + N - k &&
                            v.splice(
                              1,
                              1,
                              ["L", p - 6, H],
                              ["L", p, H - 6],
                              ["L", p + 6, H],
                              ["L", N - P, H]
                            )),
                      v
                    );
                  },
                  circle: function (I, H, N, x) {
                    return Y(I + N / 2, H + x / 2, N / 2, x / 2, {
                      start: 0.5 * Math.PI,
                      end: 2.5 * Math.PI,
                      open: !1,
                    });
                  },
                  diamond: function (I, H, N, x) {
                    return [
                      ["M", I + N / 2, H],
                      ["L", I + N, H + x / 2],
                      ["L", I + N / 2, H + x],
                      ["L", I, H + x / 2],
                      ["Z"],
                    ];
                  },
                  rect: j,
                  roundedRect: tt,
                  square: j,
                  triangle: function (I, H, N, x) {
                    return [
                      ["M", I + N / 2, H],
                      ["L", I + N, H + x],
                      ["L", I, H + x],
                      ["Z"],
                    ];
                  },
                  "triangle-down": function (I, H, N, x) {
                    return [
                      ["M", I, H],
                      ["L", I + N, H],
                      ["L", I + N / 2, H + x],
                      ["Z"],
                    ];
                  },
                };
              }
            ),
            ut(
              t,
              "Core/Renderer/SVG/TextBuilder.js",
              [
                t["Core/Renderer/HTML/AST.js"],
                t["Core/Globals.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j) {
                const { doc: tt, SVG_NS: et, win: st } = Y,
                  {
                    attr: nt,
                    extend: I,
                    fireEvent: H,
                    isString: N,
                    objectEach: x,
                    pick: y,
                  } = j;
                return class P {
                  constructor(p) {
                    const v = p.styles;
                    (this.renderer = p.renderer),
                      (this.svgElement = p),
                      (this.width = p.textWidth),
                      (this.textLineHeight = v && v.lineHeight),
                      (this.textOutline = v && v.textOutline),
                      (this.ellipsis = !(!v || "ellipsis" !== v.textOverflow)),
                      (this.noWrap = !(!v || "nowrap" !== v.whiteSpace));
                  }
                  buildSVG() {
                    const p = this.svgElement,
                      v = p.element;
                    var C = p.renderer,
                      u = y(p.textStr, "").toString();
                    const A = -1 !== u.indexOf("<"),
                      T = v.childNodes;
                    C = !p.added && C.box;
                    const S = /<br.*?>/g;
                    var l = [
                      u,
                      this.ellipsis,
                      this.noWrap,
                      this.textLineHeight,
                      this.textOutline,
                      p.getStyle("font-size"),
                      this.width,
                    ].join();
                    if (l !== p.textCache) {
                      for (
                        p.textCache = l, delete p.actualWidth, l = T.length;
                        l--;

                      )
                        v.removeChild(T[l]);
                      A ||
                      this.ellipsis ||
                      this.width ||
                      p.textPath ||
                      (-1 !== u.indexOf(" ") && (!this.noWrap || S.test(u)))
                        ? "" !== u &&
                          (C && C.appendChild(v),
                          (u = new F(u)),
                          this.modifyTree(u.nodes),
                          u.addToDOM(v),
                          this.modifyDOM(),
                          this.ellipsis &&
                            -1 !== (v.textContent || "").indexOf("\u2026") &&
                            p.attr(
                              "title",
                              this.unescapeEntities(p.textStr || "", [
                                "&lt;",
                                "&gt;",
                              ])
                            ),
                          C && C.removeChild(v))
                        : v.appendChild(
                            tt.createTextNode(this.unescapeEntities(u))
                          ),
                        N(this.textOutline) &&
                          p.applyTextOutline &&
                          p.applyTextOutline(this.textOutline);
                    }
                  }
                  modifyDOM() {
                    const p = this.svgElement,
                      v = nt(p.element, "x");
                    let C;
                    for (
                      p.firstLineMetrics = void 0;
                      (C = p.element.firstChild) &&
                      /^[\s\u200B]*$/.test(C.textContent || " ");

                    )
                      p.element.removeChild(C);
                    [].forEach.call(
                      p.element.querySelectorAll("tspan.highcharts-br"),
                      (S, l) => {
                        S.nextSibling &&
                          S.previousSibling &&
                          (0 === l &&
                            1 === S.previousSibling.nodeType &&
                            (p.firstLineMetrics = p.renderer.fontMetrics(
                              S.previousSibling
                            )),
                          nt(S, {
                            dy: this.getLineHeight(S.nextSibling),
                            x: v,
                          }));
                      }
                    );
                    const u = this.width || 0;
                    if (u) {
                      var A = (S, l) => {
                          var h = S.textContent || "";
                          const m = h.replace(/([^\^])-/g, "$1- ").split(" ");
                          var c =
                            !this.noWrap &&
                            (1 < m.length || 1 < p.element.childNodes.length);
                          const g = this.getLineHeight(l);
                          let i = 0,
                            e = p.actualWidth;
                          if (this.ellipsis)
                            h &&
                              this.truncate(
                                S,
                                h,
                                void 0,
                                0,
                                Math.max(0, u - 0.8 * g),
                                (s, a) => s.substring(0, a) + "\u2026"
                              );
                          else if (c) {
                            for (
                              h = [], c = [];
                              l.firstChild && l.firstChild !== S;

                            )
                              c.push(l.firstChild), l.removeChild(l.firstChild);
                            for (; m.length; )
                              m.length &&
                                !this.noWrap &&
                                0 < i &&
                                (h.push(S.textContent || ""),
                                (S.textContent = m
                                  .join(" ")
                                  .replace(/- /g, "-"))),
                                this.truncate(
                                  S,
                                  void 0,
                                  m,
                                  (0 === i && e) || 0,
                                  u,
                                  (s, a) =>
                                    m.slice(0, a).join(" ").replace(/- /g, "-")
                                ),
                                (e = p.actualWidth),
                                i++;
                            c.forEach((s) => {
                              l.insertBefore(s, S);
                            }),
                              h.forEach((s) => {
                                l.insertBefore(tt.createTextNode(s), S),
                                  ((s = tt.createElementNS(
                                    et,
                                    "tspan"
                                  )).textContent = "\u200b"),
                                  nt(s, { dy: g, x: v }),
                                  l.insertBefore(s, S);
                              });
                          }
                        },
                        T = (S) => {
                          [].slice.call(S.childNodes).forEach((l) => {
                            l.nodeType === st.Node.TEXT_NODE
                              ? A(l, S)
                              : (-1 !==
                                  l.className.baseVal.indexOf(
                                    "highcharts-br"
                                  ) && (p.actualWidth = 0),
                                T(l));
                          });
                        };
                      T(p.element);
                    }
                  }
                  getLineHeight(p) {
                    return (
                      (p =
                        p.nodeType === st.Node.TEXT_NODE ? p.parentElement : p),
                      this.textLineHeight
                        ? parseInt(this.textLineHeight.toString(), 10)
                        : this.renderer.fontMetrics(
                            p || this.svgElement.element
                          ).h
                    );
                  }
                  modifyTree(p) {
                    const v = (C, u) => {
                      const {
                          attributes: A = {},
                          children: T,
                          style: S = {},
                          tagName: l,
                        } = C,
                        h = this.renderer.styledMode;
                      "b" === l || "strong" === l
                        ? h
                          ? (A.class = "highcharts-strong")
                          : (S.fontWeight = "bold")
                        : ("i" === l || "em" === l) &&
                          (h
                            ? (A.class = "highcharts-emphasized")
                            : (S.fontStyle = "italic")),
                        S && S.color && (S.fill = S.color),
                        "br" === l
                          ? ((A.class = "highcharts-br"),
                            (C.textContent = "\u200b"),
                            (u = p[u + 1]) &&
                              u.textContent &&
                              (u.textContent = u.textContent.replace(
                                /^ +/gm,
                                ""
                              )))
                          : "a" === l &&
                            T &&
                            T.some((m) => "#text" === m.tagName) &&
                            (C.children = [{ children: T, tagName: "tspan" }]),
                        "#text" !== l && "a" !== l && (C.tagName = "tspan"),
                        I(C, { attributes: A, style: S }),
                        T && T.filter((m) => "#text" !== m.tagName).forEach(v);
                    };
                    p.forEach(v),
                      H(this.svgElement, "afterModifyTree", { nodes: p });
                  }
                  truncate(p, v, C, u, A, T) {
                    const S = this.svgElement,
                      { rotation: l } = S,
                      h = [];
                    let i,
                      e,
                      m = C ? 1 : 0,
                      c = (v || C || "").length,
                      g = c;
                    const s = function (a, d) {
                      if (
                        ((a = d || a),
                        (d = p.parentNode) &&
                          typeof h[a] > "u" &&
                          d.getSubStringLength)
                      )
                        try {
                          h[a] = u + d.getSubStringLength(0, C ? a + 1 : a);
                        } catch {}
                      return h[a];
                    };
                    if (
                      ((S.rotation = 0),
                      (e = s(p.textContent.length)),
                      u + e > A)
                    ) {
                      for (; m <= c; )
                        (g = Math.ceil((m + c) / 2)),
                          C && (i = T(C, g)),
                          (e = s(g, i && i.length - 1)),
                          m === c ? (m = c + 1) : e > A ? (c = g - 1) : (m = g);
                      0 === c
                        ? (p.textContent = "")
                        : (v && c === v.length - 1) ||
                          (p.textContent = i || T(v || C, g));
                    }
                    C && C.splice(0, g), (S.actualWidth = e), (S.rotation = l);
                  }
                  unescapeEntities(p, v) {
                    return (
                      x(this.renderer.escapes, function (C, u) {
                        (v && -1 !== v.indexOf(C)) ||
                          (p = p.toString().replace(new RegExp(C, "g"), u));
                      }),
                      p
                    );
                  }
                };
              }
            ),
            ut(
              t,
              "Core/Renderer/SVG/SVGRenderer.js",
              [
                t["Core/Renderer/HTML/AST.js"],
                t["Core/Color/Color.js"],
                t["Core/Globals.js"],
                t["Core/Renderer/RendererRegistry.js"],
                t["Core/Renderer/SVG/SVGElement.js"],
                t["Core/Renderer/SVG/SVGLabel.js"],
                t["Core/Renderer/SVG/Symbols.js"],
                t["Core/Renderer/SVG/TextBuilder.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j, tt, et, st, nt, I, H) {
                const {
                    charts: N,
                    deg2rad: x,
                    doc: y,
                    isFirefox: P,
                    isMS: k,
                    isWebKit: p,
                    noop: v,
                    SVG_NS: C,
                    symbolSizes: u,
                    win: A,
                  } = j,
                  {
                    addEvent: T,
                    attr: S,
                    createElement: l,
                    css: h,
                    defined: m,
                    destroyObjectProperties: c,
                    extend: g,
                    isArray: i,
                    isNumber: e,
                    isObject: s,
                    isString: a,
                    merge: d,
                    pick: E,
                    pInt: o,
                    uniqueKey: M,
                  } = H;
                let Z;
                class K {
                  constructor(L, n, z, b, D, J, r) {
                    (this.width =
                      this.url =
                      this.style =
                      this.imgCount =
                      this.height =
                      this.gradients =
                      this.globalAnimation =
                      this.defs =
                      this.chartIndex =
                      this.cacheKeys =
                      this.cache =
                      this.boxWrapper =
                      this.box =
                      this.alignedObjects =
                        void 0),
                      this.init(L, n, z, b, D, J, r);
                  }
                  init(L, n, z, b, D, J, r) {
                    const f = this.createElement("svg").attr({
                        version: "1.1",
                        class: "highcharts-root",
                      }),
                      _ = f.element;
                    let B;
                    r || f.css(this.getStyle(b)),
                      L.appendChild(_),
                      S(L, "dir", "ltr"),
                      -1 === L.innerHTML.indexOf("xmlns") &&
                        S(_, "xmlns", this.SVG_NS),
                      (this.box = _),
                      (this.boxWrapper = f),
                      (this.alignedObjects = []),
                      (this.url = this.getReferenceURL()),
                      this.createElement("desc")
                        .add()
                        .element.appendChild(
                          y.createTextNode("Created with Highcharts 11.1.0")
                        ),
                      (this.defs = this.createElement("defs").add()),
                      (this.allowHTML = J),
                      (this.forExport = D),
                      (this.styledMode = r),
                      (this.gradients = {}),
                      (this.cache = {}),
                      (this.cacheKeys = []),
                      (this.imgCount = 0),
                      (this.rootFontSize = f.getStyle("font-size")),
                      this.setSize(n, z, !1),
                      P &&
                        L.getBoundingClientRect &&
                        ((n = function () {
                          h(L, { left: 0, top: 0 }),
                            (B = L.getBoundingClientRect()),
                            h(L, {
                              left: Math.ceil(B.left) - B.left + "px",
                              top: Math.ceil(B.top) - B.top + "px",
                            });
                        })(),
                        (this.unSubPixelFix = T(A, "resize", n)));
                  }
                  definition(L) {
                    return new F([L]).addToDOM(this.defs.element);
                  }
                  getReferenceURL() {
                    if ((P || p) && y.getElementsByTagName("base").length) {
                      if (!m(Z)) {
                        var L = M();
                        (L = new F([
                          {
                            tagName: "svg",
                            attributes: { width: 8, height: 8 },
                            children: [
                              {
                                tagName: "defs",
                                children: [
                                  {
                                    tagName: "clipPath",
                                    attributes: { id: L },
                                    children: [
                                      {
                                        tagName: "rect",
                                        attributes: { width: 4, height: 4 },
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                tagName: "rect",
                                attributes: {
                                  id: "hitme",
                                  width: 8,
                                  height: 8,
                                  "clip-path": `url(#${L})`,
                                  fill: "rgba(0,0,0,0.001)",
                                },
                              },
                            ],
                          },
                        ]).addToDOM(y.body)),
                          h(L, {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 9e5,
                          });
                        const n = y.elementFromPoint(6, 6);
                        (Z = "hitme" === (n && n.id)), y.body.removeChild(L);
                      }
                      if (Z)
                        return A.location.href
                          .split("#")[0]
                          .replace(/<[^>]*>/g, "")
                          .replace(/([\('\)])/g, "\\$1")
                          .replace(/ /g, "%20");
                    }
                    return "";
                  }
                  getStyle(L) {
                    return (this.style = g(
                      {
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: "1rem",
                      },
                      L
                    ));
                  }
                  setStyle(L) {
                    this.boxWrapper.css(this.getStyle(L));
                  }
                  isHidden() {
                    return !this.boxWrapper.getBBox().width;
                  }
                  destroy() {
                    const L = this.defs;
                    return (
                      (this.box = null),
                      (this.boxWrapper = this.boxWrapper.destroy()),
                      c(this.gradients || {}),
                      (this.gradients = null),
                      (this.defs = L.destroy()),
                      this.unSubPixelFix && this.unSubPixelFix(),
                      (this.alignedObjects = null)
                    );
                  }
                  createElement(L) {
                    const n = new this.Element();
                    return n.init(this, L), n;
                  }
                  getRadialAttr(L, n) {
                    return {
                      cx: L[0] - L[2] / 2 + (n.cx || 0) * L[2],
                      cy: L[1] - L[2] / 2 + (n.cy || 0) * L[2],
                      r: (n.r || 0) * L[2],
                    };
                  }
                  shadowDefinition(L) {
                    const n = [
                        `highcharts-drop-shadow-${this.chartIndex}`,
                        ...Object.keys(L).map((b) => L[b]),
                      ]
                        .join("-")
                        .replace(/[^a-z0-9\-]/g, ""),
                      z = d(
                        {
                          color: "#000000",
                          offsetX: 1,
                          offsetY: 1,
                          opacity: 0.15,
                          width: 5,
                        },
                        L
                      );
                    return (
                      this.defs.element.querySelector(`#${n}`) ||
                        this.definition({
                          tagName: "filter",
                          attributes: { id: n },
                          children: [
                            {
                              tagName: "feDropShadow",
                              attributes: {
                                dx: z.offsetX,
                                dy: z.offsetY,
                                "flood-color": z.color,
                                "flood-opacity": Math.min(5 * z.opacity, 1),
                                stdDeviation: z.width / 2,
                              },
                            },
                          ],
                        }),
                      n
                    );
                  }
                  buildText(L) {
                    new I(L).buildSVG();
                  }
                  getContrast(L) {
                    return 1.05 /
                      (0.05 +
                        (L =
                          0.2126 *
                            (L = Y.parse(L).rgba.map((n) =>
                              0.03928 >= (n /= 255)
                                ? n / 12.92
                                : Math.pow((n + 0.055) / 1.055, 2.4)
                            ))[0] +
                          0.7152 * L[1] +
                          0.0722 * L[2])) >
                      (L + 0.05) / 0.05
                      ? "#FFFFFF"
                      : "#000000";
                  }
                  button(L, n, z, b, D = {}, J, r, f, _, B) {
                    const W = this.label(
                        L,
                        n,
                        z,
                        _,
                        void 0,
                        void 0,
                        B,
                        void 0,
                        "button"
                      ),
                      R = this.styledMode;
                    L = D.states || {};
                    let V = 0;
                    delete (D = d(D)).states;
                    const q = d(
                      {
                        color: "#333333",
                        cursor: "pointer",
                        fontSize: "0.8em",
                        fontWeight: "normal",
                      },
                      D.style
                    );
                    delete D.style;
                    let lt,
                      gt,
                      w,
                      it = F.filterUserAttributes(D);
                    return (
                      W.attr(d({ padding: 8, r: 2 }, it)),
                      R ||
                        ((it = d(
                          {
                            fill: "#f7f7f7",
                            stroke: "#cccccc",
                            "stroke-width": 1,
                          },
                          it
                        )),
                        (J = d(
                          it,
                          { fill: "#e6e6e6" },
                          F.filterUserAttributes(J || L.hover || {})
                        )),
                        (lt = J.style),
                        delete J.style,
                        (r = d(
                          it,
                          {
                            fill: "#e6e9ff",
                            style: { color: "#000000", fontWeight: "bold" },
                          },
                          F.filterUserAttributes(r || L.select || {})
                        )),
                        (gt = r.style),
                        delete r.style,
                        (f = d(
                          it,
                          { style: { color: "#cccccc" } },
                          F.filterUserAttributes(f || L.disabled || {})
                        )),
                        (w = f.style),
                        delete f.style),
                      T(W.element, k ? "mouseover" : "mouseenter", function () {
                        3 !== V && W.setState(1);
                      }),
                      T(W.element, k ? "mouseout" : "mouseleave", function () {
                        3 !== V && W.setState(V);
                      }),
                      (W.setState = function (O) {
                        1 !== O && (W.state = V = O),
                          W.removeClass(
                            /highcharts-button-(normal|hover|pressed|disabled)/
                          ).addClass(
                            "highcharts-button-" +
                              ["normal", "hover", "pressed", "disabled"][O || 0]
                          ),
                          R ||
                            (W.attr([it, J, r, f][O || 0]),
                            s((O = [q, lt, gt, w][O || 0])) && W.css(O));
                      }),
                      R ||
                        (W.attr(it).css(g({ cursor: "default" }, q)),
                        B && W.text.css({ pointerEvents: "none" })),
                      W.on("touchstart", (O) => O.stopPropagation()).on(
                        "click",
                        function (O) {
                          3 !== V && b.call(W, O);
                        }
                      )
                    );
                  }
                  crispLine(L, n, z = "round") {
                    const b = L[0],
                      D = L[1];
                    return (
                      m(b[1]) &&
                        b[1] === D[1] &&
                        (b[1] = D[1] = Math[z](b[1]) - (n % 2) / 2),
                      m(b[2]) &&
                        b[2] === D[2] &&
                        (b[2] = D[2] = Math[z](b[2]) + (n % 2) / 2),
                      L
                    );
                  }
                  path(L) {
                    const n = this.styledMode ? {} : { fill: "none" };
                    return (
                      i(L) ? (n.d = L) : s(L) && g(n, L),
                      this.createElement("path").attr(n)
                    );
                  }
                  circle(L, n, z) {
                    return (
                      (L = s(L)
                        ? L
                        : typeof L > "u"
                        ? {}
                        : { x: L, y: n, r: z }),
                      ((n = this.createElement("circle")).xSetter = n.ySetter =
                        function (b, D, J) {
                          J.setAttribute("c" + D, b);
                        }),
                      n.attr(L)
                    );
                  }
                  arc(L, n, z, b, D, J) {
                    return (
                      s(L)
                        ? ((n = (b = L).y), (z = b.r), (L = b.x))
                        : (b = { innerR: b, start: D, end: J }),
                      ((L = this.symbol("arc", L, n, z, z, b)).r = z),
                      L
                    );
                  }
                  rect(L, n, z, b, D, J) {
                    L = s(L)
                      ? L
                      : typeof L > "u"
                      ? {}
                      : {
                          x: L,
                          y: n,
                          r: D,
                          width: Math.max(z || 0, 0),
                          height: Math.max(b || 0, 0),
                        };
                    const r = this.createElement("rect");
                    return (
                      this.styledMode ||
                        (typeof J < "u" &&
                          ((L["stroke-width"] = J), g(L, r.crisp(L))),
                        (L.fill = "none")),
                      (r.rSetter = function (f, _, B) {
                        (r.r = f), S(B, { rx: f, ry: f });
                      }),
                      (r.rGetter = function () {
                        return r.r || 0;
                      }),
                      r.attr(L)
                    );
                  }
                  roundedRect(L) {
                    return this.symbol("roundedRect").attr(L);
                  }
                  setSize(L, n, z) {
                    (this.width = L),
                      (this.height = n),
                      this.boxWrapper.animate(
                        { width: L, height: n },
                        {
                          step: function () {
                            this.attr({
                              viewBox:
                                "0 0 " +
                                this.attr("width") +
                                " " +
                                this.attr("height"),
                            });
                          },
                          duration: E(z, !0) ? void 0 : 0,
                        }
                      ),
                      this.alignElements();
                  }
                  g(L) {
                    const n = this.createElement("g");
                    return L ? n.attr({ class: "highcharts-" + L }) : n;
                  }
                  image(L, n, z, b, D, J) {
                    const r = { preserveAspectRatio: "none" };
                    e(n) && (r.x = n),
                      e(z) && (r.y = z),
                      e(b) && (r.width = b),
                      e(D) && (r.height = D);
                    const f = this.createElement("image").attr(r);
                    return (
                      (n = function (_) {
                        f.attr({ href: L }), J.call(f, _);
                      }),
                      J
                        ? (f.attr({
                            href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                          }),
                          (z = new A.Image()),
                          T(z, "load", n),
                          (z.src = L),
                          z.complete && n({}))
                        : f.attr({ href: L }),
                      f
                    );
                  }
                  symbol(L, n, z, b, D, J) {
                    const r = this,
                      f = /^url\((.*?)\)$/,
                      _ = f.test(L),
                      B = !_ && (this.symbols[L] ? L : "circle"),
                      W = B && this.symbols[B];
                    let R, V, q, it;
                    if (W)
                      "number" == typeof n &&
                        (V = W.call(
                          this.symbols,
                          Math.round(n || 0),
                          Math.round(z || 0),
                          b || 0,
                          D || 0,
                          J
                        )),
                        (R = this.path(V)),
                        r.styledMode || R.attr("fill", "none"),
                        g(R, {
                          symbolName: B || void 0,
                          x: n,
                          y: z,
                          width: b,
                          height: D,
                        }),
                        J && g(R, J);
                    else if (_) {
                      q = L.match(f)[1];
                      const lt = (R = this.image(q));
                      (lt.imgwidth = E(J && J.width, u[q] && u[q].width)),
                        (lt.imgheight = E(J && J.height, u[q] && u[q].height)),
                        (it = (gt) =>
                          gt.attr({ width: gt.width, height: gt.height })),
                        ["width", "height"].forEach(function (gt) {
                          lt[gt + "Setter"] = function (w, O) {
                            this[O] = w;
                            const {
                              alignByTranslate: Q,
                              element: G,
                              width: X,
                              height: ct,
                              imgwidth: ht,
                              imgheight: Tt,
                            } = this;
                            if (m((w = this["img" + O]))) {
                              let Ct = 1;
                              J && "within" === J.backgroundSize && X && ct
                                ? ((Ct = Math.min(X / ht, ct / Tt)),
                                  S(G, {
                                    width: Math.round(ht * Ct),
                                    height: Math.round(Tt * Ct),
                                  }))
                                : G && G.setAttribute(O, w),
                                Q ||
                                  this.translate(
                                    ((X || 0) - ht * Ct) / 2,
                                    ((ct || 0) - Tt * Ct) / 2
                                  );
                            }
                          };
                        }),
                        m(n) && lt.attr({ x: n, y: z }),
                        (lt.isImg = !0),
                        m(lt.imgwidth) && m(lt.imgheight)
                          ? it(lt)
                          : (lt.attr({ width: 0, height: 0 }),
                            l("img", {
                              onload: function () {
                                const gt = N[r.chartIndex];
                                0 === this.width &&
                                  (h(this, {
                                    position: "absolute",
                                    top: "-999em",
                                  }),
                                  y.body.appendChild(this)),
                                  (u[q] = {
                                    width: this.width,
                                    height: this.height,
                                  }),
                                  (lt.imgwidth = this.width),
                                  (lt.imgheight = this.height),
                                  lt.element && it(lt),
                                  this.parentNode &&
                                    this.parentNode.removeChild(this),
                                  r.imgCount--,
                                  !r.imgCount &&
                                    gt &&
                                    !gt.hasLoaded &&
                                    gt.onload();
                              },
                              src: q,
                            }),
                            this.imgCount++);
                    }
                    return R;
                  }
                  clipRect(L, n, z, b) {
                    const D = M() + "-",
                      J = this.createElement("clipPath")
                        .attr({ id: D })
                        .add(this.defs);
                    return (
                      ((L = this.rect(L, n, z, b, 0).add(J)).id = D),
                      (L.clipPath = J),
                      (L.count = 0),
                      L
                    );
                  }
                  text(L, n, z, b) {
                    const D = {};
                    return !b || (!this.allowHTML && this.forExport)
                      ? ((D.x = Math.round(n || 0)),
                        z && (D.y = Math.round(z)),
                        m(L) && (D.text = L),
                        (L = this.createElement("text").attr(D)),
                        (!b || (this.forExport && !this.allowHTML)) &&
                          (L.xSetter = function (J, r, f) {
                            const _ = f.getElementsByTagName("tspan"),
                              B = f.getAttribute(r);
                            for (let R, W = 0; W < _.length; W++)
                              (R = _[W]),
                                R.getAttribute(r) === B && R.setAttribute(r, J);
                            f.setAttribute(r, J);
                          }),
                        L)
                      : this.html(L, n, z);
                  }
                  fontMetrics(L) {
                    const n =
                      24 >
                      (L = o(et.prototype.getStyle.call(L, "font-size") || 0))
                        ? L + 3
                        : Math.round(1.2 * L);
                    return { h: n, b: Math.round(0.8 * n), f: L };
                  }
                  rotCorr(L, n, z) {
                    let b = L;
                    return (
                      n && z && (b = Math.max(b * Math.cos(n * x), 4)),
                      { x: (-L / 3) * Math.sin(n * x), y: b }
                    );
                  }
                  pathToSegments(L) {
                    const n = [],
                      z = [],
                      b = {
                        A: 8,
                        C: 7,
                        H: 2,
                        L: 3,
                        M: 3,
                        Q: 5,
                        S: 5,
                        T: 3,
                        V: 2,
                      };
                    for (let D = 0; D < L.length; D++)
                      a(z[0]) &&
                        e(L[D]) &&
                        z.length === b[z[0].toUpperCase()] &&
                        L.splice(
                          D,
                          0,
                          z[0].replace("M", "L").replace("m", "l")
                        ),
                        "string" == typeof L[D] &&
                          (z.length && n.push(z.slice(0)), (z.length = 0)),
                        z.push(L[D]);
                    return n.push(z.slice(0)), n;
                  }
                  label(L, n, z, b, D, J, r, f, _) {
                    return new st(this, L, n, z, b, D, J, r, f, _);
                  }
                  alignElements() {
                    this.alignedObjects.forEach((L) => L.align());
                  }
                }
                return (
                  g(K.prototype, {
                    Element: et,
                    SVG_NS: C,
                    escapes: {
                      "&": "&amp;",
                      "<": "&lt;",
                      ">": "&gt;",
                      "'": "&#39;",
                      '"': "&quot;",
                    },
                    symbols: nt,
                    draw: v,
                  }),
                  tt.registerRendererType("svg", K, !0),
                  K
                );
              }
            ),
            ut(
              t,
              "Core/Renderer/HTML/HTMLElement.js",
              [
                t["Core/Globals.js"],
                t["Core/Renderer/SVG/SVGElement.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j) {
                const { isFirefox: tt, isMS: et, isWebKit: st, win: nt } = F,
                  { css: I, defined: H, extend: N, pick: x, pInt: y } = j,
                  P = [];
                class k extends Y {
                  static compose(v) {
                    if (j.pushUnique(P, v)) {
                      const C = k.prototype,
                        u = v.prototype;
                      (u.getSpanCorrection = C.getSpanCorrection),
                        (u.htmlCss = C.htmlCss),
                        (u.htmlGetBBox = C.htmlGetBBox),
                        (u.htmlUpdateTransform = C.htmlUpdateTransform),
                        (u.setSpanRotation = C.setSpanRotation);
                    }
                    return v;
                  }
                  getSpanCorrection(v, C, u) {
                    (this.xCorr = -v * u), (this.yCorr = -C);
                  }
                  htmlCss(v) {
                    const C =
                        "SPAN" === this.element.tagName && v && "width" in v,
                      u = x(C && v.width, void 0);
                    let A;
                    return (
                      C && (delete v.width, (this.textWidth = u), (A = !0)),
                      v &&
                        "ellipsis" === v.textOverflow &&
                        ((v.whiteSpace = "nowrap"), (v.overflow = "hidden")),
                      (this.styles = N(this.styles, v)),
                      I(this.element, v),
                      A && this.htmlUpdateTransform(),
                      this
                    );
                  }
                  htmlGetBBox() {
                    const v = this.element;
                    return {
                      x: v.offsetLeft,
                      y: v.offsetTop,
                      width: v.offsetWidth,
                      height: v.offsetHeight,
                    };
                  }
                  htmlUpdateTransform() {
                    if (this.added) {
                      var v = this.renderer,
                        C = this.element,
                        u = this.x || 0,
                        A = this.y || 0,
                        T = this.textAlign || "left",
                        S = { left: 0, center: 0.5, right: 1 }[T],
                        l = this.styles,
                        h = l && l.whiteSpace;
                      if (
                        (I(C, {
                          marginLeft: this.translateX || 0,
                          marginTop: this.translateY || 0,
                        }),
                        "SPAN" === C.tagName)
                      ) {
                        l = this.rotation;
                        const c = this.textWidth && y(this.textWidth),
                          g = [
                            l,
                            T,
                            C.innerHTML,
                            this.textWidth,
                            this.textAlign,
                          ].join();
                        let i = !1;
                        if (c !== this.oldTextWidth) {
                          if (this.textPxLength) var m = this.textPxLength;
                          else
                            I(C, { width: "", whiteSpace: h || "nowrap" }),
                              (m = C.offsetWidth);
                          (c > this.oldTextWidth || m > c) &&
                            (/[ \-]/.test(C.textContent || C.innerText) ||
                              "ellipsis" === C.style.textOverflow) &&
                            (I(C, {
                              width: m > c || l ? c + "px" : "auto",
                              display: "block",
                              whiteSpace: h || "normal",
                            }),
                            (this.oldTextWidth = c),
                            (i = !0));
                        }
                        (this.hasBoxWidthChanged = i),
                          g !== this.cTT &&
                            ((v = v.fontMetrics(C).b),
                            !H(l) ||
                              (l === (this.oldRotation || 0) &&
                                T === this.oldAlign) ||
                              this.setSpanRotation(l, S, v),
                            this.getSpanCorrection(
                              (!H(l) && this.textPxLength) || C.offsetWidth,
                              v,
                              S,
                              l,
                              T
                            )),
                          I(C, {
                            left: u + (this.xCorr || 0) + "px",
                            top: A + (this.yCorr || 0) + "px",
                          }),
                          (this.cTT = g),
                          (this.oldRotation = l),
                          (this.oldAlign = T);
                      }
                    } else this.alignOnAdd = !0;
                  }
                  setSpanRotation(v, C, u) {
                    const A = {},
                      T =
                        et && !/Edge/.test(nt.navigator.userAgent)
                          ? "-ms-transform"
                          : st
                          ? "-webkit-transform"
                          : tt
                          ? "MozTransform"
                          : nt.opera
                          ? "-o-transform"
                          : void 0;
                    T &&
                      ((A[T] = A.transform = "rotate(" + v + "deg)"),
                      (A[T + (tt ? "Origin" : "-origin")] = A.transformOrigin =
                        100 * C + "% " + u + "px"),
                      I(this.element, A));
                  }
                }
                return k;
              }
            ),
            ut(
              t,
              "Core/Renderer/HTML/HTMLRenderer.js",
              [
                t["Core/Renderer/HTML/AST.js"],
                t["Core/Renderer/SVG/SVGElement.js"],
                t["Core/Renderer/SVG/SVGRenderer.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j, tt) {
                const { attr: et, createElement: st, extend: nt, pick: I } = tt,
                  H = [];
                class N extends j {
                  static compose(y) {
                    return (
                      tt.pushUnique(H, y) &&
                        (y.prototype.html = N.prototype.html),
                      y
                    );
                  }
                  html(y, P, k) {
                    const p = this.createElement("span"),
                      v = p.element,
                      C = p.renderer,
                      u = function (A, T) {
                        ["opacity", "visibility"].forEach(function (S) {
                          A[S + "Setter"] = function (l, h, m) {
                            const c = A.div ? A.div.style : T;
                            Y.prototype[S + "Setter"].call(this, l, h, m),
                              c && (c[h] = l);
                          };
                        }),
                          (A.addedSetters = !0);
                      };
                    return (
                      (p.textSetter = function (A) {
                        A !== this.textStr &&
                          (delete this.bBox,
                          delete this.oldTextWidth,
                          F.setElementHTML(this.element, I(A, "")),
                          (this.textStr = A),
                          (p.doTransform = !0));
                      }),
                      u(p, p.element.style),
                      (p.xSetter =
                        p.ySetter =
                        p.alignSetter =
                        p.rotationSetter =
                          function (A, T) {
                            "align" === T
                              ? (p.alignValue = p.textAlign = A)
                              : (p[T] = A),
                              (p.doTransform = !0);
                          }),
                      (p.afterSetters = function () {
                        this.doTransform &&
                          (this.htmlUpdateTransform(), (this.doTransform = !1));
                      }),
                      p
                        .attr({ text: y, x: Math.round(P), y: Math.round(k) })
                        .css({ position: "absolute" }),
                      C.styledMode ||
                        p.css({
                          fontFamily: this.style.fontFamily,
                          fontSize: this.style.fontSize,
                        }),
                      (v.style.whiteSpace = "nowrap"),
                      (p.css = p.htmlCss),
                      (p.add = function (A) {
                        const T = C.box.parentNode,
                          S = [];
                        let l;
                        if ((this.parentGroup = A)) {
                          if (((l = A.div), !l)) {
                            for (; A; ) S.push(A), (A = A.parentGroup);
                            S.reverse().forEach(function (h) {
                              function m(e, s) {
                                (h[s] = e),
                                  "translateX" === s
                                    ? (i.left = e + "px")
                                    : (i.top = e + "px"),
                                  (h.doTransform = !0);
                              }
                              const c = et(h.element, "class"),
                                g = h.styles || {};
                              l = h.div =
                                h.div ||
                                st(
                                  "div",
                                  c ? { className: c } : void 0,
                                  {
                                    position: "absolute",
                                    left: (h.translateX || 0) + "px",
                                    top: (h.translateY || 0) + "px",
                                    display: h.display,
                                    opacity: h.opacity,
                                    visibility: h.visibility,
                                  },
                                  l || T
                                );
                              const i = l.style;
                              var e;
                              nt(h, {
                                classSetter:
                                  ((e = l),
                                  function (s) {
                                    this.element.setAttribute("class", s),
                                      (e.className = s);
                                  }),
                                css: function (e) {
                                  return (
                                    p.css.call(h, e),
                                    ["cursor", "pointerEvents"].forEach((s) => {
                                      e[s] && (i[s] = e[s]);
                                    }),
                                    h
                                  );
                                },
                                on: function () {
                                  return (
                                    S[0].div &&
                                      p.on.apply(
                                        {
                                          element: S[0].div,
                                          onEvents: h.onEvents,
                                        },
                                        arguments
                                      ),
                                    h
                                  );
                                },
                                translateXSetter: m,
                                translateYSetter: m,
                              }),
                                h.addedSetters || u(h),
                                h.css(g);
                            });
                          }
                        } else l = T;
                        return (
                          l.appendChild(v),
                          (p.added = !0),
                          p.alignOnAdd && p.htmlUpdateTransform(),
                          p
                        );
                      }),
                      p
                    );
                  }
                }
                return N;
              }
            ),
            ut(t, "Core/Axis/AxisDefaults.js", [], function () {
              var F = (function (Y) {
                return (
                  (Y.defaultXAxisOptions = {
                    alignTicks: !0,
                    allowDecimals: void 0,
                    panningEnabled: !0,
                    zIndex: 2,
                    zoomEnabled: !0,
                    dateTimeLabelFormats: {
                      millisecond: { main: "%H:%M:%S.%L", range: !1 },
                      second: { main: "%H:%M:%S", range: !1 },
                      minute: { main: "%H:%M", range: !1 },
                      hour: { main: "%H:%M", range: !1 },
                      day: { main: "%e %b" },
                      week: { main: "%e %b" },
                      month: { main: "%b '%y" },
                      year: { main: "%Y" },
                    },
                    endOnTick: !1,
                    gridLineDashStyle: "Solid",
                    gridZIndex: 1,
                    labels: {
                      autoRotation: void 0,
                      autoRotationLimit: 80,
                      distance: 15,
                      enabled: !0,
                      indentation: 10,
                      overflow: "justify",
                      padding: 5,
                      reserveSpace: void 0,
                      rotation: void 0,
                      staggerLines: 0,
                      step: 0,
                      useHTML: !1,
                      zIndex: 7,
                      style: {
                        color: "#333333",
                        cursor: "default",
                        fontSize: "0.8em",
                      },
                    },
                    maxPadding: 0.01,
                    minorGridLineDashStyle: "Solid",
                    minorTickLength: 2,
                    minorTickPosition: "outside",
                    minorTicksPerMajor: 5,
                    minPadding: 0.01,
                    offset: void 0,
                    opposite: !1,
                    reversed: void 0,
                    reversedStacks: !1,
                    showEmpty: !0,
                    showFirstLabel: !0,
                    showLastLabel: !0,
                    startOfWeek: 1,
                    startOnTick: !1,
                    tickLength: 10,
                    tickPixelInterval: 100,
                    tickmarkPlacement: "between",
                    tickPosition: "outside",
                    title: {
                      align: "middle",
                      rotation: 0,
                      useHTML: !1,
                      x: 0,
                      y: 0,
                      style: { color: "#666666", fontSize: "0.8em" },
                    },
                    type: "linear",
                    uniqueNames: !0,
                    visible: !0,
                    minorGridLineColor: "#f2f2f2",
                    minorGridLineWidth: 1,
                    minorTickColor: "#999999",
                    lineColor: "#333333",
                    lineWidth: 1,
                    gridLineColor: "#e6e6e6",
                    gridLineWidth: void 0,
                    tickColor: "#333333",
                  }),
                  (Y.defaultYAxisOptions = {
                    reversedStacks: !0,
                    endOnTick: !0,
                    maxPadding: 0.05,
                    minPadding: 0.05,
                    tickPixelInterval: 72,
                    showLastLabel: !0,
                    labels: { x: void 0 },
                    startOnTick: !0,
                    title: { rotation: 270, text: "Values" },
                    stackLabels: {
                      animation: {},
                      allowOverlap: !1,
                      enabled: !1,
                      crop: !0,
                      overflow: "justify",
                      formatter: function () {
                        const { numberFormatter: j } = this.axis.chart;
                        return j(this.total || 0, -1);
                      },
                      style: {
                        color: "#000000",
                        fontSize: "0.7em",
                        fontWeight: "bold",
                        textOutline: "1px contrast",
                      },
                    },
                    gridLineWidth: 1,
                    lineWidth: 0,
                  }),
                  (Y.defaultLeftAxisOptions = { title: { rotation: 270 } }),
                  (Y.defaultRightAxisOptions = { title: { rotation: 90 } }),
                  (Y.defaultBottomAxisOptions = {
                    labels: { autoRotation: [-45] },
                    margin: 15,
                    title: { rotation: 0 },
                  }),
                  (Y.defaultTopAxisOptions = {
                    labels: { autoRotation: [-45] },
                    margin: 15,
                    title: { rotation: 0 },
                  }),
                  Y
                );
              })(F || {});
              return F;
            }),
            ut(t, "Core/Foundation.js", [t["Core/Utilities.js"]], function (F) {
              const {
                addEvent: Y,
                isFunction: j,
                objectEach: tt,
                removeEvent: et,
              } = F;
              var st = (function (nt) {
                return (
                  (nt.registerEventOptions = function (I, H) {
                    (I.eventOptions = I.eventOptions || {}),
                      tt(H.events, function (N, x) {
                        I.eventOptions[x] !== N &&
                          (I.eventOptions[x] &&
                            (et(I, x, I.eventOptions[x]),
                            delete I.eventOptions[x]),
                          j(N) &&
                            ((I.eventOptions[x] = N),
                            Y(I, x, N, { order: 0 })));
                      });
                  }),
                  nt
                );
              })(st || {});
              return st;
            }),
            ut(
              t,
              "Core/Axis/Tick.js",
              [
                t["Core/Templating.js"],
                t["Core/Globals.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j) {
                const { deg2rad: tt } = Y,
                  {
                    clamp: et,
                    correctFloat: st,
                    defined: nt,
                    destroyObjectProperties: I,
                    extend: H,
                    fireEvent: N,
                    isNumber: x,
                    merge: y,
                    objectEach: P,
                    pick: k,
                  } = j;
                return class p {
                  constructor(C, u, A, T, S) {
                    (this.isNewLabel = this.isNew = !0),
                      (this.axis = C),
                      (this.pos = u),
                      (this.type = A || ""),
                      (this.parameters = S || {}),
                      (this.tickmarkOffset = this.parameters.tickmarkOffset),
                      (this.options = this.parameters.options),
                      N(this, "init"),
                      A || T || this.addLabel();
                  }
                  addLabel() {
                    const C = this,
                      u = C.axis;
                    var A = u.options;
                    const T = u.chart;
                    var S = u.categories;
                    const l = u.logarithmic,
                      h = u.names,
                      m = C.pos,
                      c = k(C.options && C.options.labels, A.labels);
                    var g = u.tickPositions;
                    const i = m === g[0],
                      e = m === g[g.length - 1],
                      s = (!c.step || 1 === c.step) && 1 === u.tickInterval;
                    g = g.info;
                    let d,
                      E,
                      o,
                      a = C.label;
                    (S =
                      this.parameters.category || (S ? k(S[m], h[m], m) : m)),
                      l && x(S) && (S = st(l.lin2log(S))),
                      u.dateTime &&
                        (g
                          ? ((E = T.time.resolveDTLFormat(
                              A.dateTimeLabelFormats[
                                (!A.grid && g.higherRanks[m]) || g.unitName
                              ]
                            )),
                            (d = E.main))
                          : x(S) &&
                            (d = u.dateTime.getXDateFormat(
                              S,
                              A.dateTimeLabelFormats || {}
                            ))),
                      (C.isFirst = i),
                      (C.isLast = e);
                    const M = {
                      axis: u,
                      chart: T,
                      dateTimeLabelFormat: d,
                      isFirst: i,
                      isLast: e,
                      pos: m,
                      tick: C,
                      tickPositionInfo: g,
                      value: S,
                    };
                    N(this, "labelFormat", M);
                    const Z = ($) =>
                      c.formatter
                        ? c.formatter.call($, $)
                        : c.format
                        ? (($.text = u.defaultLabelFormatter.call($, $)),
                          F.format(c.format, $, T))
                        : u.defaultLabelFormatter.call($, $);
                    A = Z.call(M, M);
                    const K = E && E.list;
                    (C.shortenLabel = K
                      ? function () {
                          for (o = 0; o < K.length; o++)
                            if (
                              (H(M, { dateTimeLabelFormat: K[o] }),
                              a.attr({ text: Z.call(M, M) }),
                              a.getBBox().width <
                                u.getSlotWidth(C) - 2 * c.padding)
                            )
                              return;
                          a.attr({ text: "" });
                        }
                      : void 0),
                      s && u._addedPlotLB && C.moveLabel(A, c),
                      nt(a) || C.movedLabel
                        ? a &&
                          a.textStr !== A &&
                          !s &&
                          (!a.textWidth ||
                            c.style.width ||
                            a.styles.width ||
                            a.css({ width: null }),
                          a.attr({ text: A }),
                          (a.textPxLength = a.getBBox().width))
                        : ((C.label = a = C.createLabel({ x: 0, y: 0 }, A, c)),
                          (C.rotation = 0));
                  }
                  createLabel(C, u, A) {
                    const T = this.axis,
                      S = T.chart;
                    return (
                      (C =
                        nt(u) && A.enabled
                          ? S.renderer
                              .text(u, C.x, C.y, A.useHTML)
                              .add(T.labelGroup)
                          : null) &&
                        (S.styledMode || C.css(y(A.style)),
                        (C.textPxLength = C.getBBox().width)),
                      C
                    );
                  }
                  destroy() {
                    I(this, this.axis);
                  }
                  getPosition(C, u, A, T) {
                    const S = this.axis,
                      l = S.chart,
                      h = (T && l.oldChartHeight) || l.chartHeight;
                    return (
                      ((C = {
                        x: C
                          ? st(S.translate(u + A, void 0, void 0, T) + S.transB)
                          : S.left +
                            S.offset +
                            (S.opposite
                              ? ((T && l.oldChartWidth) || l.chartWidth) -
                                S.right -
                                S.left
                              : 0),
                        y: C
                          ? h -
                            S.bottom +
                            S.offset -
                            (S.opposite ? S.height : 0)
                          : st(
                              h -
                                S.translate(u + A, void 0, void 0, T) -
                                S.transB
                            ),
                      }).y = et(C.y, -1e5, 1e5)),
                      N(this, "afterGetPosition", { pos: C }),
                      C
                    );
                  }
                  getLabelPosition(C, u, A, T, S, l, h, m) {
                    const c = this.axis,
                      g = c.transA,
                      i =
                        c.isLinked && c.linkedParent
                          ? c.linkedParent.reversed
                          : c.reversed,
                      e = c.staggerLines,
                      s = c.tickRotCorr || { x: 0, y: 0 },
                      a =
                        T || c.reserveSpaceDefault
                          ? 0
                          : -c.labelOffset *
                            ("center" === c.labelAlign ? 0.5 : 1),
                      d = S.distance,
                      E = {};
                    return (
                      (A =
                        0 === c.side
                          ? A.rotation
                            ? -d
                            : -A.getBBox().height
                          : 2 === c.side
                          ? s.y + d
                          : Math.cos(A.rotation * tt) *
                            (s.y - A.getBBox(!1, 0).height / 2)),
                      nt(S.y) && (A = 0 === c.side && c.horiz ? S.y + A : S.y),
                      (C =
                        C +
                        k(S.x, [0, 1, 0, -1][c.side] * d) +
                        a +
                        s.x -
                        (l && T ? l * g * (i ? -1 : 1) : 0)),
                      (u = u + A - (l && !T ? l * g * (i ? 1 : -1) : 0)),
                      e &&
                        ((T = (h / (m || 1)) % e),
                        c.opposite && (T = e - T - 1),
                        (u += (c.labelOffset / e) * T)),
                      (E.x = C),
                      (E.y = Math.round(u)),
                      N(this, "afterGetLabelPosition", {
                        pos: E,
                        tickmarkOffset: l,
                        index: h,
                      }),
                      E
                    );
                  }
                  getLabelSize() {
                    return this.label
                      ? this.label.getBBox()[
                          this.axis.horiz ? "height" : "width"
                        ]
                      : 0;
                  }
                  getMarkPath(C, u, A, T, S, l) {
                    return l.crispLine(
                      [
                        ["M", C, u],
                        ["L", C + (S ? 0 : -A), u + (S ? A : 0)],
                      ],
                      T
                    );
                  }
                  handleOverflow(C) {
                    const u = this.axis,
                      A = u.options.labels,
                      T = C.x;
                    var S = u.chart.chartWidth,
                      l = u.chart.spacing;
                    const h = k(u.labelLeft, Math.min(u.pos, l[3]));
                    l = k(
                      u.labelRight,
                      Math.max(u.isRadial ? 0 : u.pos + u.len, S - l[1])
                    );
                    const m = this.label,
                      c = this.rotation,
                      g = { left: 0, center: 0.5, right: 1 }[
                        u.labelAlign || m.attr("align")
                      ],
                      i = m.getBBox().width,
                      e = u.getSlotWidth(this),
                      s = {};
                    let E,
                      a = e,
                      d = 1;
                    c || "justify" !== A.overflow
                      ? 0 > c && T - g * i < h
                        ? (E = Math.round(T / Math.cos(c * tt) - h))
                        : 0 < c &&
                          T + g * i > l &&
                          (E = Math.round((S - T) / Math.cos(c * tt)))
                      : ((S = T + (1 - g) * i),
                        T - g * i < h
                          ? (a = C.x + a * (1 - g) - h)
                          : S > l && ((a = l - C.x + a * g), (d = -1)),
                        (a = Math.min(e, a)),
                        a < e &&
                          "center" === u.labelAlign &&
                          (C.x += d * (e - a - g * (e - Math.min(i, a)))),
                        (i > a || (u.autoRotation && (m.styles || {}).width)) &&
                          (E = a)),
                      E &&
                        (this.shortenLabel
                          ? this.shortenLabel()
                          : ((s.width = Math.floor(E) + "px"),
                            (A.style || {}).textOverflow ||
                              (s.textOverflow = "ellipsis"),
                            m.css(s)));
                  }
                  moveLabel(C, u) {
                    const A = this;
                    var T = A.label;
                    const S = A.axis;
                    let l = !1;
                    T && T.textStr === C
                      ? ((A.movedLabel = T), (l = !0), delete A.label)
                      : P(S.ticks, function (h) {
                          l ||
                            h.isNew ||
                            h === A ||
                            !h.label ||
                            h.label.textStr !== C ||
                            ((A.movedLabel = h.label),
                            (l = !0),
                            (h.labelPos = A.movedLabel.xy),
                            delete h.label);
                        }),
                      l ||
                        (!A.labelPos && !T) ||
                        ((A.movedLabel = A.createLabel(
                          (T = A.labelPos || T.xy),
                          C,
                          u
                        )),
                        A.movedLabel && A.movedLabel.attr({ opacity: 0 }));
                  }
                  render(C, u, A) {
                    var T = this.axis,
                      S = T.horiz,
                      l = this.pos,
                      h = k(this.tickmarkOffset, T.tickmarkOffset);
                    (h = (l = this.getPosition(S, l, h, u)).x),
                      (T =
                        (S && h === T.pos + T.len) || (!S && l.y === T.pos)
                          ? -1
                          : 1),
                      (S = k(A, this.label && this.label.newOpacity, 1)),
                      (A = k(A, 1)),
                      (this.isActive = !0),
                      this.renderGridLine(u, A, T),
                      this.renderMark(l, A, T),
                      this.renderLabel(l, u, S, C),
                      (this.isNew = !1),
                      N(this, "afterRender");
                  }
                  renderGridLine(C, u, A) {
                    const T = this.axis,
                      S = T.options,
                      l = {},
                      h = this.pos,
                      m = this.type,
                      c = k(this.tickmarkOffset, T.tickmarkOffset),
                      g = T.chart.renderer;
                    let i = this.gridLine,
                      e = S.gridLineWidth,
                      s = S.gridLineColor,
                      a = S.gridLineDashStyle;
                    "minor" === this.type &&
                      ((e = S.minorGridLineWidth),
                      (s = S.minorGridLineColor),
                      (a = S.minorGridLineDashStyle)),
                      i ||
                        (T.chart.styledMode ||
                          ((l.stroke = s),
                          (l["stroke-width"] = e || 0),
                          (l.dashstyle = a)),
                        m || (l.zIndex = 1),
                        C && (u = 0),
                        (this.gridLine = i =
                          g
                            .path()
                            .attr(l)
                            .addClass(
                              "highcharts-" + (m ? m + "-" : "") + "grid-line"
                            )
                            .add(T.gridGroup))),
                      i &&
                        (A = T.getPlotLinePath({
                          value: h + c,
                          lineWidth: i.strokeWidth() * A,
                          force: "pass",
                          old: C,
                          acrossPanes: !1,
                        })) &&
                        i[C || this.isNew ? "attr" : "animate"]({
                          d: A,
                          opacity: u,
                        });
                  }
                  renderMark(C, u, A) {
                    const T = this.axis;
                    var S = T.options;
                    const l = T.chart.renderer,
                      h = this.type,
                      m = T.tickSize(h ? h + "Tick" : "tick"),
                      c = C.x;
                    C = C.y;
                    const g = k(
                      S["minor" !== h ? "tickWidth" : "minorTickWidth"],
                      !h && T.isXAxis ? 1 : 0
                    );
                    S = S["minor" !== h ? "tickColor" : "minorTickColor"];
                    let i = this.mark;
                    const e = !i;
                    m &&
                      (T.opposite && (m[0] = -m[0]),
                      i ||
                        ((this.mark = i =
                          l
                            .path()
                            .addClass(
                              "highcharts-" + (h ? h + "-" : "") + "tick"
                            )
                            .add(T.axisGroup)),
                        T.chart.styledMode ||
                          i.attr({ stroke: S, "stroke-width": g })),
                      i[e ? "attr" : "animate"]({
                        d: this.getMarkPath(
                          c,
                          C,
                          m[0],
                          i.strokeWidth() * A,
                          T.horiz,
                          l
                        ),
                        opacity: u,
                      }));
                  }
                  renderLabel(C, u, A, T) {
                    var S = this.axis;
                    const l = S.horiz,
                      h = S.options,
                      m = this.label,
                      c = h.labels,
                      g = c.step;
                    S = k(this.tickmarkOffset, S.tickmarkOffset);
                    const i = C.x;
                    C = C.y;
                    let e = !0;
                    m &&
                      x(i) &&
                      ((m.xy = C =
                        this.getLabelPosition(i, C, m, l, c, S, T, g)),
                      (this.isFirst && !this.isLast && !h.showFirstLabel) ||
                      (this.isLast && !this.isFirst && !h.showLastLabel)
                        ? (e = !1)
                        : !l ||
                          c.step ||
                          c.rotation ||
                          u ||
                          0 === A ||
                          this.handleOverflow(C),
                      g && T % g && (e = !1),
                      e && x(C.y)
                        ? ((C.opacity = A),
                          m[this.isNewLabel ? "attr" : "animate"](C).show(!0),
                          (this.isNewLabel = !1))
                        : (m.hide(), (this.isNewLabel = !0)));
                  }
                  replaceMovedLabel() {
                    const C = this.label,
                      u = this.axis;
                    C &&
                      !this.isNew &&
                      (C.animate({ opacity: 0 }, void 0, C.destroy),
                      delete this.label),
                      (u.isDirty = !0),
                      (this.label = this.movedLabel),
                      delete this.movedLabel;
                  }
                };
              }
            ),
            ut(
              t,
              "Core/Axis/Axis.js",
              [
                t["Core/Animation/AnimationUtilities.js"],
                t["Core/Axis/AxisDefaults.js"],
                t["Core/Color/Color.js"],
                t["Core/Defaults.js"],
                t["Core/Foundation.js"],
                t["Core/Globals.js"],
                t["Core/Axis/Tick.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j, tt, et, st, nt, I) {
                const { animObject: H } = F,
                  { defaultOptions: N } = tt,
                  { registerEventOptions: x } = et,
                  { deg2rad: y } = st,
                  {
                    arrayMax: P,
                    arrayMin: k,
                    clamp: p,
                    correctFloat: v,
                    defined: C,
                    destroyObjectProperties: u,
                    erase: A,
                    error: T,
                    extend: S,
                    fireEvent: l,
                    getClosestDistance: h,
                    insertItem: m,
                    isArray: c,
                    isNumber: g,
                    isString: i,
                    merge: e,
                    normalizeTickInterval: s,
                    objectEach: a,
                    pick: d,
                    relativeLength: E,
                    removeEvent: o,
                    splat: M,
                    syncTimeout: Z,
                  } = I,
                  K = (L, n) =>
                    s(
                      n,
                      void 0,
                      void 0,
                      d(
                        L.options.allowDecimals,
                        0.5 > n || void 0 !== L.tickAmount
                      ),
                      !!L.tickAmount
                    );
                class $ {
                  constructor(n, z, b) {
                    (this.zoomEnabled =
                      this.width =
                      this.visible =
                      this.userOptions =
                      this.translationSlope =
                      this.transB =
                      this.transA =
                      this.top =
                      this.ticks =
                      this.tickRotCorr =
                      this.tickPositions =
                      this.tickmarkOffset =
                      this.tickInterval =
                      this.tickAmount =
                      this.side =
                      this.series =
                      this.right =
                      this.positiveValuesOnly =
                      this.pos =
                      this.pointRangePadding =
                      this.pointRange =
                      this.plotLinesAndBandsGroups =
                      this.plotLinesAndBands =
                      this.paddedTicks =
                      this.overlap =
                      this.options =
                      this.offset =
                      this.names =
                      this.minPixelPadding =
                      this.minorTicks =
                      this.minorTickInterval =
                      this.min =
                      this.maxLabelLength =
                      this.max =
                      this.len =
                      this.left =
                      this.labelFormatter =
                      this.labelEdge =
                      this.isLinked =
                      this.index =
                      this.height =
                      this.hasVisibleSeries =
                      this.hasNames =
                      this.eventOptions =
                      this.coll =
                      this.closestPointRange =
                      this.chart =
                      this.bottom =
                      this.alternateBands =
                        void 0),
                      this.init(n, z, b);
                  }
                  init(n, z, b = this.coll) {
                    const D = "xAxis" === b;
                    (this.chart = n),
                      (this.horiz = this.isZAxis || (n.inverted ? !D : D)),
                      (this.isXAxis = D),
                      (this.coll = b),
                      l(this, "init", { userOptions: z }),
                      (this.opposite = d(z.opposite, this.opposite)),
                      (this.side = d(
                        z.side,
                        this.side,
                        this.horiz
                          ? this.opposite
                            ? 0
                            : 2
                          : this.opposite
                          ? 1
                          : 3
                      )),
                      this.setOptions(z);
                    const J = (b = this.options).labels,
                      r = b.type;
                    (this.userOptions = z),
                      (this.minPixelPadding = 0),
                      (this.reversed = d(b.reversed, this.reversed)),
                      (this.visible = b.visible),
                      (this.zoomEnabled = b.zoomEnabled),
                      (this.hasNames = "category" === r || !0 === b.categories),
                      (this.categories =
                        b.categories || (this.hasNames ? [] : void 0)),
                      this.names || ((this.names = []), (this.names.keys = {})),
                      (this.plotLinesAndBandsGroups = {}),
                      (this.positiveValuesOnly = !!this.logarithmic),
                      (this.isLinked = C(b.linkedTo)),
                      (this.ticks = {}),
                      (this.labelEdge = []),
                      (this.minorTicks = {}),
                      (this.plotLinesAndBands = []),
                      (this.alternateBands = {}),
                      (this.len = 0),
                      (this.minRange = this.userMinRange =
                        b.minRange || b.maxZoom),
                      (this.range = b.range),
                      (this.offset = b.offset || 0),
                      (this.min = this.max = null),
                      (z = d(
                        b.crosshair,
                        M(n.options.tooltip.crosshairs)[D ? 0 : 1]
                      )),
                      (this.crosshair = !0 === z ? {} : z),
                      -1 === n.axes.indexOf(this) &&
                        (D
                          ? n.axes.splice(n.xAxis.length, 0, this)
                          : n.axes.push(this),
                        m(this, n[this.coll])),
                      n.orderItems(this.coll),
                      (this.series = this.series || []),
                      n.inverted &&
                        !this.isZAxis &&
                        D &&
                        typeof this.reversed > "u" &&
                        (this.reversed = !0),
                      (this.labelRotation = g(J.rotation)
                        ? J.rotation
                        : void 0),
                      x(this, b),
                      l(this, "afterInit");
                  }
                  setOptions(n) {
                    (this.options = e(
                      Y.defaultXAxisOptions,
                      "yAxis" === this.coll && Y.defaultYAxisOptions,
                      [
                        Y.defaultTopAxisOptions,
                        Y.defaultRightAxisOptions,
                        Y.defaultBottomAxisOptions,
                        Y.defaultLeftAxisOptions,
                      ][this.side],
                      e(N[this.coll], n)
                    )),
                      l(this, "afterSetOptions", { userOptions: n });
                  }
                  defaultLabelFormatter(n) {
                    var z = this.axis;
                    ({ numberFormatter: n } = this.chart);
                    const b = g(this.value) ? this.value : NaN,
                      D = z.chart.time,
                      J = this.dateTimeLabelFormat;
                    var r = N.lang;
                    const f = r.numericSymbols;
                    r = r.numericSymbolMagnitude || 1e3;
                    const _ = z.logarithmic ? Math.abs(b) : z.tickInterval;
                    let W,
                      B = f && f.length;
                    if (z.categories) W = `${this.value}`;
                    else if (J) W = D.dateFormat(J, b);
                    else if (B && 1e3 <= _)
                      for (; B-- && typeof W > "u"; )
                        _ >= (z = Math.pow(r, B + 1)) &&
                          (10 * b) % z == 0 &&
                          null !== f[B] &&
                          0 !== b &&
                          (W = n(b / z, -1) + f[B]);
                    return (
                      typeof W > "u" &&
                        (W =
                          1e4 <= Math.abs(b) ? n(b, -1) : n(b, -1, void 0, "")),
                      W
                    );
                  }
                  getSeriesExtremes() {
                    const n = this,
                      z = n.chart;
                    let b;
                    l(this, "getSeriesExtremes", null, function () {
                      (n.hasVisibleSeries = !1),
                        (n.dataMin = n.dataMax = n.threshold = null),
                        (n.softThreshold = !n.isXAxis),
                        n.series.forEach(function (D) {
                          if (
                            D.visible ||
                            !z.options.chart.ignoreHiddenSeries
                          ) {
                            var J = D.options;
                            let f,
                              _,
                              r = J.threshold;
                            (n.hasVisibleSeries = !0),
                              n.positiveValuesOnly && 0 >= r && (r = null),
                              n.isXAxis
                                ? (J = D.xData) &&
                                  J.length &&
                                  ((J = n.logarithmic
                                    ? J.filter((B) => 0 < B)
                                    : J),
                                  (b = D.getXExtremes(J)),
                                  (f = b.min),
                                  (_ = b.max),
                                  g(f) ||
                                    f instanceof Date ||
                                    ((J = J.filter(g)),
                                    (b = D.getXExtremes(J)),
                                    (f = b.min),
                                    (_ = b.max)),
                                  J.length &&
                                    ((n.dataMin = Math.min(d(n.dataMin, f), f)),
                                    (n.dataMax = Math.max(d(n.dataMax, _), _))))
                                : ((D = D.applyExtremes()),
                                  g(D.dataMin) &&
                                    ((f = D.dataMin),
                                    (n.dataMin = Math.min(d(n.dataMin, f), f))),
                                  g(D.dataMax) &&
                                    ((_ = D.dataMax),
                                    (n.dataMax = Math.max(d(n.dataMax, _), _))),
                                  C(r) && (n.threshold = r),
                                  (!J.softThreshold || n.positiveValuesOnly) &&
                                    (n.softThreshold = !1));
                          }
                        });
                    }),
                      l(this, "afterGetSeriesExtremes");
                  }
                  translate(n, z, b, D, J, r) {
                    const f = this.linkedParent || this,
                      _ = D && f.old ? f.old.min : f.min;
                    if (!g(_)) return NaN;
                    const B = f.minPixelPadding;
                    J =
                      (f.isOrdinal ||
                        (f.brokenAxis && f.brokenAxis.hasBreaks) ||
                        (f.logarithmic && J)) &&
                      f.lin2val;
                    let W = 1,
                      R = 0;
                    return (
                      (D = D && f.old ? f.old.transA : f.transA) ||
                        (D = f.transA),
                      b && ((W *= -1), (R = f.len)),
                      f.reversed && ((W *= -1), (R -= W * (f.sector || f.len))),
                      z
                        ? ((r = (n * W + R - B) / D + _),
                          J && (r = f.lin2val(r)))
                        : (J && (n = f.val2lin(n)),
                          (n = W * (n - _) * D),
                          (r =
                            (f.isRadial ? n : v(n)) +
                            R +
                            W * B +
                            (g(r) ? D * r : 0))),
                      r
                    );
                  }
                  toPixels(n, z) {
                    return (
                      this.translate(n, !1, !this.horiz, void 0, !0) +
                      (z ? 0 : this.pos)
                    );
                  }
                  toValue(n, z) {
                    return this.translate(
                      n - (z ? 0 : this.pos),
                      !0,
                      !this.horiz,
                      void 0,
                      !0
                    );
                  }
                  getPlotLinePath(n) {
                    function z(G, X, ct) {
                      return (
                        "pass" !== it &&
                          (G < X || G > ct) &&
                          (it ? (G = p(G, X, ct)) : (Q = !0)),
                        G
                      );
                    }
                    const b = this,
                      D = b.chart,
                      J = b.left,
                      r = b.top,
                      f = n.old,
                      _ = n.value,
                      B = n.lineWidth,
                      W = (f && D.oldChartHeight) || D.chartHeight,
                      R = (f && D.oldChartWidth) || D.chartWidth,
                      V = b.transB;
                    let lt,
                      gt,
                      w,
                      O,
                      Q,
                      q = n.translatedValue,
                      it = n.force;
                    return (
                      l(
                        this,
                        "getPlotLinePath",
                        (n = {
                          value: _,
                          lineWidth: B,
                          old: f,
                          force: it,
                          acrossPanes: n.acrossPanes,
                          translatedValue: q,
                        }),
                        function (G) {
                          (q = d(q, b.translate(_, void 0, void 0, f))),
                            (q = p(q, -1e5, 1e5)),
                            (lt = w = Math.round(q + V)),
                            (gt = O = Math.round(W - q - V)),
                            g(q)
                              ? b.horiz
                                ? ((gt = r),
                                  (O = W - b.bottom),
                                  (lt = w = z(lt, J, J + b.width)))
                                : ((lt = J),
                                  (w = R - b.right),
                                  (gt = O = z(gt, r, r + b.height)))
                              : ((Q = !0), (it = !1)),
                            (G.path =
                              Q && !it
                                ? null
                                : D.renderer.crispLine(
                                    [
                                      ["M", lt, gt],
                                      ["L", w, O],
                                    ],
                                    B || 1
                                  ));
                        }
                      ),
                      n.path
                    );
                  }
                  getLinearTickPositions(n, z, b) {
                    const D = v(Math.floor(z / n) * n);
                    b = v(Math.ceil(b / n) * n);
                    const J = [];
                    let r, f;
                    if ((v(D + n) === D && (f = 20), this.single)) return [z];
                    for (
                      z = D;
                      z <= b && (J.push(z), (z = v(z + n, f)) !== r);

                    )
                      r = z;
                    return J;
                  }
                  getMinorTickInterval() {
                    const n = this.options;
                    return !0 === n.minorTicks
                      ? d(n.minorTickInterval, "auto")
                      : !1 === n.minorTicks
                      ? null
                      : n.minorTickInterval;
                  }
                  getMinorTickPositions() {
                    var n = this.options;
                    const z = this.tickPositions,
                      b = this.minorTickInterval;
                    var D = this.pointRangePadding || 0;
                    const J = this.min - D,
                      r = (D = this.max + D) - J;
                    let f = [];
                    if (r && r / b < this.len / 3) {
                      const _ = this.logarithmic;
                      if (_)
                        this.paddedTicks.forEach(function (B, W, R) {
                          W &&
                            f.push.apply(
                              f,
                              _.getLogTickPositions(b, R[W - 1], R[W], !0)
                            );
                        });
                      else if (
                        this.dateTime &&
                        "auto" === this.getMinorTickInterval()
                      )
                        f = f.concat(
                          this.getTimeTicks(
                            this.dateTime.normalizeTimeTickInterval(b),
                            J,
                            D,
                            n.startOfWeek
                          )
                        );
                      else
                        for (
                          n = J + ((z[0] - J) % b);
                          n <= D && n !== f[0];
                          n += b
                        )
                          f.push(n);
                    }
                    return 0 !== f.length && this.trimTicks(f), f;
                  }
                  adjustForMinRange() {
                    const n = this.options,
                      z = this.logarithmic;
                    let b = this.min;
                    var D = this.max;
                    let J, r;
                    if (this.isXAxis && typeof this.minRange > "u" && !z)
                      if (C(n.min) || C(n.max) || C(n.floor) || C(n.ceiling))
                        this.minRange = null;
                      else {
                        var f =
                          h(
                            this.series.map((_) => {
                              var B;
                              return (
                                (_.xIncrement
                                  ? null === (B = _.xData) || void 0 === B
                                    ? void 0
                                    : B.slice(0, 2)
                                  : _.xData) || []
                              );
                            })
                          ) || 0;
                        this.minRange = Math.min(
                          5 * f,
                          this.dataMax - this.dataMin
                        );
                      }
                    D - b < this.minRange &&
                      ((f = this.dataMax - this.dataMin >= this.minRange),
                      (r = this.minRange),
                      (J = [b - (D = (r - D + b) / 2), d(n.min, b - D)]),
                      f && (J[2] = z ? z.log2lin(this.dataMin) : this.dataMin),
                      (b = P(J)),
                      (D = [b + r, d(n.max, b + r)]),
                      f && (D[2] = z ? z.log2lin(this.dataMax) : this.dataMax),
                      (D = k(D)) - b < r &&
                        ((J[0] = D - r), (J[1] = d(n.min, D - r)), (b = P(J)))),
                      (this.min = b),
                      (this.max = D);
                  }
                  getClosest() {
                    let n, z;
                    if (this.categories) z = 1;
                    else {
                      const b = [];
                      this.series.forEach(function (D) {
                        var J;
                        const r = D.closestPointRange,
                          f =
                            D.visible ||
                            !D.chart.options.chart.ignoreHiddenSeries;
                        1 ===
                        (null === (J = D.xData) || void 0 === J
                          ? void 0
                          : J.length)
                          ? b.push(D.xData[0])
                          : !D.noSharedTooltip &&
                            C(r) &&
                            f &&
                            (z = C(z) ? Math.min(z, r) : r);
                      }),
                        b.length && (b.sort((D, J) => D - J), (n = h([b])));
                    }
                    return n && z ? Math.min(n, z) : n || z;
                  }
                  nameToX(n) {
                    const z = c(this.options.categories),
                      b = z ? this.categories : this.names;
                    let J,
                      D = n.options.x;
                    return (
                      (n.series.requireSorting = !1),
                      C(D) ||
                        (D =
                          this.options.uniqueNames && b
                            ? z
                              ? b.indexOf(n.name)
                              : d(b.keys[n.name], -1)
                            : n.series.autoIncrement()),
                      -1 === D ? !z && b && (J = b.length) : (J = D),
                      typeof J < "u"
                        ? ((this.names[J] = n.name),
                          (this.names.keys[n.name] = J))
                        : n.x && (J = n.x),
                      J
                    );
                  }
                  updateNames() {
                    const n = this,
                      z = this.names;
                    0 < z.length &&
                      (Object.keys(z.keys).forEach(function (b) {
                        delete z.keys[b];
                      }),
                      (z.length = 0),
                      (this.minRange = this.userMinRange),
                      (this.series || []).forEach(function (b) {
                        (b.xIncrement = null),
                          (!b.points || b.isDirtyData) &&
                            ((n.max = Math.max(n.max, b.xData.length - 1)),
                            b.processData(),
                            b.generatePoints()),
                          b.data.forEach(function (D, J) {
                            let r;
                            D &&
                              D.options &&
                              typeof D.name < "u" &&
                              ((r = n.nameToX(D)),
                              typeof r < "u" &&
                                r !== D.x &&
                                ((D.x = r), (b.xData[J] = r)));
                          });
                      }));
                  }
                  setAxisTranslation() {
                    const n = this,
                      z = n.max - n.min;
                    var b = n.linkedParent;
                    const D = !!n.categories,
                      J = n.isXAxis;
                    let f,
                      r = n.axisPointRange || 0,
                      _ = 0,
                      B = 0,
                      W = n.transA;
                    (J || D || r) &&
                      ((f = n.getClosest()),
                      b
                        ? ((_ = b.minPointOffset), (B = b.pointRangePadding))
                        : n.series.forEach(function (R) {
                            const V = D
                                ? 1
                                : J
                                ? d(R.options.pointRange, f, 0)
                                : n.axisPointRange || 0,
                              q = R.options.pointPlacement;
                            (r = Math.max(r, V)),
                              (!n.single || D) &&
                                ((R = R.is("xrange") ? !J : J),
                                (_ = Math.max(_, R && i(q) ? 0 : V / 2)),
                                (B = Math.max(B, R && "on" === q ? 0 : V)));
                          }),
                      (n.minPointOffset =
                        _ *=
                        b =
                          n.ordinal && n.ordinal.slope && f
                            ? n.ordinal.slope / f
                            : 1),
                      (n.pointRangePadding = B *= b),
                      (n.pointRange = Math.min(r, n.single && D ? 1 : z)),
                      J && f && (n.closestPointRange = f)),
                      (n.translationSlope =
                        n.transA =
                        W =
                          n.staticScale || n.len / (z + B || 1)),
                      (n.transB = n.horiz ? n.left : n.bottom),
                      (n.minPixelPadding = W * _),
                      l(this, "afterSetAxisTranslation");
                  }
                  minFromRange() {
                    return this.max - this.range;
                  }
                  setTickInterval(n) {
                    var z = this.chart;
                    const b = this.logarithmic,
                      D = this.options,
                      J = this.isXAxis,
                      r = this.isLinked,
                      f = D.tickPixelInterval,
                      _ = this.categories,
                      B = this.softThreshold;
                    let it,
                      lt,
                      gt,
                      W = D.maxPadding,
                      R = D.minPadding,
                      V =
                        g(D.tickInterval) && 0 <= D.tickInterval
                          ? D.tickInterval
                          : void 0,
                      q = g(this.threshold) ? this.threshold : null;
                    if (
                      (this.dateTime || _ || r || this.getTickAmount(),
                      (lt = d(this.userMin, D.min)),
                      (gt = d(this.userMax, D.max)),
                      r)
                    ) {
                      this.linkedParent = z[this.coll][D.linkedTo];
                      var w = this.linkedParent.getExtremes();
                      (this.min = d(w.min, w.dataMin)),
                        (this.max = d(w.max, w.dataMax)),
                        D.type !== this.linkedParent.options.type &&
                          T(11, 1, z);
                    } else
                      B &&
                        C(q) &&
                        (this.dataMin >= q
                          ? ((w = q), (R = 0))
                          : this.dataMax <= q && ((it = q), (W = 0))),
                        (this.min = d(lt, w, this.dataMin)),
                        (this.max = d(gt, it, this.dataMax));
                    if (
                      (b &&
                        (this.positiveValuesOnly &&
                          !n &&
                          0 >= Math.min(this.min, d(this.dataMin, this.min)) &&
                          T(10, 1, z),
                        (this.min = v(b.log2lin(this.min), 16)),
                        (this.max = v(b.log2lin(this.max), 16))),
                      this.range &&
                        C(this.max) &&
                        ((this.userMin =
                          this.min =
                          lt =
                            Math.max(this.dataMin, this.minFromRange())),
                        (this.userMax = gt = this.max),
                        (this.range = null)),
                      l(this, "foundExtremes"),
                      this.beforePadding && this.beforePadding(),
                      this.adjustForMinRange(),
                      !g(this.userMin) &&
                        g(D.softMin) &&
                        D.softMin < this.min &&
                        (this.min = lt = D.softMin),
                      !g(this.userMax) &&
                        g(D.softMax) &&
                        D.softMax > this.max &&
                        (this.max = gt = D.softMax),
                      !(
                        _ ||
                        this.axisPointRange ||
                        (this.stacking && this.stacking.usePercentage) ||
                        r
                      ) &&
                        C(this.min) &&
                        C(this.max) &&
                        (z = this.max - this.min) &&
                        (!C(lt) && R && (this.min -= z * R),
                        !C(gt) && W && (this.max += z * W)),
                      !g(this.userMin) &&
                        g(D.floor) &&
                        (this.min = Math.max(this.min, D.floor)),
                      !g(this.userMax) &&
                        g(D.ceiling) &&
                        (this.max = Math.min(this.max, D.ceiling)),
                      B &&
                        C(this.dataMin) &&
                        ((q = q || 0),
                        !C(lt) && this.min < q && this.dataMin >= q
                          ? (this.min = this.options.minRange
                              ? Math.min(q, this.max - this.minRange)
                              : q)
                          : !C(gt) &&
                            this.max > q &&
                            this.dataMax <= q &&
                            (this.max = this.options.minRange
                              ? Math.max(q, this.min + this.minRange)
                              : q)),
                      g(this.min) &&
                        g(this.max) &&
                        !this.chart.polar &&
                        this.min > this.max &&
                        (C(this.options.min)
                          ? (this.max = this.min)
                          : C(this.options.max) && (this.min = this.max)),
                      (this.tickInterval =
                        this.min === this.max ||
                        typeof this.min > "u" ||
                        typeof this.max > "u"
                          ? 1
                          : r &&
                            this.linkedParent &&
                            !V &&
                            f === this.linkedParent.options.tickPixelInterval
                          ? (V = this.linkedParent.tickInterval)
                          : d(
                              V,
                              this.tickAmount
                                ? (this.max - this.min) /
                                    Math.max(this.tickAmount - 1, 1)
                                : void 0,
                              _
                                ? 1
                                : ((this.max - this.min) * f) /
                                    Math.max(this.len, f)
                            )),
                      J && !n)
                    ) {
                      const O =
                        this.min !== (this.old && this.old.min) ||
                        this.max !== (this.old && this.old.max);
                      this.series.forEach(function (Q) {
                        (Q.forceCrop = Q.forceCropping && Q.forceCropping()),
                          Q.processData(O);
                      }),
                        l(this, "postProcessData", { hasExtremesChanged: O });
                    }
                    this.setAxisTranslation(),
                      l(this, "initialAxisTranslation"),
                      this.pointRange &&
                        !V &&
                        (this.tickInterval = Math.max(
                          this.pointRange,
                          this.tickInterval
                        )),
                      (n = d(
                        D.minTickInterval,
                        this.dateTime &&
                          !this.series.some((O) => O.noSharedTooltip)
                          ? this.closestPointRange
                          : 0
                      )),
                      !V && this.tickInterval < n && (this.tickInterval = n),
                      this.dateTime ||
                        this.logarithmic ||
                        V ||
                        (this.tickInterval = K(this, this.tickInterval)),
                      this.tickAmount || (this.tickInterval = this.unsquish()),
                      this.setTickPositions();
                  }
                  setTickPositions() {
                    var n = this.options;
                    const z = n.tickPositions,
                      b = n.tickPositioner;
                    var D = this.getMinorTickInterval(),
                      J = this.hasVerticalPanning(),
                      r = "colorAxis" === this.coll;
                    const f = (r || !J) && n.startOnTick;
                    let _;
                    if (
                      ((J = (r || !J) && n.endOnTick),
                      (r = []),
                      (this.tickmarkOffset =
                        this.categories &&
                        "between" === n.tickmarkPlacement &&
                        1 === this.tickInterval
                          ? 0.5
                          : 0),
                      (this.minorTickInterval =
                        "auto" === D && this.tickInterval
                          ? this.tickInterval / n.minorTicksPerMajor
                          : D),
                      (this.single =
                        this.min === this.max &&
                        C(this.min) &&
                        !this.tickAmount &&
                        (parseInt(this.min, 10) === this.min ||
                          !1 !== n.allowDecimals)),
                      z)
                    )
                      r = z.slice();
                    else if (g(this.min) && g(this.max)) {
                      if (
                        (this.ordinal && this.ordinal.positions) ||
                        !(
                          (this.max - this.min) / this.tickInterval >
                          Math.max(2 * this.len, 200)
                        )
                      )
                        if (this.dateTime)
                          r = this.getTimeTicks(
                            this.dateTime.normalizeTimeTickInterval(
                              this.tickInterval,
                              n.units
                            ),
                            this.min,
                            this.max,
                            n.startOfWeek,
                            this.ordinal && this.ordinal.positions,
                            this.closestPointRange,
                            !0
                          );
                        else if (this.logarithmic)
                          r = this.logarithmic.getLogTickPositions(
                            this.tickInterval,
                            this.min,
                            this.max
                          );
                        else
                          for (
                            D = n = this.tickInterval;
                            D <= 2 * n &&
                            ((r = this.getLinearTickPositions(
                              this.tickInterval,
                              this.min,
                              this.max
                            )),
                            this.tickAmount && r.length > this.tickAmount);

                          )
                            this.tickInterval = K(this, (D *= 1.1));
                      else (r = [this.min, this.max]), T(19, !1, this.chart);
                      r.length > this.len &&
                        (r = [r[0], r[r.length - 1]])[0] === r[1] &&
                        (r.length = 1),
                        b &&
                          ((this.tickPositions = r),
                          (_ = b.apply(this, [this.min, this.max])) && (r = _));
                    }
                    (this.tickPositions = r),
                      (this.paddedTicks = r.slice(0)),
                      this.trimTicks(r, f, J),
                      !this.isLinked &&
                        g(this.min) &&
                        g(this.max) &&
                        (this.single &&
                          2 > r.length &&
                          !this.categories &&
                          !this.series.some(
                            (B) =>
                              B.is("heatmap") &&
                              "between" === B.options.pointPlacement
                          ) &&
                          ((this.min -= 0.5), (this.max += 0.5)),
                        z || _ || this.adjustTickAmount()),
                      l(this, "afterSetTickPositions");
                  }
                  trimTicks(n, z, b) {
                    const D = n[0],
                      J = n[n.length - 1],
                      r = (!this.isOrdinal && this.minPointOffset) || 0;
                    if ((l(this, "trimTicks"), !this.isLinked)) {
                      if (z && D !== -1 / 0) this.min = D;
                      else for (; this.min - r > n[0]; ) n.shift();
                      if (b) this.max = J;
                      else for (; this.max + r < n[n.length - 1]; ) n.pop();
                      0 === n.length &&
                        C(D) &&
                        !this.options.tickPositions &&
                        n.push((J + D) / 2);
                    }
                  }
                  alignToOthers() {
                    const n = this,
                      z = [this],
                      b = n.options,
                      D =
                        "yAxis" === this.coll &&
                        this.chart.options.chart.alignThresholds,
                      J = [];
                    let r;
                    if (
                      ((n.thresholdAlignment = void 0),
                      ((!1 !== this.chart.options.chart.alignTicks &&
                        b.alignTicks) ||
                        D) &&
                        !1 !== b.startOnTick &&
                        !1 !== b.endOnTick &&
                        !n.logarithmic)
                    ) {
                      const f = (B) => {
                          const { horiz: W, options: R } = B;
                          return [
                            W ? R.left : R.top,
                            R.width,
                            R.height,
                            R.pane,
                          ].join();
                        },
                        _ = f(this);
                      this.chart[this.coll].forEach(function (B) {
                        const { series: W } = B;
                        W.length &&
                          W.some((R) => R.visible) &&
                          B !== n &&
                          f(B) === _ &&
                          ((r = !0), z.push(B));
                      });
                    }
                    if (r && D) {
                      z.forEach((_) => {
                        (_ = _.getThresholdAlignment(n)), g(_) && J.push(_);
                      });
                      const f =
                        1 < J.length
                          ? J.reduce((_, B) => _ + B, 0) / J.length
                          : void 0;
                      z.forEach((_) => {
                        _.thresholdAlignment = f;
                      });
                    }
                    return r;
                  }
                  getThresholdAlignment(n) {
                    if (
                      ((!g(this.dataMin) ||
                        (this !== n &&
                          this.series.some(
                            (z) => z.isDirty || z.isDirtyData
                          ))) &&
                        this.getSeriesExtremes(),
                      g(this.threshold))
                    )
                      return (
                        (n = p(
                          (this.threshold - (this.dataMin || 0)) /
                            ((this.dataMax || 0) - (this.dataMin || 0)),
                          0,
                          1
                        )),
                        this.options.reversed && (n = 1 - n),
                        n
                      );
                  }
                  getTickAmount() {
                    const n = this.options,
                      z = n.tickPixelInterval;
                    let b = n.tickAmount;
                    !C(n.tickInterval) &&
                      !b &&
                      this.len < z &&
                      !this.isRadial &&
                      !this.logarithmic &&
                      n.startOnTick &&
                      n.endOnTick &&
                      (b = 2),
                      !b &&
                        this.alignToOthers() &&
                        (b = Math.ceil(this.len / z) + 1),
                      4 > b && ((this.finalTickAmt = b), (b = 5)),
                      (this.tickAmount = b);
                  }
                  adjustTickAmount() {
                    const n = this,
                      {
                        finalTickAmt: z,
                        max: b,
                        min: D,
                        options: J,
                        tickPositions: r,
                        tickAmount: f,
                        thresholdAlignment: _,
                      } = n,
                      B = r && r.length;
                    var W = d(n.threshold, n.softThreshold ? 0 : null),
                      R = n.tickInterval;
                    let V;
                    if (
                      (g(_) &&
                        ((V =
                          0.5 > _
                            ? Math.ceil(_ * (f - 1))
                            : Math.floor(_ * (f - 1))),
                        J.reversed && (V = f - 1 - V)),
                      n.hasData() && g(D) && g(b))
                    ) {
                      const q = () => {
                        (n.transA *= (B - 1) / (f - 1)),
                          (n.min = J.startOnTick ? r[0] : Math.min(D, r[0])),
                          (n.max = J.endOnTick
                            ? r[r.length - 1]
                            : Math.max(b, r[r.length - 1]));
                      };
                      if (g(V) && g(n.threshold)) {
                        for (
                          ;
                          r[V] !== W ||
                          r.length !== f ||
                          r[0] > D ||
                          r[r.length - 1] < b;

                        ) {
                          for (
                            r.length = 0, r.push(n.threshold);
                            r.length < f;

                          )
                            void 0 === r[V] || r[V] > n.threshold
                              ? r.unshift(v(r[0] - R))
                              : r.push(v(r[r.length - 1] + R));
                          if (R > 8 * n.tickInterval) break;
                          R *= 2;
                        }
                        q();
                      } else if (B < f) {
                        for (; r.length < f; )
                          r.length % 2 || D === W
                            ? r.push(v(r[r.length - 1] + R))
                            : r.unshift(v(r[0] - R));
                        q();
                      }
                      if (C(z)) {
                        for (R = W = r.length; R--; )
                          ((3 === z && R % 2 == 1) ||
                            (2 >= z && 0 < R && R < W - 1)) &&
                            r.splice(R, 1);
                        n.finalTickAmt = void 0;
                      }
                    }
                  }
                  setScale() {
                    let n = !1,
                      z = !1;
                    this.series.forEach(function (D) {
                      (n = n || D.isDirtyData || D.isDirty),
                        (z = z || (D.xAxis && D.xAxis.isDirty) || !1);
                    }),
                      this.setAxisSize();
                    const b = this.len !== (this.old && this.old.len);
                    b ||
                    n ||
                    z ||
                    this.isLinked ||
                    this.forceRedraw ||
                    this.userMin !== (this.old && this.old.userMin) ||
                    this.userMax !== (this.old && this.old.userMax) ||
                    this.alignToOthers()
                      ? (this.stacking &&
                          (this.stacking.resetStacks(),
                          this.stacking.buildStacks()),
                        (this.forceRedraw = !1),
                        this.userMinRange || (this.minRange = void 0),
                        this.getSeriesExtremes(),
                        this.setTickInterval(),
                        this.isDirty ||
                          (this.isDirty =
                            b ||
                            this.min !== (this.old && this.old.min) ||
                            this.max !== (this.old && this.old.max)))
                      : this.stacking && this.stacking.cleanStacks(),
                      n &&
                        this.panningState &&
                        (this.panningState.isDirty = !0),
                      l(this, "afterSetScale");
                  }
                  setExtremes(n, z, b, D, J) {
                    const r = this,
                      f = r.chart;
                    (b = d(b, !0)),
                      r.series.forEach(function (_) {
                        delete _.kdTree;
                      }),
                      (J = S(J, { min: n, max: z })),
                      l(r, "setExtremes", J, function () {
                        (r.userMin = n),
                          (r.userMax = z),
                          (r.eventArgs = J),
                          b && f.redraw(D);
                      });
                  }
                  zoom(n, z) {
                    const b = this,
                      D = this.dataMin,
                      J = this.dataMax,
                      r = this.options,
                      f = Math.min(D, d(r.min, D)),
                      _ = Math.max(J, d(r.max, J));
                    return (
                      l(
                        this,
                        "zoom",
                        (n = { newMin: n, newMax: z }),
                        function (B) {
                          let W = B.newMin,
                            R = B.newMax;
                          (W !== b.min || R !== b.max) &&
                            (b.allowZoomOutside ||
                              (C(D) && (W < f && (W = f), W > _ && (W = _)),
                              C(J) && (R < f && (R = f), R > _ && (R = _))),
                            (b.displayBtn = typeof W < "u" || typeof R < "u"),
                            b.setExtremes(W, R, !1, void 0, {
                              trigger: "zoom",
                            })),
                            (B.zoomed = !0);
                        }
                      ),
                      n.zoomed
                    );
                  }
                  setAxisSize() {
                    const n = this.chart;
                    var z = this.options;
                    const b = z.offsets || [0, 0, 0, 0],
                      D = this.horiz,
                      J = (this.width = Math.round(
                        E(d(z.width, n.plotWidth - b[3] + b[1]), n.plotWidth)
                      )),
                      r = (this.height = Math.round(
                        E(d(z.height, n.plotHeight - b[0] + b[2]), n.plotHeight)
                      )),
                      f = (this.top = Math.round(
                        E(d(z.top, n.plotTop + b[0]), n.plotHeight, n.plotTop)
                      ));
                    (z = this.left =
                      Math.round(
                        E(d(z.left, n.plotLeft + b[3]), n.plotWidth, n.plotLeft)
                      )),
                      (this.bottom = n.chartHeight - r - f),
                      (this.right = n.chartWidth - J - z),
                      (this.len = Math.max(D ? J : r, 0)),
                      (this.pos = D ? z : f);
                  }
                  getExtremes() {
                    const n = this.logarithmic;
                    return {
                      min: n ? v(n.lin2log(this.min)) : this.min,
                      max: n ? v(n.lin2log(this.max)) : this.max,
                      dataMin: this.dataMin,
                      dataMax: this.dataMax,
                      userMin: this.userMin,
                      userMax: this.userMax,
                    };
                  }
                  getThreshold(n) {
                    var z = this.logarithmic;
                    const b = z ? z.lin2log(this.min) : this.min;
                    return (
                      (z = z ? z.lin2log(this.max) : this.max),
                      null === n || n === -1 / 0
                        ? (n = b)
                        : n === 1 / 0
                        ? (n = z)
                        : b > n
                        ? (n = b)
                        : z < n && (n = z),
                      this.translate(n, 0, 1, 0, 1)
                    );
                  }
                  autoLabelAlign(n) {
                    const z = (d(n, 0) - 90 * this.side + 720) % 360;
                    return (
                      l(
                        this,
                        "autoLabelAlign",
                        (n = { align: "center" }),
                        function (b) {
                          15 < z && 165 > z
                            ? (b.align = "right")
                            : 195 < z && 345 > z && (b.align = "left");
                        }
                      ),
                      n.align
                    );
                  }
                  tickSize(n) {
                    const z = this.options,
                      b = d(
                        z["tick" === n ? "tickWidth" : "minorTickWidth"],
                        "tick" === n && this.isXAxis && !this.categories ? 1 : 0
                      );
                    let J,
                      D = z["tick" === n ? "tickLength" : "minorTickLength"];
                    return (
                      b &&
                        D &&
                        ("inside" === z[n + "Position"] && (D = -D),
                        (J = [D, b])),
                      l(this, "afterTickSize", (n = { tickSize: J })),
                      n.tickSize
                    );
                  }
                  labelMetrics() {
                    const n = this.chart.renderer;
                    var z = this.ticks;
                    return (
                      (z = z[Object.keys(z)[0]] || {}),
                      this.chart.renderer.fontMetrics(
                        z.label || z.movedLabel || n.box
                      )
                    );
                  }
                  unsquish() {
                    const n = this.options.labels;
                    var z = this.horiz;
                    const b = this.tickInterval,
                      D =
                        this.len /
                        (((this.categories ? 1 : 0) + this.max - this.min) / b),
                      J = n.rotation,
                      r = 0.75 * this.labelMetrics().h,
                      f = Math.max(this.max - this.min, 0),
                      _ = function (q) {
                        let it = q / (D || 1);
                        return (
                          (it = 1 < it ? Math.ceil(it) : 1),
                          it * b > f &&
                            q !== 1 / 0 &&
                            D !== 1 / 0 &&
                            f &&
                            (it = Math.ceil(f / b)),
                          v(it * b)
                        );
                      };
                    let W,
                      V,
                      B = b,
                      R = Number.MAX_VALUE;
                    if (z) {
                      if (
                        (n.staggerLines ||
                          (g(J)
                            ? (V = [J])
                            : D < n.autoRotationLimit && (V = n.autoRotation)),
                        V)
                      ) {
                        let q;
                        for (const it of V)
                          (it === J || (it && -90 <= it && 90 >= it)) &&
                            ((q =
                              (z = _(Math.abs(r / Math.sin(y * it)))) +
                              Math.abs(it / 360)),
                            q < R && ((R = q), (W = it), (B = z)));
                      }
                    } else B = _(r);
                    return (
                      (this.autoRotation = V),
                      (this.labelRotation = d(W, g(J) ? J : 0)),
                      n.step ? b : B
                    );
                  }
                  getSlotWidth(n) {
                    const z = this.chart,
                      b = this.horiz,
                      D = this.options.labels,
                      J = Math.max(
                        this.tickPositions.length - (this.categories ? 0 : 1),
                        1
                      ),
                      r = z.margin[3];
                    if (n && g(n.slotWidth)) return n.slotWidth;
                    if (b && 2 > D.step)
                      return D.rotation
                        ? 0
                        : ((this.staggerLines || 1) * this.len) / J;
                    if (!b) {
                      if (void 0 !== (n = D.style.width))
                        return parseInt(String(n), 10);
                      if (r) return r - z.spacing[3];
                    }
                    return 0.33 * z.chartWidth;
                  }
                  renderUnsquish() {
                    const n = this.chart,
                      z = n.renderer,
                      b = this.tickPositions,
                      D = this.ticks,
                      J = this.options.labels,
                      r = J.style,
                      f = this.horiz,
                      _ = this.getSlotWidth();
                    var B = Math.max(1, Math.round(_ - 2 * J.padding));
                    const W = {},
                      R = this.labelMetrics(),
                      V = r.textOverflow;
                    let q,
                      it,
                      lt = 0;
                    if (
                      (i(J.rotation) || (W.rotation = J.rotation || 0),
                      b.forEach(function (w) {
                        (w = D[w]).movedLabel && w.replaceMovedLabel(),
                          w &&
                            w.label &&
                            w.label.textPxLength > lt &&
                            (lt = w.label.textPxLength);
                      }),
                      (this.maxLabelLength = lt),
                      this.autoRotation)
                    )
                      lt > B && lt > R.h
                        ? (W.rotation = this.labelRotation)
                        : (this.labelRotation = 0);
                    else if (_ && ((q = B), !V))
                      for (it = "clip", B = b.length; !f && B--; ) {
                        var gt = b[B];
                        (gt = D[gt].label) &&
                          (gt.styles && "ellipsis" === gt.styles.textOverflow
                            ? gt.css({ textOverflow: "clip" })
                            : gt.textPxLength > _ &&
                              gt.css({ width: _ + "px" }),
                          gt.getBBox().height >
                            this.len / b.length - (R.h - R.f) &&
                            (gt.specificTextOverflow = "ellipsis"));
                      }
                    W.rotation &&
                      ((q =
                        lt > 0.5 * n.chartHeight ? 0.33 * n.chartHeight : lt),
                      V || (it = "ellipsis")),
                      (this.labelAlign =
                        J.align || this.autoLabelAlign(this.labelRotation)) &&
                        (W.align = this.labelAlign),
                      b.forEach(function (w) {
                        const O = (w = D[w]) && w.label,
                          Q = r.width,
                          G = {};
                        O &&
                          (O.attr(W),
                          w.shortenLabel
                            ? w.shortenLabel()
                            : q &&
                              !Q &&
                              "nowrap" !== r.whiteSpace &&
                              (q < O.textPxLength ||
                                "SPAN" === O.element.tagName)
                            ? ((G.width = q + "px"),
                              V ||
                                (G.textOverflow = O.specificTextOverflow || it),
                              O.css(G))
                            : O.styles &&
                              O.styles.width &&
                              !G.width &&
                              !Q &&
                              O.css({ width: null }),
                          delete O.specificTextOverflow,
                          (w.rotation = W.rotation));
                      }, this),
                      (this.tickRotCorr = z.rotCorr(
                        R.b,
                        this.labelRotation || 0,
                        0 !== this.side
                      ));
                  }
                  hasData() {
                    return (
                      this.series.some(function (n) {
                        return n.hasData();
                      }) ||
                      (this.options.showEmpty && C(this.min) && C(this.max))
                    );
                  }
                  addTitle(n) {
                    const D = this.opposite,
                      J = this.options.title,
                      r = this.chart.styledMode;
                    let f;
                    this.axisTitle ||
                      ((f = J.textAlign) ||
                        (f = (
                          this.horiz
                            ? { low: "left", middle: "center", high: "right" }
                            : {
                                low: D ? "right" : "left",
                                middle: "center",
                                high: D ? "left" : "right",
                              }
                        )[J.align]),
                      (this.axisTitle = this.chart.renderer
                        .text(J.text || "", 0, 0, J.useHTML)
                        .attr({ zIndex: 7, rotation: J.rotation, align: f })
                        .addClass("highcharts-axis-title")),
                      r || this.axisTitle.css(e(J.style)),
                      this.axisTitle.add(this.axisGroup),
                      (this.axisTitle.isNew = !0)),
                      r ||
                        J.style.width ||
                        this.isRadial ||
                        this.axisTitle.css({ width: this.len + "px" }),
                      this.axisTitle[n ? "show" : "hide"](n);
                  }
                  generateTick(n) {
                    const z = this.ticks;
                    z[n] ? z[n].addLabel() : (z[n] = new nt(this, n));
                  }
                  getOffset() {
                    const n = this,
                      {
                        chart: z,
                        horiz: b,
                        options: D,
                        side: J,
                        ticks: r,
                        tickPositions: f,
                        coll: _,
                        axisParent: B,
                      } = n,
                      W = z.renderer,
                      R = z.inverted && !n.isZAxis ? [1, 0, 3, 2][J] : J;
                    var V = n.hasData();
                    const q = D.title;
                    var it = D.labels;
                    const lt = g(D.crossing);
                    var gt = z.axisOffset;
                    const w = z.clipOffset,
                      O = [-1, 1, 1, -1][J],
                      Q = D.className;
                    let G,
                      ct,
                      X = 0;
                    var ht = 0;
                    let Tt = 0;
                    if (
                      ((n.showAxis = G = V || D.showEmpty),
                      (n.staggerLines = (n.horiz && it.staggerLines) || void 0),
                      !n.axisGroup)
                    ) {
                      const Ct = (yt, vt, zt) =>
                        W.g(yt)
                          .attr({ zIndex: zt })
                          .addClass(
                            `highcharts-${_.toLowerCase()}${vt} ` +
                              (this.isRadial
                                ? `highcharts-radial-axis${vt} `
                                : "") +
                              (Q || "")
                          )
                          .add(B);
                      (n.gridGroup = Ct("grid", "-grid", D.gridZIndex)),
                        (n.axisGroup = Ct("axis", "", D.zIndex)),
                        (n.labelGroup = Ct(
                          "axis-labels",
                          "-labels",
                          it.zIndex
                        ));
                    }
                    V || n.isLinked
                      ? (f.forEach(function (Ct) {
                          n.generateTick(Ct);
                        }),
                        n.renderUnsquish(),
                        (n.reserveSpaceDefault =
                          0 === J ||
                          2 === J ||
                          { 1: "left", 3: "right" }[J] === n.labelAlign),
                        d(
                          it.reserveSpace,
                          !lt && null,
                          "center" === n.labelAlign || null,
                          n.reserveSpaceDefault
                        ) &&
                          f.forEach(function (Ct) {
                            Tt = Math.max(r[Ct].getLabelSize(), Tt);
                          }),
                        n.staggerLines && (Tt *= n.staggerLines),
                        (n.labelOffset = Tt * (n.opposite ? -1 : 1)))
                      : a(r, function (Ct, yt) {
                          Ct.destroy(), delete r[yt];
                        }),
                      q &&
                        q.text &&
                        !1 !== q.enabled &&
                        (n.addTitle(G),
                        G &&
                          !lt &&
                          !1 !== q.reserveSpace &&
                          ((n.titleOffset = X =
                            n.axisTitle.getBBox()[b ? "height" : "width"]),
                          (ct = q.offset),
                          (ht = C(ct) ? 0 : d(q.margin, b ? 5 : 10)))),
                      n.renderLine(),
                      (n.offset =
                        O * d(D.offset, gt[J] ? gt[J] + (D.margin || 0) : 0)),
                      (n.tickRotCorr = n.tickRotCorr || { x: 0, y: 0 }),
                      (V =
                        0 === J
                          ? -n.labelMetrics().h
                          : 2 === J
                          ? n.tickRotCorr.y
                          : 0),
                      (ht = Math.abs(Tt) + ht),
                      Tt &&
                        (ht =
                          ht -
                          V +
                          O *
                            (b
                              ? d(it.y, n.tickRotCorr.y + O * it.distance)
                              : d(it.x, O * it.distance))),
                      (n.axisTitleMargin = d(ct, ht)),
                      n.getMaxLabelDimensions &&
                        (n.maxLabelDimensions = n.getMaxLabelDimensions(r, f)),
                      "colorAxis" !== _ &&
                        ((it = this.tickSize("tick")),
                        (gt[J] = Math.max(
                          gt[J],
                          (n.axisTitleMargin || 0) + X + O * n.offset,
                          ht,
                          f && f.length && it ? it[0] + O * n.offset : 0
                        )),
                        (gt =
                          !n.axisLine || D.offset
                            ? 0
                            : 2 * Math.floor(n.axisLine.strokeWidth() / 2)),
                        (w[R] = Math.max(w[R], gt))),
                      l(this, "afterGetOffset");
                  }
                  getLinePath(n) {
                    const z = this.chart,
                      b = this.opposite;
                    var D = this.offset;
                    const J = this.horiz,
                      r = this.left + (b ? this.width : 0) + D;
                    return (
                      (D =
                        z.chartHeight -
                        this.bottom -
                        (b ? this.height : 0) +
                        D),
                      b && (n *= -1),
                      z.renderer.crispLine(
                        [
                          ["M", J ? this.left : r, J ? D : this.top],
                          [
                            "L",
                            J ? z.chartWidth - this.right : r,
                            J ? D : z.chartHeight - this.bottom,
                          ],
                        ],
                        n
                      )
                    );
                  }
                  renderLine() {
                    this.axisLine ||
                      ((this.axisLine = this.chart.renderer
                        .path()
                        .addClass("highcharts-axis-line")
                        .add(this.axisGroup)),
                      this.chart.styledMode ||
                        this.axisLine.attr({
                          stroke: this.options.lineColor,
                          "stroke-width": this.options.lineWidth,
                          zIndex: 7,
                        }));
                  }
                  getTitlePosition(n) {
                    var z = this.horiz,
                      b = this.left;
                    const D = this.top;
                    var J = this.len;
                    const r = this.options.title,
                      f = z ? b : D,
                      _ = this.opposite,
                      B = this.offset,
                      W = r.x,
                      R = r.y,
                      V = this.chart.renderer.fontMetrics(n);
                    return (
                      (n = n
                        ? Math.max(n.getBBox(!1, 0).height - V.h - 1, 0)
                        : 0),
                      (J = {
                        low: f + (z ? 0 : J),
                        middle: f + J / 2,
                        high: f + (z ? J : 0),
                      }[r.align]),
                      (b =
                        (z ? D + this.height : b) +
                        (z ? 1 : -1) *
                          (_ ? -1 : 1) *
                          (this.axisTitleMargin || 0) +
                        [-n, n, V.f, -n][this.side]),
                      l(this, "afterGetTitlePosition", {
                        titlePosition: (z = {
                          x: z ? J + W : b + (_ ? this.width : 0) + B + W,
                          y: z ? b + R - (_ ? this.height : 0) + B : J + R,
                        }),
                      }),
                      z
                    );
                  }
                  renderMinorTick(n, z) {
                    const b = this.minorTicks;
                    b[n] || (b[n] = new nt(this, n, "minor")),
                      z && b[n].isNew && b[n].render(null, !0),
                      b[n].render(null, !1, 1);
                  }
                  renderTick(n, z, b) {
                    const D = this.ticks;
                    (!this.isLinked ||
                      (n >= this.min && n <= this.max) ||
                      (this.grid && this.grid.isColumn)) &&
                      (D[n] || (D[n] = new nt(this, n)),
                      b && D[n].isNew && D[n].render(z, !0, -1),
                      D[n].render(z));
                  }
                  render() {
                    const n = this,
                      z = n.chart,
                      b = n.logarithmic,
                      D = n.options,
                      J = n.isLinked,
                      r = n.tickPositions,
                      f = n.axisTitle,
                      _ = n.ticks,
                      B = n.minorTicks,
                      W = n.alternateBands,
                      R = D.stackLabels,
                      V = D.alternateGridColor;
                    var q = D.crossing;
                    const it = n.tickmarkOffset,
                      lt = n.axisLine,
                      gt = n.showAxis,
                      w = H(z.renderer.globalAnimation);
                    let O, Q;
                    if (
                      ((n.labelEdge.length = 0),
                      (n.overlap = !1),
                      [_, B, W].forEach(function (G) {
                        a(G, function (X) {
                          X.isActive = !1;
                        });
                      }),
                      g(q))
                    ) {
                      const G = this.isXAxis ? z.yAxis[0] : z.xAxis[0],
                        X = [1, -1, -1, 1][this.side];
                      G &&
                        ((q = G.toPixels(q, !0)),
                        n.horiz && (q = G.len - q),
                        (n.offset = X * q));
                    }
                    if (n.hasData() || J) {
                      const G = n.chart.hasRendered && n.old && g(n.old.min);
                      n.minorTickInterval &&
                        !n.categories &&
                        n.getMinorTickPositions().forEach(function (X) {
                          n.renderMinorTick(X, G);
                        }),
                        r.length &&
                          (r.forEach(function (X, ct) {
                            n.renderTick(X, ct, G);
                          }),
                          it &&
                            (0 === n.min || n.single) &&
                            (_[-1] || (_[-1] = new nt(n, -1, null, !0)),
                            _[-1].render(-1))),
                        V &&
                          r.forEach(function (X, ct) {
                            (Q =
                              typeof r[ct + 1] < "u"
                                ? r[ct + 1] + it
                                : n.max - it),
                              ct % 2 == 0 &&
                                X < n.max &&
                                Q <= n.max + (z.polar ? -it : it) &&
                                (W[X] || (W[X] = new st.PlotLineOrBand(n)),
                                (O = X + it),
                                (W[X].options = {
                                  from: b ? b.lin2log(O) : O,
                                  to: b ? b.lin2log(Q) : Q,
                                  color: V,
                                  className: "highcharts-alternate-grid",
                                }),
                                W[X].render(),
                                (W[X].isActive = !0));
                          }),
                        n._addedPlotLB ||
                          ((n._addedPlotLB = !0),
                          (D.plotLines || [])
                            .concat(D.plotBands || [])
                            .forEach(function (X) {
                              n.addPlotBandOrLine(X);
                            }));
                    }
                    [_, B, W].forEach(function (G) {
                      const X = [],
                        ct = w.duration;
                      a(G, function (ht, Tt) {
                        ht.isActive ||
                          (ht.render(Tt, !1, 0),
                          (ht.isActive = !1),
                          X.push(Tt));
                      }),
                        Z(
                          function () {
                            let ht = X.length;
                            for (; ht--; )
                              G[X[ht]] &&
                                !G[X[ht]].isActive &&
                                (G[X[ht]].destroy(), delete G[X[ht]]);
                          },
                          G !== W && z.hasRendered && ct ? ct : 0
                        );
                    }),
                      lt &&
                        (lt[lt.isPlaced ? "animate" : "attr"]({
                          d: this.getLinePath(lt.strokeWidth()),
                        }),
                        (lt.isPlaced = !0),
                        lt[gt ? "show" : "hide"](gt)),
                      f &&
                        gt &&
                        (f[f.isNew ? "attr" : "animate"](n.getTitlePosition(f)),
                        (f.isNew = !1)),
                      R &&
                        R.enabled &&
                        n.stacking &&
                        n.stacking.renderStackTotals(),
                      (n.old = {
                        len: n.len,
                        max: n.max,
                        min: n.min,
                        transA: n.transA,
                        userMax: n.userMax,
                        userMin: n.userMin,
                      }),
                      (n.isDirty = !1),
                      l(this, "afterRender");
                  }
                  redraw() {
                    this.visible &&
                      (this.render(),
                      this.plotLinesAndBands.forEach(function (n) {
                        n.render();
                      })),
                      this.series.forEach(function (n) {
                        n.isDirty = !0;
                      });
                  }
                  getKeepProps() {
                    return this.keepProps || $.keepProps;
                  }
                  destroy(n) {
                    const z = this,
                      b = z.plotLinesAndBands,
                      D = this.eventOptions;
                    if (
                      (l(this, "destroy", { keepEvents: n }),
                      n || o(z),
                      [z.ticks, z.minorTicks, z.alternateBands].forEach(
                        function (J) {
                          u(J);
                        }
                      ),
                      b)
                    )
                      for (n = b.length; n--; ) b[n].destroy();
                    "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar"
                      .split(" ")
                      .forEach(function (J) {
                        z[J] && (z[J] = z[J].destroy());
                      });
                    for (const J in z.plotLinesAndBandsGroups)
                      z.plotLinesAndBandsGroups[J] =
                        z.plotLinesAndBandsGroups[J].destroy();
                    a(z, function (J, r) {
                      -1 === z.getKeepProps().indexOf(r) && delete z[r];
                    }),
                      (this.eventOptions = D);
                  }
                  drawCrosshair(n, z) {
                    const b = this.crosshair;
                    var D = d(b && b.snap, !0);
                    const J = this.chart;
                    let r,
                      f = this.cross;
                    if (
                      (l(this, "drawCrosshair", { e: n, point: z }),
                      n || (n = this.cross && this.cross.e),
                      b && !1 !== (C(z) || !D))
                    ) {
                      if (
                        (D
                          ? C(z) &&
                            (r = d(
                              "colorAxis" !== this.coll ? z.crosshairPos : null,
                              this.isXAxis ? z.plotX : this.len - z.plotY
                            ))
                          : (r =
                              n &&
                              (this.horiz
                                ? n.chartX - this.pos
                                : this.len - n.chartY + this.pos)),
                        C(r))
                      ) {
                        var _ = {
                          value: z && (this.isXAxis ? z.x : d(z.stackY, z.y)),
                          translatedValue: r,
                        };
                        J.polar &&
                          S(_, {
                            isCrosshair: !0,
                            chartX: n && n.chartX,
                            chartY: n && n.chartY,
                            point: z,
                          }),
                          (_ = this.getPlotLinePath(_) || null);
                      }
                      if (!C(_)) return void this.hideCrosshair();
                      (D = this.categories && !this.isRadial),
                        f ||
                          ((this.cross = f =
                            J.renderer
                              .path()
                              .addClass(
                                "highcharts-crosshair highcharts-crosshair-" +
                                  (D ? "category " : "thin ") +
                                  (b.className || "")
                              )
                              .attr({ zIndex: d(b.zIndex, 2) })
                              .add()),
                          J.styledMode ||
                            (f
                              .attr({
                                stroke:
                                  b.color ||
                                  (D
                                    ? j.parse("#ccd3ff").setOpacity(0.25).get()
                                    : "#cccccc"),
                                "stroke-width": d(b.width, 1),
                              })
                              .css({ "pointer-events": "none" }),
                            b.dashStyle && f.attr({ dashstyle: b.dashStyle }))),
                        f.show().attr({ d: _ }),
                        D &&
                          !b.width &&
                          f.attr({ "stroke-width": this.transA }),
                        (this.cross.e = n);
                    } else this.hideCrosshair();
                    l(this, "afterDrawCrosshair", { e: n, point: z });
                  }
                  hideCrosshair() {
                    this.cross && this.cross.hide(),
                      l(this, "afterHideCrosshair");
                  }
                  hasVerticalPanning() {
                    const n = this.chart.options.chart.panning;
                    return !!(n && n.enabled && /y/.test(n.type));
                  }
                  update(n, z) {
                    const b = this.chart;
                    (n = e(this.userOptions, n)),
                      this.destroy(!0),
                      this.init(b, n),
                      (b.isDirtyBox = !0),
                      d(z, !0) && b.redraw();
                  }
                  remove(n) {
                    const z = this.chart,
                      b = this.coll,
                      D = this.series;
                    let J = D.length;
                    for (; J--; ) D[J] && D[J].remove(!1);
                    A(z.axes, this),
                      A(z[b] || [], this),
                      z.orderItems(b),
                      this.destroy(),
                      (z.isDirtyBox = !0),
                      d(n, !0) && z.redraw();
                  }
                  setTitle(n, z) {
                    this.update({ title: n }, z);
                  }
                  setCategories(n, z) {
                    this.update({ categories: n }, z);
                  }
                }
                return (
                  ($.defaultOptions = Y.defaultXAxisOptions),
                  ($.keepProps =
                    "coll extKey hcEvents names series userMax userMin".split(
                      " "
                    )),
                  $
                );
              }
            ),
            ut(
              t,
              "Core/Axis/DateTimeAxis.js",
              [t["Core/Utilities.js"]],
              function (F) {
                const {
                  addEvent: Y,
                  getMagnitude: j,
                  normalizeTickInterval: tt,
                  timeUnits: et,
                } = F;
                var st;
                return (
                  (function (nt) {
                    function I() {
                      return this.chart.time.getTimeTicks.apply(
                        this.chart.time,
                        arguments
                      );
                    }
                    function H(y) {
                      "datetime" !== y.userOptions.type
                        ? (this.dateTime = void 0)
                        : this.dateTime || (this.dateTime = new x(this));
                    }
                    const N = [];
                    nt.compose = function (y) {
                      return (
                        F.pushUnique(N, y) &&
                          (y.keepProps.push("dateTime"),
                          (y.prototype.getTimeTicks = I),
                          Y(y, "init", H)),
                        y
                      );
                    };
                    class x {
                      constructor(P) {
                        this.axis = P;
                      }
                      normalizeTimeTickInterval(P, k) {
                        const p = k || [
                          [
                            "millisecond",
                            [1, 2, 5, 10, 20, 25, 50, 100, 200, 500],
                          ],
                          ["second", [1, 2, 5, 10, 15, 30]],
                          ["minute", [1, 2, 5, 10, 15, 30]],
                          ["hour", [1, 2, 3, 4, 6, 8, 12]],
                          ["day", [1, 2]],
                          ["week", [1, 2]],
                          ["month", [1, 2, 3, 4, 6]],
                          ["year", null],
                        ];
                        let u,
                          v = et[(k = p[p.length - 1])[0]],
                          C = k[1];
                        for (
                          u = 0;
                          u < p.length &&
                          ((v = et[(k = p[u])[0]]),
                          (C = k[1]),
                          !(
                            p[u + 1] &&
                            P <= (v * C[C.length - 1] + et[p[u + 1][0]]) / 2
                          ));
                          u++
                        );
                        return (
                          v === et.year && P < 5 * v && (C = [1, 2, 5]),
                          {
                            unitRange: v,
                            count: (P = tt(
                              P / v,
                              C,
                              "year" === k[0] ? Math.max(j(P / v), 1) : 1
                            )),
                            unitName: k[0],
                          }
                        );
                      }
                      getXDateFormat(P, k) {
                        const { axis: p } = this,
                          v = p.chart.time;
                        return p.closestPointRange
                          ? v.getDateFormat(
                              p.closestPointRange,
                              P,
                              p.options.startOfWeek,
                              k
                            ) || v.resolveDTLFormat(k.year).main
                          : v.resolveDTLFormat(k.day).main;
                      }
                    }
                    nt.Additions = x;
                  })(st || (st = {})),
                  st
                );
              }
            ),
            ut(
              t,
              "Core/Axis/LogarithmicAxis.js",
              [t["Core/Utilities.js"]],
              function (F) {
                const { addEvent: Y, normalizeTickInterval: j, pick: tt } = F;
                var et;
                return (
                  (function (st) {
                    function nt(x) {
                      let y = this.logarithmic;
                      "logarithmic" !== x.userOptions.type
                        ? (this.logarithmic = void 0)
                        : y || (this.logarithmic = new N(this));
                    }
                    function I() {
                      const x = this.logarithmic;
                      x &&
                        ((this.lin2val = function (y) {
                          return x.lin2log(y);
                        }),
                        (this.val2lin = function (y) {
                          return x.log2lin(y);
                        }));
                    }
                    const H = [];
                    st.compose = function (x) {
                      return (
                        F.pushUnique(H, x) &&
                          (x.keepProps.push("logarithmic"),
                          Y(x, "init", nt),
                          Y(x, "afterInit", I)),
                        x
                      );
                    };
                    class N {
                      constructor(y) {
                        this.axis = y;
                      }
                      getLogTickPositions(y, P, k, p) {
                        const v = this.axis;
                        var C = v.len,
                          u = v.options;
                        let A = [];
                        if ((p || (this.minorAutoInterval = void 0), 0.5 <= y))
                          (y = Math.round(y)),
                            (A = v.getLinearTickPositions(y, P, k));
                        else if (0.08 <= y) {
                          let T, S, l, h, m;
                          for (
                            u = Math.floor(P),
                              C =
                                0.3 < y
                                  ? [1, 2, 4]
                                  : 0.15 < y
                                  ? [1, 2, 4, 6, 8]
                                  : [1, 2, 3, 4, 5, 6, 7, 8, 9];
                            u < k + 1 && !m;
                            u++
                          )
                            for (S = C.length, T = 0; T < S && !m; T++)
                              (l = this.log2lin(this.lin2log(u) * C[T])),
                                l > P &&
                                  (!p || h <= k) &&
                                  typeof h < "u" &&
                                  A.push(h),
                                h > k && (m = !0),
                                (h = l);
                        } else
                          (P = this.lin2log(P)),
                            (k = this.lin2log(k)),
                            (y = p ? v.getMinorTickInterval() : u.tickInterval),
                            (y = tt(
                              "auto" === y ? null : y,
                              this.minorAutoInterval,
                              ((u.tickPixelInterval / (p ? 5 : 1)) * (k - P)) /
                                ((p ? C / v.tickPositions.length : C) || 1)
                            )),
                            (y = j(y)),
                            (A = v
                              .getLinearTickPositions(y, P, k)
                              .map(this.log2lin)),
                            p || (this.minorAutoInterval = y / 5);
                        return p || (v.tickInterval = y), A;
                      }
                      lin2log(y) {
                        return Math.pow(10, y);
                      }
                      log2lin(y) {
                        return Math.log(y) / Math.LN10;
                      }
                    }
                    st.Additions = N;
                  })(et || (et = {})),
                  et
                );
              }
            ),
            ut(
              t,
              "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js",
              [t["Core/Utilities.js"]],
              function (F) {
                const { erase: Y, extend: j, isNumber: tt } = F;
                var et;
                return (
                  (function (st) {
                    function nt(v) {
                      return this.addPlotBandOrLine(v, "plotBands");
                    }
                    function I(v, C) {
                      const u = this.userOptions;
                      let A = new p(this, v);
                      if ((this.visible && (A = A.render()), A)) {
                        if (
                          (this._addedPlotLB ||
                            ((this._addedPlotLB = !0),
                            (u.plotLines || [])
                              .concat(u.plotBands || [])
                              .forEach((T) => {
                                this.addPlotBandOrLine(T);
                              })),
                          C)
                        ) {
                          const T = u[C] || [];
                          T.push(v), (u[C] = T);
                        }
                        this.plotLinesAndBands.push(A);
                      }
                      return A;
                    }
                    function H(v) {
                      return this.addPlotBandOrLine(v, "plotLines");
                    }
                    function N(v, C, u = this.options) {
                      const A = this.getPlotLinePath({
                          value: C,
                          force: !0,
                          acrossPanes: u.acrossPanes,
                        }),
                        T = [],
                        S = this.horiz;
                      let l;
                      if (
                        ((C =
                          !tt(this.min) ||
                          !tt(this.max) ||
                          (v < this.min && C < this.min) ||
                          (v > this.max && C > this.max)),
                        (v = this.getPlotLinePath({
                          value: v,
                          force: !0,
                          acrossPanes: u.acrossPanes,
                        })),
                        (u = 1),
                        v && A)
                      )
                        for (
                          C && ((l = v.toString() === A.toString()), (u = 0)),
                            C = 0;
                          C < v.length;
                          C += 2
                        ) {
                          const h = v[C],
                            m = v[C + 1],
                            c = A[C],
                            g = A[C + 1];
                          ("M" !== h[0] && "L" !== h[0]) ||
                            ("M" !== m[0] && "L" !== m[0]) ||
                            ("M" !== c[0] && "L" !== c[0]) ||
                            ("M" !== g[0] && "L" !== g[0]) ||
                            (S && c[1] === h[1]
                              ? ((c[1] += u), (g[1] += u))
                              : S ||
                                c[2] !== h[2] ||
                                ((c[2] += u), (g[2] += u)),
                            T.push(
                              ["M", h[1], h[2]],
                              ["L", m[1], m[2]],
                              ["L", g[1], g[2]],
                              ["L", c[1], c[2]],
                              ["Z"]
                            )),
                            (T.isFlat = l);
                        }
                      return T;
                    }
                    function x(v) {
                      this.removePlotBandOrLine(v);
                    }
                    function y(v) {
                      const C = this.plotLinesAndBands,
                        u = this.options,
                        A = this.userOptions;
                      if (C) {
                        let T = C.length;
                        for (; T--; ) C[T].id === v && C[T].destroy();
                        [
                          u.plotLines || [],
                          A.plotLines || [],
                          u.plotBands || [],
                          A.plotBands || [],
                        ].forEach(function (S) {
                          for (T = S.length; T--; )
                            (S[T] || {}).id === v && Y(S, S[T]);
                        });
                      }
                    }
                    function P(v) {
                      this.removePlotBandOrLine(v);
                    }
                    const k = [];
                    let p;
                    st.compose = function (v, C) {
                      return (
                        p || (p = v),
                        F.pushUnique(k, C) &&
                          j(C.prototype, {
                            addPlotBand: nt,
                            addPlotLine: H,
                            addPlotBandOrLine: I,
                            getPlotBandPath: N,
                            removePlotBand: x,
                            removePlotLine: P,
                            removePlotBandOrLine: y,
                          }),
                        C
                      );
                    };
                  })(et || (et = {})),
                  et
                );
              }
            ),
            ut(
              t,
              "Core/Axis/PlotLineOrBand/PlotLineOrBand.js",
              [
                t["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y) {
                const {
                  arrayMax: j,
                  arrayMin: tt,
                  defined: et,
                  destroyObjectProperties: st,
                  erase: nt,
                  fireEvent: I,
                  merge: H,
                  objectEach: N,
                  pick: x,
                } = Y;
                class y {
                  static compose(k) {
                    return F.compose(y, k);
                  }
                  constructor(k, p) {
                    (this.axis = k),
                      p && ((this.options = p), (this.id = p.id));
                  }
                  render() {
                    I(this, "render");
                    const k = this,
                      p = k.axis,
                      v = p.horiz;
                    var C = p.logarithmic;
                    const u = k.options,
                      A = u.color,
                      T = x(u.zIndex, 0),
                      S = u.events,
                      l = {},
                      h = p.chart.renderer;
                    let m = u.label,
                      c = k.label,
                      g = u.to,
                      i = u.from,
                      e = u.value,
                      s = k.svgElem;
                    var a = [];
                    const d = et(i) && et(g);
                    a = et(e);
                    const E = !s,
                      o = {
                        class:
                          "highcharts-plot-" +
                          (d ? "band " : "line ") +
                          (u.className || ""),
                      };
                    let M = d ? "bands" : "lines";
                    if (
                      (C &&
                        ((i = C.log2lin(i)),
                        (g = C.log2lin(g)),
                        (e = C.log2lin(e))),
                      p.chart.styledMode ||
                        (a
                          ? ((o.stroke = A || "#999999"),
                            (o["stroke-width"] = x(u.width, 1)),
                            u.dashStyle && (o.dashstyle = u.dashStyle))
                          : d &&
                            ((o.fill = A || "#e6e9ff"),
                            u.borderWidth &&
                              ((o.stroke = u.borderColor),
                              (o["stroke-width"] = u.borderWidth)))),
                      (l.zIndex = T),
                      (M += "-" + T),
                      (C = p.plotLinesAndBandsGroups[M]) ||
                        (p.plotLinesAndBandsGroups[M] = C =
                          h
                            .g("plot-" + M)
                            .attr(l)
                            .add()),
                      E && (k.svgElem = s = h.path().attr(o).add(C)),
                      a)
                    )
                      a = p.getPlotLinePath({
                        value: e,
                        lineWidth: s.strokeWidth(),
                        acrossPanes: u.acrossPanes,
                      });
                    else {
                      if (!d) return;
                      a = p.getPlotBandPath(i, g, u);
                    }
                    return (
                      !k.eventsAdded &&
                        S &&
                        (N(S, function (Z, K) {
                          s.on(K, function ($) {
                            S[K].apply(k, [$]);
                          });
                        }),
                        (k.eventsAdded = !0)),
                      (E || !s.d) && a && a.length
                        ? s.attr({ d: a })
                        : s &&
                          (a
                            ? (s.show(), s.animate({ d: a }))
                            : s.d &&
                              (s.hide(), c && (k.label = c = c.destroy()))),
                      m &&
                      (et(m.text) || et(m.formatter)) &&
                      a &&
                      a.length &&
                      0 < p.width &&
                      0 < p.height &&
                      !a.isFlat
                        ? ((m = H(
                            {
                              align: v && d && "center",
                              x: v ? !d && 4 : 10,
                              verticalAlign: !v && d && "middle",
                              y: v ? (d ? 16 : 10) : d ? 6 : -4,
                              rotation: v && !d && 90,
                            },
                            m
                          )),
                          this.renderLabel(m, a, d, T))
                        : c && c.hide(),
                      k
                    );
                  }
                  renderLabel(k, p, v, C) {
                    const u = this.axis;
                    var A = u.chart.renderer;
                    let T = this.label;
                    T ||
                      ((this.label = T =
                        A.text(this.getLabelText(k), 0, 0, k.useHTML)
                          .attr({
                            align: k.textAlign || k.align,
                            rotation: k.rotation,
                            class:
                              "highcharts-plot-" +
                              (v ? "band" : "line") +
                              "-label " +
                              (k.className || ""),
                            zIndex: C,
                          })
                          .add()),
                      u.chart.styledMode ||
                        T.css(
                          H(
                            { fontSize: "0.8em", textOverflow: "ellipsis" },
                            k.style
                          )
                        )),
                      (C = p.xBounds || [
                        p[0][1],
                        p[1][1],
                        v ? p[2][1] : p[0][1],
                      ]),
                      (p = p.yBounds || [
                        p[0][2],
                        p[1][2],
                        v ? p[2][2] : p[0][2],
                      ]),
                      (v = tt(C)),
                      (A = tt(p)),
                      T.align(k, !1, {
                        x: v,
                        y: A,
                        width: j(C) - v,
                        height: j(p) - A,
                      }),
                      (T.alignValue && "left" !== T.alignValue) ||
                        ((k = k.clip ? u.width : u.chart.chartWidth),
                        T.css({
                          width:
                            (90 === T.rotation
                              ? u.height - (T.alignAttr.y - u.top)
                              : k - (T.alignAttr.x - u.left)) + "px",
                        })),
                      T.show(!0);
                  }
                  getLabelText(k) {
                    return et(k.formatter) ? k.formatter.call(this) : k.text;
                  }
                  destroy() {
                    nt(this.axis.plotLinesAndBands, this),
                      delete this.axis,
                      st(this);
                  }
                }
                return y;
              }
            ),
            ut(
              t,
              "Core/Tooltip.js",
              [
                t["Core/Templating.js"],
                t["Core/Globals.js"],
                t["Core/Renderer/RendererUtilities.js"],
                t["Core/Renderer/RendererRegistry.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j, tt, et) {
                const { format: st } = F,
                  { doc: nt, isSafari: I } = Y,
                  { distribute: H } = j,
                  {
                    addEvent: N,
                    clamp: x,
                    css: y,
                    discardElement: P,
                    extend: k,
                    fireEvent: p,
                    isArray: v,
                    isNumber: C,
                    isString: u,
                    merge: A,
                    pick: T,
                    splat: S,
                    syncTimeout: l,
                  } = et;
                class h {
                  constructor(c, g) {
                    (this.allowShared = !0),
                      (this.container = void 0),
                      (this.crosshairs = []),
                      (this.distance = 0),
                      (this.isHidden = !0),
                      (this.isSticky = !1),
                      (this.now = {}),
                      (this.options = {}),
                      (this.outside = !1),
                      (this.chart = c),
                      this.init(c, g);
                  }
                  bodyFormatter(c) {
                    return c.map(function (g) {
                      const i = g.series.tooltipOptions;
                      return (
                        i[(g.point.formatPrefix || "point") + "Formatter"] ||
                        g.point.tooltipFormatter
                      ).call(
                        g.point,
                        i[(g.point.formatPrefix || "point") + "Format"] || ""
                      );
                    });
                  }
                  cleanSplit(c) {
                    this.chart.series.forEach(function (g) {
                      const i = g && g.tt;
                      i &&
                        (!i.isActive || c
                          ? (g.tt = i.destroy())
                          : (i.isActive = !1));
                    });
                  }
                  defaultFormatter(c) {
                    const g = this.points || S(this);
                    let i;
                    return (
                      (i = [c.tooltipFooterHeaderFormatter(g[0])]),
                      (i = i.concat(c.bodyFormatter(g))),
                      i.push(c.tooltipFooterHeaderFormatter(g[0], !0)),
                      i
                    );
                  }
                  destroy() {
                    this.label && (this.label = this.label.destroy()),
                      this.split &&
                        (this.cleanSplit(!0),
                        this.tt && (this.tt = this.tt.destroy())),
                      this.renderer &&
                        ((this.renderer = this.renderer.destroy()),
                        P(this.container)),
                      et.clearTimeout(this.hideTimer),
                      et.clearTimeout(this.tooltipTimeout);
                  }
                  getAnchor(c, g) {
                    var i = this.chart;
                    const e = i.pointer,
                      s = i.inverted,
                      a = i.plotTop;
                    if (
                      ((i = i.plotLeft),
                      (c = S(c))[0].series &&
                        c[0].series.yAxis &&
                        !c[0].series.yAxis.options.reversedStacks &&
                        (c = c.slice().reverse()),
                      this.followPointer && g)
                    )
                      typeof g.chartX > "u" && (g = e.normalize(g)),
                        (c = [g.chartX - i, g.chartY - a]);
                    else if (c[0].tooltipPos) c = c[0].tooltipPos;
                    else {
                      let d = 0,
                        E = 0;
                      c.forEach(function (o) {
                        (o = o.pos(!0)) && ((d += o[0]), (E += o[1]));
                      }),
                        (d /= c.length),
                        (E /= c.length),
                        this.shared &&
                          1 < c.length &&
                          g &&
                          (s ? (d = g.chartX) : (E = g.chartY)),
                        (c = [d - i, E - a]);
                    }
                    return c.map(Math.round);
                  }
                  getClassName(c, g, i) {
                    const e = c.series,
                      s = e.options;
                    return [
                      this.options.className,
                      "highcharts-label",
                      i && "highcharts-tooltip-header",
                      g ? "highcharts-tooltip-box" : "highcharts-tooltip",
                      !i && "highcharts-color-" + T(c.colorIndex, e.colorIndex),
                      s && s.className,
                    ]
                      .filter(u)
                      .join(" ");
                  }
                  getLabel() {
                    const c = this,
                      g = this.chart.styledMode,
                      i = this.options,
                      e = this.split && this.allowShared,
                      s =
                        i.style.pointerEvents ||
                        (this.shouldStickOnContact() ? "auto" : "none");
                    let a,
                      d = this.chart.renderer;
                    if (this.label) {
                      var E = !this.label.hasClass("highcharts-label");
                      ((!e && E) || (e && !E)) && this.destroy();
                    }
                    if (!this.label) {
                      if (this.outside) {
                        E = this.chart.options.chart.style;
                        const o = tt.getRendererType();
                        (this.container = a = Y.doc.createElement("div")),
                          (a.className = "highcharts-tooltip-container"),
                          y(a, {
                            position: "absolute",
                            top: "1px",
                            pointerEvents: s,
                            zIndex: Math.max(
                              this.options.style.zIndex || 0,
                              ((E && E.zIndex) || 0) + 3
                            ),
                          }),
                          Y.doc.body.appendChild(a),
                          (this.renderer = d =
                            new o(a, 0, 0, E, void 0, void 0, d.styledMode));
                      }
                      if (
                        (e
                          ? (this.label = d.g("tooltip"))
                          : ((this.label = d
                              .label(
                                "",
                                0,
                                0,
                                i.shape,
                                void 0,
                                void 0,
                                i.useHTML,
                                void 0,
                                "tooltip"
                              )
                              .attr({ padding: i.padding, r: i.borderRadius })),
                            g ||
                              this.label
                                .attr({
                                  fill: i.backgroundColor,
                                  "stroke-width": i.borderWidth || 0,
                                })
                                .css(i.style)
                                .css({ pointerEvents: s })),
                        c.outside)
                      ) {
                        const o = this.label,
                          { xSetter: M, ySetter: Z } = o;
                        (o.xSetter = function (K) {
                          M.call(o, c.distance), (a.style.left = K + "px");
                        }),
                          (o.ySetter = function (K) {
                            Z.call(o, c.distance), (a.style.top = K + "px");
                          });
                      }
                      this.label.attr({ zIndex: 8 }).shadow(i.shadow).add();
                    }
                    return this.label;
                  }
                  getPlayingField() {
                    const { body: c, documentElement: g } = nt,
                      { chart: i, distance: e, outside: s } = this;
                    return {
                      width: s
                        ? Math.max(
                            c.scrollWidth,
                            g.scrollWidth,
                            c.offsetWidth,
                            g.offsetWidth,
                            g.clientWidth
                          ) -
                          2 * e
                        : i.chartWidth,
                      height: s
                        ? Math.max(
                            c.scrollHeight,
                            g.scrollHeight,
                            c.offsetHeight,
                            g.offsetHeight,
                            g.clientHeight
                          )
                        : i.chartHeight,
                    };
                  }
                  getPosition(c, g, i) {
                    const e = this.chart,
                      s = this.distance,
                      a = {},
                      d = (e.inverted && i.h) || 0,
                      E = this.outside;
                    var o = this.getPlayingField();
                    const M = o.width,
                      Z = o.height,
                      K = e.pointer.getChartPosition();
                    let n,
                      $ = (o = (f) => {
                        const _ = "x" === f;
                        return [f, _ ? M : Z, _ ? c : g].concat(
                          E
                            ? [
                                _ ? c * K.scaleX : g * K.scaleY,
                                _
                                  ? K.left -
                                    s +
                                    (i.plotX + e.plotLeft) * K.scaleX
                                  : K.top -
                                    s +
                                    (i.plotY + e.plotTop) * K.scaleY,
                                0,
                                _ ? M : Z,
                              ]
                            : [
                                _ ? c : g,
                                _ ? i.plotX + e.plotLeft : i.plotY + e.plotTop,
                                _ ? e.plotLeft : e.plotTop,
                                _
                                  ? e.plotLeft + e.plotWidth
                                  : e.plotTop + e.plotHeight,
                              ]
                        );
                      })("y"),
                      L = o("x");
                    (o = !!i.negative),
                      !e.polar &&
                        e.hoverSeries &&
                        e.hoverSeries.yAxis &&
                        e.hoverSeries.yAxis.reversed &&
                        (o = !o);
                    const z =
                        !this.followPointer && T(i.ttBelow, !e.inverted === o),
                      b = function (f, _, B, W, R, V, q) {
                        const it = E
                            ? "y" === f
                              ? s * K.scaleY
                              : s * K.scaleX
                            : s,
                          lt = (B - W) / 2,
                          gt = W < R - s,
                          w = R + s + W < _,
                          O = R - it - B + lt;
                        if (((R = R + it - lt), z && w)) a[f] = R;
                        else if (!z && gt) a[f] = O;
                        else if (gt)
                          a[f] = Math.min(q - W, 0 > O - d ? O : O - d);
                        else {
                          if (!w) return !1;
                          a[f] = Math.max(V, R + d + B > _ ? R : R + d);
                        }
                      },
                      D = function (f, _, B, W, R) {
                        let V;
                        return (
                          R < s || R > _ - s
                            ? (V = !1)
                            : (a[f] =
                                R < B / 2
                                  ? 1
                                  : R > _ - W / 2
                                  ? _ - W - 2
                                  : R - B / 2),
                          V
                        );
                      },
                      J = function (f) {
                        const _ = $;
                        ($ = L), (L = _), (n = f);
                      },
                      r = function () {
                        !1 !== b.apply(0, $)
                          ? !1 !== D.apply(0, L) || n || (J(!0), r())
                          : n
                          ? (a.x = a.y = 0)
                          : (J(!0), r());
                      };
                    return (e.inverted || 1 < this.len) && J(), r(), a;
                  }
                  hide(c) {
                    const g = this;
                    et.clearTimeout(this.hideTimer),
                      (c = T(c, this.options.hideDelay)),
                      this.isHidden ||
                        (this.hideTimer = l(function () {
                          g.getLabel().fadeOut(c && void 0), (g.isHidden = !0);
                        }, c));
                  }
                  init(c, g) {
                    (this.chart = c),
                      (this.options = g),
                      (this.crosshairs = []),
                      (this.now = { x: 0, y: 0 }),
                      (this.isHidden = !0),
                      (this.split = g.split && !c.inverted && !c.polar),
                      (this.shared = g.shared || this.split),
                      (this.outside = T(
                        g.outside,
                        !(!c.scrollablePixelsX && !c.scrollablePixelsY)
                      ));
                  }
                  shouldStickOnContact(c) {
                    return !(
                      this.followPointer ||
                      !this.options.stickOnContact ||
                      (c &&
                        !this.chart.pointer.inClass(
                          c.target,
                          "highcharts-tooltip"
                        ))
                    );
                  }
                  move(c, g, i, e) {
                    const s = this,
                      a = s.now,
                      d =
                        !1 !== s.options.animation &&
                        !s.isHidden &&
                        (1 < Math.abs(c - a.x) || 1 < Math.abs(g - a.y)),
                      E = s.followPointer || 1 < s.len;
                    k(a, {
                      x: d ? (2 * a.x + c) / 3 : c,
                      y: d ? (a.y + g) / 2 : g,
                      anchorX: E ? void 0 : d ? (2 * a.anchorX + i) / 3 : i,
                      anchorY: E ? void 0 : d ? (a.anchorY + e) / 2 : e,
                    }),
                      s.getLabel().attr(a),
                      s.drawTracker(),
                      d &&
                        (et.clearTimeout(this.tooltipTimeout),
                        (this.tooltipTimeout = setTimeout(function () {
                          s && s.move(c, g, i, e);
                        }, 32)));
                  }
                  refresh(c, g) {
                    const i = this.chart,
                      e = this.options,
                      s = i.pointer,
                      a = S(c),
                      d = a[0],
                      E = [];
                    var o = e.format,
                      M = e.formatter || this.defaultFormatter;
                    const Z = this.shared,
                      K = i.styledMode;
                    let $ = {};
                    if (e.enabled && d.series) {
                      et.clearTimeout(this.hideTimer),
                        (this.allowShared = !(
                          !v(c) &&
                          c.series &&
                          c.series.noSharedTooltip
                        )),
                        (this.followPointer =
                          !this.split && d.series.tooltipOptions.followPointer);
                      var L = (c = this.getAnchor(c, g))[0],
                        n = c[1];
                      if (
                        (Z && this.allowShared
                          ? (s.applyInactiveState(a),
                            a.forEach(function (z) {
                              z.setState("hover"), E.push(z.getLabelConfig());
                            }),
                            ($ = d.getLabelConfig()),
                            ($.points = E))
                          : ($ = d.getLabelConfig()),
                        (this.len = E.length),
                        (o = u(o) ? st(o, $, i) : M.call($, this)),
                        (this.distance = T(
                          (M = d.series).tooltipOptions.distance,
                          16
                        )),
                        !1 === o)
                      )
                        this.hide();
                      else {
                        if (this.split && this.allowShared)
                          this.renderSplit(o, a);
                        else {
                          let z = L,
                            b = n;
                          if (
                            (g &&
                              s.isDirectTouch &&
                              ((z = g.chartX - i.plotLeft),
                              (b = g.chartY - i.plotTop)),
                            !i.polar &&
                              !1 !== M.options.clip &&
                              !a.some(
                                (D) =>
                                  s.isDirectTouch ||
                                  D.series.shouldShowTooltip(z, b)
                              ))
                          )
                            return void this.hide();
                          (g = this.getLabel()),
                            (e.style.width && !K) ||
                              g.css({
                                width:
                                  (this.outside
                                    ? this.getPlayingField()
                                    : i.spacingBox
                                  ).width + "px",
                              }),
                            g.attr({ text: o && o.join ? o.join("") : o }),
                            g.addClass(this.getClassName(d), !0),
                            K ||
                              g.attr({
                                stroke:
                                  e.borderColor ||
                                  d.color ||
                                  M.color ||
                                  "#666666",
                              }),
                            this.updatePosition({
                              plotX: L,
                              plotY: n,
                              negative: d.negative,
                              ttBelow: d.ttBelow,
                              h: c[2] || 0,
                            });
                        }
                        this.isHidden &&
                          this.label &&
                          this.label.attr({ opacity: 1 }).show(),
                          (this.isHidden = !1);
                      }
                      p(this, "refresh");
                    }
                  }
                  renderSplit(c, g) {
                    function i(G, X, ct, ht, Tt = !0) {
                      return (
                        ct
                          ? ((X = B ? 0 : it),
                            (G = x(
                              G - ht / 2,
                              r.left,
                              r.right - ht - (e.outside ? W : 0)
                            )))
                          : ((X -= V),
                            (G = x(
                              (G = Tt ? G - ht - b : G + b),
                              Tt ? G : r.left,
                              r.right
                            ))),
                        { x: G, y: X }
                      );
                    }
                    const e = this,
                      {
                        chart: s,
                        chart: {
                          chartWidth: a,
                          chartHeight: d,
                          plotHeight: E,
                          plotLeft: o,
                          plotTop: M,
                          pointer: Z,
                          scrollablePixelsY: K = 0,
                          scrollablePixelsX: $,
                          scrollingContainer: {
                            scrollLeft: L,
                            scrollTop: n,
                          } = { scrollLeft: 0, scrollTop: 0 },
                          styledMode: z,
                        },
                        distance: b,
                        options: D,
                        options: { positioner: J },
                      } = e,
                      r =
                        e.outside && "number" != typeof $
                          ? nt.documentElement.getBoundingClientRect()
                          : { left: L, right: L + a, top: n, bottom: n + d },
                      f = e.getLabel(),
                      _ = this.renderer || s.renderer,
                      B = !(!s.xAxis[0] || !s.xAxis[0].opposite),
                      { left: W, top: R } = Z.getChartPosition();
                    let V = M + n,
                      q = 0,
                      it = E - K;
                    u(c) && (c = [!1, c]),
                      (c = c.slice(0, g.length + 1).reduce(function (G, X, ct) {
                        if (!1 !== X && "" !== X) {
                          const zt = (ct = g[ct - 1] || {
                            isHeader: !0,
                            plotX: g[0].plotX,
                            plotY: E,
                            series: {},
                          }).isHeader;
                          var Tt,
                            ht = zt ? e : ct.series;
                          {
                            var Ct = ct;
                            X = X.toString();
                            var yt = ht.tt;
                            const { isHeader: kt, series: It } = Ct;
                            yt ||
                              ((yt = { padding: D.padding, r: D.borderRadius }),
                              z ||
                                ((yt.fill = D.backgroundColor),
                                (yt["stroke-width"] =
                                  null !== (Tt = D.borderWidth) && void 0 !== Tt
                                    ? Tt
                                    : 1)),
                              (yt = _.label(
                                "",
                                0,
                                0,
                                D[kt ? "headerShape" : "shape"],
                                void 0,
                                void 0,
                                D.useHTML
                              )
                                .addClass(e.getClassName(Ct, !0, kt))
                                .attr(yt)
                                .add(f))),
                              (yt.isActive = !0),
                              yt.attr({ text: X }),
                              z ||
                                yt.css(D.style).attr({
                                  stroke:
                                    D.borderColor ||
                                    Ct.color ||
                                    It.color ||
                                    "#333333",
                                }),
                              (Tt = yt);
                          }
                          (Tt = ht.tt = Tt),
                            (ht = (Ct = Tt.getBBox()).width + Tt.strokeWidth()),
                            zt && ((q = Ct.height), (it += q), B && (V -= q));
                          {
                            const {
                              isHeader: kt,
                              plotX: It = 0,
                              plotY: Lt = 0,
                              series: Ut,
                            } = ct;
                            if (kt) {
                              X = o + It;
                              var vt = M + E / 2;
                            } else {
                              const { xAxis: Wt, yAxis: jt } = Ut;
                              (X = Wt.pos + x(It, -b, Wt.len + b)),
                                Ut.shouldShowTooltip(0, jt.pos - M + Lt, {
                                  ignoreX: !0,
                                }) && (vt = jt.pos + Lt);
                            }
                            vt = {
                              anchorX: (X = x(X, r.left - b, r.right + b)),
                              anchorY: vt,
                            };
                          }
                          const { anchorX: Et, anchorY: Pt } = vt;
                          "number" == typeof Pt
                            ? ((vt = Ct.height + 1),
                              (Ct = J
                                ? J.call(e, ht, vt, ct)
                                : i(Et, Pt, zt, ht)),
                              G.push({
                                align: J ? 0 : void 0,
                                anchorX: Et,
                                anchorY: Pt,
                                boxWidth: ht,
                                point: ct,
                                rank: T(Ct.rank, zt ? 1 : 0),
                                size: vt,
                                target: Ct.y,
                                tt: Tt,
                                x: Ct.x,
                              }))
                            : (Tt.isActive = !1);
                        }
                        return G;
                      }, [])),
                      !J &&
                        c.some((G) => {
                          var { outside: X } = e;
                          return (
                            ((X = (X ? W : 0) + G.anchorX) < r.left &&
                              X + G.boxWidth < r.right) ||
                            (X < W - r.left + G.boxWidth && r.right - X > X)
                          );
                        }) &&
                        (c = c.map((G) => {
                          const { x: X, y: ct } = i(
                            G.anchorX,
                            G.anchorY,
                            G.point.isHeader,
                            G.boxWidth,
                            !1
                          );
                          return k(G, { target: ct, x: X });
                        })),
                      e.cleanSplit(),
                      H(c, it);
                    var lt = W,
                      gt = W;
                    c.forEach(function (G) {
                      const { x: X, boxWidth: ct, isHeader: ht } = G;
                      ht ||
                        (e.outside && W + X < lt && (lt = W + X),
                        !ht && e.outside && lt + ct > gt && (gt = W + X));
                    }),
                      c.forEach(function (G) {
                        const {
                            x: X,
                            anchorX: ct,
                            anchorY: ht,
                            pos: Tt,
                            point: { isHeader: Ct },
                          } = G,
                          yt = {
                            visibility: typeof Tt > "u" ? "hidden" : "inherit",
                            x: X,
                            y: (Tt || 0) + V,
                            anchorX: ct,
                            anchorY: ht,
                          };
                        if (e.outside && X < ct) {
                          const vt = W - lt;
                          0 < vt &&
                            (Ct || ((yt.x = X + vt), (yt.anchorX = ct + vt)),
                            Ct &&
                              ((yt.x = (gt - lt) / 2), (yt.anchorX = ct + vt)));
                        }
                        G.tt.attr(yt);
                      });
                    const { container: w, outside: O, renderer: Q } = e;
                    if (O && w && Q) {
                      const { width: G, height: X, x: ct, y: ht } = f.getBBox();
                      Q.setSize(G + ct, X + ht, !1),
                        (w.style.left = lt + "px"),
                        (w.style.top = R + "px");
                    }
                    I && f.attr({ opacity: 1 === f.opacity ? 0.999 : 1 });
                  }
                  drawTracker() {
                    if (this.shouldStickOnContact()) {
                      var c = this.chart,
                        g = this.label,
                        i = this.shared ? c.hoverPoints : c.hoverPoint;
                      if (g && i) {
                        var e = { x: 0, y: 0, width: 0, height: 0 };
                        i = this.getAnchor(i);
                        var s = g.getBBox();
                        (i[0] += c.plotLeft - g.translateX),
                          (i[1] += c.plotTop - g.translateY),
                          (e.x = Math.min(0, i[0])),
                          (e.y = Math.min(0, i[1])),
                          (e.width =
                            0 > i[0]
                              ? Math.max(Math.abs(i[0]), s.width - i[0])
                              : Math.max(Math.abs(i[0]), s.width)),
                          (e.height =
                            0 > i[1]
                              ? Math.max(
                                  Math.abs(i[1]),
                                  s.height - Math.abs(i[1])
                                )
                              : Math.max(Math.abs(i[1]), s.height)),
                          this.tracker
                            ? this.tracker.attr(e)
                            : ((this.tracker = g.renderer
                                .rect(e)
                                .addClass("highcharts-tracker")
                                .add(g)),
                              c.styledMode ||
                                this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
                      }
                    } else
                      this.tracker && (this.tracker = this.tracker.destroy());
                  }
                  styledModeFormat(c) {
                    return c
                      .replace(
                        'style="font-size: 0.8em"',
                        'class="highcharts-header"'
                      )
                      .replace(
                        /style="color:{(point|series)\.color}"/g,
                        'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"'
                      );
                  }
                  tooltipFooterHeaderFormatter(c, g) {
                    const i = c.series,
                      e = i.tooltipOptions;
                    var s = i.xAxis;
                    const a = s && s.dateTime;
                    let d = e.xDateFormat,
                      E = e[g ? "footerFormat" : "headerFormat"];
                    return (
                      p(
                        this,
                        "headerFormatter",
                        (s = { isFooter: g, labelConfig: c }),
                        function (o) {
                          a &&
                            !d &&
                            C(c.key) &&
                            (d = a.getXDateFormat(
                              c.key,
                              e.dateTimeLabelFormats
                            )),
                            a &&
                              d &&
                              (
                                (c.point && c.point.tooltipDateKeys) || ["key"]
                              ).forEach(function (M) {
                                E = E.replace(
                                  "{point." + M + "}",
                                  "{point." + M + ":" + d + "}"
                                );
                              }),
                            i.chart.styledMode &&
                              (E = this.styledModeFormat(E)),
                            (o.text = st(
                              E,
                              { point: c, series: i },
                              this.chart
                            ));
                        }
                      ),
                      s.text
                    );
                  }
                  update(c) {
                    this.destroy(),
                      this.init(this.chart, A(!0, this.options, c));
                  }
                  updatePosition(c) {
                    const { chart: g, distance: i, options: e } = this;
                    var s = g.pointer;
                    const a = this.getLabel(),
                      {
                        left: d,
                        top: E,
                        scaleX: o,
                        scaleY: M,
                      } = s.getChartPosition();
                    s = (e.positioner || this.getPosition).call(
                      this,
                      a.width,
                      a.height,
                      c
                    );
                    let K,
                      Z = (c.plotX || 0) + g.plotLeft;
                    (c = (c.plotY || 0) + g.plotTop),
                      this.outside &&
                        (e.positioner && ((s.x += d - i), (s.y += E - i)),
                        (K = (e.borderWidth || 0) + 2 * i),
                        this.renderer.setSize(a.width + K, a.height + K, !1),
                        (1 !== o || 1 !== M) &&
                          (y(this.container, {
                            transform: `scale(${o}, ${M})`,
                          }),
                          (Z *= o),
                          (c *= M)),
                        (Z += d - s.x),
                        (c += E - s.y)),
                      this.move(Math.round(s.x), Math.round(s.y || 0), Z, c);
                  }
                }
                return (
                  (function (m) {
                    const c = [];
                    m.compose = function (g) {
                      et.pushUnique(c, g) &&
                        N(g, "afterInit", function () {
                          const i = this.chart;
                          i.options.tooltip &&
                            (i.tooltip = new m(i, i.options.tooltip));
                        });
                    };
                  })(h || (h = {})),
                  h
                );
              }
            ),
            ut(
              t,
              "Core/Series/Point.js",
              [
                t["Core/Renderer/HTML/AST.js"],
                t["Core/Animation/AnimationUtilities.js"],
                t["Core/Defaults.js"],
                t["Core/Templating.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j, tt, et) {
                const { animObject: st } = Y,
                  { defaultOptions: nt } = j,
                  { format: I } = tt,
                  {
                    addEvent: H,
                    defined: N,
                    erase: x,
                    extend: y,
                    fireEvent: P,
                    getNestedProperty: k,
                    isArray: p,
                    isFunction: v,
                    isNumber: C,
                    isObject: u,
                    merge: A,
                    objectEach: T,
                    pick: S,
                    syncTimeout: l,
                    removeEvent: h,
                    uniqueKey: m,
                  } = et;
                class c {
                  constructor() {
                    (this.category = void 0),
                      (this.destroyed = !1),
                      (this.formatPrefix = "point"),
                      (this.id = void 0),
                      (this.isNull = !1),
                      (this.percentage = this.options = this.name = void 0),
                      (this.selected = !1),
                      (this.total = this.shapeArgs = this.series = void 0),
                      (this.visible = !0),
                      (this.x = void 0);
                  }
                  animateBeforeDestroy() {
                    const i = this,
                      e = { x: i.startXPos, opacity: 0 },
                      s = i.getGraphicalProps();
                    s.singular.forEach(function (a) {
                      i[a] = i[a].animate(
                        "dataLabel" === a
                          ? { x: i[a].startXPos, y: i[a].startYPos, opacity: 0 }
                          : e
                      );
                    }),
                      s.plural.forEach(function (a) {
                        i[a].forEach(function (d) {
                          d.element &&
                            d.animate(
                              y(
                                { x: i.startXPos },
                                d.startYPos
                                  ? { x: d.startXPos, y: d.startYPos }
                                  : {}
                              )
                            );
                        });
                      });
                  }
                  applyOptions(i, e) {
                    const s = this.series,
                      a = s.options.pointValKey || s.pointValKey;
                    return (
                      (i = c.prototype.optionsToObject.call(this, i)),
                      y(this, i),
                      (this.options = this.options ? y(this.options, i) : i),
                      i.group && delete this.group,
                      i.dataLabels && delete this.dataLabels,
                      a &&
                        (this.y = c.prototype.getNestedProperty.call(this, a)),
                      (this.formatPrefix = (this.isNull =
                        this.isValid && !this.isValid())
                        ? "null"
                        : "point"),
                      this.selected && (this.state = "select"),
                      "name" in this &&
                        typeof e > "u" &&
                        s.xAxis &&
                        s.xAxis.hasNames &&
                        (this.x = s.xAxis.nameToX(this)),
                      typeof this.x > "u" && s
                        ? (this.x = typeof e > "u" ? s.autoIncrement() : e)
                        : C(i.x) &&
                          s.options.relativeXValue &&
                          (this.x = s.autoIncrement(i.x)),
                      this
                    );
                  }
                  destroy() {
                    if (!this.destroyed) {
                      const e = this;
                      var i = e.series;
                      const s = i.chart;
                      i = i.options.dataSorting;
                      const a = s.hoverPoints,
                        d = st(e.series.chart.renderer.globalAnimation),
                        E = () => {
                          (e.graphic ||
                            e.graphics ||
                            e.dataLabel ||
                            e.dataLabels) &&
                            (h(e), e.destroyElements());
                          for (const o in e) delete e[o];
                        };
                      e.legendItem && s.legend.destroyItem(e),
                        a &&
                          (e.setState(),
                          x(a, e),
                          a.length || (s.hoverPoints = null)),
                        e === s.hoverPoint && e.onMouseOut(),
                        i && i.enabled
                          ? (this.animateBeforeDestroy(), l(E, d.duration))
                          : E(),
                        s.pointCount--;
                    }
                    this.destroyed = !0;
                  }
                  destroyElements(i) {
                    const e = this;
                    (i = e.getGraphicalProps(i)).singular.forEach(function (s) {
                      e[s] = e[s].destroy();
                    }),
                      i.plural.forEach(function (s) {
                        e[s].forEach(function (a) {
                          a && a.element && a.destroy();
                        }),
                          delete e[s];
                      });
                  }
                  firePointEvent(i, e, s) {
                    const a = this,
                      d = this.series.options;
                    (d.point.events[i] ||
                      (a.options && a.options.events && a.options.events[i])) &&
                      a.importEvents(),
                      "click" === i &&
                        d.allowPointSelect &&
                        (s = function (E) {
                          a.select &&
                            a.select(
                              null,
                              E.ctrlKey || E.metaKey || E.shiftKey
                            );
                        }),
                      P(a, i, e, s);
                  }
                  getClassName() {
                    return (
                      "highcharts-point" +
                      (this.selected ? " highcharts-point-select" : "") +
                      (this.negative ? " highcharts-negative" : "") +
                      (this.isNull ? " highcharts-null-point" : "") +
                      (typeof this.colorIndex < "u"
                        ? " highcharts-color-" + this.colorIndex
                        : "") +
                      (this.options.className
                        ? " " + this.options.className
                        : "") +
                      (this.zone && this.zone.className
                        ? " " +
                          this.zone.className.replace("highcharts-negative", "")
                        : "")
                    );
                  }
                  getGraphicalProps(i) {
                    const e = this,
                      s = [],
                      a = { singular: [], plural: [] };
                    let d, E;
                    for (
                      (i = i || { graphic: 1, dataLabel: 1 }).graphic &&
                        s.push("graphic"),
                        i.dataLabel &&
                          s.push(
                            "dataLabel",
                            "dataLabelPath",
                            "dataLabelUpper",
                            "connector"
                          ),
                        E = s.length;
                      E--;

                    )
                      (d = s[E]), e[d] && a.singular.push(d);
                    return (
                      ["graphic", "dataLabel", "connector"].forEach(function (
                        o
                      ) {
                        const M = o + "s";
                        i[o] && e[M] && a.plural.push(M);
                      }),
                      a
                    );
                  }
                  getLabelConfig() {
                    return {
                      x: this.category,
                      y: this.y,
                      color: this.color,
                      colorIndex: this.colorIndex,
                      key: this.name || this.category,
                      series: this.series,
                      point: this,
                      percentage: this.percentage,
                      total: this.total || this.stackTotal,
                    };
                  }
                  getNestedProperty(i) {
                    if (i)
                      return 0 === i.indexOf("custom.")
                        ? k(i, this.options)
                        : this[i];
                  }
                  getZone() {
                    var i = this.series;
                    const e = i.zones;
                    i = i.zoneAxis || "y";
                    let s,
                      a = 0;
                    for (s = e[a]; this[i] >= s.value; ) s = e[++a];
                    return (
                      this.nonZonedColor || (this.nonZonedColor = this.color),
                      (this.color =
                        s && s.color && !this.options.color
                          ? s.color
                          : this.nonZonedColor),
                      s
                    );
                  }
                  hasNewShapeType() {
                    return (
                      (this.graphic &&
                        (this.graphic.symbolName ||
                          this.graphic.element.nodeName)) !== this.shapeType
                    );
                  }
                  init(i, e, s) {
                    return (
                      (this.series = i),
                      this.applyOptions(e, s),
                      (this.id = N(this.id) ? this.id : m()),
                      this.resolveColor(),
                      i.chart.pointCount++,
                      P(this, "afterInit"),
                      this
                    );
                  }
                  isValid() {
                    return null !== this.x && C(this.y);
                  }
                  optionsToObject(i) {
                    var e = this.series;
                    const s = e.options.keys,
                      a = s || e.pointArrayMap || ["y"],
                      d = a.length;
                    let E = {},
                      o = 0,
                      M = 0;
                    if (C(i) || null === i) E[a[0]] = i;
                    else if (p(i))
                      for (
                        !s &&
                        i.length > d &&
                        ("string" == (e = typeof i[0])
                          ? (E.name = i[0])
                          : "number" === e && (E.x = i[0]),
                        o++);
                        M < d;

                      )
                        (s && typeof i[o] > "u") ||
                          (0 < a[M].indexOf(".")
                            ? c.prototype.setNestedProperty(E, i[o], a[M])
                            : (E[a[M]] = i[o])),
                          o++,
                          M++;
                    else
                      "object" == typeof i &&
                        ((E = i),
                        i.dataLabels && (e._hasPointLabels = !0),
                        i.marker && (e._hasPointMarkers = !0));
                    return E;
                  }
                  pos(i, e = this.plotY) {
                    if (!this.destroyed) {
                      const { plotX: s, series: a } = this,
                        { chart: d, xAxis: E, yAxis: o } = a;
                      let M = 0,
                        Z = 0;
                      if (C(s) && C(e))
                        return (
                          i &&
                            ((M = E ? E.pos : d.plotLeft),
                            (Z = o ? o.pos : d.plotTop)),
                          d.inverted && E && o
                            ? [o.len - e + Z, E.len - s + M]
                            : [s + M, e + Z]
                        );
                    }
                  }
                  resolveColor() {
                    const i = this.series;
                    var e = i.chart.styledMode;
                    let s;
                    var a = i.chart.options.chart.colorCount;
                    delete this.nonZonedColor,
                      i.options.colorByPoint
                        ? (e ||
                            ((s = (a =
                              i.options.colors || i.chart.options.colors)[
                              i.colorCounter
                            ]),
                            (a = a.length)),
                          (e = i.colorCounter),
                          i.colorCounter++,
                          i.colorCounter === a && (i.colorCounter = 0))
                        : (e || (s = i.color), (e = i.colorIndex)),
                      (this.colorIndex = S(this.options.colorIndex, e)),
                      (this.color = S(this.options.color, s));
                  }
                  setNestedProperty(i, e, s) {
                    return (
                      s.split(".").reduce(function (a, d, E, o) {
                        return (
                          (a[d] =
                            o.length - 1 === E ? e : u(a[d], !0) ? a[d] : {}),
                          a[d]
                        );
                      }, i),
                      i
                    );
                  }
                  shouldDraw() {
                    return !this.isNull;
                  }
                  tooltipFormatter(i) {
                    const e = this.series,
                      s = e.tooltipOptions,
                      a = S(s.valueDecimals, ""),
                      d = s.valuePrefix || "",
                      E = s.valueSuffix || "";
                    return (
                      e.chart.styledMode &&
                        (i = e.chart.tooltip.styledModeFormat(i)),
                      (e.pointArrayMap || ["y"]).forEach(function (o) {
                        (o = "{point." + o),
                          (d || E) &&
                            (i = i.replace(
                              RegExp(o + "}", "g"),
                              d + o + "}" + E
                            )),
                          (i = i.replace(
                            RegExp(o + "}", "g"),
                            o + ":,." + a + "f}"
                          ));
                      }),
                      I(i, { point: this, series: this.series }, e.chart)
                    );
                  }
                  update(i, e, s, a) {
                    function d() {
                      E.applyOptions(i);
                      var L = M && E.hasMockGraphic;
                      (L = null === E.y ? !L : L),
                        M &&
                          L &&
                          ((E.graphic = M.destroy()), delete E.hasMockGraphic),
                        u(i, !0) &&
                          (M &&
                            M.element &&
                            i &&
                            i.marker &&
                            typeof i.marker.symbol < "u" &&
                            (E.graphic = M.destroy()),
                          i &&
                            i.dataLabels &&
                            E.dataLabel &&
                            (E.dataLabel = E.dataLabel.destroy()),
                          E.connector && (E.connector = E.connector.destroy())),
                        ($ = E.index),
                        o.updateParallelArrays(E, $),
                        (K.data[$] =
                          u(K.data[$], !0) || u(i, !0)
                            ? E.options
                            : S(i, K.data[$])),
                        (o.isDirty = o.isDirtyData = !0),
                        !o.fixedBox &&
                          o.hasCartesianSeries &&
                          (Z.isDirtyBox = !0),
                        "point" === K.legendType && (Z.isDirtyLegend = !0),
                        e && Z.redraw(s);
                    }
                    const E = this,
                      o = E.series,
                      M = E.graphic,
                      Z = o.chart,
                      K = o.options;
                    let $;
                    (e = S(e, !0)),
                      !1 === a
                        ? d()
                        : E.firePointEvent("update", { options: i }, d);
                  }
                  remove(i, e) {
                    this.series.removePoint(
                      this.series.data.indexOf(this),
                      i,
                      e
                    );
                  }
                  select(i, e) {
                    const s = this,
                      a = s.series,
                      d = a.chart;
                    (this.selectedStaging = i = S(i, !s.selected)),
                      s.firePointEvent(
                        i ? "select" : "unselect",
                        { accumulate: e },
                        function () {
                          (s.selected = s.options.selected = i),
                            (a.options.data[a.data.indexOf(s)] = s.options),
                            s.setState(i && "select"),
                            e ||
                              d.getSelectedPoints().forEach(function (E) {
                                const o = E.series;
                                E.selected &&
                                  E !== s &&
                                  ((E.selected = E.options.selected = !1),
                                  (o.options.data[o.data.indexOf(E)] =
                                    E.options),
                                  E.setState(
                                    d.hoverPoints &&
                                      o.options.inactiveOtherPoints
                                      ? "inactive"
                                      : ""
                                  ),
                                  E.firePointEvent("unselect"));
                              });
                        }
                      ),
                      delete this.selectedStaging;
                  }
                  onMouseOver(i) {
                    const e = this.series.chart,
                      s = e.pointer;
                    (i = i
                      ? s.normalize(i)
                      : s.getChartCoordinatesFromPoint(this, e.inverted)),
                      s.runPointActions(i, this);
                  }
                  onMouseOut() {
                    const i = this.series.chart;
                    this.firePointEvent("mouseOut"),
                      this.series.options.inactiveOtherPoints ||
                        (i.hoverPoints || []).forEach(function (e) {
                          e.setState();
                        }),
                      (i.hoverPoints = i.hoverPoint = null);
                  }
                  importEvents() {
                    if (!this.hasImportedEvents) {
                      const i = this,
                        e = A(i.series.options.point, i.options).events;
                      (i.events = e),
                        T(e, function (s, a) {
                          v(s) && H(i, a, s);
                        }),
                        (this.hasImportedEvents = !0);
                    }
                  }
                  setState(i, e) {
                    const s = this.series;
                    var a = this.state,
                      d = s.options.states[i || "normal"] || {},
                      E = nt.plotOptions[s.type].marker && s.options.marker;
                    const M = (E && E.states && E.states[i || "normal"]) || {},
                      K = this.marker || {},
                      $ = s.chart,
                      L = E && s.markerAttribs;
                    let n = s.halo;
                    var z;
                    let b;
                    var D = s.stateMarkerGraphic;
                    if (
                      !(
                        ((i = i || "") === this.state && !e) ||
                        (this.selected && "select" !== i) ||
                        !1 === d.enabled ||
                        (i &&
                          (!1 === M.enabled ||
                            (E && !1 === E.enabled && !1 === M.enabled))) ||
                        (i &&
                          K.states &&
                          K.states[i] &&
                          !1 === K.states[i].enabled)
                      )
                    ) {
                      if (
                        ((this.state = i),
                        L && (z = s.markerAttribs(this, i)),
                        this.graphic && !this.hasMockGraphic)
                      ) {
                        if (
                          (a &&
                            this.graphic.removeClass("highcharts-point-" + a),
                          i && this.graphic.addClass("highcharts-point-" + i),
                          !$.styledMode)
                        ) {
                          (a = s.pointAttribs(this, i)),
                            (b = S($.options.chart.animation, d.animation));
                          const J = a.opacity;
                          s.options.inactiveOtherPoints &&
                            C(J) &&
                            ((this.dataLabels || []).forEach(function (r) {
                              r &&
                                !r.hasClass("highcharts-data-label-hidden") &&
                                r.animate({ opacity: J }, b);
                            }),
                            this.connector &&
                              this.connector.animate({ opacity: J }, b)),
                            this.graphic.animate(a, b);
                        }
                        z &&
                          this.graphic.animate(
                            z,
                            S(
                              $.options.chart.animation,
                              M.animation,
                              E.animation
                            )
                          ),
                          D && D.hide();
                      } else
                        i &&
                          M &&
                          ((E = K.symbol || s.symbol),
                          D && D.currentSymbol !== E && (D = D.destroy()),
                          z &&
                            (D
                              ? D[e ? "animate" : "attr"]({ x: z.x, y: z.y })
                              : E &&
                                ((s.stateMarkerGraphic = D =
                                  $.renderer
                                    .symbol(E, z.x, z.y, z.width, z.height)
                                    .add(s.markerGroup)),
                                (D.currentSymbol = E))),
                          !$.styledMode &&
                            D &&
                            "inactive" !== this.state &&
                            D.attr(s.pointAttribs(this, i))),
                          D &&
                            (D[i && this.isInside ? "show" : "hide"](),
                            (D.element.point = this),
                            D.addClass(this.getClassName(), !0));
                      (z =
                        ((D = this.graphic || D) && D.visibility) || "inherit"),
                        (d = d.halo) &&
                        d.size &&
                        D &&
                        "hidden" !== z &&
                        !this.isCluster
                          ? (n ||
                              (s.halo = n =
                                $.renderer.path().add(D.parentGroup)),
                            n.show()[e ? "animate" : "attr"]({
                              d: this.haloPath(d.size),
                            }),
                            n.attr({
                              class:
                                "highcharts-halo highcharts-color-" +
                                S(this.colorIndex, s.colorIndex) +
                                (this.className ? " " + this.className : ""),
                              visibility: z,
                              zIndex: -1,
                            }),
                            (n.point = this),
                            $.styledMode ||
                              n.attr(
                                y(
                                  {
                                    fill: this.color || s.color,
                                    "fill-opacity": d.opacity,
                                  },
                                  F.filterUserAttributes(d.attributes || {})
                                )
                              ))
                          : n &&
                            n.point &&
                            n.point.haloPath &&
                            n.animate({ d: n.point.haloPath(0) }, null, n.hide),
                        P(this, "afterSetState", { state: i });
                    }
                  }
                  haloPath(i) {
                    const e = this.pos();
                    return e
                      ? this.series.chart.renderer.symbols.circle(
                          Math.floor(e[0]) - i,
                          e[1] - i,
                          2 * i,
                          2 * i
                        )
                      : [];
                  }
                }
                return c;
              }
            ),
            ut(
              t,
              "Core/Pointer.js",
              [
                t["Core/Color/Color.js"],
                t["Core/Globals.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j) {
                const { parse: tt } = F,
                  { charts: et, noop: st } = Y,
                  {
                    addEvent: nt,
                    attr: I,
                    css: H,
                    defined: N,
                    extend: x,
                    find: y,
                    fireEvent: P,
                    isNumber: k,
                    isObject: p,
                    objectEach: v,
                    offset: C,
                    pick: u,
                    splat: A,
                  } = j;
                class T {
                  constructor(l, h) {
                    (this.lastValidTouch = {}),
                      (this.pinchDown = []),
                      (this.runChartClick = !1),
                      (this.eventsToUnbind = []),
                      (this.chart = l),
                      (this.hasDragged = !1),
                      (this.options = h),
                      this.init(l, h);
                  }
                  applyInactiveState(l) {
                    let m,
                      h = [];
                    (l || []).forEach(function (c) {
                      (m = c.series),
                        h.push(m),
                        m.linkedParent && h.push(m.linkedParent),
                        m.linkedSeries && (h = h.concat(m.linkedSeries)),
                        m.navigatorSeries && h.push(m.navigatorSeries);
                    }),
                      this.chart.series.forEach(function (c) {
                        -1 === h.indexOf(c)
                          ? c.setState("inactive", !0)
                          : c.options.inactiveOtherPoints &&
                            c.setAllPointsToState("inactive");
                      });
                  }
                  destroy() {
                    const l = this;
                    this.eventsToUnbind.forEach((h) => h()),
                      (this.eventsToUnbind = []),
                      Y.chartCount ||
                        (T.unbindDocumentMouseUp &&
                          (T.unbindDocumentMouseUp = T.unbindDocumentMouseUp()),
                        T.unbindDocumentTouchEnd &&
                          (T.unbindDocumentTouchEnd =
                            T.unbindDocumentTouchEnd())),
                      clearInterval(l.tooltipTimeout),
                      v(l, function (h, m) {
                        l[m] = void 0;
                      });
                  }
                  getSelectionMarkerAttrs(l, h) {
                    const m = {
                      args: { chartX: l, chartY: h },
                      attrs: {},
                      shapeType: "rect",
                    };
                    return (
                      P(this, "getSelectionMarkerAttrs", m, (c) => {
                        const {
                          chart: g,
                          mouseDownX: i = 0,
                          mouseDownY: e = 0,
                          zoomHor: s,
                          zoomVert: a,
                        } = this;
                        let d;
                        ((c = c.attrs).x = g.plotLeft),
                          (c.y = g.plotTop),
                          (c.width = s ? 1 : g.plotWidth),
                          (c.height = a ? 1 : g.plotHeight),
                          s &&
                            ((d = l - i),
                            (c.width = Math.abs(d)),
                            (c.x = (0 < d ? 0 : d) + i)),
                          a &&
                            ((d = h - e),
                            (c.height = Math.abs(d)),
                            (c.y = (0 < d ? 0 : d) + e));
                      }),
                      m
                    );
                  }
                  drag(l) {
                    const h = this.chart,
                      m = h.options.chart;
                    var c = h.plotLeft;
                    const g = h.plotTop,
                      i = h.plotWidth,
                      e = h.plotHeight,
                      s = this.mouseDownX || 0,
                      a = this.mouseDownY || 0,
                      d = p(m.panning)
                        ? m.panning && m.panning.enabled
                        : m.panning,
                      E = m.panKey && l[m.panKey + "Key"];
                    let o = l.chartX,
                      M = l.chartY,
                      Z = this.selectionMarker;
                    if (
                      (!Z || !Z.touch) &&
                      (o < c ? (o = c) : o > c + i && (o = c + i),
                      M < g ? (M = g) : M > g + e && (M = g + e),
                      (this.hasDragged = Math.sqrt(
                        Math.pow(s - o, 2) + Math.pow(a - M, 2)
                      )),
                      10 < this.hasDragged)
                    ) {
                      c = h.isInsidePlot(s - c, a - g, { visiblePlotOnly: !0 });
                      const { shapeType: K, attrs: $ } =
                        this.getSelectionMarkerAttrs(o, M);
                      (!h.hasCartesianSeries && !h.mapView) ||
                        (!this.zoomX && !this.zoomY) ||
                        !c ||
                        E ||
                        Z ||
                        ((this.selectionMarker = Z = h.renderer[K]()),
                        Z.attr({
                          class: "highcharts-selection-marker",
                          zIndex: 7,
                        }).add(),
                        h.styledMode ||
                          Z.attr({
                            fill:
                              m.selectionMarkerFill ||
                              tt("#334eff").setOpacity(0.25).get(),
                          })),
                        Z && Z.attr($),
                        c && !Z && d && h.pan(l, m.panning);
                    }
                  }
                  dragStart(l) {
                    const h = this.chart;
                    (h.mouseIsDown = l.type),
                      (h.cancelClick = !1),
                      (h.mouseDownX = this.mouseDownX = l.chartX),
                      (h.mouseDownY = this.mouseDownY = l.chartY);
                  }
                  getSelectionBox(l) {
                    const h = { args: { marker: l }, result: {} };
                    return (
                      P(this, "getSelectionBox", h, (m) => {
                        m.result = {
                          x: l.attr ? +l.attr("x") : l.x,
                          y: l.attr ? +l.attr("y") : l.y,
                          width: l.attr ? l.attr("width") : l.width,
                          height: l.attr ? l.attr("height") : l.height,
                        };
                      }),
                      h.result
                    );
                  }
                  drop(l) {
                    const h = this,
                      m = this.chart,
                      c = this.hasPinched;
                    if (this.selectionMarker) {
                      const {
                          x: g,
                          y: i,
                          width: e,
                          height: s,
                        } = this.getSelectionBox(this.selectionMarker),
                        a = {
                          originalEvent: l,
                          xAxis: [],
                          yAxis: [],
                          x: g,
                          y: i,
                          width: e,
                          height: s,
                        };
                      let d = !!m.mapView;
                      (this.hasDragged || c) &&
                        (m.axes.forEach(function (E) {
                          if (
                            E.zoomEnabled &&
                            N(E.min) &&
                            (c ||
                              h[{ xAxis: "zoomX", yAxis: "zoomY" }[E.coll]]) &&
                            k(g) &&
                            k(i) &&
                            k(e) &&
                            k(s)
                          ) {
                            var o = E.horiz;
                            const M =
                                "touchend" === l.type ? E.minPixelPadding : 0,
                              Z = E.toValue((o ? g : i) + M);
                            (o = E.toValue((o ? g + e : i + s) - M)),
                              a[E.coll].push({
                                axis: E,
                                min: Math.min(Z, o),
                                max: Math.max(Z, o),
                              }),
                              (d = !0);
                          }
                        }),
                        d &&
                          P(m, "selection", a, function (E) {
                            m.zoom(x(E, c ? { animation: !1 } : null));
                          })),
                        k(m.index) &&
                          (this.selectionMarker =
                            this.selectionMarker.destroy()),
                        c && this.scaleGroups();
                    }
                    m &&
                      k(m.index) &&
                      (H(m.container, { cursor: m._cursor }),
                      (m.cancelClick = 10 < this.hasDragged),
                      (m.mouseIsDown = this.hasDragged = this.hasPinched = !1),
                      (this.pinchDown = []));
                  }
                  findNearestKDPoint(l, h, m) {
                    let c;
                    return (
                      l.forEach(function (g) {
                        var i =
                          !(g.noSharedTooltip && h) &&
                          0 > g.options.findNearestPointBy.indexOf("y");
                        if (
                          ((g = g.searchPoint(m, i)),
                          (i = p(g, !0) && g.series) && !(i = !p(c, !0)))
                        ) {
                          {
                            const e = c.dist - g.dist,
                              s =
                                (g.series.group && g.series.group.zIndex) -
                                (c.series.group && c.series.group.zIndex);
                            i =
                              0 != (i = c.distX - g.distX) && h
                                ? i
                                : 0 !== e
                                ? e
                                : 0 !== s
                                ? s
                                : c.series.index > g.series.index
                                ? -1
                                : 1;
                          }
                          i = 0 < i;
                        }
                        i && (c = g);
                      }),
                      c
                    );
                  }
                  getChartCoordinatesFromPoint(l, h) {
                    var m = l.series;
                    const c = m.xAxis;
                    m = m.yAxis;
                    const g = l.shapeArgs;
                    if (c && m) {
                      let i = u(l.clientX, l.plotX),
                        e = l.plotY || 0;
                      return (
                        l.isNode &&
                          g &&
                          k(g.x) &&
                          k(g.y) &&
                          ((i = g.x), (e = g.y)),
                        h
                          ? {
                              chartX: m.len + m.pos - e,
                              chartY: c.len + c.pos - i,
                            }
                          : { chartX: i + c.pos, chartY: e + m.pos }
                      );
                    }
                    if (g && g.x && g.y) return { chartX: g.x, chartY: g.y };
                  }
                  getChartPosition() {
                    if (this.chartPosition) return this.chartPosition;
                    var { container: l } = this.chart;
                    const h = C(l);
                    this.chartPosition = {
                      left: h.left,
                      top: h.top,
                      scaleX: 1,
                      scaleY: 1,
                    };
                    const m = l.offsetWidth;
                    return (
                      (l = l.offsetHeight),
                      2 < m &&
                        2 < l &&
                        ((this.chartPosition.scaleX = h.width / m),
                        (this.chartPosition.scaleY = h.height / l)),
                      this.chartPosition
                    );
                  }
                  getCoordinates(l) {
                    const h = { xAxis: [], yAxis: [] };
                    return (
                      this.chart.axes.forEach(function (m) {
                        h[m.isXAxis ? "xAxis" : "yAxis"].push({
                          axis: m,
                          value: m.toValue(l[m.horiz ? "chartX" : "chartY"]),
                        });
                      }),
                      h
                    );
                  }
                  getHoverData(l, h, m, c, g, i) {
                    const e = [];
                    c = !(!c || !l);
                    const s = function (o) {
                      return (
                        o.visible &&
                        !(!g && o.directTouch) &&
                        u(o.options.enableMouseTracking, !0)
                      );
                    };
                    let a,
                      d = {
                        chartX: i ? i.chartX : void 0,
                        chartY: i ? i.chartY : void 0,
                        shared: g,
                      };
                    P(this, "beforeGetHoverData", d),
                      (a =
                        h && !h.stickyTracking
                          ? [h]
                          : m.filter(
                              (o) => o.stickyTracking && (d.filter || s)(o)
                            ));
                    const E = c || !i ? l : this.findNearestKDPoint(a, g, i);
                    return (
                      (h = E && E.series),
                      E &&
                        (g && !h.noSharedTooltip
                          ? ((a = m.filter(function (o) {
                              return d.filter
                                ? d.filter(o)
                                : s(o) && !o.noSharedTooltip;
                            })),
                            a.forEach(function (o) {
                              let M = y(o.points, function (Z) {
                                return Z.x === E.x && !Z.isNull;
                              });
                              p(M) &&
                                (o.boosted &&
                                  o.boost &&
                                  (M = o.boost.getPoint(M)),
                                e.push(M));
                            }))
                          : e.push(E)),
                      (d = { hoverPoint: E }),
                      P(this, "afterGetHoverData", d),
                      {
                        hoverPoint: d.hoverPoint,
                        hoverSeries: h,
                        hoverPoints: e,
                      }
                    );
                  }
                  getPointFromEvent(l) {
                    let h;
                    for (l = l.target; l && !h; )
                      (h = l.point), (l = l.parentNode);
                    return h;
                  }
                  onTrackerMouseOut(l) {
                    l = l.relatedTarget;
                    const h = this.chart.hoverSeries;
                    (this.isDirectTouch = !1),
                      !h ||
                        !l ||
                        h.stickyTracking ||
                        this.inClass(l, "highcharts-tooltip") ||
                        (this.inClass(l, "highcharts-series-" + h.index) &&
                          this.inClass(l, "highcharts-tracker")) ||
                        h.onMouseOut();
                  }
                  inClass(l, h) {
                    let m;
                    for (; l; ) {
                      if ((m = I(l, "class"))) {
                        if (-1 !== m.indexOf(h)) return !0;
                        if (-1 !== m.indexOf("highcharts-container")) return !1;
                      }
                      l = l.parentElement;
                    }
                  }
                  init(l, h) {
                    (this.options = h),
                      (this.chart = l),
                      (this.runChartClick = !(
                        !h.chart.events || !h.chart.events.click
                      )),
                      (this.pinchDown = []),
                      (this.lastValidTouch = {}),
                      this.setDOMEvents(),
                      P(this, "afterInit");
                  }
                  normalize(l, h) {
                    var m = l.touches,
                      c = m
                        ? m.length
                          ? m.item(0)
                          : u(m.changedTouches, l.changedTouches)[0]
                        : l;
                    return (
                      h || (h = this.getChartPosition()),
                      (m = c.pageX - h.left),
                      (c = c.pageY - h.top),
                      (m /= h.scaleX),
                      (c /= h.scaleY),
                      x(l, { chartX: Math.round(m), chartY: Math.round(c) })
                    );
                  }
                  onContainerClick(l) {
                    const h = this.chart,
                      m = h.hoverPoint;
                    l = this.normalize(l);
                    const c = h.plotLeft,
                      g = h.plotTop;
                    h.cancelClick ||
                      (m && this.inClass(l.target, "highcharts-tracker")
                        ? (P(m.series, "click", x(l, { point: m })),
                          h.hoverPoint && m.firePointEvent("click", l))
                        : (x(l, this.getCoordinates(l)),
                          h.isInsidePlot(l.chartX - c, l.chartY - g, {
                            visiblePlotOnly: !0,
                          }) && P(h, "click", l)));
                  }
                  onContainerMouseDown(l) {
                    const h = 1 == (1 & (l.buttons || l.button));
                    (l = this.normalize(l)),
                      Y.isFirefox &&
                        0 !== l.button &&
                        this.onContainerMouseMove(l),
                      (typeof l.button > "u" || h) &&
                        (this.zoomOption(l),
                        h && l.preventDefault && l.preventDefault(),
                        this.dragStart(l));
                  }
                  onContainerMouseLeave(l) {
                    const h = et[u(T.hoverChartIndex, -1)];
                    (l = this.normalize(l)),
                      h &&
                        l.relatedTarget &&
                        !this.inClass(l.relatedTarget, "highcharts-tooltip") &&
                        (h.pointer.reset(), (h.pointer.chartPosition = void 0));
                  }
                  onContainerMouseEnter(l) {
                    delete this.chartPosition;
                  }
                  onContainerMouseMove(l) {
                    const h = this.chart,
                      m = h.tooltip;
                    (l = this.normalize(l)),
                      this.setHoverChartIndex(),
                      ("mousedown" === h.mouseIsDown || this.touchSelect(l)) &&
                        this.drag(l),
                      h.openMenu ||
                        (!this.inClass(l.target, "highcharts-tracker") &&
                          !h.isInsidePlot(
                            l.chartX - h.plotLeft,
                            l.chartY - h.plotTop,
                            { visiblePlotOnly: !0 }
                          )) ||
                        (m && m.shouldStickOnContact(l)) ||
                        (this.inClass(l.target, "highcharts-no-tooltip")
                          ? this.reset(!1, 0)
                          : this.runPointActions(l));
                  }
                  onDocumentTouchEnd(l) {
                    const h = et[u(T.hoverChartIndex, -1)];
                    h && h.pointer.drop(l);
                  }
                  onContainerTouchMove(l) {
                    this.touchSelect(l)
                      ? this.onContainerMouseMove(l)
                      : this.touch(l);
                  }
                  onContainerTouchStart(l) {
                    this.touchSelect(l)
                      ? this.onContainerMouseDown(l)
                      : (this.zoomOption(l), this.touch(l, !0));
                  }
                  onDocumentMouseMove(l) {
                    const h = this.chart,
                      m = h.tooltip,
                      c = this.chartPosition;
                    (l = this.normalize(l, c)),
                      !c ||
                        h.isInsidePlot(
                          l.chartX - h.plotLeft,
                          l.chartY - h.plotTop,
                          { visiblePlotOnly: !0 }
                        ) ||
                        (m && m.shouldStickOnContact(l)) ||
                        this.inClass(l.target, "highcharts-tracker") ||
                        this.reset();
                  }
                  onDocumentMouseUp(l) {
                    const h = et[u(T.hoverChartIndex, -1)];
                    h && h.pointer.drop(l);
                  }
                  pinch(l) {
                    const h = this,
                      m = h.chart,
                      c = h.pinchDown,
                      g = l.touches || [],
                      i = g.length,
                      e = h.lastValidTouch,
                      s = h.hasZoom,
                      a = {},
                      d =
                        1 === i &&
                        ((h.inClass(l.target, "highcharts-tracker") &&
                          m.runTrackerClick) ||
                          h.runChartClick),
                      E = {};
                    var o = h.chart.tooltip;
                    o = 1 === i && u(o && o.options.followTouchMove, !0);
                    let M = h.selectionMarker;
                    1 < i ? (h.initiated = !0) : o && (h.initiated = !1),
                      s &&
                        h.initiated &&
                        !d &&
                        !1 !== l.cancelable &&
                        l.preventDefault(),
                      [].map.call(g, function (Z) {
                        return h.normalize(Z);
                      }),
                      "touchstart" === l.type
                        ? ([].forEach.call(g, function (Z, K) {
                            c[K] = { chartX: Z.chartX, chartY: Z.chartY };
                          }),
                          (e.x = [c[0].chartX, c[1] && c[1].chartX]),
                          (e.y = [c[0].chartY, c[1] && c[1].chartY]),
                          m.axes.forEach(function (Z) {
                            if (Z.zoomEnabled) {
                              const K = m.bounds[Z.horiz ? "h" : "v"],
                                $ = Z.minPixelPadding,
                                L = Z.toPixels(
                                  Math.min(
                                    u(Z.options.min, Z.dataMin),
                                    Z.dataMin
                                  )
                                ),
                                n = Z.toPixels(
                                  Math.max(
                                    u(Z.options.max, Z.dataMax),
                                    Z.dataMax
                                  )
                                ),
                                z = Math.max(L, n);
                              (K.min = Math.min(Z.pos, Math.min(L, n) - $)),
                                (K.max = Math.max(Z.pos + Z.len, z + $));
                            }
                          }),
                          (h.res = !0))
                        : o
                        ? this.runPointActions(h.normalize(l))
                        : c.length &&
                          (P(m, "touchpan", { originalEvent: l }, () => {
                            M ||
                              (h.selectionMarker = M =
                                x({ destroy: st, touch: !0 }, m.plotBox)),
                              h.pinchTranslate(c, g, a, M, E, e),
                              (h.hasPinched = s),
                              h.scaleGroups(a, E);
                          }),
                          h.res && ((h.res = !1), this.reset(!1, 0)));
                  }
                  pinchTranslate(l, h, m, c, g, i) {
                    this.zoomHor &&
                      this.pinchTranslateDirection(!0, l, h, m, c, g, i),
                      this.zoomVert &&
                        this.pinchTranslateDirection(!1, l, h, m, c, g, i);
                  }
                  pinchTranslateDirection(l, h, m, c, g, i, e, s) {
                    const a = this.chart,
                      d = l ? "x" : "y",
                      E = l ? "X" : "Y",
                      o = "chart" + E,
                      M = l ? "width" : "height",
                      Z = a["plot" + (l ? "Left" : "Top")],
                      K = a.inverted,
                      $ = a.bounds[l ? "h" : "v"],
                      L = 1 === h.length,
                      n = h[0][o],
                      z = !L && h[1][o];
                    h = function () {
                      "number" == typeof f &&
                        20 < Math.abs(n - z) &&
                        (J = s || Math.abs(r - f) / Math.abs(n - z)),
                        (D = (Z - r) / J + n),
                        (b = a["plot" + (l ? "Width" : "Height")] / J);
                    };
                    let b,
                      D,
                      _,
                      J = s || 1,
                      r = m[0][o],
                      f = !L && m[1][o];
                    h(),
                      (m = D) < $.min
                        ? ((m = $.min), (_ = !0))
                        : m + b > $.max && ((m = $.max - b), (_ = !0)),
                      _
                        ? ((r -= 0.8 * (r - e[d][0])),
                          "number" == typeof f && (f -= 0.8 * (f - e[d][1])),
                          h())
                        : (e[d] = [r, f]),
                      K || ((i[d] = D - Z), (i[M] = b)),
                      (i = K ? 1 / J : J),
                      (g[M] = b),
                      (g[d] = m),
                      (c[K ? (l ? "scaleY" : "scaleX") : "scale" + E] = J),
                      (c["translate" + E] = i * Z + (r - i * n));
                  }
                  reset(l, h) {
                    const m = this.chart,
                      c = m.hoverSeries,
                      g = m.hoverPoint,
                      i = m.hoverPoints,
                      e = m.tooltip,
                      s = e && e.shared ? i : g;
                    l &&
                      s &&
                      A(s).forEach(function (a) {
                        a.series.isCartesian &&
                          typeof a.plotX > "u" &&
                          (l = !1);
                      }),
                      l
                        ? e &&
                          s &&
                          A(s).length &&
                          (e.refresh(s),
                          e.shared && i
                            ? i.forEach(function (a) {
                                a.setState(a.state, !0),
                                  a.series.isCartesian &&
                                    (a.series.xAxis.crosshair &&
                                      a.series.xAxis.drawCrosshair(null, a),
                                    a.series.yAxis.crosshair &&
                                      a.series.yAxis.drawCrosshair(null, a));
                              })
                            : g &&
                              (g.setState(g.state, !0),
                              m.axes.forEach(function (a) {
                                a.crosshair &&
                                  g.series[a.coll] === a &&
                                  a.drawCrosshair(null, g);
                              })))
                        : (g && g.onMouseOut(),
                          i &&
                            i.forEach(function (a) {
                              a.setState();
                            }),
                          c && c.onMouseOut(),
                          e && e.hide(h),
                          this.unDocMouseMove &&
                            (this.unDocMouseMove = this.unDocMouseMove()),
                          m.axes.forEach(function (a) {
                            a.hideCrosshair();
                          }),
                          (this.hoverX = m.hoverPoints = m.hoverPoint = null));
                  }
                  runPointActions(l, h, m) {
                    const c = this.chart,
                      g =
                        c.tooltip && c.tooltip.options.enabled
                          ? c.tooltip
                          : void 0,
                      i = !!g && g.shared;
                    let e = h || c.hoverPoint,
                      s = (e && e.series) || c.hoverSeries;
                    (h = this.getHoverData(
                      e,
                      s,
                      c.series,
                      (!l || "touchmove" !== l.type) &&
                        (!!h || (s && s.directTouch && this.isDirectTouch)),
                      i,
                      l
                    )),
                      (e = h.hoverPoint),
                      (s = h.hoverSeries);
                    const a = h.hoverPoints;
                    h =
                      s &&
                      s.tooltipOptions.followPointer &&
                      !s.tooltipOptions.split;
                    const d = i && s && !s.noSharedTooltip;
                    if (e && (m || e !== c.hoverPoint || (g && g.isHidden))) {
                      if (
                        ((c.hoverPoints || []).forEach(function (E) {
                          -1 === a.indexOf(E) && E.setState();
                        }),
                        c.hoverSeries !== s && s.onMouseOver(),
                        this.applyInactiveState(a),
                        (a || []).forEach(function (E) {
                          E.setState("hover");
                        }),
                        c.hoverPoint && c.hoverPoint.firePointEvent("mouseOut"),
                        !e.series)
                      )
                        return;
                      (c.hoverPoints = a),
                        (c.hoverPoint = e),
                        e.firePointEvent("mouseOver", void 0, () => {
                          g && e && g.refresh(d ? a : e, l);
                        });
                    } else
                      h &&
                        g &&
                        !g.isHidden &&
                        ((m = g.getAnchor([{}], l)),
                        c.isInsidePlot(m[0], m[1], { visiblePlotOnly: !0 }) &&
                          g.updatePosition({ plotX: m[0], plotY: m[1] }));
                    this.unDocMouseMove ||
                      ((this.unDocMouseMove = nt(
                        c.container.ownerDocument,
                        "mousemove",
                        function (E) {
                          const o = et[T.hoverChartIndex];
                          o && o.pointer.onDocumentMouseMove(E);
                        }
                      )),
                      this.eventsToUnbind.push(this.unDocMouseMove)),
                      c.axes.forEach(function (E) {
                        const o = u((E.crosshair || {}).snap, !0);
                        let M;
                        o &&
                          (((M = c.hoverPoint) && M.series[E.coll] === E) ||
                            (M = y(
                              a,
                              (Z) => Z.series && Z.series[E.coll] === E
                            ))),
                          M || !o ? E.drawCrosshair(l, M) : E.hideCrosshair();
                      });
                  }
                  scaleGroups(l, h) {
                    const m = this.chart;
                    m.series.forEach(function (c) {
                      const g = l || c.getPlotBox();
                      c.group &&
                        ((c.xAxis && c.xAxis.zoomEnabled) || m.mapView) &&
                        (c.group.attr(g),
                        c.markerGroup &&
                          (c.markerGroup.attr(g),
                          c.markerGroup.clip(h ? m.clipRect : null)),
                        c.dataLabelsGroup && c.dataLabelsGroup.attr(g));
                    }),
                      m.clipRect.attr(h || m.clipBox);
                  }
                  setDOMEvents() {
                    const l = this.chart.container,
                      h = l.ownerDocument;
                    (l.onmousedown = this.onContainerMouseDown.bind(this)),
                      (l.onmousemove = this.onContainerMouseMove.bind(this)),
                      (l.onclick = this.onContainerClick.bind(this)),
                      this.eventsToUnbind.push(
                        nt(
                          l,
                          "mouseenter",
                          this.onContainerMouseEnter.bind(this)
                        )
                      ),
                      this.eventsToUnbind.push(
                        nt(
                          l,
                          "mouseleave",
                          this.onContainerMouseLeave.bind(this)
                        )
                      ),
                      T.unbindDocumentMouseUp ||
                        (T.unbindDocumentMouseUp = nt(
                          h,
                          "mouseup",
                          this.onDocumentMouseUp.bind(this)
                        ));
                    let m = this.chart.renderTo.parentElement;
                    for (; m && "BODY" !== m.tagName; )
                      this.eventsToUnbind.push(
                        nt(m, "scroll", () => {
                          delete this.chartPosition;
                        })
                      ),
                        (m = m.parentElement);
                    Y.hasTouch &&
                      (this.eventsToUnbind.push(
                        nt(
                          l,
                          "touchstart",
                          this.onContainerTouchStart.bind(this),
                          { passive: !1 }
                        )
                      ),
                      this.eventsToUnbind.push(
                        nt(
                          l,
                          "touchmove",
                          this.onContainerTouchMove.bind(this),
                          { passive: !1 }
                        )
                      ),
                      T.unbindDocumentTouchEnd ||
                        (T.unbindDocumentTouchEnd = nt(
                          h,
                          "touchend",
                          this.onDocumentTouchEnd.bind(this),
                          { passive: !1 }
                        )));
                  }
                  setHoverChartIndex() {
                    const l = this.chart,
                      h = Y.charts[u(T.hoverChartIndex, -1)];
                    h &&
                      h !== l &&
                      h.pointer.onContainerMouseLeave({
                        relatedTarget: l.container,
                      }),
                      (h && h.mouseIsDown) || (T.hoverChartIndex = l.index);
                  }
                  touch(l, h) {
                    const m = this.chart;
                    let c, g;
                    this.setHoverChartIndex(),
                      1 === l.touches.length
                        ? ((l = this.normalize(l)),
                          (g = m.isInsidePlot(
                            l.chartX - m.plotLeft,
                            l.chartY - m.plotTop,
                            { visiblePlotOnly: !0 }
                          )) && !m.openMenu
                            ? (h && this.runPointActions(l),
                              "touchmove" === l.type &&
                                (c =
                                  !!(h = this.pinchDown)[0] &&
                                  4 <=
                                    Math.sqrt(
                                      Math.pow(h[0].chartX - l.chartX, 2) +
                                        Math.pow(h[0].chartY - l.chartY, 2)
                                    )),
                              u(c, !0) && this.pinch(l))
                            : h && this.reset())
                        : 2 === l.touches.length && this.pinch(l);
                  }
                  touchSelect(l) {
                    return !(
                      !this.chart.zooming.singleTouch ||
                      !l.touches ||
                      1 !== l.touches.length
                    );
                  }
                  zoomOption(l) {
                    const h = this.chart,
                      m = h.inverted;
                    var c = h.zooming.type || "";
                    /touch/.test(l.type) && (c = u(h.zooming.pinchType, c)),
                      (this.zoomX = l = /x/.test(c)),
                      (this.zoomY = c = /y/.test(c)),
                      (this.zoomHor = (l && !m) || (c && m)),
                      (this.zoomVert = (c && !m) || (l && m)),
                      (this.hasZoom = l || c);
                  }
                }
                return (
                  (function (S) {
                    const l = [],
                      h = [];
                    (S.compose = function (m) {
                      j.pushUnique(h, m) &&
                        nt(m, "beforeRender", function () {
                          this.pointer = new S(this, this.options);
                        });
                    }),
                      (S.dissolve = function () {
                        for (let m = 0, c = l.length; m < c; ++m) l[m]();
                        l.length = 0;
                      });
                  })(T || (T = {})),
                  T
                );
              }
            ),
            ut(
              t,
              "Core/Legend/Legend.js",
              [
                t["Core/Animation/AnimationUtilities.js"],
                t["Core/Templating.js"],
                t["Core/Globals.js"],
                t["Core/Series/Point.js"],
                t["Core/Renderer/RendererUtilities.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j, tt, et, st) {
                const { animObject: nt, setAnimation: I } = F,
                  { format: H } = Y,
                  { marginNames: N } = j,
                  { distribute: x } = et,
                  {
                    addEvent: y,
                    createElement: P,
                    css: k,
                    defined: p,
                    discardElement: v,
                    find: C,
                    fireEvent: u,
                    isNumber: A,
                    merge: T,
                    pick: S,
                    relativeLength: l,
                    stableSort: h,
                    syncTimeout: m,
                  } = st;
                class c {
                  constructor(i, e) {
                    (this.allItems = []),
                      (this.contentGroup = this.box = void 0),
                      (this.display = !1),
                      (this.group = void 0),
                      (this.offsetWidth =
                        this.maxLegendWidth =
                        this.maxItemWidth =
                        this.legendWidth =
                        this.legendHeight =
                        this.lastLineHeight =
                        this.lastItemY =
                        this.itemY =
                        this.itemX =
                        this.itemMarginTop =
                        this.itemMarginBottom =
                        this.itemHeight =
                        this.initialItemY =
                          0),
                      (this.options = void 0),
                      (this.padding = 0),
                      (this.pages = []),
                      (this.proximate = !1),
                      (this.scrollGroup = void 0),
                      (this.widthOption =
                        this.totalItemWidth =
                        this.titleHeight =
                        this.symbolWidth =
                        this.symbolHeight =
                          0),
                      (this.chart = i),
                      this.init(i, e);
                  }
                  init(i, e) {
                    (this.chart = i),
                      this.setOptions(e),
                      e.enabled &&
                        (this.render(),
                        y(this.chart, "endResize", function () {
                          this.legend.positionCheckboxes();
                        }),
                        y(this.chart, "render", () => {
                          this.proximate &&
                            (this.proximatePositions(), this.positionItems());
                        }));
                  }
                  setOptions(i) {
                    const e = S(i.padding, 8);
                    (this.options = i),
                      this.chart.styledMode ||
                        ((this.itemStyle = i.itemStyle),
                        (this.itemHiddenStyle = T(
                          this.itemStyle,
                          i.itemHiddenStyle
                        ))),
                      (this.itemMarginTop = i.itemMarginTop),
                      (this.itemMarginBottom = i.itemMarginBottom),
                      (this.padding = e),
                      (this.initialItemY = e - 5),
                      (this.symbolWidth = S(i.symbolWidth, 16)),
                      (this.pages = []),
                      (this.proximate =
                        "proximate" === i.layout && !this.chart.inverted),
                      (this.baseline = void 0);
                  }
                  update(i, e) {
                    const s = this.chart;
                    this.setOptions(T(!0, this.options, i)),
                      this.destroy(),
                      (s.isDirtyLegend = s.isDirtyBox = !0),
                      S(e, !0) && s.redraw(),
                      u(this, "afterUpdate");
                  }
                  colorizeItem(i, e) {
                    const {
                      group: s,
                      label: a,
                      line: d,
                      symbol: E,
                    } = i.legendItem || {};
                    if (
                      (s &&
                        s[e ? "removeClass" : "addClass"](
                          "highcharts-legend-item-hidden"
                        ),
                      !this.chart.styledMode)
                    ) {
                      const { itemHiddenStyle: o } = this,
                        M = o.color,
                        Z = (e && i.color) || M,
                        K = i.options && i.options.marker;
                      let $ = { fill: Z };
                      a?.css(T(e ? this.itemStyle : o)),
                        d?.attr({ stroke: Z }),
                        E &&
                          (K &&
                            E.isMarker &&
                            (($ = i.pointAttribs()),
                            e || ($.stroke = $.fill = M)),
                          E.attr($));
                    }
                    u(this, "afterColorizeItem", { item: i, visible: e });
                  }
                  positionItems() {
                    this.allItems.forEach(this.positionItem, this),
                      this.chart.isResizing || this.positionCheckboxes();
                  }
                  positionItem(i) {
                    const { group: e, x: s = 0, y: a = 0 } = i.legendItem || {};
                    var d = this.options,
                      E = d.symbolPadding;
                    const o = !d.rtl;
                    (d = i.checkbox),
                      e &&
                        e.element &&
                        ((E = {
                          translateX: o ? s : this.legendWidth - s - 2 * E - 4,
                          translateY: a,
                        }),
                        e[p(e.translateY) ? "animate" : "attr"](
                          E,
                          void 0,
                          () => {
                            u(this, "afterPositionItem", { item: i });
                          }
                        )),
                      d && ((d.x = s), (d.y = a));
                  }
                  destroyItem(i) {
                    const e = i.checkbox,
                      s = i.legendItem || {};
                    for (const a of ["group", "label", "line", "symbol"])
                      s[a] && (s[a] = s[a].destroy());
                    e && v(e), (i.legendItem = void 0);
                  }
                  destroy() {
                    for (const i of this.getAllItems()) this.destroyItem(i);
                    for (const i of "clipRect up down pager nav box title group".split(
                      " "
                    ))
                      this[i] && (this[i] = this[i].destroy());
                    this.display = null;
                  }
                  positionCheckboxes() {
                    const i = this.group && this.group.alignAttr,
                      e = this.clipHeight || this.legendHeight,
                      s = this.titleHeight;
                    let a;
                    i &&
                      ((a = i.translateY),
                      this.allItems.forEach(function (d) {
                        const E = d.checkbox;
                        let o;
                        E &&
                          ((o = a + s + E.y + (this.scrollOffset || 0) + 3),
                          k(E, {
                            left:
                              i.translateX + d.checkboxOffset + E.x - 20 + "px",
                            top: o + "px",
                            display:
                              this.proximate || (o > a - 6 && o < a + e - 6)
                                ? ""
                                : "none",
                          }));
                      }, this));
                  }
                  renderTitle() {
                    var i = this.options;
                    const e = this.padding,
                      s = i.title;
                    let a = 0;
                    s.text &&
                      (this.title ||
                        ((this.title = this.chart.renderer
                          .label(
                            s.text,
                            e - 3,
                            e - 4,
                            void 0,
                            void 0,
                            void 0,
                            i.useHTML,
                            void 0,
                            "legend-title"
                          )
                          .attr({ zIndex: 1 })),
                        this.chart.styledMode || this.title.css(s.style),
                        this.title.add(this.group)),
                      s.width ||
                        this.title.css({ width: this.maxLegendWidth + "px" }),
                      (a = (i = this.title.getBBox()).height),
                      (this.offsetWidth = i.width),
                      this.contentGroup.attr({ translateY: a })),
                      (this.titleHeight = a);
                  }
                  setText(i) {
                    const e = this.options;
                    i.legendItem.label.attr({
                      text: e.labelFormat
                        ? H(e.labelFormat, i, this.chart)
                        : e.labelFormatter.call(i),
                    });
                  }
                  renderItem(i) {
                    const e = (i.legendItem = i.legendItem || {});
                    var s = this.chart,
                      a = s.renderer;
                    const d = this.options,
                      E = this.symbolWidth,
                      o = d.symbolPadding || 0,
                      M = this.itemStyle,
                      Z = this.itemHiddenStyle,
                      K = "horizontal" === d.layout ? S(d.itemDistance, 20) : 0,
                      $ = !d.rtl,
                      L = !i.series,
                      n = !L && i.series.drawLegendSymbol ? i.series : i;
                    var z = n.options;
                    const b = this.createCheckboxForItem && z && z.showCheckbox,
                      D = d.useHTML,
                      J = i.options.className;
                    let r = e.label;
                    (z = E + o + K + (b ? 20 : 0)),
                      r ||
                        ((e.group = a
                          .g("legend-item")
                          .addClass(
                            "highcharts-" +
                              n.type +
                              "-series highcharts-color-" +
                              i.colorIndex +
                              (J ? " " + J : "") +
                              (L ? " highcharts-series-" + i.index : "")
                          )
                          .attr({ zIndex: 1 })
                          .add(this.scrollGroup)),
                        (e.label = r =
                          a.text("", $ ? E + o : -o, this.baseline || 0, D)),
                        s.styledMode || r.css(T(i.visible ? M : Z)),
                        r
                          .attr({ align: $ ? "left" : "right", zIndex: 2 })
                          .add(e.group),
                        this.baseline ||
                          ((this.fontMetrics = a.fontMetrics(r)),
                          (this.baseline =
                            this.fontMetrics.f + 3 + this.itemMarginTop),
                          r.attr("y", this.baseline),
                          (this.symbolHeight = S(
                            d.symbolHeight,
                            this.fontMetrics.f
                          )),
                          d.squareSymbol &&
                            ((this.symbolWidth = S(
                              d.symbolWidth,
                              Math.max(this.symbolHeight, 16)
                            )),
                            (z = this.symbolWidth + o + K + (b ? 20 : 0)),
                            $ && r.attr("x", this.symbolWidth + o))),
                        n.drawLegendSymbol(this, i),
                        this.setItemEvents && this.setItemEvents(i, r, D)),
                      b &&
                        !i.checkbox &&
                        this.createCheckboxForItem &&
                        this.createCheckboxForItem(i),
                      this.colorizeItem(i, i.visible),
                      (!s.styledMode && M.width) ||
                        r.css({
                          width:
                            (d.itemWidth ||
                              this.widthOption ||
                              s.spacingBox.width) -
                            z +
                            "px",
                        }),
                      this.setText(i),
                      (s = r.getBBox()),
                      (a = (this.fontMetrics && this.fontMetrics.h) || 0),
                      (i.itemWidth = i.checkboxOffset =
                        d.itemWidth || e.labelWidth || s.width + z),
                      (this.maxItemWidth = Math.max(
                        this.maxItemWidth,
                        i.itemWidth
                      )),
                      (this.totalItemWidth += i.itemWidth),
                      (this.itemHeight = i.itemHeight =
                        Math.round(
                          e.labelHeight || (s.height > 1.5 * a ? s.height : a)
                        ));
                  }
                  layoutItem(i) {
                    var e = this.options;
                    const s = this.padding,
                      a = "horizontal" === e.layout,
                      d = i.itemHeight,
                      E = this.itemMarginBottom,
                      o = this.itemMarginTop,
                      M = a ? S(e.itemDistance, 20) : 0,
                      Z = this.maxLegendWidth;
                    e =
                      e.alignColumns && this.totalItemWidth > Z
                        ? this.maxItemWidth
                        : i.itemWidth;
                    const K = i.legendItem || {};
                    a &&
                      this.itemX - s + e > Z &&
                      ((this.itemX = s),
                      this.lastLineHeight &&
                        (this.itemY += o + this.lastLineHeight + E),
                      (this.lastLineHeight = 0)),
                      (this.lastItemY = o + this.itemY + E),
                      (this.lastLineHeight = Math.max(d, this.lastLineHeight)),
                      (K.x = this.itemX),
                      (K.y = this.itemY),
                      a
                        ? (this.itemX += e)
                        : ((this.itemY += o + d + E),
                          (this.lastLineHeight = d)),
                      (this.offsetWidth =
                        this.widthOption ||
                        Math.max(
                          (a ? this.itemX - s - (i.checkbox ? 0 : M) : e) + s,
                          this.offsetWidth
                        ));
                  }
                  getAllItems() {
                    let i = [];
                    return (
                      this.chart.series.forEach(function (e) {
                        const s = e && e.options;
                        e &&
                          S(s.showInLegend, !p(s.linkedTo) && void 0, !0) &&
                          (i = i.concat(
                            (e.legendItem || {}).labels ||
                              ("point" === s.legendType ? e.data : e)
                          ));
                      }),
                      u(this, "afterGetAllItems", { allItems: i }),
                      i
                    );
                  }
                  getAlignment() {
                    const i = this.options;
                    return this.proximate
                      ? i.align.charAt(0) + "tv"
                      : i.floating
                      ? ""
                      : i.align.charAt(0) +
                        i.verticalAlign.charAt(0) +
                        i.layout.charAt(0);
                  }
                  adjustMargins(i, e) {
                    const s = this.chart,
                      a = this.options,
                      d = this.getAlignment();
                    d &&
                      [
                        /(lth|ct|rth)/,
                        /(rtv|rm|rbv)/,
                        /(rbh|cb|lbh)/,
                        /(lbv|lm|ltv)/,
                      ].forEach(function (E, o) {
                        E.test(d) &&
                          !p(i[o]) &&
                          (s[N[o]] = Math.max(
                            s[N[o]],
                            s.legend[
                              (o + 1) % 2 ? "legendHeight" : "legendWidth"
                            ] +
                              [1, -1, -1, 1][o] * a[o % 2 ? "x" : "y"] +
                              S(a.margin, 12) +
                              e[o] +
                              (s.titleOffset[o] || 0)
                          ));
                      });
                  }
                  proximatePositions() {
                    const i = this.chart,
                      e = [],
                      s = "left" === this.options.align;
                    let a;
                    this.allItems.forEach(function (d) {
                      var E,
                        o = s;
                      let M;
                      d.yAxis &&
                        (d.xAxis.options.reversed && (o = !o),
                        d.points &&
                          (E = C(
                            o ? d.points : d.points.slice(0).reverse(),
                            function (Z) {
                              return A(Z.plotY);
                            }
                          )),
                        (o =
                          this.itemMarginTop +
                          d.legendItem.label.getBBox().height +
                          this.itemMarginBottom),
                        (M = d.yAxis.top - i.plotTop),
                        d.visible
                          ? ((E = E ? E.plotY : d.yAxis.height),
                            (E += M - 0.3 * o))
                          : (E = M + d.yAxis.height),
                        e.push({ target: E, size: o, item: d }));
                    }, this);
                    for (const d of x(e, i.plotHeight))
                      (a = d.item.legendItem || {}),
                        A(d.pos) && (a.y = i.plotTop - i.spacing[0] + d.pos);
                  }
                  render() {
                    const i = this.chart,
                      e = i.renderer,
                      s = this.options,
                      a = this.padding;
                    var d = this.getAllItems();
                    let E,
                      o = this.group,
                      M = this.box;
                    (this.itemX = a),
                      (this.itemY = this.initialItemY),
                      (this.lastItemY = this.offsetWidth = 0),
                      (this.widthOption = l(s.width, i.spacingBox.width - a));
                    var Z = i.spacingBox.width - 2 * a - s.x;
                    -1 <
                      ["rm", "lm"].indexOf(
                        this.getAlignment().substring(0, 2)
                      ) && (Z /= 2),
                      (this.maxLegendWidth = this.widthOption || Z),
                      o ||
                        ((this.group = o =
                          e
                            .g("legend")
                            .addClass(s.className || "")
                            .attr({ zIndex: 7 })
                            .add()),
                        (this.contentGroup = e.g().attr({ zIndex: 1 }).add(o)),
                        (this.scrollGroup = e.g().add(this.contentGroup))),
                      this.renderTitle(),
                      h(
                        d,
                        (K, $) =>
                          ((K.options && K.options.legendIndex) || 0) -
                          (($.options && $.options.legendIndex) || 0)
                      ),
                      s.reversed && d.reverse(),
                      (this.allItems = d),
                      (this.display = Z = !!d.length),
                      (this.itemHeight =
                        this.totalItemWidth =
                        this.maxItemWidth =
                        this.lastLineHeight =
                          0),
                      d.forEach(this.renderItem, this),
                      d.forEach(this.layoutItem, this),
                      (d = (this.widthOption || this.offsetWidth) + a),
                      (E =
                        this.lastItemY +
                        this.lastLineHeight +
                        this.titleHeight),
                      (E = this.handleOverflow(E)),
                      (E += a),
                      M ||
                        (this.box = M =
                          e
                            .rect()
                            .addClass("highcharts-legend-box")
                            .attr({ r: s.borderRadius })
                            .add(o)),
                      i.styledMode ||
                        M.attr({
                          stroke: s.borderColor,
                          "stroke-width": s.borderWidth || 0,
                          fill: s.backgroundColor || "none",
                        }).shadow(s.shadow),
                      0 < d &&
                        0 < E &&
                        M[M.placed ? "animate" : "attr"](
                          M.crisp.call(
                            {},
                            { x: 0, y: 0, width: d, height: E },
                            M.strokeWidth()
                          )
                        ),
                      o[Z ? "show" : "hide"](),
                      i.styledMode &&
                        "none" === o.getStyle("display") &&
                        (d = E = 0),
                      (this.legendWidth = d),
                      (this.legendHeight = E),
                      Z && this.align(),
                      this.proximate || this.positionItems(),
                      u(this, "afterRender");
                  }
                  align(i = this.chart.spacingBox) {
                    const e = this.chart,
                      s = this.options;
                    let a = i.y;
                    /(lth|ct|rth)/.test(this.getAlignment()) &&
                    0 < e.titleOffset[0]
                      ? (a += e.titleOffset[0])
                      : /(lbh|cb|rbh)/.test(this.getAlignment()) &&
                        0 < e.titleOffset[2] &&
                        (a -= e.titleOffset[2]),
                      a !== i.y && (i = T(i, { y: a })),
                      e.hasRendered || (this.group.placed = !1),
                      this.group.align(
                        T(s, {
                          width: this.legendWidth,
                          height: this.legendHeight,
                          verticalAlign: this.proximate
                            ? "top"
                            : s.verticalAlign,
                        }),
                        !0,
                        i
                      );
                  }
                  handleOverflow(i) {
                    const e = this,
                      s = this.chart,
                      a = s.renderer,
                      d = this.options;
                    var E = d.y;
                    const o = "top" === d.verticalAlign,
                      M = this.padding,
                      Z = d.maxHeight,
                      K = d.navigation,
                      $ = S(K.animation, !0),
                      L = K.arrowSize || 12,
                      n = this.pages,
                      z = this.allItems,
                      b = function (W) {
                        "number" == typeof W
                          ? B.attr({ height: W })
                          : B &&
                            ((e.clipRect = B.destroy()), e.contentGroup.clip()),
                          e.contentGroup.div &&
                            (e.contentGroup.div.style.clip = W
                              ? "rect(" + M + "px,9999px," + (M + W) + "px,0)"
                              : "auto");
                      },
                      D = function (W) {
                        return (
                          (e[W] = a
                            .circle(0, 0, 1.3 * L)
                            .translate(L / 2, L / 2)
                            .add(_)),
                          s.styledMode ||
                            e[W].attr("fill", "rgba(0,0,0,0.0001)"),
                          e[W]
                        );
                      };
                    let J, r, f;
                    E = s.spacingBox.height + (o ? -E : E) - M;
                    let _ = this.nav,
                      B = this.clipRect;
                    return (
                      "horizontal" !== d.layout ||
                        "middle" === d.verticalAlign ||
                        d.floating ||
                        (E /= 2),
                      Z && (E = Math.min(E, Z)),
                      (n.length = 0),
                      i && 0 < E && i > E && !1 !== K.enabled
                        ? ((this.clipHeight = J =
                            Math.max(E - 20 - this.titleHeight - M, 0)),
                          (this.currentPage = S(this.currentPage, 1)),
                          (this.fullHeight = i),
                          z.forEach((W, R) => {
                            (f = W.legendItem || {}), (W = f.y || 0);
                            const V = Math.round(f.label.getBBox().height);
                            let q = n.length;
                            (!q ||
                              (W - n[q - 1] > J && (r || W) !== n[q - 1])) &&
                              (n.push(r || W), q++),
                              (f.pageIx = q - 1),
                              r && ((z[R - 1].legendItem || {}).pageIx = q - 1),
                              R === z.length - 1 &&
                                W + V - n[q - 1] > J &&
                                W > n[q - 1] &&
                                (n.push(W), (f.pageIx = q)),
                              W !== r && (r = W);
                          }),
                          B ||
                            ((B = e.clipRect = a.clipRect(0, M - 2, 9999, 0)),
                            e.contentGroup.clip(B)),
                          b(J),
                          _ ||
                            ((this.nav = _ =
                              a.g().attr({ zIndex: 1 }).add(this.group)),
                            (this.up = a.symbol("triangle", 0, 0, L, L).add(_)),
                            D("upTracker").on("click", function () {
                              e.scroll(-1, $);
                            }),
                            (this.pager = a
                              .text("", 15, 10)
                              .addClass("highcharts-legend-navigation")),
                            !s.styledMode && K.style && this.pager.css(K.style),
                            this.pager.add(_),
                            (this.down = a
                              .symbol("triangle-down", 0, 0, L, L)
                              .add(_)),
                            D("downTracker").on("click", function () {
                              e.scroll(1, $);
                            })),
                          e.scroll(0),
                          (i = E))
                        : _ &&
                          (b(),
                          (this.nav = _.destroy()),
                          this.scrollGroup.attr({ translateY: 1 }),
                          (this.clipHeight = 0)),
                      i
                    );
                  }
                  scroll(i, e) {
                    const s = this.chart,
                      a = this.pages,
                      d = a.length,
                      E = this.clipHeight,
                      o = this.options.navigation,
                      M = this.pager,
                      Z = this.padding;
                    let K = this.currentPage + i;
                    K > d && (K = d),
                      0 < K &&
                        (typeof e < "u" && I(e, s),
                        this.nav.attr({
                          translateX: Z,
                          translateY: E + this.padding + 7 + this.titleHeight,
                          visibility: "inherit",
                        }),
                        [this.up, this.upTracker].forEach(function ($) {
                          $.attr({
                            class:
                              1 === K
                                ? "highcharts-legend-nav-inactive"
                                : "highcharts-legend-nav-active",
                          });
                        }),
                        M.attr({ text: K + "/" + d }),
                        [this.down, this.downTracker].forEach(function ($) {
                          $.attr({
                            x: 18 + this.pager.getBBox().width,
                            class:
                              K === d
                                ? "highcharts-legend-nav-inactive"
                                : "highcharts-legend-nav-active",
                          });
                        }, this),
                        s.styledMode ||
                          (this.up.attr({
                            fill: 1 === K ? o.inactiveColor : o.activeColor,
                          }),
                          this.upTracker.css({
                            cursor: 1 === K ? "default" : "pointer",
                          }),
                          this.down.attr({
                            fill: K === d ? o.inactiveColor : o.activeColor,
                          }),
                          this.downTracker.css({
                            cursor: K === d ? "default" : "pointer",
                          })),
                        (this.scrollOffset = -a[K - 1] + this.initialItemY),
                        this.scrollGroup.animate({
                          translateY: this.scrollOffset,
                        }),
                        (this.currentPage = K),
                        this.positionCheckboxes(),
                        (i = nt(S(e, s.renderer.globalAnimation, !0))),
                        m(() => {
                          u(this, "afterScroll", { currentPage: K });
                        }, i.duration));
                  }
                  setItemEvents(i, e, s) {
                    const a = this,
                      d = i.legendItem || {},
                      E = a.chart.renderer.boxWrapper,
                      o = i instanceof tt,
                      M =
                        "highcharts-legend-" +
                        (o ? "point" : "series") +
                        "-active",
                      Z = a.chart.styledMode;
                    s = s ? [e, d.symbol] : [d.group];
                    const K = ($) => {
                      a.allItems.forEach((L) => {
                        i !== L &&
                          [L].concat(L.linkedSeries || []).forEach((n) => {
                            n.setState($, !o);
                          });
                      });
                    };
                    for (const $ of s)
                      $ &&
                        $.on("mouseover", function () {
                          i.visible && K("inactive"),
                            i.setState("hover"),
                            i.visible && E.addClass(M),
                            Z || e.css(a.options.itemHoverStyle);
                        })
                          .on("mouseout", function () {
                            a.chart.styledMode ||
                              e.css(
                                T(i.visible ? a.itemStyle : a.itemHiddenStyle)
                              ),
                              K(""),
                              E.removeClass(M),
                              i.setState();
                          })
                          .on("click", function (L) {
                            const n = function () {
                              i.setVisible && i.setVisible(),
                                K(i.visible ? "inactive" : "");
                            };
                            E.removeClass(M),
                              (L = { browserEvent: L }),
                              i.firePointEvent
                                ? i.firePointEvent("legendItemClick", L, n)
                                : u(i, "legendItemClick", L, n);
                          });
                  }
                  createCheckboxForItem(i) {
                    (i.checkbox = P(
                      "input",
                      {
                        type: "checkbox",
                        className: "highcharts-legend-checkbox",
                        checked: i.selected,
                        defaultChecked: i.selected,
                      },
                      this.options.itemCheckboxStyle,
                      this.chart.container
                    )),
                      y(i.checkbox, "click", function (e) {
                        u(
                          i.series || i,
                          "checkboxClick",
                          { checked: e.target.checked, item: i },
                          function () {
                            i.select();
                          }
                        );
                      });
                  }
                }
                return (
                  (function (g) {
                    const i = [];
                    g.compose = function (e) {
                      st.pushUnique(i, e) &&
                        y(e, "beforeMargins", function () {
                          this.legend = new g(this, this.options.legend);
                        });
                    };
                  })(c || (c = {})),
                  c
                );
              }
            ),
            ut(
              t,
              "Core/Legend/LegendSymbol.js",
              [t["Core/Utilities.js"]],
              function (F) {
                const { extend: Y, merge: j, pick: tt } = F;
                var et = (function (st) {
                  return (
                    (st.lineMarker = function (nt, I) {
                      I = this.legendItem = this.legendItem || {};
                      var H = this.options;
                      const N = nt.symbolWidth,
                        x = nt.symbolHeight,
                        y = x / 2,
                        P = this.chart.renderer,
                        k = I.group;
                      nt = nt.baseline - Math.round(0.3 * nt.fontMetrics.b);
                      let p = {},
                        v = H.marker,
                        C = 0;
                      this.chart.styledMode ||
                        ((p = {
                          "stroke-width": Math.min(H.lineWidth || 0, 24),
                        }),
                        H.dashStyle
                          ? (p.dashstyle = H.dashStyle)
                          : "square" !== H.linecap &&
                            (p["stroke-linecap"] = "round")),
                        (I.line = P.path()
                          .addClass("highcharts-graph")
                          .attr(p)
                          .add(k)),
                        p["stroke-linecap"] &&
                          (C = Math.min(I.line.strokeWidth(), N) / 2),
                        N &&
                          I.line.attr({
                            d: [
                              ["M", C, nt],
                              ["L", N - C, nt],
                            ],
                          }),
                        v &&
                          !1 !== v.enabled &&
                          N &&
                          ((H = Math.min(tt(v.radius, y), y)),
                          0 === this.symbol.indexOf("url") &&
                            ((v = j(v, { width: x, height: x })), (H = 0)),
                          (I.symbol = I =
                            P.symbol(
                              this.symbol,
                              N / 2 - H,
                              nt - H,
                              2 * H,
                              2 * H,
                              Y({ context: "legend" }, v)
                            )
                              .addClass("highcharts-point")
                              .add(k)),
                          (I.isMarker = !0));
                    }),
                    (st.rectangle = function (nt, I) {
                      const H = nt.symbolHeight,
                        N = nt.options.squareSymbol;
                      (I = I.legendItem || {}).symbol = this.chart.renderer
                        .rect(
                          N ? (nt.symbolWidth - H) / 2 : 0,
                          nt.baseline - H + 1,
                          N ? H : nt.symbolWidth,
                          H,
                          tt(nt.options.symbolRadius, H / 2)
                        )
                        .addClass("highcharts-point")
                        .attr({ zIndex: 3 })
                        .add(I.group);
                    }),
                    st
                  );
                })(et || {});
                return et;
              }
            ),
            ut(t, "Core/Series/SeriesDefaults.js", [], function () {
              return {
                lineWidth: 1,
                allowPointSelect: !1,
                crisp: !0,
                showCheckbox: !1,
                animation: { duration: 1e3 },
                enableMouseTracking: !0,
                events: {},
                marker: {
                  enabledThreshold: 2,
                  lineColor: "#ffffff",
                  lineWidth: 0,
                  radius: 4,
                  states: {
                    normal: { animation: !0 },
                    hover: {
                      animation: { duration: 150 },
                      enabled: !0,
                      radiusPlus: 2,
                      lineWidthPlus: 1,
                    },
                    select: {
                      fillColor: "#cccccc",
                      lineColor: "#000000",
                      lineWidth: 2,
                    },
                  },
                },
                point: { events: {} },
                dataLabels: {
                  animation: {},
                  align: "center",
                  borderWidth: 0,
                  defer: !0,
                  formatter: function () {
                    const { numberFormatter: F } = this.series.chart;
                    return "number" != typeof this.y ? "" : F(this.y, -1);
                  },
                  padding: 5,
                  style: {
                    fontSize: "0.7em",
                    fontWeight: "bold",
                    color: "contrast",
                    textOutline: "1px contrast",
                  },
                  verticalAlign: "bottom",
                  x: 0,
                  y: 0,
                },
                cropThreshold: 300,
                opacity: 1,
                pointRange: 0,
                softThreshold: !0,
                states: {
                  normal: { animation: !0 },
                  hover: {
                    animation: { duration: 150 },
                    lineWidthPlus: 1,
                    marker: {},
                    halo: { size: 10, opacity: 0.25 },
                  },
                  select: { animation: { duration: 0 } },
                  inactive: { animation: { duration: 150 }, opacity: 0.2 },
                },
                stickyTracking: !0,
                turboThreshold: 1e3,
                findNearestPointBy: "x",
              };
            }),
            ut(
              t,
              "Core/Series/SeriesRegistry.js",
              [
                t["Core/Globals.js"],
                t["Core/Defaults.js"],
                t["Core/Series/Point.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j, tt) {
                const { defaultOptions: et } = Y,
                  { extendClass: st, merge: nt } = tt;
                var I;
                return (
                  (function (H) {
                    function N(x, y) {
                      const P = et.plotOptions || {},
                        k = y.defaultOptions,
                        p = y.prototype;
                      (p.type = x),
                        p.pointClass || (p.pointClass = j),
                        k && (P[x] = k),
                        (H.seriesTypes[x] = y);
                    }
                    (H.seriesTypes = F.seriesTypes),
                      (H.registerSeriesType = N),
                      (H.seriesType = function (x, y, P, k, p) {
                        const v = et.plotOptions || {};
                        return (
                          (v[x] = nt(v[(y = y || "")], P)),
                          N(x, st(H.seriesTypes[y] || function () {}, k)),
                          (H.seriesTypes[x].prototype.type = x),
                          p &&
                            (H.seriesTypes[x].prototype.pointClass = st(j, p)),
                          H.seriesTypes[x]
                        );
                      });
                  })(I || (I = {})),
                  I
                );
              }
            ),
            ut(
              t,
              "Core/Series/Series.js",
              [
                t["Core/Animation/AnimationUtilities.js"],
                t["Core/Defaults.js"],
                t["Core/Foundation.js"],
                t["Core/Globals.js"],
                t["Core/Legend/LegendSymbol.js"],
                t["Core/Series/Point.js"],
                t["Core/Series/SeriesDefaults.js"],
                t["Core/Series/SeriesRegistry.js"],
                t["Core/Renderer/SVG/SVGElement.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j, tt, et, st, nt, I, H, N) {
                const { animObject: x, setAnimation: y } = F,
                  { defaultOptions: P } = Y,
                  { registerEventOptions: k } = j,
                  { hasTouch: p, svg: v, win: C } = tt,
                  { seriesTypes: u } = I,
                  {
                    arrayMax: A,
                    arrayMin: T,
                    clamp: S,
                    correctFloat: l,
                    defined: h,
                    diffObjects: m,
                    erase: c,
                    error: g,
                    extend: i,
                    find: e,
                    fireEvent: s,
                    getClosestDistance: a,
                    getNestedProperty: d,
                    insertItem: E,
                    isArray: o,
                    isNumber: M,
                    isString: Z,
                    merge: K,
                    objectEach: $,
                    pick: L,
                    removeEvent: n,
                    splat: z,
                    syncTimeout: b,
                  } = N;
                class D {
                  constructor() {
                    this.zones =
                      this.yAxis =
                      this.xAxis =
                      this.userOptions =
                      this.tooltipOptions =
                      this.processedYData =
                      this.processedXData =
                      this.points =
                      this.options =
                      this.linkedSeries =
                      this.index =
                      this.eventsToUnbind =
                      this.eventOptions =
                      this.data =
                      this.chart =
                      this._i =
                        void 0;
                  }
                  init(r, f) {
                    s(this, "init", { options: f });
                    const _ = this,
                      B = r.series;
                    (this.eventsToUnbind = []),
                      (_.chart = r),
                      (_.options = _.setOptions(f)),
                      (f = _.options),
                      (_.linkedSeries = []),
                      _.bindAxes(),
                      i(_, {
                        name: f.name,
                        state: "",
                        visible: !1 !== f.visible,
                        selected: !0 === f.selected,
                      }),
                      k(this, f);
                    const W = f.events;
                    let R;
                    ((W && W.click) ||
                      (f.point && f.point.events && f.point.events.click) ||
                      f.allowPointSelect) &&
                      (r.runTrackerClick = !0),
                      _.getColor(),
                      _.getSymbol(),
                      _.parallelArrays.forEach(function (V) {
                        _[V + "Data"] || (_[V + "Data"] = []);
                      }),
                      _.isCartesian && (r.hasCartesianSeries = !0),
                      B.length && (R = B[B.length - 1]),
                      (_._i = L(R && R._i, -1) + 1),
                      (_.opacity = _.options.opacity),
                      r.orderItems("series", E(this, B)),
                      f.dataSorting && f.dataSorting.enabled
                        ? _.setDataSortingOptions()
                        : _.points || _.data || _.setData(f.data, !1),
                      s(this, "afterInit");
                  }
                  is(r) {
                    return u[r] && this instanceof u[r];
                  }
                  bindAxes() {
                    const r = this,
                      f = r.options,
                      _ = r.chart;
                    let B;
                    s(this, "bindAxes", null, function () {
                      (r.axisTypes || []).forEach(function (W) {
                        _[W].forEach(function (R) {
                          (B = R.options),
                            (L(f[W], 0) === R.index ||
                              (typeof f[W] < "u" && f[W] === B.id)) &&
                              (E(r, R.series), (r[W] = R), (R.isDirty = !0));
                        }),
                          r[W] || r.optionalAxis === W || g(18, !0, _);
                      });
                    }),
                      s(this, "afterBindAxes");
                  }
                  updateParallelArrays(r, f, _) {
                    const B = r.series,
                      W = M(f)
                        ? function (R) {
                            const V =
                              "y" === R && B.toYData ? B.toYData(r) : r[R];
                            B[R + "Data"][f] = V;
                          }
                        : function (R) {
                            Array.prototype[f].apply(B[R + "Data"], _);
                          };
                    B.parallelArrays.forEach(W);
                  }
                  hasData() {
                    return (
                      (this.visible &&
                        typeof this.dataMax < "u" &&
                        typeof this.dataMin < "u") ||
                      (this.visible && this.yData && 0 < this.yData.length)
                    );
                  }
                  autoIncrement(r) {
                    var f = this.options;
                    const _ = f.pointIntervalUnit,
                      B = f.relativeXValue,
                      W = this.chart.time;
                    let V,
                      R = this.xIncrement;
                    return (
                      (R = L(R, f.pointStart, 0)),
                      (this.pointInterval = V =
                        L(this.pointInterval, f.pointInterval, 1)),
                      B && M(r) && (V *= r),
                      _ &&
                        ((f = new W.Date(R)),
                        "day" === _
                          ? W.set("Date", f, W.get("Date", f) + V)
                          : "month" === _
                          ? W.set("Month", f, W.get("Month", f) + V)
                          : "year" === _ &&
                            W.set("FullYear", f, W.get("FullYear", f) + V),
                        (V = f.getTime() - R)),
                      B && M(r) ? R + V : ((this.xIncrement = R + V), R)
                    );
                  }
                  setDataSortingOptions() {
                    const r = this.options;
                    i(this, {
                      requireSorting: !1,
                      sorted: !1,
                      enabledDataSorting: !0,
                      allowDG: !1,
                    }),
                      h(r.pointRange) || (r.pointRange = 1);
                  }
                  setOptions(r) {
                    var f, _;
                    const B = this.chart;
                    var W = B.options.plotOptions,
                      R = B.userOptions || {};
                    const V = K(r);
                    r = B.styledMode;
                    const q = { plotOptions: W, userOptions: V };
                    s(this, "setOptions", q);
                    const it = q.plotOptions[this.type],
                      lt = (R = R.plotOptions || {}).series || {},
                      gt = P.plotOptions[this.type] || {},
                      w = R[this.type] || {};
                    return (
                      (this.userOptions = q.userOptions),
                      (W = K(it, W.series, w, V)),
                      (this.tooltipOptions = K(
                        P.tooltip,
                        null === (f = P.plotOptions.series) || void 0 === f
                          ? void 0
                          : f.tooltip,
                        gt?.tooltip,
                        B.userOptions.tooltip,
                        null === (_ = R.series) || void 0 === _
                          ? void 0
                          : _.tooltip,
                        w.tooltip,
                        V.tooltip
                      )),
                      (this.stickyTracking = L(
                        V.stickyTracking,
                        w.stickyTracking,
                        lt.stickyTracking,
                        !(
                          !this.tooltipOptions.shared || this.noSharedTooltip
                        ) || W.stickyTracking
                      )),
                      null === it.marker && delete W.marker,
                      (this.zoneAxis = W.zoneAxis),
                      (_ = this.zones = (W.zones || []).slice()),
                      (!W.negativeColor && !W.negativeFillColor) ||
                        W.zones ||
                        ((f = {
                          value:
                            W[this.zoneAxis + "Threshold"] || W.threshold || 0,
                          className: "highcharts-negative",
                        }),
                        r ||
                          ((f.color = W.negativeColor),
                          (f.fillColor = W.negativeFillColor)),
                        _.push(f)),
                      _.length &&
                        h(_[_.length - 1].value) &&
                        _.push(
                          r
                            ? {}
                            : { color: this.color, fillColor: this.fillColor }
                        ),
                      s(this, "afterSetOptions", { options: W }),
                      W
                    );
                  }
                  getName() {
                    return L(this.options.name, "Series " + (this.index + 1));
                  }
                  getCyclic(r, f, _) {
                    const B = this.chart,
                      W = `${r}Index`,
                      R = `${r}Counter`,
                      V = _?.length || B.options.chart.colorCount;
                    if (!f) {
                      var q = L(
                        "color" === r ? this.options.colorIndex : void 0,
                        this[W]
                      );
                      h(q) ||
                        (B.series.length || (B[R] = 0),
                        (q = B[R] % V),
                        (B[R] += 1)),
                        _ && (f = _[q]);
                    }
                    typeof q < "u" && (this[W] = q), (this[r] = f);
                  }
                  getColor() {
                    this.chart.styledMode
                      ? this.getCyclic("color")
                      : this.options.colorByPoint
                      ? (this.color = "#cccccc")
                      : this.getCyclic(
                          "color",
                          this.options.color || P.plotOptions[this.type].color,
                          this.chart.options.colors
                        );
                  }
                  getPointsCollection() {
                    return (
                      (this.hasGroupedData ? this.points : this.data) || []
                    );
                  }
                  getSymbol() {
                    this.getCyclic(
                      "symbol",
                      this.options.marker.symbol,
                      this.chart.options.symbols
                    );
                  }
                  findPointIndex(r, f) {
                    const _ = r.id,
                      B = r.x,
                      W = this.points;
                    var V,
                      R = this.options.dataSorting;
                    let q, it;
                    if (_) (R = this.chart.get(_)) instanceof st && (V = R);
                    else if (
                      (this.linkedParent ||
                        this.enabledDataSorting ||
                        this.options.relativeXValue) &&
                      ((V = (lt) => !lt.touched && lt.index === r.index),
                      R && R.matchByName
                        ? (V = (lt) => !lt.touched && lt.name === r.name)
                        : this.options.relativeXValue &&
                          (V = (lt) => !lt.touched && lt.options.x === r.x),
                      !(V = e(W, V)))
                    )
                      return;
                    return (
                      V && ((it = V && V.index), typeof it < "u" && (q = !0)),
                      typeof it > "u" &&
                        M(B) &&
                        (it = this.xData.indexOf(B, f)),
                      -1 !== it &&
                        typeof it < "u" &&
                        this.cropped &&
                        (it = it >= this.cropStart ? it - this.cropStart : it),
                      !q && M(it) && W[it] && W[it].touched && (it = void 0),
                      it
                    );
                  }
                  updateData(r, f) {
                    const _ = this.options,
                      B = _.dataSorting,
                      W = this.points,
                      R = [],
                      V = this.requireSorting,
                      q = r.length === W.length;
                    let it,
                      lt,
                      gt,
                      w = !0;
                    if (
                      ((this.xIncrement = null),
                      r.forEach(function (O, Q) {
                        var G =
                          (h(O) &&
                            this.pointClass.prototype.optionsToObject.call(
                              { series: this },
                              O
                            )) ||
                          {};
                        G.id || M(G.x)
                          ? (-1 === (G = this.findPointIndex(G, gt)) ||
                            typeof G > "u"
                              ? R.push(O)
                              : W[G] && O !== _.data[G]
                              ? (W[G].update(O, !1, null, !1),
                                (W[G].touched = !0),
                                V && (gt = G + 1))
                              : W[G] && (W[G].touched = !0),
                            (!q ||
                              Q !== G ||
                              (B && B.enabled) ||
                              this.hasDerivedData) &&
                              (it = !0))
                          : R.push(O);
                      }, this),
                      it)
                    )
                      for (r = W.length; r--; )
                        (lt = W[r]) &&
                          !lt.touched &&
                          lt.remove &&
                          lt.remove(!1, f);
                    else
                      !q || (B && B.enabled)
                        ? (w = !1)
                        : (r.forEach(function (O, Q) {
                            O === W[Q].y ||
                              W[Q].destroyed ||
                              W[Q].update(O, !1, null, !1);
                          }),
                          (R.length = 0));
                    return (
                      W.forEach(function (O) {
                        O && (O.touched = !1);
                      }),
                      !!w &&
                        (R.forEach(function (O) {
                          this.addPoint(O, !1, null, null, !1);
                        }, this),
                        null === this.xIncrement &&
                          this.xData &&
                          this.xData.length &&
                          ((this.xIncrement = A(this.xData)),
                          this.autoIncrement()),
                        !0)
                    );
                  }
                  setData(r, f = !0, _, B) {
                    var W;
                    const R = this,
                      V = R.points,
                      q = (V && V.length) || 0,
                      it = R.options,
                      lt = R.chart,
                      gt = it.dataSorting,
                      w = R.xAxis,
                      O = it.turboThreshold,
                      Q = this.xData,
                      G = this.yData;
                    var X = R.pointArrayMap;
                    X = X && X.length;
                    const ct = it.keys;
                    let ht,
                      Tt = 0,
                      Ct = 1,
                      yt = null;
                    if (!lt.options.chart.allowMutatingData) {
                      it.data && delete R.options.data,
                        R.userOptions.data && delete R.userOptions.data;
                      var vt = K(!0, r);
                    }
                    if (
                      ((vt = (r = vt || r || []).length),
                      gt && gt.enabled && (r = this.sortData(r)),
                      lt.options.chart.allowMutatingData &&
                        !1 !== B &&
                        vt &&
                        q &&
                        !R.cropped &&
                        !R.hasGroupedData &&
                        R.visible &&
                        !R.boosted &&
                        (ht = this.updateData(r, _)),
                      !ht)
                    ) {
                      if (
                        ((R.xIncrement = null),
                        (R.colorCounter = 0),
                        this.parallelArrays.forEach(function (zt) {
                          R[zt + "Data"].length = 0;
                        }),
                        O && vt > O)
                      )
                        if (((yt = R.getFirstValidPoint(r)), M(yt)))
                          for (_ = 0; _ < vt; _++)
                            (Q[_] = this.autoIncrement()), (G[_] = r[_]);
                        else if (o(yt))
                          if (X)
                            if (yt.length === X)
                              for (_ = 0; _ < vt; _++)
                                (Q[_] = this.autoIncrement()), (G[_] = r[_]);
                            else
                              for (_ = 0; _ < vt; _++)
                                (Q[_] = (B = r[_])[0]),
                                  (G[_] = B.slice(1, X + 1));
                          else if (
                            (ct &&
                              ((Tt = ct.indexOf("x")),
                              (Ct = ct.indexOf("y")),
                              (Tt = 0 <= Tt ? Tt : 0),
                              (Ct = 0 <= Ct ? Ct : 1)),
                            1 === yt.length && (Ct = 0),
                            Tt === Ct)
                          )
                            for (_ = 0; _ < vt; _++)
                              (Q[_] = this.autoIncrement()), (G[_] = r[_][Ct]);
                          else
                            for (_ = 0; _ < vt; _++)
                              (Q[_] = (B = r[_])[Tt]), (G[_] = B[Ct]);
                        else g(12, !1, lt);
                      else
                        for (_ = 0; _ < vt; _++)
                          R.pointClass.prototype.applyOptions.apply(
                            (B = { series: R }),
                            [r[_]]
                          ),
                            R.updateParallelArrays(B, _);
                      for (
                        G && Z(G[0]) && g(14, !0, lt),
                          R.data = [],
                          R.options.data = R.userOptions.data = r,
                          _ = q;
                        _--;

                      )
                        null === (W = V[_]) || void 0 === W || W.destroy();
                      w && (w.minRange = w.userMinRange),
                        (R.isDirty = lt.isDirtyBox = !0),
                        (R.isDirtyData = !!V),
                        (_ = !1);
                    }
                    "point" === it.legendType &&
                      (this.processData(), this.generatePoints()),
                      f && lt.redraw(_);
                  }
                  sortData(r) {
                    const f = this,
                      _ = f.options.dataSorting.sortKey || "y",
                      B = function (W, R) {
                        return (
                          (h(R) &&
                            W.pointClass.prototype.optionsToObject.call(
                              { series: W },
                              R
                            )) ||
                          {}
                        );
                      };
                    return (
                      r.forEach(function (W, R) {
                        (r[R] = B(f, W)), (r[R].index = R);
                      }, this),
                      r
                        .concat()
                        .sort(
                          (W, R) => (
                            (W = d(_, W)),
                            (R = d(_, R)) < W ? -1 : R > W ? 1 : 0
                          )
                        )
                        .forEach(function (W, R) {
                          W.x = R;
                        }, this),
                      f.linkedSeries &&
                        f.linkedSeries.forEach(function (W) {
                          const R = W.options,
                            V = R.data;
                          (R.dataSorting && R.dataSorting.enabled) ||
                            !V ||
                            (V.forEach(function (q, it) {
                              (V[it] = B(W, q)),
                                r[it] &&
                                  ((V[it].x = r[it].x), (V[it].index = it));
                            }),
                            W.setData(V, !1));
                        }),
                      r
                    );
                  }
                  getProcessedData(r) {
                    const f = this;
                    var _ = f.xAxis,
                      B = f.options;
                    const W = B.cropThreshold,
                      R = r || f.getExtremesFromAll || B.getExtremesFromAll,
                      V = _?.logarithmic,
                      q = f.isCartesian;
                    let lt,
                      it = 0;
                    B = f.yData;
                    let gt = !1;
                    const w = (r = f.xData).length;
                    if (_) {
                      var O = _.getExtremes();
                      (lt = O.min),
                        (O = O.max),
                        (gt = !(!_.categories || _.names.length));
                    }
                    if (q && f.sorted && !R && (!W || w > W || f.forceCrop))
                      if (r[w - 1] < lt || r[0] > O) (r = []), (B = []);
                      else if (f.yData && (r[0] < lt || r[w - 1] > O)) {
                        var Q = this.cropData(f.xData, f.yData, lt, O);
                        (r = Q.xData), (B = Q.yData), (it = Q.start), (Q = !0);
                      }
                    return (
                      (_ = a(
                        [V ? r.map(V.log2lin) : r],
                        () => f.requireSorting && !gt && g(15, !1, f.chart)
                      )),
                      {
                        xData: r,
                        yData: B,
                        cropped: Q,
                        cropStart: it,
                        closestPointRange: _,
                      }
                    );
                  }
                  processData(r) {
                    if (
                      this.isCartesian &&
                      !this.isDirty &&
                      !this.xAxis.isDirty &&
                      !this.yAxis.isDirty &&
                      !r
                    )
                      return !1;
                    (r = this.getProcessedData()),
                      (this.cropped = r.cropped),
                      (this.cropStart = r.cropStart),
                      (this.processedXData = r.xData),
                      (this.processedYData = r.yData),
                      (this.closestPointRange = this.basePointRange =
                        r.closestPointRange),
                      s(this, "afterProcessData");
                  }
                  cropData(r, f, _, B, W) {
                    const R = r.length;
                    let V,
                      q = 0,
                      it = R;
                    for (W = L(W, this.cropShoulder), V = 0; V < R; V++)
                      if (r[V] >= _) {
                        q = Math.max(0, V - W);
                        break;
                      }
                    for (_ = V; _ < R; _++)
                      if (r[_] > B) {
                        it = _ + W;
                        break;
                      }
                    return {
                      xData: r.slice(q, it),
                      yData: f.slice(q, it),
                      start: q,
                      end: it,
                    };
                  }
                  generatePoints() {
                    var r = this.options;
                    const f = this.processedData || r.data,
                      _ = this.processedXData,
                      B = this.processedYData,
                      W = this.pointClass,
                      R = _.length,
                      V = this.cropStart || 0,
                      q = this.hasGroupedData,
                      it = r.keys,
                      lt = [];
                    r = r.dataGrouping && r.dataGrouping.groupAll ? V : 0;
                    let gt,
                      w,
                      O,
                      Q = this.data;
                    if (!Q && !q) {
                      var G = [];
                      (G.length = f.length), (Q = this.data = G);
                    }
                    for (it && q && (this.options.keys = !1), O = 0; O < R; O++)
                      (G = V + O),
                        q
                          ? ((w = new W().init(this, [_[O]].concat(z(B[O])))),
                            (w.dataGroup = this.groupMap[r + O]),
                            w.dataGroup.options &&
                              ((w.options = w.dataGroup.options),
                              i(w, w.dataGroup.options),
                              delete w.dataLabels))
                          : (w = Q[G]) ||
                            typeof f[G] > "u" ||
                            (Q[G] = w = new W().init(this, f[G], _[O])),
                        w && ((w.index = q ? r + O : G), (lt[O] = w));
                    if (
                      ((this.options.keys = it),
                      Q && (R !== (gt = Q.length) || q))
                    )
                      for (O = 0; O < gt; O++)
                        O !== V || q || (O += R),
                          Q[O] &&
                            (Q[O].destroyElements(), (Q[O].plotX = void 0));
                    (this.data = Q),
                      (this.points = lt),
                      s(this, "afterGeneratePoints");
                  }
                  getXExtremes(r) {
                    return { min: T(r), max: A(r) };
                  }
                  getExtremes(r, f) {
                    const _ = this.xAxis;
                    var B = this.yAxis;
                    const W = this.processedXData || this.xData,
                      R = [],
                      V = this.requireSorting ? this.cropShoulder : 0;
                    B = !!B && B.positiveValuesOnly;
                    let q,
                      it = 0,
                      lt = 0,
                      gt = 0;
                    const w = (r =
                      r || this.stackedYData || this.processedYData || [])
                      .length;
                    if (_) {
                      var O = _.getExtremes();
                      (it = O.min), (lt = O.max);
                    }
                    for (q = 0; q < w; q++) {
                      var Q = W[q],
                        G =
                          (M((O = r[q])) || o(O)) && (O.length || 0 < O || !B);
                      if (
                        ((Q =
                          f ||
                          this.getExtremesFromAll ||
                          this.options.getExtremesFromAll ||
                          this.cropped ||
                          !_ ||
                          ((W[q + V] || Q) >= it && (W[q - V] || Q) <= lt)),
                        G && Q)
                      )
                        if ((G = O.length))
                          for (; G--; ) M(O[G]) && (R[gt++] = O[G]);
                        else R[gt++] = O;
                    }
                    return (
                      (r = { activeYData: R, dataMin: T(R), dataMax: A(R) }),
                      s(this, "afterGetExtremes", { dataExtremes: r }),
                      r
                    );
                  }
                  applyExtremes() {
                    const r = this.getExtremes();
                    return (
                      (this.dataMin = r.dataMin), (this.dataMax = r.dataMax), r
                    );
                  }
                  getFirstValidPoint(r) {
                    const f = r.length;
                    let _ = 0,
                      B = null;
                    for (; null === B && _ < f; ) (B = r[_]), _++;
                    return B;
                  }
                  translate() {
                    var r;
                    this.processedXData || this.processData(),
                      this.generatePoints();
                    var f = this.options;
                    const _ = f.stacking,
                      B = this.xAxis,
                      W = B.categories,
                      R = this.enabledDataSorting,
                      V = this.yAxis,
                      q = this.points,
                      it = q.length,
                      lt = this.pointPlacementToXValue(),
                      gt = !!lt,
                      w = f.threshold;
                    f = f.startFromThreshold ? w : 0;
                    let O,
                      Q,
                      G,
                      X,
                      ct = Number.MAX_VALUE;
                    for (O = 0; O < it; O++) {
                      const ht = q[O],
                        Tt = ht.x;
                      let Ct,
                        yt,
                        vt = ht.y,
                        zt = ht.low;
                      const Et =
                        _ &&
                        (null === (r = V.stacking) || void 0 === r
                          ? void 0
                          : r.stacks[
                              (this.negStacks && vt < (f ? 0 : w) ? "-" : "") +
                                this.stackKey
                            ]);
                      let Pt;
                      (Q = B.translate(Tt, !1, !1, !1, !0, lt)),
                        (ht.plotX = M(Q) ? l(S(Q, -1e5, 1e5)) : void 0),
                        _ &&
                          this.visible &&
                          Et &&
                          Et[Tt] &&
                          ((X = this.getStackIndicator(X, Tt, this.index)),
                          !ht.isNull &&
                            X.key &&
                            ((Ct = Et[Tt]), (yt = Ct.points[X.key])),
                          Ct &&
                            o(yt) &&
                            ((zt = yt[0]),
                            (vt = yt[1]),
                            zt === f &&
                              X.key === Et[Tt].base &&
                              (zt = L(M(w) ? w : V.min)),
                            V.positiveValuesOnly &&
                              h(zt) &&
                              0 >= zt &&
                              (zt = void 0),
                            (ht.total = ht.stackTotal = L(Ct.total)),
                            (ht.percentage =
                              h(ht.y) && Ct.total
                                ? (ht.y / Ct.total) * 100
                                : void 0),
                            (ht.stackY = vt),
                            this.irregularWidths ||
                              Ct.setOffset(
                                this.pointXOffset || 0,
                                this.barW || 0,
                                void 0,
                                void 0,
                                void 0,
                                this.xAxis
                              ))),
                        (ht.yBottom = h(zt)
                          ? S(V.translate(zt, !1, !0, !1, !0), -1e5, 1e5)
                          : void 0),
                        this.dataModify &&
                          (vt = this.dataModify.modifyValue(vt, O)),
                        M(vt) &&
                          void 0 !== ht.plotX &&
                          ((Pt = V.translate(vt, !1, !0, !1, !0)),
                          (Pt = M(Pt) ? S(Pt, -1e5, 1e5) : void 0)),
                        (ht.plotY = Pt),
                        (ht.isInside = this.isPointInside(ht)),
                        (ht.clientX = gt
                          ? l(B.translate(Tt, !1, !1, !1, !0, lt))
                          : Q),
                        (ht.negative = (ht.y || 0) < (w || 0)),
                        (ht.category = L(W && W[ht.x], ht.x)),
                        ht.isNull ||
                          !1 === ht.visible ||
                          (typeof G < "u" &&
                            (ct = Math.min(ct, Math.abs(Q - G))),
                          (G = Q)),
                        (ht.zone = this.zones.length ? ht.getZone() : void 0),
                        !ht.graphic && this.group && R && (ht.isNew = !0);
                    }
                    (this.closestPointRangePx = ct), s(this, "afterTranslate");
                  }
                  getValidPoints(r, f, _) {
                    const B = this.chart;
                    return (r || this.points || []).filter(function (W) {
                      const { plotX: R, plotY: V } = W;
                      return (
                        !(
                          !(_ || (!W.isNull && M(V))) ||
                          (f && !B.isInsidePlot(R, V, { inverted: B.inverted }))
                        ) && !1 !== W.visible
                      );
                    });
                  }
                  getClipBox() {
                    const { chart: r, xAxis: f, yAxis: _ } = this,
                      B = K(r.clipBox);
                    return (
                      f && f.len !== r.plotSizeX && (B.width = f.len),
                      _ && _.len !== r.plotSizeY && (B.height = _.len),
                      B
                    );
                  }
                  getSharedClipKey() {
                    return (this.sharedClipKey =
                      (this.options.xAxis || 0) +
                      "," +
                      (this.options.yAxis || 0));
                  }
                  setClip() {
                    const { chart: r, group: f, markerGroup: _ } = this,
                      B = r.sharedClips,
                      W = r.renderer,
                      R = this.getClipBox(),
                      V = this.getSharedClipKey();
                    let q = B[V];
                    q ? q.animate(R) : (B[V] = q = W.clipRect(R)),
                      f && f.clip(!1 === this.options.clip ? void 0 : q),
                      _ && _.clip();
                  }
                  animate(r) {
                    const { chart: f, group: _, markerGroup: B } = this,
                      W = f.inverted;
                    var R = x(this.options.animation),
                      V = [
                        this.getSharedClipKey(),
                        R.duration,
                        R.easing,
                        R.defer,
                      ].join();
                    let q = f.sharedClips[V],
                      it = f.sharedClips[V + "m"];
                    if (r && _)
                      (R = this.getClipBox()),
                        q
                          ? q.attr("height", R.height)
                          : ((R.width = 0),
                            W && (R.x = f.plotHeight),
                            (q = f.renderer.clipRect(R)),
                            (f.sharedClips[V] = q),
                            (it = f.renderer.clipRect({
                              x: -99,
                              y: -99,
                              width: W ? f.plotWidth + 199 : 99,
                              height: W ? 99 : f.plotHeight + 199,
                            })),
                            (f.sharedClips[V + "m"] = it)),
                        _.clip(q),
                        B && B.clip(it);
                    else if (q && !q.hasClass("highcharts-animating")) {
                      V = this.getClipBox();
                      const lt = R.step;
                      B &&
                        B.element.childNodes.length &&
                        (R.step = function (gt, w) {
                          lt && lt.apply(w, arguments),
                            "width" === w.prop &&
                              it &&
                              it.element &&
                              it.attr(W ? "height" : "width", gt + 99);
                        }),
                        q.addClass("highcharts-animating").animate(V, R);
                    }
                  }
                  afterAnimate() {
                    this.setClip(),
                      $(this.chart.sharedClips, (r, f, _) => {
                        r &&
                          !this.chart.container.querySelector(
                            `[clip-path="url(#${r.id})"]`
                          ) &&
                          (r.destroy(), delete _[f]);
                      }),
                      (this.finishedAnimating = !0),
                      s(this, "afterAnimate");
                  }
                  drawPoints(r = this.points) {
                    const f = this.chart,
                      _ = f.styledMode,
                      { colorAxis: B, options: W } = this,
                      R = W.marker,
                      V = this[this.specialGroup || "markerGroup"],
                      q = this.xAxis,
                      it = L(
                        R.enabled,
                        !(q && !q.isRadial) || null,
                        this.closestPointRangePx >=
                          R.enabledThreshold * R.radius
                      );
                    let lt, gt, w, O, Q, G;
                    if (!1 !== R.enabled || this._hasPointMarkers)
                      for (lt = 0; lt < r.length; lt++) {
                        (gt = r[lt]),
                          (O = (w = gt.graphic) ? "animate" : "attr");
                        var X = gt.marker || {};
                        if (
                          ((Q = !!gt.marker),
                          ((it && typeof X.enabled > "u") || X.enabled) &&
                            !gt.isNull &&
                            !1 !== gt.visible)
                        ) {
                          const ct = L(X.symbol, this.symbol, "rect");
                          (G = this.markerAttribs(gt, gt.selected && "select")),
                            this.enabledDataSorting &&
                              (gt.startXPos = q.reversed
                                ? -(G.width || 0)
                                : q.width);
                          const ht = !1 !== gt.isInside;
                          !w &&
                            ht &&
                            (0 < (G.width || 0) || gt.hasImage) &&
                            ((gt.graphic = w =
                              f.renderer
                                .symbol(
                                  ct,
                                  G.x,
                                  G.y,
                                  G.width,
                                  G.height,
                                  Q ? X : R
                                )
                                .add(V)),
                            this.enabledDataSorting &&
                              f.hasRendered &&
                              (w.attr({ x: gt.startXPos }), (O = "animate"))),
                            w &&
                              "animate" === O &&
                              w[ht ? "show" : "hide"](ht).animate(G),
                            w &&
                              ((X = this.pointAttribs(
                                gt,
                                _ || !gt.selected ? void 0 : "select"
                              )),
                              _ ? B && w.css({ fill: X.fill }) : w[O](X)),
                            w && w.addClass(gt.getClassName(), !0);
                        } else w && (gt.graphic = w.destroy());
                      }
                  }
                  markerAttribs(r, f) {
                    const _ = this.options;
                    var B = _.marker;
                    const W = r.marker || {},
                      R = W.symbol || B.symbol,
                      V = {};
                    let q = L(W.radius, B && B.radius);
                    return (
                      f &&
                        ((B = B.states[f]),
                        (q = L(
                          (f = W.states && W.states[f]) && f.radius,
                          B && B.radius,
                          q && q + ((B && B.radiusPlus) || 0)
                        ))),
                      (r.hasImage = R && 0 === R.indexOf("url")),
                      r.hasImage && (q = 0),
                      (r = r.pos()),
                      M(q) &&
                        r &&
                        ((V.x = r[0] - q),
                        (V.y = r[1] - q),
                        _.crisp && (V.x = Math.floor(V.x))),
                      q && (V.width = V.height = 2 * q),
                      V
                    );
                  }
                  pointAttribs(r, f) {
                    var _ = this.options.marker,
                      B = r && r.options;
                    const W = (B && B.marker) || {};
                    var R = B && B.color,
                      V = r && r.color;
                    const q = r && r.zone && r.zone.color;
                    let it = this.color;
                    return (
                      (r = L(W.lineWidth, _.lineWidth)),
                      (B = 1),
                      (it = R || q || V || it),
                      (R = W.fillColor || _.fillColor || it),
                      (V = W.lineColor || _.lineColor || it),
                      (_ = _.states[(f = f || "normal")] || {}),
                      (r = L(
                        (f = (W.states && W.states[f]) || {}).lineWidth,
                        _.lineWidth,
                        r + L(f.lineWidthPlus, _.lineWidthPlus, 0)
                      )),
                      {
                        stroke: (V = f.lineColor || _.lineColor || V),
                        "stroke-width": r,
                        fill: (R = f.fillColor || _.fillColor || R),
                        opacity: (B = L(f.opacity, _.opacity, B)),
                      }
                    );
                  }
                  destroy(r) {
                    const f = this,
                      _ = f.chart,
                      B = /AppleWebKit\/533/.test(C.navigator.userAgent),
                      W = f.data || [];
                    let R, V, q, it;
                    for (
                      s(f, "destroy", { keepEventsForUpdate: r }),
                        this.removeEvents(r),
                        (f.axisTypes || []).forEach(function (lt) {
                          (it = f[lt]) &&
                            it.series &&
                            (c(it.series, f),
                            (it.isDirty = it.forceRedraw = !0));
                        }),
                        f.legendItem && f.chart.legend.destroyItem(f),
                        V = W.length;
                      V--;

                    )
                      (q = W[V]) && q.destroy && q.destroy();
                    f.clips && f.clips.forEach((lt) => lt.destroy()),
                      N.clearTimeout(f.animationTimeout),
                      $(f, function (lt, gt) {
                        lt instanceof H &&
                          !lt.survive &&
                          ((R = B && "group" === gt ? "hide" : "destroy"),
                          lt[R]());
                      }),
                      _.hoverSeries === f && (_.hoverSeries = void 0),
                      c(_.series, f),
                      _.orderItems("series"),
                      $(f, function (lt, gt) {
                        (r && "hcEvents" === gt) || delete f[gt];
                      });
                  }
                  applyZones() {
                    const r = this,
                      f = this.chart,
                      _ = f.renderer,
                      B = this.zones,
                      W = this.clips || [],
                      R = this.graph,
                      V = this.area,
                      q = Math.max(f.plotWidth, f.plotHeight),
                      it = this[(this.zoneAxis || "y") + "Axis"],
                      lt = f.inverted;
                    let gt,
                      w,
                      O,
                      Q,
                      G,
                      X,
                      ct,
                      ht,
                      Tt,
                      Ct,
                      yt,
                      vt = !1;
                    B.length && (R || V) && it && typeof it.min < "u"
                      ? ((G = it.reversed),
                        (X = it.horiz),
                        R && !this.showLine && R.hide(),
                        V && V.hide(),
                        (Q = it.getExtremes()),
                        B.forEach(function (zt, Et) {
                          (gt = G
                            ? X
                              ? f.plotWidth
                              : 0
                            : X
                            ? 0
                            : it.toPixels(Q.min) || 0),
                            (gt = S(L(w, gt), 0, q)),
                            (w = S(
                              Math.round(
                                it.toPixels(L(zt.value, Q.max), !0) || 0
                              ),
                              0,
                              q
                            )),
                            vt && (gt = w = it.toPixels(Q.max)),
                            (ct = Math.abs(gt - w)),
                            (ht = Math.min(gt, w)),
                            (Tt = Math.max(gt, w)),
                            it.isXAxis
                              ? ((O = {
                                  x: lt ? Tt : ht,
                                  y: 0,
                                  width: ct,
                                  height: q,
                                }),
                                X || (O.x = f.plotHeight - O.x))
                              : ((O = {
                                  x: 0,
                                  y: lt ? Tt : ht,
                                  width: q,
                                  height: ct,
                                }),
                                X && (O.y = f.plotWidth - O.y)),
                            W[Et] ? W[Et].animate(O) : (W[Et] = _.clipRect(O)),
                            (Ct = r["zone-area-" + Et]),
                            (yt = r["zone-graph-" + Et]),
                            R && yt && yt.clip(W[Et]),
                            V && Ct && Ct.clip(W[Et]),
                            (vt = zt.value > Q.max),
                            r.resetZones && 0 === w && (w = void 0);
                        }),
                        (this.clips = W))
                      : r.visible && (R && R.show(), V && V.show());
                  }
                  plotGroup(r, f, _, B, W) {
                    let R = this[r];
                    const V = !R;
                    return (
                      (_ = { visibility: _, zIndex: B || 0.1 }),
                      typeof this.opacity > "u" ||
                        this.chart.styledMode ||
                        "inactive" === this.state ||
                        (_.opacity = this.opacity),
                      V && (this[r] = R = this.chart.renderer.g().add(W)),
                      R.addClass(
                        "highcharts-" +
                          f +
                          " highcharts-series-" +
                          this.index +
                          " highcharts-" +
                          this.type +
                          "-series " +
                          (h(this.colorIndex)
                            ? "highcharts-color-" + this.colorIndex + " "
                            : "") +
                          (this.options.className || "") +
                          (R.hasClass("highcharts-tracker")
                            ? " highcharts-tracker"
                            : ""),
                        !0
                      ),
                      R.attr(_)[V ? "attr" : "animate"](this.getPlotBox(f)),
                      R
                    );
                  }
                  getPlotBox(r) {
                    let f = this.xAxis,
                      _ = this.yAxis;
                    const B = this.chart;
                    return (
                      (r =
                        B.inverted &&
                        !B.polar &&
                        f &&
                        !1 !== this.invertible &&
                        "series" === r),
                      B.inverted && ((f = _), (_ = this.xAxis)),
                      {
                        translateX: f ? f.left : B.plotLeft,
                        translateY: _ ? _.top : B.plotTop,
                        rotation: r ? 90 : 0,
                        rotationOriginX: r ? (f.len - _.len) / 2 : 0,
                        rotationOriginY: r ? (f.len + _.len) / 2 : 0,
                        scaleX: r ? -1 : 1,
                        scaleY: 1,
                      }
                    );
                  }
                  removeEvents(r) {
                    r || n(this),
                      this.eventsToUnbind.length &&
                        (this.eventsToUnbind.forEach(function (f) {
                          f();
                        }),
                        (this.eventsToUnbind.length = 0));
                  }
                  render() {
                    const r = this;
                    var f = r.chart;
                    const _ = r.options,
                      B = x(_.animation),
                      W = r.visible ? "inherit" : "hidden",
                      R = _.zIndex,
                      V = r.hasRendered;
                    f = f.seriesGroup;
                    let q = r.finishedAnimating ? 0 : B.duration;
                    s(this, "render"),
                      r.plotGroup("group", "series", W, R, f),
                      (r.markerGroup = r.plotGroup(
                        "markerGroup",
                        "markers",
                        W,
                        R,
                        f
                      )),
                      !1 !== _.clip && r.setClip(),
                      r.animate && q && r.animate(!0),
                      r.drawGraph && (r.drawGraph(), r.applyZones()),
                      r.visible && r.drawPoints(),
                      r.drawDataLabels && r.drawDataLabels(),
                      r.redrawPoints && r.redrawPoints(),
                      r.drawTracker && _.enableMouseTracking && r.drawTracker(),
                      r.animate && q && r.animate(),
                      V ||
                        (q && B.defer && (q += B.defer),
                        (r.animationTimeout = b(function () {
                          r.afterAnimate();
                        }, q || 0))),
                      (r.isDirty = !1),
                      (r.hasRendered = !0),
                      s(r, "afterRender");
                  }
                  redraw() {
                    const r = this.isDirty || this.isDirtyData;
                    this.translate(), this.render(), r && delete this.kdTree;
                  }
                  searchPoint(r, f) {
                    const _ = this.xAxis,
                      B = this.yAxis,
                      W = this.chart.inverted;
                    return this.searchKDTree(
                      {
                        clientX: W
                          ? _.len - r.chartY + _.pos
                          : r.chartX - _.pos,
                        plotY: W ? B.len - r.chartX + B.pos : r.chartY - B.pos,
                      },
                      f,
                      r
                    );
                  }
                  buildKDTree(r) {
                    function f(W, R, V) {
                      var q = W && W.length;
                      let it;
                      if (q)
                        return (
                          (it = _.kdAxisArray[R % V]),
                          W.sort(function (lt, gt) {
                            return lt[it] - gt[it];
                          }),
                          {
                            point: W[(q = Math.floor(q / 2))],
                            left: f(W.slice(0, q), R + 1, V),
                            right: f(W.slice(q + 1), R + 1, V),
                          }
                        );
                    }
                    this.buildingKdTree = !0;
                    const _ = this,
                      B =
                        -1 < _.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                    delete _.kdTree,
                      b(
                        function () {
                          (_.kdTree = f(
                            _.getValidPoints(null, !_.directTouch),
                            B,
                            B
                          )),
                            (_.buildingKdTree = !1);
                        },
                        _.options.kdNow || (r && "touchstart" === r.type)
                          ? 0
                          : 1
                      );
                  }
                  searchKDTree(r, f, _) {
                    const W = this,
                      R = this.kdAxisArray[0],
                      V = this.kdAxisArray[1],
                      q = f ? "distX" : "dist";
                    if (
                      ((f =
                        -1 < W.options.findNearestPointBy.indexOf("y") ? 2 : 1),
                      this.kdTree || this.buildingKdTree || this.buildKDTree(_),
                      this.kdTree)
                    )
                      return (function B(it, lt, gt, w) {
                        const O = lt.point;
                        var Q = W.kdAxisArray[gt % w];
                        let G = O;
                        var X =
                            h(it[R]) && h(O[R])
                              ? Math.pow(it[R] - O[R], 2)
                              : null,
                          ct =
                            h(it[V]) && h(O[V])
                              ? Math.pow(it[V] - O[V], 2)
                              : null;
                        return (
                          (O.dist = h((ct = (X || 0) + (ct || 0)))
                            ? Math.sqrt(ct)
                            : Number.MAX_VALUE),
                          (O.distX = h(X) ? Math.sqrt(X) : Number.MAX_VALUE),
                          (X = 0 > (Q = it[Q] - O[Q]) ? "right" : "left"),
                          lt[(ct = 0 > Q ? "left" : "right")] &&
                            (G =
                              (ct = B(it, lt[ct], gt + 1, w))[q] < G[q]
                                ? ct
                                : O),
                          lt[X] &&
                            Math.sqrt(Q * Q) < G[q] &&
                            (G =
                              (it = B(it, lt[X], gt + 1, w))[q] < G[q]
                                ? it
                                : G),
                          G
                        );
                      })(r, this.kdTree, f, f);
                  }
                  pointPlacementToXValue() {
                    const {
                      options: { pointPlacement: r, pointRange: f },
                      xAxis: _,
                    } = this;
                    let B = r;
                    return (
                      "between" === B && (B = _.reversed ? -0.5 : 0.5),
                      M(B) ? B * (f || _.pointRange) : 0
                    );
                  }
                  isPointInside(r) {
                    const { chart: f, xAxis: _, yAxis: B } = this;
                    return (
                      typeof r.plotY < "u" &&
                      typeof r.plotX < "u" &&
                      0 <= r.plotY &&
                      r.plotY <= (B ? B.len : f.plotHeight) &&
                      0 <= r.plotX &&
                      r.plotX <= (_ ? _.len : f.plotWidth)
                    );
                  }
                  drawTracker() {
                    const r = this,
                      f = r.options,
                      _ = f.trackByArea,
                      B = [].concat(_ ? r.areaPath : r.graphPath),
                      W = r.chart,
                      R = W.pointer,
                      V = W.renderer,
                      q = W.options.tooltip.snap,
                      it = r.tracker,
                      lt = function (w) {
                        f.enableMouseTracking &&
                          W.hoverSeries !== r &&
                          r.onMouseOver();
                      },
                      gt = "rgba(192,192,192," + (v ? 1e-4 : 0.002) + ")";
                    it
                      ? it.attr({ d: B })
                      : r.graph &&
                        ((r.tracker = V.path(B)
                          .attr({
                            visibility: r.visible ? "inherit" : "hidden",
                            zIndex: 2,
                          })
                          .addClass(
                            _
                              ? "highcharts-tracker-area"
                              : "highcharts-tracker-line"
                          )
                          .add(r.group)),
                        W.styledMode ||
                          r.tracker.attr({
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            stroke: gt,
                            fill: _ ? gt : "none",
                            "stroke-width":
                              r.graph.strokeWidth() + (_ ? 0 : 2 * q),
                          }),
                        [r.tracker, r.markerGroup, r.dataLabelsGroup].forEach(
                          function (w) {
                            w &&
                              (w
                                .addClass("highcharts-tracker")
                                .on("mouseover", lt)
                                .on("mouseout", function (O) {
                                  R.onTrackerMouseOut(O);
                                }),
                              f.cursor &&
                                !W.styledMode &&
                                w.css({ cursor: f.cursor }),
                              p) &&
                              w.on("touchstart", lt);
                          }
                        )),
                      s(this, "afterDrawTracker");
                  }
                  addPoint(r, f, _, B, W) {
                    const R = this.options,
                      V = this.data,
                      q = this.chart;
                    var it = this.xAxis;
                    it = it && it.hasNames && it.names;
                    const lt = R.data,
                      gt = this.xData;
                    let w, O;
                    f = L(f, !0);
                    const Q = { series: this };
                    this.pointClass.prototype.applyOptions.apply(Q, [r]);
                    const G = Q.x;
                    if (((O = gt.length), this.requireSorting && G < gt[O - 1]))
                      for (w = !0; O && gt[O - 1] > G; ) O--;
                    this.updateParallelArrays(Q, "splice", [O, 0, 0]),
                      this.updateParallelArrays(Q, O),
                      it && Q.name && (it[G] = Q.name),
                      lt.splice(O, 0, r),
                      (w || this.processedData) &&
                        (this.data.splice(O, 0, null), this.processData()),
                      "point" === R.legendType && this.generatePoints(),
                      _ &&
                        (V[0] && V[0].remove
                          ? V[0].remove(!1)
                          : (V.shift(),
                            this.updateParallelArrays(Q, "shift"),
                            lt.shift())),
                      !1 !== W && s(this, "addPoint", { point: Q }),
                      (this.isDirtyData = this.isDirty = !0),
                      f && q.redraw(B);
                  }
                  removePoint(r, f, _) {
                    const B = this,
                      W = B.data,
                      R = W[r],
                      V = B.points,
                      q = B.chart,
                      it = function () {
                        V && V.length === W.length && V.splice(r, 1),
                          W.splice(r, 1),
                          B.options.data.splice(r, 1),
                          B.updateParallelArrays(R || { series: B }, "splice", [
                            r,
                            1,
                          ]),
                          R && R.destroy(),
                          (B.isDirty = !0),
                          (B.isDirtyData = !0),
                          f && q.redraw();
                      };
                    y(_, q),
                      (f = L(f, !0)),
                      R ? R.firePointEvent("remove", null, it) : it();
                  }
                  remove(r, f, _, B) {
                    function W() {
                      R.destroy(B),
                        (V.isDirtyLegend = V.isDirtyBox = !0),
                        V.linkSeries(B),
                        L(r, !0) && V.redraw(f);
                    }
                    const R = this,
                      V = R.chart;
                    !1 !== _ ? s(R, "remove", null, W) : W();
                  }
                  update(r, f) {
                    (r = m(r, this.userOptions)),
                      s(this, "update", { options: r });
                    const _ = this,
                      B = _.chart;
                    var W = _.userOptions;
                    const R = _.initialType || _.type;
                    var V = B.options.plotOptions;
                    const q = u[R].prototype;
                    var it = _.finishedAnimating && { animation: !1 };
                    const lt = {};
                    let gt,
                      w = [
                        "colorIndex",
                        "eventOptions",
                        "navigatorSeries",
                        "symbolIndex",
                        "baseSeries",
                      ],
                      O = r.type || W.type || B.options.chart.type;
                    const Q = !(
                      this.hasDerivedData ||
                      (O && O !== this.type) ||
                      typeof r.pointStart < "u" ||
                      typeof r.pointInterval < "u" ||
                      typeof r.relativeXValue < "u" ||
                      r.joinBy ||
                      r.mapData ||
                      _.hasOptionChanged("dataGrouping") ||
                      _.hasOptionChanged("pointStart") ||
                      _.hasOptionChanged("pointInterval") ||
                      _.hasOptionChanged("pointIntervalUnit") ||
                      _.hasOptionChanged("keys")
                    );
                    if (
                      ((O = O || R),
                      Q &&
                        (w.push(
                          "data",
                          "isDirtyData",
                          "points",
                          "processedData",
                          "processedXData",
                          "processedYData",
                          "xIncrement",
                          "cropped",
                          "_hasPointMarkers",
                          "_hasPointLabels",
                          "clips",
                          "nodes",
                          "layout",
                          "level",
                          "mapMap",
                          "mapData",
                          "minY",
                          "maxY",
                          "minX",
                          "maxX"
                        ),
                        !1 !== r.visible && w.push("area", "graph"),
                        _.parallelArrays.forEach(function (G) {
                          w.push(G + "Data");
                        }),
                        r.data &&
                          (r.dataSorting &&
                            i(_.options.dataSorting, r.dataSorting),
                          this.setData(r.data, !1))),
                      (r = K(
                        W,
                        it,
                        {
                          index: typeof W.index > "u" ? _.index : W.index,
                          pointStart: L(
                            V && V.series && V.series.pointStart,
                            W.pointStart,
                            _.xData[0]
                          ),
                        },
                        !Q && { data: _.options.data },
                        r
                      )),
                      Q && r.data && (r.data = _.options.data),
                      (w = [
                        "group",
                        "markerGroup",
                        "dataLabelsGroup",
                        "transformGroup",
                      ].concat(w)),
                      w.forEach(function (G) {
                        (w[G] = _[G]), delete _[G];
                      }),
                      (V = !1),
                      u[O])
                    ) {
                      if (((V = O !== _.type), _.remove(!1, !1, !1, !0), V))
                        if (Object.setPrototypeOf)
                          Object.setPrototypeOf(_, u[O].prototype);
                        else {
                          for (gt in ((it =
                            Object.hasOwnProperty.call(_, "hcEvents") &&
                            _.hcEvents),
                          q))
                            _[gt] = void 0;
                          i(_, u[O].prototype),
                            it ? (_.hcEvents = it) : delete _.hcEvents;
                        }
                    } else g(17, !0, B, { missingModuleFor: O });
                    if (
                      (w.forEach(function (G) {
                        _[G] = w[G];
                      }),
                      _.init(B, r),
                      Q && this.points)
                    ) {
                      if (!1 === (r = _.options).visible)
                        (lt.graphic = 1), (lt.dataLabel = 1);
                      else if (!_._hasPointLabels) {
                        const { marker: G, dataLabels: X } = r;
                        (W = W.marker || {}),
                          !G ||
                            (!1 !== G.enabled &&
                              W.symbol === G.symbol &&
                              W.height === G.height &&
                              W.width === G.width) ||
                            (lt.graphic = 1),
                          X && !1 === X.enabled && (lt.dataLabel = 1);
                      }
                      for (const G of this.points)
                        G &&
                          G.series &&
                          (G.resolveColor(),
                          Object.keys(lt).length && G.destroyElements(lt),
                          !1 === r.showInLegend &&
                            G.legendItem &&
                            B.legend.destroyItem(G));
                    }
                    (_.initialType = R),
                      B.linkSeries(),
                      V && _.linkedSeries.length && (_.isDirtyData = !0),
                      s(this, "afterUpdate"),
                      L(f, !0) && B.redraw(!!Q && void 0);
                  }
                  setName(r) {
                    (this.name = this.options.name = this.userOptions.name = r),
                      (this.chart.isDirtyLegend = !0);
                  }
                  hasOptionChanged(r) {
                    const f = this.options[r],
                      _ = this.chart.options.plotOptions,
                      B = this.userOptions[r];
                    return B
                      ? f !== B
                      : f !==
                          L(
                            _ && _[this.type] && _[this.type][r],
                            _ && _.series && _.series[r],
                            f
                          );
                  }
                  onMouseOver() {
                    const r = this.chart,
                      f = r.hoverSeries;
                    r.pointer.setHoverChartIndex(),
                      f && f !== this && f.onMouseOut(),
                      this.options.events.mouseOver && s(this, "mouseOver"),
                      this.setState("hover"),
                      (r.hoverSeries = this);
                  }
                  onMouseOut() {
                    const r = this.options,
                      f = this.chart,
                      _ = f.tooltip,
                      B = f.hoverPoint;
                    (f.hoverSeries = null),
                      B && B.onMouseOut(),
                      this && r.events.mouseOut && s(this, "mouseOut"),
                      !_ ||
                        this.stickyTracking ||
                        (_.shared && !this.noSharedTooltip) ||
                        _.hide(),
                      f.series.forEach(function (W) {
                        W.setState("", !0);
                      });
                  }
                  setState(r, f) {
                    const _ = this;
                    var B = _.options;
                    const W = _.graph,
                      R = B.inactiveOtherPoints,
                      V = B.states,
                      q = L(
                        V[r || "normal"] && V[r || "normal"].animation,
                        _.chart.options.chart.animation
                      );
                    let it = B.lineWidth,
                      lt = 0,
                      gt = B.opacity;
                    if (
                      _.state !== (r = r || "") &&
                      ([_.group, _.markerGroup, _.dataLabelsGroup].forEach(
                        function (w) {
                          w &&
                            (_.state &&
                              w.removeClass("highcharts-series-" + _.state),
                            r && w.addClass("highcharts-series-" + r));
                        }
                      ),
                      (_.state = r),
                      !_.chart.styledMode)
                    ) {
                      if (V[r] && !1 === V[r].enabled) return;
                      if (
                        (r &&
                          ((it =
                            V[r].lineWidth || it + (V[r].lineWidthPlus || 0)),
                          (gt = L(V[r].opacity, gt))),
                        W && !W.dashstyle && M(it))
                      )
                        for (
                          W.animate((B = { "stroke-width": it }), q);
                          _["zone-graph-" + lt];

                        )
                          _["zone-graph-" + lt].animate(B, q), (lt += 1);
                      R ||
                        [
                          _.group,
                          _.markerGroup,
                          _.dataLabelsGroup,
                          _.labelBySeries,
                        ].forEach(function (w) {
                          w && w.animate({ opacity: gt }, q);
                        });
                    }
                    f && R && _.points && _.setAllPointsToState(r || void 0);
                  }
                  setAllPointsToState(r) {
                    this.points.forEach(function (f) {
                      f.setState && f.setState(r);
                    });
                  }
                  setVisible(r, f) {
                    const _ = this,
                      B = _.chart,
                      W = B.options.chart.ignoreHiddenSeries,
                      V = (_.visible =
                        r =
                        _.options.visible =
                        _.userOptions.visible =
                          typeof r > "u" ? !_.visible : r)
                        ? "show"
                        : "hide";
                    [
                      "group",
                      "dataLabelsGroup",
                      "markerGroup",
                      "tracker",
                      "tt",
                    ].forEach(function (q) {
                      _[q] && _[q][V]();
                    }),
                      (B.hoverSeries === _ ||
                        (B.hoverPoint && B.hoverPoint.series) === _) &&
                        _.onMouseOut(),
                      _.legendItem && B.legend.colorizeItem(_, r),
                      (_.isDirty = !0),
                      _.options.stacking &&
                        B.series.forEach(function (q) {
                          q.options.stacking && q.visible && (q.isDirty = !0);
                        }),
                      _.linkedSeries.forEach(function (q) {
                        q.setVisible(r, !1);
                      }),
                      W && (B.isDirtyBox = !0),
                      s(_, V),
                      !1 !== f && B.redraw();
                  }
                  show() {
                    this.setVisible(!0);
                  }
                  hide() {
                    this.setVisible(!1);
                  }
                  select(r) {
                    (this.selected =
                      r =
                      this.options.selected =
                        typeof r > "u" ? !this.selected : r),
                      this.checkbox && (this.checkbox.checked = r),
                      s(this, r ? "select" : "unselect");
                  }
                  shouldShowTooltip(r, f, _ = {}) {
                    return (
                      (_.series = this),
                      (_.visiblePlotOnly = !0),
                      this.chart.isInsidePlot(r, f, _)
                    );
                  }
                  drawLegendSymbol(r, f) {
                    var _;
                    null ===
                      (_ = et[this.options.legendSymbol || "rectangle"]) ||
                      void 0 === _ ||
                      _.call(this, r, f);
                  }
                }
                return (
                  (D.defaultOptions = nt),
                  (D.types = I.seriesTypes),
                  (D.registerType = I.registerSeriesType),
                  i(D.prototype, {
                    axisTypes: ["xAxis", "yAxis"],
                    coll: "series",
                    colorCounter: 0,
                    cropShoulder: 1,
                    directTouch: !1,
                    isCartesian: !0,
                    kdAxisArray: ["clientX", "plotY"],
                    parallelArrays: ["x", "y"],
                    pointClass: st,
                    requireSorting: !0,
                    sorted: !0,
                  }),
                  (I.series = D),
                  D
                );
              }
            ),
            ut(
              t,
              "Core/Chart/Chart.js",
              [
                t["Core/Animation/AnimationUtilities.js"],
                t["Core/Axis/Axis.js"],
                t["Core/Defaults.js"],
                t["Core/Templating.js"],
                t["Core/Foundation.js"],
                t["Core/Globals.js"],
                t["Core/Renderer/RendererRegistry.js"],
                t["Core/Series/Series.js"],
                t["Core/Series/SeriesRegistry.js"],
                t["Core/Renderer/SVG/SVGRenderer.js"],
                t["Core/Time.js"],
                t["Core/Utilities.js"],
                t["Core/Renderer/HTML/AST.js"],
              ],
              function (F, Y, j, tt, et, st, nt, I, H, N, x, y, P) {
                const { animate: k, animObject: p, setAnimation: v } = F,
                  { defaultOptions: C, defaultTime: u } = j,
                  { numberFormat: A } = tt,
                  { registerEventOptions: T } = et,
                  { charts: S, doc: l, marginNames: h, svg: m, win: c } = st,
                  { seriesTypes: g } = H,
                  {
                    addEvent: i,
                    attr: e,
                    createElement: s,
                    css: a,
                    defined: d,
                    diffObjects: E,
                    discardElement: o,
                    erase: M,
                    error: Z,
                    extend: K,
                    find: $,
                    fireEvent: L,
                    getStyle: n,
                    isArray: z,
                    isNumber: b,
                    isObject: D,
                    isString: J,
                    merge: r,
                    objectEach: f,
                    pick: _,
                    pInt: B,
                    relativeLength: W,
                    removeEvent: R,
                    splat: V,
                    syncTimeout: q,
                    uniqueKey: it,
                  } = y;
                class lt {
                  static chart(w, O, Q) {
                    return new lt(w, O, Q);
                  }
                  constructor(w, O, Q) {
                    (this.series =
                      this.renderTo =
                      this.renderer =
                      this.pointer =
                      this.pointCount =
                      this.plotWidth =
                      this.plotTop =
                      this.plotLeft =
                      this.plotHeight =
                      this.plotBox =
                      this.options =
                      this.numberFormatter =
                      this.margin =
                      this.labelCollectors =
                      this.isResizing =
                      this.index =
                      this.eventOptions =
                      this.container =
                      this.colorCounter =
                      this.clipBox =
                      this.chartWidth =
                      this.chartHeight =
                      this.bounds =
                      this.axisOffset =
                      this.axes =
                        void 0),
                      (this.sharedClips = {}),
                      (this.zooming =
                        this.yAxis =
                        this.xAxis =
                        this.userOptions =
                        this.titleOffset =
                        this.time =
                        this.symbolCounter =
                        this.spacingBox =
                        this.spacing =
                          void 0),
                      this.getArgs(w, O, Q);
                  }
                  getArgs(w, O, Q) {
                    J(w) || w.nodeName
                      ? ((this.renderTo = w), this.init(O, Q))
                      : this.init(w, O);
                  }
                  setZoomOptions() {
                    const w = this.options.chart,
                      O = w.zooming;
                    this.zooming = Object.assign(Object.assign({}, O), {
                      type: _(w.zoomType, O.type),
                      key: _(w.zoomKey, O.key),
                      pinchType: _(w.pinchType, O.pinchType),
                      singleTouch: _(w.zoomBySingleTouch, O.singleTouch, !1),
                      resetButton: r(O.resetButton, w.resetZoomButton),
                    });
                  }
                  init(w, O) {
                    L(this, "init", { args: arguments }, function () {
                      const Q = r(C, w),
                        G = Q.chart;
                      (this.userOptions = K({}, w)),
                        (this.margin = []),
                        (this.spacing = []),
                        (this.bounds = { h: {}, v: {} }),
                        (this.labelCollectors = []),
                        (this.callback = O),
                        (this.isResizing = 0),
                        (this.options = Q),
                        (this.axes = []),
                        (this.series = []),
                        (this.time =
                          w.time && Object.keys(w.time).length
                            ? new x(w.time)
                            : st.time),
                        (this.numberFormatter = G.numberFormatter || A),
                        (this.styledMode = G.styledMode),
                        (this.hasCartesianSeries = G.showAxes),
                        (this.index = S.length),
                        S.push(this),
                        st.chartCount++,
                        T(this, G),
                        (this.xAxis = []),
                        (this.yAxis = []),
                        (this.pointCount =
                          this.colorCounter =
                          this.symbolCounter =
                            0),
                        this.setZoomOptions(),
                        L(this, "afterInit"),
                        this.firstRender();
                    });
                  }
                  initSeries(w) {
                    var O = this.options.chart;
                    const Q = g[(O = w.type || O.type)];
                    return (
                      Q || Z(17, !0, this, { missingModuleFor: O }),
                      "function" == typeof (O = new Q()).init &&
                        O.init(this, w),
                      O
                    );
                  }
                  setSeriesData() {
                    this.getSeriesOrderByLinks().forEach(function (w) {
                      w.points ||
                        w.data ||
                        !w.enabledDataSorting ||
                        w.setData(w.options.data, !1);
                    });
                  }
                  getSeriesOrderByLinks() {
                    return this.series.concat().sort(function (w, O) {
                      return w.linkedSeries.length || O.linkedSeries.length
                        ? O.linkedSeries.length - w.linkedSeries.length
                        : 0;
                    });
                  }
                  orderItems(w, O = 0) {
                    const Q = this[w],
                      G = (this.options[w] = V(this.options[w]).slice());
                    if (
                      ((w = this.userOptions[w] =
                        this.userOptions[w]
                          ? V(this.userOptions[w]).slice()
                          : []),
                      this.hasRendered && (G.splice(O), w.splice(O)),
                      Q)
                    )
                      for (let X = O, ct = Q.length; X < ct; ++X)
                        (O = Q[X]) &&
                          ((O.index = X),
                          O instanceof I && (O.name = O.getName()),
                          O.options.isInternal ||
                            ((G[X] = O.options), (w[X] = O.userOptions)));
                  }
                  isInsidePlot(w, O, Q = {}) {
                    const {
                      inverted: G,
                      plotBox: X,
                      plotLeft: ct,
                      plotTop: ht,
                      scrollablePlotBox: Tt,
                    } = this;
                    var Ct = 0;
                    let yt = 0;
                    Q.visiblePlotOnly &&
                      this.scrollingContainer &&
                      ({ scrollLeft: Ct, scrollTop: yt } =
                        this.scrollingContainer);
                    const vt = Q.series,
                      zt = (Q.visiblePlotOnly && Tt) || X;
                    var Et = Q.inverted ? O : w;
                    if (
                      ((w = {
                        x: Et,
                        y: (O = Q.inverted ? w : O),
                        isInsidePlot: !0,
                        options: Q,
                      }),
                      !Q.ignoreX)
                    ) {
                      const Pt = (vt &&
                        (G && !this.polar ? vt.yAxis : vt.xAxis)) || {
                        pos: ct,
                        len: 1 / 0,
                      };
                      ((Et = Q.paneCoordinates ? Pt.pos + Et : ct + Et) >=
                        Math.max(Ct + ct, Pt.pos) &&
                        Et <= Math.min(Ct + ct + zt.width, Pt.pos + Pt.len)) ||
                        (w.isInsidePlot = !1);
                    }
                    return (
                      !Q.ignoreY &&
                        w.isInsidePlot &&
                        ((Ct = (!G && Q.axis && !Q.axis.isXAxis && Q.axis) ||
                          (vt && (G ? vt.xAxis : vt.yAxis)) || {
                            pos: ht,
                            len: 1 / 0,
                          }),
                        ((Q = Q.paneCoordinates ? Ct.pos + O : ht + O) >=
                          Math.max(yt + ht, Ct.pos) &&
                          Q <=
                            Math.min(yt + ht + zt.height, Ct.pos + Ct.len)) ||
                          (w.isInsidePlot = !1)),
                      L(this, "afterIsInsidePlot", w),
                      w.isInsidePlot
                    );
                  }
                  redraw(w) {
                    L(this, "beforeRedraw");
                    const O = this.hasCartesianSeries
                        ? this.axes
                        : this.colorAxis || [],
                      Q = this.series,
                      G = this.pointer,
                      X = this.legend,
                      ct = this.userOptions.legend,
                      ht = this.renderer,
                      Tt = ht.isHidden(),
                      Ct = [];
                    let yt,
                      vt,
                      Pt,
                      zt = this.isDirtyBox,
                      Et = this.isDirtyLegend;
                    for (
                      ht.rootFontSize = ht.boxWrapper.getStyle("font-size"),
                        this.setResponsive && this.setResponsive(!1),
                        v(!!this.hasRendered && w, this),
                        Tt && this.temporaryDisplay(),
                        this.layOutTitles(!1),
                        w = Q.length;
                      w--;

                    )
                      if (
                        ((Pt = Q[w]),
                        (Pt.options.stacking || Pt.options.centerInCategory) &&
                          ((vt = !0), Pt.isDirty))
                      ) {
                        yt = !0;
                        break;
                      }
                    if (yt)
                      for (w = Q.length; w--; )
                        (Pt = Q[w]), Pt.options.stacking && (Pt.isDirty = !0);
                    Q.forEach(function (kt) {
                      kt.isDirty &&
                        ("point" === kt.options.legendType
                          ? ("function" == typeof kt.updateTotals &&
                              kt.updateTotals(),
                            (Et = !0))
                          : ct &&
                            (ct.labelFormatter || ct.labelFormat) &&
                            (Et = !0)),
                        kt.isDirtyData && L(kt, "updatedData");
                    }),
                      Et &&
                        X &&
                        X.options.enabled &&
                        (X.render(), (this.isDirtyLegend = !1)),
                      vt && this.getStacks(),
                      O.forEach(function (kt) {
                        kt.updateNames(), kt.setScale();
                      }),
                      this.getMargins(),
                      O.forEach(function (kt) {
                        kt.isDirty && (zt = !0);
                      }),
                      O.forEach(function (kt) {
                        const It = kt.min + "," + kt.max;
                        kt.extKey !== It &&
                          ((kt.extKey = It),
                          Ct.push(function () {
                            L(
                              kt,
                              "afterSetExtremes",
                              K(kt.eventArgs, kt.getExtremes())
                            ),
                              delete kt.eventArgs;
                          })),
                          (zt || vt) && kt.redraw();
                      }),
                      zt && this.drawChartBox(),
                      L(this, "predraw"),
                      Q.forEach(function (kt) {
                        (zt || kt.isDirty) && kt.visible && kt.redraw(),
                          (kt.isDirtyData = !1);
                      }),
                      G && G.reset(!0),
                      ht.draw(),
                      L(this, "redraw"),
                      L(this, "render"),
                      Tt && this.temporaryDisplay(!0),
                      Ct.forEach(function (kt) {
                        kt.call();
                      });
                  }
                  get(w) {
                    function O(X) {
                      return X.id === w || (X.options && X.options.id === w);
                    }
                    const Q = this.series;
                    let G = $(this.axes, O) || $(this.series, O);
                    for (let X = 0; !G && X < Q.length; X++)
                      G = $(Q[X].points || [], O);
                    return G;
                  }
                  getAxes() {
                    const w = this.options;
                    L(this, "getAxes");
                    for (const O of ["xAxis", "yAxis"]) {
                      const Q = (w[O] = V(w[O] || {}));
                      for (const G of Q) new Y(this, G, O);
                    }
                    L(this, "afterGetAxes");
                  }
                  getSelectedPoints() {
                    return this.series.reduce(
                      (w, O) => (
                        O.getPointsCollection().forEach((Q) => {
                          _(Q.selectedStaging, Q.selected) && w.push(Q);
                        }),
                        w
                      ),
                      []
                    );
                  }
                  getSelectedSeries() {
                    return this.series.filter(function (w) {
                      return w.selected;
                    });
                  }
                  setTitle(w, O, Q) {
                    this.applyDescription("title", w),
                      this.applyDescription("subtitle", O),
                      this.applyDescription("caption", void 0),
                      this.layOutTitles(Q);
                  }
                  applyDescription(w, O) {
                    const Q = this,
                      G = (this.options[w] = r(this.options[w], O));
                    let X = this[w];
                    X && O && (this[w] = X = X.destroy()),
                      G &&
                        !X &&
                        ((X = this.renderer
                          .text(G.text, 0, 0, G.useHTML)
                          .attr({
                            align: G.align,
                            class: "highcharts-" + w,
                            zIndex: G.zIndex || 4,
                          })
                          .add()),
                        (X.update = function (ct, ht) {
                          Q.applyDescription(w, ct), Q.layOutTitles(ht);
                        }),
                        this.styledMode ||
                          X.css(
                            K(
                              "title" === w
                                ? {
                                    fontSize: this.options.isStock
                                      ? "1em"
                                      : "1.2em",
                                  }
                                : {},
                              G.style
                            )
                          ),
                        (this[w] = X));
                  }
                  layOutTitles(w = !0) {
                    const O = [0, 0, 0],
                      Q = this.renderer,
                      G = this.spacingBox;
                    ["title", "subtitle", "caption"].forEach(function (ct) {
                      const ht = this[ct],
                        Tt = this.options[ct],
                        Ct = Tt.verticalAlign || "top";
                      if (
                        ((ct =
                          "title" === ct
                            ? "top" === Ct
                              ? -3
                              : 0
                            : "top" === Ct
                            ? O[0] + 2
                            : 0),
                        ht)
                      ) {
                        ht.css({
                          width:
                            (Tt.width || G.width + (Tt.widthAdjust || 0)) +
                            "px",
                        });
                        const yt = Q.fontMetrics(ht).b,
                          vt = Math.round(ht.getBBox(Tt.useHTML).height);
                        ht.align(
                          K(
                            { y: "bottom" === Ct ? yt : ct + yt, height: vt },
                            Tt
                          ),
                          !1,
                          "spacingBox"
                        ),
                          Tt.floating ||
                            ("top" === Ct
                              ? (O[0] = Math.ceil(O[0] + vt))
                              : "bottom" === Ct &&
                                (O[2] = Math.ceil(O[2] + vt)));
                      }
                    }, this),
                      O[0] &&
                        "top" === (this.options.title.verticalAlign || "top") &&
                        (O[0] += this.options.title.margin),
                      O[2] &&
                        "bottom" === this.options.caption.verticalAlign &&
                        (O[2] += this.options.caption.margin);
                    const X =
                      !this.titleOffset ||
                      this.titleOffset.join(",") !== O.join(",");
                    (this.titleOffset = O),
                      L(this, "afterLayOutTitles"),
                      !this.isDirtyBox &&
                        X &&
                        ((this.isDirtyBox = this.isDirtyLegend = X),
                        this.hasRendered &&
                          w &&
                          this.isDirtyBox &&
                          this.redraw());
                  }
                  getContainerBox() {
                    return {
                      width: n(this.renderTo, "width", !0) || 0,
                      height: n(this.renderTo, "height", !0) || 0,
                    };
                  }
                  getChartSize() {
                    var w = this.options.chart;
                    const O = w.width;
                    w = w.height;
                    const Q = this.getContainerBox();
                    (this.chartWidth = Math.max(0, O || Q.width || 600)),
                      (this.chartHeight = Math.max(
                        0,
                        W(w, this.chartWidth) || (1 < Q.height ? Q.height : 400)
                      )),
                      (this.containerBox = Q);
                  }
                  temporaryDisplay(w) {
                    let O = this.renderTo;
                    if (w)
                      for (; O && O.style; )
                        O.hcOrigStyle &&
                          (a(O, O.hcOrigStyle), delete O.hcOrigStyle),
                          O.hcOrigDetached &&
                            (l.body.removeChild(O), (O.hcOrigDetached = !1)),
                          (O = O.parentNode);
                    else
                      for (
                        ;
                        O &&
                        O.style &&
                        (l.body.contains(O) ||
                          O.parentNode ||
                          ((O.hcOrigDetached = !0), l.body.appendChild(O)),
                        ("none" === n(O, "display", !1) || O.hcOricDetached) &&
                          ((O.hcOrigStyle = {
                            display: O.style.display,
                            height: O.style.height,
                            overflow: O.style.overflow,
                          }),
                          (w = { display: "block", overflow: "hidden" }),
                          O !== this.renderTo && (w.height = 0),
                          a(O, w),
                          O.offsetWidth ||
                            O.style.setProperty(
                              "display",
                              "block",
                              "important"
                            )),
                        (O = O.parentNode),
                        O !== l.body);

                      );
                  }
                  setClassName(w) {
                    this.container.className =
                      "highcharts-container " + (w || "");
                  }
                  getContainer() {
                    const w = this.options,
                      O = w.chart;
                    var Q = it();
                    let G,
                      X = this.renderTo;
                    X || (this.renderTo = X = O.renderTo),
                      J(X) && (this.renderTo = X = l.getElementById(X)),
                      X || Z(13, !0, this);
                    var ct = B(e(X, "data-highcharts-chart"));
                    b(ct) && S[ct] && S[ct].hasRendered && S[ct].destroy(),
                      e(X, "data-highcharts-chart", this.index),
                      (X.innerHTML = P.emptyHTML),
                      O.skipClone || X.offsetWidth || this.temporaryDisplay(),
                      this.getChartSize(),
                      (ct = this.chartWidth);
                    const ht = this.chartHeight;
                    if (
                      (a(X, { overflow: "hidden" }),
                      this.styledMode ||
                        (G = K(
                          {
                            position: "relative",
                            overflow: "hidden",
                            width: ct + "px",
                            height: ht + "px",
                            textAlign: "left",
                            lineHeight: "normal",
                            zIndex: 0,
                            "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                            userSelect: "none",
                            "touch-action": "manipulation",
                            outline: "none",
                          },
                          O.style || {}
                        )),
                      (this.container = Q = s("div", { id: Q }, G, X)),
                      (this._cursor = Q.style.cursor),
                      (this.renderer = new (
                        O.renderer || !m ? nt.getRendererType(O.renderer) : N
                      )(
                        Q,
                        ct,
                        ht,
                        void 0,
                        O.forExport,
                        w.exporting && w.exporting.allowHTML,
                        this.styledMode
                      )),
                      (this.containerBox = this.getContainerBox()),
                      v(void 0, this),
                      this.setClassName(O.className),
                      this.styledMode)
                    )
                      for (const Tt in w.defs)
                        this.renderer.definition(w.defs[Tt]);
                    else this.renderer.setStyle(O.style);
                    (this.renderer.chartIndex = this.index),
                      L(this, "afterGetContainer");
                  }
                  getMargins(w) {
                    const { spacing: O, margin: Q, titleOffset: G } = this;
                    this.resetMargins(),
                      G[0] &&
                        !d(Q[0]) &&
                        (this.plotTop = Math.max(this.plotTop, G[0] + O[0])),
                      G[2] &&
                        !d(Q[2]) &&
                        (this.marginBottom = Math.max(
                          this.marginBottom,
                          G[2] + O[2]
                        )),
                      this.legend &&
                        this.legend.display &&
                        this.legend.adjustMargins(Q, O),
                      L(this, "getMargins"),
                      w || this.getAxisMargins();
                  }
                  getAxisMargins() {
                    const w = this,
                      O = (w.axisOffset = [0, 0, 0, 0]),
                      Q = w.colorAxis,
                      G = w.margin,
                      X = function (ct) {
                        ct.forEach(function (ht) {
                          ht.visible && ht.getOffset();
                        });
                      };
                    w.hasCartesianSeries ? X(w.axes) : Q && Q.length && X(Q),
                      h.forEach(function (ct, ht) {
                        d(G[ht]) || (w[ct] += O[ht]);
                      }),
                      w.setChartSize();
                  }
                  getOptions() {
                    return E(this.userOptions, C);
                  }
                  reflow(w) {
                    const O = this;
                    var Q = O.options.chart;
                    Q = d(Q.width) && d(Q.height);
                    const G = O.containerBox,
                      X = O.getContainerBox();
                    delete O.pointer.chartPosition,
                      !Q &&
                        !O.isPrinting &&
                        G &&
                        X.width &&
                        ((X.width !== G.width || X.height !== G.height) &&
                          (y.clearTimeout(O.reflowTimeout),
                          (O.reflowTimeout = q(
                            function () {
                              O.container && O.setSize(void 0, void 0, !1);
                            },
                            w ? 100 : 0
                          ))),
                        (O.containerBox = X));
                  }
                  setReflow() {
                    const w = this;
                    var O = (Q) => {
                      var G;
                      null !== (G = w.options) &&
                        void 0 !== G &&
                        G.chart.reflow &&
                        w.hasLoaded &&
                        w.reflow(Q);
                    };
                    "function" == typeof ResizeObserver
                      ? new ResizeObserver(O).observe(w.renderTo)
                      : ((O = i(c, "resize", O)), i(this, "destroy", O));
                  }
                  setSize(w, O, Q) {
                    const G = this,
                      X = G.renderer;
                    (G.isResizing += 1),
                      v(Q, G),
                      (Q = X.globalAnimation),
                      (G.oldChartHeight = G.chartHeight),
                      (G.oldChartWidth = G.chartWidth),
                      typeof w < "u" && (G.options.chart.width = w),
                      typeof O < "u" && (G.options.chart.height = O),
                      G.getChartSize(),
                      G.styledMode ||
                        (Q ? k : a)(
                          G.container,
                          {
                            width: G.chartWidth + "px",
                            height: G.chartHeight + "px",
                          },
                          Q
                        ),
                      G.setChartSize(!0),
                      X.setSize(G.chartWidth, G.chartHeight, Q),
                      G.axes.forEach(function (ct) {
                        (ct.isDirty = !0), ct.setScale();
                      }),
                      (G.isDirtyLegend = !0),
                      (G.isDirtyBox = !0),
                      G.layOutTitles(),
                      G.getMargins(),
                      G.redraw(Q),
                      (G.oldChartHeight = null),
                      L(G, "resize"),
                      q(function () {
                        G &&
                          L(G, "endResize", null, function () {
                            --G.isResizing;
                          });
                      }, p(Q).duration);
                  }
                  setChartSize(w) {
                    var O = this.inverted;
                    const Q = this.renderer;
                    var G = this.chartWidth,
                      X = this.chartHeight;
                    const ct = this.options.chart,
                      ht = this.spacing,
                      Tt = this.clipOffset;
                    let Ct, yt, vt, zt;
                    (this.plotLeft = Ct = Math.round(this.plotLeft)),
                      (this.plotTop = yt = Math.round(this.plotTop)),
                      (this.plotWidth = vt =
                        Math.max(0, Math.round(G - Ct - this.marginRight))),
                      (this.plotHeight = zt =
                        Math.max(0, Math.round(X - yt - this.marginBottom))),
                      (this.plotSizeX = O ? zt : vt),
                      (this.plotSizeY = O ? vt : zt),
                      (this.plotBorderWidth = ct.plotBorderWidth || 0),
                      (this.spacingBox = Q.spacingBox =
                        {
                          x: ht[3],
                          y: ht[0],
                          width: G - ht[3] - ht[1],
                          height: X - ht[0] - ht[2],
                        }),
                      (this.plotBox = Q.plotBox =
                        { x: Ct, y: yt, width: vt, height: zt }),
                      (O = 2 * Math.floor(this.plotBorderWidth / 2)),
                      (G = Math.ceil(Math.max(O, Tt[3]) / 2)),
                      (X = Math.ceil(Math.max(O, Tt[0]) / 2)),
                      (this.clipBox = {
                        x: G,
                        y: X,
                        width: Math.floor(
                          this.plotSizeX - Math.max(O, Tt[1]) / 2 - G
                        ),
                        height: Math.max(
                          0,
                          Math.floor(
                            this.plotSizeY - Math.max(O, Tt[2]) / 2 - X
                          )
                        ),
                      }),
                      w ||
                        (this.axes.forEach(function (Et) {
                          Et.setAxisSize(), Et.setAxisTranslation();
                        }),
                        Q.alignElements()),
                      L(this, "afterSetChartSize", { skipAxes: w });
                  }
                  resetMargins() {
                    L(this, "resetMargins");
                    const w = this,
                      O = w.options.chart;
                    ["margin", "spacing"].forEach(function (Q) {
                      const G = O[Q],
                        X = D(G) ? G : [G, G, G, G];
                      ["Top", "Right", "Bottom", "Left"].forEach(function (
                        ct,
                        ht
                      ) {
                        w[Q][ht] = _(O[Q + ct], X[ht]);
                      });
                    }),
                      h.forEach(function (Q, G) {
                        w[Q] = _(w.margin[G], w.spacing[G]);
                      }),
                      (w.axisOffset = [0, 0, 0, 0]),
                      (w.clipOffset = [0, 0, 0, 0]);
                  }
                  drawChartBox() {
                    const w = this.options.chart,
                      O = this.renderer,
                      Q = this.chartWidth,
                      G = this.chartHeight,
                      X = this.styledMode,
                      ct = this.plotBGImage;
                    var ht = w.backgroundColor;
                    const Tt = w.plotBackgroundColor,
                      Ct = w.plotBackgroundImage,
                      yt = this.plotLeft,
                      vt = this.plotTop,
                      zt = this.plotWidth,
                      Et = this.plotHeight,
                      Pt = this.plotBox,
                      kt = this.clipRect,
                      It = this.clipBox;
                    let jt,
                      Nt,
                      Lt = this.chartBackground,
                      Ut = this.plotBackground,
                      Wt = this.plotBorder,
                      Zt = "animate";
                    Lt ||
                      ((this.chartBackground = Lt =
                        O.rect().addClass("highcharts-background").add()),
                      (Zt = "attr")),
                      X
                        ? (jt = Nt = Lt.strokeWidth())
                        : ((jt = w.borderWidth || 0),
                          (Nt = jt + (w.shadow ? 8 : 0)),
                          (ht = { fill: ht || "none" }),
                          (jt || Lt["stroke-width"]) &&
                            ((ht.stroke = w.borderColor),
                            (ht["stroke-width"] = jt)),
                          Lt.attr(ht).shadow(w.shadow)),
                      Lt[Zt]({
                        x: Nt / 2,
                        y: Nt / 2,
                        width: Q - Nt - (jt % 2),
                        height: G - Nt - (jt % 2),
                        r: w.borderRadius,
                      }),
                      (Zt = "animate"),
                      Ut ||
                        ((Zt = "attr"),
                        (this.plotBackground = Ut =
                          O.rect()
                            .addClass("highcharts-plot-background")
                            .add())),
                      Ut[Zt](Pt),
                      X ||
                        (Ut.attr({ fill: Tt || "none" }).shadow(w.plotShadow),
                        Ct &&
                          (ct
                            ? (Ct !== ct.attr("href") && ct.attr("href", Ct),
                              ct.animate(Pt))
                            : (this.plotBGImage = O.image(
                                Ct,
                                yt,
                                vt,
                                zt,
                                Et
                              ).add()))),
                      kt
                        ? kt.animate({ width: It.width, height: It.height })
                        : (this.clipRect = O.clipRect(It)),
                      (Zt = "animate"),
                      Wt ||
                        ((Zt = "attr"),
                        (this.plotBorder = Wt =
                          O.rect()
                            .addClass("highcharts-plot-border")
                            .attr({ zIndex: 1 })
                            .add())),
                      X ||
                        Wt.attr({
                          stroke: w.plotBorderColor,
                          "stroke-width": w.plotBorderWidth || 0,
                          fill: "none",
                        }),
                      Wt[Zt](
                        Wt.crisp(
                          { x: yt, y: vt, width: zt, height: Et },
                          -Wt.strokeWidth()
                        )
                      ),
                      (this.isDirtyBox = !1),
                      L(this, "afterDrawChartBox");
                  }
                  propFromSeries() {
                    const w = this,
                      O = w.options.chart,
                      Q = w.options.series;
                    let G, X, ct;
                    ["inverted", "angular", "polar"].forEach(function (ht) {
                      for (
                        X = g[O.type],
                          ct = O[ht] || (X && X.prototype[ht]),
                          G = Q && Q.length;
                        !ct && G--;

                      )
                        (X = g[Q[G].type]) && X.prototype[ht] && (ct = !0);
                      w[ht] = ct;
                    });
                  }
                  linkSeries(w) {
                    const O = this,
                      Q = O.series;
                    Q.forEach(function (G) {
                      G.linkedSeries.length = 0;
                    }),
                      Q.forEach(function (G) {
                        let X = G.options.linkedTo;
                        J(X) &&
                          (X =
                            ":previous" === X
                              ? O.series[G.index - 1]
                              : O.get(X)) &&
                          X.linkedParent !== G &&
                          (X.linkedSeries.push(G),
                          (G.linkedParent = X),
                          X.enabledDataSorting && G.setDataSortingOptions(),
                          (G.visible = _(
                            G.options.visible,
                            X.options.visible,
                            G.visible
                          )));
                      }),
                      L(this, "afterLinkSeries", { isUpdating: w });
                  }
                  renderSeries() {
                    this.series.forEach(function (w) {
                      w.translate(), w.render();
                    });
                  }
                  render() {
                    const w = this.axes,
                      O = this.colorAxis,
                      Q = this.renderer,
                      G = function (yt) {
                        yt.forEach(function (vt) {
                          vt.visible && vt.render();
                        });
                      };
                    let X = 0;
                    this.setTitle(),
                      L(this, "beforeMargins"),
                      this.getStacks && this.getStacks(),
                      this.getMargins(!0),
                      this.setChartSize();
                    const ct = this.plotWidth;
                    w.some(function (yt) {
                      if (
                        yt.horiz &&
                        yt.visible &&
                        yt.options.labels.enabled &&
                        yt.series.length
                      )
                        return (X = 21), !0;
                    });
                    const ht = (this.plotHeight = Math.max(
                      this.plotHeight - X,
                      0
                    ));
                    w.forEach(function (yt) {
                      yt.setScale();
                    }),
                      this.getAxisMargins();
                    const Tt = 1.1 < ct / this.plotWidth,
                      Ct = 1.05 < ht / this.plotHeight;
                    (Tt || Ct) &&
                      (w.forEach(function (yt) {
                        ((yt.horiz && Tt) || (!yt.horiz && Ct)) &&
                          yt.setTickInterval(!0);
                      }),
                      this.getMargins()),
                      this.drawChartBox(),
                      this.hasCartesianSeries ? G(w) : O && O.length && G(O),
                      this.seriesGroup ||
                        (this.seriesGroup = Q.g("series-group")
                          .attr({ zIndex: 3 })
                          .shadow(this.options.chart.seriesGroupShadow)
                          .add()),
                      this.renderSeries(),
                      this.addCredits(),
                      this.setResponsive && this.setResponsive(),
                      (this.hasRendered = !0);
                  }
                  addCredits(w) {
                    const O = this,
                      Q = r(!0, this.options.credits, w);
                    Q.enabled &&
                      !this.credits &&
                      ((this.credits = this.renderer
                        .text(Q.text + (this.mapCredits || ""), 0, 0)
                        .addClass("highcharts-credits")
                        .on("click", function () {
                          Q.href && (c.location.href = Q.href);
                        })
                        .attr({ align: Q.position.align, zIndex: 8 })),
                      O.styledMode || this.credits.css(Q.style),
                      this.credits.add().align(Q.position),
                      (this.credits.update = function (G) {
                        (O.credits = O.credits.destroy()), O.addCredits(G);
                      }));
                  }
                  destroy() {
                    const w = this,
                      O = w.axes,
                      Q = w.series,
                      G = w.container,
                      X = G && G.parentNode;
                    let ct;
                    for (
                      L(w, "destroy"),
                        w.renderer.forExport ? M(S, w) : (S[w.index] = void 0),
                        st.chartCount--,
                        w.renderTo.removeAttribute("data-highcharts-chart"),
                        R(w),
                        ct = O.length;
                      ct--;

                    )
                      O[ct] = O[ct].destroy();
                    for (
                      this.scroller &&
                        this.scroller.destroy &&
                        this.scroller.destroy(),
                        ct = Q.length;
                      ct--;

                    )
                      Q[ct] = Q[ct].destroy();
                    "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer"
                      .split(" ")
                      .forEach(function (ht) {
                        const Tt = w[ht];
                        Tt && Tt.destroy && (w[ht] = Tt.destroy());
                      }),
                      G && ((G.innerHTML = P.emptyHTML), R(G), X && o(G)),
                      f(w, function (ht, Tt) {
                        delete w[Tt];
                      });
                  }
                  firstRender() {
                    const w = this,
                      O = w.options;
                    w.getContainer(),
                      w.resetMargins(),
                      w.setChartSize(),
                      w.propFromSeries(),
                      w.getAxes();
                    const Q = z(O.series) ? O.series : [];
                    (O.series = []),
                      Q.forEach(function (G) {
                        w.initSeries(G);
                      }),
                      w.linkSeries(),
                      w.setSeriesData(),
                      L(w, "beforeRender"),
                      w.render(),
                      w.pointer.getChartPosition(),
                      !w.renderer.imgCount && !w.hasLoaded && w.onload(),
                      w.temporaryDisplay(!0);
                  }
                  onload() {
                    this.callbacks
                      .concat([this.callback])
                      .forEach(function (w) {
                        w && typeof this.index < "u" && w.apply(this, [this]);
                      }, this),
                      L(this, "load"),
                      L(this, "render"),
                      d(this.index) && this.setReflow(),
                      this.warnIfA11yModuleNotLoaded(),
                      (this.hasLoaded = !0);
                  }
                  warnIfA11yModuleNotLoaded() {
                    const { options: w, title: O } = this;
                    w &&
                      !this.accessibility &&
                      (this.renderer.boxWrapper.attr({
                        role: "img",
                        "aria-label": (
                          (O && O.element.textContent) ||
                          ""
                        ).replace(/</g, "&lt;"),
                      }),
                      (w.accessibility && !1 === w.accessibility.enabled) ||
                        Z(
                          'Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.',
                          !1,
                          this
                        ));
                  }
                  addSeries(w, O, Q) {
                    const G = this;
                    let X;
                    return (
                      w &&
                        ((O = _(O, !0)),
                        L(G, "addSeries", { options: w }, function () {
                          (X = G.initSeries(w)),
                            (G.isDirtyLegend = !0),
                            G.linkSeries(),
                            X.enabledDataSorting && X.setData(w.data, !1),
                            L(G, "afterAddSeries", { series: X }),
                            O && G.redraw(Q);
                        })),
                      X
                    );
                  }
                  addAxis(w, O, Q, G) {
                    return this.createAxis(O ? "xAxis" : "yAxis", {
                      axis: w,
                      redraw: Q,
                      animation: G,
                    });
                  }
                  addColorAxis(w, O, Q) {
                    return this.createAxis("colorAxis", {
                      axis: w,
                      redraw: O,
                      animation: Q,
                    });
                  }
                  createAxis(w, O) {
                    return (
                      (w = new Y(this, O.axis, w)),
                      _(O.redraw, !0) && this.redraw(O.animation),
                      w
                    );
                  }
                  showLoading(w) {
                    const O = this,
                      Q = O.options,
                      G = Q.loading,
                      X = function () {
                        ct &&
                          a(ct, {
                            left: O.plotLeft + "px",
                            top: O.plotTop + "px",
                            width: O.plotWidth + "px",
                            height: O.plotHeight + "px",
                          });
                      };
                    let ct = O.loadingDiv,
                      ht = O.loadingSpan;
                    ct ||
                      (O.loadingDiv = ct =
                        s(
                          "div",
                          {
                            className:
                              "highcharts-loading highcharts-loading-hidden",
                          },
                          null,
                          O.container
                        )),
                      ht ||
                        ((O.loadingSpan = ht =
                          s(
                            "span",
                            { className: "highcharts-loading-inner" },
                            null,
                            ct
                          )),
                        i(O, "redraw", X)),
                      (ct.className = "highcharts-loading"),
                      P.setElementHTML(ht, _(w, Q.lang.loading, "")),
                      O.styledMode ||
                        (a(ct, K(G.style, { zIndex: 10 })),
                        a(ht, G.labelStyle),
                        O.loadingShown ||
                          (a(ct, { opacity: 0, display: "" }),
                          k(
                            ct,
                            { opacity: G.style.opacity || 0.5 },
                            { duration: G.showDuration || 0 }
                          ))),
                      (O.loadingShown = !0),
                      X();
                  }
                  hideLoading() {
                    const w = this.options,
                      O = this.loadingDiv;
                    O &&
                      ((O.className =
                        "highcharts-loading highcharts-loading-hidden"),
                      this.styledMode ||
                        k(
                          O,
                          { opacity: 0 },
                          {
                            duration: w.loading.hideDuration || 100,
                            complete: function () {
                              a(O, { display: "none" });
                            },
                          }
                        )),
                      (this.loadingShown = !1);
                  }
                  update(w, O, Q, G) {
                    const X = this,
                      ct = {
                        credits: "addCredits",
                        title: "setTitle",
                        subtitle: "setSubtitle",
                        caption: "setCaption",
                      },
                      ht = w.isResponsiveOptions,
                      Tt = [];
                    let Ct, yt;
                    L(X, "update", { options: w }),
                      ht || X.setResponsive(!1, !0),
                      (w = E(w, X.options)),
                      (X.userOptions = r(X.userOptions, w));
                    var vt = w.chart;
                    if (vt) {
                      if (
                        (r(!0, X.options.chart, vt),
                        this.setZoomOptions(),
                        "className" in vt && X.setClassName(vt.className),
                        "inverted" in vt || "polar" in vt || "type" in vt)
                      ) {
                        X.propFromSeries();
                        var zt = !0;
                      }
                      "alignTicks" in vt && (zt = !0),
                        "events" in vt && T(this, vt),
                        f(vt, function (Et, Pt) {
                          -1 !==
                            X.propsRequireUpdateSeries.indexOf("chart." + Pt) &&
                            (Ct = !0),
                            -1 !== X.propsRequireDirtyBox.indexOf(Pt) &&
                              (X.isDirtyBox = !0),
                            -1 !== X.propsRequireReflow.indexOf(Pt) &&
                              (ht ? (X.isDirtyBox = !0) : (yt = !0));
                        }),
                        !X.styledMode &&
                          vt.style &&
                          X.renderer.setStyle(X.options.chart.style || {});
                    }
                    !X.styledMode &&
                      w.colors &&
                      (this.options.colors = w.colors),
                      w.time &&
                        (this.time === u && (this.time = new x(w.time)),
                        r(!0, X.options.time, w.time)),
                      f(w, function (Et, Pt) {
                        X[Pt] && "function" == typeof X[Pt].update
                          ? X[Pt].update(Et, !1)
                          : "function" == typeof X[ct[Pt]]
                          ? X[ct[Pt]](Et)
                          : "colors" !== Pt &&
                            -1 === X.collectionsWithUpdate.indexOf(Pt) &&
                            r(!0, X.options[Pt], w[Pt]),
                          "chart" !== Pt &&
                            -1 !== X.propsRequireUpdateSeries.indexOf(Pt) &&
                            (Ct = !0);
                      }),
                      this.collectionsWithUpdate.forEach(function (Et) {
                        w[Et] &&
                          (V(w[Et]).forEach(function (Pt, kt) {
                            const It = d(Pt.id);
                            let Lt;
                            It && (Lt = X.get(Pt.id)),
                              !Lt &&
                                X[Et] &&
                                (Lt = X[Et][_(Pt.index, kt)]) &&
                                ((It && d(Lt.options.id)) ||
                                  Lt.options.isInternal) &&
                                (Lt = void 0),
                              Lt &&
                                Lt.coll === Et &&
                                (Lt.update(Pt, !1), Q && (Lt.touched = !0)),
                              !Lt &&
                                Q &&
                                X.collectionsWithInit[Et] &&
                                (X.collectionsWithInit[Et][0].apply(
                                  X,
                                  [Pt]
                                    .concat(X.collectionsWithInit[Et][1] || [])
                                    .concat([!1])
                                ).touched = !0);
                          }),
                          Q &&
                            X[Et].forEach(function (Pt) {
                              Pt.touched || Pt.options.isInternal
                                ? delete Pt.touched
                                : Tt.push(Pt);
                            }));
                      }),
                      Tt.forEach(function (Et) {
                        Et.chart && Et.remove && Et.remove(!1);
                      }),
                      zt &&
                        X.axes.forEach(function (Et) {
                          Et.update({}, !1);
                        }),
                      Ct &&
                        X.getSeriesOrderByLinks().forEach(function (Et) {
                          Et.chart && Et.update({}, !1);
                        }, this),
                      (zt = vt && vt.width),
                      (vt =
                        vt &&
                        (J(vt.height)
                          ? W(vt.height, zt || X.chartWidth)
                          : vt.height)),
                      yt ||
                      (b(zt) && zt !== X.chartWidth) ||
                      (b(vt) && vt !== X.chartHeight)
                        ? X.setSize(zt, vt, G)
                        : _(O, !0) && X.redraw(G),
                      L(X, "afterUpdate", {
                        options: w,
                        redraw: O,
                        animation: G,
                      });
                  }
                  setSubtitle(w, O) {
                    this.applyDescription("subtitle", w), this.layOutTitles(O);
                  }
                  setCaption(w, O) {
                    this.applyDescription("caption", w), this.layOutTitles(O);
                  }
                  showResetZoom() {
                    function w() {
                      O.zoomOut();
                    }
                    const O = this,
                      Q = C.lang,
                      G = O.zooming.resetButton,
                      X = G.theme,
                      ct =
                        "chart" === G.relativeTo ||
                        "spacingBox" === G.relativeTo
                          ? null
                          : "scrollablePlotBox";
                    L(this, "beforeShowResetZoom", null, function () {
                      O.resetZoomButton = O.renderer
                        .button(Q.resetZoom, null, null, w, X)
                        .attr({
                          align: G.position.align,
                          title: Q.resetZoomTitle,
                        })
                        .addClass("highcharts-reset-zoom")
                        .add()
                        .align(G.position, !1, ct);
                    }),
                      L(this, "afterShowResetZoom");
                  }
                  zoomOut() {
                    L(this, "selection", { resetSelection: !0 }, this.zoom);
                  }
                  zoom(w) {
                    const O = this,
                      Q = O.pointer;
                    let X,
                      G = !1;
                    !w || w.resetSelection
                      ? (O.axes.forEach(function (ht) {
                          X = ht.zoom();
                        }),
                        (Q.initiated = !1))
                      : w.xAxis.concat(w.yAxis).forEach(function (ht) {
                          const Tt = ht.axis;
                          ((Q[Tt.isXAxis ? "zoomX" : "zoomY"] &&
                            d(Q.mouseDownX) &&
                            d(Q.mouseDownY) &&
                            O.isInsidePlot(
                              Q.mouseDownX - O.plotLeft,
                              Q.mouseDownY - O.plotTop,
                              { axis: Tt }
                            )) ||
                            !d(O.inverted ? Q.mouseDownX : Q.mouseDownY)) &&
                            ((X = Tt.zoom(ht.min, ht.max)),
                            Tt.displayBtn && (G = !0));
                        });
                    const ct = O.resetZoomButton;
                    G && !ct
                      ? O.showResetZoom()
                      : !G && D(ct) && (O.resetZoomButton = ct.destroy()),
                      X &&
                        O.redraw(
                          _(
                            O.options.chart.animation,
                            w && w.animation,
                            100 > O.pointCount
                          )
                        );
                  }
                  pan(w, O) {
                    const Q = this,
                      G = Q.hoverPoints;
                    O = "object" == typeof O ? O : { enabled: O, type: "x" };
                    const X = Q.options.chart;
                    X && X.panning && (X.panning = O);
                    const ct = O.type;
                    let ht;
                    L(this, "pan", { originalEvent: w }, function () {
                      G &&
                        G.forEach(function (yt) {
                          yt.setState();
                        });
                      let Tt = Q.xAxis;
                      "xy" === ct
                        ? (Tt = Tt.concat(Q.yAxis))
                        : "y" === ct && (Tt = Q.yAxis);
                      const Ct = {};
                      Tt.forEach(function (yt) {
                        if (
                          yt.options.panningEnabled &&
                          !yt.options.isInternal
                        ) {
                          var vt = yt.horiz,
                            zt = w[vt ? "chartX" : "chartY"],
                            Et = Q[(vt = vt ? "mouseDownX" : "mouseDownY")],
                            Pt = yt.minPointOffset || 0,
                            kt =
                              (yt.reversed && !Q.inverted) ||
                              (!yt.reversed && Q.inverted)
                                ? -1
                                : 1,
                            It = yt.getExtremes(),
                            Lt = yt.toValue(Et - zt, !0) + Pt * kt,
                            Ut =
                              yt.toValue(Et + yt.len - zt, !0) -
                              (Pt * kt ||
                                (yt.isXAxis && yt.pointRangePadding) ||
                                0),
                            Wt = Ut < Lt;
                          (kt = yt.hasVerticalPanning()),
                            (Et = Wt ? Ut : Lt),
                            (Lt = Wt ? Lt : Ut);
                          var jt = yt.panningState;
                          !kt ||
                            yt.isXAxis ||
                            (jt && !jt.isDirty) ||
                            yt.series.forEach(function (Nt) {
                              var Zt = Nt.getProcessedData(!0);
                              (Zt = Nt.getExtremes(Zt.yData, !0)),
                                jt ||
                                  (jt = {
                                    startMin: Number.MAX_VALUE,
                                    startMax: -Number.MAX_VALUE,
                                  }),
                                b(Zt.dataMin) &&
                                  b(Zt.dataMax) &&
                                  ((jt.startMin = Math.min(
                                    _(Nt.options.threshold, 1 / 0),
                                    Zt.dataMin,
                                    jt.startMin
                                  )),
                                  (jt.startMax = Math.max(
                                    _(Nt.options.threshold, -1 / 0),
                                    Zt.dataMax,
                                    jt.startMax
                                  )));
                            }),
                            (kt = Math.min(
                              _(jt && jt.startMin, It.dataMin),
                              Pt
                                ? It.min
                                : yt.toValue(
                                    yt.toPixels(It.min) - yt.minPixelPadding
                                  )
                            )),
                            (Ut = Math.max(
                              _(jt && jt.startMax, It.dataMax),
                              Pt
                                ? It.max
                                : yt.toValue(
                                    yt.toPixels(It.max) + yt.minPixelPadding
                                  )
                            )),
                            (yt.panningState = jt),
                            yt.isOrdinal ||
                              (0 < (Pt = kt - Et) && ((Lt += Pt), (Et = kt)),
                              0 < (Pt = Lt - Ut) && ((Lt = Ut), (Et -= Pt)),
                              yt.series.length &&
                                Et !== It.min &&
                                Lt !== It.max &&
                                Et >= kt &&
                                Lt <= Ut &&
                                (yt.setExtremes(Et, Lt, !1, !1, {
                                  trigger: "pan",
                                }),
                                !Q.resetZoomButton &&
                                  Et !== kt &&
                                  Lt !== Ut &&
                                  ct.match("y") &&
                                  (Q.showResetZoom(), (yt.displayBtn = !1)),
                                (ht = !0)),
                              (Ct[vt] = zt));
                        }
                      }),
                        f(Ct, (yt, vt) => {
                          Q[vt] = yt;
                        }),
                        ht && Q.redraw(!1),
                        a(Q.container, { cursor: "move" });
                    });
                  }
                }
                return (
                  K(lt.prototype, {
                    callbacks: [],
                    collectionsWithInit: {
                      xAxis: [lt.prototype.addAxis, [!0]],
                      yAxis: [lt.prototype.addAxis, [!1]],
                      series: [lt.prototype.addSeries],
                    },
                    collectionsWithUpdate: ["xAxis", "yAxis", "series"],
                    propsRequireDirtyBox:
                      "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(
                        " "
                      ),
                    propsRequireReflow:
                      "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(
                        " "
                      ),
                    propsRequireUpdateSeries:
                      "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(
                        " "
                      ),
                  }),
                  lt
                );
              }
            ),
            ut(
              t,
              "Extensions/ScrollablePlotArea.js",
              [
                t["Core/Animation/AnimationUtilities.js"],
                t["Core/Axis/Axis.js"],
                t["Core/Chart/Chart.js"],
                t["Core/Series/Series.js"],
                t["Core/Renderer/RendererRegistry.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j, tt, et, st) {
                const { stop: nt } = F,
                  {
                    addEvent: I,
                    createElement: H,
                    defined: N,
                    merge: x,
                    pick: y,
                  } = st;
                I(j, "afterSetChartSize", function (P) {
                  var k = this.options.chart.scrollablePlotArea,
                    p = k && k.minWidth;
                  let v;
                  (k = k && k.minHeight),
                    this.renderer.forExport ||
                      (p
                        ? (this.scrollablePixelsX = p =
                            Math.max(0, p - this.chartWidth)) &&
                          ((this.scrollablePlotBox =
                            this.renderer.scrollablePlotBox =
                              x(this.plotBox)),
                          (this.plotBox.width = this.plotWidth += p),
                          this.inverted
                            ? (this.clipBox.height += p)
                            : (this.clipBox.width += p),
                          (v = { 1: { name: "right", value: p } }))
                        : k &&
                          ((this.scrollablePixelsY = p =
                            Math.max(0, k - this.chartHeight)),
                          N(p) &&
                            ((this.scrollablePlotBox =
                              this.renderer.scrollablePlotBox =
                                x(this.plotBox)),
                            (this.plotBox.height = this.plotHeight += p),
                            this.inverted
                              ? (this.clipBox.width += p)
                              : (this.clipBox.height += p),
                            (v = { 2: { name: "bottom", value: p } }))),
                      v &&
                        !P.skipAxes &&
                        this.axes.forEach(function (C) {
                          v[C.side]
                            ? (C.getPlotLinePath = function () {
                                let T,
                                  u = v[C.side].name,
                                  A = this[u];
                                return (
                                  (this[u] = A - v[C.side].value),
                                  (T = Y.prototype.getPlotLinePath.apply(
                                    this,
                                    arguments
                                  )),
                                  (this[u] = A),
                                  T
                                );
                              })
                            : (C.setAxisSize(), C.setAxisTranslation());
                        }));
                }),
                  I(j, "render", function () {
                    this.scrollablePixelsX || this.scrollablePixelsY
                      ? (this.setUpScrolling && this.setUpScrolling(),
                        this.applyFixed())
                      : this.fixedDiv && this.applyFixed();
                  }),
                  (j.prototype.setUpScrolling = function () {
                    const P = {
                      WebkitOverflowScrolling: "touch",
                      overflowX: "hidden",
                      overflowY: "hidden",
                    };
                    let k;
                    this.scrollablePixelsX && (P.overflowX = "auto"),
                      this.scrollablePixelsY && (P.overflowY = "auto"),
                      (this.scrollingParent = H(
                        "div",
                        { className: "highcharts-scrolling-parent" },
                        { position: "relative" },
                        this.renderTo
                      )),
                      (this.scrollingContainer = H(
                        "div",
                        { className: "highcharts-scrolling" },
                        P,
                        this.scrollingParent
                      )),
                      I(this.scrollingContainer, "scroll", () => {
                        this.pointer &&
                          (delete this.pointer.chartPosition,
                          this.hoverPoint && (k = this.hoverPoint),
                          this.pointer.runPointActions(void 0, k, !0));
                      }),
                      (this.innerContainer = H(
                        "div",
                        { className: "highcharts-inner-container" },
                        null,
                        this.scrollingContainer
                      )),
                      this.innerContainer.appendChild(this.container),
                      (this.setUpScrolling = null);
                  }),
                  (j.prototype.moveFixedElements = function () {
                    let v,
                      P = this.container,
                      k = this.fixedRenderer,
                      p =
                        ".highcharts-breadcrumbs-group .highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(
                          " "
                        );
                    this.scrollablePixelsX && !this.inverted
                      ? (v = ".highcharts-yaxis")
                      : (this.scrollablePixelsX && this.inverted) ||
                        (this.scrollablePixelsY && !this.inverted)
                      ? (v = ".highcharts-xaxis")
                      : this.scrollablePixelsY &&
                        this.inverted &&
                        (v = ".highcharts-yaxis"),
                      v &&
                        p.push(
                          `${v}:not(.highcharts-radial-axis)`,
                          `${v}-labels:not(.highcharts-radial-axis-labels)`
                        ),
                      p.forEach(function (C) {
                        [].forEach.call(P.querySelectorAll(C), function (u) {
                          (u.namespaceURI === k.SVG_NS
                            ? k.box
                            : k.box.parentNode
                          ).appendChild(u),
                            (u.style.pointerEvents = "auto");
                        });
                      });
                  }),
                  (j.prototype.applyFixed = function () {
                    var P = !this.fixedDiv,
                      k = this.options.chart,
                      p = k.scrollablePlotArea,
                      v = et.getRendererType();
                    P
                      ? ((this.fixedDiv = H(
                          "div",
                          { className: "highcharts-fixed" },
                          {
                            position: "absolute",
                            overflow: "hidden",
                            pointerEvents: "none",
                            zIndex: ((k.style && k.style.zIndex) || 0) + 2,
                            top: 0,
                          },
                          null,
                          !0
                        )),
                        this.scrollingContainer &&
                          this.scrollingContainer.parentNode.insertBefore(
                            this.fixedDiv,
                            this.scrollingContainer
                          ),
                        (this.renderTo.style.overflow = "visible"),
                        (this.fixedRenderer = k =
                          new v(
                            this.fixedDiv,
                            this.chartWidth,
                            this.chartHeight,
                            this.options.chart.style
                          )),
                        (this.scrollableMask = k
                          .path()
                          .attr({
                            fill: this.options.chart.backgroundColor || "#fff",
                            "fill-opacity": y(p.opacity, 0.85),
                            zIndex: -1,
                          })
                          .addClass("highcharts-scrollable-mask")
                          .add()),
                        I(this, "afterShowResetZoom", this.moveFixedElements),
                        I(this, "afterApplyDrilldown", this.moveFixedElements),
                        I(this, "afterLayOutTitles", this.moveFixedElements))
                      : this.fixedRenderer.setSize(
                          this.chartWidth,
                          this.chartHeight
                        ),
                      (this.scrollableDirty || P) &&
                        ((this.scrollableDirty = !1), this.moveFixedElements()),
                      (k = this.chartWidth + (this.scrollablePixelsX || 0)),
                      (v = this.chartHeight + (this.scrollablePixelsY || 0)),
                      nt(this.container),
                      (this.container.style.width = k + "px"),
                      (this.container.style.height = v + "px"),
                      this.renderer.boxWrapper.attr({
                        width: k,
                        height: v,
                        viewBox: [0, 0, k, v].join(" "),
                      }),
                      this.chartBackground.attr({ width: k, height: v }),
                      (this.scrollingContainer.style.height =
                        this.chartHeight + "px"),
                      P &&
                        (p.scrollPositionX &&
                          (this.scrollingContainer.scrollLeft =
                            this.scrollablePixelsX * p.scrollPositionX),
                        p.scrollPositionY &&
                          (this.scrollingContainer.scrollTop =
                            this.scrollablePixelsY * p.scrollPositionY)),
                      (P = this.plotTop - (v = this.axisOffset)[0] - 1),
                      (p = this.plotLeft - v[3] - 1),
                      (k = this.plotTop + this.plotHeight + v[2] + 1),
                      (v = this.plotLeft + this.plotWidth + v[1] + 1);
                    let C =
                        this.plotLeft +
                        this.plotWidth -
                        (this.scrollablePixelsX || 0),
                      u =
                        this.plotTop +
                        this.plotHeight -
                        (this.scrollablePixelsY || 0);
                    (P = this.scrollablePixelsX
                      ? [
                          ["M", 0, P],
                          ["L", this.plotLeft - 1, P],
                          ["L", this.plotLeft - 1, k],
                          ["L", 0, k],
                          ["Z"],
                          ["M", C, P],
                          ["L", this.chartWidth, P],
                          ["L", this.chartWidth, k],
                          ["L", C, k],
                          ["Z"],
                        ]
                      : this.scrollablePixelsY
                      ? [
                          ["M", p, 0],
                          ["L", p, this.plotTop - 1],
                          ["L", v, this.plotTop - 1],
                          ["L", v, 0],
                          ["Z"],
                          ["M", p, u],
                          ["L", p, this.chartHeight],
                          ["L", v, this.chartHeight],
                          ["L", v, u],
                          ["Z"],
                        ]
                      : [["M", 0, 0]]),
                      "adjustHeight" !== this.redrawTrigger &&
                        this.scrollableMask.attr({ d: P });
                  }),
                  I(Y, "afterInit", function () {
                    this.chart.scrollableDirty = !0;
                  }),
                  I(tt, "show", function () {
                    this.chart.scrollableDirty = !0;
                  });
              }
            ),
            ut(
              t,
              "Core/Axis/Stacking/StackItem.js",
              [
                t["Core/Templating.js"],
                t["Core/Series/SeriesRegistry.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j) {
                const { format: tt } = F,
                  { series: et } = Y,
                  {
                    destroyObjectProperties: st,
                    fireEvent: nt,
                    isNumber: I,
                    pick: H,
                  } = j;
                return class N {
                  constructor(y, P, k, p, v) {
                    const C = y.chart.inverted,
                      u = y.reversed;
                    (this.axis = y),
                      (y = this.isNegative = !!k != !!u),
                      (this.options = P = P || {}),
                      (this.x = p),
                      (this.cumulative = this.total = null),
                      (this.points = {}),
                      (this.hasValidPoints = !1),
                      (this.stack = v),
                      (this.rightCliff = this.leftCliff = 0),
                      (this.alignOptions = {
                        align:
                          P.align || (C ? (y ? "left" : "right") : "center"),
                        verticalAlign:
                          P.verticalAlign ||
                          (C ? "middle" : y ? "bottom" : "top"),
                        y: P.y,
                        x: P.x,
                      }),
                      (this.textAlign =
                        P.textAlign || (C ? (y ? "right" : "left") : "center"));
                  }
                  destroy() {
                    st(this, this.axis);
                  }
                  render(y) {
                    const P = this.axis.chart,
                      k = this.options;
                    var p = k.format;
                    (p = p ? tt(p, this, P) : k.formatter.call(this)),
                      this.label
                        ? this.label.attr({ text: p, visibility: "hidden" })
                        : ((this.label = P.renderer.label(
                            p,
                            null,
                            void 0,
                            k.shape,
                            void 0,
                            void 0,
                            k.useHTML,
                            !1,
                            "stack-labels"
                          )),
                          (p = {
                            r: k.borderRadius || 0,
                            text: p,
                            padding: H(k.padding, 5),
                            visibility: "hidden",
                          }),
                          P.styledMode ||
                            ((p.fill = k.backgroundColor),
                            (p.stroke = k.borderColor),
                            (p["stroke-width"] = k.borderWidth),
                            this.label.css(k.style || {})),
                          this.label.attr(p),
                          this.label.added || this.label.add(y)),
                      (this.label.labelrank = P.plotSizeY),
                      nt(this, "afterRender");
                  }
                  setOffset(y, P, k, p, v, C) {
                    const {
                        alignOptions: u,
                        axis: A,
                        label: T,
                        options: S,
                        textAlign: l,
                      } = this,
                      h = A.chart;
                    k = this.getStackBox({
                      xOffset: y,
                      width: P,
                      boxBottom: k,
                      boxTop: p,
                      defaultX: v,
                      xAxis: C,
                    });
                    var { verticalAlign: m } = u;
                    if (T && k) {
                      (p = T.getBBox()),
                        (v = T.padding),
                        (C = "justify" === H(S.overflow, "justify")),
                        (u.x = S.x || 0),
                        (u.y = S.y || 0);
                      const { x: c, y: g } = this.adjustStackPosition({
                        labelBox: p,
                        verticalAlign: m,
                        textAlign: l,
                      });
                      (k.x -= c),
                        (k.y -= g),
                        T.align(u, !1, k),
                        (m = h.isInsidePlot(
                          T.alignAttr.x + u.x + c,
                          T.alignAttr.y + u.y + g
                        )) || (C = !1),
                        C &&
                          et.prototype.justifyDataLabel.call(
                            A,
                            T,
                            u,
                            T.alignAttr,
                            p,
                            k
                          ),
                        T.attr({
                          x: T.alignAttr.x,
                          y: T.alignAttr.y,
                          rotation: S.rotation,
                          rotationOriginX: p.width / 2,
                          rotationOriginY: p.height / 2,
                        }),
                        H(!C && S.crop, !0) &&
                          (m =
                            I(T.x) &&
                            I(T.y) &&
                            h.isInsidePlot(T.x - v + T.width, T.y) &&
                            h.isInsidePlot(T.x + v, T.y)),
                        T[m ? "show" : "hide"]();
                    }
                    nt(this, "afterSetOffset", { xOffset: y, width: P });
                  }
                  adjustStackPosition({
                    labelBox: y,
                    verticalAlign: P,
                    textAlign: k,
                  }) {
                    const p = {
                      bottom: 0,
                      middle: 1,
                      top: 2,
                      right: 1,
                      center: 0,
                      left: -1,
                    };
                    return {
                      x: y.width / 2 + (y.width / 2) * p[k],
                      y: (y.height / 2) * p[P],
                    };
                  }
                  getStackBox(y) {
                    var P = this.axis;
                    const k = P.chart,
                      {
                        boxTop: p,
                        defaultX: v,
                        xOffset: C,
                        width: u,
                        boxBottom: A,
                      } = y;
                    var T = P.stacking.usePercentage
                      ? 100
                      : H(p, this.total, 0);
                    T = P.toPixels(T);
                    const S =
                      H(v, (y = y.xAxis || k.xAxis[0]).translate(this.x)) + C;
                    (P = P.toPixels(
                      A ||
                        (I(P.min) &&
                          P.logarithmic &&
                          P.logarithmic.lin2log(P.min)) ||
                        0
                    )),
                      (P = Math.abs(T - P));
                    const l = this.isNegative;
                    return k.inverted
                      ? {
                          x: (l ? T : T - P) - k.plotLeft,
                          y: y.height - S - u,
                          width: P,
                          height: u,
                        }
                      : {
                          x: S + y.transB - k.plotLeft,
                          y: (l ? T - P : T) - k.plotTop,
                          width: u,
                          height: P,
                        };
                  }
                };
              }
            ),
            ut(
              t,
              "Core/Axis/Stacking/StackingAxis.js",
              [
                t["Core/Animation/AnimationUtilities.js"],
                t["Core/Axis/Axis.js"],
                t["Core/Series/SeriesRegistry.js"],
                t["Core/Axis/Stacking/StackItem.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j, tt, et) {
                function st() {
                  const i = this,
                    e = i.inverted;
                  i.yAxis.forEach((s) => {
                    s.stacking &&
                      s.stacking.stacks &&
                      s.hasVisibleSeries &&
                      (s.stacking.oldStacks = s.stacking.stacks);
                  }),
                    i.series.forEach((s) => {
                      const a = (s.xAxis && s.xAxis.options) || {};
                      !s.options.stacking ||
                        (!0 !== s.visible &&
                          !1 !== i.options.chart.ignoreHiddenSeries) ||
                        (s.stackKey = [
                          s.type,
                          m(s.options.stack, ""),
                          e ? a.top : a.left,
                          e ? a.height : a.width,
                        ].join());
                    });
                }
                function nt() {
                  const i = this.stacking;
                  if (i) {
                    var e = i.stacks;
                    h(e, function (s, a) {
                      A(s), (e[a] = null);
                    }),
                      i && i.stackTotalGroup && i.stackTotalGroup.destroy();
                  }
                }
                function I() {
                  "yAxis" !== this.coll ||
                    this.stacking ||
                    (this.stacking = new c(this));
                }
                function H(i, e, s, a) {
                  return (
                    !u(i) || i.x !== e || (a && i.stackKey !== a)
                      ? (i = { x: e, index: 0, key: a, stackKey: a })
                      : i.index++,
                    (i.key = [s, e, i.index].join()),
                    i
                  );
                }
                function N() {
                  const i = this,
                    e = i.stackKey,
                    s = i.yAxis.stacking.stacks,
                    a = i.processedXData,
                    d = i[i.options.stacking + "Stacker"];
                  let E;
                  d &&
                    [e, "-" + e].forEach((o) => {
                      let Z,
                        M = a.length;
                      for (; M--; ) {
                        var K = a[M];
                        (E = i.getStackIndicator(E, K, i.index, o)),
                          (Z = (K = s[o] && s[o][K]) && K.points[E.key]) &&
                            d.call(i, Z, K, M);
                      }
                    });
                }
                function x(i, e, s) {
                  (i[0] = C(i[0] * (e = e.total ? 100 / e.total : 0))),
                    (i[1] = C(i[1] * e)),
                    (this.stackedYData[s] = i[1]);
                }
                function y() {
                  const i = this.yAxis.stacking;
                  this.options.centerInCategory &&
                  (this.is("column") || this.is("columnrange")) &&
                  !this.options.stacking &&
                  1 < this.chart.series.length
                    ? p.setStackedPoints.call(this, "group")
                    : i &&
                      h(i.stacks, (e, s) => {
                        "group" === s.slice(-5) &&
                          (h(e, (a) => a.destroy()), delete i.stacks[s]);
                      });
                }
                function P(i) {
                  var e = this.chart;
                  const s = i || this.options.stacking;
                  if (
                    s &&
                    (!0 === this.visible ||
                      !1 === e.options.chart.ignoreHiddenSeries)
                  ) {
                    var a = this.processedXData,
                      d = this.processedYData,
                      E = [],
                      o = d.length,
                      M = this.options,
                      Z = M.threshold,
                      K = m(M.startFromThreshold && Z, 0);
                    M = M.stack;
                    var b,
                      D,
                      $ = "-" + (i = i ? `${this.type},${s}` : this.stackKey),
                      L = this.negStacks,
                      n = (e = "group" === s ? e.yAxis[0] : this.yAxis).stacking
                        .stacks,
                      z = e.stacking.oldStacks;
                    for (e.stacking.stacksTouched += 1, D = 0; D < o; D++) {
                      var J = a[D],
                        r = d[D],
                        f = this.getStackIndicator(f, J, this.index),
                        _ = f.key,
                        B = (b = L && r < (K ? 0 : Z)) ? $ : i;
                      n[B] || (n[B] = {}),
                        n[B][J] ||
                          (z[B] && z[B][J]
                            ? ((n[B][J] = z[B][J]), (n[B][J].total = null))
                            : (n[B][J] = new tt(
                                e,
                                e.options.stackLabels,
                                !!b,
                                J,
                                M
                              ))),
                        (B = n[B][J]),
                        null !== r
                          ? ((B.points[_] = B.points[this.index] =
                              [m(B.cumulative, K)]),
                            u(B.cumulative) || (B.base = _),
                            (B.touched = e.stacking.stacksTouched),
                            0 < f.index &&
                              !1 === this.singleStacks &&
                              (B.points[_][0] =
                                B.points[this.index + "," + J + ",0"][0]))
                          : (B.points[_] = B.points[this.index] = null),
                        "percent" === s
                          ? ((b = b ? i : $),
                            (B.total =
                              L && n[b] && n[b][J]
                                ? ((b = n[b][J]).total =
                                    Math.max(b.total, B.total) + Math.abs(r) ||
                                    0)
                                : C(B.total + (Math.abs(r) || 0))))
                          : "group" === s
                          ? (S(r) && (r = r[0]),
                            null !== r && (B.total = (B.total || 0) + 1))
                          : (B.total = C(B.total + (r || 0))),
                        (B.cumulative =
                          "group" === s
                            ? (B.total || 1) - 1
                            : C(m(B.cumulative, K) + (r || 0))),
                        null !== r &&
                          (B.points[_].push(B.cumulative),
                          (E[D] = B.cumulative),
                          (B.hasValidPoints = !0));
                    }
                    "percent" === s && (e.stacking.usePercentage = !0),
                      "group" !== s && (this.stackedYData = E),
                      (e.stacking.oldStacks = {});
                  }
                }
                const { getDeferredAnimation: k } = F,
                  {
                    series: { prototype: p },
                  } = j,
                  {
                    addEvent: v,
                    correctFloat: C,
                    defined: u,
                    destroyObjectProperties: A,
                    fireEvent: T,
                    isArray: S,
                    isNumber: l,
                    objectEach: h,
                    pick: m,
                  } = et;
                class c {
                  constructor(e) {
                    (this.oldStacks = {}),
                      (this.stacks = {}),
                      (this.stacksTouched = 0),
                      (this.axis = e);
                  }
                  buildStacks() {
                    const e = this.axis,
                      s = e.series,
                      a = e.options.reversedStacks,
                      d = s.length;
                    let E, o;
                    for (this.usePercentage = !1, o = d; o--; )
                      (E = s[a ? o : d - o - 1]),
                        E.setStackedPoints(),
                        E.setGroupedPoints();
                    for (o = 0; o < d; o++) s[o].modifyStacks();
                    T(e, "afterBuildStacks");
                  }
                  cleanStacks() {
                    let e;
                    this.oldStacks && (e = this.stacks = this.oldStacks),
                      h(e, function (s) {
                        h(s, function (a) {
                          a.cumulative = a.total;
                        });
                      });
                  }
                  resetStacks() {
                    h(this.stacks, (e) => {
                      h(e, (s, a) => {
                        l(s.touched) && s.touched < this.stacksTouched
                          ? (s.destroy(), delete e[a])
                          : ((s.total = null), (s.cumulative = null));
                      });
                    });
                  }
                  renderStackTotals() {
                    var e = this.axis;
                    const s = e.chart,
                      a = s.renderer,
                      d = this.stacks;
                    e = k(
                      s,
                      (e.options.stackLabels &&
                        e.options.stackLabels.animation) ||
                        !1
                    );
                    const E = (this.stackTotalGroup =
                      this.stackTotalGroup ||
                      a
                        .g("stack-labels")
                        .attr({ zIndex: 6, opacity: 0 })
                        .add());
                    E.translate(s.plotLeft, s.plotTop),
                      h(d, function (o) {
                        h(o, function (M) {
                          M.render(E);
                        });
                      }),
                      E.animate({ opacity: 1 }, e);
                  }
                }
                var g;
                return (
                  (function (i) {
                    const e = [];
                    i.compose = function (s, a, d) {
                      et.pushUnique(e, s) &&
                        (v(s, "init", I), v(s, "destroy", nt)),
                        et.pushUnique(e, a) && (a.prototype.getStacks = st),
                        et.pushUnique(e, d) &&
                          (((s = d.prototype).getStackIndicator = H),
                          (s.modifyStacks = N),
                          (s.percentStacker = x),
                          (s.setGroupedPoints = y),
                          (s.setStackedPoints = P));
                    };
                  })(g || (g = {})),
                  g
                );
              }
            ),
            ut(
              t,
              "Series/Line/LineSeries.js",
              [
                t["Core/Series/Series.js"],
                t["Core/Series/SeriesRegistry.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j) {
                const { defined: tt, merge: et } = j;
                class st extends F {
                  constructor() {
                    super(...arguments),
                      (this.points = this.options = this.data = void 0);
                  }
                  drawGraph() {
                    const I = this,
                      H = this.options,
                      N = (this.gappedPath || this.getGraphPath).call(this),
                      x = this.chart.styledMode;
                    let y = [["graph", "highcharts-graph"]];
                    x ||
                      y[0].push(
                        H.lineColor || this.color || "#cccccc",
                        H.dashStyle
                      ),
                      (y = I.getZonesGraphs(y)),
                      y.forEach(function (P, k) {
                        var p = P[0];
                        let v = I[p];
                        const C = v ? "animate" : "attr";
                        v
                          ? ((v.endX = I.preventGraphAnimation ? null : N.xMap),
                            v.animate({ d: N }))
                          : N.length &&
                            (I[p] = v =
                              I.chart.renderer
                                .path(N)
                                .addClass(P[1])
                                .attr({ zIndex: 1 })
                                .add(I.group)),
                          v &&
                            !x &&
                            ((p = {
                              stroke: P[2],
                              "stroke-width": H.lineWidth || 0,
                              fill: (I.fillGraph && I.color) || "none",
                            }),
                            P[3]
                              ? (p.dashstyle = P[3])
                              : "square" !== H.linecap &&
                                (p["stroke-linecap"] = p["stroke-linejoin"] =
                                  "round"),
                            v[C](p).shadow(2 > k && H.shadow)),
                          v && ((v.startX = N.xMap), (v.isArea = N.isArea));
                      });
                  }
                  getGraphPath(I, H, N) {
                    const x = this,
                      y = x.options,
                      P = [],
                      k = [];
                    let p,
                      v = y.step;
                    const C = (I = I || x.points).reversed;
                    return (
                      C && I.reverse(),
                      (v = { right: 1, center: 2 }[v] || (v && 3)) &&
                        C &&
                        (v = 4 - v),
                      (I = this.getValidPoints(
                        I,
                        !1,
                        !(y.connectNulls && !H && !N)
                      )).forEach(function (u, A) {
                        const T = u.plotX,
                          S = u.plotY,
                          l = I[A - 1],
                          h = u.isNull || "number" != typeof S;
                        (u.leftCliff || (l && l.rightCliff)) && !N && (p = !0),
                          h && !tt(H) && 0 < A
                            ? (p = !y.connectNulls)
                            : h && !H
                            ? (p = !0)
                            : (0 === A || p
                                ? (A = [["M", u.plotX, u.plotY]])
                                : x.getPointSpline
                                ? (A = [x.getPointSpline(I, u, A)])
                                : v
                                ? (A =
                                    1 === v
                                      ? [["L", l.plotX, S]]
                                      : 2 === v
                                      ? [
                                          ["L", (l.plotX + T) / 2, l.plotY],
                                          ["L", (l.plotX + T) / 2, S],
                                        ]
                                      : [["L", T, l.plotY]]).push(["L", T, S])
                                : (A = [["L", T, S]]),
                              k.push(u.x),
                              v && (k.push(u.x), 2 === v && k.push(u.x)),
                              P.push.apply(P, A),
                              (p = !1));
                      }),
                      (P.xMap = k),
                      (x.graphPath = P)
                    );
                  }
                  getZonesGraphs(I) {
                    return (
                      this.zones.forEach(function (H, N) {
                        (N = [
                          "zone-graph-" + N,
                          "highcharts-graph highcharts-zone-graph-" +
                            N +
                            " " +
                            (H.className || ""),
                        ]),
                          this.chart.styledMode ||
                            N.push(
                              H.color || this.color,
                              H.dashStyle || this.options.dashStyle
                            ),
                          I.push(N);
                      }, this),
                      I
                    );
                  }
                }
                return (
                  (st.defaultOptions = et(F.defaultOptions, {
                    legendSymbol: "lineMarker",
                  })),
                  Y.registerSeriesType("line", st),
                  st
                );
              }
            ),
            ut(
              t,
              "Series/Area/AreaSeries.js",
              [
                t["Core/Color/Color.js"],
                t["Core/Series/SeriesRegistry.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j) {
                const {
                    seriesTypes: { line: tt },
                  } = Y,
                  { extend: et, merge: st, objectEach: nt, pick: I } = j;
                class H extends tt {
                  constructor() {
                    super(...arguments),
                      (this.points = this.options = this.data = void 0);
                  }
                  drawGraph() {
                    (this.areaPath = []), super.drawGraph.apply(this);
                    const x = this,
                      y = this.areaPath,
                      P = this.options,
                      k = [
                        ["area", "highcharts-area", this.color, P.fillColor],
                      ];
                    this.zones.forEach(function (p, v) {
                      k.push([
                        "zone-area-" + v,
                        "highcharts-area highcharts-zone-area-" +
                          v +
                          " " +
                          p.className,
                        p.color || x.color,
                        p.fillColor || P.fillColor,
                      ]);
                    }),
                      k.forEach(function (p) {
                        const v = p[0],
                          C = {};
                        let u = x[v];
                        const A = u ? "animate" : "attr";
                        u
                          ? ((u.endX = x.preventGraphAnimation ? null : y.xMap),
                            u.animate({ d: y }))
                          : ((C.zIndex = 0),
                            (u = x[v] =
                              x.chart.renderer
                                .path(y)
                                .addClass(p[1])
                                .add(x.group)),
                            (u.isArea = !0)),
                          x.chart.styledMode ||
                            (p[3]
                              ? (C.fill = p[3])
                              : ((C.fill = p[2]),
                                (C["fill-opacity"] = I(P.fillOpacity, 0.75)))),
                          u[A](C),
                          (u.startX = y.xMap),
                          (u.shiftUnit = P.step ? 2 : 1);
                      });
                  }
                  getGraphPath(x) {
                    var y = tt.prototype.getGraphPath,
                      P = this.options;
                    const k = P.stacking,
                      p = this.yAxis,
                      v = [],
                      C = [],
                      u = this.index,
                      A = p.stacking.stacks[this.stackKey],
                      T = P.threshold,
                      S = Math.round(p.getThreshold(P.threshold));
                    P = I(P.connectNulls, "percent" === k);
                    var l = function (g, i, e) {
                      var s = x[g];
                      g = k && A[s.x].points[u];
                      const a = s[e + "Null"] || 0;
                      let d, E;
                      (e = s[e + "Cliff"] || 0),
                        (s = !0),
                        e || a
                          ? ((d = (a ? g[0] : g[1]) + e),
                            (E = g[0] + e),
                            (s = !!a))
                          : !k && x[i] && x[i].isNull && (d = E = T),
                        typeof d < "u" &&
                          (C.push({
                            plotX: h,
                            plotY: null === d ? S : p.getThreshold(d),
                            isNull: s,
                            isCliff: !0,
                          }),
                          v.push({
                            plotX: h,
                            plotY: null === E ? S : p.getThreshold(E),
                            doCurve: !1,
                          }));
                    };
                    let h;
                    (x = x || this.points), k && (x = this.getStackPoints(x));
                    for (let g = 0, i = x.length; g < i; ++g) {
                      k ||
                        (x[g].leftCliff =
                          x[g].rightCliff =
                          x[g].leftNull =
                          x[g].rightNull =
                            void 0);
                      var m = x[g].isNull;
                      h = I(x[g].rectPlotX, x[g].plotX);
                      var c = k ? I(x[g].yBottom, S) : S;
                      (!m || P) &&
                        (P || l(g, g - 1, "left"),
                        (m && !k && P) ||
                          (C.push(x[g]), v.push({ x: g, plotX: h, plotY: c })),
                        P || l(g, g + 1, "right"));
                    }
                    return (
                      (l = y.call(this, C, !0, !0)),
                      (v.reversed = !0),
                      (c = (m = y.call(this, v, !0, !0))[0]) &&
                        "M" === c[0] &&
                        (m[0] = ["L", c[1], c[2]]),
                      (m = l.concat(m)).length && m.push(["Z"]),
                      (y = y.call(this, C, !1, P)),
                      (m.xMap = l.xMap),
                      (this.areaPath = m),
                      y
                    );
                  }
                  getStackPoints(x) {
                    const y = this,
                      P = [],
                      k = [],
                      p = this.xAxis,
                      v = this.yAxis,
                      C = v.stacking.stacks[this.stackKey],
                      u = {},
                      A = v.series,
                      T = A.length,
                      S = v.options.reversedStacks ? 1 : -1,
                      l = A.indexOf(y);
                    if (((x = x || this.points), this.options.stacking)) {
                      for (let m = 0; m < x.length; m++)
                        (x[m].leftNull = x[m].rightNull = void 0),
                          (u[x[m].x] = x[m]);
                      nt(C, function (m, c) {
                        null !== m.total && k.push(c);
                      }),
                        k.sort(function (m, c) {
                          return m - c;
                        });
                      const h = A.map((m) => m.visible);
                      k.forEach(function (m, c) {
                        let i,
                          e,
                          g = 0;
                        if (u[m] && !u[m].isNull)
                          P.push(u[m]),
                            [-1, 1].forEach(function (s) {
                              const a = 1 === s ? "rightNull" : "leftNull",
                                d = C[k[c + s]];
                              let E = 0;
                              if (d) {
                                let o = l;
                                for (; 0 <= o && o < T; ) {
                                  const M = A[o].index;
                                  (i = d.points[M]),
                                    i ||
                                      (M === y.index
                                        ? (u[m][a] = !0)
                                        : h[o] &&
                                          (e = C[m].points[M]) &&
                                          (E -= e[1] - e[0])),
                                    (o += S);
                                }
                              }
                              u[m][1 === s ? "rightCliff" : "leftCliff"] = E;
                            });
                        else {
                          let s = l;
                          for (; 0 <= s && s < T; ) {
                            if ((i = C[m].points[A[s].index])) {
                              g = i[1];
                              break;
                            }
                            s += S;
                          }
                          (g = I(g, 0)),
                            (g = v.translate(g, 0, 1, 0, 1)),
                            P.push({
                              isNull: !0,
                              plotX: p.translate(m, 0, 0, 0, 1),
                              x: m,
                              plotY: g,
                              yBottom: g,
                            });
                        }
                      });
                    }
                    return P;
                  }
                }
                return (
                  (H.defaultOptions = st(tt.defaultOptions, {
                    threshold: 0,
                    legendSymbol: "rectangle",
                  })),
                  et(H.prototype, { singleStacks: !1 }),
                  Y.registerSeriesType("area", H),
                  H
                );
              }
            ),
            ut(
              t,
              "Series/Spline/SplineSeries.js",
              [t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]],
              function (F, Y) {
                const { line: j } = F.seriesTypes,
                  { merge: tt, pick: et } = Y;
                class st extends j {
                  constructor() {
                    super(...arguments),
                      (this.points = this.options = this.data = void 0);
                  }
                  getPointSpline(I, H, N) {
                    const x = H.plotX || 0,
                      y = H.plotY || 0,
                      P = I[N - 1];
                    let k, p, v;
                    if (
                      ((N = I[N + 1]),
                      P &&
                        !P.isNull &&
                        !1 !== P.doCurve &&
                        !H.isCliff &&
                        N &&
                        !N.isNull &&
                        !1 !== N.doCurve &&
                        !H.isCliff)
                    ) {
                      var C = N.plotX || 0;
                      let u = 0;
                      (k = (1.5 * x + (P.plotX || 0)) / 2.5),
                        (p = (1.5 * y + (I = P.plotY || 0)) / 2.5),
                        (v = (1.5 * y + (N = N.plotY || 0)) / 2.5),
                        (C = (1.5 * x + C) / 2.5) !== k &&
                          (u = ((v - p) * (C - x)) / (C - k) + y - v),
                        (p += u),
                        (v += u),
                        p > I && p > y
                          ? ((p = Math.max(I, y)), (v = 2 * y - p))
                          : p < I &&
                            p < y &&
                            ((p = Math.min(I, y)), (v = 2 * y - p)),
                        v > N && v > y
                          ? ((v = Math.max(N, y)), (p = 2 * y - v))
                          : v < N &&
                            v < y &&
                            ((v = Math.min(N, y)), (p = 2 * y - v)),
                        (H.rightContX = C),
                        (H.rightContY = v);
                    }
                    return (
                      (H = [
                        "C",
                        et(P.rightContX, P.plotX, 0),
                        et(P.rightContY, P.plotY, 0),
                        et(k, x, 0),
                        et(p, y, 0),
                        x,
                        y,
                      ]),
                      (P.rightContX = P.rightContY = void 0),
                      H
                    );
                  }
                }
                return (
                  (st.defaultOptions = tt(j.defaultOptions)),
                  F.registerSeriesType("spline", st),
                  st
                );
              }
            ),
            ut(
              t,
              "Series/AreaSpline/AreaSplineSeries.js",
              [
                t["Series/Spline/SplineSeries.js"],
                t["Core/Series/SeriesRegistry.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j) {
                const {
                    area: tt,
                    area: { prototype: et },
                  } = Y.seriesTypes,
                  { extend: st, merge: nt } = j;
                class I extends F {
                  constructor() {
                    super(...arguments),
                      (this.options = this.points = this.data = void 0);
                  }
                }
                return (
                  (I.defaultOptions = nt(F.defaultOptions, tt.defaultOptions)),
                  st(I.prototype, {
                    getGraphPath: et.getGraphPath,
                    getStackPoints: et.getStackPoints,
                    drawGraph: et.drawGraph,
                  }),
                  Y.registerSeriesType("areaspline", I),
                  I
                );
              }
            ),
            ut(t, "Series/Column/ColumnSeriesDefaults.js", [], function () {
              return {
                borderRadius: 3,
                centerInCategory: !1,
                groupPadding: 0.2,
                marker: null,
                pointPadding: 0.1,
                minPointLength: 0,
                cropThreshold: 50,
                pointRange: null,
                states: {
                  hover: { halo: !1, brightness: 0.1 },
                  select: { color: "#cccccc", borderColor: "#000000" },
                },
                dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 },
                startFromThreshold: !0,
                stickyTracking: !1,
                tooltip: { distance: 6 },
                threshold: 0,
                borderColor: "#ffffff",
              };
            }),
            ut(
              t,
              "Series/Column/ColumnSeries.js",
              [
                t["Core/Animation/AnimationUtilities.js"],
                t["Core/Color/Color.js"],
                t["Series/Column/ColumnSeriesDefaults.js"],
                t["Core/Globals.js"],
                t["Core/Series/Series.js"],
                t["Core/Series/SeriesRegistry.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j, tt, et, st, nt) {
                const { animObject: I } = F,
                  { parse: H } = Y,
                  { hasTouch: N, noop: x } = tt,
                  {
                    clamp: y,
                    defined: P,
                    extend: k,
                    fireEvent: p,
                    isArray: v,
                    isNumber: C,
                    merge: u,
                    pick: A,
                    objectEach: T,
                  } = nt;
                class S extends et {
                  constructor() {
                    super(...arguments),
                      (this.points =
                        this.options =
                        this.group =
                        this.data =
                        this.borderWidth =
                          void 0);
                  }
                  animate(h) {
                    const m = this,
                      c = this.yAxis,
                      g = c.pos,
                      i = m.options,
                      e = this.chart.inverted,
                      s = {},
                      a = e ? "translateX" : "translateY";
                    let d;
                    h
                      ? ((s.scaleY = 0.001),
                        (h = y(c.toPixels(i.threshold), g, g + c.len)),
                        e ? (s.translateX = h - c.len) : (s.translateY = h),
                        m.clipBox && m.setClip(),
                        m.group.attr(s))
                      : ((d = Number(m.group.attr(a))),
                        m.group.animate(
                          { scaleY: 1 },
                          k(I(m.options.animation), {
                            step: function (E, o) {
                              m.group &&
                                ((s[a] = d + o.pos * (g - d)), m.group.attr(s));
                            },
                          })
                        ));
                  }
                  init(h, m) {
                    super.init.apply(this, arguments);
                    const c = this;
                    (h = c.chart).hasRendered &&
                      h.series.forEach(function (g) {
                        g.type === c.type && (g.isDirty = !0);
                      });
                  }
                  getColumnMetrics() {
                    const h = this;
                    var m = h.options;
                    const c = h.xAxis,
                      g = h.yAxis;
                    var i = c.options.reversedStacks;
                    i = (c.reversed && !i) || (!c.reversed && i);
                    const e = {};
                    let s,
                      a = 0;
                    !1 === m.grouping
                      ? (a = 1)
                      : h.chart.series.forEach(function (M) {
                          const Z = M.yAxis,
                            K = M.options;
                          let $;
                          M.type !== h.type ||
                            (!M.visible &&
                              h.chart.options.chart.ignoreHiddenSeries) ||
                            g.len !== Z.len ||
                            g.pos !== Z.pos ||
                            (K.stacking && "group" !== K.stacking
                              ? ((s = M.stackKey),
                                typeof e[s] > "u" && (e[s] = a++),
                                ($ = e[s]))
                              : !1 !== K.grouping && ($ = a++),
                            (M.columnIndex = $));
                        });
                    const d = Math.min(
                        Math.abs(c.transA) *
                          ((c.ordinal && c.ordinal.slope) ||
                            m.pointRange ||
                            c.closestPointRange ||
                            c.tickInterval ||
                            1),
                        c.len
                      ),
                      E = d * m.groupPadding,
                      o = (d - 2 * E) / (a || 1);
                    return (
                      (m = Math.min(
                        m.maxPointWidth || c.len,
                        A(m.pointWidth, o * (1 - 2 * m.pointPadding))
                      )),
                      (h.columnMetrics = {
                        width: m,
                        offset:
                          (o - m) / 2 +
                          (E +
                            ((h.columnIndex || 0) + (i ? 1 : 0)) * o -
                            d / 2) *
                            (i ? -1 : 1),
                        paddedWidth: o,
                        columnCount: a,
                      }),
                      h.columnMetrics
                    );
                  }
                  crispCol(h, m, c, g) {
                    var i = this.borderWidth,
                      e = -(i % 2 ? 0.5 : 0);
                    return (
                      (i = i % 2 ? 0.5 : 1),
                      this.options.crisp &&
                        ((c = Math.round(h + c) + e),
                        (c -= h = Math.round(h) + e)),
                      (g = Math.round(m + g) + i),
                      (e = 0.5 >= Math.abs(m) && 0.5 < g),
                      (g -= m = Math.round(m) + i),
                      e && g && (--m, (g += 1)),
                      { x: h, y: m, width: c, height: g }
                    );
                  }
                  adjustForMissingColumns(h, m, c, g) {
                    const i = this.options.stacking;
                    if (!c.isNull && 1 < g.columnCount) {
                      const e = this.yAxis.options.reversedStacks;
                      let s = 0,
                        a = e ? 0 : -g.columnCount;
                      T(
                        this.yAxis.stacking && this.yAxis.stacking.stacks,
                        (d) => {
                          if ("number" == typeof c.x) {
                            const E = d[c.x.toString()];
                            E &&
                              ((d = E.points[this.index]),
                              i
                                ? (d && (s = a),
                                  E.hasValidPoints && (e ? a++ : a--))
                                : v(d) &&
                                  ((d = Object.keys(E.points)
                                    .filter(
                                      (o) =>
                                        !o.match(",") &&
                                        E.points[o] &&
                                        1 < E.points[o].length
                                    )
                                    .map(parseFloat)
                                    .sort((o, M) => M - o)),
                                  (s = d.indexOf(this.index)),
                                  (a = d.length)));
                          }
                        }
                      ),
                        (h =
                          (c.plotX || 0) +
                          ((a - 1) * g.paddedWidth + m) / 2 -
                          m -
                          s * g.paddedWidth);
                    }
                    return h;
                  }
                  translate() {
                    const h = this,
                      m = h.chart,
                      c = h.options;
                    var g = (h.dense =
                      2 > h.closestPointRange * h.xAxis.transA);
                    g = h.borderWidth = A(c.borderWidth, g ? 0 : 1);
                    const i = h.xAxis,
                      e = h.yAxis,
                      s = c.threshold,
                      a = A(c.minPointLength, 5),
                      d = h.getColumnMetrics(),
                      E = d.width,
                      o = (h.pointXOffset = d.offset),
                      M = h.dataMin,
                      Z = h.dataMax;
                    let K = (h.barW = Math.max(E, 1 + 2 * g)),
                      $ = (h.translatedThreshold = e.getThreshold(s));
                    m.inverted && ($ -= 0.5),
                      c.pointPadding && (K = Math.ceil(K)),
                      et.prototype.translate.apply(h),
                      h.points.forEach(function (L) {
                        const n = A(L.yBottom, $);
                        var z = 999 + Math.abs(n),
                          b = L.plotX || 0;
                        z = y(L.plotY, -z, e.len + z);
                        let D = Math.min(z, n),
                          J = Math.max(z, n) - D,
                          r = E,
                          f = b + o,
                          _ = K;
                        a &&
                          Math.abs(J) < a &&
                          ((J = a),
                          (b =
                            (!e.reversed && !L.negative) ||
                            (e.reversed && L.negative)),
                          C(s) &&
                            C(Z) &&
                            L.y === s &&
                            Z <= s &&
                            (e.min || 0) < s &&
                            (M !== Z || (e.max || 0) <= s) &&
                            ((b = !b), (L.negative = !L.negative)),
                          (D = Math.abs(D - $) > a ? n - a : $ - (b ? a : 0))),
                          P(L.options.pointWidth) &&
                            ((r = _ = Math.ceil(L.options.pointWidth)),
                            (f -= Math.round((r - E) / 2))),
                          c.centerInCategory &&
                            (f = h.adjustForMissingColumns(f, r, L, d)),
                          (L.barX = f),
                          (L.pointWidth = r),
                          (L.tooltipPos = m.inverted
                            ? [
                                y(
                                  e.len + e.pos - m.plotLeft - z,
                                  e.pos - m.plotLeft,
                                  e.len + e.pos - m.plotLeft
                                ),
                                i.len + i.pos - m.plotTop - f - _ / 2,
                                J,
                              ]
                            : [
                                i.left - m.plotLeft + f + _ / 2,
                                y(
                                  z + e.pos - m.plotTop,
                                  e.pos - m.plotTop,
                                  e.len + e.pos - m.plotTop
                                ),
                                J,
                              ]),
                          (L.shapeType =
                            h.pointClass.prototype.shapeType || "roundedRect"),
                          (L.shapeArgs = h.crispCol(
                            f,
                            L.isNull ? $ : D,
                            _,
                            L.isNull ? 0 : J
                          ));
                      }),
                      p(this, "afterColumnTranslate");
                  }
                  drawGraph() {
                    this.group[this.dense ? "addClass" : "removeClass"](
                      "highcharts-dense-data"
                    );
                  }
                  pointAttribs(h, m) {
                    const c = this.options;
                    var g = this.pointAttrToOptions || {},
                      i = g.stroke || "borderColor";
                    const e = g["stroke-width"] || "borderWidth";
                    let s,
                      a = (h && h.color) || this.color,
                      d = (h && h[i]) || c[i] || a;
                    g = (h && h.options.dashStyle) || c.dashStyle;
                    let E = (h && h[e]) || c[e] || this[e] || 0,
                      o = A(h && h.opacity, c.opacity, 1);
                    return (
                      h &&
                        this.zones.length &&
                        ((s = h.getZone()),
                        (a =
                          h.options.color ||
                          (s && (s.color || h.nonZonedColor)) ||
                          this.color),
                        s &&
                          ((d = s.borderColor || d),
                          (g = s.dashStyle || g),
                          (E = s.borderWidth || E))),
                      m &&
                        h &&
                        ((m = (h = u(
                          c.states[m],
                          (h.options.states && h.options.states[m]) || {}
                        )).brightness),
                        (a =
                          h.color ||
                          (typeof m < "u" &&
                            H(a).brighten(h.brightness).get()) ||
                          a),
                        (d = h[i] || d),
                        (E = h[e] || E),
                        (g = h.dashStyle || g),
                        (o = A(h.opacity, o))),
                      (i = {
                        fill: a,
                        stroke: d,
                        "stroke-width": E,
                        opacity: o,
                      }),
                      g && (i.dashstyle = g),
                      i
                    );
                  }
                  drawPoints(h = this.points) {
                    const m = this,
                      c = this.chart,
                      g = m.options,
                      i = c.renderer,
                      e = g.animationLimit || 250;
                    let s;
                    h.forEach(function (a) {
                      let d = a.graphic,
                        E = !!d,
                        o = d && c.pointCount < e ? "animate" : "attr";
                      C(a.plotY) && null !== a.y
                        ? ((s = a.shapeArgs),
                          d && a.hasNewShapeType() && (d = d.destroy()),
                          m.enabledDataSorting &&
                            (a.startXPos = m.xAxis.reversed
                              ? -((s && s.width) || 0)
                              : m.xAxis.width),
                          d ||
                            ((a.graphic = d =
                              i[a.shapeType](s).add(a.group || m.group)) &&
                              m.enabledDataSorting &&
                              c.hasRendered &&
                              c.pointCount < e &&
                              (d.attr({ x: a.startXPos }),
                              (E = !0),
                              (o = "animate"))),
                          d && E && d[o](u(s)),
                          c.styledMode ||
                            d[o](
                              m.pointAttribs(a, a.selected && "select")
                            ).shadow(!1 !== a.allowShadow && g.shadow),
                          d &&
                            (d.addClass(a.getClassName(), !0),
                            d.attr({
                              visibility: a.visible ? "inherit" : "hidden",
                            })))
                        : d && (a.graphic = d.destroy());
                    });
                  }
                  drawTracker(h = this.points) {
                    const m = this,
                      c = m.chart,
                      g = c.pointer,
                      i = function (s) {
                        const a = g.getPointFromEvent(s);
                        typeof a < "u" &&
                          m.options.enableMouseTracking &&
                          ((g.isDirectTouch = !0), a.onMouseOver(s));
                      };
                    let e;
                    h.forEach(function (s) {
                      (e = v(s.dataLabels)
                        ? s.dataLabels
                        : s.dataLabel
                        ? [s.dataLabel]
                        : []),
                        s.graphic && (s.graphic.element.point = s),
                        e.forEach(function (a) {
                          a.div ? (a.div.point = s) : (a.element.point = s);
                        });
                    }),
                      m._hasTracking ||
                        (m.trackerGroups.forEach(function (s) {
                          m[s] &&
                            (m[s]
                              .addClass("highcharts-tracker")
                              .on("mouseover", i)
                              .on("mouseout", function (a) {
                                g.onTrackerMouseOut(a);
                              }),
                            N && m[s].on("touchstart", i),
                            !c.styledMode &&
                              m.options.cursor &&
                              m[s].css({ cursor: m.options.cursor }));
                        }),
                        (m._hasTracking = !0)),
                      p(this, "afterDrawTracker");
                  }
                  remove() {
                    const h = this,
                      m = h.chart;
                    m.hasRendered &&
                      m.series.forEach(function (c) {
                        c.type === h.type && (c.isDirty = !0);
                      }),
                      et.prototype.remove.apply(h, arguments);
                  }
                }
                return (
                  (S.defaultOptions = u(et.defaultOptions, j)),
                  k(S.prototype, {
                    cropShoulder: 0,
                    directTouch: !0,
                    getSymbol: x,
                    negStacks: !0,
                    trackerGroups: ["group", "dataLabelsGroup"],
                  }),
                  st.registerSeriesType("column", S),
                  S
                );
              }
            ),
            ut(
              t,
              "Core/Series/DataLabel.js",
              [
                t["Core/Animation/AnimationUtilities.js"],
                t["Core/Templating.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j) {
                const { getDeferredAnimation: tt } = F,
                  { format: et } = Y,
                  {
                    defined: st,
                    extend: nt,
                    fireEvent: I,
                    isArray: H,
                    isString: N,
                    merge: x,
                    objectEach: y,
                    pick: P,
                    splat: k,
                  } = j;
                var p;
                return (
                  (function (v) {
                    function C(g, i, e, s, a) {
                      const d = this.chart;
                      var E = this.isCartesian && d.inverted;
                      const o = this.enabledDataSorting;
                      var M = g.plotX,
                        Z = g.plotY;
                      const K = e.rotation;
                      var $ = e.align;
                      Z =
                        st(M) &&
                        st(Z) &&
                        d.isInsidePlot(M, Math.round(Z), {
                          inverted: E,
                          paneCoordinates: !0,
                          series: this,
                        });
                      let L =
                        "justify" === P(e.overflow, o ? "none" : "justify");
                      if (
                        ((E =
                          this.visible &&
                          !1 !== g.visible &&
                          st(M) &&
                          (g.series.forceDL ||
                            (o && !L) ||
                            Z ||
                            (P(e.inside, !!this.options.stacking) &&
                              s &&
                              d.isInsidePlot(
                                M,
                                E ? s.x + 1 : s.y + s.height - 1,
                                {
                                  inverted: E,
                                  paneCoordinates: !0,
                                  series: this,
                                }
                              )))),
                        (M = g.pos()),
                        E && M)
                      ) {
                        K && i.attr({ align: $ }), ($ = i.getBBox(!0));
                        var n = [0, 0],
                          z = d.renderer.fontMetrics(i).b;
                        if (
                          ((s = nt(
                            {
                              x: M[0],
                              y: Math.round(M[1]),
                              width: 0,
                              height: 0,
                            },
                            s
                          )),
                          nt(e, { width: $.width, height: $.height }),
                          K
                            ? ((L = !1),
                              (n = d.renderer.rotCorr(z, K)),
                              (z = {
                                x: s.x + (e.x || 0) + s.width / 2 + n.x,
                                y:
                                  s.y +
                                  (e.y || 0) +
                                  { top: 0, middle: 0.5, bottom: 1 }[
                                    e.verticalAlign
                                  ] *
                                    s.height,
                              }),
                              (n = [
                                $.x - Number(i.attr("x")),
                                $.y - Number(i.attr("y")),
                              ]),
                              o &&
                                this.xAxis &&
                                !L &&
                                this.setDataLabelStartPos(g, i, a, Z, z),
                              i[a ? "attr" : "animate"](z))
                            : (o &&
                                this.xAxis &&
                                !L &&
                                this.setDataLabelStartPos(g, i, a, Z, s),
                              i.align(e, void 0, s),
                              (z = i.alignAttr)),
                          L && 0 <= s.height)
                        )
                          this.justifyDataLabel(i, e, z, $, s, a);
                        else if (P(e.crop, !0)) {
                          let { x: b, y: D } = z;
                          (b += n[0]),
                            (D += n[1]),
                            (E =
                              d.isInsidePlot(b, D, {
                                paneCoordinates: !0,
                                series: this,
                              }) &&
                              d.isInsidePlot(b + $.width, D + $.height, {
                                paneCoordinates: !0,
                                series: this,
                              }));
                        }
                        e.shape &&
                          !K &&
                          i[a ? "attr" : "animate"]({
                            anchorX: M[0],
                            anchorY: M[1],
                          });
                      }
                      a && o && (i.placed = !1),
                        E || (o && !L) ? i.show() : (i.hide(), (i.placed = !1));
                    }
                    function A() {
                      return this.plotGroup(
                        "dataLabelsGroup",
                        "data-labels",
                        this.hasRendered ? "inherit" : "hidden",
                        this.options.dataLabels.zIndex || 6
                      );
                    }
                    function T(g) {
                      const i = this.hasRendered || 0,
                        e = this.initDataLabelsGroup().attr({ opacity: +i });
                      return (
                        !i &&
                          e &&
                          (this.visible && e.show(),
                          this.options.animation
                            ? e.animate({ opacity: 1 }, g)
                            : e.attr({ opacity: 1 })),
                        e
                      );
                    }
                    function S(g = this.points) {
                      var i, e;
                      const s = this,
                        a = s.chart,
                        d = s.options,
                        E = a.renderer,
                        { backgroundColor: o, plotBackgroundColor: M } =
                          a.options.chart,
                        Z = a.options.plotOptions,
                        K = E.getContrast(
                          (N(M) && M) || (N(o) && o) || "#000000"
                        );
                      let L,
                        n,
                        $ = d.dataLabels;
                      var z = k($)[0];
                      (z = z.defer
                        ? tt(a, z.animation, s)
                        : { defer: 0, duration: 0 }),
                        ($ = h(
                          h(
                            null === (i = Z?.series) || void 0 === i
                              ? void 0
                              : i.dataLabels,
                            null === (e = Z?.[s.type]) || void 0 === e
                              ? void 0
                              : e.dataLabels
                          ),
                          $
                        )),
                        I(this, "drawDataLabels"),
                        (H($) || $.enabled || s._hasPointLabels) &&
                          ((n = this.initDataLabels(z)),
                          g.forEach((D) => {
                            var J;
                            const r = D.dataLabels || [];
                            for (
                              L = k(
                                h(
                                  $,
                                  D.dlOptions ||
                                    (null === (J = D.options) || void 0 === J
                                      ? void 0
                                      : J.dataLabels)
                                )
                              ),
                                L.forEach((f, _) => {
                                  var B,
                                    W =
                                      f.enabled &&
                                      (!D.isNull || D.dataLabelOnNull) &&
                                      (function u(g, i) {
                                        var e = i.filter;
                                        return (
                                          !e ||
                                          ((i = e.operator),
                                          (g = g[e.property]),
                                          (e = e.value),
                                          (">" === i && g > e) ||
                                            ("<" === i && g < e) ||
                                            (">=" === i && g >= e) ||
                                            ("<=" === i && g <= e) ||
                                            ("==" === i && g == e) ||
                                            ("===" === i && g === e))
                                        );
                                      })(D, f);
                                  const R = D.connectors
                                      ? D.connectors[_]
                                      : D.connector,
                                    V = f.style || {};
                                  let q = {},
                                    it = r[_],
                                    lt = !it;
                                  const gt = P(f.distance, D.labelDistance);
                                  if (W) {
                                    var w = P(
                                        f[D.formatPrefix + "Format"],
                                        f.format
                                      ),
                                      O = D.getLabelConfig();
                                    if (
                                      ((O = st(w)
                                        ? et(w, O, a)
                                        : (
                                            f[D.formatPrefix + "Formatter"] ||
                                            f.formatter
                                          ).call(O, f)),
                                      (w = f.rotation),
                                      a.styledMode ||
                                        ((V.color = P(
                                          f.color,
                                          V.color,
                                          N(s.color) ? s.color : void 0,
                                          "#000000"
                                        )),
                                        "contrast" === V.color
                                          ? ((D.contrastColor = E.getContrast(
                                              D.color || s.color
                                            )),
                                            (V.color =
                                              (!st(gt) && f.inside) ||
                                              0 > (gt || 0) ||
                                              d.stacking
                                                ? D.contrastColor
                                                : K))
                                          : delete D.contrastColor,
                                        d.cursor && (V.cursor = d.cursor)),
                                      (q = {
                                        r: f.borderRadius || 0,
                                        rotation: w,
                                        padding: f.padding,
                                        zIndex: 1,
                                      }),
                                      !a.styledMode)
                                    ) {
                                      const {
                                        backgroundColor: Q,
                                        borderColor: G,
                                      } = f;
                                      (q.fill = "auto" === Q ? D.color : Q),
                                        (q.stroke = "auto" === G ? D.color : G),
                                        (q["stroke-width"] = f.borderWidth);
                                    }
                                    y(q, (Q, G) => {
                                      typeof Q > "u" && delete q[G];
                                    });
                                  }
                                  !it ||
                                    (W &&
                                      st(O) &&
                                      !!it.div == !!f.useHTML &&
                                      ((it.rotation && f.rotation) ||
                                        it.rotation === f.rotation)) ||
                                    ((it = void 0),
                                    (lt = !0),
                                    R &&
                                      D.connector &&
                                      ((D.connector = D.connector.destroy()),
                                      D.connectors &&
                                        (1 === D.connectors.length
                                          ? delete D.connectors
                                          : delete D.connectors[_]))),
                                    W &&
                                      st(O) &&
                                      (it
                                        ? (q.text = O)
                                        : (it = w
                                            ? E.text(
                                                O,
                                                0,
                                                0,
                                                f.useHTML
                                              ).addClass(
                                                "highcharts-data-label"
                                              )
                                            : E.label(
                                                O,
                                                0,
                                                0,
                                                f.shape,
                                                void 0,
                                                void 0,
                                                f.useHTML,
                                                void 0,
                                                "data-label"
                                              )) &&
                                          it.addClass(
                                            " highcharts-data-label-color-" +
                                              D.colorIndex +
                                              " " +
                                              (f.className || "") +
                                              (f.useHTML
                                                ? " highcharts-tracker"
                                                : "")
                                          ),
                                      it &&
                                        ((it.options = f),
                                        it.attr(q),
                                        a.styledMode ||
                                          it.css(V).shadow(f.shadow),
                                        (W =
                                          f[D.formatPrefix + "TextPath"] ||
                                          f.textPath) &&
                                          !f.useHTML &&
                                          (it.setTextPath(
                                            (null ===
                                              (B = D.getDataLabelPath) ||
                                            void 0 === B
                                              ? void 0
                                              : B.call(D, it)) || D.graphic,
                                            W
                                          ),
                                          D.dataLabelPath &&
                                            !W.enabled &&
                                            (D.dataLabelPath =
                                              D.dataLabelPath.destroy())),
                                        it.added || it.add(n),
                                        s.alignDataLabel(D, it, f, void 0, lt),
                                        (it.isActive = !0),
                                        r[_] && r[_] !== it && r[_].destroy(),
                                        (r[_] = it)));
                                }),
                                J = r.length;
                              J--;

                            )
                              r[J].isActive
                                ? (r[J].isActive = !1)
                                : (r[J].destroy(), r.splice(J, 1));
                            (D.dataLabel = r[0]), (D.dataLabels = r);
                          })),
                        I(this, "afterDrawDataLabels");
                    }
                    function l(g, i, e, s, a, d) {
                      const E = this.chart,
                        o = i.align,
                        M = i.verticalAlign,
                        Z = g.box ? 0 : g.padding || 0;
                      let L,
                        n,
                        { x: K = 0, y: $ = 0 } = i;
                      return (
                        (L = (e.x || 0) + Z),
                        0 > L &&
                          ("right" === o && 0 <= K
                            ? ((i.align = "left"), (i.inside = !0))
                            : (K -= L),
                          (n = !0)),
                        (L = (e.x || 0) + s.width - Z),
                        L > E.plotWidth &&
                          ("left" === o && 0 >= K
                            ? ((i.align = "right"), (i.inside = !0))
                            : (K += E.plotWidth - L),
                          (n = !0)),
                        (L = e.y + Z),
                        0 > L &&
                          ("bottom" === M && 0 <= $
                            ? ((i.verticalAlign = "top"), (i.inside = !0))
                            : ($ -= L),
                          (n = !0)),
                        (L = (e.y || 0) + s.height - Z),
                        L > E.plotHeight &&
                          ("top" === M && 0 >= $
                            ? ((i.verticalAlign = "bottom"), (i.inside = !0))
                            : ($ += E.plotHeight - L),
                          (n = !0)),
                        n &&
                          ((i.x = K),
                          (i.y = $),
                          (g.placed = !d),
                          g.align(i, void 0, a)),
                        n
                      );
                    }
                    function h(g, i) {
                      let s,
                        e = [];
                      if (H(g) && !H(i))
                        e = g.map(function (a) {
                          return x(a, i);
                        });
                      else if (H(i) && !H(g))
                        e = i.map(function (a) {
                          return x(g, a);
                        });
                      else if (H(g) || H(i)) {
                        if (H(g) && H(i))
                          for (s = Math.max(g.length, i.length); s--; )
                            e[s] = x(g[s], i[s]);
                      } else e = x(g, i);
                      return e;
                    }
                    function m(g, i, e, s, a) {
                      const d = this.chart,
                        E = d.inverted,
                        o = this.xAxis,
                        M = o.reversed,
                        Z = E ? i.height / 2 : i.width / 2;
                      (g = (g = g.pointWidth) ? g / 2 : 0),
                        (i.startXPos = E ? a.x : M ? -Z - g : o.width - Z + g),
                        (i.startYPos = E
                          ? M
                            ? this.yAxis.height - Z + g
                            : -Z - g
                          : a.y),
                        s
                          ? "hidden" === i.visibility &&
                            (i.show(),
                            i.attr({ opacity: 0 }).animate({ opacity: 1 }))
                          : i
                              .attr({ opacity: 1 })
                              .animate({ opacity: 0 }, void 0, i.hide),
                        d.hasRendered &&
                          (e && i.attr({ x: i.startXPos, y: i.startYPos }),
                          (i.placed = !0));
                    }
                    const c = [];
                    v.compose = function (g) {
                      j.pushUnique(c, g) &&
                        (((g = g.prototype).initDataLabelsGroup = A),
                        (g.initDataLabels = T),
                        (g.alignDataLabel = C),
                        (g.drawDataLabels = S),
                        (g.justifyDataLabel = l),
                        (g.setDataLabelStartPos = m));
                    };
                  })(p || (p = {})),
                  p
                );
              }
            ),
            ut(
              t,
              "Series/Column/ColumnDataLabel.js",
              [
                t["Core/Series/DataLabel.js"],
                t["Core/Series/SeriesRegistry.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j) {
                const { series: tt } = Y,
                  { merge: et, pick: st } = j;
                var nt;
                return (
                  (function (I) {
                    function H(x, y, P, k, p) {
                      let v = this.chart.inverted;
                      var C = x.series;
                      let u =
                        (C.xAxis ? C.xAxis.len : this.chart.plotSizeX) || 0;
                      var A = x.dlBox || x.shapeArgs;
                      let T = st(
                          x.below,
                          x.plotY >
                            st(
                              this.translatedThreshold,
                              (C =
                                (C.yAxis
                                  ? C.yAxis.len
                                  : this.chart.plotSizeY) || 0)
                            )
                        ),
                        S = st(P.inside, !!this.options.stacking);
                      A &&
                        (0 > (k = et(A)).y && ((k.height += k.y), (k.y = 0)),
                        0 < (A = k.y + k.height - C) &&
                          A < k.height &&
                          (k.height -= A),
                        v &&
                          (k = {
                            x: C - k.y - k.height,
                            y: u - k.x - k.width,
                            width: k.height,
                            height: k.width,
                          }),
                        S ||
                          (v
                            ? ((k.x += T ? 0 : k.width), (k.width = 0))
                            : ((k.y += T ? k.height : 0), (k.height = 0)))),
                        (P.align = st(
                          P.align,
                          !v || S ? "center" : T ? "right" : "left"
                        )),
                        (P.verticalAlign = st(
                          P.verticalAlign,
                          v || S ? "middle" : T ? "top" : "bottom"
                        )),
                        tt.prototype.alignDataLabel.call(this, x, y, P, k, p),
                        P.inside &&
                          x.contrastColor &&
                          y.css({ color: x.contrastColor });
                    }
                    const N = [];
                    I.compose = function (x) {
                      F.compose(tt),
                        j.pushUnique(N, x) && (x.prototype.alignDataLabel = H);
                    };
                  })(nt || (nt = {})),
                  nt
                );
              }
            ),
            ut(
              t,
              "Series/Bar/BarSeries.js",
              [
                t["Series/Column/ColumnSeries.js"],
                t["Core/Series/SeriesRegistry.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j) {
                const { extend: tt, merge: et } = j;
                class st extends F {
                  constructor() {
                    super(...arguments),
                      (this.points = this.options = this.data = void 0);
                  }
                }
                return (
                  (st.defaultOptions = et(F.defaultOptions, {})),
                  tt(st.prototype, { inverted: !0 }),
                  Y.registerSeriesType("bar", st),
                  st
                );
              }
            ),
            ut(t, "Series/Scatter/ScatterSeriesDefaults.js", [], function () {
              return {
                lineWidth: 0,
                findNearestPointBy: "xy",
                jitter: { x: 0, y: 0 },
                marker: { enabled: !0 },
                tooltip: {
                  headerFormat:
                    '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 0.8em"> {series.name}</span><br/>',
                  pointFormat:
                    "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>",
                },
              };
            }),
            ut(
              t,
              "Series/Scatter/ScatterSeries.js",
              [
                t["Series/Scatter/ScatterSeriesDefaults.js"],
                t["Core/Series/SeriesRegistry.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j) {
                const { column: tt, line: et } = Y.seriesTypes,
                  { addEvent: st, extend: nt, merge: I } = j;
                class H extends et {
                  constructor() {
                    super(...arguments),
                      (this.points = this.options = this.data = void 0);
                  }
                  applyJitter() {
                    const x = this,
                      y = this.options.jitter,
                      P = this.points.length;
                    y &&
                      this.points.forEach(function (k, p) {
                        ["x", "y"].forEach(function (v, C) {
                          let A,
                            T,
                            u = "plot" + v.toUpperCase();
                          if (y[v] && !k.isNull) {
                            var S = x[v + "Axis"];
                            (T = y[v] * S.transA),
                              S &&
                                !S.isLog &&
                                ((A = Math.max(0, k[u] - T)),
                                (S = Math.min(S.len, k[u] + T)),
                                (C = 1e4 * Math.sin(p + C * P)),
                                (C -= Math.floor(C)),
                                (k[u] = A + (S - A) * C),
                                "x" === v && (k.clientX = k.plotX));
                          }
                        });
                      });
                  }
                  drawGraph() {
                    this.options.lineWidth
                      ? super.drawGraph()
                      : this.graph && (this.graph = this.graph.destroy());
                  }
                }
                return (
                  (H.defaultOptions = I(et.defaultOptions, F)),
                  nt(H.prototype, {
                    drawTracker: tt.prototype.drawTracker,
                    sorted: !1,
                    requireSorting: !1,
                    noSharedTooltip: !0,
                    trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
                    takeOrdinalPosition: !1,
                  }),
                  st(H, "afterTranslate", function () {
                    this.applyJitter();
                  }),
                  Y.registerSeriesType("scatter", H),
                  H
                );
              }
            ),
            ut(
              t,
              "Series/CenteredUtilities.js",
              [
                t["Core/Globals.js"],
                t["Core/Series/Series.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j) {
                const { deg2rad: tt } = F,
                  {
                    fireEvent: et,
                    isNumber: st,
                    pick: nt,
                    relativeLength: I,
                  } = j;
                var H = (function (N) {
                  return (
                    (N.getCenter = function () {
                      var x = this.options,
                        y = this.chart;
                      const P = 2 * (x.slicedOffset || 0),
                        k = y.plotWidth - 2 * P,
                        p = y.plotHeight - 2 * P;
                      var v = x.center;
                      const C = Math.min(k, p),
                        u = x.thickness;
                      var A = x.size;
                      let T = x.innerSize || 0;
                      for (
                        "string" == typeof A && (A = parseFloat(A)),
                          "string" == typeof T && (T = parseFloat(T)),
                          x = [
                            nt(v[0], "50%"),
                            nt(v[1], "50%"),
                            nt(A && 0 > A ? void 0 : x.size, "100%"),
                            nt(T && 0 > T ? void 0 : x.innerSize || 0, "0%"),
                          ],
                          !y.angular || this instanceof Y || (x[3] = 0),
                          v = 0;
                        4 > v;
                        ++v
                      )
                        (A = x[v]),
                          (y = 2 > v || (2 === v && /%$/.test(A))),
                          (x[v] = I(A, [k, p, C, x[2]][v]) + (y ? P : 0));
                      return (
                        x[3] > x[2] && (x[3] = x[2]),
                        st(u) && 2 * u < x[2] && 0 < u && (x[3] = x[2] - 2 * u),
                        et(this, "afterGetCenter", { positions: x }),
                        x
                      );
                    }),
                    (N.getStartAndEndRadians = function (x, y) {
                      return (
                        (x = st(x) ? x : 0),
                        (y = st(y) && y > x && 360 > y - x ? y : x + 360),
                        { start: tt * (x + -90), end: tt * (y + -90) }
                      );
                    }),
                    N
                  );
                })(H || {});
                return H;
              }
            ),
            ut(
              t,
              "Series/Pie/PiePoint.js",
              [
                t["Core/Animation/AnimationUtilities.js"],
                t["Core/Series/Point.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j) {
                const { setAnimation: tt } = F,
                  {
                    addEvent: et,
                    defined: st,
                    extend: nt,
                    isNumber: I,
                    pick: H,
                    relativeLength: N,
                  } = j;
                class x extends Y {
                  constructor() {
                    super(...arguments),
                      (this.series =
                        this.options =
                        this.labelDistance =
                          void 0);
                  }
                  getConnectorPath() {
                    const P = this.labelPosition,
                      k = this.series.options.dataLabels,
                      p = this.connectorShapes;
                    let v = k.connectorShape;
                    return (
                      p[v] && (v = p[v]),
                      v.call(
                        this,
                        {
                          x: P.computed.x,
                          y: P.computed.y,
                          alignment: P.alignment,
                        },
                        P.connectorPosition,
                        k
                      )
                    );
                  }
                  getTranslate() {
                    return this.sliced
                      ? this.slicedTranslation
                      : { translateX: 0, translateY: 0 };
                  }
                  haloPath(P) {
                    const k = this.shapeArgs;
                    return this.sliced || !this.visible
                      ? []
                      : this.series.chart.renderer.symbols.arc(
                          k.x,
                          k.y,
                          k.r + P,
                          k.r + P,
                          {
                            innerR: k.r - 1,
                            start: k.start,
                            end: k.end,
                            borderRadius: k.borderRadius,
                          }
                        );
                  }
                  init() {
                    super.init.apply(this, arguments),
                      (this.name = H(this.name, "Slice"));
                    const P = (k) => {
                      this.slice("select" === k.type);
                    };
                    return et(this, "select", P), et(this, "unselect", P), this;
                  }
                  isValid() {
                    return I(this.y) && 0 <= this.y;
                  }
                  setVisible(P, k) {
                    const p = this.series,
                      v = p.chart,
                      C = p.options.ignoreHiddenPoint;
                    (k = H(k, C)),
                      P !== this.visible &&
                        ((this.visible =
                          this.options.visible =
                          P =
                            typeof P > "u" ? !this.visible : P),
                        (p.options.data[p.data.indexOf(this)] = this.options),
                        ["graphic", "dataLabel", "connector"].forEach((u) => {
                          this[u] && this[u][P ? "show" : "hide"](P);
                        }),
                        this.legendItem && v.legend.colorizeItem(this, P),
                        P || "hover" !== this.state || this.setState(""),
                        C && (p.isDirty = !0),
                        k && v.redraw());
                  }
                  slice(P, k, p) {
                    const v = this.series;
                    tt(p, v.chart),
                      H(k, !0),
                      (this.sliced = this.options.sliced =
                        st(P) ? P : !this.sliced),
                      (v.options.data[v.data.indexOf(this)] = this.options),
                      this.graphic && this.graphic.animate(this.getTranslate());
                  }
                }
                return (
                  nt(x.prototype, {
                    connectorShapes: {
                      fixedOffset: function (y, P, k) {
                        const p = P.breakAt;
                        return (
                          (P = P.touchingSliceAt),
                          [
                            ["M", y.x, y.y],
                            k.softConnector
                              ? [
                                  "C",
                                  y.x + ("left" === y.alignment ? -5 : 5),
                                  y.y,
                                  2 * p.x - P.x,
                                  2 * p.y - P.y,
                                  p.x,
                                  p.y,
                                ]
                              : ["L", p.x, p.y],
                            ["L", P.x, P.y],
                          ]
                        );
                      },
                      straight: function (y, P) {
                        return [
                          ["M", y.x, y.y],
                          ["L", (P = P.touchingSliceAt).x, P.y],
                        ];
                      },
                      crookedLine: function (y, P, k) {
                        const { breakAt: p, touchingSliceAt: v } = P;
                        ({ series: P } = this);
                        const [C, u, A] = P.center,
                          T = A / 2,
                          S = P.chart.plotWidth,
                          l = P.chart.plotLeft;
                        P = "left" === y.alignment;
                        const { x: h, y: m } = y;
                        return (
                          k.crookDistance
                            ? ((y = N(k.crookDistance, 1)),
                              (y = P
                                ? C + T + (S + l - C - T) * (1 - y)
                                : l + (C - T) * y))
                            : (y =
                                C +
                                (u - m) *
                                  Math.tan((this.angle || 0) - Math.PI / 2)),
                          (k = [["M", h, m]]),
                          (P ? y <= h && y >= p.x : y >= h && y <= p.x) &&
                            k.push(["L", y, m]),
                          k.push(["L", p.x, p.y], ["L", v.x, v.y]),
                          k
                        );
                      },
                    },
                  }),
                  x
                );
              }
            ),
            ut(t, "Series/Pie/PieSeriesDefaults.js", [], function () {
              return {
                borderRadius: 3,
                center: [null, null],
                clip: !1,
                colorByPoint: !0,
                dataLabels: {
                  allowOverlap: !0,
                  connectorPadding: 5,
                  connectorShape: "crookedLine",
                  crookDistance: void 0,
                  distance: 30,
                  enabled: !0,
                  formatter: function () {
                    return this.point.isNull ? void 0 : this.point.name;
                  },
                  softConnector: !0,
                  x: 0,
                },
                fillColor: void 0,
                ignoreHiddenPoint: !0,
                inactiveOtherPoints: !0,
                legendType: "point",
                marker: null,
                size: null,
                showInLegend: !1,
                slicedOffset: 10,
                stickyTracking: !1,
                tooltip: { followPointer: !0 },
                borderColor: "#ffffff",
                borderWidth: 1,
                lineWidth: void 0,
                states: { hover: { brightness: 0.1 } },
              };
            }),
            ut(
              t,
              "Series/Pie/PieSeries.js",
              [
                t["Series/CenteredUtilities.js"],
                t["Series/Column/ColumnSeries.js"],
                t["Core/Globals.js"],
                t["Series/Pie/PiePoint.js"],
                t["Series/Pie/PieSeriesDefaults.js"],
                t["Core/Series/Series.js"],
                t["Core/Series/SeriesRegistry.js"],
                t["Core/Renderer/SVG/Symbols.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j, tt, et, st, nt, I, H) {
                const { getStartAndEndRadians: N } = F;
                ({ noop: j } = j);
                const {
                  clamp: x,
                  extend: y,
                  fireEvent: P,
                  merge: k,
                  pick: p,
                  relativeLength: v,
                } = H;
                class C extends st {
                  constructor() {
                    super(...arguments),
                      (this.points =
                        this.options =
                        this.maxLabelDistance =
                        this.data =
                        this.center =
                          void 0);
                  }
                  animate(A) {
                    const T = this,
                      l = T.startAngleRad;
                    A ||
                      T.points.forEach(function (h) {
                        const m = h.graphic,
                          c = h.shapeArgs;
                        m &&
                          c &&
                          (m.attr({
                            r: p(h.startR, T.center && T.center[3] / 2),
                            start: l,
                            end: l,
                          }),
                          m.animate(
                            { r: c.r, start: c.start, end: c.end },
                            T.options.animation
                          ));
                      });
                  }
                  drawEmpty() {
                    const A = this.startAngleRad,
                      T = this.endAngleRad,
                      S = this.options;
                    let l, h;
                    0 === this.total && this.center
                      ? ((l = this.center[0]),
                        (h = this.center[1]),
                        this.graph ||
                          (this.graph = this.chart.renderer
                            .arc(l, h, this.center[1] / 2, 0, A, T)
                            .addClass("highcharts-empty-series")
                            .add(this.group)),
                        this.graph.attr({
                          d: I.arc(l, h, this.center[2] / 2, 0, {
                            start: A,
                            end: T,
                            innerR: this.center[3] / 2,
                          }),
                        }),
                        this.chart.styledMode ||
                          this.graph.attr({
                            "stroke-width": S.borderWidth,
                            fill: S.fillColor || "none",
                            stroke: S.color || "#cccccc",
                          }))
                      : this.graph && (this.graph = this.graph.destroy());
                  }
                  drawPoints() {
                    const A = this.chart.renderer;
                    this.points.forEach(function (T) {
                      T.graphic &&
                        T.hasNewShapeType() &&
                        (T.graphic = T.graphic.destroy()),
                        T.graphic ||
                          ((T.graphic = A[T.shapeType](T.shapeArgs).add(
                            T.series.group
                          )),
                          (T.delayedRendering = !0));
                    });
                  }
                  generatePoints() {
                    super.generatePoints(), this.updateTotals();
                  }
                  getX(A, T, S) {
                    const l = this.center,
                      h = this.radii ? this.radii[S.index] || 0 : l[2] / 2;
                    return (
                      (A = Math.asin(
                        x((A - l[1]) / (h + S.labelDistance), -1, 1)
                      )),
                      l[0] +
                        (T ? -1 : 1) * Math.cos(A) * (h + S.labelDistance) +
                        (0 < S.labelDistance
                          ? (T ? -1 : 1) * this.options.dataLabels.padding
                          : 0)
                    );
                  }
                  hasData() {
                    return !!this.processedXData.length;
                  }
                  redrawPoints() {
                    const A = this,
                      T = A.chart;
                    let S, l, h, m;
                    this.drawEmpty(),
                      A.group &&
                        !T.styledMode &&
                        A.group.shadow(A.options.shadow),
                      A.points.forEach(function (c) {
                        const g = {};
                        (l = c.graphic),
                          !c.isNull && l
                            ? ((m = c.shapeArgs),
                              (S = c.getTranslate()),
                              T.styledMode ||
                                (h = A.pointAttribs(c, c.selected && "select")),
                              c.delayedRendering
                                ? (l
                                    .setRadialReference(A.center)
                                    .attr(m)
                                    .attr(S),
                                  T.styledMode ||
                                    l
                                      .attr(h)
                                      .attr({ "stroke-linejoin": "round" }),
                                  (c.delayedRendering = !1))
                                : (l.setRadialReference(A.center),
                                  T.styledMode || k(!0, g, h),
                                  k(!0, g, m, S),
                                  l.animate(g)),
                              l.attr({
                                visibility: c.visible ? "inherit" : "hidden",
                              }),
                              l.addClass(c.getClassName(), !0))
                            : l && (c.graphic = l.destroy());
                      });
                  }
                  sortByAngle(A, T) {
                    A.sort(function (S, l) {
                      return typeof S.angle < "u" && (l.angle - S.angle) * T;
                    });
                  }
                  translate(A) {
                    P(this, "translate"), this.generatePoints();
                    var T = this.options;
                    const S = T.slicedOffset,
                      l = S + (T.borderWidth || 0);
                    var h = N(T.startAngle, T.endAngle);
                    const m = (this.startAngleRad = h.start);
                    h = (this.endAngleRad = h.end) - m;
                    const c = this.points,
                      g = T.dataLabels.distance;
                    T = T.ignoreHiddenPoint;
                    const i = c.length;
                    let e,
                      s,
                      a,
                      d = 0;
                    for (
                      A || (this.center = A = this.getCenter()), s = 0;
                      s < i;
                      s++
                    ) {
                      a = c[s];
                      var E = m + d * h;
                      !a.isValid() ||
                        (T && !a.visible) ||
                        (d += a.percentage / 100);
                      var o = m + d * h,
                        M = {
                          x: A[0],
                          y: A[1],
                          r: A[2] / 2,
                          innerR: A[3] / 2,
                          start: Math.round(1e3 * E) / 1e3,
                          end: Math.round(1e3 * o) / 1e3,
                        };
                      (a.shapeType = "arc"),
                        (a.shapeArgs = M),
                        (a.labelDistance = p(
                          a.options.dataLabels && a.options.dataLabels.distance,
                          g
                        )),
                        (a.labelDistance = v(a.labelDistance, M.r)),
                        (this.maxLabelDistance = Math.max(
                          this.maxLabelDistance || 0,
                          a.labelDistance
                        )),
                        (o = (o + E) / 2) > 1.5 * Math.PI
                          ? (o -= 2 * Math.PI)
                          : o < -Math.PI / 2 && (o += 2 * Math.PI),
                        (a.slicedTranslation = {
                          translateX: Math.round(Math.cos(o) * S),
                          translateY: Math.round(Math.sin(o) * S),
                        }),
                        (M = (Math.cos(o) * A[2]) / 2),
                        (e = (Math.sin(o) * A[2]) / 2),
                        (a.tooltipPos = [A[0] + 0.7 * M, A[1] + 0.7 * e]),
                        (a.half = o < -Math.PI / 2 || o > Math.PI / 2 ? 1 : 0),
                        (a.angle = o),
                        (E = Math.min(l, a.labelDistance / 5)),
                        (a.labelPosition = {
                          natural: {
                            x: A[0] + M + Math.cos(o) * a.labelDistance,
                            y: A[1] + e + Math.sin(o) * a.labelDistance,
                          },
                          computed: {},
                          alignment:
                            0 > a.labelDistance
                              ? "center"
                              : a.half
                              ? "right"
                              : "left",
                          connectorPosition: {
                            breakAt: {
                              x: A[0] + M + Math.cos(o) * E,
                              y: A[1] + e + Math.sin(o) * E,
                            },
                            touchingSliceAt: { x: A[0] + M, y: A[1] + e },
                          },
                        });
                    }
                    P(this, "afterTranslate");
                  }
                  updateTotals() {
                    const A = this.points,
                      T = A.length,
                      S = this.options.ignoreHiddenPoint;
                    let l,
                      h,
                      m = 0;
                    for (l = 0; l < T; l++)
                      (h = A[l]),
                        !h.isValid() || (S && !h.visible) || (m += h.y);
                    for (this.total = m, l = 0; l < T; l++)
                      (h = A[l]),
                        (h.percentage =
                          0 < m && (h.visible || !S) ? (h.y / m) * 100 : 0),
                        (h.total = m);
                  }
                }
                return (
                  (C.defaultOptions = k(st.defaultOptions, et)),
                  y(C.prototype, {
                    axisTypes: [],
                    directTouch: !0,
                    drawGraph: void 0,
                    drawTracker: Y.prototype.drawTracker,
                    getCenter: F.getCenter,
                    getSymbol: j,
                    isCartesian: !1,
                    noSharedTooltip: !0,
                    pointAttribs: Y.prototype.pointAttribs,
                    pointClass: tt,
                    requireSorting: !1,
                    searchPoint: j,
                    trackerGroups: ["group", "dataLabelsGroup"],
                  }),
                  nt.registerSeriesType("pie", C),
                  C
                );
              }
            ),
            ut(
              t,
              "Series/Pie/PieDataLabel.js",
              [
                t["Core/Series/DataLabel.js"],
                t["Core/Globals.js"],
                t["Core/Renderer/RendererUtilities.js"],
                t["Core/Series/SeriesRegistry.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j, tt, et) {
                const { noop: st } = Y,
                  { distribute: nt } = j,
                  { series: I } = tt,
                  {
                    arrayMax: H,
                    clamp: N,
                    defined: x,
                    merge: y,
                    pick: P,
                    relativeLength: k,
                  } = et;
                var p;
                return (
                  (function (v) {
                    function C() {
                      const l = this,
                        h = l.data,
                        m = l.chart,
                        c = l.options.dataLabels || {},
                        g = c.connectorPadding,
                        i = m.plotWidth,
                        e = m.plotHeight,
                        s = m.plotLeft,
                        a = Math.round(m.chartWidth / 3),
                        d = l.center,
                        E = d[2] / 2,
                        o = d[1],
                        M = [[], []],
                        Z = [0, 0, 0, 0],
                        K = l.dataLabelPositioners;
                      let $, L, n, z, b, D, J, r, f, _, B, W;
                      l.visible &&
                        (c.enabled || l._hasPointLabels) &&
                        (h.forEach(function (R) {
                          R.dataLabel &&
                            R.visible &&
                            R.dataLabel.shortened &&
                            (R.dataLabel
                              .attr({ width: "auto" })
                              .css({ width: "auto", textOverflow: "clip" }),
                            (R.dataLabel.shortened = !1));
                        }),
                        I.prototype.drawDataLabels.apply(l),
                        h.forEach(function (R) {
                          R.dataLabel &&
                            (R.visible
                              ? (M[R.half].push(R),
                                (R.dataLabel._pos = null),
                                !x(c.style.width) &&
                                  !x(
                                    R.options.dataLabels &&
                                      R.options.dataLabels.style &&
                                      R.options.dataLabels.style.width
                                  ) &&
                                  R.dataLabel.getBBox().width > a &&
                                  (R.dataLabel.css({
                                    width: Math.round(0.7 * a) + "px",
                                  }),
                                  (R.dataLabel.shortened = !0)))
                              : ((R.dataLabel = R.dataLabel.destroy()),
                                R.dataLabels &&
                                  1 === R.dataLabels.length &&
                                  delete R.dataLabels));
                        }),
                        M.forEach((R, V) => {
                          const q = R.length,
                            it = [];
                          let lt,
                            gt = 0;
                          if (q) {
                            if (
                              (l.sortByAngle(R, V - 0.5),
                              0 < l.maxLabelDistance)
                            ) {
                              var w = Math.max(0, o - E - l.maxLabelDistance);
                              (lt = Math.min(
                                o + E + l.maxLabelDistance,
                                m.plotHeight
                              )),
                                R.forEach(function (O) {
                                  0 < O.labelDistance &&
                                    O.dataLabel &&
                                    ((O.top = Math.max(
                                      0,
                                      o - E - O.labelDistance
                                    )),
                                    (O.bottom = Math.min(
                                      o + E + O.labelDistance,
                                      m.plotHeight
                                    )),
                                    (gt = O.dataLabel.getBBox().height || 21),
                                    (O.distributeBox = {
                                      target:
                                        O.labelPosition.natural.y -
                                        O.top +
                                        gt / 2,
                                      size: gt,
                                      rank: O.y,
                                    }),
                                    it.push(O.distributeBox));
                                }),
                                nt(it, (w = lt + gt - w), w / 5);
                            }
                            for (B = 0; B < q; B++) {
                              if (
                                (($ = R[B]),
                                (D = $.labelPosition),
                                (z = $.dataLabel),
                                (_ = !1 === $.visible ? "hidden" : "inherit"),
                                (f = w = D.natural.y),
                                it &&
                                  x($.distributeBox) &&
                                  (typeof $.distributeBox.pos > "u"
                                    ? (_ = "hidden")
                                    : ((J = $.distributeBox.size),
                                      (f = K.radialDistributionY($)))),
                                delete $.positionIndex,
                                c.justify)
                              )
                                r = K.justify($, E, d);
                              else
                                switch (c.alignTo) {
                                  case "connectors":
                                    r = K.alignToConnectors(R, V, i, s);
                                    break;
                                  case "plotEdges":
                                    r = K.alignToPlotEdges(z, V, i, s);
                                    break;
                                  default:
                                    r = K.radialDistributionX(l, $, f, w);
                                }
                              (z._attr = { visibility: _, align: D.alignment }),
                                (W = $.options.dataLabels || {}),
                                (z._pos = {
                                  x:
                                    r +
                                    P(W.x, c.x) +
                                    ({ left: g, right: -g }[D.alignment] || 0),
                                  y: f + P(W.y, c.y) - z.getBBox().height / 2,
                                }),
                                D && ((D.computed.x = r), (D.computed.y = f)),
                                P(c.crop, !0) &&
                                  ((b = z.getBBox().width),
                                  (w = null),
                                  r - b < g && 1 === V
                                    ? ((w = Math.round(b - r + g)),
                                      (Z[3] = Math.max(w, Z[3])))
                                    : r + b > i - g &&
                                      0 === V &&
                                      ((w = Math.round(r + b - i + g)),
                                      (Z[1] = Math.max(w, Z[1]))),
                                  0 > f - J / 2
                                    ? (Z[0] = Math.max(
                                        Math.round(J / 2 - f),
                                        Z[0]
                                      ))
                                    : f + J / 2 > e &&
                                      (Z[2] = Math.max(
                                        Math.round(f + J / 2 - e),
                                        Z[2]
                                      )),
                                  (z.sideOverflow = w));
                            }
                          }
                        }),
                        0 === H(Z) || this.verifyDataLabelOverflow(Z)) &&
                        (this.placeDataLabels(),
                        this.points.forEach(function (R) {
                          if (
                            ((W = y(c, R.options.dataLabels)),
                            (L = P(W.connectorWidth, 1)))
                          ) {
                            let V;
                            (n = R.connector),
                              (z = R.dataLabel) &&
                              z._pos &&
                              R.visible &&
                              0 < R.labelDistance
                                ? ((_ = z._attr.visibility),
                                  (V = !n) &&
                                    ((R.connector = n =
                                      m.renderer
                                        .path()
                                        .addClass(
                                          "highcharts-data-label-connector  highcharts-color-" +
                                            R.colorIndex +
                                            (R.className
                                              ? " " + R.className
                                              : "")
                                        )
                                        .add(l.dataLabelsGroup)),
                                    m.styledMode ||
                                      n.attr({
                                        "stroke-width": L,
                                        stroke:
                                          W.connectorColor ||
                                          R.color ||
                                          "#666666",
                                      })),
                                  n[V ? "attr" : "animate"]({
                                    d: R.getConnectorPath(),
                                  }),
                                  n.attr("visibility", _))
                                : n && (R.connector = n.destroy());
                          }
                        }));
                    }
                    function u() {
                      this.points.forEach(function (l) {
                        let m,
                          h = l.dataLabel;
                        h &&
                          l.visible &&
                          ((m = h._pos)
                            ? (h.sideOverflow &&
                                ((h._attr.width = Math.max(
                                  h.getBBox().width - h.sideOverflow,
                                  0
                                )),
                                h.css({
                                  width: h._attr.width + "px",
                                  textOverflow:
                                    (this.options.dataLabels.style || {})
                                      .textOverflow || "ellipsis",
                                }),
                                (h.shortened = !0)),
                              h.attr(h._attr),
                              h[h.moved ? "animate" : "attr"](m),
                              (h.moved = !0))
                            : h && h.attr({ y: -9999 })),
                          delete l.distributeBox;
                      }, this);
                    }
                    function A(l) {
                      let i,
                        h = this.center,
                        m = this.options,
                        c = m.center,
                        g = m.minSize || 80,
                        e = null !== m.size;
                      return (
                        e ||
                          (null !== c[0]
                            ? (i = Math.max(h[2] - Math.max(l[1], l[3]), g))
                            : ((i = Math.max(h[2] - l[1] - l[3], g)),
                              (h[0] += (l[3] - l[1]) / 2)),
                          null !== c[1]
                            ? (i = N(i, g, h[2] - Math.max(l[0], l[2])))
                            : ((i = N(i, g, h[2] - l[0] - l[2])),
                              (h[1] += (l[0] - l[2]) / 2)),
                          i < h[2]
                            ? ((h[2] = i),
                              (h[3] = Math.min(
                                m.thickness
                                  ? Math.max(0, i - 2 * m.thickness)
                                  : Math.max(0, k(m.innerSize || 0, i)),
                                i
                              )),
                              this.translate(h),
                              this.drawDataLabels && this.drawDataLabels())
                            : (e = !0)),
                        e
                      );
                    }
                    const T = [],
                      S = {
                        radialDistributionY: function (l) {
                          return l.top + l.distributeBox.pos;
                        },
                        radialDistributionX: function (l, h, m, c) {
                          return l.getX(
                            m < h.top + 2 || m > h.bottom - 2 ? c : m,
                            h.half,
                            h
                          );
                        },
                        justify: function (l, h, m) {
                          return (
                            m[0] + (l.half ? -1 : 1) * (h + l.labelDistance)
                          );
                        },
                        alignToPlotEdges: function (l, h, m, c) {
                          return (l = l.getBBox().width), h ? l + c : m - l - c;
                        },
                        alignToConnectors: function (l, h, m, c) {
                          let i,
                            g = 0;
                          return (
                            l.forEach(function (e) {
                              (i = e.dataLabel.getBBox().width),
                                i > g && (g = i);
                            }),
                            h ? g + c : m - g - c
                          );
                        },
                      };
                    v.compose = function (l) {
                      F.compose(I),
                        et.pushUnique(T, l) &&
                          (((l = l.prototype).dataLabelPositioners = S),
                          (l.alignDataLabel = st),
                          (l.drawDataLabels = C),
                          (l.placeDataLabels = u),
                          (l.verifyDataLabelOverflow = A));
                    };
                  })(p || (p = {})),
                  p
                );
              }
            ),
            ut(
              t,
              "Extensions/OverlappingDataLabels.js",
              [t["Core/Chart/Chart.js"], t["Core/Utilities.js"]],
              function (F, Y) {
                function j(N, x) {
                  let y,
                    P = !1;
                  return (
                    N &&
                      ((y = N.newOpacity),
                      N.oldOpacity !== y &&
                        (N.alignAttr && N.placed
                          ? (N[y ? "removeClass" : "addClass"](
                              "highcharts-data-label-hidden"
                            ),
                            (P = !0),
                            (N.alignAttr.opacity = y),
                            N[N.isOld ? "animate" : "attr"](
                              N.alignAttr,
                              null,
                              function () {
                                x.styledMode ||
                                  N.css({ pointerEvents: y ? "auto" : "none" });
                              }
                            ),
                            et(x, "afterHideOverlappingLabel"))
                          : N.attr({ opacity: y })),
                      (N.isOld = !0)),
                    P
                  );
                }
                const {
                  addEvent: tt,
                  fireEvent: et,
                  isArray: st,
                  isNumber: nt,
                  objectEach: I,
                  pick: H,
                } = Y;
                tt(F, "render", function () {
                  let N = this,
                    x = [];
                  (this.labelCollectors || []).forEach(function (y) {
                    x = x.concat(y());
                  }),
                    (this.yAxis || []).forEach(function (y) {
                      y.stacking &&
                        y.options.stackLabels &&
                        !y.options.stackLabels.allowOverlap &&
                        I(y.stacking.stacks, function (P) {
                          I(P, function (k) {
                            k.label && x.push(k.label);
                          });
                        });
                    }),
                    (this.series || []).forEach(function (y) {
                      var P = y.options.dataLabels;
                      y.visible &&
                        (!1 !== P.enabled || y._hasPointLabels) &&
                        ((P = (k) =>
                          k.forEach((p) => {
                            p.visible &&
                              (st(p.dataLabels)
                                ? p.dataLabels
                                : p.dataLabel
                                ? [p.dataLabel]
                                : []
                              ).forEach(function (v) {
                                const C = v.options;
                                (v.labelrank = H(
                                  C.labelrank,
                                  p.labelrank,
                                  p.shapeArgs && p.shapeArgs.height
                                )),
                                  C.allowOverlap
                                    ? ((v.oldOpacity = v.opacity),
                                      (v.newOpacity = 1),
                                      j(v, N))
                                    : x.push(v);
                              });
                          }))(y.nodes || []),
                        P(y.points));
                    }),
                    this.hideOverlappingLabels(x);
                }),
                  (F.prototype.hideOverlappingLabels = function (N) {
                    let x = this,
                      y = N.length,
                      P = x.renderer;
                    var k;
                    let p,
                      v,
                      C,
                      u,
                      A = !1;
                    var T = function (S) {
                      let l, h;
                      var m;
                      let i,
                        e,
                        c = S.box ? 0 : S.padding || 0,
                        g = (m = 0);
                      if (S && (!S.alignAttr || S.placed))
                        return (
                          (l = S.alignAttr || {
                            x: S.attr("x"),
                            y: S.attr("y"),
                          }),
                          (h = S.parentGroup),
                          S.width ||
                            ((m = S.getBBox()),
                            (S.width = m.width),
                            (S.height = m.height),
                            (m = P.fontMetrics(S.element).h)),
                          (i = S.width - 2 * c),
                          (e = { left: "0", center: "0.5", right: "1" }[
                            S.alignValue
                          ])
                            ? (g = +e * i)
                            : nt(S.x) &&
                              Math.round(S.x) !== S.translateX &&
                              (g = S.x - S.translateX),
                          {
                            x: l.x + (h.translateX || 0) + c - (g || 0),
                            y: l.y + (h.translateY || 0) + c - m,
                            width: S.width - 2 * c,
                            height: S.height - 2 * c,
                          }
                        );
                    };
                    for (p = 0; p < y; p++)
                      (k = N[p]) &&
                        ((k.oldOpacity = k.opacity),
                        (k.newOpacity = 1),
                        (k.absoluteBox = T(k)));
                    for (
                      N.sort(function (S, l) {
                        return (l.labelrank || 0) - (S.labelrank || 0);
                      }),
                        p = 0;
                      p < y;
                      p++
                    )
                      for (
                        C = (T = N[p]) && T.absoluteBox, k = p + 1;
                        k < y;
                        ++k
                      )
                        (u = (v = N[k]) && v.absoluteBox),
                          !C ||
                            !u ||
                            T === v ||
                            0 === T.newOpacity ||
                            0 === v.newOpacity ||
                            "hidden" === T.visibility ||
                            "hidden" === v.visibility ||
                            u.x >= C.x + C.width ||
                            u.x + u.width <= C.x ||
                            u.y >= C.y + C.height ||
                            u.y + u.height <= C.y ||
                            ((T.labelrank < v.labelrank
                              ? T
                              : v
                            ).newOpacity = 0);
                    N.forEach(function (S) {
                      j(S, x) && (A = !0);
                    }),
                      A && et(x, "afterHideAllOverlappingLabels");
                  });
              }
            ),
            ut(
              t,
              "Extensions/BorderRadius.js",
              [
                t["Core/Defaults.js"],
                t["Core/Series/Series.js"],
                t["Core/Series/SeriesRegistry.js"],
                t["Core/Renderer/SVG/SVGElement.js"],
                t["Core/Renderer/SVG/SVGRenderer.js"],
                t["Core/Utilities.js"],
              ],
              function (F, Y, j, tt, et, st) {
                const { defaultOptions: nt } = F;
                ({ seriesTypes: F } = j);
                const {
                    addEvent: I,
                    extend: H,
                    isObject: N,
                    merge: x,
                    relativeLength: y,
                  } = st,
                  P = { radius: 0, scope: "stack", where: void 0 },
                  k = (p, v) => (N(p) || (p = { radius: p || 0 }), x(P, v, p));
                if (-1 === tt.symbolCustomAttribs.indexOf("borderRadius")) {
                  tt.symbolCustomAttribs.push(
                    "borderRadius",
                    "brBoxHeight",
                    "brBoxY"
                  );
                  const p = et.prototype.symbols.arc;
                  et.prototype.symbols.arc = function (C, u, A, T, S = {}) {
                    C = p(C, u, A, T, S);
                    const {
                      innerR: l = 0,
                      r: h = A,
                      start: m = 0,
                      end: c = 0,
                    } = S;
                    if (S.open || !S.borderRadius) return C;
                    for (
                      A = c - m,
                        u = Math.sin(A / 2),
                        S = Math.max(
                          Math.min(
                            y(S.borderRadius || 0, h - l),
                            (h - l) / 2,
                            (h * u) / (1 + u)
                          ),
                          0
                        ),
                        A = Math.min(S, (A / Math.PI) * 2 * l),
                        u = C.length - 1;
                      u--;

                    ) {
                      let E, o, M;
                      var g = u,
                        i = 1 < u ? A : S,
                        e = (T = C)[g],
                        s = T[g + 1];
                      if (
                        ("Z" === s[0] && (s = T[0]),
                        ("M" !== e[0] && "L" !== e[0]) || "A" !== s[0]
                          ? "A" !== e[0] ||
                            ("M" !== s[0] && "L" !== s[0]) ||
                            ((M = s), (o = e))
                          : ((M = e), (o = s), (E = !0)),
                        M && o && o.params)
                      ) {
                        e = o[1];
                        var a = o[5];
                        s = o.params;
                        const { start: Z, end: K, cx: $, cy: L } = s;
                        var d = a ? e - i : e + i;
                        const n = d ? Math.asin(i / d) : 0;
                        (a = a ? n : -n),
                          (d *= Math.cos(n)),
                          E
                            ? ((s.start = Z + a),
                              (M[1] = $ + d * Math.cos(Z)),
                              (M[2] = L + d * Math.sin(Z)),
                              T.splice(g + 1, 0, [
                                "A",
                                i,
                                i,
                                0,
                                0,
                                1,
                                $ + e * Math.cos(s.start),
                                L + e * Math.sin(s.start),
                              ]))
                            : ((s.end = K - a),
                              (o[6] = $ + e * Math.cos(s.end)),
                              (o[7] = L + e * Math.sin(s.end)),
                              T.splice(g + 1, 0, [
                                "A",
                                i,
                                i,
                                0,
                                0,
                                1,
                                $ + d * Math.cos(K),
                                L + d * Math.sin(K),
                              ])),
                          (o[4] = Math.abs(s.end - s.start) < Math.PI ? 0 : 1);
                      }
                    }
                    return C;
                  };
                  const v = et.prototype.symbols.roundedRect;
                  (et.prototype.symbols.roundedRect = function (
                    C,
                    u,
                    A,
                    T,
                    S = {}
                  ) {
                    const l = v(C, u, A, T, S),
                      { r: h = 0, brBoxHeight: m = T, brBoxY: c = u } = S;
                    var g = u - c,
                      i = c + m - (u + T);
                    S = -0.1 < g - h ? 0 : h;
                    const e = -0.1 < i - h ? 0 : h;
                    var s = Math.max(S && g, 0);
                    const a = Math.max(e && i, 0);
                    (i = [C + S, u]), (g = [C + A - S, u]);
                    const d = [C + A, u + S],
                      E = [C + A, u + T - e],
                      o = [C + A - e, u + T],
                      M = [C + e, u + T],
                      Z = [C, u + T - e],
                      K = [C, u + S];
                    if (s) {
                      const $ = Math.sqrt(Math.pow(S, 2) - Math.pow(S - s, 2));
                      (i[0] -= $), (g[0] += $), (d[1] = K[1] = u + S - s);
                    }
                    return (
                      T < S - s &&
                        ((s = Math.sqrt(
                          Math.pow(S, 2) - Math.pow(S - s - T, 2)
                        )),
                        (d[0] = E[0] = C + A - S + s),
                        (o[0] = Math.min(d[0], o[0])),
                        (M[0] = Math.max(E[0], M[0])),
                        (Z[0] = K[0] = C + S - s),
                        (d[1] = K[1] = u + T)),
                      a &&
                        ((s = Math.sqrt(Math.pow(e, 2) - Math.pow(e - a, 2))),
                        (o[0] += s),
                        (M[0] -= s),
                        (E[1] = Z[1] = u + T - e + a)),
                      T < e - a &&
                        ((T = Math.sqrt(
                          Math.pow(e, 2) - Math.pow(e - a - T, 2)
                        )),
                        (d[0] = E[0] = C + A - e + T),
                        (g[0] = Math.min(d[0], g[0])),
                        (i[0] = Math.max(E[0], i[0])),
                        (Z[0] = K[0] = C + e - T),
                        (E[1] = Z[1] = u)),
                      (l.length = 0),
                      l.push(
                        ["M", ...i],
                        ["L", ...g],
                        ["A", S, S, 0, 0, 1, ...d],
                        ["L", ...E],
                        ["A", e, e, 0, 0, 1, ...o],
                        ["L", ...M],
                        ["A", e, e, 0, 0, 1, ...Z],
                        ["L", ...K],
                        ["A", S, S, 0, 0, 1, ...i],
                        ["Z"]
                      ),
                      l
                    );
                  }),
                    I(F.pie, "afterTranslate", function () {
                      const C = k(this.options.borderRadius);
                      for (const u of this.points) {
                        const A = u.shapeArgs;
                        A &&
                          (A.borderRadius = y(
                            C.radius,
                            (A.r || 0) - (A.innerR || 0)
                          ));
                      }
                    }),
                    I(
                      Y,
                      "afterColumnTranslate",
                      function () {
                        var C, u;
                        if (
                          this.options.borderRadius &&
                          (!this.chart.is3d || !this.chart.is3d())
                        ) {
                          const { options: l, yAxis: h } = this,
                            m = "percent" === l.stacking;
                          var A =
                            null ===
                              (u =
                                null === (C = nt.plotOptions) || void 0 === C
                                  ? void 0
                                  : C[this.type]) || void 0 === u
                              ? void 0
                              : u.borderRadius;
                          (C = k(l.borderRadius, N(A) ? A : {})),
                            (u = h.options.reversed);
                          for (const c of this.points)
                            if (
                              (({ shapeArgs: A } = c),
                              "roundedRect" === c.shapeType && A)
                            ) {
                              const {
                                width: g = 0,
                                height: i = 0,
                                y: e = 0,
                              } = A;
                              var T = e,
                                S = i;
                              "stack" === C.scope &&
                                c.stackTotal &&
                                ((T = h.translate(
                                  m ? 100 : c.stackTotal,
                                  !1,
                                  !0,
                                  !1,
                                  !0
                                )),
                                (S = h.translate(
                                  l.threshold || 0,
                                  !1,
                                  !0,
                                  !1,
                                  !0
                                )),
                                (T = (S = this.crispCol(
                                  0,
                                  Math.min(T, S),
                                  0,
                                  Math.abs(T - S)
                                )).y),
                                (S = S.height));
                              const s =
                                (c.negative ? -1 : 1) * (u ? -1 : 1) == -1;
                              let a = C.where;
                              !a &&
                                this.is("waterfall") &&
                                Math.abs(
                                  (c.yBottom || 0) -
                                    (this.translatedThreshold || 0)
                                ) > this.borderWidth &&
                                (a = "all"),
                                a || (a = "end");
                              const d =
                                Math.min(
                                  y(C.radius, g),
                                  g / 2,
                                  "all" === a ? i / 2 : 1 / 0
                                ) || 0;
                              "end" === a && (s && (T -= d), (S += d)),
                                H(A, { brBoxHeight: S, brBoxY: T, r: d });
                            }
                        }
                      },
                      { order: 9 }
                    );
                }
                return { optionsToObject: k };
              }
            ),
            ut(t, "Core/Responsive.js", [t["Core/Utilities.js"]], function (F) {
              const {
                diffObjects: Y,
                extend: j,
                find: tt,
                merge: et,
                pick: st,
                uniqueKey: nt,
              } = F;
              var I;
              return (
                (function (H) {
                  function N(P, k) {
                    const p = P.condition;
                    (
                      p.callback ||
                      function () {
                        return (
                          this.chartWidth <= st(p.maxWidth, Number.MAX_VALUE) &&
                          this.chartHeight <=
                            st(p.maxHeight, Number.MAX_VALUE) &&
                          this.chartWidth >= st(p.minWidth, 0) &&
                          this.chartHeight >= st(p.minHeight, 0)
                        );
                      }
                    ).call(this) && k.push(P._id);
                  }
                  function x(P, k) {
                    const p = this.options.responsive;
                    var v = this.currentResponsive;
                    let C = [];
                    !k &&
                      p &&
                      p.rules &&
                      p.rules.forEach((u) => {
                        typeof u._id > "u" && (u._id = nt()),
                          this.matchResponsiveRule(u, C);
                      }, this),
                      ((k = et(
                        ...C.map((u) =>
                          tt((p || {}).rules || [], (A) => A._id === u)
                        ).map((u) => u && u.chartOptions)
                      )).isResponsiveOptions = !0),
                      (C = C.toString() || void 0),
                      C !== (v && v.ruleIds) &&
                        (v && this.update(v.undoOptions, P, !0),
                        C
                          ? (((v = Y(
                              k,
                              this.options,
                              !0,
                              this.collectionsWithUpdate
                            )).isResponsiveOptions = !0),
                            (this.currentResponsive = {
                              ruleIds: C,
                              mergedOptions: k,
                              undoOptions: v,
                            }),
                            this.update(k, P, !0))
                          : (this.currentResponsive = void 0));
                  }
                  const y = [];
                  H.compose = function (P) {
                    return (
                      F.pushUnique(y, P) &&
                        j(P.prototype, {
                          matchResponsiveRule: N,
                          setResponsive: x,
                        }),
                      P
                    );
                  };
                })(I || (I = {})),
                I
              );
            }),
            ut(
              t,
              "masters/highcharts.src.js",
              [
                t["Core/Globals.js"],
                t["Core/Utilities.js"],
                t["Core/Defaults.js"],
                t["Core/Animation/Fx.js"],
                t["Core/Animation/AnimationUtilities.js"],
                t["Core/Renderer/HTML/AST.js"],
                t["Core/Templating.js"],
                t["Core/Renderer/RendererUtilities.js"],
                t["Core/Renderer/SVG/SVGElement.js"],
                t["Core/Renderer/SVG/SVGRenderer.js"],
                t["Core/Renderer/HTML/HTMLElement.js"],
                t["Core/Renderer/HTML/HTMLRenderer.js"],
                t["Core/Axis/Axis.js"],
                t["Core/Axis/DateTimeAxis.js"],
                t["Core/Axis/LogarithmicAxis.js"],
                t["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],
                t["Core/Axis/Tick.js"],
                t["Core/Tooltip.js"],
                t["Core/Series/Point.js"],
                t["Core/Pointer.js"],
                t["Core/Legend/Legend.js"],
                t["Core/Chart/Chart.js"],
                t["Core/Axis/Stacking/StackingAxis.js"],
                t["Core/Axis/Stacking/StackItem.js"],
                t["Core/Series/Series.js"],
                t["Core/Series/SeriesRegistry.js"],
                t["Series/Column/ColumnSeries.js"],
                t["Series/Column/ColumnDataLabel.js"],
                t["Series/Pie/PieSeries.js"],
                t["Series/Pie/PieDataLabel.js"],
                t["Core/Series/DataLabel.js"],
                t["Core/Responsive.js"],
                t["Core/Color/Color.js"],
                t["Core/Time.js"],
              ],
              function (
                F,
                Y,
                j,
                tt,
                et,
                st,
                nt,
                I,
                H,
                N,
                x,
                y,
                P,
                k,
                p,
                v,
                C,
                u,
                A,
                T,
                S,
                l,
                h,
                m,
                c,
                g,
                i,
                e,
                s,
                a,
                d,
                E,
                o,
                M
              ) {
                return (
                  (F.animate = et.animate),
                  (F.animObject = et.animObject),
                  (F.getDeferredAnimation = et.getDeferredAnimation),
                  (F.setAnimation = et.setAnimation),
                  (F.stop = et.stop),
                  (F.timers = tt.timers),
                  (F.AST = st),
                  (F.Axis = P),
                  (F.Chart = l),
                  (F.chart = l.chart),
                  (F.Fx = tt),
                  (F.Legend = S),
                  (F.PlotLineOrBand = v),
                  (F.Point = A),
                  (F.Pointer = T),
                  (F.Series = c),
                  (F.StackItem = m),
                  (F.SVGElement = H),
                  (F.SVGRenderer = N),
                  (F.Templating = nt),
                  (F.Tick = C),
                  (F.Time = M),
                  (F.Tooltip = u),
                  (F.Color = o),
                  (F.color = o.parse),
                  y.compose(N),
                  x.compose(H),
                  T.compose(l),
                  S.compose(l),
                  (F.defaultOptions = j.defaultOptions),
                  (F.getOptions = j.getOptions),
                  (F.time = j.defaultTime),
                  (F.setOptions = j.setOptions),
                  (F.dateFormat = nt.dateFormat),
                  (F.format = nt.format),
                  (F.numberFormat = nt.numberFormat),
                  (F.addEvent = Y.addEvent),
                  (F.arrayMax = Y.arrayMax),
                  (F.arrayMin = Y.arrayMin),
                  (F.attr = Y.attr),
                  (F.clearTimeout = Y.clearTimeout),
                  (F.correctFloat = Y.correctFloat),
                  (F.createElement = Y.createElement),
                  (F.css = Y.css),
                  (F.defined = Y.defined),
                  (F.destroyObjectProperties = Y.destroyObjectProperties),
                  (F.discardElement = Y.discardElement),
                  (F.distribute = I.distribute),
                  (F.erase = Y.erase),
                  (F.error = Y.error),
                  (F.extend = Y.extend),
                  (F.extendClass = Y.extendClass),
                  (F.find = Y.find),
                  (F.fireEvent = Y.fireEvent),
                  (F.getMagnitude = Y.getMagnitude),
                  (F.getStyle = Y.getStyle),
                  (F.inArray = Y.inArray),
                  (F.isArray = Y.isArray),
                  (F.isClass = Y.isClass),
                  (F.isDOMElement = Y.isDOMElement),
                  (F.isFunction = Y.isFunction),
                  (F.isNumber = Y.isNumber),
                  (F.isObject = Y.isObject),
                  (F.isString = Y.isString),
                  (F.keys = Y.keys),
                  (F.merge = Y.merge),
                  (F.normalizeTickInterval = Y.normalizeTickInterval),
                  (F.objectEach = Y.objectEach),
                  (F.offset = Y.offset),
                  (F.pad = Y.pad),
                  (F.pick = Y.pick),
                  (F.pInt = Y.pInt),
                  (F.relativeLength = Y.relativeLength),
                  (F.removeEvent = Y.removeEvent),
                  (F.seriesType = g.seriesType),
                  (F.splat = Y.splat),
                  (F.stableSort = Y.stableSort),
                  (F.syncTimeout = Y.syncTimeout),
                  (F.timeUnits = Y.timeUnits),
                  (F.uniqueKey = Y.uniqueKey),
                  (F.useSerialIds = Y.useSerialIds),
                  (F.wrap = Y.wrap),
                  e.compose(i),
                  d.compose(c),
                  k.compose(P),
                  p.compose(P),
                  a.compose(s),
                  v.compose(P),
                  E.compose(l),
                  h.compose(P, l, c),
                  u.compose(T),
                  F
                );
              }
            ),
            (t["masters/highcharts.src.js"]._modules = t),
            t["masters/highcharts.src.js"]
          );
        }),
        Bt.exports
          ? ((ut.default = ut), (Bt.exports = at.document ? ut(at) : ut))
          : void 0 !==
              (Mt = function () {
                return ut(at);
              }.call(wt, U, wt, Bt)) && (Bt.exports = Mt);
    },
  },
]);
