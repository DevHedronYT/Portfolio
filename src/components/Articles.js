import {React, useState} from 'react';
import BlogPost from "./BlogPost";
import blog_posts from "./posts/blog";

const values = Object.values(blog_posts);

function Blog() {
    const [val, setVal] = useState([]);
    if (val.length < 1) {
        setVal(values);
    }

    return (
        <div id = "blog-stuff">
            {
                val.map(post => (
                    <BlogPost key = {post[0]} title = {post[0]} content = {post[1]} date = {post[2]}/>
                ))
            }
        </div>
    );
}

export default Blog;