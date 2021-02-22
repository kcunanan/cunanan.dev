const ACTIONS = [
  'GET_SITE',
  'GET_SITE_SUCCESS',
  'GET_SITE_FAILURE',

  'START_LOADING',
  'STOP_LOADING',
];

const ACTION_TYPES = ACTIONS.reduce(
  (actions: { [key: string]: string }, action) => {
    const updatedActions = actions;
    updatedActions[action] = action;
    return updatedActions;
  },
  {},
);

export default ACTION_TYPES;
