import criterias from './criterias.json';
import paperworks from './paperworks.json';
import housings from './housings.json';
import jobs from './jobs.json';
import secondHands from './secondHands.json';
import general from './general.json';

const suggestionsBank = [...paperworks, ...housings, ...jobs, ...secondHands, ...general];

export { criterias, suggestionsBank };