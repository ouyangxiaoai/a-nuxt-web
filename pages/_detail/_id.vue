<template>
  <detail :title="title" :ctn="ctn" :more="more" :labels="labels" :gmtype="gmtype"></detail>
</template>
<script>
  import detail from '~/components/detail'
  import getUrl from '~/config/url'
  export default {
    components: {detail},
    async asyncData ({app, params}) {
      let cmsUrl = getUrl(`/message/${params.id}`, 'CMS')
      let {data} = await app.$axios({method: 'get', type: 'jsonp', url: cmsUrl})
      let {title, ctime, subtitle, content, labels, gmtype} = data
      let arr = labels.split(' ')
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '') {
          arr.splice(i, 1)
          i = i - 1
        }
      }
      let url = getUrl('/api/v1/iot-site/refs/')
      let {data: {results}} = await app.$axios({method: 'get', type: 'json', url, params: { page: 1, size: 4, gmtype }})
      let arrMore = []
      for (let i = 0; i < results.length; i++) {
        let obj = {}
        obj.id = results[i].cms_id
        obj.tt = results[i].title
        obj.img = results[i].img
        obj.time = results[i].ctime
        arrMore.push(obj)
      }
      return {title, ctn: {tt: ['国家物联网标识平台', ctime, subtitle], cc: content}, labels: arr, more: arrMore, gmtype}
    }
  }
</script>
