/*
import raw from "./hedro.txt";

fetch(raw)
  .then(r => r.text())
  .then(text => {
    console.log('text decoded:', text);
});

const reader = new FileReader();
reader.onload = res => {
    console.log(res.target.result);
}

reader.onerror = err => console.log(err);
var f = new File([""], "./");
reader.readAsText(f);
*/

const title_0 = "Welcome to my website!"
const content_0 = "Yooo! It's me DevHedron and welcome to this website I made using React.js. It took me countless hours to make this website and it was worth it.";
const date_0 = "27/03/2022";

const title_1 = "Testing article 2"
const content_1 = "Testing"
const date_1 = "27/03/2022";

const blog_posts = {
    '0' : [title_0, content_0, date_0],
    '1' : [title_1, content_1, date_1],
}; 

export default blog_posts;