import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { Link } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const UserTable = () => {
  const a1 = "10000NGN";
  const a2 = "8000NGN";
  const a3 = "5000NGN";
  const a4 = "3000NGN";

  const an1 = "2020364573";
  const an2 = "2020364573";
  const an3 = "2020364573";
  const an4 = "2020364573";
  const d = "60 days";

  const reason = "for business";
  const I1 = "10%";

  const [first, setFirst] = React.useState(false);
  const FirstOpen = () => setFirst(true);
  const firstClose = () => setFirst(false);

  const [sec, setSec] = React.useState(false);
  const SecOpen = () => setSec(true);
  const SecClose = () => setSec(false);

  const [third, setThird] = React.useState(false);
  const thirdOpen = () => setThird(true);
  const thirdClose = () => setThird(false);

  const [forth, setForth] = React.useState(false);
  const forthOpen = () => setForth(true);
  const forthClose = () => setForth(false);

  const FirstLoan = () => {
    axios
      .post("https://superloan.onrender.com/api/loan/user/apply", {
        amount: a1,
        account_number: an1,
        duration: d,
        reason: reason,
        BVN: localStorage.getItem("user"),
      })
      .then(function (response) {
        alert(response.data.message);
      });
  };
  const SecLoan = () => {
    axios
      .post("https://superloan.onrender.com/api/loan/user/apply", {
        amount: a2,
        account_number: an2,
        duration: d,
        reason: "student loan",
        BVN: localStorage.getItem("user"),
      })
      .then(function (response) {
        alert(response.data.message);
      });
  };
  const ThirdLoan = () => {
    axios
      .post("https://superloan.onrender.com/api/loan/user/apply", {
        amount: a3,
        account_number: an3,
        duration: d,
        reason: reason,
        BVN: localStorage.getItem("user"),
      })
      .then(function (response) {
        alert(response.data.message);
      });
  };
  const ForthLoan = () => {
    axios
      .post("https://superloan.onrender.com/api/loan/user/apply", {
        amount: a4,
        account_number: an4,
        duration: d,
        reason: "Feeding Loan",
        BVN: localStorage.getItem("user"),
      })
      .then(function (response) {
        alert(response.data.message);
      });
  };
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "10px",
          border: "1px solid black",
          width: "200px",
          cursor: "pointer",
          margin: "10px 10px",
        }}
        onClick={FirstOpen}>
        <p>Amount : {a1}</p>
        <p>interest: {I1}</p>
      </div>
      <Modal
        open={first}
        onClose={firstClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <p>Amount : {a1}</p>
          <p>Account Number : {an1}</p>
          <p>duration: {d}</p>
          <p>Purpose : {"Clothing"}</p>
          <Button variant="contained" onClick={FirstLoan}>
            Apply for Loan
          </Button>
        </Box>
      </Modal>

      {/* 2nd */}
      <div
        style={{
          padding: "10px",
          border: "1px solid black",
          width: "200px",
          cursor: "pointer",
          margin: "10px 10px",
        }}
        onClick={SecOpen}>
        <p>Amount : {a2}</p>
        <p>interest: {I1}</p>
      </div>
      <Modal
        open={sec}
        onClose={SecClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <p>Amount : {a2}</p>
          <p>Account Number : {an2}</p>
          <p>duration: {d}</p>
          <p>Purpose : {"housing"}</p>
          <Button variant="contained" onClick={SecLoan}>
            Apply for Loan
          </Button>
        </Box>
      </Modal>

      {/* 3rd */}
      <div
        style={{
          padding: "10px",
          border: "1px solid black",
          width: "200px",
          cursor: "pointer",
          margin: "10px 10px",
        }}
        onClick={thirdOpen}>
        <p>Amount : {a3}</p>
        <p>interest: {I1}</p>
      </div>
      <Modal
        open={third}
        onClose={thirdClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <p>Amount : {a3}</p>
          <p>Account Number : {an3}</p>
          <p>duration: {d}</p>
          <p>Purpose : {reason}</p>
          <Button variant="contained" onClick={ThirdLoan}>
            Apply for Loan
          </Button>
        </Box>
      </Modal>

      {/* 4th */}
      <div
        style={{
          padding: "10px",
          border: "1px solid black",
          width: "200px",
          cursor: "pointer",
          margin: "10px 10px",
        }}
        onClick={forthOpen}>
        <p>Amount : {a4}</p>
        <p>interest: {I1}</p>
      </div>
      <Modal
        open={forth}
        onClose={forthClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <p>Amount : {a2}</p>
          <p>Account Number : {an2}</p>
          <p>duration: {d}</p>
          <p>Purpose : {reason}</p>
          <Button variant="contained" onClick={ForthLoan}>
            Apply for Loan
          </Button>
        </Box>
      </Modal>

      {/* <Link to="/Loan_Payment">
        <Button
          variant="contained"
          style={{ height: "30px", marginTop: "10px" }}>
          RePay loan
        </Button>
      </Link> */}
    </div>
  );
};

export default UserTable;
