//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//
import { takeEvery, fork } from "redux-saga/effects";
import { Types as ShelfTypes } from "../ducks/shelfs";
import { Types as SearchTypes } from "../ducks/search";
import { fetchShelfs, changeShelf } from "./shelfs";
import { searchBooks } from "./search";
// ────────────────────────────────────────────────────────────────────────────────
//
// ────────────────────────────────────────────────── II ──────────
//   :::::: S A G A S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────
//
export default function* sagas() {
  yield [
    fork(takeEvery, ShelfTypes.GET_SHELFS, fetchShelfs),
    fork(takeEvery, ShelfTypes.CHANGE_SHELF, changeShelf),
    fork(takeEvery, SearchTypes.SEARCH, searchBooks)
  ];
}
// ────────────────────────────────────────────────────────────────────────────────
