export default {
  path: '/system',
  title: '系统设置',
  icon: 'gear',
  children: (pre => [
    {
      title: '基础设置',
      icon: 'superpowers',
      path: `${pre}base`
    },
    {
      title: '自动序号',
      icon: 'circle',
      path: `${pre}sequence`
    },
    {
      title: '流程干预',
      icon: 'bullseye',
      path: `${pre}meddleFlow`
    },
    {
      title: '工具栏快捷搜索',
      icon: 'search',
      path: `${pre}quickSearch`
    },
    {
      title: '多语言标签',
      icon: 'bookmark',
      path: `${pre}labels`
    }
  ])('/system/')
}
