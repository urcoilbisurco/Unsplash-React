import Unsplash from 'unsplash-js';
import env from '../_env.js';
const unsplash = new Unsplash({
  applicationId: env.APP_ID,
  secret: env.APP_SECRET,
  callbackUrl: env.CALLBACK_URL,
  bearerToken: env.BEARER_TOKEN
});


window.unsplash=unsplash;
export default unsplash;
