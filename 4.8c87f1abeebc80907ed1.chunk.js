// [AIV_SHORT]  Build version: 1.1.9 - Thursday, August 1st, 2019, 11:39:10 PM  
 webpackJsonp([4],{"./app/containers/HomePage/index.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n("./node_modules/react/index.js"),c=n.n(i),f=n("./node_modules/react-intl/lib/index.es.js"),s=Object(f.d)({header:{id:"app.components.HomePage.header",defaultMessage:"Know Your Coin Privacy."}}),d=n("./app/services/uiUtils.js"),b=n("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),l=n("./node_modules/@fortawesome/react-fontawesome/index.es.js"),u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var c in a)void 0===n[c]&&(n[c]=a[c]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var f=Array(i),s=0;s<i;s++)f[s]=arguments[s+3];n.children=f}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=u("strong",{},void 0,"Browsing personal transactions?"),y=u("strong",{},void 0,"Tor/VPN"),v=u("strong",{},void 0,"switch identity"),g=u("br",{}),h=u("br",{}),T=u("br",{}),w=u("br",{}),j=u("br",{}),_=u("br",{}),O=u("br",{}),x=u("br",{}),P=u("br",{}),X=u("br",{}),k=u("strong",{},void 0,"Random selection:"),B=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=function(e){return function(){return d.d.goSearch(e)}},t={"0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098":"First Bitcoin TX","0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098:0":"First Bitcoin TX-OUT",a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d:"10.000 BTC pizza TX","323df21f0b0756f98336437aa3d2fb87e02b59f1946b714a7b09df04d429dec2":"Whirlpool TX","ada74c8976f417b824fd741194b24ff823c8e118457b13bf2298821d291a847e:4":"Whirlpool TX-OUT",b3dcc5d68e7ba4946e8e7fec0207906fba89ccb4768112a25d6e6941f2e99d97:"Wasabi TX","8e56317360a548e8ef28ec475878ef70d1371bee3526c017ac22ad61ae5740b8":"DarkWallet TX","3a1b9e330d32fef1ee42f8e86420d2be978bbe0dc5862f17da9027cf9e11f8c4":"MTGox 424242.42424242 TX","2f17c08654e518f3ee46dd1438b58ef52b772e8cbc446b96b123d680a80bc3f7":"Basic transaction TX","015d9cf0a12057d009395710611c65109f36b3eaefa3a694594bf243c097f404":"Non-deterministic TX","722d83ae4183ee17704704bdf31d9e77e6964387f657bbc0e09810a84a7fbad2":"Complex transaction TX"};return u("div",{},void 0,u("div",{className:"text-center colorLight"},void 0,u(l.a,{icon:b.b})," ",m," use ",y," and ",v," frequently for your privacy."),u("h1",{style:{marginTop:"10em",textAlign:"center"}},void 0,c.a.createElement(f.a,s.header)),u("div",{className:"text-center"},void 0,u("small",{className:"colorLight"},void 0,u(l.a,{icon:b.a})," Boltzmann analysis",u(l.a,{icon:b.a,style:{marginLeft:"1.5em"}})," Entity analysis",u(l.a,{icon:b.a,style:{marginLeft:"1.5em"}})," Address reuse",u(l.a,{icon:b.a,style:{marginLeft:"1.5em"}})," Input/output merges")),g,h,T,w,j,_,O,x,P,X,u("div",{className:"examples colorMain"},void 0,k,u("ul",{},void 0,Object.keys(t).map(function(n){return u("li",{},n,u("strong",{},void 0,t[n]),": ",u("a",{onClick:e(n)},void 0,n))}))))}}]),t}(c.a.PureComponent);t.default=B}}); 