import { faker } from "@faker-js/faker";

export function generatePaymentCard() {
  const expire = faker.date.soon();
  const day = String(expire.getDate()).padStart(2, "0");
  const month = String(expire.getMonth() + 1).padStart(2, "0");
  return {
    name: faker.finance.accountName(),
    cardNumber: faker.finance.creditCardNumber(),
    expire: `${day}/${month}`,
    ccv: faker.finance.creditCardCVV(),
    type: "visa",
  };
}

export function generatePaymentCardList(num) {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push(generatePaymentCard());
  }
  return result;
}
