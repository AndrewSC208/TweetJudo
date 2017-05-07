'use strict';

const service = require('feathers-mongoose');
const twitterStream = require('./twitterStream-model');
const hooks = require('./hooks');
const Twitter = require('twitter');
const Rx = require('rxjs/Rx');

module.exports = function() {
  const app = this;

  const options = {
    Model: twitterStream,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/twitterStreams', service(options));
  // Get our initialize service to that we can bind hooks
  const twitterStreamService = app.service('/twitterStreams');
  // Set up our before hooks
  twitterStreamService.before(hooks.before);
  // Set up our after hooks
  twitterStreamService.after(hooks.after);

  const client = new Twitter({
    consumer_key: 'eXNpMN6cQCaDjduisG2WdKD7s',
    consumer_secret: 'GqFmjCbTTKzF2ztfemxJ4pVtXDMANscIQjlvCjtdBTCwsuQbuW',
    access_token_key: '286807197-3nAx2pail0XaH5TR69O5o0iUVRUvNueBUS6p9gwJ',
    access_token_secret: '7H1eatPQp9zBbaw1Xmvik8miZwKqHTdtTAO8JJyoVg6tL'
  });

  // The user ID of @realDonaldTrump.
  const TRUMP_USER_ID = 25073877;

  const params = {screen_name: 'realDonaldTrump'};


  // GATHER INFORMATION FROM TWITTER: 
  // client.stream('user', params, (stream) => {
  //   stream.on('data', (x)=> {

  //       if(!x.limit) {
  //         twitterStreamService.create({
  //           created_at: x.created_at,
  //           id: x.id,
  //           text: x.text,
  //           source: x.source,
  //           in_reply_to_status_id: x.in_reply_to_status_id,
  //           in_reply_to_user_id: x.in_reply_to_user_id,
  //           in_reply_to_screen_name: x.in_reply_to_screen_name,
  //           user_id: x.user.id
  //         }).then((x) => {

  //           if(x.user_id == TRUMP_USER_ID) {
  //             console.log(`TRUMP: ${x.text}`);
  //           }

  //         });
  //       }        
  //   });
   
  //   stream.on('error', (error)=> {
  //     throw error;
  //   });
  // });

  // get req to hydrate db => grabe timeline
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if(error) throw error;
      console.log(tweets);  // The favorites. 
      //console.log(response);  // Raw response object. 
  });

};



