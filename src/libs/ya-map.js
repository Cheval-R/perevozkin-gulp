(()=>{"use strict";var e,r={21176:(e,r,t)=>{t.d(r,{De:()=>n,W$:()=>i,_K:()=>c,mn:()=>l,yY:()=>a});class n{constructor(e){this.description=e,Object.freeze(this)}setExperiments(e){const r=a(this);if(!r||r.isApplied)throw new Error("ymaps3: can't set up experiments.");const t=r.meta.allowedFeatures.experiments||{};r.experiments={},Object.keys(t).forEach((n=>{r.experiments[n]=Boolean(t[n]&&e[n])}))}setApikeys(e){const r=a(this);if(!r||r.isApplied)throw new Error("ymaps3: can't set up apikeys.");r.apikeys=e}}const o=new WeakMap;function i(e){const r=new n(`lang:${e.meta.lang} apikey=${e.meta.apikey}`);return o.set(r,e),r}function a(e){return e&&o.get(e)}let s;function c(){return s}function l(e){if(s)throw new Error("ymaps3: config is already set");s=e}},28399:(e,r,t)=>{t.d(r,{Q:()=>i});var n=t(21176);const o={version:"",scaled:!0,hotspotZoomRange:{min:0,max:23}};function i(e,r=(0,n._K)()){if(!e||!e.lang)throw new Error("Lang not specified");if(e.dataProvider&&!["osm"].includes(e.dataProvider))throw new Error("Incorrect dataProvider");const{lang:t,signal:i,dataProvider:a}=e,s=(0,n.yY)(r);if(!s)throw new Error("Config not specified");const c=s.meta.apikey;if(!c)throw new Error("Apikey must be specified in order to use fetchConfig");let l;try{const e={lang:t,apikey:c};a&&(e.data_provider=a),l=`${s.meta.hosts.apiConfigService}?${new URLSearchParams(e)}`}catch(e){return Promise.reject(e)}return fetch(l,{signal:i}).then((e=>{if(!e.ok)throw new Error(`Failed to fetch ${e.url} Status: ${e.status}`);return e.json()})).then((e=>{for(const r in e.layers)if(e.layers[r].hotspotZoomRange){const[t,n]=e.layers[r].hotspotZoomRange;e.layers[r].hotspotZoomRange={min:t,max:n}}return e.layers.map||(e.layers.map=Object.assign({},o)),(0,n.W$)(Object.assign(Object.assign({},s),{meta:e}))}))}},698:(e,r,t)=>{t.d(r,{N:()=>c});var n=t(9912),o=function(e,r,t,n){return new(t||(t=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,s)}c((n=n.apply(e,r||[])).next())}))};const i=(0,n.O)();let a,s=Promise.resolve();const c=function(e){if(!c.A1F__implCache[e]){const r=c.loaders.slice();r.push(c.default),c.A1F__implCache[e]=s.then((()=>l(e,r,0)))}return c.A1F__implCache[e]};function l(e,r,t){if(t>=r.length)throw new Error("ymaps3.import: no loader for pkg "+e);return Promise.resolve(r[t](e)).then((n=>n||l(e,r,t+1)),(()=>l(e,r,t+1)))}c.B4C__implInit=(e,r)=>{a=e,s=r},c.A1F__implCache=Object.create(null),c.EB3__implInlineModules=Object.create(null);const p=RegExp("^(@yandex/ymaps3-)([^@]*)(?:@(\\d+\\.\\d+\\.\\d+))?$");c.default=function(e){if(!a)return Promise.reject(new Error("ymaps3.import: not initialized"));if(c.EB3__implInlineModules[e])return c.EB3__implInlineModules[e]();const r=p.exec(e);if(!r)return Promise.reject(new Error("ymaps3.import: invalid package name format"));const t=r[1],n=r[2],o=r[3];if(!(["analytics","controls-extra","editors","layers-extra","ruler","tile3d-data-source","utils","vector","vuefy"].includes(n)||["cartesian-projection","clusterer","controls","hint","markers","spherical-mercator-projection"].includes(n)&&o))return Promise.reject(new Error("ymaps3.import: unknown package name"));let i=a;i+=o?`/${o.replace(/\./g,"-")}`:"",i+=`/${n}.js`;return m(i,`${t}${n}`)};const u=["{package}","{version}","{path}"],d=["{package}"];function m(e,r){return o(this,void 0,void 0,(function*(){yield f("script",{src:e});const t=i,n=t[r];return delete t[r],n}))}function f(e,r,t){return new Promise(((n,o)=>{const i=document.createElement(e);Object.assign(i,r),t&&Object.assign(i.dataset,t),document.head.appendChild(i),i.onload=n,i.onerror=o}))}function h(e,r){if(e.length!==r.length||!e.every((e=>r.includes(e)))||!r.every((r=>e.includes(r))))throw new Error("ymaps3.import: invalid template path format. Allowed templates: "+e.join(" "))}c.cdn=function(e,r){var t;let n,o;const i=null!==(t=e.match(/{[^}]+}/g))&&void 0!==t?t:[];if(Array.isArray(r)||"string"==typeof r)h(d,i),n=function(e){e=e.replace("{package}","{package}@{version}"),e.endsWith(".js")||(e+="/{path}");return e}(e),o=function(e){"string"==typeof e&&(e=[e]);return e.reduce(((e,r)=>{const t=/^(@?[^@]+)@([\w.-]+)$/.exec(r);if(!t)throw new Error("ymaps3.import: invalid package name format");const n=t[1],o=t[2];return e[n]={version:o,path:"dist/index.js",export:n},e}),{})}(r);else{if("object"!=typeof r||null===r)throw new Error("ymaps3.import: invalid packages type.");h(u,i),function(e){for(const r in e){if(!e[r].version)throw new Error("ymaps3.import: packages must have a version field.");e[r].path||(e[r].path="dist/index.js"),e[r].export||(e[r].export=r)}}(r),n=e,o=r}return function(e){var r,t;if(!(e in o))return Promise.reject(new Error("ymaps3.import: unknown package name"));return m(n.replace("{package}",e).replace("{version}",o[e].version).replace("{path}",null!==(r=o[e].path)&&void 0!==r?r:""),null!==(t=o[e].export)&&void 0!==t?t:"")}},c.registerCdn=function(e,r){c.loaders.push(c.cdn(e,r))},c.loaders=[],c.script=function(e){return f("script",{src:e})},c.cssText=function(e,r){return f("style",{textContent:e},{name:r||"inline"})},c.style=function(e){return f("link",{rel:"stylesheet",href:e})}},9912:(e,r,t)=>{function n(){return"undefined"!=typeof globalThis?globalThis:this||self}t.d(r,{O:()=>n})}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={id:e,exports:{}};return r[e].call(i.exports,i,i.exports,n),i.exports}n.m=r,e=[],n.O=(r,t,o,i)=>{if(!t){var a=1/0;for(p=0;p<e.length;p++){for(var[t,o,i]=e[p],s=!0,c=0;c<t.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](t[c])))?t.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(p--,1);var l=o();void 0!==l&&(r=l)}}return r}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[t,o,i]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/bundles/",(()=>{n.b=document.baseURI||self.location.href;var e={668:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var o,i,[a,s,c]=t,l=0;if(a.some((r=>0!==e[r]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var p=c(n)}for(r&&r(t);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(p)},t=self.__chunk_yandex_ymaps3=self.__chunk_yandex_ymaps3||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.nc=void 0;var o={};(()=>{n.r(o),n.d(o,{import:()=>a.N,ready:()=>u});var e=n(9912),r=n(28399),t=n(21176);const i=["fetch","AbortController","URL","URLSearchParams","ResizeObserver"];var a=n(698);const s=(0,e.O)(),c={"meta":{"lang":"ru_RU","hosts":{"apiCoverageService":"https://api-maps.yandex.ru/services/coverage/","apiRouteService":"https://api-maps.yandex.ru/services/route/","apiSearchService":"https://api-maps.yandex.ru/services/search/","apiConfigService":"https://api-maps.yandex.ru/v3/config","apiCounterService":"https://api-maps.yandex.ru/v3/counters","mapTiles":"https://core-renderer-tiles.maps.yandex.net/tiles?l=map&%c&%l","mapjTiles":"https://core-renderer-tiles.maps.yandex.net/tiles?l=mapj&%c&%l&experimental_disable_toponym_hotspots=true","satTiles":"https://core-sat.maps.yandex.net/tiles?l=sat&%c&%l","vectorTiles":"https://core-renderer-tiles.maps.yandex.net/vmap2/tiles?lang={{lang}}&x={{x}}&y={{y}}&z={{z}}&zmin={{zmin}}&zmax={{zmax}}&v={{version}}","vectorImages":"https://core-renderer-tiles.maps.yandex.net/vmap2/icons?id={{id}}&scale={{scale}}","vectorMeshes":"https://core-renderer-tiles.maps.yandex.net/vmap2/meshes?id={{id}}","vectorGlyphs":"https://core-renderer-tiles.maps.yandex.net/vmap2/glyphs?lang={{lang}}&font_id={{fontId}}&range={{range}}","suggestApi":"https://suggest-maps.yandex.ru/suggest-geo","routerApi":"https://api.routing.yandex.net/v2/route","searchApi":"https://search-maps.yandex.ru/","trfRaster":"","trfVector":"","trfVectorImg":"","roadEventsVector":"","roadEventsRaster":"","roadEventsImg":"","carparksRaster":"","carparksVector":"","carparksVectorImg":"","stvTiles":"","stvVector":"","stvImg":""},"token":"bf9a6f8e4753b1b72399615921a78c2e","layers":{"map":{"version":"24.09.22-1-b240906182700","scaled":true,"hotspotZoomRange":[1,23]},"skl":{"version":"24.09.22-1-b240906182700","scaled":true,"hotspotZoomRange":[1,23]},"sta":{"version":"2024.09.20.23.07-1_24.09.23-1-21611","scaled":false},"stv":{"version":"2024.09.20.23.07-1_24.09.23-1-21611","scaled":false},"sat":{"version":"3.1364.0","scaled":false},"trf":{"version":"1727085480","scaled":true},"trfe":{"version":"","scaled":true,"hotspotZoomRange":[0,21]}},"allowedFeatures":{"vector":true,"customization":true,"customLayers":false,"router":false,"experiments":{},"deprecatedSuggest":true,"deprecatedRouter":true,"deprecatedSearch":true,"tile3d":false,"traffic":false,"carparks":false,"panoramas":false},"geolocation":{"lat":55.796129,"long":49.106414,"latSpan":0.333085,"longSpan":0.55841},"metrics":{"allowSending":true,"counterId":"80578111","pageUrl":"api-maps.yandex.ru/v3"},"copyrights":{"userAgreementHost":"https://yandex.ru/legal/maps_termsofuse/?lang={{lang}}","userAgreementTextLong":"Условия использования","userAgreementTextShort":"Условия","logoLang":"ru","allowRemove":false},"ruler":{"kmText":"км","mText":"м","mileText":"ми"},"apikey":"62e3fbe2-5fc5-4b7d-b9f0-86acc43edb26"},"src":{"base":"https://yastatic.net/s3/front-maps-static/maps-front-jsapi-3/3.0.14896251/build/static/bundles"}};if(s.ymaps3)throw new Error("ymaps3: already defined");!function(e){if(i.filter((r=>!e[r])).length)throw new Error(`ymaps3: next webapi's are required ${i.join(",")}`)}(s);const l=Promise.all([a.N.script(`${c.src.base}/main.js`),c.adhoc?(0,r.Q)(c.adhoc.options,(0,t.W$)({meta:c.adhoc.meta,src:c.src})):Promise.resolve((0,t.W$)({meta:c.meta,src:c.src}))]).then((([,e])=>{const r="@yandex/ymaps3-main";Object.assign(s.ymaps3,s[r]),delete s[r],(0,t.mn)(e)}));a.N.EB3__implInlineModules["@yandex/ymaps3-reactify"]=()=>l.then((()=>s.ymaps3.C58__implReactify));const p="loading"!==document.readyState?Promise.resolve():new Promise((function(e){window.addEventListener("DOMContentLoaded",e)})),u=Promise.all([p,l]).then((()=>s.ymaps3));a.N.B4C__implInit(c.src.base,u)})(),o=n.O(o),self.ymaps3=o})();