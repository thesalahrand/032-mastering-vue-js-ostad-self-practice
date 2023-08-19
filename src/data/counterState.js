import { reactive } from 'vue'

const counter = reactive({
  count: 0,
  increase() {
    this.count++
  },
  decease() {
    this.count--
  },
})

export default counter
