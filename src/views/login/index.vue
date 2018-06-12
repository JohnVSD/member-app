<template>
  <div class="container">
    <van-tabs v-model="active">
      <van-tab title="注册新用户">
        <van-cell-group>
          <van-field
            v-model="username"
            label="用户名"
            icon="clear"
            placeholder="请输入用户名"
            required
            @click-icon="username = ''"
          />
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
      </van-tab>
      <!-- ///// -->
      <van-tab title="已有账号登录">
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
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import {Tab, Tabs, Field, Button, CellGroup} from 'vant'

export default {
  name: 'login',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Field.name]: Field,
    [Button.name]: Button,
    [CellGroup.name]: CellGroup
  },
  data () {
    return {
      active: 2,
      username: '',
      phone: '',
      error_message: '',
      sms: ''
    }
  }
}
</script>

<style scoped>

</style>
