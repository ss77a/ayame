/*! modernizr 3.12.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-avif-contains-hidden-svg-target-webp-addtest-printshiv-testprop !*/
!(function (e, t, n, r) {
	function o(e, t) {
		return typeof e === t;
	}
	function A(e) {
		var t = E.className,
			n = Modernizr._config.classPrefix || '';
		if ((w && (t = t.baseVal), Modernizr._config.enableJSClass)) {
			var r = new RegExp('(^|\\s)' + n + 'no-js(\\s|$)');
			t = t.replace(r, '$1' + n + 'js$2');
		}
		Modernizr._config.enableClasses &&
			(e.length > 0 && (t += ' ' + n + e.join(' ' + n)), w ? (E.className.baseVal = t) : (E.className = t));
	}
	function a(e, t) {
		if ('object' == typeof e) for (var n in e) v(e, n) && a(n, e[n]);
		else {
			e = e.toLowerCase();
			var r = e.split('.'),
				o = Modernizr[r[0]];
			if ((2 === r.length && (o = o[r[1]]), void 0 !== o)) return Modernizr;
			(t = 'function' == typeof t ? t() : t),
				1 === r.length
					? (Modernizr[r[0]] = t)
					: (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
					  (Modernizr[r[0]][r[1]] = t)),
				A([(t && !1 !== t ? '' : 'no-') + r.join('-')]),
				Modernizr._trigger(e, t);
		}
		return Modernizr;
	}
	function i(e, t) {
		return !!~('' + e).indexOf(t);
	}
	function l() {
		return 'function' != typeof n.createElement
			? n.createElement(arguments[0])
			: w
			? n.createElementNS.call(n, 'http://www.w3.org/2000/svg', arguments[0])
			: n.createElement.apply(n, arguments);
	}
	function s() {
		var e = n.body;
		return e || ((e = l(w ? 'svg' : 'body')), (e.fake = !0)), e;
	}
	function c(e, t, r, o) {
		var A,
			a,
			i,
			c,
			u = 'modernizr',
			d = l('div'),
			f = s();
		if (parseInt(r, 10)) for (; r--; ) (i = l('div')), (i.id = o ? o[r] : u + (r + 1)), d.appendChild(i);
		return (
			(A = l('style')),
			(A.type = 'text/css'),
			(A.id = 's' + u),
			(f.fake ? f : d).appendChild(A),
			f.appendChild(d),
			A.styleSheet ? (A.styleSheet.cssText = e) : A.appendChild(n.createTextNode(e)),
			(d.id = u),
			f.fake &&
				((f.style.background = ''),
				(f.style.overflow = 'hidden'),
				(c = E.style.overflow),
				(E.style.overflow = 'hidden'),
				E.appendChild(f)),
			(a = t(d, e)),
			f.fake && f.parentNode
				? (f.parentNode.removeChild(f), (E.style.overflow = c), E.offsetHeight)
				: d.parentNode.removeChild(d),
			!!a
		);
	}
	function u(e) {
		return e
			.replace(/([A-Z])/g, function (e, t) {
				return '-' + t.toLowerCase();
			})
			.replace(/^ms-/, '-ms-');
	}
	function d(e, n, r) {
		var o;
		if ('getComputedStyle' in t) {
			o = getComputedStyle.call(t, e, n);
			var A = t.console;
			if (null !== o) r && (o = o.getPropertyValue(r));
			else if (A) {
				var a = A.error ? 'error' : 'log';
				A[a].call(A, 'getComputedStyle returning null, its possible modernizr test results are inaccurate');
			}
		} else o = !n && e.currentStyle && e.currentStyle[r];
		return o;
	}
	function f(e, n) {
		var o = e.length;
		if ('CSS' in t && 'supports' in t.CSS) {
			for (; o--; ) if (t.CSS.supports(u(e[o]), n)) return !0;
			return !1;
		}
		if ('CSSSupportsRule' in t) {
			for (var A = []; o--; ) A.push('(' + u(e[o]) + ':' + n + ')');
			return (
				(A = A.join(' or ')),
				c('@supports (' + A + ') { #modernizr { position: absolute; } }', function (e) {
					return 'absolute' === d(e, null, 'position');
				})
			);
		}
		return r;
	}
	function m(e) {
		return e
			.replace(/([a-z])-([a-z])/g, function (e, t, n) {
				return t + n.toUpperCase();
			})
			.replace(/^-/, '');
	}
	function p(e, t, n, A) {
		function a() {
			c && (delete S.style, delete S.modElem);
		}
		if (((A = !o(A, 'undefined') && A), !o(n, 'undefined'))) {
			var s = f(e, n);
			if (!o(s, 'undefined')) return s;
		}
		for (var c, u, d, p, h, g = ['modernizr', 'tspan', 'samp']; !S.style && g.length; )
			(c = !0), (S.modElem = l(g.shift())), (S.style = S.modElem.style);
		for (d = e.length, u = 0; u < d; u++)
			if (((p = e[u]), (h = S.style[p]), i(p, '-') && (p = m(p)), S.style[p] !== r)) {
				if (A || o(n, 'undefined')) return a(), 'pfx' !== t || p;
				try {
					S.style[p] = n;
				} catch (e) {}
				if (S.style[p] !== h) return a(), 'pfx' !== t || p;
			}
		return a(), !1;
	}
	var h = [],
		g = {
			_version: '3.12.0',
			_config: { classPrefix: '', enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
			_q: [],
			on: function (e, t) {
				var n = this;
				setTimeout(function () {
					t(n[e]);
				}, 0);
			},
			addTest: function (e, t, n) {
				h.push({ name: e, fn: t, options: n });
			},
			addAsyncTest: function (e) {
				h.push({ name: null, fn: e });
			},
		},
		Modernizr = function () {};
	(Modernizr.prototype = g), (Modernizr = new Modernizr());
	var v,
		y = [];
	!(function () {
		var e = {}.hasOwnProperty;
		v =
			o(e, 'undefined') || o(e.call, 'undefined')
				? function (e, t) {
						return t in e && o(e.constructor.prototype[t], 'undefined');
				  }
				: function (t, n) {
						return e.call(t, n);
				  };
	})();
	var E = n.documentElement,
		w = 'svg' === E.nodeName.toLowerCase();
	(g._l = {}),
		(g.on = function (e, t) {
			this._l[e] || (this._l[e] = []),
				this._l[e].push(t),
				Modernizr.hasOwnProperty(e) &&
					setTimeout(function () {
						Modernizr._trigger(e, Modernizr[e]);
					}, 0);
		}),
		(g._trigger = function (e, t) {
			if (this._l[e]) {
				var n = this._l[e];
				setTimeout(function () {
					var e;
					for (e = 0; e < n.length; e++) (0, n[e])(t);
				}, 0),
					delete this._l[e];
			}
		}),
		Modernizr._q.push(function () {
			g.addTest = a;
		});
	w ||
		(function (e, t) {
			function n(e, t) {
				var n = e.createElement('p'),
					r = e.getElementsByTagName('head')[0] || e.documentElement;
				return (n.innerHTML = 'x<style>' + t + '</style>'), r.insertBefore(n.lastChild, r.firstChild);
			}
			function r() {
				var e = S.elements;
				return 'string' == typeof e ? e.split(' ') : e;
			}
			function o(e, t) {
				var n = S.elements;
				'string' != typeof n && (n = n.join(' ')),
					'string' != typeof e && (e = e.join(' ')),
					(S.elements = n + ' ' + e),
					s(t);
			}
			function A(e) {
				var t = b[e[E]];
				return t || ((t = {}), w++, (e[E] = w), (b[w] = t)), t;
			}
			function a(e, n, r) {
				if ((n || (n = t), h)) return n.createElement(e);
				r || (r = A(n));
				var o;
				return (
					(o = r.cache[e]
						? r.cache[e].cloneNode()
						: y.test(e)
						? (r.cache[e] = r.createElem(e)).cloneNode()
						: r.createElem(e)),
					!o.canHaveChildren || v.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
				);
			}
			function i(e, n) {
				if ((e || (e = t), h)) return e.createDocumentFragment();
				n = n || A(e);
				for (var o = n.frag.cloneNode(), a = 0, i = r(), l = i.length; a < l; a++) o.createElement(i[a]);
				return o;
			}
			function l(e, t) {
				t.cache ||
					((t.cache = {}),
					(t.createElem = e.createElement),
					(t.createFrag = e.createDocumentFragment),
					(t.frag = t.createFrag())),
					(e.createElement = function (n) {
						return S.shivMethods ? a(n, e, t) : t.createElem(n);
					}),
					(e.createDocumentFragment = Function(
						'h,f',
						'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' +
							r()
								.join()
								.replace(/[\w\-:]+/g, function (e) {
									return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
								}) +
							');return n}'
					)(S, t.frag));
			}
			function s(e) {
				e || (e = t);
				var r = A(e);
				return (
					!S.shivCSS ||
						p ||
						r.hasCSS ||
						(r.hasCSS = !!n(
							e,
							'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}'
						)),
					h || l(e, r),
					e
				);
			}
			function c(e) {
				for (
					var t, n = e.getElementsByTagName('*'), o = n.length, A = RegExp('^(?:' + r().join('|') + ')$', 'i'), a = [];
					o--;

				)
					(t = n[o]), A.test(t.nodeName) && a.push(t.applyElement(u(t)));
				return a;
			}
			function u(e) {
				for (var t, n = e.attributes, r = n.length, o = e.ownerDocument.createElement(B + ':' + e.nodeName); r--; )
					(t = n[r]), t.specified && o.setAttribute(t.nodeName, t.nodeValue);
				return (o.style.cssText = e.style.cssText), o;
			}
			function d(e) {
				for (
					var t,
						n = e.split('{'),
						o = n.length,
						A = RegExp('(^|[\\s,>+~])(' + r().join('|') + ')(?=[[\\s,>+~#.:]|$)', 'gi'),
						a = '$1' + B + '\\:$2';
					o--;

				)
					(t = n[o] = n[o].split('}')), (t[t.length - 1] = t[t.length - 1].replace(A, a)), (n[o] = t.join('}'));
				return n.join('{');
			}
			function f(e) {
				for (var t = e.length; t--; ) e[t].removeNode();
			}
			function m(e) {
				function t() {
					clearTimeout(a._removeSheetTimer), r && r.removeNode(!0), (r = null);
				}
				var r,
					o,
					a = A(e),
					i = e.namespaces,
					l = e.parentWindow;
				return !Q || e.printShived
					? e
					: (void 0 === i[B] && i.add(B),
					  l.attachEvent('onbeforeprint', function () {
							t();
							for (var A, a, i, l = e.styleSheets, s = [], u = l.length, f = Array(u); u--; ) f[u] = l[u];
							for (; (i = f.pop()); )
								if (!i.disabled && C.test(i.media)) {
									try {
										(A = i.imports), (a = A.length);
									} catch (e) {
										a = 0;
									}
									for (u = 0; u < a; u++) f.push(A[u]);
									try {
										s.push(i.cssText);
									} catch (e) {}
								}
							(s = d(s.reverse().join(''))), (o = c(e)), (r = n(e, s));
					  }),
					  l.attachEvent('onafterprint', function () {
							f(o), clearTimeout(a._removeSheetTimer), (a._removeSheetTimer = setTimeout(t, 500));
					  }),
					  (e.printShived = !0),
					  e);
			}
			var p,
				h,
				g = e.html5 || {},
				v = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
				y =
					/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
				E = '_html5shiv',
				w = 0,
				b = {};
			!(function () {
				try {
					var e = t.createElement('a');
					(e.innerHTML = '<xyz></xyz>'),
						(p = 'hidden' in e),
						(h =
							1 == e.childNodes.length ||
							(function () {
								t.createElement('a');
								var e = t.createDocumentFragment();
								return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement;
							})());
				} catch (e) {
					(p = !0), (h = !0);
				}
			})();
			var S = {
				elements:
					g.elements ||
					'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',
				version: '3.7.3',
				shivCSS: !1 !== g.shivCSS,
				supportsUnknownElements: h,
				shivMethods: !1 !== g.shivMethods,
				type: 'default',
				shivDocument: s,
				createElement: a,
				createDocumentFragment: i,
				addElements: o,
			};
			(e.html5 = S), s(t);
			var C = /^$|\b(?:all|print)\b/,
				B = 'html5shiv',
				Q =
					!h &&
					(function () {
						var n = t.documentElement;
						return !(
							void 0 === t.namespaces ||
							void 0 === t.parentWindow ||
							void 0 === n.applyElement ||
							void 0 === n.removeNode ||
							void 0 === e.attachEvent
						);
					})();
			(S.type += ' print'),
				(S.shivPrint = m),
				m(t),
				'object' == typeof module && module.exports && (module.exports = S);
		})(void 0 !== t ? t : this, n);
	var b = { elem: l('modernizr') };
	Modernizr._q.push(function () {
		delete b.elem;
	});
	var S = { style: b.elem.style };
	Modernizr._q.unshift(function () {
		delete S.style;
	});
	g.testProp = function (e, t, n) {
		return p([e], r, t, n);
	};
	Modernizr.addTest(
		'svg',
		!!n.createElementNS && !!n.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
	),
		Modernizr.addTest('target', function () {
			var e = t.document;
			if (!('querySelectorAll' in e)) return !1;
			try {
				return e.querySelectorAll(':target'), !0;
			} catch (e) {
				return !1;
			}
		}),
		Modernizr.addTest('contains', o(String.prototype.contains, 'function')),
		Modernizr.addAsyncTest(function () {
			var e = new Image();
			(e.onload = e.onerror =
				function () {
					a('avif', 1 === e.width);
				}),
				(e.src =
					'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAEcbWV0YQAAAAAAAABIaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGNhdmlmIC0gaHR0cHM6Ly9naXRodWIuY29tL2xpbmstdS9jYXZpZgAAAAAeaWxvYwAAAAAEQAABAAEAAAAAAUQAAQAAABcAAAAqaWluZgEAAAAAAAABAAAAGmluZmUCAAAAAAEAAGF2MDFJbWFnZQAAAAAOcGl0bQAAAAAAAQAAAHJpcHJwAAAAUmlwY28AAAAQcGFzcAAAAAEAAAABAAAAFGlzcGUAAAAAAAAAAQAAAAEAAAAQcGl4aQAAAAADCAgIAAAAFmF2MUOBAAwACggYAAYICGgIIAAAABhpcG1hAAAAAAAAAAEAAQUBAoMDhAAAAB9tZGF0CggYAAYICGgIIBoFHiAAAEQiBACwDoA=');
		}),
		Modernizr.addAsyncTest(function () {
			function e(e, t, n) {
				function r(t) {
					var r = !(!t || 'load' !== t.type) && 1 === o.width;
					a(e, 'webp' === e && r ? new Boolean(r) : r), n && n(t);
				}
				var o = new Image();
				(o.onerror = r), (o.onload = r), (o.src = t);
			}
			var t = [
					{ uri: 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=', name: 'webp' },
					{
						uri: 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==',
						name: 'webp.alpha',
					},
					{
						uri: 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
						name: 'webp.animation',
					},
					{ uri: 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=', name: 'webp.lossless' },
				],
				n = t.shift();
			e(n.name, n.uri, function (n) {
				if (n && 'load' === n.type) for (var r = 0; r < t.length; r++) e(t[r].name, t[r].uri);
			});
		}),
		Modernizr.addTest('hidden', 'hidden' in l('a')),
		(function () {
			var e, t, n, r, A, a, i;
			for (var l in h)
				if (h.hasOwnProperty(l)) {
					if (
						((e = []),
						(t = h[l]),
						t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
					)
						for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
					for (r = o(t.fn, 'function') ? t.fn() : t.fn, A = 0; A < e.length; A++)
						(a = e[A]),
							(i = a.split('.')),
							1 === i.length
								? (Modernizr[i[0]] = r)
								: ((Modernizr[i[0]] && (!Modernizr[i[0]] || Modernizr[i[0]] instanceof Boolean)) ||
										(Modernizr[i[0]] = new Boolean(Modernizr[i[0]])),
								  (Modernizr[i[0]][i[1]] = r)),
							y.push((r ? '' : 'no-') + i.join('-'));
				}
		})(),
		delete g.addTest,
		delete g.addAsyncTest;
	for (var C = 0; C < Modernizr._q.length; C++) Modernizr._q[C]();
	e.Modernizr = Modernizr;
})(window, window, document);
