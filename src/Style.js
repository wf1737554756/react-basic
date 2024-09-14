import './index.css'

const style = {
    color: 'red',
    fontSize: '50px'
}

function Style() {
    return (
        <div className="Style">
            {/* 行内样式控制 */}
            <span style={style}>this is a span</span>

            {/* 通过class类名控制 */}
            <span className="foo">this is a class span</span>
        </div>
    );
}

export default Style;