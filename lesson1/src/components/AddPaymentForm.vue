<template>
  <div>
    <div>
      <input type="text" placeholder="Amount" v-model="value">
      <input type="text" placeholder="Type" v-model="category">
      <input type="text" placeholder="Date" v-model="date">
      <button @click="addPayment">Add</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddPaymentForm',
      data: () => ({
          value: '',
          category: '',
          date: ''
        }),
        methods: {
            addPayment () {
                console.log('add', this.currentDAte)
                const { value, category, date, currentDAte } = this
const data = {
  value,
  category,
  date: date || currentDAte
    }
/* console.log(data) */
this.$emit('add-payment', data)
              }
        },
        computed: {
          currentDAte () {
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
</style>
