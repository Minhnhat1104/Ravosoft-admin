import { matchPath } from 'react-router-dom';

import { isNavCollapse, isNavGroup, isNavLeaf, NavItem, sidebarItems } from './config';

export function getBreadcrumbItems(pathname: string) {
  const items: NavItem[] = [];

  function checkItems(currentItems: NavItem[]): boolean {
    for (const item of currentItems) {
      if (isNavLeaf(item)) {
        const match = matchPath({ path: item?.url }, pathname);

        if (match) {
          items.push(item);
          return true;
        }
      } else if (isNavCollapse(item) || isNavGroup(item)) {
        const match = checkItems(item?.children);
        if (match) {
          if (isNavCollapse(item)) {
            // don't add group type
            items?.unshift(item);
          }
          return true;
        }
      }
    }

    return false;
  }

  checkItems(sidebarItems);

  return items;
}
