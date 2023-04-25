import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe("Login Component Tests", () => {
    it("Renders without crashing", () => {
        const login = shallow(<Login />);
        expect(login).toBeDefined()
    })
    it("Renders 2 input tags", () => {
        const login = shallow(<Login />);
        expect(login.find("input")).toBeDefined()
    })
    it("Renders 2 labels tags", () => {
        const login = shallow(<Login />);
        expect(login.find("label")).toBeDefined()
    })
})