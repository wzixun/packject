<template>
  <div class="hello">
    <el-row>
      <el-col :span="12">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
          <li>
            <a href="https://vuejs.org" target="_blank">Core Docs</a>
          </li>
          <li>
            <a href="https://forum.vuejs.org" target="_blank">Forum</a>
          </li>
          <li>
            <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
          </li>
          <li>
            <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
          </li>
          <br />
          <li>
            <a
              href="http://vuejs-templates.github.io/webpack/"
              target="_blank"
            >Docs for This Template</a>
          </li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
          <li>
            <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
          </li>
          <li>
            <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
          </li>
          <li>
            <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
          </li>
          <li>
            <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
          </li>
        </ul>
      </el-col>
      <el-col :span="12">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
          <li>
            <a href="https://vuejs.org" target="_blank">Core Docs</a>
          </li>
          <li>
            <a href="https://forum.vuejs.org" target="_blank">Forum</a>
          </li>
          <li>
            <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
          </li>
          <li>
            <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
          </li>
          <br />
          <li>
            <a
              href="http://vuejs-templates.github.io/webpack/"
              target="_blank"
            >Docs for This Template</a>
          </li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
          <li>
            <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
          </li>
          <li>
            <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
          </li>
          <li>
            <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
          </li>
          <li>
            <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
          </li>
        </ul>
      </el-col>
    </el-row>

    <div class="f4">
      <span>上架中</span>
    </div>
  </div>
</template>

<script>
import md5 from 'js-md5';
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {},
  mounted() {
    function getSign(params, kAppKey, kAppSecret) {
      if (typeof params == "string") {
        return paramsStrSort(params);
      } else if (typeof params == "object") {
        var arr = [];
        for (var i in params) {
          arr.push(i + "=" + params[i]);
        }
        return paramsStrSort(arr.join("&"));
      }
    }

    function paramsStrSort(paramsStr) {
      var url = paramsStr + "&appKey=" + kAppKey;
      var urlStr = url
        .split("&")
        .sort()
        .join("&");
      var newUrl = urlStr + "&key=" + kAppSecret;
      return md5(newUrl);
    }
    var params = {
      START_TIME: "20200101",
      END_TIME: "20200103",
      CHANNEL_ID: "03",
      ORG_NO: "4340112"
    };
    var kAppKey = "27182819";
    var kAppSecret = "516f05dcd1a0411591d18928457fdd44";
    var sign = getSign(params, kAppKey, kAppSecret);
    console.log(sign)
    let time = new Date().getTime();
    console.log(time)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.f4 {
  width: 0;
  height: 0;
  border-color: transparent cyan;
  border-width: 0 0 100px 100px;
  border-style: solid;
  span {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin: 10px 0 0 -130px;
  }
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
