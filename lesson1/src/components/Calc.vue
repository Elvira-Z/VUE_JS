/* eslint-disable */
<template>
  <div>
    <div class="error" v-if="error">{{ error }}</div>
    <!-- <div class="error" v-show="error">{{ error }}</div> -->
    <div class="main">
      <input type="number" v-model.number="op1">
      <input type="number" v-model.number="op2">
      = {{ result }}
    </div>
    <div class="keyboard">
      <!--  <button @click="calculate('+')">+</button>
      <button @click="calculate('-')">-</button>
      <button @click="calculate('/')">/</button>
      <button @click="calculate('*')">*</button>
      <button @click="calculate('^')">{{ this.op1 }} в степени {{ this.op2 }}</button>
      <button @click="calculate('//')">Целое число от деления {{ this.op1 }} на {{ this.op2 }}</button> -->
      <button v-for="operation of operations" @click="calculate(operation)" :key="operation">{{ operation }}</button>
      <br>
      <div>
        <input type="checkbox" id="checkbox" v-model="checkBoxDisplay" @click="checkBoxDisplay = !checkBoxDisplay">
        Отобразить экранную клавитуру
      </div>
      <div v-if="checkBoxDisplay">
        <button v-for="item of numbers" :key="item" @click="selectedNumbers(item)">
          {{ item }}</button>
        <button @click="backSpace">Backspace</button>
        <br>

        <input type="radio" v-model="selected" value="op1" id="op1">Операнд 1
        <input type="radio" v-model="selected" value="op2" id="op2">Операнд 2
      </div>

    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'Calc',
  data: () => ({
    op1: 0,
    op2: 0,
    result: 0,
    error: '',
    operations: ['+', '-', '/', '*', '^', '//'],
        numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    checkBoxDisplay: false,
    selected: 'op1'
  }),
  methods: {
    calculate(operation) {
      this.error = ''
      switch (operation) {
        case '+': return this.sum()
        case '-': return this.sub()
        case '/': return this.div()
        case '*': return this.mult()
        case '^': return this.MathPow()
        case '//': return this.MathFloor()
      }
    },
    sum() {
      const { op1, op2 } = this
      this.result = op1 + op2
    },
    div() {
      const { op1, op2 } = this
      if (op2 === 0) {
        this.error = 'На ноль делить нельзя'
        return
      }
      this.result = op1 / op2
    },
    sub() {
      const { op1, op2 } = this
      this.result = op1 - op2
    },
    mult() {
      const { op1, op2 } = this
      this.result = op1 * op2
    },
    MathPow() {
      const { op1, op2 } = this
      this.result = Math.pow(op1, op2)
    },
    MathFloor() {
      const { op1, op2 } = this
      if (op2 === 0) {
        this.error = 'На ноль делить нельзя'
        return
      }
      this.result = Math.floor(op1 / op2)
    },
    selectedNumbers(item) {
      const selectedItemsValue = this[this.selected]
      if (typeof selectedItemsValue === 'number') {
        this[this.selected] = Number(`${selectedItemsValue}${item}`);
      }
    },
    backSpace() {
      const selectedItemsValue = this[this.selected]
      if (typeof selectedItemsValue === 'number') {
        this[this.selected] = Math.trunc(selectedItemsValue / 10);
;
      }
    }
    
  }
}
</script>














