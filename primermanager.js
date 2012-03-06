Drupal.behaviors.primermanager = function(context) {
		
	if($('#edit-primermanager-selected-operation').length > 0) {
	
		$("#edit-primermanager-name").parent().hide();
		$("#edit-primermanager-local-configurations").parent().hide();
		$("#edit-submit").hide();
		
		$('#edit-primermanager-selected-operation').change(function() {
			
			if($('#edit-primermanager-selected-operation').val() == 'select') {
				
				$("#edit-primermanager-name").parent().hide();
				$("#edit-primermanager-local-configurations").parent().hide();
				$("#edit-submit").hide();
				
			}
			
			if($('#edit-primermanager-selected-operation').val() == 'save') {
				
				$("#edit-primermanager-name").parent().show();
				$("#edit-primermanager-local-configurations").parent().hide();
				$("#edit-submit").show();
				
			}
			
			if($('#edit-primermanager-selected-operation').val() == 'export') {
				
				$("#edit-primermanager-local-configurations").parent().hide();
				$("#edit-primermanager-name").parent().show();
				$("#edit-submit").show();
				
			}
			
			if($('#edit-primermanager-selected-operation').val() == 'delete') {
				
				$("#edit-primermanager-name").parent().hide();
				$("#edit-primermanager-local-configurations").parent().show();
				$("#edit-submit").show();
				
			}
			
			
		});
		
	}

		
	
}
