//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//
import { call, put } from "redux-saga/effects";
import { Types } from "../ducks/shelfs";
import { getAll, update } from "../../services/BooksAPI";
// ────────────────────────────────────────────────────────────────────────────────
//
// ────────────────────────────────────────────────────────── II ──────────
//   :::::: F U N C T I O N S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export function* fetchShelfs(action) {
  try {
    const books = yield call(getAll);
    yield put({ type: Types.RECEIVE_SHELFS, payload: books });
  } catch (error) {
    console.log(error);
  }
}

export function* changeShelf({ payload: { book, shelf } }) {
  try {
    yield call(update, book, shelf);
    const books = yield call(getAll);

    yield put({ type: Types.RECEIVE_SHELFS, payload: books });
  } catch (error) {
    console.log(error);
  }
}
// ────────────────────────────────────────────────────────────────────────────────
