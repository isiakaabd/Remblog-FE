import { FC } from 'react';
import Menu from '@mui/material/Menu';
import { BasicMenuProp } from './type';

const BasicMenu: FC<BasicMenuProp> = ({ anchorEl, open, handleClose, children }) => {
  return (
    <div>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={
          {
            //   style: {
            //     maxHeight: ITEM_HEIGHT * 4.5,
            //     width: '20ch',
            //   },
          }
        }
      >
        {children}
      </Menu>
    </div>
  );
};
export default BasicMenu;
