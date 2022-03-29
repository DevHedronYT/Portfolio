import {React, useState} from 'react';
import blog_posts from "./posts/blog";
import style from "./modules/blog_post.module.css";

const BlogPost = ({title, content, date}) => {
    return (
        <div className = {style.blog_post}>
            <h1>{title}</h1>
            <p id = "content" dangerouslySetInnerHTML={{ __html: content }}></p>
            <h5>{date}</h5>
        </div>
    );
}

const values = Object.values(blog_posts);

function Blog() {
    const [val, setVal] = useState([]);
    if (val.length < 1) {
        setVal(values);
    }

    return (
        <div className = {style.blog}>
            {
                val.map(post => (
                    <BlogPost key = {post[0]} title = {post[0]} content = {post[1]} date = {post[2]}/>
                ))
            }
        </div>
    );
}

export default Blog;