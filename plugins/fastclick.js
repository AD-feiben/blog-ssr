if (process.BROWSER_BUILD) {
  const Vue = requrie('vue')
  const FastClick = requrie('fastclick')

  FastClick.attach(document.body)
  Vue.use(VueParticles)
}