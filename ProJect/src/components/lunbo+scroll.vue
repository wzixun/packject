<template>
  <div class="recommed">
    <el-input @input="show" v-model="aa"></el-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aa: ""
    };
  },
  methods: {
    show(val) {
      console.log(val);
    }
  }
};
</script>