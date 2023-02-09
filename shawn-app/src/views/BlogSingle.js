import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function BlogSingle() {
    const[post, setPost] = useState({})
    const{ id } = useParams()

    return(
        <div className="post">
            Post Single: {id}
        </div>
    )
}