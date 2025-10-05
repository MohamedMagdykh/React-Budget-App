
export const initialState = {
  transactions: [],
  loading: false,
  error: null,
};

export const TransactionsReducer = (state , action) => {

     switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };

    case "FETCH_SUCCESS":
      return { ...state, loading: false, transactions: action.payload };

    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "ADD_TRANSACTION":
      return { ...state, loading: false, transactions: [...state.transactions, action.payload] };

    case "UPDATE_TRANSACTION":
      return {
        ...state, loading: false,
        transactions: state.transactions.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
      };

    case "DELETE_TRANSACTION":
      return {
        ...state, loading: false,
        transactions: state.transactions.filter((t) => t.id !== action.payload),
      };

    default:
      return state;
  }

}
