<template>
  <div>
    <van-nav-bar
      title="我的积分"
      left-arrow
      @click-left="goBack"
    />
    <div style="text-align: center;">充值</div>
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
