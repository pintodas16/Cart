import { useSelector } from "react-redux";
function Navbar({ setAddress }) {
  const products = useSelector((state) => state);
  const handleClick = (pathName) => {
    setAddress(pathName);
  };
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="/#" onClick={() => handleClick("/#")}>
          <p className="title">
            P<span>Cart</span>
          </p>
        </a>

        <div class="flex gap-4">
          <a
            href="#home"
            className="navHome"
            id="lws-home"
            onClick={() => handleClick("#home")}
          >
            {" "}
            Home{" "}
          </a>
          <a
            href="#cart"
            className="navCart"
            id="lws-cart"
            onClick={() => handleClick("#cart")}
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{products.totalQuantity}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
