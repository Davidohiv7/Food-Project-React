(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],Array(38).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(18),i=n.n(a),s=n(5),o=n(4),u=(n(38),n(6)),l=(n(39),n(40),n(0));function j(){return Object(l.jsx)("div",{id:"LPContainer",children:Object(l.jsxs)("div",{id:"LPWindow",children:[Object(l.jsxs)("div",{id:"LPHeader",children:[Object(l.jsx)("span",{id:"LPTitle1",children:"Davids's Food"}),Object(l.jsx)("span",{id:"LPTitle2",children:"Project"})]}),Object(l.jsxs)("div",{id:"LPBody",children:[Object(l.jsx)("div",{id:"LPDescription",children:Object(l.jsx)("p",{children:"Welcome to this amazing website, where you are going to be able to find amazing recipes, filtered them by their diet type's and share your own recipe with the community, just click the Home button!"})}),Object(l.jsx)(s.b,{to:"/home",children:Object(l.jsx)("button",{id:"LPHomeButton",children:"Home"})})]})]})})}n(46),n(47);var d=n.p+"static/media/sicon.4b0000fc.png";function p(){return Object(l.jsxs)("div",{id:"NBContainer",children:[Object(l.jsx)("div",{id:"NBTitleContainer",children:Object(l.jsxs)(s.b,{to:"/home",children:[Object(l.jsx)("span",{id:"NBTitle1",children:"David's Food"}),Object(l.jsx)("span",{id:"NBTitle2",children:"Project"})]})}),Object(l.jsxs)("div",{id:"NBbuttons",children:[Object(l.jsx)(s.b,{to:"/home",children:Object(l.jsx)("button",{id:"NBHomeButton",children:"Home"})}),Object(l.jsx)(s.b,{to:"/createRecipe",children:Object(l.jsx)("button",{id:"NBCRecipeButton",children:"Create Recipe"})})]}),Object(l.jsx)("img",{id:"NBIcon",src:d,alt:"cornerIcon"})]})}n(48),n(49);var b=n.p+"static/media/homeRightImg.3348f678.png",h=n.p+"static/media/loadingIcon3.4b904dc9.png",m=function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)},O=function(e){return e.map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)}))};function f(){this.parameters={}}f.prototype.addParameters=function(e){var t=this;e&&e.split("_").map((function(e){return e.split(":")})).filter((function(e){return""!==e[0]})).forEach((function(e){return t.parameters[e[0]]=parseInt(e[1])?parseInt(e[1]):e[1]}))},f.prototype.checkParameter=function(e){return Object.keys(this.parameters).includes(e)},f.prototype.createURL=function(e,t){return Object.entries(e).map((function(e){return e.join(":")})).filter((function(e){return!e.includes(t)})).join("_")};var x,v;x={},Object.entries(x).map((function(e){return e.join(":")})).filter((function(e){return!e.includes(v)})).join("_");var g=n(12),y=n.n(g),S=n(13),C="GET_RECIPES",R="FAILED_SEARCH",L="LOADING_ON",P="GET_TYPES",I="UPDATE_PAGE",w="SORT_RECIPES",N="FILTER_RECIPES",T="REMOVE_PREVIOUS_PAGE",D="SET_SEARCH_SIGN",B="http://localhost:3001/recipes/",k="http://localhost:3001/recipe/",E=function(e,t,n){if("number"===typeof e[0][t])return n?e.sort((function(e,n){return e[t]-n[t]})):e.sort((function(e,n){return n[t]-e[t]}));var r=e.sort((function(e,n){var r=e[t].toLowerCase(),c=n[t].toLowerCase();return r<c?-1:r>c?1:0}));return n?r:r.reverse()};function H(){return{type:T}}function _(e,t){return function(){var n=Object(S.a)(y.a.mark((function n(r){var c,a,i,s;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:L}),n.prev=1,c=e,t&&t.search&&(c=t.search.split("$").join(" ")),n.next=6,fetch("".concat("http://localhost:3001/recipes","?name=").concat(c));case 6:return a=n.sent,n.next=9,a.json();case 9:if(!(i=n.sent).message){n.next=14;break}return r({type:R}),r({type:D,payload:i.message}),n.abrupt("return",setTimeout((function(){r(M(!1))}),5e3));case 14:if(t&&t.sort&&((s=t.sort.split("$"))[1]="true"===s[1],i=E(i,s[0],s[1])),!t||!t.page){n.next=17;break}return n.abrupt("return",r({type:C,recipeName:i,page:t.page}));case 17:return n.abrupt("return",r({type:C,recipeName:i}));case 20:return n.prev=20,n.t0=n.catch(1),r({type:R}),r({type:D,payload:"Couldn`t connect to the server, try later"}),n.abrupt("return",setTimeout((function(){r(M(!1))}),5e3));case 25:case"end":return n.stop()}}),n,null,[[1,20]])})));return function(e){return n.apply(this,arguments)}}()}function A(){return function(){var e=Object(S.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3001/types/");case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,t({type:P,payload:r}),e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),t({type:D,payload:"Couldn`t connect to the server, try later"}),e.abrupt("return",setTimeout((function(){t(M(!1))}),5e3));case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()}function U(e){if(e.recipes.length>0){var t=E(e.recipes,e.type,e.normal);return{type:w,payload:t}}return{type:w,payload:[]}}function M(e){return{type:D,payload:e}}var F=n(7);n(51),n(52);function $(){var e=Object(u.f)().parameters,t=new f;t.addParameters(e);var n=Object(u.e)(),c=Object(o.b)(),a=Object(o.c)((function(e){return e.searchSign})),i=Object(r.useState)(""),s=Object(F.a)(i,2),j=s[0],d=s[1];return Object(l.jsxs)("div",{id:"SBContainer",children:[Object(l.jsxs)("form",{id:"SB",onSubmit:function(e){if(e.preventDefault(),j){n.replace("/home/search:".concat(j.split(" ").join("$"),"_").concat(t.createURL(t.parameters,"search"))),M(!1);var r=j.toLowerCase();return c(_(r)),d("")}c(M("The searchbar is empty, try writing down the recipe name")),setTimeout((function(){c(M(!1))}),5e3)},children:[Object(l.jsxs)("div",{id:"SBinputContainer",children:[Object(l.jsx)("label",{id:"SBtitle",children:"RECIPE NAME"}),Object(l.jsx)("input",{id:"SBInput",type:"text",onChange:function(e){d(e.target.value)},value:j,name:"HSearchBar",placeholder:"Search a recipe"})]}),Object(l.jsx)("div",{id:"SBButtonContainer",children:Object(l.jsx)("button",{id:"SBButton",children:"Search"})})]}),a&&Object(l.jsxs)("div",{id:"SearchSign",children:[Object(l.jsx)("button",{onClick:function(){return c(M(!1))},children:"X"}),Object(l.jsx)("span",{children:a})]})]})}n(53),n(54);function z(){return Object(l.jsxs)("p",{id:"HTitle",children:["Find amazing ",Object(l.jsx)("span",{children:"Recipes"}),", eat ",Object(l.jsx)("span",{children:"Healthier"}),", share your own recipes and ",Object(l.jsx)("span",{children:"Enjoy!"})]})}n(55),n(56);var G=function(e){var t=e.recipe,n=e.parameters,r=new f;r.addParameters(n);var c=r.createURL(r.parameters);return Object(l.jsx)("div",{className:"RecipeCardContainer",children:Object(l.jsxs)(s.b,{className:"Link",to:"/home/".concat(c||"page:1","/").concat(t.id),children:[Object(l.jsx)("img",{className:"RecipeCardImage",src:t.image,alt:t.title}),Object(l.jsxs)("div",{className:"RecipeCardTitle",children:[Object(l.jsx)("span",{children:"Recipe name"}),m(t.title)]}),Object(l.jsxs)("div",{className:"RecipeCardDiets",children:[Object(l.jsx)("span",{children:"Diet types"}),O(t.diets).join(", ")]}),Object(l.jsxs)("div",{className:"RecipeCardID",children:["ID: ",t.id]})]})},t.id)};var Z=function(e){var t=e.parameters,n=Object(o.c)((function(e){return e.pages.recipesInPage}));return Object(l.jsx)("div",{id:"RecipeCards",children:n.length>0?n.map((function(e){return Object(l.jsx)(G,{parameters:t,recipe:e})})):Object(l.jsxs)("div",{id:"NoResultsDiv",children:[" There are no recipes. Try searching recipes with the",Object(l.jsx)("span",{children:" Searchbar"})," or clicking the",Object(l.jsx)("span",{children:" Get all recipes button "}),"in the left bar"]})})};n(57),n(58);function q(e){for(var t=[],n=1;n<=e;n++)t.push(n);return t}var W=function(e){var t=e.parameters,n=new f;n.addParameters(t);var c=Object(o.c)((function(e){return e.pages})),a=Object(r.useState)([]),i=Object(F.a)(a,2),u=i[0],j=i[1],d=Object(o.b)();Object(r.useEffect)((function(){var e=q(c.numerOfPages);j(e)}),[c.numerOfPages]);var p=function(e){d(H()),setTimeout((function(){return d({type:I,payload:{page:e}})}),10)};return Object(l.jsx)("div",{id:"pagesContainer",children:u.length>0?u.map((function(e){return Object(l.jsx)(s.b,{to:"/home/page:".concat(e,"_").concat(n.createURL(n.parameters,"page")),children:Object(l.jsx)("button",{id:e===c.page?"PageSelectedButton":void 0,className:"PageButton",onClick:function(){return p(e)},children:e})})})):Object(l.jsx)("div",{})})},J=n(15);n(59),n(60);var X=function(e){var t=e.parameters,n=new f;n.addParameters(t);var r=Object(u.e)(),c=Object(o.b)(),a=Object(o.c)((function(e){return e.recipesList})),i=Object(o.c)((function(e){return e.sortedRecipesList})),j=Object(o.c)((function(e){return e.typesList})),d=function(e){c(H()),setTimeout((function(){return c(U({recipes:Object(J.a)(i),type:e.target.value,normal:!0}))}),10)},p=function(e){c(H()),setTimeout((function(){return c(U({recipes:Object(J.a)(i),type:e.target.value,normal:!1}))}),10)};return Object(l.jsxs)("div",{id:"FiltersContainer",children:[Object(l.jsxs)("div",{id:"OrganizeContainer",children:[Object(l.jsx)("span",{id:"OrganizeTitle",children:"Organize the recipes"}),Object(l.jsxs)("div",{id:"ByTitleContainer",children:[Object(l.jsx)("span",{children:"By title"}),Object(l.jsxs)("div",{className:"FilterButtonContainer",children:[Object(l.jsx)(s.b,{to:"/home/sort:title$true_".concat(n.createURL(n.parameters,"sort")),children:Object(l.jsx)("button",{value:"title",onClick:d,children:"A - Z"})}),Object(l.jsx)(s.b,{to:"/home/sort:title$false_".concat(n.createURL(n.parameters,"sort")),children:Object(l.jsx)("button",{value:"title",onClick:p,children:"Z - A"})})]})]}),Object(l.jsxs)("div",{id:"ByScoreContainer",children:[Object(l.jsx)("span",{children:"By score"}),Object(l.jsxs)("div",{className:"FilterButtonContainer",children:[Object(l.jsx)(s.b,{to:"/home/sort:spoonacularScore$false_".concat(n.createURL(n.parameters,"sort")),children:Object(l.jsx)("button",{value:"spoonacularScore",onClick:p,children:"Max - Min"})}),Object(l.jsx)(s.b,{to:"/home/sort:spoonacularScore$true_".concat(n.createURL(n.parameters,"sort")),children:Object(l.jsx)("button",{value:"spoonacularScore",onClick:d,children:"Min - Max"})})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"By Healthiness"}),Object(l.jsxs)("div",{className:"FilterButtonContainer",children:[Object(l.jsx)(s.b,{to:"/home/sort:healthScore$false_".concat(n.createURL(n.parameters,"sort")),children:Object(l.jsx)("button",{value:"healthScore",onClick:p,children:"Max - Min"})}),Object(l.jsx)(s.b,{to:"/home/sort:healthScore$true_".concat(n.createURL(n.parameters,"sort")),children:Object(l.jsx)("button",{value:"healthScore",onClick:d,children:"Min - Max"})})]})]})]}),Object(l.jsxs)("div",{id:"FilterContainer",children:[Object(l.jsx)("span",{children:"Filter recipes by diet type"}),Object(l.jsxs)("select",{onChange:function(e){c(H()),setTimeout((function(){return c(function(e){var t=function(e,t){var n=t.toLowerCase();return"no diet selected"===n?e:e.filter((function(e){return e.diets.includes(n)}))}(e.recipes,e.diet);return{type:N,payload:t}}({recipes:Object(J.a)(a),diet:e.target.value}))}),10)},id:"DropDownListRecipes",name:"select",children:[Object(l.jsx)("option",{value:"No diet selected",children:"No diet selected"}),j.map((function(e){return Object(l.jsx)("option",{value:m(e.name),children:m(e.name)},e.id)}))]})]}),Object(l.jsx)("button",{id:"GetAllButton",onClick:function(){c(_("",n.parameters)),r.replace("/home/".concat(n.createURL(n.parameters,"search")))},children:"Get all recipes"})]})};function V(e){var t=e.match,n=new f,c=Object(o.b)(),a=Object(o.c)((function(e){return e.loading}));return Object(r.useEffect)((function(){if(c(A()),t.params.parameters)return n.addParameters(t.params.parameters),c(_("",n.parameters));c(_(""))}),[]),Object(l.jsxs)("div",{id:"HContainer",children:[Object(l.jsxs)("div",{id:"HLeft",children:[Object(l.jsx)(z,{}),Object(l.jsx)($,{parameters:t.params.parameters})]}),Object(l.jsx)("div",{id:"HRight",children:Object(l.jsx)("img",{id:"img1",src:b,alt:"img1"})}),Object(l.jsxs)("div",{id:"HRecipesContainer",children:[Object(l.jsx)(X,{parameters:t.params.parameters}),a?Object(l.jsx)("img",{id:"loadingCards",src:h,alt:"Loading"}):Object(l.jsxs)("div",{id:"HCardsPagesContainer",children:[Object(l.jsx)(Z,{parameters:t.params.parameters}),Object(l.jsx)(W,{parameters:t.params.parameters})]})]})]})}n(61),n(62);var Y=n.p+"static/media/redbellpeppericon.b191f713.png",K=n.p+"static/media/fireIcon.4a373d5d.png";var Q=function(e){var t=e.match,n=new f;n.addParameters(t.params.parameters),Object(o.c)((function(e){return e.pages}));var c=Object(r.useState)({}),a=Object(F.a)(c,2),i=a[0],u=a[1],j=Object(r.useState)([]),d=Object(F.a)(j,2),p=d[0],b=d[1],m=Object(r.useState)([]),x=Object(F.a)(m,2),v=x[0],g=x[1],C=Object(r.useState)(!0),R=Object(F.a)(C,2),L=R[0],P=R[1];return Object(r.useEffect)((function(){var e=t.params.id;function n(){return(n=Object(S.a)(y.a.mark((function t(){var n,r,c,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(B).concat(e));case 3:return n=t.sent,t.next=6,n.json();case 6:if(!(r=t.sent).message){t.next=10;break}return u({message:r.message}),t.abrupt("return",P(!1));case 10:c=q(Math.round(r.spoonacularScore/10)),a=q(Math.round(r.healthScore/10)),b(c),g(a),u(r),P(!1),t.next=22;break;case 18:return t.prev=18,t.t0=t.catch(0),u({message:t.t0.message}),t.abrupt("return",P(!1));case 22:case"end":return t.stop()}}),t,null,[[0,18]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}(e)}),[]),Object(l.jsx)("div",{id:"RDContainer",children:L?Object(l.jsx)("img",{id:"loadingCards",src:h,alt:"Loading"}):i.title?Object(l.jsxs)("div",{id:"RDWindow",children:[Object(l.jsxs)("div",{id:"RDMainContainer",children:[Object(l.jsx)("img",{id:"RDImage",src:i.image,alt:i.title}),Object(l.jsxs)("div",{id:"RDMainTextContainer",children:[Object(l.jsxs)("div",{id:"RDTitle",children:[Object(l.jsx)("span",{className:"mainTitle",children:"Recipe Name"}),Object(l.jsx)("span",{children:i.title})]}),Object(l.jsxs)("div",{id:"RDDiets",children:[Object(l.jsx)("span",{className:"mainTitle",children:"Diet types"}),Object(l.jsx)("span",{children:O(i.diets).join(", ")})]})]})]}),Object(l.jsxs)("div",{id:"RDDetailsContainer",children:[Object(l.jsxs)("div",{id:"RDSummaryContainer",children:[Object(l.jsx)(s.b,{id:"RDHomeLink",to:"/home/".concat(n.createURL(n.parameters)),children:"Home"}),Object(l.jsx)("span",{className:"RDDetailsTitle",children:"Summary"}),Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:i.summary}})]}),Object(l.jsxs)("div",{id:"RDInstructionsContainer",children:[Object(l.jsx)("span",{className:"RDDetailsTitle",children:"Instructions"}),i.instructions?Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:i.instructions}}):Object(l.jsx)("p",{children:"No instructions provided"})]}),Object(l.jsxs)("div",{id:"RDScoresContainer",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"RDDetailsTitle",children:" Recipe score (1-10):"}),Object(l.jsx)("div",{children:p.map((function(e){return Object(l.jsx)("img",{className:"scoreIcon",id:"scoreIcon".concat(e),src:K,alt:"icon"})}))})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"RDDetailsTitle",children:"Helthiness score (1-10):"}),Object(l.jsx)("div",{children:v.map((function(e){return Object(l.jsx)("img",{className:"healthScoreIcon",id:"healthScoreIcon".concat(e),src:Y,alt:"icon"})}))})]})]})]})]}):Object(l.jsxs)("div",{id:"NoDetaiResponse",children:[Object(l.jsx)("span",{children:i.message}),Object(l.jsx)(s.b,{id:"RDHomeLink",to:"/home/".concat(n.createURL(n.parameters)),children:"Home"})]})})},ee=(n(63),n(20)),te=n(2),ne=(n(64),n(65),n.p+"static/media/searchIIcon.e2ad182d.webp");function re(e){var t={},n=function(e){var t=[];if(e||t.push("A recipe name is requeried"),/^[a-zA-Z\s()]*$/.test(e)||t.push("Recipe name must contain only letters, spaces and parentheses"),e&&!/^.{8,}$/.test(e)&&t.push("Recipe name must be 8 characters long minimum"),t.length>0)return t}(e.title);n&&(t.title=n);var r=function(e){var t=[];if(e||t.push("A summary is requeried"),e&&!/^.{100,}$/.test(e)&&t.push("Summary must be 100 characters long minimum"),t.length>0)return t}(e.summary);r&&(t.summary=r);var c=function(e){var t=[];if(e||t.push("Instructions are requeried"),e&&!/^.{100,}$/.test(e)&&t.push("Instructions must be 100 characters long minimum"),t.length>0)return t}(e.instructions);c&&(t.instructions=c);var a=function(e){var t=[];if(e||t.push("A image URL is requeried"),e&&!/^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-.@:%_+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g.test(e)&&t.push("The image input must contain a URL of the recipe picture"),t.length>0)return t}(e.image);a&&(t.image=a);var i=function(e){var t=[];if(e||t.push("Please select at least 1 diet type"),!e||e.length>0||t.push("Please select at least 1 diet type"),t.length>0)return t}(e.types);i&&(t.types=i);var s=function(e){var t=[];if(e||t.push("Please rate your recipe, be honest"),t.length>0)return t}(e.spoonacularScore);s&&(t.spoonacularScore=s);var o=function(e){var t=[];if(e||t.push("Please rate the healthiness of your recipe"),t.length>0)return t}(e.healthScore);return o&&(t.healthScore=o),t}var ce=[10,20,30,40,50,60,70,80,90,100],ae={title:"",summary:"",instructions:"",spoonacularScore:"",healthScore:"",image:"",types:[]};function ie(e){var t=e.setSuccess,n=e.setErrors,r=Object(o.c)((function(e){return e.typesList})),a=c.a.useState({title:"",summary:"",instructions:"",spoonacularScore:"",healthScore:"",image:"",types:[]}),i=Object(F.a)(a,2),s=i[0],u=i[1],j=c.a.useState({imagePreview:""}),d=Object(F.a)(j,2),p=d[0],b=d[1],h=function(e){u(Object(te.a)(Object(te.a)({},s),{},Object(ee.a)({},e.target.name,e.target.value)))};function O(){return(O=Object(S.a)(y.a.mark((function e(r){var c,a,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),c=re(s),0!==Object.keys(c).length){e.next=22;break}return e.prev=3,e.next=6,fetch("".concat(k),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(s)});case 6:return a=e.sent,e.next=9,a.json();case 9:if(!(i=e.sent).message){e.next=12;break}return e.abrupt("return",n([[i.message]]));case 12:return u(ae),b(Object(te.a)(Object(te.a)({},p),{},{imagePreview:""})),t("The recipe was succesfully created"),setTimeout((function(){t(!1)}),5e3),e.abrupt("return",n(!1));case 19:e.prev=19,e.t0=e.catch(3),n([[e.t0]]);case 22:return e.abrupt("return",n(Object.values(c)));case 23:case"end":return e.stop()}}),e,null,[[3,19]])})))).apply(this,arguments)}return Object(l.jsxs)("form",{id:"FormContainer",onSubmit:function(e){return O.apply(this,arguments)},children:[Object(l.jsx)("div",{id:"FLeft",children:Object(l.jsx)("span",{children:"Share your recipe"})}),Object(l.jsxs)("div",{id:"FRight",children:[Object(l.jsx)("span",{children:"Fill it!"}),Object(l.jsxs)("div",{id:"RecipeNameContainer",children:[Object(l.jsx)("label",{children:"Recipe name"}),Object(l.jsx)("input",{name:"title",onChange:h,value:s.title,placeholder:"Your recipe name..."})]}),Object(l.jsxs)("div",{id:"SummaryContainer",children:[Object(l.jsx)("label",{children:"Summary:"}),Object(l.jsx)("textarea",{name:"summary",onChange:h,value:s.summary,placeholder:"A brief description of your recipe..."})]}),Object(l.jsxs)("div",{id:"InstructionsContainer",children:[Object(l.jsx)("label",{children:"Instructions:"}),Object(l.jsx)("textarea",{name:"instructions",onChange:h,value:s.instructions,placeholder:"The steps to cook yor recipe..."})]}),Object(l.jsxs)("div",{id:"ScoreContainer",children:[Object(l.jsx)("span",{children:"Score:"}),Object(l.jsx)("div",{id:"ScoreContainerIconsContainer",children:ce.map((function(e){return Object(l.jsx)("img",{name:"spoonacularScore".concat(e),className:e<=s.spoonacularScore?"ScoreSelectedButton":void 0,onClick:function(t){return u(Object(te.a)(Object(te.a)({},s),{},{spoonacularScore:e}))},src:K,alt:"Score Icon"},e)}))})]}),Object(l.jsxs)("div",{id:"HealthinessScoreContainer",children:[Object(l.jsx)("span",{children:"Healthiness score:"}),Object(l.jsx)("div",{id:"HealthinessScoreContainerIconsContainer",children:ce.map((function(e){return Object(l.jsx)("img",{name:"healthScore".concat(e),className:e<=s.healthScore?"HealthScoreSelectedButton":void 0,onClick:function(t){return u(Object(te.a)(Object(te.a)({},s),{},{healthScore:e}))},src:Y,alt:"Health Icon"},e)}))})]}),Object(l.jsxs)("div",{id:"ImageContainer",children:[Object(l.jsx)("span",{children:"Image:"}),Object(l.jsxs)("div",{id:"ImageInputContainer",children:[Object(l.jsx)("input",{name:"image",onChange:h,value:s.image,placeholder:"URL image..."}),Object(l.jsx)("img",{name:"ImagePreviewButton",onClick:function(){b(Object(te.a)(Object(te.a)({},p),{},{imagePreview:s.image}))},src:ne,alt:"searchIcon"})]}),Object(l.jsx)("img",{src:p.imagePreview,alt:"Paste a valid URL and click the button to see the preview"})]}),Object(l.jsxs)("div",{id:"SelectContainer",children:[Object(l.jsx)("span",{children:"Select diet types:"}),Object(l.jsxs)("select",{onChange:function(e){if("-Select a diet"!==e.target.value){var t=s.types.includes(e.target.value.toLowerCase());if(t||u(Object(te.a)(Object(te.a)({},s),{},{types:[].concat(Object(J.a)(s.types),[e.target.value.toLowerCase()])})),t){var n=s.types.filter((function(t){return t!==e.target.value.toLowerCase()}));u(Object(te.a)(Object(te.a)({},s),{},{types:n}))}}e.target.selectedIndex=0},id:"FormDropDownListRecipes",name:"formSelect",children:[Object(l.jsx)("option",{value:"-Select a diet",children:"-No diet type selected"},"NoDiet"),r.map((function(e){return Object(l.jsx)("option",{value:m(e.name),children:m(e.name)},e.id)}))]}),Object(l.jsx)("ul",{children:s.types.map((function(e){return Object(l.jsx)("li",{children:m(e)})}))})]}),Object(l.jsx)("div",{id:"SubmitContainer",children:Object(l.jsx)("input",{type:"submit",value:"Send your recipe"})})]})]})}n(66),n(67);function se(e){var t=e.errors,n=e.setErrors;return Object(l.jsxs)("div",{id:"ErrorsContainer",children:[Object(l.jsx)("button",{onClick:function(){return n(!1)},children:"X"}),t.map((function(e){return Object(l.jsx)("div",{className:"ErrorTypeContainer",children:e.map((function(e){return Object(l.jsx)("span",{children:e},"e")}))})}))]})}n(68);function oe(e){var t=e.success,n=e.setSuccess;return Object(l.jsxs)("div",{id:"SuccessContainer",children:[Object(l.jsx)("button",{onClick:function(){return n(!1)},children:"X"}),Object(l.jsx)("span",{children:t})]})}function ue(){var e=Object(o.b)(),t=c.a.useState(!1),n=Object(F.a)(t,2),a=n[0],i=n[1],s=c.a.useState(!1),u=Object(F.a)(s,2),j=u[0],d=u[1];return Object(r.useEffect)((function(){e(A())})),Object(l.jsxs)("div",{id:"CreateRecipeContainer",children:[Object(l.jsx)(ie,{setSuccess:i,setErrors:d}),a&&Object(l.jsx)(oe,{success:a,setSuccess:i}),j&&Object(l.jsx)(se,{errors:j,setErrors:d})]})}var le=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u.a,{exact:!0,path:"/",component:j}),Object(l.jsx)(u.a,{path:["/home","/createRecipe","/recipes","/signUp"],component:p}),Object(l.jsx)(u.a,{exact:!0,path:"/home",component:V}),Object(l.jsx)(u.a,{path:"/home/:parameters",component:V}),Object(l.jsx)(u.a,{path:"/home/:parameters/:id",component:Q}),Object(l.jsx)(u.a,{path:"/createRecipe",component:ue})]})},je=n(21),de=n(27),pe={recipesList:[],sortedRecipesList:[],typesList:[],pages:{active:!1,recipesInPage:[],numerOfPages:0,page:0},loading:!1,searchSign:!1},be=n(28),he=Object(je.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(te.a)(Object(te.a)({},e),{},{recipesList:t.recipeName,sortedRecipesList:t.recipeName,pages:{active:!0,numerOfPages:Math.ceil(t.recipeName.length/9),page:t.page?t.page:1,recipesInPage:Math.ceil(t.recipeName.length/9)>1?t.page?t.recipeName.slice(9*(t.page-1),9*t.page):t.recipeName.slice(0,9):t.recipeName},loading:!1});case P:return Object(te.a)(Object(te.a)({},e),{},{typesList:t.payload});case I:return Object(te.a)(Object(te.a)({},e),{},{pages:Object(te.a)(Object(te.a)({},e.pages),{},{page:t.payload.page,recipesInPage:e.sortedRecipesList.slice(9*(t.payload.page-1),9*t.payload.page)}),loading:!1});case T:return Object(te.a)(Object(te.a)({},e),{},{pages:Object(te.a)(Object(te.a)({},e.pages),{},{recipesInPage:[]}),loading:!0});case D:return Object(te.a)(Object(te.a)({},e),{},{searchSign:t.payload});case w:return Object(te.a)(Object(te.a)({},e),{},{sortedRecipesList:t.payload,pages:Object(te.a)(Object(te.a)({},e.pages),{},{recipesInPage:t.payload.slice(9*(e.pages.page-1),9*e.pages.page)}),loading:!1});case N:return Object(te.a)(Object(te.a)({},e),{},{sortedRecipesList:t.payload,pages:{active:!0,numerOfPages:Math.ceil(t.payload.length/9),page:1,recipesInPage:t.payload.slice(0,9)},loading:!1});case L:return Object(te.a)(Object(te.a)({},e),{},{loading:!0});case R:return Object(te.a)(Object(te.a)({},e),{},{recipesList:[],sortedRecipesList:[],pages:{active:!1,numerOfPages:0,page:0,recipesInPage:[]},loading:!1});default:return Object(te.a)({},e)}}),Object(de.composeWithDevTools)(Object(je.applyMiddleware)(be.a))),me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(o.a,{store:he,children:Object(l.jsx)(s.a,{children:Object(l.jsx)(le,{})})})}),document.getElementById("root")),me()}]),[[69,1,2]]]);
//# sourceMappingURL=main.be92e6d4.chunk.js.map