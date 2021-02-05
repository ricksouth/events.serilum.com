$(document).ready(function(e) {
	loadJsonData($("#mcversions").val());
});

function loadJsonData(version) {
	$.ajax({
		url: "https://raw.githubusercontent.com/ricksouth/eventlistforge.com/main/json/" + version + ".json",
		type: "GET",
		dataType: 'json',
		success: function(data){
			$("#title").html("Forge Event List for Minecraft version " + $("#mcversions option:selected").text() + ".")

			var html = "";

			var packages = data[0];
			for (var packagename in packages) {
				var package = packages[packagename];
				html += "<h3>" + packagename + "</h3>";
				for (var i = 0; i < package.length; i++) {
					var event = package[i];
					html += "<pre>" + event + "</pre>";
				}
			}

			$("#content").html(html);
		},
		error: function(data) { }
	});
}

$("#mcversions").on('change', function(e) {
	var version = $(this).val();
	loadJsonData(version);
});