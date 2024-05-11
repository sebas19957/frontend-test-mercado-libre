const formatNumberLocale = (number: number): string => {
  return number.toLocaleString("es-CO", {
    maximumFractionDigits: 2,
  });
};

export default formatNumberLocale;
