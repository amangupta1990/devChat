'use strict';

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
   
    let profile  = {
      email:user.email,
      userId: user._id,
      subjects :[''],
      subscribedQuestions:[''],
      lastActive:null,
      isOnline:null

    };


profileService.create(profile).then((data)=>{ console.log("profile created",data) });

  };
};
