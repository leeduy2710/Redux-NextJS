import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextComponentType, NextPageContext } from 'next'
import { ComponentType, Fragment } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from '../src/Layout'
config.autoAddCss = false

export type ToDoAppProps = AppProps & {
    Component: NextComponentType<NextPageContext, any> & {
        Layout: ComponentType
    }
}

function MyApp({ Component }: ToDoAppProps) {
    return (
        <Fragment>
            <Layout/>
            <Component />
        </Fragment>
    )
}

export default MyApp
