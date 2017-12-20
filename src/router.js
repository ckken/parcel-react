import Notfound from './Notfound'
import pages from 'pages/*/*/*.js'
console.log(`pages`, pages)
function catchMod(params) {
  params = Object.assign({ module: 'home', controller: 'home', action: 'index' }, params)
  const { module, controller, action } = params
  return pages[module][controller][action]
}
export const loadComponent = function () {
  return function (location, cb) {
    try {
      const mod = catchMod(location.params)
      mod && cb(null, mod) || cb(null, Notfound)
    } catch (e) {
      cb(null, Notfound)
    }
  }
}
export default function createRoutes() {
  return {
    path: '/',
    // component: main,
    // onEnter:oauth,
    indexRoute: {
      getComponent: loadComponent()
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
      { path: '*', component: Notfound }
    ]
  }
}
