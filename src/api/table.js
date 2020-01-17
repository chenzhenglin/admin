import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}

// 日志列表
export function getLogList(params) {
  return request({
    url: '/log/list',
    method: 'get',
    params
  })
}

// 分组列表
export function getGroupList(params) {
  return request({
    url: '/group/list',
    method: 'get',
    params
  })
}
