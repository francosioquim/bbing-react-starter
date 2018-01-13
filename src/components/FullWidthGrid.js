import * as Grid from 'material-ui/Grid'

import PropTypes from 'prop-types'
import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

function FullWidthGrid(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <div>a</div>
      </Grid>
    </div>
  )
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FullWidthGrid)
