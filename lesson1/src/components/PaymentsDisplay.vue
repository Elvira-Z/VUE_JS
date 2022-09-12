<template>
    <!--    <div v-if="show">{{ paymentsList}}</div> -->
    <div class="container">
        <table class="table">
            <tr class="headerTable">
                <th>№</th>
                <th v-for="(alue, name) in paymentsList[0]">{{ name }}</th>
            </tr>
            <tr v-for="(item, index) in paymentsList" :key="index" class="tableInfo">
                <th>{{ index+1 }}</th>
                <th>{{ item.Date }}</th>
                <th>{{ item.Category }}</th>
                <th>{{ item.Value }}</th>
            </tr>
        </table>
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
    mounted() {
        this.paymentsList.forEach((i) => {
            /* console.log(i) */
        })
    }
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.table {
    width: 750px;
    margin-top: 50px;
}

.headerTable {
    background-color: aquamarine;
    padding: 2px;
    font-size: 20px;
}

.tableInfo {
    font-size: 18px;
}
</style>
