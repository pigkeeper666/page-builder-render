const plugins = {}

export const registerPlugin = (pluginName, desciptor) => {
  console.log('注册')
  plugins[pluginName] = desciptor
}

export const callPlugins = () => {
  console.log('plugins', plugins)
  Object.keys(plugins).forEach(name => {
    const desciptor = plugins[name]
    desciptor()
  })
}

