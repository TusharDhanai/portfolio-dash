$(function() {
    // Rendering chart
    const Months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    var xAxis = Months;
    var yAxis = [30,40,35,50,49,60,70,91];
    var options = {
        chart: {
            type: 'line'
        },
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 5
        },
        series: [{
            name: 'sales',
            data: yAxis
        }],
        xaxis: {
            categories: xAxis
        }
    }

    var chart = new ApexCharts(document.querySelector("#line-chart"), options);

    chart.render();

    // change chart data
    document.querySelector('#line-btn').addEventListener('click',function(e) {
        e.preventDefault();     // prevent default behaviour
        let startMonth = document.querySelector('#x-label1').value;
        let endMonth = document.querySelector('#x-label2').value;
        let yData = document.querySelector('#y-label').value.split(',');    
        // Mapping the selected months
        let xData = Months.filter(item => {
            if (Months.indexOf(item) <= Months.indexOf(endMonth)
            && Months.indexOf(item) >= Months.indexOf(startMonth)) 
                return true;
            return false;
        }).map(item => item)

        while (yData.length > xData.length)
            yData.pop()

        chart.updateOptions({
            series: [{
                name: 'sales',
                data: yData
            }],
            xaxis: {
                categories: xData
            }
        })
    })
})