import{useRef as n,useLayoutEffect as r,useEffect as t,useReducer as e,useCallback as u,useState as o}from"react";import i from"json2mq";var c=function(t,e){var u=n(t);return r(function(){u.current=t},e),u},a=function(n,r){void 0===r&&(r=[]);var e=c(n);t(function(){var n=requestAnimationFrame(function(n){return null==e.current?void 0:e.current(n)});return function(){return cancelAnimationFrame(n)}},r)},l=function(n,r){switch(r.type){case"append":return[].concat(n,[r.payload]);case"prepend":return[r.payload].concat(n);case"filter":return n.filter(r.payload);default:return n}},f=function(n){void 0===n&&(n=[]);var r=e(l,n),t=r[1];return[r[0],u(function(n){return t({type:"append",payload:n})},[t]),u(function(n){return t({type:"prepend",payload:n})},[t]),u(function(n){return t({type:"filter",payload:n})},[t])]},v=function(){return{}},d=function(){return"undefined"!=typeof window&&void 0!==window.document},s=function(){return d()?{x:window.scrollX,y:window.scrollY}:{}},m=function(){return d()?{innerWidth:window.innerWidth,innerHeight:window.innerHeight,outerWidth:window.outerWidth,outerHeight:window.outerHeight}:{}},g=function(n){return function(n){return n instanceof Object&&n.nativeEvent instanceof Event}(n)&&n.persist()},p=function(r){return function(e,o,i){var a=c(e),l=n(r(e,o,i));return t(function(){return l.current=r(function(){return a.current.apply(a,arguments)},o,i),function(){var n;return null==(n=l.current)?void 0:n.cancel()}},[a,i,o]),u(function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.forEach(g),l.current.apply(l,r)},[])}},y=function(n,r){var t,e=null,u=null,o=function(){for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return u=i,null===e&&(e=setTimeout(function(){null!==u&&(t=n.apply(void 0,u),u=null),e=null},r)),t};return o.cancel=function(){null!==e&&clearTimeout(e),e=null,u=null},o},h=p(y),w=function(r){return function(e,u,i,a){var l=o(),f=l[0],v=l[1],d=c(e),s=n(r(e,i,a));return t(function(){return s.current=r(function(){var n=d.current.apply(d,arguments);return v(n),n},i,a),function(){var n;return null==(n=s.current)?void 0:n.cancel()}},[d,a,i]),t(function(){s.current.apply(s,u)},u),f}},b=w(y),E=function(r,t){void 0===t&&(t=[]);var e=c(r),o=n();return u(function(){o.current&&o.current();for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];o.current=null==e.current?void 0:e.current.apply(e,r)},t)},A=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return u(function(n){var t=n.target.checked;return r.forEach(function(n){return null==n?void 0:n(Boolean(t))})},r)},S=function(n){void 0===n&&(n=!1);var r=o(n),t=r[1];return[r[0],t,A(t)]},I=function(r){var t=n(r);return{set:function(n){t.current=n},get:function(){return t.current},is:function(n){return t.current===n}}},T=function(n,r){void 0===r&&(r=null);for(var t=arguments.length,e=new Array(t>2?t-2:0),o=2;o<t;o++)e[o-2]=arguments[o];return u(function(){for(var t=arguments.length,u=new Array(t),o=0;o<t;o++)u[o]=arguments[o];return null==n?void 0:n.apply(r,[].concat(e,u))},[n].concat(e))},L=function(n,r,t){var e,u=void 0===t?{trailing:!0}:t,o=u.leading,i=u.trailing,c=null,a=null,l=function(){for(var t=arguments.length,u=new Array(t),l=0;l<t;l++)u[l]=arguments[l];return c=u,null!==a?clearTimeout(a):o&&(e=n.apply(void 0,c),c=null),a=setTimeout(function(){i&&null!==c&&(e=n.apply(void 0,c),c=null),a=null},r),e};return l.cancel=function(){null!==a&&clearTimeout(a),c=null,a=null},l},F=p(L),O=w(L),j=function(n){return t(n,[])},q=function(n){return j(n)},M=function(r,e){var u=n(!1);t(u.current?r:function(){u.current=!0},e)},k=function(n,r,t){var e;n&&(!t||(e=r.target)instanceof Object&&"matches"in e&&r.target.matches(t))&&n(r)},H=function(r,e,u,o){var i=void 0===o?{}:o,a=i.capture,l=i.once,f=i.passive,v=i.selectors,d=i.usingAnimationFrame,s=i.enabled,m=void 0===s||s,g=c(u),p=n(0);t(function(){if(m){var n=function(n){return n instanceof Function?n():n}(r);if(n){var t=function(n){d?(cancelAnimationFrame(p.current),p.current=requestAnimationFrame(function(){return k(g.current,n,v)})):k(g.current,n,v)},u=Array.isArray(e)?e:[e];return u.forEach(function(r){return n.addEventListener(r,t,{capture:a,once:l,passive:f})}),function(){d&&p.current&&cancelAnimationFrame(p.current),u.forEach(function(r){return n.removeEventListener(r,t,{capture:a})})}}}},[r,a,l,f,v,d,m].concat(e))},P=function(){return e(v,{})},W=function(){return P()[1]},x=function(n,r,t){void 0===r&&(r=null),void 0===t&&(t=null);var e=u(function(r){var t;!document.fullscreenElement||!1!==r&&void 0!==r||document.exitFullscreen(),document.fullscreenElement||!0!==r&&void 0!==r||null==(t=n.current)||null==t.requestFullscreen||t.requestFullscreen()},[n]);return H(document,"fullscreenchange",r),H(document,"fullscreenerror",t),e},z=function(n){var r=o(!1),t=r[0],e=r[1],u=x(n,function(){return e(!!document.fullscreenElement&&document.fullscreenElement===n.current)});return[t,u,T(u,null,!0),T(u,null,!1)]},B=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return u(function(n){var t=n.target.files;return r.forEach(function(n){return null==n?void 0:n(t)})},r)},C=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return u(function(n){var t=n.target.value;return r.forEach(function(n){return null==n?void 0:n(Number(t))})},r)},R=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return u(function(n){var t=n.target.value;return r.forEach(function(n){return null==n?void 0:n(String(t))})},r)};function D(n,r){try{var t=n()}catch(n){return r(n)}return t&&t.then?t.then(void 0,r):t}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var N=function(n,t,e,u){void 0===u&&(u=[]);var o=c(t);r(function(){var r=n();if(r&&r.length){var t=new IntersectionObserver(function(n,r){return null==o.current?void 0:o.current(n,r)},e);return r.forEach(function(n){return t.observe(n)}),function(){return t.disconnect()}}},u)},U=function(n){return n instanceof Object},V=function(r,t){var e=n(!1),u="boolean"==typeof(arguments.length<=2?void 0:arguments[2])?arguments.length<=2?void 0:arguments[2]:void 0,o=U(arguments.length<=2?void 0:arguments[2])?arguments.length<=2?void 0:arguments[2]:U(arguments.length<=3?void 0:arguments[3])?arguments.length<=3?void 0:arguments[3]:void 0;N(function(){return r.current&&[r.current]},function(n){try{var r=function(){e.current=!1};if(u||e.current||n.every(function(n){return!n.isIntersecting}))return Promise.resolve();e.current=!0;var o=D(function(){return Promise.resolve(Promise.resolve(t())).then(function(){})},function(){});return Promise.resolve(o&&o.then?o.then(r):r())}catch(n){return Promise.reject(n)}},o)},X=function(n,r,t){return N(function(){return n.current&&[n.current]},r,t,[t])},Y=function(n,r){var e=r.period,u=r.leading,o=r.running,i=r.deps,a=void 0===i?[e,u,o]:i,l=c(n);t(function(){var n;return o&&(u&&(null==l.current||l.current()),n=setInterval(function(){return null==l.current?void 0:l.current()},e)),function(){n&&clearInterval(n)}},a)},G=function(){var r=n(!1);return j(function(){return r.current=!0,function(){r.current=!1}}),u(function(){return r.current},[])};function J(n,r){if(null==n)return{};var t,e,u={},o=Object.keys(n);for(e=0;e<o.length;e++)r.indexOf(t=o[e])>=0||(u[t]=n[t]);return u}var K=function(n){return n.dataset.src},Q=function(r){void 0===r&&(r={});var t=r.getSrc,e=void 0===t?K:t,o=J(r,["getSrc"]),i=n(new Map),c=u(function(n){if("string"==typeof n){var r=n;return function(n){i.current.set(n,r)}}if(n instanceof HTMLImageElement){var t=n,u=e(t);u&&i.current.set(t,u)}},[e]);return N(function(){return Array.from(i.current.keys())},function(n,r){return n.forEach(function(n){var t=n.target;if(n.isIntersecting&&t instanceof HTMLImageElement){var u=i.current.get(t)||e(t);u&&(t.src=u),r.unobserve(t)}})},o),c},Z={loading:!1},$={loading:!0},_=function(n,r){return function(e,u){void 0===u&&(u=Z);var i=G(),c=o(u),a=c[0],l=c[1];return t(function(){if(r(e)){var t=e.id&&document.querySelector(n+"#"+e.id)||document.createElement(n);Object.assign(t,e);var u=function(){i()&&l(Z)},o=function(n){i()&&l({loading:!1,error:n.error})};return t.addEventListener("load",u,!1),t.addEventListener("error",o,!1),l($),document.body.appendChild(t),function(){t.removeEventListener("load",u,!1),t.removeEventListener("error",o,!1)}}l(Z)},[e,i]),a}},nn=_("link",function(n){var r=n.href;return d()&&!!r&&!document.querySelector('link[href="'+r+'"]')}),rn=function(n){return r=n,Object.fromEntries(["matches","media"].map(function(n){return[n,r[n]]}));var r},tn=function(n,r){void 0===r&&(r={media:"",matches:!1});var e="string"==typeof n?n:i(n),u=o(d()?function(){return rn(window.matchMedia(e))}:r),c=u[0],a=u[1];return t(function(){var n=window.matchMedia(e),r=function(n){a(n)};return a(rn(n)),n.addListener(r),function(){return n.removeListener(r)}},[e]),c},en=function(n,t,e){var u=c(t);r(function(){if(n.current){var r=new MutationObserver(function(n,r){return null==u.current?void 0:u.current(n,r)});return r.observe(n.current,e),function(){return r.disconnect()}}},[u,n,e])},un=function(n){void 0===n&&(n=0);var r=o(n),t=r[1];return[r[0],t,C(t)]},on=function(n,r){return H(document,["mousedown","touchstart"],function(t){r&&n.current&&!n.current.contains(t.target)&&r(t)})},cn=function(n){return H(document,"visibilitychange",function(){return null==n?void 0:n(document.visibilityState)})},an=function(){var n=o(document.visibilityState),r=n[0];return cn(n[1]),r},ln=function(r){var e=n();return t(function(){e.current=r}),e.current},fn=function(n,r,e){void 0===r&&(r=[]),void 0===e&&(e=Z);var u=o(e),i=u[0],c=u[1];return t(function(){var r=!1,t=n();if(t)return c($),t.then(function(n){r||c({loading:!1,result:n})}).catch(function(n){r||c({loading:!1,error:n})}),function(){r=!0};c(Z)},r),i},vn=function(n,r,t){void 0===r&&(r=[]),void 0===t&&(t=Z);var e=G(),i=o(t),c=i[0],a=i[1],l=I();return[c,u(function(){var r=n.apply(void 0,arguments);l.set(r),r?(a($),r.then(function(n){l.is(r)&&e()&&a({loading:!1,result:n})}).catch(function(n){l.is(r)&&e()&&a({loading:!1,error:n})})):a(Z)},r)]},dn=function(n,t){var e=c(t);r(function(){if(n.current){var r=new ResizeObserver(function(n){return null==e.current?void 0:e.current(n)});return r.observe(n.current),function(){return r.disconnect()}}},[e,n])},sn=function(n,r){var t,e=null,u=setInterval(function(){e&&(t=n.apply(void 0,e),e=null)},r),o=function(){for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return e=r,t};return o.cancel=function(){clearInterval(u),e=null},o},mn=p(sn),gn=w(sn),pn=_("script",function(n){var r=n.src;return d()&&!!r&&!document.querySelector('script[src="'+r+'"]')}),yn=function(n){return null==n?void 0:n.getAttribute("id")},hn=function(r){void 0===r&&(r={threshold:1});var t=r.getId,e=void 0===t?yn:t,i=J(r,["getId"]),c=o(),a=c[0],l=c[1],f=n(new Map),v=n(new Set),d=u(function(n){if("string"==typeof n){var r=n;return function(n){f.current.set(n,r)}}if(n instanceof Element){var t=n,u=e(t);u&&f.current.set(t,u)}},[e]);return N(function(){return Array.from(f.current.keys())},function(n){if(n.forEach(function(n){var r=n.target;n.isIntersecting?v.current.add(r):v.current.delete(r)}),v.current.size){var r=Array.from(v.current).reduce(function(n,r){return n.getBoundingClientRect().top<r.getBoundingClientRect().top?n:r}),t=f.current.get(r)||e(r);"string"==typeof t&&l(t)}},i),[a,d]},wn=function(n){void 0===n&&(n="");var r=o(n),t=r[1];return[r[0],t,R(t)]},bn=function(n,r,t){var e,u=void 0===t?{leading:!0,trailing:!0}:t,o=u.leading,i=u.trailing,c=null,a=null,l=function(){for(var t=arguments.length,u=new Array(t),l=0;l<t;l++)u[l]=arguments[l];return c=u,null===a&&(o&&(e=n.apply(void 0,c),c=null),a=setTimeout(function(){i&&null!==c&&(e=n.apply(void 0,c),c=null),a=null},r)),e};return l.cancel=function(){null!==a&&clearTimeout(a),c=null,a=null},l},En=p(bn),An=w(bn),Sn=function(n,r,e){void 0===e&&(e=[r]);var u=c(n);t(function(){var n=setTimeout(function(){return null==u.current?void 0:u.current()},r);return function(){return clearTimeout(n)}},e)},In=function(r,t){var e=c(r),o=n();return q(function(){o.current&&(clearTimeout(o.current.handle),o.current.resolve())}),u(function(){return new Promise(function(n){o.current&&(clearTimeout(o.current.handle),o.current.resolve());var r=setTimeout(function(){null==e.current||e.current(),n()},t);o.current={handle:r,resolve:n}})},[e,t])},Tn=function(n){return j(function(){return n})},Ln=function(r,e){var u=n(document.title);t(function(){document.title=r},[r]),Tn(function(){(null==e?void 0:e.restoreOnUnmount)&&(document.title=u.current)})},Fn=function(n){void 0===n&&(n=!1);var r=o(n),t=r[1];return[r[0],u(function(){return t(function(n){return!n})},[]),T(t,null,!0),T(t,null,!1),t]},On=function(n,r){return void 0===r&&(r=!0),H(window,"beforeunload",function(r){return r.preventDefault(),n&&(r.returnValue=n),n},{enabled:r})},jn=function(){var n=o(s),r=n[0],t=n[1];return H(window,"scroll",function(){return t(s())},{capture:!1,passive:!0,usingAnimationFrame:!0}),r},qn=function(){var n=o(m),r=n[0],t=n[1];return H(window,"resize",function(){return t(m())}),r},Mn=function(r,t,e){void 0===e&&(e=Z);var i=o(e),c=i[0],a=i[1],l=n(),f=u(function(n,e){l.current&&l.current.terminate();var u=new Worker(r,t);u.addEventListener("message",function(n){return a({loading:!1,result:n.data})}),u.addEventListener("error",function(n){return a({loading:!1,error:n.error})}),u.postMessage(n,e),a($),l.current=u},[t,r]);return Tn(function(){l.current&&l.current.terminate()}),[c,f]};export{a as useAnimationFrame,f as useArray,h as useAudit,b as useAuditValue,E as useCallbackWithCleanup,S as useCheckInput,I as useCurrent,T as useCurryFunction,F as useDebounce,O as useDebounceValue,q as useDidMount,M as useDidUpdate,j as useEffectOnce,H as useEvent,W as useForceUpdate,z as useFullscreen,A as useHandleChangeCheck,B as useHandleChangeFile,C as useHandleChangeNumber,R as useHandleChangeText,V as useInfiniteScroll,X as useIntersectionObserver,N as useIntersectionObserverEffect,Y as useInterval,G as useIsMounted,Q as useLazyLoad,nn as useLink,tn as useMediaQuery,en as useMutationObserver,un as useNumberInput,on as useOnClickOutside,cn as usePageVisibility,an as usePageVisibilityState,ln as usePrevious,fn as usePromise,vn as usePromiseCallback,dn as useResizeObserver,mn as useSample,gn as useSampleValue,pn as useScript,hn as useScrollSpy,wn as useTextInput,En as useThrottle,An as useThrottleValue,Sn as useTimeout,In as useTimeoutCallback,Ln as useTitle,Fn as useToggle,x as useToggleFullscreen,P as useTriggerUpdate,c as useUpdatedRef,Tn as useWillUnmount,On as useWindowBeforeUnload,jn as useWindowScrollOffset,qn as useWindowSize,Mn as useWorkerCallback};
//# sourceMappingURL=index.modern.js.map
