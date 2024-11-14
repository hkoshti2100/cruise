import { EllipsesHorizontalIcon } from "@/assets/icons"
import { Button, HRule } from "@/elements"

type Trend = {
	title: string,
	topics: Topic[]
}

type Topic = {
	title: string,
	posts: number
}

export default function Trending() {
	const trending: Trend[] = [
		{
			title: "TRENDING IN GUJARAT",
			topics: [
				{ title: "minions", posts: 14 },
				{ title: "chashmish", posts: 9 }
			]
		},
		{
			title: "NFTs",
			topics: [
				{ title: "boredapes", posts: 37 }
			]
		},
		{
			title: "CRICKET - IPL",
			topics: [
				{ title: "Dhoni", posts: 21 }
			]
		}
	]

	return (
		<div id="trending-bar" className="container-ui">
			<div className="container-ui-content">
				<Trending.Title />
				<Trending.Trends trends={ trending } />
			</div>
		</div>
	)
}

Trending.Title = Title
Trending.Trends = Trends

function Title() {
	return (
		<p className="container-ui-title">
			Trending right now!
		</p>
	)
}

function Trends(props: { trends: Trend[] }) {
	return (
		<>
			{ props.trends.map((trend) => (
				<Trend key={ trend.title } trend={ trend } />
			)) }
		</>
	)
}

function Trend(props: { trend: Trend }) {
	return (
		<div className="activity-trend">

			<HRule />

			<p className="trend-title sub-text">
				{ props.trend.title }
			</p>

			{ props.trend.topics.map((topic) => (
				<div key={ topic.title } className="trend-topic">
					<p className="trend-topic-title">
						#{ topic.title }
					</p>

					<p className="trend-topic-posts sub-text">
						{ topic.posts } Posts
					</p>

					<Button variant="iconic" className="trend-topic-action">
						<EllipsesHorizontalIcon className="icon-text" />
					</Button>
				</div>
			)) }

		</div>
	)
}
