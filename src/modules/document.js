var documentModule = {
  scrollY: 0,
  scrollX: 0,
  width: 0,
  height: 0,
  viewport: 0
}

documentModule.debounce = function (func, wait, immediate) {
  var timeout
  return function () {
    var context = this
    var args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

documentModule.resize = function () {
  documentModule.width = window.innerWidth || document.body.clientWidth
  documentModule.height = window.innerHeight || document.body.clientHeight

  if (this.width < 1025) {
    if (this.viewport !== 0) {
      documentModule.viewport = 0
    }
  } else {
    if (this.viewport !== 1) {
      documentModule.viewport = 1
    }
  }
}

documentModule.scroll = function () {
  documentModule.scrollY = window.scrollY
  documentModule.scrollX = window.scrollX
}

module.exports = documentModule
