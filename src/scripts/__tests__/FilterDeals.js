import Store from "../Store";
import FilterDeals from "../FilterDeals";
import mockData from "../../../public/db.json";

describe( "FilterDeals", () => {

    const store = new Store();
    store.setDeals( mockData.deals );
    const result = store.deals;
    const filterDeals = new FilterDeals();

    // Would potentially test native JS here
    describe( "filterByProvider", () => {

        it( "should return only 1 deal when Sky is selected", () => {
            const SkyID = 1;
            const provider = filterDeals.filterByProvider( result, SkyID );
            expect( provider.length ).toEqual( 1 );
        });

        it( "should return 0 deals when an invalid ID is used", () => {
            const ID = 1234;
            const provider = filterDeals.filterByProvider( result, ID );
            expect( provider.length ).toEqual( 0 );
        });

    });
});
