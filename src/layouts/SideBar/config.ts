import { Home, HomeOutlined, LayersOutlined, SvgIconComponent } from '@mui/icons-material';

interface NavLeaf {
  label: string;
  id: string;
  type: 'leaf';
  url: string;
}
interface NavCollapse {
  label: string;
  id: string;
  type: 'collapse';
  icon?: SvgIconComponent;
  children?: (NavCollapse | NavLeaf)[];
}
interface NavGroup {
  label: string;
  id: string;
  type: 'group';
  children?: (NavCollapse | NavLeaf)[];
}

export type NavItem = NavLeaf | NavCollapse | NavGroup;

export const sidebarItems: NavItem[] = [
  {
    label: 'Main',
    id: 'main',
    type: 'group',
    children: [
      {
        label: 'Dashboard',
        id: 'dashboard',
        icon: HomeOutlined,
        type: 'collapse',
        children: [
          {
            label: 'Dashboard - 1',
            id: 'dashboard_1',
            type: 'leaf',
            url: '/main/dashboard-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Pages',
    id: 'pages-group',
    type: 'group',
    children: [
      {
        label: 'Pages',
        id: 'pages',
        icon: LayersOutlined,
        type: 'collapse',
        children: [
          {
            label: 'Authentication',
            id: 'authentication',
            type: 'collapse',
            children: [
              {
                label: 'Sign In',
                id: 'sign_in',
                type: 'leaf',
                url: '/pages/sign_in',
              },
              {
                label: 'Sign Up',
                id: 'sign_up',
                type: 'leaf',
                url: '/pages/sign_up',
              },
              {
                label: 'Forget Password',
                id: 'forget_password',
                type: 'leaf',
                url: '/pages/forget_password',
              },
              {
                label: 'Reset Password',
                id: 'reset_password',
                type: 'leaf',
                url: '/pages/reset_password',
              },
              {
                label: 'Lockscreen',
                id: 'lockscreen',
                type: 'leaf',
                url: '/pages/lockscreen',
              },
              {
                label: 'UnderConstruction',
                id: 'under_construction',
                type: 'leaf',
                url: '/pages/under_construction',
              },
              {
                label: '404 Error',
                id: '404_error',
                type: 'leaf',
                url: '/pages/404_error',
              },
              {
                label: '500 Error',
                id: '500_error',
                type: 'leaf',
                url: '/pages/500_error',
              },
              {
                label: '501 Error',
                id: '501_error',
                type: 'leaf',
                url: '/pages/501_error',
              },
            ],
          },
        ],
      },
    ],
  },
];

export function isNavLeaf(item: NavItem): item is NavLeaf {
  return item.type === 'leaf';
}

export function isNavCollapse(item: NavItem): item is NavCollapse {
  return item.type === 'collapse';
}

export function isNavGroup(item: NavItem): item is NavGroup {
  return item.type === 'group';
}
