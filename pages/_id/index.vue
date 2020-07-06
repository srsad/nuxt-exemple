<template>
  <div class="container">
    <div class="row">
      <div class="col-2 mt-2">
        <nuxt-link class="btn btn-dark" to="/">На главную</nuxt-link>
      </div>
      <div class="col-2 mt-2">
        <button @click="remove" class="btn btn-danger" type="submit">
          Удалить
        </button>
      </div>
      <div class="col-12 mt-2">
        <h1>{{ page.title }}</h1>
        <hr />
        <p>{{ page.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    try {
      const page = await $axios.$get(`/api/article/get/${params.id}`)
      return { page }
    } catch (error) {
      return { page: {} }
    }
  },
  methods: {
    async remove() {
      await this.$axios.$delete(`/api/article/remove/${this.page._id}`)
      this.$router.push('/')
    }
  }
}
</script>
