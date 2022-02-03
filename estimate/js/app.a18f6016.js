(function(e){function t(t){for(var n,r,s=t[0],a=t[1],i=t[2],m=0,b=[];m<s.length;m++)r=s[m],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&b.push(l[r][0]),l[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],n=!0,s=1;s<c.length;s++){var a=c[s];0!==l[a]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=c[0]))}return e}var n={},l={app:0},o=[];function r(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=n,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(c,n,function(t){return e[t]}.bind(null,n));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/estimate/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var d=a;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},1162:function(e,t,c){"use strict";c("1bfd")},"1bfd":function(e,t,c){},4121:function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),l={id:"app"},o={class:"bg-light py-3"},r={class:"container"},s={class:"d-flex justify-content-between align-items-center"},a=Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("h1",{class:"mb-0 text-uppercase"},[Object(n["createTextVNode"])("Get"),Object(n["createElementVNode"])("span",{class:"text-danger"},"Estimate")]),Object(n["createElementVNode"])("h2",{class:"h6 text-dark"},"Быстрая оценка проекта")],-1),i=Object(n["createElementVNode"])("i",{class:"bi bi-gear"},null,-1),d=[i],m={class:"container py-3"},b={class:"row"},u={class:"col-xl-8"},p={class:"pt-3"},O={class:"col-xl-4"},j={class:"sticky-top py-3"};function f(e,t,c,i,f,E){var V=Object(n["resolveComponent"])("ItemForm"),g=Object(n["resolveComponent"])("ItemList"),k=Object(n["resolveComponent"])("Settings"),v=Object(n["resolveComponent"])("Results");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,[Object(n["createElementVNode"])("nav",o,[Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("div",s,[a,Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("button",{class:Object(n["normalizeClass"])(["btn",f.settings.isOpen?"btn-secondary":"btn-outline-secondary"]),title:"Настройки","aria-label":"Настройки",onClick:t[0]||(t[0]=function(e){return f.settings.isOpen=!f.settings.isOpen})},d,2)])])])]),Object(n["createElementVNode"])("div",m,[Object(n["createElementVNode"])("div",b,[Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("div",p,[Object(n["createVNode"])(V,{settings:f.settings,onCreateItem:E.createItem},null,8,["settings","onCreateItem"]),Object(n["createVNode"])(g,{settings:f.settings,items:f.items,onDeleteItem:E.deleteItem},null,8,["settings","items","onDeleteItem"])])]),Object(n["createElementVNode"])("div",O,[Object(n["createElementVNode"])("div",j,[Object(n["createVNode"])(k,{onApplySettings:E.applySettings},null,8,["onApplySettings"]),Object(n["createVNode"])(v,{settings:f.settings,items:f.items,onCleanResults:E.cleanResults},null,8,["settings","items","onCleanResults"])])])])])])}c("a434"),c("ab8b"),c("cd74");var E=function(e){return Object(n["pushScopeId"])("data-v-6bdf315c"),e=e(),Object(n["popScopeId"])(),e},V=E((function(){return Object(n["createElementVNode"])("div",{class:"card-header"},[Object(n["createElementVNode"])("h4",{class:"card-title h5 mb-1"},"Настройки:")],-1)})),g={class:"card-body"},k=E((function(){return Object(n["createElementVNode"])("h5",{class:"h6"},"Единица измерения:",-1)})),v={class:"form-check"},N=E((function(){return Object(n["createElementVNode"])("label",{class:"form-check-label",for:"settingsUnit-0"}," В часах ",-1)})),h={class:"form-check"},x=E((function(){return Object(n["createElementVNode"])("label",{class:"form-check-label",for:"settingsUnit-1"}," В рублях ",-1)})),y=E((function(){return Object(n["createElementVNode"])("hr",{class:"hr"},null,-1)})),B=E((function(){return Object(n["createElementVNode"])("h5",{class:"h6"},"Вилка оценки:",-1)})),w={class:"form-check"},_=E((function(){return Object(n["createElementVNode"])("label",{class:"form-check-label",for:"settingsFork-0"}," Одно значение ",-1)})),T={class:"form-check"},D=E((function(){return Object(n["createElementVNode"])("label",{class:"form-check-label",for:"settingsFork-1"}," Два значения (от, до) ",-1)})),C=E((function(){return Object(n["createElementVNode"])("hr",{class:"hr"},null,-1)})),M=E((function(){return Object(n["createElementVNode"])("h5",{class:"h6"},"Нумерация пунктов в результате:",-1)})),I={class:"form-check"},S=E((function(){return Object(n["createElementVNode"])("label",{class:"form-check-label",for:"settingsNumbers-0"}," Включить ",-1)})),U={class:"form-check"},F=E((function(){return Object(n["createElementVNode"])("label",{class:"form-check-label",for:"settingsNumbers-1"}," Отключить ",-1)}));function R(e,t,c,l,o,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:Object(n["normalizeClass"])([{"d-none":!o.settings.isOpen},"card bg-light mb-4"])},[V,Object(n["createElementVNode"])("div",g,[Object(n["createElementVNode"])("form",null,[Object(n["createElementVNode"])("div",null,[k,Object(n["createElementVNode"])("div",v,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{id:"settingsUnit-0",class:"form-check-input",name:"unit",type:"radio",value:0,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.settings.unit=e})},null,512),[[n["vModelRadio"],o.settings.unit]]),N]),Object(n["createElementVNode"])("div",h,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{id:"settingsUnit-1",class:"form-check-input",name:"unit",type:"radio",value:1,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.settings.unit=e})},null,512),[[n["vModelRadio"],o.settings.unit]]),x])]),y,Object(n["createElementVNode"])("div",null,[B,Object(n["createElementVNode"])("div",w,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{id:"settingsFork-0",class:"form-check-input",name:"fork",type:"radio",value:0,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.settings.fork=e})},null,512),[[n["vModelRadio"],o.settings.fork]]),_]),Object(n["createElementVNode"])("div",T,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{id:"settingsFork-1",class:"form-check-input",name:"fork",type:"radio",value:1,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.settings.fork=e})},null,512),[[n["vModelRadio"],o.settings.fork]]),D])]),C,Object(n["createElementVNode"])("div",null,[M,Object(n["createElementVNode"])("div",I,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{id:"settingsNumbers-0",class:"form-check-input",name:"numbers",type:"radio",value:1,"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.settings.numbers=e})},null,512),[[n["vModelRadio"],o.settings.numbers]]),S]),Object(n["createElementVNode"])("div",U,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{id:"settingsNumbers-1",class:"form-check-input",name:"numbers",type:"radio",value:0,"onUpdate:modelValue":t[5]||(t[5]=function(e){return o.settings.numbers=e})},null,512),[[n["vModelRadio"],o.settings.numbers]]),F])])])])],2)}var P={data:function(){return{settings:{unit:0,fork:1,numbers:1,isOpen:!1}}},created:function(){this.$emit("apply-settings",this.settings)},methods:{}},z=(c("aaec"),c("6b0d")),$=c.n(z);const A=$()(P,[["render",R],["__scopeId","data-v-6bdf315c"]]);var G=A,J=(c("a4d3"),c("e01a"),{class:"card bg-light mb-5"}),L={class:"card-body"},q={class:"row"},H=Object(n["createElementVNode"])("div",{class:"col-lg-9 pe-auto pe-lg-1"},[Object(n["createElementVNode"])("h3",{class:"mb-4 text-dark"}," Добавить новый пункт к оценке ")],-1),K={class:"col-lg-3 ps-auto ps-lg-1 text-end"},Q=Object(n["createElementVNode"])("i",{class:"bi bi-list-ul"},null,-1),W=[Q],X={class:"row"},Y={class:"col-lg-5 pe-auto pe-lg-1"},Z={class:"mb-2"},ee=Object(n["createElementVNode"])("label",{class:"form-label",for:"title"},"Название",-1),te={class:"col-lg-4 px-auto px-lg-1"},ce={class:"d-flex"},ne={class:"flex-grow-1 w-50 pe-1"},le={class:"mb-2"},oe={class:"form-label",for:"from"},re=Object(n["createTextVNode"])(" от, "),se={key:0,class:"text-muted"},ae={key:1,class:"text-muted"},ie={class:"flex-grow-1 w-50 ps-1"},de={class:"mb-2"},me={class:"form-label",for:"to"},be=Object(n["createTextVNode"])(" до, "),ue={key:0,class:"text-muted"},pe={key:1,class:"text-muted"},Oe={key:1,class:"flex-grow-1 px-lg-1"},je={class:"mb-2"},fe={class:"form-label",for:"from"},Ee=Object(n["createTextVNode"])(" оценка, "),Ve={key:0,class:"text-muted"},ge={key:1,class:"text-muted"},ke=Object(n["createElementVNode"])("div",{class:"col-lg-3 ps-auto ps-lg-1 align-self-end"},[Object(n["createElementVNode"])("div",{class:"mb-2"},[Object(n["createElementVNode"])("button",{type:"submit",class:"btn btn-dark w-100 text-nowrap"}," добавить ")])],-1),ve={class:"mb-2"},Ne=Object(n["createTextVNode"])(" не добавлять описание "),he=Object(n["createTextVNode"])(" добавить описание "),xe=Object(n["createElementVNode"])("label",{class:"form-label",for:"description"},"Описание",-1),ye={class:"mb-2"},Be=Object(n["createElementVNode"])("label",{class:"form-label",for:"plainText"},"Импортировать пункты оценки из списка",-1),we=Object(n["createElementVNode"])("div",{class:"small text-muted mb-2"}," Вставьте пункты оценки простым текстовым списком. Каждая новая строка - новый пункт оценки. ",-1),_e=Object(n["createElementVNode"])("button",{class:"btn btn-dark"}," Импорт ",-1);function Te(e,t,c,l,o,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",J,[Object(n["createElementVNode"])("div",L,[Object(n["createElementVNode"])("div",q,[H,Object(n["createElementVNode"])("div",K,[Object(n["createElementVNode"])("button",{class:Object(n["normalizeClass"])(["btn",o.importByPlainTextMode?"btn-secondary":"btn-outline-secondary"]),title:"Импорт из списка","aria-label":"Импорт из списка",onClick:t[0]||(t[0]=function(e){return o.importByPlainTextMode=!o.importByPlainTextMode})},W,2)])]),0==o.importByPlainTextMode?(Object(n["openBlock"])(),Object(n["createElementBlock"])("form",{key:0,onSubmit:t[10]||(t[10]=Object(n["withModifiers"])((function(){return r.createItem&&r.createItem.apply(r,arguments)}),["prevent"]))},[Object(n["createElementVNode"])("div",X,[Object(n["createElementVNode"])("div",Y,[Object(n["createElementVNode"])("div",Z,[ee,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",id:"title","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.title=e}),class:Object(n["normalizeClass"])(["form-control w-100",{"is-invalid":!o.isValid}]),placeholder:""},null,2),[[n["vModelText"],o.title]])])]),Object(n["createElementVNode"])("div",te,[Object(n["createElementVNode"])("div",ce,[c.settings.fork?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:0},[Object(n["createElementVNode"])("div",ne,[Object(n["createElementVNode"])("div",le,[Object(n["createElementVNode"])("label",oe,[re,c.settings.unit?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",se,"рублей")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",ae,"часов"))]),Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"number",id:"from","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.from=e}),class:"form-control w-100",min:"0",onFocus:t[3]||(t[3]=function(e){return e.target.select()})},null,544),[[n["vModelText"],o.from]])])]),Object(n["createElementVNode"])("div",ie,[Object(n["createElementVNode"])("div",de,[Object(n["createElementVNode"])("label",me,[be,c.settings.unit?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",ue,"рублей")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",pe,"часов"))]),Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"number",id:"to","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.to=e}),class:"form-control w-100",min:"0",onFocus:t[5]||(t[5]=function(e){return e.target.select()})},null,544),[[n["vModelText"],o.to]])])])],64)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Oe,[Object(n["createElementVNode"])("div",je,[Object(n["createElementVNode"])("label",fe,[Ee,c.settings.unit?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",Ve,"рублей")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",ge,"часов"))]),Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"number",id:"from","onUpdate:modelValue":t[6]||(t[6]=function(e){return o.from=e}),class:"form-control w-100",min:"0",onFocus:t[7]||(t[7]=function(e){return e.target.select()})},null,544),[[n["vModelText"],o.from]])])]))])]),ke]),Object(n["createElementVNode"])("div",ve,[Object(n["createElementVNode"])("a",{class:"text-danger",href:"javascript:void(0)",onClick:t[8]||(t[8]=function(e){return o.showDescription=!o.showDescription})},[o.showDescription?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:0},[Ne],64)):(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:1},[he],64))])]),Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])({"d-none":!o.showDescription})},[Object(n["createElementVNode"])("div",null,[xe,Object(n["withDirectives"])(Object(n["createElementVNode"])("textarea",{name:"description",id:"description","onUpdate:modelValue":t[9]||(t[9]=function(e){return o.description=e}),rows:"6",class:"form-control"},null,512),[[n["vModelText"],o.description]])])],2)],32)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("form",{key:1,onSubmit:t[12]||(t[12]=Object(n["withModifiers"])((function(){return r.importByPlainText&&r.importByPlainText.apply(r,arguments)}),["prevent"]))},[Object(n["createElementVNode"])("div",ye,[Be,Object(n["withDirectives"])(Object(n["createElementVNode"])("textarea",{id:"plainText","onUpdate:modelValue":t[11]||(t[11]=function(e){return o.plainText=e}),class:"form-control",cols:"30",rows:"10"},null,512),[[n["vModelText"],o.plainText]]),we]),_e],32))])])}c("ac1f"),c("1276"),c("498a");var De={data:function(){return{title:"",from:0,to:0,description:"",isValid:!0,showDescription:!1,plainText:"",importByPlainTextMode:!1}},props:["settings"],emits:["createItem","create-item","onCreate-item"],methods:{createItem:function(){var e=this.title,t=this.from,c=this.to,n=this.description,l="",o=!1;this["showDescription"]&&n&&(l=n,o=!0);var r={title:e,from:t||0,to:c||0,description:l,isValid:!0,showDescription:o,isExclude:!1};r.title?(this.$emit("create-item",r),this["isValid"]=!0,this["title"]="",this["from"]=0,this["to"]=0,this["description"]=""):this["isValid"]=!1,document.getElementById("title").focus()},importByPlainText:function(){for(var e=this.plainText,t=e.split(/\r?\n/),c=0;c<t.length;c++)if(t[c]=t[c].trim(),""!=t[c]){var n={title:t[c],from:0,to:0,description:"",isValid:!0,showDescription:!1,isExclude:!1};this.$emit("create-item",n)}this.plainText="",this["importByPlainTextMode"]=!1}}};const Ce=$()(De,[["render",Te]]);var Me=Ce,Ie={key:0,class:"p-0"},Se={class:"card-body"},Ue={class:"row"},Fe={class:"col-lg-5 pe-auto pe-lg-1"},Re={class:"mb-2"},Pe=["for"],ze=["id","onUpdate:modelValue","disabled"],$e={class:"col-lg-3 px-auto px-lg-1"},Ae={class:"d-flex"},Ge={class:"flex-grow-1 w-50 pe-1"},Je={class:"mb-2"},Le=["for"],qe=Object(n["createTextVNode"])(" от, "),He={key:0,class:"text-muted"},Ke={key:1,class:"text-muted"},Qe=["id","onUpdate:modelValue","disabled"],We={class:"flex-grow-1 w-50 ps-1"},Xe={class:"mb-2"},Ye=["for"],Ze=Object(n["createTextVNode"])(" до, "),et={key:0,class:"text-muted"},tt={key:1,class:"text-muted"},ct=["id","onUpdate:modelValue","disabled"],nt={key:1,class:"flex-grow-1 px-lg-1"},lt={class:"mb-2"},ot=["for"],rt=Object(n["createTextVNode"])(" оценка, "),st={key:0,class:"text-muted"},at={key:1,class:"text-muted"},it=["id","onUpdate:modelValue","disabled"],dt={class:"col-lg-4 ps-auto ps-lg-1 align-self-end"},mt={class:"mb-2"},bt={class:"d-flex"},ut={class:"flex-grow-1 w-50 pe-1"},pt=["onClick"],Ot=Object(n["createTextVNode"])(" учитывать "),jt=Object(n["createTextVNode"])(" не учитывать "),ft={class:"flex-grow-1 w-50 ps-1"},Et=["onClick","disabled"],Vt={class:"mb-2"},gt=["onClick"],kt=Object(n["createTextVNode"])(" скрыть описание "),vt=Object(n["createTextVNode"])(" добавить описание "),Nt=["for"],ht=["id","onUpdate:modelValue"];function xt(e,t,c,l,o,r){var s=Object(n["resolveComponent"])("draggable");return c.items.length>0?(Object(n["openBlock"])(),Object(n["createElementBlock"])("ul",Ie,[Object(n["createVNode"])(s,{list:c.items,onStart:t[3]||(t[3]=function(e){return o.drag=!0}),onEnd:t[4]||(t[4]=function(e){return o.drag=!1}),"item-key":"id"},{item:Object(n["withCtx"])((function(e){var l=e.element,o=e.index;return[Object(n["createElementVNode"])("li",{class:Object(n["normalizeClass"])(["card mb-3",{"bg-light":l.isExclude}]),id:"index"},[Object(n["createElementVNode"])("div",Se,[Object(n["createElementVNode"])("div",Ue,[Object(n["createElementVNode"])("div",Fe,[Object(n["createElementVNode"])("div",Re,[Object(n["createElementVNode"])("label",{class:"form-label",for:"title-"+o},"Название",8,Pe),Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",id:"title-"+o,class:"form-control w-100","onUpdate:modelValue":function(e){return l.title=e},disabled:1==l.isExclude,placeholder:""},null,8,ze),[[n["vModelText"],l.title]])])]),Object(n["createElementVNode"])("div",$e,[Object(n["createElementVNode"])("div",Ae,[c.settings.fork?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:0},[Object(n["createElementVNode"])("div",Ge,[Object(n["createElementVNode"])("div",Je,[Object(n["createElementVNode"])("label",{class:"form-label",for:"from-"+o},[qe,c.settings.unit?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",He,"рублей")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",Ke,"часов"))],8,Le),Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"number",id:"from-"+o,class:"form-control w-100","onUpdate:modelValue":function(e){return l.from=e},disabled:1==l.isExclude,min:"0",onFocus:t[0]||(t[0]=function(e){return e.target.select()})},null,40,Qe),[[n["vModelText"],l.from]])])]),Object(n["createElementVNode"])("div",We,[Object(n["createElementVNode"])("div",Xe,[Object(n["createElementVNode"])("label",{class:"form-label",for:"to-"+o},[Ze,c.settings.unit?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",et,"рублей")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",tt,"часов"))],8,Ye),Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"number",id:"to-"+o,"onUpdate:modelValue":function(e){return l.to=e},class:"form-control w-100",disabled:1==l.isExclude,min:"0",onFocus:t[1]||(t[1]=function(e){return e.target.select()})},null,40,ct),[[n["vModelText"],l.to]])])])],64)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",nt,[Object(n["createElementVNode"])("div",lt,[Object(n["createElementVNode"])("label",{class:"form-label",for:"from-"+o},[rt,c.settings.unit?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",st,"рублей")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",at,"часов"))],8,ot),Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"number",id:"from-"+o,class:"form-control w-100","onUpdate:modelValue":function(e){return l.from=e},disabled:1==l.isExclude,min:"0",onFocus:t[2]||(t[2]=function(e){return e.target.select()})},null,40,it),[[n["vModelText"],l.from]])])]))])]),Object(n["createElementVNode"])("div",dt,[Object(n["createElementVNode"])("div",mt,[Object(n["createElementVNode"])("div",bt,[Object(n["createElementVNode"])("div",ut,[Object(n["createElementVNode"])("button",{onClick:function(e){return l.isExclude=!l.isExclude},class:"btn btn-secondary w-100 px-1 text-nowrap"},[l.isExclude?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:0},[Ot],64)):(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:1},[jt],64))],8,pt)]),Object(n["createElementVNode"])("div",ft,[Object(n["createElementVNode"])("button",{onClick:function(e){return r.deleteItem(o)},disabled:1==l.isExclude,class:"btn btn-danger w-100 text-nowrap"},"удалить",8,Et)])])])])]),Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("div",Vt,[Object(n["createElementVNode"])("a",{class:"text-danger",href:"javascript:void(0)",onClick:function(e){return l.showDescription=!l.showDescription}},[l.showDescription?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:0},[kt],64)):(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:1},[vt],64))],8,gt)]),Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])({"d-none":!l.showDescription})},[Object(n["createElementVNode"])("label",{class:"form-label",for:"description-"+o},"Описание",8,Nt),Object(n["withDirectives"])(Object(n["createElementVNode"])("textarea",{id:"description-"+o,rows:"6",class:"form-control","onUpdate:modelValue":function(e){return l.description=e}},null,8,ht),[[n["vModelText"],l.description]])],2)])])],2)]})),_:1},8,["list"])])):Object(n["createCommentVNode"])("",!0)}var yt=c("b76a"),Bt=c.n(yt),wt={props:["items","settings"],emits:["deleteItem","delete-item","onDelete-item"],data:function(){return{drag:!1}},components:{draggable:Bt.a},methods:{deleteItem:function(e){this.$emit("delete-item",e)}}};c("a745");const _t=$()(wt,[["render",xt],["__scopeId","data-v-f8f6d5d0"]]);var Tt=_t,Dt=function(e){return Object(n["pushScopeId"])("data-v-f64c490c"),e=e(),Object(n["popScopeId"])(),e},Ct={class:"card bg-light"},Mt={key:0,class:"card-header"},It={class:"mb-2"},St={class:"text-muted"},Ut=Object(n["createTextVNode"])(" Итого по оценке: "),Ft={key:2,class:"text-muted"},Rt={key:3,class:"text-muted"},Pt={class:"d-flex"},zt={class:"card-body"},$t=Dt((function(){return Object(n["createElementVNode"])("h4",{class:"card-title h6"},"Результат:",-1)})),At={class:"mb-2"},Gt={key:0,class:"text-muted"},Jt={key:2,class:"text-muted"},Lt={key:3,class:"text-muted"},qt={key:1,class:"text-muted"};function Ht(e,t,c,l,o,r){var s=Object(n["resolveComponent"])("draggable");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Ct,[c.items.length>0?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Mt,[Object(n["createElementVNode"])("div",It,[Object(n["createElementVNode"])("strong",St,[Ut,c.settings.fork?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:0},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(r.sum("from"))+" - "+Object(n["toDisplayString"])(r.sum("to")),1)],64)):(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:1},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(r.sum("from")),1)],64)),c.settings.unit?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",Ft," рублей")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",Rt," часов"))])]),Object(n["createElementVNode"])("div",Pt,[Object(n["createElementVNode"])("button",{class:"btn btn-dark me-1",onClick:t[0]||(t[0]=function(e){return r.copyResult(c.settings)})}," Копировать "),Object(n["createElementVNode"])("button",{class:"btn btn-danger ms-1",onClick:t[1]||(t[1]=function(){return r.deleteResult&&r.deleteResult.apply(r,arguments)})}," Очистить ")]),Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])(["text-muted",""==o.copyResultMessage?"":"mt-2"])},Object(n["toDisplayString"])(o.copyResultMessage),3)])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",zt,[$t,c.items.length>0?(Object(n["openBlock"])(),Object(n["createElementBlock"])("ol",{key:0,class:Object(n["normalizeClass"])(["mb-0",c.settings.numbers?"ps-3":"list-unstyled"])},[Object(n["createVNode"])(s,{list:c.items,onStart:t[2]||(t[2]=function(e){return o.drag=!0}),onEnd:t[3]||(t[3]=function(e){return o.drag=!1}),"item-key":"id"},{item:Object(n["withCtx"])((function(e){var t=e.element;return[Object(n["createElementVNode"])("li",At,[Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])(t.isExclude?"text-decoration-line-through":"")},[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(t.title),1),t.showDescription?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Gt,Object(n["toDisplayString"])(t.description),1)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",null,[c.settings.fork?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:0},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.from)+" - "+Object(n["toDisplayString"])(t.to),1)],64)):(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:1},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.from),1)],64)),c.settings.unit?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",Jt," рублей")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",Lt," часов"))])],2)])]})),_:1},8,["list"])],2)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",qt," Пока ничего нет "))])])}var Kt={data:function(){return{copyResultMessage:"",drag:!1}},props:["items","settings"],components:{draggable:Bt.a},methods:{sum:function(e){for(var t=0,c=0,n=this["items"].length;c<n;c++)!1===this["items"][c]["isExclude"]&&(t+=parseInt(this["items"][c][e]));return t},copyResult:function(e){for(var t=e.unit?"рублей":"часов",c="",n=0,l=0;l<this["items"].length;l++){var o=this["items"][l];o["isExclude"]||(e.numbers&&(n++,c+=n+". "),c+=o["title"]+"\n",o["description"]&&(c+="Описание: "+o["description"]+"\n"),e.fork?c+=o["from"]+" - "+o["to"]+" "+t+" \n":c+=o["from"]+" "+t+" \n",c+="\n")}c+="\n",e.fork?c+="Итого по оценке: "+this.sum("from")+" - "+this.sum("to")+" "+t:c+="Итого по оценке: "+this.sum("from")+" "+t,c+="\n",c+="\n",c+="\n",c+="__________________________________________________________\n",c+="Оценка составлена с помощью проекта GetEstimate\n",c+="https://dimadroog.github.io/estimate/",navigator.clipboard.writeText(c),this["copyResultMessage"]="Результат скопирован в буфер обмена",setTimeout((function(e){e["copyResultMessage"]=""}),3e3,this)},deleteResult:function(){confirm("Действительно хотите очистить данные?")&&this.$emit("clean-results")}}};c("1162");const Qt=$()(Kt,[["render",Ht],["__scopeId","data-v-f64c490c"]]);var Wt=Qt,Xt={name:"app",data:function(){return{items:[],settings:{}}},components:{Settings:G,ItemForm:Me,ItemList:Tt,Results:Wt},methods:{createItem:function(e){this.items.push(e)},deleteItem:function(e){this.items.splice(e,1)},cleanResults:function(){this.items=[]},applySettings:function(e){this.settings=e}}};const Yt=$()(Xt,[["render",f]]);var Zt=Yt;Object(n["createApp"])(Zt).mount("#app")},a745:function(e,t,c){"use strict";c("4121")},aaec:function(e,t,c){"use strict";c("f825")},f825:function(e,t,c){}});
//# sourceMappingURL=app.a18f6016.js.map