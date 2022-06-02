import { useState } from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { SortIcon, DownIcon } from 'components/Icons';
import { colors } from 'constants';

import style from './SortMenu.module.scss';

export const SortMenu = ({ typesSort, handlerChooseTypeSort }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    handlerChooseTypeSort(typesSort[index]);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="sort-button"
        aria-controls={open ? 'sort-button' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={!open ? styles.forSortButton : styles.forSelectedSort}
        disableElevation
        onClick={handleClick}
        startIcon={!open && <SortIcon />}
        endIcon={<DownIcon />}
      >
        {!open ? (
          'Sort'
        ) : (
          <>
            <p className={style.titleSortMenu}>Sort</p>
            {typesSort[selectedIndex]}
          </>
        )}
      </Button>

      {open && (
        <>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'lock-button',
              role: 'listbox',
            }}
            sx={styles.forSortMenu}
          >
            {typesSort.map((option, index) => (
              <MenuItem
                key={option}
                disabled={index === selectedIndex}
                selected={index === selectedIndex}
                onClick={event => handleMenuItemClick(event, index)}
                sx={styles.forSortMenuItem}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </>
  );
};

const styles = {
  forLink: {
    display: 'block',
  },

  forSortButton: {
    alignItem: 'center',
    justifyContent: 'start',
    bgcolor: colors.MAIN_LIGHT_COLOR,
    textTransform: 'capitalize',
    borderRadius: '10px',
    width: '100%',
    height: '50px',
    padding: '0 20px 0 48px',
    marginBottom: '15px',
    color: colors.MAIN_DARK_COLOR,
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '1.25',
    ':hover': { bgcolor: colors.MAIN_LIGHT_COLOR },
    ':focus': { bgcolor: colors.MAIN_LIGHT_COLOR },
  },

  forSelectedSort: {
    width: '330px',
    fontSize: '18px',
    lineHeight: '1.222',
    fontWeight: 400,
    paddingTop: '26px',
    color: colors.MAIN_DARK_COLOR,
    alignItem: 'center',
    justifyContent: 'start',
    bgcolor: colors.MAIN_LIGHT_COLOR,
    textTransform: 'capitalize',
    borderRadius: '10px 10px 0 0',
    height: '50px',
  },

  forSortMenuItem: {
    width: '330px',
    fontSize: '18px',
    lineHeight: '1.222',
    fontWeight: 400,
    ':hover': { color: colors.MAIN_ACCENT_COLOR },
    ':focus': { color: colors.MAIN_ACCENT_COLOR },
  },
};
