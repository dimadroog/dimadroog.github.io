(function( $ ) {
	$(function() {

		/**/
		/*navbar*/
		$('.navbar-hamburger').click(function () {
			$(this).toggleClass('navbar-hamburger_active');
			if ($(this).hasClass('navbar-hamburger_active')) {
				$('.navbar-menu').slideDown();
			} else {
				$('.navbar-menu').slideUp();
			}
		})
		/*navbar*/
		/**/


		/**/
		/*calc*/
		$('.stepbar-sm__select').on('change', function(){
			toggleStep(this.value);
		});
		$('.stepbar__dots-item').on('click', function(){
			toggleStep($(this).index());
		});
		$('.step-action-next').on('click', function(){
			var count_of_steps = $('.calc-steps').children().length;
			var current_step = $(this).closest('.step').index();
			if (current_step != count_of_steps - 1) {
				toggleStep(current_step + 1);
			}
		});
		$('.step-action-prev').on('click', function(){
			var current_step = $(this).closest('.step').index();
			if (current_step != 0) {
				toggleStep(current_step - 1);
			}
		});
		$('.step-action-service').click(function(){
			if (!$(this).hasClass('step-one__item_active')) {
				$(this).addClass('step-one__item_active');
			} else {
				$(this).removeClass('step-one__item_active');
			}
		});
		$('.calc-action-again').click(function(){
			$('.calc-steps').find('.step-one__item').removeClass('step-one__item_active');
			$('.calc-steps').find('.input').val('');
			toggleStep(0);
		});

		/*calc*/
		/**/




	}); //document ready

	function toggleStep(index){ //for /*calc*/
		$('.step').removeClass('step_active')
		$('.step').eq(index).addClass('step_active');

		$('.stepbar__dots-item').removeClass('stepbar__dots-item_active');
		$('.stepbar__dots-item').eq(index).addClass('stepbar__dots-item_active');

		$('.stepbar__ground-item').removeClass('stepbar__ground-item_active');
		$('.stepbar__ground-item').eq(index).addClass('stepbar__ground-item_active');

		$('.stepbar__list-item').removeClass('stepbar__list-item_active');
		$('.stepbar__list-item').eq(index).addClass('stepbar__list-item_active');

		$('.stepbar-sm__select').val(index);
	}


})(jQuery);