
//While the page is loading is running function
window.onload = function () {

	//Creatge the chart based on the librery 
	var chart = new CanvasJS.Chart("chartContainer", {
		//Enable the animation of the chart
		animationEnabled: true,
		//The axis x
		axisX: {
			//Tells each line is a individual.
			interval: 1
		},
		//The axis Y
		axisY2: {
			//The color of one of the intercaled line, the other is white by default
			interlacedColor: "rgba(220,53,69,.2)",
			//The color of the lines.
			gridColor: "rgba(220,53,69,.1)"
		},
		data: [{
			//Chart type
			type: "bar",
			//Name of the axis X
			name: "Skills level",
			//Name of the axis Y
			axisYType: "secondary",
			//Color of the text
			color: "#dc3545",
			//Datapoints of each language.
			dataPoints: [
				{ y: 100, label: "Java" },
				{ y: 100, label: "JavaScript" },
				{ y: 50, label: "Python" },
				{ y: 70, label: "C" },
				{ y: 60, label: "C++" },
				{ y: 100, label: "HTML" }
			]
		}]
	});

	//Make the render of the chart
	chart.render();

}