import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'


export default class ApplicationViews extends Component {
    state = {
        animals: [],
        employees: [],
        locations:[],
        owners:[]
    }

    // Fetch to change state above:
    componentDidMount() {
        const newState = {}
        // Fetching the different arrays in JSON with fetches
        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            //

            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            //

            .then(() => fetch("http://localhost:5002/locations")
            .then(r => r.json()))
            .then(locations => newState.locations = locations)
            //

            .then(() => fetch("http://localhost:5002/locations")
            .then(r => r.json()))
            .then(locations => newState.locations = locations)
            //

            .then(() => fetch("http://localhost:5002/owners")
            .then(r => r.json()))
            .then(owners => newState.owners = owners)
            //

            // Setting new state:
            .then(() => this.setState(newState))
    }


    // Delete animal fetch call
    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        })
      )
    }

    // Delete employee fetch call
    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(e => e.json())
        .then(employees => this.setState({
            employees:employees
        })
      )
    }

    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/owners`))
        .then(e => e.json())
        .then(owners => this.setState({
            owners:owners
        })
      )
    }





    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                {/* <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} /> */}
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees}
                    // adding delete animal function
                    deleteEmployee={this.deleteEmployee}
                    />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners}
                    deleteOwner={this.deleteOwner}/>
                }} />


                {/* Passing delete to AnimalList component */}
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
            </React.Fragment>
        )
    }
}