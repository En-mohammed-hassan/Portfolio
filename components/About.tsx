"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				After earning my degree in{" "}
				<span className="font-medium">Computer and Automation Engineering</span>
				, I began my career in{" "}
				<span className="font-medium">
					technical support and network administration
				</span>
				. Over time, I found myself increasingly drawn to{" "}
				<span className="font-medium">web development</span>. I took frontend
				and backend development courses through the Syrian Computer Society and
				have since been working as a{" "}
				<span className="font-medium">freelance full-stack developer</span>.{" "}
				<span className="italic">My favorite part of development</span> is
				crafting intuitive, reusable components and solving architecture
				challenges. My core stack includes{" "}
				<span className="font-medium">
					Next.js, React, Node.js, and Tailwind CSS
				</span>
				. I also work with PHP, Laravel, and Git, and I'm always seeking to
				deepen my skills. I am currently looking for a{" "}
				<span className="font-medium">full-time role</span> in full-stack
				development.
			</p>

			<p>
				<span className="italic">When I'm not coding</span>, I enjoy exploring
				new technology, watching movies, and expanding my knowledge. I'm
				currently working on my{" "}
				<span className="font-medium">Master’s degree in Web Science</span> at
				the Syrian Virtual University and diving deeper into topics that help
				shape advanced web applications.
			</p>
		</motion.section>
	);
}
