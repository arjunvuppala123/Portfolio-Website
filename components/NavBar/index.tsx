import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <ul className="flex space-x-4">
                    <li className="text-white">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="text-white">
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li className="text-white">
                        <Link href="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li className="text-white">
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
