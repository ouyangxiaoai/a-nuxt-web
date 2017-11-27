<template>
  <div>
    <fix-header />
    <nuxt/>
    <side-bar></side-bar>
    <fix-foot />
  </div>
</template>
<script>
  import fixHeader from '~/components/common/head'
  import fixFooter from '~/components/common/foot'
  import sidebar from '~/components/common/sideBar'
  export default {
    components: {
      'fix-header': fixHeader,
      'fix-foot': fixFooter,
      'side-bar': sidebar
    }
  }
</script>
