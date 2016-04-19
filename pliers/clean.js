module.exports = createTask

function createTask (pliers, config) {

  pliers('clean', function (done) {

    // ./build.js
    pliers.rm(__dirname + '/../' + config.dest)

    done()

  })

}
