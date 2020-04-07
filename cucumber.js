const common = [
  'features/**/*.feature',
  '--format progress-bar',
  '--format node_modules/cucumber-pretty',
  '--retry 4',
  '--exit',
  'PORT=3000',
].join(' ')

module.exports = {
  default: common,
}
