Ext.define('FunnyClub.controller.ApplicationController', {
    extend: 'Ext.app.Controller',
    refs: [
        {ref: 'navDataView', selector: 'navdataview'},
        {ref: 'mainPanel', selector: 'mainpanel'}
    ],
    init: function(){
    	 this.control({
            'navdataview': { 
                changepage: this.onChangePage
            }
    	 });   
    },
    onChangePage: function(navdataview, pageId){
        var me = this,
            mainPanel = this.getMainPanel();

        var pageCmpClassName = FunnyClub.Registy.getPageCmp(pageId),
            pageCmp = mainPanel.aliveItems[pageId];
        // var pageCmp = mainPanel.aliveItems[pageId];

        if(pageCmp) {
            mainPanel.setActiveItem(pageCmp);
        } else {
            if(pageCmpClassName){
                pageCmp = Ext.create(pageCmpClassName);
                // 如果有 loadData 方法
                if(Ext.isFunction(pageCmp.loadData)){
                    pageCmp.loadData();
                }
            }else {
                pageCmp = Ext.create('Ext.container.Container', {
                    html: '<h2>This report is not yet complete</h2>'
                })
            }
            mainPanel.add(pageCmp);
            mainPanel.setActiveItem(pageCmp);
            mainPanel.aliveItems[pageId] = pageCmp;
        }
    }
});