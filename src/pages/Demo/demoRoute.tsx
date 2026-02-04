import { Navigate, RouteObject } from 'react-router-dom';

import logo from '~/assets/img/Logo.png';
import KonvaEditor from '~/components/KonvaEditor';

export const demoRoute: RouteObject[] = [
  {
    path: 'knova-editor',
    element: <KonvaEditor imageUrl={'https://konvajs.org/assets/darth-vader.jpg'} />,
  },
  {
    index: true,
    element: <Navigate to={'knova-editor'} />,
  },
];
