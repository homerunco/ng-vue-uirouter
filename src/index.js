import RouterLink from './components/RouterLink.vue'

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

        Vue.prototype.$router = Vue.$router = {
          push (data) {
            const name = typeof data === 'string' ? data : data.name
            const params = data.params

            if (params) {
              $state.go(name, params)
            } else {
              $state.go(name)
            }
          },

          get currentRoute () {
            return currentRoute()
          }
        }

        Object.defineProperty(Vue.prototype, '$route', {
          get () {
            return currentRoute()
          }
        })

        Vue.component('router-link', RouterLink)
      }
    }
  }])
