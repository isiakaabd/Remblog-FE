import Drawer from 'components/MiniDrawer';
import { CreatePost, Post, Posts } from 'pages';
import { Route, Routes, Navigate } from 'react-router-dom';
import { FC } from 'react';

const PrivateRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<Drawer />}>
        <Route path="auth/*" element={<Navigate to="/posts" />} />
        <Route path="posts" element={<Posts />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="post/create" element={<CreatePost />} />

        <Route index element={<Posts />} />
      </Route>
    </Routes>
  );
};

// };

export default PrivateRoutes;
