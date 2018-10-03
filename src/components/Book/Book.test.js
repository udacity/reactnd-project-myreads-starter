//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//
//
// ─── VENDOR ─────────────────────────────────────────────────────────────────────
//
import React from "react";
import { shallow } from "enzyme";
// ────────────────────────────────────────────────────────────────────────────────
//
// ─── CUSTOM ─────────────────────────────────────────────────────────────────────
//
import { Book } from "./Book";
// ────────────────────────────────────────────────────────────────────────────────
//
// ────────────────────────────────────────────────── II ──────────
//   :::::: T E S T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────
//

const mockBook = {
  title: "The Linux Command Line",
  authors: ["William E. Shotts, Jr."],
  id: "324185",
  shelf: "currentlyReading",
  thumbnail:
    "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
};

it("Should render the provided title", () => {
  const wrapper = shallow(
    <Book
      title={mockBook.title}
      authors={mockBook.authors}
      thumbnail={mockBook.thumbnail}
      shelf={mockBook.shelf}
      id={mockBook.id}
      changeShelf={() => {}}
    />
  );

  expect(wrapper.find(".book-title").text()).toEqual(mockBook.title);
});

it("Should render the provided quantity of authors", () => {
  const wrapper = shallow(
    <Book
      title={mockBook.title}
      authors={mockBook.authors}
      thumbnail={mockBook.thumbnail}
      shelf={mockBook.shelf}
      id={mockBook.id}
      changeShelf={() => {}}
    />
  );

  expect(wrapper.find(".book-authors").length).toEqual(mockBook.authors.length);
});

it("Should render the provided image", () => {
  const wrapper = shallow(
    <Book
      title={mockBook.title}
      authors={mockBook.authors}
      thumbnail={mockBook.thumbnail}
      shelf={mockBook.shelf}
      id={mockBook.id}
      changeShelf={() => {}}
    />
  );
  expect(wrapper.find(".book-cover").prop("style")).toHaveProperty(
    "backgroundImage",
    `url("${mockBook.thumbnail}")`
  );
});

it("Should select the provided shelf", () => {
  const wrapper = shallow(
    <Book
      title={mockBook.title}
      authors={mockBook.authors}
      thumbnail={mockBook.thumbnail}
      shelf={mockBook.shelf}
      id={mockBook.id}
      changeShelf={() => {}}
    />
  );
  expect(wrapper.find(".book-shelf-changer select").prop("value")).toEqual(
    mockBook.shelf
  );
});

it("Should disable the provided shelf", () => {
  const wrapper = shallow(
    <Book
      title={mockBook.title}
      authors={mockBook.authors}
      thumbnail={mockBook.thumbnail}
      shelf={mockBook.shelf}
      id={mockBook.id}
      changeShelf={() => {}}
    />
  );

  expect(wrapper.find(`#${mockBook.shelf}Shelf`).prop("disabled")).toEqual(
    true
  );
});

it("Should have the provided id", () => {
  const wrapper = shallow(
    <Book
      title={mockBook.title}
      authors={mockBook.authors}
      thumbnail={mockBook.thumbnail}
      shelf={mockBook.shelf}
      id={mockBook.id}
      changeShelf={() => {}}
    />
  );

  expect(wrapper.prop("id")).toEqual(mockBook.id);
});

// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────
