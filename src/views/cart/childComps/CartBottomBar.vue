<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-buttom" :is-checked="isSelectAll" @click.native="checkClick"/>
      <span>全选</span>
    </div>

    <div class="price">
      合计：{{totalPrice}}
    </div>

    <div class="calculate" @click="calcClick">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";

  import { mapGetters } from 'vuex'

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return '￥' + this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength() {
        return this.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        // return !(this.cartList.filter(item => !item.checked).length)
        if (this.cartList.length === 0) return  false
        return !this.cartList.find(item => !item.checked)

        // if (this.cartList.length === 0) return  false
        // for (let item of this.cartList) {
        //   if (!item.checked) {
        //     return false
        //   }
        // }
        // return true
      }
    },
    methods: {
      checkClick() {
        if (this.isSelectAll) {
          // 全部选中
          this.cartList.forEach(item => item.checked = false)
        } else {
          //部分或全部不选中
          this.cartList.forEach(item => item.checked = true)
        }
      },
      calcClick() {
        if (!this.isSelectAll) {
          this.$toast.show('选择购买的商品', 1000)
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    display: flex;

    height: 40px;
    line-height: 40px;

    background-color: #eee;
    bottom: 39px;
  }

  .check-content {
    display: flex;
    align-items: center;
    margin-left: 5px;
    width: 60px;
  }

  .check-buttom {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }

  .price {
    margin-left: 30px;
    flex: 1;
  }

  .calculate {
    width: 100px;
    background: #f63515;
    color: #fff;
    text-align: center;
  }
</style>
