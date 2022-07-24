import React, {Component} from 'react'
import Grid from '../common/layout/grid'

class CreditList extends Component {
    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className='table'>
                        <thead>
                            
                        </thead>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList