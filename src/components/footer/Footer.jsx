function Footer() {
    return (
        <footer className="flex justify-evenly bg-black text-white">
            <div>
                <h1>Shop<span className="text-red-500">Go</span></h1>
                <h2>Subscribe</h2>
                <h3>Get 10% off your first order</h3>
                <form action="">
                    <input type="email" placeholder="Enter your email"/>

                </form>
            </div>
            <div>
                <h1>Support</h1>
                <h2>Grand casablanca,morocco</h2>
                <h3>shopgo@gmail.com</h3>
                <h3>0523423424</h3>
            </div>
            <div>
                <h1>Account</h1>
                <h2><a href="">My Account</a></h2>
                <h2><a href="">Login/Register</a></h2>
                <h2>Cart</h2>
                <h2>Wishlist</h2>
                <h2>Shop</h2>
            </div>
            <div>
                <h1>Quick Link</h1>
                <h2>Privacy Policy</h2>
                <h2>Terms Of Use</h2>
                <h2>FAQ</h2>
                <h2>Contact</h2>
            </div>
            <div>
                <h1>Download App</h1>
                <p>Save $3 with App New User Only</p>
                <div>
                    <p></p>
                    <div>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;