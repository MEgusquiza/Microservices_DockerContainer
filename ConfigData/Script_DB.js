use PRODUCT;
db.product.insertOne(
{
 "productName": "TarjetAhorro",
 "productCategory":"Activo",
 "productType": "ahorro",
"detail":
 {
   "maintenanceRateTrue": true ,
   maintenanceRate: 56456,
   "monthlyTransactionLimitTrue": true,
   monthlyTransactionLimit:  45256334,   
   "retirementTransactionLimitTrue": true,
   retirementTransactionLimit:4545,
   "dailyDepositTransactionLimitTrue":true,
   dailyDepositTransactionLimit:200,
   limitByNaturalCustomer: 665456,
   limitByBusinnesCustomer: 45656
 }
 }
);


use TRANSACTION;
db.docCustomer.insert(
{
 "firstName": "Manuel",
 "lastName":"Egusquiza",
 "documentType": "DNI"
}
);

db.docExpedition.find()
use TRANSACTION;
db.docExpedition.insert(
{
 "amountExpedition":"S/",
 "descExpedition":"Y",
 "dateExpedition": new Date()
}
);

use TRANSACTION;
db.docPayment.insert(
{
 
 "amountPayment":243,
 "currencyType": "Ssoles",
 "descPayment": "Y",
 "datePayment": new Date()
 
}
);
use TRANSACTION;
db.docRepresentative.insert(
{
 "numDocRepresentative": "545245",
 "nameRepresentative":"Carlos",
 "lastNameRepresentative": "Pizarro",
 "typeRepresentative": "T"
 });

use TRANSACTION;
db.product.insertOne(
{
 "productName": "TarjetAhorro",
 "productType": "Activo",

});
use TRANSACTION;
db.docTransaction.insert(
 {
   "numberAccount": "1324241234132" ,
   "typeTransaction": "pago",
   chargeCredit: 4545,
   "descTransaction": "N",
   amountLendig: 452,
   limitCredit: 4589,
   balance: 465,
   "dateTransaction": new Date(),
   "status": "A",
  "customer":
   {
     "firstName": "Manuel",
     "lastName": "Egusquiza",
     "documentType": "DNI"
   },
 "product":
   {
      "productName": "TarjetAhorro",
      "productType": "Activo"
  },
  "representative":
     [
     {"numDocRepresentative": "563653635",
     "nameRepresentative": "Alison",
     "lastNameRepresentative":"Egusquiza",
     "typeRepresentative": "T"
     }]
 }
);

use CUSTOMER;
db.docCustomer.insert(
{
 "firstName": "Manuel",
 "lastName":"Egusquiza",
 "documentType": "DNI",
 "mail" : "manue@everis.com",
 "phone": 989898968968,
 "state": "A" 
}
);
use CUSTOMER;
db.docCustomer.insert(
{
 "firstName": "Pedro",
 "lastName":"Castaño",
 "documentType": "DNI",
 "mail" : "pedro@everis.com",
 "phone": 9896789896,
 "state": "A" 
}
);
use CUSTOMER;
db.docCustomer.insert(
{
 "firstName": "Juana",
 "lastName":"Mendoza",
 "documentType": "DNI",
 "mail" : "juana@everis.com",
 "phone": 8785678858,
 "state": "A" 
}
);
use CUSTOMER;
db.docCustomer.insert(
{
 "firstName": "Juan",
 "lastName":"Medina Pizarro",
 "documentType": "DNI",
 "mail" : "juan@everis.com",
 "phone": 989689698789,
 "state": "A" 
}
);
use CUSTOMER;
db.docCustomer.insert(
{
 "firstName": "Katy",
 "lastName":"Luna",
 "documentType": "DNI",
 "mail" : "Katy@everis.com",
 "phone": 878578785678,
 "state": "A" 
}
);
