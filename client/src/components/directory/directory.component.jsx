import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { selectSections } from '../../redux/directory/directory.selector';
import './directory.styles.scss';
import MenuItem from '../../components/menu-item/menu-item.component';

const Directory = ({sections}) => {
    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps} />
            ))}
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    sections: selectSections
});
export default connect(mapStateToProps)(Directory);