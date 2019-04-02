import React from 'react';
import { connect } from 'react-redux';
import { createStream } from "../../actions"; //calls an action creator
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    // renderError({error, touched}){
    //     if(touched && error) {
    //         return (
    //             <div className="ui error message">
    //                 <div className="header">{error}</div>
    //             </div>
    //         )
    //     }
    // }
    //
    //
    // renderInput = ({input, label, meta}) => {
    //     return (
    //         <div className="field error">
    //             <label>{label}</label>
    //             <input {...input} autoComplete="off"/>
    //             {this.renderError(meta)}
    //         </div>
    //         );
    // } // we dont need

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>

        );
    }
}

export default connect(null, { createStream })(StreamCreate);