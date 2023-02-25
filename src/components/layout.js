import React from 'react'
import { init, onPreferencesChanged } from 'cookie-though'
import posthog from 'posthog-js'

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
        title: 'cookie though?',
        subTitle: "You're probably fed up with these banners...",
        description:
          'Everybody wants to show his best side - and so do we. That’s why we use cookies to guarantee you a better experience.',
      },
      cookiePolicy: {
        url: 'https://inthepocket.com/cookie-policy',
        label: 'Read the full cookie declaration',
      },
      customizeLabel: 'Customize',
    }

    init(cookieConfig)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
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
    onPreferencesChanged((preferences) => {
      if (preferences && !preferences.cookieOptions[0].isEnabled) {
        posthog.opt_out_capturing()
      }
    })

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
