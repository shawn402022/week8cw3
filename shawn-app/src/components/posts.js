
export default function CarList(props) {
    return (
        <div className="cList">
            <h2>{props.post.name}</h2>
            <p>{ props.post.year}</p>
            <p className="author"> Posted By: { props.post.owner }</p>
        </div>
    )
}