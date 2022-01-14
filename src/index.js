import * as Logger from "./logger";
import * as Utils from "./utils";

const person = {
  age: 25,
  address: {
    street: "vajas street",
  },
};

console.log(person.address.street);

Logger.log("my message");
Utils.currentDate();
