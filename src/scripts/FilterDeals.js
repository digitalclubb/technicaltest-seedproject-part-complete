class FilterDeals {

    constructor( store ) {
        this.store = store;
    }

    // Convert array entries to lower case for comparison
    lowerCase( array ) {
        return array.map( item => item.toLowerCase() );
    }

    // Filter deals by Provider ID
    filterByProvider( deals, provider ) {
        return deals.filter( deal => deal.provider.id === provider );
    }

    update( state ) {

        let deals = state.deals;
        const provider = state.providerFilter;

        // Filter by Provider i.e. BT, Sky
        if ( provider ) {
            deals = this.filterByProvider( deals, provider );
        }

        // TODO: Work out how to setDeals rather than return here.
        // this.store.setDeals( deals );
        return deals;
    }

}
  
export default FilterDeals;
  