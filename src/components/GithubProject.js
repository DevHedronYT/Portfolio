import style from './modules/git.module.css';

const GProj = ({name, description, stars, language, url}) => {
    return (
        <div className = {style.github_proj}>
            <h1>{name}</h1>
            <p>{description}</p>
            <h1>Stars: {stars}</h1>
            <h1>Language: {language}</h1>
            <a href={url}>Link</a>
        </div>
    );
}

export default GProj;