import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Pong from "../components/pong"

const Home: React.FC = () => {
  return (
		<div className="styles.container">
			<Pong/>
		</div>
	)
}

export default Home
