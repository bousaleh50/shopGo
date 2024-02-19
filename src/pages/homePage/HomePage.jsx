import BestSellingPRoducts from "../../components/bestSellingProducts/BestSellingProducts";
import CategorieChoice from "../../components/categorieShoice/CategorieChoice";
import CategoriesBar from "../../components/categories/CategoriesBar";
import HeroSection from "../../components/hero_section/HeroSection";
import NewArrival from "../../components/newArrival/NewArrival";
import Services from "../../components/services/Services";
import TodayProducts from "../../components/todayProducts/TodayProduts";



function Home() {
    return (
        <div className="mt-10 flex flex-col gap-10  md:mt-20">
            <HeroSection/>
            <TodayProducts/>
            <CategoriesBar/>
            <BestSellingPRoducts/>
            <CategorieChoice/>
            <NewArrival/>
            <Services/>
        </div>
    );
}

export default Home;