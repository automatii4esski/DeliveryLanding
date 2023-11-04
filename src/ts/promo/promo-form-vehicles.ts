import { showAlert } from '../alert';
import { formsEl } from './promo-form-tabs';

{
  //Form

  const form = formsEl[2] as HTMLFormElement;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    this.reset();
    showAlert('On vehicles form submit message');
  });
}
