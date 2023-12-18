import discord from '../../assets/discord.png';
import trello from '../../assets/trello.png';


const GetImages = (name) => {
    const images = {
        'discord': discord,
        'trello': trello,
    }
    return images[name.toLowerCase()];
}

export default GetImages;