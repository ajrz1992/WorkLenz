"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [570],
  {
    99865: (N, F, o) => {
      o.d(F, { n: () => L });
      var p = o(15861),
        e = o(65879),
        r = o(96814),
        y = o(42840),
        O = o(3599),
        h = o(10095),
        M = o(62595),
        A = o(9691),
        f = o(41958),
        T = o(76271),
        i = o(60095),
        v = o(69649),
        x = o(20824),
        j = o(53980),
        E = o(45019),
        S = o(70855);
      const I = ["nameInput"];
      function b(D, w) {
        if (1 & D) {
          const C = e.EpF();
          e.ynx(0),
            e.TgZ(1, "input", 3, 4),
            e.NdJ("ngModelChange", function (_) {
              e.CHM(C);
              const d = e.oxw();
              return e.KtG((d.newCategoryName = _));
            })("blur", function () {
              e.CHM(C);
              const _ = e.oxw();
              return e.KtG(_.resetInputMode());
            })("keyup.enter", function (_) {
              e.CHM(C);
              const d = e.oxw();
              return _.stopPropagation(), e.KtG(d.create());
            }),
            e.qZA(),
            e.BQk();
        }
        if (2 & D) {
          const C = e.oxw();
          e.xp6(1), e.Q6J("ngModel", C.newCategoryName)("disabled", C.creating);
        }
      }
      function Q(D, w) {
        if (
          (1 & D &&
            (e.TgZ(0, "nz-option", 10),
            e.ALo(1, "safeString"),
            e._uU(2),
            e.qZA()),
          2 & D)
        ) {
          const C = w.$implicit;
          e.Q6J("nzLabel", e.lcZ(1, 3, C.name))("nzValue", C.id),
            e.xp6(2),
            e.hij(" ", C.name, " ");
        }
      }
      function k(D, w) {
        if (1 & D) {
          const C = e.EpF();
          e.ynx(0),
            e.TgZ(1, "nz-select", 5),
            e.NdJ("ngModelChange", function (_) {
              e.CHM(C);
              const d = e.oxw();
              return e.KtG((d.categoryId = _));
            })("ngModelChange", function (_) {
              e.CHM(C);
              const d = e.oxw();
              return e.KtG(d.onCategoryChange(_));
            }),
            e.YNc(2, Q, 3, 5, "nz-option", 6),
            e.TgZ(3, "nz-option", 7)(4, "button", 8),
            e.NdJ("click", function () {
              e.CHM(C);
              const _ = e.oxw();
              return e.KtG(_.newCategory());
            }),
            e._UZ(5, "span", 9),
            e._uU(6, " Nueva Categoría "),
            e.qZA()()(),
            e.BQk();
        }
        if (2 & D) {
          const C = e.oxw();
          e.xp6(1),
            e.Q6J("ngModel", C.categoryId)("nzLoading", C.loading)(
              "nzPlaceHolder",
              "Agrega una categoría al expediente"
            )("nzDisabled", C.disabled)("nzAllowClear", !0),
            e.xp6(1),
            e.Q6J("ngForOf", C.categories),
            e.xp6(1),
            e.Q6J("nzValue", "add"),
            e.xp6(1),
            e.Q6J("nzType", "dashed")("nzSize", "small"),
            e.xp6(1),
            e.Q6J("nzType", "plus")("nzTheme", "outline");
        }
      }
      let L = (() => {
        var D;
        class w {
          constructor(c, _, d, m) {
            (this.cdr = c),
              (this.api = _),
              (this.ngZone = d),
              (this.projectFormService = m),
              (this.categoryId = null),
              (this.categoryIdChange = new e.vpe()),
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
            var c = this;
            return (0, p.Z)(function* () {
              try {
                c.loading = !0;
                const _ = yield c.api.get();
                _.done && (c.categories = _.body), (c.loading = !1);
              } catch (_) {
                (c.loading = !1), (0, v.tu)(_);
              }
              c.cdr.markForCheck();
            })();
          }
          newCategory() {
            this.showCategoryInput ||
              ((this.newCategoryName = null),
              (this.showCategoryInput = !0),
              this.focusInput(),
              this.cdr.markForCheck());
          }
          onCategoryChange(c) {
            (this.categoryId = c), this.categoryIdChange.emit(this.categoryId);
          }
          resetInputMode() {
            (this.showCategoryInput = !1), (this.newCategoryName = null);
          }
          create() {
            var c = this;
            return (0, p.Z)(function* () {
              if (c.newCategoryName?.trim() && !c.creating) {
                try {
                  c.creating = !0;
                  const _ = { name: c.newCategoryName },
                    d = yield c.api.create(_);
                  d.done && (yield c.get(), c.handleCreate(d.body)),
                    (c.creating = !1);
                } catch {
                  c.creating = !1;
                }
                c.cdr.markForCheck();
              }
            })();
          }
          handleCreate(c) {
            this.onCategoryChange(c.id), this.resetInputMode();
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
          ((D = w).ɵfac = function (c) {
            return new (c || D)(
              e.Y36(e.sBO),
              e.Y36(j.s),
              e.Y36(e.R0b),
              e.Y36(E.s)
            );
          }),
          (D.ɵcmp = e.Xpm({
            type: D,
            selectors: [["worklenz-project-categories-autocomplete"]],
            viewQuery: function (c, _) {
              if ((1 & c && e.Gf(I, 5), 2 & c)) {
                let d;
                e.iGM((d = e.CRH())) && (_.nameInput = d.first);
              }
            },
            inputs: { categoryId: "categoryId", disabled: "disabled" },
            outputs: { categoryIdChange: "categoryIdChange" },
            standalone: !0,
            features: [e.jDz],
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
                "Indique un nombre para la categoría",
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
            template: function (c, _) {
              1 & c &&
                (e.TgZ(0, "nz-form-item")(1, "nz-form-label", 0),
                e._uU(2, "Categoría"),
                e.qZA(),
                e.TgZ(3, "nz-form-control", 1),
                e.YNc(4, b, 3, 2, "ng-container", 2),
                e.YNc(5, k, 7, 11, "ng-container", 2),
                e.qZA()()),
                2 & c &&
                  (e.xp6(1),
                  e.Q6J("nzSpan", null),
                  e.xp6(2),
                  e.Q6J("ngSwitch", _.showCategoryInput)("nzSpan", null)(
                    "nzExtra",
                    _.showCategoryInput ? "Presiona enter para guardar!" : ""
                  ),
                  e.xp6(1),
                  e.Q6J("ngSwitchCase", !0),
                  e.xp6(1),
                  e.Q6J("ngSwitchCase", !1));
            },
            dependencies: [
              r.ez,
              r.sg,
              r.RF,
              r.n9,
              y.sL,
              y.ix,
              S.w,
              f.dQ,
              O.U5,
              h.t3,
              h.SK,
              O.Nx,
              O.iK,
              O.Fd,
              h.Jb,
              M.PV,
              M.Ls,
              A.LV,
              A.Ip,
              A.Vq,
              f.vG,
              T.m,
              i.UX,
              i.Fj,
              i.JJ,
              i.u5,
              i.On,
              x.o7,
              x.Zp,
            ],
            changeDetection: 0,
          })),
          w
        );
      })();
    },
    13490: (N, F, o) => {
      o.d(F, { g: () => Ue });
      var p = o(15861),
        e = o(65879),
        r = o(60095),
        y = o(21406),
        O = o(59556),
        h = o(69649),
        M = o(9691),
        A = o(43389),
        f = o(55695),
        T = o(82669),
        i = o(3599),
        v = o(95717),
        x = o(62595),
        j = o(96814),
        E = o(20824),
        S = o(99783),
        I = o(10095);
      function b(l, g) {
        1 & l &&
          (e.TgZ(0, "nz-auto-option"),
          e._UZ(1, "span", 6),
          e._uU(2, " Loading Data... "),
          e.qZA());
      }
      function Q(l, g) {
        if (
          (1 & l && (e.TgZ(0, "nz-auto-option", 9), e._uU(1), e.qZA()), 2 & l)
        ) {
          const a = e.oxw(2);
          e.s9C("nzValue", a.newName),
            e.xp6(1),
            e.hij('+ ADD "', a.newName, '"');
        }
      }
      function k(l, g) {
        if (
          (1 & l && (e.TgZ(0, "nz-auto-option", 9), e._uU(1), e.qZA()), 2 & l)
        ) {
          const a = g.$implicit;
          e.Q6J("nzValue", a.name), e.xp6(1), e.Oqu(a.name);
        }
      }
      function L(l, g) {
        if (
          (1 & l &&
            (e.TgZ(0, "span"),
            e.YNc(1, Q, 2, 2, "nz-auto-option", 7),
            e.YNc(2, k, 2, 2, "nz-auto-option", 8),
            e.qZA()),
          2 & l)
        ) {
          const a = e.oxw();
          e.xp6(1),
            e.Q6J("ngIf", a.isNew),
            e.xp6(1),
            e.Q6J("ngForOf", a.clients);
        }
      }
      let D = (() => {
        var l;
        class g {
          constructor(t, n) {
            (this.api = t),
              (this.fb = n),
              (this.nameChange = new e.vpe()),
              (this.name = null),
              (this.searching = !1),
              (this.isNew = !1),
              (this.newName = null),
              (this.clients = []),
              (this.total = 0),
              (this.form = this.fb.group({ name: [] }));
          }
          ngOnInit() {
            var t = this;
            return (0, p.Z)(function* () {
              t.form.controls.name.setValue(t.name || null),
                t.form.get("name")?.valueChanges.subscribe((n) => {
                  if (n)
                    return (
                      (t.newName = n),
                      void (t.isNew = !t.clients.some((s) => s.name === n))
                    );
                  t.isNew = !1;
                }),
                yield t.get();
            })();
          }
          get() {
            var t = this;
            return (0, p.Z)(function* () {
              try {
                const n = yield t.api.get(
                  1,
                  5,
                  null,
                  null,
                  t.form.value.name || null
                );
                n.done &&
                  ((t.clients = n.body.data || []),
                  (t.total = t.clients.length));
              } catch (n) {
                (0, h.tu)(n);
              }
            })();
          }
          search() {
            var t = this;
            return (0, p.Z)(function* () {
              t.emitChange(),
                (t.searching = !0),
                yield t.get(),
                (t.searching = !1);
            })();
          }
          emitChange() {
            this.form.valid &&
              this.nameChange.emit(this.form.value.name.trim());
          }
        }
        return (
          ((l = g).ɵfac = function (t) {
            return new (t || l)(e.Y36(S.Q), e.Y36(r.qu));
          }),
          (l.ɵcmp = e.Xpm({
            type: l,
            selectors: [["worklenz-clients-autocomplete"]],
            inputs: { name: "name" },
            outputs: { nameChange: "nameChange" },
            standalone: !0,
            features: [e.jDz],
            decls: 10,
            vars: 9,
            consts: [
              ["nz-form", "", 3, "formGroup", "nzLayout"],
              [3, "nzSpan", "nzTooltipTitle"],
              [3, "nzSpan"],
              [
                "nz-input",
                "",
                "placeholder",
                "Selecciona el Cliente",
                3,
                "formControlName",
                "nzAutocomplete",
                "ngModelChange",
              ],
              ["jobTitlesAutoComplete", ""],
              [4, "ngIf"],
              ["nz-icon", "", "nzType", "loading", 1, "loading-icon"],
              [3, "nzValue", 4, "ngIf"],
              [3, "nzValue", 4, "ngFor", "ngForOf"],
              [3, "nzValue"],
            ],
            template: function (t, n) {
              if (
                (1 & t &&
                  (e.TgZ(0, "form", 0)(1, "nz-form-item")(
                    2,
                    "nz-form-label",
                    1
                  ),
                  e._uU(3, "Cliente"),
                  e.qZA(),
                  e.TgZ(4, "nz-form-control", 2)(5, "input", 3),
                  e.NdJ("ngModelChange", function () {
                    return n.search();
                  }),
                  e.qZA(),
                  e.TgZ(6, "nz-autocomplete", null, 4),
                  e.YNc(8, b, 3, 0, "nz-auto-option", 5),
                  e.YNc(9, L, 3, 2, "span", 5),
                  e.qZA()()()()),
                2 & t)
              ) {
                const s = e.MAs(7);
                e.Q6J("formGroup", n.form)("nzLayout", "vertical"),
                  e.xp6(2),
                  e.Q6J("nzSpan", null)(
                    "nzTooltipTitle",
                    "You can manage clients under settings."
                  ),
                  e.xp6(2),
                  e.Q6J("nzSpan", null),
                  e.xp6(1),
                  e.Q6J("formControlName", "name")("nzAutocomplete", s),
                  e.xp6(3),
                  e.Q6J("ngIf", n.searching),
                  e.xp6(1),
                  e.Q6J("ngIf", !n.searching);
              }
            },
            dependencies: [
              r.UX,
              r._Y,
              r.Fj,
              r.JJ,
              r.JL,
              r.sg,
              r.u,
              i.U5,
              I.t3,
              I.SK,
              i.Lr,
              i.Nx,
              i.iK,
              i.Fd,
              v.ic,
              v.gi,
              v.NB,
              v.Pf,
              x.PV,
              x.Ls,
              j.O5,
              j.sg,
              E.o7,
              E.Zp,
            ],
          })),
          g
        );
      })();
      var w = o(42840),
        C = o(19035),
        c = o(72095),
        _ = o(52682),
        d = o(62787),
        m = o(86408),
        u = o(27782),
        z = o(76271),
        Z = o(34302),
        U = o(96109),
        R = o(8083),
        B = o(66987),
        V = o(93903),
        X = o(99865),
        H = o(33640),
        q = o(16676),
        $ = o.n(q),
        Y = o(68373),
        ee = o(2919),
        W = o(96928),
        te = o(62612),
        ne = o(9172),
        oe = o(31215),
        re = o(45538),
        ae = o(90586),
        ie = o(52732),
        se = o(32333),
        le = o(55012),
        ce = o(97192),
        me = o(64532),
        _e = o(45019),
        ue = o(19350),
        de = o(18223),
        pe = o(70855),
        he = o(41958),
        G = o(73460);
      const ge = ["projectName"],
        fe = ["memberSearchInput"],
        ze = ["projectManagerSelector"],
        Ce = ["outsideClicker"];
      function ve(l, g) {
        1 & l && e._UZ(0, "nz-alert", 38),
          2 & l &&
            e.Q6J("nzType", "warning")(
              "nzMessage",
              "Members do not have permissions to change settings."
            );
      }
      function ye(l, g) {
        if (1 & l) {
          const a = e.EpF();
          e.TgZ(0, "nz-form-item")(1, "nz-form-label", 6),
            e._uU(2, "Key"),
            e.qZA(),
            e.TgZ(3, "nz-form-control", 16)(4, "input", 39),
            e.NdJ("keyup", function () {
              e.CHM(a);
              const n = e.oxw(2);
              return e.KtG(n.onKeyChange());
            }),
            e.qZA()()();
        }
        2 & l &&
          (e.xp6(1),
          e.Q6J("nzSpan", null),
          e.xp6(2),
          e.Q6J("nzSpan", null),
          e.xp6(1),
          e.Q6J("formControlName", "key")("maxlength", 5));
      }
      function Me(l, g) {
        if (1 & l) {
          const a = e.EpF();
          e.TgZ(0, "li", 40),
            e.NdJ("click", function () {
              const s = e.CHM(a).$implicit,
                P = e.oxw(2);
              return e.KtG(P.setColorCode(s));
            }),
            e.TgZ(1, "nz-tag", 41),
            e._uU(2, "\xa0 "),
            e.qZA()();
        }
        if (2 & l) {
          const a = g.$implicit;
          e.xp6(1), e.Q6J("nzColor", a);
        }
      }
      function Te(l, g) {
        if (
          (1 & l &&
            (e.TgZ(0, "nz-option", 42),
            e.ALo(1, "safeString"),
            e._UZ(2, "span", 43),
            e.ALo(3, "safeString"),
            e._uU(4),
            e.qZA()),
          2 & l)
        ) {
          const a = g.$implicit;
          e.Q6J("nzLabel", e.lcZ(1, 6, a.name))("nzValue", a.id),
            e.xp6(2),
            e.Udp("color", a.color_code),
            e.Q6J("nzType", e.lcZ(3, 8, a.icon)),
            e.xp6(2),
            e.hij(" ", a.name, " ");
        }
      }
      function xe(l, g) {
        if (
          (1 & l &&
            (e.TgZ(0, "nz-option", 42),
            e.ALo(1, "safeString"),
            e._UZ(2, "nz-badge", 44),
            e.qZA()),
          2 & l)
        ) {
          const a = g.$implicit;
          e.Q6J("nzLabel", e.lcZ(1, 4, a.name))("nzValue", a.id),
            e.xp6(2),
            e.Q6J("nzColor", a.color_code + "69")("nzText", a.name);
        }
      }
      function Pe(l, g) {
        if (1 & l) {
          const a = e.EpF();
          e.TgZ(0, "worklenz-clients-autocomplete", 45),
            e.NdJ("nameChange", function (n) {
              e.CHM(a);
              const s = e.oxw(2);
              return e.KtG(s.onNameChangeSubmit(n));
            }),
            e.qZA();
        }
        if (2 & l) {
          const a = e.oxw(2);
          e.Q6J("name", a.clientName);
        }
      }
      function Ae(l, g) {
        if (1 & l) {
          const a = e.EpF();
          e.ynx(0),
            e._UZ(1, "nz-avatar", 46),
            e.ALo(2, "firstCharUpper"),
            e.TgZ(3, "span", 47),
            e._uU(4),
            e.qZA(),
            e.TgZ(5, "span", 48),
            e.NdJ("click", function () {
              e.CHM(a);
              const n = e.oxw(2);
              return e.KtG(n.handleMemberChange(null));
            }),
            e._UZ(6, "span", 49),
            e.qZA(),
            e.BQk();
        }
        if (2 & l) {
          const a = e.oxw(2);
          e.xp6(1),
            e.Udp(
              "background-color",
              a.projectManager.avatar_url
                ? "#ececec"
                : a.projectManager.color_code
            ),
            e.Q6J("nzSize", 24)("nzSrc", a.projectManager.avatar_url)(
              "nzText",
              e.lcZ(2, 8, a.projectManager.name)
            )("nzTooltipPlacement", "top")(
              "nzTooltipTitle",
              a.projectManager.name
            ),
            e.xp6(3),
            e.Oqu(a.projectManager.name);
        }
      }
      function je(l, g) {
        1 & l && (e.TgZ(0, "span", 50), e._UZ(1, "nz-avatar", 51), e.qZA()),
          2 & l && (e.xp6(1), e.Q6J("nzSize", 26)("nzIcon", "plus"));
      }
      function Oe(l, g) {
        1 & l &&
          (e.TgZ(0, "small", 63), e._uU(1, "(Pending Invitation)"), e.qZA());
      }
      function Ee(l, g) {
        if (1 & l) {
          const a = e.EpF();
          e.TgZ(0, "li", 57),
            e.NdJ("click", function () {
              const s = e.CHM(a).$implicit,
                P = e.oxw(3);
              return e.KtG(P.handleMemberChange(s));
            }),
            e.TgZ(1, "div", 58),
            e._UZ(2, "nz-avatar", 59),
            e.ALo(3, "firstCharUpper"),
            e.TgZ(4, "div", 60)(5, "span", 61),
            e._uU(6),
            e.qZA(),
            e.TgZ(7, "small", 50),
            e._uU(8),
            e.YNc(9, Oe, 2, 0, "small", 62),
            e.qZA()()()();
        }
        if (2 & l) {
          const a = g.$implicit;
          e.Q6J("nzDisabled", a.pending_invitation),
            e.xp6(2),
            e.Udp("background-color", a.avatar_url ? "#ececec" : a.color_code),
            e.Q6J("nzSize", 24)("nzSrc", a.avatar_url)(
              "nzText",
              e.lcZ(3, 11, a.name)
            )("nzTooltipPlacement", "top")("nzTooltipTitle", a.name),
            e.xp6(4),
            e.Oqu(a.name),
            e.xp6(2),
            e.hij(" ", a.email, " "),
            e.xp6(1),
            e.Q6J("ngIf", a.pending_invitation);
        }
      }
      function De(l, g) {
        if (1 & l) {
          const a = e.EpF();
          e.TgZ(0, "ul", 52)(1, "li", 53)(2, "input", 54, 55),
            e.NdJ("input", function () {
              e.CHM(a);
              const n = e.oxw(2);
              return e.KtG(n.getTeamMembers());
            }),
            e.qZA()(),
            e.YNc(4, Ee, 10, 13, "li", 56),
            e.ALo(5, "searchByName"),
            e.qZA();
        }
        if (2 & l) {
          const a = e.oxw(2);
          e.xp6(4),
            e.Q6J("ngForOf", e.xi3(5, 2, a.teamMembers, a.searchingName))(
              "ngForTrackBy",
              a.trackById
            );
        }
      }
      function Ze(l, g) {
        if (1 & l) {
          const a = e.EpF();
          e.TgZ(0, "button", 66),
            e.NdJ("nzOnConfirm", function () {
              e.CHM(a);
              const n = e.oxw(3);
              return e.KtG(n.delete());
            }),
            e._uU(1, " Delete Project "),
            e.qZA();
        }
        if (2 & l) {
          const a = e.oxw(3);
          e.Q6J("nzLoading", a.deletingProject)("nzOkText", "ok")(
            "nzPopconfirmTitle",
            "Are you sure?"
          )("nzType", "dashed");
        }
      }
      function Ie(l, g) {
        if (1 & l) {
          const a = e.EpF();
          e.ynx(0),
            e.TgZ(1, "button", 64),
            e.NdJ("click", function () {
              e.CHM(a);
              const n = e.oxw(2);
              return e.KtG(n.submit());
            }),
            e._uU(2),
            e.qZA(),
            e.YNc(3, Ze, 2, 4, "button", 65),
            e.BQk();
        }
        if (2 & l) {
          const a = e.oxw(2);
          e.xp6(1),
            e.Q6J("nzLoading", a.updatingProject)("nzType", "primary"),
            e.xp6(1),
            e.Oqu(a.submitButtonText),
            e.xp6(1),
            e.Q6J("ngIf", a.projectId);
        }
      }
      function be(l, g) {
        if (
          (1 & l &&
            (e.TgZ(0, "div", 70)(1, "small", 71),
            e.ALo(2, "date"),
            e._uU(3),
            e.ALo(4, "fromNow"),
            e.qZA()()),
          2 & l)
        ) {
          const a = e.oxw(3);
          e.xp6(1),
            e.Q6J("nzTooltipPlacement", "right")(
              "nzTooltipTitle",
              e.xi3(2, 4, a.model.created_at, "medium")
            ),
            e.xp6(2),
            e.AsE(
              " Created ",
              e.lcZ(4, 7, a.model.created_at),
              " by ",
              a.model.project_owner,
              " "
            );
        }
      }
      function Fe(l, g) {
        if (
          (1 & l &&
            (e.TgZ(0, "div", 70)(1, "small", 71),
            e.ALo(2, "date"),
            e._uU(3),
            e.ALo(4, "fromNow"),
            e.qZA()()),
          2 & l)
        ) {
          const a = e.oxw(3);
          e.xp6(1),
            e.Q6J("nzTooltipPlacement", "right")(
              "nzTooltipTitle",
              e.xi3(2, 3, a.model.updated_at, "medium")
            ),
            e.xp6(2),
            e.hij(" Updated ", e.lcZ(4, 6, a.model.updated_at), " ");
        }
      }
      function Se(l, g) {
        if (
          (1 & l &&
            (e.ynx(0),
            e._UZ(1, "nz-divider", 67),
            e.TgZ(2, "div", 68),
            e.YNc(3, be, 5, 9, "div", 69),
            e.YNc(4, Fe, 5, 8, "div", 69),
            e.qZA(),
            e.BQk()),
          2 & l)
        ) {
          const a = e.oxw(2);
          e.xp6(3),
            e.Q6J("ngIf", a.model.created_at),
            e.xp6(1),
            e.Q6J("ngIf", a.model.updated_at);
        }
      }
      function we(l, g) {
        if (1 & l) {
          const a = e.EpF();
          e.ynx(0),
            e.TgZ(1, "nz-spin", 3),
            e.YNc(2, ve, 1, 2, "nz-alert", 4),
            e.TgZ(3, "form", 5)(4, "nz-form-item")(5, "nz-form-label", 6),
            e._uU(6, "Nombre de Expediente"),
            e.qZA(),
            e.TgZ(7, "nz-form-control", 7),
            e._UZ(8, "input", 8, 9),
            e.qZA()(),
            e.YNc(10, ye, 5, 4, "nz-form-item", 10),
            e.TgZ(11, "nz-form-item")(12, "nz-form-label", 11),
            e._uU(13, "Color de Expediente "),
            e.TgZ(14, "nz-tag", 12),
            e._uU(15, "\xa0 "),
            e.qZA()(),
            e.TgZ(16, "nz-dropdown-menu", null, 13)(18, "ul", 14),
            e.YNc(19, Me, 3, 1, "li", 15),
            e.qZA()()(),
            e.TgZ(20, "nz-form-item")(21, "nz-form-label", 16),
            e._uU(22, "Estado"),
            e.qZA(),
            e.TgZ(23, "nz-form-control", 16)(24, "nz-select", 17),
            e.YNc(25, Te, 5, 10, "nz-option", 18),
            e.qZA()()(),
            e.TgZ(26, "nz-form-item")(27, "nz-form-label", 16),
            e._uU(28, "Condición del Expediente"),
            e.qZA(),
            e.TgZ(29, "nz-form-control", 16)(30, "nz-select", 17),
            e.YNc(31, xe, 3, 6, "nz-option", 18),
            e.qZA()()(),
            e.TgZ(32, "worklenz-project-categories-autocomplete", 19),
            e.NdJ("categoryIdChange", function (n) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG((s.categoryId = n));
            }),
            e.qZA(),
            e.TgZ(33, "nz-form-item")(34, "nz-form-label", 16),
            e._uU(35, "Notas Adicionales"),
            e.qZA(),
            e.TgZ(36, "nz-form-control", 16),
            e._UZ(37, "textarea", 20),
            e.qZA()(),
            e.YNc(38, Pe, 1, 1, "worklenz-clients-autocomplete", 21),
            e.TgZ(39, "nz-form-item")(40, "nz-form-label", 16),
            e._uU(41, " Abogado Asignado "),
            e.TgZ(42, "div", 22),
            e.NdJ("nzVisibleChange", function (n) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG(s.handleOwnerVisibleChange(n));
            }),
            e.TgZ(43, "div", 23, 24),
            e.YNc(45, Ae, 7, 10, "ng-container", 10),
            e.YNc(46, je, 2, 2, "span", 25),
            e.qZA(),
            e.TgZ(47, "nz-dropdown-menu", null, 26),
            e.YNc(49, De, 6, 5, "ul", 27),
            e.qZA()()()(),
            e._UZ(50, "div", null, 28),
            e.TgZ(52, "nz-input-group", 29)(53, "div", 30)(54, "div", 31)(
              55,
              "nz-form-item"
            )(56, "nz-form-label", 16),
            e._uU(57, "Fecha de Inicio"),
            e.qZA(),
            e.TgZ(58, "nz-form-control", 16)(59, "nz-date-picker", 32),
            e.NdJ("nzOnOpenChange", function () {
              e.CHM(a);
              const n = e.oxw();
              return e.KtG(n.calculateManDays());
            }),
            e.qZA()()()(),
            e.TgZ(60, "div", 31)(61, "nz-form-item")(62, "nz-form-label", 16),
            e._uU(63, "Fecha Fin"),
            e.qZA(),
            e.TgZ(64, "nz-form-control", 16)(65, "nz-date-picker", 32),
            e.NdJ("nzOnOpenChange", function () {
              e.CHM(a);
              const n = e.oxw();
              return e.KtG(n.calculateManDays());
            }),
            e.qZA()()()(),
            e.TgZ(66, "div", 31)(67, "nz-form-item")(68, "nz-form-label", 33),
            e._uU(69, "Días laborables estimados"),
            e.qZA(),
            e.TgZ(70, "nz-form-control", 34),
            e._UZ(71, "nz-input-number", 35),
            e.qZA()()(),
            e.TgZ(72, "div", 31)(73, "nz-form-item")(74, "nz-form-label", 33),
            e._uU(75, "Días hombre estimados"),
            e.qZA(),
            e.TgZ(76, "nz-form-control", 34),
            e._UZ(77, "nz-input-number", 36),
            e.qZA()()(),
            e.TgZ(78, "div", 31)(79, "nz-form-item")(80, "nz-form-label", 33),
            e._uU(81, "Horas al día"),
            e.qZA(),
            e.TgZ(82, "nz-form-control", 34),
            e._UZ(83, "nz-input-number", 37),
            e.qZA()()()()(),
            e.YNc(84, Ie, 4, 4, "ng-container", 10),
            e.qZA(),
            e.YNc(85, Se, 5, 2, "ng-container", 10),
            e.qZA(),
            e.BQk();
        }
        if (2 & l) {
          const a = e.MAs(17),
            t = e.MAs(48),
            n = e.oxw();
          e.xp6(1),
            e.Q6J("nzSpinning", n.isLoading()),
            e.xp6(1),
            e.Q6J("ngIf", n.isMember),
            e.xp6(1),
            e.Q6J("formGroup", n.form)("nzLayout", "vertical"),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(1),
            e.Q6J("formControlName", "name"),
            e.xp6(2),
            e.Q6J("ngIf", n.projectId),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(2),
            e.Q6J("nzColor", n.activeColorCode)("nzDropdownMenu", a)(
              "nzDisabled",
              n.isMember
            )("nzTrigger", "click"),
            e.xp6(5),
            e.Q6J("ngForOf", n.COLOR_CODES),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(1),
            e.Q6J("formControlName", "status_id")(
              "nzLoading",
              n.loadingProjStatuses
            ),
            e.xp6(1),
            e.Q6J("ngForOf", n.statuses),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(1),
            e.Q6J("formControlName", "health_id")(
              "nzLoading",
              n.loadingProjHealths
            ),
            e.xp6(1),
            e.Q6J("ngForOf", n.healths),
            e.xp6(1),
            e.Q6J("categoryId", n.categoryId)("disabled", n.isMember),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(1),
            e.Q6J("formControlName", "notes"),
            e.xp6(1),
            e.Q6J("ngIf", !(n.isMember || (n.edit && n.loading))),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(2),
            e.Q6J("nzClickHide", !1)("nzDropdownMenu", t)("nzTrigger", "click")(
              "nzDisabled",
              n.isMember || (!n.isOwnerOrAdmin() && n.isProjectManager())
            ),
            e.xp6(3),
            e.Q6J("ngIf", n.projectManager),
            e.xp6(1),
            e.Q6J("ngIf", !n.projectManager),
            e.xp6(3),
            e.Q6J("ngIf", n.teamMembers.length),
            e.xp6(3),
            e.Q6J("nzSize", "default"),
            e.xp6(1),
            e.Q6J("nzGutter", 8),
            e.xp6(1),
            e.Q6J("nzSpan", 12),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(1),
            e.Q6J("formControlName", "start_date")(
              "nzDisabledDate",
              n.utils.checkForMaxDate(n.endDate)
            ),
            e.xp6(1),
            e.Q6J("nzSpan", 12),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(1),
            e.Q6J("formControlName", "end_date")(
              "nzDisabledDate",
              n.utils.checkForMinDate(n.startDate)
            ),
            e.xp6(1),
            e.Q6J("nzSpan", 24),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(1),
            e.Q6J("formControlName", "working_days")("nzMin", 0)(
              "maxlength",
              5
            ),
            e.xp6(1),
            e.Q6J("nzSpan", 24),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(1),
            e.Q6J("formControlName", "man_days")("nzMin", 0)("maxlength", 10),
            e.xp6(1),
            e.Q6J("nzSpan", 24),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(2),
            e.Q6J("nzSpan", null),
            e.xp6(1),
            e.Q6J("formControlName", "hours_per_day")("nzMin", 0)("nzMax", 24)(
              "maxlength",
              2
            ),
            e.xp6(1),
            e.Q6J("ngIf", !n.isMember),
            e.xp6(1),
            e.Q6J("ngIf", n.projectId);
        }
      }
      let Ue = (() => {
        var l;
        class g {
          get categoryId() {
            return this.form.controls.category_id.value || null;
          }
          set categoryId(t) {
            this.form.controls.category_id.setValue(t);
          }
          get startDate() {
            return this.form.value.start_date || null;
          }
          get endDate() {
            return this.form.value.end_date || null;
          }
          get title() {
            return this.projectId ? "Actualizar Expediente" : "Crear Expediente";
          }
          get submitButtonText() {
            return this.projectId ? "Guardar Cambios" : "Crear";
          }
          get activeColorCode() {
            return this.form.controls.color_code.value;
          }
          constructor(t, n, s, P, J, K, Je, Ne, Qe, ke, Le, Re, Ke, Be) {
            (this.api = t),
              (this.fb = n),
              (this.membersApi = s),
              (this.app = P),
              (this.statusesApi = J),
              (this.auth = K),
              (this.ngZone = Je),
              (this.foldersApi = Ne),
              (this.folderFormService = Qe),
              (this.cdr = ke),
              (this.utils = Le),
              (this.projectFormService = Re),
              (this.healthsApi = Ke),
              (this.projectsService = Be),
              (this.onCreate = new e.vpe()),
              (this.onUpdate = new e.vpe()),
              (this.onProjectManagerUpdate = new e.vpe()),
              (this.onDelete = new e.vpe()),
              (this.COLOR_CODES = y.lD),
              (this.show = !1),
              (this.edit = !1),
              (this.loading = !1),
              (this.searching = !1),
              (this.showTeamMemberModal = !1),
              (this.updatingProject = !1),
              (this.deletingProject = !1),
              (this.loadingTeamMembers = !1),
              (this.loadingProjStatuses = !1),
              (this.loadingProjHealths = !1),
              (this.isMember = !1),
              (this.isManager = !1),
              (this.loadingFolders = !1),
              (this.clientName = null),
              (this.projectManager = null),
              (this.projectId = null),
              (this.teamMembers = []),
              (this.projectMembers = []),
              (this.removedMembersList = []),
              (this.removedTasks = []),
              (this.newTasks = []),
              (this.statuses = []),
              (this.folders = []),
              (this.healths = []),
              (this.searchingName = null),
              (this.model = {}),
              this.createForm();
          }
          createForm() {
            (this.form = this.fb.group({
              name: [null, [r.kI.required]],
              key: [null, [r.kI.max(5)]],
              notes: [null, []],
              start_date: [],
              project_manager: [null, []],
              end_date: [],
              status_id: [],
              health_id: [],
              folder_id: [],
              category_id: [],
              color_code: [y.lD[1], [r.kI.required]],
              working_days: [0, [r.kI.required]],
              man_days: [0, [r.kI.required]],
              hours_per_day: [8, [r.kI.required]],
              _select_team_member_input: [null, []],
            })),
              this.isMember && this.form.disable(),
              this.form.controls._select_team_member_input.valueChanges.subscribe(
                (t) => {
                  (this.searchingName = t), this.searchMembers();
                }
              );
          }
          reset() {
            (this.clientName = null),
              (this.projectId = null),
              (this.projectManager = null),
              (this.teamMembers = []),
              (this.projectMembers = []),
              (this.removedMembersList = []),
              (this.removedTasks = []),
              (this.newTasks = []),
              (this.deletingProject = !1),
              (this.updatingProject = !1);
          }
          handleClose() {
            this.reset(), (this.show = !1);
          }
          isOwnerOrAdmin() {
            return (
              this.auth.getCurrentSession()?.owner ||
              this.auth.getCurrentSession()?.is_admin
            );
          }
          isProjectManager() {
            return (
              !!this.projectsService.projectOwnerTeamMemberId &&
              this.auth.getCurrentSession()?.team_member_id ===
                this.projectsService.projectOwnerTeamMemberId
            );
          }
          open(t, n = !1) {
            var s = this;
            return (0, p.Z)(function* () {
              (s.isMember = !s.isOwnerOrAdmin() && !s.isProjectManager()),
                (s.show = !0),
                (s.edit = n),
                s.createForm(),
                s.getProjectStatuses(),
                s.getProjectHealths(),
                t && ((s.projectId = t), s.get(s.projectId)),
                s.getTeamMembers();
            })();
          }
          isLoading() {
            return this.loadingTeamMembers;
          }
          getFolders() {
            var t = this;
            return (0, p.Z)(function* () {
              try {
                t.loadingFolders = !0;
                const n = yield t.foldersApi.get();
                n.done && (t.folders = n.body), (t.loadingFolders = !1);
              } catch (n) {
                (t.loadingFolders = !1), (0, h.tu)(n);
              }
              t.cdr.markForCheck();
            })();
          }
          getTeamMembers() {
            var t = this;
            return (0, p.Z)(function* () {
              try {
                t.loadingTeamMembers = !0;
                const n = yield t.membersApi.get(
                  1,
                  5,
                  null,
                  null,
                  t.memberSearchInput
                    ? t.memberSearchInput.nativeElement.value
                    : null,
                  !0
                );
                n.done &&
                  ((t.teamMembers = n.body.data || []),
                  (t.teamMembers = t.teamMembers.filter((s) => s.active)),
                  t.teamMembers.sort(
                    (s, P) =>
                      Number(s.pending_invitation) -
                      Number(P.pending_invitation)
                  )),
                  (t.loadingTeamMembers = !1);
              } catch (n) {
                (t.loadingTeamMembers = !1), (0, h.tu)(n);
              }
              t.cdr.markForCheck();
            })();
          }
          getProjectStatuses() {
            var t = this;
            return (0, p.Z)(function* () {
              try {
                t.loadingProjStatuses = !0;
                const n = yield t.statusesApi.get();
                if (n.done) {
                  t.statuses = n.body;
                  const s = t.statuses.find((P) => P.is_default);
                  !t.projectId &&
                    s &&
                    s.id &&
                    t.form.controls.status_id.setValue(s.id);
                }
                t.loadingProjStatuses = !1;
              } catch (n) {
                (t.loadingProjStatuses = !1), (0, h.tu)(n);
              }
              t.cdr.markForCheck();
            })();
          }
          getProjectHealths() {
            var t = this;
            return (0, p.Z)(function* () {
              try {
                t.loadingProjHealths = !0;
                const n = yield t.healthsApi.get();
                if (n) {
                  t.healths = n.body;
                  const s = t.healths.find((P) => P.is_default);
                  !t.projectId &&
                    s &&
                    s.id &&
                    t.form.controls.health_id.setValue(s.id);
                }
                t.loadingProjHealths = !1;
              } catch (n) {
                (t.loadingProjHealths = !1), (0, h.tu)(n);
              }
              t.cdr.markForCheck();
            })();
          }
          delete() {
            var t = this;
            return (0, p.Z)(function* () {
              if (t.projectId) {
                try {
                  (t.deletingProject = !0),
                    (yield t.api.delete(t.projectId)).done &&
                      (t.handleClose(), t.onDelete?.emit()),
                    (t.deletingProject = !1);
                } catch (n) {
                  (t.deletingProject = !1), (0, h.tu)(n);
                }
                t.cdr.markForCheck();
              }
            })();
          }
          create() {
            var t = this;
            return (0, p.Z)(function* () {
              try {
                t.updatingProject = !0;
                const n = {
                    name: t.form.controls.name.value,
                    client_name: t.clientName,
                    notes: t.form.controls.notes.value,
                    project_manager: t.projectManager,
                    color_code: t.form.controls.color_code.value,
                    status_id: t.form.controls.status_id.value,
                    health_id: t.form.controls.health_id.value,
                    start_date: t.form.controls.start_date.value,
                    end_date: t.form.controls.end_date.value,
                    folder_id: t.form.controls.folder_id.value,
                    category_id: t.form.controls.category_id.value,
                    working_days: t.form.controls.working_days.value,
                    man_days: t.form.controls.man_days.value,
                    hours_per_day: t.form.controls.hours_per_day.value,
                  },
                  s = yield t.api.create(n);
                s.done &&
                  (m.s.track(u.zY),
                  t.handleClose(),
                  t.onCreate.emit(s.body),
                  (0, O.xt)()),
                  (t.updatingProject = !1);
              } catch (n) {
                (t.updatingProject = !1), (0, h.tu)(n);
              }
              t.cdr.markForCheck();
            })();
          }
          update(t) {
            var n = this;
            return (0, p.Z)(function* () {
              try {
                n.updatingProject = !0;
                const s = {
                    name: n.form.controls.name.value,
                    client_name: n.clientName,
                    notes: n.form.controls.notes.value,
                    project_manager: n.projectManager,
                    key: n.form.controls.key.value,
                    color_code: n.form.controls.color_code.value,
                    status_id: n.form.controls.status_id.value,
                    health_id: n.form.controls.health_id.value,
                    start_date: n.form.controls.start_date.value,
                    end_date: n.form.controls.end_date.value,
                    folder_id: n.form.controls.folder_id.value,
                    category_id: n.form.controls.category_id.value,
                    working_days: n.form.controls.working_days.value,
                    man_days: n.form.controls.man_days.value,
                    hours_per_day: n.form.controls.hours_per_day.value,
                  },
                  P = yield n.api.update(t, s);
                if (P.done)
                  return (
                    m.s.track(u.n9),
                    n.handleClose(),
                    n.onUpdate.emit(P.body),
                    (0, O.xt)(),
                    n.projectFormService.emitProjectUpdate(),
                    !0
                  );
                n.updatingProject = !1;
              } catch (s) {
                (n.updatingProject = !1), (0, h.tu)(s);
              }
              return n.cdr.markForCheck(), !1;
            })();
          }
          get(t) {
            var n = this;
            return (0, p.Z)(function* () {
              if (t) {
                try {
                  n.loading = !0;
                  const s = yield n.api.getById(t);
                  s.done &&
                    ((n.model = s.body),
                    n.form.patchValue(n.model),
                    (n.clientName = s.body.client_name),
                    (n.projectManager = n.model.project_manager
                      ? n.model.project_manager
                      : null),
                    (n.projectMembers = n.model.members ?? []),
                    (n.newTasks = n.model.tasks ?? []),
                    (n.categoryId = n.model.category_id || null)),
                    (n.loading = !1);
                } catch (s) {
                  (n.loading = !1), (0, h.tu)(s);
                }
                n.cdr.markForCheck();
              }
            })();
          }
          submit() {
            var t = this;
            return (0, p.Z)(function* () {
              t.isMember ||
                (t.form.valid
                  ? t.projectId
                    ? yield t.update(t.projectId)
                    : t.create()
                  : t.app.displayErrorsOf(t.form));
            })();
          }
          searchMembers() {
            var t = this;
            return (0, p.Z)(function* () {
              (t.searching = !0),
                yield t.getTeamMembers(),
                (t.searching = !1),
                t.cdr.markForCheck();
            })();
          }
          onVisibilityChange(t) {
            if (t) {
              if ((this.getFolders(), this.isMember)) return;
              this.ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                  const n = this.projectName.nativeElement;
                  n && n.focus();
                }, 100);
              });
            }
          }
          handleOwnerVisibleChange(t) {
            if (t)
              try {
                setTimeout(() => {
                  this.projectManagerSelector.nativeElement.classList.add(
                    "highlight"
                  );
                }, 100),
                  this.cdr.markForCheck();
              } catch (n) {
                (0, h.tu)(n), this.cdr.markForCheck();
              }
            else
              this.projectManagerSelector.nativeElement.classList.remove(
                "highlight"
              ),
                this.cdr.markForCheck();
          }
          setColorCode(t) {
            this.form.controls.color_code.setValue(t);
          }
          onNameChangeSubmit(t) {
            this.clientName = t || null;
          }
          onKeyChange() {
            const t = this.form.controls.key.value;
            t && this.form.controls.key.setValue(t.toUpperCase());
          }
          newFolder() {
            this.folderFormService.create((t) => {
              t &&
                (this.updateFolders(t),
                this.form.controls.folder_id?.setValue(t.id),
                this.cdr.markForCheck());
            });
          }
          updateFolders(t) {
            const n = [...this.folders];
            n.push(t),
              n.sort((s, P) => s.name.localeCompare(P.name)),
              (this.folders = n);
          }
          calculateManDays() {
            const t = this.form.controls.start_date.value,
              n = this.form.controls.end_date.value;
            if (t && n) {
              const s = $()(t),
                P = $()(n);
              let J = P.diff(s, "days") + 1;
              P.isoWeekday() > 5 && (J -= P.isoWeekday() % 5),
                s.isoWeekday() > 5 && (J -= 3 - (s.isoWeekday() % 5)),
                J > 5 && (J -= ((J - (J % 7)) / 7) * 2),
                this.form.controls.working_days.setValue(J);
            }
          }
          trackById(t, n) {
            return n.id;
          }
          handleMemberChange(t) {
            t?.pending_invitation ||
              this.isMember ||
              (!this.isOwnerOrAdmin() && this.isProjectManager()) ||
              ((this.projectManager = t),
              this.focusOut(),
              this.cdr.markForCheck());
          }
          focusOut() {
            setTimeout(() => {
              this.outsideClicker.nativeElement.click();
            }, 50),
              this.cdr.markForCheck();
          }
        }
        return (
          ((l = g).ɵfac = function (t) {
            return new (t || l)(
              e.Y36(oe.U),
              e.Y36(r.qu),
              e.Y36(re.B),
              e.Y36(ae.z),
              e.Y36(ie.k),
              e.Y36(se.e),
              e.Y36(e.R0b),
              e.Y36(le.Y),
              e.Y36(ce.I),
              e.Y36(e.sBO),
              e.Y36(me.F),
              e.Y36(_e.s),
              e.Y36(ue.w),
              e.Y36(de.m)
            );
          }),
          (l.ɵcmp = e.Xpm({
            type: l,
            selectors: [["worklenz-project-form-modal"]],
            viewQuery: function (t, n) {
              if (
                (1 & t && (e.Gf(ge, 5), e.Gf(fe, 5), e.Gf(ze, 5), e.Gf(Ce, 5)),
                2 & t)
              ) {
                let s;
                e.iGM((s = e.CRH())) && (n.projectName = s.first),
                  e.iGM((s = e.CRH())) && (n.memberSearchInput = s.first),
                  e.iGM((s = e.CRH())) && (n.projectManagerSelector = s.first),
                  e.iGM((s = e.CRH())) && (n.outsideClicker = s.first);
              }
            },
            outputs: {
              onCreate: "onCreate",
              onUpdate: "onUpdate",
              onProjectManagerUpdate: "onProjectManagerUpdate",
              onDelete: "onDelete",
            },
            standalone: !0,
            features: [e.jDz],
            decls: 3,
            vars: 5,
            consts: [
              [
                3,
                "nzClosable",
                "nzTitle",
                "nzVisible",
                "nzPlacement",
                "nzOnClose",
                "nzVisibleChange",
              ],
              [4, "nzDrawerContent"],
              [3, "show", "onCreateOrUpdate", "showChange"],
              [3, "nzSpinning"],
              ["class", "mb-3", 3, "nzType", "nzMessage", 4, "ngIf"],
              ["nz-form", "", 3, "formGroup", "nzLayout"],
              ["nzRequired", "", 3, "nzSpan"],
              ["nzErrorTip", "Please enter a name!", 3, "nzSpan"],
              ["nz-input", "", "placeholder", "Name", 3, "formControlName"],
              ["projectName", ""],
              [4, "ngIf"],
              ["nzRequired", "", 1, "pb-0", 3, "nzSpan"],
              [
                "nz-dropdown",
                "",
                1,
                "ms-2",
                "rounded-circle",
                "cursor-pointer",
                2,
                "width",
                "20px",
                "height",
                "20px",
                3,
                "nzColor",
                "nzDropdownMenu",
                "nzDisabled",
                "nzTrigger",
              ],
              ["menu", "nzDropdownMenu"],
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
              [3, "nzSpan"],
              [3, "formControlName", "nzLoading"],
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
              [3, "categoryId", "disabled", "categoryIdChange"],
              ["nz-input", "", "placeholder", "Notas Adicionales", 3, "formControlName"],
              [3, "name", "nameChange", 4, "ngIf"],
              [
                "nz-dropdown",
                "",
                3,
                "nzClickHide",
                "nzDropdownMenu",
                "nzTrigger",
                "nzDisabled",
                "nzVisibleChange",
              ],
              [1, "d-flex", "h-100", "align-items-center", "manager-input"],
              ["projectManagerSelector", ""],
              ["nz-typography", "", "nzType", "secondary", 4, "ngIf"],
              ["projectManagerDropDown", "nzDropdownMenu"],
              ["class", "members-dropdown pt-0", "nz-menu", "", 4, "ngIf"],
              ["outsideClicker", ""],
              [3, "nzSize"],
              ["nz-row", "", 3, "nzGutter"],
              ["nz-col", "", 3, "nzSpan"],
              [
                1,
                "w-100",
                3,
                "formControlName",
                "nzDisabledDate",
                "nzOnOpenChange",
              ],
              ["nzRequired", "", 1, "star-none", 3, "nzSpan"],
              ["nzErrorTip", "Field cannot be empty!", 3, "nzSpan"],
              [
                "nz-input",
                "",
                "placeholder",
                "Estimated Working Days",
                1,
                "w-100",
                3,
                "formControlName",
                "nzMin",
                "maxlength",
              ],
              [
                "nz-input",
                "",
                "placeholder",
                "Estimated Man Days",
                1,
                "w-100",
                3,
                "formControlName",
                "nzMin",
                "maxlength",
              ],
              [
                "nz-input",
                "",
                "placeholder",
                "Hours Per Day",
                1,
                "w-100",
                3,
                "formControlName",
                "nzMin",
                "nzMax",
                "maxlength",
              ],
              [1, "mb-3", 3, "nzType", "nzMessage"],
              [
                "nz-input",
                "",
                "placeholder",
                "Key",
                3,
                "formControlName",
                "maxlength",
                "keyup",
              ],
              ["nz-menu-item", "", 3, "click"],
              [
                1,
                "me-1",
                "w-100",
                "rounded-pill",
                2,
                "height",
                "16px !important",
                "width",
                "16px !important",
                3,
                "nzColor",
              ],
              ["nzCustomContent", "", 3, "nzLabel", "nzValue"],
              ["nz-icon", "", 3, "nzType"],
              [3, "nzColor", "nzText"],
              [3, "name", "nameChange"],
              [
                "nz-tooltip",
                "",
                1,
                "mt-auto",
                "mb-auto",
                "mx-2",
                3,
                "nzSize",
                "nzSrc",
                "nzText",
                "nzTooltipPlacement",
                "nzTooltipTitle",
              ],
              ["nz-typography", ""],
              ["nz-typography", "", 1, "mx-2", "remove-icon", 3, "click"],
              ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"],
              ["nz-typography", "", "nzType", "secondary"],
              [1, "avatar-dashed", "mx-2", "bg-white", 3, "nzSize", "nzIcon"],
              ["nz-menu", "", 1, "members-dropdown", "pt-0"],
              [
                1,
                "px-3",
                "py-2",
                "position-sticky",
                "top-0",
                "bg-white",
                "z-top",
              ],
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
                "input",
              ],
              ["memberSearchInput", ""],
              [
                "class",
                "m-0",
                "nz-menu-item",
                "",
                3,
                "nzDisabled",
                "click",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              ["nz-menu-item", "", 1, "m-0", 3, "nzDisabled", "click"],
              [
                1,
                "d-flex",
                "align-items-center",
                "justify-content-center",
                "user-select-none",
              ],
              [
                "nz-tooltip",
                "",
                1,
                "mt-auto",
                "mb-auto",
                "me-2",
                3,
                "nzSize",
                "nzSrc",
                "nzText",
                "nzTooltipPlacement",
                "nzTooltipTitle",
              ],
              [2, "line-height", "15px"],
              ["nz-typography", "", 1, "d-block", "mem-name"],
              ["nz-typography", "", "nzType", "danger", 4, "ngIf"],
              ["nz-typography", "", "nzType", "danger"],
              [
                "nz-button",
                "",
                "nzBlock",
                "",
                "type",
                "button",
                3,
                "nzLoading",
                "nzType",
                "click",
              ],
              [
                "class",
                "mt-2",
                "nz-button",
                "",
                "nz-popconfirm",
                "",
                "nzDanger",
                "",
                "nzBlock",
                "",
                "type",
                "button",
                3,
                "nzLoading",
                "nzOkText",
                "nzPopconfirmTitle",
                "nzType",
                "nzOnConfirm",
                4,
                "ngIf",
              ],
              [
                "nz-button",
                "",
                "nz-popconfirm",
                "",
                "nzDanger",
                "",
                "nzBlock",
                "",
                "type",
                "button",
                1,
                "mt-2",
                3,
                "nzLoading",
                "nzOkText",
                "nzPopconfirmTitle",
                "nzType",
                "nzOnConfirm",
              ],
              [1, "mt-3", "mb-2"],
              [1, "pb-1"],
              [
                "class",
                "mb-0",
                "nz-typography",
                "",
                "nzType",
                "secondary",
                4,
                "ngIf",
              ],
              ["nz-typography", "", "nzType", "secondary", 1, "mb-0"],
              ["nz-tooltip", "", 3, "nzTooltipPlacement", "nzTooltipTitle"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "nz-drawer", 0),
                e.NdJ("nzOnClose", function () {
                  return n.handleClose();
                })("nzVisibleChange", function (P) {
                  return n.onVisibilityChange(P);
                }),
                e.YNc(1, we, 86, 71, "ng-container", 1),
                e.qZA(),
                e.TgZ(2, "worklenz-team-members-form", 2),
                e.NdJ("onCreateOrUpdate", function () {
                  return n.getTeamMembers();
                })("showChange", function (P) {
                  return (n.showTeamMemberModal = P);
                }),
                e.qZA()),
                2 & t &&
                  (e.Q6J("nzClosable", !0)("nzTitle", n.title)(
                    "nzVisible",
                    n.show
                  )("nzPlacement", "right"),
                  e.xp6(2),
                  e.Q6J("show", n.showTeamMemberModal));
            },
            dependencies: [
              M.LV,
              M.Ip,
              M.Vq,
              A.BL,
              A.Vz,
              A.SQ,
              f.X,
              f.j,
              T.j,
              T.W,
              D,
              r.UX,
              r._Y,
              r.Fj,
              r.JJ,
              r.JL,
              r.nD,
              r.sg,
              r.u,
              E.o7,
              E.Zp,
              E.gB,
              w.sL,
              w.ix,
              pe.w,
              he.dQ,
              j.O5,
              C._p,
              C.JW,
              i.U5,
              I.t3,
              I.SK,
              i.Lr,
              i.Nx,
              i.iK,
              i.Fd,
              j.sg,
              x.PV,
              x.Ls,
              c.S,
              _.Hb,
              _.uw,
              d.b1,
              G.wO,
              G.r9,
              d.cm,
              d.RR,
              z.m,
              j.uU,
              Z.d,
              U.cg,
              U.SY,
              R.ZJ,
              R.ZU,
              B.S,
              B.g,
              V.L,
              V.r,
              X.n,
              H.mS,
              H.x7,
              Y.Zf,
              Y._V,
              ee.I,
              W.Rt,
              W.Dz,
              te.Wr,
              ne.g,
              r.u5,
            ],
            styles: [
              ".remove-icon[_ngcontent-%COMP%]{color:#00000040;background:#fff;opacity:0;cursor:pointer;transition:.25s all}.remove-icon[_ngcontent-%COMP%]:hover{color:#00000073}.manager-input[_ngcontent-%COMP%]{border-width:1px;border-style:solid;border-color:transparent;border-radius:6px;transition:.25s all;margin-left:8px;min-height:32px}.manager-input[_ngcontent-%COMP%]:hover{border-color:#40a9ff}.manager-input[_ngcontent-%COMP%]:hover   .remove-icon[_ngcontent-%COMP%]{opacity:1}.manager-input.highlight[_ngcontent-%COMP%]{border-color:#40a9ff;box-shadow:0 0 0 2px #1890ff33}.z-top[_ngcontent-%COMP%]{z-index:1}",
            ],
            changeDetection: 0,
          })),
          g
        );
      })();
    },
    97192: (N, F, o) => {
      o.d(F, { I: () => r });
      var p = o(78645),
        e = o(65879);
      let r = (() => {
        var y;
        class O {
          constructor() {
            this._createSbj$ = new p.x();
          }
          get onCreateInvoke() {
            return this._createSbj$.asObservable();
          }
          create(M) {
            this._createSbj$.next(M);
          }
        }
        return (
          ((y = O).ɵfac = function (M) {
            return new (M || y)();
          }),
          (y.ɵprov = e.Yz7({ token: y, factory: y.ɵfac, providedIn: "root" })),
          O
        );
      })();
    },
    99783: (N, F, o) => {
      o.d(F, { Q: () => h });
      var p = o(10708),
        e = o(26857),
        r = o(69649),
        y = o(65879),
        O = o(69862);
      let h = (() => {
        var M;
        class A extends e.P {
          constructor(T) {
            super(),
              (this.http = T),
              (this.root = `${this.API_BASE_URL}/clients`);
          }
          create(T) {
            return this._post(this.http, this.root, T);
          }
          get(T, i, v, x, j) {
            const E = encodeURIComponent(j || "");
            return this._get(
              this.http,
              `${this.root}${(0, r.UK)({
                index: T,
                size: i,
                field: v,
                order: x,
                search: E,
              })}`
            );
          }
          getById(T) {
            return this._get(this.http, `${this.root}/${T}`);
          }
          update(T, i) {
            return this._put(this.http, `${this.root}/${T}`, i);
          }
          delete(T) {
            return (0, p.n)(this.http.delete(`${this.root}/${T}`));
          }
        }
        return (
          ((M = A).ɵfac = function (T) {
            return new (T || M)(y.LFG(O.eN));
          }),
          (M.ɵprov = y.Yz7({ token: M, factory: M.ɵfac, providedIn: "root" })),
          A
        );
      })();
    },
    55012: (N, F, o) => {
      o.d(F, { Y: () => O });
      var p = o(26857),
        e = o(10708),
        r = o(65879),
        y = o(69862);
      let O = (() => {
        var h;
        class M extends p.P {
          constructor(f) {
            super(),
              (this.http = f),
              (this.root = `${this.API_BASE_URL}/projects-folders`);
          }
          create(f) {
            return this._post(this.http, this.root, f);
          }
          get() {
            return this._get(this.http, `${this.root}`);
          }
          getById(f) {
            return this._get(this.http, `${this.root}/${f}`);
          }
          update(f, T) {
            return this._put(this.http, `${this.root}/${f}`, T);
          }
          delete(f) {
            return (0, e.n)(this.http.delete(`${this.root}/${f}`));
          }
        }
        return (
          ((h = M).ɵfac = function (f) {
            return new (f || h)(r.LFG(y.eN));
          }),
          (h.ɵprov = r.Yz7({ token: h, factory: h.ɵfac, providedIn: "root" })),
          M
        );
      })();
    },
    31215: (N, F, o) => {
      o.d(F, { U: () => M });
      var p = o(15861),
        e = o(26857),
        r = o(10708),
        y = o(69649),
        O = o(65879),
        h = o(69862);
      let M = (() => {
        var A;
        class f extends e.P {
          constructor(i) {
            super(),
              (this.http = i),
              (this.root = `${this.API_BASE_URL}/projects`);
          }
          create(i) {
            return this._post(this.http, this.root, i);
          }
          get(i, v, x, j, E, S = null) {
            const I = encodeURIComponent(E || ""),
              b = `${this.root}${(0, y.UK)({
                index: i,
                size: v,
                field: x,
                order: j,
                search: I,
                filter: S,
              })}`;
            return this._get(this.http, b);
          }
          getByConfig(i) {
            i.search = encodeURIComponent(i.search || "");
            const v = `${this.root}${(0, y.UK)(i)}`;
            return this._get(this.http, v);
          }
          updateDefaultView(i, v) {
            let x = "TASK_LIST";
            return (
              1 === v && (x = "BOARD"),
              this._put(this.http, `${this.root}/update-pinned-view`, {
                project_id: i,
                default_view: x,
              })
            );
          }
          getMyProjectsToTasks() {
            return this._get(this.http, `${this.root}/my-task-projects`);
          }
          getMyProjects(i, v, x, j, E, S = null) {
            const I = encodeURIComponent(E || ""),
              b = `${this.root}/my-projects${(0, y.UK)({
                index: i,
                size: v,
                field: x,
                order: j,
                search: I,
                filter: S,
              })}`;
            return this._get(this.http, b);
          }
          getAllTasks(i, v, x, j, E, S = null) {
            const I = encodeURIComponent(E || ""),
              b = `${this.root}/tasks${(0, y.UK)({
                index: i,
                size: v,
                field: x,
                order: j,
                search: I,
                filter: S,
              })}`;
            return this._get(this.http, b);
          }
          getMembers(i, v, x, j, E, S) {
            const I = encodeURIComponent(S || ""),
              b = `${this.root}/members/${i}${(0, y.UK)({
                index: v,
                size: x,
                field: j,
                order: E,
                search: I,
              })}`;
            return this._get(this.http, b);
          }
          getById(i) {
            return this._get(this.http, `${this.root}/${i}`);
          }
          getProjectManager(i) {
            return this._get(this.http, `${this.root}/project-manager/${i}`);
          }
          update(i, v) {
            const x = (0, y.UK)({ current_project_id: i });
            return this._put(this.http, `${this.root}/${i}${x}`, v);
          }
          delete(i) {
            return (0, r.n)(this.http.delete(`${this.root}/${i}`));
          }
          getOverViewById(i) {
            return this._get(this.http, `${this.root}/overview/${i}`);
          }
          getOverViewMembersById(i, v) {
            return this._get(
              this.http,
              `${this.root}/overview-members/${i}?archived=${v}`
            );
          }
          getAll() {
            return this._get(this.http, `${this.root}/all`);
          }
          toggleFavorite(i) {
            return this._get(this.http, `${this.root}/favorite/${i}`);
          }
          toggleArchive(i) {
            return this._get(this.http, `${this.root}/archive/${i}`);
          }
          toggleArchiveAll(i) {
            return this._get(this.http, `${this.root}/archive-all/${i}`);
          }
          updateExistPhaseColors() {
            var i = this;
            return (0, p.Z)(function* () {
              return i._get(i.http, `${i.root}/update-exist-phase-colors`);
            })();
          }
          updateExistSortOrder() {
            var i = this;
            return (0, p.Z)(function* () {
              return i._get(i.http, `${i.root}/update-exist-sort-order`);
            })();
          }
        }
        return (
          ((A = f).ɵfac = function (i) {
            return new (i || A)(O.LFG(h.eN));
          }),
          (A.ɵprov = O.Yz7({ token: A, factory: A.ɵfac, providedIn: "root" })),
          f
        );
      })();
    },
    98421: (N, F, o) => {
      o.d(F, { Ju: () => C, sn: () => w });
      var p = o(97582),
        e = o(36028),
        r = o(65879),
        y = o(60095),
        O = o(92438),
        h = o(59773),
        M = o(40874),
        A = o(99087),
        f = o(27754),
        T = o(49388),
        i = o(96814),
        v = o(96109),
        x = o(62595);
      const j = ["nz-rate-item", ""];
      function E(c, _) {}
      function S(c, _) {}
      function I(c, _) {
        1 & c && r._UZ(0, "span", 4);
      }
      const b = function (c) {
          return { $implicit: c };
        },
        Q = ["ulElement"];
      function k(c, _) {
        if (1 & c) {
          const d = r.EpF();
          r.TgZ(0, "li", 3)(1, "div", 4),
            r.NdJ("itemHover", function (u) {
              const Z = r.CHM(d).index,
                U = r.oxw();
              return r.KtG(U.onItemHover(Z, u));
            })("itemClick", function (u) {
              const Z = r.CHM(d).index,
                U = r.oxw();
              return r.KtG(U.onItemClick(Z, u));
            }),
            r.qZA()();
        }
        if (2 & c) {
          const d = _.index,
            m = r.oxw();
          r.Q6J("ngClass", m.starStyleArray[d] || "")(
            "nzTooltipTitle",
            m.nzTooltips[d]
          ),
            r.xp6(1),
            r.Q6J("allowHalf", m.nzAllowHalf)("character", m.nzCharacter)(
              "index",
              d
            );
        }
      }
      let L = (() => {
        var c;
        class _ {
          constructor() {
            (this.index = 0),
              (this.allowHalf = !1),
              (this.itemHover = new r.vpe()),
              (this.itemClick = new r.vpe());
          }
          hoverRate(m) {
            this.itemHover.next(m && this.allowHalf);
          }
          clickRate(m) {
            this.itemClick.next(m && this.allowHalf);
          }
        }
        return (
          ((c = _).ɵfac = function (m) {
            return new (m || c)();
          }),
          (c.ɵcmp = r.Xpm({
            type: c,
            selectors: [["", "nz-rate-item", ""]],
            inputs: {
              character: "character",
              index: "index",
              allowHalf: "allowHalf",
            },
            outputs: { itemHover: "itemHover", itemClick: "itemClick" },
            exportAs: ["nzRateItem"],
            attrs: j,
            decls: 6,
            vars: 8,
            consts: [
              [1, "ant-rate-star-second", 3, "mouseover", "click"],
              [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
              [1, "ant-rate-star-first", 3, "mouseover", "click"],
              ["defaultCharacter", ""],
              ["nz-icon", "", "nzType", "star", "nzTheme", "fill"],
            ],
            template: function (m, u) {
              if (
                (1 & m &&
                  (r.TgZ(0, "div", 0),
                  r.NdJ("mouseover", function (Z) {
                    return u.hoverRate(!1), Z.stopPropagation();
                  })("click", function () {
                    return u.clickRate(!1);
                  }),
                  r.YNc(1, E, 0, 0, "ng-template", 1),
                  r.qZA(),
                  r.TgZ(2, "div", 2),
                  r.NdJ("mouseover", function (Z) {
                    return u.hoverRate(!0), Z.stopPropagation();
                  })("click", function () {
                    return u.clickRate(!0);
                  }),
                  r.YNc(3, S, 0, 0, "ng-template", 1),
                  r.qZA(),
                  r.YNc(4, I, 1, 0, "ng-template", null, 3, r.W1O)),
                2 & m)
              ) {
                const z = r.MAs(5);
                r.xp6(1),
                  r.Q6J("ngTemplateOutlet", u.character || z)(
                    "ngTemplateOutletContext",
                    r.VKq(4, b, u.index)
                  ),
                  r.xp6(2),
                  r.Q6J("ngTemplateOutlet", u.character || z)(
                    "ngTemplateOutletContext",
                    r.VKq(6, b, u.index)
                  );
              }
            },
            dependencies: [i.tP, x.Ls],
            encapsulation: 2,
            changeDetection: 0,
          })),
          (0, p.gn)([(0, f.yF)()], _.prototype, "allowHalf", void 0),
          _
        );
      })();
      const D = "rate";
      let w = (() => {
          var c;
          class _ {
            get nzValue() {
              return this._value;
            }
            set nzValue(m) {
              this._value !== m &&
                ((this._value = m),
                (this.hasHalf = !Number.isInteger(m)),
                (this.hoverValue = Math.ceil(m)));
            }
            constructor(m, u, z, Z, U, R) {
              (this.nzConfigService = m),
                (this.ngZone = u),
                (this.renderer = z),
                (this.cdr = Z),
                (this.directionality = U),
                (this.destroy$ = R),
                (this._nzModuleName = D),
                (this.nzAllowClear = !0),
                (this.nzAllowHalf = !1),
                (this.nzDisabled = !1),
                (this.nzAutoFocus = !1),
                (this.nzCount = 5),
                (this.nzTooltips = []),
                (this.nzOnBlur = new r.vpe()),
                (this.nzOnFocus = new r.vpe()),
                (this.nzOnHoverChange = new r.vpe()),
                (this.nzOnKeyDown = new r.vpe()),
                (this.classMap = {}),
                (this.starArray = []),
                (this.starStyleArray = []),
                (this.dir = "ltr"),
                (this.hasHalf = !1),
                (this.hoverValue = 0),
                (this.isFocused = !1),
                (this._value = 0),
                (this.isNzDisableFirstChange = !0),
                (this.onChange = () => null),
                (this.onTouched = () => null);
            }
            ngOnChanges(m) {
              const { nzAutoFocus: u, nzCount: z, nzValue: Z } = m;
              if (u && !u.isFirstChange()) {
                const U = this.ulElement.nativeElement;
                this.nzAutoFocus && !this.nzDisabled
                  ? this.renderer.setAttribute(U, "autofocus", "autofocus")
                  : this.renderer.removeAttribute(U, "autofocus");
              }
              z && this.updateStarArray(), Z && this.updateStarStyle();
            }
            ngOnInit() {
              this.nzConfigService
                .getConfigChangeEventForComponent(D)
                .pipe((0, h.R)(this.destroy$))
                .subscribe(() => this.cdr.markForCheck()),
                this.directionality.change
                  .pipe((0, h.R)(this.destroy$))
                  .subscribe((m) => {
                    (this.dir = m), this.cdr.detectChanges();
                  }),
                (this.dir = this.directionality.value),
                this.ngZone.runOutsideAngular(() => {
                  (0, O.R)(this.ulElement.nativeElement, "focus")
                    .pipe((0, h.R)(this.destroy$))
                    .subscribe((m) => {
                      (this.isFocused = !0),
                        this.nzOnFocus.observers.length &&
                          this.ngZone.run(() => this.nzOnFocus.emit(m));
                    }),
                    (0, O.R)(this.ulElement.nativeElement, "blur")
                      .pipe((0, h.R)(this.destroy$))
                      .subscribe((m) => {
                        (this.isFocused = !1),
                          this.nzOnBlur.observers.length &&
                            this.ngZone.run(() => this.nzOnBlur.emit(m));
                      });
                });
            }
            onItemClick(m, u) {
              if (this.nzDisabled) return;
              this.hoverValue = m + 1;
              const z = u ? m + 0.5 : m + 1;
              this.nzValue === z
                ? this.nzAllowClear &&
                  ((this.nzValue = 0), this.onChange(this.nzValue))
                : ((this.nzValue = z), this.onChange(this.nzValue)),
                this.updateStarStyle();
            }
            onItemHover(m, u) {
              this.nzDisabled ||
                (this.hoverValue === m + 1 && u === this.hasHalf) ||
                ((this.hoverValue = m + 1),
                (this.hasHalf = u),
                this.nzOnHoverChange.emit(this.hoverValue),
                this.updateStarStyle());
            }
            onRateLeave() {
              (this.hasHalf = !Number.isInteger(this.nzValue)),
                (this.hoverValue = Math.ceil(this.nzValue)),
                this.updateStarStyle();
            }
            focus() {
              this.ulElement.nativeElement.focus();
            }
            blur() {
              this.ulElement.nativeElement.blur();
            }
            onKeyDown(m) {
              const u = this.nzValue;
              m.keyCode === e.SV && this.nzValue < this.nzCount
                ? (this.nzValue += this.nzAllowHalf ? 0.5 : 1)
                : m.keyCode === e.oh &&
                  this.nzValue > 0 &&
                  (this.nzValue -= this.nzAllowHalf ? 0.5 : 1),
                u !== this.nzValue &&
                  (this.onChange(this.nzValue),
                  this.nzOnKeyDown.emit(m),
                  this.updateStarStyle(),
                  this.cdr.markForCheck());
            }
            updateStarArray() {
              (this.starArray = Array(this.nzCount)
                .fill(0)
                .map((m, u) => u)),
                this.updateStarStyle();
            }
            updateStarStyle() {
              this.starStyleArray = this.starArray.map((m) => {
                const u = "ant-rate-star",
                  z = m + 1;
                return {
                  [`${u}-full`]:
                    z < this.hoverValue ||
                    (!this.hasHalf && z === this.hoverValue),
                  [`${u}-half`]: this.hasHalf && z === this.hoverValue,
                  [`${u}-active`]: this.hasHalf && z === this.hoverValue,
                  [`${u}-zero`]: z > this.hoverValue,
                  [`${u}-focused`]:
                    this.hasHalf && z === this.hoverValue && this.isFocused,
                };
              });
            }
            writeValue(m) {
              (this.nzValue = m || 0),
                this.updateStarArray(),
                this.cdr.markForCheck();
            }
            setDisabledState(m) {
              (this.nzDisabled =
                (this.isNzDisableFirstChange && this.nzDisabled) || m),
                (this.isNzDisableFirstChange = !1),
                this.cdr.markForCheck();
            }
            registerOnChange(m) {
              this.onChange = m;
            }
            registerOnTouched(m) {
              this.onTouched = m;
            }
          }
          return (
            ((c = _).ɵfac = function (m) {
              return new (m || c)(
                r.Y36(M.jY),
                r.Y36(r.R0b),
                r.Y36(r.Qsj),
                r.Y36(r.sBO),
                r.Y36(T.Is, 8),
                r.Y36(A.kn)
              );
            }),
            (c.ɵcmp = r.Xpm({
              type: c,
              selectors: [["nz-rate"]],
              viewQuery: function (m, u) {
                if ((1 & m && r.Gf(Q, 7), 2 & m)) {
                  let z;
                  r.iGM((z = r.CRH())) && (u.ulElement = z.first);
                }
              },
              inputs: {
                nzAllowClear: "nzAllowClear",
                nzAllowHalf: "nzAllowHalf",
                nzDisabled: "nzDisabled",
                nzAutoFocus: "nzAutoFocus",
                nzCharacter: "nzCharacter",
                nzCount: "nzCount",
                nzTooltips: "nzTooltips",
              },
              outputs: {
                nzOnBlur: "nzOnBlur",
                nzOnFocus: "nzOnFocus",
                nzOnHoverChange: "nzOnHoverChange",
                nzOnKeyDown: "nzOnKeyDown",
              },
              exportAs: ["nzRate"],
              features: [
                r._Bn([
                  A.kn,
                  {
                    provide: y.JU,
                    useExisting: (0, r.Gpc)(() => c),
                    multi: !0,
                  },
                ]),
                r.TTD,
              ],
              decls: 3,
              vars: 7,
              consts: [
                [
                  1,
                  "ant-rate",
                  3,
                  "ngClass",
                  "tabindex",
                  "keydown",
                  "mouseleave",
                ],
                ["ulElement", ""],
                [
                  "class",
                  "ant-rate-star",
                  "nz-tooltip",
                  "",
                  3,
                  "ngClass",
                  "nzTooltipTitle",
                  4,
                  "ngFor",
                  "ngForOf",
                ],
                [
                  "nz-tooltip",
                  "",
                  1,
                  "ant-rate-star",
                  3,
                  "ngClass",
                  "nzTooltipTitle",
                ],
                [
                  "nz-rate-item",
                  "",
                  3,
                  "allowHalf",
                  "character",
                  "index",
                  "itemHover",
                  "itemClick",
                ],
              ],
              template: function (m, u) {
                1 & m &&
                  (r.TgZ(0, "ul", 0, 1),
                  r.NdJ("keydown", function (Z) {
                    return u.onKeyDown(Z), Z.preventDefault();
                  })("mouseleave", function (Z) {
                    return u.onRateLeave(), Z.stopPropagation();
                  }),
                  r.YNc(2, k, 2, 5, "li", 2),
                  r.qZA()),
                  2 & m &&
                    (r.ekj("ant-rate-disabled", u.nzDisabled)(
                      "ant-rate-rtl",
                      "rtl" === u.dir
                    ),
                    r.Q6J("ngClass", u.classMap)(
                      "tabindex",
                      u.nzDisabled ? -1 : 1
                    ),
                    r.xp6(2),
                    r.Q6J("ngForOf", u.starArray));
              },
              dependencies: [i.mk, i.sg, v.SY, L],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, p.gn)(
              [(0, M.oS)(), (0, f.yF)()],
              _.prototype,
              "nzAllowClear",
              void 0
            ),
            (0, p.gn)(
              [(0, M.oS)(), (0, f.yF)()],
              _.prototype,
              "nzAllowHalf",
              void 0
            ),
            (0, p.gn)([(0, f.yF)()], _.prototype, "nzDisabled", void 0),
            (0, p.gn)([(0, f.yF)()], _.prototype, "nzAutoFocus", void 0),
            (0, p.gn)([(0, f.Rn)()], _.prototype, "nzCount", void 0),
            _
          );
        })(),
        C = (() => {
          var c;
          class _ {}
          return (
            ((c = _).ɵfac = function (m) {
              return new (m || c)();
            }),
            (c.ɵmod = r.oAB({ type: c })),
            (c.ɵinj = r.cJS({ imports: [T.vT, i.ez, x.PV, v.cg] })),
            _
          );
        })();
    },
  },
]);
