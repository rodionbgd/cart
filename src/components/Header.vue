<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ cartPrice }} {{ currency }}</h3>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'Header',
  props: {
    currency: {
      type: String,
      required: true,
      default: "",
    },
  },
  computed: {
    cartPrice() {
      let sum = 0;
      this.cart.forEach((item) => {
        sum += item.price * item.amount;
      });
      return parseFloat(sum.toPrecision(5));
    },
    ...mapState(["cart"]),
  },
}
</script>

<style scoped>
.header {
  padding: 10px;
  background: #e5e5e5;
}
</style>
