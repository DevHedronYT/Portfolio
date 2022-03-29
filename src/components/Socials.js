import style from "./modules/socials.module.css";

function Socials() {
    return (
        <div className = {style.footer}>
            <div className = {style.socials}>
                <h1 className = {style.button}><a href = "https://www.youtube.com/c/DevHedron">YouTube</a></h1>
                <h1 className = {style.button}><a href = "https://github.com/DevHedronYT">GitHub</a></h1>
                <h1 className = {style.button}><a href = "https://discord.gg/p8RbUG3wnQ">Discord</a></h1>
            </div>
            <h5>© DevHedron, 2022</h5>
        </div>
    );
}

export default Socials;