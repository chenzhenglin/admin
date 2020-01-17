import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

const logData = Mock.mock({
  'items|10': [{
    id: '@id',
    created_time: '@datetime',
    'username|1': ['bestv', 'bestv001', 'bestv002'],
    'action_detail|1': [
      '切换编排方式：切换行组内容编排【行id:157】',
      '快捷栏编辑：关闭快捷栏【EPG7正式分组】',
      '添加内容：添加行组内容【播客频道/行id:179】',
      '编辑内容：编辑行组内容【行id:157】'
    ],
    action: function() {
      return this.action_detail.split('：')[0]
    },
    action_module: '运营编排'
  }]
})

const groupData = Mock.mock({
  'items|10': [{
    id: '@id',
    publish_time: '@datetime',
    'groupName|1': ['EPG7正式分组', 'EPG7测试分组', 'EPG7横版正式分组', 'EPG7横版测试分组'],
    'jsonName|1': [
      'g2',
      'g3',
      'g4',
      'g5'
    ],
    'version|1': ['EPG7竖版', 'EPG7横版'],
    'pageName|1': ['时尚版首页', '少儿版首页', '老人版首页', '地图'],
    'tabCount': 12,
    'rowCount': 10
  }]
})

export default [
  {
    url: '/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/log/list',
    type: 'get',
    response: config => {
      const items = logData.items
      return {
        code: 20000,
        data: {
          totle: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/group/list',
    type: 'get',
    response: config => {
      const items = groupData.items
      return {
        code: 20000,
        data: {
          totle: items.length,
          items: items
        }
      }
    }
  }
]
