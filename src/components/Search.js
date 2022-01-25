import axios from 'axios';
import {useEffect, useState} from 'react';

const Search = () => {
	const [list, setList] = useState([]);
	const [dog, setDog] = useState([]);
	const [imgUrl, setImgurl] = useState();
	const getData = async () => {
		const response = await axios.get('https://dog.ceo/api/breeds/list/all');
		const list = Object.keys(response.data.message);
		setList(list);
	};
	useEffect(() => getData(), []);

	const onSearch = (e) => {
		let text = e.target.value;

		const searchList = list.filter((cur) => !cur.indexOf(text));
		console.log(searchList);
		setDog(searchList);

		const imgs = searchList.map((cur) => axios.get(`https://dog.ceo/api/breed/${cur}/images`));
		console.log(imgs.message[0]);
		setImgurl(imgs.message[0]);
	};

	return (
		<>
			<strong>SEARCH</strong>
			<input type="text" className="search_bar" onInput={(e) => onSearch(e)} />
			<ul>
				{dog.map((cur, idx) => (
					<li key={idx}>
						{cur}
						<img src={imgUrl} alt={cur} />
					</li>
				))}
			</ul>
		</>
	);
};

export default Search;
