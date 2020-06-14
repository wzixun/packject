<template>
  <div style="padding:40px;">
    <el-button type="primary" size="small" @click="downExcel">导出EXCEL</el-button>
    <el-table :data="excelData" style="width: 100%">
      <el-table-column prop="birthday" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import toExcel from "../utilsl/json2excel";
export default {
  name: "landing-page",
  data() {
    return {
      excelData: [
        { name: "张三", birthday: "2019-12-31", sex: "男", age: 28 },
        { name: "李四", birthday: "2019-12-31", sex: "女", age: 27 }
      ]
    };
  },
  mounted() {},
  methods: {
    downExcel() {
      const th = ["姓名", "生日", "性别", "年龄"];
      const filterVal = ["name", "birthday", "sex", "age"];
      const data = this.excelData.map(v => filterVal.map(k => v[k]));
      const [fileName, fileType, sheetName] = ["测试下载1", "xlsx", "测试页1"];
      toExcel({ th, data, fileName, fileType, sheetName });
    }
  }
};
</script>