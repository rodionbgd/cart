<template>
  <div v-if="cart.length">
    <h2>Список продуктов</h2>
    <div class="cart-list">
      <div v-for="item in products" :key="item.id">
        {{ item.title }} : {{ item.amount }}
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState(["cart"]),
    // Англоязычное именование переменной
    products() {
      return this.cart.sort((a, b) => {
        return b.date - a.date;
      });
    },
  },
};
</script>

<style>

</style>
