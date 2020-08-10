import Home from '_/components/Home/Home';

export const defaultPath = '/';

export const routes = [
  {
    name: 'home', path: '/', exact: true, component: Home,
  },
];

export default {
  defaultPath,
  routes,
};
