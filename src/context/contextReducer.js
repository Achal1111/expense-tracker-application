const contextReducer = (state, action) => {
    let transactions = [
      { type: "Income", amount: 0 },
      { type: "Expense", amount: 0 }
    ];
    if (action.type === "ADD_TRANSACTION") {
      transactions = [action.payload, ...state];
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    } else if (action.type === "DELETE_TRANSACTION") {
      transactions = state.filter((e) => e.id !== action.payload);
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    } else {
      return state;
    }
  };
  export default contextReducer;
  