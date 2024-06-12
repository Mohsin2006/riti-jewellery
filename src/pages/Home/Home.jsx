import Hero from '../../components/Hero/Hero';
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory"
import NewArrival from '../../components/NewArrival/NewArrival'
import TopSeller from '../../components/TopSeller/TopSeller'
import Header from '../../components/Header/Header'
const Home = () => {
  return (
    <div>
      <Hero/>
      <NewArrival/>
      <ShopByCategory/>
      <TopSeller/>
      <Header/>
    </div>
  )
}

export default Home
