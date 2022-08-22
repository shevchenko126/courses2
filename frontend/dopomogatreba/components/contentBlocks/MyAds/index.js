import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import SearchBar from './SearchBar';
import AdsList from './AdsList';
import React, { useState } from "react";

const cards = [

    {
        id: 0,
        image: 'https://picsum.photos/200',
        name: "mel",
        date: 1658143787051.676,
        price: 250,
        status: "active",
        dropdownItems: [
            {
                name: 'View all details',
                icon: 'Eye',
                href: '#',
            },
            {
                name: 'Mark it expire',
                icon: 'XCircle',
                href: '#'
            },
            {
                name: 'Delete Ads',
                href: '#'
            }
        ]
    },
    {
        id: 1,
        image: 'https://picsum.photos/200',
        name: "veronika",
        date: 1670623200000.0,
        price: 251,
        status: "expire",
        dropdownItems: [
            {
                name: 'View all details',
                icon: 'Eye',
                href: '#',
            },
            {
                name: 'Mark it expire',
                icon: 'XCircle',
                href: '#'
            },
            {
                name: 'Delete Ads',
                href: '#',
                icon: 'Trash'
            }
        ]
    },
    {
        id: 2,
        image: 'https://picsum.photos/200',
        name: "Veron",
        date: 1573509600000.0,
        price: 252,
        status: "expire",
        dropdownItems: [
            {
                name: 'View all details',
                icon: 'Eye',
                href: '#',
            },
            {
                name: 'Mark it expire',
                icon: 'XCircle',
                href: '#'
            },
            {
                name: 'Delete Ads',
                icon: 'Trash',
                href: '#',
            }
        ]
    },
    {
        id: 3,
        image: 'https://picsum.photos/200',
        name: "vEroNikA",
        date: 1476392400000.0,
        price: 253,
        status: "expire",
        dropdownItems: [
            {
                name: 'View all details',
                icon: 'Eye',
                href: '#',
            },
            {
                name: 'Mark it expire',
                icon: 'XCircle',
                href: '#'
            },
            {
                name: 'Delete Ads',
                icon: 'Trash',
                href: '#'
            }
        ]
    },
    {
        id: 4,
        image: 'https://picsum.photos/200',
        name: "Yehor",
        date: 1379278800000.0,
        price: 254,
        status: "expire",
        dropdownItems: [
            {
                name: 'View all details',
                icon: 'Eye',
                href: '#',
            },
            {
                name: 'Mark it expire',
                icon: 'XCircle',
                href: '#'
            },
            {
                name: 'Delete Ads',
                icon: 'Trash',
                href: '#'
            }
        ]
    },
    {
        id: 5,
        image: 'https://picsum.photos/200',
        name: "YeHor",
        date: 1282078800000.0,
        price: 255,
        status: "expire"
    },
    {
        id: 6,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 1184878800000.0,
        price: 256,
        status: "expire"
    },
    {
        id: 7,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 1087851600000.0,
        price: 257,
        status: "expire"
    },
    {
        id: 8,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 990651600000.0,
        price: 258,
        status: "expire"
    },
    {
        id: 9,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 893538000000.0,
        price: 259,
        status: "expire"
    },
    {
        id: 10,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 796338000000.0,
        price: 260,
        status: "expire"
    },
    {
        id: 11,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 261,
        status: "expire"
    },
    {
        id: 12,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 262,
        status: "expire"
    },
    {
        id: 13,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 263,
        status: "active"
    },
    {
        id: 14,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 264,
        status: "active"
    },
    {
        id: 15,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 265,
        status: "expire",
        dropdownItems: [
            {
                name: 'View all details',
                icon: 'Eye',
                href: '#'
            },
            {
                name: 'Mark it expire',
                href: '#',
                icon: 'XCircle',
            },
            {
                name: 'Delete Ads',
                href: '#',
            }
        ]
    },
    {
        id: 16,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 266,
        status: "expire"
    },
    {
        id: 17,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 267,
        status: "expire"
    },
    {
        id: 18,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 268,
        status: "expire"
    },
    {
        id: 19,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 269,
        status: "expire"
    },
    {
        id: 20,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 270,
        status: "expire"
    },
    {
        id: 21,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 271,
        status: "expire"
    },
    {
        id: 22,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 272,
        status: "expire"
    },
    {
        id: 23,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 273,
        status: "expire"
    },
    {
        id: 24,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 274,
        status: "expire"
    },
    {
        id: 25,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 275,
        status: "expire"
    },
    {
        id: 26,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 276,
        status: "expire"
    },
    {
        id: 27,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 277,
        status: "expire"
    },
    {
        id: 28,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 278,
        status: "expire"
    },
    {
        id: 29,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 279,
        status: "expire"
    },
    {
        id: 30,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 280,
        status: "expire"
    }
]

function MyAds() {

    const [profileData, setprofileData] = useState(cards);
    const [q, setQ] = useState("");
    const [searchTerm] = useState(["date", "name", "price", "status"]);

    function search(items) {
        return items.filter((item) => {
            return searchTerm.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }

    return (
        <div className="container m-2 ">
            <SearchBar props={{q, setQ}} />
            <AdsList cards={{profileData, search}} />
        </div>
    )
}

export default MyAds