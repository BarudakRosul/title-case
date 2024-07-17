const assert = require("assert");
require("./index");

describe("Testing toTitle() prototype", function() {
  it("should convert a simple string to title case", function() {
    const text = "hello world";
    const result = text.toTitle();
    assert.strictEqual(result, "Hello World");
  });

  it("should handle strings with mixed case letters", function() {
    const text = "hElLo WoRLd";
    const result = text.toTitle();
    assert.strictEqual(result, "Hello World");
  });

  it("should handle strings with hyphens when breakonhyphens is true", function() {
    const text = "co-operate re-entry well-known";
    const result = text.toTitle(true);
    assert.strictEqual(result, "Co-Operate Re-Entry Well-Known");
  });

  it("should not break on hyphens when breakonhyphens is false", function() {
    const text = "co-operate re-entry well-known";
    const result = text.toTitle(false);
    assert.strictEqual(result, "Co-operate Re-entry Well-known");
  });

  it("should handle strings with punctuation", function() {
    const text = "hello, world! this is a test.";
    const result = text.toTitle();
    assert.strictEqual(result, "Hello, World! This Is A Test.");
  });

  it("should handle strings with spaces only", function() {
    const text = "     ";
    const result = text.toTitle();
    assert.strictEqual(result, "     ");
  });

  it("should handle an empty string", function() {
    const text = "";
    const result = text.toTitle();
    assert.strictEqual(result, "");
  });

  it("should handle strings with non-alphabetic characters", function() {
    const text = "123!@#abc";
    const result = text.toTitle();
    assert.strictEqual(result, "123!@#abc");
  });

  it("should handle strings with single letter words", function() {
    const text = "a b c d e";
    const result = text.toTitle();
    assert.strictEqual(result, "A B C D E");
  });
});
