'use strict';

// profile-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  email: {type: String, required: true, unique: true},
  subjects: { type: Schema.Types.Mixed},
  subscribedQuestions: { type: Schema.Types.Mixed },
  lastActive: { type: Date, 'default': Date.now  },
  isOnline: { type: Boolean, 'default': true  },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  gravatar:{type:String},
  picture:{type:String}
});

const profileModel = mongoose.model('profile', profileSchema);

module.exports = profileModel;