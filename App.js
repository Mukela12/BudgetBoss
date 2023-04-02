import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [budget, setBudget] = useState(0);
  const [foodExpenses, setFoodExpenses] = useState(0);
  const [otherExpenses, setOtherExpenses] = useState(0);
  const [savingsGoal, setSavingsGoal] = useState(0);

  const handleBudgetChange = (text) => {
    setBudget(parseFloat(text));
  }

  const handleFoodExpensesChange = (text) => {
    setFoodExpenses(parseFloat(text));
  }

  const handleOtherExpensesChange = (text) => {
    setOtherExpenses(parseFloat(text));
  }

  const handleSavingsGoalChange = (text) => {
    setSavingsGoal(parseFloat(text));
  }

  const calculateTotalExpenses = () => {
    return foodExpenses + otherExpenses;
  }

  const calculateRemainingBudget = () => {
    return budget - calculateTotalExpenses();
  }

  const calculateSavingsProgress = () => {
    return calculateRemainingBudget() / savingsGoal * 100;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BudgetBoss</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your budget"
        keyboardType="numeric"
        onChangeText={handleBudgetChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your food expenses"
        keyboardType="numeric"
        onChangeText={handleFoodExpensesChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your other expenses"
        keyboardType="numeric"
        onChangeText={handleOtherExpensesChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your savings goal"
        keyboardType="numeric"
        onChangeText={handleSavingsGoalChange}
      />
      <Text style={styles.label}>Total expenses: {calculateTotalExpenses()}</Text>
      <Text style={styles.label}>Remaining budget: {calculateRemainingBudget()}</Text>
      <Text style={styles.label}>Savings progress: {calculateSavingsProgress()}%</Text>
      <Button title="Calculate" onPress={calculateSavingsProgress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  }
});
