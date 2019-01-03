import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js/lib/highlight'
import 'highlight.js/styles/github.css'
import 'github-markdown-css/github-markdown.css'

let md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>'
      } catch (__) {}
    }
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  }
})

export default md
