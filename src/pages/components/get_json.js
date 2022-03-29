async function get_json_obj_from_link(url, mode) {
    try { 
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(e) {
        console.log(e);

        // for git
        var projects = [{
            "full_name" : "none_two",
            "name" : "data missing",
            "description" : "failed to get data from request",
            "stargazers_count" : "-1",
            "language" : "failed to get data",
            "url" : "no data",
            "games" : [{
                "name" : "none",
                "views_count" : "-1"
            }]
        }];

        return projects;
    }
}

export default get_json_obj_from_link;

