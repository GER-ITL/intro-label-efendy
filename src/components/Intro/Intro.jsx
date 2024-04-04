import React from 'react'
import introPhoto from '../../assets/back.png'
import c from './Intro.module.scss'
const Intro = ({ scrollTo, concRef, headRef }) => {
	return (
		<div ref={headRef} className={c.intro}>
			<img src={introPhoto} alt='back' />
			<div className={c.label}>
				<label htmlFor='label'>КОНЦЕРТНЫЙ ТУР EFENDY</label>
				<button onClick={() => scrollTo(concRef.current)}>
					СМОТРЕТЬ БИЛЕТЫ
				</button>
				{/* <RunString /> */}
			</div>
		</div>
	)
}

export default Intro
