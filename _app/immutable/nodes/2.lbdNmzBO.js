import{a as T,t as k}from"../chunks/disclose-version.D8xr734e.js";import{i as P}from"../chunks/legacy.Dd4LprHh.js";import{B as W,m as F,v as y,G as N,H as J,L as K,Y as O,a1 as Q,a2 as $,R as S,w as A,a3 as M,a4 as U,n as V,a5 as Z,D,a6 as j,X as ee,a7 as ae,q as re,C as se,U as te,M as ie,$ as ne,a8 as L,a9 as le,aa as oe,ab as fe,P as ve,ac as z,ad as ue,r as de,p as ce,a as _e,i as I,ae as pe,af as he,a0 as ge,f as me,s as ye,ag as be}from"../chunks/runtime.BJvBPu94.js";import{o as Ee,b as we}from"../chunks/index-client.DfgUDcTI.js";function Ae(r,e){return e}function Re(r,e,a,t){for(var i=[],f=e.length,v=0;v<f;v++)j(e[v].e,i,!0);var p=f>0&&i.length===0&&a!==null;if(p){var c=a.parentNode;ee(c),c.append(a),t.clear(),b(r,e[0].prev,e[f-1].next)}ae(i,()=>{for(var d=0;d<f;d++){var s=e[d];p||(t.delete(s.k),b(r,s.prev,s.next)),re(s.e,!p)}})}function Ie(r,e,a,t,i,f=null){var v=r,p={flags:e,items:new Map,first:null};{var c=r;v=y?N(se(c)):c.appendChild(W())}y&&J();var d=null,s=!1;F(()=>{var u=a(),l=K(u)?u:u==null?[]:O(u),n=l.length;if(s&&n===0)return;s=n===0;let h=!1;if(y){var w=v.data===Q;w!==(n===0)&&(v=$(),N(v),S(!1),h=!0)}if(y){for(var m=null,o,_=0;_<n;_++){if(A.nodeType===8&&A.data===te){v=A,h=!0,S(!1);break}var R=l[_],E=t(R,_);o=X(A,p,m,null,R,E,_,i,e),p.items.set(E,o),m=o}n>0&&N($())}if(!y){var g=ie;Me(l,p,v,i,e,(g.f&M)!==0,t)}f!==null&&(n===0?d?U(d):d=V(()=>f(v)):d!==null&&Z(d,()=>{d=null})),h&&S(!0),a()}),y&&(v=A)}function Me(r,e,a,t,i,f,v){var p=r.length,c=e.items,d=e.first,s=d,u,l=null,n=[],h=[],w,m,o,_;for(_=0;_<p;_+=1){if(w=r[_],m=v(w,_),o=c.get(m),o===void 0){var R=s?s.e.nodes_start:a;l=X(R,e,l,l===null?e.first:l.next,w,m,_,t,i),c.set(m,l),n=[],h=[],s=l.next;continue}if(o.e.f&M&&U(o.e),o!==s){if(u!==void 0&&u.has(o)){if(n.length<h.length){var E=h[0],g;l=E.prev;var H=n[0],x=n[n.length-1];for(g=0;g<n.length;g+=1)Y(n[g],E,a);for(g=0;g<h.length;g+=1)u.delete(h[g]);b(e,H.prev,x.next),b(e,l,H),b(e,x,E),s=E,l=x,_-=1,n=[],h=[]}else u.delete(o),Y(o,s,a),b(e,o.prev,o.next),b(e,o,l===null?e.first:l.next),b(e,l,o),l=o;continue}for(n=[],h=[];s!==null&&s.k!==m;)(f||!(s.e.f&M))&&(u??(u=new Set)).add(s),h.push(s),s=s.next;if(s===null)continue;o=s}n.push(o),l=o,s=o.next}if(s!==null||u!==void 0){for(var C=u===void 0?[]:O(u);s!==null;)(f||!(s.e.f&M))&&C.push(s),s=s.next;var q=C.length;if(q>0){var G=p===0?a:null;Re(e,C,G,c)}}D.first=e.first&&e.first.e,D.last=l&&l.e}function X(r,e,a,t,i,f,v,p,c){var d=(c&oe)!==0,s=(c&fe)===0,u=d?s?ne(i):L(i):i,l=c&le?L(v):v,n={i:l,v:u,k:f,a:null,e:null,prev:a,next:t};try{return n.e=V(()=>p(r,u,l),y),n.e.prev=a&&a.e,n.e.next=t&&t.e,a===null?e.first=n:(a.next=n,a.e.next=n.e),t!==null&&(t.prev=n,t.e.prev=n.e),n}finally{}}function Y(r,e,a){for(var t=r.next?r.next.e.nodes_start:a,i=e?e.e.nodes_start:a,f=r.e.nodes_start;f!==t;){var v=ve(f);i.before(f),f=v}}function b(r,e,a){e===null?r.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Te(r,e,a,t){var i=r.__attributes??(r.__attributes={});y&&(i[e]=r.getAttribute(e)),i[e]!==(i[e]=a)&&("__styles"in r&&(r.__styles={}),a==null?r.removeAttribute(e):typeof a!="string"&&ke(r).includes(e)?r[e]=a:r.setAttribute(e,a))}var B=new Map;function ke(r){var e=B.get(r.nodeName);if(e)return e;B.set(r.nodeName,e=[]);for(var a,t=z(r),i=Element.prototype;i!==t;){a=ue(t);for(var f in a)a[f].set&&e.push(f);t=z(t)}return e}var xe=k('<div class="rain-drop svelte-10ra3zy"></div>'),Ce=k('<div class="rain-container svelte-10ra3zy"></div>');function Ne(r){var e=Ce();Ie(e,4,()=>Array(100),Ae,(a,t)=>{var i=xe();Te(i,"style",`--delay: ${Math.random()*2}s; --left: ${Math.random()*100}%; --duration: ${.5+Math.random()*.5}s`),T(a,i)}),de(e),T(r,e)}var Se=k('<audio src="/tenseisurf/Rain.wav" loop preload="auto" class="svelte-1yzglfe"></audio>');function He(r,e){ce(e,!1);let a=he();Ee(()=>{I(a)&&(pe(a,I(a).volume=.3),I(a).play().catch(i=>{console.log("Audio autoplay failed:",i)}))}),P();var t=Se();we(t,i=>ge(a,i),()=>I(a)),T(r,t),_e()}var $e=k(`<!> <!> <div class="page-layout svelte-1e4cb83"><div class="side-image left svelte-1e4cb83"><img src="/tenseisurf/reimu.png" alt="Reimu Left" class="svelte-1e4cb83"></div> <div class="container svelte-1e4cb83"><div class="content-center svelte-1e4cb83"><h1 class="svelte-1e4cb83">Tensei_Surf</h1> <div class="summary svelte-1e4cb83">Welcome, this is a project that I'm working on in my free time.
        I didn't like how the current Counter Strike Source Surf servers gatekept voting for maps, so I am making my own.
        More work needs to be done, but this is just the beginning. 
        Stay tuned for more updates!</div></div></div> <div class="side-image right svelte-1e4cb83"><img src="/tenseisurf/reimu.png" alt="Reimu Right" class="svelte-1e4cb83"></div></div>`,1);function Be(r){var e=$e(),a=me(e);Ne(a);var t=ye(a,2);He(t,{}),be(2),T(r,e)}export{Be as component};