import Button from 'material-ui/Button'
import CardGiftcardIcon from 'material-ui-icons/CardGiftcard'
import GiftItemCard from '../components/GiftItemCard'
import Grid from 'material-ui/Grid'
import GroupAddIcon from 'material-ui-icons/GroupAdd'
import ParentCard from '../components/ParentCard'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    padding: 20,
  },
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
    marginBottom: 20,
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

    const giftList = (
      <Grid container spacing={40}>
        {Array(4).fill((
          <Grid item xs={12} sm={6}>
            <GiftItemCard />
          </Grid>))
        }
      </Grid>
    )

    const parentList = (
      <Grid container spacing={40}>
        {Array(2).fill((
          <Grid item xs={6} sm={4}>
            <ParentCard firstName="Natasha" lastName="Boone" />
          </Grid>))
        }
      </Grid>
    )

    return (
      <div className={classes.root}>
        <Typography type="title">Awesome Parents Group</Typography>
        <div className={classes.row}>
          <div className={classes.item}>
            <Typography type="headline" align="left">
							Available Items
            </Typography>
          </div>
          <div className={classes.item}>
            <Button className={classes.button} raised color="primary">
							Gift
							<CardGiftcardIcon className={classes.rightIcon} />
            </Button>
          </div>
        </div>
        {giftList}
        <div className={classes.row}>
          <div className={classes.item}>
            <Typography type="headline" align="left">
							Parents
            </Typography>
          </div>
          <div className={classes.item}>
            <Button className={classes.button} raised color="primary">
							Invite
							<GroupAddIcon className={classes.rightIcon} />
            </Button>
          </div>
        </div>
        {parentList}
      </div>
    )
  }
}

Group.displayName = 'Group'

Group.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Group)
