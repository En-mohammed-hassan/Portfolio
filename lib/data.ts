import React from "react";

import topAi from "@/public/topAi.png";
import eCom from "@/public/eCom.png";
import onePlace from "@/public/onePlace.png";
import { FaLaptopCode } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";
export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Graduated University",
		location: "Damascus, Syria",
		description:
			"Completed a Bachelor's degree in Computer and Automation Engineering at Damascus University.",
		icon: React.createElement(LuGraduationCap),
		date: "2019",
	},
	{
		title: "Manager – Own Market",
		location: "Latakia, Syria",
		description:
			"Managed operations, sales, and technical maintenance in a mobile and computer retail shop.",
		icon: React.createElement(CgWorkAlt),
		date: "2019 - 2021",
	},
	{
		title: "Technical Support Engineer",
		location: "Damascus, Syria",
		description:
			"Provided government IT support, including network setup, system administration, and software configuration.",
		icon: React.createElement(MdOutlineSupportAgent),
		date: "2021 - 2023",
	},
	{
		title: "Certified in Web & Network Technologies",
		location: "Syrian Computer Society",
		description:
			"Completed courses in Front-End Development, Back-End Development, and Network Professional Administration.",
		icon: React.createElement(BsFillPatchCheckFill),
		date: "2022",
	},
	{
		title: "Full-Stack Developer (Freelancer)",
		location: "Remote / Damascus",
		description:
			"Freelancing with a modern stack: Next.js, React, Tailwind, and more. Delivering scalable, responsive web apps and reusable components.",
		icon: React.createElement(FaLaptopCode),
		date: "2023 - Present",
	},
] as const;

export const projectsData = [
	{
		title: "E-commerce Platform",
		description:
			"A comprehensive e-commerce backend built with Next.js and Prisma. Features include product management, user authentication, and order processing.",
		tags: [
			"Next.js",
			"Prisma",
			"TypeScript",
			"Tailwind CSS",
			"stripe",
			"kinde",
			"zod",
			"zustand",
			"shadcn",
		],
		imageUrl: eCom,
		repoUrl: "https://github.com/En-mohammed-hassan/E-commerce",
		liveUrl: "https://e-commerce-sepia-nu.vercel.app/",
	},
	{
		title: "TOP-AI",
		description:
			"An AI-focused web application developed to enhance React and Next.js skills. Integrates Prisma for database management and showcases advanced component structuring.",
		tags: [
			"Next.js",
			"Prisma",
			"TypeScript",
			"Tailwind CSS",
			"stripe",
			"kinde",
			"zod",
			"zustand",
			"shadcn",
		],
		imageUrl: topAi,
		repoUrl: "https://github.com/En-mohammed-hassan/TOP-AI",
		liveUrl: "https://top-ai-psi.vercel.app/",
	},
	{
		title: "ONE PLACE",
		description:
			"A professional services website offering planning, design, marketing, and execution solutions for startups and enterprises. Developed with a focus on responsive design and user engagement.",
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn", "Framer Motion"],
		imageUrl: onePlace,
		liveUrl: "https://1oneplace.com/",
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"Tailwind",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Prisma",
	"zustand",
	"zod",
	"Framer Motion",
	"php",
	"lavavel",
	"Git",
	"python",
] as const;
