'use client';
import Link from "next/link";
import styles from "../menuLink/menuLink.module.css";
import { usePathname } from "next/navigation";
export const MenuLink = ({item}) => {
  const pathname = usePathname()
  
  
  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.activate} `}>
      {item.icon}
      {item.title}
    </Link>
  );
}
