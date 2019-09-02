import app from './app';
import { conecction } from './database';

async function main() {
	conecction();
	await app.listen(app.get('port'));
	console.log('Server on port', app.get('port'));
}

main();
