const StorageUtility = {
    saveRecord(record) {
        const existing = this.getAllRecords();
        record.id = Date.now();
        existing.unshift(record);

        if (existing.length > 50) {
            existing.pop();
        }
        localStorage.setItem("loan_ledger_data", JSON.stringify(existing));
    },

    getAllRecords() {
        try {
            const data = localStorage.getItem("loan_ledger_data");
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error("Failed to read ledger data:", error);
            return [];
        }
    },

    clearAllRecords() {
        localStorage.removeItem("loan_ledger_data");
    }
};