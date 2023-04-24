import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Footer from "./Footer/Footer";

describe("App Component Tests", () => {
  it("Renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
  it("Renders Notification without crashing", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications).toBeDefined();
  });
  it("Renders Header without crashing", () => {
    const header = shallow(<Header />);
    expect(header).toBeDefined();
  });
  it("Renders Login without crashing", () => {
    const login = shallow(<Login />);
    expect(login).toBeDefined();
  });
  it("Renders Footer without crashing", () => {
    const footer = shallow(<Footer />);
    expect(footer).toBeDefined();
  });
});