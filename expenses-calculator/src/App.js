import Expenses from "./componets/Expenses/Expenses";
import NewExpense from "./componets/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Maisto prekes", amount: 123.44, date: new Date(2022, 5, 25) },
    { title: "masina", amount: 654.44, date: new Date(2021, 5, 25) },
    { title: "dviratis", amount: 845.44, date: new Date(2020, 5, 25) },
  ];

  const addExpenseHandler = expense => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
