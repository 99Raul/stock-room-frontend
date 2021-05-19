import axios from 'axios';

export default axios.create({
	baseURL: 'https://otc-room.herokuapp.com/posts',
});

// https://otc-room.herokuapp.com/

// http://localhost:5000/posts
