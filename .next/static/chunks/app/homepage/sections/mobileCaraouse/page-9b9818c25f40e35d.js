(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[412,738],{760:(e,t,l)=>{"use strict";l.d(t,{N:()=>g});var n=l(5155),s=l(2115),a=l(869),r=l(2885),i=l(7494),o=l(845),c=l(1508);class d extends s.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,l=e instanceof HTMLElement&&e.offsetWidth||0,n=this.props.sizeRef.current;n.height=t.offsetHeight||0,n.width=t.offsetWidth||0,n.top=t.offsetTop,n.left=t.offsetLeft,n.right=l-n.width-n.left}return null}componentDidUpdate(){}render(){return this.props.children}}function u(e){let{children:t,isPresent:l,anchorX:a}=e,r=(0,s.useId)(),i=(0,s.useRef)(null),o=(0,s.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:u}=(0,s.useContext)(c.Q);return(0,s.useInsertionEffect)(()=>{let{width:e,height:t,top:n,left:s,right:c}=o.current;if(l||!i.current||!e||!t)return;i.current.dataset.motionPopId=r;let d=document.createElement("style");return u&&(d.nonce=u),document.head.appendChild(d),d.sheet&&d.sheet.insertRule('\n          [data-motion-pop-id="'.concat(r,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            ").concat("left"===a?"left: ".concat(s):"right: ".concat(c),"px !important;\n            top: ").concat(n,"px !important;\n          }\n        ")),()=>{document.head.removeChild(d)}},[l]),(0,n.jsx)(d,{isPresent:l,childRef:i,sizeRef:o,children:s.cloneElement(t,{ref:i})})}let x=e=>{let{children:t,initial:l,isPresent:a,onExitComplete:i,custom:c,presenceAffectsLayout:d,mode:x,anchorX:p}=e,f=(0,r.M)(h),m=(0,s.useId)(),g=(0,s.useCallback)(e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;i&&i()},[f,i]),b=(0,s.useMemo)(()=>({id:m,initial:l,isPresent:a,custom:c,onExitComplete:g,register:e=>(f.set(e,!1),()=>f.delete(e))}),d?[Math.random(),g]:[a,g]);return(0,s.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[a]),s.useEffect(()=>{a||f.size||!i||i()},[a]),"popLayout"===x&&(t=(0,n.jsx)(u,{isPresent:a,anchorX:p,children:t})),(0,n.jsx)(o.t.Provider,{value:b,children:t})};function h(){return new Map}var p=l(2082);let f=e=>e.key||"";function m(e){let t=[];return s.Children.forEach(e,e=>{(0,s.isValidElement)(e)&&t.push(e)}),t}let g=e=>{let{children:t,custom:l,initial:o=!0,onExitComplete:c,presenceAffectsLayout:d=!0,mode:u="sync",propagate:h=!1,anchorX:g="left"}=e,[b,w]=(0,p.xQ)(h),v=(0,s.useMemo)(()=>m(t),[t]),j=h&&!b?[]:v.map(f),N=(0,s.useRef)(!0),y=(0,s.useRef)(v),E=(0,r.M)(()=>new Map),[P,k]=(0,s.useState)(v),[C,I]=(0,s.useState)(v);(0,i.E)(()=>{N.current=!1,y.current=v;for(let e=0;e<C.length;e++){let t=f(C[e]);j.includes(t)?E.delete(t):!0!==E.get(t)&&E.set(t,!1)}},[C,j.length,j.join("-")]);let M=[];if(v!==P){let e=[...v];for(let t=0;t<C.length;t++){let l=C[t],n=f(l);j.includes(n)||(e.splice(t,0,l),M.push(l))}return"wait"===u&&M.length&&(e=M),I(m(e)),k(v),null}let{forceRender:R}=(0,s.useContext)(a.L);return(0,n.jsx)(n.Fragment,{children:C.map(e=>{let t=f(e),s=(!h||!!b)&&(v===C||j.includes(t));return(0,n.jsx)(x,{isPresent:s,initial:(!N.current||!!o)&&void 0,custom:l,presenceAffectsLayout:d,mode:u,onExitComplete:s?void 0:()=>{if(!E.has(t))return;E.set(t,!0);let e=!0;E.forEach(t=>{t||(e=!1)}),e&&(null==R||R(),I(y.current),h&&(null==w||w()),c&&c())},anchorX:g,children:e},t)})})}},3611:(e,t,l)=>{Promise.resolve().then(l.bind(l,7412))},7412:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>i});var n=l(5155),s=l(760),a=l(9788),r=l(2115);let i=()=>{let[e,t]=(0,r.useState)(0),l=["/images/frame1.png","/images/frame2.png","/images/frame3.png","/images/frame4.png","/images/frame5.png","/images/frame7.png","/images/frame6.png"];(0,r.useEffect)(()=>{let e=setInterval(()=>{t(e=>e===l.length-1?0:e+1)},4e3);return()=>clearInterval(e)},[l.length]);let i=()=>{let t=(e-2+l.length)%l.length,n=(e-1+l.length)%l.length;return{prevIndex2:t,prevIndex1:n,nextIndex1:(e+1)%l.length,nextIndex2:(e+2)%l.length}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center mb-8 pt-10",children:[(0,n.jsx)("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B3674] mb-3",children:"Our Mobile App Showcase"}),(0,n.jsx)("p",{className:"text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4",children:"Experience our intuitive and beautifully designed mobile application interface"})]}),(0,n.jsxs)("div",{className:"relative h-[100vh] md:h-screen w-full overflow-hidden bg-white-600",children:[(0,n.jsxs)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2    w-[300px] sm:w-[290px] h-[510px] sm:h-[510px] bg-black rounded-[40px] z-20    border-6 sm:border-8 border-[rgb(164, 89, 235)] shadow-2xl",children:[(0,n.jsx)("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2    w-24 sm:w-32 h-4 sm:h-6 bg-black rounded-b-2xl"}),(0,n.jsx)("div",{className:"h-full w-full overflow-hidden rounded-[32px]",children:(0,n.jsx)(s.N,{mode:"wait",children:(0,n.jsx)(a.P.div,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},exit:{opacity:0,x:100},transition:{duration:.5},className:"h-full w-full",children:(0,n.jsx)("img",{src:l[e],alt:"Main ".concat(e+1),className:"h-full w-full object-cover"})},e)})})]}),(0,n.jsx)(a.P.div,{className:"hidden lg:block absolute top-1/2 left-[2%] xl:left-[5%] transform -translate-y-1/2    w-[180px] xl:w-[220px] h-[380px] xl:h-[460px]",initial:{x:-100},animate:{x:0},transition:{duration:.5},children:(0,n.jsx)("img",{src:l[i().prevIndex2],alt:"Previous 2",className:"w-full h-full object-cover rounded-lg shadow-xl opacity-70"})}),(0,n.jsx)(a.P.div,{className:"hidden md:block absolute top-1/2 left-[20%] lg:left-[22%] transform -translate-y-1/2    w-[180px] xl:w-[220px] h-[380px] xl:h-[460px]",initial:{x:-100},animate:{x:0},transition:{duration:.5},children:(0,n.jsx)("img",{src:l[i().prevIndex1],alt:"Previous 1",className:"w-full h-full object-cover rounded-lg shadow-xl opacity-70"})}),(0,n.jsx)(a.P.div,{className:"hidden md:block absolute top-1/2 right-[20%] lg:right-[22%] transform -translate-y-1/2    w-[180px] xl:w-[220px] h-[380px] xl:h-[460px]",initial:{x:100},animate:{x:0},transition:{duration:.5},children:(0,n.jsx)("img",{src:l[i().nextIndex1],alt:"Next 1",className:"w-full h-full object-cover rounded-lg shadow-xl opacity-70"})}),(0,n.jsx)(a.P.div,{className:"hidden lg:block absolute top-1/2 right-[2%] xl:right-[5%] transform -translate-y-1/2    w-[180px] xl:w-[220px] h-[380px] xl:h-[460px]",initial:{x:100},animate:{x:0},transition:{duration:.5},children:(0,n.jsx)("img",{src:l[i().nextIndex2],alt:"Next 2",className:"w-full h-full object-cover rounded-lg shadow-xl opacity-70"})}),(0,n.jsx)("div",{className:"absolute top-[85%] sm:top-[90%] left-1/2 transform -translate-x-1/2 flex space-x-2 z-30",children:l.map((l,s)=>(0,n.jsx)("button",{onClick:()=>t(s),className:"w-3 h-3 rounded-full transition-all duration-300 \n                                            ".concat(e===s?"bg-purple-600 scale-125":"bg-gray-300")},s))})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[788,441,684,358],()=>t(3611)),_N_E=e.O()}]);