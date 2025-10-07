
export const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const CategoriesReducer = (state , action) => {

     switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };

    case "FETCH_SUCCESS":
      return { ...state, loading: false, categories: action.payload };

    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }

}
