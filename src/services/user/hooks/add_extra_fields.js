'use strict';
const crypto = require('crypto');
const gravatarUrl = 'https://s.gravatar.com/avatar';
const query = `s=60`;
   
      // create gravtar url
 
// src\services\user\hooks\add_extra_fields.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);


  return function(hook) {
      var profileService = hook.app.services.profiles;
      const user = hook.params.user;


  const gravatarImage = (email)=>{
  // Gravatar uses MD5 hashes from an email address to get the image
  const hash = crypto.createHash('md5').update(email).digest('hex');

  return `${gravatarUrl}/${hash}?${query}`;
};

     let gravImage = gravatarImage(user.email);

    let profile  = {
      email:user.email,
      userId: user._id,
      subjects :[''],
      subscribedQuestions:[''],
      lastActive:null,
      isOnline:null,
      gravatar: gravImage,
      picture:null
      

    };


profileService.create(profile).then((data)=>{ console.log("profile created",data) });

  };
};
