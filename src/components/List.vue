<template>
  <div class="product-list">
    <TheProduct class="card"
                v-for="product in products"
                :key="product.id"
                :product="product"
                :currency="currency"/>
  </div>
</template>

<script>
import TheProduct from "@/components/TheProduct.vue";

export default {
  components: {TheProduct},
  props: {
    products: {
      type: Array,
      required: true,
      default: () => [],
    },
    currency: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
}

</style>
