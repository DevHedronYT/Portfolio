import style from './modules/git.module.css';

const GProj = ({name, description, stars, language, url}) => {
    return (
        <div className = {style.github_proj}>
            <div className = {style.container}>
                <h1>{name}</h1>
                <p>{description}</p>
                <h1>Stars: {stars}</h1>
                <h1>Using {language}</h1>
                <a href={url}>Link</a>
            </div>
        </div>
    );
}

export default GProj;