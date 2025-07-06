import React from 'react';

function Menu() {
    return (
        <section id = "menu">
        <p className="heading">MENU</p>

        <div className="cardcontainer">
            <p className="subheading">Appetizers</p>
            <div className="cardgrid">

                <div className="card">
                    <img src = "https://olo-images-live.imgix.net/74/74e21f3b96954555a65e1dffcefe3478.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=da2d10aeed86c9340f9fb6eeddf09e78"
                    alt = "Spicy Tuna Crispy Rice" />
                    <div className = "cardcontent">
                        <div className="cardtitle">Spicy Tuna Crispy Rice</div>
                        <p>Sashimi grade tuna served on fried rice with a spicy dressing and sesame seeds.</p>
                        <div className = "cardbottom">
                            <span className="price">$8</span>
                            <button className = "addbutton" data-name="Spicy Tuna Crispy Rice" data-price="8">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src = "https://hips.hearstapps.com/hmg-prod/images/del049924-peanut-chicken-wonton-cups-web-061-rl-hi-res-1-index-66296f2c33bdc.jpg"
                    alt = "Asian Wonton Cups" />
                    <div className = "cardcontent">
                        <div className="cardtitle">Asian Wonton Cups</div>
                        <p>Wontons shaped as little bowls containing vegetables, sauces, and your choice of meat or seafood.</p>
                        <div className = "cardbottom">
                            <span className="price">$10</span>
                            <button className = "addbutton" data-name="Asian Wonton Cups" data-price="10">Add to Cart</button>
                        </div>
                    </div>
                </div>               

            </div>
        </div>

        <div className="cardcontainer">
            <p className="subheading">Main Courses</p>
            <div className="cardgrid">

                <div className="card">
                    <img src = "https://s.abcnews.com/images/GMA/Delish-Chicken-Pad-Thai-Nachos-Still001_hpMain_16x9_992.jpg" 
                    alt = "Pad Thai Nachos" />
                    <div className = "cardcontent">
                        <div className="cardtitle">Pad Thai Nachos</div>
                        <p>Tortilla chips topped with chicken, toppings, cheese, and a special Pad-thai sauce.</p>
                        <div className = "cardbottom">
                            <span className="price">$15</span>
                            <button className = "addbutton" data-name="Pad Thai Nachos" data-price="15">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src = "https://www.catelli.ca/wp-content/uploads/2019/12/asiya-baig-butter-chicken-lasagna.jpg"
                    alt = "Butter Chicken Lasagna" />
                    <div className = "cardcontent">
                        <div className="cardtitle">Butter Chicken Lasagna</div>
                        <p>A fusion dish that combines lasagna with the popular Indian Butter Chicken.</p>
                        <div className = "cardbottom">
                            <span className="price">$18</span>
                            <button className = "addbutton" data-name="Butter Chicken Lasagna" data-price="18">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                <img src = "https://hips.hearstapps.com/hmg-prod/images/delish-211105-black-pepper-chicken-006-ab-web-1637207545.jpg?crop=0.8886666666666666xw:1xh;center,top&resize=1200:*"
                    alt = "Black Pepper Chicken" />
                    <div className = "cardcontent">
                        <div className="cardtitle">Black Pepper Chicken</div>
                        <p>Stir-fried chicken served over rice topped with a black pepper sauce.</p>
                        <div className = "cardbottom">
                            <span className="price">$16</span>
                            <button className = "addbutton" data-name="Black Pepper Chicken" data-price="16">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src = "https://www.mygfguide.com/wp-content/uploads/2020/02/tacos-close-up-web-1024x768.jpg"
                    alt = "Miso Glazed Salmon Tacos" />
                    <div className = "cardcontent">
                        <div className="cardtitle">Miso Glazed Salmon Tacos</div>
                        <p>Warm tortillas topped with salmon, miso slaw, and coated with a miso paste.</p>
                        <div className = "cardbottom">
                            <span className="price">$15</span>
                            <button className = "addbutton" data-name="Miso Glazed Salmon Tacos" data-price="15">Add to Cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="cardcontainer">
            <p className="subheading">Desserts</p>
            <div className="cardgrid">

                <div className="card">
                    <img src = "https://thumbs.dreamstime.com/b/delicious-matcha-green-tea-cheesecake-sitting-plate-cafe-decorated-whipped-cream-chocolate-sprinkles-served-348186585.jpg"
                    alt = "Matcha Cheesecake" />
                    <div className = "cardcontent">
                        <div className="cardtitle">Matcha Cheesecake</div>
                        <p>A creamy matcha green tea cheesecake.</p>
                        <div className = "cardbottom">
                            <span className="price">$4</span>
                            <button className = "addbutton" data-name="Matcha Cheesecake" data-price="4">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src = "https://cdn.shopify.com/s/files/1/0424/5923/4471/files/Thai_Tea_Creme_Brulee_-_2.jpg?v=1736284211"
                    alt = "Thai Tea Creme Brulee" />
                    <div className = "cardcontent">
                        <div className="cardtitle">Thai Tea Crème Brûlée</div>
                        <p>A creamy custard that combines the flavor of crème brûlée and Thai tea.</p>
                        <div className = "cardbottom">
                            <span className="price">$5</span>
                            <button className = "addbutton" data-name="Thai Tea Crème Brûlée" data-price="5">Add to Cart</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <div className="cardcontainer">
            <p className="subheading">Drinks</p>
            <div className="cardgrid">

                <div className="card">
                    <img src = "https://www.hotforfoodblog.com/wp-content/uploads/2014/07/thecoconutmatchasmoothie_hotforfoodblog_filtered2-scaled.jpg"
                        alt = "Coconut Matcha Smoothie" />
                    <div className = "cardcontent">
                        <div className="cardtitle">Coconut Matcha Smoothie</div>
                        <p>A delicious creamy drink combining the taste of coconut milk and matcha powder.</p>
                        <div className = "cardbottom">
                            <span className="price">$3</span>
                            <button className = "addbutton" data-name="Coconut Matcha Smoothie" data-price="3">Add to Cart</button>
                        </div>
                    </div>
                </div>
                
                <div className="card">
                    <img src = "https://images.squarespace-cdn.com/content/v1/55971dafe4b0af241ed11246/1450279266868-CLZHFOLLUACNSWBFP78Q/image-asset.jpeg"
                    alt = "Lychee Ginger Mint Fizz" />
                    <div className = "cardcontent">
                        <div className="cardtitle">Lychee Ginger Mint Fizz</div>
                        <p>A fizzy and refreshing drink combining the taste of lychee, ginger, and mint.</p>
                        <div className = "cardbottom">
                            <span className="price">$3</span>
                            <button className = "addbutton" data-name="Lychee Ginger Mint Fizz" data-price="3">Add to Cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        </section>
    );
}

export default Menu;