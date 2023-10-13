
it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 10000,
    years: 1,
    rate: 20
  };
  expect(calculateMonthlyPayment(values)).toEqual('926.35');
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

it("should handle very high interest rates", function() {
  const values = {
    amount: 10000,
    years: 50,
    rate: 100
  };
  expect(calculateMonthlyPayment(values)).toEqual('833.33');
});
/// etc
