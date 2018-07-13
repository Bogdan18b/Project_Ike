import React from 'react';
import  { BusinessTypeIndexItem } from './business_type_index_item';

class BusinessType extends React.Component {
  componentDidMount() {
    this.props.requestAllBusinessTypes();
  }

  render() {
    if (this.props.types === undefined) {
      return <p>coming soon...</p>
    }
    const types = this.props.types.map(type => <BusinessTypeIndexItem key={type.id} type={type}/>);
    return (
      <ul className="ike-business-header-nav">
        {types}
      </ul>
    )
  }
}

export default BusinessType;
