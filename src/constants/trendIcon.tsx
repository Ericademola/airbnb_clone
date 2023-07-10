import { GiCornerFlag, GiWindmill, GiFamilyHouse, GiMountainCave, GiBarn, GiPalmTree } from 'react-icons/gi';
import { MdOutlineMapsHomeWork, MdCabin, MdSportsGolf, MdOutlineBedroomParent } from 'react-icons/md';
import { PiSwimmingPool, PiFire,PiCastleTurret, PiKeyLight } from 'react-icons/pi';
import { TbSailboat, TbChefHat, TbBeach, TbCamper } from 'react-icons/tb';
import { AiOutlineCoffee } from 'react-icons/ai';
import { IoIosSnow } from 'react-icons/io';
import { TbBuildingSkyscraper } from 'react-icons/tb';


import { Icon } from '../interfaces/trendIcon';

const trends: Icon[] = [
    {
        id: 1,
        icon: <PiFire />,
        label: "Trending"
    },
    {
        id:2,
        icon: <GiPalmTree />,
        label: "Tropical"
    },
    {
        id: 3,
        icon: <IoIosSnow />,
        label: "Arctic"
    },
    {
        id: 4,
        icon: <GiBarn />,
        label: "Barns"
    },
    {
        id: 5,
        icon: <PiKeyLight />,
        label: "New"
    },
    {
        id: 6,
        icon: <GiMountainCave />,
        label: "Caves"
    },
    {
        id: 7,
        icon: <TbBuildingSkyscraper />,
        label: "Iconic Cities"
    },
    {
        id: 8,
        icon: <GiFamilyHouse />,
        label: "Mansions"
    },
    {
        id: 9,
        icon: <MdOutlineBedroomParent />,
        label: "Rooms"
    },
    {
        id: 10,
        icon: <MdSportsGolf />,
        label: "Golfing"
    },
    {
        id: 11,
        icon: <TbCamper />,
        label: "Campers"
    },
    {
        id: 12,
        icon: <PiCastleTurret />,
        label: "Castles"
    },
    {
        id: 13,
        icon: <TbBeach />,
        label: "Beach"
    },
    {
        id: 14,
        icon: <MdCabin />,
        label: "Cabins"
    },
    {
        id: 15,
        icon: <TbChefHat />,
        label: "Chef's kitchens"
    },
    {
        id: 16,
        icon: <AiOutlineCoffee />,
        label: "Bed & breakfasts"
    },
    {
        id: 17,
        icon: <TbSailboat />,
        label: "Boats"
    },
    {
        id: 18,
        icon: <MdOutlineMapsHomeWork />,
        label: "Design"
    },
    {   id: 19,
        icon: <GiWindmill />,
        label: "Windmills"
    },
    {
        id: 20,
        icon: <PiSwimmingPool />,
        label: "Amazing pools"
    },
    {
        id: 21,
        icon: <GiCornerFlag />,
        label: "Top of the world"
    },
]

export default trends;