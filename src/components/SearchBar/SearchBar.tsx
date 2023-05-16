import React, { useEffect, useState, useRef } from 'react';
import { Input, InputGroup, Box, BoxProps, Text, Grid, GridItem, SimpleGrid, List, Link, } from '@chakra-ui/react';
import { Demo, demos } from '../../config/demos';
import { useDebounce } from '../../hooks/useDebounce';
import { scrollbar } from '../../config/theme';

interface SearchDemo {
	title: string;
    path: string;
    keywords: string[];
}

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
				<Text pb={1}>Search Samples</Text>
				<Input
					value={searchTerm}
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
									<Link href={item.path} style={{ textDecoration: 'none' }} >
										<Box mb={2}  px={2} py={4} border={'1px'} borderColor='blue.200' _hover={{backgroundColor: "blue.200"}} borderRadius={5}>
											<Text>{item.title}</Text>
										</Box>
									</Link>
								)
							})}
					</List>
		</Box>
	);
};

export default SearchBar;