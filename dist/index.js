var e=require("react"),t=require("cb-toolset/dom"),r=require("cb-toolset/function"),n=require("cb-toolset/object"),u=function(t,r){var n=e.useRef(t);return e.useLayoutEffect(function(){n.current=t},r),n},o=function(e,t,r){var n;e&&(!r||(n=t.target)instanceof Object&&"matches"in n&&t.target.matches(r))&&e(t)},c=function(t,r,n,c){var i=void 0===c?{}:c,a=i.capture,s=i.once,f=i.passive,l=i.selectors,v=i.usingAnimationFrame,d=i.enabled,p=void 0===d||d,m=u(n),h=e.useRef(0);e.useEffect(function(){if(p){var e=function(e){return e instanceof Function?e():e}(t);if(e){var n=function(e){v?(cancelAnimationFrame(h.current),h.current=requestAnimationFrame(function(){return o(m.current,e,l)})):o(m.current,e,l)},u=Array.isArray(r)?r:[r];return u.forEach(function(t){return e.addEventListener(t,n,{capture:a,once:s,passive:f})}),function(){v&&h.current&&cancelAnimationFrame(h.current),u.forEach(function(t){return e.removeEventListener(t,n,{capture:a})})}}}},[t,a,s,f,l,v,p].concat(r))},i=function(e,t){return void 0===t&&(t=!0),c(window,"beforeunload",function(t){return t.preventDefault(),e&&(t.returnValue=e),e},{enabled:t})},a=function(t){return function(r){var n=u(r);e.useEffect(function(){var e=t.block(function(e,t){return null==n.current?void 0:n.current(e,t)});return function(){return e()}},[n])}};function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function d(e,t,r){return(d=v()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var u=new(Function.bind.apply(e,n));return r&&l(u,r.prototype),u}).apply(null,arguments)}function p(e){var t="function"==typeof Map?new Map:void 0;return(p=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return d(e,arguments,f(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,e)})(e)}function m(e,t){if(null==e)return{};var r,n,u={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(u[r]=e[r]);return u}var h={loading:!1},b={loading:!0},x=function(t,r,n,u){void 0===r&&(r=[]),void 0===n&&(n=h);var o=e.useState(n),c=o[0],i=o[1];return e.useEffect(function(){var e=!1,r=t();if(r)return i(b),r.then(function(t){e||i({loading:!1,result:t})}).catch(function(t){e||i({loading:!1,error:t})}),function(){e=!0,null==u||u()};i(h)},r),c},y=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t||"Fetch Error")||this).status=r,n}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n}(p(Error)),g=function(t,r){return function(n,u,o,c){var i=e.useRef();return x(function(){try{var e=new AbortController;return i.current=e,Promise.resolve(t(n,s(s({},u),{},{signal:e.signal}))).then(function(e){var t;function n(r){if(t)return r;throw new y(e.statusText,e.status)}var u=function(){if(e.ok)return Promise.resolve(r(e)).then(function(e){return t=1,e})}();return u&&u.then?u.then(n):n(u)})}catch(e){return Promise.reject(e)}},o,c,function(){var e;return null==(e=i.current)?void 0:e.abort()})}},E=function(){return t.isBrowser()?{x:window.scrollX,y:window.scrollY}:{}},k=function(){return t.isBrowser()?{innerWidth:window.innerWidth,innerHeight:window.innerHeight,outerWidth:window.outerWidth,outerHeight:window.outerHeight}:{}},w=function(e){return function(e){return e instanceof Object&&e.nativeEvent instanceof Event}(e)&&e.persist()},S=function(t){return function(r,n,o){var c=u(r),i=e.useRef(t(r,n,o));return e.useEffect(function(){return i.current=t(function(){return c.current.apply(c,[].slice.call(arguments))},n,o),function(){var e;return null==(e=i.current)?void 0:e.cancel()}},[c,o,n]),e.useCallback(function(){var e=[].slice.call(arguments);return e.forEach(w),i.current.apply(i,e)},[])}},C=function(t){return function(r,n,o,c){var i=e.useState(),a=i[0],s=i[1],f=u(r),l=e.useRef(t(r,o,c));return e.useEffect(function(){return l.current=t(function(){var e=f.current.apply(f,[].slice.call(arguments));return s(e),e},o,c),function(){var e;return null==(e=l.current)?void 0:e.cancel()}},[f,c,o]),e.useEffect(function(){l.current.apply(l,n)},n),a}},O=function(t,r,n){return function(o,c,i,a){void 0===a&&(a=h);var s=e.useState(a),f=s[0],l=s[1],v=u(c),d=u(i);return e.useEffect(function(){if(r(o)){var e=o.id&&document.querySelector(t+"#"+o.id)||document.createElement(t);Object.assign(e,o);var u=function(e){l(h),null==v.current||v.current(e)},c=function(e){l({loading:!1,error:e.error}),null==d.current||d.current(e)};return e.addEventListener("load",u,!1),e.addEventListener("error",c,!1),l(b),n(e),function(){e.removeEventListener("load",u,!1),e.removeEventListener("error",c,!1)}}l(h)},[]),f}},R=function(e,t){switch(t.type){case"append":return[].concat(e,[t.payload]);case"prepend":return[t.payload].concat(e);case"filter":return e.filter(t.payload);default:return e}},F=S(r.audit),L=C(r.audit),j=function(){var t=[].slice.call(arguments);return e.useCallback(function(e){var r=e.target.checked;return t.forEach(function(e){return null==e?void 0:e(Boolean(r))})},t)},P=function(t){var r=e.useRef(t);return{set:function(e){r.current=e},get:function(){return r.current},is:function(e){return r.current===e}}},T=function(t,r){void 0===r&&(r=null);var n=[].slice.call(arguments,2);return e.useCallback(function(){return null==t?void 0:t.apply(r,[].concat(n,[].slice.call(arguments)))},[t].concat(n))},H=S(r.debounce),A=C(r.debounce),I=function(t){return e.useEffect(t,[])},q=function(e){return I(e)},B=function(t,r,n){void 0===n&&(n=[]);var o=u(r);e.useEffect(function(){var e=o.current,r=("function"==typeof e?e():document.querySelector(e))||document.createElement("link");r instanceof HTMLLinkElement&&(Object.assign(r,t),document.head.appendChild(r))},n)},M=g(fetch,function(e){return e.json()}),_=g(fetch,function(e){return e.arrayBuffer()}),U=g(fetch,function(e){return e.blob()}),W=g(fetch,function(e){return e.formData()}),D=g(fetch,function(e){return Promise.resolve(e.body)}),V=g(fetch,function(e){return e.text()}),z=function(){return e.useReducer(n.createUniqueObject,n.createUniqueObject())},N=function(t,r,n){void 0===r&&(r=null),void 0===n&&(n=null);var u=e.useCallback(function(e){var r;!document.fullscreenElement||!1!==e&&void 0!==e||document.exitFullscreen(),document.fullscreenElement||!0!==e&&void 0!==e||null==(r=t.current)||null==r.requestFullscreen||r.requestFullscreen()},[t]);return c(document,"fullscreenchange",r),c(document,"fullscreenerror",n),u},Q=function(){var t=[].slice.call(arguments);return e.useCallback(function(e){var r=e.target.value;return t.forEach(function(e){return null==e?void 0:e(Number(r))})},t)},X=function(){var t=[].slice.call(arguments);return e.useCallback(function(e){var r=e.target.value;return t.forEach(function(e){return null==e?void 0:e(String(r))})},t)},Y=function(t,n,o,c){void 0===c&&(c=[]);var i=u(n);e.useLayoutEffect(function(){var e=t();if(e&&e.length){var n=o&&s(s({},o),{},{root:r.getValueFromFactory(o.root)}),u=new IntersectionObserver(function(e,t){return null==i.current?void 0:i.current(e,t)},n);return e.forEach(function(e){return u.observe(e)}),function(){return u.disconnect()}}},c)};function G(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}var J=function(e){return e instanceof Object},K=function(){var t=e.useRef(!1);return I(function(){return t.current=!0,function(){t.current=!1}}),e.useCallback(function(){return t.current},[])},Z=function(e){return e.dataset.src},$=O("link",function(e){var r=e.href;return t.isBrowser()&&!!r&&!document.querySelector('link[href="'+r+'"]')},function(e){return document.head.appendChild(e)}),ee=function(e){return n.pickFrom(e,"matches","media")},te=function(e){return c(document,"visibilitychange",function(){return null==e?void 0:e(document.visibilityState)})},re=function(){return!0},ne=S(r.sample),ue=C(r.sample),oe=O("script",function(e){var r=e.src;return t.isBrowser()&&!!r&&!document.querySelector('script[src="'+r+'"]')},function(e){return document.body.appendChild(e)}),ce=function(e){return null==e?void 0:e.getAttribute("id")},ie=S(r.throttle),ae=C(r.throttle),se=function(){return!0},fe=function(e){return I(function(){return e})};exports.createBeforeLeaveHook=function(e){return function(t,r){void 0===t&&(t=!0),a(e)(function(){return t?r||!1:void 0}),i(r,t)}},exports.createFetchHook=g,exports.createHistoryBlockHook=a,exports.createHistoryListenHook=function(t){return function(r){var n=u(r);e.useEffect(function(){var e=t.listen(function(e,t){return null==n.current?void 0:n.current(e,t)});return function(){return e()}},[n])}},exports.createRateLimitHook=S,exports.createRateLimitValueHook=C,exports.createResourceHook=O,exports.createSearchParamsObjectHook=function(r){return function(){var n=e.useContext(r).location.search;return t.createURLSearchObject(n)}},exports.useAnimationFrame=function(t,r){void 0===r&&(r=[]);var n=u(t);e.useEffect(function(){var e=requestAnimationFrame(function(e){return null==n.current?void 0:n.current(e)});return function(){return cancelAnimationFrame(e)}},r)},exports.useArray=function(t){void 0===t&&(t=[]);var r=e.useReducer(R,t),n=r[1];return[r[0],e.useCallback(function(e){return n({type:"append",payload:e})},[n]),e.useCallback(function(e){return n({type:"prepend",payload:e})},[n]),e.useCallback(function(e){return n({type:"filter",payload:e})},[n])]},exports.useAudit=F,exports.useAuditValue=L,exports.useBase=function(t,r){return void 0===r&&(r=[]),e.useEffect(function(){var e=function(e,t){var r=t.href,n=t.target,u={href:e.href,target:e.target};return r&&(e.href=r),n&&(e.target=n),u},r=document.querySelector("base");if(r){var n=r,u=e(n,t);return function(){return e(n,u)}}var o=document.createElement("base");return e(o,t),document.head.insertAdjacentElement("afterbegin",o),function(){return o.remove()}},r)},exports.useCallbackWithCleanup=function(t,r){void 0===r&&(r=[]);var n=u(t),o=e.useRef();return e.useCallback(function(){o.current&&o.current(),o.current=null==n.current?void 0:n.current.apply(n,[].slice.call(arguments))},r)},exports.useCheckInput=function(t){void 0===t&&(t=!1);var r=e.useState(t),n=r[1];return[r[0],n,j(n)]},exports.useCurrent=P,exports.useCurryFunction=T,exports.useDebounce=H,exports.useDebounceValue=A,exports.useDidMount=q,exports.useDidUpdate=function(t,r){var n=e.useRef(!1);e.useEffect(n.current?t:function(){n.current=!0},r)},exports.useEffectOnce=I,exports.useEvent=c,exports.useFavicon=function(e){return B({href:e,rel:"shortcut icon",type:"image/x-icon"},"link[rel='shortcut icon']",[e])},exports.useFetch=M,exports.useFetchArrayBuffer=_,exports.useFetchBlob=U,exports.useFetchFormData=W,exports.useFetchStream=D,exports.useFetchText=V,exports.useForceUpdate=function(){return z()[1]},exports.useFullscreen=function(t){var r=e.useState(!1),n=r[0],u=r[1],o=N(t,function(){return u(!!document.fullscreenElement&&document.fullscreenElement===t.current)});return[n,o,T(o,null,!0),T(o,null,!1)]},exports.useHandleChangeCheck=j,exports.useHandleChangeFile=function(){var t=[].slice.call(arguments);return e.useCallback(function(e){var r=e.target.files;return t.forEach(function(e){return null==e?void 0:e(r)})},t)},exports.useHandleChangeNumber=Q,exports.useHandleChangeText=X,exports.useInfiniteScroll=function(t,r){var n=[].slice.call(arguments,2),u=e.useRef(!1),o="boolean"==typeof n[0]?n[0]:void 0,c=J(n[0])?n[0]:J(n[1])?n[1]:void 0;Y(function(){return t.current&&[t.current]},function(e){try{var t=function(){u.current=!1};if(o||u.current||e.every(function(e){return!e.isIntersecting}))return Promise.resolve();u.current=!0;var n=G(function(){return Promise.resolve(Promise.resolve(r())).then(function(){})},function(){});return Promise.resolve(n&&n.then?n.then(t):t())}catch(e){return Promise.reject(e)}},c)},exports.useIntersectionObserver=function(e,t,r){return Y(function(){return e.current&&[e.current]},t,r,[r])},exports.useIntersectionObserverEffect=Y,exports.useInterval=function(t,r){var n=r.period,o=r.leading,c=r.running,i=r.deps,a=void 0===i?[n,o,c]:i,s=u(t);e.useEffect(function(){var e;return c&&(o&&(null==s.current||s.current()),e=setInterval(function(){return null==s.current?void 0:s.current()},n)),function(){e&&clearInterval(e)}},a)},exports.useIsMounted=K,exports.useLazyLoad=function(t){var r=void 0===t?{}:t,n=r.getSrc,u=void 0===n?Z:n,o=m(r,["getSrc"]),c=e.useRef(new Map),i=e.useCallback(function(e){if("string"==typeof e){var t=e;return function(e){c.current.set(e,t)}}if(e instanceof HTMLImageElement){var r=e,n=u(r);n&&c.current.set(r,n)}},[u]);return Y(function(){return Array.from(c.current.keys())},function(e,t){return e.forEach(function(e){var r=e.target;if(e.isIntersecting&&r instanceof HTMLImageElement){var n=c.current.get(r)||u(r);n&&(r.src=n),t.unobserve(r)}})},o),i},exports.useLink=$,exports.useMediaQuery=function(r,n){void 0===n&&(n={media:"",matches:!1});var u=e.useState(t.isBrowser()?function(){return ee(window.matchMedia(r))}:n),o=u[0],c=u[1];return e.useEffect(function(){var e=window.matchMedia(r),t=function(e){c(e)};return c(ee(e)),e.addListener(t),function(){return e.removeListener(t)}},[r]),o},exports.useMutationObserver=function(t,r,n){var o=u(r);e.useLayoutEffect(function(){if(t.current){var e=new MutationObserver(function(e,t){return null==o.current?void 0:o.current(e,t)});return e.observe(t.current,n),function(){return e.disconnect()}}},[o,t,n])},exports.useNumberInput=function(t){void 0===t&&(t=0);var r=e.useState(t),n=r[1];return[r[0],n,Q(n)]},exports.useOnClickOutside=function(e,t){return c(document,["mousedown","touchstart"],function(r){t&&e.current&&!e.current.contains(r.target)&&t(r)})},exports.usePageVisibility=te,exports.usePageVisibilityState=function(){var t=e.useState(document.visibilityState),r=t[0];return te(t[1]),r},exports.usePrevious=function(t,r){void 0===r&&(r=re);var n=e.useRef();return e.useEffect(function(){r(t)&&(n.current=t)},[t]),n.current},exports.usePromise=x,exports.usePromiseCallback=function(t,r,n){void 0===r&&(r=[]),void 0===n&&(n=h);var u=K(),o=e.useState(n),c=o[0],i=o[1],a=P();return[c,e.useCallback(function(){var e=t.apply(void 0,[].slice.call(arguments));a.set(e),e?(i(b),e.then(function(t){a.is(e)&&u()&&i({loading:!1,result:t})}).catch(function(t){a.is(e)&&u()&&i({loading:!1,error:t})})):i(h)},r)]},exports.useResizeObserver=function(t,r){var n=u(r);e.useLayoutEffect(function(){if(t.current){var e=new ResizeObserver(function(e){return null==n.current?void 0:n.current(e)});return e.observe(t.current),function(){return e.disconnect()}}},[n,t])},exports.useSample=ne,exports.useSampleValue=ue,exports.useScript=oe,exports.useScrollSpy=function(t){var r=void 0===t?{}:t,n=r.getId,u=void 0===n?ce:n,o=r.threshold,c=void 0===o?1:o,i=m(r,["getId","threshold"]),a=e.useState(),f=a[0],l=a[1],v=e.useRef(new Map),d=e.useRef(new Set),p=e.useCallback(function(e){if("string"==typeof e){var t=e;return function(e){v.current.set(e,t)}}if(e instanceof Element){var r=e,n=u(r);n&&v.current.set(r,n)}},[u]);return Y(function(){return Array.from(v.current.keys())},function(e){if(e.forEach(function(e){var t=e.target;e.intersectionRatio>=c?d.current.add(t):d.current.delete(t)}),d.current.size){var t=Array.from(d.current).reduce(function(e,t){return e.getBoundingClientRect().top<t.getBoundingClientRect().top?e:t}),r=v.current.get(t)||u(t);"string"==typeof r&&l(r)}},s(s({},i),{},{threshold:c})),[f,p]},exports.useTextInput=function(t){void 0===t&&(t="");var r=e.useState(t),n=r[1];return[r[0],n,X(n)]},exports.useThrottle=ie,exports.useThrottleValue=ae,exports.useTimeline=function(t,r,n){void 0===r&&(r=!0),void 0===n&&(n=se);var u=e.useRef([]);return e.useEffect(function(){n(t)&&(u.current=r?[t].concat(u.current):[].concat(u.current,[t]))},[t]),u.current},exports.useTimeout=function(t,r,n){void 0===n&&(n=[r]);var o=u(t);e.useEffect(function(){var e=setTimeout(function(){return null==o.current?void 0:o.current()},r);return function(){return clearTimeout(e)}},n)},exports.useTimeoutCallback=function(t,r){var n=u(t),o=e.useRef();return q(function(){o.current&&(clearTimeout(o.current.handle),o.current.resolve())}),e.useCallback(function(){return new Promise(function(e){o.current&&(clearTimeout(o.current.handle),o.current.resolve());var t=setTimeout(function(){null==n.current||n.current(),e()},r);o.current={handle:t,resolve:e}})},[n,r])},exports.useTitle=function(t,r){var n=e.useRef(document.title);e.useEffect(function(){document.title=t},[t]),fe(function(){(null==r?void 0:r.restoreOnUnmount)&&(document.title=n.current)})},exports.useToggle=function(t){void 0===t&&(t=!1);var r=e.useState(t),n=r[1];return[r[0],e.useCallback(function(){return n(function(e){return!e})},[]),T(n,null,!0),T(n,null,!1),n]},exports.useToggleFullscreen=N,exports.useTriggerUpdate=z,exports.useUpdatedLink=B,exports.useUpdatedRef=u,exports.useWillUnmount=fe,exports.useWindowBeforeUnload=i,exports.useWindowScrollOffset=function(){var t=e.useState(E),r=t[0],n=t[1];return c(window,"scroll",function(){return n(E())},{capture:!1,passive:!0,usingAnimationFrame:!0}),r},exports.useWindowSize=function(){var t=e.useState(k),r=t[0],n=t[1];return c(window,"resize",function(){return n(k())}),r},exports.useWorkerCallback=function(t,r,n){void 0===n&&(n=h);var u=e.useState(n),o=u[0],c=u[1],i=e.useRef(),a=e.useCallback(function(e,n){i.current&&i.current.terminate();var u=new Worker(t,r);u.addEventListener("message",function(e){return c({loading:!1,result:e.data})}),u.addEventListener("error",function(e){return c({loading:!1,error:e.error})}),u.postMessage(e,n),c(b),i.current=u},[r,t]);return fe(function(){i.current&&i.current.terminate()}),[o,a]};
//# sourceMappingURL=index.js.map
