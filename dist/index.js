var e,n=require("react"),r=(e=require("json2mq"))&&"object"==typeof e&&"default"in e?e.default:e,t=function(e,r){var t=n.useRef(e);return n.useLayoutEffect(function(){t.current=e},r),t},u=function(){return{}},o=function(){return"undefined"!=typeof window&&void 0!==window.document},c=function(){return o()?{x:window.scrollX,y:window.scrollY}:{}},i=function(){return o()?{innerWidth:window.innerWidth,innerHeight:window.innerHeight,outerWidth:window.outerWidth,outerHeight:window.outerHeight}:{}},a=function(e){return function(e){return e instanceof Object&&e.nativeEvent instanceof Event}(e)&&e.persist()},l=function(e){return function(r,u,o){var c=t(r),i=n.useRef(e(r,u,o));return n.useEffect(function(){return i.current=e(function(){return c.current.apply(c,arguments)},u,o),function(){var e;return null==(e=i.current)?void 0:e.cancel()}},[c,o,u]),n.useCallback(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.forEach(a),i.current.apply(i,n)},[])}},f=function(e,n){var r,t=null,u=null,o=function(){for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return u=c,null===t&&(t=setTimeout(function(){null!==u&&(r=e.apply(void 0,u),u=null),t=null},n)),r};return o.cancel=function(){null!==t&&clearTimeout(t),t=null,u=null},o},s=l(f),v=function(e){return function(r,u,o,c){var i=n.useState(),a=i[0],l=i[1],f=t(r),s=n.useRef(e(r,o,c));return n.useEffect(function(){return s.current=e(function(){var e=f.current.apply(f,arguments);return l(e),e},o,c),function(){var e;return null==(e=s.current)?void 0:e.cancel()}},[f,c,o]),n.useEffect(function(){s.current.apply(s,u)},u),a}},d=v(f),p=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return n.useCallback(function(e){var n=e.target.checked;return r.forEach(function(e){return null==e?void 0:e(Boolean(n))})},r)},m=function(e){var r=n.useRef(e);return{set:function(e){r.current=e},get:function(){return r.current},is:function(e){return r.current===e}}},g=function(e,r){void 0===r&&(r=null);for(var t=arguments.length,u=new Array(t>2?t-2:0),o=2;o<t;o++)u[o-2]=arguments[o];return n.useCallback(function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return null==e?void 0:e.apply(r,[].concat(u,t))},[e].concat(u))},h=function(e,n,r){var t,u=void 0===r?{trailing:!0}:r,o=u.leading,c=u.trailing,i=null,a=null,l=function(){for(var r=arguments.length,u=new Array(r),l=0;l<r;l++)u[l]=arguments[l];return i=u,null!==a?clearTimeout(a):o&&(t=e.apply(void 0,i),i=null),a=setTimeout(function(){c&&null!==i&&(t=e.apply(void 0,i),i=null),a=null},n),t};return l.cancel=function(){null!==a&&clearTimeout(a),i=null,a=null},l},y=l(h),b=v(h),x=function(e){return n.useEffect(e,[])},w=function(e){return x(e)},E=function(e,n,r){var t;e&&(!r||(t=n.target)instanceof Object&&"matches"in t&&n.target.matches(r))&&e(n)},S=function(e,r,u,o){var c=void 0===o?{}:o,i=c.capture,a=c.once,l=c.passive,f=c.selectors,s=c.usingAnimationFrame,v=c.enabled,d=void 0===v||v,p=t(u),m=n.useRef(0);n.useEffect(function(){if(d){var n=function(e){return e instanceof Function?e():e}(e);if(n){var t=function(e){s?(cancelAnimationFrame(m.current),m.current=requestAnimationFrame(function(){return E(p.current,e,f)})):E(p.current,e,f)},u=Array.isArray(r)?r:[r];return u.forEach(function(e){return n.addEventListener(e,t,{capture:i,once:a,passive:l})}),function(){s&&m.current&&cancelAnimationFrame(m.current),u.forEach(function(e){return n.removeEventListener(e,t,{capture:i})})}}}},[e,i,a,l,f,s,d].concat(r))},C=function(){return n.useReducer(u,{})},k=function(e,r,t){void 0===r&&(r=null),void 0===t&&(t=null);var u=n.useCallback(function(n){var r;!document.fullscreenElement||!1!==n&&void 0!==n||document.exitFullscreen(),document.fullscreenElement||!0!==n&&void 0!==n||null==(r=e.current)||null==r.requestFullscreen||r.requestFullscreen()},[e]);return S(document,"fullscreenchange",r),S(document,"fullscreenerror",t),u},A=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return n.useCallback(function(e){var n=e.target.value;return r.forEach(function(e){return null==e?void 0:e(Number(n))})},r)},I=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return n.useCallback(function(e){var n=e.target.value;return r.forEach(function(e){return null==e?void 0:e(String(n))})},r)};function T(e,n){try{var r=e()}catch(e){return n(e)}return r&&r.then?r.then(void 0,n):r}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var R=function(e,r,u,o){void 0===o&&(o=[]);var c=t(r);n.useLayoutEffect(function(){var n=e();if(n&&n.length){var r=new IntersectionObserver(function(e,n){return null==c.current?void 0:c.current(e,n)},u);return n.forEach(function(e){return r.observe(e)}),function(){return r.disconnect()}}},o)},L=function(e){return e instanceof Object},O=function(){var e=n.useRef(!1);return x(function(){return e.current=!0,function(){e.current=!1}}),n.useCallback(function(){return e.current},[])};function F(e,n){if(null==e)return{};var r,t,u={},o=Object.keys(e);for(t=0;t<o.length;t++)n.indexOf(r=o[t])>=0||(u[r]=e[r]);return u}var M=function(e){return e.dataset.src},W={loading:!1},q={loading:!0},H=function(e,r){return function(t,u){void 0===u&&(u=W);var o=O(),c=n.useState(u),i=c[0],a=c[1];return n.useEffect(function(){if(r(t)){var n=t.id&&document.querySelector(e+"#"+t.id)||document.createElement(e);Object.assign(n,t);var u=function(){o()&&a(W)},c=function(e){o()&&a({loading:!1,error:e.error})};return n.addEventListener("load",u,!1),n.addEventListener("error",c,!1),a(q),document.body.appendChild(n),function(){n.removeEventListener("load",u,!1),n.removeEventListener("error",c,!1)}}a(W)},[t,o]),i}},j=H("link",function(e){var n=e.href;return o()&&!!n&&!document.querySelector('link[href="'+n+'"]')}),P=function(e){return n=e,Object.fromEntries(["matches","media"].map(function(e){return[e,n[e]]}));var n},z=function(e,n){var r,t=null,u=setInterval(function(){t&&(r=e.apply(void 0,t),t=null)},n),o=function(){for(var e=arguments.length,n=new Array(e),u=0;u<e;u++)n[u]=arguments[u];return t=n,r};return o.cancel=function(){clearInterval(u),t=null},o},U=l(z),D=v(z),V=H("script",function(e){var n=e.src;return o()&&!!n&&!document.querySelector('script[src="'+n+'"]')}),B=function(e){return null==e?void 0:e.getAttribute("id")},N=function(e,n,r){var t,u=void 0===r?{leading:!0,trailing:!0}:r,o=u.leading,c=u.trailing,i=null,a=null,l=function(){for(var r=arguments.length,u=new Array(r),l=0;l<r;l++)u[l]=arguments[l];return i=u,null===a&&(o&&(t=e.apply(void 0,i),i=null),a=setTimeout(function(){c&&null!==i&&(t=e.apply(void 0,i),i=null),a=null},n)),t};return l.cancel=function(){null!==a&&clearTimeout(a),i=null,a=null},l},Q=l(N),X=v(N),Y=function(e){return x(function(){return e})};exports.useAnimationFrame=function(e,r){void 0===r&&(r=[]);var u=t(e);n.useEffect(function(){var e=requestAnimationFrame(function(e){return null==u.current?void 0:u.current(e)});return function(){return cancelAnimationFrame(e)}},r)},exports.useAudit=s,exports.useAuditValue=d,exports.useCallbackWithCleanup=function(e,r){void 0===r&&(r=[]);var u=t(e),o=n.useRef();return n.useCallback(function(){o.current&&o.current();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];o.current=null==u.current?void 0:u.current.apply(u,n)},r)},exports.useCheckInput=function(e){void 0===e&&(e=!1);var r=n.useState(e),t=r[1];return[r[0],t,p(t)]},exports.useCurrent=m,exports.useCurryFunction=g,exports.useDebounce=y,exports.useDebounceValue=b,exports.useDidMount=w,exports.useDidUpdate=function(e,r){var t=n.useRef(!1);n.useEffect(t.current?e:function(){t.current=!0},r)},exports.useEffectOnce=x,exports.useEvent=S,exports.useForceUpdate=function(){return C()[1]},exports.useFullscreen=function(e){var r=n.useState(!1),t=r[0],u=r[1],o=k(e,function(){return u(!!document.fullscreenElement&&document.fullscreenElement===e.current)});return[t,o,g(o,null,!0),g(o,null,!1)]},exports.useHandleChangeCheck=p,exports.useHandleChangeFile=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return n.useCallback(function(e){var n=e.target.files;return r.forEach(function(e){return null==e?void 0:e(n)})},r)},exports.useHandleChangeNumber=A,exports.useHandleChangeText=I,exports.useInfiniteScroll=function(e,r){var t=n.useRef(!1),u="boolean"==typeof(arguments.length<=2?void 0:arguments[2])?arguments.length<=2?void 0:arguments[2]:void 0,o=L(arguments.length<=2?void 0:arguments[2])?arguments.length<=2?void 0:arguments[2]:L(arguments.length<=3?void 0:arguments[3])?arguments.length<=3?void 0:arguments[3]:void 0;R(function(){return e.current&&[e.current]},function(e){try{var n=function(){t.current=!1};if(u||t.current||e.every(function(e){return!e.isIntersecting}))return Promise.resolve();t.current=!0;var o=T(function(){return Promise.resolve(Promise.resolve(r())).then(function(){})},function(){});return Promise.resolve(o&&o.then?o.then(n):n())}catch(e){return Promise.reject(e)}},o)},exports.useIntersectionObserver=function(e,n,r){return R(function(){return e.current&&[e.current]},n,r,[r])},exports.useIntersectionObserverEffect=R,exports.useInterval=function(e,r){var u=r.period,o=r.leading,c=r.running,i=r.deps,a=void 0===i?[u,o,c]:i,l=t(e);n.useEffect(function(){var e;return c&&(o&&(null==l.current||l.current()),e=setInterval(function(){return null==l.current?void 0:l.current()},u)),function(){e&&clearInterval(e)}},a)},exports.useIsMounted=O,exports.useLazyLoad=function(e){void 0===e&&(e={});var r=e.getSrc,t=void 0===r?M:r,u=F(e,["getSrc"]),o=n.useRef(new Map),c=n.useCallback(function(e){if("string"==typeof e){var n=e;return function(e){o.current.set(e,n)}}if(e instanceof HTMLImageElement){var r=e,u=t(r);u&&o.current.set(r,u)}},[t]);return R(function(){return Array.from(o.current.keys())},function(e,n){return e.forEach(function(e){var r=e.target;if(e.isIntersecting&&r instanceof HTMLImageElement){var u=o.current.get(r)||t(r);u&&(r.src=u),n.unobserve(r)}})},u),c},exports.useLink=j,exports.useMediaQuery=function(e,t){void 0===t&&(t={media:"",matches:!1});var u="string"==typeof e?e:r(e),c=n.useState(o()?function(){return P(window.matchMedia(u))}:t),i=c[0],a=c[1];return n.useEffect(function(){var e=window.matchMedia(u),n=function(e){a(e)};return a(P(e)),e.addListener(n),function(){return e.removeListener(n)}},[u]),i},exports.useMutationObserver=function(e,r,u){var o=t(r);n.useLayoutEffect(function(){if(e.current){var n=new MutationObserver(function(e,n){return null==o.current?void 0:o.current(e,n)});return n.observe(e.current,u),function(){return n.disconnect()}}},[o,e,u])},exports.useNumberInput=function(e){void 0===e&&(e=0);var r=n.useState(e),t=r[1];return[r[0],t,A(t)]},exports.useOnClickOutside=function(e,n){return S(document,["mousedown","touchstart"],function(r){n&&e.current&&!e.current.contains(r.target)&&n(r)})},exports.usePrevious=function(e){var r=n.useRef();return n.useEffect(function(){r.current=e}),r.current},exports.usePromise=function(e,r,t){void 0===r&&(r=[]),void 0===t&&(t=W);var u=n.useState(t),o=u[0],c=u[1];return n.useEffect(function(){var n=!1,r=e();if(r)return c(q),r.then(function(e){n||c({loading:!1,result:e})}).catch(function(e){n||c({loading:!1,error:e})}),function(){n=!0};c(W)},r),o},exports.usePromiseCallback=function(e,r,t){void 0===r&&(r=[]),void 0===t&&(t=W);var u=O(),o=n.useState(t),c=o[0],i=o[1],a=m();return[c,n.useCallback(function(){var n=e.apply(void 0,arguments);a.set(n),n?(i(q),n.then(function(e){a.is(n)&&u()&&i({loading:!1,result:e})}).catch(function(e){a.is(n)&&u()&&i({loading:!1,error:e})})):i(W)},r)]},exports.useResizeObserver=function(e,r){var u=t(r);n.useLayoutEffect(function(){if(e.current){var n=new ResizeObserver(function(e){return null==u.current?void 0:u.current(e)});return n.observe(e.current),function(){return n.disconnect()}}},[u,e])},exports.useSample=U,exports.useSampleValue=D,exports.useScript=V,exports.useScrollSpy=function(e){void 0===e&&(e={threshold:1});var r=e.getId,t=void 0===r?B:r,u=F(e,["getId"]),o=n.useState(),c=o[0],i=o[1],a=n.useRef(new Map),l=n.useRef(new Set),f=n.useCallback(function(e){if("string"==typeof e){var n=e;return function(e){a.current.set(e,n)}}if(e instanceof Element){var r=e,u=t(r);u&&a.current.set(r,u)}},[t]);return R(function(){return Array.from(a.current.keys())},function(e){if(e.forEach(function(e){var n=e.target;e.isIntersecting?l.current.add(n):l.current.delete(n)}),l.current.size){var n=Array.from(l.current).reduce(function(e,n){return e.getBoundingClientRect().top<n.getBoundingClientRect().top?e:n}),r=a.current.get(n)||t(n);"string"==typeof r&&i(r)}},u),[c,f]},exports.useTextInput=function(e){void 0===e&&(e="");var r=n.useState(e),t=r[1];return[r[0],t,I(t)]},exports.useThrottle=Q,exports.useThrottleValue=X,exports.useTimeout=function(e,r,u){void 0===u&&(u=[r]);var o=t(e);n.useEffect(function(){var e=setTimeout(function(){return null==o.current?void 0:o.current()},r);return function(){return clearTimeout(e)}},u)},exports.useTimeoutCallback=function(e,r){var u=t(e),o=n.useRef();return w(function(){o.current&&(clearTimeout(o.current.handle),o.current.resolve())}),n.useCallback(function(){return new Promise(function(e){o.current&&(clearTimeout(o.current.handle),o.current.resolve());var n=setTimeout(function(){null==u.current||u.current(),e()},r);o.current={handle:n,resolve:e}})},[u,r])},exports.useToggle=function(e){void 0===e&&(e=!1);var r=n.useState(e),t=r[1];return[r[0],n.useCallback(function(){return t(function(e){return!e})},[]),g(t,null,!0),g(t,null,!1),t]},exports.useToggleFullscreen=k,exports.useTriggerUpdate=C,exports.useUpdatedRef=t,exports.useWillUnmount=Y,exports.useWindowBeforeUnload=function(e,n){return void 0===n&&(n=!0),S(window,"beforeunload",function(n){return n.preventDefault(),e&&(n.returnValue=e),e},{enabled:n})},exports.useWindowScrollOffset=function(){var e=n.useState(c),r=e[0],t=e[1];return S(window,"scroll",function(){return t(c())},{capture:!1,passive:!0,usingAnimationFrame:!0}),r},exports.useWindowSize=function(){var e=n.useState(i),r=e[0],t=e[1];return S(window,"resize",function(){return t(i())}),r},exports.useWorkerCallback=function(e,r,t){void 0===t&&(t=W);var u=n.useState(t),o=u[0],c=u[1],i=n.useRef(),a=n.useCallback(function(n,t){i.current&&i.current.terminate();var u=new Worker(e,r);u.addEventListener("message",function(e){return c({loading:!1,result:e.data})}),u.addEventListener("error",function(e){return c({loading:!1,error:e.error})}),u.postMessage(n,t),c(q),i.current=u},[r,e]);return Y(function(){i.current&&i.current.terminate()}),[o,a]};
//# sourceMappingURL=index.js.map
