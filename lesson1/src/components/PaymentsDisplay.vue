<template>
    <!--    <div v-if="show">{{ paymentsList}}</div> -->
    <div>
        <div v-for="(payment, index) in paymentsList" :key=" index">{{ payment}}</div>
    </div>
</template>

<script>
    export default {
        name: 'PaymentDisplay',
       // props: ['paymentsList']
      /*  props: {
        paymentsList: Array,
        show: Boolean
       }, */
       props: {
        paymentsList: {
            type: Array,
            default: () => ([])
        },
        show: Boolean
       },
       mounted () {
        this.paymentsList.forEach((i) => {
         /*    console.log(i) */
    })
  }
}
</script>

<style scoped>
</style>
