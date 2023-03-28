import axios from 'axios'

export const getBookmarkApi = async () => {
  const res = await axios.get('/api/getBookmarkData')
  
  const articles = res.data;
  console.log(articles);
  return articles
}

export const insertBookmarkApi = async (urlToImage, title, url) => {
  const res = await axios.get('/api/insertBookmarkData?image_url=' + urlToImage + '&article_title=' + title + '&article_url=' + url + ')')
  const statusMessage = res.data;
  console.log(statusMessage);
  return statusMessage
}

export const deleteBookmarkApi = async (url) => {
  const res = await axios.get('/api/deleteBookmarkData?url=' + url )
  const statusMessage = res.data;
  console.log(statusMessage);
  return statusMessage
}