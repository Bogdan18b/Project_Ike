import { connect } from "react-redux";
import { receiveTypeFromSearch } from "../../../actions/search_actions";
import Category from "./category";

const mapStateToProps = ({ entities }) => ({
  types: Object.values(entities.categories)
});

const mapDispatchToProps = dispatch => ({
  receiveTypeFromSearch: category => dispatch(receiveTypeFromSearch(category))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
