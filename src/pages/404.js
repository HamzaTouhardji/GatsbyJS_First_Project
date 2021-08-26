import { Link } from 'gatsby'
import React from 'react'
import Layout from '../pages/components/Layout'

export default function NotFound() {
    return (
        <Layout>
            <div>
                <h1>404 NOT FOUND</h1>
                <p>Sorry, we don't found this page !</p>
                <p> Please, return to the home</p>
                <Link to="/">Home</Link>
            </div>
        </Layout>
    )
}
