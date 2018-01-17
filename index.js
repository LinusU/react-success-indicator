var React = require('react')

var borderPath = 'M 48 3 a 45 45 0 1 1 0 90 a 45 45 0 1 1 0 -90'
var tickPath = 'M 24 52 l 16 16 l 32 -32'

var style = (
  '#border {\n' +
  '  animation: 240ms draw-border 320ms;\n' +
  '  animation-fill-mode: both;\n' +
  '  animation-timining-function: ease-in;\n' +
  '}\n' +
  '\n' +
  '#tick {\n' +
  '  animation: 240ms draw-tick 560ms;\n' +
  '  animation-fill-mode: both;\n' +
  '  animation-timining-function: ease-out;\n' +
  '}\n' +
  '\n' +
  '@keyframes draw-border {\n' +
  '  0% { stroke-dasharray: 0, 282.74; opacity: 0; }\n' +
  '  0.001% { opacity: 1; }\n' +
  '  100% { stroke-dasharray: 282.74, 282.74; }\n' +
  '}\n' +
  '\n' +
  '@keyframes draw-tick {\n' +
  '  0% { stroke-dasharray: 0, 68; opacity: 0; }\n' +
  '  0.001% { opacity: 1; }\n' +
  '  100% { stroke-dasharray: 68, 68; }\n' +
  '}\n' +
  ''
)

function SuccessIndicator (props) {
  var size = ((props && props.size) || '96px')
  var color = ((props && props.color) || 'black')

  return React.createElement('svg', { width: size, height: size, viewBox: '0 0 96 96' }, [
    React.createElement('style', { key: 'style' }, style),
    React.createElement('path', { key: 'border', id: 'border', d: borderPath, fill: 'none', strokeWidth: 6, stroke: color, strokeLinecap: 'round' }),
    React.createElement('path', { key: 'tick', id: 'tick', d: tickPath, fill: 'none', strokeWidth: 6, stroke: color, strokeLinecap: 'butt' })
  ])
}

module.exports = SuccessIndicator
