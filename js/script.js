$("#switch").click(function () {
	if ($("#scene").hasClass("night")) {
		$("#scene").removeClass("night");
		$("#switch").removeClass("switched");
	}
	else {
		$("#scene").addClass("night");
		$("#switch").addClass("switched");

	}
});

$(function(){
	$('#water').ripples({
		resolution: 512,
		dropRadius: 20,
		perturbance: 0.04,
	});
	// $('.demo').ripples('show');
	// setInterval(function() {
 //        var $el = $('#water');
 //        var x = Math.random() * $el.outerWidth();
 //        var y = Math.random() * $el.outerHeight();
 //        var interactive = null;
 //        var dropRadius = 20;
 //        var strength = 0.04 + Math.random() * 0.04;
        
 //        $el.ripples('drop', x, y, dropRadius, strength);
 //    }, 400);
});

menu.onclick = function myFunction() {
	var x = document.getElementById("myNavigation");

	if (x.className === "navigation") {
		x.className += " responsive";
	} else{
		x.className = "navigation";
	}
}

// $(document).ready(function() {
//     try {
//         $('#water').ripples({
//             resolution: 512,
//             dropRadius: 20, //px
//             perturbance: 0.04,
//         });
//         $('main').ripples({
//             resolution: 128,
//             dropRadius: 10, //px
//             perturbance: 0.04,
//         });
//     }
//     catch (e) {
//         $('.error').show().text(e);
//     }

//     $('.disable').show().on('click', function() {
//         $('#body, main').ripples('destroy');
//         $(this).hide();
//     });

//     // Automatic drops
//     setInterval(function() {
//         var $el = $('main');
//         var x = Math.random() * $el.outerWidth();
//         var y = Math.random() * $el.outerHeight();
//         var dropRadius = 20;
//         var strength = 0.04 + Math.random() * 0.04;
        
//         $el.ripples('drop', x, y, dropRadius, strength);
//     }, 400);
// });

// function resetDayNight() {

// }

// button.onclick = function(resetDayNight)

