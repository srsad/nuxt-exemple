<template>
  <div class="container">
    <!-- проходимся циклом, где element - это отдельный массива, idx шаг,  -->
    <!-- из того, что нас интересует, :item="element" - мы передаем отдельный элемент в нашу карточку  -->
    <div class="row mt-2">
      <app-card
        v-for="(element, idx) in $store.getters['article/articles']"
        :key="idx"
        :item="element"
      />
      <!--  -->
      <div class="col-12">
        <hr />
      </div>
      <div class="col-md-3">
        <form @submit.prevent="create" action="">
          <div class="mb-10">
            <h3 class="text-center">Добавить</h3>
            <div class="form-group">
              <input
                v-model="form.title"
                class="form-control"
                type="text"
                placeholder="заголовок"
              />
            </div>
          </div>
          <div class="mb-10">
            <div class="form-group">
              <input
                v-model="form.desc"
                class="form-control"
                type="text"
                placeholder="описание"
              />
            </div>
          </div>
          <div>
            <button
              @click.prevent="create"
              class="btn btn-success"
              type="submit"
            >
              Добавить карточку
            </button>
          </div>
        </form>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
import AppCard from '~/components/Card.vue'

export default {
  components: {
    AppCard
  },
  data() {
    return {
      form: {
        title: '',
        desc: ''
      }
    }
  },
  // срабатывает на стороне сервера, до рендера страницы
  async fetch({ store }) {
    // загружаем данные в хранилище из БД
    await store.dispatch('article/fetchItems')
  },
  methods: {
    async create() {
      // если не заполненн заголовок
      if (!this.form.title) {
        this.$bvToast.toast('Заполните заголовок', {
          title: 'Ошибка',
          variant: 'danger',
          solid: true
        })
        return false
      }
      try {
        // создаем запись
        await this.$axios.$post('/api/article/create', this.form)
        // обновляем список записей
        await this.$store.dispatch('article/fetchItems')
        // отчищаем форму
        this.form.title = ''
        this.form.desc = ''
      } catch (e) {
        console.error('error', e.response.data.message)
      }
    }
  }
}
</script>
