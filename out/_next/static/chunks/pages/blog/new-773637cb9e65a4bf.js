(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8127],{68346:function(e,r,n){"use strict";n.d(r,{Z:function(){return S}});var t=n(63366),o=n(87462),i=n(67294),a=n(86010),l=n(94780),s=n(36622),c=n(81719),d=n(78884),$=n(51625),u=n(84771),p=n(29630),m=n(34867),x=n(1588);function h(e){return(0,m.Z)("MuiLink",e)}let f=(0,x.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var _=f,v=n(54844),g=n(41796);let b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=e=>b[e]||e,y=({theme:e,ownerState:r})=>{let n=Z(r.color),t=(0,v.D)(e,`palette.${n}`,!1)||r.color,o=(0,v.D)(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,g.Fq)(t,.4)};var j=y,D=n(85893);let w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=e=>{let{classes:r,component:n,focusVisible:t,underline:o}=e,i={root:["root",`underline${(0,s.Z)(o)}`,"button"===n&&"button",t&&"focusVisible"]};return(0,l.Z)(i,h,r)},C=(0,c.ZP)(p.Z,{name:"MuiLink",slot:"Root",overridesResolver(e,r){let{ownerState:n}=e;return[r.root,r[`underline${(0,s.Z)(n.underline)}`],"button"===n.component&&r.button]}})(({theme:e,ownerState:r})=>(0,o.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:j({theme:e,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${_.focusVisible}`]:{outline:"auto"}})),R=i.forwardRef(function(e,r){let n=(0,d.Z)({props:e,name:"MuiLink"}),{className:l,color:s="primary",component:c="a",onBlur:p,onFocus:m,TypographyClasses:x,underline:h="always",variant:f="inherit",sx:_}=n,v=(0,t.Z)(n,w),{isFocusVisibleRef:g,onBlur:Z,onFocus:y,ref:j}=(0,$.Z)(),[R,S]=i.useState(!1),F=(0,u.Z)(r,j),I=e=>{Z(e),!1===g.current&&S(!1),p&&p(e)},z=e=>{y(e),!0===g.current&&S(!0),m&&m(e)},B=(0,o.Z)({},n,{color:s,component:c,focusVisible:R,underline:h,variant:f}),P=k(B);return(0,D.jsx)(C,(0,o.Z)({color:s,className:(0,a.Z)(P.root,l),classes:x,component:c,onBlur:I,onFocus:z,ref:F,ownerState:B,variant:f,sx:[...Object.keys(b).includes(s)?[]:[{color:s}],...Array.isArray(_)?_:[_]]},v))});var S=R},29894:function(e,r,n){"use strict";var t=n(63366),o=n(87462),i=n(67294),a=n(86010),l=n(94780),s=n(81719),c=n(78884),d=n(8164),$=n(57742),u=n(85893);let p=["className"],m=e=>{let{alignItems:r,classes:n}=e;return(0,l.Z)({root:["root","flex-start"===r&&"alignItemsFlexStart"]},d.f,n)},x=(0,s.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver(e,r){let{ownerState:n}=e;return[r.root,"flex-start"===n.alignItems&&r.alignItemsFlexStart]}})(({theme:e,ownerState:r})=>(0,o.Z)({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===r.alignItems&&{marginTop:8})),h=i.forwardRef(function(e,r){let n=(0,c.Z)({props:e,name:"MuiListItemIcon"}),{className:l}=n,s=(0,t.Z)(n,p),d=i.useContext($.Z),h=(0,o.Z)({},n,{alignItems:d.alignItems}),f=m(h);return(0,u.jsx)(x,(0,o.Z)({className:(0,a.Z)(f.root,l),ownerState:h,ref:r},s))});r.Z=h},8164:function(e,r,n){"use strict";n.d(r,{f:function(){return i}});var t=n(34867),o=n(1588);function i(e){return(0,t.Z)("MuiListItemIcon",e)}let a=(0,o.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);r.Z=a},61702:function(e,r,n){"use strict";var t=n(63366),o=n(87462),i=n(67294),a=n(86010),l=n(94780),s=n(29630),c=n(57742),d=n(78884),$=n(81719),u=n(97484),p=n(85893);let m=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],x=e=>{let{classes:r,inset:n,primary:t,secondary:o,dense:i}=e;return(0,l.Z)({root:["root",n&&"inset",i&&"dense",t&&o&&"multiline"],primary:["primary"],secondary:["secondary"]},u.L,r)},h=(0,$.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver(e,r){let{ownerState:n}=e;return[{[`& .${u.Z.primary}`]:r.primary},{[`& .${u.Z.secondary}`]:r.secondary},r.root,n.inset&&r.inset,n.primary&&n.secondary&&r.multiline,n.dense&&r.dense]}})(({ownerState:e})=>(0,o.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),f=i.forwardRef(function(e,r){let n=(0,d.Z)({props:e,name:"MuiListItemText"}),{children:l,className:$,disableTypography:u=!1,inset:f=!1,primary:_,primaryTypographyProps:v,secondary:g,secondaryTypographyProps:b}=n,Z=(0,t.Z)(n,m),{dense:y}=i.useContext(c.Z),j=null!=_?_:l,D=g,w=(0,o.Z)({},n,{disableTypography:u,inset:f,primary:!!j,secondary:!!D,dense:y}),k=x(w);return null==j||j.type===s.Z||u||(j=(0,p.jsx)(s.Z,(0,o.Z)({variant:y?"body2":"body1",className:k.primary,component:null!=v&&v.variant?void 0:"span",display:"block"},v,{children:j}))),null==D||D.type===s.Z||u||(D=(0,p.jsx)(s.Z,(0,o.Z)({variant:"body2",className:k.secondary,color:"text.secondary",display:"block"},b,{children:D}))),(0,p.jsxs)(h,(0,o.Z)({className:(0,a.Z)(k.root,$),ownerState:w,ref:r},Z,{children:[j,D]}))});r.Z=f},97484:function(e,r,n){"use strict";n.d(r,{L:function(){return i}});var t=n(34867),o=n(1588);function i(e){return(0,t.Z)("MuiListItemText",e)}let a=(0,o.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);r.Z=a},77250:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/new",function(){return n(17756)}])},31347:function(e,r,n){"use strict";n.d(r,{Y:function(){return y}});var t=n(26042),o=n(69396),i=n(99534),a=n(85893),l=n(45697),s=n.n(l),c=n(32512),d=n(61953),$=n(29630),u=n(68346),p=n(85214),m=n(80748),x=n(29894),h=n(61702),f=n(72389),_=n(80562),v=n(54225),g=n(49794),b=n(21016),Z=n(19274),y=function(e){var r=e.files,n=void 0===r?[]:r,l=e.onRemove,s=e.onRemoveAll,y=e.onUpload,j=e.accept,D=(e.disabled,e.getFilesFromEvent,e.maxSize),w=e.minSize,k=(e.multiple,e.maxFiles),C=(e.onDragEnter,e.onDragLeave,e.onDragOver,e.onDrop),R=(e.onDropAccepted,e.onDropRejected,e.onFileDialogCancel,e.onFileDialogOpen,e.useFsAccessApi,e.autoFocus,e.preventDropOnDocument,e.noClick,e.noKeyboard,e.noDrag,e.noDragEventsBubbling,e.onError,e.validator,(0,i.Z)(e,["files","onRemove","onRemoveAll","onUpload","accept","disabled","getFilesFromEvent","maxSize","minSize","multiple","maxFiles","onDragEnter","onDragLeave","onDragOver","onDrop","onDropAccepted","onDropRejected","onFileDialogCancel","onFileDialogOpen","useFsAccessApi","autoFocus","preventDropOnDocument","noClick","noKeyboard","noDrag","noDragEventsBubbling","onError","validator"])),S=(0,c.uI)({accept:j,maxFiles:k,maxSize:D,minSize:w,onDrop:C}),F=S.getRootProps,I=S.getInputProps,z=S.isDragActive;return(0,a.jsxs)("div",(0,o.Z)((0,t.Z)({},R),{children:[(0,a.jsxs)(d.Z,(0,o.Z)((0,t.Z)({sx:(0,o.Z)((0,t.Z)({alignItems:"center",border:1,borderRadius:1,borderStyle:"dashed",borderColor:"divider",display:"flex",flexWrap:"wrap",justifyContent:"center",outline:"none",p:6},z&&{backgroundColor:"action.active",opacity:.5}),{"&:hover":{backgroundColor:"action.hover",cursor:"pointer",opacity:.5}})},F()),{children:[(0,a.jsx)("input",(0,t.Z)({},I())),(0,a.jsx)(d.Z,{sx:{"& img":{width:100}},children:(0,a.jsx)("img",{alt:"Select file",src:"/static/undraw_add_file2_gvbb.svg"})}),(0,a.jsxs)(d.Z,{sx:{p:2},children:[(0,a.jsx)($.Z,{variant:"h6",children:"Select file".concat(k&&1===k?"":"s")}),(0,a.jsx)(d.Z,{sx:{mt:2},children:(0,a.jsxs)($.Z,{variant:"body1",children:["Drop file".concat(k&&1===k?"":"s")," ",(0,a.jsx)(u.Z,{underline:"always",children:"browse"})," ","thorough your machine"]})})]})]})),n.length>0&&(0,a.jsxs)(d.Z,{sx:{mt:2},children:[(0,a.jsx)(p.Z,{children:n.map(function(e){return(0,a.jsxs)(m.ZP,{sx:{border:1,borderColor:"divider",borderRadius:1,"& + &":{mt:1}},children:[(0,a.jsx)(x.Z,{children:(0,a.jsx)(g.F,{fontSize:"small"})}),(0,a.jsx)(h.Z,{primary:e.name,primaryTypographyProps:{color:"textPrimary",variant:"subtitle2"},secondary:(0,Z.R)(e.size)}),(0,a.jsx)(f.Z,{title:"Remove",children:(0,a.jsx)(_.Z,{edge:"end",onClick:function(){return null==l?void 0:l(e)},children:(0,a.jsx)(b.X,{fontSize:"small"})})})]},e.path)})}),(0,a.jsxs)(d.Z,{sx:{display:"flex",justifyContent:"flex-end",mt:2},children:[(0,a.jsx)(v.Z,{onClick:s,size:"small",type:"button",children:"Remove All"}),(0,a.jsx)(v.Z,{onClick:y,size:"small",sx:{ml:2},type:"button",variant:"contained",children:"Upload"})]})]})]}))};y.propTypes={files:s().array,onRemove:s().func,onRemoveAll:s().func,onUpload:s().func,accept:s().objectOf(s().arrayOf(s().string)),disabled:s().bool,getFilesFromEvent:s().func,maxFiles:s().number,maxSize:s().number,minSize:s().number,noClick:s().bool,noDrag:s().bool,noDragEventsBubbling:s().bool,noKeyboard:s().bool,onDrop:s().func,onDropAccepted:s().func,onDropRejected:s().func,onFileDialogCancel:s().func,preventDropOnDocument:s().bool}},91444:function(e,r,n){"use strict";n.d(r,{B:function(){return x}});var t=n(26042),o=n(69396),i=n(99534),a=n(85893),l=n(67294);n(8215);var s=n(5152),c=n.n(s),d=n(45697),$=n.n(d),u=n(81719),p=c()(function(){return Promise.all([n.e(2937),n.e(939),n.e(8764),n.e(1167)]).then(n.t.bind(n,71167,23))},{loadableGenerated:{webpack:function(){return[71167]}},ssr:!1,loading:function(){return null}}),m=(0,u.ZP)("div")(function(e){var r=e.theme;return{border:1,borderColor:r.palette.divider,borderRadius:r.shape.borderRadius,borderStyle:"solid",display:"flex",flexDirection:"column",overflow:"hidden","& .quill":{display:"flex",flex:1,flexDirection:"column",overflow:"hidden"},"& .ql-snow.ql-toolbar":{borderColor:r.palette.divider,borderLeft:"none",borderRight:"none",borderTop:"none","& .ql-picker-label:hover":{color:r.palette.primary.main},"& .ql-picker-label.ql-active":{color:r.palette.primary.main},"& .ql-picker-item:hover":{color:r.palette.primary.main},"& .ql-picker-item.ql-selected":{color:r.palette.primary.main},"& button:hover":{color:r.palette.primary.main,"& .ql-stroke":{stroke:r.palette.primary.main}},"& button:focus":{color:r.palette.primary.main,"& .ql-stroke":{stroke:r.palette.primary.main}},"& button.ql-active":{"& .ql-stroke":{stroke:r.palette.primary.main}},"& .ql-stroke":{stroke:r.palette.text.primary},"& .ql-picker":{color:r.palette.text.primary},"& .ql-picker-options":{backgroundColor:r.palette.background.paper,border:"none",borderRadius:r.shape.borderRadius,boxShadow:r.shadows[10],padding:r.spacing(2)}},"& .ql-snow.ql-container":{borderBottom:"none",borderColor:r.palette.divider,borderLeft:"none",borderRight:"none",display:"flex",flex:1,flexDirection:"column",height:"auto",overflow:"hidden","& .ql-editor":{color:r.palette.text.primary,flex:1,fontFamily:r.typography.body1.fontFamily,fontSize:r.typography.body1.fontSize,height:"auto",overflowY:"auto",padding:r.spacing(2),"&.ql-blank::before":{color:r.palette.text.secondary,fontStyle:"normal",left:r.spacing(2)}}}}}),x=function(e){var r=e.sx,n=e.onChange,s=e.placeholder,c=e.value,d=(0,i.Z)(e,["sx","onChange","placeholder","value"]),$=(0,l.useRef)(null);return(0,a.jsx)(m,(0,o.Z)((0,t.Z)({sx:r,ref:$},d),{children:(0,a.jsx)(p,{onChange:n,placeholder:s,value:c,bounds:$.current||void 0})}))};x.propTypes={onChange:$().func,placeholder:$().string,sx:$().object,value:$().string}},11901:function(e,r,n){"use strict";n.d(r,{X:function(){return o}});var t=n(85893),o=(0,n(54235).Z)((0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"})}),"ArrowLeft")},49794:function(e,r,n){"use strict";n.d(r,{F:function(){return o}});var t=n(85893),o=(0,n(54235).Z)((0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[(0,t.jsx)("path",{d:"M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"}),(0,t.jsx)("path",{d:"M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"})]}),"Duplicate")},17756:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return w}});var t=n(47568),o=n(828),i=n(70655),a=n(85893),l=n(67294),s=n(9008),c=n.n(s),d=n(41664),$=n.n(d),u=n(61953),p=n(36336),m=n(54225),x=n(29630),h=n(49837),f=n(80562),_=n(91359),v=n(67836),g=n(79072),b=n(31347),Z=n(91444),y=n(11901),j=(0,n(54235).Z)((0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})}),"DotsVertical"),D=n(38682),w=function(){var e,r=(0,l.useState)("/static/mock-images/covers/cover_4.jpeg"),n=r[0],s=r[1];(0,l.useEffect)(function(){D.w.push({event:"page_view"})},[]);var d=(e=(0,t.Z)(function(e){var r,n,t;return(0,i.__generator)(this,function(i){switch(i.label){case 0:var a;return[4,(a=n=(r=(0,o.Z)(e,1))[0],new Promise(function(e,r){var n=new FileReader;n.readAsDataURL(a),n.onload=function(){return e(n.result)},n.onerror=function(e){return r(e)}}))];case 1:return s(t=i.sent()),[2]}})}),function(r){return e.apply(this,arguments)}),w=function(){s(null)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c(),{children:(0,a.jsx)("title",{children:"Blog: Post Create | Material Kit Pro"})}),(0,a.jsx)(u.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,a.jsxs)(p.Z,{maxWidth:"md",children:[(0,a.jsx)($(),{href:"/dashboard",passHref:!0,children:(0,a.jsx)(m.Z,{component:"a",startIcon:(0,a.jsx)(y.X,{fontSize:"small"}),children:"Dashboard"})}),(0,a.jsx)(x.Z,{variant:"h3",sx:{mt:3},children:"Create post"}),(0,a.jsxs)(h.Z,{elevation:16,sx:{alignItems:"center",borderRadius:1,display:"flex",justifyContent:"space-between",mb:8,mt:6,px:3,py:2},children:[(0,a.jsx)(x.Z,{variant:"subtitle1",children:"Hello, Admin"}),(0,a.jsxs)("div",{children:[(0,a.jsx)($(),{href:"/blog",passHref:!0,children:(0,a.jsx)(m.Z,{component:"a",sx:{display:{xs:"none",sm:"inline-flex"},mr:2},variant:"outlined",children:"Cancel"})}),(0,a.jsx)($(),{href:"/blog/1",passHref:!0,children:(0,a.jsx)(m.Z,{component:"a",sx:{display:{xs:"none",sm:"inline-flex"},mr:2},variant:"contained",children:"Publish changes"})}),(0,a.jsx)(f.Z,{children:(0,a.jsx)(j,{fontSize:"small"})})]})]}),(0,a.jsx)(h.Z,{sx:{mt:4},children:(0,a.jsxs)(_.Z,{children:[(0,a.jsx)(x.Z,{variant:"h6",children:"Basic details"}),(0,a.jsxs)(u.Z,{sx:{mt:3},children:[(0,a.jsx)(v.Z,{fullWidth:!0,label:"Post title",name:"title"}),(0,a.jsx)(u.Z,{sx:{mt:3},children:(0,a.jsx)(v.Z,{fullWidth:!0,label:"Short description"})})]})]})}),(0,a.jsx)(h.Z,{sx:{mt:4},children:(0,a.jsxs)(_.Z,{children:[(0,a.jsx)(x.Z,{variant:"h6",children:"Post cover"}),n?(0,a.jsx)(u.Z,{sx:{backgroundImage:"url(".concat(n,")"),backgroundPosition:"center",backgroundSize:"cover",borderRadius:1,height:230,mt:3}}):(0,a.jsxs)(u.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",border:1,borderRadius:1,borderStyle:"dashed",borderColor:"divider",height:230,mt:3,p:3},children:[(0,a.jsx)(x.Z,{align:"center",color:"textSecondary",variant:"h6",children:"Select a cover image"}),(0,a.jsx)(x.Z,{align:"center",color:"textSecondary",sx:{mt:1},variant:"subtitle1",children:"Image used for the blog post cover and also for Open Graph meta"})]}),(0,a.jsx)(m.Z,{onClick:w,sx:{mt:3},disabled:!n,children:"Remove photo"}),(0,a.jsx)(u.Z,{sx:{mt:3},children:(0,a.jsx)(b.Y,{accept:{"image/*":[]},maxFiles:1,onDrop:d})})]})}),(0,a.jsx)(h.Z,{sx:{mt:4},children:(0,a.jsxs)(_.Z,{children:[(0,a.jsx)(x.Z,{variant:"h6",children:"Content"}),(0,a.jsx)(Z.B,{placeholder:"Write something",sx:{height:330,mt:3}})]})}),(0,a.jsx)(h.Z,{sx:{mt:4},children:(0,a.jsx)(_.Z,{children:(0,a.jsxs)(g.ZP,{container:!0,spacing:3,children:[(0,a.jsx)(g.ZP,{item:!0,xs:12,lg:4,children:(0,a.jsx)(x.Z,{variant:"h6",children:"Meta"})}),(0,a.jsxs)(g.ZP,{item:!0,xs:12,lg:8,children:[(0,a.jsx)(v.Z,{fullWidth:!0,label:"SEO title",name:"title"}),(0,a.jsx)(v.Z,{fullWidth:!0,sx:{mt:3},label:"SEO description"})]})]})})}),(0,a.jsx)(u.Z,{sx:{display:{sm:"none"},mt:2},children:(0,a.jsx)($(),{href:"/blog/1",passHref:!0,children:(0,a.jsx)(m.Z,{component:"a",variant:"contained",children:"Publish changes"})})})]})})]})}},19274:function(e,r,n){"use strict";n.d(r,{R:function(){return t}});var t=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var n=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,n)).toFixed(r<0?0:r))," ").concat(["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n])}}},function(e){e.O(0,[7760,8826,9117,9072,7836,5808,3634,9774,2888,179],function(){return e(e.s=77250)}),_N_E=e.O()}]);