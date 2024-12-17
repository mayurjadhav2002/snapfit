"use client";
import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
	Button,
} from "@nextui-org/react";
import Image from "next/image";
import Logo from "@/components/misc/Logo";
export default function NavbarComponent() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const menuItems = [
		"Join now",
    "Features",
    "How it Works",
    "Advantages"
	];

	return (
		<Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className='sm:hidden'
				/>
				<NavbarBrand>
					<Logo />
				</NavbarBrand>
			</NavbarContent>
{/* 
			<NavbarContent className='hidden  gap-8' justify='center'>
				<NavbarItem>
					<Link color='foreground' href='#Features'>
						Features
					</Link>
				</NavbarItem>
				<NavbarItem >
					<Link color='foreground' href='#'>
						How it Works
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#'>
						Advantages
					</Link>
				</NavbarItem>
			</NavbarContent> */}
			<NavbarContent justify='end'>
				<NavbarItem>
					<button href='#' className='button'>
						<span className='button__icon-wrapper'>
							<svg
								viewBox='0 0 14 15'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='button__icon-svg'
								width='10'
							>
								<path
									d='M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z'
									fill='currentColor'
								></path>
							</svg>

							<svg
								viewBox='0 0 14 15'
								fill='none'
								width='10'
								xmlns='http://www.w3.org/2000/svg'
								className='button__icon-svg button__icon-svg--copy'
							>
								<path
									d='M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z'
									fill='currentColor'
								></path>
							</svg>
						</span>
						Join now
					</button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							className='w-full'
							color={
								index === 2
									? "primary"
									: index === menuItems.length - 1
									? "danger"
									: "foreground"
							}
							href='#'
							size='lg'
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
