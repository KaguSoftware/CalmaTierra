import { Variants } from "motion/react";

export const menuVariants: Variants = {
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

export const itemVariants: Variants = {
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
