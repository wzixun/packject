<template>
  <div>
    <h2>child子组件部分</h2>
    <button @click="send">向父组件传值</button>
    <button @click="PC">向child兄弟组件传值</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
        a:{
            aa:222,
            bb:"我是父组件传过来的333"
        }
    };
  },
  methods:{
      send(){
          this.$emit("listChind",this.a)
      },
      PC(){
        this.$emit("childb",this.a.bb)
      }
  }
};
</script>
<style lang="less">
</style>