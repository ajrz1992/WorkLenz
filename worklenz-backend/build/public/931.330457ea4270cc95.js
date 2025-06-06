"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [931],
  {
    82931: (B, C, n) => {
      n.r(C), n.d(C, { CategoriesModule: () => H });
      var f = n(96814),
        u = n(35420),
        z = n(15861),
        T = n(21406),
        c = n(86408),
        m = n(27782),
        h = n(69649),
        t = n(65879),
        _ = n(90586),
        $ = n(53980),
        L = n(9172),
        D = n(72042),
        A = n(73460),
        x = n(62787),
        M = n(82962),
        Z = n(24139),
        g = n(13740),
        F = n(55695),
        J = n(96109),
        y = n(92574),
        O = n(42840),
        E = n(70855),
        Q = n(41958),
        P = n(62595),
        S = n(3599),
        d = n(60095),
        v = n(20824);
      function U(e, s) {
        if (1 & e) {
          const a = t.EpF();
          t.TgZ(0, "li", 17),
            t.NdJ("click", function () {
              const i = t.CHM(a).$implicit,
                l = t.oxw().$implicit,
                p = t.oxw();
              return t.KtG(p.updateColorCode(l.id, i));
            }),
            t.TgZ(1, "nz-tag", 18),
            t._uU(2),
            t.qZA()();
        }
        if (2 & e) {
          const a = s.$implicit,
            o = t.oxw().$implicit;
          t.xp6(1), t.Q6J("nzColor", a), t.xp6(1), t.Oqu(o.name);
        }
      }
      function Y(e, s) {
        if (1 & e) {
          const a = t.EpF();
          t.TgZ(0, "tr", 8)(1, "td")(2, "nz-tag", 9),
            t._uU(3),
            t.qZA(),
            t.TgZ(4, "nz-dropdown-menu", null, 10)(6, "ul", 11),
            t.YNc(7, U, 3, 2, "li", 12),
            t.qZA()()(),
            t.TgZ(8, "td"),
            t._uU(9),
            t.qZA(),
            t.TgZ(10, "td", 13)(11, "div", 14)(12, "nz-space")(
              13,
              "button",
              15
            ),
            t.NdJ("click", function () {
              const i = t.CHM(a).$implicit,
                l = t.oxw();
              return t.KtG(l.deleteCategory(i));
            }),
            t._UZ(14, "span", 16),
            t.qZA()()()()();
        }
        if (2 & e) {
          const a = s.$implicit,
            o = t.MAs(5),
            r = t.oxw();
          t.xp6(2),
            t.Q6J("nzColor", a.color_code)("nzDropdownMenu", o)(
              "nzTooltipTitle",
              "Click to change color"
            )("nzTrigger", "click"),
            t.xp6(1),
            t.Oqu(a.name),
            t.xp6(4),
            t.Q6J("ngForOf", r.colorCodes),
            t.xp6(2),
            t.Oqu(a.usage),
            t.xp6(4),
            t.Q6J("nzSize", "small")("nzTooltipPlacement", "top")(
              "nzTooltipTitle",
              "Delete"
            )("disabled", (a.usage || 0) > 0)("nzType", "default");
        }
      }
      function N(e, s) {
        1 & e && t._UZ(0, "span", 24);
      }
      function j(e, s) {
        if (1 & e) {
          const a = t.EpF();
          t.TgZ(0, "form", 20)(1, "nz-input-group", 21)(2, "input", 22),
            t.NdJ("ngModelChange", function (r) {
              t.CHM(a);
              const i = t.oxw(2);
              return t.KtG((i.labelsSearch = r));
            })("ngModelChange", function (r) {
              t.CHM(a);
              const i = t.oxw(2);
              return t.KtG(i.searchCategories(r));
            }),
            t.qZA()(),
            t.YNc(3, N, 1, 0, "ng-template", null, 23, t.W1O),
            t.qZA();
        }
        if (2 & e) {
          const a = t.MAs(4),
            o = t.oxw(2);
          t.Q6J("nzLayout", "vertical"),
            t.xp6(1),
            t.Q6J("nzSuffix", a),
            t.xp6(1),
            t.Q6J("ngModel", o.labelsSearch);
        }
      }
      function I(e, s) {
        1 & e && (t.TgZ(0, "nz-space"), t.YNc(1, j, 5, 3, "form", 19), t.qZA());
      }
      const R = function () {
          return { rows: 5 };
        },
        K = [
          {
            path: "",
            component: (() => {
              var e;
              class s {
                constructor(o, r, i, l, p) {
                  (this.app = o),
                    (this.api = r),
                    (this.searchPipe = i),
                    (this.cdr = l),
                    (this.menu = p),
                    (this.colorCodes = T.lD),
                    (this.categories = []),
                    (this.filteredCategories = []),
                    (this.loading = !1),
                    (this.labelsSearch = null),
                    this.app.setTitle("Manage Categories"),
                    c.s.track(m.o9);
                }
                ngOnInit() {
                  this.get();
                }
                trackByFn(o, r) {
                  return r.id;
                }
                get() {
                  var o = this;
                  return (0, z.Z)(function* () {
                    try {
                      o.loading = !0;
                      const r = yield o.api.get();
                      r.done &&
                        ((o.categories = r.body),
                        (o.filteredCategories = o.categories)),
                        (o.loading = !1);
                    } catch (r) {
                      (o.loading = !1), (0, h.tu)(r);
                    }
                    o.cdr.detectChanges();
                  })();
                }
                deleteCategory(o) {
                  var r = this;
                  return (0, z.Z)(function* () {
                    if (o?.id) {
                      try {
                        (r.loading = !0),
                          (yield r.api.deleteById(o.id)).done &&
                            (c.s.track(m.YS), r.get()),
                          (r.loading = !1);
                      } catch (i) {
                        (r.loading = !1), (0, h.tu)(i);
                      }
                      r.cdr.detectChanges();
                    }
                  })();
                }
                updateColorCode(o, r) {
                  var i = this;
                  return (0, z.Z)(function* () {
                    if (o && r)
                      try {
                        if ((yield i.api.updateColor(o, r)).done) {
                          const p = i.categories.find((w) => w.id === o);
                          p && (p.color_code = r), i.cdr.markForCheck();
                        }
                      } catch (l) {
                        (0, h.tu)(l);
                      }
                  })();
                }
                searchCategories(o) {
                  (this.filteredCategories = this.searchPipe.transform(
                    this.categories,
                    o || null
                  )),
                    this.cdr.markForCheck();
                }
              }
              return (
                ((e = s).ɵfac = function (o) {
                  return new (o || e)(
                    t.Y36(_.z),
                    t.Y36($.s),
                    t.Y36(L.g),
                    t.Y36(t.sBO),
                    t.Y36(D.h)
                  );
                }),
                (e.ɵcmp = t.Xpm({
                  type: e,
                  selectors: [["worklenz-categories"]],
                  decls: 14,
                  vars: 15,
                  consts: [
                    [3, "nzExtra"],
                    [3, "nzActive", "nzLoading", "nzParagraph"],
                    [
                      1,
                      "custom-table",
                      3,
                      "nzData",
                      "nzLoading",
                      "nzNoResult",
                      "nzPaginationType",
                      "nzSize",
                    ],
                    ["table", ""],
                    ["scope", "col", 3, "nzWidth", "nzAlign"],
                    ["scope", "col", "colspan", "2", 3, "nzAlign"],
                    [
                      "class",
                      "actions-row",
                      4,
                      "ngFor",
                      "ngForOf",
                      "ngForTrackBy",
                    ],
                    ["actionsTemplate", ""],
                    [1, "actions-row"],
                    [
                      "nz-dropdown",
                      "",
                      "nz-tooltip",
                      "",
                      1,
                      "m-0",
                      2,
                      "cursor",
                      "pointer",
                      3,
                      "nzColor",
                      "nzDropdownMenu",
                      "nzTooltipTitle",
                      "nzTrigger",
                    ],
                    ["colorDropdown", "nzDropdownMenu"],
                    [
                      "nz-menu",
                      "",
                      "nzSelectable",
                      "",
                      2,
                      "max-height",
                      "200px",
                      "overflow",
                      "hidden",
                      "overflow-y",
                      "auto",
                    ],
                    ["nz-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"],
                    ["nzAlign", "center", 1, "actions-col"],
                    [1, "actions"],
                    [
                      "nz-button",
                      "",
                      "nz-tooltip",
                      "",
                      3,
                      "nzSize",
                      "nzTooltipPlacement",
                      "nzTooltipTitle",
                      "disabled",
                      "nzType",
                      "click",
                    ],
                    ["nz-icon", "", "nzType", "delete"],
                    ["nz-menu-item", "", 3, "click"],
                    [1, "m-0", "w-100", 3, "nzColor"],
                    ["nz-form", "", 3, "nzLayout", 4, "nzSpaceItem"],
                    ["nz-form", "", 3, "nzLayout"],
                    [3, "nzSuffix"],
                    [
                      "nz-input",
                      "",
                      "name",
                      "search",
                      "placeholder",
                      "Search by name",
                      "type",
                      "text",
                      3,
                      "ngModel",
                      "ngModelChange",
                    ],
                    ["suffixIconSearch", ""],
                    ["nz-icon", "", "nzType", "search"],
                  ],
                  template: function (o, r) {
                    if (
                      (1 & o &&
                        (t.TgZ(0, "nz-card", 0)(1, "nz-skeleton", 1)(
                          2,
                          "nz-table",
                          2,
                          3
                        )(4, "thead")(5, "tr")(6, "th", 4),
                        t._uU(7, "Category"),
                        t.qZA(),
                        t.TgZ(8, "th", 5),
                        t._uU(9, "Associated Projects"),
                        t.qZA()()(),
                        t.TgZ(10, "tbody"),
                        t.YNc(11, Y, 15, 12, "tr", 6),
                        t.qZA()()()(),
                        t.YNc(12, I, 2, 0, "ng-template", null, 7, t.W1O)),
                      2 & o)
                    ) {
                      const i = t.MAs(3),
                        l = t.MAs(13);
                      t.Q6J("nzExtra", l),
                        t.xp6(1),
                        t.Q6J("nzActive", !0)("nzLoading", r.loading)(
                          "nzParagraph",
                          t.DdM(14, R)
                        ),
                        t.xp6(1),
                        t.Q6J("nzData", r.filteredCategories)(
                          "nzLoading",
                          r.loading
                        )(
                          "nzNoResult",
                          "Categories can be created while updating or creating projects."
                        )("nzPaginationType", "small")("nzSize", "small"),
                        t.xp6(4),
                        t.Q6J("nzWidth", "300px")("nzAlign", "left"),
                        t.xp6(2),
                        t.Q6J("nzAlign", "left"),
                        t.xp6(3),
                        t.Q6J("ngForOf", i.data)("ngForTrackBy", r.trackByFn);
                    }
                  },
                  dependencies: [
                    f.sg,
                    A.wO,
                    A.r9,
                    x.cm,
                    x.RR,
                    M.bd,
                    Z.ng,
                    g.N8,
                    g.Uo,
                    g._C,
                    g.Om,
                    g.p0,
                    g.$Z,
                    g.UX,
                    F.j,
                    J.SY,
                    y.NU,
                    y.$1,
                    O.ix,
                    E.w,
                    Q.dQ,
                    P.Ls,
                    S.Lr,
                    d._Y,
                    d.Fj,
                    d.JJ,
                    d.JL,
                    d.On,
                    d.F,
                    v.Zp,
                    v.gB,
                    v.ke,
                  ],
                })),
                s
              );
            })(),
          },
        ];
      let W = (() => {
        var e;
        class s {}
        return (
          ((e = s).ɵfac = function (o) {
            return new (o || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [u.Bz.forChild(K), u.Bz] })),
          s
        );
      })();
      var G = n(39787);
      let H = (() => {
        var e;
        class s {}
        return (
          ((e = s).ɵfac = function (o) {
            return new (o || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({
            imports: [
              f.ez,
              W,
              x.b1,
              M.vh,
              Z.H0,
              g.HQ,
              F.X,
              J.cg,
              y.zf,
              O.sL,
              P.PV,
              S.U5,
              G.l,
              d.u5,
              v.o7,
            ],
          })),
          s
        );
      })();
    },
    53980: (B, C, n) => {
      n.d(C, { s: () => T });
      var f = n(26857),
        u = n(65879),
        z = n(69862);
      let T = (() => {
        var c;
        class m extends f.P {
          constructor(t) {
            super(),
              (this.http = t),
              (this.root = `${this.API_BASE_URL}/project-categories`);
          }
          create(t) {
            return this._post(this.http, this.root, t);
          }
          get() {
            return this._get(this.http, `${this.root}`);
          }
          getByTeamId(t) {
            return this._get(this.http, `${this.root}/${t}`);
          }
          getByOrg() {
            return this._get(this.http, `${this.root}/org-categories`);
          }
          updateColor(t, _) {
            return this._put(this.http, `${this.root}/${t}`, { color: _ });
          }
          deleteById(t) {
            return this._delete(this.http, `${this.root}/${t}`);
          }
        }
        return (
          ((c = m).ɵfac = function (t) {
            return new (t || c)(u.LFG(z.eN));
          }),
          (c.ɵprov = u.Yz7({ token: c, factory: c.ɵfac, providedIn: "root" })),
          m
        );
      })();
    },
  },
]);
