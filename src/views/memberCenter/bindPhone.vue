<template>
  <div>
    <van-nav-bar
      title="绑定手机号"
      left-arrow
      @click-left="goBack"
    />
    <van-cell-group>
      <van-field
        v-model="phone"
        label="手机号"
        placeholder="请输入手机号"
        required
        :error-message="error_message"
      />
      <van-field
        center
        v-model="sms"
        label="验证码"
        placeholder="请输入短信验证码"
        icon="clear"
        @click-icon="sms = ''"
      >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
  </div>
</template>

<script>
import {Tab, Tabs, Field, Button, CellGroup, NavBar} from 'vant'

export default {
  name: 'login',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Field.name]: Field,
    [Button.name]: Button,
    [CellGroup.name]: CellGroup,
    [NavBar.name]: NavBar
  },
  data () {
    return {
      active: 2,
      username: '',
      phone: '',
      error_message: '',
      sms: ''
    }
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
