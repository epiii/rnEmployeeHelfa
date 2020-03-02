import React, { useState, useEffect } from 'react'

const MainContext = React.createContext()

const MainProvider = (props) => {
    return (
        <MainContext.Provider>
            {props.children}
        </MainContext.Provider>
    )
}

export { MainProvider, MainContext  }
