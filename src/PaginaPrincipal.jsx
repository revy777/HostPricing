import React from 'react'
import "./PaginaPrincipal.css"



const PaginaPrincipal = () => {

            return (
                <div class = "wrapper">
                    <header class = "header">
                        <div class = "div-logo">MyServer</div>
                        <nav class = "nav-header">
                            <ul class = "ul-header">
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>Suporte</a></li>
                                <li><a href='#'>Planos</a></li>
                                <li><a href='#'>Contatos</a></li>
                            </ul>



                        </nav>


                    </header>
                    <h1 class = "main-title">Escolha seu plano</h1>

                    <section class = "section-pricing">

                        <div class = "pricing-plan">
                            <h2 class = "title-plan">Essencial</h2>
                            <p><span class = "pricing-plan-price">R$ 3.95</span>/mês</p>
                            <ul class = "ul-pricing">
                                <li>1 Website</li>
                                <li>1GB de Armazenamento</li>
                                <li>10GB de Transferência</li>
                            </ul>
                            <a class = "assine-link" href='#'>Assine já</a>

                        

                            
                        </div>

                        <div class = "pricing-plan"> 
                            <h2 class = "title-plan">Premium</h2>
                                <p><span class = "pricing-plan-price">R$ 7.95</span>/mês</p>
                                <ul class = "ul-pricing">
                                    <li>5 Websites</li>
                                    <li>3GB de Armazenamento</li>
                                    <li>Transferência ilimitada</li>
                                    <li>10 horas de suporte mensais</li>
                                </ul>

                                <a class = "assine-link" href='#'>Assine já</a>
                            
                        </div>
                        <div class = "pricing-plan"> 
                            <h2 class = "title-plan">Gold</h2>
                                <p><span class = "pricing-plan-price">R$ 14.95</span>/mês</p>
                                 <ul class = "ul-pricing">
                                    <li>10 Websites</li>
                                    <li>30GB de Armazenamento</li>
                                    <li>Transferência ilimitada</li>
                                    <li>30 horas de suporte mensais</li>
                                    <li>Email personalizado</li>
                                 </ul>
                                 <a class = "assine-link" href='#'>Assine já</a>


                            
                            
                        </div>
                      

                    </section>

                   

                    


                </div>
            )
}

export default PaginaPrincipal;