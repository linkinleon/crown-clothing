import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForOverview } from '../../redux/shop/shop.selector';

import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss';

const CollecitonsOverview = ({ collections }) => (
    <div className="collection">
        {
            collections.map(({ id, ...others }) => (
                <CollectionPreview key={id} {...others} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForOverview
})
export default connect(mapStateToProps)(CollecitonsOverview)