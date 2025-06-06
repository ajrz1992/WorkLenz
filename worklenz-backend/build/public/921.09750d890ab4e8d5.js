"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [921],
  {
    38265: (k, D, l) => {
      l.d(D, { u: () => b });
      var C = l(96814),
        m = l(8083),
        f = l(65879);
      let b = (() => {
        var T;
        class M {}
        return (
          ((T = M).ɵfac = function (P) {
            return new (P || T)();
          }),
          (T.ɵcmp = f.Xpm({
            type: T,
            selectors: [["worklenz-na"]],
            standalone: !0,
            features: [f.jDz],
            decls: 2,
            vars: 1,
            consts: [["nz-typography", "", 3, "nzType"]],
            template: function (P, h) {
              1 & P && (f.TgZ(0, "span", 0), f._uU(1, "-"), f.qZA()),
                2 & P && f.Q6J("nzType", "secondary");
            },
            dependencies: [C.ez, m.ZJ, m.ZU],
            changeDetection: 0,
          })),
          M
        );
      })();
    },
    47381: (k, D, l) => {
      l.d(D, { t: () => T });
      var C = l(96814),
        m = l(62595),
        f = l(65879);
      function b(M, y) {
        if ((1 & M && f._UZ(0, "span", 4), 2 & M)) {
          const P = f.oxw();
          f.Q6J("nzType", P.icon)("nzTheme", "outline");
        }
      }
      let T = (() => {
        var M;
        class y {
          constructor() {
            this.icon = null;
          }
        }
        return (
          ((M = y).ɵfac = function (h) {
            return new (h || M)();
          }),
          (M.ɵcmp = f.Xpm({
            type: M,
            selectors: [["worklenz-rpt-drawer-title"]],
            inputs: { title: "title", icon: "icon" },
            standalone: !0,
            features: [f.jDz],
            decls: 7,
            vars: 4,
            consts: [
              [1, "d-flex", "align-items-center"],
              ["nz-icon", "", 3, "nzType", "nzTheme"],
              [
                "nz-icon",
                "",
                "class",
                "ms-2",
                3,
                "nzType",
                "nzTheme",
                4,
                "ngIf",
              ],
              [1, "ellipsis"],
              ["nz-icon", "", 1, "ms-2", 3, "nzType", "nzTheme"],
            ],
            template: function (h, g) {
              1 & h &&
                (f.TgZ(0, "div", 0),
                f._UZ(1, "span", 1),
                f._uU(2, "\xa0 "),
                f.YNc(3, b, 1, 2, "span", 2),
                f._uU(4, "\xa0 "),
                f.TgZ(5, "span", 3),
                f._uU(6),
                f.qZA()()),
                2 & h &&
                  (f.xp6(1),
                  f.Q6J("nzType", "left")("nzTheme", "outline"),
                  f.xp6(2),
                  f.Q6J("ngIf", g.icon),
                  f.xp6(3),
                  f.Oqu(g.title));
            },
            dependencies: [C.ez, C.O5, m.PV, m.Ls],
            styles: [
              ".ellipsis[_ngcontent-%COMP%]{max-width:325px;line-height:24px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
            ],
            changeDetection: 0,
          })),
          y
        );
      })();
    },
    16196: (k, D, l) => {
      l.d(D, { U: () => T });
      var C = l(26857),
        m = l(69649),
        f = l(65879),
        b = l(69862);
      let T = (() => {
        var M;
        class y extends C.P {
          constructor(h) {
            super(),
              (this.http = h),
              (this.root = `${this.API_BASE_URL}/reporting`);
          }
          getInfo() {
            return this._get(this.http, `${this.root}/info`);
          }
          getOverviewStatistics(h = !1) {
            const g = (0, m.UK)({ archived: h });
            return this._get(this.http, `${this.root}/overview/statistics${g}`);
          }
          getOverviewTeams(h = !0) {
            const g = (0, m.UK)({ archived: h });
            return this._get(this.http, `${this.root}/overview/teams${g}`);
          }
          getOverviewProjects(h = null) {
            const g = (0, m.UK)(h);
            return this._get(this.http, `${this.root}/overview/projects${g}`);
          }
          getOverviewProjectsByTeam(h, g) {
            const z = (0, m.UK)({ member: g || null });
            return this._get(
              this.http,
              `${this.root}/overview/projects/${h}${z}`
            );
          }
          getOverviewMembersByTeam(h, g) {
            const z = (0, m.UK)({ archived: g });
            return this._get(
              this.http,
              `${this.root}/overview/members/${h}${z}`
            );
          }
          getTeamInfo(h, g = !1) {
            const z = (0, m.UK)({ archived: g });
            return this._get(
              this.http,
              `${this.root}/overview/team/info/${h}${z}`
            );
          }
          getProjectInfo(h) {
            return this._get(
              this.http,
              `${this.root}/overview/project/info/${h}`
            );
          }
          getMemberInfo(h = null) {
            const g = (0, m.UK)(h);
            return this._get(
              this.http,
              `${this.root}/overview/member/info/${g}`
            );
          }
          getTeamMemberInfo(h = null) {
            const g = (0, m.UK)(h);
            return this._get(
              this.http,
              `${this.root}/overview/team-member/info/${g}`
            );
          }
          getProjectMembers(h) {
            return this._get(
              this.http,
              `${this.root}/overview/project/members/${h}`
            );
          }
          getTasks(h, g) {
            const z = (0, m.UK)({ group: g });
            return this._get(
              this.http,
              `${this.root}/overview/project/tasks/${h}${z}`
            );
          }
          getTasksByMember(h, g = null, z, j = null, S = null) {
            const N = (0, m.UK)({
              project: g || null,
              is_multiple: z,
              teamId: j,
              only_single_member: S.only_single_member,
              duration: S.duration,
              date_range: S.date_range,
              archived: S.archived,
            });
            return this._get(
              this.http,
              `${this.root}/overview/member/tasks/${h}${N}`
            );
          }
          getProjects(h = null) {
            const g = (0, m.UK)(h);
            return this._get(this.http, `${this.root}/projects${g}`);
          }
          getProjectTimeLogs(h) {
            return this._post(this.http, `${this.root}/project-timelogs`, h);
          }
          getCategories(h) {
            return this._post(
              this.http,
              `${this.root}/allocation/categories`,
              h
            );
          }
          getAllocationProjects(h, g, z) {
            return this._post(this.http, `${this.root}/allocation/projects`, {
              selectedTeams: h,
              selectedCategories: g,
              noCategoryIncluded: z,
            });
          }
          getAllocationData(h = {}, g = !1) {
            const z = (0, m.UK)({ archived: g });
            return this._post(this.http, `${this.root}/allocation${z}`, h);
          }
          getMembers(h = null) {
            const g = (0, m.UK)(h);
            return this._get(this.http, `${this.root}/members${g}`);
          }
          getMemberProjects(h = null) {
            const g = (0, m.UK)(h);
            return this._get(this.http, `${this.root}/member-projects${g}`);
          }
          getProjectTimeSheets(h = {}, g = !1) {
            const z = (0, m.UK)({ archived: g });
            return this._post(
              this.http,
              `${this.root}/time-reports/projects${z}`,
              h
            );
          }
          getProjectEstimatedVsActual(h = {}, g = !1) {
            const z = (0, m.UK)({ archived: g });
            return this._post(
              this.http,
              `${this.root}/time-reports/estimated-vs-actual${z}`,
              h
            );
          }
          getMemberTimeSheets(h = {}, g = !1) {
            const z = (0, m.UK)({ archived: g });
            return this._post(
              this.http,
              `${this.root}/time-reports/members${z}`,
              h
            );
          }
          getSingleMemberActivities(h = null) {
            return this._post(
              this.http,
              `${this.root}/members/single-member-activities`,
              h
            );
          }
          getSingleMemberTimeLogs(h = null) {
            return this._post(
              this.http,
              `${this.root}/members/single-member-timelogs`,
              h
            );
          }
          getMemberTasksStats(h = null) {
            const g = (0, m.UK)(h);
            return this._get(
              this.http,
              `${this.root}/members/single-member-task-stats${g}`
            );
          }
          getSingleMemberProjects(h = null) {
            const g = (0, m.UK)(h);
            return this._get(
              this.http,
              `${this.root}/members/single-member-projects${g}`
            );
          }
        }
        return (
          ((M = y).ɵfac = function (h) {
            return new (h || M)(f.LFG(b.eN));
          }),
          (M.ɵprov = f.Yz7({ token: M, factory: M.ɵfac, providedIn: "root" })),
          y
        );
      })();
    },
    91921: (k, D, l) => {
      l.r(D), l.d(D, { ReportingModule: () => le });
      var C = l(96814),
        m = l(60095),
        f = l(62595),
        b = l(42840),
        T = l(62787),
        M = l(62612),
        y = l(92574),
        P = l(26254),
        h = l(33410),
        g = l(8083),
        z = l(35420),
        j = l(15861),
        S = l(86408),
        N = l(27782),
        Z = l(17816),
        p = l(98137),
        q = (function () {
          if (typeof window < "u") {
            if (window.devicePixelRatio) return window.devicePixelRatio;
            var t = window.screen;
            if (t) return (t.deviceXDPI || 1) / (t.logicalXDPI || 1);
          }
          return 1;
        })(),
        E_textSize = function (t, r, e) {
          var d,
            n = [].concat(r),
            o = n.length,
            i = t.font,
            a = 0;
          for (t.font = e.string, d = 0; d < o; ++d)
            a = Math.max(t.measureText(n[d]).width, a);
          return (t.font = i), { height: o * e.lineHeight, width: a };
        };
      function F(t, r) {
        var e = r.x,
          n = r.y;
        if (null === e) return { x: 0, y: -1 };
        if (null === n) return { x: 1, y: 0 };
        var o = t.x - e,
          i = t.y - n,
          a = Math.sqrt(o * o + i * i);
        return { x: a ? o / a : 0, y: a ? i / a : -1 };
      }
      var ct = 0,
        tt = 1,
        et = 2,
        nt = 4,
        rt = 8;
      function K(t, r, e) {
        var n = ct;
        return (
          t < e.left ? (n |= tt) : t > e.right && (n |= et),
          r < e.top ? (n |= rt) : r > e.bottom && (n |= nt),
          n
        );
      }
      function B(t, r) {
        var o,
          i,
          e = r.anchor,
          n = t;
        return (
          r.clamp &&
            (n = (function pt(t, r) {
              for (
                var u,
                  v,
                  c,
                  e = t.x0,
                  n = t.y0,
                  o = t.x1,
                  i = t.y1,
                  a = K(e, n, r),
                  d = K(o, i, r);
                a | d && !(a & d);

              )
                (u = a || d) & rt
                  ? ((v = e + ((o - e) * (r.top - n)) / (i - n)), (c = r.top))
                  : u & nt
                  ? ((v = e + ((o - e) * (r.bottom - n)) / (i - n)),
                    (c = r.bottom))
                  : u & et
                  ? ((c = n + ((i - n) * (r.right - e)) / (o - e)),
                    (v = r.right))
                  : u & tt &&
                    ((c = n + ((i - n) * (r.left - e)) / (o - e)),
                    (v = r.left)),
                  u === a
                    ? (a = K((e = v), (n = c), r))
                    : (d = K((o = v), (i = c), r));
              return { x0: e, x1: o, y0: n, y1: i };
            })(n, r.area)),
          "start" === e
            ? ((o = n.x0), (i = n.y0))
            : "end" === e
            ? ((o = n.x1), (i = n.y1))
            : ((o = (n.x0 + n.x1) / 2), (i = (n.y0 + n.y1) / 2)),
          (function gt(t, r, e, n, o) {
            switch (o) {
              case "center":
                e = n = 0;
                break;
              case "bottom":
                (e = 0), (n = 1);
                break;
              case "right":
                (e = 1), (n = 0);
                break;
              case "left":
                (e = -1), (n = 0);
                break;
              case "top":
                (e = 0), (n = -1);
                break;
              case "start":
                (e = -e), (n = -n);
                break;
              case "end":
                break;
              default:
                (o *= Math.PI / 180), (e = Math.cos(o)), (n = Math.sin(o));
            }
            return { x: t, y: r, vx: e, vy: n };
          })(o, i, t.vx, t.vy, r.align)
        );
      }
      var W = {
          arc: function (t, r) {
            var e = (t.startAngle + t.endAngle) / 2,
              n = Math.cos(e),
              o = Math.sin(e),
              i = t.innerRadius,
              a = t.outerRadius;
            return B(
              {
                x0: t.x + n * i,
                y0: t.y + o * i,
                x1: t.x + n * a,
                y1: t.y + o * a,
                vx: n,
                vy: o,
              },
              r
            );
          },
          point: function (t, r) {
            var e = F(t, r.origin),
              n = e.x * t.options.radius,
              o = e.y * t.options.radius;
            return B(
              {
                x0: t.x - n,
                y0: t.y - o,
                x1: t.x + n,
                y1: t.y + o,
                vx: e.x,
                vy: e.y,
              },
              r
            );
          },
          bar: function (t, r) {
            var e = F(t, r.origin),
              n = t.x,
              o = t.y,
              i = 0,
              a = 0;
            return (
              t.horizontal
                ? ((n = Math.min(t.x, t.base)), (i = Math.abs(t.base - t.x)))
                : ((o = Math.min(t.y, t.base)), (a = Math.abs(t.base - t.y))),
              B({ x0: n, y0: o + a, x1: n + i, y1: o, vx: e.x, vy: e.y }, r)
            );
          },
          fallback: function (t, r) {
            var e = F(t, r.origin);
            return B(
              {
                x0: t.x,
                y0: t.y,
                x1: t.x + (t.width || 0),
                y1: t.y + (t.height || 0),
                vx: e.x,
                vy: e.y,
              },
              r
            );
          },
        },
        $ = function (t) {
          return Math.round(t * q) / q;
        };
      function mt(t, r) {
        var e = r.chart.getDatasetMeta(r.datasetIndex).vScale;
        if (!e) return null;
        if (void 0 !== e.xCenter && void 0 !== e.yCenter)
          return { x: e.xCenter, y: e.yCenter };
        var n = e.getBasePixel();
        return t.horizontal ? { x: n, y: null } : { x: null, y: n };
      }
      function yt(t) {
        return t instanceof Z.qi
          ? W.arc
          : t instanceof Z.od
          ? W.point
          : t instanceof Z.ZL
          ? W.bar
          : W.fallback;
      }
      function Ct(t, r, e) {
        var n = t.shadowBlur,
          o = e.stroked,
          i = $(e.x),
          a = $(e.y),
          d = $(e.w);
        o && t.strokeText(r, i, a, d),
          e.filled &&
            (n && o && (t.shadowBlur = 0),
            t.fillText(r, i, a, d),
            n && o && (t.shadowBlur = n));
      }
      var ot = function (t, r, e, n) {
        var o = this;
        (o._config = t),
          (o._index = n),
          (o._model = null),
          (o._rects = null),
          (o._ctx = r),
          (o._el = e);
      };
      (0, p.a4)(ot.prototype, {
        _modelize: function (t, r, e, n) {
          var o = this,
            i = o._index,
            a = (0, p.a0)((0, p.a)([e.font, {}], n, i)),
            d = (0, p.a)([e.color, p.d.color], n, i);
          return {
            align: (0, p.a)([e.align, "center"], n, i),
            anchor: (0, p.a)([e.anchor, "center"], n, i),
            area: n.chart.chartArea,
            backgroundColor: (0, p.a)([e.backgroundColor, null], n, i),
            borderColor: (0, p.a)([e.borderColor, null], n, i),
            borderRadius: (0, p.a)([e.borderRadius, 0], n, i),
            borderWidth: (0, p.a)([e.borderWidth, 0], n, i),
            clamp: (0, p.a)([e.clamp, !1], n, i),
            clip: (0, p.a)([e.clip, !1], n, i),
            color: d,
            display: t,
            font: a,
            lines: r,
            offset: (0, p.a)([e.offset, 4], n, i),
            opacity: (0, p.a)([e.opacity, 1], n, i),
            origin: mt(o._el, n),
            padding: (0, p.E)((0, p.a)([e.padding, 4], n, i)),
            positioner: yt(o._el),
            rotation: (0, p.a)([e.rotation, 0], n, i) * (Math.PI / 180),
            size: E_textSize(o._ctx, r, a),
            textAlign: (0, p.a)([e.textAlign, "start"], n, i),
            textShadowBlur: (0, p.a)([e.textShadowBlur, 0], n, i),
            textShadowColor: (0, p.a)([e.textShadowColor, d], n, i),
            textStrokeColor: (0, p.a)([e.textStrokeColor, d], n, i),
            textStrokeWidth: (0, p.a)([e.textStrokeWidth, 0], n, i),
          };
        },
        update: function (t) {
          var a,
            d,
            u,
            r = this,
            e = null,
            n = null,
            o = r._index,
            i = r._config,
            v = (0, p.a)([i.display, !0], t, o);
          v &&
            ((d = (0, p.v)(
              (0, p.Q)(i.formatter, [(a = t.dataset.data[o]), t]),
              a
            )),
            (u = (0, p.k)(d)
              ? []
              : (function (t) {
                  var e,
                    r = [];
                  for (t = [].concat(t); t.length; )
                    "string" == typeof (e = t.pop())
                      ? r.unshift.apply(r, e.split("\n"))
                      : Array.isArray(e)
                      ? t.push.apply(t, e)
                      : (0, p.k)(t) || r.unshift("" + e);
                  return r;
                })(d)).length &&
              (n = (function ft(t) {
                var r = t.borderWidth || 0,
                  e = t.padding,
                  n = t.size.height,
                  o = t.size.width,
                  i = -o / 2,
                  a = -n / 2;
                return {
                  frame: {
                    x: i - e.left - r,
                    y: a - e.top - r,
                    w: o + e.width + 2 * r,
                    h: n + e.height + 2 * r,
                  },
                  text: { x: i, y: a, w: o, h: n },
                };
              })((e = r._modelize(v, u, i, t))))),
            (r._model = e),
            (r._rects = n);
        },
        geometry: function () {
          return this._rects ? this._rects.frame : {};
        },
        rotation: function () {
          return this._model ? this._model.rotation : 0;
        },
        visible: function () {
          return this._model && this._model.opacity;
        },
        model: function () {
          return this._model;
        },
        draw: function (t, r) {
          var a,
            n = t.ctx,
            o = this._model,
            i = this._rects;
          this.visible() &&
            (n.save(),
            o.clip &&
              ((a = o.area),
              n.beginPath(),
              n.rect(a.left, a.top, a.right - a.left, a.bottom - a.top),
              n.clip()),
            (n.globalAlpha = (function (t, r, e) {
              return Math.max(t, Math.min(r, e));
            })(0, o.opacity, 1)),
            n.translate($(r.x), $(r.y)),
            n.rotate(o.rotation),
            (function zt(t, r, e) {
              var n = e.backgroundColor,
                o = e.borderColor,
                i = e.borderWidth;
              (!n && (!o || !i)) ||
                (t.beginPath(),
                (function xt(t, r, e, n, o, i) {
                  var a = Math.PI / 2;
                  if (i) {
                    var d = Math.min(i, o / 2, n / 2),
                      u = r + d,
                      v = e + d,
                      c = r + n - d,
                      x = e + o - d;
                    t.moveTo(r, v),
                      u < c && v < x
                        ? (t.arc(u, v, d, -Math.PI, -a),
                          t.arc(c, v, d, -a, 0),
                          t.arc(c, x, d, 0, a),
                          t.arc(u, x, d, a, Math.PI))
                        : u < c
                        ? (t.moveTo(u, e),
                          t.arc(c, v, d, -a, a),
                          t.arc(u, v, d, a, Math.PI + a))
                        : v < x
                        ? (t.arc(u, v, d, -Math.PI, 0),
                          t.arc(u, x, d, 0, Math.PI))
                        : t.arc(u, v, d, -Math.PI, Math.PI),
                      t.closePath(),
                      t.moveTo(r, e);
                  } else t.rect(r, e, n, o);
                })(
                  t,
                  $(r.x) + i / 2,
                  $(r.y) + i / 2,
                  $(r.w) - i,
                  $(r.h) - i,
                  e.borderRadius
                ),
                t.closePath(),
                n && ((t.fillStyle = n), t.fill()),
                o &&
                  i &&
                  ((t.strokeStyle = o),
                  (t.lineWidth = i),
                  (t.lineJoin = "miter"),
                  t.stroke()));
            })(n, i.frame, o),
            (function bt(t, r, e, n) {
              var R,
                o = n.textAlign,
                i = n.color,
                a = !!i,
                d = n.font,
                u = r.length,
                v = n.textStrokeColor,
                c = n.textStrokeWidth,
                x = v && c;
              if (u && (a || x))
                for (
                  e = (function Mt(t, r, e) {
                    var n = e.lineHeight,
                      o = t.w,
                      i = t.x;
                    return (
                      "center" === r
                        ? (i += o / 2)
                        : ("end" === r || "right" === r) && (i += o),
                      { h: n, w: o, x: i, y: t.y + n / 2 }
                    );
                  })(e, o, d),
                    t.font = d.string,
                    t.textAlign = o,
                    t.textBaseline = "middle",
                    t.shadowBlur = n.textShadowBlur,
                    t.shadowColor = n.textShadowColor,
                    a && (t.fillStyle = i),
                    x &&
                      ((t.lineJoin = "round"),
                      (t.lineWidth = c),
                      (t.strokeStyle = v)),
                    R = 0,
                    u = r.length;
                  R < u;
                  ++R
                )
                  Ct(t, r[R], {
                    stroked: x,
                    filled: a,
                    w: e.w,
                    x: e.x,
                    y: e.y + e.h * R,
                  });
            })(n, o.lines, i.text, o),
            n.restore());
        },
      });
      var Tt = Number.MIN_SAFE_INTEGER || -9007199254740991,
        Ot = Number.MAX_SAFE_INTEGER || 9007199254740991;
      function U(t, r, e) {
        var n = Math.cos(e),
          o = Math.sin(e),
          i = r.x,
          a = r.y;
        return {
          x: i + n * (t.x - i) - o * (t.y - a),
          y: a + o * (t.x - i) + n * (t.y - a),
        };
      }
      function it(t, r) {
        var i,
          a,
          v,
          e = Ot,
          n = Tt,
          o = r.origin;
        for (i = 0; i < t.length; ++i)
          (v = r.vx * ((a = t[i]).x - o.x) + r.vy * (a.y - o.y)),
            (e = Math.min(e, v)),
            (n = Math.max(n, v));
        return { min: e, max: n };
      }
      function J(t, r) {
        var e = r.x - t.x,
          n = r.y - t.y,
          o = Math.sqrt(e * e + n * n);
        return { vx: (r.x - t.x) / o, vy: (r.y - t.y) / o, origin: t, ln: o };
      }
      var at = function () {
        (this._rotation = 0), (this._rect = { x: 0, y: 0, w: 0, h: 0 });
      };
      function st(t, r, e) {
        var n = r.positioner(t, r),
          o = n.vx,
          i = n.vy;
        if (!o && !i) return { x: n.x, y: n.y };
        var a = e.w,
          d = e.h,
          u = r.rotation,
          v = Math.abs((a / 2) * Math.cos(u)) + Math.abs((d / 2) * Math.sin(u)),
          c = Math.abs((a / 2) * Math.sin(u)) + Math.abs((d / 2) * Math.cos(u)),
          x = 1 / Math.max(Math.abs(o), Math.abs(i));
        return (
          (v *= o * x),
          (c *= i * x),
          { x: n.x + (v += r.offset * o), y: n.y + (c += r.offset * i) }
        );
      }
      (0, p.a4)(at.prototype, {
        center: function () {
          var t = this._rect;
          return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
        },
        update: function (t, r, e) {
          (this._rotation = e),
            (this._rect = { x: r.x + t.x, y: r.y + t.y, w: r.w, h: r.h });
        },
        contains: function (t) {
          var r = this,
            n = r._rect;
          return !(
            (t = U(t, r.center(), -r._rotation)).x < n.x - 1 ||
            t.y < n.y - 1 ||
            t.x > n.x + n.w + 2 ||
            t.y > n.y + n.h + 2
          );
        },
        intersects: function (t) {
          var o,
            i,
            a,
            r = this._points(),
            e = t._points(),
            n = [J(r[0], r[1]), J(r[0], r[3])];
          for (
            this._rotation !== t._rotation &&
              n.push(J(e[0], e[1]), J(e[0], e[3])),
              o = 0;
            o < n.length;
            ++o
          )
            if (
              ((i = it(r, n[o])),
              (a = it(e, n[o])),
              i.max < a.min || a.max < i.min)
            )
              return !1;
          return !0;
        },
        _points: function () {
          var t = this,
            r = t._rect,
            e = t._rotation,
            n = t.center();
          return [
            U({ x: r.x, y: r.y }, n, e),
            U({ x: r.x + r.w, y: r.y }, n, e),
            U({ x: r.x + r.w, y: r.y + r.h }, n, e),
            U({ x: r.x, y: r.y + r.h }, n, e),
          ];
        },
      });
      var I = {
          prepare: function (t) {
            var e,
              n,
              o,
              i,
              a,
              r = [];
            for (e = 0, o = t.length; e < o; ++e)
              for (n = 0, i = t[e].length; n < i; ++n)
                r.push((a = t[e][n])),
                  (a.$layout = {
                    _box: new at(),
                    _hidable: !1,
                    _visible: !0,
                    _set: e,
                    _idx: a._index,
                  });
            return (
              r.sort(function (d, u) {
                var v = d.$layout,
                  c = u.$layout;
                return v._idx === c._idx ? c._set - v._set : c._idx - v._idx;
              }),
              this.update(r),
              r
            );
          },
          update: function (t) {
            var e,
              n,
              o,
              i,
              a,
              r = !1;
            for (e = 0, n = t.length; e < n; ++e)
              (i = (o = t[e]).model()),
                ((a = o.$layout)._hidable = i && "auto" === i.display),
                (a._visible = o.visible()),
                (r |= a._hidable);
            r &&
              (function Dt(t) {
                var r, e, n, o, i, a, d;
                for (r = 0, e = t.length; r < e; ++r)
                  (o = (n = t[r]).$layout)._visible &&
                    ((d = new Proxy(n._el, {
                      get: (u, v) => u.getProps([v], !0)[v],
                    })),
                    (i = n.geometry()),
                    (a = st(d, n.model(), i)),
                    o._box.update(a, i, n.rotation()));
                (function Pt(t, r) {
                  var e, n, o, i;
                  for (e = t.length - 1; e >= 0; --e)
                    for (o = t[e].$layout, n = e - 1; n >= 0 && o._visible; --n)
                      (i = t[n].$layout)._visible &&
                        o._box.intersects(i._box) &&
                        r(o, i);
                })(t, function (u, v) {
                  var c = u._hidable,
                    x = v._hidable;
                  (c && x) || x ? (v._visible = !1) : c && (u._visible = !1);
                });
              })(t);
          },
          lookup: function (t, r) {
            var e, n;
            for (e = t.length - 1; e >= 0; --e)
              if ((n = t[e].$layout) && n._visible && n._box.contains(r))
                return t[e];
            return null;
          },
          draw: function (t, r) {
            var e, n, o, i, a, d;
            for (e = 0, n = r.length; e < n; ++e)
              (i = (o = r[e]).$layout)._visible &&
                ((a = o.geometry()),
                (d = st(o._el, o.model(), a)),
                i._box.update(d, a, o.rotation()),
                o.draw(t, d));
          },
        },
        O = "$datalabels",
        lt = "$default";
      function Y(t, r, e, n) {
        if (r) {
          var a,
            o = e.$context,
            i = e.$groups;
          r[i._set] &&
            (a = r[i._set][i._key]) &&
            !0 === (0, p.Q)(a, [o, n]) &&
            ((t[O]._dirty = !0), e.update(o));
        }
      }
      var _t = {
          id: "datalabels",
          defaults: {
            align: "center",
            anchor: "center",
            backgroundColor: null,
            borderColor: null,
            borderRadius: 0,
            borderWidth: 0,
            clamp: !1,
            clip: !1,
            color: void 0,
            display: !0,
            font: {
              family: void 0,
              lineHeight: 1.2,
              size: void 0,
              style: void 0,
              weight: null,
            },
            formatter: function (t) {
              if ((0, p.k)(t)) return null;
              var e,
                n,
                o,
                r = t;
              if ((0, p.i)(t))
                if ((0, p.k)(t.label))
                  if ((0, p.k)(t.r))
                    for (
                      r = "", o = 0, n = (e = Object.keys(t)).length;
                      o < n;
                      ++o
                    )
                      r += (0 !== o ? ", " : "") + e[o] + ": " + t[e[o]];
                  else r = t.r;
                else r = t.label;
              return "" + r;
            },
            labels: void 0,
            listeners: {},
            offset: 4,
            opacity: 1,
            padding: { top: 4, right: 4, bottom: 4, left: 4 },
            rotation: 0,
            textAlign: "start",
            textStrokeColor: void 0,
            textStrokeWidth: 0,
            textShadowBlur: 0,
            textShadowColor: void 0,
          },
          beforeInit: function (t) {
            t[O] = { _actives: [] };
          },
          beforeUpdate: function (t) {
            var r = t[O];
            (r._listened = !1),
              (r._listeners = {}),
              (r._datasets = []),
              (r._labels = []);
          },
          afterDatasetUpdate: function (t, r, e) {
            var x,
              R,
              ht,
              ut,
              G,
              vt,
              _,
              L,
              n = r.index,
              o = t[O],
              i = (o._datasets[n] = []),
              a = t.isDatasetVisible(n),
              d = t.data.datasets[n],
              u = (function At(t, r) {
                var i,
                  a,
                  e = t.datalabels,
                  n = {},
                  o = [];
                return !1 === e
                  ? null
                  : (!0 === e && (e = {}),
                    (r = (0, p.a4)({}, [r, e])),
                    (i = r.labels || {}),
                    (a = Object.keys(i)),
                    delete r.labels,
                    a.length
                      ? a.forEach(function (d) {
                          i[d] && o.push((0, p.a4)({}, [r, i[d], { _key: d }]));
                        })
                      : o.push(r),
                    (n = o.reduce(function (d, u) {
                      return (
                        (0, p.F)(u.listeners || {}, function (v, c) {
                          (d[c] = d[c] || {}), (d[c][u._key || lt] = v);
                        }),
                        delete u.listeners,
                        d
                      );
                    }, {})),
                    { labels: o, listeners: n });
              })(d, e),
              v = r.meta.data || [],
              c = t.ctx;
            for (c.save(), x = 0, ht = v.length; x < ht; ++x)
              if (
                (((_ = v[x])[O] = []),
                a && _ && t.getDataVisibility(x) && !_.skip)
              )
                for (R = 0, ut = u.labels.length; R < ut; ++R)
                  (vt = (G = u.labels[R])._key),
                    ((L = new ot(G, c, _, x)).$groups = {
                      _set: n,
                      _key: vt || lt,
                    }),
                    (L.$context = {
                      active: !1,
                      chart: t,
                      dataIndex: x,
                      dataset: d,
                      datasetIndex: n,
                    }),
                    L.update(L.$context),
                    _[O].push(L),
                    i.push(L);
            c.restore(),
              (0, p.a4)(o._listeners, u.listeners, {
                merger: function (Q, V, de) {
                  (V[Q] = V[Q] || {}),
                    (V[Q][r.index] = de[Q]),
                    (o._listened = !0);
                },
              });
          },
          afterUpdate: function (t) {
            t[O]._labels = I.prepare(t[O]._datasets);
          },
          afterDatasetsDraw: function (t) {
            I.draw(t, t[O]._labels);
          },
          beforeEvent: function (t, r) {
            if (t[O]._listened) {
              var e = r.event;
              switch (e.type) {
                case "mousemove":
                case "mouseout":
                  !(function Lt(t, r) {
                    var o,
                      i,
                      e = t[O],
                      n = e._listeners;
                    if (n.enter || n.leave) {
                      if ("mousemove" === r.type) i = I.lookup(e._labels, r);
                      else if ("mouseout" !== r.type) return;
                      (o = e._hovered),
                        (e._hovered = i),
                        (function wt(t, r, e, n, o) {
                          var i, a;
                          (!e && !n) ||
                            (e
                              ? n
                                ? e !== n && (a = i = !0)
                                : (a = !0)
                              : (i = !0),
                            a && Y(t, r.leave, e, o),
                            i && Y(t, r.enter, n, o));
                        })(t, n, o, i, r);
                    }
                  })(t, e);
                  break;
                case "click":
                  !(function St(t, r) {
                    var e = t[O],
                      n = e._listeners.click,
                      o = n && I.lookup(e._labels, r);
                    o && Y(t, n, o, r);
                  })(t, e);
              }
            }
          },
          afterEvent: function (t) {
            var i,
              a,
              d,
              u,
              v,
              c,
              x,
              r = t[O],
              o = (function (t, r) {
                var o,
                  i,
                  a,
                  d,
                  e = t.slice(),
                  n = [];
                for (o = 0, a = r.length; o < a; ++o)
                  -1 === (i = e.indexOf((d = r[o])))
                    ? n.push([d, 1])
                    : e.splice(i, 1);
                for (o = 0, a = e.length; o < a; ++o) n.push([e[o], -1]);
                return n;
              })(r._actives, (r._actives = t.getActiveElements()));
            for (i = 0, a = o.length; i < a; ++i)
              if ((v = o[i])[1])
                for (d = 0, u = (x = v[0].element[O] || []).length; d < u; ++d)
                  ((c = x[d]).$context.active = 1 === v[1]),
                    c.update(c.$context);
            (r._dirty || o.length) && (I.update(r._labels), t.render()),
              delete r._dirty;
          },
        },
        s = l(65879),
        jt = l(42012),
        Et = l(16196),
        H = l(73460),
        Ut = l(70855),
        dt = l(96109),
        X = l(24139);
      function It(t, r) {
        1 & t && s._UZ(0, "nz-skeleton-element", 13),
          2 & t && s.Q6J("nzActive", !0);
      }
      function kt(t, r) {
        if (
          (1 & t && (s.ynx(0), s._UZ(1, "span", 14), s._uU(2), s.BQk()), 2 & t)
        ) {
          const e = s.oxw();
          s.xp6(1),
            s.Q6J("nzType", "global")("nzTheme", "outline"),
            s.xp6(1),
            s.hij(" ", e.organization, " ");
        }
      }
      const A = function () {
          return ["ant-menu-item-selected"];
        },
        w = function () {
          return { exact: !1 };
        },
        Zt = [
          {
            path: "",
            component: (() => {
              var t;
              class r {
                get organization() {
                  return this.service.currentOrganization;
                }
                constructor(n, o, i, a, d) {
                  (this.cdr = n),
                    (this.service = o),
                    (this.api = i),
                    (this.renderer = a),
                    (this.ngZone = d),
                    (this.collapsed = !1),
                    (this.loading = !1),
                    (this.opened = !1),
                    Z.kL.register(_t);
                }
                ngOnInit() {
                  S.s.track(N.H7),
                    this.getInfo(),
                    this.ngZone.runOutsideAngular(() => {
                      (this.opened =
                        !!window.location.href.includes("/time-sheet-")),
                        this.renderer.addClass(document.body, "reporting");
                    });
                }
                ngOnDestroy() {
                  this.ngZone.runOutsideAngular(() => {
                    this.renderer.removeClass(document.body, "reporting");
                  });
                }
                getInfo() {
                  var n = this;
                  return (0, j.Z)(function* () {
                    try {
                      n.loading = !0;
                      const o = yield n.api.getInfo();
                      o.done &&
                        (n.service.currentOrganization =
                          o.body.organization_name),
                        (n.loading = !1);
                    } catch {
                      n.loading = !1;
                    }
                    n.cdr.markForCheck();
                  })();
                }
              }
              return (
                ((t = r).ɵfac = function (n) {
                  return new (n || t)(
                    s.Y36(s.sBO),
                    s.Y36(jt.m),
                    s.Y36(Et.U),
                    s.Y36(s.Qsj),
                    s.Y36(s.R0b)
                  );
                }),
                (t.ɵcmp = s.Xpm({
                  type: t,
                  selectors: [["worklenz-rpt-layout"]],
                  decls: 28,
                  vars: 55,
                  consts: [
                    [1, "reporting-tab-module"],
                    [
                      3,
                      "nzCollapsible",
                      "nzCollapsed",
                      "nzCollapsedWidth",
                      "nzWidth",
                      "nzTrigger",
                      "nzCollapsedChange",
                    ],
                    [
                      "nz-typography",
                      "",
                      "nz-tooltip",
                      "",
                      3,
                      "nzTooltipTitle",
                      "ngSwitch",
                    ],
                    [
                      "nzType",
                      "input",
                      "nzSize",
                      "default",
                      "style",
                      "width:100%",
                      3,
                      "nzActive",
                      4,
                      "ngSwitchCase",
                    ],
                    [4, "ngSwitchCase"],
                    ["nz-menu", "", 3, "nzMode"],
                    [
                      "nz-menu-item",
                      "",
                      3,
                      "routerLink",
                      "routerLinkActive",
                      "routerLinkActiveOptions",
                    ],
                    [
                      "nz-submenu",
                      "",
                      1,
                      "reporting-submenu",
                      3,
                      "nzTitle",
                      "nzOpen",
                    ],
                    [
                      "nz-menu-item",
                      "",
                      1,
                      "ps-26",
                      3,
                      "routerLink",
                      "routerLinkActive",
                      "routerLinkActiveOptions",
                    ],
                    [
                      "nz-menu-item",
                      "",
                      1,
                      "ps-26",
                      "d-block",
                      "ellipsis-trigger",
                      3,
                      "routerLink",
                      "routerLinkActive",
                      "routerLinkActiveOptions",
                    ],
                    [
                      1,
                      "reporting-page-content",
                      "position-relative",
                      3,
                      "ngClass",
                    ],
                    ["nz-icon", "", 1, "trigger", 3, "nzType", "click"],
                    [1, "inner-content"],
                    [
                      "nzType",
                      "input",
                      "nzSize",
                      "default",
                      2,
                      "width",
                      "100%",
                      3,
                      "nzActive",
                    ],
                    ["nz-icon", "", 3, "nzType", "nzTheme"],
                  ],
                  template: function (n, o) {
                    1 & n &&
                      (s.TgZ(0, "div", 0)(1, "nz-layout")(2, "nz-sider", 1),
                      s.NdJ("nzCollapsedChange", function (a) {
                        return (o.collapsed = a);
                      }),
                      s.TgZ(3, "p", 2),
                      s.YNc(4, It, 1, 1, "nz-skeleton-element", 3),
                      s.YNc(5, kt, 3, 3, "ng-container", 4),
                      s.qZA(),
                      s.TgZ(6, "ul", 5)(7, "li", 6),
                      s._uU(8, "Overview "),
                      s.qZA(),
                      s.TgZ(9, "li", 6),
                      s._uU(10, "Projects "),
                      s.qZA(),
                      s.TgZ(11, "li", 6),
                      s._uU(12, "Members "),
                      s.qZA(),
                      s.TgZ(13, "li", 7)(14, "ul")(15, "li", 8),
                      s._uU(16, "Overview "),
                      s.qZA(),
                      s.TgZ(17, "li", 8),
                      s._uU(18, "Projects "),
                      s.qZA(),
                      s.TgZ(19, "li", 8),
                      s._uU(20, "Members "),
                      s.qZA(),
                      s.TgZ(21, "li", 9),
                      s._uU(22, "Estimated vs Actual "),
                      s.qZA()()()()(),
                      s.TgZ(23, "nz-layout", 10)(24, "nz-content")(
                        25,
                        "button",
                        11
                      ),
                      s.NdJ("click", function () {
                        return (o.collapsed = !o.collapsed);
                      }),
                      s.qZA(),
                      s.TgZ(26, "div", 12),
                      s._UZ(27, "router-outlet"),
                      s.qZA()()()()()),
                      2 & n &&
                        (s.xp6(2),
                        s.Q6J("nzCollapsible", !0)("nzCollapsed", o.collapsed)(
                          "nzCollapsedWidth",
                          0
                        )("nzWidth", 160)("nzTrigger", null),
                        s.xp6(1),
                        s.Q6J("nzTooltipTitle", "Current Organization")(
                          "ngSwitch",
                          o.loading
                        ),
                        s.xp6(1),
                        s.Q6J("ngSwitchCase", !0),
                        s.xp6(1),
                        s.Q6J("ngSwitchCase", !1),
                        s.xp6(1),
                        s.Q6J("nzMode", "inline"),
                        s.xp6(1),
                        s.Udp("padding-left", "14px"),
                        s.Q6J("routerLink", "overview")(
                          "routerLinkActive",
                          s.DdM(41, A)
                        )("routerLinkActiveOptions", s.DdM(42, w)),
                        s.xp6(2),
                        s.Udp("padding-left", "14px"),
                        s.Q6J("routerLink", "projects")(
                          "routerLinkActive",
                          s.DdM(43, A)
                        )("routerLinkActiveOptions", s.DdM(44, w)),
                        s.xp6(2),
                        s.Udp("padding-left", "14px"),
                        s.Q6J("routerLink", "members")(
                          "routerLinkActive",
                          s.DdM(45, A)
                        )("routerLinkActiveOptions", s.DdM(46, w)),
                        s.xp6(2),
                        s.Q6J("nzTitle", "Time Reports")("nzOpen", o.opened),
                        s.xp6(2),
                        s.Q6J("routerLink", "time-sheet-overview")(
                          "routerLinkActive",
                          s.DdM(47, A)
                        )("routerLinkActiveOptions", s.DdM(48, w)),
                        s.xp6(2),
                        s.Q6J("routerLink", "time-sheet-projects")(
                          "routerLinkActive",
                          s.DdM(49, A)
                        )("routerLinkActiveOptions", s.DdM(50, w)),
                        s.xp6(2),
                        s.Q6J("routerLink", "time-sheet-members")(
                          "routerLinkActive",
                          s.DdM(51, A)
                        )("routerLinkActiveOptions", s.DdM(52, w)),
                        s.xp6(2),
                        s.Q6J("routerLink", "time-sheet-estimated-vs-actual")(
                          "routerLinkActive",
                          s.DdM(53, A)
                        )("routerLinkActiveOptions", s.DdM(54, w)),
                        s.xp6(2),
                        s.Q6J("ngClass", o.collapsed ? "full" : ""),
                        s.xp6(2),
                        s.Q6J(
                          "nzType",
                          o.collapsed ? "right-circle" : "left-circle"
                        ));
                  },
                  dependencies: [
                    C.mk,
                    C.RF,
                    C.n9,
                    H.wO,
                    H.r9,
                    H.rY,
                    Ut.w,
                    f.Ls,
                    h.hw,
                    h.OK,
                    h.t7,
                    g.ZU,
                    z.rH,
                    z.lC,
                    z.Od,
                    dt.SY,
                    X.Xw,
                    X.yg,
                  ],
                  styles: [
                    'nz-header[_ngcontent-%COMP%]{background:white;padding:0}nz-sider[_ngcontent-%COMP%]{height:100vh;position:fixed;left:0}nz-sider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:15px 10px;text-align:center;margin:0;font-weight:700;background:rgba(0,0,0,.031372549)}nz-layout[_ngcontent-%COMP%]{background:white}.trigger[_ngcontent-%COMP%]{position:fixed;top:80px;padding:0;border-radius:100%;background-color:#fff;border:none;font-size:22px;cursor:pointer;color:#c5c5c5;z-index:1;transition:.3s all}.reporting-page-content[_ngcontent-%COMP%]{margin-left:160px;padding-left:24px;transition:.3s all}.reporting-page-content[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:before{content:"";position:fixed;left:160px;top:0;bottom:0;width:1px;background:rgb(240,240,240);transition:.3s all;z-index:0}.reporting-page-content.full[_ngcontent-%COMP%]{margin-left:10px}.reporting-page-content.full[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:before{left:10px;transition:.3s all}.reporting-page-content.full[_ngcontent-%COMP%]   .trigger[_ngcontent-%COMP%]{left:0}.reporting-page-content[_ngcontent-%COMP%]   .trigger[_ngcontent-%COMP%]{left:150px}.sider-ul[_ngcontent-%COMP%]{padding-left:0;overflow-x:hidden;border-top:1px solid rgba(0,0,0,.06);padding-top:16px;border-right:none}.sider-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-left:20px;height:40px;margin-bottom:8px;display:flex;align-items:center}.sider-ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:#1890ff;border-right:2px solid #1890ff;background-color:#e6f7ff}.inner-content[_ngcontent-%COMP%]{padding-top:26px}[nz-menu-item][_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.ps-26[_ngcontent-%COMP%]{padding-left:26px!important}.ellipsis-trigger[_ngcontent-%COMP%]{text-overflow:ellipsis}.ellipsis-trigger[_ngcontent-%COMP%]:hover{text-overflow:clip}',
                  ],
                  changeDetection: 0,
                })),
                r
              );
            })(),
            children: [
              { path: "", redirectTo: "overview", pathMatch: "full" },
              {
                path: "overview",
                loadChildren: () =>
                  Promise.all([l.e(889), l.e(771), l.e(31), l.e(508)])
                    .then(l.bind(l, 15508))
                    .then((t) => t.RptOverviewModule),
              },
              {
                path: "projects",
                loadChildren: () =>
                  Promise.all([l.e(889), l.e(771), l.e(31), l.e(787)])
                    .then(l.bind(l, 71787))
                    .then((t) => t.RptProjectsModule),
              },
              {
                path: "members",
                loadChildren: () =>
                  Promise.all([l.e(889), l.e(771), l.e(31), l.e(787), l.e(89)])
                    .then(l.bind(l, 53089))
                    .then((t) => t.RptMembersModule),
              },
              {
                path: "time-sheet-overview",
                loadChildren: () =>
                  Promise.all([l.e(889), l.e(945)])
                    .then(l.bind(l, 83945))
                    .then((t) => t.RptAllocationModule),
              },
              {
                path: "time-sheet-projects",
                loadChildren: () =>
                  Promise.all([l.e(889), l.e(169)])
                    .then(l.bind(l, 91169))
                    .then((t) => t.RptTimeProjectsModule),
              },
              {
                path: "time-sheet-members",
                loadChildren: () =>
                  l
                    .e(589)
                    .then(l.bind(l, 42589))
                    .then((t) => t.RptTimeMembersModule),
              },
              {
                path: "time-sheet-estimated-vs-actual",
                loadChildren: () =>
                  l
                    .e(226)
                    .then(l.bind(l, 55226))
                    .then((t) => t.RptTimeEstimationVsActualModule),
              },
            ],
          },
        ];
      let Kt = (() => {
        var t;
        class r {}
        return (
          ((t = r).ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵmod = s.oAB({ type: t })),
          (t.ɵinj = s.cJS({ imports: [z.Bz.forChild(Zt), z.Bz] })),
          r
        );
      })();
      var Bt = l(9691),
        Wt = l(52682),
        Jt = l(29666),
        Qt = l(33640),
        Nt = l(55695),
        Ft = l(38265),
        Yt = l(20824),
        Ht = l(3599),
        Xt = l(82669),
        Gt = l(13740),
        Vt = l(48522),
        qt = l(48128),
        te = l(47246),
        ee = l(43389),
        ne = l(43498),
        re = l(96928),
        oe = l(82962),
        ie = l(66987),
        ae = l(47381),
        se = l(90565);
      let le = (() => {
        var t;
        class r {}
        return (
          ((t = r).ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵmod = s.oAB({ type: t })),
          (t.ɵinj = s.cJS({
            imports: [
              C.ez,
              y.zf,
              T.b1,
              b.sL,
              f.PV,
              P.KJ,
              m.u5,
              M.Wr,
              h.wm,
              g.ZJ,
              Kt,
              dt.cg,
              X.H0,
              Bt.LV,
              Wt.Hb,
              Jt.V,
              Qt.mS,
              Nt.X,
              Ft.u,
              m.UX,
              Yt.o7,
              Ht.U5,
              Xt.j,
              Gt.HQ,
              Vt.a,
              qt.W,
              te.vQ,
              ee.BL,
              ne.FT,
              re.Rt,
              oe.vh,
              ie.S,
              ae.t,
              se.cD,
            ],
          })),
          r
        );
      })();
    },
    42012: (k, D, l) => {
      l.d(D, { m: () => f });
      var C = l(78645),
        m = l(65879);
      let f = (() => {
        var b;
        class T {
          constructor() {
            (this._currentOrganization = null),
              (this._currentTeam = null),
              (this._duration = null),
              (this._dateRange = []),
              (this._drawerDuration = null),
              (this._drawerDateRange = []),
              (this._includeArchived = !1),
              (this._durationChangedSbj$ = new C.x()),
              (this._dateRangeChangedSbj$ = new C.x()),
              (this._drawerDurationChangedSbj$ = new C.x()),
              (this._drawerDateRangeChangedSbj$ = new C.x()),
              (this._archivedToggleChangedSbj$ = new C.x());
          }
          get currentOrganization() {
            return this._currentOrganization;
          }
          set currentOrganization(y) {
            this._currentOrganization = y;
          }
          setCurrentTeam(y) {
            this._currentTeam = y;
          }
          getCurrentTeam() {
            return this._currentTeam;
          }
          setDuration(y) {
            this._duration = y;
          }
          setDrawerDuration(y) {
            this._drawerDuration = y;
          }
          setDateRange(y) {
            this._dateRange = y;
          }
          setDrawerDateRange(y) {
            this._drawerDateRange = y;
          }
          getDuration() {
            return this._duration;
          }
          getDrawerDuration() {
            return this._drawerDuration;
          }
          getDateRange() {
            return this._dateRange;
          }
          getDrawerDateRange() {
            return this._drawerDateRange;
          }
          setIncludeToggle(y) {
            this._includeArchived = y;
          }
          getIncludeToggle() {
            return this._includeArchived;
          }
          get onDurationChange() {
            return this._durationChangedSbj$.asObservable();
          }
          emitDurationChanged() {
            this._durationChangedSbj$.next();
          }
          get onDrawerDurationChange() {
            return this._drawerDurationChangedSbj$.asObservable();
          }
          emitDrawerDurationChanged() {
            this._drawerDurationChangedSbj$.next();
          }
          get onDateRangeChange() {
            return this._dateRangeChangedSbj$.asObservable();
          }
          emitDateRangeChanged() {
            this._dateRangeChangedSbj$.next();
          }
          get onDrawerDateRangeChange() {
            return this._drawerDateRangeChangedSbj$.asObservable();
          }
          emitDrawerDateRangeChanged() {
            this._drawerDateRangeChangedSbj$.next();
          }
          get onIncludeToggleChange() {
            return this._archivedToggleChangedSbj$.asObservable();
          }
          emitIncludeToggleChanged() {
            this._archivedToggleChangedSbj$.next();
          }
        }
        return (
          ((b = T).ɵfac = function (y) {
            return new (y || b)();
          }),
          (b.ɵprov = m.Yz7({ token: b, factory: b.ɵfac, providedIn: "root" })),
          T
        );
      })();
    },
  },
]);
