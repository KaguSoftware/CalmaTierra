import { Variants } from "motion/react";

//  Mobile Menu Animations

export const mobileMenuVariants: Variants = {
	initial: { x: "100%" },
	animate: {
		x: 0,
		transition: {
			duration: 0.4,
			ease: [0.22, 1, 0.36, 1],
			staggerChildren: 0.08,
		},
	},
	exit: {
		x: "100%",
		transition: {
			duration: 0.3,
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};

export const mobileLinkVariants: Variants = {
	initial: { opacity: 0, y: 20 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.3 },
	},
	exit: {
		opacity: 0,
		y: 20,
		transition: { duration: 0.2 },
	},
};

//  Desktop Animations
export const desktopHoverProps = {
	layoutId: "navbar-hover-bg",
	initial: false,
	transition: {
		type: "spring",
		bounce: 0.2,
		duration: 0.6,
	},
};
