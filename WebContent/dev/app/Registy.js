Ext.define('FunnyClub.Registy', {
	singleton: true,
	pageCmpMapping: {},
	registerPageCmp: function(pageId, clazz){
		this.pageCmpMapping[pageId] = clazz;
	},
	getPageCmp: function(pageId){
		var pageCmp = this.pageCmpMapping[pageId];

		if (!pageCmp) {
			Ext.Msg.show({
	             title:'This Page is not yet complete.',
	             msg: 'Please contact your network administrator!' + '<br> The Page ID is \'' + PageId + '\'.',
	             buttons: Ext.Msg.OK,
	             icon: Ext.Msg.ERROR
	        });
		};	
		return pageCmp;
	},
	getPageCmpMapping: function(){
		return this.pageCmpMapping;
	}
}, function(){
	//此方法为 rptCmp define 时候的 callback
	FunnyClub.registerPageCmp = function(pageId, className){
		FunnyClub.Registy.registerPageCmp(pageId, className);
	};
});