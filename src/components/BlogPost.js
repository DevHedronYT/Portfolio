const BlogPost = ({title, content, date}) => {
    return (
        <div className = "blog-post">
            <h1>{title}</h1>
            <p>{content}</p>
            <h5>{date}</h5>
        </div>
    )
}

export default BlogPost;