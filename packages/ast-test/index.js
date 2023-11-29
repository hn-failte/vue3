const fs = require('fs')
const {
  baseParse,
  transform,
  generate,
  transformElement,
  transformOn,
  baseCompile
} = require('@vue/compiler-core')

const template0 = '<template><div>纯文本</div></template>'
// parse
const parse0 = baseParse(template0)
fs.writeFileSync('demo/parse0.json', JSON.stringify(parse0), 'utf8')
// 未经过 transform 直接 generate
const generate0 = generate(parse0, { mode: 'module' })
fs.writeFileSync('demo/generate0.json', JSON.stringify(generate0), 'utf8')

// 经过 transform 的 generate
const generate_full_0 = baseCompile(template0, {
  hoistStatic: true,
  mode: 'module'
})
fs.writeFileSync(
  'demo/generate_full_0.json',
  JSON.stringify(generate_full_0),
  'utf8'
)

const template1 =
  '<template><div v-if="visible" :class="class" @click="handleClick">纯文本</div></template>'
// parse
const parse1 = baseParse(template1)
fs.writeFileSync('demo/parse1.json', JSON.stringify(parse1), 'utf8')

// 简单 transform
transform(parse1, {
  nodeTransforms: [transformElement],
  directiveTransforms: { on: transformOn }
})

const generate1 = generate(parse1, { mode: 'module' })
fs.writeFileSync('demo/generate1.json', JSON.stringify(generate1), 'utf8')

const generate_full_1 = baseCompile(template1, {
  hoistStatic: true,
  mode: 'module'
})
fs.writeFileSync(
  'demo/generate_full_1.json',
  JSON.stringify(generate_full_1),
  'utf8'
)
