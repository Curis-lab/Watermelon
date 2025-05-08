import React from "react";
import {
    Apps,
    FiberNew,
    FlashOn,
    Palette,
    Inventory2,
    Engineering
  } from '@mui/icons-material';
export const mentorCategories: {name:string, icon: React.ReactNode}[] = [
    {
        name: 'All',
        icon: <Apps/>,
    },
    {
        name: 'New',
        icon: <FiberNew/>
    },
    {
        name: 'Available ASAP',
        icon: <FlashOn/>
    },
    {
        name: 'Design',
        icon: <Palette/>
    },
    {
        name: 'Product',
        icon: <Inventory2/>
    },
    {
        name: 'Engineering',
        icon: <Engineering/>
    }
];
