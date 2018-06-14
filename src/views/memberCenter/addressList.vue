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
      @select="setDefault"
    />
  </div>
</template>

<script>
import { AddressList, Toast, NavBar } from 'vant'
import localStore from 'store'
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
        // {
        //   id: '1',
        //   name: '张三',
        //   tel: '13000000000',
        //   address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        // },
        // {
        //   id: '2',
        //   name: '李四',
        //   tel: '1310000000',
        //   address: '浙江省杭州市拱墅区莫干山路 50 号'
        // }
      ],
      addresslist: []
    }
  },
  mounted () {
    this.FetchAddressList()
  },
  methods: {
    FetchAddressList () {
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
        this.addresslist = res.data
        this.chosenAddressId = addlist[0].id
      })
    },
    defaultAddress (id) {
      ajax.put(`waddress/editStart/${id}/1`).then((res) => {
        if (res.status === 200) {
          Toast('已设为默认地址')
          // this.$router.push('/member/address_list')
        }
      })
    },
    goBack () {
      this.$router.go(-1)
    },
    onAdd () {
      this.$router.push('/member/add_address')
    },
    onEdit (item, index) {
      for (let i in this.addresslist) {
        let adds = this.addresslist[i]
        if (adds.id === item.id) {
          let obj = {}
          obj.address_detail = adds.adddress
          obj.city = adds.city
          obj.county = adds.region
          obj.is_default = false
          obj.name = adds.consignee
          obj.postal_code = adds.postcode
          obj.province = adds.province
          obj.tel = adds.phone
          obj.area_code = `${adds.provinceId}`
          localStore.set('addDetails', obj)
        }
      }
      localStore.set('addressId', item.id)
      this.$router.push('/member/edit_address')
    },
    setDefault (item) {
      console.log(item)
      // this.defaultAddress(item.id)
    }
  }
}
</script>

<style lang="less">
.van-address-list__group{
  padding-bottom: 0
}
</style>
