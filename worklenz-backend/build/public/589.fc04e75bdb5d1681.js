"use strict";(self.webpackChunkworklenz=self.webpackChunkworklenz||[]).push([[589],{63106:(G,R,a)=>{a.d(R,{I:()=>B});var t=a(65879),b=a(26254),C=a(62595),D=a(92574),P=a(42840),x=a(96814),M=a(60095),E=a(62612),k=a(62787),m=a(21406),f=a(52682),e=a(3599),Q=a(16676),_=a.n(Q),O=a(42012),Y=a(70855),J=a(41958),v=a(73460);function I(c,u){if(1&c){const d=t.EpF();t.TgZ(0,"button",13)(1,"label",14),t.NdJ("ngModelChange",function(p){t.CHM(d);const z=t.oxw(2);return t.KtG(z.includeArchived=p)})("ngModelChange",function(p){t.CHM(d);const z=t.oxw(2);return t.KtG(z.onArchiveChange(p))}),t._uU(2," Include Archived Projects "),t.qZA()()}if(2&c){const d=t.oxw(2);t.Q6J("ngClass",d.includeArchived?"archived":""),t.xp6(1),t.Q6J("ngModel",d.includeArchived)}}function y(c,u){if(1&c&&(t.ynx(0),t.YNc(1,I,3,2,"button",12),t.BQk()),2&c){const d=t.oxw();t.xp6(1),t.Q6J("ngIf",d.showArchivedToggle)}}function w(c,u){if(1&c&&(t.TgZ(0,"button",17),t._uU(1),t._UZ(2,"span",18),t.qZA()),2&c){const d=t.oxw(3),g=t.MAs(9);t.Q6J("nzDropdownMenu",g)("nzTrigger","click")("nzPlacement","bottomRight"),t.xp6(1),t.hij(" ",d.durationLabel," "),t.xp6(1),t.Q6J("nzType","down")}}function A(c,u){1&c&&(t.ynx(0),t.TgZ(1,"nz-space"),t.YNc(2,w,3,5,"button",16),t.qZA(),t.BQk())}function L(c,u){if(1&c&&(t.TgZ(0,"button",23),t._uU(1," Export "),t._UZ(2,"span",18),t.qZA()),2&c){t.oxw();const d=t.MAs(3),g=t.oxw(2);t.Q6J("nzType","primary")("nzLoading",g.exporting)("nzTrigger","click")("nzDropdownMenu",d)("nzPlacement","bottomRight"),t.xp6(2),t.Q6J("nzType","down")}}function W(c,u){if(1&c){const d=t.EpF();t.TgZ(0,"li",24),t.NdJ("click",function(){t.CHM(d);const p=t.oxw(3);return t.KtG(p.export())}),t._uU(1,"Excel"),t.qZA()}}function K(c,u){if(1&c){const d=t.EpF();t.TgZ(0,"li",24),t.NdJ("click",function(){t.CHM(d);const p=t.oxw(3);return t.KtG(p.export())}),t._uU(1,"PNG"),t.qZA()}}function F(c,u){if(1&c&&(t.ynx(0),t.YNc(1,L,3,6,"button",19),t.TgZ(2,"nz-dropdown-menu",null,20)(4,"ul",21),t.YNc(5,W,2,0,"li",22),t.YNc(6,K,2,0,"li",22),t.qZA()(),t.BQk()),2&c){const d=t.oxw(2);t.xp6(1),t.Q6J("ngIf",d.showExport),t.xp6(4),t.Q6J("ngIf",!d.isPngOnly),t.xp6(1),t.Q6J("ngIf",d.isPngOnly)}}function U(c,u){if(1&c&&(t.ynx(0),t.YNc(1,A,3,0,"ng-container",15),t.YNc(2,F,7,3,"ng-container",2),t.BQk()),2&c){const d=t.oxw();t.xp6(1),t.Q6J("ngIf",d.showDuration)}}function j(c,u){if(1&c){const d=t.EpF();t.TgZ(0,"li",25),t.NdJ("click",function(){const z=t.CHM(d).$implicit,Z=t.oxw();return t.KtG(Z.onDurationChange(z))}),t._uU(1),t.TgZ(2,"small",26),t._uU(3),t.qZA()()}if(2&c){const d=u.$implicit,g=t.oxw();t.Q6J("nzSelected",d.key===(null==g.selectedDuration?null:g.selectedDuration.key)&&!g.dateRange.length),t.xp6(1),t.hij(" ",d.label," "),t.xp6(2),t.hij(" ",d.dates,"")}}const H=function(){return{standalone:!0}};let B=(()=>{var c;class u{get durationLabel(){const g="yy-MM-DD";return 2==this.dateRange.length?`${_()(this.dateRange[0]).format(g)} - ${_()(this.dateRange[1]).format(g)}`:this.selectedDuration?this.selectedDuration.label:"Duration"}get selectedDuration(){return this.api.getDuration()}constructor(g){this.api=g,this.showExport=!0,this.showDuration=!0,this.showArchivedToggle=!0,this.isPngOnly=!1,this.durationChanged=new t.vpe,this.exportFile=new t.vpe,this.isDurationLabelSelected=new t.vpe,this.includeArchived=!1,this.exporting=!1,this.dateRange=[],this.durations=[{label:"Yesterday",key:m.WD,dates:_()().subtract(1,"days").format("MMM,DD YYYY").toString()},{label:"Last 7 days",key:m.ao,dates:_()().subtract(1,"weeks").format("MMM,DD YYYY").toString()+" - "+_()().format("MMM,DD YYYY").toString()},{label:"Last week",key:m.$U,dates:_()().subtract(1,"weeks").startOf("week").format("MMM,DD YYYY").toString()+" - "+_()().subtract(1,"weeks").endOf("week").format("MMM,DD YYYY").toString()},{label:"Last 30 days",key:m.ly,dates:_()().subtract(1,"month").format("MMM,DD YYYY").toString()+" - "+_()().format("MMM,DD YYYY").toString()},{label:"Last month",key:m.lI,dates:_()().subtract(1,"month").startOf("month").format("MMM,DD YYYY").toString()+" - "+_()().subtract(1,"month").endOf("month").format("MMM,DD YYYY").toString()},{label:"Last 3 months",key:m.o9,dates:_()().subtract(3,"months").format("MMM,DD YYYY").toString()+" - "+_()().format("MMM,DD YYYY").toString()},{label:"All time",key:m.Si,dates:""}]}ngOnInit(){this.setInitialValues()}setInitialValues(){this.api.getDuration()||this.api.setDuration(this.durations.find(g=>g.key===m.ao)||null),this.api.getIncludeToggle()&&(this.includeArchived=this.api.getIncludeToggle())}onArchiveChange(g){this.api.setIncludeToggle(g),this.api.emitIncludeToggleChanged()}onDurationChange(g){this.isDurationLabelSelected.emit(!0),setTimeout(()=>{this.api.setDuration(g),this.api.setDrawerDuration(g),this.dateRange=[],this.api.setDateRange(this.dateRange),this.api.setDrawerDateRange(this.dateRange),this.api.emitDurationChanged()},500)}customDateChange(){this.isDurationLabelSelected.emit(!1),setTimeout(()=>{this.api.setDateRange(this.dateRange),this.api.setDrawerDateRange(this.dateRange),this.api.emitDateRangeChanged()})}export(){this.exportFile.emit()}}return(c=u).\u0275fac=function(g){return new(g||c)(t.Y36(O.m))},c.\u0275cmp=t.Xpm({type:c,selectors:[["worklenz-rpt-header"]],inputs:{title:"title",showExport:"showExport",showDuration:"showDuration",showArchivedToggle:"showArchivedToggle",isPngOnly:"isPngOnly"},outputs:{durationChanged:"durationChanged",exportFile:"exportFile",isDurationLabelSelected:"isDurationLabelSelected"},standalone:!0,features:[t.jDz],decls:21,vars:8,consts:[[1,"site-page-header-ghost-wrapper"],[1,"px-0",3,"nzGhost"],[4,"nzSpaceItem"],["timeSelector","nzDropdownMenu"],["nz-menu","","nzSelectable","",2,"max-height","330px","overflow-y","auto"],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],["nz-menu-divider",""],[1,"px-2","pb-2","pt-2","mt-1","custom-dropdown-range-li"],["nz-form",""],[1,"d-block","mt-1"],[1,"w-100",3,"ngModel","ngModelOptions","ngModelChange"],["nz-button","",1,"mt-2","ms-auto","d-block",3,"nzType","nzSize","click"],["nz-button","",3,"ngClass",4,"ngIf"],["nz-button","",3,"ngClass"],["nz-checkbox","",3,"ngModel","ngModelChange"],[4,"ngIf"],["nz-button","","nz-dropdown","",3,"nzDropdownMenu","nzTrigger","nzPlacement",4,"nzSpaceItem"],["nz-button","","nz-dropdown","",3,"nzDropdownMenu","nzTrigger","nzPlacement"],["nz-icon","",3,"nzType"],["nz-button","","nz-dropdown","",3,"nzType","nzLoading","nzTrigger","nzDropdownMenu","nzPlacement",4,"ngIf"],["exportMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"click",4,"ngIf"],["nz-button","","nz-dropdown","",3,"nzType","nzLoading","nzTrigger","nzDropdownMenu","nzPlacement"],["nz-menu-item","",3,"click"],["nz-menu-item","",3,"nzSelected","click"],[1,"ms-auto","text-secondary"]],template:function(g,p){1&g&&(t.TgZ(0,"div",0)(1,"nz-page-header",1)(2,"nz-page-header-title"),t._uU(3),t.qZA(),t.TgZ(4,"nz-page-header-extra")(5,"nz-space"),t.YNc(6,y,2,1,"ng-container",2),t.YNc(7,U,3,1,"ng-container",2),t.qZA()()()(),t.TgZ(8,"nz-dropdown-menu",null,3)(10,"ul",4),t.YNc(11,j,4,3,"li",5),t._UZ(12,"li",6),t.TgZ(13,"li",7)(14,"form",8)(15,"label"),t._uU(16,"Custom range"),t.qZA(),t.TgZ(17,"div",9)(18,"nz-range-picker",10),t.NdJ("ngModelChange",function(Z){return p.dateRange=Z}),t.qZA()(),t.TgZ(19,"button",11),t.NdJ("click",function(){return p.customDateChange()}),t._uU(20," Filter "),t.qZA()()()()()),2&g&&(t.xp6(1),t.Q6J("nzGhost",!1),t.xp6(2),t.Oqu(p.title),t.xp6(8),t.Q6J("ngForOf",p.durations),t.xp6(7),t.Q6J("ngModel",p.dateRange)("ngModelOptions",t.DdM(7,H)),t.xp6(1),t.Q6J("nzType","primary")("nzSize","small"))},dependencies:[b.KJ,b.$O,b.u9,b.Jp,C.PV,C.Ls,D.zf,D.NU,D.$1,P.sL,P.ix,Y.w,J.dQ,x.mk,M.u5,M._Y,M.JJ,M.JL,M.On,M.F,E.Wr,E.Ie,k.b1,v.wO,v.r9,v.YV,k.cm,k.RR,k.wA,x.sg,f.Hb,f.uw,f.wS,e.U5,e.Lr,x.O5],changeDetection:0}),u})()},42589:(G,R,a)=>{a.r(R),a.d(R,{RptTimeMembersModule:()=>te});var t=a(96814),b=a(35420),C=a(15861),D=a(47246),P=a(17816),x=a(69649),M=a(63019),E=a(71993),k=a(16676),m=a.n(k),f=a(21406),e=a(65879),Q=a(42012),_=a(16196),O=a(63106),Y=a(33410),J=a(82962),v=a(92574),I=a(20824),y=a(60095),w=a(73460),A=a(62787),L=a(42840),W=a(70855),K=a(41958),F=a(62612),U=a(62595),j=a(60804),H=a(33640),B=a(9172);const c=["exportChartCanvas"];function u(s,h){if(1&s&&(e.TgZ(0,"button",20),e._uU(1," Teams "),e._UZ(2,"span",21),e.qZA()),2&s){const l=e.oxw(2),n=e.MAs(8);e.Q6J("nzDropdownMenu",n)("nzClickHide",!1)("nzLoading",l.loadingTeams)("nzTrigger","click")}}function d(s,h){if(1&s&&(e.TgZ(0,"button",20),e._uU(1," Categories "),e._UZ(2,"span",21),e.qZA()),2&s){const l=e.oxw(2),n=e.MAs(30);e.Q6J("nzDropdownMenu",n)("nzClickHide",!1)("nzLoading",l.loadingCategories)("nzTrigger","click")}}function g(s,h){if(1&s&&(e.TgZ(0,"button",20),e._uU(1," Projects "),e._UZ(2,"span",21),e.qZA()),2&s){const l=e.oxw(2),n=e.MAs(19);e.Q6J("nzDropdownMenu",n)("nzClickHide",!1)("nzLoading",l.loadingProjects)("nzTrigger","click")}}function p(s,h){1&s&&(e.TgZ(0,"nz-space"),e.YNc(1,u,3,4,"button",19),e.YNc(2,d,3,4,"button",19),e.YNc(3,g,3,4,"button",19),e.qZA())}function z(s,h){if(1&s&&(e.TgZ(0,"div",22)(1,"div",23)(2,"div",24),e._UZ(3,"canvas",25,26),e.qZA()()()),2&s){const l=e.oxw();e.xp6(2),e.Udp("height",l.chartHeight+"px")("width",l.chartWidth+"px"),e.xp6(1),e.Q6J("data",l.barChartData)("options",l.barChartOptions)("plugins",l.barChartPlugins)("legend",!1)("type","bar")}}function Z(s,h){1&s&&e._UZ(0,"nz-empty")}function $(s,h){if(1&s){const l=e.EpF();e.TgZ(0,"li",10),e.NdJ("nzCheckedChange",function(o){const i=e.CHM(l).$implicit;return e.KtG(i.selected=o)})("nzCheckedChange",function(){e.CHM(l);const o=e.oxw();return e.KtG(o.checkTeam())}),e._uU(1),e.qZA()}if(2&s){const l=h.$implicit;e.Q6J("nzChecked",l.selected),e.xp6(1),e.hij(" ",l.name," ")}}function V(s,h){if(1&s){const l=e.EpF();e.TgZ(0,"li",10),e.NdJ("nzCheckedChange",function(o){const i=e.CHM(l).$implicit;return e.KtG(i.selected=o)})("nzCheckedChange",function(){e.CHM(l);const o=e.oxw();return e.KtG(o.checkProject())}),e.TgZ(1,"div",27)(2,"div")(3,"span",28),e._uU(4),e.qZA()()()()}if(2&s){const l=h.$implicit;e.Q6J("nzChecked",l.selected),e.xp6(4),e.Oqu(l.name)}}function X(s,h){if(1&s){const l=e.EpF();e.TgZ(0,"li",10),e.NdJ("nzCheckedChange",function(o){const i=e.CHM(l).$implicit;return e.KtG(i.selected=o)})("nzCheckedChange",function(){e.CHM(l);const o=e.oxw();return e.KtG(o.checkCategory())}),e.TgZ(1,"div",27)(2,"div")(3,"span",29),e._UZ(4,"nz-badge",30),e.qZA()()()()}if(2&s){const l=h.$implicit;e.Q6J("nzChecked",l.selected),e.xp6(4),e.Q6J("nzColor",l.color_code)("nzText",l.name)}}const q=[{path:"",component:(()=>{var s;class h{constructor(n,o,r){this.cdr=n,this.service=o,this.api=r,this.visible=!1,this.loading=!1,this.loadingTeams=!1,this.loadingCategories=!1,this.loadingProjects=!1,this.selectAllTeams=!0,this.selectAllProjects=!0,this.selectAllCategories=!0,this.selectNoCategory=!0,this.isDurationLabelSelected=!0,this.chartHeight=600,this.chartWidth=1080,this.teamSearchText=null,this.categorySearchText=null,this.projectSearchText=null,this.teams=[],this.projects=[],this.categoriesDropdown=[],this.barChartPlugins=[],this.memberColors=[],this.members=[],this.exportChart=null,this.barChartData={labels:[],datasets:[{data:[],label:"Logged Time (hours) ",backgroundColor:this.memberColors,barThickness:40}]},this.barChartOptions={maintainAspectRatio:!1,plugins:{datalabels:{color:"white",font:{weight:"bold"},anchor:"start",align:"right",offset:20,borderColor:"#000",textStrokeColor:"black",textStrokeWidth:4}},indexAxis:"y",scales:{y:{title:{display:!0,text:"Member",align:"end",font:{family:"Helvetica"}},ticks:{callback:function(i){return this.getLabelForValue(parseFloat(i)).substr(0,30)}}},x:{title:{display:!0,text:"Logged Time(hours)",align:"end",font:{family:"Helvetica"}}}}},(0,M.T)(this.service.onDurationChange,this.service.onDateRangeChange,this.service.onIncludeToggleChange).pipe((0,E.sL)()).subscribe(()=>{this.barChartData&&(this.barChartData.datasets[0].data=[]),this.barChartData.labels=[],this.get()})}ngOnInit(){this.chartWidth=window.innerWidth-250,this.getTeams(),this.cdr.markForCheck()}getSelectedTeamIds(){return this.teams.filter(r=>r.selected).map(r=>r.id)||[]}getSelectedCategories(){return this.categoriesDropdown.filter(r=>r.selected).map(r=>r.id)||[]}getSelectedProjectIds(){return this.projects.filter(r=>r.selected).map(r=>r.id)||[]}setDatesForKeys(){var n=this;return(0,C.Z)(function*(){if(n.service.getDuration()?.key){const o=n.service.getDuration()?.key,r=m()();switch(o){case f.WD:const i=m()().subtract(1,"days");n.service.setDateRange([i.toString(),i.toString()]);break;case f.ao:const T=m()().subtract(1,"weeks");n.service.setDateRange([T.toString(),r.toString()]);break;case f.ly:const S=m()().subtract(1,"months");n.service.setDateRange([S.toString(),r.toString()]);break;case f.o9:const N=m()().subtract(3,"months");n.service.setDateRange([N.toString(),r.toString()]);break;case f.$U:const ne=m()().subtract(1,"weeks").startOf("week"),oe=m()().subtract(1,"weeks").endOf("week");n.service.setDateRange([ne.toString(),oe.toString()]);break;case f.lI:const re=m()().subtract(1,"month").startOf("month"),ae=m()().subtract(1,"month").endOf("month");n.service.setDateRange([re.toString(),ae.toString()])}}})()}get(){var n=this;return(0,C.Z)(function*(){try{n.loading=!0;const o=n.getSelectedTeamIds(),r=n.getSelectedProjectIds();n.isDurationLabelSelected&&(yield n.setDatesForKeys());const i={teams:o,projects:r,duration:n.service.getDuration()?.key,date_range:n.service.getDateRange()},T=yield n.api.getMemberTimeSheets(i,n.service.getIncludeToggle());if(T.done){if(n.barChartData&&(n.barChartData.datasets[0].data=[]),n.barChartData.labels=[],n.members=T.body,T.body.length){const S=window.innerHeight-300,N=60*T.body.length;n.chartHeight=N>S?N:window.innerHeight-300}n.createChart(),n.loading=!1,n.cdr.markForCheck()}n.loading=!1,n.cdr.markForCheck()}catch(o){n.loading=!1,(0,x.tu)(o),n.cdr.markForCheck()}})()}getTeams(){var n=this;return(0,C.Z)(function*(){try{n.loadingTeams=!0;const o=yield n.api.getOverviewTeams();if(o.done){n.loadingTeams=!1;const r=[];for(const i of o.body)r.push({selected:!0,name:i.name,id:i.id});n.teams=r,yield n.refreshCategories(),n.cdr.markForCheck()}}catch(o){(0,x.tu)(o),n.loadingTeams=!1,n.cdr.markForCheck()}})()}refreshCategories(){var n=this;return(0,C.Z)(function*(){yield n.getCategories(n.getSelectedTeamIds()),n.refreshProjects()})()}refreshProjects(){var n=this;return(0,C.Z)(function*(){yield n.getProjects(n.getSelectedTeamIds(),n.getSelectedCategories()),n.get()})()}getCategories(n){var o=this;return(0,C.Z)(function*(){try{o.loadingCategories=!0;const r=yield o.api.getCategories(n);r.done&&(o.categoriesDropdown=r.body),o.loadingCategories=!1,o.cdr.markForCheck()}catch{o.loadingCategories=!1,o.cdr.markForCheck()}})()}getProjects(n,o){var r=this;return(0,C.Z)(function*(){try{r.loadingProjects=!0;const i=yield r.api.getAllocationProjects(n,o,r.selectNoCategory);i.done&&(r.projects=i.body),r.loadingProjects=!1,r.cdr.markForCheck()}catch{r.loadingProjects=!1,r.cdr.markForCheck()}r.cdr.markForCheck()})()}ngOnChanges(n){setTimeout(()=>{this.barChart?.update(),this.cdr.markForCheck()},1e3)}createChart(){this.visible=!0;for(const n of this.members)this.barChartData.labels?.push(n.name),this.barChartData.datasets[0].data.push(n.value||0),this.memberColors.push(n.color_code);this.barChart?.update(),this.createExportChart(),this.cdr.markForCheck()}onTeamsFilterChange(){this.get()}detectChanges(){this.cdr.markForCheck()}createExportChart(){this.exportChart?.destroy(),this.exportChart=new P.kL(this.exportChartCanvas.nativeElement,{type:"bar",data:this.barChartData,options:this.barChartOptions}),this.exportChart?.update(),this.cdr.markForCheck()}export(){var n=this;return(0,C.Z)(function*(){const r=n.exportChartCanvas.nativeElement.toDataURL("image/png").replace("image/png","image/octet-stream"),i=document.createElement("a");i.setAttribute("href",r),i.setAttribute("download","Members time sheet.png"),i.click()})()}checkTeam(){this.selectAllTeams=!1,this.refreshCategories()}checkCategory(){this.selectAllCategories=!1,this.refreshProjects()}checkProject(){this.selectAllProjects=!1,this.onTeamsFilterChange()}selectAllTeamsChecked(n){if(n){for(const o of this.teams)o.selected=!0;this.refreshProjects(),this.cdr.markForCheck()}else{for(const o of this.teams)o.selected=!1;this.refreshProjects(),this.cdr.markForCheck()}}selectAllCategoriesChecked(n){if(n){this.selectNoCategory=!0;for(const o of this.categoriesDropdown)o.selected=!0;this.refreshProjects(),this.cdr.markForCheck()}else{this.selectNoCategory=!1;for(const o of this.categoriesDropdown)o.selected=!1;this.refreshProjects(),this.cdr.markForCheck()}}selectAllProjectsChecked(n){if(n){for(const o of this.projects)o.selected=!0;this.onTeamsFilterChange(),this.cdr.markForCheck()}else{for(const o of this.projects)o.selected=!1;this.onTeamsFilterChange(),this.cdr.markForCheck()}}}return(s=h).\u0275fac=function(n){return new(n||s)(e.Y36(e.sBO),e.Y36(Q.m),e.Y36(_.U))},s.\u0275cmp=e.Xpm({type:s,selectors:[["worklenz-time-members"]],viewQuery:function(n,o){if(1&n&&(e.Gf(D.jh,5),e.Gf(c,5)),2&n){let r;e.iGM(r=e.CRH())&&(o.barChart=r.first),e.iGM(r=e.CRH())&&(o.exportChartCanvas=r.first)}},features:[e.TTD],decls:42,vars:26,consts:[[3,"title","showExport","isPngOnly","isDurationLabelSelected","exportFile"],[3,"nzLoading","nzTitle"],["projectsTitle",""],["class","position-relative",4,"ngIf"],[4,"ngIf"],["teamsDropdown","nzDropdownMenu"],["nz-menu","",1,"pt-0",2,"max-height","330px","overflow-y","auto"],[1,"px-3","py-2","sticky-top","bg-white"],["type","text","placeholder","Search by team name","nz-input","",3,"ngModel","ngModelChange"],["teamSearchInput",""],["nz-checkbox","","nz-menu-item","",1,"m-0","align-items-baseline",3,"nzChecked","nzCheckedChange"],["nz-menu-divider",""],["class","m-0 align-items-baseline","nz-checkbox","","nz-menu-item","",3,"nzChecked","nzCheckedChange",4,"ngFor","ngForOf"],["projectsSelector","nzDropdownMenu"],["type","text","placeholder","Search by project name","nz-input","",3,"ngModel","ngModelChange"],["projectSearchInput",""],["categorySelector","nzDropdownMenu"],["type","text","placeholder","Search by category name","nz-input","",3,"ngModel","ngModelChange"],["categorySearchInput",""],["nz-button","","nz-dropdown","",3,"nzDropdownMenu","nzClickHide","nzLoading","nzTrigger",4,"nzSpaceItem"],["nz-button","","nz-dropdown","",3,"nzDropdownMenu","nzClickHide","nzLoading","nzTrigger"],["nz-icon","","nzType","caret-down"],[1,"position-relative"],[1,"chartWrapper"],[1,"chartAreaWrapper"],["baseChart","",3,"data","options","plugins","legend","type"],["exportChartCanvas",""],[1,"d-flex","align-items-center","justify-content-center","user-select-none"],["nz-typography","",1,"d-block"],[1,"d-block"],[3,"nzColor","nzText"]],template:function(n,o){if(1&n&&(e.TgZ(0,"worklenz-rpt-header",0),e.NdJ("isDurationLabelSelected",function(i){return o.isDurationLabelSelected=i})("exportFile",function(){return o.export()}),e.qZA(),e.TgZ(1,"nz-content")(2,"nz-card",1),e.YNc(3,p,4,0,"ng-template",null,2,e.W1O),e.YNc(5,z,5,9,"div",3),e.YNc(6,Z,1,0,"nz-empty",4),e.qZA()(),e.TgZ(7,"nz-dropdown-menu",null,5)(9,"ul",6)(10,"li",7)(11,"input",8,9),e.NdJ("ngModelChange",function(i){return o.teamSearchText=i})("ngModelChange",function(){return o.detectChanges()}),e.qZA()(),e.TgZ(13,"li",10),e.NdJ("nzCheckedChange",function(i){return o.selectAllTeams=i})("nzCheckedChange",function(i){return o.selectAllTeamsChecked(i)}),e._uU(14,"Select all "),e.qZA(),e._UZ(15,"li",11),e.YNc(16,$,2,2,"li",12),e.ALo(17,"searchByName"),e.qZA()(),e.TgZ(18,"nz-dropdown-menu",null,13)(20,"ul",6)(21,"li",7)(22,"input",14,15),e.NdJ("ngModelChange",function(i){return o.projectSearchText=i})("ngModelChange",function(){return o.detectChanges()}),e.qZA()(),e.TgZ(24,"li",10),e.NdJ("nzCheckedChange",function(i){return o.selectAllProjects=i})("nzCheckedChange",function(i){return o.selectAllProjectsChecked(i)}),e._uU(25,"Select all "),e.qZA(),e._UZ(26,"li",11),e.YNc(27,V,5,2,"li",12),e.ALo(28,"searchByName"),e.qZA()(),e.TgZ(29,"nz-dropdown-menu",null,16)(31,"ul",6)(32,"li",7)(33,"input",17,18),e.NdJ("ngModelChange",function(i){return o.categorySearchText=i})("ngModelChange",function(){return o.detectChanges()}),e.qZA()(),e.TgZ(35,"li",10),e.NdJ("nzCheckedChange",function(i){return o.selectAllCategories=i})("nzCheckedChange",function(i){return o.selectAllCategoriesChecked(i)}),e._uU(36,"Select all "),e.qZA(),e._UZ(37,"li",11),e.TgZ(38,"li",10),e.NdJ("nzCheckedChange",function(i){return o.selectNoCategory=i})("nzCheckedChange",function(){return o.checkCategory()}),e._uU(39," No Category "),e.qZA(),e.YNc(40,X,5,3,"li",12),e.ALo(41,"searchByName"),e.qZA()()),2&n){const r=e.MAs(4),i=e.MAs(12),T=e.MAs(23),S=e.MAs(34);e.Q6J("title","Members Time Sheet")("showExport",!0)("isPngOnly",!0),e.xp6(2),e.Q6J("nzLoading",o.loading)("nzTitle",r),e.xp6(3),e.Q6J("ngIf",o.members.length),e.xp6(1),e.Q6J("ngIf",!o.members.length),e.xp6(5),e.Q6J("ngModel",o.teamSearchText),e.xp6(2),e.Q6J("nzChecked",o.selectAllTeams),e.xp6(3),e.Q6J("ngForOf",e.xi3(17,17,o.teams,i.value)),e.xp6(6),e.Q6J("ngModel",o.projectSearchText),e.xp6(2),e.Q6J("nzChecked",o.selectAllProjects),e.xp6(3),e.Q6J("ngForOf",e.xi3(28,20,o.projects,T.value)),e.xp6(6),e.Q6J("ngModel",o.categorySearchText),e.xp6(2),e.Q6J("nzChecked",o.selectAllCategories),e.xp6(3),e.Q6J("nzChecked",o.selectNoCategory),e.xp6(2),e.Q6J("ngForOf",e.xi3(41,23,o.categoriesDropdown,S.value))}},dependencies:[t.sg,t.O5,D.jh,O.I,Y.OK,J.bd,v.NU,v.$1,I.Zp,y.Fj,y.JJ,y.On,w.wO,w.r9,w.YV,A.cm,A.RR,A.wA,L.ix,W.w,K.dQ,F.Ie,U.Ls,j.p9,H.x7,B.g],styles:[".chartWrapper[_ngcontent-%COMP%]{max-width:calc(100vw - 220px);min-width:calc(100vw - 220px);height:calc(100vh - 300px);overflow:auto}"],changeDetection:0}),h})()}];let ee=(()=>{var s;class h{}return(s=h).\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[b.Bz.forChild(q),b.Bz]}),h})(),te=(()=>{var s;class h{}return(s=h).\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[t.ez,ee,D.vQ,O.I,Y.wm,J.vh,v.zf,I.o7,y.u5,A.b1,L.sL,F.Wr,U.PV,j.Xo,H.mS]}),h})()}}]);