Vue.use(SemanticUIVue)

// App
let app = new Vue({
	el: "#app",
  data() {
		return {
			sales: []
		}
	},
  created() {
		this.fetchSales()
	},
	updated() {
		setInterval(() => this.fetchSales(), 30000)
	},
  methods: {
		fetchSales() {
			axios
				.get(`http://0.0.0.0:8000/api/sales?status=tentative`)
				.then(response => this.sales = response.data)
		},
		moment(date) {
			return moment(date)
		}
  },
})
