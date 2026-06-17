import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Posts(){
    const [posts, setPosts] = useState();

    const getData = async () =>{
        const promise = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await promise.json();
        setPosts(json);
    }

    useEffect(
        ()=>{
            getData()
        },[] 
    );

    return (
        <>
           <h1>Posts page</h1>
           <h2>Lists:</h2>
           <ul>
            {posts && posts.map((post)=> {
                return <li key={post.id}>{post.title} : <Link to={`/posts/${post.id}`}>Detail</Link></li>
            })}
           </ul>
        </>
    )
}

