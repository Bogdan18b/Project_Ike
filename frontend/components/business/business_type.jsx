import React from 'react';
import  BusinessTypeIndexItem from './business_type_index_item';

class BusinessType extends React.Component {
  componentDidMount() {
    this.props.requestAllBusinessTypes();
  }

  render() {
    if (this.props.types === undefined) {
      return <p></p>
    }
    const types = this.props.types.map(type =>
      <BusinessTypeIndexItem key={type.id}
        receiveTypeFromSearch={this.props.receiveTypeFromSearch}
        type={type}/>);
    return (
      <ul className={this.props.className}>
        {types}
      </ul>
    )
  }
}

export default BusinessType;
