define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,d,n){"use strict";var r;t["default"].MODEL_FACTORY_INJECTIONS=!0,r=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:a["default"]}),d["default"](r,n["default"].modulePrefix),e["default"]=r}),define("dummy/blueprints/ember-material-lite",["exports","ember-material-lite/blueprints/ember-material-lite"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){"use strict";var d=a["default"].String.classify,n=!1;e["default"]={name:"App Version",initialize:function(e,r){if(!n){var i=d(r.toString());a["default"].libraries.register(i,t["default"].APP.version),n=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";function d(e,d){var n=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[n]&&(window[n]=d)}e.initialize=d,e["default"]={name:"export-application-global",initialize:d}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";var d=t["default"].Router.extend({location:a["default"].locationType});d.map(function(){}),e["default"]=d}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","mdl-layout mdl-js-layout mdl-layout--fixed-header");var d=e.createTextNode("\n  ");e.appendChild(a,d);var d=e.createElement("header");e.setAttribute(d,"class","mdl-layout__header");var n=e.createTextNode("\n    ");e.appendChild(d,n);var n=e.createElement("div");e.setAttribute(n,"class","mdl-layout__header-row");var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createComment(" Title ");e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("span");e.setAttribute(r,"class","mdl-layout-title");var i=e.createTextNode("Title");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createComment(" Add spacer, to align navigation to the right ");e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","mdl-layout-spacer"),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createComment(" Navigation. We hide it in small screens. ");e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("nav");e.setAttribute(r,"class","mdl-navigation mdl-layout--large-screen-only");var i=e.createTextNode("\n        ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"class","mdl-navigation__link"),e.setAttribute(i,"href","");var l=e.createTextNode("Link");e.appendChild(i,l),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"class","mdl-navigation__link"),e.setAttribute(i,"href","");var l=e.createTextNode("Link");e.appendChild(i,l),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"class","mdl-navigation__link"),e.setAttribute(i,"href","");var l=e.createTextNode("Link");e.appendChild(i,l),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"class","mdl-navigation__link"),e.setAttribute(i,"href","");var l=e.createTextNode("Link");e.appendChild(i,l),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(d,n);var n=e.createTextNode("\n  ");e.appendChild(d,n),e.appendChild(a,d);var d=e.createTextNode("\n  ");e.appendChild(a,d);var d=e.createElement("div");e.setAttribute(d,"class","mdl-layout__drawer");var n=e.createTextNode("\n    ");e.appendChild(d,n);var n=e.createElement("span");e.setAttribute(n,"class","mdl-layout-title");var r=e.createTextNode("Title");e.appendChild(n,r),e.appendChild(d,n);var n=e.createTextNode("\n    ");e.appendChild(d,n);var n=e.createElement("nav");e.setAttribute(n,"class","mdl-navigation");var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"class","mdl-navigation__link"),e.setAttribute(r,"href","");var i=e.createTextNode("Link");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"class","mdl-navigation__link"),e.setAttribute(r,"href","");var i=e.createTextNode("Link");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"class","mdl-navigation__link"),e.setAttribute(r,"href","");var i=e.createTextNode("Link");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"class","mdl-navigation__link"),e.setAttribute(r,"href","");var i=e.createTextNode("Link");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(d,n);var n=e.createTextNode("\n  ");e.appendChild(d,n),e.appendChild(a,d);var d=e.createTextNode("\n  ");e.appendChild(a,d);var d=e.createElement("main");e.setAttribute(d,"class","mdl-layout__content");var n=e.createTextNode("\n    ");e.appendChild(d,n);var n=e.createElement("div");e.setAttribute(n,"class","page-content");var r=e.createTextNode("\n		");e.appendChild(n,r);var r=e.createComment(" Raised disabled button");e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createElement("button");e.setAttribute(r,"class","mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-js-ripple-effect");var i=e.createTextNode("\n  Button\n");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n");e.appendChild(n,r);var r=e.createComment(" Colored FAB button ");e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createElement("button");e.setAttribute(r,"class","mdl-button mdl-js-button mdl-button--fab mdl-button--colored");var i=e.createTextNode("\n  ");e.appendChild(r,i);var i=e.createElement("i");e.setAttribute(i,"class","material-icons");var l=e.createTextNode("add");e.appendChild(i,l),e.appendChild(r,i);var i=e.createTextNode("\n");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(d,n);var n=e.createTextNode("\n  ");e.appendChild(d,n),e.appendChild(a,d);var d=e.createTextNode("\n");e.appendChild(a,d),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var d=t.dom,n=t.hooks,r=n.content;d.detectNamespace(a);var i;t.useFragmentCache&&d.canClone?(null===this.cachedFragment&&(i=this.build(d),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=d.cloneNode(this.cachedFragment,!0))):i=this.build(d);var l=d.createMorphAt(i,3,3,a);return r(t,l,e,"outlet"),i}}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",d=e["default"].$('meta[name="'+a+'"]').attr("content"),n=JSON.parse(unescape(d));return{"default":n}}catch(r){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-material-lite",version:"0.0.1.c13d80dc"});