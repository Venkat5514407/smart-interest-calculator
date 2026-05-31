class InterestCalculator {
    static calculate(type, principal, rate, startDateStr, endDateStr, rateMode) {
        const start = new Date(startDateStr);
        const end = new Date(endDateStr);

        // 1. Calculate absolute exact days passed for display
        const diffTime = Math.abs(end - start);
        const daysPassed = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // 2. Exact Calendar Month & Day breakdown
        let startYear = start.getFullYear();
        let startMonth = start.getMonth();
        let startDay = start.getDate();

        let endYear = end.getFullYear();
        let endMonth = end.getMonth();
        let endDay = end.getDate();

        let totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
        let remainingDays = endDay - startDay;

        if (remainingDays < 0) {
            totalMonths--;
            const previousMonth = new Date(endYear, endMonth, 0).getDate();
            remainingDays += previousMonth;
        }

        // Total fractional years
        const tYears = daysPassed / 365;

        // 3. FIX: Properly normalize rates based on the chosen UI mode
        let monthlyRate = 0;
        let annualRate = 0;

        if (rateMode === "vaddi") {
            // Input is monthly (e.g., ₹2 per ₹100 = 2% per month)
            monthlyRate = rate;
            annualRate = rate * 12;
        } else {
            // Input is annual percentage (e.g., 24% per year)
            annualRate = rate;
            monthlyRate = rate / 12;
        }

        let interestAmount = 0;
        let methodNameEn = "";
        let methodNameTe = "";

        // 4. Run calculations using our cleanly normalized rates
    
        if (type === "monthly-flat") {
            methodNameEn = "Monthly Flat Interest";
            methodNameTe = "నెలవారీ ఫ్లాట్ వడ్డీ";

            const exactMonths = daysPassed / 30;
            interestAmount = principal * (monthlyRate / 100) * exactMonths;

        } else if (type === "simple-annual") {
            methodNameEn = "Simple Interest (Annual)";
            methodNameTe = "సాధారణ వడ్డీ";
            interestAmount = principal * (annualRate / 100) * tYears;

        } else if (type === "compound-annual") {
            methodNameEn = "Compound Interest (Annual)";
            methodNameTe = "చక్రవడ్డీ";
            // Compounding monthly rate over the precise calculated months
            const exactMonths = daysPassed / 30;
            const totalAmountCompound = principal * Math.pow((1 + (monthlyRate / 100)), exactMonths);
            interestAmount = totalAmountCompound - principal;

        } else if (type === "emi") {
            methodNameEn = "EMI (Reducing Balance)";
            methodNameTe = "సమాన నెలవారీ వాయిదా (EMI)";

            // Calculate total months rounded to nearest whole number for installment periods
            const totalInstallments = Math.max(1, Math.round(daysPassed / 30));
            const rFraction = (monthlyRate / 100);

            if (rFraction === 0) {
                interestAmount = 0;
            } else {
                // Standard Equated Monthly Installment math formula
                const emiPerMonth = principal * (rFraction * Math.pow(1 + rFraction, totalInstallments)) / (Math.pow(1 + rFraction, totalInstallments) - 1);
                const totalAmountPaidOverTime = emiPerMonth * totalInstallments;
                interestAmount = totalAmountPaidOverTime - principal;
            }
        }

        // Format numbers cleanly
        interestAmount = Math.round(interestAmount * 100) / 100;
        const totalAmount = Math.round((principal + interestAmount) * 100) / 100;

        return {
            daysPassed,
            monthsPassed: `${totalMonths} M / ${remainingDays} D`,
            interestAmount,
            totalAmount,
            methodNameEn,
            methodNameTe
        };
    }
}
