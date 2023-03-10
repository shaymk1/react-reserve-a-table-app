import imgPastaOne from "./images/pasta-0.jpg";
import imgGreekSalad from "./images/greek-salad.jpg";
import imgPastaTwo from "./images/pasta-7.jpeg";
import imgGrilledFish from "./images/griled-fish.jpg";
import { FaInstagramSquare, FaFacebook, FaTwitter } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
import { CiLogin, CiShoppingCart } from "react-icons/ci";
// import personOne from "./images/person-1.jpg"
// import personTwo from "./images/person-6.jpg";
// import personThree from "./images/person-3.jpg"
// import personFour from "./images/person-4.jpg";

export const links = [
	{
		id: 1,
		page: "Home",
		path: "/",
		alt: "home",
	},

	// {
	// 	id: 2,
	// 	page: "About",
	// 	href: "/about",
	// },

	{
		id: 2,
		page: "Menu",
		path: "/menu",
		alt: "menu",
	},

	{
		id: 3,
		page: "Reservations",
		path: "/reservations",
		alt: "reservations",
	},

	{
		id: 4,
		page: "Order",
		path: "/order",
		alt: "order,",
	},
];

export const cards = [
	{
		id: 1,
		title: "Pasta",
		img: imgPastaOne,
		alt: "pasta with sea shells and tomatoes",
		description:
			"Our famous delicious pasta made with love using organic vegetables",
		price: "$18.99",
	},

	{
		id: 2,
		title: "Greek Salad",
		img: imgGreekSalad,
		alt: "Greek salad with feta cheese and tomatoes",
		description: "Our Greek Salads are made fresh with organic vegetables. ",
		price: "$5.99",
	},

	{
		id: 3,
		title: "Organic-Pasta",
		img: imgPastaTwo,
		alt: "pasta with sea food and powder cheece",
		description:
			"Especially made with organic pasta and other organic ingredients",
		price: " $16.99",
	},

	{
		id: 4,
		title: "Grilled Fish",
		img: imgGrilledFish,
		alt: "Grilled Salmon with a side dish of rosseto",
		description:
			"Our daily catch fresh from the ocean with your favourite side dish.",
		price: " $20.99",
	},
];

export const navIcons = [
	{
		id: 1,
		icon: <CiLogin />,
		url: "/login",
		text: "Login",
		alt: "login button",
	},
	{
		id: 2,
		icon: <CiShoppingCart />,
		url: "/order",
		text: "Cart",
		alt: "cart button",
	},
];

export const socials = [
	{
		id: 1,
		url: "https://www.facebook.com",
		icon: <FaFacebook />,
		alt: "facebook website",
	},
	{
		id: 2,
		url: "https://www.twitter.com",
		icon: <FaTwitter />,
		alt: "twitter website",
	},
	{
		id: 3,
		url: "https://www.instagram.com",
		icon: <FaInstagramSquare />,
		alt: "instagram website",
	},
	// {
	// 	id: 4,
	// 	url: "https://www.twitter.com",
	// 	icon: <FaBehance />,
	// },
];

export const legals = [
	{
		id: 1,
		page: "Accessibility",
		path: "/accessibility",
	},

	{
		id: 2,
		page: "Legal",
		path: "/legal",
	},

	{
		id: 3,
		page: "FAQ",
		path: "/faq",
	},

	// {
	// 	id: 4,
	// 	page: "Download Our App",
	// 	path: "/googleplay",
	// },
];

// export const humans = [
// 	{
// 		id: 1,
// 		image: personOne,
// 		name: "Peter Kekae",
// 		title: "UX Designer",
// 		quote:
// 			"The Ubuntu hospitality they are famous for, really makes you feel at home",
// 	},
// 	{
// 		id: 2,
// 		image: personTwo,
// 		name: "Thato Lekae",
// 		title: "Digital Marketing Specialist",
// 		quote:
// 			"I love it here, they have the most awesome grilled salmon in the whole of Chicago",
// 	},
// 	{
// 		id: 3,
// 		image: personThree,
// 		name: "Lerato Mokae",
// 		title: "product designer",
// 		quote:
// 			"I love their organic pasta with organic tomatoes on top, delicious!",
// 	},
// 	{
// 		id: 4,
// 		image: personFour,
// 		name: "Susan Andersen",
// 		title: "Java Developer",
// 		quote: "The atmosphere is very welcoming!",
// 	},
// ];

// // export default people;
