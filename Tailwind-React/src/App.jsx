
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import CardsBody from './components/CardsBody'
import Footer from './components/Footer'
function App() {


  return (
    <>
<NavBar />
<div className='align-middle border border-slate-900 p-10 ' >
<Header />

<h2 className='pt-5 font-semibold'>Top Catigorys of The Month</h2>
<hr />  

<div className=' grid grid-cols-3 gap-3 w-full pt-5'>
 <CardsBody src="https://nouthemes.net/html/martfury/img/categories/shop/5.jpg" pargraph="Electronics
" pargraph1="TV Televisions
" pargraph2="Air Conditioners
" pargraph3="Washing Machines
" pargraph4="Audio & Theaters
" pargraph5="Office Electronics" /> 
 <CardsBody src="https://nouthemes.net/html/martfury/img/categories/shop/1.jpg" pargraph="Clothings
" pargraph1="Womens
" pargraph2="Mens
" pargraph3="Bags & Backpacks
" pargraph4="Accessories
"  /> 
 <CardsBody src="https://nouthemes.net/html/martfury/img/categories/shop/9.jpg" pargraph="Computers 
" pargraph1="Desktop PC
" pargraph2="Laptop
" pargraph3="PC Gaming
" pargraph4="Storage & Memory
" pargraph5="PC Components  " /> 

 <CardsBody src="https://nouthemes.net/html/martfury/img/categories/shop/2.jpg" pargraph="Home & Kitchen
" pargraph1="Funitures
" pargraph2="Air Conditioners
" pargraph3="Decor
" pargraph4="Cookwares
" pargraph5="Utensil & Gadgets"
pargraph6="Garden Tools" /> 
 <CardsBody src="https://nouthemes.net/html/martfury/img/categories/shop/10.jpg" pargraph="Healthy & Beauty
" pargraph1="Makeup
" pargraph2="Skin Care
" pargraph3="Hair Care
" pargraph4="Tools & Equipments
" pargraph5="Perfurmes" /> 
 <CardsBody src="https://nouthemes.net/html/martfury/img/categories/shop/6.jpg" pargraph="Jewelry & Watch
" pargraph1="Pendant
" pargraph2="Necklace
" pargraph3="Watch
" pargraph4="Bracelets
" pargraph5="Accessories" /> 
  

 
  
</div>

<Footer />

</div>

    </>
  )
}

export default App
