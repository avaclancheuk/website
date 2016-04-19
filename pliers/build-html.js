module.exports = createTask

var harp = require('harp')

function createTask (pliers, config) {

  pliers('buildHtml', function (done) {

    var path = __dirname + '/../'

    harp.compile(path + config.src, path + config.dest, done)

  })

}
