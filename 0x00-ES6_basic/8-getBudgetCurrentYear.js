function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const Year = getCurrentYear();

  const budget = {
    [`income-${Year}`]: income,
    [`gdp-${Year}`]: gdp,
    [`capita-${Year}`]: capita,
  };

  return budget;
}
