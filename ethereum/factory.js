import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xE13C2cCA9445A5b41Cd7Df99856865ca001C7A6B'
);

export default instance;