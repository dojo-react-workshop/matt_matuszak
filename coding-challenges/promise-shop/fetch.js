'use strict';

const apps = require("q-io/http");

apps.read("http://localhost:1337")
.then((json) => console.log(JSON.parse(json)))
.catch(console.error)
