import{$ as S,A as t,H as n,I as i,J as _,K as b,L as m,M as d,Q as o,U as C,V as s,W as f,_ as y,aa as w,g as k,j as g,ja as T,k as v,ka as L,v as r,w as x,z as h}from"./chunk-G362BYZJ.js";var E=e=>({show:e}),F=()=>["./"],I=()=>["./area"],N=()=>["./all-vehicle"];function V(e,l){if(e&1){let a=b();n(0,"div",7)(1,"ul",8)(2,"li",9)(3,"a",10),o(4,"Schedules"),i()(),n(5,"li",9)(6,"a",10),o(7,"Area"),i()(),n(8,"li",9)(9,"a",10),o(10,"Vehicles"),i()(),n(11,"li",9)(12,"button",11),m("click",function(){g(a);let c=d();return v(c.onLogout())}),o(13,"logout"),i()()()()}if(e&2){let a=d();t("ngClass",f(4,E,a.menuToggle&&a.chkUser=="admin")),r(3),t("routerLink",s(6,F)),r(3),t("routerLink",s(7,I)),r(3),t("routerLink",s(8,N))}}var U=()=>["./add-schedule"],H=()=>["./fare"];function M(e,l){if(e&1){let a=b();n(0,"div",12)(1,"ul",8)(2,"li",9)(3,"a",10),o(4,"View Schedule"),i()(),n(5,"li",9)(6,"a",10),o(7,"Add Schedule"),i()(),n(8,"li",9)(9,"a",10),o(10,"Car fare"),i()(),n(11,"li",9)(12,"button",11),m("click",function(){g(a);let c=d();return v(c.onLogout())}),o(13,"logout"),i()()()()}if(e&2){let a=d();t("ngClass",f(4,E,a.menuToggle&&a.chkUser=="user")),r(3),t("routerLink",s(6,F)),r(3),t("routerLink",s(7,U)),r(3),t("routerLink",s(8,H))}}var q=(()=>{let l=class l{constructor(u){this.router=u,this.menuToggle=!1}ngOnInit(){console.log(this.chkUser)}onLogout(){localStorage.clear(),this.router.navigate(["/"])}};l.\u0275fac=function(c){return new(c||l)(x(T))},l.\u0275cmp=k({type:l,selectors:[["app-header"]],inputs:{chkUser:"chkUser"},standalone:!0,features:[C],decls:7,vars:2,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],[1,"container-fluid"],["src","assets/img/logo.png","alt","","srcset","",1,"logo"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler",3,"click"],[1,"navbar-toggler-icon"],["class","collapse navbar-collapse","id","navbarNav",3,"ngClass",4,"ngIf"],["class","collapse navbar-collapse text-end","id","navbarNav",3,"ngClass",4,"ngIf"],["id","navbarNav",1,"collapse","navbar-collapse",3,"ngClass"],[1,"navbar-nav","ms-auto"],[1,"nav-item"],[1,"nav-link",3,"routerLink"],["type","button",1,"btn","btn-outline-warning",3,"click"],["id","navbarNav",1,"collapse","navbar-collapse","text-end",3,"ngClass"]],template:function(c,p){c&1&&(n(0,"nav",0)(1,"div",1),_(2,"img",2),n(3,"button",3),m("click",function(){return p.menuToggle=!p.menuToggle}),_(4,"span",4),i(),h(5,V,14,9,"div",5)(6,M,14,9,"div",6),i()()),c&2&&(r(5),t("ngIf",p.chkUser=="admin"),r(),t("ngIf",p.chkUser=="user"))},dependencies:[w,y,S,L],styles:[".logo[_ngcontent-%COMP%]{width:100px}.right-nav[_ngcontent-%COMP%]{width:10%;background-color:red;text-align:center}"]});let e=l;return e})();export{q as a};