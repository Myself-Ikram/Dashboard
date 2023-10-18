import Lottie from "lottie-react";
import Earning from "../lottie/Earning.json";
import Balance from "../lottie/Balance.json";
import Order from "../lottie/Order.json";
import Sales from "../lottie/Sales.json";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiSolidCube } from "react-icons/bi";
import { BsPersonBoundingBox } from "react-icons/bs";
import { MdAttachMoney, MdOutlineLiveHelp } from "react-icons/md";
export const COLORS = {
  BLUE: "#192A56",
  DARKBLUE: "#130F40",
  GREY: "#dfe6e9",
};
export const menu = [
  {
    id: 1,
    to: "/",
    name: "Dashboard",
    icon: <LuLayoutDashboard />,
  },
  {
    id: 2,
    to: "/products",
    name: "Products",
    icon: <BiSolidCube />,
  },
  {
    id: 3,
    to: "/customers",
    name: "Customers",
    icon: <BsPersonBoundingBox />,
  },
  {
    id: 4,
    to: "/income",
    name: "Income",
    icon: <MdAttachMoney />,
  },
  {
    id: 5,
    to: "/help",
    name: "Help",
    icon: <MdOutlineLiveHelp />,
  },
];

export const DASHDATA1 = [
  {
    title: "Earning",
    price: "$198K",
    desc: "33%",
    status: "high",
    img: <Lottie animationData={Earning} loop={false} />,
  },
  {
    title: "Orders",
    price: "$2.5K",
    desc: "2%",
    status: "low",
    img: <Lottie animationData={Order} loop={false} />,
  },
];
export const DASHDATA2 = [
  {
    title: "Balance",
    price: "$2.5K",
    desc: "2%",
    status: "low",
    img: <Lottie animationData={Balance} loop={false} />,
  },
  {
    title: "Total Sales",
    price: "$89K",
    desc: "11%",
    status: "high",
    img: <Lottie animationData={Sales} loop={false} />,
  },
];

export const overviewData = [
  {
    name: "Jan",
    uv: 4000,
  },
  {
    name: "Feb",
    uv: 3000,
  },
  {
    name: "Mar",
    uv: 2000,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
  },
  {
    name: "Jul",
    uv: 3490,
  },
  {
    name: "Aug",
    uv: 4000,
  },
  {
    name: "Sep",
    uv: 964,
  },
  {
    name: "Oct",
    uv: 4200,
  },
  {
    name: "Nov",
    uv: 5753,
  },
  {
    name: "Dec",
    uv: 4743,
  },
];

export const customerData = [
  { name: "2023", value: 65 },
  { name: "2022", value: 35 },
];

export const salesData = [
  { name: "2022", uv: 222 },
  { name: "2023", uv: 434 },
];

export const products = [
  {
    name: "Abstract 3D",
    desc: "Touch of sophistication",
    stock: 22,
    price: 45.99,
    sales: 18,
    img: "/images/abstract.jpg",
  },
  {
    name: "Landscape Canvas",
    desc: "Bring the outdoors in",
    stock: 15,
    price: 39.99,
    sales: 12,
    img: "/images/canvas.jpg",
  },
  {
    name: "Floral Print",
    desc: "Elegance to any room",
    stock: 10,
    price: 29.99,
    sales: 8,
    img: "/images/floral.jpg",
  },
  {
    name: "Abstract Sculpture",
    desc: "Make a statement in any home",
    stock: 5,
    price: 99.99,
    sales: 3,
    img: "/images/sculpture.jpg",
  },
];

export default COLORS;
