hw.g = function(A) {
    return document.getElementById(A)
};
hw.input = document.f.kw;
hw.isIE = function() {
    if (navigator.userAgent.indexOf("MSIE") > -1) {
        return true
    } else {
        return false
    }
};
hw.submitBut = hw.g("su");
hw.flashIsLoaded = false;
hw.sxBegin;
hw.addEvent = function(B, A, C) {
    B.attachEvent ? B.attachEvent("on" + A, C) : B.addEventListener(A, C, false)
};
hw.stopE = function(A) {
    A = A || window.event;
    A.stopPropagation ? A.stopPropagation() : (A.cancelBubble = true)
};
hw.count = function(B) {
    var A = window["BD_PS_C" + (new Date()).getTime()] = new Image();
    A.src = "http://nsclick.baidu.com/v.gif?pid=201&pj=shouxie&type=" + B + (arguments[1] ? "&costTime=" + arguments[1] : "") + "&t=" + new Date().getTime()
};
hw.getOffSet = function(C) {
    var B = 0;
    var A = 0;
    while (C.offsetParent) {
        B += C.offsetLeft;
        A += C.offsetTop;
        C = C.offsetParent
    }
    if (hw.g("fm") && hw.g("fm").currentStyle && !/msie 8.0/i.test(navigator.userAgent)) {
        B = B - parseInt(hw.g("fm").currentStyle.paddingLeft)
    }
    return {
        l: B,
        t: A + 27
    }
};
hw.offset = hw.getOffSet(hw.submitBut);
hw.hidden = function(A) {
    A.style.left = -1000 + "px";
    A.style.top = -1000 + "px"
};
hw.show = function(A) {
    A.style.left = hw.offset.l + "px";
    A.style.top = hw.offset.t + "px"
};
hw.addStyle = function(B) {
    if (hw.isIE()) {
        var C = document.createStyleSheet();
        C.cssText = B
    } else {
        var A = document.createElement("style");
        A.type = "text/css";
        A.appendChild(document.createTextNode(B));
        document.getElementsByTagName("HEAD")[0].appendChild(A)
    }
};
hw.init = function() {
    var B = [];
    B.push("#hwr_div,#loading{font-size:12px;text-align:center;left:" + hw.offset.l + "px;top:" + (hw.offset.t) + "px;position:absolute;}");
    B.push("#hwr_div.hd,#loading.hd{left:-1000px;top:-1000px;width:1px;height:1px;}");
    B.push("#loading{width:304px; height:239px; border:1px solid #acb5d6;color:#333;}");
    B.push("#loading p{background:#f4f5fa; height:18px; position:relative;padding: 7px 0 0 7px;text-align:left;border-bottom:1px solid #acb5d6;color:#000;margin:0 0 90px 0;}");
    B.push("#loading p img{ position:absolute;right:0; top:0; cursor:pointer;}");
    hw.addStyle(B.join(""));
    var D = document.createDocumentFragment();
    var C = document.createElement("div");
    C.setAttribute("id", "hwr_div");
    var A = document.createElement("div");
    A.setAttribute("id", "loading");
    A.innerHTML = '<p>手写输入<img id="loadingClose" onclick=\'hw.hidden(hw.loadingDiv);hw.hidden(hw.hwDiv)\' src="http://www.baidu.com/hw/sx_close.gif"/></p><div>手写输入法载入中....';
    D.appendChild(C);
    D.appendChild(A);
    document.body.appendChild(D);
    hw.hidden(C);
    hw.hidden(A)
};
hw.init();
hw.loadingDiv = hw.g("loading");
hw.hwDiv = hw.g("hwr_div");
hw.loadingClose = hw.g("loadingClose");
hw.hasFlash = (function() {
    var F = navigator;
    if (F.plugins && F.mimeTypes.length) {
        var C = F.plugins["Shockwave Flash"];
        if (C && C.description) {
            return C.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0"
        }
    } else {
        if (window.ActiveXObject && !window.opera) {
            for (var B = 10; B >= 2; B--) {
                try {
                    var E = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + B);
                    if (E) {
                        var A = E.GetVariable("\x24version");
                        return A.replace(/WIN/g, "").replace(/,/g, ".")
                    }
                } catch(D) {}
            }
        }
    }
})(); (function() {
    if (typeof(hw.hasFlash) == "undefined") {Chrome
        var A = hw.loadingDiv.getElementsByTagName("div")[0];
        A.innerHTML = "对不起，请您先安装flash播放器"
    }
})();
hw.load = function() {
    hw.sxBegin = new Date();
    hw.show(hw.loadingDiv);
    hw.show(hw.hwDiv);
    if (hw.isIE()) {
        hw.hwDiv.innerHTML = '<object width="304" height="239" align="middle" id="hwflash" style="position:fixed;z-index:888"  codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"><param name="wmode" value="Opaque"><param value="always" name="allowscriptaccess"><param value="js/main.swf" name="movie"></object>'
    } else {
        var A = /Chrome/i.test(navigator.userAgent) ? ' wmode="window" ': ' wmode="Opaque" ';
        hw.hwDiv.innerHTML = '<embed width="304" height="239" align="middle" style="position:fixed;z-index:888"  pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" name="hwflash" src="js/main.swf" ' + A + ' allowscriptaccess="always" ver="9.0.0">'
    }
};/*param value="http://www.baidu.com/hw/main.swf*/
hw.getMovie = function(A) {
    return document[A] || window[A]
};
hw.isCompleteChar = false;
hw.isDisplay = false;
hw.ready = function() {
    var A = new Date().getTime() - hw.sxBegin.getTime();
    hw.count("flashLoadTime", A);
    hw.flashIsLoaded = true;
    hw.isDisplay = true;
    hw.hidden(hw.loadingDiv)
};
hw.close = function() {
    if (!hw.flashIsLoaded) {
        hw.hidden(hw.loadingDiv);
        hw.hidden(hw.hwDiv);
        return
    }
    if (hw.isDisplay) {
        var A = hw.hasWrite();
        if (A && !hw.isCompleteChar) {
            hw.count("noSelectCharClose")
        } else {
            if (!A) {
                hw.count("noActionClose")
            }
        }
        hw.hasF = 0;
        hw.isCompleteChar = false;
        hw.clear();
        hw.hidden(hw.hwDiv);
        hw.isDisplay = false
    }
};
hw.charSelect = function(I, C) {
    var E = I;
    var F = hw.input;
    var H = document;
    if (C) {
        hw.count("lxz")
    }
    if (H.selection && hw.hasF) {
        hw.input.focus();
        var D = document.selection.createRange();
        D.text = E;
        D.collapse();
        D.select()
    } else {
        if (!H.selection && (F.selectionStart || F.selectionStart > -1) && hw.hasF) {
            var G = F.selectionStart;
            var B = F.selectionEnd;
            var J = F.value = F.value.substring(0, G) + E + F.value.substring(B, F.value.length);
            F.selectionStart = G + E.length;
            F.selectionEnd = G + E.length;
            var A = navigator.userAgent;
            if (A.indexOf("Firefox") != -1) {
                F.focus()
            } else {
                F.blur()
            }
        } else {
            var J = F.value;
            F.focus();
            F.value = J + E
        }
    }
    hw.isCompleteChar = true
};
hw.reWrite = function() {
    hw.count("reWrite")
};
hw.clear = function() {
    hw.getMovie("hwflash").clear()
};
hw.hasWrite = function() {
    return hw.getMovie("hwflash").hasInput()
};
hw.display = function() {
    this.isDisplay = true;
    hw.show(hw.hwDiv);
    hw.count("clikeHwLink")
};
hw.stopClose = function(B) {
    var B = B || window.event;
    var A = B.target || B.srcElement;
    if (!hw.flashIsLoaded && A.tagName.toLowerCase() == "input") {
        return
    }
    if (hw.flashIsLoaded && A.tagName.toLowerCase() == "input") {
        hw.hasF = 1
    }
    hw.stopE(B)
};
hw.hiddenByKey = function(B) {
    var B = B || w.event;
    var A;
    if (B.keyCode && (B.keyCode == 37 || B.keyCode == 38 || B.keyCode == 39 || B.keyCode == 40 || B.keyCode == 8 || B.keyCode == 46 || B.keyCode == 32)) {
        hw.hasF = 1;
        return
    } else {
        hw.close();
        hw.hasF = 1
    }
};
hw.sx = hw.g("sx");
hw.sx.onclick = function(A) {
    hw.stopE(A);
    if (!hw.flashIsLoaded) {
        var B = hw.loadingDiv.style.left;
        B.indexOf("-1000px") != -1 ? hw.show(hw.loadingDiv) : hw.hidden(hw.loadingDiv);
        hw.show(hw.hwDiv);
        hw.input.focus();
        return
    }
    if (hw.isDisplay) {
        hw.close()
    } else {
        if (document.selection && document.activeElement.id && document.activeElement.id != "kw") {
            hw.hasF = 0
        }
        hw.display()
    }
};
hw.rePos = function() {
    if (hw.isDisplay) {
        hw.offset = hw.getOffSet(hw.submitBut);
        hw.show(hw.hwDiv)
    }
};
hw.load();
hw.count("clikeHwLink");
hw.addEvent(document, "click", hw.close);
hw.addEvent(hw.loadingDiv, "click", hw.stopClose);
hw.addEvent(hw.input, "click", hw.stopClose);
hw.addEvent(hw.hwDiv, "click", hw.stopClose);
hw.addEvent(hw.loadingDiv, "click", hw.stopClose);
hw.addEvent(hw.input, "keydown", hw.hiddenByKey);
hw.addEvent(hw.input, "mousedown",
function() {
    hw.hasF = 1
});
hw.addEvent(window, "resize", hw.rePos);

