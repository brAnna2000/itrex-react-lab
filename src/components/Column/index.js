import { connect } from 'react-redux';
import {
    sortAscYearColumn, sortAscPriceColumn, sortAscPowerColumn, sortAscMakeColumn, sortAscModelColumn,
    sortDescYearColumn, sortDescPriceColumn, sortDescPowerColumn, sortDescMakeColumn, sortDescModelColumn,
} from '../../ducks/sort'
import { titles } from '../DataList/config';
import { Grid, Box, IconButton } from '@material-ui/core';

const Column = (props) => {
    const column_sort = () => {
        switch (props.title) {
            case titles.email:
                return [props.sortAscYearColumn, props.sortDescYearColumn]
            case titles.state:
                return [props.sortAscPriceColumn, props.sortDescPriceColumn]
            case titles.phone:
                return [props.sortAscPowerColumn, props.sortDescPowerColumn]
            case titles.firstName:
                return [props.sortAscMakeColumn, props.sortDescMakeColumn]
            case titles.lastName:
                return [props.sortAscModelColumn, props.sortDescModelColumn]
            default:
                break;
        }
    }
    const display = (i) => {
        const idText = props.cars.data[i].id;
        const firstNameText = props.cars.data[i].firstName;
        const lastNameText = props.cars.data[i].lastName;
        const descriptionText = props.cars.data[i].description;
        const streetAddressText = props.cars.data[i].adress.streetAddress;
        const cityText = props.cars.data[i].adress.city;
        const stateText = props.cars.data[i].adress.state;
        const zipText = props.cars.data[i].adress.zip;
        
        return text = {
            idText: idText, 
            firstNameText: firstNameText, 
            lastNameText: lastNameText, 
            descriptionText: descriptionText, 
            streetAddressText: streetAddressText, 
            cityText: cityText, 
            stateText: stateText, 
            zipText: zipText
        };
        // alert(props.cars.data[i].id + ' ' + props.cars.data[i].firstName + ' ' + props.cars.data[i].lastName + ' ' + props.cars.data[i].description + ' ' + props.cars.data[i].adress.streetAddress + ' ' + props.cars.data[i].adress.city + ' ' + props.cars.data[i].adress.state + ' ' + props.cars.data[i].adress.zip)
    }
    export const text;
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
            <Box
                border={1}
                width='100%'
                height='40px'
                display='flex'
                justifyContent='center'
                alignItems='center'>
                <Box
                    component='span'>
                    {props.title}
                </Box>
                {props.title !== 'id' ?
                    <Box
                        margin='0  5px 0 10px'
                        display='flex'
                        flexDirection='column'>
                        <IconButton
                            size="small"
                            style={{ fontSize: '10px' }}
                            onClick={column_sort()[0]}>
                            ⋀
                            </IconButton>
                        <IconButton
                            size="small"
                            style={{ fontSize: '10px' }}
                            onClick={column_sort()[1]}>
                            ⋁
                            </IconButton>
                    </Box>
                    : ''
                }
            </Box>
            {
                props.data.map((x, i) =>
                    <Box
                        border={1}
                        width='100%'
                        height='35px'
                        padding='5px 0'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        textAlign='center'
                        key={props.keys[i]}
                        onClick={function() {display(i)}}>
                        {x}
                    </Box>)
            }
        </Grid>
    )
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({

    sortAscYearColumn: () => dispatch(sortAscYearColumn()),
    sortAscPriceColumn: () => dispatch(sortAscPriceColumn()),
    sortAscPowerColumn: () => dispatch(sortAscPowerColumn()),
    sortAscMakeColumn: () => dispatch(sortAscMakeColumn()),
    sortAscModelColumn: () => dispatch(sortAscModelColumn()),

    sortDescYearColumn: () => dispatch(sortDescYearColumn()),
    sortDescPriceColumn: () => dispatch(sortDescPriceColumn()),
    sortDescPowerColumn: () => dispatch(sortDescPowerColumn()),
    sortDescMakeColumn: () => dispatch(sortDescMakeColumn()),
    sortDescModelColumn: () => dispatch(sortDescModelColumn())

});

export default connect(mapStateToProps, mapDispatchToProps)(Column);

