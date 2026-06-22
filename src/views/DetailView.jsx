import { useLoaderData } from "react-router"

export default function DetailView(){

    const [post, comments] = useLoaderData();

    return (
      <>
        <h1>Detail page</h1>
        <h2>Title: {post.title}</h2>
        <h3>Body: {post.body}</h3>
        <h4>Comments:</h4>
        <ul>
            {comments.map((comment)=>{
                return <li>{comment.body} - {comment.email}</li>
            })}
        </ul>
      </>
    )
}