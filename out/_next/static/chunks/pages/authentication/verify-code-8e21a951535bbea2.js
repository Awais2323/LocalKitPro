(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9786],{44373:function(e,t,r){"use strict";var i=r(63366),n=r(87462),a=r(67294),o=r(86010),l=r(94780),s=r(41796),c=r(81719),d=r(78884),u=r(75741),$=r(85893);let h=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=e=>{let{absolute:t,children:r,classes:i,flexItem:n,light:a,orientation:o,textAlign:s,variant:c}=e;return(0,l.Z)({root:["root",t&&"absolute",c,a&&"light","vertical"===o&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]},u.V,i)},x=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),m=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver(e,t){let{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>(0,n.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),p=a.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:l,className:s,component:c=l?"div":"hr",flexItem:u=!1,light:p=!1,orientation:g="horizontal",role:v="hr"!==c?"separator":void 0,textAlign:_="center",variant:b="fullWidth"}=r,j=(0,i.Z)(r,h),y=(0,n.Z)({},r,{absolute:a,component:c,flexItem:u,light:p,orientation:g,role:v,textAlign:_,variant:b}),Z=f(y);return(0,$.jsx)(x,(0,n.Z)({as:c,className:(0,o.Z)(Z.root,s),role:v,ref:t,ownerState:y},j,{children:l?(0,$.jsx)(m,{className:Z.wrapper,ownerState:y,children:l}):null}))});t.Z=p},75741:function(e,t,r){"use strict";r.d(t,{V:function(){return a}});var i=r(34867),n=r(1588);function a(e){return(0,i.Z)("MuiDivider",e)}let o=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=o},91286:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authentication/verify-code",function(){return r(78570)}])},88986:function(e,t,r){"use strict";r.d(t,{U:function(){return h}});var i=r(85893),n=r(41664),a=r.n(n),o=r(61953),l=r(36336),s=r(21448),c=r(29630),d=r(68346),u=r(72389),$={Amplify:"/static/icons/amplify.svg",Auth0:"/static/icons/auth0.svg",Firebase:"/static/icons/firebase.svg",JWT:"/static/icons/jwt.svg"},h=function(){return(0,i.jsx)(o.Z,{sx:{backgroundColor:"background.paper",borderBottom:1,borderColor:"divider",py:1},children:(0,i.jsx)(l.Z,{maxWidth:"md",children:(0,i.jsxs)(o.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[(0,i.jsx)(s.Z,{color:"primary",label:"NEW",sx:{mr:2},size:"small"}),(0,i.jsxs)(c.Z,{variant:"subtitle2",children:["Visit our"," ",(0,i.jsx)(a(),{href:"/docs/welcome",passHref:!0,children:(0,i.jsx)(d.Z,{variant:"subtitle2",children:"docs"})})," ","and find out how to switch between"]}),(0,i.jsxs)(o.Z,{sx:{alignItems:"center",display:"flex","& img":{height:30,m:1}},children:[(0,i.jsx)(u.Z,{title:"Amplify",children:(0,i.jsx)("img",{alt:"Amplify",src:$.Amplify})}),(0,i.jsx)(u.Z,{title:"Auth0",children:(0,i.jsx)("img",{alt:"Auth0",src:$.Auth0})}),(0,i.jsx)(u.Z,{title:"Firebase",children:(0,i.jsx)("img",{alt:"Firebase",src:$.Firebase})}),(0,i.jsx)(u.Z,{title:"JSON Web Token",children:(0,i.jsx)("img",{alt:"JWT",src:$.JWT})})]})]})})})}},33149:function(e,t,r){"use strict";r.d(t,{A:function(){return c}});var i=r(85893),n=r(67294),a=r(11163),o=r(45697),l=r.n(o),s=r(89731),c=function(e){var t=e.children,r=(0,s.a)(),o=(0,a.useRouter)(),l=(0,n.useState)(!1),c=l[0],d=l[1],u=o.query.disableGuard;return((0,n.useEffect)(function(){o.isReady&&(r.isAuthenticated&&"true"!==u?o.push("/dashboard").catch(console.error):d(!0))},[o.isReady]),c)?(0,i.jsx)(i.Fragment,{children:t}):null};c.propTypes={children:l().node}},89731:function(e,t,r){"use strict";r.d(t,{a:function(){return a}});var i=r(67294),n=r(37411),a=function(){return(0,i.useContext)(n.Vo)}},46723:function(e,t,r){"use strict";r.d(t,{s:function(){return n}});var i=r(67294),n=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,i.useCallback)(function(){return e.current},[])}},78570:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});var i=r(85893),n=r(67294),a=r(9008),o=r.n(a),l=r(41664),s=r.n(l),c=r(11163),d=r(61953),u=r(36336),$=r(29630),h=r(49837),f=r(44373),x=r(68346),m=r(33149),p=r(88986),g=r(47568),v=r(26042),_=r(69396),b=r(70655),j=r(74231),y=r(82175),Z=r(67836),w=r(32631),A=r(54225),C=r(89731),S=r(46723),W=function(e){var t,r=(0,S.s)(),a=(0,c.useRouter)(),o=(0,C.a)().verifyCode,l=(0,n.useRef)([]),s=(0,n.useState)(""),u=s[0],h=s[1],f=(0,y.TA)({enableReinitialize:!0,initialValues:{email:u,code:["","","","","",""],submit:null},validationSchema:j.Ry({email:j.Z_().email("Must be a valid email").max(255).required("Email is required"),code:j.IX().of(j.Z_().required("Code is required"))}),onSubmit:(t=(0,g.Z)(function(e,t){var i,n,l;return(0,b.__generator)(this,function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,o(e.email,e.code.join(""))];case 1:return s.sent(),r()&&a.push("/authentication/login").catch(console.error),[3,3];case 2:return i=s.sent(),console.error(i),n={},l={},r()&&(t.setStatus((n.success=!1,n)),t.setErrors((l.submit=i.message,l)),t.setSubmitting(!1)),[3,3];case 3:return[2]}})}),function(e,r){return t.apply(this,arguments)})});(0,n.useEffect)(function(){l.current=l.current.slice(0,6);var e=sessionStorage.getItem("username");e&&h(e)},[]);var x=function(e,t){if("Enter"===e.code){if(f.values.code[t]){f.setFieldValue("code[".concat(t,"]"),"");return}if(t>0){f.setFieldValue("code[".concat(t,"]"),""),l.current[t-1].focus();return}}Number.isInteger(parseInt(e.key,10))&&(f.setFieldValue("code[".concat(t,"]"),e.key),t<5&&l.current[t+1].focus())},m=function(e){var t=e.clipboardData.getData("text").split("");if(6===t.length){var r=!0;t.forEach(function(e){Number.isInteger(parseInt(e,10))||(r=!1)}),r&&(f.setFieldValue("code",t),l.current[5].focus())}};return(0,i.jsxs)("form",(0,_.Z)((0,v.Z)({noValidate:!0,onSubmit:f.handleSubmit},e),{children:[u?(0,i.jsx)(Z.Z,{disabled:!0,fullWidth:!0,margin:"normal",value:u}):(0,i.jsx)(Z.Z,{autoFocus:!0,error:Boolean(f.touched.email&&f.errors.email),fullWidth:!0,helperText:f.touched.email&&f.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:f.handleBlur,onChange:f.handleChange,type:"email",value:f.values.email}),(0,i.jsx)($.Z,{color:"textSecondary",sx:{mb:2,mt:3},variant:"subtitle2",children:"Verification code"}),(0,i.jsx)(d.Z,{sx:{columnGap:"16px",display:"grid",gridTemplateColumns:"repeat(7, 1fr)",pt:1},children:[1,2,3,4,5,6].map(function(e,t){return(0,i.jsx)(Z.Z,{error:Boolean(Array.isArray(f.touched.code)&&6===f.touched.code.length&&f.errors.code),fullWidth:!0,inputRef:function(e){return l.current[t]=e},name:"code[".concat(t,"]"),onBlur:f.handleBlur,onKeyDown:function(e){return x(e,t)},onPaste:m,value:f.values.code[t],sx:{display:"inline-block",textAlign:"center","& .MuiInputBase-input":{textAlign:"center"}}},"code-".concat(t))})}),Boolean(Array.isArray(f.touched.code)&&6===f.touched.code.length&&f.errors.code)&&(0,i.jsx)(w.Z,{error:!0,sx:{mx:"14px"},children:Array.isArray(f.errors.code)&&f.errors.code.find(function(e){return void 0!==e})}),f.errors.submit&&(0,i.jsx)(d.Z,{sx:{mt:3},children:(0,i.jsx)(w.Z,{error:!0,children:f.errors.submit})}),(0,i.jsx)(d.Z,{sx:{mt:3},children:(0,i.jsx)(A.Z,{disabled:f.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Verify"})})]}))},R=r(36788),V=r(38682),k={Amplify:"/static/icons/amplify.svg",Auth0:"/static/icons/auth0.svg",Firebase:"/static/icons/firebase.svg",JWT:"/static/icons/jwt.svg"},T=function(){var e=(0,c.useRouter)(),t=(0,C.a)().platform,r=e.query.disableGuard;return(0,n.useEffect)(function(){V.w.push({event:"page_view"})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o(),{children:(0,i.jsx)("title",{children:"Verify Code | Material Kit Pro"})}),(0,i.jsxs)(d.Z,{component:"main",sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",minHeight:"100vh"},children:[(0,i.jsx)(p.U,{}),(0,i.jsxs)(u.Z,{maxWidth:"sm",sx:{py:{xs:"60px",md:"120px"}},children:[(0,i.jsxs)(d.Z,{sx:{alignItems:"center",backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.900":"neutral.100"},borderColor:"divider",borderRadius:1,borderStyle:"solid",borderWidth:1,display:"flex",flexWrap:"wrap",justifyContent:"space-between",mb:4,p:2,"& > img":{height:32,width:"auto",flexGrow:0,flexShrink:0}},children:[(0,i.jsxs)($.Z,{color:"textSecondary",variant:"caption",children:["The app authenticates via ",t]}),(0,i.jsx)("img",{alt:"Auth platform",src:k[t]})]}),(0,i.jsxs)(h.Z,{elevation:16,sx:{p:4},children:[(0,i.jsxs)(d.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,i.jsx)(s(),{href:"/",passHref:!0,children:(0,i.jsx)("a",{children:(0,i.jsx)(R.T,{sx:{height:40,width:40}})})}),(0,i.jsx)($.Z,{variant:"h4",children:"Verify Code"}),(0,i.jsx)($.Z,{color:"textSecondary",sx:{mt:2},variant:"body2",children:"Confirm registration using your verification code"})]}),(0,i.jsx)(d.Z,{sx:{flexGrow:1,mt:3},children:"Amplify"===t&&(0,i.jsx)(W,{})}),(0,i.jsx)(f.Z,{sx:{my:3}}),"Amplify"===t&&(0,i.jsx)("div",{children:(0,i.jsx)(s(),{href:r?"/authentication/login?disableGuard=".concat(r):"/authentication/login",passHref:!0,children:(0,i.jsx)(x.Z,{color:"textSecondary",variant:"body2",children:"Did you not receive the code?"})})})]})]})]})]})};T.getLayout=function(e){return(0,i.jsx)(m.A,{children:e})};var I=T}},function(e){e.O(0,[7760,9117,7836,939,1141,6860,9774,2888,179],function(){return e(e.s=91286)}),_N_E=e.O()}]);