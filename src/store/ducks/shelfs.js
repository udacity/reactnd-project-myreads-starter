//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//
import { createActions, createReducer } from "reduxsauce";
// ────────────────────────────────────────────────────────────────────────────────
//
// ────────────────────────────────────────────────────────────────── II ──────────
//   :::::: I N I T I A L   S T A T E : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
//
const INITIAL_STATE = [
  { name: "Currently Reading", books: [] },
  { name: "Want To Read", books: [] },
  { name: "Read", books: [] }
];
// ────────────────────────────────────────────────────────────────────────────────
//
// ────────────────────────────────────────────────────────────────────────── III ──────────
//   :::::: R E D U C E R   F U N C T I O N S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────
//
const getShelfs = (state = INITIAL_STATE, { data }) => state;
const receiveShelfs = (state = INITIAL_STATE, { payload }) => {
  const books = payload.map(
    ({ title, authors, imageLinks: { thumbnail }, shelf, id }) => ({
      title,
      authors,
      thumbnail,
      shelf,
      id
    })
  );

  const currentlyReading = books.filter(
      book => book.shelf === "currentlyReading"
    ),
    wantToRead = books.filter(book => book.shelf === "wantToRead"),
    read = books.filter(book => book.shelf === "read");

  return [
    { name: "Currently Reading", books: currentlyReading },
    { name: "Want To Read", books: wantToRead },
    { name: "Read", books: read }
  ];
};
const changeShelf = (state = INITIAL_STATE, { data }) => state;

// ────────────────────────────────────────────────────────────────────────────────
//
// ────────────────────────────────────────────────────── IV ──────────
//   :::::: E X P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//
//
// ─── TYPES AND CREATORS ─────────────────────────────────────────────────────────
//
export const { Types, Creators } = createActions({
  getShelfs: [],
  receiveShelfs: ["data"],
  changeShelf: ["id", "shelf"]
});
// ────────────────────────────────────────────────────────────────────────────────
//
// ─── REDUCER ────────────────────────────────────────────────────────────────────
//
export default createReducer(INITIAL_STATE, {
  [Types.GET_SHELFS]: getShelfs,
  [Types.RECEIVE_SHELFS]: receiveShelfs,
  [Types.CHANGE_SHELF]: changeShelf
});
// ────────────────────────────────────────────────────────────────────────────────
