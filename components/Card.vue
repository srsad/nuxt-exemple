<template>
  <div class="col-md-4 mb-2">
    <!-- nuxt-link работает как тэг a, но не перезагружает страницу -->
    <nuxt-link :to="item._id" class="card">
      <div class="card-body">
        <h4 class="card-title">{{ item.title }}</h4>
        <p class="card-text">{{ item.desc }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  // в props, мы перечисляем параметры которые будем передавать
  // в данном примере мы передаем только один элемент, который является объектом и является обязательным
  props: {
    item: {
      type: Object,
      required: true
    }
    // например так могбы выглядеть второй параметр
    // cardNumber: {
    //   type: Number,
    //   default: 5
    // }
  }
}
</script>
