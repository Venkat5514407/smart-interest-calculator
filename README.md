# Smart Interest Calculator 💰
### తెలుగు వడ్డీ లెక్కింపు

A dual-language (English & Telugu) financial calculator designed to help users calculate interest using both traditional local Vaddi systems and modern banking interest methods.

🌐 **Live Demo:** [smart-interest-calculator.vercel.app](https://smart-interest-calculator.vercel.app)

---

## 🚀 Features
- **Comprehensive Interest Dynamics:** Monthly Flat Interest, Simple Interest, Compound Interest, and EMI (Equated Monthly Installment) Calculators.
- **Dual-Language Interface:** Seamless, instant toggle between English and Telugu language support.
- **Flexible Basis System:** Local Market Vaddi mode (₹ per ₹100) and Percentage-based interest mode (%).
- **Smart Date Engines:** Auto date duration calculation with a one-click "Until Today" quick calculation toggle.
- **Persistent Storage:** Built-in Loan Ledger to store and manage your calculations across sessions.
- **Data Export Utilities:** Copy calculation summaries instantly to your clipboard or use the TXT file export.
- **Responsive Layout:** Clean, fully responsive desktop and mobile interface featuring an immersive Dark Mode theme.

---

## 📊 Supported Calculations
- **Monthly Flat Interest (Vaddi)**
- **Simple Interest**
- **Compound Interest**
- **EMI Calculation**
- **Percentage (%) Based Interest**
- **Local Market Rate (₹ per ₹100) Based Interest**

---

## 🗂️ Loan Ledger
Store your loan calculation history safely and directly in your browser using `localStorage`. Your previously calculated loan records remain accessible, organized, and available even after completely restarting or refreshing the browser page.

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
- **Frontend:** HTML5, CSS3
- **Styling Utility:** Tailwind CSS
- **Core Engine:** Vanilla JavaScript (ES6+)
- **Data Storage:** Browser `localStorage`

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
        └── telugu-view.pngclear

---

## 💻 Local Setup
To run this project locally on your machine:
```bash
# Clone the repository
git clone https://github.com/Venkat5514407/smart-interest-calculator.git

# Navigate into the project folder
cd smart-interest-calculator

# Open index.html in your browser (or use VS Code Live Server)
open index.html

🔒 Privacy & Security
All calculations are performed entirely locally inside your browser sandbox.

No personal data or transaction histories are ever transmitted to external servers.

No loan information is shared with or exposed to third parties.

All saved records remain stored exclusively in your local machine's web storage partition.

📌 Version History
v1.0.0 (Current Release)
✅ Core Calculation Engines: Monthly Flat Interest, Simple Interest, Compound Interest, and EMI.

✅ Dual-Language Localization: Complete English & Telugu UI swap.

✅ Client-Side Persistence: Full browser localStorage integration for active loan ledgers.

✅ Data portability: Instant summary clipboard copying and TXT file stream downloads.

📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Maayara Veeravenkateswararao - Built as a practical financial utility for both traditional local finance calculations and modern banking interest calculations.