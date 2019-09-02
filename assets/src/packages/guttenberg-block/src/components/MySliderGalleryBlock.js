import {wp} from 'globals';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks; 

/**
 * Register: aa Gutenberg Block.
 *
 */
registerBlockType( 'my-slider-gallery/my-slider-gallery-block', {

	title: __( 'My Slider Gallery'), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'single-block — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],

	// The "edit" property must be a valid function.
	edit: function( props ) {
		// Creates a <p class='wp-block-cgb-block-single-block'></p>.
		return (
			<div className={ props.className }>
				<p>— Hello from the backend.</p>
				<p>
					CGB BLOCK: <code>single-block</code> is a new Gutenberg block
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		);
	},

	// The "save" property must be specified and must be a valid function.
	save: function( props ) {
		return (
			<div className={ props.className }>
				<p>— Hello from the frontend.</p>
				<p>
					CGB BLOCK: <code>single-block</code> is a new Gutenberg block.
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		);
	},
} );