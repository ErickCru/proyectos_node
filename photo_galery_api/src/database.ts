import { connect } from 'mongoose';

export async function conecction() {
	await connect(
		'mongodb://localhost/photo-gallery-db',
		{
			useNewUrlParser: true,
			useFindAndModify: false
		}
	);
	console.log('database is connected');
}
