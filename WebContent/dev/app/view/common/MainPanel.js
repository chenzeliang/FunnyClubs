Ext.define('FunnyClub.view.common.MainPanel', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.mainpanel', 
    cls: 'main-panel',
	region: 'center',

    requires:[
//        'FunnyClub.view.dashboard.DashboardView',
//        'FunnyClub.view.comments.CommentsView',
//        'FunnyClub.view.customer.CustomerProfileView',
//        'FunnyClub.view.survey.SurveyView',
//        'FunnyClub.view.campaign.CampaignAnalysisView'
    ],

    layout: 'card',
    
    // 记录已经加载的 item
    aliveItems: {},

    initComponent : function() {

        this.callParent(arguments);
    }
});