"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [406],
  {
    16406: (A, k, a) => {
      a.d(k, { p: () => te });
      var m = a(15861),
        e = a(65879),
        c = a(96814),
        h = a(43389),
        z = a(42840),
        p = a(41958),
        g = a(79382),
        d = a(69649),
        s = a(73460),
        T = a(24139),
        w = a(8083),
        I = a(55695),
        C = a(92574),
        u = a(16976),
        v = a(80697);
      function O(o, i) {
        if (1 & o) {
          const l = e.EpF();
          e.TgZ(0, "li", 17),
            e.NdJ("click", function () {
              const n = e.CHM(l),
                r = n.$implicit,
                _ = n.index,
                Z = e.oxw();
              return e.KtG(Z.onSelectTemplate(r.id || "", _));
            }),
            e.TgZ(1, "span"),
            e._uU(2),
            e.qZA()();
        }
        if (2 & o) {
          const l = i.$implicit;
          e.Q6J("nzSelected", 0 === i.index), e.xp6(2), e.Oqu(l.name);
        }
      }
      function P(o, i) {
        if ((1 & o && (e.TgZ(0, "nz-tag", 18), e._uU(1), e.qZA()), 2 & o)) {
          const l = i.$implicit;
          e.Q6J("nzColor", l.color_code), e.xp6(1), e.Oqu(l.name);
        }
      }
      function D(o, i) {
        if ((1 & o && (e.TgZ(0, "nz-tag", 18), e._uU(1), e.qZA()), 2 & o)) {
          const l = i.$implicit;
          e.Q6J("nzColor", l.color_code), e.xp6(1), e.Oqu(l.name);
        }
      }
      function b(o, i) {
        if ((1 & o && (e.TgZ(0, "nz-tag", 18), e._uU(1), e.qZA()), 2 & o)) {
          const l = i.$implicit;
          e.Q6J("nzColor", l.color_code), e.xp6(1), e.Oqu(l.name);
        }
      }
      function M(o, i) {
        if ((1 & o && (e.TgZ(0, "nz-tag", 18), e._uU(1), e.qZA()), 2 & o)) {
          const l = i.$implicit;
          e.Q6J("nzColor", l.color_code), e.xp6(1), e.Oqu(l.name);
        }
      }
      function j(o, i) {
        if ((1 & o && (e.TgZ(0, "li", 19), e._uU(1), e.qZA()), 2 & o)) {
          const l = i.$implicit;
          e.xp6(1), e.hij(" ", l.name, " ");
        }
      }
      let J = (() => {
        var o;
        class i {
          constructor(t, n) {
            (this.cdr = t),
              (this.api = n),
              (this.selectTemplate = new e.vpe()),
              (this.loadingList = !1),
              (this.loadingDetails = !1),
              (this.selectedTemplateIndex = 0),
              (this.templateList = []),
              (this.templateDetails = {});
          }
          ngOnInit() {
            this.get();
          }
          get() {
            var t = this;
            return (0, m.Z)(function* () {
              try {
                t.loadingList = !0;
                const n = yield t.api.getWorklenzTemplates();
                n.done &&
                  ((t.templateList = n.body),
                  (t.loadingList = !1),
                  yield t.emitTemplateSelect(),
                  t.cdr.markForCheck());
              } catch (n) {
                (0, d.tu)(n), t.cdr.markForCheck();
              }
            })();
          }
          getTemplateDetails() {
            var t = this;
            return (0, m.Z)(function* () {
              try {
                (t.loadingDetails = !0),
                  (t.loadingDetails = !1),
                  t.cdr.markForCheck();
              } catch (n) {
                (0, d.tu)(n), t.cdr.markForCheck();
              }
            })();
          }
          onSelectTemplate(t, n) {
            t &&
              ((this.selectedTemplateIndex = n),
              this.getTemplateDetails(),
              setTimeout(() => {
                this.emitTemplateSelect();
              }, 500),
              this.cdr.markForCheck());
          }
          emitTemplateSelect() {
            var t = this;
            return (0, m.Z)(function* () {
              const n = t.templateList[t.selectedTemplateIndex].id;
              if ((t.selectTemplate.emit(n), n)) {
                t.loadingDetails = !0;
                const r = yield t.api.getWorklenzTemplateById(n);
                r.done &&
                  ((t.templateDetails = r.body),
                  (t.loadingDetails = !1),
                  t.cdr.markForCheck()),
                  (t.loadingDetails = !1);
              }
              t.cdr.markForCheck();
            })();
          }
        }
        return (
          ((o = i).ɵfac = function (t) {
            return new (t || o)(e.Y36(e.sBO), e.Y36(v.I));
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-template-list"]],
            outputs: { selectTemplate: "selectTemplate" },
            standalone: !0,
            features: [e.jDz],
            decls: 48,
            vars: 12,
            consts: [
              [1, "d-flex"],
              [1, "side-menu"],
              [3, "nzActive", "nzLoading"],
              ["nz-menu", "", "nzMode", "inline", 1, "br-0"],
              [
                "nz-menu-item",
                "",
                "class",
                "ps-2",
                3,
                "nzSelected",
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "temp-details", "px-4", "py-3"],
              ["nz-typography", ""],
              [1, "preview"],
              ["alt", "preview", 1, "img-fluid", 3, "src"],
              [1, "d-flex", "mb-3"],
              [1, "worklenz_key_sec"],
              [1, "worklenz_value_sec"],
              [1, "d-flex", "mb-4"],
              ["class", "me-2", 3, "nzColor", 4, "ngFor", "ngForOf"],
              [1, "mt-2"],
              ["nz-list", ""],
              ["nz-list-item", "", 4, "ngFor", "ngForOf"],
              ["nz-menu-item", "", 1, "ps-2", 3, "nzSelected", "click"],
              [1, "me-2", 3, "nzColor"],
              ["nz-list-item", ""],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "div", 0)(1, "div", 1)(2, "nz-skeleton", 2)(
                  3,
                  "ul",
                  3
                ),
                e.YNc(4, O, 3, 2, "li", 4),
                e.qZA()()(),
                e.TgZ(5, "div", 5)(6, "h4", 6),
                e._uU(7, "Detalles"),
                e.qZA(),
                e.TgZ(8, "nz-skeleton", 2)(9, "div", 7),
                e._UZ(10, "img", 8),
                e.qZA(),
                e.TgZ(11, "div", 9)(12, "div", 10)(13, "span", 6),
                e._uU(14, "Description"),
                e.qZA()(),
                e.TgZ(15, "div", 11)(16, "span", 6),
                e._uU(17),
                e.qZA()()(),
                e.TgZ(18, "div", 12)(19, "div", 10)(20, "span", 6),
                e._uU(21, "Phases"),
                e.qZA()(),
                e.TgZ(22, "div", 11),
                e.YNc(23, P, 2, 2, "nz-tag", 13),
                e.qZA()(),
                e.TgZ(24, "div", 12)(25, "div", 10)(26, "span", 6),
                e._uU(27, "Statuses"),
                e.qZA()(),
                e.TgZ(28, "div", 11),
                e.YNc(29, D, 2, 2, "nz-tag", 13),
                e.qZA()(),
                e.TgZ(30, "div", 12)(31, "div", 10)(32, "span", 6),
                e._uU(33, "Priorities"),
                e.qZA()(),
                e.TgZ(34, "div", 11),
                e.YNc(35, b, 2, 2, "nz-tag", 13),
                e.qZA()(),
                e.TgZ(36, "div", 12)(37, "div", 10)(38, "span", 6),
                e._uU(39, "Labels"),
                e.qZA()(),
                e.TgZ(40, "div", 11),
                e.YNc(41, M, 2, 2, "nz-tag", 13),
                e.qZA()(),
                e.TgZ(42, "div", 10)(43, "span", 6),
                e._uU(44, "Tasks"),
                e.qZA()(),
                e.TgZ(45, "div", 14)(46, "ul", 15),
                e.YNc(47, j, 2, 1, "li", 16),
                e.qZA()()()()()),
                2 & t &&
                  (e.xp6(2),
                  e.Q6J("nzActive", !0)("nzLoading", n.loadingList),
                  e.xp6(2),
                  e.Q6J("ngForOf", n.templateList),
                  e.xp6(4),
                  e.Q6J("nzActive", !0)("nzLoading", n.loadingDetails),
                  e.xp6(2),
                  e.Q6J("src", n.templateDetails.image_url, e.LSH),
                  e.xp6(7),
                  e.Oqu(n.templateDetails.description),
                  e.xp6(6),
                  e.Q6J("ngForOf", n.templateDetails.phases),
                  e.xp6(6),
                  e.Q6J("ngForOf", n.templateDetails.status),
                  e.xp6(6),
                  e.Q6J("ngForOf", n.templateDetails.priorities),
                  e.xp6(6),
                  e.Q6J("ngForOf", n.templateDetails.labels),
                  e.xp6(6),
                  e.Q6J("ngForOf", n.templateDetails.tasks));
            },
            dependencies: [
              c.ez,
              c.sg,
              s.ip,
              s.wO,
              s.r9,
              T.H0,
              T.ng,
              w.ZJ,
              w.ZU,
              I.X,
              I.j,
              C.zf,
              u.Ph,
              u.n_,
              u.AA,
            ],
            styles: [
              ".side-menu[_ngcontent-%COMP%]{min-width:250px;max-width:250px;max-height:calc(100vh - 200px);overflow-y:auto}.temp-details[_ngcontent-%COMP%]{max-height:calc(100vh - 200px);overflow:auto}.worklenz_key_sec[_ngcontent-%COMP%]{min-width:120px;max-width:120px}.worklenz_key_sec[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500}.worklenz_value_sec[_ngcontent-%COMP%]{max-width:520px}.preview[_ngcontent-%COMP%]{max-width:600px}nz-tag[_ngcontent-%COMP%]{color:#000;margin-bottom:8px}",
            ],
            changeDetection: 0,
          })),
          i
        );
      })();
      var f = a(60095),
        W = a(62612),
        x = a(20824),
        S = a(9172),
        L = a(33640),
        F = a(62595),
        y = a(60804);
      function N(o, i) {
        1 & o && e._UZ(0, "span", 9);
      }
      function Q(o, i) {
        if ((1 & o && e._UZ(0, "nz-badge", 15), 2 & o)) {
          const l = e.oxw().$implicit;
          e.Q6J("nzColor", l.color_code);
        }
      }
      function U(o, i) {
        if ((1 & o && (e.TgZ(0, "span", 16), e._uU(1), e.qZA()), 2 & o)) {
          const l = e.oxw().$implicit;
          e.xp6(1), e.Oqu(l.name);
        }
      }
      function Y(o, i) {
        if (1 & o) {
          const l = e.EpF();
          e.TgZ(0, "nz-list-item", 12),
            e.NdJ("click", function () {
              const n = e.CHM(l),
                r = n.$implicit,
                _ = n.index,
                Z = e.oxw(2);
              return e.KtG(Z.changeSelectedTemplate(r.id, _));
            }),
            e.TgZ(1, "nz-space"),
            e.YNc(2, Q, 1, 1, "nz-badge", 13),
            e.YNc(3, U, 2, 1, "span", 14),
            e.qZA()();
        }
        2 & o && e.Q6J("ngClass", i.$implicit.selected ? "selected" : "");
      }
      function $(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "nz-list", 10),
            e.YNc(1, Y, 4, 1, "nz-list-item", 11),
            e.ALo(2, "searchByName"),
            e.qZA()),
          2 & o)
        ) {
          const l = e.oxw(),
            t = e.MAs(3);
          e.xp6(1), e.Q6J("ngForOf", e.xi3(2, 1, l.templateList, t.value));
        }
      }
      function B(o, i) {
        if ((1 & o && e._UZ(0, "nz-empty", 17), 2 & o)) {
          e.oxw();
          const l = e.MAs(10);
          e.Q6J("nzNotFoundContent", l);
        }
      }
      function E(o, i) {
        1 & o && e._uU(0, " ¡No se encontraron plantillas de procesos! ");
      }
      let q = (() => {
        var o;
        class i {
          constructor(t, n) {
            (this.cdr = t),
              (this.api = n),
              (this.selectTemplate = new e.vpe()),
              (this.teamSearchText = null),
              (this.loading = !1),
              (this.templateList = []);
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
                n.done && ((t.templateList = n.body), (t.loading = !1)),
                  (t.loading = !1),
                  t.cdr.markForCheck();
              } catch (n) {
                (0, d.tu)(n), t.cdr.markForCheck();
              }
            })();
          }
          changeSelectedTemplate(t, n) {
            for (let r = 0; r < this.templateList.length; r++)
              this.templateList[r].selected = !1;
            (this.templateList[n].selected = !0),
              this.selectTemplate.emit(t),
              this.cdr.markForCheck();
          }
          detectChanges() {
            this.cdr.markForCheck();
          }
        }
        return (
          ((o = i).ɵfac = function (t) {
            return new (t || o)(e.Y36(e.sBO), e.Y36(v.I));
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-custom-template-list"]],
            outputs: { selectTemplate: "selectTemplate" },
            standalone: !0,
            features: [e.jDz],
            decls: 11,
            vars: 6,
            consts: [
              [1, "w-35"],
              [3, "nzSuffix"],
              [
                "type",
                "text",
                "placeholder",
                "Buscar por nombre de proceso",
                "nz-input",
                "",
                3,
                "ngModel",
                "ngModelChange",
              ],
              ["searchInput", ""],
              ["suffixIconSearch", ""],
              [1, "mt-3", 3, "nzActive", "nzLoading"],
              [
                "nzBordered",
                "",
                "nzSize",
                "small",
                "class",
                "temp-details",
                4,
                "ngIf",
              ],
              [3, "nzNotFoundContent", 4, "ngIf"],
              ["noCustomTemplates", ""],
              ["nz-icon", "", "nzType", "search"],
              ["nzBordered", "", "nzSize", "small", 1, "temp-details"],
              [
                "class",
                "actions-row",
                3,
                "ngClass",
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "actions-row", 3, "ngClass", "click"],
              [3, "nzColor", "nzText", 4, "nzSpaceItem"],
              ["class", "template-name", 4, "nzSpaceItem"],
              [3, "nzColor", "nzText"],
              [1, "template-name"],
              [3, "nzNotFoundContent"],
            ],
            template: function (t, n) {
              if (
                (1 & t &&
                  (e.TgZ(0, "div", 0)(1, "nz-input-group", 1)(2, "input", 2, 3),
                  e.NdJ("ngModelChange", function (_) {
                    return (n.teamSearchText = _);
                  })("ngModelChange", function () {
                    return n.detectChanges();
                  }),
                  e.qZA()(),
                  e.YNc(4, N, 1, 0, "ng-template", null, 4, e.W1O),
                  e.qZA(),
                  e.TgZ(6, "nz-skeleton", 5),
                  e.YNc(7, $, 3, 4, "nz-list", 6),
                  e.YNc(8, B, 1, 1, "nz-empty", 7),
                  e.YNc(9, E, 1, 0, "ng-template", null, 8, e.W1O),
                  e.qZA()),
                2 & t)
              ) {
                const r = e.MAs(5);
                e.xp6(1),
                  e.Q6J("nzSuffix", r),
                  e.xp6(1),
                  e.Q6J("ngModel", n.teamSearchText),
                  e.xp6(4),
                  e.Q6J("nzActive", !0)("nzLoading", n.loading),
                  e.xp6(1),
                  e.Q6J("ngIf", n.templateList.length),
                  e.xp6(1),
                  e.Q6J("ngIf", !n.templateList.length);
              }
            },
            dependencies: [
              c.ez,
              c.mk,
              c.sg,
              c.O5,
              T.H0,
              T.ng,
              u.Ph,
              u.n_,
              u.AA,
              f.u5,
              f.Fj,
              f.JJ,
              f.On,
              W.Wr,
              x.o7,
              x.Zp,
              x.gB,
              x.ke,
              s.ip,
              S.g,
              L.mS,
              L.x7,
              C.zf,
              C.NU,
              C.$1,
              F.PV,
              F.Ls,
              y.Xo,
              y.p9,
            ],
            styles: [
              ".w-35[_ngcontent-%COMP%]{max-width:35%}.actions-row[_ngcontent-%COMP%]{cursor:pointer;transition:.25s background}.actions-row[_ngcontent-%COMP%]:hover   .template-name[_ngcontent-%COMP%]{color:#188fff}nz-list-item[_ngcontent-%COMP%]{height:48px}.selected[_ngcontent-%COMP%]{background:#e6f7ff}.selected[_ngcontent-%COMP%]   .template-name[_ngcontent-%COMP%]{color:#188fff}.temp-details[_ngcontent-%COMP%]{max-height:calc(100vh - 245px);overflow:auto}",
            ],
            changeDetection: 0,
          })),
          i
        );
      })();
      var V = a(35420),
        H = a(70855);
      function K(o, i) {
        if (1 & o) {
          const l = e.EpF();
          e.TgZ(0, "worklenz-template-list", 8),
            e.NdJ("selectTemplate", function (n) {
              e.CHM(l);
              const r = e.oxw(2);
              return e.KtG(r.changeSelectedWorklenzTemp(n));
            }),
            e.qZA();
        }
      }
      function G(o, i) {
        if (1 & o) {
          const l = e.EpF();
          e.TgZ(0, "worklenz-custom-template-list", 8),
            e.NdJ("selectTemplate", function (n) {
              e.CHM(l);
              const r = e.oxw(3);
              return e.KtG(r.changeSelectedCustomTemp(n));
            }),
            e.qZA();
        }
      }
      function R(o, i) {
        if (
          (1 & o &&
            (e.TgZ(0, "nz-tab", 5),
            e.YNc(1, G, 1, 0, "worklenz-custom-template-list", 6),
            e.qZA()),
          2 & o)
        ) {
          const l = e.oxw(2);
          e.Q6J("nzTitle", "Tu Librería"),
            e.xp6(1),
            e.Q6J("ngIf", l.drawerVisible);
        }
      }
      function X(o, i) {
        if (1 & o) {
          const l = e.EpF();
          e.ynx(0),
            e._UZ(1, "div", 3),
            e.TgZ(2, "nz-tabset", 4),
            e.NdJ("nzSelectedIndexChange", function (n) {
              e.CHM(l);
              const r = e.oxw();
              return e.KtG((r.selectedTabIndex = n));
            }),
            e.TgZ(3, "nz-tab", 5),
            e.YNc(4, K, 1, 0, "worklenz-template-list", 6),
            e.qZA(),
            e.YNc(5, R, 2, 2, "nz-tab", 7),
            e.qZA(),
            e.BQk();
        }
        if (2 & o) {
          const l = e.oxw();
          e.xp6(3),
            e.Q6J("nzTitle", "Librería Legal Agenda"),
            e.xp6(1),
            e.Q6J("ngIf", l.drawerVisible),
            e.xp6(1),
            e.Q6J("ngIf", l.showBothTabs);
        }
      }
      function ee(o, i) {
        if (1 & o) {
          const l = e.EpF();
          e.TgZ(0, "div", 9)(1, "button", 10),
            e.NdJ("click", function () {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG(n.close());
            }),
            e._uU(2, "Cancel"),
            e.qZA(),
            e.TgZ(3, "button", 11),
            e.NdJ("click", function () {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG(n.create());
            }),
            e._uU(4, " Create "),
            e.qZA()();
        }
        if (2 & o) {
          const l = e.oxw();
          e.xp6(3),
            e.Q6J(
              "disabled",
              !l.selectedWorklenzTemplateId && !l.selectedCustomTemplateId
            )("nzLoading", l.creating);
        }
      }
      let te = (() => {
        var o;
        class i {
          constructor(t, n, r) {
            (this.cdr = t),
              (this.api = n),
              (this.router = r),
              (this.showBothTabs = !0),
              (this.importProject = new e.vpe()),
              (this.selectedWorklenzTemplateId = null),
              (this.selectedCustomTemplateId = null),
              (this.selectedTabIndex = 0),
              (this.show = !1),
              (this.loading = !1),
              (this.creating = !1),
              (this.drawerVisible = !1);
          }
          open() {
            this.reset(), (this.show = !0), this.cdr.markForCheck();
          }
          close() {
            (this.show = !1), this.cdr.markForCheck();
          }
          create() {
            var t = this;
            return (0, m.Z)(function* () {
              if (t.showBothTabs) {
                if (0 === t.selectedTabIndex)
                  return void (yield t.createFromWorklenzLib());
                if (1 === t.selectedTabIndex)
                  return void (yield t.createFromCustomLib());
              } else t.importProject.emit({ template_id: t.selectedWorklenzTemplateId });
            })();
          }
          createFromWorklenzLib() {
            var t = this;
            return (0, m.Z)(function* () {
              if (t.selectedWorklenzTemplateId)
                try {
                  t.creating = !0;
                  const n = yield t.api.createFromTemplate({
                    template_id: t.selectedWorklenzTemplateId,
                  });
                  n.done &&
                    ((t.creating = !1),
                    t.close(),
                    t.importProject.emit({ project_id: n.body.project_id }),
                    t.router.navigate([
                      `/worklenz/projects/${n.body.project_id}`,
                    ]),
                    t.cdr.markForCheck()),
                    (t.creating = !1);
                } catch (n) {
                  (0, d.tu)(n), (t.creating = !1), t.cdr.markForCheck();
                }
            })();
          }
          createFromCustomLib() {
            var t = this;
            return (0, m.Z)(function* () {
              if (t.selectedCustomTemplateId)
                try {
                  t.creating = !0;
                  const n = yield t.api.createFromCustomTemplate({
                    template_id: t.selectedCustomTemplateId,
                  });
                  n.done &&
                    ((t.creating = !1),
                    t.close(),
                    t.importProject.emit({ project_id: n.body.project_id }),
                    t.router.navigate([
                      `/worklenz/projects/${n.body.project_id}`,
                    ]),
                    t.cdr.markForCheck()),
                    t.cdr.markForCheck();
                } catch (n) {
                  (0, d.tu)(n), (t.creating = !1), t.cdr.markForCheck();
                }
            })();
          }
          changeSelectedWorklenzTemp(t) {
            (this.selectedWorklenzTemplateId = t),
              (this.selectedCustomTemplateId = null),
              this.cdr.markForCheck();
          }
          changeSelectedCustomTemp(t) {
            (this.selectedCustomTemplateId = t),
              (this.selectedWorklenzTemplateId = null),
              this.cdr.markForCheck();
          }
          reset() {
            (this.selectedWorklenzTemplateId = null),
              (this.selectedCustomTemplateId = null),
              (this.loading = !1),
              (this.creating = !1),
              (this.selectedTabIndex = 0),
              this.cdr.markForCheck();
          }
          onDrawerVisibilityChange(t) {
            this.drawerVisible = t;
          }
        }
        return (
          ((o = i).ɵfac = function (t) {
            return new (t || o)(e.Y36(e.sBO), e.Y36(v.I), e.Y36(V.F0));
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["worklenz-project-template-import-drawer"]],
            inputs: { showBothTabs: "showBothTabs" },
            outputs: { importProject: "importProject" },
            standalone: !0,
            features: [e.jDz],
            decls: 4,
            vars: 5,
            consts: [
              [
                "nzPlacement",
                "right",
                1,
                "template-drawer-o-none",
                3,
                "nzClosable",
                "nzVisible",
                "nzWidth",
                "nzTitle",
                "nzFooter",
                "nzOnClose",
                "nzVisibleChange",
              ],
              [4, "nzDrawerContent"],
              ["footer", ""],
              [1, "template-drawer-o-none", "d-none"],
              ["nzType", "card", 3, "nzSelectedIndexChange"],
              [3, "nzTitle"],
              [3, "selectTemplate", 4, "ngIf"],
              [3, "nzTitle", 4, "ngIf"],
              [3, "selectTemplate"],
              [2, "float", "right"],
              ["nz-button", "", 2, "margin-right", "8px", 3, "click"],
              [
                "nz-button",
                "",
                "nzType",
                "primary",
                3,
                "disabled",
                "nzLoading",
                "click",
              ],
            ],
            template: function (t, n) {
              if (
                (1 & t &&
                  (e.TgZ(0, "nz-drawer", 0),
                  e.NdJ("nzOnClose", function () {
                    return n.close();
                  })("nzVisibleChange", function (_) {
                    return n.onDrawerVisibilityChange(_);
                  }),
                  e.YNc(1, X, 6, 3, "ng-container", 1),
                  e.YNc(2, ee, 5, 2, "ng-template", null, 2, e.W1O),
                  e.qZA()),
                2 & t)
              ) {
                const r = e.MAs(3);
                e.Q6J("nzClosable", !0)("nzVisible", n.show)("nzWidth", 1e3)(
                  "nzTitle",
                  "Seleccionar desde nuestras plantillas"
                )("nzFooter", r);
              }
            },
            dependencies: [
              c.ez,
              c.O5,
              h.BL,
              h.Vz,
              h.SQ,
              z.sL,
              z.ix,
              H.w,
              p.dQ,
              p.vG,
              g.we,
              g.xH,
              g.xw,
              J,
              q,
            ],
            changeDetection: 0,
          })),
          i
        );
      })();
    },
    80697: (A, k, a) => {
      a.d(k, { I: () => z });
      var m = a(26857),
        e = a(10708),
        c = a(65879),
        h = a(69862);
      let z = (() => {
        var p;
        class g extends m.P {
          constructor(s) {
            super(),
              (this.http = s),
              (this.root = `${this.API_BASE_URL}/project-templates`);
          }
          createCustomTemplate(s) {
            return this._post(this.http, `${this.root}/custom-template`, s);
          }
          createFromTemplate(s) {
            return this._post(this.http, `${this.root}/import-template`, s);
          }
          createFromCustomTemplate(s) {
            return this._post(
              this.http,
              `${this.root}/import-custom-template`,
              s
            );
          }
          createTemplates() {
            return this._get(this.http, `${this.root}/create`);
          }
          getWorklenzTemplates() {
            return this._get(this.http, `${this.root}/worklenz-templates`);
          }
          getWorklenzTemplateById(s) {
            return this._get(this.http, `${this.root}/worklenz-templates/${s}`);
          }
          getWorklenzCustomTemplates() {
            return this._get(this.http, `${this.root}/custom-templates`);
          }
          delete(s) {
            return (0, e.n)(this.http.delete(`${this.root}/${s}`));
          }
          setupAccount(s) {
            return this._post(this.http, `${this.root}/setup`, s);
          }
        }
        return (
          ((p = g).ɵfac = function (s) {
            return new (s || p)(c.LFG(h.eN));
          }),
          (p.ɵprov = c.Yz7({ token: p, factory: p.ɵfac, providedIn: "root" })),
          g
        );
      })();
    },
  },
]);
