import React from 'react'
import Showcase from '../../Showcase/Showcase'
import Stats from '../../Stats/Stats'
import Cli from '../../Cli/Cli'
import Cloud from '../../Cloud/Cloud'
import Languages from '../../Languages/Languages'

export default function Home() {
    return (
        <>
        <Showcase/>
        <Stats/>
        <Cli/>
        <Cloud/>
        <Languages/>
        </>
    )
}
