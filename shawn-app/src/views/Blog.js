import { useState, useEffect } from "react";
import Post from "../components/posts";

export default function Blog() {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        async function getPosts() {
            const response = await fetch ('https://my-json-server.typicode.com/Llang8/cars-api/cars')
            const data = await response.json()
            console.log(data)
            setPosts(data)

        }

        getPosts()
    }, [])

    return (
        <div className="posts">
            <h1>Blog</h1> 
            {posts.map(post => <Post key={post.id} post={post} />) }

        </div>
    )
}
