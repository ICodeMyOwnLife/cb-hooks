import{useRef as n,useLayoutEffect as r,useEffect as t,useCallback as e,useState as u,useReducer as i}from"react";import o from"json2mq";var c=function(t,e){var u=n(t);return r(function(){u.current=t},e),u},l=function(n,r){void 0===r&&(r=[]);var e=c(n);t(function(){var n=requestAnimationFrame(function(n){return null==e.current?void 0:e.current(n)});return function(){return cancelAnimationFrame(n)}},r)},a=function(){return{}},f=function(){return"undefined"!=typeof window&&void 0!==window.document},v=function(){return f()?{x:window.scrollX,y:window.scrollY}:{}},d=function(){return f()?{innerWidth:window.innerWidth,innerHeight:window.innerHeight,outerWidth:window.outerWidth,outerHeight:window.outerHeight}:{}},s=function(n){return function(n){return n instanceof Object&&n.nativeEvent instanceof Event}(n)&&n.persist()},m=function(r){return function(u,i,o){var l=c(u),a=n(r(u,i,o));return t(function(){return a.current=r(function(){return l.current.apply(l,arguments)},i,o),function(){var n;return null==(n=a.current)?void 0:n.cancel()}},[l,o,i]),e(function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.forEach(s),a.current.apply(a,r)},[])}},g=function(n,r){var t,e=null,u=null,i=function(){for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return u=o,null===e&&(e=setTimeout(function(){null!==u&&(t=n.apply(void 0,u),u=null),e=null},r)),t};return i.cancel=function(){null!==e&&clearTimeout(e),e=null,u=null},i},p=m(g),h=function(r){return function(e,i,o,l){var a=u(),f=a[0],v=a[1],d=c(e),s=n(r(e,o,l));return t(function(){return s.current=r(function(){var n=d.current.apply(d,arguments);return v(n),n},o,l),function(){var n;return null==(n=s.current)?void 0:n.cancel()}},[d,l,o]),t(function(){s.current.apply(s,i)},i),f}},w=h(g),y=function(r,t){void 0===t&&(t=[]);var u=c(r),i=n();return e(function(){i.current&&i.current();for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];i.current=null==u.current?void 0:u.current.apply(u,r)},t)},E=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return e(function(n){var t=n.target.checked;return r.forEach(function(n){return null==n?void 0:n(Boolean(t))})},r)},A=function(n){void 0===n&&(n=!1);var r=u(n),t=r[1];return[r[0],t,E(t)]},b=function(r){var t=n(r);return{set:function(n){t.current=n},get:function(){return t.current},is:function(n){return t.current===n}}},T=function(n,r){void 0===r&&(r=null);for(var t=arguments.length,u=new Array(t>2?t-2:0),i=2;i<t;i++)u[i-2]=arguments[i];return e(function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return null==n?void 0:n.apply(r,[].concat(u,e))},[n].concat(u))},F=function(n,r,t){var e,u=void 0===t?{trailing:!0}:t,i=u.leading,o=u.trailing,c=null,l=null,a=function(){for(var t=arguments.length,u=new Array(t),a=0;a<t;a++)u[a]=arguments[a];return c=u,null!==l?clearTimeout(l):i&&(e=n.apply(void 0,c),c=null),l=setTimeout(function(){o&&null!==c&&(e=n.apply(void 0,c),c=null),l=null},r),e};return a.cancel=function(){null!==l&&clearTimeout(l),c=null,l=null},a},L=m(F),q=h(F),O=function(n){return t(n,[])},I=function(n){return O(n)},j=function(r,e){var u=n(!1);t(u.current?r:function(){u.current=!0},e)},M=function(n,r,t){var e;n&&(!t||(e=r.target)instanceof Object&&"matches"in e&&r.target.matches(t))&&n(r)},W=function(r,e,u,i){var o=void 0===i?{}:i,l=o.capture,a=o.once,f=o.passive,v=o.selectors,d=o.usingAnimationFrame,s=o.enabled,m=void 0===s||s,g=c(u),p=n(0);t(function(){if(m){var n=function(n){return n instanceof Function?n():n}(r);if(n){var t=function(n){d?(cancelAnimationFrame(p.current),p.current=requestAnimationFrame(function(){return M(g.current,n,v)})):M(g.current,n,v)},u=Array.isArray(e)?e:[e];return u.forEach(function(r){return n.addEventListener(r,t,{capture:l,once:a,passive:f})}),function(){d&&p.current&&cancelAnimationFrame(p.current),u.forEach(function(r){return n.removeEventListener(r,t,{capture:l})})}}}},[r,l,a,f,v,d,m].concat(e))},k=function(){return i(a,{})},H=function(){return k()[1]},S=function(n,r,t){void 0===r&&(r=null),void 0===t&&(t=null);var u=e(function(r){var t;!document.fullscreenElement||!1!==r&&void 0!==r||document.exitFullscreen(),document.fullscreenElement||!0!==r&&void 0!==r||null==(t=n.current)||null==t.requestFullscreen||t.requestFullscreen()},[n]);return W(document,"fullscreenchange",r),W(document,"fullscreenerror",t),u},x=function(n){var r=u(!1),t=r[0],e=r[1],i=S(n,function(){return e(!!document.fullscreenElement&&document.fullscreenElement===n.current)});return[t,i,T(i,null,!0),T(i,null,!1)]},z=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return e(function(n){var t=n.target.files;return r.forEach(function(n){return null==n?void 0:n(t)})},r)},B=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return e(function(n){var t=n.target.value;return r.forEach(function(n){return null==n?void 0:n(Number(t))})},r)},C=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return e(function(n){var t=n.target.value;return r.forEach(function(n){return null==n?void 0:n(String(t))})},r)},D=function(n,t,e){var u=c(t);r(function(){if(n.current){var r=new IntersectionObserver(function(n,r){return null==u.current?void 0:u.current(n,r)},e);return r.observe(n.current),function(){return r.disconnect()}}},[u,n,e])},N=function(n,r){var e=r.period,u=r.leading,i=r.running,o=r.deps,l=void 0===o?[e,u,i]:o,a=c(n);t(function(){var n;return i&&(u&&(null==a.current||a.current()),n=setInterval(function(){return null==a.current?void 0:a.current()},e)),function(){n&&clearInterval(n)}},l)},P=function(){var r=n(!1);return O(function(){return r.current=!0,function(){r.current=!1}}),e(function(){return r.current},[])},R={loading:!1},V={loading:!0},X=function(n,r){return function(e,i){void 0===i&&(i=R);var o=P(),c=u(i),l=c[0],a=c[1];return t(function(){if(r(e)){var t=e.id&&document.querySelector(n+"#"+e.id)||document.createElement(n);Object.assign(t,e);var u=function(){o()&&a(R)},i=function(n){o()&&a({loading:!1,error:n.error})};return t.addEventListener("load",u,!1),t.addEventListener("error",i,!1),a(V),document.body.appendChild(t),function(){t.removeEventListener("load",u,!1),t.removeEventListener("error",i,!1)}}a(R)},[e,o]),l}},Y=X("link",function(n){var r=n.href;return f()&&!!r&&!document.querySelector('link[href="'+r+'"]')}),G=function(n){return r=n,Object.fromEntries(["matches","media"].map(function(n){return[n,r[n]]}));var r},J=function(n,r){void 0===r&&(r={media:"",matches:!1});var e="string"==typeof n?n:o(n),i=u(f()?function(){return G(window.matchMedia(e))}:r),c=i[0],l=i[1];return t(function(){var n=window.matchMedia(e),r=function(n){l(n)};return l(G(n)),n.addListener(r),function(){return n.removeListener(r)}},[e]),c},K=function(n,t,e){var u=c(t);r(function(){if(n.current){var r=new MutationObserver(function(n,r){return null==u.current?void 0:u.current(n,r)});return r.observe(n.current,e),function(){return r.disconnect()}}},[u,n,e])},Q=function(n){void 0===n&&(n=0);var r=u(n),t=r[1];return[r[0],t,B(t)]},U=function(n,r){return W(document,["mousedown","touchstart"],function(t){r&&n.current&&!n.current.contains(t.target)&&r(t)})},Z=function(r){var e=n();return t(function(){e.current=r}),e.current},$=function(n,r,e){void 0===r&&(r=[]),void 0===e&&(e=R);var i=u(e),o=i[0],c=i[1];return t(function(){var r=!1,t=n();if(t)return c(V),t.then(function(n){r||c({loading:!1,result:n})}).catch(function(n){r||c({loading:!1,error:n})}),function(){r=!0};c(R)},r),o},_=function(n,r,t){void 0===r&&(r=[]),void 0===t&&(t=R);var i=P(),o=u(t),c=o[0],l=o[1],a=b();return[c,e(function(){var r=n.apply(void 0,arguments);a.set(r),r?(l(V),r.then(function(n){a.is(r)&&i()&&l({loading:!1,result:n})}).catch(function(n){a.is(r)&&i()&&l({loading:!1,error:n})})):l(R)},r)]},nn=function(n,t){var e=c(t);r(function(){if(n.current){var r=new ResizeObserver(function(n){return null==e.current?void 0:e.current(n)});return r.observe(n.current),function(){return r.disconnect()}}},[e,n])},rn=function(n,r){var t,e=null,u=setInterval(function(){e&&(t=n.apply(void 0,e),e=null)},r),i=function(){for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return e=r,t};return i.cancel=function(){clearInterval(u),e=null},i},tn=m(rn),en=h(rn),un=X("script",function(n){var r=n.src;return f()&&!!r&&!document.querySelector('script[src="'+r+'"]')}),on=function(){var t=u(),i=t[0],o=t[1],c=n(new Map),l=e(function(n){if("string"==typeof n){var r=n;return function(n){c.current.set(n,r)}}var t=n,e=n.getAttribute("id");e&&c.current.set(t,e)},[]);return r(function(){var n=new IntersectionObserver(function(n){var r,t=n.filter(function(n){return n.isIntersecting});if(t.length){var e=t[0].target,u=null!=(r=c.current.get(e))?r:e.getAttribute("id");"string"==typeof u&&o(u)}},{threshold:1});return c.current.forEach(function(r,t){return n.observe(t)}),function(){return n.disconnect()}},[]),[i,l]},cn=function(n){void 0===n&&(n="");var r=u(n),t=r[1];return[r[0],t,C(t)]},ln=function(n,r,t){var e,u=void 0===t?{leading:!0,trailing:!0}:t,i=u.leading,o=u.trailing,c=null,l=null,a=function(){for(var t=arguments.length,u=new Array(t),a=0;a<t;a++)u[a]=arguments[a];return c=u,null===l&&(i&&(e=n.apply(void 0,c),c=null),l=setTimeout(function(){o&&null!==c&&(e=n.apply(void 0,c),c=null),l=null},r)),e};return a.cancel=function(){null!==l&&clearTimeout(l),c=null,l=null},a},an=m(ln),fn=h(ln),vn=function(n,r,e){void 0===e&&(e=[r]);var u=c(n);t(function(){var n=setTimeout(function(){return null==u.current?void 0:u.current()},r);return function(){return clearTimeout(n)}},e)},dn=function(r,t){var u=c(r),i=n();return I(function(){i.current&&(clearTimeout(i.current.handle),i.current.resolve())}),e(function(){return new Promise(function(n){i.current&&(clearTimeout(i.current.handle),i.current.resolve());var r=setTimeout(function(){null==u.current||u.current(),n()},t);i.current={handle:r,resolve:n}})},[u,t])},sn=function(n){void 0===n&&(n=!1);var r=u(n),t=r[1];return[r[0],e(function(){return t(function(n){return!n})},[]),T(t,null,!0),T(t,null,!1),t]},mn=function(n){return O(function(){return n})},gn=function(n,r){return void 0===r&&(r=!0),W(window,"beforeunload",function(r){return r.preventDefault(),n&&(r.returnValue=n),n},{enabled:r})},pn=function(){var n=u(v),r=n[0],t=n[1];return W(window,"scroll",function(){return t(v())},{capture:!1,passive:!0,usingAnimationFrame:!0}),r},hn=function(){var n=u(d),r=n[0],t=n[1];return W(window,"resize",function(){return t(d())}),r},wn=function(r,t,i){void 0===i&&(i=R);var o=u(i),c=o[0],l=o[1],a=n(),f=e(function(n,e){a.current&&a.current.terminate();var u=new Worker(r,t);u.addEventListener("message",function(n){return l({loading:!1,result:n.data})}),u.addEventListener("error",function(n){return l({loading:!1,error:n.error})}),u.postMessage(n,e),l(V),a.current=u},[t,r]);return mn(function(){a.current&&a.current.terminate()}),[c,f]};export{l as useAnimationFrame,p as useAudit,w as useAuditValue,y as useCallbackWithCleanup,A as useCheckInput,b as useCurrent,T as useCurryFunction,L as useDebounce,q as useDebounceValue,I as useDidMount,j as useDidUpdate,O as useEffectOnce,W as useEvent,H as useForceUpdate,x as useFullscreen,E as useHandleChangeCheck,z as useHandleChangeFile,B as useHandleChangeNumber,C as useHandleChangeText,D as useIntersectionObserver,N as useInterval,P as useIsMounted,Y as useLink,J as useMediaQuery,K as useMutationObserver,Q as useNumberInput,U as useOnClickOutside,Z as usePrevious,$ as usePromise,_ as usePromiseCallback,nn as useResizeObserver,tn as useSample,en as useSampleValue,un as useScript,on as useScrollSpy,cn as useTextInput,an as useThrottle,fn as useThrottleValue,vn as useTimeout,dn as useTimeoutCallback,sn as useToggle,S as useToggleFullscreen,k as useTriggerUpdate,c as useUpdatedRef,mn as useWillUnmount,gn as useWindowBeforeUnload,pn as useWindowScrollOffset,hn as useWindowSize,wn as useWorkerCallback};
//# sourceMappingURL=index.modern.js.map
