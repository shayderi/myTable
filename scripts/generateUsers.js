const faker = require('faker')
var fs = require('fs')
const users = []

for (var index = 0; index < 101; index++) {
  const user = {
    userName: faker.internet.userName(),
    fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    gender: Math.random() > 0.5 ? "female" : "male",
    status: Math.random() > 0.5 ? "active" : "notActive",
  }
  users.push(user);
}

fs.writeFile("users.json", JSON.stringify(users));

