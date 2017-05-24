'use strict';

const apps = require("q-io/http");

apps.read("http://localhost:7000")
.then((id) => {
    // console.log(id);
    return apps.read(`http://localhost:7001/${id}`)
})
.then((data) => {
        // console.log(data);
        console.log(JSON.parse(data));
})
.catch(console.error)
