import Home from '_/components/Home/Home';

import ProjectHeader from '_/components/Project/ProjectHeader/ProjectHeader';
import Project from '../components/Project/Project';

export const defaultPath = '/';

export const routes = [
  {
    name: 'home', path: '/', exact: true, component: Home,
  },
  {
    name: 'project', path: '/projects/:projectSlug', component: Project,
  },
];

export const navigationRoutes = [
  {
    name: 'project', path: '/projects/:projectSlug', component: ProjectHeader,
  },
];

export default {
  defaultPath,
  routes,
};
