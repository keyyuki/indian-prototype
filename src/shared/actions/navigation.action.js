export const NAVIGATE = 'NAVIGATE';

// gets the current screen from navigation state
function getActiveRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return getActiveRouteName(route);
    }
    return route.routeName;
  }

export const tracking = (prevState, currentState, action) => {
    const currentScreen = getActiveRouteName(currentState);
    const prevScreen = getActiveRouteName(prevState);
    if(currentScreen !== prevScreen){

        //  insert analytis tracking code here

        return {
            type: NAVIGATE,
            currentScreen,
            prevScreen
        }
    }
    return {
        type: 'NONE'
    }
}