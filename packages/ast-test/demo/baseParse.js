// 根节点
const ast = {
  type: 0, // 节点类型，用于标识语法单元或操作。如: ROOT、ELEMENT、TEXT、COMMENT、SIMPLE_EXPRESSION、 INTERPOLATION等
  children: [
    {
      type: 1,
      ns: 0, // 指代Namespace属性，用于表示HTML文档中元素节点所属的命名空间，大多数编程语言为空，vue中为0
      tag: 'template', // 标签名。如: template、script、div、span
      tagType: 0, // 标签类型。如: ELEMENT, COMPONENT, SLOT, TEMPLATE
      props: [], // 属性集
      isSelfClosing: false, // 是否是自闭合标签
      children: [
        // 子节点
        {
          type: 1,
          ns: 0,
          tag: 'div',
          tagType: 0,
          props: [],
          isSelfClosing: false,
          children: [
            {
              type: 2,
              content: '纯文本', // 要渲染的文本内容
              loc: {
                // 位置信息
                start: {
                  // 起始位置
                  column: 16, // 列位置（换行后会从0开始）
                  line: 1, // 行位置
                  offset: 15 // 字符位置（与换行无关）
                },
                end: {
                  // 结束位置
                  column: 19,
                  line: 1,
                  offset: 18
                },
                source: '纯文本' // 源码
              }
            }
          ],
          loc: {
            start: { column: 11, line: 1, offset: 10 },
            end: { column: 25, line: 1, offset: 24 },
            source: '<div>纯文本</div>'
          }
        }
      ],
      loc: {
        start: { column: 1, line: 1, offset: 0 },
        end: { column: 36, line: 1, offset: 35 },
        source: '<template><div>纯文本</div></template>'
      }
    }
  ],
  helpers: {}, // 帮助函数，用于存储在转换或编译过程中生成的辅助函数
  components: [], // 组件，用于存储当前模块所依赖或使用到的组件信息，包括组件名称、路径、导入声明等
  directives: [], // 指令，用于存储与当前模块相关联的所有自定义指令信息，包括指令名称、参数、修饰符等
  hoists: [], // 提升项，用于存储需要被提前计算并缓存起来以优化性能的表达式或计算结果
  imports: [], // 导入项，用于描述当前模块所引入的外部模块，并记录其对应关系和可访问性等相关信息
  cached: 0, // 用于缓存一次求值结果，并在后续多次使用时直接返回缓存值
  temps: 0, // 临时变量，用于存储在生成的代码中临时使用的变量，通常是用于辅助某个功能的实现或过程的处理
  loc: {
    start: { column: 1, line: 1, offset: 0 },
    end: { column: 36, line: 1, offset: 35 },
    source: '<template><div>纯文本</div></template>'
  }
}
