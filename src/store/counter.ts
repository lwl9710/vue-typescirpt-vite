import { defineStore } from "pinia";

export default defineStore({
  id: "counter",
  state: () => {
    return {
      count: 0
    }
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
})
