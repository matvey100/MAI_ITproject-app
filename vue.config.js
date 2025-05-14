module.exports = {
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/MAI_ITproject-app/'
    : '/'
}