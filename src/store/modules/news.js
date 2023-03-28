import { getHomeNewsApi } from "../../api/getApi";
import { changeCategory } from "../../api/getApi";
import { searchCategory } from "../../api/searchApi";
import { getBookmarkApi } from "../../api/getBookmark";

// initial state
const state =  ({
    newsData: {
      "headLines": {},
      "sport": {},
      "business": {},
      "technology": {},
      "science": {},
      "entertainment": {},
      "search": {},
      "bookmark": {}
    },
    activeCategory: "headLines",
    bookmarkStatus: false,
    bookmarkData:[]
})

const article_id_list = {
  headLines: 0,
  business: 20,
  entertainment: 40,
  technology: 60,
  sciense: 80,
  search: 100,
  bookamrk: 120
}

// action
const actions = {
  //activecategoryのニュースを取得
  async getArticles({commit, state}){
    
    const category = state.activeCategory
    
    if(state.newsData[category].length){
      return false
    }
    
    //headlinesの時はトピックのニュースを取得するため、カテゴリとは異なるAPIを呼び出す
    if(category === "headLines"){
      const new_articles = await getHomeNewsApi()
      const article_data = new_articles.map((article, index)=>{
        const start_index = article_id_list[category]
        article.id = index + start_index
        article.bookmark = false
        return article
      })
      commit('setArticles', {data: article_data, category: category})
      return new_articles
    //bookmarkの情報を取得
    } else if (category === "bookmark") {
      const new_articles = await getBookmarkApi()
      const article_data = new_articles.map((article, index)=> {
        const start_index = article_id_list[category]
        article.id = index + start_index
        return article
      })
      commit('setArticles', {data: article_data, category: category})
      return new_articles
      // 各カテゴリの情報を取得
    } else {
      const new_articles = await changeCategory(category)
      const article_data = new_articles.map((article, index)=>{
        const start_index = article_id_list[category]
        article.id = index + start_index
        article.bookmark = false
        return article
      })
      commit('setArticles', {data: article_data, category: category})
      return new_articles
    }
  },
  //検索のアクション
  async searchArticles({commit, state}, { keyword }){
    const category = state.activeCategory
      const search_articles = await searchCategory(keyword)
      const article_data = search_articles.map((article, index)=>{
        const start_index = article_id_list[category]
        article.id = index + start_index
        article.bookmark = false
        return article
      })
    console.log("article_data", article_data)
    console.log("検索です")
    console.log(keyword)
    commit('setArticles', {data: article_data, category: category})
    return search_articles
  },
  //カテゴリ変更のaction
  updateCategory({commit, state}, category){
    if(state.activeCategory !== category){
      commit('setActiveCategory', category)
    }
  },
  // stateのbookmarkStatusの更新のaction
  updateBookmark({commit, state}, status){
    if(state.bookmarkStatus !== status){
      commit('updateBookmarkStatus', status)
    }
  }
}

// mutations
const mutations = {
  //取得データを保存
  setArticles(state, data){
    const news_data = data.data
    const news_category = data.category
    state.newsData[news_category] = news_data
  },
  //選択中のカテゴリを保存
  setActiveCategory(state, category){
    state.activeCategory = category
  },
  //ブックマークページ判定
  updateBookmarkStatus(state, status){
    console.log(`mutaionで確認${status}`)
      state.bookmarkStatus = status
  }
}

// getters
const getters = {
  getArticlesByCategory: (state) => {
    const category = state.activeCategory
    let data
    data = state.bookmarkData
    data = state.newsData[category]
    return data;
  },

  getBookmarkStatus: (state) => {
    const bookmarkStatus = state.bookmarkStatus
    console.log(`state: ${bookmarkStatus}`)
    return bookmarkStatus;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}