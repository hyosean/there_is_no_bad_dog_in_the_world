import axios from 'axios';
import {useEffect, useState} from 'react';

const Search = () => {
	const [list, setList] = useState([]);
	//const [searchText, setSearchText] = useState('');
	//const [dog, setDog] = useState();
	useEffect(() => {
		axios.get('https://dog.ceo/api/breeds/list/all').then((res) => setList(res.data.message));
	}, []);

	const onSearch = (e) => {
		let text = e.target.value;
		console.log(list);
		const kkk = [];
		list.keys(kkk);
		const {affenpinscher} = list;
		console.log(kkk);
		// console.log(it);
		//setSearchText();

		//axios.get(`https://dog.ceo/api/breed/${searchText}/images`).then((res) => console.log(res.data.message[0]));
	};
	return (
		<>
			<strong>SEARCH</strong>
			<input type="text" className="search_bar" onInput={(e) => onSearch(e)} />
			{/* <img src={dog} alt={searchText} /> */}
		</>
	);
};

export default Search;
