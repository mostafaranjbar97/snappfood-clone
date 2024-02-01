const { createSlice } = require("@reduxjs/toolkit");

const SearchModalSlice = createSlice({
    name: "searchModal",
    initialState:{
        isOpen:false,
        history:[],
        searchTerm:"",
        results:[]
    },
    reducers: {
        showSearchModal(state) {
            state.isOpen=true
            },
        hideSearchModal(state) {
            state.isOpen=false
            }
            ,addToHistory(state,action){
                state.history=[...state.history, action.payload]
                if(state.history.length>5){
                    state.history.shift()
                }
            }
            ,removeFromHistory(state,action){
                   state.history.splice(action.payload, 1);
                }
                ,setSearchTerms(state,action){
                    state.searchTerm=action.payload;
                }
                ,setResults(state,action){
                    state.results=action.payload;
                }    
            }
    }
)

export default SearchModalSlice.reducer;
export const {showSearchModal,hideSearchModal,addToHistory,removeFromHistory,setSearchTerms,setResults} = SearchModalSlice.actions;
