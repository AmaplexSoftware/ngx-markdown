(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[163],{253:(O,b,o)=>{"use strict";o.d(b,{c:()=>x});var c=o(1591);const u=(0,c.X$)("zoomAnimation",[(0,c.eR)("void => *",[(0,c.oB)({opacity:0,transform:"translateY(32px) scale(0)"}),(0,c.jt)("400ms cubic-bezier(0.35, 0, 0.25, 1)",(0,c.oB)({opacity:1,transform:"translateY(0) scale(1)"}))]),(0,c.eR)("* => void",[(0,c.oB)({opacity:1,transform:"translateY(0)"}),(0,c.jt)("300ms cubic-bezier(0.35, 0, 0.25, 1)",(0,c.oB)({opacity:0,transform:"translateY(32px)"}))])]);var t=o(2223),M=o(4755),n=o(1576),d=o(5829),h=o(4142),g=o(1728),C=o(3630),m=o(6412),A=o(7224),w=o(4480);function i(s,f){if(1&s&&(t.TgZ(0,"li")(1,"a",2),t._uU(2),t.qZA()()),2&s){const r=f.$implicit;t.xp6(1),t.Q6J("fragment",r.id),t.xp6(1),t.Oqu(r.innerHTML)}}let e=(()=>{class s{constructor(r,y){this.elementRef=r,this.zone=y}ngOnChanges(r){r.headings?.currentValue&&this.setScrollSpy()}ngOnDestroy(){this.destroyScrollSpy()}destroyScrollSpy(){this.scrollSpy&&this.scrollSpy.destroy()}setScrollSpy(){this.scrollSpy?this.scrollSpy.setup():this.zone.onStable.pipe((0,A.P)()).subscribe(()=>{const r=this.elementRef.nativeElement;this.scrollSpy=new m(`${r.tagName}.${r.className} a`,{offset:64,reflow:!0})})}}return s.\u0275fac=function(r){return new(r||s)(t.Y36(t.SBq),t.Y36(t.R0b))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-scrollspy-nav"]],inputs:{headings:"headings"},features:[t.TTD],decls:2,vars:1,consts:[[1,"scrollspy-nav"],[4,"ngFor","ngForOf"],["routerLink",".",3,"fragment"]],template:function(r,y){1&r&&(t.TgZ(0,"ul",0),t.YNc(1,i,3,2,"li",1),t.qZA()),2&r&&(t.xp6(1),t.Q6J("ngForOf",y.headings))},dependencies:[M.sg,w.rH],styles:["ul.scrollspy-nav[_ngcontent-%COMP%]{padding:0}ul.scrollspy-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-radius:2px;font-size:14px;font-weight:500;list-style:none;padding:4px 0 4px 16px}ul.scrollspy-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], ul.scrollspy-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:active, ul.scrollspy-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, ul.scrollspy-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{text-decoration:none}ul.scrollspy-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active){border-color:transparent;opacity:.6}"],changeDetection:0}),s})();function a(s,f){if(1&s){const r=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){t.CHM(r);const v=t.oxw();return t.KtG(v.onScrollUp())}),t._UZ(1,"img",10),t.qZA()}2&s&&t.Q6J("@zoomAnimation",void 0)}function l(s,f){if(1&s){const r=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(r);const v=t.oxw();return t.KtG(v.onScrollUp())}),t._UZ(1,"img",10),t.qZA()}2&s&&t.Q6J("@zoomAnimation",void 0)}const p=["*"];let x=(()=>{class s{constructor(){this.showScrollUpButton=!1}onWindowScroll(){this.showScrollUpButton=Math.ceil(window.pageYOffset)>64}onScrollUp(){window.scrollTo(0,0),location.hash=""}}return s.\u0275fac=function(r){return new(r||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-scrollspy-nav-layout"]],hostBindings:function(r,y){1&r&&t.NdJ("scroll",function(){return y.onWindowScroll()},!1,t.Jf7)},inputs:{headings:"headings"},ngContentSelectors:p,decls:14,vars:3,consts:[["fxLayout","row","fxLayoutGap","40px"],["fxFlex","1 1 calc(100% - 220px)"],[1,"footer"],["emoji","","fxLayout","row","fxLayoutAlign.gt-xs","center",1,"footer-text"],[2,"margin","0 .15em"],["class","scrollup-button--fixed","mat-fab","","color","accent","fxHide.gt-sm","",3,"click",4,"ngIf"],["fxLayout","column","fxFlex","1 0 180px","fxFlexAlign","flex-start","fxHide.lt-md","",1,"sticky"],[3,"headings"],["class","scrollup-button","mat-mini-fab","","color","accent",3,"click",4,"ngIf"],["mat-fab","","color","accent","fxHide.gt-sm","",1,"scrollup-button--fixed",3,"click"],["src","assets/icon-chevron-up.svg"],["mat-mini-fab","","color","accent",1,"scrollup-button",3,"click"]],template:function(r,y){1&r&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1),t.Hsn(2),t.TgZ(3,"div",2),t._UZ(4,"mat-divider"),t.TgZ(5,"markdown",3),t._uU(6," Crafted with :heart: by **jfcere** "),t.TgZ(7,"span",4),t._uU(8,"\u2022"),t.qZA(),t._uU(9," Follow on [GitHub](https://github.com/jfcere) "),t.qZA()(),t.YNc(10,a,2,1,"button",5),t.qZA(),t.TgZ(11,"div",6),t._UZ(12,"app-scrollspy-nav",7),t.YNc(13,l,2,1,"button",8),t.qZA()()),2&r&&(t.xp6(10),t.Q6J("ngIf",y.showScrollUpButton),t.xp6(2),t.Q6J("headings",y.headings),t.xp6(1),t.Q6J("ngIf",y.showScrollUpButton))},dependencies:[M.O5,n.xw,n.SQ,n.Wh,n.XD,n.yH,d.b8,h.l,g.nh,g.cs,C.d,e],styles:[".footer[_ngcontent-%COMP%]{margin:32px 0 8px}.footer-text[_ngcontent-%COMP%]{display:block;font-size:13px;padding-top:4px}.sticky[_ngcontent-%COMP%]{position:sticky;top:80px}.scrollup-button[_ngcontent-%COMP%]{margin:14px}.scrollup-button--fixed[_ngcontent-%COMP%]{position:fixed;bottom:16px;right:16px}.scrollup-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:flex}"],data:{animation:[u]},changeDetection:0}),s})()},4820:(O,b,o)=>{"use strict";o.d(b,{U:()=>C});var c=o(4755),u=o(9814),t=o(1728),M=o(3630),n=o(842),d=o(4480),h=o(2223);let g=(()=>{class m{}return m.\u0275fac=function(w){return new(w||m)},m.\u0275mod=h.oAB({type:m}),m.\u0275inj=h.cJS({imports:[c.ez,d.Bz]}),m})(),C=(()=>{class m{}return m.\u0275fac=function(w){return new(w||m)},m.\u0275mod=h.oAB({type:m}),m.\u0275inj=h.cJS({imports:[c.ez,u.o9,n.J,t.ot,M.t,g]}),m})()},1163:(O,b,o)=>{"use strict";o.r(b),o.d(b,{SyntaxHighlightModule:()=>i});var c=o(842),u=o(4820),t=o(1006),M=o(4480),n=o(2223),d=o(4142),h=o(253),g=o(6627),C=o(9353);const A=[{path:"",component:(()=>{class e{constructor(l){this.elementRef=l,this.myValue="print('hello-world')"}ngOnInit(){this.setHeadings()}setHeadings(){const l=[];this.elementRef.nativeElement.querySelectorAll("h2").forEach(p=>l.push(p)),this.headings=l}}return e.\u0275fac=function(l){return new(l||e)(n.Y36(n.SBq))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-syntax-highlight"]],decls:24,vars:8,consts:[[3,"headings"],["id","getting-started"],["id","auto-detect"],[3,"src"],["id","interpolation"],["emoji",""],["id","language-pipe"],[3,"innerHTML"]],template:function(l,p){1&l&&(n.TgZ(0,"app-scrollspy-nav-layout",0)(1,"h1",1),n._uU(2,"Syntax Highlight"),n.qZA(),n.TgZ(3,"section")(4,"h2",2),n._uU(5,"Auto-Detect"),n.qZA(),n.TgZ(6,"markdown"),n._uU(7,"\n      When using the `src` input property to load file remotely, language for syntax highlight will be auto-detected based on the loaded file extension.\n\n      The following example...\n\n      ```html\n      <markdown [src]=\"'app/syntax-highlight/remote/for-loop.js'\"></markdown>\n      ```\n\n      Would render with Javascript syntax highlight based on the `js` file extension.\n    "),n.qZA(),n._UZ(8,"markdown",3),n.qZA(),n.TgZ(9,"section")(10,"h2",4),n._uU(11,"Interpolation"),n.qZA(),n.TgZ(12,"markdown",5),n._uU(13,"\n      > :bulb: Using interpolation requires the uses of `ngPreserveWhitespaces` to keep indentation and spaces untouched during compilation.\n\n      When using [interpolation](https://angular.io/guide/template-syntax#interpolation-), the language for code block must be specified after the first three backticks.\n\n      ````html\n      <markdown ngPreserveWhitespaces>\n        ```typescript\n        export function greetings(name: string): string &#123;\n          return 'Hello ' + name;\n        }\n        ```\n      </markdown>\n      ````\n      ##### _* Characters such as `<, >, {, }` directly written in the HTML template file must be escaped so that the compiler doesn't try to bind it as regular Angular code_.\n\n      Would render with TypeScript syntax highlight based on the specified `typescript` language.\n    "),n.qZA(),n.TgZ(14,"markdown"),n._uU(15,"\n      ```typescript\n      export function greetings(name: string): string {\n        return 'Hello ' + name;\n      }\n      ```\n    "),n.qZA()(),n.TgZ(16,"section")(17,"h2",6),n._uU(18,"Language Pipe"),n.qZA(),n.TgZ(19,"markdown"),n._uU(20,"\n      When using the `markdown` pipe, you can specify the syntax highlight language by chaining the `language` pipe.\n\n      For example, having the python code `print('hello world')` into the `myValue` variable could be parsed specifying the language as follow...\n\n      ````\n      ```html\n      <div [innerHTML]=\"myValue | language : 'python' | markdown\"><div>\n      ```\n      ````\n\n      Would render with Python syntax highlight as specified with the `language` pipe in front of the `markdown` pipe.\n    "),n.qZA(),n._UZ(21,"div",7),n.ALo(22,"markdown"),n.ALo(23,"language"),n.qZA()()),2&l&&(n.Q6J("headings",p.headings),n.xp6(8),n.Q6J("src","app/syntax-highlight/remote/for-loop.js"),n.xp6(13),n.Q6J("innerHTML",n.lcZ(22,3,n.xi3(23,5,p.myValue,"python")),n.oJD))},dependencies:[d.l,h.c,g.A,C.N],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[M.Bz.forChild(A),M.Bz]}),e})(),i=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[c.J.forChild(),u.U,t.m,w]}),e})()},6412:function(O,b){var c,u;u=typeof global<"u"?global:typeof window<"u"?window:this,c=function(){return function(u){"use strict";var t={navClass:"active",contentClass:"active",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0},M=function(i,e,a){if(a.settings.events){var l=new CustomEvent(i,{bubbles:!0,cancelable:!0,detail:a});e.dispatchEvent(l)}},n=function(i){var e=0;if(i.offsetParent)for(;i;)e+=i.offsetTop,i=i.offsetParent;return e>=0?e:0},d=function(i){i&&i.sort(function(e,a){return n(e.content)<n(a.content)?-1:1})},h=function(i,e,a){var x,l=i.getBoundingClientRect(),p="function"==typeof(x=e).offset?parseFloat(x.offset()):parseFloat(x.offset);return a?parseInt(l.bottom,10)<(u.innerHeight||document.documentElement.clientHeight):parseInt(l.top,10)<=p},C=function(i,e){var p,x,a=i[i.length-1];if(p=a,x=e,u.innerHeight+u.pageYOffset>=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)&&h(p.content,x,!0))return a;for(var l=i.length-1;l>=0;l--)if(h(i[l].content,e))return i[l]},m=function(i,e){if(e.nested&&i.parentNode){var a=i.parentNode.closest("li");a&&(a.classList.remove(e.nestedClass),m(a,e))}},A=function(i,e){if(i){var a=i.nav.closest("li");a&&(a.classList.remove(e.navClass),i.content.classList.remove(e.contentClass),m(a,e),M("gumshoeDeactivate",a,{link:i.nav,content:i.content,settings:e}))}},w=function(i,e){if(e.nested){var a=i.parentNode.closest("li");a&&(a.classList.add(e.nestedClass),w(a,e))}};return function(i,e){var a,l,p,x,s,f={setup:function(){a=document.querySelectorAll(i),l=[],Array.prototype.forEach.call(a,function(v){var S=document.getElementById(decodeURIComponent(v.hash.substr(1)));S&&l.push({nav:v,content:S})}),d(l)},detect:function(){var v=C(l,s);v?p&&v.content===p.content||(A(p,s),function(S,H){if(S){var Z=S.nav.closest("li");Z&&(Z.classList.add(H.navClass),S.content.classList.add(H.contentClass),w(Z,H),M("gumshoeActivate",Z,{link:S.nav,content:S.content,settings:H}))}}(v,s),p=v):p&&(A(p,s),p=null)}},r=function(v){x&&u.cancelAnimationFrame(x),x=u.requestAnimationFrame(f.detect)},y=function(v){x&&u.cancelAnimationFrame(x),x=u.requestAnimationFrame(function(){d(l),f.detect()})};return f.destroy=function(){p&&A(p,s),u.removeEventListener("scroll",r,!1),s.reflow&&u.removeEventListener("resize",y,!1),l=null,a=null,p=null,x=null,s=null},s=function(){var v={};return Array.prototype.forEach.call(arguments,function(S){for(var H in S){if(!S.hasOwnProperty(H))return;v[H]=S[H]}}),v}(t,e||{}),f.setup(),f.detect(),u.addEventListener("scroll",r,!1),s.reflow&&u.addEventListener("resize",y,!1),f}}(u)}.apply(b,[]),void 0!==c&&(O.exports=c)},3630:(O,b,o)=>{"use strict";o.d(b,{d:()=>M,t:()=>n});var c=o(2223),u=o(1692),t=o(1217);let M=(()=>{class d{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(g){this._vertical=(0,u.Ig)(g)}get inset(){return this._inset}set inset(g){this._inset=(0,u.Ig)(g)}}return d.\u0275fac=function(g){return new(g||d)},d.\u0275cmp=c.Xpm({type:d,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(g,C){2&g&&(c.uIk("aria-orientation",C.vertical?"vertical":"horizontal"),c.ekj("mat-divider-vertical",C.vertical)("mat-divider-horizontal",!C.vertical)("mat-divider-inset",C.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(g,C){},styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],encapsulation:2,changeDetection:0}),d})(),n=(()=>{class d{}return d.\u0275fac=function(g){return new(g||d)},d.\u0275mod=c.oAB({type:d}),d.\u0275inj=c.cJS({imports:[t.BQ,t.BQ]}),d})()}}]);