import PropTypes from 'prop-types';

const NotFound = ({ message }) => {
  return <p>{message}</p>;
};
export default NotFound;

NotFound.propTypes = {
  message: PropTypes.string,
};
