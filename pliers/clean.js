module.exports = createTask

function createTask (pliers, config) {

  pliers('clean', function (done) {

    pliers.rm(__dirname + '/../' + config.dest)

    done()

  })

}
