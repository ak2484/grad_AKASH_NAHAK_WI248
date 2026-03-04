// function displayHome() {
//   document.getElementById("content").innerHTML =
//     "<h2>Welcome to Home Page</h2>";
// }

// function displayAbout() {
//   document.getElementById("content").innerHTML =
//     "<h2>About Us</h2><p>We are India's trusted bank.</p>";
// }

// function displayServices() {
//   let services = `
//         <h2>Our Services</h2>
//         <button onclick="loadLoan()">Loan</button>
//         <button onclick="loadDeposit()">Deposit</button>
//         <button onclick="loadAccount()">A/C Opening</button>
//     `;

//   document.getElementById("content").innerHTML = services;
// }

// /* SERVICES SUB PAGES */

// function loadLoan() {
//   document.getElementById("content").innerHTML = `
//   <h2>Our Services</h2>
//         <div>
//         <button onclick="loadLoan()">Loan</button>
//         <button onclick="loadDeposit()">Deposit</button>
//         <button onclick="loadAccount()">A/C Opening</button>
//         <div/>
//         <br/>
//         <hr/>
//   <h2>Loan Service</h2>
//          <p>Loan EMI Calculator will load here.</p>
//          <button onclick="loadEMI()">Open EMI Calculator</button>`;
// }

// function loadDeposit() {
//   document.getElementById("content").innerHTML = `<h2>Our Services</h2>
//         <div>
//         <button onclick="loadLoan()">Loan</button>
//         <button onclick="loadDeposit()">Deposit</button>
//         <button onclick="loadAccount()">A/C Opening</button>
//         <div/>
//         <br/>
//         <hr/>
//     <h2>Deposit Service</h2><p>Deposit schemes available.</p>`;
// }

// function loadAccount() {
//   document.getElementById("content").innerHTML = `<h2>Our Services</h2>
//   <div>
//         <button onclick="loadLoan()">Loan</button>
//         <button onclick="loadDeposit()">Deposit</button>
//         <button onclick="loadAccount()">A/C Opening</button>
//         <div/>
//         <br/>
//         <hr/>
//     <h2>Account Opening</h2><p>Open Savings / Current Account.</p>`;
// }

// /* NET BANKING FLOW */

// function displayNetBanking() {
//   let loginPage = `
//         <h2>Net Banking Login</h2>
//         Username: <input type="text" id="user"><br><br>
//         Password: <input type="password" id="pass"><br><br>
//         <button onclick="login()">LOGIN</button>
//         <button onclick="signup()">SIGN UP</button>
//     `;

//   document.getElementById("content").innerHTML = loginPage;
// }

// function login() {
//   let username = document.getElementById("user").value;
//   let password = document.getElementById("pass").value;

//   if (username === "admin" && password === "1234") {
//     showDashboard();
//   } else {
//     alert("Invalid Credentials");
//   }
// }

// function signup() {
//   alert("Signup functionality coming soon.");
// }

// function showDashboard() {
//   let dashboard = `
//         <h2>Welcome to Net Banking</h2>
//         <p>Select your option:</p>
//         <button>Check Balance</button>
//         <button>Transfer Funds</button>
//         <button>Transaction History</button>
//     `;

//   document.getElementById("content").innerHTML = dashboard;
// }

// /* CONTACT */

// function displayContact() {
//   document.getElementById("content").innerHTML =
//     "<h2>Contact Us</h2><p>Email: support@ourbank.com</p>";
// }

// /* EMI LOAD PLACEHOLDER */

// function loadEMI() {
//   document.getElementById("content").innerHTML =
//     `<button onclick="loadLoan()">⬅ Back to Loan</button>
//      <button onclick="displayServices()">⬅ Back to Services</button>
//      <hr />
//      <h2>EMI Calculator Page</h2><h1>Loan Calculator</h1>
//     <hr />

//     <form onsubmit="calculateEMI(event)">
//       Applicant Name :
//       <input type="text" /><br /><br />

//       Loan Type :
//       <input type="radio" name="type" onclick="loanType('HOME')" />HOME
//       <input type="radio" name="type" onclick="loanType('CAR')" />CAR
//       <input type="radio" name="type" onclick="loanType('PERSONAL')" />PERSONAL
//       <br /><br />

//       Interest :
//       <input type="number" id="intrest" disabled />
//       <br /><br />

//       Amount :
//       <input type="number" id="amount" required />
//       <br /><br />

//       Duration (Years):
//       <input type="number" id="duration" required />
//       <br /><br />

//       EMI :
//       <input type="text" id="emiResult" disabled />
//       <br /><br />

//       <input type="submit" value="CALCULATE EMI" />
//     </form>`;
// }

// let selectedType = "";

// function loanType(type) {
//   selectedType = type;

//   let interest = 0;

//   if (type === "HOME") {
//     interest = 9;
//     document.getElementById("duration").max = 30;
//     document.getElementById("amount").min = 500000;
//   }

//   if (type === "CAR") {
//     interest = 12;
//     document.getElementById("duration").max = 7;
//     document.getElementById("amount").min = 100000;
//   }

//   if (type === "PERSONAL") {
//     interest = 15;
//     document.getElementById("duration").max = 5;
//     document.getElementById("amount").min = 10000;
//   }

//   document.getElementById("intrest").value = interest;
// }

// function calculateEMI(event) {
//   event.preventDefault();

//   if (!selectedType) {
//     alert("Please select Loan Type");
//     return;
//   }

//   let p = parseFloat(document.getElementById("amount").value);
//   let r = parseFloat(document.getElementById("intrest").value) / 100 / 12;
//   let n = parseInt(document.getElementById("duration").value) * 12;

