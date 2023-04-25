import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe("Footer Components Tests", () => {
    it("Renders without crashing", () => {
        const footer = shallow(<Footer />);
        expect(footer).toBeDefined();
    })
    it("Renders the text Copyright", () => {
        const footer = shallow(<Footer />);
        expect(footer.find("Copyright")).toBeDefined()
    })
});