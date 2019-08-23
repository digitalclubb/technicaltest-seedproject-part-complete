class ViewDeals {
  constructor(store, filterDeals, template) {
    this.store = store;
    this.filterDeals = filterDeals;
    this.template = template;
    this.dealList = document.getElementById("deal-list");
  }

  render(data) {
    if (this.dealList && data.length) {
      const htmlToAppend = this.template.buildDealList(data);
      this.dealList.innerHTML = htmlToAppend;
    } else {
      this.dealList.innerHTML = 'Sorry, no deals';
    }
  }

  update(state) {

    // TODO: This shouldn't work like this. FilterDeals should setDeals
    const filtered = this.filterDeals.update( state );
    this.render( filtered )
  }
}

export default ViewDeals;
