(function( $ ) {
	$(function() {

		$.getJSON('data.json', function (response) {
			var nav = [];
			var list = [];
			for (var key in response) {
				var	navstr = '<div class="mobile-brands-nav__item" data-index="'+ key +'">'+ key +'</div>'
				nav.push(navstr);

				if (!response.hasOwnProperty(key)) continue;

				var obj = response[key];

				var	liststr = '<div class="mobile-brands__section" data-index="'+ key +'">';
				liststr += '<div class="mobile-brands__title">'+ key +'</div>';
				liststr += '<div class="mobile-brands__item-wrap">';
				for (var prop in obj) {

					if (!obj.hasOwnProperty(prop)) continue;

					liststr += '<div class="mobile-brands__item">';
					liststr += '<a class="mobile-brands__link" href="#">'+ obj[prop] +'</a>';
					liststr += '</div>';

				}
				liststr += '</div>';
				liststr += '</div>';
				liststr += '</div>';
				list.push(liststr);
			}

			$('.mobile-brands-nav').append(nav.join(''));
			$('.mobile-brands-content').append(list.join(''));
			$('.mobile-brands-nav__item').click(NavItemClick);

		});



	}); //document ready


	function NavItemClick(){
		var	cur_button = $(this);
		var wrap = $('.mobile-brands-nav');
		var	old_button = '';
		if( $('.mobile-brands-nav__item_active').length ){
			old_button = $('.mobile-brands-nav__item_active');
		} else {
			old_button = $(this).parent().find('.mobile-brands-nav__item').first(); 
		}
		var space_between_buttons = Math.abs(cur_button.position().left - old_button.position().left);
		var section = $('.mobile-brands__section[data-index="' + $(cur_button).data('index') + '"]'); 

		$('.mobile-brands-nav__item').removeClass('mobile-brands-nav__item_active');
		cur_button.addClass('mobile-brands-nav__item_active');

		if (wrap.width() < space_between_buttons) {
			$('html, body').scrollTop($(section).position().top - 50);
		} else {
			$('html, body').animate({ scrollTop: $(section).position().top - 50 }, 500);
		}

		section.find('.mobile-brands__link').addClass('mobile-brands__link_active');
		setTimeout(function(){
			section.find('.mobile-brands__link').removeClass('mobile-brands__link_active');
		}, 1000);
	}



	$(window).scroll(function(){
		var	old_button = $('.mobile-brands-nav__item_active');
		var scroll = $(window).scrollTop();
		$('.mobile-brands__section').each(function(_, section) {
			if($(section).position().top < scroll + 55) {
				
				$('.mobile-brands-nav__item').removeClass('mobile-brands-nav__item_active');
				$('.mobile-brands-nav__item[data-index="' + $(section).data('index') + '"]').addClass('mobile-brands-nav__item_active');
			}
		});

		var wrap = $('.mobile-brands-nav');
		var tenth_part = wrap.width()*10/100;
		var new_button = $('.mobile-brands-nav__item_active');

		if (old_button.data('index') != new_button.data('index')) {
			if (new_button.position().left > wrap.width() - tenth_part) {
				wrap.animate({ scrollLeft: wrap.scrollLeft() + new_button.position().left - tenth_part * 2 }, 200);
			} else if(new_button.position().left < tenth_part) {
				wrap.animate({ scrollLeft: wrap.scrollLeft() - new_button.position().left - (tenth_part * 8) }, 200);
			}
		}
	});

})(jQuery);