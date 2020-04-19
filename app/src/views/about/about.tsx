import React from 'react'

import './about.less'

export default class About extends React.Component<PageProps> {
  render() {
    return (
      <div className="about flex column center" style={{ height: '100%' }}>
        <img src={$tools.APP_ICON} width="88" />
        <h2 style={{ marginTop: 8 }}>{$tools.APP_NAME}</h2>
        <p className="fs-12" style={{ margin: 4 }}>
          Version {$tools.APP_VERSION}
        </p>
        <p className="fs-12 text-gray">about</p>
      </div>
    )
  }
} // class About end
