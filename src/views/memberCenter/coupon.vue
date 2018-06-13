<template>
  <div>
    <van-nav-bar
      title="我的优惠券"
      left-arrow
      @click-left="goBack"
    />
    <div style="text-align: center; margin-top:50px;">暂无优惠券</div>
  </div>
</template>

<script>
import { NavBar } from 'vant'

export default {
  components: {
    [NavBar.name]: NavBar
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
