<template>
  <div class="group-container">
    <!--<div class="group-select">
      <el-select v-model="groupName" placeholder="请选择分组">
        <el-option
          v-for="item in groupNames"
          :key="item"
          :value="item">
        </el-option>
      </el-select>
    </div>-->
    <div class="group-table">
      <el-table
        :data="groupList"
        border
        style="width: 100%">
        <el-table-column
          prop="groupName"
          label="分组名称"
          :filters="groupNamesFilterData"
          :filter-method="filterHander"
        >
        </el-table-column>
        <el-table-column
          prop="version"
          label="EPG版本"
        >
        </el-table-column>
        <el-table-column
          prop="pageName"
          label="页面名称">
        </el-table-column>
        <el-table-column
          prop="publish_time"
          label="发布时间"
        >
        </el-table-column>
        <el-table-column
          prop="publish_time"
          label="操作"
          width="400px"
        >
          <template slot-scope="scope">
            <el-button type="info" size="mini" @click="shortcutWindow = true" plain>快捷栏</el-button>
            <el-button type="info" size="mini" plain>版式</el-button>
            <el-button type="info" size="mini" plain>编排</el-button>
            <el-button type="info" size="mini" plain>预览</el-button>
            <el-button type="info" size="mini" plain>发布</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-drawer
        :visible.sync="shortcutWindow"
        size="100%"
        :with-header=false
        direction="btt"
        append-to-body="true"
      >
        <div class="shortcut-container">
          <div class="shortcut-title">
            <div>快捷栏管理</div>
            <div @click="shortcutWindow=false">收起</div>
          </div>
          <div class="shortcut-table">
            <el-table
              :data="groupList"
              border
              style="width: 100%">
              <el-table-column
                prop="version"
                label="EPG版本"
              >
              </el-table-column>
              <el-table-column
                prop="pageName"
                label="页面名称">
              </el-table-column>
              <el-table-column
                prop="publish_time"
                label="发布时间"
              >
              </el-table-column>
              <el-table-column
                prop="publish_time"
                label="操作"
              >
                <template slot-scope="scope">
                  <el-button type="info" size="mini" plain>版式</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import { getGroupList } from '@/api/table'
export default {
  name: 'ManageIndex',
  data() {
    return {
      groupList: null,
      groupNames: null,
      groupName: '全部分组',
      groupNamesFilterData: [],
      shortcutWindow: false
    }
  },
  created() {
    this.getGroupList();
  },
  methods: {
    getGroupList() {
      getGroupList().then((response) => {
        this.groupList = response.data.items
        this.groupNames = new Set()
        this.groupNames.add('全部分组')
        this.groupList.forEach((item, key) => {
          this.groupNames.add(item.groupName)
        })
        this.groupNames.forEach((item, key) => {
          this.groupNamesFilterData.push({ text: item, value: item })
        })
      })
    },
    filterHander(value, row, column) {
      const property = column['property']
      if (value === '全部分组') {
        return true
      }
      return row[property] === value
    }
  }
}
</script>

<style scoped lang="scss">
.group,.shortcut {
  &-container {
    margin: 20px 30px 30px 30px;
  }
  &-select {
    margin-bottom: 15px;
  }
}
</style>
