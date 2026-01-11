import React from "react";

import topAi from "@/public/topAi.png";
import eCom from "@/public/eCom.png";
import onePlace from "@/public/onePlace.png";
import { FaLaptopCode } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
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
		title: "Bachelor Degree - Computer and Automation Engineering",
		location: "Damascus University, Damascus, Syria",
		description:
			"Completed Bachelor's degree in Computer and Automation Engineering.",
		icon: React.createElement(LuGraduationCap),
		date: "10/2012 - 10/2019",
	},
	{
		title: "Manager",
		location: "Own Market, Latakia, Syria",
		description:
			"Sale and maintain mobiles and computers. Administration, Operations, and Management.",
		icon: React.createElement(CgWorkAlt),
		date: "09/2019 - 09/2021",
	},
	{
		title: "Front End Development",
		location: "Syrian Computer Society",
		description:
			"Completed Front End Development course.",
		icon: React.createElement(BsFillPatchCheckFill),
		date: "2022",
	},
	{
		title: "Back End Development",
		location: "Syrian Computer Society",
		description:
			"Completed Back End Development course.",
		icon: React.createElement(BsFillPatchCheckFill),
		date: "2022",
	},
	{
		title: "Network Professional Admin",
		location: "Syrian Computer Society",
		description:
			"Completed Network Professional Administration course.",
		icon: React.createElement(BsFillPatchCheckFill),
		date: "2022",
	},
	{
		title: "Natural Language Processing",
		location: "Lifelong Learning Center / SVU",
		description:
			"Completed Natural Language Processing course.",
		icon: React.createElement(BsFillPatchCheckFill),
		date: "2023",
	},
	{
		title: "Master in Web Science",
		location: "Syrian Virtual University, Damascus, Syria",
		description:
			"Master's degree in Web Science.",
		icon: React.createElement(LuGraduationCap),
		date: "01/2023 - Present",
	},
	{
		title: "Next Fullstack Developer (Freelancer)",
		location: "Damascus, Syria",
		description:
			"Determining the structure and design of web pages and building reusable codes. Developing new user-facing features and delivering user-friendly experiences.",
		icon: React.createElement(FaLaptopCode),
		date: "09/2023 - Present",
	},
	{
		title: "Front End Developer",
		location: "Mad Fox, Damascus, Syria",
		description:
			"Building and optimizing responsive user interfaces. Collaborating with designers and backend teams. Ensuring all projects meet modern web standards and best practices.",
		icon: React.createElement(CgWorkAlt),
		date: "06/2025 - Present",
	},
	{
		title: "Front End Developer",
		location: "rmz, Damascus, Syria",
		description:
			"Implement responsive and accessible UI components using modern front-end technologies. Collaborate with cross-functional teams to integrate frontend solutions with backend systems. Ensure performance, scalability, and compliance with modern web standards.",
		icon: React.createElement(CgWorkAlt),
		date: "09/2026 - Present",
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
