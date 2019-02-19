import { Router } from 'express'

import { renderToString } from 'react-dom/server'
import React from 'react'
import Layout from '../components/Layout'

const router = Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  const jsx = (<Layout />)
  const html = renderToString(jsx)
  res.send(html)
})


export default router
