import "mocha";
import { expect } from "chai";
import { SampleClass } from "./sample_class";

describe("SampleClass", () => {
  let sample: SampleClass;

  beforeEach(() => {
    sample = new SampleClass();
  });

  it("Expected show hello typescript", async () => {
    const expected = "hello typescript";
    const sut = await sample.action();

    expect(sut).to.be.equal(expected);
  });
});
