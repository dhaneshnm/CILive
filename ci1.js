/*! Generated On 23-04-2014 17:17:33 */
/*!
 * @fileOverview Utilities needed by other modules
 * @version 0.0.2
 */
var espn = espn || {};
espn.utils = function () {
    var a = {};
    /*!namespace fn JavaScript Patterns,Stoyan Stefanov,
     Copyright 2010 Yahoo! Inc.*/
    return a.namespace = function (a) {
        var b = a.split(".");
        var c = espn;
        var d;
        for ("espn" === b[0] && (b = b.slice(1)), d = 0; d < b.length; d += 1) "undefined" == typeof c[b[d]] && (c[b[d]] = {}), c = c[b[d]];
        return c
    }, a.getUrlParams = function () {
        var a = window.location.search;
        a = a.substring(1);
        var b = a.split(";");
        return b
    }, a.getFromUrlParams = function (b) {
        var c = a.getUrlParams();
        var d = b + "=";
        for (var e = c.length - 1; e >= 0; e--)
            if (c[e].indexOf(d) > -1) {
                var f = c[e].split(d)[1];
                return f
            }
        return !1
    }, a.isDebug = function () {
        return "1" === a.getFromUrlParams("debug") ? !0 : !1
    }, a
}(), espn.utils.namespace("matchcenter.helpers"), espn.matchcenter.helpers = function (a, b, c, d) {
    var e = {};
    var f = a("#matchId");
    e.populateTemplate = function (a, b) {
        if (d.hasOwnProperty(a)) {
            var c = d[a];
            var e = c(b);
            return e
        }
    }, e.getScoreDetails = function (a, c) {
        var d = {};
        var e = {};
        if (b.isEmpty(a) === !0) return d;
        var f = ["dots", "ones", "twos", "threes", "fours", "fives", "sixes", "more"];
        return d = b.object(f, a), c === !1 && (b.each(d, function (a, b) {
            "0" !== a && (e[b] = a)
        }), d = e), d
    }, e.getCenterEnvironUrl = function () {
        var a = "http://";
        var b = "/ci/engine/match/live/centre/";
        var c = f.data("endpoint");
        c || (c = "www.espncricinfo.com");
        var d = a + c + b;
        return d
    }, e.getMatchId = function () {
        var a = f.data("matchid");
        return "undefined" == typeof a ? !1 : a.toString()
    }, e.isMatchComplete = function () {
        var b = a("#matchId").data("complete");
        return "undefined" == typeof b ? !1 : 1 === b ? !0 : !1
    }, e.isDebug = function () {
        return "1" === c.getFromUrlParams("debug") ? !0 : !1
    }, e.tooltip = {
        show: function (b) {
            b = b || {};
            var c = b.title || "";
            var d = b.content || "";
            var e = b.top || 0;
            var f = b.left || 0;
            var g = a(".mcr-tooltip");
            var h = 20;
            g.find(".mcr-tooltip-title").text(c).end().find(".mcr-tooltip-content").html(d).end().css({
                top: e - g.outerHeight() - h,
                left: f - g.outerWidth() / 2 - h
            }).show()
        },
        hide: function () {
            a(".mcr-tooltip").hide()
        }
    };
    var g = "selectedinn";
    var h = "ongoinginn";
    return e.getSelectedInn = function () {
        return a("#mcr").data(g)
    }, e.getOngoingInn = function () {
        return a("#mcr").data(h)
    }, e.setSelectedInn = function (b) {
        a("#mcr").data(g, b)
    }, e.setOngoingInn = function (b) {
        a("#mcr").data(h, b)
    }, e.isInningsCard = function () {
        return a("#mcr").hasClass("mcr-inn")
    }, e.isBattingCard = function () {
        return a("#mcr").hasClass("mcr-bat")
    }, e.isBowlingCard = function () {
        return a("#mcr").hasClass("mcr-bowl")
    }, e.removeMugshotHighlight = function () {
        a("#mcr").find(".mcr-all-player-mugshot").removeClass("mcr-selected-player")
    }, e.addTitleOnHomeButtom = function () {
        a("#mcr").find(".mcr-all-menu-link").attr("title", "Go to Innings Card")
    }, e.removeTitleOnHomeButton = function () {
        a("#mcr").find(".mcr-all-menu-link").attr("title", "")
    }, e.batbowlFilterTemplate = function (a, b) {
        var c = "";
        if (c += "<li data-type='" + b + "' data-id='0'>All</li>", a && a.length > 0)
            for (var d = 0; d < a.length; d++) c += "<li data-type='" + a[d].type + "' data-id='" + a[d].value + "'>" + a[d].name + "</li>";
        return c
    }, e.displayCard = function (b) {
        var c = {
            inn: {
                divId: "#mcr-innings-temp",
                className: "mcr-inn"
            },
            bat: {
                divId: "#mcr-batting-temp",
                className: "mcr-bat"
            },
            bowl: {
                divId: "#mcr-bowling-temp",
                className: "mcr-bowl"
            }
        };
        c.hasOwnProperty(b) !== !1 && (a("#mcr").find(".mcr-vis").hide(), a(c[b].divId).show(), a("#mcr").removeClass().addClass(c[b].className))
    }, e
}(jQuery, _, espn.utils, espn.templates),
/*!
 * @fileOverview Config settings for ESPN Cricinfo matchcenter module
 * @Version 0.0.45
 */
