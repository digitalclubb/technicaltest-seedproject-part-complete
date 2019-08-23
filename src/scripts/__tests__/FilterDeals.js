import Store from "../Store";
import FilterDeals from "../FilterDeals";
import mockData from "../../../public/db.json";

describe( "FilterDeals", () => {

    const store = new Store();
    store.setDeals( mockData.deals );
    const result = store.deals;
    const filterDeals = new FilterDeals();

    // TODO: Probable shared Util/Helper function
    // TODO: Review: Is this a wasted test of core JS?
    describe( "lowerCase", () => {
        it( "should convert all array entries to lowercase for comparison", () => {
            const array = filterDeals.lowerCase( ["TV", "Broadband", "Phone"] );
            expect( array ).toEqual( ["tv", "broadband", "phone"] );
        });
    });

    // TODO: Another possible Util/Helper here
    describe( "removeEntry", () => {
        it( "should remove phone from the array of products", () => {
            const toRemove = "Phone";
            const array = filterDeals.removeEntry( ["TV", "Broadband", "Phone"], toRemove );
            expect( array ).toEqual( ["TV", "Broadband"] );
        });

        it( "should return the same array if it cannot find the item", () => {
            const toRemove = "Mobile";
            const array = filterDeals.removeEntry( ["TV", "Broadband", "Phone"], toRemove );
            expect( array ).toEqual( ["TV", "Broadband", "Phone"] );
        });
    });

    describe( "removeFibre", () => {
        it.skip( "should remove Fibre from the array of products", () => {
            const array = filterDeals.removeFibre( ["TV", "Fibre Broadband", "Phone"] );
            expect( array ).toEqual( ["TV", "Broadband", "Phone"] );
        });

        it.skip( "should return the same array if it cannot find Fibre", () => {
            const array = filterDeals.removeFibre( ["TV", "Broadband", "Phone"] );
            expect( array ).toEqual( ["TV", "Broadband", "Phone"] );
        });
    });

    describe( "filterByProduct", () => {
        it.skip( "should return 4 deals when filtering by broadband", () => {
            const deals = filterDeals.filterByType( result, ["Broadband"] );
            expect( deals.length ).toEqual( 4 );
        });

        it.skip( "should return 4 deals when filtering by broadband and tv", () => {
            const deals = filterDeals.filterByType( result, ["Broadband", "TV"] );
            expect( deals.length ).toEqual( 4 );
        });

        it.skip( "should return only 1 deal when filtering by broadband and mobile", () => {
            const deals = filterDeals.filterByType( result, ["Broadband", "Mobile"] );
            expect( deals.length ).toEqual( 1 );
        });

        it.skip( "should return 3 deals when filtering by mobile", () => {
            const deals = filterDeals.filterByType( result, ["Mobile"] );
            expect( deals.length ).toEqual( 3 );
        });
    });

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
