import React from "react";
import { shallow } from "enzyme";
import { getLatestNotification } from "../utils/utils";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notification tests", () => {
  it("renders Notification component without crashing", () => {
    const notif = shallow(<Notifications />);

    expect(notif).toBeDefined();
  });

  it("renders correct list items", () => {
    const liItem = shallow(<NotificationItem />);

    expect(liItem).toBeDefined();
    
  });
  it("renders the correct html", () => {
    const testEl = shallow(<NotificationItem />);

    testEl = shallow(<NotificationItem html="<u>test</u>" />);
    expect(testEl.find("li").html()).toBe("<li><u>test</u></li>");
  })

  it("renders an unordered list", () => {
    const liItem = shallow(<Notifications />);
    expect(liItem.find("ul").children()).toHaveLength(3);
    liItem.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it("renders correct text", () => {
    const component = shallow(<Notifications />);

    expect(component.find("p").prop("children")).toBe("Here is the list of notifications");
  });
});