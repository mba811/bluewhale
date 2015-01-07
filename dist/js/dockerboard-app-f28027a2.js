!function(t,e){"use strict";function n(e,n){t.module(e,n||[]),t.module(o).requires.push(e)}var o=e.name="dockerboard";e.dependencies=["ngResource","ngMaterial","ngAnimate","ui.router","prettyBytes","angular-loading-bar","angularMoment"],e.registerModule=n}(window.angular,window.dockerboardApp||(window.dockerboardApp={})),angular.module(dockerboardApp.name,dockerboardApp.dependencies).config(["$locationProvider","$urlRouterProvider",function(t,e){e.otherwise("/")}]).run(["$rootScope",function(t){t.$on("$stateChangeStart",function(){console.log("State Change: transition begins!")}),t.$on("$stateChangeSuccess",function(){console.log("State Change: State change success!")}),t.$on("$stateChangeError",function(){console.log("State Change: Error!")}),t.$on("$stateNotFound",function(){console.log("State Change: State not found!")}),t.$on("$viewContentLoading",function(){console.log("View Load: the view is loaded, and DOM rendered!")}),t.$on("$viewcontentLoaded",function(){console.log("View Load: the view is loaded, and DOM rendered!")})}]),angular.element(document).ready(function(){"#_=_"===window.location.hash&&(window.location.hash="#!")}),!function(){"use strict";dockerboardApp.registerModule("dockerboard.filters"),angular.module("dockerboard.filters").filter("sanitize",["$sce",function(t){return function(e){return e?t.trustAsHtml(e+""):""}}]).filter("escape",["$window",function(t){return function(e){return t.encodeURIComponent(t.encodeURIComponent(e))}}]).filter("unescape",["$window",function(t){return function(e){return e?t.decodeURIComponent(t.decodeURIComponent(e)):""}}]).filter("formatImageId",["limitToFilter",function(t){function e(e){return n.exec(e)?e:t(e,12)}var n=/[\-\:\.\/_]/;return e}])}(),!function(){dockerboardApp.registerModule("dockerboard.services")}(),!function(){"use strict";function t(t){return t&&t.replace(/%/g,"%25")}angular.module("dockerboard.services").factory("Menu",["$rootScope","$location",function(e,n){function o(){var e=!1,o=n.$$path;a.forEach(function(n){if(n&&n.url){var a=o.split("/"),i=a.slice(0,2).join("/");i===n.url&&(r.selectPage(t(a[2]),t(a[3])),r.selectSection(n),e=!0)}}),e||(r.selectPage(null,null),r.selectSection(null),r.breadcrumbs.length=0)}var r,a=[{name:"Dashboard",url:"/dashboard"},{name:"Containers",url:"/containers"},{name:"Images",url:"/images"},{name:"Hosts",url:"/hosts",tooltip:"Docker Hosts"},{name:"Hub",url:"/hub",tooltip:"Docker Hub"},{name:"System",url:"/system",tooltip:"System Info"},{name:"Canvas",url:"/canvas"}];return e.$on("$locationChangeSuccess",o),r={sections:a,breadcrumbs:[],selectSection:function(t){r.currentSection=t,t?r.breadcrumbs[0]=t:r.breadcrumbs.length=0},toggleSelectSection:function(t){r.isSectionSelected(t)||r.selectSection(t)},isSectionSelected:function(t){return r.currentSection===t},selectPage:function(t,e){r.currentPage=t,r.currentPageSubSection=e,e?r.breadcrumbs[2]=e:r.breadcrumbs.length=2,t?r.breadcrumbs[1]=t:r.breadcrumbs.length=1},isPageSelected:function(t){return r.currentPage===t},breadcrumbUrl:function(t){var e=r.breadcrumbs.slice(0,t+1);return e.forEach(function(t,n){e[n]=t.url||t}),e.join("/")}}}])}(),!function(){"use strict";angular.module("dockerboard.services").factory("Containers",["$resource",function(t){var e=t("/api/containers/:Id",{Id:"@Id"},{"delete":{method:"POST",headers:{"X-HTTP-Method-Override":"DELETE"},params:{force:!1,v:!1}}});return e.queryParams={all:!1,limit:"",size:!1,since:"",before:"",filters:""},e.basicAttributes=["Id","Name","Created","Image"],e}])}(),!function(){"use strict";angular.module("dockerboard.services").factory("ContainerActions",["$resource",function(t){var e=t("/api/containers/:Id/:action",{Id:"@Id",action:"@action"},{update:{method:"POST"},logs:{method:"GET",params:{action:"logs"},transformResponse:function(t){return{text:t}},isArray:!1}});return e.logsQueryParams={follow:!1,stdout:!0,stderr:!1,timestamps:!1,tail:"all"},e}])}(),!function(){"use strict";angular.module("dockerboard.services").factory("Images",["$resource",function(t){var e=t("/api/images/:Id",{Id:"@Id"},{"delete":{method:"POST",headers:{"X-HTTP-Method-Override":"DELETE"},params:{force:!1,noprune:!1}},search:{params:{Id:"search"},isArray:!0}});return e.queryParams={all:!1,filters:""},e.basicAttributes=["Id","Author","Comment","DockerVersion","Architecture","Os","Size","VirtualSize","Created","Parent"],e}])}(),!function(){"use strict";angular.module("dockerboard.services").factory("ImageActions",["$resource","$window",function(t,e){var n=t("/api/images/:Id/:action",{Id:"@Id",action:"@action"},{update:{method:"POST"},history:{params:{action:"history"},isArray:!0},push:{method:"POST",params:{action:"push"},transformRequest:function(t,n){if(t){var o=n(),r={username:t.username||"",password:t.password||"",email:t.email||""};r.username&&r.password&&(o.Authorization=e.btoa(JSON.stringify(r)),delete t.username,delete t.password)}}}});return console.dir(n),n}])}(),!function(){"use strict";angular.module("dockerboard.services").factory("System",["$resource",function(t){var e=t("/api/system");return e}])}(),!function(){"use strict";angular.module("dockerboard.services").factory("Hosts",["$resource",function(t){var e=t("/api/hosts/:Id",{Id:"@Id"},{"delete":{method:"POST",headers:{"X-HTTP-Method-Override":"DELETE"}},save:{method:"POST"}});return e.CurrentHost=null,e.getCurrentHostUrl=function(t){return t=t||e.CurrentHost,t&&t.URL.Scheme+"://"+t.URL.Host},e}])}(),!function(){"use strict";angular.module("dockerboard.services").factory("HostActions",["$resource",function(t){var e=t("/api/hosts/:Id/:action",{Id:"@Id",action:"@action"},{ping:{method:"GET",params:{action:"ping"},transformResponse:function(t){return{text:t}},isArray:!1}});return e}])}(),!function(){"use strict";dockerboardApp.registerModule("site.component"),angular.module("site.component").config(["$stateProvider",function(t){t.state("site",{url:"/",templateUrl:"/js/modules/site/views/index.tpl.html"})}])}(),!function(){"use strict";function t(t,e,n,o,r,a,i){function s(){t.closeMenu(),c&&c.focus()}t.menu=a;var c=document.querySelector('[role="main"]');r.$on("$locationChangeSuccess",s),t.closeMenu=function(){o(function(){n("left").close()})},t.openMenu=function(){o(function(){n("left").open()})},t.host=i.getCurrentHostUrl(),r.$on("$hostChangeSuccess",function(e,n){t.host=i.getCurrentHostUrl(n)}),t.path=function(){return e.path()},t.goHome=function(){t.menu.selectSection(null),t.menu.selectPage(null,null),e.path("/")}}dockerboardApp.registerModule("sidenav.component"),angular.module("sidenav.component").controller("SidenavCtrl",t),t.$inject=["$scope","$location","$mdSidenav","$timeout","$rootScope","Menu","Hosts"]}(),!function(){"use strict";function t(t,e,n){function o(t){if(!t)return"";for(var e={},n=t.split(/\s+/g),o=0,r=n.length;r>o;++o){var a=n[o].split("=");if(2===a.length){var i=a[0],s=a[1];i&&s&&(e[i]=e[i]||[],e[i].push(s))}}return JSON.stringify(e)}t.queryParams=angular.copy(e.queryParams),t.queryParams.host=n.getCurrentHostUrl(),t.queryParamsFilters="",t.fetch=function(){t.queryParams.filters=o(t.queryParamsFilters),e.query(t.queryParams,function(e){t.containers=e})},t.fetch(),t.search=function(){t.fetch()},t.displayablePorts=function(t){for(var e=[],n=0,o=t.length;o>n;++n){var r=t[n];e.push(""===r.IP?r.PrivatePort+"/"+r.Type:r.IP+":"+r.PublicPort+"->"+r.PrivatePort+"/"+r.Type)}return e.join(", ")}}function e(t,e,a,s,c,u,l,d){function m(e){angular.forEach(l.basicAttributes,function(t){var n=e[t];if("Id"===t||"Image"===t){n=c(n,12);var o="#/";o+=("Id"===t?"containers/":"images/")+n,n='<a ng-href="'+o+'" href="'+o+'">'+n+"</a>"}else"Created"===t&&(n=u(n,!0));this.push({key:t,value:n})},t.basicAttributes)}l.get({Id:e.Id,host:d.getCurrentHostUrl()},function(e){m(e),t.container=e,t.containerShortId=c(e.Id,12)},function(t){404===t.status&&a.path("/containers")}),t.basicAttributes=[],t.toggleRunning=function(e){s.show({controller:o,templateUrl:"/js/modules/containers/views/container.running.dialog.tpl.html",locals:{parentScope:t},targetEvent:e}).then(function(e){t.container.State.Running=e,t.container.State[e?"StartedAt":"FinishedAt"]=Date.now()})},t.togglePaused=function(e){s.show({controller:r,templateUrl:"/js/modules/containers/views/container.paused.dialog.tpl.html",locals:{parentScope:t},targetEvent:e}).then(function(e){t.container.State.Paused=e})},t.destory=function(e){s.show({controller:n,templateUrl:"/js/modules/containers/views/container.destory.dialog.tpl.html",locals:{parentScope:t},targetEvent:e})},t.kill=function(e){s.show({controller:i,templateUrl:"/js/modules/containers/views/container.kill.dialog.tpl.html",locals:{parentScope:t},targetEvent:e}).then(function(e){t.container.State.Running=e,t.container.State.Pid=0})}}function n(t,e,n,o,r){t.container=r.container,t.containerShortId=r.containerShortId,t.cancel=function(){n.cancel()},t.params={force:!1,v:!1},t.content="",t.ok=function(){o.delete({Id:t.containerShortId,force:t.params.force,v:t.params.v},null,function(){n.hide(),e.path("/containers")},function(o){return 404===o.status?(n.hide(),void e.path("/containers")):void(t.content=o.data)})}}function o(t,e,n,o,r){t.container=o.container,t.action=o.container.State.Running?"stop":"start",t.isRestart=!1,t.containerShortId=o.containerShortId,t.cancel=function(){n.cancel()},t.params={t:""},t.change=function(e){e?(t.preAction=t.action,t.action="restart"):t.action=t.preAction},t.content="",t.ok=function(){r.update({Id:t.containerShortId,action:t.action},t.params,function(){var e=!t.container.State.Running;"restart"==t.action&&(e=!0),n.hide(e)},function(e){if(304===e.status){var o=!t.container.State.Running;n.hide(o)}else t.content=e.data})}}function r(t,e,n,o,r){t.container=o.container,t.action=o.container.State.Paused?"unpause":"pause",t.isRestart=!1,t.containerShortId=o.containerShortId,t.cancel=function(){n.cancel()},t.content="",t.ok=function(){r.update({Id:t.containerShortId,action:t.action},function(){var e=!t.container.State.Paused;n.hide(e)},function(e){t.content=e.data})}}function a(t,e,n){t.containerShortId=e.Id,t.queryParams=n.logsQueryParams,t.fetch=function(e,o){var r=angular.copy(o,{});r.Id=e,n.logs(r,function(e){t.logs=e.text||""})},t.fetch(t.containerShortId,t.queryParams),t.search=function(){t.fetch(t.containerShortId,t.queryParams)},t.scrollToEnd=function(t){var e=angular.element(t.currentTarget).parent().parent()[0];e&&(e.scrollTop=e.scrollHeight)}}function i(t,e,n,o){t.container=n.container,t.containerShortId=n.containerShortId,t.action="kill",t.params={signal:""},t.content="",t.cancel=function(){e.cancel()},t.ok=function(){o.update({Id:t.containerShortId,action:t.action},t.params,function(){e.hide(!1)},function(e){t.content=e.data})}}dockerboardApp.registerModule("containers.ctrl"),angular.module("containers.ctrl").controller("ContainersCtrl",t).controller("ContainerCtrl",e).controller("ContainerLogsCtrl",a).config(["$stateProvider",function(t){t.state("containers",{url:"/containers",templateUrl:"/js/modules/containers/views/containers.tpl.html"}).state("containeritem",{url:"/containers/:Id",templateUrl:"/js/modules/containers/views/container.tpl.html"}).state("containerLogs",{url:"/containers/{Id}/logs",templateUrl:"/js/modules/containers/views/container.logs.tpl.html"})}]),t.$inject=["$scope","Containers","Hosts"],e.$inject=["$scope","$stateParams","$location","$mdDialog","limitToFilter","amTimeAgoFilter","Containers","Hosts"],n.$inject=["$scope","$location","$mdDialog","Containers","parentScope"],o.$inject=["$scope","$location","$mdDialog","parentScope","ContainerActions"],r.$inject=["$scope","$location","$mdDialog","parentScope","ContainerActions"],a.$inject=["$scope","$stateParams","ContainerActions"],i.$inject=["$scope","$mdDialog","parentScope","ContainerActions"]}(),!function(){"use strict";function t(t,e,n,o){function r(t){if(!t)return"";for(var e={},n=t.split(/\s+/g),o=0,r=n.length;r>o;++o){var a=n[o].split("=");if(2===a.length){var i=a[0],s=a[1];i&&s&&(e[i]=e[i]||[],e[i].push(s))}}return JSON.stringify(e)}t.queryParams=angular.copy(n.queryParams),t.queryParams.host=o.getCurrentHostUrl(),t.queryParamsFilters="",t.fetch=function(){t.queryParams.filters=r(t.queryParamsFilters),n.query(t.queryParams,function(e){t.images=e})},t.fetch(),t.search=function(){t.fetch()},t.getRepo=function(t){var e="";return t.length&&(e=t[0].split(":")[0]),e},t.getTags=function(t){var e=[];return angular.forEach(t,function(t){var e=t.split(":")[1];e&&this.push(e)},e),e.join(", ")},t.push=function(t){e.show({controller:a,templateUrl:"/js/modules/images/views/image.push.dialog.tpl.html",targetEvent:t})}}function e(t,e,o,a,i,s,c,u,l,d){function m(e){angular.forEach(u.basicAttributes,function(t){var n=e[t];if("Id"===t||"Parent"===t){n=i(n,12);var o="#/images/"+n;n='<a ng-href="'+o+'" href="'+o+'">'+n+"</a>"}else"Size"===t||"VirtualSize"===t?n=c(n):"Created"===t&&(n=s(n,!0));this.push({key:t,value:n})},t.basicAttributes)}o.Id=o.Id.replace(/%(25)/g,"%").replace(/\//g,"%2F"),t.tabs=[{title:"Normal"},{title:"Base"}],t.basicAttributes=[],u.get({Id:o.Id,host:d.getCurrentHostUrl()},function(e){m(e),t.image=e,t.imageShortId=i(e.Id,12)},function(t){404===t.status&&e.path("/images")}),t.destory=function(e){a.show({controller:n,templateUrl:"/js/modules/images/views/image.destory.dialog.tpl.html",locals:{image:t.image,imageShortId:t.imageShortId},targetEvent:e})},t.tag=function(e){a.show({controller:r,templateUrl:"/js/modules/images/views/image.tag.dialog.tpl.html",locals:{image:t.image,imageShortId:t.imageShortId},targetEvent:e})}}function n(t,e,n,o,r,a,i){t.image=r,t.imageShortId=a,t.cancel=function(){n.cancel()},t.params={force:!1,noprune:!1},t.content="",t.ok=function(){o.delete({Id:t.imageShortId,force:t.params.force,noprune:t.params.noprune,host:i.getCurrentHostUrl()},null,function(){t.cancel(),e.path("/images")},function(n){return 404===n.status?(t.cancel(),void e.path("/images")):void(t.content=n.data)})}}function o(t,e,n,o){t.imageShortId=e.Id,n.history({Id:t.imageShortId,host:o.getCurrentHostUrl()},function(e){t.commits=e},function(){})}function r(t,e,n,o,r,a){t.image=r,t.imageShortId=a,t.action="tag",t.cancel=function(){e.cancel()},t.queryParams={force:!1,repo:"",tag:""},t.content="",t.ok=function(){var r={Id:t.imageShortId,action:t.action,host:o.getCurrentHostUrl()};angular.extend(r,t.queryParams),n.update(r,null,function(){e.hide()},function(n){return 404===n.status?void e.hide():void(t.content=n.data)})}}function a(t,e,n,o){t.action="push",t.cancel=function(){e.cancel()},t.queryParams={tag:""},t.username="",t.password="",t.content="",t.ok=function(){if(t.repository){var r={Id:encodeURIComponent(t.repository),host:o.getCurrentHostUrl()};angular.extend(r,t.queryParams),n.push(r,{username:t.username,password:t.password},function(){e.hide()},function(n){return 404===n.status?void e.hide():void(t.content=n.data)})}}}dockerboardApp.registerModule("images.ctrl"),angular.module("images.ctrl").controller("ImagesCtrl",t).controller("ImageCtrl",e).controller("ImageHistoryCtrl",o).config(["$stateProvider",function(t){t.state("images",{url:"/images",templateUrl:"/js/modules/images/views/images.tpl.html"}).state("imageItem",{url:"/images/{Id}",templateUrl:"/js/modules/images/views/image.tpl.html"}).state("imageHistory",{url:"/images/{Id}/history",templateUrl:"/js/modules/images/views/image.history.tpl.html"})}]),t.$inject=["$scope","$mdDialog","Images","Hosts"],e.$inject=["$scope","$location","$stateParams","$mdDialog","limitToFilter","amTimeAgoFilter","prettyBytesFilter","Images","ImageActions","Hosts"],n.$inject=["$scope","$location","$mdDialog","Images","image","imageShortId","Hosts"],o.$inject=["$scope","$stateParams","ImageActions","Hosts"],r.$inject=["$scope","$mdDialog","ImageActions","Hosts","image","imageShortId"],a.$inject=["$scope","$mdDialog","ImageActions","Hosts"]}(),!function(){"use strict";function t(t,e){e.get(function(e){t.system=e})}dockerboardApp.registerModule("system.ctrl"),angular.module("system.ctrl").controller("SystemCtrl",t).config(["$stateProvider",function(t){t.state("system",{url:"/system",templateUrl:"/js/modules/system/views/system.tpl.html"})}]),t.$inject=["$scope","System"]}(),!function(){"use strict";function t(t,o,r,a,i,s){function c(e){for(var n=!1,o=0,r=t.hosts.length;r>o;o++){var a=t.hosts[o];if(a.URL.Scheme===e.URL.Scheme&&a.URL.Host===e.URL.Host){t.hosts[o]=e,n=!0;break}}n||t.hosts.push(e)}i.query(function(e){t.hosts=e}),t.selectedIndex=0,t.select=function(e){t.selectedIndex=e,i.CurrentHost=t.hosts[e],o.$emit("$hostChangeSuccess",i.CurrentHost)},t.create=function(t){r.show({controller:e,templateUrl:"/js/modules/hosts/views/hosts.create.dialog.tpl.html",targetEvent:t}).then(function(t){c(t)})},t.destroy=function(e){i.delete({Id:encodeURIComponent(i.getCurrentHostUrl(t.hosts[e]))},function(){t.hosts.splice(e,1)})},t.ping=function(e){s.ping({Id:encodeURIComponent(i.getCurrentHostUrl(t.hosts[e]))},function(t){"OK"===t.text&&a.show(a.simple().content("Ping OK!").position("top right").action("Close").hideDelay(1500))},function(){a.show(a.simple().content("Ping Faild!").position("top right").action("Close").hideDelay(1500))})},t.version=function(e,o){s.get({Id:encodeURIComponent(i.getCurrentHostUrl(t.hosts[o])),action:"version"},function(t){r.show({controller:n,templateUrl:"/js/modules/hosts/views/host.version.dialog.tpl.html",locals:{docker:t},targetEvent:e})},function(){a.show(a.simple().content("Get Docker Version Faild!").position("top right").action("Close").hideDelay(1500))})}}function e(t,e,n){t.cancel=function(){e.cancel()},t.name="",t.host="",t.content="",t.ok=function(){t.host||t.cancel(),n.save({name:t.name,host:t.host},function(t){e.hide(t)},function(e){t.content=e})}}function n(t,e,n){t.docker=n,t.cancel=function(){e.cancel()},t.ok=function(){e.hide()}}dockerboardApp.registerModule("hosts.ctrl"),angular.module("hosts.ctrl").controller("HostsCtrl",t).config(["$stateProvider",function(t){t.state("hosts",{url:"/hosts",templateUrl:"/js/modules/hosts/views/hosts.tpl.html"})}]),t.$inject=["$scope","$rootScope","$mdDialog","$mdToast","Hosts","HostActions"],e.$inject=["$scope","$mdDialog","Hosts"],n.$inject=["$scope","$mdDialog","docker"]}(),!function(){"use strict";function t(t,e,n){t.queryParamsTerm="",t.search=function(){return t.queryParamsTerm?void n.search({term:t.queryParamsTerm},function(e){t.images=e},function(t){e.show(e.simple().content(t.data).position("top right").action("Close").hideDelay(1500))}):void e.show(e.simple().content("Please enter text for searching.").position("top right").action("Close").hideDelay(1500))}}dockerboardApp.registerModule("hub.ctrl"),angular.module("hub.ctrl").controller("HubCtrl",t).config(["$stateProvider",function(t){t.state("hub",{url:"/hub",templateUrl:"/js/modules/hub/views/hub.tpl.html"})}]),t.$inject=["$scope","$mdToast","Images"]}(),!function(){"use strict";function t(t){t.addNode=function(){alert("add node")}}dockerboardApp.registerModule("canvas"),angular.module("canvas").controller("CanvasCtrl",t).config(["$stateProvider",function(t){t.state("canvas",{url:"/canvas",templateUrl:"/js/modules/canvas/views/canvas.tpl.html"})}]),t.$inject=["$scope","$rootScope"]}();