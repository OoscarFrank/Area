import discord from '../../assets/discord.png';
import trello from '../../assets/trello.png';
import github from '../../assets/github.png';

const GetImages = (name) => {
    const images = {
        'discord': discord,
        'trello': trello,
        'github': github
    }
    return images[name.toLowerCase()];
}

export default GetImages;