using { Currency, managed, sap } from '@sap/cds/common';
namespace zmm.vehicle.db;

entity Categories : managed {
    key ID: Integer;
    category_name: String;
}

entity Merk {
    key ID : Integer;
    merk_name : String;
}

entity BBN {
    key ID : Integer;
    bbn_name : String;
}

entity Vehicles : managed {
    key ID : Integer;
    varian : String;
    category: Association to Categories;
    merk : Association to Merk;
    main_type : String;
    type_unit : String;
    s_fuel : String;
    s_eng_displ : String;
    s_drivetrain : String;
    s_transmission : String;
    flag_delete : Boolean;
    image_url : String;
    pricelists: Association to many VehiclePricelist on pricelists.vehicle = $self;
}

entity Carosseries : managed {
    key ID : Integer;
    name : String;
    flag_delete : Boolean;
}

entity Accessories : managed {
    key ID : Integer;
    name : String;
    flag_delete : Boolean;
}

entity VehiclePricelist : managed {
    key ID : Integer;
    vehicle : Association to Vehicles;
    bbn : Association to BBN;
    price : Decimal(9, 2);
    valid_from : Date;
    valid_to : Date;
}