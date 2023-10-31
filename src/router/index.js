import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import OrderPreviewTemplatePage from '../pages/OrderPreviewTemplatePage';
import UserPreviewOrderedTemplate from '../pages/UserPreviewOrderedTemplate'

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
      <Route path="/preview/:templateId/:orderCode" element={<UserPreviewOrderedTemplate preview={true}/>} />
      <Route path='/invitation/:templateId/:orderCode' element={<UserPreviewOrderedTemplate preview={false}/>}/>
      </Routes>
  );
}

export default AppRouter;
