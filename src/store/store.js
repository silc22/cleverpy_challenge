import { configureStore } from "@reduxjs/toolkit"
import post from "./slices/posts"

const store = configureStore({ 
    reducer : {
        post
    }
})

export default store
