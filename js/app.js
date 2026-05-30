let currentLanguage = "en";

document.addEventListener("DOMContentLoaded", () => {
    const endDateInput = document.getElementById("end-date");
    if (endDateInput) {
        endDateInput.value = new Date().toISOString().split('T')[0];
    }

    const themeBtn = document.querySelector("button[onclick='toggleDarkMode()']");
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
        if (themeBtn) themeBtn.innerText = "☀️";
    } else {
        document.documentElement.classList.remove("dark");
        if (themeBtn) themeBtn.innerText = "🌙";
    }

    setLanguage("en");
    updateLedgerDisplay();
});

function toggleTillToday(checkbox) {
    const endDateInput = document.getElementById("end-date");
    if (!endDateInput) return;

    if (checkbox.checked) {
        endDateInput.value = new Date().toISOString().split('T')[0];
        endDateInput.disabled = true;
        endDateInput.classList.add("opacity-50", "cursor-not-allowed");
    } else {
        endDateInput.disabled = false;
        endDateInput.classList.remove("opacity-50", "cursor-not-allowed");
    }
}

function toggleDarkMode() {
    const themeBtn = document.querySelector("button[onclick='toggleDarkMode()']");

    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        if (themeBtn) themeBtn.innerText = "🌙";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        if (themeBtn) themeBtn.innerText = "☀️";
    }
    setLanguage(currentLanguage);
}

function setLanguage(lang) {
    currentLanguage = lang;

    const btnEn = document.getElementById("lang-en");
    const btnTe = document.getElementById("lang-te");

    if (!btnEn || !btnTe) return;

    if (lang === "en") {
        btnEn.className = "px-3 py-1.5 rounded-md transition-all bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm font-semibold";
        btnTe.className = "px-3 py-1.5 rounded-md transition-all text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200";
    } else {
        btnTe.className = "px-3 py-1.5 rounded-md transition-all bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm font-semibold";
        btnEn.className = "px-3 py-1.5 rounded-md transition-all text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200";
    }

    Object.keys(translations[lang]).forEach(key => {
        const element = document.querySelector(`[data-key="${key}"]`);
        if (element) {
            element.innerText = translations[lang][key];
        }
    });
}

function showValidation(msg) {
    const alertBox = document.getElementById("validation-message");
    if (!alertBox) return;

    if (msg) {
        alertBox.innerText = msg;
        alertBox.classList.remove("hidden");
    } else {
        alertBox.classList.add("hidden");
    }
}

function updateLedgerDisplay() {
    const listContainer = document.getElementById("ledger-list");
    const emptyState = document.getElementById("ledger-empty-state");

    if (!listContainer || !emptyState) return;
    const records = StorageUtility.getAllRecords();

    if (records.length === 0) {
        emptyState.classList.remove("hidden");
        listContainer.querySelectorAll(".ledger-item-card").forEach(el => el.remove());
        return;
    }

    emptyState.classList.add("hidden");
    listContainer.querySelectorAll(".ledger-item-card").forEach(el => el.remove());

    records.forEach(item => {
        const card = document.createElement("div");
        card.className = "ledger-item-card bg-gray-50 dark:bg-slate-800/40 border border-gray-100 dark:border-slate-800/60 rounded-xl p-3 flex flex-col gap-1 text-xs transition-colors duration-200 mb-2";

        card.innerHTML = `
      <div class="flex justify-between items-center font-semibold text-gray-800 dark:text-slate-200">
        <span class="text-sm">👤 ${item.name}</span>
        <span class="text-emerald-600 dark:text-emerald-400 font-bold">${item.total}</span>
      </div>
      <div class="grid grid-cols-2 text-gray-500 dark:text-slate-400 gap-y-0.5 mt-1">
        <div>💰 Assal: ${item.principal}</div>
        <div>📈 Vaddi: ${item.interest}</div>
        <div class="col-span-2">📅 Period: ${item.months} (${item.days} Days)</div>
      </div>
    `;
        listContainer.appendChild(card);
    });
}

