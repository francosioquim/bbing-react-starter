import Avatar from 'material-ui/Avatar'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from 'material-ui/Typography'
import amber from 'material-ui/colors/amber'
import deepPurple from 'material-ui/colors/deepPurple'
import lime from 'material-ui/colors/lime'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {
    width: '100%',
    textAlign: 'center',
  },
  avatar: {
    margin: '0 auto',
    marginBottom: 10,
    color: '#fff',
  },
  purpleAvatar: {
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
  yellowAvatar: {
    margin: '0 auto',
    marginBottom: 10,
    color: '#fff',
    backgroundColor: amber[500],
  },
  greenAvatar: {
    margin: '0 auto',
    marginBottom: 10,
    color: '#fff',
    width: 60,
    height: 60,
    backgroundColor: lime[500],
  },
}

class ParentCard extends React.Component {
  render() {
    const { classes, firstName, lastName } = this.props

    return (
      <div className={classes.root}>
        <Avatar className={classes.greenAvatar}>
          {firstName.charAt(0)}
          {lastName.charAt(0)}
        </Avatar>
        <Typography type="caption">
          {firstName} {lastName}
        </Typography>
        <Typography type="body2">with Baby John (2 years)</Typography>
      </div>
    )
  }
}

ParentCard.propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

ParentCard.displayName = 'ParentCard'

export default withStyles(styles)(ParentCard)
