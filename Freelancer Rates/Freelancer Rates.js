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

