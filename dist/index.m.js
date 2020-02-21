import{useRef as n,useLayoutEffect as r,useEffect as t,useCallback as e,useState as u,useReducer as o}from"react";import i from"json2mq";var c=function(t,e){var u=n(t);return r(function(){u.current=t},e),u},l=function(n,r){void 0===r&&(r=[]);var e=c(n);t(function(){var n=requestAnimationFrame(function(n){return null==e.current?void 0:e.current(n)});return function(){return cancelAnimationFrame(n)}},r)},a=function(){return{}},f=function(){return"undefined"!=typeof window&&void 0!==window.document},v=function(){return f()?{x:window.scrollX,y:window.scrollY}:{}},d=function(){return f()?{innerWidth:window.innerWidth,innerHeight:window.innerHeight,outerWidth:window.outerWidth,outerHeight:window.outerHeight}:{}},s=function(n){return function(n){return n instanceof Object&&n.nativeEvent instanceof Event}(n)&&n.persist()},m=function(r){return function(u,o,i){var l=c(u),a=n(r(u,o,i));return t(function(){return a.current=r(function(){return l.current.apply(l,arguments)},o,i),function(){var n;return null==(n=a.current)?void 0:n.cancel()}},[l,i,o]),e(function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.forEach(s),a.current.apply(a,r)},[])}},g=m(function(n,r){var t,e=null,u=null,o=function(){for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return u=i,null===e&&(e=setTimeout(function(){null!==u&&(t=n.apply(void 0,u),u=null),e=null},r)),t};return o.cancel=function(){null!==e&&clearTimeout(e),e=null,u=null},o}),h=function(r,t){void 0===t&&(t=[]);var u=c(r),o=n();return e(function(){o.current&&o.current();for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];o.current=null==u.current?void 0:u.current.apply(u,r)},t)},p=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return e(function(n){var t=n.target.checked;return r.forEach(function(n){return null==n?void 0:n(Boolean(t))})},r)},w=function(n){void 0===n&&(n=!1);var r=u(n),t=r[1];return[r[0],t,p(t)]},y=function(r){var t=n(r);return{set:function(n){t.current=n},get:function(){return t.current},is:function(n){return t.current===n}}},E=function(n,r){void 0===r&&(r=null);for(var t=arguments.length,u=new Array(t>2?t-2:0),o=2;o<t;o++)u[o-2]=arguments[o];return e(function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return null==n?void 0:n.apply(r,[].concat(u,e))},[n].concat(u))},A=m(function(n,r,t){var e,u=void 0===t?{trailing:!0}:t,o=u.leading,i=u.trailing,c=null,l=null,a=function(){for(var t=arguments.length,u=new Array(t),a=0;a<t;a++)u[a]=arguments[a];return c=u,null!==l?clearTimeout(l):o&&(e=n.apply(void 0,c),c=null),l=setTimeout(function(){i&&null!==c&&(e=n.apply(void 0,c),c=null),l=null},r),e};return a.cancel=function(){null!==l&&clearTimeout(l),c=null,l=null},a}),b=function(n){return t(n,[])},T=function(n){return b(n)},F=function(r,e){var u=n(!1);t(u.current?r:function(){u.current=!0},e)},L=function(n,r,t){var e;n&&(!t||(e=r.target)instanceof Object&&"matches"in e&&r.target.matches(t))&&n(r)},q=function(r,e,u,o){var i=void 0===o?{}:o,l=i.capture,a=i.once,f=i.passive,v=i.selectors,d=i.usingAnimationFrame,s=i.enabled,m=void 0===s||s,g=c(u),h=n(0);t(function(){if(m){var n=function(n){return n instanceof Function?n():n}(r);if(n){var t=function(n){d?(cancelAnimationFrame(h.current),h.current=requestAnimationFrame(function(){return L(g.current,n,v)})):L(g.current,n,v)},u=Array.isArray(e)?e:[e];return u.forEach(function(r){return n.addEventListener(r,t,{capture:l,once:a,passive:f})}),function(){d&&h.current&&cancelAnimationFrame(h.current),u.forEach(function(r){return n.removeEventListener(r,t,{capture:l})})}}}},[r,l,a,f,v,d,m].concat(e))},O=function(){return o(a,{})},j=function(){return O()[1]},k=function(n,r,t){void 0===r&&(r=null),void 0===t&&(t=null);var u=e(function(r){var t;!document.fullscreenElement||!1!==r&&void 0!==r||document.exitFullscreen(),document.fullscreenElement||!0!==r&&void 0!==r||null==(t=n.current)||null==t.requestFullscreen||t.requestFullscreen()},[n]);return q(document,"fullscreenchange",r),q(document,"fullscreenerror",t),u},I=function(n){var r=u(!1),t=r[0],e=r[1],o=k(n,function(){return e(!!document.fullscreenElement&&document.fullscreenElement===n.current)});return[t,o,E(o,null,!0),E(o,null,!1)]},W=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return e(function(n){var t=n.target.files;return r.forEach(function(n){return null==n?void 0:n(t)})},r)},H=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return e(function(n){var t=n.target.value;return r.forEach(function(n){return null==n?void 0:n(Number(t))})},r)},M=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return e(function(n){var t=n.target.value;return r.forEach(function(n){return null==n?void 0:n(String(t))})},r)},S=function(n,t,e){var u=c(t);r(function(){if(n.current){var r=new IntersectionObserver(function(n,r){return null==u.current?void 0:u.current(n,r)},e);return r.observe(n.current),function(){return r.disconnect()}}},[u,n,e])},x=function(n,r){var e=r.period,u=r.leading,o=r.running,i=r.deps,l=void 0===i?[e,u,o]:i,a=c(n);t(function(){var n;return o&&(u&&(null==a.current||a.current()),n=setInterval(function(){return null==a.current?void 0:a.current()},e)),function(){n&&clearInterval(n)}},l)},z=function(){var r=n(!1);return b(function(){return r.current=!0,function(){r.current=!1}}),e(function(){return r.current},[])},B={loading:!1},C={loading:!0},D=function(n,r){return function(e,o){void 0===o&&(o=B);var i=z(),c=u(o),l=c[0],a=c[1];return t(function(){if(r(e)){var t=e.id&&document.querySelector(n+"#"+e.id)||document.createElement(n);Object.keys(e).forEach(function(n){t[n]=e[n]});var u=function(){i()&&a(B)},o=function(n){i()&&a({loading:!1,error:n.error})};return t.addEventListener("load",u,!1),t.addEventListener("error",o,!1),a(C),document.body.appendChild(t),function(){t.removeEventListener("load",u,!1),t.removeEventListener("error",o,!1)}}a(B)},[e,i]),l}},N=D("link",function(n){var r=n.href;return f()&&!!r&&!document.querySelector('link[href="'+r+'"]')}),P=function(n){return r=n,Object.fromEntries(["matches","media"].map(function(n){return[n,r[n]]}));var r},R=function(n,r){void 0===r&&(r={media:"",matches:!1});var e="string"==typeof n?n:i(n),o=u(f()?function(){return P(window.matchMedia(e))}:r),c=o[0],l=o[1];return t(function(){var n=window.matchMedia(e),r=function(n){l(n)};return l(P(n)),n.addListener(r),function(){return n.removeListener(r)}},[e]),c},V=function(n,t,e){var u=c(t);r(function(){if(n.current){var r=new MutationObserver(function(n,r){return null==u.current?void 0:u.current(n,r)});return r.observe(n.current,e),function(){return r.disconnect()}}},[u,n,e])},X=function(n){void 0===n&&(n=0);var r=u(n),t=r[1];return[r[0],t,H(t)]},Y=function(n,r){return q(document,["mousedown","touchstart"],function(t){r&&n.current&&!n.current.contains(t.target)&&r(t)})},G=function(r){var e=n();return t(function(){e.current=r}),e.current},J=function(n,r,e){void 0===r&&(r=[]),void 0===e&&(e=B);var o=u(e),i=o[0],c=o[1];return t(function(){var r=!1,t=n();if(t)return c(C),t.then(function(n){r||c({loading:!1,result:n})}).catch(function(n){r||c({loading:!1,error:n})}),function(){r=!0};c(B)},r),i},K=function(n,r,t){void 0===r&&(r=[]),void 0===t&&(t=B);var o=z(),i=u(t),c=i[0],l=i[1],a=y();return[c,e(function(){var r=n.apply(void 0,arguments);a.set(r),r?(l(C),r.then(function(n){a.is(r)&&o()&&l({loading:!1,result:n})}).catch(function(n){a.is(r)&&o()&&l({loading:!1,error:n})})):l(B)},r)]},Q=function(n,t){var e=c(t);r(function(){if(n.current){var r=new ResizeObserver(function(n){return null==e.current?void 0:e.current(n)});return r.observe(n.current),function(){return r.disconnect()}}},[e,n])},U=m(function(n,r){var t,e=null,u=setInterval(function(){e&&(t=n.apply(void 0,e),e=null)},r),o=function(){for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return e=r,t};return o.cancel=function(){clearInterval(u),e=null},o}),Z=D("script",function(n){var r=n.src;return f()&&!!r&&!document.querySelector('script=[src="'+r+'"]')}),$=function(n){void 0===n&&(n="");var r=u(n),t=r[1];return[r[0],t,M(t)]},_=m(function(n,r,t){var e,u=void 0===t?{leading:!0,trailing:!0}:t,o=u.leading,i=u.trailing,c=null,l=null,a=function(){for(var t=arguments.length,u=new Array(t),a=0;a<t;a++)u[a]=arguments[a];return c=u,null===l&&(o&&(e=n.apply(void 0,c),c=null),l=setTimeout(function(){i&&null!==c&&(e=n.apply(void 0,c),c=null),l=null},r)),e};return a.cancel=function(){null!==l&&clearTimeout(l),c=null,l=null},a}),nn=function(n,r,e){void 0===e&&(e=[r]);var u=c(n);t(function(){var n=setTimeout(function(){return null==u.current?void 0:u.current()},r);return function(){return clearTimeout(n)}},e)},rn=function(r,t){var u=c(r),o=n();return T(function(){o.current&&(clearTimeout(o.current.handle),o.current.resolve())}),e(function(){return new Promise(function(n){o.current&&(clearTimeout(o.current.handle),o.current.resolve());var r=setTimeout(function(){null==u.current||u.current(),n()},t);o.current={handle:r,resolve:n}})},[u,t])},tn=function(n){void 0===n&&(n=!1);var r=u(n),t=r[1];return[r[0],e(function(){return t(function(n){return!n})},[]),E(t,null,!0),E(t,null,!1),t]},en=function(n){return b(function(){return n})},un=function(n,r){return void 0===r&&(r=!0),q(window,"beforeunload",function(r){return r.preventDefault(),n&&(r.returnValue=n),n},{enabled:r})},on=function(){var n=u(v),r=n[0],t=n[1];return q(window,"scroll",function(){return t(v())},{capture:!1,passive:!0,usingAnimationFrame:!0}),r},cn=function(){var n=u(d),r=n[0],t=n[1];return q(window,"resize",function(){return t(d())}),r},ln=function(r,t,o){void 0===o&&(o=B);var i=u(o),c=i[0],l=i[1],a=n(),f=e(function(n,e){a.current&&a.current.terminate();var u=new Worker(r,t);u.addEventListener("message",function(n){return l({loading:!1,result:n.data})}),u.addEventListener("error",function(n){return l({loading:!1,error:n.error})}),u.postMessage(n,e),l(C),a.current=u},[t,r]);return en(function(){a.current&&a.current.terminate()}),[c,f]};export{l as useAnimationFrame,g as useAudit,h as useCallbackWithCleanup,w as useCheckInput,y as useCurrent,E as useCurryFunction,A as useDebounce,T as useDidMount,F as useDidUpdate,b as useEffectOnce,q as useEvent,j as useForceUpdate,I as useFullscreen,p as useHandleChangeCheck,W as useHandleChangeFile,H as useHandleChangeNumber,M as useHandleChangeText,S as useIntersectionObserver,x as useInterval,z as useIsMounted,N as useLink,R as useMediaQuery,V as useMutationObserver,X as useNumberInput,Y as useOnClickOutside,G as usePrevious,J as usePromise,K as usePromiseCallback,Q as useResizeObserver,U as useSample,Z as useScript,$ as useTextInput,_ as useThrottle,nn as useTimeout,rn as useTimeoutCallback,tn as useToggle,k as useToggleFullscreen,O as useTriggerUpdate,c as useUpdatedRef,en as useWillUnmount,un as useWindowBeforeUnload,on as useWindowScrollOffset,cn as useWindowSize,ln as useWorkerCallback};
//# sourceMappingURL=index.m.js.map
