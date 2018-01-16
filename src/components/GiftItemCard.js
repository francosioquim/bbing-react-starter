import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from 'material-ui/Typography'
import sampleProductImage from '../styles/images/baby-shirt.jpg'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  button: {
    marginTop: 10,
    marginBottom: 15,
  },
  imageWrap: {
    flexShrink: 0,
    flexBasis: 'auto',
    padding: 10,
  },
  giftImage: {
    maxWidth: 100,
  },
  contentWrap: {
    flex: 1,
    textAlign: 'left',
    padding: 10,
  },
}

class GiftItemCard extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.imageWrap}>
          <img className={classes.giftImage} src={sampleProductImage} alt="Sample Product" />
        </div>
        <div className={classes.contentWrap}>
          <Typography type="caption">Angelos 8 months clothes</Typography>
          <Typography type="subheading">by Franco Sioquim</Typography>
          <Button className={classes.button} raised color="accent">
						Interested
          </Button>
          <Typography type="body2">John is interested</Typography>
        </div>
      </div>
    )
  }
}

GiftItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

GiftItemCard.displayName = 'GiftItemCard'

export default withStyles(styles)(GiftItemCard)
