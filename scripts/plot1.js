var ctx = document.getElementById("chart").getContext('2d');

// Define the data 
var data = [];
var labels = [];
jQuery.getJSON('data/temp.json').done(function(results) {
    labels = results.map(function (item) {
        return item.updatedLabels
    });

    data = results.map(function (item) {
        return item.updatedData;
    });
});

const wOBAData = data.map(obj=>{
    return {
        x: obj.launch_angle,
        y: obj.launch_speed
    }
})
// End Defining data

var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Population', // Name the series
            data: wOBAData, // Specify the data values array
            borderColor: '#2196f3', // Add custom color border            
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            pointRadius:1,
            pointStyle: 'circle'
            }]
            },
        options: {
            responsive: false, // Instruct chart js to respond nicely.
            maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
            tooltips: false,
            legend:{
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display:false
                    },
                    ticks: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display:false
                    },
                    ticks: {
                        display: false
                    }
                }]

        }
    }
});
