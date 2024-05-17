import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
      <Link href="/">МОНГОЛРОСЦВЕТМЕТ ТӨҮГ</Link>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="/products/about">БИДНИЙ ТУХАЙ</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/information">МЭДЭЭЛЭЛ</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/tender">ТЕНДЕР</Link>
        </li>
        <li className={style.listItem}>
          <Link href="https://shilendans.gov.mn/organization/27094" target="_blank">ШИЛЭН ДАНС</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/transparent">ИЛ ТОД БАЙДАЛ</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/contact">ХОЛБОО БАРИХ</Link>
        </li>
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={() => setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={style.menuItem}>
          <Link href="/">МОНГОЛРОСЦВЕТМЕТ ТӨҮГ</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/about">БИДНИЙ ТУХАЙ</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/information">МЭДЭЭЛЭЛ</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/tender">ТЕНДЕР</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="https://shilendans.gov.mn/organization/27094" target="_blank">ШИЛЭН ДАНС</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/transparent">ИЛ ТОД БАЙДАЛ</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/contact">ХОЛБОО БАРИХ</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;