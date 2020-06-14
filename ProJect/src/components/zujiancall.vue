<template>
  <div>
    <Child1 :message="fafa"></Child1>
    <Child2 @listChind="12222222222222222       "></Child2>
    <h2>{{bb}}</h2>
  </div>
</template>
<script>
import Child1 from "./view/P_C";
import Child2 from "./view/C_P";
export default {
  components: {
    Child1,
    Child2
  },
  created(){},
  data() {
    return {
        fafa:{
            aa:1111
        },
        bb:222
    };
  },
  methods:{
      showMsg(data){
          this.bb = data.bb
      }
  }
};
</script>
<style lang="less">
</style>