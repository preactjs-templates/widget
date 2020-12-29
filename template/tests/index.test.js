import { h } from "preact";
import { shallow } from 'enzyme';

import Hello from "../src";

describe("Hello logic", () => {
  test("should be able to run tests", () => {
    expect(1 + 2).toEqual(3);
  });
});

describe("Hello Snapshot", () => {
  test("should render header with content", () => {
    const tree = shallow(<Hello />);
    expect(tree.find("h1").text()).toBe("Hello, World!");
  });
});
