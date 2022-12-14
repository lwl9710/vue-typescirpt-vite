<template>
<div class="hello-message">
  <span>{{ title }}</span>
</div>
</template>
<script lang="ts" name="HelloMessage" setup>
  const { title } = defineProps<{ title: string }>();
</script>
<style lang="scss" scoped>
.hello-message {
  span {
    color: orangered;
  }
}
</style>
