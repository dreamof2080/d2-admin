<template>
  <d2-container>
    <d2-crud ref="d2Crud"
             :columns="columns"
             :data="data"
             :rowHandle="rowHandle">
      <el-button slot="header" style="margin-bottom: 5px">新增</el-button>
    </d2-crud>
  </d2-container>
</template>

<script>
  export default {
    data () {
      return {
        columns: [
          {
            title: '名称',
            key: 'name',
          },
          {
            title: '描述',
            key: 'description',
          },
          {
            title: '初始值',
            key: 'default'
          },
          {
            title: '增量',
            key: 'increment'
          }
        ],
        data: [
          {
            name: '物资转借申请序号',
            description: '物资转借申请序号',
            default: 1,
            increment: 1
          },
          {
            name: '物资转借申请序号',
            description: '物资转借申请序号',
            default: 1,
            increment: 1
          },
          {
            name: '物资转借申请序号',
            description: '物资转借申请序号',
            default: 1,
            increment: 1
          },
          {
            name: '物资转借申请序号',
            description: '物资转借申请序号',
            default: 1,
            increment: 1
          },
          {
            name: '物资转借申请序号',
            description: '物资转借申请序号',
            default: 1,
            increment: 1
          },
          {
            name: '物资转借申请序号',
            description: '物资转借申请序号',
            default: 1,
            increment: 1
          },
          {
            name: '物资转借申请序号',
            description: '物资转借申请序号',
            default: 1,
            increment: 1
          },
          {
            name: '物资转借申请序号',
            description: '物资转借申请序号',
            default: 1,
            increment: 1
          },
          {
            name: '物资转借申请序号',
            description: '物资转借申请序号',
            default: 1,
            increment: 1
          },
          {
            name: '物资转借申请序号',
            description: '物资转借申请序号',
            default: 1,
            increment: 1
          }
        ],
        rowHandle: {
          remove: {
            icon: 'el-icon-delete',
            size: 'small',
            fixed: 'right',
            confirm: true
          }
        }
      }
    }
  }
</script>