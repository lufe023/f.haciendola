const formatPrice = (price) => {
    return new Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);
};

export default formatPrice;
