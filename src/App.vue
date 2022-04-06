<template>
  <div id="app">
    <Header :currency="currency"></Header>
    <List :products="products" :currency="currency"/>
    <Cart/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import List from './components/List.vue';
import Cart from './components/Cart.vue';
import {mapState, mapActions} from "vuex";

export default {
  name: 'App',
  components: {
    Header,
    List,
    Cart,
  },
  data() {
    return {
      currency: 'VGTB',
      cart: [],
    };
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(["getProductsList"]),
    startPricesMonitoring() {
      setInterval(this.getProductsList, 2000);
    },
  },
  async created() {
    this.getProductsList();
    await this.startPricesMonitoring();
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
