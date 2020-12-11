import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import LoginPage from '../screens/login/LoginPage'
import SignupPage from '../screens/login/SignupPage'
import InicioPage from '../screens/login/InicioPage'
import Feed from '../screens/HomeScreens/Feed'
import noResults from '../screens/HomeScreens/noResults'
import SurchNoResults from '../screens/HomeScreens/SurchNoResults'
import SurchResults from '../screens/HomeScreens/SurchResults'
import Perfil from '../screens/perfil/Perfil'
import EditarCadastro from '../screens/perfil/EditarCadastro'
import EditarEndereco from '../screens/perfil/EditarEndereco'
import EnderecoPage from '../screens/login/EnderecoPage'
import Restaurante from '../screens/restaurante/Restaurante'
import Carrinho from '../screens/carrinho/Carrinho'
import CarrinhoVazio from '../screens/carrinho/CarrinhoVazio'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'



const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={'/login'}>
                    <LoginPage/>
                </Route>

                <Route exact path={'/signup'}>
                    <Header/>
                    <SignupPage/>
                </Route>

                <Route exact path={'/'}>
                    <InicioPage/>
                </Route>  

                <Route exact path={'/endereco'}>
                    <Header/>
                    <EnderecoPage/>
                    <Footer/>
                </Route>
                <Route exact path={'/editar-endereco'}>
                    <Header title="Editar"/>
                    <EditarEndereco/>
                    <Footer/>
                </Route>

                {/*HomeScreens */}

                <Route exact path={'/feed'}>
                    <Header title="FutureEats"/>
                    <Feed/>
                    <Footer/>
                </Route>

                <Route exact path={'/sem-resultado'}>
                    <Header title="Busca"/>
                    <noResults/>
                    <Footer/>
                </Route>

                <Route exact path={'/surch-results'}>
                    <Header title="Busca"/>
                    <SurchNoResults/>
                    <Footer/>
                </Route>

                <Route exact path={'/resultado'}>
                    <Header title="Busca"/>
                    <SurchResults/>
                    <Footer/>
                </Route>

                {/*perfil*/}

                <Route exact path={'/perfil'}>
                    <Header title="Meu Perfil"/>
                    <Perfil/>
                    <Footer/>
                </Route>

                <Route exact path={'/editar-cadastro'}>
                    <Header title="Editar"/>
                    <EditarCadastro/>
                    <Footer/>
                </Route>

               {/*restaurante */}

                <Route exact path={'/resteurante'}>
                    <Header title="Restaurante"/>
                    <Restaurante/>
                    <Footer/>
                </Route>

                {/*carrinho */}

                <Route exact path={'/carrinho'}>
                    <Header title="Meu Carrinho"/>
                    <Carrinho/>
                    <Footer/>
                </Route>

                <Route exact path={'/carrinho-vazio'}>
                    <Header title="Meu Carrinho"/>
                    <CarrinhoVazio/>
                    <Footer/>
                </Route>

                




            </Switch>
        </BrowserRouter>
    )
}

export default Router;