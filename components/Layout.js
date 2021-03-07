import Footer from 'components/Footer'
import PropTypes from 'prop-types'

const Layout = (props) => {
  return (
    <div className='h-full container mx-auto max-w-md flex flex-col md:border-gray-300'>
      <main className='flex-1 p-4 flex flex-col'>
        {props.children}
      </main>
      <Footer />
      <style jsx global>{`
        html, body, #__next {
          height: 100%;
        }  
      `}
      </style>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
