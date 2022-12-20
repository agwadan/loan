import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const History = ({ loan_id }) => {
  const BVN = localStorage.getItem("user");
  const Loan_id = "63a0ecb4b4cc63e8ec3b126f";
  const [ammount, setAmmount] = useState("");
  const [ammount_No, setAmmount_No] = useState("");

  const getId = async () => {
    await axios
      .get("https://superloan.onrender.com/api/loan/bank/accounts", {
        BVN: BVN,
      })
      .then(function (response) {
        alert(response);
      });
  };
  useEffect(() => {
    getId();
  }, []);

  const RePay = async () => {
    console.log(
      `amount: ${ammount} -- account No: ${ammount_No} -- loanId: ${Loan_id} -- BVN: ${BVN}`
    );
    await axios
      .post("https://superloan.onrender.com/api/loan/payloan", {
        amount: ammount,
        account_number: ammount_No,
        loanId: Loan_id,
        BVN: BVN,
      })
      .then(function (response) {
        alert(response.data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{}}>
      <Box
        style={{
          padding: "10px",
          width: "500px",
          borderRadius: "10px",
          boxShadow: "0 0 6px 3px #E6E6E6",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          paddingBottom: "20px",
        }}>
        <Typography
          variant="h5"
          color="initial"
          style={{ fontWeight: "600", textAlign: "center", margin: "15px" }}>
          Loan Payment
        </Typography>
        <hr />
        <TextField
          id="outlined-basic"
          label="Ammount"
          variant="outlined"
          style={{ width: "100%", marginTop: "20px" }}
          onChange={(e) => setAmmount(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="account_number"
          variant="outlined"
          style={{ width: "100%", marginTop: "20px" }}
          onChange={(e) => setAmmount_No(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="loan id"
          variant="outlined"
          //defaultValue={Loan_id}
          style={{ width: "100%", marginTop: "20px" }}
        />
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          defaultValue={BVN}
          style={{ width: "100%", marginTop: "20px" }}
        />
        <Button
          variant="contained"
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "10px",
            textTransform: "none",
          }}
          onClick={RePay}>
          Pay Loan
        </Button>
      </Box>
    </div>
  );
};

export default History;
