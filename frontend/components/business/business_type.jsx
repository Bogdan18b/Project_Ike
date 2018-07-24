import React from 'react';
import  BusinessTypeIndexItem from './business_type_index_item';

class BusinessType extends React.Component {
  render() {
    if (this.props.types === undefined) {
      return <p></p>
    }
    const types = this.props.types.map((type, idx) =>
      <BusinessTypeIndexItem key={type.id}
        receiveTypeFromSearch={this.props.receiveTypeFromSearch}
        type={type} y={idx}/>);
    return (
      <ul className={this.props.className}>
        {types}
      </ul>
    )
  }
}

export default BusinessType;
