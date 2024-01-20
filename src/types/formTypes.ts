interface BaseTaxRow {
    year: number;
}

export interface PermanentTaxesRow extends BaseTaxRow {
    monthlySalary: number;
}

export interface FreelancerRow extends BaseTaxRow {

    hourlyRate: number;
    hoursPerDay: number;
    daysPerYear: number;
}

export interface Taxes {
    rows: (PermanentTaxesRow | FreelancerRow)[];
}