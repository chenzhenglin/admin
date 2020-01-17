<template>
  <div class="group-container">
    <el-container>
      <el-header>
        <el-select v-model="model" placeholder="placeholder">
          <el-option
            v-for="item in optionsList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-header>
      <el-main></el-main>
    </el-container>
  </div>
</template>

<script>
import { getGroupList } from '@/api/table'
export default {
  name: 'Index',
  data() {
    return {
      groupList: null
    }
  },
  created() {
    this.getGroupList();
  },
  methods: {
    getGroupList() {
      getGroupList().then((response) => {
        console.log(response)
      })
    }
  }

}
</script>

<style scoped>

</style>
