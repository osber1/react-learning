import { useState } from "react";

import Expenses from "./componets/Expenses/Expenses";
import NewExpense from "./componets/NewExpense/NewExpense";

const INIT_DATA = [
  {
    id: 1,
    title: "Maisto prekes",
    amount: 123.44,
    date: new Date(2022, 5, 25),
  },
  { id: 2, title: "masina", amount: 654.44, date: new Date(2021, 5, 25) },
  { id: 3, title: "dviratis", amount: 845.44, date: new Date(2020, 5, 25) },
];

const App = () => {
  const [expenses, setExpenses] = useState(INIT_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
