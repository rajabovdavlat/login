import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async (query, { rejectWithValue }) => {
    if (!query?.trim()) {
      return rejectWithValue("Пустой запрос");
    }
    if (!ACCESS_KEY) {
      return rejectWithValue(
        "Unsplash API ключ не найден. Добавьте VITE_UNSPLASH_KEY в .env"
      );
    }
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          query
        )}&per_page=18&client_id=${ACCESS_KEY}`
      );
      if (!res.ok) {
        return rejectWithValue(`HTTP error: ${res.status}`);
      }
      const data = await res.json();
      return { results: data.results ?? [], query };
    } catch (e) {
      return rejectWithValue(e.message || "Неизвестная ошибка");
    }
  }
);

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    query: "",
    items: [],
    loading: false,
    error: null,
    searched: false,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    reset(state) {
      state.items = [];
      state.loading = false;
      state.error = null;
      state.searched = false;
      state.query = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.items = [];
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.results;
        state.searched = true;
        state.query = action.payload.query;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        state.searched = true;
      });
  },
});

export const { setQuery, reset } = imagesSlice.actions;
export default imagesSlice.reducer;
