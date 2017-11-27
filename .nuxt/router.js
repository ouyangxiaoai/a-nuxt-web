import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _a0208ab4 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _00a60573 = () => import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages\\news\\index" */).then(m => m.default || m)
const _9fb48af8 = () => import('..\\pages\\example\\index.vue' /* webpackChunkName: "pages\\example\\index" */).then(m => m.default || m)
const _5b34f69e = () => import('..\\pages\\function\\service.vue' /* webpackChunkName: "pages\\function\\service" */).then(m => m.default || m)
const _90094686 = () => import('..\\pages\\us\\e-room.vue' /* webpackChunkName: "pages\\us\\e-room" */).then(m => m.default || m)
const _69aa028c = () => import('..\\pages\\us\\platform-intro.vue' /* webpackChunkName: "pages\\us\\platform-intro" */).then(m => m.default || m)
const _d0bc4f18 = () => import('..\\pages\\function\\security.vue' /* webpackChunkName: "pages\\function\\security" */).then(m => m.default || m)
const _3d990e55 = () => import('..\\pages\\business\\b-intro.vue' /* webpackChunkName: "pages\\business\\b-intro" */).then(m => m.default || m)
const _5a1e4b8a = () => import('..\\pages\\method\\supermarket.vue' /* webpackChunkName: "pages\\method\\supermarket" */).then(m => m.default || m)
const _47b025d2 = () => import('..\\pages\\business\\recruit.vue' /* webpackChunkName: "pages\\business\\recruit" */).then(m => m.default || m)
const _55ad63ff = () => import('..\\pages\\function\\channel.vue' /* webpackChunkName: "pages\\function\\channel" */).then(m => m.default || m)
const _55480e70 = () => import('..\\pages\\function\\market.vue' /* webpackChunkName: "pages\\function\\market" */).then(m => m.default || m)
const _7e8eb4cc = () => import('..\\pages\\method\\rfid.vue' /* webpackChunkName: "pages\\method\\rfid" */).then(m => m.default || m)
const _18485147 = () => import('..\\pages\\us\\link-us.vue' /* webpackChunkName: "pages\\us\\link-us" */).then(m => m.default || m)
const _2206c3c3 = () => import('..\\pages\\function\\c-manage.vue' /* webpackChunkName: "pages\\function\\c-manage" */).then(m => m.default || m)
const _2f7ab20b = () => import('..\\pages\\function\\big-data.vue' /* webpackChunkName: "pages\\function\\big-data" */).then(m => m.default || m)
const _2290b0a6 = () => import('..\\pages\\_detail\\_id.vue' /* webpackChunkName: "pages\\_detail\\_id" */).then(m => m.default || m)



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
			component: _a0208ab4,
			name: "index"
		},
		{
			path: "/news",
			component: _00a60573,
			name: "news"
		},
		{
			path: "/example",
			component: _9fb48af8,
			name: "example"
		},
		{
			path: "/function/service",
			component: _5b34f69e,
			name: "function-service"
		},
		{
			path: "/us/e-room",
			component: _90094686,
			name: "us-e-room"
		},
		{
			path: "/us/platform-intro",
			component: _69aa028c,
			name: "us-platform-intro"
		},
		{
			path: "/function/security",
			component: _d0bc4f18,
			name: "function-security"
		},
		{
			path: "/business/b-intro",
			component: _3d990e55,
			name: "business-b-intro"
		},
		{
			path: "/method/supermarket",
			component: _5a1e4b8a,
			name: "method-supermarket"
		},
		{
			path: "/business/recruit",
			component: _47b025d2,
			name: "business-recruit"
		},
		{
			path: "/function/channel",
			component: _55ad63ff,
			name: "function-channel"
		},
		{
			path: "/function/market",
			component: _55480e70,
			name: "function-market"
		},
		{
			path: "/method/rfid",
			component: _7e8eb4cc,
			name: "method-rfid"
		},
		{
			path: "/us/link-us",
			component: _18485147,
			name: "us-link-us"
		},
		{
			path: "/function/c-manage",
			component: _2206c3c3,
			name: "function-c-manage"
		},
		{
			path: "/function/big-data",
			component: _2f7ab20b,
			name: "function-big-data"
		},
		{
			path: "/:detail/:id?",
			component: _2290b0a6,
			name: "detail-id"
		}
    ],
    fallback: false
  })
}
