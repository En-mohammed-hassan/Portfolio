import Link from "next/link";
import React from "react";

const Nav = () => {
	return (
		<div
			id="header  "
			className=" p-6 fixed bg-black bg-opacity-50 w-full items-center flex justify-between "
		>
			<h1 className="text-white text-4xl font-bold">
				<Link href="/">MHD</Link>
			</h1>
			<nav
				id="navbar"
				className=" text-white font-semibold text-xl max-sm:hidden"
			>
				<ul className="flex gap-7 ">
					<li>
						<Link className=" group " href="#hero">
							Home
							<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
						</Link>
					</li>
					<li>
						<a className="group" href="#about">
							About
							<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
						</a>
					</li>
					<li>
						<a className="group" href="#work">
							MY Works
							<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
						</a>
					</li>
					<li>
						<a className="group" href="#contact">
							Contact
							<span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-white"></span>
						</a>
					</li>
				</ul>
				<i className=""></i>
			</nav>
		</div>
	);
};

export default Nav;
