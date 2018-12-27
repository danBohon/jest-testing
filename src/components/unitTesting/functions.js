module.exports = {
  getTotalQty: arr => {
    return arr.reduce((previousVal, currentVal) => {
      return previousVal + currentVal.quantity;
    }, 0);
  },

  getTotal: arr => {
    return arr.reduce((previousVal, currentVal) => {
      return (
        parseInt(previousVal) +
        parseInt(currentVal.price.replace(/[,$]/g, "")) * currentVal.quantity
      );
    }, 0);
  }
};
