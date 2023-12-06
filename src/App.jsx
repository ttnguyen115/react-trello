import { Button } from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarms'
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation'
import { pink } from '@mui/material/colors'

function App() {
  return (
    <>
      <div>TrungNT102</div>
      <Button variant="text">Hello World 1</Button>
      <Button variant="contained">Hello World 2</Button>
      <Button variant="outlined">Hello World 3</Button>
      <AccessAlarmIcon sx={{ color: pink[500] }} />
      <ThreeDRotationIcon />
    </>
  )
}

export default App
