const MENU_SELL_ITEM = 'react-softuni-project/forest-runner/menu/sell-item';
const MENU_EQUIP_ITEM = 'react-softuni-project/forest-runner/menu/equip-item';
const MENU_REMOVE_ITEM = 'react-softuni-project/forest-runner/menu/remove-item';

const initialState = {
    sellingItem: false,
    equippingItem: false,
    removingItem: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case MENU_SELL_ITEM:
            return {
                ...state,
                sellingItem: action.payload,
            };
        case MENU_EQUIP_ITEM:
            return {
                ...state,
                equippingItem: action.payload,
            };
        case MENU_REMOVE_ITEM:
            return {
                ...state,
                removingItem: action.payload,
            };
        default:
            return state;
    }
}
