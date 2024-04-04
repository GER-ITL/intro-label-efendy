import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { useRef } from 'react'
import Clips from './components/Clips/Clips'
import Info from './components/Info/Info'
import Intro from './components/Intro/Intro'
import Music from './components/Music/Music'
import Footer from './components/ui/Footer'
import Header from './components/ui/Header'
import './styles/App.scss'

function App() {
	gsap.registerPlugin(ScrollToPlugin)
	// const [headRef, concRef, videoRef, musRef, footRef] = useRef('')
	const headRef = useRef(null)
	const concRef = useRef(null)
	const videoRef = useRef(null)
	const musRef = useRef(null)
	const footRef = useRef(null)

	const scrollTo = target => {
		gsap.to(window, { duration: 1, scrollTo: target })
	}
	return (
		<div className='App'>
			<Header
				scrollTo={scrollTo}
				headRef={headRef}
				concRef={concRef}
				videoRef={videoRef}
				musRef={musRef}
				footRef={footRef}
			/>
			<Intro scrollTo={scrollTo} concRef={concRef} headRef={headRef} />
			<Info concRef={concRef} />
			<Clips videoRef={videoRef} />
			<Music musRef={musRef} />
			<Footer footRef={footRef} />
		</div>
	)
}

export default App
