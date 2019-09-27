var app = new Vue({
  el: "#app",
  data: {
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
    }
  }
});
