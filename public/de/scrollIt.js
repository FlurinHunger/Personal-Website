(function(e) {
	"use strict";
	var t = "ScrollIt",
		n = "1.0.3";
	var r = {
		upKey: 38,
		downKey: 40,
		easing: "linear",
		scrollTime: 600,
		activeClass: "active",
		onPageChange: null,
		topOffset: 0
	};
	e.scrollIt = function(t) {
		var n = e.extend(r, t),
			i = 0,
			s = e("[data-scroll-index]:last").attr("data-scroll-index");
		var o = function(t) {
			if (t < 0 || t > s) return;
			var r = e("[data-scroll-index=" + t + "]").offset().top + n.topOffset + 1;
			e("html,body").animate({
				scrollTop: r,
				easing: n.easing
			}, n.scrollTime)
		};
		var u = function(t) {
			var n = e(t.target).closest("[data-scroll-nav]").attr("data-scroll-nav") || e(t.target).closest("[data-scroll-goto]").attr("data-scroll-goto");
			o(parseInt(n))
		};

    //Use keys to scroll
		var a = function(t) {
			var r = t.which;
			if (e("html,body").is(":animated") && (r == n.upKey || r == n.downKey)) {
				return false
			}
			if (r == n.upKey && i > 0) {
				o(parseInt(i) - 1);
				return false
			} else if (r == n.downKey && i < s) {
				o(parseInt(i) + 1);
				return false
			}
			return true
		};

    // Change active class on elements
		var f = function(t) {
			if (n.onPageChange && t && i != t) n.onPageChange(t);
			i = t;
			e("[data-scroll-nav]").removeClass(n.activeClass);
			e("[data-scroll-nav=" + t + "]").addClass(n.activeClass)
		};

    // Scroll function
		var l = function() {
			var t = e(window).scrollTop();
			var r = e("[data-scroll-index]").filter(function(r, i) {
				return t >= e(i).offset().top + n.topOffset && t < e(i).offset().top + n.topOffset + e(i).outerHeight()
			});
			var i = r.first().attr("data-scroll-index");
			f(i)
		};
		e(window).on("scroll", l).scroll();
		e(window).on("keydown", a);
		e("body").on("click", "[data-scroll-nav], [data-scroll-goto]", function(e) {
			e.preventDefault();
			u(e)
		})
	}
})(jQuery)
