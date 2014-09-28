/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('FunnyClub.Application', {
    extend: 'Ext.app.Application',
    
    name: 'FunnyClub',

    stores: [
        // TODO: add global / shared stores here
    ],
    controllers: [
        'ApplicationController'
    ],
    requires:[
        'Ext.layout.*',
        'Ext.view.*',
        'Ext.window.*',
        'Ext.form.*',
        'Ext.Img',
        'Ext.chart.*',
        'Ext.grid.*'
    ],
    launch: function () {
        // TODO - Launch the application
    }
});
