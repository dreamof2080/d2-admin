const db = [
  { flag: '2', server: 'mail.bestlink.com.cn', port: '25', address: 'njjhoa@bestlink.com.cn',isOauth: '1',account: 'njjhoa@bestlink.com.cn',password: 'bestlink',url: 'http://oa.bestlink.com.cn:8088'  }
]

export default [
  {
    path: '/api/system/base/components/email',
    method: 'get',
    handle () {
      return {
        code: 0,
        msg: '获取邮箱设置信息成功',
        data: {
          list: db
        }
      }
    }
  }
]
