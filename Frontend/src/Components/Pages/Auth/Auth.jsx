import "./auth.css";

export default function AppAuth(props) {
    return (
        <>
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src="/videos/backgrounds/Under The Sea - Free Background Video Animated - Sie Lisa (1080p, h264, youtube).mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="container">
                    <div className="main-contents">
                        <h1>Authentication</h1>
                        <div className="form-container">
                            {props.authMethod}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
