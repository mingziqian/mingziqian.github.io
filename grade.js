
var chart = Highcharts.chart('container', {
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
        name: 'Assignments',
        color: 'rgba(223, 83, 83, .5)',
        data: [[2.0, 75.0],[5.6, 82.0],[12.5, 98.0]]},
        
        {
        name: 'Research Paper',
        color: '#7cb5ec',
        data: [[8,100],[12,90]]
        },
        {
        name: 'Exam',
        color: '#90ed7d',
        data: [[18,86]]

    
    }],
    
    
    
});


function enter1(){
    if(document.getElementById("ps2-input1").value!="" && document.getElementById("ps2-input2").value!=""){
        var input1= Number(document.getElementById("ps2-input1").value);
        var input2= Number(document.getElementById("ps2-input2").value);
        var new_grade = Math.floor((input1 / input2) * 100);
        document.getElementById("ps2-grade").innerHTML = document.getElementById("ps2-input1").value+" / "+document.getElementById("ps2-input2").value;
        //alert(Math.floor((input1 / input2) * 100)+"%");      
        chart.series[0].addPoint([4.6,new_grade]);
        var table = document.getElementById("mytable");
        var row = table.insertRow(5);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "Problem Set #4";
        cell2.innerHTML = "Jan 23";
        cell3.innerHTML = "4.6";
        cell4.innerHTML = document.getElementById("ps2-grade").innerHTML;
        
        document.getElementById("incomplete_table").deleteRow("1");
        $('.alert-success').removeClass('hidden');
    }  
}
function enter2(){
    if(document.getElementById("ps3-input1").value!="" && document.getElementById("ps3-input2").value!=""){
        var input1= Number(document.getElementById("ps3-input1").value);
        var input2= Number(document.getElementById("ps3-input2").value);
        var new_grade = Math.floor((input1 / input2) * 100);
        document.getElementById("ps3-grade").innerHTML = document.getElementById("ps3-input1").value+" / "+document.getElementById("ps3-input2").value;
        chart.series[0].addPoint([7.2,new_grade]);
        var table = document.getElementById("mytable");
        var row = table.insertRow(6);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "Problem Set #5";
        cell2.innerHTML = "Jan 31";
        cell3.innerHTML = "7.2";
        cell4.innerHTML = document.getElementById("ps3-grade").innerHTML;
        document.getElementById("incomplete_table").deleteRow("1");
        $('.alert-success').removeClass('hidden');
    }
}
function enter3(){
    if(document.getElementById("final-input1").value!="" && document.getElementById("final-input2").value!=""){
        document.getElementById("final-grade").innerHTML = document.getElementById("final-input1").value+" / "+document.getElementById("final-input2").value;
        $('.alert-success').removeClass('hidden');
    }
}