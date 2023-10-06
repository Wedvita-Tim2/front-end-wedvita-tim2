import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import OrderPreviewTemplatePage from '../pages/OrderPreviewTemplatePage';

function AppRouter() {
  return (
      <Routes>
        {routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                element={route.element}
            />
            ))}
      <Route path="/template/preview/template-wedvita">
        <Route path=":templateId" element={<OrderPreviewTemplatePage/>} />
      </Route>
      </Routes>
  );
}

export default AppRouter;
