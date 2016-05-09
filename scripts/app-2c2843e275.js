/******/
!function (e) {
    function t(n) {
        if (i[n])return i[n].exports;
        var a = i[n] = {exports: {}, id: n, loaded: !1};
        return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
    }// webpackBootstrap
    /******/
    var i = {};
    return t.m = e, t.c = i, t.p = "", t(0)
}([function (e, t, i) {
    "use strict";
    function n() {
        "ngInject";
        var e = {
            restrict: "AE", link: function (e, t, i) {
                t.replaceWith(t.children())
            }
        };
        return e
    }

    var a = i(1), o = i(2), s = i(3), r = i(4), l = i(5), c = i(6), d = i(7), u = i(8), p = i(9), m = i(10), v = i(11), f = i(12), h = i(13), g = i(14), b = i(15), k = i(16), y = i(17), w = i(18), j = i(19), C = i(20), x = i(21), D = i(22);
    angular.module("davidbreuerHeroku", ["ngAnimate", "ngCookies", "ngTouch", "ngSanitize", "ngMessages", "ngAria", "ngResource", "ngNewRouter", "toastr"]).constant("malarkey", malarkey).constant("moment", moment).config(a.config).config(o.routerConfig).run(s.runBlock).service("githubContributor", d.GithubContributorService).service("webDevTec", p.WebDevTecService).service("workService", u.WorkService).controller("RouterController", o.RouterController).controller("MainController", r.MainController).controller("WorkController", l.WorkController).controller("BlogController", c.BlogController).directive("acmeNavbar", m.NavbarDirective).directive("acmeHome", v.HomeDirective).directive("acmeSkills", f.SkillsDirective).directive("acmeImage", h.ImageDirective).directive("acmeTwitter", g.TwitterDirective).directive("acmeService", b.ServiceDirective).directive("acmeSmallbox", k.SmallboxDirective).directive("acmeClients", y.ClientsDirective).directive("acmePortfolio", w.PortfolioDirective).directive("acmeBlog", j.BlogDirective).directive("acmeContact", C.ContactDirective).directive("acmeMalarkey", D.MalarkeyDirective).directive("fancybox", x.FancyboxDirective).directive("includeReplace", n)
}, function (e, t) {
    "use strict";
    function i(e, t) {
        "ngInject";
        e.debugEnabled(!0), t.allowHtml = !0, t.timeOut = 3e3, t.positionClass = "toast-top-right", t.preventDuplicates = !0, t.progressBar = !0
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.config = i, i.$inject = ["$logProvider", "toastrConfig"]
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function n(e) {
        "ngInject";
        e.setTemplateMapping(function (e) {
            return "app/" + e + "/" + e + ".html"
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.routerConfig = n, n.$inject = ["$componentLoaderProvider"];
    var a = function o(e) {
        "ngInject";
        i(this, o), e.config([{path: "/home", component: "main"}, {
            path: "/work/:id",
            component: "work"
        }, {path: "/blog/:id", component: "blog"}])
    };
    a.$inject = ["$router"], t.RouterController = a
}, function (e, t) {
    "use strict";
    function i(e) {
        "ngInject";
        e.debug("runBlock end")
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.runBlock = i, i.$inject = ["$log"]
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var n = function () {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        return function (t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t
        }
    }(), a = function () {
        function e(t, n, a, o) {
            "ngInject";
            i(this, e);
            var s = this;
            this.awesomeThings = [], this.classAnimation = "", this.creationDate = 1446624132562, this.toastr = a, o.getContentData().then(function (e) {
                s.homedata = e.data, t(function () {
                    var e = $("#container"), t = $("#options select");
                    e.imagesLoaded(function () {
                        e.isotope({
                            resizable: !1,
                            masonry: {columnWidth: e.width() / 12}
                        }), $(window).smartresize(function () {
                            e.isotope({masonry: {columnWidth: e.width() / 12}})
                        }), e.isotope({itemSelector: ".element"}), t.bind("change", function () {
                            var t = $(this).val();
                            e.isotope({filter: t})
                        });
                        var i = $("#options .option-set"), n = i.find("a");
                        n.click(function () {
                            console.log("hello");
                            var t = $(this);
                            if (t.hasClass("selected"))return !1;
                            var i = t.parents(".option-set");
                            i.find(".selected").removeClass("selected"), t.addClass("selected");
                            var n = {}, a = i.attr("data-option-key"), o = t.attr("data-option-value");
                            return o = "false" === o ? !1 : o, n[a] = o, "layoutMode" === a && "function" == typeof changeLayoutMode ? changeLayoutMode(t, n) : e.isotope(n), !1
                        })
                    })
                }, 100)
            })
        }

        return e.$inject = ["$timeout", "webDevTec", "toastr", "workService"], n(e, [{
            key: "showToastr",
            value: function () {
                this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'), this.classAnimation = ""
            }
        }]), e
    }();
    t.MainController = a
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var n = function a(e, t, n) {
        "ngInject";
        i(this, a), console.log(n.id);
        var o = this;
        o.workdata = [], o.id = n.id || 0, t.getContentData(o.id).then(function (e) {
            o.workdata = e
        }), this.variable = 1, e(function () {
            angular.element(".flexslider").flexslider();
            var e = $("#container"), t = $("#options select");
            e.imagesLoaded(function () {
                e.isotope({resizable: !1, masonry: {columnWidth: e.width() / 12}}), $(window).smartresize(function () {
                    e.isotope({masonry: {columnWidth: e.width() / 12}})
                }), e.isotope({itemSelector: ".element"}), t.bind("change", function () {
                    var t = $(this).val();
                    e.isotope({filter: t})
                });
                var i = $("#options .option-set"), n = i.find("a");
                n.click(function () {
                    console.log("hello");
                    var t = $(this);
                    if (t.hasClass("selected"))return !1;
                    var i = t.parents(".option-set");
                    i.find(".selected").removeClass("selected"), t.addClass("selected");
                    var n = {}, a = i.attr("data-option-key"), o = t.attr("data-option-value");
                    return o = "false" === o ? !1 : o, n[a] = o, "layoutMode" === a && "function" == typeof changeLayoutMode ? changeLayoutMode(t, n) : e.isotope(n), !1
                })
            })
        }, 100)
    };
    n.$inject = ["$timeout", "workService", "$routeParams"], t.WorkController = n
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var n = function a(e) {
        "ngInject";
        i(this, a)
    };
    n.$inject = ["$timeout"], t.BlogController = n
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var n = function () {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        return function (t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t
        }
    }(), a = function () {
        function e(t, n) {
            "ngInject";
            i(this, e), this.$log = t, this.$http = n, this.apiHost = "https://api.github.com/repos/Swiip/generator-gulp-angular"
        }

        return e.$inject = ["$log", "$http"], n(e, [{
            key: "getContributors", value: function (e) {
                var t = this;
                return e || (e = 30), this.$http.get(this.apiHost + "/contributors?per_page=" + e).then(function (e) {
                    return e.data
                })["catch"](function (e) {
                    t.$log.error("XHR Failed for getContributors.\n" + angular.toJson(e.data, !0))
                })
            }
        }]), e
    }();
    t.GithubContributorService = a
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var n = function () {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        return function (t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t
        }
    }(), a = function () {
        function e(t, n) {
            "ngInject";
            i(this, e), this.$log = t, this.$http = n, this.url = "/app/content.json"
        }

        return e.$inject = ["$log", "$http"], n(e, [{
            key: "getContentData", value: function (e) {
                var t = this;
                return e || (e = 0), this.$http.get(this.url).then(function (i) {
                    if (e) {
                        var n = o(i.data, "id", parseInt(e));
                        return t.$log.log(i.data, "id", parseInt(e), n), i.data[n]
                    }
                    return i
                })["catch"](function (e) {
                    t.$log.error("XHR Failed for getContributors.\n" + angular.toJson(e.data, !0))
                })
            }
        }]), e
    }();
    t.WorkService = a;
    var o = function (e, t, i) {
        for (var n = 0; n < e.length; n++)if (e[n].hasOwnProperty(t) && e[n][t] === i)return n;
        return -1
    }
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var n = function () {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        return function (t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t
        }
    }(), a = function () {
        function e() {
            "ngInject";
            i(this, e), this.data = [{
                title: "AngularJS",
                url: "https://angularjs.org/",
                description: "HTML enhanced for web apps!",
                logo: "angular.png"
            }, {
                title: "BrowserSync",
                url: "http://browsersync.io/",
                description: "Time-saving synchronised browser testing.",
                logo: "browsersync.png"
            }, {
                title: "GulpJS",
                url: "http://gulpjs.com/",
                description: "The streaming build system.",
                logo: "gulp.png"
            }, {
                title: "Jasmine",
                url: "http://jasmine.github.io/",
                description: "Behavior-Driven JavaScript.",
                logo: "jasmine.png"
            }, {
                title: "Karma",
                url: "http://karma-runner.github.io/",
                description: "Spectacular Test Runner for JavaScript.",
                logo: "karma.png"
            }, {
                title: "Protractor",
                url: "https://github.com/angular/protractor",
                description: "End to end test framework for AngularJS applications built on top of WebDriverJS.",
                logo: "protractor.png"
            }, {
                title: "Sass (Node)",
                url: "https://github.com/sass/node-sass",
                description: "Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",
                logo: "node-sass.png"
            }, {
                title: "ES6 (Babel formerly 6to5)",
                url: "https://babeljs.io/",
                description: "Turns ES6+ code into vanilla ES5, so you can use next generation features today.",
                logo: "babel.png"
            }]
        }

        return n(e, [{
            key: "getTec", value: function () {
                return this.data
            }
        }]), e
    }();
    t.WebDevTecService = a
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function n() {
        "ngInject";
        var e = {
            restrict: "E",
            templateUrl: "app/components/navbar/navbar.html",
            scope: {creationDate: "="},
            controller: a,
            controllerAs: "vm",
            bindToController: !0
        };
        return e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.NavbarDirective = n;
    var a = function o(e) {
        "ngInject";
        i(this, o), this.relativeDate = e(this.creationDate).fromNow()
    };
    a.$inject = ["moment"]
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function n() {
        "ngInject";
        var e = {
            restrict: "E",
            templateUrl: "app/components/home/home.html",
            scope: {data: "=", dirtype: "="},
            controller: a,
            controllerAs: "vm",
            bindToController: !0
        };
        return e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.HomeDirective = n;
    var a = function o(e) {
        "ngInject";
        i(this, o), this.relativeDate = e(this.creationDate).fromNow()
    };
    a.$inject = ["moment"]
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function n() {
        "ngInject";
        var e = {
            restrict: "E",
            templateUrl: "app/components/skills/skills.html",
            scope: {data: "=", dirtype: "="},
            controller: a,
            controllerAs: "vm",
            bindToController: !0
        };
        return e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.SkillsDirective = n;
    var a = function o(e) {
        "ngInject";
        i(this, o), this.relativeDate = e(this.creationDate).fromNow()
    };
    a.$inject = ["moment"]
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function n() {
        "ngInject";
        var e = {
            restrict: "E",
            templateUrl: "app/components/home/image.html",
            scope: {data: "=", dirtype: "="},
            controller: a,
            controllerAs: "vm",
            bindToController: !0
        };
        return e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.ImageDirective = n;
    var a = function o(e) {
        "ngInject";
        i(this, o), this.relativeDate = e(this.creationDate).fromNow()
    };
    a.$inject = ["moment"]
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function n() {
        "ngInject";
        var e = {
            restrict: "E",
            templateUrl: "app/components/home/twitter.html",
            scope: {data: "=", dirtype: "="},
            controller: a,
            controllerAs: "vm",
            bindToController: !0
        };
        return e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.TwitterDirective = n;
    var a = function o(e, t) {
        "ngInject";
        i(this, o), e(function () {
            twttr.widgets.load()
        }, 30), this.relativeDate = t(this.creationDate).fromNow()
    };
    a.$inject = ["$timeout", "moment"]
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function n() {
        "ngInject";
        var e = {
            restrict: "E",
            templateUrl: "app/components/service/service.html",
            scope: {data: "=", dirtype: "="},
            controller: a,
            controllerAs: "vm",
            bindToController: !0
        };
        return e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.ServiceDirective = n;
    var a = function o(e) {
        "ngInject";
        i(this, o), this.relativeDate = e(this.creationDate).fromNow()
    };
    a.$inject = ["moment"]
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function n() {
        "ngInject";
        var e = {
            restrict: "E",
            templateUrl: "app/components/service/smallbox.html",
            scope: {data: "=", dirtype: "="},
            controller: a,
            controllerAs: "vm",
            bindToController: !0
        };
        return e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.SmallboxDirective = n;
    var a = function o(e) {
        "ngInject";
        i(this, o), this.relativeDate = e(this.creationDate).fromNow()
    };
    a.$inject = ["moment"]
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function n() {
        "ngInject";
        var e = {
            restrict: "E",
            templateUrl: "app/components/home/clients.html",
            scope: {data: "=", dirtype: "="},
            controller: a,
            controllerAs: "vm",
            bindToController: !0
        };
        return e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.ClientsDirective = n;
    var a = function o(e) {
        "ngInject";
        i(this, o), this.relativeDate = e(this.creationDate).fromNow()
    };
    a.$inject = ["moment"]
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function n() {
        "ngInject";
        var e = {
            restrict: "E",
            templateUrl: "app/components/portfolio/portfolio.html",
            scope: {data: "=", dirtype: "="},
            link: a,
            controller: o,
            controllerAs: "vm",
            bindToController: !0
        };
        return e
    }

    function a(e, t, i) {
        e.$watch("data", function (e, i) {
            t.find("a.popup").magnificPopup({
                image: {
                    tError: "Error: Unable to Load Image", titleSrc: function (e) {
                        return angular.element(t.find("a.popup"))[0].title + " - David Breuer - Web development"
                    }
                }, items: {src: angular.element(t.find("a.popup"))[0].href}, tLoading: "Loading...", type: "image"
            })
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.PortfolioDirective = n;
    var o = function s(e, t) {
        "ngInject";
        i(this, s)
    };
    o.$inject = ["$scope", "$timeout"]
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function n() {
        "ngInject";
        var e = {
            restrict: "E",
            templateUrl: "app/components/home/blog.html",
            scope: {data: "=", dirtype: "="},
            controller: a,
            controllerAs: "vm",
            bindToController: !0
        };
        return e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.BlogDirective = n;
    var a = function o(e) {
        "ngInject";
        i(this, o), this.relativeDate = e(this.creationDate).fromNow()
    };
    a.$inject = ["moment"]
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function n() {
        "ngInject";
        var e = {
            restrict: "E",
            templateUrl: "app/components/home/contact.html",
            scope: {data: "=", dirtype: "="},
            controller: a,
            controllerAs: "vm",
            bindToController: !0
        };
        return e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.ContactDirective = n;
    var a = function o(e) {
        "ngInject";
        i(this, o), this.relativeDate = e(this.creationDate).fromNow()
    };
    a.$inject = ["moment"]
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function n(e) {
        "ngInject";
        var t = {restrict: "AE", controller: o, controllerAs: "vm", link: a, bindToController: !0};
        return t
    }

    function a(e, t, i) {
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.FancyboxDirective = n, n.$inject = ["$compile"];
    var o = function s(e) {
        "ngInject";
        i(this, s)
    };
    o.$inject = ["moment"]
}, function (e, t) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function n(e) {
        "ngInject";
        function t(t, i, n, a) {
            var o = void 0, s = e(i[0], {typeSpeed: 40, deleteSpeed: 40, pauseDelay: 800, loop: !0, postfix: " "});
            i.addClass("acme-malarkey"), angular.forEach(t.extraValues, function (e) {
                s.type(e).pause()["delete"]()
            }), o = t.$watch("vm.contributors", function () {
                angular.forEach(a.contributors, function (e) {
                    s.type(e.login).pause()["delete"]()
                })
            }), t.$on("$destroy", function () {
                o()
            })
        }

        var i = {
            restrict: "E",
            scope: {extraValues: "="},
            template: "&nbsp;",
            link: t,
            controller: o,
            controllerAs: "vm"
        };
        return i
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = function () {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        return function (t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t
        }
    }();
    t.MalarkeyDirective = n, n.$inject = ["malarkey"];
    var o = function () {
        function e(t, n) {
            "ngInject";
            i(this, e), this.$log = t, this.contributors = [], this.activate(n)
        }

        return e.$inject = ["$log", "githubContributor"], a(e, [{
            key: "activate", value: function (e) {
                var t = this;
                return this.getContributors(e).then(function () {
                    t.$log.info("Activated Contributors View")
                })
            }
        }, {
            key: "getContributors", value: function (e) {
                var t = this;
                return e.getContributors(10).then(function (e) {
                    return t.contributors = e, t.contributors
                })
            }
        }]), e
    }()
}]), angular.module("davidbreuerHeroku").run(["$templateCache", function (e) {
    e.put("app/blog/blog.html", '<div class="dedicated-page-navi"><div class="container"><a href="../index.html" class="close"></a></div></div><div class="container"><div id="container" class="clearfix dedicated-page"><div class="element clearfix col1-1"><div class="images"><img src="../images/shutterstock_60324319-blog.jpg" alt=""></div></div><div class="element clearfix col1-3"><h2>Text Widget</h2><p>Justo quam fellis, ultricies pellentesque eu, pretium quis sem. Donec pede justo, frin gilla vel, aliquet nec.</p></div><div class="element clearfix col1-3"><h2>Categories</h2><p><a href="#" onclick="return false">Print</a>, <a href="#" onclick="return false">Photography, <a href="#" onclick="return false">Identity</a>, <a href="#" onclick="return false">Webdesign</a>, <a href="#" onclick="return false">Illustration</a></a></p></div><div class="element clearfix col1-1"><div class="blog-icon comment responsive"><i class="icons bubble"></i><span class="padding-right responsive">Posted: Jan 17 2013</span><span class="padding-right responsive">By: Admin</span><span class="alignright responsive">Comments: 2</span><span class="padding-right alignright responsive">Tags: Standard</span></div><h2 class="blog-heading">We Appreciate Any Kind of Feedback</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula felis euismod semper. <span>Donec ullamcorper</span> nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.Nullam quis risus eget urna mollis ornare.</p><p class="blockquote">“ This could be a blockquote. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo tristique odio. ” <span><br>John Doe, Company Name</span></p><p>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.</p><div class="break"></div></div><div class="element clearfix col1-1"><a href="#" onclick="return false"><div class="blog-icon comment"><i class="icons bubble"></i>Posted: Jan 17 2013<span class="alignright reply">Reply</span></div></a><h2 class="blog-heading">John Doe says:</h2><p class="comments">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy. Cum sociis natoque perse penatibus et magnis.</p><div class="reply-comment"></div><a href="#" onclick="return false"><div class="blog-icon comment"><div class="padding-left"><i class="icons bubble"></i></div>Posted: Jan 17 2013<span class="alignright reply">Reply</span></div></a><div class="padding-left"><h2 class="blog-heading">Amy McDougell replies:</h2><p class="comments">Cras mattis consectetur purus sit amet fermentum.Nullam quis risus eget urna mollis ornare.</p></div><div class="break"></div></div><div class="element clearfix col1-1"><a href="#" onclick="return false"><div class="blog-icon comment"><i class="icons bubble"></i>Posted: Jan 18 2013<span class="alignright reply">Reply</span></div></a><h2 class="blog-heading">Mike Matts says:</h2><p class="comments">Justo quam fellis, ultricies pellentesque eu, pretium quis sem. Donec pede justo, frin gilla vel, aliquet nec.</p><div class="break"></div></div><div class="element clearfix col1-3 no-padding"><div id="contact"><div id="message"></div><form method="post" action="http://ppp-templates.de/showcase/contact.php" name="contactform" id="contactform"><fieldset><div class="alignleft padding-right"><label for="name" accesskey="U"><span class="required">Name</span></label> <input name="name" type="text" id="name" size="30" title="Name *"> <label for="email" accesskey="E"><span class="required">Email</span></label> <input name="email" type="text" id="email" size="30" title="Email *"> <label for="phone" accesskey="P"><span class="required">Phone</span></label> <input name="phone" type="text" id="phone" size="30" title="Phone *" class="third"></div><label for="comments" accesskey="C"><span class="required">Comments</span></label> <textarea name="comments" cols="40" rows="3" id="comments" title="Comment *"></textarea> <input type="submit" class="submit" id="submit" value="Submit"></fieldset></form></div></div></div></div><footer class="centered">© 2013, Showcase. All rights reserved.<ul class="social clearfix"><li class="tweat"><a href="#" onclick="return false">Visit our twitter Account</a></li><li class="facebook"><a href="#" onclick="return false">Visit our facebook Account</a></li><li class="dribble"><a href="#" onclick="return false">Visit our dribble Account</a></li><li class="vimeo"><a href="#" onclick="return false">Visit our vimeo Account</a></li><li class="google"><a href="#" onclick="return false">Visit our googleplus Account</a></li></ul></footer>'), e.put("app/main/main.html", '<acme-navbar creation-date="main.creationDate"></acme-navbar><div class="container"><div id="container" class="clearfix"><div ng-repeat="elem in main.homedata track by elem.id" ng-class="elem.filter" class="element"><acme-home ng-if="elem.type==\'home\'" data="elem.content"></acme-home><acme-skills ng-if="elem.type==\'skills\'" data="elem.content"></acme-skills><acme-image ng-if="elem.type==\'image\'" data="elem.content"></acme-image><acme-twitter ng-if="elem.type==\'twitter\'" data="elem.content"></acme-twitter><acme-service ng-if="elem.type==\'service\'" data="elem.content"></acme-service><acme-smallbox ng-if="elem.type==\'small\'" data="elem.content"></acme-smallbox><acme-clients ng-if="elem.type==\'clients\'" data="elem.content"></acme-clients><acme-portfolio ng-if="elem.type==\'portfolio\'" data="elem"></acme-portfolio></div></div></div><footer class="centered">© 2015, David Breuer. All rights reserved.<ul class="social clearfix"><li class="tweat"><a href="https://twitter.com/szunyog83" onclick="return false"><i class="fa fa-facebook"></i></a></li><li class="facebook"><a href="https://www.facebook.com/breuerdavid.83" onclick="return false">Visit our facebook Account</a></li><li class="linkedin"><a href="http://uk.linkedin.com/in/breuerdavid/" onclick="return false">Visit our dribble Account</a></li><li class="github"><a href="https://github.com/dbreuer83" onclick="return false">Visit our vimeo Account</a></li></ul></footer>'), e.put("app/work/work.html", '<div class="dedicated-page-navi"><div class="container"><a href="/home" class="close"></a></div></div><div class="container"><div id="container" class="clearfix dedicated-page"><div class="element clearfix col1-1"><div class="flexslider"><div class="images"><ul class="slides"><li ng-repeat="images in work.workdata.content.details.images"><img ng-src="{{images}}" style="width: 100%" alt="{{work.workdata.content.title}} - $index"></li></ul></div></div></div><div class="element clearfix col1-3"><h2 ng-bind="work.workdata.content.title">Some Project Title</h2><p>Client: <span ng-bind="work.workdata.content.details.client">Microsoft</span><br>Date: <span ng-bind="work.workdata.content.details.date | date: \'mediumDate\'">November 2012</span></p><p><span ng-repeat="skill in work.workdata.content.details.skills"><span ng-bind="skill"></span> |</span></p></div><div class="element clearfix col1-3 no-padding"><div class="infos-single-work"><a href="{{work.workdata.content.link}}" onclick="return false"><div class="tab"><i class="icons link"></i>Visit Website</div></a> <a href="#" onclick="return false"><div class="tab"><i class="icons facebook"></i>I like it!</div></a> <a href="mailto:dbreuer83@gmail.com"><div class="tab last"><i class="icons email"></i>Contact Us</div></a></div></div><div class="element clearfix col2-3"><h2>About this Project</h2><h3 ng-bind-html="work.workdata.content.details.description"></h3></div><div class="element clearfix col1-3"><p class="blockquote">“ This could be a blockquote. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo tristique odio. ” <span><br>John Doe, Company Name</span></p></div></div></div><footer class="centered">© 2015, David Breuer. All rights reserved.<ul class="social clearfix"><li class="tweat"><a href="https://twitter.com/szunyog83" onclick="return false">Visit our twitter Account</a></li><li class="facebook"><a href="https://www.facebook.com/breuerdavid.83" onclick="return false">Visit our facebook Account</a></li><li class="linkedin"><a href="http://uk.linkedin.com/in/breuerdavid/" onclick="return false">Visit our dribble Account</a></li><li class="github"><a href="https://github.com/dbreuer83" onclick="return false">Visit our vimeo Account</a></li></ul></footer>'), e.put("app/components/home/about.html", '<div class="element clearfix col2-3 about"><h2>About Us</h2><h3>We are regarded as <span>industry leaders</span> in stunning website solutions, focused on delivering unsurpassed user experiences.</h3></div><div class="element clearfix col1-3 about"><div class="movable-content"><div class="images"><img src="images/about1.jpg" alt=""></div><div class="title"><h4>John Doe</h4><p>Co-Founder &amp; CEO</p></div></div><div class="infos"><a href="#" onclick="return false"><div class="tab"><i class="icons xing"></i>Visit my Xing account</div></a><a href="#" onclick="return false"><div class="tab"><i class="icons email"></i>Write me an email</div></a><a href="#" onclick="return false"><div class="tab last"><i class="icons google"></i>Me on GooglePlus</div></a></div></div><div class="element clearfix col1-3 about"><div class="movable-content"><div class="images"><img src="images/about2.jpg" alt=""></div><div class="title"><h4>Jason Black</h4><p>Co-Founder &amp; UI Designer</p></div></div><div class="infos"><a href="#" onclick="return false"><div class="tab"><i class="icons instagram"></i>Instagram pics</div></a><a href="#" onclick="return false"><div class="tab"><i class="icons skype"></i>Jason.Black13</div></a><a href="#" onclick="return false"><div class="tab"><i class="icons email"></i>Write me an email</div></a><a href="#" onclick="return false"><div class="tab last"><i class="icons vimeo"></i>Me on Vimeo</div></a></div></div><div class="element clearfix col1-3 about"><div class="movable-content"><div class="images"><img src="images/about3.jpg" alt=""></div><div class="title"><h4>Tim Smith</h4><p>Front-end Developer</p></div></div><div class="infos"><a href="#" onclick="return false"><div class="tab"><i class="icons tweat"></i>@tim.smith</div></a><a href="#" onclick="return false"><div class="tab"><i class="icons pinterest"></i>My Pinterest account</div></a><a href="#" onclick="return false"><div class="tab last"><i class="icons facebook"></i>Visit me on facebook</div></a></div></div>'), e.put("app/components/home/blog.html", '<div class="element clearfix col2-3 blog"><h2>Our Blog</h2><h3>News, comments, and hints on user experience and website solutions as well as <span>current information</span> on agency\'s decelopment.</h3></div><div class="element clearfix col1-3 blog"><a href="single-post.html"><div class="blog-icon"><i class="icons bubble"></i>Posted: Jan 17 2013</div></a><h2><a href="single-post.html">We Appreciate Any Kind of Feedback</a></h2><p>Cum sociis natoque perse penatibus et magnis dis parturient ...</p></div><div class="element clearfix col1-3 blog"><a href="single-post.html"><div class="blog-icon"><i class="icons quote"></i>Posted: Jan 17 2013</div></a><h2><a href="single-post.html">Post with a Quote</a></h2><p>Cum sociis natoque perse penatibus et magnis dis parturient ...</p></div><div class="element clearfix col1-3 blog"><a href="single-post.html"><div class="blog-icon"><i class="icons video"></i>Posted: Jan 17 2013</div></a><h2><a href="single-post.html">We Boost Your Sales</a></h2><p>Cum sociis natoque perse penatibus et magnis dis parturient ...</p></div><div class="element clearfix col1-3 blog"><a href="single-post.html"><div class="blog-icon"><i class="icons link"></i>Posted: Jan 17 2013</div></a><h2><a href="single-post.html">Ok, One Last Link</a></h2><p>Cum sociis natoque perse penatibus et magnis dis parturient ...</p></div><div class="element clearfix col1-3 blog"><a href="single-post.html"><div class="blog-icon"><i class="icons slideshow"></i>Posted: Jan 17 2013</div></a><h2><a href="single-post.html">Slideshow Post</a></h2><p>Cum sociis natoque perse penatibus et magnis dis parturient ...</p></div><div class="element clearfix col1-3 blog"><a href="single-post.html"><div class="blog-icon"><i class="icons aside"></i>Posted: Jan 17 2013</div></a><h2><a href="single-post.html">Aside Post Format</a></h2><p>Cum sociis natoque perse penatibus et magnis dis parturient ...</p></div>'), e.put("app/components/home/clients.html", '<div class="element clearfix col2-3 clients"><h2 ng-bind="vm.data.title"></h2><div class="logo" data-ng-repeat="logo in vm.data.logos" ng-if="$index < 3"><img ng-src="{{logo}}" alt=""></div><p class="blockquote" ng-bind="vm.data.quote"></p><div class="logo" data-ng-repeat="logo in vm.data.logos" ng-if="$index >= 3"><img ng-src="{{logo}}" alt=""></div></div>'), e.put("app/components/home/contact.html", '<div class="element clearfix col2-3 contact"><div id="map"></div></div><div class="element clearfix col1-3 contact"><h2>Contact Showcase</h2><p>22 Miron Drive<br>New York City, 12603 NY</p><p>hello@domain.com<br>(845) 123 4567</p></div><div class="element clearfix col1-3 contact"><h2>Need Support?</h2><p>Monday thru Friday:<br>9am - 10pm</p><p>On Weekends:<br>Answering a few Questions</p></div>'), e.put("app/components/home/home.html", '<div class="element clearfix col2-3 home"><h2 ng-bind="vm.data.title"></h2><h3 ng-bind-html="vm.data.content"></h3></div>'), e.put("app/components/home/image.html", '<div class="element clearfix col1-3 home no-padding"><div class="images"><img ng-src="{{vm.data.src}}" alt="vm.data.title"></div></div>'), e.put("app/components/home/twitter.html", '<div class="element clearfix col1-3 home no-padding"><div id="twitter_update_list" twitter="vm.data.account"></div></div>'), e.put("app/components/navbar/navbar.html", '<header id="wrapper"><div id="logo-container"><h1 id="logo"><a href="index.html"><div class="green">David</div><div class="blue">Breuer</div></a></h1><p class="slogan">Hacker | Creator | Food fan</p><p></p></div><div id="options" class="clearfix"><ul id="filters" class="option-set clearfix" data-option-key="filter"><li><a href="" data-option-value="*" class="selected">Home</a></li><li><a href="" data-option-value=".service">Services</a></li><li><a href="" data-option-value=".portfolio">Portfolio</a></li><li><a href="" data-option-value=".about">About</a></li></ul></div></header>'), e.put("app/components/portfolio/portfolio.html", '<div class="element clearfix col1-3 portfolio"><div class="movable-content"><div class="images"><img ng-src="{{vm.data.content.src}}" alt="{{vm.data.content.title}}"></div><div class="title"><h4 ng-bind="vm.data.content.title">Some Project Title</h4><p ng-bind="vm.data.content.subtitle">Webdesign</p></div></div><div class="infos"><a href="#/work/{{vm.data.id}}"><div class="tab"><i class="icons view-more"></i>View Info</div></a> <a href="{{vm.data.content.details.images[0]}}" title="{{vm.data.content.title}}" class="popup fancybox"><div class="tab"><i class="icons zoom"></i>Open in Lightbox</div></a> <a ng-if="vm.data.content.details.video" class="video-popup" href="" ng-href="{{vm.data.content.details.video}}"><div class="tab"><i class="icons video"></i>Video in Lightbox</div></a> <a ng-if="vm.data.content.pdf" href="" ng-href="{{vm.data.content.pdf}}" target="_blank"><div class="tab"><i class="icons pdf"></i>Link to PDF file</div></a> <a ng-if="vm.data.content.link" href="" ng-href="{{vm.data.content.link}}" target="_blank"><div class="tab last"><i class="icons link"></i>Visit Website</div></a></div></div>'),
        e.put("app/components/service/service.html", '<div class="element clearfix col2-3 services"><h2 ng-bind="vm.data.title"></h2><h3 ng-bind-html="vm.data.content"></h3></div>'), e.put("app/components/service/smallbox.html", '<div class="element clearfix col1-3 services" ng-class="{\'green\': vm.data.title == \'Design\'}"><h2 ng-bind="vm.data.title"></h2><p ng-bind-html="vm.data.content"></p></div>'), e.put("app/components/skills/skills.html", '<div class="element clearfix col1-3 skills"><div class="infos"><a href="" ng-href="" ng-repeat="(key, detail) in vm.data.details"><div class="skill-tab"><div class="percentage" style="width: {{detail.value}}%"></div><span ng-bind="key"></span></div></a></div></div>')
}]);
//# sourceMappingURL=../maps/scripts/app-2c2843e275.js.map
