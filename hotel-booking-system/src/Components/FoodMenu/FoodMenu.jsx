import React from "react";
import roomsCSS from './../FoodMenu/FoodMenu.module.css'
import { Link, useNavigate } from 'react-router-dom';


function FoodMenu(){
   return(
           <div className={`${roomsCSS.Rooms_container} section`}>
               <small className="section_Heading">DELISIOUS FOODS</small>
               <h2 className="section_Title">Our Best<span>Menu</span></h2>

               <div className={roomsCSS.cards}>
                    <div className={roomsCSS.Card_Container}>
                        <div className={roomsCSS.card}>
                            <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front1}`}>
                                <button>APPETIZERS & SOUPS</button>
                            </div>
                            <div className={roomsCSS.Card_Back}>
                                {/* <div className={roomsCSS.price}>
                                    <p>APPETIZERS & SOUPS</p>
                                </div> */}
                                <div className={roomsCSS.Card_content}>
                                    <p> <a href="#">- Egg Roll</a> <span>..........Rs.300</span></p> 
                                    <p> <a href="#">- Onion Cake</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Spring Rolls </a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Chicken wings </a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Hot & Sour Soup </a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Egg Drop Soup</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Chicken Soup </a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- More... </a></p>
                                </div>
                                {/* <div className={roomsCSS.BookNow}>
                                    <button>Book Now</button>
                                    <i className="ri-arrow-right-line"></i>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className={roomsCSS.Card_Container}>
                        <div className={roomsCSS.card}>
                            <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front2}`}>
                                <button>FRIED RICE</button>
                            </div>
                            <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back2}`}>
                                {/* <div className={roomsCSS.price}>
                                    <p>$120/N</p>
                                </div> */}
                                <div className={roomsCSS.Card_content}>
                                    <p> <a href="#">- Chicken Fried Rice </a> <span>..........Rs.1400</span></p> 
                                    <p> <a href="#">- Vegetable Fried Rice </a><span>..........Rs.1200</span></p>
                                    <p> <a href="#">- Seafood Fried Rice </a><span>..........Rs.1300</span></p>
                                    <p> <a href="#">- Meat Fried Rice </a><span>..........Rs.1200</span></p>
                                    <p> <a href="#">- Sausage Fried Rice </a><span>..........Rs.1200</span></p>
                                    <p> <a href="#">- Pork Fried Rice </a><span>..........Rs.1300</span></p>
                                    <p> <a href="#">- Mixed Fried Rice </a><span>..........Rs.1500</span></p>
                                    <p> <a href="#">- More... </a></p>
                                </div>
                                {/* <div className={roomsCSS.BookNow}>
                                    <button>Book Now</button>
                                    <i className="ri-arrow-right-line"></i>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className={roomsCSS.Card_Container}>
                        <div className={roomsCSS.card}>
                            <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front3}`}>
                                <button>KOTTU</button>
                            </div>
                            <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back3}`}>
                                {/* <div className={roomsCSS.price}>
                                    <p>$150/N</p>
                                </div> */}
                                <div className={roomsCSS.Card_content}>
                                    <p> <a href="#">- Veggie Kottu</a> <span>..........Rs.300</span></p> 
                                    <p> <a href="#">- Egg Kottu</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Fish Kottu</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Chicken Kottu</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Mixed Kottu</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Prawn Kottu</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Cheese Kottu</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- More... </a></p>
                                </div>
                                {/* <div className={roomsCSS.BookNow}>
                                    <button>Book Now</button>
                                    <i className="ri-arrow-right-line"></i>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className={roomsCSS.Card_Container}>
                        <div className={roomsCSS.card}>
                            <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front4}`}>
                                <button>NOODLES</button>
                            </div>
                            <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back4}`}>
                                {/* <div className={roomsCSS.price}>
                                    <p>$120/N</p>
                                </div> */}
                                <div className={roomsCSS.Card_content}>
                                    <p> <a href="#">- Chicken Noodles</a> <span>..........Rs.300</span></p> 
                                    <p> <a href="#">- Beef Noodles </a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Veggie Noodles </a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- cold Noodles </a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Dan Dan Noodles </a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Spicy Noodles </a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Pork Noodles </a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- More... </a></p>
                                </div>
                                {/* <div className={roomsCSS.BookNow}>
                                    <button>Book Now</button>
                                    <i className="ri-arrow-right-line"></i>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className={roomsCSS.Card_Container}>
                        <div className={roomsCSS.card}>
                            <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front5}`}>
                                <button>Juice</button>
                            </div>
                            <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back5}`}>
                                {/* <div className={roomsCSS.price}>
                                    <p>$220/N</p>
                                </div> */}
                                <div className={roomsCSS.Card_content}>
                                    <p> <a href="#">- Classic</a> <span>..........Rs.300</span></p> 
                                    <p> <a href="#">- Strawberry</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Lime</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Raspberry</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Bluberry</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Pineapple</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Mix </a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- More... </a></p>
                                </div>
                                {/* <div className={roomsCSS.BookNow}>
                                    <button>Book Now</button>
                                    <i className="ri-arrow-right-line"></i>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className={roomsCSS.Card_Container}>
                        <div className={roomsCSS.card}>
                            <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front6}`}>
                                <button>Other</button>
                            </div>
                            <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back6}`}>
                                {/* <div className={roomsCSS.price}>
                                    <p>$190/N</p>
                                </div> */}
                                <div className={roomsCSS.Card_content}>
                                    <p> <a href="#">- Indiappa</a> <span>..........Rs.300</span></p> 
                                    <p> <a href="#">- Roti</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Burgers</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Raspberry</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Bun</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- wade & Parata</a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- Curries </a><span>..........Rs.300</span></p>
                                    <p> <a href="#">- More... </a></p>
                                </div>
                                {/* <div className={roomsCSS.BookNow}>
                                    <button>Book Now</button>
                                    <i className="ri-arrow-right-line"></i>
                                </div> */}
                            </div>
                        </div>
                    </div>

               </div>
            </div>
       )
}

export default FoodMenu