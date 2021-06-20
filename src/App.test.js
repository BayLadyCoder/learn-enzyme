import { render, screen } from "@testing-library/react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders learn react link", () => {
  const wrapper = shallow(<App />);

  // Use debug() if you want to see what being rendered in the test
  console.log(wrapper.debug());
});
