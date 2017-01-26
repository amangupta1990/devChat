'use strict';

// src\services\discussion\hooks\before-create.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook,next) {
 
    const profileService = hook.app.services.profiles;
    const user = hook.params.user;

    profileService.find({email:user.email}).then(profiles=>{
     let  p = profiles.data.find(pf=>{return pf.email == user.email});
      let owner = {_id:user._id, email:p.email , picture:p.picture , gravatar: p.gravatar};
      let participants = [owner];
      hook.data.owner = owner;
      hook.data.participants = participants;
      next();
    })
    


  };
};
