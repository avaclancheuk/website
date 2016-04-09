module.exports = createFileset

function createFileset(pliers, config) {

  pliers.filesets('images', __dirname + '/../../source/img/**/*.{gif,jpg,jpeg,png,svg}')

}
