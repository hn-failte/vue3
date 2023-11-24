import { compile } from '@vue/compiler-dom'
import { registerRuntimeCompiler } from '@vue/runtime-dom'
import * as runtimeDom from '@vue/runtime-dom'

function compileToFunction(template: string, options = {}) {
  // compile将传入template, options得到了Vue构建函数
  const { code } = compile(template, options)
  // 将源码封装到函数内，封装的同时也依赖 runtimeDom
  const render = new Function('Vue', code)(runtimeDom)
  return render
}

registerRuntimeCompiler(compileToFunction)

export { compileToFunction as compile }
export * from '@vue/runtime-dom'
