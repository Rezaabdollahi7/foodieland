import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export const NAV_LINKS = [
  { href: '#', label: 'Home' },
  { href: '#recipes', label: 'Recipes' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
  { href: '#about', label: 'About Us' },
];

export const SOCIAL_LINKS = [
  { href: 'https://facebook.com', icon: <FaFacebookF className="size-5" /> },
  { href: 'https://twitter.com', icon: <FaTwitter className="size-5" /> },
  { href: 'https://instagram.com', icon: <FaInstagram className="size-5" /> },
];
