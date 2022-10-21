import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const { data:blogs, isLoading, errorThrown } = useFetch ('http://localhost:8000/blogs');


    return (
        <div className="home">
            { errorThrown && <div>{errorThrown}</div>}
            { isLoading && <div className="loading">loading blogs...</div> }
            { blogs && <Bloglist blogs={blogs} /> }
        </div>
    );
}
 
export default Home;