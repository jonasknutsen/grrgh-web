import { useState } from 'react'
import Link from 'next/link'
import { makeStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import BarChartIcon from '@material-ui/icons/BarChart'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
const useStyles = makeStyles({
  root: {
    width: '100%'
  }
})

function Footer () {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  return (
    <footer>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label='Registrere' icon={<AttachMoneyIcon />} />
        <BottomNavigationAction label='Forbruk' icon={<BarChartIcon />} />
        <BottomNavigationAction label='Balanse' icon={<AccountBalanceIcon />} />
      </BottomNavigation>
    </footer>
  )
}

export default Footer
