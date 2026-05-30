# Smart Interest Calculator 💰

### తెలుగు వడ్డీ లెక్కింపు

A dual-language (English & Telugu) financial calculator designed to help users calculate interest using both traditional local **Vaddi** systems and modern banking interest methods.

🌐 **Live Demo:** https://smart-interest-calculator.vercel.app

---

## 🚀 Features

* **Monthly Flat Interest Calculator**
* **Simple Interest Calculator**
* **Compound Interest Calculator**
* **EMI (Equated Monthly Installment) Calculator**
* **Dual-Language Interface** (English ↔ Telugu)
* **Local Market Vaddi Mode** (₹ per ₹100)
* **Percentage-Based Interest Mode** (%)
* **Auto Date Duration Calculation**
* **"Until Today" Quick Calculation Option**
* **Persistent Loan Ledger using localStorage**
* **Copy Summary to Clipboard**
* **TXT Report Export**
* **Responsive Desktop & Mobile Design**
* **Light Mode & Dark Mode Support**

---

## 📊 Supported Calculations

### Monthly Flat Interest (Vaddi)

Used in traditional local lending systems where interest is calculated monthly on the original principal amount.

### Simple Interest

Calculates interest using the standard banking simple interest formula.

### Compound Interest

Calculates accumulated interest based on compounding periods.

### EMI Calculation

Calculates monthly installment payments using standard reducing-balance EMI formulas.

### Interest Rate Modes

* Percentage (%) Based Interest
* Local Market Rate (₹ per ₹100) Based Interest

---

## 📐 Core Formulas

### Simple Interest

```text
SI = (P × R × T) / 100
```

Where:

* P = Principal Amount
* R = Annual Interest Rate
* T = Time in Years

### Monthly Flat Interest

```text
Interest = Principal × Monthly Rate × Months
```

### Compound Interest

```text
A = P(1 + r/n)^(nt)
```

Where:

* P = Principal
* r = Annual Interest Rate
* n = Compounding Frequency
* t = Time in Years

### EMI

```text
EMI =
[P × R × (1 + R)^N]
/
[(1 + R)^N − 1]
```

Where:

* P = Loan Amount
* R = Monthly Interest Rate
* N = Number of Months

---

## 🗂️ Loan Ledger

The application includes a built-in Loan Ledger powered by browser `localStorage`.

Features:

* Save calculation history
* View previous loan calculations
* Retain records after page refresh
* Clear individual sessions when needed

All data remains stored locally in the user's browser.

---

## 📸 Screenshots

### English Interface

![English Dashboard View](assets/screenshots/english-view.png)

### Light Mode Interface

![Light Mode View](assets/screenshots/light_mode.png)

### Telugu Interface

![Telugu Dashboard View](assets/screenshots/telugu-view.png)

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* Tailwind CSS

### Programming Language

* Vanilla JavaScript (ES6+)

### Storage

* Browser localStorage

### Deployment

* Vercel

---

## 📂 Project Structure

```text
Smart-Interest-Calculator/
├── index.html
├── about.html
├── privacy.html
├── README.md
├── LICENSE
├── .gitignore
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── calculator.js
│   ├── export.js
│   ├── storage.js
│   └── translations.js
└── assets/
    └── screenshots/
        ├── english-view.png
        ├── light_mode.png
        └── telugu-view.png
```

---

## 💻 Local Setup

Clone the repository:

```bash
git clone https://github.com/Venkat5514407/smart-interest-calculator.git
```

Navigate into the project folder:

```bash
cd smart-interest-calculator
```

Open the application:

```bash
open index.html
```

Or run it using:

* VS Code Live Server
* Any local static web server

---

## 🔒 Privacy & Security

All calculations are performed entirely within your browser.

* No user data is transmitted to external servers.
* No loan records are shared with third parties.
* No analytics or tracking services are used.
* All saved records remain stored locally via browser localStorage.

---

## 📌 Version History

### v1.0.0

✅ Monthly Flat Interest Calculator

✅ Simple Interest Calculator

✅ Compound Interest Calculator

✅ EMI Calculator

✅ English & Telugu Localization

✅ Local Market Vaddi Support

✅ Loan Ledger with localStorage

✅ Copy Summary Feature

✅ TXT Export Functionality

✅ Responsive Design

✅ Light & Dark Themes

---

## 🚀 Future Enhancements

* Payment Tracking
* PDF Export
* Advanced Loan Reports
* Multiple Borrower Management
* Search & Filter Loan Records
* Backend Version using Flask & SQLite

---

## 📜 License

This project is licensed under the MIT License.

See the LICENSE file for details.

---

## 👨‍💻 Author

**Maayara Veeravenkateswararao**

GitHub: https://github.com/Venkat5514407

Built as a practical financial utility for both traditional local finance calculations and modern banking interest calculations.
