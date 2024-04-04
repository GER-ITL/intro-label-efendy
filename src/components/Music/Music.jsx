import React from 'react'
import muz from '../../assets/muz.mp4'
import muz2 from '../../assets/muz2.mp3'
import ItemMus from './ItemMus'
import c from './Music.module.scss'
const Music = ({ musRef }) => {
	return (
		<div>
			<h1 ref={musRef} className={c.label}>
				СЛУШАЙТЕ ТРЕКИ
			</h1>
			<div className={c.listMus}>
				<ItemMus muz={muz} />
				<ItemMus muz={muz2} />
				<ItemMus />
			</div>
		</div>
	)
}

export default Music
