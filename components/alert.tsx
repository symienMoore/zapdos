import React from 'react'
import PropTypes from 'prop-types'


const ErrorProps = (props) => {
    return (
        <div>
            <div>
                <p>Error!</p>
            </div>
        </div>
    )
}

const SucessProps = (props) => {
    return (
        <div>
            <div className='bg-green-400 border border-green-500 p-2 text-white font-bold w-80 m-5 '>
                <p>{props.msg}</p>  
            </div>
        </div>
    )
}

const Alert = props => {
  return (
    <div>
        {props.error == true ? 
            <ErrorProps /> :
            <SucessProps msg={props.message}/>
        }
    </div>
  )
}

Alert.propTypes = {}

export default Alert