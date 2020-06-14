<template>
  <div>
    <el-menu router default-active="$route.path" active-text-color="#FEB307" :unique-opened="true" :default-openeds="['seller']">
      <el-submenu v-for="tab in menus" :index="tab.url" :key="tab.url">
        <template slot="title" class="title">
          <i :class="['iconfont',tab.icon]"></i>
          <span>{{tab.title}}</span>
        </template>
        <el-menu-item v-for="(item,$index) in tab.child" :index="item.path" :key="$index">
          <i class="iconfont icon-dian"></i>
          <span>{{item.lable}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  created() {},
  methods: {},
  data() {
    return {
      menus: [
        {
          title: "我是卖方",
          url: "seller",
          icon: "el-icon-s-fold",
          child: [
            {
              lable: "发布票据",
              path: ""
            },
            {
              lable: "我的票据",
              path: ""
            },
            {
              lable: "卖方订单",
              path: ""
            }
          ]
        },
        {
          title: "我是买方",
          url: "buyer",
          icon: "el-icon-bicycle",
          child: [
            {
              lable: "我的竞价",
              path: ""
            },
            {
              lable: "买方订单",
              path: ""
            },
            {
              lable: "发布买票",
              path: ""
            }
          ]
        },
        {
          title: "企业管理",
          url: "enterprise",
          icon: "el-icon-unlock",
          child: [
            {
              lable: "企业信息",
              path: ""
            },
            {
              lable: "执剑人账户",
              path: ""
            },
            {
              lable: "汇票豆账户",
              path: ""
            },
            {
              lable: "安全中心",
              path: ""
            },
            {
              lable: "消息中心",
              path: ""
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.el-menu {
  width: 200px;
}
.el-submenu {
  background: cyan;
}
</style>