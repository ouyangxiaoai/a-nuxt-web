let color = ['#57687c', '#ffffff', '#f9690e', '#a6c84c', '#ffa022', '#46bee9']

export default {
  tooltip: {
    trigger: 'item',
    formatter: '{b}'
  },
  series: [
    {
      name: '中国',
      type: 'map',
      mapType: 'china',
      selectedMode: 'single',
      zoom: 1.2,
      label: {
        normal: {
          show: true,
          textStyle: {
            color: '#fff'
          }
        },
        emphasis: {
          show: true,
          textStyle: {
            color: '#ccc'
          }
        }
      },
      lineStyle: {
        normal: {
          color: color[0],
          width: 0,
          curveness: 0.2
        }
      },
      itemStyle: {
        normal: {
          color: '#b1d0ec',
          borderColor: '#404a59',
          areaColor: '#57687c'
        },
        emphasis: {
          color: '#4a535d',
          areaColor: '#4a535d'
        }
      },
      data: [
        {name: '北京', selected: false, id: '11'},
        {name: '天津', selected: false, id: '12'},
        {name: '河北', selected: false, id: '13'},
        {name: '山西', selected: false, id: '14'},
        {name: '内蒙古', selected: false, id: '15'},
        {name: '辽宁', selected: false, id: '21'},
        {name: '吉林', selected: false, id: '22'},
        {name: '黑龙江', selected: false, id: '23'},
        {name: '上海', selected: false, id: '31'},
        {name: '江苏', selected: false, id: '32'},
        {name: '浙江', selected: false, id: '33'},
        {name: '安徽', selected: false, id: '34'},
        {name: '福建', selected: false, id: '35'},
        {name: '江西', selected: false, id: '36'},
        {name: '山东', selected: false, id: '37'},
        {name: '河南', selected: false, id: '41'},
        {name: '湖北', selected: false, id: '42'},
        {name: '湖南', selected: false, id: '43'},
        {name: '广东', selected: true, id: '44'},
        {name: '广西', selected: false, id: '45'},
        {name: '海南', selected: false, id: '46'},
        {name: '重庆', selected: false, id: '50'},
        {name: '四川', selected: false, id: '51'},
        {name: '贵州', selected: false, id: '52'},
        {name: '云南', selected: false, id: '53'},
        {name: '西藏', selected: false, id: '54'},
        {name: '陕西', selected: false, id: '61'},
        {name: '甘肃', selected: false, id: '62'},
        {name: '青海', selected: false, id: '63'},
        {name: '宁夏', selected: false, id: '64'},
        {name: '新疆', selected: false, id: '65'},
        {name: '台湾', selected: false, id: '71'},
        {name: '香港', selected: false, id: '81'},
        {name: '澳门', selected: false, id: '82'},
        {name: '南海诸岛', selected: false, id: '83'}
      ]
    }
  ]
}
