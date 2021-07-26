(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(9),o=n.n(a),r=n(6),c=n(7),i=n(2),l=n(3),s=n(5),u=n(4),d=n(1),b=n.n(d),j=n(0),h=function(t){var e=t.toDo,n=t.done;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"header-title",children:"ToDo App"}),Object(j.jsxs)("div",{className:"do",children:[e," more to do,"]}),Object(j.jsxs)("div",{className:"do",children:[n," done"]})]})},m=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={term:""},t.onSearchChange=function(e){var n=e.target.value;t.setState({term:n}),t.props.onSearchChange(n)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"input-item",type:"text",name:"",id:"",value:this.state.term,onChange:this.onSearchChange})})}}]),n}(d.Component),A=n(10),g=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t="list-item ",e="btn-important ",n=this.props,a=n.important,o=n.done,r=n.label,c=n.onToggleDone,i=n.onToggleImportant;return Object(j.jsxs)("div",{className:"wrapper-ul",children:[Object(j.jsx)("li",{onClick:c,className:t+=o?" bold":" very-bold",children:Object(j.jsx)("span",{children:r})}),Object(j.jsx)("button",{onClick:this.props.onDeleted,className:"btn-delete",children:Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjklEQVRIie2Vyw2AIBQER3uQaIlarhwsRy+Y4AfCPuTmnEx0dwg+FH4MzIAz5FzIZlmAHfCixIXMHjqSDMAaHtyAqaD8nhnVQE4ilysSc3mJpLo8J/ms/CSeEH+7tozzK/GqpZX3FdKuInuh6Ra9vVDLYSwuT92TJSWjaJYocy5LLIdIkjT/XEPjH87PgwNng1K28QMLlAAAAABJRU5ErkJggg==",alt:""})}),Object(j.jsx)("button",{onClick:i,className:e+=a?" impor":" ",children:Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA60lEQVRIie2USw6CMBBAn8bAgjsY18g9vIR4B6PX0MQgJ1KvIXoADqALdQEkfKalLXHHS7rp0HmdlimMWLIBcuDrOHIg1gmGJK9LlEgLMmALhEBQjrCcyxRrjAUJ4Gm+94CzqyAR4jfgIsyntoIH4GvibTzgLsWnCtEJeOl20uJNUUUv1Q7CnrjEsifeSBA4CAIpPtPZBK4awcQkQd8R6YiwuOSVg8BoTb17pd9U1Qc+8MSiggVwEOY/7QQlR2CuyNWg3fIpciUVPt0utnqLqq7eUVxi9dhFwJ7msRgJ/v5cxwMlObDWCUY6/ADyeqJF7o9bZAAAAABJRU5ErkJggg==",alt:""})})]})}}]),n}(b.a.Component),f=["id"],O=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.todos,a=e.onToggleImportant,o=e.onToggleDone;return Object(j.jsx)("ul",{className:"ul-tag",children:n.map((function(e){var n=e.id,c=Object(A.a)(e,f);return Object(j.jsx)("div",{children:Object(j.jsx)(g,Object(r.a)(Object(r.a)({onDeleted:function(){return t.props.deleted(n)}},c),{},{onToggleImportant:function(){return a(n)},onToggleDone:function(){return o(n)}}))},n)}))})}}]),n}(d.Component),p=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={label:""},t.onLabelChange=function(e){t.setState({label:e.target.value})},t.onSubmit=function(e){e.preventDefault(),""!==t.state.label&&t.props.onItemAdded(t.state.label),t.setState({label:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:"item-form",onSubmit:this.onSubmit,children:[Object(j.jsx)("input",{className:"input-item",type:"text",onChange:this.onLabelChange,placeholder:"What do you want",value:this.state.label}),Object(j.jsx)("button",{className:"btn",children:"Add element"})]})}}]),n}(d.Component),v=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onButton,a=this.buttons.map((function(t){var a=t.name,o=t.label,r=e===a?"active":"done";return Object(j.jsx)("button",{onClick:function(){n(a)},className:r,children:o},a)}));return Object(j.jsx)("div",{children:a})}}]),n}(d.Component),x=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))).maxId=100,t.state={todoData:[t.createTodoItem("\u0412\u0447\u0438\u0442\u0438 React"),t.createTodoItem("Learn React")],term:" ",filter:"all"},t.deleteItem=function(e){console.log(e),t.setState((function(t){var n=t.todoData,a=n.findIndex((function(t){return t.id===e}));return{todoData:[].concat(Object(c.a)(n.slice(0,a)),Object(c.a)(n.slice(a+1)))}}))},t.addItem=function(e){var n=t.createTodoItem(e);t.setState((function(t){var e=t.todoData;return{todoData:[].concat(Object(c.a)(e),[n])}}))},t.onToggleDone=function(e){t.setState((function(t){var n=t.todoData,a=n.findIndex((function(t){return t.id===e})),o=n[a],i=Object(r.a)(Object(r.a)({},o),{},{done:!o.done});return{todoData:[].concat(Object(c.a)(n.slice(0,a)),[i],Object(c.a)(n.slice(a+1)))}}))},t.onToggleImportant=function(e){t.setState((function(t){var n=t.todoData,a=n.findIndex((function(t){return t.id===e})),o=n[a],i=Object(r.a)(Object(r.a)({},o),{},{important:!o.important});return{todoData:[].concat(Object(c.a)(n.slice(0,a)),[i],Object(c.a)(n.slice(a+1)))}}))},t.onSearchChange=function(e){t.setState({term:e})},t.onButton=function(e){t.setState({filter:e})},t}return Object(l.a)(n,[{key:"createTodoItem",value:function(t){return{label:t,important:!1,done:!1,id:this.maxId++}}},{key:"search",value:function(t,e){return" "===e?t:t.filter((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1}))}},{key:"filter",value:function(t,e){switch(e){case"all":return t;case"active":return t.filter((function(t){return!t.done}));case"done":return t.filter((function(t){return t.done}));default:return t}}},{key:"render",value:function(){var t=this.state,e=t.term,n=t.todoData,a=t.filter,o=this.filter(this.search(n,e),a),r=this.state.todoData.filter((function(t){return t.done})).length,c=this.state.todoData.length-r;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(h,{toDo:c,done:r}),Object(j.jsx)(m,{onSearchChange:this.onSearchChange}),Object(j.jsx)(v,{onButton:this.onButton,filter:a}),Object(j.jsx)(p,{onItemAdded:this.addItem}),Object(j.jsx)(O,{deleted:this.deleteItem,todos:o,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone})]})}}]),n}(d.Component);n(16);o.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.47cc8138.chunk.js.map