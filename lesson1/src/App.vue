<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Calc v-if="!show" :key="2" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <Calc v-if="show" />
<Calc v-if="show" :key="1" />
<button @click="show = !show">click</button> -->
    <header class="header">My personal costs
    </header>
    <main>

      <AddPaymentFormVue @add-payment="addPayment" />
      <PaymentsDisplay :paymentsList="paymentsList " show />
    </main>
  </div>

</template>
<!-- :show="true" - можно просто написать show и будет подразумевать что true -->
<script>
/* import HelloWorld from './components/HelloWorld.vue'
import Calc from './components/Calc.vue' */
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentFormVue from './components/AddPaymentForm.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Calc
    PaymentsDisplay,
    AddPaymentFormVue
  },
  data: () => ({
    // show: true
    paymentsList: []
  }),
  methods: {
    fetchPaymentsData() {
      return [
        {
          Date: '28.03.2020',
          Category: 'Food',
          Value: 169
        },
        {
          Date: '24.03.2020',
          Category: 'Transport',
          Value: 360
        },
        {
          Date: '24.03.2020',
          Category: 'Food',
          Value: 532
        }
      ]
    },
    addPayment(data) {
      console.log('App.vue: ', data)
      this.paymentsList.push(data)
    }
  },
  created() {
    this.paymentsList = this.fetchPaymentsData()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 25px;
  margin-bottom: 15px;
}
</style>
