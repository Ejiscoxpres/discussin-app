import Link from "next/link";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
   

} from '@nextui-org/react';
import HeaderAuth from "@/components/header-auth";

export default  function Header() {
    return (
        <Navbar className="shadow mb-4">
            <NavbarBrand>
                <Link href="/" className="font-bold">Discussion</Link>
            </NavbarBrand>

            <NavbarContent justify="center">

                <NavbarItem>
                    <Input />
                </NavbarItem>

            </NavbarContent >


            <NavbarContent justify="end">
               <HeaderAuth />
                </NavbarContent>

        </Navbar>
    );
    
}