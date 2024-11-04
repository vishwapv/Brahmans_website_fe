import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import Options from '../components/Options'
import SlidingCard from '../components/SlidingCard'
import Benefits from '../components/Benefits'
import Footer from '../components/Footer'

const Dashboard = () => {
    return (
        <Box flex={2}>

            <Box>
                <SlidingCard />
            </Box>
            <Box>
                <Benefits />
            </Box>
            <Box sx={{ margin: "60px" }}>
                <Typography variant='h1' >Main Topic</Typography>
                <Typography container="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis molestiae praesentium ipsam neque incidunt amet autem consequatur aperiam? Repellendus soluta facilis sapiente quibusdam blanditiis sint rem voluptatum, quae pariatur earum, minus possimus iure, sunt nostrum illo. Perspiciatis nihil ipsa quas, minus ex nisi consequuntur. Est, nisi vel voluptates distinctio veniam ad voluptate adipisci iure neque eaque similique officiis impedit enim explicabo perspiciatis, excepturi placeat reprehenderit asperiores rem ducimus eveniet cumque quas illum. Ducimus nihil ipsam vel porro odio. Quidem aperiam, beatae omnis temporibus porro rem sequi! Quod et aut, veritatis quia, soluta possimus dolores ad quae, asperiores corrupti impedit!</Typography>
            </Box>
        </Box>

    )
}

export default Dashboard
