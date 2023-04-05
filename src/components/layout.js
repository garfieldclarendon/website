import React from 'react'
import { init, onPreferencesChanged } from 'cookie-though'

import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'
import Notice from './Notice'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    if (typeof document !== undefined) {
      const cookieConfig = {
        policies: [
          {
            id: 'social',
            label: 'Social Media Cookies',
            category: 'social',
            description:
              'We need to save some social cookies, for the website to function properly.',
          },
        ],
        essentialLabel: 'Always on',
        permissionLabels: {
          accept: 'Accept',
          acceptAll: 'Accept all',
          decline: 'Decline',
        },
        cookiePreferenceKey: 'cookie-preferences',
        header: {
          title: 'Accept cookies?',
          subTitle: '',
          description: 'We use cookies to better understand our audience.',
        },
        cookiePolicy: {
          url: 'https://inthepocket.com/cookie-policy',
          label: 'Read the full cookie declaration',
        },
        customizeLabel: 'Customize',
      }

      init(cookieConfig)

      onPreferencesChanged((preferences) => {
        if (preferences && !preferences.cookieOptions[0].isEnabled) {
          window.posthog.opt_out_capturing()
        }
      })
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  render() {
    const { children, path } = this.props
    return (
      <>
        <Notice />
        <div
          className={`body ${this.state.loading} ${
            this.state.isMenuVisible ? 'is-menu-visible' : ''
          }`}
        >
          <div id="wrapper">
            <Header onToggleMenu={this.handleToggleMenu} />
            {children}
            <Contact path={path} />
            <Footer />
          </div>
          <Menu onToggleMenu={this.handleToggleMenu} />
        </div>
      </>
    )
  }
}

export default Layout
