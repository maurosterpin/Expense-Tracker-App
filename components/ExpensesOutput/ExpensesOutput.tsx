import { View } from "react-native";
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";

interface Props {}

export const ExpensesOutput: React.FC<Props> = () => {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
};
