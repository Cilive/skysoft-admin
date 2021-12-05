export function validateForm(id: string) {
  const form: HTMLFormElement = document.getElementById(id) as HTMLFormElement;
  form.classList.add('was-validated');
  return form.checkValidity();
}

export function clearForm(id: string) {
  const form: HTMLFormElement = document.getElementById(id) as HTMLFormElement;
  form.classList.remove('was-validated');
  form.reset();
}
import { ToastrService } from 'ngx-toastr';


