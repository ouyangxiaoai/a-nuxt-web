<template>
  <div class="u-search f-cb">
    <input
      class="u-input-sch"
      type="text"
      placeholder="标识查询"
      v-model="msg"
      @keyup.enter="enterSch"
    >
    <div class="u-sch">
      <a target="_blank" class="u-icon-sch" id="sch" :href="`//www.cniotroot.cn/?q=${msg}`"></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'headSearch',
    data () {
      return {
        title: '搜索框',
        msg: ''
      }
    },
    methods: {
      enterSch () {
        this.$el.querySelector('#sch').click()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .u-search{
    position: relative;
    width: 200px;
    height: 40px;
    border-bottom: 1px solid #ededed;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
    margin-right: 30px;
     &:hover,&:focus{
      border-bottom: 1px solid #ddd;
      .u-icon-sch{
        display: inline-block;
        background: url('~/assets/img/search-act.png');
        background-size: 24px 24px;
        width: 24px;
        height: 24px;
        position: absolute;
        top: 6px;
        right: 15px;
        cursor: pointer;
      }
    }
  }
  .u-input-sch{
    border: 0;
    position: absolute;
    top: 0;
    left: 5px;
    width: 100%;
    height: 34px;
    line-height: 40px;
    padding-left: 5px;
    padding-right: 55px;
    outline: none;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
    color: #ccc;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #ccc;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #ccc;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #ccc;
  }
  .u-icon-sch{
    display: inline-block;
    background: url('~/assets/img/search-act.png');
    background-size: 16px 18px;
    width: 16px;
    height: 18px;
    position: absolute;
    top: 8px;
    right: 15px;
    cursor: pointer;
  }
</style>
