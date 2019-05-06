import ApplicationAdapter from './application';

export default class GameAdapter extends ApplicationAdapter {
	urlForUpdateRecord(id,modelName,snapshot){
		return `https://polar-basin-61192.herokuapp.com/games/${id}/start`;
	}
}