function handleCalculation() {
    showValidation(null);
    const name = document.getElementById("borrower-name").value.trim();
    const principal = parseFloat(document.getElementById("principal").value);
    const type = document.getElementById("interest-type").value;
    const rateMode = document.getElementById("rate-mode").value;
    let rate = parseFloat(document.getElementById("rate").value);
    const startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;

    const todayCheckbox = document.getElementById("till-today-checkbox");
    if (todayCheckbox && todayCheckbox.checked) {
        endDate = new Date().toISOString().split('T')[0];
    }

    if (!name) { showValidation(translations[currentLanguage].valName); return; }
    if (isNaN(principal) || principal <= 0) { showValidation(translations[currentLanguage].valPrincipal); return; }
    if (isNaN(rate) || rate <= 0) { showValidation(translations[currentLanguage].valRate); return; }
    if (!startDate || !endDate) return;
    if (new Date(startDate) > new Date(endDate)) { showValidation(translations[currentLanguage].valDate); return; }

    out = InterestCalculator.calculate(type, principal, rate, startDate, endDate, rateMode);

    const formattedPrincipal = "₹" + principal.toLocaleString('en-IN');
    const formattedInterest = "₹" + out.interestAmount.toLocaleString('en-IN');
    const formattedTotal = "₹" + out.totalAmount.toLocaleString('en-IN');

    document.getElementById("res-method").innerText = currentLanguage === "en" ? out.methodNameEn : out.methodNameTe;
    document.getElementById("res-principal").innerText = formattedPrincipal;
    document.getElementById("res-days").innerText = out.daysPassed;
    document.getElementById("res-months").innerText = out.monthsPassed;
    document.getElementById("res-interest").innerText = formattedInterest;
    document.getElementById("res-total").innerText = formattedTotal;

    const newRecord = {
        name: name,
        principal: formattedPrincipal,
        interest: formattedInterest,
        total: formattedTotal,
        months: out.monthsPassed,
        days: out.daysPassed
    };

    StorageUtility.saveRecord(newRecord);
    updateLedgerDisplay();
}

function exportToClipboard() {
    const text = ExportUtility.generateSummaryText(currentLanguage);
    if (!text) {
        showValidation(currentLanguage === "en" ? "Please calculate interest first!" : "దయచేసి మొదట వడ్డీని లెక్కించండి!");
        return;
    }

    navigator.clipboard.writeText(text).then(() => {
        showValidation(currentLanguage === "en" ? "📋 Summary copied to clipboard!" : "📋 సారాంశం కాపీ చేయబడింది!");
        setTimeout(() => showValidation(null), 3000);
    }).catch(err => console.error("Could not copy text: ", err));
}

function exportToTxtFile() {
    const text = ExportUtility.generateSummaryText(currentLanguage);
    if (!text) {
        showValidation(currentLanguage === "en" ? "Please calculate interest first!" : "దయచేసి మొదట వడ్డీని లెక్కించండి!");
        return;
    }

    const name = document.getElementById("borrower-name").value.trim() || "loan";
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${name}_interest_summary.txt`;
    link.click();
    URL.revokeObjectURL(link.href);

    showValidation(currentLanguage === "en" ? "💾 TXT file downloaded successfully." : "💾 TXT ఫైల్ విజయవంతంగా డౌన్‌లోడ్ చేయబడింది.");
    setTimeout(() => showValidation(null), 3000);
}

function clearForm() {
    document.getElementById("borrower-name").value = "";
    document.getElementById("principal").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("start-date").value = "";

    const todayCheckbox = document.getElementById("till-today-checkbox");
    if (todayCheckbox) {
        todayCheckbox.checked = false;
        toggleTillToday(todayCheckbox);
    }

    document.getElementById("end-date").value = new Date().toISOString().split("T")[0];

    document.getElementById("res-method").innerText = "-";
    document.getElementById("res-principal").innerText = "₹0";
    document.getElementById("res-days").innerText = "0";
    document.getElementById("res-months").innerText = "0 M / 0 D";
    document.getElementById("res-interest").innerText = "₹0";
    document.getElementById("res-total").innerText = "₹0";

    showValidation(null);
}

function wipeSavedLedger() {
    if (confirm(currentLanguage === "en" ? "Are you sure you want to clear all history records?" : "మీరు ఖచ్చితంగా అన్ని రికార్డులను తొలగించాలనుకున్నారా?")) {
        StorageUtility.clearAllRecords();
        updateLedgerDisplay();
    }
}