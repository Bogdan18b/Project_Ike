import { connect } from "react-redux";
import { receiveTypeFromSearch } from "../../../actions/search_actions";
import BusinessType from "./business_type";

const mapStateToProps = ({ entities }) => ({
  types: Object.values(entities.businessTypes)
});

const mapDispatchToProps = dispatch => ({
  receiveTypeFromSearch: type => dispatch(receiveTypeFromSearch(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessType);
