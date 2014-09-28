Ext.define('FunnyClub.store.common.NavStore', {
    extend: 'Ext.data.Store',
    requires: [
        'FunnyClub.model.common.NavModel'
    ],
    model: 'FunnyClub.model.common.NavModel',
    data: [
        { imgsrc:'./resources/images/Dashboard.png', description:'Dashboard', reportId:'dashboard'},
        { imgsrc:'./resources/images/CustomerProfile.png', description:'Customer Profile', reportId:'customerProfile'},
        { imgsrc:'./resources/images/CampaignAnalysis.png', description:'Campaign Analysis', reportId:'campaignAnalysis'},
        { imgsrc:'./resources/images/Survey.png', description:'Survey', reportId:'survey'},
        { imgsrc:'./resources/images/Comments.png', description:'Comments', reportId:'comments'},
        { imgsrc:'./resources/images/Location.png', description:'Location', reportId:'location'}
    ]

});