import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import annonceReducer from '../features/annonce/annonceSlice'
import recruterSlice from "../features/recruter/recruterSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        annonces : annonceReducer,
        recruters: recruterSlice

    },
});