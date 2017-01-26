'use strict';

// discussion-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discussionSchema = new Schema({
  title: { type: String, required: true },
  body: {type:String, required:true},
  owner: { type: Schema.Types.Mixed},
  subjects:{type:Schema.Types.Mixed},
  participants:{type:Schema.Types.Mixed},
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const discussionModel = mongoose.model('discussion', discussionSchema);

module.exports = discussionModel;