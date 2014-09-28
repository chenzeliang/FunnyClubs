Ext.define('FunnyClub.view.common.NavViewController', {
      extend: 'Ext.app.ViewController',
      alias: 'controller.nav',

   	onSelect: function(self, record){
   		var reportId = record.get('reportId');
   		if (!reportId) {
   			console.log('no reportId');
   			return false;
   		};
   		var view = this.getView();
   		view.fireEvent('changepage', view, reportId);

   	}

});