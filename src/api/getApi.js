import axios from 'axios'

export const getHomeNewsApi = async() => {
  const res = await axios.get('/api/getHomeNewsApi')

  const articles = res.data.articles;
  return articles
} 

export const changeCategory = async (category) => {
  const res = await axios.get('/api/getNewsApiCategory?category=' + category)
  
  const articles = res.data.articles;
  return articles
}