// @flow

// #region imports
import { PureComponent }  from 'react';
import Head               from 'next/head';
// #endregion

// #region flow types
type Props = {
  children: ReactNode
}

type State = any;
// #endregion

class Layout extends PureComponent<Props, State> {
  // #region component lifecycle methods
  render() {
    const { children } = this.props;

    return (
      <div>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <meta
            charSet="utf-8"
          />
          <link
            rel="stylesheet"
            // href="static/css/bootstrap.min.css"
            href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cosmo/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            rel="icon"
            href="static/favicon.ico"
          />
        </Head>
        <style
          jsx
          global
        >
          {`
            body {
            }

            .navbar {
              border-radius: 0;
            }
          `}
        </style>
        {children}
      </div>
    );
  }
  // #endregion
}

export default Layout;
