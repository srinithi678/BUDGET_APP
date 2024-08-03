import React, { useState, useEffect } from "react";
import axios from "axios";

const BalanceTotal = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i].amount > total && arr[i].type === "Incomes"
      ? (total += arr[i].amount)
      : (total -= arr[i].amount);
  }
  return total >= 0
    ? `Positive of: $${total}`
    : "Negative of: " +
        total.toString().substring(0, 1) +
        " $" +
        total.toString().substring(1);
};

const Balance = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/transactions")
      .then((res) => setTransactions([...res.data]))
      .catch((err) => console.log(err));
  }, []);

  console.log(transactions);
  return (
    <>
      <div>
        <div>
          <h1>Balance: </h1>
          <h2>{BalanceTotal(transactions)}</h2>
        </div>
        <br />
        <h1>Transactions:</h1>
        <div>
          {transactions &&
            transactions.map((el, index) => {
              return (
                <div key={index}>
                  <h2>Username: {el.user.username}</h2>
                  <h2>Amount: ${el.amount}</h2>
                  <h2>Type: {`${el.type} - ${el.category.name}`}</h2>
                  <h2>Description: {el.description}</h2>
                  <h2>Date: {el.date.substring(0, 10)}</h2>
                  <h2>{`Transaction corresponding to email: ${el.user.email}`}</h2>
                  <br />
                </div>
              );
            })}
        </div>
        <br />
        <h3>
          {transactions.length
            ? "All transactions were displayed correctly"
            : "No transactions found"}
        </h3>
      </div>
    </>
  );
};

export default Balance;
