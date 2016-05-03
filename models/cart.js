function Cart(eventAggregator) {
    var items = [];

    this.addItem = function (item) {
        items.push(item);
    };
}
