import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _00023a46 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _202de86a = () => import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages\\news\\index" */).then(m => m.default || m)
const _132a3fa6 = () => import('..\\pages\\example\\index.vue' /* webpackChunkName: "pages\\example\\index" */).then(m => m.default || m)
const _3b1f1268 = () => import('..\\pages\\function\\service.vue' /* webpackChunkName: "pages\\function\\service" */).then(m => m.default || m)
const _8e008234 = () => import('..\\pages\\us\\e-room.vue' /* webpackChunkName: "pages\\us\\e-room" */).then(m => m.default || m)
const _18222bb5 = () => import('..\\pages\\us\\platform-intro.vue' /* webpackChunkName: "pages\\us\\platform-intro" */).then(m => m.default || m)
const _461a019d = () => import('..\\pages\\function\\security.vue' /* webpackChunkName: "pages\\function\\security" */).then(m => m.default || m)
const _b35ac7e8 = () => import('..\\pages\\business\\b-intro.vue' /* webpackChunkName: "pages\\business\\b-intro" */).then(m => m.default || m)
const _7aab4781 = () => import('..\\pages\\method\\supermarket.vue' /* webpackChunkName: "pages\\method\\supermarket" */).then(m => m.default || m)
const _9f2c98ee = () => import('..\\pages\\business\\recruit.vue' /* webpackChunkName: "pages\\business\\recruit" */).then(m => m.default || m)
const _83321c94 = () => import('..\\pages\\function\\channel.vue' /* webpackChunkName: "pages\\function\\channel" */).then(m => m.default || m)
const _1eda6dd9 = () => import('..\\pages\\function\\market.vue' /* webpackChunkName: "pages\\function\\market" */).then(m => m.default || m)
const _500330b5 = () => import('..\\pages\\method\\rfid.vue' /* webpackChunkName: "pages\\method\\rfid" */).then(m => m.default || m)
const _37d0343e = () => import('..\\pages\\us\\link-us.vue' /* webpackChunkName: "pages\\us\\link-us" */).then(m => m.default || m)
const _5f022628 = () => import('..\\pages\\function\\c-manage.vue' /* webpackChunkName: "pages\\function\\c-manage" */).then(m => m.default || m)
const _441a4998 = () => import('..\\pages\\function\\big-data.vue' /* webpackChunkName: "pages\\function\\big-data" */).then(m => m.default || m)
const _17f5a6e2 = () => import('..\\pages\\_detail\\_id.vue' /* webpackChunkName: "pages\\_detail\\_id" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _00023a46,
			name: "index"
		},
		{
			path: "/news",
			component: _202de86a,
			name: "news"
		},
		{
			path: "/example",
			component: _132a3fa6,
			name: "example"
		},
		{
			path: "/function/service",
			component: _3b1f1268,
			name: "function-service"
		},
		{
			path: "/us/e-room",
			component: _8e008234,
			name: "us-e-room"
		},
		{
			path: "/us/platform-intro",
			component: _18222bb5,
			name: "us-platform-intro"
		},
		{
			path: "/function/security",
			component: _461a019d,
			name: "function-security"
		},
		{
			path: "/business/b-intro",
			component: _b35ac7e8,
			name: "business-b-intro"
		},
		{
			path: "/method/supermarket",
			component: _7aab4781,
			name: "method-supermarket"
		},
		{
			path: "/business/recruit",
			component: _9f2c98ee,
			name: "business-recruit"
		},
		{
			path: "/function/channel",
			component: _83321c94,
			name: "function-channel"
		},
		{
			path: "/function/market",
			component: _1eda6dd9,
			name: "function-market"
		},
		{
			path: "/method/rfid",
			component: _500330b5,
			name: "method-rfid"
		},
		{
			path: "/us/link-us",
			component: _37d0343e,
			name: "us-link-us"
		},
		{
			path: "/function/c-manage",
			component: _5f022628,
			name: "function-c-manage"
		},
		{
			path: "/function/big-data",
			component: _441a4998,
			name: "function-big-data"
		},
		{
			path: "/:detail/:id?",
			component: _17f5a6e2,
			name: "detail-id"
		}
    ],
    fallback: false
  })
}
