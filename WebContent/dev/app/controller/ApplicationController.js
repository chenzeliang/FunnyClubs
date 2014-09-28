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
    onChangePage: function(navdataview, reportId, reportCmpClassName){
        var mainPanel = this.getMainPanel();
        
        // mainPanel.mask('Loading...');
        // var reportCmpClassName = FunnyClub.Registy.getReportCmp(reportId);
        // if(reportCmpClassName) {
            // if(mainPanel.aliveItems)
        var reportCmp = mainPanel.aliveItems[reportId];

        if(reportCmp) {
            mainPanel.setActiveItem(reportCmp);
        } else {
            reportCmp = Ext.create(reportCmpClassName);
            reportCmp.loadData();
            mainPanel.add(reportCmp);
            mainPanel.setActiveItem(reportCmp);
        }
        // }
        // mainPanel.unmask();
    }
});