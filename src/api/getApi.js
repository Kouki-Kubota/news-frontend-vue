import axios from 'axios'

const key = '540c0a2d08264331b2101b7c7169ed92';

export const changeCategory = async (category) => {
  const res = await axios.get('https://newsapi.org/v2/top-headlines?country=jp&category=' + category +  '&apiKey='+ key)
  
  const articles = res.data.articles;
  return articles
}