"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[100],{100:(T,d,e)=>{e.r(d),e.d(d,{PluginsModule:()=>C});var s=e(4006),u=e(4144),c=e(2031),p=e(2268),h=e(1950),b=e(4820),f=e(1006),g=e(7023),x=e(9601),n=e(4650),k=e(4142),w=e(9549),Z=e(253),m=e(1576);function v(o,a){if(1&o){const i=n.EpF();n.TgZ(0,"button",28),n.NdJ("click",function(){n.CHM(i);const r=n.oxw();return n.KtG(r.onCopyToClipboard())}),n.O4$(),n.TgZ(1,"svg",29),n._UZ(2,"path",30),n.qZA()()}}const y=[{path:"",component:(()=>{class o{constructor(i,t){this.elementRef=i,this.snackbar=t,this.clipboardButton=x.K,this.emojiMarkdown="# I :heart: ngx-markdown",this.katexMarkdown="#### `katex` directive example\n\n```latex\nf(x) = \\int_{-\\infty}^\\infty \\hat f(\\xi) e^{2 \\pi i \\xi x} d\\xi\n```\n\n$f(x) = \\int_{-\\infty}^\\infty \\hat f(\\xi) e^{2 \\pi i \\xi x} d\\xi$",this.mermaidMarkdown="```mermaid\ngraph TD;\n  A--\x3eB;\n  A--\x3eC;\n  B--\x3eD;\n  C--\x3eD;\n```",this.mermaidOptions={fontFamily:"inherit",theme:p.lS.Theme.Dark}}ngOnInit(){this.setHeadings()}onCopyToClipboard(){this.snackbar.open("Copied to clipboard via ng-template!",void 0,{duration:3e3,horizontalPosition:"right",verticalPosition:"bottom"})}setHeadings(){const i=[];this.elementRef.nativeElement.querySelectorAll("h2").forEach(t=>i.push(t)),this.headings=i}}return o.\u0275fac=function(i){return new(i||o)(n.Y36(n.SBq),n.Y36(c.ux))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-plugins"]],features:[n._Bn([{provide:p.FY,useValue:{}}])],decls:135,vars:34,consts:[[3,"headings"],["id","emoji"],[3,"src"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutGap","16px"],["appearance","fill","color","accent","fxFlex.gt-sm","calc(50% - 8px)"],["matInput","",3,"ngModel","ngModelChange"],["emoji","","fxFlex.gt-sm","calc(50% - 8px)",3,"data"],["emoji",""],["id","line-numbers"],["lineNumbers",""],["lineNumbers","",3,"start"],["id","line-highlight"],["lineHighlight","",3,"line","lineOffset"],["id","command-line"],["commandLine","",3,"user","host","src"],["commandLine","",3,"user","host","output","src"],["commandLine","",3,"prompt","output","src"],["commandLine","",3,"prompt","filterOutput","src"],["id","katex"],["katex","","fxFlex.gt-sm","calc(50% - 8px)",3,"data"],["id","mermaid"],["mermaid","","fxFlex.gt-sm","calc(50% - 8px)",3,"data","mermaidOptions"],["id","clipboard"],["clipboard",""],["emoji","","clipboard","",1,"btn-clipboard-default"],["clipboard","",3,"clipboardButtonComponent"],["buttonTemplate",""],["clipboard","",3,"clipboardButtonTemplate"],[1,"btn-clipboard",3,"click"],["viewBox","0 0 24 24",2,"width","16px","height","16px"],["fill","#fff","d","M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7Z"]],template:function(i,t){if(1&i&&(n.TgZ(0,"app-scrollspy-nav-layout",0)(1,"h1"),n._uU(2,"Plugins"),n.qZA(),n.TgZ(3,"section")(4,"h2",1),n._uU(5,"Emoji plugin"),n.qZA(),n.TgZ(6,"markdown"),n._uU(7,"\n      #### Emoji-Toolkit file to include\n      ```javascript\n      node_modules/emoji-toolkit/lib/js/joypixels.min.js\n      ```\n      #### Directive\n      `emoji` - activate emoji plugin\n      ### Example\n    "),n.qZA(),n.TgZ(8,"markdown"),n._uU(9," Using `emoji` input property on `markdown` component, directive or pipe allows you to convert shortnames to native unicode emojis. "),n.qZA(),n._UZ(10,"markdown",2),n.TgZ(11,"markdown"),n._uU(12," The example below illustrate `emoji` directive in action. "),n.qZA(),n.TgZ(13,"div",3)(14,"mat-form-field",4)(15,"textarea",5),n.NdJ("ngModelChange",function(l){return t.emojiMarkdown=l}),n.qZA()(),n._UZ(16,"markdown",6),n.qZA(),n.TgZ(17,"markdown",7),n._uU(18," > :blue_book: You can refer to this [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md) for a complete list of _shortnames_. "),n.qZA()(),n.TgZ(19,"section")(20,"h2",8),n._uU(21,"Line Numbers plugin"),n.qZA(),n.TgZ(22,"markdown"),n._uU(23,"\n      #### Prism files to include\n      ```javascript\n      node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css\n      node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js\n      ```\n      #### Directive\n      `lineNumbers` - activate line numbers plugin\n      #### Attributes\n      `start` - offset number for the first display line\n      ### Example\n    "),n.qZA(),n.TgZ(24,"markdown"),n._uU(25," Using `lineNumbers` input property on `markdown` component, directive or pipe allows you to add line number at the beginning of each lines of code block. "),n.qZA(),n._UZ(26,"markdown",2),n.TgZ(27,"markdown"),n._uU(28," The example below uses `lineNumbers` directive which uses default line offset of 1. "),n.qZA(),n.TgZ(29,"markdown",9),n._uU(30,"\n      ```javascript\n      var result = square(2);\n\n      function square(number) {\n        return number * number;\n      }\n      ```\n    "),n.qZA(),n.TgZ(31,"markdown"),n._uU(32," Optionally you can use `start` to specify the offset number for the first display line. "),n.qZA(),n.TgZ(33,"markdown"),n._uU(34," In the example below line offset is set to 5 using `start` input property. "),n.qZA(),n.TgZ(35,"markdown",10),n._uU(36,"\n      ```javascript\n      var result = root(2);\n\n      function root(x, n) {\n        try {\n          var negate = n % 2 == 1 && x < 0;\n          if (negate)\n            x = -x;\n          var possible = Math.pow(x, 1 / n);\n          n = Math.pow(possible, n);\n          if (Math.abs(x - n) < 1 && (x > 0 == n > 0))\n            return negate ? -possible : possible;\n        } catch (e) { }\n      }\n      ```\n    "),n.qZA()(),n.TgZ(37,"section")(38,"h2",11),n._uU(39,"Line Highlight plugin"),n.qZA(),n.TgZ(40,"markdown"),n._uU(41,"\n      #### Prism files to include\n      ```javascript\n      node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css\n      node_modules/prismjs/plugins/line-highlight/prism-line-highlight.js\n      ```\n      #### Directive\n      `lineHighlight` - activate line highlight plugin\n      #### Attributes\n      `line` - lines to highlight (i.e.: 6, 11-15)"),n._UZ(42,"br"),n._uU(43,"\n      `lineOffset` - starting offset for line numbers\n      ### Example\n    "),n.qZA(),n.TgZ(44,"markdown"),n._uU(45,"\n      You can highlight different lines by adding `lineHighlight` directive on the `markdown` component/directive.\n\n      Use `line` input property to specify the line(s) to highlight and optionally there is a `lineOffset` property to specify the starting line of code your snippet represents.\n    "),n.qZA(),n._UZ(46,"markdown",2),n.TgZ(47,"markdown"),n._uU(48," In the example below `line` 6 and 10 to 16 are highlight using a `lineOffset` of 5. "),n.qZA(),n.TgZ(49,"markdown",12),n._uU(50,"\n      ```javascript\n      var result = root(2);\n\n      function root(x, n) {\n        try {\n          var negate = n % 2 == 1 && x < 0;\n          if (negate)\n            x = -x;\n          var possible = Math.pow(x, 1 / n);\n          n = Math.pow(possible, n);\n          if (Math.abs(x - n) < 1 && (x > 0 == n > 0))\n            return negate ? -possible : possible;\n        } catch (e) { }\n      }\n      ```\n    "),n.qZA()(),n.TgZ(51,"section")(52,"h2",13),n._uU(53,"Command Line plugin"),n.qZA(),n.TgZ(54,"markdown",7),n._uU(55,"\n      #### Prism file(s) to include\n      ```javascript\n      node_modules/prismjs/plugins/command-line/prism-command-line.css\n      node_modules/prismjs/plugins/command-line/prism-command-line.min.js\n      ```\n      #### Directive\n      `commandLine` - activate command-line display\n      #### Attributes\n      `host` - host name"),n._UZ(56,"br"),n._uU(57,"\n      `output` - lines to be presented as output (optional)"),n._UZ(58,"br"),n._uU(59,"\n      `filterOutput` - prefix to automatically present lines as output (optional)"),n._UZ(60,"br"),n._uU(61,"\n      `prompt` - data prompt"),n._UZ(62,"br"),n._uU(63,"\n      `user` - user name"),n._UZ(64,"br"),n._uU(65,"\n      ### Example\n    "),n.qZA(),n.TgZ(66,"markdown"),n._uU(67,"\n      Root user without output\n\n      ```html\n      <markdown\n        commandLine\n        [user]=\"'root'\"\n        [host]=\"'localhost'\"\n        [src]=\"'path/to/file.bash'\">\n      </markdown>\n      ```\n    "),n.qZA(),n._UZ(68,"markdown",14),n.TgZ(69,"markdown"),n._uU(70,"\n      Non-Root User With Output\n\n      ```html\n      <markdown\n        commandLine\n        [user]=\"'chris'\"\n        [host]=\"'remotehost'\"\n        [output]=\"'2, 4-8'\"\n        [src]=\"'path/to/file.bash'\">\n      </markdown>\n      ```\n    "),n.qZA(),n._UZ(71,"markdown",15),n.TgZ(72,"markdown"),n._uU(73,"\n      Windows PowerShell With Output\n\n      ```html\n      <markdown\n        commandLine\n        [prompt]=\"'PS C:\\Users\\Chris>'\"\n        [output]=\"'2-19'\"\n        [src]=\"'path/to/file.bash'\">\n      </markdown>\n      ```\n    "),n.qZA(),n._UZ(74,"markdown",16),n.TgZ(75,"markdown"),n._uU(76,"\n      Windows PowerShell With Filter Output\n\n      ```html\n      <markdown\n        commandLine\n        [prompt]=\"'PS C:\\Users\\Chris>'\"\n        [filterOutput]=\"'(out)'\">\n        ```powershell\n        Get-Date\n        (out)\n        (out)Sunday, November 7, 2021 8:19:21 PM\n        (out)\n        `\u200b``\n      </markdown>\n      ```\n    "),n.qZA(),n._UZ(77,"markdown",17),n.qZA(),n.TgZ(78,"section")(79,"h2",18),n._uU(80,"KaTeX plugin"),n.qZA(),n.TgZ(81,"markdown"),n._uU(82,"\n      #### KaTeX files to include\n      ```javascript\n      node_modules/katex/dist/katex.min.css\n      node_modules/katex/dist/katex.min.js\n      node_modules/katex/dist/contrib/auto-render.min.js\n      ```\n      #### Directive\n      `katex` - activate KaTeX plugin\n      #### Attributes\n      `katexOptions` - combine [KaTeX options](https://katex.org/docs/options.html) and [Auto-Renderer options](https://katex.org/docs/autorender.html#api)"),n._UZ(83,"br"),n._uU(84,"\n      ### Example\n    "),n.qZA(),n.TgZ(85,"markdown"),n._uU(86," You can render KaTex expression by adding `katex` directive on the `markdown` component/directive. "),n.qZA(),n._UZ(87,"markdown",2),n.TgZ(88,"markdown"),n._uU(89," The example below illustrate `katex` directive in action. "),n.qZA(),n.TgZ(90,"div",3)(91,"mat-form-field",4)(92,"textarea",5),n.NdJ("ngModelChange",function(l){return t.katexMarkdown=l}),n.qZA()(),n._UZ(93,"markdown",19),n.qZA(),n.TgZ(94,"markdown"),n._uU(95,"\n      Optionally, you can specify both [KaTeX options](https://katex.org/docs/options.html) and [Auto-Renderer options](https://katex.org/docs/autorender.html#api) using `katexOptions` property.\n\n      **example.component.ts**\n      ```typescript\n      import { KatexOptions } from 'ngx-markdown';\n\n      public options: KatexOptions = {\n        displayMode: true,\n        throwOnError: false,\n        errorColor: '#cc0000',\n        delimiters: [...],\n        ...\n      };\n      ```\n\n      **example.component.html**\n    "),n.qZA(),n._UZ(96,"markdown",2),n.qZA(),n.TgZ(97,"section")(98,"h2",20),n._uU(99,"Mermaid plugin"),n.qZA(),n.TgZ(100,"markdown"),n._uU(101,"\n      #### Mermaid file to include\n      ```javascript\n      node_modules/mermaid/dist/mermaid.min.js\n      ```\n      #### Directive\n      `mermaid` - activate mermaid plugin\n      #### Attributes\n      `mermaidOptions` - mermaid [configuration options](https://mermaid-js.github.io/mermaid/#/Setup?id=configuration)"),n._UZ(102,"br"),n._uU(103,"\n      ### Example\n    "),n.qZA(),n.TgZ(104,"markdown"),n._uU(105," Using `mermaid` input property on `markdown` component, directive or pipe allows you to use [mermaid](https://mermaid-js.github.io/) syntax to generate diagrams and flowcharts. "),n.qZA(),n._UZ(106,"markdown",2),n.TgZ(107,"markdown"),n._uU(108," The example below illustrate `mermaid` directive in action. "),n.qZA(),n.TgZ(109,"div",3)(110,"mat-form-field",4)(111,"textarea",5),n.NdJ("ngModelChange",function(l){return t.mermaidMarkdown=l}),n.qZA()(),n._UZ(112,"markdown",21),n.qZA(),n.TgZ(113,"markdown"),n._uU(114,"\n      Optionally, you can specify mermaid [configuration options](https://mermaid-js.github.io/mermaid/#/Setup?id=configuration) using `mermaidOptions` property.\n\n      **example.component.ts**\n      ```typescript\n      import { MermaidAPI } from 'ngx-markdown';\n\n      public options: MermaidAPI.Config = {\n        fontFamily: '\"trebuchet ms\", verdana, arial, sans-serif',\n        logLevel: MermaidAPI.LogLevel.Info,\n        theme: MermaidAPI.Theme.Dark,\n        ...\n      };\n      ```\n\n      **example.component.html**\n    "),n.qZA(),n._UZ(115,"markdown",2),n.TgZ(116,"markdown",7),n._uU(117," > :blue_book: You can refer to this [Mermaid](https://mermaid-js.github.io/) documentation for complete usage syntax. "),n.qZA()(),n.TgZ(118,"section")(119,"h2",22),n._uU(120,"Clipboard plugin"),n.qZA(),n.TgZ(121,"markdown"),n._uU(122,"\n      #### Clipboard file(s) to include\n      ```javascript\n      node_modules/clipboard/dist/clipboard.min.js\n      ```\n      #### Directive\n      `clipboard` - activate copy-to-clipboard plugin\n      #### Attributes\n      `clipboardButtonComponent` - component `Type<any>` to use as copy-to-clipboard button\n      `clipboardButtonTemplate` - template reference `TemplateRef<T>` to use as copy-to-clipboard button\n      ### Example\n    "),n.qZA(),n.TgZ(123,"markdown",23),n._uU(124,"\n      #### Default button\n\n      The `clipboard` plugin provide an unstyled default button with a default behavior out of the box if no alternative is used.\n\n      ```javascript\n      const example = 'rollover me to see the default clipboard button appears!';\n      ```\n    "),n.qZA(),n.TgZ(125,"markdown",24),n._uU(126,'\n      #### Customize default button\n\n      To customize the default button styling, use the `.markdown-clipboard-button` CSS selector in your global `styles.css/scss` file. You can also customized the "copied" state happening after the button is clicked using the `.copied` CSS selector.\n\n      ```css\n      .markdown-clipboard-button {\n        background-color: rgba(255, 255, 255, 0.07);\n        border: none;\n        border-radius: 4px;\n        color: #ffffff;\n        cursor: pointer;\n        font-size: 11px;\n        padding: 4px 0;\n        width: 50px;\n        transition: all 250ms ease-out;\n      }\n\n      .markdown-clipboard-button:hover {\n        background-color: rgba(255, 255, 255, 0.14);\n      }\n\n      .markdown-clipboard-button:active {\n        transform: scale(0.95);\n      }\n\n      .markdown-clipboard-button.copied {\n        background-color: rgba(0, 255, 0, 0.1);\n        color: #00ff00;\n      }\n      ```\n    '),n.qZA(),n.TgZ(127,"markdown",25),n._uU(128,"\n      #### Using global configuration\n\n      You can provide a custom component to use globaly across your application with the `clipboardOptions` via `MarkdownModule.forRoot()` import configuration.\n\n      ```typescript\n      MarkdownModule.forRoot({\n        ...\n        clipboardOptions: {\n          provide: ClipboardOptions,\n          useValue: {\n            buttonComponent: ClipboardButtonComponent,\n          },\n        },\n      }),\n      ```\n    "),n.qZA(),n.TgZ(129,"markdown",25),n.IAx(),n._uU(130,"\n      #### Using a component\n\n      You can also provide your custom component using the `clipboardButtonComponent` input property when using the `clipboard` directive.\n\n      ```typescript\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'app-clipboard-button',\n        template: `<button (click)=\"onClick()\">Copy</button>`,\n      })\n      export class ClipboardButtonComponent {\n        onClick() {\n          alert('Copied to clipboard!');\n        }\n      }\n      ```\n\n      ```typescript\n      import { ClipboardButtonComponent } from './clipboard-button-component';\n\n      @Component({ ... })\n      export class ExampleComponent {\n        readonly clipboardButton = ClipboardButtonComponent;\n      }\n      ```\n\n      ```html\n      <markdown clipboard [clipboardButtonComponent]=\"clipboardButton\"></markdown>\n      ```\n    "),n.fQ9(),n.qZA(),n.YNc(131,v,3,0,"ng-template",null,26,n.W1O),n.TgZ(133,"markdown",27),n._uU(134,'\n      #### Using ng-template\n\n      Alternatively, the `clipboard` directive can be used in conjonction with `ng-template` to provide a custom button implementation via the `clipboardButtonTemplate` input property on the `markdown` component.\n\n      ```html\n      <ng-template #buttonTemplate>\n        <button (click)="onCopyToClipboard()">...</button>\n      </ng-template>\n\n      <markdown clipboard [clipboardButtonTemplate]="buttonTemplate"></markdown>\n      ```\n    '),n.qZA()()()),2&i){const r=n.MAs(132);n.Q6J("headings",t.headings),n.xp6(10),n.Q6J("src","app/plugins/remote/emoji.html"),n.xp6(5),n.Q6J("ngModel",t.emojiMarkdown),n.xp6(1),n.Q6J("data",t.emojiMarkdown),n.xp6(10),n.Q6J("src","app/plugins/remote/line-numbers.html"),n.xp6(9),n.Q6J("start",5),n.xp6(11),n.Q6J("src","app/plugins/remote/line-highlight.html"),n.xp6(3),n.Q6J("line","6, 10-16")("lineOffset",5),n.xp6(19),n.Q6J("user","root")("host","localhost")("src","app/plugins/remote/root-user-without-output.bash"),n.xp6(3),n.Q6J("user","chris")("host","remotehost")("output","2, 4-8")("src","app/plugins/remote/non-root-user-with-output.bash"),n.xp6(3),n.Q6J("prompt","PS C:UsersChris>")("output","2-19")("src","app/plugins/remote/windows-powershell-with-output.powershell"),n.xp6(3),n.Q6J("prompt","PS C:UsersChris>")("filterOutput","(out)")("src","app/plugins/remote/windows-powershell-with-filter-output.powershell"),n.xp6(10),n.Q6J("src","app/plugins/remote/katex.html"),n.xp6(5),n.Q6J("ngModel",t.katexMarkdown),n.xp6(1),n.Q6J("data",t.katexMarkdown),n.xp6(3),n.Q6J("src","app/plugins/remote/katex-options.html"),n.xp6(10),n.Q6J("src","app/plugins/remote/mermaid.html"),n.xp6(5),n.Q6J("ngModel",t.mermaidMarkdown),n.xp6(1),n.Q6J("data",t.mermaidMarkdown)("mermaidOptions",t.mermaidOptions),n.xp6(3),n.Q6J("src","app/plugins/remote/mermaid-options.html"),n.xp6(12),n.Q6J("clipboardButtonComponent",t.clipboardButton),n.xp6(2),n.Q6J("clipboardButtonComponent",t.clipboardButton),n.xp6(4),n.Q6J("clipboardButtonTemplate",r)}},dependencies:[s.Fj,s.JJ,s.On,k.l,w.KE,u.Nt,Z.c,m.xw,m.SQ,m.yH],styles:["[_nghost-%COMP%]{display:block}textarea[_ngcontent-%COMP%]{min-height:180px}.btn-clipboard-default[_ngcontent-%COMP%]     .markdown-clipboard-button{background-color:#ffffff12;border:none;border-radius:4px;color:#fff;cursor:pointer;font-family:Google Sans,Helvetica,sans-serif;font-size:11px;padding:4px 0;width:50px;transition:all .25s ease-out}.btn-clipboard-default[_ngcontent-%COMP%]     .markdown-clipboard-button:hover, .btn-clipboard-default[_ngcontent-%COMP%]     .markdown-clipboard-button:focus{background-color:#ffffff24}.btn-clipboard-default[_ngcontent-%COMP%]     .markdown-clipboard-button:active{transform:scale(.95)}.btn-clipboard-default[_ngcontent-%COMP%]     .markdown-clipboard-button.copied{background-color:#00ff001a;color:#0f0}.btn-clipboard[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background-color:#1e1e1e;border:1px solid #666666;border-radius:4px;padding:6px;cursor:pointer;transition:all .2s ease-out}.btn-clipboard[_ngcontent-%COMP%]:active, .btn-clipboard[_ngcontent-%COMP%]:hover{border-color:#888}.btn-clipboard[_ngcontent-%COMP%]:active{background-color:#3e3e3e;transform:scale(.95)}"],changeDetection:0}),o})()}];let U=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[g.Bz.forChild(y),g.Bz]}),o})();e(842);let C=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[h.f,s.u5,p.JP.forChild(),u.c,c.ZX,U,b.U,f.m]}),o})()}}]);