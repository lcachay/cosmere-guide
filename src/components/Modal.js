import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'

/**
 * @param {{ open: boolean; close: func; title?: string; actions?: object; persistent?: boolean; children: any; }}
 * @param {object} [actions] - {left: [{name: string, onClick: func, primary: boolean}], center: [...], right: [...] }
 */
const Modal = ({ open, close, title, actions, persistent = false, children }) => {

  const handleClose = (event, reason) => {
    if (persistent && reason === "backdropClick") {
      return false;
    }
    close();
  };

  const buildActions = () => {
    const buttonsLeft = () => actions.left.map((button, index) => 
      <button key={'button-left-' + index} className={`btn ${button.primary ? 'btn-primary' : 'btn-filled'}`} onClick={button.onClick} >
        {button.name}
      </button>
    );
    const buttonsCenter = () => actions.center.map((button, index) => 
      <button key={'button-center-' + index} className={`btn ${button.primary ? 'btn-primary' : 'btn-filled'}`} onClick={button.onClick} >
        {button.name}
      </button>
    );
    const buttonsRight = () => actions.right.map((button, index) => 
      <button key={'button-right-' + index} className={`btn ${button.primary ? 'btn-primary' : 'btn-filled'}`} onClick={button.onClick} >
        {button.name}
      </button>
    );

    return(
      <DialogActions>
        {
          actions.left.length &&
          buttonsLeft()
        }
        {
          actions.center.length &&
          buttonsCenter()
        }
        {
          actions.right.length &&
          buttonsRight()
        }
      </DialogActions>
    )
  }
  return (
    <>
      {
        open &&
        <Dialog
          open={open}
          onClose={handleClose}
          disableEscapeKeyDown={persistent}
          PaperProps={{className: 'bg-slate-700 text-slate-50'}}
        >
          <IconButton className='absolute right-0 text-slate-50 opacity-50' onClick={close}><CloseIcon/></IconButton>
          {
            title &&
            <DialogTitle>
              {title}
            </DialogTitle>
          }
          <DialogContent>
            {children}
          </DialogContent>
          {
            actions && buildActions()
          }
        </Dialog>
      }
    </>
  )
}

export default Modal