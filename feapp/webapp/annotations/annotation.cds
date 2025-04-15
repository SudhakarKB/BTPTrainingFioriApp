using {BTPTrainingFioriApp.feapp as Northwind} from '../schema';

// annotate Northwind.Products with @UI.LineItem: [
//     {Value: ProductID},
//     {Value: ProductName},
//     {Value: UnitPrice}
// ];


annotate Northwind.Products with @UI: {
    // @UI: {
        LineItem: [
            { Value: ProductID },
            { Value: ProductName },
            { Value: UnitPrice }
        ],
        SelectionFields: [
           ProductID,
            ProductName 
        ]
    // }
};