espn.utils.namespace("matchcenter.config"), espn.matchcenter.config = function () {
    var a = {};
    return a.VERSION = "0.0.45", a.jsonKeys = {
        batsmen: ["hand", "image_path", "known_as", "player_id", "popular_name", "position"],
        bowlers: ["hand", "image_path", "known_as", "pacespin", "player_id", "popular_name", "position"]
    }, a.templateInputs = {
        overview: {
            innings: [],
            current_innings: {
                overs: "",
                runs: "",
                wickets: "",
                run_rate: ""
            }
        },
        batsmen: [],
        bowlers: [],
        currentPlayers: {
            currentBatsmen: [],
            currentBowlers: []
        },
        currentBatsman: {},
        currentBowler: {},
        battingcardtopstrip: {}
    }, a
}(), espn.utils.namespace("matchcenter.charts"), espn.matchcenter.charts = function (a) {
    var b = {};
    var c = "BentonSansBold, Arial, sans-serif";

    function d(a) {
        var b = "";
        var c = [];
        var d = ", ";
        if (a) {
            for (var e = 0, f = a.length; f > e; e++) 0 !== a[e] && c.push("<b>" + e + "</b> x " + a[e] + "s");
            c && (b = c.join(d))
        }
        return b
    }
    return b.options = {
        bar: {
            title: "Control %",
            labelAttr: {
                "font-size": "11px",
                "text-anchor": "start",
                "font-style": "italic"
            },
            valAttr: {
                "font-size": "10px",
                "font-family": c
            },
            width: 90,
            height: 28,
            barHeight: 7,
            barPosY: 20,
            textPosY: 13,
            colorMeter: !0,
            marker: !0,
            valueXpos: 61
        },
        overallBar: {
            title: "Dot ball %",
            labelAttr: {
                "font-size": "11px",
                "text-anchor": "start",
                "font-style": "italic",
                fill: "#b2b2b2"
            },
            valAttr: {
                "font-size": "12px",
                "font-family": c,
                fill: "#fff"
            },
            width: 90,
            height: 28,
            barHeight: 7,
            barPosY: 20,
            textPosY: 13,
            colorMeter: !0,
            marker: !0,
            valueXpos: 61,
            stopColor1: "green",
            stopColor1Offset: "0%",
            stopColor2: "yellow",
            stopColor2Offset: "47.5%",
            stopColor3: "red",
            stopColor3Offset: "100%"
        },
        bar_notitle: {
            title: "Control",
            colors: ["#3e3e3e", "#fff"],
            width: 75,
            height: 7,
            barPosY: .1,
            barHeight: 7,
            colorMeter: !0,
            hideLabel: !0
        },
        wagon: {
            diameter: 85,
            textPadding: 15,
            colors: ["#7ace5c", "#f88f22", "white"],
            onMouseover: function (a, b) {
                var c = d(b.data.runs_summary);
                espn.matchcenter.helpers.tooltip.show({
                    title: c ? "Runs breakup" : "No runs scored",
                    content: c,
                    top: a.pageY,
                    left: a.pageX
                })
            },
            onMouseout: espn.matchcenter.helpers.tooltip.hide
        },
        heatmap: {
            width: 90,
            height: 125,
            legends: !0,
            keyTextAttr: {
                style: "font-size:0.67em",
                fill: "#3e9fca"
            },
            onKeyMouseover: function (a, b) {
                espn.matchcenter.helpers.tooltip.show({
                    title: b.text || "",
                    top: a.pageY,
                    left: a.pageX
                })
            },
            onKeyMouseout: espn.matchcenter.helpers.tooltip.hide,
            showValues: !0,
            labelAttr: {
                "font-size": ".7em"
            },
            onMouseover: function (a, b) {
                espn.matchcenter.helpers.tooltip.show({
                    title: b.balls + "b " + b.runs + "r " + b.wickets + "w",
                    top: a.pageY,
                    left: a.pageX
                })
            },
            onMouseout: espn.matchcenter.helpers.tooltip.hide
        },
        pitch_map: {
            legends: {
                "3x6": [
                    [{
                        key: "WO",
                        text: "Wide outside offstump"
                    }, {
                        key: "S",
                        text: "On the stumps"
                    }, {
                        key: "WL",
                        text: "Wide down leg"
                    }],
                    [{
                        key: "FT",
                        text: "Full toss"
                    }, {
                        key: "Y",
                        text: "Yorker"
                    }, {
                        key: "F",
                        text: "Full length"
                    }, {
                        key: "G",
                        text: "Good length"
                    }, {
                        key: "SG",
                        text: "Short of good length"
                    }, {
                        key: "S",
                        text: "Short length"
                    }]
                ],
                "5x6": [
                    [{
                        key: "WO",
                        text: "Wide outside offstump"
                    }, {
                        key: "O",
                        text: "Outside offstump"
                    }, {
                        key: "S",
                        text: "On the stumps"
                    }, {
                        key: "L",
                        text: "Down Leg"
                    }, {
                        key: "WL",
                        text: "Wide down leg"
                    }],
                    [{
                        key: "FT",
                        text: "Full toss"
                    }, {
                        key: "Y",
                        text: "Yorker"
                    }, {
                        key: "F",
                        text: "Full length"
                    }, {
                        key: "G",
                        text: "Good length"
                    }, {
                        key: "SG",
                        text: "Short of good length"
                    }, {
                        key: "S",
                        text: "Short length"
                    }]
                ]
            }
        }
    }, b.partnership = a.select(".mcr-inn-partnerships-chart").chart("stacked", {
        height: 300,
        width: 175,
        hideLine: !0,
        barHeight: 10,
        minSpacing: 20,
        colors: ["#7bcd61", "#fd8f20", "#fe6321"],
        varyColors: !0,
        titleAttr: {
            "font-weight": "bold",
            "font-size": "0.9em"
        },
        labelAttr: {
            "font-size": "0.8em"
        },
        valueAttr: {
            "font-size": "0.8em"
        }
    }), b.getFow = function (a) {
        var b = [],
            c = [];
        for (var d = 0, e = a.length; e > d; d++) {
            var f = a[d],
                g = f.player[0],
                h = f.player[1];
            b.push({
                label: g.popular_name + " " + g.runs,
                layer: 1,
                stackId: d.toString() + 1,
                x: d,
                y: g.runs
            }), c.push({
                label: h.popular_name + " " + h.runs,
                layer: 1,
                stackId: d.toString() + 1,
                x: d,
                y: h.runs,
                title: f.runs + (f.notout ? "*" : "")
            })
        }
        return [
            [b],
            [c]
        ]
    }, b.getZones = function (b) {
        var c = [],
            d = 8,
            e, f, g;
        b = b && b.length === d ? b : [0, 0, 0, 0, 0, 0, 0, 0], e = a.max(b, function (a) {
            return Number(a.runs)
        });
        for (var h = 0; d > h; h++) f = b[h], g = Number(f.runs) || 0, c.push({
            zone: h + 1,
            runs: g,
            max: e === g && e > 0 ? !0 : !1,
            runs_summary: f.runs_summary,
            scoring_shots: f.scoring_shots
        });
        return c
    }, b.getPitchMap = function (a) {
        var b = 1,
            c = [],
            d;
        for (var e = 0, f = a.length; f > e; e++) {
            d = a[e];
            for (var g = 0, h = d.length; h > g; g++) c.push({
                runs: d[g][0],
                wickets: d[g][1],
                balls: d[g][2],
                zone: b
            }), b++
        }
        return {
            data: c,
            grid: {
                x: a && a[0] && a[0].length || 5,
                y: a && a.length || 5
            }
        }
    }, b.getSpikes = function (a, b, c) {
        var d = 350,
            e = [],
            f;
        b = b || 225, c = c || 3, b -= 2 * c;
        for (var g = 0, h = a.length; h > g; g++) f = a[g], e.push({
            x: Number(f[0]) * b / d,
            y: Number(f[1]) * b / d,
            runs: Number(f[2])
        });
        return e
    }, b.getComparisons = function (a) {
        var b = [],
            c;
        for (var d = 0, e = a.length; e > d; d++) c = a[d], b.push({
            over: Number(c[0]),
            runs: Number(c[1]),
            rate: Number(c[2])
        });
        return b
    }, b
}(d3), espn.utils.namespace("matchcenter.events"), espn.matchcenter.events = function (a, b, c, d, e) {
    var f = {};
    var g = a("#mcr");
    var h = {},
        i = "";
    var j;
    var k = [1, 2, 3, 4, 5, 6];
    f.initBat = function () {
        Y(), j = d3.select("#filter-wagon").chart("wagon", {
            diameter: 47,
            type: "filter",
            onClick: D
        }), j.draw()
    };

    function l(a) {
        return b.isEmpty(a) === !1 && a.hasOwnProperty("centre") ? !0 : !1
    }
    var m = d.getCenterEnvironUrl();
    var n = c.templateInputs;
    var o = [];
    var p = e.options;
    var q = "inn";
    var r, s, t, u = "",
        v, w = !0,
        x = !1,
        y = 2e4;
    var z = {
        inn: {
            batCtrl: {
                isInit: !1,
                ref: !1
            }
        }
    };
    var A = 0,
        B = 0,
        C = 0;

    function D(b) {
        var c = {},
            d = "";
        if (L(c, b, !0), b && b.length > 0 && "none" === a("#mcr-batcard-wagon").css("display")) {
            for (var f = 0; f < b.length; f++) d += ";zone=" + b[f];
            C = 1, H(r, s, t, !1, d)
        } else if ("none" === a("#mcr-batcard-wagon").css("display")) {
            var g = [];
            a("#mcr-batcard-spike").html("");
            var h = d3.select("#mcr-batcard-spike").chart("spikes", {
                diameter: 225,
                textPadding: 30,
                colors: ["#7ace5c", "#f88f22", "#7ace5c"]
            });
            h.draw(e.getSpikes(g))
        }
    }

    function E(b) {
        var c;
        a.isEmptyObject(b) || (c = b.centre, h = c.batting);
        var d = h.wagon;
        P(d)
    }
    var F = {
        batsman: 0,
        bowler: 0,
        batsmanFilter: 0,
        bowlerFilter: 0
    };
    var G = 12e4;

    function H(b, c, e, f, h) {
        b && (r = b), c && (s = c), e && (t = e), g.find("#mcr_player_graph div").hide(), a("#" + i).show();
        var k = {
            timerName: ""
        };
        w = f;
        var l = "";
        "bat" === r ? (C = 0, h ? (k.timerName = "batsmanFilter", x = !0, y = 12e4, -1 !== h.indexOf("all") ? l = m + d.getMatchId() + ".json?batsman=" + s + ";card=batting;innings=" + t : -1 !== h.indexOf("hand") ? l = m + d.getMatchId() + ".json?batsman=" + s + ";card=batting;" + h + ";innings=" + t : -1 !== h.indexOf("pacespin") ? l = m + d.getMatchId() + ".json?batsman=" + s + ";card=batting;innings=" + t + ";" + h : -1 !== h.indexOf("zone") ? (C = 1, l = m + d.getMatchId() + ".json?batsman=" + s + ";card=batting;innings=" + t + h) : l = m + d.getMatchId() + ".json?batsman=" + s + ";" + h + ";card=batting;innings=" + t) : (k.timerName = "batsman", x = !1, y = 2e4, l = m + d.getMatchId() + ".json?batsman=" + s + ";card=batting;innings=" + t)) : "bowl" === r && (h ? (k.timerName = "bowlerFilter", x = !0, y = 12e4, l = -1 !== h.indexOf("all") ? m + d.getMatchId() + ".json?bowler=" + s + ";card=bowling;innings=" + t : -1 !== h.indexOf("hand") ? m + d.getMatchId() + ".json?bowler=" + s + ";card=bowling;" + h + ";innings=" + t : m + d.getMatchId() + ".json?" + h + ";bowler=" + s + ";card=bowling;innings=" + t) : (k.timerName = "bowler", x = !1, y = 2e4, l = m + d.getMatchId() + ".json?bowler=" + s + ";card=bowling;innings=" + t)), 0 === C && j.draw();
        var n = !0;
        a.ajax({
            url: l,
            type: "GET",
            dataType: "json",
            ifModified: n,
            context: k,
            success: I,
            complete: function () {
                this.hasOwnProperty("timerName") && "batsmanFilter" === this.timerName ? (window.clearTimeout(F.batsman), F.batsman = window.setTimeout(H, G)) : this.hasOwnProperty("timerName") && "bowlerFilter" === this.timerName && (window.clearTimeout(F.bowler), F.bowler = window.setTimeout(H, G)), d.isDebug() || d.isMatchComplete() || d.isInningsCard() || x || this.hasOwnProperty("timerName") && F.hasOwnProperty(this.timerName) && (window.clearTimeout(F[this.timerName]), F[this.timerName] = window.setTimeout(H, y))
            }
        })
    }

    function I(b) {
        if (!d.isInningsCard()) {
            var c = [];
            1 === C && "bat" === r ? (E(b), K(b, c, !1)) : "bat" === r ? (T(b), Q(b), K(b, c, !1), L(b, c, !1), W(b), (w || "undefined" == typeof w) && J(b, "bat"), x || a("#mcr-bat-bvfilter span").text("Filter By Bowlers")) : "bowl" === r && (S(b, "batting_rhb"), S(b, "batting_lhb"), V(b), (w || "undefined" == typeof w) && J(b, "bowl"), x || a("#mcr-bowl-bvfilter span").text("Filter By Batsman"), R(b))
        }
    }

    function J(b, c) {
        var e, f, g, i, j, k, l, m = [],
            n = {};
        if (a.isEmptyObject(b) || (e = b.centre, "bat" === c ? h = e.batting : f = e.bowling), "bowl" === c && f && f.filter) {
            if (m = [], g = f.filter, g.batsman && (i = g.batsman), g.hand && (k = g.hand), i && i.length > 0)
                for (var o = 0; o < i.length; o++) n = {}, n.name = i[o].name, n.value = i[o].value, n.type = "batsman", m.push(n);
            if (k && k.length > 0)
                for (var p = 0; p < k.length; p++) n = {}, k[p].name.length > 0 && -1 === k[p].name.indexOf("unknown") && (-1 !== k[p].name.indexOf("right-hand batsman") ? n.name = "Right Hand" : -1 !== k[p].name.indexOf("left-hand batsman") && (n.name = "left Hand"), n.type = "hand", n.value = k[p].value, m.push(n))
        }
        if ("bat" === c && h && h.filter) {
            if (m = [], g = h.filter, g.bowler && (j = g.bowler), g.hand && (k = g.hand), g.pacespin && (l = g.pacespin), j && j.length > 0)
                for (var q = 0; q < j.length; q++) n = {}, n.name = j[q].name, n.value = j[q].value, n.type = "bowlers", m.push(n);
            if (k && k.length > 0)
                for (var r = 0; r < k.length; r++) n = {}, k[r].name.length > 0 && -1 === k[r].name.indexOf("unknown") && (-1 !== k[r].name.indexOf("right-arm bowler") ? n.name = "Right Arm" : -1 !== k[r].name.indexOf("left-arm bowler") && (n.name = "Left Arm"), n.type = "hand", n.value = k[r].value, m.push(n));
            if (l && l.length > 0)
                for (var s = 0; s < l.length; s++) n = {}, l[s].name.length > 0 && -1 === l[s].name.indexOf("unknown") && (-1 !== l[s].name.indexOf("pace bowler") ? n.name = "Pace" : -1 !== l[s].name.indexOf("spin bowler") && (n.name = "Spin"), n.type = "pacespin", n.value = l[s].value, m.push(n))
        }
        var t = d.batbowlFilterTemplate(m, c);
        "bat" === c ? a("#mcr-bat-drop").html(t) : a("#mcr-bowl-drop").html(t)
    }

    function K(c, e, f) {
        var i;
        a.isEmptyObject(c) || (i = c.centre, h = i.batting), a("#summaryfilter").html("");
        var j = a.extend(!0, {}, n.filtezone);
        if (h.hasOwnProperty("filtered") && b.isEmpty(h.filtered) === !1) {
            var k = h.filtered;
            var l = [];
            b.each(k.runs_summary, function (a) {
                l.push(Number(a))
            });
            var m = {};
            m.runs = k.runs, m.balls_faced = k.balls_faced, A = k.runs, B = k.balls_faced;
            var o = {},
                p = {};
            if (l && (o = d.getScoreDetails(l, !1)), f) {
                if (e && e.length > 0)
                    for (var q = 0; q < e.length; q++) 1 === e[q] && (p.ones = o.ones), 2 === e[q] && (p.twos = o.twos), 3 === e[q] && (p.threes = o.threes), 4 === e[q] && (p.fours = o.fours), 5 === e[q] && (p.fives = o.fives), 6 === e[q] && (p.sixes = o.sixes)
            } else p = o;
            m.runs_summary = p, j.filtezone = m
        }
        var r = d.populateTemplate("filtezone", j);
        g.find("#mcr-batting-temp #summaryfilter").html(r).show()
    }

    function L(b, c, e) {
        var f;
        a.isEmptyObject(b) || (f = b.centre, h = f.batting);
        var i = h.filtered;
        var j = {};
        var k = {},
            l;
        var m = a.extend(!0, {}, n.filtezone);
        e && (c && c.length > 0 ? (k.runs = i.runs, k.balls_faced = i.balls_faced, j = d.getScoreDetails(i.runs_summary, !1), k.runs_summary = j, m.filtezone = k, l = d.populateTemplate("filtezone", m), g.find("#mcr-batting-temp #summaryfilter").html(l).show()) : g.find("#mcr-batting-temp #summaryfilter").html("").show())
    }

    function M(b, c, f) {
        var g = 140,
            h = 30,
            i = {
                fill: "#000",
                "font-size": "12px",
                "font-family": "BentonSansBold, Arial, sans-serif"
            };
        a(c).html(""), "bat" === f && (a(c).show(), g = 225, h = 50, i = {
            fill: "#000",
            "font-size": "14px",
            "font-family": "BentonSansBold, Arial, sans-serif"
        });
        var j = d3.select(c).chart("wagon", {
            diameter: g,
            colors: ["#7ace5c", "#f88f22", "#fff"],
            labelAttr: i,
            textPadding: h,
            onMouseover: p.wagon.onMouseover,
            onMouseout: d.tooltip.hide
        });
        j.draw(e.getZones(b))
    }

    function N(b) {
        a("#mcr-batcard-line").show(), a("#mcr-batcard-line").html("");
        var c = d3.select("#mcr-batcard-line").chart("line", {
            width: 225,
            height: 255,
            keyLeftMargin: 100,
            chartTitle: "BALLS",
            titleAttrs: {
                "font-size": "12px",
                "font-family": "BentonSansBold, Arial, sans-serif"
            },
            comparison: !0,
            key: ["Runs", "Strike rate"]
        });
        c.draw(e.getComparisons(b))
    }

    function O(b, c, f, g) {
        var h = 130,
            i = 170,
            j = p.heatmap.onMouseover,
            k = null,
            l;
        a(c).html(""), "bat" === f && (a(c).show(), h = 200, i = 230, j = function (a, b) {
            espn.matchcenter.helpers.tooltip.show({
                title: b.balls + "b " + b.runs + "r " + (b.wickets ? "w" : ""),
                top: a.pageY,
                left: a.pageX
            })
        }, k = function (a) {
            return a.wickets ? "w" : void 0
        });
        var m = e.getPitchMap(b);
        l = (p.pitch_map.legends[m.grid.x + "x" + m.grid.y] || p.pitch_map.legends["5x6"]).slice(0);
        var n = d3.select(c).chart("heatmap", {
            width: h,
            height: i,
            legends: !0,
            showValues: !0,
            xGridLength: m.grid.x,
            yGridLength: m.grid.y,
            keyTextAttr: {
                "font-size": "0.7em",
                fill: "#3e9fca"
            },
            keyLegends: l,
            flipLegends: g,
            onKeyMouseover: p.heatmap.onKeyMouseover,
            onKeyMouseout: d.tooltip.hide,
            onMouseover: j,
            textHandler: k,
            onMouseout: d.tooltip.hide
        });
        n.draw(m.data)
    }

    function P(b) {
        a("#mcr-batcard-spike").show(), a("#mcr-batcard-spike").html("");
        var c = d3.select("#mcr-batcard-spike").chart("spikes", {
            diameter: 225,
            textPadding: 30,
            colors: ["#7ace5c", "#f88f22", "#7ace5c"]
        });
        c.draw(e.getSpikes(b))
    }

    function Q(b, c) {
        var d;
        a.isEmptyObject(b) || (d = b.centre, h = d.batting);
        var e = h.wagon;
        var f = h.wagon_zone;
        var g = h.cumulative;
        var j = h.pitch_map;
        var k = "left" === h.hand ? !0 : !1;
        v || (v = c);
        var l = [
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]
        ];
        v ? v.indexOf("wagon") > 0 && "mcr-batcard-spike" !== i ? M(f, "#mcr-batcard-wagon", "bat") : v.indexOf("line") > 0 && "mcr-batcard-spike" !== i ? N(g) : v.indexOf("heatmap") > 0 && "mcr-batcard-spike" !== i ? j && j.length > 0 ? O(j, "#mcr-batcard-heatmap", "bat", k) : O(l, "#mcr-batcard-heatmap", "bat", k) : v.indexOf("spike") > 0 && P(e) : i.indexOf("wagon") > 0 && "mcr-batcard-spike" !== i ? M(f, "#mcr-batcard-wagon", "bat") : i.indexOf("line") > 0 && "mcr-batcard-spike" !== i ? N(g) : i.indexOf("heatmap") > 0 && "mcr-batcard-spike" !== i ? j && j.length > 0 ? O(j, "#mcr-batcard-heatmap", "bat", k) : O(l, "#mcr-batcard-heatmap", "bat", k) : i.indexOf("spike") > 0 && P(e)
    }

    function R(b) {
        var c, d;
        a.isEmptyObject(b) || (c = b.centre, d = c.bowling);
        var e = d.wagon_zone_lhb;
        var f = d.wagon_zone_rhb;
        var g = d.pitch_map_lhb;
        var h = d.pitch_map_rhb;
        var i = [
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]
        ];
        g && g.length ? O(g, "#mcr-bowl-heatmap-lhb", "bowl", !0) : O(i, "#mcr-bowl-heatmap-lhb", "bowl", !0), h && h.length ? O(h, "#mcr-bowl-heatmap-rhb", "bowl") : O(i, "#mcr-bowl-heatmap-rhb", "bowl"), M(e, "#mcr-bowl-wagon-lhb", "bowl"), M(f, "#mcr-bowl-wagon-rhb", "bowl")
    }

    function S(c, e) {
        if (l(c) !== !1) {
            var f = c.centre;
            var h = f.bowling;
            var i;
            "batting_rhb" === e ? h.hasOwnProperty("batting_rhb") && b.isEmpty(h.batting_rhb) === !1 && (i = h.batting_rhb) : h.hasOwnProperty("batting_lhb") && b.isEmpty(h.batting_lhb) === !1 && (i = h.batting_lhb);
            var j = a.extend(!0, {}, n.bcBatsmainface);
            var k, m, p = {},
                q = [];
            if (o = [], i) {
                for (var r = i.length - 1; r >= 0; r--) {
                    p = {};
                    var s = i[r];
                    if (p.popular_name = s.popular_name ? s.popular_name : s.known_as, s.is_wicket && (p.is_wicket = "w"), p.runs = s.runs, p.balls = s.balls, p.control_percentage = Number(s.control_percentage), p.parentid = e, p.counter = r, o.push(s.control_percentage), s.hasOwnProperty("runs_summary")) {
                        k = s.runs_summary;
                        for (m in k) p.four = k[4], p.six = k[6]
                    }
                    q.push(p)
                }
                j.bowlers = q.reverse()
            }
            var t = d.populateTemplate("bcBatsmainface", j);
            "batting_rhb" === e ? g.find("#mcr-bowl-rhb .mcr-bowl-down").html(t).show() : g.find("#mcr-bowl-lhb .mcr-bowl-down").html(t).show(), U(o, 2, e)
        }
    }

    function T(c) {
        if (l(c) !== !1) {
            var e = c.centre;
            var f = e.batting;
            var h = a.extend(!0, {}, n.bcBowlerface);
            var i, j, k = {},
                m = [];
            if (f.hasOwnProperty("bowling") && b.isEmpty(f.bowling) === !1) {
                var p = f.bowling;
                for (var q = p.length - 1; q >= 0; q--) {
                    k = {};
                    var r = p[q];
                    if (0 === r.notout && (k.notout = "w"), k.popular_name = r.popular_name ? r.popular_name : r.known_as, k.runs = r.runs, k.balls_faced = r.balls_faced, k.control_percentage = Number(r.control_percentage), k.counter = q, o.push(r.control_percentage), r.hasOwnProperty("runs_summary")) {
                        i = r.runs_summary;
                        for (j in i) k.dot = i[0], k.four = i[4], k.six = i[6]
                    }
                    m.push(k)
                }
                var s = b.sortBy(m, function (a) {
                    return parseInt(a.runs, 10)
                });
                s.reverse(), h.bowlers = s
            }
            var t = d.populateTemplate("bcBowlerface", h);
            g.find("#mcr-batting-temp #bowling-data").html(t).show(), U(o, 2)
        }
    }

    function U(b, c, d) {
        var e = "batCtrl";
        var f, g, h;
        2 === c ? (b = b.reverse(), a.each(b, function (b, c) {
            f = parseInt(c, 10), g = d ? "#" + d + "_" + b : "#batBar_" + b, h = a.extend(!1, {}, p.bar_notitle), h.colors = ["#f8911b", "#f2f2f2"], X(q, e, f, "bar", g, h)
        })) : 1 === c ? (g = "#topStripBar", f = parseInt(b, 10), h = a.extend(!0, {}, p.bar), h.title = "Dot ball %", h.labelAttr["font-size"] = "11px", h.labelAttr.fill = "#b2b2b2", h.valAttr["font-size"] = "12px", h.valAttr.fill = "#fff", h.stopColor1 = "green", h.stopColor1Offset = "0%", h.stopColor2 = "yellow", h.stopColor2Offset = "47.5%", h.stopColor3 = "red", h.stopColor3Offset = "100%", X(q, e, f, "bar", g, h)) : 3 === c && (g = "#topStripBowlBar", f = parseInt(b, 10), h = a.extend(!0, {}, p.bar), h.title = "Dot ball %", h.labelAttr["font-size"] = "11px", h.labelAttr.fill = "#fff", h.valAttr["font-size"] = "12px", h.valAttr.fill = "#fff", h.stopColor1 = "red", h.stopColor1Offset = "0%", h.stopColor2 = "yellow", h.stopColor2Offset = "47.5%", h.stopColor3 = "green", h.stopColor3Offset = "100%", X(q, e, f, "bar", g, h))
    }

    function V(c) {
        var e, f;
        if (l(c) !== !1) {
            var h = c.centre;
            h && h.bowling && (f = h.bowling), f && (e = f.popular_name ? f.popular_name : f.known_as);
            var i = {};
            g.find(".mcr-vis").hide(), a("#mcr-bowling-temp").show();
            var j = a.extend(!0, {}, n.bowlingcardtopstrip);
            var k = {};
            if (f.hasOwnProperty("overall") && b.isEmpty(f.overall) === !1) {
                var m = f.overall;
                k.playername = e, k.maidens = m.maidens, k.overs = m.overs, k.wickets = m.wickets, k.conceded = m.conceded, k.economy_rate = m.economy_rate, k.dot_ball_percentage = m.dot_ball_percentage, k.wides = m.wides, k.noballs = m.noballs, i = d.getScoreDetails(m.runs_summary, !1), k.runs_summary = i, j.bowlingcardtopstrip = k
            }
            var o = d.populateTemplate("bowlingcardtopstrip", j);
            g.find("#mcr-bowling-temp #bowl_top_strip").html(o).show(), U(k.dot_ball_percentage, 3)
        }
    }

    function W(c) {
        var e, f, h;
        if (l(c) !== !1) {
            var j = c.centre;
            j && j.batting && (e = j.batting), e && (f = e.popular_name ? e.popular_name : e.known_as, e.hand && (h = "right" === e.hand ? "Right Hand" : "Left Hand", a("#mcr_bat_type").text(h))), g.find(".mcr-vis").hide(), a("#mcr-batting-temp").show(), ("mcr-batcard-spike" === i || "mcr-batcard-wagon" === i) && a("#mcr_bat_type").show();
            var k = a.extend(!0, {}, n.battingcardtopstrip);
            var m = {};
            if (e.hasOwnProperty("preferred_shot") && b.isEmpty(e.preferred_shot) === !1) {
                var o = e.preferred_shot;
                m.preferred_shot = o.shot_name
            }
            if (e.hasOwnProperty("overall") && b.isEmpty(e.overall) === !1) {
                var p = e.overall;
                m.playername = f, m.runs = p.runs, m.balls_faced = p.balls_faced, m.dot_ball_percentage = p.dot_ball_percentage;
                var q = {};
                a.each(p.runs_summary, function (a, b) {
                    4 === a && (q.four = b), 1 === a && (q.one = b), 2 === a && (q.two = b), 3 === a && (q.three = b), 6 === a && (q.six = b)
                }), m.runs_summary = q, k.battingcardtopstrip = m
            }
            var r = d.populateTemplate("battingcardtopstrip", k);
            g.find("#mcr-batting-temp #bat_top_strip").html(r).show(), U(m.dot_ball_percentage, 1)
        }
    }

    function X(c, d, e, f, g, h) {
        if (z.hasOwnProperty(c) !== !1 && z[c].hasOwnProperty(d) !== !1 && (p.hasOwnProperty(f) !== !1 || h)) {
            var i = b.isObject(h) ? h : p[f];
            var j = 0;
            var k = z[c][d];
            a(g) && (k.hasOwnProperty("isInit") && (k.isInit === !1 && (k.ref = d3.select(g).chart(f, i), k.isInit = !0), k.ref.draw(e)), k.isInit = !1, j = 1)
        }
    }

    function Y() {
        g.on("click", ".mcr-all-player-mugshot a", db), g.on("click", ".mcr-filters a", fb), g.on("click", ".mcr-vis .mcr-bat-left .mcr-bat-upper span", cb), g.on("click", "#mcr-bowl-bvfilter", Z), g.on("click", "#mcr-bowl-drop li", eb), g.on("click", "#mcr-bat-bvfilter", Z), g.on("click", "#mcr-bat-drop li", eb), g.on("click", "#mcr_show_all", function () {
            var b = {},
                c = [];
            a(this).is(":checked") ? (j.filterZone.all(), c = ["1", "2", "3", "4", "5", "6", "7", "8"], L(b, c, !0), D(c)) : (j.filterZone.none(), L(b, c, !0), D(c))
        }), g.on("click", ".mcr_check", _)
    }

    function Z() {
        var b = a(this).attr("id"),
            c;
        c = -1 !== b.indexOf("bat") ? "#mcr-bat-drop" : "#mcr-bowl-drop", a(c).is(":visible") ? a(c).hide() : a(c).show()
    }

    function $() {
        a("#mcr-bowl-drop, #mcr-bat-drop").hide()
    }

    function _() {
        var b, c;
        a(this).is(":checked") ? "all" === a(this).val() ? k = [1, 2, 3, 4, 5, 6] : (b = parseInt(a(this).val(), 0), -1 === k.indexOf(b) && k.push(b)) : "all" === a(this).val() ? k = [] : (c = parseInt(a(this).val(), 0), k.splice(a.inArray(c, k), 1));
        var d = h.wagon;
        var f = bb(k);
        var g = ab(d, f);
        a("#mcr-batcard-spike").html("");
        var i = d3.select("#mcr-batcard-spike").chart("spikes", {
            diameter: 225,
            textPadding: 30,
            colors: ["#7ace5c", "#f88f22", "#7ace5c"]
        });
        i.draw(e.getSpikes(g));
        var j = {};
        K(j, k, !0)
    }

    function ab(a, b) {
        var c = [];
        if (!b || !a || a && 0 === a.length) return c;
        for (var d = 0; d < a.length; d++) {
            var e = Number(a[d][2]);
            b[e] && c.push(a[d])
        }
        return c
    }

    function bb(a) {
        var b = {};
        for (var c = 0; c < a.length; c++) b[a[c]] = 1;
        return b
    }

    function cb() {
        g.find(".mcr-vis .mcr-bat-left .mcr-bat-upper span").removeClass("active"), g.find(".mcr-vis .mcr-bat-left .mcr-bat-down div").hide(), a(this).addClass("active"), v = a(this).data("chart"), i = v, v.indexOf("spike") > 0 ? (a("#runfilter").css("display", "block"), a("#zonefilter").css("display", "block"), a("#summaryfilter").css("display", "block"), a("#mcr_bat_type").show()) : v.indexOf("line") > 0 ? (a("#runfilter").css("display", "none"), a("#zonefilter").css("display", "none"), a("#summaryfilter").css("display", "block"), a("#mcr_bat_type").hide()) : v.indexOf("heatmap") > 0 ? (a("#runfilter").css("display", "none"), a("#zonefilter").css("display", "none"), a("#summaryfilter").css("display", "block"), a("#mcr_bat_type").hide()) : (a("#runfilter").css("display", "none"), a("#zonefilter").css("display", "block"), a("#summaryfilter").css("display", "block"), a("#mcr_bat_type").show()), a("#" + v).css("display", "block");
        var b = [1, 2, 3, 4, 5, 6];
        var c = {};
        Q(c, v), K(c, b, !0)
    }

    function db() {
        var b = a(this);
        var c = b.data("ptype");
        var e = b.data("pid");
        var f = b.data("innings");
        if ("undefined" == typeof c || "undefined" == typeof e) return !1;
        if (j.filterZone.none(), $(), 0 === i.length && (i = "mcr-batcard-spike"), j.draw(), a("#zonefilter input:checkbox").removeAttr("checked"), "block" === a("#runfilter").css("display")) {
            var h = a("#runfilter input:checkbox");
            for (var k = 0; k < h.length; k++) a(a("#runfilter input:checkbox")[k]).prop("checked", !0)
        }
        return d.addTitleOnHomeButtom(), g.removeClass().addClass("mcr-" + c), r = c, s = e, t = f, H(c, e, f, !0), g.find("#mcr_player_graph div").hide(), a("#" + i).show(), g.find(".mcr-all-player-mugshot a").removeClass(), g.find(".mcr-all-player-mugshot").removeClass("mcr-selected-player"), b.parent().addClass("mcr-selected-player"), !1
    }

    function eb() {
        var b = a(this).text(),
            c;
        var d = a(this).data("type");
        var e = a(this).data("id");
        "batsman" === d ? u = "batsman=" + e : "bowlers" === d ? u = "bowler=" + e : "hand" === d ? u = "hand=" + e : "pacespin" === d && (u = "pacespin=" + e);
        var f = a(this).closest("ul").attr("id");
        c = -1 !== f.indexOf("bat") ? "#mcr-bat-bvfilter" : "#mcr-bowl-bvfilter", a("#" + f).css("display", "none"), a(c).find("span").text(b), "bat" === d || "bowl" === d ? H(r, s, t, !1, "all") : H(r, s, t, !1, u)
    }

    function fb() {
        var c = a(this);
        var d = {
            bat: ".mcr-all-batsmen",
            bowl: ".mcr-all-bowlers"
        };
        var e = {
            bat: ".mcr-all-batsman-filters a",
            bowl: ".mcr-all-bowler-filters a"
        };
        var f = b.keys(d);
        var h = c.data("ptype");
        var i = c.data("category");
        if ("undefined" == typeof h || "undefined" == typeof i || -1 === b.indexOf(f, h)) return !1;
        var j = g.find(d[h]).children("li");
        return j.hide().filter(function () {
            if ("all" === i) return !0;
            if (a(this).data().hasOwnProperty("category") === !1) return !1;
            var b = a(this).data("category");
            return b.indexOf(i) > -1 ? !0 : !1
        }).slideDown(300, "linear"), g.find(e[h]).removeClass("mcr-active-filter"), a(this).addClass("mcr-active-filter"), !1
    }
    return f
}(jQuery, _, espn.matchcenter.config, espn.matchcenter.helpers, espn.matchcenter.charts), espn.matchcenter.events.initBat(), espn.utils.namespace("matchcenter.update"), espn.matchcenter.update = function (a, b, c, d, e) {
    var f = {};
    var g = a("#mcr");
    var h = c.templateInputs;
    var i = e.options;
    var j = {
        inn: {
            overallCtrl: {
                isInit: !1,
                sel: ".mcr-all-control",
                ref: !1
            },
            bat0Ctrl: {
                isInit: !1,
                sel: ".mcr-inn-bat0-control",
                ref: !1
            },
            bat1Ctrl: {
                isInit: !1,
                sel: ".mcr-inn-bat1-control",
                ref: !1
            },
            bat0Zone: {
                isInit: !1,
                sel: ".mcr-inn-bat0-wagon",
                ref: !1
            },
            bat1Zone: {
                isInit: !1,
                sel: ".mcr-inn-bat1-wagon",
                ref: !1
            },
            bowl0RhbMap: {
                isInit: !1,
                sel: ".mcr-inn-bowler0-heatmap-rhb",
                ref: !1
            },
            bowl0LhbMap: {
                isInit: !1,
                sel: ".mcr-inn-bowler0-heatmap-lhb",
                ref: !1
            },
            bowl1RhbMap: {
                isInit: !1,
                sel: ".mcr-inn-bowler1-heatmap-rhb",
                ref: !1
            },
            bowl1LhbMap: {
                isInit: !1,
                sel: ".mcr-inn-bowler1-heatmap-lhb",
                ref: !1
            }
        }
    };
    var k = "http://i.imgci.com/espncricinfo/scorecard/mcr-default-player.png";
    var l = d.getCenterEnvironUrl();
    var m = {
        innings: {
            url: l + d.getMatchId() + ".json"
        }
    };

    function n() {
        g.on("change", ".mcr-all-innings-select", o), g.on("click", ".mcr-all-menu-link", p)
    }
    n();

    function o() {
        var b = a(this);
        var c = b.val();
        var d = {
            innings: c
        };
        var e = !0;
        a.ajax({
            url: m.innings.url,
            type: "GET",
            dataType: "json",
            data: d,
            ifModified: e,
            context: {
                innChange: !0
            },
            success: f.init
        })
    }

    function p() {
        return d.isInningsCard() === !0 ? !1 : (d.displayCard("inn"), d.removeMugshotHighlight(), d.removeTitleOnHomeButton(), !1)
    }

    function q() {
        var b = a(window).width();
        var c = 1024;
        return b > c
    }
    f.init = function (c) {
        if ("undefined" != typeof c && c.hasOwnProperty("centre") !== !1) {
            var e = c.centre;
            if (b.isEmpty(e) === !0 || q() === !1) return a(".mcr_h2").hide(), g.hide(), void 0;
            if (a("#mcr").is(":visible") === !1 && (a(".mcr_h2").show(), a("#mcr").show()), this.hasOwnProperty("innChange") !== !1 || d.getSelectedInn() === d.getOngoingInn()) {
                x(e);
                var f;
                d.isInningsCard() === !1 && (f = u()), y(e), z(e), d.isInningsCard() === !1 && f && v(f), E(e), F(e), w(e), this.hasOwnProperty("innChange") && this.innChange === !0 && p()
            }
        }
    };

    function r(a) {
        return b.isEmpty(a) === !1 && a.hasOwnProperty("common") ? !0 : !1
    }

    function s(a) {
        var b;
        return a.hasOwnProperty("innings_number") && "" !== a.innings_number && (b = parseInt(a.innings_number, 10)), b
    }

    function t(a) {
        var c;
        return a.hasOwnProperty("innings_list") && b.isEmpty(a.innings_list) === !1 && (c = a.innings_list.length), c
    }

    function u() {
        return a("#mcr").find(".mcr-selected-player").children().data("pid")
    }

    function v(b) {
        if ("undefined" != typeof b && null !== b && (d.isBattingCard() || d.isBowlingCard())) {
            var c = a('.mcr-all-player-mugshot a[data-pid="' + b + '"]');
            c.parent().addClass("mcr-selected-player")
        }
    }

    function w(a) {
        if (r(a) !== !1) {
            var b = a.common;
            var c = t(b);
            var e = s(b);
            d.setSelectedInn(e), d.setOngoingInn(c)
        }
    }

    function x(c) {
        if (r(c) !== !1) {
            var e = c.common;
            var f = a.extend(!0, {}, h.overview);
            if (e.hasOwnProperty("innings_list") && b.isEmpty(e.innings_list) === !1) {
                f.innings = e.innings_list;
                for (var j = f.innings.length - 1; j >= 0; j--) {
                    var k = f.innings[j];
                    k.is_selected = "", 1 === parseInt(k.selected, 10) && (k.is_selected = "selected")
                }
            }
            if (e.hasOwnProperty("innings") && b.isEmpty(e.innings) === !1) {
                var l = e.innings;
                if (f.current_innings = l, l.hasOwnProperty("runs_summary") && (f.current_innings.scoreDetails = d.getScoreDetails(l.runs_summary, !0)), l.hasOwnProperty("dot_ball_percentage")) {
                    var m = parseInt(l.dot_ball_percentage, 10);
                    var n = "overallCtrl";
                    var o = a.extend(!0, {}, i.overallBar);
                    C("inn", n, m, "bar", o)
                }
            }
            var p = d.populateTemplate("overview", f);
            g.find(".mcr-overview").children().not(".mcr-all-control").remove(), g.find(".mcr-overview").prepend(p).show()
        }
    }

    function y(c) {
        if (r(c) !== !1) {
            var e = c.common;
            var f = a.extend(!0, {}, h.batsmen);
            var i = s(e);
            if (e.hasOwnProperty("batting") && b.isEmpty(e.batting) === !1) {
                var j = e.batting;
                for (var l = j.length - 1; l >= 0; l--) {
                    var m = j[l];
                    m.hasOwnProperty("hand") && (m.lor = "r" === m.hand ? "rhb" : "lhb"), m.hasOwnProperty("order") === !1 && m.hasOwnProperty("position") && (m.order = m.position < 7 ? "toporder" : "bottomorder"), m.curr_innings = i, m.hasOwnProperty("image_path") && "" === m.image_path && (m.image_path = k), m.class_name = "", m.hasOwnProperty("live_current_name") && ("striker" === m.live_current_name ? m.class_name = "striker" : "non-striker" === m.live_current_name && (m.class_name = "nonstriker"))
                }
                f.batsmen = j
            }
            var n = d.populateTemplate("batsmen", f);
            g.find(".mcr-batsmen").html(n).show()
        }
    }

    function z(c) {
        if (r(c) !== !1) {
            var e = c.common;
            var f = a.extend(!0, {}, h.bowlers);
            var i = s(e);
            if (e.hasOwnProperty("bowling") && b.isEmpty(e.bowling) === !1) {
                var j = e.bowling;
                for (var l = j.length - 1; l >= 0; l--) {
                    var m = j[l];
                    m.hasOwnProperty("pacespin") && (m.pacespin = "p" === m.pacespin ? "pace" : "spin"), m.hasOwnProperty("hand") && (m.lor = "r" === m.hand ? "rhb" : "lhb"), m.curr_innings = i, m.hasOwnProperty("image_path") && "" === m.image_path && (m.image_path = k), m.class_name = "", m.hasOwnProperty("live_current_name") && ("current bowler" === m.live_current_name ? m.class_name = "striker" : "previous bowler" === m.live_current_name && (m.class_name = "nonstriker"))
                }
                f.bowlers = j
            }
            var n = d.populateTemplate("bowlers", f);
            g.find(".mcr-bowlers").html(n).show()
        }
    }

    function A(c) {
        if (b.isEmpty(c) !== !0) {
            var f = "inn";
            for (var h = c.length - 1; h >= 0; h--) {
                var i = c[h];
                var j;
                i.hasOwnProperty("runs_summary") && (j = d.getScoreDetails(i.runs_summary, !0), i.fours = j.fours, i.sixes = j.sixes);
                var k = {
                    currentBatsman: i
                };
                var l = d.populateTemplate("currentbatsman", k);
                if (g.find(".cbat" + h).children(".mcr-inn-player-text").html(l).show(), i.hasOwnProperty("preferred_shot") && b.isEmpty(i.preferred_shot) === !1) {
                    if (i.preferred_shot.hasOwnProperty("shot_name")) {
                        var m = i.preferred_shot.shot_name;
                        g.find(".cbat" + h).find(".shotname").html(m).end().find(".pref-shot").show()
                    }
                } else g.find(".cbat" + h).find(".pref-shot").hide();
                var n;
                var o;
                i.hasOwnProperty("control_percentage") && "" !== i.control_percentage ? (n = "bat" + h + "Ctrl", o = parseInt(i.control_percentage, 10), D(f, n, "visible"), C(f, n, o, "bar")) : (n = "bat" + h + "Ctrl", D(f, n, "hidden")), i.hasOwnProperty("wagon_zone") && b.isEmpty(i.wagon_zone) === !1 ? (n = "bat" + h + "Zone", o = e.getZones(i.wagon_zone), D(f, n, "visible"), C(f, n, o, "wagon")) : (n = "bat" + h + "Zone", D(f, n, "hidden"))
            }
            1 === c.length ? a("#mcr").find(".cbat1").hide() : a("#mcr").find(".cbat1").show()
        }
    }

    function B(c) {
        if (b.isEmpty(c) !== !0) {
            var f = "inn";
            for (var h = c.length - 1; h >= 0; h--) {
                var j = c[h];
                var k = {
                    currentBowler: j
                };
                var l = d.populateTemplate("currentbowler", k);
                g.find(".cbowl" + h).children(".mcr-inn-player-text").html(l).show(), g.find(".cbowl" + h).find(".heatmap-title").show();
                var m;
                var n;
                var o;
                var p = [{
                    map_name: "pitch_map_rhb",
                    map_suffix: "RhbMap"
                }, {
                    map_name: "pitch_map_lhb",
                    map_suffix: "LhbMap"
                }];
                for (var q = p.length - 1; q >= 0; q--) {
                    var r = p[q];
                    j.hasOwnProperty(r.map_name) && (b.isEmpty(j[r.map_name]) === !1 ? (m = "bowl" + h + r.map_suffix, n = e.getPitchMap(j[r.map_name]), o = i.heatmap || {}, o.xGridLength = n.grid.x, o.yGridLength = n.grid.y, o.flipLegends = r.map_suffix === p[1].map_suffix ? !0 : !1, o.keyLegends = (i.pitch_map.legends[n.grid.x + "x" + n.grid.y] || i.pitch_map.legends["5x6"]).slice(0), D(f, m, "visible"), C(f, m, n.data, "heatmap", o)) : (m = "bowl" + h + r.map_suffix, D(f, m, "hidden")))
                }
            }
            1 === c.length ? a("#mcr").find(".cbowl1").hide() : a("#mcr").find(".cbowl1").show()
        }
    }

    function C(a, c, d, e, f) {
        if (j.hasOwnProperty(a) !== !1 && j[a].hasOwnProperty(c) !== !1 && (i.hasOwnProperty(e) !== !1 || f)) {
            var g = b.isObject(f) ? f : i[e];
            var h = j[a][c];
            h.hasOwnProperty("isInit") && (h.isInit === !1 && (h.ref = d3.select(h.sel).chart(e, g), h.isInit = !0), h.ref.draw(d))
        }
    }

    function D(b, c, d) {
        if (j.hasOwnProperty(b) !== !1 && j[b].hasOwnProperty(c) !== !1) {
            var e = j[b][c];
            e.hasOwnProperty("sel") && a("#mcr").find(e.sel).css("visibility", d)
        }
    }

    function E(a) {
        (a.hasOwnProperty("batting") !== !1 || a.hasOwnProperty("bowling") !== !1) && (A(a.batting), B(a.bowling))
    }

    function F(a) {
        if (a.hasOwnProperty("fow") !== !1 && b.isEmpty(a.fow) !== !0) {
            var c = e.getFow(a.fow);
            g.find(".mcr-inn-partnerships").css("visibility", "visible"), e.partnership.draw(c)
        }
    }
    return f
}(jQuery, _, espn.matchcenter.config, espn.matchcenter.helpers, espn.matchcenter.charts);