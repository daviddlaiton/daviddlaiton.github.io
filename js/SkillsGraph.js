window.onload = function () {
	
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	axisX:{
		interval: 1
	},
	axisY2:{
		interlacedColor: "rgba(220,53,69,.2)",
		gridColor: "rgba(220,53,69,.1)"
	},
	data: [{
		type: "bar",
		name: "Skills level",
		axisYType: "secondary",
		color: "#dc3545",
		dataPoints: [
			{ y: 100, label: "Java" },
			{ y: 50, label: "JavaScript" },
			{ y: 30, label: "Python" },
			{ y: 70, label: "C" },
			{ y: 60, label: "C++" },
			{ y: 80, label: "HTML" }
		]
	}]
});
chart.render();

}