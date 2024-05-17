import React, { useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { AuthProvider } from './contexts/AuthContext';
import Mainrouter from './components/MainRouter';
import { LoadingProvider } from './contexts/LoadingContext';
import { BooksProvider } from './contexts/BooksContext';
import { UserProvider } from './contexts/UserContext';

const wrapInLayer = layerName => node => {
  // if we're not at the root of a <style> tag, leave the tree intact
  if (node.parent) return

  // if we're at the root, replace node with `@layer layerName { node }`
  const child = { ...node, parent: node, root: node }
  Object.assign(node, {
    children: [child],
    length: 6,
    parent: null,
    props: [layerName],
    return: "",
    root: null,
    type: "@layer",
    value: `@layer ${layerName}`
  })
}


const emotionCache = createCache({
  key: 'emotion-css-cache',
  prepend: true,
  stylisPlugins: [wrapInLayer('mui')],
});


export default function App() {
  
  return (
    <>
      <CssBaseline />
      <CacheProvider value={emotionCache}>
        <LoadingProvider>
          <BooksProvider>
            <UserProvider>
              <AuthProvider>
                <Mainrouter/>
              </AuthProvider>
            </UserProvider>
          </BooksProvider>
        </LoadingProvider>
      </CacheProvider>
    </>
  )
}
