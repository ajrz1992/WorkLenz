"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [450],
  {
    3450: (B, Q, a) => {
      a.r(Q), a.d(Q, { AuthModule: () => pe });
      var w = a(96814),
        o = a(35420),
        z = a(15861),
        s = a(60095),
        C = a(69649),
        h = a(21406),
        v = a(86408),
        x = a(27782),
        e = a(65879),
        A = a(90586),
        b = a(18218),
        S = a(32333),
        T = a(10095),
        f = a(3599),
        _ = a(20824),
        M = a(62595),
        k = a(42840),
        O = a(70855),
        E = a(41958),
        U = a(62612);
      const p = ["emailInput"];
      function m(r, u) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "span", 22),
            e.NdJ("click", function () {
              e.CHM(i);
              const n = e.oxw(2);
              return e.KtG((n.passwordVisible = !n.passwordVisible));
            }),
            e.qZA();
        }
        if (2 & r) {
          const i = e.oxw(2);
          e.Q6J("nzType", i.passwordVisible ? "eye-invisible" : "eye");
        }
      }
      const c = function () {
          return ["/auth/reset-password"];
        },
        d = function () {
          return ["/auth/signup"];
        };
      function g(r, u) {
        if (1 & r) {
          const i = e.EpF();
          e.ynx(0),
            e.TgZ(1, "div", 1),
            e._UZ(2, "img", 2),
            e.qZA(),
            e.TgZ(3, "div", 3),
            e._uU(4, " Inicia sesión en tu cuenta. "),
            e.qZA(),
            e.TgZ(5, "form", 4),
            e.NdJ("submit", function () {
              e.CHM(i);
              const n = e.oxw();
              return e.KtG(n.login());
            }),
            e.TgZ(6, "nz-form-item")(7, "nz-form-control", 5)(
              8,
              "nz-input-group",
              6
            ),
            e._UZ(9, "input", 7, 8),
            e.qZA()()(),
            e.TgZ(11, "nz-form-item")(12, "nz-form-control", 5)(
              13,
              "nz-input-group",
              9
            ),
            e._UZ(14, "input", 10),
            e.qZA(),
            e.YNc(15, m, 1, 1, "ng-template", null, 11, e.W1O),
            e.qZA()(),
            e.TgZ(17, "div", 12)(18, "div", 13)(19, "label", 14),
            e.NdJ("nzCheckedChange", function (n) {
              e.CHM(i);
              const l = e.oxw();
              return e.KtG(l.rememberMeChange(n));
            }),
            e.TgZ(20, "span"),
            e._uU(21, "Recuerdame"),
            e.qZA()()(),
            e.TgZ(22, "div", 13)(23, "a", 15),
            e._uU(24, "¿Olvidaste tu contraseña?"),
            e.qZA()()(),
            e.TgZ(25, "button", 16),
            e._uU(26, " Iniciar Sesión "),
            e.qZA(),
            e.TgZ(27, "div", 17),
            e._uU(28, " O "),
            e.qZA(),
            e.TgZ(29, "button", 18),
            e.NdJ("click", function () {
              e.CHM(i);
              const n = e.oxw();
              return e.KtG(n.signInWithGoogle());
            }),
            e._UZ(30, "img", 19),
            e._uU(31, " Iniciar sesión con Google "),
            e.qZA(),
            e._UZ(32, "nz-form-item"),
            e.TgZ(33, "nz-form-item", 20)(34, "nz-form-control")(35, "p", 20),
            e._uU(36, " No tienes una cuenta? "),
            e.TgZ(37, "a", 21),
            e._uU(38, "Registrarse"),
            e.qZA()()()()(),
            e.BQk();
        }
        if (2 & r) {
          const i = e.MAs(16),
            t = e.oxw();
          e.xp6(2),
            e.Q6J("ngSrc", "/assets/images/logo.png"),
            e.xp6(3),
            e.Q6J("formGroup", t.form),
            e.xp6(2),
            e.Q6J("nzErrorTip", "¡Por favor ingresa tu correo electrónico!"),
            e.xp6(1),
            e.Q6J("nzPrefixIcon", "user")("nzSize", "large"),
            e.xp6(1),
            e.Q6J("formControlName", "email"),
            e.xp6(3),
            e.Q6J("nzErrorTip", "¡Por favor ingresa tu contraseña!"),
            e.xp6(1),
            e.Q6J("nzSuffix", i)("nzPrefixIcon", "lock")("nzSize", "large"),
            e.xp6(1),
            e.Q6J("formControlName", "password")(
              "type",
              t.passwordVisible ? "text" : "password"
            ),
            e.xp6(4),
            e.Q6J("nzSpan", 12),
            e.xp6(1),
            e.Q6J("formControlName", "remember"),
            e.xp6(3),
            e.Q6J("nzSpan", 12),
            e.xp6(1),
            e.Q6J("routerLink", e.DdM(26, c)),
            e.xp6(2),
            e.Q6J("nzLoading", t.loading)("nzType", "primary")("nzBlock", !0)(
              "nzSize",
              "large"
            ),
            e.xp6(4),
            e.Q6J("nzLoading", t.loadingGoogle)("nzType", "default")(
              "nzBlock",
              !0
            )("nzSize", "large"),
            e.xp6(1),
            e.Q6J("ngSrc", "/assets/images/google-icon.png"),
            e.xp6(7),
            e.Q6J("routerLink", e.DdM(27, d));
        }
      }
      let I = (() => {
        var r;
        class u {
          set projectId(t) {
            t ? localStorage.setItem(h.H4, t) : localStorage.removeItem(h.H4);
          }
          get projectId() {
            return localStorage.getItem(h.H4);
          }
          constructor(t, n, l, y, P, J, Y) {
            (this.app = t),
              (this.router = n),
              (this.api = l),
              (this.auth = y),
              (this.route = P),
              (this.fb = J),
              (this.ngZone = Y),
              (this.validating = !0),
              (this.loading = !1),
              (this.passwordVisible = !1),
              (this.loadingGoogle = !1),
              (this.teamId = null),
              this.app.setTitle("Iniciar sesión"),
              (this.teamId = this.route.snapshot.queryParamMap.get("team")),
              (this.projectId =
                this.route.snapshot.queryParamMap.get("project")),
              (this.form = this.fb.group({
                email: [null, [s.kI.required, s.kI.email]],
                password: [null, [s.kI.required]],
                remember: [!1],
              }));
          }
          get teamIdQueryParam() {
            const t = [`team=${this.teamId}`];
            return (
              this.projectId && t.push(`project=${this.projectId}`),
              this.teamId ? `?${t.join("&")}` : ""
            );
          }
          ngOnInit() {
            var t = this;
            return (0, z.Z)(function* () {
              const n = t.auth.getCurrentSession();
              !n || n.setup_completed
                ? (yield t.authorize()) || (v.s.track(x.h), (t.validating = !1))
                : t.router.navigate(["/worklenz/setup"]);
            })();
          }
          ngAfterViewInit() {
            this.ngZone.runOutsideAngular(() => {
              setTimeout(() => {
                this.emailInput?.nativeElement.focus();
              }, 250);
            });
          }
          authorize() {
            var t = this;
            return (0, z.Z)(function* () {
              try {
                const n = yield t.api.authorize();
                return (
                  !!n.authenticated &&
                  (t.auth.setCurrentSession(n.user),
                  yield t.router.navigate(["/worklenz/home"]),
                  !0)
                );
              } catch (n) {
                return (0, C.tu)(n), !1;
              }
            })();
          }
          login() {
            var t = this;
            return (0, z.Z)(function* () {
              if (!t.loading)
                if (t.form.valid) {
                  v.s.track(x.Yi), (t.loading = !0);
                  try {
                    yield t.api.login({
                      email: t.form.controls.email.value,
                      password: t.form.controls.password.value,
                      team_id: t.teamId || void 0,
                      project_id: t.projectId || void 0,
                    });
                    const n = yield t.authorize();
                    (t.loading = !1),
                      n
                        ? yield t.router.navigate(["/authenticate"])
                        : t.app.notify(
                            "¡Inicio de sesión fallido!",
                            "Por favor verifica tu correo electrónico y contraseña e intenta nuevamente.",
                            !1
                          );
                  } catch (n) {
                    (0, C.tu)(n),
                      (t.loading = !1),
                      t.app.notify(
                        "¡Error en el inicio de sesión!",
                        "Ha ocurrido un error desconocido. Por favor, intenta nuevamente.",
                        !1
                      );
                  }
                } else
                  Object.values(t.form.controls).forEach((n) => {
                    n.invalid &&
                      (n.markAsDirty(),
                      n.updateValueAndValidity({ onlySelf: !0 }));
                  });
            })();
          }
          signInWithGoogle() {
            this.loadingGoogle ||
              ((this.loadingGoogle = !0),
              v.s.track(x.tm),
              this.ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                  window.location.href = `/secure/google${this.teamIdQueryParam}`;
                }, 1e3);
              }));
          }
          rememberMeChange(t) {
            v.s.track(x.MP, { checked: t });
          }
        }
        return (
          ((r = u).ɵfac = function (t) {
            return new (t || r)(
              e.Y36(A.z),
              e.Y36(o.F0),
              e.Y36(b.Q),
              e.Y36(S.e),
              e.Y36(o.gz),
              e.Y36(s.qu),
              e.Y36(e.R0b)
            );
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
            selectors: [["worklenz-login"]],
            viewQuery: function (t, n) {
              if ((1 & t && e.Gf(p, 5), 2 & t)) {
                let l;
                e.iGM((l = e.CRH())) && (n.emailInput = l.first);
              }
            },
            decls: 1,
            vars: 1,
            consts: [
              [4, "ngIf"],
              [1, "text-center"],
              [
                "alt",
                "LegalAgenda",
                "height",
                "50",
                "width",
                "235",
                3,
                "ngSrc",
              ],
              [1, "text-muted", "mb-4", "mt-1", "text-center"],
              ["nz-form", "", 1, "login-form", 3, "formGroup", "submit"],
              [3, "nzErrorTip"],
              [3, "nzPrefixIcon", "nzSize"],
              [
                "nz-input",
                "",
                "placeholder",
                "Correo Electrónico",
                "type",
                "email",
                3,
                "formControlName",
              ],
              ["emailInput", ""],
              [3, "nzSuffix", "nzPrefixIcon", "nzSize"],
              [
                "nz-input",
                "",
                "placeholder",
                "Contraseña",
                3,
                "formControlName",
                "type",
              ],
              ["suffixTemplate", ""],
              ["nz-row", "", 1, "login-form-margin"],
              ["nz-col", "", 3, "nzSpan"],
              ["nz-checkbox", "", 3, "formControlName", "nzCheckedChange"],
              [1, "login-form-forgot", 3, "routerLink"],
              [
                "nz-button",
                "",
                1,
                "mt-1",
                3,
                "nzLoading",
                "nzType",
                "nzBlock",
                "nzSize",
              ],
              [1, "text-center", "mt-2"],
              [
                "nz-button",
                "",
                "type",
                "button",
                1,
                "mt-1",
                3,
                "nzLoading",
                "nzType",
                "nzBlock",
                "nzSize",
                "click",
              ],
              [
                "alt",
                "LegalAgenda",
                "width",
                "18",
                "height",
                "18",
                1,
                "me-2",
                3,
                "ngSrc",
              ],
              [1, "mb-0"],
              ["rel", "noopener", 3, "routerLink"],
              ["nz-icon", "", 3, "nzType", "click"],
            ],
            template: function (t, n) {
              1 & t && e.YNc(0, g, 39, 28, "ng-container", 0),
                2 & t && e.Q6J("ngIf", !n.validating);
            },
            dependencies: [
              w.O5,
              o.rH,
              s._Y,
              s.Fj,
              s.JJ,
              s.JL,
              s.sg,
              s.u,
              T.t3,
              T.SK,
              f.Lr,
              f.Nx,
              f.Fd,
              _.Zp,
              _.gB,
              _.ke,
              M.Ls,
              k.ix,
              O.w,
              E.dQ,
              U.Ie,
              w.Zd,
            ],
            styles: [
              ".login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px}.login-form-forgot[_ngcontent-%COMP%]{float:right}.login-form-button[_ngcontent-%COMP%]{width:100%}",
            ],
          })),
          u
        );
      })();
      var Z = a(8083),
        L = a(82669);
      const N = ["nameInput"];
      function D(r, u) {
        if ((1 & r && (e.TgZ(0, "span"), e._uU(1), e.qZA()), 2 & r)) {
          const i = e.oxw();
          e.xp6(1), e.hij("(", i.passwordStrength.text, ")");
        }
      }
      function j(r, u) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "span", 27),
            e.NdJ("click", function () {
              e.CHM(i);
              const n = e.oxw();
              return e.KtG((n.passwordVisible = !n.passwordVisible));
            }),
            e.qZA();
        }
        if (2 & r) {
          const i = e.oxw();
          e.Q6J("nzType", i.passwordVisible ? "eye-invisible" : "eye");
        }
      }
      function q(r, u) {
        if ((1 & r && (e.TgZ(0, "span", 28), e._uU(1), e.qZA()), 2 & r)) {
          const i = e.oxw();
          e.Q6J("nzType", "secondary"), e.xp6(1), e.Oqu(i.passwordPolicy);
        }
      }
      const F = function () {
        return ["/auth/login"];
      };
      let G = (() => {
          var r;
          class u {
            set projectId(t) {
              t ? localStorage.setItem(h.H4, t) : localStorage.removeItem(h.H4);
            }
            get projectId() {
              return localStorage.getItem(h.H4);
            }
            get hasPassword() {
              return this.form.controls.password.valid;
            }
            constructor(t, n, l, y, P, J) {
              (this.app = t),
                (this.router = n),
                (this.fb = l),
                (this.api = y),
                (this.route = P),
                (this.ngZone = J),
                (this.loading = !1),
                (this.validating = !1),
                (this.passwordVisible = !1),
                (this.loadingGoogle = !1),
                (this.email = null),
                (this.name = null),
                (this.teamId = null),
                (this.teamMemberId = null),
                (this.passwordStrength = null),
                (this.passwordPolicy = h.QW),
                (this.model = null),
                this.app.setTitle("Registro"),
                v.s.track(x.ge),
                (this.email = this.route.snapshot.queryParamMap.get("email")),
                (this.name = this.route.snapshot.queryParamMap.get("name")),
                (this.teamId = this.route.snapshot.queryParamMap.get("team")),
                (this.teamMemberId =
                  this.route.snapshot.queryParamMap.get("user")),
                (this.projectId =
                  this.route.snapshot.queryParamMap.get("project")),
                (this.form = this.fb.group({
                  name: [this.name, [s.kI.required]],
                  email: [this.email, [s.kI.required, s.kI.email]],
                  password: [null, [s.kI.required]],
                })),
                this.form.controls.password.valueChanges.subscribe((Y) => {
                  this.checkPasswordStrength(Y);
                });
            }
            get invitationQueryParams() {
              const t = [
                `team=${this.teamId}`,
                `teamMember=${this.teamMemberId}`,
              ];
              return (
                this.projectId && t.push(`project=${this.projectId}`),
                this.teamId && this.teamMemberId ? `?${t.join("&")}` : ""
              );
            }
            ngAfterViewInit() {
              this.checkPasswordStrength(this.form.value.password),
                this.ngZone.runOutsideAngular(() => {
                  setTimeout(() => {
                    this.nameInput?.nativeElement.focus();
                  }, 250);
                });
            }
            validate() {
              var t = this;
              return (0, z.Z)(function* () {
                if (!t.validating)
                  if (t.form.valid) {
                    t.validating = !0;
                    try {
                      const n = {
                          name: t.form.controls.name.value,
                          email: t.form.controls.email.value,
                          password: t.form.controls.password.value,
                        },
                        l = yield t.api.signupCheck(n);
                      (t.validating = !1),
                        l.done && ((t.model = n), t.signupWithEmail());
                    } catch (n) {
                      (0, C.tu)(n),
                        (t.validating = !1),
                        t.app.notify(
                          "¡Error en el registro!",
                          "Ha ocurrido un error desconocido. Por favor, intenta nuevamente.",
                          !1
                        );
                    }
                  } else t.app.displayErrorsOf(t.form);
              })();
            }
            signUpWithGoogle() {
              (this.loadingGoogle = !0),
                v.s.track(x.Pb),
                this.ngZone.runOutsideAngular(() => {
                  setTimeout(() => {
                    window.location.href = `/secure/google${this.invitationQueryParams}`;
                  }, 1e3);
                });
            }
            signupWithEmail() {
              var t = this;
              return (0, z.Z)(function* () {
                if (!t.loading && t.model)
                  try {
                    (t.loading = !0),
                      (t.model.team_name = t.model?.name),
                      t.teamId && (t.model.team_id = t.teamId),
                      t.teamMemberId &&
                        (t.model.team_member_id = t.teamMemberId),
                      t.projectId && (t.model.project_id = t.projectId),
                      yield t.api.signup(t.model),
                      (yield t.api.authorize()).authenticated &&
                        (v.s.track(x._A),
                        yield t.router.navigate(["/authenticate"])),
                      (t.loading = !1);
                  } catch {
                    t.loading = !1;
                  }
              })();
            }
            checkPasswordStrength(t) {
              var n = this;
              return (0, z.Z)(function* () {
                try {
                  const l = yield n.api.checkPasswordStrength(t);
                  l.done && (n.passwordStrength = l.body);
                } catch {}
              })();
            }
          }
          return (
            ((r = u).ɵfac = function (t) {
              return new (t || r)(
                e.Y36(A.z),
                e.Y36(o.F0),
                e.Y36(s.qu),
                e.Y36(b.Q),
                e.Y36(o.gz),
                e.Y36(e.R0b)
              );
            }),
            (r.ɵcmp = e.Xpm({
              type: r,
              selectors: [["worklenz-signup"]],
              viewQuery: function (t, n) {
                if ((1 & t && e.Gf(N, 5), 2 & t)) {
                  let l;
                  e.iGM((l = e.CRH())) && (n.nameInput = l.first);
                }
              },
              decls: 54,
              vars: 28,
              consts: [
                [1, "text-center"],
                [
                  "alt",
                  "LegalAgenda",
                  "height",
                  "50",
                  "width",
                  "235",
                  3,
                  "ngSrc",
                ],
                [1, "text-muted", "mb-4", "mt-1", "text-center"],
                [3, "nzSpinning"],
                ["nz-form", "", 1, "login-form", 3, "formGroup", "submit"],
                [3, "nzErrorTip"],
                ["for", "full-name", 1, "d-block", "mb-1"],
                [3, "nzPrefixIcon", "nzSize"],
                [
                  "id",
                  "full-name",
                  "nz-input",
                  "",
                  "placeholder",
                  "Ingresa tu Nombre Completo",
                  "type",
                  "text",
                  3,
                  "formControlName",
                ],
                ["nameInput", ""],
                ["for", "email", 1, "d-block", "mb-1"],
                [
                  "id",
                  "email",
                  "nz-input",
                  "",
                  "placeholder",
                  "Ingresa tu correo electrónico",
                  "type",
                  "email",
                  3,
                  "formControlName",
                ],
                [3, "nzErrorTip", "nzExtra"],
                ["for", "password", 1, "d-block", "mb-1"],
                [4, "ngIf"],
                [3, "nzSuffix", "nzPrefixIcon", "nzSize"],
                [
                  "nz-input",
                  "",
                  "id",
                  "password",
                  "placeholder",
                  "Ingresa una contraseña segura.",
                  3,
                  "formControlName",
                  "type",
                ],
                ["suffixTemplate", ""],
                ["passwordNote", ""],
                [1, "mb-0"],
                [
                  "href",
                  "/privacy-policy",
                  "target",
                  "_blank",
                  "rel",
                  "noopener",
                ],
                ["href", "/terms-of-use"],
                [
                  "nz-button",
                  "",
                  "nzBlock",
                  "",
                  1,
                  "mt-1",
                  3,
                  "nzLoading",
                  "nzType",
                  "nzSize",
                ],
                [1, "text-center", "mt-2"],
                [
                  "nz-button",
                  "",
                  "nzBlock",
                  "",
                  "type",
                  "button",
                  1,
                  "mt-1",
                  3,
                  "nzLoading",
                  "nzType",
                  "nzSize",
                  "click",
                ],
                [
                  "alt",
                  "LegalAgenda",
                  "width",
                  "18",
                  "height",
                  "18",
                  1,
                  "me-2",
                  3,
                  "ngSrc",
                ],
                ["rel", "noopener", 3, "routerLink"],
                ["nz-icon", "", 3, "nzType", "click"],
                ["nz-typography", "", 2, "font-size", "12px", 3, "nzType"],
              ],
              template: function (t, n) {
                if (
                  (1 & t &&
                    (e.TgZ(0, "div", 0),
                    e._UZ(1, "img", 1),
                    e.qZA(),
                    e.TgZ(2, "div", 2),
                    e._uU(3, "Crea tu cuenta."),
                    e.qZA(),
                    e.TgZ(4, "nz-spin", 3)(5, "form", 4),
                    e.NdJ("submit", function () {
                      return n.validate();
                    }),
                    e.TgZ(6, "nz-form-item")(7, "nz-form-control", 5)(
                      8,
                      "label",
                      6
                    ),
                    e._uU(9, "Nombre completo"),
                    e.qZA(),
                    e.TgZ(10, "nz-input-group", 7),
                    e._UZ(11, "input", 8, 9),
                    e.qZA()()(),
                    e.TgZ(13, "nz-form-item")(14, "nz-form-control", 5)(
                      15,
                      "label",
                      10
                    ),
                    e._uU(16, "Correo electrónico"),
                    e.qZA(),
                    e.TgZ(17, "nz-input-group", 7),
                    e._UZ(18, "input", 11),
                    e.qZA()()(),
                    e.TgZ(19, "nz-form-item")(20, "nz-form-control", 12)(
                      21,
                      "label",
                      13
                    ),
                    e._uU(22, " Contraseña "),
                    e.YNc(23, D, 2, 1, "span", 14),
                    e.qZA(),
                    e.TgZ(24, "nz-input-group", 15),
                    e._UZ(25, "input", 16),
                    e.qZA(),
                    e.YNc(26, j, 1, 1, "ng-template", null, 17, e.W1O),
                    e.qZA()(),
                    e.YNc(28, q, 2, 2, "ng-template", null, 18, e.W1O),
                    e.TgZ(30, "nz-form-item")(31, "nz-form-control")(
                      32,
                      "p",
                      19
                    ),
                    e._uU(33, " Al registrarte, aceptarás nuestras "),
                    e.TgZ(34, "a", 20),
                    e._uU(35, "Politicas de Privacidad"),
                    e.qZA(),
                    e._uU(36, " y "),
                    e.TgZ(37, "a", 21),
                    e._uU(38, "Términos de Uso"),
                    e.qZA(),
                    e._uU(39, ". "),
                    e.qZA()()(),
                    e.TgZ(40, "button", 22),
                    e._uU(41, "Registrarse "),
                    e.qZA(),
                    e.TgZ(42, "div", 23),
                    e._uU(43, "O"),
                    e.qZA(),
                    e.TgZ(44, "button", 24),
                    e.NdJ("click", function () {
                      return n.signUpWithGoogle();
                    }),
                    e._UZ(45, "img", 25),
                    e._uU(46, " Registrarse con Google "),
                    e.qZA(),
                    e._UZ(47, "nz-form-item"),
                    e.TgZ(48, "nz-form-item", 19)(49, "nz-form-control")(
                      50,
                      "p",
                      19
                    ),
                    e._uU(51, " ¿Ya tienes una cuenta? "),
                    e.TgZ(52, "a", 26),
                    e._uU(53, "Iniciar sesión"),
                    e.qZA()()()()()()),
                  2 & t)
                ) {
                  const l = e.MAs(27),
                    y = e.MAs(29);
                  e.xp6(1),
                    e.Q6J("ngSrc", "/assets/images/logo.png"),
                    e.xp6(3),
                    e.Q6J("nzSpinning", n.loading || n.validating),
                    e.xp6(1),
                    e.Q6J("formGroup", n.form),
                    e.xp6(2),
                    e.Q6J("nzErrorTip", "¡Por favor ingresa tu nombre!"),
                    e.xp6(3),
                    e.Q6J("nzPrefixIcon", "user")("nzSize", "large"),
                    e.xp6(1),
                    e.Q6J("formControlName", "name"),
                    e.xp6(3),
                    e.Q6J(
                      "nzErrorTip",
                      "¡Por favor ingresa tu correo electrónico!"
                    ),
                    e.xp6(3),
                    e.Q6J("nzPrefixIcon", "mail")("nzSize", "large"),
                    e.xp6(1),
                    e.Q6J("formControlName", "email"),
                    e.xp6(2),
                    e.Q6J("nzErrorTip", "¡Por favor ingresa tu contraseña!")(
                      "nzExtra",
                      y
                    ),
                    e.xp6(3),
                    e.Q6J("ngIf", n.hasPassword && n.passwordStrength),
                    e.xp6(1),
                    e.Q6J("nzSuffix", l)("nzPrefixIcon", "lock")(
                      "nzSize",
                      "large"
                    ),
                    e.xp6(1),
                    e.Q6J("formControlName", "password")(
                      "type",
                      n.passwordVisible ? "text" : "password"
                    ),
                    e.xp6(15),
                    e.Q6J("nzLoading", n.loading)("nzType", "primary")(
                      "nzSize",
                      "large"
                    ),
                    e.xp6(4),
                    e.Q6J("nzLoading", n.loadingGoogle)("nzType", "default")(
                      "nzSize",
                      "large"
                    ),
                    e.xp6(1),
                    e.Q6J("ngSrc", "/assets/images/google-icon.png"),
                    e.xp6(7),
                    e.Q6J("routerLink", e.DdM(27, F));
                }
              },
              dependencies: [
                w.O5,
                o.rH,
                s._Y,
                s.Fj,
                s.JJ,
                s.JL,
                s.sg,
                s.u,
                T.t3,
                T.SK,
                f.Lr,
                f.Nx,
                f.Fd,
                _.Zp,
                _.gB,
                _.ke,
                M.Ls,
                k.ix,
                O.w,
                E.dQ,
                Z.ZU,
                L.W,
                w.Zd,
              ],
            })),
            u
          );
        })(),
        W = (() => {
          var r;
          class u {
            constructor(t, n, l, y) {
              (this.auth = t),
                (this.router = n),
                (this.route = l),
                (this.app = y);
              const P = this.route.snapshot.queryParamMap.get("error");
              P && (this.displayError(P), this.removeErrorQueryParam());
            }
            ngOnInit() {
              var t = this;
              return (0, z.Z)(function* () {
                t.auth.isAuthenticated() &&
                  (yield t.router.navigate(["/worklenz"]));
              })();
            }
            displayError(t) {
              this.app.notify("¡Autenticación fallida!", t, !1);
            }
            removeErrorQueryParam() {
              this.router.navigate([], {
                relativeTo: this.route,
                queryParams: {},
              });
            }
          }
          return (
            ((r = u).ɵfac = function (t) {
              return new (t || r)(
                e.Y36(S.e),
                e.Y36(o.F0),
                e.Y36(o.gz),
                e.Y36(A.z)
              );
            }),
            (r.ɵcmp = e.Xpm({
              type: r,
              selectors: [["worklenz-layout"]],
              decls: 10,
              vars: 0,
              consts: [
                [1, "justify-content-center", "py-5", "position-relative"],
                [1, "row", "w-100", "mx-0", "auth-page"],
                [
                  1,
                  "col-md-12",
                  "col-sm-8",
                  "col-xl-3",
                  "mx-auto",
                  "pe-5",
                  "ps-5",
                  "my-5",
                  "bg-white",
                  "w-360",
                  "border-radius-4",
                ],
                [1, "row"],
                [1, "col-md-12"],
                [1, "py-5"],
                ["aria-labelledby", "auth-tab-content"],
                [1, "bg-ant-grey"],
              ],
              template: function (t, n) {
                1 & t &&
                  (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(
                    4,
                    "div",
                    4
                  )(5, "div", 5)(6, "div", 6),
                  e._UZ(7, "router-outlet"),
                  e.qZA()()()()()(),
                  e._UZ(8, "div", 7),
                  e.qZA(),
                  e._UZ(9, "div", 7));
              },
              dependencies: [o.lC],
              styles: [
                ".bg-ant-grey[_ngcontent-%COMP%]{background:#FAFAFA;position:absolute;inset:0;z-index:0}.w-360[_ngcontent-%COMP%]{width:450px;z-index:1}.border-radius-4[_ngcontent-%COMP%]{border:1px solid #FAFAFA;border-radius:4px}@media (max-width: 660px){.w-360[_ngcontent-%COMP%]{width:90%}}",
              ],
            })),
            u
          );
        })();
      var R = a(65797);
      const V = ["emailInput"];
      function H(r, u) {
        1 & r && e._UZ(0, "nz-result", 11);
      }
      const K = function () {
        return ["/auth/login"];
      };
      function $(r, u) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "div")(1, "div", 12),
            e._uU(
              2,
              " Por favor ingresa tu dirección de correo electrónico. Recibirás un enlace para crear una nueva contraseña por correo electrónico. "
            ),
            e.qZA(),
            e.TgZ(3, "div", 13)(4, "form", 14),
            e.NdJ("submit", function () {
              e.CHM(i);
              const n = e.oxw();
              return e.KtG(n.resetPassword());
            }),
            e.TgZ(5, "nz-form-item")(6, "nz-form-control", 15)(
              7,
              "nz-input-group",
              16
            ),
            e._UZ(8, "input", 17, 18),
            e.qZA()()(),
            e.TgZ(10, "button", 19),
            e._uU(11, " Restablecer contraseña "),
            e.qZA(),
            e.TgZ(12, "div", 20),
            e._uU(13, " O "),
            e.qZA(),
            e.TgZ(14, "button", 21),
            e._uU(15, " Regresar al inicio de sesión "),
            e.qZA()()()();
        }
        if (2 & r) {
          const i = e.oxw();
          e.xp6(4),
            e.Q6J("formGroup", i.form),
            e.xp6(4),
            e.Q6J("formControlName", "email"),
            e.xp6(2),
            e.Q6J("nzLoading", i.loading)("nzType", "primary"),
            e.xp6(4),
            e.Q6J("routerLink", e.DdM(6, K))("nzType", "default");
        }
      }
      function ee(r, u) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "span", 20),
            e.NdJ("click", function () {
              e.CHM(i);
              const n = e.oxw();
              return e.KtG((n.passwordVisible = !n.passwordVisible));
            }),
            e.qZA();
        }
        if (2 & r) {
          const i = e.oxw();
          e.Q6J("nzType", i.passwordVisible ? "eye-invisible" : "eye");
        }
      }
      function te(r, u) {
        if ((1 & r && (e.TgZ(0, "span", 21), e._uU(1), e.qZA()), 2 & r)) {
          const i = e.oxw();
          e.Q6J("nzType", "secondary"), e.xp6(1), e.Oqu(i.passwordPolicy);
        }
      }
      const ne = function () {
          return ["/auth/reset-password"];
        },
        oe = [
          {
            path: "",
            component: W,
            children: [
              { path: "", redirectTo: "login", pathMatch: "full" },
              { path: "login", component: I },
              { path: "signup", component: G },
            ],
          },
          {
            path: "",
            children: [
              {
                path: "reset-password",
                component: (() => {
                  var r;
                  class u {
                    constructor(t, n, l, y, P, J) {
                      (this.app = t),
                        (this.router = n),
                        (this.api = l),
                        (this.auth = y),
                        (this.route = P),
                        (this.fb = J),
                        (this.loading = !1),
                        (this.informationSent = !1),
                        (this.teamId = null),
                        this.app.setTitle("Reset Password"),
                        v.s.track(x.Hr),
                        (this.teamId =
                          this.route.snapshot.queryParamMap.get("team")),
                        (this.form = this.fb.group({
                          email: [null, [s.kI.required, s.kI.email]],
                        }));
                    }
                    ngOnInit() {
                      var t = this;
                      return (0, z.Z)(function* () {
                        yield t.authorize();
                      })();
                    }
                    authorize() {
                      var t = this;
                      return (0, z.Z)(function* () {
                        try {
                          const n = yield t.api.authorize();
                          return (
                            !!n.authenticated &&
                            (t.auth.setCurrentSession(n.user),
                            yield t.router.navigate(["/worklenz/home"]),
                            !0)
                          );
                        } catch (n) {
                          return (0, C.tu)(n), !1;
                        }
                      })();
                    }
                    resetPassword() {
                      var t = this;
                      return (0, z.Z)(function* () {
                        if (!t.loading)
                          if (t.form.valid) {
                            t.loading = !0;
                            try {
                              (yield t.api.resetPassword({
                                email: t.form.controls.email.value,
                              })).done && (t.informationSent = !0),
                                (t.loading = !1);
                            } catch (n) {
                              (0, C.tu)(n),
                                (t.loading = !1),
                                t.app.notify(
                                  "¡Restablecimiento de contraseña fallido!",
                                  "Ha ocurrido un error desconocido. Por favor, intenta nuevamente.",
                                  !1
                                );
                            }
                          } else t.app.displayErrorsOf(t.form);
                      })();
                    }
                  }
                  return (
                    ((r = u).ɵfac = function (t) {
                      return new (t || r)(
                        e.Y36(A.z),
                        e.Y36(o.F0),
                        e.Y36(b.Q),
                        e.Y36(S.e),
                        e.Y36(o.gz),
                        e.Y36(s.qu)
                      );
                    }),
                    (r.ɵcmp = e.Xpm({
                      type: r,
                      selectors: [["worklenz-reset-password"]],
                      viewQuery: function (t, n) {
                        if ((1 & t && e.Gf(V, 5), 2 & t)) {
                          let l;
                          e.iGM((l = e.CRH())) && (n.emailInput = l.first);
                        }
                      },
                      decls: 11,
                      vars: 2,
                      consts: [
                        [
                          1,
                          "d-flex",
                          "align-items-center",
                          "justify-content-center",
                        ],
                        [1, "row", "w-100", "mx-0", "auth-page"],
                        [
                          1,
                          "col-md-5",
                          "col-sm-8",
                          "col-xl-3",
                          "mx-auto",
                          "pe-5",
                          "ps-5",
                        ],
                        [1, "w-360"],
                        [1, "row"],
                        [1, "col-md-12"],
                        [1, "py-5"],
                        [1, "text-center"],
                        [
                          "alt",
                          "LegalAgenda",
                          "height",
                          "50",
                          "src",
                          "/assets/images/logo.png",
                        ],
                        [
                          "nzStatus",
                          "success",
                          "nzTitle",
                          "Reset instruction sent!",
                          "nzSubTitle",
                          "La información de restablecimiento ha sido enviada a tu correo electrónico. Por favor, revisa tu correo.",
                          4,
                          "ngIf",
                        ],
                        [4, "ngIf"],
                        [
                          "nzStatus",
                          "success",
                          "nzTitle",
                          "Reset instruction sent!",
                          "nzSubTitle",
                          "La información de restablecimiento ha sido enviada a tu correo electrónico. Por favor, revisa tu correo..",
                        ],
                        [1, "text-muted", "mb-4", "mt-1", "text-center"],
                        ["aria-labelledby", "auth-tab-content"],
                        [
                          "nz-form",
                          "",
                          1,
                          "login-form",
                          3,
                          "formGroup",
                          "submit",
                        ],
                        [
                          "nzErrorTip",
                          "¡Por favor ingresa tu correo electrónico!",
                        ],
                        ["nzPrefixIcon", "user", "nzSize", "large"],
                        [
                          "nz-input",
                          "",
                          "placeholder",
                          "Ingresa tu correo electrónico",
                          "type",
                          "email",
                          3,
                          "formControlName",
                        ],
                        ["emailInput", ""],
                        [
                          "nz-button",
                          "",
                          "nzBlock",
                          "",
                          "nzSize",
                          "large",
                          1,
                          "mt-1",
                          3,
                          "nzLoading",
                          "nzType",
                        ],
                        [1, "text-center", "mt-2"],
                        [
                          "nz-button",
                          "",
                          "nzBlock",
                          "",
                          "nzSize",
                          "large",
                          "type",
                          "button",
                          1,
                          "mt-1",
                          3,
                          "routerLink",
                          "nzType",
                        ],
                      ],
                      template: function (t, n) {
                        1 & t &&
                          (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(
                            3,
                            "div",
                            3
                          )(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7),
                          e._UZ(8, "img", 8),
                          e.qZA(),
                          e.YNc(9, H, 1, 0, "nz-result", 9),
                          e.YNc(10, $, 16, 7, "div", 10),
                          e.qZA()()()()()()()),
                          2 & t &&
                            (e.xp6(9),
                            e.Q6J("ngIf", n.informationSent),
                            e.xp6(1),
                            e.Q6J("ngIf", !n.informationSent));
                      },
                      dependencies: [
                        w.O5,
                        o.rH,
                        s._Y,
                        s.Fj,
                        s.JJ,
                        s.JL,
                        s.sg,
                        s.u,
                        T.t3,
                        T.SK,
                        f.Lr,
                        f.Nx,
                        f.Fd,
                        _.Zp,
                        _.gB,
                        k.ix,
                        O.w,
                        E.dQ,
                        R.ml,
                      ],
                    })),
                    u
                  );
                })(),
              },
              {
                path: "verify-reset-email/:user/:hash",
                component: (() => {
                  var r;
                  class u {
                    constructor(t, n, l, y, P) {
                      (this.app = t),
                        (this.api = n),
                        (this.fb = l),
                        (this.route = y),
                        (this.router = P),
                        (this.hash = ""),
                        (this.user = ""),
                        (this.loading = !1),
                        (this.passwordVisible = !1),
                        (this.validating = !1),
                        (this.model = {}),
                        (this.passwordPolicy = h.QW),
                        this.app.setTitle("Reset Password"),
                        (this.form = this.fb.group({
                          password: [null, [s.kI.required]],
                        }));
                    }
                    ngOnInit() {
                      this.route.paramMap.subscribe((t) => {
                        (this.hash = t.get("hash") || ""),
                          (this.user = t.get("user") || "");
                      });
                    }
                    resetPassword() {
                      var t = this;
                      return (0, z.Z)(function* () {
                        if (!t.validating)
                          if (t.form.valid) {
                            t.validating = !0;
                            try {
                              const n = {
                                password: t.form.controls.password.value,
                                hash: t.hash,
                                user: t.user,
                              };
                              (yield t.api.updateNewPassword(n)).done &&
                                (yield t.router.navigate(["/auth/login"])),
                                (t.validating = !1);
                            } catch (n) {
                              (0, C.tu)(n),
                                (t.validating = !1),
                                t.app.notify(
                                  "Reset password failed!",
                                  "An unknown error has occurred. Please try again.",
                                  !1
                                );
                            }
                          } else t.app.displayErrorsOf(t.form);
                      })();
                    }
                  }
                  return (
                    ((r = u).ɵfac = function (t) {
                      return new (t || r)(
                        e.Y36(A.z),
                        e.Y36(b.Q),
                        e.Y36(s.qu),
                        e.Y36(o.gz),
                        e.Y36(o.F0)
                      );
                    }),
                    (r.ɵcmp = e.Xpm({
                      type: r,
                      selectors: [["worklenz-verify-reset-email"]],
                      decls: 27,
                      vars: 10,
                      consts: [
                        [
                          1,
                          "d-flex",
                          "align-items-center",
                          "justify-content-center",
                        ],
                        [1, "row", "w-100", "mx-0", "auth-page"],
                        [
                          1,
                          "col-md-5",
                          "col-sm-8",
                          "col-xl-3",
                          "mx-auto",
                          "pe-5",
                          "ps-5",
                        ],
                        [1, "w-360"],
                        [1, "row"],
                        [1, "col-md-12"],
                        [1, "py-5"],
                        [1, "text-center"],
                        [
                          "alt",
                          "LegalAgenda",
                          "height",
                          "50",
                          "src",
                          "/assets/images/logo.png",
                        ],
                        [1, "text-muted", "mb-4", "mt-1", "text-center"],
                        ["aria-labelledby", "auth-tab-content"],
                        [
                          "nz-form",
                          "",
                          1,
                          "login-form",
                          3,
                          "formGroup",
                          "submit",
                        ],
                        [
                          "nzErrorTip",
                          "¡Por favor ingresa tu contraseña!",
                          3,
                          "nzExtra",
                        ],
                        [
                          "nzPrefixIcon",
                          "lock",
                          "nzSize",
                          "large",
                          3,
                          "nzSuffix",
                        ],
                        [
                          "nz-input",
                          "",
                          "placeholder",
                          "Ingresa tu nueva contraseña",
                          3,
                          "formControlName",
                          "type",
                        ],
                        ["suffixTemplate", ""],
                        ["passwordNote", ""],
                        [
                          "nz-button",
                          "",
                          "nzBlock",
                          "",
                          "nzSize",
                          "large",
                          1,
                          "mt-1",
                          3,
                          "nzLoading",
                          "nzType",
                        ],
                        [1, "text-center", "mt-2"],
                        [
                          "nz-button",
                          "",
                          "nzBlock",
                          "",
                          "nzSize",
                          "large",
                          "type",
                          "button",
                          1,
                          "mt-1",
                          3,
                          "routerLink",
                          "nzType",
                        ],
                        ["nz-icon", "", 3, "nzType", "click"],
                        [
                          "nz-typography",
                          "",
                          2,
                          "font-size",
                          "12px",
                          3,
                          "nzType",
                        ],
                      ],
                      template: function (t, n) {
                        if (
                          (1 & t &&
                            (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(
                              3,
                              "div",
                              3
                            )(4, "div", 4)(5, "div", 5)(6, "div", 6)(
                              7,
                              "div",
                              7
                            ),
                            e._UZ(8, "img", 8),
                            e.qZA(),
                            e.TgZ(9, "div", 9),
                            e._uU(10, " Ingresa tu nueva contraseña "),
                            e.qZA(),
                            e.TgZ(11, "div", 10)(12, "form", 11),
                            e.NdJ("submit", function () {
                              return n.resetPassword();
                            }),
                            e.TgZ(13, "nz-form-item")(
                              14,
                              "nz-form-control",
                              12
                            )(15, "nz-input-group", 13),
                            e._UZ(16, "input", 14),
                            e.qZA(),
                            e.YNc(17, ee, 1, 1, "ng-template", null, 15, e.W1O),
                            e.qZA()(),
                            e.YNc(19, te, 2, 2, "ng-template", null, 16, e.W1O),
                            e.TgZ(21, "button", 17),
                            e._uU(22, " Reset Password "),
                            e.qZA(),
                            e.TgZ(23, "div", 18),
                            e._uU(24, " OR "),
                            e.qZA(),
                            e.TgZ(25, "button", 19),
                            e._uU(26, " Reenviar correo de restablecimiento "),
                            e.qZA()()()()()()()()()()),
                          2 & t)
                        ) {
                          const l = e.MAs(18),
                            y = e.MAs(20);
                          e.xp6(12),
                            e.Q6J("formGroup", n.form),
                            e.xp6(2),
                            e.Q6J("nzExtra", y),
                            e.xp6(1),
                            e.Q6J("nzSuffix", l),
                            e.xp6(1),
                            e.Q6J("formControlName", "password")(
                              "type",
                              n.passwordVisible ? "text" : "password"
                            ),
                            e.xp6(5),
                            e.Q6J("nzLoading", n.loading)("nzType", "primary"),
                            e.xp6(4),
                            e.Q6J("routerLink", e.DdM(9, ne))(
                              "nzType",
                              "default"
                            );
                        }
                      },
                      dependencies: [
                        o.rH,
                        s._Y,
                        s.Fj,
                        s.JJ,
                        s.JL,
                        s.sg,
                        s.u,
                        T.t3,
                        T.SK,
                        f.Lr,
                        f.Nx,
                        f.Fd,
                        _.Zp,
                        _.gB,
                        _.ke,
                        M.Ls,
                        k.ix,
                        O.w,
                        E.dQ,
                        Z.ZU,
                      ],
                    })),
                    u
                  );
                })(),
              },
              { path: "**", redirectTo: "login", pathMatch: "full" },
            ],
          },
        ];
      let re = (() => {
        var r;
        class u {}
        return (
          ((r = u).ɵfac = function (t) {
            return new (t || r)();
          }),
          (r.ɵmod = e.oAB({ type: r })),
          (r.ɵinj = e.cJS({ imports: [o.Bz.forChild(oe), o.Bz] })),
          u
        );
      })();
      var ie = a(79382),
        ae = a(96109),
        se = a(57417),
        le = a(48128);
      let pe = (() => {
        var r;
        class u {}
        return (
          ((r = u).ɵfac = function (t) {
            return new (t || r)();
          }),
          (r.ɵmod = e.oAB({ type: r })),
          (r.ɵinj = e.cJS({
            imports: [
              w.ez,
              re,
              s.u5,
              s.UX,
              f.U5,
              _.o7,
              M.PV,
              k.sL,
              U.Wr,
              Z.ZJ,
              ie.we,
              ae.cg,
              L.j,
              R.XD,
              se.$6,
              le.W,
            ],
          })),
          u
        );
      })();
    },
    57417: (B, Q, a) => {
      a.d(Q, { $6: () => U, lU: () => O });
      var w = a(97582),
        o = a(65879),
        z = a(64194),
        s = a(40874),
        C = a(27754),
        h = a(96109),
        v = a(331),
        x = a(49388),
        e = a(96814),
        A = a(69594),
        b = a(8324),
        S = a(85448);
      function T(p, m) {
        if ((1 & p && (o.ynx(0), o._uU(1), o.BQk()), 2 & p)) {
          const c = o.oxw(3);
          o.xp6(1), o.Oqu(c.nzTitle);
        }
      }
      function f(p, m) {
        if (
          (1 & p &&
            (o.TgZ(0, "div", 10),
            o.YNc(1, T, 2, 1, "ng-container", 9),
            o.qZA()),
          2 & p)
        ) {
          const c = o.oxw(2);
          o.xp6(1), o.Q6J("nzStringTemplateOutlet", c.nzTitle);
        }
      }
      function _(p, m) {
        if ((1 & p && (o.ynx(0), o._uU(1), o.BQk()), 2 & p)) {
          const c = o.oxw(2);
          o.xp6(1), o.Oqu(c.nzContent);
        }
      }
      function M(p, m) {
        if (
          (1 & p &&
            (o.TgZ(0, "div", 2)(1, "div", 3)(2, "div", 4),
            o._UZ(3, "span", 5),
            o.qZA(),
            o.TgZ(4, "div", 6)(5, "div"),
            o.YNc(6, f, 2, 1, "div", 7),
            o.TgZ(7, "div", 8),
            o.YNc(8, _, 2, 1, "ng-container", 9),
            o.qZA()()()()()),
          2 & p)
        ) {
          const c = o.oxw();
          o.ekj("ant-popover-rtl", "rtl" === c.dir),
            o.Q6J("ngClass", c._classMap)("ngStyle", c.nzOverlayStyle)(
              "@.disabled",
              !(null == c.noAnimation || !c.noAnimation.nzNoAnimation)
            )(
              "nzNoAnimation",
              null == c.noAnimation ? null : c.noAnimation.nzNoAnimation
            )("@zoomBigMotion", "active"),
            o.xp6(6),
            o.Q6J("ngIf", c.nzTitle),
            o.xp6(2),
            o.Q6J("nzStringTemplateOutlet", c.nzContent);
        }
      }
      let O = (() => {
          var p;
          class m extends h.Mg {
            getProxyPropertyMap() {
              return {
                nzPopoverBackdrop: ["nzBackdrop", () => this.nzPopoverBackdrop],
                ...super.getProxyPropertyMap(),
              };
            }
            constructor(d, g, I, Z, L, N) {
              super(d, g, I, Z, L, N),
                (this._nzModuleName = "popover"),
                (this.trigger = "hover"),
                (this.placement = "top"),
                (this.nzPopoverBackdrop = !1),
                (this.visibleChange = new o.vpe()),
                (this.componentRef = this.hostView.createComponent(E));
            }
          }
          return (
            ((p = m).ɵfac = function (d) {
              return new (d || p)(
                o.Y36(o.SBq),
                o.Y36(o.s_b),
                o.Y36(o._Vd),
                o.Y36(o.Qsj),
                o.Y36(v.P, 9),
                o.Y36(s.jY)
              );
            }),
            (p.ɵdir = o.lG2({
              type: p,
              selectors: [["", "nz-popover", ""]],
              hostVars: 2,
              hostBindings: function (d, g) {
                2 & d && o.ekj("ant-popover-open", g.visible);
              },
              inputs: {
                arrowPointAtCenter: [
                  "nzPopoverArrowPointAtCenter",
                  "arrowPointAtCenter",
                ],
                title: ["nzPopoverTitle", "title"],
                content: ["nzPopoverContent", "content"],
                directiveTitle: ["nz-popover", "directiveTitle"],
                trigger: ["nzPopoverTrigger", "trigger"],
                placement: ["nzPopoverPlacement", "placement"],
                origin: ["nzPopoverOrigin", "origin"],
                visible: ["nzPopoverVisible", "visible"],
                mouseEnterDelay: [
                  "nzPopoverMouseEnterDelay",
                  "mouseEnterDelay",
                ],
                mouseLeaveDelay: [
                  "nzPopoverMouseLeaveDelay",
                  "mouseLeaveDelay",
                ],
                overlayClassName: [
                  "nzPopoverOverlayClassName",
                  "overlayClassName",
                ],
                overlayStyle: ["nzPopoverOverlayStyle", "overlayStyle"],
                nzPopoverBackdrop: "nzPopoverBackdrop",
              },
              outputs: { visibleChange: "nzPopoverVisibleChange" },
              exportAs: ["nzPopover"],
              features: [o.qOj],
            })),
            (0, w.gn)([(0, C.yF)()], m.prototype, "arrowPointAtCenter", void 0),
            (0, w.gn)([(0, s.oS)()], m.prototype, "nzPopoverBackdrop", void 0),
            m
          );
        })(),
        E = (() => {
          var p;
          class m extends h.XK {
            constructor(d, g, I) {
              super(d, g, I), (this._prefix = "ant-popover");
            }
            get hasBackdrop() {
              return "click" === this.nzTrigger && this.nzBackdrop;
            }
            isEmpty() {
              return (0, h.pu)(this.nzTitle) && (0, h.pu)(this.nzContent);
            }
          }
          return (
            ((p = m).ɵfac = function (d) {
              return new (d || p)(o.Y36(o.sBO), o.Y36(x.Is, 8), o.Y36(v.P, 9));
            }),
            (p.ɵcmp = o.Xpm({
              type: p,
              selectors: [["nz-popover"]],
              exportAs: ["nzPopoverComponent"],
              features: [o.qOj],
              decls: 2,
              vars: 6,
              consts: [
                [
                  "cdkConnectedOverlay",
                  "",
                  "nzConnectedOverlay",
                  "",
                  3,
                  "cdkConnectedOverlayHasBackdrop",
                  "cdkConnectedOverlayOrigin",
                  "cdkConnectedOverlayPositions",
                  "cdkConnectedOverlayOpen",
                  "cdkConnectedOverlayPush",
                  "nzArrowPointAtCenter",
                  "overlayOutsideClick",
                  "detach",
                  "positionChange",
                ],
                ["overlay", "cdkConnectedOverlay"],
                [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"],
                [1, "ant-popover-content"],
                [1, "ant-popover-arrow"],
                [1, "ant-popover-arrow-content"],
                ["role", "tooltip", 1, "ant-popover-inner"],
                ["class", "ant-popover-title", 4, "ngIf"],
                [1, "ant-popover-inner-content"],
                [4, "nzStringTemplateOutlet"],
                [1, "ant-popover-title"],
              ],
              template: function (d, g) {
                1 & d &&
                  (o.YNc(0, M, 9, 9, "ng-template", 0, 1, o.W1O),
                  o.NdJ("overlayOutsideClick", function (Z) {
                    return g.onClickOutside(Z);
                  })("detach", function () {
                    return g.hide();
                  })("positionChange", function (Z) {
                    return g.onPositionChange(Z);
                  })),
                  2 & d &&
                    o.Q6J("cdkConnectedOverlayHasBackdrop", g.hasBackdrop)(
                      "cdkConnectedOverlayOrigin",
                      g.origin
                    )("cdkConnectedOverlayPositions", g._positions)(
                      "cdkConnectedOverlayOpen",
                      g._visible
                    )("cdkConnectedOverlayPush", !0)(
                      "nzArrowPointAtCenter",
                      g.nzArrowPointAtCenter
                    );
              },
              dependencies: [e.mk, e.O5, e.PC, A.pI, b.f, S.hQ, v.P],
              encapsulation: 2,
              data: { animation: [z.$C] },
              changeDetection: 0,
            })),
            m
          );
        })(),
        U = (() => {
          var p;
          class m {}
          return (
            ((p = m).ɵfac = function (d) {
              return new (d || p)();
            }),
            (p.ɵmod = o.oAB({ type: p })),
            (p.ɵinj = o.cJS({
              imports: [x.vT, e.ez, A.U8, b.T, S.e4, v.g, h.cg],
            })),
            m
          );
        })();
    },
  },
]);
