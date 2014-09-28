Ext.define('FunnyClub.store.common.NavStore', {
    extend: 'Ext.data.Store',
    requires: [
        'FunnyClub.model.common.NavModel'
    ],
    model: 'FunnyClub.model.common.NavModel',
    data: [
        { imgsrc:'./resources/images/Dashboard.png', description:'Record', pageId:'record'},
        { imgsrc:'./resources/images/CustomerProfile.png', description:'Customer Profile', pageId:'customerProfile'},
        { imgsrc:'./resources/images/CampaignAnalysis.png', description:'Campaign Analysis', pageId:'campaignAnalysis'},
        { imgsrc:'./resources/images/Survey.png', description:'Survey', pageId:'survey'},
        { imgsrc:'./resources/images/Comments.png', description:'Comments', pageId:'comments'},
        { imgsrc:'./resources/images/Location.png', description:'Location', pageId:'location'}
    ]

});