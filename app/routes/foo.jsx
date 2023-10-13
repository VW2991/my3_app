import { Outlet } from "@remix-run/react";

export default function foo() {
    return <div style={{width: 200, height: 200, background: "Blue"}}>
        <Outlet/>
    </div>;
}
