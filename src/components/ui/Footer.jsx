import React from 'react'
import { Link } from 'react-router-dom'
import c from './Footer.module.scss'
const Footer = ({ footRef }) => {
	return (
		<footer ref={footRef} className={c.footer}>
			<ul>
				<li>
					<Link>INSTAGRAM</Link>
				</li>
				<li>
					<Link>ВКОНТАКТЕ</Link>
				</li>
				<li>
					<Link>ЯНДЕКС.МУЗЫКА</Link>
				</li>
				<li>
					<Link>YOUTUBE</Link>
				</li>
			</ul>
		</footer>
	)
}

export default Footer
