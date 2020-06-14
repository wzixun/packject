<template>
  <div>
    <h1>
      XXXXXX:
      <zkTimeDown :endTime="endTime"></zkTimeDown>
    </h1>
    <zkTimeDown :endTime="DangDate"></zkTimeDown>

    <el-button @click="open">成功</el-button>

    <div class="box" @click="adb">
      <i class="el-icon-arrow-right" v-if="aa"></i>
      <i class="el-icon-arrow-down" v-if="bb"></i>
    </div>
  </div>
</template>

<script>
import zkTimeDown from "./DateTime"; //  引入倒计时
export default {
  data() {
    return {
      endTime: "2020-01-24 00:00:00", // 设置定时器倒计时，时间必须大于当前时间     和上面一样，跟上面对应
      DangDate: "",
      ruleForm: {
        issue: "111",
        dada: ""
      },
      aa: true,
      bb: false
    };
  },
  components: {
    zkTimeDown
  },
  created() {
    this.addDate();
    // this.dada = 'https://www.baidu.com/'
    // window.open()
    // console.log(this.dada)
    // window.location=this.dada
  },
  methods: {
    adb() {
      this.aa = !this.aa;
      this.bb = !this.bb;
    },
    open() {
      // this.$message("消息")
      // this.$message.success("成功")
      // this.$message.warning("警告")
      this.$message.error("失败");
    },
    addDate() {
      let nowDate = new Date();
      let date = {
        year: nowDate.getFullYear(),
        month: nowDate.getMonth() + 1,
        date: nowDate.getDate() + 1
      };
      let systemDate =
        date.year + "-" + date.month + "-" + date.date + " 00:00:00";
      // console.log(systemDate);
      this.DangDate = systemDate;
    }
  }
};

function runAsync1() {
  var p = new Promise(function(resolve, reject) {
    //做一些异步操作
    setTimeout(function() {
      console.log("异步任务1执行完成");
      resolve("随便什么数据1");
    }, 1000);
  });
  return p;
}
function runAsync2() {
  var p = new Promise(function(resolve, reject) {
    //做一些异步操作
    setTimeout(function() {
      console.log("异步任务2执行完成");
      resolve("随便什么数据2");
    }, 2000);
  });
  return p;
}
function runAsync3() {
  var p = new Promise(function(resolve, reject) {
    //做一些异步操作
    setTimeout(function() {
      console.log("异步任务3执行完成");
      resolve("随便什么数据3");
    }, 2000);
  });
  return p;
}

// Promise.race([runAsync1(), runAsync2(), runAsync3()]).then(results => {
//   console.log(results);
// });
</script>

<style scoped>
#BtitleImg,
#BtitleImg img {
  width: 500px;
  height: 400px;
  float: left;
}
#clickImg,
#clickImg img {
  width: 200px;
  height: 200px;
  float: left;
}
.box {
  width: 200px;
  height: 50px;
  background: red;
  margin: 0 auto;
  cursor: pointer;
}
.box i {
  float: right;
  line-height: 50px;
  margin-right: 20px;
}
</style>