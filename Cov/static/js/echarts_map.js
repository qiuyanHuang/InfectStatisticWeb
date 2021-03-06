var echarts_map = echarts.init(document.getElementById('centerB'),"vintage");

var mydata = [{'name': '上海', 'value': 318},{'name': '云南', 'value': 162}]

var echarts_map_option = {
    title: {
        text: '',
        subtext: '',
        x: 'left'
    },
    tooltip: {
        trigger: 'item'
    },
    //左侧小导航图标
    visualMap: {
        show: true,
        x: 'left',
        y: 'bottom',
        textStyle: {
            fontSize: 8,
        },
        splitList: [{ start: 1,end: 9},
                    { start: 10,end: 99},
                    { start: 100,end: 999},
                    { start: 1000,end: 9999},
                    { start: 10000}],
        color: ['#8A3310', '#C64918', '#E55825', '#F2AD92', '#F9DCD1']
    },
    //配置属性
    series: [{
        name: '累计确诊人数',
        type: 'map',
        mapType: 'china',
        roam: false,
        itemStyle: {
            normal: {
                borderWidth: .5,//区域边框宽度
                borderColor: '#009fe8',//区域边框颜色
                areaColor: "#ffefd5",//区域颜色
            },
            emphasis: {//鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor: "#fff",
            }
        },
        label: {
            normal: {
                show: true,//省份名称
                fontSize: 8,
            },
            emphasis: {
                show: true,
                fontSize: 8,
            }
        },
        data: mydata
    }]
};


echarts_map.setOption(echarts_map_option)


echarts_map.on("click", function(param) {

    location.href = "detail.html";
    //window.localStorage.setItem('province_name',JSON.stringify(param.name))
    window.open("http://localhost:63342/yiqing/templates/detail.html?_ijt=o1ccmsli15le4pk0eeqr8cjprd","_self");
});


