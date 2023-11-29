const fs = require('fs')
const sfcCompiler = require('@vue/compiler-sfc')

const descriptor = sfcCompiler.parse(
  fs.readFileSync('demo-sfc/template.vue', 'utf8'),
  { sourceMap: false }
).descriptor
fs.writeFileSync('demo-sfc/descriptor.json', JSON.stringify(descriptor), 'utf8')
fs.writeFileSync(
  'demo-sfc/template.json',
  JSON.stringify(
    sfcCompiler.compileTemplate({
      filename: 'template.vue',
      source: descriptor.template.content
    })
  ),
  'utf8'
)
fs.writeFileSync(
  'demo-sfc/script.json',
  JSON.stringify(
    sfcCompiler.rewriteDefault(descriptor.script.content, 'componentName')
  ),
  'utf8'
)
fs.writeFileSync(
  'demo-sfc/styles.json',
  JSON.stringify(
    sfcCompiler.compileStyle({
      filename: 'template.css',
      id: 'data-v-test',
      source: descriptor.styles[0].content
    }).code
  ),
  'utf8'
)
