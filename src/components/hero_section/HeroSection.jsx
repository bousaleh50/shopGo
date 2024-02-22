import blackIphone from "../../assets/images/apple_iphone.png";
import "./heroStyle.css";
import appleLogo from "../../assets/images/apple_logo.png";


function HeroSection() {
    return (
        <div className="md:flex md:h-96  md:justify-evenly lg:px-20 md:gap-20 ">
            <div className="bg-black text-white p-4 flex flex-col justify-center gap-4 image_container md:flex-1 ">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 text-lg items-center">
                      <img src={appleLogo} alt="" className="w-10"/>
                      <p>iPhone 14 Series</p>
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-3xl">Up to 10% off Voucher</h1>
                    </div>
                    <div>
                        <a href="">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;