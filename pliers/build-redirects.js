module.exports = createTask

var fs = require('fs')

function createTask (pliers, config) {

  pliers('buildRedirects', function (done) {

    var path = __dirname + '/../'
      , redirectsFile = path + config.dest + '/_redirects'
      , redirects =
        [ 'https://discord.avaclanche.uk/* https://discordapp.com/invite/94H3m5 301!'
        , 'https://forum.avaclanche.uk/* https://avaclanche.uk 301!'
        , 'https://slack.avaclanche.uk/* https://avaclanche.uk 301!'
        ]

    fs.writeFileSync(redirectsFile, redirects.join('\n'))

    done()
  })

}
