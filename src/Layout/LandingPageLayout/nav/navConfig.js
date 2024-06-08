import {
    ABS,
    BACKPACKS,
    HANDBAGS,
    LAPTOPBAGS,
    LUGGAGE,
    PC,
    PP,
    PU,
    TRAVELSPORTSBAGS
} from "../../../routes/RouteConstants";

export const navConfig = [
    {
        id: 1,
        name: "Luggage",
        path: LUGGAGE,
        dropdown: [
            {
                id: 1,
                name: "ABS",
                path: ABS
            },
            {
                id: 2,
                name: "PC",
                path: PC
            },
            {
                id: 3,
                name: "PP",
                path: PP
            },
            {
                id: 4,
                name: "PU",
                path: PU
            },
        ]
    },
    {
        id: 2,
        name: "Backpack",
        path: "/#",
        dropdown: [
            {
                id: 1,
                name: "Backpacks",
                path: BACKPACKS
            },
            {
                id: 2,
                name: "Laptop bags",
                path: LAPTOPBAGS
            },
            {
                id: 3,
                name: "Handbags",
                path: HANDBAGS
            },
            {
                id: 4,
                name: "travel & sports bags",
                path: TRAVELSPORTSBAGS
            },
        ]
    },
    {
        id: 3,
        name: "Quick links",
        path: "#",
        dropdown: [
            {
                id: 1,
                name: "Trending Products",
                path: "/#"
            },
            {
                id: 2,
                name: "Best Selling",
                path: "/#"
            },
            {
                id: 3,
                name: "Top Rated",
                path: "/#"
            },
        ]
    }
];
