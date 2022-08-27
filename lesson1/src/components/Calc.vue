<template>
  <div>
    <div class="main">
      <input type="number" v-model.number="op1">
      <input type="number" v-model.number="op2">
      = {{ result }}
    </div>
    <div class="keyboard"></div>
    <!-- <button @click="result = op1 + op2">+</button> -->
    <button @click="sum">+</button>
    <button @click="sub">-</button>
    <button @click="div">/</button>
    <button @click="mult">*</button>
    <button @click="MathPow">{{ this.op1 }} в степени {{ this.op2 }}</button>
    <button @click="MathFloor">Целое число от деления {{ this.op1 }} на {{ this.op2 }}</button>
  </div>

</template>

<script>
export default {
  /* eslint-disable */
  name: 'Calc',
  data: () => ({
    op1: 0,
    op2: 0,
    result: 0
  }),
  methods: {
    sum() {
      this.result = this.op1 + this.op2
    },
    div() {
      this.result = this.op1 / this.op2
    },
    sub() {
      this.result = this.op1 - this.op2
    },
    mult() {
      this.result = this.op1 * this.op2
    },
    MathPow() {
      this.result = Math.pow(this.op1, this.op2)
    },
    MathFloor() {
      this.result = Math.floor(this.op1 / this.op2)
    }
  }
}
</script>
