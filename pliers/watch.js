module.exports = createTask

var browserSync = require('browser-sync')

function createTask (pliers, config) {

  pliers('watch', function () {

    pliers.watch(pliers.filesets.src, function () {
      pliers.run('build', function () {
        browserSync.get(config.title).reload(pliers.filesets.html)
      })
    })

  })

}
