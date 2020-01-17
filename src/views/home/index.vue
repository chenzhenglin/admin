<template>
  <div class="home-container">
    <div class="home-title">欢迎使用StageTV EPG智能编排系统</div>
    <div class="home-text">最近操作日志</div>
    <div>
      <el-table
        :data="list"
        border
        style="width: 100%"
        fit
        highlight-current-row
      >
        <el-table-column
          prop="created_time"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户名">
        </el-table-column>
        <el-table-column
          prop="action"
          label="操作类型">
        </el-table-column>
        <el-table-column
          prop="action_detail"
          label="操作内容"
          width="350px"
        >
        </el-table-column>
        <el-table-column
          prop="action_module"
          label="操作模块">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getLogList } from '@/api/table'

export default {
  name: 'Home',
  data() {
    return {
      list: null
    }
  },
  created() {
    this.getLog()
  },
  methods: {
    getLog() {
      getLogList().then(response => {
        this.list = response.data.items
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.home {
  &-container {
    margin: 30px;
  }
  &-title {
    font-size: 32px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  &-text {
    font-size: 24px;
    line-height: 46px;
    margin-bottom: 10px;
  }
}
</style>
