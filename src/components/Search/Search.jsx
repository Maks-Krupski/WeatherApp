import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Search.scss';

const Search = ({ children, onSubmit, onChange, value }) => {
  const { t } = useTranslation();

  return (
    <form onSubmit={onSubmit} className='search'>
      <input type='text' name='city' required value={value} onChange={onChange} placeholder={`${t('loadingBtn')}...`} />
      <button>{t('loadingBtn')}</button>
      {children}
    </form>
  );
};

Search.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
Search.defaultProps = { children: null };

export default Search;
