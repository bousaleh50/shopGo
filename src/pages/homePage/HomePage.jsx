import BestSellingPRoducts from "../../components/bestSellingProducts/BestSellingProducts";
import CategoriesBar from "../../components/categories/CategoriesBar";
import HeroSection from "../../components/hero_section/HeroSection";
import TodayProducts from "../../components/todayProducts/TodayProduts";

function Home() {
    return (
        <div className="mt-10 flex flex-col gap-10 p-10 md:mt-20">
            <HeroSection/>
            <TodayProducts/>
            <CategoriesBar/>
            <BestSellingPRoducts/>
        </div>
    );
}

export default Home;