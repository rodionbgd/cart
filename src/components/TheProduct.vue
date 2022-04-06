<template>
  <div class="product">
    <h2 class="product__title">{{ product.title }}</h2>
    <div>
      <img class="product__image" :src="`${publicPath}${product.image}`" :alt="product.id" >
    </div>
    <h2 class="product__title">{{ product.price }}</h2>
    <div class="product__adding">
      <input type="number" min="1"
             v-model.number="amount"
             @keypress.enter="addToCart">
      <span>кг</span>
      <button class="product__btn"
              @click="addToCart">&#128722;
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

const publicPath = process.env.NODE_ENV === 'production' ? '/cart/' : './'
console.log(publicPath);
export default {
  name: "TheProduct",
  props: {
    product: {
      type: Object,
      default: () => {
      },
    },
    currency: {
      type: String,
      required: true,
      default: "",
    }
  },
  data() {
    return {
      amount: 1,
      publicPath,
    }
  },
  methods: {
    ...mapActions(["addProduct"]),
    addToCart() {
      if (!this.amount) {
        return;
      }
      const product = {
        ...this.product,
        amount: this.amount,
        date: new Date(),
      }
      this.addProduct(product);
      this.amount = 1;
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  vertical-align: top;
}

hr {
  border: 0;
  height: 3px;
  width: 30px;
  background-color: #cf092c;
  margin: 22px 0 20px;
}

a {
  text-decoration: none;
  color: inherit;
}

p {
  margin: 0 0 1.5em 0;
}

p:last-child {
  margin-bottom: 0;
}

@media only screen and (max-width: 420px) {
  .product {
    max-width: 100%;
  }
}

@media only screen and (min-width: 420px) {
  .product {
    max-width: calc(100% / 2);
  }
}

@media only screen and (min-width: 840px) {
  .product {
    max-width: calc(100% / 3);
  }
}

.product {
  flex: 1 1 auto;
  display: inline-block;
  width: 100%;
  border: 1px solid #908888;
  text-align: center;
  padding: 40px;
  border-radius: 8px;
  background-color: #fff;
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 30px 25px -20px rgba(0, 0, 0, 0.15);
}

.product__image {
  width: 100%;
  margin: -5px -40% 30px;
  max-width: none;
}

.product__title {
  font-size: 30px;
  color: #000;
  margin: 0 0 0.5em 0;
  line-height: 1.1;
}

.product__adding > * {
  padding: .5rem;
}

.product__btn {
  display: inline-block;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  border-radius: 5px;
  background-color: white;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 30px 25px -20px rgba(0, 0, 0, 0.15);
}

.product__btn:hover {
  cursor: pointer;
  box-shadow: 0 36px 28px -20px rgba(0, 0, 0, 0.2);
  background-color: rgba(69, 192, 203, 0.55);
}
</style>