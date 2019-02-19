<template>
    <el-form label-position="left" label-width="250px" :model="fileForm" size="mini">
        <el-form-item label="文档是否压缩">
            <el-radio v-model="fileForm.flag" label="1">否</el-radio>
            <el-radio v-model="fileForm.flag" label="2">是</el-radio>
        </el-form-item>
        <el-form-item label="文件保存路径">
            <el-input v-model="fileForm.path"></el-input>
        </el-form-item>
        <el-form-item label="启用附件大小控件检测">
            <el-radio v-model="fileForm.sizeControl" label="1">否</el-radio>
            <el-radio v-model="fileForm.sizeControl" label="2">是</el-radio>
        </el-form-item>
        <el-form-item label="文档附件大小">
            <el-input v-model="fileForm.fileSize"></el-input>
        </el-form-item>
        <el-form-item label="启用图片附件大小控件检测">
            <el-radio v-model="fileForm.imageControl" label="1">否</el-radio>
            <el-radio v-model="fileForm.imageControl" label="2">是</el-radio>
        </el-form-item>
        <el-form-item label="图片附件大小">
            <el-input v-model="fileForm.imageSize"></el-input>
        </el-form-item>
        <el-form-item label="FTP上传文件目录">
            <el-input v-model="fileForm.ftpPath"></el-input>
        </el-form-item>
        <el-form-item label="门户文档元素是否显示总记录数">
            <el-radio v-model="fileForm.showTotal" label="1">否</el-radio>
            <el-radio v-model="fileForm.showTotal" label="2">是</el-radio>
        </el-form-item>
        <el-form-item label="是否使用文档借阅">
            <el-radio v-model="fileForm.useFileBorrow" label="1">否</el-radio>
            <el-radio v-model="fileForm.useFileBorrow" label="2">是</el-radio>
        </el-form-item>
    </el-form>
</template>

<script>
  export default {
    data () {
      return {
        fileForm: {
          flag: '1',
          path: '',
          sizeControl: '2',
          fileSize: '',
          imageControl: '2',
          imageSize: '',
          ftpPath: '',
          showTotal: '2',
          useFileBorrow: '1',
        },
      }
    }
  }
</script>

<style scoped>

</style>