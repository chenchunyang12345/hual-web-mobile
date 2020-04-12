import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavContent.module.css';

const NAVLIST = [
  {
    name: '首页',
    url: '/'
  },
  {
    name: '核心与技术',
    url: '/technology'
  },
  {
    name: '服务与产品',
    url: '/product'
  },
  {
    name: '关于我们',
    url: '/about'
  }
]

const NavContent = () => {
  const router = useRouter();
  let { pathname } = router;

  return (
    <ul className={styles.navContent}>
      {
        NAVLIST.map((item, idx) => (
        <li key={idx}>
          <Link href={item.url}>
            <a className={item.url === pathname ? styles.choose : ''} >{item.name}</a>
          </Link>
        </li>
        ))
      }
    </ul>
  )
}

export default NavContent;