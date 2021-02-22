const ACTIONS = [
  "GET_SITE",
  "GET_SITE_SUCCESS",
  "GET_SITE_FAILURE",

  "START_LOADING",
  "STOP_LOADING",
];

const ACTION_TYPES = ACTIONS.reduce(
  (actions: { [key: string]: string }, action) => {
    actions[action] = action;
    return actions;
  },
  {}
);

export default ACTION_TYPES;
