/**
 * Created by doremonsun on 6/5/17.
 */
function getStockPrice(name) {
    return getstockSymbol(name)
        .then(symbol => getStockPrice(symbol))
}