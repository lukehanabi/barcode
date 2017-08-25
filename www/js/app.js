var resultDiv;
var resultqr;

document.addEventListener("deviceready", init, false);
function init() {
	document.querySelector("#startCreation").addEventListener("touchend", startCreation, false);
	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
	resultDiv = document.querySelector("#results");
resultqr = document.querySelector("#resultqr");
}

function startScan() {

	cordova.plugins.barcodeScanner.scan(
		function (result) {
			var s = "Result: " + result.text + "<br/>" +
			"Format: " + result.format + "<br/>" +
			"Cancelled: " + result.cancelled;
			resultDiv.innerHTML = s;
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);
}

function startCreation() {

   cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com", function(success) {
            //alert("encode success: " + success);
            resultqr.innerHTML = success;
          }, function(fail) {
            alert("encoding failed: " + fail);
         }
        );


}