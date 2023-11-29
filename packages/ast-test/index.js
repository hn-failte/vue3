const fs = require('fs')
const {
  baseParse,
  transform,
  generate,
  transformElement,
  transformOn
} = require('@vue/compiler-core')

const parse0 = baseParse('<template><div>纯文本</div></template>')
fs.writeFileSync('demo/parse0.json', JSON.stringify(parse0), 'utf8')

const generate0 = generate(parse0, { mode: 'module' })
fs.writeFileSync('demo/generate0.json', JSON.stringify(generate0), 'utf8')

const parse1 = baseParse(
  '<template><div v-if="visible" :class="class" @click="handleClick">纯文本</div></template>'
)
fs.writeFileSync('demo/parse1.json', JSON.stringify(parse1), 'utf8')

transform(parse1, {
  nodeTransforms: [transformElement],
  directiveTransforms: { on: transformOn }
})

const generate1 = generate(parse1, { mode: 'module' })
fs.writeFileSync('demo/generate1.json', JSON.stringify(generate1), 'utf8')
