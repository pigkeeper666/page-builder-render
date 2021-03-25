const schema = {
  id: '1',// 可有可无
  name: 'Input', // 组件名称
  attr: { // 组件可编辑的props
    size: 'large',
    defaultValue: '外部input1'
  },
  path: 'https://cdn/.....', // 组件下载cdn地址
  children: [ // 子元素
    {
      id: '2',
      name: 'Input',
      description: '用于输入内容',
      attr: {
        size: 'small',
        defaultValue: '外部input2'
      }
    }
  ]
}