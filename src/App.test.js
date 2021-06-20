import { render, screen } from "@testing-library/react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders non-empty component without crashing", () => {
  const wrapper = shallow(<App />);

  // Use debug() if you want to see what being rendered in the test
  // console.log(wrapper.debug());

  // use exists() to test if wrapper is not empty.
  expect(wrapper.exists()).toBe(true);
});
