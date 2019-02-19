import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/system',
  name: 'system',
  meta,
  redirect: { name: 'system-index' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'base',
      name: `${pre}base`,
      component: () => import('@/pages/system/base'),
      meta: {
        ...meta,
        title: '基础设置'
      }
    },
    {
      path: 'sequence',
      name: `${pre}sequence`,
      component: () => import('@/pages/system/sequence'),
      meta: {
        ...meta,
        title: '自动序号'
      }
    },
    {
      path: 'meddleFlow',
      name: `${pre}meddleFlow`,
      component: () => import('@/pages/system/meddleFlow'),
      meta: {
        ...meta,
        title: '流程干预'
      }
    },
    {
      path: 'quickSearch',
      name: `${pre}quickSearch`,
      component: () => import('@/pages/system/quickSearch'),
      meta: {
        ...meta,
        title: '工具栏快捷搜索'
      }
    },
    {
      path: 'labels',
      name: `${pre}labels`,
      component: () => import('@/pages/system/labels'),
      meta: {
        ...meta,
        title: '多语言标签'
      }
    }
  ])('system-')
}
