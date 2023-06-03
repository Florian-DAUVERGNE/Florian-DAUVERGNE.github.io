(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[4],{41:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return l}));var a=r(8),c=r(1),i=[{id:1,title:"Domotique",link:"domotique",category:"Arduino",img:r.p+"static/media/vitrine.e0fbd0d1.jpg",ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:2,title:"Aquarium",link:"aquarium",category:"Arduino",img:r.p+"static/media/vitrine.3fab8709.jpg"}],s=r(2),n=Object(c.createContext)(),l=function(e){var t=Object(c.useState)(i),r=Object(a.a)(t,2),l=r[0],o=r[1],d=Object(c.useState)(""),j=Object(a.a)(d,2),m=j[0],x=j[1],b=Object(c.useState)(""),g=Object(a.a)(b,2),u=g[0],p=g[1],h=l.filter((function(e){return e.title.toLowerCase().includes(m.toLowerCase())||""===m?e:""})),y=l.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(u)}));return Object(s.jsx)(n.Provider,{value:{projects:l,setProjects:o,searchProject:m,setSearchProject:x,searchProjectsByTitle:h,selectProject:u,setSelectProject:p,selectProjectsByCategory:y},children:e.children})}},42:function(e,t,r){"use strict";var a=r(1),c=r(6),i=r(39),s=r(13),n=r(2),l=function(e){var t=e.title,r=e.category,a=e.image,c=e.link,l="/projects/single-project-".concat(c);return Object(n.jsx)(i.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(n.jsx)(s.b,{to:l,"aria-label":"Single Project",children:Object(n.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:a,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(n.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(n.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(n.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r})]})]})})})},o=r(41),d=["Web Application","Mobile Application","UI/UX Design","Branding","Arduino"],j=function(e){var t=e.setSelectProject;return Object(n.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[Object(n.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((function(e){return Object(n.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})};t.a=function(){var e=Object(a.useContext)(o.a),t=e.projects,r=e.searchProject,i=e.setSearchProject,s=e.searchProjectsByTitle,d=e.selectProject,m=e.setSelectProject,x=e.selectProjectsByCategory;return Object(n.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(n.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(n.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Search projects by title or filter by category"}),Object(n.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[Object(n.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(n.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:Object(n.jsx)(c.n,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(n.jsx)("input",{onChange:function(e){i(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(n.jsx)(j,{setSelectProject:m})]})]}),Object(n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:d?x.map((function(e){return Object(n.jsx)(l,{title:e.title,category:e.category,image:e.img,link:e.link},e.id)})):r?s.map((function(e){return Object(n.jsx)(l,{title:e.title,category:e.category,image:e.img,link:e.link},e.id)})):t.map((function(e){return Object(n.jsx)(l,{title:e.title,category:e.category,image:e.img,link:e.link},e.id)}))})]})}},47:function(e,t,r){"use strict";r.r(t);var a=r(42),c=r(41),i=r(2);t.default=function(){return Object(i.jsx)(c.b,{children:Object(i.jsx)("div",{className:"container mx-auto",children:Object(i.jsx)(a.a,{})})})}}}]);
//# sourceMappingURL=4.6a1b9806.chunk.js.map