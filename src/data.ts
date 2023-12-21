/* Data Items in order
1. menu [keeping local]
2. TopBox Item Data - Top Deal Users [moved to API]
3. chartBox Data - Sales and Revenue analytics / bar graph 1 [moved to API]
4. chartBoxProduct - bar graph 2 [moved to API]
5. chartBoxRevenue - Line graph 1 [moved to API]
6. chartBoxConversion - Line graph 2 [moved to API]
7. barChartBoxRevenue - Bar graph 1 [moved to API]
8. barChartBoxVisit - Bar graph 2 [moved to API]
9. userRows - user data [moved to API]
10. products - product data 
11. orders - order data [moved to API]
12. singleUser - Profile page information [moved to API]
13. singleProduct - Single Product information page [moved to API]
13. userInputs - user creation form input [keeping local]
14. productInputs - product page creation form [keeping local]
*/

// vertical menu items -> can be kept local
export const menu = [
    {
      id: 1,
      title: "main",
      listItems: [
        {
          id: 1,
          title: "Homepage",
          url: "/home",
          icon: "/home.svg",
        },
        {
          id: 2,
          title: "Profile",
          url: "/users/1",
          icon: "/user.svg",
        },
      ],
    },
    {
      id: 2,
      title: "lists",
      listItems: [
        {
          id: 1,
          title: "Users",
          url: "/users",
          icon: "/user.svg",
        },
        {
          id: 2,
          title: "Products",
          url: "/products",
          icon: "/product.svg",
        },
        {
          id: 3,
          title: "Orders",
          url: "/orders",
          icon: "/order.svg",
        },
        {
          id: 4,
          title: "Posts",
          url: "/home",
          icon: "/post2.svg",
        },
      ],
    },
    {
      id: 3,
      title: "general",
      listItems: [
        {
          id: 1,
          title: "Elements",
          url: "/home",
          icon: "/element.svg",
        },
        {
          id: 2,
          title: "Notes",
          url: "/home",
          icon: "/note.svg",
        },
        {
          id: 3,
          title: "Forms",
          url: "/new",
          icon: "/form.svg",
        },
        {
          id: 4,
          title: "Calendar",
          url: "/calendar",
          icon: "/calendar.svg",
        },
      ],
    },
    {
      id: 4,
      title: "Maintenance",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "/home",
          icon: "/setting.svg",
        },
        {
          id: 2,
          title: "Backups",
          url: "/home",
          icon: "/backup.svg",
        },
      ],
    },
    {
      id: 5,
      title: "analytics",
      listItems: [
        {
          id: 1,
          title: "Charts",
          url: "/home",
          icon: "/chart.svg",
        },
        {
          id: 2,
          title: "Logs",
          url: "/home",
          icon: "/log.svg",
        },
      ],
    },
  ];

// TopBox Item Data -> to be replaced with 'Most Recent Orders'
export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "1.560",
  },
];

// chartBox Data -> replace with total orders, pending orders, sales, revenue etc.
export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};
export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "৳ 56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

// Data for the bar charts -> replace with sales information
export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};


// User data for Users/DataTable -> replace with customer list

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
];


// Product data for Products.tsx/dataGrid -> replace with actual product list from the buyer
export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

// Product data for orders.tsx/dataGrid -> replace with actual product list from the buyer
export const orders = [
  {
    id: "1",
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    orderNum: "#34A7HH52",
    client: "stylecraft.mb",
    clientID: "826",
    brand: "MOSS BROS",
    brandID: "9",
    total: "৳ 13,00,000",
    orderDate: "13 Dec, 2023",
    dueDate: "31 Dec, 2023",
    status: "Pending",
  },
  {
    id: "2",
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    orderNum: "#U6TYHHJK",
    client: "universal.hm",
    clientID: "897",
    brand: "H&M",
    brandID: "1",
    total: "৳ 6,50,000",
    orderDate: "13 Dec, 2023",
    dueDate: "27 Dec, 2023",
    status: "Ongoing",
  },
  {
    id: "3",
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    orderNum: "#TG77NM45",
    client: "ayat.at",
    clientID: "8073",
    brand: "ATEX",
    brandID: "141",
    total: "৳ 11,50,000",
    orderDate: "13 Dec, 2023",
    dueDate: "26 Dec, 2023",
    status: "Ongoing",
  },
  {
    id: "4",
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    orderNum: "#67229GGD",
    client: "atex.at",
    clientID: "6419",
    brand: "ATEX",
    brandID: "141",
    total: "৳ 10,00,000",
    orderDate: "13 Dec, 2023",
    dueDate: "20 Dec, 2023",
    status: "Delayed",
  },
  {
    id: "5",
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    orderNum: "#FG5TTUA0",
    client: "stylecraft.hm",
    clientID: "826",
    brand: "H&M",
    brandID: "1",
    total: "৳ 7,80,500",
    orderDate: "13 Dec, 2023",
    dueDate: "24 Dec, 2023",
    status: "Ongoing",
  },
  {
    id: "6",
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    orderNum: "#TYHUSSGH",
    client: "universal.mb",
    clientID: "897",
    brand: "MOSS BROS",
    brandID: "9",
    total: "৳ 15,90,500",
    orderDate: "13 Dec, 2023",
    dueDate: "29 Dec, 2023",
    status: "Pending",
  },
];


