var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function s(){return t=" ",document.createTextNode(t);var t}let i;function l(t){i=t}const d=[],p=[],$=[],h=[],m=Promise.resolve();let g=!1;function y(t){$.push(t)}let x=!1;const b=new Set;function _(){if(!x){x=!0;do{for(let t=0;t<d.length;t+=1){const n=d[t];l(n),v(n.$$)}for(d.length=0;p.length;)p.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];b.has(n)||(b.add(n),n())}$.length=0}while(d.length);for(;h.length;)h.pop()();g=!1,x=!1,b.clear()}}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(y)}}const w=new Set;function k(t,n){t&&t.i&&(w.delete(t),t.i(n))}function A(t,e,c){const{fragment:u,on_mount:a,on_destroy:f,after_update:s}=t.$$;u&&u.m(e,c),y(()=>{const e=a.map(n).filter(r);f?f.push(...e):o(e),t.$$.on_mount=[]}),s.forEach(y)}function E(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function C(t,n){-1===t.$$.dirty[0]&&(d.push(t),g||(g=!0,m.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function N(n,r,c,u,a,f,s=[-1]){const d=i;l(n);const p=r.props||{},$=n.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:e(),dirty:s};let h=!1;$.ctx=c?c(n,p,(t,e,...o)=>{const r=o.length?o[0]:e;return $.ctx&&a($.ctx[t],$.ctx[t]=r)&&($.bound[t]&&$.bound[t](r),h&&C(n,t)),e}):[],$.update(),h=!0,o($.before_update),$.fragment=!!u&&u($.ctx),r.target&&(r.hydrate?$.fragment&&$.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):$.fragment&&$.fragment.c(),r.intro&&k(n.$$.fragment),A(n,r.target,r.anchor),_()),l(d)}class j{$destroy(){E(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function O(n){let e;return{c(){var t,n,o;e=f("p"),e.textContent="This is a paragraph.",t=e,n="class",null==(o="svelte-1kptiil")?t.removeAttribute(n):t.getAttribute(n)!==o&&t.setAttribute(n,o)},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&a(e)}}}class S extends j{constructor(t){super(),N(this,t,null,O,c,{})}}function T(n){let e,o,r;const c=new S({});return{c(){var t;e=f("h1"),e.textContent=`Hello ${q}!`,o=s(),(t=c.$$.fragment)&&t.c()},m(t,n){u(t,e,n),u(t,o,n),A(c,t,n),r=!0},p:t,i(t){r||(k(c.$$.fragment,t),r=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(w.has(t))return;w.add(t),(void 0).c.push(()=>{w.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}(c.$$.fragment,t),r=!1},d(t){t&&a(e),t&&a(o),E(c,t)}}}const q="World";return new class extends j{constructor(t){super(),N(this,t,null,T,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
