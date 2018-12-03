<template>
  <div class="container">
    <van-row class="user-poster">
      <van-col span="24">
        <van-card
          :title="userInfo.name"
          :desc="userInfo.grade"
          :thumb="userInfo.imageURL"
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
import ajax from '@/utils/request'
import localStore from 'store'

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
      userInfo: {
        id: 0,
        name: '裴擒虎',
        grade: '普通会员',
        imageURL: 'http://thirdwx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/0'
      },
      openid: 'o6_bmjrPTlm6_2sgVt7hMZOPfL2M'
    }
  },
  created () {
    console.log(this.userInfo)
  },
  mounted () {
    this.addUser()
  },
  methods: {
    FetchWX () {
      ajax.get('https://api.weixin.qq.com/cgi-bin/user/info', {
        access_token: 'ACCESS_TOKEN',
        openid: this.openid,
        lang: 'zh_CN'
      }).then((res) => {
        console.log(res)
      })
    },
    addUser () {
      ajax.post('wuser/addUser', {
        email: '677880@qq.com',
        openid: this.openid,
        payword: 'string',
        phone: '17263896276',
        userfrom: 'string',
        username: '花木兰',
        userscore: 0
      }).then((res) => {
        console.log(res)
        this.getUserList()
      })
    },
    getUserList () {
      ajax.get(`wuser/userList/${this.openid}`).then((res) => {
        console.log(res)
        this.userInfo.name = res.data.username
        this.userInfo.id = res.data.id
        localStore.set('userInfo', this.userInfo)
      })
    },
    handleAddClick () {
      this.$router.push('/member/address_list')
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
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../../assets/img/timg.jpg') no-repeat;
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
