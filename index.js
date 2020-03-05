let axions = require('axios');
let cheerio = require('cheerio');
let fs = require('fs');

axions.get('http://members.qodr.or.id/')
    .then((response) => {
        // cek status dulu, jika 404 == error dan 202 == sukses
        if (response.status === 200) {
            const html = response.data;
            console.log(html)
        }
    })