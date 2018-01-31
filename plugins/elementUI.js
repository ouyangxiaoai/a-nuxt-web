/* 暂时由于如果在head中引入这三个，会导致刷新页面head有个先变乱的过程，所以在此处引入，如果解决请知悉我，谢谢 */
import Vue from 'vue'
import {Menu, MenuItem, Submenu} from 'element-ui'

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
