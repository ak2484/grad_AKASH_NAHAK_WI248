// /* ===============================
//    COMMON CONTENT LOADER
// ================================ */

// function setContent(html) {
//   document.getElementById("content").innerHTML = html;
// }

// /* ===============================
//    HOME / ABOUT / CONTACT
// ================================ */

// function displayHome() {
//   setContent(`
//     <h2>Welcome to Home Page</h2>
//     <p>India's Trusted Bank</p>
//   `);
// }

// function displayAbout() {
//   setContent(`
//     <h2>About Us</h2>
//     <p>We are India's trusted bank providing secure banking services.</p>
//   `);
// }

// function displayContact() {
//   setContent(`
//     <h2>Contact Us</h2>
//     <p>Email: support@witbank.com</p>
//   `);
// }

// /* ===============================
//    SERVICES MENU (Reusable)
// ================================ */

// function servicesMenu() {
//   return `
//     <h2>Our Services</h2>
//     <div>
//       <button onclick="loadLoan()">Loan</button>
//       <button onclick="loadDeposit()">Deposit</button>
//       <button onclick="loadAccount()">A/C Opening</button>
//       </div>
//     <br/>
//     <hr/>
//   `;
// }

// function displayServices() {
//   setContent(servicesMenu());
// }

// /* ===============================
//    SERVICES SUB PAGES
// ================================ */

// function loadLoan() {
//   setContent(
//     servicesMenu() +
//       `
//     <h2>Loan Service</h2>
//     <p>Loan EMI Calculator available.</p>
//     <button onclick="loadEMI()">Open EMI Calculator</button>
//     `,
//   );
// }

// function loadDeposit() {
//   setContent(
//     servicesMenu() +
//       `
//     <h2>Deposit Service</h2>
//     <p>Deposit schemes available.</p>
//     `,
//   );
// }

// function loadAccount() {
//   setContent(
//     servicesMenu() +
//       `
//     <h2>Account Opening</h2>
//     <p>Open Savings / Current Account.</p>
//     `,
//   );
// }

// /* ===============================
//    EMI CALCULATOR
// ================================ */

// let selectedType = "";

// function loadEMI() {
//   setContent(
//     servicesMenu() +
//       `
//     <button onclick="loadLoan()">⬅ Back to Loan</button>
//     <hr/>
//     <h2>EMI Calculator</h2>

//     <form onsubmit="calculateEMI(event)">
//       Applicant Name :
//       <input type="text" required /><br /><br />

//       Loan Type :
//       <input type="radio" name="type" onclick="loanType('HOME')" />HOME
//       <input type="radio" name="type" onclick="loanType('CAR')" />CAR
//       <input type="radio" name="type" onclick="loanType('PERSONAL')" />PERSONAL
//       <br /><br />

//       Interest :
//       <input type="number" id="interest" disabled /><br /><br />

//       Amount :
//       <input type="number" id="amount" required /><br /><br />

//       Duration (Years):
//       <input type="number" id="duration" required /><br /><br />

//       EMI :
//       <input type="text" id="emiResult" disabled /><br /><br />

//       <input type="submit" value="CALCULATE EMI" />
//     </form>
//     `,
//   );
// }

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

//   document.getElementById("interest").value = interest;
// }

// function calculateEMI(event) {
//   event.preventDefault();

//   if (!selectedType) {
//     alert("Please select Loan Type");
//     return;
//   }

//   let p = parseFloat(document.getElementById("amount").value);
//   let r = parseFloat(document.getElementById("interest").value) / 100 / 12;
//   let n = parseInt(document.getElementById("duration").value) * 12;

//   if (isNaN(p) || isNaN(n)) {
//     alert("Please enter valid amount and duration");
//     return;
//   }

//   let emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

//   document.getElementById("emiResult").value = emi.toFixed(2);
// }

// /* ===============================
//    NET BANKING
// ================================ */

// function displayNetBanking() {
//   setContent(`
//     <h2>Net Banking Login</h2>

//     Username: <input type="text" id="user"><br><br>
//     Password: <input type="password" id="pass"><br><br>

//     <button onclick="login()">LOGIN</button>
//     <button onclick="signup()">SIGN UP</button>
//   `);
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
//   setContent(`
//     <h2>Welcome to Net Banking</h2>
//     <button onclick="displayHome()">⬅ Logout</button>
//     <hr/>
//     <p>Select your option:</p>

//     <button onclick="checkBalance()">Check Balance</button>
//     <button onclick="transferFunds()">Transfer Funds</button>
//     <button onclick="transactionHistory()">Transaction History</button>
//   `);
// }

// /* NET BANKING SUB FEATURES */

// function checkBalance() {
//   setContent(`
//     <button onclick="showDashboard()">⬅ Back</button>
//     <h2>Your Balance: ₹50,000</h2>
//   `);
// }

// function transferFunds() {
//   setContent(`
//     <button onclick="showDashboard()">⬅ Back</button>
//     <h2>Transfer Funds</h2>
//     <p>Transfer functionality coming soon.</p>
//   `);
// }

