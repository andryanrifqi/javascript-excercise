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