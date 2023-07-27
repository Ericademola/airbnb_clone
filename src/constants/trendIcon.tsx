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
        icon: <MdOutlineBedroomParent />,
        label: "Rooms"
    },
    {
        id:2,
        icon: <GiPalmTree />,
        label: "Tropical"
    },
    {
        id: 3,
        icon: <GiBarn />,
        label: "Barns"
    },
    {
        id: 4,
        icon: <PiKeyLight />,
        label: "New"
    },
    {
        id: 5,
        icon: <TbBuildingSkyscraper />,
        label: "Iconic_Cities"
    },
    {
        id: 6,
        icon: <GiFamilyHouse />,
        label: "Mansions"
    },
    {
        id: 7,
        icon: <PiFire />,
        label: "Trending"
    },
    {
        id: 8,
        icon: <PiCastleTurret />,
        label: "Castles"
    },
    {
        id: 9,
        icon: <TbBeach />,
        label: "Beach"
    },
    {
        id: 10,
        icon: <MdCabin />,
        label: "Cabins"
    },
    {
        id: 11,
        icon: <TbChefHat />,
        label: "Chef_kitchens"
    },
    {
        id: 12,
        icon: <AiOutlineCoffee />,
        label: "Bed_breakfasts"
    },
    {
        id: 13,
        icon: <MdOutlineMapsHomeWork />,
        label: "Design"
    },
    {
        id: 14,
        icon: <PiSwimmingPool />,
        label: "Amazing_pools"
    },
    {
        id: 15,
        icon: <GiCornerFlag />,
        label: "Top_of_the_world"
    },

]

export default trends;