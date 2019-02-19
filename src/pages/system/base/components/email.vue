<template>
    <el-form label-position="left" label-width="250px" :model="emailForm" size="mini">
        <el-form-item label="是否使用邮件">
            <el-radio v-model="emailForm.flag" label="1">否</el-radio>
            <el-radio v-model="emailForm.flag" label="2">是</el-radio>
        </el-form-item>
        <el-form-item label="邮件服务器地址">
            <el-input v-model="emailForm.server"></el-input>
        </el-form-item>
        <el-form-item label="邮件服务器端口号">
            <el-input v-model="emailForm.port"></el-input>
        </el-form-item>
        <el-form-item label="SMTP邮件地址">
            <el-input v-model="emailForm.address"></el-input>
        </el-form-item>
        <el-form-item label="是否需要认证">
            <el-radio v-model="emailForm.isOauth" label="1">否</el-radio>
            <el-radio v-model="emailForm.isOauth" label="2">是</el-radio>
        </el-form-item>
        <el-form-item label="SMTP账户">
            <el-input v-model="emailForm.account"></el-input>
        </el-form-item>
        <el-form-item label="SMTP账户密码">
            <el-input v-model="emailForm.password"></el-input>
        </el-form-item>
        <el-form-item label="url前缀">
            <el-input v-model="emailForm.url"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
  import {EmailData} from '@/api/system/base/components/email'

  export default {
    data() {
      return {
        emailForm: {
          flag: '2',
          server: '',
          port: '',
          address: '',
          isOauth: '1',
          account: '',
          password: '',
          url: ''
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('save');
      }
    },
    mounted() {
      EmailData().then(res => {
        this.emailForm = res.list[0];
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>