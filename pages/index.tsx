import Head from 'next/head'
import Image from 'next/image'
import Canvas from "../components/Canvas"
import styles from '../styles/Home.module.css'

const room =	{
					roomId: "Sans&Papyrus",
					gameParam: {
						type: "default",
						nbGoal: 10
					},
					players: {
						p1: {
							name: "Sans",
							connected: true
						},
						p2: {
							name:"Papyrus",
							connected: true
						}
					},
					date: {
						createdAt: 0,
						endedAt: 0,
					}

				};

const Home: React.FC = () => {
	return (
			<div className={styles.container}>
				<Canvas room={room}></Canvas>
			</div>
	)
}

export default Home
