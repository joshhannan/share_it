// Plugins

(function($) {
	$.fn.share_it = function( options ) {
		function isBlank(str) {
			return (!str || /^\s*$/.test(str));
		}
		var i;
		var button_count;
		var button_build = '';
		var button_image;
		var settings = $.extend({
			buttons: []
		}, options );
		$(this).each(function() {
			button_count = settings.buttons.length;
			console.log(settings.buttons);
			console.log(button_count);
			for( i = 0; i < button_count; i++ ) {
				if( isBlank(settings.buttons[i].image_url ) ) {
					button_image = '<img class="'+settings.buttons[i].button_type+'" src="'+settings.buttons[i].image_url+'" />';
				} else {
					button_image = '';
				}
				button_build = button_build+'<a href="#" class="addthis_button_'+settings.buttons[i].button_type+'">'+button_image+'</a>';
			}
			$(this).prepend('<div class="addthis_toolbox" addthis:url="http://example.com">'+button_build+'<a href="http://www.addthis.com/bookmark.php?v=250" class="addthis_button_compact"></a></div><!--/addthis_toolbox-->');
		});
		return this;
	}; //  END OVERLAY_IT FUNCTION
}(jQuery));