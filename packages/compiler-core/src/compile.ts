import { baseParse } from './parse'
import { transform } from './transform'
import { generate } from './codegen'
import { extend } from '@vue/shared'
import { transformIf } from './transforms/vIf'
import { transformFor } from './transforms/vFor'
import { transformSlotOutlet } from './transforms/transformSlotOutlet'
import { transformElement } from './transforms/transformElement'
import { transformOn } from './transforms/vOn'
import { transformBind } from './transforms/vBind'
import { trackSlotScopes } from './transforms/vSlot'
import { transformText } from './transforms/transformText'
import { transformOnce } from './transforms/vOnce'
import { transformModel } from './transforms/vModel'
import { transformMemo } from './transforms/vMemo'

export function baseCompile(template: string, options = {}) {
  // 将template源码转换为ast树
  const ast = baseParse(template, options)
  // 对节点的转换，在数组中的顺序会影响转换的优先级
  const nodeTransforms = [
    transformOnce,
    transformIf,
    transformMemo,
    transformFor,
    transformSlotOutlet,
    transformElement,
    trackSlotScopes,
    transformText
  ]
  // 对指令的转换，在后续的 buildProps 时会用到
  const directiveTransforms = {
    on: transformOn,
    bind: transformBind,
    model: transformModel
  }
  // 在ast模式下做节点与指令等转换
  transform(
    ast,
    extend({}, options, {
      nodeTransforms,
      directiveTransforms
    })
  )
  // 将转换后的代码重新生成为代码
  return generate(ast, extend({}, options))
}
