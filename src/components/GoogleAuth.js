import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut }  from '../actions';


class GoogleAuth extends React.Component {
    // state = { isSignedIn: null }; //was removed

    componentDidMount() {
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: '1042279008339-rbmvk9c5edmq5r8mv4h4cg1kk20h0ddg.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get()); //gives true or false
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = isSignedIn => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();

    };

    onSignOutClick = () => {
        this.auth.signOut();

    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) { //state turned into props
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Signed Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui green google button">
                    <i className="google icon" />
                    Sign In With Google
                </button>
            )
        }
    };


    render() {
        return <div> {this.renderAuthButton()} </div>;
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

//Client ID 1042279008339-rbmvk9c5edmq5r8mv4h4cg1kk20h0ddg.apps.googleusercontent.com