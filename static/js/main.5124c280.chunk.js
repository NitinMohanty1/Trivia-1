(this["webpackJsonpmcq-react"]=this["webpackJsonpmcq-react"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(27),i=n.n(s),r=(n(36),n(2)),c=(n(37),n(4)),l=n(63),u=n(64),h=n(65),d=(n(38),n(1));function f(){var e=Object(o.useState)(""),t=Object(c.a)(e,2),n=t[0],a=t[1],s=Object(r.f)();return Object(d.jsx)("div",{class:"content",children:Object(d.jsxs)("div",{style:{paddingTop:"20%",paddingLeft:"40%",paddingBottom:"23%"},children:[Object(d.jsx)(l.a,{className:"mb-3",style:{width:"30%"},children:Object(d.jsx)(u.a,{value:n,onChange:function(e){return a(e.target.value)},placeholder:"Enter you name"})}),Object(d.jsx)(h.a,{variant:"primary",style:{width:"30%"},onClick:function(){return function(){var e=new URLSearchParams;n?e.append("name",n):e.delete("name"),s({pathname:"/question",search:e.toString()})}()},children:"Start Game"})]})})}var O=n(28),b=n.n(O);function j(e){var t=e.name,n=e.score;return Object(o.useEffect)((function(){console.log({name:t,score:n}),b.a.post("https://sheet.best/api/sheets/f31b1449-a291-42e1-9613-4151d9f922e9",{name:t,score:n})}),[]),Object(d.jsxs)("div",{children:["Your final score is ",n," out of 11. Thank you ",t,"!!!"]})}var m=function(e){return Object(d.jsx)(d.Fragment,{children:e.options[e.id].map((function(t){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"radio",value:t[0],onChange:e.onChange,name:"".concat(e.name,"-").concat(e.id+1)}),t]})}))})};function A(e){var t=e.type,n=e.question,a=e.option,s=e.onOptionSelection,i=e.onAnswerSubmit,r=e.id,l=e.timerCount,u=e.onTimerEnd,f=Object(o.useState)(0),O=Object(c.a)(f,2),b=O[0],j=O[1];return Object(o.useEffect)((function(){console.log("called",t,l),j(l)}),[]),Object(o.useEffect)((function(){var e=setInterval((function(){b>0?j(b-1):(u(),j(l))}),1e3);return function(){clearInterval(e)}})),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:["Timer: ",b]}),Object(d.jsxs)("div",{className:"col-12 my-4",children:[r+1,". ",n.question]}),Object(d.jsx)(m,{options:a,name:t,onChange:function(e){return s(e)},id:r}),Object(d.jsx)(h.a,{style:{width:"20%"},onClick:function(){return i(n.answer)},children:"Submit"})]})}function p(){var e=Object(r.e)().search,t=new URLSearchParams(e).get("name"),n=Object(o.useState)(0),a=Object(c.a)(n,2),s=a[0],i=a[1],l=Object(o.useState)(""),u=Object(c.a)(l,2),h=u[0],f=u[1],O=Object(o.useState)(""),b=Object(c.a)(O,2),m=b[0],p=b[1],g=Object(o.useState)(!1),B=Object(c.a)(g,2),R=B[0],T=B[1],D=Object(o.useState)(0),N=Object(c.a)(D,2),v=N[0],y=N[1],x=Object(o.useState)(0),k=Object(c.a)(x,2),F=k[0],q=k[1],L=Object(o.useState)(""),H=Object(c.a)(L,2),U=H[0],I=H[1],P=function(e){m===e&&q(F+.5),T(!1),y(v+1)};return Object(d.jsx)("div",{className:"container-fluid p-4",children:s===E.length?Object(d.jsx)(j,{score:F,name:t}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:["Hello ",t,"!!! Welcome to the Flagship event of DOT Club. All the Best"]}),Object(d.jsxs)("div",{children:["Score: ",F]}),!!U&&Object(d.jsxs)("div",{style:{color:"green",fontSize:"20px",fontWeight:"bold"},children:["Clue: ",U]}),Object(d.jsxs)("div",{className:"row no-gutters",children:[R&&C.map((function(e,t){return t===v&&Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{color:"red",fontSize:"20px",fontWeight:"bold"},children:"Setback Question"}),Object(d.jsx)(A,{type:"setback",question:e,id:t,option:w,timerCount:30,onOptionSelection:function(e){return function(e){p(e.target.value)}(e)},onAnswerSubmit:function(){return P(e.answer)},onTimerEnd:function(){return P(null)}})]})})),!R&&E.map((function(e,t){return t===s&&Object(d.jsx)(A,{type:"question",question:e,id:t,option:S,timerCount:90,onOptionSelection:function(e){return function(e){f(e.target.value)}(e)},onAnswerSubmit:function(){return function(e,t){h===e?(q(F+1),I(t)):(T(!0),I("")),i(s+1)}(e.answer,e.clue)},onTimerEnd:function(){return i(s+1)}})}))]})]})})}var E=[{question:"Alien Pk and Alien Dhoop are travelling to earth.Alien dhoop is the son of Alien pk but alien pk is not the father of Alien dhoop. What is the relation between alien dhoop and alien pk ? : ",answer:"C",clue:"A"},{question:"If on planet earth 31 March 2017 is a Saturday,find the day of the week on 1 january 2014 : ",answer:"B",clue:"DC"},{question:"You travel three different distance  from the space station 10 km 20 km and 30 km  at a speed of 1/2km hr,1/3km/hr and 1km /hr respectively.What is the ratio of the time taken for the distances given ?: ",answer:"D",clue:"EF"},{question:"ALL MOONS ARE STARS.B.ALL STARS ARE GALAXIES C.NO STARS ARE PLANETS  : \n  CON 1-SOME PLANETS ARE GALAXIES \n  CON 2-NO PLANET IS A GALAXY",answer:"C",clue:"B"},{question:"PARAJUMBLE \n A. Later this month, if all goes according to plan, a rocket called the Falcon Heavy will take off from Cape Canaver-al, in Florida \n B. Its mission is to put a sports car in orbit around the sun. \n C. The Falcon Heavy is the latest product of SpaceX, a firm founded by Elon Musk, an American billionaire. \n D. Before then, the Falcon Heavy may earn its keep lifting satellites and carrying tourists on slingshot trips around the moon. \n E. The car is Mr Musk's own, made by Tesla, another of his businesses. \n F. SpaceX has the explicit aim, besides making money, of enabling people to travel to and colonise Mars ",answer:"D",clue:""},{question:"Aliens Pintu and Chintu are buying a new spaceship which runs at a speed of 90 km/hr. If the speed of the spaceship reduces constantly by 10% of initial speed each year then what will be the speed at which it will run after two years ?: ",answer:"A",clue:""},{question:"How is alien Pintu\u2019s mother\u2019s niece\u2019s father related to Pintu ? : ",answer:"B",clue:""},{question:"Pointing to a baby alien, Alien Mintali said \u201cHe is the only grandson of my grandfather\u201d. How is the boy related to Mintali ?: ",answer:"C",clue:""},{question:"CUP : LIP :: BIRD :",answer:"C",clue:""},{question:"Two tickets from planet A to B and three tickets from planet A to C cost Rs. 77 but three tickets from planet A to B and two tickets from planet A to C cost Rs. 73. What are the fares for planets B and C from A ?: ",answer:"D",clue:""},{question:"If 2048 people entered a statewide singles tennis tournament,how many total matches would be played ,including the championship match ? : ",answer:"B",clue:""}],S=[["A. MOTHER","B. BROTHER","C. FATHER","D. SISTER"],["A. TUESDAY","B. THURSDAY","C. MONDAY","D. SUNDAY"],["A. 2:3:6","B. 3:2:6","C. 1:2:3","D. 2:6:3"],["A. Only Conclusion 1 Follows","B. Only Conclusion 2 Follows","C. Both Conclusion Follows","D. None Follows"],["A. ABCDEF","B. ACDEFB","C. AFDCEB","D. NONE OF THESE"],["A. 72","B. 26","C. 99","D. 81"],["A. COUSIN","B. UNCLE","C. NEPHEW","D. SON"],["A. SON","B. UNCLE","C. BROTHER","D. NONE OF THESE"],["A. GRASS","B. FOREST","C. BEAK","D. BOOK"],["A. 20","B. 22","C. 26","D. 30"],["A. Rs. 14, Rs. 23","B. Rs. 25, Rs. 24","C. Rs. 17, Rs. 30","D. Rs. 13, Rs. 17"],["A. 2045","B. 2047","C. 2046","D. 2048"]],C=[{question:"Which of these planets has no moons ? : ",answer:"C"},{question:"Right now, which of these is further from the Sun ? : ",answer:"B"},{question:"Which of these is the moon of Jupiter ? : ",answer:"A"},{question:"WHICH OF THESE IS LARGEST OBJECT IN THE ASTEROID BELT - ? : ",answer:"D"},{question:"OTE, PUF, QVG, RWH ? : ",answer:"B"},{question:"What four-letter word can be placed in front of each of the following words to form new words ? : ",answer:"B"},{question:"Safe : Secure :: Protect : ? : ",answer:"D"},{question:"Pointing out to jadoo, krissh  said, 'He is the Son-in-law of the grandmother of my father's only son.' How is that man related to the krissh ? : ",answer:"D"},{question:"Pintu found 80 chocolates in Nebula and returned home with them. If he has 7 siblings then how many chocolates each of the siblings in the family get ? : ",answer:"C"}],w=[["A. VENUS","B. NEPTUNE","C. MERCURY","D. URANUS"],["A. NEPTUNE","B. PLUTO","C. MERCURY","D. VENUS"],["A. LO","B. ENCELADUS ","C. URANUS","D. NONE OF THESE"],["A. MAKEMAKE ","B. URANUS","C. MARS","D. CERES"],["A. SXJ","B. SXI","C. SYJ","D. TCI"],["A. LINE","B. HEAD","C. WATERS","D. PHONE"],["A. Lock","B. Sure ","C. Conserve","D. Guard"],["A. BROTHER","B. FATHER","C. UNCLE","D. CANNOT BE DETERMINED"],["A. 12","B. 14 ","C. 10","D. 8"]];var g=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/",element:Object(d.jsx)(f,{})}),Object(d.jsx)(r.a,{path:"/question",element:Object(d.jsx)(p,{})})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),o(e),a(e),s(e),i(e)}))},R=(n(61),n(29));i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(R.a,{children:Object(d.jsx)(g,{})})}),document.getElementById("root")),B()}},[[62,1,2]]]);
//# sourceMappingURL=main.5124c280.chunk.js.map