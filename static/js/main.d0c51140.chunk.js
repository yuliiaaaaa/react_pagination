(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,c){"use strict";c.r(a);var t=c(4),n=c.n(t),l=c(1);c(9);function s(e,a){const c=[];for(let t=e;t<=a;t+=1)c.push(t);return c}var i=c(2),r=c.n(i),o=c(0);const j=e=>{let{total:a,perPage:c,currentPage:t=1,onPageChange:n}=e;const l=Math.ceil(a/c),i=e=>{e!==t&&n(e)};return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:r()("page-item",{disabled:1===t}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:()=>{t>1&&i(t-1)},children:"\xab"})}),s(1,l).map((e=>Object(o.jsx)("li",{className:r()("page-item",{active:t===e}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:()=>i(e),children:e},e)}))),Object(o.jsx)("li",{className:r()("page-item",{disabled:t===l}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===l,onClick:()=>{t<l&&i(t+1)},children:"\xbb"})})]})},d=s(1,42).map((e=>"Item ".concat(e))),h=()=>{const[e,a]=Object(l.useState)(1),[c,t]=Object(l.useState)(5),n=(e-1)*c,s=n+c,i=s>d.length?d.length:s;return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(e," (items ").concat(n+1," - ").concat(i," of ").concat(d.length,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:e=>{return c=Number(e.target.value),t(c),void a(1);var c},value:c,children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"5",children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:d.length,perPage:c,currentPage:e,onPageChange:a}),Object(o.jsx)("ul",{children:d.slice(n,i).map((e=>Object(o.jsx)("li",{"data-cy":"item",children:e},e)))})]})};n.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))},9:function(e,a,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.d0c51140.chunk.js.map