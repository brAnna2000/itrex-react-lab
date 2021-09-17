import React from 'react';
import { connect } from 'react-redux';
import { Box, TextField } from '@material-ui/core';
import { findData } from '../../ducks/finder';
import {
    showMakeColumn, showModelColumn, showYearColumn, showPowerColumn, showPriceColumn,
    hideMakeColumn, hideModelColumn, hideYearColumn, hidePowerColumn, hidePriceColumn
} from '../../ducks/checkboxes';
import Pagination from '../Pagination'
import { Checkbox } from '@material-ui/core';
import text from '../Column';

class Menu extends React.Component {

    render() {

        const handleColumnCheckBox = (e) => {
            switch (e.target.id) {
                case 'firstName':
                    return e.target.checked ? this.props.hideMakeColumnn() : this.props.showMakeColumnn()
                case 'lastName':
                    return e.target.checked ? this.props.hideModelColumnn() : this.props.showModelColumnn()
                case 'email':
                    return e.target.checked ? this.props.hideYearColumnn() : this.props.showYearColumnn()
                case 'phone':
                    e.target.checked ? this.props.hidePowerColumnn() : this.props.showPowerColumnn()
                case 'state':
                    return e.target.checked ? this.props.hidePriceColumnn() : this.props.showPriceColumnn()
                default:
                    break;
            }
        }
        const { firstName, lastName, phone, state, email } = this.props.checkboxes
        return <>
            <Box
                display='flex'
                flexDirection='column'
                padding='10px'
                borderLeft='1px solid black'>
                <Box>
                    <label
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                        <Checkbox
                            size="small"
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                            id='firstName'
                            onClick={handleColumnCheckBox} />
                        {firstName ? 'Hide' : 'Show'} "First name" column
                    </label>
                </Box>
                <Box>
                    <label>
                        <Checkbox
                            size="small"
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                            id='lastName'
                            onClick={handleColumnCheckBox} />
                        {lastName ? 'Hide' : 'Show'} "Last name" column
                    </label>
                </Box>
                <Box>
                    <label>
                        <Checkbox
                            size="small"
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                            id='email'
                            onClick={handleColumnCheckBox} />
                        {email ? 'Hide' : 'Show'} "Email" column
                    </label>
                </Box>
                <Box>
                    <label>
                        <Checkbox
                            size="small"
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                            id='phone'
                            onClick={handleColumnCheckBox} />
                        {phone ? 'Hide' : 'Show'} "Phone" column
                    </label>
                </Box>
                <Box>
                    <label>
                        <Checkbox
                            size="small"
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                            id='state'
                            onClick={handleColumnCheckBox} />
                        {state ? 'Hide' : 'Show'} "State" column
                    </label>
                </Box>
                <Box
                    marginTop='5px'>
                    {
                        (!Boolean(this.props.find.find_data.length) && this.props.find.find_flag) ?
                            <>
                                <TextField
                                    error
                                    id="outlined-basic"
                                    label="Ошибка"
                                    variant="outlined"
                                    onChange={this.props.findDataAction}
                                />
                                <Box component='span' color='red'>Ничего не найдено, показаны все результаты</Box>
                            </>
                            :
                            <TextField
                                id="outlined-basic"
                                label="Поиск"
                                variant="outlined"
                                onChange={this.props.findDataAction} />
                    }
                </Box>
                <Pagination />
                <Box marginTop='5px' height='120px'>
                {
                        (Object.keys(text).length != 0) ?
                            <>
                                <TextField
                                id="outlined-basic"
                                label={text.idText}
                                variant="outlined"/>
                            </>
                            :
                            <TextField
                                id="outlined-basic"
                                variant="outlined"/>
                    }
                    {/* <TextField
                        id="outlined-basic"
                        // label="Поиск"
                        variant="outlined"/>   */}
                </Box>
            </Box>
        </>
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    findDataAction: (e) => dispatch(findData(e.target.value)),

    showMakeColumnn: () => dispatch(showMakeColumn()),
    showModelColumnn: () => dispatch(showModelColumn()),
    showYearColumnn: () => dispatch(showYearColumn()),
    showPowerColumnn: () => dispatch(showPowerColumn()),
    showPriceColumnn: () => dispatch(showPriceColumn()),

    hideMakeColumnn: () => dispatch(hideMakeColumn()),
    hideModelColumnn: () => dispatch(hideModelColumn()),
    hideYearColumnn: () => dispatch(hideYearColumn()),
    hidePowerColumnn: () => dispatch(hidePowerColumn()),
    hidePriceColumnn: () => dispatch(hidePriceColumn()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
