import React from 'react'
import { Link } from 'react-router-dom'
import c from './Info.module.scss'
const Info = ({ concRef }) => {
	return (
		<div>
			<h1 ref={concRef} className={c.label}>
				КОНЦЕРТЫ
			</h1>
			<div className={c.itemInfo}>
				<div>
					26 АПРЕЛЯ <br />
					<span>20:00</span>
				</div>
				<div>
					Москва <br />
					<span>Lorem, ipsum</span>
				</div>
				<Link to='https://zakazbiletov.kz/ru/events/5-astana/3-kontserty/21968-akmal/64027#schedule-anchor#schedule-anchor'>
					БИЛЕТЫ{' '}
				</Link>
			</div>
			<div className={c.itemInfo}>
				<div>
					26 АПРЕЛЯ <br />
					<span>20:00</span>
				</div>
				<div>
					Москва <br />
					<span>Lorem, ipsum</span>
				</div>
				<Link to='https://zakazbiletov.kz/ru/events/5-astana/3-kontserty/21968-akmal/64027#schedule-anchor#schedule-anchor'>
					БИЛЕТЫ{' '}
				</Link>
			</div>
			<div className={c.itemInfo}>
				<div>
					26 АПРЕЛЯ <br />
					<span>20:00</span>
				</div>
				<div>
					Москва <br />
					<span>Lorem, ipsum</span>
				</div>
				<Link to='https://zakazbiletov.kz/ru/events/5-astana/3-kontserty/21968-akmal/64027#schedule-anchor#schedule-anchor'>
					БИЛЕТЫ{' '}
				</Link>
			</div>
		</div>
	)
}

export default Info
