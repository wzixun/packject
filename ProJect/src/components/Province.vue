<template>
  <div>
    <div>
      <ul>
        <li v-for="item in province" :key="item.ProID">{{item.name}}</li>
      </ul>
    </div>
    <VDistpicker @selected="onSelected"></VDistpicker>
    <h1>向👈的无缝滚动</h1>
    <div class="outer-box">
      <div class="inner-box1">
        <div>你好啊！张三1</div>
        <div>你好啊！张三2</div>
        <div>你好啊！张三3</div>
        <div>你好啊！张三4</div>
        <div>你好啊！张三5</div>
      </div>
      <!--注意inner-box1和inner-box2的数据必须一样，并且样式也得一样
        inner-box2包裹的顶部要注意和inner-box1的底部的距离应和其包裹的
      每两个div之间的距离一样否则会出现卡顿的效果-->
      <div class="inner-box2">
        <div>你好啊！张三1</div>
        <div>你好啊！张三2</div>
        <div>你好啊！张三3</div>
        <div>你好啊！张三4</div>
        <div>你好啊！张三5</div>
      </div>
    </div>
  </div>
</template>
<script>
import VDistpicker from "v-distpicker";

export default {
  components: {
    VDistpicker
  },
  data() {
    return {
      province: []
    };
  },
  created() {
    // this.ws();
  },
  mounted() {
    let outerBox = document.getElementsByClassName("outer-box")[0];
    let innerBox1 = document.getElementsByClassName("inner-box1")[0];
    setInterval(() => {
      this.scrollFunc(outerBox, innerBox1);
    }, 30);
  },
  methods: {
    scrollFunc(outerBox, innerBox) {
      console.log();
      if (outerBox.scrollLeft >= innerBox.offsetWidth) {
        outerBox.scrollLeft = 0;
      } else {
        outerBox.scrollLeft++;
      }
    },
    ws() {
      this.$http.get("../../static/format.json").then(res => {
        this.province = res.data;
      });
    },
    onSelected(data) {
      console.log(data.province.value);
      console.log(data.city.value);
      console.log(data.area.value);
    }
  }
};
// ajax({
//   url: "../../static/format.json", //请求地址
//   type: "get", //请求方式
//   data: {}, //请求参数
//   dataType: "json",
//   success: function(response, xml) {
//     // 此处放成功后执行的代码
//     console.log(JSON.parse(response));
//   },
//   fail: function(status) {
//     // 此处放失败后执行的代码
//   }
// });

// function ajax(options) {
//   options = options || {};
//   options.type = (options.type || "GET").toUpperCase();
//   options.dataType = options.dataType || "json";
//   var params = formatParams(options.data);

//   //创建 - 非IE6 - 第一步
//   if (window.XMLHttpRequest) {
//     var xhr = new XMLHttpRequest();
//   } else {
//     //IE6及其以下版本浏览器
//     var xhr = new ActiveXObject("Microsoft.XMLHTTP");
//   }

//   //接收 - 第三步
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4) {
//       var status = xhr.status;
//       if (status >= 200 && status < 300) {
//         options.success && options.success(xhr.responseText, xhr.responseXML);
//       } else {
//         options.fail && options.fail(status);
//       }
//     }
//   };

//   //连接 和 发送 - 第二步
//   if (options.type == "GET") {
//     xhr.open("GET", options.url + "?" + params, true);
//     xhr.send(null);
//   } else if (options.type == "POST") {
//     xhr.open("POST", options.url, true);
//     //设置表单提交时的内容类型
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.send(params);
//   }
// }
// //格式化参数
// function formatParams(data) {
//   var arr = [];
//   for (var name in data) {
//     arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
//   }
//   arr.push(("v=" + Math.random()).replace(".", ""));
//   return arr.join("&");
// }
</script>
<style lang="less">
ul {
  li {
    list-style: none;
  }
}
h1 {
  text-align: center;
}
.outer-box {
  text-align: center;
  width: 400px;
  margin: 0 auto;
  height: 40px;
  background-color: yellow;
  overflow: hidden; /* 这个属性很重要一定要设置*/
  display: flex;
  flex-flow: row nowrap;
}
.inner-box1,
.inner-box2 {
  display: flex;
  flex-flow: row nowrap;
  white-space: nowrap;
}

.inner-box1 div,
.inner-box2 div {
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  margin-right: 10px;
}
</style>