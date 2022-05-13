import { View, Text } from "react-native";

interface Props {}

export const ExpensesSummary: React.FC<Props> = () => {
  return (
    <View>
      <Text>Last 7 Days</Text>
      <Text>$177.95</Text>
    </View>
  );
};
