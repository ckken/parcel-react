import Notfound from './Notfound'
function errorLoading(cb) {
  return (...arg) => {
    let t = ''
    arg.map((d) => {
      t += `${d}\n`
    })
    console.error(t)
    cb(null, Notfound)
  }
}

function loadRoute(location, cb, key) {
  return (module) => cb(null, module)
}

export const loadComponent = function (defaultKey = false) {
  return function (location, cb) {
    let key = defaultKey
    if (!key) {
      key = `${location.params.module}/${location.params.controller}`
      if (location.params.action) {
        key = `${key}/${location.params.action}`
      }
    }
    //::TODO dynamic load any pages
    // import(`src/pages/${key}/index.js`).then(loadRoute(location, cb, key)).catch(errorLoading(cb))
    import(`./pages/index`).then(loadRoute(location, cb, key)).catch(errorLoading(cb))
  }
}
export default function createRoutes() {
  return {
    path: '/',
    // component: main,
    // onEnter:oauth,
    indexRoute: {
      getComponent: loadComponent('home')
    },
    childRoutes: [
      {
        path: ':module/:controller',
        getComponent: loadComponent()
      },
      // 独立子页面
      {
        path: ':module/:controller/:action',
        getComponent: loadComponent()
      },
      {path: '*', component: Notfound}
    ]
  }
}
