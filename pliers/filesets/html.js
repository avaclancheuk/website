module.exports = createFileset

function createFileset (pliers, config) {

  pliers.filesets('html', __dirname + '/../../' + config.dest + '/**/*.html')

}
