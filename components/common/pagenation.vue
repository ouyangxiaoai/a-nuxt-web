<template>
  <div class="pagination">
    <span @click="goFirstPage" :class="{'first-last': currentPage === 1}">首页</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size = "pageSize"
      :total="total"
      layout="prev,pager,next"
      prevText="上页"
      nextText="下页"
      >
    </el-pagination>
    <span @click="goLastPage" :class="{'first-last': currentPage === Number(Math.ceil(total / pageSize))}">末页</span>
  </div>
</template>

<script>
  export default {
    name: 'pagenation',
    props: {
      currentPage: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 6
      },
      total: {
        type: Number,
        require: true
      }
    },
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        this.$emit('handleCurrentChange', val)
      },
      goFirstPage () {
        this.$emit('handleCurrentChange', 1)
      },
      goLastPage () {
        this.$emit('handleCurrentChange', Number(Math.ceil(this.total / this.pageSize)))
      }
    },
    data () {
      return {
        // currentPage: this.current
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "assets/scss/mixins.scss";
.pagination {
  width: 1200px;
  height: 30px;
  margin: 0 auto 100px;
  @include clearfix;
}
  .pagination>span {
    float: left;
    cursor: pointer;
    margin: 0 8px;
    color: #2d2f33;
    @extend %pagination-span;
  }
  .pagination .first-last {
    cursor: not-allowed;
    color: #b4bccc;
  }
</style>
<style lang="scss">
  @import "assets/scss/mixins.scss";
  .pagination > .el-pagination {
    float: left;
    padding: 0;
    span {
      @extend %pagination-span;
    }
    button {
      padding: 0 8px;
    }
    .el-pager li {
      padding: 0;
      margin: 0 8px;
      @extend %pagination-span;
      min-width: 28px;
      width: 28px;
      font-weight: normal;
    }
    .el-pager li.active {
      color: #fff;
      background-color:#409eff;
      font-weight: normal;
    }
  }
</style>

