<template>
    <el-form label-position="left" label-width="250px" :model="passwordForm" size="mini">
        <el-form-item label="登录是否使用验证码">
            <el-radio v-model="passwordForm.code" label="1">否</el-radio>
            <el-radio v-model="passwordForm.code" label="2">是</el-radio>
        </el-form-item>
        <el-form-item label="是否启用内网IP登陆限制">
            <el-radio v-model="passwordForm.ip" label="1">否</el-radio>
            <el-radio v-model="passwordForm.ip" label="2">是</el-radio>
        </el-form-item>
        <el-form-item label="是否使用动态密码">
            <el-radio v-model="passwordForm.dynamicWord" label="1">否</el-radio>
            <el-radio v-model="passwordForm.dynamicWord" label="2">是</el-radio>
        </el-form-item>
        <el-form-item label="是否首次登录修改密码">
            <el-radio v-model="passwordForm.firstLogin" label="1">否</el-radio>
            <el-radio v-model="passwordForm.firstLogin" label="2">是</el-radio>
        </el-form-item>
        <el-form-item label="密码规则">
            <el-select v-model="passwordForm.rules" placeholder="请选择">
                <el-option
                        v-for="item in rulesOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="密码位数">
            <el-select v-model="passwordForm.nums" placeholder="请选择">
                <el-option
                        v-for="item in numsOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="密码有效期">
            <el-input v-model="passwordForm.validNums" style="width: 100px;"></el-input>
            <el-select v-model="passwordForm.validType" placeholder="请选择" style="width: 90px;">
                <el-option
                        v-for="item in validTypeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="帐户是否区分大小写">
            <el-radio v-model="passwordForm.caseSensitive" label="1">否</el-radio>
            <el-radio v-model="passwordForm.caseSensitive" label="2">是</el-radio>
        </el-form-item>
    </el-form>
</template>

<script>
  export default {
    data () {
      return {
        passwordForm: {
          code: '1',
          ip: '1',
          dynamicWord: '1',
          firstLogin: '2',
          rules: '',
          nums: '',
          validNums: '',
          validType: '',
          caseSensitive: '1',
        },
        rulesOptions: [
          {
            value: '0',
            label: '小写'
          },
          {
            value: '1',
            label: '数字'
          },
          {
            value: '2',
            label: '小写数字组合'
          },
          {
            value: '3',
            label: '大写小写数字组合'
          }
        ],
        numsOptions: [
          {
            value: '6',
            label: '6'
          },
          {
            value: '7',
            label: '7'
          },
          {
            value: '8',
            label: '8'
          },
          {
            value: '9',
            label: '9'
          },
          {
            value: '10',
            label: '10'
          }
        ],
        validTypeOptions: [
          {
            value: '0',
            label: '日'
          },
          {
            value: '1',
            label: '周'
          },
          {
            value: '2',
            label: '月'
          },
          {
            value: '3',
            label: '年'
          },
        ],
      }
    }
  }
</script>
