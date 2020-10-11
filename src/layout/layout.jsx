import React from 'react';
import { Layout } from 'antd';
import Navbar from './navbar/navbar';

const MainLayout = (props) => {
  return (
    <div>
      <Layout>
        <Navbar />
        <main>
          {/* {childern} */}
          {props.children}
        </main>
      </Layout>
    </div>
  );
};

export default MainLayout;