//   if (isNaN(p) || isNaN(n)) {
//     alert("Please enter valid amount and duration");
//     return;
//   }

//   let emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

//   document.getElementById("emiResult").value = emi.toFixed(2);
// }

/* ===============================
   COMMON CONTENT LOADER
================================ */

function setContent(html) {
  document.getElementById("content").innerHTML = html;
}

/* ===============================
   HOME / ABOUT / CONTACT
================================ */

function displayHome() {
  setContent(`
    <h2>Welcome to Home Page</h2>
    <p>India's Trusted Bank</p>
  `);
}

function displayAbout() {
  setContent(`
    <h2>About Us</h2>
    <p>We are India's trusted bank providing secure banking services.</p>
  `);
}

function displayContact() {
  setContent(`
    <h2>Contact Us</h2>
    <p>Email: support@witbank.com</p>
  `);
}

/* ===============================
   SERVICES MENU (Reusable)
================================ */

function servicesMenu() {
  return `
    <h2>Our Services</h2>
    <div>
      <button onclick="loadLoan()">Loan</button>
      <button onclick="loadDeposit()">Deposit</button>
      <button onclick="loadAccount()">A/C Opening</button>
      </div>
    <br/>
    <hr/>
  `;
}

function displayServices() {
  setContent(servicesMenu());
}

/* ===============================
   SERVICES SUB PAGES
================================ */

function loadLoan() {
  setContent(
    servicesMenu() +
      `
    <h2>Loan Service</h2>
    <p>Loan EMI Calculator available.</p>
    <button onclick="loadEMI()">Open EMI Calculator</button>
    `,
  );
}

function loadDeposit() {
  setContent(
    servicesMenu() +
      `
    <h2>Deposit Service</h2>
    <p>Deposit schemes available.</p>
    `,
  );
}

function loadAccount() {
  setContent(
    servicesMenu() +
      `
    <h2>Account Opening</h2>
    <p>Open Savings / Current Account.</p>
    `,
  );
}

/* ===============================
   EMI CALCULATOR
================================ */

let selectedType = "";

function loadEMI() {
  setContent(
    servicesMenu() +
      `
    <button onclick="loadLoan()">⬅ Back to Loan</button>
    <hr/>
    <h2>EMI Calculator</h2>

    <form onsubmit="calculateEMI(event)">
      Applicant Name :
      <input type="text" required /><br /><br />

      Loan Type :
      <input type="radio" name="type" onclick="loanType('HOME')" />HOME
      <input type="radio" name="type" onclick="loanType('CAR')" />CAR
      <input type="radio" name="type" onclick="loanType('PERSONAL')" />PERSONAL
      <br /><br />

      Interest :
      <input type="number" id="interest" disabled /><br /><br />

      Amount :
      <input type="number" id="amount" required /><br /><br />

      Duration (Years):
      <input type="number" id="duration" required /><br /><br />

      EMI :
      <input type="text" id="emiResult" disabled /><br /><br />

      <input type="submit" value="CALCULATE EMI" />
    </form>
    `,
  );
}

function loanType(type) {
  selectedType = type;

  let interest = 0;

  if (type === "HOME") {
    interest = 9;
    document.getElementById("duration").max = 30;
    document.getElementById("amount").min = 500000;
  }

  if (type === "CAR") {
    interest = 12;
    document.getElementById("duration").max = 7;
    document.getElementById("amount").min = 100000;
  }

  if (type === "PERSONAL") {
    interest = 15;
    document.getElementById("duration").max = 5;
    document.getElementById("amount").min = 10000;
  }

  document.getElementById("interest").value = interest;
}

function calculateEMI(event) {
  event.preventDefault();

  if (!selectedType) {
    alert("Please select Loan Type");
    return;
  }

  let p = parseFloat(document.getElementById("amount").value);
  let r = parseFloat(document.getElementById("interest").value) / 100 / 12;
  let n = parseInt(document.getElementById("duration").value) * 12;

  if (isNaN(p) || isNaN(n)) {
    alert("Please enter valid amount and duration");
    return;
  }

  let emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  document.getElementById("emiResult").value = emi.toFixed(2);
}

/* ===============================
   NET BANKING
================================ */

function displayNetBanking() {
  setContent(`
    <h2>Net Banking Login</h2>

    Username: <input type="text" id="user"><br><br>
    Password: <input type="password" id="pass"><br><br>

    <button onclick="login()">LOGIN</button>
    <button onclick="signup()">SIGN UP</button>
  `);
}

function login() {
  let username = document.getElementById("user").value;
  let password = document.getElementById("pass").value;

  if (username === "admin" && password === "1234") {
    showDashboard();
  } else {
    alert("Invalid Credentials");
  }
}

function signup() {
  alert("Signup functionality coming soon.");
}

function showDashboard() {
  setContent(`
    <h2>Welcome to Net Banking</h2>
    <button onclick="displayHome()">⬅ Logout</button>
    <hr/>
    <p>Select your option:</p>

    <button onclick="checkBalance()">Check Balance</button>
    <button onclick="transferFunds()">Transfer Funds</button>
    <button onclick="transactionHistory()">Transaction History</button>
  `);
}

/* NET BANKING SUB FEATURES */

function checkBalance() {
  setContent(`
    <button onclick="showDashboard()">⬅ Back</button>
    <h2>Your Balance: ₹50,000</h2>
  `);
}

function transferFunds() {
  setContent(`
    <button onclick="showDashboard()">⬅ Back</button>
    <h2>Transfer Funds</h2>
    <p>Transfer functionality coming soon.</p>
  `);
}

function transactionHistory() {
  setContent(`
    <button onclick="showDashboard()">⬅ Back</button>
    <h2>Transaction History</h2>
    <p>No recent transactions.</p>
  `);
}
