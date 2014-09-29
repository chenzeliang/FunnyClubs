Ext.define('FunnyClub.store.lol.RecordGridStore', {
    extend: 'Ext.data.Store',

    requires: [
        'FunnyClub.model.lol.RecordModel'
    ],
    
    model: 'FunnyClub.model.lol.RecordModel',
    
    pageSize: 10,
    proxy:{
        type: 'ajax',
//        url: 'resources/testdata/record.json',
        url:'loadPagedGames.action',
        reader:{
            type: 'json',
            rootProperty: 'dataPackage.data',
            totalProperty: 'dataPackage.total'
        }
    },
    autoLoad: false
});