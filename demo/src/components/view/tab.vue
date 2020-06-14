<template>
  <div id="tab">
    <div v-for="(item,index) in tabs" :key="index" @click="select(item)" :class="{active:item.id===sel}">{{item.label}}</div>
    <!-- show部分 -->
    <div>
      <div v-show="sel===1">1-HTML</div>
      <div v-show="sel===2">2-CSS</div>
      <div v-show="sel===3">3-JAVASCRIPT</div>
    </div>

    <Child @titlekey="receiveData"></Child>
  </div>
</template>

<script>
import Child from "@/components/view/c_p";
export default {
  name: "Tab",
  data() {
    return {
      sel: 1,
      tabs: [
        { label: "HTML", id: 1 },
        { label: "CSS", id: 2 },
        { label: "JAVASCRIPT", id: 3 }
      ]
    };
  },
  methods: {
      select(item){
          this.sel = item.id
      },
      receiveData(e){
          console.log(e)
      }
  },
  components:{
      Child
  }
};
</script>

<style>
</style>
