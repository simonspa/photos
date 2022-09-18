/*! For license information please see photos-src_mixins_AbortControllerMixin_js-src_components_VirtualScrolling_vue-src_views_Albums_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_mixins_AbortControllerMixin_js-src_components_VirtualScrolling_vue-src_views_Albums_vue"],{69363:(n,t,e)=>{e.d(t,{Z:()=>o});const o={name:"AbortControllerMixin",data:function(){return{abortController:new AbortController}},beforeDestroy:function(){this.abortController.abort()},beforeRouteLeave:function(n,t,e){this.abortController.abort(),this.abortController=new AbortController,e()}}},35928:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(87537),i=e.n(o),r=e(23645),a=e.n(r)()(i());a.push([n.id,".album-cover[data-v-858c7dee]{display:flex;flex-direction:column;padding:16px;border-radius:var(--border-radius-large)}.album-cover[data-v-858c7dee]:hover,.album-cover[data-v-858c7dee]:focus{background:var(--color-background-dark)}.album-cover__image[data-v-858c7dee]{width:350px;height:350px;object-fit:none;border-radius:var(--border-radius-large)}@media only screen and (max-width: 1200px){.album-cover__image[data-v-858c7dee]{width:250px;height:250px}}.album-cover__image--placeholder[data-v-858c7dee]{background:var(--color-primary-light)}.album-cover__image--placeholder[data-v-858c7dee]  .material-design-icon{width:100%;height:100%}.album-cover__image--placeholder[data-v-858c7dee]  .material-design-icon .material-design-icon__svg{fill:var(--color-primary)}.album-cover__details[data-v-858c7dee]{display:flex;flex-direction:column;margin-top:16px;width:350px}@media only screen and (max-width: 1200px){.album-cover__details[data-v-858c7dee]{width:250px}}.album-cover__details__first-line[data-v-858c7dee]{display:flex}.album-cover__details__second-line[data-v-858c7dee]{display:flex;color:var(--color-text-lighter)}.album-cover__details__name[data-v-858c7dee]{flex-grow:1;margin:0;font-weight:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}","",{version:3,sources:["webpack://./src/components/AlbumCover.vue"],names:[],mappings:"AAsGA,8BACC,YAAA,CACA,qBAAA,CACA,YAAA,CACA,wCAAA,CAEA,wEACC,uCAAA,CAGD,qCACC,WAAA,CACA,YAAA,CACA,eAAA,CACA,wCAAA,CAEA,2CAND,qCAOE,WAAA,CACA,YAAA,CAAA,CAGD,kDACC,qCAAA,CAEA,yEACC,UAAA,CACA,WAAA,CAEA,oGACC,yBAAA,CAMJ,uCACC,YAAA,CACA,qBAAA,CACA,eAAA,CACA,WAAA,CAEA,2CAND,uCAOE,WAAA,CAAA,CAGD,mDACC,YAAA,CAGD,oDACC,YAAA,CACA,+BAAA,CAGD,6CACC,WAAA,CACA,QAAA,CACA,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.album-cover {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 16px;\n\tborder-radius: var(--border-radius-large);\n\n\t&:hover, &:focus {\n\t\tbackground: var(--color-background-dark);\n\t}\n\n\t&__image {\n\t\twidth: 350px;\n\t\theight: 350px;\n\t\tobject-fit: none;\n\t\tborder-radius: var(--border-radius-large);\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\twidth: 250px;\n\t\t\theight: 250px;\n\t\t}\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-light);\n\n\t\t\t::v-deep .material-design-icon {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\n\t\t\t\t.material-design-icon__svg {\n\t\t\t\t\tfill: var(--color-primary);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__details {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmargin-top: 16px;\n\t\twidth: 350px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\twidth: 250px;\n\t\t}\n\n\t\t&__first-line {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t&__second-line {\n\t\t\tdisplay: flex;\n\t\t\tcolor: var(--color-text-lighter);\n\t\t}\n\n\t\t&__name {\n\t\t\tflex-grow: 1;\n\t\t\tmargin: 0;\n\t\t\tfont-weight: normal;\n\t\t\toverflow: hidden;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\n\t\t}\n\t}\n\n}\n'],sourceRoot:""}]);const s=a},6179:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(87537),i=e.n(o),r=e(23645),a=e.n(r)()(i());a.push([n.id,":root{--photos-navigation-height: 64px;--photos-navigation-spacing: calc((var(--photos-navigation-height) - 44px) / 2)}button.app-navigation-toggle{top:0 !important;right:calc(var(--photos-navigation-height)*-1) !important;margin:var(--photos-navigation-spacing) !important}","",{version:3,sources:["webpack://./src/components/HeaderNavigation.vue"],names:[],mappings:"AAgLA,MACC,gCAAA,CAEA,+EAAA,CAID,6BAEC,gBAAA,CACA,yDAAA,CACA,kDAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n:root {\n\t--photos-navigation-height: 64px;\n\t// header height - button size\n\t--photos-navigation-spacing: calc((var(--photos-navigation-height) - 44px) / 2);\n}\n\n// Properly position the navigation toggle button\nbutton.app-navigation-toggle {\n\t// App-navigation have a 4px margin top\n\ttop: 0 !important;\n\tright: calc(var(--photos-navigation-height) * -1) !important;\n\tmargin: var(--photos-navigation-spacing) !important;\n}\n\n'],sourceRoot:""}]);const s=a},84827:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(87537),i=e.n(o),r=e(23645),a=e.n(r)()(i());a.push([n.id,".photos-navigation[data-v-b9975c76]{position:-webkit-sticky;position:sticky;z-index:20;top:0;display:flex;align-items:center;width:100%;height:var(--photos-navigation-height);min-height:var(--photos-navigation-height);padding:0 var(--photos-navigation-height);background:var(--color-main-background)}.photos-navigation__back[data-v-b9975c76]{position:absolute;left:0;margin:var(--photos-navigation-spacing) !important}.photos-navigation__title[data-v-b9975c76]{overflow:hidden;margin:0;margin-right:calc(2*var(--photos-navigation-spacing));cursor:pointer;white-space:nowrap;text-overflow:ellipsis}.photos-navigation__loader[data-v-b9975c76]{margin-left:32px}.photos-navigation__content-right[data-v-b9975c76]{display:flex;align-items:center;justify-content:center;margin-left:auto}","",{version:3,sources:["webpack://./src/components/HeaderNavigation.vue"],names:[],mappings:"AAiMA,oCACC,uBAAA,CAAA,eAAA,CACA,UAAA,CACA,KAAA,CACA,YAAA,CACA,kBAAA,CACA,UAAA,CACA,sCAAA,CACA,0CAAA,CACA,yCAAA,CACA,uCAAA,CAEA,0CAEC,iBAAA,CACA,MAAA,CACA,kDAAA,CAGD,2CACC,eAAA,CACA,QAAA,CACA,qDAAA,CACA,cAAA,CACA,kBAAA,CACA,sBAAA,CAGD,4CACC,gBAAA,CAGD,mDACC,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,gBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.photos-navigation {\n\tposition: sticky;\n\tz-index: 20;\n\ttop: 0;\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 100%;\n\theight: var(--photos-navigation-height);\n\tmin-height: var(--photos-navigation-height);\n\tpadding: 0 var(--photos-navigation-height);\n\tbackground: var(--color-main-background);\n\n\t&__back {\n\t\t// Above the navigation menu\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tmargin: var(--photos-navigation-spacing) !important;\n\t}\n\n\t&__title {\n\t\toverflow: hidden;\n\t\tmargin: 0;\n\t\tmargin-right: calc(2 * var(--photos-navigation-spacing));\n\t\tcursor: pointer;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t&__loader {\n\t\tmargin-left: 32px;\n\t}\n\n\t&__content-right {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tmargin-left: auto;\n\t}\n}\n\n'],sourceRoot:""}]);const s=a},21238:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(87537),i=e.n(o),r=e(23645),a=e.n(r)()(i());a.push([n.id,".vs-container[data-v-5e8733b7]{overflow-y:scroll;height:100%}.vs-rows-container[data-v-5e8733b7]{box-sizing:border-box}","",{version:3,sources:["webpack://./src/components/VirtualScrolling.vue"],names:[],mappings:"AAkTA,+BACC,iBAAA,CACA,WAAA,CAGD,oCACC,qBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.vs-container {\n\toverflow-y: scroll;\n\theight: 100%;\n}\n\n.vs-rows-container {\n\tbox-sizing: border-box;\n}\n'],sourceRoot:""}]);const s=a},39104:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(87537),i=e.n(o),r=e(23645),a=e.n(r)()(i());a.push([n.id,".albums[data-v-3c63727a]{display:flex;flex-direction:column;height:100%}.albums__list[data-v-3c63727a]{padding:32px 48px;flex-grow:1;display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;height:calc(100% - 60px);overflow-x:scroll}@media only screen and (max-width: 1200px){.albums__list[data-v-3c63727a]{padding:32px 12px;justify-content:center}}.albums__empty[data-v-3c63727a]{display:flex;flex-direction:column;align-items:center}.albums__empty__button[data-v-3c63727a]{margin-top:32px}.empty-content-with-illustration[data-v-3c63727a]  .empty-content__icon{width:200px;height:200px}.empty-content-with-illustration[data-v-3c63727a]  .empty-content__icon svg{width:200px;height:200px}","",{version:3,sources:["webpack://./src/views/Albums.vue"],names:[],mappings:"AA+IA,yBACC,YAAA,CACA,qBAAA,CACA,WAAA,CAEA,+BACC,iBAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CACA,QAAA,CACA,sBAAA,CACA,wBAAA,CACA,iBAAA,CAEA,2CAVD,+BAWE,iBAAA,CACA,sBAAA,CAAA,CAKF,gCACC,YAAA,CACA,qBAAA,CACA,kBAAA,CAEA,wCACC,eAAA,CAKH,wEACC,WAAA,CACA,YAAA,CAEA,4EACC,WAAA,CACA,YAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.albums {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\n\t&__list {\n\t\tpadding: 32px 48px;\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tgap: 16px;\n\t\talign-items: flex-start;\n\t\theight: calc(100% - 60px);\n\t\toverflow-x: scroll;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tpadding: 32px 12px;\n\t\t\tjustify-content: center;\n\t\t}\n\n\t}\n\n\t&__empty {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\n\t\t&__button {\n\t\t\tmargin-top: 32px;\n\t\t}\n\t}\n}\n\n.empty-content-with-illustration ::v-deep .empty-content__icon {\n\twidth: 200px;\n\theight: 200px;\n\n\tsvg {\n\t\twidth: 200px;\n\t\theight: 200px;\n\t}\n}\n'],sourceRoot:""}]);const s=a},36288:(n,t,e)=>{e.d(t,{Z:()=>i});const o={name:"ImageMultipleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const i=(0,e(51900).Z)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",n._b({staticClass:"material-design-icon image-multiple-icon",attrs:{"aria-hidden":!n.title,"aria-label":n.title,role:"img"},on:{click:function(t){return n.$emit("click",t)}}},"span",n.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:n.fillColor,width:n.size,height:n.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6"}},[n.title?e("title",[n._v(n._s(n.title))]):n._e()])])])}),[],!1,null,null,null).exports},57821:(n,e,o)=>{o.d(e,{Z:()=>T});var i=o(20629),r=o(36288),a=o(79753);function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){c(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const A={name:"AlbumCover",components:{ImageMultiple:r.Z},props:{baseName:{type:String,required:!0}},computed:l(l({},(0,i.Se)(["files","albums"])),{},{album:function(){return this.albums[this.baseName]},coverUrl:function(){return(0,a.generateUrl)("/core/preview?fileId=".concat(this.album.lastPhoto,"&x=",512,"&y=",512,"&forceIcon=0&a=1"))},altImg:function(){return t("photos",'Cover photo for album "{albumName}".',{albumName:this.baseName})}})};var u=o(93379),p=o.n(u),m=o(7795),g=o.n(m),d=o(90569),h=o.n(d),v=o(3565),C=o.n(v),f=o(19216),b=o.n(f),_=o(44589),y=o.n(_),w=o(35928),x={};x.styleTagTransform=y(),x.setAttributes=C(),x.insert=h().bind(null,"head"),x.domAPI=g(),x.insertStyleElement=b();p()(w.Z,x);w.Z&&w.Z.locals&&w.Z.locals;const T=(0,o(51900).Z)(A,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("router-link",{staticClass:"album-cover",attrs:{to:"/albums/"+n.baseName}},[-1!==n.album.lastPhoto?e("img",{staticClass:"album-cover__image",attrs:{src:n.coverUrl,alt:n.altImg}}):e("div",{staticClass:"album-cover__image album-cover__image--placeholder"},[e("ImageMultiple",{attrs:{size:128}})],1),n._v(" "),e("div",{staticClass:"album-cover__details"},[e("div",{staticClass:"album-cover__details__first-line"},[e("h2",{staticClass:"album-cover__details__name"},[n._v("\n\t\t\t\t"+n._s(n.baseName)+"\n\t\t\t")])]),n._v(" "),e("div",{staticClass:"album-cover__details__second-line"},[n._v("\n\t\t\t"+n._s(n.album.date)+" ⸱ "+n._s(n.n("photos","%n item","%n photos and videos",n.album.nbItems))+"\n\t\t")])])])}),[],!1,null,"858c7dee",null).exports},46756:(n,e,o)=>{o.d(e,{Z:()=>w});var i=o(76240),r=o(33476);const a={name:"HeaderNavigation",components:{ArrowLeft:i.default,NcButton:r.NcButton,NcLoadingIcon:r.NcLoadingIcon},inheritAttrs:!1,props:{loading:{type:Boolean,default:!1},path:{type:String,default:"/"},title:{type:String,required:!0},rootTitle:{type:String,default:t("photos","Photos")},params:{type:Object,default:null}},computed:{isRoot:function(){var n="/"===this.path;return this.toggleNavigationButton(!n),n},name:function(){return this.isRoot?this.rootTitle:this.title},parentPath:function(){var n=this.path.split("/");n.pop();var t=n.join("/");return this.isRoot||""===t.trim()?"/":n.join("/")},parentName:function(){return this.parentPath&&this.parentPath.split("/").pop()},backToText:function(){return"/"===this.parentPath?t("photos","Back to {folder}",{folder:this.rootTitle}):t("photos","Back to {folder}",{folder:this.parentName})},to:function(){var n=/^\/?(.*)/i.exec(this.parentPath)[1],t=Object.assign({},this.$route,{params:this.params||{path:n}}),e=t.name,o=t.params;return""===n?{name:e}:decodeURIComponent(this.$router.resolve({name:e,params:o}).resolved.path)}},methods:{folderUp:function(){this.$router.push(this.to)},refresh:function(){this.$emit("refresh")},toggleNavigationButton:function(n){document.querySelector("button.app-navigation-toggle").style.display=n?"none":null}}};var s=o(93379),l=o.n(s),c=o(7795),A=o.n(c),u=o(90569),p=o.n(u),m=o(3565),g=o.n(m),d=o(19216),h=o.n(d),v=o(44589),C=o.n(v),f=o(6179),b={};b.styleTagTransform=C(),b.setAttributes=g(),b.insert=p().bind(null,"head"),b.domAPI=A(),b.insertStyleElement=h();l()(f.Z,b);f.Z&&f.Z.locals&&f.Z.locals;var _=o(84827),y={};y.styleTagTransform=C(),y.setAttributes=g(),y.insert=p().bind(null,"head"),y.domAPI=A(),y.insertStyleElement=h();l()(_.Z,y);_.Z&&_.Z.locals&&_.Z.locals;const w=(0,o(51900).Z)(a,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"photos-navigation",class:{"photos-navigation--root":n.isRoot},attrs:{role:"toolbar"}},[n.isRoot?n._e():e("NcButton",{staticClass:"photos-navigation__back",attrs:{type:"tertiary"},on:{click:n.folderUp},scopedSlots:n._u([{key:"icon",fn:function(){return[e("ArrowLeft",{attrs:{size:20}})]},proxy:!0}],null,!1,1821202730)}),n._v(" "),e("h2",{staticClass:"photos-navigation__title",on:{click:n.refresh}},[n._v("\n\t\t"+n._s(n.name)+"\n\t")]),n._v(" "),n.$slots.default?e("div",{staticClass:"photos-navigation__content"},[n._t("default")],2):n._e(),n._v(" "),n.loading?e("NcLoadingIcon",{staticClass:"photos-navigation__loader"}):n._e(),n._v(" "),e("div",{staticClass:"photos-navigation__content-right"},[n._t("right")],2)],1)}),[],!1,null,"b9975c76",null).exports},20561:(n,t,e)=>{e.d(t,{Z:()=>k});var o=e(20296),i=e(59537);function r(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=A(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,s=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return a=n.done,n},e:function(n){s=!0,r=n},f:function(){try{a||null==e.return||e.return()}finally{if(s)throw r}}}}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){l(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n){return function(n){if(Array.isArray(n))return u(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||A(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(n,t){if(n){if("string"==typeof n)return u(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(n,t):void 0}}function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}const p={name:"VirtualScrolling",props:{rows:{type:Array,required:!0},containerElement:{type:HTMLElement,default:null},useWindow:{type:Boolean,default:!1},renderWindowRatio:{type:Number,default:4},willBeVisibleWindowRatio:{type:Number,default:4},visibleWindowRatio:{type:Number,default:0},bottomBufferRatio:{type:Number,default:5},scrollToKey:{type:String,default:""}},data:function(){return{scrollPosition:0,containerHeight:0,rowsContainerHeight:0,resizeObserver:null}},computed:{visibleRows:function(){i.Z.debug("[VirtualScrolling] Computing visible rows",this.rows);var n=this.scrollPosition,t=this.containerHeight,e=t*this.renderWindowRatio,o=t*this.willBeVisibleWindowRatio,r=t*this.visibleWindowRatio,a=0,l=0;return this.rows.reduce((function(i,A){if(a=l,l+=A.height,a<n-e||n+t+e<a)return i;var u="none";return n-o<a&&a<n+t+o&&(u="near",n-r<a&&a<n+t+r&&(u="visible"),n-r<l&&l<n+t+r&&(u="visible")),[].concat(c(i),[s(s({},A),{},{visibility:u})])}),[])},rowsHeight:function(){return this.rows.map((function(n){return n.height})).reduce((function(n,t){return n+t}),0)+200},paddingTop:function(){var n=this;if(0===this.visibleRows.length)return 0;var t=this.rows.findIndex((function(t){return t.items===n.visibleRows[0].items}));return this.rows.map((function(n){return n.height})).slice(0,t).reduce((function(n,t){return n+t}),0)},rowsContainerStyle:function(){return{height:"".concat(this.rowsHeight,"px"),paddingTop:"".concat(this.paddingTop,"px")}},isNearBottom:function(){var n=this.containerHeight*this.bottomBufferRatio;return this.scrollPosition+this.containerHeight>=this.rowsHeight-n},container:function(){return i.Z.debug("[VirtualScrolling] Computing container"),null!==this.containerElement?this.containerElement:this.useWindow?window:this.$refs.container}},watch:{isNearBottom:function(n){n&&this.$emit("need-content")},rows:function(){this.isNearBottom&&this.$emit("need-content")},scrollToKey:function(n){var t,e=0,o=r(this.rows);try{for(o.s();!(t=o.n()).done;){var i=t.value;if(i.key===n)return void this.$refs.container.scrollTo({top:e,behavior:"smooth"});e+=i.height}}catch(n){o.e(n)}finally{o.f()}}},mounted:function(){var n=this;this.resizeObserver=new ResizeObserver((function(t){var e,o=r(t);try{for(o.s();!(e=o.n()).done;){var i=e.value,a=i.contentRect;i.target.classList.contains("vs-container")&&(n.containerHeight=a.height),i.target.classList.contains("vs-rows-container")&&(n.rowsContainerHeight=a.height)}}catch(n){o.e(n)}finally{o.f()}})),this.useWindow?(window.addEventListener("resize",this.updateContainerSize),this.containerHeight=window.innerHeight):this.resizeObserver.observe(this.container),this.resizeObserver.observe(this.$refs.rowsContainer),this.container.addEventListener("scroll",this.updateScrollPosition)},beforeDestroy:function(){this.useWindow&&window.removeEventListener("resize",this.updateContainerSize),this.resizeObserver.disconnect(),this.container.removeEventListener("scroll",this.updateScrollPosition)},methods:{updateScrollPosition:(0,o.debounce)((function(){this.useWindow?this.scrollPosition=this.container.scrollY:this.scrollPosition=this.container.scrollTop}),200),updateContainerSize:function(){this.containerHeight=window.innerHeight}}};var m=e(93379),g=e.n(m),d=e(7795),h=e.n(d),v=e(90569),C=e.n(v),f=e(3565),b=e.n(f),_=e(19216),y=e.n(_),w=e(44589),x=e.n(w),T=e(21238),W={};W.styleTagTransform=x(),W.setAttributes=b(),W.insert=C().bind(null,"head"),W.domAPI=h(),W.insertStyleElement=y();g()(T.Z,W);T.Z&&T.Z.locals&&T.Z.locals;const k=(0,e(51900).Z)(p,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.useWindow||null!==n.containerElement?e("div",{ref:"rowsContainer",staticClass:"vs-rows-container",style:n.rowsContainerStyle},[n._t("default",null,{renderedRows:n.visibleRows}),n._v(" "),n._t("loader")],2):e("div",{ref:"container",staticClass:"vs-container"},[e("div",{ref:"rowsContainer",staticClass:"vs-rows-container",style:n.rowsContainerStyle},[n._t("default",null,{renderedRows:n.visibleRows}),n._v(" "),n._t("loader")],2)])}),[],!1,null,"5e8733b7",null).exports},55333:(n,t,e)=>{e.r(t),e.d(t,{default:()=>T});var o=e(33476),i=e(40502),r=e(65322),a=e(12945),s=e(57821),l=e(14684),c=e(46756);const A={name:"Albums",components:{AlbumCover:s.Z,AlbumForm:l.Z,FolderMultipleImage:r.Z,HeaderNavigation:c.Z,NcButton:o.NcButton,NcEmptyContent:o.NcEmptyContent,NcModal:o.NcModal,Plus:i.Z},mixins:[a.Z],data:function(){return{showAlbumCreationForm:!1}},computed:{noAlbums:function(){return 0===Object.keys(this.albums).length}},methods:{handleAlbumCreated:function(n){var t=n.album;this.showAlbumCreationForm=!1,this.$router.push({name:"albums",params:{path:t.basename}})},onRefresh:function(){this.fetchAlbums()}}};var u=e(93379),p=e.n(u),m=e(7795),g=e.n(m),d=e(90569),h=e.n(d),v=e(3565),C=e.n(v),f=e(19216),b=e.n(f),_=e(44589),y=e.n(_),w=e(39104),x={};x.styleTagTransform=y(),x.setAttributes=C(),x.insert=h().bind(null,"head"),x.domAPI=g(),x.insertStyleElement=b();p()(w.Z,x);w.Z&&w.Z.locals&&w.Z.locals;const T=(0,e(51900).Z)(A,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.errorFetchingAlbums?e("NcEmptyContent",[n._v("\n\t"+n._s(n.t("photos","An error occurred"))+"\n")]):e("div",{staticClass:"albums"},[e("HeaderNavigation",{key:"navigation",attrs:{loading:n.loadingAlbums,title:n.t("photos","Albums"),"root-title":n.t("photos","Albums")},on:{refresh:n.onRefresh}},[e("NcButton",{attrs:{type:"primary","aria-label":n.t("photos","Create a new album.")},on:{click:function(t){n.showAlbumCreationForm=!0}},scopedSlots:n._u([{key:"icon",fn:function(){return[e("Plus")]},proxy:!0}])},[n._v("\n\t\t\t"+n._s(n.t("photos","New album"))+"\n\t\t")])],1),n._v(" "),n.noAlbums&&!n.loadingAlbums?e("div",{staticClass:"albums__empty"},[e("NcEmptyContent",{scopedSlots:n._u([{key:"icon",fn:function(){return[e("FolderMultipleImage")]},proxy:!0},{key:"desc",fn:function(){return[n._v("\n\t\t\t\t"+n._s(n.t("photos","There is no album yet!"))+"\n\t\t\t")]},proxy:!0}],null,!1,3685789295)}),n._v(" "),e("NcButton",{staticClass:"albums__empty__button",attrs:{type:"primary","aria-label":n.t("photos","Create a new album")},on:{click:function(t){n.showAlbumCreationForm=!0}},scopedSlots:n._u([{key:"icon",fn:function(){return[e("Plus")]},proxy:!0}],null,!1,1489515321)},[n._v("\n\t\t\t"+n._s(n.t("photos","Add"))+"\n\t\t")])],1):n.noAlbums?n._e():e("div",{staticClass:"albums__list"},n._l(n.albums,(function(n){return e("AlbumCover",{key:n.basename,staticClass:"album",attrs:{album:n}})})),1),n._v(" "),n.showAlbumCreationForm?e("NcModal",{attrs:{title:n.t("photos","New album")},on:{close:function(t){n.showAlbumCreationForm=!1}}},[e("AlbumForm",{on:{done:n.handleAlbumCreated}})],1):n._e()],1)}),[],!1,null,"3c63727a",null).exports}}]);
//# sourceMappingURL=photos-src_mixins_AbortControllerMixin_js-src_components_VirtualScrolling_vue-src_views_Albums_vue.js.map?v=92818d127703b262f9b7