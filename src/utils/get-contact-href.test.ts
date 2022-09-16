import getContactHref from "./get-contact-href";

test("getContactHref", () => {
  expect(getContactHref("email", "#")).toBe("mailto:#");
  expect(getContactHref("github", "#")).toBe("https://github.com/#");
  expect(getContactHref("instagram", "#")).toBe("https://www.instagram.com/#");
});
