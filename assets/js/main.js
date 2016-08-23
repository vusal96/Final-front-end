$(document).ready(function() {

var tabSelect=$('#about .first .btnGroup a');
var groupSelect=$('#about .first .changes');

	$(tabSelect).click(function() {
		$(tabSelect).removeClass('active');
		$(this).addClass('active');

		var data=$(this).data('href');
		$(groupSelect).css({
			display: 'none'
		});
		$(data).css({
			display: 'block'
		});
		
	});
});


// var feature=$('#feature .')
