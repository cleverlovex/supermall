<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div style="float: left;" class="desc-line">
        <i class="desc-dot"></i>
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div style="float: right;" class="desc-line">
        <i style="right: 0px;" class="desc-dot"></i>
      </div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index"
           :src="item" @load="imgLoad" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        counter: 0,
        imagesLength: 0
      }
    },
    methods: {
      imgLoad() {
        if (++this.counter === this.imagesLength) {
          this.$emit('imageLoad')
        }
      }
    },
    watch: {
      detailInfo() {
        this.imagesLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    font-size: 0.6rem;
    padding: 0.42rem 0.34rem;
  }

  .desc-line {
    width: 3.5rem;
    height: 0.04rem;
    background-color: gray;
    position: relative;
  }

  .desc-dot {
    position: absolute;
    top: -0.1rem;
    display: inline-block;
    width: 0.21rem;
    height: 0.21rem;
    background-color: black;
    border-radius: 50%;
  }

  .desc {
    padding: 0.85rem 0;
    color: gray;
    font-size: 14px;
  }

  .info-key {
    padding: 0.42rem 0.34rem;
  }

  .info-list img{
    width: 100%;
  }
</style>
