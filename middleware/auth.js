/*  这是一个全局中间件，可能包括路由判断和权限 */
export default function ({route, store}) {
  let index = route.params.id ? '/' + route.path.split('/')[1] : route.path
  store.commit('INIT_ACTIVE_INDEX', index)
}
