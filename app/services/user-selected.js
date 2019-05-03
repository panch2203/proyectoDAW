import Service from '@ember/service';

export default class UserSelectedService extends Service {
  user = '';

  add(user_select){
    this.user=user_select;
  }


}
