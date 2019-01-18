import React, { Component } from 'react'

class LocationList extends Component {
    render() {
        // {console.log(this.props.employees)}
    //    console.log(this.props.locations)
        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                    <section key={location.id}>
                        <h1>{location.name}</h1>
                        <p>{location.address}</p>
                    </section>
                )
            }
            </section>
        )
    }
}
export default LocationList