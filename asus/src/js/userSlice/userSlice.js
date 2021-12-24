import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user) => {
    try {
      let result = await axios.post(
        "http://localhost:5000/user/register",
        user
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginUser = createAsyncThunk("user/loginUser", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/login", user);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

export const currentUser = createAsyncThunk("user/current", async () => {
  let opts = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("http://localhost:5000/user/current", opts);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
export const userlist = createAsyncThunk("user/list", async () => {
  try {
    let result = await axios.get("http://localhost:5000/user/users");
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

//update user

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ userupdated, id }) => {
    try {
      let result = await axios.put(
        `http://localhost:5000/user/updateUser/${id}`,
        userupdated
      );
      console.log(userupdated);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//delete user

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/user/${id}`);
    console.log(id);
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  user: null,
  userlist: null,
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("token");
      state.user = null;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.status = "pending";
    },
    [registerUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
    },
    [registerUser.rejected]: (state) => {
      state.status = "failed";
    },

    [loginUser.pending]: (state) => {
      state.status = "pending";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
    },
    [loginUser.rejected]: (state) => {
      state.status = "failed";
    },

    [currentUser.pending]: (state) => {
      state.status = "pending";
    },
    [currentUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload?.user;
    },
    [currentUser.rejected]: (state) => {
      state.status = "failed";
    },
    [userlist.pending]: (state) => {
      state.status = "pending";
    },
    [userlist.fulfilled]: (state, action) => {
      state.status = "success";
      state.userlist = action.payload.users;
    },
    [userlist.rejected]: (state) => {
      state.status = "failed";
    },

    //delete user
    [deleteUser.pending]: (state) => {
      state.status = "pending";
    },
    [deleteUser.fulfilled]: (state) => {
      state.status = "success";
    },
    [deleteUser.rejected]: (state) => {
      state.status = "failed";
    },
    //updateUser

    [updateUser.pending]: (state) => {
      state.status = "pending";
    },
    [updateUser.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [updateUser.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;
