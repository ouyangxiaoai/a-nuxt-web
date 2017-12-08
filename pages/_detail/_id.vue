<template>
  <detail :title="title" :ctn="ctn" :more="more" :labels="labels" :gmtype="gmtype"></detail>
</template>
<script>
  import detail from '~/components/detail'
  export default {
    components: {detail},
    async asyncData ({app, params}) {
      let {data} = await app.$axios({method: 'get', type: 'jsonp', url: `/cms/message/${params.id}`})
      let {title, ctime, subtitle, content, labels, gmtype} = data
      let arr = labels.split(' ')
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '') {
          arr.splice(i, 1)
          i = i - 1
        }
      }
      let {data: {results}} = await app.$axios({method: 'get', type: 'json', url: '/v1/iot-site/refs/', params: { page: 1, size: 4, gmtype }})
      let arrMore = []
      for (let i = 0; i < results.length; i++) {
        let obj = {}
        obj.id = results[i].cms_id
        obj.tt = results[i].title
        obj.img = results[i].img
        obj.time = results[i].ctime
        arrMore.push(obj)
      }
      return {title, ctn: {tt: ['国物标识', ctime, subtitle], cc: content}, labels: arr, more: arrMore, gmtype}
    }
  }
</script>
