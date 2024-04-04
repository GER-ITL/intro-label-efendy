import React from 'react'
import AudioPlayer from '../ui/AudioPlayer'
import c from './Music.module.scss'
const ItemMus = ({ muz }) => {
	return (
		<div className={c.itemMus}>
			<h3>Все или ничего</h3>
			<h4>EFENDY</h4>
			<AudioPlayer muz={muz} />
		</div>
	)
}

export default ItemMus
