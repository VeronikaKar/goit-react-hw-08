import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items || [];

export const selectIsLoading = (state) => state.contacts.loading;
export const selectIsError = (state) => state.contacts.error;

const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, name) => {
    if (!items) return []; // Handle case where items is undefined or null

    // Example of creating a new filtered array:
    const filteredItems = items.filter(
      (item) =>
        item &&
        item.name &&
        item.name.toLowerCase().includes(name.toLowerCase())
    );

    return filteredItems; // This could cause the warning if filteredItems reference changes unnecessarily
  }
);

export default selectFilteredContacts;
