function drawTimeChart() {
    var data_candle = [["2017-09-29", "11:07:00", "100", "0", "0"], ["2017-09-29", "11:08:00", "104", "0", "0"], ["2017-09-29", "11:07:00", "100", "0", "0"], ["2017-09-29", "11:08:00", "104", "0", "0"], ["2017-09-29", "11:09:00", "102", "0", "0"], ["2017-09-29", "11:10:00", "100", "0", "0"], ["2017-09-29", "11:11:00", "103", "0", "0"], ["2017-09-29", "11:12:00", "103", "0", "0"], ["2017-09-29", "11:13:00", "104", "0", "0"], ["2017-09-29", "11:14:00", "101", "0", "0"], ["2017-09-29", "11:15:00", "105", "0", "0"], ["2017-09-29", "11:16:00", "103", "0", "0"], ["2017-09-29", "11:17:00", "104", "0", "0"], ["2017-09-29", "11:18:00", "103", "0", "0"], ["2017-09-29", "11:19:00", "106", "0", "0"], ["2017-09-29", "11:20:00", "105", "0", "0"], ["2017-09-29", "11:21:00", "100", "0", "0"], ["2017-09-29", "11:22:00", "106", "0", "0"], ["2017-09-29", "11:23:00", "105", "0", "0"], ["2017-09-29", "11:24:00", "103", "0", "0"], ["2017-09-29", "11:25:00", "101", "0", "0"], ["2017-09-29", "11:27:00", "100", "0", "0"], ["2017-09-29", "11:28:00", "105", "0", "0"], ["2017-09-29", "11:29:00", "104", "0", "0"], ["2017-09-29", "11:30:00", "106", "0", "0"], ["2017-09-29", "11:31:00", "105", "0", "0"], ["2017-09-29", "11:32:00", "104", "0", "0"], ["2017-09-29", "11:33:00", "103", "0", "0"]];
    var myTimeChart = echarts.init(document.getElementById('sharingPlans'));
    myTimeChart.showLoading()
    var data = [];
    var date = [];
    for (var i = 1; i < data_candle.length; i++) {
        date.push(data_candle[i][0] + " " + data_candle[i][1]);
        data.push(data_candle[i][2]);
    }
    var minValue = Math.min.apply(null, data);
    var maxValue = Math.max.apply(null, data);

    var option2 = {
        tooltip: {
            trigger: 'axis',
            // triggerOn:'none',
            zIndex: 20,
            backgroundColor: 'rgba(32,147,236,0.9)',
            textStyle: {
                color: '#eef5e4',
                fontSize: '12'
            },
            axisPointer: {
                animation: false,
                type: 'cross',
                crossStyle: {
                    color: "red"
                },
                lineStyle: {
                    color: 'red',
                    width: 1,
                    opacity: 1
                },
                label: {
                    backgroundColor: 'red',
                }
            },
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date,
            axisLine: {lineStyle: {color: '#ffffff'}},
            axisTick: {
                show: false,
            },
            axisLabel: {
                showMinLabel: false,
                textStyle: {
                    color: '#121212',
                    fontFamily: "微软雅黑",
                    fontWeight: 600
                },
                interval: 'auto',
                formatter: function (value) {
                    let val = value.substr(5);
                    let vall = val.substring(5, val.length - 3)
                    return vall
                }
            },
        },
        yAxis: {
            type: 'value',
            min: minValue,
            max: maxValue,
            boundaryGap: [0, '100%'],
            z: 20,
            axisLine: {lineStyle: {color: ''}},
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#EBEBEB',
                }
            },
            axisLabel: {
                inside: true,
                interval: 3,
                showMinLabel: false,
                textStyle: {
                    color: '#000000',
                    fontWeight: 1
                }
            },
            axisTick: {
                show: false
            },
        },
        grid: {
            top: 20,
            left: 0,
            right: 10,
            bottom: 30
        },
        series: [
            {
                name: '价格',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'circle',
                sampling: 'average',
                symbolSize:0,
                itemStyle: {
                    normal: {
                        color: '#83BCEC',
                        borderColor: '#83BCEC',
                        lineStyle: {
                            width: 1,
                        }
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#D9EBF9'
                    }
                },
                data: data
            }
        ]
    };
    setTimeout(showChart, 1000)
    setInterval(function () {
        let arr = parseInt(Math.random() * 4 + 102);
        data.pop();
        data.push({
            value: arr,
            symbolSize: 10,
            label: {
                normal: {
                    show: true,
                    padding:4,
                    fontWeight:'bold',
                    color:'#E63738',
                    position: 'top'
                }
            }
        });
        myTimeChart.setOption({
            series: [{
                type:'line',
                data: data
            }]
        });
    }, 1000);


    function showChart() {
        myTimeChart.hideLoading()
        myTimeChart.setOption(option2);
    }

    window.onresize = myTimeChart.resize;
}