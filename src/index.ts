import * as express from 'express';
import * as logger from 'morgan';
const port = process.env.PORT || 3000;
const app = express();
app.use(logger('dev'));

app.get('/', (req, res) => {
	res.send('Hello World in teh port ' + port);
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
