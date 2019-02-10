export default function (state=true, action) {
  switch(action.type) {
    case 'MENU_TOGGLE':
      return !state;
    default:
      return state;
  }
}
