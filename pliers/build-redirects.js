module.exports = createTask

var fs = require('fs')

function createTask (pliers, config) {

  pliers('buildRedirects', function (done) {

    var path = __dirname + '/../'
      , redirectsFile = path + config.dest + '/_redirects'
      , redirects =
        [ 'https://discord.avaclanche.uk/pc https://discordapp.com/invite/Fc3AKYD 301!'
        , 'https://discord.avaclanche.uk/* https://discordapp.com/invite/GSdr2t9 301!'
        , 'https://forum.avaclanche.uk/* https://avaclanche.uk 301!'
        , 'https://slack.avaclanche.uk/* https://avaclanche.uk 301!'
        ]

    fs.writeFileSync(redirectsFile, redirects.join('\n'))

    done()
  })

}
