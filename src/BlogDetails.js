import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, errorThrown } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    
    const handleDelete = (e) => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
        })
        .then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
           {errorThrown && <div>Blog Not Found</div>}
           {isLoading && <div>Loading blog...</div>}
           {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>Delete Blog</button>
            </article>
           )}
        </div>
     );
}
 
export default BlogDetails;