import { Button, TextArea } from "@/elements"
import { ArrowRightIcon, ReactionAddIcon, ShutterTrueIcon, VideoTrueIcon } from "@/assets/icons"

export default function Create() {
	return (
		<div className="container-ui">
			<form id="create-post-form" className="container-ui-content">

				<img
					src={ undefined }
					alt=""
					className="todo-placeholder-image current-user"
				/>

				<div className="create-post-content">
					<TextArea
						icon={ <ReactionAddIcon className="icon-text" /> }
						name="create-post-text"
						id=""
						placeholder="Share something..."
						rows={ 1 }
					/>

					<div className="create-post-options">
						<Button variant="iconic">
							<ShutterTrueIcon className="icon-text" />
							Photo
						</Button>

						<Button variant="iconic" disabled>
							<VideoTrueIcon className="icon-text" />
							Video
						</Button>

						<Button variant="iconic" type="submit">
							Post
							<ArrowRightIcon className="icon-text" />
						</Button>
					</div>
				</div>

			</form>
		</div>
	)
}
