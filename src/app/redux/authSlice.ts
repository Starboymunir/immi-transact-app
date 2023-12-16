import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: { email: string | null };
  loading: boolean;
  error: string | null;
}

const isLocalStorageAvailable = (): boolean => {
  try {
    localStorage.setItem("test", "test");
    localStorage.removeItem("test");
    return true;
  } catch {
    return false;
  }
};

const getUserFromLocalStorage = (): { email: string | null } => {
  if (isLocalStorageAvailable()) {
    const userString = localStorage.getItem("user"); // Corrected typo 'getTtem' to 'getItem'
    if (userString) {
      return JSON.parse(userString);
    }
  }
  return { email: null };
};

const initialState: AuthState = {
  user: getUserFromLocalStorage(),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUser: (state, action: PayloadAction<{ email: string | null }>) => {
      state.user = action.payload;
      if (isLocalStorageAvailable()) {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setUser, setError } = authSlice.actions;

export default authSlice.reducer;
