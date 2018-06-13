<template>
  <div>
    <van-nav-bar
      title="添加地址"
      left-arrow
      @click-left="goBack"
    />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { AddressEdit, Toast, NavBar } from 'vant'
import ajax from '@/utils/request'

export default {
  components: {
    [AddressEdit.name]: AddressEdit,
    [Toast.name]: Toast,
    [NavBar.name]: NavBar
  },
  data () {
    return {
      openid: 'o6_bmjrPTlm6_2sgVt7hMZOPfL2M',
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市'
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区'
        }
      },
      searchResult: []
    }
  },
  mounted () {
    // this.FetchAddress()
  },
  methods: {
    // adddress: '海淀区中关村',
    // city: '北京市',
    // consignee: '收货人',
    // phone: '17263896276',
    // postcode: 'string',
    // province: 'string',
    // region: '',
    // provinceId: 0,
    // userId: 1
    FetchAddress (params) {
      ajax.post('waddress/address', params).then((res) => {
        console.log(res)
      })
    },
    deletedAddress (params) {
      ajax.delete(`waddress/deleteId/${params.id}`).then((res) => {
        console.log(res)
      })
    },
    goBack () {
      this.$router.go(-1)
    },
    onSave (content) {
      console.log(content)
      let params = {
        userId: 1,
        provinceId: 1
      }
      params.adddress = content.address_detail
      params.city = content.city
      params.consignee = content.name
      params.phone = content.tel
      params.postcode = content.postal_code
      params.province = content.province
      params.region = content.county
      params.is_default = content.is_default

      this.FetchAddress(params)
      Toast('save')
    },
    onDelete () {
      Toast('delete')
      let params = {
        id: 1
      }
      this.deletedAddress(params)
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '中关村',
          address: '北京市海淀区'
        }]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>

<style scoped>

</style>
