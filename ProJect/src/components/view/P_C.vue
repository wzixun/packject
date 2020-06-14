<template>
  <div>
    <h2>child子组件部分</h2>
    {{message.aa}}
    <h2>{{child}}</h2>
  </div>
</template>
<script>
export default {
  props: ["message"],
  mounted() {
    this.$on("childb", a => {
      this.child = a;
    });
  },
  data() {
    return {
      child: ""
    };
  }
};
</script>
<style lang="less">
</style>