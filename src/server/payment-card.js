import { faker } from "@faker-js/faker";

export function generatePaymentCard() {
  return {
    name: faker.finance.accountName(),
    cardNumber: faker.finance.creditCardNumber(),
    expire: faker.date.soon(),
    ccv: faker.finance.creditCardCVV(),
  };
}

export function generatePaymentCardList(num) {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push(generatePaymentCard());
  }
  return result;
}
