(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9144],{10640:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/jobs/new",function(){return t(78855)}])},91444:function(e,n,t){"use strict";t.d(n,{B:function(){return h}});var r=t(26042),o=t(69396),i=t(99534),l=t(85893),a=t(67294);t(8215);var s=t(5152),c=t.n(s),d=t(45697),$=t.n(d),u=t(81719),x=c()(function(){return Promise.all([t.e(2937),t.e(939),t.e(8764),t.e(1167)]).then(t.t.bind(t,71167,23))},{loadableGenerated:{webpack:function(){return[71167]}},ssr:!1,loading:function(){return null}}),p=(0,u.ZP)("div")(function(e){var n=e.theme;return{border:1,borderColor:n.palette.divider,borderRadius:n.shape.borderRadius,borderStyle:"solid",display:"flex",flexDirection:"column",overflow:"hidden","& .quill":{display:"flex",flex:1,flexDirection:"column",overflow:"hidden"},"& .ql-snow.ql-toolbar":{borderColor:n.palette.divider,borderLeft:"none",borderRight:"none",borderTop:"none","& .ql-picker-label:hover":{color:n.palette.primary.main},"& .ql-picker-label.ql-active":{color:n.palette.primary.main},"& .ql-picker-item:hover":{color:n.palette.primary.main},"& .ql-picker-item.ql-selected":{color:n.palette.primary.main},"& button:hover":{color:n.palette.primary.main,"& .ql-stroke":{stroke:n.palette.primary.main}},"& button:focus":{color:n.palette.primary.main,"& .ql-stroke":{stroke:n.palette.primary.main}},"& button.ql-active":{"& .ql-stroke":{stroke:n.palette.primary.main}},"& .ql-stroke":{stroke:n.palette.text.primary},"& .ql-picker":{color:n.palette.text.primary},"& .ql-picker-options":{backgroundColor:n.palette.background.paper,border:"none",borderRadius:n.shape.borderRadius,boxShadow:n.shadows[10],padding:n.spacing(2)}},"& .ql-snow.ql-container":{borderBottom:"none",borderColor:n.palette.divider,borderLeft:"none",borderRight:"none",display:"flex",flex:1,flexDirection:"column",height:"auto",overflow:"hidden","& .ql-editor":{color:n.palette.text.primary,flex:1,fontFamily:n.typography.body1.fontFamily,fontSize:n.typography.body1.fontSize,height:"auto",overflowY:"auto",padding:n.spacing(2),"&.ql-blank::before":{color:n.palette.text.secondary,fontStyle:"normal",left:n.spacing(2)}}}}}),h=function(e){var n=e.sx,t=e.onChange,s=e.placeholder,c=e.value,d=(0,i.Z)(e,["sx","onChange","placeholder","value"]),$=(0,a.useRef)(null);return(0,l.jsx)(p,(0,o.Z)((0,r.Z)({sx:n,ref:$},d),{children:(0,l.jsx)(x,{onChange:t,placeholder:s,value:c,bounds:$.current||void 0})}))};h.propTypes={onChange:$().func,placeholder:$().string,sx:$().object,value:$().string}},18785:function(e,n,t){"use strict";t.d(n,{o:function(){return o}});var r=t(85893),o=(0,t(54235).Z)((0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"ArrowRight")},96296:function(e,n,t){"use strict";t.d(n,{J:function(){return o}});var r=t(85893),o=(0,t(54235).Z)((0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),"Check")},78855:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return P}});var r=t(26042),o=t(85893),i=t(67294),l=t(9008),a=t.n(l),s=t(72347),c=t(61953),d=t(79072),$=t(29630),u=t(98948),x=t(44044),p=t(94071),h=t(75356),_=t(49837),m=t(54225),f=t(98875),v=t(64527),j=t(69396),b=t(99534),Z=t(45697),y=t.n(Z),g=t(8519),k=t(41796),C=t(18785),w=[{description:"Best for small, friendly-pocket projects",title:"Freelancers",value:"freelancers"},{description:"Limited-time projects with highly experienced individuals",title:"Contractor",value:"contractor"},{description:"Unlimited term contracts",title:"Employees",value:"employees"}],S=function(e){e.onBack;var n=e.onNext,t=(0,b.Z)(e,["onBack","onNext"]),l=(0,i.useState)(w[1].value),a=l[0],s=l[1],d=function(e){s(e)};return(0,o.jsxs)("div",(0,j.Z)((0,r.Z)({},t),{children:[(0,o.jsx)($.Z,{variant:"h6",children:"I’m looking for..."}),(0,o.jsx)(c.Z,{sx:{mt:3},children:w.map(function(e){return(0,o.jsx)(c.Z,{sx:{mb:2},children:(0,o.jsxs)(_.Z,{sx:(0,r.Z)({alignItems:"center",cursor:"pointer",display:"flex",p:2},a===e.value&&{borderColor:"primary.main",borderWidth:2,backgroundColor:function(e){return(0,k.Fq)(e.palette.primary.main,.08)},m:"-1px"}),onClick:function(){return d(e.value)},variant:"outlined",children:[(0,o.jsx)(g.Z,{checked:a===e.value,color:"primary"}),(0,o.jsxs)(c.Z,{sx:{ml:2},children:[(0,o.jsx)($.Z,{variant:"subtitle1",children:e.title}),(0,o.jsx)($.Z,{color:"textSecondary",variant:"body2",children:e.description})]})]},e.value)},e.value)})}),(0,o.jsx)(m.Z,{endIcon:(0,o.jsx)(C.o,{fontSize:"small"}),onClick:n,variant:"contained",children:"Continue"})]}))};S.propTypes={onBack:y().func,onNext:y().func};var q=t(67836),B=t(9041),N=t(21448),R=t(39300),T=function(e){var n=e.onBack,t=e.onNext,l=(0,b.Z)(e,["onBack","onNext"]),a=(0,i.useState)(""),s=a[0],d=a[1],u=(0,i.useState)([]),x=u[0],p=u[1],h=(0,i.useState)(new Date("2021-09-22T11:41:50")),_=h[0],f=h[1],v=(0,i.useState)(new Date("2022-01-11T12:41:50")),Z=v[0],y=v[1],g=function(e){f(e)},k=function(e){y(e)},w=function(e){x.push(e),p(x)};return(0,o.jsxs)("div",(0,j.Z)((0,r.Z)({},l),{children:[(0,o.jsx)($.Z,{variant:"h6",children:"What is the job about?"}),(0,o.jsxs)(c.Z,{sx:{mt:3},children:[(0,o.jsx)(q.Z,{fullWidth:!0,label:"Job Title",name:"jobTitle",placeholder:"e.g Salesforce Analyst"}),(0,o.jsx)(q.Z,{fullWidth:!0,InputProps:{endAdornment:(0,o.jsx)(B.Z,{position:"end",children:(0,o.jsx)(m.Z,{sx:{ml:2},onClick:function(){s&&(w(s),d(""))},children:"Add"})})},label:"Tags",name:"tags",onChange:function(e){return d(e.target.value)},sx:{mt:3},value:s}),(0,o.jsx)(c.Z,{sx:{ml:-1},children:x.map(function(e,n){return(0,o.jsx)(N.Z,{onDelete:function(){p(x.filter(function(n){return n!==e}))},label:e,sx:{mt:1,ml:1},variant:"outlined"},n)})}),(0,o.jsx)($.Z,{sx:{mt:3},variant:"subtitle1",children:"When is the project starting?"}),(0,o.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex",mt:3},children:[(0,o.jsx)(R.O,{label:"Start Date",inputFormat:"MM/dd/yyyy",value:_,onChange:g,renderInput:function(e){return(0,o.jsx)(q.Z,(0,r.Z)({},e))}}),(0,o.jsx)(c.Z,{sx:{ml:2},children:(0,o.jsx)(R.O,{label:"End Date",inputFormat:"MM/dd/yyyy",value:Z,onChange:k,renderInput:function(e){return(0,o.jsx)(q.Z,(0,r.Z)({},e))}})})]})]}),(0,o.jsxs)(c.Z,{sx:{mt:3},children:[(0,o.jsx)(m.Z,{endIcon:(0,o.jsx)(C.o,{fontSize:"small"}),onClick:t,variant:"contained",children:"Continue"}),(0,o.jsx)(m.Z,{onClick:n,sx:{ml:2},children:"Back"})]})]}))};T.propTypes={onBack:y().func,onNext:y().func};var I=t(91444),W=function(e){var n=e.onBack,t=e.onNext,l=(0,b.Z)(e,["onBack","onNext"]),a=(0,i.useState)(""),s=a[0],d=a[1],u=function(e){d(e)};return(0,o.jsxs)("div",(0,j.Z)((0,r.Z)({},l),{children:[(0,o.jsx)($.Z,{variant:"h6",children:"How would you describe the job post?"}),(0,o.jsx)(I.B,{onChange:u,placeholder:"Write something",sx:{height:400,mt:3},value:s}),(0,o.jsxs)(c.Z,{sx:{mt:2},children:[(0,o.jsx)(m.Z,{endIcon:(0,o.jsx)(C.o,{fontSize:"small"}),onClick:t,variant:"contained",children:"Create Job"}),(0,o.jsx)(m.Z,{onClick:n,sx:{ml:2},children:"Back"})]})]}))};W.propTypes={onBack:y().func,onNext:y().func};var L=t(96296),z=function(e){var n=e.active,t=e.completed,i=e.icon;return(0,o.jsx)(s.Z,{sx:(0,r.Z)({height:40,width:40},(n||t)&&{backgroundColor:"secondary.main",color:"secondary.contrastText"}),variant:"rounded",children:t?(0,o.jsx)(L.J,{fontSize:"small"}):i})},D=function(){var e=(0,i.useState)(0),n=e[0],t=e[1],l=(0,i.useState)(!1),f=l[0],v=l[1],j=function(){t(function(e){return e+1})},b=function(){t(function(e){return e-1})},Z=function(){v(!0)},y=[{label:"Category",content:(0,o.jsx)(S,{onBack:b,onNext:j})},{label:"Job Details",content:(0,o.jsx)(T,{onBack:b,onNext:j})},{label:"Description",content:(0,o.jsx)(W,{onBack:b,onNext:Z})}];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a(),{children:(0,o.jsx)("title",{children:"Dashboard: Job Create | Material Kit Pro"})}),(0,o.jsx)(c.Z,{component:"main",sx:{display:"flex",flexGrow:1},children:(0,o.jsxs)(d.ZP,{container:!0,sx:{flexGrow:1},children:[(0,o.jsx)(d.ZP,{item:!0,sm:4,xs:12,sx:{backgroundImage:"url(/static/mock-images/jobs/create_job_background.png)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",display:{xs:"none",md:"block"}}}),(0,o.jsx)(d.ZP,{item:!0,xs:12,md:8,sx:{p:{xs:4,sm:6,md:8}},children:(0,o.jsxs)(c.Z,{maxWidth:"sm",children:[(0,o.jsx)($.Z,{sx:{mb:3},variant:"h4",children:"Create Job Ad"}),f?(0,o.jsxs)("div",{children:[(0,o.jsx)(s.Z,{sx:{backgroundColor:"success.main",color:"success.contrastText",height:40,width:40},children:(0,o.jsx)(L.J,{})}),(0,o.jsx)($.Z,{variant:"h6",sx:{mt:2},children:"All done!"}),(0,o.jsx)($.Z,{color:"textSecondary",variant:"body2",children:"Here’s a preview of your newly created job"}),(0,o.jsxs)(_.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",justifyContent:"space-between",mt:2,px:2,py:1.5},variant:"outlined",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)($.Z,{variant:"subtitle1",children:"Senior Backend Engineer"}),(0,o.jsxs)($.Z,{color:"textSecondary",variant:"caption",children:["Remote possible"," ",(0,o.jsxs)($.Z,{color:"inherit",noWrap:!0,variant:"caption",children:["•"," ","$150k"," ","-"," ","$210K"]})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)($.Z,{color:"textSecondary",sx:{mr:2},variant:"caption",children:"1 minute ago"}),(0,o.jsx)(m.Z,{children:"Apply"})]})]})]}):(0,o.jsx)(u.Z,{activeStep:n,orientation:"vertical",sx:{"& .MuiStepConnector-line":{ml:1,borderLeftColor:"divider",borderLeftWidth:2}},children:y.map(function(e,t){return(0,o.jsxs)(x.Z,{children:[(0,o.jsx)(p.Z,{StepIconComponent:z,children:(0,o.jsx)($.Z,{sx:{ml:2},variant:"overline",children:e.label})}),(0,o.jsx)(h.Z,{sx:(0,r.Z)({ml:"20px",borderLeftColor:"divider",borderLeftWidth:2},n===t&&{py:4}),children:e.content})]},e.label)})})]})})]})})]})};D.getLayout=function(e){return(0,o.jsx)(f.a,{children:(0,o.jsx)(v.c,{children:e})})};var P=D}},function(e){e.O(0,[7760,8826,9117,9072,7836,2251,3837,8736,5720,5354,7413,5808,7966,7375,8848,9774,2888,179],function(){return e(e.s=10640)}),_N_E=e.O()}]);