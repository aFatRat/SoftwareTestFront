
let postRequest = (url, data, callback) => {
    // let formData = new FormData();
    //
    // for (let p in data){
    //     if(data.hasOwnProperty(p))
    //         formData.append(p, data[p]);
    // }

    let opts = {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data),
        // credentials: "include"
    };
    console.log(opts);
    fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export {postRequest};