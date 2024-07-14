export const themeColors = [

  {
    name: "dark",
    bgCode: "#232324",
    colorCode: "#fff",
    iconCode: "#000",
    bgPartialTransparency: "#232324F2",
    borderColor: "#8080808a",
    activeMenuColor: "#EEA21B"
  },
  {
    name: "light",
    bgCode: "#fff",
    colorCode: "#000",
    iconCode: "#000",
    // bgPartialTransparency: "#ffffffb4"
    bgPartialTransparency: "#ffffffF2",
    borderColor: "#8080808a",
    activeMenuColor: "#EEA21B"
  },
  // {
  //   name: "blue",
  //   // bgCode: "#3b82f6",
  //   bgCode: "#194791",
  //   colorCode: "#fff",
  //   iconCode: "#000",
  //   bgPartialTransparency: "#3b82f6F2",
  //   borderColor: "#e5e5eac9",
  //   activeMenuColor: "#EEA21B"


  // }
];



export const data = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum rem laborum adipisci vel accusantium sed non,
  in enim fugit dolorum similique repellendus iste, porro voluptate. Inventore voluptates rerum incidunt error.`

export const paragraphs = new Array(12).fill(
  data
);

// Define the props structure
interface LinkItem {
  name: string;
  href: string;
}

export interface FooterSection {
  links: LinkItem[];
  colSpan?: number;
  extraClasses?: string;
}
export const footerSections:FooterSection[] = [
  {
    links: [{ name: "Toedur", href: "#" }],
    // colSpan: 2,
    extraClasses: 'one flex flex-col gap-4 font-bold text-4xl',
  },
  {
    links: [
      { name: "Toeudr", href: "#" },
      { name: "About Us", href: "#" },
      { name: "Career", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Partnership", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Terms & Conditions", href: "#" },
    ],
    // colSpan: 2,
    extraClasses: 'two change-text',
  },
  {
    links: [
      { name: "Products", href: "#" },
      { name: "Toedur Language", href: "#" },
      { name: "Toedur Podcast", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Promotion", href: "#" },
    ],
    // colSpan: 2,
    extraClasses: 'three change-text',
  },
  {
    links: [
      { name: "Policy", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookies Policy", href: "#" },
    ],
    // colSpan: 1,
    extraClasses: 'four change-text',
  },
  
];

export const cardData = [
  {
    imgSrc: "https://res.cloudinary.com/dkmdrcm73/image/upload/v1720621242/toedur/e4ptm7r060bvi6difxu4.svg",
    imgAlt: "pic",
    name: "John Doe",
    rating: 6,
    reviewText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    articleText: "My Edur Maria Emilia was a great guide to overcome my inconveniences and continue with my studies, without Toedur it will be so hard to find consultant like Maria, and that helped me resolve my doubts regarding my immigration status in France",
  },
  {
    imgSrc: "https://res.cloudinary.com/dkmdrcm73/image/upload/v1720621207/toedur/ud0jjzytjgzexlsmfk1j.svg",
    imgAlt: "pic",
    name: "John Doe",
    rating: 6,
    reviewText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    articleText: "Toedur provided a great platform in resolving my doubts regarding my immigration status in France. I was facing numerous challenges and uncertainties about my legal standing, but with the help of Edur María Emilia, I was able to navigate through the complexities with ease.",
  },
  {
    imgSrc: "https://res.cloudinary.com/dkmdrcm73/image/upload/v1720621251/toedur/orutuycfw0onzvyb5ezo.svg",
    imgAlt: "pic",
    name: "John Doe",
    rating: 6,
    reviewText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    articleText: "I am deeply grateful for dedication and professionalism, which made a significant difference in my experience. Thanks to Toedur, I now feel confident and secure in my status, allowing me to focus fully on my academic pursuits.",
  },
  {
    imgSrc: "https://res.cloudinary.com/dkmdrcm73/image/upload/v1720621207/toedur/rpmwshodn5zhdksyc0sc.svg",
    imgAlt: "pic",
    name: "John Doe",
    rating: 6,
    reviewText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    articleText: "I am deeply grateful for dedication and professionalism, which made a significant difference in my experience. Thanks to Toedur, I now feel confident and secure in my status, allowing me to focus fully on my academic pursuits.",
  },
  {
    imgSrc: "https://res.cloudinary.com/dkmdrcm73/image/upload/v1720621219/toedur/jq2iuctot4fxqjzlqawd.svg",
    imgAlt: "pic",
    name: "John Doe",
    rating: 6,
    reviewText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    articleText: "I am deeply grateful for dedication and professionalism, which made a significant difference in my experience. Thanks to Toedur, I now feel confident and secure in my status, allowing me to focus fully on my academic pursuits.",
  },
  
];