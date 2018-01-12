<template>
  <div>
    <fix-header />
    <div :class="[isMobile ? 'mobile-content' : 'page-content']">
    <nuxt/>
    </div>
    <side-bar></side-bar>
    <fix-foot></fix-foot>
    <browser v-if="showBox"></browser>
  </div>
</template>
<script>
  import browser from '~/components/browser'
  import fixHeader from '~/components/common/head'
  import fixFooter from '~/components/common/foot'
  import sidebar from '~/components/common/sideBar'
  export default {
    components: {
      'fix-header': fixHeader,
      'fix-foot': fixFooter,
      'side-bar': sidebar,
      browser
    },
    data () {
      return {
        showBox: this.$store.state.ieLow
      }
    },
    computed: {
      isMobile () {
        return this.$store.state.isMobile
      }
    }
    /* ,
    mounted () {
      if (document.documentMode <= 9) {
        this.showBox = true
      }
    } */
  }
</script>
<style lang="scss" scoped>
  @import "~assets/scss/mixins.scss";
  .page-content {
    margin-top: 126px;
  }
  .mobile-content {
    padding-top: pxTorem(146px);
  }
</style>
