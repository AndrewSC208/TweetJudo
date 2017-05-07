'use strict';

// twitterStream-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// streaming:
// const twitterStreamSchema = new Schema({
//   created_at: Date,
//   id: Number,
//   text: String,  
//   source: String,
//   in_reply_to_status_id: Number,  
//   in_reply_to_user_id: Number,
//   in_reply_to_screen_name: String,
//   user_id: Number
// });

const twitterStreamSchema = new Schema({
// add second here:
  
});

const twitterStreamModel = mongoose.model('twitterStream', twitterStreamSchema);

module.exports = twitterStreamModel;