//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//
import { call, put } from "redux-saga/effects";
import { Types } from "../ducks/search";
import { search } from "../../services/BooksAPI";
// ────────────────────────────────────────────────────────────────────────────────
//
// ────────────────────────────────────────────────────────── II ──────────
//   :::::: F U N C T I O N S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export function* searchBooks({ payload }) {
  if (payload.length) {
    try {
      const books = yield call(search, payload);
      yield put({ type: Types.RECEIVE_SEARCH, payload: books });
    } catch (error) {
      console.warn(error);
    }
  } else {
    yield put({ type: Types.RECEIVE_SEARCH, payload: [] });
  }
}
// ────────────────────────────────────────────────────────────────────────────────
