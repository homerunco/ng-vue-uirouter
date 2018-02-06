import NgLink from './components/NgLink.vue'

angular.module('ngVueUIRouter', ['ui.router'])
  .factory('$ngVueUIRouter', ['$state', ($state) => {
    return {
      install (Vue) {
        Vue.prototype.$state = $state

        const currentRoute = () => {
          const { $current, params } = $state
          const { name } = $current.self
          const fullPath = $state.href(name, params, {
            absolute: true
          })

          return {
            name,
            params,
            fullPath,
            path: fullPath
          }
        }

        Vue.prototype.$uiRouter = Vue.$uiRouter = {
          push (name, { params }) {
            $state.go(name, params)
          },

          get currentRoute () {
            return currentRoute()
          }
        }

        Object.defineProperty(Vue.prototype, '$uiRoute', {
          get () {
            return currentRoute()
          }
        })

        Vue.component('ng-link', NgLink)
      }
    }
  }])
