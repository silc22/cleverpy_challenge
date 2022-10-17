import { createSlice } from "@reduxjs/toolkit";


 const postSlice = createSlice({
    name: 'post',
    initialState: {
        cards: [],
        oneCard : [],
        deletedPost: []
    },
    reducers: {
        fetchApi: (state, action) =>{
            const deleted = JSON.parse(localStorage.getItem("deleted"))
            if(deleted){
                state.deletedPost = deleted
                let filtered = action.payload.filter( card => !deleted.includes(card.id))
                state.cards = filtered
            }else{
                state.cards = action.payload
            }
        },    
        deletePost: (state, action) =>{
            let deletedPost = state.cards.find(card => card.id === action.payload)
            state.deletedPost.push(action.payload)
            if(deletedPost){
                state.cards.splice(state.cards.indexOf(deletedPost),1)
                localStorage.setItem("deleted", JSON.stringify(state.deletedPost))
                state.oneCard = []
            }

        },
        showOne: (state, action) =>{
            let card = state.cards.filter((card) => card.id === action.payload)
            state.oneCard = card
        },
        
        
    }
})

export const { fetchApi, deletePost, showOne} = postSlice.actions

export default postSlice.reducer
