/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FunnyClub.view.lol.RecordView', {
    extend: 'Ext.container.Container',
    alias: 'widget.record',
    statics: {
        // 每一个 Page 都对应一个 reportId
        // 该 reportId 与 navStore 的 reportId 对应
    	pageId: 'record'
    },
    xtype: 'app-record',
    requires: [
         'FunnyClub.view.lol.RecordGrid',
         'FunnyClub.view.lol.RecordViewController'
    ], 
    name: 'recordView',
    controller: 'record',
    autoScrool: true,
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },
    margin: '5 6 5 6',
    initComponent:function(){
        var me = this;
        
        this.recordGrid = Ext.create('FunnyClub.view.lol.RecordGrid',{
            margin: '5 0 0 0'
        });

//        this.searchContainer = Ext.create('FunnyClub.view.comments.CommentsCriteriaContainer');
        
        this.items = [
//            this.searchContainer,          	
            this.recordGrid
        ];

        this.listeners = {
            boxready: 'onRecordViewBoxready',
            scope: this.controller
        };
        
        this.callParent();
    }
},function(){
    FunnyClub.registerPageCmp(this.pageId, this.$className);
});
