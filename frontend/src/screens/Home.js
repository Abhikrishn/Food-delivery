import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

import { useEffect, useState } from 'react'

const Home = () => {

    const [search, setSearch] = useState('');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();

        setFoodItem(response[0]);
        setFoodCat(response[1]);
        // console.log(response[0],response[1])
    }

    useEffect(() => {
        loadData()
    }, [])   // iska matlab jo v data h wo load hoke render ho jayega





    return (
        <div>
            <div><Navbar /></div>
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-inner" id='carousel' style={{ objectFit: "contain" }}>

                        <div className='carousel-caption' style={{ zIndex: "10" }}>
                            <div class="d-flex justify-content-center">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                            </div>
                        </div>


                        {/* <div className="carousel-item active">
                            <img src="https://wallpaperaccess.com/full/1316978.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item active">
                            <img src="https://th.bing.com/th/id/OIP.5Qi3KqFZDFjOW1j51N_x0wHaEd?rs=1&pid=ImgDetMain" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item active">
                            <img src="https://th.bing.com/th/id/OIP.jw-URDKmlMzwAukVt-nFxwHaE8?w=1000&h=667&rs=1&pid=ImgDetMain" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://picsum.photos/200/300?burger" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100" alt="..." />
                        </div>

                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900×700/?samosa" className="d-block w-100" alt="..." />
                        </div> */}
                        <div id="carouselExample" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="https://wallpaperaccess.com/full/1316978.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Wallpapers.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="https://images5.alphacoders.com/110/thumb-1920-1106605.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="https://wallpapercave.com/wp/wp3495556.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="https://wallpaperaccess.com/full/1312727.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="https://th.bing.com/th/id/OIP.5Qi3KqFZDFjOW1j51N_x0wHaEd?rs=1&pid=ImgDetMain" class="d-block w-100" alt="..." />
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>


                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='container'>
                {//  use ternary operator for food category----
                    foodCat !== []
                        ? foodCat.map((data) => {
                            return (<div className='row mb-3' >
                                <div key={data._id} className='fs-3 m-3'>
                                    {data.CategoryName}
                                </div>
                                <hr />
                                {//use ternary operator for food item and food category by filter method and then mapped ----
                                    foodItem !== []
                                        ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) &&(item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                        .map(filterItems => {
                                            return (
                                                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                                    <Card foodItem={filterItems}
                                                        options={filterItems.options[0]}
           


                                                    ></Card>
                                                </div>
                                            )
                                        })
                                        : <div>no such items found</div>
                                }
                            </div>
                            )
                        })
                        : ""

                }



            </div>
            <div><Footer /></div>
        </div>
    )
}

export default Home