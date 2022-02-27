import { useEffect, useState } from "react";

let globalState: any = {}; // global state of the app
let listeners: any = []; // global listeners array of the app
let actions: any = {}; // global actions which can be used anywhere in the app

// create a custom hook now
// shouldListen is used for optimization parameter because whereever we are registering dispatch function in a component
// it is causing the custom hook to change state and it result in rerendering. So to stop that, we use a flag here
export const useStore = (shouldListen = true) => {
  // useState can be used in this custom hook so that whenever setState function is called
  // the component which uses this custom hook will rerender.
  const [, setState] = useState(globalState);

  const dispatch = (actionName: string, payload: any) => {
    // it is just like the reducer function which takes the current state and action
    // and returns the newState.
    // actions is an object and its each key is a function
    const newState = actions[actionName](globalState, payload);
    
    // merge this newState with global state and return the updated state
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      // listener is just a function like setState that we had set in the listeners array
      // it is like setState(globalState)
      // this updates the state and will rerender the component that is using this custom component
      listener(globalState);
    }
  }

  useEffect(() => {
    // push the setState action in the listeners array
    if (shouldListen) {
      listeners.push(setState);
    }

    // whenever a component unmounts which uses this custom hook, we are making sure
    // that it removes the action from the global listeners array 
    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li: any) => li !== setState);
      }
    }
  }, [setState, shouldListen]);

  // this custom hook will return an array with globalState and dispatch function
  // yes, you guessed it right! it is just like useReducer hook.
  return [globalState, dispatch];
};

export const initStore = (userActions: any, initialState: any) => {
  if (initialState) {
    // share your current instance's state with the global state
    globalState = { ...globalState, ...initialState };
  }

  // just merge the actions with the global actions
  actions = { ...actions, ...userActions };
};