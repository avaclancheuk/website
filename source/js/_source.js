var $ = require('jquery')

function scrollTo ($target) {
  var top = $target.offset().top
    , hash = $target.attr('id')

  $('body').animate({
    scrollTop: top
  }, 500, function () {
    if (window.location.hash !== hash) {
      window.location.hash = hash
    }
  })
}

$('[data-scroll]').click(function (e) {
  var hash = $(this).attr('href').replace('/', '')
    , $target = $(hash)

  if ($target.length) {
    e.preventDefault()

    scrollTo($target)
  }
})

$('.touchevents [data-promo]').click(function (e) {
  var href = $(this).attr('href')
  e.preventDefault()

  setTimeout(function () {
    window.location = href
  }, 1000)
})
