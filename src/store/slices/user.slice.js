import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userSlice = createSlice({
		name: 'user',
    initialState: "Dexter Morgan",
    reducers: {
        setUser: (state, action) => action.payload
    }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;