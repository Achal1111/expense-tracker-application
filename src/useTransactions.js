//custom hook
import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
import {
  incomeCategories,
  expenseCategories,
  resetCategories
} from "./constants/category";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionsPerType = transactions.filter((e) => e.type === title);
  const total = transactionsPerType.reduce(
    (acc, val) => (acc += val.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    if (category) category.amount += t.amount;
  });
  const filteredCategories = categories.filter((e) => e.amount > 0);
  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((e) => e.amount),
        backgroundColor: filteredCategories.map((e) => e.color)
      }
    ],
    labels: filteredCategories.map((e) => e.type)
  };
  return { total, chartData };
};
export default useTransactions;
