import PropTypes from 'prop-types'
import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {
    width: '100%',
  },
}

class GiftItem extends React.Component {
  render() {
    const { classes } = this.props

    return <div className={classes.root}>Item</div>
  }
}

GiftItem.propTypes = {
  classes: PropTypes.object.isRequired,
}

GiftItem.displayName = 'GiftItem'

export default withStyles(styles)(GiftItem)
