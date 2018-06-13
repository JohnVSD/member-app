<template>
  <div>
    <van-nav-bar
      title="我的地址"
      left-arrow
      @click-left="goBack"
    />
    <van-address-list
      v-model="chosenAddressId"
      :loading="loading"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { AddressList, Toast, NavBar } from 'vant'
import ajax from '@/utils/request'

export default {
  components: {
    [AddressList.name]: AddressList,
    [Toast.name]: Toast,
    [NavBar.name]: NavBar
  },
  data () {
    return {
      loading: true,
      openid: 'o6_bmjrPTlm6_2sgVt7hMZOPfL2M',
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
  mounted () {
    this.FetchAddressList()
  },
  methods: {
    FetchAddressList () {
      // Toast.loading({
      //   mask: false
      // })
      ajax.get(`waddress/listAddress/${this.openid}`).then((res) => {
        console.log(res)
        let addlist = []
        for (let i = 0; i < res.data.length; i++) {
          let obj = {}
          let item = res.data[i]
          obj.id = item.id
          obj.tel = item.phone
          obj.name = item.consignee
          obj.address = `${item.city}${item.region}${item.adddress}`
          addlist.push(obj)
        }
        this.list = addlist
        this.chosenAddressId = addlist[1].id
      })
      // this.loading = false
    },
    goBack () {
      this.$router.go(-1)
    },
    onAdd () {
      Toast('新增收货地址')
      this.$router.push('/member/add_address')
    },
    onEdit (item, index) {
      Toast('编辑收货地址:' + index)
      this.$router.push('/member/edit_address')
    }
  }
}
</script>

<style lang="less">
.van-address-list__group{
  padding-bottom: 0
}
</style>
