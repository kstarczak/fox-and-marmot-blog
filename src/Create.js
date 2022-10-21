import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Fox');
    const [isSending, setIsSending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsSending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then(() => {
            setIsSending(false);
            history.push('/')
        })
    }

    return (
        <div className='create'>
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text"
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required
                />
                <label>Blog body:</label>
                <textarea 
                rows="10"
                required
                value={body} 
                onChange={(e) => setBody(e.target.value)} 
                />
                <label>Blog author:</label>
                <select 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Fox">Fox</option>
                    <option value="Marmot">Marmot</option>
                </select>
                {!isSending && <button>Add blog</button>}
                {isSending && <button disabled>Adding blog...</button>}
            </form>
        </div>

    )
}

export default Create;