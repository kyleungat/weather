import React from 'react'

const DataContext = React.createContext({});

const DataProvider = DataContext.Provider;

export {DataContext, DataProvider};