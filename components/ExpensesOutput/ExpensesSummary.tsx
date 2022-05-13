import { View, Text } from "react-native";

interface Props {
  expenses: number[];
  periodName: "string";
}

export const ExpensesSummary: React.FC<Props> = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};
