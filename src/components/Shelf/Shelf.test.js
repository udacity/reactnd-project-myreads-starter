import React from "react";
import { shallow } from "enzyme";
import Shelf from "./Shelf";

it("Should render a list of books if the books array is provided", () => {
  const mockBooks = [
      {
        title: "The Linux Command Line",
        authors: ["William E. Shotts, Jr."],
        id: "324185",
        shelf: "currentlyReading",
        thumbnail:
          "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
      }
    ],
    wrapper = shallow(<Shelf name="Test Shelf" books={mockBooks} />);

  expect(wrapper.find(".books-grid").length).toEqual(mockBooks.length);
});

it("Should render a message if no books are provided", () => {
  const wrapper = shallow(<Shelf name="Test Shelf" />);

  expect(wrapper.find(".books-error").length).toEqual(1);
});
