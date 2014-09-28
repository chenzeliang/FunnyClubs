Ext.define('FunnyClub.view.common.FuncDataView', {
	extend: 'Ext.view.View',
    cls: 'nav-dataview',
    alias: 'widget.funcDataView',
    requires: [
        'FunnyClub.store.common.FuncDataStore'
    ],

    initComponent : function() { 

		this.store = Ext.create('FunnyClub.store.common.FuncDataStore');

		this.itemSelector = 'div.function-button';
    	this.tpl = new Ext.XTemplate(
		    '<tpl for=".">',
		        '<div id="{functionCode}" <tpl if="description">data-qwidth="300" data-qtip="{description}"</tpl> class="function-button">',
		        	'<div class="function-img"><img src="{src}" style="cursor: pointer; height:30px;" /></div>',
		            '<p class="function-name">{caption}</p>',
                '</div>',
		    '</tpl>'
    	);
        
        this.listeners = {
            itemclick: function(me,record){
                this.onItemClick(record.get('functionCode'));
            },
            beforedeselect: function(){
                return false;
            },
            scope: this
        };

        this.callParent(arguments);

    },
    onItemClick: function(functionCode){
        var me = this.up('container[name="headcontainer"]');
        me.fireEvent('functionRun', functionCode);
    }
});