var $ = require('jquery')
  , scrollOffset = 0

$('body').addClass('js')

function scrollTo ($target) {
  var top = $target.offset().top - scrollOffset

  $('body').animate({
    scrollTop: top
  }, 500)
}

$('[data-scroll-offset]').each(function () {
  var $this = $(this)

  scrollOffset += $this.outerHeight()
})

$('[data-scroll]').click(function (e) {
  var hash = $(this).attr('href').replace('/', '')
    , $target = $(hash)

  if ($target.length) {
    e.preventDefault()

    scrollTo($target)
  }
})
