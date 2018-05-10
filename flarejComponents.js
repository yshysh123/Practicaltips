import 'flarej/lib/styles/grid'
import 'flarej/lib/components/grid'

const antdRequire = require.context('flarej/lib/components/antd', true, /\.js$/)
antdRequire.keys().forEach(key => {
  antdRequire(key)
})

const echartsRequire = require.context(
  'flarej/lib/components/ECharts',
  true,
  /\.js$/,
)
echartsRequire.keys().forEach(key => {
  echartsRequire(key)
})
// ;[
//   'barChart.js',
//   'funnelChart.js',
//   'gaugeChart.js',
//   'graphChart.js',
//   'heatmapChart.js',
//   'lineChart.js',
//   'mapChart.js',
//   'pieChart.js',
//   'radarChart.js',
//   'sankeyChart.js',
//   'scatterChart.js',
//   // 'treeChart.js',
//   'treeMapChart.js',
//   // './liquidFillChart.js',
//   // './wordCloudChart.js',
// ].forEach(filename => {
//   require(`flarej/lib/components/ECharts/${filename}`)
// })
