import style from './modules/contact.module.css';

function Skills() {
    return (
        <div className = {style.contact}>
            <h1>Contact me at</h1>
            <ul>
                <center>
                    <li className = {style.button}>Gmail: devhedroncontact[at]gmail[dot]com</li>
                    <li className = {style.button}>Discord: DevHedronYT#0001</li>
                </center>
            </ul>
        </div>
   );
}

export default Skills;