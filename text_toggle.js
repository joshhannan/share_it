(function($) {
	$.fn.text_toggle = function( options ) {
		var settings = $.extend({
			character_limit: 100,
			link_text: '...Read More',
			return_text: '...Read Less',
			animation_speed: null
		}, options );
		function truncate_text( text ) {
			text = text.substr( 0, settings.character_limit);
			text = '<div class="visible excerpt"><p>'+text+'<a class="excerpt_link" href="#">'+settings.link_text+'</a></p></div>';
			return text;
		}
		$(this).each(function() {
			var obj = $(this);
			var orig_content = obj.html();
			var content = obj.text();
			var excerpt = truncate_text(content);
			obj.html(excerpt);
			obj.append('<div class="full_content" style="display: none;">'+orig_content+'<p><a class="full_link" href="#">'+settings.return_text+'</a></p></div>');
			$('.excerpt_link').click(function() {
				$(this).parents('.excerpt').removeClass('visible').hide( settings.animation_speed );
				$(this).parents('.excerpt').next('.full_content').addClass('visible').show( settings.animation );
				return false;
			});
			$('.full_link').click(function() {
				$(this).parents('.full_content').removeClass('visible').hide( settings.animation_speed );
				$(this).parents('.full_content').prev('.excerpt').addClass('visible').show( settings.animation );
				return false;
			});
		});
		return this;
	}; //  END TEXT_TOGGLE FUNCTION
}(jQuery));