const ExportUtility = {
    generateSummaryText(currentLanguage) {
        const name = document.getElementById("borrower-name").value.trim();
        const principal = document.getElementById("res-principal").textContent;
        const method = document.getElementById("res-method").textContent;
        const days = document.getElementById("res-days").textContent;
        const months = document.getElementById("res-months").textContent;
        const interest = document.getElementById("res-interest").textContent;
        const total = document.getElementById("res-total").textContent;
        const startDate = document.getElementById("start-date").value;
        const endDate = document.getElementById("end-date").value;

        if (!name || principal === "₹0" || method === "-") {
            return null;
        }

        if (currentLanguage === "te") {
            return `--- రుణ వడ్డీ లెక్కింపు సారాంశం ---
రుణగ్రహీత పేరు: ${name}
అసలు మొత్తం: ${principal}
వడ్డీ విధానం: ${method}
ప్రారంభ తేదీ: ${startDate}
లెక్కించాల్సిన తేదీ: ${endDate}
గడిచిన కాలం: ${months} (${days} రోజులు)
వడ్డీ మొత్తం: ${interest}
మొత్తం చెల్లించవలసినది: ${total}
----------------------------------------`;
        } else {
            return `--- Loan Interest Calculation Summary ---
Borrower Name: ${name}
Principal Amount: ${principal}
Calculation Method: ${method}
Start Date: ${startDate}
Calculate As Of Date: ${endDate}
Time Period: ${months} (${days} Days)
Interest Amount: ${interest}
Total Amount Due: ${total}
----------------------------------------`;
        }
    }
};