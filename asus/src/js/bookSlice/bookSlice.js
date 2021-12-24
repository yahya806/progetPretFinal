import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

  
                                                        //add book
export const addBook =createAsyncThunk("book/addBook",
async(book)=>{
    try {
       let result= await axios.post("http://localhost:5000/book/addBook",book);
       return result.data;
        
    } catch (error) {
      console.log(error)  ;
    }
});

                                                        //get book

export const getBooks =createAsyncThunk("book/getBooks",
async()=>{
    try {
        return await axios.get("http://localhost:5000/book/books");
        ;
        
    } catch (error) {
      console.log(error)  ;
    }
});

                                                //update book

export const editBook =createAsyncThunk("book/edit",async({id,editedBook})=>{
  
    try {
      console.log({id,editedBook});
       return await axios.put(`http://localhost:5000/book/books/${id}`,editedBook) 
        
    } catch (error) {
      console.log(error)  ;
    }
});

                                                //delete book
export const deleteBook = createAsyncThunk(
    "book/deleteBook",
    async ({id}) => {
      try {
        return await axios.delete(`http://localhost:5000/book/${id}`);
      } catch (error) {
        console.log(error);
      }
    }
  );

const initialState  = {
  books:[],
  status:null,
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
   
  },
  extraReducers:{

                                          //add book

[addBook.pending] :(state) => {
    state.status= "pending";
},
[addBook.fulfilled] :(state)=>{
    state.status= "success";
     
},
[addBook.rejected] :(state)=>{
    state.status= "failed";
},

                                            //get  Book

[getBooks.pending] :(state) => {
  state.status= "pending";
},
[getBooks.fulfilled] :(state,action)=>{
  state.status= "success";
 state.books=action.payload.data.response;
console.log(action)
  
},
[getBooks.rejected] :(state)=>{
  state.status= "failed";
},

                                            // editbook
[editBook.pending] :(state) => {
  state.status= "pending";
},
[editBook.fulfilled] :(state)=>{
  state.status= "success";
 
},
[editBook.rejected] :(state)=>{
  state.status= "failed";
},

                                            //deletbook
[deleteBook.pending] :(state) => {
    state.status= "pending";
  },
  [deleteBook.fulfilled] :(state)=>{
    state.status= "success";
   
  },
  [deleteBook.rejected] :(state)=>{
    state.status= "failed";
  },

  },
});

// Action creators are generated for each case reducer function
export const { } = bookSlice.actions;

export default bookSlice.reducer;