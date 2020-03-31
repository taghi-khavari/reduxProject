import React from 'react';

interface IProps{
  options: string[],
  value: string,
  onChange: (value: string) => void,
}

const Picker = ({ value, onChange, options }: IProps) => (
	<span>
		<h1>{value}</h1>
		<select onChange={e => onChange(e.target.value)} value={value}>
			{options.map(option => (
				<option value={option} key={option}>
					{option}
				</option>
			))}
		</select>
	</span>
);

export default Picker;