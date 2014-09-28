Ext.define('FunnyClub.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'FunnyClub.view.common.HeadContainer',
        'FunnyClub.view.common.NavDataView',
        'FunnyClub.view.common.MainPanel'
    ],

    layout:{
        type: 'border'
    },

    initComponent : function() {
        this.items = [ 
            // header
            Ext.create('FunnyClub.view.common.HeadContainer'),
            // navigation
            Ext.create('FunnyClub.view.common.NavDataView', {
                width: 100,
                margin: '40 0 5 10',
                region:'west'
            }),
            // main
            Ext.create('FunnyClub.view.common.MainPanel', {
                margin: '5 5 5 0'
            })
        ];        
        this.callParent(arguments);
    }
});
