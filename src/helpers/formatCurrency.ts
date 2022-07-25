export const formatCurrency = function (
    value: any,
    currency = 'USD',
    locale = 'en-US'
  ) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(value);
  };
  