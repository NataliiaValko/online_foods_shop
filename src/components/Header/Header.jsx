import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { Container } from 'components/Container';
import { Logotype } from 'components/Logotype';
import { colors } from 'constants';

import style from './Header.module.scss';

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const getValueForSearch = (e, valueForSearch) => console.log(valueForSearch.label);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <header className={style.header}>
        <Container>
          <div className={style.headerWrapper}>
            <Logotype />
            <div className={style.headerBox}>
              <div className={style.headerContactsBox}>
                <p className={style.headerText}>Our phones</p>
                <a href="tel:+996705188955" className={style.headerPhone}>
                  +996 705 188 955
                </a>
                <a href="tel:+996555188955" className={style.headerPhone}>
                  +996 555 188 955
                </a>
              </div>
              <div className={style.headerTimeWorksBox}>
                <div className={style.watches}></div>
                <p className={style.headerTimeWorks}>
                  We're working <br />
                  from 10:00 to 00:00
                </p>
              </div>
            </div>
            <IconButton
              aria-label="search"
              sx={styles.forButtonSearch}
              onClick={handleClick}
              type={'button'}
            >
              <SearchIcon sx={styles.forIconSearch} />
            </IconButton>
            {open && (
              <div className={style.searchFormBox}>
                <Autocomplete
                  classes={style.searchInput}
                  onChange={getValueForSearch}
                  disablePortal
                  onClose={handleClose}
                  id="searchProduct"
                  options={products}
                  sx={styles.forFormForSearchProduct}
                  renderInput={params => <TextField {...params} label="Enter to search" />}
                />
              </div>
            )}
          </div>
        </Container>
      </header>
    </>
  );
};

const styles = {
  forFormForSearchProduct: { width: 330, backgroundColor: colors.MAIN_LIGHT_COLOR },
  forButtonSearch: { padding: '10px' },
  forIconSearch: { color: colors.SECONDARY_COLOR, width: '30px', height: '30px' },
};

const products = [{ label: 'sushi1' }, { label: 'sushi2' }];
