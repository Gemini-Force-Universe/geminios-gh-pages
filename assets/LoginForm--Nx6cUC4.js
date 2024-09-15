import{d as M,U as N,r as l,q as D,a as P,o as f,c as C,b as S,e,x as m,u as t,t as F,v as y,f as a,w as i,y as p,T as G,z as J,C as Z,I as K,V as O}from"./index-pTNjcZjp.js";import{_ as k,a as _,b as j}from"./Input.vue_vue_type_script_setup_true_lang-jLdNSdpc.js";import{S as E}from"./Spinner-MXSLBe5O.js";import{c as A}from"./utils-DnNDQBbQ.js";import{u as Q}from"./auth-DCUkzX9t.js";import"./index-B58lrkWd.js";const X=e("h1",{class:"text-3xl font-bold"},"Esqueceu a senha?",-1),Y=e("p",{class:"text-balance text-muted-foreground"}," Te enviaremos um e-mail com um link para redefinir sua senha. ",-1),ee=[X,Y],te={class:"flex items-center justify-center gap-4 w-full"},ae={key:0,class:"z-50 absolute left-0 top-0 flex items-center justify-center w-full h-full bg-background/80 backdrop-blur-sm"},se={class:"grid gap-6 w-full max-w-[350px]"},le=e("div",{class:"grid gap-2 w-full text-center"},[e("h1",{class:"text-3xl font-bold"},"Login"),e("p",{class:"text-balance text-muted-foreground"}," Entre na sua conta GFU para continuar ")],-1),oe={class:"flex flex-col items-center justify-center gap-4"},ne={class:"grid gap-2 w-full"},re={class:"grid gap-2 w-full"},ie={class:"flex items-center justify-between w-full"},ue={key:0,class:"text-red-500"},de={class:"flex flex-col items-center justify-center w-full"},ce=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-6"},[e("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})],-1),fe=e("span",null,"Ainda não é membro? ",-1),we=M({__name:"LoginForm",setup(me){const R=O(),w=N(),u=Q(),V=l(null),{focused:H}=D(V),v=l(""),g=l(""),d=l(""),x=l(!1),h=l(""),b=l(0),o=l(""),c=P(()=>u.loginForm.isLoading),T=P(()=>v.value!==""&&g.value!==""&&o.value!==""&&!c.value),I=async()=>{if(!T.value)return;await u.login(v.value,g.value,o.value)||(d.value="Apelido ou senha incorretos.",R.handleReset(b.value),o.value="")},U=()=>{x.value=!0,setTimeout(()=>{H.value=!0},0)},L=async()=>{if(w===void 0){console.error("Failed to load reCAPTCHA.");return}await w.recaptchaLoaded();const n=await w.executeRecaptcha("password_reset");(await u.sendPasswordResetEmail(h.value,n)).isStillFresh?d.value="Aguarde alguns minutos e tente novamente.":d.value="",x.value=!1,h.value="",R.handleReset(b.value),o.value=""},q=()=>{u.registerForm.step=1,u.setIsRegistering(!0)},W=n=>{b.value=n},$=()=>{console.error("ReCAPTCHA widget error."),o.value=""},z=()=>{console.log("ReCAPTCHA widget expired."),o.value=""},B=n=>{console.log("ReCAPTCHA widget response received."),o.value=n};return(n,s)=>(f(),C(K,null,[(f(),S(G,{to:"body"},[e("div",{class:m(t(A)("z-[9999]","fixed inset-0","flex flex-col items-center justify-center","bg-black/80 backdrop-blur-[10px]",!x.value&&"hidden"))},[e("form",{class:m(t(A)("flex flex-col items-center justify-center gap-4","w-full")),novalidate:"",onSubmit:F(L,["prevent"])},[e("div",{class:m(t(A)("flex flex-col items-center justify-center gap-6","px-[20px] py-[30px]","rounded-3xl","w-[30%]","bg-black/60 backdrop-blur-[10px]"))},[c.value?(f(),S(E,{key:0})):y("",!0),e("div",{class:m(["grid gap-2 w-full text-center",{hidden:c.value}])},ee,2),e("div",{class:m(["flex flex-col items-center justify-center gap-4",{hidden:c.value}])},[a(t(k),{ref_key:"$forgotUsernameInput",ref:V,type:"text",id:"forgot-username",class:"text-center",placeholder:"Apelido",required:"",modelValue:h.value,"onUpdate:modelValue":s[0]||(s[0]=r=>h.value=r)},null,8,["modelValue"]),e("div",te,[a(t(_),{type:"submit"},{default:i(()=>[p(" Redefinir Senha ")]),_:1}),a(t(_),{variant:"destructive",type:"button",onClick:s[1]||(s[1]=r=>x.value=!1)},{default:i(()=>[p(" Cancelar ")]),_:1})])],2)],2)],34)],2)])),e("form",{class:"flex flex-col items-center justify-center gap-4 w-full",novalidate:"",onSubmit:F(I,["prevent"])},[c.value?(f(),C("div",ae,[a(E)])):y("",!0),e("div",se,[le,e("div",oe,[e("div",ne,[a(t(j),{for:"username"},{default:i(()=>[p("Apelido")]),_:1}),a(t(k),{id:"username",type:"text",required:"",autofocus:"",modelValue:v.value,"onUpdate:modelValue":s[2]||(s[2]=r=>v.value=r)},null,8,["modelValue"])]),e("div",re,[e("div",ie,[a(t(j),{for:"password"},{default:i(()=>[p("Senha")]),_:1}),a(t(_),{variant:"link",class:"inline-block ml-auto text-sm text-[#d835fc] underline hover:no-underline",onClick:U},{default:i(()=>[p(" Esqueci a senha ")]),_:1})]),a(t(k),{id:"password",type:"password",required:"",modelValue:g.value,"onUpdate:modelValue":s[3]||(s[3]=r=>g.value=r)},null,8,["modelValue"]),d.value.length>0?(f(),C("span",ue,J(d.value),1)):y("",!0)]),e("div",de,[a(t(Z),{onWidgetId:W,onErrorCallback:$,onExpiredCallback:z,onLoadCallback:B})]),a(t(_),{type:"submit",class:"my-6 rounded-full w-16 h-16 disabled:bg-muted",disabled:!T.value},{default:i(()=>[ce]),_:1},8,["disabled"])])]),e("div",{class:"grid mt-4 text-sm text-center md:block"},[fe,e("button",{variant:"link",class:"text-[#d835fc] underline hover:no-underline",onClick:q}," Junte-se agora, é de graça! ")])],32)],64))}});export{we as default};
