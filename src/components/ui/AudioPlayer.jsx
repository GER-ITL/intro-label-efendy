import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import useSound from 'use-sound'
import './AudioPlayer.scss'

const AudioPlayer = ({ muz }) => {
	const [isPlaying, setIsPlaying] = useState(false)

	const [play, { pause }] = useSound(muz)

	const playingButton = () => {
		if (isPlaying) {
			pause()
			setIsPlaying(false)
		} else {
			play()
			setIsPlaying(true)
		}
	}

	return (
		<div className='component'>
			<div>
				<button className='playButton'>
					<IconContext.Provider value={{ size: '3em', color: '#e6e6fa' }}>
						<BiSkipPrevious />
					</IconContext.Provider>
				</button>
				{!isPlaying ? (
					<button className='playButton' onClick={playingButton}>
						<IconContext.Provider value={{ size: '3em', color: '#e6e6fa' }}>
							<AiFillPlayCircle />
						</IconContext.Provider>
					</button>
				) : (
					<button className='playButton' onClick={playingButton}>
						<IconContext.Provider value={{ size: '3em', color: '#e6e6fa' }}>
							<AiFillPauseCircle />
						</IconContext.Provider>
					</button>
				)}
				<button className='playButton'>
					<IconContext.Provider value={{ size: '3em', color: '#e6e6fa' }}>
						<BiSkipNext />
					</IconContext.Provider>
				</button>
			</div>
		</div>
	)
}

export default AudioPlayer
