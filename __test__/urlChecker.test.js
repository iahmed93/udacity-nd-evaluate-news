import { isValidUrl } from "../src/client/js/urlChecker";

describe("IsValidUrl function", () => {
    test("it should validate url as a valid one", () => {
      const input = 'https://dev.to/bhupesh/making-grep-searches-sexier-2mal'
  
      const output = true;
  
      expect(isValidUrl(input)).toEqual(output);
  
    });
  });


  describe("IsValidUrl function", () => {
    test("it should validate url as an invalid one", () => {
      const input = 'https/dev.to/bhupesh/making-grep-searches-sexier-2mal'
  
      const output = false;
  
      expect(isValidUrl(input)).toEqual(output);
  
    });
  });