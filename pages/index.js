import { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Button, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core'
import Layout from 'components/Layout'

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(1),
    minWidth: 120
  },
  textField: {
    marginBottom: theme.spacing(1)
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

function Index ({ categoriesData, merchantsData }) {
  const [categories, setCategories] = useState(categoriesData.categories)
  const [category, setCategory] = useState()
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [merchant, setMerchant] = useState()
  const [merchants, setMerchants] = useState(merchantsData.merchants)
  const [sum, setSum] = useState('')
  const classes = useStyles()

  const onCategoryChange = (event) => {
    setCategory(event.target.value)
  }
  const onDateChange = (event) => {
    setDate(event.target.value)
  }
  const onMerchantChange = (event) => {
    setMerchant(event.target.value)
  }
  const onSumChange = (sum) => {
    setSum(sum)
  }

  const onSubmit = () => {
    console.log('submit')
  }

  return (
    <Layout>
      <div>Legg til utgift</div>
      <TextField className={classes.textField} label='Beløp' type='number' variant='outlined' value={sum} onChange={onSumChange} />
      <TextField className={classes.textField} label='Dato' type='date' variant='outlined' value={date} onChange={onDateChange} />
      <FormControl className={classes.formControl} variant='outlined'>
        <InputLabel id='category-select-label'>Kategori</InputLabel>
        <Select
          labelId='category-select-label'
          id='category-select'
          value={category || ''}
          onChange={onCategoryChange}
        >
          {categories && categories.map((category, key) => {
            return (
              <MenuItem key={key} value={category.id}>{category.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl} variant='outlined'>
        <InputLabel id='merchant-select-label'>Forhandler</InputLabel>
        <Select
          labelId='merchant-select-label'
          id='merchant-select'
          value={merchant || ''}
          onChange={onMerchantChange}
        >
          {merchants && merchants.map((merchant, key) => {
            return (
              <MenuItem key={key} value={merchant.id}>{merchant.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <Button variant='contained' color='primary' onClick={onSubmit}>Legg til</Button>
    </Layout>
  )
}

Index.propTypes = {
  categoriesData: PropTypes.object,
  merchantsData: PropTypes.object
}

export async function getServerSideProps (context) {
  const categoriesRes = await axios.get(`${process.env.BASEURL}/api/categories`)
  const merchantsRes = await axios.get(`${process.env.BASEURL}/api/merchants`)
  return {
    props: {
      categoriesData: categoriesRes.data,
      merchantsData: merchantsRes.data
    }
  }
}

export default Index
