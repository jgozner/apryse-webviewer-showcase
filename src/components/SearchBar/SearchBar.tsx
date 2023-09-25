import React, { useEffect, useState, useRef } from 'react';
import { Input, InputGroup, Box, BoxProps, Text, Grid, GridItem, SimpleGrid, List, Divider } from '@chakra-ui/react';
import {  DemoTag, demos } from '../../config/demos';
import { useDebounce } from '../../hooks/useDebounce';
import { Link } from 'react-router-dom';

interface SearchDemo {
	key: string;
	title: string;
	path: string;
	keywords: string[];
	tag: DemoTag
}

const scrollbar = {
	'&::-webkit-scrollbar': {
		height: '4px',
		width: '6px',
		backgroundColor: '#f5f5f5',
		cursor: 'pointer',
	},
	'&::-webkit-scrollbar-thumb': {
		borderRadius: '4px',
		backgroundColor: 'rgba(85, 85, 85, 0.2)',
	},
	'&::-webkit-scrollbar-track': {
		borderRadius: '4px',
		backgroundColor: '#fff',
	},
};

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedValue = useDebounce<string>(searchTerm, 200)
	const searchDemos = useRef<Array<SearchDemo>>([]);
	const [searchList, setSearchList] = useState<Record<DemoTag, Array<SearchDemo>>>();

	useEffect(() => {
		const list = demos.map((demo) => {
			return {
				key: demo.path,
				keywords: demo.keywords,
				path: demo.path,
				title: demo.title,
				tag: demo.tag
			}
		})
		searchDemos.current = list;

		const tempSearchList: any = {};

		for(var i = 0; i < list.length; i++){
			const item = list[i];
			if(!tempSearchList[item.tag]){
				tempSearchList[item.tag] = [];
			}
			tempSearchList[item.tag].push(item)
		}
		setSearchList(tempSearchList);
	}, [])

	useEffect(() => {

		const list = searchDemos.current.filter((item) => item.keywords.some((keyword) => keyword.includes(searchTerm.toLowerCase())));

		const tempSearchList: any = {};

		for(var i = 0; i < list.length; i++){
			const item = list[i];
			if(!tempSearchList[item.tag]){
				tempSearchList[item.tag] = [];
			}
			tempSearchList[item.tag].push(item)
		}
		setSearchList(tempSearchList);
	}, [debouncedValue])

	const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value)
	}

	return (
		<Box w={"100%"}>
			<Box >
				<Text pb={1} color={"gray.600"} fontWeight={"bold"}>Capabilities</Text>
				<Input
					value={searchTerm}
					placeholder='Search capabilities'
					onChange={onSearchChange}
					borderColor="rgba(34,36,38,.15)"
					borderRadius="md"
				/>
			</Box>

			<List
				height={"calc(100vh - 210px)"}
				overflowY={"auto"}
				css={scrollbar}
				spacing={3}
				pt={3}
				pr={1}>
				{Object.keys(searchList ?? {}).map((key) => {
					return (
						<Box pb={2} key={key}>
							<Text color={"gray.500"} fontWeight={"bold"} mb={1}>{key}</Text>
							<Divider mb={2}/>
							{searchList![key as DemoTag].map(item =>{
								return (
								<Link to={item.path} style={{ textDecoration: 'none' }} key={item.key} >
									<Box mb={2} px={2} py={3} border={'1px'} borderColor='gray.300' _hover={{ backgroundColor: "gray.100", cursor: "pointer" }} borderRadius={5}>
										<Text color={"gray.600"} fontWeight={"bold"}>{item.title}</Text>
									</Box>
								</Link>
								)
							})}
						</Box>
					)
				})}
			</List>
		</Box>
	);
};

export default SearchBar;