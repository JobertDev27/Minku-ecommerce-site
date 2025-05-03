import { Link } from "react-router"

export default function Home() {
    return <div>
        <Link to={"/Store"}>Store</Link>
        <Link to={"/Cart"}>cart</Link>
    </div>
}