
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

function sum(a, b) {
  return a + b;
}

var img$1 = "data:image/svg+xml,%3csvg id='Layer_2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3618.6 3618.6' width='3618.6' height='3618.6'%3e%3cstyle%3e.st0%7bfill:%23222%7d.st1%7bfill:%2300d8ff%7d.st2%7bfill:none%3bstroke:%2300d8ff%3bstroke-width:144.7456%3bstroke-miterlimit:10%7d%3c/style%3e%3cpath class='st0' d='M0 0h3618.6v3618.6H0z'/%3e%3ccircle class='st1' cx='1806.5' cy='1807.1' r='302.6'/%3e%3cpath class='st2' d='M1806.5 1191.9c406.2 0 783.6 58.3 1068.1 156.2 342.8 118 553.6 296.9 553.6 458.9 0 168.8-223.4 358.9-591.5 480.8-278.3 92.2-644.6 140.4-1030.2 140.4-395.4 0-769.7-45.2-1051.2-141.4-356.1-121.7-570.6-314.2-570.6-479.8 0-160.7 201.3-338.2 539.3-456 285.6-99.5 672.3-159.1 1082.5-159.1z'/%3e%3cpath class='st2' d='M1271 1501.3c202.9-351.9 442-649.7 669-847.2 273.5-238 533.8-331.2 674.1-250.3 146.2 84.3 199.3 372.8 121 752.7-59.2 287.2-200.4 628.5-393.1 962.6-197.5 342.5-423.7 644.2-647.6 840-283.3 247.7-557.3 337.3-700.7 254.6-139.2-80.3-192.4-343.3-125.7-695 56.4-297.4 198-662.1 403-1017.4z'/%3e%3cpath class='st2' d='M1271.5 2119.8c-203.5-351.6-342.1-707.4-399.9-1002.7-69.6-355.8-20.4-627.9 119.8-709 146.1-84.6 422.5 13.5 712.5 271 219.3 194.7 444.4 487.5 637.6 821.3 198.1 342.2 346.6 688.8 404.3 980.5 73.1 369.2 13.9 651.3-129.4 734.2-139.1 80.5-393.5-4.7-664.9-238.2-229.2-197.3-474.5-502.1-680-857.1z'/%3e%3c/svg%3e";

var e = [],
  t = [];
function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
      s = !0 === r.prepend ? "prepend" : "append",
      d = !0 === r.singleTag,
      i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();
    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }
  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = "* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    background-color: deepskyblue;\r\n}";
n(css,{});

var array = [1, 2, 3].map(function (i) {
  return i + 1;
});
function hello() {
  console.log('####: Hello Rollup!', arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);
}
hello(sum(1, 2), array);
var img = document.createElement('img');
img.src = img$1;
document.querySelector('body').append(img);
console.log(img$1);
