google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
['Computer Language', 'Popularity'],
['Bootstrap', 8],
['jquery', 2],
['Javascript', 4],
['CSS', 2],
['HTML', 8]
]);

var options =
{'title':'Popularity of Computer Language', 'width':550,'height':400,is3D: true};
	
var chart =
new google.visualization.PieChart(document.getElementById('piechart'));
chart.draw(data, options);
}


