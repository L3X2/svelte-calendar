import{S as s,i as t,s as e,e as a,c as i,a as h,d as l,b as r,f as c,J as d,U as n,O as o}from"./vendor-92032e4e.js";function $(s){let t,e,$,u;return{c(){t=a("div"),e=a("button"),this.h()},l(s){t=i(s,"DIV",{style:!0,class:!0});var a=h(t);e=i(a,"BUTTON",{style:!0,class:!0}),h(e).forEach(l),a.forEach(l),this.h()},h(){r(e,"style",s[2]),r(e,"class","svelte-1caevud"),r(t,"style",s[1]),r(t,"class","svelte-1caevud")},m(a,i){c(a,t,i),d(t,e),$||(u=n(t,"click",s[5]),$=!0)},p(s,[a]){4&a&&r(e,"style",s[2]),2&a&&r(t,"style",s[1])},i:o,o:o,d(s){s&&l(t),$=!1,u()}}}function u(s,t,e){let a,i,{value:h=!1}=t,{width:l="45px"}=t,{height:r="20px"}=t;return s.$$set=s=>{"value"in s&&e(0,h=s.value),"width"in s&&e(3,l=s.width),"height"in s&&e(4,r=s.height)},s.$$.update=()=>{24&s.$$.dirty&&e(1,a=[`width: ${l}`,`height: ${r}`,`border-radius: calc(${r} / 2)`].join(";")),25&s.$$.dirty&&e(2,i=[`width: ${r}`,`height: ${r}`,`transform: translateX(${h?`calc(${l} - ${r})`:"0"})`].join(";"))},[h,a,i,l,r,()=>e(0,h=!h)]}class v extends s{constructor(s){super(),t(this,s,u,$,e,{value:0,width:3,height:4})}}export{v as T};