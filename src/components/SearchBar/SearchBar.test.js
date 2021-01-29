import React from "react";
import { mount } from "enzyme";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  const title = "by Matt";
  const searchTerm = "react";
  const onSearchChange = jest.fn();
  const wrapper = mount(
    <SearchBar
      title={title}
      initSearch={searchTerm}
      onSearchChange={onSearchChange}
    />
  );

  it("render the title", () => {
    const navbarBrand = wrapper.find(".navbar-brand");
    expect(navbarBrand.text()).toBe(`Github GraphQL Demo ${title}`);
  });

  it("click the search button", () => {
    const input = wrapper.find("input");
    expect(input).toBeTruthy();
    expect(input.prop("value")).toEqual(searchTerm);

    input.simulate("keydown", { key: "Enter" });
    expect(onSearchChange).toHaveBeenCalled();
  });
});
