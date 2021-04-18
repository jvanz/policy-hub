(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{52:function(e){e.exports=JSON.parse('[{"name":"psp-apparmor","description":"A Pod Security Policy that controls usage of AppArmor profiles","homepage":"https://github.com/kubewarden/psp-apparmor","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-apparmor:v0.1.1","url":"https://github.com/kubewarden/psp-apparmor/releases/download/v0.1.1/policy.wasm"},"keywords":["PSP","AppArmor"],"resources":["Pod"],"mutation":false},{"name":"safe-lables","description":"A policy that validates Kubernetes\' resource labels","homepage":"https://github.com/kubewarden/safe-labels-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/safe-labels:v0.1.2","url":"https://github.com/kubewarden/safe-labels-policy/releases/download/v0.1.2/policy.wasm"},"keywords":["Labels"],"resources":["*"],"mutation":false}]')},62:function(e,t,r){},63:function(e,t,r){},83:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),a=r(5),i=r.n(a),c=(r(62),r(26)),o=r(43),l=r(44),d=r(55),u=r(53),h=(r(63),r(54)),p=r(2);function b(e){var t=e.text,r=e.highlight,n=t.toLocaleLowerCase().indexOf(r.toLocaleLowerCase());if(n<0)return Object(p.jsx)("span",{children:t},"hl");var s=t.substring(0,n),a=t.substring(n,n+r.length),i=t.substring(n+r.length,t.length);return s=s?Object(p.jsx)("span",{children:s},"m1"):null,a=a?Object(p.jsx)("span",{style:{borderRadius:"2px"},children:Object(p.jsx)("mark",{children:a})},"m2"):null,i=i?Object(p.jsx)("span",{children:i},"m3"):null,Object(p.jsxs)("span",{children:[s,a,i]},"hl")}var j=r(49),m=r.n(j),O=r(48),x=r.n(O),f=r(50),y=r.n(f),g=r(51),w=r.n(g),v=r(37),k=r.n(v),S=r(45),C=r(47),N=r.n(C),F=r(101),R=function(e){var t=Object(n.useState)(!1),r=Object(h.a)(t,2),s=r[0],a=r[1],i=e.policy;return Object(p.jsxs)("article",{children:[Object(p.jsx)("div",{className:"name text-bold",children:i.name}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("div",{className:"text-description",children:Object(p.jsx)(b,{text:i.description,highlight:e.descriptionCriteria})}),i.download.registry?Object(p.jsxs)("div",{className:"registry-wrapper",children:[Object(p.jsx)("div",{className:"text-light text-tiny text-label",children:"REGISTRY"}),Object(p.jsx)("code",{className:"text-smaller",children:i.download.registry}),Object(p.jsx)(S.CopyToClipboard,{text:i.download.registry,onCopy:function(){return a(!0),void setTimeout((function(){a(!1)}),1500)},children:Object(p.jsx)(F.a,{title:s?"Copied!":"Copy registry",arrow:!0,children:Object(p.jsx)("button",{id:"copy-registry",className:"text-small button-link",children:Object(p.jsx)(N.a,{})})})})]}):null,Object(p.jsxs)("div",{className:"links-wrapper",children:[Object(p.jsxs)("a",{className:"text-smaller link",href:i.homepage,target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)(x.a,{}),"Homepage"]}),Object(p.jsx)(F.a,{title:"Author",arrow:!0,children:i.author.homepage?Object(p.jsxs)("a",{className:"text-smaller link",href:i.author.homepage,target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)(k.a,{}),i.author.name]}):Object(p.jsxs)("span",{className:"text-smaller not-a-real-link",children:[Object(p.jsx)(k.a,{}),i.author.name]})}),i.download.url?Object(p.jsxs)("a",{className:"text-smaller link download",href:i.download.url,rel:"noopener noreferrer",children:[Object(p.jsx)(m.a,{}),"Download Policy"]}):null]}),Object(p.jsxs)("aside",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{className:"text-light text-tiny text-label",children:"RESOURCES"}),i.resources.map((function(t,r){return Object(p.jsx)(F.a,{title:"Filter by this resource",arrow:!0,children:Object(p.jsxs)("button",{className:"badge resource text-small",onClick:function(){return e.additionalResourceFilter(t)},children:[t,r<i.resources.length-1?Object(p.jsx)("span",{children:",\xa0"}):null]})},i.name+"-"+t)}))]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{className:"text-light text-tiny text-label",children:"KEYWORDS"}),i.keywords.map((function(t,r){return Object(p.jsx)(F.a,{title:"Filter by this keyword",arrow:!0,children:Object(p.jsxs)("button",{className:"badge keyword text-small",onClick:function(){return e.additionalKeywordFilter(t)},children:[t,r<i.keywords.length-1?Object(p.jsx)("span",{children:",\xa0"}):null]})},i.name+"-"+t)}))]}),Object(p.jsx)("div",{className:"not-a-real-link mutation",children:Object(p.jsx)(F.a,{arrow:!0,title:i.mutation?"Validation + Mutation Policy":"Validation Policy",children:Object(p.jsxs)("div",{children:[Object(p.jsx)(y.a,{color:"primary"}),i.mutation?Object(p.jsx)(w.a,{color:"secondary"}):null]})})})]})]})]})},K=r(38),P=r(52),A=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).state={descriptionCriteria:"",dataSet:P,resourcesOptionsSelected:[],keywordsOptionsSelected:[]},n}return Object(l.a)(r,[{key:"getDistinctSetOfResources",value:function(){var e=[];return this.state.dataSet.forEach((function(t){var r;return e=(r=e).concat.apply(r,Object(c.a)(t.resources))})),Array.from(new Set(e))}},{key:"getDistinctSetOfKeywords",value:function(){var e=[];return this.state.dataSet.forEach((function(t){var r;return e=(r=e).concat.apply(r,Object(c.a)(t.keywords))})),Array.from(new Set(e))}},{key:"additionalResourceFilter",value:function(e){var t={value:e,label:e},r=this.state.resourcesOptionsSelected;r.map((function(e){return e.value})).includes(e)||this.setState({resourcesOptionsSelected:r.concat(t)})}},{key:"additionalKeywordFilter",value:function(e){var t={value:e,label:e},r=this.state.keywordsOptionsSelected;r.map((function(e){return e.value})).includes(e)||this.setState({keywordsOptionsSelected:r.concat(t)})}},{key:"onResourcesFilterChange",value:function(e){this.setState({resourcesOptionsSelected:e})}},{key:"onKeywordsFilterChange",value:function(e){this.setState({keywordsOptionsSelected:e})}},{key:"onDescriptionFilterChange",value:function(e){var t=e.target.value;this.setState({descriptionCriteria:t})}},{key:"filter",value:function(){var e=this,t=this.state.dataSet?this.state.dataSet.filter((function(t){return t.description.toLowerCase().includes(e.state.descriptionCriteria.toLowerCase())})):[];return t=this.state.resourcesOptionsSelected.length>0?t.filter((function(t){return e.state.resourcesOptionsSelected.map((function(e){return e.value})).every((function(e){return t.resources.includes(e)}))})):t,t=this.state.keywordsOptionsSelected.length>0?t.filter((function(t){return e.state.keywordsOptionsSelected.map((function(e){return e.value})).every((function(e){return t.keywords.includes(e)}))})):t}},{key:"render",value:function(){var e=this,t=[];this.getDistinctSetOfResources().forEach((function(e){t=[].concat(Object(c.a)(t),[{value:e,label:e}])}));var r=[];return this.getDistinctSetOfKeywords().forEach((function(e){r=[].concat(Object(c.a)(r),[{value:e,label:e}])})),Object(p.jsxs)("div",{className:"Hub",children:[Object(p.jsxs)("header",{className:"Hub-header",children:[Object(p.jsx)("a",{href:"/",className:"header-homepage",rel:"noopener noreferrer",children:"Policy Hub"}),Object(p.jsxs)("div",{className:"filters-wrapper",children:[Object(p.jsx)("div",{className:"filter-box filter-description",children:Object(p.jsx)("input",{name:"filter-description",onChange:function(t){return e.onDescriptionFilterChange(t)},placeholder:"Filter by description"},"filter-description")}),Object(p.jsx)("div",{className:"filter-box resources-select-container",children:Object(p.jsx)(K.a,{value:this.state.resourcesOptionsSelected,onChange:function(t){return e.onResourcesFilterChange(t)},options:t,isMulti:!0,placeholder:"Filter by resources"})}),Object(p.jsx)("div",{className:"filter-box keywords-select-container",children:Object(p.jsx)(K.a,{value:this.state.keywordsOptionsSelected,onChange:function(t){return e.onKeywordsFilterChange(t)},options:r,isMulti:!0,placeholder:"Filter by keywords"})})]})]}),Object(p.jsx)("section",{children:this.filter().map((function(t){return Object(p.jsx)(R,{policy:t,descriptionCriteria:e.state.descriptionCriteria,additionalResourceFilter:function(t){return e.additionalResourceFilter(t)},additionalKeywordFilter:function(t){return e.additionalKeywordFilter(t)}},t.name)}))})]})}}]),r}(n.Component),D=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,103)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root")),D()}},[[83,1,2]]]);
//# sourceMappingURL=main.4a4250c1.chunk.js.map