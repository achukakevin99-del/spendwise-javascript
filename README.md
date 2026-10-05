# SpendWise

## What SpendWise Does
SpendWise is a budget tracking web application. In this stage of the project, JavaScript is added so the app can process data instead of only displaying a page. When the page loads, SpendWise asks the user for their name, monthly budget and a list of expenses. It then calculates the total spent, the remaining balance and the percentage of the budget used, and prints a clearly labeled summary in the browser console.

## Project Files
- `index.html` - page structure; links `style.css` and `script.js`
- `style.css` - styling for the page
- `script.js` - all JavaScript logic
- `README.md` - project documentation

## How to Run
1. Open `index.html` in a browser.
2. Answer the pop-up prompts (name, budget, number of expenses, each expense).
3. Press **F12** and open the **Console** tab to see the results.
4. Click **Run SpendWise Again** to start over.

## JavaScript Concepts Implemented
- Variables (`let` and `const`)
- Data types: string, number, boolean, array and object
- User input with `prompt()` and feedback with `alert()`
- Type conversion with `parseFloat()`
- Arithmetic operators (`+`, `-`, `*`, `/`)
- Conditional statements (`if / else`)
- Loops (`for` and `do...while`)
- Functions with parameters and return values
- Console output with `console.log()` and `console.warn()`

## How Variables Are Used
- `userName` (string) stores the user's name.
- `monthlyBudget` (number) stores the budget entered by the user.
- `expenseCount` (number) stores how many expenses will be entered.
- `totalExpenses` (number) stores the sum of all expenses.
- `remainingBalance` (number) stores budget minus expenses.
- `isOverBudget` (boolean) is `true` when spending is above the budget.
- `expenses` (array of objects) stores each expense as `{ name, amount }`.
- `CURRENCY` (`const`) stores "KES" because it never changes.

## How User Input Is Collected
User input is collected with `prompt()` inside the `collectUserInput()` function. The helper function `getNumberInput()` converts the typed text into a number using `parseFloat()` and keeps asking until the value is a valid positive number. A `for` loop repeats the prompts so the user can enter several expenses, and each one is saved into the `expenses` array.

## How Calculations Are Performed
- **Total expenses:** a loop adds every expense amount together.
- **Remaining balance:** `monthlyBudget - totalExpenses`.
- **Percentage spent:** `(totalExpenses / monthlyBudget) * 100`.
- **Over budget check:** `remainingBalance < 0` sets `isOverBudget` to `true` or `false`.

## How Functions Help Organize the Code
Each task has its own function, so the code is easier to read, test and reuse:
- `getNumberInput(message)` - asks for and validates a number
- `collectUserInput()` - gathers all information from the user
- `calculateTotalExpenses(expenseList)` - adds up the expenses
- `calculateRemainingBalance(budget, total)` - returns the remaining balance
- `calculatePercentageSpent(budget, total)` - returns the percentage of the budget used
- `displayResults()` - prints the labeled summary to the console
- `runSpendWise()` - runs everything in the correct order

## Sample Console Output
```
==============================
   SPENDWISE BUDGET SUMMARY
==============================
User: KB
Monthly Budget: KES 20000.00
------------------------------
Expenses:
  1. Rent: KES 8000.00
  2. Food: KES 5000.00
------------------------------
Total Expenses: KES 13000.00
Remaining Balance: KES 7000.00
Budget Used: 65.0%
Status: You are within your budget. Good job!
==============================
```