// function transactionHistory() {
//   setContent(`
//     <button onclick="showDashboard()">⬅ Back</button>
//     <h2>Transaction History</h2>
//     <p>No recent transactions.</p>
//   `);
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
    <div class="text-center">
      <h2 class="mb-3">Welcome to Home Page</h2>
      <p class="lead">India's Trusted Bank</p>
    </div>
  `);
}

function displayAbout() {
  setContent(`
    <h2 class="mb-3">About Us</h2>
    <p class="lead">
      We are India's trusted bank providing secure and reliable banking services.
    </p>
  `);
}

function displayContact() {
  setContent(`
    <h2 class="mb-3">Contact Us</h2>
    <div class="card p-4 shadow-sm">
      <p><strong>Email:</strong> support@witbank.com</p>
      <p><strong>Phone:</strong> +91 9876543210</p>
    </div>
  `);
}

/* ===============================
   SERVICES MENU (Reusable)
================================ */

function servicesMenu() {
  return `
    <h2 class="mb-4">Our Services</h2>
    <div class="mb-3">
      <button class="btn btn-primary me-2 mb-2" onclick="loadLoan()">Loan</button>
      <button class="btn btn-success me-2 mb-2" onclick="loadDeposit()">Deposit</button>
      <button class="btn btn-warning me-2 mb-2" onclick="loadAccount()">A/C Opening</button>
    </div>
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
    <div class="card p-4 shadow-sm">
      <h3>Loan Service</h3>
      <p>Loan EMI Calculator available.</p>
      <button class="btn btn-dark" onclick="loadEMI()">Open EMI Calculator</button>
    </div>
    `,
  );
}

function loadDeposit() {
  setContent(
    servicesMenu() +
      `
    <div class="card p-4 shadow-sm">
      <h3>Deposit Service</h3>
      <p>Various deposit schemes available with attractive interest rates.</p>
    </div>
    `,
  );
}

function loadAccount() {
  setContent(
    servicesMenu() +
      `
    <div class="card p-4 shadow-sm">
      <h3>Account Opening</h3>
      <p>Open Savings or Current Account easily.</p>
    </div>
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
    <button class="btn btn-secondary mb-3" onclick="loadLoan()">⬅ Back to Loan</button>

    <div class="card p-4 shadow-sm">
      <h3 class="mb-3">EMI Calculator</h3>

      <form onsubmit="calculateEMI(event)">
        <div class="mb-3">
          <label class="form-label">Applicant Name</label>
          <input type="text" class="form-control" required>
        </div>

        <div class="mb-3">
          <label class="form-label">Loan Type</label><br>
          <input type="radio" name="type" onclick="loanType('HOME')"> HOME
          <input type="radio" name="type" onclick="loanType('CAR')" class="ms-3"> CAR
          <input type="radio" name="type" onclick="loanType('PERSONAL')" class="ms-3"> PERSONAL
        </div>

        <div class="mb-3">
          <label class="form-label">Interest (%)</label>
          <input type="number" id="interest" class="form-control" disabled>
        </div>

        <div class="mb-3">
          <label class="form-label">Loan Amount</label>
          <input type="number" id="amount" class="form-control" required>
        </div>

        <div class="mb-3">
          <label class="form-label">Duration (Years)</label>
          <input type="number" id="duration" class="form-control" required>
        </div>

        <div class="mb-3">
          <label class="form-label">EMI</label>
          <input type="text" id="emiResult" class="form-control" disabled>
        </div>

        <button class="btn btn-primary">CALCULATE EMI</button>
      </form>
    </div>
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

  let emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  document.getElementById("emiResult").value = emi.toFixed(2);
}

/* ===============================
   NET BANKING
================================ */

function displayNetBanking() {
  setContent(`
    <div class="card p-4 shadow-sm">
      <h3 class="mb-3">Net Banking Login</h3>

      <div class="mb-3">
        <label class="form-label">Username</label>
        <input type="text" id="user" class="form-control">
      </div>

      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" id="pass" class="form-control">
      </div>

      <button class="btn btn-primary me-2" onclick="login()">LOGIN</button>
      <button class="btn btn-secondary" onclick="signup()">SIGN UP</button>
    </div>
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
    <div class="card p-4 shadow-sm">
      <h3>Welcome to Net Banking</h3>
      <button class="btn btn-danger mb-3" onclick="displayHome()">Logout</button>
      <hr/>

      <button class="btn btn-info me-2 mb-2" onclick="checkBalance()">Check Balance</button>
      <button class="btn btn-success me-2 mb-2" onclick="transferFunds()">Transfer Funds</button>
      <button class="btn btn-warning mb-2" onclick="transactionHistory()">Transaction History</button>
    </div>
  `);
}

function checkBalance() {
  setContent(`
    <button class="btn btn-secondary mb-3" onclick="showDashboard()">⬅ Back</button>
    <div class="alert alert-success">
      Your Balance: ₹50,000
    </div>
  `);
}

function transferFunds() {
  setContent(`
    <button class="btn btn-secondary mb-3" onclick="showDashboard()">⬅ Back</button>
    <div class="alert alert-info">
      Transfer functionality coming soon.
    </div>
  `);
}

function transactionHistory() {
  setContent(`
    <button class="btn btn-secondary mb-3" onclick="showDashboard()">⬅ Back</button>
    <div class="alert alert-warning">
      No recent transactions.
    </div>
  `);
}
