/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'

const unitOptions = [
  { value: 'character', name: 'Characters (文字)' },
  { value: 'sentence', name: 'Sentences (文)' },
].map((option, index) => (
  <option key={index} value={option.value}>
    {option.name}
  </option>
))

type Props = {
  unit?: string;
  onChange: (unit: string) => void;
}

export default class SelectUnit extends React.Component<Props> {
  state = {
    unit: this.props.unit || 'character'
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    this.setState({ unit: event.target.value })
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <select
        value={this.state.unit}
        onChange={(e) => this.handleChange(e)}
        css={css`
          flex-shrink: 0;
          margin-left: 8px;
          width: 120px;
        `}
      >
        {unitOptions}
      </select>
    )
  }
}