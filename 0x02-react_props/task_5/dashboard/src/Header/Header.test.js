import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe("Header Component Tests", () => {
    it("Renders without crashing", () => {
        const header = shallow(<Header />);
        expect(header).toBeDefined();
    });
      it("renders a div with image", () => {
        const header = shallow(<Header />);
    
        expect(header.find("img")).toBeDefined();
    });
      it("renders a div with h1 tag", () => {
        const header = shallow(<Header />);
    
        expect(header.find("h1")).toBeDefined();
    });
})