using { zmm.vehicle.db as db } from '../db/schema';

service VehicleService @(path:'/catalog') {
    // entity Categories as select from db.Categories {
    //     ID,
    //     category_name
    // };
    entity Categories as projection on db.Categories;

    entity Merk as projection on db.Merk;

    entity BBN as projection on db.BBN;

    entity Vehicles as projection on db.Vehicles;

    entity Carosseries as projection on db.Carosseries;

    entity Pricelist as projection on db.VehiclePricelist;
}