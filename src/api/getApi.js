import axios from 'axios'



export const changeCategory = async (category) => {
  const res = await axios.get('/api/getNewsApiCategory?category=' + category)
  
  const articles = res.data.articles;
  return articles
}