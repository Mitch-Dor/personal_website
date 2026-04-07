import '../css/textBlock.css';

function TextBlock({ title, body }) {
    return (
        <div className="textBlock">
            <div className="textBlock-Title">{title}</div>
            <div className="textBlock-Body">{body}</div>
        </div>
    )
}

export default TextBlock;