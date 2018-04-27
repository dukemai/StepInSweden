import criterias from './criterias.json';
import paperworks from './paperworks.json';
import housings from './housings.json';
import jobs from './jobs.json';
import secondHands from './secondHands.json';
import general from './general.json';
import workers from './workers.json';
import firstdays from './firstdays.json';

const suggestionsBank = [...workers, ...housings, ...jobs, ...secondHands, ...general, ...paperworks];

export { criterias, suggestionsBank, firstdays };