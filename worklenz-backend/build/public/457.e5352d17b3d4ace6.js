"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [457],
  {
    43791: (G, k, r) => {
      r.r(k), r.d(k, { AccountSetupModule: () => Bt });
      var a = r(96814),
        T = r(35420),
        _ = r(15861),
        p = r(60095),
        f = r(69649),
        C = r(86408),
        g = r(27782),
        x = r(21406),
        y = r(16406),
        t = r(65879),
        w = r(90586),
        M = r(32333),
        P = r(16849),
        Q = r(80697);
      function U(i, l) {
        if (
          (1 & i &&
            (t.TgZ(0, "nz-form-item")(1, "h2", 21),
            t._uU(2, "Elige un nombre para tu bufete."),
            t.qZA(),
            t.TgZ(3, "span", 22),
            t._uU(4, " Elige un nombre para tu cuenta en Legal Agenda. "),
            t.qZA(),
            t.TgZ(5, "nz-form-control", 23),
            t._UZ(6, "input", 24),
            t.qZA()()),
          2 & i)
        ) {
          const s = t.oxw(2);
          t.xp6(5),
            t.Q6J("nzSpan", null),
            t.xp6(1),
            t.Q6J("formControlName", "team_name")(
              "placeholder",
              s.teamSetupPlaceholder
            )("id", s.teamNameId);
        }
      }
      function N(i, l) {
        if (1 & i) {
          const s = t.EpF();
          t.TgZ(0, "nz-form-item")(1, "h2", 21),
            t._uU(2, "Crea tu primer expediente legal."),
            t.qZA(),
            t.TgZ(3, "span", 22),
            t._uU(4, " Que expediente legal estas gestionando ahora mismo? "),
            t.qZA(),
            t.TgZ(5, "nz-form-control", 23),
            t._UZ(6, "input", 24),
            t.qZA(),
            t.TgZ(7, "div", 25)(8, "h4", 26),
            t._uU(9, "Ó"),
            t.qZA(),
            t._UZ(10, "div", 27),
            t.qZA(),
            t.TgZ(11, "button", 28),
            t.NdJ("click", function () {
              t.CHM(s);
              const n = t.oxw(2);
              return t.KtG(n.openTemplateSelector());
            }),
            t._uU(12, "Crea el expediente desde nuestras plantillas de procesos "),
            t.qZA()();
        }
        if (2 & i) {
          const s = t.oxw(2);
          t.xp6(5),
            t.Q6J("nzSpan", null),
            t.xp6(1),
            t.Q6J("formControlName", "project_name")(
              "placeholder",
              "Ejem. Demanda Laboral"
            )("id", s.projectNameId),
            t.xp6(5),
            t.Q6J("nzType", "primary");
        }
      }
      function A(i, l) {
        if (1 & i) {
          const s = t.EpF();
          t.TgZ(0, "nz-list-item", 32),
            t._UZ(1, "input", 33),
            t.TgZ(2, "ul", 34)(3, "nz-list-item-action")(4, "span", 35),
            t.NdJ("click", function (n) {
              const m = t.CHM(s).index,
                Z = t.oxw(3);
              return t.KtG(Z.removeTaskRow(m, n));
            }),
            t.qZA()()()();
        }
        if (2 & i) {
          const s = l.index;
          t.Q6J("formArrayName", "tasks"),
            t.xp6(1),
            t.Q6J("formControlName", s),
            t.uIk("id", "task-name-input-" + s);
        }
      }
      function E(i, l) {
        if (1 & i) {
          const s = t.EpF();
          t.TgZ(0, "div")(1, "h2", 21),
            t._uU(2, "Crea tu primer tarea."),
            t.qZA(),
            t.TgZ(3, "span", 22),
            t._uU(4, " Escribe algunas tareas que vas a realizar para "),
            t.TgZ(5, "span", 21),
            t._uU(6, '"'),
            t.TgZ(7, "mark"),
            t._uU(8),
            t.qZA(),
            t._uU(9, '".'),
            t.qZA()(),
            t.TgZ(10, "nz-list"),
            t.YNc(11, A, 5, 3, "nz-list-item", 29),
            t.TgZ(12, "nz-list-item")(13, "button", 30),
            t.NdJ("click", function (n) {
              t.CHM(s);
              const c = t.oxw(2);
              return t.KtG(c.addNewTaskRow(n));
            }),
            t._UZ(14, "span", 31),
            t._uU(15, " Añadir otra"),
            t.qZA()()()();
        }
        if (2 & i) {
          const s = t.oxw(2);
          t.xp6(8),
            t.Oqu(s.projectName),
            t.xp6(3),
            t.Q6J("ngForOf", s.getTaskControls.controls);
        }
      }
      function Y(i, l) {
        if (1 & i) {
          const s = t.EpF();
          t.TgZ(0, "nz-list-item", 32),
            t.ynx(1),
            t._UZ(2, "input", 38),
            t.TgZ(3, "ul", 34)(4, "nz-list-item-action")(5, "span", 35),
            t.NdJ("click", function (n) {
              const m = t.CHM(s).index,
                Z = t.oxw(3);
              return t.KtG(Z.removeTeamMember(m, n));
            }),
            t.qZA()()(),
            t.BQk(),
            t.qZA();
        }
        if (2 & i) {
          const s = l.index,
            e = t.oxw(3);
          t.Q6J("formArrayName", "team_members"),
            t.xp6(2),
            t.Q6J("formControlName", s),
            t.uIk("id", e.emailInputId);
        }
      }
      function L(i, l) {
        if (1 & i) {
          const s = t.EpF();
          t.TgZ(0, "nz-form-item")(1, "h2", 21),
            t._uU(2, " Invita a otro colega para trabajar con "),
            t._UZ(3, "br"),
            t.TgZ(4, "span", 36),
            t._uU(5, ' "'),
            t.TgZ(6, "mark"),
            t._uU(7),
            t.qZA(),
            t._uU(8, '". '),
            t.qZA()(),
            t.TgZ(9, "span", 22),
            t._uU(10, " Invitar por Correo Electrónico "),
            t._UZ(11, "span", 37),
            t.qZA(),
            t.TgZ(12, "nz-list"),
            t.YNc(13, Y, 6, 3, "nz-list-item", 29),
            t.TgZ(14, "nz-list-item")(15, "button", 30),
            t.NdJ("click", function (n) {
              t.CHM(s);
              const c = t.oxw(2);
              return t.KtG(c.addNewTeamMemberRow(n));
            }),
            t._UZ(16, "span", 31),
            t._uU(17, " añadir otro "),
            t.qZA()()()();
        }
        if (2 & i) {
          const s = t.oxw(2);
          t.xp6(7),
            t.Oqu(s.workspaceName),
            t.xp6(6),
            t.Q6J("ngForOf", s.getTeamMemberControls.controls);
        }
      }
      function d(i, l) {
        if (1 & i) {
          const s = t.EpF();
          t.TgZ(0, "button", 39),
            t.NdJ("click", function () {
              t.CHM(s);
              const n = t.oxw(2);
              return t.KtG(n.previous());
            }),
            t._uU(1, " Ir Atrás "),
            t.qZA();
        }
      }
      function h(i, l) {
        if (1 & i) {
          const s = t.EpF();
          t.TgZ(0, "button", 40),
            t.NdJ("click", function () {
              t.CHM(s);
              const n = t.oxw(2);
              return t.KtG(n.skipInvite());
            }),
            t.TgZ(1, "span", 41),
            t._uU(2, "Omitir por ahora"),
            t.qZA()();
        }
        if (2 & i) {
          const s = t.oxw(2);
          t.Q6J("nzLoading", s.loading);
        }
      }
      function z(i, l) {
        if (1 & i) {
          const s = t.EpF();
          t.TgZ(0, "nz-skeleton", 11)(1, "nz-steps", 12),
            t.NdJ("nzIndexChange", function (n) {
              t.CHM(s);
              const c = t.oxw();
              return t.KtG(c.onIndexChange(n));
            }),
            t._UZ(2, "nz-step", 13)(3, "nz-step", 13)(4, "nz-step", 13)(
              5,
              "nz-step",
              13
            ),
            t.qZA(),
            t.TgZ(6, "form", 14),
            t.NdJ("submit", function () {
              t.CHM(s);
              const n = t.oxw();
              return t.KtG(n.next());
            }),
            t.ynx(7, 15),
            t.YNc(8, U, 7, 4, "nz-form-item", 16),
            t.YNc(9, N, 13, 5, "nz-form-item", 16),
            t.YNc(10, E, 16, 2, "div", 16),
            t.YNc(11, L, 18, 2, "nz-form-item", 16),
            t.BQk(),
            t.TgZ(12, "div", 17),
            t.YNc(13, d, 2, 0, "button", 18),
            t.YNc(14, h, 3, 1, "button", 19),
            t.TgZ(15, "button", 20),
            t._uU(16, "Continuar "),
            t.qZA()()()();
        }
        if (2 & i) {
          const s = t.oxw();
          t.Q6J("nzActive", !0)("nzLoading", s.verifying),
            t.xp6(1),
            t.Q6J("nzCurrent", s.index)("nzDirection", "horizontal")(
              "nzSize",
              "default"
            ),
            t.xp6(1),
            t.ekj("active-half", s.isTeamNameValid()),
            t.Q6J("nzDisabled", s.index < 0),
            t.xp6(1),
            t.ekj("active-half", s.isProjectNameValid()),
            t.Q6J("nzDisabled", s.index < 1),
            t.xp6(1),
            t.Q6J("nzDisabled", s.index < 2),
            t.xp6(1),
            t.Q6J("nzDisabled", s.index < 3),
            t.xp6(1),
            t.Q6J("formGroup", s.form)("nzLayout", "vertical"),
            t.xp6(1),
            t.Q6J("ngSwitch", s.index),
            t.xp6(1),
            t.Q6J("ngSwitchCase", 0),
            t.xp6(1),
            t.Q6J("ngSwitchCase", 1),
            t.xp6(1),
            t.Q6J("ngSwitchCase", 2),
            t.xp6(1),
            t.Q6J("ngSwitchCase", 3),
            t.xp6(2),
            t.Q6J("ngIf", 0 !== s.index),
            t.xp6(1),
            t.Q6J("ngIf", 3 === s.index && !s.loading),
            t.xp6(1),
            t.Q6J("nzLoading", s.loading)("nzType", "primary")(
              "disabled",
              !s.isValid()
            );
        }
      }
      let o = (() => {
        var i;
        class l {
          constructor(e, n, c, m, Z, Qt) {
            (this.fb = e),
              (this.app = n),
              (this.auth = c),
              (this.api = m),
              (this.templateApi = Z),
              (this.router = Qt),
              (this.inputsMap = {}),
              (this.loading = !1),
              (this.verifying = !1),
              (this.teamNameId = (0, f.q$)(6)),
              (this.projectNameId = (0, f.q$)(6)),
              (this.emailInputId = (0, f.q$)(6)),
              (this.skipInviteClicked = !1),
              (this.selectedTemplateId = null),
              (this._index = 0),
              (this.form = this.fb.group({
                team_name: [null, [p.kI.required, p.kI.pattern(x.WJ)]],
                project_name: [null, [p.kI.required, p.kI.pattern(x.WJ)]],
                tasks: this.fb.array(
                  [],
                  [p.kI.minLength(1), p.kI.pattern(x.WJ)]
                ),
                team_members: this.fb.array(
                  [],
                  [p.kI.minLength(1), this.validEmail(x.iN)]
                ),
              })),
              this.app.setTitle("Configura tu cuenta");
          }
          get profile() {
            return this.auth.getCurrentSession();
          }
          get teamSetupPlaceholder() {
            return `Bufete Jurídico ${this.profile?.name} `;
          }
          get projectName() {
            return this.form.value.project_name;
          }
          get workspaceName() {
            return this.form.value.team_name;
          }
          get index() {
            return this._index;
          }
          set index(e) {
            this._index = e;
          }
          get getTaskControls() {
            return this.form.get("tasks");
          }
          get getTasks() {
            return this.form.controls.tasks;
          }
          get getTeamMemberControls() {
            return this.form.get("team_members");
          }
          get getTeamMembers() {
            return this.form.controls.team_members;
          }
          ngOnInit() {
            this.reauthorize(),
              (this.validateForm = this.fb.group({})),
              (this.validateFormMember = this.fb.group({})),
              this.addNewTaskRow(),
              this.addNewTeamMemberRow();
          }
          ngAfterViewInit() {
            (this.inputsMap = {
              0: this.teamNameId,
              1: this.projectNameId,
              2: "task-name-input-0",
              3: this.emailInputId,
            }),
              this.focusInput();
          }
          submit() {
            var e = this;
            return (0, _.Z)(function* () {
              if (!e.loading)
                try {
                  e.loading = !0;
                  const n = e.form.value;
                  let c;
                  if (
                    ((n.tasks = n.tasks.filter((m) => m?.trim().length)),
                    (n.template_id = e.selectedTemplateId),
                    (c = n.template_id
                      ? yield e.templateApi.setupAccount(n)
                      : yield e.api.setupAccount(n)),
                    yield e.auth.authorize(),
                    c.done && c.body.id)
                  ) {
                    C.s.track(g.XQ), yield e.auth.authorize();
                    const m = c.body.has_invitations
                      ? "/worklenz/setup/teams"
                      : `/worklenz/projects/${c.body.id}`;
                    yield e.router.navigate([m]);
                  }
                  e.loading = !1;
                } catch (n) {
                  (0, f.tu)(n), (e.loading = !1);
                }
            })();
          }
          previous() {
            this.index > 0 && (this.index -= 1);
          }
          next() {
            this.isValid() &&
              (this.index + 1 > 3
                ? this.submit()
                : (this.index++, this.focusInput()));
          }
          onIndexChange(e) {
            (this.index = e), this.focusInput();
          }
          validEmail(e) {
            return (n) => {
              let c = !1;
              return (
                (c = Array.isArray(n.value)
                  ? n.value.every((m) => e.test(m))
                  : e.test(n.value)),
                c ? null : { email: { value: n.value } }
              );
            };
          }
          isValidTasksInput() {
            return (
              !(!this.getTasks.length || !this.getTasks.valid) ||
              this.getTasks.valid
            );
          }
          isValidTeamMembers() {
            return this.getTeamMembers.length && this.getTeamMembers.valid;
          }
          isValid() {
            return 0 === this.index
              ? this.form.controls.team_name.valid
              : 1 === this.index
              ? this.form.controls.project_name.valid
              : 2 === this.index
              ? this.isValidTasksInput()
              : 3 === this.index && this.isValidTeamMembers();
          }
          addNewTaskRow(e) {
            e && e.preventDefault();
            const n = new p.NI(null, [p.kI.required]);
            this.getTasks.push(n),
              setTimeout(() => {
                document
                  .querySelector(
                    "#task-name-input-" +
                      (this.getTaskControls.controls.length - 1)
                  )
                  ?.focus();
              }, 100);
          }
          removeTaskRow(e, n) {
            n.preventDefault();
            const c = this.getTasks;
            c.length > 1 && c.removeAt(e);
          }
          addNewTeamMemberRow(e) {
            e && e.preventDefault();
            const n = this.getTeamMembers,
              c = new p.NI("", [p.kI.email]);
            n.push(c);
          }
          removeTeamMember(e, n) {
            n.preventDefault();
            const c = this.getTeamMembers;
            c.length > 1 && c.removeAt(e);
          }
          isTeamNameValid() {
            return this.form.controls.team_name.valid;
          }
          isProjectNameValid() {
            return this.form.controls.project_name.valid;
          }
          reauthorize() {
            var e = this;
            return (0, _.Z)(function* () {
              return (
                (e.verifying = !0),
                yield e.auth.authorize(),
                e.auth.getCurrentSession()?.setup_completed
                  ? e.router.navigate(["/worklenz/home"])
                  : ((e.verifying = !1), C.s.track(g.CK), null)
              );
            })();
          }
          focusInput() {
            setTimeout(() => {
              const e = this.inputsMap[this.index];
              document.querySelector(`#${e}`)?.focus();
            }, 250);
          }
          skipInvite() {
            (this.skipInviteClicked = !1),
              C.s.track(g.fF),
              this.form.controls.team_members.reset([]),
              this.submit();
          }
          openTemplateSelector() {
            this.projectTemplateDrawer.open();
          }
          templateSelected(e) {
            (this.selectedTemplateId = e.template_id), this.submit();
          }
        }
        return (
          ((i = l).ɵfac = function (e) {
            return new (e || i)(
              t.Y36(p.qu),
              t.Y36(w.z),
              t.Y36(M.e),
              t.Y36(P.G),
              t.Y36(Q.I),
              t.Y36(T.F0)
            );
          }),
          (i.ɵcmp = t.Xpm({
            type: i,
            selectors: [["worklenz-account-setup"]],
            viewQuery: function (e, n) {
              if ((1 & e && t.Gf(y.p, 5), 2 & e)) {
                let c;
                t.iGM((c = t.CRH())) && (n.projectTemplateDrawer = c.first);
              }
            },
            decls: 12,
            vars: 1,
            consts: [
              [1, "setup-wrapper", "m-auto", "px-3"],
              [1, "row"],
              [1, "py-5"],
              [1, "text-center"],
              [
                "alt",
                "Worklenz",
                "height",
                "50",
                "src",
                "/assets/images/logo.png",
              ],
              ["nz-typography", "", 1, "mb-4", "mt-1", "text-center"],
              [
                1,
                "mt-4",
                "pt-5",
                "col-xl-8",
                "col-lg-10",
                "col-md-12",
                "mx-auto",
                "bg-white",
              ],
              ["nzDirection", "vertical", 1, "w-100"],
              [
                "class",
                "d-block",
                3,
                "nzActive",
                "nzLoading",
                4,
                "nzSpaceItem",
              ],
              [1, "bg-ant-grey", 2, "position", "fixed"],
              [3, "showBothTabs", "importProject"],
              [1, "d-block", 3, "nzActive", "nzLoading"],
              [
                1,
                "mb-3",
                "mt-3",
                "justify-content-center",
                "w-steps",
                "mx-auto",
                3,
                "nzCurrent",
                "nzDirection",
                "nzSize",
                "nzIndexChange",
              ],
              [3, "nzDisabled"],
              [
                "nz-form",
                "",
                1,
                "w-600",
                "mx-auto",
                "mt-5",
                "mb-5",
                "pb-3",
                3,
                "formGroup",
                "nzLayout",
                "submit",
              ],
              [3, "ngSwitch"],
              [4, "ngSwitchCase"],
              [1, "d-flex", "mt-5"],
              [
                "nz-button",
                "",
                "type",
                "button",
                "class",
                "ps-0",
                "nzType",
                "link",
                3,
                "click",
                4,
                "ngIf",
              ],
              [
                "nzType",
                "text",
                "type",
                "button",
                "nz-button",
                "",
                3,
                "nzLoading",
                "click",
                4,
                "ngIf",
              ],
              [
                "nz-button",
                "",
                1,
                "ms-auto",
                3,
                "nzLoading",
                "nzType",
                "disabled",
              ],
              ["nz-typography", ""],
              ["nz-typography", "", 1, "label-description"],
              [3, "nzSpan"],
              [
                "nz-input",
                "",
                "type",
                "text",
                "tabindex",
                "0",
                3,
                "formControlName",
                "placeholder",
                "id",
              ],
              [1, "position-relative"],
              ["nz-typography", "", 1, "text-center", "mt-2", "vert-text"],
              [1, "vert-line"],
              ["nz-button", "", 1, "ms-auto", "me-auto", 3, "nzType", "click"],
              [3, "formArrayName", 4, "ngFor", "ngForOf"],
              [
                "nz-button",
                "",
                "nzType",
                "dashed",
                1,
                "add-button",
                3,
                "click",
              ],
              ["nz-icon", "", "nzType", "plus"],
              [3, "formArrayName"],
              [
                "nz-input",
                "",
                "placeholder",
                "Tu Tarea",
                "tabindex",
                "0",
                3,
                "formControlName",
              ],
              ["nz-list-item-actions", ""],
              [
                "nz-icon",
                "",
                "nzType",
                "close-circle",
                1,
                "dynamic-delete-button",
                3,
                "click",
              ],
              [
                "nz-typography",
                "",
                2,
                "font-size",
                "20px",
                "font-weight",
                "400",
              ],
              [
                "nz-icon",
                "",
                "nzType",
                "mail",
                "nzTheme",
                "outline",
                1,
                "ms-1",
              ],
              [
                "nz-input",
                "",
                "placeholder",
                "Correo Electrónico",
                3,
                "formControlName",
              ],
              [
                "nz-button",
                "",
                "type",
                "button",
                "nzType",
                "link",
                1,
                "ps-0",
                3,
                "click",
              ],
              [
                "nzType",
                "text",
                "type",
                "button",
                "nz-button",
                "",
                3,
                "nzLoading",
                "click",
              ],
              [
                "nz-typography",
                "",
                2,
                "font-weight",
                "500",
                "color",
                "#00000073",
              ],
            ],
            template: function (e, n) {
              1 & e &&
                (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3),
                t._UZ(4, "img", 4),
                t.qZA(),
                t.TgZ(5, "h5", 5),
                t._uU(6, "Configura tu cuenta. "),
                t.qZA(),
                t.TgZ(7, "div", 6)(8, "nz-space", 7),
                t.YNc(9, z, 17, 25, "nz-skeleton", 8),
                t.qZA()()()()(),
                t._UZ(10, "div", 9),
                t.TgZ(11, "worklenz-project-template-import-drawer", 10),
                t.NdJ("importProject", function (m) {
                  return n.templateSelected(m);
                }),
                t.qZA()),
                2 & e && (t.xp6(11), t.Q6J("showBothTabs", !1));
            },
            styles: [
              'nz-steps[_ngcontent-%COMP%]{transform:scale(.83)}@media (max-width: 480px){nz-steps[_ngcontent-%COMP%]{transform:scale(.6)}}.setup-wrapper[_ngcontent-%COMP%]{width:100%;position:relative;z-index:1}.w-600[_ngcontent-%COMP%]{width:600px}@media (max-width: 860px){.w-600[_ngcontent-%COMP%]{width:90%}}.bg-ant-grey[_ngcontent-%COMP%]{background:#FAFAFA;position:absolute;inset:0;z-index:0}.w-steps[_ngcontent-%COMP%]{width:725px}@media (max-width: 860px){.w-steps[_ngcontent-%COMP%]{width:100%}}.label-description[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:#00000073;margin-bottom:16px}.setup-success[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_scale-in-center .15s cubic-bezier(.25,.46,.45,.94) both}.success-icon[_ngcontent-%COMP%]{font-size:36px;margin-bottom:16px}@keyframes _ngcontent-%COMP%_scale-in-center{0%{transform:scale(0);opacity:1}to{transform:scale(1);opacity:1}}h2.ant-typography[_ngcontent-%COMP%], div.ant-typography-h2[_ngcontent-%COMP%], div.ant-typography-h2[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%], .ant-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:1em}.dynamic-delete-button[_ngcontent-%COMP%]{font-size:20px!important;color:#999!important;cursor:pointer!important;position:relative!important;transition:all .3s!important;margin-left:5px!important}.vert-text[_ngcontent-%COMP%]{max-width:40px;background-color:#fff;position:relative;z-index:99;margin-left:auto;margin-right:auto}.vert-line[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;content:"";height:1px;background-color:#00000047;margin-bottom:auto;margin-top:auto}',
            ],
          })),
          l
        );
      })();
      var u = r(83916),
        v = r(42840),
        O = r(70855),
        R = r(41958),
        D = r(24139),
        b = r(62595),
        I = r(8083),
        V = r(66987),
        S = r(16976),
        $ = r(57907);
      function nt(i, l) {
        if (1 & i) {
          const s = t.EpF();
          t.TgZ(0, "nz-list-item", 14),
            t.NdJ("click", function () {
              const c = t.CHM(s).$implicit,
                m = t.oxw(2);
              return t.KtG(m.selectTeam(c.id, !1));
            }),
            t.TgZ(1, "span", 15),
            t._uU(2),
            t.qZA(),
            t._UZ(3, "label", 16),
            t.qZA();
        }
        if (2 & i) {
          const s = l.$implicit,
            e = t.oxw(2);
          t.ekj("selected", e.selectedTeamId === s.id),
            t.xp6(2),
            t.Oqu(s.name),
            t.xp6(1),
            t.Q6J("nzValue", s.id);
        }
      }
      const it = function () {
        return { "margin-bottom.px": 16 };
      };
      function st(i, l) {
        if (
          (1 & i &&
            (t.ynx(0),
            t.TgZ(1, "h5", 11),
            t._uU(2, "Teams"),
            t.qZA(),
            t.TgZ(3, "nz-list", 12),
            t.YNc(4, nt, 4, 4, "nz-list-item", 13),
            t.qZA(),
            t.BQk()),
          2 & i)
        ) {
          const s = t.oxw();
          t.xp6(1),
            t.Q6J("ngStyle", t.DdM(2, it)),
            t.xp6(3),
            t.Q6J("ngForOf", s.teams);
        }
      }
      function ot(i, l) {
        if (1 & i) {
          const s = t.EpF();
          t.TgZ(0, "nz-list-item", 14),
            t.NdJ("click", function () {
              const c = t.CHM(s).$implicit,
                m = t.oxw(2);
              return t.KtG(m.selectTeam(c.team_id, !0));
            }),
            t.TgZ(1, "span", 15),
            t._uU(2),
            t.qZA(),
            t._UZ(3, "label", 16),
            t.qZA();
        }
        if (2 & i) {
          const s = l.$implicit,
            e = t.oxw(2);
          t.ekj("selected", e.selectedTeamId === s.team_id),
            t.xp6(2),
            t.Oqu(s.team_name),
            t.xp6(1),
            t.Q6J("nzValue", s.team_id);
        }
      }
      const at = function () {
        return { margin: "16px 0" };
      };
      function rt(i, l) {
        if (
          (1 & i &&
            (t.ynx(0),
            t.TgZ(1, "h5", 11),
            t._uU(2, "Invitations"),
            t.qZA(),
            t.TgZ(3, "nz-list", 12),
            t.YNc(4, ot, 4, 4, "nz-list-item", 13),
            t.qZA(),
            t.BQk()),
          2 & i)
        ) {
          const s = t.oxw();
          t.xp6(1),
            t.Q6J("ngStyle", t.DdM(2, at)),
            t.xp6(3),
            t.Q6J("ngForOf", s.invites);
        }
      }
      const ct = [
        { path: "", component: o },
        {
          path: "teams",
          component: (() => {
            var i;
            class l {
              constructor(e, n, c, m) {
                (this.app = e),
                  (this.auth = n),
                  (this.teamsApi = c),
                  (this.router = m),
                  (this.teams = []),
                  (this.invites = []),
                  (this.selectedTeamId = void 0),
                  (this.loading = !1),
                  (this.switching = !1),
                  (this.isInvitation = !1),
                  this.app.setTitle("Teams & Invitations");
              }
              ngOnInit() {
                this.getData();
              }
              updateDefaultSelection() {
                if (this.teams.length) {
                  const e = this.teams.find((n) => n.active);
                  this.selectedTeamId = e ? e.id : this.teams[0].id;
                } else
                  this.invites.length &&
                    (this.selectedTeamId = this.invites[0].team_id);
              }
              getData() {
                var e = this;
                return (0, _.Z)(function* () {
                  (e.loading = !0),
                    yield e.getTeams(),
                    yield e.getInvites(),
                    e.updateDefaultSelection(),
                    (e.loading = !1);
                })();
              }
              getTeams() {
                var e = this;
                return (0, _.Z)(function* () {
                  try {
                    const n = yield e.teamsApi.get();
                    n.done &&
                      (e.teams = n.body.filter((c) => !c.pending_invitation));
                  } catch (n) {
                    (0, f.tu)(n);
                  }
                })();
              }
              getInvites() {
                var e = this;
                return (0, _.Z)(function* () {
                  try {
                    const n = yield e.teamsApi.getInvites();
                    n.done && (e.invites = n.body);
                  } catch (n) {
                    (0, f.tu)(n);
                  }
                })();
              }
              selectTeam(e, n) {
                e && ((this.selectedTeamId = e), (this.isInvitation = n));
              }
              continueWithSelection() {
                var e = this;
                return (0, _.Z)(function* () {
                  if (e.selectedTeamId)
                    try {
                      if (
                        ((e.switching = !0),
                        e.isInvitation && !(yield e.acceptInvitation()))
                      )
                        return (
                          (e.switching = !1),
                          void e.app.notify(
                            "Request failed!",
                            "Invitation accept failed. Please try again.",
                            !1
                          )
                        );
                      (yield e.teamsApi.activate(e.selectedTeamId)).done &&
                        (yield e.handleSelectionDone()),
                        (e.switching = !1);
                    } catch {
                      e.switching = !1;
                    }
                })();
              }
              handleSelectionDone() {
                var e = this;
                return (0, _.Z)(function* () {
                  yield e.auth.authorize(),
                    yield e.router.navigate(["/worklenz"]);
                })();
              }
              acceptInvitation() {
                var e = this;
                return (0, _.Z)(function* () {
                  const n = e.invites.find(
                    (c) => c.team_id === e.selectedTeamId
                  );
                  return (
                    !!n &&
                    (yield e.teamsApi.accept({
                      team_member_id: n.team_member_id,
                    })).done
                  );
                })();
              }
            }
            return (
              ((i = l).ɵfac = function (e) {
                return new (e || i)(
                  t.Y36(w.z),
                  t.Y36(M.e),
                  t.Y36(u.S),
                  t.Y36(T.F0)
                );
              }),
              (i.ɵcmp = t.Xpm({
                type: i,
                selectors: [["worklenz-teams-list"]],
                decls: 14,
                vars: 9,
                consts: [
                  [1, "setup-wrapper", "m-auto", "px-3"],
                  [1, "row"],
                  [1, "py-5"],
                  [1, "text-center"],
                  [
                    "alt",
                    "Worklenz",
                    "height",
                    "50",
                    "ngSrc",
                    "/assets/images/logo.png",
                    "width",
                    "235",
                  ],
                  [1, "pt-5", "col-md-3", "mx-auto", "bg-white"],
                  [3, "nzActive", "nzLoading"],
                  [1, "w-100", 3, "ngModel", "name", "ngModelChange"],
                  [4, "ngIf"],
                  [
                    "nz-button",
                    "",
                    "nzBlock",
                    "",
                    3,
                    "nzLoading",
                    "nzType",
                    "nzSize",
                    "click",
                  ],
                  ["nz-icon", "", "nzType", "check", "nzTheme", "outline"],
                  ["nz-typography", "", 3, "ngStyle"],
                  ["nzBordered", ""],
                  [3, "selected", "click", 4, "ngFor", "ngForOf"],
                  [3, "click"],
                  ["nz-typography", ""],
                  ["nz-radio", "", 3, "nzValue"],
                ],
                template: function (e, n) {
                  1 & e &&
                    (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3),
                    t._UZ(4, "img", 4),
                    t.qZA(),
                    t.TgZ(5, "div", 5)(6, "nz-skeleton", 6)(
                      7,
                      "nz-radio-group",
                      7
                    ),
                    t.NdJ("ngModelChange", function (m) {
                      return (n.selectedTeamId = m);
                    }),
                    t.YNc(8, st, 5, 3, "ng-container", 8),
                    t.YNc(9, rt, 5, 3, "ng-container", 8),
                    t.qZA(),
                    t._UZ(10, "nz-divider"),
                    t.TgZ(11, "button", 9),
                    t.NdJ("click", function () {
                      return n.continueWithSelection();
                    }),
                    t._UZ(12, "span", 10),
                    t._uU(13, " Continue with selection "),
                    t.qZA()()()()()()),
                    2 & e &&
                      (t.xp6(6),
                      t.Q6J("nzActive", !0)("nzLoading", n.loading),
                      t.xp6(1),
                      t.Q6J("ngModel", n.selectedTeamId)("name", "team"),
                      t.xp6(1),
                      t.Q6J("ngIf", n.teams.length),
                      t.xp6(1),
                      t.Q6J("ngIf", n.invites.length),
                      t.xp6(2),
                      t.Q6J("nzLoading", n.switching)("nzType", "default")(
                        "nzSize",
                        "large"
                      ));
                },
                dependencies: [
                  a.sg,
                  a.O5,
                  a.PC,
                  p.JJ,
                  p.On,
                  v.ix,
                  O.w,
                  R.dQ,
                  D.ng,
                  b.Ls,
                  I.ZU,
                  V.g,
                  S.n_,
                  S.AA,
                  a.Zd,
                  $.Of,
                  $.Dg,
                ],
                styles: [
                  "nz-list-item[_ngcontent-%COMP%]{cursor:pointer}nz-list-item[_ngcontent-%COMP%]:hover{background:#f8f7f9}nz-list-item.selected[_ngcontent-%COMP%]{background:rgba(24,144,255,.0784313725)!important}nz-radio-group[_ngcontent-%COMP%]{max-height:calc(100vh - 270px);overflow:auto}",
                ],
              })),
              l
            );
          })(),
        },
      ];
      let lt = (() => {
        var i;
        class l {}
        return (
          ((i = l).ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵmod = t.oAB({ type: i })),
          (i.ɵinj = t.cJS({ imports: [T.Bz.forChild(ct), T.Bz] })),
          l
        );
      })();
      var J = r(3599),
        W = r(20824),
        ut = r(9691),
        dt = r(78645),
        pt = r(92438),
        mt = r(47394),
        ht = r(63019),
        _t = r(32181),
        F = r(59773),
        gt = r(27921),
        B = r(99087),
        H = r(27754),
        zt = r(97582),
        K = r(8324),
        q = r(48128),
        X = r(49388);
      const ft = ["processDotTemplate"],
        vt = ["itemContainer"];
      function Tt(i, l) {
        1 & i && t._UZ(0, "div", 10);
      }
      function Ct(i, l) {
        if (
          (1 & i && (t.TgZ(0, "div", 13), t._UZ(1, "nz-progress", 14), t.qZA()),
          2 & i)
        ) {
          const s = t.oxw(2);
          t.xp6(1),
            t.Q6J("nzPercent", s.nzPercentage)(
              "nzWidth",
              "small" === s.nzSize ? 32 : 40
            )("nzFormat", s.nullProcessFormat)("nzStrokeWidth", 4);
        }
      }
      function xt(i, l) {
        1 & i && (t.TgZ(0, "span", 15), t._UZ(1, "span", 16), t.qZA());
      }
      function yt(i, l) {
        1 & i && (t.TgZ(0, "span", 15), t._UZ(1, "span", 17), t.qZA());
      }
      function bt(i, l) {
        if ((1 & i && (t.TgZ(0, "span", 15), t._uU(1), t.qZA()), 2 & i)) {
          const s = t.oxw(2);
          t.xp6(1), t.hij(" ", s.index + 1, " ");
        }
      }
      function St(i, l) {
        if ((1 & i && (t.ynx(0), t._UZ(1, "span", 18), t.BQk()), 2 & i)) {
          const s = l.$implicit,
            e = t.oxw(3);
          t.xp6(1),
            t.Q6J("nzType", !e.oldAPIIcon && s)("ngClass", e.oldAPIIcon && s);
        }
      }
      function kt(i, l) {
        if (
          (1 & i &&
            (t.TgZ(0, "span", 15),
            t.YNc(1, St, 2, 2, "ng-container", 7),
            t.qZA()),
          2 & i)
        ) {
          const s = t.oxw(2);
          t.xp6(1), t.Q6J("nzStringTemplateOutlet", s.nzIcon);
        }
      }
      function At(i, l) {
        if (
          (1 & i &&
            (t.YNc(0, Ct, 2, 4, "div", 11),
            t.YNc(1, xt, 2, 0, "span", 12),
            t.YNc(2, yt, 2, 0, "span", 12),
            t.YNc(3, bt, 2, 1, "span", 12),
            t.YNc(4, kt, 2, 1, "span", 12)),
          2 & i)
        ) {
          const s = t.oxw();
          t.Q6J("ngIf", s.showProgress),
            t.xp6(1),
            t.Q6J("ngIf", "finish" === s.nzStatus && !s.nzIcon),
            t.xp6(1),
            t.Q6J("ngIf", "error" === s.nzStatus),
            t.xp6(1),
            t.Q6J(
              "ngIf",
              ("process" === s.nzStatus || "wait" === s.nzStatus) && !s.nzIcon
            ),
            t.xp6(1),
            t.Q6J("ngIf", s.nzIcon);
        }
      }
      function Dt(i, l) {
        1 & i && t._UZ(0, "span", 21);
      }
      function It(i, l) {}
      const Zt = function (i, l, s) {
        return { $implicit: i, status: l, index: s };
      };
      function wt(i, l) {
        if (
          (1 & i &&
            (t.TgZ(0, "span", 15),
            t.YNc(1, Dt, 1, 0, "ng-template", null, 19, t.W1O),
            t.YNc(3, It, 0, 0, "ng-template", 20),
            t.qZA()),
          2 & i)
        ) {
          const s = t.MAs(2),
            e = t.oxw();
          t.xp6(3),
            t.Q6J("ngTemplateOutlet", e.customProcessTemplate || s)(
              "ngTemplateOutletContext",
              t.kEZ(2, Zt, s, e.nzStatus, e.index)
            );
        }
      }
      function Mt(i, l) {
        if ((1 & i && (t.ynx(0), t._uU(1), t.BQk()), 2 & i)) {
          const s = t.oxw();
          t.xp6(1), t.Oqu(s.nzTitle);
        }
      }
      function Pt(i, l) {
        if ((1 & i && (t.ynx(0), t._uU(1), t.BQk()), 2 & i)) {
          const s = t.oxw(2);
          t.xp6(1), t.Oqu(s.nzSubtitle);
        }
      }
      function Nt(i, l) {
        if (
          (1 & i &&
            (t.TgZ(0, "div", 22),
            t.YNc(1, Pt, 2, 1, "ng-container", 7),
            t.qZA()),
          2 & i)
        ) {
          const s = t.oxw();
          t.xp6(1), t.Q6J("nzStringTemplateOutlet", s.nzSubtitle);
        }
      }
      function Ot(i, l) {
        if ((1 & i && (t.ynx(0), t._uU(1), t.BQk()), 2 & i)) {
          const s = t.oxw();
          t.xp6(1), t.Oqu(s.nzDescription);
        }
      }
      const Rt = ["*"];
      let tt = (() => {
          var i;
          class l {
            get nzStatus() {
              return this._status;
            }
            set nzStatus(e) {
              (this._status = e), (this.isCustomStatus = !0);
            }
            get nzIcon() {
              return this._icon;
            }
            set nzIcon(e) {
              e instanceof t.Rgc ||
                (this.oldAPIIcon =
                  "string" == typeof e && e.indexOf("anticon") > -1),
                (this._icon = e);
            }
            get showProgress() {
              return (
                null !== this.nzPercentage &&
                !this.nzIcon &&
                "process" === this.nzStatus &&
                this.nzPercentage >= 0 &&
                this.nzPercentage <= 100
              );
            }
            get currentIndex() {
              return this._currentIndex;
            }
            set currentIndex(e) {
              (this._currentIndex = e),
                this.isCustomStatus ||
                  (this._status =
                    e > this.index
                      ? "finish"
                      : e === this.index
                      ? this.outStatus || ""
                      : "wait");
            }
            constructor(e, n, c) {
              (this.cdr = e),
                (this.ngZone = n),
                (this.destroy$ = c),
                (this.nzDisabled = !1),
                (this.nzPercentage = null),
                (this.nzSize = "default"),
                (this.isCustomStatus = !1),
                (this._status = "wait"),
                (this.oldAPIIcon = !0),
                (this.direction = "horizontal"),
                (this.index = 0),
                (this.last = !1),
                (this.outStatus = "process"),
                (this.showProcessDot = !1),
                (this.clickable = !1),
                (this.clickOutsideAngular$ = new dt.x()),
                (this.nullProcessFormat = () => null),
                (this._currentIndex = 0);
            }
            ngOnInit() {
              this.ngZone.runOutsideAngular(() =>
                (0, pt.R)(this.itemContainer.nativeElement, "click")
                  .pipe(
                    (0, _t.h)(
                      () =>
                        this.clickable &&
                        this.currentIndex !== this.index &&
                        !this.nzDisabled
                    ),
                    (0, F.R)(this.destroy$)
                  )
                  .subscribe(() => {
                    this.clickOutsideAngular$.next(this.index);
                  })
              );
            }
            enable() {
              (this.nzDisabled = !1), this.cdr.markForCheck();
            }
            disable() {
              (this.nzDisabled = !0), this.cdr.markForCheck();
            }
            markForCheck() {
              this.cdr.markForCheck();
            }
          }
          return (
            ((i = l).ɵfac = function (e) {
              return new (e || i)(t.Y36(t.sBO), t.Y36(t.R0b), t.Y36(B.kn));
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [["nz-step"]],
              viewQuery: function (e, n) {
                if ((1 & e && (t.Gf(ft, 5), t.Gf(vt, 7)), 2 & e)) {
                  let c;
                  t.iGM((c = t.CRH())) && (n.processDotTemplate = c.first),
                    t.iGM((c = t.CRH())) && (n.itemContainer = c.first);
                }
              },
              hostAttrs: [1, "ant-steps-item"],
              hostVars: 16,
              hostBindings: function (e, n) {
                2 & e &&
                  t.ekj("ant-steps-item-wait", "wait" === n.nzStatus)(
                    "ant-steps-item-process",
                    "process" === n.nzStatus
                  )("ant-steps-item-finish", "finish" === n.nzStatus)(
                    "ant-steps-item-error",
                    "error" === n.nzStatus
                  )("ant-steps-item-active", n.currentIndex === n.index)(
                    "ant-steps-item-disabled",
                    n.nzDisabled
                  )("ant-steps-item-custom", !!n.nzIcon)(
                    "ant-steps-next-error",
                    "error" === n.outStatus && n.currentIndex === n.index + 1
                  );
              },
              inputs: {
                nzTitle: "nzTitle",
                nzSubtitle: "nzSubtitle",
                nzDescription: "nzDescription",
                nzDisabled: "nzDisabled",
                nzPercentage: "nzPercentage",
                nzSize: "nzSize",
                nzStatus: "nzStatus",
                nzIcon: "nzIcon",
              },
              exportAs: ["nzStep"],
              features: [t._Bn([B.kn])],
              decls: 12,
              vars: 8,
              consts: [
                [1, "ant-steps-item-container", 3, "tabindex"],
                ["itemContainer", ""],
                ["class", "ant-steps-item-tail", 4, "ngIf"],
                [1, "ant-steps-item-icon"],
                [3, "ngIf"],
                [1, "ant-steps-item-content"],
                [1, "ant-steps-item-title"],
                [4, "nzStringTemplateOutlet"],
                ["class", "ant-steps-item-subtitle", 4, "ngIf"],
                [1, "ant-steps-item-description"],
                [1, "ant-steps-item-tail"],
                ["class", "ant-steps-progress-icon", 4, "ngIf"],
                ["class", "ant-steps-icon", 4, "ngIf"],
                [1, "ant-steps-progress-icon"],
                [
                  "nzType",
                  "circle",
                  3,
                  "nzPercent",
                  "nzWidth",
                  "nzFormat",
                  "nzStrokeWidth",
                ],
                [1, "ant-steps-icon"],
                ["nz-icon", "", "nzType", "check"],
                ["nz-icon", "", "nzType", "close"],
                ["nz-icon", "", 3, "nzType", "ngClass"],
                ["processDotTemplate", ""],
                [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
                [1, "ant-steps-icon-dot"],
                [1, "ant-steps-item-subtitle"],
              ],
              template: function (e, n) {
                1 & e &&
                  (t.TgZ(0, "div", 0, 1),
                  t.YNc(2, Tt, 1, 0, "div", 2),
                  t.TgZ(3, "div", 3),
                  t.YNc(4, At, 5, 5, "ng-template", 4),
                  t.YNc(5, wt, 4, 6, "ng-template", 4),
                  t.qZA(),
                  t.TgZ(6, "div", 5)(7, "div", 6),
                  t.YNc(8, Mt, 2, 1, "ng-container", 7),
                  t.YNc(9, Nt, 2, 1, "div", 8),
                  t.qZA(),
                  t.TgZ(10, "div", 9),
                  t.YNc(11, Ot, 2, 1, "ng-container", 7),
                  t.qZA()()()),
                  2 & e &&
                    (t.Q6J("tabindex", n.clickable && !n.nzDisabled ? 0 : null),
                    t.uIk(
                      "role",
                      n.clickable && !n.nzDisabled ? "button" : null
                    ),
                    t.xp6(2),
                    t.Q6J("ngIf", !0 !== n.last),
                    t.xp6(2),
                    t.Q6J("ngIf", !n.showProcessDot),
                    t.xp6(1),
                    t.Q6J("ngIf", n.showProcessDot),
                    t.xp6(3),
                    t.Q6J("nzStringTemplateOutlet", n.nzTitle),
                    t.xp6(1),
                    t.Q6J("ngIf", n.nzSubtitle),
                    t.xp6(2),
                    t.Q6J("nzStringTemplateOutlet", n.nzDescription));
              },
              dependencies: [a.mk, a.O5, a.tP, b.Ls, K.f, q.M],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, zt.gn)([(0, H.yF)()], l.prototype, "nzDisabled", void 0),
            l
          );
        })(),
        Jt = (() => {
          var i;
          class l {
            set nzProgressDot(e) {
              e instanceof t.Rgc
                ? ((this.showProcessDot = !0),
                  (this.customProcessDotTemplate = e))
                : (this.showProcessDot = (0, H.sw)(e)),
                this.updateChildrenSteps();
            }
            constructor(e, n, c, m) {
              (this.ngZone = e),
                (this.cdr = n),
                (this.directionality = c),
                (this.destroy$ = m),
                (this.nzCurrent = 0),
                (this.nzDirection = "horizontal"),
                (this.nzLabelPlacement = "horizontal"),
                (this.nzType = "default"),
                (this.nzSize = "default"),
                (this.nzStartIndex = 0),
                (this.nzStatus = "process"),
                (this.nzIndexChange = new t.vpe()),
                (this.indexChangeSubscription = mt.w0.EMPTY),
                (this.showProcessDot = !1),
                (this.showProgress = !1),
                (this.dir = "ltr");
            }
            ngOnChanges(e) {
              (e.nzStartIndex ||
                e.nzDirection ||
                e.nzStatus ||
                e.nzCurrent ||
                e.nzSize) &&
                this.updateChildrenSteps();
            }
            ngOnInit() {
              this.directionality.change
                ?.pipe((0, F.R)(this.destroy$))
                .subscribe((e) => {
                  (this.dir = e), this.cdr.detectChanges();
                }),
                (this.dir = this.directionality.value),
                this.updateChildrenSteps();
            }
            ngAfterContentInit() {
              this.steps &&
                this.steps.changes
                  .pipe((0, gt.O)(null), (0, F.R)(this.destroy$))
                  .subscribe(() => {
                    this.updateHostProgressClass(), this.updateChildrenSteps();
                  });
            }
            updateHostProgressClass() {
              this.steps &&
                !this.showProcessDot &&
                (this.showProgress = !!this.steps
                  .toArray()
                  .find((e) => null !== e.nzPercentage));
            }
            updateChildrenSteps() {
              if (this.steps) {
                const e = this.steps.length;
                this.steps.toArray().forEach((n, c) => {
                  Promise.resolve().then(() => {
                    (n.nzSize = this.nzSize),
                      (n.outStatus = this.nzStatus),
                      (n.showProcessDot = this.showProcessDot),
                      this.customProcessDotTemplate &&
                        (n.customProcessTemplate =
                          this.customProcessDotTemplate),
                      (n.clickable = this.nzIndexChange.observers.length > 0),
                      (n.direction = this.nzDirection),
                      (n.index = c + this.nzStartIndex),
                      (n.currentIndex = this.nzCurrent),
                      (n.last = e === c + 1),
                      n.markForCheck();
                  });
                }),
                  this.indexChangeSubscription.unsubscribe(),
                  (this.indexChangeSubscription = (0, ht.T)(
                    ...this.steps.map((n) => n.clickOutsideAngular$)
                  )
                    .pipe((0, F.R)(this.destroy$))
                    .subscribe((n) => {
                      this.nzIndexChange.observers.length &&
                        this.ngZone.run(() => this.nzIndexChange.emit(n));
                    }));
              }
            }
          }
          return (
            ((i = l).ɵfac = function (e) {
              return new (e || i)(
                t.Y36(t.R0b),
                t.Y36(t.sBO),
                t.Y36(X.Is, 8),
                t.Y36(B.kn)
              );
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [["nz-steps"]],
              contentQueries: function (e, n, c) {
                if ((1 & e && t.Suo(c, tt, 4), 2 & e)) {
                  let m;
                  t.iGM((m = t.CRH())) && (n.steps = m);
                }
              },
              hostAttrs: [1, "ant-steps"],
              hostVars: 18,
              hostBindings: function (e, n) {
                2 & e &&
                  t.ekj("ant-steps-horizontal", "horizontal" === n.nzDirection)(
                    "ant-steps-vertical",
                    "vertical" === n.nzDirection
                  )(
                    "ant-steps-label-horizontal",
                    "horizontal" === n.nzDirection
                  )(
                    "ant-steps-label-vertical",
                    (n.showProcessDot || "vertical" === n.nzLabelPlacement) &&
                      "horizontal" === n.nzDirection
                  )("ant-steps-dot", n.showProcessDot)(
                    "ant-steps-small",
                    "small" === n.nzSize
                  )("ant-steps-navigation", "navigation" === n.nzType)(
                    "ant-steps-rtl",
                    "rtl" === n.dir
                  )("ant-steps-with-progress", n.showProgress);
              },
              inputs: {
                nzCurrent: "nzCurrent",
                nzDirection: "nzDirection",
                nzLabelPlacement: "nzLabelPlacement",
                nzType: "nzType",
                nzSize: "nzSize",
                nzStartIndex: "nzStartIndex",
                nzStatus: "nzStatus",
                nzProgressDot: "nzProgressDot",
              },
              outputs: { nzIndexChange: "nzIndexChange" },
              exportAs: ["nzSteps"],
              features: [t._Bn([B.kn]), t.TTD],
              ngContentSelectors: Rt,
              decls: 1,
              vars: 0,
              template: function (e, n) {
                1 & e && (t.F$t(), t.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            l
          );
        })(),
        Ft = (() => {
          var i;
          class l {}
          return (
            ((i = l).ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = t.oAB({ type: i })),
            (i.ɵinj = t.cJS({ imports: [X.vT, a.ez, b.PV, K.T, q.W] })),
            l
          );
        })();
      var j = r(92574),
        et = r(10095);
      let Bt = (() => {
        var i;
        class l {}
        return (
          ((i = l).ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵmod = t.oAB({ type: i })),
          (i.ɵinj = t.cJS({
            imports: [
              a.ez,
              p.u5,
              lt,
              p.UX,
              W.o7,
              J.U5,
              v.sL,
              ut.LV,
              Ft,
              D.H0,
              j.zf,
              b.PV,
              I.ZJ,
              V.S,
              S.Ph,
              $.aF,
              y.p,
            ],
          })),
          l
        );
      })();
      t.B6R(
        o,
        [
          a.sg,
          a.O5,
          a.RF,
          a.n9,
          p._Y,
          p.Fj,
          p.JJ,
          p.JL,
          p.sg,
          p.u,
          p.CE,
          W.Zp,
          et.t3,
          et.SK,
          J.Lr,
          J.Nx,
          J.Fd,
          v.ix,
          O.w,
          R.dQ,
          Jt,
          tt,
          D.ng,
          j.NU,
          j.$1,
          b.Ls,
          I.ZU,
          S.n_,
          S.AA,
          S.nk,
          S.KC,
          y.p,
        ],
        []
      );
    },
    9172: (G, k, r) => {
      r.d(k, { g: () => T });
      var a = r(65879);
      let T = (() => {
        var _;
        class p {
          transform(C, g) {
            return g
              ? C.filter((x) => x.name?.toLowerCase().includes(g.toLowerCase()))
              : C;
          }
        }
        return (
          ((_ = p).ɵfac = function (C) {
            return new (C || _)();
          }),
          (_.ɵpipe = a.Yjl({
            name: "searchByName",
            type: _,
            pure: !0,
            standalone: !0,
          })),
          p
        );
      })();
    },
    57907: (G, k, r) => {
      r.d(k, { Bq: () => N, Dg: () => E, Of: () => Y, aF: () => L });
      var a = r(65879),
        T = r(97582),
        _ = r(60095),
        p = r(97328),
        f = r(78645),
        C = r(92438),
        g = r(59773),
        x = r(27754),
        y = r(49388),
        t = r(4300),
        w = r(50883),
        M = r(96814);
      const P = ["*"],
        Q = ["inputElement"],
        U = ["nz-radio", ""];
      let N = (() => {
          var d;
          class h {}
          return (
            ((d = h).ɵfac = function (o) {
              return new (o || d)();
            }),
            (d.ɵdir = a.lG2({
              type: d,
              selectors: [["", "nz-radio-button", ""]],
            })),
            h
          );
        })(),
        A = (() => {
          var d;
          class h {
            constructor() {
              (this.selected$ = new p.t(1)),
                (this.touched$ = new f.x()),
                (this.disabled$ = new p.t(1)),
                (this.name$ = new p.t(1));
            }
            touch() {
              this.touched$.next();
            }
            select(o) {
              this.selected$.next(o);
            }
            setDisabled(o) {
              this.disabled$.next(o);
            }
            setName(o) {
              this.name$.next(o);
            }
          }
          return (
            ((d = h).ɵfac = function (o) {
              return new (o || d)();
            }),
            (d.ɵprov = a.Yz7({ token: d, factory: d.ɵfac })),
            h
          );
        })(),
        E = (() => {
          var d;
          class h {
            constructor(o, u, v) {
              (this.cdr = o),
                (this.nzRadioService = u),
                (this.directionality = v),
                (this.value = null),
                (this.destroy$ = new f.x()),
                (this.isNzDisableFirstChange = !0),
                (this.onChange = () => {}),
                (this.onTouched = () => {}),
                (this.nzDisabled = !1),
                (this.nzButtonStyle = "outline"),
                (this.nzSize = "default"),
                (this.nzName = null),
                (this.dir = "ltr");
            }
            ngOnInit() {
              this.nzRadioService.selected$
                .pipe((0, g.R)(this.destroy$))
                .subscribe((o) => {
                  this.value !== o &&
                    ((this.value = o), this.onChange(this.value));
                }),
                this.nzRadioService.touched$
                  .pipe((0, g.R)(this.destroy$))
                  .subscribe(() => {
                    Promise.resolve().then(() => this.onTouched());
                  }),
                this.directionality.change
                  ?.pipe((0, g.R)(this.destroy$))
                  .subscribe((o) => {
                    (this.dir = o), this.cdr.detectChanges();
                  }),
                (this.dir = this.directionality.value);
            }
            ngOnChanges(o) {
              const { nzDisabled: u, nzName: v } = o;
              u && this.nzRadioService.setDisabled(this.nzDisabled),
                v && this.nzRadioService.setName(this.nzName);
            }
            ngOnDestroy() {
              this.destroy$.next(!0), this.destroy$.complete();
            }
            writeValue(o) {
              (this.value = o),
                this.nzRadioService.select(o),
                this.cdr.markForCheck();
            }
            registerOnChange(o) {
              this.onChange = o;
            }
            registerOnTouched(o) {
              this.onTouched = o;
            }
            setDisabledState(o) {
              (this.nzDisabled =
                (this.isNzDisableFirstChange && this.nzDisabled) || o),
                (this.isNzDisableFirstChange = !1),
                this.nzRadioService.setDisabled(this.nzDisabled),
                this.cdr.markForCheck();
            }
          }
          return (
            ((d = h).ɵfac = function (o) {
              return new (o || d)(a.Y36(a.sBO), a.Y36(A), a.Y36(y.Is, 8));
            }),
            (d.ɵcmp = a.Xpm({
              type: d,
              selectors: [["nz-radio-group"]],
              hostAttrs: [1, "ant-radio-group"],
              hostVars: 8,
              hostBindings: function (o, u) {
                2 & o &&
                  a.ekj("ant-radio-group-large", "large" === u.nzSize)(
                    "ant-radio-group-small",
                    "small" === u.nzSize
                  )("ant-radio-group-solid", "solid" === u.nzButtonStyle)(
                    "ant-radio-group-rtl",
                    "rtl" === u.dir
                  );
              },
              inputs: {
                nzDisabled: "nzDisabled",
                nzButtonStyle: "nzButtonStyle",
                nzSize: "nzSize",
                nzName: "nzName",
              },
              exportAs: ["nzRadioGroup"],
              features: [
                a._Bn([
                  A,
                  {
                    provide: _.JU,
                    useExisting: (0, a.Gpc)(() => d),
                    multi: !0,
                  },
                ]),
                a.TTD,
              ],
              ngContentSelectors: P,
              decls: 1,
              vars: 0,
              template: function (o, u) {
                1 & o && (a.F$t(), a.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, T.gn)([(0, x.yF)()], h.prototype, "nzDisabled", void 0),
            h
          );
        })(),
        Y = (() => {
          var d;
          class h {
            focus() {
              this.focusMonitor.focusVia(this.inputElement, "keyboard");
            }
            blur() {
              this.inputElement.nativeElement.blur();
            }
            constructor(o, u, v, O, R, D, b, I) {
              (this.ngZone = o),
                (this.elementRef = u),
                (this.cdr = v),
                (this.focusMonitor = O),
                (this.directionality = R),
                (this.nzRadioService = D),
                (this.nzRadioButtonDirective = b),
                (this.nzFormStatusService = I),
                (this.isNgModel = !1),
                (this.destroy$ = new f.x()),
                (this.isNzDisableFirstChange = !0),
                (this.isChecked = !1),
                (this.name = null),
                (this.isRadioButton = !!this.nzRadioButtonDirective),
                (this.onChange = () => {}),
                (this.onTouched = () => {}),
                (this.nzValue = null),
                (this.nzDisabled = !1),
                (this.nzAutoFocus = !1),
                (this.dir = "ltr");
            }
            setDisabledState(o) {
              (this.nzDisabled =
                (this.isNzDisableFirstChange && this.nzDisabled) || o),
                (this.isNzDisableFirstChange = !1),
                this.cdr.markForCheck();
            }
            writeValue(o) {
              (this.isChecked = o), this.cdr.markForCheck();
            }
            registerOnChange(o) {
              (this.isNgModel = !0), (this.onChange = o);
            }
            registerOnTouched(o) {
              this.onTouched = o;
            }
            ngOnInit() {
              this.nzRadioService &&
                (this.nzRadioService.name$
                  .pipe((0, g.R)(this.destroy$))
                  .subscribe((o) => {
                    (this.name = o), this.cdr.markForCheck();
                  }),
                this.nzRadioService.disabled$
                  .pipe((0, g.R)(this.destroy$))
                  .subscribe((o) => {
                    (this.nzDisabled =
                      (this.isNzDisableFirstChange && this.nzDisabled) || o),
                      (this.isNzDisableFirstChange = !1),
                      this.cdr.markForCheck();
                  }),
                this.nzRadioService.selected$
                  .pipe((0, g.R)(this.destroy$))
                  .subscribe((o) => {
                    const u = this.isChecked;
                    (this.isChecked = this.nzValue === o),
                      this.isNgModel &&
                        u !== this.isChecked &&
                        !1 === this.isChecked &&
                        this.onChange(!1),
                      this.cdr.markForCheck();
                  })),
                this.focusMonitor
                  .monitor(this.elementRef, !0)
                  .pipe((0, g.R)(this.destroy$))
                  .subscribe((o) => {
                    o ||
                      (Promise.resolve().then(() => this.onTouched()),
                      this.nzRadioService && this.nzRadioService.touch());
                  }),
                this.directionality.change
                  .pipe((0, g.R)(this.destroy$))
                  .subscribe((o) => {
                    (this.dir = o), this.cdr.detectChanges();
                  }),
                (this.dir = this.directionality.value),
                this.setupClickListener();
            }
            ngAfterViewInit() {
              this.nzAutoFocus && this.focus();
            }
            ngOnDestroy() {
              this.destroy$.next(),
                this.destroy$.complete(),
                this.focusMonitor.stopMonitoring(this.elementRef);
            }
            setupClickListener() {
              this.ngZone.runOutsideAngular(() => {
                (0, C.R)(this.elementRef.nativeElement, "click")
                  .pipe((0, g.R)(this.destroy$))
                  .subscribe((o) => {
                    o.stopPropagation(),
                      o.preventDefault(),
                      !this.nzDisabled &&
                        !this.isChecked &&
                        this.ngZone.run(() => {
                          this.focus(),
                            this.nzRadioService?.select(this.nzValue),
                            this.isNgModel &&
                              ((this.isChecked = !0), this.onChange(!0)),
                            this.cdr.markForCheck();
                        });
                  });
              });
            }
          }
          return (
            ((d = h).ɵfac = function (o) {
              return new (o || d)(
                a.Y36(a.R0b),
                a.Y36(a.SBq),
                a.Y36(a.sBO),
                a.Y36(t.tE),
                a.Y36(y.Is, 8),
                a.Y36(A, 8),
                a.Y36(N, 8),
                a.Y36(w.kH, 8)
              );
            }),
            (d.ɵcmp = a.Xpm({
              type: d,
              selectors: [
                ["", "nz-radio", ""],
                ["", "nz-radio-button", ""],
              ],
              viewQuery: function (o, u) {
                if ((1 & o && a.Gf(Q, 7), 2 & o)) {
                  let v;
                  a.iGM((v = a.CRH())) && (u.inputElement = v.first);
                }
              },
              hostVars: 18,
              hostBindings: function (o, u) {
                2 & o &&
                  a.ekj(
                    "ant-radio-wrapper-in-form-item",
                    !!u.nzFormStatusService
                  )("ant-radio-wrapper", !u.isRadioButton)(
                    "ant-radio-button-wrapper",
                    u.isRadioButton
                  )(
                    "ant-radio-wrapper-checked",
                    u.isChecked && !u.isRadioButton
                  )(
                    "ant-radio-button-wrapper-checked",
                    u.isChecked && u.isRadioButton
                  )(
                    "ant-radio-wrapper-disabled",
                    u.nzDisabled && !u.isRadioButton
                  )(
                    "ant-radio-button-wrapper-disabled",
                    u.nzDisabled && u.isRadioButton
                  )(
                    "ant-radio-wrapper-rtl",
                    !u.isRadioButton && "rtl" === u.dir
                  )(
                    "ant-radio-button-wrapper-rtl",
                    u.isRadioButton && "rtl" === u.dir
                  );
              },
              inputs: {
                nzValue: "nzValue",
                nzDisabled: "nzDisabled",
                nzAutoFocus: "nzAutoFocus",
              },
              exportAs: ["nzRadio"],
              features: [
                a._Bn([
                  {
                    provide: _.JU,
                    useExisting: (0, a.Gpc)(() => d),
                    multi: !0,
                  },
                ]),
              ],
              attrs: U,
              ngContentSelectors: P,
              decls: 6,
              vars: 24,
              consts: [
                ["type", "radio", 3, "disabled", "checked"],
                ["inputElement", ""],
              ],
              template: function (o, u) {
                1 & o &&
                  (a.F$t(),
                  a.TgZ(0, "span"),
                  a._UZ(1, "input", 0, 1)(3, "span"),
                  a.qZA(),
                  a.TgZ(4, "span"),
                  a.Hsn(5),
                  a.qZA()),
                  2 & o &&
                    (a.ekj("ant-radio", !u.isRadioButton)(
                      "ant-radio-checked",
                      u.isChecked && !u.isRadioButton
                    )("ant-radio-disabled", u.nzDisabled && !u.isRadioButton)(
                      "ant-radio-button",
                      u.isRadioButton
                    )(
                      "ant-radio-button-checked",
                      u.isChecked && u.isRadioButton
                    )(
                      "ant-radio-button-disabled",
                      u.nzDisabled && u.isRadioButton
                    ),
                    a.xp6(1),
                    a.ekj("ant-radio-input", !u.isRadioButton)(
                      "ant-radio-button-input",
                      u.isRadioButton
                    ),
                    a.Q6J("disabled", u.nzDisabled)("checked", u.isChecked),
                    a.uIk("autofocus", u.nzAutoFocus ? "autofocus" : null)(
                      "name",
                      u.name
                    ),
                    a.xp6(2),
                    a.ekj("ant-radio-inner", !u.isRadioButton)(
                      "ant-radio-button-inner",
                      u.isRadioButton
                    ));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, T.gn)([(0, x.yF)()], h.prototype, "nzDisabled", void 0),
            (0, T.gn)([(0, x.yF)()], h.prototype, "nzAutoFocus", void 0),
            h
          );
        })(),
        L = (() => {
          var d;
          class h {}
          return (
            ((d = h).ɵfac = function (o) {
              return new (o || d)();
            }),
            (d.ɵmod = a.oAB({ type: d })),
            (d.ɵinj = a.cJS({ imports: [y.vT, M.ez, _.u5] })),
            h
          );
        })();
    },
  },
]);
