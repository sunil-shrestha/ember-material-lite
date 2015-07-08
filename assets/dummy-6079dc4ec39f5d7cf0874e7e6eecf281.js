define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,r){"use strict";var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),n["default"](d,r["default"].modulePrefix),e["default"]=d}),define("dummy/blueprints/ember-material-lite",["exports","ember-material-lite/blueprints/ember-material-lite"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/code-snippet",["exports","ember","dummy/snippets"],function(e,t,a){"use strict";var n=require("highlight.js");e["default"]=t["default"].Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e;for(var t,a,n=e.split("\n"),r=0;r<n.length;r++)t=/^\s*/.exec(n[r]),t&&("undefined"==typeof a||a>t[0].length)&&(a=t[0].length);return"undefined"!=typeof a&&a>0&&(e=e.replace(new RegExp("(\\n|^)\\s{"+a+"}","g"),"$1")),e},source:t["default"].computed("name",function(){return this._unindent((a["default"][this.get("name")]||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){n.highlightBlock(this.get("element"))},language:t["default"].computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"));if(e)switch(e[1].toLowerCase()){case"js":return"javascript";case"hbs":return"handlebars";case"css":return"css";case"scss":return"scss"}})})}),define("dummy/components/mdl-button",["exports","ember-material-lite/components/mdl-button"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/mdl-icon",["exports","ember-material-lite/components/mdl-icon"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/x-example",["exports","ember","ember-new-computed"],function(e,t,a){"use strict";var n=t["default"].computed,r=n.empty;n.alias;e["default"]=t["default"].Component.extend({emptySnippet:r("snippet"),exampleFrameClass:"mdl-cell mdl-cell--12-col",partialName:a["default"]("snippet",{get:function(){return"snippets/"+(this.get("snippet")||"none")}}),snippetName:a["default"]("snippet",{get:function(){return(this.get("snippet")||"none")+".hbs"}}),send:function(){var e;(e=this.get("targetObject")).send.apply(e,arguments)}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e,d){if(!r){var i=n(d.toString());a["default"].libraries.register(i,t["default"].APP.version),r=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";function n(e,n){var r=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[r]&&(window[r]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){this.route("badges"),this.route("buttons")}),e["default"]=n}),define("dummy/snippets",["exports"],function(e){"use strict";e["default"]={"mdl-badge-basic.hbs":"{{mdl-icon badge='6' icon='account_box'}}","mdl-button-basic.hbs":"{{#mdl-button}}Click Me!{{/mdl-button}}","mdl-icon-basic.hbs":"{{mdl-icon icon='add'}}"}}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","mdl-layout mdl-js-layout mdl-layout--fixed-header");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("header");e.setAttribute(n,"class","mdl-layout__header");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","mdl-layout__header-row");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment(" Title ");e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("span");e.setAttribute(d,"class","mdl-layout-title");var i=e.createTextNode("Title");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment(" Add spacer, to align navigation to the right ");e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","mdl-layout-spacer"),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment(" Navigation. We hide it in small screens. ");e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("nav");e.setAttribute(d,"class","mdl-navigation mdl-layout--large-screen-only");var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("a");e.setAttribute(i,"class","mdl-navigation__link"),e.setAttribute(i,"href","");var l=e.createTextNode("Link");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("a");e.setAttribute(i,"class","mdl-navigation__link"),e.setAttribute(i,"href","");var l=e.createTextNode("Link");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("a");e.setAttribute(i,"class","mdl-navigation__link"),e.setAttribute(i,"href","");var l=e.createTextNode("Link");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("a");e.setAttribute(i,"class","mdl-navigation__link"),e.setAttribute(i,"href","");var l=e.createTextNode("Link");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","mdl-layout__drawer");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("span");e.setAttribute(r,"class","mdl-layout-title");var d=e.createTextNode("Title");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("nav");e.setAttribute(r,"class","mdl-navigation");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("a");e.setAttribute(d,"class","mdl-navigation__link"),e.setAttribute(d,"href","");var i=e.createTextNode("Link");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("a");e.setAttribute(d,"class","mdl-navigation__link"),e.setAttribute(d,"href","");var i=e.createTextNode("Link");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("a");e.setAttribute(d,"class","mdl-navigation__link"),e.setAttribute(d,"href","");var i=e.createTextNode("Link");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("a");e.setAttribute(d,"class","mdl-navigation__link"),e.setAttribute(d,"href","");var i=e.createTextNode("Link");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("main");e.setAttribute(n,"class","mdl-layout__content");var r=e.createTextNode("\n  	");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","mdl-grid");var d=e.createTextNode("\n	");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n	");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.content;n.detectNamespace(a);var i;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(i=this.build(n),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=n.cloneNode(this.cachedFragment,!0))):i=this.build(n);var l=n.createMorphAt(n.childAt(i,[1,5,1]),1,1);return d(t,l,e,"outlet"),i}}}())}),define("dummy/templates/badges",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","mdl-cell mdl-cell--4-col");var n=e.createTextNode("\n	");e.appendChild(a,n);var n=e.createElement("h4"),r=e.createTextNode("Badges");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","mdl-cell mdl-cell--8-col");var n=e.createTextNode("\n	");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");return e.appendChild(a,n),e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.inline;n.detectNamespace(a);var i;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(i=this.build(n),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=n.cloneNode(this.cachedFragment,!0))):i=this.build(n);var l=n.createMorphAt(n.childAt(i,[2]),1,1);return d(t,l,e,"x-example",[],{snippet:"mdl-badge-basic"}),i}}}())}),define("dummy/templates/buttons",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","mdl-cell mdl-cell--4-col");var n=e.createTextNode("\n	");e.appendChild(a,n);var n=e.createElement("h4"),r=e.createTextNode("Buttons");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","mdl-cell mdl-cell--8-col");var n=e.createTextNode("\n	");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");return e.appendChild(a,n),e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.inline;n.detectNamespace(a);var i;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(i=this.build(n),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=n.cloneNode(this.cachedFragment,!0))):i=this.build(n);var l=n.createMorphAt(n.childAt(i,[2]),1,1);return d(t,l,e,"x-example",[],{snippet:"mdl-button-basic"}),i}}}())}),define("dummy/templates/components/code-snippet",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.content;n.detectNamespace(a);var i;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(i=this.build(n),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=n.cloneNode(this.cachedFragment,!0))):i=this.build(n);var l=n.createMorphAt(i,0,0,a);return n.insertBoundary(i,0),d(t,l,e,"source"),i}}}())}),define("dummy/templates/components/x-example",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","row");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","col s12");var r=e.createTextNode("\n    You must provide a snippet parameter\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","mdl-grid");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","mdl-grid");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","mdl-cell mdl-cell--12-col");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.get,i=r.element,l=r.inline;n.detectNamespace(a);var c;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(c=this.build(n),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=n.cloneNode(this.cachedFragment,!0))):c=this.build(n);var s=n.childAt(c,[0,1]),o=n.createMorphAt(s,1,1),m=n.createMorphAt(n.childAt(c,[2,1]),1,1);return i(t,s,e,"bind-attr",[],{"class":d(t,e,"exampleFrameClass")}),l(t,o,e,"partial",[d(t,e,"partialName")],{}),l(t,m,e,"code-snippet",[],{name:d(t,e,"snippetName")}),c}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},render:function(a,n,r){var d=n.dom,i=n.hooks,l=i.get,c=i.block;d.detectNamespace(r);var s;n.useFragmentCache&&d.canClone?(null===this.cachedFragment&&(s=this.build(d),this.hasRendered?this.cachedFragment=s:this.hasRendered=!0),this.cachedFragment&&(s=d.cloneNode(this.cachedFragment,!0))):s=this.build(d);var o=d.createMorphAt(s,0,0,r);return d.insertBoundary(s,null),d.insertBoundary(s,0),c(n,o,a,"if",[l(n,a,"emptySnippet")],{},e,t),s}}}())}),define("dummy/templates/snippets/mdl-badge-basic",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.inline;n.detectNamespace(a);var i;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(i=this.build(n),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=n.cloneNode(this.cachedFragment,!0))):i=this.build(n);var l=n.createMorphAt(i,0,0,a);return n.insertBoundary(i,null),n.insertBoundary(i,0),d(t,l,e,"mdl-icon",[],{badge:"6",icon:"account_box"}),i}}}())}),define("dummy/templates/snippets/mdl-button-basic",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("Click Me!");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},render:function(t,a,n){var r=a.dom,d=a.hooks,i=d.block;r.detectNamespace(n);var l;a.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(l=this.build(r),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=r.cloneNode(this.cachedFragment,!0))):l=this.build(r);var c=r.createMorphAt(l,0,0,n);return r.insertBoundary(l,null),r.insertBoundary(l,0),i(a,c,t,"mdl-button",[],{},e,null),l}}}())}),define("dummy/templates/snippets/mdl-icon-basic",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.inline;n.detectNamespace(a);var i;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(i=this.build(n),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=n.cloneNode(this.cachedFragment,!0))):i=this.build(n);var l=n.createMorphAt(i,0,0,a);return n.insertBoundary(i,null),n.insertBoundary(i,0),d(t,l,e,"mdl-icon",[],{icon:"add"}),i}}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-material-lite",version:"0.0.1.031100f6"});