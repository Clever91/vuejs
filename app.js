
// create simpel hello component
Vue.component("say", {
  props: ['message'],
  template: `
    <div>
      <h3> {{ message }} </h3>
    </div>
  `,
  data() {
    return {}
  }
});

// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});


// create product component
Vue.component("product", {
  props: {
    premium: {
      type: String,
      required: true
    }
  },
  template: `
    <div>
      <h3>Cart ( {{ cart.length }} )</h3>
      <h1>{{ title }}</h1>
      Shipping: {{ shipping }}

      <img :src="image"
          alt="Green Sock"
          width="500px"
          height="500px">


      <div v-for="(image, index) in product.images"
          :key="image.id"
          @mouseover="updateProductImage(index, image.url)"
          class="color-box"
          :style="image.style"></div>

      <button type="button"
            name="button"
            v-on:click="addToCart(product)"
            :disabled="inStock"
            :class="{ disabledButton: !product.inStock }">Add Cart</button>
    </div>
  `,
  data() {
    return {
      product: {
        productId: 123,
        title: "Sock",
        price: 26000,
        images: [
          {
            id: 12,
            name: "Green Sock",
            url: "./images/sock-green.jpg",
            quality: 10,
            style: {
              backgroundColor: 'green',
              width: '40px',
              height: '40px',
              margin: '5px',
              border: '1px solid black',
            },
          },
          {
            id: 13,
            name: "White Sock",
            url: "./images/sock-white.jpg",
            quality: 0,
            style: {
              backgroundColor: 'white',
              width: '40px',
              height: '40px',
              margin: '5px',
              border: '1px solid black',
            },
          }
        ],
        selectedIndex: 0
      },
      cart: [],
    }
  },
  methods: {
    updateProductImage(index, url) {
      this.product.selectedIndex = index;
      console.log(this.product.selectedIndex);
    },
    addToCart(product) {
      this.cart.push(product);
    }
  },
  computed: {
    title() {
      return this.product.title + " (" + this.product.price + " sum) ";
    },
    image() {
      return this.product.images[this.product.selectedIndex].url;
    },
    inStock() {
      return this.product.images[this.product.selectedIndex].quality > 0;
    },
    shipping() {
      if (this.premium)
        return "Free";

      return "99.9$";
    }
  }
});


var app = new Vue({
  el: "#app",
  data: {
    premium: true
  }
});
