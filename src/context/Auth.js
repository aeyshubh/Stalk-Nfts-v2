import { ethers } from "ethers";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config.json";
const Auth = createContext({});

export const AuthProvider = ({ children }) => {

    const apiKey = api.API_KEY;
    const apiURL = api.baseURL;
    const chainId = [1, 137, 56, 2020]; //ETH, MATIC, Binance, Ronin

	
    const [walletAddress, setWalletAddress] = useState(null);

    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [nftsList, setNftsList] = useState([]);
    const navigate = useNavigate();
    var nftList = []

	const getNftData = async (iVal) => {

		try{
			for (let k = 0; k < chainId.length; k++) {
				let url = `${apiURL}/${chainId[k]}/address/${iVal}/balances_v2/?key=${apiKey}&nft=true`;
			
				const response = await fetch(url);

				if(!response) { 
					nftList = []					
					break; 
				}
				const result = await response.json();
				const data = result.data.items;
			
				for (var i = 0; i < data.length; i++) {
					if (data[i]["nft_data"] != null) {

						let contract_address = data[i].contract_address

						for (var j = 0; j < data[i]["nft_data"].length; j++) {
							
				
							const name_l = data[i]["nft_data"][j].external_data["name"];
							const description_l = data[i]["nft_data"][j].external_data[
							"description"
							].substring(0, 200);
							const image_l = data[i]["nft_data"][j].external_data["image"];
							const price = data[i]["nft_data"][j].token_price_wei;
				
							if ((name_l.includes("Airdrop") || name_l.includes("AIRDROP-PASS")) !== true) {
								nftList.push({ id: j+1, name_l, description_l, image_l, price, contract_address })
							}
				
						}
					}
				}		
			}
		
		} 
		catch(err) {
			console.log(err);
			nftList = []
		}
		
		return nftList;
	};

	const loadingAnime = async () => {

		setLoading(true);

		const data = await getNftData(inputValue);
		!data ? console.log("err") : setNftsList(data);

		setLoading(false);

		navigate("/nft-collection")

	};

	const loadingAnime2 = async () => {

		setLoading(true);

		const data = await getNftData(walletAddress);
		!data ? console.log("err") : setNftsList(data.slice(0, data.length / 2));

		setLoading(false);

	};

	const connectWallet = async () => {

		//check for metamask extension
		if(window.ethereum) {

			try {
				const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
				
				provider.send("eth_requestAccounts", []).then(() => {
					provider.listAccounts().then((accounts) => {
						// let signer = provider.getSigner(accounts[0]);
						// console.log(accounts[0]);
						setWalletAddress(accounts[0])
					});
				});
		
			} catch (error) {
				console.log(error);
			}

		} else {
			console.log("Metamask not found!");
		}	
	} 
	
	return (
		<Auth.Provider
			value={{
				loading, setLoading, loadingAnime, loadingAnime2,
				inputValue, setInputValue, 
				nftsList, setNftsList,
				connectWallet, walletAddress,
				getNftData
			}}
		>
		{children}
		</Auth.Provider>
	);
};

export default Auth;
