"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [554],
  {
    9554: (D, h, o) => {
      o.r(h), o.d(h, { ClientsModule: () => rt });
      var _ = o(96814),
        v = o(35420),
        d = o(15861),
        p = o(60095),
        x = o(21406),
        m = o(69649),
        u = o(86408),
        g = o(27782),
        t = o(65879),
        s = o(90586),
        C = o(99783),
        Z = o(72042),
        M = o(64532),
        T = o(42840),
        P = o(70855),
        K = o(41958),
        z = o(13740),
        N = o(10095),
        f = o(3599),
        y = o(20824),
        E = o(19035),
        U = o(62595),
        F = o(82962),
        A = o(92574),
        O = o(43389),
        I = o(8083),
        Q = o(96109),
        b = o(24139),
        L = o(82669),
        Y = o(39787);
      function $(i, a) {
        if (1 & i) {
          const l = t.EpF();
          t.TgZ(0, "button", 17),
            t.NdJ("click", function () {
              t.CHM(l);
              const e = t.oxw().$implicit,
                r = t.oxw();
              return t.KtG(r.editClient(e.id));
            }),
            t._UZ(1, "span", 18),
            t.qZA();
        }
      }
      function B(i, a) {
        if (1 & i) {
          const l = t.EpF();
          t.TgZ(0, "button", 19),
            t.NdJ("nzOnConfirm", function () {
              t.CHM(l);
              const e = t.oxw().$implicit,
                r = t.oxw();
              return t.KtG(r.deleteClient(e.id));
            }),
            t._UZ(1, "span", 20),
            t.qZA();
        }
      }
      function G(i, a) {
        if (1 & i) {
          const l = t.EpF();
          t.TgZ(0, "tr", 10)(1, "td", 11),
            t.NdJ("click", function () {
              const r = t.CHM(l).$implicit,
                c = t.oxw();
              return t.KtG(c.editClient(r.id));
            }),
            t.TgZ(2, "span"),
            t._uU(3),
            t.qZA()(),
            t.TgZ(4, "td", 11),
            t.NdJ("click", function () {
              const r = t.CHM(l).$implicit,
                c = t.oxw();
              return t.KtG(c.editClient(r.id));
            }),
            t.TgZ(5, "span", 12),
            t._uU(6),
            t.qZA()(),
            t.TgZ(7, "td", 13)(8, "div", 14)(9, "nz-space"),
            t.YNc(10, $, 2, 0, "button", 15),
            t.YNc(11, B, 2, 0, "button", 16),
            t.qZA()()()();
        }
        if (2 & i) {
          const l = a.$implicit;
          t.xp6(3),
            t.Oqu(l.name),
            t.xp6(3),
            t.hij(
              " ",
              (l.projects_count || 0) <= 0
                ? "No projects available"
                : (l.projects_count || 0) + "Expedientes",
              " "
            );
        }
      }
      function j(i, a) {
        1 & i && t._UZ(0, "span", 28);
      }
      function R(i, a) {
        if (1 & i) {
          const l = t.EpF();
          t.TgZ(0, "form", 24),
            t.NdJ("ngSubmit", function () {
              t.CHM(l);
              const e = t.oxw(2);
              return t.KtG(e.searchProjects());
            }),
            t.TgZ(1, "nz-input-group", 25),
            t._UZ(2, "input", 26),
            t.qZA(),
            t.YNc(3, j, 1, 0, "ng-template", null, 27, t.W1O),
            t.qZA();
        }
        if (2 & i) {
          const l = t.MAs(4),
            n = t.oxw(2);
          t.Q6J("formGroup", n.searchForm)("nzLayout", "vertical"),
            t.xp6(1),
            t.Q6J("nzSuffix", l),
            t.xp6(1),
            t.Q6J("formControlName", "search");
        }
      }
      function H(i, a) {
        if (1 & i) {
          const l = t.EpF();
          t.TgZ(0, "button", 29),
            t.NdJ("click", function () {
              t.CHM(l);
              const e = t.oxw(2);
              return t.KtG((e.showClientsModal = !0));
            }),
            t._uU(1, "Create Client"),
            t.qZA();
        }
      }
      function W(i, a) {
        if ((1 & i && t._UZ(0, "worklenz-toggle-menu-button", 30), 2 & i)) {
          const l = t.oxw(2);
          t.Q6J("key", l.menu.CLIENTS_MENU);
        }
      }
      function V(i, a) {
        1 & i &&
          (t.TgZ(0, "nz-space"),
          t.YNc(1, R, 5, 4, "form", 21),
          t.YNc(2, H, 2, 0, "button", 22),
          t.YNc(3, W, 1, 1, "worklenz-toggle-menu-button", 23),
          t.qZA());
      }
      function k(i, a) {
        if (1 & i) {
          const l = t.EpF();
          t.ynx(0),
            t.TgZ(1, "nz-spin", 31)(2, "form", 32)(3, "nz-form-item")(
              4,
              "nz-form-label",
              33
            ),
            t._uU(5, "Name"),
            t.qZA(),
            t.TgZ(6, "nz-form-control", 34),
            t._UZ(7, "input", 35),
            t.qZA()()(),
            t.TgZ(8, "button", 36),
            t.NdJ("click", function () {
              t.CHM(l);
              const e = t.oxw();
              return t.KtG(e.handleOk());
            }),
            t._uU(9),
            t.qZA()(),
            t.BQk();
        }
        if (2 & i) {
          const l = t.oxw();
          t.xp6(1),
            t.Q6J("nzSpinning", l.loadingSingleClient),
            t.xp6(1),
            t.Q6J("formGroup", l.form)("nzLayout", "vertical"),
            t.xp6(2),
            t.Q6J("nzSpan", null),
            t.xp6(2),
            t.Q6J("nzSpan", null),
            t.xp6(1),
            t.Q6J("formControlName", "name"),
            t.xp6(2),
            t.Oqu(l.action);
        }
      }
      const w = function () {
          return { rows: 5 };
        },
        X = function () {
          return [];
        },
        q = [
          {
            path: "",
            component: (() => {
              var i;
              class a {
                constructor(n, e, r, c, J) {
                  (this.app = n),
                    (this.api = e),
                    (this.fb = r),
                    (this.menu = c),
                    (this.utilsService = J),
                    (this.showClientsModal = !1),
                    (this.client = {}),
                    (this.model = {}),
                    (this.loading = !1),
                    (this.loadingSingleClient = !1),
                    (this.action = "Create"),
                    (this.total = 0),
                    (this.pageSize = x.L8),
                    (this.pageIndex = 1),
                    (this.paginationSizes = [5, 10, 15, 20, 50, 100]),
                    (this.sortField = null),
                    (this.sortOrder = null),
                    this.app.setTitle("Manage Clients"),
                    u.s.track(g.R$),
                    (this.form = this.fb.group({
                      name: [null, [p.kI.required]],
                    })),
                    (this.searchForm = this.fb.group({ search: [] })),
                    this.searchForm.valueChanges.subscribe(() =>
                      this.searchProjects()
                    );
                }
                addClient() {
                  var n = this;
                  return (0, d.Z)(function* () {
                    try {
                      const e = { name: n.form.controls.name.value };
                      (yield n.api.create(e)).done &&
                        (u.s.track(g.lp), n.closeModal(), yield n.getClients());
                    } catch (e) {
                      (0, m.tu)(e);
                    }
                  })();
                }
                getClients() {
                  var n = this;
                  return (0, d.Z)(function* () {
                    try {
                      n.loading = !0;
                      const e = yield n.api.get(
                        n.pageIndex,
                        n.pageSize,
                        n.sortField,
                        n.sortOrder,
                        n.searchForm.value.search
                      );
                      e.done &&
                        ((n.model = e.body),
                        (n.total = n.model.total || 0),
                        n.utilsService.handleLastIndex(
                          n.total,
                          n.model.data?.length || 0,
                          n.pageIndex,
                          (r) => {
                            (n.pageIndex = r), n.getClients();
                          }
                        )),
                        (n.loading = !1);
                    } catch (e) {
                      (0, m.tu)(e), (n.loading = !1);
                    }
                  })();
                }
                getClient(n) {
                  var e = this;
                  return (0, d.Z)(function* () {
                    try {
                      e.loadingSingleClient = !0;
                      const r = yield e.api.getById(n);
                      r.done &&
                        ((e.client = r.body),
                        e.form.controls.name.setValue(e.client.name)),
                        (e.loadingSingleClient = !1);
                    } catch (r) {
                      (0, m.tu)(r), (e.loadingSingleClient = !1);
                    }
                  })();
                }
                updateClient() {
                  var n = this;
                  return (0, d.Z)(function* () {
                    if (n.client && n.client.id)
                      try {
                        n.loadingSingleClient = !0;
                        const e = { name: n.form.controls.name.value },
                          r = yield n.api.update(n.client.id, e);
                        (n.loadingSingleClient = !1),
                          r.done && (n.closeModal(), yield n.getClients());
                      } catch (e) {
                        (n.loadingSingleClient = !1), (0, m.tu)(e);
                      }
                  })();
                }
                deleteClient(n) {
                  var e = this;
                  return (0, d.Z)(function* () {
                    if (n)
                      try {
                        (yield e.api.delete(n)).done && (yield e.getClients());
                      } catch (r) {
                        (0, m.tu)(r);
                      }
                  })();
                }
                editClient(n) {
                  var e = this;
                  return (0, d.Z)(function* () {
                    n &&
                      (yield e.getClient(n),
                      (e.action = "Update"),
                      (e.showClientsModal = !0));
                  })();
                }
                closeModal() {
                  (this.showClientsModal = !1),
                    this.form.reset(),
                    (this.action = "Create");
                }
                handleOk() {
                  var n = this;
                  return (0, d.Z)(function* () {
                    n.client && n.client.id
                      ? yield n.updateClient()
                      : yield n.addClient();
                  })();
                }
                searchProjects() {
                  var n = this;
                  return (0, d.Z)(function* () {
                    n.getClients();
                  })();
                }
                onQueryParamsChange(n) {
                  var e = this;
                  return (0, d.Z)(function* () {
                    const { pageSize: r, pageIndex: c, sort: J } = n;
                    (e.pageIndex = c), (e.pageSize = r);
                    const S = J.find((at) => null !== at.value);
                    (e.sortField = (S && S.key) || null),
                      (e.sortOrder = (S && S.value) || null),
                      yield e.getClients();
                  })();
                }
              }
              return (
                ((i = a).ɵfac = function (n) {
                  return new (n || i)(
                    t.Y36(s.z),
                    t.Y36(C.Q),
                    t.Y36(p.qu),
                    t.Y36(Z.h),
                    t.Y36(M.F)
                  );
                }),
                (i.ɵcmp = t.Xpm({
                  type: i,
                  selectors: [["worklenz-clients"]],
                  decls: 16,
                  vars: 18,
                  consts: [
                    [3, "nzExtra"],
                    [3, "nzActive", "nzLoading", "nzParagraph"],
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
                      "nzQueryParams",
                    ],
                    ["table", ""],
                    [
                      "nzAlign",
                      "left",
                      "nzColumnKey",
                      "name",
                      "scope",
                      "col",
                      3,
                      "nzSortFn",
                    ],
                    ["colspan", "2", "nzAlign", "left", "scope", "col"],
                    ["class", "actions-row", 4, "ngFor", "ngForOf"],
                    ["searchTemplate", ""],
                    [
                      "nzPlacement",
                      "right",
                      3,
                      "nzVisible",
                      "nzClosable",
                      "nzTitle",
                      "nzOnClose",
                      "nzVisibleChange",
                    ],
                    [4, "nzDrawerContent"],
                    [1, "actions-row"],
                    [1, "cursor-pointer", 3, "click"],
                    ["nz-typography", "", "nzType", "secondary"],
                    [1, "actions-col"],
                    [1, "actions"],
                    [
                      "nz-button",
                      "",
                      "nz-tooltip",
                      "",
                      "nzSize",
                      "small",
                      "nzTooltipPlacement",
                      "top",
                      "nzTooltipTitle",
                      "Edit",
                      "nzType",
                      "default",
                      3,
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
                      "nzOkText",
                      "Yes",
                      "nzPopconfirmTitle",
                      "Are you sure?",
                      "nzSize",
                      "small",
                      "nzTooltipPlacement",
                      "top",
                      "nzTooltipTitle",
                      "Delete",
                      "nzType",
                      "default",
                      3,
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
                      "nzTooltipPlacement",
                      "top",
                      "nzTooltipTitle",
                      "Edit",
                      "nzType",
                      "default",
                      3,
                      "click",
                    ],
                    ["nz-icon", "", "nzType", "edit"],
                    [
                      "nz-button",
                      "",
                      "nz-popconfirm",
                      "",
                      "nz-tooltip",
                      "",
                      "nzOkText",
                      "Yes",
                      "nzPopconfirmTitle",
                      "Are you sure?",
                      "nzSize",
                      "small",
                      "nzTooltipPlacement",
                      "top",
                      "nzTooltipTitle",
                      "Delete",
                      "nzType",
                      "default",
                      3,
                      "nzOnConfirm",
                    ],
                    ["nz-icon", "", "nzType", "delete"],
                    [
                      "nz-form",
                      "",
                      3,
                      "formGroup",
                      "nzLayout",
                      "ngSubmit",
                      4,
                      "nzSpaceItem",
                    ],
                    [
                      "nz-button",
                      "",
                      "nzType",
                      "primary",
                      3,
                      "click",
                      4,
                      "nzSpaceItem",
                    ],
                    [3, "key", 4, "nzSpaceItem"],
                    ["nz-form", "", 3, "formGroup", "nzLayout", "ngSubmit"],
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
                    [3, "key"],
                    [3, "nzSpinning"],
                    ["nz-form", "", 3, "formGroup", "nzLayout"],
                    ["nzRequired", "", 3, "nzSpan"],
                    ["nzErrorTip", "Please enter a name!", 3, "nzSpan"],
                    [
                      "nz-input",
                      "",
                      "placeholder",
                      "Name",
                      3,
                      "formControlName",
                    ],
                    [
                      "nz-button",
                      "",
                      "nzBlock",
                      "",
                      "nzType",
                      "primary",
                      "type",
                      "button",
                      3,
                      "click",
                    ],
                  ],
                  template: function (n, e) {
                    if (
                      (1 & n &&
                        (t.TgZ(0, "nz-card", 0)(1, "nz-skeleton", 1)(
                          2,
                          "nz-table",
                          2,
                          3
                        ),
                        t.NdJ("nzQueryParams", function (c) {
                          return e.onQueryParamsChange(c);
                        }),
                        t.TgZ(4, "thead")(5, "tr")(6, "th", 4),
                        t._uU(7, "Name"),
                        t.qZA(),
                        t.TgZ(8, "th", 5),
                        t._uU(9, "Projects"),
                        t.qZA()()(),
                        t.TgZ(10, "tbody"),
                        t.YNc(11, G, 12, 2, "tr", 6),
                        t.qZA()()(),
                        t.YNc(12, V, 4, 0, "ng-template", null, 7, t.W1O),
                        t.qZA(),
                        t.TgZ(14, "nz-drawer", 8),
                        t.NdJ("nzOnClose", function () {
                          return e.closeModal();
                        })("nzVisibleChange", function (c) {
                          return (e.showClientsModal = c);
                        }),
                        t.YNc(15, k, 10, 7, "ng-container", 9),
                        t.qZA()),
                      2 & n)
                    ) {
                      const r = t.MAs(3),
                        c = t.MAs(13);
                      t.Q6J("nzExtra", c),
                        t.xp6(1),
                        t.Q6J("nzActive", !0)("nzLoading", e.loading)(
                          "nzParagraph",
                          t.DdM(16, w)
                        ),
                        t.xp6(1),
                        t.Q6J("nzData", e.model.data || t.DdM(17, X))(
                          "nzFrontPagination",
                          !1
                        )("nzLoading", e.loading)("nzPageIndex", e.pageIndex)(
                          "nzPageSizeOptions",
                          e.paginationSizes
                        )("nzPageSize", e.pageSize)("nzTotal", e.total),
                        t.xp6(4),
                        t.Q6J("nzSortFn", !0),
                        t.xp6(5),
                        t.Q6J("ngForOf", r.data),
                        t.xp6(3),
                        t.MGl("nzTitle", "", e.action, " Client"),
                        t.Q6J("nzVisible", e.showClientsModal)(
                          "nzClosable",
                          !0
                        );
                    }
                  },
                  dependencies: [
                    _.sg,
                    T.ix,
                    P.w,
                    K.dQ,
                    z.N8,
                    z.qD,
                    z.Uo,
                    z._C,
                    z.Om,
                    z.p0,
                    z.$Z,
                    z.UX,
                    N.t3,
                    N.SK,
                    f.Lr,
                    f.Nx,
                    f.iK,
                    f.Fd,
                    p._Y,
                    p.Fj,
                    p.JJ,
                    p.JL,
                    p.sg,
                    p.u,
                    y.Zp,
                    y.gB,
                    y.ke,
                    E.JW,
                    U.Ls,
                    F.bd,
                    A.NU,
                    A.$1,
                    O.Vz,
                    O.SQ,
                    I.ZU,
                    Q.SY,
                    b.ng,
                    L.W,
                    Y.l,
                  ],
                })),
                a
              );
            })(),
          },
        ];
      let tt = (() => {
        var i;
        class a {}
        return (
          ((i = a).ɵfac = function (n) {
            return new (n || i)();
          }),
          (i.ɵmod = t.oAB({ type: i })),
          (i.ɵinj = t.cJS({ imports: [v.Bz.forChild(q), v.Bz] })),
          a
        );
      })();
      var nt = o(26254),
        et = o(66987),
        ot = o(81221),
        it = o(3626),
        lt = o(33410);
      let rt = (() => {
        var i;
        class a {}
        return (
          ((i = a).ɵfac = function (n) {
            return new (n || i)();
          }),
          (i.ɵmod = t.oAB({ type: i })),
          (i.ɵinj = t.cJS({
            imports: [
              _.ez,
              tt,
              nt.KJ,
              T.sL,
              z.HQ,
              et.S,
              ot.Qp,
              f.U5,
              p.UX,
              y.o7,
              E._p,
              it.lt,
              U.PV,
              F.vh,
              lt.wm,
              A.zf,
              O.BL,
              I.ZJ,
              Q.cg,
              b.H0,
              L.j,
              Y.l,
            ],
          })),
          a
        );
      })();
    },
    99783: (D, h, o) => {
      o.d(h, { Q: () => m });
      var _ = o(10708),
        v = o(26857),
        d = o(69649),
        p = o(65879),
        x = o(69862);
      let m = (() => {
        var u;
        class g extends v.P {
          constructor(s) {
            super(),
              (this.http = s),
              (this.root = `${this.API_BASE_URL}/clients`);
          }
          create(s) {
            return this._post(this.http, this.root, s);
          }
          get(s, C, Z, M, T) {
            const P = encodeURIComponent(T || "");
            return this._get(
              this.http,
              `${this.root}${(0, d.UK)({
                index: s,
                size: C,
                field: Z,
                order: M,
                search: P,
              })}`
            );
          }
          getById(s) {
            return this._get(this.http, `${this.root}/${s}`);
          }
          update(s, C) {
            return this._put(this.http, `${this.root}/${s}`, C);
          }
          delete(s) {
            return (0, _.n)(this.http.delete(`${this.root}/${s}`));
          }
        }
        return (
          ((u = g).ɵfac = function (s) {
            return new (s || u)(p.LFG(x.eN));
          }),
          (u.ɵprov = p.Yz7({ token: u, factory: u.ɵfac, providedIn: "root" })),
          g
        );
      })();
    },
  },
]);
