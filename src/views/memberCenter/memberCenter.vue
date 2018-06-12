<template>
  <div class="container">
    <van-row class="user-poster">
      <van-col span="24">
        <van-card
          title="娜可露露"
          desc="普通会员"
          :thumb="imageURL"
        />
      </van-col>
    </van-row>

    <van-cell-group>
      <van-cell icon="exchange" title="我的积分" is-link  @click="handleRecharge"/>
      <van-cell icon="gold-coin" title="我的优惠券" is-link @click="handleCoupon" />
      <van-cell icon="location" title="我的地址" is-link @click="handleAddClick" />
      <van-cell icon="phone" title="绑定手机" is-link @click="bindPhone" />
    </van-cell-group>

    <van-button type="primary" bottom-action>注销</van-button>
    <router-view></router-view>
  </div>
</template>

<script>
import {
  Row,
  Col,
  Card,
  Icon,
  Cell,
  CellGroup,
  Button
} from 'vant'

export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Card.name]: Card,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button
  },
  data () {
    return {
      imageURL: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
    }
  },
  methods: {
    handleAddClick () {
      console.log(this.$router)
      this.$router.push('/member/address')
    },
    handleRecharge () {
      this.$router.push('/member/recharge')
    },
    bindPhone () {
      this.$router.push('/member/bind_phone')
    },
    handleCoupon () {
      this.$router.push('/member/coupon')
    }
  }
}
</script>

<style lang="less">
.container{
  .van-button{
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
.user {
  &-poster {
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../../assets/img/bg.jpeg') no-repeat;
    background-size: cover;
    .van-card{
      background: none;
      display: flex;
      align-items: center;
      justify-content: center;
      .van-card__img{
        border-radius: 50%;
        border: 2px solid #fff;
      }
    }
  }
}
</style>
