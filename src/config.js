const env = process.env.NODE_ENV
let config = {
    env
}
const EnvConfig = {
  development: {
    host: `https://mv-test.yy.com`,
  },
  production: {
    host: `https://mv.yy.com`,
  }
}
config = Object.assign(config, EnvConfig[env])
export default config
