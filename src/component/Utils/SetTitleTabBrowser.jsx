import React from 'react'
import { Helmet } from 'react-helmet'

export default function SetTitleTabBrowser({nameSection}) {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>سگمنتو | {nameSection}</title>
            {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
    )
}
