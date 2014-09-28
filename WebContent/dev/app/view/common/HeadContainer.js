Ext.define('FunnyClub.view.common.HeadContainer', {
	extend: 'Ext.container.Container',
    requires:['FunnyClub.view.common.FuncDataView'],
    alias: 'widget.headContainer',
    name: 'headcontainer',
    height: 60,
    region: 'north',
    layout: {
        type:'hbox',     
        align: 'stretch'
    },
    bodyPadding: '5 10',
    cls: 'header',
    initComponent : function() {

        this.logoContainer = Ext.create('Ext.container.Container', {
            html: '<h1 class="header-title">Funny Club</h1>',
            // flex: 1
            width: 300
        });

        this.boxContainer = Ext.create('Ext.Component',{
            flex: 1
        });

        this.funcDataView = Ext.create('FunnyClub.view.common.FuncDataView',{
            margin: '0 30 0 0'
        });

        this.items = [
            this.logoContainer,
            this.boxContainer,
            this.funcDataView
        ];
        this.callParent(arguments);
    }
});