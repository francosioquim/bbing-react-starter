import PropTypes from 'prop-types'
import React from 'react'
import Typography from 'material-ui/Typography'
import {withStyles} from 'material-ui/styles'

const styles = () => ({
  root: {
    padding: 20,
  },
  list: {
    textAlign: 'left',
    fontSize: '1.2rem',
    '& > li': {
      margin: '10px 0',
      '& > a': {
        textDecoration: 'none',
      },
    },
  },
})

class Landing extends React.Component {
  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <Typography type="title" align="center">
          Bibing: A ReactJS Starter Kit
        </Typography>
        <div>
          <Typography type="headline" align="left">
            {"What's inside?"}
          </Typography>
          <div>
            <ul className={classes.list}>
              <li>
                <a href="https://github.com/timarney/react-app-rewired">
                  React App Rewired
                </a>: Tweak the create-react-app webpack config(s) without using{' '}
                {"'eject'"} and without creating a fork of the react-scripts
              </li>
              <li>
                <a href="https://github.com/mui-org/material-ui">
                  Material-UI v1
                </a>
              </li>
              <li>
                <a href="https://github.com/facebook/react">React 16</a>
              </li>
              <li>
                <a href="https://github.com/reactjs/redux">Redux</a>: Pending
              </li>
              <li>
                <a href="https://github.com/STRML/react-router-component">
                  React Router Component
                </a>
              </li>
              <li>
                <a href="https://github.com/apollographql/apollo-client">
                  Apollo GraphQL
                </a>
              </li>
              <li>
                <a href="https://github.com/facebook/flow">Flow</a>: Pending
              </li>
              <li>
                <a href="https://github.com/webpack/webpack">Webpack 3</a>
              </li>
              <li>ECMAScript 2017</li>
              <li>
                <a href="https://github.com/marcelmokos/eslint-config-with-prettier">
                  Prettier
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Landing.displayName = 'Landing'

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Landing)
