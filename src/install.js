const requireComponents = require.context('./elementLibs/', true, /\.vue$/)

const install = app => {
  if (install.installed) return
  requireComponents.keys().forEach(item => {
    const com = requireComponents(item)
    const componentName = com.default.name
    app.component(componentName, com.default)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue) // window中有Vue时去install()
}

export default install
