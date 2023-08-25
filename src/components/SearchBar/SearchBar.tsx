import React, { useEffect, useState, useRef } from 'react';
import { Input, InputGroup, Box, BoxProps, Text, Grid, GridItem, SimpleGrid, List } from '@chakra-ui/react';
import { Demo, demos } from '../../config/demos';
import { useDebounce } from '../../hooks/useDebounce';
import { Link } from 'react-router-dom';

interface SearchDemo {
	title: string;
    path: string;
    keywords: string[];
}

export const scrollbar = {
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

const SearchBar = ( ) => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedValue = useDebounce<string>(searchTerm, 200)
	const searchDemos = useRef<Array<SearchDemo>>([]);
	const [searchList, setSearchList] = useState<Array<SearchDemo>>([]);

	useEffect(() =>{
		const list = demos.map((demo) =>{
			return {
				keywords: demo.keywords,
				path: demo.path,
				title: demo.title
			}
		})
		searchDemos.current = list;
		setSearchList(list);
		console.log(list)
	},[])

	useEffect(() =>{
		
		const list = searchDemos.current.filter((item) => item.keywords.some((keyword) => keyword.includes(searchTerm.toLowerCase())));
		console.log(list)
		setSearchList(list)
	},[debouncedValue])

	const onSearchChange= (event: React.ChangeEvent<HTMLInputElement>) =>{
		setSearchTerm(event.target.value)
	}

	return (
		<Box w={"100%"}>
			<Box mx={2}>
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
						mx={2} 
					 	spacing={3}
						pt={3}
						pr={1}>
							{searchList.map((item) =>{
								return(
									<Link to={item.path} style={{ textDecoration: 'none' }} key={item.path}>
										<Box mb={2} px={2} py={3} border={'1px'} borderColor='gray.300' _hover={{backgroundColor: "gray.100"}} borderRadius={5}>
											<Text color={"gray.600"} fontWeight={"bold"}>{item.title}</Text>
										</Box>
									</Link>
								)
							})}
					</List>
		</Box>
	);
};

export default SearchBar;