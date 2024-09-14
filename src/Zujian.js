import { useState } from 'react'

// 定义组件
const Button = () => {
    // 业务逻辑组件逻辑
    return <button>click me!</button>
}
// useState实现一个计数器按钮
function Zujian() {
    // 1.调用useState添加一个状态变量
    // count 状态变量
    // setCount 修改状态变量的方法
    const [count, setCount] = useState(0)

    // 2.点击事件回调
    const handleClick = () => {
        // 作用：1.用传入的新值修改count
        //      2.重新使用新的count渲染UI
        setCount(count + 1)
    }

    // 修改对象状态
    const [form, setForm] = useState({name: 'jack'})
    const changeForm = () => {
        setForm({
            ...form,
            name: 'john'
        })
    }

    return (
        <div className="Zujian">
            {/* 使用组件 */}
            {/* 自闭和 */}
            <Button />
            {/* 成对标签 */}
            <Button></Button>
            <br></br>

            <button onClick={handleClick}>{count}</button>
            <button onClick={changeForm}>{form.name}</button>

        </div>
    );
}

export default Zujian;