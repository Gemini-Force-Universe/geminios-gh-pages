var I=Object.defineProperty;var O=(i,e,t)=>e in i?I(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var a=(i,e,t)=>(O(i,typeof e!="symbol"?e+"":e,t),t);import{D as T}from"./index-pTNjcZjp.js";const J=(i,e)=>{const t=i.__vccOpts||i;for(const[s,r]of e)t[s]=r;return t};function P(i){return`https://${i}-geminios-backend-g9k2.encr.app`}class o{constructor(e="prod",t){a(this,"user");a(this,"verify");!e.startsWith("http://")&&!e.startsWith("https://")&&(e=P(e)),typeof t=="string"&&(t={auth:t});const s=new L(e,t??{});this.user=new p.ServiceClient(s),this.verify=new S.ServiceClient(s)}}var p;(i=>{class e{constructor(s){a(this,"baseClient");this.baseClient=s}async AuthenticateUser(s){return await(await this.baseClient.callAPI("POST","/user/authenticate",JSON.stringify(s))).json()}async CheckEmail(s){return await(await this.baseClient.callAPI("POST","/user/check-email",JSON.stringify(s))).json()}async CheckUsername(s){return await(await this.baseClient.callAPI("POST","/user/check-username",JSON.stringify(s))).json()}async ClaimGeminiPassReward(s){return await(await this.baseClient.callAPI("POST","/user/geminipass/claim",JSON.stringify(s))).json()}async CreateUser(s){return await(await this.baseClient.callAPI("POST","/user",JSON.stringify(s))).json()}async DisconnectDiscord(){return await(await this.baseClient.callAPI("POST","/discord/disconnect")).json()}async DiscordCallback(s){const r=A({code:s.code,state:s.state});return await(await this.baseClient.callAPI("GET","/discord/callback",void 0,{query:r})).json()}async ForgotPassword(s){return await(await this.baseClient.callAPI("POST","/user/forgot-password",JSON.stringify(s))).json()}async GetDesktopSettings(){return await(await this.baseClient.callAPI("GET","/user/desktop/settings")).json()}async GetDiscordConnectionURL(){return await(await this.baseClient.callAPI("GET","/discord/connection_url")).json()}async GetDiscordUserInfo(){return await(await this.baseClient.callAPI("GET","/discord/info")).json()}async GetGeminiPass(){return await(await this.baseClient.callAPI("GET","/user/geminipass")).json()}async GetGeminiPassClaims(){return await(await this.baseClient.callAPI("GET","/user/geminipass/claims")).json()}async GetGeminiPassItems(){return await(await this.baseClient.callAPI("GET","/user/geminipass/items")).json()}async ResetPassword(s){return await(await this.baseClient.callAPI("POST","/user/reset-password",JSON.stringify(s))).json()}async UpdateDesktopSettings(s){return await(await this.baseClient.callAPI("PUT","/user/desktop/settings",JSON.stringify(s))).json()}async UseGeminiPassItem(s){return await(await this.baseClient.callAPI("POST","/user/geminipass/items/use",JSON.stringify(s))).json()}async ValidateSessionToken(s){return await(await this.baseClient.callAPI("POST","/auth/token/validate",JSON.stringify(s))).json()}}i.ServiceClient=e})(p||(p={}));var S;(i=>{class e{constructor(s){a(this,"baseClient");this.baseClient=s}async CheckRegistrationSession(s){return await(await this.baseClient.callAPI("POST","/verify/register/check",JSON.stringify(s))).json()}async CreateRegistrationSession(s){return await(await this.baseClient.callAPI("POST","/verify/register",JSON.stringify(s))).json()}async ResendEmailOTP(s){return await(await this.baseClient.callAPI("POST","/verify/email/resend",JSON.stringify(s))).json()}async SendEmailOTP(s){return await(await this.baseClient.callAPI("POST","/verify/email",JSON.stringify(s))).json()}async SendPasswordResetCode(s){return await(await this.baseClient.callAPI("POST","/verify/password-reset",JSON.stringify(s))).json()}async ValidateEmailOTP(s){return await(await this.baseClient.callAPI("POST","/verify/email/validate",JSON.stringify(s))).json()}}i.ServiceClient=e})(S||(S={}));function m(i){const e=[];for(const t in i){const s=Array.isArray(i[t])?i[t]:[i[t]];for(const r of s)e.push(`${t}=${encodeURIComponent(r)}`)}return e.join("&")}function A(i){for(const e in i)i[e]===void 0&&delete i[e];return i}function F(i){return"encore.dev.headers."+btoa(JSON.stringify(i)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}class C{constructor(e,t){a(this,"ws");a(this,"hasUpdateHandlers",[]);let s=["encore-ws"];t&&s.push(F(t)),this.ws=new WebSocket(e,s),this.on("error",()=>{this.resolveHasUpdateHandlers()}),this.on("close",()=>{this.resolveHasUpdateHandlers()})}resolveHasUpdateHandlers(){const e=this.hasUpdateHandlers;this.hasUpdateHandlers=[];for(const t of e)t()}async hasUpdate(){await new Promise(e=>{this.hasUpdateHandlers.push(()=>e(null))})}on(e,t){this.ws.addEventListener(e,t)}off(e,t){this.ws.removeEventListener(e,t)}close(){this.ws.close()}}class U{constructor(e,t){a(this,"socket");a(this,"buffer",[]);this.socket=new C(e,t),this.socket.on("message",s=>{this.buffer.push(JSON.parse(s.data)),this.socket.resolveHasUpdateHandlers()})}close(){this.socket.close()}async send(e){return this.socket.ws.readyState===WebSocket.CONNECTING&&await new Promise(t=>{this.socket.ws.addEventListener("open",t,{once:!0})}),this.socket.ws.send(JSON.stringify(e))}async next(){for await(const e of this)return e}async*[Symbol.asyncIterator](){for(;;)if(this.buffer.length>0)yield this.buffer.shift();else{if(this.socket.ws.readyState===WebSocket.CLOSED)return;await this.socket.hasUpdate()}}}class D{constructor(e,t){a(this,"socket");a(this,"buffer",[]);this.socket=new C(e,t),this.socket.on("message",s=>{this.buffer.push(JSON.parse(s.data)),this.socket.resolveHasUpdateHandlers()})}close(){this.socket.close()}async next(){for await(const e of this)return e}async*[Symbol.asyncIterator](){for(;;)if(this.buffer.length>0)yield this.buffer.shift();else{if(this.socket.ws.readyState===WebSocket.CLOSED)return;await this.socket.hasUpdate()}}}class R{constructor(e,t){a(this,"socket");a(this,"responseValue");let s;this.responseValue=new Promise(r=>s=r),this.socket=new C(e,t),this.socket.on("message",r=>{s(JSON.parse(r.data))})}async response(){return this.responseValue}close(){this.socket.close()}async send(e){return this.socket.ws.readyState===WebSocket.CONNECTING&&await new Promise(t=>{this.socket.ws.addEventListener("open",t,{once:!0})}),this.socket.ws.send(JSON.stringify(e))}}const E=fetch.bind(void 0);class L{constructor(e,t){a(this,"baseURL");a(this,"fetcher");a(this,"headers");a(this,"requestInit");a(this,"authGenerator");if(this.baseURL=e,this.headers={"Content-Type":"application/json"},typeof window>"u"&&(this.headers["User-Agent"]="geminios-backend-g9k2-Generated-TS-Client (Encore/v1.41.2)"),this.requestInit=t.requestInit??{},t.fetcher!==void 0?this.fetcher=t.fetcher:this.fetcher=E,t.auth!==void 0){const s=t.auth;typeof s=="function"?this.authGenerator=s:this.authGenerator=()=>s}}async getAuthData(){let e;if(this.authGenerator){const t=this.authGenerator();t instanceof Promise?e=await t:e=t}if(e){const t={};return t.headers={},t.headers.Authorization="Bearer "+e,t}}async createStreamInOut(e,t){let{query:s,headers:r}=t??{};const n=await this.getAuthData();n&&(n.query&&(s={...s,...n.query}),n.headers&&(r={...r,...n.headers}));const l=s?"?"+m(s):"";return new U(this.baseURL+e+l,r)}async createStreamIn(e,t){let{query:s,headers:r}=t??{};const n=await this.getAuthData();n&&(n.query&&(s={...s,...n.query}),n.headers&&(r={...r,...n.headers}));const l=s?"?"+m(s):"";return new D(this.baseURL+e+l,r)}async createStreamOut(e,t){let{query:s,headers:r}=t??{};const n=await this.getAuthData();n&&(n.query&&(s={...s,...n.query}),n.headers&&(r={...r,...n.headers}));const l=s?"?"+m(s):"";return new R(this.baseURL+e+l,r)}async callAPI(e,t,s,r){let{query:n,headers:l,...v}=r??{};const d={...this.requestInit,...v,method:e,body:s??null};d.headers={...this.headers,...d.headers,...l};const u=await this.getAuthData();u&&(u.query&&(n={...n,...u.query}),u.headers&&(d.headers={...d.headers,...u.headers}));const b=n?"?"+m(n):"",h=await this.fetcher(this.baseURL+t+b,d);if(!h.ok){let g={code:"unknown",message:`request failed: status ${h.status}`};try{const f=await h.text();try{const y=JSON.parse(f);N(y)?g=y:g.message+=": "+JSON.stringify(y)}catch{g.message+=": "+f}}catch(f){g.message+=": "+String(f)}throw new w(h.status,g)}return h}}function N(i){return i!=null&&j(i.code)&&typeof i.message=="string"&&(i.details===void 0||i.details===null||typeof i.details=="object")}function j(i){return i!==void 0&&Object.values(k).includes(i)}class w extends Error{constructor(t,s){super(s.message);a(this,"status");a(this,"code");a(this,"details");Object.defineProperty(this,"name",{value:"APIError",enumerable:!1,configurable:!0}),Object.setPrototypeOf==null?this.__proto__=w.prototype:Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace!==void 0&&Error.captureStackTrace(this,this.constructor),this.status=t,this.code=s.code,this.details=s.details}}var k=(i=>(i.OK="ok",i.Canceled="canceled",i.Unknown="unknown",i.InvalidArgument="invalid_argument",i.DeadlineExceeded="deadline_exceeded",i.NotFound="not_found",i.AlreadyExists="already_exists",i.PermissionDenied="permission_denied",i.ResourceExhausted="resource_exhausted",i.FailedPrecondition="failed_precondition",i.Aborted="aborted",i.OutOfRange="out_of_range",i.Unimplemented="unimplemented",i.Internal="internal",i.Unavailable="unavailable",i.DataLoss="data_loss",i.Unauthenticated="unauthenticated",i))(k||{});const c=P("prod"),q=T("auth",{state:()=>({isValidatingSession:!0,isRegistering:!1,session:null,discordAvatarURL:"",loginForm:{isLoading:!1,username:"",password:""},registerForm:{isLoading:!0,rsid:"",step:1,email:"",otp:[],username:"",password:"",hasAgreedToContact:!0,hasAgreedToTerms:!0}}),actions:{setIsRegistering(i){this.isRegistering=i},async validateSessionToken(){const i=localStorage.getItem("session_token");if(!i){console.log("No session token found."),this.isValidatingSession=!1;return}console.log("Validating session token...");const t=await new o(c,{}).user.ValidateSessionToken({Token:i});if(!t.IsValid){console.error("Session token is invalid."),this.isValidatingSession=!1;return}console.log("Session token is valid."),this.session={token:i,user:t.User},this.isValidatingSession=!1},async login(i,e,t){console.log("Authenticating user..."),this.loginForm.isLoading=!0;const r=await new o(c,{}).user.AuthenticateUser({Username:i,Password:e,ReCAPTCHAToken:t});return this.loginForm.isLoading=!1,r.Success?(console.log("User authenticated successfully."),this.session={token:r.Token,user:r.User},localStorage.setItem("session_token",r.Token),!0):(console.error("Failed to authenticate user:",r.ErrorCode),!1)},async sendPasswordResetEmail(i,e){console.log("Sending password reset email..."),this.loginForm.isLoading=!0;const s=await new o(c,{}).user.ForgotPassword({Username:i,ReCAPTCHAToken:e});return s.Success?console.log("Password reset email sent successfully."):console.error("Failed to send password reset email:",s.ErrorCode),this.loginForm.isLoading=!1,{isStillFresh:s.ErrorCode==="CODE_STILL_FRESH"}},async resetPassword(i,e,t,s,r){console.log("Resetting password..."),this.registerForm.isLoading=!0;const l=await new o(c,{}).user.ResetPassword({Email:t,Username:e,Code:i,NewPassword:s,ReCAPTCHAToken:r});return l.Success?console.log("Password reset successfully."):console.error("Failed to reset password:",l.ErrorCode),this.registerForm.isLoading=!1,l.Success},async logout(){console.log("Logging out..."),this.session=null,localStorage.removeItem("session_token"),window.location.reload()},async createRegistrationSession(i){console.log("Checking for active registration session..."),this.registerForm.isLoading=!0;const e=new o(c,{}),t=localStorage.getItem("rsid");if(t){console.log("Found active registration session. Validating...");const r=await e.verify.CheckRegistrationSession({RSID:t,Email:""});if(r.Success){console.log("Registration session is valid."),this.registerForm.rsid=t,this.registerForm.isLoading=!1;return}else console.log("Registration session is invalid:",r.ErrorCode),localStorage.removeItem("rsid")}else console.log("No active registration session found.");console.log("Creating new registration session...");const s=await e.verify.CreateRegistrationSession({ReCAPTCHAToken:i});if(!s.Success){console.error("Failed to create registration session:",s.ErrorCode);return}console.log("Created registration session:",s.ID),localStorage.setItem("rsid",s.ID),this.registerForm.rsid=s.ID,this.registerForm.isLoading=!1},async checkEmailAvailability(){console.log("Checking email availability..."),this.registerForm.isLoading=!0;const e=await new o(c,{}).user.CheckEmail({Email:this.registerForm.email});return this.registerForm.isLoading=!1,{isValid:e.IsValid,isAvailable:e.IsAvailable}},async checkUsernameAvailability(){this.registerForm.isLoading=!0;const e=await new o(c,{}).user.CheckUsername({Username:this.registerForm.username});return this.registerForm.isLoading=!1,{isValid:e.IsValid,isAvailable:e.IsAvailable}},async sendEmailOTP(){console.log("Sending email OTP..."),this.registerForm.isLoading=!0;const e=await new o(c,{}).verify.SendEmailOTP({RSID:this.registerForm.rsid,Email:this.registerForm.email});let t=!1;return e.Success?(console.log("Sent email successfully."),this.registerForm.isLoading=!1,{wasAlreadyVerified:t,waitTime:e.WaitTime}):(console.error("Failed to send email OTP:",e.ErrorCode),e.ErrorCode==="EMAIL_ALREADY_VERIFIED"&&(t=!0),this.registerForm.isLoading=!1,{wasAlreadyVerified:t,waitTime:0})},async resendEmailOTP(){console.log("Resending email OTP..."),this.registerForm.isLoading=!0;const e=await new o(c,{}).verify.ResendEmailOTP({RSID:this.registerForm.rsid,Email:this.registerForm.email});return e.Success||console.error("Failed to resend email OTP:",e.ErrorCode),this.registerForm.otp=[],this.registerForm.isLoading=!1,{isStillFresh:e.ErrorCode==="OTP_STILL_FRESH",waitTime:e.WaitTime}},async validateEmailOTP(i){console.log("Validating email OTP..."),this.registerForm.isLoading=!0;const t=await new o(c,{}).verify.ValidateEmailOTP({RSID:this.registerForm.rsid,Email:this.registerForm.email,Code:i});return this.registerForm.isLoading=!1,t.Success?(console.log("Email OTP validated successfully."),!0):(console.error("Failed to validate email OTP:",t.ErrorCode),!1)},async createUser(i){console.log("Creating user..."),this.registerForm.isLoading=!0;const t=await new o(c,{}).user.CreateUser({RSID:this.registerForm.rsid,Email:this.registerForm.email,Username:this.registerForm.username,Password:this.registerForm.password,ReCAPTCHAToken:i});t.Success||console.error("Failed to create user:",t.ErrorCode),console.log("User created successfully."),this.session={token:t.Token,user:{...t.User,IsDiscordConnected:!1,DiscordID:"",DiscordUsername:"",DiscordDiscriminator:""}},localStorage.setItem("session_token",t.Token),this.registerForm.isLoading=!1,this.isRegistering=!1},async fetchUserDiscordInfo(){var t;const e=await new o(c,{auth:(t=this.session)==null?void 0:t.token}).user.GetDiscordUserInfo();if(!e.Success){console.error("Failed to fetch user Discord information:",e.ErrorCode);return}this.session.user={...this.session.user,IsDiscordConnected:!0,DiscordID:e.ID,DiscordUsername:e.Username,DiscordDiscriminator:e.Discriminator},this.discordAvatarURL=e.AvatarURL}},getters:{isLoggedIn(i){return i.session!==null},isConnectedToDiscord(i){var e;return(e=i.session)==null?void 0:e.user.IsDiscordConnected},async discordAuthURL(i){var s;const t=await new o(c,{auth:(s=i.session)==null?void 0:s.token}).user.GetDiscordConnectionURL();return t.Success?t.URL:(console.error("Failed to get Discord connection URL:",t.ErrorCode),"")}}});export{o as C,P as E,J as _,q as u};