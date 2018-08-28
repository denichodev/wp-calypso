/** @format */

/**
 * External dependencies
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class WordPressWordmark extends PureComponent {
	static displayName = 'WordPressWordmark';

	static defaultProps = {
		width: 150,
		height: 25,
		className: 'wpcom-wordmark',
	};

	static propTypes = {
		width: PropTypes.number,
		height: PropTypes.number,
		className: PropTypes.string,
	};

	render() {
		return (
			<svg
				className={ this.props.className }
				width={ this.props.width }
				height={ this.props.height }
				viewBox="0 0 1007.7 172.4"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g fill="#FFF">
					<path
						d={
							'M84.18,3.7a82,82,0,1,0,82,82A82.09,82.09,0,0,0,84.18,3.7Zm-73.72,82a73.48,73.48,0,0,1,6.38-30L52,152.05A73.72,73.72,0,0,1,10.46,85.7Zm73.72,73.73a73.77,73.77,0,0,1-20.83-3L85.47,92.15l22.66,62.08a6.44,6.44,0,0,0,.53,1A73.52,73.52,0,0,1,84.18,159.43ZM94.34,51.13c4.43-.23,8.43-.7,8.43-.7,4-.47,3.51-6.31-.46-6.07,0,0-12,.93-19.65.93-7.25,0-19.42-.93-19.42-.93-4-.24-4.44,5.83-.47,6.07,0,0,3.76.47,7.73.7L82,82.6,65.85,131,39,51.13c4.44-.23,8.43-.7,8.43-.7,4-.47,3.51-6.31-.47-6.07,0,0-11.94.93-19.64.93-1.39,0-3,0-4.75-.09A73.7,73.7,0,0,1,134,31.33c-.32,0-.63-.06-1-.06-7.25,0-12.38,6.31-12.38,13.09,0,6.07,3.5,11.21,7.24,17.29,2.8,4.91,6.07,11.21,6.07,20.33q0,9.47-5.61,23.83L121,130.38Zm26.9,98.29,22.52-65.11c4.21-10.51,5.6-18.92,5.6-26.4a55.93,55.93,0,0,0-.49-7.58,73.73,73.73,0,0,1-27.63,99.09Z'
						}
					/>
					<path
						d={
							'M728,88.75c0-4.41,4.77-6.12,9.92-6.12a59.43,59.43,0,0,1,16.16,2.56v-12A59.58,59.58,0,0,0,736.85,71c-14,0-23.76,6.61-23.76,17.39,0,20.94,28.9,15.55,28.9,25.72,0,5-4.53,6.36-11.15,6.36-4.65,0-12.12-1.81-17.51-3.68v11.88a48.73,48.73,0,0,0,17,3.44c13.6,0,26.58-4,26.58-18.62,0-20.2-28.9-14.94-28.9-24.73M804.23,101c0-13.59,7.47-18.25,16.29-18.25a48.26,48.26,0,0,1,16.22,3.31V73.81A47.22,47.22,0,0,0,820.27,71c-19.23,0-31.11,11.75-31.11,30.74,0,18,8.58,30.37,30.25,30.37a53.71,53.71,0,0,0,18.06-3.31v-12c-6.61,2.57-11.69,3.55-16.22,3.55-9.55,0-17-4.41-17-19.35M388.56,82h-.49V72.46H374.6v58.17h14.45V96c4.53-8.57,10-11.39,19.23-11.39h1.47V72a38.81,38.81,0,0,0-3.92-.25c-7.84,0-13.23,3.07-17.27,10.29m181.29,0h-.49V72.46H555.89v58.17h14.45V96c4.53-8.57,10-11.39,19.23-11.39H591V72a38.55,38.55,0,0,0-3.92-.25c-7.84,0-13.23,3.07-17.27,10.29M988,71c-6.24,0-13.35,3.43-19.84,7.71l-1.71,1.11c-3.06-6.49-9.19-8.82-15.92-8.82-6.25,0-13.35,3.18-19.84,7.47v-6H917v58.17h14.58V88.87c5.38-3.55,11.14-5.76,15.3-5.76,4.78,0,7.72,2.57,7.72,10.78v36.74h14.45V89c5.39-3.55,11.15-5.88,15.31-5.88,4.77,0,7.71,2.57,7.71,10.78v36.74h14.45V90.46C1006.52,79.19,999.79,71,988,71M876,120.46c-9.43,0-14.45-6.12-14.45-18.86s5-18.86,14.45-18.86,14.33,6.13,14.33,18.86-4.9,18.86-14.33,18.86M876,71c-20,0-29.39,12.86-29.39,30.61S856,132.1,876,132.1s29.4-12.74,29.4-30.5S895.8,71,876,71M675.42,88.75c0-4.41,4.78-6.12,9.92-6.12a59.45,59.45,0,0,1,16.17,2.56v-12A59.65,59.65,0,0,0,684.24,71c-14,0-23.75,6.61-23.75,17.39,0,20.94,28.9,15.55,28.9,25.72,0,5-4.54,6.36-11.15,6.36-4.65,0-12.12-1.81-17.51-3.68v11.88a48.73,48.73,0,0,0,17,3.44c13.6,0,26.58-4,26.58-18.62,0-20.2-28.91-14.94-28.91-24.73m-62.7,6.36c.86-8.08,5.27-13.22,12.49-13.22,7.72,0,10,6.12,10,13.22ZM625.34,71c-18.62,0-28.29,14.45-28.29,30.25,0,21.67,11.38,30.86,29.86,30.86a69.17,69.17,0,0,0,21.45-3.31v-12c-6.06,2.22-11.54,3.56-17.41,3.56-10.77,0-18-2.94-18.35-15.67h37.23a69.26,69.26,0,0,0,.49-8.57c0-12.25-6.49-25.11-25-25.11m-108.6,19.1H505.28V60.7h11.46c9.31,0,14,5.15,14,14.33s-4.28,15.06-14,15.06m-.12-41.51H489.85v82.05h15.43V102.09h11.34c17.51,0,30.25-9.43,30.25-27.06s-12.74-26.45-30.25-26.45m-59.1,65.27c-4.65,4.29-9.06,6.61-13.71,6.61-8,0-13.11-5.26-13.11-17.63,0-13.35,6.37-20.33,17.39-20.33a26.89,26.89,0,0,1,9.43,1.84Zm0-41.51A52.7,52.7,0,0,0,446.62,71c-20,0-30.86,13.35-30.86,32.82s10.9,28.29,23.76,28.29a31.84,31.84,0,0,0,18.73-6.86v5.39H472v-82H457.52Zm-124,48.12c-9.43,0-14.45-6.12-14.45-18.86s5-18.86,14.45-18.86,14.33,6.13,14.33,18.86-4.9,18.86-14.33,18.86m0-49.47c-20,0-29.39,12.86-29.39,30.61s9.43,30.5,29.39,30.5S363,119.36,363,101.6,353.4,71,333.56,71m432.92,59.64H781V115.69h-14.5Zm-475.39-82L274.74,111.4,258.39,48.58H241.88L245.73,62l-14.39,51.49L215.68,48.58H199.81l22.31,82.05h17.3l13.36-43.87,12.52,43.87h17.29l23.42-82Z'
						}
					/>
				</g>
			</svg>
		);
	}
}
