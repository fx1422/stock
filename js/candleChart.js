function drawCandleChart() {
    const myChart = echarts.init(document.getElementById('candlestickCharts'));
    myChart.showLoading();
    const rawData = [{
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3607.93,
        "low": 3601.7,
        "time": "14:00:00",
        "close": 3604.69,
        "open": 3606.72
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3611.17,
        "low": 3604.92,
        "time": "13:30:00",
        "close": 3604.93,
        "open": 3608.97
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3611.15,
        "low": 3605.98,
        "time": "13:00:00",
        "close": 3608.98,
        "open": 3607.67
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3613.2,
        "low": 3607.07,
        "time": "12:30:00",
        "close": 3609.22,
        "open": 3608.06
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3611.17,
        "low": 3604.93,
        "time": "12:00:00",
        "close": 3608.66,
        "open": 3607.74
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3609.02,
        "low": 3603.87,
        "time": "11:30:00",
        "close": 3606.72,
        "open": 3604.42
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3607.88,
        "low": 3602.79,
        "time": "11:00:00",
        "close": 3604.91,
        "open": 3604.03
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3607.96,
        "low": 3602.82,
        "time": "10:30:00",
        "close": 3604.07,
        "open": 3605.09
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3613.17,
        "low": 3602.78,
        "time": "10:00:00",
        "close": 3603.78,
        "open": 3609.63
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3616.32,
        "low": 3608.22,
        "time": "09:30:00",
        "close": 3610.67,
        "open": 3614.61
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3618.66,
        "low": 3610.4,
        "time": "09:00:00",
        "close": 3614.67,
        "open": 3617.04
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3618.6,
        "low": 3609.27,
        "time": "08:30:00",
        "close": 3617.06,
        "open": 3610.58
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3615.44,
        "low": 3609.2,
        "time": "08:00:00",
        "close": 3611.66,
        "open": 3612.87
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3615.45,
        "low": 3611.34,
        "time": "07:30:00",
        "close": 3614.03,
        "open": 3615.28
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3615.45,
        "low": 3610.35,
        "time": "07:00:00",
        "close": 3615.27,
        "open": 3613.81
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3616.46,
        "low": 3611.33,
        "time": "06:30:00",
        "close": 3613.41,
        "open": 3615.56
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3615.45,
        "low": 3609.32,
        "time": "04:00:00",
        "close": 3611.67,
        "open": 3614.44
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3619.72,
        "low": 3610.26,
        "time": "03:30:00",
        "close": 3614.27,
        "open": 3618.62
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3622.89,
        "low": 3614.64,
        "time": "03:00:00",
        "close": 3618.44,
        "open": 3616.47
    }, {
        "date": "2017-09-29",
        "volume": 0.0,
        "high": 3616.91,
        "low": 3608.21,
        "time": "02:30:00",
        "close": 3614.66,
        "open": 3609.24
    }]
    const dates = rawData.map(function (item) {
        return item['date'] + " " + item['time'];
    });

    const data = rawData.map(function (item) {
        return [+item['open'], +item['close'], +item['low'], +item['high']];
    });
    console.log(data)
    const option = {
        backgroundColor: '#ffffff',
        legend: {
            inactiveColor: '#777',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis',
            // triggerOn:'none',
            z: 990,
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
            data: dates,
            boundaryGap: true,
            axisLine: {lineStyle: {color: '#d7d7d7'}},
            splitLine: {
                show: false,
                interval: 4,
                lineStyle: {
                    type: 'dashed',
                    color: '#343434',

                }
            },
            axisTick: {
                show: true,
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
                    var val = value.substr(5);
                    var vall = val.substring(5, val.length - 3)
                    return vall
                }
            }
        },
        yAxis: {
            scale: true,
            axisLine: {lineStyle: {color: ''}},
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#EBEBEB',
                }
            },
            axisLabel: {
                z: 60,
                inside: true,
                interval: 3,
                showMinLabel: false,
                textStyle: {
                    color: '#000000',
                    fontWeight: 600
                }
            },
            axisTick: {
                show: false
            }

        },
        grid: {
            top: 20,
            left: 0,
            right: 2,
            bottom: 30
        },
        animation: false,
        series: [
            {
                type: 'candlestick',
                data: data,
                barWidth: 13,
                dimensions: ['', '开盘', '收盘', '最低', '最高'],
                itemStyle: {
                    normal: {
                        color: '#D23032',
                        color0: '#1EA83C',
                        borderColor: '#D23032',
                        borderColor0: '#1EA83C'
                    }
                }
            }
        ]
    };
    setTimeout(showChart, 1000);
    setInterval(function () {
        let arr = [3616.47, parseInt(Math.random() * 5 + 3614), 3614.64, 3622.89];
        data.pop();
        data.push(arr);
        myChart.setOption({
            series: [{
                type: 'candlestick',
                data: data,
                markLine: {
                    symbol: ['none', 'none'],
                    lineStyle: {
                        normal: {
                            color: 'red',
                            position: 'top',
                        },

                    },
                    label: {
                        normal: {
                            position: 'middle',
                            show: true,
                            color:'#121212',
                            fontWeight:'bold'
                        }
                    },
                    data: [
                        [
                            {
                                name: data[data.length - 1][1],
                                coord: [0, data[data.length - 1][1]]
                            },
                            {
                                coord: [data.length - 1, data[data.length - 1][1]]
                            }
                        ]
                    ]
                }
            }]
        });
    }, 500);


    function showChart() {
        myChart.hideLoading();
        myChart.setOption(option);
    }

    window.onresize = myChart.resize;
}
