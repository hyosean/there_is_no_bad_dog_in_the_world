import axios from 'axios';
import {useEffect, useState} from 'react';

const Search = () => {
	const [list, setList] = useState([]);
	const [dog, setDog] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [imgUrl, setImgurl] = useState([]);
	const getData = async () => {
		const response = await axios.get('https://dog.ceo/api/breeds/list/all');
		const list = Object.keys(response.data.message);
		setList(list);
	};
	const onImgUrl = async () => {
		let imgs = [];
		for (let i = 0; i < dog.length; i++) {
			let imgsList = await axios.get(`https://dog.ceo/api/breed/${dog[i]}/images`);
			console.log(imgsList.data.message[i]);
			imgs.push(imgsList.data.message[i]);
		}
		setImgurl(imgs);
	};
	useEffect(() => getData(), []);
	useEffect(() => onImgUrl(), [dog]);

	const onSearch = (e) => {
		setSearchText(e.target.value);
	};

	const onClick = () => {
		const searchList = list.filter((cur) => !cur.indexOf(searchText));
		setDog(searchList);
	};

	return (
		<>
			<strong className="search_tag">DOG NAME :</strong>
			<input type="text" placeholder="enter the dog's name" className="search_bar" onInput={(e) => onSearch(e)} />
			<button className="search_btn" onClick={onClick}>
				search
			</button>
			<ul className="search_list">
				{dog.map((cur, idx) => (
					<li key={idx}>
						<span>{cur}</span>
						<img src={imgUrl[idx]} alt={cur} />
					</li>
				))}
			</ul>
		</>
	);
};

export default Search;
