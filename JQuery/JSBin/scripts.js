$(function() {
	var height = $(window).height() - 40;
	$(".codeContainer").css("height", height+"px");
	$(".selector").	click(function() {
		$(this).toggleClass("selected");

		var id = $(this).attr("name");

		$("#" + id + "Container").toggle();

		var number = $(".codeContainer").filter(function() {
			return $(this).css("display") !== "none";
		}).length;

		var width = 100/number;

		$(".codeContainer").css("width", width+"%");

	});

	$("#run").click(function() {

			$("#resultFrame").contents().find("html").html("<style>"+$('#css').val()+"</style>"+$('#html').val());

			//Remove eval for uploading to Git, safety reasons
			//document.getElementById('resultFrame').contentWindow.eval( $('#js').val );

	});

});
