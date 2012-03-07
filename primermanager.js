Drupal.behaviors.primermanager = function(context) {
		
	if($('#edit-primermanager-selected-operation').length > 0) {
	
		$("#edit-primermanager-name-wrapper").hide();
		$("#edit-primermanager-local-configurations-wrapper").hide();
		$("#edit-primermanager-import-settings-wrapper").hide();
		$("#edit-submit").hide();
		
		$('#edit-primermanager-selected-operation').change(function() {
			
			// hide all fields then based on the choice, show them using the statements below
			$("#edit-primermanager-name-wrapper").hide();
			$("#edit-primermanager-local-configurations-wrapper").hide();
			$("#edit-primermanager-import-settings-wrapper").hide();
			$("#edit-submit").hide();
			
			var selection = $(this).val();
			
			switch (selection) {
			
			case 'save':
				$("#edit-primermanager-name-wrapper").show();
				$("#edit-submit").show();
				break;
			case 'share':
				$("#edit-primermanager-name-wrapper").show();
				$("#edit-submit").show();
				break;
			case 'import':
				$("#edit-primermanager-import-settings-wrapper").show();
				$("#edit-submit").show();
				break;
			case 'export':
				$("#edit-primermanager-name-wrapper").show();
				$("#edit-submit").show();
				break;
			case 'delete':
				$("#edit-primermanager-local-configurations-wrapper").show();
				$("#edit-submit").show();
				
			}

			
		});
		
	}
	
}
