import axios from 'axios'

const key = 'authKey';
let now = new Date();
function LoadProc() {
  let year = now.getFullYear();
  let month = (now.getMonth() + 1);
  let date = (now.getDate() - 20);
  console.log(`${year}-${month}${date}`);
  return `${year}-${month}-${date}`;
}
export const searchCategory = async (search) => {
  let date = LoadProc();
  const res = await axios.get('https://newsapi.org/v2/everything?q=' + search + '&from=' + date + '&sortBy=publishedAt&apiKey='+ key)
  const articles = res.data.articles;
  return articles
}