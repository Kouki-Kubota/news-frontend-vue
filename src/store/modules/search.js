
import { searchCategory } from "../../api/searchApi.js";

// initial state
const state = () => ({
    newsData: {
      "": {},
    },
    activeCategory: "business",
    bookmarkData:[]
})
const article_id_list = {
  business: 0,
  entertainment: 20,
  technology: 40,
  sciense: 60
}

// action
const actions = {
  //activecategoryのニュースを取得
  async getArticles({commit, state}){
    const category = state.activeCategory
      const new_articles = await searchCategory(category)
      const article_data = new_articles.map((article, index)=>{
        const start_index = article_id_list[category]
        article.id = index + start_index
        article.bookmark = false
        return article
      })
      console.log("article_data", article_data)
      console.log("検索です")
      commit('setArticles', {data: article_data, category: category})
      return new_articles
  },
  //カテゴリ変更のaction
  updateCategory({commit, state}, category){
    if(state.activeCategory !== category){
      commit('setActiveCategory', category)
    }
  },
  //ブックマークデータの更新のaction
  updateBookmark({commit}, value){
    commit('updateBookmark', value)
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
  //ブックマークした記事の保存または削除
  updateBookmark(state, id){
    let category = state.activeCategory
    //すでにブックマークされているか
    const bookmark_index = state.bookmarkData.findIndex((item) => item.id == id)
    if(category !== null && bookmark_index !== -1){
      category = state.bookmarkData[bookmark_index].category
    }

    const article_index = state.newsData[category].findIndex((item) => item.id == id)
    const bookmark = state.newsData[category][article_index].bookmark
    if(article_index != null){
      //newsDataのbookmarkをtrue/falseに変更
      state.newsData[category][article_index].bookmark = !bookmark
      //ブックマークされていなかったらbookmarkDataにデータを追加
      if(bookmark_index === -1){
        let copy_data = Object.assign(state.newsData[category][article_index])
        copy_data.category = category
        state.bookmarkData.push(copy_data)
      }else{
        //すでにある場合はbookmarkDataから削除
        state.bookmarkData.splice(bookmark_index, 1)
      }
    }
  }
}

// getters
const getters = {
  getArticlesByCategory: (state) => {
    const category = state.activeCategory
    let data
    if(category === "bookmark"){
      data = state.bookmarkData
    }else{
      data = state.newsData[category]
    }
    return data;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}