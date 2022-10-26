const { readFileSync } = require("fs")
const { getPerilRates } = require("../scripts/auto/rater")

const data = JSON.parse(readFileSync("tests/rater-data.json"))

test("validate auto rater.js", () => {
  const ratingResult = getPerilRates(data)
  expect(ratingResult).toStrictEqual({
    pricedPerilCharacteristics: {
      "83c9d8d6-c7b7-47b1-9b0e-088b6c76b598": { yearlyPremium: 50 },
      "12150c25-e147-4608-981e-177156842a72": { yearlyPremium: "370.00" },
      "bd0aa52c-8411-4eb8-b67d-45265dcbabd0": { yearlyPremium: 20 },
    },
  })
})
