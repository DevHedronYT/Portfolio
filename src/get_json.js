async function get_json_obj_from_link(url) {
    try { 
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(e) {
        console.log(e);
    }
}

export default get_json_obj_from_link;

