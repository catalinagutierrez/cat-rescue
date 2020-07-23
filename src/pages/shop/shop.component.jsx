import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPage}
        />
    </div>
);

export default ShopPage;

// CODE FOR READING LOCAL FOLDER DATA
// class ShopPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             collections: SHOP_DATA
//         }
//     }

//     render() {
//         const {collections} = this.state;
//         return (<div className='shop-page'>
//             {
//                 collections.map(({id, ...otherCollectionProps}) => (
//                     <CollectionPreview key={id} {...otherCollectionProps} />
//                 ))
//             }
//         </div>);
//     }
// }

// export default ShopPage;
