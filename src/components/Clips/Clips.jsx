import React, { useState } from 'react'
import c from './Clips.module.scss'
const Clips = ({ videoRef }) => {
	const [youtubeID] = useState('Q6Nr-ET6qWk')
	return (
		<div>
			<h1 ref={videoRef} className={c.label}>
				СМОТРИТЕ ПРЕМЬЕРУ КЛИПА
			</h1>
			<div className={c.overlay}>
				<iframe
					height='520'
					width='860'
					title='Youtube player'
					src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
				></iframe>
			</div>
		</div>
	)
}

export default Clips
