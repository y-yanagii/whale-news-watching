import { App } from "../../src/client/App";
import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

describe("react test sample", () => {
  it("rendering <div>Hello React !!!</div>", () => {
    const result = shallow(<App />).contains(<div>Hello React !!!</div>);
    expect(result).to.be.true
  });
});
