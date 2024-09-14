import { useState, useRef } from 'react'

function FormTest() {
    // 受控绑定表单
    const [value, setValue] = useState('')

    // 1.useRef生成ref对象 绑定到dom标签上
    // 2.dom可用时，ref.current获取dom
    // 渲染完毕之后dom生成之后才可用
    const inputRef = useRef(null)
    const showDom = () => {
        console.log(inputRef.current);
        console.dir(inputRef.current)
    }

    return (
        <div className="FormTest">
            <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text" />
            <button onClick={showDom}>获取dom</button>
        </div>
    );
}

export default FormTest;