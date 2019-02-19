import request from '@/plugin/axios'

export function EmailData (data) {
  return request({
    url: '/system/base/components/email',
    method: 'get',
    data
  })
}