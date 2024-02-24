export const userColumns = [
	{ field: "id", headerName: "ID", width: 70 },
	{
		field: "username",
		headerName: "User",
		width: 230,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img className="cellImg" src={params.row.img} alt="avatar" />
					{params.row.username}
				</div>
			);
		},
	},
	{
		field: "email",
		headerName: "Email",
		width: 230,
	},

	{
		field: "country",
		headerName: "Country",
		width: 100,
	},
	{
		field: "phone",
		headerName: "Phone",
		width: 160,
	},
];

//temporary data
export const userRows = [
	{
		id: 1,
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

		username: "Snow",
		email: "1snow@gmail.com",
		age: 35,
		phone: "123-456-7890",
		address: "123 Main St",
		country: "USA",
	},
	{
		id: 2,
		username: "Jamie Lannister",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "2snow@gmail.com",

		age: 42,
		phone: "234-567-8901",
		address: "456 Elm St",
		country: "Canada",
	},
	{
		id: 3,
		username: "Lannister",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "3snow@gmail.com",

		age: 45,
		phone: "345-678-9012",
		address: "789 Oak St",
		country: "UK",
	},
	{
		id: 4,
		username: "Stark",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "4snow@gmail.com",

		age: 16,
		phone: "456-789-0123",
		address: "321 Pine St",
		country: "USA",
	},
	{
		id: 5,
		username: "Targaryen",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "5snow@gmail.com",

		age: 22,
		phone: "567-890-1234",
		address: "654 Maple St",
		country: "Canada",
	},
	{
		id: 6,
		username: "Melisandre",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "6snow@gmail.com",

		age: 15,
		phone: "678-901-2345",
		address: "987 Oak St",
		country: "UK",
	},
	{
		id: 7,
		username: "Clifford",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "7snow@gmail.com",

		age: 44,
		phone: "789-012-3456",
		address: "741 Elm St",
		country: "USA",
	},
	{
		id: 8,
		username: "Frances",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "8snow@gmail.com",

		age: 36,
		phone: "890-123-4567",
		address: "852 Oak St",
		country: "Canada",
	},
	{
		id: 9,
		username: "Roxie",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "snow@gmail.com",

		age: 65,
		phone: "901-234-5678",
		address: "963 Pine St",
		country: "UK",
	},
	{
		id: 10,
		username: "Roxie",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "snow@gmail.com",

		age: 65,
		phone: "012-345-6789",
		address: "159 Maple St",
		country: "USA",
	},
];

export const productRows = [
	{
		id: 1,
		title: "Wireless Headphones",
		description:
			"Enjoy immersive audio experience with these premium wireless headphones. Featuring noise cancellation and long battery life.",
		category: "Electronics",
		price: 99.99,
		stock: 50,
		image:
			"https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=300",
	},
	{
		id: 2,
		title: "Leather  Bag",
		description:
			"Stay organized and stylish on the go with this genuine leather messenger bag. Perfect for work or travel.",
		category: "Fashion",
		price: 149.99,
		stock: 30,
		image:
			"https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=300",
	},
	{
		id: 3,
		title: "Stainless Steel Watch",
		description:
			"Make a statement with this elegant stainless steel watch. Water-resistant with a classic design.",
		category: "Accessories",
		price: 199.99,
		stock: 20,
		image:
			"https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg?auto=compress&cs=tinysrgb&w=300",
	},
	{
		id: 4,
		title: "Smart Home Thermostat",
		description:
			"Effortlessly control your home's temperature with this smart thermostat. Save energy and stay comfortable.",
		category: "Home & Kitchen",
		price: 129.99,
		stock: 15,
		image:
			"https://images.pexels.com/photos/4050295/pexels-photo-4050295.jpeg?auto=compress&cs=tinysrgb&w=300",
	},
	{
		id: 5,
		title: "Organic Cotton T-Shirt",
		description:
			"Stay comfortable and eco-friendly with this organic cotton t-shirt. Perfect for everyday wear.",
		category: "Fashion",
		price: 24.99,
		stock: 25,
		image:
			"https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?auto=compress&cs=tinysrgb&w=300",
	},
	{
		id: 6,
		title: "Ceramic Coffee Mug Set",
		description:
			"Start your day right with this stylish ceramic coffee mug set. Microwave and dishwasher safe.",
		category: "Home & Kitchen",
		price: 39.99,
		stock: 40,
		image:
			"https://images.pexels.com/photos/4200825/pexels-photo-4200825.jpeg?auto=compress&cs=tinysrgb&w=300",
	},
	{
		id: 7,
		title: "Wireless Charging Pad",
		description:
			"Charge your devices wirelessly with this sleek charging pad. Compatible with smartphones and other Qi-enabled devices.",
		category: "Electronics",
		price: 49.99,
		stock: 10,
		image:
			"https://images.pexels.com/photos/7742584/pexels-photo-7742584.jpeg?auto=compress&cs=tinysrgb&w=300",
	},
	{
		id: 8,
		title: "Fitness Tracker",
		description:
			"Stay motivated and track your fitness goals with this advanced fitness tracker. Monitor heart rate, steps, and more.",
		category: "Fitness & Sports",
		price: 79.99,
		stock: 5,
		image:
			"https://images.pexels.com/photos/4426514/pexels-photo-4426514.jpeg?auto=compress&cs=tinysrgb&w=300",
	},
];

export const productColumns = [
	{
		field: "id",
		headerName: "ID",
		width: 70,
	},
	{
		field: "title",
		headerName: "Title",
		width: 230,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img className="cellImg" src={params.row.image} alt="avatar" />
					{params.row.title}
				</div>
			);
		},
	},
	{
		field: "price",
		headerName: "Price",
		width: 100,
	},
	{
		field: "stock",
		headerName: "Stock",
		width: 100,
	},
	{
		field: "category",
		headerName: "Category",
		width: 160,
	},
];
