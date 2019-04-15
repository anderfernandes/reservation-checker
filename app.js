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
		setInterval(() => this.fetchSales(), 30000)
	},
  methods: {
		fetchSales() {
			axios
				.get(`https://astral.ctcd.org/api/sales?status=tentative`)
				.then(response => this.sales = response.data)
		},
		moment(date) {
			return moment(date)
		}
  },
})
