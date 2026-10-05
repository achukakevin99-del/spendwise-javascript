// ===============================
// SpendWise - JavaScript Foundation
// ===============================

console.log("SpendWise script loaded successfully!");

// ---------- 1. VARIABLES (application data) ----------
let userName = "";          // string
let monthlyBudget = 0;      // number
let expenseCount = 0;       // number
let totalExpenses = 0;      // number
let remainingBalance = 0;   // number
let isOverBudget = false;   // boolean
const expenses = [];        // array of { name, amount } objects
const CURRENCY = "KES";     // constant (never changes)

// ---------- 2. FUNCTIONS ----------

// Ask for a number and keep asking until it is valid
function getNumberInput(message) {
  let value;
  do {
    const input = prompt(message);
    if (input === null) {
      return 0; // user pressed Cancel
    }
    value = parseFloat(input);
    if (isNaN(value) || value < 0) {
      alert("Please enter a valid positive number.");
    }
  } while (isNaN(value) || value < 0);
  return value;
}

// Collect all user input
function collectUserInput() {
  userName = prompt("Welcome to SpendWise! What is your name?") || "User";
  monthlyBudget = getNumberInput("Enter your monthly budget (" + CURRENCY + "):");
  expenseCount = Math.floor(getNumberInput("How many expenses do you want to enter?"));

  for (let i = 1; i <= expenseCount; i++) {
    const name = prompt("Expense " + i + " - what is it for? (e.g. Rent, Food)") || "Expense " + i;
    const amount = getNumberInput("Enter the amount for " + name + " (" + CURRENCY + "):");
    expenses.push({ name: name, amount: amount });
  }
}

// Add up all expenses
function calculateTotalExpenses(expenseList) {
  let total = 0;
  for (let i = 0; i < expenseList.length; i++) {
    total += expenseList[i].amount;
  }
  return total;
}

// Budget minus expenses
function calculateRemainingBalance(budget, total) {
  return budget - total;
}

// Percentage of budget already spent
function calculatePercentageSpent(budget, total) {
  if (budget === 0) {
    return 0;
  }
  return (total / budget) * 100;
}

// Display everything in the console
function displayResults() {
  console.log("==============================");
  console.log("   SPENDWISE BUDGET SUMMARY");
  console.log("==============================");
  console.log("User: " + userName);
  console.log("Monthly Budget: " + CURRENCY + " " + monthlyBudget.toFixed(2));
  console.log("------------------------------");
  console.log("Expenses:");
  for (let i = 0; i < expenses.length; i++) {
    console.log("  " + (i + 1) + ". " + expenses[i].name + ": " + CURRENCY + " " + expenses[i].amount.toFixed(2));
  }
  console.log("------------------------------");
  console.log("Total Expenses: " + CURRENCY + " " + totalExpenses.toFixed(2));
  console.log("Remaining Balance: " + CURRENCY + " " + remainingBalance.toFixed(2));
  console.log("Budget Used: " + calculatePercentageSpent(monthlyBudget, totalExpenses).toFixed(1) + "%");

  if (isOverBudget) {
    console.warn("WARNING: You have exceeded your budget by " + CURRENCY + " " + Math.abs(remainingBalance).toFixed(2) + "!");
  } else {
    console.log("Status: You are within your budget. Good job!");
  }
  console.log("==============================");
}

// Main function that runs the app
function runSpendWise() {
  collectUserInput();
  totalExpenses = calculateTotalExpenses(expenses);
  remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);
  isOverBudget = remainingBalance < 0;
  displayResults();
}

// ---------- 3. START ----------
runSpendWise();
