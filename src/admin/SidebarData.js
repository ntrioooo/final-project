import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Home',
    path: '/admin',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Daftar Maskapai',
    path: '/daftar-maskapai',
    icon: <FaIcons.FaPlane />,
    cName: 'nav-text'
  },
  {
    title: 'Daftar Pesanan',
    path: '/daftar-pesanan',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  }
];
