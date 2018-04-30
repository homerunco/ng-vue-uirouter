<template>
  <a v-if="tag === 'a'" :href="href">
    <slot />
  </a>
  <component v-else @click="navigate" :is="tag">
    <slot />
  </component>
</template>

<script>
  export default {
    name: 'RouterLink',

    props: {
      to: {
        required: true
      },
      tag: {
        default: 'a'
      }
    },

    computed: {
      href () {
        return this.$state.href(this.to.name, this.to.params, {
          absolute: true
        })
      }
    },

    methods: {
      navigate () {
        this.$router.push(this.to.name, {
          params: this.to.params || {}
        })
      }
    }
  }
</script>
