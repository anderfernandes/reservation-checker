// Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(
      function(registration) {
        // Registration was successful
        console.log(
          'ServiceWorker registration successful with scope: ',
          registration.scope
        )
      },
      function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err)
      }
    )
  })
}
// App
const app = new Vue({
  el: '#app',
  data() {
    return {
      sales: []
    }
  },
  created() {
    this.fetchSales()
    setInterval(() => this.fetchSales(), 30000)
  },
  methods: {
    fetchSales() {
      axios
        .get(`https://astral.ctcd.org/api/sales?status=tentative`)
        .then(response => (this.sales = response.data.data))
    },
    format(date, mask) {
      return 'a'
    }
  }
})
