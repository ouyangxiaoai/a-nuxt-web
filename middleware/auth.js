/*  这是一个全局中间件，可能包括路由判断和权限 */
export default function ({route, store}) {
  let index = route.params.id ? '/' + route.path.split('/')[1] : route.path
  if (index.indexOf('list') !== -1) { // 为了防止移动端新闻列表页面的时候header没有同步，所以暂指定为news
    index = '/news'
  }
  store.commit('INIT_ACTIVE_INDEX', index)
}
