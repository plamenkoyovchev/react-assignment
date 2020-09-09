export interface LinkItem {
  title: string;
  link: string;
  id: number;
}

export const navigationAccess: {
  [key: string]: LinkItem[];
} = {
  Admin: [
    {
      id: 1,
      title: "Items",
      link: "/items",
    },
    {
      id: 2,
      title: "Profile",
      link: "/profile",
    },
    {
      id: 3,
      title: "Administration",
      link: "/administration",
    },
    {
      id: 4,
      title: "Progress",
      link: "/progress",
    },
  ],
  User: [
    {
      id: 1,
      title: "Items",
      link: "/items",
    },
    {
      id: 3,
      title: "Profile",
      link: "/profile",
    },
  ],
};
