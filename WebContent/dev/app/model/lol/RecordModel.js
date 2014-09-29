Ext.define('FunnyClub.model.lol.RecordModel', {
    extend: 'Ext.data.Model',
    idProperty: 'pageId',
    fields: [
        { name:'gameId', type:'string' },
        { name:'imgSrc', type:'string' },
        { name:'userId', type:'string' },
        { name:'name', type:'string' },
        { name:'model', type:'string' },
        { name:'success', type:'string' },
        { name:'gameDate', type:'string' }
    ]
});