import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 1234,
    category: "Car",
    type: "Expense",
    date: "2021-08-01",
    id: "0dbfb8a8-4645-49c5-b50d-8192d7170a6b"
  },
  {
    amount: 112,
    category: "Clothes",
    type: "Expense",
    date: "2021-08-01",
    id: "bd25bbbf-574e-4e38-9dcc-32ad54072891"
  },
  {
    amount: 111,
    category: "Deposits",
    type: "Income",
    date: "2021-08-01",
    id: "5b37f201-c812-4fa3-9cc0-9fc1a7b8edc8"
  },
  {
    amount: 11,
    category: "Investments",
    type: "Income",
    date: "2021-08-01",
    id: "ddae702e-6b6e-4a9a-b80a-aa838c77c3fd"
  }
];
export const ExpenseTrackerContext = createContext(initialState);
export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  //Action Creators
  const deleteTransactions = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };
  const addTransactions = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };
  const balance = transactions.reduce((acc, val) => {
    return val.type === "Expense" ? acc - val.amount : acc + val.amount;
  }, 0);
  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransactions, addTransactions, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
