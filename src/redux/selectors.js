import { createSelector } from "@reduxjs/toolkit";
export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilter = state => state.filter;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();
return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  }
)