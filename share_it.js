(function($) {
	$.fn.share_it = function( options ) {
		function isBlank(str) {
			return (!str || /^\s*$/.test(str));
		}
		var i;
		var button_count;
		var button_build = '';
		var button_image;
		var button_url;
		var settings = $.extend({
			buttons: [
				{
					button_type: 'email',
					button_html: '<span class="icon">&#xf003;</span>'

				},{
					button_type: 'facebook',
					button_html: '<span class="icon">&#xf09a;</span>'

				},{
					button_type: 'twitter',
					button_html: '<span class="icon">&#xf099;</span>'
				},{
					button_type: 'google_plusone_share',
					button_html: '<span class="icon">&#xf0d5;</span>'
				},{
					button_type: 'linkedin',
					button_html: '<span class="icon">&#xf0e1;</span>'
				},{
					button_type: 'compact',
					button_html: '<span class="icon">&#xf067;</span>'
				}
			]
		}, options );
		$(this).each(function() {
			button_url = '';
			button_url = $(this).data('url');
			console.log(button_url);
			button_build = '';
			button_count = settings.buttons.length;
			for( i = 0; i < button_count; i++ ) {
				button_build = button_build+'<a href="#" class="addthis_button_'+settings.buttons[i].button_type+'">'+settings.buttons[i].button_html+'</a>';
			}
			$(this).prepend('<div class="addthis_toolbox" addthis:url="'+button_url+'">'+button_build+'</div><!--/addthis_toolbox-->');
		});
		return this;
	}; //  END SHARE_IT FUNCTION
}(jQuery));