<template>
  <HelloMessage :title="title"></HelloMessage>
  <div class="controls">
    <el-button size="small" type="primary" @click="increment">点我递增</el-button>
    <el-button size="small" type="primary" @click="decrement">点我递减</el-button>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import useCounterStore from "@/store/counter";
const counterStore = useCounterStore();
const title = computed(() => {
  return `当前计时器的值: ${ counterStore.count }`;
})

// 递增计时器的值
function increment() {
  ElMessage.success("增加成功");
  counterStore.increment();
}

// 递减计时器的值
function decrement() {
  ElMessage.success("减少成功");
  counterStore.decrement();
}
</script>
