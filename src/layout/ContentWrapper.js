import React from 'react';
import { Outlet } from "react-router-dom"

export default function ContentWrapper({ children }) {
    return <main className='content-wrapper'>{children}</main>;
}
  