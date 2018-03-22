const axios = require('axios');
async function ge() {
  const { data: posts }  = await axios.get('https://beliyslon-klin.ru/__w/wp-json/wp/v2/posts?per_page=50');
  return posts.map(u => `/courses/${u.slug}`)
}
ge().then(console.log);