export const PRODUCTS_CATEGORIES = [
    {
        label: "UI Kits",
        value: "ui_kits" as const,
        featured: [
            {
                name: 'Editor picks',
                href: '#',
                imageScr: '/nav/ui-kits/mixed.jpg'
            },
            {
                name: 'New Arrivals',
                href: '#',
                imageScr: '/nav/ui-kits/blue.jpg'
            },
            {
                name: 'Bestsellers',
                href: '#',
                imageScr: '/nav/ui-kits/purple.jpg'
            },
        ]
    },
    {
        label: "Icons",
        value: "icons" as const,
        featured: [
            {
                name: 'Favorite Icon picks',
                href: '#',
                imageScr: '/nav/icons/picks.jpg'
            },
            {
                name: 'New Arrivals',
                href: '#',
                imageScr: '/nav/icons/new.jpg'
            },
            {
                name: 'Bestsellers',
                href: '#',
                imageScr: '/nav/icons/bestsellers.jpg'
            },
        ]
    },
];