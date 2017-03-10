var express = require('express');
var router = express.Router();
var Vimeo = require('vimeo').Vimeo;

let client_id = '';
let client_secret = '';
let access_token = '';

var lib = new Vimeo( client_id, client_secret, access_token);


router.get('/', (req,res) => {
 lib.request({
       // This is the path for the videos contained within the staff picks channels
       path : '/channels/staffpicks/videos',
       // This adds the parameters to request page two, and 10 items per page
       query : {
           page : 1
       }
   }, function (error, body, status_code, headers) {
       if (error) {
           console.log('error');
           console.log(error);
       } else {
           console.log('body');
           console.log(body);
           return res.json(body)
       }

       console.log('status code');
       console.log(status_code);
       console.log('headers');
       console.log(headers);
   });

});

module.exports = router;
