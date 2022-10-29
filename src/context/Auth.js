import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config.json";
const Auth = createContext({});

export const AuthProvider = ({ children }) => {

    const apiKey = api.API_KEY;
    const apiURL = api.baseURL;
    const chainId = [1, 137, 56, 2020]; //ETH, MATIC, Binance, Ronin

    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [nftsList, setNftsList] = useState([]);
    const navigate = useNavigate();
    const nftList = []

	const getNftData = async () => {

		try{
			for (let k = 0; k < chainId.length; k++) {
				let url = `${apiURL}/${chainId[k]}/address/${inputValue}/balances_v2/?key=${apiKey}&nft=true`;
			
				const response = await fetch(url);
				const result = await response.json();
				const data = result.data.items;
			
				for (var i = 0; i < data.length; i++) {
					if (data[i]["nft_data"] != null) {
						for (var j = 0; j < data[i]["nft_data"].length; j++) {
				
							const name_l = data[i]["nft_data"][j].external_data["name"];
							const description_l = data[i]["nft_data"][j].external_data[
							"description"
							].substring(0, 200);
							const image_l = data[i]["nft_data"][j].external_data["image"];
							const price = data[i]["nft_data"][j].token_price_wei;
				
							if ((name_l.includes("Airdrop") || name_l.includes("AIRDROP-PASS")) !== true) {
							nftList.push({ name_l, description_l, image_l, price})
							}
				
						}
					}
				}		
			}
		
		} 
		catch(err) {
			console.log(err);
		}
		
		return nftList;
	};

	const loadingAnime = async () => {

		setLoading(true);

		const data = await getNftData();
		!data ? console.log("err") : setNftsList(data);

		setLoading(false);

		navigate("/nft-collection")

	};
	
	return (
		<Auth.Provider
		value={{
			loading, setLoading,
			loadingAnime,
			inputValue, setInputValue,
			nftsList
		}}
		>
		{children}
		</Auth.Provider>
	);
};

export default Auth;
