Ext.define('FunnyClub.view.common.NavDataView', {
	extend: 'Ext.view.View',
    alias: 'widget.navdataview',

    requires:[
        'FunnyClub.store.common.NavStore',
        'FunnyClub.view.common.NavViewController'
    ],
    controller: 'nav',


    bodyPadding: 5,
    cls: 'nav-dataview',
    selectedItemCls: 'function-button-cur',
    itemSelector: 'div.function-button',
    
    initComponent : function() {
        this.store = Ext.create('FunnyClub.store.common.NavStore');

        this.tpl = new Ext.XTemplate(
            '<tpl for=".">',
                '<div id="rpt-{pageId}" class="function-button">',
                    '<div class="function-img"><img src="{imgsrc}" style="cursor: pointer;" /></div>',
                '<p class="function-name">{description}</p>',
                '</div>',
            '</tpl>'
        );
        this.listeners= {
            select: 'onSelect',
                scope: this.controller
            // ,
            // viewready: 'onViewready'
            // beforeselect: 'onBeforeselect'
        };
        this.callParent(arguments);
    }
});