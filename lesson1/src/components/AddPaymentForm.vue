<template>
  <div class="container">
    <div v-show="show" class="hidden">
      <input type="text" placeholder="Amount" v-model="value">
      <input type="text" placeholder="Type" v-model="category">
      <input type="text" placeholder="Date" v-model="date">
      <button @click="addPayment">ADD </button>
    </div>
    <button class="buttonAdd" @click="unHiddenForm()">{{ button.text}}</button>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  data: () => ({
    value: '',
    category: '',
    date: '',
    show: false,
    button: {
      text: 'ADD NEW COST +'
    },
  }),
  methods: {
    addPayment() {
      console.log('add', this.currentDAte)
      const { value, category, date, currentDAte } = this
      const data = {
        value,
        category,
        date: date || currentDAte
      }
      /* console.log(data) */
      this.$emit('add-payment', data)
    },
    unHiddenForm() {
      this.show = this.show ? false : true

      if (this.button.text = 'ADD NEW COST +') {
        this.button.text = 'Hide form'
      } else {
        this.button.text = 'ADD NEW COST +'
      }
    }
  },
  computed: {
    currentDAte() {
      const currentDAte = new Date()
      const day = currentDAte.getDate()
      const month = currentDAte.getMonth() + 1
      const year = currentDAte.getFullYear()
      return `${day}.${month}.${year}`
    }
  }
}
</script>

<style scoped>
.buttonAdd {
  background-color: aqua;
  border: 0;
}
</style>
