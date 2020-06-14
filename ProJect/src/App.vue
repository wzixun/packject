<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <ul>
            <li
              v-for="(item,index) in routers"
              :key="index"
              :class="{red:msg===index}"
              @click="sub(index,item)"
            >
              <router-link :to="item.to">{{item.routerName}}</router-link>
            </li>
          </ul>
        </el-aside>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
    <button @click="changeLang">切换语言</button>

    <h1>{{$t('m.welcome')}}</h1>
    <h3>{{$t('m.today')}}{{weekname}}</h3>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: 0,
      routers: [
        { to: "/", routerName: "Home" },
        { to: "/Select", routerName: "Select" },
        { to: "/Pageing", routerName: "Pageing" },
        { to: "/Form", routerName: "Form" },
        { to: "/Threes", routerName: "Threes" },
        { to: "/Province", routerName: "Province" },
        { to: "/ZujianCall", routerName: "ZujianCall" },
        { to: "/p", routerName: "slot" },
        { to: "/getCode", routerName: "getCode" },
        { to: "/slider", routerName: "slider" },
      ]
    };
  },
  created() {
    this.changeLang();
    this.getWeek();
  },
  methods: {
    sub(index, item) {
      this.msg = index;
    },
    changeLang() {
      this.lang = localStorage.getItem("locale") || "zh-CN";

      if (this.lang === "zh-CN") {
        this.lang = "en-US";
        this.$i18n.locale = this.lang;
      } else {
        this.lang = "zh-CN";
        this.$i18n.locale = this.lang;
      }
      localStorage.setItem("locale", this.lang);
      let week = this.getWeek();
      this.weekname = week;
    },
    getWeek() {
      let week = new Date().getDay();
      let day = "m.week.sun";
      switch (week) {
        case 0:
          day = "m.week.sun";
          break;
        case 1:
          day = "m.week.mon";
          break;
        case 2:
          day = "m.week.tues";
          break;
        case 3:
          day = "m.week.wed";
          break;
        case 4:
          day = "m.week.thur";
          break;
        case 5:
          day = "m.week.fri";
          break;
        case 6:
          day = "m.week.sat";
          break;
      }
      return this.$i18n.t(day);
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-header {
  // background: cyan;
  line-height: 60px;
}
.el-aside ul li {
  height: 50px;
  line-height: 50px;
  list-style: none;
}
.el-aside ul li a {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #000;
  text-decoration: none;
}
.el-aside ul li a:hover {
  color: #fff;
}
.el-aside ul li:hover {
  background: cyan;
}
.red {
  background-color: cyan;
  color: #fff;
  a {
    color: #fff;
  }
}
</style>
