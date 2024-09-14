// 项目的根组件
// App -> index.js -> public/index.html(root)

// 列表渲染
const list = [
  { id: 1001, name: 'Vue' },
  { id: 1002, name: 'React' },
  { id: 1003, name: 'Angular' },
]
// 基础条件
const isLogin = false
// 定义文章类型
const articleType = 3 // 0 1 3

// 定义核心函数(根据文章类型返回不同的JSX模板)
function getArticleTem() {
  if (articleType === 0) {
    return <div>我是无图文章</div>
  } else if (articleType === 1) {
    return <div>我是单图模式</div>
  } else {
    return <div>我是三图模式</div>
  }
}

function App() {
  // 基础事件绑定
  const hadnleClick = (name, e) => {
    console.log('button被点击了', name, e);
  }
  return (
    <div className="App">
      this is App
      {/* 渲染列表 */}
      {/* map 循环哪个结构 return结构 */}
      {/* 注意事项：加上一个独一无二的key 字符串或者number id */}
      {/* key的作用：React框架内部 */}
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>

      {/* 基础条件渲染 */}
      {/* 逻辑与 && 条件为真显示 */}
      {isLogin && <span>this is span</span>}
      {/* 逻辑或 || 条件为假显示 */}
      {isLogin || <span>this is span</span>}
      {/* 三元运算 */}
      {isLogin ? <span>jack</span> : <span>mark</span>}

      {/* 复杂条件渲染 */}
      {/* 调用函数渲染不同的模板 */}
      {getArticleTem()}

      <button onClick={(e) => {
        hadnleClick('jack', e);
      }}>click me</button>

    </div>
  );
}

export default App;
