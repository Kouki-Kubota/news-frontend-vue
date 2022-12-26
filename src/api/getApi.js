import axios from 'axios'

// const key = '540c0a2d08264331b2101b7c7169ed92';
// const url = 'http://localhost:9000/getApi?category='

export const changeCategory = async (category) => {
  const res = await axios.get('/api/getApi?category=' + category)
  
  const articles = res.data.articles;
  return articles
}