import React, { Component } from 'react'

const defaultState = {
    name: "",
    pEmail: "",
    sDate: "",
    nameError: "",
    pEmailError: "",
    sDateError: ""
}

export class Meeting extends Component {
    userData ;
    constructor(props) {
        super(props)
        console.log(this.props, "props")
        this.state = defaultState
    }

    handlenameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handlepEmailChange = (event) => {
        this.setState({
            pEmail: event.target.value
        })
    }

    handlesDateChange = (event) => {
        this.setState({
            sDate: event.target.value
        })
    }

    validate = () => {
        let nameError = ""
        let sDateError = ""
        let pEmailError = ""
        if (!this.state.name) {
            nameError = "Name is required"
        }
        if (!this.state.sDate) {
            sDateError = "Schedule date is required"
        }
        if (!this.state.pEmail) {
            pEmailError = "Email is required"
        }
        if (nameError || sDateError || pEmailError) {
            this.setState({
                nameError, sDateError, pEmailError
            })
            return false
        }
        return true
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(defaultState)
        }
    }

    //React Life Cycle
    // componentDidMount() {
    //     this.userData = JSON.parse(localStorage.getItem('user'));

    //     if(localStorage.getItem('user')){
    //         this.setState({
    //             name: this.userData.name,
    //             pEmail: this.userData.pEmail,
    //             sDate: this.userData.sDate
    //         })
    //     }else{
    //         this.setState({
    //             name: "",
    //             pEmail: "",
    //             sDate: ""
    //         })
    //     }
    // }

    // componentWillUpdate(nextProps, nextState) {
    //     localStorage.setItem('user', JSON.stringify(nextState))
    // }

    render() {
        return (
            <div className="container">
                <div className="col-md-6 offset-3 mt-4">
                    <div className="card card-body">
                        <form onSubmit={this.handleSubmit}>
                            <h2><u>Schedule Meeting Form</u></h2>
                            <div className="form-group">
                                <label>Participant Name</label>
                                <input type="text" name="uname" id="uname" placeholder="Participants Name" className="form-control" value={this.state.name} onChange={this.handlenameChange} />
                                <div style={{ color: "red", fontSize: "10px" }}>{this.state.nameError}</div>
                            </div>
                            <div className="form-group">
                                <label>Participant Email</label>
                                <input type="email" name="email" id="email" placeholder="Participants Email" className="form-control" value={this.state.pEmail} onChange={this.handlepEmailChange} />
                                <div style={{ color: "red", fontSize: "10px" }}>{this.state.pEmailError}</div>
                            </div>
                            <div className="form-group">
                                <label>Schedule Date</label>
                                <input type="date" name="sdate" id="sdate" placeholder="Schedule Date" className="form-control" value={this.state.sDate} onChange={this.handlesDateChange} />
                                <div style={{ color: "red", fontSize: "10px" }}>{this.state.sDateError}</div>
                            </div>
                            <button type="submit"  disabled={
        this.state.uname === "" || this.state.pEmail === "" || this.state.sDate === "" ? true : false
    } className="btn btn-primary">Save</button>
                        </form>
                    </div>

                </div> <br />
                <div className="table-responsive">
                    <h2> <u>Details</u></h2>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Sl.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Scedule Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{this.state.name}</td>
                            <td>{this.state.pEmail}</td>
                            <td>{this.state.sDate}</td>
                        </tr>

                    </tbody>
                </table>
                </div>
            </div>

        )
    }
}

export default Meeting
