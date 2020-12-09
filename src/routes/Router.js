import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import LoginPage from '../screens/login/LoginPage'
import SignupPage from '../screens/login/SignupPage'
import InicioPage from '../screens/login/InicioPage'
import EnderecoPage from '../screens/login/EnderecoPage'
import Feed from '../screens/HomeScreens/Feed'
import noResults from '../screens/HomeScreens/noResults'
import SurchNoResults from '../screens/HomeScreens/SurchNoResults'
import SurchResults from '../screens/HomeScreens/SurchResults'
import Perfil from '../screens/perfil/Perfil'
import EditarCadastro from '../screens/perfil/EditarCadastro'
import EditarEndereco from '../screens/perfil/EditarEndereco'
import Restaurante from '../screens/restaurante/Restaurante'
import Carrinho from '../screens/carrinho/Carrinho'
import CarrinhoVazio from '../screens/carrinho/CarrinhoVazio'



const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={'/login'}>
                    <LoginPage/>
                </Route>

                <Route exact path={'/signup'}>
                    <SignupPage/>
                </Route>

                <Route exact path={'/'}>
                    <InicioPage/>
                </Route>  

                <Route exact path={'/endereco'}>
                    <EnderecoPage/>
                </Route>

                {/*HomeScreens */}

                <Route exact path={'/feed'}>
                    <Feed/>
                </Route>

                <Route exact path={'/sem-resultado'}>
                    <noResults/>
                </Route>

                <Route exact path={'/surch-results'}>
                    <SurchNoResults/>
                </Route>

                <Route exact path={'/resultado'}>
                    <SurchResults/>
                </Route>

                {/*perfil*/}

                <Route exact path={'/perfil'}>
                    <Perfil/>
                </Route>

                <Route exact path={'/editar-cadastro'}>
                    <EditarCadastro/>
                </Route>

                <Route exact path={'/editar-endereco'}>
                    <EditarEndereco/>
                </Route>

                {/*restaurante */}

                <Route exact path={'/resteurante'}>
                    <Restaurante/>
                </Route>

                {/*carrinho */}

                <Route exact path={'/carrinho'}>
                    <Carrinho/>
                </Route>

                <Route exact path={'/carrinho-vazio'}>
                    <CarrinhoVazio/>
                </Route>

                




            </Switch>
        </BrowserRouter>
    )
}

export default Router;