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
import Shelf from "./Shelf";
import BooksGrid from "../BooksGrid";
// ────────────────────────────────────────────────────────────────────────────────
//
// ────────────────────────────────────────────────── II ──────────
//   :::::: T E S T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────
//

const mockBooks = [
  {
    title: "The Linux Command Line",
    authors: ["William E. Shotts, Jr."],
    id: "324185",
    shelf: "currentlyReading",
    thumbnail:
      "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
  }
];

it("Should render a BookGrid books array is provided", () => {
  const wrapper = shallow(<Shelf name="Test Shelf" books={mockBooks} />);

  expect(wrapper.find(BooksGrid).length).toEqual(1);
});

it("Should render a name", () => {
  const name = "Test Shelf",
    wrapper = shallow(<Shelf name={name} books={mockBooks} />);

  expect(wrapper.find(".bookshelf-title").text()).toEqual(name);
});

// ────────────────────────────────────────────────────────────────────────────────
