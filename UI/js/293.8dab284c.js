"use strict";(globalThis["webpackChunktruetryout"]=globalThis["webpackChunktruetryout"]||[]).push([[293],{293:(e,l,s)=>{s.r(l),s.d(l,{default:()=>Ve});var a=s(9835),o=s(1957);const r=e=>((0,a.dD)("data-v-4bd99beb"),e=e(),(0,a.Cn)(),e),t={class:"items-center"},i={class:"q-gutter-y-md items-center q-pa-sm column col"},u=r((()=>(0,a._)("div",{class:"sign-in q-mb-md text-primary items-center"},[(0,a._)("strong",{class:"color-secondary"},"Sign up")],-1))),n={class:"row"},d={class:"col"},m={key:0,class:"q-gutter-sm"},c=r((()=>(0,a._)("span",null,"Are you a ",-1))),p=r((()=>(0,a._)("span",null," or ",-1))),h={key:1},v={key:0},w={class:"row justify-center"},V={class:"col col-md-4"},y={class:"row justify-center"},g={class:"col col-md-4"},f={class:"row justify-center"},b={class:"col col-md-4"},_={class:"row justify-center"},q={class:"col col-md-4"},P={class:"row justify-center"},N={class:"col col-md-4"},C={key:0},U={class:"row justify-center"},k={class:"col col-md-4"},W={class:"row justify-center"},j={class:"col col-md-4"},A={class:"row justify-center"},$={class:"col col-md-4"},E={class:"row justify-center"},R={class:"col col-md-4"},S={class:"row justify-center"},T={class:"col col-md-4"},O={class:"row justify-center"},D={class:"col col-md-4"},Z={class:"row justify-center"},H={class:"col col-md-4"},F={class:"row justify-center"},I={class:"col col-md-4"},L={class:"q-gutter-y-md q-pa-sm column col"},x={key:2},B={class:"row justify-center"},Q={class:"col col-md-4"},J={class:"row justify-center"},z={class:"col col-md-4"},G={class:"row justify-center"},K={class:"col col-md-4"},M={class:"row justify-center"},X={class:"col col-md-4"},Y={class:"row justify-center"},ee={class:"col col-md-4"},le={class:"row justify-center"},se={class:"col col-md-4"},ae={class:"row justify-center"},oe={class:"col col-md-4"},re={class:"q-gutter-y-md q-pa-sm column col"};function te(e,l,s,r,te,ie){const ue=(0,a.up)("q-btn"),ne=(0,a.up)("q-radio"),de=(0,a.up)("q-input");return(0,a.wg)(),(0,a.iD)("div",t,[(0,a._)("div",i,[(0,a.Wm)(ue,{"no-caps":"",onClick:l[0]||(l[0]=e=>this.$router.push("/signin")),class:"btn-primary",label:"Already have an account ? Click here to Login"})]),u,(0,a._)("div",n,[(0,a._)("div",d,[te.askRole?((0,a.wg)(),(0,a.iD)("div",m,[c,(0,a.Wm)(ne,{class:"q-mb-sm color-primary",modelValue:te.user.login.role,"onUpdate:modelValue":l[1]||(l[1]=e=>te.user.login.role=e),val:"COACH",label:"Coach"},null,8,["modelValue"]),p,(0,a.Wm)(ne,{class:"q-mb-sm color-primary",modelValue:te.user.login.role,"onUpdate:modelValue":l[2]||(l[2]=e=>te.user.login.role=e),val:"PARENT",label:"Player ?"},null,8,["modelValue"])])):(0,a.kq)("",!0),"PARENT"===te.user.login.role?((0,a.wg)(),(0,a.iD)("div",h,[te.age?((0,a.wg)(),(0,a.iD)("div",v,[(0,a._)("div",w,[(0,a._)("div",V,[(0,a.Wm)(de,{color:"teal",class:"q-pa-sm",outlined:"",modelValue:te.user.firstName,"onUpdate:modelValue":l[3]||(l[3]=e=>te.user.firstName=e),label:"Player First Name *"},null,8,["modelValue"])])]),(0,a._)("div",y,[(0,a._)("div",g,[(0,a.Wm)(de,{color:"teal",outlined:"",class:"q-pa-sm",modelValue:te.user.lastName,"onUpdate:modelValue":l[4]||(l[4]=e=>te.user.lastName=e),label:"Player Last Name *"},null,8,["modelValue"])])]),(0,a._)("div",f,[(0,a._)("div",b,[(0,a.Wm)(de,{color:"teal",class:"q-pa-sm",outlined:"",modelValue:te.user.phone,"onUpdate:modelValue":l[5]||(l[5]=e=>te.user.phone=e),label:"Player Phone *"},null,8,["modelValue"])])]),(0,a._)("div",_,[(0,a._)("div",q,[(0,a.Wm)(de,{class:"q-pa-sm",color:"teal",outlined:"",modelValue:te.user.email,"onUpdate:modelValue":l[6]||(l[6]=e=>te.user.email=e),label:"Player Email *"},null,8,["modelValue"])])]),(0,a._)("div",P,[(0,a._)("div",N,[(0,a.Wm)(de,{class:"q-pa-sm",color:"teal",outlined:"",type:"date",modelValue:te.user.dob,"onUpdate:modelValue":l[7]||(l[7]=e=>te.user.dob=e),"stack-label":"",max:(new Date).toISOString().slice(0,10),label:"Player Date of birth *"},null,8,["modelValue","max"])])]),"below 18"===te.age?((0,a.wg)(),(0,a.iD)("div",C,[(0,a._)("div",U,[(0,a._)("div",k,[(0,a.Wm)(de,{class:"q-pa-sm",color:"teal",outlined:"",modelValue:te.user.parent.firstName,"onUpdate:modelValue":l[8]||(l[8]=e=>te.user.parent.firstName=e),label:"Parent First name *"},null,8,["modelValue"])])]),(0,a._)("div",W,[(0,a._)("div",j,[(0,a.Wm)(de,{color:"teal",class:"q-pa-sm",outlined:"",modelValue:te.user.parent.lastName,"onUpdate:modelValue":l[9]||(l[9]=e=>te.user.parent.lastName=e),label:"Parent Last name *"},null,8,["modelValue"])])]),(0,a._)("div",A,[(0,a._)("div",$,[(0,a.Wm)(de,{color:"teal",class:"q-pa-sm",outlined:"",modelValue:te.user.parent.phone,"onUpdate:modelValue":l[10]||(l[10]=e=>te.user.parent.phone=e),label:"Parent Phone *"},null,8,["modelValue"])])]),(0,a._)("div",E,[(0,a._)("div",R,[(0,a.Wm)(de,{color:"teal",class:"q-pa-sm",outlined:"",modelValue:te.user.parent.email,"onUpdate:modelValue":l[11]||(l[11]=e=>te.user.parent.email=e),label:"Parent Email *"},null,8,["modelValue"])])])])):(0,a.kq)("",!0),(0,a._)("div",S,[(0,a.wy)((0,a._)("div",T,[(0,a.Wm)(de,{color:"teal",class:"q-pa-sm",type:"text",readonly:"",outlined:"",modelValue:te.user.email,"onUpdate:modelValue":l[12]||(l[12]=e=>te.user.email=e),label:"Username *"},null,8,["modelValue"])],512),[[o.F8,!1]])]),(0,a._)("div",O,[(0,a._)("div",D,[(0,a.Wm)(de,{color:"teal",class:"q-pa-sm",type:"password",outlined:"",modelValue:te.user.login.password,"onUpdate:modelValue":l[13]||(l[13]=e=>te.user.login.password=e),label:"Password *"},null,8,["modelValue"])])]),(0,a._)("div",Z,[(0,a._)("div",H,[(0,a.Wm)(de,{color:"teal",class:"q-pa-sm",type:"password",outlined:"",modelValue:te.confirmPassword,"onUpdate:modelValue":l[14]||(l[14]=e=>te.confirmPassword=e),label:"Confirm Password *"},null,8,["modelValue"])])]),(0,a._)("div",F,[(0,a._)("div",I,[(0,a._)("div",L,[(0,a.Wm)(ue,{class:"btn-secondary","no-caps":"",onClick:ie.submit,label:"Sign up"},null,8,["onClick"])])])])])):(0,a.kq)("",!0)])):"COACH"===te.user.login.role?((0,a.wg)(),(0,a.iD)("div",x,[(0,a._)("div",B,[(0,a._)("div",Q,[(0,a.Wm)(de,{color:"teal",outlined:"",class:"q-pa-sm",modelValue:te.user.firstName,"onUpdate:modelValue":l[15]||(l[15]=e=>te.user.firstName=e),label:"First Name *"},null,8,["modelValue"])])]),(0,a._)("div",J,[(0,a._)("div",z,[(0,a.Wm)(de,{color:"teal",outlined:"",class:"q-pa-sm",modelValue:te.user.lastName,"onUpdate:modelValue":l[16]||(l[16]=e=>te.user.lastName=e),label:"Last Name *"},null,8,["modelValue"])])]),(0,a._)("div",G,[(0,a._)("div",K,[(0,a.Wm)(de,{color:"teal",class:"q-pa-sm",outlined:"",modelValue:te.user.phone,"onUpdate:modelValue":l[17]||(l[17]=e=>te.user.phone=e),label:"Phone *"},null,8,["modelValue"])])]),(0,a._)("div",M,[(0,a._)("div",X,[(0,a.Wm)(de,{disable:!this.askRole,class:"q-pa-sm",color:"teal",outlined:"",modelValue:te.user.email,"onUpdate:modelValue":l[18]||(l[18]=e=>te.user.email=e),label:"Email *"},null,8,["disable","modelValue"])])]),(0,a._)("div",Y,[(0,a._)("div",ee,[(0,a.Wm)(de,{color:"teal",class:"q-pa-sm",type:"password",outlined:"",modelValue:te.user.login.password,"onUpdate:modelValue":l[19]||(l[19]=e=>te.user.login.password=e),label:"Password *"},null,8,["modelValue"])])]),(0,a._)("div",le,[(0,a._)("div",se,[(0,a.Wm)(de,{color:"teal",class:"q-pa-sm",type:"password",outlined:"",modelValue:te.confirmPassword,"onUpdate:modelValue":l[20]||(l[20]=e=>te.confirmPassword=e),label:"Confirm Password *"},null,8,["modelValue"])])]),(0,a._)("div",ae,[(0,a._)("div",oe,[(0,a._)("div",re,[(0,a.Wm)(ue,{class:"btn-secondary","no-caps":"",onClick:ie.submit,label:"Sign up"},null,8,["onClick"])])])])])):(0,a.kq)("",!0)])])])}var ie=s(3100),ue=s(511);const ne={created(){this.$router.currentRoute.value.query.e&&"COACH"===this.$router.currentRoute.value.query.r&&(this.user.login.role="COACH",this.user.email=this.$router.currentRoute.value.query.e,this.askRole=!1),this.$store.state.User.token&&this.$store.state.User.isLoggedIn&&JSON.parse(this.$store.state.User.user)&&(this.$store.state.User.role&&"COACH"===this.$store.state.User.role?this.$router.push("/Coach"):this.$store.state.User.role&&"PARENT"===this.$store.state.User.role&&this.$router.push("/Player"))},data(){return{askRole:!0,user:{firstName:null,lastName:null,phone:null,email:null,login:{username:null,password:null,role:"COACH",status:"ACTIVE"},parent:{firstName:null,lastName:null,phone:null,email:null}},sports:["Baseball","SoftBall"],age:"below 18",confirmPassword:"",gender:null,firstname:null,middlename:null,lastname:null,dob:null,phone:null,email:null,isValid:!1,signup_success:!1,unsubscribe:"",countryCode:"+1 "}},methods:{...(0,ie.nv)("User",["coachSignup","playerSignup","login"]),...(0,ie.OI)("User",["setisSignup"]),submit(){if("COACH"===this.user.login.role){if(!this.user.firstName||!this.user.lastName||!this.user.phone||!this.user.email||!this.user.login.password||!this.confirmPassword)return void ue.Z.showToast("Fill all the fields","E");if(this.user.login.password!==this.confirmPassword)return void ue.Z.showToast("Password and confirm password not matching","E");this.user.parent=null,this.user.login.username=this.user.email,this.coachSignup(this.user)}else if("PARENT"===this.user.login.role){if(this.user.login.username=this.user.parent.email,!this.user.firstName||!this.user.lastName||!this.user.phone||!this.user.email||!this.user.dob||!this.user.parent.firstName||!this.user.parent.lastName||!this.user.parent.phone||!this.user.parent.email||!this.user.login.password||!this.user.login.username||!this.confirmPassword)return void ue.Z.showToast("Fill all the fields","E");if(this.user.login.password!==this.confirmPassword)return void ue.Z.showToast("Password and confirm password not matching","E");this.playerSignup(this.user)}},signin(){this.$router.push({path:"/login"})},signup(){this.firstname,this.middlename,this.lastname,this.gender,this.dob,this.countryCode,this.phone,this.email}}};var de=s(1639),me=s(8879),ce=s(1480),pe=s(3119),he=s(9984),ve=s.n(he);const we=(0,de.Z)(ne,[["render",te],["__scopeId","data-v-4bd99beb"]]),Ve=we;ve()(ne,"components",{QBtn:me.Z,QRadio:ce.Z,QInput:pe.Z})}}]);