/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FunnyClub.view.lol.RecordViewController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.record',
    
    onRecordViewBoxready: function(self, width, height, eOpts){
//        this.getView().recordGrid.loadData();
    },
    
//    setEndDateMinValue:function(self,newValue,oldValue){
//    	var view = this.getView();
//    	view.down('datefield[name="endDate"]').setMinValue(newValue);
//    },
//    setStartDateMaxValue:function(self,newValue,oldValue){
//    	var view = this.getView();
//    	view.down('datefield[name="startDate"]').setMaxValue(newValue);
//    },
//    getCriteria:function(){
//    	var view = this.getView().up().searchContainer;
//    	var params = {};
//        var returnGuestParameter = view.down('checkboxgroup[name="returnGuestParameter"]').getValue();
//        var startDate = view.down('datefield[name="startDate"]').getValue();
//        var endDate = view.down('datefield[name="endDate"]').getValue();
//        params.startDate = Ext.Date.format(startDate,'m/d/Y');
//        params.endDate = Ext.Date.format(endDate,'m/d/Y');
//    	params.returnGuestParameter = returnGuestParameter.returnGuestParameter? returnGuestParameter.returnGuestParameter:false;
//        return params;
//    },
    //grid
    onRecordGridBoxready: function(self, width, height, eOpts){
        self.getStore().loadPage(1);
    },
    loadRecordGridData: function(){
        var view = this.getView();
        view.getStore().loadPage(1);
    }
//    onCommentStoreBeforeLoad: function(store){
//        store.proxy.extraParams = this.getCriteria();
//    },
//    onReceiptActioncolumnClick: function(view, rowIndex, colIndex, item, e, record){
//	    var me = this;
//        if(!me.receiptPicWindow){
//            me.receiptPicWindow = Ext.create('rpt.view.component.ReceiptWindow');
//        }
//        me.receiptPicWindow.showWindow(record);
//    },
//    onCustomerClick: function(view, rowIndex, colIndex, item, e, record){
//     	var me = this.getView().up('[name="commentsView"]');
//        me.fireEvent('linkToCustomerProfile', me);
//    },
//    onPushOfferClick: function(view, rowIndex, colIndex, item, e, record){
//        var me = this.getView().up('[name="commentsView"]');;
//        me.fireEvent('linkToPushOffers', me);
//    },
//    onSearchBtnClick: function(){
//        var view = this.getView();
//        var commentsgrid = this.getView().up().commentsGrid;
//        commentsgrid.loadData();
//    },
//    onExportBtnClick: function(){
//    	var params = this.getCriteria();
//    	params.isAll = true;
//    	var queryParams = Ext.Object.toQueryString(params, true);
//        
//        var url = "../report/comments/excel?"+queryParams;
//        window.open(url);
//    }
});
