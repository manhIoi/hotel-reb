export const formatMoney = (currency = "$") => {
  return (val) => {
    return `${currency}${val}`;
  };
};
