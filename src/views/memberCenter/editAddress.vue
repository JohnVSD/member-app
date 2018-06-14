<template>
  <div>
    <van-nav-bar
      title="编辑地址"
      left-arrow
      @click-left="goBack"
    />
    <van-address-edit
      :area-list="areaList"
      :address-info="defaultAddData"
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
import localStore from 'store'

export default {
  components: {
    [AddressEdit.name]: AddressEdit,
    [Toast.name]: Toast,
    [NavBar.name]: NavBar
  },
  data () {
    return {
      openid: 'o6_bmjrPTlm6_2sgVt7hMZOPfL2M',
      userinfo: localStore.get('userInfo'),
      addressId: localStore.get('addressId'),
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
      searchResult: [],
      defaultAddData: {
        address_detail: '东十四条',
        area_code: '110101',
        city: '北京市',
        county: '东城区',
        is_default: true,
        name: '王莽',
        postal_code: '100000',
        province: '北京市',
        tel: '17233298333'
      }
    }
  },
  mounted () {
    this.defaultAddData = localStore.get('addDetails')
  },
  methods: {
    editAddress (params) {
      ajax.put(`waddress/editAddress/${params.id}`, params).then((res) => {
        console.log(res)
        if (res.status === 200) {
          Toast('修改成功')
          this.$router.push('/member/address_list')
        }
      })
    },
    deletedAddress () {
      ajax.delete(`waddress/deleteId/${this.addressId}`).then((res) => {
        if (res.status === 200) {
          Toast('删除成功')
          this.$router.push('/member/address_list')
        }
      })
    },
    goBack () {
      this.$router.go(-1)
    },
    onSave (content) {
      console.log(content)
      let params = {
        userId: this.userinfo.id
      }
      params.id = this.addressId
      params.adddress = content.address_detail
      params.city = content.city
      params.consignee = content.name
      params.phone = content.tel
      params.postcode = content.postal_code
      params.province = content.province
      params.region = content.county
      params.provinceId = content.area_code

      this.editAddress(params)
    },
    onDelete () {
      this.deletedAddress()
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