// single User data for user/Users -> replace with customer/buyer data
export const singleUser = {
  id: 1,
  title: "John Doe",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "Johndoe99",
    fullname: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "John Doe added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "John Doe purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "1 month ago",
    },
    {
      text: "John Doe added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "2 months ago",
    },
  ],
};

// single product example data -> replace with actual product data and properties
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};

// form data sources fixes the fields for the new user and product creation forms
// Replace depending on the input fields that we want to store
export const userInputs = [
  {
    id: 1,
    label: "Image Link",
    type: "text",
    name: "img",
    placeholder: "Image Link",
    // required: true,
  },
  {
    id: 2,
    label: "Client ID",
    type: "text",
    name: "clientId",
    placeholder: "0000",
    // required: true,
  },
  {
    id: 3,
    label: "Client Name",
    type: "text",
    name: "clientName",
    placeholder: "John Doe",
    // required: true,
  },
  {
    id: 4,
    label: "Credentials",
    type: "text",
    name: "clientCredentials",
    placeholder: "john_doe",
    // required: true,
  },
  {
    id: 5,
    label: "Brand ID",
    type: "text",
    name: "brandId",
    placeholder: "0000",
    // required: true,
  },
  {
    id: 6,
    label: "Brand Name",
    type: "text",
    name: "brandName",
    placeholder: "John Doe",
    // required: true,
  },
  {
    id: 7,
    label: "Current Address",
    type: "text",
    name: "address",
    placeholder: "Current Address",
    // required: true,
  },
  {
    id: 8,
    label: "Contact Person",
    type: "text",
    name: "contactPerson",
    placeholder: "john doe",
    // required: true,
  },
  {
    id: 9,
    label: "Contact Phone",
    type: "text",
    name: "contactPhone",
    placeholder: "000000",
    // required: true,
  },
  {
    id: 10,
    label: "Contact Email",
    type: "email",
    name: "contactEmail",
    placeholder: "example@email.com",
    // required: true,
  },
  {
    id: 11,
    label: "Sales Person",
    type: "text",
    name: "sales",
    placeholder: "john doe",
    // required: true,
  },
  {
    id: 12,
    label: "Customer Service",
    type: "text",
    name: "customerService",
    placeholder: "john doe",
    // required: true,
  },
  {
    id: 13,
    label: "Credit Limit",
    type: "text",
    name: "creditLimit",
    placeholder: "00000",
    // required: true,
  },
  {
    id: 14,
    label: "Account Email",
    type: "email",
    name: "email",
    placeholder: "example@email.com",
    // required: true,
  },
  {
    id: 15,
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Enter the password",
    // required: true,
  },
  {
    id: 16,
    label: "Created By",
    type: "text",
    name: "createdBy",
    placeholder: "Admin-1",
    // required: true,
  },
];

// Older user creation input fields
// Replace depending on the input fields that we want to store
// export const userInputs = [
//   {
//     id: 1,
//     label: "Username",
//     type: "text",
//     name: "username",
//     placeholder: "john_doe",
//     // required: true,
//   },
//   {
//     id: 2,
//     label: "Name and surname",
//     type: "text",
//     name: "fullname",
//     placeholder: "John Doe",
//   },
//   {
//     id: 3,
//     label: "Email",
//     type: "mail",
//     name: "email",
//     placeholder: "john_doe@gmail.com",
//   },
//   {
//     id: 4,
//     label: "Phone",
//     type: "text",
//     name: "phone",
//     placeholder: "+1 234 567 89",
//   },
//   {
//     id: 5,
//     label: "Password",
//     type: "password",
//     name: "password",
//   },
//   {
//     id: 6,
//     label: "Address",
//     type: "text",
//     name: "address",
//     placeholder: "Elton St. 216 NewYork",
//   },
//   {
//     id: 7,
//     label: "Country",
//     type: "text",
//     name: "country",
//     placeholder: "USA",
//   },
// ];

export const productInputs = [
  {
    id: 1,
    label: "Title",
    type: "text",
    name: "title",
    placeholder: "Apple Macbook Pro",
  },
  {
    id: 2,
    label: "Description",
    type: "text",
    name: "description",
    placeholder: "Description",
  },
  {
    id: 3,
    label: "Category",
    type: "text",
    name: "category",
    placeholder: "Computers",
  },
  {
    id: 4,
    label: "Price",
    type: "text",
    name: "price",
    placeholder: "100",
  },
  {
    id: 5,
    label: "Stock",
    type: "text",
    name: "stock",
    placeholder: "in stock",
  },
];

