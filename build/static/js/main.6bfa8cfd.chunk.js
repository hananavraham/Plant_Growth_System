(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{202:function(e,t,a){e.exports=a(442)},207:function(e,t,a){},442:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(39),l=a.n(s),c=(a(207),a(72)),o=a(12),i=a(13),u=a(15),m=a(14),d=a(16),h=a(4),p=a(73),f=a.n(p),b=a(210),E=a(9),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={renderResearch:null},a.GotoResearch=a.GotoResearch.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"GotoResearch",value:function(){this.setState({renderResearch:!0})}},{key:"render",value:function(){if(this.state.renderResearch)return r.a.createElement(b.a,{to:{pathname:"/ResearchPage",state:{research:this.props.research}}});var e={container:{color:null}};return"Pending"==this.props.status?e.container.color="#ac6236":e.container.color="#36ac4d",r.a.createElement("div",{id:"researchBox"},r.a.createElement("img",{src:this.props.image}),r.a.createElement("div",null,r.a.createElement(E.d,{className:"cogIcon",onClick:this.GotoResearch}),r.a.createElement("h5",null,this.props.name),r.a.createElement("article",null,this.props.description),r.a.createElement("p",{className:"from-row"},r.a.createElement(E.i,{className:"icons"}),r.a.createElement("time",null,this.props.date)),r.a.createElement("h6",{style:e.container},this.props.status)))}}]),t}(n.Component),y=a(8),g=a.n(y);function w(){return g.a.ajax({url:"https://plantgrowthsystembackend.azurewebsites.net/GeneralPlant/",dataType:"json",async:!1})}var O=a(163);var k=a(32),j=a.n(k);function S(e,t,a){var n,r,s,l=null,c=[],o=null;try{a.forEach(function(e,t){switch(o=t,t){case 0:n=e[1];break;case 1:r=e[1];break;case 2:s=e[1];break;case 3:l=e[1];break;case 4:break;default:var a=new Date(Object(O.getJsDateFromExcel)(e[0])).toLocaleDateString();e[0]=a,c.push({date:e[0],min_Humidity:e[1],max_Humidity:e[2],light_Per_Day:e[3]})}})}catch(i){return new j.a({type:"error",layout:"topRight",text:"There was an error with file "+o+",plant not created!",timeout:3e3}).show(),null}return function(e,t){g.a.ajax({url:"https://plantgrowthsystembackend.azurewebsites.net/Plant/createPlantAndAddControlPlan",dataType:"json",type:"POST",data:{researchId:e,plant:t},success:function(e){},error:function(e,t,a){console.error(t,a.toString())}.bind(this)})}(e,{Env_control_address:n,Growth_control_address:r,Frequency_of_measurement:s,Frequency_of_upload:l,Intervals:c}),!0}var N=a(75),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={generalPlants:[],owners:[],image:null,Description:null,Name:null,Start_date:null,End_date:null,General_plant_id:null,Number_of_plants:0,files:null,goBack:!1},a.showPlantImage=a.showPlantImage.bind(Object(h.a)(Object(h.a)(a))),a.updateOwner=a.updateOwner.bind(Object(h.a)(Object(h.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(Object(h.a)(a))),a.uploadFile=a.uploadFile.bind(Object(h.a)(Object(h.a)(a))),a.saveFile=a.saveFile.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=w();this.setState({generalPlants:e.responseJSON});var t=g.a.ajax({url:"https://plantgrowthsystembackend.azurewebsites.net/Researcher/",dataType:"json",async:!1});this.setState({owners:t.responseJSON})}},{key:"renderSelectPlantType",value:function(){var e=this.state.generalPlants;if(null!=e)return e.map(function(e,t){return r.a.createElement("option",{key:t},e.Name)})}},{key:"renderSelectOwners",value:function(){var e=this.state.owners;if(null!=e)return e.map(function(e,t){return r.a.createElement("option",{key:t,type:"checkbox"},e.Name)})}},{key:"updateOwner",value:function(e){var t=this;this.state.owners.map(function(a){a.Name==e.target.value&&t.setState({selectedOwner:a.Id})})}},{key:"showPlantImage",value:function(e){var t=this;this.state.generalPlants.map(function(a){a.Name==e.target.value&&(t.setState({image:a.Image}),t.setState({General_plant_id:a.Id}))})}},{key:"saveFile",value:function(e){this.setState({files:e.target.files})}},{key:"uploadFile",value:function(e,t){for(var a=t.length,n=0;n<a;n++)t[n].name.includes(".xlsx")&&Object(N.ExcelRenderer)(t[n],function(t,a){if(!t)return S(e,a.cols,a.rows);console.log(t)})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=[];t=this.state.selectedOwner?[localStorage.getItem("userId"),this.state.selectedOwner]:[localStorage.getItem("userId")];var a,n={Name:this.refs.name.value,Description:this.refs.description.value,Start_date:this.refs.start_date.value,End_date:this.refs.end_date.value,Owners:t,Number_of_plants:this.refs.number_of_plants.value,General_plant_id:this.state.General_plant_id,Status:"Pending",Plants_id:[]};try{var r=function(e){return g.a.ajax({url:"https://plantgrowthsystembackend.azurewebsites.net/Research/Create",dataType:"json",type:"POST",data:e,async:!1,success:function(e){},error:function(e,t,a){console.error(t,a.toString())}.bind(this)})}(n).responseJSON;n.Id=r.Id,this.uploadFile(n.Id,this.state.files);var s=(a=n.Id,g.a.ajax({url:"https://plantgrowthsystembackend.azurewebsites.net/Research/GetResearchById?id="+a,dataType:"json",async:!1})).responseJSON;console.log("final research",s),new j.a({type:"success",layout:"topRight",text:"Research Successfully created",timeout:3e3}).show(),this.setState({research:s})}catch(l){new j.a({type:"error",layout:"topRight",text:"Research was not created!",timeout:3e3}).show()}}},{key:"render",value:function(){var e=this;return this.state.research?r.a.createElement(b.a,{to:{pathname:"/ResearchPage",state:{research:this.state.research}}}):this.state.goBack?r.a.createElement(b.a,{to:{pathname:"/Home",state:{userId:localStorage.getItem("userId")}}}):r.a.createElement("div",{id:"beginResearch"},r.a.createElement("h1",null,"Create New Research"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("input",{type:"text",required:!0,className:"form-control",ref:"name",placeholder:"Research Name"})),r.a.createElement("img",{src:this.state.image}),r.a.createElement("div",{id:"textarea",className:"form-group"},r.a.createElement("textarea",{required:!0,onChange:this.handleChange,className:"form-control",rows:"5",ref:"description",placeholder:"Description"}))),r.a.createElement("div",{className:"secondDiv"},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Plant Type"),r.a.createElement("select",{id:"plantType",required:!0,onChange:this.showPlantImage,className:"form-control"},r.a.createElement("option",null),this.renderSelectPlantType())),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Number of Plants"),r.a.createElement("input",{type:"number",required:!0,className:"form-control",min:"1",ref:"number_of_plants",placeholder:"Number Of Plants"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Start Date"),r.a.createElement("input",{type:"date",required:!0,className:"form-control date",ref:"start_date",placeholder:"Start Date"}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Add Owners"),r.a.createElement("select",{className:"form-control",onChange:this.updateOwner},r.a.createElement("option",null),this.renderSelectOwners())),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"End Date"),r.a.createElement("input",{type:"date",required:!0,className:"form-control date",ref:"end_date",placeholder:"End Date"})))),r.a.createElement("div",{className:"uploadFile"},r.a.createElement("label",null,"Upload Control Plan Files:"),r.a.createElement("input",{className:"fileBox",type:"file",multiple:"multiple",required:!0,onChange:function(t){return e.saveFile(t)},ref:"file"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("button",{id:"goBack",onClick:function(){return e.setState({goBack:!0})},className:"btn"},"Back"),r.a.createElement("button",{type:"submit",className:"btn"},"Create")))))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={renderResearch:null},a.newResearchClick=a.newResearchClick.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"newResearchClick",value:function(){this.setState({goToNewResearch:!0})}},{key:"render",value:function(){return 1==this.state.goToNewResearch?r.a.createElement(b.a,{to:{pathname:"/BeginResearch",state:{userId:this.props.userId}}}):r.a.createElement("div",{id:"researchBox"},r.a.createElement("div",{onClick:this.newResearchClick,className:"plus"},r.a.createElement("h3",null,"+")),r.a.createElement("div",null,r.a.createElement("h5",null,"Create New Research")))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={researches:[],generalPlants:[],currentResearches:[],currentIndex:0},a.nextProperty=a.nextProperty.bind(Object(h.a)(Object(h.a)(a))),a.prevProperty=a.prevProperty.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"nextProperty",value:function(){this.state.currentIndex<this.state.researches.length?this.setState({currentIndex:this.state.currentIndex+1}):this.setState({currentIndex:0}),console.log("newIndex:",this.state.currentIndex)}},{key:"prevProperty",value:function(){this.state.currentIndex>0?this.setState({currentIndex:this.state.currentIndex-1}):this.setState({currentIndex:this.state.researches.length}),console.log("newIndex:",this.state.currentIndex)}},{key:"componentDidMount",value:function(){var e,t=localStorage.getItem("userId"),a={};try{e=t,a=g.a.ajax({url:"https://plantgrowthsystembackend.azurewebsites.net/Research/GetResearchesByOwner?ownerId="+e,dataType:"json",async:!1})}catch(r){}this.setState({researches:a.responseJSON,userId:t});var n=w();this.setState({generalPlants:n.responseJSON})}},{key:"renderResearches",value:function(){var e=this,t="",a=this.state.researches;if(null!=a)return a.map(function(a,n){if(e.state.generalPlants.map(function(e,n){e.Id==a.General_plant_id&&(t=e.Image)}),n>=3*e.state.currentIndex&&n<3*e.state.currentIndex+3)return r.a.createElement(v,{key:n,name:a.Name,description:a.Description,status:a.Status,image:t,date:r.a.createElement(f.a,{date:a.Start_date,durationFromNow:!0}),research:a})})}},{key:"render",value:function(){this.state.renderResearch&&this.props.history.push("/ResearchPage");var e={color:"#f1f1f1"};return r.a.createElement("div",{id:"dashboard"},r.a.createElement("div",{className:"input-group md-form form-sm form-2 pl-0"},r.a.createElement("input",{className:"form-control my-0 py-1 red-border",type:"text",placeholder:"Search","aria-label":"Search"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text red lighten-3",id:"basic-text1"},r.a.createElement(E.j,null)))),r.a.createElement("div",{id:"boxes"},r.a.createElement("a",{onClick:this.prevProperty,className:"previous round"},r.a.createElement(E.b,{style:e,size:"30"})),r.a.createElement(I,{userId:this.state.userId}),this.renderResearches(),r.a.createElement("a",{onClick:this.nextProperty,className:"next round"},r.a.createElement(E.c,{style:e,size:"30"}))))}}]),t}(n.Component),C=a(105),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={logout:!1},a.logout=a.logout.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"logout",value:function(){console.log("logout"),localStorage.clear(),this.setState({logout:!0})}},{key:"render",value:function(){1==this.state.logout&&(window.location.href="/");var e={container:{display:"none"}};localStorage.getItem("userId")&&(e.container.display="block");var t=window.location.pathname;t.substring(t.lastIndexOf("/")+1);return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg"},r.a.createElement("a",{href:"/Home",id:"logo"}),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(C.a,{activeClassName:"active",className:"nav-link",innerRef:this.refCallback,exact:!0,to:"/Home"}," Home "),r.a.createElement("span",{className:"sr-only"})),r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.a,{activeClassName:"active",className:"nav-link",innerRef:this.refCallback,exact:!0,to:"/BeginResearch"},"New Research")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.a,{activeClassName:"active",className:"nav-link",innerRef:this.refCallback,exact:!0,to:"/ResearchHistory"},"Research History")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.a,{activeClassName:"active",className:"nav-link",exact:!0,to:"/About"},"About"))),r.a.createElement("button",{style:e.container,id:"logoutButton",onClick:this.logout},r.a.createElement(E.k,null)),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")))))}}]),t}(n.Component),_={color:"#ffff","margin-left":"15px"},D=function(){return r.a.createElement("footer",{className:"page-footer font-small pt-4"},r.a.createElement("div",{className:"container-fluid text-center text-md-left"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-md-0 mt-3"},r.a.createElement("h5",{className:"text-uppercase"},"Plant Growth System"),r.a.createElement("p",null,"\xa9 Shenkar Software Engineering Department")),r.a.createElement("hr",{className:"clearfix w-100 d-md-none pb-3"}),r.a.createElement("div",{className:"col-md-5 mb-md-0 mb-3"},r.a.createElement("div",{className:"form-row"},r.a.createElement("a",{href:"#"},r.a.createElement(E.e,{size:"23",style:_})),r.a.createElement("a",{href:"#"},r.a.createElement(E.g,{size:"23",style:_})),r.a.createElement("a",{href:"#"},r.a.createElement(E.n,{size:"23",style:_})),r.a.createElement("a",{href:"#"},r.a.createElement(E.f,{size:"23",style:_})))))))},H=a(106),T=(a(214),a(107)),B=a(57),F=(a(121),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={percentage:0,researches:[],researchClick:!1,refresh:!1},a.handleClick=a.handleClick.bind(Object(h.a)(Object(h.a)(a))),a.checkStatus=a.checkStatus.bind(Object(h.a)(Object(h.a)(a))),a.deleteResearch=a.deleteResearch.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("userId");fetch("https://plantgrowthsystembackend.azurewebsites.net/Research/GetResearchesByOwner?ownerId="+t,{method:"GET"}).then(function(e){return e.json()}).then(function(t){e.setState({researches:t})})}},{key:"handleClick",value:function(e){this.setState({researchClick:!0,research:this.state.researches[e]})}},{key:"deleteResearch",value:function(e){var t=this;console.log("delete research",this.state.researches[e].Id),Object(B.confirmAlert)({title:"Delete Research",message:"Are you sure delete this research?",buttons:[{label:"Yes",onClick:function(){var a;a=t.state.researches[e].Id,g.a.ajax({url:"https://plantgrowthsystembackend.azurewebsites.net/Research/Delete?id=".concat(a),dataType:"json",async:!1}),t.setState({refresh:!0})}},{label:"No",onClick:function(){}}]})}},{key:"renderTableBody",value:function(){var e=this,t=this.state.researches,a=[],n={cursor:"pointer",color:"#db1818"};null!=t&&t.map(function(t,s){a.push({"#":s,Name:t.Name,Description:t.Description,Status:e.checkStatus(t),Results:r.a.createElement("div",null,r.a.createElement(T.MDBBtn,{onClick:function(){return e.handleClick(s)},rounded:!0,size:"sm"},"Go To Research"),r.a.createElement(E.m,{style:n,onClick:function(){return e.deleteResearch(s)}}))})});var s={columns:[{label:"#",field:"#",sort:"asc",width:50},{label:"Name",field:"Name",sort:"asc",width:250},{label:"Description",field:"Description",sort:"asc",width:250},{label:"Status",field:"Status",sort:"asc",width:100},{label:"Results",field:"Results",sort:"asc",width:350}],rows:a};return r.a.createElement(T.MDBDataTable,{striped:!0,responsive:!0,small:!0,data:s,searching:!1})}},{key:"checkStatus",value:function(e){switch(e.Status){case"Running":var t=new Date(e.Start_date).toLocaleDateString(),a=new Date(e.End_date).toLocaleDateString();return r.a.createElement(f.a,{duration:t,date:a});case"Pending":return r.a.createElement(H.Progress,{type:"circle",width:60,status:"warning"});case"Complete":return r.a.createElement(H.Progress,{type:"circle",percent:100,width:60,status:"success"});case"Stop":return"Stop"}}},{key:"render",value:function(){this.state.researches;return!0===this.state.researchClick?r.a.createElement(b.a,{to:{pathname:"/ResearchPage",state:{research:this.state.research}}}):r.a.createElement("div",{id:"research_history"},r.a.createElement("h1",null,"Research History"),this.renderTableBody())}}]),t}(n.Component)),z=a(20);var G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={plants:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t={},a=null;try{(a=this.props.plants[this.props.selectedPlant])&&(t=(e=a.Id,g.a.ajax({url:"https://plantgrowthsystembackend.azurewebsites.net/ControlPlan/GetControlPlanByPlantId?plantId="+e,dataType:"json",async:!1})).responseJSON)}catch(o){}var n=[];if(null!=a&&a.Humidity)for(var s=a.Humidity.length,l=0;l<s;++l){var c=new Date(a.Humidity[l].Date).toLocaleDateString();try{c>=this.props.start_date&&c<=this.props.end_date&&n.push({Date:a.Humidity[l].Date,Humidity:a.Humidity[l]._Humidity,Light:a.Light[l]._Light,minHum:t.Intervals[0].min_Humidity,maxHum:t.Intervals[0].max_Humidity,amt:10})}catch(i){}}return r.a.createElement(z.d,{width:1e3,height:550,data:n,margin:{top:10,right:10,left:10,bottom:10}},r.a.createElement(z.a,{strokeDasharray:"3 3"}),r.a.createElement(z.f,{tick:{fill:"#f8f9fa"},dataKey:"Date"}),r.a.createElement(z.g,{tick:{fill:"#f8f9fa"},label:{value:"Index",angle:-90,position:"insideLeft"}}),r.a.createElement(z.e,null),r.a.createElement(z.b,null),r.a.createElement(z.c,{type:"monotone",dataKey:"Light",stroke:"#8884d8",activeDot:{r:8}}),r.a.createElement(z.c,{type:"monotone",dataKey:"Humidity",stroke:"#82ca9d"}),r.a.createElement(z.c,{type:"monotone",dataKey:"minHum",stroke:"#dc3545"}),r.a.createElement(z.c,{type:"monotone",dataKey:"maxHum",stroke:"#dc3545"}))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={plants:[],research:{},start_date:null,end_date:null},a.renderSelectPlant=a.renderSelectPlant.bind(Object(h.a)(Object(h.a)(a))),a.showPlantRecords=a.showPlantRecords.bind(Object(h.a)(Object(h.a)(a))),a.showOption=a.showOption.bind(Object(h.a)(Object(h.a)(a))),a.updateEndDate=a.updateEndDate.bind(Object(h.a)(Object(h.a)(a))),a.updateStartDate=a.updateStartDate.bind(Object(h.a)(Object(h.a)(a))),a.stopResearch=a.stopResearch.bind(Object(h.a)(Object(h.a)(a))),a.saveFile=a.saveFile.bind(Object(h.a)(Object(h.a)(a))),a.uploadFiles=a.uploadFiles.bind(Object(h.a)(Object(h.a)(a))),a.updateResearchControlPlan=a.updateResearchControlPlan.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){if(this.props.location.state.research)try{var e=(t=this.props.location.state.research.Id,g.a.ajax({url:"https://plantgrowthsystembackend.azurewebsites.net/Research/GetResearchPlants?researchId=".concat(t),dataType:"json",async:!1}));this.setState({research:this.props.location.state.research}),this.setState({plants:e.responseJSON}),this.setState({start_date:new Date(this.props.location.state.research.Start_date).toLocaleDateString(),end_date:new Date(this.props.location.state.research.End_date).toLocaleDateString()})}catch(a){}var t}},{key:"showOption",value:function(){g()(".dropdown-content").is(":visible")?g()(".dropdown-content").css({display:"none"}):g()(".dropdown-content").css({display:"block"})}},{key:"updateEndDate",value:function(e){var t=new Date(e.target.value).toLocaleDateString();this.setState({end_date:t})}},{key:"updateStartDate",value:function(e){var t=new Date(e.target.value).toLocaleDateString();this.setState({start_date:t})}},{key:"renderSelectPlant",value:function(){var e=this.state.plants,t=0;if(null!=e)return e.map(function(e){return++t,r.a.createElement("option",{key:t},t)})}},{key:"updateResearchControlPlan",value:function(){var e=this;"Complete"!=this.state.research.Status&&"Stop"!=this.state.research.Status&&(console.log("update"),Object(B.confirmAlert)({title:"please upload xlsx files",buttons:[{label:"Upload",onClick:function(){e.uploadFiles(e.state.research.Id,e.state.files)}},{label:"Cancel",onClick:function(){}}],childrenElement:function(){return r.a.createElement("input",{type:"file",multiple:"multiple",required:!0,onChange:function(t){return e.saveFile(t)}})}}))}},{key:"saveFile",value:function(e){this.setState({files:e.target.files})}},{key:"uploadFiles",value:function(e,t){for(var a=t.length,n=0;n<a;n++)t[n].name.includes(".xlsx")&&Object(N.ExcelRenderer)(t[n],function(e,t){e?console.log(e):console.log("uploading....")})}},{key:"stopResearch",value:function(){var e=this;"Complete"!=this.state.research.Status&&"Stop"!=this.state.research.Status&&Object(B.confirmAlert)({title:"Are you sure to stop this research?",buttons:[{label:"Yes",onClick:function(){var t,a;t=e.state.research.Id,a="Stop",g.a.ajax({url:"https://plantgrowthsystembackend.azurewebsites.net/Research/StopOrContinueResearch?id=".concat(t,"&status=").concat(a),dataType:"json",async:!1})}},{label:"No",onClick:function(){}}]})}},{key:"showPlantRecords",value:function(e){0!=e.target.value&&this.setState({selectedPlant:e.target.value-1})}},{key:"render",value:function(){var e={},t=this.state,a=t.research,n=(t.start_date,t.end_date,{});try{null!=this.state.selectedPlant&&(e=this.state.plants[this.state.selectedPlant]),n="Pending"==e.status?{color:"#ac6236"}:{color:"#36ac4d"}}catch(l){}var s={display:"inline","margin-right":"10px",color:"#ffff"};return r.a.createElement("div",{id:"researchPage"},r.a.createElement("h1",null,"Research Report"),r.a.createElement("div",{className:"firstDiv"},r.a.createElement("article",null,r.a.createElement("h2",null,r.a.createElement(E.l,{size:"20",style:s}),a.Name),r.a.createElement("h3",null,r.a.createElement(E.a,{size:"20",style:s}),a.Description)),r.a.createElement("article",null,r.a.createElement("label",null,"Start Date:")," ",r.a.createElement("label",null,a.Start_date),r.a.createElement("br",null),r.a.createElement("label",null,"End Date:")," ",r.a.createElement("label",null,a.End_date)),r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{onClick:this.showOption,className:"dropbtn"},r.a.createElement(E.d,{size:"lg"})),r.a.createElement("div",{className:"dropdown-content"},r.a.createElement("a",{href:"#",onClick:this.updateResearchControlPlan},"Update Control Plans"),r.a.createElement("a",{href:"#"},"Link 3"),r.a.createElement("a",{href:"#",onClick:this.stopResearch},"Stop Research")))),r.a.createElement("div",{className:"researchContent"},r.a.createElement("article",{id:"plantDetails"},r.a.createElement("label",null,"Plant Status:\xa0"),r.a.createElement("label",{style:n},e.Status),r.a.createElement("label",null,"Measure cycle: ",e.Frequency_of_measurement," Hours"),r.a.createElement("label",null,"Upload cycle: ",e.Frequency_of_upload," Hours"),r.a.createElement("label",null,"Choose Plant:"),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{onChange:this.showPlantRecords,className:"form-control"},r.a.createElement("option",{value:"0"}),this.renderSelectPlant()))),r.a.createElement("button",null,"Graph1"),r.a.createElement("button",null,"Graph2"),r.a.createElement("button",null,"Graph3"),r.a.createElement("p",null,r.a.createElement("label",null,"End Date"),r.a.createElement("input",{type:"date",onChange:this.updateEndDate,name:"end_date"})),r.a.createElement("p",null,r.a.createElement("label",null,"Start Date"),r.a.createElement("input",{type:"date",onChange:this.updateStartDate,name:"start_date"})),r.a.createElement("div",{className:"grpah"},r.a.createElement(G,{plants:this.state.plants,selectedPlant:this.state.selectedPlant,end_date:this.state.end_date,start_date:this.state.start_date}))))}}]),t}(n.Component),q=a(111),A=a.n(q),J=a(175);function U(e){return g.a.ajax({url:"https://plantgrowthsystembackend.azurewebsites.net/User/CheckUserCredentials",dataType:"json",type:"POST",data:e,async:!0,success:function(e){console.log("success")},error:function(e,t,a){console.log("error")}})}var M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={userId:null},a.checkUserAuth=a.checkUserAuth.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return null!=this.state.userId&&"error"!=this.state.userId?r.a.createElement(b.a,{to:{pathname:"/Home",state:{userId:this.state.userId}}}):("error"==this.state.userId&&new j.a({type:"error",layout:"topRight",text:"Wrong User name or Password",timeout:3e3}).show(),r.a.createElement("div",{id:"login"},r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.checkUserAuth},r.a.createElement("article",null,r.a.createElement("label",null,"Email:"),r.a.createElement("div",{className:"form-row"},r.a.createElement(E.o,{className:"icon"}),r.a.createElement("input",{type:"email",require:!0,className:"form-control",ref:"email",name:"email",placeholder:"Email"}))),r.a.createElement("article",null,r.a.createElement("label",null,"Password:"),r.a.createElement("div",{className:"form-row"},r.a.createElement(E.h,{className:"icon"}),r.a.createElement("input",{type:"password",require:!0,className:"form-control",ref:"password",name:"password",placeholder:"Password"}))),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign In"))))}},{key:"checkUserAuth",value:function(){var e=Object(J.a)(A.a.mark(function e(t){var a,n;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={email:this.refs.email.value,password:this.refs.password.value},e.prev=2,e.next=5,U(a);case 5:n=e.sent,localStorage.setItem("userId",n),this.setState({userId:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),this.setState({userId:"error"});case 13:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t){return e.apply(this,arguments)}}()}]),t}(n.Component),K=a(176),W=a(120),Y=function(e){var t=e.component,a=Object(K.a)(e,["component"]);return r.a.createElement(c.a,Object.assign({},a,{render:function(e){return localStorage.getItem("userId")?r.a.createElement(t,e):r.a.createElement(W.a,{to:{pathname:"/Login",state:{from:e.location}}})}}))},$=function(){return r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(c.a,{exact:!0,path:"/Login",component:M}),r.a.createElement(Y,{exact:!0,path:"/",component:x}),r.a.createElement(Y,{path:"/Home",component:x,name:"Home"}),r.a.createElement(Y,{path:"/BeginResearch",component:R,name:"Begin Research"}),r.a.createElement(Y,{path:"/ResearchHistory",component:F,name:"Research History"}),r.a.createElement(Y,{path:"/ResearchPage",component:L,name:"Research Details"}),"                ",r.a.createElement(D,null))},Q=a(119);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(438),a(440);l.a.render(r.a.createElement(Q.a,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[202,2,1]]]);
//# sourceMappingURL=main.6bfa8cfd.chunk.js.map