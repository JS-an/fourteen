import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _106e2092 = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages_admin" */))
const _3be4f758 = () => interopDefault(import('..\\pages\\admin\\article.vue' /* webpackChunkName: "pages_admin_article" */))
const _6e882717 = () => interopDefault(import('..\\pages\\admin\\links.vue' /* webpackChunkName: "pages_admin_links" */))
const _339e5246 = () => interopDefault(import('..\\pages\\admin\\user.vue' /* webpackChunkName: "pages_admin_user" */))
const _4a2b8b2e = () => interopDefault(import('..\\pages\\article\\index.vue' /* webpackChunkName: "pages_article_index" */))
const _cdc1f728 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages_home" */))
const _a149b008 = () => interopDefault(import('..\\pages\\links.vue' /* webpackChunkName: "pages_links" */))
const _6eaf636c = () => interopDefault(import('..\\pages\\sign.vue' /* webpackChunkName: "pages_sign" */))
const _03819506 = () => interopDefault(import('..\\pages\\account\\setpassword.vue' /* webpackChunkName: "pages_account_setpassword" */))
const _25dbdd0a = () => interopDefault(import('..\\pages\\account\\user.vue' /* webpackChunkName: "pages_account_user" */))
const _6d65c311 = () => interopDefault(import('..\\pages\\article\\_id.vue' /* webpackChunkName: "pages_article__id" */))
const _420266d6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _106e2092,
      name: "admin",
      children: [{
        path: "article",
        component: _3be4f758,
        name: "admin-article"
      }, {
        path: "links",
        component: _6e882717,
        name: "admin-links"
      }, {
        path: "user",
        component: _339e5246,
        name: "admin-user"
      }]
    }, {
      path: "/article",
      component: _4a2b8b2e,
      name: "article"
    }, {
      path: "/home",
      component: _cdc1f728,
      name: "home"
    }, {
      path: "/links",
      component: _a149b008,
      name: "links"
    }, {
      path: "/sign",
      component: _6eaf636c,
      name: "sign"
    }, {
      path: "/account/setpassword",
      component: _03819506,
      name: "account-setpassword"
    }, {
      path: "/account/user",
      component: _25dbdd0a,
      name: "account-user"
    }, {
      path: "/article/:id",
      component: _6d65c311,
      name: "article-id"
    }, {
      path: "/",
      component: _420266d6,
      name: "index"
    }],

    fallback: false
  })
}
