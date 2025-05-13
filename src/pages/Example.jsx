import {useEffect, useState} from 'react';

const Example = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then(setPosts)
        .catch(console.error)
        .finally(() => setLoading(false));
    }, []);

    console.log("posts", posts);

    return loading ? (
        <div>Loading...</div>
    ) : (
        <div>
            {posts.map((post) => (<p key={post.id}>{post.title}</p>))}
        </div>
    ); 
};

export default Example;