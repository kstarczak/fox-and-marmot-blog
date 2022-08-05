import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const title = 'All Blog Posts';
    const [blogs, setblogs] = useState(null)
    const [isLoading, setisLoading] = useState(true);


    const loadPage = (data) => {
        setisLoading(false);
        setblogs(data);
    }
        

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(response => {
                    if (!response.ok) {
                        throw Error('Could not fetch blog data! Try again in a few minutes or send an email k.starczak@mail.com if error persists');
                    }
                    return response.json()
                })
                .then(data => loadPage(data))
                .catch(err => console.log(err.message));
        }, 2000);
    }, []);

    return (
        <div className="home">
            {isLoading && <div>loading blogs...</div>}
            {blogs && <Bloglist blogs={blogs} title={title} />}
        </div>
    );
}
 
export default Home;