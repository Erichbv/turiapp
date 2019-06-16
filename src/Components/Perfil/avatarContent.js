import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const avatarContent = (props) => {
  return (
      <div>
        <Typography
          className="perfilTexto"
          variant="caption"
          display="block"
          align="center">
          {props.text1}
        </Typography>
        <Typography
          className=""
          variant="caption"
          display="block"
          align="center">
          {props.text2}
        </Typography>
      </div>
  );
}

export default avatarContent;
