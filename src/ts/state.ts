import { UserType } from './types';

export let currentUser: UserType | undefined = undefined;

export const setCurrentUser = function (newVlaue: UserType | undefined) {
  currentUser = newVlaue;
};

export let onHideModal: () => any = function () {};

export const setOnHideModal = function (func: () => any) {
  onHideModal = func;
};

export const usersData: UserType[] = require('../mock-data.json').users;
