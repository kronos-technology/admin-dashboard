import React from 'react'
import {
    HiOutlineColorSwatch, 
	HiOutlineDesktopComputer,
    HiOutlineTemplate,
    HiOutlineViewGridAdd,
    HiOutlineHome,
    HiOutlineUserCircle,
    HiOutlineOfficeBuilding
} from 'react-icons/hi';


import { TiTicket } from "react-icons/ti";
import {  TbRoute } from "react-icons/tb";
import { RiBusFill } from "react-icons/ri";
import { CgRadioChecked } from "react-icons/cg"



const navigationIcon = {
    home: <HiOutlineHome />,
    singleMenu: <HiOutlineViewGridAdd />,
    collapseMenu: <HiOutlineTemplate />,
    groupSingleMenu: <HiOutlineDesktopComputer />,
    groupCollapseMenu: <HiOutlineColorSwatch />,
    driver: <HiOutlineUserCircle/>,
    tickets: <TiTicket/>,
    routes: <TbRoute/>,
    vehicles:<RiBusFill/>,
    companies:<HiOutlineOfficeBuilding/>,
    checkpoint:<CgRadioChecked/>,
}

export default navigationIcon