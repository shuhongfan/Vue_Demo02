<template>
  <ul>
    <li>news001</li>
    <li>news002</li>
    <li>news003</li>
  </ul>
</template>

<script>
export default {
  name: "News",
  activated() {
    console.log("News激活了")
  },
  deactivated() {
    console.log("News失活了")
  }
}
</script>

<style scoped>

</style>
