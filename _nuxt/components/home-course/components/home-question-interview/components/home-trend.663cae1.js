(window.webpackJsonp=window.webpackJsonp||[]).push([[2,28],{519:function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return h}));var o=e(0);function r(t){return"[object String]"===Object.prototype.toString.call(t)}function c(t){return"[object Object]"===Object.prototype.toString.call(t)}function h(t){return t&&t.nodeType===Node.ELEMENT_NODE}let l=t=>t&&"[object Function]"==={}.toString.call(t);"object"==typeof Int8Array||!o.default.prototype.$isServer&&document.childNodes},520:function(t,n,e){var content=e(524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(4).default)("064988c4",content,!0,{sourceMap:!1})},521:function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return h}));e(0),e(519);const o=Object.prototype.hasOwnProperty;function r(t,n){return o.call(t,n)}const c=function(t,n){const e=function(t,n){for(let i=0;i!==t.length;++i)if(n(t[i]))return i;return-1}(t,n);return-1!==e?t[e]:void 0},h=function(style){if("object"!=typeof style)return style;const t=["ms-","webkit-"];return["transform","transition","animation"].forEach((n=>{const e=style[n];n&&e&&t.forEach((t=>{style[t+n]=e}))})),style}},522:function(t,n,e){"use strict";e.r(n);e(275),e(21);var o=e(0),r=e(277),c=e.n(r),h=e(521);const l=/(%|)\{([0-9a-zA-Z_]+)\}/g;const d=(o.default,function(t,...n){return 1===n.length&&"object"==typeof n[0]&&(n=n[0]),n&&n.hasOwnProperty||(n={}),t.replace(l,((e,o,i,r)=>{let c;return"{"===t[r-1]&&"}"===t[r+e.length]?i:(c=Object(h.c)(n,i)?n[i]:null,null==c?"":c)}))});let v={el:{colorpicker:{confirm:"确定",clear:"清空"},datepicker:{now:"此刻",today:"今天",cancel:"取消",clear:"清空",confirm:"确定",selectDate:"选择日期",selectTime:"选择时间",startDate:"开始日期",startTime:"开始时间",endDate:"结束日期",endTime:"结束时间",prevYear:"前一年",nextYear:"后一年",prevMonth:"上个月",nextMonth:"下个月",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},select:{loading:"加载中",noMatch:"无匹配数据",noData:"无数据",placeholder:"请选择"},cascader:{noMatch:"无匹配数据",loading:"加载中",placeholder:"请选择",noData:"暂无数据"},pagination:{goto:"前往",pagesize:"条/页",total:"共 {total} 条",pageClassifier:"页"},messagebox:{title:"提示",confirm:"确定",cancel:"取消",error:"输入的数据不合法!"},upload:{deleteTip:"按 delete 键可删除",delete:"删除",preview:"查看图片",continue:"继续上传"},table:{emptyText:"暂无数据",confirmFilter:"筛选",resetFilter:"重置",clearFilter:"全部",sumText:"合计"},tree:{emptyText:"暂无数据"},transfer:{noMatch:"无匹配数据",noData:"无数据",titles:["列表 1","列表 2"],filterPlaceholder:"请输入搜索内容",noCheckedFormat:"共 {total} 项",hasCheckedFormat:"已选 {checked}/{total} 项"},image:{error:"加载失败"},pageHeader:{title:"返回"},popconfirm:{confirmButtonText:"确定",cancelButtonText:"取消"},empty:{description:"暂无数据"}}},m=!1,f=function(){const t=Object.getPrototypeOf(this||o.default).$t;if("function"==typeof t&&o.default.locale)return m||(m=!0,o.default.locale(o.default.config.lang,c()(v,o.default.locale(o.default.config.lang)||{},{clone:!0}))),t.apply(this,arguments)};const y=function(path,t){let n=f.apply(this,arguments);if(null!=n)return n;const e=path.split(".");let o=v;for(let i=0,r=e.length;i<r;i++){if(n=o[e[i]],i===r-1)return d(n,t);if(!n)return"";o=n}return""};var k={methods:{t(...t){return y.apply(this,t)}}};const j=o.default.prototype.$isServer,w=/([\:\-\_]+(.))/g,C=/^moz([A-Z])/,S=j?0:Number(document.documentMode),L=function(t){return t.replace(w,(function(t,n,e,o){return o?e.toUpperCase():e})).replace(C,"Moz$1")},z=!j&&document.addEventListener?function(element,t,n){element&&t&&n&&element.addEventListener(t,n,!1)}:function(element,t,n){element&&t&&n&&element.attachEvent("on"+t,n)},_=!j&&document.removeEventListener?function(element,t,n){element&&t&&element.removeEventListener(t,n,!1)}:function(element,t,n){element&&t&&element.detachEvent("on"+t,n)};const T=S<9?function(element,t){if(!j){if(!element||!t)return null;"float"===(t=L(t))&&(t="styleFloat");try{if("opacity"===t)try{return element.filters.item("alpha").opacity/100}catch(t){return 1}return element.style[t]||element.currentStyle?element.currentStyle[t]:null}catch(n){return element.style[t]}}}:function(element,t){if(!j){if(!element||!t)return null;"float"===(t=L(t))&&(t="cssFloat");try{var n=document.defaultView.getComputedStyle(element,"");return element.style[t]||n?n[t]:null}catch(n){return element.style[t]}}};const A=(t,n)=>{if(j)return;return T(t,null!=n?n?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto|overlay)/)};var W=e(519),E=e(135),J=e.n(E),x=function(){return void 0!==document.documentElement.style.objectFit},D="none",$="contain",B="cover",H="fill",N="scale-down",O="",I={name:"ElImage",mixins:[k],inheritAttrs:!1,props:{src:String,fit:{type:String,default:"cover"},lazy:Boolean,scrollContainer:{},previewSrcList:{type:Array,default:function(){return[]}},zIndex:{type:Number,default:2e3}},data:function(){return{loading:!0,error:!1,show:!this.lazy,imageWidth:0,imageHeight:0,showViewer:!1}},computed:{imageStyle:function(){var t=this.fit;return!this.$isServer&&t?x()?{"object-fit":t}:this.getImageStyle(t):{}},alignCenter:function(){return!this.$isServer&&!x()&&this.fit!==H},preview:function(){var t=this.previewSrcList;return Array.isArray(t)&&t.length>0},imageIndex:function(){var t=0,n=this.previewSrcList.indexOf(this.src);return n>=0&&(t=n),t}},watch:{src:function(t){this.show&&this.loadImage()},show:function(t){t&&this.loadImage()}},mounted:function(){this.lazy?this.addLazyLoadListener():this.loadImage()},beforeDestroy:function(){this.lazy&&this.removeLazyLoadListener()},methods:{loadImage:function(){var t=this;if(!this.$isServer){this.loading=!0,this.error=!1;var img=new Image;img.onload=function(n){return t.handleLoad(n,img)},img.onerror=this.handleError.bind(this),Object.keys(this.$attrs).forEach((function(n){var e=t.$attrs[n];img.setAttribute(n,e)})),img.src=this.src}},handleLoad:function(t,img){this.imageWidth=img.width,this.imageHeight=img.height,this.loading=!1,this.error=!1},handleError:function(t){this.loading=!1,this.error=!0,this.$emit("error",t)},handleLazyLoad:function(){((t,n)=>{if(j||!t||!n)return!1;const e=t.getBoundingClientRect();let o;return o=[window,document,document.documentElement,null,void 0].includes(n)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:n.getBoundingClientRect(),e.top<o.bottom&&e.bottom>o.top&&e.right>o.left&&e.left<o.right})(this.$el,this._scrollContainer)&&(this.show=!0,this.removeLazyLoadListener())},addLazyLoadListener:function(){if(!this.$isServer){var t=this.scrollContainer,n=null;(n=Object(W.a)(t)?t:Object(W.c)(t)?document.querySelector(t):((t,n)=>{if(j)return;let e=t;for(;e;){if([window,document,document.documentElement].includes(e))return window;if(A(e,n))return e;e=e.parentNode}return e})(this.$el))&&(this._scrollContainer=n,this._lazyLoadHandler=J()(200,this.handleLazyLoad),z(n,"scroll",this._lazyLoadHandler),this.handleLazyLoad())}},removeLazyLoadListener:function(){var t=this._scrollContainer,n=this._lazyLoadHandler;!this.$isServer&&t&&n&&(_(t,"scroll",n),this._scrollContainer=null,this._lazyLoadHandler=null)},getImageStyle:function(t){var n=this.imageWidth,e=this.imageHeight,o=this.$el,r=o.clientWidth,c=o.clientHeight;if(!(n&&e&&r&&c))return{};var h=n/e,l=r/c;t===N&&(t=n<r&&e<c?D:$);switch(t){case D:return{width:"auto",height:"auto"};case $:return h<l?{width:"auto"}:{height:"auto"};case B:return h<l?{height:"auto"}:{width:"auto"};default:return{}}},clickHandler:function(){this.preview&&(O=document.body.style.overflow,document.body.style.overflow="hidden",this.showViewer=!0)},closeViewer:function(){document.body.style.overflow=O,this.showViewer=!1}}},M=(e(523),e(10)),component=Object(M.a)(I,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"el-image"},[t.loading?t._t("placeholder",(function(){return[e("div",{staticClass:"el-image__placeholder"})]})):t.error?t._t("error",(function(){return[e("div",{staticClass:"el-image__error"},[t._v(t._s(t.t("el.image.error")))])]})):e("img",t._g(t._b({staticClass:"el-image__inner",class:{"el-image__inner--center":t.alignCenter,"el-image__preview":t.preview},style:t.imageStyle,attrs:{src:t.src},on:{click:t.clickHandler}},"img",t.$attrs,!1),t.$listeners))],2)}),[],!1,null,"12dcbf65",null);n.default=component.exports},523:function(t,n,e){"use strict";e(520)},524:function(t,n,e){var o=e(3)(!1);o.push([t.i,".el-image[data-v-12dcbf65]{width:100%}",""]),t.exports=o},548:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r}));var o={java:{pathContent:"java-core",path:"java",title:"Java từ cơ bản đến nâng cao",description:"Java là một trong những ngôn ngữ lập trình hướng đối tượng. Nó được sử dụng trong phát triển phần mềm, trang web, game hay ứng dụng trên các thiết bị di động. Cuốn Java được viết một cách bài bản, chi tiết từ những kiến thức nền tảng giành cho mọi đối tượng",keywords:["học lập trình java từ cơ bản đến nâng cao","học lập trình java cho người mới bắt đầu","tài liệu học java cho người mới bắt đầu","học java từ cơ bản đến nâng cao","học java cho người mới bắt đầu","java cơ bản đến nâng cao","java căn bản","học java core","học lập trình java","tự học java cơ bản","java cho người mới bắt đầu","lộ trình học java"],chapters:[{link:"/bai-viet/java/gioi-thieu-ngon-ngu-lap-trinh-java",title:"Chương 1: Giới thiệu Java"},{link:"/bai-viet/java/bo-ky-tu-dung-trong-java",title:"Chương 2: Nhập môn Java"},{link:"/bai-viet/java/lap-trinh-huong-doi-tuong",title:"Chương 3: Lập trình hướng đối tượng"},{link:"/bai-viet/java/collections-trong-java",title:"Chương 4: Java collections"},{link:"/bai-viet/java/exception-trong-java",title:"Chương 5: Xử lý ngoại lệ"},{link:"/bai-viet/java/da-luong-trong-java",title:"Chương 6: Lập trình đa tuyến"}],category:["backend"],colors:{background1:"#adadad",background2:"#3a3a3a"},bookTitle:"JAVA CƠ BẢN",bookDescription:"kungfutech.edu.vn",bookContent:"Khám phá"},javascript:{pathContent:"javascript",path:"javascript",title:"Javascript từ cơ bản đến nâng cao",description:"Javascript (thường hay viết tắt là JS) là ngôn ngữ lập trình kịch bản (scripting language) cho client-side, sau này còn cho cả server-side (Nodejs). Javascript được sử dụng chủ yếu để nâng cao sự tương tác của người dùng với trang web. Nói cách khác, bạn có thể làm cho trang web trở nên sinh động và tăng tính tương tác hơn.",keywords:["học lập trình javascript từ cơ bản đến nâng cao","học lập trình javascript cho người mới bắt đầu","tài liệu học javascript cho người mới bắt đầu","học javascript từ cơ bản đến nâng cao","học javascript cho người mới bắt đầu","javascript cơ bản đến nâng cao","javascript căn bản","học javascript core","học lập trình javascript","tự học javascript cơ bản","javascript cho người mới bắt đầu","lộ trình học javascript"],chapters:[{title:"Chương 1: Giới thiệu Javascript",link:"/bai-viet/javascript/gioi-thieu-javascript"},{title:"Chương 2: Javascript cơ bản",link:"/bai-viet/javascript/chuong-trinh-javascript-dau-tien"}],bookTitle:"JAVASCRIPT TRỌN BỘ",bookDescription:"kungfutech.edu.vn",bookContent:"Khám phá",category:["backend","frontend"],colors:{background1:"#ffd400",background2:"#f39f86"}},docker:{pathContent:"docker",path:"docker",title:"Docker cơ bản",description:"Docker là một nền tảng để cung cấp cách để building, deploying và running ứng dụng dễ dàng hơn bằng cách sử dụng các containers (trên nền tảng ảo hóa). Ban đầu viết bằng Python, hiện tại đã chuyển sang Golang.",keywords:["học lập trình docker từ cơ bản đến nâng cao","học lập trình docker cho người mới bắt đầu","tài liệu học docker cho người mới bắt đầu","học docker từ cơ bản đến nâng cao","học docker cho người mới bắt đầu","docker cơ bản đến nâng cao","docker căn bản","học docker core","học lập trình docker","tự học docker cơ bản","docker cho người mới bắt đầu","lộ trình học docker"],chapters:[{link:"/khoa-hoc/docker",title:"Chương 1: Giới thiệu Docker"}],bookTitle:"DOCKER CƠ BẢN",bookDescription:"kungfutech.edu.vn",bookContent:"Khám phá",category:["devops"],colors:{background1:"#6776c1",background2:"#3346a7"}},aws:{pathContent:"aws",path:"aws",title:"Amazon Web Service cơ bản",description:"Aamazon Web Services là nền tảng điện toán mây được cung cấp bởi Amazon và đang chiếm thị phần lớn nhất thế giới tính đến thời điểm hiện tại. AWS cung cấp những giải pháp về storage, computing, database...",keywords:["học lập trình Amazon Web Service cho người mới bắt đầu","tài liệu học Amazon Web Service cho người mới bắt đầu","học Amazon Web Service từ cơ bản đến nâng cao","học Amazon Web Service cho người mới bắt đầu","Amazon Web Service cơ bản đến nâng cao","Amazon Web Service căn bản","học Amazon Web Service core","học lập trình Amazon Web Service","tự học Amazon Web Service cơ bản","Amazon Web Service cho người mới bắt đầu","lộ trình học Amazon Web Service"],chapters:[{title:"Chương 1: Giới thiệu AWS",link:"/bai-viet/aws/gioi-thieu"},{title:"Chương 2: Elastic Compute Cloud",link:"/bai-viet/aws/ec2-gioi-thieu"},{title:"Chương 3: High Avalability",link:"/bai-viet/aws/gioi-thieu-ha"},{title:"Chương 4: Virtual Private Cloud",link:"/bai-viet/aws/vpc-gioi-thieu"},{title:"Chương 5: Database",link:"/bai-viet/aws/database-rds"},{title:"Chương 6: Simple Storage Serivce",link:"/bai-viet/aws/s3-gioi-thieu"}],bookTitle:"AWS CƠ BẢN",bookDescription:"kungfutech.edu.vn",bookContent:"Khám phá",category:["devops"],colors:{background1:"#df8f3d",background2:"#974d02"}}},r=[{id:1,title:"Java cơ bản cho người mới bắt đầu",url:"/khoa-hoc/java",image:"/v1638645920/assets/course1_ry7c38.png",chapters:[{id:1.1,name:"Chương 1: Giới thiệu Java",link:"/bai-viet/java/gioi-thieu-ngon-ngu-lap-trinh-java"},{id:1.2,name:"Chương 2: Nhập môn Java",link:"/bai-viet/java/bo-ky-tu-dung-trong-java"},{id:1.3,name:"Chương 3: Lập trình hướng đối tượng",link:"/bai-viet/java/lap-trinh-huong-doi-tuong"},{id:1.4,name:"Chương 4: Xử lý ngoại lệ",link:"/bai-viet/java/collections-trong-java"},{id:1.5,name:"Chương 5: Lập trình đa tuyến",link:"/bai-viet/java/exception-trong-java"},{id:1.6,name:"Chương 6: Nhập xuất",link:"/bai-viet/java/da-luong-trong-java"}]},{id:2,title:"Amazon Web Service cơ bản",url:"/khoa-hoc/aws",image:"/v1638645920/assets/course2_viye7a.png",chapters:[{id:2.1,name:"Chương 1: Giới thiệu AWS?",link:"/bai-viet/aws/gioi-thieu"},{id:2.2,name:"Chương 2: Elastic Compute Cloud",link:"/bai-viet/aws/ec2-gioi-thieu"},{id:2.3,name:"Chương 3: High Avalability",link:"/bai-viet/aws/gioi-thieu-ha"},{id:2.4,name:"Chương 4: Virtual Private Cloud",link:"/bai-viet/aws/vpc-gioi-thieu"},{id:2.5,name:"Chương 5: Database",link:"/bai-viet/aws/database-rds"},{id:2.6,name:"Chương 6: Simple Storage Serivce",link:"/bai-viet/aws/s3-gioi-thieu"}]}]},615:function(t,n,e){"use strict";e.d(n,"a",(function(){return o.b})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return c}));var o=e(548),r=[{id:1,title:"Bộ câu hỏi phỏng vấn Javascript phần 1",description:"Tuyển tập các câu hỏi phỏng vấn phổ biến, cực hay Javascript...",url:"/phong-van/javascript/bo-cau-hoi-phong-van-javascript-01",image:"/v1644916260/assets/javascript_fd5n8g.png"},{id:2,title:"Bộ câu hỏi phỏng vấn HTML phần 1",description:"Tuyển tập các câu hỏi phỏng vấn phổ biến, cực hay HTML...",url:"/phong-van/html/bo-cau-hoi-phong-van-html-01",image:"/v1644916260/assets/html_gnxskh.png"},{id:3,title:"Bộ câu hỏi phỏng vấn CSS phần 1",description:"Tuyển tập các câu hỏi phỏng vấn phổ biến, cực hay CSS...",url:"/phong-van/css/bo-cau-hoi-phong-van-css-01",image:"/v1644916260/assets/css_lj2fdi.png"},{id:4,title:"Bộ câu hỏi phỏng vấn Typescript phần 1",description:"Tuyển tập các câu hỏi phỏng vấn phổ biến, cực hay Typescript...",url:"/phong-van/typescript/bo-cau-hoi-phong-van-typescript-01",image:"/v1644916260/assets/typescript_pkxwz1.png"},{id:5,title:"Bộ câu hỏi phỏng vấn React.js phần 1",description:"Tuyển tập các câu hỏi phỏng vấn phổ biến, cực hay React.js...",url:"/phong-van/reactjs/bo-cau-hoi-phong-van-reactjs-01",image:"/v1644916260/assets/reactjs_zz886s.png"},{id:6,title:"Bộ câu hỏi phỏng vấn Python phần 1",description:"Tuyển tập các câu hỏi phỏng vấn phổ biến, cực hay Python...",url:"/phong-van/python/bo-cau-hoi-phong-van-python-01",image:"/v1644916260/assets/python_wjv8ty.png"}],c=[{title:"Lộ trình trở thành một Front-end developer và tài liệu học tập",author:"Techmely Team",image:"1.svg",url:"/tai-nguyen/lo-trinh-tro-thanh-frontend"},{title:"Chia sẻ kinh nghiệm phỏng vấn",author:"Đinh Hoàng Phong",image:"2.svg",url:"/bai-viet/chia-se-kinh-nghiem-khi-di-phong-van"},{title:"Kinh nghiệm phỏng vấn từ góc nhìn của người phỏng vấn",author:"Thành Trung",image:"3.svg",url:"/bai-viet/kinh-nghiem-phong-van-tu-goc-nhin-cua-nguoi-phong-van"},{title:"Bắt đầu Web3.0: lộ trình, hướng dẫn và tài liệu cho developer",author:"Techmely Team",image:"4.svg",url:"/bai-viet/web3-lo-trinh-huong-dan-va-tai-nguyen-cho-developer",class:"hidden-md-and-down"},{title:"33 khái niệm Javascript developer nên biết",author:"Techmely Team",image:"5.svg",url:"/bai-viet/33-khai-niem-javascript-developer-nen-biet"},{title:"Tổng hợp tài liệu học lập trình",author:"Techmely Team",image:"6.svg",url:"/bai-viet/tong-hop-tai-lieu-hoc-lap-trinh"}]}}]);