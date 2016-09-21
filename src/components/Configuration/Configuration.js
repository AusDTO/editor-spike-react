import React, { Component } from 'react'
import './Configuration.css'

class Configuration extends Component {
  state = {}

  onChange(prop, e) {
    const { updateBlockProperty, configureBlock } = this.props
    updateBlockProperty(configureBlock.id, prop.property, e.target.value)
  }

  /**
   * Currently only handles radio and text input.
   */
  generateForm(props, block) {
    let onChange = this.onChange.bind(this)
    return props.map((prop, i) => {
      let changeEvent = onChange.bind(null, prop)
      if (prop.type === 'text') {
        return (
          <div key={i}>
            <label htmlFor={prop.label}>{prop.label}</label>
            <input type="text" name={prop.label} onChange={changeEvent} value={block[prop.property]} />
          </div>
        )
      } else if (prop.type === 'radio') {
        return (
          <div key={i}>
            <span>{prop.label}</span>
            {prop.options.map((opt, j) => (
              <div key={j * 2}>
                <input
                  type="radio"
                  value={opt.value}
                  id={opt.value}
                  name={`configblock_${i}`}
                  checked={block[prop.property] === opt.value}
                  onChange={changeEvent} />
                <label htmlFor={opt.value}>{opt.label}</label>
              </div>
            ))}
          </div>
        )
      }

      return (
        <span/>
      )
    })
  }

  render() {
    const block = this.props.configureBlock || {}
    const { kind, properties } = block

    if (!properties && !kind) {
      return <p>Select a component to configure</p>
    }

    if (!properties) {
      return <p>This component has no properties to configure</p>
    }

    const form = this.generateForm(properties, block)
    return (
      <article className="Configuration">
        <h4>Configuration for {`<${kind}>`}</h4>
        <form onSubmit={e => e.preventDefault()}>
          {form}
        </form>
      </article>
    )

  }
}

export default Configuration
