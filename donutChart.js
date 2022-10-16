const initialData = [44, 55, 41, 17]
const initialLabels = ['Apple', 'Mango', 'Orange', 'Watermelon']

var data = [44, 55, 41, 17]
var labels = ['Apple', 'Mango', 'Orange', 'Watermelon']

$(function () {
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

    $('#donut-add').on('click',function(e) {
        e.preventDefault();

        let label = $('#donut-name').val();
        let value = $('#donut-value').val();

        if (label === '' || value === '') {
            console.error('Empty values.')
            return
        }

        labels.push(label);
        data.push(Number(value));

        chart.updateOptions({
            series: data,
            labels: labels
        })

        $('#donut-name').val('');
        $('#donut-value').val('');

        $('#donut-select').append(`
            <option value="${value}">${label}</option>
        `);
    });

    $('#donut-reset').on('click',function(e) {
        e.preventDefault();

        labels = [...initialLabels]
        data = [...initialData]

        chart.updateOptions({
            series: data,
            labels: labels
        })
    })

    $('#donut-select').on('change',function() {
        let label = this.selectedOptions[0].innerText

        let index = labels.indexOf(label)

        if (index === -1)
        {
            console.error('Index not found.');
            return;
        }

        labels.splice(index, 1)
        data.splice(index, 1)

        this.selectedOptions[0].remove()

        chart.updateOptions({
            series: data,
            labels: labels
        })
    })
});