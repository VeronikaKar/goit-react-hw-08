import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.contacts.items;
export const selectIsLoading = (state) => state.contacts.loading;

export const selectIsError = (state) => state.contacts.error;
const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, name) =>
    items.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
);
export default selectFilteredContacts;
