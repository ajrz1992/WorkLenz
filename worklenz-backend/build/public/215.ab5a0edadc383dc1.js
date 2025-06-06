"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [215],
  {
    62612: (Mt, nt, p) => {
      p.d(nt, { Ie: () => q, Wr: () => ot });
      var t = p(97582),
        _ = p(65879),
        i = p(60095),
        Z = p(78645),
        F = p(92438),
        y = p(59773),
        E = p(27754),
        w = p(4300),
        I = p(49388),
        L = p(50883),
        it = p(96814);
      const U = ["*"],
        V = ["inputElement"],
        Q = ["nz-checkbox", ""];
      let st = (() => {
          var z;
          class b {
            constructor() {
              (this.nzOnChange = new _.vpe()), (this.checkboxList = []);
            }
            addCheckbox(h) {
              this.checkboxList.push(h);
            }
            removeCheckbox(h) {
              this.checkboxList.splice(this.checkboxList.indexOf(h), 1);
            }
            onChange() {
              const h = this.checkboxList
                .filter((m) => m.nzChecked)
                .map((m) => m.nzValue);
              this.nzOnChange.emit(h);
            }
          }
          return (
            ((z = b).ɵfac = function (h) {
              return new (h || z)();
            }),
            (z.ɵcmp = _.Xpm({
              type: z,
              selectors: [["nz-checkbox-wrapper"]],
              hostAttrs: [1, "ant-checkbox-group"],
              outputs: { nzOnChange: "nzOnChange" },
              exportAs: ["nzCheckboxWrapper"],
              ngContentSelectors: U,
              decls: 1,
              vars: 0,
              template: function (h, m) {
                1 & h && (_.F$t(), _.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            b
          );
        })(),
        q = (() => {
          var z;
          class b {
            innerCheckedChange(h) {
              this.nzDisabled ||
                ((this.nzChecked = h),
                this.onChange(this.nzChecked),
                this.nzCheckedChange.emit(this.nzChecked),
                this.nzCheckboxWrapperComponent &&
                  this.nzCheckboxWrapperComponent.onChange());
            }
            writeValue(h) {
              (this.nzChecked = h), this.cdr.markForCheck();
            }
            registerOnChange(h) {
              this.onChange = h;
            }
            registerOnTouched(h) {
              this.onTouched = h;
            }
            setDisabledState(h) {
              (this.nzDisabled =
                (this.isNzDisableFirstChange && this.nzDisabled) || h),
                (this.isNzDisableFirstChange = !1),
                this.cdr.markForCheck();
            }
            focus() {
              this.focusMonitor.focusVia(this.inputElement, "keyboard");
            }
            blur() {
              this.inputElement.nativeElement.blur();
            }
            constructor(h, m, W, A, k, O, K) {
              (this.ngZone = h),
                (this.elementRef = m),
                (this.nzCheckboxWrapperComponent = W),
                (this.cdr = A),
                (this.focusMonitor = k),
                (this.directionality = O),
                (this.nzFormStatusService = K),
                (this.dir = "ltr"),
                (this.destroy$ = new Z.x()),
                (this.isNzDisableFirstChange = !0),
                (this.onChange = () => {}),
                (this.onTouched = () => {}),
                (this.nzCheckedChange = new _.vpe()),
                (this.nzValue = null),
                (this.nzAutoFocus = !1),
                (this.nzDisabled = !1),
                (this.nzIndeterminate = !1),
                (this.nzChecked = !1),
                (this.nzId = null);
            }
            ngOnInit() {
              this.focusMonitor
                .monitor(this.elementRef, !0)
                .pipe((0, y.R)(this.destroy$))
                .subscribe((h) => {
                  h || Promise.resolve().then(() => this.onTouched());
                }),
                this.nzCheckboxWrapperComponent &&
                  this.nzCheckboxWrapperComponent.addCheckbox(this),
                this.directionality.change
                  .pipe((0, y.R)(this.destroy$))
                  .subscribe((h) => {
                    (this.dir = h), this.cdr.detectChanges();
                  }),
                (this.dir = this.directionality.value),
                this.ngZone.runOutsideAngular(() => {
                  (0, F.R)(this.elementRef.nativeElement, "click")
                    .pipe((0, y.R)(this.destroy$))
                    .subscribe((h) => {
                      h.preventDefault(),
                        this.focus(),
                        !this.nzDisabled &&
                          this.ngZone.run(() => {
                            this.innerCheckedChange(!this.nzChecked),
                              this.cdr.markForCheck();
                          });
                    }),
                    (0, F.R)(this.inputElement.nativeElement, "click")
                      .pipe((0, y.R)(this.destroy$))
                      .subscribe((h) => h.stopPropagation());
                });
            }
            ngAfterViewInit() {
              this.nzAutoFocus && this.focus();
            }
            ngOnDestroy() {
              this.focusMonitor.stopMonitoring(this.elementRef),
                this.nzCheckboxWrapperComponent &&
                  this.nzCheckboxWrapperComponent.removeCheckbox(this),
                this.destroy$.next(),
                this.destroy$.complete();
            }
          }
          return (
            ((z = b).ɵfac = function (h) {
              return new (h || z)(
                _.Y36(_.R0b),
                _.Y36(_.SBq),
                _.Y36(st, 8),
                _.Y36(_.sBO),
                _.Y36(w.tE),
                _.Y36(I.Is, 8),
                _.Y36(L.kH, 8)
              );
            }),
            (z.ɵcmp = _.Xpm({
              type: z,
              selectors: [["", "nz-checkbox", ""]],
              viewQuery: function (h, m) {
                if ((1 & h && _.Gf(V, 7), 2 & h)) {
                  let W;
                  _.iGM((W = _.CRH())) && (m.inputElement = W.first);
                }
              },
              hostAttrs: [1, "ant-checkbox-wrapper"],
              hostVars: 6,
              hostBindings: function (h, m) {
                2 & h &&
                  _.ekj(
                    "ant-checkbox-wrapper-in-form-item",
                    !!m.nzFormStatusService
                  )("ant-checkbox-wrapper-checked", m.nzChecked)(
                    "ant-checkbox-rtl",
                    "rtl" === m.dir
                  );
              },
              inputs: {
                nzValue: "nzValue",
                nzAutoFocus: "nzAutoFocus",
                nzDisabled: "nzDisabled",
                nzIndeterminate: "nzIndeterminate",
                nzChecked: "nzChecked",
                nzId: "nzId",
              },
              outputs: { nzCheckedChange: "nzCheckedChange" },
              exportAs: ["nzCheckbox"],
              features: [
                _._Bn([
                  {
                    provide: i.JU,
                    useExisting: (0, _.Gpc)(() => z),
                    multi: !0,
                  },
                ]),
              ],
              attrs: Q,
              ngContentSelectors: U,
              decls: 6,
              vars: 11,
              consts: [
                [1, "ant-checkbox"],
                [
                  "type",
                  "checkbox",
                  1,
                  "ant-checkbox-input",
                  3,
                  "checked",
                  "ngModel",
                  "disabled",
                  "ngModelChange",
                ],
                ["inputElement", ""],
                [1, "ant-checkbox-inner"],
              ],
              template: function (h, m) {
                1 & h &&
                  (_.F$t(),
                  _.TgZ(0, "span", 0)(1, "input", 1, 2),
                  _.NdJ("ngModelChange", function (A) {
                    return m.innerCheckedChange(A);
                  }),
                  _.qZA(),
                  _._UZ(3, "span", 3),
                  _.qZA(),
                  _.TgZ(4, "span"),
                  _.Hsn(5),
                  _.qZA()),
                  2 & h &&
                    (_.ekj(
                      "ant-checkbox-checked",
                      m.nzChecked && !m.nzIndeterminate
                    )("ant-checkbox-disabled", m.nzDisabled)(
                      "ant-checkbox-indeterminate",
                      m.nzIndeterminate
                    ),
                    _.xp6(1),
                    _.Q6J("checked", m.nzChecked)("ngModel", m.nzChecked)(
                      "disabled",
                      m.nzDisabled
                    ),
                    _.uIk("autofocus", m.nzAutoFocus ? "autofocus" : null)(
                      "id",
                      m.nzId
                    ));
              },
              dependencies: [i.Wl, i.JJ, i.On],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, t.gn)([(0, E.yF)()], b.prototype, "nzAutoFocus", void 0),
            (0, t.gn)([(0, E.yF)()], b.prototype, "nzDisabled", void 0),
            (0, t.gn)([(0, E.yF)()], b.prototype, "nzIndeterminate", void 0),
            (0, t.gn)([(0, E.yF)()], b.prototype, "nzChecked", void 0),
            b
          );
        })(),
        ot = (() => {
          var z;
          class b {}
          return (
            ((z = b).ɵfac = function (h) {
              return new (h || z)();
            }),
            (z.ɵmod = _.oAB({ type: z })),
            (z.ɵinj = _.cJS({ imports: [I.vT, it.ez, i.u5, w.rt] })),
            b
          );
        })();
    },
    48128: (Mt, nt, p) => {
      p.d(nt, { M: () => zt, W: () => vt });
      var t = p(49388),
        _ = p(96814),
        i = p(65879),
        Z = p(8324),
        F = p(62595),
        y = p(97582),
        E = p(78645),
        w = p(59773),
        I = p(40874),
        L = p(27754);
      function it(l, f) {
        if ((1 & l && (i.ynx(0), i._UZ(1, "span", 8), i.BQk()), 2 & l)) {
          const d = i.oxw(3);
          i.xp6(1), i.Q6J("nzType", d.icon);
        }
      }
      function U(l, f) {
        if ((1 & l && (i.ynx(0), i._uU(1), i.BQk()), 2 & l)) {
          const d = f.$implicit,
            u = i.oxw(4);
          i.xp6(1), i.hij(" ", d(u.nzPercent), " ");
        }
      }
      const V = function (l) {
        return { $implicit: l };
      };
      function Q(l, f) {
        if ((1 & l && i.YNc(0, U, 2, 1, "ng-container", 9), 2 & l)) {
          const d = i.oxw(3);
          i.Q6J("nzStringTemplateOutlet", d.formatter)(
            "nzStringTemplateOutletContext",
            i.VKq(2, V, d.nzPercent)
          );
        }
      }
      function N(l, f) {
        if (
          (1 & l &&
            (i.TgZ(0, "span", 5),
            i.YNc(1, it, 2, 1, "ng-container", 6),
            i.YNc(2, Q, 1, 4, "ng-template", null, 7, i.W1O),
            i.qZA()),
          2 & l)
        ) {
          const d = i.MAs(3),
            u = i.oxw(2);
          i.xp6(1),
            i.Q6J(
              "ngIf",
              ("exception" === u.status || "success" === u.status) &&
                !u.nzFormat
            )("ngIfElse", d);
        }
      }
      function st(l, f) {
        if ((1 & l && i.YNc(0, N, 4, 2, "span", 4), 2 & l)) {
          const d = i.oxw();
          i.Q6J("ngIf", d.nzShowInfo);
        }
      }
      function q(l, f) {
        if ((1 & l && i._UZ(0, "div", 17), 2 & l)) {
          const d = i.oxw(4);
          i.Udp(
            "width",
            d.nzSuccessPercent,
            "%"
          )("border-radius", "round" === d.nzStrokeLinecap ? "100px" : "0")(
            "height",
            d.strokeWidth,
            "px"
          );
        }
      }
      function ct(l, f) {
        if (
          (1 & l &&
            (i.TgZ(0, "div", 13)(1, "div", 14),
            i._UZ(2, "div", 15),
            i.YNc(3, q, 1, 6, "div", 16),
            i.qZA()()),
          2 & l)
        ) {
          const d = i.oxw(3);
          i.xp6(2),
            i.Udp(
              "width",
              d.nzPercent,
              "%"
            )("border-radius", "round" === d.nzStrokeLinecap ? "100px" : "0")(
              "background",
              d.isGradient ? null : d.nzStrokeColor
            )("background-image", d.isGradient ? d.lineGradient : null)(
              "height",
              d.strokeWidth,
              "px"
            ),
            i.xp6(1),
            i.Q6J("ngIf", d.nzSuccessPercent || 0 === d.nzSuccessPercent);
        }
      }
      function ot(l, f) {}
      function z(l, f) {
        if (
          (1 & l &&
            (i.ynx(0),
            i.YNc(1, ct, 4, 11, "div", 11),
            i.YNc(2, ot, 0, 0, "ng-template", 12),
            i.BQk()),
          2 & l)
        ) {
          const d = i.oxw(2),
            u = i.MAs(1);
          i.xp6(1),
            i.Q6J("ngIf", !d.isSteps),
            i.xp6(1),
            i.Q6J("ngTemplateOutlet", u);
        }
      }
      function b(l, f) {
        1 & l && i._UZ(0, "div", 20), 2 & l && i.Q6J("ngStyle", f.$implicit);
      }
      function C(l, f) {}
      function h(l, f) {
        if (
          (1 & l &&
            (i.TgZ(0, "div", 18),
            i.YNc(1, b, 1, 1, "div", 19),
            i.YNc(2, C, 0, 0, "ng-template", 12),
            i.qZA()),
          2 & l)
        ) {
          const d = i.oxw(2),
            u = i.MAs(1);
          i.xp6(1),
            i.Q6J("ngForOf", d.steps),
            i.xp6(1),
            i.Q6J("ngTemplateOutlet", u);
        }
      }
      function m(l, f) {
        if (
          (1 & l &&
            (i.TgZ(0, "div"),
            i.YNc(1, z, 3, 2, "ng-container", 2),
            i.YNc(2, h, 3, 2, "div", 10),
            i.qZA()),
          2 & l)
        ) {
          const d = i.oxw();
          i.xp6(1),
            i.Q6J("ngIf", !d.isSteps),
            i.xp6(1),
            i.Q6J("ngIf", d.isSteps);
        }
      }
      function W(l, f) {
        if ((1 & l && (i.O4$(), i._UZ(0, "stop")), 2 & l)) {
          const d = f.$implicit;
          i.uIk("offset", d.offset)("stop-color", d.color);
        }
      }
      function A(l, f) {
        if (
          (1 & l &&
            (i.O4$(),
            i.TgZ(0, "defs")(1, "linearGradient", 24),
            i.YNc(2, W, 1, 2, "stop", 25),
            i.qZA()()),
          2 & l)
        ) {
          const d = i.oxw(2);
          i.xp6(1),
            i.Q6J("id", "gradient-" + d.gradientId),
            i.xp6(1),
            i.Q6J("ngForOf", d.circleGradient);
        }
      }
      function k(l, f) {
        if ((1 & l && (i.O4$(), i._UZ(0, "path", 26)), 2 & l)) {
          const d = f.$implicit,
            u = i.oxw(2);
          i.Q6J("ngStyle", d.strokePathStyle),
            i.uIk("d", u.pathString)("stroke-linecap", u.nzStrokeLinecap)(
              "stroke",
              d.stroke
            )("stroke-width", u.nzPercent ? u.strokeWidth : 0);
        }
      }
      function O(l, f) {
        1 & l && i.O4$();
      }
      function K(l, f) {
        if (
          (1 & l &&
            (i.TgZ(0, "div", 14),
            i.O4$(),
            i.TgZ(1, "svg", 21),
            i.YNc(2, A, 3, 2, "defs", 2),
            i._UZ(3, "path", 22),
            i.YNc(4, k, 1, 5, "path", 23),
            i.qZA(),
            i.YNc(5, O, 0, 0, "ng-template", 12),
            i.qZA()),
          2 & l)
        ) {
          const d = i.oxw(),
            u = i.MAs(1);
          i.Udp("width", d.nzWidth, "px")("height", d.nzWidth, "px")(
            "font-size",
            0.15 * d.nzWidth + 6,
            "px"
          ),
            i.ekj("ant-progress-circle-gradient", d.isGradient),
            i.xp6(2),
            i.Q6J("ngIf", d.isGradient),
            i.xp6(1),
            i.Q6J("ngStyle", d.trailPathStyle),
            i.uIk("stroke-width", d.strokeWidth)("d", d.pathString),
            i.xp6(1),
            i.Q6J("ngForOf", d.progressCirclePath)("ngForTrackBy", d.trackByFn),
            i.xp6(1),
            i.Q6J("ngTemplateOutlet", u);
        }
      }
      const lt = (l) => {
        let f = [];
        return (
          Object.keys(l).forEach((d) => {
            const u = l[d],
              g = (function ut(l) {
                return +l.replace("%", "");
              })(d);
            isNaN(g) || f.push({ key: g, value: u });
          }),
          (f = f.sort((d, u) => d.key - u.key)),
          f
        );
      };
      let ft = 0;
      const dt = "progress",
        gt = new Map([
          ["success", "check"],
          ["exception", "close"],
        ]),
        mt = new Map([
          ["normal", "#108ee9"],
          ["exception", "#ff5500"],
          ["success", "#87d068"],
        ]),
        bt = (l) => `${l}%`;
      let zt = (() => {
          var l;
          class f {
            get formatter() {
              return this.nzFormat || bt;
            }
            get status() {
              return this.nzStatus || this.inferredStatus;
            }
            get strokeWidth() {
              return (
                this.nzStrokeWidth ||
                ("line" === this.nzType && "small" !== this.nzSize ? 8 : 6)
              );
            }
            get isCircleStyle() {
              return "circle" === this.nzType || "dashboard" === this.nzType;
            }
            constructor(u, g, P) {
              (this.cdr = u),
                (this.nzConfigService = g),
                (this.directionality = P),
                (this._nzModuleName = dt),
                (this.nzShowInfo = !0),
                (this.nzWidth = 132),
                (this.nzStrokeColor = void 0),
                (this.nzSize = "default"),
                (this.nzPercent = 0),
                (this.nzStrokeWidth = void 0),
                (this.nzGapDegree = void 0),
                (this.nzType = "line"),
                (this.nzGapPosition = "top"),
                (this.nzStrokeLinecap = "round"),
                (this.nzSteps = 0),
                (this.steps = []),
                (this.lineGradient = null),
                (this.isGradient = !1),
                (this.isSteps = !1),
                (this.gradientId = ft++),
                (this.progressCirclePath = []),
                (this.trailPathStyle = null),
                (this.dir = "ltr"),
                (this.trackByFn = (S) => `${S}`),
                (this.cachedStatus = "normal"),
                (this.inferredStatus = "normal"),
                (this.destroy$ = new E.x());
            }
            ngOnChanges(u) {
              const {
                nzSteps: g,
                nzGapPosition: P,
                nzStrokeLinecap: S,
                nzStrokeColor: D,
                nzGapDegree: Y,
                nzType: G,
                nzStatus: $,
                nzPercent: R,
                nzSuccessPercent: tt,
                nzStrokeWidth: at,
              } = u;
              $ && (this.cachedStatus = this.nzStatus || this.cachedStatus),
                (R || tt) &&
                  (parseInt(this.nzPercent.toString(), 10) >= 100
                    ? (((0, L.DX)(this.nzSuccessPercent) &&
                        this.nzSuccessPercent >= 100) ||
                        void 0 === this.nzSuccessPercent) &&
                      (this.inferredStatus = "success")
                    : (this.inferredStatus = this.cachedStatus)),
                ($ || R || tt || D) && this.updateIcon(),
                D && this.setStrokeColor(),
                (P || S || Y || G || R || D || D) && this.getCirclePaths(),
                (R || g || at) &&
                  ((this.isSteps = this.nzSteps > 0),
                  this.isSteps && this.getSteps());
            }
            ngOnInit() {
              this.nzConfigService
                .getConfigChangeEventForComponent(dt)
                .pipe((0, w.R)(this.destroy$))
                .subscribe(() => {
                  this.updateIcon(),
                    this.setStrokeColor(),
                    this.getCirclePaths();
                }),
                this.directionality.change
                  ?.pipe((0, w.R)(this.destroy$))
                  .subscribe((u) => {
                    (this.dir = u), this.cdr.detectChanges();
                  }),
                (this.dir = this.directionality.value);
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete();
            }
            updateIcon() {
              const u = gt.get(this.status);
              this.icon = u
                ? u + (this.isCircleStyle ? "-o" : "-circle-fill")
                : "";
            }
            getSteps() {
              const u = Math.floor(this.nzSteps * (this.nzPercent / 100)),
                g = "small" === this.nzSize ? 2 : 14,
                P = [];
              for (let S = 0; S < this.nzSteps; S++) {
                let D;
                S <= u - 1 && (D = this.nzStrokeColor),
                  P.push({
                    backgroundColor: `${D}`,
                    width: `${g}px`,
                    height: `${this.strokeWidth}px`,
                  });
              }
              this.steps = P;
            }
            getCirclePaths() {
              if (!this.isCircleStyle) return;
              const u = (0, L.DX)(this.nzSuccessPercent)
                  ? [this.nzSuccessPercent, this.nzPercent]
                  : [this.nzPercent],
                g = 50 - this.strokeWidth / 2,
                S = 2 * Math.PI * g,
                D = this.nzGapDegree || ("circle" === this.nzType ? 0 : 75);
              let Y = 0,
                G = -g,
                $ = 0,
                R = -2 * g;
              switch (
                this.nzGapPosition ||
                ("circle" === this.nzType ? "top" : "bottom")
              ) {
                case "left":
                  (Y = -g), (G = 0), ($ = 2 * g), (R = 0);
                  break;
                case "right":
                  (Y = g), (G = 0), ($ = -2 * g), (R = 0);
                  break;
                case "bottom":
                  (G = g), (R = 2 * g);
              }
              (this.pathString = `M 50,50 m ${Y},${G}\n       a ${g},${g} 0 1 1 ${$},${-R}\n       a ${g},${g} 0 1 1 ${-$},${R}`),
                (this.trailPathStyle = {
                  strokeDasharray: `${S - D}px ${S}px`,
                  strokeDashoffset: `-${D / 2}px`,
                  transition:
                    "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s",
                }),
                (this.progressCirclePath = u
                  .map((tt, at) => {
                    const rt = 2 === u.length && 0 === at;
                    return {
                      stroke:
                        this.isGradient && !rt
                          ? `url(#gradient-${this.gradientId})`
                          : null,
                      strokePathStyle: {
                        stroke: this.isGradient
                          ? null
                          : rt
                          ? mt.get("success")
                          : this.nzStrokeColor,
                        transition:
                          "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s",
                        strokeDasharray: `${
                          ((tt || 0) / 100) * (S - D)
                        }px ${S}px`,
                        strokeDashoffset: `-${D / 2}px`,
                      },
                    };
                  })
                  .reverse());
            }
            setStrokeColor() {
              const u = this.nzStrokeColor,
                g = (this.isGradient = !!u && "string" != typeof u);
              g && !this.isCircleStyle
                ? (this.lineGradient = ((l) => {
                    const {
                      from: f = "#1890ff",
                      to: d = "#1890ff",
                      direction: u = "to right",
                      ...g
                    } = l;
                    return 0 !== Object.keys(g).length
                      ? `linear-gradient(${u}, ${lt(g)
                          .map(({ key: S, value: D }) => `${D} ${S}%`)
                          .join(", ")})`
                      : `linear-gradient(${u}, ${f}, ${d})`;
                  })(u))
                : g && this.isCircleStyle
                ? (this.circleGradient = ((l) =>
                    lt(this.nzStrokeColor).map(({ key: f, value: d }) => ({
                      offset: `${f}%`,
                      color: d,
                    })))())
                : ((this.lineGradient = null), (this.circleGradient = []));
            }
          }
          return (
            ((l = f).ɵfac = function (u) {
              return new (u || l)(i.Y36(i.sBO), i.Y36(I.jY), i.Y36(t.Is, 8));
            }),
            (l.ɵcmp = i.Xpm({
              type: l,
              selectors: [["nz-progress"]],
              inputs: {
                nzShowInfo: "nzShowInfo",
                nzWidth: "nzWidth",
                nzStrokeColor: "nzStrokeColor",
                nzSize: "nzSize",
                nzFormat: "nzFormat",
                nzSuccessPercent: "nzSuccessPercent",
                nzPercent: "nzPercent",
                nzStrokeWidth: "nzStrokeWidth",
                nzGapDegree: "nzGapDegree",
                nzStatus: "nzStatus",
                nzType: "nzType",
                nzGapPosition: "nzGapPosition",
                nzStrokeLinecap: "nzStrokeLinecap",
                nzSteps: "nzSteps",
              },
              exportAs: ["nzProgress"],
              features: [i.TTD],
              decls: 5,
              vars: 17,
              consts: [
                ["progressInfoTemplate", ""],
                [3, "ngClass"],
                [4, "ngIf"],
                [
                  "class",
                  "ant-progress-inner",
                  3,
                  "width",
                  "height",
                  "fontSize",
                  "ant-progress-circle-gradient",
                  4,
                  "ngIf",
                ],
                ["class", "ant-progress-text", 4, "ngIf"],
                [1, "ant-progress-text"],
                [4, "ngIf", "ngIfElse"],
                ["formatTemplate", ""],
                ["nz-icon", "", 3, "nzType"],
                [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"],
                ["class", "ant-progress-steps-outer", 4, "ngIf"],
                ["class", "ant-progress-outer", 4, "ngIf"],
                [3, "ngTemplateOutlet"],
                [1, "ant-progress-outer"],
                [1, "ant-progress-inner"],
                [1, "ant-progress-bg"],
                [
                  "class",
                  "ant-progress-success-bg",
                  3,
                  "width",
                  "border-radius",
                  "height",
                  4,
                  "ngIf",
                ],
                [1, "ant-progress-success-bg"],
                [1, "ant-progress-steps-outer"],
                [
                  "class",
                  "ant-progress-steps-item",
                  3,
                  "ngStyle",
                  4,
                  "ngFor",
                  "ngForOf",
                ],
                [1, "ant-progress-steps-item", 3, "ngStyle"],
                ["viewBox", "0 0 100 100", 1, "ant-progress-circle"],
                [
                  "stroke",
                  "#f3f3f3",
                  "fill-opacity",
                  "0",
                  1,
                  "ant-progress-circle-trail",
                  3,
                  "ngStyle",
                ],
                [
                  "class",
                  "ant-progress-circle-path",
                  "fill-opacity",
                  "0",
                  3,
                  "ngStyle",
                  4,
                  "ngFor",
                  "ngForOf",
                  "ngForTrackBy",
                ],
                ["x1", "100%", "y1", "0%", "x2", "0%", "y2", "0%", 3, "id"],
                [4, "ngFor", "ngForOf"],
                [
                  "fill-opacity",
                  "0",
                  1,
                  "ant-progress-circle-path",
                  3,
                  "ngStyle",
                ],
              ],
              template: function (u, g) {
                1 & u &&
                  (i.YNc(0, st, 1, 1, "ng-template", null, 0, i.W1O),
                  i.TgZ(2, "div", 1),
                  i.YNc(3, m, 3, 2, "div", 2),
                  i.YNc(4, K, 6, 15, "div", 3),
                  i.qZA()),
                  2 & u &&
                    (i.xp6(2),
                    i.ekj("ant-progress-line", "line" === g.nzType)(
                      "ant-progress-small",
                      "small" === g.nzSize
                    )("ant-progress-default", "default" === g.nzSize)(
                      "ant-progress-show-info",
                      g.nzShowInfo
                    )("ant-progress-circle", g.isCircleStyle)(
                      "ant-progress-steps",
                      g.isSteps
                    )("ant-progress-rtl", "rtl" === g.dir),
                    i.Q6J(
                      "ngClass",
                      "ant-progress ant-progress-status-" + g.status
                    ),
                    i.xp6(1),
                    i.Q6J("ngIf", "line" === g.nzType),
                    i.xp6(1),
                    i.Q6J("ngIf", g.isCircleStyle));
              },
              dependencies: [_.mk, _.sg, _.O5, _.tP, _.PC, F.Ls, Z.f],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, y.gn)([(0, I.oS)()], f.prototype, "nzShowInfo", void 0),
            (0, y.gn)([(0, I.oS)()], f.prototype, "nzStrokeColor", void 0),
            (0, y.gn)([(0, I.oS)()], f.prototype, "nzSize", void 0),
            (0, y.gn)([(0, L.Rn)()], f.prototype, "nzSuccessPercent", void 0),
            (0, y.gn)([(0, L.Rn)()], f.prototype, "nzPercent", void 0),
            (0, y.gn)(
              [(0, I.oS)(), (0, L.Rn)()],
              f.prototype,
              "nzStrokeWidth",
              void 0
            ),
            (0, y.gn)(
              [(0, I.oS)(), (0, L.Rn)()],
              f.prototype,
              "nzGapDegree",
              void 0
            ),
            (0, y.gn)([(0, I.oS)()], f.prototype, "nzGapPosition", void 0),
            (0, y.gn)([(0, I.oS)()], f.prototype, "nzStrokeLinecap", void 0),
            (0, y.gn)([(0, L.Rn)()], f.prototype, "nzSteps", void 0),
            f
          );
        })(),
        vt = (() => {
          var l;
          class f {}
          return (
            ((l = f).ɵfac = function (u) {
              return new (u || l)();
            }),
            (l.ɵmod = i.oAB({ type: l })),
            (l.ɵinj = i.cJS({ imports: [t.vT, _.ez, F.PV, Z.T] })),
            f
          );
        })();
    },
    79382: (Mt, nt, p) => {
      p.d(nt, {
        Ao: () => It,
        Fx: () => kt,
        cj: () => St,
        we: () => Vt,
        xH: () => Bt,
        xw: () => Dt,
      });
      var t = p(65879),
        _ = p(62595),
        i = p(8324),
        Z = p(56879),
        F = p(4300),
        y = p(42495),
        E = p(36028),
        w = p(92438),
        I = p(47394),
        L = p(80927),
        it = p(76410),
        U = p(78645),
        V = p(22096),
        Q = p(63019),
        N = p(59773),
        st = p(29028),
        q = p(27921),
        ct = p(81374),
        ot = p(32181),
        z = p(60932),
        b = p(96814),
        C = p(73460),
        h = p(62787),
        m = p(70532),
        W = p(28802),
        A = p(49388),
        k = p(97582),
        O = p(27754),
        K = p(35420),
        ut = p(17131),
        lt = p(62831),
        J = p(40874),
        _t = p(1608);
      function ft(s, c) {
        if ((1 & s && (t.ynx(0), t._UZ(1, "span", 1), t.BQk()), 2 & s)) {
          const a = c.$implicit;
          t.xp6(1), t.Q6J("nzType", a);
        }
      }
      function dt(s, c) {
        if ((1 & s && (t.ynx(0), t._uU(1), t.BQk()), 2 & s)) {
          const a = t.oxw().$implicit;
          t.xp6(1), t.hij(" ", a.tab.label, " ");
        }
      }
      const gt = function () {
        return { visible: !1 };
      };
      function mt(s, c) {
        if (1 & s) {
          const a = t.EpF();
          t.TgZ(0, "li", 8),
            t.NdJ("click", function () {
              const o = t.CHM(a).$implicit,
                r = t.oxw(2);
              return t.KtG(r.onSelect(o));
            })("contextmenu", function (n) {
              const r = t.CHM(a).$implicit,
                v = t.oxw(2);
              return t.KtG(v.onContextmenu(r, n));
            }),
            t.YNc(1, dt, 2, 1, "ng-container", 9),
            t.qZA();
        }
        if (2 & s) {
          const a = c.$implicit;
          t.ekj("ant-tabs-dropdown-menu-item-disabled", a.disabled),
            t.Q6J("nzSelected", a.active)("nzDisabled", a.disabled),
            t.xp6(1),
            t.Q6J("nzStringTemplateOutlet", a.tab.label)(
              "nzStringTemplateOutletContext",
              t.DdM(6, gt)
            );
        }
      }
      function bt(s, c) {
        if (
          (1 & s && (t.TgZ(0, "ul", 6), t.YNc(1, mt, 2, 7, "li", 7), t.qZA()),
          2 & s)
        ) {
          const a = t.oxw();
          t.xp6(1), t.Q6J("ngForOf", a.items);
        }
      }
      function zt(s, c) {
        if (1 & s) {
          const a = t.EpF();
          t.TgZ(0, "button", 10),
            t.NdJ("click", function () {
              t.CHM(a);
              const n = t.oxw();
              return t.KtG(n.addClicked.emit());
            }),
            t.qZA();
        }
        if (2 & s) {
          const a = t.oxw();
          t.Q6J("addIcon", a.addIcon);
        }
      }
      const vt = function () {
          return { minWidth: "46px" };
        },
        l = ["navWarp"],
        f = ["navList"];
      function d(s, c) {
        if (1 & s) {
          const a = t.EpF();
          t.TgZ(0, "button", 8),
            t.NdJ("click", function () {
              t.CHM(a);
              const n = t.oxw();
              return t.KtG(n.addClicked.emit());
            }),
            t.qZA();
        }
        if (2 & s) {
          const a = t.oxw();
          t.Q6J("addIcon", a.addIcon);
        }
      }
      function u(s, c) {}
      function g(s, c) {
        if (
          (1 & s &&
            (t.TgZ(0, "div", 9), t.YNc(1, u, 0, 0, "ng-template", 10), t.qZA()),
          2 & s)
        ) {
          const a = t.oxw();
          t.xp6(1), t.Q6J("ngTemplateOutlet", a.extraTemplate);
        }
      }
      const P = ["*"],
        S = ["nz-tab-body", ""];
      function D(s, c) {}
      function Y(s, c) {
        if (
          (1 & s && (t.ynx(0), t.YNc(1, D, 0, 0, "ng-template", 1), t.BQk()),
          2 & s)
        ) {
          const a = t.oxw();
          t.xp6(1), t.Q6J("ngTemplateOutlet", a.content);
        }
      }
      function G(s, c) {
        if ((1 & s && (t.ynx(0), t._UZ(1, "span", 1), t.BQk()), 2 & s)) {
          const a = c.$implicit;
          t.xp6(1), t.Q6J("nzType", a);
        }
      }
      const $ = ["contentTemplate"];
      function R(s, c) {
        1 & s && t.Hsn(0);
      }
      function tt(s, c) {
        1 & s && t.Hsn(0, 1);
      }
      const at = [[["", "nz-tab-link", ""]], "*"],
        rt = ["[nz-tab-link]", "*"];
      function Yt(s, c) {
        if ((1 & s && (t.ynx(0), t._uU(1), t.BQk()), 2 & s)) {
          const a = t.oxw().$implicit;
          t.xp6(1), t.Oqu(a.label);
        }
      }
      function $t(s, c) {
        if (1 & s) {
          const a = t.EpF();
          t.TgZ(0, "button", 10),
            t.NdJ("click", function (n) {
              t.CHM(a);
              const o = t.oxw().index,
                r = t.oxw(2);
              return t.KtG(r.onClose(o, n));
            }),
            t.qZA();
        }
        if (2 & s) {
          const a = t.oxw().$implicit;
          t.Q6J("closeIcon", a.nzCloseIcon);
        }
      }
      const Ht = function () {
        return { visible: !0 };
      };
      function Ut(s, c) {
        if (1 & s) {
          const a = t.EpF();
          t.TgZ(0, "div", 6),
            t.NdJ("click", function (n) {
              const o = t.CHM(a),
                r = o.$implicit,
                v = o.index,
                T = t.oxw(2);
              return t.KtG(T.clickNavItem(r, v, n));
            })("contextmenu", function (n) {
              const r = t.CHM(a).$implicit,
                v = t.oxw(2);
              return t.KtG(v.contextmenuNavItem(r, n));
            }),
            t.TgZ(1, "div", 7),
            t.YNc(2, Yt, 2, 1, "ng-container", 8),
            t.YNc(3, $t, 1, 1, "button", 9),
            t.qZA()();
        }
        if (2 & s) {
          const a = c.$implicit,
            e = c.index,
            n = t.oxw(2);
          t.Udp(
            "margin-right",
            "horizontal" === n.position ? n.nzTabBarGutter : null,
            "px"
          )(
            "margin-bottom",
            "vertical" === n.position ? n.nzTabBarGutter : null,
            "px"
          ),
            t.ekj("ant-tabs-tab-active", n.nzSelectedIndex === e)(
              "ant-tabs-tab-disabled",
              a.nzDisabled
            ),
            t.xp6(1),
            t.Q6J("disabled", a.nzDisabled)("tab", a)(
              "active",
              n.nzSelectedIndex === e
            ),
            t.uIk("tabIndex", n.getTabIndex(a, e))(
              "aria-disabled",
              a.nzDisabled
            )("aria-selected", n.nzSelectedIndex === e && !n.nzHideAll)(
              "aria-controls",
              n.getTabContentId(e)
            ),
            t.xp6(1),
            t.Q6J("nzStringTemplateOutlet", a.label)(
              "nzStringTemplateOutletContext",
              t.DdM(18, Ht)
            ),
            t.xp6(1),
            t.Q6J("ngIf", a.nzClosable && n.closable && !a.nzDisabled);
        }
      }
      function Gt(s, c) {
        if (1 & s) {
          const a = t.EpF();
          t.TgZ(0, "nz-tabs-nav", 4),
            t.NdJ("tabScroll", function (n) {
              t.CHM(a);
              const o = t.oxw();
              return t.KtG(o.nzTabListScroll.emit(n));
            })("selectFocusedIndex", function (n) {
              t.CHM(a);
              const o = t.oxw();
              return t.KtG(o.setSelectedIndex(n));
            })("addClicked", function () {
              t.CHM(a);
              const n = t.oxw();
              return t.KtG(n.onAdd());
            }),
            t.YNc(1, Ut, 4, 19, "div", 5),
            t.qZA();
        }
        if (2 & s) {
          const a = t.oxw();
          t.Q6J("ngStyle", a.nzTabBarStyle)(
            "selectedIndex",
            a.nzSelectedIndex || 0
          )("inkBarAnimated", a.inkBarAnimated)("addable", a.addable)(
            "addIcon",
            a.nzAddIcon
          )("hideBar", a.nzHideAll)("position", a.position)(
            "extraTemplate",
            a.nzTabBarExtraContent
          ),
            t.xp6(1),
            t.Q6J("ngForOf", a.tabs);
        }
      }
      function Zt(s, c) {
        if ((1 & s && t._UZ(0, "div", 11), 2 & s)) {
          const a = c.$implicit,
            e = c.index,
            n = t.oxw();
          t.Q6J("active", n.nzSelectedIndex === e && !n.nzHideAll)(
            "content",
            a.content
          )("forceRender", a.nzForceRender)(
            "tabPaneAnimated",
            n.tabPaneAnimated
          );
        }
      }
      let ht = (() => {
          var s;
          class c {
            constructor(e) {
              (this.elementRef = e),
                (this.addIcon = "plus"),
                (this.element = this.elementRef.nativeElement);
            }
            getElementWidth() {
              return this.element?.offsetWidth || 0;
            }
            getElementHeight() {
              return this.element?.offsetHeight || 0;
            }
          }
          return (
            ((s = c).ɵfac = function (e) {
              return new (e || s)(t.Y36(t.SBq));
            }),
            (s.ɵcmp = t.Xpm({
              type: s,
              selectors: [
                ["nz-tab-add-button"],
                ["button", "nz-tab-add-button", ""],
              ],
              hostAttrs: [
                "aria-label",
                "Add tab",
                "type",
                "button",
                1,
                "ant-tabs-nav-add",
              ],
              inputs: { addIcon: "addIcon" },
              decls: 1,
              vars: 1,
              consts: [
                [4, "nzStringTemplateOutlet"],
                ["nz-icon", "", "nzTheme", "outline", 3, "nzType"],
              ],
              template: function (e, n) {
                1 & e && t.YNc(0, ft, 2, 1, "ng-container", 0),
                  2 & e && t.Q6J("nzStringTemplateOutlet", n.addIcon);
              },
              dependencies: [_.Ls, i.f],
              encapsulation: 2,
            })),
            c
          );
        })(),
        Tt = (() => {
          var s;
          class c {
            get _animated() {
              return "NoopAnimations" !== this.animationMode && this.animated;
            }
            constructor(e, n, o) {
              (this.elementRef = e),
                (this.ngZone = n),
                (this.animationMode = o),
                (this.position = "horizontal"),
                (this.animated = !0);
            }
            alignToElement(e) {
              this.ngZone.runOutsideAngular(() => {
                (0, Z.e)(() => this.setStyles(e));
              });
            }
            setStyles(e) {
              const n = this.elementRef.nativeElement;
              "horizontal" === this.position
                ? ((n.style.top = ""),
                  (n.style.height = ""),
                  (n.style.left = this.getLeftPosition(e)),
                  (n.style.width = this.getElementWidth(e)))
                : ((n.style.left = ""),
                  (n.style.width = ""),
                  (n.style.top = this.getTopPosition(e)),
                  (n.style.height = this.getElementHeight(e)));
            }
            getLeftPosition(e) {
              return e ? `${e.offsetLeft || 0}px` : "0";
            }
            getElementWidth(e) {
              return e ? `${e.offsetWidth || 0}px` : "0";
            }
            getTopPosition(e) {
              return e ? `${e.offsetTop || 0}px` : "0";
            }
            getElementHeight(e) {
              return e ? `${e.offsetHeight || 0}px` : "0";
            }
          }
          return (
            ((s = c).ɵfac = function (e) {
              return new (e || s)(t.Y36(t.SBq), t.Y36(t.R0b), t.Y36(t.QbO, 8));
            }),
            (s.ɵdir = t.lG2({
              type: s,
              selectors: [["nz-tabs-ink-bar"], ["", "nz-tabs-ink-bar", ""]],
              hostAttrs: [1, "ant-tabs-ink-bar"],
              hostVars: 2,
              hostBindings: function (e, n) {
                2 & e && t.ekj("ant-tabs-ink-bar-animated", n._animated);
              },
              inputs: { position: "position", animated: "animated" },
            })),
            c
          );
        })(),
        Ct = (() => {
          var s;
          class c {
            constructor(e) {
              (this.elementRef = e),
                (this.disabled = !1),
                (this.active = !1),
                (this.el = e.nativeElement),
                (this.parentElement = this.el.parentElement);
            }
            focus() {
              this.el.focus();
            }
            get width() {
              return this.parentElement.offsetWidth;
            }
            get height() {
              return this.parentElement.offsetHeight;
            }
            get left() {
              return this.parentElement.offsetLeft;
            }
            get top() {
              return this.parentElement.offsetTop;
            }
          }
          return (
            ((s = c).ɵfac = function (e) {
              return new (e || s)(t.Y36(t.SBq));
            }),
            (s.ɵdir = t.lG2({
              type: s,
              selectors: [["", "nzTabNavItem", ""]],
              inputs: { disabled: "disabled", tab: "tab", active: "active" },
            })),
            c
          );
        })(),
        xt = (() => {
          var s;
          class c {
            constructor(e, n) {
              (this.cdr = e),
                (this.elementRef = n),
                (this.items = []),
                (this.addable = !1),
                (this.addIcon = "plus"),
                (this.addClicked = new t.vpe()),
                (this.selected = new t.vpe()),
                (this.closeAnimationWaitTimeoutId = -1),
                (this.menuOpened = !1),
                (this.element = this.elementRef.nativeElement);
            }
            onSelect(e) {
              e.disabled || (e.tab.nzClick.emit(), this.selected.emit(e));
            }
            onContextmenu(e, n) {
              e.disabled || e.tab.nzContextmenu.emit(n);
            }
            showItems() {
              clearTimeout(this.closeAnimationWaitTimeoutId),
                (this.menuOpened = !0),
                this.cdr.markForCheck();
            }
            menuVisChange(e) {
              e ||
                (this.closeAnimationWaitTimeoutId = setTimeout(() => {
                  (this.menuOpened = !1), this.cdr.markForCheck();
                }, 150));
            }
            getElementWidth() {
              return this.element?.offsetWidth || 0;
            }
            getElementHeight() {
              return this.element?.offsetHeight || 0;
            }
            ngOnDestroy() {
              clearTimeout(this.closeAnimationWaitTimeoutId);
            }
          }
          return (
            ((s = c).ɵfac = function (e) {
              return new (e || s)(t.Y36(t.sBO), t.Y36(t.SBq));
            }),
            (s.ɵcmp = t.Xpm({
              type: s,
              selectors: [["nz-tab-nav-operation"]],
              hostAttrs: [1, "ant-tabs-nav-operations"],
              hostVars: 2,
              hostBindings: function (e, n) {
                2 & e &&
                  t.ekj("ant-tabs-nav-operations-hidden", 0 === n.items.length);
              },
              inputs: {
                items: "items",
                addable: "addable",
                addIcon: "addIcon",
              },
              outputs: { addClicked: "addClicked", selected: "selected" },
              exportAs: ["nzTabNavOperation"],
              decls: 7,
              vars: 6,
              consts: [
                [
                  "nz-dropdown",
                  "",
                  "type",
                  "button",
                  "tabindex",
                  "-1",
                  "aria-hidden",
                  "true",
                  "nzOverlayClassName",
                  "nz-tabs-dropdown",
                  1,
                  "ant-tabs-nav-more",
                  3,
                  "nzDropdownMenu",
                  "nzOverlayStyle",
                  "nzMatchWidthElement",
                  "nzVisibleChange",
                  "mouseenter",
                ],
                ["dropdownTrigger", "nzDropdown"],
                ["nz-icon", "", "nzType", "ellipsis"],
                ["menu", "nzDropdownMenu"],
                ["nz-menu", "", 4, "ngIf"],
                ["nz-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"],
                ["nz-menu", ""],
                [
                  "nz-menu-item",
                  "",
                  "class",
                  "ant-tabs-dropdown-menu-item",
                  3,
                  "ant-tabs-dropdown-menu-item-disabled",
                  "nzSelected",
                  "nzDisabled",
                  "click",
                  "contextmenu",
                  4,
                  "ngFor",
                  "ngForOf",
                ],
                [
                  "nz-menu-item",
                  "",
                  1,
                  "ant-tabs-dropdown-menu-item",
                  3,
                  "nzSelected",
                  "nzDisabled",
                  "click",
                  "contextmenu",
                ],
                [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"],
                ["nz-tab-add-button", "", 3, "addIcon", "click"],
              ],
              template: function (e, n) {
                if (
                  (1 & e &&
                    (t.TgZ(0, "button", 0, 1),
                    t.NdJ("nzVisibleChange", function (r) {
                      return n.menuVisChange(r);
                    })("mouseenter", function () {
                      return n.showItems();
                    }),
                    t._UZ(2, "span", 2),
                    t.qZA(),
                    t.TgZ(3, "nz-dropdown-menu", null, 3),
                    t.YNc(5, bt, 2, 1, "ul", 4),
                    t.qZA(),
                    t.YNc(6, zt, 1, 1, "button", 5)),
                  2 & e)
                ) {
                  const o = t.MAs(4);
                  t.Q6J("nzDropdownMenu", o)("nzOverlayStyle", t.DdM(5, vt))(
                    "nzMatchWidthElement",
                    null
                  ),
                    t.xp6(5),
                    t.Q6J("ngIf", n.menuOpened),
                    t.xp6(1),
                    t.Q6J("ngIf", n.addable);
                }
              },
              dependencies: [b.sg, b.O5, _.Ls, i.f, C.wO, C.r9, h.cm, h.RR, ht],
              encapsulation: 2,
              changeDetection: 0,
            })),
            c
          );
        })();
      const At = 0.995 ** 20;
      let Pt = (() => {
        var s;
        class c {
          constructor(e, n) {
            (this.ngZone = e),
              (this.elementRef = n),
              (this.lastWheelDirection = null),
              (this.lastWheelTimestamp = 0),
              (this.lastTimestamp = 0),
              (this.lastTimeDiff = 0),
              (this.lastMixedWheel = 0),
              (this.lastWheelPrevent = !1),
              (this.touchPosition = null),
              (this.lastOffset = null),
              (this.motion = -1),
              (this.unsubscribe = () => {}),
              (this.offsetChange = new t.vpe()),
              (this.tabScroll = new t.vpe()),
              (this.onTouchEnd = (o) => {
                if (!this.touchPosition) return;
                const r = this.lastOffset,
                  v = this.lastTimeDiff;
                if (((this.lastOffset = this.touchPosition = null), r)) {
                  const T = r.x / v,
                    x = r.y / v,
                    B = Math.abs(T),
                    X = Math.abs(x);
                  if (Math.max(B, X) < 0.1) return;
                  let H = T,
                    j = x;
                  this.motion = window.setInterval(() => {
                    Math.abs(H) < 0.01 && Math.abs(j) < 0.01
                      ? window.clearInterval(this.motion)
                      : ((H *= At),
                        (j *= At),
                        this.onOffset(20 * H, 20 * j, o));
                  }, 20);
                }
              }),
              (this.onTouchMove = (o) => {
                if (!this.touchPosition) return;
                o.preventDefault();
                const { screenX: r, screenY: v } = o.touches[0],
                  T = r - this.touchPosition.x,
                  x = v - this.touchPosition.y;
                this.onOffset(T, x, o);
                const B = Date.now();
                (this.lastTimeDiff = B - this.lastTimestamp),
                  (this.lastTimestamp = B),
                  (this.lastOffset = { x: T, y: x }),
                  (this.touchPosition = { x: r, y: v });
              }),
              (this.onTouchStart = (o) => {
                const { screenX: r, screenY: v } = o.touches[0];
                (this.touchPosition = { x: r, y: v }),
                  window.clearInterval(this.motion);
              }),
              (this.onWheel = (o) => {
                const { deltaX: r, deltaY: v } = o;
                let T;
                const x = Math.abs(r),
                  B = Math.abs(v);
                x === B
                  ? (T = "x" === this.lastWheelDirection ? r : v)
                  : x > B
                  ? ((T = r), (this.lastWheelDirection = "x"))
                  : ((T = v), (this.lastWheelDirection = "y"));
                const X = Date.now(),
                  H = Math.abs(T);
                (X - this.lastWheelTimestamp > 100 ||
                  H - this.lastMixedWheel > 10) &&
                  (this.lastWheelPrevent = !1),
                  this.onOffset(-T, -T, o),
                  (o.defaultPrevented || this.lastWheelPrevent) &&
                    (this.lastWheelPrevent = !0),
                  (this.lastWheelTimestamp = X),
                  (this.lastMixedWheel = H);
              });
          }
          ngOnInit() {
            this.unsubscribe = this.ngZone.runOutsideAngular(() => {
              const e = this.elementRef.nativeElement,
                n = (0, w.R)(e, "wheel"),
                o = (0, w.R)(e, "touchstart"),
                r = (0, w.R)(e, "touchmove"),
                v = (0, w.R)(e, "touchend"),
                T = new I.w0();
              return (
                T.add(this.subscribeWrap("wheel", n, this.onWheel)),
                T.add(this.subscribeWrap("touchstart", o, this.onTouchStart)),
                T.add(this.subscribeWrap("touchmove", r, this.onTouchMove)),
                T.add(this.subscribeWrap("touchend", v, this.onTouchEnd)),
                () => {
                  T.unsubscribe();
                }
              );
            });
          }
          subscribeWrap(e, n, o) {
            return n.subscribe((r) => {
              this.tabScroll.emit({ type: e, event: r }),
                r.defaultPrevented || o(r);
            });
          }
          onOffset(e, n, o) {
            this.ngZone.run(() => {
              this.offsetChange.emit({ x: e, y: n, event: o });
            });
          }
          ngOnDestroy() {
            this.unsubscribe();
          }
        }
        return (
          ((s = c).ɵfac = function (e) {
            return new (e || s)(t.Y36(t.R0b), t.Y36(t.SBq));
          }),
          (s.ɵdir = t.lG2({
            type: s,
            selectors: [["", "nzTabScrollList", ""]],
            outputs: { offsetChange: "offsetChange", tabScroll: "tabScroll" },
          })),
          c
        );
      })();
      const Kt = typeof requestAnimationFrame < "u" ? L.Z : it.E;
      let yt = (() => {
          var s;
          class c {
            get selectedIndex() {
              return this._selectedIndex;
            }
            set selectedIndex(e) {
              const n = (0, y.su)(e);
              this._selectedIndex !== n &&
                ((this._selectedIndex = e),
                (this.selectedIndexChanged = !0),
                this.keyManager && this.keyManager.updateActiveItem(e));
            }
            get focusIndex() {
              return this.keyManager ? this.keyManager.activeItemIndex : 0;
            }
            set focusIndex(e) {
              !this.isValidIndex(e) ||
                this.focusIndex === e ||
                !this.keyManager ||
                this.keyManager.setActiveItem(e);
            }
            get showAddButton() {
              return 0 === this.hiddenItems.length && this.addable;
            }
            constructor(e, n, o, r, v) {
              (this.cdr = e),
                (this.ngZone = n),
                (this.viewportRuler = o),
                (this.nzResizeObserver = r),
                (this.dir = v),
                (this.indexFocused = new t.vpe()),
                (this.selectFocusedIndex = new t.vpe()),
                (this.addClicked = new t.vpe()),
                (this.tabScroll = new t.vpe()),
                (this.position = "horizontal"),
                (this.addable = !1),
                (this.hideBar = !1),
                (this.addIcon = "plus"),
                (this.inkBarAnimated = !0),
                (this.translate = null),
                (this.transformX = 0),
                (this.transformY = 0),
                (this.pingLeft = !1),
                (this.pingRight = !1),
                (this.pingTop = !1),
                (this.pingBottom = !1),
                (this.hiddenItems = []),
                (this.destroy$ = new U.x()),
                (this._selectedIndex = 0),
                (this.wrapperWidth = 0),
                (this.wrapperHeight = 0),
                (this.scrollListWidth = 0),
                (this.scrollListHeight = 0),
                (this.operationWidth = 0),
                (this.operationHeight = 0),
                (this.addButtonWidth = 0),
                (this.addButtonHeight = 0),
                (this.selectedIndexChanged = !1),
                (this.lockAnimationTimeoutId = -1),
                (this.cssTransformTimeWaitingId = -1);
            }
            ngAfterViewInit() {
              const e = this.dir
                  ? this.dir.change.asObservable()
                  : (0, V.of)(null),
                n = this.viewportRuler.change(150),
                o = () => {
                  this.updateScrollListPosition(),
                    this.alignInkBarToSelectedTab();
                };
              (this.keyManager = new F.Em(this.items)
                .withHorizontalOrientation(this.getLayoutDirection())
                .withWrap()),
                this.keyManager.updateActiveItem(this.selectedIndex),
                (0, Z.e)(o),
                (0, Q.T)(
                  this.nzResizeObserver.observe(this.navWarpRef),
                  this.nzResizeObserver.observe(this.navListRef)
                )
                  .pipe((0, N.R)(this.destroy$), (0, st.e)(16, Kt))
                  .subscribe(() => {
                    o();
                  }),
                (0, Q.T)(e, n, this.items.changes)
                  .pipe((0, N.R)(this.destroy$))
                  .subscribe(() => {
                    Promise.resolve().then(o),
                      this.keyManager.withHorizontalOrientation(
                        this.getLayoutDirection()
                      );
                  }),
                this.keyManager.change
                  .pipe((0, N.R)(this.destroy$))
                  .subscribe((r) => {
                    this.indexFocused.emit(r),
                      this.setTabFocus(r),
                      this.scrollToTab(this.keyManager.activeItem);
                  });
            }
            ngAfterContentChecked() {
              this.selectedIndexChanged &&
                (this.updateScrollListPosition(),
                this.alignInkBarToSelectedTab(),
                (this.selectedIndexChanged = !1),
                this.cdr.markForCheck());
            }
            ngOnDestroy() {
              clearTimeout(this.lockAnimationTimeoutId),
                clearTimeout(this.cssTransformTimeWaitingId),
                this.destroy$.next(),
                this.destroy$.complete();
            }
            onSelectedFromMenu(e) {
              const n = this.items.toArray().findIndex((o) => o === e);
              -1 !== n &&
                (this.keyManager.updateActiveItem(n),
                this.focusIndex !== this.selectedIndex &&
                  (this.selectFocusedIndex.emit(this.focusIndex),
                  this.scrollToTab(e)));
            }
            onOffsetChange(e) {
              if ("horizontal" === this.position) {
                if (
                  -1 === this.lockAnimationTimeoutId &&
                  ((this.transformX >= 0 && e.x > 0) ||
                    (this.transformX <=
                      this.wrapperWidth - this.scrollListWidth &&
                      e.x < 0))
                )
                  return;
                e.event.preventDefault(),
                  (this.transformX = this.clampTransformX(
                    this.transformX + e.x
                  )),
                  this.setTransform(this.transformX, 0);
              } else {
                if (
                  -1 === this.lockAnimationTimeoutId &&
                  ((this.transformY >= 0 && e.y > 0) ||
                    (this.transformY <=
                      this.wrapperHeight - this.scrollListHeight &&
                      e.y < 0))
                )
                  return;
                e.event.preventDefault(),
                  (this.transformY = this.clampTransformY(
                    this.transformY + e.y
                  )),
                  this.setTransform(0, this.transformY);
              }
              this.lockAnimation(),
                this.setVisibleRange(),
                this.setPingStatus();
            }
            handleKeydown(e) {
              const n = this.navWarpRef.nativeElement.contains(e.target);
              if (!(0, E.Vb)(e) && n)
                switch (e.keyCode) {
                  case E.oh:
                  case E.LH:
                  case E.SV:
                  case E.JH:
                    this.lockAnimation(), this.keyManager.onKeydown(e);
                    break;
                  case E.K5:
                  case E.L_:
                    this.focusIndex !== this.selectedIndex &&
                      this.selectFocusedIndex.emit(this.focusIndex);
                    break;
                  default:
                    this.keyManager.onKeydown(e);
                }
            }
            isValidIndex(e) {
              if (!this.items) return !0;
              const n = this.items ? this.items.toArray()[e] : null;
              return !!n && !n.disabled;
            }
            scrollToTab(e) {
              if (!this.items.find((o) => o === e)) return;
              const n = this.items.toArray();
              if ("horizontal" === this.position) {
                let o = this.transformX;
                if ("rtl" === this.getLayoutDirection()) {
                  const r = n[0].left + n[0].width - e.left - e.width;
                  r < this.transformX
                    ? (o = r)
                    : r + e.width > this.transformX + this.wrapperWidth &&
                      (o = r + e.width - this.wrapperWidth);
                } else
                  e.left < -this.transformX
                    ? (o = -e.left)
                    : e.left + e.width > -this.transformX + this.wrapperWidth &&
                      (o = -(e.left + e.width - this.wrapperWidth));
                (this.transformX = o),
                  (this.transformY = 0),
                  this.setTransform(o, 0);
              } else {
                let o = this.transformY;
                e.top < -this.transformY
                  ? (o = -e.top)
                  : e.top + e.height > -this.transformY + this.wrapperHeight &&
                    (o = -(e.top + e.height - this.wrapperHeight)),
                  (this.transformY = o),
                  (this.transformX = 0),
                  this.setTransform(0, o);
              }
              clearTimeout(this.cssTransformTimeWaitingId),
                (this.cssTransformTimeWaitingId = setTimeout(() => {
                  this.setVisibleRange();
                }, 150));
            }
            lockAnimation() {
              -1 === this.lockAnimationTimeoutId &&
                this.ngZone.runOutsideAngular(() => {
                  (this.navListRef.nativeElement.style.transition = "none"),
                    (this.lockAnimationTimeoutId = setTimeout(() => {
                      (this.navListRef.nativeElement.style.transition = ""),
                        (this.lockAnimationTimeoutId = -1);
                    }, 150));
                });
            }
            setTransform(e, n) {
              this.navListRef.nativeElement.style.transform = `translate(${e}px, ${n}px)`;
            }
            clampTransformX(e) {
              const n = this.wrapperWidth - this.scrollListWidth;
              return "rtl" === this.getLayoutDirection()
                ? Math.max(Math.min(n, e), 0)
                : Math.min(Math.max(n, e), 0);
            }
            clampTransformY(e) {
              return Math.min(
                Math.max(this.wrapperHeight - this.scrollListHeight, e),
                0
              );
            }
            updateScrollListPosition() {
              this.resetSizes(),
                (this.transformX = this.clampTransformX(this.transformX)),
                (this.transformY = this.clampTransformY(this.transformY)),
                this.setVisibleRange(),
                this.setPingStatus(),
                this.keyManager &&
                  (this.keyManager.updateActiveItem(
                    this.keyManager.activeItemIndex
                  ),
                  this.keyManager.activeItem &&
                    this.scrollToTab(this.keyManager.activeItem));
            }
            resetSizes() {
              (this.addButtonWidth = this.addBtnRef
                ? this.addBtnRef.getElementWidth()
                : 0),
                (this.addButtonHeight = this.addBtnRef
                  ? this.addBtnRef.getElementHeight()
                  : 0),
                (this.operationWidth = this.operationRef.getElementWidth()),
                (this.operationHeight = this.operationRef.getElementHeight()),
                (this.wrapperWidth =
                  this.navWarpRef.nativeElement.offsetWidth || 0),
                (this.wrapperHeight =
                  this.navWarpRef.nativeElement.offsetHeight || 0),
                (this.scrollListHeight =
                  this.navListRef.nativeElement.offsetHeight || 0),
                (this.scrollListWidth =
                  this.navListRef.nativeElement.offsetWidth || 0);
            }
            alignInkBarToSelectedTab() {
              const e =
                  this.items && this.items.length
                    ? this.items.toArray()[this.selectedIndex]
                    : null,
                n = e ? e.elementRef.nativeElement : null;
              n && this.inkBar.alignToElement(n.parentElement);
            }
            setPingStatus() {
              const e = { top: !1, right: !1, bottom: !1, left: !1 },
                n = this.navWarpRef.nativeElement;
              "horizontal" === this.position
                ? "rtl" === this.getLayoutDirection()
                  ? ((e.right = this.transformX > 0),
                    (e.left =
                      this.transformX + this.wrapperWidth <
                      this.scrollListWidth))
                  : ((e.left = this.transformX < 0),
                    (e.right =
                      -this.transformX + this.wrapperWidth <
                      this.scrollListWidth))
                : ((e.top = this.transformY < 0),
                  (e.bottom =
                    -this.transformY + this.wrapperHeight <
                    this.scrollListHeight)),
                Object.keys(e).forEach((o) => {
                  const r = `ant-tabs-nav-wrap-ping-${o}`;
                  e[o] ? n.classList.add(r) : n.classList.remove(r);
                });
            }
            setVisibleRange() {
              let e, n, o, r, v, T;
              const x = this.items.toArray(),
                B = { width: 0, height: 0, left: 0, top: 0, right: 0 },
                X = (M) => {
                  let et;
                  return (
                    (et =
                      "right" === n
                        ? x[0].left + x[0].width - x[M].left - x[M].width
                        : (x[M] || B)[n]),
                    et
                  );
                };
              "horizontal" === this.position
                ? ((e = "width"),
                  (r = this.wrapperWidth),
                  (v =
                    this.scrollListWidth -
                    (this.hiddenItems.length ? this.operationWidth : 0)),
                  (T = this.addButtonWidth),
                  (o = Math.abs(this.transformX)),
                  "rtl" === this.getLayoutDirection()
                    ? ((n = "right"),
                      (this.pingRight = this.transformX > 0),
                      (this.pingLeft =
                        this.transformX + this.wrapperWidth <
                        this.scrollListWidth))
                    : ((this.pingLeft = this.transformX < 0),
                      (this.pingRight =
                        -this.transformX + this.wrapperWidth <
                        this.scrollListWidth),
                      (n = "left")))
                : ((e = "height"),
                  (r = this.wrapperHeight),
                  (v =
                    this.scrollListHeight -
                    (this.hiddenItems.length ? this.operationHeight : 0)),
                  (T = this.addButtonHeight),
                  (n = "top"),
                  (o = -this.transformY),
                  (this.pingTop = this.transformY < 0),
                  (this.pingBottom =
                    -this.transformY + this.wrapperHeight <
                    this.scrollListHeight));
              let H = r;
              if ((v + T > r && (H = r - T), !x.length))
                return (this.hiddenItems = []), void this.cdr.markForCheck();
              const j = x.length;
              let Ft = j;
              for (let M = 0; M < j; M += 1)
                if (X(M) + (x[M] || B)[e] > o + H) {
                  Ft = M - 1;
                  break;
                }
              let Nt = 0;
              for (let M = j - 1; M >= 0; M -= 1)
                if (X(M) < o) {
                  Nt = M + 1;
                  break;
                }
              const qt = x.slice(0, Nt),
                te = x.slice(Ft + 1);
              (this.hiddenItems = [...qt, ...te]), this.cdr.markForCheck();
            }
            getLayoutDirection() {
              return this.dir && "rtl" === this.dir.value ? "rtl" : "ltr";
            }
            setTabFocus(e) {}
            ngOnChanges(e) {
              const { position: n } = e;
              n &&
                !n.isFirstChange() &&
                (this.alignInkBarToSelectedTab(),
                this.lockAnimation(),
                this.updateScrollListPosition());
            }
          }
          return (
            ((s = c).ɵfac = function (e) {
              return new (e || s)(
                t.Y36(t.sBO),
                t.Y36(t.R0b),
                t.Y36(m.rL),
                t.Y36(W.D3),
                t.Y36(A.Is, 8)
              );
            }),
            (s.ɵcmp = t.Xpm({
              type: s,
              selectors: [["nz-tabs-nav"]],
              contentQueries: function (e, n, o) {
                if ((1 & e && t.Suo(o, Ct, 5), 2 & e)) {
                  let r;
                  t.iGM((r = t.CRH())) && (n.items = r);
                }
              },
              viewQuery: function (e, n) {
                if (
                  (1 & e &&
                    (t.Gf(l, 7),
                    t.Gf(f, 7),
                    t.Gf(xt, 7),
                    t.Gf(ht, 5),
                    t.Gf(Tt, 7)),
                  2 & e)
                ) {
                  let o;
                  t.iGM((o = t.CRH())) && (n.navWarpRef = o.first),
                    t.iGM((o = t.CRH())) && (n.navListRef = o.first),
                    t.iGM((o = t.CRH())) && (n.operationRef = o.first),
                    t.iGM((o = t.CRH())) && (n.addBtnRef = o.first),
                    t.iGM((o = t.CRH())) && (n.inkBar = o.first);
                }
              },
              hostAttrs: ["role", "tablist", 1, "ant-tabs-nav"],
              hostBindings: function (e, n) {
                1 & e &&
                  t.NdJ("keydown", function (r) {
                    return n.handleKeydown(r);
                  });
              },
              inputs: {
                position: "position",
                addable: "addable",
                hideBar: "hideBar",
                addIcon: "addIcon",
                inkBarAnimated: "inkBarAnimated",
                extraTemplate: "extraTemplate",
                selectedIndex: "selectedIndex",
              },
              outputs: {
                indexFocused: "indexFocused",
                selectFocusedIndex: "selectFocusedIndex",
                addClicked: "addClicked",
                tabScroll: "tabScroll",
              },
              exportAs: ["nzTabsNav"],
              features: [t.TTD],
              ngContentSelectors: P,
              decls: 9,
              vars: 16,
              consts: [
                [1, "ant-tabs-nav-wrap"],
                ["navWarp", ""],
                [
                  "nzTabScrollList",
                  "",
                  1,
                  "ant-tabs-nav-list",
                  3,
                  "offsetChange",
                  "tabScroll",
                ],
                ["navList", ""],
                ["nz-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"],
                ["nz-tabs-ink-bar", "", 3, "hidden", "position", "animated"],
                [3, "addIcon", "addable", "items", "addClicked", "selected"],
                ["class", "ant-tabs-extra-content", 4, "ngIf"],
                ["nz-tab-add-button", "", 3, "addIcon", "click"],
                [1, "ant-tabs-extra-content"],
                [3, "ngTemplateOutlet"],
              ],
              template: function (e, n) {
                1 & e &&
                  (t.F$t(),
                  t.TgZ(0, "div", 0, 1)(2, "div", 2, 3),
                  t.NdJ("offsetChange", function (r) {
                    return n.onOffsetChange(r);
                  })("tabScroll", function (r) {
                    return n.tabScroll.emit(r);
                  }),
                  t.Hsn(4),
                  t.YNc(5, d, 1, 1, "button", 4),
                  t._UZ(6, "div", 5),
                  t.qZA()(),
                  t.TgZ(7, "nz-tab-nav-operation", 6),
                  t.NdJ("addClicked", function () {
                    return n.addClicked.emit();
                  })("selected", function (r) {
                    return n.onSelectedFromMenu(r);
                  }),
                  t.qZA(),
                  t.YNc(8, g, 2, 1, "div", 7)),
                  2 & e &&
                    (t.ekj("ant-tabs-nav-wrap-ping-left", n.pingLeft)(
                      "ant-tabs-nav-wrap-ping-right",
                      n.pingRight
                    )("ant-tabs-nav-wrap-ping-top", n.pingTop)(
                      "ant-tabs-nav-wrap-ping-bottom",
                      n.pingBottom
                    ),
                    t.xp6(5),
                    t.Q6J("ngIf", n.showAddButton),
                    t.xp6(1),
                    t.Q6J("hidden", n.hideBar)("position", n.position)(
                      "animated",
                      n.inkBarAnimated
                    ),
                    t.xp6(1),
                    t.Q6J("addIcon", n.addIcon)("addable", n.addable)(
                      "items",
                      n.hiddenItems
                    ),
                    t.xp6(1),
                    t.Q6J("ngIf", n.extraTemplate));
              },
              dependencies: [b.O5, b.tP, Tt, Pt, xt, ht],
              encapsulation: 2,
              changeDetection: 0,
            })),
            c
          );
        })(),
        Lt = (() => {
          var s;
          class c {
            constructor() {
              (this.content = null),
                (this.active = !1),
                (this.tabPaneAnimated = !0),
                (this.forceRender = !1);
            }
          }
          return (
            ((s = c).ɵfac = function (e) {
              return new (e || s)();
            }),
            (s.ɵcmp = t.Xpm({
              type: s,
              selectors: [["", "nz-tab-body", ""]],
              hostAttrs: [1, "ant-tabs-tabpane"],
              hostVars: 12,
              hostBindings: function (e, n) {
                2 & e &&
                  (t.uIk("tabindex", n.active ? 0 : -1)(
                    "aria-hidden",
                    !n.active
                  ),
                  t.Udp(
                    "visibility",
                    n.tabPaneAnimated ? (n.active ? null : "hidden") : null
                  )("height", n.tabPaneAnimated ? (n.active ? null : 0) : null)(
                    "overflow-y",
                    n.tabPaneAnimated ? (n.active ? null : "none") : null
                  )("display", n.tabPaneAnimated || n.active ? null : "none"),
                  t.ekj("ant-tabs-tabpane-active", n.active));
              },
              inputs: {
                content: "content",
                active: "active",
                tabPaneAnimated: "tabPaneAnimated",
                forceRender: "forceRender",
              },
              exportAs: ["nzTabBody"],
              attrs: S,
              decls: 1,
              vars: 1,
              consts: [
                [4, "ngIf"],
                [3, "ngTemplateOutlet"],
              ],
              template: function (e, n) {
                1 & e && t.YNc(0, Y, 2, 1, "ng-container", 0),
                  2 & e && t.Q6J("ngIf", n.active || n.forceRender);
              },
              dependencies: [b.O5, b.tP],
              encapsulation: 2,
              changeDetection: 0,
            })),
            c
          );
        })(),
        Wt = (() => {
          var s;
          class c {
            constructor() {
              this.closeIcon = "close";
            }
          }
          return (
            ((s = c).ɵfac = function (e) {
              return new (e || s)();
            }),
            (s.ɵcmp = t.Xpm({
              type: s,
              selectors: [
                ["nz-tab-close-button"],
                ["button", "nz-tab-close-button", ""],
              ],
              hostAttrs: [
                "aria-label",
                "Close tab",
                "type",
                "button",
                1,
                "ant-tabs-tab-remove",
              ],
              inputs: { closeIcon: "closeIcon" },
              decls: 1,
              vars: 1,
              consts: [
                [4, "nzStringTemplateOutlet"],
                ["nz-icon", "", "nzTheme", "outline", 3, "nzType"],
              ],
              template: function (e, n) {
                1 & e && t.YNc(0, G, 2, 1, "ng-container", 0),
                  2 & e && t.Q6J("nzStringTemplateOutlet", n.closeIcon);
              },
              dependencies: [_.Ls, i.f],
              encapsulation: 2,
            })),
            c
          );
        })(),
        kt = (() => {
          var s;
          class c {
            constructor(e) {
              this.templateRef = e;
            }
          }
          return (
            ((s = c).ɵfac = function (e) {
              return new (e || s)(t.Y36(t.Rgc, 1));
            }),
            (s.ɵdir = t.lG2({
              type: s,
              selectors: [["ng-template", "nzTabLink", ""]],
              exportAs: ["nzTabLinkTemplate"],
            })),
            c
          );
        })(),
        It = (() => {
          var s;
          class c {
            constructor(e, n) {
              (this.elementRef = e), (this.routerLink = n);
            }
          }
          return (
            ((s = c).ɵfac = function (e) {
              return new (e || s)(t.Y36(t.SBq), t.Y36(K.rH, 10));
            }),
            (s.ɵdir = t.lG2({
              type: s,
              selectors: [["a", "nz-tab-link", ""]],
              exportAs: ["nzTabLink"],
            })),
            c
          );
        })(),
        St = (() => {
          var s;
          class c {}
          return (
            ((s = c).ɵfac = function (e) {
              return new (e || s)();
            }),
            (s.ɵdir = t.lG2({
              type: s,
              selectors: [["", "nz-tab", ""]],
              exportAs: ["nzTab"],
            })),
            c
          );
        })();
      const wt = new t.OlP("NZ_TAB_SET");
      let Dt = (() => {
        var s;
        class c {
          get content() {
            return this.template || this.contentTemplate;
          }
          get label() {
            return this.nzTitle || this.nzTabLinkTemplateDirective?.templateRef;
          }
          constructor(e) {
            (this.closestTabSet = e),
              (this.nzTitle = ""),
              (this.nzClosable = !1),
              (this.nzCloseIcon = "close"),
              (this.nzDisabled = !1),
              (this.nzForceRender = !1),
              (this.nzSelect = new t.vpe()),
              (this.nzDeselect = new t.vpe()),
              (this.nzClick = new t.vpe()),
              (this.nzContextmenu = new t.vpe()),
              (this.template = null),
              (this.isActive = !1),
              (this.position = null),
              (this.origin = null),
              (this.stateChanges = new U.x());
          }
          ngOnChanges(e) {
            const { nzTitle: n, nzDisabled: o, nzForceRender: r } = e;
            (n || o || r) && this.stateChanges.next();
          }
          ngOnDestroy() {
            this.stateChanges.complete();
          }
        }
        return (
          ((s = c).ɵfac = function (e) {
            return new (e || s)(t.Y36(wt));
          }),
          (s.ɵcmp = t.Xpm({
            type: s,
            selectors: [["nz-tab"]],
            contentQueries: function (e, n, o) {
              if (
                (1 & e &&
                  (t.Suo(o, kt, 5), t.Suo(o, St, 5, t.Rgc), t.Suo(o, It, 5)),
                2 & e)
              ) {
                let r;
                t.iGM((r = t.CRH())) &&
                  (n.nzTabLinkTemplateDirective = r.first),
                  t.iGM((r = t.CRH())) && (n.template = r.first),
                  t.iGM((r = t.CRH())) && (n.linkDirective = r.first);
              }
            },
            viewQuery: function (e, n) {
              if ((1 & e && t.Gf($, 7), 2 & e)) {
                let o;
                t.iGM((o = t.CRH())) && (n.contentTemplate = o.first);
              }
            },
            inputs: {
              nzTitle: "nzTitle",
              nzClosable: "nzClosable",
              nzCloseIcon: "nzCloseIcon",
              nzDisabled: "nzDisabled",
              nzForceRender: "nzForceRender",
            },
            outputs: {
              nzSelect: "nzSelect",
              nzDeselect: "nzDeselect",
              nzClick: "nzClick",
              nzContextmenu: "nzContextmenu",
            },
            exportAs: ["nzTab"],
            features: [t.TTD],
            ngContentSelectors: rt,
            decls: 4,
            vars: 0,
            consts: [
              ["tabLinkTemplate", ""],
              ["contentTemplate", ""],
            ],
            template: function (e, n) {
              1 & e &&
                (t.F$t(at),
                t.YNc(0, R, 1, 0, "ng-template", null, 0, t.W1O),
                t.YNc(2, tt, 1, 0, "ng-template", null, 1, t.W1O));
            },
            encapsulation: 2,
            changeDetection: 0,
          })),
          (0, k.gn)([(0, O.yF)()], c.prototype, "nzClosable", void 0),
          (0, k.gn)([(0, O.yF)()], c.prototype, "nzDisabled", void 0),
          (0, k.gn)([(0, O.yF)()], c.prototype, "nzForceRender", void 0),
          c
        );
      })();
      class Jt {}
      let jt = 0,
        Bt = (() => {
          var s;
          class c {
            get nzSelectedIndex() {
              return this.selectedIndex;
            }
            set nzSelectedIndex(e) {
              this.indexToSelect = (0, y.su)(e, null);
            }
            get position() {
              return -1 === ["top", "bottom"].indexOf(this.nzTabPosition)
                ? "vertical"
                : "horizontal";
            }
            get addable() {
              return "editable-card" === this.nzType && !this.nzHideAdd;
            }
            get closable() {
              return "editable-card" === this.nzType;
            }
            get line() {
              return "line" === this.nzType;
            }
            get inkBarAnimated() {
              return (
                this.line &&
                ("boolean" == typeof this.nzAnimated
                  ? this.nzAnimated
                  : this.nzAnimated.inkBar)
              );
            }
            get tabPaneAnimated() {
              return (
                "horizontal" === this.position &&
                this.line &&
                ("boolean" == typeof this.nzAnimated
                  ? this.nzAnimated
                  : this.nzAnimated.tabPane)
              );
            }
            constructor(e, n, o, r, v) {
              (this.nzConfigService = e),
                (this.ngZone = n),
                (this.cdr = o),
                (this.directionality = r),
                (this.router = v),
                (this._nzModuleName = "tabs"),
                (this.nzTabPosition = "top"),
                (this.nzCanDeactivate = null),
                (this.nzAddIcon = "plus"),
                (this.nzTabBarStyle = null),
                (this.nzType = "line"),
                (this.nzSize = "default"),
                (this.nzAnimated = !0),
                (this.nzTabBarGutter = void 0),
                (this.nzHideAdd = !1),
                (this.nzCentered = !1),
                (this.nzHideAll = !1),
                (this.nzLinkRouter = !1),
                (this.nzLinkExact = !0),
                (this.nzSelectChange = new t.vpe(!0)),
                (this.nzSelectedIndexChange = new t.vpe()),
                (this.nzTabListScroll = new t.vpe()),
                (this.nzClose = new t.vpe()),
                (this.nzAdd = new t.vpe()),
                (this.allTabs = new t.n_E()),
                (this.tabs = new t.n_E()),
                (this.dir = "ltr"),
                (this.destroy$ = new U.x()),
                (this.indexToSelect = 0),
                (this.selectedIndex = null),
                (this.tabLabelSubscription = I.w0.EMPTY),
                (this.tabsSubscription = I.w0.EMPTY),
                (this.canDeactivateSubscription = I.w0.EMPTY),
                (this.tabSetId = jt++);
            }
            ngOnInit() {
              (this.dir = this.directionality.value),
                this.directionality.change
                  ?.pipe((0, N.R)(this.destroy$))
                  .subscribe((e) => {
                    (this.dir = e), this.cdr.detectChanges();
                  });
            }
            ngOnDestroy() {
              this.destroy$.next(),
                this.destroy$.complete(),
                this.tabs.destroy(),
                this.tabLabelSubscription.unsubscribe(),
                this.tabsSubscription.unsubscribe(),
                this.canDeactivateSubscription.unsubscribe();
            }
            ngAfterContentInit() {
              this.ngZone.runOutsideAngular(() => {
                Promise.resolve().then(() => this.setUpRouter());
              }),
                this.subscribeToTabLabels(),
                this.subscribeToAllTabChanges(),
                (this.tabsSubscription = this.tabs.changes.subscribe(() => {
                  if (
                    this.clampTabIndex(this.indexToSelect) ===
                    this.selectedIndex
                  ) {
                    const n = this.tabs.toArray();
                    for (let o = 0; o < n.length; o++)
                      if (n[o].isActive) {
                        this.indexToSelect = this.selectedIndex = o;
                        break;
                      }
                  }
                  this.subscribeToTabLabels(), this.cdr.markForCheck();
                }));
            }
            ngAfterContentChecked() {
              const e = (this.indexToSelect = this.clampTabIndex(
                this.indexToSelect
              ));
              if (this.selectedIndex !== e) {
                const n = null == this.selectedIndex;
                n || this.nzSelectChange.emit(this.createChangeEvent(e)),
                  Promise.resolve().then(() => {
                    this.tabs.forEach((o, r) => (o.isActive = r === e)),
                      n || this.nzSelectedIndexChange.emit(e);
                  });
              }
              this.tabs.forEach((n, o) => {
                (n.position = o - e),
                  null != this.selectedIndex &&
                    0 === n.position &&
                    !n.origin &&
                    (n.origin = e - this.selectedIndex);
              }),
                this.selectedIndex !== e &&
                  ((this.selectedIndex = e), this.cdr.markForCheck());
            }
            onClose(e, n) {
              n.preventDefault(),
                n.stopPropagation(),
                this.nzClose.emit({ index: e });
            }
            onAdd() {
              this.nzAdd.emit();
            }
            clampTabIndex(e) {
              return Math.min(this.tabs.length - 1, Math.max(e || 0, 0));
            }
            createChangeEvent(e) {
              const n = new Jt();
              return (
                (n.index = e),
                this.tabs &&
                  this.tabs.length &&
                  ((n.tab = this.tabs.toArray()[e]),
                  this.tabs.forEach((o, r) => {
                    r !== e && o.nzDeselect.emit();
                  }),
                  n.tab.nzSelect.emit()),
                n
              );
            }
            subscribeToTabLabels() {
              this.tabLabelSubscription &&
                this.tabLabelSubscription.unsubscribe(),
                (this.tabLabelSubscription = (0, Q.T)(
                  ...this.tabs.map((e) => e.stateChanges)
                ).subscribe(() => this.cdr.markForCheck()));
            }
            subscribeToAllTabChanges() {
              this.allTabs.changes
                .pipe((0, q.O)(this.allTabs))
                .subscribe((e) => {
                  this.tabs.reset(e.filter((n) => n.closestTabSet === this)),
                    this.tabs.notifyOnChanges();
                });
            }
            canDeactivateFun(e, n) {
              return "function" == typeof this.nzCanDeactivate
                ? (0, O.lN)(this.nzCanDeactivate(e, n)).pipe(
                    (0, ct.P)(),
                    (0, N.R)(this.destroy$)
                  )
                : (0, V.of)(!0);
            }
            clickNavItem(e, n, o) {
              e.nzDisabled ||
                (e.nzClick.emit(),
                this.isRouterLinkClickEvent(n, o) || this.setSelectedIndex(n));
            }
            isRouterLinkClickEvent(e, n) {
              const o = n.target;
              return (
                !!this.nzLinkRouter &&
                !!this.tabs
                  .toArray()
                  [e]?.linkDirective?.elementRef.nativeElement.contains(o)
              );
            }
            contextmenuNavItem(e, n) {
              e.nzDisabled || e.nzContextmenu.emit(n);
            }
            setSelectedIndex(e) {
              this.canDeactivateSubscription.unsubscribe(),
                (this.canDeactivateSubscription = this.canDeactivateFun(
                  this.selectedIndex,
                  e
                ).subscribe((n) => {
                  n &&
                    ((this.nzSelectedIndex = e),
                    (this.tabNavBarRef.focusIndex = e),
                    this.cdr.markForCheck());
                }));
            }
            getTabIndex(e, n) {
              return e.nzDisabled ? null : this.selectedIndex === n ? 0 : -1;
            }
            getTabContentId(e) {
              return `nz-tabs-${this.tabSetId}-tab-${e}`;
            }
            setUpRouter() {
              if (this.nzLinkRouter) {
                if (!this.router)
                  throw new Error(
                    `${_t.Bq} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`
                  );
                this.router.events
                  .pipe(
                    (0, N.R)(this.destroy$),
                    (0, ot.h)((e) => e instanceof K.m2),
                    (0, q.O)(!0),
                    (0, z.g)(0)
                  )
                  .subscribe(() => {
                    this.updateRouterActive(), this.cdr.markForCheck();
                  });
              }
            }
            updateRouterActive() {
              if (this.router.navigated) {
                const e = this.findShouldActiveTabIndex();
                e !== this.selectedIndex && this.setSelectedIndex(e),
                  (this.nzHideAll = -1 === e);
              }
            }
            findShouldActiveTabIndex() {
              const e = this.tabs.toArray(),
                n = this.isLinkActive(this.router);
              return e.findIndex((o) => {
                const r = o.linkDirective;
                return !!r && n(r.routerLink);
              });
            }
            isLinkActive(e) {
              return (n) =>
                !!n &&
                e.isActive(n.urlTree || "", {
                  paths: this.nzLinkExact ? "exact" : "subset",
                  queryParams: this.nzLinkExact ? "exact" : "subset",
                  fragment: "ignored",
                  matrixParams: "ignored",
                });
            }
            getTabContentMarginValue() {
              return 100 * -(this.nzSelectedIndex || 0);
            }
            getTabContentMarginLeft() {
              return this.tabPaneAnimated && "rtl" !== this.dir
                ? `${this.getTabContentMarginValue()}%`
                : "";
            }
            getTabContentMarginRight() {
              return this.tabPaneAnimated && "rtl" === this.dir
                ? `${this.getTabContentMarginValue()}%`
                : "";
            }
          }
          return (
            ((s = c).ɵfac = function (e) {
              return new (e || s)(
                t.Y36(J.jY),
                t.Y36(t.R0b),
                t.Y36(t.sBO),
                t.Y36(A.Is, 8),
                t.Y36(K.F0, 8)
              );
            }),
            (s.ɵcmp = t.Xpm({
              type: s,
              selectors: [["nz-tabset"]],
              contentQueries: function (e, n, o) {
                if ((1 & e && t.Suo(o, Dt, 5), 2 & e)) {
                  let r;
                  t.iGM((r = t.CRH())) && (n.allTabs = r);
                }
              },
              viewQuery: function (e, n) {
                if ((1 & e && t.Gf(yt, 5), 2 & e)) {
                  let o;
                  t.iGM((o = t.CRH())) && (n.tabNavBarRef = o.first);
                }
              },
              hostAttrs: [1, "ant-tabs"],
              hostVars: 24,
              hostBindings: function (e, n) {
                2 & e &&
                  t.ekj(
                    "ant-tabs-card",
                    "card" === n.nzType || "editable-card" === n.nzType
                  )("ant-tabs-editable", "editable-card" === n.nzType)(
                    "ant-tabs-editable-card",
                    "editable-card" === n.nzType
                  )("ant-tabs-centered", n.nzCentered)(
                    "ant-tabs-rtl",
                    "rtl" === n.dir
                  )("ant-tabs-top", "top" === n.nzTabPosition)(
                    "ant-tabs-bottom",
                    "bottom" === n.nzTabPosition
                  )("ant-tabs-left", "left" === n.nzTabPosition)(
                    "ant-tabs-right",
                    "right" === n.nzTabPosition
                  )("ant-tabs-default", "default" === n.nzSize)(
                    "ant-tabs-small",
                    "small" === n.nzSize
                  )("ant-tabs-large", "large" === n.nzSize);
              },
              inputs: {
                nzSelectedIndex: "nzSelectedIndex",
                nzTabPosition: "nzTabPosition",
                nzTabBarExtraContent: "nzTabBarExtraContent",
                nzCanDeactivate: "nzCanDeactivate",
                nzAddIcon: "nzAddIcon",
                nzTabBarStyle: "nzTabBarStyle",
                nzType: "nzType",
                nzSize: "nzSize",
                nzAnimated: "nzAnimated",
                nzTabBarGutter: "nzTabBarGutter",
                nzHideAdd: "nzHideAdd",
                nzCentered: "nzCentered",
                nzHideAll: "nzHideAll",
                nzLinkRouter: "nzLinkRouter",
                nzLinkExact: "nzLinkExact",
              },
              outputs: {
                nzSelectChange: "nzSelectChange",
                nzSelectedIndexChange: "nzSelectedIndexChange",
                nzTabListScroll: "nzTabListScroll",
                nzClose: "nzClose",
                nzAdd: "nzAdd",
              },
              exportAs: ["nzTabset"],
              features: [t._Bn([{ provide: wt, useExisting: s }])],
              decls: 4,
              vars: 16,
              consts: [
                [
                  3,
                  "ngStyle",
                  "selectedIndex",
                  "inkBarAnimated",
                  "addable",
                  "addIcon",
                  "hideBar",
                  "position",
                  "extraTemplate",
                  "tabScroll",
                  "selectFocusedIndex",
                  "addClicked",
                  4,
                  "ngIf",
                ],
                [1, "ant-tabs-content-holder"],
                [1, "ant-tabs-content"],
                [
                  "nz-tab-body",
                  "",
                  3,
                  "active",
                  "content",
                  "forceRender",
                  "tabPaneAnimated",
                  4,
                  "ngFor",
                  "ngForOf",
                ],
                [
                  3,
                  "ngStyle",
                  "selectedIndex",
                  "inkBarAnimated",
                  "addable",
                  "addIcon",
                  "hideBar",
                  "position",
                  "extraTemplate",
                  "tabScroll",
                  "selectFocusedIndex",
                  "addClicked",
                ],
                [
                  "class",
                  "ant-tabs-tab",
                  3,
                  "margin-right",
                  "margin-bottom",
                  "ant-tabs-tab-active",
                  "ant-tabs-tab-disabled",
                  "click",
                  "contextmenu",
                  4,
                  "ngFor",
                  "ngForOf",
                ],
                [1, "ant-tabs-tab", 3, "click", "contextmenu"],
                [
                  "role",
                  "tab",
                  "nzTabNavItem",
                  "",
                  "cdkMonitorElementFocus",
                  "",
                  1,
                  "ant-tabs-tab-btn",
                  3,
                  "disabled",
                  "tab",
                  "active",
                ],
                [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"],
                ["nz-tab-close-button", "", 3, "closeIcon", "click", 4, "ngIf"],
                ["nz-tab-close-button", "", 3, "closeIcon", "click"],
                [
                  "nz-tab-body",
                  "",
                  3,
                  "active",
                  "content",
                  "forceRender",
                  "tabPaneAnimated",
                ],
              ],
              template: function (e, n) {
                1 & e &&
                  (t.YNc(0, Gt, 2, 9, "nz-tabs-nav", 0),
                  t.TgZ(1, "div", 1)(2, "div", 2),
                  t.YNc(3, Zt, 1, 4, "div", 3),
                  t.qZA()()),
                  2 & e &&
                    (t.Q6J("ngIf", n.tabs.length || n.addable),
                    t.xp6(2),
                    t.Udp("margin-left", n.getTabContentMarginLeft())(
                      "margin-right",
                      n.getTabContentMarginRight()
                    ),
                    t.ekj("ant-tabs-content-top", "top" === n.nzTabPosition)(
                      "ant-tabs-content-bottom",
                      "bottom" === n.nzTabPosition
                    )("ant-tabs-content-left", "left" === n.nzTabPosition)(
                      "ant-tabs-content-right",
                      "right" === n.nzTabPosition
                    )("ant-tabs-content-animated", n.tabPaneAnimated),
                    t.xp6(1),
                    t.Q6J("ngForOf", n.tabs));
              },
              dependencies: [b.sg, b.O5, b.PC, i.f, F.kH, yt, Ct, Wt, Lt],
              encapsulation: 2,
            })),
            (0, k.gn)([(0, J.oS)()], c.prototype, "nzType", void 0),
            (0, k.gn)([(0, J.oS)()], c.prototype, "nzSize", void 0),
            (0, k.gn)([(0, J.oS)()], c.prototype, "nzAnimated", void 0),
            (0, k.gn)([(0, J.oS)()], c.prototype, "nzTabBarGutter", void 0),
            (0, k.gn)([(0, O.yF)()], c.prototype, "nzHideAdd", void 0),
            (0, k.gn)([(0, O.yF)()], c.prototype, "nzCentered", void 0),
            (0, k.gn)([(0, O.yF)()], c.prototype, "nzHideAll", void 0),
            (0, k.gn)([(0, O.yF)()], c.prototype, "nzLinkRouter", void 0),
            (0, k.gn)([(0, O.yF)()], c.prototype, "nzLinkExact", void 0),
            c
          );
        })(),
        Vt = (() => {
          var s;
          class c {}
          return (
            ((s = c).ɵfac = function (e) {
              return new (e || s)();
            }),
            (s.ɵmod = t.oAB({ type: s })),
            (s.ɵinj = t.cJS({
              imports: [A.vT, b.ez, ut.Q8, _.PV, i.T, lt.ud, F.rt, m.ZD, h.b1],
            })),
            c
          );
        })();
    },
  },
]);
