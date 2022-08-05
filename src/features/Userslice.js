import { createSlice  } from "@reduxjs/toolkit";

const userslice = createSlice({
    name: 'user',
    initialState: {
        user: null,
      },
    reducers: {
        adduser(state, action){
            state.user = action.payload;
        },
    }
})

export const {adduser} = userslice.actions
export const userdapat = (state) => state.user.user
export default userslice.reducer