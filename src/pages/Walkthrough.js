import "./Walkthrough.css";

function Walkthrough() {
	return (
		<div className="walkthroughPage">
			<div className="crop">
				<img className="backgroundImage" src="./images/walkthrough.svg" alt="" />
			</div>
			<article className="walkthroughText">
				<h1>Where Words Fail, Music Speaks</h1>
				<p>
					Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.
				</p>
			</article>
			<div className="breadcrumb"></div>
		</div>
	);
}

export default Walkthrough;
