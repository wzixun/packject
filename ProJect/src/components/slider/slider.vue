<template>
  <el-carousel indicator-position="outside" trigger="click">
    <el-carousel-item v-for="item in img" :key="item">
      <!-- <h3>{{ item.imdaw }}</h3> -->
      <img v-lazy="item.imdaw" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<script>
export default {
  data() {
    return {
      img: [
        {
          imdaw:
            "https://goss.veer.com/creative/vcg/veer/800water/veer-134149996.jpg"
        },
        {
          imdaw:
            "https://goss.veer.com/creative/vcg/veer/800water/veer-134149996.jpg"
        },
        {
          imdaw:
            "https://goss.veer.com/creative/vcg/veer/800water/veer-134149996.jpg"
        },
        {
          imdaw:
            "https://goss.veer.com/creative/vcg/veer/800water/veer-134149996.jpg"
        },
        {
          imdaw:
            "https://goss.veer.com/creative/vcg/veer/800water/veer-134149996.jpg"
        },
        {
          imdaw:
            "https://goss.veer.com/creative/vcg/veer/800water/veer-134149996.jpg"
        },
        {
          imdaw:
            "https://goss.veer.com/creative/vcg/veer/800water/veer-134149996.jpg"
        },
        {
          imdaw:
            "https://goss.veer.com/creative/vcg/veer/800water/veer-134149996.jpg"
        }
      ]
    };
  }
};
</script>