import { View } from "react-native";
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";

interface Props {
  expenses: number[];
  expensesPeriod: "string";
}

export const ExpensesOutput: React.FC<Props> = ({
  expenses,
  expensesPeriod,
}) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
};
