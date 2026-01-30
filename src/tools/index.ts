export const formatMoney = (value: number) => {
  const formatted = new Intl.NumberFormat('en-US').format(value);
  return formatted;
};

export const formatPercent = (percent: number) => {
  return `${percent > 0 ? '+' : '-'}${percent}%`;
};
