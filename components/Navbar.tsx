import { FunctionComponent, useEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"

const NavItem: FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
}> = ({ activeItem, name, route, setActiveItem }) => {
    return (
        activeItem !== name ? (
            <Link href={route}>
                <a>
                    <span 
                        onClick={() => setActiveItem(name)}
                        className="hover:text-green">
                        {name}
                    </span>
                </a>
            </Link>
        ) : null
    )
}

const Navbar = () => {

    const [activeItem, setActiveItem] = useState<string>('')

    const { pathname } = useRouter()


    useEffect(() => {
        if (pathname === '/') setActiveItem('About')
        if (pathname === '/project') setActiveItem('Project')
        if (pathname === '/resume') setActiveItem('Resume')
        if (pathname === '/contact') setActiveItem('Contact')
    }, [])

    return (
        <div className="flex justify-between px-5 py-3 my-3">
            <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">
                {activeItem}
            </span>
            <div className="flex space-x-3 text-lg text-red-400">
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route='/' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Project" route='/project' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route='/resume' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Contact" route='/contact' />
            </div>
        </div>
    )
}

export default Navbar
