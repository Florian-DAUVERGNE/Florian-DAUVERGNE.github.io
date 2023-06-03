(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[3],{41:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l}));var a=r(8),i=r(1),s=[{id:1,title:"Domotique",link:"domotique",category:"Arduino",img:r.p+"static/media/vitrine.e0fbd0d1.jpg",ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:2,title:"Aquarium",link:"aquarium",category:"Arduino",img:r.p+"static/media/vitrine.3fab8709.jpg"}],n=r(2),c=Object(i.createContext)(),l=function(e){var t=Object(i.useState)(s),r=Object(a.a)(t,2),l=r[0],o=r[1],d=Object(i.useState)(""),m=Object(a.a)(d,2),x=m[0],j=m[1],g=Object(i.useState)(""),u=Object(a.a)(g,2),b=u[0],y=u[1],p=l.filter((function(e){return e.title.toLowerCase().includes(x.toLowerCase())||""===x?e:""})),h=l.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(b)}));return Object(n.jsx)(c.Provider,{value:{projects:l,setProjects:o,searchProject:x,setSearchProject:j,searchProjectsByTitle:p,selectProject:b,setSelectProject:y,selectProjectsByCategory:h},children:e.children})}},42:function(e,t,r){"use strict";var a=r(1),i=r(6),s=r(39),n=r(13),c=r(2),l=function(e){var t=e.title,r=e.category,a=e.image,i=e.link,l="/projects/single-project-".concat(i);return Object(c.jsx)(s.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(c.jsx)(n.b,{to:l,"aria-label":"Single Project",children:Object(c.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:a,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(c.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(c.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(c.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r})]})]})})})},o=r(41),d=["Web Application","Mobile Application","UI/UX Design","Branding","Arduino"],m=function(e){var t=e.setSelectProject;return Object(c.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[Object(c.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((function(e){return Object(c.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})};t.a=function(){var e=Object(a.useContext)(o.a),t=e.projects,r=e.searchProject,s=e.setSearchProject,n=e.searchProjectsByTitle,d=e.selectProject,x=e.setSelectProject,j=e.selectProjectsByCategory;return Object(c.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(c.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(c.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Search projects by title or filter by category"}),Object(c.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[Object(c.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(c.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:Object(c.jsx)(i.n,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(c.jsx)("input",{onChange:function(e){s(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(c.jsx)(m,{setSelectProject:x})]})]}),Object(c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:d?j.map((function(e){return Object(c.jsx)(l,{title:e.title,category:e.category,image:e.img,link:e.link},e.id)})):r?n.map((function(e){return Object(c.jsx)(l,{title:e.title,category:e.category,image:e.img,link:e.link},e.id)})):t.map((function(e){return Object(c.jsx)(l,{title:e.title,category:e.category,image:e.img,link:e.link},e.id)}))})]})}},52:function(e,t,r){"use strict";r.r(t);var a=r(13),i=r(8),s=r(23),n=r(6),c=r.p+"static/media/developer.ef097afb.svg",l=r.p+"static/media/developer-dark.3f07bd13.svg",o=r(39),d=r(2),m=function(){var e=Object(s.a)(),t=Object(i.a)(e,1)[0];return Object(d.jsxs)(o.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[Object(d.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[Object(d.jsx)(o.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"PORTFOLIO"}),Object(d.jsx)(o.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"DAUVERGNE Florian"}),Object(d.jsx)(o.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:Object(d.jsxs)("a",{download:"RussellMasato.pdf",href:"/files/DauvergneFlorian.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[Object(d.jsx)(n.a,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),Object(d.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Mon CV"})]})})]}),Object(d.jsx)(o.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:Object(d.jsx)("img",{src:"dark"===t?c:l,alt:"Developer"})})]})},x=r(42),j=r(41),g=r(18);t.default=function(){return Object(d.jsxs)("div",{className:"container mx-auto",children:[Object(d.jsx)(m,{}),Object(d.jsx)(j.b,{children:Object(d.jsx)(x.a,{})}),Object(d.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:Object(d.jsx)(a.b,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:Object(d.jsx)(g.a,{title:"More Projects"})})})]})}}}]);
//# sourceMappingURL=3.2652801e.chunk.js.map