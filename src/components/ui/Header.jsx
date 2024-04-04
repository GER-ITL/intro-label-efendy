import { Link } from 'react-router-dom'
import c from './Header.module.scss'
const Header = ({ scrollTo, concRef, videoRef, musRef, footRef, headRef }) => {
	return (
		<div className={c.header}>
			<Link onClick={() => scrollTo(headRef.current)} className={c.logo}>
				EFENDY
			</Link>

			<ul className={c.navBar}>
				<li>
					<Link to='/#' onClick={() => scrollTo(concRef.current)}>
						КОНЦЕРТЫ
					</Link>
				</li>
				<li>
					<Link to='/#' onClick={() => scrollTo(videoRef.current)}>
						ВИДЕО
					</Link>
				</li>
				<li>
					<Link to='/#' onClick={() => scrollTo(musRef.current)}>
						МУЗЫКА
					</Link>
				</li>
				<li>
					<Link to='/#' onClick={() => scrollTo(footRef.current)}>
						КОНТАКТЫ
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Header
