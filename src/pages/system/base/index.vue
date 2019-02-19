<template>
    <d2-container>
        <el-tabs tab-position="left" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="邮箱设置" name="email">
                <email-form/>
            </el-tab-pane>
            <el-tab-pane label="文件设置" name="file">
                <file-form/>
            </el-tab-pane>
            <el-tab-pane label="密码设置" name="password">
                <password-form/>
            </el-tab-pane>
            <el-tab-pane label="工作流设置" name="workflow">工作流设置</el-tab-pane>
            <el-tab-pane label="人力资源设置" name="users">人力资源设置</el-tab-pane>
        </el-tabs>
    </d2-container>
</template>

<script>
  import emailForm from './components/email'
  import fileForm from './components/file'
  import passwordForm from './components/password'
  export default {
    components: {
      'email-form': emailForm,
      'file-form': fileForm,
      'password-form': passwordForm
    },
    data() {
      return {
        activeName: 'email',
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
