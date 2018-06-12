<template>
  <div>
    <van-nav-bar
      title="我的地址"
      left-arrow
      @click-left="goBack"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { AddressList, Toast, NavBar } from 'vant'

export default {
  components: {
    [AddressList.name]: AddressList,
    [Toast.name]: Toast,
    [NavBar.name]: NavBar
  },
  data () {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ]
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    onAdd () {
      Toast('新增收货地址')
      this.$router.push('/add_address')
    },
    onEdit (item, index) {
      Toast('编辑收货地址:' + index)
    }
  }
}
</script>

<style lang="less">
.van-address-list__group{
  padding-bottom: 0
}
</style>
