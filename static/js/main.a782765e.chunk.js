(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,n){e.exports={inputMain:"addquiz_inputMain__1IcIB",Form:"addquiz_Form__2S4kW"}},38:function(e,t,n){e.exports=n(56)},48:function(e,t,n){},49:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),s=n(35),u=n(8),i=n(36),l=(n(47),n(48),n(30)),m=n(10),d=n(11),p=n(13),f=n(12),h=(n(49),n(17)),b=n(27),E=n(16),v=n(58),g=n(59),_=n(9),A=n.n(_),O=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={questions:[],score:0,disabled:!1},e.questions=function(t){e.start(t)},e.start=function(t){e.setState({questions:t})},e.onInputChange=function(t,n){var a=e.state.questions.map((function(e){return e.QuestionName!==t.target.name?e:Object(E.a)({},e,{options:e.options.map((function(e){var n=e.name===t.target.value;return Object(E.a)({},e,{selected:n})}))})}));e.setState({questions:a})},e.score=0,e.check=function(){e.state.questions.map((function(t){t.options.map((function(n){console.log(n),!0===n.selected&&(console.log(n.name),n.name===t.answer?(console.log("corret"),e.score=e.score+1):e.score=e.score)}))})),e.setState({score:e.score})},e.submit=function(){e.check(),console.log(e.state.score),e.setState({disabled:!0})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.questions(this.props.data),console.log(this.props.data)}},{key:"render",value:function(){var e=this,t=r.a.createElement("h1",null,"loading");null!=this.state.questions&&(t=this.state.questions.map((function(t,n){return r.a.createElement("div",null,r.a.createElement(v.a,{className:A.a.card},r.a.createElement(v.a.Body,null,r.a.createElement("h3",null,t.QuestionName),t.options.map((function(a,o){return r.a.createElement("label",{className:A.a.radio},r.a.createElement("input",{key:o,type:"radio",name:t.QuestionName,value:a.name,checked:a.selected,onChange:function(t){return e.onInputChange(t,n)}})," ",a.name)})))))})));return r.a.createElement("div",{className:A.a.main},r.a.createElement("h1",{className:A.a.title},"Quiz"),t,r.a.createElement(g.a,{disabled:this.state.disabled,variant:"success",className:A.a.button,onClick:this.submit},"Submit"),r.a.createElement("h1",{className:A.a.score},this.state.score))}}]),n}(a.Component),S=n(21),T=n(32),j=n.n(T),N=(n(51),n(57)),k=n(60),y=n(33),C=n.n(y),D=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={QuestionName:"",options:[{name:"",selected:!1}],answer:""},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=function(t){t.preventDefault(),"question"===t.target.name?e.setState({QuestionName:t.target.value}):e.setState({answer:t.target.value})},n=this.state.options.map((function(t,n){return a.createElement(a.Fragment,{key:"".concat(t,"~").concat(n)},a.createElement("div",{className:"form-group col-sm-6"},a.createElement("label",{htmlFor:"time"},"Option"),a.createElement("input",{type:"text",className:"form-control",id:"option",name:"option",value:t.option,onChange:function(t){return function(t,n){"option"===n.target.name&&e.setState({options:j()(e.state.options,Object(S.a)({},t,{name:{$set:n.target.value}}))})}(n,t)}})),a.createElement("div",{className:"form-group col-sm-2"},a.createElement("button",{className:"btn btn-link",type:"button",onClick:function(){return function(t){var n=Object(h.a)(e.state.options);n.splice(t,1),e.setState({options:n})}()}},"-"),a.createElement("button",{className:"btn btn-link",type:"button",onClick:function(){return function(){var t=Object(h.a)(e.state.options);t.push({name:"",selected:!1}),e.setState({options:t})}()}},"+")))}));return a.createElement("div",{className:C.a.inputMain},a.createElement("h1",null,"Add Stop Data"),a.createElement(N.a,{className:"mb-3"},a.createElement(N.a.Prepend,null,a.createElement(N.a.Text,{id:"basic-addon1"},"Question Name ")),a.createElement(k.a,{name:"question",type:"text",value:this.state.QuestionName,onChange:function(e){return t(e)},placeholder:"Enter Question","aria-describedby":"basic-addon1"})),n,a.createElement("div",{className:"form-group col-sm-6"},a.createElement("label",{htmlFor:"time"},"Answer"),a.createElement("input",{type:"text",className:"form-control",id:"answer",name:"answer",value:this.state.answer,onChange:function(e){return t(e)}})),a.createElement(g.a,{variant:"success",type:"submit",onClick:function(t){return e.props.add(e.state)}},"Save"),a.createElement("pre",null,JSON.stringify(this.state,null,2)))}}]),n}(a.Component),q=function(e){var t=Object(a.useState)(!1),n=Object(b.a)(t,2),o=n[0],c=n[1],s=Object(a.useState)([{QuestionName:"who is the founder of apple?",options:[{name:"Mark",selected:!1},{name:"stevejobs",selected:!1}],answer:"stevejobs"},{QuestionName:"who is the founder of tesla?",options:[{name:"Musk",selected:!1},{name:"gates",selected:!1}],answer:"Musk"}]),u=Object(b.a)(s,2),i=u[0],l=u[1],m=r.a.createElement(O,{data:i});o&&(m=r.a.createElement(D,{add:function(e){l([].concat(Object(h.a)(i),[e])),c(!o)}}));return r.a.createElement("div",null,m,r.a.createElement("button",{onClick:function(e){e.preventDefault(),c(!o)}},o?"Quiz":"Add Quiz"))},w=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(q,null))}}]),n}(r.a.Component),I=function(e,t){return Object(E.a)({},e,{},t)},Q={pages:[],purchased:!1,token:null,userId:null,error:null,loading:!1,form:!1,authRedirectPath:"/main"},z=function(e,t){return I(e,{error:null,loading:!0})},F=function(e,t){return I(e,{token:t.idToken,userId:t.userId,error:null,loading:!1,form:t.redirectPath})},H=function(e,t){return I(e,{error:t.error,loading:!1})},U=function(e,t){return I(e,{token:null,userId:null})},x=function(e,t){return I(e,{authRedirectPath:t.path})},M=function(e){return I(e,{purchased:!1})},R=function(e){return I(e,{loading:!0})},P=function(e,t,n){var a=I(t.pageData,{id:t.pageId});return I(e,{loading:!1,purchased:!0,form:!1,pages:e.pages.concat(a)})},L=function(e){return I(e,{loading:!1})},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return z(e);case"AUTH_SUCCESS":return F(e,t);case"AUTH_FAIL":return H(e,t);case"AUTH_LOGOUT":return U(e);case"SET_AUTH_REDIRECT_PATH":return x(e,t);case"ADD_DATA_INIT":return M(e);case"ADD_DATA_START":return R(e);case"ADD_DATA_SUCCESS":return P(e,t);case"ADD_DATA_FAIL":return L(e);default:return e}},J={profiles:[],loading:!1,purchased:!1},G=function(e){return I(e,{loading:!0})},W=function(e,t){return I(e,{profiles:t.data,loading:!1})},Y=function(e){return I(e,{loading:!1})},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DATA_START":return G(e);case"FETCH_DATA_SUCCESS":return W(e,t);case"FETCH_DATA_FAIL":return Y(e);default:return e}},K=u.d,V=Object(u.c)({auth:B,prodata:$}),X=Object(u.e)(V,K(Object(u.a)(l.a))),Z=r.a.createElement(s.a,{store:X},r.a.createElement(i.a,null,r.a.createElement(w,null)));c.a.render(Z,document.getElementById("root"))},9:function(e,t,n){e.exports={main:"quiz_main__95E-r",card:"quiz_card__2Glrw",radio:"quiz_radio__2CfC7",button:"quiz_button__2cYNz",score:"quiz_score__1T3Dx",title:"quiz_title__3uM4p"}}},[[38,1,2]]]);
//# sourceMappingURL=main.a782765e.chunk.js.map