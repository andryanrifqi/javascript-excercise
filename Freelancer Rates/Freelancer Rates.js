/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
const workHoursPerDay = 8;
const billableDaysPerMonth = 22;
export function dayRate(ratePerHour) {
  return workHoursPerDay*ratePerHour;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget/dayRate(ratePerHour));
  }

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    let monthlyRate = (billableDaysPerMonth*dayRate(ratePerHour)) * (1-discount);
    let numberOfMonth = Math.floor(numDays/billableDaysPerMonth);
    let totalChargableDays = (numDays%22)*dayRate(ratePerHour);
    return Math.ceil((monthlyRate*numberOfMonth)+totalChargableDays);
    
  }