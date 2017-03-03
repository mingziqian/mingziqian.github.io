
var chart = Highcharts.chart('container1', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Grades vs. Time Spent'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Time (Hours)'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: 'Grades (%)'
        }
    },
    /*legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 60,
        y: 20,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        borderWidth: 1
    },*/
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} hours, {point.y} %'
            }
        }
    },
    series: [{
        name: 'EECS 330',
        color: 'rgba(223, 83, 83, .5)',
        data: [[2.0, 75.0],[5.6, 82.0],[12.5, 98.0],[3, 100],[15, 90.0]]
        },
        {
        name: 'Math 311',
        color: '#7cb5ec',
        data: [[8,100],[12,90],[1,80],[10,75],[13,90]]
        },
        {
        name: 'History 300',
        color: '#90ed7d',
        data: [[18,86],[1,60],[4,90],[10,90],[12,75],[15,98]]
        },
        {
        name: 'Chem 250',
        color: '#9242f4',
        data: [[5,63],[2,80],[10,90],[11,85],[20,75],[5,98]]
    }],

});

// Create the chart
Highcharts.chart('container2', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Time Spent per Class this Quarter'
    },
    subtitle: {
        text: 'Click the slices see time breakdown by assigment type'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: false,
                format: '{point.name}: {point.y:.1f}%'
            }
        },
        pie: {
            showInLegend: true
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> hours<br/>'
    },
    series: [{
        name: 'Classes',
        colorByPoint: true,
        data: [{
            name: 'EECS 330',
            color: 'rgba(223, 83, 83, .5)',
            y: 42,
            drilldown: 'EECS 330'
        }, {
            name: 'Math 311',
            y: 34,
            color: '#7cb5ec',
            drilldown: 'Math 311'
        }, {
            name: 'History 300',
            y: 21,
            color: '#90ed7d',
            drilldown: 'History 300'
        }, {
            name: 'Chem 250',
            y: 24,
            color: '#9242f4',
            drilldown: 'Chem 250'
        }]
    }],
    drilldown: {
        series: [{
            name: 'EECS 330',
            id: 'EECS 330',
            data: [
                ['Assignment 1', 2],
                ['Assignment 2', 3],
                ['Assignment 3', 7],
                ['Exam 1', 10],
                ['Final Project', 20],
            ]
        }, {
            name: 'Math 311',
            id: 'Math 311',
            data: [
                ['Problem Set 1', 5],
                ['Problem Set 2', 7],
                ['Problem Set 3', 7],
                ['Problem Set 4', 10],
                ['Exam 1', 15]
            ]
        }, {
            name: 'History 300',
            id: 'History 300',
            data: [
                ['Reading 1', 1],
                ['Reading 2', 2],
                ['Research Paper 1', 5],
                ['Research Paper 2', 10],
                ['Reading 3', 3]
            ]
        }, {
            name: 'Chem 250',
            id: 'Chem 250',
            data: [
                ['Problem Set 1', 4],
                ['Problem Set 2', 7],
                ['Problem Set 3', 3],
                ['Exam 1', 10]
            ]
        }]
    }
});


Highcharts.chart('container3', {

    chart: {
        polar: true,
        type: 'line'
    },

    title: {
        text: 'Goal vs Real time',
        x: -80
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['EECS 330', 'Math 311', 'History 300', 'Chem 250'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b> hours<br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },

    series: [{
        name: 'Weekly Goal',
        data: [10, 10, 12, 15],
        pointPlacement: 'on'
    }, {
        name: 'Actual time spent',
        data: [8, 6, 3, 16],
        pointPlacement: 'on'
    }]

});
