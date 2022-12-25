import Banner from "./banner/Banner"
import About from "./about/About"
import Products from "./products/Products"

const Home = (props) => {
    return(
        <>  
            {/* <TestSlider /> */}
            <Banner />
            <About />
            <Products 
                items={props.items} 
                cartItems={props.cartItems} 
                setCartItems={props.setCartItems}
                setSearch={props.setSearch} 
                search={props.search}
                favoritesItems={props.favoritesItems}
                setFavoritesItems={props.setFavoritesItems}
            />
        </>
    )
}

export default Home