module.exports = createFileset

function createFileset (pliers) {

  pliers.filesets('images', __dirname + '/../../source/img/**/*.{gif,jpg,jpeg,png,svg}')

}
