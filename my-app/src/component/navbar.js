import { useRef } from "react";
import "../style/main.css";


function Navbar() {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}> X
					
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
            O
			</button>
		</header>
	);
}

export default Navbar;