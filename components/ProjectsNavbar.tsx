import { FunctionComponent } from "react"
import { Category } from "../type"

export const NavItem: FunctionComponent<{value:Category | 'all', handlerFilterCategory:Function}>= ({value, handlerFilterCategory}) => {
    return (
        <li className="cursor-pointer hover:text-green" onClick={() =>handlerFilterCategory(value)}>
            {value}
        </li>
    )
}

const ProjectsNavbar: FunctionComponent<{handlerFilterCategory:Function}> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
            <NavItem value="all" {...props}/>
            <NavItem value="react" {...props}/>
            <NavItem value="redux" {...props}/>
            <NavItem value="JavaScript" {...props}/>
            <NavItem value="node" {...props}/>
        </div>
    )
}

export default ProjectsNavbar
