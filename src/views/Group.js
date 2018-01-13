import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  item: {
    flex: 1,
  },
  itemList: {
    flexGrow: 1,
    marginTop: 30,
  },
})

class Group extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className="group-component">
        <Typography type="title">Loving Moms and Dads</Typography>
        <div className={classes.row}>
          <div className={classes.item}>
            <Typography type="subheading">Available Items</Typography>
          </div>
          <div className={classes.item}>
            <Button className={classes.button} raised color="primary">
							Gift
              <Icon className={classes.rightIcon}>card_giftcard</Icon>
            </Button>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.item}>
            <Typography type="subheading">Parents</Typography>
          </div>
          <div className={classes.item}>
            <Button className={classes.button} raised color="primary">
							Invite
              <Icon className={classes.rightIcon}>group_add</Icon>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

Group.displayName = 'Group'

Group.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Group)
