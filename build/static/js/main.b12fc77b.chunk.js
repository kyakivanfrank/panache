(this.webpackJsonppanache=this.webpackJsonppanache||[]).push([[0],{14:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t.n(s),i=t(7),l=t.n(i),o=(t(14),t(3)),n=t(0),r=function(e){return Object(n.jsx)("nav",{id:"menu",className:"navbar navbar-default navbar-fixed-top",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"navbar-header",children:[Object(n.jsxs)("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1",children:[" ",Object(n.jsx)("span",{className:"sr-only",children:"Toggle navigation"})," ",Object(n.jsx)("span",{className:"icon-bar"})," ",Object(n.jsx)("span",{className:"icon-bar"})," ",Object(n.jsx)("span",{className:"icon-bar"})," "]}),Object(n.jsx)("a",{className:"navbar-brand page-scroll",href:"#page-top",children:"Panache"})," "]}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1",children:Object(n.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#features",id:"book_now",className:"page-scroll",children:"Book us"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#services",className:"page-scroll",children:"Services"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#about",className:"page-scroll",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#portfolio",className:"page-scroll",children:"Gallery"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#contact",className:"page-scroll",children:"Contact"})})]})})]})})},d=function(e){return Object(n.jsx)("header",{id:"header",children:Object(n.jsx)("div",{className:"intro",children:Object(n.jsx)("div",{className:"overlay",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-md-8 col-md-offset-2 intro-text",children:[Object(n.jsxs)("h1",{children:[e.data?e.data.title:"Loading",Object(n.jsx)("span",{})]}),Object(n.jsx)("p",{children:e.data?e.data.paragraph:"Loading"}),Object(n.jsx)("a",{id:"book_now",href:"#features",className:"btn book_now btn-custom page-scroll",children:"BOOK US"})," "]})})})})})})},m=t(2),j=t(4),b=t(5),g=t.n(b),h={name:"",contact:"",venue:"",date:"",guestNumber:"",ceremony:"",description:""},p=function(e){var a=Object(s.useState)(h),t=Object(o.a)(a,2),c=t[0],i=c.name,l=c.contact,r=c.date,d=c.venue,b=c.guestNumber,p=c.ceremony,u=c.description,x=t[1],O=function(e){var a=e.target,t=a.name,s=a.value;x((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(m.a)({},t,s))}))},f=function(){return x({initialState:h})};console.log(i,l,d,r,b,p,u,f);return Object(n.jsx)("div",{id:"features",style:{display:""},className:"text-center",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"col-md-10 col-md-offset-1 section-title",children:Object(n.jsx)("h2",{children:"BOOK US"})}),Object(n.jsx)("div",{className:"col-lg-8",children:Object(n.jsxs)("form",{name:"sentMessage",validate:!0,onSubmit:function(e){e.preventDefault(),g.a.sendForm("service_2z4dnmr","template_2v7lram",e.target,"user_kCREZLuMlcYDdidzhOrCD").then((function(e){console.log(e.text),f()}),(function(e){console.log(e.text)}))},children:[Object(n.jsxs)("div",{className:"form-row",children:[Object(n.jsxs)("div",{className:"form-group col-md-6",children:[Object(n.jsx)("label",{className:"dark_label",children:"NAME"}),Object(n.jsx)("input",{type:"text",onChange:O,name:"name",className:"form-control",required:!0,placeholder:"your name"})]}),Object(n.jsxs)("div",{className:"form-group col-md-6",children:[Object(n.jsx)("label",{className:"dark_label",children:"contact"}),Object(n.jsx)("input",{type:"textt",onChange:O,name:"contact",className:"form-control",required:!0,placeholder:"Your contact number or email"})]}),Object(n.jsxs)("div",{className:"form-group col-md-3",children:[Object(n.jsx)("label",{className:"dark_label",children:"Type of ceremony"}),Object(n.jsxs)("select",{defaultValue:"birthday",name:"ceremony",onChange:O,className:"form-control",children:[Object(n.jsx)("option",{children:"choose..."}),Object(n.jsx)("option",{children:"Birthday"}),Object(n.jsx)("option",{children:"Baby shower"}),Object(n.jsx)("option",{children:"Exhibition"}),Object(n.jsx)("option",{children:"Religious ceremony"}),Object(n.jsx)("option",{children:"community function"}),Object(n.jsx)("option",{children:"if other (put in the description)"})]})]}),Object(n.jsxs)("div",{className:"form-group col-md-2",children:[Object(n.jsx)("label",{className:"dark_label",children:"Guests"}),Object(n.jsxs)("select",{defaultValue:"below 20",name:"guestNumber",onChange:O,className:"form-control",children:[Object(n.jsx)("option",{children:"how many"}),Object(n.jsx)("option",{children:"below 20"}),Object(n.jsx)("option",{children:"below 50"}),Object(n.jsx)("option",{children:"below 100"}),Object(n.jsx)("option",{children:"above 100"}),Object(n.jsx)("option",{children:"specify in the description"}),Object(n.jsx)("option",{children:"if other (put in the description)"})]})]}),Object(n.jsxs)("div",{className:"form-group col-md-3",children:[Object(n.jsx)("label",{className:"dark_label",children:"When"}),Object(n.jsx)("input",{type:"text",onChange:O,name:"date",className:"form-control",required:!0,placeholder:"dd/mm/yy"})]}),Object(n.jsxs)("div",{className:"form-group col-md-4",children:[Object(n.jsx)("label",{className:"dark_label",children:"where will the event be?"}),Object(n.jsx)("input",{type:"text",onChange:O,className:"form-control",name:"venue",placeholder:"we can also help find a place for you"})]}),Object(n.jsx)("textarea",{onChange:O,className:"form-control form-group col-md-4",name:"description",rows:"4",placeholder:"Tell us more that your planning",required:!0})]}),Object(n.jsx)("button",{type:"submit",id:"book",className:"btn btn-custom btn-lg",children:"BOOK NOW"})]})})]})})},u=function(e){return Object(n.jsx)("div",{id:"about",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-xs-12 col-md-6",children:[" ",Object(n.jsx)("img",{src:"img/about.jpg",className:"img-responsive",alt:""})," "]}),Object(n.jsx)("div",{className:"col-xs-12 col-md-6",children:Object(n.jsxs)("div",{className:"about-text",children:[Object(n.jsx)("h2",{children:"About Us"}),Object(n.jsx)("p",{children:e.data?e.data.paragraph:"loading..."}),Object(n.jsx)("h3",{children:"Why Choose Us?"}),Object(n.jsxs)("div",{className:"list-style",children:[Object(n.jsx)("div",{className:"col-lg-6 col-sm-6 col-xs-12",children:Object(n.jsx)("ul",{children:e.data?e.data.Why.map((function(e,a){return Object(n.jsx)("li",{children:e},"".concat(e,"-").concat(a))})):"loading"})}),Object(n.jsx)("div",{className:"col-lg-6 col-sm-6 col-xs-12",children:Object(n.jsx)("ul",{children:e.data?e.data.Why2.map((function(e,a){return Object(n.jsxs)("li",{children:[" ",e]},"".concat(e,"-").concat(a))})):"loading"})})]})]})})]})})})},x=function(e){return Object(n.jsx)("div",{id:"services",className:"text-center",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"section-title",children:[Object(n.jsx)("h2",{children:"Come let's host your event"}),Object(n.jsxs)("p",{children:["Just a few clicks away. We only requires a ",Object(n.jsx)("b",{children:"50% advance payment "}),"  and ",Object(n.jsx)("b",{children:"will give 30% refund if you cancel within time. "})," ",Object(n.jsx)("br",{}),"We've successfully hosted 13 to 14 successful events."]})]}),Object(n.jsx)("div",{className:"row",children:e.data?e.data.map((function(e,a){return Object(n.jsxs)("div",{className:"col-md-4",children:[" ",Object(n.jsx)("span",{children:Object(n.jsx)("img",{alt:"",src:e.icon})}),Object(n.jsx)("div",{className:"service-desc",children:Object(n.jsx)("h3",{children:e.name})})]},"".concat(e.name,"-").concat(a))})):"loading"})]})})},O=function(e){var a=e.title,t=e.largeImage;e.smallImage;return Object(n.jsx)("div",{id:"portfolio_item",className:"portfolio-item",children:Object(n.jsxs)("div",{className:"hover-bg",children:[" ",Object(n.jsxs)("a",{href:t,title:a,"data-lightbox-gallery":"gallery1",children:[Object(n.jsx)("div",{className:"hover-text",children:Object(n.jsx)("h4",{children:a})}),Object(n.jsx)("img",{src:t,className:"img-responsive",alt:a})," "]})," "]})})},f=function(e){return Object(n.jsx)("div",{id:"portfolio",className:"text-center",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"section-title",children:[Object(n.jsx)("h2",{children:"Gallery"}),Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec."})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"portfolio-items",children:e.data?e.data.map((function(e,a){return Object(n.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-4",children:Object(n.jsx)(O,{title:e.title,largeImage:e.largeImage,smallImage:e.largeImage})},"".concat(e.title,"-").concat(a))})):"Loading..."})})]})})},v=function(e){return Object(n.jsx)("div",{id:"testimonials",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"section-title text-center",children:Object(n.jsx)("h2",{children:"What our clients say"})}),Object(n.jsx)("div",{className:"row",children:e.data?e.data.map((function(e,a){return Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsxs)("div",{className:"testimonial",children:[Object(n.jsxs)("div",{className:"testimonial-image",children:[" ",Object(n.jsx)("img",{src:e.img,alt:""})," "]}),Object(n.jsxs)("div",{className:"testimonial-content",children:[Object(n.jsxs)("p",{children:['"',e.text,'"']}),Object(n.jsxs)("div",{className:"testimonial-meta",children:[" - ",e.name," "]})]})]})},"".concat(e.name,"-").concat(a))})):"loading"})]})})},N=function(e){return Object(n.jsx)("div",{id:"team",className:"text-center",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"col-md-8 col-md-offset-2 section-title",children:[Object(n.jsx)("h2",{children:"Meet the Team"}),Object(n.jsx)("p",{children:"It was always our passion. The idea of our business was gotten when a friend of ours asked us to arrange a birthday party. and here we are!"})]}),Object(n.jsx)("div",{id:"row",children:e.data?e.data.map((function(e,a){return Object(n.jsx)("div",{className:"col-md-3 col-sm-6 team",children:Object(n.jsxs)("div",{className:"thumbnail",children:[" ",Object(n.jsx)("img",{src:e.img,alt:"...",className:"team-img"}),Object(n.jsxs)("div",{className:"caption",children:[Object(n.jsx)("h4",{children:e.name}),Object(n.jsx)("p",{children:e.job})]})]})},"".concat(e.name,"-").concat(a))})):"loading"})]})})},y={name:"",email:"",message:""},w=function(e){var a=Object(s.useState)(y),t=Object(o.a)(a,2),c=t[0],i=c.name,l=c.email,r=c.message,d=t[1],b=function(e){var a=e.target,t=a.name,s=a.value;d((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(m.a)({},t,s))}))};console.log(i,l,r,(function(){return d({initialState:y})}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"contact",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"section-title",children:[Object(n.jsx)("h2",{children:"Get In Touch"}),Object(n.jsx)("p",{children:"Please fill out the form below to send us an email and we will get back to you as soon as possible."})]}),Object(n.jsxs)("form",{name:"sentMessage",validate:!0,onSubmit:function(e){e.preventDefault(),g.a.sendForm("service_2z4dnmr","template_4oqyicr",e.target,"user_kCREZLuMlcYDdidzhOrCD").then((function(a){console.log(a.text),console.log(e)}),(function(e){console.log(e.text)}))},children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("input",{type:"text",id:"name",name:"name",className:"form-control",placeholder:"Name",required:!0,onChange:b}),Object(n.jsx)("p",{className:"help-block text-danger"})]})}),Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("input",{type:"email",id:"email",name:"email",className:"form-control",placeholder:"Email",required:!0,onChange:b}),Object(n.jsx)("p",{className:"help-block text-danger"})]})})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("textarea",{name:"message",id:"message",className:"form-control",rows:"4",placeholder:"Message",required:!0,onChange:b}),Object(n.jsx)("p",{className:"help-block text-danger"})]}),Object(n.jsx)("div",{id:"success"}),Object(n.jsx)("button",{type:"submit",className:"btn btn-custom btn-lg",children:"Send Message"})]})]})}),Object(n.jsxs)("div",{className:"col-md-3 col-md-offset-1 contact-info",children:[Object(n.jsxs)("div",{className:"contact-item",children:[Object(n.jsx)("h3",{children:"Contact Info"}),Object(n.jsxs)("p",{children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"fa fa-map-marker"})," Address"]}),e.data?e.data.address:"loading"]})]}),Object(n.jsx)("div",{className:"contact-item",children:Object(n.jsxs)("p",{children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"fa fa-phone"})," Phone"]})," ",e.data?e.data.phone:"loading"]})}),Object(n.jsx)("div",{className:"contact-item",children:Object(n.jsxs)("p",{children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})," ",e.data?e.data.email:"loading",Object(n.jsx)("span",{}),e.data?e.data.email2:"loading"]})})]}),Object(n.jsx)("div",{className:"col-md-12",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"social",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:e.data?e.data.facebook:"/",children:Object(n.jsx)("i",{className:"fa fa-facebook"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:e.data?e.data.twitter:"/",children:Object(n.jsx)("i",{className:"fa fa-twitter"})})})]})})})})]})}),Object(n.jsx)("div",{id:"footer",children:Object(n.jsx)("div",{className:"container text-center",children:Object(n.jsxs)("p",{children:["\xa9 2021 Foram joshi "," ",Object(n.jsx)("a",{href:"/",rel:"nofollow",children:"| about me |"})]})})})]})},I=t(8),_=t(9),k=t.n(_),C=(t(19),new k.a('a[href*="#"]',{speed:1e3,speedAsDuration:!0}),function(){var e=Object(s.useState)({}),a=Object(o.a)(e,2),t=a[0],c=a[1];return Object(s.useEffect)((function(){c(I)}),[]),Object(n.jsxs)("div",{id:"parent",children:[Object(n.jsx)(r,{}),Object(n.jsx)(d,{data:t.Header}),Object(n.jsx)(p,{data:t.Features}),Object(n.jsx)(u,{data:t.About}),Object(n.jsx)(x,{data:t.Services}),Object(n.jsx)(f,{data:t.Gallery}),Object(n.jsx)(v,{data:t.Testimonials}),Object(n.jsx)(N,{data:t.Team}),Object(n.jsx)(w,{data:t.Contact})]})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('{"Header":{"title":"panache events Management","paragraph":"Come and we give you the best party experience"},"About":{"paragraph":"Panache is a small Event Management business ran by 3 ladies called Preeti Singhvi, Anusha Kansara and Lata Reddy. It is our passion. The idea of this business was gotten when a friend of ours asked us to arrange a birthday party.","Why":["We make hand made decorations"],"Why2":["We\'ve managed to make 13 to 14 successful events"]},"Gallery":[{"title":"chairs","largeImage":"img/portfolio/chairs.png","smallImage":"img/portfolio/chairs_.png"},{"title":"balloons heart","largeImage":"img/portfolio/balloonHeart.png","smallImage":"img/portfolio/balloonHeart_.png"},{"title":"birthday","largeImage":"img/portfolio/cartoon.png","smallImage":"img/portfolio/cartoon_.png"},{"title":"reception","largeImage":"img/portfolio/reception.png","smallImage":"img/portfolio/entry_.png"},{"title":"decorations","largeImage":"img/portfolio/decorD.png","smallImage":"img/portfolio/greenD.jpg"},{"title":"decor","largeImage":"img/portfolio/floor.png","smallImage":"img/portfolio/floor_.png"},{"title":"flowers","largeImage":"img/portfolio/flowersM.png","smallImage":"img/portfolio/flowersM_.png"},{"title":"decorations","largeImage":"img/portfolio/floor.png","smallImage":"img/portfolio/floor.png"},{"title":"bouquet","largeImage":"img/portfolio/bottledecor.png","smallImage":"img/portfolio/bottledecor_.png"},{"title":"bouquet","largeImage":"img/portfolio/bottlesA.png","smallImage":"img/portfolio/bottlesA_.png"},{"title":"decorations","largeImage":"img/portfolio/decorD.png","smallImage":"img/portfolio/decorD_.png"},{"title":"decor","largeImage":"img/portfolio/decorDA.png","smallImage":"img/portfolio/decorDA_.png"},{"title":"reception","largeImage":"img/portfolio/balloonReception.png","smallImage":"img/portfolio/balloonReception_.png"},{"title":"balloons","largeImage":"img/portfolio/balloon.png","smallImage":"img/portfolio/balloon_.png"},{"title":"birthday","largeImage":"img/portfolio/birthday.png","smallImage":"img/portfolio/birthday_.png"},{"title":"bouquet","largeImage":"img/portfolio/bouquet.png","smallImage":"img/portfolio/bouquet_.png"},{"title":"flowers","largeImage":"img/portfolio/flwers.png","smallImage":"img/portfolio/flwers_.png"},{"title":"flowers","largeImage":"img/portfolio/flowersM.png","smallImage":"img/portfolio/flowersM_.png"},{"title":"bouquet","largeImage":"img/portfolio/gunj.png","smallImage":"img/portfolio/gunj_.png"},{"title":"happy birthday","largeImage":"img/portfolio/happyBirthday.png","smallImage":"img/portfolio/happyBirthday_.png"},{"title":"our team","largeImage":"img/portfolio/ladies.png","smallImage":"img/portfolio/ladies_.png"},{"title":"table decor","largeImage":"img/portfolio/table.png","smallImage":"img/portfolio/table_.png"},{"title":"decorations","largeImage":"img/portfolio/steps.png","smallImage":"img/portfolio/steps_.png"},{"title":"decorations","largeImage":"img/portfolio/rangoli.png","smallImage":"img/portfolio/rangoli_.png"},{"title":"reception","largeImage":"img/portfolio/reception.png","smallImage":"img/portfolio/reception_.png"},{"title":"table decor","largeImage":"img/portfolio/table.png","smallImage":"img/portfolio/table_.png"}],"Services":[{"icon":"img/services/birthday-cake-solid.svg","name":"Birthday parties","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"img/services/praying-hands-solid.svg","name":"religious ceremonies","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"img/services/baby-carriage-solid.svg","name":"Baby showers","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"img/services/palette-solid.svg","name":"Exhibitions","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"img/services/people-carry-solid.svg","name":"Community functions","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"img/services/glass-cheers-solid.svg","name":"Others","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."}],"Team":[{"img":"img/team/preeti.jpg","name":"Preeti Singhvi","job":"Founder"},{"img":"img/team/anusha.jpg","name":"Anusha Kansara","job":"Founder"},{"img":"img/team/lata.jpg","name":"Lata Reddy","job":"Founder"}],"Contact":{"address":"Kampala, Uganda","phone":"+256 759 220504","email":"preeti.uganda@gmail.com","email2":"lata.alla@gmail.com","facebook":"https://www.facebook.com/Panache-272167993242946/","twitter":"","youtube":""}}')}},[[20,1,2]]]);
//# sourceMappingURL=main.b12fc77b.chunk.js.map