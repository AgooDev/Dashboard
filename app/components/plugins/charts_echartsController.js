angular
    .module('agooDash')
    .controller('charts_echartsCtrl', [
        '$scope',
        '$interval',
        '$window',
        '$timeout',
        function ($scope,$interval,$window,$timeout) {

            // ---------- chart a
            $scope.chart_a_data = [
                {
                    name:'Email Marketing',
                    type:'line',
                    stack: 'Total',
                    lineStyle: {
                        normal: {
                            color: '#006064'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#00ACC1'
                        }
                    },
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'Affiliate Ads',
                    type:'line',
                    stack: 'Total',
                    lineStyle: {
                        normal: {
                            color: '#E65100'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#FB8C00'
                        }
                    },
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'Video Ads',
                    type:'line',
                    stack: 'Total',
                    lineStyle: {
                        normal: {
                            color: '#B71C1C'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#E53935'
                        }
                    },
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'Direct Access',
                    type:'line',
                    stack: 'Total',
                    lineStyle: {
                        normal: {
                            color: '#33691E'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#7CB342'
                        }
                    },
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'Search Engine',
                    type:'line',
                    stack: 'Total',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: '#3E2723'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#6D4C41'
                        }
                    },
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ];
            $scope.chart_a_options = {
                title: {
                    text: 'Stacked area'
                },
                tooltip : {
                    trigger: 'axis'
                },
                color: ['#00ACC1','#FB8C00','#E53935','#7CB342','#6D4C41'],
                legend: {
                    data:['Email Marketing', 'Affiliate Ads', 'Video Ads', 'Direct Access', 'Search Engine'],
                    bottom: '0'
                },
                toolbox: {
                    right: 30,
                    feature: {
                        saveAsImage: {
                            title: 'save as image'
                        }
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '10%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ]
            };

            // ---------- chart b
            var geoCoordMap = {
                '上海': [121.4648,31.2891],
                '东莞': [113.8953,22.901],
                '东营': [118.7073,37.5513],
                '中山': [113.4229,22.478],
                '临汾': [111.4783,36.1615],
                '临沂': [118.3118,35.2936],
                '丹东': [124.541,40.4242],
                '丽水': [119.5642,28.1854],
                '乌鲁木齐': [87.9236,43.5883],
                '佛山': [112.8955,23.1097],
                '保定': [115.0488,39.0948],
                '兰州': [103.5901,36.3043],
                '包头': [110.3467,41.4899],
                '北京': [116.4551,40.2539],
                '北海': [109.314,21.6211],
                '南京': [118.8062,31.9208],
                '南宁': [108.479,23.1152],
                '南昌': [116.0046,28.6633],
                '南通': [121.1023,32.1625],
                '厦门': [118.1689,24.6478],
                '台州': [121.1353,28.6688],
                '合肥': [117.29,32.0581],
                '呼和浩特': [111.4124,40.4901],
                '咸阳': [108.4131,34.8706],
                '哈尔滨': [127.9688,45.368],
                '唐山': [118.4766,39.6826],
                '嘉兴': [120.9155,30.6354],
                '大同': [113.7854,39.8035],
                '大连': [122.2229,39.4409],
                '天津': [117.4219,39.4189],
                '太原': [112.3352,37.9413],
                '威海': [121.9482,37.1393],
                '宁波': [121.5967,29.6466],
                '宝鸡': [107.1826,34.3433],
                '宿迁': [118.5535,33.7775],
                '常州': [119.4543,31.5582],
                '广州': [113.5107,23.2196],
                '廊坊': [116.521,39.0509],
                '延安': [109.1052,36.4252],
                '张家口': [115.1477,40.8527],
                '徐州': [117.5208,34.3268],
                '德州': [116.6858,37.2107],
                '惠州': [114.6204,23.1647],
                '成都': [103.9526,30.7617],
                '扬州': [119.4653,32.8162],
                '承德': [117.5757,41.4075],
                '拉萨': [91.1865,30.1465],
                '无锡': [120.3442,31.5527],
                '日照': [119.2786,35.5023],
                '昆明': [102.9199,25.4663],
                '杭州': [119.5313,29.8773],
                '枣庄': [117.323,34.8926],
                '柳州': [109.3799,24.9774],
                '株洲': [113.5327,27.0319],
                '武汉': [114.3896,30.6628],
                '汕头': [117.1692,23.3405],
                '江门': [112.6318,22.1484],
                '沈阳': [123.1238,42.1216],
                '沧州': [116.8286,38.2104],
                '河源': [114.917,23.9722],
                '泉州': [118.3228,25.1147],
                '泰安': [117.0264,36.0516],
                '泰州': [120.0586,32.5525],
                '济南': [117.1582,36.8701],
                '济宁': [116.8286,35.3375],
                '海口': [110.3893,19.8516],
                '淄博': [118.0371,36.6064],
                '淮安': [118.927,33.4039],
                '深圳': [114.5435,22.5439],
                '清远': [112.9175,24.3292],
                '温州': [120.498,27.8119],
                '渭南': [109.7864,35.0299],
                '湖州': [119.8608,30.7782],
                '湘潭': [112.5439,27.7075],
                '滨州': [117.8174,37.4963],
                '潍坊': [119.0918,36.524],
                '烟台': [120.7397,37.5128],
                '玉溪': [101.9312,23.8898],
                '珠海': [113.7305,22.1155],
                '盐城': [120.2234,33.5577],
                '盘锦': [121.9482,41.0449],
                '石家庄': [114.4995,38.1006],
                '福州': [119.4543,25.9222],
                '秦皇岛': [119.2126,40.0232],
                '绍兴': [120.564,29.7565],
                '聊城': [115.9167,36.4032],
                '肇庆': [112.1265,23.5822],
                '舟山': [122.2559,30.2234],
                '苏州': [120.6519,31.3989],
                '莱芜': [117.6526,36.2714],
                '菏泽': [115.6201,35.2057],
                '营口': [122.4316,40.4297],
                '葫芦岛': [120.1575,40.578],
                '衡水': [115.8838,37.7161],
                '衢州': [118.6853,28.8666],
                '西宁': [101.4038,36.8207],
                '西安': [109.1162,34.2004],
                '贵阳': [106.6992,26.7682],
                '连云港': [119.1248,34.552],
                '邢台': [114.8071,37.2821],
                '邯郸': [114.4775,36.535],
                '郑州': [113.4668,34.6234],
                '鄂尔多斯': [108.9734,39.2487],
                '重庆': [107.7539,30.1904],
                '金华': [120.0037,29.1028],
                '铜川': [109.0393,35.1947],
                '银川': [106.3586,38.1775],
                '镇江': [119.4763,31.9702],
                '长春': [125.8154,44.2584],
                '长沙': [113.0823,28.2568],
                '长治': [112.8625,36.4746],
                '阳泉': [113.4778,38.0951],
                '青岛': [120.4651,36.3373],
                '韶关': [113.7964,24.7028]
            },
                BJData = [
                    [{name:'北京'}, {name:'上海',value:95}],
                    [{name:'北京'}, {name:'广州',value:90}],
                    [{name:'北京'}, {name:'大连',value:80}],
                    [{name:'北京'}, {name:'南宁',value:70}],
                    [{name:'北京'}, {name:'南昌',value:60}],
                    [{name:'北京'}, {name:'拉萨',value:50}],
                    [{name:'北京'}, {name:'长春',value:40}],
                    [{name:'北京'}, {name:'包头',value:30}],
                    [{name:'北京'}, {name:'重庆',value:20}],
                    [{name:'北京'}, {name:'常州',value:10}]
                ],
                SHData = [
                    [{name:'上海'},{name:'包头',value:95}],
                    [{name:'上海'},{name:'昆明',value:90}],
                    [{name:'上海'},{name:'广州',value:80}],
                    [{name:'上海'},{name:'郑州',value:70}],
                    [{name:'上海'},{name:'长春',value:60}],
                    [{name:'上海'},{name:'重庆',value:50}],
                    [{name:'上海'},{name:'长沙',value:40}],
                    [{name:'上海'},{name:'北京',value:30}],
                    [{name:'上海'},{name:'丹东',value:20}],
                    [{name:'上海'},{name:'大连',value:10}]
                ],
                GZData = [
                    [{name:'广州'},{name:'福州',value:95}],
                    [{name:'广州'},{name:'太原',value:90}],
                    [{name:'广州'},{name:'长春',value:80}],
                    [{name:'广州'},{name:'重庆',value:70}],
                    [{name:'广州'},{name:'西安',value:60}],
                    [{name:'广州'},{name:'成都',value:50}],
                    [{name:'广州'},{name:'常州',value:40}],
                    [{name:'广州'},{name:'北京',value:30}],
                    [{name:'广州'},{name:'北海',value:20}],
                    [{name:'广州'},{name:'海口',value:10}]
                ],
                planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
                convertData = function (data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var dataItem = data[i];
                        var fromCoord = geoCoordMap[dataItem[0].name];
                        var toCoord = geoCoordMap[dataItem[1].name];
                        if (fromCoord && toCoord) {
                            res.push({
                                fromName: dataItem[0].name,
                                toName: dataItem[1].name,
                                coords: [fromCoord, toCoord]
                            });
                        }
                    }
                    return res;
                },
                chart_b_colors = ['#7CB342', '#FB8C00', '#039BE5'];

            $scope.chart_b_data = [];
            [['Beijing', BJData], ['Shanghai', SHData], ['Guangzhou', GZData]].forEach(function (item, i) {
                $scope.chart_b_data.push({
                        name: item[0] + ' Top10',
                        type: 'lines',
                        zlevel: 1,
                        effect: {
                            show: true,
                            period: 6,
                            trailLength: 0.7,
                            color: '#fff',
                            symbolSize: 3
                        },
                        lineStyle: {
                            normal: {
                                color: chart_b_colors[i],
                                width: 0,
                                curveness: 0.2
                            }
                        },
                        data: convertData(item[1])
                    },
                    {
                        name: item[0] + ' Top10',
                        type: 'lines',
                        zlevel: 2,
                        symbol: ['none', 'arrow'],
                        symbolSize: 10,
                        effect: {
                            show: true,
                            period: 6,
                            trailLength: 0,
                            symbol: planePath,
                            symbolSize: 15
                        },
                        lineStyle: {
                            normal: {
                                color: chart_b_colors[i],
                                width: 1,
                                opacity: 0.6,
                                curveness: 0.2
                            }
                        },
                        data: convertData(item[1])
                    },
                    {
                        name: item[0] + ' Top10',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                formatter: '{b}'
                            }
                        },
                        symbolSize: function (val) {
                            return val[2] / 8;
                        },
                        itemStyle: {
                            normal: {
                                color: chart_b_colors[i]
                            }
                        },
                        data: item[1].map(function (dataItem) {
                            return {
                                name: dataItem[1].name,
                                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                            };
                        })
                    });
            });

            $scope.chart_b_options = {
                backgroundColor: '#404a59',
                title : {
                    text: 'Simulated migration',
                    subtext: 'The data is fictitious',
                    left: 'center',
                    top: 20,
                    textStyle : {
                        color: '#fff'
                    }
                },
                tooltip : {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    bottom: 10,
                    right: 10,
                    data:['Beijing Top10', 'Shanghai Top10', 'Guangzhou Top10'],
                    textStyle: {
                        color: '#fff'
                    },
                    selectedMode: 'single'
                },
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#323c48',
                            borderColor: '#404a59'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                }
            };

            // ---------- chart c
            var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'],
                chart_c_data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220],
                yMax = 500,
                dataShadow = [];

            for (var i = 0; i < chart_c_data.length; i++) {
                dataShadow.push(yMax);
            }

            $scope.chart_c_options = {
                title: {
                    text: 'Feature Sample',
                    subtext: 'Gradient Color, Shadow, Click Zoom'
                },
                xAxis: {
                    data: dataAxis,
                    axisLabel: {
                        inside: true,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    z: 10
                },
                yAxis: {
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#999'
                        }
                    }
                },
                dataZoom: [
                    {
                        type: 'inside'
                    }
                ]
            };
            $scope.chart_c_data = [
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {color: 'rgba(0,0,0,0.05)'}
                    },
                    barGap:'-100%',
                    barCategoryGap:'40%',
                    data: dataShadow,
                    animation: false
                },
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#F44336'},
                                    {offset: 0.5, color: '#F44336'},
                                    {offset: 1, color: '#E53935'}
                                ]
                            )
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#C62828'},
                                    {offset: 0.7, color: '#C62828'},
                                    {offset: 1, color: '#B71C1C'}
                                ]
                            )
                        }
                    },
                    data: chart_c_data
                }
            ];

            // ---------- chart d
            var base = +new Date(1968, 9, 3),
                oneDay = 24 * 3600 * 1000,
                date = [],
                data = [Math.random() * 300];

                for (var i = 1; i < 20000; i++) {
                    var now = new Date(base += oneDay);
                    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
                    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
                }
            $scope.chart_d_options = {
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                title: {
                    left: '0',
                    text: 'Large dataset'
                },
                toolbox: {
                    right: 30,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none',
                            title: {
                                zoom: 'zoom',
                                back: 'back'
                            }
                        },
                        restore: {
                            title: 'restore'
                        },
                        saveAsImage: {
                            title: 'save as image'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: date
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                },
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 10
                }, {
                    start: 0,
                    end: 10,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }]
            };
            $scope.chart_d_data = [
                {
                    name: 'Data',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: '#00838F'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#0097A7'
                            }, {
                                offset: 1,
                                color: '#80DEEA'
                            }])
                        }
                    },
                    data: data
                }
            ];

            // ---------- chart e
            $scope.chart_e_options = {
                title: {
                    text: 'Funnel',
                    subtext: 'fictitious data',
                    left: 'left',
                    top: 'bottom'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    orient: 'vertical',
                    top: 'center',
                    right: 30,
                    feature: {
                        dataView: {
                            readOnly: false,
                            title: 'dataview',
                            lang: ['Data View','Close','Refresh']
                        },
                        restore: {
                            title: 'restore'
                        },
                        saveAsImage: {
                            title: 'save as image'
                        }
                    }
                },
                color: ['#039BE5','#00897B','#C0CA33','#546E7A','#D81B60'],
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['Show', 'Click', 'Visit', 'Consult', 'Order']
                },
                calculable: true
            };
            $scope.chart_e_data = [
                {
                    name: 'funnel',
                    type: 'funnel',
                    width: '40%',
                    height: '45%',
                    left: '5%',
                    top: '50%',
                    data:[
                        {value: 60, name:'Show'},
                        {value: 30, name:'Click'},
                        {value: 10, name:'Visit'},
                        {value: 80, name:'Consult'},
                        {value: 100, name:'Order'}
                    ]
                },
                {
                    name: 'pyramid',
                    type: 'funnel',
                    width: '40%',
                    height: '45%',
                    left: '5%',
                    top: '5%',
                    sort: 'ascending',
                    data:[
                        {value: 60, name:'Show'},
                        {value: 30, name:'Click'},
                        {value: 10, name:'Visit'},
                        {value: 80, name:'Consult'},
                        {value: 100, name:'Order'}
                    ]
                },
                {
                    name: 'funnel',
                    type: 'funnel',
                    width: '40%',
                    height: '45%',
                    left: '55%',
                    top: '5%',
                    label: {
                        normal: {
                            position: 'left'
                        }
                    },
                    data:[
                        {value: 60, name: 'Show'},
                        {value: 30, name: 'Click'},
                        {value: 10, name: 'Visit'},
                        {value: 80, name: 'Consult'},
                        {value: 100, name: 'Order'}
                    ]
                },
                {
                    name: 'pyramid',
                    type: 'funnel',
                    width: '40%',
                    height: '45%',
                    left: '55%',
                    top: '50%',
                    sort: 'ascending',
                    label: {
                        normal: {
                            position: 'left'
                        }
                    },
                    data:[
                        {value: 60, name: 'Show'},
                        {value: 30, name: 'Click'},
                        {value: 10, name: 'Visit'},
                        {value: 80, name: 'Consult'},
                        {value: 100, name: 'Order'}
                    ]
                }
            ];

            $timeout(function() {
                $scope.chart_e_data = [{
                        name: 'funnel',
                        type: 'funnel',
                        width: '40%',
                        height: '45%',
                        left: '5%',
                        top: '50%',
                        data:[
                            {value: 22, name:'Show'},
                            {value: 22, name:'Click'},
                            {value: 44, name:'Visit'},
                            {value: 44, name:'Consult'},
                            {value: 66, name:'Order'}
                        ]
                    },{
                    name: 'pyramid',
                    type: 'funnel',
                    width: '40%',
                    height: '45%',
                    left: '5%',
                    top: '5%',
                    sort: 'ascending',
                    data:[
                        {value: 22, name:'Show'},
                        {value: 22, name:'Click'},
                        {value: 44, name:'Visit'},
                        {value: 44, name:'Consult'},
                        {value: 66, name:'Order'}
                    ]
                },{},{}]
            },5000)

        }
    ]);


