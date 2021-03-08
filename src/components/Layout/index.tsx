import { HeaderMenu } from "./HeadMenu";
import { Menu } from "./Menu";

export function Layout({children}) {
    return (
    <>
    <Menu/>
    <HeaderMenu/>
    {children} 
    </>)
}