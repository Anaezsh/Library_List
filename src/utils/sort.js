import {
    TEXT,
    DEFAULT,
    ALPHABETICAL_ORDER,
    LIBRARY_NUMBER,
} from '../constants';

export const filterLibraryListBySearchText = (list, text) => {
    return list.filter(item => item.territory.toLowerCase().startsWith(text.toLowerCase()));
};

export const getSortMenuList = () => {
    return [
        [DEFAULT, TEXT.byDefault],
        [ALPHABETICAL_ORDER, TEXT.byAlphabeticalOrder],
        [LIBRARY_NUMBER, TEXT.byLibraryNumber],
    ];
};

export const sortByLibraryNumber = (item1, item2) => item2.libraries - item1.libraries;

export const sortByTerritory = (item1, item2) => {
    const {territory: item1Territory} = item1;
    const {territory: item2Territory} = item2;

    if (item1Territory.toLowerCase() > item2Territory.toLowerCase()) {
        return 1;
    } else if (item1Territory.toLowerCase() < item2Territory.toLowerCase()) {
        return -1;
    } else return 0;
};
