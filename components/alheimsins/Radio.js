import { Component } from 'react'
import PropTypes from 'prop-types'
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import { FiCheckSquare, FiSquare } from 'react-icons/fi'

export default class Radio extends Component {
  render () {
    const { name, checked, onChange } = this.context.radioGroup
    const choosen = checked === this.props.value
    return [
      <label style={{ 'text-align': 'center', 'margin': '16px' }} key={this.props.value}>
        <input type='radio' name={name} value={this.props.value} checked={choosen} onChange={onChange}/>
        <span className='radios' style={this.props.style}>
          {choosen
            ? <span role='radio' className={this.props.color ? `color${this.props.color}` : 'checked'}>
              <MdCheckBox size='28'/></span>
            : <span role='radio' className='unchecked'><MdCheckBoxOutlineBlank color={'#727272'} size='28'/></span>
          }
        </span>
        <div className={'answer'} style={{ 'font-size': '11px', 'color': '#727272', 'font-family': '"helvetica",sans-serif' }}>
          {this.props.text === 'Neither Accurate Nor Inaccurate' ? 'Neutral' : this.props.text}
        </div>
        <style jsx>
          {`
            input {
              display: none;
            }
            .answer {

            }
            .radios {
              cursor: pointer;
            }
            .checked {
              color: ${this.props.checkedColor || 'black'}
            }
            .color5 { color: #b99bd9 }
            .color4 { color: #FF47A3 }
            .color3 { color: #FF70B8 }
            .color2 { color: #FF85C2 }
            .color1 { color: #FFADD6 }
            .unchecked {
              fill: ${this.props.uncheckedColor || 'black'}
            }
            @media screen and (max-width: 800px) {
              .radios {
                margin-top: 4px;
                font-size: 18px;
              }
            }
          `}
        </style>
      </label>
    ]
  }
}

Radio.contextTypes = {
  radioGroup: PropTypes.object
}
