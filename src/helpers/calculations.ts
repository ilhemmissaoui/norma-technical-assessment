import { PermanentTaxRate, FreelanceTaxRate } from "../constants/taxRates";
import { FreelancerRow, PermanentTaxesRow } from "../types/formTypes";
import { sum } from 'lodash';

export function getAnnualizedMonthlySalary(amount: number): number {
    return amount * 12;
}

export function getFreelancerYearlyRevenue(row: FreelancerRow): number {

    return row.hourlyRate * row.hoursPerDay * row.daysPerYear;
}

export function getFreelancerYearlyRevenueAfterTaxes(row: FreelancerRow): number {
    const yearlyRevenue = getFreelancerYearlyRevenue(row);
    return yearlyRevenue * (1 - FreelanceTaxRate);
}

export function getPermanentTaxesAnnualizedTotal(rows: PermanentTaxesRow[]): number {
    return sum(rows.map((row) => getAnnualizedMonthlySalary(row.monthlySalary)));
}

export function getPermanentTaxesAnnualizedTotalAfterTaxes(rows: PermanentTaxesRow[]): number {
    return sum(rows.map((row) => {
        const annualizedMonthlySalary = getAnnualizedMonthlySalary(row.monthlySalary);
        return annualizedMonthlySalary * (1 - PermanentTaxRate);
    }));
}

export function getFreelancerAnnualizedTotal(rows: FreelancerRow[]): number {
    console.log(sum(rows.map((row) => getFreelancerYearlyRevenue(row))));

    return sum(rows.map((row) => getFreelancerYearlyRevenue(row)));
}

export function getFreelancerAnnualizedTotalAfterTaxes(rows: FreelancerRow[]): number {
    console.log(sum(rows.map((row) => getFreelancerYearlyRevenueAfterTaxes(row))));

    return sum(rows.map((row) => getFreelancerYearlyRevenueAfterTaxes(row)));
}
