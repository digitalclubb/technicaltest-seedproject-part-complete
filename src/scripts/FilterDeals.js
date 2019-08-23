class FilterDeals {

    constructor( store ) {
        this.store = store;
    }

    // Convert array entries to lower case for comparison
    lowerCase( array ) {
        return array.map( item => item.toLowerCase() );
    }

    // Remove 'Phone' from the array so it can be ignored
    removeEntry( array, toRemove ) {
        return array.filter( item => item !== toRemove );
    }

    // Remove the Fibre string so all broadband is equal
    removeFibre( array ) {
        return array.map( item => item.replace( /Fibre /g, '' ) );
    }

    filterByProduct( deals, filters ) {

        // Make sure filters are lowercase and sorted
        const lowerFilters = this.lowerCase( filters ).sort();

        // TODO: Review / Improve performance here
        const filtered = deals.filter( deal => {

            // Clean data, convert to lowercase and sort for comparison
            let products = this.removeEntry( deal.productTypes, "Phone" );
            products = this.removeFibre( products);
            products = this.lowerCase( products ).sort();

            // Check that arrays are same size and then check items are same
            return ( lowerFilters.length == products.length ) && products.every( ( item, index ) => {
                return item === lowerFilters[ index ]; 
            });
        });

       return filtered;

    }

    // Filter deals by Provider ID
    filterByProvider( deals, provider ) {
        return deals.filter( deal => deal.provider.id === provider );
    }

    update( state ) {

        let deals = state.deals;
        const filters = state.productFilters;
        const provider = state.providerFilter;

        // Filter by Product i.e. Broadband, TV
        if ( filters.length > 0 ) {
            deals = this.filterByProduct( deals, filters );
        }

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
  