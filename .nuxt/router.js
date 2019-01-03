import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _420266d6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _fd10da10 = () => interopDefault(import('..\\pages\\index\\admin\\index.vue' /* webpackChunkName: "pages_index_admin_index" */))
const _d67136a4 = () => interopDefault(import('..\\pages\\index\\admin\\index\\article.vue' /* webpackChunkName: "pages_index_admin_index_article" */))
const _1b1255f1 = () => interopDefault(import('..\\pages\\index\\admin\\index\\links.vue' /* webpackChunkName: "pages_index_admin_index_links" */))
const _469864c3 = () => interopDefault(import('..\\pages\\index\\admin\\index\\user.vue' /* webpackChunkName: "pages_index_admin_index_user" */))
const _1a614fb1 = () => interopDefault(import('..\\pages\\index\\article\\index.vue' /* webpackChunkName: "pages_index_article_index" */))
const _a8002364 = () => interopDefault(import('..\\pages\\index\\home\\index.vue' /* webpackChunkName: "pages_index_home_index" */))
const _4d3d7f64 = () => interopDefault(import('..\\pages\\index\\links\\index.vue' /* webpackChunkName: "pages_index_links_index" */))
const _293122a0 = () => interopDefault(import('..\\pages\\index\\sign\\index.vue' /* webpackChunkName: "pages_index_sign_index" */))
const _4c1334c5 = () => interopDefault(import('..\\pages\\index\\account\\setpassword.vue' /* webpackChunkName: "pages_index_account_setpassword" */))
const _733f3333 = () => interopDefault(import('..\\pages\\index\\account\\user.vue' /* webpackChunkName: "pages_index_account_user" */))
const _50b18a59 = () => interopDefault(import('..\\pages\\index\\article\\_id.vue' /* webpackChunkName: "pages_index_article__id" */))

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
      path: "/",
      component: _420266d6,
      name: "index",
      children: [{
        path: "admin",
        component: _fd10da10,
        name: "index-admin",
        children: [{
          path: "article",
          component: _d67136a4,
          name: "index-admin-index-article"
        }, {
          path: "links",
          component: _1b1255f1,
          name: "index-admin-index-links"
        }, {
          path: "user",
          component: _469864c3,
          name: "index-admin-index-user"
        }]
      }, {
        path: "article",
        component: _1a614fb1,
        name: "index-article"
      }, {
        path: "home",
        component: _a8002364,
        name: "index-home"
      }, {
        path: "links",
        component: _4d3d7f64,
        name: "index-links"
      }, {
        path: "sign",
        component: _293122a0,
        name: "index-sign"
      }, {
        path: "account/setpassword",
        component: _4c1334c5,
        name: "index-account-setpassword"
      }, {
        path: "account/user",
        component: _733f3333,
        name: "index-account-user"
      }, {
        path: "article/:id?",
        component: _50b18a59,
        name: "index-article-id"
      }]
    }],

    fallback: false
  })
}
