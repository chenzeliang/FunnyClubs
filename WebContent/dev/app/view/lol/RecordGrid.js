Ext.define('FunnyClub.view.lol.RecordGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'lol-grid',
	alias : 'widget.recordgrid',
    requires: [
        'FunnyClub.store.lol.RecordGridStore'
    ],    
    flex: 1,
    // margin: '0 0 0 5',
    controller: 'record',
    title:'Find Offer',
    name: 'recordGrid',
    initComponent: function(){
        var me = this;
//        this.store = Ext.create('FunnyClub.store.lol.RecordGridStore', {
//            listeners: {
//                beforeload: 'onCommentStoreBeforeLoad',
//                load: 'onCommentStoreLoad',
//                scope: this.controller
//            }
//        });
        this.store = Ext.create('FunnyClub.store.lol.RecordGridStore');
    	this.columns =  {
			defaults: {
		        menuDisabled: true, sortable: false
	    	},	
			items:[
			{ 
			    text: 'imgSrc', 
			    dataIndex: 'imgSrc', 
			    width: 130
			},
			{ 
			    text: 'userId',
			    dataIndex: 'userId',
			    width: 100
			},
			{ 
			  text: 'name',  
			  align:'center',
			  width: 110,
			  dataIndex: 'name' 
			},
			{ 
			  text: 'model',
			  width:200,
			  flex: 1,
			  dataIndex: 'model'
//              renderer: app.ext.columnsRenderer.addtooltip
			},
			{ 
				align:'center',   
				text: 'success',
				width: 80,
				dataIndex: 'success'
			},
			{ 
			  text: 'gameDate', 
			  width: 100,
			  dataIndex: 'gameDate'
			}]
	    };
        this.dockedItems = [
            {
                xtype: 'pagingtoolbar',
                store: this.store,  
                dock: 'bottom',
                displayInfo: true,
                emptyMsg: "No topics to display"
            }
        ];
        
        this.listeners = {
            boxready: 'onRecordGridBoxready',
            scope: this.controller
        };
        
    	this.callParent();
    },
    loadData: function(){
        this.controller.loadRecordGridData();
    }
});