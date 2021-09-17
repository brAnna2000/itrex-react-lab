import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../redux/actions';
import Column from '../Column'
import Menu from '../Menu';
import { Sort } from '../Sort'
import { titles } from './config';
import { Box } from '@material-ui/core';

class DataList extends React.Component {

    componentDidMount() {
        this.props.getDataAction();
    }

    render() {

        const data = Boolean(this.props.find.find_data.length) ?
            Sort(this.props, this.props.find.find_data.slice(this.props.pagination.indexOfFirst, this.props.pagination.indexOfLast)) :
            Sort(this.props, this.props.cars.data.slice(this.props.pagination.indexOfFirst, this.props.pagination.indexOfLast))
        return <>
            <Box
                padding='5px'
            >
                <Box
                    border={1}
                    display='flex'
                    alignItems='baseline'
                    minWidth='690px'>
                    <Column
                        title={titles.id}
                        data={data.map(x => x.id)}
                        keys={data.map(x => x.id)} />
                    {
                        this.props.checkboxes.firstName &&
                        <Column
                            title={titles.firstName}
                            data={data.map(x => x.firstName)}
                            keys={data.map(x => x.id)}
                        />
                    }
                    {this.props.checkboxes.lastName &&
                        <Column
                            title={titles.lastName}
                            data={data.map(x => x.lastName)}
                            keys={data.map(x => x.id)} />
                    }
                    {
                        this.props.checkboxes.email &&
                        <Column title={titles.email}
                            data={data.map(x => x.email)}
                            keys={data.map(x => x.id)}
                        />
                    }
                    {
                        this.props.checkboxes.phone &&
                        <Column
                            title={titles.phone}
                            data={data.map(x => x.phone)}
                            keys={data.map(x => x.id)} />
                    }
                    {
                        this.props.checkboxes.state &&
                        <Column
                            title={titles.state}
                            data={data.map(x => x.adress.state)}
                            keys={data.map(x => x.id)} />
                    }
                </Box>
            </Box>
            <Menu />
        </>
    }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    getDataAction: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataList);
