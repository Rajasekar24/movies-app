import React, {Component} from 'react';
import Button from '@material-ui/core/Button'
import './Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

class Header extends Component{
    constructor()
    {
        super();
        this.state = {
            modalIsOpen: false
        };
    }
    openModelHandler = () =>{
        this.setState({modalIsOpen: true})
    }

    closeModalHandler = () => {
        this.setState({modalIsOpen: false})
    }
    render(){
        return(
            <div>
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <div className="login-button">
                    <Button variant="contained" color="default" onClick={this.openModelHandler}>
                        Login
                    </Button>
                </div>
            </header>
            <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login"
            onRequestClose={this.closeModalHandler}>

            </Modal>
        </div>
        )
    }
}

export default Header;









