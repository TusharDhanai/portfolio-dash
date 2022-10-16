$(function () {
    var data = [44, 55, 41, 17]
    var labels = ['Apple', 'Mango', 'Orange', 'Watermelon']

    var options = {
        series: data,
        labels: labels,
        chart: {
            type: 'donut',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom'
                }
            }
        }],
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        fontSize: '40',
                        total: {
                            show: true,
                            label: 'Total',
                            fontSize: '70'
                        }
                    }
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#donut-chart"), options);
    chart.render();
})