import { fetchQuotes, fetchConvension } from "./cbr-api";

describe("тест запросов", function () {
  it("Запрос котировок", async () => {
    const data = await fetchQuotes();

    expect(data).toBeDefined();
    expect(data.base_code).toEqual("RUB");
    expect(data.conversion_rates.USD).toBeGreaterThanOrEqual(0.01);
    expect(data.conversion_rates.EUR).toBeGreaterThanOrEqual(0.01);
    expect(data.conversion_rates.RUB).toBeGreaterThanOrEqual(1);
  });

  it("Запрос на конвертирование", async () => {
    const data = await fetchConvension("RUB", "USD", 100);
    expect(data).toBeDefined();
    expect(data.base_code).toEqual("RUB");
    expect(data.conversion_result).toBeGreaterThanOrEqual(1);
  });

  it("Обработка ошибок", () => {
    expect.assertions(1);
    return fetchConvension().catch((data) => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(data.message).toBe("request error");
    });
  });
});
