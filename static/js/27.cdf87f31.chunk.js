(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[27],{101:function(e,t,i){"use strict";var r=i(2),c=function(){return(c=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var c in t=arguments[i])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)};var n=function(e){var t=e.animate,i=e.backgroundColor,n=e.backgroundOpacity,a=e.baseUrl,s=e.children,o=e.foregroundColor,l=e.foregroundOpacity,d=e.gradientRatio,u=e.uniqueKey,b=e.interval,j=e.rtl,m=e.speed,O=e.style,f=e.title,h=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(i[r[c]]=e[r[c]])}return i}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),g=u||Math.random().toString(36).substring(6),v=g+"-diff",p=g+"-animated-diff",y=g+"-aria",x=j?{transform:"scaleX(-1)"}:null,C="0; "+b+"; 1",N=m+"s";return Object(r.createElement)("svg",c({"aria-labelledby":y,role:"img",style:c(c({},O),x)},h),f?Object(r.createElement)("title",{id:y},f):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+a+"#"+v+")",style:{fill:"url("+a+"#"+p+")"}}),Object(r.createElement)("defs",null,Object(r.createElement)("clipPath",{id:v},s),Object(r.createElement)("linearGradient",{id:p},Object(r.createElement)("stop",{offset:"0%",stopColor:i,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:C,dur:N,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:l},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:C,dur:N,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:i,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:C,dur:N,repeatCount:"indefinite"})))))};n.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var a=function(e){return e.children?Object(r.createElement)(n,c({},e)):Object(r.createElement)(s,c({},e))},s=function(e){return Object(r.createElement)(a,c({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=a},123:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var r=i(89);function c(e,t){var i;if(void 0===t){var c,n=Object(r.a)(e);try{for(n.s();!(c=n.n()).done;){var a=c.value;null!=a&&(i>a||void 0===i&&a>=a)&&(i=a)}}catch(u){n.e(u)}finally{n.f()}}else{var s,o=-1,l=Object(r.a)(e);try{for(l.s();!(s=l.n()).done;){var d=s.value;null!=(d=t(d,++o,e))&&(i>d||void 0===i&&d>=d)&&(i=d)}}catch(u){l.e(u)}finally{l.f()}}return i}},660:function(e,t,i){"use strict";i.r(t);var r=i(116),c=i(37),n=i(101),a=i(18),s=function(){var e=window.innerWidth,t=e>769?480:e,i=1200;return Object(a.jsxs)(n.a,{viewBox:"0 0 ".concat(t," ").concat(i),height:i,width:t,speed:2,children:[Object(a.jsx)("circle",{cx:.4*t,cy:600,r:"5"}),Object(a.jsx)("circle",{cx:.5*t,cy:600,r:"5"}),Object(a.jsx)("circle",{cx:.6*t,cy:600,r:"5"})]})},o=i(6),l=i(113),d=i(29),u=i(90),b=i(85),j=i.n(b),m=i(123),O=i(59),f=i(70),h=i(83),g=i.n(h),v=i(2),p=i(722),y=i(631),x=i(714),C=Object(v.lazy)((function(){return Promise.all([i.e(1),i.e(2),i.e(22)]).then(i.bind(null,698))})),N=Object(v.lazy)((function(){return Promise.all([i.e(1),i.e(2),i.e(21),i.e(41)]).then(i.bind(null,699))}));function k(e){var t,i=this,n=e.stateCode,b=e.timeseries,h=e.date,g=e.regionHighlighted,k=e.setRegionHighlighted,E=e.anchor,w=e.setAnchor,S=e.expandTable,M=void 0!==S&&S,P=e.hideVaccinated,T=void 0!==P&&P,U=Object(p.a)().t,H=Object(y.a)("timeseriesLookbackDays",90),A=Object(c.a)(H,2),R=A[0],B=A[1],L=Object(y.a)("chartType","total"),I=Object(c.a)(L,2),J=I[0],D=I[1],q=Object(y.a)("isUniform",!1),F=Object(c.a)(q,2),V=F[0],z=F[1],K=Object(y.a)("isLog",!1),G=Object(c.a)(K,2),W=G[0],X=G[1],Q=Object(y.a)("isMovingAverage",!1),Y=Object(c.a)(Q,2),Z=Y[0],$=Y[1],_=Object.keys((null===b||void 0===b||null===(t=b[n])||void 0===t?void 0:t.dates)||{}),ee=_[0]||h||Object(d.g)(),te=Object(m.a)([_[_.length-1],h||Object(d.g)()]),ie=Object(v.useState)(te),re=Object(c.a)(ie,2),ce=re[0],ne=re[1];Object(v.useEffect)((function(){ne(te)}),[te]);var ae=null!==R?Object(O.a)(Object(f.a)(Object(d.k)(ce),R),{representation:"date"}):ee,se=Object(v.useRef)(),oe=Object(l.a)(se,{once:!0}),le=Object(x.a)().width,de=Object(v.useMemo)((function(){var e;return(null===b||void 0===b||null===(e=b[g.stateCode])||void 0===e?void 0:e.districts)?{stateCode:g.stateCode,districtName:g.districtName}:{stateCode:g.stateCode,districtName:null}}),[b,g.stateCode,g.districtName]),ue=Object(v.useMemo)((function(){var e,t,i,r;return de.districtName?null===b||void 0===b||null===(e=b[de.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(i=t[de.districtName])||void 0===i?void 0:i.dates:null===b||void 0===b||null===(r=b[de.stateCode])||void 0===r?void 0:r.dates}),[b,de.stateCode,de.districtName]),be=Object(v.useMemo)((function(){var e=Object.keys(b||{}).filter((function(e){return e!==n})).sort((function(e,t){return o.u[e].localeCompare(o.u[t])})).map((function(e){return{stateCode:e,districtName:null}})),t=Object.keys(b||{}).reduce((function(e,t){var i;return[].concat(Object(r.a)(e),Object(r.a)(Object.keys((null===b||void 0===b||null===(i=b[t])||void 0===i?void 0:i.districts)||{}).reduce((function(e,i){return[].concat(Object(r.a)(e),[{stateCode:t,districtName:i}])}),[])))}),[]);return[{stateCode:n,districtName:null}].concat(Object(r.a)(e),Object(r.a)(t))}),[b,n]),je=Object(v.useMemo)((function(){return be.find((function(e){return e.stateCode===g.stateCode&&e.districtName===g.districtName}))?be:[].concat(Object(r.a)(be),[{stateCode:g.stateCode,districtName:g.districtName}])}),[g.stateCode,g.districtName,be]),me=Object(v.useMemo)((function(){return Object.keys(ue||{}).filter((function(e){return e<=te}))}),[ue,te]),Oe=Object(v.useMemo)((function(){return me.filter((function(e){return ae<=e&&e<=ce}))}),[me,ae,ce]),fe=Object(v.useCallback)((function(e){var t=e.target;k(JSON.parse(t.value))}),[k]),he=Object(v.useCallback)((function(){k({stateCode:n,districtName:null})}),[n,k]),ge=Object(v.useMemo)((function(){return o.C.filter((function(e){return("vaccinated"!==e||!T)&&("delta"===J||"tpr"!==e)}))}),[J,T]);return Object(a.jsxs)("div",{className:j()("TimeseriesExplorer fadeInUp",{stickied:"timeseries"===E},{expanded:M}),style:{display:E&&"timeseries"!==E&&(!M||le<769)?"none":""},ref:se,children:[Object(a.jsxs)("div",{className:"timeseries-header",children:[Object(a.jsx)("div",{className:j()("anchor","fadeInUp",{stickied:"timeseries"===E}),style:{display:M&&le>769?"none":""},onClick:w&&w.bind(this,"timeseries"===E?null:"timeseries"),children:Object(a.jsx)(u.o,{})}),Object(a.jsx)("h1",{children:U("Spread Trends")}),Object(a.jsx)("div",{className:"tabs",children:Object.entries(o.A).map((function(e,t){var r=Object(c.a)(e,2),n=r[0],s=r[1];return Object(a.jsx)("div",{className:"tab ".concat(J===n?"focused":""),onClick:D.bind(i,n),children:Object(a.jsx)("h4",{children:U(s)})},n)}))}),Object(a.jsxs)("div",{className:"timeseries-options",children:[Object(a.jsxs)("div",{className:"scale-modes",children:[Object(a.jsx)("label",{className:"main",children:"".concat(U("Scale Modes"),":")}),Object(a.jsxs)("div",{className:"timeseries-mode",children:[Object(a.jsx)("label",{htmlFor:"timeseries-mode",children:U("Uniform")}),Object(a.jsx)("input",{id:"timeseries-mode",type:"checkbox",className:"switch",checked:V,"aria-label":U("Checked by default to scale uniformly."),onChange:z.bind(this,!V)})]}),Object(a.jsxs)("div",{className:"timeseries-mode ".concat("total"!==J?"disabled":""),children:[Object(a.jsx)("label",{htmlFor:"timeseries-logmode",children:U("Logarithmic")}),Object(a.jsx)("input",{id:"timeseries-logmode",type:"checkbox",checked:"total"===J&&W,className:"switch",disabled:"total"!==J,onChange:X.bind(this,!W)})]})]}),Object(a.jsxs)("div",{className:"timeseries-mode ".concat("total"===J?"disabled":""," moving-average"),children:[Object(a.jsx)("label",{htmlFor:"timeseries-moving-average",children:U("7 day Moving Average")}),Object(a.jsx)("input",{id:"timeseries-moving-average",type:"checkbox",checked:"delta"===J&&Z,className:"switch",disabled:"delta"!==J,onChange:$.bind(this,!Z)})]})]})]}),je&&Object(a.jsxs)("div",{className:"state-selection",children:[Object(a.jsx)("div",{className:"dropdown",children:Object(a.jsx)("select",{value:JSON.stringify(de),onChange:fe,children:je.filter((function(e){return o.u[e.stateCode]!==e.districtName})).map((function(e){return Object(a.jsx)("option",{value:JSON.stringify(e),children:e.districtName?U(e.districtName):U(o.u[e.stateCode])},"".concat(e.stateCode,"-").concat(e.districtName))}))})}),Object(a.jsx)("div",{className:"reset-icon",onClick:he,children:Object(a.jsx)(u.q,{})})]}),oe&&Object(a.jsxs)(v.Suspense,{fallback:Object(a.jsx)(s,{}),children:[Object(a.jsx)(C,{timeseries:ue,regionHighlighted:de,dates:Oe,statistics:ge,endDate:te,chartType:J,isUniform:V,isLog:W,isMovingAverage:Z}),Object(a.jsx)(N,{timeseries:ue,regionHighlighted:de,currentBrushSelection:[ae,ce],animationIndex:ge.length,dates:me,endDate:te,lookback:R,setBrushSelectionEnd:ne,setLookback:B})]}),!oe&&Object(a.jsx)("div",{style:{height:"50rem"}}),Object(a.jsx)("div",{className:"pills fadeInUp",style:{animationDelay:"".concat(250*(1+ge.length),"ms")},children:o.B.map((function(e){return Object(a.jsx)("button",{type:"button",className:j()({selected:e===R}),onClick:B.bind(i,e),children:null!==e?"".concat(e," ").concat(U("days")):U("Beginning")},e)}))})]})}var E=function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!g()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!g()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!g()(t.date,e.date)&&(!!g()(t.anchor,e.anchor)&&(!!g()(t.expandTable,e.expandTable)&&!!g()(t.hideVaccinated,e.hideVaccinated)))))))};t.default=Object(v.memo)(k,E)},83:function(e,t,i){"use strict";e.exports=function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var r,c,n;if(Array.isArray(t)){if((r=t.length)!=i.length)return!1;for(c=r;0!==c--;)if(!e(t[c],i[c]))return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((r=(n=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(c=r;0!==c--;)if(!Object.prototype.hasOwnProperty.call(i,n[c]))return!1;for(c=r;0!==c--;){var a=n[c];if(!e(t[a],i[a]))return!1}return!0}return t!==t&&i!==i}}}]);
//# sourceMappingURL=27.cdf87f31.chunk.js.map