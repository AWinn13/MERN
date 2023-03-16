// --------Worked with Peyton---------------

const express = require("express");
const app = express();
const port = 8000

const { faker } = require('@faker-js/faker') 

const createUser = () => {
  return {
    password : faker.internet.password(),
    email : faker.internet.email(),
    phoneNumber : faker.phone.number(),
    lastName : faker.name.lastName(),
    firstName : faker.name.firstName(),
    _id : faker.datatype.uuid()

  }
}

const createCompany = () =>{
  return {
    _id : faker.datatype.uuid(),
    name : faker.company.name(),
    address: {
      "street" : faker.address.street(),
      "city" : faker.address.city(),
      "state" : faker.address.state(),
      "zipcode": faker.address.zipCode(),
      "country": faker.address.country()
  }
  }
}
const company = createCompany();
const user = createUser();


app.get("/api/users/new", (req, res) => {
  res.json(user);
});

app.get("/api/companies/new", (req, res) => {
  res.json(company);
});

app.get("/api/user/company/new", (req, res) => {
  res.json({ user , company });
});





const server = app.listen(8000, () =>
  console.log(`Crab in my shoe mouth ${server.address().port}!`)
);
