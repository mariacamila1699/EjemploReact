import React from 'react'
import { Container, Section } from 'react-bulma-components'


const Header = () => {

    const style = {

        enlace: {

            margin: 0,
            border: 0,
            maxwidth: 965,

        }

    };

    return (
        <Section>
            <Container>

                <section class="section">
                    <div class="container">
                        <h3 class="title has-text-centered is-size-4">Listar Productos</h3>
                        <div class="columns mt-5 is-8 is-variable">
                            <div class="columns mt-5 is-8 is-variable">
                                <div class="column is-4-tablet is-3-desktop">
                                    <div class="card">
                                        <div class="card-image has-text-centered px-6">
                                            <img src="https://www.motor.com.co/files/article_multimedia/uploads/2018/07/19/5b50eafc9e808.jpeg" alt="Placeholder image" ></img>
                                        </div>
                                        <div class="card-content">
                                            <p>$50.000.000</p>
                                            <p class="title is-size-5">Camioneta 2020</p>
                                        </div>
                                        <footer class="card-footer">
                                            <p class="card-footer-item">
                                                <a href="" class="has-text-grey">View</a>
                                            </p>
                                        </footer>
                                    </div>
                                </div>
                                <div class="column is-4-tablet is-3-desktop">
                                    <div class="card">
                                        <div class="card-image has-text-centered px-6">
                                            <img src="https://www.comparaonline.com.co/blog-statics/co/uploads/2020/03/BMW-estuvo-entre-las-cinco-marcas-que-m%C3%A1s-carros-de-lujo-vendi%C3%B3-en-2019.jpg" alt="Placeholder image" ></img>
                                        </div>
                                        <div class="card-content">
                                            <p>$90.000.000</p>
                                            <p class="title is-size-5">Deportivo 2020</p>
                                        </div>
                                        <footer class="card-footer">
                                            <p class="card-footer-item">
                                                <a href="" class="has-text-grey">View</a>
                                            </p>
                                        </footer>
                                    </div>
                                </div>
                                <div class="column is-4-tablet is-3-desktop">
                                    <div class="card">
                                        <div class="card-image has-text-centered px-6">
                                            <img src="https://www.coches.com/fotos_historicas/ford/EcoSport-St-Line-2017/med_ford_ecosport-st-line-2017_r14.jpg" alt="Placeholder image" ></img>
                                        </div>
                                        <div class="card-content">
                                            <p>$100.000.000</p>
                                            <p class="title is-size-5">Ford 2020</p>
                                        </div>
                                        <footer class="card-footer">
                                            <p class="card-footer-item">
                                                <a href="" class="has-text-grey">View</a>
                                            </p>
                                        </footer>
                                    </div>
                                </div>
                                <div class="column is-4-tablet is-3-desktop">
                                    <div class="card">
                                        <div class="card-image has-text-centered px-6">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPutHC36SgzbLnAIiFYtjdURdRC-_ue5vFmyjFlve-Z8xXzUMIDOjJGqLyVVv0z4TQDr0&usqp=CAU" alt="Placeholder image" ></img>
                                        </div>
                                        <div class="card-content">
                                            <p>$80.000.000</p>
                                            <p class="title is-size-5">Mustang 2021</p>
                                        </div>
                                        <footer class="card-footer">
                                            <p class="card-footer-item">
                                                <a href="" class="has-text-grey">View</a>
                                            </p>
                                        </footer>
                                    </div>
                                </div>
                                

                            </div>

                        </div>



                    </div>
                </section>


            </Container>
        </Section>
    )
}

export default Header